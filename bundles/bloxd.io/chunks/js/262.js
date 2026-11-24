export const id = 262;
export const ids = [262];
export const modules = {
  40287: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => qB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(40292),
      NB = zB(40330),
      uB = zB(40264),
      UB = zB(40164);
    let aB = (() => {
      var BB;
      let jB, zB, IB, NB, aB, pB, rB, sB, JB, mB, yB, kB = [],
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        iB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [];
      return BB = class {
        constructor() {
          this.keysUp = (0, QB.g)(this, kB, [38]), this.keysUpward = ((0, QB.g)(this, GB), (0, QB.g)(this, LB, [33])), this.keysDown = ((0, QB.g)(this, gB), (0, QB.g)(this, tB, [40])), this.keysDownward = ((0, QB.g)(this, SB), (0, QB.g)(this, MB, [34])), this.keysLeft = ((0, QB.g)(this, EB), (0, QB.g)(this, iB, [37])), this.keysRight = ((0, QB.g)(this, qB), (0, QB.g)(this, fB, [39])), this.rotationSpeed = ((0, QB.g)(this, oB), (0, QB.g)(this, HB, .5)), this.keysRotateLeft = ((0, QB.g)(this, DB), (0, QB.g)(this, FB, [])), this.keysRotateRight = ((0, QB.g)(this, YB), (0, QB.g)(this, VB, [])), this.keysRotateUp = ((0, QB.g)(this, hB), (0, QB.g)(this, XB, [])), this.keysRotateDown = ((0, QB.g)(this, ZB), (0, QB.g)(this, AB, [])), this._keys = ((0, QB.g)(this, TB), new Array)
        }
        attachControl(BB) {
          BB = UB.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aY(), this._engine = this._scene.wJ(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((jB => {
            const zB = jB.event;
            if (!zB.metaKey)
              if (jB.type === uB.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(zB.keyCode) || -1 !== this.keysDown.indexOf(zB.keyCode) || -1 !== this.keysLeft.indexOf(zB.keyCode) || -1 !== this.keysRight.indexOf(zB.keyCode) || -1 !== this.keysUpward.indexOf(zB.keyCode) || -1 !== this.keysDownward.indexOf(zB.keyCode) || -1 !== this.keysRotateLeft.indexOf(zB.keyCode) || -1 !== this.keysRotateRight.indexOf(zB.keyCode) || -1 !== this.keysRotateUp.indexOf(zB.keyCode) || -1 !== this.keysRotateDown.indexOf(zB.keyCode)) {
                  -1 === this._keys.indexOf(zB.keyCode) && this._keys.push(zB.keyCode), BB || zB.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(zB.keyCode) || -1 !== this.keysDown.indexOf(zB.keyCode) || -1 !== this.keysLeft.indexOf(zB.keyCode) || -1 !== this.keysRight.indexOf(zB.keyCode) || -1 !== this.keysUpward.indexOf(zB.keyCode) || -1 !== this.keysDownward.indexOf(zB.keyCode) || -1 !== this.keysRotateLeft.indexOf(zB.keyCode) || -1 !== this.keysRotateRight.indexOf(zB.keyCode) || -1 !== this.keysRotateUp.indexOf(zB.keyCode) || -1 !== this.keysRotateDown.indexOf(zB.keyCode)) {
              const jB = this._keys.indexOf(zB.keyCode);
              jB >= 0 && this._keys.splice(jB, 1), BB || zB.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              jB = BB.movement.input,
              zB = jB.getEntry("keyboard", "translate"),
              QB = jB.getEntry("keyboard", "rotate"),
              nB = QB?.sensitivity ?? 1,
              IB = BB._localDirection.U3(0, 0, 0);
            for (let dB = 0; dB < this._keys.length; dB++) {
              const jB = this._keys[dB]; - 1 !== this.keysLeft.indexOf(jB) ? IB.x -= 1 : -1 !== this.keysUp.indexOf(jB) ? IB.z += 1 : -1 !== this.keysRight.indexOf(jB) ? IB.x += 1 : -1 !== this.keysDown.indexOf(jB) ? IB.z -= 1 : -1 !== this.keysUpward.indexOf(jB) ? IB.y += 1 : -1 !== this.keysDownward.indexOf(jB) ? IB.y -= 1 : -1 !== this.keysRotateLeft.indexOf(jB) ? QB && (BB.cameraRotation.y -= this._getLocalRotation() * nB) : -1 !== this.keysRotateRight.indexOf(jB) ? QB && (BB.cameraRotation.y += this._getLocalRotation() * nB) : -1 !== this.keysRotateUp.indexOf(jB) ? QB && (BB.cameraRotation.x -= this._getLocalRotation() * nB) : -1 !== this.keysRotateDown.indexOf(jB) && QB && (BB.cameraRotation.x += this._getLocalRotation() * nB)
            }
            if (zB && (0 !== IB.x || 0 !== IB.y || 0 !== IB.z)) {
              const jB = BB._computeLocalCameraSpeed() * (zB.sensitivity ?? 1);
              IB.normalize().scaleInPlace(jB), BB.aY().useRightHandedSystem && (IB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), dB.m.TransformNormalToRef(IB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transformedDirection)
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
          const BB = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * BB
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], yB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, jB) => {
              BB.keysUp = jB
            }
          },
          metadata: dB
        }, kB, GB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUpward" in BB,
            get: BB => BB.keysUpward,
            set: (BB, jB) => {
              BB.keysUpward = jB
            }
          },
          metadata: dB
        }, LB, gB), (0, QB.e)(null, null, IB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, jB) => {
              BB.keysDown = jB
            }
          },
          metadata: dB
        }, tB, SB), (0, QB.e)(null, null, NB, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDownward" in BB,
            get: BB => BB.keysDownward,
            set: (BB, jB) => {
              BB.keysDownward = jB
            }
          },
          metadata: dB
        }, MB, EB), (0, QB.e)(null, null, aB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, jB) => {
              BB.keysLeft = jB
            }
          },
          metadata: dB
        }, iB, qB), (0, QB.e)(null, null, pB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, jB) => {
              BB.keysRight = jB
            }
          },
          metadata: dB
        }, fB, oB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "rotationSpeed" in BB,
            get: BB => BB.rotationSpeed,
            set: (BB, jB) => {
              BB.rotationSpeed = jB
            }
          },
          metadata: dB
        }, HB, DB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateLeft" in BB,
            get: BB => BB.keysRotateLeft,
            set: (BB, jB) => {
              BB.keysRotateLeft = jB
            }
          },
          metadata: dB
        }, FB, YB), (0, QB.e)(null, null, JB, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateRight" in BB,
            get: BB => BB.keysRotateRight,
            set: (BB, jB) => {
              BB.keysRotateRight = jB
            }
          },
          metadata: dB
        }, VB, hB), (0, QB.e)(null, null, mB, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateUp" in BB,
            get: BB => BB.keysRotateUp,
            set: (BB, jB) => {
              BB.keysRotateUp = jB
            }
          },
          metadata: dB
        }, XB, ZB), (0, QB.e)(null, null, yB, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateDown" in BB,
            get: BB => BB.keysRotateDown,
            set: (BB, jB) => {
              BB.keysRotateDown = jB
            }
          },
          metadata: dB
        }, AB, TB), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB
    })();
    NB.e.FreeCameraKeyboardMoveInput = aB;
    var pB = zB(37202),
      rB = zB(40255);
    let sB = (() => {
      var BB;
      let jB, zB, dB = [],
        IB = [],
        NB = [],
        uB = [];
      return BB = class {
        _applyPointerRotation(BB, jB) {
          this._pointerConditions.button = this._currentActiveButton;
          const zB = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!zB || "rotate" !== zB.interaction) return;
          const QB = zB.Kl ?? zB.sensitivity ?? 1 / this.angularSensibility,
            nB = zB.Rl ?? zB.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += BB * QB, this.camera.cameraRotation.x += jB * nB
        }
        constructor() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = BB, this.buttons = (0, QB.g)(this, dB, [0, 1, 2]), this.angularSensibility = ((0, QB.g)(this, IB), (0, QB.g)(this, NB, 2e3)), this._pointerInput = (0, QB.g)(this, uB), this._previousPosition = null, this.onPointerMovedObservable = new pB.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(BB) {
          BB = UB.i.BackCompatCameraNoPreventDefault(arguments);
          const jB = this.camera.wJ(),
            zB = jB.getInputElement();
          this._pointerInput || (this._pointerInput = QB => {
            const nB = QB.event,
              dB = "touch" === nB.pointerType;
            if (!this.touchEnabled && dB) return;
            if (QB.type !== rB.b.POINTERMOVE && -1 === this.buttons.indexOf(nB.button)) return;
            const IB = nB.target;
            if (QB.type === rB.b.POINTERDOWN) {
              if (dB && -1 !== this._activePointerId || !dB && -1 !== this._currentActiveButton) return;
              this._activePointerId = nB.pointerId;
              try {
                IB?.setPointerCapture(nB.pointerId)
              } catch (NB) {} - 1 === this._currentActiveButton && (this._currentActiveButton = nB.button), this._previousPosition = {
                x: nB.clientX,
                y: nB.clientY
              }, BB || (nB.preventDefault(), zB && zB.focus()), jB.isPointerLock && this._onMouseMove && this._onMouseMove(QB.event)
            } else if (QB.type === rB.b.POINTERUP) {
              if (dB && this._activePointerId !== nB.pointerId || !dB && this._currentActiveButton !== nB.button) return;
              try {
                IB?.releasePointerCapture(nB.pointerId)
              } catch (NB) {}
              this._currentActiveButton = -1, this._previousPosition = null, BB || nB.preventDefault(), this._activePointerId = -1
            } else if (QB.type === rB.b.POINTERMOVE && (this._activePointerId === nB.pointerId || !dB))
              if (jB.isPointerLock && this._onMouseMove) this._onMouseMove(QB.event);
              else if (this._previousPosition) {
              const jB = this.camera._calculateHandednessMultiplier(),
                zB = (nB.clientX - this._previousPosition.x) * jB,
                QB = (nB.clientY - this._previousPosition.y) * jB;
              this._allowCameraRotation && this._applyPointerRotation(zB, QB), this.onPointerMovedObservable.notifyObservers({
                offsetX: zB,
                offsetY: QB
              }), this._previousPosition = {
                x: nB.clientX,
                y: nB.clientY
              }, BB || nB.preventDefault()
            }
          }), this._onMouseMove = zB => {
            if (!jB.isPointerLock) return;
            const QB = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(zB.movementX * QB, zB.movementY * QB), this._previousPosition = null, BB || zB.preventDefault()
          }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._pointerInput, rB.b.POINTERDOWN | rB.b.POINTERUP | rB.b.POINTERMOVE), zB && (this._contextMenuBind = BB => this.onContextMenu(BB), zB.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(BB) {
          BB.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const BB = this.camera.wJ().getInputElement();
              BB && BB.removeEventListener("contextmenu", this._contextMenuBind)
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
        const UB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: BB => "buttons" in BB,
            get: BB => BB.buttons,
            set: (BB, jB) => {
              BB.buttons = jB
            }
          },
          metadata: UB
        }, dB, IB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSensibility" in BB,
            get: BB => BB.angularSensibility,
            set: (BB, jB) => {
              BB.angularSensibility = jB
            }
          },
          metadata: UB
        }, NB, uB), UB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UB
        })
      })(), BB
    })();
    NB.e.FreeCameraMouseInput = sB;
    var JB = zB(40268);
    let mB = (() => {
      var BB;
      let jB, zB, dB, IB = [],
        NB = [],
        uB = [],
        aB = [],
        sB = [],
        mB = [];
      return BB = class {
        constructor() {
          this.wheelPrecisionX = (0, QB.g)(this, IB, 3), this.wheelPrecisionY = ((0, QB.g)(this, NB), (0, QB.g)(this, uB, 3)), this.wheelPrecisionZ = ((0, QB.g)(this, aB), (0, QB.g)(this, sB, 3)), this.onChangedObservable = ((0, QB.g)(this, mB), new pB.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(BB) {
          BB = UB.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = jB => {
            if (jB.type !== rB.b.POINTERWHEEL) return;
            const zB = jB.event,
              QB = zB.deltaMode === JB.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * QB * zB.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * QB * zB.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * QB * zB.deltaZ / this._normalize, zB.preventDefault && (BB || zB.preventDefault())
          }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._wheel, rB.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const UB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionX" in BB,
            get: BB => BB.wheelPrecisionX,
            set: (BB, jB) => {
              BB.wheelPrecisionX = jB
            }
          },
          metadata: UB
        }, IB, NB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionY" in BB,
            get: BB => BB.wheelPrecisionY,
            set: (BB, jB) => {
              BB.wheelPrecisionY = jB
            }
          },
          metadata: UB
        }, uB, aB), (0, QB.e)(null, null, dB, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionZ" in BB,
            get: BB => BB.wheelPrecisionZ,
            set: (BB, jB) => {
              BB.wheelPrecisionZ = jB
            }
          },
          metadata: UB
        }, sB, mB), UB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UB
        })
      })(), BB
    })();
    var yB;
    ! function(BB) {
      BB[BB.MoveRelative = 0] = "MoveRelative", BB[BB.RotateRelative = 1] = "RotateRelative", BB[BB.MoveScene = 2] = "MoveScene"
    }(yB || (yB = {}));
    let kB = (() => {
      var BB;
      let jB, zB, IB, NB, uB, UB, aB, pB, rB, sB = mB,
        JB = [];
      return BB = class extends sB {
        constructor() {
          super(...arguments), this.camera = (0, QB.g)(this, JB), this._moveRelative = dB.m.Zero(), this._rotateRelative = dB.m.Zero(), this._moveScene = dB.m.Zero(), this._wheelXAction = yB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yB.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(BB) {
          null === BB && this._wheelXAction !== yB.MoveRelative || (this._wheelXAction = yB.MoveRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== yB.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(BB) {
          null === BB && this._wheelYAction !== yB.MoveRelative || (this._wheelYAction = yB.MoveRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== yB.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(BB) {
          null === BB && this._wheelZAction !== yB.MoveRelative || (this._wheelZAction = yB.MoveRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== yB.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(BB) {
          null === BB && this._wheelXAction !== yB.RotateRelative || (this._wheelXAction = yB.RotateRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== yB.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(BB) {
          null === BB && this._wheelYAction !== yB.RotateRelative || (this._wheelYAction = yB.RotateRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== yB.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(BB) {
          null === BB && this._wheelZAction !== yB.RotateRelative || (this._wheelZAction = yB.RotateRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== yB.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(BB) {
          null === BB && this._wheelXAction !== yB.MoveScene || (this._wheelXAction = yB.MoveScene, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== yB.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(BB) {
          null === BB && this._wheelYAction !== yB.MoveScene || (this._wheelYAction = yB.MoveScene, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== yB.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(BB) {
          null === BB && this._wheelZAction !== yB.MoveScene || (this._wheelZAction = yB.MoveScene, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== yB.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.S_(0), this._rotateRelative.S_(0), this._moveScene.S_(0), this._updateCamera(), this.camera.aY().useRightHandedSystem && (this._moveRelative.z *= -1);
          const BB = dB.c.Zero();
          this.camera.getViewMatrix().invertToRef(BB);
          const jB = dB.m.Zero();
          dB.m.TransformNormalToRef(this._moveRelative, BB, jB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(jB), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(BB, jB, zB) {
          if (0 === BB) return;
          if (null === jB || null === zB) return;
          let QB = null;
          switch (jB) {
            case yB.MoveRelative:
              QB = this._moveRelative;
              break;
            case yB.RotateRelative:
              QB = this._rotateRelative;
              break;
            case yB.MoveScene:
              QB = this._moveScene
          }
          switch (zB) {
            case 0:
              QB.set(BB, 0, 0);
              break;
            case 1:
              QB.set(0, BB, 0);
              break;
            case 2:
              QB.set(0, 0, BB)
          }
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(sB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], (0, QB.e)(BB, null, jB, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveRelative" in BB,
            set: (BB, jB) => {
              BB.wheelXMoveRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, zB, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveRelative" in BB,
            set: (BB, jB) => {
              BB.wheelYMoveRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, IB, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveRelative" in BB,
            set: (BB, jB) => {
              BB.wheelZMoveRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, NB, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXRotateRelative" in BB,
            set: (BB, jB) => {
              BB.wheelXRotateRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, uB, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYRotateRelative" in BB,
            set: (BB, jB) => {
              BB.wheelYRotateRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, UB, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZRotateRelative" in BB,
            set: (BB, jB) => {
              BB.wheelZRotateRelative = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, aB, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveScene" in BB,
            set: (BB, jB) => {
              BB.wheelXMoveScene = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, pB, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveScene" in BB,
            set: (BB, jB) => {
              BB.wheelYMoveScene = jB
            }
          },
          metadata: dB
        }, null, JB), (0, QB.e)(BB, null, rB, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveScene" in BB,
            set: (BB, jB) => {
              BB.wheelZMoveScene = jB
            }
          },
          metadata: dB
        }, null, JB), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB
    })();
    NB.e.FreeCameraMouseWheelInput = kB;
    let GB = (() => {
      var BB;
      let jB, zB, IB = [],
        NB = [],
        uB = [],
        aB = [];
      return BB = class {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = BB, this.touchAngularSensibility = (0, QB.g)(this, IB, 2e5), this.touchMoveSensibility = ((0, QB.g)(this, NB), (0, QB.g)(this, uB, 250)), this.singleFingerRotate = ((0, QB.g)(this, aB), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = UB.i.IsSafari()
        }
        attachControl(BB) {
          BB = UB.i.BackCompatCameraNoPreventDefault(arguments);
          let jB = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = zB => {
              const QB = zB.event,
                nB = "mouse" === QB.pointerType || this._isSafari && "undefined" === typeof QB.pointerType;
              if (this.allowMouse || !nB)
                if (zB.type === rB.b.POINTERDOWN) {
                  if (BB || QB.preventDefault(), this._pointerPressed.push(QB.pointerId), 1 !== this._pointerPressed.length) return;
                  jB = {
                    x: QB.clientX,
                    y: QB.clientY
                  }
                } else if (zB.type === rB.b.POINTERUP) {
                BB || QB.preventDefault();
                const zB = this._pointerPressed.indexOf(QB.pointerId);
                if (-1 === zB) return;
                if (this._pointerPressed.splice(zB, 1), 0 != zB) return;
                jB = null, this._offsetX = null, this._offsetY = null
              } else if (zB.type === rB.b.POINTERMOVE) {
                if (BB || QB.preventDefault(), !jB) return;
                if (0 != this._pointerPressed.indexOf(QB.pointerId)) return;
                this._offsetX = QB.clientX - jB.x, this._offsetY = -(QB.clientY - jB.y)
              }
            }), this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._pointerInput, rB.b.POINTERDOWN | rB.b.POINTERUP | rB.b.POINTERMOVE), this._onLostFocus) {
            const BB = this.camera.wJ().getInputElement();
            BB && BB.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const BB = this.camera.wJ().getInputElement();
              BB && BB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const BB = this.camera,
            jB = BB.movement.input,
            zB = jB.getEntry("touch", "rotate"),
            QB = jB.getEntry("touch", "translate"),
            nB = BB._calculateHandednessMultiplier(),
            IB = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (zB) {
            const jB = zB.sensitivity ?? 1 / this.touchAngularSensibility;
            BB.cameraRotation.y = this._offsetX * nB * jB, IB && (BB.cameraRotation.x = -this._offsetY * nB * jB)
          }
          if (!IB && QB) {
            const jB = BB._computeLocalCameraSpeed(),
              zB = QB.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              nB = dB.h.KJ[0];
            nB.U3(0, 0, jB * this._offsetY * zB), dB.c.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), dB.m.TransformCoordinatesToRef(nB, BB._cameraRotationMatrix, nB), BB.cameraDirection.addInPlace(nB)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchAngularSensibility" in BB,
            get: BB => BB.touchAngularSensibility,
            set: (BB, jB) => {
              BB.touchAngularSensibility = jB
            }
          },
          metadata: dB
        }, IB, NB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchMoveSensibility" in BB,
            get: BB => BB.touchMoveSensibility,
            set: (BB, jB) => {
              BB.touchMoveSensibility = jB
            }
          },
          metadata: dB
        }, uB, aB), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB
    })();
    NB.e.FreeCameraTouchInput = GB;
    var LB, gB, tB, SB = zB(39965);
    class MB extends NB.f {
      constructor(BB) {
        super(BB), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new aB), this
      }
      addMouse() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new sB(BB), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new kB, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new GB), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(LB = MB.prototype).addDeviceOrientation ?? (LB.addDeviceOrientation = (0, SB.i)("FreeCameraInputsManager", "addDeviceOrientation")), (gB = MB.prototype).addVirtualJoystick ?? (gB.addVirtualJoystick = (0, SB.i)("FreeCameraInputsManager", "addVirtualJoystick")), (tB = MB.prototype).addGamepad ?? (tB.addGamepad = (0, SB.i)("FreeCameraInputsManager", "addGamepad"));
    var EB = zB(39980),
      iB = zB(37222);
    let qB = (() => {
        var BB;
        let jB, zB, NB, uB, aB = IB.g,
          pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [],
          kB = [],
          GB = [];
        return BB = class extends aB {
          get angularSensibility() {
            const BB = this.inputs.attached.mouse;
            return BB ? BB.angularSensibility : 0
          }
          set angularSensibility(BB) {
            const jB = this.inputs.attached.mouse;
            jB && (jB.angularSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysUp = BB)
          }
          get keysUpward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUpward : []
          }
          set keysUpward(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysUpward = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysDown = BB)
          }
          get keysDownward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDownward : []
          }
          set keysDownward(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysDownward = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRight = BB)
          }
          get keysRotateLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateLeft : []
          }
          set keysRotateLeft(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRotateLeft = BB)
          }
          get keysRotateRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateRight : []
          }
          set keysRotateRight(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRotateRight = BB)
          }
          get keysRotateUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateUp : []
          }
          set keysRotateUp(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRotateUp = BB)
          }
          get keysRotateDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateDown : []
          }
          set keysRotateDown(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRotateDown = BB)
          }
          constructor(BB, jB, zB) {
            var nB;
            super(BB, jB, zB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), nB = this, this.ellipsoid = (0, QB.g)(this, pB, new dB.m(.5, 1, .5)), this.ellipsoidOffset = ((0, QB.g)(this, rB), (0, QB.g)(this, sB, new dB.m(0, 0, 0))), this.checkCollisions = ((0, QB.g)(this, JB), (0, QB.g)(this, mB, !1)), this.applyGravity = ((0, QB.g)(this, yB), (0, QB.g)(this, kB, !1)), this.inputs = (0, QB.g)(this, GB), this._needMoveForGravity = !1, this._oldPosition = dB.m.Zero(), this._diffPosition = dB.m.Zero(), this._newPosition = dB.m.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(BB, jB) {
              let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              nB._newPosition.jH(jB), nB._newPosition.subtractToRef(nB._oldPosition, nB._diffPosition), nB._diffPosition.length() > EB.c.CollisionsEpsilon && (nB.position.addToRef(nB._diffPosition, nB._deferredPositionUpdate), nB._deferOnly ? nB._deferredUpdated = !0 : nB.position.jH(nB._deferredPositionUpdate), nB.Jr && zB && nB.Jr(zB))
            }, this.inputs = new MB(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(BB, jB) {
            jB = UB.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(jB)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new dB.m(0, 0, 0), this.cameraRotation = new dB.i(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(BB) {
            this._collisionMask = isNaN(BB) ? -1 : BB
          }
          _collideWithWorld(BB) {
            let jB;
            jB = this.parent ? dB.m.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, jB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const zB = this.aY().collisionCoordinator;
            this._collider || (this._collider = zB.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let QB = BB;
            this.applyGravity && (QB = BB.add(this.aY().gravity)), zB.getNewPosition(this._oldPosition, QB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = dB.m.Zero(), this._transformedDirection = dB.m.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(BB) {
            this._needMoveForGravity = BB
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.aY().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(aB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.x)()], zB = [(0, nB.x)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoid" in BB,
              get: BB => BB.ellipsoid,
              set: (BB, jB) => {
                BB.ellipsoid = jB
              }
            },
            metadata: dB
          }, pB, rB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoidOffset" in BB,
              get: BB => BB.ellipsoidOffset,
              set: (BB, jB) => {
                BB.ellipsoidOffset = jB
              }
            },
            metadata: dB
          }, sB, JB), (0, QB.e)(null, null, NB, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: BB => "checkCollisions" in BB,
              get: BB => BB.checkCollisions,
              set: (BB, jB) => {
                BB.checkCollisions = jB
              }
            },
            metadata: dB
          }, mB, yB), (0, QB.e)(null, null, uB, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyGravity" in BB,
              get: BB => BB.applyGravity,
              set: (BB, jB) => {
                BB.applyGravity = jB
              }
            },
            metadata: dB
          }, kB, GB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      fB = !1;
    fB || (fB = !0, (0, iB.d)("BABYLON.FreeCamera", qB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
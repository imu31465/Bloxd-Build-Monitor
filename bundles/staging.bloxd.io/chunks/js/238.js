export const id = 238;
export const ids = [238];
export const modules = {
  38963: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => zB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(38968),
      JB = dB(38992),
      YB = dB(38938),
      gB = dB(38848);
    let oB = (() => {
      var BB;
      let TB, dB, lB, JB, oB, kB, LB, OB, DB, uB, HB, EB = [],
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        MB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [];
      return BB = class {
        constructor() {
          this.keysUp = (0, VB.h)(this, EB, [38]), this.keysUpward = ((0, VB.h)(this, vB), (0, VB.h)(this, mB, [33])), this.keysDown = ((0, VB.h)(this, iB), (0, VB.h)(this, NB, [40])), this.keysDownward = ((0, VB.h)(this, tB), (0, VB.h)(this, fB, [34])), this.keysLeft = ((0, VB.h)(this, sB), (0, VB.h)(this, MB, [37])), this.keysRight = ((0, VB.h)(this, zB), (0, VB.h)(this, wB, [39])), this.rotationSpeed = ((0, VB.h)(this, UB), (0, VB.h)(this, FB, .5)), this.keysRotateLeft = ((0, VB.h)(this, KB), (0, VB.h)(this, rB, [])), this.keysRotateRight = ((0, VB.h)(this, IB), (0, VB.h)(this, cB, [])), this.keysRotateUp = ((0, VB.h)(this, SB), (0, VB.h)(this, PB, [])), this.keysRotateDown = ((0, VB.h)(this, QB), (0, VB.h)(this, RB, [])), this._keys = ((0, VB.h)(this, aB), new Array)
        }
        attachControl(BB) {
          BB = gB.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.jU(), this._engine = this._scene.PD(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((TB => {
            const dB = TB.event;
            if (!dB.metaKey)
              if (TB.type === YB.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(dB.keyCode) || -1 !== this.keysDown.indexOf(dB.keyCode) || -1 !== this.keysLeft.indexOf(dB.keyCode) || -1 !== this.keysRight.indexOf(dB.keyCode) || -1 !== this.keysUpward.indexOf(dB.keyCode) || -1 !== this.keysDownward.indexOf(dB.keyCode) || -1 !== this.keysRotateLeft.indexOf(dB.keyCode) || -1 !== this.keysRotateRight.indexOf(dB.keyCode) || -1 !== this.keysRotateUp.indexOf(dB.keyCode) || -1 !== this.keysRotateDown.indexOf(dB.keyCode)) {
                  -1 === this._keys.indexOf(dB.keyCode) && this._keys.push(dB.keyCode), BB || dB.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(dB.keyCode) || -1 !== this.keysDown.indexOf(dB.keyCode) || -1 !== this.keysLeft.indexOf(dB.keyCode) || -1 !== this.keysRight.indexOf(dB.keyCode) || -1 !== this.keysUpward.indexOf(dB.keyCode) || -1 !== this.keysDownward.indexOf(dB.keyCode) || -1 !== this.keysRotateLeft.indexOf(dB.keyCode) || -1 !== this.keysRotateRight.indexOf(dB.keyCode) || -1 !== this.keysRotateUp.indexOf(dB.keyCode) || -1 !== this.keysRotateDown.indexOf(dB.keyCode)) {
              const TB = this._keys.indexOf(dB.keyCode);
              TB >= 0 && this._keys.splice(TB, 1), BB || dB.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              TB = BB.movement.input,
              dB = TB.getEntry("keyboard", "translate"),
              VB = TB.getEntry("keyboard", "rotate"),
              yB = VB?.sensitivity ?? 1,
              lB = BB._localDirection.YBB(0, 0, 0);
            for (let pB = 0; pB < this._keys.length; pB++) {
              const TB = this._keys[pB]; - 1 !== this.keysLeft.indexOf(TB) ? lB.x -= 1 : -1 !== this.keysUp.indexOf(TB) ? lB.z += 1 : -1 !== this.keysRight.indexOf(TB) ? lB.x += 1 : -1 !== this.keysDown.indexOf(TB) ? lB.z -= 1 : -1 !== this.keysUpward.indexOf(TB) ? lB.y += 1 : -1 !== this.keysDownward.indexOf(TB) ? lB.y -= 1 : -1 !== this.keysRotateLeft.indexOf(TB) ? VB && (BB.cameraRotation.y -= this._getLocalRotation() * yB) : -1 !== this.keysRotateRight.indexOf(TB) ? VB && (BB.cameraRotation.y += this._getLocalRotation() * yB) : -1 !== this.keysRotateUp.indexOf(TB) ? VB && (BB.cameraRotation.x -= this._getLocalRotation() * yB) : -1 !== this.keysRotateDown.indexOf(TB) && VB && (BB.cameraRotation.x += this._getLocalRotation() * yB)
            }
            if (dB && (0 !== lB.x || 0 !== lB.y || 0 !== lB.z)) {
              const TB = BB._computeLocalCameraSpeed() * (dB.sensitivity ?? 1);
              lB.normalize().scaleInPlace(TB), BB.jU().useRightHandedSystem && (lB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), pB.p.TransformNormalToRef(lB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transformedDirection)
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
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], lB = [(0, yB.W)()], JB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.W)()], LB = [(0, yB.W)()], OB = [(0, yB.W)()], DB = [(0, yB.W)()], uB = [(0, yB.W)()], HB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, TB) => {
              BB.keysUp = TB
            }
          },
          metadata: pB
        }, EB, vB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUpward" in BB,
            get: BB => BB.keysUpward,
            set: (BB, TB) => {
              BB.keysUpward = TB
            }
          },
          metadata: pB
        }, mB, iB), (0, VB.g)(null, null, lB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, TB) => {
              BB.keysDown = TB
            }
          },
          metadata: pB
        }, NB, tB), (0, VB.g)(null, null, JB, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDownward" in BB,
            get: BB => BB.keysDownward,
            set: (BB, TB) => {
              BB.keysDownward = TB
            }
          },
          metadata: pB
        }, fB, sB), (0, VB.g)(null, null, oB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, TB) => {
              BB.keysLeft = TB
            }
          },
          metadata: pB
        }, MB, zB), (0, VB.g)(null, null, kB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, TB) => {
              BB.keysRight = TB
            }
          },
          metadata: pB
        }, wB, UB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "rotationSpeed" in BB,
            get: BB => BB.rotationSpeed,
            set: (BB, TB) => {
              BB.rotationSpeed = TB
            }
          },
          metadata: pB
        }, FB, KB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateLeft" in BB,
            get: BB => BB.keysRotateLeft,
            set: (BB, TB) => {
              BB.keysRotateLeft = TB
            }
          },
          metadata: pB
        }, rB, IB), (0, VB.g)(null, null, DB, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateRight" in BB,
            get: BB => BB.keysRotateRight,
            set: (BB, TB) => {
              BB.keysRotateRight = TB
            }
          },
          metadata: pB
        }, cB, SB), (0, VB.g)(null, null, uB, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateUp" in BB,
            get: BB => BB.keysRotateUp,
            set: (BB, TB) => {
              BB.keysRotateUp = TB
            }
          },
          metadata: pB
        }, PB, QB), (0, VB.g)(null, null, HB, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateDown" in BB,
            get: BB => BB.keysRotateDown,
            set: (BB, TB) => {
              BB.keysRotateDown = TB
            }
          },
          metadata: pB
        }, RB, aB), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB
    })();
    JB.c.FreeCameraKeyboardMoveInput = oB;
    var kB = dB(36150),
      LB = dB(38930);
    let OB = (() => {
      var BB;
      let TB, dB, pB = [],
        lB = [],
        JB = [],
        YB = [];
      return BB = class {
        _applyPointerRotation(BB, TB) {
          this._pointerConditions.button = this._currentActiveButton;
          const dB = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!dB || "rotate" !== dB.interaction) return;
          const VB = dB.eC ?? dB.sensitivity ?? 1 / this.angularSensibility,
            yB = dB.yG ?? dB.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += BB * VB, this.camera.cameraRotation.x += TB * yB
        }
        constructor() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = BB, this.buttons = (0, VB.h)(this, pB, [0, 1, 2]), this.angularSensibility = ((0, VB.h)(this, lB), (0, VB.h)(this, JB, 2e3)), this._pointerInput = (0, VB.h)(this, YB), this._previousPosition = null, this.onPointerMovedObservable = new kB.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(BB) {
          BB = gB.h.BackCompatCameraNoPreventDefault(arguments);
          const TB = this.camera.PD(),
            dB = TB.getInputElement();
          this._pointerInput || (this._pointerInput = VB => {
            const yB = VB.event,
              pB = "touch" === yB.pointerType;
            if (!this.touchEnabled && pB) return;
            if (VB.type !== LB.d.POINTERMOVE && -1 === this.buttons.indexOf(yB.button)) return;
            const lB = yB.target;
            if (VB.type === LB.d.POINTERDOWN) {
              if (pB && -1 !== this._activePointerId || !pB && -1 !== this._currentActiveButton) return;
              this._activePointerId = yB.pointerId;
              try {
                lB?.setPointerCapture(yB.pointerId)
              } catch (JB) {} - 1 === this._currentActiveButton && (this._currentActiveButton = yB.button), this._previousPosition = {
                x: yB.clientX,
                y: yB.clientY
              }, BB || (yB.preventDefault(), dB && dB.focus()), TB.isPointerLock && this._onMouseMove && this._onMouseMove(VB.event)
            } else if (VB.type === LB.d.POINTERUP) {
              if (pB && this._activePointerId !== yB.pointerId || !pB && this._currentActiveButton !== yB.button) return;
              try {
                lB?.releasePointerCapture(yB.pointerId)
              } catch (JB) {}
              this._currentActiveButton = -1, this._previousPosition = null, BB || yB.preventDefault(), this._activePointerId = -1
            } else if (VB.type === LB.d.POINTERMOVE && (this._activePointerId === yB.pointerId || !pB))
              if (TB.isPointerLock && this._onMouseMove) this._onMouseMove(VB.event);
              else if (this._previousPosition) {
              const TB = this.camera._calculateHandednessMultiplier(),
                dB = (yB.clientX - this._previousPosition.x) * TB,
                VB = (yB.clientY - this._previousPosition.y) * TB;
              this._allowCameraRotation && this._applyPointerRotation(dB, VB), this.onPointerMovedObservable.notifyObservers({
                offsetX: dB,
                offsetY: VB
              }), this._previousPosition = {
                x: yB.clientX,
                y: yB.clientY
              }, BB || yB.preventDefault()
            }
          }), this._onMouseMove = dB => {
            if (!TB.isPointerLock) return;
            const VB = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(dB.movementX * VB, dB.movementY * VB), this._previousPosition = null, BB || dB.preventDefault()
          }, this._observer = this.camera.jU()._inputManager._addCameraPointerObserver(this._pointerInput, LB.d.POINTERDOWN | LB.d.POINTERUP | LB.d.POINTERMOVE), dB && (this._contextMenuBind = BB => this.onContextMenu(BB), dB.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(BB) {
          BB.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.jU()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const BB = this.camera.PD().getInputElement();
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
        const gB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: BB => "buttons" in BB,
            get: BB => BB.buttons,
            set: (BB, TB) => {
              BB.buttons = TB
            }
          },
          metadata: gB
        }, pB, lB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSensibility" in BB,
            get: BB => BB.angularSensibility,
            set: (BB, TB) => {
              BB.angularSensibility = TB
            }
          },
          metadata: gB
        }, JB, YB), gB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gB
        })
      })(), BB
    })();
    JB.c.FreeCameraMouseInput = OB;
    var DB = dB(38946);
    let uB = (() => {
      var BB;
      let TB, dB, pB, lB = [],
        JB = [],
        YB = [],
        oB = [],
        OB = [],
        uB = [];
      return BB = class {
        constructor() {
          this.wheelPrecisionX = (0, VB.h)(this, lB, 3), this.wheelPrecisionY = ((0, VB.h)(this, JB), (0, VB.h)(this, YB, 3)), this.wheelPrecisionZ = ((0, VB.h)(this, oB), (0, VB.h)(this, OB, 3)), this.onChangedObservable = ((0, VB.h)(this, uB), new kB.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(BB) {
          BB = gB.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = TB => {
            if (TB.type !== LB.d.POINTERWHEEL) return;
            const dB = TB.event,
              VB = dB.deltaMode === DB.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * VB * dB.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * VB * dB.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * VB * dB.deltaZ / this._normalize, dB.preventDefault && (BB || dB.preventDefault())
          }, this._observer = this.camera.jU()._inputManager._addCameraPointerObserver(this._wheel, LB.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.jU()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const gB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionX" in BB,
            get: BB => BB.wheelPrecisionX,
            set: (BB, TB) => {
              BB.wheelPrecisionX = TB
            }
          },
          metadata: gB
        }, lB, JB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionY" in BB,
            get: BB => BB.wheelPrecisionY,
            set: (BB, TB) => {
              BB.wheelPrecisionY = TB
            }
          },
          metadata: gB
        }, YB, oB), (0, VB.g)(null, null, pB, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionZ" in BB,
            get: BB => BB.wheelPrecisionZ,
            set: (BB, TB) => {
              BB.wheelPrecisionZ = TB
            }
          },
          metadata: gB
        }, OB, uB), gB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gB
        })
      })(), BB
    })();
    var HB;
    ! function(BB) {
      BB[BB.MoveRelative = 0] = "MoveRelative", BB[BB.RotateRelative = 1] = "RotateRelative", BB[BB.MoveScene = 2] = "MoveScene"
    }(HB || (HB = {}));
    let EB = (() => {
      var BB;
      let TB, dB, lB, JB, YB, gB, oB, kB, LB, OB = uB,
        DB = [];
      return BB = class extends OB {
        constructor() {
          super(...arguments), this.camera = (0, VB.h)(this, DB), this._moveRelative = pB.p.Zero(), this._rotateRelative = pB.p.Zero(), this._moveScene = pB.p.Zero(), this._wheelXAction = HB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = HB.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(BB) {
          null === BB && this._wheelXAction !== HB.MoveRelative || (this._wheelXAction = HB.MoveRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== HB.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(BB) {
          null === BB && this._wheelYAction !== HB.MoveRelative || (this._wheelYAction = HB.MoveRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== HB.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(BB) {
          null === BB && this._wheelZAction !== HB.MoveRelative || (this._wheelZAction = HB.MoveRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== HB.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(BB) {
          null === BB && this._wheelXAction !== HB.RotateRelative || (this._wheelXAction = HB.RotateRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== HB.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(BB) {
          null === BB && this._wheelYAction !== HB.RotateRelative || (this._wheelYAction = HB.RotateRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== HB.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(BB) {
          null === BB && this._wheelZAction !== HB.RotateRelative || (this._wheelZAction = HB.RotateRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== HB.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(BB) {
          null === BB && this._wheelXAction !== HB.MoveScene || (this._wheelXAction = HB.MoveScene, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== HB.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(BB) {
          null === BB && this._wheelYAction !== HB.MoveScene || (this._wheelYAction = HB.MoveScene, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== HB.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(BB) {
          null === BB && this._wheelZAction !== HB.MoveScene || (this._wheelZAction = HB.MoveScene, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== HB.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.A4(0), this._rotateRelative.A4(0), this._moveScene.A4(0), this._updateCamera(), this.camera.jU().useRightHandedSystem && (this._moveRelative.z *= -1);
          const BB = pB.b.Zero();
          this.camera.getViewMatrix().invertToRef(BB);
          const TB = pB.p.Zero();
          pB.p.TransformNormalToRef(this._moveRelative, BB, TB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(TB), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(BB, TB, dB) {
          if (0 === BB) return;
          if (null === TB || null === dB) return;
          let VB = null;
          switch (TB) {
            case HB.MoveRelative:
              VB = this._moveRelative;
              break;
            case HB.RotateRelative:
              VB = this._rotateRelative;
              break;
            case HB.MoveScene:
              VB = this._moveScene
          }
          switch (dB) {
            case 0:
              VB.set(BB, 0, 0);
              break;
            case 1:
              VB.set(0, BB, 0);
              break;
            case 2:
              VB.set(0, 0, BB)
          }
        }
      }, (() => {
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(OB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], lB = [(0, yB.W)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.W)()], LB = [(0, yB.W)()], (0, VB.g)(BB, null, TB, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveRelative" in BB,
            set: (BB, TB) => {
              BB.wheelXMoveRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, dB, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveRelative" in BB,
            set: (BB, TB) => {
              BB.wheelYMoveRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, lB, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveRelative" in BB,
            set: (BB, TB) => {
              BB.wheelZMoveRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, JB, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXRotateRelative" in BB,
            set: (BB, TB) => {
              BB.wheelXRotateRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, YB, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYRotateRelative" in BB,
            set: (BB, TB) => {
              BB.wheelYRotateRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, gB, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZRotateRelative" in BB,
            set: (BB, TB) => {
              BB.wheelZRotateRelative = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, oB, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveScene" in BB,
            set: (BB, TB) => {
              BB.wheelXMoveScene = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, kB, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveScene" in BB,
            set: (BB, TB) => {
              BB.wheelYMoveScene = TB
            }
          },
          metadata: pB
        }, null, DB), (0, VB.g)(BB, null, LB, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveScene" in BB,
            set: (BB, TB) => {
              BB.wheelZMoveScene = TB
            }
          },
          metadata: pB
        }, null, DB), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB
    })();
    JB.c.FreeCameraMouseWheelInput = EB;
    let vB = (() => {
      var BB;
      let TB, dB, lB = [],
        JB = [],
        YB = [],
        oB = [];
      return BB = class {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = BB, this.touchAngularSensibility = (0, VB.h)(this, lB, 2e5), this.touchMoveSensibility = ((0, VB.h)(this, JB), (0, VB.h)(this, YB, 250)), this.singleFingerRotate = ((0, VB.h)(this, oB), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = gB.h.IsSafari()
        }
        attachControl(BB) {
          BB = gB.h.BackCompatCameraNoPreventDefault(arguments);
          let TB = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = dB => {
              const VB = dB.event,
                yB = "mouse" === VB.pointerType || this._isSafari && "undefined" === typeof VB.pointerType;
              if (this.allowMouse || !yB)
                if (dB.type === LB.d.POINTERDOWN) {
                  if (BB || VB.preventDefault(), this._pointerPressed.push(VB.pointerId), 1 !== this._pointerPressed.length) return;
                  TB = {
                    x: VB.clientX,
                    y: VB.clientY
                  }
                } else if (dB.type === LB.d.POINTERUP) {
                BB || VB.preventDefault();
                const dB = this._pointerPressed.indexOf(VB.pointerId);
                if (-1 === dB) return;
                if (this._pointerPressed.splice(dB, 1), 0 != dB) return;
                TB = null, this._offsetX = null, this._offsetY = null
              } else if (dB.type === LB.d.POINTERMOVE) {
                if (BB || VB.preventDefault(), !TB) return;
                if (0 != this._pointerPressed.indexOf(VB.pointerId)) return;
                this._offsetX = VB.clientX - TB.x, this._offsetY = -(VB.clientY - TB.y)
              }
            }), this._observer = this.camera.jU()._inputManager._addCameraPointerObserver(this._pointerInput, LB.d.POINTERDOWN | LB.d.POINTERUP | LB.d.POINTERMOVE), this._onLostFocus) {
            const BB = this.camera.PD().getInputElement();
            BB && BB.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.jU()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const BB = this.camera.PD().getInputElement();
              BB && BB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const BB = this.camera,
            TB = BB.movement.input,
            dB = TB.getEntry("touch", "rotate"),
            VB = TB.getEntry("touch", "translate"),
            yB = BB._calculateHandednessMultiplier(),
            lB = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (dB) {
            const TB = dB.sensitivity ?? 1 / this.touchAngularSensibility;
            BB.cameraRotation.y = this._offsetX * yB * TB, lB && (BB.cameraRotation.x = -this._offsetY * yB * TB)
          }
          if (!lB && VB) {
            const TB = BB._computeLocalCameraSpeed(),
              dB = VB.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              yB = pB.j.RD[0];
            yB.YBB(0, 0, TB * this._offsetY * dB), pB.b.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), pB.p.TransformCoordinatesToRef(yB, BB._cameraRotationMatrix, yB), BB.cameraDirection.addInPlace(yB)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchAngularSensibility" in BB,
            get: BB => BB.touchAngularSensibility,
            set: (BB, TB) => {
              BB.touchAngularSensibility = TB
            }
          },
          metadata: pB
        }, lB, JB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchMoveSensibility" in BB,
            get: BB => BB.touchMoveSensibility,
            set: (BB, TB) => {
              BB.touchMoveSensibility = TB
            }
          },
          metadata: pB
        }, YB, oB), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB
    })();
    JB.c.FreeCameraTouchInput = vB;
    var mB, iB, NB, tB = dB(38629);
    class fB extends JB.g {
      constructor(BB) {
        super(BB), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new oB), this
      }
      addMouse() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new OB(BB), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new EB, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new vB), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(mB = fB.prototype).addDeviceOrientation ?? (mB.addDeviceOrientation = (0, tB.h)("FreeCameraInputsManager", "addDeviceOrientation")), (iB = fB.prototype).addVirtualJoystick ?? (iB.addVirtualJoystick = (0, tB.h)("FreeCameraInputsManager", "addVirtualJoystick")), (NB = fB.prototype).addGamepad ?? (NB.addGamepad = (0, tB.h)("FreeCameraInputsManager", "addGamepad"));
    var sB = dB(38652),
      MB = dB(36166);
    let zB = (() => {
        var BB;
        let TB, dB, JB, YB, oB = lB.h,
          kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [],
          EB = [],
          vB = [];
        return BB = class extends oB {
          get angularSensibility() {
            const BB = this.inputs.attached.mouse;
            return BB ? BB.angularSensibility : 0
          }
          set angularSensibility(BB) {
            const TB = this.inputs.attached.mouse;
            TB && (TB.angularSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysUp = BB)
          }
          get keysUpward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUpward : []
          }
          set keysUpward(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysUpward = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysDown = BB)
          }
          get keysDownward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDownward : []
          }
          set keysDownward(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysDownward = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRight = BB)
          }
          get keysRotateLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateLeft : []
          }
          set keysRotateLeft(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRotateLeft = BB)
          }
          get keysRotateRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateRight : []
          }
          set keysRotateRight(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRotateRight = BB)
          }
          get keysRotateUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateUp : []
          }
          set keysRotateUp(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRotateUp = BB)
          }
          get keysRotateDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateDown : []
          }
          set keysRotateDown(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRotateDown = BB)
          }
          constructor(BB, TB, dB) {
            var yB;
            super(BB, TB, dB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), yB = this, this.ellipsoid = (0, VB.h)(this, kB, new pB.p(.5, 1, .5)), this.ellipsoidOffset = ((0, VB.h)(this, LB), (0, VB.h)(this, OB, new pB.p(0, 0, 0))), this.checkCollisions = ((0, VB.h)(this, DB), (0, VB.h)(this, uB, !1)), this.applyGravity = ((0, VB.h)(this, HB), (0, VB.h)(this, EB, !1)), this.inputs = (0, VB.h)(this, vB), this._needMoveForGravity = !1, this._oldPosition = pB.p.Zero(), this._diffPosition = pB.p.Zero(), this._newPosition = pB.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(BB, TB) {
              let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              yB._newPosition.bdB(TB), yB._newPosition.subtractToRef(yB._oldPosition, yB._diffPosition), yB._diffPosition.length() > sB.c.CollisionsEpsilon && (yB.position.addToRef(yB._diffPosition, yB._deferredPositionUpdate), yB._deferOnly ? yB._deferredUpdated = !0 : yB.position.bdB(yB._deferredPositionUpdate), yB.vL && dB && yB.vL(dB))
            }, this.inputs = new fB(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(BB, TB) {
            TB = gB.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(TB)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new pB.p(0, 0, 0), this.cameraRotation = new pB.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(BB) {
            this._collisionMask = isNaN(BB) ? -1 : BB
          }
          _collideWithWorld(BB) {
            let TB;
            TB = this.parent ? pB.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, TB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const dB = this.jU().collisionCoordinator;
            this._collider || (this._collider = dB.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let VB = BB;
            this.applyGravity && (VB = BB.add(this.jU().gravity)), dB.getNewPosition(this._oldPosition, VB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = pB.p.Zero(), this._transformedDirection = pB.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.jU().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(oB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.T)()], dB = [(0, yB.T)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoid" in BB,
              get: BB => BB.ellipsoid,
              set: (BB, TB) => {
                BB.ellipsoid = TB
              }
            },
            metadata: pB
          }, kB, LB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoidOffset" in BB,
              get: BB => BB.ellipsoidOffset,
              set: (BB, TB) => {
                BB.ellipsoidOffset = TB
              }
            },
            metadata: pB
          }, OB, DB), (0, VB.g)(null, null, JB, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: BB => "checkCollisions" in BB,
              get: BB => BB.checkCollisions,
              set: (BB, TB) => {
                BB.checkCollisions = TB
              }
            },
            metadata: pB
          }, uB, HB), (0, VB.g)(null, null, YB, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyGravity" in BB,
              get: BB => BB.applyGravity,
              set: (BB, TB) => {
                BB.applyGravity = TB
              }
            },
            metadata: pB
          }, EB, vB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      wB = !1;
    wB || (wB = !0, (0, MB.g)("BABYLON.FreeCamera", zB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 262;
export const ids = [262];
export const modules = {
  40253: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => YB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(40261),
      vB = ZB(40291),
      kB = ZB(40226),
      cB = ZB(40152);
    let nB = (() => {
      var BB;
      let IB, ZB, GB, vB, nB, hB, zB, FB, NB, gB, qB, yB = [],
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        OB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [];
      return BB = class {
        constructor() {
          this.keysUp = (0, TB.l)(this, yB, [38]), this.keysUpward = ((0, TB.l)(this, UB), (0, TB.l)(this, WB, [33])), this.keysDown = ((0, TB.l)(this, dB), (0, TB.l)(this, CB, [40])), this.keysDownward = ((0, TB.l)(this, QB), (0, TB.l)(this, sB, [34])), this.keysLeft = ((0, TB.l)(this, wB), (0, TB.l)(this, OB, [37])), this.keysRight = ((0, TB.l)(this, YB), (0, TB.l)(this, iB, [39])), this.rotationSpeed = ((0, TB.l)(this, pB), (0, TB.l)(this, aB, .5)), this.keysRotateLeft = ((0, TB.l)(this, HB), (0, TB.l)(this, MB, [])), this.keysRotateRight = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, [])), this.keysRotateUp = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, [])), this.keysRotateDown = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, [])), this._keys = ((0, TB.l)(this, LB), new Array)
        }
        attachControl(BB) {
          BB = cB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JR(), this._engine = this._scene.PN(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((IB => {
            const ZB = IB.event;
            if (!ZB.metaKey)
              if (IB.type === kB.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ZB.keyCode) || -1 !== this.keysDown.indexOf(ZB.keyCode) || -1 !== this.keysLeft.indexOf(ZB.keyCode) || -1 !== this.keysRight.indexOf(ZB.keyCode) || -1 !== this.keysUpward.indexOf(ZB.keyCode) || -1 !== this.keysDownward.indexOf(ZB.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZB.keyCode) || -1 !== this.keysRotateRight.indexOf(ZB.keyCode) || -1 !== this.keysRotateUp.indexOf(ZB.keyCode) || -1 !== this.keysRotateDown.indexOf(ZB.keyCode)) {
                  -1 === this._keys.indexOf(ZB.keyCode) && this._keys.push(ZB.keyCode), BB || ZB.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ZB.keyCode) || -1 !== this.keysDown.indexOf(ZB.keyCode) || -1 !== this.keysLeft.indexOf(ZB.keyCode) || -1 !== this.keysRight.indexOf(ZB.keyCode) || -1 !== this.keysUpward.indexOf(ZB.keyCode) || -1 !== this.keysDownward.indexOf(ZB.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZB.keyCode) || -1 !== this.keysRotateRight.indexOf(ZB.keyCode) || -1 !== this.keysRotateUp.indexOf(ZB.keyCode) || -1 !== this.keysRotateDown.indexOf(ZB.keyCode)) {
              const IB = this._keys.indexOf(ZB.keyCode);
              IB >= 0 && this._keys.splice(IB, 1), BB || ZB.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              IB = BB.movement.input,
              ZB = IB.getEntry("keyboard", "translate"),
              TB = IB.getEntry("keyboard", "rotate"),
              JB = TB?.sensitivity ?? 1,
              GB = BB._localDirection.cBB(0, 0, 0);
            for (let oB = 0; oB < this._keys.length; oB++) {
              const IB = this._keys[oB]; - 1 !== this.keysLeft.indexOf(IB) ? GB.x -= 1 : -1 !== this.keysUp.indexOf(IB) ? GB.z += 1 : -1 !== this.keysRight.indexOf(IB) ? GB.x += 1 : -1 !== this.keysDown.indexOf(IB) ? GB.z -= 1 : -1 !== this.keysUpward.indexOf(IB) ? GB.y += 1 : -1 !== this.keysDownward.indexOf(IB) ? GB.y -= 1 : -1 !== this.keysRotateLeft.indexOf(IB) ? TB && (BB.cameraRotation.y -= this._getLocalRotation() * JB) : -1 !== this.keysRotateRight.indexOf(IB) ? TB && (BB.cameraRotation.y += this._getLocalRotation() * JB) : -1 !== this.keysRotateUp.indexOf(IB) ? TB && (BB.cameraRotation.x -= this._getLocalRotation() * JB) : -1 !== this.keysRotateDown.indexOf(IB) && TB && (BB.cameraRotation.x += this._getLocalRotation() * JB)
            }
            if (ZB && (0 !== GB.x || 0 !== GB.y || 0 !== GB.z)) {
              const IB = BB._computeLocalCameraSpeed() * (ZB.sensitivity ?? 1);
              GB.normalize().scaleInPlace(IB), BB.JR().useRightHandedSystem && (GB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), oB.s.TransformNormalToRef(GB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transformedDirection)
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
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], qB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, IB) => {
              BB.keysUp = IB
            }
          },
          metadata: oB
        }, yB, UB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUpward" in BB,
            get: BB => BB.keysUpward,
            set: (BB, IB) => {
              BB.keysUpward = IB
            }
          },
          metadata: oB
        }, WB, dB), (0, TB.j)(null, null, GB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, IB) => {
              BB.keysDown = IB
            }
          },
          metadata: oB
        }, CB, QB), (0, TB.j)(null, null, vB, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDownward" in BB,
            get: BB => BB.keysDownward,
            set: (BB, IB) => {
              BB.keysDownward = IB
            }
          },
          metadata: oB
        }, sB, wB), (0, TB.j)(null, null, nB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, IB) => {
              BB.keysLeft = IB
            }
          },
          metadata: oB
        }, OB, YB), (0, TB.j)(null, null, hB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, IB) => {
              BB.keysRight = IB
            }
          },
          metadata: oB
        }, iB, pB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "rotationSpeed" in BB,
            get: BB => BB.rotationSpeed,
            set: (BB, IB) => {
              BB.rotationSpeed = IB
            }
          },
          metadata: oB
        }, aB, HB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateLeft" in BB,
            get: BB => BB.keysRotateLeft,
            set: (BB, IB) => {
              BB.keysRotateLeft = IB
            }
          },
          metadata: oB
        }, MB, jB), (0, TB.j)(null, null, NB, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateRight" in BB,
            get: BB => BB.keysRotateRight,
            set: (BB, IB) => {
              BB.keysRotateRight = IB
            }
          },
          metadata: oB
        }, PB, RB), (0, TB.j)(null, null, gB, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateUp" in BB,
            get: BB => BB.keysRotateUp,
            set: (BB, IB) => {
              BB.keysRotateUp = IB
            }
          },
          metadata: oB
        }, rB, mB), (0, TB.j)(null, null, qB, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateDown" in BB,
            get: BB => BB.keysRotateDown,
            set: (BB, IB) => {
              BB.keysRotateDown = IB
            }
          },
          metadata: oB
        }, XB, LB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })();
    vB.c.FreeCameraKeyboardMoveInput = nB;
    var hB = ZB(37153),
      zB = ZB(40224);
    let FB = (() => {
      var BB;
      let IB, ZB, oB = [],
        GB = [],
        vB = [],
        kB = [];
      return BB = class {
        _applyPointerRotation(BB, IB) {
          this._pointerConditions.button = this._currentActiveButton;
          const ZB = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ZB || "rotate" !== ZB.interaction) return;
          const TB = ZB.uD ?? ZB.sensitivity ?? 1 / this.angularSensibility,
            JB = ZB.lD ?? ZB.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += BB * TB, this.camera.cameraRotation.x += IB * JB
        }
        constructor() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = BB, this.buttons = (0, TB.l)(this, oB, [0, 1, 2]), this.angularSensibility = ((0, TB.l)(this, GB), (0, TB.l)(this, vB, 2e3)), this._pointerInput = (0, TB.l)(this, kB), this._previousPosition = null, this.onPointerMovedObservable = new hB.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(BB) {
          BB = cB.j.BackCompatCameraNoPreventDefault(arguments);
          const IB = this.camera.PN(),
            ZB = IB.getInputElement();
          this._pointerInput || (this._pointerInput = TB => {
            const JB = TB.event,
              oB = "touch" === JB.pointerType;
            if (!this.touchEnabled && oB) return;
            if (TB.type !== zB.d.POINTERMOVE && -1 === this.buttons.indexOf(JB.button)) return;
            const GB = JB.target;
            if (TB.type === zB.d.POINTERDOWN) {
              if (oB && -1 !== this._activePointerId || !oB && -1 !== this._currentActiveButton) return;
              this._activePointerId = JB.pointerId;
              try {
                GB?.setPointerCapture(JB.pointerId)
              } catch (vB) {} - 1 === this._currentActiveButton && (this._currentActiveButton = JB.button), this._previousPosition = {
                x: JB.clientX,
                y: JB.clientY
              }, BB || (JB.preventDefault(), ZB && ZB.focus()), IB.isPointerLock && this._onMouseMove && this._onMouseMove(TB.event)
            } else if (TB.type === zB.d.POINTERUP) {
              if (oB && this._activePointerId !== JB.pointerId || !oB && this._currentActiveButton !== JB.button) return;
              try {
                GB?.releasePointerCapture(JB.pointerId)
              } catch (vB) {}
              this._currentActiveButton = -1, this._previousPosition = null, BB || JB.preventDefault(), this._activePointerId = -1
            } else if (TB.type === zB.d.POINTERMOVE && (this._activePointerId === JB.pointerId || !oB))
              if (IB.isPointerLock && this._onMouseMove) this._onMouseMove(TB.event);
              else if (this._previousPosition) {
              const IB = this.camera._calculateHandednessMultiplier(),
                ZB = (JB.clientX - this._previousPosition.x) * IB,
                TB = (JB.clientY - this._previousPosition.y) * IB;
              this._allowCameraRotation && this._applyPointerRotation(ZB, TB), this.onPointerMovedObservable.notifyObservers({
                offsetX: ZB,
                offsetY: TB
              }), this._previousPosition = {
                x: JB.clientX,
                y: JB.clientY
              }, BB || JB.preventDefault()
            }
          }), this._onMouseMove = ZB => {
            if (!IB.isPointerLock) return;
            const TB = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ZB.movementX * TB, ZB.movementY * TB), this._previousPosition = null, BB || ZB.preventDefault()
          }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, zB.d.POINTERDOWN | zB.d.POINTERUP | zB.d.POINTERMOVE), ZB && (this._contextMenuBind = BB => this.onContextMenu(BB), ZB.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(BB) {
          BB.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const BB = this.camera.PN().getInputElement();
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
        const cB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: BB => "buttons" in BB,
            get: BB => BB.buttons,
            set: (BB, IB) => {
              BB.buttons = IB
            }
          },
          metadata: cB
        }, oB, GB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSensibility" in BB,
            get: BB => BB.angularSensibility,
            set: (BB, IB) => {
              BB.angularSensibility = IB
            }
          },
          metadata: cB
        }, vB, kB), cB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cB
        })
      })(), BB
    })();
    vB.c.FreeCameraMouseInput = FB;
    var NB = ZB(40232);
    let gB = (() => {
      var BB;
      let IB, ZB, oB, GB = [],
        vB = [],
        kB = [],
        nB = [],
        FB = [],
        gB = [];
      return BB = class {
        constructor() {
          this.wheelPrecisionX = (0, TB.l)(this, GB, 3), this.wheelPrecisionY = ((0, TB.l)(this, vB), (0, TB.l)(this, kB, 3)), this.wheelPrecisionZ = ((0, TB.l)(this, nB), (0, TB.l)(this, FB, 3)), this.onChangedObservable = ((0, TB.l)(this, gB), new hB.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(BB) {
          BB = cB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = IB => {
            if (IB.type !== zB.d.POINTERWHEEL) return;
            const ZB = IB.event,
              TB = ZB.deltaMode === NB.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * TB * ZB.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * TB * ZB.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * TB * ZB.deltaZ / this._normalize, ZB.preventDefault && (BB || ZB.preventDefault())
          }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._wheel, zB.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const cB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionX" in BB,
            get: BB => BB.wheelPrecisionX,
            set: (BB, IB) => {
              BB.wheelPrecisionX = IB
            }
          },
          metadata: cB
        }, GB, vB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionY" in BB,
            get: BB => BB.wheelPrecisionY,
            set: (BB, IB) => {
              BB.wheelPrecisionY = IB
            }
          },
          metadata: cB
        }, kB, nB), (0, TB.j)(null, null, oB, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionZ" in BB,
            get: BB => BB.wheelPrecisionZ,
            set: (BB, IB) => {
              BB.wheelPrecisionZ = IB
            }
          },
          metadata: cB
        }, FB, gB), cB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cB
        })
      })(), BB
    })();
    var qB;
    ! function(BB) {
      BB[BB.MoveRelative = 0] = "MoveRelative", BB[BB.RotateRelative = 1] = "RotateRelative", BB[BB.MoveScene = 2] = "MoveScene"
    }(qB || (qB = {}));
    let yB = (() => {
      var BB;
      let IB, ZB, GB, vB, kB, cB, nB, hB, zB, FB = gB,
        NB = [];
      return BB = class extends FB {
        constructor() {
          super(...arguments), this.camera = (0, TB.l)(this, NB), this._moveRelative = oB.s.Zero(), this._rotateRelative = oB.s.Zero(), this._moveScene = oB.s.Zero(), this._wheelXAction = qB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = qB.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(BB) {
          null === BB && this._wheelXAction !== qB.MoveRelative || (this._wheelXAction = qB.MoveRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== qB.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(BB) {
          null === BB && this._wheelYAction !== qB.MoveRelative || (this._wheelYAction = qB.MoveRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== qB.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(BB) {
          null === BB && this._wheelZAction !== qB.MoveRelative || (this._wheelZAction = qB.MoveRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== qB.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(BB) {
          null === BB && this._wheelXAction !== qB.RotateRelative || (this._wheelXAction = qB.RotateRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== qB.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(BB) {
          null === BB && this._wheelYAction !== qB.RotateRelative || (this._wheelYAction = qB.RotateRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== qB.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(BB) {
          null === BB && this._wheelZAction !== qB.RotateRelative || (this._wheelZAction = qB.RotateRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== qB.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(BB) {
          null === BB && this._wheelXAction !== qB.MoveScene || (this._wheelXAction = qB.MoveScene, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== qB.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(BB) {
          null === BB && this._wheelYAction !== qB.MoveScene || (this._wheelYAction = qB.MoveScene, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== qB.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(BB) {
          null === BB && this._wheelZAction !== qB.MoveScene || (this._wheelZAction = qB.MoveScene, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== qB.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.K9(0), this._rotateRelative.K9(0), this._moveScene.K9(0), this._updateCamera(), this.camera.JR().useRightHandedSystem && (this._moveRelative.z *= -1);
          const BB = oB.b.Zero();
          this.camera.getViewMatrix().invertToRef(BB);
          const IB = oB.s.Zero();
          oB.s.TransformNormalToRef(this._moveRelative, BB, IB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(IB), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(BB, IB, ZB) {
          if (0 === BB) return;
          if (null === IB || null === ZB) return;
          let TB = null;
          switch (IB) {
            case qB.MoveRelative:
              TB = this._moveRelative;
              break;
            case qB.RotateRelative:
              TB = this._rotateRelative;
              break;
            case qB.MoveScene:
              TB = this._moveScene
          }
          switch (ZB) {
            case 0:
              TB.set(BB, 0, 0);
              break;
            case 1:
              TB.set(0, BB, 0);
              break;
            case 2:
              TB.set(0, 0, BB)
          }
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(FB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveRelative" in BB,
            set: (BB, IB) => {
              BB.wheelXMoveRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, ZB, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveRelative" in BB,
            set: (BB, IB) => {
              BB.wheelYMoveRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, GB, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveRelative" in BB,
            set: (BB, IB) => {
              BB.wheelZMoveRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, vB, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXRotateRelative" in BB,
            set: (BB, IB) => {
              BB.wheelXRotateRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, kB, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYRotateRelative" in BB,
            set: (BB, IB) => {
              BB.wheelYRotateRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, cB, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZRotateRelative" in BB,
            set: (BB, IB) => {
              BB.wheelZRotateRelative = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, nB, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveScene" in BB,
            set: (BB, IB) => {
              BB.wheelXMoveScene = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, hB, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveScene" in BB,
            set: (BB, IB) => {
              BB.wheelYMoveScene = IB
            }
          },
          metadata: oB
        }, null, NB), (0, TB.j)(BB, null, zB, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveScene" in BB,
            set: (BB, IB) => {
              BB.wheelZMoveScene = IB
            }
          },
          metadata: oB
        }, null, NB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })();
    vB.c.FreeCameraMouseWheelInput = yB;
    let UB = (() => {
      var BB;
      let IB, ZB, GB = [],
        vB = [],
        kB = [],
        nB = [];
      return BB = class {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = BB, this.touchAngularSensibility = (0, TB.l)(this, GB, 2e5), this.touchMoveSensibility = ((0, TB.l)(this, vB), (0, TB.l)(this, kB, 250)), this.singleFingerRotate = ((0, TB.l)(this, nB), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = cB.j.IsSafari()
        }
        attachControl(BB) {
          BB = cB.j.BackCompatCameraNoPreventDefault(arguments);
          let IB = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ZB => {
              const TB = ZB.event,
                JB = "mouse" === TB.pointerType || this._isSafari && "undefined" === typeof TB.pointerType;
              if (this.allowMouse || !JB)
                if (ZB.type === zB.d.POINTERDOWN) {
                  if (BB || TB.preventDefault(), this._pointerPressed.push(TB.pointerId), 1 !== this._pointerPressed.length) return;
                  IB = {
                    x: TB.clientX,
                    y: TB.clientY
                  }
                } else if (ZB.type === zB.d.POINTERUP) {
                BB || TB.preventDefault();
                const ZB = this._pointerPressed.indexOf(TB.pointerId);
                if (-1 === ZB) return;
                if (this._pointerPressed.splice(ZB, 1), 0 != ZB) return;
                IB = null, this._offsetX = null, this._offsetY = null
              } else if (ZB.type === zB.d.POINTERMOVE) {
                if (BB || TB.preventDefault(), !IB) return;
                if (0 != this._pointerPressed.indexOf(TB.pointerId)) return;
                this._offsetX = TB.clientX - IB.x, this._offsetY = -(TB.clientY - IB.y)
              }
            }), this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, zB.d.POINTERDOWN | zB.d.POINTERUP | zB.d.POINTERMOVE), this._onLostFocus) {
            const BB = this.camera.PN().getInputElement();
            BB && BB.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const BB = this.camera.PN().getInputElement();
              BB && BB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const BB = this.camera,
            IB = BB.movement.input,
            ZB = IB.getEntry("touch", "rotate"),
            TB = IB.getEntry("touch", "translate"),
            JB = BB._calculateHandednessMultiplier(),
            GB = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ZB) {
            const IB = ZB.sensitivity ?? 1 / this.touchAngularSensibility;
            BB.cameraRotation.y = this._offsetX * JB * IB, GB && (BB.cameraRotation.x = -this._offsetY * JB * IB)
          }
          if (!GB && TB) {
            const IB = BB._computeLocalCameraSpeed(),
              ZB = TB.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              JB = oB.m.rN[0];
            JB.cBB(0, 0, IB * this._offsetY * ZB), oB.b.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), oB.s.TransformCoordinatesToRef(JB, BB._cameraRotationMatrix, JB), BB.cameraDirection.addInPlace(JB)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchAngularSensibility" in BB,
            get: BB => BB.touchAngularSensibility,
            set: (BB, IB) => {
              BB.touchAngularSensibility = IB
            }
          },
          metadata: oB
        }, GB, vB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchMoveSensibility" in BB,
            get: BB => BB.touchMoveSensibility,
            set: (BB, IB) => {
              BB.touchMoveSensibility = IB
            }
          },
          metadata: oB
        }, kB, nB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })();
    vB.c.FreeCameraTouchInput = UB;
    var WB, dB, CB, QB = ZB(39931);
    class sB extends vB.f {
      constructor(BB) {
        super(BB), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new nB), this
      }
      addMouse() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new FB(BB), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new yB, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new UB), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(WB = sB.prototype).addDeviceOrientation ?? (WB.addDeviceOrientation = (0, QB.j)("FreeCameraInputsManager", "addDeviceOrientation")), (dB = sB.prototype).addVirtualJoystick ?? (dB.addVirtualJoystick = (0, QB.j)("FreeCameraInputsManager", "addVirtualJoystick")), (CB = sB.prototype).addGamepad ?? (CB.addGamepad = (0, QB.j)("FreeCameraInputsManager", "addGamepad"));
    var wB = ZB(39951),
      OB = ZB(37170);
    let YB = (() => {
        var BB;
        let IB, ZB, vB, kB, nB = GB.d,
          hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [],
          yB = [],
          UB = [];
        return BB = class extends nB {
          get angularSensibility() {
            const BB = this.inputs.attached.mouse;
            return BB ? BB.angularSensibility : 0
          }
          set angularSensibility(BB) {
            const IB = this.inputs.attached.mouse;
            IB && (IB.angularSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysUp = BB)
          }
          get keysUpward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUpward : []
          }
          set keysUpward(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysUpward = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysDown = BB)
          }
          get keysDownward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDownward : []
          }
          set keysDownward(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysDownward = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRight = BB)
          }
          get keysRotateLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateLeft : []
          }
          set keysRotateLeft(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRotateLeft = BB)
          }
          get keysRotateRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateRight : []
          }
          set keysRotateRight(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRotateRight = BB)
          }
          get keysRotateUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateUp : []
          }
          set keysRotateUp(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRotateUp = BB)
          }
          get keysRotateDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateDown : []
          }
          set keysRotateDown(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRotateDown = BB)
          }
          constructor(BB, IB, ZB) {
            var JB;
            super(BB, IB, ZB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), JB = this, this.ellipsoid = (0, TB.l)(this, hB, new oB.s(.5, 1, .5)), this.ellipsoidOffset = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, new oB.s(0, 0, 0))), this.checkCollisions = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, !1)), this.applyGravity = ((0, TB.l)(this, qB), (0, TB.l)(this, yB, !1)), this.inputs = (0, TB.l)(this, UB), this._needMoveForGravity = !1, this._oldPosition = oB.s.Zero(), this._diffPosition = oB.s.Zero(), this._newPosition = oB.s.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(BB, IB) {
              let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              JB._newPosition.TY(IB), JB._newPosition.subtractToRef(JB._oldPosition, JB._diffPosition), JB._diffPosition.length() > wB.c.CollisionsEpsilon && (JB.position.addToRef(JB._diffPosition, JB._deferredPositionUpdate), JB._deferOnly ? JB._deferredUpdated = !0 : JB.position.TY(JB._deferredPositionUpdate), JB.Wz && ZB && JB.Wz(ZB))
            }, this.inputs = new sB(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(BB, IB) {
            IB = cB.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(IB)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new oB.s(0, 0, 0), this.cameraRotation = new oB.p(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(BB) {
            this._collisionMask = isNaN(BB) ? -1 : BB
          }
          _collideWithWorld(BB) {
            let IB;
            IB = this.parent ? oB.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, IB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ZB = this.JR().collisionCoordinator;
            this._collider || (this._collider = ZB.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let TB = BB;
            this.applyGravity && (TB = BB.add(this.JR().gravity)), ZB.getNewPosition(this._oldPosition, TB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = oB.s.Zero(), this._transformedDirection = oB.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.JR().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(nB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.A)()], ZB = [(0, JB.A)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoid" in BB,
              get: BB => BB.ellipsoid,
              set: (BB, IB) => {
                BB.ellipsoid = IB
              }
            },
            metadata: oB
          }, hB, zB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoidOffset" in BB,
              get: BB => BB.ellipsoidOffset,
              set: (BB, IB) => {
                BB.ellipsoidOffset = IB
              }
            },
            metadata: oB
          }, FB, NB), (0, TB.j)(null, null, vB, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: BB => "checkCollisions" in BB,
              get: BB => BB.checkCollisions,
              set: (BB, IB) => {
                BB.checkCollisions = IB
              }
            },
            metadata: oB
          }, gB, qB), (0, TB.j)(null, null, kB, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyGravity" in BB,
              get: BB => BB.applyGravity,
              set: (BB, IB) => {
                BB.applyGravity = IB
              }
            },
            metadata: oB
          }, yB, UB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      iB = !1;
    iB || (iB = !0, (0, OB.i)("BABYLON.FreeCamera", YB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
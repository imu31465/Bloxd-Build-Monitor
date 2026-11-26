export const id = 287;
export const ids = [287];
export const modules = {
  41213: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => kB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(41215),
      jB = GB(41237),
      yB = GB(41197),
      JB = GB(41097);
    let MB = (() => {
      var BB;
      let OB, GB, oB, jB, MB, PB, zB, lB, pB, qB, ZB, NB = [],
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        fB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [];
      return BB = class {
        constructor() {
          this.keysUp = (0, YB.j)(this, NB, [38]), this.keysUpward = ((0, YB.j)(this, RB), (0, YB.j)(this, WB, [33])), this.keysDown = ((0, YB.j)(this, AB), (0, YB.j)(this, VB, [40])), this.keysDownward = ((0, YB.j)(this, SB), (0, YB.j)(this, nB, [34])), this.keysLeft = ((0, YB.j)(this, UB), (0, YB.j)(this, fB, [37])), this.keysRight = ((0, YB.j)(this, kB), (0, YB.j)(this, dB, [39])), this.rotationSpeed = ((0, YB.j)(this, KB), (0, YB.j)(this, uB, .5)), this.keysRotateLeft = ((0, YB.j)(this, mB), (0, YB.j)(this, IB, [])), this.keysRotateRight = ((0, YB.j)(this, FB), (0, YB.j)(this, iB, [])), this.keysRotateUp = ((0, YB.j)(this, LB), (0, YB.j)(this, gB, [])), this.keysRotateDown = ((0, YB.j)(this, rB), (0, YB.j)(this, XB, [])), this._keys = ((0, YB.j)(this, wB), new Array)
        }
        attachControl(BB) {
          BB = JB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JF(), this._engine = this._scene.Lp(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((OB => {
            const GB = OB.event;
            if (!GB.metaKey)
              if (OB.type === yB.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(GB.keyCode) || -1 !== this.keysDown.indexOf(GB.keyCode) || -1 !== this.keysLeft.indexOf(GB.keyCode) || -1 !== this.keysRight.indexOf(GB.keyCode) || -1 !== this.keysUpward.indexOf(GB.keyCode) || -1 !== this.keysDownward.indexOf(GB.keyCode) || -1 !== this.keysRotateLeft.indexOf(GB.keyCode) || -1 !== this.keysRotateRight.indexOf(GB.keyCode) || -1 !== this.keysRotateUp.indexOf(GB.keyCode) || -1 !== this.keysRotateDown.indexOf(GB.keyCode)) {
                  -1 === this._keys.indexOf(GB.keyCode) && this._keys.push(GB.keyCode), BB || GB.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(GB.keyCode) || -1 !== this.keysDown.indexOf(GB.keyCode) || -1 !== this.keysLeft.indexOf(GB.keyCode) || -1 !== this.keysRight.indexOf(GB.keyCode) || -1 !== this.keysUpward.indexOf(GB.keyCode) || -1 !== this.keysDownward.indexOf(GB.keyCode) || -1 !== this.keysRotateLeft.indexOf(GB.keyCode) || -1 !== this.keysRotateRight.indexOf(GB.keyCode) || -1 !== this.keysRotateUp.indexOf(GB.keyCode) || -1 !== this.keysRotateDown.indexOf(GB.keyCode)) {
              const OB = this._keys.indexOf(GB.keyCode);
              OB >= 0 && this._keys.splice(OB, 1), BB || GB.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              OB = BB.movement.input,
              GB = OB.getEntry("keyboard", "translate"),
              YB = OB.getEntry("keyboard", "rotate"),
              DB = YB?.sensitivity ?? 1,
              oB = BB._localDirection.zOB(0, 0, 0);
            for (let QB = 0; QB < this._keys.length; QB++) {
              const OB = this._keys[QB]; - 1 !== this.keysLeft.indexOf(OB) ? oB.x -= 1 : -1 !== this.keysUp.indexOf(OB) ? oB.z += 1 : -1 !== this.keysRight.indexOf(OB) ? oB.x += 1 : -1 !== this.keysDown.indexOf(OB) ? oB.z -= 1 : -1 !== this.keysUpward.indexOf(OB) ? oB.y += 1 : -1 !== this.keysDownward.indexOf(OB) ? oB.y -= 1 : -1 !== this.keysRotateLeft.indexOf(OB) ? YB && (BB.cameraRotation.y -= this._getLocalRotation() * DB) : -1 !== this.keysRotateRight.indexOf(OB) ? YB && (BB.cameraRotation.y += this._getLocalRotation() * DB) : -1 !== this.keysRotateUp.indexOf(OB) ? YB && (BB.cameraRotation.x -= this._getLocalRotation() * DB) : -1 !== this.keysRotateDown.indexOf(OB) && YB && (BB.cameraRotation.x += this._getLocalRotation() * DB)
            }
            if (GB && (0 !== oB.x || 0 !== oB.y || 0 !== oB.z)) {
              const OB = BB._computeLocalCameraSpeed() * (GB.sensitivity ?? 1);
              oB.normalize().scaleInPlace(OB), BB.JF().useRightHandedSystem && (oB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), QB.r.TransformNormalToRef(oB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transformedDirection)
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
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], ZB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, OB) => {
              BB.keysUp = OB
            }
          },
          metadata: QB
        }, NB, RB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUpward" in BB,
            get: BB => BB.keysUpward,
            set: (BB, OB) => {
              BB.keysUpward = OB
            }
          },
          metadata: QB
        }, WB, AB), (0, YB.h)(null, null, oB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, OB) => {
              BB.keysDown = OB
            }
          },
          metadata: QB
        }, VB, SB), (0, YB.h)(null, null, jB, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDownward" in BB,
            get: BB => BB.keysDownward,
            set: (BB, OB) => {
              BB.keysDownward = OB
            }
          },
          metadata: QB
        }, nB, UB), (0, YB.h)(null, null, MB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, OB) => {
              BB.keysLeft = OB
            }
          },
          metadata: QB
        }, fB, kB), (0, YB.h)(null, null, PB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, OB) => {
              BB.keysRight = OB
            }
          },
          metadata: QB
        }, dB, KB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "rotationSpeed" in BB,
            get: BB => BB.rotationSpeed,
            set: (BB, OB) => {
              BB.rotationSpeed = OB
            }
          },
          metadata: QB
        }, uB, mB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateLeft" in BB,
            get: BB => BB.keysRotateLeft,
            set: (BB, OB) => {
              BB.keysRotateLeft = OB
            }
          },
          metadata: QB
        }, IB, FB), (0, YB.h)(null, null, pB, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateRight" in BB,
            get: BB => BB.keysRotateRight,
            set: (BB, OB) => {
              BB.keysRotateRight = OB
            }
          },
          metadata: QB
        }, iB, LB), (0, YB.h)(null, null, qB, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateUp" in BB,
            get: BB => BB.keysRotateUp,
            set: (BB, OB) => {
              BB.keysRotateUp = OB
            }
          },
          metadata: QB
        }, gB, rB), (0, YB.h)(null, null, ZB, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRotateDown" in BB,
            get: BB => BB.keysRotateDown,
            set: (BB, OB) => {
              BB.keysRotateDown = OB
            }
          },
          metadata: QB
        }, XB, wB), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB
    })();
    jB.c.FreeCameraKeyboardMoveInput = MB;
    var PB = GB(37802),
      zB = GB(41190);
    let lB = (() => {
      var BB;
      let OB, GB, QB = [],
        oB = [],
        jB = [],
        yB = [];
      return BB = class {
        _applyPointerRotation(BB, OB) {
          this._pointerConditions.button = this._currentActiveButton;
          const GB = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!GB || "rotate" !== GB.interaction) return;
          const YB = GB.Hx ?? GB.sensitivity ?? 1 / this.angularSensibility,
            DB = GB.vx ?? GB.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += BB * YB, this.camera.cameraRotation.x += OB * DB
        }
        constructor() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = BB, this.buttons = (0, YB.j)(this, QB, [0, 1, 2]), this.angularSensibility = ((0, YB.j)(this, oB), (0, YB.j)(this, jB, 2e3)), this._pointerInput = (0, YB.j)(this, yB), this._previousPosition = null, this.onPointerMovedObservable = new PB.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(BB) {
          BB = JB.j.BackCompatCameraNoPreventDefault(arguments);
          const OB = this.camera.Lp(),
            GB = OB.getInputElement();
          this._pointerInput || (this._pointerInput = YB => {
            const DB = YB.event,
              QB = "touch" === DB.pointerType;
            if (!this.touchEnabled && QB) return;
            if (YB.type !== zB.c.POINTERMOVE && -1 === this.buttons.indexOf(DB.button)) return;
            const oB = DB.target;
            if (YB.type === zB.c.POINTERDOWN) {
              if (QB && -1 !== this._activePointerId || !QB && -1 !== this._currentActiveButton) return;
              this._activePointerId = DB.pointerId;
              try {
                oB?.setPointerCapture(DB.pointerId)
              } catch (jB) {} - 1 === this._currentActiveButton && (this._currentActiveButton = DB.button), this._previousPosition = {
                x: DB.clientX,
                y: DB.clientY
              }, BB || (DB.preventDefault(), GB && GB.focus()), OB.isPointerLock && this._onMouseMove && this._onMouseMove(YB.event)
            } else if (YB.type === zB.c.POINTERUP) {
              if (QB && this._activePointerId !== DB.pointerId || !QB && this._currentActiveButton !== DB.button) return;
              try {
                oB?.releasePointerCapture(DB.pointerId)
              } catch (jB) {}
              this._currentActiveButton = -1, this._previousPosition = null, BB || DB.preventDefault(), this._activePointerId = -1
            } else if (YB.type === zB.c.POINTERMOVE && (this._activePointerId === DB.pointerId || !QB))
              if (OB.isPointerLock && this._onMouseMove) this._onMouseMove(YB.event);
              else if (this._previousPosition) {
              const OB = this.camera._calculateHandednessMultiplier(),
                GB = (DB.clientX - this._previousPosition.x) * OB,
                YB = (DB.clientY - this._previousPosition.y) * OB;
              this._allowCameraRotation && this._applyPointerRotation(GB, YB), this.onPointerMovedObservable.notifyObservers({
                offsetX: GB,
                offsetY: YB
              }), this._previousPosition = {
                x: DB.clientX,
                y: DB.clientY
              }, BB || DB.preventDefault()
            }
          }), this._onMouseMove = GB => {
            if (!OB.isPointerLock) return;
            const YB = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(GB.movementX * YB, GB.movementY * YB), this._previousPosition = null, BB || GB.preventDefault()
          }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, zB.c.POINTERDOWN | zB.c.POINTERUP | zB.c.POINTERMOVE), GB && (this._contextMenuBind = BB => this.onContextMenu(BB), GB.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(BB) {
          BB.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const BB = this.camera.Lp().getInputElement();
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
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: BB => "buttons" in BB,
            get: BB => BB.buttons,
            set: (BB, OB) => {
              BB.buttons = OB
            }
          },
          metadata: JB
        }, QB, oB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSensibility" in BB,
            get: BB => BB.angularSensibility,
            set: (BB, OB) => {
              BB.angularSensibility = OB
            }
          },
          metadata: JB
        }, jB, yB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB
    })();
    jB.c.FreeCameraMouseInput = lB;
    var pB = GB(41201);
    let qB = (() => {
      var BB;
      let OB, GB, QB, oB = [],
        jB = [],
        yB = [],
        MB = [],
        lB = [],
        qB = [];
      return BB = class {
        constructor() {
          this.wheelPrecisionX = (0, YB.j)(this, oB, 3), this.wheelPrecisionY = ((0, YB.j)(this, jB), (0, YB.j)(this, yB, 3)), this.wheelPrecisionZ = ((0, YB.j)(this, MB), (0, YB.j)(this, lB, 3)), this.onChangedObservable = ((0, YB.j)(this, qB), new PB.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(BB) {
          BB = JB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = OB => {
            if (OB.type !== zB.c.POINTERWHEEL) return;
            const GB = OB.event,
              YB = GB.deltaMode === pB.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * YB * GB.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * YB * GB.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * YB * GB.deltaZ / this._normalize, GB.preventDefault && (BB || GB.preventDefault())
          }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._wheel, zB.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionX" in BB,
            get: BB => BB.wheelPrecisionX,
            set: (BB, OB) => {
              BB.wheelPrecisionX = OB
            }
          },
          metadata: JB
        }, oB, jB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionY" in BB,
            get: BB => BB.wheelPrecisionY,
            set: (BB, OB) => {
              BB.wheelPrecisionY = OB
            }
          },
          metadata: JB
        }, yB, MB), (0, YB.h)(null, null, QB, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecisionZ" in BB,
            get: BB => BB.wheelPrecisionZ,
            set: (BB, OB) => {
              BB.wheelPrecisionZ = OB
            }
          },
          metadata: JB
        }, lB, qB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB
    })();
    var ZB;
    ! function(BB) {
      BB[BB.MoveRelative = 0] = "MoveRelative", BB[BB.RotateRelative = 1] = "RotateRelative", BB[BB.MoveScene = 2] = "MoveScene"
    }(ZB || (ZB = {}));
    let NB = (() => {
      var BB;
      let OB, GB, oB, jB, yB, JB, MB, PB, zB, lB = qB,
        pB = [];
      return BB = class extends lB {
        constructor() {
          super(...arguments), this.camera = (0, YB.j)(this, pB), this._moveRelative = QB.r.Zero(), this._rotateRelative = QB.r.Zero(), this._moveScene = QB.r.Zero(), this._wheelXAction = ZB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = ZB.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(BB) {
          null === BB && this._wheelXAction !== ZB.MoveRelative || (this._wheelXAction = ZB.MoveRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== ZB.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(BB) {
          null === BB && this._wheelYAction !== ZB.MoveRelative || (this._wheelYAction = ZB.MoveRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== ZB.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(BB) {
          null === BB && this._wheelZAction !== ZB.MoveRelative || (this._wheelZAction = ZB.MoveRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== ZB.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(BB) {
          null === BB && this._wheelXAction !== ZB.RotateRelative || (this._wheelXAction = ZB.RotateRelative, this._wheelXActionCoordinate = BB)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== ZB.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(BB) {
          null === BB && this._wheelYAction !== ZB.RotateRelative || (this._wheelYAction = ZB.RotateRelative, this._wheelYActionCoordinate = BB)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== ZB.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(BB) {
          null === BB && this._wheelZAction !== ZB.RotateRelative || (this._wheelZAction = ZB.RotateRelative, this._wheelZActionCoordinate = BB)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== ZB.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(BB) {
          null === BB && this._wheelXAction !== ZB.MoveScene || (this._wheelXAction = ZB.MoveScene, this._wheelXActionCoordinate = BB)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== ZB.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(BB) {
          null === BB && this._wheelYAction !== ZB.MoveScene || (this._wheelYAction = ZB.MoveScene, this._wheelYActionCoordinate = BB)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== ZB.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(BB) {
          null === BB && this._wheelZAction !== ZB.MoveScene || (this._wheelZAction = ZB.MoveScene, this._wheelZActionCoordinate = BB)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== ZB.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.uBB(0), this._rotateRelative.uBB(0), this._moveScene.uBB(0), this._updateCamera(), this.camera.JF().useRightHandedSystem && (this._moveRelative.z *= -1);
          const BB = QB.d.Zero();
          this.camera.getViewMatrix().invertToRef(BB);
          const OB = QB.r.Zero();
          QB.r.TransformNormalToRef(this._moveRelative, BB, OB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(OB), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(BB, OB, GB) {
          if (0 === BB) return;
          if (null === OB || null === GB) return;
          let YB = null;
          switch (OB) {
            case ZB.MoveRelative:
              YB = this._moveRelative;
              break;
            case ZB.RotateRelative:
              YB = this._rotateRelative;
              break;
            case ZB.MoveScene:
              YB = this._moveScene
          }
          switch (GB) {
            case 0:
              YB.set(BB, 0, 0);
              break;
            case 1:
              YB.set(0, BB, 0);
              break;
            case 2:
              YB.set(0, 0, BB)
          }
        }
      }, (() => {
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(lB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveRelative" in BB,
            set: (BB, OB) => {
              BB.wheelXMoveRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, GB, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveRelative" in BB,
            set: (BB, OB) => {
              BB.wheelYMoveRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, oB, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveRelative" in BB,
            set: (BB, OB) => {
              BB.wheelZMoveRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, jB, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXRotateRelative" in BB,
            set: (BB, OB) => {
              BB.wheelXRotateRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, yB, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYRotateRelative" in BB,
            set: (BB, OB) => {
              BB.wheelYRotateRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, JB, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZRotateRelative" in BB,
            set: (BB, OB) => {
              BB.wheelZRotateRelative = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, MB, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelXMoveScene" in BB,
            set: (BB, OB) => {
              BB.wheelXMoveScene = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, PB, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelYMoveScene" in BB,
            set: (BB, OB) => {
              BB.wheelYMoveScene = OB
            }
          },
          metadata: QB
        }, null, pB), (0, YB.h)(BB, null, zB, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelZMoveScene" in BB,
            set: (BB, OB) => {
              BB.wheelZMoveScene = OB
            }
          },
          metadata: QB
        }, null, pB), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB
    })();
    jB.c.FreeCameraMouseWheelInput = NB;
    let RB = (() => {
      var BB;
      let OB, GB, oB = [],
        jB = [],
        yB = [],
        MB = [];
      return BB = class {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = BB, this.touchAngularSensibility = (0, YB.j)(this, oB, 2e5), this.touchMoveSensibility = ((0, YB.j)(this, jB), (0, YB.j)(this, yB, 250)), this.singleFingerRotate = ((0, YB.j)(this, MB), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = JB.j.IsSafari()
        }
        attachControl(BB) {
          BB = JB.j.BackCompatCameraNoPreventDefault(arguments);
          let OB = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = GB => {
              const YB = GB.event,
                DB = "mouse" === YB.pointerType || this._isSafari && "undefined" === typeof YB.pointerType;
              if (this.allowMouse || !DB)
                if (GB.type === zB.c.POINTERDOWN) {
                  if (BB || YB.preventDefault(), this._pointerPressed.push(YB.pointerId), 1 !== this._pointerPressed.length) return;
                  OB = {
                    x: YB.clientX,
                    y: YB.clientY
                  }
                } else if (GB.type === zB.c.POINTERUP) {
                BB || YB.preventDefault();
                const GB = this._pointerPressed.indexOf(YB.pointerId);
                if (-1 === GB) return;
                if (this._pointerPressed.splice(GB, 1), 0 != GB) return;
                OB = null, this._offsetX = null, this._offsetY = null
              } else if (GB.type === zB.c.POINTERMOVE) {
                if (BB || YB.preventDefault(), !OB) return;
                if (0 != this._pointerPressed.indexOf(YB.pointerId)) return;
                this._offsetX = YB.clientX - OB.x, this._offsetY = -(YB.clientY - OB.y)
              }
            }), this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, zB.c.POINTERDOWN | zB.c.POINTERUP | zB.c.POINTERMOVE), this._onLostFocus) {
            const BB = this.camera.Lp().getInputElement();
            BB && BB.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const BB = this.camera.Lp().getInputElement();
              BB && BB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const BB = this.camera,
            OB = BB.movement.input,
            GB = OB.getEntry("touch", "rotate"),
            YB = OB.getEntry("touch", "translate"),
            DB = BB._calculateHandednessMultiplier(),
            oB = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (GB) {
            const OB = GB.sensitivity ?? 1 / this.touchAngularSensibility;
            BB.cameraRotation.y = this._offsetX * DB * OB, oB && (BB.cameraRotation.x = -this._offsetY * DB * OB)
          }
          if (!oB && YB) {
            const OB = BB._computeLocalCameraSpeed(),
              GB = YB.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              DB = QB.k.Xp[0];
            DB.zOB(0, 0, OB * this._offsetY * GB), QB.d.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), QB.r.TransformCoordinatesToRef(DB, BB._cameraRotationMatrix, DB), BB.cameraDirection.addInPlace(DB)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchAngularSensibility" in BB,
            get: BB => BB.touchAngularSensibility,
            set: (BB, OB) => {
              BB.touchAngularSensibility = OB
            }
          },
          metadata: QB
        }, oB, jB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "touchMoveSensibility" in BB,
            get: BB => BB.touchMoveSensibility,
            set: (BB, OB) => {
              BB.touchMoveSensibility = OB
            }
          },
          metadata: QB
        }, yB, MB), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB
    })();
    jB.c.FreeCameraTouchInput = RB;
    var WB, AB, VB, SB = GB(40890);
    class nB extends jB.e {
      constructor(BB) {
        super(BB), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new MB), this
      }
      addMouse() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new lB(BB), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new NB, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new RB), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(WB = nB.prototype).addDeviceOrientation ?? (WB.addDeviceOrientation = (0, SB.g)("FreeCameraInputsManager", "addDeviceOrientation")), (AB = nB.prototype).addVirtualJoystick ?? (AB.addVirtualJoystick = (0, SB.g)("FreeCameraInputsManager", "addVirtualJoystick")), (VB = nB.prototype).addGamepad ?? (VB.addGamepad = (0, SB.g)("FreeCameraInputsManager", "addGamepad"));
    var UB = GB(40905),
      fB = GB(37823);
    let kB = (() => {
        var BB;
        let OB, GB, jB, yB, MB = oB.h,
          PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [],
          NB = [],
          RB = [];
        return BB = class extends MB {
          get angularSensibility() {
            const BB = this.inputs.attached.mouse;
            return BB ? BB.angularSensibility : 0
          }
          set angularSensibility(BB) {
            const OB = this.inputs.attached.mouse;
            OB && (OB.angularSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysUp = BB)
          }
          get keysUpward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUpward : []
          }
          set keysUpward(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysUpward = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysDown = BB)
          }
          get keysDownward() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDownward : []
          }
          set keysDownward(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysDownward = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRight = BB)
          }
          get keysRotateLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateLeft : []
          }
          set keysRotateLeft(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRotateLeft = BB)
          }
          get keysRotateRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateRight : []
          }
          set keysRotateRight(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRotateRight = BB)
          }
          get keysRotateUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateUp : []
          }
          set keysRotateUp(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRotateUp = BB)
          }
          get keysRotateDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRotateDown : []
          }
          set keysRotateDown(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRotateDown = BB)
          }
          constructor(BB, OB, GB) {
            var DB;
            super(BB, OB, GB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), DB = this, this.ellipsoid = (0, YB.j)(this, PB, new QB.r(.5, 1, .5)), this.ellipsoidOffset = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, new QB.r(0, 0, 0))), this.checkCollisions = ((0, YB.j)(this, pB), (0, YB.j)(this, qB, !1)), this.applyGravity = ((0, YB.j)(this, ZB), (0, YB.j)(this, NB, !1)), this.inputs = (0, YB.j)(this, RB), this._needMoveForGravity = !1, this._oldPosition = QB.r.Zero(), this._diffPosition = QB.r.Zero(), this._newPosition = QB.r.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(BB, OB) {
              let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              DB._newPosition.IU(OB), DB._newPosition.subtractToRef(DB._oldPosition, DB._diffPosition), DB._diffPosition.length() > UB.d.CollisionsEpsilon && (DB.position.addToRef(DB._diffPosition, DB._deferredPositionUpdate), DB._deferOnly ? DB._deferredUpdated = !0 : DB.position.IU(DB._deferredPositionUpdate), DB.Fz && GB && DB.Fz(GB))
            }, this.inputs = new nB(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(BB, OB) {
            OB = JB.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(OB)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new QB.r(0, 0, 0), this.cameraRotation = new QB.o(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(BB) {
            this._collisionMask = isNaN(BB) ? -1 : BB
          }
          _collideWithWorld(BB) {
            let OB;
            OB = this.parent ? QB.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, OB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const GB = this.JF().collisionCoordinator;
            this._collider || (this._collider = GB.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let YB = BB;
            this.applyGravity && (YB = BB.add(this.JF().gravity)), GB.getNewPosition(this._oldPosition, YB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = QB.r.Zero(), this._transformedDirection = QB.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.JF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(MB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.H)()], GB = [(0, DB.H)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoid" in BB,
              get: BB => BB.ellipsoid,
              set: (BB, OB) => {
                BB.ellipsoid = OB
              }
            },
            metadata: QB
          }, PB, zB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "ellipsoidOffset" in BB,
              get: BB => BB.ellipsoidOffset,
              set: (BB, OB) => {
                BB.ellipsoidOffset = OB
              }
            },
            metadata: QB
          }, lB, pB), (0, YB.h)(null, null, jB, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: BB => "checkCollisions" in BB,
              get: BB => BB.checkCollisions,
              set: (BB, OB) => {
                BB.checkCollisions = OB
              }
            },
            metadata: QB
          }, qB, ZB), (0, YB.h)(null, null, yB, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyGravity" in BB,
              get: BB => BB.applyGravity,
              set: (BB, OB) => {
                BB.applyGravity = OB
              }
            },
            metadata: QB
          }, NB, RB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      dB = !1;
    dB || (dB = !0, (0, fB.f)("BABYLON.FreeCamera", kB))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
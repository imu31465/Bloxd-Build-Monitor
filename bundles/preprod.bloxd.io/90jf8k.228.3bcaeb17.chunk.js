export const id = 228;
export const ids = [228];
export const modules = {
  38171: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => mW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(38176),
      bW = SF(38207),
      dF = SF(38147),
      PF = SF(38065);
    let RF = (() => {
      var FF;
      let WF, SF, hF, bW, RF, iW, eF, EF, QF, rW, gW, tW = [],
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        LF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [];
      return FF = class {
        constructor() {
          this.keysUp = (0, CF.k)(this, tW, [38]), this.keysUpward = ((0, CF.k)(this, TF), (0, CF.k)(this, aW, [33])), this.keysDown = ((0, CF.k)(this, kW), (0, CF.k)(this, qW, [40])), this.keysDownward = ((0, CF.k)(this, VF), (0, CF.k)(this, NF, [34])), this.keysLeft = ((0, CF.k)(this, DF), (0, CF.k)(this, LF, [37])), this.keysRight = ((0, CF.k)(this, mW), (0, CF.k)(this, OF, [39])), this.rotationSpeed = ((0, CF.k)(this, xW), (0, CF.k)(this, ZF, .5)), this.keysRotateLeft = ((0, CF.k)(this, oF), (0, CF.k)(this, YF, [])), this.keysRotateRight = ((0, CF.k)(this, MF), (0, CF.k)(this, cW, [])), this.keysRotateUp = ((0, CF.k)(this, GF), (0, CF.k)(this, zW, [])), this.keysRotateDown = ((0, CF.k)(this, IF), (0, CF.k)(this, fF, [])), this._keys = ((0, CF.k)(this, yW), new Array)
        }
        attachControl(FF) {
          FF = PF.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.OWF(), this._engine = this._scene.sC(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((WF => {
            const SF = WF.event;
            if (!SF.metaKey)
              if (WF.type === dF.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(SF.keyCode) || -1 !== this.keysDown.indexOf(SF.keyCode) || -1 !== this.keysLeft.indexOf(SF.keyCode) || -1 !== this.keysRight.indexOf(SF.keyCode) || -1 !== this.keysUpward.indexOf(SF.keyCode) || -1 !== this.keysDownward.indexOf(SF.keyCode) || -1 !== this.keysRotateLeft.indexOf(SF.keyCode) || -1 !== this.keysRotateRight.indexOf(SF.keyCode) || -1 !== this.keysRotateUp.indexOf(SF.keyCode) || -1 !== this.keysRotateDown.indexOf(SF.keyCode)) {
                  -1 === this._keys.indexOf(SF.keyCode) && this._keys.push(SF.keyCode), FF || SF.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(SF.keyCode) || -1 !== this.keysDown.indexOf(SF.keyCode) || -1 !== this.keysLeft.indexOf(SF.keyCode) || -1 !== this.keysRight.indexOf(SF.keyCode) || -1 !== this.keysUpward.indexOf(SF.keyCode) || -1 !== this.keysDownward.indexOf(SF.keyCode) || -1 !== this.keysRotateLeft.indexOf(SF.keyCode) || -1 !== this.keysRotateRight.indexOf(SF.keyCode) || -1 !== this.keysRotateUp.indexOf(SF.keyCode) || -1 !== this.keysRotateDown.indexOf(SF.keyCode)) {
              const WF = this._keys.indexOf(SF.keyCode);
              WF >= 0 && this._keys.splice(WF, 1), FF || SF.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const FF = this.camera,
              WF = FF.movement.input,
              SF = WF.getEntry("keyboard", "translate"),
              CF = WF.getEntry("keyboard", "rotate"),
              AF = CF?.sensitivity ?? 1,
              hF = FF._localDirection.FhF(0, 0, 0);
            for (let uF = 0; uF < this._keys.length; uF++) {
              const WF = this._keys[uF]; - 1 !== this.keysLeft.indexOf(WF) ? hF.x -= 1 : -1 !== this.keysUp.indexOf(WF) ? hF.z += 1 : -1 !== this.keysRight.indexOf(WF) ? hF.x += 1 : -1 !== this.keysDown.indexOf(WF) ? hF.z -= 1 : -1 !== this.keysUpward.indexOf(WF) ? hF.y += 1 : -1 !== this.keysDownward.indexOf(WF) ? hF.y -= 1 : -1 !== this.keysRotateLeft.indexOf(WF) ? CF && (FF.cameraRotation.y -= this._getLocalRotation() * AF) : -1 !== this.keysRotateRight.indexOf(WF) ? CF && (FF.cameraRotation.y += this._getLocalRotation() * AF) : -1 !== this.keysRotateUp.indexOf(WF) ? CF && (FF.cameraRotation.x -= this._getLocalRotation() * AF) : -1 !== this.keysRotateDown.indexOf(WF) && CF && (FF.cameraRotation.x += this._getLocalRotation() * AF)
            }
            if (SF && (0 !== hF.x || 0 !== hF.y || 0 !== hF.z)) {
              const WF = FF._computeLocalCameraSpeed() * (SF.sensitivity ?? 1);
              hF.normalize().scaleInPlace(WF), FF.OWF().useRightHandedSystem && (hF.z *= -1), FF.getViewMatrix().invertToRef(FF._cameraTransformMatrix), uF.r.TransformNormalToRef(hF, FF._cameraTransformMatrix, FF._transformedDirection), FF.cameraDirection.addInPlace(FF._transformedDirection)
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
          const FF = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * FF
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], hF = [(0, AF.H)()], bW = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.H)()], eF = [(0, AF.H)()], EF = [(0, AF.H)()], QF = [(0, AF.H)()], rW = [(0, AF.H)()], gW = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysUp" in FF,
            get: FF => FF.keysUp,
            set: (FF, WF) => {
              FF.keysUp = WF
            }
          },
          metadata: uF
        }, tW, TF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysUpward" in FF,
            get: FF => FF.keysUpward,
            set: (FF, WF) => {
              FF.keysUpward = WF
            }
          },
          metadata: uF
        }, aW, kW), (0, CF.j)(null, null, hF, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysDown" in FF,
            get: FF => FF.keysDown,
            set: (FF, WF) => {
              FF.keysDown = WF
            }
          },
          metadata: uF
        }, qW, VF), (0, CF.j)(null, null, bW, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysDownward" in FF,
            get: FF => FF.keysDownward,
            set: (FF, WF) => {
              FF.keysDownward = WF
            }
          },
          metadata: uF
        }, NF, DF), (0, CF.j)(null, null, RF, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysLeft" in FF,
            get: FF => FF.keysLeft,
            set: (FF, WF) => {
              FF.keysLeft = WF
            }
          },
          metadata: uF
        }, LF, mW), (0, CF.j)(null, null, iW, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRight" in FF,
            get: FF => FF.keysRight,
            set: (FF, WF) => {
              FF.keysRight = WF
            }
          },
          metadata: uF
        }, OF, xW), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: FF => "rotationSpeed" in FF,
            get: FF => FF.rotationSpeed,
            set: (FF, WF) => {
              FF.rotationSpeed = WF
            }
          },
          metadata: uF
        }, ZF, oF), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRotateLeft" in FF,
            get: FF => FF.keysRotateLeft,
            set: (FF, WF) => {
              FF.keysRotateLeft = WF
            }
          },
          metadata: uF
        }, YF, MF), (0, CF.j)(null, null, QF, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRotateRight" in FF,
            get: FF => FF.keysRotateRight,
            set: (FF, WF) => {
              FF.keysRotateRight = WF
            }
          },
          metadata: uF
        }, cW, GF), (0, CF.j)(null, null, rW, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRotateUp" in FF,
            get: FF => FF.keysRotateUp,
            set: (FF, WF) => {
              FF.keysRotateUp = WF
            }
          },
          metadata: uF
        }, zW, IF), (0, CF.j)(null, null, gW, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRotateDown" in FF,
            get: FF => FF.keysRotateDown,
            set: (FF, WF) => {
              FF.keysRotateDown = WF
            }
          },
          metadata: uF
        }, fF, yW), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF
    })();
    bW.b.FreeCameraKeyboardMoveInput = RF;
    var iW = SF(35647),
      eF = SF(38145);
    let EF = (() => {
      var FF;
      let WF, SF, uF = [],
        hF = [],
        bW = [],
        dF = [];
      return FF = class {
        _applyPointerRotation(FF, WF) {
          this._pointerConditions.button = this._currentActiveButton;
          const SF = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!SF || "rotate" !== SF.interaction) return;
          const CF = SF.NCF ?? SF.sensitivity ?? 1 / this.angularSensibility,
            AF = SF.DCF ?? SF.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += FF * CF, this.camera.cameraRotation.x += WF * AF
        }
        constructor() {
          let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = FF, this.buttons = (0, CF.k)(this, uF, [0, 1, 2]), this.angularSensibility = ((0, CF.k)(this, hF), (0, CF.k)(this, bW, 2e3)), this._pointerInput = (0, CF.k)(this, dF), this._previousPosition = null, this.onPointerMovedObservable = new iW.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(FF) {
          FF = PF.h.BackCompatCameraNoPreventDefault(arguments);
          const WF = this.camera.sC(),
            SF = WF.getInputElement();
          this._pointerInput || (this._pointerInput = CF => {
            const AF = CF.event,
              uF = "touch" === AF.pointerType;
            if (!this.touchEnabled && uF) return;
            if (CF.type !== eF.b.POINTERMOVE && -1 === this.buttons.indexOf(AF.button)) return;
            const hF = AF.target;
            if (CF.type === eF.b.POINTERDOWN) {
              if (uF && -1 !== this._activePointerId || !uF && -1 !== this._currentActiveButton) return;
              this._activePointerId = AF.pointerId;
              try {
                hF?.setPointerCapture(AF.pointerId)
              } catch (bW) {} - 1 === this._currentActiveButton && (this._currentActiveButton = AF.button), this._previousPosition = {
                x: AF.clientX,
                y: AF.clientY
              }, FF || (AF.preventDefault(), SF && SF.focus()), WF.isPointerLock && this._onMouseMove && this._onMouseMove(CF.event)
            } else if (CF.type === eF.b.POINTERUP) {
              if (uF && this._activePointerId !== AF.pointerId || !uF && this._currentActiveButton !== AF.button) return;
              try {
                hF?.releasePointerCapture(AF.pointerId)
              } catch (bW) {}
              this._currentActiveButton = -1, this._previousPosition = null, FF || AF.preventDefault(), this._activePointerId = -1
            } else if (CF.type === eF.b.POINTERMOVE && (this._activePointerId === AF.pointerId || !uF))
              if (WF.isPointerLock && this._onMouseMove) this._onMouseMove(CF.event);
              else if (this._previousPosition) {
              const WF = this.camera._calculateHandednessMultiplier(),
                SF = (AF.clientX - this._previousPosition.x) * WF,
                CF = (AF.clientY - this._previousPosition.y) * WF;
              this._allowCameraRotation && this._applyPointerRotation(SF, CF), this.onPointerMovedObservable.notifyObservers({
                offsetX: SF,
                offsetY: CF
              }), this._previousPosition = {
                x: AF.clientX,
                y: AF.clientY
              }, FF || AF.preventDefault()
            }
          }), this._onMouseMove = SF => {
            if (!WF.isPointerLock) return;
            const CF = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(SF.movementX * CF, SF.movementY * CF), this._previousPosition = null, FF || SF.preventDefault()
          }, this._observer = this.camera.OWF()._inputManager._addCameraPointerObserver(this._pointerInput, eF.b.POINTERDOWN | eF.b.POINTERUP | eF.b.POINTERMOVE), SF && (this._contextMenuBind = FF => this.onContextMenu(FF), SF.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(FF) {
          FF.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.OWF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const FF = this.camera.sC().getInputElement();
              FF && FF.removeEventListener("contextmenu", this._contextMenuBind)
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
        const PF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: FF => "buttons" in FF,
            get: FF => FF.buttons,
            set: (FF, WF) => {
              FF.buttons = WF
            }
          },
          metadata: PF
        }, uF, hF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: FF => "angularSensibility" in FF,
            get: FF => FF.angularSensibility,
            set: (FF, WF) => {
              FF.angularSensibility = WF
            }
          },
          metadata: PF
        }, bW, dF), PF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PF
        })
      })(), FF
    })();
    bW.b.FreeCameraMouseInput = EF;
    var QF = SF(38152);
    let rW = (() => {
      var FF;
      let WF, SF, uF, hF = [],
        bW = [],
        dF = [],
        RF = [],
        EF = [],
        rW = [];
      return FF = class {
        constructor() {
          this.wheelPrecisionX = (0, CF.k)(this, hF, 3), this.wheelPrecisionY = ((0, CF.k)(this, bW), (0, CF.k)(this, dF, 3)), this.wheelPrecisionZ = ((0, CF.k)(this, RF), (0, CF.k)(this, EF, 3)), this.onChangedObservable = ((0, CF.k)(this, rW), new iW.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(FF) {
          FF = PF.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = WF => {
            if (WF.type !== eF.b.POINTERWHEEL) return;
            const SF = WF.event,
              CF = SF.deltaMode === QF.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * CF * SF.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * CF * SF.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * CF * SF.deltaZ / this._normalize, SF.preventDefault && (FF || SF.preventDefault())
          }, this._observer = this.camera.OWF()._inputManager._addCameraPointerObserver(this._wheel, eF.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.OWF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const PF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelPrecisionX" in FF,
            get: FF => FF.wheelPrecisionX,
            set: (FF, WF) => {
              FF.wheelPrecisionX = WF
            }
          },
          metadata: PF
        }, hF, bW), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelPrecisionY" in FF,
            get: FF => FF.wheelPrecisionY,
            set: (FF, WF) => {
              FF.wheelPrecisionY = WF
            }
          },
          metadata: PF
        }, dF, RF), (0, CF.j)(null, null, uF, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelPrecisionZ" in FF,
            get: FF => FF.wheelPrecisionZ,
            set: (FF, WF) => {
              FF.wheelPrecisionZ = WF
            }
          },
          metadata: PF
        }, EF, rW), PF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PF
        })
      })(), FF
    })();
    var gW;
    ! function(FF) {
      FF[FF.MoveRelative = 0] = "MoveRelative", FF[FF.RotateRelative = 1] = "RotateRelative", FF[FF.MoveScene = 2] = "MoveScene"
    }(gW || (gW = {}));
    let tW = (() => {
      var FF;
      let WF, SF, hF, bW, dF, PF, RF, iW, eF, EF = rW,
        QF = [];
      return FF = class extends EF {
        constructor() {
          super(...arguments), this.camera = (0, CF.k)(this, QF), this._moveRelative = uF.r.Zero(), this._rotateRelative = uF.r.Zero(), this._moveScene = uF.r.Zero(), this._wheelXAction = gW.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = gW.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(FF) {
          null === FF && this._wheelXAction !== gW.MoveRelative || (this._wheelXAction = gW.MoveRelative, this._wheelXActionCoordinate = FF)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== gW.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(FF) {
          null === FF && this._wheelYAction !== gW.MoveRelative || (this._wheelYAction = gW.MoveRelative, this._wheelYActionCoordinate = FF)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== gW.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(FF) {
          null === FF && this._wheelZAction !== gW.MoveRelative || (this._wheelZAction = gW.MoveRelative, this._wheelZActionCoordinate = FF)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== gW.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(FF) {
          null === FF && this._wheelXAction !== gW.RotateRelative || (this._wheelXAction = gW.RotateRelative, this._wheelXActionCoordinate = FF)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== gW.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(FF) {
          null === FF && this._wheelYAction !== gW.RotateRelative || (this._wheelYAction = gW.RotateRelative, this._wheelYActionCoordinate = FF)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== gW.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(FF) {
          null === FF && this._wheelZAction !== gW.RotateRelative || (this._wheelZAction = gW.RotateRelative, this._wheelZActionCoordinate = FF)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== gW.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(FF) {
          null === FF && this._wheelXAction !== gW.MoveScene || (this._wheelXAction = gW.MoveScene, this._wheelXActionCoordinate = FF)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== gW.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(FF) {
          null === FF && this._wheelYAction !== gW.MoveScene || (this._wheelYAction = gW.MoveScene, this._wheelYActionCoordinate = FF)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== gW.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(FF) {
          null === FF && this._wheelZAction !== gW.MoveScene || (this._wheelZAction = gW.MoveScene, this._wheelZActionCoordinate = FF)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== gW.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.DuF(0), this._rotateRelative.DuF(0), this._moveScene.DuF(0), this._updateCamera(), this.camera.OWF().useRightHandedSystem && (this._moveRelative.z *= -1);
          const FF = uF.b.Zero();
          this.camera.getViewMatrix().invertToRef(FF);
          const WF = uF.r.Zero();
          uF.r.TransformNormalToRef(this._moveRelative, FF, WF), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(WF), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(FF, WF, SF) {
          if (0 === FF) return;
          if (null === WF || null === SF) return;
          let CF = null;
          switch (WF) {
            case gW.MoveRelative:
              CF = this._moveRelative;
              break;
            case gW.RotateRelative:
              CF = this._rotateRelative;
              break;
            case gW.MoveScene:
              CF = this._moveScene
          }
          switch (SF) {
            case 0:
              CF.set(FF, 0, 0);
              break;
            case 1:
              CF.set(0, FF, 0);
              break;
            case 2:
              CF.set(0, 0, FF)
          }
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(EF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], hF = [(0, AF.H)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.H)()], eF = [(0, AF.H)()], (0, CF.j)(FF, null, WF, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelXMoveRelative" in FF,
            set: (FF, WF) => {
              FF.wheelXMoveRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, SF, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelYMoveRelative" in FF,
            set: (FF, WF) => {
              FF.wheelYMoveRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, hF, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelZMoveRelative" in FF,
            set: (FF, WF) => {
              FF.wheelZMoveRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, bW, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelXRotateRelative" in FF,
            set: (FF, WF) => {
              FF.wheelXRotateRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, dF, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelYRotateRelative" in FF,
            set: (FF, WF) => {
              FF.wheelYRotateRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, PF, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelZRotateRelative" in FF,
            set: (FF, WF) => {
              FF.wheelZRotateRelative = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, RF, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelXMoveScene" in FF,
            set: (FF, WF) => {
              FF.wheelXMoveScene = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, iW, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelYMoveScene" in FF,
            set: (FF, WF) => {
              FF.wheelYMoveScene = WF
            }
          },
          metadata: uF
        }, null, QF), (0, CF.j)(FF, null, eF, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelZMoveScene" in FF,
            set: (FF, WF) => {
              FF.wheelZMoveScene = WF
            }
          },
          metadata: uF
        }, null, QF), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF
    })();
    bW.b.FreeCameraMouseWheelInput = tW;
    let TF = (() => {
      var FF;
      let WF, SF, hF = [],
        bW = [],
        dF = [],
        RF = [];
      return FF = class {
        constructor() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = FF, this.touchAngularSensibility = (0, CF.k)(this, hF, 2e5), this.touchMoveSensibility = ((0, CF.k)(this, bW), (0, CF.k)(this, dF, 250)), this.singleFingerRotate = ((0, CF.k)(this, RF), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = PF.h.IsSafari()
        }
        attachControl(FF) {
          FF = PF.h.BackCompatCameraNoPreventDefault(arguments);
          let WF = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = SF => {
              const CF = SF.event,
                AF = "mouse" === CF.pointerType || this._isSafari && "undefined" === typeof CF.pointerType;
              if (this.allowMouse || !AF)
                if (SF.type === eF.b.POINTERDOWN) {
                  if (FF || CF.preventDefault(), this._pointerPressed.push(CF.pointerId), 1 !== this._pointerPressed.length) return;
                  WF = {
                    x: CF.clientX,
                    y: CF.clientY
                  }
                } else if (SF.type === eF.b.POINTERUP) {
                FF || CF.preventDefault();
                const SF = this._pointerPressed.indexOf(CF.pointerId);
                if (-1 === SF) return;
                if (this._pointerPressed.splice(SF, 1), 0 != SF) return;
                WF = null, this._offsetX = null, this._offsetY = null
              } else if (SF.type === eF.b.POINTERMOVE) {
                if (FF || CF.preventDefault(), !WF) return;
                if (0 != this._pointerPressed.indexOf(CF.pointerId)) return;
                this._offsetX = CF.clientX - WF.x, this._offsetY = -(CF.clientY - WF.y)
              }
            }), this._observer = this.camera.OWF()._inputManager._addCameraPointerObserver(this._pointerInput, eF.b.POINTERDOWN | eF.b.POINTERUP | eF.b.POINTERMOVE), this._onLostFocus) {
            const FF = this.camera.sC().getInputElement();
            FF && FF.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.OWF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const FF = this.camera.sC().getInputElement();
              FF && FF.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const FF = this.camera,
            WF = FF.movement.input,
            SF = WF.getEntry("touch", "rotate"),
            CF = WF.getEntry("touch", "translate"),
            AF = FF._calculateHandednessMultiplier(),
            hF = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (SF) {
            const WF = SF.sensitivity ?? 1 / this.touchAngularSensibility;
            FF.cameraRotation.y = this._offsetX * AF * WF, hF && (FF.cameraRotation.x = -this._offsetY * AF * WF)
          }
          if (!hF && CF) {
            const WF = FF._computeLocalCameraSpeed(),
              SF = CF.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              AF = uF.j.HC[0];
            AF.FhF(0, 0, WF * this._offsetY * SF), uF.b.RotationYawPitchRollToRef(FF.rotation.y, FF.rotation.x, 0, FF._cameraRotationMatrix), uF.r.TransformCoordinatesToRef(AF, FF._cameraRotationMatrix, AF), FF.cameraDirection.addInPlace(AF)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: FF => "touchAngularSensibility" in FF,
            get: FF => FF.touchAngularSensibility,
            set: (FF, WF) => {
              FF.touchAngularSensibility = WF
            }
          },
          metadata: uF
        }, hF, bW), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: FF => "touchMoveSensibility" in FF,
            get: FF => FF.touchMoveSensibility,
            set: (FF, WF) => {
              FF.touchMoveSensibility = WF
            }
          },
          metadata: uF
        }, dF, RF), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF
    })();
    bW.b.FreeCameraTouchInput = TF;
    var aW, kW, qW, VF = SF(37855);
    class NF extends bW.d {
      constructor(FF) {
        super(FF), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new RF), this
      }
      addMouse() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new EF(FF), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new tW, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new TF), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(aW = NF.prototype).addDeviceOrientation ?? (aW.addDeviceOrientation = (0, VF.j)("FreeCameraInputsManager", "addDeviceOrientation")), (kW = NF.prototype).addVirtualJoystick ?? (kW.addVirtualJoystick = (0, VF.j)("FreeCameraInputsManager", "addVirtualJoystick")), (qW = NF.prototype).addGamepad ?? (qW.addGamepad = (0, VF.j)("FreeCameraInputsManager", "addGamepad"));
    var DF = SF(37867),
      LF = SF(35660);
    let mW = (() => {
        var FF;
        let WF, SF, bW, dF, RF = hF.h,
          iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [],
          tW = [],
          TF = [];
        return FF = class extends RF {
          get angularSensibility() {
            const FF = this.inputs.attached.mouse;
            return FF ? FF.angularSensibility : 0
          }
          set angularSensibility(FF) {
            const WF = this.inputs.attached.mouse;
            WF && (WF.angularSensibility = FF)
          }
          get keysUp() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysUp : []
          }
          set keysUp(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysUp = FF)
          }
          get keysUpward() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysUpward : []
          }
          set keysUpward(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysUpward = FF)
          }
          get keysDown() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysDown : []
          }
          set keysDown(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysDown = FF)
          }
          get keysDownward() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysDownward : []
          }
          set keysDownward(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysDownward = FF)
          }
          get keysLeft() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysLeft : []
          }
          set keysLeft(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysLeft = FF)
          }
          get keysRight() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRight : []
          }
          set keysRight(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRight = FF)
          }
          get keysRotateLeft() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRotateLeft : []
          }
          set keysRotateLeft(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRotateLeft = FF)
          }
          get keysRotateRight() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRotateRight : []
          }
          set keysRotateRight(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRotateRight = FF)
          }
          get keysRotateUp() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRotateUp : []
          }
          set keysRotateUp(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRotateUp = FF)
          }
          get keysRotateDown() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRotateDown : []
          }
          set keysRotateDown(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRotateDown = FF)
          }
          constructor(FF, WF, SF) {
            var AF;
            super(FF, WF, SF, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), AF = this, this.ellipsoid = (0, CF.k)(this, iW, new uF.r(.5, 1, .5)), this.ellipsoidOffset = ((0, CF.k)(this, eF), (0, CF.k)(this, EF, new uF.r(0, 0, 0))), this.checkCollisions = ((0, CF.k)(this, QF), (0, CF.k)(this, rW, !1)), this.applyGravity = ((0, CF.k)(this, gW), (0, CF.k)(this, tW, !1)), this.inputs = (0, CF.k)(this, TF), this._needMoveForGravity = !1, this._oldPosition = uF.r.Zero(), this._diffPosition = uF.r.Zero(), this._newPosition = uF.r.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(FF, WF) {
              let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              AF._newPosition.fdF(WF), AF._newPosition.subtractToRef(AF._oldPosition, AF._diffPosition), AF._diffPosition.length() > DF.e.CollisionsEpsilon && (AF.position.addToRef(AF._diffPosition, AF._deferredPositionUpdate), AF._deferOnly ? AF._deferredUpdated = !0 : AF.position.fdF(AF._deferredPositionUpdate), AF.gS && SF && AF.gS(SF))
            }, this.inputs = new NF(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(FF, WF) {
            WF = PF.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(WF)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new uF.r(0, 0, 0), this.cameraRotation = new uF.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(FF) {
            this._collisionMask = isNaN(FF) ? -1 : FF
          }
          _collideWithWorld(FF) {
            let WF;
            WF = this.parent ? uF.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, WF.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const SF = this.OWF().collisionCoordinator;
            this._collider || (this._collider = SF.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let CF = FF;
            this.applyGravity && (CF = FF.add(this.OWF().gravity)), SF.getNewPosition(this._oldPosition, CF, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = uF.r.Zero(), this._transformedDirection = uF.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(FF) {
            this._needMoveForGravity = FF
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.OWF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(RF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.G)()], SF = [(0, AF.G)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: FF => "ellipsoid" in FF,
              get: FF => FF.ellipsoid,
              set: (FF, WF) => {
                FF.ellipsoid = WF
              }
            },
            metadata: uF
          }, iW, eF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "ellipsoidOffset" in FF,
              get: FF => FF.ellipsoidOffset,
              set: (FF, WF) => {
                FF.ellipsoidOffset = WF
              }
            },
            metadata: uF
          }, EF, QF), (0, CF.j)(null, null, bW, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: FF => "checkCollisions" in FF,
              get: FF => FF.checkCollisions,
              set: (FF, WF) => {
                FF.checkCollisions = WF
              }
            },
            metadata: uF
          }, rW, gW), (0, CF.j)(null, null, dF, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: FF => "applyGravity" in FF,
              get: FF => FF.applyGravity,
              set: (FF, WF) => {
                FF.applyGravity = WF
              }
            },
            metadata: uF
          }, tW, TF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      OF = !1;
    OF || (OF = !0, (0, LF.f)("BABYLON.FreeCamera", mW))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
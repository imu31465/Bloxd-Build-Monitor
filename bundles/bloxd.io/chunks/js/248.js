export const id = 248;
export const ids = [248];
export const modules = {
  39766: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Du
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(39770),
      Ju = yu(39804),
      Nu = yu(39747),
      Xu = yu(39655);
    let Vu = (() => {
      var uu;
      let Ru, yu, mu, Ju, Vu, ru, Bu, xu, Su, pu, Tu, Wu = [],
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Au = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [];
      return uu = class {
        constructor() {
          this.keysUp = (0, Eu.l)(this, Wu, [38]), this.keysUpward = ((0, Eu.l)(this, ju), (0, Eu.l)(this, Hu, [33])), this.keysDown = ((0, Eu.l)(this, du), (0, Eu.l)(this, bu, [40])), this.keysDownward = ((0, Eu.l)(this, Cu), (0, Eu.l)(this, ku, [34])), this.keysLeft = ((0, Eu.l)(this, eu), (0, Eu.l)(this, Au, [37])), this.keysRight = ((0, Eu.l)(this, Du), (0, Eu.l)(this, Mu, [39])), this.rotationSpeed = ((0, Eu.l)(this, Iu), (0, Eu.l)(this, Gu, .5)), this.keysRotateLeft = ((0, Eu.l)(this, Uu), (0, Eu.l)(this, nu, [])), this.keysRotateRight = ((0, Eu.l)(this, su), (0, Eu.l)(this, tu, [])), this.keysRotateUp = ((0, Eu.l)(this, lu), (0, Eu.l)(this, gu, [])), this.keysRotateDown = ((0, Eu.l)(this, cu), (0, Eu.l)(this, Lu, [])), this._keys = ((0, Eu.l)(this, zu), new Array)
        }
        attachControl(uu) {
          uu = Xu.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.lD(), this._engine = this._scene.eS(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Ru => {
            const yu = Ru.event;
            if (!yu.metaKey)
              if (Ru.type === Nu.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(yu.keyCode) || -1 !== this.keysDown.indexOf(yu.keyCode) || -1 !== this.keysLeft.indexOf(yu.keyCode) || -1 !== this.keysRight.indexOf(yu.keyCode) || -1 !== this.keysUpward.indexOf(yu.keyCode) || -1 !== this.keysDownward.indexOf(yu.keyCode) || -1 !== this.keysRotateLeft.indexOf(yu.keyCode) || -1 !== this.keysRotateRight.indexOf(yu.keyCode) || -1 !== this.keysRotateUp.indexOf(yu.keyCode) || -1 !== this.keysRotateDown.indexOf(yu.keyCode)) {
                  -1 === this._keys.indexOf(yu.keyCode) && this._keys.push(yu.keyCode), uu || yu.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(yu.keyCode) || -1 !== this.keysDown.indexOf(yu.keyCode) || -1 !== this.keysLeft.indexOf(yu.keyCode) || -1 !== this.keysRight.indexOf(yu.keyCode) || -1 !== this.keysUpward.indexOf(yu.keyCode) || -1 !== this.keysDownward.indexOf(yu.keyCode) || -1 !== this.keysRotateLeft.indexOf(yu.keyCode) || -1 !== this.keysRotateRight.indexOf(yu.keyCode) || -1 !== this.keysRotateUp.indexOf(yu.keyCode) || -1 !== this.keysRotateDown.indexOf(yu.keyCode)) {
              const Ru = this._keys.indexOf(yu.keyCode);
              Ru >= 0 && this._keys.splice(Ru, 1), uu || yu.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const uu = this.camera,
              Ru = uu.movement.input,
              yu = Ru.getEntry("keyboard", "translate"),
              Eu = Ru.getEntry("keyboard", "rotate"),
              Ku = Eu?.sensitivity ?? 1,
              mu = uu._localDirection.muu(0, 0, 0);
            for (let Qu = 0; Qu < this._keys.length; Qu++) {
              const Ru = this._keys[Qu]; - 1 !== this.keysLeft.indexOf(Ru) ? mu.x -= 1 : -1 !== this.keysUp.indexOf(Ru) ? mu.z += 1 : -1 !== this.keysRight.indexOf(Ru) ? mu.x += 1 : -1 !== this.keysDown.indexOf(Ru) ? mu.z -= 1 : -1 !== this.keysUpward.indexOf(Ru) ? mu.y += 1 : -1 !== this.keysDownward.indexOf(Ru) ? mu.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Ru) ? Eu && (uu.cameraRotation.y -= this._getLocalRotation() * Ku) : -1 !== this.keysRotateRight.indexOf(Ru) ? Eu && (uu.cameraRotation.y += this._getLocalRotation() * Ku) : -1 !== this.keysRotateUp.indexOf(Ru) ? Eu && (uu.cameraRotation.x -= this._getLocalRotation() * Ku) : -1 !== this.keysRotateDown.indexOf(Ru) && Eu && (uu.cameraRotation.x += this._getLocalRotation() * Ku)
            }
            if (yu && (0 !== mu.x || 0 !== mu.y || 0 !== mu.z)) {
              const Ru = uu._computeLocalCameraSpeed() * (yu.sensitivity ?? 1);
              mu.normalize().scaleInPlace(Ru), uu.lD().useRightHandedSystem && (mu.z *= -1), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), Qu.p.TransformNormalToRef(mu, uu._cameraTransformMatrix, uu._transformedDirection), uu.cameraDirection.addInPlace(uu._transformedDirection)
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
          const uu = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * uu
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], mu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.K)()], Bu = [(0, Ku.K)()], xu = [(0, Ku.K)()], Su = [(0, Ku.K)()], pu = [(0, Ku.K)()], Tu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUp" in uu,
            get: uu => uu.keysUp,
            set: (uu, Ru) => {
              uu.keysUp = Ru
            }
          },
          metadata: Qu
        }, Wu, ju), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUpward" in uu,
            get: uu => uu.keysUpward,
            set: (uu, Ru) => {
              uu.keysUpward = Ru
            }
          },
          metadata: Qu
        }, Hu, du), (0, Eu.h)(null, null, mu, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDown" in uu,
            get: uu => uu.keysDown,
            set: (uu, Ru) => {
              uu.keysDown = Ru
            }
          },
          metadata: Qu
        }, bu, Cu), (0, Eu.h)(null, null, Ju, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDownward" in uu,
            get: uu => uu.keysDownward,
            set: (uu, Ru) => {
              uu.keysDownward = Ru
            }
          },
          metadata: Qu
        }, ku, eu), (0, Eu.h)(null, null, Vu, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysLeft" in uu,
            get: uu => uu.keysLeft,
            set: (uu, Ru) => {
              uu.keysLeft = Ru
            }
          },
          metadata: Qu
        }, Au, Du), (0, Eu.h)(null, null, ru, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRight" in uu,
            get: uu => uu.keysRight,
            set: (uu, Ru) => {
              uu.keysRight = Ru
            }
          },
          metadata: Qu
        }, Mu, Iu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: uu => "rotationSpeed" in uu,
            get: uu => uu.rotationSpeed,
            set: (uu, Ru) => {
              uu.rotationSpeed = Ru
            }
          },
          metadata: Qu
        }, Gu, Uu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateLeft" in uu,
            get: uu => uu.keysRotateLeft,
            set: (uu, Ru) => {
              uu.keysRotateLeft = Ru
            }
          },
          metadata: Qu
        }, nu, su), (0, Eu.h)(null, null, Su, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateRight" in uu,
            get: uu => uu.keysRotateRight,
            set: (uu, Ru) => {
              uu.keysRotateRight = Ru
            }
          },
          metadata: Qu
        }, tu, lu), (0, Eu.h)(null, null, pu, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateUp" in uu,
            get: uu => uu.keysRotateUp,
            set: (uu, Ru) => {
              uu.keysRotateUp = Ru
            }
          },
          metadata: Qu
        }, gu, cu), (0, Eu.h)(null, null, Tu, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateDown" in uu,
            get: uu => uu.keysRotateDown,
            set: (uu, Ru) => {
              uu.keysRotateDown = Ru
            }
          },
          metadata: Qu
        }, Lu, zu), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu
    })();
    Ju.d.FreeCameraKeyboardMoveInput = Vu;
    var ru = yu(36858),
      Bu = yu(39745);
    let xu = (() => {
      var uu;
      let Ru, yu, Qu = [],
        mu = [],
        Ju = [],
        Nu = [];
      return uu = class {
        _applyPointerRotation(uu, Ru) {
          this._pointerConditions.button = this._currentActiveButton;
          const yu = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!yu || "rotate" !== yu.interaction) return;
          const Eu = yu.bZ ?? yu.sensitivity ?? 1 / this.angularSensibility,
            Ku = yu.eZ ?? yu.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += uu * Eu, this.camera.cameraRotation.x += Ru * Ku
        }
        constructor() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = uu, this.buttons = (0, Eu.l)(this, Qu, [0, 1, 2]), this.angularSensibility = ((0, Eu.l)(this, mu), (0, Eu.l)(this, Ju, 2e3)), this._pointerInput = (0, Eu.l)(this, Nu), this._previousPosition = null, this.onPointerMovedObservable = new ru.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(uu) {
          uu = Xu.i.BackCompatCameraNoPreventDefault(arguments);
          const Ru = this.camera.eS(),
            yu = Ru.getInputElement();
          this._pointerInput || (this._pointerInput = Eu => {
            const Ku = Eu.event,
              Qu = "touch" === Ku.pointerType;
            if (!this.touchEnabled && Qu) return;
            if (Eu.type !== Bu.e.POINTERMOVE && -1 === this.buttons.indexOf(Ku.button)) return;
            const mu = Ku.target;
            if (Eu.type === Bu.e.POINTERDOWN) {
              if (Qu && -1 !== this._activePointerId || !Qu && -1 !== this._currentActiveButton) return;
              this._activePointerId = Ku.pointerId;
              try {
                mu?.setPointerCapture(Ku.pointerId)
              } catch (Ju) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Ku.button), this._previousPosition = {
                x: Ku.clientX,
                y: Ku.clientY
              }, uu || (Ku.preventDefault(), yu && yu.focus()), Ru.isPointerLock && this._onMouseMove && this._onMouseMove(Eu.event)
            } else if (Eu.type === Bu.e.POINTERUP) {
              if (Qu && this._activePointerId !== Ku.pointerId || !Qu && this._currentActiveButton !== Ku.button) return;
              try {
                mu?.releasePointerCapture(Ku.pointerId)
              } catch (Ju) {}
              this._currentActiveButton = -1, this._previousPosition = null, uu || Ku.preventDefault(), this._activePointerId = -1
            } else if (Eu.type === Bu.e.POINTERMOVE && (this._activePointerId === Ku.pointerId || !Qu))
              if (Ru.isPointerLock && this._onMouseMove) this._onMouseMove(Eu.event);
              else if (this._previousPosition) {
              const Ru = this.camera._calculateHandednessMultiplier(),
                yu = (Ku.clientX - this._previousPosition.x) * Ru,
                Eu = (Ku.clientY - this._previousPosition.y) * Ru;
              this._allowCameraRotation && this._applyPointerRotation(yu, Eu), this.onPointerMovedObservable.notifyObservers({
                offsetX: yu,
                offsetY: Eu
              }), this._previousPosition = {
                x: Ku.clientX,
                y: Ku.clientY
              }, uu || Ku.preventDefault()
            }
          }), this._onMouseMove = yu => {
            if (!Ru.isPointerLock) return;
            const Eu = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(yu.movementX * Eu, yu.movementY * Eu), this._previousPosition = null, uu || yu.preventDefault()
          }, this._observer = this.camera.lD()._inputManager._addCameraPointerObserver(this._pointerInput, Bu.e.POINTERDOWN | Bu.e.POINTERUP | Bu.e.POINTERMOVE), yu && (this._contextMenuBind = uu => this.onContextMenu(uu), yu.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(uu) {
          uu.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.lD()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const uu = this.camera.eS().getInputElement();
              uu && uu.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: uu => "buttons" in uu,
            get: uu => uu.buttons,
            set: (uu, Ru) => {
              uu.buttons = Ru
            }
          },
          metadata: Xu
        }, Qu, mu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "angularSensibility" in uu,
            get: uu => uu.angularSensibility,
            set: (uu, Ru) => {
              uu.angularSensibility = Ru
            }
          },
          metadata: Xu
        }, Ju, Nu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu
    })();
    Ju.d.FreeCameraMouseInput = xu;
    var Su = yu(39754);
    let pu = (() => {
      var uu;
      let Ru, yu, Qu, mu = [],
        Ju = [],
        Nu = [],
        Vu = [],
        xu = [],
        pu = [];
      return uu = class {
        constructor() {
          this.wheelPrecisionX = (0, Eu.l)(this, mu, 3), this.wheelPrecisionY = ((0, Eu.l)(this, Ju), (0, Eu.l)(this, Nu, 3)), this.wheelPrecisionZ = ((0, Eu.l)(this, Vu), (0, Eu.l)(this, xu, 3)), this.onChangedObservable = ((0, Eu.l)(this, pu), new ru.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(uu) {
          uu = Xu.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = Ru => {
            if (Ru.type !== Bu.e.POINTERWHEEL) return;
            const yu = Ru.event,
              Eu = yu.deltaMode === Su.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Eu * yu.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Eu * yu.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Eu * yu.deltaZ / this._normalize, yu.preventDefault && (uu || yu.preventDefault())
          }, this._observer = this.camera.lD()._inputManager._addCameraPointerObserver(this._wheel, Bu.e.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.lD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionX" in uu,
            get: uu => uu.wheelPrecisionX,
            set: (uu, Ru) => {
              uu.wheelPrecisionX = Ru
            }
          },
          metadata: Xu
        }, mu, Ju), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionY" in uu,
            get: uu => uu.wheelPrecisionY,
            set: (uu, Ru) => {
              uu.wheelPrecisionY = Ru
            }
          },
          metadata: Xu
        }, Nu, Vu), (0, Eu.h)(null, null, Qu, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionZ" in uu,
            get: uu => uu.wheelPrecisionZ,
            set: (uu, Ru) => {
              uu.wheelPrecisionZ = Ru
            }
          },
          metadata: Xu
        }, xu, pu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu
    })();
    var Tu;
    ! function(uu) {
      uu[uu.MoveRelative = 0] = "MoveRelative", uu[uu.RotateRelative = 1] = "RotateRelative", uu[uu.MoveScene = 2] = "MoveScene"
    }(Tu || (Tu = {}));
    let Wu = (() => {
      var uu;
      let Ru, yu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu = pu,
        Su = [];
      return uu = class extends xu {
        constructor() {
          super(...arguments), this.camera = (0, Eu.l)(this, Su), this._moveRelative = Qu.p.Zero(), this._rotateRelative = Qu.p.Zero(), this._moveScene = Qu.p.Zero(), this._wheelXAction = Tu.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Tu.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(uu) {
          null === uu && this._wheelXAction !== Tu.MoveRelative || (this._wheelXAction = Tu.MoveRelative, this._wheelXActionCoordinate = uu)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Tu.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(uu) {
          null === uu && this._wheelYAction !== Tu.MoveRelative || (this._wheelYAction = Tu.MoveRelative, this._wheelYActionCoordinate = uu)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Tu.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(uu) {
          null === uu && this._wheelZAction !== Tu.MoveRelative || (this._wheelZAction = Tu.MoveRelative, this._wheelZActionCoordinate = uu)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Tu.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(uu) {
          null === uu && this._wheelXAction !== Tu.RotateRelative || (this._wheelXAction = Tu.RotateRelative, this._wheelXActionCoordinate = uu)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Tu.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(uu) {
          null === uu && this._wheelYAction !== Tu.RotateRelative || (this._wheelYAction = Tu.RotateRelative, this._wheelYActionCoordinate = uu)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Tu.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(uu) {
          null === uu && this._wheelZAction !== Tu.RotateRelative || (this._wheelZAction = Tu.RotateRelative, this._wheelZActionCoordinate = uu)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Tu.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(uu) {
          null === uu && this._wheelXAction !== Tu.MoveScene || (this._wheelXAction = Tu.MoveScene, this._wheelXActionCoordinate = uu)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Tu.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(uu) {
          null === uu && this._wheelYAction !== Tu.MoveScene || (this._wheelYAction = Tu.MoveScene, this._wheelYActionCoordinate = uu)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Tu.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(uu) {
          null === uu && this._wheelZAction !== Tu.MoveScene || (this._wheelZAction = Tu.MoveScene, this._wheelZActionCoordinate = uu)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Tu.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.e_(0), this._rotateRelative.e_(0), this._moveScene.e_(0), this._updateCamera(), this.camera.lD().useRightHandedSystem && (this._moveRelative.z *= -1);
          const uu = Qu.d.Zero();
          this.camera.getViewMatrix().invertToRef(uu);
          const Ru = Qu.p.Zero();
          Qu.p.TransformNormalToRef(this._moveRelative, uu, Ru), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Ru), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(uu, Ru, yu) {
          if (0 === uu) return;
          if (null === Ru || null === yu) return;
          let Eu = null;
          switch (Ru) {
            case Tu.MoveRelative:
              Eu = this._moveRelative;
              break;
            case Tu.RotateRelative:
              Eu = this._rotateRelative;
              break;
            case Tu.MoveScene:
              Eu = this._moveScene
          }
          switch (yu) {
            case 0:
              Eu.set(uu, 0, 0);
              break;
            case 1:
              Eu.set(0, uu, 0);
              break;
            case 2:
              Eu.set(0, 0, uu)
          }
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(xu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], mu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.K)()], Bu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Ru, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXMoveRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelXMoveRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, yu, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYMoveRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelYMoveRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, mu, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZMoveRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelZMoveRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, Ju, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXRotateRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelXRotateRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, Nu, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYRotateRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelYRotateRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, Xu, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZRotateRelative" in uu,
            set: (uu, Ru) => {
              uu.wheelZRotateRelative = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, Vu, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXMoveScene" in uu,
            set: (uu, Ru) => {
              uu.wheelXMoveScene = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, ru, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYMoveScene" in uu,
            set: (uu, Ru) => {
              uu.wheelYMoveScene = Ru
            }
          },
          metadata: Qu
        }, null, Su), (0, Eu.h)(uu, null, Bu, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZMoveScene" in uu,
            set: (uu, Ru) => {
              uu.wheelZMoveScene = Ru
            }
          },
          metadata: Qu
        }, null, Su), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu
    })();
    Ju.d.FreeCameraMouseWheelInput = Wu;
    let ju = (() => {
      var uu;
      let Ru, yu, mu = [],
        Ju = [],
        Nu = [],
        Vu = [];
      return uu = class {
        constructor() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = uu, this.touchAngularSensibility = (0, Eu.l)(this, mu, 2e5), this.touchMoveSensibility = ((0, Eu.l)(this, Ju), (0, Eu.l)(this, Nu, 250)), this.singleFingerRotate = ((0, Eu.l)(this, Vu), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Xu.i.IsSafari()
        }
        attachControl(uu) {
          uu = Xu.i.BackCompatCameraNoPreventDefault(arguments);
          let Ru = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = yu => {
              const Eu = yu.event,
                Ku = "mouse" === Eu.pointerType || this._isSafari && "undefined" === typeof Eu.pointerType;
              if (this.allowMouse || !Ku)
                if (yu.type === Bu.e.POINTERDOWN) {
                  if (uu || Eu.preventDefault(), this._pointerPressed.push(Eu.pointerId), 1 !== this._pointerPressed.length) return;
                  Ru = {
                    x: Eu.clientX,
                    y: Eu.clientY
                  }
                } else if (yu.type === Bu.e.POINTERUP) {
                uu || Eu.preventDefault();
                const yu = this._pointerPressed.indexOf(Eu.pointerId);
                if (-1 === yu) return;
                if (this._pointerPressed.splice(yu, 1), 0 != yu) return;
                Ru = null, this._offsetX = null, this._offsetY = null
              } else if (yu.type === Bu.e.POINTERMOVE) {
                if (uu || Eu.preventDefault(), !Ru) return;
                if (0 != this._pointerPressed.indexOf(Eu.pointerId)) return;
                this._offsetX = Eu.clientX - Ru.x, this._offsetY = -(Eu.clientY - Ru.y)
              }
            }), this._observer = this.camera.lD()._inputManager._addCameraPointerObserver(this._pointerInput, Bu.e.POINTERDOWN | Bu.e.POINTERUP | Bu.e.POINTERMOVE), this._onLostFocus) {
            const uu = this.camera.eS().getInputElement();
            uu && uu.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.lD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const uu = this.camera.eS().getInputElement();
              uu && uu.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const uu = this.camera,
            Ru = uu.movement.input,
            yu = Ru.getEntry("touch", "rotate"),
            Eu = Ru.getEntry("touch", "translate"),
            Ku = uu._calculateHandednessMultiplier(),
            mu = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (yu) {
            const Ru = yu.sensitivity ?? 1 / this.touchAngularSensibility;
            uu.cameraRotation.y = this._offsetX * Ku * Ru, mu && (uu.cameraRotation.x = -this._offsetY * Ku * Ru)
          }
          if (!mu && Eu) {
            const Ru = uu._computeLocalCameraSpeed(),
              yu = Eu.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Ku = Qu.m.MS[0];
            Ku.muu(0, 0, Ru * this._offsetY * yu), Qu.d.RotationYawPitchRollToRef(uu.rotation.y, uu.rotation.x, 0, uu._cameraRotationMatrix), Qu.p.TransformCoordinatesToRef(Ku, uu._cameraRotationMatrix, Ku), uu.cameraDirection.addInPlace(Ku)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "touchAngularSensibility" in uu,
            get: uu => uu.touchAngularSensibility,
            set: (uu, Ru) => {
              uu.touchAngularSensibility = Ru
            }
          },
          metadata: Qu
        }, mu, Ju), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "touchMoveSensibility" in uu,
            get: uu => uu.touchMoveSensibility,
            set: (uu, Ru) => {
              uu.touchMoveSensibility = Ru
            }
          },
          metadata: Qu
        }, Nu, Vu), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu
    })();
    Ju.d.FreeCameraTouchInput = ju;
    var Hu, du, bu, Cu = yu(39430);
    class ku extends Ju.h {
      constructor(uu) {
        super(uu), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Vu), this
      }
      addMouse() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new xu(uu), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Wu, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new ju), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Hu = ku.prototype).addDeviceOrientation ?? (Hu.addDeviceOrientation = (0, Cu.i)("FreeCameraInputsManager", "addDeviceOrientation")), (du = ku.prototype).addVirtualJoystick ?? (du.addVirtualJoystick = (0, Cu.i)("FreeCameraInputsManager", "addVirtualJoystick")), (bu = ku.prototype).addGamepad ?? (bu.addGamepad = (0, Cu.i)("FreeCameraInputsManager", "addGamepad"));
    var eu = yu(39455),
      Au = yu(36871);
    let Du = (() => {
        var uu;
        let Ru, yu, Ju, Nu, Vu = mu.f,
          ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [],
          Wu = [],
          ju = [];
        return uu = class extends Vu {
          get angularSensibility() {
            const uu = this.inputs.attached.mouse;
            return uu ? uu.angularSensibility : 0
          }
          set angularSensibility(uu) {
            const Ru = this.inputs.attached.mouse;
            Ru && (Ru.angularSensibility = uu)
          }
          get keysUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUp : []
          }
          set keysUp(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysUp = uu)
          }
          get keysUpward() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUpward : []
          }
          set keysUpward(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysUpward = uu)
          }
          get keysDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDown : []
          }
          set keysDown(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysDown = uu)
          }
          get keysDownward() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDownward : []
          }
          set keysDownward(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysDownward = uu)
          }
          get keysLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysLeft : []
          }
          set keysLeft(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysLeft = uu)
          }
          get keysRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRight : []
          }
          set keysRight(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRight = uu)
          }
          get keysRotateLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateLeft : []
          }
          set keysRotateLeft(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRotateLeft = uu)
          }
          get keysRotateRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateRight : []
          }
          set keysRotateRight(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRotateRight = uu)
          }
          get keysRotateUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateUp : []
          }
          set keysRotateUp(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRotateUp = uu)
          }
          get keysRotateDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateDown : []
          }
          set keysRotateDown(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRotateDown = uu)
          }
          constructor(uu, Ru, yu) {
            var Ku;
            super(uu, Ru, yu, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Ku = this, this.ellipsoid = (0, Eu.l)(this, ru, new Qu.p(.5, 1, .5)), this.ellipsoidOffset = ((0, Eu.l)(this, Bu), (0, Eu.l)(this, xu, new Qu.p(0, 0, 0))), this.checkCollisions = ((0, Eu.l)(this, Su), (0, Eu.l)(this, pu, !1)), this.applyGravity = ((0, Eu.l)(this, Tu), (0, Eu.l)(this, Wu, !1)), this.inputs = (0, Eu.l)(this, ju), this._needMoveForGravity = !1, this._oldPosition = Qu.p.Zero(), this._diffPosition = Qu.p.Zero(), this._newPosition = Qu.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(uu, Ru) {
              let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Ku._newPosition.Oyu(Ru), Ku._newPosition.subtractToRef(Ku._oldPosition, Ku._diffPosition), Ku._diffPosition.length() > eu.d.CollisionsEpsilon && (Ku.position.addToRef(Ku._diffPosition, Ku._deferredPositionUpdate), Ku._deferOnly ? Ku._deferredUpdated = !0 : Ku.position.Oyu(Ku._deferredPositionUpdate), Ku.uB && yu && Ku.uB(yu))
            }, this.inputs = new ku(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(uu, Ru) {
            Ru = Xu.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Ru)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Qu.p(0, 0, 0), this.cameraRotation = new Qu.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(uu) {
            this._collisionMask = isNaN(uu) ? -1 : uu
          }
          _collideWithWorld(uu) {
            let Ru;
            Ru = this.parent ? Qu.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Ru.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const yu = this.lD().collisionCoordinator;
            this._collider || (this._collider = yu.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Eu = uu;
            this.applyGravity && (Eu = uu.add(this.lD().gravity)), yu.getNewPosition(this._oldPosition, Eu, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Qu.p.Zero(), this._transformedDirection = Qu.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(uu) {
            this._needMoveForGravity = uu
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.lD().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.G)()], yu = [(0, Ku.G)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: uu => "ellipsoid" in uu,
              get: uu => uu.ellipsoid,
              set: (uu, Ru) => {
                uu.ellipsoid = Ru
              }
            },
            metadata: Qu
          }, ru, Bu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "ellipsoidOffset" in uu,
              get: uu => uu.ellipsoidOffset,
              set: (uu, Ru) => {
                uu.ellipsoidOffset = Ru
              }
            },
            metadata: Qu
          }, xu, Su), (0, Eu.h)(null, null, Ju, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: uu => "checkCollisions" in uu,
              get: uu => uu.checkCollisions,
              set: (uu, Ru) => {
                uu.checkCollisions = Ru
              }
            },
            metadata: Qu
          }, pu, Tu), (0, Eu.h)(null, null, Nu, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyGravity" in uu,
              get: uu => uu.applyGravity,
              set: (uu, Ru) => {
                uu.applyGravity = Ru
              }
            },
            metadata: Qu
          }, Wu, ju), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      Mu = !1;
    Mu || (Mu = !0, (0, Au.c)("BABYLON.FreeCamera", Du))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
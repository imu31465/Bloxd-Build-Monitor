export const id = 262;
export const ids = [262];
export const modules = {
  40456: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => au
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(40459),
      lu = ju(40499),
      qu = ju(40434),
      fu = ju(40356);
    let Cu = (() => {
      var uu;
      let Eu, ju, Xu, lu, Cu, bu, cu, Nu, Ou, Yu, hu, Du = [],
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        du = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [];
      return uu = class {
        constructor() {
          this.keysUp = (0, su.g)(this, Du, [38]), this.keysUpward = ((0, su.g)(this, gu), (0, su.g)(this, Mu, [33])), this.keysDown = ((0, su.g)(this, eu), (0, su.g)(this, Gu, [40])), this.keysDownward = ((0, su.g)(this, pu), (0, su.g)(this, wu, [34])), this.keysLeft = ((0, su.g)(this, Ju), (0, su.g)(this, du, [37])), this.keysRight = ((0, su.g)(this, au), (0, su.g)(this, Pu, [39])), this.rotationSpeed = ((0, su.g)(this, ou), (0, su.g)(this, ku, .5)), this.keysRotateLeft = ((0, su.g)(this, mu), (0, su.g)(this, vu, [])), this.keysRotateRight = ((0, su.g)(this, Ku), (0, su.g)(this, Vu, [])), this.keysRotateUp = ((0, su.g)(this, ru), (0, su.g)(this, Qu, [])), this.keysRotateDown = ((0, su.g)(this, iu), (0, su.g)(this, Wu, [])), this._keys = ((0, su.g)(this, Su), new Array)
        }
        attachControl(uu) {
          uu = fu.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hV(), this._engine = this._scene.wO(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eu => {
            const ju = Eu.event;
            if (!ju.metaKey)
              if (Eu.type === qu.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ju.keyCode) || -1 !== this.keysDown.indexOf(ju.keyCode) || -1 !== this.keysLeft.indexOf(ju.keyCode) || -1 !== this.keysRight.indexOf(ju.keyCode) || -1 !== this.keysUpward.indexOf(ju.keyCode) || -1 !== this.keysDownward.indexOf(ju.keyCode) || -1 !== this.keysRotateLeft.indexOf(ju.keyCode) || -1 !== this.keysRotateRight.indexOf(ju.keyCode) || -1 !== this.keysRotateUp.indexOf(ju.keyCode) || -1 !== this.keysRotateDown.indexOf(ju.keyCode)) {
                  -1 === this._keys.indexOf(ju.keyCode) && this._keys.push(ju.keyCode), uu || ju.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ju.keyCode) || -1 !== this.keysDown.indexOf(ju.keyCode) || -1 !== this.keysLeft.indexOf(ju.keyCode) || -1 !== this.keysRight.indexOf(ju.keyCode) || -1 !== this.keysUpward.indexOf(ju.keyCode) || -1 !== this.keysDownward.indexOf(ju.keyCode) || -1 !== this.keysRotateLeft.indexOf(ju.keyCode) || -1 !== this.keysRotateRight.indexOf(ju.keyCode) || -1 !== this.keysRotateUp.indexOf(ju.keyCode) || -1 !== this.keysRotateDown.indexOf(ju.keyCode)) {
              const Eu = this._keys.indexOf(ju.keyCode);
              Eu >= 0 && this._keys.splice(Eu, 1), uu || ju.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const uu = this.camera,
              Eu = uu.movement.input,
              ju = Eu.getEntry("keyboard", "translate"),
              su = Eu.getEntry("keyboard", "rotate"),
              Uu = su?.sensitivity ?? 1,
              Xu = uu._localDirection.T6(0, 0, 0);
            for (let Zu = 0; Zu < this._keys.length; Zu++) {
              const Eu = this._keys[Zu]; - 1 !== this.keysLeft.indexOf(Eu) ? Xu.x -= 1 : -1 !== this.keysUp.indexOf(Eu) ? Xu.z += 1 : -1 !== this.keysRight.indexOf(Eu) ? Xu.x += 1 : -1 !== this.keysDown.indexOf(Eu) ? Xu.z -= 1 : -1 !== this.keysUpward.indexOf(Eu) ? Xu.y += 1 : -1 !== this.keysDownward.indexOf(Eu) ? Xu.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Eu) ? su && (uu.cameraRotation.y -= this._getLocalRotation() * Uu) : -1 !== this.keysRotateRight.indexOf(Eu) ? su && (uu.cameraRotation.y += this._getLocalRotation() * Uu) : -1 !== this.keysRotateUp.indexOf(Eu) ? su && (uu.cameraRotation.x -= this._getLocalRotation() * Uu) : -1 !== this.keysRotateDown.indexOf(Eu) && su && (uu.cameraRotation.x += this._getLocalRotation() * Uu)
            }
            if (ju && (0 !== Xu.x || 0 !== Xu.y || 0 !== Xu.z)) {
              const Eu = uu._computeLocalCameraSpeed() * (ju.sensitivity ?? 1);
              Xu.normalize().scaleInPlace(Eu), uu.hV().useRightHandedSystem && (Xu.z *= -1), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), Zu.t.TransformNormalToRef(Xu, uu._cameraTransformMatrix, uu._transformedDirection), uu.cameraDirection.addInPlace(uu._transformedDirection)
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
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], hu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUp" in uu,
            get: uu => uu.keysUp,
            set: (uu, Eu) => {
              uu.keysUp = Eu
            }
          },
          metadata: Zu
        }, Du, gu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUpward" in uu,
            get: uu => uu.keysUpward,
            set: (uu, Eu) => {
              uu.keysUpward = Eu
            }
          },
          metadata: Zu
        }, Mu, eu), (0, su.e)(null, null, Xu, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDown" in uu,
            get: uu => uu.keysDown,
            set: (uu, Eu) => {
              uu.keysDown = Eu
            }
          },
          metadata: Zu
        }, Gu, pu), (0, su.e)(null, null, lu, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDownward" in uu,
            get: uu => uu.keysDownward,
            set: (uu, Eu) => {
              uu.keysDownward = Eu
            }
          },
          metadata: Zu
        }, wu, Ju), (0, su.e)(null, null, Cu, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysLeft" in uu,
            get: uu => uu.keysLeft,
            set: (uu, Eu) => {
              uu.keysLeft = Eu
            }
          },
          metadata: Zu
        }, du, au), (0, su.e)(null, null, bu, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRight" in uu,
            get: uu => uu.keysRight,
            set: (uu, Eu) => {
              uu.keysRight = Eu
            }
          },
          metadata: Zu
        }, Pu, ou), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: uu => "rotationSpeed" in uu,
            get: uu => uu.rotationSpeed,
            set: (uu, Eu) => {
              uu.rotationSpeed = Eu
            }
          },
          metadata: Zu
        }, ku, mu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateLeft" in uu,
            get: uu => uu.keysRotateLeft,
            set: (uu, Eu) => {
              uu.keysRotateLeft = Eu
            }
          },
          metadata: Zu
        }, vu, Ku), (0, su.e)(null, null, Ou, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateRight" in uu,
            get: uu => uu.keysRotateRight,
            set: (uu, Eu) => {
              uu.keysRotateRight = Eu
            }
          },
          metadata: Zu
        }, Vu, ru), (0, su.e)(null, null, Yu, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateUp" in uu,
            get: uu => uu.keysRotateUp,
            set: (uu, Eu) => {
              uu.keysRotateUp = Eu
            }
          },
          metadata: Zu
        }, Qu, iu), (0, su.e)(null, null, hu, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRotateDown" in uu,
            get: uu => uu.keysRotateDown,
            set: (uu, Eu) => {
              uu.keysRotateDown = Eu
            }
          },
          metadata: Zu
        }, Wu, Su), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu
    })();
    lu.d.FreeCameraKeyboardMoveInput = Cu;
    var bu = ju(37514),
      cu = ju(40430);
    let Nu = (() => {
      var uu;
      let Eu, ju, Zu = [],
        Xu = [],
        lu = [],
        qu = [];
      return uu = class {
        _applyPointerRotation(uu, Eu) {
          this._pointerConditions.button = this._currentActiveButton;
          const ju = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ju || "rotate" !== ju.interaction) return;
          const su = ju.XT ?? ju.sensitivity ?? 1 / this.angularSensibility,
            Uu = ju.lT ?? ju.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += uu * su, this.camera.cameraRotation.x += Eu * Uu
        }
        constructor() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = uu, this.buttons = (0, su.g)(this, Zu, [0, 1, 2]), this.angularSensibility = ((0, su.g)(this, Xu), (0, su.g)(this, lu, 2e3)), this._pointerInput = (0, su.g)(this, qu), this._previousPosition = null, this.onPointerMovedObservable = new bu.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(uu) {
          uu = fu.h.BackCompatCameraNoPreventDefault(arguments);
          const Eu = this.camera.wO(),
            ju = Eu.getInputElement();
          this._pointerInput || (this._pointerInput = su => {
            const Uu = su.event,
              Zu = "touch" === Uu.pointerType;
            if (!this.touchEnabled && Zu) return;
            if (su.type !== cu.d.POINTERMOVE && -1 === this.buttons.indexOf(Uu.button)) return;
            const Xu = Uu.target;
            if (su.type === cu.d.POINTERDOWN) {
              if (Zu && -1 !== this._activePointerId || !Zu && -1 !== this._currentActiveButton) return;
              this._activePointerId = Uu.pointerId;
              try {
                Xu?.setPointerCapture(Uu.pointerId)
              } catch (lu) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Uu.button), this._previousPosition = {
                x: Uu.clientX,
                y: Uu.clientY
              }, uu || (Uu.preventDefault(), ju && ju.focus()), Eu.isPointerLock && this._onMouseMove && this._onMouseMove(su.event)
            } else if (su.type === cu.d.POINTERUP) {
              if (Zu && this._activePointerId !== Uu.pointerId || !Zu && this._currentActiveButton !== Uu.button) return;
              try {
                Xu?.releasePointerCapture(Uu.pointerId)
              } catch (lu) {}
              this._currentActiveButton = -1, this._previousPosition = null, uu || Uu.preventDefault(), this._activePointerId = -1
            } else if (su.type === cu.d.POINTERMOVE && (this._activePointerId === Uu.pointerId || !Zu))
              if (Eu.isPointerLock && this._onMouseMove) this._onMouseMove(su.event);
              else if (this._previousPosition) {
              const Eu = this.camera._calculateHandednessMultiplier(),
                ju = (Uu.clientX - this._previousPosition.x) * Eu,
                su = (Uu.clientY - this._previousPosition.y) * Eu;
              this._allowCameraRotation && this._applyPointerRotation(ju, su), this.onPointerMovedObservable.notifyObservers({
                offsetX: ju,
                offsetY: su
              }), this._previousPosition = {
                x: Uu.clientX,
                y: Uu.clientY
              }, uu || Uu.preventDefault()
            }
          }), this._onMouseMove = ju => {
            if (!Eu.isPointerLock) return;
            const su = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ju.movementX * su, ju.movementY * su), this._previousPosition = null, uu || ju.preventDefault()
          }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, cu.d.POINTERDOWN | cu.d.POINTERUP | cu.d.POINTERMOVE), ju && (this._contextMenuBind = uu => this.onContextMenu(uu), ju.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(uu) {
          uu.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const uu = this.camera.wO().getInputElement();
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
        const fu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: uu => "buttons" in uu,
            get: uu => uu.buttons,
            set: (uu, Eu) => {
              uu.buttons = Eu
            }
          },
          metadata: fu
        }, Zu, Xu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "angularSensibility" in uu,
            get: uu => uu.angularSensibility,
            set: (uu, Eu) => {
              uu.angularSensibility = Eu
            }
          },
          metadata: fu
        }, lu, qu), fu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fu
        })
      })(), uu
    })();
    lu.d.FreeCameraMouseInput = Nu;
    var Ou = ju(40442);
    let Yu = (() => {
      var uu;
      let Eu, ju, Zu, Xu = [],
        lu = [],
        qu = [],
        Cu = [],
        Nu = [],
        Yu = [];
      return uu = class {
        constructor() {
          this.wheelPrecisionX = (0, su.g)(this, Xu, 3), this.wheelPrecisionY = ((0, su.g)(this, lu), (0, su.g)(this, qu, 3)), this.wheelPrecisionZ = ((0, su.g)(this, Cu), (0, su.g)(this, Nu, 3)), this.onChangedObservable = ((0, su.g)(this, Yu), new bu.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(uu) {
          uu = fu.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eu => {
            if (Eu.type !== cu.d.POINTERWHEEL) return;
            const ju = Eu.event,
              su = ju.deltaMode === Ou.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * su * ju.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * su * ju.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * su * ju.deltaZ / this._normalize, ju.preventDefault && (uu || ju.preventDefault())
          }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._wheel, cu.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const fu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionX" in uu,
            get: uu => uu.wheelPrecisionX,
            set: (uu, Eu) => {
              uu.wheelPrecisionX = Eu
            }
          },
          metadata: fu
        }, Xu, lu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionY" in uu,
            get: uu => uu.wheelPrecisionY,
            set: (uu, Eu) => {
              uu.wheelPrecisionY = Eu
            }
          },
          metadata: fu
        }, qu, Cu), (0, su.e)(null, null, Zu, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecisionZ" in uu,
            get: uu => uu.wheelPrecisionZ,
            set: (uu, Eu) => {
              uu.wheelPrecisionZ = Eu
            }
          },
          metadata: fu
        }, Nu, Yu), fu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fu
        })
      })(), uu
    })();
    var hu;
    ! function(uu) {
      uu[uu.MoveRelative = 0] = "MoveRelative", uu[uu.RotateRelative = 1] = "RotateRelative", uu[uu.MoveScene = 2] = "MoveScene"
    }(hu || (hu = {}));
    let Du = (() => {
      var uu;
      let Eu, ju, Xu, lu, qu, fu, Cu, bu, cu, Nu = Yu,
        Ou = [];
      return uu = class extends Nu {
        constructor() {
          super(...arguments), this.camera = (0, su.g)(this, Ou), this._moveRelative = Zu.t.Zero(), this._rotateRelative = Zu.t.Zero(), this._moveScene = Zu.t.Zero(), this._wheelXAction = hu.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = hu.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(uu) {
          null === uu && this._wheelXAction !== hu.MoveRelative || (this._wheelXAction = hu.MoveRelative, this._wheelXActionCoordinate = uu)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== hu.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(uu) {
          null === uu && this._wheelYAction !== hu.MoveRelative || (this._wheelYAction = hu.MoveRelative, this._wheelYActionCoordinate = uu)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== hu.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(uu) {
          null === uu && this._wheelZAction !== hu.MoveRelative || (this._wheelZAction = hu.MoveRelative, this._wheelZActionCoordinate = uu)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== hu.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(uu) {
          null === uu && this._wheelXAction !== hu.RotateRelative || (this._wheelXAction = hu.RotateRelative, this._wheelXActionCoordinate = uu)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== hu.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(uu) {
          null === uu && this._wheelYAction !== hu.RotateRelative || (this._wheelYAction = hu.RotateRelative, this._wheelYActionCoordinate = uu)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== hu.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(uu) {
          null === uu && this._wheelZAction !== hu.RotateRelative || (this._wheelZAction = hu.RotateRelative, this._wheelZActionCoordinate = uu)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== hu.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(uu) {
          null === uu && this._wheelXAction !== hu.MoveScene || (this._wheelXAction = hu.MoveScene, this._wheelXActionCoordinate = uu)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== hu.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(uu) {
          null === uu && this._wheelYAction !== hu.MoveScene || (this._wheelYAction = hu.MoveScene, this._wheelYActionCoordinate = uu)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== hu.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(uu) {
          null === uu && this._wheelZAction !== hu.MoveScene || (this._wheelZAction = hu.MoveScene, this._wheelZActionCoordinate = uu)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== hu.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.k_(0), this._rotateRelative.k_(0), this._moveScene.k_(0), this._updateCamera(), this.camera.hV().useRightHandedSystem && (this._moveRelative.z *= -1);
          const uu = Zu.e.Zero();
          this.camera.getViewMatrix().invertToRef(uu);
          const Eu = Zu.t.Zero();
          Zu.t.TransformNormalToRef(this._moveRelative, uu, Eu), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Eu), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(uu, Eu, ju) {
          if (0 === uu) return;
          if (null === Eu || null === ju) return;
          let su = null;
          switch (Eu) {
            case hu.MoveRelative:
              su = this._moveRelative;
              break;
            case hu.RotateRelative:
              su = this._rotateRelative;
              break;
            case hu.MoveScene:
              su = this._moveScene
          }
          switch (ju) {
            case 0:
              su.set(uu, 0, 0);
              break;
            case 1:
              su.set(0, uu, 0);
              break;
            case 2:
              su.set(0, 0, uu)
          }
        }
      }, (() => {
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nu[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], (0, su.e)(uu, null, Eu, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXMoveRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelXMoveRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, ju, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYMoveRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelYMoveRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, Xu, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZMoveRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelZMoveRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, lu, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXRotateRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelXRotateRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, qu, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYRotateRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelYRotateRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, fu, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZRotateRelative" in uu,
            set: (uu, Eu) => {
              uu.wheelZRotateRelative = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, Cu, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelXMoveScene" in uu,
            set: (uu, Eu) => {
              uu.wheelXMoveScene = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, bu, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelYMoveScene" in uu,
            set: (uu, Eu) => {
              uu.wheelYMoveScene = Eu
            }
          },
          metadata: Zu
        }, null, Ou), (0, su.e)(uu, null, cu, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelZMoveScene" in uu,
            set: (uu, Eu) => {
              uu.wheelZMoveScene = Eu
            }
          },
          metadata: Zu
        }, null, Ou), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu
    })();
    lu.d.FreeCameraMouseWheelInput = Du;
    let gu = (() => {
      var uu;
      let Eu, ju, Xu = [],
        lu = [],
        qu = [],
        Cu = [];
      return uu = class {
        constructor() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = uu, this.touchAngularSensibility = (0, su.g)(this, Xu, 2e5), this.touchMoveSensibility = ((0, su.g)(this, lu), (0, su.g)(this, qu, 250)), this.singleFingerRotate = ((0, su.g)(this, Cu), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = fu.h.IsSafari()
        }
        attachControl(uu) {
          uu = fu.h.BackCompatCameraNoPreventDefault(arguments);
          let Eu = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ju => {
              const su = ju.event,
                Uu = "mouse" === su.pointerType || this._isSafari && "undefined" === typeof su.pointerType;
              if (this.allowMouse || !Uu)
                if (ju.type === cu.d.POINTERDOWN) {
                  if (uu || su.preventDefault(), this._pointerPressed.push(su.pointerId), 1 !== this._pointerPressed.length) return;
                  Eu = {
                    x: su.clientX,
                    y: su.clientY
                  }
                } else if (ju.type === cu.d.POINTERUP) {
                uu || su.preventDefault();
                const ju = this._pointerPressed.indexOf(su.pointerId);
                if (-1 === ju) return;
                if (this._pointerPressed.splice(ju, 1), 0 != ju) return;
                Eu = null, this._offsetX = null, this._offsetY = null
              } else if (ju.type === cu.d.POINTERMOVE) {
                if (uu || su.preventDefault(), !Eu) return;
                if (0 != this._pointerPressed.indexOf(su.pointerId)) return;
                this._offsetX = su.clientX - Eu.x, this._offsetY = -(su.clientY - Eu.y)
              }
            }), this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, cu.d.POINTERDOWN | cu.d.POINTERUP | cu.d.POINTERMOVE), this._onLostFocus) {
            const uu = this.camera.wO().getInputElement();
            uu && uu.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const uu = this.camera.wO().getInputElement();
              uu && uu.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const uu = this.camera,
            Eu = uu.movement.input,
            ju = Eu.getEntry("touch", "rotate"),
            su = Eu.getEntry("touch", "translate"),
            Uu = uu._calculateHandednessMultiplier(),
            Xu = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ju) {
            const Eu = ju.sensitivity ?? 1 / this.touchAngularSensibility;
            uu.cameraRotation.y = this._offsetX * Uu * Eu, Xu && (uu.cameraRotation.x = -this._offsetY * Uu * Eu)
          }
          if (!Xu && su) {
            const Eu = uu._computeLocalCameraSpeed(),
              ju = su.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Uu = Zu.m.dO[0];
            Uu.T6(0, 0, Eu * this._offsetY * ju), Zu.e.RotationYawPitchRollToRef(uu.rotation.y, uu.rotation.x, 0, uu._cameraRotationMatrix), Zu.t.TransformCoordinatesToRef(Uu, uu._cameraRotationMatrix, Uu), uu.cameraDirection.addInPlace(Uu)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "touchAngularSensibility" in uu,
            get: uu => uu.touchAngularSensibility,
            set: (uu, Eu) => {
              uu.touchAngularSensibility = Eu
            }
          },
          metadata: Zu
        }, Xu, lu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "touchMoveSensibility" in uu,
            get: uu => uu.touchMoveSensibility,
            set: (uu, Eu) => {
              uu.touchMoveSensibility = Eu
            }
          },
          metadata: Zu
        }, qu, Cu), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu
    })();
    lu.d.FreeCameraTouchInput = gu;
    var Mu, eu, Gu, pu = ju(40153);
    class wu extends lu.h {
      constructor(uu) {
        super(uu), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Cu), this
      }
      addMouse() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Nu(uu), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Du, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new gu), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Mu = wu.prototype).addDeviceOrientation ?? (Mu.addDeviceOrientation = (0, pu.g)("FreeCameraInputsManager", "addDeviceOrientation")), (eu = wu.prototype).addVirtualJoystick ?? (eu.addVirtualJoystick = (0, pu.g)("FreeCameraInputsManager", "addVirtualJoystick")), (Gu = wu.prototype).addGamepad ?? (Gu.addGamepad = (0, pu.g)("FreeCameraInputsManager", "addGamepad"));
    var Ju = ju(40168),
      du = ju(37532);
    let au = (() => {
        var uu;
        let Eu, ju, lu, qu, Cu = Xu.e,
          bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [],
          Du = [],
          gu = [];
        return uu = class extends Cu {
          get angularSensibility() {
            const uu = this.inputs.attached.mouse;
            return uu ? uu.angularSensibility : 0
          }
          set angularSensibility(uu) {
            const Eu = this.inputs.attached.mouse;
            Eu && (Eu.angularSensibility = uu)
          }
          get keysUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUp : []
          }
          set keysUp(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysUp = uu)
          }
          get keysUpward() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUpward : []
          }
          set keysUpward(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysUpward = uu)
          }
          get keysDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDown : []
          }
          set keysDown(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysDown = uu)
          }
          get keysDownward() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDownward : []
          }
          set keysDownward(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysDownward = uu)
          }
          get keysLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysLeft : []
          }
          set keysLeft(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysLeft = uu)
          }
          get keysRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRight : []
          }
          set keysRight(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRight = uu)
          }
          get keysRotateLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateLeft : []
          }
          set keysRotateLeft(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRotateLeft = uu)
          }
          get keysRotateRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateRight : []
          }
          set keysRotateRight(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRotateRight = uu)
          }
          get keysRotateUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateUp : []
          }
          set keysRotateUp(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRotateUp = uu)
          }
          get keysRotateDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRotateDown : []
          }
          set keysRotateDown(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRotateDown = uu)
          }
          constructor(uu, Eu, ju) {
            var Uu;
            super(uu, Eu, ju, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Uu = this, this.ellipsoid = (0, su.g)(this, bu, new Zu.t(.5, 1, .5)), this.ellipsoidOffset = ((0, su.g)(this, cu), (0, su.g)(this, Nu, new Zu.t(0, 0, 0))), this.checkCollisions = ((0, su.g)(this, Ou), (0, su.g)(this, Yu, !1)), this.applyGravity = ((0, su.g)(this, hu), (0, su.g)(this, Du, !1)), this.inputs = (0, su.g)(this, gu), this._needMoveForGravity = !1, this._oldPosition = Zu.t.Zero(), this._diffPosition = Zu.t.Zero(), this._newPosition = Zu.t.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(uu, Eu) {
              let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Uu._newPosition.yJ(Eu), Uu._newPosition.subtractToRef(Uu._oldPosition, Uu._diffPosition), Uu._diffPosition.length() > Ju.d.CollisionsEpsilon && (Uu.position.addToRef(Uu._diffPosition, Uu._deferredPositionUpdate), Uu._deferOnly ? Uu._deferredUpdated = !0 : Uu.position.yJ(Uu._deferredPositionUpdate), Uu.fc && ju && Uu.fc(ju))
            }, this.inputs = new wu(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(uu, Eu) {
            Eu = fu.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Eu)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Zu.t(0, 0, 0), this.cameraRotation = new Zu.p(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(uu) {
            this._collisionMask = isNaN(uu) ? -1 : uu
          }
          _collideWithWorld(uu) {
            let Eu;
            Eu = this.parent ? Zu.t.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Eu.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ju = this.hV().collisionCoordinator;
            this._collider || (this._collider = ju.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let su = uu;
            this.applyGravity && (su = uu.add(this.hV().gravity)), ju.getNewPosition(this._oldPosition, su, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Zu.t.Zero(), this._transformedDirection = Zu.t.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.hV().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.A)()], ju = [(0, Uu.A)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: uu => "ellipsoid" in uu,
              get: uu => uu.ellipsoid,
              set: (uu, Eu) => {
                uu.ellipsoid = Eu
              }
            },
            metadata: Zu
          }, bu, cu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "ellipsoidOffset" in uu,
              get: uu => uu.ellipsoidOffset,
              set: (uu, Eu) => {
                uu.ellipsoidOffset = Eu
              }
            },
            metadata: Zu
          }, Nu, Ou), (0, su.e)(null, null, lu, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: uu => "checkCollisions" in uu,
              get: uu => uu.checkCollisions,
              set: (uu, Eu) => {
                uu.checkCollisions = Eu
              }
            },
            metadata: Zu
          }, Yu, hu), (0, su.e)(null, null, qu, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyGravity" in uu,
              get: uu => uu.applyGravity,
              set: (uu, Eu) => {
                uu.applyGravity = Eu
              }
            },
            metadata: Zu
          }, Du, gu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      Pu = !1;
    Pu || (Pu = !0, (0, du.f)("BABYLON.FreeCamera", au))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
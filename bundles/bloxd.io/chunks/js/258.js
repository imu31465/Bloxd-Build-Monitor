export const id = 258;
export const ids = [258];
export const modules = {
  40236: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => OS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(40242),
      NS = gS(40278),
      qS = gS(40221),
      uS = gS(40133);
    let IS = (() => {
      var SS;
      let HS, gS, xS, NS, IS, fS, kS, aS, KS, jS, GS, CS = [],
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        JS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [];
      return SS = class {
        constructor() {
          this.keysUp = (0, tS.k)(this, CS, [38]), this.keysUpward = ((0, tS.k)(this, nS), (0, tS.k)(this, PS, [33])), this.keysDown = ((0, tS.k)(this, QS), (0, tS.k)(this, DS, [40])), this.keysDownward = ((0, tS.k)(this, wS), (0, tS.k)(this, hS, [34])), this.keysLeft = ((0, tS.k)(this, ZS), (0, tS.k)(this, JS, [37])), this.keysRight = ((0, tS.k)(this, OS), (0, tS.k)(this, dS, [39])), this.rotationSpeed = ((0, tS.k)(this, cS), (0, tS.k)(this, vS, .5)), this.keysRotateLeft = ((0, tS.k)(this, ES), (0, tS.k)(this, LS, [])), this.keysRotateRight = ((0, tS.k)(this, YS), (0, tS.k)(this, AS, [])), this.keysRotateUp = ((0, tS.k)(this, yS), (0, tS.k)(this, VS, [])), this.keysRotateDown = ((0, tS.k)(this, iS), (0, tS.k)(this, WS, [])), this._keys = ((0, tS.k)(this, zS), new Array)
        }
        attachControl(SS) {
          SS = uS.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.lL(), this._engine = this._scene.AK(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((HS => {
            const gS = HS.event;
            if (!gS.metaKey)
              if (HS.type === qS.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(gS.keyCode) || -1 !== this.keysDown.indexOf(gS.keyCode) || -1 !== this.keysLeft.indexOf(gS.keyCode) || -1 !== this.keysRight.indexOf(gS.keyCode) || -1 !== this.keysUpward.indexOf(gS.keyCode) || -1 !== this.keysDownward.indexOf(gS.keyCode) || -1 !== this.keysRotateLeft.indexOf(gS.keyCode) || -1 !== this.keysRotateRight.indexOf(gS.keyCode) || -1 !== this.keysRotateUp.indexOf(gS.keyCode) || -1 !== this.keysRotateDown.indexOf(gS.keyCode)) {
                  -1 === this._keys.indexOf(gS.keyCode) && this._keys.push(gS.keyCode), SS || gS.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(gS.keyCode) || -1 !== this.keysDown.indexOf(gS.keyCode) || -1 !== this.keysLeft.indexOf(gS.keyCode) || -1 !== this.keysRight.indexOf(gS.keyCode) || -1 !== this.keysUpward.indexOf(gS.keyCode) || -1 !== this.keysDownward.indexOf(gS.keyCode) || -1 !== this.keysRotateLeft.indexOf(gS.keyCode) || -1 !== this.keysRotateRight.indexOf(gS.keyCode) || -1 !== this.keysRotateUp.indexOf(gS.keyCode) || -1 !== this.keysRotateDown.indexOf(gS.keyCode)) {
              const HS = this._keys.indexOf(gS.keyCode);
              HS >= 0 && this._keys.splice(HS, 1), SS || gS.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const SS = this.camera,
              HS = SS.movement.input,
              gS = HS.getEntry("keyboard", "translate"),
              tS = HS.getEntry("keyboard", "rotate"),
              bS = tS?.sensitivity ?? 1,
              xS = SS._localDirection.I5(0, 0, 0);
            for (let XS = 0; XS < this._keys.length; XS++) {
              const HS = this._keys[XS]; - 1 !== this.keysLeft.indexOf(HS) ? xS.x -= 1 : -1 !== this.keysUp.indexOf(HS) ? xS.z += 1 : -1 !== this.keysRight.indexOf(HS) ? xS.x += 1 : -1 !== this.keysDown.indexOf(HS) ? xS.z -= 1 : -1 !== this.keysUpward.indexOf(HS) ? xS.y += 1 : -1 !== this.keysDownward.indexOf(HS) ? xS.y -= 1 : -1 !== this.keysRotateLeft.indexOf(HS) ? tS && (SS.cameraRotation.y -= this._getLocalRotation() * bS) : -1 !== this.keysRotateRight.indexOf(HS) ? tS && (SS.cameraRotation.y += this._getLocalRotation() * bS) : -1 !== this.keysRotateUp.indexOf(HS) ? tS && (SS.cameraRotation.x -= this._getLocalRotation() * bS) : -1 !== this.keysRotateDown.indexOf(HS) && tS && (SS.cameraRotation.x += this._getLocalRotation() * bS)
            }
            if (gS && (0 !== xS.x || 0 !== xS.y || 0 !== xS.z)) {
              const HS = SS._computeLocalCameraSpeed() * (gS.sensitivity ?? 1);
              xS.normalize().scaleInPlace(HS), SS.lL().useRightHandedSystem && (xS.z *= -1), SS.getViewMatrix().invertToRef(SS._cameraTransformMatrix), XS.n.TransformNormalToRef(xS, SS._cameraTransformMatrix, SS._transformedDirection), SS.cameraDirection.addInPlace(SS._transformedDirection)
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
          const SS = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * SS
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], GS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysUp" in SS,
            get: SS => SS.keysUp,
            set: (SS, HS) => {
              SS.keysUp = HS
            }
          },
          metadata: XS
        }, CS, nS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysUpward" in SS,
            get: SS => SS.keysUpward,
            set: (SS, HS) => {
              SS.keysUpward = HS
            }
          },
          metadata: XS
        }, PS, QS), (0, tS.j)(null, null, xS, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysDown" in SS,
            get: SS => SS.keysDown,
            set: (SS, HS) => {
              SS.keysDown = HS
            }
          },
          metadata: XS
        }, DS, wS), (0, tS.j)(null, null, NS, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysDownward" in SS,
            get: SS => SS.keysDownward,
            set: (SS, HS) => {
              SS.keysDownward = HS
            }
          },
          metadata: XS
        }, hS, ZS), (0, tS.j)(null, null, IS, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysLeft" in SS,
            get: SS => SS.keysLeft,
            set: (SS, HS) => {
              SS.keysLeft = HS
            }
          },
          metadata: XS
        }, JS, OS), (0, tS.j)(null, null, fS, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRight" in SS,
            get: SS => SS.keysRight,
            set: (SS, HS) => {
              SS.keysRight = HS
            }
          },
          metadata: XS
        }, dS, cS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: SS => "rotationSpeed" in SS,
            get: SS => SS.rotationSpeed,
            set: (SS, HS) => {
              SS.rotationSpeed = HS
            }
          },
          metadata: XS
        }, vS, ES), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRotateLeft" in SS,
            get: SS => SS.keysRotateLeft,
            set: (SS, HS) => {
              SS.keysRotateLeft = HS
            }
          },
          metadata: XS
        }, LS, YS), (0, tS.j)(null, null, KS, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRotateRight" in SS,
            get: SS => SS.keysRotateRight,
            set: (SS, HS) => {
              SS.keysRotateRight = HS
            }
          },
          metadata: XS
        }, AS, yS), (0, tS.j)(null, null, jS, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRotateUp" in SS,
            get: SS => SS.keysRotateUp,
            set: (SS, HS) => {
              SS.keysRotateUp = HS
            }
          },
          metadata: XS
        }, VS, iS), (0, tS.j)(null, null, GS, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRotateDown" in SS,
            get: SS => SS.keysRotateDown,
            set: (SS, HS) => {
              SS.keysRotateDown = HS
            }
          },
          metadata: XS
        }, WS, zS), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS
    })();
    NS.e.FreeCameraKeyboardMoveInput = IS;
    var fS = gS(37144),
      kS = gS(40218);
    let aS = (() => {
      var SS;
      let HS, gS, XS = [],
        xS = [],
        NS = [],
        qS = [];
      return SS = class {
        _applyPointerRotation(SS, HS) {
          this._pointerConditions.button = this._currentActiveButton;
          const gS = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!gS || "rotate" !== gS.interaction) return;
          const tS = gS.uB ?? gS.sensitivity ?? 1 / this.angularSensibility,
            bS = gS.jB ?? gS.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += SS * tS, this.camera.cameraRotation.x += HS * bS
        }
        constructor() {
          let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = SS, this.buttons = (0, tS.k)(this, XS, [0, 1, 2]), this.angularSensibility = ((0, tS.k)(this, xS), (0, tS.k)(this, NS, 2e3)), this._pointerInput = (0, tS.k)(this, qS), this._previousPosition = null, this.onPointerMovedObservable = new fS.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(SS) {
          SS = uS.k.BackCompatCameraNoPreventDefault(arguments);
          const HS = this.camera.AK(),
            gS = HS.getInputElement();
          this._pointerInput || (this._pointerInput = tS => {
            const bS = tS.event,
              XS = "touch" === bS.pointerType;
            if (!this.touchEnabled && XS) return;
            if (tS.type !== kS.d.POINTERMOVE && -1 === this.buttons.indexOf(bS.button)) return;
            const xS = bS.target;
            if (tS.type === kS.d.POINTERDOWN) {
              if (XS && -1 !== this._activePointerId || !XS && -1 !== this._currentActiveButton) return;
              this._activePointerId = bS.pointerId;
              try {
                xS?.setPointerCapture(bS.pointerId)
              } catch (NS) {} - 1 === this._currentActiveButton && (this._currentActiveButton = bS.button), this._previousPosition = {
                x: bS.clientX,
                y: bS.clientY
              }, SS || (bS.preventDefault(), gS && gS.focus()), HS.isPointerLock && this._onMouseMove && this._onMouseMove(tS.event)
            } else if (tS.type === kS.d.POINTERUP) {
              if (XS && this._activePointerId !== bS.pointerId || !XS && this._currentActiveButton !== bS.button) return;
              try {
                xS?.releasePointerCapture(bS.pointerId)
              } catch (NS) {}
              this._currentActiveButton = -1, this._previousPosition = null, SS || bS.preventDefault(), this._activePointerId = -1
            } else if (tS.type === kS.d.POINTERMOVE && (this._activePointerId === bS.pointerId || !XS))
              if (HS.isPointerLock && this._onMouseMove) this._onMouseMove(tS.event);
              else if (this._previousPosition) {
              const HS = this.camera._calculateHandednessMultiplier(),
                gS = (bS.clientX - this._previousPosition.x) * HS,
                tS = (bS.clientY - this._previousPosition.y) * HS;
              this._allowCameraRotation && this._applyPointerRotation(gS, tS), this.onPointerMovedObservable.notifyObservers({
                offsetX: gS,
                offsetY: tS
              }), this._previousPosition = {
                x: bS.clientX,
                y: bS.clientY
              }, SS || bS.preventDefault()
            }
          }), this._onMouseMove = gS => {
            if (!HS.isPointerLock) return;
            const tS = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(gS.movementX * tS, gS.movementY * tS), this._previousPosition = null, SS || gS.preventDefault()
          }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._pointerInput, kS.d.POINTERDOWN | kS.d.POINTERUP | kS.d.POINTERMOVE), gS && (this._contextMenuBind = SS => this.onContextMenu(SS), gS.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(SS) {
          SS.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const SS = this.camera.AK().getInputElement();
              SS && SS.removeEventListener("contextmenu", this._contextMenuBind)
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
        const uS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: SS => "buttons" in SS,
            get: SS => SS.buttons,
            set: (SS, HS) => {
              SS.buttons = HS
            }
          },
          metadata: uS
        }, XS, xS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: SS => "angularSensibility" in SS,
            get: SS => SS.angularSensibility,
            set: (SS, HS) => {
              SS.angularSensibility = HS
            }
          },
          metadata: uS
        }, NS, qS), uS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uS
        })
      })(), SS
    })();
    NS.e.FreeCameraMouseInput = aS;
    var KS = gS(40223);
    let jS = (() => {
      var SS;
      let HS, gS, XS, xS = [],
        NS = [],
        qS = [],
        IS = [],
        aS = [],
        jS = [];
      return SS = class {
        constructor() {
          this.wheelPrecisionX = (0, tS.k)(this, xS, 3), this.wheelPrecisionY = ((0, tS.k)(this, NS), (0, tS.k)(this, qS, 3)), this.wheelPrecisionZ = ((0, tS.k)(this, IS), (0, tS.k)(this, aS, 3)), this.onChangedObservable = ((0, tS.k)(this, jS), new fS.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(SS) {
          SS = uS.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = HS => {
            if (HS.type !== kS.d.POINTERWHEEL) return;
            const gS = HS.event,
              tS = gS.deltaMode === KS.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * tS * gS.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * tS * gS.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * tS * gS.deltaZ / this._normalize, gS.preventDefault && (SS || gS.preventDefault())
          }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._wheel, kS.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const uS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelPrecisionX" in SS,
            get: SS => SS.wheelPrecisionX,
            set: (SS, HS) => {
              SS.wheelPrecisionX = HS
            }
          },
          metadata: uS
        }, xS, NS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelPrecisionY" in SS,
            get: SS => SS.wheelPrecisionY,
            set: (SS, HS) => {
              SS.wheelPrecisionY = HS
            }
          },
          metadata: uS
        }, qS, IS), (0, tS.j)(null, null, XS, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelPrecisionZ" in SS,
            get: SS => SS.wheelPrecisionZ,
            set: (SS, HS) => {
              SS.wheelPrecisionZ = HS
            }
          },
          metadata: uS
        }, aS, jS), uS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uS
        })
      })(), SS
    })();
    var GS;
    ! function(SS) {
      SS[SS.MoveRelative = 0] = "MoveRelative", SS[SS.RotateRelative = 1] = "RotateRelative", SS[SS.MoveScene = 2] = "MoveScene"
    }(GS || (GS = {}));
    let CS = (() => {
      var SS;
      let HS, gS, xS, NS, qS, uS, IS, fS, kS, aS = jS,
        KS = [];
      return SS = class extends aS {
        constructor() {
          super(...arguments), this.camera = (0, tS.k)(this, KS), this._moveRelative = XS.n.Zero(), this._rotateRelative = XS.n.Zero(), this._moveScene = XS.n.Zero(), this._wheelXAction = GS.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = GS.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(SS) {
          null === SS && this._wheelXAction !== GS.MoveRelative || (this._wheelXAction = GS.MoveRelative, this._wheelXActionCoordinate = SS)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== GS.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(SS) {
          null === SS && this._wheelYAction !== GS.MoveRelative || (this._wheelYAction = GS.MoveRelative, this._wheelYActionCoordinate = SS)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== GS.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(SS) {
          null === SS && this._wheelZAction !== GS.MoveRelative || (this._wheelZAction = GS.MoveRelative, this._wheelZActionCoordinate = SS)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== GS.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(SS) {
          null === SS && this._wheelXAction !== GS.RotateRelative || (this._wheelXAction = GS.RotateRelative, this._wheelXActionCoordinate = SS)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== GS.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(SS) {
          null === SS && this._wheelYAction !== GS.RotateRelative || (this._wheelYAction = GS.RotateRelative, this._wheelYActionCoordinate = SS)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== GS.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(SS) {
          null === SS && this._wheelZAction !== GS.RotateRelative || (this._wheelZAction = GS.RotateRelative, this._wheelZActionCoordinate = SS)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== GS.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(SS) {
          null === SS && this._wheelXAction !== GS.MoveScene || (this._wheelXAction = GS.MoveScene, this._wheelXActionCoordinate = SS)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== GS.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(SS) {
          null === SS && this._wheelYAction !== GS.MoveScene || (this._wheelYAction = GS.MoveScene, this._wheelYActionCoordinate = SS)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== GS.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(SS) {
          null === SS && this._wheelZAction !== GS.MoveScene || (this._wheelZAction = GS.MoveScene, this._wheelZActionCoordinate = SS)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== GS.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.o_(0), this._rotateRelative.o_(0), this._moveScene.o_(0), this._updateCamera(), this.camera.lL().useRightHandedSystem && (this._moveRelative.z *= -1);
          const SS = XS.e.Zero();
          this.camera.getViewMatrix().invertToRef(SS);
          const HS = XS.n.Zero();
          XS.n.TransformNormalToRef(this._moveRelative, SS, HS), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(HS), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(SS, HS, gS) {
          if (0 === SS) return;
          if (null === HS || null === gS) return;
          let tS = null;
          switch (HS) {
            case GS.MoveRelative:
              tS = this._moveRelative;
              break;
            case GS.RotateRelative:
              tS = this._rotateRelative;
              break;
            case GS.MoveScene:
              tS = this._moveScene
          }
          switch (gS) {
            case 0:
              tS.set(SS, 0, 0);
              break;
            case 1:
              tS.set(0, SS, 0);
              break;
            case 2:
              tS.set(0, 0, SS)
          }
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(aS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], (0, tS.j)(SS, null, HS, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelXMoveRelative" in SS,
            set: (SS, HS) => {
              SS.wheelXMoveRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, gS, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelYMoveRelative" in SS,
            set: (SS, HS) => {
              SS.wheelYMoveRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, xS, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelZMoveRelative" in SS,
            set: (SS, HS) => {
              SS.wheelZMoveRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, NS, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelXRotateRelative" in SS,
            set: (SS, HS) => {
              SS.wheelXRotateRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, qS, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelYRotateRelative" in SS,
            set: (SS, HS) => {
              SS.wheelYRotateRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, uS, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelZRotateRelative" in SS,
            set: (SS, HS) => {
              SS.wheelZRotateRelative = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, IS, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelXMoveScene" in SS,
            set: (SS, HS) => {
              SS.wheelXMoveScene = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, fS, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelYMoveScene" in SS,
            set: (SS, HS) => {
              SS.wheelYMoveScene = HS
            }
          },
          metadata: XS
        }, null, KS), (0, tS.j)(SS, null, kS, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelZMoveScene" in SS,
            set: (SS, HS) => {
              SS.wheelZMoveScene = HS
            }
          },
          metadata: XS
        }, null, KS), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS
    })();
    NS.e.FreeCameraMouseWheelInput = CS;
    let nS = (() => {
      var SS;
      let HS, gS, xS = [],
        NS = [],
        qS = [],
        IS = [];
      return SS = class {
        constructor() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = SS, this.touchAngularSensibility = (0, tS.k)(this, xS, 2e5), this.touchMoveSensibility = ((0, tS.k)(this, NS), (0, tS.k)(this, qS, 250)), this.singleFingerRotate = ((0, tS.k)(this, IS), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = uS.k.IsSafari()
        }
        attachControl(SS) {
          SS = uS.k.BackCompatCameraNoPreventDefault(arguments);
          let HS = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = gS => {
              const tS = gS.event,
                bS = "mouse" === tS.pointerType || this._isSafari && "undefined" === typeof tS.pointerType;
              if (this.allowMouse || !bS)
                if (gS.type === kS.d.POINTERDOWN) {
                  if (SS || tS.preventDefault(), this._pointerPressed.push(tS.pointerId), 1 !== this._pointerPressed.length) return;
                  HS = {
                    x: tS.clientX,
                    y: tS.clientY
                  }
                } else if (gS.type === kS.d.POINTERUP) {
                SS || tS.preventDefault();
                const gS = this._pointerPressed.indexOf(tS.pointerId);
                if (-1 === gS) return;
                if (this._pointerPressed.splice(gS, 1), 0 != gS) return;
                HS = null, this._offsetX = null, this._offsetY = null
              } else if (gS.type === kS.d.POINTERMOVE) {
                if (SS || tS.preventDefault(), !HS) return;
                if (0 != this._pointerPressed.indexOf(tS.pointerId)) return;
                this._offsetX = tS.clientX - HS.x, this._offsetY = -(tS.clientY - HS.y)
              }
            }), this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._pointerInput, kS.d.POINTERDOWN | kS.d.POINTERUP | kS.d.POINTERMOVE), this._onLostFocus) {
            const SS = this.camera.AK().getInputElement();
            SS && SS.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const SS = this.camera.AK().getInputElement();
              SS && SS.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const SS = this.camera,
            HS = SS.movement.input,
            gS = HS.getEntry("touch", "rotate"),
            tS = HS.getEntry("touch", "translate"),
            bS = SS._calculateHandednessMultiplier(),
            xS = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (gS) {
            const HS = gS.sensitivity ?? 1 / this.touchAngularSensibility;
            SS.cameraRotation.y = this._offsetX * bS * HS, xS && (SS.cameraRotation.x = -this._offsetY * bS * HS)
          }
          if (!xS && tS) {
            const HS = SS._computeLocalCameraSpeed(),
              gS = tS.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              bS = XS.l.VK[0];
            bS.I5(0, 0, HS * this._offsetY * gS), XS.e.RotationYawPitchRollToRef(SS.rotation.y, SS.rotation.x, 0, SS._cameraRotationMatrix), XS.n.TransformCoordinatesToRef(bS, SS._cameraRotationMatrix, bS), SS.cameraDirection.addInPlace(bS)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: SS => "touchAngularSensibility" in SS,
            get: SS => SS.touchAngularSensibility,
            set: (SS, HS) => {
              SS.touchAngularSensibility = HS
            }
          },
          metadata: XS
        }, xS, NS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: SS => "touchMoveSensibility" in SS,
            get: SS => SS.touchMoveSensibility,
            set: (SS, HS) => {
              SS.touchMoveSensibility = HS
            }
          },
          metadata: XS
        }, qS, IS), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS
    })();
    NS.e.FreeCameraTouchInput = nS;
    var PS, QS, DS, wS = gS(39926);
    class hS extends NS.f {
      constructor(SS) {
        super(SS), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new IS), this
      }
      addMouse() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new aS(SS), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new CS, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new nS), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(PS = hS.prototype).addDeviceOrientation ?? (PS.addDeviceOrientation = (0, wS.i)("FreeCameraInputsManager", "addDeviceOrientation")), (QS = hS.prototype).addVirtualJoystick ?? (QS.addVirtualJoystick = (0, wS.i)("FreeCameraInputsManager", "addVirtualJoystick")), (DS = hS.prototype).addGamepad ?? (DS.addGamepad = (0, wS.i)("FreeCameraInputsManager", "addGamepad"));
    var ZS = gS(39939),
      JS = gS(37164);
    let OS = (() => {
        var SS;
        let HS, gS, NS, qS, IS = xS.h,
          fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [],
          CS = [],
          nS = [];
        return SS = class extends IS {
          get angularSensibility() {
            const SS = this.inputs.attached.mouse;
            return SS ? SS.angularSensibility : 0
          }
          set angularSensibility(SS) {
            const HS = this.inputs.attached.mouse;
            HS && (HS.angularSensibility = SS)
          }
          get keysUp() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysUp : []
          }
          set keysUp(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysUp = SS)
          }
          get keysUpward() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysUpward : []
          }
          set keysUpward(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysUpward = SS)
          }
          get keysDown() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysDown : []
          }
          set keysDown(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysDown = SS)
          }
          get keysDownward() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysDownward : []
          }
          set keysDownward(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysDownward = SS)
          }
          get keysLeft() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysLeft : []
          }
          set keysLeft(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysLeft = SS)
          }
          get keysRight() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRight : []
          }
          set keysRight(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRight = SS)
          }
          get keysRotateLeft() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRotateLeft : []
          }
          set keysRotateLeft(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRotateLeft = SS)
          }
          get keysRotateRight() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRotateRight : []
          }
          set keysRotateRight(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRotateRight = SS)
          }
          get keysRotateUp() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRotateUp : []
          }
          set keysRotateUp(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRotateUp = SS)
          }
          get keysRotateDown() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRotateDown : []
          }
          set keysRotateDown(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRotateDown = SS)
          }
          constructor(SS, HS, gS) {
            var bS;
            super(SS, HS, gS, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), bS = this, this.ellipsoid = (0, tS.k)(this, fS, new XS.n(.5, 1, .5)), this.ellipsoidOffset = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, new XS.n(0, 0, 0))), this.checkCollisions = ((0, tS.k)(this, KS), (0, tS.k)(this, jS, !1)), this.applyGravity = ((0, tS.k)(this, GS), (0, tS.k)(this, CS, !1)), this.inputs = (0, tS.k)(this, nS), this._needMoveForGravity = !1, this._oldPosition = XS.n.Zero(), this._diffPosition = XS.n.Zero(), this._newPosition = XS.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(SS, HS) {
              let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              bS._newPosition.dJ(HS), bS._newPosition.subtractToRef(bS._oldPosition, bS._diffPosition), bS._diffPosition.length() > ZS.b.CollisionsEpsilon && (bS.position.addToRef(bS._diffPosition, bS._deferredPositionUpdate), bS._deferOnly ? bS._deferredUpdated = !0 : bS.position.dJ(bS._deferredPositionUpdate), bS.ak && gS && bS.ak(gS))
            }, this.inputs = new hS(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(SS, HS) {
            HS = uS.k.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(HS)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new XS.n(0, 0, 0), this.cameraRotation = new XS.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(SS) {
            this._collisionMask = isNaN(SS) ? -1 : SS
          }
          _collideWithWorld(SS) {
            let HS;
            HS = this.parent ? XS.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, HS.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const gS = this.lL().collisionCoordinator;
            this._collider || (this._collider = gS.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let tS = SS;
            this.applyGravity && (tS = SS.add(this.lL().gravity)), gS.getNewPosition(this._oldPosition, tS, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = XS.n.Zero(), this._transformedDirection = XS.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(SS) {
            this._needMoveForGravity = SS
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.lL().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(IS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.I)()], gS = [(0, bS.I)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: SS => "ellipsoid" in SS,
              get: SS => SS.ellipsoid,
              set: (SS, HS) => {
                SS.ellipsoid = HS
              }
            },
            metadata: XS
          }, fS, kS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "ellipsoidOffset" in SS,
              get: SS => SS.ellipsoidOffset,
              set: (SS, HS) => {
                SS.ellipsoidOffset = HS
              }
            },
            metadata: XS
          }, aS, KS), (0, tS.j)(null, null, NS, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: SS => "checkCollisions" in SS,
              get: SS => SS.checkCollisions,
              set: (SS, HS) => {
                SS.checkCollisions = HS
              }
            },
            metadata: XS
          }, jS, GS), (0, tS.j)(null, null, qS, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: SS => "applyGravity" in SS,
              get: SS => SS.applyGravity,
              set: (SS, HS) => {
                SS.applyGravity = HS
              }
            },
            metadata: XS
          }, CS, nS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      dS = !1;
    dS || (dS = !0, (0, JS.f)("BABYLON.FreeCamera", OS))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
export const id = 294;
export const ids = [294];
export const modules = {
  42047: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Or
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(42052),
      Ir = Qr(42080),
      fr = Qr(42031),
      Er = Qr(41950);
    let pr = (() => {
      var rr;
      let Sr, Qr, jr, Ir, pr, xr, mr, Nr, Ur, tr, hr, zr = [],
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        vr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [];
      return rr = class {
        constructor() {
          this.keysUp = (0, Zr.m)(this, zr, [38]), this.keysUpward = ((0, Zr.m)(this, Yr), (0, Zr.m)(this, nr, [33])), this.keysDown = ((0, Zr.m)(this, er), (0, Zr.m)(this, Kr, [40])), this.keysDownward = ((0, Zr.m)(this, yr), (0, Zr.m)(this, Br, [34])), this.keysLeft = ((0, Zr.m)(this, Tr), (0, Zr.m)(this, vr, [37])), this.keysRight = ((0, Zr.m)(this, Or), (0, Zr.m)(this, Lr, [39])), this.rotationSpeed = ((0, Zr.m)(this, lr), (0, Zr.m)(this, Xr, .5)), this.keysRotateLeft = ((0, Zr.m)(this, Pr), (0, Zr.m)(this, Hr, [])), this.keysRotateRight = ((0, Zr.m)(this, qr), (0, Zr.m)(this, Rr, [])), this.keysRotateUp = ((0, Zr.m)(this, gr), (0, Zr.m)(this, Cr, [])), this.keysRotateDown = ((0, Zr.m)(this, Mr), (0, Zr.m)(this, Gr, [])), this._keys = ((0, Zr.m)(this, kr), new Array)
        }
        attachControl(rr) {
          rr = Er.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.eC(), this._engine = this._scene.MU(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Sr => {
            const Qr = Sr.event;
            if (!Qr.metaKey)
              if (Sr.type === fr.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysUpward.indexOf(Qr.keyCode) || -1 !== this.keysDownward.indexOf(Qr.keyCode) || -1 !== this.keysRotateLeft.indexOf(Qr.keyCode) || -1 !== this.keysRotateRight.indexOf(Qr.keyCode) || -1 !== this.keysRotateUp.indexOf(Qr.keyCode) || -1 !== this.keysRotateDown.indexOf(Qr.keyCode)) {
                  -1 === this._keys.indexOf(Qr.keyCode) && this._keys.push(Qr.keyCode), rr || Qr.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysUpward.indexOf(Qr.keyCode) || -1 !== this.keysDownward.indexOf(Qr.keyCode) || -1 !== this.keysRotateLeft.indexOf(Qr.keyCode) || -1 !== this.keysRotateRight.indexOf(Qr.keyCode) || -1 !== this.keysRotateUp.indexOf(Qr.keyCode) || -1 !== this.keysRotateDown.indexOf(Qr.keyCode)) {
              const Sr = this._keys.indexOf(Qr.keyCode);
              Sr >= 0 && this._keys.splice(Sr, 1), rr || Qr.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const rr = this.camera,
              Sr = rr.movement.input,
              Qr = Sr.getEntry("keyboard", "translate"),
              Zr = Sr.getEntry("keyboard", "rotate"),
              Wr = Zr?.sensitivity ?? 1,
              jr = rr._localDirection.Hrr(0, 0, 0);
            for (let ar = 0; ar < this._keys.length; ar++) {
              const Sr = this._keys[ar]; - 1 !== this.keysLeft.indexOf(Sr) ? jr.x -= 1 : -1 !== this.keysUp.indexOf(Sr) ? jr.z += 1 : -1 !== this.keysRight.indexOf(Sr) ? jr.x += 1 : -1 !== this.keysDown.indexOf(Sr) ? jr.z -= 1 : -1 !== this.keysUpward.indexOf(Sr) ? jr.y += 1 : -1 !== this.keysDownward.indexOf(Sr) ? jr.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Sr) ? Zr && (rr.cameraRotation.y -= this._getLocalRotation() * Wr) : -1 !== this.keysRotateRight.indexOf(Sr) ? Zr && (rr.cameraRotation.y += this._getLocalRotation() * Wr) : -1 !== this.keysRotateUp.indexOf(Sr) ? Zr && (rr.cameraRotation.x -= this._getLocalRotation() * Wr) : -1 !== this.keysRotateDown.indexOf(Sr) && Zr && (rr.cameraRotation.x += this._getLocalRotation() * Wr)
            }
            if (Qr && (0 !== jr.x || 0 !== jr.y || 0 !== jr.z)) {
              const Sr = rr._computeLocalCameraSpeed() * (Qr.sensitivity ?? 1);
              jr.normalize().scaleInPlace(Sr), rr.eC().useRightHandedSystem && (jr.z *= -1), rr.getViewMatrix().invertToRef(rr._cameraTransformMatrix), ar.u.TransformNormalToRef(jr, rr._cameraTransformMatrix, rr._transformedDirection), rr.cameraDirection.addInPlace(rr._transformedDirection)
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
          const rr = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * rr
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], hr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysUp" in rr,
            get: rr => rr.keysUp,
            set: (rr, Sr) => {
              rr.keysUp = Sr
            }
          },
          metadata: ar
        }, zr, Yr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysUpward" in rr,
            get: rr => rr.keysUpward,
            set: (rr, Sr) => {
              rr.keysUpward = Sr
            }
          },
          metadata: ar
        }, nr, er), (0, Zr.k)(null, null, jr, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysDown" in rr,
            get: rr => rr.keysDown,
            set: (rr, Sr) => {
              rr.keysDown = Sr
            }
          },
          metadata: ar
        }, Kr, yr), (0, Zr.k)(null, null, Ir, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysDownward" in rr,
            get: rr => rr.keysDownward,
            set: (rr, Sr) => {
              rr.keysDownward = Sr
            }
          },
          metadata: ar
        }, Br, Tr), (0, Zr.k)(null, null, pr, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysLeft" in rr,
            get: rr => rr.keysLeft,
            set: (rr, Sr) => {
              rr.keysLeft = Sr
            }
          },
          metadata: ar
        }, vr, Or), (0, Zr.k)(null, null, xr, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRight" in rr,
            get: rr => rr.keysRight,
            set: (rr, Sr) => {
              rr.keysRight = Sr
            }
          },
          metadata: ar
        }, Lr, lr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: rr => "rotationSpeed" in rr,
            get: rr => rr.rotationSpeed,
            set: (rr, Sr) => {
              rr.rotationSpeed = Sr
            }
          },
          metadata: ar
        }, Xr, Pr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRotateLeft" in rr,
            get: rr => rr.keysRotateLeft,
            set: (rr, Sr) => {
              rr.keysRotateLeft = Sr
            }
          },
          metadata: ar
        }, Hr, qr), (0, Zr.k)(null, null, Ur, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRotateRight" in rr,
            get: rr => rr.keysRotateRight,
            set: (rr, Sr) => {
              rr.keysRotateRight = Sr
            }
          },
          metadata: ar
        }, Rr, gr), (0, Zr.k)(null, null, tr, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRotateUp" in rr,
            get: rr => rr.keysRotateUp,
            set: (rr, Sr) => {
              rr.keysRotateUp = Sr
            }
          },
          metadata: ar
        }, Cr, Mr), (0, Zr.k)(null, null, hr, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRotateDown" in rr,
            get: rr => rr.keysRotateDown,
            set: (rr, Sr) => {
              rr.keysRotateDown = Sr
            }
          },
          metadata: ar
        }, Gr, kr), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr
    })();
    Ir.c.FreeCameraKeyboardMoveInput = pr;
    var xr = Qr(38595),
      mr = Qr(42028);
    let Nr = (() => {
      var rr;
      let Sr, Qr, ar = [],
        jr = [],
        Ir = [],
        fr = [];
      return rr = class {
        _applyPointerRotation(rr, Sr) {
          this._pointerConditions.button = this._currentActiveButton;
          const Qr = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Qr || "rotate" !== Qr.interaction) return;
          const Zr = Qr.OJ ?? Qr.sensitivity ?? 1 / this.angularSensibility,
            Wr = Qr.LJ ?? Qr.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += rr * Zr, this.camera.cameraRotation.x += Sr * Wr
        }
        constructor() {
          let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = rr, this.buttons = (0, Zr.m)(this, ar, [0, 1, 2]), this.angularSensibility = ((0, Zr.m)(this, jr), (0, Zr.m)(this, Ir, 2e3)), this._pointerInput = (0, Zr.m)(this, fr), this._previousPosition = null, this.onPointerMovedObservable = new xr.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(rr) {
          rr = Er.h.BackCompatCameraNoPreventDefault(arguments);
          const Sr = this.camera.MU(),
            Qr = Sr.getInputElement();
          this._pointerInput || (this._pointerInput = Zr => {
            const Wr = Zr.event,
              ar = "touch" === Wr.pointerType;
            if (!this.touchEnabled && ar) return;
            if (Zr.type !== mr.b.POINTERMOVE && -1 === this.buttons.indexOf(Wr.button)) return;
            const jr = Wr.target;
            if (Zr.type === mr.b.POINTERDOWN) {
              if (ar && -1 !== this._activePointerId || !ar && -1 !== this._currentActiveButton) return;
              this._activePointerId = Wr.pointerId;
              try {
                jr?.setPointerCapture(Wr.pointerId)
              } catch (Ir) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Wr.button), this._previousPosition = {
                x: Wr.clientX,
                y: Wr.clientY
              }, rr || (Wr.preventDefault(), Qr && Qr.focus()), Sr.isPointerLock && this._onMouseMove && this._onMouseMove(Zr.event)
            } else if (Zr.type === mr.b.POINTERUP) {
              if (ar && this._activePointerId !== Wr.pointerId || !ar && this._currentActiveButton !== Wr.button) return;
              try {
                jr?.releasePointerCapture(Wr.pointerId)
              } catch (Ir) {}
              this._currentActiveButton = -1, this._previousPosition = null, rr || Wr.preventDefault(), this._activePointerId = -1
            } else if (Zr.type === mr.b.POINTERMOVE && (this._activePointerId === Wr.pointerId || !ar))
              if (Sr.isPointerLock && this._onMouseMove) this._onMouseMove(Zr.event);
              else if (this._previousPosition) {
              const Sr = this.camera._calculateHandednessMultiplier(),
                Qr = (Wr.clientX - this._previousPosition.x) * Sr,
                Zr = (Wr.clientY - this._previousPosition.y) * Sr;
              this._allowCameraRotation && this._applyPointerRotation(Qr, Zr), this.onPointerMovedObservable.notifyObservers({
                offsetX: Qr,
                offsetY: Zr
              }), this._previousPosition = {
                x: Wr.clientX,
                y: Wr.clientY
              }, rr || Wr.preventDefault()
            }
          }), this._onMouseMove = Qr => {
            if (!Sr.isPointerLock) return;
            const Zr = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Qr.movementX * Zr, Qr.movementY * Zr), this._previousPosition = null, rr || Qr.preventDefault()
          }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._pointerInput, mr.b.POINTERDOWN | mr.b.POINTERUP | mr.b.POINTERMOVE), Qr && (this._contextMenuBind = rr => this.onContextMenu(rr), Qr.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(rr) {
          rr.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const rr = this.camera.MU().getInputElement();
              rr && rr.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Er = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: rr => "buttons" in rr,
            get: rr => rr.buttons,
            set: (rr, Sr) => {
              rr.buttons = Sr
            }
          },
          metadata: Er
        }, ar, jr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: rr => "angularSensibility" in rr,
            get: rr => rr.angularSensibility,
            set: (rr, Sr) => {
              rr.angularSensibility = Sr
            }
          },
          metadata: Er
        }, Ir, fr), Er && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Er
        })
      })(), rr
    })();
    Ir.c.FreeCameraMouseInput = Nr;
    var Ur = Qr(42036);
    let tr = (() => {
      var rr;
      let Sr, Qr, ar, jr = [],
        Ir = [],
        fr = [],
        pr = [],
        Nr = [],
        tr = [];
      return rr = class {
        constructor() {
          this.wheelPrecisionX = (0, Zr.m)(this, jr, 3), this.wheelPrecisionY = ((0, Zr.m)(this, Ir), (0, Zr.m)(this, fr, 3)), this.wheelPrecisionZ = ((0, Zr.m)(this, pr), (0, Zr.m)(this, Nr, 3)), this.onChangedObservable = ((0, Zr.m)(this, tr), new xr.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(rr) {
          rr = Er.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Sr => {
            if (Sr.type !== mr.b.POINTERWHEEL) return;
            const Qr = Sr.event,
              Zr = Qr.deltaMode === Ur.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Zr * Qr.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Zr * Qr.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Zr * Qr.deltaZ / this._normalize, Qr.preventDefault && (rr || Qr.preventDefault())
          }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._wheel, mr.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Er = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelPrecisionX" in rr,
            get: rr => rr.wheelPrecisionX,
            set: (rr, Sr) => {
              rr.wheelPrecisionX = Sr
            }
          },
          metadata: Er
        }, jr, Ir), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelPrecisionY" in rr,
            get: rr => rr.wheelPrecisionY,
            set: (rr, Sr) => {
              rr.wheelPrecisionY = Sr
            }
          },
          metadata: Er
        }, fr, pr), (0, Zr.k)(null, null, ar, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelPrecisionZ" in rr,
            get: rr => rr.wheelPrecisionZ,
            set: (rr, Sr) => {
              rr.wheelPrecisionZ = Sr
            }
          },
          metadata: Er
        }, Nr, tr), Er && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Er
        })
      })(), rr
    })();
    var hr;
    ! function(rr) {
      rr[rr.MoveRelative = 0] = "MoveRelative", rr[rr.RotateRelative = 1] = "RotateRelative", rr[rr.MoveScene = 2] = "MoveScene"
    }(hr || (hr = {}));
    let zr = (() => {
      var rr;
      let Sr, Qr, jr, Ir, fr, Er, pr, xr, mr, Nr = tr,
        Ur = [];
      return rr = class extends Nr {
        constructor() {
          super(...arguments), this.camera = (0, Zr.m)(this, Ur), this._moveRelative = ar.u.Zero(), this._rotateRelative = ar.u.Zero(), this._moveScene = ar.u.Zero(), this._wheelXAction = hr.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = hr.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(rr) {
          null === rr && this._wheelXAction !== hr.MoveRelative || (this._wheelXAction = hr.MoveRelative, this._wheelXActionCoordinate = rr)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== hr.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(rr) {
          null === rr && this._wheelYAction !== hr.MoveRelative || (this._wheelYAction = hr.MoveRelative, this._wheelYActionCoordinate = rr)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== hr.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(rr) {
          null === rr && this._wheelZAction !== hr.MoveRelative || (this._wheelZAction = hr.MoveRelative, this._wheelZActionCoordinate = rr)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== hr.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(rr) {
          null === rr && this._wheelXAction !== hr.RotateRelative || (this._wheelXAction = hr.RotateRelative, this._wheelXActionCoordinate = rr)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== hr.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(rr) {
          null === rr && this._wheelYAction !== hr.RotateRelative || (this._wheelYAction = hr.RotateRelative, this._wheelYActionCoordinate = rr)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== hr.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(rr) {
          null === rr && this._wheelZAction !== hr.RotateRelative || (this._wheelZAction = hr.RotateRelative, this._wheelZActionCoordinate = rr)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== hr.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(rr) {
          null === rr && this._wheelXAction !== hr.MoveScene || (this._wheelXAction = hr.MoveScene, this._wheelXActionCoordinate = rr)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== hr.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(rr) {
          null === rr && this._wheelYAction !== hr.MoveScene || (this._wheelYAction = hr.MoveScene, this._wheelYActionCoordinate = rr)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== hr.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(rr) {
          null === rr && this._wheelZAction !== hr.MoveScene || (this._wheelZAction = hr.MoveScene, this._wheelZActionCoordinate = rr)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== hr.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Srr(0), this._rotateRelative.Srr(0), this._moveScene.Srr(0), this._updateCamera(), this.camera.eC().useRightHandedSystem && (this._moveRelative.z *= -1);
          const rr = ar.d.Zero();
          this.camera.getViewMatrix().invertToRef(rr);
          const Sr = ar.u.Zero();
          ar.u.TransformNormalToRef(this._moveRelative, rr, Sr), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Sr), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(rr, Sr, Qr) {
          if (0 === rr) return;
          if (null === Sr || null === Qr) return;
          let Zr = null;
          switch (Sr) {
            case hr.MoveRelative:
              Zr = this._moveRelative;
              break;
            case hr.RotateRelative:
              Zr = this._rotateRelative;
              break;
            case hr.MoveScene:
              Zr = this._moveScene
          }
          switch (Qr) {
            case 0:
              Zr.set(rr, 0, 0);
              break;
            case 1:
              Zr.set(0, rr, 0);
              break;
            case 2:
              Zr.set(0, 0, rr)
          }
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], (0, Zr.k)(rr, null, Sr, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelXMoveRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelXMoveRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, Qr, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelYMoveRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelYMoveRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, jr, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelZMoveRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelZMoveRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, Ir, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelXRotateRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelXRotateRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, fr, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelYRotateRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelYRotateRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, Er, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelZRotateRelative" in rr,
            set: (rr, Sr) => {
              rr.wheelZRotateRelative = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, pr, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelXMoveScene" in rr,
            set: (rr, Sr) => {
              rr.wheelXMoveScene = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, xr, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelYMoveScene" in rr,
            set: (rr, Sr) => {
              rr.wheelYMoveScene = Sr
            }
          },
          metadata: ar
        }, null, Ur), (0, Zr.k)(rr, null, mr, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelZMoveScene" in rr,
            set: (rr, Sr) => {
              rr.wheelZMoveScene = Sr
            }
          },
          metadata: ar
        }, null, Ur), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr
    })();
    Ir.c.FreeCameraMouseWheelInput = zr;
    let Yr = (() => {
      var rr;
      let Sr, Qr, jr = [],
        Ir = [],
        fr = [],
        pr = [];
      return rr = class {
        constructor() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = rr, this.touchAngularSensibility = (0, Zr.m)(this, jr, 2e5), this.touchMoveSensibility = ((0, Zr.m)(this, Ir), (0, Zr.m)(this, fr, 250)), this.singleFingerRotate = ((0, Zr.m)(this, pr), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Er.h.IsSafari()
        }
        attachControl(rr) {
          rr = Er.h.BackCompatCameraNoPreventDefault(arguments);
          let Sr = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Qr => {
              const Zr = Qr.event,
                Wr = "mouse" === Zr.pointerType || this._isSafari && "undefined" === typeof Zr.pointerType;
              if (this.allowMouse || !Wr)
                if (Qr.type === mr.b.POINTERDOWN) {
                  if (rr || Zr.preventDefault(), this._pointerPressed.push(Zr.pointerId), 1 !== this._pointerPressed.length) return;
                  Sr = {
                    x: Zr.clientX,
                    y: Zr.clientY
                  }
                } else if (Qr.type === mr.b.POINTERUP) {
                rr || Zr.preventDefault();
                const Qr = this._pointerPressed.indexOf(Zr.pointerId);
                if (-1 === Qr) return;
                if (this._pointerPressed.splice(Qr, 1), 0 != Qr) return;
                Sr = null, this._offsetX = null, this._offsetY = null
              } else if (Qr.type === mr.b.POINTERMOVE) {
                if (rr || Zr.preventDefault(), !Sr) return;
                if (0 != this._pointerPressed.indexOf(Zr.pointerId)) return;
                this._offsetX = Zr.clientX - Sr.x, this._offsetY = -(Zr.clientY - Sr.y)
              }
            }), this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._pointerInput, mr.b.POINTERDOWN | mr.b.POINTERUP | mr.b.POINTERMOVE), this._onLostFocus) {
            const rr = this.camera.MU().getInputElement();
            rr && rr.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const rr = this.camera.MU().getInputElement();
              rr && rr.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const rr = this.camera,
            Sr = rr.movement.input,
            Qr = Sr.getEntry("touch", "rotate"),
            Zr = Sr.getEntry("touch", "translate"),
            Wr = rr._calculateHandednessMultiplier(),
            jr = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Qr) {
            const Sr = Qr.sensitivity ?? 1 / this.touchAngularSensibility;
            rr.cameraRotation.y = this._offsetX * Wr * Sr, jr && (rr.cameraRotation.x = -this._offsetY * Wr * Sr)
          }
          if (!jr && Zr) {
            const Sr = rr._computeLocalCameraSpeed(),
              Qr = Zr.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Wr = ar.n.kU[0];
            Wr.Hrr(0, 0, Sr * this._offsetY * Qr), ar.d.RotationYawPitchRollToRef(rr.rotation.y, rr.rotation.x, 0, rr._cameraRotationMatrix), ar.u.TransformCoordinatesToRef(Wr, rr._cameraRotationMatrix, Wr), rr.cameraDirection.addInPlace(Wr)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: rr => "touchAngularSensibility" in rr,
            get: rr => rr.touchAngularSensibility,
            set: (rr, Sr) => {
              rr.touchAngularSensibility = Sr
            }
          },
          metadata: ar
        }, jr, Ir), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: rr => "touchMoveSensibility" in rr,
            get: rr => rr.touchMoveSensibility,
            set: (rr, Sr) => {
              rr.touchMoveSensibility = Sr
            }
          },
          metadata: ar
        }, fr, pr), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr
    })();
    Ir.c.FreeCameraTouchInput = Yr;
    var nr, er, Kr, yr = Qr(41769);
    class Br extends Ir.f {
      constructor(rr) {
        super(rr), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new pr), this
      }
      addMouse() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Nr(rr), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new zr, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Yr), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(nr = Br.prototype).addDeviceOrientation ?? (nr.addDeviceOrientation = (0, yr.h)("FreeCameraInputsManager", "addDeviceOrientation")), (er = Br.prototype).addVirtualJoystick ?? (er.addVirtualJoystick = (0, yr.h)("FreeCameraInputsManager", "addVirtualJoystick")), (Kr = Br.prototype).addGamepad ?? (Kr.addGamepad = (0, yr.h)("FreeCameraInputsManager", "addGamepad"));
    var Tr = Qr(41784),
      vr = Qr(38609);
    let Or = (() => {
        var rr;
        let Sr, Qr, Ir, fr, pr = jr.f,
          xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [],
          zr = [],
          Yr = [];
        return rr = class extends pr {
          get angularSensibility() {
            const rr = this.inputs.attached.mouse;
            return rr ? rr.angularSensibility : 0
          }
          set angularSensibility(rr) {
            const Sr = this.inputs.attached.mouse;
            Sr && (Sr.angularSensibility = rr)
          }
          get keysUp() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysUp : []
          }
          set keysUp(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysUp = rr)
          }
          get keysUpward() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysUpward : []
          }
          set keysUpward(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysUpward = rr)
          }
          get keysDown() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysDown : []
          }
          set keysDown(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysDown = rr)
          }
          get keysDownward() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysDownward : []
          }
          set keysDownward(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysDownward = rr)
          }
          get keysLeft() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysLeft : []
          }
          set keysLeft(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysLeft = rr)
          }
          get keysRight() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRight : []
          }
          set keysRight(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRight = rr)
          }
          get keysRotateLeft() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRotateLeft : []
          }
          set keysRotateLeft(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRotateLeft = rr)
          }
          get keysRotateRight() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRotateRight : []
          }
          set keysRotateRight(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRotateRight = rr)
          }
          get keysRotateUp() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRotateUp : []
          }
          set keysRotateUp(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRotateUp = rr)
          }
          get keysRotateDown() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRotateDown : []
          }
          set keysRotateDown(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRotateDown = rr)
          }
          constructor(rr, Sr, Qr) {
            var Wr;
            super(rr, Sr, Qr, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Wr = this, this.ellipsoid = (0, Zr.m)(this, xr, new ar.u(.5, 1, .5)), this.ellipsoidOffset = ((0, Zr.m)(this, mr), (0, Zr.m)(this, Nr, new ar.u(0, 0, 0))), this.checkCollisions = ((0, Zr.m)(this, Ur), (0, Zr.m)(this, tr, !1)), this.applyGravity = ((0, Zr.m)(this, hr), (0, Zr.m)(this, zr, !1)), this.inputs = (0, Zr.m)(this, Yr), this._needMoveForGravity = !1, this._oldPosition = ar.u.Zero(), this._diffPosition = ar.u.Zero(), this._newPosition = ar.u.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(rr, Sr) {
              let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Wr._newPosition.iH(Sr), Wr._newPosition.subtractToRef(Wr._oldPosition, Wr._diffPosition), Wr._diffPosition.length() > Tr.e.CollisionsEpsilon && (Wr.position.addToRef(Wr._diffPosition, Wr._deferredPositionUpdate), Wr._deferOnly ? Wr._deferredUpdated = !0 : Wr.position.iH(Wr._deferredPositionUpdate), Wr.Am && Qr && Wr.Am(Qr))
            }, this.inputs = new Br(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(rr, Sr) {
            Sr = Er.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Sr)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new ar.u(0, 0, 0), this.cameraRotation = new ar.q(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(rr) {
            this._collisionMask = isNaN(rr) ? -1 : rr
          }
          _collideWithWorld(rr) {
            let Sr;
            Sr = this.parent ? ar.u.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Sr.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Qr = this.eC().collisionCoordinator;
            this._collider || (this._collider = Qr.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Zr = rr;
            this.applyGravity && (Zr = rr.add(this.eC().gravity)), Qr.getNewPosition(this._oldPosition, Zr, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = ar.u.Zero(), this._transformedDirection = ar.u.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(rr) {
            this._needMoveForGravity = rr
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.eC().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(pr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.C)()], Qr = [(0, Wr.C)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: rr => "ellipsoid" in rr,
              get: rr => rr.ellipsoid,
              set: (rr, Sr) => {
                rr.ellipsoid = Sr
              }
            },
            metadata: ar
          }, xr, mr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "ellipsoidOffset" in rr,
              get: rr => rr.ellipsoidOffset,
              set: (rr, Sr) => {
                rr.ellipsoidOffset = Sr
              }
            },
            metadata: ar
          }, Nr, Ur), (0, Zr.k)(null, null, Ir, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: rr => "checkCollisions" in rr,
              get: rr => rr.checkCollisions,
              set: (rr, Sr) => {
                rr.checkCollisions = Sr
              }
            },
            metadata: ar
          }, tr, hr), (0, Zr.k)(null, null, fr, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: rr => "applyGravity" in rr,
              get: rr => rr.applyGravity,
              set: (rr, Sr) => {
                rr.applyGravity = Sr
              }
            },
            metadata: ar
          }, zr, Yr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      Lr = !1;
    Lr || (Lr = !0, (0, vr.e)("BABYLON.FreeCamera", Or))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
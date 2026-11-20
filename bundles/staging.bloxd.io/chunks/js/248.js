export const id = 248;
export const ids = [248];
export const modules = {
  39615: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Nk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(39621),
      bk = Bk(39656),
      wk = Bk(39589),
      dk = Bk(39492);
    let sk = (() => {
      var kk;
      let Fk, Bk, Xk, bk, sk, Vk, Jk, Ak, ek, yk, fk, mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Sk = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [];
      return kk = class {
        constructor() {
          this.keysUp = (0, Rk.l)(this, mk, [38]), this.keysUpward = ((0, Rk.l)(this, Wk), (0, Rk.l)(this, vk, [33])), this.keysDown = ((0, Rk.l)(this, ik), (0, Rk.l)(this, Yk, [40])), this.keysDownward = ((0, Rk.l)(this, Lk), (0, Rk.l)(this, Ok, [34])), this.keysLeft = ((0, Rk.l)(this, Ek), (0, Rk.l)(this, Sk, [37])), this.keysRight = ((0, Rk.l)(this, Nk), (0, Rk.l)(this, Hk, [39])), this.rotationSpeed = ((0, Rk.l)(this, uk), (0, Rk.l)(this, Mk, .5)), this.keysRotateLeft = ((0, Rk.l)(this, gk), (0, Rk.l)(this, Uk, [])), this.keysRotateRight = ((0, Rk.l)(this, ck), (0, Rk.l)(this, Gk, [])), this.keysRotateUp = ((0, Rk.l)(this, Tk), (0, Rk.l)(this, rk, [])), this.keysRotateDown = ((0, Rk.l)(this, Dk), (0, Rk.l)(this, zk, [])), this._keys = ((0, Rk.l)(this, Pk), new Array)
        }
        attachControl(kk) {
          kk = dk.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XN(), this._engine = this._scene.ne(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Fk => {
            const Bk = Fk.event;
            if (!Bk.metaKey)
              if (Fk.type === wk.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Bk.keyCode) || -1 !== this.keysDown.indexOf(Bk.keyCode) || -1 !== this.keysLeft.indexOf(Bk.keyCode) || -1 !== this.keysRight.indexOf(Bk.keyCode) || -1 !== this.keysUpward.indexOf(Bk.keyCode) || -1 !== this.keysDownward.indexOf(Bk.keyCode) || -1 !== this.keysRotateLeft.indexOf(Bk.keyCode) || -1 !== this.keysRotateRight.indexOf(Bk.keyCode) || -1 !== this.keysRotateUp.indexOf(Bk.keyCode) || -1 !== this.keysRotateDown.indexOf(Bk.keyCode)) {
                  -1 === this._keys.indexOf(Bk.keyCode) && this._keys.push(Bk.keyCode), kk || Bk.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Bk.keyCode) || -1 !== this.keysDown.indexOf(Bk.keyCode) || -1 !== this.keysLeft.indexOf(Bk.keyCode) || -1 !== this.keysRight.indexOf(Bk.keyCode) || -1 !== this.keysUpward.indexOf(Bk.keyCode) || -1 !== this.keysDownward.indexOf(Bk.keyCode) || -1 !== this.keysRotateLeft.indexOf(Bk.keyCode) || -1 !== this.keysRotateRight.indexOf(Bk.keyCode) || -1 !== this.keysRotateUp.indexOf(Bk.keyCode) || -1 !== this.keysRotateDown.indexOf(Bk.keyCode)) {
              const Fk = this._keys.indexOf(Bk.keyCode);
              Fk >= 0 && this._keys.splice(Fk, 1), kk || Bk.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const kk = this.camera,
              Fk = kk.movement.input,
              Bk = Fk.getEntry("keyboard", "translate"),
              Rk = Fk.getEntry("keyboard", "rotate"),
              tk = Rk?.sensitivity ?? 1,
              Xk = kk._localDirection.E1(0, 0, 0);
            for (let ak = 0; ak < this._keys.length; ak++) {
              const Fk = this._keys[ak]; - 1 !== this.keysLeft.indexOf(Fk) ? Xk.x -= 1 : -1 !== this.keysUp.indexOf(Fk) ? Xk.z += 1 : -1 !== this.keysRight.indexOf(Fk) ? Xk.x += 1 : -1 !== this.keysDown.indexOf(Fk) ? Xk.z -= 1 : -1 !== this.keysUpward.indexOf(Fk) ? Xk.y += 1 : -1 !== this.keysDownward.indexOf(Fk) ? Xk.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Fk) ? Rk && (kk.cameraRotation.y -= this._getLocalRotation() * tk) : -1 !== this.keysRotateRight.indexOf(Fk) ? Rk && (kk.cameraRotation.y += this._getLocalRotation() * tk) : -1 !== this.keysRotateUp.indexOf(Fk) ? Rk && (kk.cameraRotation.x -= this._getLocalRotation() * tk) : -1 !== this.keysRotateDown.indexOf(Fk) && Rk && (kk.cameraRotation.x += this._getLocalRotation() * tk)
            }
            if (Bk && (0 !== Xk.x || 0 !== Xk.y || 0 !== Xk.z)) {
              const Fk = kk._computeLocalCameraSpeed() * (Bk.sensitivity ?? 1);
              Xk.normalize().scaleInPlace(Fk), kk.XN().useRightHandedSystem && (Xk.z *= -1), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), ak.s.TransformNormalToRef(Xk, kk._cameraTransformMatrix, kk._transformedDirection), kk.cameraDirection.addInPlace(kk._transformedDirection)
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
          const kk = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * kk
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], Xk = [(0, tk.M)()], bk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.M)()], Jk = [(0, tk.M)()], Ak = [(0, tk.M)()], ek = [(0, tk.M)()], yk = [(0, tk.M)()], fk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUp" in kk,
            get: kk => kk.keysUp,
            set: (kk, Fk) => {
              kk.keysUp = Fk
            }
          },
          metadata: ak
        }, mk, Wk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUpward" in kk,
            get: kk => kk.keysUpward,
            set: (kk, Fk) => {
              kk.keysUpward = Fk
            }
          },
          metadata: ak
        }, vk, ik), (0, Rk.j)(null, null, Xk, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDown" in kk,
            get: kk => kk.keysDown,
            set: (kk, Fk) => {
              kk.keysDown = Fk
            }
          },
          metadata: ak
        }, Yk, Lk), (0, Rk.j)(null, null, bk, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDownward" in kk,
            get: kk => kk.keysDownward,
            set: (kk, Fk) => {
              kk.keysDownward = Fk
            }
          },
          metadata: ak
        }, Ok, Ek), (0, Rk.j)(null, null, sk, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysLeft" in kk,
            get: kk => kk.keysLeft,
            set: (kk, Fk) => {
              kk.keysLeft = Fk
            }
          },
          metadata: ak
        }, Sk, Nk), (0, Rk.j)(null, null, Vk, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRight" in kk,
            get: kk => kk.keysRight,
            set: (kk, Fk) => {
              kk.keysRight = Fk
            }
          },
          metadata: ak
        }, Hk, uk), (0, Rk.j)(null, null, Jk, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: kk => "rotationSpeed" in kk,
            get: kk => kk.rotationSpeed,
            set: (kk, Fk) => {
              kk.rotationSpeed = Fk
            }
          },
          metadata: ak
        }, Mk, gk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateLeft" in kk,
            get: kk => kk.keysRotateLeft,
            set: (kk, Fk) => {
              kk.keysRotateLeft = Fk
            }
          },
          metadata: ak
        }, Uk, ck), (0, Rk.j)(null, null, ek, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateRight" in kk,
            get: kk => kk.keysRotateRight,
            set: (kk, Fk) => {
              kk.keysRotateRight = Fk
            }
          },
          metadata: ak
        }, Gk, Tk), (0, Rk.j)(null, null, yk, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateUp" in kk,
            get: kk => kk.keysRotateUp,
            set: (kk, Fk) => {
              kk.keysRotateUp = Fk
            }
          },
          metadata: ak
        }, rk, Dk), (0, Rk.j)(null, null, fk, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateDown" in kk,
            get: kk => kk.keysRotateDown,
            set: (kk, Fk) => {
              kk.keysRotateDown = Fk
            }
          },
          metadata: ak
        }, zk, Pk), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk
    })();
    bk.d.FreeCameraKeyboardMoveInput = sk;
    var Vk = Bk(36781),
      Jk = Bk(39582);
    let Ak = (() => {
      var kk;
      let Fk, Bk, ak = [],
        Xk = [],
        bk = [],
        wk = [];
      return kk = class {
        _applyPointerRotation(kk, Fk) {
          this._pointerConditions.button = this._currentActiveButton;
          const Bk = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Bk || "rotate" !== Bk.interaction) return;
          const Rk = Bk.uq ?? Bk.sensitivity ?? 1 / this.angularSensibility,
            tk = Bk.Mq ?? Bk.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += kk * Rk, this.camera.cameraRotation.x += Fk * tk
        }
        constructor() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = kk, this.buttons = (0, Rk.l)(this, ak, [0, 1, 2]), this.angularSensibility = ((0, Rk.l)(this, Xk), (0, Rk.l)(this, bk, 2e3)), this._pointerInput = (0, Rk.l)(this, wk), this._previousPosition = null, this.onPointerMovedObservable = new Vk.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(kk) {
          kk = dk.h.BackCompatCameraNoPreventDefault(arguments);
          const Fk = this.camera.ne(),
            Bk = Fk.getInputElement();
          this._pointerInput || (this._pointerInput = Rk => {
            const tk = Rk.event,
              ak = "touch" === tk.pointerType;
            if (!this.touchEnabled && ak) return;
            if (Rk.type !== Jk.c.POINTERMOVE && -1 === this.buttons.indexOf(tk.button)) return;
            const Xk = tk.target;
            if (Rk.type === Jk.c.POINTERDOWN) {
              if (ak && -1 !== this._activePointerId || !ak && -1 !== this._currentActiveButton) return;
              this._activePointerId = tk.pointerId;
              try {
                Xk?.setPointerCapture(tk.pointerId)
              } catch (bk) {} - 1 === this._currentActiveButton && (this._currentActiveButton = tk.button), this._previousPosition = {
                x: tk.clientX,
                y: tk.clientY
              }, kk || (tk.preventDefault(), Bk && Bk.focus()), Fk.isPointerLock && this._onMouseMove && this._onMouseMove(Rk.event)
            } else if (Rk.type === Jk.c.POINTERUP) {
              if (ak && this._activePointerId !== tk.pointerId || !ak && this._currentActiveButton !== tk.button) return;
              try {
                Xk?.releasePointerCapture(tk.pointerId)
              } catch (bk) {}
              this._currentActiveButton = -1, this._previousPosition = null, kk || tk.preventDefault(), this._activePointerId = -1
            } else if (Rk.type === Jk.c.POINTERMOVE && (this._activePointerId === tk.pointerId || !ak))
              if (Fk.isPointerLock && this._onMouseMove) this._onMouseMove(Rk.event);
              else if (this._previousPosition) {
              const Fk = this.camera._calculateHandednessMultiplier(),
                Bk = (tk.clientX - this._previousPosition.x) * Fk,
                Rk = (tk.clientY - this._previousPosition.y) * Fk;
              this._allowCameraRotation && this._applyPointerRotation(Bk, Rk), this.onPointerMovedObservable.notifyObservers({
                offsetX: Bk,
                offsetY: Rk
              }), this._previousPosition = {
                x: tk.clientX,
                y: tk.clientY
              }, kk || tk.preventDefault()
            }
          }), this._onMouseMove = Bk => {
            if (!Fk.isPointerLock) return;
            const Rk = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Bk.movementX * Rk, Bk.movementY * Rk), this._previousPosition = null, kk || Bk.preventDefault()
          }, this._observer = this.camera.XN()._inputManager._addCameraPointerObserver(this._pointerInput, Jk.c.POINTERDOWN | Jk.c.POINTERUP | Jk.c.POINTERMOVE), Bk && (this._contextMenuBind = kk => this.onContextMenu(kk), Bk.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(kk) {
          kk.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.XN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const kk = this.camera.ne().getInputElement();
              kk && kk.removeEventListener("contextmenu", this._contextMenuBind)
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
        const dk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: kk => "buttons" in kk,
            get: kk => kk.buttons,
            set: (kk, Fk) => {
              kk.buttons = Fk
            }
          },
          metadata: dk
        }, ak, Xk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "angularSensibility" in kk,
            get: kk => kk.angularSensibility,
            set: (kk, Fk) => {
              kk.angularSensibility = Fk
            }
          },
          metadata: dk
        }, bk, wk), dk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dk
        })
      })(), kk
    })();
    bk.d.FreeCameraMouseInput = Ak;
    var ek = Bk(39595);
    let yk = (() => {
      var kk;
      let Fk, Bk, ak, Xk = [],
        bk = [],
        wk = [],
        sk = [],
        Ak = [],
        yk = [];
      return kk = class {
        constructor() {
          this.wheelPrecisionX = (0, Rk.l)(this, Xk, 3), this.wheelPrecisionY = ((0, Rk.l)(this, bk), (0, Rk.l)(this, wk, 3)), this.wheelPrecisionZ = ((0, Rk.l)(this, sk), (0, Rk.l)(this, Ak, 3)), this.onChangedObservable = ((0, Rk.l)(this, yk), new Vk.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(kk) {
          kk = dk.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Fk => {
            if (Fk.type !== Jk.c.POINTERWHEEL) return;
            const Bk = Fk.event,
              Rk = Bk.deltaMode === ek.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Rk * Bk.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Rk * Bk.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Rk * Bk.deltaZ / this._normalize, Bk.preventDefault && (kk || Bk.preventDefault())
          }, this._observer = this.camera.XN()._inputManager._addCameraPointerObserver(this._wheel, Jk.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.XN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const dk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionX" in kk,
            get: kk => kk.wheelPrecisionX,
            set: (kk, Fk) => {
              kk.wheelPrecisionX = Fk
            }
          },
          metadata: dk
        }, Xk, bk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionY" in kk,
            get: kk => kk.wheelPrecisionY,
            set: (kk, Fk) => {
              kk.wheelPrecisionY = Fk
            }
          },
          metadata: dk
        }, wk, sk), (0, Rk.j)(null, null, ak, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionZ" in kk,
            get: kk => kk.wheelPrecisionZ,
            set: (kk, Fk) => {
              kk.wheelPrecisionZ = Fk
            }
          },
          metadata: dk
        }, Ak, yk), dk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dk
        })
      })(), kk
    })();
    var fk;
    ! function(kk) {
      kk[kk.MoveRelative = 0] = "MoveRelative", kk[kk.RotateRelative = 1] = "RotateRelative", kk[kk.MoveScene = 2] = "MoveScene"
    }(fk || (fk = {}));
    let mk = (() => {
      var kk;
      let Fk, Bk, Xk, bk, wk, dk, sk, Vk, Jk, Ak = yk,
        ek = [];
      return kk = class extends Ak {
        constructor() {
          super(...arguments), this.camera = (0, Rk.l)(this, ek), this._moveRelative = ak.s.Zero(), this._rotateRelative = ak.s.Zero(), this._moveScene = ak.s.Zero(), this._wheelXAction = fk.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = fk.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(kk) {
          null === kk && this._wheelXAction !== fk.MoveRelative || (this._wheelXAction = fk.MoveRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== fk.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(kk) {
          null === kk && this._wheelYAction !== fk.MoveRelative || (this._wheelYAction = fk.MoveRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== fk.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(kk) {
          null === kk && this._wheelZAction !== fk.MoveRelative || (this._wheelZAction = fk.MoveRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== fk.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(kk) {
          null === kk && this._wheelXAction !== fk.RotateRelative || (this._wheelXAction = fk.RotateRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== fk.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(kk) {
          null === kk && this._wheelYAction !== fk.RotateRelative || (this._wheelYAction = fk.RotateRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== fk.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(kk) {
          null === kk && this._wheelZAction !== fk.RotateRelative || (this._wheelZAction = fk.RotateRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== fk.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(kk) {
          null === kk && this._wheelXAction !== fk.MoveScene || (this._wheelXAction = fk.MoveScene, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== fk.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(kk) {
          null === kk && this._wheelYAction !== fk.MoveScene || (this._wheelYAction = fk.MoveScene, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== fk.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(kk) {
          null === kk && this._wheelZAction !== fk.MoveScene || (this._wheelZAction = fk.MoveScene, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== fk.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.J_(0), this._rotateRelative.J_(0), this._moveScene.J_(0), this._updateCamera(), this.camera.XN().useRightHandedSystem && (this._moveRelative.z *= -1);
          const kk = ak.c.Zero();
          this.camera.getViewMatrix().invertToRef(kk);
          const Fk = ak.s.Zero();
          ak.s.TransformNormalToRef(this._moveRelative, kk, Fk), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Fk), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(kk, Fk, Bk) {
          if (0 === kk) return;
          if (null === Fk || null === Bk) return;
          let Rk = null;
          switch (Fk) {
            case fk.MoveRelative:
              Rk = this._moveRelative;
              break;
            case fk.RotateRelative:
              Rk = this._rotateRelative;
              break;
            case fk.MoveScene:
              Rk = this._moveScene
          }
          switch (Bk) {
            case 0:
              Rk.set(kk, 0, 0);
              break;
            case 1:
              Rk.set(0, kk, 0);
              break;
            case 2:
              Rk.set(0, 0, kk)
          }
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ak[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], Xk = [(0, tk.M)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.M)()], Jk = [(0, tk.M)()], (0, Rk.j)(kk, null, Fk, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXMoveRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelXMoveRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, Bk, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYMoveRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelYMoveRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, Xk, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZMoveRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelZMoveRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, bk, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXRotateRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelXRotateRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, wk, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYRotateRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelYRotateRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, dk, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZRotateRelative" in kk,
            set: (kk, Fk) => {
              kk.wheelZRotateRelative = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, sk, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXMoveScene" in kk,
            set: (kk, Fk) => {
              kk.wheelXMoveScene = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, Vk, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYMoveScene" in kk,
            set: (kk, Fk) => {
              kk.wheelYMoveScene = Fk
            }
          },
          metadata: ak
        }, null, ek), (0, Rk.j)(kk, null, Jk, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZMoveScene" in kk,
            set: (kk, Fk) => {
              kk.wheelZMoveScene = Fk
            }
          },
          metadata: ak
        }, null, ek), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk
    })();
    bk.d.FreeCameraMouseWheelInput = mk;
    let Wk = (() => {
      var kk;
      let Fk, Bk, Xk = [],
        bk = [],
        wk = [],
        sk = [];
      return kk = class {
        constructor() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = kk, this.touchAngularSensibility = (0, Rk.l)(this, Xk, 2e5), this.touchMoveSensibility = ((0, Rk.l)(this, bk), (0, Rk.l)(this, wk, 250)), this.singleFingerRotate = ((0, Rk.l)(this, sk), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = dk.h.IsSafari()
        }
        attachControl(kk) {
          kk = dk.h.BackCompatCameraNoPreventDefault(arguments);
          let Fk = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Bk => {
              const Rk = Bk.event,
                tk = "mouse" === Rk.pointerType || this._isSafari && "undefined" === typeof Rk.pointerType;
              if (this.allowMouse || !tk)
                if (Bk.type === Jk.c.POINTERDOWN) {
                  if (kk || Rk.preventDefault(), this._pointerPressed.push(Rk.pointerId), 1 !== this._pointerPressed.length) return;
                  Fk = {
                    x: Rk.clientX,
                    y: Rk.clientY
                  }
                } else if (Bk.type === Jk.c.POINTERUP) {
                kk || Rk.preventDefault();
                const Bk = this._pointerPressed.indexOf(Rk.pointerId);
                if (-1 === Bk) return;
                if (this._pointerPressed.splice(Bk, 1), 0 != Bk) return;
                Fk = null, this._offsetX = null, this._offsetY = null
              } else if (Bk.type === Jk.c.POINTERMOVE) {
                if (kk || Rk.preventDefault(), !Fk) return;
                if (0 != this._pointerPressed.indexOf(Rk.pointerId)) return;
                this._offsetX = Rk.clientX - Fk.x, this._offsetY = -(Rk.clientY - Fk.y)
              }
            }), this._observer = this.camera.XN()._inputManager._addCameraPointerObserver(this._pointerInput, Jk.c.POINTERDOWN | Jk.c.POINTERUP | Jk.c.POINTERMOVE), this._onLostFocus) {
            const kk = this.camera.ne().getInputElement();
            kk && kk.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.XN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const kk = this.camera.ne().getInputElement();
              kk && kk.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const kk = this.camera,
            Fk = kk.movement.input,
            Bk = Fk.getEntry("touch", "rotate"),
            Rk = Fk.getEntry("touch", "translate"),
            tk = kk._calculateHandednessMultiplier(),
            Xk = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Bk) {
            const Fk = Bk.sensitivity ?? 1 / this.touchAngularSensibility;
            kk.cameraRotation.y = this._offsetX * tk * Fk, Xk && (kk.cameraRotation.x = -this._offsetY * tk * Fk)
          }
          if (!Xk && Rk) {
            const Fk = kk._computeLocalCameraSpeed(),
              Bk = Rk.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              tk = ak.l.Qe[0];
            tk.E1(0, 0, Fk * this._offsetY * Bk), ak.c.RotationYawPitchRollToRef(kk.rotation.y, kk.rotation.x, 0, kk._cameraRotationMatrix), ak.s.TransformCoordinatesToRef(tk, kk._cameraRotationMatrix, tk), kk.cameraDirection.addInPlace(tk)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "touchAngularSensibility" in kk,
            get: kk => kk.touchAngularSensibility,
            set: (kk, Fk) => {
              kk.touchAngularSensibility = Fk
            }
          },
          metadata: ak
        }, Xk, bk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "touchMoveSensibility" in kk,
            get: kk => kk.touchMoveSensibility,
            set: (kk, Fk) => {
              kk.touchMoveSensibility = Fk
            }
          },
          metadata: ak
        }, wk, sk), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk
    })();
    bk.d.FreeCameraTouchInput = Wk;
    var vk, ik, Yk, Lk = Bk(39296);
    class Ok extends bk.h {
      constructor(kk) {
        super(kk), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new sk), this
      }
      addMouse() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Ak(kk), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new mk, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Wk), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(vk = Ok.prototype).addDeviceOrientation ?? (vk.addDeviceOrientation = (0, Lk.g)("FreeCameraInputsManager", "addDeviceOrientation")), (ik = Ok.prototype).addVirtualJoystick ?? (ik.addVirtualJoystick = (0, Lk.g)("FreeCameraInputsManager", "addVirtualJoystick")), (Yk = Ok.prototype).addGamepad ?? (Yk.addGamepad = (0, Lk.g)("FreeCameraInputsManager", "addGamepad"));
    var Ek = Bk(39305),
      Sk = Bk(36798);
    let Nk = (() => {
        var kk;
        let Fk, Bk, bk, wk, sk = Xk.d,
          Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [],
          mk = [],
          Wk = [];
        return kk = class extends sk {
          get angularSensibility() {
            const kk = this.inputs.attached.mouse;
            return kk ? kk.angularSensibility : 0
          }
          set angularSensibility(kk) {
            const Fk = this.inputs.attached.mouse;
            Fk && (Fk.angularSensibility = kk)
          }
          get keysUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUp : []
          }
          set keysUp(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysUp = kk)
          }
          get keysUpward() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUpward : []
          }
          set keysUpward(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysUpward = kk)
          }
          get keysDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDown : []
          }
          set keysDown(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysDown = kk)
          }
          get keysDownward() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDownward : []
          }
          set keysDownward(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysDownward = kk)
          }
          get keysLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysLeft : []
          }
          set keysLeft(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysLeft = kk)
          }
          get keysRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRight : []
          }
          set keysRight(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRight = kk)
          }
          get keysRotateLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateLeft : []
          }
          set keysRotateLeft(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRotateLeft = kk)
          }
          get keysRotateRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateRight : []
          }
          set keysRotateRight(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRotateRight = kk)
          }
          get keysRotateUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateUp : []
          }
          set keysRotateUp(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRotateUp = kk)
          }
          get keysRotateDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateDown : []
          }
          set keysRotateDown(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRotateDown = kk)
          }
          constructor(kk, Fk, Bk) {
            var tk;
            super(kk, Fk, Bk, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), tk = this, this.ellipsoid = (0, Rk.l)(this, Vk, new ak.s(.5, 1, .5)), this.ellipsoidOffset = ((0, Rk.l)(this, Jk), (0, Rk.l)(this, Ak, new ak.s(0, 0, 0))), this.checkCollisions = ((0, Rk.l)(this, ek), (0, Rk.l)(this, yk, !1)), this.applyGravity = ((0, Rk.l)(this, fk), (0, Rk.l)(this, mk, !1)), this.inputs = (0, Rk.l)(this, Wk), this._needMoveForGravity = !1, this._oldPosition = ak.s.Zero(), this._diffPosition = ak.s.Zero(), this._newPosition = ak.s.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(kk, Fk) {
              let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              tk._newPosition.sBk(Fk), tk._newPosition.subtractToRef(tk._oldPosition, tk._diffPosition), tk._diffPosition.length() > Ek.c.CollisionsEpsilon && (tk.position.addToRef(tk._diffPosition, tk._deferredPositionUpdate), tk._deferOnly ? tk._deferredUpdated = !0 : tk.position.sBk(tk._deferredPositionUpdate), tk.gJ && Bk && tk.gJ(Bk))
            }, this.inputs = new Ok(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(kk, Fk) {
            Fk = dk.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Fk)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new ak.s(0, 0, 0), this.cameraRotation = new ak.p(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(kk) {
            this._collisionMask = isNaN(kk) ? -1 : kk
          }
          _collideWithWorld(kk) {
            let Fk;
            Fk = this.parent ? ak.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Fk.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Bk = this.XN().collisionCoordinator;
            this._collider || (this._collider = Bk.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Rk = kk;
            this.applyGravity && (Rk = kk.add(this.XN().gravity)), Bk.getNewPosition(this._oldPosition, Rk, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = ak.s.Zero(), this._transformedDirection = ak.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(kk) {
            this._needMoveForGravity = kk
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.XN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(sk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.K)()], Bk = [(0, tk.K)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: kk => "ellipsoid" in kk,
              get: kk => kk.ellipsoid,
              set: (kk, Fk) => {
                kk.ellipsoid = Fk
              }
            },
            metadata: ak
          }, Vk, Jk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "ellipsoidOffset" in kk,
              get: kk => kk.ellipsoidOffset,
              set: (kk, Fk) => {
                kk.ellipsoidOffset = Fk
              }
            },
            metadata: ak
          }, Ak, ek), (0, Rk.j)(null, null, bk, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: kk => "checkCollisions" in kk,
              get: kk => kk.checkCollisions,
              set: (kk, Fk) => {
                kk.checkCollisions = Fk
              }
            },
            metadata: ak
          }, yk, fk), (0, Rk.j)(null, null, wk, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyGravity" in kk,
              get: kk => kk.applyGravity,
              set: (kk, Fk) => {
                kk.applyGravity = Fk
              }
            },
            metadata: ak
          }, mk, Wk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      Hk = !1;
    Hk || (Hk = !0, (0, Sk.d)("BABYLON.FreeCamera", Nk))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
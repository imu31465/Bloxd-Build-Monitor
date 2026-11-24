export const id = 258;
export const ids = [258];
export const modules = {
  40201: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => vk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(40207),
      lk = Ik(40244),
      ak = Ik(40176),
      qk = Ik(40097);
    let Lk = (() => {
      var kk;
      let Fk, Ik, yk, lk, Lk, tk, Zk, jk, ek, wk, Hk, Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Sk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [];
      return kk = class {
        constructor() {
          this.keysUp = (0, Xk.n)(this, Jk, [38]), this.keysUpward = ((0, Xk.n)(this, xk), (0, Xk.n)(this, Pk, [33])), this.keysDown = ((0, Xk.n)(this, Kk), (0, Xk.n)(this, Qk, [40])), this.keysDownward = ((0, Xk.n)(this, sk), (0, Xk.n)(this, Vk, [34])), this.keysLeft = ((0, Xk.n)(this, zk), (0, Xk.n)(this, Sk, [37])), this.keysRight = ((0, Xk.n)(this, vk), (0, Xk.n)(this, Ek, [39])), this.rotationSpeed = ((0, Xk.n)(this, Ok), (0, Xk.n)(this, nk, .5)), this.keysRotateLeft = ((0, Xk.n)(this, Gk), (0, Xk.n)(this, pk, [])), this.keysRotateRight = ((0, Xk.n)(this, uk), (0, Xk.n)(this, bk, [])), this.keysRotateUp = ((0, Xk.n)(this, Rk), (0, Xk.n)(this, Uk, [])), this.keysRotateDown = ((0, Xk.n)(this, Ck), (0, Xk.n)(this, Nk, [])), this._keys = ((0, Xk.n)(this, ck), new Array)
        }
        attachControl(kk) {
          kk = qk.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.mG(), this._engine = this._scene.Oe(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Fk => {
            const Ik = Fk.event;
            if (!Ik.metaKey)
              if (Fk.type === ak.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Ik.keyCode) || -1 !== this.keysDown.indexOf(Ik.keyCode) || -1 !== this.keysLeft.indexOf(Ik.keyCode) || -1 !== this.keysRight.indexOf(Ik.keyCode) || -1 !== this.keysUpward.indexOf(Ik.keyCode) || -1 !== this.keysDownward.indexOf(Ik.keyCode) || -1 !== this.keysRotateLeft.indexOf(Ik.keyCode) || -1 !== this.keysRotateRight.indexOf(Ik.keyCode) || -1 !== this.keysRotateUp.indexOf(Ik.keyCode) || -1 !== this.keysRotateDown.indexOf(Ik.keyCode)) {
                  -1 === this._keys.indexOf(Ik.keyCode) && this._keys.push(Ik.keyCode), kk || Ik.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Ik.keyCode) || -1 !== this.keysDown.indexOf(Ik.keyCode) || -1 !== this.keysLeft.indexOf(Ik.keyCode) || -1 !== this.keysRight.indexOf(Ik.keyCode) || -1 !== this.keysUpward.indexOf(Ik.keyCode) || -1 !== this.keysDownward.indexOf(Ik.keyCode) || -1 !== this.keysRotateLeft.indexOf(Ik.keyCode) || -1 !== this.keysRotateRight.indexOf(Ik.keyCode) || -1 !== this.keysRotateUp.indexOf(Ik.keyCode) || -1 !== this.keysRotateDown.indexOf(Ik.keyCode)) {
              const Fk = this._keys.indexOf(Ik.keyCode);
              Fk >= 0 && this._keys.splice(Fk, 1), kk || Ik.preventDefault()
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
              Ik = Fk.getEntry("keyboard", "translate"),
              Xk = Fk.getEntry("keyboard", "rotate"),
              Tk = Xk?.sensitivity ?? 1,
              yk = kk._localDirection.t5(0, 0, 0);
            for (let ik = 0; ik < this._keys.length; ik++) {
              const Fk = this._keys[ik]; - 1 !== this.keysLeft.indexOf(Fk) ? yk.x -= 1 : -1 !== this.keysUp.indexOf(Fk) ? yk.z += 1 : -1 !== this.keysRight.indexOf(Fk) ? yk.x += 1 : -1 !== this.keysDown.indexOf(Fk) ? yk.z -= 1 : -1 !== this.keysUpward.indexOf(Fk) ? yk.y += 1 : -1 !== this.keysDownward.indexOf(Fk) ? yk.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Fk) ? Xk && (kk.cameraRotation.y -= this._getLocalRotation() * Tk) : -1 !== this.keysRotateRight.indexOf(Fk) ? Xk && (kk.cameraRotation.y += this._getLocalRotation() * Tk) : -1 !== this.keysRotateUp.indexOf(Fk) ? Xk && (kk.cameraRotation.x -= this._getLocalRotation() * Tk) : -1 !== this.keysRotateDown.indexOf(Fk) && Xk && (kk.cameraRotation.x += this._getLocalRotation() * Tk)
            }
            if (Ik && (0 !== yk.x || 0 !== yk.y || 0 !== yk.z)) {
              const Fk = kk._computeLocalCameraSpeed() * (Ik.sensitivity ?? 1);
              yk.normalize().scaleInPlace(Fk), kk.mG().useRightHandedSystem && (yk.z *= -1), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), ik.t.TransformNormalToRef(yk, kk._cameraTransformMatrix, kk._transformedDirection), kk.cameraDirection.addInPlace(kk._transformedDirection)
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
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Hk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
          metadata: ik
        }, Jk, xk), (0, Xk.j)(null, null, Ik, {
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
          metadata: ik
        }, Pk, Kk), (0, Xk.j)(null, null, yk, {
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
          metadata: ik
        }, Qk, sk), (0, Xk.j)(null, null, lk, {
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
          metadata: ik
        }, Vk, zk), (0, Xk.j)(null, null, Lk, {
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
          metadata: ik
        }, Sk, vk), (0, Xk.j)(null, null, tk, {
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
          metadata: ik
        }, Ek, Ok), (0, Xk.j)(null, null, Zk, {
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
          metadata: ik
        }, nk, Gk), (0, Xk.j)(null, null, jk, {
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
          metadata: ik
        }, pk, uk), (0, Xk.j)(null, null, ek, {
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
          metadata: ik
        }, bk, Rk), (0, Xk.j)(null, null, wk, {
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
          metadata: ik
        }, Uk, Ck), (0, Xk.j)(null, null, Hk, {
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
          metadata: ik
        }, Nk, ck), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk
    })();
    lk.d.FreeCameraKeyboardMoveInput = Lk;
    var tk = Ik(37187),
      Zk = Ik(40169);
    let jk = (() => {
      var kk;
      let Fk, Ik, ik = [],
        yk = [],
        lk = [],
        ak = [];
      return kk = class {
        _applyPointerRotation(kk, Fk) {
          this._pointerConditions.button = this._currentActiveButton;
          const Ik = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Ik || "rotate" !== Ik.interaction) return;
          const Xk = Ik.kY ?? Ik.sensitivity ?? 1 / this.angularSensibility,
            Tk = Ik.FY ?? Ik.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += kk * Xk, this.camera.cameraRotation.x += Fk * Tk
        }
        constructor() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = kk, this.buttons = (0, Xk.n)(this, ik, [0, 1, 2]), this.angularSensibility = ((0, Xk.n)(this, yk), (0, Xk.n)(this, lk, 2e3)), this._pointerInput = (0, Xk.n)(this, ak), this._previousPosition = null, this.onPointerMovedObservable = new tk.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(kk) {
          kk = qk.h.BackCompatCameraNoPreventDefault(arguments);
          const Fk = this.camera.Oe(),
            Ik = Fk.getInputElement();
          this._pointerInput || (this._pointerInput = Xk => {
            const Tk = Xk.event,
              ik = "touch" === Tk.pointerType;
            if (!this.touchEnabled && ik) return;
            if (Xk.type !== Zk.d.POINTERMOVE && -1 === this.buttons.indexOf(Tk.button)) return;
            const yk = Tk.target;
            if (Xk.type === Zk.d.POINTERDOWN) {
              if (ik && -1 !== this._activePointerId || !ik && -1 !== this._currentActiveButton) return;
              this._activePointerId = Tk.pointerId;
              try {
                yk?.setPointerCapture(Tk.pointerId)
              } catch (lk) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Tk.button), this._previousPosition = {
                x: Tk.clientX,
                y: Tk.clientY
              }, kk || (Tk.preventDefault(), Ik && Ik.focus()), Fk.isPointerLock && this._onMouseMove && this._onMouseMove(Xk.event)
            } else if (Xk.type === Zk.d.POINTERUP) {
              if (ik && this._activePointerId !== Tk.pointerId || !ik && this._currentActiveButton !== Tk.button) return;
              try {
                yk?.releasePointerCapture(Tk.pointerId)
              } catch (lk) {}
              this._currentActiveButton = -1, this._previousPosition = null, kk || Tk.preventDefault(), this._activePointerId = -1
            } else if (Xk.type === Zk.d.POINTERMOVE && (this._activePointerId === Tk.pointerId || !ik))
              if (Fk.isPointerLock && this._onMouseMove) this._onMouseMove(Xk.event);
              else if (this._previousPosition) {
              const Fk = this.camera._calculateHandednessMultiplier(),
                Ik = (Tk.clientX - this._previousPosition.x) * Fk,
                Xk = (Tk.clientY - this._previousPosition.y) * Fk;
              this._allowCameraRotation && this._applyPointerRotation(Ik, Xk), this.onPointerMovedObservable.notifyObservers({
                offsetX: Ik,
                offsetY: Xk
              }), this._previousPosition = {
                x: Tk.clientX,
                y: Tk.clientY
              }, kk || Tk.preventDefault()
            }
          }), this._onMouseMove = Ik => {
            if (!Fk.isPointerLock) return;
            const Xk = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Ik.movementX * Xk, Ik.movementY * Xk), this._previousPosition = null, kk || Ik.preventDefault()
          }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._pointerInput, Zk.d.POINTERDOWN | Zk.d.POINTERUP | Zk.d.POINTERMOVE), Ik && (this._contextMenuBind = kk => this.onContextMenu(kk), Ik.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(kk) {
          kk.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const kk = this.camera.Oe().getInputElement();
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
        const qk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
          metadata: qk
        }, ik, yk), (0, Xk.j)(null, null, Ik, {
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
          metadata: qk
        }, lk, ak), qk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qk
        })
      })(), kk
    })();
    lk.d.FreeCameraMouseInput = jk;
    var ek = Ik(40182);
    let wk = (() => {
      var kk;
      let Fk, Ik, ik, yk = [],
        lk = [],
        ak = [],
        Lk = [],
        jk = [],
        wk = [];
      return kk = class {
        constructor() {
          this.wheelPrecisionX = (0, Xk.n)(this, yk, 3), this.wheelPrecisionY = ((0, Xk.n)(this, lk), (0, Xk.n)(this, ak, 3)), this.wheelPrecisionZ = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, jk, 3)), this.onChangedObservable = ((0, Xk.n)(this, wk), new tk.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(kk) {
          kk = qk.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Fk => {
            if (Fk.type !== Zk.d.POINTERWHEEL) return;
            const Ik = Fk.event,
              Xk = Ik.deltaMode === ek.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Xk * Ik.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Xk * Ik.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Xk * Ik.deltaZ / this._normalize, Ik.preventDefault && (kk || Ik.preventDefault())
          }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._wheel, Zk.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const qk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
          metadata: qk
        }, yk, lk), (0, Xk.j)(null, null, Ik, {
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
          metadata: qk
        }, ak, Lk), (0, Xk.j)(null, null, ik, {
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
          metadata: qk
        }, jk, wk), qk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qk
        })
      })(), kk
    })();
    var Hk;
    ! function(kk) {
      kk[kk.MoveRelative = 0] = "MoveRelative", kk[kk.RotateRelative = 1] = "RotateRelative", kk[kk.MoveScene = 2] = "MoveScene"
    }(Hk || (Hk = {}));
    let Jk = (() => {
      var kk;
      let Fk, Ik, yk, lk, ak, qk, Lk, tk, Zk, jk = wk,
        ek = [];
      return kk = class extends jk {
        constructor() {
          super(...arguments), this.camera = (0, Xk.n)(this, ek), this._moveRelative = ik.t.Zero(), this._rotateRelative = ik.t.Zero(), this._moveScene = ik.t.Zero(), this._wheelXAction = Hk.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Hk.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(kk) {
          null === kk && this._wheelXAction !== Hk.MoveRelative || (this._wheelXAction = Hk.MoveRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Hk.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(kk) {
          null === kk && this._wheelYAction !== Hk.MoveRelative || (this._wheelYAction = Hk.MoveRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Hk.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(kk) {
          null === kk && this._wheelZAction !== Hk.MoveRelative || (this._wheelZAction = Hk.MoveRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Hk.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(kk) {
          null === kk && this._wheelXAction !== Hk.RotateRelative || (this._wheelXAction = Hk.RotateRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Hk.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(kk) {
          null === kk && this._wheelYAction !== Hk.RotateRelative || (this._wheelYAction = Hk.RotateRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Hk.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(kk) {
          null === kk && this._wheelZAction !== Hk.RotateRelative || (this._wheelZAction = Hk.RotateRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Hk.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(kk) {
          null === kk && this._wheelXAction !== Hk.MoveScene || (this._wheelXAction = Hk.MoveScene, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Hk.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(kk) {
          null === kk && this._wheelYAction !== Hk.MoveScene || (this._wheelYAction = Hk.MoveScene, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Hk.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(kk) {
          null === kk && this._wheelZAction !== Hk.MoveScene || (this._wheelZAction = Hk.MoveScene, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Hk.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.I6(0), this._rotateRelative.I6(0), this._moveScene.I6(0), this._updateCamera(), this.camera.mG().useRightHandedSystem && (this._moveRelative.z *= -1);
          const kk = ik.c.Zero();
          this.camera.getViewMatrix().invertToRef(kk);
          const Fk = ik.t.Zero();
          ik.t.TransformNormalToRef(this._moveRelative, kk, Fk), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Fk), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(kk, Fk, Ik) {
          if (0 === kk) return;
          if (null === Fk || null === Ik) return;
          let Xk = null;
          switch (Fk) {
            case Hk.MoveRelative:
              Xk = this._moveRelative;
              break;
            case Hk.RotateRelative:
              Xk = this._rotateRelative;
              break;
            case Hk.MoveScene:
              Xk = this._moveScene
          }
          switch (Ik) {
            case 0:
              Xk.set(kk, 0, 0);
              break;
            case 1:
              Xk.set(0, kk, 0);
              break;
            case 2:
              Xk.set(0, 0, kk)
          }
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(jk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Fk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, Ik, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, yk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, lk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, ak, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, qk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, Lk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, tk, {
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
          metadata: ik
        }, null, ek), (0, Xk.j)(kk, null, Zk, {
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
          metadata: ik
        }, null, ek), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk
    })();
    lk.d.FreeCameraMouseWheelInput = Jk;
    let xk = (() => {
      var kk;
      let Fk, Ik, yk = [],
        lk = [],
        ak = [],
        Lk = [];
      return kk = class {
        constructor() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = kk, this.touchAngularSensibility = (0, Xk.n)(this, yk, 2e5), this.touchMoveSensibility = ((0, Xk.n)(this, lk), (0, Xk.n)(this, ak, 250)), this.singleFingerRotate = ((0, Xk.n)(this, Lk), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = qk.h.IsSafari()
        }
        attachControl(kk) {
          kk = qk.h.BackCompatCameraNoPreventDefault(arguments);
          let Fk = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Ik => {
              const Xk = Ik.event,
                Tk = "mouse" === Xk.pointerType || this._isSafari && "undefined" === typeof Xk.pointerType;
              if (this.allowMouse || !Tk)
                if (Ik.type === Zk.d.POINTERDOWN) {
                  if (kk || Xk.preventDefault(), this._pointerPressed.push(Xk.pointerId), 1 !== this._pointerPressed.length) return;
                  Fk = {
                    x: Xk.clientX,
                    y: Xk.clientY
                  }
                } else if (Ik.type === Zk.d.POINTERUP) {
                kk || Xk.preventDefault();
                const Ik = this._pointerPressed.indexOf(Xk.pointerId);
                if (-1 === Ik) return;
                if (this._pointerPressed.splice(Ik, 1), 0 != Ik) return;
                Fk = null, this._offsetX = null, this._offsetY = null
              } else if (Ik.type === Zk.d.POINTERMOVE) {
                if (kk || Xk.preventDefault(), !Fk) return;
                if (0 != this._pointerPressed.indexOf(Xk.pointerId)) return;
                this._offsetX = Xk.clientX - Fk.x, this._offsetY = -(Xk.clientY - Fk.y)
              }
            }), this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._pointerInput, Zk.d.POINTERDOWN | Zk.d.POINTERUP | Zk.d.POINTERMOVE), this._onLostFocus) {
            const kk = this.camera.Oe().getInputElement();
            kk && kk.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const kk = this.camera.Oe().getInputElement();
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
            Ik = Fk.getEntry("touch", "rotate"),
            Xk = Fk.getEntry("touch", "translate"),
            Tk = kk._calculateHandednessMultiplier(),
            yk = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Ik) {
            const Fk = Ik.sensitivity ?? 1 / this.touchAngularSensibility;
            kk.cameraRotation.y = this._offsetX * Tk * Fk, yk && (kk.cameraRotation.x = -this._offsetY * Tk * Fk)
          }
          if (!yk && Xk) {
            const Fk = kk._computeLocalCameraSpeed(),
              Ik = Xk.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Tk = ik.l.Ge[0];
            Tk.t5(0, 0, Fk * this._offsetY * Ik), ik.c.RotationYawPitchRollToRef(kk.rotation.y, kk.rotation.x, 0, kk._cameraRotationMatrix), ik.t.TransformCoordinatesToRef(Tk, kk._cameraRotationMatrix, Tk), kk.cameraDirection.addInPlace(Tk)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
          metadata: ik
        }, yk, lk), (0, Xk.j)(null, null, Ik, {
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
          metadata: ik
        }, ak, Lk), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk
    })();
    lk.d.FreeCameraTouchInput = xk;
    var Pk, Kk, Qk, sk = Ik(39863);
    class Vk extends lk.h {
      constructor(kk) {
        super(kk), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Lk), this
      }
      addMouse() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new jk(kk), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Jk, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new xk), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Pk = Vk.prototype).addDeviceOrientation ?? (Pk.addDeviceOrientation = (0, sk.h)("FreeCameraInputsManager", "addDeviceOrientation")), (Kk = Vk.prototype).addVirtualJoystick ?? (Kk.addVirtualJoystick = (0, sk.h)("FreeCameraInputsManager", "addVirtualJoystick")), (Qk = Vk.prototype).addGamepad ?? (Qk.addGamepad = (0, sk.h)("FreeCameraInputsManager", "addGamepad"));
    var zk = Ik(39885),
      Sk = Ik(37201);
    let vk = (() => {
        var kk;
        let Fk, Ik, lk, ak, Lk = yk.e,
          tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [],
          Jk = [],
          xk = [];
        return kk = class extends Lk {
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
          constructor(kk, Fk, Ik) {
            var Tk;
            super(kk, Fk, Ik, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Tk = this, this.ellipsoid = (0, Xk.n)(this, tk, new ik.t(.5, 1, .5)), this.ellipsoidOffset = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, new ik.t(0, 0, 0))), this.checkCollisions = ((0, Xk.n)(this, ek), (0, Xk.n)(this, wk, !1)), this.applyGravity = ((0, Xk.n)(this, Hk), (0, Xk.n)(this, Jk, !1)), this.inputs = (0, Xk.n)(this, xk), this._needMoveForGravity = !1, this._oldPosition = ik.t.Zero(), this._diffPosition = ik.t.Zero(), this._newPosition = ik.t.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(kk, Fk) {
              let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Tk._newPosition.kS(Fk), Tk._newPosition.subtractToRef(Tk._oldPosition, Tk._diffPosition), Tk._diffPosition.length() > zk.c.CollisionsEpsilon && (Tk.position.addToRef(Tk._diffPosition, Tk._deferredPositionUpdate), Tk._deferOnly ? Tk._deferredUpdated = !0 : Tk.position.kS(Tk._deferredPositionUpdate), Tk.eZ && Ik && Tk.eZ(Ik))
            }, this.inputs = new Vk(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(kk, Fk) {
            Fk = qk.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Fk)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new ik.t(0, 0, 0), this.cameraRotation = new ik.p(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(kk) {
            this._collisionMask = isNaN(kk) ? -1 : kk
          }
          _collideWithWorld(kk) {
            let Fk;
            Fk = this.parent ? ik.t.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Fk.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Ik = this.mG().collisionCoordinator;
            this._collider || (this._collider = Ik.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Xk = kk;
            this.applyGravity && (Xk = kk.add(this.mG().gravity)), Ik.getNewPosition(this._oldPosition, Xk, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = ik.t.Zero(), this._transformedDirection = ik.t.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.mG().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.H)()], Ik = [(0, Tk.H)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
            metadata: ik
          }, tk, Zk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ik
          }, jk, ek), (0, Xk.j)(null, null, lk, {
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
            metadata: ik
          }, wk, Hk), (0, Xk.j)(null, null, ak, {
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
            metadata: ik
          }, Jk, xk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      Ek = !1;
    Ek || (Ek = !0, (0, Sk.f)("BABYLON.FreeCamera", vk))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
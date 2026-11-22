export const id = 254;
export const ids = [254];
export const modules = {
  39774: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => dk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(39778),
      rk = ik(39804),
      Pk = ik(39751),
      mk = ik(39662);
    let Mk = (() => {
      var kk;
      let ek, ik, bk, rk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        sk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [];
      return kk = class {
        constructor() {
          this.keysUp = (0, Dk.e)(this, lk, [38]), this.keysUpward = ((0, Dk.e)(this, pk), (0, Dk.e)(this, yk, [33])), this.keysDown = ((0, Dk.e)(this, Yk), (0, Dk.e)(this, Lk, [40])), this.keysDownward = ((0, Dk.e)(this, Ck), (0, Dk.e)(this, Ak, [34])), this.keysLeft = ((0, Dk.e)(this, jk), (0, Dk.e)(this, sk, [37])), this.keysRight = ((0, Dk.e)(this, dk), (0, Dk.e)(this, Vk, [39])), this.rotationSpeed = ((0, Dk.e)(this, Fk), (0, Dk.e)(this, uk, .5)), this.keysRotateLeft = ((0, Dk.e)(this, qk), (0, Dk.e)(this, Ik, [])), this.keysRotateRight = ((0, Dk.e)(this, zk), (0, Dk.e)(this, Qk, [])), this.keysRotateUp = ((0, Dk.e)(this, vk), (0, Dk.e)(this, Ek, [])), this.keysRotateDown = ((0, Dk.e)(this, hk), (0, Dk.e)(this, ak, [])), this._keys = ((0, Dk.e)(this, Wk), new Array)
        }
        attachControl(kk) {
          kk = mk.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XF(), this._engine = this._scene.JU(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ek => {
            const ik = ek.event;
            if (!ik.metaKey)
              if (ek.type === Pk.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(ik.keyCode) || -1 !== this.keysRotateLeft.indexOf(ik.keyCode) || -1 !== this.keysRotateRight.indexOf(ik.keyCode) || -1 !== this.keysRotateUp.indexOf(ik.keyCode) || -1 !== this.keysRotateDown.indexOf(ik.keyCode)) {
                  -1 === this._keys.indexOf(ik.keyCode) && this._keys.push(ik.keyCode), kk || ik.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(ik.keyCode) || -1 !== this.keysRotateLeft.indexOf(ik.keyCode) || -1 !== this.keysRotateRight.indexOf(ik.keyCode) || -1 !== this.keysRotateUp.indexOf(ik.keyCode) || -1 !== this.keysRotateDown.indexOf(ik.keyCode)) {
              const ek = this._keys.indexOf(ik.keyCode);
              ek >= 0 && this._keys.splice(ek, 1), kk || ik.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const kk = this.camera,
              ek = kk.movement.input,
              ik = ek.getEntry("keyboard", "translate"),
              Dk = ek.getEntry("keyboard", "rotate"),
              fk = Dk?.sensitivity ?? 1,
              bk = kk._localDirection.Z6(0, 0, 0);
            for (let Sk = 0; Sk < this._keys.length; Sk++) {
              const ek = this._keys[Sk]; - 1 !== this.keysLeft.indexOf(ek) ? bk.x -= 1 : -1 !== this.keysUp.indexOf(ek) ? bk.z += 1 : -1 !== this.keysRight.indexOf(ek) ? bk.x += 1 : -1 !== this.keysDown.indexOf(ek) ? bk.z -= 1 : -1 !== this.keysUpward.indexOf(ek) ? bk.y += 1 : -1 !== this.keysDownward.indexOf(ek) ? bk.y -= 1 : -1 !== this.keysRotateLeft.indexOf(ek) ? Dk && (kk.cameraRotation.y -= this._getLocalRotation() * fk) : -1 !== this.keysRotateRight.indexOf(ek) ? Dk && (kk.cameraRotation.y += this._getLocalRotation() * fk) : -1 !== this.keysRotateUp.indexOf(ek) ? Dk && (kk.cameraRotation.x -= this._getLocalRotation() * fk) : -1 !== this.keysRotateDown.indexOf(ek) && Dk && (kk.cameraRotation.x += this._getLocalRotation() * fk)
            }
            if (ik && (0 !== bk.x || 0 !== bk.y || 0 !== bk.z)) {
              const ek = kk._computeLocalCameraSpeed() * (ik.sensitivity ?? 1);
              bk.normalize().scaleInPlace(ek), kk.XF().useRightHandedSystem && (bk.z *= -1), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), Sk.o.TransformNormalToRef(bk, kk._cameraTransformMatrix, kk._transformedDirection), kk.cameraDirection.addInPlace(kk._transformedDirection)
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
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], wk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUp" in kk,
            get: kk => kk.keysUp,
            set: (kk, ek) => {
              kk.keysUp = ek
            }
          },
          metadata: Sk
        }, lk, pk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUpward" in kk,
            get: kk => kk.keysUpward,
            set: (kk, ek) => {
              kk.keysUpward = ek
            }
          },
          metadata: Sk
        }, yk, Yk), (0, Dk.d)(null, null, bk, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDown" in kk,
            get: kk => kk.keysDown,
            set: (kk, ek) => {
              kk.keysDown = ek
            }
          },
          metadata: Sk
        }, Lk, Ck), (0, Dk.d)(null, null, rk, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDownward" in kk,
            get: kk => kk.keysDownward,
            set: (kk, ek) => {
              kk.keysDownward = ek
            }
          },
          metadata: Sk
        }, Ak, jk), (0, Dk.d)(null, null, Mk, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysLeft" in kk,
            get: kk => kk.keysLeft,
            set: (kk, ek) => {
              kk.keysLeft = ek
            }
          },
          metadata: Sk
        }, sk, dk), (0, Dk.d)(null, null, Kk, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRight" in kk,
            get: kk => kk.keysRight,
            set: (kk, ek) => {
              kk.keysRight = ek
            }
          },
          metadata: Sk
        }, Vk, Fk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: kk => "rotationSpeed" in kk,
            get: kk => kk.rotationSpeed,
            set: (kk, ek) => {
              kk.rotationSpeed = ek
            }
          },
          metadata: Sk
        }, uk, qk), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateLeft" in kk,
            get: kk => kk.keysRotateLeft,
            set: (kk, ek) => {
              kk.keysRotateLeft = ek
            }
          },
          metadata: Sk
        }, Ik, zk), (0, Dk.d)(null, null, Uk, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateRight" in kk,
            get: kk => kk.keysRotateRight,
            set: (kk, ek) => {
              kk.keysRotateRight = ek
            }
          },
          metadata: Sk
        }, Qk, vk), (0, Dk.d)(null, null, Hk, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateUp" in kk,
            get: kk => kk.keysRotateUp,
            set: (kk, ek) => {
              kk.keysRotateUp = ek
            }
          },
          metadata: Sk
        }, Ek, hk), (0, Dk.d)(null, null, wk, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRotateDown" in kk,
            get: kk => kk.keysRotateDown,
            set: (kk, ek) => {
              kk.keysRotateDown = ek
            }
          },
          metadata: Sk
        }, ak, Wk), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk
    })();
    rk.e.FreeCameraKeyboardMoveInput = Mk;
    var Kk = ik(36726),
      xk = ik(39742);
    let nk = (() => {
      var kk;
      let ek, ik, Sk = [],
        bk = [],
        rk = [],
        Pk = [];
      return kk = class {
        _applyPointerRotation(kk, ek) {
          this._pointerConditions.button = this._currentActiveButton;
          const ik = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ik || "rotate" !== ik.interaction) return;
          const Dk = ik.xZ ?? ik.sensitivity ?? 1 / this.angularSensibility,
            fk = ik.HZ ?? ik.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += kk * Dk, this.camera.cameraRotation.x += ek * fk
        }
        constructor() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = kk, this.buttons = (0, Dk.e)(this, Sk, [0, 1, 2]), this.angularSensibility = ((0, Dk.e)(this, bk), (0, Dk.e)(this, rk, 2e3)), this._pointerInput = (0, Dk.e)(this, Pk), this._previousPosition = null, this.onPointerMovedObservable = new Kk.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(kk) {
          kk = mk.i.BackCompatCameraNoPreventDefault(arguments);
          const ek = this.camera.JU(),
            ik = ek.getInputElement();
          this._pointerInput || (this._pointerInput = Dk => {
            const fk = Dk.event,
              Sk = "touch" === fk.pointerType;
            if (!this.touchEnabled && Sk) return;
            if (Dk.type !== xk.c.POINTERMOVE && -1 === this.buttons.indexOf(fk.button)) return;
            const bk = fk.target;
            if (Dk.type === xk.c.POINTERDOWN) {
              if (Sk && -1 !== this._activePointerId || !Sk && -1 !== this._currentActiveButton) return;
              this._activePointerId = fk.pointerId;
              try {
                bk?.setPointerCapture(fk.pointerId)
              } catch (rk) {} - 1 === this._currentActiveButton && (this._currentActiveButton = fk.button), this._previousPosition = {
                x: fk.clientX,
                y: fk.clientY
              }, kk || (fk.preventDefault(), ik && ik.focus()), ek.isPointerLock && this._onMouseMove && this._onMouseMove(Dk.event)
            } else if (Dk.type === xk.c.POINTERUP) {
              if (Sk && this._activePointerId !== fk.pointerId || !Sk && this._currentActiveButton !== fk.button) return;
              try {
                bk?.releasePointerCapture(fk.pointerId)
              } catch (rk) {}
              this._currentActiveButton = -1, this._previousPosition = null, kk || fk.preventDefault(), this._activePointerId = -1
            } else if (Dk.type === xk.c.POINTERMOVE && (this._activePointerId === fk.pointerId || !Sk))
              if (ek.isPointerLock && this._onMouseMove) this._onMouseMove(Dk.event);
              else if (this._previousPosition) {
              const ek = this.camera._calculateHandednessMultiplier(),
                ik = (fk.clientX - this._previousPosition.x) * ek,
                Dk = (fk.clientY - this._previousPosition.y) * ek;
              this._allowCameraRotation && this._applyPointerRotation(ik, Dk), this.onPointerMovedObservable.notifyObservers({
                offsetX: ik,
                offsetY: Dk
              }), this._previousPosition = {
                x: fk.clientX,
                y: fk.clientY
              }, kk || fk.preventDefault()
            }
          }), this._onMouseMove = ik => {
            if (!ek.isPointerLock) return;
            const Dk = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ik.movementX * Dk, ik.movementY * Dk), this._previousPosition = null, kk || ik.preventDefault()
          }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, xk.c.POINTERDOWN | xk.c.POINTERUP | xk.c.POINTERMOVE), ik && (this._contextMenuBind = kk => this.onContextMenu(kk), ik.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(kk) {
          kk.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const kk = this.camera.JU().getInputElement();
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
        const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: kk => "buttons" in kk,
            get: kk => kk.buttons,
            set: (kk, ek) => {
              kk.buttons = ek
            }
          },
          metadata: mk
        }, Sk, bk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "angularSensibility" in kk,
            get: kk => kk.angularSensibility,
            set: (kk, ek) => {
              kk.angularSensibility = ek
            }
          },
          metadata: mk
        }, rk, Pk), mk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mk
        })
      })(), kk
    })();
    rk.e.FreeCameraMouseInput = nk;
    var Uk = ik(39758);
    let Hk = (() => {
      var kk;
      let ek, ik, Sk, bk = [],
        rk = [],
        Pk = [],
        Mk = [],
        nk = [],
        Hk = [];
      return kk = class {
        constructor() {
          this.wheelPrecisionX = (0, Dk.e)(this, bk, 3), this.wheelPrecisionY = ((0, Dk.e)(this, rk), (0, Dk.e)(this, Pk, 3)), this.wheelPrecisionZ = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, nk, 3)), this.onChangedObservable = ((0, Dk.e)(this, Hk), new Kk.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(kk) {
          kk = mk.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ek => {
            if (ek.type !== xk.c.POINTERWHEEL) return;
            const ik = ek.event,
              Dk = ik.deltaMode === Uk.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Dk * ik.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Dk * ik.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Dk * ik.deltaZ / this._normalize, ik.preventDefault && (kk || ik.preventDefault())
          }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._wheel, xk.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionX" in kk,
            get: kk => kk.wheelPrecisionX,
            set: (kk, ek) => {
              kk.wheelPrecisionX = ek
            }
          },
          metadata: mk
        }, bk, rk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionY" in kk,
            get: kk => kk.wheelPrecisionY,
            set: (kk, ek) => {
              kk.wheelPrecisionY = ek
            }
          },
          metadata: mk
        }, Pk, Mk), (0, Dk.d)(null, null, Sk, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecisionZ" in kk,
            get: kk => kk.wheelPrecisionZ,
            set: (kk, ek) => {
              kk.wheelPrecisionZ = ek
            }
          },
          metadata: mk
        }, nk, Hk), mk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mk
        })
      })(), kk
    })();
    var wk;
    ! function(kk) {
      kk[kk.MoveRelative = 0] = "MoveRelative", kk[kk.RotateRelative = 1] = "RotateRelative", kk[kk.MoveScene = 2] = "MoveScene"
    }(wk || (wk = {}));
    let lk = (() => {
      var kk;
      let ek, ik, bk, rk, Pk, mk, Mk, Kk, xk, nk = Hk,
        Uk = [];
      return kk = class extends nk {
        constructor() {
          super(...arguments), this.camera = (0, Dk.e)(this, Uk), this._moveRelative = Sk.o.Zero(), this._rotateRelative = Sk.o.Zero(), this._moveScene = Sk.o.Zero(), this._wheelXAction = wk.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = wk.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(kk) {
          null === kk && this._wheelXAction !== wk.MoveRelative || (this._wheelXAction = wk.MoveRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== wk.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(kk) {
          null === kk && this._wheelYAction !== wk.MoveRelative || (this._wheelYAction = wk.MoveRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== wk.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(kk) {
          null === kk && this._wheelZAction !== wk.MoveRelative || (this._wheelZAction = wk.MoveRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== wk.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(kk) {
          null === kk && this._wheelXAction !== wk.RotateRelative || (this._wheelXAction = wk.RotateRelative, this._wheelXActionCoordinate = kk)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== wk.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(kk) {
          null === kk && this._wheelYAction !== wk.RotateRelative || (this._wheelYAction = wk.RotateRelative, this._wheelYActionCoordinate = kk)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== wk.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(kk) {
          null === kk && this._wheelZAction !== wk.RotateRelative || (this._wheelZAction = wk.RotateRelative, this._wheelZActionCoordinate = kk)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== wk.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(kk) {
          null === kk && this._wheelXAction !== wk.MoveScene || (this._wheelXAction = wk.MoveScene, this._wheelXActionCoordinate = kk)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== wk.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(kk) {
          null === kk && this._wheelYAction !== wk.MoveScene || (this._wheelYAction = wk.MoveScene, this._wheelYActionCoordinate = kk)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== wk.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(kk) {
          null === kk && this._wheelZAction !== wk.MoveScene || (this._wheelZAction = wk.MoveScene, this._wheelZActionCoordinate = kk)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== wk.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.A_(0), this._rotateRelative.A_(0), this._moveScene.A_(0), this._updateCamera(), this.camera.XF().useRightHandedSystem && (this._moveRelative.z *= -1);
          const kk = Sk.b.Zero();
          this.camera.getViewMatrix().invertToRef(kk);
          const ek = Sk.o.Zero();
          Sk.o.TransformNormalToRef(this._moveRelative, kk, ek), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ek), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(kk, ek, ik) {
          if (0 === kk) return;
          if (null === ek || null === ik) return;
          let Dk = null;
          switch (ek) {
            case wk.MoveRelative:
              Dk = this._moveRelative;
              break;
            case wk.RotateRelative:
              Dk = this._rotateRelative;
              break;
            case wk.MoveScene:
              Dk = this._moveScene
          }
          switch (ik) {
            case 0:
              Dk.set(kk, 0, 0);
              break;
            case 1:
              Dk.set(0, kk, 0);
              break;
            case 2:
              Dk.set(0, 0, kk)
          }
        }
      }, (() => {
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(nk[Symbol.metadata] ?? null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], (0, Dk.d)(kk, null, ek, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXMoveRelative" in kk,
            set: (kk, ek) => {
              kk.wheelXMoveRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, ik, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYMoveRelative" in kk,
            set: (kk, ek) => {
              kk.wheelYMoveRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, bk, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZMoveRelative" in kk,
            set: (kk, ek) => {
              kk.wheelZMoveRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, rk, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXRotateRelative" in kk,
            set: (kk, ek) => {
              kk.wheelXRotateRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, Pk, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYRotateRelative" in kk,
            set: (kk, ek) => {
              kk.wheelYRotateRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, mk, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZRotateRelative" in kk,
            set: (kk, ek) => {
              kk.wheelZRotateRelative = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, Mk, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelXMoveScene" in kk,
            set: (kk, ek) => {
              kk.wheelXMoveScene = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, Kk, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelYMoveScene" in kk,
            set: (kk, ek) => {
              kk.wheelYMoveScene = ek
            }
          },
          metadata: Sk
        }, null, Uk), (0, Dk.d)(kk, null, xk, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelZMoveScene" in kk,
            set: (kk, ek) => {
              kk.wheelZMoveScene = ek
            }
          },
          metadata: Sk
        }, null, Uk), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk
    })();
    rk.e.FreeCameraMouseWheelInput = lk;
    let pk = (() => {
      var kk;
      let ek, ik, bk = [],
        rk = [],
        Pk = [],
        Mk = [];
      return kk = class {
        constructor() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = kk, this.touchAngularSensibility = (0, Dk.e)(this, bk, 2e5), this.touchMoveSensibility = ((0, Dk.e)(this, rk), (0, Dk.e)(this, Pk, 250)), this.singleFingerRotate = ((0, Dk.e)(this, Mk), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = mk.i.IsSafari()
        }
        attachControl(kk) {
          kk = mk.i.BackCompatCameraNoPreventDefault(arguments);
          let ek = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ik => {
              const Dk = ik.event,
                fk = "mouse" === Dk.pointerType || this._isSafari && "undefined" === typeof Dk.pointerType;
              if (this.allowMouse || !fk)
                if (ik.type === xk.c.POINTERDOWN) {
                  if (kk || Dk.preventDefault(), this._pointerPressed.push(Dk.pointerId), 1 !== this._pointerPressed.length) return;
                  ek = {
                    x: Dk.clientX,
                    y: Dk.clientY
                  }
                } else if (ik.type === xk.c.POINTERUP) {
                kk || Dk.preventDefault();
                const ik = this._pointerPressed.indexOf(Dk.pointerId);
                if (-1 === ik) return;
                if (this._pointerPressed.splice(ik, 1), 0 != ik) return;
                ek = null, this._offsetX = null, this._offsetY = null
              } else if (ik.type === xk.c.POINTERMOVE) {
                if (kk || Dk.preventDefault(), !ek) return;
                if (0 != this._pointerPressed.indexOf(Dk.pointerId)) return;
                this._offsetX = Dk.clientX - ek.x, this._offsetY = -(Dk.clientY - ek.y)
              }
            }), this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, xk.c.POINTERDOWN | xk.c.POINTERUP | xk.c.POINTERMOVE), this._onLostFocus) {
            const kk = this.camera.JU().getInputElement();
            kk && kk.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const kk = this.camera.JU().getInputElement();
              kk && kk.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const kk = this.camera,
            ek = kk.movement.input,
            ik = ek.getEntry("touch", "rotate"),
            Dk = ek.getEntry("touch", "translate"),
            fk = kk._calculateHandednessMultiplier(),
            bk = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ik) {
            const ek = ik.sensitivity ?? 1 / this.touchAngularSensibility;
            kk.cameraRotation.y = this._offsetX * fk * ek, bk && (kk.cameraRotation.x = -this._offsetY * fk * ek)
          }
          if (!bk && Dk) {
            const ek = kk._computeLocalCameraSpeed(),
              ik = Dk.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              fk = Sk.j.eH[0];
            fk.Z6(0, 0, ek * this._offsetY * ik), Sk.b.RotationYawPitchRollToRef(kk.rotation.y, kk.rotation.x, 0, kk._cameraRotationMatrix), Sk.o.TransformCoordinatesToRef(fk, kk._cameraRotationMatrix, fk), kk.cameraDirection.addInPlace(fk)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "touchAngularSensibility" in kk,
            get: kk => kk.touchAngularSensibility,
            set: (kk, ek) => {
              kk.touchAngularSensibility = ek
            }
          },
          metadata: Sk
        }, bk, rk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "touchMoveSensibility" in kk,
            get: kk => kk.touchMoveSensibility,
            set: (kk, ek) => {
              kk.touchMoveSensibility = ek
            }
          },
          metadata: Sk
        }, Pk, Mk), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk
    })();
    rk.e.FreeCameraTouchInput = pk;
    var yk, Yk, Lk, Ck = ik(39447);
    class Ak extends rk.i {
      constructor(kk) {
        super(kk), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Mk), this
      }
      addMouse() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new nk(kk), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new lk, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new pk), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(yk = Ak.prototype).addDeviceOrientation ?? (yk.addDeviceOrientation = (0, Ck.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Yk = Ak.prototype).addVirtualJoystick ?? (Yk.addVirtualJoystick = (0, Ck.i)("FreeCameraInputsManager", "addVirtualJoystick")), (Lk = Ak.prototype).addGamepad ?? (Lk.addGamepad = (0, Ck.i)("FreeCameraInputsManager", "addGamepad"));
    var jk = ik(39467),
      sk = ik(36734);
    let dk = (() => {
        var kk;
        let ek, ik, rk, Pk, Mk = bk.e,
          Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [],
          lk = [],
          pk = [];
        return kk = class extends Mk {
          get angularSensibility() {
            const kk = this.inputs.attached.mouse;
            return kk ? kk.angularSensibility : 0
          }
          set angularSensibility(kk) {
            const ek = this.inputs.attached.mouse;
            ek && (ek.angularSensibility = kk)
          }
          get keysUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUp : []
          }
          set keysUp(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysUp = kk)
          }
          get keysUpward() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUpward : []
          }
          set keysUpward(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysUpward = kk)
          }
          get keysDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDown : []
          }
          set keysDown(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysDown = kk)
          }
          get keysDownward() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDownward : []
          }
          set keysDownward(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysDownward = kk)
          }
          get keysLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysLeft : []
          }
          set keysLeft(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysLeft = kk)
          }
          get keysRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRight : []
          }
          set keysRight(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRight = kk)
          }
          get keysRotateLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateLeft : []
          }
          set keysRotateLeft(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRotateLeft = kk)
          }
          get keysRotateRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateRight : []
          }
          set keysRotateRight(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRotateRight = kk)
          }
          get keysRotateUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateUp : []
          }
          set keysRotateUp(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRotateUp = kk)
          }
          get keysRotateDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRotateDown : []
          }
          set keysRotateDown(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRotateDown = kk)
          }
          constructor(kk, ek, ik) {
            var fk;
            super(kk, ek, ik, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), fk = this, this.ellipsoid = (0, Dk.e)(this, Kk, new Sk.o(.5, 1, .5)), this.ellipsoidOffset = ((0, Dk.e)(this, xk), (0, Dk.e)(this, nk, new Sk.o(0, 0, 0))), this.checkCollisions = ((0, Dk.e)(this, Uk), (0, Dk.e)(this, Hk, !1)), this.applyGravity = ((0, Dk.e)(this, wk), (0, Dk.e)(this, lk, !1)), this.inputs = (0, Dk.e)(this, pk), this._needMoveForGravity = !1, this._oldPosition = Sk.o.Zero(), this._diffPosition = Sk.o.Zero(), this._newPosition = Sk.o.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(kk, ek) {
              let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              fk._newPosition.Fs(ek), fk._newPosition.subtractToRef(fk._oldPosition, fk._diffPosition), fk._diffPosition.length() > jk.c.CollisionsEpsilon && (fk.position.addToRef(fk._diffPosition, fk._deferredPositionUpdate), fk._deferOnly ? fk._deferredUpdated = !0 : fk.position.Fs(fk._deferredPositionUpdate), fk.Vx && ik && fk.Vx(ik))
            }, this.inputs = new Ak(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(kk, ek) {
            ek = mk.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ek)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Sk.o(0, 0, 0), this.cameraRotation = new Sk.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(kk) {
            this._collisionMask = isNaN(kk) ? -1 : kk
          }
          _collideWithWorld(kk) {
            let ek;
            ek = this.parent ? Sk.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ek.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ik = this.XF().collisionCoordinator;
            this._collider || (this._collider = ik.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Dk = kk;
            this.applyGravity && (Dk = kk.add(this.XF().gravity)), ik.getNewPosition(this._oldPosition, Dk, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Sk.o.Zero(), this._transformedDirection = Sk.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.XF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.F)()], ik = [(0, fk.F)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: kk => "ellipsoid" in kk,
              get: kk => kk.ellipsoid,
              set: (kk, ek) => {
                kk.ellipsoid = ek
              }
            },
            metadata: Sk
          }, Kk, xk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "ellipsoidOffset" in kk,
              get: kk => kk.ellipsoidOffset,
              set: (kk, ek) => {
                kk.ellipsoidOffset = ek
              }
            },
            metadata: Sk
          }, nk, Uk), (0, Dk.d)(null, null, rk, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: kk => "checkCollisions" in kk,
              get: kk => kk.checkCollisions,
              set: (kk, ek) => {
                kk.checkCollisions = ek
              }
            },
            metadata: Sk
          }, Hk, wk), (0, Dk.d)(null, null, Pk, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyGravity" in kk,
              get: kk => kk.applyGravity,
              set: (kk, ek) => {
                kk.applyGravity = ek
              }
            },
            metadata: Sk
          }, lk, pk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Vk = !1;
    Vk || (Vk = !0, (0, sk.h)("BABYLON.FreeCamera", dk))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
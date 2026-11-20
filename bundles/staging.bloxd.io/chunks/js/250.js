export const id = 250;
export const ids = [250];
export const modules = {
  39506: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Ov
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(39511),
      pv = Pv(39535),
      dv = Pv(39484),
      Nv = Pv(39399);
    let lv = (() => {
      var vv;
      let zv, Pv, gv, pv, lv, Tv, Wv, wv, av, sv, Cv, iv = [],
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
        nv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [],
        Uv = [],
        Rv = [],
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [];
      return vv = class {
        constructor() {
          this.keysUp = (0, hv.f)(this, iv, [38]), this.keysUpward = ((0, hv.f)(this, cv), (0, hv.f)(this, Gv, [33])), this.keysDown = ((0, hv.f)(this, mv), (0, hv.f)(this, jv, [40])), this.keysDownward = ((0, hv.f)(this, fv), (0, hv.f)(this, Fv, [34])), this.keysLeft = ((0, hv.f)(this, Yv), (0, hv.f)(this, nv, [37])), this.keysRight = ((0, hv.f)(this, Ov), (0, hv.f)(this, Dv, [39])), this.rotationSpeed = ((0, hv.f)(this, Kv), (0, hv.f)(this, Vv, .5)), this.keysRotateLeft = ((0, hv.f)(this, Uv), (0, hv.f)(this, Rv, [])), this.keysRotateRight = ((0, hv.f)(this, xv), (0, hv.f)(this, tv, [])), this.keysRotateUp = ((0, hv.f)(this, qv), (0, hv.f)(this, Iv, [])), this.keysRotateDown = ((0, hv.f)(this, Qv), (0, hv.f)(this, Zv, [])), this._keys = ((0, hv.f)(this, Av), new Array)
        }
        attachControl(vv) {
          vv = Nv.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.rD(), this._engine = this._scene.ma(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zv => {
            const Pv = zv.event;
            if (!Pv.metaKey)
              if (zv.type === dv.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Pv.keyCode) || -1 !== this.keysDown.indexOf(Pv.keyCode) || -1 !== this.keysLeft.indexOf(Pv.keyCode) || -1 !== this.keysRight.indexOf(Pv.keyCode) || -1 !== this.keysUpward.indexOf(Pv.keyCode) || -1 !== this.keysDownward.indexOf(Pv.keyCode) || -1 !== this.keysRotateLeft.indexOf(Pv.keyCode) || -1 !== this.keysRotateRight.indexOf(Pv.keyCode) || -1 !== this.keysRotateUp.indexOf(Pv.keyCode) || -1 !== this.keysRotateDown.indexOf(Pv.keyCode)) {
                  -1 === this._keys.indexOf(Pv.keyCode) && this._keys.push(Pv.keyCode), vv || Pv.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Pv.keyCode) || -1 !== this.keysDown.indexOf(Pv.keyCode) || -1 !== this.keysLeft.indexOf(Pv.keyCode) || -1 !== this.keysRight.indexOf(Pv.keyCode) || -1 !== this.keysUpward.indexOf(Pv.keyCode) || -1 !== this.keysDownward.indexOf(Pv.keyCode) || -1 !== this.keysRotateLeft.indexOf(Pv.keyCode) || -1 !== this.keysRotateRight.indexOf(Pv.keyCode) || -1 !== this.keysRotateUp.indexOf(Pv.keyCode) || -1 !== this.keysRotateDown.indexOf(Pv.keyCode)) {
              const zv = this._keys.indexOf(Pv.keyCode);
              zv >= 0 && this._keys.splice(zv, 1), vv || Pv.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const vv = this.camera,
              zv = vv.movement.input,
              Pv = zv.getEntry("keyboard", "translate"),
              hv = zv.getEntry("keyboard", "rotate"),
              Sv = hv?.sensitivity ?? 1,
              gv = vv._localDirection.f_(0, 0, 0);
            for (let ev = 0; ev < this._keys.length; ev++) {
              const zv = this._keys[ev]; - 1 !== this.keysLeft.indexOf(zv) ? gv.x -= 1 : -1 !== this.keysUp.indexOf(zv) ? gv.z += 1 : -1 !== this.keysRight.indexOf(zv) ? gv.x += 1 : -1 !== this.keysDown.indexOf(zv) ? gv.z -= 1 : -1 !== this.keysUpward.indexOf(zv) ? gv.y += 1 : -1 !== this.keysDownward.indexOf(zv) ? gv.y -= 1 : -1 !== this.keysRotateLeft.indexOf(zv) ? hv && (vv.cameraRotation.y -= this._getLocalRotation() * Sv) : -1 !== this.keysRotateRight.indexOf(zv) ? hv && (vv.cameraRotation.y += this._getLocalRotation() * Sv) : -1 !== this.keysRotateUp.indexOf(zv) ? hv && (vv.cameraRotation.x -= this._getLocalRotation() * Sv) : -1 !== this.keysRotateDown.indexOf(zv) && hv && (vv.cameraRotation.x += this._getLocalRotation() * Sv)
            }
            if (Pv && (0 !== gv.x || 0 !== gv.y || 0 !== gv.z)) {
              const zv = vv._computeLocalCameraSpeed() * (Pv.sensitivity ?? 1);
              gv.normalize().scaleInPlace(zv), vv.rD().useRightHandedSystem && (gv.z *= -1), vv.getViewMatrix().invertToRef(vv._cameraTransformMatrix), ev.l.TransformNormalToRef(gv, vv._cameraTransformMatrix, vv._transformedDirection), vv.cameraDirection.addInPlace(vv._transformedDirection)
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
          const vv = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * vv
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], gv = [(0, Sv.L)()], pv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], wv = [(0, Sv.L)()], av = [(0, Sv.L)()], sv = [(0, Sv.L)()], Cv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysUp" in vv,
            get: vv => vv.keysUp,
            set: (vv, zv) => {
              vv.keysUp = zv
            }
          },
          metadata: ev
        }, iv, cv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysUpward" in vv,
            get: vv => vv.keysUpward,
            set: (vv, zv) => {
              vv.keysUpward = zv
            }
          },
          metadata: ev
        }, Gv, mv), (0, hv.e)(null, null, gv, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysDown" in vv,
            get: vv => vv.keysDown,
            set: (vv, zv) => {
              vv.keysDown = zv
            }
          },
          metadata: ev
        }, jv, fv), (0, hv.e)(null, null, pv, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysDownward" in vv,
            get: vv => vv.keysDownward,
            set: (vv, zv) => {
              vv.keysDownward = zv
            }
          },
          metadata: ev
        }, Fv, Yv), (0, hv.e)(null, null, lv, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysLeft" in vv,
            get: vv => vv.keysLeft,
            set: (vv, zv) => {
              vv.keysLeft = zv
            }
          },
          metadata: ev
        }, nv, Ov), (0, hv.e)(null, null, Tv, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRight" in vv,
            get: vv => vv.keysRight,
            set: (vv, zv) => {
              vv.keysRight = zv
            }
          },
          metadata: ev
        }, Dv, Kv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: vv => "rotationSpeed" in vv,
            get: vv => vv.rotationSpeed,
            set: (vv, zv) => {
              vv.rotationSpeed = zv
            }
          },
          metadata: ev
        }, Vv, Uv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRotateLeft" in vv,
            get: vv => vv.keysRotateLeft,
            set: (vv, zv) => {
              vv.keysRotateLeft = zv
            }
          },
          metadata: ev
        }, Rv, xv), (0, hv.e)(null, null, av, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRotateRight" in vv,
            get: vv => vv.keysRotateRight,
            set: (vv, zv) => {
              vv.keysRotateRight = zv
            }
          },
          metadata: ev
        }, tv, qv), (0, hv.e)(null, null, sv, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRotateUp" in vv,
            get: vv => vv.keysRotateUp,
            set: (vv, zv) => {
              vv.keysRotateUp = zv
            }
          },
          metadata: ev
        }, Iv, Qv), (0, hv.e)(null, null, Cv, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRotateDown" in vv,
            get: vv => vv.keysRotateDown,
            set: (vv, zv) => {
              vv.keysRotateDown = zv
            }
          },
          metadata: ev
        }, Zv, Av), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv
    })();
    pv.b.FreeCameraKeyboardMoveInput = lv;
    var Tv = Pv(36618),
      Wv = Pv(39479);
    let wv = (() => {
      var vv;
      let zv, Pv, ev = [],
        gv = [],
        pv = [],
        dv = [];
      return vv = class {
        _applyPointerRotation(vv, zv) {
          this._pointerConditions.button = this._currentActiveButton;
          const Pv = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Pv || "rotate" !== Pv.interaction) return;
          const hv = Pv.bZ ?? Pv.sensitivity ?? 1 / this.angularSensibility,
            Sv = Pv.uZ ?? Pv.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += vv * hv, this.camera.cameraRotation.x += zv * Sv
        }
        constructor() {
          let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = vv, this.buttons = (0, hv.f)(this, ev, [0, 1, 2]), this.angularSensibility = ((0, hv.f)(this, gv), (0, hv.f)(this, pv, 2e3)), this._pointerInput = (0, hv.f)(this, dv), this._previousPosition = null, this.onPointerMovedObservable = new Tv.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(vv) {
          vv = Nv.h.BackCompatCameraNoPreventDefault(arguments);
          const zv = this.camera.ma(),
            Pv = zv.getInputElement();
          this._pointerInput || (this._pointerInput = hv => {
            const Sv = hv.event,
              ev = "touch" === Sv.pointerType;
            if (!this.touchEnabled && ev) return;
            if (hv.type !== Wv.b.POINTERMOVE && -1 === this.buttons.indexOf(Sv.button)) return;
            const gv = Sv.target;
            if (hv.type === Wv.b.POINTERDOWN) {
              if (ev && -1 !== this._activePointerId || !ev && -1 !== this._currentActiveButton) return;
              this._activePointerId = Sv.pointerId;
              try {
                gv?.setPointerCapture(Sv.pointerId)
              } catch (pv) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Sv.button), this._previousPosition = {
                x: Sv.clientX,
                y: Sv.clientY
              }, vv || (Sv.preventDefault(), Pv && Pv.focus()), zv.isPointerLock && this._onMouseMove && this._onMouseMove(hv.event)
            } else if (hv.type === Wv.b.POINTERUP) {
              if (ev && this._activePointerId !== Sv.pointerId || !ev && this._currentActiveButton !== Sv.button) return;
              try {
                gv?.releasePointerCapture(Sv.pointerId)
              } catch (pv) {}
              this._currentActiveButton = -1, this._previousPosition = null, vv || Sv.preventDefault(), this._activePointerId = -1
            } else if (hv.type === Wv.b.POINTERMOVE && (this._activePointerId === Sv.pointerId || !ev))
              if (zv.isPointerLock && this._onMouseMove) this._onMouseMove(hv.event);
              else if (this._previousPosition) {
              const zv = this.camera._calculateHandednessMultiplier(),
                Pv = (Sv.clientX - this._previousPosition.x) * zv,
                hv = (Sv.clientY - this._previousPosition.y) * zv;
              this._allowCameraRotation && this._applyPointerRotation(Pv, hv), this.onPointerMovedObservable.notifyObservers({
                offsetX: Pv,
                offsetY: hv
              }), this._previousPosition = {
                x: Sv.clientX,
                y: Sv.clientY
              }, vv || Sv.preventDefault()
            }
          }), this._onMouseMove = Pv => {
            if (!zv.isPointerLock) return;
            const hv = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Pv.movementX * hv, Pv.movementY * hv), this._previousPosition = null, vv || Pv.preventDefault()
          }, this._observer = this.camera.rD()._inputManager._addCameraPointerObserver(this._pointerInput, Wv.b.POINTERDOWN | Wv.b.POINTERUP | Wv.b.POINTERMOVE), Pv && (this._contextMenuBind = vv => this.onContextMenu(vv), Pv.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(vv) {
          vv.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.rD()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const vv = this.camera.ma().getInputElement();
              vv && vv.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Nv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: vv => "buttons" in vv,
            get: vv => vv.buttons,
            set: (vv, zv) => {
              vv.buttons = zv
            }
          },
          metadata: Nv
        }, ev, gv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: vv => "angularSensibility" in vv,
            get: vv => vv.angularSensibility,
            set: (vv, zv) => {
              vv.angularSensibility = zv
            }
          },
          metadata: Nv
        }, pv, dv), Nv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nv
        })
      })(), vv
    })();
    pv.b.FreeCameraMouseInput = wv;
    var av = Pv(39487);
    let sv = (() => {
      var vv;
      let zv, Pv, ev, gv = [],
        pv = [],
        dv = [],
        lv = [],
        wv = [],
        sv = [];
      return vv = class {
        constructor() {
          this.wheelPrecisionX = (0, hv.f)(this, gv, 3), this.wheelPrecisionY = ((0, hv.f)(this, pv), (0, hv.f)(this, dv, 3)), this.wheelPrecisionZ = ((0, hv.f)(this, lv), (0, hv.f)(this, wv, 3)), this.onChangedObservable = ((0, hv.f)(this, sv), new Tv.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(vv) {
          vv = Nv.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = zv => {
            if (zv.type !== Wv.b.POINTERWHEEL) return;
            const Pv = zv.event,
              hv = Pv.deltaMode === av.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * hv * Pv.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * hv * Pv.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * hv * Pv.deltaZ / this._normalize, Pv.preventDefault && (vv || Pv.preventDefault())
          }, this._observer = this.camera.rD()._inputManager._addCameraPointerObserver(this._wheel, Wv.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.rD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Nv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelPrecisionX" in vv,
            get: vv => vv.wheelPrecisionX,
            set: (vv, zv) => {
              vv.wheelPrecisionX = zv
            }
          },
          metadata: Nv
        }, gv, pv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelPrecisionY" in vv,
            get: vv => vv.wheelPrecisionY,
            set: (vv, zv) => {
              vv.wheelPrecisionY = zv
            }
          },
          metadata: Nv
        }, dv, lv), (0, hv.e)(null, null, ev, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelPrecisionZ" in vv,
            get: vv => vv.wheelPrecisionZ,
            set: (vv, zv) => {
              vv.wheelPrecisionZ = zv
            }
          },
          metadata: Nv
        }, wv, sv), Nv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nv
        })
      })(), vv
    })();
    var Cv;
    ! function(vv) {
      vv[vv.MoveRelative = 0] = "MoveRelative", vv[vv.RotateRelative = 1] = "RotateRelative", vv[vv.MoveScene = 2] = "MoveScene"
    }(Cv || (Cv = {}));
    let iv = (() => {
      var vv;
      let zv, Pv, gv, pv, dv, Nv, lv, Tv, Wv, wv = sv,
        av = [];
      return vv = class extends wv {
        constructor() {
          super(...arguments), this.camera = (0, hv.f)(this, av), this._moveRelative = ev.l.Zero(), this._rotateRelative = ev.l.Zero(), this._moveScene = ev.l.Zero(), this._wheelXAction = Cv.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Cv.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(vv) {
          null === vv && this._wheelXAction !== Cv.MoveRelative || (this._wheelXAction = Cv.MoveRelative, this._wheelXActionCoordinate = vv)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Cv.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(vv) {
          null === vv && this._wheelYAction !== Cv.MoveRelative || (this._wheelYAction = Cv.MoveRelative, this._wheelYActionCoordinate = vv)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Cv.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(vv) {
          null === vv && this._wheelZAction !== Cv.MoveRelative || (this._wheelZAction = Cv.MoveRelative, this._wheelZActionCoordinate = vv)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Cv.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(vv) {
          null === vv && this._wheelXAction !== Cv.RotateRelative || (this._wheelXAction = Cv.RotateRelative, this._wheelXActionCoordinate = vv)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Cv.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(vv) {
          null === vv && this._wheelYAction !== Cv.RotateRelative || (this._wheelYAction = Cv.RotateRelative, this._wheelYActionCoordinate = vv)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Cv.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(vv) {
          null === vv && this._wheelZAction !== Cv.RotateRelative || (this._wheelZAction = Cv.RotateRelative, this._wheelZActionCoordinate = vv)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Cv.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(vv) {
          null === vv && this._wheelXAction !== Cv.MoveScene || (this._wheelXAction = Cv.MoveScene, this._wheelXActionCoordinate = vv)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Cv.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(vv) {
          null === vv && this._wheelYAction !== Cv.MoveScene || (this._wheelYAction = Cv.MoveScene, this._wheelYActionCoordinate = vv)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Cv.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(vv) {
          null === vv && this._wheelZAction !== Cv.MoveScene || (this._wheelZAction = Cv.MoveScene, this._wheelZActionCoordinate = vv)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Cv.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Dk(0), this._rotateRelative.Dk(0), this._moveScene.Dk(0), this._updateCamera(), this.camera.rD().useRightHandedSystem && (this._moveRelative.z *= -1);
          const vv = ev.c.Zero();
          this.camera.getViewMatrix().invertToRef(vv);
          const zv = ev.l.Zero();
          ev.l.TransformNormalToRef(this._moveRelative, vv, zv), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(zv), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(vv, zv, Pv) {
          if (0 === vv) return;
          if (null === zv || null === Pv) return;
          let hv = null;
          switch (zv) {
            case Cv.MoveRelative:
              hv = this._moveRelative;
              break;
            case Cv.RotateRelative:
              hv = this._rotateRelative;
              break;
            case Cv.MoveScene:
              hv = this._moveScene
          }
          switch (Pv) {
            case 0:
              hv.set(vv, 0, 0);
              break;
            case 1:
              hv.set(0, vv, 0);
              break;
            case 2:
              hv.set(0, 0, vv)
          }
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(wv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], gv = [(0, Sv.L)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], (0, hv.e)(vv, null, zv, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelXMoveRelative" in vv,
            set: (vv, zv) => {
              vv.wheelXMoveRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, Pv, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelYMoveRelative" in vv,
            set: (vv, zv) => {
              vv.wheelYMoveRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, gv, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelZMoveRelative" in vv,
            set: (vv, zv) => {
              vv.wheelZMoveRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, pv, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelXRotateRelative" in vv,
            set: (vv, zv) => {
              vv.wheelXRotateRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, dv, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelYRotateRelative" in vv,
            set: (vv, zv) => {
              vv.wheelYRotateRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, Nv, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelZRotateRelative" in vv,
            set: (vv, zv) => {
              vv.wheelZRotateRelative = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, lv, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelXMoveScene" in vv,
            set: (vv, zv) => {
              vv.wheelXMoveScene = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, Tv, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelYMoveScene" in vv,
            set: (vv, zv) => {
              vv.wheelYMoveScene = zv
            }
          },
          metadata: ev
        }, null, av), (0, hv.e)(vv, null, Wv, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelZMoveScene" in vv,
            set: (vv, zv) => {
              vv.wheelZMoveScene = zv
            }
          },
          metadata: ev
        }, null, av), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv
    })();
    pv.b.FreeCameraMouseWheelInput = iv;
    let cv = (() => {
      var vv;
      let zv, Pv, gv = [],
        pv = [],
        dv = [],
        lv = [];
      return vv = class {
        constructor() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = vv, this.touchAngularSensibility = (0, hv.f)(this, gv, 2e5), this.touchMoveSensibility = ((0, hv.f)(this, pv), (0, hv.f)(this, dv, 250)), this.singleFingerRotate = ((0, hv.f)(this, lv), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Nv.h.IsSafari()
        }
        attachControl(vv) {
          vv = Nv.h.BackCompatCameraNoPreventDefault(arguments);
          let zv = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Pv => {
              const hv = Pv.event,
                Sv = "mouse" === hv.pointerType || this._isSafari && "undefined" === typeof hv.pointerType;
              if (this.allowMouse || !Sv)
                if (Pv.type === Wv.b.POINTERDOWN) {
                  if (vv || hv.preventDefault(), this._pointerPressed.push(hv.pointerId), 1 !== this._pointerPressed.length) return;
                  zv = {
                    x: hv.clientX,
                    y: hv.clientY
                  }
                } else if (Pv.type === Wv.b.POINTERUP) {
                vv || hv.preventDefault();
                const Pv = this._pointerPressed.indexOf(hv.pointerId);
                if (-1 === Pv) return;
                if (this._pointerPressed.splice(Pv, 1), 0 != Pv) return;
                zv = null, this._offsetX = null, this._offsetY = null
              } else if (Pv.type === Wv.b.POINTERMOVE) {
                if (vv || hv.preventDefault(), !zv) return;
                if (0 != this._pointerPressed.indexOf(hv.pointerId)) return;
                this._offsetX = hv.clientX - zv.x, this._offsetY = -(hv.clientY - zv.y)
              }
            }), this._observer = this.camera.rD()._inputManager._addCameraPointerObserver(this._pointerInput, Wv.b.POINTERDOWN | Wv.b.POINTERUP | Wv.b.POINTERMOVE), this._onLostFocus) {
            const vv = this.camera.ma().getInputElement();
            vv && vv.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.rD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const vv = this.camera.ma().getInputElement();
              vv && vv.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const vv = this.camera,
            zv = vv.movement.input,
            Pv = zv.getEntry("touch", "rotate"),
            hv = zv.getEntry("touch", "translate"),
            Sv = vv._calculateHandednessMultiplier(),
            gv = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Pv) {
            const zv = Pv.sensitivity ?? 1 / this.touchAngularSensibility;
            vv.cameraRotation.y = this._offsetX * Sv * zv, gv && (vv.cameraRotation.x = -this._offsetY * Sv * zv)
          }
          if (!gv && hv) {
            const zv = vv._computeLocalCameraSpeed(),
              Pv = hv.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Sv = ev.i.fa[0];
            Sv.f_(0, 0, zv * this._offsetY * Pv), ev.c.RotationYawPitchRollToRef(vv.rotation.y, vv.rotation.x, 0, vv._cameraRotationMatrix), ev.l.TransformCoordinatesToRef(Sv, vv._cameraRotationMatrix, Sv), vv.cameraDirection.addInPlace(Sv)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: vv => "touchAngularSensibility" in vv,
            get: vv => vv.touchAngularSensibility,
            set: (vv, zv) => {
              vv.touchAngularSensibility = zv
            }
          },
          metadata: ev
        }, gv, pv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: vv => "touchMoveSensibility" in vv,
            get: vv => vv.touchMoveSensibility,
            set: (vv, zv) => {
              vv.touchMoveSensibility = zv
            }
          },
          metadata: ev
        }, dv, lv), ev && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ev
        })
      })(), vv
    })();
    pv.b.FreeCameraTouchInput = cv;
    var Gv, mv, jv, fv = Pv(39190);
    class Fv extends pv.e {
      constructor(vv) {
        super(vv), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new lv), this
      }
      addMouse() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new wv(vv), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new iv, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new cv), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Gv = Fv.prototype).addDeviceOrientation ?? (Gv.addDeviceOrientation = (0, fv.j)("FreeCameraInputsManager", "addDeviceOrientation")), (mv = Fv.prototype).addVirtualJoystick ?? (mv.addVirtualJoystick = (0, fv.j)("FreeCameraInputsManager", "addVirtualJoystick")), (jv = Fv.prototype).addGamepad ?? (jv.addGamepad = (0, fv.j)("FreeCameraInputsManager", "addGamepad"));
    var Yv = Pv(39212),
      nv = Pv(36631);
    let Ov = (() => {
        var vv;
        let zv, Pv, pv, dv, lv = gv.e,
          Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [],
          iv = [],
          cv = [];
        return vv = class extends lv {
          get angularSensibility() {
            const vv = this.inputs.attached.mouse;
            return vv ? vv.angularSensibility : 0
          }
          set angularSensibility(vv) {
            const zv = this.inputs.attached.mouse;
            zv && (zv.angularSensibility = vv)
          }
          get keysUp() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysUp : []
          }
          set keysUp(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysUp = vv)
          }
          get keysUpward() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysUpward : []
          }
          set keysUpward(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysUpward = vv)
          }
          get keysDown() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysDown : []
          }
          set keysDown(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysDown = vv)
          }
          get keysDownward() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysDownward : []
          }
          set keysDownward(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysDownward = vv)
          }
          get keysLeft() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysLeft : []
          }
          set keysLeft(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysLeft = vv)
          }
          get keysRight() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRight : []
          }
          set keysRight(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRight = vv)
          }
          get keysRotateLeft() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRotateLeft : []
          }
          set keysRotateLeft(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRotateLeft = vv)
          }
          get keysRotateRight() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRotateRight : []
          }
          set keysRotateRight(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRotateRight = vv)
          }
          get keysRotateUp() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRotateUp : []
          }
          set keysRotateUp(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRotateUp = vv)
          }
          get keysRotateDown() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRotateDown : []
          }
          set keysRotateDown(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRotateDown = vv)
          }
          constructor(vv, zv, Pv) {
            var Sv;
            super(vv, zv, Pv, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Sv = this, this.ellipsoid = (0, hv.f)(this, Tv, new ev.l(.5, 1, .5)), this.ellipsoidOffset = ((0, hv.f)(this, Wv), (0, hv.f)(this, wv, new ev.l(0, 0, 0))), this.checkCollisions = ((0, hv.f)(this, av), (0, hv.f)(this, sv, !1)), this.applyGravity = ((0, hv.f)(this, Cv), (0, hv.f)(this, iv, !1)), this.inputs = (0, hv.f)(this, cv), this._needMoveForGravity = !1, this._oldPosition = ev.l.Zero(), this._diffPosition = ev.l.Zero(), this._newPosition = ev.l.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(vv, zv) {
              let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Sv._newPosition.Vzv(zv), Sv._newPosition.subtractToRef(Sv._oldPosition, Sv._diffPosition), Sv._diffPosition.length() > Yv.b.CollisionsEpsilon && (Sv.position.addToRef(Sv._diffPosition, Sv._deferredPositionUpdate), Sv._deferOnly ? Sv._deferredUpdated = !0 : Sv.position.Vzv(Sv._deferredPositionUpdate), Sv.eW && Pv && Sv.eW(Pv))
            }, this.inputs = new Fv(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(vv, zv) {
            zv = Nv.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(zv)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new ev.l(0, 0, 0), this.cameraRotation = new ev.j(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(vv) {
            this._collisionMask = isNaN(vv) ? -1 : vv
          }
          _collideWithWorld(vv) {
            let zv;
            zv = this.parent ? ev.l.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, zv.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Pv = this.rD().collisionCoordinator;
            this._collider || (this._collider = Pv.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let hv = vv;
            this.applyGravity && (hv = vv.add(this.rD().gravity)), Pv.getNewPosition(this._oldPosition, hv, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = ev.l.Zero(), this._transformedDirection = ev.l.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(vv) {
            this._needMoveForGravity = vv
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.rD().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(lv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.I)()], Pv = [(0, Sv.I)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: vv => "ellipsoid" in vv,
              get: vv => vv.ellipsoid,
              set: (vv, zv) => {
                vv.ellipsoid = zv
              }
            },
            metadata: ev
          }, Tv, Wv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "ellipsoidOffset" in vv,
              get: vv => vv.ellipsoidOffset,
              set: (vv, zv) => {
                vv.ellipsoidOffset = zv
              }
            },
            metadata: ev
          }, wv, av), (0, hv.e)(null, null, pv, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: vv => "checkCollisions" in vv,
              get: vv => vv.checkCollisions,
              set: (vv, zv) => {
                vv.checkCollisions = zv
              }
            },
            metadata: ev
          }, sv, Cv), (0, hv.e)(null, null, dv, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: vv => "applyGravity" in vv,
              get: vv => vv.applyGravity,
              set: (vv, zv) => {
                vv.applyGravity = zv
              }
            },
            metadata: ev
          }, iv, cv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Dv = !1;
    Dv || (Dv = !0, (0, nv.c)("BABYLON.FreeCamera", Ov))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
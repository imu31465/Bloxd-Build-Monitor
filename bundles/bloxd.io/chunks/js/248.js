export const id = 248;
export const ids = [248];
export const modules = {
  39353: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Cz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(39362),
      oz = sz(39402),
      vz = sz(39331),
      Uz = sz(39264);
    let Kz = (() => {
      var zz;
      let tz, sz, Oz, oz, Kz, uz, Nz, bz, wz, Dz, gz, Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        Iz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [];
      return zz = class {
        constructor() {
          this.keysUp = (0, Fz.k)(this, Hz, [38]), this.keysUpward = ((0, Fz.k)(this, Bz), (0, Fz.k)(this, Pz, [33])), this.keysDown = ((0, Fz.k)(this, rz), (0, Fz.k)(this, Yz, [40])), this.keysDownward = ((0, Fz.k)(this, xz), (0, Fz.k)(this, mz, [34])), this.keysLeft = ((0, Fz.k)(this, Jz), (0, Fz.k)(this, Iz, [37])), this.keysRight = ((0, Fz.k)(this, Cz), (0, Fz.k)(this, ez, [39])), this.rotationSpeed = ((0, Fz.k)(this, Zz), (0, Fz.k)(this, Gz, .5)), this.keysRotateLeft = ((0, Fz.k)(this, Tz), (0, Fz.k)(this, cz, [])), this.keysRotateRight = ((0, Fz.k)(this, jz), (0, Fz.k)(this, Az, [])), this.keysRotateUp = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, [])), this.keysRotateDown = ((0, Fz.k)(this, dz), (0, Fz.k)(this, hz, [])), this._keys = ((0, Fz.k)(this, Qz), new Array)
        }
        attachControl(zz) {
          zz = Uz.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aJ(), this._engine = this._scene.FD(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((tz => {
            const sz = tz.event;
            if (!sz.metaKey)
              if (tz.type === vz.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysUpward.indexOf(sz.keyCode) || -1 !== this.keysDownward.indexOf(sz.keyCode) || -1 !== this.keysRotateLeft.indexOf(sz.keyCode) || -1 !== this.keysRotateRight.indexOf(sz.keyCode) || -1 !== this.keysRotateUp.indexOf(sz.keyCode) || -1 !== this.keysRotateDown.indexOf(sz.keyCode)) {
                  -1 === this._keys.indexOf(sz.keyCode) && this._keys.push(sz.keyCode), zz || sz.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysUpward.indexOf(sz.keyCode) || -1 !== this.keysDownward.indexOf(sz.keyCode) || -1 !== this.keysRotateLeft.indexOf(sz.keyCode) || -1 !== this.keysRotateRight.indexOf(sz.keyCode) || -1 !== this.keysRotateUp.indexOf(sz.keyCode) || -1 !== this.keysRotateDown.indexOf(sz.keyCode)) {
              const tz = this._keys.indexOf(sz.keyCode);
              tz >= 0 && this._keys.splice(tz, 1), zz || sz.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const zz = this.camera,
              tz = zz.movement.input,
              sz = tz.getEntry("keyboard", "translate"),
              Fz = tz.getEntry("keyboard", "rotate"),
              Wz = Fz?.sensitivity ?? 1,
              Oz = zz._localDirection.m_(0, 0, 0);
            for (let Xz = 0; Xz < this._keys.length; Xz++) {
              const tz = this._keys[Xz]; - 1 !== this.keysLeft.indexOf(tz) ? Oz.x -= 1 : -1 !== this.keysUp.indexOf(tz) ? Oz.z += 1 : -1 !== this.keysRight.indexOf(tz) ? Oz.x += 1 : -1 !== this.keysDown.indexOf(tz) ? Oz.z -= 1 : -1 !== this.keysUpward.indexOf(tz) ? Oz.y += 1 : -1 !== this.keysDownward.indexOf(tz) ? Oz.y -= 1 : -1 !== this.keysRotateLeft.indexOf(tz) ? Fz && (zz.cameraRotation.y -= this._getLocalRotation() * Wz) : -1 !== this.keysRotateRight.indexOf(tz) ? Fz && (zz.cameraRotation.y += this._getLocalRotation() * Wz) : -1 !== this.keysRotateUp.indexOf(tz) ? Fz && (zz.cameraRotation.x -= this._getLocalRotation() * Wz) : -1 !== this.keysRotateDown.indexOf(tz) && Fz && (zz.cameraRotation.x += this._getLocalRotation() * Wz)
            }
            if (sz && (0 !== Oz.x || 0 !== Oz.y || 0 !== Oz.z)) {
              const tz = zz._computeLocalCameraSpeed() * (sz.sensitivity ?? 1);
              Oz.normalize().scaleInPlace(tz), zz.aJ().useRightHandedSystem && (Oz.z *= -1), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), Xz.p.TransformNormalToRef(Oz, zz._cameraTransformMatrix, zz._transformedDirection), zz.cameraDirection.addInPlace(zz._transformedDirection)
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
          const zz = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * zz
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], oz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], Dz = [(0, Wz.J)()], gz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUp" in zz,
            get: zz => zz.keysUp,
            set: (zz, tz) => {
              zz.keysUp = tz
            }
          },
          metadata: Xz
        }, Hz, Bz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUpward" in zz,
            get: zz => zz.keysUpward,
            set: (zz, tz) => {
              zz.keysUpward = tz
            }
          },
          metadata: Xz
        }, Pz, rz), (0, Fz.h)(null, null, Oz, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDown" in zz,
            get: zz => zz.keysDown,
            set: (zz, tz) => {
              zz.keysDown = tz
            }
          },
          metadata: Xz
        }, Yz, xz), (0, Fz.h)(null, null, oz, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDownward" in zz,
            get: zz => zz.keysDownward,
            set: (zz, tz) => {
              zz.keysDownward = tz
            }
          },
          metadata: Xz
        }, mz, Jz), (0, Fz.h)(null, null, Kz, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysLeft" in zz,
            get: zz => zz.keysLeft,
            set: (zz, tz) => {
              zz.keysLeft = tz
            }
          },
          metadata: Xz
        }, Iz, Cz), (0, Fz.h)(null, null, uz, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRight" in zz,
            get: zz => zz.keysRight,
            set: (zz, tz) => {
              zz.keysRight = tz
            }
          },
          metadata: Xz
        }, ez, Zz), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: zz => "rotationSpeed" in zz,
            get: zz => zz.rotationSpeed,
            set: (zz, tz) => {
              zz.rotationSpeed = tz
            }
          },
          metadata: Xz
        }, Gz, Tz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateLeft" in zz,
            get: zz => zz.keysRotateLeft,
            set: (zz, tz) => {
              zz.keysRotateLeft = tz
            }
          },
          metadata: Xz
        }, cz, jz), (0, Fz.h)(null, null, wz, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateRight" in zz,
            get: zz => zz.keysRotateRight,
            set: (zz, tz) => {
              zz.keysRotateRight = tz
            }
          },
          metadata: Xz
        }, Az, yz), (0, Fz.h)(null, null, Dz, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateUp" in zz,
            get: zz => zz.keysRotateUp,
            set: (zz, tz) => {
              zz.keysRotateUp = tz
            }
          },
          metadata: Xz
        }, Mz, dz), (0, Fz.h)(null, null, gz, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateDown" in zz,
            get: zz => zz.keysRotateDown,
            set: (zz, tz) => {
              zz.keysRotateDown = tz
            }
          },
          metadata: Xz
        }, hz, Qz), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz
    })();
    oz.e.FreeCameraKeyboardMoveInput = Kz;
    var uz = sz(36505),
      Nz = sz(39328);
    let bz = (() => {
      var zz;
      let tz, sz, Xz = [],
        Oz = [],
        oz = [],
        vz = [];
      return zz = class {
        _applyPointerRotation(zz, tz) {
          this._pointerConditions.button = this._currentActiveButton;
          const sz = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!sz || "rotate" !== sz.interaction) return;
          const Fz = sz.wL ?? sz.sensitivity ?? 1 / this.angularSensibility,
            Wz = sz.gL ?? sz.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += zz * Fz, this.camera.cameraRotation.x += tz * Wz
        }
        constructor() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = zz, this.buttons = (0, Fz.k)(this, Xz, [0, 1, 2]), this.angularSensibility = ((0, Fz.k)(this, Oz), (0, Fz.k)(this, oz, 2e3)), this._pointerInput = (0, Fz.k)(this, vz), this._previousPosition = null, this.onPointerMovedObservable = new uz.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(zz) {
          zz = Uz.j.BackCompatCameraNoPreventDefault(arguments);
          const tz = this.camera.FD(),
            sz = tz.getInputElement();
          this._pointerInput || (this._pointerInput = Fz => {
            const Wz = Fz.event,
              Xz = "touch" === Wz.pointerType;
            if (!this.touchEnabled && Xz) return;
            if (Fz.type !== Nz.c.POINTERMOVE && -1 === this.buttons.indexOf(Wz.button)) return;
            const Oz = Wz.target;
            if (Fz.type === Nz.c.POINTERDOWN) {
              if (Xz && -1 !== this._activePointerId || !Xz && -1 !== this._currentActiveButton) return;
              this._activePointerId = Wz.pointerId;
              try {
                Oz?.setPointerCapture(Wz.pointerId)
              } catch (oz) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Wz.button), this._previousPosition = {
                x: Wz.clientX,
                y: Wz.clientY
              }, zz || (Wz.preventDefault(), sz && sz.focus()), tz.isPointerLock && this._onMouseMove && this._onMouseMove(Fz.event)
            } else if (Fz.type === Nz.c.POINTERUP) {
              if (Xz && this._activePointerId !== Wz.pointerId || !Xz && this._currentActiveButton !== Wz.button) return;
              try {
                Oz?.releasePointerCapture(Wz.pointerId)
              } catch (oz) {}
              this._currentActiveButton = -1, this._previousPosition = null, zz || Wz.preventDefault(), this._activePointerId = -1
            } else if (Fz.type === Nz.c.POINTERMOVE && (this._activePointerId === Wz.pointerId || !Xz))
              if (tz.isPointerLock && this._onMouseMove) this._onMouseMove(Fz.event);
              else if (this._previousPosition) {
              const tz = this.camera._calculateHandednessMultiplier(),
                sz = (Wz.clientX - this._previousPosition.x) * tz,
                Fz = (Wz.clientY - this._previousPosition.y) * tz;
              this._allowCameraRotation && this._applyPointerRotation(sz, Fz), this.onPointerMovedObservable.notifyObservers({
                offsetX: sz,
                offsetY: Fz
              }), this._previousPosition = {
                x: Wz.clientX,
                y: Wz.clientY
              }, zz || Wz.preventDefault()
            }
          }), this._onMouseMove = sz => {
            if (!tz.isPointerLock) return;
            const Fz = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(sz.movementX * Fz, sz.movementY * Fz), this._previousPosition = null, zz || sz.preventDefault()
          }, this._observer = this.camera.aJ()._inputManager._addCameraPointerObserver(this._pointerInput, Nz.c.POINTERDOWN | Nz.c.POINTERUP | Nz.c.POINTERMOVE), sz && (this._contextMenuBind = zz => this.onContextMenu(zz), sz.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(zz) {
          zz.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.aJ()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const zz = this.camera.FD().getInputElement();
              zz && zz.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: zz => "buttons" in zz,
            get: zz => zz.buttons,
            set: (zz, tz) => {
              zz.buttons = tz
            }
          },
          metadata: Uz
        }, Xz, Oz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "angularSensibility" in zz,
            get: zz => zz.angularSensibility,
            set: (zz, tz) => {
              zz.angularSensibility = tz
            }
          },
          metadata: Uz
        }, oz, vz), Uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uz
        })
      })(), zz
    })();
    oz.e.FreeCameraMouseInput = bz;
    var wz = sz(39337);
    let Dz = (() => {
      var zz;
      let tz, sz, Xz, Oz = [],
        oz = [],
        vz = [],
        Kz = [],
        bz = [],
        Dz = [];
      return zz = class {
        constructor() {
          this.wheelPrecisionX = (0, Fz.k)(this, Oz, 3), this.wheelPrecisionY = ((0, Fz.k)(this, oz), (0, Fz.k)(this, vz, 3)), this.wheelPrecisionZ = ((0, Fz.k)(this, Kz), (0, Fz.k)(this, bz, 3)), this.onChangedObservable = ((0, Fz.k)(this, Dz), new uz.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(zz) {
          zz = Uz.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = tz => {
            if (tz.type !== Nz.c.POINTERWHEEL) return;
            const sz = tz.event,
              Fz = sz.deltaMode === wz.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Fz * sz.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Fz * sz.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Fz * sz.deltaZ / this._normalize, sz.preventDefault && (zz || sz.preventDefault())
          }, this._observer = this.camera.aJ()._inputManager._addCameraPointerObserver(this._wheel, Nz.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.aJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionX" in zz,
            get: zz => zz.wheelPrecisionX,
            set: (zz, tz) => {
              zz.wheelPrecisionX = tz
            }
          },
          metadata: Uz
        }, Oz, oz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionY" in zz,
            get: zz => zz.wheelPrecisionY,
            set: (zz, tz) => {
              zz.wheelPrecisionY = tz
            }
          },
          metadata: Uz
        }, vz, Kz), (0, Fz.h)(null, null, Xz, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionZ" in zz,
            get: zz => zz.wheelPrecisionZ,
            set: (zz, tz) => {
              zz.wheelPrecisionZ = tz
            }
          },
          metadata: Uz
        }, bz, Dz), Uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uz
        })
      })(), zz
    })();
    var gz;
    ! function(zz) {
      zz[zz.MoveRelative = 0] = "MoveRelative", zz[zz.RotateRelative = 1] = "RotateRelative", zz[zz.MoveScene = 2] = "MoveScene"
    }(gz || (gz = {}));
    let Hz = (() => {
      var zz;
      let tz, sz, Oz, oz, vz, Uz, Kz, uz, Nz, bz = Dz,
        wz = [];
      return zz = class extends bz {
        constructor() {
          super(...arguments), this.camera = (0, Fz.k)(this, wz), this._moveRelative = Xz.p.Zero(), this._rotateRelative = Xz.p.Zero(), this._moveScene = Xz.p.Zero(), this._wheelXAction = gz.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = gz.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(zz) {
          null === zz && this._wheelXAction !== gz.MoveRelative || (this._wheelXAction = gz.MoveRelative, this._wheelXActionCoordinate = zz)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== gz.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(zz) {
          null === zz && this._wheelYAction !== gz.MoveRelative || (this._wheelYAction = gz.MoveRelative, this._wheelYActionCoordinate = zz)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== gz.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(zz) {
          null === zz && this._wheelZAction !== gz.MoveRelative || (this._wheelZAction = gz.MoveRelative, this._wheelZActionCoordinate = zz)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== gz.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(zz) {
          null === zz && this._wheelXAction !== gz.RotateRelative || (this._wheelXAction = gz.RotateRelative, this._wheelXActionCoordinate = zz)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== gz.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(zz) {
          null === zz && this._wheelYAction !== gz.RotateRelative || (this._wheelYAction = gz.RotateRelative, this._wheelYActionCoordinate = zz)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== gz.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(zz) {
          null === zz && this._wheelZAction !== gz.RotateRelative || (this._wheelZAction = gz.RotateRelative, this._wheelZActionCoordinate = zz)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== gz.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(zz) {
          null === zz && this._wheelXAction !== gz.MoveScene || (this._wheelXAction = gz.MoveScene, this._wheelXActionCoordinate = zz)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== gz.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(zz) {
          null === zz && this._wheelYAction !== gz.MoveScene || (this._wheelYAction = gz.MoveScene, this._wheelYActionCoordinate = zz)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== gz.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(zz) {
          null === zz && this._wheelZAction !== gz.MoveScene || (this._wheelZAction = gz.MoveScene, this._wheelZActionCoordinate = zz)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== gz.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Z6(0), this._rotateRelative.Z6(0), this._moveScene.Z6(0), this._updateCamera(), this.camera.aJ().useRightHandedSystem && (this._moveRelative.z *= -1);
          const zz = Xz.e.Zero();
          this.camera.getViewMatrix().invertToRef(zz);
          const tz = Xz.p.Zero();
          Xz.p.TransformNormalToRef(this._moveRelative, zz, tz), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(tz), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(zz, tz, sz) {
          if (0 === zz) return;
          if (null === tz || null === sz) return;
          let Fz = null;
          switch (tz) {
            case gz.MoveRelative:
              Fz = this._moveRelative;
              break;
            case gz.RotateRelative:
              Fz = this._rotateRelative;
              break;
            case gz.MoveScene:
              Fz = this._moveScene
          }
          switch (sz) {
            case 0:
              Fz.set(zz, 0, 0);
              break;
            case 1:
              Fz.set(0, zz, 0);
              break;
            case 2:
              Fz.set(0, 0, zz)
          }
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(bz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], (0, Fz.h)(zz, null, tz, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXMoveRelative" in zz,
            set: (zz, tz) => {
              zz.wheelXMoveRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, sz, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYMoveRelative" in zz,
            set: (zz, tz) => {
              zz.wheelYMoveRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, Oz, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZMoveRelative" in zz,
            set: (zz, tz) => {
              zz.wheelZMoveRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, oz, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXRotateRelative" in zz,
            set: (zz, tz) => {
              zz.wheelXRotateRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, vz, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYRotateRelative" in zz,
            set: (zz, tz) => {
              zz.wheelYRotateRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, Uz, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZRotateRelative" in zz,
            set: (zz, tz) => {
              zz.wheelZRotateRelative = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, Kz, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXMoveScene" in zz,
            set: (zz, tz) => {
              zz.wheelXMoveScene = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, uz, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYMoveScene" in zz,
            set: (zz, tz) => {
              zz.wheelYMoveScene = tz
            }
          },
          metadata: Xz
        }, null, wz), (0, Fz.h)(zz, null, Nz, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZMoveScene" in zz,
            set: (zz, tz) => {
              zz.wheelZMoveScene = tz
            }
          },
          metadata: Xz
        }, null, wz), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz
    })();
    oz.e.FreeCameraMouseWheelInput = Hz;
    let Bz = (() => {
      var zz;
      let tz, sz, Oz = [],
        oz = [],
        vz = [],
        Kz = [];
      return zz = class {
        constructor() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = zz, this.touchAngularSensibility = (0, Fz.k)(this, Oz, 2e5), this.touchMoveSensibility = ((0, Fz.k)(this, oz), (0, Fz.k)(this, vz, 250)), this.singleFingerRotate = ((0, Fz.k)(this, Kz), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Uz.j.IsSafari()
        }
        attachControl(zz) {
          zz = Uz.j.BackCompatCameraNoPreventDefault(arguments);
          let tz = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = sz => {
              const Fz = sz.event,
                Wz = "mouse" === Fz.pointerType || this._isSafari && "undefined" === typeof Fz.pointerType;
              if (this.allowMouse || !Wz)
                if (sz.type === Nz.c.POINTERDOWN) {
                  if (zz || Fz.preventDefault(), this._pointerPressed.push(Fz.pointerId), 1 !== this._pointerPressed.length) return;
                  tz = {
                    x: Fz.clientX,
                    y: Fz.clientY
                  }
                } else if (sz.type === Nz.c.POINTERUP) {
                zz || Fz.preventDefault();
                const sz = this._pointerPressed.indexOf(Fz.pointerId);
                if (-1 === sz) return;
                if (this._pointerPressed.splice(sz, 1), 0 != sz) return;
                tz = null, this._offsetX = null, this._offsetY = null
              } else if (sz.type === Nz.c.POINTERMOVE) {
                if (zz || Fz.preventDefault(), !tz) return;
                if (0 != this._pointerPressed.indexOf(Fz.pointerId)) return;
                this._offsetX = Fz.clientX - tz.x, this._offsetY = -(Fz.clientY - tz.y)
              }
            }), this._observer = this.camera.aJ()._inputManager._addCameraPointerObserver(this._pointerInput, Nz.c.POINTERDOWN | Nz.c.POINTERUP | Nz.c.POINTERMOVE), this._onLostFocus) {
            const zz = this.camera.FD().getInputElement();
            zz && zz.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.aJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const zz = this.camera.FD().getInputElement();
              zz && zz.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const zz = this.camera,
            tz = zz.movement.input,
            sz = tz.getEntry("touch", "rotate"),
            Fz = tz.getEntry("touch", "translate"),
            Wz = zz._calculateHandednessMultiplier(),
            Oz = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (sz) {
            const tz = sz.sensitivity ?? 1 / this.touchAngularSensibility;
            zz.cameraRotation.y = this._offsetX * Wz * tz, Oz && (zz.cameraRotation.x = -this._offsetY * Wz * tz)
          }
          if (!Oz && Fz) {
            const tz = zz._computeLocalCameraSpeed(),
              sz = Fz.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Wz = Xz.m.XD[0];
            Wz.m_(0, 0, tz * this._offsetY * sz), Xz.e.RotationYawPitchRollToRef(zz.rotation.y, zz.rotation.x, 0, zz._cameraRotationMatrix), Xz.p.TransformCoordinatesToRef(Wz, zz._cameraRotationMatrix, Wz), zz.cameraDirection.addInPlace(Wz)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "touchAngularSensibility" in zz,
            get: zz => zz.touchAngularSensibility,
            set: (zz, tz) => {
              zz.touchAngularSensibility = tz
            }
          },
          metadata: Xz
        }, Oz, oz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "touchMoveSensibility" in zz,
            get: zz => zz.touchMoveSensibility,
            set: (zz, tz) => {
              zz.touchMoveSensibility = tz
            }
          },
          metadata: Xz
        }, vz, Kz), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz
    })();
    oz.e.FreeCameraTouchInput = Bz;
    var Pz, rz, Yz, xz = sz(39065);
    class mz extends oz.g {
      constructor(zz) {
        super(zz), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Kz), this
      }
      addMouse() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new bz(zz), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Hz, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Bz), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Pz = mz.prototype).addDeviceOrientation ?? (Pz.addDeviceOrientation = (0, xz.g)("FreeCameraInputsManager", "addDeviceOrientation")), (rz = mz.prototype).addVirtualJoystick ?? (rz.addVirtualJoystick = (0, xz.g)("FreeCameraInputsManager", "addVirtualJoystick")), (Yz = mz.prototype).addGamepad ?? (Yz.addGamepad = (0, xz.g)("FreeCameraInputsManager", "addGamepad"));
    var Jz = sz(39077),
      Iz = sz(36518);
    let Cz = (() => {
        var zz;
        let tz, sz, oz, vz, Kz = Oz.h,
          uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [];
        return zz = class extends Kz {
          get angularSensibility() {
            const zz = this.inputs.attached.mouse;
            return zz ? zz.angularSensibility : 0
          }
          set angularSensibility(zz) {
            const tz = this.inputs.attached.mouse;
            tz && (tz.angularSensibility = zz)
          }
          get keysUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUp : []
          }
          set keysUp(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysUp = zz)
          }
          get keysUpward() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUpward : []
          }
          set keysUpward(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysUpward = zz)
          }
          get keysDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDown : []
          }
          set keysDown(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysDown = zz)
          }
          get keysDownward() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDownward : []
          }
          set keysDownward(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysDownward = zz)
          }
          get keysLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysLeft : []
          }
          set keysLeft(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysLeft = zz)
          }
          get keysRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRight : []
          }
          set keysRight(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRight = zz)
          }
          get keysRotateLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateLeft : []
          }
          set keysRotateLeft(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRotateLeft = zz)
          }
          get keysRotateRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateRight : []
          }
          set keysRotateRight(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRotateRight = zz)
          }
          get keysRotateUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateUp : []
          }
          set keysRotateUp(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRotateUp = zz)
          }
          get keysRotateDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateDown : []
          }
          set keysRotateDown(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRotateDown = zz)
          }
          constructor(zz, tz, sz) {
            var Wz;
            super(zz, tz, sz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Wz = this, this.ellipsoid = (0, Fz.k)(this, uz, new Xz.p(.5, 1, .5)), this.ellipsoidOffset = ((0, Fz.k)(this, Nz), (0, Fz.k)(this, bz, new Xz.p(0, 0, 0))), this.checkCollisions = ((0, Fz.k)(this, wz), (0, Fz.k)(this, Dz, !1)), this.applyGravity = ((0, Fz.k)(this, gz), (0, Fz.k)(this, Hz, !1)), this.inputs = (0, Fz.k)(this, Bz), this._needMoveForGravity = !1, this._oldPosition = Xz.p.Zero(), this._diffPosition = Xz.p.Zero(), this._newPosition = Xz.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(zz, tz) {
              let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Wz._newPosition.vsz(tz), Wz._newPosition.subtractToRef(Wz._oldPosition, Wz._diffPosition), Wz._diffPosition.length() > Jz.b.CollisionsEpsilon && (Wz.position.addToRef(Wz._diffPosition, Wz._deferredPositionUpdate), Wz._deferOnly ? Wz._deferredUpdated = !0 : Wz.position.vsz(Wz._deferredPositionUpdate), Wz.cN && sz && Wz.cN(sz))
            }, this.inputs = new mz(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(zz, tz) {
            tz = Uz.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(tz)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Xz.p(0, 0, 0), this.cameraRotation = new Xz.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(zz) {
            this._collisionMask = isNaN(zz) ? -1 : zz
          }
          _collideWithWorld(zz) {
            let tz;
            tz = this.parent ? Xz.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, tz.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const sz = this.aJ().collisionCoordinator;
            this._collider || (this._collider = sz.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Fz = zz;
            this.applyGravity && (Fz = zz.add(this.aJ().gravity)), sz.getNewPosition(this._oldPosition, Fz, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Xz.p.Zero(), this._transformedDirection = Xz.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(zz) {
            this._needMoveForGravity = zz
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.aJ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.H)()], sz = [(0, Wz.H)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: zz => "ellipsoid" in zz,
              get: zz => zz.ellipsoid,
              set: (zz, tz) => {
                zz.ellipsoid = tz
              }
            },
            metadata: Xz
          }, uz, Nz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "ellipsoidOffset" in zz,
              get: zz => zz.ellipsoidOffset,
              set: (zz, tz) => {
                zz.ellipsoidOffset = tz
              }
            },
            metadata: Xz
          }, bz, wz), (0, Fz.h)(null, null, oz, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: zz => "checkCollisions" in zz,
              get: zz => zz.checkCollisions,
              set: (zz, tz) => {
                zz.checkCollisions = tz
              }
            },
            metadata: Xz
          }, Dz, gz), (0, Fz.h)(null, null, vz, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyGravity" in zz,
              get: zz => zz.applyGravity,
              set: (zz, tz) => {
                zz.applyGravity = tz
              }
            },
            metadata: Xz
          }, Hz, Bz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      ez = !1;
    ez || (ez = !0, (0, Iz.g)("BABYLON.FreeCamera", Cz))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
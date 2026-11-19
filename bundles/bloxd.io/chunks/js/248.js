export const id = 248;
export const ids = [248];
export const modules = {
  39365: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Jz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(39372),
      Mz = bz(39402),
      tz = bz(39337),
      Hz = bz(39258);
    let Oz = (() => {
      var zz;
      let uz, bz, lz, Mz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz = [],
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        xz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [];
      return zz = class {
        constructor() {
          this.keysUp = (0, Ez.j)(this, wz, [38]), this.keysUpward = ((0, Ez.j)(this, Xz), (0, Ez.j)(this, fz, [33])), this.keysDown = ((0, Ez.j)(this, sz), (0, Ez.j)(this, rz, [40])), this.keysDownward = ((0, Ez.j)(this, oz), (0, Ez.j)(this, Nz, [34])), this.keysLeft = ((0, Ez.j)(this, vz), (0, Ez.j)(this, xz, [37])), this.keysRight = ((0, Ez.j)(this, Jz), (0, Ez.j)(this, Az, [39])), this.rotationSpeed = ((0, Ez.j)(this, Tz), (0, Ez.j)(this, Lz, .5)), this.keysRotateLeft = ((0, Ez.j)(this, Pz), (0, Ez.j)(this, Gz, [])), this.keysRotateRight = ((0, Ez.j)(this, az), (0, Ez.j)(this, Vz, [])), this.keysRotateUp = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, [])), this.keysRotateDown = ((0, Ez.j)(this, hz), (0, Ez.j)(this, Uz, [])), this._keys = ((0, Ez.j)(this, cz), new Array)
        }
        attachControl(zz) {
          zz = Hz.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XT(), this._engine = this._scene.uR(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((uz => {
            const bz = uz.event;
            if (!bz.metaKey)
              if (uz.type === tz.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysUpward.indexOf(bz.keyCode) || -1 !== this.keysDownward.indexOf(bz.keyCode) || -1 !== this.keysRotateLeft.indexOf(bz.keyCode) || -1 !== this.keysRotateRight.indexOf(bz.keyCode) || -1 !== this.keysRotateUp.indexOf(bz.keyCode) || -1 !== this.keysRotateDown.indexOf(bz.keyCode)) {
                  -1 === this._keys.indexOf(bz.keyCode) && this._keys.push(bz.keyCode), zz || bz.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysUpward.indexOf(bz.keyCode) || -1 !== this.keysDownward.indexOf(bz.keyCode) || -1 !== this.keysRotateLeft.indexOf(bz.keyCode) || -1 !== this.keysRotateRight.indexOf(bz.keyCode) || -1 !== this.keysRotateUp.indexOf(bz.keyCode) || -1 !== this.keysRotateDown.indexOf(bz.keyCode)) {
              const uz = this._keys.indexOf(bz.keyCode);
              uz >= 0 && this._keys.splice(uz, 1), zz || bz.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const zz = this.camera,
              uz = zz.movement.input,
              bz = uz.getEntry("keyboard", "translate"),
              Ez = uz.getEntry("keyboard", "rotate"),
              nz = Ez?.sensitivity ?? 1,
              lz = zz._localDirection.P_(0, 0, 0);
            for (let iz = 0; iz < this._keys.length; iz++) {
              const uz = this._keys[iz]; - 1 !== this.keysLeft.indexOf(uz) ? lz.x -= 1 : -1 !== this.keysUp.indexOf(uz) ? lz.z += 1 : -1 !== this.keysRight.indexOf(uz) ? lz.x += 1 : -1 !== this.keysDown.indexOf(uz) ? lz.z -= 1 : -1 !== this.keysUpward.indexOf(uz) ? lz.y += 1 : -1 !== this.keysDownward.indexOf(uz) ? lz.y -= 1 : -1 !== this.keysRotateLeft.indexOf(uz) ? Ez && (zz.cameraRotation.y -= this._getLocalRotation() * nz) : -1 !== this.keysRotateRight.indexOf(uz) ? Ez && (zz.cameraRotation.y += this._getLocalRotation() * nz) : -1 !== this.keysRotateUp.indexOf(uz) ? Ez && (zz.cameraRotation.x -= this._getLocalRotation() * nz) : -1 !== this.keysRotateDown.indexOf(uz) && Ez && (zz.cameraRotation.x += this._getLocalRotation() * nz)
            }
            if (bz && (0 !== lz.x || 0 !== lz.y || 0 !== lz.z)) {
              const uz = zz._computeLocalCameraSpeed() * (bz.sensitivity ?? 1);
              lz.normalize().scaleInPlace(uz), zz.XT().useRightHandedSystem && (lz.z *= -1), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), iz.n.TransformNormalToRef(lz, zz._cameraTransformMatrix, zz._transformedDirection), zz.cameraDirection.addInPlace(zz._transformedDirection)
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
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], Rz = [(0, nz.G)()], Kz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUp" in zz,
            get: zz => zz.keysUp,
            set: (zz, uz) => {
              zz.keysUp = uz
            }
          },
          metadata: iz
        }, wz, Xz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUpward" in zz,
            get: zz => zz.keysUpward,
            set: (zz, uz) => {
              zz.keysUpward = uz
            }
          },
          metadata: iz
        }, fz, sz), (0, Ez.h)(null, null, lz, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDown" in zz,
            get: zz => zz.keysDown,
            set: (zz, uz) => {
              zz.keysDown = uz
            }
          },
          metadata: iz
        }, rz, oz), (0, Ez.h)(null, null, Mz, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDownward" in zz,
            get: zz => zz.keysDownward,
            set: (zz, uz) => {
              zz.keysDownward = uz
            }
          },
          metadata: iz
        }, Nz, vz), (0, Ez.h)(null, null, Oz, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysLeft" in zz,
            get: zz => zz.keysLeft,
            set: (zz, uz) => {
              zz.keysLeft = uz
            }
          },
          metadata: iz
        }, xz, Jz), (0, Ez.h)(null, null, pz, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRight" in zz,
            get: zz => zz.keysRight,
            set: (zz, uz) => {
              zz.keysRight = uz
            }
          },
          metadata: iz
        }, Az, Tz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: zz => "rotationSpeed" in zz,
            get: zz => zz.rotationSpeed,
            set: (zz, uz) => {
              zz.rotationSpeed = uz
            }
          },
          metadata: iz
        }, Lz, Pz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateLeft" in zz,
            get: zz => zz.keysRotateLeft,
            set: (zz, uz) => {
              zz.keysRotateLeft = uz
            }
          },
          metadata: iz
        }, Gz, az), (0, Ez.h)(null, null, Zz, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateRight" in zz,
            get: zz => zz.keysRotateRight,
            set: (zz, uz) => {
              zz.keysRotateRight = uz
            }
          },
          metadata: iz
        }, Vz, mz), (0, Ez.h)(null, null, Rz, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateUp" in zz,
            get: zz => zz.keysRotateUp,
            set: (zz, uz) => {
              zz.keysRotateUp = uz
            }
          },
          metadata: iz
        }, qz, hz), (0, Ez.h)(null, null, Kz, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRotateDown" in zz,
            get: zz => zz.keysRotateDown,
            set: (zz, uz) => {
              zz.keysRotateDown = uz
            }
          },
          metadata: iz
        }, Uz, cz), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz
    })();
    Mz.e.FreeCameraKeyboardMoveInput = Oz;
    var pz = bz(36547),
      dz = bz(39331);
    let Fz = (() => {
      var zz;
      let uz, bz, iz = [],
        lz = [],
        Mz = [],
        tz = [];
      return zz = class {
        _applyPointerRotation(zz, uz) {
          this._pointerConditions.button = this._currentActiveButton;
          const bz = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!bz || "rotate" !== bz.interaction) return;
          const Ez = bz.Gy ?? bz.sensitivity ?? 1 / this.angularSensibility,
            nz = bz.Uy ?? bz.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += zz * Ez, this.camera.cameraRotation.x += uz * nz
        }
        constructor() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = zz, this.buttons = (0, Ez.j)(this, iz, [0, 1, 2]), this.angularSensibility = ((0, Ez.j)(this, lz), (0, Ez.j)(this, Mz, 2e3)), this._pointerInput = (0, Ez.j)(this, tz), this._previousPosition = null, this.onPointerMovedObservable = new pz.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(zz) {
          zz = Hz.h.BackCompatCameraNoPreventDefault(arguments);
          const uz = this.camera.uR(),
            bz = uz.getInputElement();
          this._pointerInput || (this._pointerInput = Ez => {
            const nz = Ez.event,
              iz = "touch" === nz.pointerType;
            if (!this.touchEnabled && iz) return;
            if (Ez.type !== dz.c.POINTERMOVE && -1 === this.buttons.indexOf(nz.button)) return;
            const lz = nz.target;
            if (Ez.type === dz.c.POINTERDOWN) {
              if (iz && -1 !== this._activePointerId || !iz && -1 !== this._currentActiveButton) return;
              this._activePointerId = nz.pointerId;
              try {
                lz?.setPointerCapture(nz.pointerId)
              } catch (Mz) {} - 1 === this._currentActiveButton && (this._currentActiveButton = nz.button), this._previousPosition = {
                x: nz.clientX,
                y: nz.clientY
              }, zz || (nz.preventDefault(), bz && bz.focus()), uz.isPointerLock && this._onMouseMove && this._onMouseMove(Ez.event)
            } else if (Ez.type === dz.c.POINTERUP) {
              if (iz && this._activePointerId !== nz.pointerId || !iz && this._currentActiveButton !== nz.button) return;
              try {
                lz?.releasePointerCapture(nz.pointerId)
              } catch (Mz) {}
              this._currentActiveButton = -1, this._previousPosition = null, zz || nz.preventDefault(), this._activePointerId = -1
            } else if (Ez.type === dz.c.POINTERMOVE && (this._activePointerId === nz.pointerId || !iz))
              if (uz.isPointerLock && this._onMouseMove) this._onMouseMove(Ez.event);
              else if (this._previousPosition) {
              const uz = this.camera._calculateHandednessMultiplier(),
                bz = (nz.clientX - this._previousPosition.x) * uz,
                Ez = (nz.clientY - this._previousPosition.y) * uz;
              this._allowCameraRotation && this._applyPointerRotation(bz, Ez), this.onPointerMovedObservable.notifyObservers({
                offsetX: bz,
                offsetY: Ez
              }), this._previousPosition = {
                x: nz.clientX,
                y: nz.clientY
              }, zz || nz.preventDefault()
            }
          }), this._onMouseMove = bz => {
            if (!uz.isPointerLock) return;
            const Ez = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(bz.movementX * Ez, bz.movementY * Ez), this._previousPosition = null, zz || bz.preventDefault()
          }, this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._pointerInput, dz.c.POINTERDOWN | dz.c.POINTERUP | dz.c.POINTERMOVE), bz && (this._contextMenuBind = zz => this.onContextMenu(zz), bz.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(zz) {
          zz.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const zz = this.camera.uR().getInputElement();
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
        const Hz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: zz => "buttons" in zz,
            get: zz => zz.buttons,
            set: (zz, uz) => {
              zz.buttons = uz
            }
          },
          metadata: Hz
        }, iz, lz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "angularSensibility" in zz,
            get: zz => zz.angularSensibility,
            set: (zz, uz) => {
              zz.angularSensibility = uz
            }
          },
          metadata: Hz
        }, Mz, tz), Hz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hz
        })
      })(), zz
    })();
    Mz.e.FreeCameraMouseInput = Fz;
    var Zz = bz(39341);
    let Rz = (() => {
      var zz;
      let uz, bz, iz, lz = [],
        Mz = [],
        tz = [],
        Oz = [],
        Fz = [],
        Rz = [];
      return zz = class {
        constructor() {
          this.wheelPrecisionX = (0, Ez.j)(this, lz, 3), this.wheelPrecisionY = ((0, Ez.j)(this, Mz), (0, Ez.j)(this, tz, 3)), this.wheelPrecisionZ = ((0, Ez.j)(this, Oz), (0, Ez.j)(this, Fz, 3)), this.onChangedObservable = ((0, Ez.j)(this, Rz), new pz.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(zz) {
          zz = Hz.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = uz => {
            if (uz.type !== dz.c.POINTERWHEEL) return;
            const bz = uz.event,
              Ez = bz.deltaMode === Zz.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Ez * bz.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Ez * bz.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Ez * bz.deltaZ / this._normalize, bz.preventDefault && (zz || bz.preventDefault())
          }, this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._wheel, dz.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Hz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionX" in zz,
            get: zz => zz.wheelPrecisionX,
            set: (zz, uz) => {
              zz.wheelPrecisionX = uz
            }
          },
          metadata: Hz
        }, lz, Mz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionY" in zz,
            get: zz => zz.wheelPrecisionY,
            set: (zz, uz) => {
              zz.wheelPrecisionY = uz
            }
          },
          metadata: Hz
        }, tz, Oz), (0, Ez.h)(null, null, iz, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecisionZ" in zz,
            get: zz => zz.wheelPrecisionZ,
            set: (zz, uz) => {
              zz.wheelPrecisionZ = uz
            }
          },
          metadata: Hz
        }, Fz, Rz), Hz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hz
        })
      })(), zz
    })();
    var Kz;
    ! function(zz) {
      zz[zz.MoveRelative = 0] = "MoveRelative", zz[zz.RotateRelative = 1] = "RotateRelative", zz[zz.MoveScene = 2] = "MoveScene"
    }(Kz || (Kz = {}));
    let wz = (() => {
      var zz;
      let uz, bz, lz, Mz, tz, Hz, Oz, pz, dz, Fz = Rz,
        Zz = [];
      return zz = class extends Fz {
        constructor() {
          super(...arguments), this.camera = (0, Ez.j)(this, Zz), this._moveRelative = iz.n.Zero(), this._rotateRelative = iz.n.Zero(), this._moveScene = iz.n.Zero(), this._wheelXAction = Kz.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Kz.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(zz) {
          null === zz && this._wheelXAction !== Kz.MoveRelative || (this._wheelXAction = Kz.MoveRelative, this._wheelXActionCoordinate = zz)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Kz.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(zz) {
          null === zz && this._wheelYAction !== Kz.MoveRelative || (this._wheelYAction = Kz.MoveRelative, this._wheelYActionCoordinate = zz)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Kz.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(zz) {
          null === zz && this._wheelZAction !== Kz.MoveRelative || (this._wheelZAction = Kz.MoveRelative, this._wheelZActionCoordinate = zz)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Kz.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(zz) {
          null === zz && this._wheelXAction !== Kz.RotateRelative || (this._wheelXAction = Kz.RotateRelative, this._wheelXActionCoordinate = zz)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Kz.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(zz) {
          null === zz && this._wheelYAction !== Kz.RotateRelative || (this._wheelYAction = Kz.RotateRelative, this._wheelYActionCoordinate = zz)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Kz.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(zz) {
          null === zz && this._wheelZAction !== Kz.RotateRelative || (this._wheelZAction = Kz.RotateRelative, this._wheelZActionCoordinate = zz)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Kz.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(zz) {
          null === zz && this._wheelXAction !== Kz.MoveScene || (this._wheelXAction = Kz.MoveScene, this._wheelXActionCoordinate = zz)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Kz.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(zz) {
          null === zz && this._wheelYAction !== Kz.MoveScene || (this._wheelYAction = Kz.MoveScene, this._wheelYActionCoordinate = zz)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Kz.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(zz) {
          null === zz && this._wheelZAction !== Kz.MoveScene || (this._wheelZAction = Kz.MoveScene, this._wheelZActionCoordinate = zz)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Kz.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Vk(0), this._rotateRelative.Vk(0), this._moveScene.Vk(0), this._updateCamera(), this.camera.XT().useRightHandedSystem && (this._moveRelative.z *= -1);
          const zz = iz.d.Zero();
          this.camera.getViewMatrix().invertToRef(zz);
          const uz = iz.n.Zero();
          iz.n.TransformNormalToRef(this._moveRelative, zz, uz), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(uz), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(zz, uz, bz) {
          if (0 === zz) return;
          if (null === uz || null === bz) return;
          let Ez = null;
          switch (uz) {
            case Kz.MoveRelative:
              Ez = this._moveRelative;
              break;
            case Kz.RotateRelative:
              Ez = this._rotateRelative;
              break;
            case Kz.MoveScene:
              Ez = this._moveScene
          }
          switch (bz) {
            case 0:
              Ez.set(zz, 0, 0);
              break;
            case 1:
              Ez.set(0, zz, 0);
              break;
            case 2:
              Ez.set(0, 0, zz)
          }
        }
      }, (() => {
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], (0, Ez.h)(zz, null, uz, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXMoveRelative" in zz,
            set: (zz, uz) => {
              zz.wheelXMoveRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, bz, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYMoveRelative" in zz,
            set: (zz, uz) => {
              zz.wheelYMoveRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, lz, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZMoveRelative" in zz,
            set: (zz, uz) => {
              zz.wheelZMoveRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, Mz, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXRotateRelative" in zz,
            set: (zz, uz) => {
              zz.wheelXRotateRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, tz, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYRotateRelative" in zz,
            set: (zz, uz) => {
              zz.wheelYRotateRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, Hz, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZRotateRelative" in zz,
            set: (zz, uz) => {
              zz.wheelZRotateRelative = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, Oz, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelXMoveScene" in zz,
            set: (zz, uz) => {
              zz.wheelXMoveScene = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, pz, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelYMoveScene" in zz,
            set: (zz, uz) => {
              zz.wheelYMoveScene = uz
            }
          },
          metadata: iz
        }, null, Zz), (0, Ez.h)(zz, null, dz, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelZMoveScene" in zz,
            set: (zz, uz) => {
              zz.wheelZMoveScene = uz
            }
          },
          metadata: iz
        }, null, Zz), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz
    })();
    Mz.e.FreeCameraMouseWheelInput = wz;
    let Xz = (() => {
      var zz;
      let uz, bz, lz = [],
        Mz = [],
        tz = [],
        Oz = [];
      return zz = class {
        constructor() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = zz, this.touchAngularSensibility = (0, Ez.j)(this, lz, 2e5), this.touchMoveSensibility = ((0, Ez.j)(this, Mz), (0, Ez.j)(this, tz, 250)), this.singleFingerRotate = ((0, Ez.j)(this, Oz), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Hz.h.IsSafari()
        }
        attachControl(zz) {
          zz = Hz.h.BackCompatCameraNoPreventDefault(arguments);
          let uz = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = bz => {
              const Ez = bz.event,
                nz = "mouse" === Ez.pointerType || this._isSafari && "undefined" === typeof Ez.pointerType;
              if (this.allowMouse || !nz)
                if (bz.type === dz.c.POINTERDOWN) {
                  if (zz || Ez.preventDefault(), this._pointerPressed.push(Ez.pointerId), 1 !== this._pointerPressed.length) return;
                  uz = {
                    x: Ez.clientX,
                    y: Ez.clientY
                  }
                } else if (bz.type === dz.c.POINTERUP) {
                zz || Ez.preventDefault();
                const bz = this._pointerPressed.indexOf(Ez.pointerId);
                if (-1 === bz) return;
                if (this._pointerPressed.splice(bz, 1), 0 != bz) return;
                uz = null, this._offsetX = null, this._offsetY = null
              } else if (bz.type === dz.c.POINTERMOVE) {
                if (zz || Ez.preventDefault(), !uz) return;
                if (0 != this._pointerPressed.indexOf(Ez.pointerId)) return;
                this._offsetX = Ez.clientX - uz.x, this._offsetY = -(Ez.clientY - uz.y)
              }
            }), this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._pointerInput, dz.c.POINTERDOWN | dz.c.POINTERUP | dz.c.POINTERMOVE), this._onLostFocus) {
            const zz = this.camera.uR().getInputElement();
            zz && zz.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const zz = this.camera.uR().getInputElement();
              zz && zz.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const zz = this.camera,
            uz = zz.movement.input,
            bz = uz.getEntry("touch", "rotate"),
            Ez = uz.getEntry("touch", "translate"),
            nz = zz._calculateHandednessMultiplier(),
            lz = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (bz) {
            const uz = bz.sensitivity ?? 1 / this.touchAngularSensibility;
            zz.cameraRotation.y = this._offsetX * nz * uz, lz && (zz.cameraRotation.x = -this._offsetY * nz * uz)
          }
          if (!lz && Ez) {
            const uz = zz._computeLocalCameraSpeed(),
              bz = Ez.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              nz = iz.l.ER[0];
            nz.P_(0, 0, uz * this._offsetY * bz), iz.d.RotationYawPitchRollToRef(zz.rotation.y, zz.rotation.x, 0, zz._cameraRotationMatrix), iz.n.TransformCoordinatesToRef(nz, zz._cameraRotationMatrix, nz), zz.cameraDirection.addInPlace(nz)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "touchAngularSensibility" in zz,
            get: zz => zz.touchAngularSensibility,
            set: (zz, uz) => {
              zz.touchAngularSensibility = uz
            }
          },
          metadata: iz
        }, lz, Mz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "touchMoveSensibility" in zz,
            get: zz => zz.touchMoveSensibility,
            set: (zz, uz) => {
              zz.touchMoveSensibility = uz
            }
          },
          metadata: iz
        }, tz, Oz), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz
    })();
    Mz.e.FreeCameraTouchInput = Xz;
    var fz, sz, rz, oz = bz(39061);
    class Nz extends Mz.i {
      constructor(zz) {
        super(zz), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Oz), this
      }
      addMouse() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Fz(zz), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new wz, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Xz), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(fz = Nz.prototype).addDeviceOrientation ?? (fz.addDeviceOrientation = (0, oz.h)("FreeCameraInputsManager", "addDeviceOrientation")), (sz = Nz.prototype).addVirtualJoystick ?? (sz.addVirtualJoystick = (0, oz.h)("FreeCameraInputsManager", "addVirtualJoystick")), (rz = Nz.prototype).addGamepad ?? (rz.addGamepad = (0, oz.h)("FreeCameraInputsManager", "addGamepad"));
    var vz = bz(39079),
      xz = bz(36564);
    let Jz = (() => {
        var zz;
        let uz, bz, Mz, tz, Oz = lz.i,
          pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [];
        return zz = class extends Oz {
          get angularSensibility() {
            const zz = this.inputs.attached.mouse;
            return zz ? zz.angularSensibility : 0
          }
          set angularSensibility(zz) {
            const uz = this.inputs.attached.mouse;
            uz && (uz.angularSensibility = zz)
          }
          get keysUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUp : []
          }
          set keysUp(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysUp = zz)
          }
          get keysUpward() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUpward : []
          }
          set keysUpward(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysUpward = zz)
          }
          get keysDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDown : []
          }
          set keysDown(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysDown = zz)
          }
          get keysDownward() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDownward : []
          }
          set keysDownward(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysDownward = zz)
          }
          get keysLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysLeft : []
          }
          set keysLeft(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysLeft = zz)
          }
          get keysRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRight : []
          }
          set keysRight(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRight = zz)
          }
          get keysRotateLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateLeft : []
          }
          set keysRotateLeft(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRotateLeft = zz)
          }
          get keysRotateRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateRight : []
          }
          set keysRotateRight(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRotateRight = zz)
          }
          get keysRotateUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateUp : []
          }
          set keysRotateUp(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRotateUp = zz)
          }
          get keysRotateDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRotateDown : []
          }
          set keysRotateDown(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRotateDown = zz)
          }
          constructor(zz, uz, bz) {
            var nz;
            super(zz, uz, bz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), nz = this, this.ellipsoid = (0, Ez.j)(this, pz, new iz.n(.5, 1, .5)), this.ellipsoidOffset = ((0, Ez.j)(this, dz), (0, Ez.j)(this, Fz, new iz.n(0, 0, 0))), this.checkCollisions = ((0, Ez.j)(this, Zz), (0, Ez.j)(this, Rz, !1)), this.applyGravity = ((0, Ez.j)(this, Kz), (0, Ez.j)(this, wz, !1)), this.inputs = (0, Ez.j)(this, Xz), this._needMoveForGravity = !1, this._oldPosition = iz.n.Zero(), this._diffPosition = iz.n.Zero(), this._newPosition = iz.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(zz, uz) {
              let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              nz._newPosition.euz(uz), nz._newPosition.subtractToRef(nz._oldPosition, nz._diffPosition), nz._diffPosition.length() > vz.b.CollisionsEpsilon && (nz.position.addToRef(nz._diffPosition, nz._deferredPositionUpdate), nz._deferOnly ? nz._deferredUpdated = !0 : nz.position.euz(nz._deferredPositionUpdate), nz.Ud && bz && nz.Ud(bz))
            }, this.inputs = new Nz(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(zz, uz) {
            uz = Hz.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(uz)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new iz.n(0, 0, 0), this.cameraRotation = new iz.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(zz) {
            this._collisionMask = isNaN(zz) ? -1 : zz
          }
          _collideWithWorld(zz) {
            let uz;
            uz = this.parent ? iz.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, uz.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const bz = this.XT().collisionCoordinator;
            this._collider || (this._collider = bz.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Ez = zz;
            this.applyGravity && (Ez = zz.add(this.XT().gravity)), bz.getNewPosition(this._oldPosition, Ez, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = iz.n.Zero(), this._transformedDirection = iz.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.XT().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.D)()], bz = [(0, nz.D)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: zz => "ellipsoid" in zz,
              get: zz => zz.ellipsoid,
              set: (zz, uz) => {
                zz.ellipsoid = uz
              }
            },
            metadata: iz
          }, pz, dz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "ellipsoidOffset" in zz,
              get: zz => zz.ellipsoidOffset,
              set: (zz, uz) => {
                zz.ellipsoidOffset = uz
              }
            },
            metadata: iz
          }, Fz, Zz), (0, Ez.h)(null, null, Mz, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: zz => "checkCollisions" in zz,
              get: zz => zz.checkCollisions,
              set: (zz, uz) => {
                zz.checkCollisions = uz
              }
            },
            metadata: iz
          }, Rz, Kz), (0, Ez.h)(null, null, tz, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyGravity" in zz,
              get: zz => zz.applyGravity,
              set: (zz, uz) => {
                zz.applyGravity = uz
              }
            },
            metadata: iz
          }, wz, Xz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      Az = !1;
    Az || (Az = !0, (0, xz.c)("BABYLON.FreeCamera", Jz))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
export const id = 237;
export const ids = [237];
export const modules = {
  38682: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ry
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(38688),
      cb = Wy(38729),
      Py = Wy(38662),
      oy = Wy(38576);
    let By = (() => {
      var yb;
      let bb, Wy, Zy, cb, By, Ky, ey, qb, sy, Sy, Ey, ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        Oy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [];
      return yb = class {
        constructor() {
          this.keysUp = (0, Uy.l)(this, ly, [38]), this.keysUpward = ((0, Uy.l)(this, mb), (0, Uy.l)(this, Cy, [33])), this.keysDown = ((0, Uy.l)(this, Ty), (0, Uy.l)(this, Vy, [40])), this.keysDownward = ((0, Uy.l)(this, Jy), (0, Uy.l)(this, gb, [34])), this.keysLeft = ((0, Uy.l)(this, Gy), (0, Uy.l)(this, Oy, [37])), this.keysRight = ((0, Uy.l)(this, Ry), (0, Uy.l)(this, vb, [39])), this.rotationSpeed = ((0, Uy.l)(this, ib), (0, Uy.l)(this, My, .5)), this.keysRotateLeft = ((0, Uy.l)(this, Yy), (0, Uy.l)(this, Xy, [])), this.keysRotateRight = ((0, Uy.l)(this, ny), (0, Uy.l)(this, uy, [])), this.keysRotateUp = ((0, Uy.l)(this, rb), (0, Uy.l)(this, Hy, [])), this.keysRotateDown = ((0, Uy.l)(this, ab), (0, Uy.l)(this, Fy, [])), this._keys = ((0, Uy.l)(this, py), new Array)
        }
        attachControl(yb) {
          yb = oy.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.kWy(), this._engine = this._scene.xh(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((bb => {
            const Wy = bb.event;
            if (!Wy.metaKey)
              if (bb.type === Py.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Wy.keyCode) || -1 !== this.keysDown.indexOf(Wy.keyCode) || -1 !== this.keysLeft.indexOf(Wy.keyCode) || -1 !== this.keysRight.indexOf(Wy.keyCode) || -1 !== this.keysUpward.indexOf(Wy.keyCode) || -1 !== this.keysDownward.indexOf(Wy.keyCode) || -1 !== this.keysRotateLeft.indexOf(Wy.keyCode) || -1 !== this.keysRotateRight.indexOf(Wy.keyCode) || -1 !== this.keysRotateUp.indexOf(Wy.keyCode) || -1 !== this.keysRotateDown.indexOf(Wy.keyCode)) {
                  -1 === this._keys.indexOf(Wy.keyCode) && this._keys.push(Wy.keyCode), yb || Wy.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Wy.keyCode) || -1 !== this.keysDown.indexOf(Wy.keyCode) || -1 !== this.keysLeft.indexOf(Wy.keyCode) || -1 !== this.keysRight.indexOf(Wy.keyCode) || -1 !== this.keysUpward.indexOf(Wy.keyCode) || -1 !== this.keysDownward.indexOf(Wy.keyCode) || -1 !== this.keysRotateLeft.indexOf(Wy.keyCode) || -1 !== this.keysRotateRight.indexOf(Wy.keyCode) || -1 !== this.keysRotateUp.indexOf(Wy.keyCode) || -1 !== this.keysRotateDown.indexOf(Wy.keyCode)) {
              const bb = this._keys.indexOf(Wy.keyCode);
              bb >= 0 && this._keys.splice(bb, 1), yb || Wy.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const yb = this.camera,
              bb = yb.movement.input,
              Wy = bb.getEntry("keyboard", "translate"),
              Uy = bb.getEntry("keyboard", "rotate"),
              hy = Uy?.sensitivity ?? 1,
              Zy = yb._localDirection.vcy(0, 0, 0);
            for (let fy = 0; fy < this._keys.length; fy++) {
              const bb = this._keys[fy]; - 1 !== this.keysLeft.indexOf(bb) ? Zy.x -= 1 : -1 !== this.keysUp.indexOf(bb) ? Zy.z += 1 : -1 !== this.keysRight.indexOf(bb) ? Zy.x += 1 : -1 !== this.keysDown.indexOf(bb) ? Zy.z -= 1 : -1 !== this.keysUpward.indexOf(bb) ? Zy.y += 1 : -1 !== this.keysDownward.indexOf(bb) ? Zy.y -= 1 : -1 !== this.keysRotateLeft.indexOf(bb) ? Uy && (yb.cameraRotation.y -= this._getLocalRotation() * hy) : -1 !== this.keysRotateRight.indexOf(bb) ? Uy && (yb.cameraRotation.y += this._getLocalRotation() * hy) : -1 !== this.keysRotateUp.indexOf(bb) ? Uy && (yb.cameraRotation.x -= this._getLocalRotation() * hy) : -1 !== this.keysRotateDown.indexOf(bb) && Uy && (yb.cameraRotation.x += this._getLocalRotation() * hy)
            }
            if (Wy && (0 !== Zy.x || 0 !== Zy.y || 0 !== Zy.z)) {
              const bb = yb._computeLocalCameraSpeed() * (Wy.sensitivity ?? 1);
              Zy.normalize().scaleInPlace(bb), yb.kWy().useRightHandedSystem && (Zy.z *= -1), yb.getViewMatrix().invertToRef(yb._cameraTransformMatrix), fy.n.TransformNormalToRef(Zy, yb._cameraTransformMatrix, yb._transformedDirection), yb.cameraDirection.addInPlace(yb._transformedDirection)
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
          const yb = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * yb
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], Zy = [(0, hy.T)()], cb = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.T)()], ey = [(0, hy.T)()], qb = [(0, hy.T)()], sy = [(0, hy.T)()], Sy = [(0, hy.T)()], Ey = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysUp" in yb,
            get: yb => yb.keysUp,
            set: (yb, bb) => {
              yb.keysUp = bb
            }
          },
          metadata: fy
        }, ly, mb), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysUpward" in yb,
            get: yb => yb.keysUpward,
            set: (yb, bb) => {
              yb.keysUpward = bb
            }
          },
          metadata: fy
        }, Cy, Ty), (0, Uy.j)(null, null, Zy, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysDown" in yb,
            get: yb => yb.keysDown,
            set: (yb, bb) => {
              yb.keysDown = bb
            }
          },
          metadata: fy
        }, Vy, Jy), (0, Uy.j)(null, null, cb, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysDownward" in yb,
            get: yb => yb.keysDownward,
            set: (yb, bb) => {
              yb.keysDownward = bb
            }
          },
          metadata: fy
        }, gb, Gy), (0, Uy.j)(null, null, By, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysLeft" in yb,
            get: yb => yb.keysLeft,
            set: (yb, bb) => {
              yb.keysLeft = bb
            }
          },
          metadata: fy
        }, Oy, Ry), (0, Uy.j)(null, null, Ky, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRight" in yb,
            get: yb => yb.keysRight,
            set: (yb, bb) => {
              yb.keysRight = bb
            }
          },
          metadata: fy
        }, vb, ib), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: yb => "rotationSpeed" in yb,
            get: yb => yb.rotationSpeed,
            set: (yb, bb) => {
              yb.rotationSpeed = bb
            }
          },
          metadata: fy
        }, My, Yy), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRotateLeft" in yb,
            get: yb => yb.keysRotateLeft,
            set: (yb, bb) => {
              yb.keysRotateLeft = bb
            }
          },
          metadata: fy
        }, Xy, ny), (0, Uy.j)(null, null, sy, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRotateRight" in yb,
            get: yb => yb.keysRotateRight,
            set: (yb, bb) => {
              yb.keysRotateRight = bb
            }
          },
          metadata: fy
        }, uy, rb), (0, Uy.j)(null, null, Sy, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRotateUp" in yb,
            get: yb => yb.keysRotateUp,
            set: (yb, bb) => {
              yb.keysRotateUp = bb
            }
          },
          metadata: fy
        }, Hy, ab), (0, Uy.j)(null, null, Ey, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRotateDown" in yb,
            get: yb => yb.keysRotateDown,
            set: (yb, bb) => {
              yb.keysRotateDown = bb
            }
          },
          metadata: fy
        }, Fy, py), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb
    })();
    cb.e.FreeCameraKeyboardMoveInput = By;
    var Ky = Wy(35893),
      ey = Wy(38655);
    let qb = (() => {
      var yb;
      let bb, Wy, fy = [],
        Zy = [],
        cb = [],
        Py = [];
      return yb = class {
        _applyPointerRotation(yb, bb) {
          this._pointerConditions.button = this._currentActiveButton;
          const Wy = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Wy || "rotate" !== Wy.interaction) return;
          const Uy = Wy.NUy ?? Wy.sensitivity ?? 1 / this.angularSensibility,
            hy = Wy.zhy ?? Wy.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += yb * Uy, this.camera.cameraRotation.x += bb * hy
        }
        constructor() {
          let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = yb, this.buttons = (0, Uy.l)(this, fy, [0, 1, 2]), this.angularSensibility = ((0, Uy.l)(this, Zy), (0, Uy.l)(this, cb, 2e3)), this._pointerInput = (0, Uy.l)(this, Py), this._previousPosition = null, this.onPointerMovedObservable = new Ky.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(yb) {
          yb = oy.k.BackCompatCameraNoPreventDefault(arguments);
          const bb = this.camera.xh(),
            Wy = bb.getInputElement();
          this._pointerInput || (this._pointerInput = Uy => {
            const hy = Uy.event,
              fy = "touch" === hy.pointerType;
            if (!this.touchEnabled && fy) return;
            if (Uy.type !== ey.d.POINTERMOVE && -1 === this.buttons.indexOf(hy.button)) return;
            const Zy = hy.target;
            if (Uy.type === ey.d.POINTERDOWN) {
              if (fy && -1 !== this._activePointerId || !fy && -1 !== this._currentActiveButton) return;
              this._activePointerId = hy.pointerId;
              try {
                Zy?.setPointerCapture(hy.pointerId)
              } catch (cb) {} - 1 === this._currentActiveButton && (this._currentActiveButton = hy.button), this._previousPosition = {
                x: hy.clientX,
                y: hy.clientY
              }, yb || (hy.preventDefault(), Wy && Wy.focus()), bb.isPointerLock && this._onMouseMove && this._onMouseMove(Uy.event)
            } else if (Uy.type === ey.d.POINTERUP) {
              if (fy && this._activePointerId !== hy.pointerId || !fy && this._currentActiveButton !== hy.button) return;
              try {
                Zy?.releasePointerCapture(hy.pointerId)
              } catch (cb) {}
              this._currentActiveButton = -1, this._previousPosition = null, yb || hy.preventDefault(), this._activePointerId = -1
            } else if (Uy.type === ey.d.POINTERMOVE && (this._activePointerId === hy.pointerId || !fy))
              if (bb.isPointerLock && this._onMouseMove) this._onMouseMove(Uy.event);
              else if (this._previousPosition) {
              const bb = this.camera._calculateHandednessMultiplier(),
                Wy = (hy.clientX - this._previousPosition.x) * bb,
                Uy = (hy.clientY - this._previousPosition.y) * bb;
              this._allowCameraRotation && this._applyPointerRotation(Wy, Uy), this.onPointerMovedObservable.notifyObservers({
                offsetX: Wy,
                offsetY: Uy
              }), this._previousPosition = {
                x: hy.clientX,
                y: hy.clientY
              }, yb || hy.preventDefault()
            }
          }), this._onMouseMove = Wy => {
            if (!bb.isPointerLock) return;
            const Uy = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Wy.movementX * Uy, Wy.movementY * Uy), this._previousPosition = null, yb || Wy.preventDefault()
          }, this._observer = this.camera.kWy()._inputManager._addCameraPointerObserver(this._pointerInput, ey.d.POINTERDOWN | ey.d.POINTERUP | ey.d.POINTERMOVE), Wy && (this._contextMenuBind = yb => this.onContextMenu(yb), Wy.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(yb) {
          yb.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.kWy()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const yb = this.camera.xh().getInputElement();
              yb && yb.removeEventListener("contextmenu", this._contextMenuBind)
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
        const oy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: yb => "buttons" in yb,
            get: yb => yb.buttons,
            set: (yb, bb) => {
              yb.buttons = bb
            }
          },
          metadata: oy
        }, fy, Zy), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: yb => "angularSensibility" in yb,
            get: yb => yb.angularSensibility,
            set: (yb, bb) => {
              yb.angularSensibility = bb
            }
          },
          metadata: oy
        }, cb, Py), oy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oy
        })
      })(), yb
    })();
    cb.e.FreeCameraMouseInput = qb;
    var sy = Wy(38664);
    let Sy = (() => {
      var yb;
      let bb, Wy, fy, Zy = [],
        cb = [],
        Py = [],
        By = [],
        qb = [],
        Sy = [];
      return yb = class {
        constructor() {
          this.wheelPrecisionX = (0, Uy.l)(this, Zy, 3), this.wheelPrecisionY = ((0, Uy.l)(this, cb), (0, Uy.l)(this, Py, 3)), this.wheelPrecisionZ = ((0, Uy.l)(this, By), (0, Uy.l)(this, qb, 3)), this.onChangedObservable = ((0, Uy.l)(this, Sy), new Ky.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(yb) {
          yb = oy.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = bb => {
            if (bb.type !== ey.d.POINTERWHEEL) return;
            const Wy = bb.event,
              Uy = Wy.deltaMode === sy.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Uy * Wy.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Uy * Wy.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Uy * Wy.deltaZ / this._normalize, Wy.preventDefault && (yb || Wy.preventDefault())
          }, this._observer = this.camera.kWy()._inputManager._addCameraPointerObserver(this._wheel, ey.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.kWy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const oy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelPrecisionX" in yb,
            get: yb => yb.wheelPrecisionX,
            set: (yb, bb) => {
              yb.wheelPrecisionX = bb
            }
          },
          metadata: oy
        }, Zy, cb), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelPrecisionY" in yb,
            get: yb => yb.wheelPrecisionY,
            set: (yb, bb) => {
              yb.wheelPrecisionY = bb
            }
          },
          metadata: oy
        }, Py, By), (0, Uy.j)(null, null, fy, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelPrecisionZ" in yb,
            get: yb => yb.wheelPrecisionZ,
            set: (yb, bb) => {
              yb.wheelPrecisionZ = bb
            }
          },
          metadata: oy
        }, qb, Sy), oy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oy
        })
      })(), yb
    })();
    var Ey;
    ! function(yb) {
      yb[yb.MoveRelative = 0] = "MoveRelative", yb[yb.RotateRelative = 1] = "RotateRelative", yb[yb.MoveScene = 2] = "MoveScene"
    }(Ey || (Ey = {}));
    let ly = (() => {
      var yb;
      let bb, Wy, Zy, cb, Py, oy, By, Ky, ey, qb = Sy,
        sy = [];
      return yb = class extends qb {
        constructor() {
          super(...arguments), this.camera = (0, Uy.l)(this, sy), this._moveRelative = fy.n.Zero(), this._rotateRelative = fy.n.Zero(), this._moveScene = fy.n.Zero(), this._wheelXAction = Ey.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Ey.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(yb) {
          null === yb && this._wheelXAction !== Ey.MoveRelative || (this._wheelXAction = Ey.MoveRelative, this._wheelXActionCoordinate = yb)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Ey.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(yb) {
          null === yb && this._wheelYAction !== Ey.MoveRelative || (this._wheelYAction = Ey.MoveRelative, this._wheelYActionCoordinate = yb)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Ey.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(yb) {
          null === yb && this._wheelZAction !== Ey.MoveRelative || (this._wheelZAction = Ey.MoveRelative, this._wheelZActionCoordinate = yb)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Ey.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(yb) {
          null === yb && this._wheelXAction !== Ey.RotateRelative || (this._wheelXAction = Ey.RotateRelative, this._wheelXActionCoordinate = yb)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Ey.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(yb) {
          null === yb && this._wheelYAction !== Ey.RotateRelative || (this._wheelYAction = Ey.RotateRelative, this._wheelYActionCoordinate = yb)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Ey.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(yb) {
          null === yb && this._wheelZAction !== Ey.RotateRelative || (this._wheelZAction = Ey.RotateRelative, this._wheelZActionCoordinate = yb)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Ey.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(yb) {
          null === yb && this._wheelXAction !== Ey.MoveScene || (this._wheelXAction = Ey.MoveScene, this._wheelXActionCoordinate = yb)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Ey.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(yb) {
          null === yb && this._wheelYAction !== Ey.MoveScene || (this._wheelYAction = Ey.MoveScene, this._wheelYActionCoordinate = yb)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Ey.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(yb) {
          null === yb && this._wheelZAction !== Ey.MoveScene || (this._wheelZAction = Ey.MoveScene, this._wheelZActionCoordinate = yb)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Ey.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.dfy(0), this._rotateRelative.dfy(0), this._moveScene.dfy(0), this._updateCamera(), this.camera.kWy().useRightHandedSystem && (this._moveRelative.z *= -1);
          const yb = fy.c.Zero();
          this.camera.getViewMatrix().invertToRef(yb);
          const bb = fy.n.Zero();
          fy.n.TransformNormalToRef(this._moveRelative, yb, bb), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(bb), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(yb, bb, Wy) {
          if (0 === yb) return;
          if (null === bb || null === Wy) return;
          let Uy = null;
          switch (bb) {
            case Ey.MoveRelative:
              Uy = this._moveRelative;
              break;
            case Ey.RotateRelative:
              Uy = this._rotateRelative;
              break;
            case Ey.MoveScene:
              Uy = this._moveScene
          }
          switch (Wy) {
            case 0:
              Uy.set(yb, 0, 0);
              break;
            case 1:
              Uy.set(0, yb, 0);
              break;
            case 2:
              Uy.set(0, 0, yb)
          }
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(qb[Symbol.metadata] ?? null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], Zy = [(0, hy.T)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.T)()], ey = [(0, hy.T)()], (0, Uy.j)(yb, null, bb, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelXMoveRelative" in yb,
            set: (yb, bb) => {
              yb.wheelXMoveRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, Wy, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelYMoveRelative" in yb,
            set: (yb, bb) => {
              yb.wheelYMoveRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, Zy, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelZMoveRelative" in yb,
            set: (yb, bb) => {
              yb.wheelZMoveRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, cb, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelXRotateRelative" in yb,
            set: (yb, bb) => {
              yb.wheelXRotateRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, Py, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelYRotateRelative" in yb,
            set: (yb, bb) => {
              yb.wheelYRotateRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, oy, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelZRotateRelative" in yb,
            set: (yb, bb) => {
              yb.wheelZRotateRelative = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, By, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelXMoveScene" in yb,
            set: (yb, bb) => {
              yb.wheelXMoveScene = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, Ky, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelYMoveScene" in yb,
            set: (yb, bb) => {
              yb.wheelYMoveScene = bb
            }
          },
          metadata: fy
        }, null, sy), (0, Uy.j)(yb, null, ey, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelZMoveScene" in yb,
            set: (yb, bb) => {
              yb.wheelZMoveScene = bb
            }
          },
          metadata: fy
        }, null, sy), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb
    })();
    cb.e.FreeCameraMouseWheelInput = ly;
    let mb = (() => {
      var yb;
      let bb, Wy, Zy = [],
        cb = [],
        Py = [],
        By = [];
      return yb = class {
        constructor() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = yb, this.touchAngularSensibility = (0, Uy.l)(this, Zy, 2e5), this.touchMoveSensibility = ((0, Uy.l)(this, cb), (0, Uy.l)(this, Py, 250)), this.singleFingerRotate = ((0, Uy.l)(this, By), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = oy.k.IsSafari()
        }
        attachControl(yb) {
          yb = oy.k.BackCompatCameraNoPreventDefault(arguments);
          let bb = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Wy => {
              const Uy = Wy.event,
                hy = "mouse" === Uy.pointerType || this._isSafari && "undefined" === typeof Uy.pointerType;
              if (this.allowMouse || !hy)
                if (Wy.type === ey.d.POINTERDOWN) {
                  if (yb || Uy.preventDefault(), this._pointerPressed.push(Uy.pointerId), 1 !== this._pointerPressed.length) return;
                  bb = {
                    x: Uy.clientX,
                    y: Uy.clientY
                  }
                } else if (Wy.type === ey.d.POINTERUP) {
                yb || Uy.preventDefault();
                const Wy = this._pointerPressed.indexOf(Uy.pointerId);
                if (-1 === Wy) return;
                if (this._pointerPressed.splice(Wy, 1), 0 != Wy) return;
                bb = null, this._offsetX = null, this._offsetY = null
              } else if (Wy.type === ey.d.POINTERMOVE) {
                if (yb || Uy.preventDefault(), !bb) return;
                if (0 != this._pointerPressed.indexOf(Uy.pointerId)) return;
                this._offsetX = Uy.clientX - bb.x, this._offsetY = -(Uy.clientY - bb.y)
              }
            }), this._observer = this.camera.kWy()._inputManager._addCameraPointerObserver(this._pointerInput, ey.d.POINTERDOWN | ey.d.POINTERUP | ey.d.POINTERMOVE), this._onLostFocus) {
            const yb = this.camera.xh().getInputElement();
            yb && yb.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.kWy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const yb = this.camera.xh().getInputElement();
              yb && yb.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const yb = this.camera,
            bb = yb.movement.input,
            Wy = bb.getEntry("touch", "rotate"),
            Uy = bb.getEntry("touch", "translate"),
            hy = yb._calculateHandednessMultiplier(),
            Zy = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Wy) {
            const bb = Wy.sensitivity ?? 1 / this.touchAngularSensibility;
            yb.cameraRotation.y = this._offsetX * hy * bb, Zy && (yb.cameraRotation.x = -this._offsetY * hy * bb)
          }
          if (!Zy && Uy) {
            const bb = yb._computeLocalCameraSpeed(),
              Wy = Uy.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              hy = fy.j.dU[0];
            hy.vcy(0, 0, bb * this._offsetY * Wy), fy.c.RotationYawPitchRollToRef(yb.rotation.y, yb.rotation.x, 0, yb._cameraRotationMatrix), fy.n.TransformCoordinatesToRef(hy, yb._cameraRotationMatrix, hy), yb.cameraDirection.addInPlace(hy)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: yb => "touchAngularSensibility" in yb,
            get: yb => yb.touchAngularSensibility,
            set: (yb, bb) => {
              yb.touchAngularSensibility = bb
            }
          },
          metadata: fy
        }, Zy, cb), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: yb => "touchMoveSensibility" in yb,
            get: yb => yb.touchMoveSensibility,
            set: (yb, bb) => {
              yb.touchMoveSensibility = bb
            }
          },
          metadata: fy
        }, Py, By), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb
    })();
    cb.e.FreeCameraTouchInput = mb;
    var Cy, Ty, Vy, Jy = Wy(38347);
    class gb extends cb.i {
      constructor(yb) {
        super(yb), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new By), this
      }
      addMouse() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new qb(yb), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new ly, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new mb), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Cy = gb.prototype).addDeviceOrientation ?? (Cy.addDeviceOrientation = (0, Jy.f)("FreeCameraInputsManager", "addDeviceOrientation")), (Ty = gb.prototype).addVirtualJoystick ?? (Ty.addVirtualJoystick = (0, Jy.f)("FreeCameraInputsManager", "addVirtualJoystick")), (Vy = gb.prototype).addGamepad ?? (Vy.addGamepad = (0, Jy.f)("FreeCameraInputsManager", "addGamepad"));
    var Gy = Wy(38362),
      Oy = Wy(35909);
    let Ry = (() => {
        var yb;
        let bb, Wy, cb, Py, By = Zy.e,
          Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [],
          ly = [],
          mb = [];
        return yb = class extends By {
          get angularSensibility() {
            const yb = this.inputs.attached.mouse;
            return yb ? yb.angularSensibility : 0
          }
          set angularSensibility(yb) {
            const bb = this.inputs.attached.mouse;
            bb && (bb.angularSensibility = yb)
          }
          get keysUp() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysUp : []
          }
          set keysUp(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysUp = yb)
          }
          get keysUpward() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysUpward : []
          }
          set keysUpward(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysUpward = yb)
          }
          get keysDown() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysDown : []
          }
          set keysDown(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysDown = yb)
          }
          get keysDownward() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysDownward : []
          }
          set keysDownward(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysDownward = yb)
          }
          get keysLeft() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysLeft : []
          }
          set keysLeft(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysLeft = yb)
          }
          get keysRight() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRight : []
          }
          set keysRight(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRight = yb)
          }
          get keysRotateLeft() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRotateLeft : []
          }
          set keysRotateLeft(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRotateLeft = yb)
          }
          get keysRotateRight() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRotateRight : []
          }
          set keysRotateRight(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRotateRight = yb)
          }
          get keysRotateUp() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRotateUp : []
          }
          set keysRotateUp(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRotateUp = yb)
          }
          get keysRotateDown() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRotateDown : []
          }
          set keysRotateDown(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRotateDown = yb)
          }
          constructor(yb, bb, Wy) {
            var hy;
            super(yb, bb, Wy, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), hy = this, this.ellipsoid = (0, Uy.l)(this, Ky, new fy.n(.5, 1, .5)), this.ellipsoidOffset = ((0, Uy.l)(this, ey), (0, Uy.l)(this, qb, new fy.n(0, 0, 0))), this.checkCollisions = ((0, Uy.l)(this, sy), (0, Uy.l)(this, Sy, !1)), this.applyGravity = ((0, Uy.l)(this, Ey), (0, Uy.l)(this, ly, !1)), this.inputs = (0, Uy.l)(this, mb), this._needMoveForGravity = !1, this._oldPosition = fy.n.Zero(), this._diffPosition = fy.n.Zero(), this._newPosition = fy.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(yb, bb) {
              let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              hy._newPosition.Coy(bb), hy._newPosition.subtractToRef(hy._oldPosition, hy._diffPosition), hy._diffPosition.length() > Gy.d.CollisionsEpsilon && (hy.position.addToRef(hy._diffPosition, hy._deferredPositionUpdate), hy._deferOnly ? hy._deferredUpdated = !0 : hy.position.Coy(hy._deferredPositionUpdate), hy.Jb && Wy && hy.Jb(Wy))
            }, this.inputs = new gb(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(yb, bb) {
            bb = oy.k.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(bb)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new fy.n(0, 0, 0), this.cameraRotation = new fy.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(yb) {
            this._collisionMask = isNaN(yb) ? -1 : yb
          }
          _collideWithWorld(yb) {
            let bb;
            bb = this.parent ? fy.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, bb.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Wy = this.kWy().collisionCoordinator;
            this._collider || (this._collider = Wy.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Uy = yb;
            this.applyGravity && (Uy = yb.add(this.kWy().gravity)), Wy.getNewPosition(this._oldPosition, Uy, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = fy.n.Zero(), this._transformedDirection = fy.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(yb) {
            this._needMoveForGravity = yb
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.kWy().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(By[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.P)()], Wy = [(0, hy.P)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: yb => "ellipsoid" in yb,
              get: yb => yb.ellipsoid,
              set: (yb, bb) => {
                yb.ellipsoid = bb
              }
            },
            metadata: fy
          }, Ky, ey), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "ellipsoidOffset" in yb,
              get: yb => yb.ellipsoidOffset,
              set: (yb, bb) => {
                yb.ellipsoidOffset = bb
              }
            },
            metadata: fy
          }, qb, sy), (0, Uy.j)(null, null, cb, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: yb => "checkCollisions" in yb,
              get: yb => yb.checkCollisions,
              set: (yb, bb) => {
                yb.checkCollisions = bb
              }
            },
            metadata: fy
          }, Sy, Ey), (0, Uy.j)(null, null, Py, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: yb => "applyGravity" in yb,
              get: yb => yb.applyGravity,
              set: (yb, bb) => {
                yb.applyGravity = bb
              }
            },
            metadata: fy
          }, ly, mb), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      vb = !1;
    vb || (vb = !0, (0, Oy.e)("BABYLON.FreeCamera", Ry))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
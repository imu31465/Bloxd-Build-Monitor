export const id = 262;
export const ids = [262];
export const modules = {
  40405: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => qp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(40409),
      xp = cp(40435),
      Lp = cp(40380),
      Yp = cp(40304);
    let Dp = (() => {
      var pp;
      let ip, cp, Sp, xp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = [],
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Rp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [];
      return pp = class {
        constructor() {
          this.keysUp = (0, Op.l)(this, vp, [38]), this.keysUpward = ((0, Op.l)(this, tp), (0, Op.l)(this, Hp, [33])), this.keysDown = ((0, Op.l)(this, dp), (0, Op.l)(this, ep, [40])), this.keysDownward = ((0, Op.l)(this, jp), (0, Op.l)(this, kp, [34])), this.keysLeft = ((0, Op.l)(this, mp), (0, Op.l)(this, Rp, [37])), this.keysRight = ((0, Op.l)(this, qp), (0, Op.l)(this, Mp, [39])), this.rotationSpeed = ((0, Op.l)(this, Cp), (0, Op.l)(this, Ep, .5)), this.keysRotateLeft = ((0, Op.l)(this, Xp), (0, Op.l)(this, lp, [])), this.keysRotateRight = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, [])), this.keysRotateUp = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, [])), this.keysRotateDown = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, [])), this._keys = ((0, Op.l)(this, bp), new Array)
        }
        attachControl(pp) {
          pp = Yp.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Gl(), this._engine = this._scene.gy(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ip => {
            const cp = ip.event;
            if (!cp.metaKey)
              if (ip.type === Lp.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(cp.keyCode) || -1 !== this.keysRotateLeft.indexOf(cp.keyCode) || -1 !== this.keysRotateRight.indexOf(cp.keyCode) || -1 !== this.keysRotateUp.indexOf(cp.keyCode) || -1 !== this.keysRotateDown.indexOf(cp.keyCode)) {
                  -1 === this._keys.indexOf(cp.keyCode) && this._keys.push(cp.keyCode), pp || cp.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(cp.keyCode) || -1 !== this.keysRotateLeft.indexOf(cp.keyCode) || -1 !== this.keysRotateRight.indexOf(cp.keyCode) || -1 !== this.keysRotateUp.indexOf(cp.keyCode) || -1 !== this.keysRotateDown.indexOf(cp.keyCode)) {
              const ip = this._keys.indexOf(cp.keyCode);
              ip >= 0 && this._keys.splice(ip, 1), pp || cp.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const pp = this.camera,
              ip = pp.movement.input,
              cp = ip.getEntry("keyboard", "translate"),
              Op = ip.getEntry("keyboard", "rotate"),
              op = Op?.sensitivity ?? 1,
              Sp = pp._localDirection.i5(0, 0, 0);
            for (let Ip = 0; Ip < this._keys.length; Ip++) {
              const ip = this._keys[Ip]; - 1 !== this.keysLeft.indexOf(ip) ? Sp.x -= 1 : -1 !== this.keysUp.indexOf(ip) ? Sp.z += 1 : -1 !== this.keysRight.indexOf(ip) ? Sp.x += 1 : -1 !== this.keysDown.indexOf(ip) ? Sp.z -= 1 : -1 !== this.keysUpward.indexOf(ip) ? Sp.y += 1 : -1 !== this.keysDownward.indexOf(ip) ? Sp.y -= 1 : -1 !== this.keysRotateLeft.indexOf(ip) ? Op && (pp.cameraRotation.y -= this._getLocalRotation() * op) : -1 !== this.keysRotateRight.indexOf(ip) ? Op && (pp.cameraRotation.y += this._getLocalRotation() * op) : -1 !== this.keysRotateUp.indexOf(ip) ? Op && (pp.cameraRotation.x -= this._getLocalRotation() * op) : -1 !== this.keysRotateDown.indexOf(ip) && Op && (pp.cameraRotation.x += this._getLocalRotation() * op)
            }
            if (cp && (0 !== Sp.x || 0 !== Sp.y || 0 !== Sp.z)) {
              const ip = pp._computeLocalCameraSpeed() * (cp.sensitivity ?? 1);
              Sp.normalize().scaleInPlace(ip), pp.Gl().useRightHandedSystem && (Sp.z *= -1), pp.getViewMatrix().invertToRef(pp._cameraTransformMatrix), Ip.o.TransformNormalToRef(Sp, pp._cameraTransformMatrix, pp._transformedDirection), pp.cameraDirection.addInPlace(pp._transformedDirection)
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
          const pp = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * pp
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysUp" in pp,
            get: pp => pp.keysUp,
            set: (pp, ip) => {
              pp.keysUp = ip
            }
          },
          metadata: Ip
        }, vp, tp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysUpward" in pp,
            get: pp => pp.keysUpward,
            set: (pp, ip) => {
              pp.keysUpward = ip
            }
          },
          metadata: Ip
        }, Hp, dp), (0, Op.j)(null, null, Sp, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysDown" in pp,
            get: pp => pp.keysDown,
            set: (pp, ip) => {
              pp.keysDown = ip
            }
          },
          metadata: Ip
        }, ep, jp), (0, Op.j)(null, null, xp, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysDownward" in pp,
            get: pp => pp.keysDownward,
            set: (pp, ip) => {
              pp.keysDownward = ip
            }
          },
          metadata: Ip
        }, kp, mp), (0, Op.j)(null, null, Dp, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysLeft" in pp,
            get: pp => pp.keysLeft,
            set: (pp, ip) => {
              pp.keysLeft = ip
            }
          },
          metadata: Ip
        }, Rp, qp), (0, Op.j)(null, null, Ap, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRight" in pp,
            get: pp => pp.keysRight,
            set: (pp, ip) => {
              pp.keysRight = ip
            }
          },
          metadata: Ip
        }, Mp, Cp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: pp => "rotationSpeed" in pp,
            get: pp => pp.rotationSpeed,
            set: (pp, ip) => {
              pp.rotationSpeed = ip
            }
          },
          metadata: Ip
        }, Ep, Xp), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRotateLeft" in pp,
            get: pp => pp.keysRotateLeft,
            set: (pp, ip) => {
              pp.keysRotateLeft = ip
            }
          },
          metadata: Ip
        }, lp, Qp), (0, Op.j)(null, null, yp, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRotateRight" in pp,
            get: pp => pp.keysRotateRight,
            set: (pp, ip) => {
              pp.keysRotateRight = ip
            }
          },
          metadata: Ip
        }, Jp, Bp), (0, Op.j)(null, null, Up, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRotateUp" in pp,
            get: pp => pp.keysRotateUp,
            set: (pp, ip) => {
              pp.keysRotateUp = ip
            }
          },
          metadata: Ip
        }, Np, Tp), (0, Op.j)(null, null, wp, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRotateDown" in pp,
            get: pp => pp.keysRotateDown,
            set: (pp, ip) => {
              pp.keysRotateDown = ip
            }
          },
          metadata: Ip
        }, fp, bp), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp
    })();
    xp.e.FreeCameraKeyboardMoveInput = Dp;
    var Ap = cp(37349),
      Pp = cp(40372);
    let Wp = (() => {
      var pp;
      let ip, cp, Ip = [],
        Sp = [],
        xp = [],
        Lp = [];
      return pp = class {
        _applyPointerRotation(pp, ip) {
          this._pointerConditions.button = this._currentActiveButton;
          const cp = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!cp || "rotate" !== cp.interaction) return;
          const Op = cp.sG ?? cp.sensitivity ?? 1 / this.angularSensibility,
            op = cp.Hr ?? cp.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += pp * Op, this.camera.cameraRotation.x += ip * op
        }
        constructor() {
          let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = pp, this.buttons = (0, Op.l)(this, Ip, [0, 1, 2]), this.angularSensibility = ((0, Op.l)(this, Sp), (0, Op.l)(this, xp, 2e3)), this._pointerInput = (0, Op.l)(this, Lp), this._previousPosition = null, this.onPointerMovedObservable = new Ap.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(pp) {
          pp = Yp.i.BackCompatCameraNoPreventDefault(arguments);
          const ip = this.camera.gy(),
            cp = ip.getInputElement();
          this._pointerInput || (this._pointerInput = Op => {
            const op = Op.event,
              Ip = "touch" === op.pointerType;
            if (!this.touchEnabled && Ip) return;
            if (Op.type !== Pp.d.POINTERMOVE && -1 === this.buttons.indexOf(op.button)) return;
            const Sp = op.target;
            if (Op.type === Pp.d.POINTERDOWN) {
              if (Ip && -1 !== this._activePointerId || !Ip && -1 !== this._currentActiveButton) return;
              this._activePointerId = op.pointerId;
              try {
                Sp?.setPointerCapture(op.pointerId)
              } catch (xp) {} - 1 === this._currentActiveButton && (this._currentActiveButton = op.button), this._previousPosition = {
                x: op.clientX,
                y: op.clientY
              }, pp || (op.preventDefault(), cp && cp.focus()), ip.isPointerLock && this._onMouseMove && this._onMouseMove(Op.event)
            } else if (Op.type === Pp.d.POINTERUP) {
              if (Ip && this._activePointerId !== op.pointerId || !Ip && this._currentActiveButton !== op.button) return;
              try {
                Sp?.releasePointerCapture(op.pointerId)
              } catch (xp) {}
              this._currentActiveButton = -1, this._previousPosition = null, pp || op.preventDefault(), this._activePointerId = -1
            } else if (Op.type === Pp.d.POINTERMOVE && (this._activePointerId === op.pointerId || !Ip))
              if (ip.isPointerLock && this._onMouseMove) this._onMouseMove(Op.event);
              else if (this._previousPosition) {
              const ip = this.camera._calculateHandednessMultiplier(),
                cp = (op.clientX - this._previousPosition.x) * ip,
                Op = (op.clientY - this._previousPosition.y) * ip;
              this._allowCameraRotation && this._applyPointerRotation(cp, Op), this.onPointerMovedObservable.notifyObservers({
                offsetX: cp,
                offsetY: Op
              }), this._previousPosition = {
                x: op.clientX,
                y: op.clientY
              }, pp || op.preventDefault()
            }
          }), this._onMouseMove = cp => {
            if (!ip.isPointerLock) return;
            const Op = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(cp.movementX * Op, cp.movementY * Op), this._previousPosition = null, pp || cp.preventDefault()
          }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), cp && (this._contextMenuBind = pp => this.onContextMenu(pp), cp.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(pp) {
          pp.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const pp = this.camera.gy().getInputElement();
              pp && pp.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: pp => "buttons" in pp,
            get: pp => pp.buttons,
            set: (pp, ip) => {
              pp.buttons = ip
            }
          },
          metadata: Yp
        }, Ip, Sp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: pp => "angularSensibility" in pp,
            get: pp => pp.angularSensibility,
            set: (pp, ip) => {
              pp.angularSensibility = ip
            }
          },
          metadata: Yp
        }, xp, Lp), Yp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Yp
        })
      })(), pp
    })();
    xp.e.FreeCameraMouseInput = Wp;
    var yp = cp(40388);
    let Up = (() => {
      var pp;
      let ip, cp, Ip, Sp = [],
        xp = [],
        Lp = [],
        Dp = [],
        Wp = [],
        Up = [];
      return pp = class {
        constructor() {
          this.wheelPrecisionX = (0, Op.l)(this, Sp, 3), this.wheelPrecisionY = ((0, Op.l)(this, xp), (0, Op.l)(this, Lp, 3)), this.wheelPrecisionZ = ((0, Op.l)(this, Dp), (0, Op.l)(this, Wp, 3)), this.onChangedObservable = ((0, Op.l)(this, Up), new Ap.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(pp) {
          pp = Yp.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ip => {
            if (ip.type !== Pp.d.POINTERWHEEL) return;
            const cp = ip.event,
              Op = cp.deltaMode === yp.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Op * cp.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Op * cp.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Op * cp.deltaZ / this._normalize, cp.preventDefault && (pp || cp.preventDefault())
          }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._wheel, Pp.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelPrecisionX" in pp,
            get: pp => pp.wheelPrecisionX,
            set: (pp, ip) => {
              pp.wheelPrecisionX = ip
            }
          },
          metadata: Yp
        }, Sp, xp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelPrecisionY" in pp,
            get: pp => pp.wheelPrecisionY,
            set: (pp, ip) => {
              pp.wheelPrecisionY = ip
            }
          },
          metadata: Yp
        }, Lp, Dp), (0, Op.j)(null, null, Ip, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelPrecisionZ" in pp,
            get: pp => pp.wheelPrecisionZ,
            set: (pp, ip) => {
              pp.wheelPrecisionZ = ip
            }
          },
          metadata: Yp
        }, Wp, Up), Yp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Yp
        })
      })(), pp
    })();
    var wp;
    ! function(pp) {
      pp[pp.MoveRelative = 0] = "MoveRelative", pp[pp.RotateRelative = 1] = "RotateRelative", pp[pp.MoveScene = 2] = "MoveScene"
    }(wp || (wp = {}));
    let vp = (() => {
      var pp;
      let ip, cp, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp = Up,
        yp = [];
      return pp = class extends Wp {
        constructor() {
          super(...arguments), this.camera = (0, Op.l)(this, yp), this._moveRelative = Ip.o.Zero(), this._rotateRelative = Ip.o.Zero(), this._moveScene = Ip.o.Zero(), this._wheelXAction = wp.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = wp.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(pp) {
          null === pp && this._wheelXAction !== wp.MoveRelative || (this._wheelXAction = wp.MoveRelative, this._wheelXActionCoordinate = pp)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== wp.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(pp) {
          null === pp && this._wheelYAction !== wp.MoveRelative || (this._wheelYAction = wp.MoveRelative, this._wheelYActionCoordinate = pp)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== wp.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(pp) {
          null === pp && this._wheelZAction !== wp.MoveRelative || (this._wheelZAction = wp.MoveRelative, this._wheelZActionCoordinate = pp)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== wp.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(pp) {
          null === pp && this._wheelXAction !== wp.RotateRelative || (this._wheelXAction = wp.RotateRelative, this._wheelXActionCoordinate = pp)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== wp.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(pp) {
          null === pp && this._wheelYAction !== wp.RotateRelative || (this._wheelYAction = wp.RotateRelative, this._wheelYActionCoordinate = pp)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== wp.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(pp) {
          null === pp && this._wheelZAction !== wp.RotateRelative || (this._wheelZAction = wp.RotateRelative, this._wheelZActionCoordinate = pp)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== wp.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(pp) {
          null === pp && this._wheelXAction !== wp.MoveScene || (this._wheelXAction = wp.MoveScene, this._wheelXActionCoordinate = pp)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== wp.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(pp) {
          null === pp && this._wheelYAction !== wp.MoveScene || (this._wheelYAction = wp.MoveScene, this._wheelYActionCoordinate = pp)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== wp.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(pp) {
          null === pp && this._wheelZAction !== wp.MoveScene || (this._wheelZAction = wp.MoveScene, this._wheelZActionCoordinate = pp)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== wp.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.E_(0), this._rotateRelative.E_(0), this._moveScene.E_(0), this._updateCamera(), this.camera.Gl().useRightHandedSystem && (this._moveRelative.z *= -1);
          const pp = Ip.b.Zero();
          this.camera.getViewMatrix().invertToRef(pp);
          const ip = Ip.o.Zero();
          Ip.o.TransformNormalToRef(this._moveRelative, pp, ip), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ip), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(pp, ip, cp) {
          if (0 === pp) return;
          if (null === ip || null === cp) return;
          let Op = null;
          switch (ip) {
            case wp.MoveRelative:
              Op = this._moveRelative;
              break;
            case wp.RotateRelative:
              Op = this._rotateRelative;
              break;
            case wp.MoveScene:
              Op = this._moveScene
          }
          switch (cp) {
            case 0:
              Op.set(pp, 0, 0);
              break;
            case 1:
              Op.set(0, pp, 0);
              break;
            case 2:
              Op.set(0, 0, pp)
          }
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelXMoveRelative" in pp,
            set: (pp, ip) => {
              pp.wheelXMoveRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, cp, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelYMoveRelative" in pp,
            set: (pp, ip) => {
              pp.wheelYMoveRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Sp, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelZMoveRelative" in pp,
            set: (pp, ip) => {
              pp.wheelZMoveRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, xp, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelXRotateRelative" in pp,
            set: (pp, ip) => {
              pp.wheelXRotateRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Lp, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelYRotateRelative" in pp,
            set: (pp, ip) => {
              pp.wheelYRotateRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Yp, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelZRotateRelative" in pp,
            set: (pp, ip) => {
              pp.wheelZRotateRelative = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Dp, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelXMoveScene" in pp,
            set: (pp, ip) => {
              pp.wheelXMoveScene = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Ap, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelYMoveScene" in pp,
            set: (pp, ip) => {
              pp.wheelYMoveScene = ip
            }
          },
          metadata: Ip
        }, null, yp), (0, Op.j)(pp, null, Pp, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelZMoveScene" in pp,
            set: (pp, ip) => {
              pp.wheelZMoveScene = ip
            }
          },
          metadata: Ip
        }, null, yp), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp
    })();
    xp.e.FreeCameraMouseWheelInput = vp;
    let tp = (() => {
      var pp;
      let ip, cp, Sp = [],
        xp = [],
        Lp = [],
        Dp = [];
      return pp = class {
        constructor() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = pp, this.touchAngularSensibility = (0, Op.l)(this, Sp, 2e5), this.touchMoveSensibility = ((0, Op.l)(this, xp), (0, Op.l)(this, Lp, 250)), this.singleFingerRotate = ((0, Op.l)(this, Dp), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Yp.i.IsSafari()
        }
        attachControl(pp) {
          pp = Yp.i.BackCompatCameraNoPreventDefault(arguments);
          let ip = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = cp => {
              const Op = cp.event,
                op = "mouse" === Op.pointerType || this._isSafari && "undefined" === typeof Op.pointerType;
              if (this.allowMouse || !op)
                if (cp.type === Pp.d.POINTERDOWN) {
                  if (pp || Op.preventDefault(), this._pointerPressed.push(Op.pointerId), 1 !== this._pointerPressed.length) return;
                  ip = {
                    x: Op.clientX,
                    y: Op.clientY
                  }
                } else if (cp.type === Pp.d.POINTERUP) {
                pp || Op.preventDefault();
                const cp = this._pointerPressed.indexOf(Op.pointerId);
                if (-1 === cp) return;
                if (this._pointerPressed.splice(cp, 1), 0 != cp) return;
                ip = null, this._offsetX = null, this._offsetY = null
              } else if (cp.type === Pp.d.POINTERMOVE) {
                if (pp || Op.preventDefault(), !ip) return;
                if (0 != this._pointerPressed.indexOf(Op.pointerId)) return;
                this._offsetX = Op.clientX - ip.x, this._offsetY = -(Op.clientY - ip.y)
              }
            }), this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), this._onLostFocus) {
            const pp = this.camera.gy().getInputElement();
            pp && pp.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const pp = this.camera.gy().getInputElement();
              pp && pp.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const pp = this.camera,
            ip = pp.movement.input,
            cp = ip.getEntry("touch", "rotate"),
            Op = ip.getEntry("touch", "translate"),
            op = pp._calculateHandednessMultiplier(),
            Sp = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (cp) {
            const ip = cp.sensitivity ?? 1 / this.touchAngularSensibility;
            pp.cameraRotation.y = this._offsetX * op * ip, Sp && (pp.cameraRotation.x = -this._offsetY * op * ip)
          }
          if (!Sp && Op) {
            const ip = pp._computeLocalCameraSpeed(),
              cp = Op.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              op = Ip.i.Zy[0];
            op.i5(0, 0, ip * this._offsetY * cp), Ip.b.RotationYawPitchRollToRef(pp.rotation.y, pp.rotation.x, 0, pp._cameraRotationMatrix), Ip.o.TransformCoordinatesToRef(op, pp._cameraRotationMatrix, op), pp.cameraDirection.addInPlace(op)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: pp => "touchAngularSensibility" in pp,
            get: pp => pp.touchAngularSensibility,
            set: (pp, ip) => {
              pp.touchAngularSensibility = ip
            }
          },
          metadata: Ip
        }, Sp, xp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: pp => "touchMoveSensibility" in pp,
            get: pp => pp.touchMoveSensibility,
            set: (pp, ip) => {
              pp.touchMoveSensibility = ip
            }
          },
          metadata: Ip
        }, Lp, Dp), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp
    })();
    xp.e.FreeCameraTouchInput = tp;
    var Hp, dp, ep, jp = cp(40096);
    class kp extends xp.f {
      constructor(pp) {
        super(pp), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Dp), this
      }
      addMouse() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Wp(pp), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new vp, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new tp), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Hp = kp.prototype).addDeviceOrientation ?? (Hp.addDeviceOrientation = (0, jp.k)("FreeCameraInputsManager", "addDeviceOrientation")), (dp = kp.prototype).addVirtualJoystick ?? (dp.addVirtualJoystick = (0, jp.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ep = kp.prototype).addGamepad ?? (ep.addGamepad = (0, jp.k)("FreeCameraInputsManager", "addGamepad"));
    var mp = cp(40113),
      Rp = cp(37368);
    let qp = (() => {
        var pp;
        let ip, cp, xp, Lp, Dp = Sp.f,
          Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [],
          vp = [],
          tp = [];
        return pp = class extends Dp {
          get angularSensibility() {
            const pp = this.inputs.attached.mouse;
            return pp ? pp.angularSensibility : 0
          }
          set angularSensibility(pp) {
            const ip = this.inputs.attached.mouse;
            ip && (ip.angularSensibility = pp)
          }
          get keysUp() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysUp : []
          }
          set keysUp(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysUp = pp)
          }
          get keysUpward() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysUpward : []
          }
          set keysUpward(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysUpward = pp)
          }
          get keysDown() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysDown : []
          }
          set keysDown(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysDown = pp)
          }
          get keysDownward() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysDownward : []
          }
          set keysDownward(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysDownward = pp)
          }
          get keysLeft() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysLeft : []
          }
          set keysLeft(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysLeft = pp)
          }
          get keysRight() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRight : []
          }
          set keysRight(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRight = pp)
          }
          get keysRotateLeft() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRotateLeft : []
          }
          set keysRotateLeft(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRotateLeft = pp)
          }
          get keysRotateRight() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRotateRight : []
          }
          set keysRotateRight(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRotateRight = pp)
          }
          get keysRotateUp() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRotateUp : []
          }
          set keysRotateUp(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRotateUp = pp)
          }
          get keysRotateDown() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRotateDown : []
          }
          set keysRotateDown(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRotateDown = pp)
          }
          constructor(pp, ip, cp) {
            var op;
            super(pp, ip, cp, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), op = this, this.ellipsoid = (0, Op.l)(this, Ap, new Ip.o(.5, 1, .5)), this.ellipsoidOffset = ((0, Op.l)(this, Pp), (0, Op.l)(this, Wp, new Ip.o(0, 0, 0))), this.checkCollisions = ((0, Op.l)(this, yp), (0, Op.l)(this, Up, !1)), this.applyGravity = ((0, Op.l)(this, wp), (0, Op.l)(this, vp, !1)), this.inputs = (0, Op.l)(this, tp), this._needMoveForGravity = !1, this._oldPosition = Ip.o.Zero(), this._diffPosition = Ip.o.Zero(), this._newPosition = Ip.o.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(pp, ip) {
              let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              op._newPosition.rM(ip), op._newPosition.subtractToRef(op._oldPosition, op._diffPosition), op._diffPosition.length() > mp.b.CollisionsEpsilon && (op.position.addToRef(op._diffPosition, op._deferredPositionUpdate), op._deferOnly ? op._deferredUpdated = !0 : op.position.rM(op._deferredPositionUpdate), op.kP && cp && op.kP(cp))
            }, this.inputs = new kp(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(pp, ip) {
            ip = Yp.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ip)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Ip.o(0, 0, 0), this.cameraRotation = new Ip.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(pp) {
            this._collisionMask = isNaN(pp) ? -1 : pp
          }
          _collideWithWorld(pp) {
            let ip;
            ip = this.parent ? Ip.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ip.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const cp = this.Gl().collisionCoordinator;
            this._collider || (this._collider = cp.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Op = pp;
            this.applyGravity && (Op = pp.add(this.Gl().gravity)), cp.getNewPosition(this._oldPosition, Op, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Ip.o.Zero(), this._transformedDirection = Ip.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(pp) {
            this._needMoveForGravity = pp
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Gl().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.H)()], cp = [(0, op.H)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: pp => "ellipsoid" in pp,
              get: pp => pp.ellipsoid,
              set: (pp, ip) => {
                pp.ellipsoid = ip
              }
            },
            metadata: Ip
          }, Ap, Pp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "ellipsoidOffset" in pp,
              get: pp => pp.ellipsoidOffset,
              set: (pp, ip) => {
                pp.ellipsoidOffset = ip
              }
            },
            metadata: Ip
          }, Wp, yp), (0, Op.j)(null, null, xp, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: pp => "checkCollisions" in pp,
              get: pp => pp.checkCollisions,
              set: (pp, ip) => {
                pp.checkCollisions = ip
              }
            },
            metadata: Ip
          }, Up, wp), (0, Op.j)(null, null, Lp, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: pp => "applyGravity" in pp,
              get: pp => pp.applyGravity,
              set: (pp, ip) => {
                pp.applyGravity = ip
              }
            },
            metadata: Ip
          }, vp, tp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      Mp = !1;
    Mp || (Mp = !0, (0, Rp.g)("BABYLON.FreeCamera", qp))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
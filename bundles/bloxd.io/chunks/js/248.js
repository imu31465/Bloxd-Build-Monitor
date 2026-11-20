export const id = 248;
export const ids = [248];
export const modules = {
  39651: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => gb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(39653),
      Ub = sb(39690),
      Ib = sb(39622),
      Hb = sb(39531);
    let fb = (() => {
      var bb;
      let cb, sb, Tb, Ub, fb, Mb, Xb, nb, mb, lb, Qb, eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Jb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [];
      return bb = class {
        constructor() {
          this.keysUp = (0, kb.m)(this, eb, [38]), this.keysUpward = ((0, kb.m)(this, Cb), (0, kb.m)(this, Nb, [33])), this.keysDown = ((0, kb.m)(this, Vb), (0, kb.m)(this, Lb, [40])), this.keysDownward = ((0, kb.m)(this, ub), (0, kb.m)(this, Yb, [34])), this.keysLeft = ((0, kb.m)(this, hb), (0, kb.m)(this, Jb, [37])), this.keysRight = ((0, kb.m)(this, gb), (0, kb.m)(this, Bb, [39])), this.rotationSpeed = ((0, kb.m)(this, tb), (0, kb.m)(this, yb, .5)), this.keysRotateLeft = ((0, kb.m)(this, Pb), (0, kb.m)(this, Db, [])), this.keysRotateRight = ((0, kb.m)(this, Eb), (0, kb.m)(this, ib, [])), this.keysRotateUp = ((0, kb.m)(this, Ob), (0, kb.m)(this, Gb, [])), this.keysRotateDown = ((0, kb.m)(this, Kb), (0, kb.m)(this, Zb, [])), this._keys = ((0, kb.m)(this, zb), new Array)
        }
        attachControl(bb) {
          bb = Hb.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.EY(), this._engine = this._scene.Sm(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((cb => {
            const sb = cb.event;
            if (!sb.metaKey)
              if (cb.type === Ib.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(sb.keyCode) || -1 !== this.keysDown.indexOf(sb.keyCode) || -1 !== this.keysLeft.indexOf(sb.keyCode) || -1 !== this.keysRight.indexOf(sb.keyCode) || -1 !== this.keysUpward.indexOf(sb.keyCode) || -1 !== this.keysDownward.indexOf(sb.keyCode) || -1 !== this.keysRotateLeft.indexOf(sb.keyCode) || -1 !== this.keysRotateRight.indexOf(sb.keyCode) || -1 !== this.keysRotateUp.indexOf(sb.keyCode) || -1 !== this.keysRotateDown.indexOf(sb.keyCode)) {
                  -1 === this._keys.indexOf(sb.keyCode) && this._keys.push(sb.keyCode), bb || sb.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(sb.keyCode) || -1 !== this.keysDown.indexOf(sb.keyCode) || -1 !== this.keysLeft.indexOf(sb.keyCode) || -1 !== this.keysRight.indexOf(sb.keyCode) || -1 !== this.keysUpward.indexOf(sb.keyCode) || -1 !== this.keysDownward.indexOf(sb.keyCode) || -1 !== this.keysRotateLeft.indexOf(sb.keyCode) || -1 !== this.keysRotateRight.indexOf(sb.keyCode) || -1 !== this.keysRotateUp.indexOf(sb.keyCode) || -1 !== this.keysRotateDown.indexOf(sb.keyCode)) {
              const cb = this._keys.indexOf(sb.keyCode);
              cb >= 0 && this._keys.splice(cb, 1), bb || sb.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              cb = bb.movement.input,
              sb = cb.getEntry("keyboard", "translate"),
              kb = cb.getEntry("keyboard", "rotate"),
              Wb = kb?.sensitivity ?? 1,
              Tb = bb._localDirection.I5(0, 0, 0);
            for (let ab = 0; ab < this._keys.length; ab++) {
              const cb = this._keys[ab]; - 1 !== this.keysLeft.indexOf(cb) ? Tb.x -= 1 : -1 !== this.keysUp.indexOf(cb) ? Tb.z += 1 : -1 !== this.keysRight.indexOf(cb) ? Tb.x += 1 : -1 !== this.keysDown.indexOf(cb) ? Tb.z -= 1 : -1 !== this.keysUpward.indexOf(cb) ? Tb.y += 1 : -1 !== this.keysDownward.indexOf(cb) ? Tb.y -= 1 : -1 !== this.keysRotateLeft.indexOf(cb) ? kb && (bb.cameraRotation.y -= this._getLocalRotation() * Wb) : -1 !== this.keysRotateRight.indexOf(cb) ? kb && (bb.cameraRotation.y += this._getLocalRotation() * Wb) : -1 !== this.keysRotateUp.indexOf(cb) ? kb && (bb.cameraRotation.x -= this._getLocalRotation() * Wb) : -1 !== this.keysRotateDown.indexOf(cb) && kb && (bb.cameraRotation.x += this._getLocalRotation() * Wb)
            }
            if (sb && (0 !== Tb.x || 0 !== Tb.y || 0 !== Tb.z)) {
              const cb = bb._computeLocalCameraSpeed() * (sb.sensitivity ?? 1);
              Tb.normalize().scaleInPlace(cb), bb.EY().useRightHandedSystem && (Tb.z *= -1), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), ab.p.TransformNormalToRef(Tb, bb._cameraTransformMatrix, bb._transformedDirection), bb.cameraDirection.addInPlace(bb._transformedDirection)
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
          const bb = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * bb
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], Tb = [(0, Wb.E)()], Ub = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], nb = [(0, Wb.E)()], mb = [(0, Wb.E)()], lb = [(0, Wb.E)()], Qb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, cb) => {
              bb.keysUp = cb
            }
          },
          metadata: ab
        }, eb, Cb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUpward" in bb,
            get: bb => bb.keysUpward,
            set: (bb, cb) => {
              bb.keysUpward = cb
            }
          },
          metadata: ab
        }, Nb, Vb), (0, kb.j)(null, null, Tb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, cb) => {
              bb.keysDown = cb
            }
          },
          metadata: ab
        }, Lb, ub), (0, kb.j)(null, null, Ub, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDownward" in bb,
            get: bb => bb.keysDownward,
            set: (bb, cb) => {
              bb.keysDownward = cb
            }
          },
          metadata: ab
        }, Yb, hb), (0, kb.j)(null, null, fb, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, cb) => {
              bb.keysLeft = cb
            }
          },
          metadata: ab
        }, Jb, gb), (0, kb.j)(null, null, Mb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, cb) => {
              bb.keysRight = cb
            }
          },
          metadata: ab
        }, Bb, tb), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "rotationSpeed" in bb,
            get: bb => bb.rotationSpeed,
            set: (bb, cb) => {
              bb.rotationSpeed = cb
            }
          },
          metadata: ab
        }, yb, Pb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateLeft" in bb,
            get: bb => bb.keysRotateLeft,
            set: (bb, cb) => {
              bb.keysRotateLeft = cb
            }
          },
          metadata: ab
        }, Db, Eb), (0, kb.j)(null, null, mb, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateRight" in bb,
            get: bb => bb.keysRotateRight,
            set: (bb, cb) => {
              bb.keysRotateRight = cb
            }
          },
          metadata: ab
        }, ib, Ob), (0, kb.j)(null, null, lb, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateUp" in bb,
            get: bb => bb.keysRotateUp,
            set: (bb, cb) => {
              bb.keysRotateUp = cb
            }
          },
          metadata: ab
        }, Gb, Kb), (0, kb.j)(null, null, Qb, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateDown" in bb,
            get: bb => bb.keysRotateDown,
            set: (bb, cb) => {
              bb.keysRotateDown = cb
            }
          },
          metadata: ab
        }, Zb, zb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })();
    Ub.b.FreeCameraKeyboardMoveInput = fb;
    var Mb = sb(36683),
      Xb = sb(39613);
    let nb = (() => {
      var bb;
      let cb, sb, ab = [],
        Tb = [],
        Ub = [],
        Ib = [];
      return bb = class {
        _applyPointerRotation(bb, cb) {
          this._pointerConditions.button = this._currentActiveButton;
          const sb = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!sb || "rotate" !== sb.interaction) return;
          const kb = sb.WK ?? sb.sensitivity ?? 1 / this.angularSensibility,
            Wb = sb.IK ?? sb.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += bb * kb, this.camera.cameraRotation.x += cb * Wb
        }
        constructor() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = bb, this.buttons = (0, kb.m)(this, ab, [0, 1, 2]), this.angularSensibility = ((0, kb.m)(this, Tb), (0, kb.m)(this, Ub, 2e3)), this._pointerInput = (0, kb.m)(this, Ib), this._previousPosition = null, this.onPointerMovedObservable = new Mb.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(bb) {
          bb = Hb.g.BackCompatCameraNoPreventDefault(arguments);
          const cb = this.camera.Sm(),
            sb = cb.getInputElement();
          this._pointerInput || (this._pointerInput = kb => {
            const Wb = kb.event,
              ab = "touch" === Wb.pointerType;
            if (!this.touchEnabled && ab) return;
            if (kb.type !== Xb.b.POINTERMOVE && -1 === this.buttons.indexOf(Wb.button)) return;
            const Tb = Wb.target;
            if (kb.type === Xb.b.POINTERDOWN) {
              if (ab && -1 !== this._activePointerId || !ab && -1 !== this._currentActiveButton) return;
              this._activePointerId = Wb.pointerId;
              try {
                Tb?.setPointerCapture(Wb.pointerId)
              } catch (Ub) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Wb.button), this._previousPosition = {
                x: Wb.clientX,
                y: Wb.clientY
              }, bb || (Wb.preventDefault(), sb && sb.focus()), cb.isPointerLock && this._onMouseMove && this._onMouseMove(kb.event)
            } else if (kb.type === Xb.b.POINTERUP) {
              if (ab && this._activePointerId !== Wb.pointerId || !ab && this._currentActiveButton !== Wb.button) return;
              try {
                Tb?.releasePointerCapture(Wb.pointerId)
              } catch (Ub) {}
              this._currentActiveButton = -1, this._previousPosition = null, bb || Wb.preventDefault(), this._activePointerId = -1
            } else if (kb.type === Xb.b.POINTERMOVE && (this._activePointerId === Wb.pointerId || !ab))
              if (cb.isPointerLock && this._onMouseMove) this._onMouseMove(kb.event);
              else if (this._previousPosition) {
              const cb = this.camera._calculateHandednessMultiplier(),
                sb = (Wb.clientX - this._previousPosition.x) * cb,
                kb = (Wb.clientY - this._previousPosition.y) * cb;
              this._allowCameraRotation && this._applyPointerRotation(sb, kb), this.onPointerMovedObservable.notifyObservers({
                offsetX: sb,
                offsetY: kb
              }), this._previousPosition = {
                x: Wb.clientX,
                y: Wb.clientY
              }, bb || Wb.preventDefault()
            }
          }), this._onMouseMove = sb => {
            if (!cb.isPointerLock) return;
            const kb = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(sb.movementX * kb, sb.movementY * kb), this._previousPosition = null, bb || sb.preventDefault()
          }, this._observer = this.camera.EY()._inputManager._addCameraPointerObserver(this._pointerInput, Xb.b.POINTERDOWN | Xb.b.POINTERUP | Xb.b.POINTERMOVE), sb && (this._contextMenuBind = bb => this.onContextMenu(bb), sb.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(bb) {
          bb.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.EY()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const bb = this.camera.Sm().getInputElement();
              bb && bb.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: bb => "buttons" in bb,
            get: bb => bb.buttons,
            set: (bb, cb) => {
              bb.buttons = cb
            }
          },
          metadata: Hb
        }, ab, Tb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSensibility" in bb,
            get: bb => bb.angularSensibility,
            set: (bb, cb) => {
              bb.angularSensibility = cb
            }
          },
          metadata: Hb
        }, Ub, Ib), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })(), bb
    })();
    Ub.b.FreeCameraMouseInput = nb;
    var mb = sb(39630);
    let lb = (() => {
      var bb;
      let cb, sb, ab, Tb = [],
        Ub = [],
        Ib = [],
        fb = [],
        nb = [],
        lb = [];
      return bb = class {
        constructor() {
          this.wheelPrecisionX = (0, kb.m)(this, Tb, 3), this.wheelPrecisionY = ((0, kb.m)(this, Ub), (0, kb.m)(this, Ib, 3)), this.wheelPrecisionZ = ((0, kb.m)(this, fb), (0, kb.m)(this, nb, 3)), this.onChangedObservable = ((0, kb.m)(this, lb), new Mb.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(bb) {
          bb = Hb.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = cb => {
            if (cb.type !== Xb.b.POINTERWHEEL) return;
            const sb = cb.event,
              kb = sb.deltaMode === mb.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * kb * sb.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * kb * sb.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * kb * sb.deltaZ / this._normalize, sb.preventDefault && (bb || sb.preventDefault())
          }, this._observer = this.camera.EY()._inputManager._addCameraPointerObserver(this._wheel, Xb.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.EY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionX" in bb,
            get: bb => bb.wheelPrecisionX,
            set: (bb, cb) => {
              bb.wheelPrecisionX = cb
            }
          },
          metadata: Hb
        }, Tb, Ub), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionY" in bb,
            get: bb => bb.wheelPrecisionY,
            set: (bb, cb) => {
              bb.wheelPrecisionY = cb
            }
          },
          metadata: Hb
        }, Ib, fb), (0, kb.j)(null, null, ab, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionZ" in bb,
            get: bb => bb.wheelPrecisionZ,
            set: (bb, cb) => {
              bb.wheelPrecisionZ = cb
            }
          },
          metadata: Hb
        }, nb, lb), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })(), bb
    })();
    var Qb;
    ! function(bb) {
      bb[bb.MoveRelative = 0] = "MoveRelative", bb[bb.RotateRelative = 1] = "RotateRelative", bb[bb.MoveScene = 2] = "MoveScene"
    }(Qb || (Qb = {}));
    let eb = (() => {
      var bb;
      let cb, sb, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb = lb,
        mb = [];
      return bb = class extends nb {
        constructor() {
          super(...arguments), this.camera = (0, kb.m)(this, mb), this._moveRelative = ab.p.Zero(), this._rotateRelative = ab.p.Zero(), this._moveScene = ab.p.Zero(), this._wheelXAction = Qb.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Qb.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(bb) {
          null === bb && this._wheelXAction !== Qb.MoveRelative || (this._wheelXAction = Qb.MoveRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Qb.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(bb) {
          null === bb && this._wheelYAction !== Qb.MoveRelative || (this._wheelYAction = Qb.MoveRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Qb.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(bb) {
          null === bb && this._wheelZAction !== Qb.MoveRelative || (this._wheelZAction = Qb.MoveRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Qb.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(bb) {
          null === bb && this._wheelXAction !== Qb.RotateRelative || (this._wheelXAction = Qb.RotateRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Qb.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(bb) {
          null === bb && this._wheelYAction !== Qb.RotateRelative || (this._wheelYAction = Qb.RotateRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Qb.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(bb) {
          null === bb && this._wheelZAction !== Qb.RotateRelative || (this._wheelZAction = Qb.RotateRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Qb.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(bb) {
          null === bb && this._wheelXAction !== Qb.MoveScene || (this._wheelXAction = Qb.MoveScene, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Qb.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(bb) {
          null === bb && this._wheelYAction !== Qb.MoveScene || (this._wheelYAction = Qb.MoveScene, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Qb.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(bb) {
          null === bb && this._wheelZAction !== Qb.MoveScene || (this._wheelZAction = Qb.MoveScene, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Qb.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.I6(0), this._rotateRelative.I6(0), this._moveScene.I6(0), this._updateCamera(), this.camera.EY().useRightHandedSystem && (this._moveRelative.z *= -1);
          const bb = ab.e.Zero();
          this.camera.getViewMatrix().invertToRef(bb);
          const cb = ab.p.Zero();
          ab.p.TransformNormalToRef(this._moveRelative, bb, cb), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(cb), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(bb, cb, sb) {
          if (0 === bb) return;
          if (null === cb || null === sb) return;
          let kb = null;
          switch (cb) {
            case Qb.MoveRelative:
              kb = this._moveRelative;
              break;
            case Qb.RotateRelative:
              kb = this._rotateRelative;
              break;
            case Qb.MoveScene:
              kb = this._moveScene
          }
          switch (sb) {
            case 0:
              kb.set(bb, 0, 0);
              break;
            case 1:
              kb.set(0, bb, 0);
              break;
            case 2:
              kb.set(0, 0, bb)
          }
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(nb[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], Tb = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], (0, kb.j)(bb, null, cb, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveRelative" in bb,
            set: (bb, cb) => {
              bb.wheelXMoveRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, sb, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveRelative" in bb,
            set: (bb, cb) => {
              bb.wheelYMoveRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Tb, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveRelative" in bb,
            set: (bb, cb) => {
              bb.wheelZMoveRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Ub, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXRotateRelative" in bb,
            set: (bb, cb) => {
              bb.wheelXRotateRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Ib, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYRotateRelative" in bb,
            set: (bb, cb) => {
              bb.wheelYRotateRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Hb, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZRotateRelative" in bb,
            set: (bb, cb) => {
              bb.wheelZRotateRelative = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, fb, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveScene" in bb,
            set: (bb, cb) => {
              bb.wheelXMoveScene = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Mb, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveScene" in bb,
            set: (bb, cb) => {
              bb.wheelYMoveScene = cb
            }
          },
          metadata: ab
        }, null, mb), (0, kb.j)(bb, null, Xb, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveScene" in bb,
            set: (bb, cb) => {
              bb.wheelZMoveScene = cb
            }
          },
          metadata: ab
        }, null, mb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })();
    Ub.b.FreeCameraMouseWheelInput = eb;
    let Cb = (() => {
      var bb;
      let cb, sb, Tb = [],
        Ub = [],
        Ib = [],
        fb = [];
      return bb = class {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = bb, this.touchAngularSensibility = (0, kb.m)(this, Tb, 2e5), this.touchMoveSensibility = ((0, kb.m)(this, Ub), (0, kb.m)(this, Ib, 250)), this.singleFingerRotate = ((0, kb.m)(this, fb), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Hb.g.IsSafari()
        }
        attachControl(bb) {
          bb = Hb.g.BackCompatCameraNoPreventDefault(arguments);
          let cb = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = sb => {
              const kb = sb.event,
                Wb = "mouse" === kb.pointerType || this._isSafari && "undefined" === typeof kb.pointerType;
              if (this.allowMouse || !Wb)
                if (sb.type === Xb.b.POINTERDOWN) {
                  if (bb || kb.preventDefault(), this._pointerPressed.push(kb.pointerId), 1 !== this._pointerPressed.length) return;
                  cb = {
                    x: kb.clientX,
                    y: kb.clientY
                  }
                } else if (sb.type === Xb.b.POINTERUP) {
                bb || kb.preventDefault();
                const sb = this._pointerPressed.indexOf(kb.pointerId);
                if (-1 === sb) return;
                if (this._pointerPressed.splice(sb, 1), 0 != sb) return;
                cb = null, this._offsetX = null, this._offsetY = null
              } else if (sb.type === Xb.b.POINTERMOVE) {
                if (bb || kb.preventDefault(), !cb) return;
                if (0 != this._pointerPressed.indexOf(kb.pointerId)) return;
                this._offsetX = kb.clientX - cb.x, this._offsetY = -(kb.clientY - cb.y)
              }
            }), this._observer = this.camera.EY()._inputManager._addCameraPointerObserver(this._pointerInput, Xb.b.POINTERDOWN | Xb.b.POINTERUP | Xb.b.POINTERMOVE), this._onLostFocus) {
            const bb = this.camera.Sm().getInputElement();
            bb && bb.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.EY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const bb = this.camera.Sm().getInputElement();
              bb && bb.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const bb = this.camera,
            cb = bb.movement.input,
            sb = cb.getEntry("touch", "rotate"),
            kb = cb.getEntry("touch", "translate"),
            Wb = bb._calculateHandednessMultiplier(),
            Tb = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (sb) {
            const cb = sb.sensitivity ?? 1 / this.touchAngularSensibility;
            bb.cameraRotation.y = this._offsetX * Wb * cb, Tb && (bb.cameraRotation.x = -this._offsetY * Wb * cb)
          }
          if (!Tb && kb) {
            const cb = bb._computeLocalCameraSpeed(),
              sb = kb.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Wb = ab.m.Fm[0];
            Wb.I5(0, 0, cb * this._offsetY * sb), ab.e.RotationYawPitchRollToRef(bb.rotation.y, bb.rotation.x, 0, bb._cameraRotationMatrix), ab.p.TransformCoordinatesToRef(Wb, bb._cameraRotationMatrix, Wb), bb.cameraDirection.addInPlace(Wb)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchAngularSensibility" in bb,
            get: bb => bb.touchAngularSensibility,
            set: (bb, cb) => {
              bb.touchAngularSensibility = cb
            }
          },
          metadata: ab
        }, Tb, Ub), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchMoveSensibility" in bb,
            get: bb => bb.touchMoveSensibility,
            set: (bb, cb) => {
              bb.touchMoveSensibility = cb
            }
          },
          metadata: ab
        }, Ib, fb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })();
    Ub.b.FreeCameraTouchInput = Cb;
    var Nb, Vb, Lb, ub = sb(39296);
    class Yb extends Ub.c {
      constructor(bb) {
        super(bb), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new fb), this
      }
      addMouse() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new nb(bb), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new eb, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Cb), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Nb = Yb.prototype).addDeviceOrientation ?? (Nb.addDeviceOrientation = (0, ub.e)("FreeCameraInputsManager", "addDeviceOrientation")), (Vb = Yb.prototype).addVirtualJoystick ?? (Vb.addVirtualJoystick = (0, ub.e)("FreeCameraInputsManager", "addVirtualJoystick")), (Lb = Yb.prototype).addGamepad ?? (Lb.addGamepad = (0, ub.e)("FreeCameraInputsManager", "addGamepad"));
    var hb = sb(39311),
      Jb = sb(36698);
    let gb = (() => {
        var bb;
        let cb, sb, Ub, Ib, fb = Tb.f,
          Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [],
          eb = [],
          Cb = [];
        return bb = class extends fb {
          get angularSensibility() {
            const bb = this.inputs.attached.mouse;
            return bb ? bb.angularSensibility : 0
          }
          set angularSensibility(bb) {
            const cb = this.inputs.attached.mouse;
            cb && (cb.angularSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysUp = bb)
          }
          get keysUpward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUpward : []
          }
          set keysUpward(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysUpward = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysDown = bb)
          }
          get keysDownward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDownward : []
          }
          set keysDownward(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysDownward = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRight = bb)
          }
          get keysRotateLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateLeft : []
          }
          set keysRotateLeft(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRotateLeft = bb)
          }
          get keysRotateRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateRight : []
          }
          set keysRotateRight(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRotateRight = bb)
          }
          get keysRotateUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateUp : []
          }
          set keysRotateUp(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRotateUp = bb)
          }
          get keysRotateDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateDown : []
          }
          set keysRotateDown(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRotateDown = bb)
          }
          constructor(bb, cb, sb) {
            var Wb;
            super(bb, cb, sb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Wb = this, this.ellipsoid = (0, kb.m)(this, Mb, new ab.p(.5, 1, .5)), this.ellipsoidOffset = ((0, kb.m)(this, Xb), (0, kb.m)(this, nb, new ab.p(0, 0, 0))), this.checkCollisions = ((0, kb.m)(this, mb), (0, kb.m)(this, lb, !1)), this.applyGravity = ((0, kb.m)(this, Qb), (0, kb.m)(this, eb, !1)), this.inputs = (0, kb.m)(this, Cb), this._needMoveForGravity = !1, this._oldPosition = ab.p.Zero(), this._diffPosition = ab.p.Zero(), this._newPosition = ab.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(bb, cb) {
              let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Wb._newPosition.ssb(cb), Wb._newPosition.subtractToRef(Wb._oldPosition, Wb._diffPosition), Wb._diffPosition.length() > hb.b.CollisionsEpsilon && (Wb.position.addToRef(Wb._diffPosition, Wb._deferredPositionUpdate), Wb._deferOnly ? Wb._deferredUpdated = !0 : Wb.position.ssb(Wb._deferredPositionUpdate), Wb.uX && sb && Wb.uX(sb))
            }, this.inputs = new Yb(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(bb, cb) {
            cb = Hb.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(cb)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new ab.p(0, 0, 0), this.cameraRotation = new ab.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(bb) {
            this._collisionMask = isNaN(bb) ? -1 : bb
          }
          _collideWithWorld(bb) {
            let cb;
            cb = this.parent ? ab.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, cb.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const sb = this.EY().collisionCoordinator;
            this._collider || (this._collider = sb.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let kb = bb;
            this.applyGravity && (kb = bb.add(this.EY().gravity)), sb.getNewPosition(this._oldPosition, kb, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = ab.p.Zero(), this._transformedDirection = ab.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(bb) {
            this._needMoveForGravity = bb
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.EY().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(fb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.C)()], sb = [(0, Wb.C)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoid" in bb,
              get: bb => bb.ellipsoid,
              set: (bb, cb) => {
                bb.ellipsoid = cb
              }
            },
            metadata: ab
          }, Mb, Xb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoidOffset" in bb,
              get: bb => bb.ellipsoidOffset,
              set: (bb, cb) => {
                bb.ellipsoidOffset = cb
              }
            },
            metadata: ab
          }, nb, mb), (0, kb.j)(null, null, Ub, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: bb => "checkCollisions" in bb,
              get: bb => bb.checkCollisions,
              set: (bb, cb) => {
                bb.checkCollisions = cb
              }
            },
            metadata: ab
          }, lb, Qb), (0, kb.j)(null, null, Ib, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyGravity" in bb,
              get: bb => bb.applyGravity,
              set: (bb, cb) => {
                bb.applyGravity = cb
              }
            },
            metadata: ab
          }, eb, Cb), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Bb = !1;
    Bb || (Bb = !0, (0, Jb.h)("BABYLON.FreeCamera", gb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 250;
export const ids = [250];
export const modules = {
  39661: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Db
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(39663),
      Lb = hb(39686),
      Yb = hb(39647),
      Sb = hb(39559);
    let ab = (() => {
      var bb;
      let ub, hb, Ub, Lb, ab, Hb, wb, Zb, Xb, pb, ob, Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
        nb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [],
        ib = [],
        vb = [],
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [],
        mb = [];
      return bb = class {
        constructor() {
          this.keysUp = (0, Bb.k)(this, Ab, [38]), this.keysUpward = ((0, Bb.k)(this, lb), (0, Bb.k)(this, Kb, [33])), this.keysDown = ((0, Bb.k)(this, Wb), (0, Bb.k)(this, Cb, [40])), this.keysDownward = ((0, Bb.k)(this, db), (0, Bb.k)(this, rb, [34])), this.keysLeft = ((0, Bb.k)(this, jb), (0, Bb.k)(this, nb, [37])), this.keysRight = ((0, Bb.k)(this, Db), (0, Bb.k)(this, xb, [39])), this.rotationSpeed = ((0, Bb.k)(this, zb), (0, Bb.k)(this, gb, .5)), this.keysRotateLeft = ((0, Bb.k)(this, ib), (0, Bb.k)(this, vb, [])), this.keysRotateRight = ((0, Bb.k)(this, tb), (0, Bb.k)(this, Jb, [])), this.keysRotateUp = ((0, Bb.k)(this, eb), (0, Bb.k)(this, Nb, [])), this.keysRotateDown = ((0, Bb.k)(this, sb), (0, Bb.k)(this, Mb, [])), this._keys = ((0, Bb.k)(this, mb), new Array)
        }
        attachControl(bb) {
          bb = Sb.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZN(), this._engine = this._scene.UX(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ub => {
            const hb = ub.event;
            if (!hb.metaKey)
              if (ub.type === Yb.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(hb.keyCode) || -1 !== this.keysDown.indexOf(hb.keyCode) || -1 !== this.keysLeft.indexOf(hb.keyCode) || -1 !== this.keysRight.indexOf(hb.keyCode) || -1 !== this.keysUpward.indexOf(hb.keyCode) || -1 !== this.keysDownward.indexOf(hb.keyCode) || -1 !== this.keysRotateLeft.indexOf(hb.keyCode) || -1 !== this.keysRotateRight.indexOf(hb.keyCode) || -1 !== this.keysRotateUp.indexOf(hb.keyCode) || -1 !== this.keysRotateDown.indexOf(hb.keyCode)) {
                  -1 === this._keys.indexOf(hb.keyCode) && this._keys.push(hb.keyCode), bb || hb.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(hb.keyCode) || -1 !== this.keysDown.indexOf(hb.keyCode) || -1 !== this.keysLeft.indexOf(hb.keyCode) || -1 !== this.keysRight.indexOf(hb.keyCode) || -1 !== this.keysUpward.indexOf(hb.keyCode) || -1 !== this.keysDownward.indexOf(hb.keyCode) || -1 !== this.keysRotateLeft.indexOf(hb.keyCode) || -1 !== this.keysRotateRight.indexOf(hb.keyCode) || -1 !== this.keysRotateUp.indexOf(hb.keyCode) || -1 !== this.keysRotateDown.indexOf(hb.keyCode)) {
              const ub = this._keys.indexOf(hb.keyCode);
              ub >= 0 && this._keys.splice(ub, 1), bb || hb.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              ub = bb.movement.input,
              hb = ub.getEntry("keyboard", "translate"),
              Bb = ub.getEntry("keyboard", "rotate"),
              Ob = Bb?.sensitivity ?? 1,
              Ub = bb._localDirection.M_(0, 0, 0);
            for (let Gb = 0; Gb < this._keys.length; Gb++) {
              const ub = this._keys[Gb]; - 1 !== this.keysLeft.indexOf(ub) ? Ub.x -= 1 : -1 !== this.keysUp.indexOf(ub) ? Ub.z += 1 : -1 !== this.keysRight.indexOf(ub) ? Ub.x += 1 : -1 !== this.keysDown.indexOf(ub) ? Ub.z -= 1 : -1 !== this.keysUpward.indexOf(ub) ? Ub.y += 1 : -1 !== this.keysDownward.indexOf(ub) ? Ub.y -= 1 : -1 !== this.keysRotateLeft.indexOf(ub) ? Bb && (bb.cameraRotation.y -= this._getLocalRotation() * Ob) : -1 !== this.keysRotateRight.indexOf(ub) ? Bb && (bb.cameraRotation.y += this._getLocalRotation() * Ob) : -1 !== this.keysRotateUp.indexOf(ub) ? Bb && (bb.cameraRotation.x -= this._getLocalRotation() * Ob) : -1 !== this.keysRotateDown.indexOf(ub) && Bb && (bb.cameraRotation.x += this._getLocalRotation() * Ob)
            }
            if (hb && (0 !== Ub.x || 0 !== Ub.y || 0 !== Ub.z)) {
              const ub = bb._computeLocalCameraSpeed() * (hb.sensitivity ?? 1);
              Ub.normalize().scaleInPlace(ub), bb.ZN().useRightHandedSystem && (Ub.z *= -1), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), Gb.q.TransformNormalToRef(Ub, bb._cameraTransformMatrix, bb._transformedDirection), bb.cameraDirection.addInPlace(bb._transformedDirection)
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
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Ub = [(0, Ob.K)()], Lb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.K)()], wb = [(0, Ob.K)()], Zb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], pb = [(0, Ob.K)()], ob = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, ub) => {
              bb.keysUp = ub
            }
          },
          metadata: Gb
        }, Ab, lb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUpward" in bb,
            get: bb => bb.keysUpward,
            set: (bb, ub) => {
              bb.keysUpward = ub
            }
          },
          metadata: Gb
        }, Kb, Wb), (0, Bb.h)(null, null, Ub, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, ub) => {
              bb.keysDown = ub
            }
          },
          metadata: Gb
        }, Cb, db), (0, Bb.h)(null, null, Lb, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDownward" in bb,
            get: bb => bb.keysDownward,
            set: (bb, ub) => {
              bb.keysDownward = ub
            }
          },
          metadata: Gb
        }, rb, jb), (0, Bb.h)(null, null, ab, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, ub) => {
              bb.keysLeft = ub
            }
          },
          metadata: Gb
        }, nb, Db), (0, Bb.h)(null, null, Hb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, ub) => {
              bb.keysRight = ub
            }
          },
          metadata: Gb
        }, xb, zb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "rotationSpeed" in bb,
            get: bb => bb.rotationSpeed,
            set: (bb, ub) => {
              bb.rotationSpeed = ub
            }
          },
          metadata: Gb
        }, gb, ib), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateLeft" in bb,
            get: bb => bb.keysRotateLeft,
            set: (bb, ub) => {
              bb.keysRotateLeft = ub
            }
          },
          metadata: Gb
        }, vb, tb), (0, Bb.h)(null, null, Xb, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateRight" in bb,
            get: bb => bb.keysRotateRight,
            set: (bb, ub) => {
              bb.keysRotateRight = ub
            }
          },
          metadata: Gb
        }, Jb, eb), (0, Bb.h)(null, null, pb, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateUp" in bb,
            get: bb => bb.keysRotateUp,
            set: (bb, ub) => {
              bb.keysRotateUp = ub
            }
          },
          metadata: Gb
        }, Nb, sb), (0, Bb.h)(null, null, ob, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateDown" in bb,
            get: bb => bb.keysRotateDown,
            set: (bb, ub) => {
              bb.keysRotateDown = ub
            }
          },
          metadata: Gb
        }, Mb, mb), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb
    })();
    Lb.b.FreeCameraKeyboardMoveInput = ab;
    var Hb = hb(36753),
      wb = hb(39638);
    let Zb = (() => {
      var bb;
      let ub, hb, Gb = [],
        Ub = [],
        Lb = [],
        Yb = [];
      return bb = class {
        _applyPointerRotation(bb, ub) {
          this._pointerConditions.button = this._currentActiveButton;
          const hb = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!hb || "rotate" !== hb.interaction) return;
          const Bb = hb.KV ?? hb.sensitivity ?? 1 / this.angularSensibility,
            Ob = hb.rV ?? hb.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += bb * Bb, this.camera.cameraRotation.x += ub * Ob
        }
        constructor() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = bb, this.buttons = (0, Bb.k)(this, Gb, [0, 1, 2]), this.angularSensibility = ((0, Bb.k)(this, Ub), (0, Bb.k)(this, Lb, 2e3)), this._pointerInput = (0, Bb.k)(this, Yb), this._previousPosition = null, this.onPointerMovedObservable = new Hb.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(bb) {
          bb = Sb.k.BackCompatCameraNoPreventDefault(arguments);
          const ub = this.camera.UX(),
            hb = ub.getInputElement();
          this._pointerInput || (this._pointerInput = Bb => {
            const Ob = Bb.event,
              Gb = "touch" === Ob.pointerType;
            if (!this.touchEnabled && Gb) return;
            if (Bb.type !== wb.d.POINTERMOVE && -1 === this.buttons.indexOf(Ob.button)) return;
            const Ub = Ob.target;
            if (Bb.type === wb.d.POINTERDOWN) {
              if (Gb && -1 !== this._activePointerId || !Gb && -1 !== this._currentActiveButton) return;
              this._activePointerId = Ob.pointerId;
              try {
                Ub?.setPointerCapture(Ob.pointerId)
              } catch (Lb) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Ob.button), this._previousPosition = {
                x: Ob.clientX,
                y: Ob.clientY
              }, bb || (Ob.preventDefault(), hb && hb.focus()), ub.isPointerLock && this._onMouseMove && this._onMouseMove(Bb.event)
            } else if (Bb.type === wb.d.POINTERUP) {
              if (Gb && this._activePointerId !== Ob.pointerId || !Gb && this._currentActiveButton !== Ob.button) return;
              try {
                Ub?.releasePointerCapture(Ob.pointerId)
              } catch (Lb) {}
              this._currentActiveButton = -1, this._previousPosition = null, bb || Ob.preventDefault(), this._activePointerId = -1
            } else if (Bb.type === wb.d.POINTERMOVE && (this._activePointerId === Ob.pointerId || !Gb))
              if (ub.isPointerLock && this._onMouseMove) this._onMouseMove(Bb.event);
              else if (this._previousPosition) {
              const ub = this.camera._calculateHandednessMultiplier(),
                hb = (Ob.clientX - this._previousPosition.x) * ub,
                Bb = (Ob.clientY - this._previousPosition.y) * ub;
              this._allowCameraRotation && this._applyPointerRotation(hb, Bb), this.onPointerMovedObservable.notifyObservers({
                offsetX: hb,
                offsetY: Bb
              }), this._previousPosition = {
                x: Ob.clientX,
                y: Ob.clientY
              }, bb || Ob.preventDefault()
            }
          }), this._onMouseMove = hb => {
            if (!ub.isPointerLock) return;
            const Bb = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(hb.movementX * Bb, hb.movementY * Bb), this._previousPosition = null, bb || hb.preventDefault()
          }, this._observer = this.camera.ZN()._inputManager._addCameraPointerObserver(this._pointerInput, wb.d.POINTERDOWN | wb.d.POINTERUP | wb.d.POINTERMOVE), hb && (this._contextMenuBind = bb => this.onContextMenu(bb), hb.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(bb) {
          bb.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.ZN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const bb = this.camera.UX().getInputElement();
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
        const Sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: bb => "buttons" in bb,
            get: bb => bb.buttons,
            set: (bb, ub) => {
              bb.buttons = ub
            }
          },
          metadata: Sb
        }, Gb, Ub), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSensibility" in bb,
            get: bb => bb.angularSensibility,
            set: (bb, ub) => {
              bb.angularSensibility = ub
            }
          },
          metadata: Sb
        }, Lb, Yb), Sb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sb
        })
      })(), bb
    })();
    Lb.b.FreeCameraMouseInput = Zb;
    var Xb = hb(39650);
    let pb = (() => {
      var bb;
      let ub, hb, Gb, Ub = [],
        Lb = [],
        Yb = [],
        ab = [],
        Zb = [],
        pb = [];
      return bb = class {
        constructor() {
          this.wheelPrecisionX = (0, Bb.k)(this, Ub, 3), this.wheelPrecisionY = ((0, Bb.k)(this, Lb), (0, Bb.k)(this, Yb, 3)), this.wheelPrecisionZ = ((0, Bb.k)(this, ab), (0, Bb.k)(this, Zb, 3)), this.onChangedObservable = ((0, Bb.k)(this, pb), new Hb.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(bb) {
          bb = Sb.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = ub => {
            if (ub.type !== wb.d.POINTERWHEEL) return;
            const hb = ub.event,
              Bb = hb.deltaMode === Xb.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Bb * hb.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Bb * hb.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Bb * hb.deltaZ / this._normalize, hb.preventDefault && (bb || hb.preventDefault())
          }, this._observer = this.camera.ZN()._inputManager._addCameraPointerObserver(this._wheel, wb.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.ZN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionX" in bb,
            get: bb => bb.wheelPrecisionX,
            set: (bb, ub) => {
              bb.wheelPrecisionX = ub
            }
          },
          metadata: Sb
        }, Ub, Lb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionY" in bb,
            get: bb => bb.wheelPrecisionY,
            set: (bb, ub) => {
              bb.wheelPrecisionY = ub
            }
          },
          metadata: Sb
        }, Yb, ab), (0, Bb.h)(null, null, Gb, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionZ" in bb,
            get: bb => bb.wheelPrecisionZ,
            set: (bb, ub) => {
              bb.wheelPrecisionZ = ub
            }
          },
          metadata: Sb
        }, Zb, pb), Sb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sb
        })
      })(), bb
    })();
    var ob;
    ! function(bb) {
      bb[bb.MoveRelative = 0] = "MoveRelative", bb[bb.RotateRelative = 1] = "RotateRelative", bb[bb.MoveScene = 2] = "MoveScene"
    }(ob || (ob = {}));
    let Ab = (() => {
      var bb;
      let ub, hb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb = pb,
        Xb = [];
      return bb = class extends Zb {
        constructor() {
          super(...arguments), this.camera = (0, Bb.k)(this, Xb), this._moveRelative = Gb.q.Zero(), this._rotateRelative = Gb.q.Zero(), this._moveScene = Gb.q.Zero(), this._wheelXAction = ob.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = ob.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(bb) {
          null === bb && this._wheelXAction !== ob.MoveRelative || (this._wheelXAction = ob.MoveRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== ob.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(bb) {
          null === bb && this._wheelYAction !== ob.MoveRelative || (this._wheelYAction = ob.MoveRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== ob.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(bb) {
          null === bb && this._wheelZAction !== ob.MoveRelative || (this._wheelZAction = ob.MoveRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== ob.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(bb) {
          null === bb && this._wheelXAction !== ob.RotateRelative || (this._wheelXAction = ob.RotateRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== ob.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(bb) {
          null === bb && this._wheelYAction !== ob.RotateRelative || (this._wheelYAction = ob.RotateRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== ob.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(bb) {
          null === bb && this._wheelZAction !== ob.RotateRelative || (this._wheelZAction = ob.RotateRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== ob.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(bb) {
          null === bb && this._wheelXAction !== ob.MoveScene || (this._wheelXAction = ob.MoveScene, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== ob.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(bb) {
          null === bb && this._wheelYAction !== ob.MoveScene || (this._wheelYAction = ob.MoveScene, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== ob.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(bb) {
          null === bb && this._wheelZAction !== ob.MoveScene || (this._wheelZAction = ob.MoveScene, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== ob.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.N9(0), this._rotateRelative.N9(0), this._moveScene.N9(0), this._updateCamera(), this.camera.ZN().useRightHandedSystem && (this._moveRelative.z *= -1);
          const bb = Gb.d.Zero();
          this.camera.getViewMatrix().invertToRef(bb);
          const ub = Gb.q.Zero();
          Gb.q.TransformNormalToRef(this._moveRelative, bb, ub), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ub), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(bb, ub, hb) {
          if (0 === bb) return;
          if (null === ub || null === hb) return;
          let Bb = null;
          switch (ub) {
            case ob.MoveRelative:
              Bb = this._moveRelative;
              break;
            case ob.RotateRelative:
              Bb = this._rotateRelative;
              break;
            case ob.MoveScene:
              Bb = this._moveScene
          }
          switch (hb) {
            case 0:
              Bb.set(bb, 0, 0);
              break;
            case 1:
              Bb.set(0, bb, 0);
              break;
            case 2:
              Bb.set(0, 0, bb)
          }
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zb[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Ub = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.K)()], wb = [(0, Ob.K)()], (0, Bb.h)(bb, null, ub, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveRelative" in bb,
            set: (bb, ub) => {
              bb.wheelXMoveRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, hb, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveRelative" in bb,
            set: (bb, ub) => {
              bb.wheelYMoveRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, Ub, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveRelative" in bb,
            set: (bb, ub) => {
              bb.wheelZMoveRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, Lb, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXRotateRelative" in bb,
            set: (bb, ub) => {
              bb.wheelXRotateRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, Yb, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYRotateRelative" in bb,
            set: (bb, ub) => {
              bb.wheelYRotateRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, Sb, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZRotateRelative" in bb,
            set: (bb, ub) => {
              bb.wheelZRotateRelative = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, ab, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveScene" in bb,
            set: (bb, ub) => {
              bb.wheelXMoveScene = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, Hb, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveScene" in bb,
            set: (bb, ub) => {
              bb.wheelYMoveScene = ub
            }
          },
          metadata: Gb
        }, null, Xb), (0, Bb.h)(bb, null, wb, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveScene" in bb,
            set: (bb, ub) => {
              bb.wheelZMoveScene = ub
            }
          },
          metadata: Gb
        }, null, Xb), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb
    })();
    Lb.b.FreeCameraMouseWheelInput = Ab;
    let lb = (() => {
      var bb;
      let ub, hb, Ub = [],
        Lb = [],
        Yb = [],
        ab = [];
      return bb = class {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = bb, this.touchAngularSensibility = (0, Bb.k)(this, Ub, 2e5), this.touchMoveSensibility = ((0, Bb.k)(this, Lb), (0, Bb.k)(this, Yb, 250)), this.singleFingerRotate = ((0, Bb.k)(this, ab), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Sb.k.IsSafari()
        }
        attachControl(bb) {
          bb = Sb.k.BackCompatCameraNoPreventDefault(arguments);
          let ub = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = hb => {
              const Bb = hb.event,
                Ob = "mouse" === Bb.pointerType || this._isSafari && "undefined" === typeof Bb.pointerType;
              if (this.allowMouse || !Ob)
                if (hb.type === wb.d.POINTERDOWN) {
                  if (bb || Bb.preventDefault(), this._pointerPressed.push(Bb.pointerId), 1 !== this._pointerPressed.length) return;
                  ub = {
                    x: Bb.clientX,
                    y: Bb.clientY
                  }
                } else if (hb.type === wb.d.POINTERUP) {
                bb || Bb.preventDefault();
                const hb = this._pointerPressed.indexOf(Bb.pointerId);
                if (-1 === hb) return;
                if (this._pointerPressed.splice(hb, 1), 0 != hb) return;
                ub = null, this._offsetX = null, this._offsetY = null
              } else if (hb.type === wb.d.POINTERMOVE) {
                if (bb || Bb.preventDefault(), !ub) return;
                if (0 != this._pointerPressed.indexOf(Bb.pointerId)) return;
                this._offsetX = Bb.clientX - ub.x, this._offsetY = -(Bb.clientY - ub.y)
              }
            }), this._observer = this.camera.ZN()._inputManager._addCameraPointerObserver(this._pointerInput, wb.d.POINTERDOWN | wb.d.POINTERUP | wb.d.POINTERMOVE), this._onLostFocus) {
            const bb = this.camera.UX().getInputElement();
            bb && bb.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.ZN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const bb = this.camera.UX().getInputElement();
              bb && bb.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const bb = this.camera,
            ub = bb.movement.input,
            hb = ub.getEntry("touch", "rotate"),
            Bb = ub.getEntry("touch", "translate"),
            Ob = bb._calculateHandednessMultiplier(),
            Ub = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (hb) {
            const ub = hb.sensitivity ?? 1 / this.touchAngularSensibility;
            bb.cameraRotation.y = this._offsetX * Ob * ub, Ub && (bb.cameraRotation.x = -this._offsetY * Ob * ub)
          }
          if (!Ub && Bb) {
            const ub = bb._computeLocalCameraSpeed(),
              hb = Bb.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Ob = Gb.i.YX[0];
            Ob.M_(0, 0, ub * this._offsetY * hb), Gb.d.RotationYawPitchRollToRef(bb.rotation.y, bb.rotation.x, 0, bb._cameraRotationMatrix), Gb.q.TransformCoordinatesToRef(Ob, bb._cameraRotationMatrix, Ob), bb.cameraDirection.addInPlace(Ob)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchAngularSensibility" in bb,
            get: bb => bb.touchAngularSensibility,
            set: (bb, ub) => {
              bb.touchAngularSensibility = ub
            }
          },
          metadata: Gb
        }, Ub, Lb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchMoveSensibility" in bb,
            get: bb => bb.touchMoveSensibility,
            set: (bb, ub) => {
              bb.touchMoveSensibility = ub
            }
          },
          metadata: Gb
        }, Yb, ab), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb
    })();
    Lb.b.FreeCameraTouchInput = lb;
    var Kb, Wb, Cb, db = hb(39333);
    class rb extends Lb.f {
      constructor(bb) {
        super(bb), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new ab), this
      }
      addMouse() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Zb(bb), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Ab, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new lb), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Kb = rb.prototype).addDeviceOrientation ?? (Kb.addDeviceOrientation = (0, db.j)("FreeCameraInputsManager", "addDeviceOrientation")), (Wb = rb.prototype).addVirtualJoystick ?? (Wb.addVirtualJoystick = (0, db.j)("FreeCameraInputsManager", "addVirtualJoystick")), (Cb = rb.prototype).addGamepad ?? (Cb.addGamepad = (0, db.j)("FreeCameraInputsManager", "addGamepad"));
    var jb = hb(39350),
      nb = hb(36762);
    let Db = (() => {
        var bb;
        let ub, hb, Lb, Yb, ab = Ub.d,
          Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [],
          Ab = [],
          lb = [];
        return bb = class extends ab {
          get angularSensibility() {
            const bb = this.inputs.attached.mouse;
            return bb ? bb.angularSensibility : 0
          }
          set angularSensibility(bb) {
            const ub = this.inputs.attached.mouse;
            ub && (ub.angularSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysUp = bb)
          }
          get keysUpward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUpward : []
          }
          set keysUpward(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysUpward = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysDown = bb)
          }
          get keysDownward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDownward : []
          }
          set keysDownward(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysDownward = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRight = bb)
          }
          get keysRotateLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateLeft : []
          }
          set keysRotateLeft(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRotateLeft = bb)
          }
          get keysRotateRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateRight : []
          }
          set keysRotateRight(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRotateRight = bb)
          }
          get keysRotateUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateUp : []
          }
          set keysRotateUp(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRotateUp = bb)
          }
          get keysRotateDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateDown : []
          }
          set keysRotateDown(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRotateDown = bb)
          }
          constructor(bb, ub, hb) {
            var Ob;
            super(bb, ub, hb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Ob = this, this.ellipsoid = (0, Bb.k)(this, Hb, new Gb.q(.5, 1, .5)), this.ellipsoidOffset = ((0, Bb.k)(this, wb), (0, Bb.k)(this, Zb, new Gb.q(0, 0, 0))), this.checkCollisions = ((0, Bb.k)(this, Xb), (0, Bb.k)(this, pb, !1)), this.applyGravity = ((0, Bb.k)(this, ob), (0, Bb.k)(this, Ab, !1)), this.inputs = (0, Bb.k)(this, lb), this._needMoveForGravity = !1, this._oldPosition = Gb.q.Zero(), this._diffPosition = Gb.q.Zero(), this._newPosition = Gb.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(bb, ub) {
              let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Ob._newPosition.mD(ub), Ob._newPosition.subtractToRef(Ob._oldPosition, Ob._diffPosition), Ob._diffPosition.length() > jb.d.CollisionsEpsilon && (Ob.position.addToRef(Ob._diffPosition, Ob._deferredPositionUpdate), Ob._deferOnly ? Ob._deferredUpdated = !0 : Ob.position.mD(Ob._deferredPositionUpdate), Ob.FH && hb && Ob.FH(hb))
            }, this.inputs = new rb(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(bb, ub) {
            ub = Sb.k.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ub)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Gb.q(0, 0, 0), this.cameraRotation = new Gb.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(bb) {
            this._collisionMask = isNaN(bb) ? -1 : bb
          }
          _collideWithWorld(bb) {
            let ub;
            ub = this.parent ? Gb.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ub.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const hb = this.ZN().collisionCoordinator;
            this._collider || (this._collider = hb.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Bb = bb;
            this.applyGravity && (Bb = bb.add(this.ZN().gravity)), hb.getNewPosition(this._oldPosition, Bb, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Gb.q.Zero(), this._transformedDirection = Gb.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.ZN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ab[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.H)()], hb = [(0, Ob.H)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoid" in bb,
              get: bb => bb.ellipsoid,
              set: (bb, ub) => {
                bb.ellipsoid = ub
              }
            },
            metadata: Gb
          }, Hb, wb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoidOffset" in bb,
              get: bb => bb.ellipsoidOffset,
              set: (bb, ub) => {
                bb.ellipsoidOffset = ub
              }
            },
            metadata: Gb
          }, Zb, Xb), (0, Bb.h)(null, null, Lb, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: bb => "checkCollisions" in bb,
              get: bb => bb.checkCollisions,
              set: (bb, ub) => {
                bb.checkCollisions = ub
              }
            },
            metadata: Gb
          }, pb, ob), (0, Bb.h)(null, null, Yb, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyGravity" in bb,
              get: bb => bb.applyGravity,
              set: (bb, ub) => {
                bb.applyGravity = ub
              }
            },
            metadata: Gb
          }, Ab, lb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      xb = !1;
    xb || (xb = !0, (0, nb.f)("BABYLON.FreeCamera", Db))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
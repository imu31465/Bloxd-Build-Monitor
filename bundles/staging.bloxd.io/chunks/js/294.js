export const id = 294;
export const ids = [294];
export const modules = {
  41864: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => rb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(41871),
      gb = Mb(41916),
      lb = Mb(41845),
      Lb = Mb(41771);
    let Ib = (() => {
      var bb;
      let wb, Mb, Vb, gb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb = [],
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Kb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [];
      return bb = class {
        constructor() {
          this.keysUp = (0, eb.m)(this, Bb, [38]), this.keysUpward = ((0, eb.m)(this, sb), (0, eb.m)(this, mb, [33])), this.keysDown = ((0, eb.m)(this, hb), (0, eb.m)(this, zb, [40])), this.keysDownward = ((0, eb.m)(this, Xb), (0, eb.m)(this, xb, [34])), this.keysLeft = ((0, eb.m)(this, jb), (0, eb.m)(this, Kb, [37])), this.keysRight = ((0, eb.m)(this, rb), (0, eb.m)(this, Rb, [39])), this.rotationSpeed = ((0, eb.m)(this, Db), (0, eb.m)(this, cb, .5)), this.keysRotateLeft = ((0, eb.m)(this, Yb), (0, eb.m)(this, Zb, [])), this.keysRotateRight = ((0, eb.m)(this, fb), (0, eb.m)(this, Ab, [])), this.keysRotateUp = ((0, eb.m)(this, Wb), (0, eb.m)(this, Jb, [])), this.keysRotateDown = ((0, eb.m)(this, Sb), (0, eb.m)(this, Nb, [])), this._keys = ((0, eb.m)(this, vb), new Array)
        }
        attachControl(bb) {
          bb = Lb.e.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.RJ(), this._engine = this._scene.DC(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((wb => {
            const Mb = wb.event;
            if (!Mb.metaKey)
              if (wb.type === lb.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Mb.keyCode) || -1 !== this.keysDown.indexOf(Mb.keyCode) || -1 !== this.keysLeft.indexOf(Mb.keyCode) || -1 !== this.keysRight.indexOf(Mb.keyCode) || -1 !== this.keysUpward.indexOf(Mb.keyCode) || -1 !== this.keysDownward.indexOf(Mb.keyCode) || -1 !== this.keysRotateLeft.indexOf(Mb.keyCode) || -1 !== this.keysRotateRight.indexOf(Mb.keyCode) || -1 !== this.keysRotateUp.indexOf(Mb.keyCode) || -1 !== this.keysRotateDown.indexOf(Mb.keyCode)) {
                  -1 === this._keys.indexOf(Mb.keyCode) && this._keys.push(Mb.keyCode), bb || Mb.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Mb.keyCode) || -1 !== this.keysDown.indexOf(Mb.keyCode) || -1 !== this.keysLeft.indexOf(Mb.keyCode) || -1 !== this.keysRight.indexOf(Mb.keyCode) || -1 !== this.keysUpward.indexOf(Mb.keyCode) || -1 !== this.keysDownward.indexOf(Mb.keyCode) || -1 !== this.keysRotateLeft.indexOf(Mb.keyCode) || -1 !== this.keysRotateRight.indexOf(Mb.keyCode) || -1 !== this.keysRotateUp.indexOf(Mb.keyCode) || -1 !== this.keysRotateDown.indexOf(Mb.keyCode)) {
              const wb = this._keys.indexOf(Mb.keyCode);
              wb >= 0 && this._keys.splice(wb, 1), bb || Mb.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              wb = bb.movement.input,
              Mb = wb.getEntry("keyboard", "translate"),
              eb = wb.getEntry("keyboard", "rotate"),
              Hb = eb?.sensitivity ?? 1,
              Vb = bb._localDirection.twb(0, 0, 0);
            for (let pb = 0; pb < this._keys.length; pb++) {
              const wb = this._keys[pb]; - 1 !== this.keysLeft.indexOf(wb) ? Vb.x -= 1 : -1 !== this.keysUp.indexOf(wb) ? Vb.z += 1 : -1 !== this.keysRight.indexOf(wb) ? Vb.x += 1 : -1 !== this.keysDown.indexOf(wb) ? Vb.z -= 1 : -1 !== this.keysUpward.indexOf(wb) ? Vb.y += 1 : -1 !== this.keysDownward.indexOf(wb) ? Vb.y -= 1 : -1 !== this.keysRotateLeft.indexOf(wb) ? eb && (bb.cameraRotation.y -= this._getLocalRotation() * Hb) : -1 !== this.keysRotateRight.indexOf(wb) ? eb && (bb.cameraRotation.y += this._getLocalRotation() * Hb) : -1 !== this.keysRotateUp.indexOf(wb) ? eb && (bb.cameraRotation.x -= this._getLocalRotation() * Hb) : -1 !== this.keysRotateDown.indexOf(wb) && eb && (bb.cameraRotation.x += this._getLocalRotation() * Hb)
            }
            if (Mb && (0 !== Vb.x || 0 !== Vb.y || 0 !== Vb.z)) {
              const wb = bb._computeLocalCameraSpeed() * (Mb.sensitivity ?? 1);
              Vb.normalize().scaleInPlace(wb), bb.RJ().useRightHandedSystem && (Vb.z *= -1), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), pb.o.TransformNormalToRef(Vb, bb._cameraTransformMatrix, bb._transformedDirection), bb.cameraDirection.addInPlace(bb._transformedDirection)
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
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], Vb = [(0, Hb.E)()], gb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.E)()], Ub = [(0, Hb.E)()], tb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], Eb = [(0, Hb.E)()], Fb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, wb) => {
              bb.keysUp = wb
            }
          },
          metadata: pb
        }, Bb, sb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUpward" in bb,
            get: bb => bb.keysUpward,
            set: (bb, wb) => {
              bb.keysUpward = wb
            }
          },
          metadata: pb
        }, mb, hb), (0, eb.i)(null, null, Vb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, wb) => {
              bb.keysDown = wb
            }
          },
          metadata: pb
        }, zb, Xb), (0, eb.i)(null, null, gb, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDownward" in bb,
            get: bb => bb.keysDownward,
            set: (bb, wb) => {
              bb.keysDownward = wb
            }
          },
          metadata: pb
        }, xb, jb), (0, eb.i)(null, null, Ib, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, wb) => {
              bb.keysLeft = wb
            }
          },
          metadata: pb
        }, Kb, rb), (0, eb.i)(null, null, Ob, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, wb) => {
              bb.keysRight = wb
            }
          },
          metadata: pb
        }, Rb, Db), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "rotationSpeed" in bb,
            get: bb => bb.rotationSpeed,
            set: (bb, wb) => {
              bb.rotationSpeed = wb
            }
          },
          metadata: pb
        }, cb, Yb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateLeft" in bb,
            get: bb => bb.keysRotateLeft,
            set: (bb, wb) => {
              bb.keysRotateLeft = wb
            }
          },
          metadata: pb
        }, Zb, fb), (0, eb.i)(null, null, Cb, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateRight" in bb,
            get: bb => bb.keysRotateRight,
            set: (bb, wb) => {
              bb.keysRotateRight = wb
            }
          },
          metadata: pb
        }, Ab, Wb), (0, eb.i)(null, null, Eb, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateUp" in bb,
            get: bb => bb.keysRotateUp,
            set: (bb, wb) => {
              bb.keysRotateUp = wb
            }
          },
          metadata: pb
        }, Jb, Sb), (0, eb.i)(null, null, Fb, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateDown" in bb,
            get: bb => bb.keysRotateDown,
            set: (bb, wb) => {
              bb.keysRotateDown = wb
            }
          },
          metadata: pb
        }, Nb, vb), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb
    })();
    gb.b.FreeCameraKeyboardMoveInput = Ib;
    var Ob = Mb(38318),
      Ub = Mb(41843);
    let tb = (() => {
      var bb;
      let wb, Mb, pb = [],
        Vb = [],
        gb = [],
        lb = [];
      return bb = class {
        _applyPointerRotation(bb, wb) {
          this._pointerConditions.button = this._currentActiveButton;
          const Mb = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Mb || "rotate" !== Mb.interaction) return;
          const eb = Mb.B5 ?? Mb.sensitivity ?? 1 / this.angularSensibility,
            Hb = Mb.Y5 ?? Mb.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += bb * eb, this.camera.cameraRotation.x += wb * Hb
        }
        constructor() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = bb, this.buttons = (0, eb.m)(this, pb, [0, 1, 2]), this.angularSensibility = ((0, eb.m)(this, Vb), (0, eb.m)(this, gb, 2e3)), this._pointerInput = (0, eb.m)(this, lb), this._previousPosition = null, this.onPointerMovedObservable = new Ob.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(bb) {
          bb = Lb.e.BackCompatCameraNoPreventDefault(arguments);
          const wb = this.camera.DC(),
            Mb = wb.getInputElement();
          this._pointerInput || (this._pointerInput = eb => {
            const Hb = eb.event,
              pb = "touch" === Hb.pointerType;
            if (!this.touchEnabled && pb) return;
            if (eb.type !== Ub.b.POINTERMOVE && -1 === this.buttons.indexOf(Hb.button)) return;
            const Vb = Hb.target;
            if (eb.type === Ub.b.POINTERDOWN) {
              if (pb && -1 !== this._activePointerId || !pb && -1 !== this._currentActiveButton) return;
              this._activePointerId = Hb.pointerId;
              try {
                Vb?.setPointerCapture(Hb.pointerId)
              } catch (gb) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Hb.button), this._previousPosition = {
                x: Hb.clientX,
                y: Hb.clientY
              }, bb || (Hb.preventDefault(), Mb && Mb.focus()), wb.isPointerLock && this._onMouseMove && this._onMouseMove(eb.event)
            } else if (eb.type === Ub.b.POINTERUP) {
              if (pb && this._activePointerId !== Hb.pointerId || !pb && this._currentActiveButton !== Hb.button) return;
              try {
                Vb?.releasePointerCapture(Hb.pointerId)
              } catch (gb) {}
              this._currentActiveButton = -1, this._previousPosition = null, bb || Hb.preventDefault(), this._activePointerId = -1
            } else if (eb.type === Ub.b.POINTERMOVE && (this._activePointerId === Hb.pointerId || !pb))
              if (wb.isPointerLock && this._onMouseMove) this._onMouseMove(eb.event);
              else if (this._previousPosition) {
              const wb = this.camera._calculateHandednessMultiplier(),
                Mb = (Hb.clientX - this._previousPosition.x) * wb,
                eb = (Hb.clientY - this._previousPosition.y) * wb;
              this._allowCameraRotation && this._applyPointerRotation(Mb, eb), this.onPointerMovedObservable.notifyObservers({
                offsetX: Mb,
                offsetY: eb
              }), this._previousPosition = {
                x: Hb.clientX,
                y: Hb.clientY
              }, bb || Hb.preventDefault()
            }
          }), this._onMouseMove = Mb => {
            if (!wb.isPointerLock) return;
            const eb = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Mb.movementX * eb, Mb.movementY * eb), this._previousPosition = null, bb || Mb.preventDefault()
          }, this._observer = this.camera.RJ()._inputManager._addCameraPointerObserver(this._pointerInput, Ub.b.POINTERDOWN | Ub.b.POINTERUP | Ub.b.POINTERMOVE), Mb && (this._contextMenuBind = bb => this.onContextMenu(bb), Mb.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(bb) {
          bb.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.RJ()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const bb = this.camera.DC().getInputElement();
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
        const Lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: bb => "buttons" in bb,
            get: bb => bb.buttons,
            set: (bb, wb) => {
              bb.buttons = wb
            }
          },
          metadata: Lb
        }, pb, Vb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSensibility" in bb,
            get: bb => bb.angularSensibility,
            set: (bb, wb) => {
              bb.angularSensibility = wb
            }
          },
          metadata: Lb
        }, gb, lb), Lb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Lb
        })
      })(), bb
    })();
    gb.b.FreeCameraMouseInput = tb;
    var Cb = Mb(41852);
    let Eb = (() => {
      var bb;
      let wb, Mb, pb, Vb = [],
        gb = [],
        lb = [],
        Ib = [],
        tb = [],
        Eb = [];
      return bb = class {
        constructor() {
          this.wheelPrecisionX = (0, eb.m)(this, Vb, 3), this.wheelPrecisionY = ((0, eb.m)(this, gb), (0, eb.m)(this, lb, 3)), this.wheelPrecisionZ = ((0, eb.m)(this, Ib), (0, eb.m)(this, tb, 3)), this.onChangedObservable = ((0, eb.m)(this, Eb), new Ob.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(bb) {
          bb = Lb.e.BackCompatCameraNoPreventDefault(arguments), this._wheel = wb => {
            if (wb.type !== Ub.b.POINTERWHEEL) return;
            const Mb = wb.event,
              eb = Mb.deltaMode === Cb.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * eb * Mb.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * eb * Mb.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * eb * Mb.deltaZ / this._normalize, Mb.preventDefault && (bb || Mb.preventDefault())
          }, this._observer = this.camera.RJ()._inputManager._addCameraPointerObserver(this._wheel, Ub.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.RJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionX" in bb,
            get: bb => bb.wheelPrecisionX,
            set: (bb, wb) => {
              bb.wheelPrecisionX = wb
            }
          },
          metadata: Lb
        }, Vb, gb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionY" in bb,
            get: bb => bb.wheelPrecisionY,
            set: (bb, wb) => {
              bb.wheelPrecisionY = wb
            }
          },
          metadata: Lb
        }, lb, Ib), (0, eb.i)(null, null, pb, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionZ" in bb,
            get: bb => bb.wheelPrecisionZ,
            set: (bb, wb) => {
              bb.wheelPrecisionZ = wb
            }
          },
          metadata: Lb
        }, tb, Eb), Lb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Lb
        })
      })(), bb
    })();
    var Fb;
    ! function(bb) {
      bb[bb.MoveRelative = 0] = "MoveRelative", bb[bb.RotateRelative = 1] = "RotateRelative", bb[bb.MoveScene = 2] = "MoveScene"
    }(Fb || (Fb = {}));
    let Bb = (() => {
      var bb;
      let wb, Mb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb = Eb,
        Cb = [];
      return bb = class extends tb {
        constructor() {
          super(...arguments), this.camera = (0, eb.m)(this, Cb), this._moveRelative = pb.o.Zero(), this._rotateRelative = pb.o.Zero(), this._moveScene = pb.o.Zero(), this._wheelXAction = Fb.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = Fb.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(bb) {
          null === bb && this._wheelXAction !== Fb.MoveRelative || (this._wheelXAction = Fb.MoveRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== Fb.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(bb) {
          null === bb && this._wheelYAction !== Fb.MoveRelative || (this._wheelYAction = Fb.MoveRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== Fb.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(bb) {
          null === bb && this._wheelZAction !== Fb.MoveRelative || (this._wheelZAction = Fb.MoveRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== Fb.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(bb) {
          null === bb && this._wheelXAction !== Fb.RotateRelative || (this._wheelXAction = Fb.RotateRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== Fb.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(bb) {
          null === bb && this._wheelYAction !== Fb.RotateRelative || (this._wheelYAction = Fb.RotateRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== Fb.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(bb) {
          null === bb && this._wheelZAction !== Fb.RotateRelative || (this._wheelZAction = Fb.RotateRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== Fb.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(bb) {
          null === bb && this._wheelXAction !== Fb.MoveScene || (this._wheelXAction = Fb.MoveScene, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== Fb.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(bb) {
          null === bb && this._wheelYAction !== Fb.MoveScene || (this._wheelYAction = Fb.MoveScene, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== Fb.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(bb) {
          null === bb && this._wheelZAction !== Fb.MoveScene || (this._wheelZAction = Fb.MoveScene, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== Fb.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Jbb(0), this._rotateRelative.Jbb(0), this._moveScene.Jbb(0), this._updateCamera(), this.camera.RJ().useRightHandedSystem && (this._moveRelative.z *= -1);
          const bb = pb.b.Zero();
          this.camera.getViewMatrix().invertToRef(bb);
          const wb = pb.o.Zero();
          pb.o.TransformNormalToRef(this._moveRelative, bb, wb), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(wb), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(bb, wb, Mb) {
          if (0 === bb) return;
          if (null === wb || null === Mb) return;
          let eb = null;
          switch (wb) {
            case Fb.MoveRelative:
              eb = this._moveRelative;
              break;
            case Fb.RotateRelative:
              eb = this._rotateRelative;
              break;
            case Fb.MoveScene:
              eb = this._moveScene
          }
          switch (Mb) {
            case 0:
              eb.set(bb, 0, 0);
              break;
            case 1:
              eb.set(0, bb, 0);
              break;
            case 2:
              eb.set(0, 0, bb)
          }
        }
      }, (() => {
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(tb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], Vb = [(0, Hb.E)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.E)()], Ub = [(0, Hb.E)()], (0, eb.i)(bb, null, wb, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveRelative" in bb,
            set: (bb, wb) => {
              bb.wheelXMoveRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Mb, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveRelative" in bb,
            set: (bb, wb) => {
              bb.wheelYMoveRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Vb, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveRelative" in bb,
            set: (bb, wb) => {
              bb.wheelZMoveRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, gb, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXRotateRelative" in bb,
            set: (bb, wb) => {
              bb.wheelXRotateRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, lb, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYRotateRelative" in bb,
            set: (bb, wb) => {
              bb.wheelYRotateRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Lb, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZRotateRelative" in bb,
            set: (bb, wb) => {
              bb.wheelZRotateRelative = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Ib, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveScene" in bb,
            set: (bb, wb) => {
              bb.wheelXMoveScene = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Ob, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveScene" in bb,
            set: (bb, wb) => {
              bb.wheelYMoveScene = wb
            }
          },
          metadata: pb
        }, null, Cb), (0, eb.i)(bb, null, Ub, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveScene" in bb,
            set: (bb, wb) => {
              bb.wheelZMoveScene = wb
            }
          },
          metadata: pb
        }, null, Cb), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb
    })();
    gb.b.FreeCameraMouseWheelInput = Bb;
    let sb = (() => {
      var bb;
      let wb, Mb, Vb = [],
        gb = [],
        lb = [],
        Ib = [];
      return bb = class {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = bb, this.touchAngularSensibility = (0, eb.m)(this, Vb, 2e5), this.touchMoveSensibility = ((0, eb.m)(this, gb), (0, eb.m)(this, lb, 250)), this.singleFingerRotate = ((0, eb.m)(this, Ib), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Lb.e.IsSafari()
        }
        attachControl(bb) {
          bb = Lb.e.BackCompatCameraNoPreventDefault(arguments);
          let wb = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Mb => {
              const eb = Mb.event,
                Hb = "mouse" === eb.pointerType || this._isSafari && "undefined" === typeof eb.pointerType;
              if (this.allowMouse || !Hb)
                if (Mb.type === Ub.b.POINTERDOWN) {
                  if (bb || eb.preventDefault(), this._pointerPressed.push(eb.pointerId), 1 !== this._pointerPressed.length) return;
                  wb = {
                    x: eb.clientX,
                    y: eb.clientY
                  }
                } else if (Mb.type === Ub.b.POINTERUP) {
                bb || eb.preventDefault();
                const Mb = this._pointerPressed.indexOf(eb.pointerId);
                if (-1 === Mb) return;
                if (this._pointerPressed.splice(Mb, 1), 0 != Mb) return;
                wb = null, this._offsetX = null, this._offsetY = null
              } else if (Mb.type === Ub.b.POINTERMOVE) {
                if (bb || eb.preventDefault(), !wb) return;
                if (0 != this._pointerPressed.indexOf(eb.pointerId)) return;
                this._offsetX = eb.clientX - wb.x, this._offsetY = -(eb.clientY - wb.y)
              }
            }), this._observer = this.camera.RJ()._inputManager._addCameraPointerObserver(this._pointerInput, Ub.b.POINTERDOWN | Ub.b.POINTERUP | Ub.b.POINTERMOVE), this._onLostFocus) {
            const bb = this.camera.DC().getInputElement();
            bb && bb.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.RJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const bb = this.camera.DC().getInputElement();
              bb && bb.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const bb = this.camera,
            wb = bb.movement.input,
            Mb = wb.getEntry("touch", "rotate"),
            eb = wb.getEntry("touch", "translate"),
            Hb = bb._calculateHandednessMultiplier(),
            Vb = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Mb) {
            const wb = Mb.sensitivity ?? 1 / this.touchAngularSensibility;
            bb.cameraRotation.y = this._offsetX * Hb * wb, Vb && (bb.cameraRotation.x = -this._offsetY * Hb * wb)
          }
          if (!Vb && eb) {
            const wb = bb._computeLocalCameraSpeed(),
              Mb = eb.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Hb = pb.j.YC[0];
            Hb.twb(0, 0, wb * this._offsetY * Mb), pb.b.RotationYawPitchRollToRef(bb.rotation.y, bb.rotation.x, 0, bb._cameraRotationMatrix), pb.o.TransformCoordinatesToRef(Hb, bb._cameraRotationMatrix, Hb), bb.cameraDirection.addInPlace(Hb)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchAngularSensibility" in bb,
            get: bb => bb.touchAngularSensibility,
            set: (bb, wb) => {
              bb.touchAngularSensibility = wb
            }
          },
          metadata: pb
        }, Vb, gb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchMoveSensibility" in bb,
            get: bb => bb.touchMoveSensibility,
            set: (bb, wb) => {
              bb.touchMoveSensibility = wb
            }
          },
          metadata: pb
        }, lb, Ib), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb
    })();
    gb.b.FreeCameraTouchInput = sb;
    var mb, hb, zb, Xb = Mb(41554);
    class xb extends gb.d {
      constructor(bb) {
        super(bb), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Ib), this
      }
      addMouse() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new tb(bb), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Bb, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new sb), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(mb = xb.prototype).addDeviceOrientation ?? (mb.addDeviceOrientation = (0, Xb.h)("FreeCameraInputsManager", "addDeviceOrientation")), (hb = xb.prototype).addVirtualJoystick ?? (hb.addVirtualJoystick = (0, Xb.h)("FreeCameraInputsManager", "addVirtualJoystick")), (zb = xb.prototype).addGamepad ?? (zb.addGamepad = (0, Xb.h)("FreeCameraInputsManager", "addGamepad"));
    var jb = Mb(41572),
      Kb = Mb(38333);
    let rb = (() => {
        var bb;
        let wb, Mb, gb, lb, Ib = Vb.f,
          Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [];
        return bb = class extends Ib {
          get angularSensibility() {
            const bb = this.inputs.attached.mouse;
            return bb ? bb.angularSensibility : 0
          }
          set angularSensibility(bb) {
            const wb = this.inputs.attached.mouse;
            wb && (wb.angularSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysUp = bb)
          }
          get keysUpward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUpward : []
          }
          set keysUpward(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysUpward = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysDown = bb)
          }
          get keysDownward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDownward : []
          }
          set keysDownward(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysDownward = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRight = bb)
          }
          get keysRotateLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateLeft : []
          }
          set keysRotateLeft(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRotateLeft = bb)
          }
          get keysRotateRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateRight : []
          }
          set keysRotateRight(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRotateRight = bb)
          }
          get keysRotateUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateUp : []
          }
          set keysRotateUp(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRotateUp = bb)
          }
          get keysRotateDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateDown : []
          }
          set keysRotateDown(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRotateDown = bb)
          }
          constructor(bb, wb, Mb) {
            var Hb;
            super(bb, wb, Mb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Hb = this, this.ellipsoid = (0, eb.m)(this, Ob, new pb.o(.5, 1, .5)), this.ellipsoidOffset = ((0, eb.m)(this, Ub), (0, eb.m)(this, tb, new pb.o(0, 0, 0))), this.checkCollisions = ((0, eb.m)(this, Cb), (0, eb.m)(this, Eb, !1)), this.applyGravity = ((0, eb.m)(this, Fb), (0, eb.m)(this, Bb, !1)), this.inputs = (0, eb.m)(this, sb), this._needMoveForGravity = !1, this._oldPosition = pb.o.Zero(), this._diffPosition = pb.o.Zero(), this._newPosition = pb.o.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(bb, wb) {
              let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Hb._newPosition.eZ(wb), Hb._newPosition.subtractToRef(Hb._oldPosition, Hb._diffPosition), Hb._diffPosition.length() > jb.d.CollisionsEpsilon && (Hb.position.addToRef(Hb._diffPosition, Hb._deferredPositionUpdate), Hb._deferOnly ? Hb._deferredUpdated = !0 : Hb.position.eZ(Hb._deferredPositionUpdate), Hb.KU && Mb && Hb.KU(Mb))
            }, this.inputs = new xb(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(bb, wb) {
            wb = Lb.e.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(wb)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new pb.o(0, 0, 0), this.cameraRotation = new pb.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(bb) {
            this._collisionMask = isNaN(bb) ? -1 : bb
          }
          _collideWithWorld(bb) {
            let wb;
            wb = this.parent ? pb.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, wb.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Mb = this.RJ().collisionCoordinator;
            this._collider || (this._collider = Mb.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let eb = bb;
            this.applyGravity && (eb = bb.add(this.RJ().gravity)), Mb.getNewPosition(this._oldPosition, eb, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = pb.o.Zero(), this._transformedDirection = pb.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.RJ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.B)()], Mb = [(0, Hb.B)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoid" in bb,
              get: bb => bb.ellipsoid,
              set: (bb, wb) => {
                bb.ellipsoid = wb
              }
            },
            metadata: pb
          }, Ob, Ub), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoidOffset" in bb,
              get: bb => bb.ellipsoidOffset,
              set: (bb, wb) => {
                bb.ellipsoidOffset = wb
              }
            },
            metadata: pb
          }, tb, Cb), (0, eb.i)(null, null, gb, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: bb => "checkCollisions" in bb,
              get: bb => bb.checkCollisions,
              set: (bb, wb) => {
                bb.checkCollisions = wb
              }
            },
            metadata: pb
          }, Eb, Fb), (0, eb.i)(null, null, lb, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyGravity" in bb,
              get: bb => bb.applyGravity,
              set: (bb, wb) => {
                bb.applyGravity = wb
              }
            },
            metadata: pb
          }, Bb, sb), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Rb = !1;
    Rb || (Rb = !0, (0, Kb.e)("BABYLON.FreeCamera", rb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
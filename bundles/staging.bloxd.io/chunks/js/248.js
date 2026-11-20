export const id = 248;
export const ids = [248];
export const modules = {
  39302: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Nb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(39307),
      Yb = Ub(39344),
      Bb = Ub(39275),
      eb = Ub(39195);
    let vb = (() => {
      var bb;
      let ab, Ub, Eb, Yb, vb, Lb, Pb, Xb, jb, Rb, kb, yb = [],
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        pb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [];
      return bb = class {
        constructor() {
          this.keysUp = (0, Ab.k)(this, yb, [38]), this.keysUpward = ((0, Ab.k)(this, Zb), (0, Ab.k)(this, Db, [33])), this.keysDown = ((0, Ab.k)(this, zb), (0, Ab.k)(this, xb, [40])), this.keysDownward = ((0, Ab.k)(this, ib), (0, Ab.k)(this, fb, [34])), this.keysLeft = ((0, Ab.k)(this, mb), (0, Ab.k)(this, pb, [37])), this.keysRight = ((0, Ab.k)(this, Nb), (0, Ab.k)(this, Wb, [39])), this.rotationSpeed = ((0, Ab.k)(this, Hb), (0, Ab.k)(this, Ib, .5)), this.keysRotateLeft = ((0, Ab.k)(this, db), (0, Ab.k)(this, Fb, [])), this.keysRotateRight = ((0, Ab.k)(this, hb), (0, Ab.k)(this, Gb, [])), this.keysRotateUp = ((0, Ab.k)(this, Qb), (0, Ab.k)(this, qb, [])), this.keysRotateDown = ((0, Ab.k)(this, ub), (0, Ab.k)(this, rb, [])), this._keys = ((0, Ab.k)(this, Kb), new Array)
        }
        attachControl(bb) {
          bb = eb.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.oN(), this._engine = this._scene.vj(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ab => {
            const Ub = ab.event;
            if (!Ub.metaKey)
              if (ab.type === Bb.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Ub.keyCode) || -1 !== this.keysDown.indexOf(Ub.keyCode) || -1 !== this.keysLeft.indexOf(Ub.keyCode) || -1 !== this.keysRight.indexOf(Ub.keyCode) || -1 !== this.keysUpward.indexOf(Ub.keyCode) || -1 !== this.keysDownward.indexOf(Ub.keyCode) || -1 !== this.keysRotateLeft.indexOf(Ub.keyCode) || -1 !== this.keysRotateRight.indexOf(Ub.keyCode) || -1 !== this.keysRotateUp.indexOf(Ub.keyCode) || -1 !== this.keysRotateDown.indexOf(Ub.keyCode)) {
                  -1 === this._keys.indexOf(Ub.keyCode) && this._keys.push(Ub.keyCode), bb || Ub.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Ub.keyCode) || -1 !== this.keysDown.indexOf(Ub.keyCode) || -1 !== this.keysLeft.indexOf(Ub.keyCode) || -1 !== this.keysRight.indexOf(Ub.keyCode) || -1 !== this.keysUpward.indexOf(Ub.keyCode) || -1 !== this.keysDownward.indexOf(Ub.keyCode) || -1 !== this.keysRotateLeft.indexOf(Ub.keyCode) || -1 !== this.keysRotateRight.indexOf(Ub.keyCode) || -1 !== this.keysRotateUp.indexOf(Ub.keyCode) || -1 !== this.keysRotateDown.indexOf(Ub.keyCode)) {
              const ab = this._keys.indexOf(Ub.keyCode);
              ab >= 0 && this._keys.splice(ab, 1), bb || Ub.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              ab = bb.movement.input,
              Ub = ab.getEntry("keyboard", "translate"),
              Ab = ab.getEntry("keyboard", "rotate"),
              Mb = Ab?.sensitivity ?? 1,
              Eb = bb._localDirection.K9(0, 0, 0);
            for (let Tb = 0; Tb < this._keys.length; Tb++) {
              const ab = this._keys[Tb]; - 1 !== this.keysLeft.indexOf(ab) ? Eb.x -= 1 : -1 !== this.keysUp.indexOf(ab) ? Eb.z += 1 : -1 !== this.keysRight.indexOf(ab) ? Eb.x += 1 : -1 !== this.keysDown.indexOf(ab) ? Eb.z -= 1 : -1 !== this.keysUpward.indexOf(ab) ? Eb.y += 1 : -1 !== this.keysDownward.indexOf(ab) ? Eb.y -= 1 : -1 !== this.keysRotateLeft.indexOf(ab) ? Ab && (bb.cameraRotation.y -= this._getLocalRotation() * Mb) : -1 !== this.keysRotateRight.indexOf(ab) ? Ab && (bb.cameraRotation.y += this._getLocalRotation() * Mb) : -1 !== this.keysRotateUp.indexOf(ab) ? Ab && (bb.cameraRotation.x -= this._getLocalRotation() * Mb) : -1 !== this.keysRotateDown.indexOf(ab) && Ab && (bb.cameraRotation.x += this._getLocalRotation() * Mb)
            }
            if (Ub && (0 !== Eb.x || 0 !== Eb.y || 0 !== Eb.z)) {
              const ab = bb._computeLocalCameraSpeed() * (Ub.sensitivity ?? 1);
              Eb.normalize().scaleInPlace(ab), bb.oN().useRightHandedSystem && (Eb.z *= -1), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), Tb.m.TransformNormalToRef(Eb, bb._cameraTransformMatrix, bb._transformedDirection), bb.cameraDirection.addInPlace(bb._transformedDirection)
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
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Eb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], Xb = [(0, Mb.K)()], jb = [(0, Mb.K)()], Rb = [(0, Mb.K)()], kb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, ab) => {
              bb.keysUp = ab
            }
          },
          metadata: Tb
        }, yb, Zb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUpward" in bb,
            get: bb => bb.keysUpward,
            set: (bb, ab) => {
              bb.keysUpward = ab
            }
          },
          metadata: Tb
        }, Db, zb), (0, Ab.h)(null, null, Eb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, ab) => {
              bb.keysDown = ab
            }
          },
          metadata: Tb
        }, xb, ib), (0, Ab.h)(null, null, Yb, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDownward" in bb,
            get: bb => bb.keysDownward,
            set: (bb, ab) => {
              bb.keysDownward = ab
            }
          },
          metadata: Tb
        }, fb, mb), (0, Ab.h)(null, null, vb, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, ab) => {
              bb.keysLeft = ab
            }
          },
          metadata: Tb
        }, pb, Nb), (0, Ab.h)(null, null, Lb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, ab) => {
              bb.keysRight = ab
            }
          },
          metadata: Tb
        }, Wb, Hb), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "rotationSpeed" in bb,
            get: bb => bb.rotationSpeed,
            set: (bb, ab) => {
              bb.rotationSpeed = ab
            }
          },
          metadata: Tb
        }, Ib, db), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateLeft" in bb,
            get: bb => bb.keysRotateLeft,
            set: (bb, ab) => {
              bb.keysRotateLeft = ab
            }
          },
          metadata: Tb
        }, Fb, hb), (0, Ab.h)(null, null, jb, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateRight" in bb,
            get: bb => bb.keysRotateRight,
            set: (bb, ab) => {
              bb.keysRotateRight = ab
            }
          },
          metadata: Tb
        }, Gb, Qb), (0, Ab.h)(null, null, Rb, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateUp" in bb,
            get: bb => bb.keysRotateUp,
            set: (bb, ab) => {
              bb.keysRotateUp = ab
            }
          },
          metadata: Tb
        }, qb, ub), (0, Ab.h)(null, null, kb, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRotateDown" in bb,
            get: bb => bb.keysRotateDown,
            set: (bb, ab) => {
              bb.keysRotateDown = ab
            }
          },
          metadata: Tb
        }, rb, Kb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb
    })();
    Yb.b.FreeCameraKeyboardMoveInput = vb;
    var Lb = Ub(36431),
      Pb = Ub(39269);
    let Xb = (() => {
      var bb;
      let ab, Ub, Tb = [],
        Eb = [],
        Yb = [],
        Bb = [];
      return bb = class {
        _applyPointerRotation(bb, ab) {
          this._pointerConditions.button = this._currentActiveButton;
          const Ub = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Ub || "rotate" !== Ub.interaction) return;
          const Ab = Ub.hK ?? Ub.sensitivity ?? 1 / this.angularSensibility,
            Mb = Ub.rK ?? Ub.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += bb * Ab, this.camera.cameraRotation.x += ab * Mb
        }
        constructor() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = bb, this.buttons = (0, Ab.k)(this, Tb, [0, 1, 2]), this.angularSensibility = ((0, Ab.k)(this, Eb), (0, Ab.k)(this, Yb, 2e3)), this._pointerInput = (0, Ab.k)(this, Bb), this._previousPosition = null, this.onPointerMovedObservable = new Lb.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(bb) {
          bb = eb.h.BackCompatCameraNoPreventDefault(arguments);
          const ab = this.camera.vj(),
            Ub = ab.getInputElement();
          this._pointerInput || (this._pointerInput = Ab => {
            const Mb = Ab.event,
              Tb = "touch" === Mb.pointerType;
            if (!this.touchEnabled && Tb) return;
            if (Ab.type !== Pb.c.POINTERMOVE && -1 === this.buttons.indexOf(Mb.button)) return;
            const Eb = Mb.target;
            if (Ab.type === Pb.c.POINTERDOWN) {
              if (Tb && -1 !== this._activePointerId || !Tb && -1 !== this._currentActiveButton) return;
              this._activePointerId = Mb.pointerId;
              try {
                Eb?.setPointerCapture(Mb.pointerId)
              } catch (Yb) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Mb.button), this._previousPosition = {
                x: Mb.clientX,
                y: Mb.clientY
              }, bb || (Mb.preventDefault(), Ub && Ub.focus()), ab.isPointerLock && this._onMouseMove && this._onMouseMove(Ab.event)
            } else if (Ab.type === Pb.c.POINTERUP) {
              if (Tb && this._activePointerId !== Mb.pointerId || !Tb && this._currentActiveButton !== Mb.button) return;
              try {
                Eb?.releasePointerCapture(Mb.pointerId)
              } catch (Yb) {}
              this._currentActiveButton = -1, this._previousPosition = null, bb || Mb.preventDefault(), this._activePointerId = -1
            } else if (Ab.type === Pb.c.POINTERMOVE && (this._activePointerId === Mb.pointerId || !Tb))
              if (ab.isPointerLock && this._onMouseMove) this._onMouseMove(Ab.event);
              else if (this._previousPosition) {
              const ab = this.camera._calculateHandednessMultiplier(),
                Ub = (Mb.clientX - this._previousPosition.x) * ab,
                Ab = (Mb.clientY - this._previousPosition.y) * ab;
              this._allowCameraRotation && this._applyPointerRotation(Ub, Ab), this.onPointerMovedObservable.notifyObservers({
                offsetX: Ub,
                offsetY: Ab
              }), this._previousPosition = {
                x: Mb.clientX,
                y: Mb.clientY
              }, bb || Mb.preventDefault()
            }
          }), this._onMouseMove = Ub => {
            if (!ab.isPointerLock) return;
            const Ab = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Ub.movementX * Ab, Ub.movementY * Ab), this._previousPosition = null, bb || Ub.preventDefault()
          }, this._observer = this.camera.oN()._inputManager._addCameraPointerObserver(this._pointerInput, Pb.c.POINTERDOWN | Pb.c.POINTERUP | Pb.c.POINTERMOVE), Ub && (this._contextMenuBind = bb => this.onContextMenu(bb), Ub.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(bb) {
          bb.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.oN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const bb = this.camera.vj().getInputElement();
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
        const eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: bb => "buttons" in bb,
            get: bb => bb.buttons,
            set: (bb, ab) => {
              bb.buttons = ab
            }
          },
          metadata: eb
        }, Tb, Eb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSensibility" in bb,
            get: bb => bb.angularSensibility,
            set: (bb, ab) => {
              bb.angularSensibility = ab
            }
          },
          metadata: eb
        }, Yb, Bb), eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eb
        })
      })(), bb
    })();
    Yb.b.FreeCameraMouseInput = Xb;
    var jb = Ub(39280);
    let Rb = (() => {
      var bb;
      let ab, Ub, Tb, Eb = [],
        Yb = [],
        Bb = [],
        vb = [],
        Xb = [],
        Rb = [];
      return bb = class {
        constructor() {
          this.wheelPrecisionX = (0, Ab.k)(this, Eb, 3), this.wheelPrecisionY = ((0, Ab.k)(this, Yb), (0, Ab.k)(this, Bb, 3)), this.wheelPrecisionZ = ((0, Ab.k)(this, vb), (0, Ab.k)(this, Xb, 3)), this.onChangedObservable = ((0, Ab.k)(this, Rb), new Lb.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(bb) {
          bb = eb.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = ab => {
            if (ab.type !== Pb.c.POINTERWHEEL) return;
            const Ub = ab.event,
              Ab = Ub.deltaMode === jb.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Ab * Ub.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Ab * Ub.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Ab * Ub.deltaZ / this._normalize, Ub.preventDefault && (bb || Ub.preventDefault())
          }, this._observer = this.camera.oN()._inputManager._addCameraPointerObserver(this._wheel, Pb.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.oN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionX" in bb,
            get: bb => bb.wheelPrecisionX,
            set: (bb, ab) => {
              bb.wheelPrecisionX = ab
            }
          },
          metadata: eb
        }, Eb, Yb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionY" in bb,
            get: bb => bb.wheelPrecisionY,
            set: (bb, ab) => {
              bb.wheelPrecisionY = ab
            }
          },
          metadata: eb
        }, Bb, vb), (0, Ab.h)(null, null, Tb, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecisionZ" in bb,
            get: bb => bb.wheelPrecisionZ,
            set: (bb, ab) => {
              bb.wheelPrecisionZ = ab
            }
          },
          metadata: eb
        }, Xb, Rb), eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eb
        })
      })(), bb
    })();
    var kb;
    ! function(bb) {
      bb[bb.MoveRelative = 0] = "MoveRelative", bb[bb.RotateRelative = 1] = "RotateRelative", bb[bb.MoveScene = 2] = "MoveScene"
    }(kb || (kb = {}));
    let yb = (() => {
      var bb;
      let ab, Ub, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb = Rb,
        jb = [];
      return bb = class extends Xb {
        constructor() {
          super(...arguments), this.camera = (0, Ab.k)(this, jb), this._moveRelative = Tb.m.Zero(), this._rotateRelative = Tb.m.Zero(), this._moveScene = Tb.m.Zero(), this._wheelXAction = kb.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = kb.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(bb) {
          null === bb && this._wheelXAction !== kb.MoveRelative || (this._wheelXAction = kb.MoveRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== kb.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(bb) {
          null === bb && this._wheelYAction !== kb.MoveRelative || (this._wheelYAction = kb.MoveRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== kb.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(bb) {
          null === bb && this._wheelZAction !== kb.MoveRelative || (this._wheelZAction = kb.MoveRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== kb.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(bb) {
          null === bb && this._wheelXAction !== kb.RotateRelative || (this._wheelXAction = kb.RotateRelative, this._wheelXActionCoordinate = bb)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== kb.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(bb) {
          null === bb && this._wheelYAction !== kb.RotateRelative || (this._wheelYAction = kb.RotateRelative, this._wheelYActionCoordinate = bb)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== kb.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(bb) {
          null === bb && this._wheelZAction !== kb.RotateRelative || (this._wheelZAction = kb.RotateRelative, this._wheelZActionCoordinate = bb)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== kb.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(bb) {
          null === bb && this._wheelXAction !== kb.MoveScene || (this._wheelXAction = kb.MoveScene, this._wheelXActionCoordinate = bb)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== kb.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(bb) {
          null === bb && this._wheelYAction !== kb.MoveScene || (this._wheelYAction = kb.MoveScene, this._wheelYActionCoordinate = bb)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== kb.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(bb) {
          null === bb && this._wheelZAction !== kb.MoveScene || (this._wheelZAction = kb.MoveScene, this._wheelZActionCoordinate = bb)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== kb.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.B3(0), this._rotateRelative.B3(0), this._moveScene.B3(0), this._updateCamera(), this.camera.oN().useRightHandedSystem && (this._moveRelative.z *= -1);
          const bb = Tb.b.Zero();
          this.camera.getViewMatrix().invertToRef(bb);
          const ab = Tb.m.Zero();
          Tb.m.TransformNormalToRef(this._moveRelative, bb, ab), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ab), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(bb, ab, Ub) {
          if (0 === bb) return;
          if (null === ab || null === Ub) return;
          let Ab = null;
          switch (ab) {
            case kb.MoveRelative:
              Ab = this._moveRelative;
              break;
            case kb.RotateRelative:
              Ab = this._rotateRelative;
              break;
            case kb.MoveScene:
              Ab = this._moveScene
          }
          switch (Ub) {
            case 0:
              Ab.set(bb, 0, 0);
              break;
            case 1:
              Ab.set(0, bb, 0);
              break;
            case 2:
              Ab.set(0, 0, bb)
          }
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Eb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], (0, Ab.h)(bb, null, ab, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveRelative" in bb,
            set: (bb, ab) => {
              bb.wheelXMoveRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Ub, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveRelative" in bb,
            set: (bb, ab) => {
              bb.wheelYMoveRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Eb, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveRelative" in bb,
            set: (bb, ab) => {
              bb.wheelZMoveRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Yb, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXRotateRelative" in bb,
            set: (bb, ab) => {
              bb.wheelXRotateRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Bb, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYRotateRelative" in bb,
            set: (bb, ab) => {
              bb.wheelYRotateRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, eb, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZRotateRelative" in bb,
            set: (bb, ab) => {
              bb.wheelZRotateRelative = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, vb, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelXMoveScene" in bb,
            set: (bb, ab) => {
              bb.wheelXMoveScene = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Lb, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelYMoveScene" in bb,
            set: (bb, ab) => {
              bb.wheelYMoveScene = ab
            }
          },
          metadata: Tb
        }, null, jb), (0, Ab.h)(bb, null, Pb, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelZMoveScene" in bb,
            set: (bb, ab) => {
              bb.wheelZMoveScene = ab
            }
          },
          metadata: Tb
        }, null, jb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb
    })();
    Yb.b.FreeCameraMouseWheelInput = yb;
    let Zb = (() => {
      var bb;
      let ab, Ub, Eb = [],
        Yb = [],
        Bb = [],
        vb = [];
      return bb = class {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = bb, this.touchAngularSensibility = (0, Ab.k)(this, Eb, 2e5), this.touchMoveSensibility = ((0, Ab.k)(this, Yb), (0, Ab.k)(this, Bb, 250)), this.singleFingerRotate = ((0, Ab.k)(this, vb), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = eb.h.IsSafari()
        }
        attachControl(bb) {
          bb = eb.h.BackCompatCameraNoPreventDefault(arguments);
          let ab = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Ub => {
              const Ab = Ub.event,
                Mb = "mouse" === Ab.pointerType || this._isSafari && "undefined" === typeof Ab.pointerType;
              if (this.allowMouse || !Mb)
                if (Ub.type === Pb.c.POINTERDOWN) {
                  if (bb || Ab.preventDefault(), this._pointerPressed.push(Ab.pointerId), 1 !== this._pointerPressed.length) return;
                  ab = {
                    x: Ab.clientX,
                    y: Ab.clientY
                  }
                } else if (Ub.type === Pb.c.POINTERUP) {
                bb || Ab.preventDefault();
                const Ub = this._pointerPressed.indexOf(Ab.pointerId);
                if (-1 === Ub) return;
                if (this._pointerPressed.splice(Ub, 1), 0 != Ub) return;
                ab = null, this._offsetX = null, this._offsetY = null
              } else if (Ub.type === Pb.c.POINTERMOVE) {
                if (bb || Ab.preventDefault(), !ab) return;
                if (0 != this._pointerPressed.indexOf(Ab.pointerId)) return;
                this._offsetX = Ab.clientX - ab.x, this._offsetY = -(Ab.clientY - ab.y)
              }
            }), this._observer = this.camera.oN()._inputManager._addCameraPointerObserver(this._pointerInput, Pb.c.POINTERDOWN | Pb.c.POINTERUP | Pb.c.POINTERMOVE), this._onLostFocus) {
            const bb = this.camera.vj().getInputElement();
            bb && bb.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.oN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const bb = this.camera.vj().getInputElement();
              bb && bb.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const bb = this.camera,
            ab = bb.movement.input,
            Ub = ab.getEntry("touch", "rotate"),
            Ab = ab.getEntry("touch", "translate"),
            Mb = bb._calculateHandednessMultiplier(),
            Eb = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Ub) {
            const ab = Ub.sensitivity ?? 1 / this.touchAngularSensibility;
            bb.cameraRotation.y = this._offsetX * Mb * ab, Eb && (bb.cameraRotation.x = -this._offsetY * Mb * ab)
          }
          if (!Eb && Ab) {
            const ab = bb._computeLocalCameraSpeed(),
              Ub = Ab.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Mb = Tb.j.Pj[0];
            Mb.K9(0, 0, ab * this._offsetY * Ub), Tb.b.RotationYawPitchRollToRef(bb.rotation.y, bb.rotation.x, 0, bb._cameraRotationMatrix), Tb.m.TransformCoordinatesToRef(Mb, bb._cameraRotationMatrix, Mb), bb.cameraDirection.addInPlace(Mb)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchAngularSensibility" in bb,
            get: bb => bb.touchAngularSensibility,
            set: (bb, ab) => {
              bb.touchAngularSensibility = ab
            }
          },
          metadata: Tb
        }, Eb, Yb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "touchMoveSensibility" in bb,
            get: bb => bb.touchMoveSensibility,
            set: (bb, ab) => {
              bb.touchMoveSensibility = ab
            }
          },
          metadata: Tb
        }, Bb, vb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb
    })();
    Yb.b.FreeCameraTouchInput = Zb;
    var Db, zb, xb, ib = Ub(38982);
    class fb extends Yb.f {
      constructor(bb) {
        super(bb), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new vb), this
      }
      addMouse() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Xb(bb), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new yb, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Zb), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Db = fb.prototype).addDeviceOrientation ?? (Db.addDeviceOrientation = (0, ib.i)("FreeCameraInputsManager", "addDeviceOrientation")), (zb = fb.prototype).addVirtualJoystick ?? (zb.addVirtualJoystick = (0, ib.i)("FreeCameraInputsManager", "addVirtualJoystick")), (xb = fb.prototype).addGamepad ?? (xb.addGamepad = (0, ib.i)("FreeCameraInputsManager", "addGamepad"));
    var mb = Ub(39002),
      pb = Ub(36447);
    let Nb = (() => {
        var bb;
        let ab, Ub, Yb, Bb, vb = Eb.h,
          Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [],
          yb = [],
          Zb = [];
        return bb = class extends vb {
          get angularSensibility() {
            const bb = this.inputs.attached.mouse;
            return bb ? bb.angularSensibility : 0
          }
          set angularSensibility(bb) {
            const ab = this.inputs.attached.mouse;
            ab && (ab.angularSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysUp = bb)
          }
          get keysUpward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUpward : []
          }
          set keysUpward(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysUpward = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysDown = bb)
          }
          get keysDownward() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDownward : []
          }
          set keysDownward(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysDownward = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRight = bb)
          }
          get keysRotateLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateLeft : []
          }
          set keysRotateLeft(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRotateLeft = bb)
          }
          get keysRotateRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateRight : []
          }
          set keysRotateRight(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRotateRight = bb)
          }
          get keysRotateUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateUp : []
          }
          set keysRotateUp(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRotateUp = bb)
          }
          get keysRotateDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRotateDown : []
          }
          set keysRotateDown(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRotateDown = bb)
          }
          constructor(bb, ab, Ub) {
            var Mb;
            super(bb, ab, Ub, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Mb = this, this.ellipsoid = (0, Ab.k)(this, Lb, new Tb.m(.5, 1, .5)), this.ellipsoidOffset = ((0, Ab.k)(this, Pb), (0, Ab.k)(this, Xb, new Tb.m(0, 0, 0))), this.checkCollisions = ((0, Ab.k)(this, jb), (0, Ab.k)(this, Rb, !1)), this.applyGravity = ((0, Ab.k)(this, kb), (0, Ab.k)(this, yb, !1)), this.inputs = (0, Ab.k)(this, Zb), this._needMoveForGravity = !1, this._oldPosition = Tb.m.Zero(), this._diffPosition = Tb.m.Zero(), this._newPosition = Tb.m.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(bb, ab) {
              let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Mb._newPosition.EUb(ab), Mb._newPosition.subtractToRef(Mb._oldPosition, Mb._diffPosition), Mb._diffPosition.length() > mb.d.CollisionsEpsilon && (Mb.position.addToRef(Mb._diffPosition, Mb._deferredPositionUpdate), Mb._deferOnly ? Mb._deferredUpdated = !0 : Mb.position.EUb(Mb._deferredPositionUpdate), Mb.SL && Ub && Mb.SL(Ub))
            }, this.inputs = new fb(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(bb, ab) {
            ab = eb.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ab)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Tb.m(0, 0, 0), this.cameraRotation = new Tb.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(bb) {
            this._collisionMask = isNaN(bb) ? -1 : bb
          }
          _collideWithWorld(bb) {
            let ab;
            ab = this.parent ? Tb.m.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ab.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Ub = this.oN().collisionCoordinator;
            this._collider || (this._collider = Ub.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Ab = bb;
            this.applyGravity && (Ab = bb.add(this.oN().gravity)), Ub.getNewPosition(this._oldPosition, Ab, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Tb.m.Zero(), this._transformedDirection = Tb.m.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.oN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(vb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.I)()], Ub = [(0, Mb.I)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoid" in bb,
              get: bb => bb.ellipsoid,
              set: (bb, ab) => {
                bb.ellipsoid = ab
              }
            },
            metadata: Tb
          }, Lb, Pb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "ellipsoidOffset" in bb,
              get: bb => bb.ellipsoidOffset,
              set: (bb, ab) => {
                bb.ellipsoidOffset = ab
              }
            },
            metadata: Tb
          }, Xb, jb), (0, Ab.h)(null, null, Yb, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: bb => "checkCollisions" in bb,
              get: bb => bb.checkCollisions,
              set: (bb, ab) => {
                bb.checkCollisions = ab
              }
            },
            metadata: Tb
          }, Rb, kb), (0, Ab.h)(null, null, Bb, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyGravity" in bb,
              get: bb => bb.applyGravity,
              set: (bb, ab) => {
                bb.applyGravity = ab
              }
            },
            metadata: Tb
          }, yb, Zb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Wb = !1;
    Wb || (Wb = !0, (0, pb.f)("BABYLON.FreeCamera", Nb))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
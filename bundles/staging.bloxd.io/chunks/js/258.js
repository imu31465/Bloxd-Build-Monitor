export const id = 258;
export const ids = [258];
export const modules = {
  40309: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Zm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(40316),
      wm = fm(40340),
      Dm = fm(40287),
      im = fm(40203);
    let Rm = (() => {
      var mm;
      let Tm, fm, xm, wm, Rm, pm, Em, om, Om, Ym, qm, jm = [],
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        zm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [];
      return mm = class {
        constructor() {
          this.keysUp = (0, hm.i)(this, jm, [38]), this.keysUpward = ((0, hm.i)(this, Vm), (0, hm.i)(this, Im, [33])), this.keysDown = ((0, hm.i)(this, Km), (0, hm.i)(this, Qm, [40])), this.keysDownward = ((0, hm.i)(this, nm), (0, hm.i)(this, Jm, [34])), this.keysLeft = ((0, hm.i)(this, cm), (0, hm.i)(this, zm, [37])), this.keysRight = ((0, hm.i)(this, Zm), (0, hm.i)(this, km, [39])), this.rotationSpeed = ((0, hm.i)(this, bm), (0, hm.i)(this, Sm, .5)), this.keysRotateLeft = ((0, hm.i)(this, em), (0, hm.i)(this, Nm, [])), this.keysRotateRight = ((0, hm.i)(this, Gm), (0, hm.i)(this, Xm, [])), this.keysRotateUp = ((0, hm.i)(this, Pm), (0, hm.i)(this, Hm, [])), this.keysRotateDown = ((0, hm.i)(this, ym), (0, hm.i)(this, Cm, [])), this._keys = ((0, hm.i)(this, rm), new Array)
        }
        attachControl(mm) {
          mm = im.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.wG(), this._engine = this._scene.dO(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Tm => {
            const fm = Tm.event;
            if (!fm.metaKey)
              if (Tm.type === Dm.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(fm.keyCode) || -1 !== this.keysDown.indexOf(fm.keyCode) || -1 !== this.keysLeft.indexOf(fm.keyCode) || -1 !== this.keysRight.indexOf(fm.keyCode) || -1 !== this.keysUpward.indexOf(fm.keyCode) || -1 !== this.keysDownward.indexOf(fm.keyCode) || -1 !== this.keysRotateLeft.indexOf(fm.keyCode) || -1 !== this.keysRotateRight.indexOf(fm.keyCode) || -1 !== this.keysRotateUp.indexOf(fm.keyCode) || -1 !== this.keysRotateDown.indexOf(fm.keyCode)) {
                  -1 === this._keys.indexOf(fm.keyCode) && this._keys.push(fm.keyCode), mm || fm.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(fm.keyCode) || -1 !== this.keysDown.indexOf(fm.keyCode) || -1 !== this.keysLeft.indexOf(fm.keyCode) || -1 !== this.keysRight.indexOf(fm.keyCode) || -1 !== this.keysUpward.indexOf(fm.keyCode) || -1 !== this.keysDownward.indexOf(fm.keyCode) || -1 !== this.keysRotateLeft.indexOf(fm.keyCode) || -1 !== this.keysRotateRight.indexOf(fm.keyCode) || -1 !== this.keysRotateUp.indexOf(fm.keyCode) || -1 !== this.keysRotateDown.indexOf(fm.keyCode)) {
              const Tm = this._keys.indexOf(fm.keyCode);
              Tm >= 0 && this._keys.splice(Tm, 1), mm || fm.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const mm = this.camera,
              Tm = mm.movement.input,
              fm = Tm.getEntry("keyboard", "translate"),
              hm = Tm.getEntry("keyboard", "rotate"),
              Am = hm?.sensitivity ?? 1,
              xm = mm._localDirection.Z8(0, 0, 0);
            for (let am = 0; am < this._keys.length; am++) {
              const Tm = this._keys[am]; - 1 !== this.keysLeft.indexOf(Tm) ? xm.x -= 1 : -1 !== this.keysUp.indexOf(Tm) ? xm.z += 1 : -1 !== this.keysRight.indexOf(Tm) ? xm.x += 1 : -1 !== this.keysDown.indexOf(Tm) ? xm.z -= 1 : -1 !== this.keysUpward.indexOf(Tm) ? xm.y += 1 : -1 !== this.keysDownward.indexOf(Tm) ? xm.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Tm) ? hm && (mm.cameraRotation.y -= this._getLocalRotation() * Am) : -1 !== this.keysRotateRight.indexOf(Tm) ? hm && (mm.cameraRotation.y += this._getLocalRotation() * Am) : -1 !== this.keysRotateUp.indexOf(Tm) ? hm && (mm.cameraRotation.x -= this._getLocalRotation() * Am) : -1 !== this.keysRotateDown.indexOf(Tm) && hm && (mm.cameraRotation.x += this._getLocalRotation() * Am)
            }
            if (fm && (0 !== xm.x || 0 !== xm.y || 0 !== xm.z)) {
              const Tm = mm._computeLocalCameraSpeed() * (fm.sensitivity ?? 1);
              xm.normalize().scaleInPlace(Tm), mm.wG().useRightHandedSystem && (xm.z *= -1), mm.getViewMatrix().invertToRef(mm._cameraTransformMatrix), am.p.TransformNormalToRef(xm, mm._cameraTransformMatrix, mm._transformedDirection), mm.cameraDirection.addInPlace(mm._transformedDirection)
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
          const mm = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * mm
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], xm = [(0, Am.J)()], wm = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], om = [(0, Am.J)()], Om = [(0, Am.J)()], Ym = [(0, Am.J)()], qm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysUp" in mm,
            get: mm => mm.keysUp,
            set: (mm, Tm) => {
              mm.keysUp = Tm
            }
          },
          metadata: am
        }, jm, Vm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysUpward" in mm,
            get: mm => mm.keysUpward,
            set: (mm, Tm) => {
              mm.keysUpward = Tm
            }
          },
          metadata: am
        }, Im, Km), (0, hm.g)(null, null, xm, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysDown" in mm,
            get: mm => mm.keysDown,
            set: (mm, Tm) => {
              mm.keysDown = Tm
            }
          },
          metadata: am
        }, Qm, nm), (0, hm.g)(null, null, wm, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysDownward" in mm,
            get: mm => mm.keysDownward,
            set: (mm, Tm) => {
              mm.keysDownward = Tm
            }
          },
          metadata: am
        }, Jm, cm), (0, hm.g)(null, null, Rm, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysLeft" in mm,
            get: mm => mm.keysLeft,
            set: (mm, Tm) => {
              mm.keysLeft = Tm
            }
          },
          metadata: am
        }, zm, Zm), (0, hm.g)(null, null, pm, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRight" in mm,
            get: mm => mm.keysRight,
            set: (mm, Tm) => {
              mm.keysRight = Tm
            }
          },
          metadata: am
        }, km, bm), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: mm => "rotationSpeed" in mm,
            get: mm => mm.rotationSpeed,
            set: (mm, Tm) => {
              mm.rotationSpeed = Tm
            }
          },
          metadata: am
        }, Sm, em), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRotateLeft" in mm,
            get: mm => mm.keysRotateLeft,
            set: (mm, Tm) => {
              mm.keysRotateLeft = Tm
            }
          },
          metadata: am
        }, Nm, Gm), (0, hm.g)(null, null, Om, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRotateRight" in mm,
            get: mm => mm.keysRotateRight,
            set: (mm, Tm) => {
              mm.keysRotateRight = Tm
            }
          },
          metadata: am
        }, Xm, Pm), (0, hm.g)(null, null, Ym, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRotateUp" in mm,
            get: mm => mm.keysRotateUp,
            set: (mm, Tm) => {
              mm.keysRotateUp = Tm
            }
          },
          metadata: am
        }, Hm, ym), (0, hm.g)(null, null, qm, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRotateDown" in mm,
            get: mm => mm.keysRotateDown,
            set: (mm, Tm) => {
              mm.keysRotateDown = Tm
            }
          },
          metadata: am
        }, Cm, rm), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm
    })();
    wm.c.FreeCameraKeyboardMoveInput = Rm;
    var pm = fm(37203),
      Em = fm(40283);
    let om = (() => {
      var mm;
      let Tm, fm, am = [],
        xm = [],
        wm = [],
        Dm = [];
      return mm = class {
        _applyPointerRotation(mm, Tm) {
          this._pointerConditions.button = this._currentActiveButton;
          const fm = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!fm || "rotate" !== fm.interaction) return;
          const hm = fm.nB ?? fm.sensitivity ?? 1 / this.angularSensibility,
            Am = fm.JB ?? fm.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += mm * hm, this.camera.cameraRotation.x += Tm * Am
        }
        constructor() {
          let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = mm, this.buttons = (0, hm.i)(this, am, [0, 1, 2]), this.angularSensibility = ((0, hm.i)(this, xm), (0, hm.i)(this, wm, 2e3)), this._pointerInput = (0, hm.i)(this, Dm), this._previousPosition = null, this.onPointerMovedObservable = new pm.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(mm) {
          mm = im.h.BackCompatCameraNoPreventDefault(arguments);
          const Tm = this.camera.dO(),
            fm = Tm.getInputElement();
          this._pointerInput || (this._pointerInput = hm => {
            const Am = hm.event,
              am = "touch" === Am.pointerType;
            if (!this.touchEnabled && am) return;
            if (hm.type !== Em.c.POINTERMOVE && -1 === this.buttons.indexOf(Am.button)) return;
            const xm = Am.target;
            if (hm.type === Em.c.POINTERDOWN) {
              if (am && -1 !== this._activePointerId || !am && -1 !== this._currentActiveButton) return;
              this._activePointerId = Am.pointerId;
              try {
                xm?.setPointerCapture(Am.pointerId)
              } catch (wm) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Am.button), this._previousPosition = {
                x: Am.clientX,
                y: Am.clientY
              }, mm || (Am.preventDefault(), fm && fm.focus()), Tm.isPointerLock && this._onMouseMove && this._onMouseMove(hm.event)
            } else if (hm.type === Em.c.POINTERUP) {
              if (am && this._activePointerId !== Am.pointerId || !am && this._currentActiveButton !== Am.button) return;
              try {
                xm?.releasePointerCapture(Am.pointerId)
              } catch (wm) {}
              this._currentActiveButton = -1, this._previousPosition = null, mm || Am.preventDefault(), this._activePointerId = -1
            } else if (hm.type === Em.c.POINTERMOVE && (this._activePointerId === Am.pointerId || !am))
              if (Tm.isPointerLock && this._onMouseMove) this._onMouseMove(hm.event);
              else if (this._previousPosition) {
              const Tm = this.camera._calculateHandednessMultiplier(),
                fm = (Am.clientX - this._previousPosition.x) * Tm,
                hm = (Am.clientY - this._previousPosition.y) * Tm;
              this._allowCameraRotation && this._applyPointerRotation(fm, hm), this.onPointerMovedObservable.notifyObservers({
                offsetX: fm,
                offsetY: hm
              }), this._previousPosition = {
                x: Am.clientX,
                y: Am.clientY
              }, mm || Am.preventDefault()
            }
          }), this._onMouseMove = fm => {
            if (!Tm.isPointerLock) return;
            const hm = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(fm.movementX * hm, fm.movementY * hm), this._previousPosition = null, mm || fm.preventDefault()
          }, this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._pointerInput, Em.c.POINTERDOWN | Em.c.POINTERUP | Em.c.POINTERMOVE), fm && (this._contextMenuBind = mm => this.onContextMenu(mm), fm.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(mm) {
          mm.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const mm = this.camera.dO().getInputElement();
              mm && mm.removeEventListener("contextmenu", this._contextMenuBind)
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
        const im = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: mm => "buttons" in mm,
            get: mm => mm.buttons,
            set: (mm, Tm) => {
              mm.buttons = Tm
            }
          },
          metadata: im
        }, am, xm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: mm => "angularSensibility" in mm,
            get: mm => mm.angularSensibility,
            set: (mm, Tm) => {
              mm.angularSensibility = Tm
            }
          },
          metadata: im
        }, wm, Dm), im && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: im
        })
      })(), mm
    })();
    wm.c.FreeCameraMouseInput = om;
    var Om = fm(40292);
    let Ym = (() => {
      var mm;
      let Tm, fm, am, xm = [],
        wm = [],
        Dm = [],
        Rm = [],
        om = [],
        Ym = [];
      return mm = class {
        constructor() {
          this.wheelPrecisionX = (0, hm.i)(this, xm, 3), this.wheelPrecisionY = ((0, hm.i)(this, wm), (0, hm.i)(this, Dm, 3)), this.wheelPrecisionZ = ((0, hm.i)(this, Rm), (0, hm.i)(this, om, 3)), this.onChangedObservable = ((0, hm.i)(this, Ym), new pm.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(mm) {
          mm = im.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Tm => {
            if (Tm.type !== Em.c.POINTERWHEEL) return;
            const fm = Tm.event,
              hm = fm.deltaMode === Om.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * hm * fm.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * hm * fm.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * hm * fm.deltaZ / this._normalize, fm.preventDefault && (mm || fm.preventDefault())
          }, this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._wheel, Em.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const im = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelPrecisionX" in mm,
            get: mm => mm.wheelPrecisionX,
            set: (mm, Tm) => {
              mm.wheelPrecisionX = Tm
            }
          },
          metadata: im
        }, xm, wm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelPrecisionY" in mm,
            get: mm => mm.wheelPrecisionY,
            set: (mm, Tm) => {
              mm.wheelPrecisionY = Tm
            }
          },
          metadata: im
        }, Dm, Rm), (0, hm.g)(null, null, am, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelPrecisionZ" in mm,
            get: mm => mm.wheelPrecisionZ,
            set: (mm, Tm) => {
              mm.wheelPrecisionZ = Tm
            }
          },
          metadata: im
        }, om, Ym), im && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: im
        })
      })(), mm
    })();
    var qm;
    ! function(mm) {
      mm[mm.MoveRelative = 0] = "MoveRelative", mm[mm.RotateRelative = 1] = "RotateRelative", mm[mm.MoveScene = 2] = "MoveScene"
    }(qm || (qm = {}));
    let jm = (() => {
      var mm;
      let Tm, fm, xm, wm, Dm, im, Rm, pm, Em, om = Ym,
        Om = [];
      return mm = class extends om {
        constructor() {
          super(...arguments), this.camera = (0, hm.i)(this, Om), this._moveRelative = am.p.Zero(), this._rotateRelative = am.p.Zero(), this._moveScene = am.p.Zero(), this._wheelXAction = qm.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = qm.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(mm) {
          null === mm && this._wheelXAction !== qm.MoveRelative || (this._wheelXAction = qm.MoveRelative, this._wheelXActionCoordinate = mm)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== qm.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(mm) {
          null === mm && this._wheelYAction !== qm.MoveRelative || (this._wheelYAction = qm.MoveRelative, this._wheelYActionCoordinate = mm)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== qm.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(mm) {
          null === mm && this._wheelZAction !== qm.MoveRelative || (this._wheelZAction = qm.MoveRelative, this._wheelZActionCoordinate = mm)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== qm.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(mm) {
          null === mm && this._wheelXAction !== qm.RotateRelative || (this._wheelXAction = qm.RotateRelative, this._wheelXActionCoordinate = mm)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== qm.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(mm) {
          null === mm && this._wheelYAction !== qm.RotateRelative || (this._wheelYAction = qm.RotateRelative, this._wheelYActionCoordinate = mm)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== qm.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(mm) {
          null === mm && this._wheelZAction !== qm.RotateRelative || (this._wheelZAction = qm.RotateRelative, this._wheelZActionCoordinate = mm)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== qm.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(mm) {
          null === mm && this._wheelXAction !== qm.MoveScene || (this._wheelXAction = qm.MoveScene, this._wheelXActionCoordinate = mm)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== qm.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(mm) {
          null === mm && this._wheelYAction !== qm.MoveScene || (this._wheelYAction = qm.MoveScene, this._wheelYActionCoordinate = mm)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== qm.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(mm) {
          null === mm && this._wheelZAction !== qm.MoveScene || (this._wheelZAction = qm.MoveScene, this._wheelZActionCoordinate = mm)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== qm.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Y5(0), this._rotateRelative.Y5(0), this._moveScene.Y5(0), this._updateCamera(), this.camera.wG().useRightHandedSystem && (this._moveRelative.z *= -1);
          const mm = am.e.Zero();
          this.camera.getViewMatrix().invertToRef(mm);
          const Tm = am.p.Zero();
          am.p.TransformNormalToRef(this._moveRelative, mm, Tm), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Tm), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(mm, Tm, fm) {
          if (0 === mm) return;
          if (null === Tm || null === fm) return;
          let hm = null;
          switch (Tm) {
            case qm.MoveRelative:
              hm = this._moveRelative;
              break;
            case qm.RotateRelative:
              hm = this._rotateRelative;
              break;
            case qm.MoveScene:
              hm = this._moveScene
          }
          switch (fm) {
            case 0:
              hm.set(mm, 0, 0);
              break;
            case 1:
              hm.set(0, mm, 0);
              break;
            case 2:
              hm.set(0, 0, mm)
          }
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(om[Symbol.metadata] ?? null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], xm = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], (0, hm.g)(mm, null, Tm, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelXMoveRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelXMoveRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, fm, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelYMoveRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelYMoveRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, xm, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelZMoveRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelZMoveRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, wm, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelXRotateRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelXRotateRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, Dm, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelYRotateRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelYRotateRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, im, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelZRotateRelative" in mm,
            set: (mm, Tm) => {
              mm.wheelZRotateRelative = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, Rm, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelXMoveScene" in mm,
            set: (mm, Tm) => {
              mm.wheelXMoveScene = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, pm, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelYMoveScene" in mm,
            set: (mm, Tm) => {
              mm.wheelYMoveScene = Tm
            }
          },
          metadata: am
        }, null, Om), (0, hm.g)(mm, null, Em, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelZMoveScene" in mm,
            set: (mm, Tm) => {
              mm.wheelZMoveScene = Tm
            }
          },
          metadata: am
        }, null, Om), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm
    })();
    wm.c.FreeCameraMouseWheelInput = jm;
    let Vm = (() => {
      var mm;
      let Tm, fm, xm = [],
        wm = [],
        Dm = [],
        Rm = [];
      return mm = class {
        constructor() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = mm, this.touchAngularSensibility = (0, hm.i)(this, xm, 2e5), this.touchMoveSensibility = ((0, hm.i)(this, wm), (0, hm.i)(this, Dm, 250)), this.singleFingerRotate = ((0, hm.i)(this, Rm), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = im.h.IsSafari()
        }
        attachControl(mm) {
          mm = im.h.BackCompatCameraNoPreventDefault(arguments);
          let Tm = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = fm => {
              const hm = fm.event,
                Am = "mouse" === hm.pointerType || this._isSafari && "undefined" === typeof hm.pointerType;
              if (this.allowMouse || !Am)
                if (fm.type === Em.c.POINTERDOWN) {
                  if (mm || hm.preventDefault(), this._pointerPressed.push(hm.pointerId), 1 !== this._pointerPressed.length) return;
                  Tm = {
                    x: hm.clientX,
                    y: hm.clientY
                  }
                } else if (fm.type === Em.c.POINTERUP) {
                mm || hm.preventDefault();
                const fm = this._pointerPressed.indexOf(hm.pointerId);
                if (-1 === fm) return;
                if (this._pointerPressed.splice(fm, 1), 0 != fm) return;
                Tm = null, this._offsetX = null, this._offsetY = null
              } else if (fm.type === Em.c.POINTERMOVE) {
                if (mm || hm.preventDefault(), !Tm) return;
                if (0 != this._pointerPressed.indexOf(hm.pointerId)) return;
                this._offsetX = hm.clientX - Tm.x, this._offsetY = -(hm.clientY - Tm.y)
              }
            }), this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._pointerInput, Em.c.POINTERDOWN | Em.c.POINTERUP | Em.c.POINTERMOVE), this._onLostFocus) {
            const mm = this.camera.dO().getInputElement();
            mm && mm.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const mm = this.camera.dO().getInputElement();
              mm && mm.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const mm = this.camera,
            Tm = mm.movement.input,
            fm = Tm.getEntry("touch", "rotate"),
            hm = Tm.getEntry("touch", "translate"),
            Am = mm._calculateHandednessMultiplier(),
            xm = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (fm) {
            const Tm = fm.sensitivity ?? 1 / this.touchAngularSensibility;
            mm.cameraRotation.y = this._offsetX * Am * Tm, xm && (mm.cameraRotation.x = -this._offsetY * Am * Tm)
          }
          if (!xm && hm) {
            const Tm = mm._computeLocalCameraSpeed(),
              fm = hm.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Am = am.j.WO[0];
            Am.Z8(0, 0, Tm * this._offsetY * fm), am.e.RotationYawPitchRollToRef(mm.rotation.y, mm.rotation.x, 0, mm._cameraRotationMatrix), am.p.TransformCoordinatesToRef(Am, mm._cameraRotationMatrix, Am), mm.cameraDirection.addInPlace(Am)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: mm => "touchAngularSensibility" in mm,
            get: mm => mm.touchAngularSensibility,
            set: (mm, Tm) => {
              mm.touchAngularSensibility = Tm
            }
          },
          metadata: am
        }, xm, wm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: mm => "touchMoveSensibility" in mm,
            get: mm => mm.touchMoveSensibility,
            set: (mm, Tm) => {
              mm.touchMoveSensibility = Tm
            }
          },
          metadata: am
        }, Dm, Rm), am && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: am
        })
      })(), mm
    })();
    wm.c.FreeCameraTouchInput = Vm;
    var Im, Km, Qm, nm = fm(39993);
    class Jm extends wm.g {
      constructor(mm) {
        super(mm), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Rm), this
      }
      addMouse() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new om(mm), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new jm, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Vm), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Im = Jm.prototype).addDeviceOrientation ?? (Im.addDeviceOrientation = (0, nm.f)("FreeCameraInputsManager", "addDeviceOrientation")), (Km = Jm.prototype).addVirtualJoystick ?? (Km.addVirtualJoystick = (0, nm.f)("FreeCameraInputsManager", "addVirtualJoystick")), (Qm = Jm.prototype).addGamepad ?? (Qm.addGamepad = (0, nm.f)("FreeCameraInputsManager", "addGamepad"));
    var cm = fm(40014),
      zm = fm(37224);
    let Zm = (() => {
        var mm;
        let Tm, fm, wm, Dm, Rm = xm.g,
          pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [],
          jm = [],
          Vm = [];
        return mm = class extends Rm {
          get angularSensibility() {
            const mm = this.inputs.attached.mouse;
            return mm ? mm.angularSensibility : 0
          }
          set angularSensibility(mm) {
            const Tm = this.inputs.attached.mouse;
            Tm && (Tm.angularSensibility = mm)
          }
          get keysUp() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysUp : []
          }
          set keysUp(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysUp = mm)
          }
          get keysUpward() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysUpward : []
          }
          set keysUpward(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysUpward = mm)
          }
          get keysDown() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysDown : []
          }
          set keysDown(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysDown = mm)
          }
          get keysDownward() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysDownward : []
          }
          set keysDownward(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysDownward = mm)
          }
          get keysLeft() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysLeft : []
          }
          set keysLeft(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysLeft = mm)
          }
          get keysRight() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRight : []
          }
          set keysRight(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRight = mm)
          }
          get keysRotateLeft() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRotateLeft : []
          }
          set keysRotateLeft(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRotateLeft = mm)
          }
          get keysRotateRight() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRotateRight : []
          }
          set keysRotateRight(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRotateRight = mm)
          }
          get keysRotateUp() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRotateUp : []
          }
          set keysRotateUp(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRotateUp = mm)
          }
          get keysRotateDown() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRotateDown : []
          }
          set keysRotateDown(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRotateDown = mm)
          }
          constructor(mm, Tm, fm) {
            var Am;
            super(mm, Tm, fm, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Am = this, this.ellipsoid = (0, hm.i)(this, pm, new am.p(.5, 1, .5)), this.ellipsoidOffset = ((0, hm.i)(this, Em), (0, hm.i)(this, om, new am.p(0, 0, 0))), this.checkCollisions = ((0, hm.i)(this, Om), (0, hm.i)(this, Ym, !1)), this.applyGravity = ((0, hm.i)(this, qm), (0, hm.i)(this, jm, !1)), this.inputs = (0, hm.i)(this, Vm), this._needMoveForGravity = !1, this._oldPosition = am.p.Zero(), this._diffPosition = am.p.Zero(), this._newPosition = am.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(mm, Tm) {
              let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Am._newPosition.ZZ(Tm), Am._newPosition.subtractToRef(Am._oldPosition, Am._diffPosition), Am._diffPosition.length() > cm.b.CollisionsEpsilon && (Am.position.addToRef(Am._diffPosition, Am._deferredPositionUpdate), Am._deferOnly ? Am._deferredUpdated = !0 : Am.position.ZZ(Am._deferredPositionUpdate), Am.cE && fm && Am.cE(fm))
            }, this.inputs = new Jm(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(mm, Tm) {
            Tm = im.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Tm)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new am.p(0, 0, 0), this.cameraRotation = new am.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(mm) {
            this._collisionMask = isNaN(mm) ? -1 : mm
          }
          _collideWithWorld(mm) {
            let Tm;
            Tm = this.parent ? am.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Tm.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const fm = this.wG().collisionCoordinator;
            this._collider || (this._collider = fm.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let hm = mm;
            this.applyGravity && (hm = mm.add(this.wG().gravity)), fm.getNewPosition(this._oldPosition, hm, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = am.p.Zero(), this._transformedDirection = am.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(mm) {
            this._needMoveForGravity = mm
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.wG().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.F)()], fm = [(0, Am.F)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: mm => "ellipsoid" in mm,
              get: mm => mm.ellipsoid,
              set: (mm, Tm) => {
                mm.ellipsoid = Tm
              }
            },
            metadata: am
          }, pm, Em), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "ellipsoidOffset" in mm,
              get: mm => mm.ellipsoidOffset,
              set: (mm, Tm) => {
                mm.ellipsoidOffset = Tm
              }
            },
            metadata: am
          }, om, Om), (0, hm.g)(null, null, wm, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: mm => "checkCollisions" in mm,
              get: mm => mm.checkCollisions,
              set: (mm, Tm) => {
                mm.checkCollisions = Tm
              }
            },
            metadata: am
          }, Ym, qm), (0, hm.g)(null, null, Dm, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: mm => "applyGravity" in mm,
              get: mm => mm.applyGravity,
              set: (mm, Tm) => {
                mm.applyGravity = Tm
              }
            },
            metadata: am
          }, jm, Vm), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      km = !1;
    km || (km = !0, (0, zm.d)("BABYLON.FreeCamera", Zm))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
export const id = 262;
export const ids = [262];
export const modules = {
  40397: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Wt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(40401),
      dt = Vt(40431),
      jt = Vt(40379),
      Ht = Vt(40300);
    let Xt = (() => {
      var tt;
      let et, Vt, mt, dt, Xt, Qt, lt, Et, ft, wt, yt, Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
        vt = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [],
        It = [],
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [],
        ot = [];
      return tt = class {
        constructor() {
          this.keysUp = (0, Ot.m)(this, Nt, [38]), this.keysUpward = ((0, Ot.m)(this, Mt), (0, Ot.m)(this, bt, [33])), this.keysDown = ((0, Ot.m)(this, Jt), (0, Ot.m)(this, Ct, [40])), this.keysDownward = ((0, Ot.m)(this, ut), (0, Ot.m)(this, Kt, [34])), this.keysLeft = ((0, Ot.m)(this, ht), (0, Ot.m)(this, vt, [37])), this.keysRight = ((0, Ot.m)(this, Wt), (0, Ot.m)(this, St, [39])), this.rotationSpeed = ((0, Ot.m)(this, ct), (0, Ot.m)(this, Rt, .5)), this.keysRotateLeft = ((0, Ot.m)(this, It), (0, Ot.m)(this, Pt, [])), this.keysRotateRight = ((0, Ot.m)(this, Zt), (0, Ot.m)(this, Lt, [])), this.keysRotateUp = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, [])), this.keysRotateDown = ((0, Ot.m)(this, Gt), (0, Ot.m)(this, zt, [])), this._keys = ((0, Ot.m)(this, ot), new Array)
        }
        attachControl(tt) {
          tt = Ht.l.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.vI(), this._engine = this._scene.Jf(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((et => {
            const Vt = et.event;
            if (!Vt.metaKey)
              if (et.type === jt.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(Vt.keyCode) || -1 !== this.keysDown.indexOf(Vt.keyCode) || -1 !== this.keysLeft.indexOf(Vt.keyCode) || -1 !== this.keysRight.indexOf(Vt.keyCode) || -1 !== this.keysUpward.indexOf(Vt.keyCode) || -1 !== this.keysDownward.indexOf(Vt.keyCode) || -1 !== this.keysRotateLeft.indexOf(Vt.keyCode) || -1 !== this.keysRotateRight.indexOf(Vt.keyCode) || -1 !== this.keysRotateUp.indexOf(Vt.keyCode) || -1 !== this.keysRotateDown.indexOf(Vt.keyCode)) {
                  -1 === this._keys.indexOf(Vt.keyCode) && this._keys.push(Vt.keyCode), tt || Vt.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(Vt.keyCode) || -1 !== this.keysDown.indexOf(Vt.keyCode) || -1 !== this.keysLeft.indexOf(Vt.keyCode) || -1 !== this.keysRight.indexOf(Vt.keyCode) || -1 !== this.keysUpward.indexOf(Vt.keyCode) || -1 !== this.keysDownward.indexOf(Vt.keyCode) || -1 !== this.keysRotateLeft.indexOf(Vt.keyCode) || -1 !== this.keysRotateRight.indexOf(Vt.keyCode) || -1 !== this.keysRotateUp.indexOf(Vt.keyCode) || -1 !== this.keysRotateDown.indexOf(Vt.keyCode)) {
              const et = this._keys.indexOf(Vt.keyCode);
              et >= 0 && this._keys.splice(et, 1), tt || Vt.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const tt = this.camera,
              et = tt.movement.input,
              Vt = et.getEntry("keyboard", "translate"),
              Ot = et.getEntry("keyboard", "rotate"),
              qt = Ot?.sensitivity ?? 1,
              mt = tt._localDirection.W9(0, 0, 0);
            for (let Dt = 0; Dt < this._keys.length; Dt++) {
              const et = this._keys[Dt]; - 1 !== this.keysLeft.indexOf(et) ? mt.x -= 1 : -1 !== this.keysUp.indexOf(et) ? mt.z += 1 : -1 !== this.keysRight.indexOf(et) ? mt.x += 1 : -1 !== this.keysDown.indexOf(et) ? mt.z -= 1 : -1 !== this.keysUpward.indexOf(et) ? mt.y += 1 : -1 !== this.keysDownward.indexOf(et) ? mt.y -= 1 : -1 !== this.keysRotateLeft.indexOf(et) ? Ot && (tt.cameraRotation.y -= this._getLocalRotation() * qt) : -1 !== this.keysRotateRight.indexOf(et) ? Ot && (tt.cameraRotation.y += this._getLocalRotation() * qt) : -1 !== this.keysRotateUp.indexOf(et) ? Ot && (tt.cameraRotation.x -= this._getLocalRotation() * qt) : -1 !== this.keysRotateDown.indexOf(et) && Ot && (tt.cameraRotation.x += this._getLocalRotation() * qt)
            }
            if (Vt && (0 !== mt.x || 0 !== mt.y || 0 !== mt.z)) {
              const et = tt._computeLocalCameraSpeed() * (Vt.sensitivity ?? 1);
              mt.normalize().scaleInPlace(et), tt.vI().useRightHandedSystem && (mt.z *= -1), tt.getViewMatrix().invertToRef(tt._cameraTransformMatrix), Dt.n.TransformNormalToRef(mt, tt._cameraTransformMatrix, tt._transformedDirection), tt.cameraDirection.addInPlace(tt._transformedDirection)
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
          const tt = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * tt
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], yt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysUp" in tt,
            get: tt => tt.keysUp,
            set: (tt, et) => {
              tt.keysUp = et
            }
          },
          metadata: Dt
        }, Nt, Mt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysUpward" in tt,
            get: tt => tt.keysUpward,
            set: (tt, et) => {
              tt.keysUpward = et
            }
          },
          metadata: Dt
        }, bt, Jt), (0, Ot.l)(null, null, mt, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysDown" in tt,
            get: tt => tt.keysDown,
            set: (tt, et) => {
              tt.keysDown = et
            }
          },
          metadata: Dt
        }, Ct, ut), (0, Ot.l)(null, null, dt, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysDownward" in tt,
            get: tt => tt.keysDownward,
            set: (tt, et) => {
              tt.keysDownward = et
            }
          },
          metadata: Dt
        }, Kt, ht), (0, Ot.l)(null, null, Xt, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysLeft" in tt,
            get: tt => tt.keysLeft,
            set: (tt, et) => {
              tt.keysLeft = et
            }
          },
          metadata: Dt
        }, vt, Wt), (0, Ot.l)(null, null, Qt, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRight" in tt,
            get: tt => tt.keysRight,
            set: (tt, et) => {
              tt.keysRight = et
            }
          },
          metadata: Dt
        }, St, ct), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: tt => "rotationSpeed" in tt,
            get: tt => tt.rotationSpeed,
            set: (tt, et) => {
              tt.rotationSpeed = et
            }
          },
          metadata: Dt
        }, Rt, It), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRotateLeft" in tt,
            get: tt => tt.keysRotateLeft,
            set: (tt, et) => {
              tt.keysRotateLeft = et
            }
          },
          metadata: Dt
        }, Pt, Zt), (0, Ot.l)(null, null, ft, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRotateRight" in tt,
            get: tt => tt.keysRotateRight,
            set: (tt, et) => {
              tt.keysRotateRight = et
            }
          },
          metadata: Dt
        }, Lt, Ft), (0, Ot.l)(null, null, wt, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRotateUp" in tt,
            get: tt => tt.keysRotateUp,
            set: (tt, et) => {
              tt.keysRotateUp = et
            }
          },
          metadata: Dt
        }, kt, Gt), (0, Ot.l)(null, null, yt, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRotateDown" in tt,
            get: tt => tt.keysRotateDown,
            set: (tt, et) => {
              tt.keysRotateDown = et
            }
          },
          metadata: Dt
        }, zt, ot), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt
    })();
    dt.e.FreeCameraKeyboardMoveInput = Xt;
    var Qt = Vt(37367),
      lt = Vt(40373);
    let Et = (() => {
      var tt;
      let et, Vt, Dt = [],
        mt = [],
        dt = [],
        jt = [];
      return tt = class {
        _applyPointerRotation(tt, et) {
          this._pointerConditions.button = this._currentActiveButton;
          const Vt = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!Vt || "rotate" !== Vt.interaction) return;
          const Ot = Vt.fY ?? Vt.sensitivity ?? 1 / this.angularSensibility,
            qt = Vt.aY ?? Vt.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += tt * Ot, this.camera.cameraRotation.x += et * qt
        }
        constructor() {
          let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = tt, this.buttons = (0, Ot.m)(this, Dt, [0, 1, 2]), this.angularSensibility = ((0, Ot.m)(this, mt), (0, Ot.m)(this, dt, 2e3)), this._pointerInput = (0, Ot.m)(this, jt), this._previousPosition = null, this.onPointerMovedObservable = new Qt.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(tt) {
          tt = Ht.l.BackCompatCameraNoPreventDefault(arguments);
          const et = this.camera.Jf(),
            Vt = et.getInputElement();
          this._pointerInput || (this._pointerInput = Ot => {
            const qt = Ot.event,
              Dt = "touch" === qt.pointerType;
            if (!this.touchEnabled && Dt) return;
            if (Ot.type !== lt.c.POINTERMOVE && -1 === this.buttons.indexOf(qt.button)) return;
            const mt = qt.target;
            if (Ot.type === lt.c.POINTERDOWN) {
              if (Dt && -1 !== this._activePointerId || !Dt && -1 !== this._currentActiveButton) return;
              this._activePointerId = qt.pointerId;
              try {
                mt?.setPointerCapture(qt.pointerId)
              } catch (dt) {} - 1 === this._currentActiveButton && (this._currentActiveButton = qt.button), this._previousPosition = {
                x: qt.clientX,
                y: qt.clientY
              }, tt || (qt.preventDefault(), Vt && Vt.focus()), et.isPointerLock && this._onMouseMove && this._onMouseMove(Ot.event)
            } else if (Ot.type === lt.c.POINTERUP) {
              if (Dt && this._activePointerId !== qt.pointerId || !Dt && this._currentActiveButton !== qt.button) return;
              try {
                mt?.releasePointerCapture(qt.pointerId)
              } catch (dt) {}
              this._currentActiveButton = -1, this._previousPosition = null, tt || qt.preventDefault(), this._activePointerId = -1
            } else if (Ot.type === lt.c.POINTERMOVE && (this._activePointerId === qt.pointerId || !Dt))
              if (et.isPointerLock && this._onMouseMove) this._onMouseMove(Ot.event);
              else if (this._previousPosition) {
              const et = this.camera._calculateHandednessMultiplier(),
                Vt = (qt.clientX - this._previousPosition.x) * et,
                Ot = (qt.clientY - this._previousPosition.y) * et;
              this._allowCameraRotation && this._applyPointerRotation(Vt, Ot), this.onPointerMovedObservable.notifyObservers({
                offsetX: Vt,
                offsetY: Ot
              }), this._previousPosition = {
                x: qt.clientX,
                y: qt.clientY
              }, tt || qt.preventDefault()
            }
          }), this._onMouseMove = Vt => {
            if (!et.isPointerLock) return;
            const Ot = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(Vt.movementX * Ot, Vt.movementY * Ot), this._previousPosition = null, tt || Vt.preventDefault()
          }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, lt.c.POINTERDOWN | lt.c.POINTERUP | lt.c.POINTERMOVE), Vt && (this._contextMenuBind = tt => this.onContextMenu(tt), Vt.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(tt) {
          tt.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const tt = this.camera.Jf().getInputElement();
              tt && tt.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Ht = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: tt => "buttons" in tt,
            get: tt => tt.buttons,
            set: (tt, et) => {
              tt.buttons = et
            }
          },
          metadata: Ht
        }, Dt, mt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: tt => "angularSensibility" in tt,
            get: tt => tt.angularSensibility,
            set: (tt, et) => {
              tt.angularSensibility = et
            }
          },
          metadata: Ht
        }, dt, jt), Ht && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ht
        })
      })(), tt
    })();
    dt.e.FreeCameraMouseInput = Et;
    var ft = Vt(40386);
    let wt = (() => {
      var tt;
      let et, Vt, Dt, mt = [],
        dt = [],
        jt = [],
        Xt = [],
        Et = [],
        wt = [];
      return tt = class {
        constructor() {
          this.wheelPrecisionX = (0, Ot.m)(this, mt, 3), this.wheelPrecisionY = ((0, Ot.m)(this, dt), (0, Ot.m)(this, jt, 3)), this.wheelPrecisionZ = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Et, 3)), this.onChangedObservable = ((0, Ot.m)(this, wt), new Qt.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(tt) {
          tt = Ht.l.BackCompatCameraNoPreventDefault(arguments), this._wheel = et => {
            if (et.type !== lt.c.POINTERWHEEL) return;
            const Vt = et.event,
              Ot = Vt.deltaMode === ft.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Ot * Vt.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Ot * Vt.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Ot * Vt.deltaZ / this._normalize, Vt.preventDefault && (tt || Vt.preventDefault())
          }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._wheel, lt.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Ht = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelPrecisionX" in tt,
            get: tt => tt.wheelPrecisionX,
            set: (tt, et) => {
              tt.wheelPrecisionX = et
            }
          },
          metadata: Ht
        }, mt, dt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelPrecisionY" in tt,
            get: tt => tt.wheelPrecisionY,
            set: (tt, et) => {
              tt.wheelPrecisionY = et
            }
          },
          metadata: Ht
        }, jt, Xt), (0, Ot.l)(null, null, Dt, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelPrecisionZ" in tt,
            get: tt => tt.wheelPrecisionZ,
            set: (tt, et) => {
              tt.wheelPrecisionZ = et
            }
          },
          metadata: Ht
        }, Et, wt), Ht && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ht
        })
      })(), tt
    })();
    var yt;
    ! function(tt) {
      tt[tt.MoveRelative = 0] = "MoveRelative", tt[tt.RotateRelative = 1] = "RotateRelative", tt[tt.MoveScene = 2] = "MoveScene"
    }(yt || (yt = {}));
    let Nt = (() => {
      var tt;
      let et, Vt, mt, dt, jt, Ht, Xt, Qt, lt, Et = wt,
        ft = [];
      return tt = class extends Et {
        constructor() {
          super(...arguments), this.camera = (0, Ot.m)(this, ft), this._moveRelative = Dt.n.Zero(), this._rotateRelative = Dt.n.Zero(), this._moveScene = Dt.n.Zero(), this._wheelXAction = yt.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yt.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(tt) {
          null === tt && this._wheelXAction !== yt.MoveRelative || (this._wheelXAction = yt.MoveRelative, this._wheelXActionCoordinate = tt)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== yt.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(tt) {
          null === tt && this._wheelYAction !== yt.MoveRelative || (this._wheelYAction = yt.MoveRelative, this._wheelYActionCoordinate = tt)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== yt.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(tt) {
          null === tt && this._wheelZAction !== yt.MoveRelative || (this._wheelZAction = yt.MoveRelative, this._wheelZActionCoordinate = tt)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== yt.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(tt) {
          null === tt && this._wheelXAction !== yt.RotateRelative || (this._wheelXAction = yt.RotateRelative, this._wheelXActionCoordinate = tt)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== yt.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(tt) {
          null === tt && this._wheelYAction !== yt.RotateRelative || (this._wheelYAction = yt.RotateRelative, this._wheelYActionCoordinate = tt)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== yt.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(tt) {
          null === tt && this._wheelZAction !== yt.RotateRelative || (this._wheelZAction = yt.RotateRelative, this._wheelZActionCoordinate = tt)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== yt.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(tt) {
          null === tt && this._wheelXAction !== yt.MoveScene || (this._wheelXAction = yt.MoveScene, this._wheelXActionCoordinate = tt)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== yt.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(tt) {
          null === tt && this._wheelYAction !== yt.MoveScene || (this._wheelYAction = yt.MoveScene, this._wheelYActionCoordinate = tt)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== yt.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(tt) {
          null === tt && this._wheelZAction !== yt.MoveScene || (this._wheelZAction = yt.MoveScene, this._wheelZActionCoordinate = tt)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== yt.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.S_(0), this._rotateRelative.S_(0), this._moveScene.S_(0), this._updateCamera(), this.camera.vI().useRightHandedSystem && (this._moveRelative.z *= -1);
          const tt = Dt.c.Zero();
          this.camera.getViewMatrix().invertToRef(tt);
          const et = Dt.n.Zero();
          Dt.n.TransformNormalToRef(this._moveRelative, tt, et), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(et), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(tt, et, Vt) {
          if (0 === tt) return;
          if (null === et || null === Vt) return;
          let Ot = null;
          switch (et) {
            case yt.MoveRelative:
              Ot = this._moveRelative;
              break;
            case yt.RotateRelative:
              Ot = this._rotateRelative;
              break;
            case yt.MoveScene:
              Ot = this._moveScene
          }
          switch (Vt) {
            case 0:
              Ot.set(tt, 0, 0);
              break;
            case 1:
              Ot.set(0, tt, 0);
              break;
            case 2:
              Ot.set(0, 0, tt)
          }
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Et[Symbol.metadata] ?? null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], (0, Ot.l)(tt, null, et, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelXMoveRelative" in tt,
            set: (tt, et) => {
              tt.wheelXMoveRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, Vt, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelYMoveRelative" in tt,
            set: (tt, et) => {
              tt.wheelYMoveRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, mt, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelZMoveRelative" in tt,
            set: (tt, et) => {
              tt.wheelZMoveRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, dt, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelXRotateRelative" in tt,
            set: (tt, et) => {
              tt.wheelXRotateRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, jt, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelYRotateRelative" in tt,
            set: (tt, et) => {
              tt.wheelYRotateRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, Ht, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelZRotateRelative" in tt,
            set: (tt, et) => {
              tt.wheelZRotateRelative = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, Xt, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelXMoveScene" in tt,
            set: (tt, et) => {
              tt.wheelXMoveScene = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, Qt, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelYMoveScene" in tt,
            set: (tt, et) => {
              tt.wheelYMoveScene = et
            }
          },
          metadata: Dt
        }, null, ft), (0, Ot.l)(tt, null, lt, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelZMoveScene" in tt,
            set: (tt, et) => {
              tt.wheelZMoveScene = et
            }
          },
          metadata: Dt
        }, null, ft), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt
    })();
    dt.e.FreeCameraMouseWheelInput = Nt;
    let Mt = (() => {
      var tt;
      let et, Vt, mt = [],
        dt = [],
        jt = [],
        Xt = [];
      return tt = class {
        constructor() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = tt, this.touchAngularSensibility = (0, Ot.m)(this, mt, 2e5), this.touchMoveSensibility = ((0, Ot.m)(this, dt), (0, Ot.m)(this, jt, 250)), this.singleFingerRotate = ((0, Ot.m)(this, Xt), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Ht.l.IsSafari()
        }
        attachControl(tt) {
          tt = Ht.l.BackCompatCameraNoPreventDefault(arguments);
          let et = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = Vt => {
              const Ot = Vt.event,
                qt = "mouse" === Ot.pointerType || this._isSafari && "undefined" === typeof Ot.pointerType;
              if (this.allowMouse || !qt)
                if (Vt.type === lt.c.POINTERDOWN) {
                  if (tt || Ot.preventDefault(), this._pointerPressed.push(Ot.pointerId), 1 !== this._pointerPressed.length) return;
                  et = {
                    x: Ot.clientX,
                    y: Ot.clientY
                  }
                } else if (Vt.type === lt.c.POINTERUP) {
                tt || Ot.preventDefault();
                const Vt = this._pointerPressed.indexOf(Ot.pointerId);
                if (-1 === Vt) return;
                if (this._pointerPressed.splice(Vt, 1), 0 != Vt) return;
                et = null, this._offsetX = null, this._offsetY = null
              } else if (Vt.type === lt.c.POINTERMOVE) {
                if (tt || Ot.preventDefault(), !et) return;
                if (0 != this._pointerPressed.indexOf(Ot.pointerId)) return;
                this._offsetX = Ot.clientX - et.x, this._offsetY = -(Ot.clientY - et.y)
              }
            }), this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, lt.c.POINTERDOWN | lt.c.POINTERUP | lt.c.POINTERMOVE), this._onLostFocus) {
            const tt = this.camera.Jf().getInputElement();
            tt && tt.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const tt = this.camera.Jf().getInputElement();
              tt && tt.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const tt = this.camera,
            et = tt.movement.input,
            Vt = et.getEntry("touch", "rotate"),
            Ot = et.getEntry("touch", "translate"),
            qt = tt._calculateHandednessMultiplier(),
            mt = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (Vt) {
            const et = Vt.sensitivity ?? 1 / this.touchAngularSensibility;
            tt.cameraRotation.y = this._offsetX * qt * et, mt && (tt.cameraRotation.x = -this._offsetY * qt * et)
          }
          if (!mt && Ot) {
            const et = tt._computeLocalCameraSpeed(),
              Vt = Ot.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              qt = Dt.k.uf[0];
            qt.W9(0, 0, et * this._offsetY * Vt), Dt.c.RotationYawPitchRollToRef(tt.rotation.y, tt.rotation.x, 0, tt._cameraRotationMatrix), Dt.n.TransformCoordinatesToRef(qt, tt._cameraRotationMatrix, qt), tt.cameraDirection.addInPlace(qt)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: tt => "touchAngularSensibility" in tt,
            get: tt => tt.touchAngularSensibility,
            set: (tt, et) => {
              tt.touchAngularSensibility = et
            }
          },
          metadata: Dt
        }, mt, dt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: tt => "touchMoveSensibility" in tt,
            get: tt => tt.touchMoveSensibility,
            set: (tt, et) => {
              tt.touchMoveSensibility = et
            }
          },
          metadata: Dt
        }, jt, Xt), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt
    })();
    dt.e.FreeCameraTouchInput = Mt;
    var bt, Jt, Ct, ut = Vt(40080);
    class Kt extends dt.g {
      constructor(tt) {
        super(tt), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Xt), this
      }
      addMouse() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Et(tt), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Nt, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Mt), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(bt = Kt.prototype).addDeviceOrientation ?? (bt.addDeviceOrientation = (0, ut.d)("FreeCameraInputsManager", "addDeviceOrientation")), (Jt = Kt.prototype).addVirtualJoystick ?? (Jt.addVirtualJoystick = (0, ut.d)("FreeCameraInputsManager", "addVirtualJoystick")), (Ct = Kt.prototype).addGamepad ?? (Ct.addGamepad = (0, ut.d)("FreeCameraInputsManager", "addGamepad"));
    var ht = Vt(40092),
      vt = Vt(37390);
    let Wt = (() => {
        var tt;
        let et, Vt, dt, jt, Xt = mt.f,
          Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [],
          Nt = [],
          Mt = [];
        return tt = class extends Xt {
          get angularSensibility() {
            const tt = this.inputs.attached.mouse;
            return tt ? tt.angularSensibility : 0
          }
          set angularSensibility(tt) {
            const et = this.inputs.attached.mouse;
            et && (et.angularSensibility = tt)
          }
          get keysUp() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysUp : []
          }
          set keysUp(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysUp = tt)
          }
          get keysUpward() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysUpward : []
          }
          set keysUpward(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysUpward = tt)
          }
          get keysDown() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysDown : []
          }
          set keysDown(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysDown = tt)
          }
          get keysDownward() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysDownward : []
          }
          set keysDownward(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysDownward = tt)
          }
          get keysLeft() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysLeft : []
          }
          set keysLeft(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysLeft = tt)
          }
          get keysRight() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRight : []
          }
          set keysRight(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRight = tt)
          }
          get keysRotateLeft() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRotateLeft : []
          }
          set keysRotateLeft(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRotateLeft = tt)
          }
          get keysRotateRight() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRotateRight : []
          }
          set keysRotateRight(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRotateRight = tt)
          }
          get keysRotateUp() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRotateUp : []
          }
          set keysRotateUp(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRotateUp = tt)
          }
          get keysRotateDown() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRotateDown : []
          }
          set keysRotateDown(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRotateDown = tt)
          }
          constructor(tt, et, Vt) {
            var qt;
            super(tt, et, Vt, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), qt = this, this.ellipsoid = (0, Ot.m)(this, Qt, new Dt.n(.5, 1, .5)), this.ellipsoidOffset = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, new Dt.n(0, 0, 0))), this.checkCollisions = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, !1)), this.applyGravity = ((0, Ot.m)(this, yt), (0, Ot.m)(this, Nt, !1)), this.inputs = (0, Ot.m)(this, Mt), this._needMoveForGravity = !1, this._oldPosition = Dt.n.Zero(), this._diffPosition = Dt.n.Zero(), this._newPosition = Dt.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(tt, et) {
              let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              qt._newPosition.rK(et), qt._newPosition.subtractToRef(qt._oldPosition, qt._diffPosition), qt._diffPosition.length() > ht.d.CollisionsEpsilon && (qt.position.addToRef(qt._diffPosition, qt._deferredPositionUpdate), qt._deferOnly ? qt._deferredUpdated = !0 : qt.position.rK(qt._deferredPositionUpdate), qt.Hl && Vt && qt.Hl(Vt))
            }, this.inputs = new Kt(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(tt, et) {
            et = Ht.l.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(et)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Dt.n(0, 0, 0), this.cameraRotation = new Dt.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(tt) {
            this._collisionMask = isNaN(tt) ? -1 : tt
          }
          _collideWithWorld(tt) {
            let et;
            et = this.parent ? Dt.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, et.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const Vt = this.vI().collisionCoordinator;
            this._collider || (this._collider = Vt.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Ot = tt;
            this.applyGravity && (Ot = tt.add(this.vI().gravity)), Vt.getNewPosition(this._oldPosition, Ot, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Dt.n.Zero(), this._transformedDirection = Dt.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(tt) {
            this._needMoveForGravity = tt
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.vI().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.M)()], Vt = [(0, qt.M)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: tt => "ellipsoid" in tt,
              get: tt => tt.ellipsoid,
              set: (tt, et) => {
                tt.ellipsoid = et
              }
            },
            metadata: Dt
          }, Qt, lt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "ellipsoidOffset" in tt,
              get: tt => tt.ellipsoidOffset,
              set: (tt, et) => {
                tt.ellipsoidOffset = et
              }
            },
            metadata: Dt
          }, Et, ft), (0, Ot.l)(null, null, dt, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: tt => "checkCollisions" in tt,
              get: tt => tt.checkCollisions,
              set: (tt, et) => {
                tt.checkCollisions = et
              }
            },
            metadata: Dt
          }, wt, yt), (0, Ot.l)(null, null, jt, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: tt => "applyGravity" in tt,
              get: tt => tt.applyGravity,
              set: (tt, et) => {
                tt.applyGravity = et
              }
            },
            metadata: Dt
          }, Nt, Mt), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      St = !1;
    St || (St = !0, (0, vt.i)("BABYLON.FreeCamera", Wt))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
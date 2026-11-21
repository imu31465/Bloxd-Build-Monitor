export const id = 250;
export const ids = [250];
export const modules = {
  40189: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Md
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(40195),
      Zd = kd(40223),
      gd = kd(40164),
      Cd = kd(40066);
    let Kd = (() => {
      var dd;
      let Jd, kd, Pd, Zd, Kd, od, ld, Qd, Ld, Od, ed, Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        ad = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [];
      return dd = class {
        constructor() {
          this.keysUp = (0, pd.i)(this, Rd, [38]), this.keysUpward = ((0, pd.i)(this, Id), (0, pd.i)(this, Gd, [33])), this.keysDown = ((0, pd.i)(this, vd), (0, pd.i)(this, xd, [40])), this.keysDownward = ((0, pd.i)(this, qd), (0, pd.i)(this, Bd, [34])), this.keysLeft = ((0, pd.i)(this, sd), (0, pd.i)(this, ad, [37])), this.keysRight = ((0, pd.i)(this, Md), (0, pd.i)(this, Fd, [39])), this.rotationSpeed = ((0, pd.i)(this, Yd), (0, pd.i)(this, md, .5)), this.keysRotateLeft = ((0, pd.i)(this, bd), (0, pd.i)(this, Sd, [])), this.keysRotateRight = ((0, pd.i)(this, jd), (0, pd.i)(this, Xd, [])), this.keysRotateUp = ((0, pd.i)(this, fd), (0, pd.i)(this, nd, [])), this.keysRotateDown = ((0, pd.i)(this, Ud), (0, pd.i)(this, yd, [])), this._keys = ((0, pd.i)(this, Dd), new Array)
        }
        attachControl(dd) {
          dd = Cd.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Wm(), this._engine = this._scene.eL(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Jd => {
            const kd = Jd.event;
            if (!kd.metaKey)
              if (Jd.type === gd.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(kd.keyCode) || -1 !== this.keysDown.indexOf(kd.keyCode) || -1 !== this.keysLeft.indexOf(kd.keyCode) || -1 !== this.keysRight.indexOf(kd.keyCode) || -1 !== this.keysUpward.indexOf(kd.keyCode) || -1 !== this.keysDownward.indexOf(kd.keyCode) || -1 !== this.keysRotateLeft.indexOf(kd.keyCode) || -1 !== this.keysRotateRight.indexOf(kd.keyCode) || -1 !== this.keysRotateUp.indexOf(kd.keyCode) || -1 !== this.keysRotateDown.indexOf(kd.keyCode)) {
                  -1 === this._keys.indexOf(kd.keyCode) && this._keys.push(kd.keyCode), dd || kd.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(kd.keyCode) || -1 !== this.keysDown.indexOf(kd.keyCode) || -1 !== this.keysLeft.indexOf(kd.keyCode) || -1 !== this.keysRight.indexOf(kd.keyCode) || -1 !== this.keysUpward.indexOf(kd.keyCode) || -1 !== this.keysDownward.indexOf(kd.keyCode) || -1 !== this.keysRotateLeft.indexOf(kd.keyCode) || -1 !== this.keysRotateRight.indexOf(kd.keyCode) || -1 !== this.keysRotateUp.indexOf(kd.keyCode) || -1 !== this.keysRotateDown.indexOf(kd.keyCode)) {
              const Jd = this._keys.indexOf(kd.keyCode);
              Jd >= 0 && this._keys.splice(Jd, 1), dd || kd.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const dd = this.camera,
              Jd = dd.movement.input,
              kd = Jd.getEntry("keyboard", "translate"),
              pd = Jd.getEntry("keyboard", "rotate"),
              Nd = pd?.sensitivity ?? 1,
              Pd = dd._localDirection.kdd(0, 0, 0);
            for (let Wd = 0; Wd < this._keys.length; Wd++) {
              const Jd = this._keys[Wd]; - 1 !== this.keysLeft.indexOf(Jd) ? Pd.x -= 1 : -1 !== this.keysUp.indexOf(Jd) ? Pd.z += 1 : -1 !== this.keysRight.indexOf(Jd) ? Pd.x += 1 : -1 !== this.keysDown.indexOf(Jd) ? Pd.z -= 1 : -1 !== this.keysUpward.indexOf(Jd) ? Pd.y += 1 : -1 !== this.keysDownward.indexOf(Jd) ? Pd.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Jd) ? pd && (dd.cameraRotation.y -= this._getLocalRotation() * Nd) : -1 !== this.keysRotateRight.indexOf(Jd) ? pd && (dd.cameraRotation.y += this._getLocalRotation() * Nd) : -1 !== this.keysRotateUp.indexOf(Jd) ? pd && (dd.cameraRotation.x -= this._getLocalRotation() * Nd) : -1 !== this.keysRotateDown.indexOf(Jd) && pd && (dd.cameraRotation.x += this._getLocalRotation() * Nd)
            }
            if (kd && (0 !== Pd.x || 0 !== Pd.y || 0 !== Pd.z)) {
              const Jd = dd._computeLocalCameraSpeed() * (kd.sensitivity ?? 1);
              Pd.normalize().scaleInPlace(Jd), dd.Wm().useRightHandedSystem && (Pd.z *= -1), dd.getViewMatrix().invertToRef(dd._cameraTransformMatrix), Wd.n.TransformNormalToRef(Pd, dd._cameraTransformMatrix, dd._transformedDirection), dd.cameraDirection.addInPlace(dd._transformedDirection)
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
          const dd = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * dd
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Pd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.H)()], ld = [(0, Nd.H)()], Qd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Od = [(0, Nd.H)()], ed = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUp" in dd,
            get: dd => dd.keysUp,
            set: (dd, Jd) => {
              dd.keysUp = Jd
            }
          },
          metadata: Wd
        }, Rd, Id), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUpward" in dd,
            get: dd => dd.keysUpward,
            set: (dd, Jd) => {
              dd.keysUpward = Jd
            }
          },
          metadata: Wd
        }, Gd, vd), (0, pd.h)(null, null, Pd, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDown" in dd,
            get: dd => dd.keysDown,
            set: (dd, Jd) => {
              dd.keysDown = Jd
            }
          },
          metadata: Wd
        }, xd, qd), (0, pd.h)(null, null, Zd, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDownward" in dd,
            get: dd => dd.keysDownward,
            set: (dd, Jd) => {
              dd.keysDownward = Jd
            }
          },
          metadata: Wd
        }, Bd, sd), (0, pd.h)(null, null, Kd, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysLeft" in dd,
            get: dd => dd.keysLeft,
            set: (dd, Jd) => {
              dd.keysLeft = Jd
            }
          },
          metadata: Wd
        }, ad, Md), (0, pd.h)(null, null, od, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRight" in dd,
            get: dd => dd.keysRight,
            set: (dd, Jd) => {
              dd.keysRight = Jd
            }
          },
          metadata: Wd
        }, Fd, Yd), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: dd => "rotationSpeed" in dd,
            get: dd => dd.rotationSpeed,
            set: (dd, Jd) => {
              dd.rotationSpeed = Jd
            }
          },
          metadata: Wd
        }, md, bd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateLeft" in dd,
            get: dd => dd.keysRotateLeft,
            set: (dd, Jd) => {
              dd.keysRotateLeft = Jd
            }
          },
          metadata: Wd
        }, Sd, jd), (0, pd.h)(null, null, Ld, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateRight" in dd,
            get: dd => dd.keysRotateRight,
            set: (dd, Jd) => {
              dd.keysRotateRight = Jd
            }
          },
          metadata: Wd
        }, Xd, fd), (0, pd.h)(null, null, Od, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateUp" in dd,
            get: dd => dd.keysRotateUp,
            set: (dd, Jd) => {
              dd.keysRotateUp = Jd
            }
          },
          metadata: Wd
        }, nd, Ud), (0, pd.h)(null, null, ed, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateDown" in dd,
            get: dd => dd.keysRotateDown,
            set: (dd, Jd) => {
              dd.keysRotateDown = Jd
            }
          },
          metadata: Wd
        }, yd, Dd), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd
    })();
    Zd.d.FreeCameraKeyboardMoveInput = Kd;
    var od = kd(37280),
      ld = kd(40156);
    let Qd = (() => {
      var dd;
      let Jd, kd, Wd = [],
        Pd = [],
        Zd = [],
        gd = [];
      return dd = class {
        _applyPointerRotation(dd, Jd) {
          this._pointerConditions.button = this._currentActiveButton;
          const kd = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!kd || "rotate" !== kd.interaction) return;
          const pd = kd.vV ?? kd.sensitivity ?? 1 / this.angularSensibility,
            Nd = kd.xV ?? kd.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += dd * pd, this.camera.cameraRotation.x += Jd * Nd
        }
        constructor() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = dd, this.buttons = (0, pd.i)(this, Wd, [0, 1, 2]), this.angularSensibility = ((0, pd.i)(this, Pd), (0, pd.i)(this, Zd, 2e3)), this._pointerInput = (0, pd.i)(this, gd), this._previousPosition = null, this.onPointerMovedObservable = new od.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(dd) {
          dd = Cd.h.BackCompatCameraNoPreventDefault(arguments);
          const Jd = this.camera.eL(),
            kd = Jd.getInputElement();
          this._pointerInput || (this._pointerInput = pd => {
            const Nd = pd.event,
              Wd = "touch" === Nd.pointerType;
            if (!this.touchEnabled && Wd) return;
            if (pd.type !== ld.b.POINTERMOVE && -1 === this.buttons.indexOf(Nd.button)) return;
            const Pd = Nd.target;
            if (pd.type === ld.b.POINTERDOWN) {
              if (Wd && -1 !== this._activePointerId || !Wd && -1 !== this._currentActiveButton) return;
              this._activePointerId = Nd.pointerId;
              try {
                Pd?.setPointerCapture(Nd.pointerId)
              } catch (Zd) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Nd.button), this._previousPosition = {
                x: Nd.clientX,
                y: Nd.clientY
              }, dd || (Nd.preventDefault(), kd && kd.focus()), Jd.isPointerLock && this._onMouseMove && this._onMouseMove(pd.event)
            } else if (pd.type === ld.b.POINTERUP) {
              if (Wd && this._activePointerId !== Nd.pointerId || !Wd && this._currentActiveButton !== Nd.button) return;
              try {
                Pd?.releasePointerCapture(Nd.pointerId)
              } catch (Zd) {}
              this._currentActiveButton = -1, this._previousPosition = null, dd || Nd.preventDefault(), this._activePointerId = -1
            } else if (pd.type === ld.b.POINTERMOVE && (this._activePointerId === Nd.pointerId || !Wd))
              if (Jd.isPointerLock && this._onMouseMove) this._onMouseMove(pd.event);
              else if (this._previousPosition) {
              const Jd = this.camera._calculateHandednessMultiplier(),
                kd = (Nd.clientX - this._previousPosition.x) * Jd,
                pd = (Nd.clientY - this._previousPosition.y) * Jd;
              this._allowCameraRotation && this._applyPointerRotation(kd, pd), this.onPointerMovedObservable.notifyObservers({
                offsetX: kd,
                offsetY: pd
              }), this._previousPosition = {
                x: Nd.clientX,
                y: Nd.clientY
              }, dd || Nd.preventDefault()
            }
          }), this._onMouseMove = kd => {
            if (!Jd.isPointerLock) return;
            const pd = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(kd.movementX * pd, kd.movementY * pd), this._previousPosition = null, dd || kd.preventDefault()
          }, this._observer = this.camera.Wm()._inputManager._addCameraPointerObserver(this._pointerInput, ld.b.POINTERDOWN | ld.b.POINTERUP | ld.b.POINTERMOVE), kd && (this._contextMenuBind = dd => this.onContextMenu(dd), kd.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(dd) {
          dd.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Wm()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const dd = this.camera.eL().getInputElement();
              dd && dd.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Cd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: dd => "buttons" in dd,
            get: dd => dd.buttons,
            set: (dd, Jd) => {
              dd.buttons = Jd
            }
          },
          metadata: Cd
        }, Wd, Pd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "angularSensibility" in dd,
            get: dd => dd.angularSensibility,
            set: (dd, Jd) => {
              dd.angularSensibility = Jd
            }
          },
          metadata: Cd
        }, Zd, gd), Cd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Cd
        })
      })(), dd
    })();
    Zd.d.FreeCameraMouseInput = Qd;
    var Ld = kd(40169);
    let Od = (() => {
      var dd;
      let Jd, kd, Wd, Pd = [],
        Zd = [],
        gd = [],
        Kd = [],
        Qd = [],
        Od = [];
      return dd = class {
        constructor() {
          this.wheelPrecisionX = (0, pd.i)(this, Pd, 3), this.wheelPrecisionY = ((0, pd.i)(this, Zd), (0, pd.i)(this, gd, 3)), this.wheelPrecisionZ = ((0, pd.i)(this, Kd), (0, pd.i)(this, Qd, 3)), this.onChangedObservable = ((0, pd.i)(this, Od), new od.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(dd) {
          dd = Cd.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Jd => {
            if (Jd.type !== ld.b.POINTERWHEEL) return;
            const kd = Jd.event,
              pd = kd.deltaMode === Ld.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * pd * kd.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * pd * kd.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * pd * kd.deltaZ / this._normalize, kd.preventDefault && (dd || kd.preventDefault())
          }, this._observer = this.camera.Wm()._inputManager._addCameraPointerObserver(this._wheel, ld.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Wm()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Cd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionX" in dd,
            get: dd => dd.wheelPrecisionX,
            set: (dd, Jd) => {
              dd.wheelPrecisionX = Jd
            }
          },
          metadata: Cd
        }, Pd, Zd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionY" in dd,
            get: dd => dd.wheelPrecisionY,
            set: (dd, Jd) => {
              dd.wheelPrecisionY = Jd
            }
          },
          metadata: Cd
        }, gd, Kd), (0, pd.h)(null, null, Wd, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionZ" in dd,
            get: dd => dd.wheelPrecisionZ,
            set: (dd, Jd) => {
              dd.wheelPrecisionZ = Jd
            }
          },
          metadata: Cd
        }, Qd, Od), Cd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Cd
        })
      })(), dd
    })();
    var ed;
    ! function(dd) {
      dd[dd.MoveRelative = 0] = "MoveRelative", dd[dd.RotateRelative = 1] = "RotateRelative", dd[dd.MoveScene = 2] = "MoveScene"
    }(ed || (ed = {}));
    let Rd = (() => {
      var dd;
      let Jd, kd, Pd, Zd, gd, Cd, Kd, od, ld, Qd = Od,
        Ld = [];
      return dd = class extends Qd {
        constructor() {
          super(...arguments), this.camera = (0, pd.i)(this, Ld), this._moveRelative = Wd.n.Zero(), this._rotateRelative = Wd.n.Zero(), this._moveScene = Wd.n.Zero(), this._wheelXAction = ed.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = ed.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(dd) {
          null === dd && this._wheelXAction !== ed.MoveRelative || (this._wheelXAction = ed.MoveRelative, this._wheelXActionCoordinate = dd)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== ed.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(dd) {
          null === dd && this._wheelYAction !== ed.MoveRelative || (this._wheelYAction = ed.MoveRelative, this._wheelYActionCoordinate = dd)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== ed.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(dd) {
          null === dd && this._wheelZAction !== ed.MoveRelative || (this._wheelZAction = ed.MoveRelative, this._wheelZActionCoordinate = dd)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== ed.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(dd) {
          null === dd && this._wheelXAction !== ed.RotateRelative || (this._wheelXAction = ed.RotateRelative, this._wheelXActionCoordinate = dd)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== ed.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(dd) {
          null === dd && this._wheelYAction !== ed.RotateRelative || (this._wheelYAction = ed.RotateRelative, this._wheelYActionCoordinate = dd)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== ed.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(dd) {
          null === dd && this._wheelZAction !== ed.RotateRelative || (this._wheelZAction = ed.RotateRelative, this._wheelZActionCoordinate = dd)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== ed.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(dd) {
          null === dd && this._wheelXAction !== ed.MoveScene || (this._wheelXAction = ed.MoveScene, this._wheelXActionCoordinate = dd)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== ed.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(dd) {
          null === dd && this._wheelYAction !== ed.MoveScene || (this._wheelYAction = ed.MoveScene, this._wheelYActionCoordinate = dd)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== ed.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(dd) {
          null === dd && this._wheelZAction !== ed.MoveScene || (this._wheelZAction = ed.MoveScene, this._wheelZActionCoordinate = dd)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== ed.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.o5(0), this._rotateRelative.o5(0), this._moveScene.o5(0), this._updateCamera(), this.camera.Wm().useRightHandedSystem && (this._moveRelative.z *= -1);
          const dd = Wd.b.Zero();
          this.camera.getViewMatrix().invertToRef(dd);
          const Jd = Wd.n.Zero();
          Wd.n.TransformNormalToRef(this._moveRelative, dd, Jd), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Jd), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(dd, Jd, kd) {
          if (0 === dd) return;
          if (null === Jd || null === kd) return;
          let pd = null;
          switch (Jd) {
            case ed.MoveRelative:
              pd = this._moveRelative;
              break;
            case ed.RotateRelative:
              pd = this._rotateRelative;
              break;
            case ed.MoveScene:
              pd = this._moveScene
          }
          switch (kd) {
            case 0:
              pd.set(dd, 0, 0);
              break;
            case 1:
              pd.set(0, dd, 0);
              break;
            case 2:
              pd.set(0, 0, dd)
          }
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Pd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.H)()], ld = [(0, Nd.H)()], (0, pd.h)(dd, null, Jd, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXMoveRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelXMoveRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, kd, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYMoveRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelYMoveRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, Pd, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZMoveRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelZMoveRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, Zd, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXRotateRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelXRotateRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, gd, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYRotateRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelYRotateRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, Cd, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZRotateRelative" in dd,
            set: (dd, Jd) => {
              dd.wheelZRotateRelative = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, Kd, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXMoveScene" in dd,
            set: (dd, Jd) => {
              dd.wheelXMoveScene = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, od, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYMoveScene" in dd,
            set: (dd, Jd) => {
              dd.wheelYMoveScene = Jd
            }
          },
          metadata: Wd
        }, null, Ld), (0, pd.h)(dd, null, ld, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZMoveScene" in dd,
            set: (dd, Jd) => {
              dd.wheelZMoveScene = Jd
            }
          },
          metadata: Wd
        }, null, Ld), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd
    })();
    Zd.d.FreeCameraMouseWheelInput = Rd;
    let Id = (() => {
      var dd;
      let Jd, kd, Pd = [],
        Zd = [],
        gd = [],
        Kd = [];
      return dd = class {
        constructor() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = dd, this.touchAngularSensibility = (0, pd.i)(this, Pd, 2e5), this.touchMoveSensibility = ((0, pd.i)(this, Zd), (0, pd.i)(this, gd, 250)), this.singleFingerRotate = ((0, pd.i)(this, Kd), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Cd.h.IsSafari()
        }
        attachControl(dd) {
          dd = Cd.h.BackCompatCameraNoPreventDefault(arguments);
          let Jd = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = kd => {
              const pd = kd.event,
                Nd = "mouse" === pd.pointerType || this._isSafari && "undefined" === typeof pd.pointerType;
              if (this.allowMouse || !Nd)
                if (kd.type === ld.b.POINTERDOWN) {
                  if (dd || pd.preventDefault(), this._pointerPressed.push(pd.pointerId), 1 !== this._pointerPressed.length) return;
                  Jd = {
                    x: pd.clientX,
                    y: pd.clientY
                  }
                } else if (kd.type === ld.b.POINTERUP) {
                dd || pd.preventDefault();
                const kd = this._pointerPressed.indexOf(pd.pointerId);
                if (-1 === kd) return;
                if (this._pointerPressed.splice(kd, 1), 0 != kd) return;
                Jd = null, this._offsetX = null, this._offsetY = null
              } else if (kd.type === ld.b.POINTERMOVE) {
                if (dd || pd.preventDefault(), !Jd) return;
                if (0 != this._pointerPressed.indexOf(pd.pointerId)) return;
                this._offsetX = pd.clientX - Jd.x, this._offsetY = -(pd.clientY - Jd.y)
              }
            }), this._observer = this.camera.Wm()._inputManager._addCameraPointerObserver(this._pointerInput, ld.b.POINTERDOWN | ld.b.POINTERUP | ld.b.POINTERMOVE), this._onLostFocus) {
            const dd = this.camera.eL().getInputElement();
            dd && dd.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Wm()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const dd = this.camera.eL().getInputElement();
              dd && dd.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const dd = this.camera,
            Jd = dd.movement.input,
            kd = Jd.getEntry("touch", "rotate"),
            pd = Jd.getEntry("touch", "translate"),
            Nd = dd._calculateHandednessMultiplier(),
            Pd = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (kd) {
            const Jd = kd.sensitivity ?? 1 / this.touchAngularSensibility;
            dd.cameraRotation.y = this._offsetX * Nd * Jd, Pd && (dd.cameraRotation.x = -this._offsetY * Nd * Jd)
          }
          if (!Pd && pd) {
            const Jd = dd._computeLocalCameraSpeed(),
              kd = pd.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Nd = Wd.h.IL[0];
            Nd.kdd(0, 0, Jd * this._offsetY * kd), Wd.b.RotationYawPitchRollToRef(dd.rotation.y, dd.rotation.x, 0, dd._cameraRotationMatrix), Wd.n.TransformCoordinatesToRef(Nd, dd._cameraRotationMatrix, Nd), dd.cameraDirection.addInPlace(Nd)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "touchAngularSensibility" in dd,
            get: dd => dd.touchAngularSensibility,
            set: (dd, Jd) => {
              dd.touchAngularSensibility = Jd
            }
          },
          metadata: Wd
        }, Pd, Zd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "touchMoveSensibility" in dd,
            get: dd => dd.touchMoveSensibility,
            set: (dd, Jd) => {
              dd.touchMoveSensibility = Jd
            }
          },
          metadata: Wd
        }, gd, Kd), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd
    })();
    Zd.d.FreeCameraTouchInput = Id;
    var Gd, vd, xd, qd = kd(39860);
    class Bd extends Zd.g {
      constructor(dd) {
        super(dd), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Kd), this
      }
      addMouse() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Qd(dd), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Rd, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Id), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Gd = Bd.prototype).addDeviceOrientation ?? (Gd.addDeviceOrientation = (0, qd.j)("FreeCameraInputsManager", "addDeviceOrientation")), (vd = Bd.prototype).addVirtualJoystick ?? (vd.addVirtualJoystick = (0, qd.j)("FreeCameraInputsManager", "addVirtualJoystick")), (xd = Bd.prototype).addGamepad ?? (xd.addGamepad = (0, qd.j)("FreeCameraInputsManager", "addGamepad"));
    var sd = kd(39874),
      ad = kd(37303);
    let Md = (() => {
        var dd;
        let Jd, kd, Zd, gd, Kd = Pd.d,
          od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [],
          Rd = [],
          Id = [];
        return dd = class extends Kd {
          get angularSensibility() {
            const dd = this.inputs.attached.mouse;
            return dd ? dd.angularSensibility : 0
          }
          set angularSensibility(dd) {
            const Jd = this.inputs.attached.mouse;
            Jd && (Jd.angularSensibility = dd)
          }
          get keysUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUp : []
          }
          set keysUp(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysUp = dd)
          }
          get keysUpward() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUpward : []
          }
          set keysUpward(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysUpward = dd)
          }
          get keysDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDown : []
          }
          set keysDown(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysDown = dd)
          }
          get keysDownward() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDownward : []
          }
          set keysDownward(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysDownward = dd)
          }
          get keysLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysLeft : []
          }
          set keysLeft(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysLeft = dd)
          }
          get keysRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRight : []
          }
          set keysRight(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRight = dd)
          }
          get keysRotateLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateLeft : []
          }
          set keysRotateLeft(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRotateLeft = dd)
          }
          get keysRotateRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateRight : []
          }
          set keysRotateRight(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRotateRight = dd)
          }
          get keysRotateUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateUp : []
          }
          set keysRotateUp(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRotateUp = dd)
          }
          get keysRotateDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateDown : []
          }
          set keysRotateDown(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRotateDown = dd)
          }
          constructor(dd, Jd, kd) {
            var Nd;
            super(dd, Jd, kd, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Nd = this, this.ellipsoid = (0, pd.i)(this, od, new Wd.n(.5, 1, .5)), this.ellipsoidOffset = ((0, pd.i)(this, ld), (0, pd.i)(this, Qd, new Wd.n(0, 0, 0))), this.checkCollisions = ((0, pd.i)(this, Ld), (0, pd.i)(this, Od, !1)), this.applyGravity = ((0, pd.i)(this, ed), (0, pd.i)(this, Rd, !1)), this.inputs = (0, pd.i)(this, Id), this._needMoveForGravity = !1, this._oldPosition = Wd.n.Zero(), this._diffPosition = Wd.n.Zero(), this._newPosition = Wd.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(dd, Jd) {
              let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Nd._newPosition.Fs(Jd), Nd._newPosition.subtractToRef(Nd._oldPosition, Nd._diffPosition), Nd._diffPosition.length() > sd.b.CollisionsEpsilon && (Nd.position.addToRef(Nd._diffPosition, Nd._deferredPositionUpdate), Nd._deferOnly ? Nd._deferredUpdated = !0 : Nd.position.Fs(Nd._deferredPositionUpdate), Nd.Pl && kd && Nd.Pl(kd))
            }, this.inputs = new Bd(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(dd, Jd) {
            Jd = Cd.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Jd)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Wd.n(0, 0, 0), this.cameraRotation = new Wd.k(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(dd) {
            this._collisionMask = isNaN(dd) ? -1 : dd
          }
          _collideWithWorld(dd) {
            let Jd;
            Jd = this.parent ? Wd.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Jd.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const kd = this.Wm().collisionCoordinator;
            this._collider || (this._collider = kd.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let pd = dd;
            this.applyGravity && (pd = dd.add(this.Wm().gravity)), kd.getNewPosition(this._oldPosition, pd, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Wd.n.Zero(), this._transformedDirection = Wd.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(dd) {
            this._needMoveForGravity = dd
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Wm().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.F)()], kd = [(0, Nd.F)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: dd => "ellipsoid" in dd,
              get: dd => dd.ellipsoid,
              set: (dd, Jd) => {
                dd.ellipsoid = Jd
              }
            },
            metadata: Wd
          }, od, ld), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "ellipsoidOffset" in dd,
              get: dd => dd.ellipsoidOffset,
              set: (dd, Jd) => {
                dd.ellipsoidOffset = Jd
              }
            },
            metadata: Wd
          }, Qd, Ld), (0, pd.h)(null, null, Zd, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: dd => "checkCollisions" in dd,
              get: dd => dd.checkCollisions,
              set: (dd, Jd) => {
                dd.checkCollisions = Jd
              }
            },
            metadata: Wd
          }, Od, ed), (0, pd.h)(null, null, gd, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyGravity" in dd,
              get: dd => dd.applyGravity,
              set: (dd, Jd) => {
                dd.applyGravity = Jd
              }
            },
            metadata: Wd
          }, Rd, Id), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      Fd = !1;
    Fd || (Fd = !0, (0, ad.h)("BABYLON.FreeCamera", Md))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
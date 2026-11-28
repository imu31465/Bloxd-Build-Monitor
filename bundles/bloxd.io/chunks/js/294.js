export const id = 294;
export const ids = [294];
export const modules = {
  42121: (dd, Od, md) => {
    md.d(Od, {
      e: () => xd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(42123),
      Kd = md(42154),
      hd = md(42105),
      vd = md(42029);
    let Qd = (() => {
      var dd;
      let Od, md, Xd, Kd, Qd, td, od, Nd, qd, Hd, yd, bd = [],
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Ud = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [];
      return dd = class {
        constructor() {
          this.keysUp = (0, Wd.k)(this, bd, [38]), this.keysUpward = ((0, Wd.k)(this, Td), (0, Wd.k)(this, pd, [33])), this.keysDown = ((0, Wd.k)(this, Yd), (0, Wd.k)(this, gd, [40])), this.keysDownward = ((0, Wd.k)(this, wd), (0, Wd.k)(this, Ed, [34])), this.keysLeft = ((0, Wd.k)(this, Jd), (0, Wd.k)(this, Ud, [37])), this.keysRight = ((0, Wd.k)(this, xd), (0, Wd.k)(this, Bd, [39])), this.rotationSpeed = ((0, Wd.k)(this, Sd), (0, Wd.k)(this, sd, .5)), this.keysRotateLeft = ((0, Wd.k)(this, ud), (0, Wd.k)(this, Vd, [])), this.keysRotateRight = ((0, Wd.k)(this, Ad), (0, Wd.k)(this, rd, [])), this.keysRotateUp = ((0, Wd.k)(this, Gd), (0, Wd.k)(this, nd, [])), this.keysRotateDown = ((0, Wd.k)(this, Ld), (0, Wd.k)(this, Pd, [])), this._keys = ((0, Wd.k)(this, zd), new Array)
        }
        attachControl(dd) {
          dd = vd.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.zV(), this._engine = this._scene.Iq(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Od => {
            const md = Od.event;
            if (!md.metaKey)
              if (Od.type === hd.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(md.keyCode) || -1 !== this.keysDown.indexOf(md.keyCode) || -1 !== this.keysLeft.indexOf(md.keyCode) || -1 !== this.keysRight.indexOf(md.keyCode) || -1 !== this.keysUpward.indexOf(md.keyCode) || -1 !== this.keysDownward.indexOf(md.keyCode) || -1 !== this.keysRotateLeft.indexOf(md.keyCode) || -1 !== this.keysRotateRight.indexOf(md.keyCode) || -1 !== this.keysRotateUp.indexOf(md.keyCode) || -1 !== this.keysRotateDown.indexOf(md.keyCode)) {
                  -1 === this._keys.indexOf(md.keyCode) && this._keys.push(md.keyCode), dd || md.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(md.keyCode) || -1 !== this.keysDown.indexOf(md.keyCode) || -1 !== this.keysLeft.indexOf(md.keyCode) || -1 !== this.keysRight.indexOf(md.keyCode) || -1 !== this.keysUpward.indexOf(md.keyCode) || -1 !== this.keysDownward.indexOf(md.keyCode) || -1 !== this.keysRotateLeft.indexOf(md.keyCode) || -1 !== this.keysRotateRight.indexOf(md.keyCode) || -1 !== this.keysRotateUp.indexOf(md.keyCode) || -1 !== this.keysRotateDown.indexOf(md.keyCode)) {
              const Od = this._keys.indexOf(md.keyCode);
              Od >= 0 && this._keys.splice(Od, 1), dd || md.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const dd = this.camera,
              Od = dd.movement.input,
              md = Od.getEntry("keyboard", "translate"),
              Wd = Od.getEntry("keyboard", "rotate"),
              Fd = Wd?.sensitivity ?? 1,
              Xd = dd._localDirection.KOd(0, 0, 0);
            for (let Rd = 0; Rd < this._keys.length; Rd++) {
              const Od = this._keys[Rd]; - 1 !== this.keysLeft.indexOf(Od) ? Xd.x -= 1 : -1 !== this.keysUp.indexOf(Od) ? Xd.z += 1 : -1 !== this.keysRight.indexOf(Od) ? Xd.x += 1 : -1 !== this.keysDown.indexOf(Od) ? Xd.z -= 1 : -1 !== this.keysUpward.indexOf(Od) ? Xd.y += 1 : -1 !== this.keysDownward.indexOf(Od) ? Xd.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Od) ? Wd && (dd.cameraRotation.y -= this._getLocalRotation() * Fd) : -1 !== this.keysRotateRight.indexOf(Od) ? Wd && (dd.cameraRotation.y += this._getLocalRotation() * Fd) : -1 !== this.keysRotateUp.indexOf(Od) ? Wd && (dd.cameraRotation.x -= this._getLocalRotation() * Fd) : -1 !== this.keysRotateDown.indexOf(Od) && Wd && (dd.cameraRotation.x += this._getLocalRotation() * Fd)
            }
            if (md && (0 !== Xd.x || 0 !== Xd.y || 0 !== Xd.z)) {
              const Od = dd._computeLocalCameraSpeed() * (md.sensitivity ?? 1);
              Xd.normalize().scaleInPlace(Od), dd.zV().useRightHandedSystem && (Xd.z *= -1), dd.getViewMatrix().invertToRef(dd._cameraTransformMatrix), Rd.j.TransformNormalToRef(Xd, dd._cameraTransformMatrix, dd._transformedDirection), dd.cameraDirection.addInPlace(dd._transformedDirection)
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
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Xd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.E)()], od = [(0, Fd.E)()], Nd = [(0, Fd.E)()], qd = [(0, Fd.E)()], Hd = [(0, Fd.E)()], yd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUp" in dd,
            get: dd => dd.keysUp,
            set: (dd, Od) => {
              dd.keysUp = Od
            }
          },
          metadata: Rd
        }, bd, Td), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUpward" in dd,
            get: dd => dd.keysUpward,
            set: (dd, Od) => {
              dd.keysUpward = Od
            }
          },
          metadata: Rd
        }, pd, Yd), (0, Wd.h)(null, null, Xd, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDown" in dd,
            get: dd => dd.keysDown,
            set: (dd, Od) => {
              dd.keysDown = Od
            }
          },
          metadata: Rd
        }, gd, wd), (0, Wd.h)(null, null, Kd, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDownward" in dd,
            get: dd => dd.keysDownward,
            set: (dd, Od) => {
              dd.keysDownward = Od
            }
          },
          metadata: Rd
        }, Ed, Jd), (0, Wd.h)(null, null, Qd, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysLeft" in dd,
            get: dd => dd.keysLeft,
            set: (dd, Od) => {
              dd.keysLeft = Od
            }
          },
          metadata: Rd
        }, Ud, xd), (0, Wd.h)(null, null, td, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRight" in dd,
            get: dd => dd.keysRight,
            set: (dd, Od) => {
              dd.keysRight = Od
            }
          },
          metadata: Rd
        }, Bd, Sd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: dd => "rotationSpeed" in dd,
            get: dd => dd.rotationSpeed,
            set: (dd, Od) => {
              dd.rotationSpeed = Od
            }
          },
          metadata: Rd
        }, sd, ud), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateLeft" in dd,
            get: dd => dd.keysRotateLeft,
            set: (dd, Od) => {
              dd.keysRotateLeft = Od
            }
          },
          metadata: Rd
        }, Vd, Ad), (0, Wd.h)(null, null, qd, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateRight" in dd,
            get: dd => dd.keysRotateRight,
            set: (dd, Od) => {
              dd.keysRotateRight = Od
            }
          },
          metadata: Rd
        }, rd, Gd), (0, Wd.h)(null, null, Hd, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateUp" in dd,
            get: dd => dd.keysRotateUp,
            set: (dd, Od) => {
              dd.keysRotateUp = Od
            }
          },
          metadata: Rd
        }, nd, Ld), (0, Wd.h)(null, null, yd, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRotateDown" in dd,
            get: dd => dd.keysRotateDown,
            set: (dd, Od) => {
              dd.keysRotateDown = Od
            }
          },
          metadata: Rd
        }, Pd, zd), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd
    })();
    Kd.b.FreeCameraKeyboardMoveInput = Qd;
    var td = md(38660),
      od = md(42099);
    let Nd = (() => {
      var dd;
      let Od, md, Rd = [],
        Xd = [],
        Kd = [],
        hd = [];
      return dd = class {
        _applyPointerRotation(dd, Od) {
          this._pointerConditions.button = this._currentActiveButton;
          const md = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!md || "rotate" !== md.interaction) return;
          const Wd = md.Dk ?? md.sensitivity ?? 1 / this.angularSensibility,
            Fd = md.Zk ?? md.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += dd * Wd, this.camera.cameraRotation.x += Od * Fd
        }
        constructor() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = dd, this.buttons = (0, Wd.k)(this, Rd, [0, 1, 2]), this.angularSensibility = ((0, Wd.k)(this, Xd), (0, Wd.k)(this, Kd, 2e3)), this._pointerInput = (0, Wd.k)(this, hd), this._previousPosition = null, this.onPointerMovedObservable = new td.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(dd) {
          dd = vd.g.BackCompatCameraNoPreventDefault(arguments);
          const Od = this.camera.Iq(),
            md = Od.getInputElement();
          this._pointerInput || (this._pointerInput = Wd => {
            const Fd = Wd.event,
              Rd = "touch" === Fd.pointerType;
            if (!this.touchEnabled && Rd) return;
            if (Wd.type !== od.b.POINTERMOVE && -1 === this.buttons.indexOf(Fd.button)) return;
            const Xd = Fd.target;
            if (Wd.type === od.b.POINTERDOWN) {
              if (Rd && -1 !== this._activePointerId || !Rd && -1 !== this._currentActiveButton) return;
              this._activePointerId = Fd.pointerId;
              try {
                Xd?.setPointerCapture(Fd.pointerId)
              } catch (Kd) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Fd.button), this._previousPosition = {
                x: Fd.clientX,
                y: Fd.clientY
              }, dd || (Fd.preventDefault(), md && md.focus()), Od.isPointerLock && this._onMouseMove && this._onMouseMove(Wd.event)
            } else if (Wd.type === od.b.POINTERUP) {
              if (Rd && this._activePointerId !== Fd.pointerId || !Rd && this._currentActiveButton !== Fd.button) return;
              try {
                Xd?.releasePointerCapture(Fd.pointerId)
              } catch (Kd) {}
              this._currentActiveButton = -1, this._previousPosition = null, dd || Fd.preventDefault(), this._activePointerId = -1
            } else if (Wd.type === od.b.POINTERMOVE && (this._activePointerId === Fd.pointerId || !Rd))
              if (Od.isPointerLock && this._onMouseMove) this._onMouseMove(Wd.event);
              else if (this._previousPosition) {
              const Od = this.camera._calculateHandednessMultiplier(),
                md = (Fd.clientX - this._previousPosition.x) * Od,
                Wd = (Fd.clientY - this._previousPosition.y) * Od;
              this._allowCameraRotation && this._applyPointerRotation(md, Wd), this.onPointerMovedObservable.notifyObservers({
                offsetX: md,
                offsetY: Wd
              }), this._previousPosition = {
                x: Fd.clientX,
                y: Fd.clientY
              }, dd || Fd.preventDefault()
            }
          }), this._onMouseMove = md => {
            if (!Od.isPointerLock) return;
            const Wd = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(md.movementX * Wd, md.movementY * Wd), this._previousPosition = null, dd || md.preventDefault()
          }, this._observer = this.camera.zV()._inputManager._addCameraPointerObserver(this._pointerInput, od.b.POINTERDOWN | od.b.POINTERUP | od.b.POINTERMOVE), md && (this._contextMenuBind = dd => this.onContextMenu(dd), md.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(dd) {
          dd.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.zV()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const dd = this.camera.Iq().getInputElement();
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
        const vd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: dd => "buttons" in dd,
            get: dd => dd.buttons,
            set: (dd, Od) => {
              dd.buttons = Od
            }
          },
          metadata: vd
        }, Rd, Xd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "angularSensibility" in dd,
            get: dd => dd.angularSensibility,
            set: (dd, Od) => {
              dd.angularSensibility = Od
            }
          },
          metadata: vd
        }, Kd, hd), vd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vd
        })
      })(), dd
    })();
    Kd.b.FreeCameraMouseInput = Nd;
    var qd = md(42111);
    let Hd = (() => {
      var dd;
      let Od, md, Rd, Xd = [],
        Kd = [],
        hd = [],
        Qd = [],
        Nd = [],
        Hd = [];
      return dd = class {
        constructor() {
          this.wheelPrecisionX = (0, Wd.k)(this, Xd, 3), this.wheelPrecisionY = ((0, Wd.k)(this, Kd), (0, Wd.k)(this, hd, 3)), this.wheelPrecisionZ = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, Nd, 3)), this.onChangedObservable = ((0, Wd.k)(this, Hd), new td.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(dd) {
          dd = vd.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = Od => {
            if (Od.type !== od.b.POINTERWHEEL) return;
            const md = Od.event,
              Wd = md.deltaMode === qd.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Wd * md.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Wd * md.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Wd * md.deltaZ / this._normalize, md.preventDefault && (dd || md.preventDefault())
          }, this._observer = this.camera.zV()._inputManager._addCameraPointerObserver(this._wheel, od.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.zV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const vd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionX" in dd,
            get: dd => dd.wheelPrecisionX,
            set: (dd, Od) => {
              dd.wheelPrecisionX = Od
            }
          },
          metadata: vd
        }, Xd, Kd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionY" in dd,
            get: dd => dd.wheelPrecisionY,
            set: (dd, Od) => {
              dd.wheelPrecisionY = Od
            }
          },
          metadata: vd
        }, hd, Qd), (0, Wd.h)(null, null, Rd, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecisionZ" in dd,
            get: dd => dd.wheelPrecisionZ,
            set: (dd, Od) => {
              dd.wheelPrecisionZ = Od
            }
          },
          metadata: vd
        }, Nd, Hd), vd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vd
        })
      })(), dd
    })();
    var yd;
    ! function(dd) {
      dd[dd.MoveRelative = 0] = "MoveRelative", dd[dd.RotateRelative = 1] = "RotateRelative", dd[dd.MoveScene = 2] = "MoveScene"
    }(yd || (yd = {}));
    let bd = (() => {
      var dd;
      let Od, md, Xd, Kd, hd, vd, Qd, td, od, Nd = Hd,
        qd = [];
      return dd = class extends Nd {
        constructor() {
          super(...arguments), this.camera = (0, Wd.k)(this, qd), this._moveRelative = Rd.j.Zero(), this._rotateRelative = Rd.j.Zero(), this._moveScene = Rd.j.Zero(), this._wheelXAction = yd.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yd.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(dd) {
          null === dd && this._wheelXAction !== yd.MoveRelative || (this._wheelXAction = yd.MoveRelative, this._wheelXActionCoordinate = dd)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== yd.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(dd) {
          null === dd && this._wheelYAction !== yd.MoveRelative || (this._wheelYAction = yd.MoveRelative, this._wheelYActionCoordinate = dd)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== yd.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(dd) {
          null === dd && this._wheelZAction !== yd.MoveRelative || (this._wheelZAction = yd.MoveRelative, this._wheelZActionCoordinate = dd)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== yd.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(dd) {
          null === dd && this._wheelXAction !== yd.RotateRelative || (this._wheelXAction = yd.RotateRelative, this._wheelXActionCoordinate = dd)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== yd.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(dd) {
          null === dd && this._wheelYAction !== yd.RotateRelative || (this._wheelYAction = yd.RotateRelative, this._wheelYActionCoordinate = dd)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== yd.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(dd) {
          null === dd && this._wheelZAction !== yd.RotateRelative || (this._wheelZAction = yd.RotateRelative, this._wheelZActionCoordinate = dd)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== yd.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(dd) {
          null === dd && this._wheelXAction !== yd.MoveScene || (this._wheelXAction = yd.MoveScene, this._wheelXActionCoordinate = dd)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== yd.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(dd) {
          null === dd && this._wheelYAction !== yd.MoveScene || (this._wheelYAction = yd.MoveScene, this._wheelYActionCoordinate = dd)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== yd.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(dd) {
          null === dd && this._wheelZAction !== yd.MoveScene || (this._wheelZAction = yd.MoveScene, this._wheelZActionCoordinate = dd)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== yd.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Bdd(0), this._rotateRelative.Bdd(0), this._moveScene.Bdd(0), this._updateCamera(), this.camera.zV().useRightHandedSystem && (this._moveRelative.z *= -1);
          const dd = Rd.d.Zero();
          this.camera.getViewMatrix().invertToRef(dd);
          const Od = Rd.j.Zero();
          Rd.j.TransformNormalToRef(this._moveRelative, dd, Od), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Od), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(dd, Od, md) {
          if (0 === dd) return;
          if (null === Od || null === md) return;
          let Wd = null;
          switch (Od) {
            case yd.MoveRelative:
              Wd = this._moveRelative;
              break;
            case yd.RotateRelative:
              Wd = this._rotateRelative;
              break;
            case yd.MoveScene:
              Wd = this._moveScene
          }
          switch (md) {
            case 0:
              Wd.set(dd, 0, 0);
              break;
            case 1:
              Wd.set(0, dd, 0);
              break;
            case 2:
              Wd.set(0, 0, dd)
          }
        }
      }, (() => {
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nd[Symbol.metadata] ?? null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Xd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.E)()], od = [(0, Fd.E)()], (0, Wd.h)(dd, null, Od, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXMoveRelative" in dd,
            set: (dd, Od) => {
              dd.wheelXMoveRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, md, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYMoveRelative" in dd,
            set: (dd, Od) => {
              dd.wheelYMoveRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, Xd, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZMoveRelative" in dd,
            set: (dd, Od) => {
              dd.wheelZMoveRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, Kd, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXRotateRelative" in dd,
            set: (dd, Od) => {
              dd.wheelXRotateRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, hd, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYRotateRelative" in dd,
            set: (dd, Od) => {
              dd.wheelYRotateRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, vd, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZRotateRelative" in dd,
            set: (dd, Od) => {
              dd.wheelZRotateRelative = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, Qd, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelXMoveScene" in dd,
            set: (dd, Od) => {
              dd.wheelXMoveScene = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, td, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelYMoveScene" in dd,
            set: (dd, Od) => {
              dd.wheelYMoveScene = Od
            }
          },
          metadata: Rd
        }, null, qd), (0, Wd.h)(dd, null, od, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelZMoveScene" in dd,
            set: (dd, Od) => {
              dd.wheelZMoveScene = Od
            }
          },
          metadata: Rd
        }, null, qd), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd
    })();
    Kd.b.FreeCameraMouseWheelInput = bd;
    let Td = (() => {
      var dd;
      let Od, md, Xd = [],
        Kd = [],
        hd = [],
        Qd = [];
      return dd = class {
        constructor() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = dd, this.touchAngularSensibility = (0, Wd.k)(this, Xd, 2e5), this.touchMoveSensibility = ((0, Wd.k)(this, Kd), (0, Wd.k)(this, hd, 250)), this.singleFingerRotate = ((0, Wd.k)(this, Qd), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = vd.g.IsSafari()
        }
        attachControl(dd) {
          dd = vd.g.BackCompatCameraNoPreventDefault(arguments);
          let Od = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = md => {
              const Wd = md.event,
                Fd = "mouse" === Wd.pointerType || this._isSafari && "undefined" === typeof Wd.pointerType;
              if (this.allowMouse || !Fd)
                if (md.type === od.b.POINTERDOWN) {
                  if (dd || Wd.preventDefault(), this._pointerPressed.push(Wd.pointerId), 1 !== this._pointerPressed.length) return;
                  Od = {
                    x: Wd.clientX,
                    y: Wd.clientY
                  }
                } else if (md.type === od.b.POINTERUP) {
                dd || Wd.preventDefault();
                const md = this._pointerPressed.indexOf(Wd.pointerId);
                if (-1 === md) return;
                if (this._pointerPressed.splice(md, 1), 0 != md) return;
                Od = null, this._offsetX = null, this._offsetY = null
              } else if (md.type === od.b.POINTERMOVE) {
                if (dd || Wd.preventDefault(), !Od) return;
                if (0 != this._pointerPressed.indexOf(Wd.pointerId)) return;
                this._offsetX = Wd.clientX - Od.x, this._offsetY = -(Wd.clientY - Od.y)
              }
            }), this._observer = this.camera.zV()._inputManager._addCameraPointerObserver(this._pointerInput, od.b.POINTERDOWN | od.b.POINTERUP | od.b.POINTERMOVE), this._onLostFocus) {
            const dd = this.camera.Iq().getInputElement();
            dd && dd.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.zV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const dd = this.camera.Iq().getInputElement();
              dd && dd.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const dd = this.camera,
            Od = dd.movement.input,
            md = Od.getEntry("touch", "rotate"),
            Wd = Od.getEntry("touch", "translate"),
            Fd = dd._calculateHandednessMultiplier(),
            Xd = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (md) {
            const Od = md.sensitivity ?? 1 / this.touchAngularSensibility;
            dd.cameraRotation.y = this._offsetX * Fd * Od, Xd && (dd.cameraRotation.x = -this._offsetY * Fd * Od)
          }
          if (!Xd && Wd) {
            const Od = dd._computeLocalCameraSpeed(),
              md = Wd.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Fd = Rd.h.Cq[0];
            Fd.KOd(0, 0, Od * this._offsetY * md), Rd.d.RotationYawPitchRollToRef(dd.rotation.y, dd.rotation.x, 0, dd._cameraRotationMatrix), Rd.j.TransformCoordinatesToRef(Fd, dd._cameraRotationMatrix, Fd), dd.cameraDirection.addInPlace(Fd)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "touchAngularSensibility" in dd,
            get: dd => dd.touchAngularSensibility,
            set: (dd, Od) => {
              dd.touchAngularSensibility = Od
            }
          },
          metadata: Rd
        }, Xd, Kd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "touchMoveSensibility" in dd,
            get: dd => dd.touchMoveSensibility,
            set: (dd, Od) => {
              dd.touchMoveSensibility = Od
            }
          },
          metadata: Rd
        }, hd, Qd), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd
    })();
    Kd.b.FreeCameraTouchInput = Td;
    var pd, Yd, gd, wd = md(41817);
    class Ed extends Kd.f {
      constructor(dd) {
        super(dd), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new Qd), this
      }
      addMouse() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Nd(dd), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new bd, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Td), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(pd = Ed.prototype).addDeviceOrientation ?? (pd.addDeviceOrientation = (0, wd.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Yd = Ed.prototype).addVirtualJoystick ?? (Yd.addVirtualJoystick = (0, wd.i)("FreeCameraInputsManager", "addVirtualJoystick")), (gd = Ed.prototype).addGamepad ?? (gd.addGamepad = (0, wd.i)("FreeCameraInputsManager", "addGamepad"));
    var Jd = md(41838),
      Ud = md(38669);
    let xd = (() => {
        var dd;
        let Od, md, Kd, hd, Qd = Xd.h,
          td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [],
          bd = [],
          Td = [];
        return dd = class extends Qd {
          get angularSensibility() {
            const dd = this.inputs.attached.mouse;
            return dd ? dd.angularSensibility : 0
          }
          set angularSensibility(dd) {
            const Od = this.inputs.attached.mouse;
            Od && (Od.angularSensibility = dd)
          }
          get keysUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUp : []
          }
          set keysUp(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysUp = dd)
          }
          get keysUpward() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUpward : []
          }
          set keysUpward(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysUpward = dd)
          }
          get keysDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDown : []
          }
          set keysDown(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysDown = dd)
          }
          get keysDownward() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDownward : []
          }
          set keysDownward(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysDownward = dd)
          }
          get keysLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysLeft : []
          }
          set keysLeft(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysLeft = dd)
          }
          get keysRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRight : []
          }
          set keysRight(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRight = dd)
          }
          get keysRotateLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateLeft : []
          }
          set keysRotateLeft(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRotateLeft = dd)
          }
          get keysRotateRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateRight : []
          }
          set keysRotateRight(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRotateRight = dd)
          }
          get keysRotateUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateUp : []
          }
          set keysRotateUp(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRotateUp = dd)
          }
          get keysRotateDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRotateDown : []
          }
          set keysRotateDown(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRotateDown = dd)
          }
          constructor(dd, Od, md) {
            var Fd;
            super(dd, Od, md, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Fd = this, this.ellipsoid = (0, Wd.k)(this, td, new Rd.j(.5, 1, .5)), this.ellipsoidOffset = ((0, Wd.k)(this, od), (0, Wd.k)(this, Nd, new Rd.j(0, 0, 0))), this.checkCollisions = ((0, Wd.k)(this, qd), (0, Wd.k)(this, Hd, !1)), this.applyGravity = ((0, Wd.k)(this, yd), (0, Wd.k)(this, bd, !1)), this.inputs = (0, Wd.k)(this, Td), this._needMoveForGravity = !1, this._oldPosition = Rd.j.Zero(), this._diffPosition = Rd.j.Zero(), this._newPosition = Rd.j.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(dd, Od) {
              let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Fd._newPosition.Bx(Od), Fd._newPosition.subtractToRef(Fd._oldPosition, Fd._diffPosition), Fd._diffPosition.length() > Jd.b.CollisionsEpsilon && (Fd.position.addToRef(Fd._diffPosition, Fd._deferredPositionUpdate), Fd._deferOnly ? Fd._deferredUpdated = !0 : Fd.position.Bx(Fd._deferredPositionUpdate), Fd.Co && md && Fd.Co(md))
            }, this.inputs = new Ed(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(dd, Od) {
            Od = vd.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Od)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Rd.j(0, 0, 0), this.cameraRotation = new Rd.i(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(dd) {
            this._collisionMask = isNaN(dd) ? -1 : dd
          }
          _collideWithWorld(dd) {
            let Od;
            Od = this.parent ? Rd.j.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Od.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const md = this.zV().collisionCoordinator;
            this._collider || (this._collider = md.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Wd = dd;
            this.applyGravity && (Wd = dd.add(this.zV().gravity)), md.getNewPosition(this._oldPosition, Wd, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Rd.j.Zero(), this._transformedDirection = Rd.j.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.zV().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.B)()], md = [(0, Fd.B)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: dd => "ellipsoid" in dd,
              get: dd => dd.ellipsoid,
              set: (dd, Od) => {
                dd.ellipsoid = Od
              }
            },
            metadata: Rd
          }, td, od), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "ellipsoidOffset" in dd,
              get: dd => dd.ellipsoidOffset,
              set: (dd, Od) => {
                dd.ellipsoidOffset = Od
              }
            },
            metadata: Rd
          }, Nd, qd), (0, Wd.h)(null, null, Kd, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: dd => "checkCollisions" in dd,
              get: dd => dd.checkCollisions,
              set: (dd, Od) => {
                dd.checkCollisions = Od
              }
            },
            metadata: Rd
          }, Hd, yd), (0, Wd.h)(null, null, hd, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyGravity" in dd,
              get: dd => dd.applyGravity,
              set: (dd, Od) => {
                dd.applyGravity = Od
              }
            },
            metadata: Rd
          }, bd, Td), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      Bd = !1;
    Bd || (Bd = !0, (0, Ud.e)("BABYLON.FreeCamera", xd))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
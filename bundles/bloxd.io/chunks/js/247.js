export const id = 247;
export const ids = [247];
export const modules = {
  38979: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => vT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(38983),
      XT = IT(39016),
      BT = IT(38963),
      FT = IT(38886);
    let ST = (() => {
      var TT;
      let oT, IT, WT, XT, ST, DT, LT, xT, cT, KT, MT, rT = [],
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        uT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [];
      return TT = class {
        constructor() {
          this.keysUp = (0, iT.j)(this, rT, [38]), this.keysUpward = ((0, iT.j)(this, AT), (0, iT.j)(this, gT, [33])), this.keysDown = ((0, iT.j)(this, hT), (0, iT.j)(this, wT, [40])), this.keysDownward = ((0, iT.j)(this, mT), (0, iT.j)(this, eT, [34])), this.keysLeft = ((0, iT.j)(this, RT), (0, iT.j)(this, uT, [37])), this.keysRight = ((0, iT.j)(this, vT), (0, iT.j)(this, ET, [39])), this.rotationSpeed = ((0, iT.j)(this, fT), (0, iT.j)(this, CT, .5)), this.keysRotateLeft = ((0, iT.j)(this, jT), (0, iT.j)(this, JT, [])), this.keysRotateRight = ((0, iT.j)(this, UT), (0, iT.j)(this, aT, [])), this.keysRotateUp = ((0, iT.j)(this, YT), (0, iT.j)(this, QT, [])), this.keysRotateDown = ((0, iT.j)(this, OT), (0, iT.j)(this, HT, [])), this._keys = ((0, iT.j)(this, nT), new Array)
        }
        attachControl(TT) {
          TT = FT.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.pC(), this._engine = this._scene.Zc(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((oT => {
            const IT = oT.event;
            if (!IT.metaKey)
              if (oT.type === BT.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(IT.keyCode) || -1 !== this.keysDown.indexOf(IT.keyCode) || -1 !== this.keysLeft.indexOf(IT.keyCode) || -1 !== this.keysRight.indexOf(IT.keyCode) || -1 !== this.keysUpward.indexOf(IT.keyCode) || -1 !== this.keysDownward.indexOf(IT.keyCode) || -1 !== this.keysRotateLeft.indexOf(IT.keyCode) || -1 !== this.keysRotateRight.indexOf(IT.keyCode) || -1 !== this.keysRotateUp.indexOf(IT.keyCode) || -1 !== this.keysRotateDown.indexOf(IT.keyCode)) {
                  -1 === this._keys.indexOf(IT.keyCode) && this._keys.push(IT.keyCode), TT || IT.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(IT.keyCode) || -1 !== this.keysDown.indexOf(IT.keyCode) || -1 !== this.keysLeft.indexOf(IT.keyCode) || -1 !== this.keysRight.indexOf(IT.keyCode) || -1 !== this.keysUpward.indexOf(IT.keyCode) || -1 !== this.keysDownward.indexOf(IT.keyCode) || -1 !== this.keysRotateLeft.indexOf(IT.keyCode) || -1 !== this.keysRotateRight.indexOf(IT.keyCode) || -1 !== this.keysRotateUp.indexOf(IT.keyCode) || -1 !== this.keysRotateDown.indexOf(IT.keyCode)) {
              const oT = this._keys.indexOf(IT.keyCode);
              oT >= 0 && this._keys.splice(oT, 1), TT || IT.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              oT = TT.movement.input,
              IT = oT.getEntry("keyboard", "translate"),
              iT = oT.getEntry("keyboard", "rotate"),
              zT = iT?.sensitivity ?? 1,
              WT = TT._localDirection.S_(0, 0, 0);
            for (let kT = 0; kT < this._keys.length; kT++) {
              const oT = this._keys[kT]; - 1 !== this.keysLeft.indexOf(oT) ? WT.x -= 1 : -1 !== this.keysUp.indexOf(oT) ? WT.z += 1 : -1 !== this.keysRight.indexOf(oT) ? WT.x += 1 : -1 !== this.keysDown.indexOf(oT) ? WT.z -= 1 : -1 !== this.keysUpward.indexOf(oT) ? WT.y += 1 : -1 !== this.keysDownward.indexOf(oT) ? WT.y -= 1 : -1 !== this.keysRotateLeft.indexOf(oT) ? iT && (TT.cameraRotation.y -= this._getLocalRotation() * zT) : -1 !== this.keysRotateRight.indexOf(oT) ? iT && (TT.cameraRotation.y += this._getLocalRotation() * zT) : -1 !== this.keysRotateUp.indexOf(oT) ? iT && (TT.cameraRotation.x -= this._getLocalRotation() * zT) : -1 !== this.keysRotateDown.indexOf(oT) && iT && (TT.cameraRotation.x += this._getLocalRotation() * zT)
            }
            if (IT && (0 !== WT.x || 0 !== WT.y || 0 !== WT.z)) {
              const oT = TT._computeLocalCameraSpeed() * (IT.sensitivity ?? 1);
              WT.normalize().scaleInPlace(oT), TT.pC().useRightHandedSystem && (WT.z *= -1), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), kT.m.TransformNormalToRef(WT, TT._cameraTransformMatrix, TT._transformedDirection), TT.cameraDirection.addInPlace(TT._transformedDirection)
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
          const TT = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * TT
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], WT = [(0, zT.P)()], XT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.P)()], LT = [(0, zT.P)()], xT = [(0, zT.P)()], cT = [(0, zT.P)()], KT = [(0, zT.P)()], MT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, oT) => {
              TT.keysUp = oT
            }
          },
          metadata: kT
        }, rT, AT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUpward" in TT,
            get: TT => TT.keysUpward,
            set: (TT, oT) => {
              TT.keysUpward = oT
            }
          },
          metadata: kT
        }, gT, hT), (0, iT.h)(null, null, WT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, oT) => {
              TT.keysDown = oT
            }
          },
          metadata: kT
        }, wT, mT), (0, iT.h)(null, null, XT, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDownward" in TT,
            get: TT => TT.keysDownward,
            set: (TT, oT) => {
              TT.keysDownward = oT
            }
          },
          metadata: kT
        }, eT, RT), (0, iT.h)(null, null, ST, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, oT) => {
              TT.keysLeft = oT
            }
          },
          metadata: kT
        }, uT, vT), (0, iT.h)(null, null, DT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, oT) => {
              TT.keysRight = oT
            }
          },
          metadata: kT
        }, ET, fT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "rotationSpeed" in TT,
            get: TT => TT.rotationSpeed,
            set: (TT, oT) => {
              TT.rotationSpeed = oT
            }
          },
          metadata: kT
        }, CT, jT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateLeft" in TT,
            get: TT => TT.keysRotateLeft,
            set: (TT, oT) => {
              TT.keysRotateLeft = oT
            }
          },
          metadata: kT
        }, JT, UT), (0, iT.h)(null, null, cT, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateRight" in TT,
            get: TT => TT.keysRotateRight,
            set: (TT, oT) => {
              TT.keysRotateRight = oT
            }
          },
          metadata: kT
        }, aT, YT), (0, iT.h)(null, null, KT, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateUp" in TT,
            get: TT => TT.keysRotateUp,
            set: (TT, oT) => {
              TT.keysRotateUp = oT
            }
          },
          metadata: kT
        }, QT, OT), (0, iT.h)(null, null, MT, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateDown" in TT,
            get: TT => TT.keysRotateDown,
            set: (TT, oT) => {
              TT.keysRotateDown = oT
            }
          },
          metadata: kT
        }, HT, nT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    XT.b.FreeCameraKeyboardMoveInput = ST;
    var DT = IT(36149),
      LT = IT(38957);
    let xT = (() => {
      var TT;
      let oT, IT, kT = [],
        WT = [],
        XT = [],
        BT = [];
      return TT = class {
        _applyPointerRotation(TT, oT) {
          this._pointerConditions.button = this._currentActiveButton;
          const IT = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!IT || "rotate" !== IT.interaction) return;
          const iT = IT.Kl ?? IT.sensitivity ?? 1 / this.angularSensibility,
            zT = IT.Ml ?? IT.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += TT * iT, this.camera.cameraRotation.x += oT * zT
        }
        constructor() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = TT, this.buttons = (0, iT.j)(this, kT, [0, 1, 2]), this.angularSensibility = ((0, iT.j)(this, WT), (0, iT.j)(this, XT, 2e3)), this._pointerInput = (0, iT.j)(this, BT), this._previousPosition = null, this.onPointerMovedObservable = new DT.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(TT) {
          TT = FT.i.BackCompatCameraNoPreventDefault(arguments);
          const oT = this.camera.Zc(),
            IT = oT.getInputElement();
          this._pointerInput || (this._pointerInput = iT => {
            const zT = iT.event,
              kT = "touch" === zT.pointerType;
            if (!this.touchEnabled && kT) return;
            if (iT.type !== LT.c.POINTERMOVE && -1 === this.buttons.indexOf(zT.button)) return;
            const WT = zT.target;
            if (iT.type === LT.c.POINTERDOWN) {
              if (kT && -1 !== this._activePointerId || !kT && -1 !== this._currentActiveButton) return;
              this._activePointerId = zT.pointerId;
              try {
                WT?.setPointerCapture(zT.pointerId)
              } catch (XT) {} - 1 === this._currentActiveButton && (this._currentActiveButton = zT.button), this._previousPosition = {
                x: zT.clientX,
                y: zT.clientY
              }, TT || (zT.preventDefault(), IT && IT.focus()), oT.isPointerLock && this._onMouseMove && this._onMouseMove(iT.event)
            } else if (iT.type === LT.c.POINTERUP) {
              if (kT && this._activePointerId !== zT.pointerId || !kT && this._currentActiveButton !== zT.button) return;
              try {
                WT?.releasePointerCapture(zT.pointerId)
              } catch (XT) {}
              this._currentActiveButton = -1, this._previousPosition = null, TT || zT.preventDefault(), this._activePointerId = -1
            } else if (iT.type === LT.c.POINTERMOVE && (this._activePointerId === zT.pointerId || !kT))
              if (oT.isPointerLock && this._onMouseMove) this._onMouseMove(iT.event);
              else if (this._previousPosition) {
              const oT = this.camera._calculateHandednessMultiplier(),
                IT = (zT.clientX - this._previousPosition.x) * oT,
                iT = (zT.clientY - this._previousPosition.y) * oT;
              this._allowCameraRotation && this._applyPointerRotation(IT, iT), this.onPointerMovedObservable.notifyObservers({
                offsetX: IT,
                offsetY: iT
              }), this._previousPosition = {
                x: zT.clientX,
                y: zT.clientY
              }, TT || zT.preventDefault()
            }
          }), this._onMouseMove = IT => {
            if (!oT.isPointerLock) return;
            const iT = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(IT.movementX * iT, IT.movementY * iT), this._previousPosition = null, TT || IT.preventDefault()
          }, this._observer = this.camera.pC()._inputManager._addCameraPointerObserver(this._pointerInput, LT.c.POINTERDOWN | LT.c.POINTERUP | LT.c.POINTERMOVE), IT && (this._contextMenuBind = TT => this.onContextMenu(TT), IT.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(TT) {
          TT.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.pC()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const TT = this.camera.Zc().getInputElement();
              TT && TT.removeEventListener("contextmenu", this._contextMenuBind)
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
        const FT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: TT => "buttons" in TT,
            get: TT => TT.buttons,
            set: (TT, oT) => {
              TT.buttons = oT
            }
          },
          metadata: FT
        }, kT, WT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSensibility" in TT,
            get: TT => TT.angularSensibility,
            set: (TT, oT) => {
              TT.angularSensibility = oT
            }
          },
          metadata: FT
        }, XT, BT), FT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FT
        })
      })(), TT
    })();
    XT.b.FreeCameraMouseInput = xT;
    var cT = IT(38966);
    let KT = (() => {
      var TT;
      let oT, IT, kT, WT = [],
        XT = [],
        BT = [],
        ST = [],
        xT = [],
        KT = [];
      return TT = class {
        constructor() {
          this.wheelPrecisionX = (0, iT.j)(this, WT, 3), this.wheelPrecisionY = ((0, iT.j)(this, XT), (0, iT.j)(this, BT, 3)), this.wheelPrecisionZ = ((0, iT.j)(this, ST), (0, iT.j)(this, xT, 3)), this.onChangedObservable = ((0, iT.j)(this, KT), new DT.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(TT) {
          TT = FT.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = oT => {
            if (oT.type !== LT.c.POINTERWHEEL) return;
            const IT = oT.event,
              iT = IT.deltaMode === cT.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * iT * IT.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * iT * IT.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * iT * IT.deltaZ / this._normalize, IT.preventDefault && (TT || IT.preventDefault())
          }, this._observer = this.camera.pC()._inputManager._addCameraPointerObserver(this._wheel, LT.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.pC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const FT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionX" in TT,
            get: TT => TT.wheelPrecisionX,
            set: (TT, oT) => {
              TT.wheelPrecisionX = oT
            }
          },
          metadata: FT
        }, WT, XT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionY" in TT,
            get: TT => TT.wheelPrecisionY,
            set: (TT, oT) => {
              TT.wheelPrecisionY = oT
            }
          },
          metadata: FT
        }, BT, ST), (0, iT.h)(null, null, kT, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionZ" in TT,
            get: TT => TT.wheelPrecisionZ,
            set: (TT, oT) => {
              TT.wheelPrecisionZ = oT
            }
          },
          metadata: FT
        }, xT, KT), FT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FT
        })
      })(), TT
    })();
    var MT;
    ! function(TT) {
      TT[TT.MoveRelative = 0] = "MoveRelative", TT[TT.RotateRelative = 1] = "RotateRelative", TT[TT.MoveScene = 2] = "MoveScene"
    }(MT || (MT = {}));
    let rT = (() => {
      var TT;
      let oT, IT, WT, XT, BT, FT, ST, DT, LT, xT = KT,
        cT = [];
      return TT = class extends xT {
        constructor() {
          super(...arguments), this.camera = (0, iT.j)(this, cT), this._moveRelative = kT.m.Zero(), this._rotateRelative = kT.m.Zero(), this._moveScene = kT.m.Zero(), this._wheelXAction = MT.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = MT.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(TT) {
          null === TT && this._wheelXAction !== MT.MoveRelative || (this._wheelXAction = MT.MoveRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== MT.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(TT) {
          null === TT && this._wheelYAction !== MT.MoveRelative || (this._wheelYAction = MT.MoveRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== MT.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(TT) {
          null === TT && this._wheelZAction !== MT.MoveRelative || (this._wheelZAction = MT.MoveRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== MT.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(TT) {
          null === TT && this._wheelXAction !== MT.RotateRelative || (this._wheelXAction = MT.RotateRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== MT.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(TT) {
          null === TT && this._wheelYAction !== MT.RotateRelative || (this._wheelYAction = MT.RotateRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== MT.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(TT) {
          null === TT && this._wheelZAction !== MT.RotateRelative || (this._wheelZAction = MT.RotateRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== MT.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(TT) {
          null === TT && this._wheelXAction !== MT.MoveScene || (this._wheelXAction = MT.MoveScene, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== MT.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(TT) {
          null === TT && this._wheelYAction !== MT.MoveScene || (this._wheelYAction = MT.MoveScene, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== MT.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(TT) {
          null === TT && this._wheelZAction !== MT.MoveScene || (this._wheelZAction = MT.MoveScene, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== MT.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.W8(0), this._rotateRelative.W8(0), this._moveScene.W8(0), this._updateCamera(), this.camera.pC().useRightHandedSystem && (this._moveRelative.z *= -1);
          const TT = kT.b.Zero();
          this.camera.getViewMatrix().invertToRef(TT);
          const oT = kT.m.Zero();
          kT.m.TransformNormalToRef(this._moveRelative, TT, oT), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(oT), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(TT, oT, IT) {
          if (0 === TT) return;
          if (null === oT || null === IT) return;
          let iT = null;
          switch (oT) {
            case MT.MoveRelative:
              iT = this._moveRelative;
              break;
            case MT.RotateRelative:
              iT = this._rotateRelative;
              break;
            case MT.MoveScene:
              iT = this._moveScene
          }
          switch (IT) {
            case 0:
              iT.set(TT, 0, 0);
              break;
            case 1:
              iT.set(0, TT, 0);
              break;
            case 2:
              iT.set(0, 0, TT)
          }
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(xT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], WT = [(0, zT.P)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.P)()], LT = [(0, zT.P)()], (0, iT.h)(TT, null, oT, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveRelative" in TT,
            set: (TT, oT) => {
              TT.wheelXMoveRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, IT, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveRelative" in TT,
            set: (TT, oT) => {
              TT.wheelYMoveRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, WT, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveRelative" in TT,
            set: (TT, oT) => {
              TT.wheelZMoveRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, XT, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXRotateRelative" in TT,
            set: (TT, oT) => {
              TT.wheelXRotateRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, BT, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYRotateRelative" in TT,
            set: (TT, oT) => {
              TT.wheelYRotateRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, FT, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZRotateRelative" in TT,
            set: (TT, oT) => {
              TT.wheelZRotateRelative = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, ST, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveScene" in TT,
            set: (TT, oT) => {
              TT.wheelXMoveScene = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, DT, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveScene" in TT,
            set: (TT, oT) => {
              TT.wheelYMoveScene = oT
            }
          },
          metadata: kT
        }, null, cT), (0, iT.h)(TT, null, LT, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveScene" in TT,
            set: (TT, oT) => {
              TT.wheelZMoveScene = oT
            }
          },
          metadata: kT
        }, null, cT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    XT.b.FreeCameraMouseWheelInput = rT;
    let AT = (() => {
      var TT;
      let oT, IT, WT = [],
        XT = [],
        BT = [],
        ST = [];
      return TT = class {
        constructor() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = TT, this.touchAngularSensibility = (0, iT.j)(this, WT, 2e5), this.touchMoveSensibility = ((0, iT.j)(this, XT), (0, iT.j)(this, BT, 250)), this.singleFingerRotate = ((0, iT.j)(this, ST), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = FT.i.IsSafari()
        }
        attachControl(TT) {
          TT = FT.i.BackCompatCameraNoPreventDefault(arguments);
          let oT = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = IT => {
              const iT = IT.event,
                zT = "mouse" === iT.pointerType || this._isSafari && "undefined" === typeof iT.pointerType;
              if (this.allowMouse || !zT)
                if (IT.type === LT.c.POINTERDOWN) {
                  if (TT || iT.preventDefault(), this._pointerPressed.push(iT.pointerId), 1 !== this._pointerPressed.length) return;
                  oT = {
                    x: iT.clientX,
                    y: iT.clientY
                  }
                } else if (IT.type === LT.c.POINTERUP) {
                TT || iT.preventDefault();
                const IT = this._pointerPressed.indexOf(iT.pointerId);
                if (-1 === IT) return;
                if (this._pointerPressed.splice(IT, 1), 0 != IT) return;
                oT = null, this._offsetX = null, this._offsetY = null
              } else if (IT.type === LT.c.POINTERMOVE) {
                if (TT || iT.preventDefault(), !oT) return;
                if (0 != this._pointerPressed.indexOf(iT.pointerId)) return;
                this._offsetX = iT.clientX - oT.x, this._offsetY = -(iT.clientY - oT.y)
              }
            }), this._observer = this.camera.pC()._inputManager._addCameraPointerObserver(this._pointerInput, LT.c.POINTERDOWN | LT.c.POINTERUP | LT.c.POINTERMOVE), this._onLostFocus) {
            const TT = this.camera.Zc().getInputElement();
            TT && TT.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.pC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const TT = this.camera.Zc().getInputElement();
              TT && TT.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const TT = this.camera,
            oT = TT.movement.input,
            IT = oT.getEntry("touch", "rotate"),
            iT = oT.getEntry("touch", "translate"),
            zT = TT._calculateHandednessMultiplier(),
            WT = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (IT) {
            const oT = IT.sensitivity ?? 1 / this.touchAngularSensibility;
            TT.cameraRotation.y = this._offsetX * zT * oT, WT && (TT.cameraRotation.x = -this._offsetY * zT * oT)
          }
          if (!WT && iT) {
            const oT = TT._computeLocalCameraSpeed(),
              IT = iT.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              zT = kT.i.sc[0];
            zT.S_(0, 0, oT * this._offsetY * IT), kT.b.RotationYawPitchRollToRef(TT.rotation.y, TT.rotation.x, 0, TT._cameraRotationMatrix), kT.m.TransformCoordinatesToRef(zT, TT._cameraRotationMatrix, zT), TT.cameraDirection.addInPlace(zT)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchAngularSensibility" in TT,
            get: TT => TT.touchAngularSensibility,
            set: (TT, oT) => {
              TT.touchAngularSensibility = oT
            }
          },
          metadata: kT
        }, WT, XT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchMoveSensibility" in TT,
            get: TT => TT.touchMoveSensibility,
            set: (TT, oT) => {
              TT.touchMoveSensibility = oT
            }
          },
          metadata: kT
        }, BT, ST), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    XT.b.FreeCameraTouchInput = AT;
    var gT, hT, wT, mT = IT(38643);
    class eT extends XT.e {
      constructor(TT) {
        super(TT), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new ST), this
      }
      addMouse() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new xT(TT), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new rT, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new AT), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(gT = eT.prototype).addDeviceOrientation ?? (gT.addDeviceOrientation = (0, mT.i)("FreeCameraInputsManager", "addDeviceOrientation")), (hT = eT.prototype).addVirtualJoystick ?? (hT.addVirtualJoystick = (0, mT.i)("FreeCameraInputsManager", "addVirtualJoystick")), (wT = eT.prototype).addGamepad ?? (wT.addGamepad = (0, mT.i)("FreeCameraInputsManager", "addGamepad"));
    var RT = IT(38659),
      uT = IT(36166);
    let vT = (() => {
        var TT;
        let oT, IT, XT, BT, ST = WT.d,
          DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [],
          rT = [],
          AT = [];
        return TT = class extends ST {
          get angularSensibility() {
            const TT = this.inputs.attached.mouse;
            return TT ? TT.angularSensibility : 0
          }
          set angularSensibility(TT) {
            const oT = this.inputs.attached.mouse;
            oT && (oT.angularSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysUp = TT)
          }
          get keysUpward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUpward : []
          }
          set keysUpward(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysUpward = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysDown = TT)
          }
          get keysDownward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDownward : []
          }
          set keysDownward(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysDownward = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRight = TT)
          }
          get keysRotateLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateLeft : []
          }
          set keysRotateLeft(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRotateLeft = TT)
          }
          get keysRotateRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateRight : []
          }
          set keysRotateRight(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRotateRight = TT)
          }
          get keysRotateUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateUp : []
          }
          set keysRotateUp(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRotateUp = TT)
          }
          get keysRotateDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateDown : []
          }
          set keysRotateDown(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRotateDown = TT)
          }
          constructor(TT, oT, IT) {
            var zT;
            super(TT, oT, IT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), zT = this, this.ellipsoid = (0, iT.j)(this, DT, new kT.m(.5, 1, .5)), this.ellipsoidOffset = ((0, iT.j)(this, LT), (0, iT.j)(this, xT, new kT.m(0, 0, 0))), this.checkCollisions = ((0, iT.j)(this, cT), (0, iT.j)(this, KT, !1)), this.applyGravity = ((0, iT.j)(this, MT), (0, iT.j)(this, rT, !1)), this.inputs = (0, iT.j)(this, AT), this._needMoveForGravity = !1, this._oldPosition = kT.m.Zero(), this._diffPosition = kT.m.Zero(), this._newPosition = kT.m.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(TT, oT) {
              let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              zT._newPosition.SIT(oT), zT._newPosition.subtractToRef(zT._oldPosition, zT._diffPosition), zT._diffPosition.length() > RT.b.CollisionsEpsilon && (zT.position.addToRef(zT._diffPosition, zT._deferredPositionUpdate), zT._deferOnly ? zT._deferredUpdated = !0 : zT.position.SIT(zT._deferredPositionUpdate), zT.cL && IT && zT.cL(IT))
            }, this.inputs = new eT(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(TT, oT) {
            oT = FT.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(oT)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new kT.m(0, 0, 0), this.cameraRotation = new kT.j(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(TT) {
            this._collisionMask = isNaN(TT) ? -1 : TT
          }
          _collideWithWorld(TT) {
            let oT;
            oT = this.parent ? kT.m.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, oT.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const IT = this.pC().collisionCoordinator;
            this._collider || (this._collider = IT.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let iT = TT;
            this.applyGravity && (iT = TT.add(this.pC().gravity)), IT.getNewPosition(this._oldPosition, iT, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = kT.m.Zero(), this._transformedDirection = kT.m.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(TT) {
            this._needMoveForGravity = TT
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.pC().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ST[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.M)()], IT = [(0, zT.M)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoid" in TT,
              get: TT => TT.ellipsoid,
              set: (TT, oT) => {
                TT.ellipsoid = oT
              }
            },
            metadata: kT
          }, DT, LT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoidOffset" in TT,
              get: TT => TT.ellipsoidOffset,
              set: (TT, oT) => {
                TT.ellipsoidOffset = oT
              }
            },
            metadata: kT
          }, xT, cT), (0, iT.h)(null, null, XT, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: TT => "checkCollisions" in TT,
              get: TT => TT.checkCollisions,
              set: (TT, oT) => {
                TT.checkCollisions = oT
              }
            },
            metadata: kT
          }, KT, MT), (0, iT.h)(null, null, BT, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyGravity" in TT,
              get: TT => TT.applyGravity,
              set: (TT, oT) => {
                TT.applyGravity = oT
              }
            },
            metadata: kT
          }, rT, AT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      ET = !1;
    ET || (ET = !0, (0, uT.h)("BABYLON.FreeCamera", vT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
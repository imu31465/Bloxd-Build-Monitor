export const id = 262;
export const ids = [262];
export const modules = {
  40316: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => xT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(40323),
      nT = mT(40354),
      HT = mT(40290),
      kT = mT(40201);
    let jT = (() => {
      var TT;
      let UT, mT, gT, nT, jT, lT, LT, pT, BT, ZT, cT, vT = [],
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        JT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [];
      return TT = class {
        constructor() {
          this.keysUp = (0, WT.k)(this, vT, [38]), this.keysUpward = ((0, WT.k)(this, fT), (0, WT.k)(this, qT, [33])), this.keysDown = ((0, WT.k)(this, iT), (0, WT.k)(this, bT, [40])), this.keysDownward = ((0, WT.k)(this, OT), (0, WT.k)(this, eT, [34])), this.keysLeft = ((0, WT.k)(this, YT), (0, WT.k)(this, JT, [37])), this.keysRight = ((0, WT.k)(this, xT), (0, WT.k)(this, dT, [39])), this.rotationSpeed = ((0, WT.k)(this, wT), (0, WT.k)(this, tT, .5)), this.keysRotateLeft = ((0, WT.k)(this, aT), (0, WT.k)(this, yT, [])), this.keysRotateRight = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, [])), this.keysRotateUp = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, [])), this.keysRotateDown = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, [])), this._keys = ((0, WT.k)(this, VT), new Array)
        }
        attachControl(TT) {
          TT = kT.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.KF(), this._engine = this._scene.eB(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((UT => {
            const mT = UT.event;
            if (!mT.metaKey)
              if (UT.type === HT.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(mT.keyCode) || -1 !== this.keysDown.indexOf(mT.keyCode) || -1 !== this.keysLeft.indexOf(mT.keyCode) || -1 !== this.keysRight.indexOf(mT.keyCode) || -1 !== this.keysUpward.indexOf(mT.keyCode) || -1 !== this.keysDownward.indexOf(mT.keyCode) || -1 !== this.keysRotateLeft.indexOf(mT.keyCode) || -1 !== this.keysRotateRight.indexOf(mT.keyCode) || -1 !== this.keysRotateUp.indexOf(mT.keyCode) || -1 !== this.keysRotateDown.indexOf(mT.keyCode)) {
                  -1 === this._keys.indexOf(mT.keyCode) && this._keys.push(mT.keyCode), TT || mT.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(mT.keyCode) || -1 !== this.keysDown.indexOf(mT.keyCode) || -1 !== this.keysLeft.indexOf(mT.keyCode) || -1 !== this.keysRight.indexOf(mT.keyCode) || -1 !== this.keysUpward.indexOf(mT.keyCode) || -1 !== this.keysDownward.indexOf(mT.keyCode) || -1 !== this.keysRotateLeft.indexOf(mT.keyCode) || -1 !== this.keysRotateRight.indexOf(mT.keyCode) || -1 !== this.keysRotateUp.indexOf(mT.keyCode) || -1 !== this.keysRotateDown.indexOf(mT.keyCode)) {
              const UT = this._keys.indexOf(mT.keyCode);
              UT >= 0 && this._keys.splice(UT, 1), TT || mT.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              UT = TT.movement.input,
              mT = UT.getEntry("keyboard", "translate"),
              WT = UT.getEntry("keyboard", "rotate"),
              zT = WT?.sensitivity ?? 1,
              gT = TT._localDirection.J9(0, 0, 0);
            for (let MT = 0; MT < this._keys.length; MT++) {
              const UT = this._keys[MT]; - 1 !== this.keysLeft.indexOf(UT) ? gT.x -= 1 : -1 !== this.keysUp.indexOf(UT) ? gT.z += 1 : -1 !== this.keysRight.indexOf(UT) ? gT.x += 1 : -1 !== this.keysDown.indexOf(UT) ? gT.z -= 1 : -1 !== this.keysUpward.indexOf(UT) ? gT.y += 1 : -1 !== this.keysDownward.indexOf(UT) ? gT.y -= 1 : -1 !== this.keysRotateLeft.indexOf(UT) ? WT && (TT.cameraRotation.y -= this._getLocalRotation() * zT) : -1 !== this.keysRotateRight.indexOf(UT) ? WT && (TT.cameraRotation.y += this._getLocalRotation() * zT) : -1 !== this.keysRotateUp.indexOf(UT) ? WT && (TT.cameraRotation.x -= this._getLocalRotation() * zT) : -1 !== this.keysRotateDown.indexOf(UT) && WT && (TT.cameraRotation.x += this._getLocalRotation() * zT)
            }
            if (mT && (0 !== gT.x || 0 !== gT.y || 0 !== gT.z)) {
              const UT = TT._computeLocalCameraSpeed() * (mT.sensitivity ?? 1);
              gT.normalize().scaleInPlace(UT), TT.KF().useRightHandedSystem && (gT.z *= -1), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), MT.p.TransformNormalToRef(gT, TT._cameraTransformMatrix, TT._transformedDirection), TT.cameraDirection.addInPlace(TT._transformedDirection)
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
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], gT = [(0, zT.L)()], nT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], cT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, UT) => {
              TT.keysUp = UT
            }
          },
          metadata: MT
        }, vT, fT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUpward" in TT,
            get: TT => TT.keysUpward,
            set: (TT, UT) => {
              TT.keysUpward = UT
            }
          },
          metadata: MT
        }, qT, iT), (0, WT.h)(null, null, gT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, UT) => {
              TT.keysDown = UT
            }
          },
          metadata: MT
        }, bT, OT), (0, WT.h)(null, null, nT, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDownward" in TT,
            get: TT => TT.keysDownward,
            set: (TT, UT) => {
              TT.keysDownward = UT
            }
          },
          metadata: MT
        }, eT, YT), (0, WT.h)(null, null, jT, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, UT) => {
              TT.keysLeft = UT
            }
          },
          metadata: MT
        }, JT, xT), (0, WT.h)(null, null, lT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, UT) => {
              TT.keysRight = UT
            }
          },
          metadata: MT
        }, dT, wT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "rotationSpeed" in TT,
            get: TT => TT.rotationSpeed,
            set: (TT, UT) => {
              TT.rotationSpeed = UT
            }
          },
          metadata: MT
        }, tT, aT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateLeft" in TT,
            get: TT => TT.keysRotateLeft,
            set: (TT, UT) => {
              TT.keysRotateLeft = UT
            }
          },
          metadata: MT
        }, yT, XT), (0, WT.h)(null, null, BT, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateRight" in TT,
            get: TT => TT.keysRotateRight,
            set: (TT, UT) => {
              TT.keysRotateRight = UT
            }
          },
          metadata: MT
        }, IT, QT), (0, WT.h)(null, null, ZT, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateUp" in TT,
            get: TT => TT.keysRotateUp,
            set: (TT, UT) => {
              TT.keysRotateUp = UT
            }
          },
          metadata: MT
        }, sT, FT), (0, WT.h)(null, null, cT, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateDown" in TT,
            get: TT => TT.keysRotateDown,
            set: (TT, UT) => {
              TT.keysRotateDown = UT
            }
          },
          metadata: MT
        }, PT, VT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT
    })();
    nT.d.FreeCameraKeyboardMoveInput = jT;
    var lT = mT(37219),
      LT = mT(40288);
    let pT = (() => {
      var TT;
      let UT, mT, MT = [],
        gT = [],
        nT = [],
        HT = [];
      return TT = class {
        _applyPointerRotation(TT, UT) {
          this._pointerConditions.button = this._currentActiveButton;
          const mT = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!mT || "rotate" !== mT.interaction) return;
          const WT = mT.vN ?? mT.sensitivity ?? 1 / this.angularSensibility,
            zT = mT.qN ?? mT.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += TT * WT, this.camera.cameraRotation.x += UT * zT
        }
        constructor() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = TT, this.buttons = (0, WT.k)(this, MT, [0, 1, 2]), this.angularSensibility = ((0, WT.k)(this, gT), (0, WT.k)(this, nT, 2e3)), this._pointerInput = (0, WT.k)(this, HT), this._previousPosition = null, this.onPointerMovedObservable = new lT.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(TT) {
          TT = kT.j.BackCompatCameraNoPreventDefault(arguments);
          const UT = this.camera.eB(),
            mT = UT.getInputElement();
          this._pointerInput || (this._pointerInput = WT => {
            const zT = WT.event,
              MT = "touch" === zT.pointerType;
            if (!this.touchEnabled && MT) return;
            if (WT.type !== LT.d.POINTERMOVE && -1 === this.buttons.indexOf(zT.button)) return;
            const gT = zT.target;
            if (WT.type === LT.d.POINTERDOWN) {
              if (MT && -1 !== this._activePointerId || !MT && -1 !== this._currentActiveButton) return;
              this._activePointerId = zT.pointerId;
              try {
                gT?.setPointerCapture(zT.pointerId)
              } catch (nT) {} - 1 === this._currentActiveButton && (this._currentActiveButton = zT.button), this._previousPosition = {
                x: zT.clientX,
                y: zT.clientY
              }, TT || (zT.preventDefault(), mT && mT.focus()), UT.isPointerLock && this._onMouseMove && this._onMouseMove(WT.event)
            } else if (WT.type === LT.d.POINTERUP) {
              if (MT && this._activePointerId !== zT.pointerId || !MT && this._currentActiveButton !== zT.button) return;
              try {
                gT?.releasePointerCapture(zT.pointerId)
              } catch (nT) {}
              this._currentActiveButton = -1, this._previousPosition = null, TT || zT.preventDefault(), this._activePointerId = -1
            } else if (WT.type === LT.d.POINTERMOVE && (this._activePointerId === zT.pointerId || !MT))
              if (UT.isPointerLock && this._onMouseMove) this._onMouseMove(WT.event);
              else if (this._previousPosition) {
              const UT = this.camera._calculateHandednessMultiplier(),
                mT = (zT.clientX - this._previousPosition.x) * UT,
                WT = (zT.clientY - this._previousPosition.y) * UT;
              this._allowCameraRotation && this._applyPointerRotation(mT, WT), this.onPointerMovedObservable.notifyObservers({
                offsetX: mT,
                offsetY: WT
              }), this._previousPosition = {
                x: zT.clientX,
                y: zT.clientY
              }, TT || zT.preventDefault()
            }
          }), this._onMouseMove = mT => {
            if (!UT.isPointerLock) return;
            const WT = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(mT.movementX * WT, mT.movementY * WT), this._previousPosition = null, TT || mT.preventDefault()
          }, this._observer = this.camera.KF()._inputManager._addCameraPointerObserver(this._pointerInput, LT.d.POINTERDOWN | LT.d.POINTERUP | LT.d.POINTERMOVE), mT && (this._contextMenuBind = TT => this.onContextMenu(TT), mT.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(TT) {
          TT.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.KF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const TT = this.camera.eB().getInputElement();
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
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: TT => "buttons" in TT,
            get: TT => TT.buttons,
            set: (TT, UT) => {
              TT.buttons = UT
            }
          },
          metadata: kT
        }, MT, gT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSensibility" in TT,
            get: TT => TT.angularSensibility,
            set: (TT, UT) => {
              TT.angularSensibility = UT
            }
          },
          metadata: kT
        }, nT, HT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    nT.d.FreeCameraMouseInput = pT;
    var BT = mT(40297);
    let ZT = (() => {
      var TT;
      let UT, mT, MT, gT = [],
        nT = [],
        HT = [],
        jT = [],
        pT = [],
        ZT = [];
      return TT = class {
        constructor() {
          this.wheelPrecisionX = (0, WT.k)(this, gT, 3), this.wheelPrecisionY = ((0, WT.k)(this, nT), (0, WT.k)(this, HT, 3)), this.wheelPrecisionZ = ((0, WT.k)(this, jT), (0, WT.k)(this, pT, 3)), this.onChangedObservable = ((0, WT.k)(this, ZT), new lT.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(TT) {
          TT = kT.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = UT => {
            if (UT.type !== LT.d.POINTERWHEEL) return;
            const mT = UT.event,
              WT = mT.deltaMode === BT.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * WT * mT.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * WT * mT.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * WT * mT.deltaZ / this._normalize, mT.preventDefault && (TT || mT.preventDefault())
          }, this._observer = this.camera.KF()._inputManager._addCameraPointerObserver(this._wheel, LT.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.KF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionX" in TT,
            get: TT => TT.wheelPrecisionX,
            set: (TT, UT) => {
              TT.wheelPrecisionX = UT
            }
          },
          metadata: kT
        }, gT, nT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionY" in TT,
            get: TT => TT.wheelPrecisionY,
            set: (TT, UT) => {
              TT.wheelPrecisionY = UT
            }
          },
          metadata: kT
        }, HT, jT), (0, WT.h)(null, null, MT, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionZ" in TT,
            get: TT => TT.wheelPrecisionZ,
            set: (TT, UT) => {
              TT.wheelPrecisionZ = UT
            }
          },
          metadata: kT
        }, pT, ZT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    var cT;
    ! function(TT) {
      TT[TT.MoveRelative = 0] = "MoveRelative", TT[TT.RotateRelative = 1] = "RotateRelative", TT[TT.MoveScene = 2] = "MoveScene"
    }(cT || (cT = {}));
    let vT = (() => {
      var TT;
      let UT, mT, gT, nT, HT, kT, jT, lT, LT, pT = ZT,
        BT = [];
      return TT = class extends pT {
        constructor() {
          super(...arguments), this.camera = (0, WT.k)(this, BT), this._moveRelative = MT.p.Zero(), this._rotateRelative = MT.p.Zero(), this._moveScene = MT.p.Zero(), this._wheelXAction = cT.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = cT.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(TT) {
          null === TT && this._wheelXAction !== cT.MoveRelative || (this._wheelXAction = cT.MoveRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== cT.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(TT) {
          null === TT && this._wheelYAction !== cT.MoveRelative || (this._wheelYAction = cT.MoveRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== cT.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(TT) {
          null === TT && this._wheelZAction !== cT.MoveRelative || (this._wheelZAction = cT.MoveRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== cT.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(TT) {
          null === TT && this._wheelXAction !== cT.RotateRelative || (this._wheelXAction = cT.RotateRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== cT.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(TT) {
          null === TT && this._wheelYAction !== cT.RotateRelative || (this._wheelYAction = cT.RotateRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== cT.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(TT) {
          null === TT && this._wheelZAction !== cT.RotateRelative || (this._wheelZAction = cT.RotateRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== cT.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(TT) {
          null === TT && this._wheelXAction !== cT.MoveScene || (this._wheelXAction = cT.MoveScene, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== cT.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(TT) {
          null === TT && this._wheelYAction !== cT.MoveScene || (this._wheelYAction = cT.MoveScene, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== cT.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(TT) {
          null === TT && this._wheelZAction !== cT.MoveScene || (this._wheelZAction = cT.MoveScene, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== cT.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.B3(0), this._rotateRelative.B3(0), this._moveScene.B3(0), this._updateCamera(), this.camera.KF().useRightHandedSystem && (this._moveRelative.z *= -1);
          const TT = MT.e.Zero();
          this.camera.getViewMatrix().invertToRef(TT);
          const UT = MT.p.Zero();
          MT.p.TransformNormalToRef(this._moveRelative, TT, UT), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(UT), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(TT, UT, mT) {
          if (0 === TT) return;
          if (null === UT || null === mT) return;
          let WT = null;
          switch (UT) {
            case cT.MoveRelative:
              WT = this._moveRelative;
              break;
            case cT.RotateRelative:
              WT = this._rotateRelative;
              break;
            case cT.MoveScene:
              WT = this._moveScene
          }
          switch (mT) {
            case 0:
              WT.set(TT, 0, 0);
              break;
            case 1:
              WT.set(0, TT, 0);
              break;
            case 2:
              WT.set(0, 0, TT)
          }
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(pT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], gT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], (0, WT.h)(TT, null, UT, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveRelative" in TT,
            set: (TT, UT) => {
              TT.wheelXMoveRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, mT, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveRelative" in TT,
            set: (TT, UT) => {
              TT.wheelYMoveRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, gT, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveRelative" in TT,
            set: (TT, UT) => {
              TT.wheelZMoveRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, nT, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXRotateRelative" in TT,
            set: (TT, UT) => {
              TT.wheelXRotateRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, HT, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYRotateRelative" in TT,
            set: (TT, UT) => {
              TT.wheelYRotateRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, kT, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZRotateRelative" in TT,
            set: (TT, UT) => {
              TT.wheelZRotateRelative = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, jT, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveScene" in TT,
            set: (TT, UT) => {
              TT.wheelXMoveScene = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, lT, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveScene" in TT,
            set: (TT, UT) => {
              TT.wheelYMoveScene = UT
            }
          },
          metadata: MT
        }, null, BT), (0, WT.h)(TT, null, LT, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveScene" in TT,
            set: (TT, UT) => {
              TT.wheelZMoveScene = UT
            }
          },
          metadata: MT
        }, null, BT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT
    })();
    nT.d.FreeCameraMouseWheelInput = vT;
    let fT = (() => {
      var TT;
      let UT, mT, gT = [],
        nT = [],
        HT = [],
        jT = [];
      return TT = class {
        constructor() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = TT, this.touchAngularSensibility = (0, WT.k)(this, gT, 2e5), this.touchMoveSensibility = ((0, WT.k)(this, nT), (0, WT.k)(this, HT, 250)), this.singleFingerRotate = ((0, WT.k)(this, jT), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = kT.j.IsSafari()
        }
        attachControl(TT) {
          TT = kT.j.BackCompatCameraNoPreventDefault(arguments);
          let UT = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = mT => {
              const WT = mT.event,
                zT = "mouse" === WT.pointerType || this._isSafari && "undefined" === typeof WT.pointerType;
              if (this.allowMouse || !zT)
                if (mT.type === LT.d.POINTERDOWN) {
                  if (TT || WT.preventDefault(), this._pointerPressed.push(WT.pointerId), 1 !== this._pointerPressed.length) return;
                  UT = {
                    x: WT.clientX,
                    y: WT.clientY
                  }
                } else if (mT.type === LT.d.POINTERUP) {
                TT || WT.preventDefault();
                const mT = this._pointerPressed.indexOf(WT.pointerId);
                if (-1 === mT) return;
                if (this._pointerPressed.splice(mT, 1), 0 != mT) return;
                UT = null, this._offsetX = null, this._offsetY = null
              } else if (mT.type === LT.d.POINTERMOVE) {
                if (TT || WT.preventDefault(), !UT) return;
                if (0 != this._pointerPressed.indexOf(WT.pointerId)) return;
                this._offsetX = WT.clientX - UT.x, this._offsetY = -(WT.clientY - UT.y)
              }
            }), this._observer = this.camera.KF()._inputManager._addCameraPointerObserver(this._pointerInput, LT.d.POINTERDOWN | LT.d.POINTERUP | LT.d.POINTERMOVE), this._onLostFocus) {
            const TT = this.camera.eB().getInputElement();
            TT && TT.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.KF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const TT = this.camera.eB().getInputElement();
              TT && TT.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const TT = this.camera,
            UT = TT.movement.input,
            mT = UT.getEntry("touch", "rotate"),
            WT = UT.getEntry("touch", "translate"),
            zT = TT._calculateHandednessMultiplier(),
            gT = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (mT) {
            const UT = mT.sensitivity ?? 1 / this.touchAngularSensibility;
            TT.cameraRotation.y = this._offsetX * zT * UT, gT && (TT.cameraRotation.x = -this._offsetY * zT * UT)
          }
          if (!gT && WT) {
            const UT = TT._computeLocalCameraSpeed(),
              mT = WT.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              zT = MT.l.JB[0];
            zT.J9(0, 0, UT * this._offsetY * mT), MT.e.RotationYawPitchRollToRef(TT.rotation.y, TT.rotation.x, 0, TT._cameraRotationMatrix), MT.p.TransformCoordinatesToRef(zT, TT._cameraRotationMatrix, zT), TT.cameraDirection.addInPlace(zT)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchAngularSensibility" in TT,
            get: TT => TT.touchAngularSensibility,
            set: (TT, UT) => {
              TT.touchAngularSensibility = UT
            }
          },
          metadata: MT
        }, gT, nT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchMoveSensibility" in TT,
            get: TT => TT.touchMoveSensibility,
            set: (TT, UT) => {
              TT.touchMoveSensibility = UT
            }
          },
          metadata: MT
        }, HT, jT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT
    })();
    nT.d.FreeCameraTouchInput = fT;
    var qT, iT, bT, OT = mT(39965);
    class eT extends nT.g {
      constructor(TT) {
        super(TT), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new jT), this
      }
      addMouse() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new pT(TT), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new vT, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new fT), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(qT = eT.prototype).addDeviceOrientation ?? (qT.addDeviceOrientation = (0, OT.j)("FreeCameraInputsManager", "addDeviceOrientation")), (iT = eT.prototype).addVirtualJoystick ?? (iT.addVirtualJoystick = (0, OT.j)("FreeCameraInputsManager", "addVirtualJoystick")), (bT = eT.prototype).addGamepad ?? (bT.addGamepad = (0, OT.j)("FreeCameraInputsManager", "addGamepad"));
    var YT = mT(39982),
      JT = mT(37239);
    let xT = (() => {
        var TT;
        let UT, mT, nT, HT, jT = gT.d,
          lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [],
          vT = [],
          fT = [];
        return TT = class extends jT {
          get angularSensibility() {
            const TT = this.inputs.attached.mouse;
            return TT ? TT.angularSensibility : 0
          }
          set angularSensibility(TT) {
            const UT = this.inputs.attached.mouse;
            UT && (UT.angularSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysUp = TT)
          }
          get keysUpward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUpward : []
          }
          set keysUpward(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysUpward = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysDown = TT)
          }
          get keysDownward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDownward : []
          }
          set keysDownward(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysDownward = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRight = TT)
          }
          get keysRotateLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateLeft : []
          }
          set keysRotateLeft(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRotateLeft = TT)
          }
          get keysRotateRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateRight : []
          }
          set keysRotateRight(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRotateRight = TT)
          }
          get keysRotateUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateUp : []
          }
          set keysRotateUp(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRotateUp = TT)
          }
          get keysRotateDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateDown : []
          }
          set keysRotateDown(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRotateDown = TT)
          }
          constructor(TT, UT, mT) {
            var zT;
            super(TT, UT, mT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), zT = this, this.ellipsoid = (0, WT.k)(this, lT, new MT.p(.5, 1, .5)), this.ellipsoidOffset = ((0, WT.k)(this, LT), (0, WT.k)(this, pT, new MT.p(0, 0, 0))), this.checkCollisions = ((0, WT.k)(this, BT), (0, WT.k)(this, ZT, !1)), this.applyGravity = ((0, WT.k)(this, cT), (0, WT.k)(this, vT, !1)), this.inputs = (0, WT.k)(this, fT), this._needMoveForGravity = !1, this._oldPosition = MT.p.Zero(), this._diffPosition = MT.p.Zero(), this._newPosition = MT.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(TT, UT) {
              let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              zT._newPosition.Gw(UT), zT._newPosition.subtractToRef(zT._oldPosition, zT._diffPosition), zT._diffPosition.length() > YT.c.CollisionsEpsilon && (zT.position.addToRef(zT._diffPosition, zT._deferredPositionUpdate), zT._deferOnly ? zT._deferredUpdated = !0 : zT.position.Gw(zT._deferredPositionUpdate), zT.zL && mT && zT.zL(mT))
            }, this.inputs = new eT(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(TT, UT) {
            UT = kT.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(UT)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new MT.p(0, 0, 0), this.cameraRotation = new MT.o(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(TT) {
            this._collisionMask = isNaN(TT) ? -1 : TT
          }
          _collideWithWorld(TT) {
            let UT;
            UT = this.parent ? MT.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, UT.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const mT = this.KF().collisionCoordinator;
            this._collider || (this._collider = mT.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let WT = TT;
            this.applyGravity && (WT = TT.add(this.KF().gravity)), mT.getNewPosition(this._oldPosition, WT, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = MT.p.Zero(), this._transformedDirection = MT.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.KF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(jT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.J)()], mT = [(0, zT.J)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoid" in TT,
              get: TT => TT.ellipsoid,
              set: (TT, UT) => {
                TT.ellipsoid = UT
              }
            },
            metadata: MT
          }, lT, LT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoidOffset" in TT,
              get: TT => TT.ellipsoidOffset,
              set: (TT, UT) => {
                TT.ellipsoidOffset = UT
              }
            },
            metadata: MT
          }, pT, BT), (0, WT.h)(null, null, nT, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: TT => "checkCollisions" in TT,
              get: TT => TT.checkCollisions,
              set: (TT, UT) => {
                TT.checkCollisions = UT
              }
            },
            metadata: MT
          }, ZT, cT), (0, WT.h)(null, null, HT, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyGravity" in TT,
              get: TT => TT.applyGravity,
              set: (TT, UT) => {
                TT.applyGravity = UT
              }
            },
            metadata: MT
          }, vT, fT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      dT = !1;
    dT || (dT = !0, (0, JT.h)("BABYLON.FreeCamera", xT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
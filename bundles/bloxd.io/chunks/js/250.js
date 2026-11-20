export const id = 250;
export const ids = [250];
export const modules = {
  39836: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => mT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(39839),
      yT = cT(39859),
      fT = cT(39814),
      xT = cT(39727);
    let IT = (() => {
      var TT;
      let kT, cT, OT, yT, IT, AT, CT, jT, vT, tT, hT, NT = [],
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        wT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [];
      return TT = class {
        constructor() {
          this.keysUp = (0, lT.h)(this, NT, [38]), this.keysUpward = ((0, lT.h)(this, QT), (0, lT.h)(this, ST, [33])), this.keysDown = ((0, lT.h)(this, DT), (0, lT.h)(this, aT, [40])), this.keysDownward = ((0, lT.h)(this, FT), (0, lT.h)(this, rT, [34])), this.keysLeft = ((0, lT.h)(this, PT), (0, lT.h)(this, wT, [37])), this.keysRight = ((0, lT.h)(this, mT), (0, lT.h)(this, bT, [39])), this.rotationSpeed = ((0, lT.h)(this, zT), (0, lT.h)(this, JT, .5)), this.keysRotateLeft = ((0, lT.h)(this, oT), (0, lT.h)(this, HT, [])), this.keysRotateRight = ((0, lT.h)(this, eT), (0, lT.h)(this, GT, [])), this.keysRotateUp = ((0, lT.h)(this, VT), (0, lT.h)(this, ET, [])), this.keysRotateDown = ((0, lT.h)(this, ZT), (0, lT.h)(this, uT, [])), this._keys = ((0, lT.h)(this, XT), new Array)
        }
        attachControl(TT) {
          TT = xT.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.NJ(), this._engine = this._scene.Dv(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((kT => {
            const cT = kT.event;
            if (!cT.metaKey)
              if (kT.type === fT.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(cT.keyCode) || -1 !== this.keysDown.indexOf(cT.keyCode) || -1 !== this.keysLeft.indexOf(cT.keyCode) || -1 !== this.keysRight.indexOf(cT.keyCode) || -1 !== this.keysUpward.indexOf(cT.keyCode) || -1 !== this.keysDownward.indexOf(cT.keyCode) || -1 !== this.keysRotateLeft.indexOf(cT.keyCode) || -1 !== this.keysRotateRight.indexOf(cT.keyCode) || -1 !== this.keysRotateUp.indexOf(cT.keyCode) || -1 !== this.keysRotateDown.indexOf(cT.keyCode)) {
                  -1 === this._keys.indexOf(cT.keyCode) && this._keys.push(cT.keyCode), TT || cT.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(cT.keyCode) || -1 !== this.keysDown.indexOf(cT.keyCode) || -1 !== this.keysLeft.indexOf(cT.keyCode) || -1 !== this.keysRight.indexOf(cT.keyCode) || -1 !== this.keysUpward.indexOf(cT.keyCode) || -1 !== this.keysDownward.indexOf(cT.keyCode) || -1 !== this.keysRotateLeft.indexOf(cT.keyCode) || -1 !== this.keysRotateRight.indexOf(cT.keyCode) || -1 !== this.keysRotateUp.indexOf(cT.keyCode) || -1 !== this.keysRotateDown.indexOf(cT.keyCode)) {
              const kT = this._keys.indexOf(cT.keyCode);
              kT >= 0 && this._keys.splice(kT, 1), TT || cT.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              kT = TT.movement.input,
              cT = kT.getEntry("keyboard", "translate"),
              lT = kT.getEntry("keyboard", "rotate"),
              MT = lT?.sensitivity ?? 1,
              OT = TT._localDirection.I5(0, 0, 0);
            for (let KT = 0; KT < this._keys.length; KT++) {
              const kT = this._keys[KT]; - 1 !== this.keysLeft.indexOf(kT) ? OT.x -= 1 : -1 !== this.keysUp.indexOf(kT) ? OT.z += 1 : -1 !== this.keysRight.indexOf(kT) ? OT.x += 1 : -1 !== this.keysDown.indexOf(kT) ? OT.z -= 1 : -1 !== this.keysUpward.indexOf(kT) ? OT.y += 1 : -1 !== this.keysDownward.indexOf(kT) ? OT.y -= 1 : -1 !== this.keysRotateLeft.indexOf(kT) ? lT && (TT.cameraRotation.y -= this._getLocalRotation() * MT) : -1 !== this.keysRotateRight.indexOf(kT) ? lT && (TT.cameraRotation.y += this._getLocalRotation() * MT) : -1 !== this.keysRotateUp.indexOf(kT) ? lT && (TT.cameraRotation.x -= this._getLocalRotation() * MT) : -1 !== this.keysRotateDown.indexOf(kT) && lT && (TT.cameraRotation.x += this._getLocalRotation() * MT)
            }
            if (cT && (0 !== OT.x || 0 !== OT.y || 0 !== OT.z)) {
              const kT = TT._computeLocalCameraSpeed() * (cT.sensitivity ?? 1);
              OT.normalize().scaleInPlace(kT), TT.NJ().useRightHandedSystem && (OT.z *= -1), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), KT.m.TransformNormalToRef(OT, TT._cameraTransformMatrix, TT._transformedDirection), TT.cameraDirection.addInPlace(TT._transformedDirection)
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
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], OT = [(0, MT.J)()], yT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], hT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, kT) => {
              TT.keysUp = kT
            }
          },
          metadata: KT
        }, NT, QT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUpward" in TT,
            get: TT => TT.keysUpward,
            set: (TT, kT) => {
              TT.keysUpward = kT
            }
          },
          metadata: KT
        }, ST, DT), (0, lT.e)(null, null, OT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, kT) => {
              TT.keysDown = kT
            }
          },
          metadata: KT
        }, aT, FT), (0, lT.e)(null, null, yT, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDownward" in TT,
            get: TT => TT.keysDownward,
            set: (TT, kT) => {
              TT.keysDownward = kT
            }
          },
          metadata: KT
        }, rT, PT), (0, lT.e)(null, null, IT, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, kT) => {
              TT.keysLeft = kT
            }
          },
          metadata: KT
        }, wT, mT), (0, lT.e)(null, null, AT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, kT) => {
              TT.keysRight = kT
            }
          },
          metadata: KT
        }, bT, zT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "rotationSpeed" in TT,
            get: TT => TT.rotationSpeed,
            set: (TT, kT) => {
              TT.rotationSpeed = kT
            }
          },
          metadata: KT
        }, JT, oT), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateLeft" in TT,
            get: TT => TT.keysRotateLeft,
            set: (TT, kT) => {
              TT.keysRotateLeft = kT
            }
          },
          metadata: KT
        }, HT, eT), (0, lT.e)(null, null, vT, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateRight" in TT,
            get: TT => TT.keysRotateRight,
            set: (TT, kT) => {
              TT.keysRotateRight = kT
            }
          },
          metadata: KT
        }, GT, VT), (0, lT.e)(null, null, tT, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateUp" in TT,
            get: TT => TT.keysRotateUp,
            set: (TT, kT) => {
              TT.keysRotateUp = kT
            }
          },
          metadata: KT
        }, ET, ZT), (0, lT.e)(null, null, hT, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRotateDown" in TT,
            get: TT => TT.keysRotateDown,
            set: (TT, kT) => {
              TT.keysRotateDown = kT
            }
          },
          metadata: KT
        }, uT, XT), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT
    })();
    yT.e.FreeCameraKeyboardMoveInput = IT;
    var AT = cT(36932),
      CT = cT(39812);
    let jT = (() => {
      var TT;
      let kT, cT, KT = [],
        OT = [],
        yT = [],
        fT = [];
      return TT = class {
        _applyPointerRotation(TT, kT) {
          this._pointerConditions.button = this._currentActiveButton;
          const cT = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!cT || "rotate" !== cT.interaction) return;
          const lT = cT.EX ?? cT.sensitivity ?? 1 / this.angularSensibility,
            MT = cT.BX ?? cT.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += TT * lT, this.camera.cameraRotation.x += kT * MT
        }
        constructor() {
          let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = TT, this.buttons = (0, lT.h)(this, KT, [0, 1, 2]), this.angularSensibility = ((0, lT.h)(this, OT), (0, lT.h)(this, yT, 2e3)), this._pointerInput = (0, lT.h)(this, fT), this._previousPosition = null, this.onPointerMovedObservable = new AT.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(TT) {
          TT = xT.h.BackCompatCameraNoPreventDefault(arguments);
          const kT = this.camera.Dv(),
            cT = kT.getInputElement();
          this._pointerInput || (this._pointerInput = lT => {
            const MT = lT.event,
              KT = "touch" === MT.pointerType;
            if (!this.touchEnabled && KT) return;
            if (lT.type !== CT.c.POINTERMOVE && -1 === this.buttons.indexOf(MT.button)) return;
            const OT = MT.target;
            if (lT.type === CT.c.POINTERDOWN) {
              if (KT && -1 !== this._activePointerId || !KT && -1 !== this._currentActiveButton) return;
              this._activePointerId = MT.pointerId;
              try {
                OT?.setPointerCapture(MT.pointerId)
              } catch (yT) {} - 1 === this._currentActiveButton && (this._currentActiveButton = MT.button), this._previousPosition = {
                x: MT.clientX,
                y: MT.clientY
              }, TT || (MT.preventDefault(), cT && cT.focus()), kT.isPointerLock && this._onMouseMove && this._onMouseMove(lT.event)
            } else if (lT.type === CT.c.POINTERUP) {
              if (KT && this._activePointerId !== MT.pointerId || !KT && this._currentActiveButton !== MT.button) return;
              try {
                OT?.releasePointerCapture(MT.pointerId)
              } catch (yT) {}
              this._currentActiveButton = -1, this._previousPosition = null, TT || MT.preventDefault(), this._activePointerId = -1
            } else if (lT.type === CT.c.POINTERMOVE && (this._activePointerId === MT.pointerId || !KT))
              if (kT.isPointerLock && this._onMouseMove) this._onMouseMove(lT.event);
              else if (this._previousPosition) {
              const kT = this.camera._calculateHandednessMultiplier(),
                cT = (MT.clientX - this._previousPosition.x) * kT,
                lT = (MT.clientY - this._previousPosition.y) * kT;
              this._allowCameraRotation && this._applyPointerRotation(cT, lT), this.onPointerMovedObservable.notifyObservers({
                offsetX: cT,
                offsetY: lT
              }), this._previousPosition = {
                x: MT.clientX,
                y: MT.clientY
              }, TT || MT.preventDefault()
            }
          }), this._onMouseMove = cT => {
            if (!kT.isPointerLock) return;
            const lT = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(cT.movementX * lT, cT.movementY * lT), this._previousPosition = null, TT || cT.preventDefault()
          }, this._observer = this.camera.NJ()._inputManager._addCameraPointerObserver(this._pointerInput, CT.c.POINTERDOWN | CT.c.POINTERUP | CT.c.POINTERMOVE), cT && (this._contextMenuBind = TT => this.onContextMenu(TT), cT.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(TT) {
          TT.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.NJ()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const TT = this.camera.Dv().getInputElement();
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
        const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: TT => "buttons" in TT,
            get: TT => TT.buttons,
            set: (TT, kT) => {
              TT.buttons = kT
            }
          },
          metadata: xT
        }, KT, OT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSensibility" in TT,
            get: TT => TT.angularSensibility,
            set: (TT, kT) => {
              TT.angularSensibility = kT
            }
          },
          metadata: xT
        }, yT, fT), xT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xT
        })
      })(), TT
    })();
    yT.e.FreeCameraMouseInput = jT;
    var vT = cT(39819);
    let tT = (() => {
      var TT;
      let kT, cT, KT, OT = [],
        yT = [],
        fT = [],
        IT = [],
        jT = [],
        tT = [];
      return TT = class {
        constructor() {
          this.wheelPrecisionX = (0, lT.h)(this, OT, 3), this.wheelPrecisionY = ((0, lT.h)(this, yT), (0, lT.h)(this, fT, 3)), this.wheelPrecisionZ = ((0, lT.h)(this, IT), (0, lT.h)(this, jT, 3)), this.onChangedObservable = ((0, lT.h)(this, tT), new AT.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(TT) {
          TT = xT.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = kT => {
            if (kT.type !== CT.c.POINTERWHEEL) return;
            const cT = kT.event,
              lT = cT.deltaMode === vT.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * lT * cT.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * lT * cT.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * lT * cT.deltaZ / this._normalize, cT.preventDefault && (TT || cT.preventDefault())
          }, this._observer = this.camera.NJ()._inputManager._addCameraPointerObserver(this._wheel, CT.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.NJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionX" in TT,
            get: TT => TT.wheelPrecisionX,
            set: (TT, kT) => {
              TT.wheelPrecisionX = kT
            }
          },
          metadata: xT
        }, OT, yT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionY" in TT,
            get: TT => TT.wheelPrecisionY,
            set: (TT, kT) => {
              TT.wheelPrecisionY = kT
            }
          },
          metadata: xT
        }, fT, IT), (0, lT.e)(null, null, KT, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecisionZ" in TT,
            get: TT => TT.wheelPrecisionZ,
            set: (TT, kT) => {
              TT.wheelPrecisionZ = kT
            }
          },
          metadata: xT
        }, jT, tT), xT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xT
        })
      })(), TT
    })();
    var hT;
    ! function(TT) {
      TT[TT.MoveRelative = 0] = "MoveRelative", TT[TT.RotateRelative = 1] = "RotateRelative", TT[TT.MoveScene = 2] = "MoveScene"
    }(hT || (hT = {}));
    let NT = (() => {
      var TT;
      let kT, cT, OT, yT, fT, xT, IT, AT, CT, jT = tT,
        vT = [];
      return TT = class extends jT {
        constructor() {
          super(...arguments), this.camera = (0, lT.h)(this, vT), this._moveRelative = KT.m.Zero(), this._rotateRelative = KT.m.Zero(), this._moveScene = KT.m.Zero(), this._wheelXAction = hT.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = hT.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(TT) {
          null === TT && this._wheelXAction !== hT.MoveRelative || (this._wheelXAction = hT.MoveRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== hT.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(TT) {
          null === TT && this._wheelYAction !== hT.MoveRelative || (this._wheelYAction = hT.MoveRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== hT.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(TT) {
          null === TT && this._wheelZAction !== hT.MoveRelative || (this._wheelZAction = hT.MoveRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== hT.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(TT) {
          null === TT && this._wheelXAction !== hT.RotateRelative || (this._wheelXAction = hT.RotateRelative, this._wheelXActionCoordinate = TT)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== hT.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(TT) {
          null === TT && this._wheelYAction !== hT.RotateRelative || (this._wheelYAction = hT.RotateRelative, this._wheelYActionCoordinate = TT)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== hT.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(TT) {
          null === TT && this._wheelZAction !== hT.RotateRelative || (this._wheelZAction = hT.RotateRelative, this._wheelZActionCoordinate = TT)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== hT.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(TT) {
          null === TT && this._wheelXAction !== hT.MoveScene || (this._wheelXAction = hT.MoveScene, this._wheelXActionCoordinate = TT)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== hT.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(TT) {
          null === TT && this._wheelYAction !== hT.MoveScene || (this._wheelYAction = hT.MoveScene, this._wheelYActionCoordinate = TT)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== hT.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(TT) {
          null === TT && this._wheelZAction !== hT.MoveScene || (this._wheelZAction = hT.MoveScene, this._wheelZActionCoordinate = TT)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== hT.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Xs(0), this._rotateRelative.Xs(0), this._moveScene.Xs(0), this._updateCamera(), this.camera.NJ().useRightHandedSystem && (this._moveRelative.z *= -1);
          const TT = KT.d.Zero();
          this.camera.getViewMatrix().invertToRef(TT);
          const kT = KT.m.Zero();
          KT.m.TransformNormalToRef(this._moveRelative, TT, kT), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(kT), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(TT, kT, cT) {
          if (0 === TT) return;
          if (null === kT || null === cT) return;
          let lT = null;
          switch (kT) {
            case hT.MoveRelative:
              lT = this._moveRelative;
              break;
            case hT.RotateRelative:
              lT = this._rotateRelative;
              break;
            case hT.MoveScene:
              lT = this._moveScene
          }
          switch (cT) {
            case 0:
              lT.set(TT, 0, 0);
              break;
            case 1:
              lT.set(0, TT, 0);
              break;
            case 2:
              lT.set(0, 0, TT)
          }
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(jT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], OT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], (0, lT.e)(TT, null, kT, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveRelative" in TT,
            set: (TT, kT) => {
              TT.wheelXMoveRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, cT, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveRelative" in TT,
            set: (TT, kT) => {
              TT.wheelYMoveRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, OT, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveRelative" in TT,
            set: (TT, kT) => {
              TT.wheelZMoveRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, yT, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXRotateRelative" in TT,
            set: (TT, kT) => {
              TT.wheelXRotateRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, fT, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYRotateRelative" in TT,
            set: (TT, kT) => {
              TT.wheelYRotateRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, xT, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZRotateRelative" in TT,
            set: (TT, kT) => {
              TT.wheelZRotateRelative = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, IT, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelXMoveScene" in TT,
            set: (TT, kT) => {
              TT.wheelXMoveScene = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, AT, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelYMoveScene" in TT,
            set: (TT, kT) => {
              TT.wheelYMoveScene = kT
            }
          },
          metadata: KT
        }, null, vT), (0, lT.e)(TT, null, CT, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelZMoveScene" in TT,
            set: (TT, kT) => {
              TT.wheelZMoveScene = kT
            }
          },
          metadata: KT
        }, null, vT), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT
    })();
    yT.e.FreeCameraMouseWheelInput = NT;
    let QT = (() => {
      var TT;
      let kT, cT, OT = [],
        yT = [],
        fT = [],
        IT = [];
      return TT = class {
        constructor() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = TT, this.touchAngularSensibility = (0, lT.h)(this, OT, 2e5), this.touchMoveSensibility = ((0, lT.h)(this, yT), (0, lT.h)(this, fT, 250)), this.singleFingerRotate = ((0, lT.h)(this, IT), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = xT.h.IsSafari()
        }
        attachControl(TT) {
          TT = xT.h.BackCompatCameraNoPreventDefault(arguments);
          let kT = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = cT => {
              const lT = cT.event,
                MT = "mouse" === lT.pointerType || this._isSafari && "undefined" === typeof lT.pointerType;
              if (this.allowMouse || !MT)
                if (cT.type === CT.c.POINTERDOWN) {
                  if (TT || lT.preventDefault(), this._pointerPressed.push(lT.pointerId), 1 !== this._pointerPressed.length) return;
                  kT = {
                    x: lT.clientX,
                    y: lT.clientY
                  }
                } else if (cT.type === CT.c.POINTERUP) {
                TT || lT.preventDefault();
                const cT = this._pointerPressed.indexOf(lT.pointerId);
                if (-1 === cT) return;
                if (this._pointerPressed.splice(cT, 1), 0 != cT) return;
                kT = null, this._offsetX = null, this._offsetY = null
              } else if (cT.type === CT.c.POINTERMOVE) {
                if (TT || lT.preventDefault(), !kT) return;
                if (0 != this._pointerPressed.indexOf(lT.pointerId)) return;
                this._offsetX = lT.clientX - kT.x, this._offsetY = -(lT.clientY - kT.y)
              }
            }), this._observer = this.camera.NJ()._inputManager._addCameraPointerObserver(this._pointerInput, CT.c.POINTERDOWN | CT.c.POINTERUP | CT.c.POINTERMOVE), this._onLostFocus) {
            const TT = this.camera.Dv().getInputElement();
            TT && TT.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.NJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const TT = this.camera.Dv().getInputElement();
              TT && TT.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const TT = this.camera,
            kT = TT.movement.input,
            cT = kT.getEntry("touch", "rotate"),
            lT = kT.getEntry("touch", "translate"),
            MT = TT._calculateHandednessMultiplier(),
            OT = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (cT) {
            const kT = cT.sensitivity ?? 1 / this.touchAngularSensibility;
            TT.cameraRotation.y = this._offsetX * MT * kT, OT && (TT.cameraRotation.x = -this._offsetY * MT * kT)
          }
          if (!OT && lT) {
            const kT = TT._computeLocalCameraSpeed(),
              cT = lT.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              MT = KT.h.Fv[0];
            MT.I5(0, 0, kT * this._offsetY * cT), KT.d.RotationYawPitchRollToRef(TT.rotation.y, TT.rotation.x, 0, TT._cameraRotationMatrix), KT.m.TransformCoordinatesToRef(MT, TT._cameraRotationMatrix, MT), TT.cameraDirection.addInPlace(MT)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchAngularSensibility" in TT,
            get: TT => TT.touchAngularSensibility,
            set: (TT, kT) => {
              TT.touchAngularSensibility = kT
            }
          },
          metadata: KT
        }, OT, yT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "touchMoveSensibility" in TT,
            get: TT => TT.touchMoveSensibility,
            set: (TT, kT) => {
              TT.touchMoveSensibility = kT
            }
          },
          metadata: KT
        }, fT, IT), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT
    })();
    yT.e.FreeCameraTouchInput = QT;
    var ST, DT, aT, FT = cT(39500);
    class rT extends yT.h {
      constructor(TT) {
        super(TT), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new IT), this
      }
      addMouse() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new jT(TT), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new NT, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new QT), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(ST = rT.prototype).addDeviceOrientation ?? (ST.addDeviceOrientation = (0, FT.f)("FreeCameraInputsManager", "addDeviceOrientation")), (DT = rT.prototype).addVirtualJoystick ?? (DT.addVirtualJoystick = (0, FT.f)("FreeCameraInputsManager", "addVirtualJoystick")), (aT = rT.prototype).addGamepad ?? (aT.addGamepad = (0, FT.f)("FreeCameraInputsManager", "addGamepad"));
    var PT = cT(39516),
      wT = cT(36949);
    let mT = (() => {
        var TT;
        let kT, cT, yT, fT, IT = OT.g,
          AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [],
          NT = [],
          QT = [];
        return TT = class extends IT {
          get angularSensibility() {
            const TT = this.inputs.attached.mouse;
            return TT ? TT.angularSensibility : 0
          }
          set angularSensibility(TT) {
            const kT = this.inputs.attached.mouse;
            kT && (kT.angularSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysUp = TT)
          }
          get keysUpward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUpward : []
          }
          set keysUpward(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysUpward = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysDown = TT)
          }
          get keysDownward() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDownward : []
          }
          set keysDownward(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysDownward = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRight = TT)
          }
          get keysRotateLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateLeft : []
          }
          set keysRotateLeft(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRotateLeft = TT)
          }
          get keysRotateRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateRight : []
          }
          set keysRotateRight(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRotateRight = TT)
          }
          get keysRotateUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateUp : []
          }
          set keysRotateUp(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRotateUp = TT)
          }
          get keysRotateDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRotateDown : []
          }
          set keysRotateDown(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRotateDown = TT)
          }
          constructor(TT, kT, cT) {
            var MT;
            super(TT, kT, cT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), MT = this, this.ellipsoid = (0, lT.h)(this, AT, new KT.m(.5, 1, .5)), this.ellipsoidOffset = ((0, lT.h)(this, CT), (0, lT.h)(this, jT, new KT.m(0, 0, 0))), this.checkCollisions = ((0, lT.h)(this, vT), (0, lT.h)(this, tT, !1)), this.applyGravity = ((0, lT.h)(this, hT), (0, lT.h)(this, NT, !1)), this.inputs = (0, lT.h)(this, QT), this._needMoveForGravity = !1, this._oldPosition = KT.m.Zero(), this._diffPosition = KT.m.Zero(), this._newPosition = KT.m.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(TT, kT) {
              let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              MT._newPosition.UkT(kT), MT._newPosition.subtractToRef(MT._oldPosition, MT._diffPosition), MT._diffPosition.length() > PT.d.CollisionsEpsilon && (MT.position.addToRef(MT._diffPosition, MT._deferredPositionUpdate), MT._deferOnly ? MT._deferredUpdated = !0 : MT.position.UkT(MT._deferredPositionUpdate), MT.yC && cT && MT.yC(cT))
            }, this.inputs = new rT(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(TT, kT) {
            kT = xT.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(kT)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new KT.m(0, 0, 0), this.cameraRotation = new KT.i(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(TT) {
            this._collisionMask = isNaN(TT) ? -1 : TT
          }
          _collideWithWorld(TT) {
            let kT;
            kT = this.parent ? KT.m.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, kT.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const cT = this.NJ().collisionCoordinator;
            this._collider || (this._collider = cT.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let lT = TT;
            this.applyGravity && (lT = TT.add(this.NJ().gravity)), cT.getNewPosition(this._oldPosition, lT, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = KT.m.Zero(), this._transformedDirection = KT.m.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.NJ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(IT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.F)()], cT = [(0, MT.F)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoid" in TT,
              get: TT => TT.ellipsoid,
              set: (TT, kT) => {
                TT.ellipsoid = kT
              }
            },
            metadata: KT
          }, AT, CT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "ellipsoidOffset" in TT,
              get: TT => TT.ellipsoidOffset,
              set: (TT, kT) => {
                TT.ellipsoidOffset = kT
              }
            },
            metadata: KT
          }, jT, vT), (0, lT.e)(null, null, yT, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: TT => "checkCollisions" in TT,
              get: TT => TT.checkCollisions,
              set: (TT, kT) => {
                TT.checkCollisions = kT
              }
            },
            metadata: KT
          }, tT, hT), (0, lT.e)(null, null, fT, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyGravity" in TT,
              get: TT => TT.applyGravity,
              set: (TT, kT) => {
                TT.applyGravity = kT
              }
            },
            metadata: KT
          }, NT, QT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      bT = !1;
    bT || (bT = !0, (0, wT.g)("BABYLON.FreeCamera", mT))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
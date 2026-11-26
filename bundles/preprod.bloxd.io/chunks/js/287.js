export const id = 287;
export const ids = [287];
export const modules = {
  41478: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => kH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(41483),
      tH = LH(41520),
      zH = LH(41464),
      CH = LH(41387);
    let EH = (() => {
      var HH;
      let BH, LH, hH, tH, EH, XH, GH, YH, uH, QH, WH, MH = [],
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        bH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [];
      return HH = class {
        constructor() {
          this.keysUp = (0, AH.k)(this, MH, [38]), this.keysUpward = ((0, AH.k)(this, xH), (0, AH.k)(this, vH, [33])), this.keysDown = ((0, AH.k)(this, PH), (0, AH.k)(this, TH, [40])), this.keysDownward = ((0, AH.k)(this, UH), (0, AH.k)(this, VH, [34])), this.keysLeft = ((0, AH.k)(this, OH), (0, AH.k)(this, bH, [37])), this.keysRight = ((0, AH.k)(this, kH), (0, AH.k)(this, mH, [39])), this.rotationSpeed = ((0, AH.k)(this, oH), (0, AH.k)(this, IH, .5)), this.keysRotateLeft = ((0, AH.k)(this, fH), (0, AH.k)(this, lH, [])), this.keysRotateRight = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, [])), this.keysRotateUp = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, [])), this.keysRotateDown = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, [])), this._keys = ((0, AH.k)(this, RH), new Array)
        }
        attachControl(HH) {
          HH = CH.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.yN(), this._engine = this._scene.Iu(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((BH => {
            const LH = BH.event;
            if (!LH.metaKey)
              if (BH.type === zH.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysUpward.indexOf(LH.keyCode) || -1 !== this.keysDownward.indexOf(LH.keyCode) || -1 !== this.keysRotateLeft.indexOf(LH.keyCode) || -1 !== this.keysRotateRight.indexOf(LH.keyCode) || -1 !== this.keysRotateUp.indexOf(LH.keyCode) || -1 !== this.keysRotateDown.indexOf(LH.keyCode)) {
                  -1 === this._keys.indexOf(LH.keyCode) && this._keys.push(LH.keyCode), HH || LH.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysUpward.indexOf(LH.keyCode) || -1 !== this.keysDownward.indexOf(LH.keyCode) || -1 !== this.keysRotateLeft.indexOf(LH.keyCode) || -1 !== this.keysRotateRight.indexOf(LH.keyCode) || -1 !== this.keysRotateUp.indexOf(LH.keyCode) || -1 !== this.keysRotateDown.indexOf(LH.keyCode)) {
              const BH = this._keys.indexOf(LH.keyCode);
              BH >= 0 && this._keys.splice(BH, 1), HH || LH.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const HH = this.camera,
              BH = HH.movement.input,
              LH = BH.getEntry("keyboard", "translate"),
              AH = BH.getEntry("keyboard", "rotate"),
              rH = AH?.sensitivity ?? 1,
              hH = HH._localDirection.SBH(0, 0, 0);
            for (let SH = 0; SH < this._keys.length; SH++) {
              const BH = this._keys[SH]; - 1 !== this.keysLeft.indexOf(BH) ? hH.x -= 1 : -1 !== this.keysUp.indexOf(BH) ? hH.z += 1 : -1 !== this.keysRight.indexOf(BH) ? hH.x += 1 : -1 !== this.keysDown.indexOf(BH) ? hH.z -= 1 : -1 !== this.keysUpward.indexOf(BH) ? hH.y += 1 : -1 !== this.keysDownward.indexOf(BH) ? hH.y -= 1 : -1 !== this.keysRotateLeft.indexOf(BH) ? AH && (HH.cameraRotation.y -= this._getLocalRotation() * rH) : -1 !== this.keysRotateRight.indexOf(BH) ? AH && (HH.cameraRotation.y += this._getLocalRotation() * rH) : -1 !== this.keysRotateUp.indexOf(BH) ? AH && (HH.cameraRotation.x -= this._getLocalRotation() * rH) : -1 !== this.keysRotateDown.indexOf(BH) && AH && (HH.cameraRotation.x += this._getLocalRotation() * rH)
            }
            if (LH && (0 !== hH.x || 0 !== hH.y || 0 !== hH.z)) {
              const BH = HH._computeLocalCameraSpeed() * (LH.sensitivity ?? 1);
              hH.normalize().scaleInPlace(BH), HH.yN().useRightHandedSystem && (hH.z *= -1), HH.getViewMatrix().invertToRef(HH._cameraTransformMatrix), SH.o.TransformNormalToRef(hH, HH._cameraTransformMatrix, HH._transformedDirection), HH.cameraDirection.addInPlace(HH._transformedDirection)
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
          const HH = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * HH
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], WH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysUp" in HH,
            get: HH => HH.keysUp,
            set: (HH, BH) => {
              HH.keysUp = BH
            }
          },
          metadata: SH
        }, MH, xH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysUpward" in HH,
            get: HH => HH.keysUpward,
            set: (HH, BH) => {
              HH.keysUpward = BH
            }
          },
          metadata: SH
        }, vH, PH), (0, AH.g)(null, null, hH, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysDown" in HH,
            get: HH => HH.keysDown,
            set: (HH, BH) => {
              HH.keysDown = BH
            }
          },
          metadata: SH
        }, TH, UH), (0, AH.g)(null, null, tH, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysDownward" in HH,
            get: HH => HH.keysDownward,
            set: (HH, BH) => {
              HH.keysDownward = BH
            }
          },
          metadata: SH
        }, VH, OH), (0, AH.g)(null, null, EH, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysLeft" in HH,
            get: HH => HH.keysLeft,
            set: (HH, BH) => {
              HH.keysLeft = BH
            }
          },
          metadata: SH
        }, bH, kH), (0, AH.g)(null, null, XH, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRight" in HH,
            get: HH => HH.keysRight,
            set: (HH, BH) => {
              HH.keysRight = BH
            }
          },
          metadata: SH
        }, mH, oH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: HH => "rotationSpeed" in HH,
            get: HH => HH.rotationSpeed,
            set: (HH, BH) => {
              HH.rotationSpeed = BH
            }
          },
          metadata: SH
        }, IH, fH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRotateLeft" in HH,
            get: HH => HH.keysRotateLeft,
            set: (HH, BH) => {
              HH.keysRotateLeft = BH
            }
          },
          metadata: SH
        }, lH, KH), (0, AH.g)(null, null, uH, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRotateRight" in HH,
            get: HH => HH.keysRotateRight,
            set: (HH, BH) => {
              HH.keysRotateRight = BH
            }
          },
          metadata: SH
        }, cH, eH), (0, AH.g)(null, null, QH, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRotateUp" in HH,
            get: HH => HH.keysRotateUp,
            set: (HH, BH) => {
              HH.keysRotateUp = BH
            }
          },
          metadata: SH
        }, qH, gH), (0, AH.g)(null, null, WH, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRotateDown" in HH,
            get: HH => HH.keysRotateDown,
            set: (HH, BH) => {
              HH.keysRotateDown = BH
            }
          },
          metadata: SH
        }, NH, RH), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH
    })();
    tH.c.FreeCameraKeyboardMoveInput = EH;
    var XH = LH(37997),
      GH = LH(41458);
    let YH = (() => {
      var HH;
      let BH, LH, SH = [],
        hH = [],
        tH = [],
        zH = [];
      return HH = class {
        _applyPointerRotation(HH, BH) {
          this._pointerConditions.button = this._currentActiveButton;
          const LH = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!LH || "rotate" !== LH.interaction) return;
          const AH = LH.Fy ?? LH.sensitivity ?? 1 / this.angularSensibility,
            rH = LH.I6 ?? LH.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += HH * AH, this.camera.cameraRotation.x += BH * rH
        }
        constructor() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = HH, this.buttons = (0, AH.k)(this, SH, [0, 1, 2]), this.angularSensibility = ((0, AH.k)(this, hH), (0, AH.k)(this, tH, 2e3)), this._pointerInput = (0, AH.k)(this, zH), this._previousPosition = null, this.onPointerMovedObservable = new XH.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(HH) {
          HH = CH.i.BackCompatCameraNoPreventDefault(arguments);
          const BH = this.camera.Iu(),
            LH = BH.getInputElement();
          this._pointerInput || (this._pointerInput = AH => {
            const rH = AH.event,
              SH = "touch" === rH.pointerType;
            if (!this.touchEnabled && SH) return;
            if (AH.type !== GH.d.POINTERMOVE && -1 === this.buttons.indexOf(rH.button)) return;
            const hH = rH.target;
            if (AH.type === GH.d.POINTERDOWN) {
              if (SH && -1 !== this._activePointerId || !SH && -1 !== this._currentActiveButton) return;
              this._activePointerId = rH.pointerId;
              try {
                hH?.setPointerCapture(rH.pointerId)
              } catch (tH) {} - 1 === this._currentActiveButton && (this._currentActiveButton = rH.button), this._previousPosition = {
                x: rH.clientX,
                y: rH.clientY
              }, HH || (rH.preventDefault(), LH && LH.focus()), BH.isPointerLock && this._onMouseMove && this._onMouseMove(AH.event)
            } else if (AH.type === GH.d.POINTERUP) {
              if (SH && this._activePointerId !== rH.pointerId || !SH && this._currentActiveButton !== rH.button) return;
              try {
                hH?.releasePointerCapture(rH.pointerId)
              } catch (tH) {}
              this._currentActiveButton = -1, this._previousPosition = null, HH || rH.preventDefault(), this._activePointerId = -1
            } else if (AH.type === GH.d.POINTERMOVE && (this._activePointerId === rH.pointerId || !SH))
              if (BH.isPointerLock && this._onMouseMove) this._onMouseMove(AH.event);
              else if (this._previousPosition) {
              const BH = this.camera._calculateHandednessMultiplier(),
                LH = (rH.clientX - this._previousPosition.x) * BH,
                AH = (rH.clientY - this._previousPosition.y) * BH;
              this._allowCameraRotation && this._applyPointerRotation(LH, AH), this.onPointerMovedObservable.notifyObservers({
                offsetX: LH,
                offsetY: AH
              }), this._previousPosition = {
                x: rH.clientX,
                y: rH.clientY
              }, HH || rH.preventDefault()
            }
          }), this._onMouseMove = LH => {
            if (!BH.isPointerLock) return;
            const AH = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(LH.movementX * AH, LH.movementY * AH), this._previousPosition = null, HH || LH.preventDefault()
          }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, GH.d.POINTERDOWN | GH.d.POINTERUP | GH.d.POINTERMOVE), LH && (this._contextMenuBind = HH => this.onContextMenu(HH), LH.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(HH) {
          HH.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const HH = this.camera.Iu().getInputElement();
              HH && HH.removeEventListener("contextmenu", this._contextMenuBind)
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
        const CH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: HH => "buttons" in HH,
            get: HH => HH.buttons,
            set: (HH, BH) => {
              HH.buttons = BH
            }
          },
          metadata: CH
        }, SH, hH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: HH => "angularSensibility" in HH,
            get: HH => HH.angularSensibility,
            set: (HH, BH) => {
              HH.angularSensibility = BH
            }
          },
          metadata: CH
        }, tH, zH), CH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CH
        })
      })(), HH
    })();
    tH.c.FreeCameraMouseInput = YH;
    var uH = LH(41466);
    let QH = (() => {
      var HH;
      let BH, LH, SH, hH = [],
        tH = [],
        zH = [],
        EH = [],
        YH = [],
        QH = [];
      return HH = class {
        constructor() {
          this.wheelPrecisionX = (0, AH.k)(this, hH, 3), this.wheelPrecisionY = ((0, AH.k)(this, tH), (0, AH.k)(this, zH, 3)), this.wheelPrecisionZ = ((0, AH.k)(this, EH), (0, AH.k)(this, YH, 3)), this.onChangedObservable = ((0, AH.k)(this, QH), new XH.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(HH) {
          HH = CH.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = BH => {
            if (BH.type !== GH.d.POINTERWHEEL) return;
            const LH = BH.event,
              AH = LH.deltaMode === uH.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * AH * LH.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * AH * LH.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * AH * LH.deltaZ / this._normalize, LH.preventDefault && (HH || LH.preventDefault())
          }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._wheel, GH.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const CH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelPrecisionX" in HH,
            get: HH => HH.wheelPrecisionX,
            set: (HH, BH) => {
              HH.wheelPrecisionX = BH
            }
          },
          metadata: CH
        }, hH, tH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelPrecisionY" in HH,
            get: HH => HH.wheelPrecisionY,
            set: (HH, BH) => {
              HH.wheelPrecisionY = BH
            }
          },
          metadata: CH
        }, zH, EH), (0, AH.g)(null, null, SH, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelPrecisionZ" in HH,
            get: HH => HH.wheelPrecisionZ,
            set: (HH, BH) => {
              HH.wheelPrecisionZ = BH
            }
          },
          metadata: CH
        }, YH, QH), CH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CH
        })
      })(), HH
    })();
    var WH;
    ! function(HH) {
      HH[HH.MoveRelative = 0] = "MoveRelative", HH[HH.RotateRelative = 1] = "RotateRelative", HH[HH.MoveScene = 2] = "MoveScene"
    }(WH || (WH = {}));
    let MH = (() => {
      var HH;
      let BH, LH, hH, tH, zH, CH, EH, XH, GH, YH = QH,
        uH = [];
      return HH = class extends YH {
        constructor() {
          super(...arguments), this.camera = (0, AH.k)(this, uH), this._moveRelative = SH.o.Zero(), this._rotateRelative = SH.o.Zero(), this._moveScene = SH.o.Zero(), this._wheelXAction = WH.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = WH.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(HH) {
          null === HH && this._wheelXAction !== WH.MoveRelative || (this._wheelXAction = WH.MoveRelative, this._wheelXActionCoordinate = HH)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== WH.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(HH) {
          null === HH && this._wheelYAction !== WH.MoveRelative || (this._wheelYAction = WH.MoveRelative, this._wheelYActionCoordinate = HH)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== WH.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(HH) {
          null === HH && this._wheelZAction !== WH.MoveRelative || (this._wheelZAction = WH.MoveRelative, this._wheelZActionCoordinate = HH)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== WH.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(HH) {
          null === HH && this._wheelXAction !== WH.RotateRelative || (this._wheelXAction = WH.RotateRelative, this._wheelXActionCoordinate = HH)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== WH.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(HH) {
          null === HH && this._wheelYAction !== WH.RotateRelative || (this._wheelYAction = WH.RotateRelative, this._wheelYActionCoordinate = HH)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== WH.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(HH) {
          null === HH && this._wheelZAction !== WH.RotateRelative || (this._wheelZAction = WH.RotateRelative, this._wheelZActionCoordinate = HH)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== WH.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(HH) {
          null === HH && this._wheelXAction !== WH.MoveScene || (this._wheelXAction = WH.MoveScene, this._wheelXActionCoordinate = HH)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== WH.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(HH) {
          null === HH && this._wheelYAction !== WH.MoveScene || (this._wheelYAction = WH.MoveScene, this._wheelYActionCoordinate = HH)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== WH.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(HH) {
          null === HH && this._wheelZAction !== WH.MoveScene || (this._wheelZAction = WH.MoveScene, this._wheelZActionCoordinate = HH)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== WH.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.IHH(0), this._rotateRelative.IHH(0), this._moveScene.IHH(0), this._updateCamera(), this.camera.yN().useRightHandedSystem && (this._moveRelative.z *= -1);
          const HH = SH.e.Zero();
          this.camera.getViewMatrix().invertToRef(HH);
          const BH = SH.o.Zero();
          SH.o.TransformNormalToRef(this._moveRelative, HH, BH), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(BH), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(HH, BH, LH) {
          if (0 === HH) return;
          if (null === BH || null === LH) return;
          let AH = null;
          switch (BH) {
            case WH.MoveRelative:
              AH = this._moveRelative;
              break;
            case WH.RotateRelative:
              AH = this._rotateRelative;
              break;
            case WH.MoveScene:
              AH = this._moveScene
          }
          switch (LH) {
            case 0:
              AH.set(HH, 0, 0);
              break;
            case 1:
              AH.set(0, HH, 0);
              break;
            case 2:
              AH.set(0, 0, HH)
          }
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(YH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelXMoveRelative" in HH,
            set: (HH, BH) => {
              HH.wheelXMoveRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, LH, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelYMoveRelative" in HH,
            set: (HH, BH) => {
              HH.wheelYMoveRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, hH, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelZMoveRelative" in HH,
            set: (HH, BH) => {
              HH.wheelZMoveRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, tH, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelXRotateRelative" in HH,
            set: (HH, BH) => {
              HH.wheelXRotateRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, zH, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelYRotateRelative" in HH,
            set: (HH, BH) => {
              HH.wheelYRotateRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, CH, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelZRotateRelative" in HH,
            set: (HH, BH) => {
              HH.wheelZRotateRelative = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, EH, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelXMoveScene" in HH,
            set: (HH, BH) => {
              HH.wheelXMoveScene = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, XH, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelYMoveScene" in HH,
            set: (HH, BH) => {
              HH.wheelYMoveScene = BH
            }
          },
          metadata: SH
        }, null, uH), (0, AH.g)(HH, null, GH, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelZMoveScene" in HH,
            set: (HH, BH) => {
              HH.wheelZMoveScene = BH
            }
          },
          metadata: SH
        }, null, uH), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH
    })();
    tH.c.FreeCameraMouseWheelInput = MH;
    let xH = (() => {
      var HH;
      let BH, LH, hH = [],
        tH = [],
        zH = [],
        EH = [];
      return HH = class {
        constructor() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = HH, this.touchAngularSensibility = (0, AH.k)(this, hH, 2e5), this.touchMoveSensibility = ((0, AH.k)(this, tH), (0, AH.k)(this, zH, 250)), this.singleFingerRotate = ((0, AH.k)(this, EH), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = CH.i.IsSafari()
        }
        attachControl(HH) {
          HH = CH.i.BackCompatCameraNoPreventDefault(arguments);
          let BH = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = LH => {
              const AH = LH.event,
                rH = "mouse" === AH.pointerType || this._isSafari && "undefined" === typeof AH.pointerType;
              if (this.allowMouse || !rH)
                if (LH.type === GH.d.POINTERDOWN) {
                  if (HH || AH.preventDefault(), this._pointerPressed.push(AH.pointerId), 1 !== this._pointerPressed.length) return;
                  BH = {
                    x: AH.clientX,
                    y: AH.clientY
                  }
                } else if (LH.type === GH.d.POINTERUP) {
                HH || AH.preventDefault();
                const LH = this._pointerPressed.indexOf(AH.pointerId);
                if (-1 === LH) return;
                if (this._pointerPressed.splice(LH, 1), 0 != LH) return;
                BH = null, this._offsetX = null, this._offsetY = null
              } else if (LH.type === GH.d.POINTERMOVE) {
                if (HH || AH.preventDefault(), !BH) return;
                if (0 != this._pointerPressed.indexOf(AH.pointerId)) return;
                this._offsetX = AH.clientX - BH.x, this._offsetY = -(AH.clientY - BH.y)
              }
            }), this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, GH.d.POINTERDOWN | GH.d.POINTERUP | GH.d.POINTERMOVE), this._onLostFocus) {
            const HH = this.camera.Iu().getInputElement();
            HH && HH.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const HH = this.camera.Iu().getInputElement();
              HH && HH.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const HH = this.camera,
            BH = HH.movement.input,
            LH = BH.getEntry("touch", "rotate"),
            AH = BH.getEntry("touch", "translate"),
            rH = HH._calculateHandednessMultiplier(),
            hH = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (LH) {
            const BH = LH.sensitivity ?? 1 / this.touchAngularSensibility;
            HH.cameraRotation.y = this._offsetX * rH * BH, hH && (HH.cameraRotation.x = -this._offsetY * rH * BH)
          }
          if (!hH && AH) {
            const BH = HH._computeLocalCameraSpeed(),
              LH = AH.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              rH = SH.l.lu[0];
            rH.SBH(0, 0, BH * this._offsetY * LH), SH.e.RotationYawPitchRollToRef(HH.rotation.y, HH.rotation.x, 0, HH._cameraRotationMatrix), SH.o.TransformCoordinatesToRef(rH, HH._cameraRotationMatrix, rH), HH.cameraDirection.addInPlace(rH)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: HH => "touchAngularSensibility" in HH,
            get: HH => HH.touchAngularSensibility,
            set: (HH, BH) => {
              HH.touchAngularSensibility = BH
            }
          },
          metadata: SH
        }, hH, tH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: HH => "touchMoveSensibility" in HH,
            get: HH => HH.touchMoveSensibility,
            set: (HH, BH) => {
              HH.touchMoveSensibility = BH
            }
          },
          metadata: SH
        }, zH, EH), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH
    })();
    tH.c.FreeCameraTouchInput = xH;
    var vH, PH, TH, UH = LH(41169);
    class VH extends tH.e {
      constructor(HH) {
        super(HH), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new EH), this
      }
      addMouse() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new YH(HH), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new MH, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new xH), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(vH = VH.prototype).addDeviceOrientation ?? (vH.addDeviceOrientation = (0, UH.f)("FreeCameraInputsManager", "addDeviceOrientation")), (PH = VH.prototype).addVirtualJoystick ?? (PH.addVirtualJoystick = (0, UH.f)("FreeCameraInputsManager", "addVirtualJoystick")), (TH = VH.prototype).addGamepad ?? (TH.addGamepad = (0, UH.f)("FreeCameraInputsManager", "addGamepad"));
    var OH = LH(41184),
      bH = LH(38012);
    let kH = (() => {
        var HH;
        let BH, LH, tH, zH, EH = hH.e,
          XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [],
          MH = [],
          xH = [];
        return HH = class extends EH {
          get angularSensibility() {
            const HH = this.inputs.attached.mouse;
            return HH ? HH.angularSensibility : 0
          }
          set angularSensibility(HH) {
            const BH = this.inputs.attached.mouse;
            BH && (BH.angularSensibility = HH)
          }
          get keysUp() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysUp : []
          }
          set keysUp(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysUp = HH)
          }
          get keysUpward() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysUpward : []
          }
          set keysUpward(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysUpward = HH)
          }
          get keysDown() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysDown : []
          }
          set keysDown(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysDown = HH)
          }
          get keysDownward() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysDownward : []
          }
          set keysDownward(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysDownward = HH)
          }
          get keysLeft() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysLeft : []
          }
          set keysLeft(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysLeft = HH)
          }
          get keysRight() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRight : []
          }
          set keysRight(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRight = HH)
          }
          get keysRotateLeft() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRotateLeft : []
          }
          set keysRotateLeft(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRotateLeft = HH)
          }
          get keysRotateRight() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRotateRight : []
          }
          set keysRotateRight(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRotateRight = HH)
          }
          get keysRotateUp() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRotateUp : []
          }
          set keysRotateUp(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRotateUp = HH)
          }
          get keysRotateDown() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRotateDown : []
          }
          set keysRotateDown(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRotateDown = HH)
          }
          constructor(HH, BH, LH) {
            var rH;
            super(HH, BH, LH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), rH = this, this.ellipsoid = (0, AH.k)(this, XH, new SH.o(.5, 1, .5)), this.ellipsoidOffset = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, new SH.o(0, 0, 0))), this.checkCollisions = ((0, AH.k)(this, uH), (0, AH.k)(this, QH, !1)), this.applyGravity = ((0, AH.k)(this, WH), (0, AH.k)(this, MH, !1)), this.inputs = (0, AH.k)(this, xH), this._needMoveForGravity = !1, this._oldPosition = SH.o.Zero(), this._diffPosition = SH.o.Zero(), this._newPosition = SH.o.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(HH, BH) {
              let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              rH._newPosition.Tm(BH), rH._newPosition.subtractToRef(rH._oldPosition, rH._diffPosition), rH._diffPosition.length() > OH.c.CollisionsEpsilon && (rH.position.addToRef(rH._diffPosition, rH._deferredPositionUpdate), rH._deferOnly ? rH._deferredUpdated = !0 : rH.position.Tm(rH._deferredPositionUpdate), rH.fG && LH && rH.fG(LH))
            }, this.inputs = new VH(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(HH, BH) {
            BH = CH.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(BH)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new SH.o(0, 0, 0), this.cameraRotation = new SH.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(HH) {
            this._collisionMask = isNaN(HH) ? -1 : HH
          }
          _collideWithWorld(HH) {
            let BH;
            BH = this.parent ? SH.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, BH.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const LH = this.yN().collisionCoordinator;
            this._collider || (this._collider = LH.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let AH = HH;
            this.applyGravity && (AH = HH.add(this.yN().gravity)), LH.getNewPosition(this._oldPosition, AH, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = SH.o.Zero(), this._transformedDirection = SH.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(HH) {
            this._needMoveForGravity = HH
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.yN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(EH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.F)()], LH = [(0, rH.F)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: HH => "ellipsoid" in HH,
              get: HH => HH.ellipsoid,
              set: (HH, BH) => {
                HH.ellipsoid = BH
              }
            },
            metadata: SH
          }, XH, GH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "ellipsoidOffset" in HH,
              get: HH => HH.ellipsoidOffset,
              set: (HH, BH) => {
                HH.ellipsoidOffset = BH
              }
            },
            metadata: SH
          }, YH, uH), (0, AH.g)(null, null, tH, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: HH => "checkCollisions" in HH,
              get: HH => HH.checkCollisions,
              set: (HH, BH) => {
                HH.checkCollisions = BH
              }
            },
            metadata: SH
          }, QH, WH), (0, AH.g)(null, null, zH, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: HH => "applyGravity" in HH,
              get: HH => HH.applyGravity,
              set: (HH, BH) => {
                HH.applyGravity = BH
              }
            },
            metadata: SH
          }, MH, xH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      mH = !1;
    mH || (mH = !0, (0, bH.f)("BABYLON.FreeCamera", kH))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
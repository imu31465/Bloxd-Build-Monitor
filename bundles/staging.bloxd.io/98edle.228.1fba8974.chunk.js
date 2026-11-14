export const id = 228;
export const ids = [228];
export const modules = {
  37781: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => cR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(37787),
      bR = MW(37817),
      yR = MW(37763),
      NW = MW(37685);
    let eW = (() => {
      var WW;
      let RW, MW, AW, bR, eW, BW, tR, TW, gR, iR, YW, JW = [],
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        rR = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [];
      return WW = class {
        constructor() {
          this.keysUp = (0, wW.i)(this, JW, [38]), this.keysUpward = ((0, wW.i)(this, PW), (0, wW.i)(this, IW, [33])), this.keysDown = ((0, wW.i)(this, oW), (0, wW.i)(this, lW, [40])), this.keysDownward = ((0, wW.i)(this, FW), (0, wW.i)(this, fW, [34])), this.keysLeft = ((0, wW.i)(this, QW), (0, wW.i)(this, rR, [37])), this.keysRight = ((0, wW.i)(this, cR), (0, wW.i)(this, XW, [39])), this.rotationSpeed = ((0, wW.i)(this, jR), (0, wW.i)(this, kR, .5)), this.keysRotateLeft = ((0, wW.i)(this, aR), (0, wW.i)(this, sW, [])), this.keysRotateRight = ((0, wW.i)(this, dW), (0, wW.i)(this, pW, [])), this.keysRotateUp = ((0, wW.i)(this, hW), (0, wW.i)(this, UW, [])), this.keysRotateDown = ((0, wW.i)(this, EW), (0, wW.i)(this, VW, [])), this._keys = ((0, wW.i)(this, mR), new Array)
        }
        attachControl(WW) {
          WW = NW.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.QRW(), this._engine = this._scene.mC(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((RW => {
            const MW = RW.event;
            if (!MW.metaKey)
              if (RW.type === yR.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(MW.keyCode) || -1 !== this.keysDown.indexOf(MW.keyCode) || -1 !== this.keysLeft.indexOf(MW.keyCode) || -1 !== this.keysRight.indexOf(MW.keyCode) || -1 !== this.keysUpward.indexOf(MW.keyCode) || -1 !== this.keysDownward.indexOf(MW.keyCode) || -1 !== this.keysRotateLeft.indexOf(MW.keyCode) || -1 !== this.keysRotateRight.indexOf(MW.keyCode) || -1 !== this.keysRotateUp.indexOf(MW.keyCode) || -1 !== this.keysRotateDown.indexOf(MW.keyCode)) {
                  -1 === this._keys.indexOf(MW.keyCode) && this._keys.push(MW.keyCode), WW || MW.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(MW.keyCode) || -1 !== this.keysDown.indexOf(MW.keyCode) || -1 !== this.keysLeft.indexOf(MW.keyCode) || -1 !== this.keysRight.indexOf(MW.keyCode) || -1 !== this.keysUpward.indexOf(MW.keyCode) || -1 !== this.keysDownward.indexOf(MW.keyCode) || -1 !== this.keysRotateLeft.indexOf(MW.keyCode) || -1 !== this.keysRotateRight.indexOf(MW.keyCode) || -1 !== this.keysRotateUp.indexOf(MW.keyCode) || -1 !== this.keysRotateDown.indexOf(MW.keyCode)) {
              const RW = this._keys.indexOf(MW.keyCode);
              RW >= 0 && this._keys.splice(RW, 1), WW || MW.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const WW = this.camera,
              RW = WW.movement.input,
              MW = RW.getEntry("keyboard", "translate"),
              wW = RW.getEntry("keyboard", "rotate"),
              CW = wW?.sensitivity ?? 1,
              AW = WW._localDirection.nzW(0, 0, 0);
            for (let zR = 0; zR < this._keys.length; zR++) {
              const RW = this._keys[zR]; - 1 !== this.keysLeft.indexOf(RW) ? AW.x -= 1 : -1 !== this.keysUp.indexOf(RW) ? AW.z += 1 : -1 !== this.keysRight.indexOf(RW) ? AW.x += 1 : -1 !== this.keysDown.indexOf(RW) ? AW.z -= 1 : -1 !== this.keysUpward.indexOf(RW) ? AW.y += 1 : -1 !== this.keysDownward.indexOf(RW) ? AW.y -= 1 : -1 !== this.keysRotateLeft.indexOf(RW) ? wW && (WW.cameraRotation.y -= this._getLocalRotation() * CW) : -1 !== this.keysRotateRight.indexOf(RW) ? wW && (WW.cameraRotation.y += this._getLocalRotation() * CW) : -1 !== this.keysRotateUp.indexOf(RW) ? wW && (WW.cameraRotation.x -= this._getLocalRotation() * CW) : -1 !== this.keysRotateDown.indexOf(RW) && wW && (WW.cameraRotation.x += this._getLocalRotation() * CW)
            }
            if (MW && (0 !== AW.x || 0 !== AW.y || 0 !== AW.z)) {
              const RW = WW._computeLocalCameraSpeed() * (MW.sensitivity ?? 1);
              AW.normalize().scaleInPlace(RW), WW.QRW().useRightHandedSystem && (AW.z *= -1), WW.getViewMatrix().invertToRef(WW._cameraTransformMatrix), zR.q.TransformNormalToRef(AW, WW._cameraTransformMatrix, WW._transformedDirection), WW.cameraDirection.addInPlace(WW._transformedDirection)
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
          const WW = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * WW
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], AW = [(0, CW.D)()], bR = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.D)()], tR = [(0, CW.D)()], TW = [(0, CW.D)()], gR = [(0, CW.D)()], iR = [(0, CW.D)()], YW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUp" in WW,
            get: WW => WW.keysUp,
            set: (WW, RW) => {
              WW.keysUp = RW
            }
          },
          metadata: zR
        }, JW, PW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUpward" in WW,
            get: WW => WW.keysUpward,
            set: (WW, RW) => {
              WW.keysUpward = RW
            }
          },
          metadata: zR
        }, IW, oW), (0, wW.e)(null, null, AW, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDown" in WW,
            get: WW => WW.keysDown,
            set: (WW, RW) => {
              WW.keysDown = RW
            }
          },
          metadata: zR
        }, lW, FW), (0, wW.e)(null, null, bR, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDownward" in WW,
            get: WW => WW.keysDownward,
            set: (WW, RW) => {
              WW.keysDownward = RW
            }
          },
          metadata: zR
        }, fW, QW), (0, wW.e)(null, null, eW, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysLeft" in WW,
            get: WW => WW.keysLeft,
            set: (WW, RW) => {
              WW.keysLeft = RW
            }
          },
          metadata: zR
        }, rR, cR), (0, wW.e)(null, null, BW, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRight" in WW,
            get: WW => WW.keysRight,
            set: (WW, RW) => {
              WW.keysRight = RW
            }
          },
          metadata: zR
        }, XW, jR), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: WW => "rotationSpeed" in WW,
            get: WW => WW.rotationSpeed,
            set: (WW, RW) => {
              WW.rotationSpeed = RW
            }
          },
          metadata: zR
        }, kR, aR), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateLeft" in WW,
            get: WW => WW.keysRotateLeft,
            set: (WW, RW) => {
              WW.keysRotateLeft = RW
            }
          },
          metadata: zR
        }, sW, dW), (0, wW.e)(null, null, gR, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateRight" in WW,
            get: WW => WW.keysRotateRight,
            set: (WW, RW) => {
              WW.keysRotateRight = RW
            }
          },
          metadata: zR
        }, pW, hW), (0, wW.e)(null, null, iR, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateUp" in WW,
            get: WW => WW.keysRotateUp,
            set: (WW, RW) => {
              WW.keysRotateUp = RW
            }
          },
          metadata: zR
        }, UW, EW), (0, wW.e)(null, null, YW, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateDown" in WW,
            get: WW => WW.keysRotateDown,
            set: (WW, RW) => {
              WW.keysRotateDown = RW
            }
          },
          metadata: zR
        }, VW, mR), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW
    })();
    bR.b.FreeCameraKeyboardMoveInput = eW;
    var BW = MW(35346),
      tR = MW(37758);
    let TW = (() => {
      var WW;
      let RW, MW, zR = [],
        AW = [],
        bR = [],
        yR = [];
      return WW = class {
        _applyPointerRotation(WW, RW) {
          this._pointerConditions.button = this._currentActiveButton;
          const MW = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!MW || "rotate" !== MW.interaction) return;
          const wW = MW.PwW ?? MW.sensitivity ?? 1 / this.angularSensibility,
            CW = MW.IwW ?? MW.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += WW * wW, this.camera.cameraRotation.x += RW * CW
        }
        constructor() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = WW, this.buttons = (0, wW.i)(this, zR, [0, 1, 2]), this.angularSensibility = ((0, wW.i)(this, AW), (0, wW.i)(this, bR, 2e3)), this._pointerInput = (0, wW.i)(this, yR), this._previousPosition = null, this.onPointerMovedObservable = new BW.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(WW) {
          WW = NW.j.BackCompatCameraNoPreventDefault(arguments);
          const RW = this.camera.mC(),
            MW = RW.getInputElement();
          this._pointerInput || (this._pointerInput = wW => {
            const CW = wW.event,
              zR = "touch" === CW.pointerType;
            if (!this.touchEnabled && zR) return;
            if (wW.type !== tR.c.POINTERMOVE && -1 === this.buttons.indexOf(CW.button)) return;
            const AW = CW.target;
            if (wW.type === tR.c.POINTERDOWN) {
              if (zR && -1 !== this._activePointerId || !zR && -1 !== this._currentActiveButton) return;
              this._activePointerId = CW.pointerId;
              try {
                AW?.setPointerCapture(CW.pointerId)
              } catch (bR) {} - 1 === this._currentActiveButton && (this._currentActiveButton = CW.button), this._previousPosition = {
                x: CW.clientX,
                y: CW.clientY
              }, WW || (CW.preventDefault(), MW && MW.focus()), RW.isPointerLock && this._onMouseMove && this._onMouseMove(wW.event)
            } else if (wW.type === tR.c.POINTERUP) {
              if (zR && this._activePointerId !== CW.pointerId || !zR && this._currentActiveButton !== CW.button) return;
              try {
                AW?.releasePointerCapture(CW.pointerId)
              } catch (bR) {}
              this._currentActiveButton = -1, this._previousPosition = null, WW || CW.preventDefault(), this._activePointerId = -1
            } else if (wW.type === tR.c.POINTERMOVE && (this._activePointerId === CW.pointerId || !zR))
              if (RW.isPointerLock && this._onMouseMove) this._onMouseMove(wW.event);
              else if (this._previousPosition) {
              const RW = this.camera._calculateHandednessMultiplier(),
                MW = (CW.clientX - this._previousPosition.x) * RW,
                wW = (CW.clientY - this._previousPosition.y) * RW;
              this._allowCameraRotation && this._applyPointerRotation(MW, wW), this.onPointerMovedObservable.notifyObservers({
                offsetX: MW,
                offsetY: wW
              }), this._previousPosition = {
                x: CW.clientX,
                y: CW.clientY
              }, WW || CW.preventDefault()
            }
          }), this._onMouseMove = MW => {
            if (!RW.isPointerLock) return;
            const wW = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(MW.movementX * wW, MW.movementY * wW), this._previousPosition = null, WW || MW.preventDefault()
          }, this._observer = this.camera.QRW()._inputManager._addCameraPointerObserver(this._pointerInput, tR.c.POINTERDOWN | tR.c.POINTERUP | tR.c.POINTERMOVE), MW && (this._contextMenuBind = WW => this.onContextMenu(WW), MW.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(WW) {
          WW.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.QRW()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const WW = this.camera.mC().getInputElement();
              WW && WW.removeEventListener("contextmenu", this._contextMenuBind)
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
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: WW => "buttons" in WW,
            get: WW => WW.buttons,
            set: (WW, RW) => {
              WW.buttons = RW
            }
          },
          metadata: NW
        }, zR, AW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "angularSensibility" in WW,
            get: WW => WW.angularSensibility,
            set: (WW, RW) => {
              WW.angularSensibility = RW
            }
          },
          metadata: NW
        }, bR, yR), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })();
    bR.b.FreeCameraMouseInput = TW;
    var gR = MW(37765);
    let iR = (() => {
      var WW;
      let RW, MW, zR, AW = [],
        bR = [],
        yR = [],
        eW = [],
        TW = [],
        iR = [];
      return WW = class {
        constructor() {
          this.wheelPrecisionX = (0, wW.i)(this, AW, 3), this.wheelPrecisionY = ((0, wW.i)(this, bR), (0, wW.i)(this, yR, 3)), this.wheelPrecisionZ = ((0, wW.i)(this, eW), (0, wW.i)(this, TW, 3)), this.onChangedObservable = ((0, wW.i)(this, iR), new BW.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(WW) {
          WW = NW.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = RW => {
            if (RW.type !== tR.c.POINTERWHEEL) return;
            const MW = RW.event,
              wW = MW.deltaMode === gR.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * wW * MW.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * wW * MW.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * wW * MW.deltaZ / this._normalize, MW.preventDefault && (WW || MW.preventDefault())
          }, this._observer = this.camera.QRW()._inputManager._addCameraPointerObserver(this._wheel, tR.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.QRW()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionX" in WW,
            get: WW => WW.wheelPrecisionX,
            set: (WW, RW) => {
              WW.wheelPrecisionX = RW
            }
          },
          metadata: NW
        }, AW, bR), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionY" in WW,
            get: WW => WW.wheelPrecisionY,
            set: (WW, RW) => {
              WW.wheelPrecisionY = RW
            }
          },
          metadata: NW
        }, yR, eW), (0, wW.e)(null, null, zR, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionZ" in WW,
            get: WW => WW.wheelPrecisionZ,
            set: (WW, RW) => {
              WW.wheelPrecisionZ = RW
            }
          },
          metadata: NW
        }, TW, iR), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })();
    var YW;
    ! function(WW) {
      WW[WW.MoveRelative = 0] = "MoveRelative", WW[WW.RotateRelative = 1] = "RotateRelative", WW[WW.MoveScene = 2] = "MoveScene"
    }(YW || (YW = {}));
    let JW = (() => {
      var WW;
      let RW, MW, AW, bR, yR, NW, eW, BW, tR, TW = iR,
        gR = [];
      return WW = class extends TW {
        constructor() {
          super(...arguments), this.camera = (0, wW.i)(this, gR), this._moveRelative = zR.q.Zero(), this._rotateRelative = zR.q.Zero(), this._moveScene = zR.q.Zero(), this._wheelXAction = YW.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = YW.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(WW) {
          null === WW && this._wheelXAction !== YW.MoveRelative || (this._wheelXAction = YW.MoveRelative, this._wheelXActionCoordinate = WW)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== YW.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(WW) {
          null === WW && this._wheelYAction !== YW.MoveRelative || (this._wheelYAction = YW.MoveRelative, this._wheelYActionCoordinate = WW)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== YW.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(WW) {
          null === WW && this._wheelZAction !== YW.MoveRelative || (this._wheelZAction = YW.MoveRelative, this._wheelZActionCoordinate = WW)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== YW.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(WW) {
          null === WW && this._wheelXAction !== YW.RotateRelative || (this._wheelXAction = YW.RotateRelative, this._wheelXActionCoordinate = WW)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== YW.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(WW) {
          null === WW && this._wheelYAction !== YW.RotateRelative || (this._wheelYAction = YW.RotateRelative, this._wheelYActionCoordinate = WW)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== YW.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(WW) {
          null === WW && this._wheelZAction !== YW.RotateRelative || (this._wheelZAction = YW.RotateRelative, this._wheelZActionCoordinate = WW)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== YW.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(WW) {
          null === WW && this._wheelXAction !== YW.MoveScene || (this._wheelXAction = YW.MoveScene, this._wheelXActionCoordinate = WW)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== YW.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(WW) {
          null === WW && this._wheelYAction !== YW.MoveScene || (this._wheelYAction = YW.MoveScene, this._wheelYActionCoordinate = WW)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== YW.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(WW) {
          null === WW && this._wheelZAction !== YW.MoveScene || (this._wheelZAction = YW.MoveScene, this._wheelZActionCoordinate = WW)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== YW.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.YzW(0), this._rotateRelative.YzW(0), this._moveScene.YzW(0), this._updateCamera(), this.camera.QRW().useRightHandedSystem && (this._moveRelative.z *= -1);
          const WW = zR.d.Zero();
          this.camera.getViewMatrix().invertToRef(WW);
          const RW = zR.q.Zero();
          zR.q.TransformNormalToRef(this._moveRelative, WW, RW), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(RW), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(WW, RW, MW) {
          if (0 === WW) return;
          if (null === RW || null === MW) return;
          let wW = null;
          switch (RW) {
            case YW.MoveRelative:
              wW = this._moveRelative;
              break;
            case YW.RotateRelative:
              wW = this._rotateRelative;
              break;
            case YW.MoveScene:
              wW = this._moveScene
          }
          switch (MW) {
            case 0:
              wW.set(WW, 0, 0);
              break;
            case 1:
              wW.set(0, WW, 0);
              break;
            case 2:
              wW.set(0, 0, WW)
          }
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(TW[Symbol.metadata] ?? null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], AW = [(0, CW.D)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.D)()], tR = [(0, CW.D)()], (0, wW.e)(WW, null, RW, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXMoveRelative" in WW,
            set: (WW, RW) => {
              WW.wheelXMoveRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, MW, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYMoveRelative" in WW,
            set: (WW, RW) => {
              WW.wheelYMoveRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, AW, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZMoveRelative" in WW,
            set: (WW, RW) => {
              WW.wheelZMoveRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, bR, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXRotateRelative" in WW,
            set: (WW, RW) => {
              WW.wheelXRotateRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, yR, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYRotateRelative" in WW,
            set: (WW, RW) => {
              WW.wheelYRotateRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, NW, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZRotateRelative" in WW,
            set: (WW, RW) => {
              WW.wheelZRotateRelative = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, eW, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXMoveScene" in WW,
            set: (WW, RW) => {
              WW.wheelXMoveScene = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, BW, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYMoveScene" in WW,
            set: (WW, RW) => {
              WW.wheelYMoveScene = RW
            }
          },
          metadata: zR
        }, null, gR), (0, wW.e)(WW, null, tR, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZMoveScene" in WW,
            set: (WW, RW) => {
              WW.wheelZMoveScene = RW
            }
          },
          metadata: zR
        }, null, gR), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW
    })();
    bR.b.FreeCameraMouseWheelInput = JW;
    let PW = (() => {
      var WW;
      let RW, MW, AW = [],
        bR = [],
        yR = [],
        eW = [];
      return WW = class {
        constructor() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = WW, this.touchAngularSensibility = (0, wW.i)(this, AW, 2e5), this.touchMoveSensibility = ((0, wW.i)(this, bR), (0, wW.i)(this, yR, 250)), this.singleFingerRotate = ((0, wW.i)(this, eW), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = NW.j.IsSafari()
        }
        attachControl(WW) {
          WW = NW.j.BackCompatCameraNoPreventDefault(arguments);
          let RW = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = MW => {
              const wW = MW.event,
                CW = "mouse" === wW.pointerType || this._isSafari && "undefined" === typeof wW.pointerType;
              if (this.allowMouse || !CW)
                if (MW.type === tR.c.POINTERDOWN) {
                  if (WW || wW.preventDefault(), this._pointerPressed.push(wW.pointerId), 1 !== this._pointerPressed.length) return;
                  RW = {
                    x: wW.clientX,
                    y: wW.clientY
                  }
                } else if (MW.type === tR.c.POINTERUP) {
                WW || wW.preventDefault();
                const MW = this._pointerPressed.indexOf(wW.pointerId);
                if (-1 === MW) return;
                if (this._pointerPressed.splice(MW, 1), 0 != MW) return;
                RW = null, this._offsetX = null, this._offsetY = null
              } else if (MW.type === tR.c.POINTERMOVE) {
                if (WW || wW.preventDefault(), !RW) return;
                if (0 != this._pointerPressed.indexOf(wW.pointerId)) return;
                this._offsetX = wW.clientX - RW.x, this._offsetY = -(wW.clientY - RW.y)
              }
            }), this._observer = this.camera.QRW()._inputManager._addCameraPointerObserver(this._pointerInput, tR.c.POINTERDOWN | tR.c.POINTERUP | tR.c.POINTERMOVE), this._onLostFocus) {
            const WW = this.camera.mC().getInputElement();
            WW && WW.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.QRW()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const WW = this.camera.mC().getInputElement();
              WW && WW.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const WW = this.camera,
            RW = WW.movement.input,
            MW = RW.getEntry("touch", "rotate"),
            wW = RW.getEntry("touch", "translate"),
            CW = WW._calculateHandednessMultiplier(),
            AW = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (MW) {
            const RW = MW.sensitivity ?? 1 / this.touchAngularSensibility;
            WW.cameraRotation.y = this._offsetX * CW * RW, AW && (WW.cameraRotation.x = -this._offsetY * CW * RW)
          }
          if (!AW && wW) {
            const RW = WW._computeLocalCameraSpeed(),
              MW = wW.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              CW = zR.k.vC[0];
            CW.nzW(0, 0, RW * this._offsetY * MW), zR.d.RotationYawPitchRollToRef(WW.rotation.y, WW.rotation.x, 0, WW._cameraRotationMatrix), zR.q.TransformCoordinatesToRef(CW, WW._cameraRotationMatrix, CW), WW.cameraDirection.addInPlace(CW)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "touchAngularSensibility" in WW,
            get: WW => WW.touchAngularSensibility,
            set: (WW, RW) => {
              WW.touchAngularSensibility = RW
            }
          },
          metadata: zR
        }, AW, bR), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "touchMoveSensibility" in WW,
            get: WW => WW.touchMoveSensibility,
            set: (WW, RW) => {
              WW.touchMoveSensibility = RW
            }
          },
          metadata: zR
        }, yR, eW), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW
    })();
    bR.b.FreeCameraTouchInput = PW;
    var IW, oW, lW, FW = MW(37470);
    class fW extends bR.d {
      constructor(WW) {
        super(WW), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new eW), this
      }
      addMouse() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new TW(WW), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new JW, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new PW), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(IW = fW.prototype).addDeviceOrientation ?? (IW.addDeviceOrientation = (0, FW.f)("FreeCameraInputsManager", "addDeviceOrientation")), (oW = fW.prototype).addVirtualJoystick ?? (oW.addVirtualJoystick = (0, FW.f)("FreeCameraInputsManager", "addVirtualJoystick")), (lW = fW.prototype).addGamepad ?? (lW.addGamepad = (0, FW.f)("FreeCameraInputsManager", "addGamepad"));
    var QW = MW(37485),
      rR = MW(35361);
    let cR = (() => {
        var WW;
        let RW, MW, bR, yR, eW = AW.f,
          BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [],
          JW = [],
          PW = [];
        return WW = class extends eW {
          get angularSensibility() {
            const WW = this.inputs.attached.mouse;
            return WW ? WW.angularSensibility : 0
          }
          set angularSensibility(WW) {
            const RW = this.inputs.attached.mouse;
            RW && (RW.angularSensibility = WW)
          }
          get keysUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUp : []
          }
          set keysUp(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysUp = WW)
          }
          get keysUpward() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUpward : []
          }
          set keysUpward(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysUpward = WW)
          }
          get keysDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDown : []
          }
          set keysDown(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysDown = WW)
          }
          get keysDownward() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDownward : []
          }
          set keysDownward(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysDownward = WW)
          }
          get keysLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysLeft : []
          }
          set keysLeft(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysLeft = WW)
          }
          get keysRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRight : []
          }
          set keysRight(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRight = WW)
          }
          get keysRotateLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateLeft : []
          }
          set keysRotateLeft(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRotateLeft = WW)
          }
          get keysRotateRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateRight : []
          }
          set keysRotateRight(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRotateRight = WW)
          }
          get keysRotateUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateUp : []
          }
          set keysRotateUp(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRotateUp = WW)
          }
          get keysRotateDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateDown : []
          }
          set keysRotateDown(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRotateDown = WW)
          }
          constructor(WW, RW, MW) {
            var CW;
            super(WW, RW, MW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), CW = this, this.ellipsoid = (0, wW.i)(this, BW, new zR.q(.5, 1, .5)), this.ellipsoidOffset = ((0, wW.i)(this, tR), (0, wW.i)(this, TW, new zR.q(0, 0, 0))), this.checkCollisions = ((0, wW.i)(this, gR), (0, wW.i)(this, iR, !1)), this.applyGravity = ((0, wW.i)(this, YW), (0, wW.i)(this, JW, !1)), this.inputs = (0, wW.i)(this, PW), this._needMoveForGravity = !1, this._oldPosition = zR.q.Zero(), this._diffPosition = zR.q.Zero(), this._newPosition = zR.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(WW, RW) {
              let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              CW._newPosition.hyW(RW), CW._newPosition.subtractToRef(CW._oldPosition, CW._diffPosition), CW._diffPosition.length() > QW.b.CollisionsEpsilon && (CW.position.addToRef(CW._diffPosition, CW._deferredPositionUpdate), CW._deferOnly ? CW._deferredUpdated = !0 : CW.position.hyW(CW._deferredPositionUpdate), CW.YR && MW && CW.YR(MW))
            }, this.inputs = new fW(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(WW, RW) {
            RW = NW.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(RW)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new zR.q(0, 0, 0), this.cameraRotation = new zR.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(WW) {
            this._collisionMask = isNaN(WW) ? -1 : WW
          }
          _collideWithWorld(WW) {
            let RW;
            RW = this.parent ? zR.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, RW.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const MW = this.QRW().collisionCoordinator;
            this._collider || (this._collider = MW.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let wW = WW;
            this.applyGravity && (wW = WW.add(this.QRW().gravity)), MW.getNewPosition(this._oldPosition, wW, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = zR.q.Zero(), this._transformedDirection = zR.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(WW) {
            this._needMoveForGravity = WW
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.QRW().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(eW[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.B)()], MW = [(0, CW.B)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: WW => "ellipsoid" in WW,
              get: WW => WW.ellipsoid,
              set: (WW, RW) => {
                WW.ellipsoid = RW
              }
            },
            metadata: zR
          }, BW, tR), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "ellipsoidOffset" in WW,
              get: WW => WW.ellipsoidOffset,
              set: (WW, RW) => {
                WW.ellipsoidOffset = RW
              }
            },
            metadata: zR
          }, TW, gR), (0, wW.e)(null, null, bR, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: WW => "checkCollisions" in WW,
              get: WW => WW.checkCollisions,
              set: (WW, RW) => {
                WW.checkCollisions = RW
              }
            },
            metadata: zR
          }, iR, YW), (0, wW.e)(null, null, yR, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyGravity" in WW,
              get: WW => WW.applyGravity,
              set: (WW, RW) => {
                WW.applyGravity = RW
              }
            },
            metadata: zR
          }, JW, PW), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      XW = !1;
    XW || (XW = !0, (0, rR.e)("BABYLON.FreeCamera", cR))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
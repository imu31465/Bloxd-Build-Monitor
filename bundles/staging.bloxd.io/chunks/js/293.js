export const id = 293;
export const ids = [293];
export const modules = {
  41715: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => JW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(41719),
      LW = OW(41753),
      cW = OW(41700),
      wW = OW(41620);
    let tW = (() => {
      var WW;
      let iW, OW, PW, LW, tW, ZW, xW, lW, AW, bW, jW, UW = [],
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        TW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [];
      return WW = class {
        constructor() {
          this.keysUp = (0, mW.g)(this, UW, [38]), this.keysUpward = ((0, mW.g)(this, kW), (0, mW.g)(this, sW, [33])), this.keysDown = ((0, mW.g)(this, MW), (0, mW.g)(this, KW, [40])), this.keysDownward = ((0, mW.g)(this, SW), (0, mW.g)(this, YW, [34])), this.keysLeft = ((0, mW.g)(this, yW), (0, mW.g)(this, TW, [37])), this.keysRight = ((0, mW.g)(this, JW), (0, mW.g)(this, hW, [39])), this.rotationSpeed = ((0, mW.g)(this, HW), (0, mW.g)(this, nW, .5)), this.keysRotateLeft = ((0, mW.g)(this, uW), (0, mW.g)(this, oW, [])), this.keysRotateRight = ((0, mW.g)(this, dW), (0, mW.g)(this, eW, [])), this.keysRotateUp = ((0, mW.g)(this, vW), (0, mW.g)(this, gW, [])), this.keysRotateDown = ((0, mW.g)(this, DW), (0, mW.g)(this, VW, [])), this._keys = ((0, mW.g)(this, pW), new Array)
        }
        attachControl(WW) {
          WW = wW.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.bD(), this._engine = this._scene.VA(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((iW => {
            const OW = iW.event;
            if (!OW.metaKey)
              if (iW.type === cW.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(OW.keyCode) || -1 !== this.keysDown.indexOf(OW.keyCode) || -1 !== this.keysLeft.indexOf(OW.keyCode) || -1 !== this.keysRight.indexOf(OW.keyCode) || -1 !== this.keysUpward.indexOf(OW.keyCode) || -1 !== this.keysDownward.indexOf(OW.keyCode) || -1 !== this.keysRotateLeft.indexOf(OW.keyCode) || -1 !== this.keysRotateRight.indexOf(OW.keyCode) || -1 !== this.keysRotateUp.indexOf(OW.keyCode) || -1 !== this.keysRotateDown.indexOf(OW.keyCode)) {
                  -1 === this._keys.indexOf(OW.keyCode) && this._keys.push(OW.keyCode), WW || OW.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(OW.keyCode) || -1 !== this.keysDown.indexOf(OW.keyCode) || -1 !== this.keysLeft.indexOf(OW.keyCode) || -1 !== this.keysRight.indexOf(OW.keyCode) || -1 !== this.keysUpward.indexOf(OW.keyCode) || -1 !== this.keysDownward.indexOf(OW.keyCode) || -1 !== this.keysRotateLeft.indexOf(OW.keyCode) || -1 !== this.keysRotateRight.indexOf(OW.keyCode) || -1 !== this.keysRotateUp.indexOf(OW.keyCode) || -1 !== this.keysRotateDown.indexOf(OW.keyCode)) {
              const iW = this._keys.indexOf(OW.keyCode);
              iW >= 0 && this._keys.splice(iW, 1), WW || OW.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const WW = this.camera,
              iW = WW.movement.input,
              OW = iW.getEntry("keyboard", "translate"),
              mW = iW.getEntry("keyboard", "rotate"),
              EW = mW?.sensitivity ?? 1,
              PW = WW._localDirection.yWW(0, 0, 0);
            for (let NW = 0; NW < this._keys.length; NW++) {
              const iW = this._keys[NW]; - 1 !== this.keysLeft.indexOf(iW) ? PW.x -= 1 : -1 !== this.keysUp.indexOf(iW) ? PW.z += 1 : -1 !== this.keysRight.indexOf(iW) ? PW.x += 1 : -1 !== this.keysDown.indexOf(iW) ? PW.z -= 1 : -1 !== this.keysUpward.indexOf(iW) ? PW.y += 1 : -1 !== this.keysDownward.indexOf(iW) ? PW.y -= 1 : -1 !== this.keysRotateLeft.indexOf(iW) ? mW && (WW.cameraRotation.y -= this._getLocalRotation() * EW) : -1 !== this.keysRotateRight.indexOf(iW) ? mW && (WW.cameraRotation.y += this._getLocalRotation() * EW) : -1 !== this.keysRotateUp.indexOf(iW) ? mW && (WW.cameraRotation.x -= this._getLocalRotation() * EW) : -1 !== this.keysRotateDown.indexOf(iW) && mW && (WW.cameraRotation.x += this._getLocalRotation() * EW)
            }
            if (OW && (0 !== PW.x || 0 !== PW.y || 0 !== PW.z)) {
              const iW = WW._computeLocalCameraSpeed() * (OW.sensitivity ?? 1);
              PW.normalize().scaleInPlace(iW), WW.bD().useRightHandedSystem && (PW.z *= -1), WW.getViewMatrix().invertToRef(WW._cameraTransformMatrix), NW.q.TransformNormalToRef(PW, WW._cameraTransformMatrix, WW._transformedDirection), WW.cameraDirection.addInPlace(WW._transformedDirection)
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
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], PW = [(0, EW.M)()], LW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], jW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUp" in WW,
            get: WW => WW.keysUp,
            set: (WW, iW) => {
              WW.keysUp = iW
            }
          },
          metadata: NW
        }, UW, kW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUpward" in WW,
            get: WW => WW.keysUpward,
            set: (WW, iW) => {
              WW.keysUpward = iW
            }
          },
          metadata: NW
        }, sW, MW), (0, mW.e)(null, null, PW, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDown" in WW,
            get: WW => WW.keysDown,
            set: (WW, iW) => {
              WW.keysDown = iW
            }
          },
          metadata: NW
        }, KW, SW), (0, mW.e)(null, null, LW, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDownward" in WW,
            get: WW => WW.keysDownward,
            set: (WW, iW) => {
              WW.keysDownward = iW
            }
          },
          metadata: NW
        }, YW, yW), (0, mW.e)(null, null, tW, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysLeft" in WW,
            get: WW => WW.keysLeft,
            set: (WW, iW) => {
              WW.keysLeft = iW
            }
          },
          metadata: NW
        }, TW, JW), (0, mW.e)(null, null, ZW, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRight" in WW,
            get: WW => WW.keysRight,
            set: (WW, iW) => {
              WW.keysRight = iW
            }
          },
          metadata: NW
        }, hW, HW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: WW => "rotationSpeed" in WW,
            get: WW => WW.rotationSpeed,
            set: (WW, iW) => {
              WW.rotationSpeed = iW
            }
          },
          metadata: NW
        }, nW, uW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateLeft" in WW,
            get: WW => WW.keysRotateLeft,
            set: (WW, iW) => {
              WW.keysRotateLeft = iW
            }
          },
          metadata: NW
        }, oW, dW), (0, mW.e)(null, null, AW, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateRight" in WW,
            get: WW => WW.keysRotateRight,
            set: (WW, iW) => {
              WW.keysRotateRight = iW
            }
          },
          metadata: NW
        }, eW, vW), (0, mW.e)(null, null, bW, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateUp" in WW,
            get: WW => WW.keysRotateUp,
            set: (WW, iW) => {
              WW.keysRotateUp = iW
            }
          },
          metadata: NW
        }, gW, DW), (0, mW.e)(null, null, jW, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRotateDown" in WW,
            get: WW => WW.keysRotateDown,
            set: (WW, iW) => {
              WW.keysRotateDown = iW
            }
          },
          metadata: NW
        }, VW, pW), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })();
    LW.d.FreeCameraKeyboardMoveInput = tW;
    var ZW = OW(38276),
      xW = OW(41695);
    let lW = (() => {
      var WW;
      let iW, OW, NW = [],
        PW = [],
        LW = [],
        cW = [];
      return WW = class {
        _applyPointerRotation(WW, iW) {
          this._pointerConditions.button = this._currentActiveButton;
          const OW = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!OW || "rotate" !== OW.interaction) return;
          const mW = OW.iG ?? OW.sensitivity ?? 1 / this.angularSensibility,
            EW = OW.mG ?? OW.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += WW * mW, this.camera.cameraRotation.x += iW * EW
        }
        constructor() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = WW, this.buttons = (0, mW.g)(this, NW, [0, 1, 2]), this.angularSensibility = ((0, mW.g)(this, PW), (0, mW.g)(this, LW, 2e3)), this._pointerInput = (0, mW.g)(this, cW), this._previousPosition = null, this.onPointerMovedObservable = new ZW.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(WW) {
          WW = wW.f.BackCompatCameraNoPreventDefault(arguments);
          const iW = this.camera.VA(),
            OW = iW.getInputElement();
          this._pointerInput || (this._pointerInput = mW => {
            const EW = mW.event,
              NW = "touch" === EW.pointerType;
            if (!this.touchEnabled && NW) return;
            if (mW.type !== xW.c.POINTERMOVE && -1 === this.buttons.indexOf(EW.button)) return;
            const PW = EW.target;
            if (mW.type === xW.c.POINTERDOWN) {
              if (NW && -1 !== this._activePointerId || !NW && -1 !== this._currentActiveButton) return;
              this._activePointerId = EW.pointerId;
              try {
                PW?.setPointerCapture(EW.pointerId)
              } catch (LW) {} - 1 === this._currentActiveButton && (this._currentActiveButton = EW.button), this._previousPosition = {
                x: EW.clientX,
                y: EW.clientY
              }, WW || (EW.preventDefault(), OW && OW.focus()), iW.isPointerLock && this._onMouseMove && this._onMouseMove(mW.event)
            } else if (mW.type === xW.c.POINTERUP) {
              if (NW && this._activePointerId !== EW.pointerId || !NW && this._currentActiveButton !== EW.button) return;
              try {
                PW?.releasePointerCapture(EW.pointerId)
              } catch (LW) {}
              this._currentActiveButton = -1, this._previousPosition = null, WW || EW.preventDefault(), this._activePointerId = -1
            } else if (mW.type === xW.c.POINTERMOVE && (this._activePointerId === EW.pointerId || !NW))
              if (iW.isPointerLock && this._onMouseMove) this._onMouseMove(mW.event);
              else if (this._previousPosition) {
              const iW = this.camera._calculateHandednessMultiplier(),
                OW = (EW.clientX - this._previousPosition.x) * iW,
                mW = (EW.clientY - this._previousPosition.y) * iW;
              this._allowCameraRotation && this._applyPointerRotation(OW, mW), this.onPointerMovedObservable.notifyObservers({
                offsetX: OW,
                offsetY: mW
              }), this._previousPosition = {
                x: EW.clientX,
                y: EW.clientY
              }, WW || EW.preventDefault()
            }
          }), this._onMouseMove = OW => {
            if (!iW.isPointerLock) return;
            const mW = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(OW.movementX * mW, OW.movementY * mW), this._previousPosition = null, WW || OW.preventDefault()
          }, this._observer = this.camera.bD()._inputManager._addCameraPointerObserver(this._pointerInput, xW.c.POINTERDOWN | xW.c.POINTERUP | xW.c.POINTERMOVE), OW && (this._contextMenuBind = WW => this.onContextMenu(WW), OW.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(WW) {
          WW.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.bD()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const WW = this.camera.VA().getInputElement();
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
        const wW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: WW => "buttons" in WW,
            get: WW => WW.buttons,
            set: (WW, iW) => {
              WW.buttons = iW
            }
          },
          metadata: wW
        }, NW, PW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "angularSensibility" in WW,
            get: WW => WW.angularSensibility,
            set: (WW, iW) => {
              WW.angularSensibility = iW
            }
          },
          metadata: wW
        }, LW, cW), wW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wW
        })
      })(), WW
    })();
    LW.d.FreeCameraMouseInput = lW;
    var AW = OW(41703);
    let bW = (() => {
      var WW;
      let iW, OW, NW, PW = [],
        LW = [],
        cW = [],
        tW = [],
        lW = [],
        bW = [];
      return WW = class {
        constructor() {
          this.wheelPrecisionX = (0, mW.g)(this, PW, 3), this.wheelPrecisionY = ((0, mW.g)(this, LW), (0, mW.g)(this, cW, 3)), this.wheelPrecisionZ = ((0, mW.g)(this, tW), (0, mW.g)(this, lW, 3)), this.onChangedObservable = ((0, mW.g)(this, bW), new ZW.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(WW) {
          WW = wW.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = iW => {
            if (iW.type !== xW.c.POINTERWHEEL) return;
            const OW = iW.event,
              mW = OW.deltaMode === AW.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * mW * OW.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * mW * OW.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * mW * OW.deltaZ / this._normalize, OW.preventDefault && (WW || OW.preventDefault())
          }, this._observer = this.camera.bD()._inputManager._addCameraPointerObserver(this._wheel, xW.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.bD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const wW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionX" in WW,
            get: WW => WW.wheelPrecisionX,
            set: (WW, iW) => {
              WW.wheelPrecisionX = iW
            }
          },
          metadata: wW
        }, PW, LW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionY" in WW,
            get: WW => WW.wheelPrecisionY,
            set: (WW, iW) => {
              WW.wheelPrecisionY = iW
            }
          },
          metadata: wW
        }, cW, tW), (0, mW.e)(null, null, NW, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecisionZ" in WW,
            get: WW => WW.wheelPrecisionZ,
            set: (WW, iW) => {
              WW.wheelPrecisionZ = iW
            }
          },
          metadata: wW
        }, lW, bW), wW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wW
        })
      })(), WW
    })();
    var jW;
    ! function(WW) {
      WW[WW.MoveRelative = 0] = "MoveRelative", WW[WW.RotateRelative = 1] = "RotateRelative", WW[WW.MoveScene = 2] = "MoveScene"
    }(jW || (jW = {}));
    let UW = (() => {
      var WW;
      let iW, OW, PW, LW, cW, wW, tW, ZW, xW, lW = bW,
        AW = [];
      return WW = class extends lW {
        constructor() {
          super(...arguments), this.camera = (0, mW.g)(this, AW), this._moveRelative = NW.q.Zero(), this._rotateRelative = NW.q.Zero(), this._moveScene = NW.q.Zero(), this._wheelXAction = jW.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = jW.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(WW) {
          null === WW && this._wheelXAction !== jW.MoveRelative || (this._wheelXAction = jW.MoveRelative, this._wheelXActionCoordinate = WW)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== jW.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(WW) {
          null === WW && this._wheelYAction !== jW.MoveRelative || (this._wheelYAction = jW.MoveRelative, this._wheelYActionCoordinate = WW)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== jW.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(WW) {
          null === WW && this._wheelZAction !== jW.MoveRelative || (this._wheelZAction = jW.MoveRelative, this._wheelZActionCoordinate = WW)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== jW.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(WW) {
          null === WW && this._wheelXAction !== jW.RotateRelative || (this._wheelXAction = jW.RotateRelative, this._wheelXActionCoordinate = WW)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== jW.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(WW) {
          null === WW && this._wheelYAction !== jW.RotateRelative || (this._wheelYAction = jW.RotateRelative, this._wheelYActionCoordinate = WW)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== jW.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(WW) {
          null === WW && this._wheelZAction !== jW.RotateRelative || (this._wheelZAction = jW.RotateRelative, this._wheelZActionCoordinate = WW)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== jW.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(WW) {
          null === WW && this._wheelXAction !== jW.MoveScene || (this._wheelXAction = jW.MoveScene, this._wheelXActionCoordinate = WW)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== jW.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(WW) {
          null === WW && this._wheelYAction !== jW.MoveScene || (this._wheelYAction = jW.MoveScene, this._wheelYActionCoordinate = WW)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== jW.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(WW) {
          null === WW && this._wheelZAction !== jW.MoveScene || (this._wheelZAction = jW.MoveScene, this._wheelZActionCoordinate = WW)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== jW.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Z5(0), this._rotateRelative.Z5(0), this._moveScene.Z5(0), this._updateCamera(), this.camera.bD().useRightHandedSystem && (this._moveRelative.z *= -1);
          const WW = NW.d.Zero();
          this.camera.getViewMatrix().invertToRef(WW);
          const iW = NW.q.Zero();
          NW.q.TransformNormalToRef(this._moveRelative, WW, iW), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(iW), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(WW, iW, OW) {
          if (0 === WW) return;
          if (null === iW || null === OW) return;
          let mW = null;
          switch (iW) {
            case jW.MoveRelative:
              mW = this._moveRelative;
              break;
            case jW.RotateRelative:
              mW = this._rotateRelative;
              break;
            case jW.MoveScene:
              mW = this._moveScene
          }
          switch (OW) {
            case 0:
              mW.set(WW, 0, 0);
              break;
            case 1:
              mW.set(0, WW, 0);
              break;
            case 2:
              mW.set(0, 0, WW)
          }
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(lW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], PW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], (0, mW.e)(WW, null, iW, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXMoveRelative" in WW,
            set: (WW, iW) => {
              WW.wheelXMoveRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, OW, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYMoveRelative" in WW,
            set: (WW, iW) => {
              WW.wheelYMoveRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, PW, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZMoveRelative" in WW,
            set: (WW, iW) => {
              WW.wheelZMoveRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, LW, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXRotateRelative" in WW,
            set: (WW, iW) => {
              WW.wheelXRotateRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, cW, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYRotateRelative" in WW,
            set: (WW, iW) => {
              WW.wheelYRotateRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, wW, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZRotateRelative" in WW,
            set: (WW, iW) => {
              WW.wheelZRotateRelative = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, tW, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelXMoveScene" in WW,
            set: (WW, iW) => {
              WW.wheelXMoveScene = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, ZW, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelYMoveScene" in WW,
            set: (WW, iW) => {
              WW.wheelYMoveScene = iW
            }
          },
          metadata: NW
        }, null, AW), (0, mW.e)(WW, null, xW, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelZMoveScene" in WW,
            set: (WW, iW) => {
              WW.wheelZMoveScene = iW
            }
          },
          metadata: NW
        }, null, AW), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })();
    LW.d.FreeCameraMouseWheelInput = UW;
    let kW = (() => {
      var WW;
      let iW, OW, PW = [],
        LW = [],
        cW = [],
        tW = [];
      return WW = class {
        constructor() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = WW, this.touchAngularSensibility = (0, mW.g)(this, PW, 2e5), this.touchMoveSensibility = ((0, mW.g)(this, LW), (0, mW.g)(this, cW, 250)), this.singleFingerRotate = ((0, mW.g)(this, tW), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = wW.f.IsSafari()
        }
        attachControl(WW) {
          WW = wW.f.BackCompatCameraNoPreventDefault(arguments);
          let iW = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = OW => {
              const mW = OW.event,
                EW = "mouse" === mW.pointerType || this._isSafari && "undefined" === typeof mW.pointerType;
              if (this.allowMouse || !EW)
                if (OW.type === xW.c.POINTERDOWN) {
                  if (WW || mW.preventDefault(), this._pointerPressed.push(mW.pointerId), 1 !== this._pointerPressed.length) return;
                  iW = {
                    x: mW.clientX,
                    y: mW.clientY
                  }
                } else if (OW.type === xW.c.POINTERUP) {
                WW || mW.preventDefault();
                const OW = this._pointerPressed.indexOf(mW.pointerId);
                if (-1 === OW) return;
                if (this._pointerPressed.splice(OW, 1), 0 != OW) return;
                iW = null, this._offsetX = null, this._offsetY = null
              } else if (OW.type === xW.c.POINTERMOVE) {
                if (WW || mW.preventDefault(), !iW) return;
                if (0 != this._pointerPressed.indexOf(mW.pointerId)) return;
                this._offsetX = mW.clientX - iW.x, this._offsetY = -(mW.clientY - iW.y)
              }
            }), this._observer = this.camera.bD()._inputManager._addCameraPointerObserver(this._pointerInput, xW.c.POINTERDOWN | xW.c.POINTERUP | xW.c.POINTERMOVE), this._onLostFocus) {
            const WW = this.camera.VA().getInputElement();
            WW && WW.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.bD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const WW = this.camera.VA().getInputElement();
              WW && WW.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const WW = this.camera,
            iW = WW.movement.input,
            OW = iW.getEntry("touch", "rotate"),
            mW = iW.getEntry("touch", "translate"),
            EW = WW._calculateHandednessMultiplier(),
            PW = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (OW) {
            const iW = OW.sensitivity ?? 1 / this.touchAngularSensibility;
            WW.cameraRotation.y = this._offsetX * EW * iW, PW && (WW.cameraRotation.x = -this._offsetY * EW * iW)
          }
          if (!PW && mW) {
            const iW = WW._computeLocalCameraSpeed(),
              OW = mW.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              EW = NW.l.fA[0];
            EW.yWW(0, 0, iW * this._offsetY * OW), NW.d.RotationYawPitchRollToRef(WW.rotation.y, WW.rotation.x, 0, WW._cameraRotationMatrix), NW.q.TransformCoordinatesToRef(EW, WW._cameraRotationMatrix, EW), WW.cameraDirection.addInPlace(EW)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "touchAngularSensibility" in WW,
            get: WW => WW.touchAngularSensibility,
            set: (WW, iW) => {
              WW.touchAngularSensibility = iW
            }
          },
          metadata: NW
        }, PW, LW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "touchMoveSensibility" in WW,
            get: WW => WW.touchMoveSensibility,
            set: (WW, iW) => {
              WW.touchMoveSensibility = iW
            }
          },
          metadata: NW
        }, cW, tW), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })();
    LW.d.FreeCameraTouchInput = kW;
    var sW, MW, KW, SW = OW(41415);
    class YW extends LW.f {
      constructor(WW) {
        super(WW), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new tW), this
      }
      addMouse() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new lW(WW), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new UW, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new kW), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(sW = YW.prototype).addDeviceOrientation ?? (sW.addDeviceOrientation = (0, SW.k)("FreeCameraInputsManager", "addDeviceOrientation")), (MW = YW.prototype).addVirtualJoystick ?? (MW.addVirtualJoystick = (0, SW.k)("FreeCameraInputsManager", "addVirtualJoystick")), (KW = YW.prototype).addGamepad ?? (KW.addGamepad = (0, SW.k)("FreeCameraInputsManager", "addGamepad"));
    var yW = OW(41423),
      TW = OW(38299);
    let JW = (() => {
        var WW;
        let iW, OW, LW, cW, tW = PW.d,
          ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [],
          UW = [],
          kW = [];
        return WW = class extends tW {
          get angularSensibility() {
            const WW = this.inputs.attached.mouse;
            return WW ? WW.angularSensibility : 0
          }
          set angularSensibility(WW) {
            const iW = this.inputs.attached.mouse;
            iW && (iW.angularSensibility = WW)
          }
          get keysUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUp : []
          }
          set keysUp(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysUp = WW)
          }
          get keysUpward() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUpward : []
          }
          set keysUpward(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysUpward = WW)
          }
          get keysDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDown : []
          }
          set keysDown(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysDown = WW)
          }
          get keysDownward() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDownward : []
          }
          set keysDownward(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysDownward = WW)
          }
          get keysLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysLeft : []
          }
          set keysLeft(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysLeft = WW)
          }
          get keysRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRight : []
          }
          set keysRight(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRight = WW)
          }
          get keysRotateLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateLeft : []
          }
          set keysRotateLeft(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRotateLeft = WW)
          }
          get keysRotateRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateRight : []
          }
          set keysRotateRight(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRotateRight = WW)
          }
          get keysRotateUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateUp : []
          }
          set keysRotateUp(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRotateUp = WW)
          }
          get keysRotateDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRotateDown : []
          }
          set keysRotateDown(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRotateDown = WW)
          }
          constructor(WW, iW, OW) {
            var EW;
            super(WW, iW, OW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), EW = this, this.ellipsoid = (0, mW.g)(this, ZW, new NW.q(.5, 1, .5)), this.ellipsoidOffset = ((0, mW.g)(this, xW), (0, mW.g)(this, lW, new NW.q(0, 0, 0))), this.checkCollisions = ((0, mW.g)(this, AW), (0, mW.g)(this, bW, !1)), this.applyGravity = ((0, mW.g)(this, jW), (0, mW.g)(this, UW, !1)), this.inputs = (0, mW.g)(this, kW), this._needMoveForGravity = !1, this._oldPosition = NW.q.Zero(), this._diffPosition = NW.q.Zero(), this._newPosition = NW.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(WW, iW) {
              let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              EW._newPosition.HJ(iW), EW._newPosition.subtractToRef(EW._oldPosition, EW._diffPosition), EW._diffPosition.length() > yW.b.CollisionsEpsilon && (EW.position.addToRef(EW._diffPosition, EW._deferredPositionUpdate), EW._deferOnly ? EW._deferredUpdated = !0 : EW.position.HJ(EW._deferredPositionUpdate), EW.Vx && OW && EW.Vx(OW))
            }, this.inputs = new YW(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(WW, iW) {
            iW = wW.f.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(iW)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new NW.q(0, 0, 0), this.cameraRotation = new NW.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(WW) {
            this._collisionMask = isNaN(WW) ? -1 : WW
          }
          _collideWithWorld(WW) {
            let iW;
            iW = this.parent ? NW.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, iW.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const OW = this.bD().collisionCoordinator;
            this._collider || (this._collider = OW.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let mW = WW;
            this.applyGravity && (mW = WW.add(this.bD().gravity)), OW.getNewPosition(this._oldPosition, mW, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = NW.q.Zero(), this._transformedDirection = NW.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.bD().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(tW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.K)()], OW = [(0, EW.K)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: WW => "ellipsoid" in WW,
              get: WW => WW.ellipsoid,
              set: (WW, iW) => {
                WW.ellipsoid = iW
              }
            },
            metadata: NW
          }, ZW, xW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "ellipsoidOffset" in WW,
              get: WW => WW.ellipsoidOffset,
              set: (WW, iW) => {
                WW.ellipsoidOffset = iW
              }
            },
            metadata: NW
          }, lW, AW), (0, mW.e)(null, null, LW, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: WW => "checkCollisions" in WW,
              get: WW => WW.checkCollisions,
              set: (WW, iW) => {
                WW.checkCollisions = iW
              }
            },
            metadata: NW
          }, bW, jW), (0, mW.e)(null, null, cW, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyGravity" in WW,
              get: WW => WW.applyGravity,
              set: (WW, iW) => {
                WW.applyGravity = iW
              }
            },
            metadata: NW
          }, UW, kW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      hW = !1;
    hW || (hW = !0, (0, TW.h)("BABYLON.FreeCamera", JW))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
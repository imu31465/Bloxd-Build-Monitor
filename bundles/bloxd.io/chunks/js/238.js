export const id = 238;
export const ids = [238];
export const modules = {
  38976: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => SJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(38982),
      AJ = ZJ(39006),
      qJ = ZJ(38946),
      jJ = ZJ(38879);
    let YJ = (() => {
      var JJ;
      let cJ, ZJ, XJ, AJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        yJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [];
      return JJ = class {
        constructor() {
          this.keysUp = (0, FJ.e)(this, xJ, [38]), this.keysUpward = ((0, FJ.e)(this, rJ), (0, FJ.e)(this, vJ, [33])), this.keysDown = ((0, FJ.e)(this, mJ), (0, FJ.e)(this, QJ, [40])), this.keysDownward = ((0, FJ.e)(this, EJ), (0, FJ.e)(this, VJ, [34])), this.keysLeft = ((0, FJ.e)(this, KJ), (0, FJ.e)(this, yJ, [37])), this.keysRight = ((0, FJ.e)(this, SJ), (0, FJ.e)(this, IJ, [39])), this.rotationSpeed = ((0, FJ.e)(this, MJ), (0, FJ.e)(this, bJ, .5)), this.keysRotateLeft = ((0, FJ.e)(this, wJ), (0, FJ.e)(this, WJ, [])), this.keysRotateRight = ((0, FJ.e)(this, gJ), (0, FJ.e)(this, HJ, [])), this.keysRotateUp = ((0, FJ.e)(this, PJ), (0, FJ.e)(this, kJ, [])), this.keysRotateDown = ((0, FJ.e)(this, pJ), (0, FJ.e)(this, dJ, [])), this._keys = ((0, FJ.e)(this, zJ), new Array)
        }
        attachControl(JJ) {
          JJ = jJ.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Qy(), this._engine = this._scene.gn(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((cJ => {
            const ZJ = cJ.event;
            if (!ZJ.metaKey)
              if (cJ.type === qJ.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ZJ.keyCode) || -1 !== this.keysDown.indexOf(ZJ.keyCode) || -1 !== this.keysLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRight.indexOf(ZJ.keyCode) || -1 !== this.keysUpward.indexOf(ZJ.keyCode) || -1 !== this.keysDownward.indexOf(ZJ.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRotateRight.indexOf(ZJ.keyCode) || -1 !== this.keysRotateUp.indexOf(ZJ.keyCode) || -1 !== this.keysRotateDown.indexOf(ZJ.keyCode)) {
                  -1 === this._keys.indexOf(ZJ.keyCode) && this._keys.push(ZJ.keyCode), JJ || ZJ.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ZJ.keyCode) || -1 !== this.keysDown.indexOf(ZJ.keyCode) || -1 !== this.keysLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRight.indexOf(ZJ.keyCode) || -1 !== this.keysUpward.indexOf(ZJ.keyCode) || -1 !== this.keysDownward.indexOf(ZJ.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRotateRight.indexOf(ZJ.keyCode) || -1 !== this.keysRotateUp.indexOf(ZJ.keyCode) || -1 !== this.keysRotateDown.indexOf(ZJ.keyCode)) {
              const cJ = this._keys.indexOf(ZJ.keyCode);
              cJ >= 0 && this._keys.splice(cJ, 1), JJ || ZJ.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const JJ = this.camera,
              cJ = JJ.movement.input,
              ZJ = cJ.getEntry("keyboard", "translate"),
              FJ = cJ.getEntry("keyboard", "rotate"),
              UJ = FJ?.sensitivity ?? 1,
              XJ = JJ._localDirection.K9(0, 0, 0);
            for (let eJ = 0; eJ < this._keys.length; eJ++) {
              const cJ = this._keys[eJ]; - 1 !== this.keysLeft.indexOf(cJ) ? XJ.x -= 1 : -1 !== this.keysUp.indexOf(cJ) ? XJ.z += 1 : -1 !== this.keysRight.indexOf(cJ) ? XJ.x += 1 : -1 !== this.keysDown.indexOf(cJ) ? XJ.z -= 1 : -1 !== this.keysUpward.indexOf(cJ) ? XJ.y += 1 : -1 !== this.keysDownward.indexOf(cJ) ? XJ.y -= 1 : -1 !== this.keysRotateLeft.indexOf(cJ) ? FJ && (JJ.cameraRotation.y -= this._getLocalRotation() * UJ) : -1 !== this.keysRotateRight.indexOf(cJ) ? FJ && (JJ.cameraRotation.y += this._getLocalRotation() * UJ) : -1 !== this.keysRotateUp.indexOf(cJ) ? FJ && (JJ.cameraRotation.x -= this._getLocalRotation() * UJ) : -1 !== this.keysRotateDown.indexOf(cJ) && FJ && (JJ.cameraRotation.x += this._getLocalRotation() * UJ)
            }
            if (ZJ && (0 !== XJ.x || 0 !== XJ.y || 0 !== XJ.z)) {
              const cJ = JJ._computeLocalCameraSpeed() * (ZJ.sensitivity ?? 1);
              XJ.normalize().scaleInPlace(cJ), JJ.Qy().useRightHandedSystem && (XJ.z *= -1), JJ.getViewMatrix().invertToRef(JJ._cameraTransformMatrix), eJ.j.TransformNormalToRef(XJ, JJ._cameraTransformMatrix, JJ._transformedDirection), JJ.cameraDirection.addInPlace(JJ._transformedDirection)
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
          const JJ = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * JJ
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], XJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], sJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], GJ = [(0, UJ.F)()], fJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysUp" in JJ,
            get: JJ => JJ.keysUp,
            set: (JJ, cJ) => {
              JJ.keysUp = cJ
            }
          },
          metadata: eJ
        }, xJ, rJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysUpward" in JJ,
            get: JJ => JJ.keysUpward,
            set: (JJ, cJ) => {
              JJ.keysUpward = cJ
            }
          },
          metadata: eJ
        }, vJ, mJ), (0, FJ.d)(null, null, XJ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysDown" in JJ,
            get: JJ => JJ.keysDown,
            set: (JJ, cJ) => {
              JJ.keysDown = cJ
            }
          },
          metadata: eJ
        }, QJ, EJ), (0, FJ.d)(null, null, AJ, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysDownward" in JJ,
            get: JJ => JJ.keysDownward,
            set: (JJ, cJ) => {
              JJ.keysDownward = cJ
            }
          },
          metadata: eJ
        }, VJ, KJ), (0, FJ.d)(null, null, YJ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysLeft" in JJ,
            get: JJ => JJ.keysLeft,
            set: (JJ, cJ) => {
              JJ.keysLeft = cJ
            }
          },
          metadata: eJ
        }, yJ, SJ), (0, FJ.d)(null, null, hJ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRight" in JJ,
            get: JJ => JJ.keysRight,
            set: (JJ, cJ) => {
              JJ.keysRight = cJ
            }
          },
          metadata: eJ
        }, IJ, MJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: JJ => "rotationSpeed" in JJ,
            get: JJ => JJ.rotationSpeed,
            set: (JJ, cJ) => {
              JJ.rotationSpeed = cJ
            }
          },
          metadata: eJ
        }, bJ, wJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRotateLeft" in JJ,
            get: JJ => JJ.keysRotateLeft,
            set: (JJ, cJ) => {
              JJ.keysRotateLeft = cJ
            }
          },
          metadata: eJ
        }, WJ, gJ), (0, FJ.d)(null, null, nJ, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRotateRight" in JJ,
            get: JJ => JJ.keysRotateRight,
            set: (JJ, cJ) => {
              JJ.keysRotateRight = cJ
            }
          },
          metadata: eJ
        }, HJ, PJ), (0, FJ.d)(null, null, GJ, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRotateUp" in JJ,
            get: JJ => JJ.keysRotateUp,
            set: (JJ, cJ) => {
              JJ.keysRotateUp = cJ
            }
          },
          metadata: eJ
        }, kJ, pJ), (0, FJ.d)(null, null, fJ, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRotateDown" in JJ,
            get: JJ => JJ.keysRotateDown,
            set: (JJ, cJ) => {
              JJ.keysRotateDown = cJ
            }
          },
          metadata: eJ
        }, dJ, zJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ
    })();
    AJ.d.FreeCameraKeyboardMoveInput = YJ;
    var hJ = ZJ(36200),
      DJ = ZJ(38938);
    let sJ = (() => {
      var JJ;
      let cJ, ZJ, eJ = [],
        XJ = [],
        AJ = [],
        qJ = [];
      return JJ = class {
        _applyPointerRotation(JJ, cJ) {
          this._pointerConditions.button = this._currentActiveButton;
          const ZJ = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ZJ || "rotate" !== ZJ.interaction) return;
          const FJ = ZJ.pT ?? ZJ.sensitivity ?? 1 / this.angularSensibility,
            UJ = ZJ.aT ?? ZJ.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += JJ * FJ, this.camera.cameraRotation.x += cJ * UJ
        }
        constructor() {
          let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = JJ, this.buttons = (0, FJ.e)(this, eJ, [0, 1, 2]), this.angularSensibility = ((0, FJ.e)(this, XJ), (0, FJ.e)(this, AJ, 2e3)), this._pointerInput = (0, FJ.e)(this, qJ), this._previousPosition = null, this.onPointerMovedObservable = new hJ.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(JJ) {
          JJ = jJ.j.BackCompatCameraNoPreventDefault(arguments);
          const cJ = this.camera.gn(),
            ZJ = cJ.getInputElement();
          this._pointerInput || (this._pointerInput = FJ => {
            const UJ = FJ.event,
              eJ = "touch" === UJ.pointerType;
            if (!this.touchEnabled && eJ) return;
            if (FJ.type !== DJ.c.POINTERMOVE && -1 === this.buttons.indexOf(UJ.button)) return;
            const XJ = UJ.target;
            if (FJ.type === DJ.c.POINTERDOWN) {
              if (eJ && -1 !== this._activePointerId || !eJ && -1 !== this._currentActiveButton) return;
              this._activePointerId = UJ.pointerId;
              try {
                XJ?.setPointerCapture(UJ.pointerId)
              } catch (AJ) {} - 1 === this._currentActiveButton && (this._currentActiveButton = UJ.button), this._previousPosition = {
                x: UJ.clientX,
                y: UJ.clientY
              }, JJ || (UJ.preventDefault(), ZJ && ZJ.focus()), cJ.isPointerLock && this._onMouseMove && this._onMouseMove(FJ.event)
            } else if (FJ.type === DJ.c.POINTERUP) {
              if (eJ && this._activePointerId !== UJ.pointerId || !eJ && this._currentActiveButton !== UJ.button) return;
              try {
                XJ?.releasePointerCapture(UJ.pointerId)
              } catch (AJ) {}
              this._currentActiveButton = -1, this._previousPosition = null, JJ || UJ.preventDefault(), this._activePointerId = -1
            } else if (FJ.type === DJ.c.POINTERMOVE && (this._activePointerId === UJ.pointerId || !eJ))
              if (cJ.isPointerLock && this._onMouseMove) this._onMouseMove(FJ.event);
              else if (this._previousPosition) {
              const cJ = this.camera._calculateHandednessMultiplier(),
                ZJ = (UJ.clientX - this._previousPosition.x) * cJ,
                FJ = (UJ.clientY - this._previousPosition.y) * cJ;
              this._allowCameraRotation && this._applyPointerRotation(ZJ, FJ), this.onPointerMovedObservable.notifyObservers({
                offsetX: ZJ,
                offsetY: FJ
              }), this._previousPosition = {
                x: UJ.clientX,
                y: UJ.clientY
              }, JJ || UJ.preventDefault()
            }
          }), this._onMouseMove = ZJ => {
            if (!cJ.isPointerLock) return;
            const FJ = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ZJ.movementX * FJ, ZJ.movementY * FJ), this._previousPosition = null, JJ || ZJ.preventDefault()
          }, this._observer = this.camera.Qy()._inputManager._addCameraPointerObserver(this._pointerInput, DJ.c.POINTERDOWN | DJ.c.POINTERUP | DJ.c.POINTERMOVE), ZJ && (this._contextMenuBind = JJ => this.onContextMenu(JJ), ZJ.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(JJ) {
          JJ.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Qy()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const JJ = this.camera.gn().getInputElement();
              JJ && JJ.removeEventListener("contextmenu", this._contextMenuBind)
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
        const jJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: JJ => "buttons" in JJ,
            get: JJ => JJ.buttons,
            set: (JJ, cJ) => {
              JJ.buttons = cJ
            }
          },
          metadata: jJ
        }, eJ, XJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: JJ => "angularSensibility" in JJ,
            get: JJ => JJ.angularSensibility,
            set: (JJ, cJ) => {
              JJ.angularSensibility = cJ
            }
          },
          metadata: jJ
        }, AJ, qJ), jJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jJ
        })
      })(), JJ
    })();
    AJ.d.FreeCameraMouseInput = sJ;
    var nJ = ZJ(38953);
    let GJ = (() => {
      var JJ;
      let cJ, ZJ, eJ, XJ = [],
        AJ = [],
        qJ = [],
        YJ = [],
        sJ = [],
        GJ = [];
      return JJ = class {
        constructor() {
          this.wheelPrecisionX = (0, FJ.e)(this, XJ, 3), this.wheelPrecisionY = ((0, FJ.e)(this, AJ), (0, FJ.e)(this, qJ, 3)), this.wheelPrecisionZ = ((0, FJ.e)(this, YJ), (0, FJ.e)(this, sJ, 3)), this.onChangedObservable = ((0, FJ.e)(this, GJ), new hJ.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(JJ) {
          JJ = jJ.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = cJ => {
            if (cJ.type !== DJ.c.POINTERWHEEL) return;
            const ZJ = cJ.event,
              FJ = ZJ.deltaMode === nJ.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * FJ * ZJ.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * FJ * ZJ.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * FJ * ZJ.deltaZ / this._normalize, ZJ.preventDefault && (JJ || ZJ.preventDefault())
          }, this._observer = this.camera.Qy()._inputManager._addCameraPointerObserver(this._wheel, DJ.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Qy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const jJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelPrecisionX" in JJ,
            get: JJ => JJ.wheelPrecisionX,
            set: (JJ, cJ) => {
              JJ.wheelPrecisionX = cJ
            }
          },
          metadata: jJ
        }, XJ, AJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelPrecisionY" in JJ,
            get: JJ => JJ.wheelPrecisionY,
            set: (JJ, cJ) => {
              JJ.wheelPrecisionY = cJ
            }
          },
          metadata: jJ
        }, qJ, YJ), (0, FJ.d)(null, null, eJ, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelPrecisionZ" in JJ,
            get: JJ => JJ.wheelPrecisionZ,
            set: (JJ, cJ) => {
              JJ.wheelPrecisionZ = cJ
            }
          },
          metadata: jJ
        }, sJ, GJ), jJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jJ
        })
      })(), JJ
    })();
    var fJ;
    ! function(JJ) {
      JJ[JJ.MoveRelative = 0] = "MoveRelative", JJ[JJ.RotateRelative = 1] = "RotateRelative", JJ[JJ.MoveScene = 2] = "MoveScene"
    }(fJ || (fJ = {}));
    let xJ = (() => {
      var JJ;
      let cJ, ZJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ = GJ,
        nJ = [];
      return JJ = class extends sJ {
        constructor() {
          super(...arguments), this.camera = (0, FJ.e)(this, nJ), this._moveRelative = eJ.j.Zero(), this._rotateRelative = eJ.j.Zero(), this._moveScene = eJ.j.Zero(), this._wheelXAction = fJ.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = fJ.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(JJ) {
          null === JJ && this._wheelXAction !== fJ.MoveRelative || (this._wheelXAction = fJ.MoveRelative, this._wheelXActionCoordinate = JJ)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== fJ.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(JJ) {
          null === JJ && this._wheelYAction !== fJ.MoveRelative || (this._wheelYAction = fJ.MoveRelative, this._wheelYActionCoordinate = JJ)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== fJ.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(JJ) {
          null === JJ && this._wheelZAction !== fJ.MoveRelative || (this._wheelZAction = fJ.MoveRelative, this._wheelZActionCoordinate = JJ)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== fJ.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(JJ) {
          null === JJ && this._wheelXAction !== fJ.RotateRelative || (this._wheelXAction = fJ.RotateRelative, this._wheelXActionCoordinate = JJ)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== fJ.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(JJ) {
          null === JJ && this._wheelYAction !== fJ.RotateRelative || (this._wheelYAction = fJ.RotateRelative, this._wheelYActionCoordinate = JJ)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== fJ.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(JJ) {
          null === JJ && this._wheelZAction !== fJ.RotateRelative || (this._wheelZAction = fJ.RotateRelative, this._wheelZActionCoordinate = JJ)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== fJ.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(JJ) {
          null === JJ && this._wheelXAction !== fJ.MoveScene || (this._wheelXAction = fJ.MoveScene, this._wheelXActionCoordinate = JJ)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== fJ.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(JJ) {
          null === JJ && this._wheelYAction !== fJ.MoveScene || (this._wheelYAction = fJ.MoveScene, this._wheelYActionCoordinate = JJ)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== fJ.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(JJ) {
          null === JJ && this._wheelZAction !== fJ.MoveScene || (this._wheelZAction = fJ.MoveScene, this._wheelZActionCoordinate = JJ)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== fJ.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.X3(0), this._rotateRelative.X3(0), this._moveScene.X3(0), this._updateCamera(), this.camera.Qy().useRightHandedSystem && (this._moveRelative.z *= -1);
          const JJ = eJ.b.Zero();
          this.camera.getViewMatrix().invertToRef(JJ);
          const cJ = eJ.j.Zero();
          eJ.j.TransformNormalToRef(this._moveRelative, JJ, cJ), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(cJ), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(JJ, cJ, ZJ) {
          if (0 === JJ) return;
          if (null === cJ || null === ZJ) return;
          let FJ = null;
          switch (cJ) {
            case fJ.MoveRelative:
              FJ = this._moveRelative;
              break;
            case fJ.RotateRelative:
              FJ = this._rotateRelative;
              break;
            case fJ.MoveScene:
              FJ = this._moveScene
          }
          switch (ZJ) {
            case 0:
              FJ.set(JJ, 0, 0);
              break;
            case 1:
              FJ.set(0, JJ, 0);
              break;
            case 2:
              FJ.set(0, 0, JJ)
          }
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(sJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], XJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, cJ, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelXMoveRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelXMoveRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, ZJ, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelYMoveRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelYMoveRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, XJ, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelZMoveRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelZMoveRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, AJ, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelXRotateRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelXRotateRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, qJ, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelYRotateRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelYRotateRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, jJ, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelZRotateRelative" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelZRotateRelative = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, YJ, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelXMoveScene" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelXMoveScene = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, hJ, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelYMoveScene" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelYMoveScene = cJ
            }
          },
          metadata: eJ
        }, null, nJ), (0, FJ.d)(JJ, null, DJ, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelZMoveScene" in JJ,
            set: (JJ, cJ) => {
              JJ.wheelZMoveScene = cJ
            }
          },
          metadata: eJ
        }, null, nJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ
    })();
    AJ.d.FreeCameraMouseWheelInput = xJ;
    let rJ = (() => {
      var JJ;
      let cJ, ZJ, XJ = [],
        AJ = [],
        qJ = [],
        YJ = [];
      return JJ = class {
        constructor() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = JJ, this.touchAngularSensibility = (0, FJ.e)(this, XJ, 2e5), this.touchMoveSensibility = ((0, FJ.e)(this, AJ), (0, FJ.e)(this, qJ, 250)), this.singleFingerRotate = ((0, FJ.e)(this, YJ), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = jJ.j.IsSafari()
        }
        attachControl(JJ) {
          JJ = jJ.j.BackCompatCameraNoPreventDefault(arguments);
          let cJ = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ZJ => {
              const FJ = ZJ.event,
                UJ = "mouse" === FJ.pointerType || this._isSafari && "undefined" === typeof FJ.pointerType;
              if (this.allowMouse || !UJ)
                if (ZJ.type === DJ.c.POINTERDOWN) {
                  if (JJ || FJ.preventDefault(), this._pointerPressed.push(FJ.pointerId), 1 !== this._pointerPressed.length) return;
                  cJ = {
                    x: FJ.clientX,
                    y: FJ.clientY
                  }
                } else if (ZJ.type === DJ.c.POINTERUP) {
                JJ || FJ.preventDefault();
                const ZJ = this._pointerPressed.indexOf(FJ.pointerId);
                if (-1 === ZJ) return;
                if (this._pointerPressed.splice(ZJ, 1), 0 != ZJ) return;
                cJ = null, this._offsetX = null, this._offsetY = null
              } else if (ZJ.type === DJ.c.POINTERMOVE) {
                if (JJ || FJ.preventDefault(), !cJ) return;
                if (0 != this._pointerPressed.indexOf(FJ.pointerId)) return;
                this._offsetX = FJ.clientX - cJ.x, this._offsetY = -(FJ.clientY - cJ.y)
              }
            }), this._observer = this.camera.Qy()._inputManager._addCameraPointerObserver(this._pointerInput, DJ.c.POINTERDOWN | DJ.c.POINTERUP | DJ.c.POINTERMOVE), this._onLostFocus) {
            const JJ = this.camera.gn().getInputElement();
            JJ && JJ.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Qy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const JJ = this.camera.gn().getInputElement();
              JJ && JJ.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const JJ = this.camera,
            cJ = JJ.movement.input,
            ZJ = cJ.getEntry("touch", "rotate"),
            FJ = cJ.getEntry("touch", "translate"),
            UJ = JJ._calculateHandednessMultiplier(),
            XJ = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ZJ) {
            const cJ = ZJ.sensitivity ?? 1 / this.touchAngularSensibility;
            JJ.cameraRotation.y = this._offsetX * UJ * cJ, XJ && (JJ.cameraRotation.x = -this._offsetY * UJ * cJ)
          }
          if (!XJ && FJ) {
            const cJ = JJ._computeLocalCameraSpeed(),
              ZJ = FJ.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              UJ = eJ.h.Pn[0];
            UJ.K9(0, 0, cJ * this._offsetY * ZJ), eJ.b.RotationYawPitchRollToRef(JJ.rotation.y, JJ.rotation.x, 0, JJ._cameraRotationMatrix), eJ.j.TransformCoordinatesToRef(UJ, JJ._cameraRotationMatrix, UJ), JJ.cameraDirection.addInPlace(UJ)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: JJ => "touchAngularSensibility" in JJ,
            get: JJ => JJ.touchAngularSensibility,
            set: (JJ, cJ) => {
              JJ.touchAngularSensibility = cJ
            }
          },
          metadata: eJ
        }, XJ, AJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: JJ => "touchMoveSensibility" in JJ,
            get: JJ => JJ.touchMoveSensibility,
            set: (JJ, cJ) => {
              JJ.touchMoveSensibility = cJ
            }
          },
          metadata: eJ
        }, qJ, YJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ
    })();
    AJ.d.FreeCameraTouchInput = rJ;
    var vJ, mJ, QJ, EJ = ZJ(38677);
    class VJ extends AJ.e {
      constructor(JJ) {
        super(JJ), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new YJ), this
      }
      addMouse() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new sJ(JJ), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new xJ, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new rJ), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(vJ = VJ.prototype).addDeviceOrientation ?? (vJ.addDeviceOrientation = (0, EJ.l)("FreeCameraInputsManager", "addDeviceOrientation")), (mJ = VJ.prototype).addVirtualJoystick ?? (mJ.addVirtualJoystick = (0, EJ.l)("FreeCameraInputsManager", "addVirtualJoystick")), (QJ = VJ.prototype).addGamepad ?? (QJ.addGamepad = (0, EJ.l)("FreeCameraInputsManager", "addGamepad"));
    var KJ = ZJ(38698),
      yJ = ZJ(36216);
    let SJ = (() => {
        var JJ;
        let cJ, ZJ, AJ, qJ, YJ = XJ.h,
          hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [];
        return JJ = class extends YJ {
          get angularSensibility() {
            const JJ = this.inputs.attached.mouse;
            return JJ ? JJ.angularSensibility : 0
          }
          set angularSensibility(JJ) {
            const cJ = this.inputs.attached.mouse;
            cJ && (cJ.angularSensibility = JJ)
          }
          get keysUp() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysUp : []
          }
          set keysUp(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysUp = JJ)
          }
          get keysUpward() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysUpward : []
          }
          set keysUpward(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysUpward = JJ)
          }
          get keysDown() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysDown : []
          }
          set keysDown(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysDown = JJ)
          }
          get keysDownward() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysDownward : []
          }
          set keysDownward(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysDownward = JJ)
          }
          get keysLeft() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysLeft : []
          }
          set keysLeft(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysLeft = JJ)
          }
          get keysRight() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRight : []
          }
          set keysRight(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRight = JJ)
          }
          get keysRotateLeft() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRotateLeft : []
          }
          set keysRotateLeft(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRotateLeft = JJ)
          }
          get keysRotateRight() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRotateRight : []
          }
          set keysRotateRight(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRotateRight = JJ)
          }
          get keysRotateUp() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRotateUp : []
          }
          set keysRotateUp(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRotateUp = JJ)
          }
          get keysRotateDown() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRotateDown : []
          }
          set keysRotateDown(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRotateDown = JJ)
          }
          constructor(JJ, cJ, ZJ) {
            var UJ;
            super(JJ, cJ, ZJ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), UJ = this, this.ellipsoid = (0, FJ.e)(this, hJ, new eJ.j(.5, 1, .5)), this.ellipsoidOffset = ((0, FJ.e)(this, DJ), (0, FJ.e)(this, sJ, new eJ.j(0, 0, 0))), this.checkCollisions = ((0, FJ.e)(this, nJ), (0, FJ.e)(this, GJ, !1)), this.applyGravity = ((0, FJ.e)(this, fJ), (0, FJ.e)(this, xJ, !1)), this.inputs = (0, FJ.e)(this, rJ), this._needMoveForGravity = !1, this._oldPosition = eJ.j.Zero(), this._diffPosition = eJ.j.Zero(), this._newPosition = eJ.j.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(JJ, cJ) {
              let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              UJ._newPosition.rZJ(cJ), UJ._newPosition.subtractToRef(UJ._oldPosition, UJ._diffPosition), UJ._diffPosition.length() > KJ.e.CollisionsEpsilon && (UJ.position.addToRef(UJ._diffPosition, UJ._deferredPositionUpdate), UJ._deferOnly ? UJ._deferredUpdated = !0 : UJ.position.rZJ(UJ._deferredPositionUpdate), UJ.oh && ZJ && UJ.oh(ZJ))
            }, this.inputs = new VJ(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(JJ, cJ) {
            cJ = jJ.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(cJ)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new eJ.j(0, 0, 0), this.cameraRotation = new eJ.i(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(JJ) {
            this._collisionMask = isNaN(JJ) ? -1 : JJ
          }
          _collideWithWorld(JJ) {
            let cJ;
            cJ = this.parent ? eJ.j.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, cJ.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ZJ = this.Qy().collisionCoordinator;
            this._collider || (this._collider = ZJ.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let FJ = JJ;
            this.applyGravity && (FJ = JJ.add(this.Qy().gravity)), ZJ.getNewPosition(this._oldPosition, FJ, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = eJ.j.Zero(), this._transformedDirection = eJ.j.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(JJ) {
            this._needMoveForGravity = JJ
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Qy().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(YJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.E)()], ZJ = [(0, UJ.E)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ellipsoid" in JJ,
              get: JJ => JJ.ellipsoid,
              set: (JJ, cJ) => {
                JJ.ellipsoid = cJ
              }
            },
            metadata: eJ
          }, hJ, DJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ellipsoidOffset" in JJ,
              get: JJ => JJ.ellipsoidOffset,
              set: (JJ, cJ) => {
                JJ.ellipsoidOffset = cJ
              }
            },
            metadata: eJ
          }, sJ, nJ), (0, FJ.d)(null, null, AJ, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: JJ => "checkCollisions" in JJ,
              get: JJ => JJ.checkCollisions,
              set: (JJ, cJ) => {
                JJ.checkCollisions = cJ
              }
            },
            metadata: eJ
          }, GJ, fJ), (0, FJ.d)(null, null, qJ, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: JJ => "applyGravity" in JJ,
              get: JJ => JJ.applyGravity,
              set: (JJ, cJ) => {
                JJ.applyGravity = cJ
              }
            },
            metadata: eJ
          }, xJ, rJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      IJ = !1;
    IJ || (IJ = !0, (0, yJ.f)("BABYLON.FreeCamera", SJ))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
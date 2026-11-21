export const id = 250;
export const ids = [250];
export const modules = {
  39625: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => RQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(39633),
      kQ = wQ(39676),
      vQ = wQ(39601),
      mQ = wQ(39505);
    let uQ = (() => {
      var QQ;
      let FQ, wQ, DQ, kQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        WQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [];
      return QQ = class {
        constructor() {
          this.keysUp = (0, LQ.l)(this, eQ, [38]), this.keysUpward = ((0, LQ.l)(this, MQ), (0, LQ.l)(this, GQ, [33])), this.keysDown = ((0, LQ.l)(this, pQ), (0, LQ.l)(this, cQ, [40])), this.keysDownward = ((0, LQ.l)(this, CQ), (0, LQ.l)(this, SQ, [34])), this.keysLeft = ((0, LQ.l)(this, iQ), (0, LQ.l)(this, WQ, [37])), this.keysRight = ((0, LQ.l)(this, RQ), (0, LQ.l)(this, OQ, [39])), this.rotationSpeed = ((0, LQ.l)(this, sQ), (0, LQ.l)(this, rQ, .5)), this.keysRotateLeft = ((0, LQ.l)(this, IQ), (0, LQ.l)(this, UQ, [])), this.keysRotateRight = ((0, LQ.l)(this, NQ), (0, LQ.l)(this, TQ, [])), this.keysRotateUp = ((0, LQ.l)(this, KQ), (0, LQ.l)(this, zQ, [])), this.keysRotateDown = ((0, LQ.l)(this, lQ), (0, LQ.l)(this, jQ, [])), this._keys = ((0, LQ.l)(this, aQ), new Array)
        }
        attachControl(QQ) {
          QQ = mQ.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.iN(), this._engine = this._scene.Wx(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((FQ => {
            const wQ = FQ.event;
            if (!wQ.metaKey)
              if (FQ.type === vQ.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(wQ.keyCode) || -1 !== this.keysDown.indexOf(wQ.keyCode) || -1 !== this.keysLeft.indexOf(wQ.keyCode) || -1 !== this.keysRight.indexOf(wQ.keyCode) || -1 !== this.keysUpward.indexOf(wQ.keyCode) || -1 !== this.keysDownward.indexOf(wQ.keyCode) || -1 !== this.keysRotateLeft.indexOf(wQ.keyCode) || -1 !== this.keysRotateRight.indexOf(wQ.keyCode) || -1 !== this.keysRotateUp.indexOf(wQ.keyCode) || -1 !== this.keysRotateDown.indexOf(wQ.keyCode)) {
                  -1 === this._keys.indexOf(wQ.keyCode) && this._keys.push(wQ.keyCode), QQ || wQ.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(wQ.keyCode) || -1 !== this.keysDown.indexOf(wQ.keyCode) || -1 !== this.keysLeft.indexOf(wQ.keyCode) || -1 !== this.keysRight.indexOf(wQ.keyCode) || -1 !== this.keysUpward.indexOf(wQ.keyCode) || -1 !== this.keysDownward.indexOf(wQ.keyCode) || -1 !== this.keysRotateLeft.indexOf(wQ.keyCode) || -1 !== this.keysRotateRight.indexOf(wQ.keyCode) || -1 !== this.keysRotateUp.indexOf(wQ.keyCode) || -1 !== this.keysRotateDown.indexOf(wQ.keyCode)) {
              const FQ = this._keys.indexOf(wQ.keyCode);
              FQ >= 0 && this._keys.splice(FQ, 1), QQ || wQ.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const QQ = this.camera,
              FQ = QQ.movement.input,
              wQ = FQ.getEntry("keyboard", "translate"),
              LQ = FQ.getEntry("keyboard", "rotate"),
              qQ = LQ?.sensitivity ?? 1,
              DQ = QQ._localDirection.vQQ(0, 0, 0);
            for (let oQ = 0; oQ < this._keys.length; oQ++) {
              const FQ = this._keys[oQ]; - 1 !== this.keysLeft.indexOf(FQ) ? DQ.x -= 1 : -1 !== this.keysUp.indexOf(FQ) ? DQ.z += 1 : -1 !== this.keysRight.indexOf(FQ) ? DQ.x += 1 : -1 !== this.keysDown.indexOf(FQ) ? DQ.z -= 1 : -1 !== this.keysUpward.indexOf(FQ) ? DQ.y += 1 : -1 !== this.keysDownward.indexOf(FQ) ? DQ.y -= 1 : -1 !== this.keysRotateLeft.indexOf(FQ) ? LQ && (QQ.cameraRotation.y -= this._getLocalRotation() * qQ) : -1 !== this.keysRotateRight.indexOf(FQ) ? LQ && (QQ.cameraRotation.y += this._getLocalRotation() * qQ) : -1 !== this.keysRotateUp.indexOf(FQ) ? LQ && (QQ.cameraRotation.x -= this._getLocalRotation() * qQ) : -1 !== this.keysRotateDown.indexOf(FQ) && LQ && (QQ.cameraRotation.x += this._getLocalRotation() * qQ)
            }
            if (wQ && (0 !== DQ.x || 0 !== DQ.y || 0 !== DQ.z)) {
              const FQ = QQ._computeLocalCameraSpeed() * (wQ.sensitivity ?? 1);
              DQ.normalize().scaleInPlace(FQ), QQ.iN().useRightHandedSystem && (DQ.z *= -1), QQ.getViewMatrix().invertToRef(QQ._cameraTransformMatrix), oQ.p.TransformNormalToRef(DQ, QQ._cameraTransformMatrix, QQ._transformedDirection), QQ.cameraDirection.addInPlace(QQ._transformedDirection)
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
          const QQ = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * QQ
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], YQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUp" in QQ,
            get: QQ => QQ.keysUp,
            set: (QQ, FQ) => {
              QQ.keysUp = FQ
            }
          },
          metadata: oQ
        }, eQ, MQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUpward" in QQ,
            get: QQ => QQ.keysUpward,
            set: (QQ, FQ) => {
              QQ.keysUpward = FQ
            }
          },
          metadata: oQ
        }, GQ, pQ), (0, LQ.i)(null, null, DQ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDown" in QQ,
            get: QQ => QQ.keysDown,
            set: (QQ, FQ) => {
              QQ.keysDown = FQ
            }
          },
          metadata: oQ
        }, cQ, CQ), (0, LQ.i)(null, null, kQ, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDownward" in QQ,
            get: QQ => QQ.keysDownward,
            set: (QQ, FQ) => {
              QQ.keysDownward = FQ
            }
          },
          metadata: oQ
        }, SQ, iQ), (0, LQ.i)(null, null, uQ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysLeft" in QQ,
            get: QQ => QQ.keysLeft,
            set: (QQ, FQ) => {
              QQ.keysLeft = FQ
            }
          },
          metadata: oQ
        }, WQ, RQ), (0, LQ.i)(null, null, HQ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRight" in QQ,
            get: QQ => QQ.keysRight,
            set: (QQ, FQ) => {
              QQ.keysRight = FQ
            }
          },
          metadata: oQ
        }, OQ, sQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rotationSpeed" in QQ,
            get: QQ => QQ.rotationSpeed,
            set: (QQ, FQ) => {
              QQ.rotationSpeed = FQ
            }
          },
          metadata: oQ
        }, rQ, IQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateLeft" in QQ,
            get: QQ => QQ.keysRotateLeft,
            set: (QQ, FQ) => {
              QQ.keysRotateLeft = FQ
            }
          },
          metadata: oQ
        }, UQ, NQ), (0, LQ.i)(null, null, xQ, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateRight" in QQ,
            get: QQ => QQ.keysRotateRight,
            set: (QQ, FQ) => {
              QQ.keysRotateRight = FQ
            }
          },
          metadata: oQ
        }, TQ, KQ), (0, LQ.i)(null, null, AQ, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateUp" in QQ,
            get: QQ => QQ.keysRotateUp,
            set: (QQ, FQ) => {
              QQ.keysRotateUp = FQ
            }
          },
          metadata: oQ
        }, zQ, lQ), (0, LQ.i)(null, null, tQ, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateDown" in QQ,
            get: QQ => QQ.keysRotateDown,
            set: (QQ, FQ) => {
              QQ.keysRotateDown = FQ
            }
          },
          metadata: oQ
        }, jQ, aQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ
    })();
    kQ.c.FreeCameraKeyboardMoveInput = uQ;
    var HQ = wQ(36722),
      bQ = wQ(39595);
    let YQ = (() => {
      var QQ;
      let FQ, wQ, oQ = [],
        DQ = [],
        kQ = [],
        vQ = [];
      return QQ = class {
        _applyPointerRotation(QQ, FQ) {
          this._pointerConditions.button = this._currentActiveButton;
          const wQ = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!wQ || "rotate" !== wQ.interaction) return;
          const LQ = wQ.OE ?? wQ.sensitivity ?? 1 / this.angularSensibility,
            qQ = wQ.sE ?? wQ.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += QQ * LQ, this.camera.cameraRotation.x += FQ * qQ
        }
        constructor() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = QQ, this.buttons = (0, LQ.l)(this, oQ, [0, 1, 2]), this.angularSensibility = ((0, LQ.l)(this, DQ), (0, LQ.l)(this, kQ, 2e3)), this._pointerInput = (0, LQ.l)(this, vQ), this._previousPosition = null, this.onPointerMovedObservable = new HQ.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(QQ) {
          QQ = mQ.g.BackCompatCameraNoPreventDefault(arguments);
          const FQ = this.camera.Wx(),
            wQ = FQ.getInputElement();
          this._pointerInput || (this._pointerInput = LQ => {
            const qQ = LQ.event,
              oQ = "touch" === qQ.pointerType;
            if (!this.touchEnabled && oQ) return;
            if (LQ.type !== bQ.e.POINTERMOVE && -1 === this.buttons.indexOf(qQ.button)) return;
            const DQ = qQ.target;
            if (LQ.type === bQ.e.POINTERDOWN) {
              if (oQ && -1 !== this._activePointerId || !oQ && -1 !== this._currentActiveButton) return;
              this._activePointerId = qQ.pointerId;
              try {
                DQ?.setPointerCapture(qQ.pointerId)
              } catch (kQ) {} - 1 === this._currentActiveButton && (this._currentActiveButton = qQ.button), this._previousPosition = {
                x: qQ.clientX,
                y: qQ.clientY
              }, QQ || (qQ.preventDefault(), wQ && wQ.focus()), FQ.isPointerLock && this._onMouseMove && this._onMouseMove(LQ.event)
            } else if (LQ.type === bQ.e.POINTERUP) {
              if (oQ && this._activePointerId !== qQ.pointerId || !oQ && this._currentActiveButton !== qQ.button) return;
              try {
                DQ?.releasePointerCapture(qQ.pointerId)
              } catch (kQ) {}
              this._currentActiveButton = -1, this._previousPosition = null, QQ || qQ.preventDefault(), this._activePointerId = -1
            } else if (LQ.type === bQ.e.POINTERMOVE && (this._activePointerId === qQ.pointerId || !oQ))
              if (FQ.isPointerLock && this._onMouseMove) this._onMouseMove(LQ.event);
              else if (this._previousPosition) {
              const FQ = this.camera._calculateHandednessMultiplier(),
                wQ = (qQ.clientX - this._previousPosition.x) * FQ,
                LQ = (qQ.clientY - this._previousPosition.y) * FQ;
              this._allowCameraRotation && this._applyPointerRotation(wQ, LQ), this.onPointerMovedObservable.notifyObservers({
                offsetX: wQ,
                offsetY: LQ
              }), this._previousPosition = {
                x: qQ.clientX,
                y: qQ.clientY
              }, QQ || qQ.preventDefault()
            }
          }), this._onMouseMove = wQ => {
            if (!FQ.isPointerLock) return;
            const LQ = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(wQ.movementX * LQ, wQ.movementY * LQ), this._previousPosition = null, QQ || wQ.preventDefault()
          }, this._observer = this.camera.iN()._inputManager._addCameraPointerObserver(this._pointerInput, bQ.e.POINTERDOWN | bQ.e.POINTERUP | bQ.e.POINTERMOVE), wQ && (this._contextMenuBind = QQ => this.onContextMenu(QQ), wQ.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(QQ) {
          QQ.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.iN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const QQ = this.camera.Wx().getInputElement();
              QQ && QQ.removeEventListener("contextmenu", this._contextMenuBind)
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
        const mQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: QQ => "buttons" in QQ,
            get: QQ => QQ.buttons,
            set: (QQ, FQ) => {
              QQ.buttons = FQ
            }
          },
          metadata: mQ
        }, oQ, DQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "angularSensibility" in QQ,
            get: QQ => QQ.angularSensibility,
            set: (QQ, FQ) => {
              QQ.angularSensibility = FQ
            }
          },
          metadata: mQ
        }, kQ, vQ), mQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mQ
        })
      })(), QQ
    })();
    kQ.c.FreeCameraMouseInput = YQ;
    var xQ = wQ(39610);
    let AQ = (() => {
      var QQ;
      let FQ, wQ, oQ, DQ = [],
        kQ = [],
        vQ = [],
        uQ = [],
        YQ = [],
        AQ = [];
      return QQ = class {
        constructor() {
          this.wheelPrecisionX = (0, LQ.l)(this, DQ, 3), this.wheelPrecisionY = ((0, LQ.l)(this, kQ), (0, LQ.l)(this, vQ, 3)), this.wheelPrecisionZ = ((0, LQ.l)(this, uQ), (0, LQ.l)(this, YQ, 3)), this.onChangedObservable = ((0, LQ.l)(this, AQ), new HQ.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(QQ) {
          QQ = mQ.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = FQ => {
            if (FQ.type !== bQ.e.POINTERWHEEL) return;
            const wQ = FQ.event,
              LQ = wQ.deltaMode === xQ.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * LQ * wQ.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * LQ * wQ.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * LQ * wQ.deltaZ / this._normalize, wQ.preventDefault && (QQ || wQ.preventDefault())
          }, this._observer = this.camera.iN()._inputManager._addCameraPointerObserver(this._wheel, bQ.e.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.iN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const mQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionX" in QQ,
            get: QQ => QQ.wheelPrecisionX,
            set: (QQ, FQ) => {
              QQ.wheelPrecisionX = FQ
            }
          },
          metadata: mQ
        }, DQ, kQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionY" in QQ,
            get: QQ => QQ.wheelPrecisionY,
            set: (QQ, FQ) => {
              QQ.wheelPrecisionY = FQ
            }
          },
          metadata: mQ
        }, vQ, uQ), (0, LQ.i)(null, null, oQ, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionZ" in QQ,
            get: QQ => QQ.wheelPrecisionZ,
            set: (QQ, FQ) => {
              QQ.wheelPrecisionZ = FQ
            }
          },
          metadata: mQ
        }, YQ, AQ), mQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mQ
        })
      })(), QQ
    })();
    var tQ;
    ! function(QQ) {
      QQ[QQ.MoveRelative = 0] = "MoveRelative", QQ[QQ.RotateRelative = 1] = "RotateRelative", QQ[QQ.MoveScene = 2] = "MoveScene"
    }(tQ || (tQ = {}));
    let eQ = (() => {
      var QQ;
      let FQ, wQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ = AQ,
        xQ = [];
      return QQ = class extends YQ {
        constructor() {
          super(...arguments), this.camera = (0, LQ.l)(this, xQ), this._moveRelative = oQ.p.Zero(), this._rotateRelative = oQ.p.Zero(), this._moveScene = oQ.p.Zero(), this._wheelXAction = tQ.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = tQ.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(QQ) {
          null === QQ && this._wheelXAction !== tQ.MoveRelative || (this._wheelXAction = tQ.MoveRelative, this._wheelXActionCoordinate = QQ)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== tQ.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(QQ) {
          null === QQ && this._wheelYAction !== tQ.MoveRelative || (this._wheelYAction = tQ.MoveRelative, this._wheelYActionCoordinate = QQ)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== tQ.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(QQ) {
          null === QQ && this._wheelZAction !== tQ.MoveRelative || (this._wheelZAction = tQ.MoveRelative, this._wheelZActionCoordinate = QQ)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== tQ.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(QQ) {
          null === QQ && this._wheelXAction !== tQ.RotateRelative || (this._wheelXAction = tQ.RotateRelative, this._wheelXActionCoordinate = QQ)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== tQ.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(QQ) {
          null === QQ && this._wheelYAction !== tQ.RotateRelative || (this._wheelYAction = tQ.RotateRelative, this._wheelYActionCoordinate = QQ)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== tQ.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(QQ) {
          null === QQ && this._wheelZAction !== tQ.RotateRelative || (this._wheelZAction = tQ.RotateRelative, this._wheelZActionCoordinate = QQ)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== tQ.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(QQ) {
          null === QQ && this._wheelXAction !== tQ.MoveScene || (this._wheelXAction = tQ.MoveScene, this._wheelXActionCoordinate = QQ)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== tQ.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(QQ) {
          null === QQ && this._wheelYAction !== tQ.MoveScene || (this._wheelYAction = tQ.MoveScene, this._wheelYActionCoordinate = QQ)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== tQ.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(QQ) {
          null === QQ && this._wheelZAction !== tQ.MoveScene || (this._wheelZAction = tQ.MoveScene, this._wheelZActionCoordinate = QQ)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== tQ.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.K3(0), this._rotateRelative.K3(0), this._moveScene.K3(0), this._updateCamera(), this.camera.iN().useRightHandedSystem && (this._moveRelative.z *= -1);
          const QQ = oQ.c.Zero();
          this.camera.getViewMatrix().invertToRef(QQ);
          const FQ = oQ.p.Zero();
          oQ.p.TransformNormalToRef(this._moveRelative, QQ, FQ), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(FQ), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(QQ, FQ, wQ) {
          if (0 === QQ) return;
          if (null === FQ || null === wQ) return;
          let LQ = null;
          switch (FQ) {
            case tQ.MoveRelative:
              LQ = this._moveRelative;
              break;
            case tQ.RotateRelative:
              LQ = this._rotateRelative;
              break;
            case tQ.MoveScene:
              LQ = this._moveScene
          }
          switch (wQ) {
            case 0:
              LQ.set(QQ, 0, 0);
              break;
            case 1:
              LQ.set(0, QQ, 0);
              break;
            case 2:
              LQ.set(0, 0, QQ)
          }
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(YQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, FQ, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXMoveRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelXMoveRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, wQ, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYMoveRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelYMoveRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, DQ, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZMoveRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelZMoveRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, kQ, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXRotateRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelXRotateRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, vQ, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYRotateRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelYRotateRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, mQ, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZRotateRelative" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelZRotateRelative = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, uQ, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXMoveScene" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelXMoveScene = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, HQ, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYMoveScene" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelYMoveScene = FQ
            }
          },
          metadata: oQ
        }, null, xQ), (0, LQ.i)(QQ, null, bQ, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZMoveScene" in QQ,
            set: (QQ, FQ) => {
              QQ.wheelZMoveScene = FQ
            }
          },
          metadata: oQ
        }, null, xQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ
    })();
    kQ.c.FreeCameraMouseWheelInput = eQ;
    let MQ = (() => {
      var QQ;
      let FQ, wQ, DQ = [],
        kQ = [],
        vQ = [],
        uQ = [];
      return QQ = class {
        constructor() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = QQ, this.touchAngularSensibility = (0, LQ.l)(this, DQ, 2e5), this.touchMoveSensibility = ((0, LQ.l)(this, kQ), (0, LQ.l)(this, vQ, 250)), this.singleFingerRotate = ((0, LQ.l)(this, uQ), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = mQ.g.IsSafari()
        }
        attachControl(QQ) {
          QQ = mQ.g.BackCompatCameraNoPreventDefault(arguments);
          let FQ = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = wQ => {
              const LQ = wQ.event,
                qQ = "mouse" === LQ.pointerType || this._isSafari && "undefined" === typeof LQ.pointerType;
              if (this.allowMouse || !qQ)
                if (wQ.type === bQ.e.POINTERDOWN) {
                  if (QQ || LQ.preventDefault(), this._pointerPressed.push(LQ.pointerId), 1 !== this._pointerPressed.length) return;
                  FQ = {
                    x: LQ.clientX,
                    y: LQ.clientY
                  }
                } else if (wQ.type === bQ.e.POINTERUP) {
                QQ || LQ.preventDefault();
                const wQ = this._pointerPressed.indexOf(LQ.pointerId);
                if (-1 === wQ) return;
                if (this._pointerPressed.splice(wQ, 1), 0 != wQ) return;
                FQ = null, this._offsetX = null, this._offsetY = null
              } else if (wQ.type === bQ.e.POINTERMOVE) {
                if (QQ || LQ.preventDefault(), !FQ) return;
                if (0 != this._pointerPressed.indexOf(LQ.pointerId)) return;
                this._offsetX = LQ.clientX - FQ.x, this._offsetY = -(LQ.clientY - FQ.y)
              }
            }), this._observer = this.camera.iN()._inputManager._addCameraPointerObserver(this._pointerInput, bQ.e.POINTERDOWN | bQ.e.POINTERUP | bQ.e.POINTERMOVE), this._onLostFocus) {
            const QQ = this.camera.Wx().getInputElement();
            QQ && QQ.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.iN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const QQ = this.camera.Wx().getInputElement();
              QQ && QQ.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const QQ = this.camera,
            FQ = QQ.movement.input,
            wQ = FQ.getEntry("touch", "rotate"),
            LQ = FQ.getEntry("touch", "translate"),
            qQ = QQ._calculateHandednessMultiplier(),
            DQ = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (wQ) {
            const FQ = wQ.sensitivity ?? 1 / this.touchAngularSensibility;
            QQ.cameraRotation.y = this._offsetX * qQ * FQ, DQ && (QQ.cameraRotation.x = -this._offsetY * qQ * FQ)
          }
          if (!DQ && LQ) {
            const FQ = QQ._computeLocalCameraSpeed(),
              wQ = LQ.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              qQ = oQ.k.Ox[0];
            qQ.vQQ(0, 0, FQ * this._offsetY * wQ), oQ.c.RotationYawPitchRollToRef(QQ.rotation.y, QQ.rotation.x, 0, QQ._cameraRotationMatrix), oQ.p.TransformCoordinatesToRef(qQ, QQ._cameraRotationMatrix, qQ), QQ.cameraDirection.addInPlace(qQ)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "touchAngularSensibility" in QQ,
            get: QQ => QQ.touchAngularSensibility,
            set: (QQ, FQ) => {
              QQ.touchAngularSensibility = FQ
            }
          },
          metadata: oQ
        }, DQ, kQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "touchMoveSensibility" in QQ,
            get: QQ => QQ.touchMoveSensibility,
            set: (QQ, FQ) => {
              QQ.touchMoveSensibility = FQ
            }
          },
          metadata: oQ
        }, vQ, uQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ
    })();
    kQ.c.FreeCameraTouchInput = MQ;
    var GQ, pQ, cQ, CQ = wQ(39277);
    class SQ extends kQ.e {
      constructor(QQ) {
        super(QQ), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new uQ), this
      }
      addMouse() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new YQ(QQ), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new eQ, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new MQ), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(GQ = SQ.prototype).addDeviceOrientation ?? (GQ.addDeviceOrientation = (0, CQ.g)("FreeCameraInputsManager", "addDeviceOrientation")), (pQ = SQ.prototype).addVirtualJoystick ?? (pQ.addVirtualJoystick = (0, CQ.g)("FreeCameraInputsManager", "addVirtualJoystick")), (cQ = SQ.prototype).addGamepad ?? (cQ.addGamepad = (0, CQ.g)("FreeCameraInputsManager", "addGamepad"));
    var iQ = wQ(39295),
      WQ = wQ(36741);
    let RQ = (() => {
        var QQ;
        let FQ, wQ, kQ, vQ, uQ = DQ.g,
          HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [];
        return QQ = class extends uQ {
          get angularSensibility() {
            const QQ = this.inputs.attached.mouse;
            return QQ ? QQ.angularSensibility : 0
          }
          set angularSensibility(QQ) {
            const FQ = this.inputs.attached.mouse;
            FQ && (FQ.angularSensibility = QQ)
          }
          get keysUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUp : []
          }
          set keysUp(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysUp = QQ)
          }
          get keysUpward() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUpward : []
          }
          set keysUpward(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysUpward = QQ)
          }
          get keysDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDown : []
          }
          set keysDown(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysDown = QQ)
          }
          get keysDownward() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDownward : []
          }
          set keysDownward(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysDownward = QQ)
          }
          get keysLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysLeft : []
          }
          set keysLeft(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysLeft = QQ)
          }
          get keysRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRight : []
          }
          set keysRight(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRight = QQ)
          }
          get keysRotateLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateLeft : []
          }
          set keysRotateLeft(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRotateLeft = QQ)
          }
          get keysRotateRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateRight : []
          }
          set keysRotateRight(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRotateRight = QQ)
          }
          get keysRotateUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateUp : []
          }
          set keysRotateUp(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRotateUp = QQ)
          }
          get keysRotateDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateDown : []
          }
          set keysRotateDown(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRotateDown = QQ)
          }
          constructor(QQ, FQ, wQ) {
            var qQ;
            super(QQ, FQ, wQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), qQ = this, this.ellipsoid = (0, LQ.l)(this, HQ, new oQ.p(.5, 1, .5)), this.ellipsoidOffset = ((0, LQ.l)(this, bQ), (0, LQ.l)(this, YQ, new oQ.p(0, 0, 0))), this.checkCollisions = ((0, LQ.l)(this, xQ), (0, LQ.l)(this, AQ, !1)), this.applyGravity = ((0, LQ.l)(this, tQ), (0, LQ.l)(this, eQ, !1)), this.inputs = (0, LQ.l)(this, MQ), this._needMoveForGravity = !1, this._oldPosition = oQ.p.Zero(), this._diffPosition = oQ.p.Zero(), this._newPosition = oQ.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(QQ, FQ) {
              let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              qQ._newPosition.Qs(FQ), qQ._newPosition.subtractToRef(qQ._oldPosition, qQ._diffPosition), qQ._diffPosition.length() > iQ.e.CollisionsEpsilon && (qQ.position.addToRef(qQ._diffPosition, qQ._deferredPositionUpdate), qQ._deferOnly ? qQ._deferredUpdated = !0 : qQ.position.Qs(qQ._deferredPositionUpdate), qQ.ob && wQ && qQ.ob(wQ))
            }, this.inputs = new SQ(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(QQ, FQ) {
            FQ = mQ.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(FQ)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new oQ.p(0, 0, 0), this.cameraRotation = new oQ.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(QQ) {
            this._collisionMask = isNaN(QQ) ? -1 : QQ
          }
          _collideWithWorld(QQ) {
            let FQ;
            FQ = this.parent ? oQ.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, FQ.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const wQ = this.iN().collisionCoordinator;
            this._collider || (this._collider = wQ.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let LQ = QQ;
            this.applyGravity && (LQ = QQ.add(this.iN().gravity)), wQ.getNewPosition(this._oldPosition, LQ, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = oQ.p.Zero(), this._transformedDirection = oQ.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(QQ) {
            this._needMoveForGravity = QQ
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.iN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(uQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.F)()], wQ = [(0, qQ.F)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ellipsoid" in QQ,
              get: QQ => QQ.ellipsoid,
              set: (QQ, FQ) => {
                QQ.ellipsoid = FQ
              }
            },
            metadata: oQ
          }, HQ, bQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ellipsoidOffset" in QQ,
              get: QQ => QQ.ellipsoidOffset,
              set: (QQ, FQ) => {
                QQ.ellipsoidOffset = FQ
              }
            },
            metadata: oQ
          }, YQ, xQ), (0, LQ.i)(null, null, kQ, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "checkCollisions" in QQ,
              get: QQ => QQ.checkCollisions,
              set: (QQ, FQ) => {
                QQ.checkCollisions = FQ
              }
            },
            metadata: oQ
          }, AQ, tQ), (0, LQ.i)(null, null, vQ, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyGravity" in QQ,
              get: QQ => QQ.applyGravity,
              set: (QQ, FQ) => {
                QQ.applyGravity = FQ
              }
            },
            metadata: oQ
          }, eQ, MQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      OQ = !1;
    OQ || (OQ = !0, (0, WQ.e)("BABYLON.FreeCamera", RQ))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
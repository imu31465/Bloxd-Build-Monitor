export const id = 266;
export const ids = [266];
export const modules = {
  40479: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => aQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(40484),
      sQ = XQ(40515),
      FQ = XQ(40445),
      PQ = XQ(40357);
    let gQ = (() => {
      var QQ;
      let WQ, XQ, zQ, sQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        HQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [];
      return QQ = class {
        constructor() {
          this.keysUp = (0, wQ.n)(this, VQ, [38]), this.keysUpward = ((0, wQ.n)(this, DQ), (0, wQ.n)(this, pQ, [33])), this.keysDown = ((0, wQ.n)(this, GQ), (0, wQ.n)(this, UQ, [40])), this.keysDownward = ((0, wQ.n)(this, bQ), (0, wQ.n)(this, vQ, [34])), this.keysLeft = ((0, wQ.n)(this, dQ), (0, wQ.n)(this, HQ, [37])), this.keysRight = ((0, wQ.n)(this, aQ), (0, wQ.n)(this, lQ, [39])), this.rotationSpeed = ((0, wQ.n)(this, hQ), (0, wQ.n)(this, iQ, .5)), this.keysRotateLeft = ((0, wQ.n)(this, cQ), (0, wQ.n)(this, AQ, [])), this.keysRotateRight = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, [])), this.keysRotateUp = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, [])), this.keysRotateDown = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, [])), this._keys = ((0, wQ.n)(this, fQ), new Array)
        }
        attachControl(QQ) {
          QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.sE(), this._engine = this._scene.Uj(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((WQ => {
            const XQ = WQ.event;
            if (!XQ.metaKey)
              if (WQ.type === FQ.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysUpward.indexOf(XQ.keyCode) || -1 !== this.keysDownward.indexOf(XQ.keyCode) || -1 !== this.keysRotateLeft.indexOf(XQ.keyCode) || -1 !== this.keysRotateRight.indexOf(XQ.keyCode) || -1 !== this.keysRotateUp.indexOf(XQ.keyCode) || -1 !== this.keysRotateDown.indexOf(XQ.keyCode)) {
                  -1 === this._keys.indexOf(XQ.keyCode) && this._keys.push(XQ.keyCode), QQ || XQ.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysUpward.indexOf(XQ.keyCode) || -1 !== this.keysDownward.indexOf(XQ.keyCode) || -1 !== this.keysRotateLeft.indexOf(XQ.keyCode) || -1 !== this.keysRotateRight.indexOf(XQ.keyCode) || -1 !== this.keysRotateUp.indexOf(XQ.keyCode) || -1 !== this.keysRotateDown.indexOf(XQ.keyCode)) {
              const WQ = this._keys.indexOf(XQ.keyCode);
              WQ >= 0 && this._keys.splice(WQ, 1), QQ || XQ.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const QQ = this.camera,
              WQ = QQ.movement.input,
              XQ = WQ.getEntry("keyboard", "translate"),
              wQ = WQ.getEntry("keyboard", "rotate"),
              qQ = wQ?.sensitivity ?? 1,
              zQ = QQ._localDirection.XQQ(0, 0, 0);
            for (let TQ = 0; TQ < this._keys.length; TQ++) {
              const WQ = this._keys[TQ]; - 1 !== this.keysLeft.indexOf(WQ) ? zQ.x -= 1 : -1 !== this.keysUp.indexOf(WQ) ? zQ.z += 1 : -1 !== this.keysRight.indexOf(WQ) ? zQ.x += 1 : -1 !== this.keysDown.indexOf(WQ) ? zQ.z -= 1 : -1 !== this.keysUpward.indexOf(WQ) ? zQ.y += 1 : -1 !== this.keysDownward.indexOf(WQ) ? zQ.y -= 1 : -1 !== this.keysRotateLeft.indexOf(WQ) ? wQ && (QQ.cameraRotation.y -= this._getLocalRotation() * qQ) : -1 !== this.keysRotateRight.indexOf(WQ) ? wQ && (QQ.cameraRotation.y += this._getLocalRotation() * qQ) : -1 !== this.keysRotateUp.indexOf(WQ) ? wQ && (QQ.cameraRotation.x -= this._getLocalRotation() * qQ) : -1 !== this.keysRotateDown.indexOf(WQ) && wQ && (QQ.cameraRotation.x += this._getLocalRotation() * qQ)
            }
            if (XQ && (0 !== zQ.x || 0 !== zQ.y || 0 !== zQ.z)) {
              const WQ = QQ._computeLocalCameraSpeed() * (XQ.sensitivity ?? 1);
              zQ.normalize().scaleInPlace(WQ), QQ.sE().useRightHandedSystem && (zQ.z *= -1), QQ.getViewMatrix().invertToRef(QQ._cameraTransformMatrix), TQ.s.TransformNormalToRef(zQ, QQ._cameraTransformMatrix, QQ._transformedDirection), QQ.cameraDirection.addInPlace(QQ._transformedDirection)
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
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUp" in QQ,
            get: QQ => QQ.keysUp,
            set: (QQ, WQ) => {
              QQ.keysUp = WQ
            }
          },
          metadata: TQ
        }, VQ, DQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUpward" in QQ,
            get: QQ => QQ.keysUpward,
            set: (QQ, WQ) => {
              QQ.keysUpward = WQ
            }
          },
          metadata: TQ
        }, pQ, GQ), (0, wQ.k)(null, null, zQ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDown" in QQ,
            get: QQ => QQ.keysDown,
            set: (QQ, WQ) => {
              QQ.keysDown = WQ
            }
          },
          metadata: TQ
        }, UQ, bQ), (0, wQ.k)(null, null, sQ, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDownward" in QQ,
            get: QQ => QQ.keysDownward,
            set: (QQ, WQ) => {
              QQ.keysDownward = WQ
            }
          },
          metadata: TQ
        }, vQ, dQ), (0, wQ.k)(null, null, gQ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysLeft" in QQ,
            get: QQ => QQ.keysLeft,
            set: (QQ, WQ) => {
              QQ.keysLeft = WQ
            }
          },
          metadata: TQ
        }, HQ, aQ), (0, wQ.k)(null, null, JQ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRight" in QQ,
            get: QQ => QQ.keysRight,
            set: (QQ, WQ) => {
              QQ.keysRight = WQ
            }
          },
          metadata: TQ
        }, lQ, hQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rotationSpeed" in QQ,
            get: QQ => QQ.rotationSpeed,
            set: (QQ, WQ) => {
              QQ.rotationSpeed = WQ
            }
          },
          metadata: TQ
        }, iQ, cQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateLeft" in QQ,
            get: QQ => QQ.keysRotateLeft,
            set: (QQ, WQ) => {
              QQ.keysRotateLeft = WQ
            }
          },
          metadata: TQ
        }, AQ, RQ), (0, wQ.k)(null, null, jQ, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateRight" in QQ,
            get: QQ => QQ.keysRotateRight,
            set: (QQ, WQ) => {
              QQ.keysRotateRight = WQ
            }
          },
          metadata: TQ
        }, EQ, CQ), (0, wQ.k)(null, null, BQ, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateUp" in QQ,
            get: QQ => QQ.keysRotateUp,
            set: (QQ, WQ) => {
              QQ.keysRotateUp = WQ
            }
          },
          metadata: TQ
        }, uQ, LQ), (0, wQ.k)(null, null, yQ, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRotateDown" in QQ,
            get: QQ => QQ.keysRotateDown,
            set: (QQ, WQ) => {
              QQ.keysRotateDown = WQ
            }
          },
          metadata: TQ
        }, kQ, fQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ
    })();
    sQ.d.FreeCameraKeyboardMoveInput = gQ;
    var JQ = XQ(37399),
      rQ = XQ(40436);
    let IQ = (() => {
      var QQ;
      let WQ, XQ, TQ = [],
        zQ = [],
        sQ = [],
        FQ = [];
      return QQ = class {
        _applyPointerRotation(QQ, WQ) {
          this._pointerConditions.button = this._currentActiveButton;
          const XQ = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!XQ || "rotate" !== XQ.interaction) return;
          const wQ = XQ.lN ?? XQ.sensitivity ?? 1 / this.angularSensibility,
            qQ = XQ.hN ?? XQ.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += QQ * wQ, this.camera.cameraRotation.x += WQ * qQ
        }
        constructor() {
          let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = QQ, this.buttons = (0, wQ.n)(this, TQ, [0, 1, 2]), this.angularSensibility = ((0, wQ.n)(this, zQ), (0, wQ.n)(this, sQ, 2e3)), this._pointerInput = (0, wQ.n)(this, FQ), this._previousPosition = null, this.onPointerMovedObservable = new JQ.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(QQ) {
          QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments);
          const WQ = this.camera.Uj(),
            XQ = WQ.getInputElement();
          this._pointerInput || (this._pointerInput = wQ => {
            const qQ = wQ.event,
              TQ = "touch" === qQ.pointerType;
            if (!this.touchEnabled && TQ) return;
            if (wQ.type !== rQ.d.POINTERMOVE && -1 === this.buttons.indexOf(qQ.button)) return;
            const zQ = qQ.target;
            if (wQ.type === rQ.d.POINTERDOWN) {
              if (TQ && -1 !== this._activePointerId || !TQ && -1 !== this._currentActiveButton) return;
              this._activePointerId = qQ.pointerId;
              try {
                zQ?.setPointerCapture(qQ.pointerId)
              } catch (sQ) {} - 1 === this._currentActiveButton && (this._currentActiveButton = qQ.button), this._previousPosition = {
                x: qQ.clientX,
                y: qQ.clientY
              }, QQ || (qQ.preventDefault(), XQ && XQ.focus()), WQ.isPointerLock && this._onMouseMove && this._onMouseMove(wQ.event)
            } else if (wQ.type === rQ.d.POINTERUP) {
              if (TQ && this._activePointerId !== qQ.pointerId || !TQ && this._currentActiveButton !== qQ.button) return;
              try {
                zQ?.releasePointerCapture(qQ.pointerId)
              } catch (sQ) {}
              this._currentActiveButton = -1, this._previousPosition = null, QQ || qQ.preventDefault(), this._activePointerId = -1
            } else if (wQ.type === rQ.d.POINTERMOVE && (this._activePointerId === qQ.pointerId || !TQ))
              if (WQ.isPointerLock && this._onMouseMove) this._onMouseMove(wQ.event);
              else if (this._previousPosition) {
              const WQ = this.camera._calculateHandednessMultiplier(),
                XQ = (qQ.clientX - this._previousPosition.x) * WQ,
                wQ = (qQ.clientY - this._previousPosition.y) * WQ;
              this._allowCameraRotation && this._applyPointerRotation(XQ, wQ), this.onPointerMovedObservable.notifyObservers({
                offsetX: XQ,
                offsetY: wQ
              }), this._previousPosition = {
                x: qQ.clientX,
                y: qQ.clientY
              }, QQ || qQ.preventDefault()
            }
          }), this._onMouseMove = XQ => {
            if (!WQ.isPointerLock) return;
            const wQ = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(XQ.movementX * wQ, XQ.movementY * wQ), this._previousPosition = null, QQ || XQ.preventDefault()
          }, this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._pointerInput, rQ.d.POINTERDOWN | rQ.d.POINTERUP | rQ.d.POINTERMOVE), XQ && (this._contextMenuBind = QQ => this.onContextMenu(QQ), XQ.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(QQ) {
          QQ.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const QQ = this.camera.Uj().getInputElement();
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
        const PQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: QQ => "buttons" in QQ,
            get: QQ => QQ.buttons,
            set: (QQ, WQ) => {
              QQ.buttons = WQ
            }
          },
          metadata: PQ
        }, TQ, zQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "angularSensibility" in QQ,
            get: QQ => QQ.angularSensibility,
            set: (QQ, WQ) => {
              QQ.angularSensibility = WQ
            }
          },
          metadata: PQ
        }, sQ, FQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PQ
        })
      })(), QQ
    })();
    sQ.d.FreeCameraMouseInput = IQ;
    var jQ = XQ(40453);
    let BQ = (() => {
      var QQ;
      let WQ, XQ, TQ, zQ = [],
        sQ = [],
        FQ = [],
        gQ = [],
        IQ = [],
        BQ = [];
      return QQ = class {
        constructor() {
          this.wheelPrecisionX = (0, wQ.n)(this, zQ, 3), this.wheelPrecisionY = ((0, wQ.n)(this, sQ), (0, wQ.n)(this, FQ, 3)), this.wheelPrecisionZ = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, IQ, 3)), this.onChangedObservable = ((0, wQ.n)(this, BQ), new JQ.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(QQ) {
          QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = WQ => {
            if (WQ.type !== rQ.d.POINTERWHEEL) return;
            const XQ = WQ.event,
              wQ = XQ.deltaMode === jQ.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * wQ * XQ.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * wQ * XQ.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * wQ * XQ.deltaZ / this._normalize, XQ.preventDefault && (QQ || XQ.preventDefault())
          }, this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._wheel, rQ.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const PQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionX" in QQ,
            get: QQ => QQ.wheelPrecisionX,
            set: (QQ, WQ) => {
              QQ.wheelPrecisionX = WQ
            }
          },
          metadata: PQ
        }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionY" in QQ,
            get: QQ => QQ.wheelPrecisionY,
            set: (QQ, WQ) => {
              QQ.wheelPrecisionY = WQ
            }
          },
          metadata: PQ
        }, FQ, gQ), (0, wQ.k)(null, null, TQ, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecisionZ" in QQ,
            get: QQ => QQ.wheelPrecisionZ,
            set: (QQ, WQ) => {
              QQ.wheelPrecisionZ = WQ
            }
          },
          metadata: PQ
        }, IQ, BQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PQ
        })
      })(), QQ
    })();
    var yQ;
    ! function(QQ) {
      QQ[QQ.MoveRelative = 0] = "MoveRelative", QQ[QQ.RotateRelative = 1] = "RotateRelative", QQ[QQ.MoveScene = 2] = "MoveScene"
    }(yQ || (yQ = {}));
    let VQ = (() => {
      var QQ;
      let WQ, XQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ = BQ,
        jQ = [];
      return QQ = class extends IQ {
        constructor() {
          super(...arguments), this.camera = (0, wQ.n)(this, jQ), this._moveRelative = TQ.s.Zero(), this._rotateRelative = TQ.s.Zero(), this._moveScene = TQ.s.Zero(), this._wheelXAction = yQ.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = yQ.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(QQ) {
          null === QQ && this._wheelXAction !== yQ.MoveRelative || (this._wheelXAction = yQ.MoveRelative, this._wheelXActionCoordinate = QQ)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== yQ.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(QQ) {
          null === QQ && this._wheelYAction !== yQ.MoveRelative || (this._wheelYAction = yQ.MoveRelative, this._wheelYActionCoordinate = QQ)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== yQ.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(QQ) {
          null === QQ && this._wheelZAction !== yQ.MoveRelative || (this._wheelZAction = yQ.MoveRelative, this._wheelZActionCoordinate = QQ)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== yQ.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(QQ) {
          null === QQ && this._wheelXAction !== yQ.RotateRelative || (this._wheelXAction = yQ.RotateRelative, this._wheelXActionCoordinate = QQ)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== yQ.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(QQ) {
          null === QQ && this._wheelYAction !== yQ.RotateRelative || (this._wheelYAction = yQ.RotateRelative, this._wheelYActionCoordinate = QQ)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== yQ.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(QQ) {
          null === QQ && this._wheelZAction !== yQ.RotateRelative || (this._wheelZAction = yQ.RotateRelative, this._wheelZActionCoordinate = QQ)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== yQ.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(QQ) {
          null === QQ && this._wheelXAction !== yQ.MoveScene || (this._wheelXAction = yQ.MoveScene, this._wheelXActionCoordinate = QQ)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== yQ.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(QQ) {
          null === QQ && this._wheelYAction !== yQ.MoveScene || (this._wheelYAction = yQ.MoveScene, this._wheelYActionCoordinate = QQ)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== yQ.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(QQ) {
          null === QQ && this._wheelZAction !== yQ.MoveScene || (this._wheelZAction = yQ.MoveScene, this._wheelZActionCoordinate = QQ)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== yQ.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.h_(0), this._rotateRelative.h_(0), this._moveScene.h_(0), this._updateCamera(), this.camera.sE().useRightHandedSystem && (this._moveRelative.z *= -1);
          const QQ = TQ.e.Zero();
          this.camera.getViewMatrix().invertToRef(QQ);
          const WQ = TQ.s.Zero();
          TQ.s.TransformNormalToRef(this._moveRelative, QQ, WQ), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(WQ), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(QQ, WQ, XQ) {
          if (0 === QQ) return;
          if (null === WQ || null === XQ) return;
          let wQ = null;
          switch (WQ) {
            case yQ.MoveRelative:
              wQ = this._moveRelative;
              break;
            case yQ.RotateRelative:
              wQ = this._rotateRelative;
              break;
            case yQ.MoveScene:
              wQ = this._moveScene
          }
          switch (XQ) {
            case 0:
              wQ.set(QQ, 0, 0);
              break;
            case 1:
              wQ.set(0, QQ, 0);
              break;
            case 2:
              wQ.set(0, 0, QQ)
          }
        }
      }, (() => {
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(IQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, WQ, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXMoveRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelXMoveRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, XQ, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYMoveRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelYMoveRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, zQ, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZMoveRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelZMoveRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, sQ, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXRotateRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelXRotateRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, FQ, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYRotateRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelYRotateRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, PQ, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZRotateRelative" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelZRotateRelative = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, gQ, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelXMoveScene" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelXMoveScene = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, JQ, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelYMoveScene" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelYMoveScene = WQ
            }
          },
          metadata: TQ
        }, null, jQ), (0, wQ.k)(QQ, null, rQ, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelZMoveScene" in QQ,
            set: (QQ, WQ) => {
              QQ.wheelZMoveScene = WQ
            }
          },
          metadata: TQ
        }, null, jQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ
    })();
    sQ.d.FreeCameraMouseWheelInput = VQ;
    let DQ = (() => {
      var QQ;
      let WQ, XQ, zQ = [],
        sQ = [],
        FQ = [],
        gQ = [];
      return QQ = class {
        constructor() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = QQ, this.touchAngularSensibility = (0, wQ.n)(this, zQ, 2e5), this.touchMoveSensibility = ((0, wQ.n)(this, sQ), (0, wQ.n)(this, FQ, 250)), this.singleFingerRotate = ((0, wQ.n)(this, gQ), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = PQ.g.IsSafari()
        }
        attachControl(QQ) {
          QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments);
          let WQ = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = XQ => {
              const wQ = XQ.event,
                qQ = "mouse" === wQ.pointerType || this._isSafari && "undefined" === typeof wQ.pointerType;
              if (this.allowMouse || !qQ)
                if (XQ.type === rQ.d.POINTERDOWN) {
                  if (QQ || wQ.preventDefault(), this._pointerPressed.push(wQ.pointerId), 1 !== this._pointerPressed.length) return;
                  WQ = {
                    x: wQ.clientX,
                    y: wQ.clientY
                  }
                } else if (XQ.type === rQ.d.POINTERUP) {
                QQ || wQ.preventDefault();
                const XQ = this._pointerPressed.indexOf(wQ.pointerId);
                if (-1 === XQ) return;
                if (this._pointerPressed.splice(XQ, 1), 0 != XQ) return;
                WQ = null, this._offsetX = null, this._offsetY = null
              } else if (XQ.type === rQ.d.POINTERMOVE) {
                if (QQ || wQ.preventDefault(), !WQ) return;
                if (0 != this._pointerPressed.indexOf(wQ.pointerId)) return;
                this._offsetX = wQ.clientX - WQ.x, this._offsetY = -(wQ.clientY - WQ.y)
              }
            }), this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._pointerInput, rQ.d.POINTERDOWN | rQ.d.POINTERUP | rQ.d.POINTERMOVE), this._onLostFocus) {
            const QQ = this.camera.Uj().getInputElement();
            QQ && QQ.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const QQ = this.camera.Uj().getInputElement();
              QQ && QQ.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const QQ = this.camera,
            WQ = QQ.movement.input,
            XQ = WQ.getEntry("touch", "rotate"),
            wQ = WQ.getEntry("touch", "translate"),
            qQ = QQ._calculateHandednessMultiplier(),
            zQ = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (XQ) {
            const WQ = XQ.sensitivity ?? 1 / this.touchAngularSensibility;
            QQ.cameraRotation.y = this._offsetX * qQ * WQ, zQ && (QQ.cameraRotation.x = -this._offsetY * qQ * WQ)
          }
          if (!zQ && wQ) {
            const WQ = QQ._computeLocalCameraSpeed(),
              XQ = wQ.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              qQ = TQ.m.vj[0];
            qQ.XQQ(0, 0, WQ * this._offsetY * XQ), TQ.e.RotationYawPitchRollToRef(QQ.rotation.y, QQ.rotation.x, 0, QQ._cameraRotationMatrix), TQ.s.TransformCoordinatesToRef(qQ, QQ._cameraRotationMatrix, qQ), QQ.cameraDirection.addInPlace(qQ)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "touchAngularSensibility" in QQ,
            get: QQ => QQ.touchAngularSensibility,
            set: (QQ, WQ) => {
              QQ.touchAngularSensibility = WQ
            }
          },
          metadata: TQ
        }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "touchMoveSensibility" in QQ,
            get: QQ => QQ.touchMoveSensibility,
            set: (QQ, WQ) => {
              QQ.touchMoveSensibility = WQ
            }
          },
          metadata: TQ
        }, FQ, gQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ
    })();
    sQ.d.FreeCameraTouchInput = DQ;
    var pQ, GQ, UQ, bQ = XQ(40153);
    class vQ extends sQ.g {
      constructor(QQ) {
        super(QQ), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new gQ), this
      }
      addMouse() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new IQ(QQ), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new VQ, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new DQ), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(pQ = vQ.prototype).addDeviceOrientation ?? (pQ.addDeviceOrientation = (0, bQ.h)("FreeCameraInputsManager", "addDeviceOrientation")), (GQ = vQ.prototype).addVirtualJoystick ?? (GQ.addVirtualJoystick = (0, bQ.h)("FreeCameraInputsManager", "addVirtualJoystick")), (UQ = vQ.prototype).addGamepad ?? (UQ.addGamepad = (0, bQ.h)("FreeCameraInputsManager", "addGamepad"));
    var dQ = XQ(40170),
      HQ = XQ(37418);
    let aQ = (() => {
        var QQ;
        let WQ, XQ, sQ, FQ, gQ = zQ.c,
          JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [];
        return QQ = class extends gQ {
          get angularSensibility() {
            const QQ = this.inputs.attached.mouse;
            return QQ ? QQ.angularSensibility : 0
          }
          set angularSensibility(QQ) {
            const WQ = this.inputs.attached.mouse;
            WQ && (WQ.angularSensibility = QQ)
          }
          get keysUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUp : []
          }
          set keysUp(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysUp = QQ)
          }
          get keysUpward() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUpward : []
          }
          set keysUpward(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysUpward = QQ)
          }
          get keysDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDown : []
          }
          set keysDown(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysDown = QQ)
          }
          get keysDownward() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDownward : []
          }
          set keysDownward(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysDownward = QQ)
          }
          get keysLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysLeft : []
          }
          set keysLeft(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysLeft = QQ)
          }
          get keysRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRight : []
          }
          set keysRight(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRight = QQ)
          }
          get keysRotateLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateLeft : []
          }
          set keysRotateLeft(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRotateLeft = QQ)
          }
          get keysRotateRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateRight : []
          }
          set keysRotateRight(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRotateRight = QQ)
          }
          get keysRotateUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateUp : []
          }
          set keysRotateUp(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRotateUp = QQ)
          }
          get keysRotateDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRotateDown : []
          }
          set keysRotateDown(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRotateDown = QQ)
          }
          constructor(QQ, WQ, XQ) {
            var qQ;
            super(QQ, WQ, XQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), qQ = this, this.ellipsoid = (0, wQ.n)(this, JQ, new TQ.s(.5, 1, .5)), this.ellipsoidOffset = ((0, wQ.n)(this, rQ), (0, wQ.n)(this, IQ, new TQ.s(0, 0, 0))), this.checkCollisions = ((0, wQ.n)(this, jQ), (0, wQ.n)(this, BQ, !1)), this.applyGravity = ((0, wQ.n)(this, yQ), (0, wQ.n)(this, VQ, !1)), this.inputs = (0, wQ.n)(this, DQ), this._needMoveForGravity = !1, this._oldPosition = TQ.s.Zero(), this._diffPosition = TQ.s.Zero(), this._newPosition = TQ.s.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(QQ, WQ) {
              let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              qQ._newPosition.WH(WQ), qQ._newPosition.subtractToRef(qQ._oldPosition, qQ._diffPosition), qQ._diffPosition.length() > dQ.d.CollisionsEpsilon && (qQ.position.addToRef(qQ._diffPosition, qQ._deferredPositionUpdate), qQ._deferOnly ? qQ._deferredUpdated = !0 : qQ.position.WH(qQ._deferredPositionUpdate), qQ.Xr && XQ && qQ.Xr(XQ))
            }, this.inputs = new vQ(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(QQ, WQ) {
            WQ = PQ.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(WQ)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new TQ.s(0, 0, 0), this.cameraRotation = new TQ.q(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(QQ) {
            this._collisionMask = isNaN(QQ) ? -1 : QQ
          }
          _collideWithWorld(QQ) {
            let WQ;
            WQ = this.parent ? TQ.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, WQ.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const XQ = this.sE().collisionCoordinator;
            this._collider || (this._collider = XQ.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let wQ = QQ;
            this.applyGravity && (wQ = QQ.add(this.sE().gravity)), XQ.getNewPosition(this._oldPosition, wQ, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = TQ.s.Zero(), this._transformedDirection = TQ.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.sE().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(gQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.F)()], XQ = [(0, qQ.F)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ellipsoid" in QQ,
              get: QQ => QQ.ellipsoid,
              set: (QQ, WQ) => {
                QQ.ellipsoid = WQ
              }
            },
            metadata: TQ
          }, JQ, rQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ellipsoidOffset" in QQ,
              get: QQ => QQ.ellipsoidOffset,
              set: (QQ, WQ) => {
                QQ.ellipsoidOffset = WQ
              }
            },
            metadata: TQ
          }, IQ, jQ), (0, wQ.k)(null, null, sQ, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: QQ => "checkCollisions" in QQ,
              get: QQ => QQ.checkCollisions,
              set: (QQ, WQ) => {
                QQ.checkCollisions = WQ
              }
            },
            metadata: TQ
          }, BQ, yQ), (0, wQ.k)(null, null, FQ, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyGravity" in QQ,
              get: QQ => QQ.applyGravity,
              set: (QQ, WQ) => {
                QQ.applyGravity = WQ
              }
            },
            metadata: TQ
          }, VQ, DQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      lQ = !1;
    lQ || (lQ = !0, (0, HQ.d)("BABYLON.FreeCamera", aQ))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
export const id = 293;
export const ids = [293];
export const modules = {
  41719: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => pR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(41723),
      qR = GR(41764),
      iR = GR(41705),
      fR = GR(41616);
    let VR = (() => {
      var RR;
      let JR, GR, ZR, qR, VR, KR, wR, rR, eR, aR, LR, nR = [],
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        lR = [],
        pR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [];
      return RR = class {
        constructor() {
          this.keysUp = (0, yR.m)(this, nR, [38]), this.keysUpward = ((0, yR.m)(this, UR), (0, yR.m)(this, WR, [33])), this.keysDown = ((0, yR.m)(this, AR), (0, yR.m)(this, CR, [40])), this.keysDownward = ((0, yR.m)(this, XR), (0, yR.m)(this, MR, [34])), this.keysLeft = ((0, yR.m)(this, BR), (0, yR.m)(this, lR, [37])), this.keysRight = ((0, yR.m)(this, pR), (0, yR.m)(this, gR, [39])), this.rotationSpeed = ((0, yR.m)(this, bR), (0, yR.m)(this, vR, .5)), this.keysRotateLeft = ((0, yR.m)(this, OR), (0, yR.m)(this, xR, [])), this.keysRotateRight = ((0, yR.m)(this, NR), (0, yR.m)(this, DR, [])), this.keysRotateUp = ((0, yR.m)(this, HR), (0, yR.m)(this, oR, [])), this.keysRotateDown = ((0, yR.m)(this, cR), (0, yR.m)(this, PR, [])), this._keys = ((0, yR.m)(this, IR), new Array)
        }
        attachControl(RR) {
          RR = fR.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.jH(), this._engine = this._scene.ke(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((JR => {
            const GR = JR.event;
            if (!GR.metaKey)
              if (JR.type === iR.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(GR.keyCode) || -1 !== this.keysDown.indexOf(GR.keyCode) || -1 !== this.keysLeft.indexOf(GR.keyCode) || -1 !== this.keysRight.indexOf(GR.keyCode) || -1 !== this.keysUpward.indexOf(GR.keyCode) || -1 !== this.keysDownward.indexOf(GR.keyCode) || -1 !== this.keysRotateLeft.indexOf(GR.keyCode) || -1 !== this.keysRotateRight.indexOf(GR.keyCode) || -1 !== this.keysRotateUp.indexOf(GR.keyCode) || -1 !== this.keysRotateDown.indexOf(GR.keyCode)) {
                  -1 === this._keys.indexOf(GR.keyCode) && this._keys.push(GR.keyCode), RR || GR.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(GR.keyCode) || -1 !== this.keysDown.indexOf(GR.keyCode) || -1 !== this.keysLeft.indexOf(GR.keyCode) || -1 !== this.keysRight.indexOf(GR.keyCode) || -1 !== this.keysUpward.indexOf(GR.keyCode) || -1 !== this.keysDownward.indexOf(GR.keyCode) || -1 !== this.keysRotateLeft.indexOf(GR.keyCode) || -1 !== this.keysRotateRight.indexOf(GR.keyCode) || -1 !== this.keysRotateUp.indexOf(GR.keyCode) || -1 !== this.keysRotateDown.indexOf(GR.keyCode)) {
              const JR = this._keys.indexOf(GR.keyCode);
              JR >= 0 && this._keys.splice(JR, 1), RR || GR.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const RR = this.camera,
              JR = RR.movement.input,
              GR = JR.getEntry("keyboard", "translate"),
              yR = JR.getEntry("keyboard", "rotate"),
              tR = yR?.sensitivity ?? 1,
              ZR = RR._localDirection.VJR(0, 0, 0);
            for (let uR = 0; uR < this._keys.length; uR++) {
              const JR = this._keys[uR]; - 1 !== this.keysLeft.indexOf(JR) ? ZR.x -= 1 : -1 !== this.keysUp.indexOf(JR) ? ZR.z += 1 : -1 !== this.keysRight.indexOf(JR) ? ZR.x += 1 : -1 !== this.keysDown.indexOf(JR) ? ZR.z -= 1 : -1 !== this.keysUpward.indexOf(JR) ? ZR.y += 1 : -1 !== this.keysDownward.indexOf(JR) ? ZR.y -= 1 : -1 !== this.keysRotateLeft.indexOf(JR) ? yR && (RR.cameraRotation.y -= this._getLocalRotation() * tR) : -1 !== this.keysRotateRight.indexOf(JR) ? yR && (RR.cameraRotation.y += this._getLocalRotation() * tR) : -1 !== this.keysRotateUp.indexOf(JR) ? yR && (RR.cameraRotation.x -= this._getLocalRotation() * tR) : -1 !== this.keysRotateDown.indexOf(JR) && yR && (RR.cameraRotation.x += this._getLocalRotation() * tR)
            }
            if (GR && (0 !== ZR.x || 0 !== ZR.y || 0 !== ZR.z)) {
              const JR = RR._computeLocalCameraSpeed() * (GR.sensitivity ?? 1);
              ZR.normalize().scaleInPlace(JR), RR.jH().useRightHandedSystem && (ZR.z *= -1), RR.getViewMatrix().invertToRef(RR._cameraTransformMatrix), uR.r.TransformNormalToRef(ZR, RR._cameraTransformMatrix, RR._transformedDirection), RR.cameraDirection.addInPlace(RR._transformedDirection)
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
          const RR = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * RR
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], ZR = [(0, tR.H)()], qR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], LR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysUp" in RR,
            get: RR => RR.keysUp,
            set: (RR, JR) => {
              RR.keysUp = JR
            }
          },
          metadata: uR
        }, nR, UR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysUpward" in RR,
            get: RR => RR.keysUpward,
            set: (RR, JR) => {
              RR.keysUpward = JR
            }
          },
          metadata: uR
        }, WR, AR), (0, yR.l)(null, null, ZR, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysDown" in RR,
            get: RR => RR.keysDown,
            set: (RR, JR) => {
              RR.keysDown = JR
            }
          },
          metadata: uR
        }, CR, XR), (0, yR.l)(null, null, qR, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysDownward" in RR,
            get: RR => RR.keysDownward,
            set: (RR, JR) => {
              RR.keysDownward = JR
            }
          },
          metadata: uR
        }, MR, BR), (0, yR.l)(null, null, VR, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysLeft" in RR,
            get: RR => RR.keysLeft,
            set: (RR, JR) => {
              RR.keysLeft = JR
            }
          },
          metadata: uR
        }, lR, pR), (0, yR.l)(null, null, KR, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysRight" in RR,
            get: RR => RR.keysRight,
            set: (RR, JR) => {
              RR.keysRight = JR
            }
          },
          metadata: uR
        }, gR, bR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: RR => "rotationSpeed" in RR,
            get: RR => RR.rotationSpeed,
            set: (RR, JR) => {
              RR.rotationSpeed = JR
            }
          },
          metadata: uR
        }, vR, OR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysRotateLeft" in RR,
            get: RR => RR.keysRotateLeft,
            set: (RR, JR) => {
              RR.keysRotateLeft = JR
            }
          },
          metadata: uR
        }, xR, NR), (0, yR.l)(null, null, eR, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysRotateRight" in RR,
            get: RR => RR.keysRotateRight,
            set: (RR, JR) => {
              RR.keysRotateRight = JR
            }
          },
          metadata: uR
        }, DR, HR), (0, yR.l)(null, null, aR, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysRotateUp" in RR,
            get: RR => RR.keysRotateUp,
            set: (RR, JR) => {
              RR.keysRotateUp = JR
            }
          },
          metadata: uR
        }, oR, cR), (0, yR.l)(null, null, LR, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysRotateDown" in RR,
            get: RR => RR.keysRotateDown,
            set: (RR, JR) => {
              RR.keysRotateDown = JR
            }
          },
          metadata: uR
        }, PR, IR), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR
    })();
    qR.e.FreeCameraKeyboardMoveInput = VR;
    var KR = GR(38233),
      wR = GR(41701);
    let rR = (() => {
      var RR;
      let JR, GR, uR = [],
        ZR = [],
        qR = [],
        iR = [];
      return RR = class {
        _applyPointerRotation(RR, JR) {
          this._pointerConditions.button = this._currentActiveButton;
          const GR = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!GR || "rotate" !== GR.interaction) return;
          const yR = GR.W9 ?? GR.sensitivity ?? 1 / this.angularSensibility,
            tR = GR.N9 ?? GR.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += RR * yR, this.camera.cameraRotation.x += JR * tR
        }
        constructor() {
          let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = RR, this.buttons = (0, yR.m)(this, uR, [0, 1, 2]), this.angularSensibility = ((0, yR.m)(this, ZR), (0, yR.m)(this, qR, 2e3)), this._pointerInput = (0, yR.m)(this, iR), this._previousPosition = null, this.onPointerMovedObservable = new KR.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(RR) {
          RR = fR.h.BackCompatCameraNoPreventDefault(arguments);
          const JR = this.camera.ke(),
            GR = JR.getInputElement();
          this._pointerInput || (this._pointerInput = yR => {
            const tR = yR.event,
              uR = "touch" === tR.pointerType;
            if (!this.touchEnabled && uR) return;
            if (yR.type !== wR.c.POINTERMOVE && -1 === this.buttons.indexOf(tR.button)) return;
            const ZR = tR.target;
            if (yR.type === wR.c.POINTERDOWN) {
              if (uR && -1 !== this._activePointerId || !uR && -1 !== this._currentActiveButton) return;
              this._activePointerId = tR.pointerId;
              try {
                ZR?.setPointerCapture(tR.pointerId)
              } catch (qR) {} - 1 === this._currentActiveButton && (this._currentActiveButton = tR.button), this._previousPosition = {
                x: tR.clientX,
                y: tR.clientY
              }, RR || (tR.preventDefault(), GR && GR.focus()), JR.isPointerLock && this._onMouseMove && this._onMouseMove(yR.event)
            } else if (yR.type === wR.c.POINTERUP) {
              if (uR && this._activePointerId !== tR.pointerId || !uR && this._currentActiveButton !== tR.button) return;
              try {
                ZR?.releasePointerCapture(tR.pointerId)
              } catch (qR) {}
              this._currentActiveButton = -1, this._previousPosition = null, RR || tR.preventDefault(), this._activePointerId = -1
            } else if (yR.type === wR.c.POINTERMOVE && (this._activePointerId === tR.pointerId || !uR))
              if (JR.isPointerLock && this._onMouseMove) this._onMouseMove(yR.event);
              else if (this._previousPosition) {
              const JR = this.camera._calculateHandednessMultiplier(),
                GR = (tR.clientX - this._previousPosition.x) * JR,
                yR = (tR.clientY - this._previousPosition.y) * JR;
              this._allowCameraRotation && this._applyPointerRotation(GR, yR), this.onPointerMovedObservable.notifyObservers({
                offsetX: GR,
                offsetY: yR
              }), this._previousPosition = {
                x: tR.clientX,
                y: tR.clientY
              }, RR || tR.preventDefault()
            }
          }), this._onMouseMove = GR => {
            if (!JR.isPointerLock) return;
            const yR = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(GR.movementX * yR, GR.movementY * yR), this._previousPosition = null, RR || GR.preventDefault()
          }, this._observer = this.camera.jH()._inputManager._addCameraPointerObserver(this._pointerInput, wR.c.POINTERDOWN | wR.c.POINTERUP | wR.c.POINTERMOVE), GR && (this._contextMenuBind = RR => this.onContextMenu(RR), GR.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(RR) {
          RR.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.jH()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const RR = this.camera.ke().getInputElement();
              RR && RR.removeEventListener("contextmenu", this._contextMenuBind)
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
        const fR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: RR => "buttons" in RR,
            get: RR => RR.buttons,
            set: (RR, JR) => {
              RR.buttons = JR
            }
          },
          metadata: fR
        }, uR, ZR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: RR => "angularSensibility" in RR,
            get: RR => RR.angularSensibility,
            set: (RR, JR) => {
              RR.angularSensibility = JR
            }
          },
          metadata: fR
        }, qR, iR), fR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fR
        })
      })(), RR
    })();
    qR.e.FreeCameraMouseInput = rR;
    var eR = GR(41707);
    let aR = (() => {
      var RR;
      let JR, GR, uR, ZR = [],
        qR = [],
        iR = [],
        VR = [],
        rR = [],
        aR = [];
      return RR = class {
        constructor() {
          this.wheelPrecisionX = (0, yR.m)(this, ZR, 3), this.wheelPrecisionY = ((0, yR.m)(this, qR), (0, yR.m)(this, iR, 3)), this.wheelPrecisionZ = ((0, yR.m)(this, VR), (0, yR.m)(this, rR, 3)), this.onChangedObservable = ((0, yR.m)(this, aR), new KR.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(RR) {
          RR = fR.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = JR => {
            if (JR.type !== wR.c.POINTERWHEEL) return;
            const GR = JR.event,
              yR = GR.deltaMode === eR.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * yR * GR.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * yR * GR.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * yR * GR.deltaZ / this._normalize, GR.preventDefault && (RR || GR.preventDefault())
          }, this._observer = this.camera.jH()._inputManager._addCameraPointerObserver(this._wheel, wR.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.jH()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const fR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelPrecisionX" in RR,
            get: RR => RR.wheelPrecisionX,
            set: (RR, JR) => {
              RR.wheelPrecisionX = JR
            }
          },
          metadata: fR
        }, ZR, qR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelPrecisionY" in RR,
            get: RR => RR.wheelPrecisionY,
            set: (RR, JR) => {
              RR.wheelPrecisionY = JR
            }
          },
          metadata: fR
        }, iR, VR), (0, yR.l)(null, null, uR, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelPrecisionZ" in RR,
            get: RR => RR.wheelPrecisionZ,
            set: (RR, JR) => {
              RR.wheelPrecisionZ = JR
            }
          },
          metadata: fR
        }, rR, aR), fR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fR
        })
      })(), RR
    })();
    var LR;
    ! function(RR) {
      RR[RR.MoveRelative = 0] = "MoveRelative", RR[RR.RotateRelative = 1] = "RotateRelative", RR[RR.MoveScene = 2] = "MoveScene"
    }(LR || (LR = {}));
    let nR = (() => {
      var RR;
      let JR, GR, ZR, qR, iR, fR, VR, KR, wR, rR = aR,
        eR = [];
      return RR = class extends rR {
        constructor() {
          super(...arguments), this.camera = (0, yR.m)(this, eR), this._moveRelative = uR.r.Zero(), this._rotateRelative = uR.r.Zero(), this._moveScene = uR.r.Zero(), this._wheelXAction = LR.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = LR.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(RR) {
          null === RR && this._wheelXAction !== LR.MoveRelative || (this._wheelXAction = LR.MoveRelative, this._wheelXActionCoordinate = RR)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== LR.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(RR) {
          null === RR && this._wheelYAction !== LR.MoveRelative || (this._wheelYAction = LR.MoveRelative, this._wheelYActionCoordinate = RR)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== LR.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(RR) {
          null === RR && this._wheelZAction !== LR.MoveRelative || (this._wheelZAction = LR.MoveRelative, this._wheelZActionCoordinate = RR)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== LR.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(RR) {
          null === RR && this._wheelXAction !== LR.RotateRelative || (this._wheelXAction = LR.RotateRelative, this._wheelXActionCoordinate = RR)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== LR.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(RR) {
          null === RR && this._wheelYAction !== LR.RotateRelative || (this._wheelYAction = LR.RotateRelative, this._wheelYActionCoordinate = RR)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== LR.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(RR) {
          null === RR && this._wheelZAction !== LR.RotateRelative || (this._wheelZAction = LR.RotateRelative, this._wheelZActionCoordinate = RR)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== LR.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(RR) {
          null === RR && this._wheelXAction !== LR.MoveScene || (this._wheelXAction = LR.MoveScene, this._wheelXActionCoordinate = RR)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== LR.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(RR) {
          null === RR && this._wheelYAction !== LR.MoveScene || (this._wheelYAction = LR.MoveScene, this._wheelYActionCoordinate = RR)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== LR.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(RR) {
          null === RR && this._wheelZAction !== LR.MoveScene || (this._wheelZAction = LR.MoveScene, this._wheelZActionCoordinate = RR)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== LR.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.NRR(0), this._rotateRelative.NRR(0), this._moveScene.NRR(0), this._updateCamera(), this.camera.jH().useRightHandedSystem && (this._moveRelative.z *= -1);
          const RR = uR.e.Zero();
          this.camera.getViewMatrix().invertToRef(RR);
          const JR = uR.r.Zero();
          uR.r.TransformNormalToRef(this._moveRelative, RR, JR), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(JR), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(RR, JR, GR) {
          if (0 === RR) return;
          if (null === JR || null === GR) return;
          let yR = null;
          switch (JR) {
            case LR.MoveRelative:
              yR = this._moveRelative;
              break;
            case LR.RotateRelative:
              yR = this._rotateRelative;
              break;
            case LR.MoveScene:
              yR = this._moveScene
          }
          switch (GR) {
            case 0:
              yR.set(RR, 0, 0);
              break;
            case 1:
              yR.set(0, RR, 0);
              break;
            case 2:
              yR.set(0, 0, RR)
          }
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(rR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], ZR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], (0, yR.l)(RR, null, JR, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelXMoveRelative" in RR,
            set: (RR, JR) => {
              RR.wheelXMoveRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, GR, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelYMoveRelative" in RR,
            set: (RR, JR) => {
              RR.wheelYMoveRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, ZR, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelZMoveRelative" in RR,
            set: (RR, JR) => {
              RR.wheelZMoveRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, qR, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelXRotateRelative" in RR,
            set: (RR, JR) => {
              RR.wheelXRotateRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, iR, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelYRotateRelative" in RR,
            set: (RR, JR) => {
              RR.wheelYRotateRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, fR, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelZRotateRelative" in RR,
            set: (RR, JR) => {
              RR.wheelZRotateRelative = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, VR, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelXMoveScene" in RR,
            set: (RR, JR) => {
              RR.wheelXMoveScene = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, KR, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelYMoveScene" in RR,
            set: (RR, JR) => {
              RR.wheelYMoveScene = JR
            }
          },
          metadata: uR
        }, null, eR), (0, yR.l)(RR, null, wR, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelZMoveScene" in RR,
            set: (RR, JR) => {
              RR.wheelZMoveScene = JR
            }
          },
          metadata: uR
        }, null, eR), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR
    })();
    qR.e.FreeCameraMouseWheelInput = nR;
    let UR = (() => {
      var RR;
      let JR, GR, ZR = [],
        qR = [],
        iR = [],
        VR = [];
      return RR = class {
        constructor() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = RR, this.touchAngularSensibility = (0, yR.m)(this, ZR, 2e5), this.touchMoveSensibility = ((0, yR.m)(this, qR), (0, yR.m)(this, iR, 250)), this.singleFingerRotate = ((0, yR.m)(this, VR), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = fR.h.IsSafari()
        }
        attachControl(RR) {
          RR = fR.h.BackCompatCameraNoPreventDefault(arguments);
          let JR = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = GR => {
              const yR = GR.event,
                tR = "mouse" === yR.pointerType || this._isSafari && "undefined" === typeof yR.pointerType;
              if (this.allowMouse || !tR)
                if (GR.type === wR.c.POINTERDOWN) {
                  if (RR || yR.preventDefault(), this._pointerPressed.push(yR.pointerId), 1 !== this._pointerPressed.length) return;
                  JR = {
                    x: yR.clientX,
                    y: yR.clientY
                  }
                } else if (GR.type === wR.c.POINTERUP) {
                RR || yR.preventDefault();
                const GR = this._pointerPressed.indexOf(yR.pointerId);
                if (-1 === GR) return;
                if (this._pointerPressed.splice(GR, 1), 0 != GR) return;
                JR = null, this._offsetX = null, this._offsetY = null
              } else if (GR.type === wR.c.POINTERMOVE) {
                if (RR || yR.preventDefault(), !JR) return;
                if (0 != this._pointerPressed.indexOf(yR.pointerId)) return;
                this._offsetX = yR.clientX - JR.x, this._offsetY = -(yR.clientY - JR.y)
              }
            }), this._observer = this.camera.jH()._inputManager._addCameraPointerObserver(this._pointerInput, wR.c.POINTERDOWN | wR.c.POINTERUP | wR.c.POINTERMOVE), this._onLostFocus) {
            const RR = this.camera.ke().getInputElement();
            RR && RR.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.jH()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const RR = this.camera.ke().getInputElement();
              RR && RR.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const RR = this.camera,
            JR = RR.movement.input,
            GR = JR.getEntry("touch", "rotate"),
            yR = JR.getEntry("touch", "translate"),
            tR = RR._calculateHandednessMultiplier(),
            ZR = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (GR) {
            const JR = GR.sensitivity ?? 1 / this.touchAngularSensibility;
            RR.cameraRotation.y = this._offsetX * tR * JR, ZR && (RR.cameraRotation.x = -this._offsetY * tR * JR)
          }
          if (!ZR && yR) {
            const JR = RR._computeLocalCameraSpeed(),
              GR = yR.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              tR = uR.l.Fe[0];
            tR.VJR(0, 0, JR * this._offsetY * GR), uR.e.RotationYawPitchRollToRef(RR.rotation.y, RR.rotation.x, 0, RR._cameraRotationMatrix), uR.r.TransformCoordinatesToRef(tR, RR._cameraRotationMatrix, tR), RR.cameraDirection.addInPlace(tR)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: RR => "touchAngularSensibility" in RR,
            get: RR => RR.touchAngularSensibility,
            set: (RR, JR) => {
              RR.touchAngularSensibility = JR
            }
          },
          metadata: uR
        }, ZR, qR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: RR => "touchMoveSensibility" in RR,
            get: RR => RR.touchMoveSensibility,
            set: (RR, JR) => {
              RR.touchMoveSensibility = JR
            }
          },
          metadata: uR
        }, iR, VR), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR
    })();
    qR.e.FreeCameraTouchInput = UR;
    var WR, AR, CR, XR = GR(41407);
    class MR extends qR.i {
      constructor(RR) {
        super(RR), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new VR), this
      }
      addMouse() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new rR(RR), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new nR, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new UR), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(WR = MR.prototype).addDeviceOrientation ?? (WR.addDeviceOrientation = (0, XR.f)("FreeCameraInputsManager", "addDeviceOrientation")), (AR = MR.prototype).addVirtualJoystick ?? (AR.addVirtualJoystick = (0, XR.f)("FreeCameraInputsManager", "addVirtualJoystick")), (CR = MR.prototype).addGamepad ?? (CR.addGamepad = (0, XR.f)("FreeCameraInputsManager", "addGamepad"));
    var BR = GR(41418),
      lR = GR(38253);
    let pR = (() => {
        var RR;
        let JR, GR, qR, iR, VR = ZR.f,
          KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [],
          nR = [],
          UR = [];
        return RR = class extends VR {
          get angularSensibility() {
            const RR = this.inputs.attached.mouse;
            return RR ? RR.angularSensibility : 0
          }
          set angularSensibility(RR) {
            const JR = this.inputs.attached.mouse;
            JR && (JR.angularSensibility = RR)
          }
          get keysUp() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysUp : []
          }
          set keysUp(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysUp = RR)
          }
          get keysUpward() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysUpward : []
          }
          set keysUpward(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysUpward = RR)
          }
          get keysDown() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysDown : []
          }
          set keysDown(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysDown = RR)
          }
          get keysDownward() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysDownward : []
          }
          set keysDownward(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysDownward = RR)
          }
          get keysLeft() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysLeft : []
          }
          set keysLeft(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysLeft = RR)
          }
          get keysRight() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysRight : []
          }
          set keysRight(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysRight = RR)
          }
          get keysRotateLeft() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysRotateLeft : []
          }
          set keysRotateLeft(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysRotateLeft = RR)
          }
          get keysRotateRight() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysRotateRight : []
          }
          set keysRotateRight(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysRotateRight = RR)
          }
          get keysRotateUp() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysRotateUp : []
          }
          set keysRotateUp(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysRotateUp = RR)
          }
          get keysRotateDown() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysRotateDown : []
          }
          set keysRotateDown(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysRotateDown = RR)
          }
          constructor(RR, JR, GR) {
            var tR;
            super(RR, JR, GR, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), tR = this, this.ellipsoid = (0, yR.m)(this, KR, new uR.r(.5, 1, .5)), this.ellipsoidOffset = ((0, yR.m)(this, wR), (0, yR.m)(this, rR, new uR.r(0, 0, 0))), this.checkCollisions = ((0, yR.m)(this, eR), (0, yR.m)(this, aR, !1)), this.applyGravity = ((0, yR.m)(this, LR), (0, yR.m)(this, nR, !1)), this.inputs = (0, yR.m)(this, UR), this._needMoveForGravity = !1, this._oldPosition = uR.r.Zero(), this._diffPosition = uR.r.Zero(), this._newPosition = uR.r.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(RR, JR) {
              let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              tR._newPosition.vN(JR), tR._newPosition.subtractToRef(tR._oldPosition, tR._diffPosition), tR._diffPosition.length() > BR.c.CollisionsEpsilon && (tR.position.addToRef(tR._diffPosition, tR._deferredPositionUpdate), tR._deferOnly ? tR._deferredUpdated = !0 : tR.position.vN(tR._deferredPositionUpdate), tR.Pw && GR && tR.Pw(GR))
            }, this.inputs = new MR(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(RR, JR) {
            JR = fR.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(JR)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new uR.r(0, 0, 0), this.cameraRotation = new uR.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(RR) {
            this._collisionMask = isNaN(RR) ? -1 : RR
          }
          _collideWithWorld(RR) {
            let JR;
            JR = this.parent ? uR.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, JR.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const GR = this.jH().collisionCoordinator;
            this._collider || (this._collider = GR.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let yR = RR;
            this.applyGravity && (yR = RR.add(this.jH().gravity)), GR.getNewPosition(this._oldPosition, yR, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = uR.r.Zero(), this._transformedDirection = uR.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(RR) {
            this._needMoveForGravity = RR
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.jH().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(VR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.G)()], GR = [(0, tR.G)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: RR => "ellipsoid" in RR,
              get: RR => RR.ellipsoid,
              set: (RR, JR) => {
                RR.ellipsoid = JR
              }
            },
            metadata: uR
          }, KR, wR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "ellipsoidOffset" in RR,
              get: RR => RR.ellipsoidOffset,
              set: (RR, JR) => {
                RR.ellipsoidOffset = JR
              }
            },
            metadata: uR
          }, rR, eR), (0, yR.l)(null, null, qR, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: RR => "checkCollisions" in RR,
              get: RR => RR.checkCollisions,
              set: (RR, JR) => {
                RR.checkCollisions = JR
              }
            },
            metadata: uR
          }, aR, LR), (0, yR.l)(null, null, iR, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: RR => "applyGravity" in RR,
              get: RR => RR.applyGravity,
              set: (RR, JR) => {
                RR.applyGravity = JR
              }
            },
            metadata: uR
          }, nR, UR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      gR = !1;
    gR || (gR = !0, (0, lR.f)("BABYLON.FreeCamera", pR))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
export const id = 262;
export const ids = [262];
export const modules = {
  40582: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => WG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(40585),
      kG = ZG(40623),
      UG = ZG(40554),
      YG = ZG(40477);
    let VG = (() => {
      var GG;
      let bG, ZG, yG, kG, VG, pG, fG, QG, KG, hG, dG, JG = [],
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        CG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [];
      return GG = class {
        constructor() {
          this.keysUp = (0, wG.n)(this, JG, [38]), this.keysUpward = ((0, wG.n)(this, rG), (0, wG.n)(this, zG, [33])), this.keysDown = ((0, wG.n)(this, EG), (0, wG.n)(this, oG, [40])), this.keysDownward = ((0, wG.n)(this, XG), (0, wG.n)(this, uG, [34])), this.keysLeft = ((0, wG.n)(this, iG), (0, wG.n)(this, CG, [37])), this.keysRight = ((0, wG.n)(this, WG), (0, wG.n)(this, mG, [39])), this.rotationSpeed = ((0, wG.n)(this, IG), (0, wG.n)(this, FG, .5)), this.keysRotateLeft = ((0, wG.n)(this, vG), (0, wG.n)(this, aG, [])), this.keysRotateRight = ((0, wG.n)(this, cG), (0, wG.n)(this, lG, [])), this.keysRotateUp = ((0, wG.n)(this, jG), (0, wG.n)(this, PG, [])), this.keysRotateDown = ((0, wG.n)(this, MG), (0, wG.n)(this, AG, [])), this._keys = ((0, wG.n)(this, sG), new Array)
        }
        attachControl(GG) {
          GG = YG.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Dv(), this._engine = this._scene.CK(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((bG => {
            const ZG = bG.event;
            if (!ZG.metaKey)
              if (bG.type === UG.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ZG.keyCode) || -1 !== this.keysDown.indexOf(ZG.keyCode) || -1 !== this.keysLeft.indexOf(ZG.keyCode) || -1 !== this.keysRight.indexOf(ZG.keyCode) || -1 !== this.keysUpward.indexOf(ZG.keyCode) || -1 !== this.keysDownward.indexOf(ZG.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZG.keyCode) || -1 !== this.keysRotateRight.indexOf(ZG.keyCode) || -1 !== this.keysRotateUp.indexOf(ZG.keyCode) || -1 !== this.keysRotateDown.indexOf(ZG.keyCode)) {
                  -1 === this._keys.indexOf(ZG.keyCode) && this._keys.push(ZG.keyCode), GG || ZG.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ZG.keyCode) || -1 !== this.keysDown.indexOf(ZG.keyCode) || -1 !== this.keysLeft.indexOf(ZG.keyCode) || -1 !== this.keysRight.indexOf(ZG.keyCode) || -1 !== this.keysUpward.indexOf(ZG.keyCode) || -1 !== this.keysDownward.indexOf(ZG.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZG.keyCode) || -1 !== this.keysRotateRight.indexOf(ZG.keyCode) || -1 !== this.keysRotateUp.indexOf(ZG.keyCode) || -1 !== this.keysRotateDown.indexOf(ZG.keyCode)) {
              const bG = this._keys.indexOf(ZG.keyCode);
              bG >= 0 && this._keys.splice(bG, 1), GG || ZG.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const GG = this.camera,
              bG = GG.movement.input,
              ZG = bG.getEntry("keyboard", "translate"),
              wG = bG.getEntry("keyboard", "rotate"),
              SG = wG?.sensitivity ?? 1,
              yG = GG._localDirection.fGG(0, 0, 0);
            for (let LG = 0; LG < this._keys.length; LG++) {
              const bG = this._keys[LG]; - 1 !== this.keysLeft.indexOf(bG) ? yG.x -= 1 : -1 !== this.keysUp.indexOf(bG) ? yG.z += 1 : -1 !== this.keysRight.indexOf(bG) ? yG.x += 1 : -1 !== this.keysDown.indexOf(bG) ? yG.z -= 1 : -1 !== this.keysUpward.indexOf(bG) ? yG.y += 1 : -1 !== this.keysDownward.indexOf(bG) ? yG.y -= 1 : -1 !== this.keysRotateLeft.indexOf(bG) ? wG && (GG.cameraRotation.y -= this._getLocalRotation() * SG) : -1 !== this.keysRotateRight.indexOf(bG) ? wG && (GG.cameraRotation.y += this._getLocalRotation() * SG) : -1 !== this.keysRotateUp.indexOf(bG) ? wG && (GG.cameraRotation.x -= this._getLocalRotation() * SG) : -1 !== this.keysRotateDown.indexOf(bG) && wG && (GG.cameraRotation.x += this._getLocalRotation() * SG)
            }
            if (ZG && (0 !== yG.x || 0 !== yG.y || 0 !== yG.z)) {
              const bG = GG._computeLocalCameraSpeed() * (ZG.sensitivity ?? 1);
              yG.normalize().scaleInPlace(bG), GG.Dv().useRightHandedSystem && (yG.z *= -1), GG.getViewMatrix().invertToRef(GG._cameraTransformMatrix), LG.p.TransformNormalToRef(yG, GG._cameraTransformMatrix, GG._transformedDirection), GG.cameraDirection.addInPlace(GG._transformedDirection)
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
          const GG = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * GG
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], dG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysUp" in GG,
            get: GG => GG.keysUp,
            set: (GG, bG) => {
              GG.keysUp = bG
            }
          },
          metadata: LG
        }, JG, rG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysUpward" in GG,
            get: GG => GG.keysUpward,
            set: (GG, bG) => {
              GG.keysUpward = bG
            }
          },
          metadata: LG
        }, zG, EG), (0, wG.k)(null, null, yG, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysDown" in GG,
            get: GG => GG.keysDown,
            set: (GG, bG) => {
              GG.keysDown = bG
            }
          },
          metadata: LG
        }, oG, XG), (0, wG.k)(null, null, kG, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysDownward" in GG,
            get: GG => GG.keysDownward,
            set: (GG, bG) => {
              GG.keysDownward = bG
            }
          },
          metadata: LG
        }, uG, iG), (0, wG.k)(null, null, VG, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysLeft" in GG,
            get: GG => GG.keysLeft,
            set: (GG, bG) => {
              GG.keysLeft = bG
            }
          },
          metadata: LG
        }, CG, WG), (0, wG.k)(null, null, pG, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRight" in GG,
            get: GG => GG.keysRight,
            set: (GG, bG) => {
              GG.keysRight = bG
            }
          },
          metadata: LG
        }, mG, IG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: GG => "rotationSpeed" in GG,
            get: GG => GG.rotationSpeed,
            set: (GG, bG) => {
              GG.rotationSpeed = bG
            }
          },
          metadata: LG
        }, FG, vG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRotateLeft" in GG,
            get: GG => GG.keysRotateLeft,
            set: (GG, bG) => {
              GG.keysRotateLeft = bG
            }
          },
          metadata: LG
        }, aG, cG), (0, wG.k)(null, null, KG, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRotateRight" in GG,
            get: GG => GG.keysRotateRight,
            set: (GG, bG) => {
              GG.keysRotateRight = bG
            }
          },
          metadata: LG
        }, lG, jG), (0, wG.k)(null, null, hG, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRotateUp" in GG,
            get: GG => GG.keysRotateUp,
            set: (GG, bG) => {
              GG.keysRotateUp = bG
            }
          },
          metadata: LG
        }, PG, MG), (0, wG.k)(null, null, dG, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRotateDown" in GG,
            get: GG => GG.keysRotateDown,
            set: (GG, bG) => {
              GG.keysRotateDown = bG
            }
          },
          metadata: LG
        }, AG, sG), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG
    })();
    kG.d.FreeCameraKeyboardMoveInput = VG;
    var pG = ZG(37465),
      fG = ZG(40550);
    let QG = (() => {
      var GG;
      let bG, ZG, LG = [],
        yG = [],
        kG = [],
        UG = [];
      return GG = class {
        _applyPointerRotation(GG, bG) {
          this._pointerConditions.button = this._currentActiveButton;
          const ZG = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ZG || "rotate" !== ZG.interaction) return;
          const wG = ZG.nD ?? ZG.sensitivity ?? 1 / this.angularSensibility,
            SG = ZG.eD ?? ZG.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += GG * wG, this.camera.cameraRotation.x += bG * SG
        }
        constructor() {
          let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = GG, this.buttons = (0, wG.n)(this, LG, [0, 1, 2]), this.angularSensibility = ((0, wG.n)(this, yG), (0, wG.n)(this, kG, 2e3)), this._pointerInput = (0, wG.n)(this, UG), this._previousPosition = null, this.onPointerMovedObservable = new pG.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(GG) {
          GG = YG.f.BackCompatCameraNoPreventDefault(arguments);
          const bG = this.camera.CK(),
            ZG = bG.getInputElement();
          this._pointerInput || (this._pointerInput = wG => {
            const SG = wG.event,
              LG = "touch" === SG.pointerType;
            if (!this.touchEnabled && LG) return;
            if (wG.type !== fG.b.POINTERMOVE && -1 === this.buttons.indexOf(SG.button)) return;
            const yG = SG.target;
            if (wG.type === fG.b.POINTERDOWN) {
              if (LG && -1 !== this._activePointerId || !LG && -1 !== this._currentActiveButton) return;
              this._activePointerId = SG.pointerId;
              try {
                yG?.setPointerCapture(SG.pointerId)
              } catch (kG) {} - 1 === this._currentActiveButton && (this._currentActiveButton = SG.button), this._previousPosition = {
                x: SG.clientX,
                y: SG.clientY
              }, GG || (SG.preventDefault(), ZG && ZG.focus()), bG.isPointerLock && this._onMouseMove && this._onMouseMove(wG.event)
            } else if (wG.type === fG.b.POINTERUP) {
              if (LG && this._activePointerId !== SG.pointerId || !LG && this._currentActiveButton !== SG.button) return;
              try {
                yG?.releasePointerCapture(SG.pointerId)
              } catch (kG) {}
              this._currentActiveButton = -1, this._previousPosition = null, GG || SG.preventDefault(), this._activePointerId = -1
            } else if (wG.type === fG.b.POINTERMOVE && (this._activePointerId === SG.pointerId || !LG))
              if (bG.isPointerLock && this._onMouseMove) this._onMouseMove(wG.event);
              else if (this._previousPosition) {
              const bG = this.camera._calculateHandednessMultiplier(),
                ZG = (SG.clientX - this._previousPosition.x) * bG,
                wG = (SG.clientY - this._previousPosition.y) * bG;
              this._allowCameraRotation && this._applyPointerRotation(ZG, wG), this.onPointerMovedObservable.notifyObservers({
                offsetX: ZG,
                offsetY: wG
              }), this._previousPosition = {
                x: SG.clientX,
                y: SG.clientY
              }, GG || SG.preventDefault()
            }
          }), this._onMouseMove = ZG => {
            if (!bG.isPointerLock) return;
            const wG = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ZG.movementX * wG, ZG.movementY * wG), this._previousPosition = null, GG || ZG.preventDefault()
          }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, fG.b.POINTERDOWN | fG.b.POINTERUP | fG.b.POINTERMOVE), ZG && (this._contextMenuBind = GG => this.onContextMenu(GG), ZG.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(GG) {
          GG.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const GG = this.camera.CK().getInputElement();
              GG && GG.removeEventListener("contextmenu", this._contextMenuBind)
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
        const YG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: GG => "buttons" in GG,
            get: GG => GG.buttons,
            set: (GG, bG) => {
              GG.buttons = bG
            }
          },
          metadata: YG
        }, LG, yG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: GG => "angularSensibility" in GG,
            get: GG => GG.angularSensibility,
            set: (GG, bG) => {
              GG.angularSensibility = bG
            }
          },
          metadata: YG
        }, kG, UG), YG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YG
        })
      })(), GG
    })();
    kG.d.FreeCameraMouseInput = QG;
    var KG = ZG(40560);
    let hG = (() => {
      var GG;
      let bG, ZG, LG, yG = [],
        kG = [],
        UG = [],
        VG = [],
        QG = [],
        hG = [];
      return GG = class {
        constructor() {
          this.wheelPrecisionX = (0, wG.n)(this, yG, 3), this.wheelPrecisionY = ((0, wG.n)(this, kG), (0, wG.n)(this, UG, 3)), this.wheelPrecisionZ = ((0, wG.n)(this, VG), (0, wG.n)(this, QG, 3)), this.onChangedObservable = ((0, wG.n)(this, hG), new pG.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(GG) {
          GG = YG.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = bG => {
            if (bG.type !== fG.b.POINTERWHEEL) return;
            const ZG = bG.event,
              wG = ZG.deltaMode === KG.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * wG * ZG.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * wG * ZG.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * wG * ZG.deltaZ / this._normalize, ZG.preventDefault && (GG || ZG.preventDefault())
          }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._wheel, fG.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const YG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelPrecisionX" in GG,
            get: GG => GG.wheelPrecisionX,
            set: (GG, bG) => {
              GG.wheelPrecisionX = bG
            }
          },
          metadata: YG
        }, yG, kG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelPrecisionY" in GG,
            get: GG => GG.wheelPrecisionY,
            set: (GG, bG) => {
              GG.wheelPrecisionY = bG
            }
          },
          metadata: YG
        }, UG, VG), (0, wG.k)(null, null, LG, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelPrecisionZ" in GG,
            get: GG => GG.wheelPrecisionZ,
            set: (GG, bG) => {
              GG.wheelPrecisionZ = bG
            }
          },
          metadata: YG
        }, QG, hG), YG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YG
        })
      })(), GG
    })();
    var dG;
    ! function(GG) {
      GG[GG.MoveRelative = 0] = "MoveRelative", GG[GG.RotateRelative = 1] = "RotateRelative", GG[GG.MoveScene = 2] = "MoveScene"
    }(dG || (dG = {}));
    let JG = (() => {
      var GG;
      let bG, ZG, yG, kG, UG, YG, VG, pG, fG, QG = hG,
        KG = [];
      return GG = class extends QG {
        constructor() {
          super(...arguments), this.camera = (0, wG.n)(this, KG), this._moveRelative = LG.p.Zero(), this._rotateRelative = LG.p.Zero(), this._moveScene = LG.p.Zero(), this._wheelXAction = dG.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = dG.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(GG) {
          null === GG && this._wheelXAction !== dG.MoveRelative || (this._wheelXAction = dG.MoveRelative, this._wheelXActionCoordinate = GG)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== dG.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(GG) {
          null === GG && this._wheelYAction !== dG.MoveRelative || (this._wheelYAction = dG.MoveRelative, this._wheelYActionCoordinate = GG)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== dG.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(GG) {
          null === GG && this._wheelZAction !== dG.MoveRelative || (this._wheelZAction = dG.MoveRelative, this._wheelZActionCoordinate = GG)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== dG.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(GG) {
          null === GG && this._wheelXAction !== dG.RotateRelative || (this._wheelXAction = dG.RotateRelative, this._wheelXActionCoordinate = GG)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== dG.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(GG) {
          null === GG && this._wheelYAction !== dG.RotateRelative || (this._wheelYAction = dG.RotateRelative, this._wheelYActionCoordinate = GG)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== dG.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(GG) {
          null === GG && this._wheelZAction !== dG.RotateRelative || (this._wheelZAction = dG.RotateRelative, this._wheelZActionCoordinate = GG)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== dG.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(GG) {
          null === GG && this._wheelXAction !== dG.MoveScene || (this._wheelXAction = dG.MoveScene, this._wheelXActionCoordinate = GG)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== dG.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(GG) {
          null === GG && this._wheelYAction !== dG.MoveScene || (this._wheelYAction = dG.MoveScene, this._wheelYActionCoordinate = GG)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== dG.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(GG) {
          null === GG && this._wheelZAction !== dG.MoveScene || (this._wheelZAction = dG.MoveScene, this._wheelZActionCoordinate = GG)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== dG.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.N7(0), this._rotateRelative.N7(0), this._moveScene.N7(0), this._updateCamera(), this.camera.Dv().useRightHandedSystem && (this._moveRelative.z *= -1);
          const GG = LG.e.Zero();
          this.camera.getViewMatrix().invertToRef(GG);
          const bG = LG.p.Zero();
          LG.p.TransformNormalToRef(this._moveRelative, GG, bG), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(bG), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(GG, bG, ZG) {
          if (0 === GG) return;
          if (null === bG || null === ZG) return;
          let wG = null;
          switch (bG) {
            case dG.MoveRelative:
              wG = this._moveRelative;
              break;
            case dG.RotateRelative:
              wG = this._rotateRelative;
              break;
            case dG.MoveScene:
              wG = this._moveScene
          }
          switch (ZG) {
            case 0:
              wG.set(GG, 0, 0);
              break;
            case 1:
              wG.set(0, GG, 0);
              break;
            case 2:
              wG.set(0, 0, GG)
          }
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(QG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], (0, wG.k)(GG, null, bG, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelXMoveRelative" in GG,
            set: (GG, bG) => {
              GG.wheelXMoveRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, ZG, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelYMoveRelative" in GG,
            set: (GG, bG) => {
              GG.wheelYMoveRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, yG, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelZMoveRelative" in GG,
            set: (GG, bG) => {
              GG.wheelZMoveRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, kG, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelXRotateRelative" in GG,
            set: (GG, bG) => {
              GG.wheelXRotateRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, UG, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelYRotateRelative" in GG,
            set: (GG, bG) => {
              GG.wheelYRotateRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, YG, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelZRotateRelative" in GG,
            set: (GG, bG) => {
              GG.wheelZRotateRelative = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, VG, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelXMoveScene" in GG,
            set: (GG, bG) => {
              GG.wheelXMoveScene = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, pG, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelYMoveScene" in GG,
            set: (GG, bG) => {
              GG.wheelYMoveScene = bG
            }
          },
          metadata: LG
        }, null, KG), (0, wG.k)(GG, null, fG, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelZMoveScene" in GG,
            set: (GG, bG) => {
              GG.wheelZMoveScene = bG
            }
          },
          metadata: LG
        }, null, KG), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG
    })();
    kG.d.FreeCameraMouseWheelInput = JG;
    let rG = (() => {
      var GG;
      let bG, ZG, yG = [],
        kG = [],
        UG = [],
        VG = [];
      return GG = class {
        constructor() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = GG, this.touchAngularSensibility = (0, wG.n)(this, yG, 2e5), this.touchMoveSensibility = ((0, wG.n)(this, kG), (0, wG.n)(this, UG, 250)), this.singleFingerRotate = ((0, wG.n)(this, VG), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = YG.f.IsSafari()
        }
        attachControl(GG) {
          GG = YG.f.BackCompatCameraNoPreventDefault(arguments);
          let bG = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ZG => {
              const wG = ZG.event,
                SG = "mouse" === wG.pointerType || this._isSafari && "undefined" === typeof wG.pointerType;
              if (this.allowMouse || !SG)
                if (ZG.type === fG.b.POINTERDOWN) {
                  if (GG || wG.preventDefault(), this._pointerPressed.push(wG.pointerId), 1 !== this._pointerPressed.length) return;
                  bG = {
                    x: wG.clientX,
                    y: wG.clientY
                  }
                } else if (ZG.type === fG.b.POINTERUP) {
                GG || wG.preventDefault();
                const ZG = this._pointerPressed.indexOf(wG.pointerId);
                if (-1 === ZG) return;
                if (this._pointerPressed.splice(ZG, 1), 0 != ZG) return;
                bG = null, this._offsetX = null, this._offsetY = null
              } else if (ZG.type === fG.b.POINTERMOVE) {
                if (GG || wG.preventDefault(), !bG) return;
                if (0 != this._pointerPressed.indexOf(wG.pointerId)) return;
                this._offsetX = wG.clientX - bG.x, this._offsetY = -(wG.clientY - bG.y)
              }
            }), this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, fG.b.POINTERDOWN | fG.b.POINTERUP | fG.b.POINTERMOVE), this._onLostFocus) {
            const GG = this.camera.CK().getInputElement();
            GG && GG.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const GG = this.camera.CK().getInputElement();
              GG && GG.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const GG = this.camera,
            bG = GG.movement.input,
            ZG = bG.getEntry("touch", "rotate"),
            wG = bG.getEntry("touch", "translate"),
            SG = GG._calculateHandednessMultiplier(),
            yG = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ZG) {
            const bG = ZG.sensitivity ?? 1 / this.touchAngularSensibility;
            GG.cameraRotation.y = this._offsetX * SG * bG, yG && (GG.cameraRotation.x = -this._offsetY * SG * bG)
          }
          if (!yG && wG) {
            const bG = GG._computeLocalCameraSpeed(),
              ZG = wG.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              SG = LG.j.mK[0];
            SG.fGG(0, 0, bG * this._offsetY * ZG), LG.e.RotationYawPitchRollToRef(GG.rotation.y, GG.rotation.x, 0, GG._cameraRotationMatrix), LG.p.TransformCoordinatesToRef(SG, GG._cameraRotationMatrix, SG), GG.cameraDirection.addInPlace(SG)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: GG => "touchAngularSensibility" in GG,
            get: GG => GG.touchAngularSensibility,
            set: (GG, bG) => {
              GG.touchAngularSensibility = bG
            }
          },
          metadata: LG
        }, yG, kG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: GG => "touchMoveSensibility" in GG,
            get: GG => GG.touchMoveSensibility,
            set: (GG, bG) => {
              GG.touchMoveSensibility = bG
            }
          },
          metadata: LG
        }, UG, VG), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG
    })();
    kG.d.FreeCameraTouchInput = rG;
    var zG, EG, oG, XG = ZG(40258);
    class uG extends kG.f {
      constructor(GG) {
        super(GG), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new VG), this
      }
      addMouse() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new QG(GG), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new JG, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new rG), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(zG = uG.prototype).addDeviceOrientation ?? (zG.addDeviceOrientation = (0, XG.h)("FreeCameraInputsManager", "addDeviceOrientation")), (EG = uG.prototype).addVirtualJoystick ?? (EG.addVirtualJoystick = (0, XG.h)("FreeCameraInputsManager", "addVirtualJoystick")), (oG = uG.prototype).addGamepad ?? (oG.addGamepad = (0, XG.h)("FreeCameraInputsManager", "addGamepad"));
    var iG = ZG(40280),
      CG = ZG(37484);
    let WG = (() => {
        var GG;
        let bG, ZG, kG, UG, VG = yG.e,
          pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [],
          JG = [],
          rG = [];
        return GG = class extends VG {
          get angularSensibility() {
            const GG = this.inputs.attached.mouse;
            return GG ? GG.angularSensibility : 0
          }
          set angularSensibility(GG) {
            const bG = this.inputs.attached.mouse;
            bG && (bG.angularSensibility = GG)
          }
          get keysUp() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysUp : []
          }
          set keysUp(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysUp = GG)
          }
          get keysUpward() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysUpward : []
          }
          set keysUpward(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysUpward = GG)
          }
          get keysDown() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysDown : []
          }
          set keysDown(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysDown = GG)
          }
          get keysDownward() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysDownward : []
          }
          set keysDownward(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysDownward = GG)
          }
          get keysLeft() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysLeft : []
          }
          set keysLeft(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysLeft = GG)
          }
          get keysRight() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRight : []
          }
          set keysRight(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRight = GG)
          }
          get keysRotateLeft() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRotateLeft : []
          }
          set keysRotateLeft(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRotateLeft = GG)
          }
          get keysRotateRight() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRotateRight : []
          }
          set keysRotateRight(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRotateRight = GG)
          }
          get keysRotateUp() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRotateUp : []
          }
          set keysRotateUp(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRotateUp = GG)
          }
          get keysRotateDown() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRotateDown : []
          }
          set keysRotateDown(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRotateDown = GG)
          }
          constructor(GG, bG, ZG) {
            var SG;
            super(GG, bG, ZG, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), SG = this, this.ellipsoid = (0, wG.n)(this, pG, new LG.p(.5, 1, .5)), this.ellipsoidOffset = ((0, wG.n)(this, fG), (0, wG.n)(this, QG, new LG.p(0, 0, 0))), this.checkCollisions = ((0, wG.n)(this, KG), (0, wG.n)(this, hG, !1)), this.applyGravity = ((0, wG.n)(this, dG), (0, wG.n)(this, JG, !1)), this.inputs = (0, wG.n)(this, rG), this._needMoveForGravity = !1, this._oldPosition = LG.p.Zero(), this._diffPosition = LG.p.Zero(), this._newPosition = LG.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(GG, bG) {
              let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              SG._newPosition.oW(bG), SG._newPosition.subtractToRef(SG._oldPosition, SG._diffPosition), SG._diffPosition.length() > iG.c.CollisionsEpsilon && (SG.position.addToRef(SG._diffPosition, SG._deferredPositionUpdate), SG._deferOnly ? SG._deferredUpdated = !0 : SG.position.oW(SG._deferredPositionUpdate), SG.Uf && ZG && SG.Uf(ZG))
            }, this.inputs = new uG(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(GG, bG) {
            bG = YG.f.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(bG)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new LG.p(0, 0, 0), this.cameraRotation = new LG.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(GG) {
            this._collisionMask = isNaN(GG) ? -1 : GG
          }
          _collideWithWorld(GG) {
            let bG;
            bG = this.parent ? LG.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, bG.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ZG = this.Dv().collisionCoordinator;
            this._collider || (this._collider = ZG.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let wG = GG;
            this.applyGravity && (wG = GG.add(this.Dv().gravity)), ZG.getNewPosition(this._oldPosition, wG, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = LG.p.Zero(), this._transformedDirection = LG.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(GG) {
            this._needMoveForGravity = GG
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Dv().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(VG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.M)()], ZG = [(0, SG.M)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: GG => "ellipsoid" in GG,
              get: GG => GG.ellipsoid,
              set: (GG, bG) => {
                GG.ellipsoid = bG
              }
            },
            metadata: LG
          }, pG, fG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "ellipsoidOffset" in GG,
              get: GG => GG.ellipsoidOffset,
              set: (GG, bG) => {
                GG.ellipsoidOffset = bG
              }
            },
            metadata: LG
          }, QG, KG), (0, wG.k)(null, null, kG, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: GG => "checkCollisions" in GG,
              get: GG => GG.checkCollisions,
              set: (GG, bG) => {
                GG.checkCollisions = bG
              }
            },
            metadata: LG
          }, hG, dG), (0, wG.k)(null, null, UG, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: GG => "applyGravity" in GG,
              get: GG => GG.applyGravity,
              set: (GG, bG) => {
                GG.applyGravity = bG
              }
            },
            metadata: LG
          }, JG, rG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      mG = !1;
    mG || (mG = !0, (0, CG.i)("BABYLON.FreeCamera", WG))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
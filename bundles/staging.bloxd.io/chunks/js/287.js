export const id = 287;
export const ids = [287];
export const modules = {
  41306: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ze
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(41311),
      Ue = He(41350),
      Fe = He(41289),
      Je = He(41203);
    let oe = (() => {
      var ee;
      let ie, He, Ke, Ue, oe, Re, ke, qe, fe, Te, pe, Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        te = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [];
      return ee = class {
        constructor() {
          this.keysUp = (0, ye.l)(this, Xe, [38]), this.keysUpward = ((0, ye.l)(this, ze), (0, ye.l)(this, Be, [33])), this.keysDown = ((0, ye.l)(this, Ee), (0, ye.l)(this, ge, [40])), this.keysDownward = ((0, ye.l)(this, Oe), (0, ye.l)(this, de, [34])), this.keysLeft = ((0, ye.l)(this, We), (0, ye.l)(this, te, [37])), this.keysRight = ((0, ye.l)(this, Ze), (0, ye.l)(this, we, [39])), this.rotationSpeed = ((0, ye.l)(this, De), (0, ye.l)(this, Pe, .5)), this.keysRotateLeft = ((0, ye.l)(this, Ae), (0, ye.l)(this, Ye, [])), this.keysRotateRight = ((0, ye.l)(this, Ve), (0, ye.l)(this, ae, [])), this.keysRotateUp = ((0, ye.l)(this, ce), (0, ye.l)(this, xe, [])), this.keysRotateDown = ((0, ye.l)(this, Le), (0, ye.l)(this, Ce, [])), this._keys = ((0, ye.l)(this, ve), new Array)
        }
        attachControl(ee) {
          ee = Je.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Xx(), this._engine = this._scene.Nf(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ie => {
            const He = ie.event;
            if (!He.metaKey)
              if (ie.type === Fe.e.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysUpward.indexOf(He.keyCode) || -1 !== this.keysDownward.indexOf(He.keyCode) || -1 !== this.keysRotateLeft.indexOf(He.keyCode) || -1 !== this.keysRotateRight.indexOf(He.keyCode) || -1 !== this.keysRotateUp.indexOf(He.keyCode) || -1 !== this.keysRotateDown.indexOf(He.keyCode)) {
                  -1 === this._keys.indexOf(He.keyCode) && this._keys.push(He.keyCode), ee || He.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysUpward.indexOf(He.keyCode) || -1 !== this.keysDownward.indexOf(He.keyCode) || -1 !== this.keysRotateLeft.indexOf(He.keyCode) || -1 !== this.keysRotateRight.indexOf(He.keyCode) || -1 !== this.keysRotateUp.indexOf(He.keyCode) || -1 !== this.keysRotateDown.indexOf(He.keyCode)) {
              const ie = this._keys.indexOf(He.keyCode);
              ie >= 0 && this._keys.splice(ie, 1), ee || He.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const ee = this.camera,
              ie = ee.movement.input,
              He = ie.getEntry("keyboard", "translate"),
              ye = ie.getEntry("keyboard", "rotate"),
              be = ye?.sensitivity ?? 1,
              Ke = ee._localDirection.wie(0, 0, 0);
            for (let Me = 0; Me < this._keys.length; Me++) {
              const ie = this._keys[Me]; - 1 !== this.keysLeft.indexOf(ie) ? Ke.x -= 1 : -1 !== this.keysUp.indexOf(ie) ? Ke.z += 1 : -1 !== this.keysRight.indexOf(ie) ? Ke.x += 1 : -1 !== this.keysDown.indexOf(ie) ? Ke.z -= 1 : -1 !== this.keysUpward.indexOf(ie) ? Ke.y += 1 : -1 !== this.keysDownward.indexOf(ie) ? Ke.y -= 1 : -1 !== this.keysRotateLeft.indexOf(ie) ? ye && (ee.cameraRotation.y -= this._getLocalRotation() * be) : -1 !== this.keysRotateRight.indexOf(ie) ? ye && (ee.cameraRotation.y += this._getLocalRotation() * be) : -1 !== this.keysRotateUp.indexOf(ie) ? ye && (ee.cameraRotation.x -= this._getLocalRotation() * be) : -1 !== this.keysRotateDown.indexOf(ie) && ye && (ee.cameraRotation.x += this._getLocalRotation() * be)
            }
            if (He && (0 !== Ke.x || 0 !== Ke.y || 0 !== Ke.z)) {
              const ie = ee._computeLocalCameraSpeed() * (He.sensitivity ?? 1);
              Ke.normalize().scaleInPlace(ie), ee.Xx().useRightHandedSystem && (Ke.z *= -1), ee.getViewMatrix().invertToRef(ee._cameraTransformMatrix), Me.p.TransformNormalToRef(Ke, ee._cameraTransformMatrix, ee._transformedDirection), ee.cameraDirection.addInPlace(ee._transformedDirection)
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
          const ee = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * ee
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], qe = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], pe = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysUp" in ee,
            get: ee => ee.keysUp,
            set: (ee, ie) => {
              ee.keysUp = ie
            }
          },
          metadata: Me
        }, Xe, ze), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysUpward" in ee,
            get: ee => ee.keysUpward,
            set: (ee, ie) => {
              ee.keysUpward = ie
            }
          },
          metadata: Me
        }, Be, Ee), (0, ye.i)(null, null, Ke, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysDown" in ee,
            get: ee => ee.keysDown,
            set: (ee, ie) => {
              ee.keysDown = ie
            }
          },
          metadata: Me
        }, ge, Oe), (0, ye.i)(null, null, Ue, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysDownward" in ee,
            get: ee => ee.keysDownward,
            set: (ee, ie) => {
              ee.keysDownward = ie
            }
          },
          metadata: Me
        }, de, We), (0, ye.i)(null, null, oe, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysLeft" in ee,
            get: ee => ee.keysLeft,
            set: (ee, ie) => {
              ee.keysLeft = ie
            }
          },
          metadata: Me
        }, te, Ze), (0, ye.i)(null, null, Re, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRight" in ee,
            get: ee => ee.keysRight,
            set: (ee, ie) => {
              ee.keysRight = ie
            }
          },
          metadata: Me
        }, we, De), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: ee => "rotationSpeed" in ee,
            get: ee => ee.rotationSpeed,
            set: (ee, ie) => {
              ee.rotationSpeed = ie
            }
          },
          metadata: Me
        }, Pe, Ae), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRotateLeft" in ee,
            get: ee => ee.keysRotateLeft,
            set: (ee, ie) => {
              ee.keysRotateLeft = ie
            }
          },
          metadata: Me
        }, Ye, Ve), (0, ye.i)(null, null, fe, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRotateRight" in ee,
            get: ee => ee.keysRotateRight,
            set: (ee, ie) => {
              ee.keysRotateRight = ie
            }
          },
          metadata: Me
        }, ae, ce), (0, ye.i)(null, null, Te, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRotateUp" in ee,
            get: ee => ee.keysRotateUp,
            set: (ee, ie) => {
              ee.keysRotateUp = ie
            }
          },
          metadata: Me
        }, xe, Le), (0, ye.i)(null, null, pe, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRotateDown" in ee,
            get: ee => ee.keysRotateDown,
            set: (ee, ie) => {
              ee.keysRotateDown = ie
            }
          },
          metadata: Me
        }, Ce, ve), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee
    })();
    Ue.c.FreeCameraKeyboardMoveInput = oe;
    var Re = He(37931),
      ke = He(41286);
    let qe = (() => {
      var ee;
      let ie, He, Me = [],
        Ke = [],
        Ue = [],
        Fe = [];
      return ee = class {
        _applyPointerRotation(ee, ie) {
          this._pointerConditions.button = this._currentActiveButton;
          const He = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!He || "rotate" !== He.interaction) return;
          const ye = He.I9 ?? He.sensitivity ?? 1 / this.angularSensibility,
            be = He.N9 ?? He.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += ee * ye, this.camera.cameraRotation.x += ie * be
        }
        constructor() {
          let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = ee, this.buttons = (0, ye.l)(this, Me, [0, 1, 2]), this.angularSensibility = ((0, ye.l)(this, Ke), (0, ye.l)(this, Ue, 2e3)), this._pointerInput = (0, ye.l)(this, Fe), this._previousPosition = null, this.onPointerMovedObservable = new Re.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(ee) {
          ee = Je.h.BackCompatCameraNoPreventDefault(arguments);
          const ie = this.camera.Nf(),
            He = ie.getInputElement();
          this._pointerInput || (this._pointerInput = ye => {
            const be = ye.event,
              Me = "touch" === be.pointerType;
            if (!this.touchEnabled && Me) return;
            if (ye.type !== ke.c.POINTERMOVE && -1 === this.buttons.indexOf(be.button)) return;
            const Ke = be.target;
            if (ye.type === ke.c.POINTERDOWN) {
              if (Me && -1 !== this._activePointerId || !Me && -1 !== this._currentActiveButton) return;
              this._activePointerId = be.pointerId;
              try {
                Ke?.setPointerCapture(be.pointerId)
              } catch (Ue) {} - 1 === this._currentActiveButton && (this._currentActiveButton = be.button), this._previousPosition = {
                x: be.clientX,
                y: be.clientY
              }, ee || (be.preventDefault(), He && He.focus()), ie.isPointerLock && this._onMouseMove && this._onMouseMove(ye.event)
            } else if (ye.type === ke.c.POINTERUP) {
              if (Me && this._activePointerId !== be.pointerId || !Me && this._currentActiveButton !== be.button) return;
              try {
                Ke?.releasePointerCapture(be.pointerId)
              } catch (Ue) {}
              this._currentActiveButton = -1, this._previousPosition = null, ee || be.preventDefault(), this._activePointerId = -1
            } else if (ye.type === ke.c.POINTERMOVE && (this._activePointerId === be.pointerId || !Me))
              if (ie.isPointerLock && this._onMouseMove) this._onMouseMove(ye.event);
              else if (this._previousPosition) {
              const ie = this.camera._calculateHandednessMultiplier(),
                He = (be.clientX - this._previousPosition.x) * ie,
                ye = (be.clientY - this._previousPosition.y) * ie;
              this._allowCameraRotation && this._applyPointerRotation(He, ye), this.onPointerMovedObservable.notifyObservers({
                offsetX: He,
                offsetY: ye
              }), this._previousPosition = {
                x: be.clientX,
                y: be.clientY
              }, ee || be.preventDefault()
            }
          }), this._onMouseMove = He => {
            if (!ie.isPointerLock) return;
            const ye = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(He.movementX * ye, He.movementY * ye), this._previousPosition = null, ee || He.preventDefault()
          }, this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._pointerInput, ke.c.POINTERDOWN | ke.c.POINTERUP | ke.c.POINTERMOVE), He && (this._contextMenuBind = ee => this.onContextMenu(ee), He.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(ee) {
          ee.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const ee = this.camera.Nf().getInputElement();
              ee && ee.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: ee => "buttons" in ee,
            get: ee => ee.buttons,
            set: (ee, ie) => {
              ee.buttons = ie
            }
          },
          metadata: Je
        }, Me, Ke), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: ee => "angularSensibility" in ee,
            get: ee => ee.angularSensibility,
            set: (ee, ie) => {
              ee.angularSensibility = ie
            }
          },
          metadata: Je
        }, Ue, Fe), Je && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Je
        })
      })(), ee
    })();
    Ue.c.FreeCameraMouseInput = qe;
    var fe = He(41292);
    let Te = (() => {
      var ee;
      let ie, He, Me, Ke = [],
        Ue = [],
        Fe = [],
        oe = [],
        qe = [],
        Te = [];
      return ee = class {
        constructor() {
          this.wheelPrecisionX = (0, ye.l)(this, Ke, 3), this.wheelPrecisionY = ((0, ye.l)(this, Ue), (0, ye.l)(this, Fe, 3)), this.wheelPrecisionZ = ((0, ye.l)(this, oe), (0, ye.l)(this, qe, 3)), this.onChangedObservable = ((0, ye.l)(this, Te), new Re.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(ee) {
          ee = Je.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = ie => {
            if (ie.type !== ke.c.POINTERWHEEL) return;
            const He = ie.event,
              ye = He.deltaMode === fe.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * ye * He.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * ye * He.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * ye * He.deltaZ / this._normalize, He.preventDefault && (ee || He.preventDefault())
          }, this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._wheel, ke.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelPrecisionX" in ee,
            get: ee => ee.wheelPrecisionX,
            set: (ee, ie) => {
              ee.wheelPrecisionX = ie
            }
          },
          metadata: Je
        }, Ke, Ue), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelPrecisionY" in ee,
            get: ee => ee.wheelPrecisionY,
            set: (ee, ie) => {
              ee.wheelPrecisionY = ie
            }
          },
          metadata: Je
        }, Fe, oe), (0, ye.i)(null, null, Me, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelPrecisionZ" in ee,
            get: ee => ee.wheelPrecisionZ,
            set: (ee, ie) => {
              ee.wheelPrecisionZ = ie
            }
          },
          metadata: Je
        }, qe, Te), Je && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Je
        })
      })(), ee
    })();
    var pe;
    ! function(ee) {
      ee[ee.MoveRelative = 0] = "MoveRelative", ee[ee.RotateRelative = 1] = "RotateRelative", ee[ee.MoveScene = 2] = "MoveScene"
    }(pe || (pe = {}));
    let Xe = (() => {
      var ee;
      let ie, He, Ke, Ue, Fe, Je, oe, Re, ke, qe = Te,
        fe = [];
      return ee = class extends qe {
        constructor() {
          super(...arguments), this.camera = (0, ye.l)(this, fe), this._moveRelative = Me.p.Zero(), this._rotateRelative = Me.p.Zero(), this._moveScene = Me.p.Zero(), this._wheelXAction = pe.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = pe.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(ee) {
          null === ee && this._wheelXAction !== pe.MoveRelative || (this._wheelXAction = pe.MoveRelative, this._wheelXActionCoordinate = ee)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== pe.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(ee) {
          null === ee && this._wheelYAction !== pe.MoveRelative || (this._wheelYAction = pe.MoveRelative, this._wheelYActionCoordinate = ee)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== pe.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(ee) {
          null === ee && this._wheelZAction !== pe.MoveRelative || (this._wheelZAction = pe.MoveRelative, this._wheelZActionCoordinate = ee)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== pe.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(ee) {
          null === ee && this._wheelXAction !== pe.RotateRelative || (this._wheelXAction = pe.RotateRelative, this._wheelXActionCoordinate = ee)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== pe.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(ee) {
          null === ee && this._wheelYAction !== pe.RotateRelative || (this._wheelYAction = pe.RotateRelative, this._wheelYActionCoordinate = ee)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== pe.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(ee) {
          null === ee && this._wheelZAction !== pe.RotateRelative || (this._wheelZAction = pe.RotateRelative, this._wheelZActionCoordinate = ee)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== pe.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(ee) {
          null === ee && this._wheelXAction !== pe.MoveScene || (this._wheelXAction = pe.MoveScene, this._wheelXActionCoordinate = ee)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== pe.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(ee) {
          null === ee && this._wheelYAction !== pe.MoveScene || (this._wheelYAction = pe.MoveScene, this._wheelYActionCoordinate = ee)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== pe.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(ee) {
          null === ee && this._wheelZAction !== pe.MoveScene || (this._wheelZAction = pe.MoveScene, this._wheelZActionCoordinate = ee)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== pe.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Iee(0), this._rotateRelative.Iee(0), this._moveScene.Iee(0), this._updateCamera(), this.camera.Xx().useRightHandedSystem && (this._moveRelative.z *= -1);
          const ee = Me.b.Zero();
          this.camera.getViewMatrix().invertToRef(ee);
          const ie = Me.p.Zero();
          Me.p.TransformNormalToRef(this._moveRelative, ee, ie), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(ie), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(ee, ie, He) {
          if (0 === ee) return;
          if (null === ie || null === He) return;
          let ye = null;
          switch (ie) {
            case pe.MoveRelative:
              ye = this._moveRelative;
              break;
            case pe.RotateRelative:
              ye = this._rotateRelative;
              break;
            case pe.MoveScene:
              ye = this._moveScene
          }
          switch (He) {
            case 0:
              ye.set(ee, 0, 0);
              break;
            case 1:
              ye.set(0, ee, 0);
              break;
            case 2:
              ye.set(0, 0, ee)
          }
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(qe[Symbol.metadata] ?? null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], (0, ye.i)(ee, null, ie, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelXMoveRelative" in ee,
            set: (ee, ie) => {
              ee.wheelXMoveRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, He, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelYMoveRelative" in ee,
            set: (ee, ie) => {
              ee.wheelYMoveRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, Ke, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelZMoveRelative" in ee,
            set: (ee, ie) => {
              ee.wheelZMoveRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, Ue, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelXRotateRelative" in ee,
            set: (ee, ie) => {
              ee.wheelXRotateRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, Fe, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelYRotateRelative" in ee,
            set: (ee, ie) => {
              ee.wheelYRotateRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, Je, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelZRotateRelative" in ee,
            set: (ee, ie) => {
              ee.wheelZRotateRelative = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, oe, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelXMoveScene" in ee,
            set: (ee, ie) => {
              ee.wheelXMoveScene = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, Re, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelYMoveScene" in ee,
            set: (ee, ie) => {
              ee.wheelYMoveScene = ie
            }
          },
          metadata: Me
        }, null, fe), (0, ye.i)(ee, null, ke, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelZMoveScene" in ee,
            set: (ee, ie) => {
              ee.wheelZMoveScene = ie
            }
          },
          metadata: Me
        }, null, fe), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee
    })();
    Ue.c.FreeCameraMouseWheelInput = Xe;
    let ze = (() => {
      var ee;
      let ie, He, Ke = [],
        Ue = [],
        Fe = [],
        oe = [];
      return ee = class {
        constructor() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = ee, this.touchAngularSensibility = (0, ye.l)(this, Ke, 2e5), this.touchMoveSensibility = ((0, ye.l)(this, Ue), (0, ye.l)(this, Fe, 250)), this.singleFingerRotate = ((0, ye.l)(this, oe), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Je.h.IsSafari()
        }
        attachControl(ee) {
          ee = Je.h.BackCompatCameraNoPreventDefault(arguments);
          let ie = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = He => {
              const ye = He.event,
                be = "mouse" === ye.pointerType || this._isSafari && "undefined" === typeof ye.pointerType;
              if (this.allowMouse || !be)
                if (He.type === ke.c.POINTERDOWN) {
                  if (ee || ye.preventDefault(), this._pointerPressed.push(ye.pointerId), 1 !== this._pointerPressed.length) return;
                  ie = {
                    x: ye.clientX,
                    y: ye.clientY
                  }
                } else if (He.type === ke.c.POINTERUP) {
                ee || ye.preventDefault();
                const He = this._pointerPressed.indexOf(ye.pointerId);
                if (-1 === He) return;
                if (this._pointerPressed.splice(He, 1), 0 != He) return;
                ie = null, this._offsetX = null, this._offsetY = null
              } else if (He.type === ke.c.POINTERMOVE) {
                if (ee || ye.preventDefault(), !ie) return;
                if (0 != this._pointerPressed.indexOf(ye.pointerId)) return;
                this._offsetX = ye.clientX - ie.x, this._offsetY = -(ye.clientY - ie.y)
              }
            }), this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._pointerInput, ke.c.POINTERDOWN | ke.c.POINTERUP | ke.c.POINTERMOVE), this._onLostFocus) {
            const ee = this.camera.Nf().getInputElement();
            ee && ee.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const ee = this.camera.Nf().getInputElement();
              ee && ee.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const ee = this.camera,
            ie = ee.movement.input,
            He = ie.getEntry("touch", "rotate"),
            ye = ie.getEntry("touch", "translate"),
            be = ee._calculateHandednessMultiplier(),
            Ke = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (He) {
            const ie = He.sensitivity ?? 1 / this.touchAngularSensibility;
            ee.cameraRotation.y = this._offsetX * be * ie, Ke && (ee.cameraRotation.x = -this._offsetY * be * ie)
          }
          if (!Ke && ye) {
            const ie = ee._computeLocalCameraSpeed(),
              He = ye.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              be = Me.j.rf[0];
            be.wie(0, 0, ie * this._offsetY * He), Me.b.RotationYawPitchRollToRef(ee.rotation.y, ee.rotation.x, 0, ee._cameraRotationMatrix), Me.p.TransformCoordinatesToRef(be, ee._cameraRotationMatrix, be), ee.cameraDirection.addInPlace(be)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: ee => "touchAngularSensibility" in ee,
            get: ee => ee.touchAngularSensibility,
            set: (ee, ie) => {
              ee.touchAngularSensibility = ie
            }
          },
          metadata: Me
        }, Ke, Ue), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: ee => "touchMoveSensibility" in ee,
            get: ee => ee.touchMoveSensibility,
            set: (ee, ie) => {
              ee.touchMoveSensibility = ie
            }
          },
          metadata: Me
        }, Fe, oe), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee
    })();
    Ue.c.FreeCameraTouchInput = ze;
    var Be, Ee, ge, Oe = He(40985);
    class de extends Ue.f {
      constructor(ee) {
        super(ee), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new oe), this
      }
      addMouse() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new qe(ee), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Xe, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new ze), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(Be = de.prototype).addDeviceOrientation ?? (Be.addDeviceOrientation = (0, Oe.h)("FreeCameraInputsManager", "addDeviceOrientation")), (Ee = de.prototype).addVirtualJoystick ?? (Ee.addVirtualJoystick = (0, Oe.h)("FreeCameraInputsManager", "addVirtualJoystick")), (ge = de.prototype).addGamepad ?? (ge.addGamepad = (0, Oe.h)("FreeCameraInputsManager", "addGamepad"));
    var We = He(41e3),
      te = He(37949);
    let Ze = (() => {
        var ee;
        let ie, He, Ue, Fe, oe = Ke.c,
          Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [],
          Xe = [],
          ze = [];
        return ee = class extends oe {
          get angularSensibility() {
            const ee = this.inputs.attached.mouse;
            return ee ? ee.angularSensibility : 0
          }
          set angularSensibility(ee) {
            const ie = this.inputs.attached.mouse;
            ie && (ie.angularSensibility = ee)
          }
          get keysUp() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysUp : []
          }
          set keysUp(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysUp = ee)
          }
          get keysUpward() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysUpward : []
          }
          set keysUpward(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysUpward = ee)
          }
          get keysDown() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysDown : []
          }
          set keysDown(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysDown = ee)
          }
          get keysDownward() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysDownward : []
          }
          set keysDownward(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysDownward = ee)
          }
          get keysLeft() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysLeft : []
          }
          set keysLeft(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysLeft = ee)
          }
          get keysRight() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRight : []
          }
          set keysRight(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRight = ee)
          }
          get keysRotateLeft() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRotateLeft : []
          }
          set keysRotateLeft(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRotateLeft = ee)
          }
          get keysRotateRight() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRotateRight : []
          }
          set keysRotateRight(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRotateRight = ee)
          }
          get keysRotateUp() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRotateUp : []
          }
          set keysRotateUp(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRotateUp = ee)
          }
          get keysRotateDown() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRotateDown : []
          }
          set keysRotateDown(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRotateDown = ee)
          }
          constructor(ee, ie, He) {
            var be;
            super(ee, ie, He, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), be = this, this.ellipsoid = (0, ye.l)(this, Re, new Me.p(.5, 1, .5)), this.ellipsoidOffset = ((0, ye.l)(this, ke), (0, ye.l)(this, qe, new Me.p(0, 0, 0))), this.checkCollisions = ((0, ye.l)(this, fe), (0, ye.l)(this, Te, !1)), this.applyGravity = ((0, ye.l)(this, pe), (0, ye.l)(this, Xe, !1)), this.inputs = (0, ye.l)(this, ze), this._needMoveForGravity = !1, this._oldPosition = Me.p.Zero(), this._diffPosition = Me.p.Zero(), this._newPosition = Me.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(ee, ie) {
              let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              be._newPosition.jD(ie), be._newPosition.subtractToRef(be._oldPosition, be._diffPosition), be._diffPosition.length() > We.e.CollisionsEpsilon && (be.position.addToRef(be._diffPosition, be._deferredPositionUpdate), be._deferOnly ? be._deferredUpdated = !0 : be.position.jD(be._deferredPositionUpdate), be.jk && He && be.jk(He))
            }, this.inputs = new de(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(ee, ie) {
            ie = Je.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(ie)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Me.p(0, 0, 0), this.cameraRotation = new Me.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(ee) {
            this._collisionMask = isNaN(ee) ? -1 : ee
          }
          _collideWithWorld(ee) {
            let ie;
            ie = this.parent ? Me.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, ie.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const He = this.Xx().collisionCoordinator;
            this._collider || (this._collider = He.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let ye = ee;
            this.applyGravity && (ye = ee.add(this.Xx().gravity)), He.getNewPosition(this._oldPosition, ye, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Me.p.Zero(), this._transformedDirection = Me.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(ee) {
            this._needMoveForGravity = ee
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Xx().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(oe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.P)()], He = [(0, be.P)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: ee => "ellipsoid" in ee,
              get: ee => ee.ellipsoid,
              set: (ee, ie) => {
                ee.ellipsoid = ie
              }
            },
            metadata: Me
          }, Re, ke), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "ellipsoidOffset" in ee,
              get: ee => ee.ellipsoidOffset,
              set: (ee, ie) => {
                ee.ellipsoidOffset = ie
              }
            },
            metadata: Me
          }, qe, fe), (0, ye.i)(null, null, Ue, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: ee => "checkCollisions" in ee,
              get: ee => ee.checkCollisions,
              set: (ee, ie) => {
                ee.checkCollisions = ie
              }
            },
            metadata: Me
          }, Te, pe), (0, ye.i)(null, null, Fe, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: ee => "applyGravity" in ee,
              get: ee => ee.applyGravity,
              set: (ee, ie) => {
                ee.applyGravity = ie
              }
            },
            metadata: Me
          }, Xe, ze), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      we = !1;
    we || (we = !0, (0, te.e)("BABYLON.FreeCamera", Ze))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
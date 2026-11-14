export const id = 234;
export const ids = [234];
export const modules = {
  38237: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => gB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(38242),
      sc = nc(38278),
      Mc = nc(38221),
      Pc = nc(38146);
    let qB = (() => {
      var cB;
      let Bc, nc, uc, sc, qB, Oc, Tc, fc, mB, ec, tB, Sc = [],
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Lc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [];
      return cB = class {
        constructor() {
          this.keysUp = (0, Vc.k)(this, Sc, [38]), this.keysUpward = ((0, Vc.k)(this, yB), (0, Vc.k)(this, zB, [33])), this.keysDown = ((0, Vc.k)(this, pc), (0, Vc.k)(this, hc, [40])), this.keysDownward = ((0, Vc.k)(this, aB), (0, Vc.k)(this, lc, [34])), this.keysLeft = ((0, Vc.k)(this, Yc), (0, Vc.k)(this, Lc, [37])), this.keysRight = ((0, Vc.k)(this, gB), (0, Vc.k)(this, Uc, [39])), this.rotationSpeed = ((0, Vc.k)(this, bB), (0, Vc.k)(this, Zc, .5)), this.keysRotateLeft = ((0, Vc.k)(this, Qc), (0, Vc.k)(this, Cc, [])), this.keysRotateRight = ((0, Vc.k)(this, vB), (0, Vc.k)(this, Dc, [])), this.keysRotateUp = ((0, Vc.k)(this, Nc), (0, Vc.k)(this, Ec, [])), this.keysRotateDown = ((0, Vc.k)(this, oc), (0, Vc.k)(this, Wc, [])), this._keys = ((0, Vc.k)(this, wc), new Array)
        }
        attachControl(cB) {
          cB = Pc.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.knc(), this._engine = this._scene.RV(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Bc => {
            const nc = Bc.event;
            if (!nc.metaKey)
              if (Bc.type === Mc.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(nc.keyCode) || -1 !== this.keysDown.indexOf(nc.keyCode) || -1 !== this.keysLeft.indexOf(nc.keyCode) || -1 !== this.keysRight.indexOf(nc.keyCode) || -1 !== this.keysUpward.indexOf(nc.keyCode) || -1 !== this.keysDownward.indexOf(nc.keyCode) || -1 !== this.keysRotateLeft.indexOf(nc.keyCode) || -1 !== this.keysRotateRight.indexOf(nc.keyCode) || -1 !== this.keysRotateUp.indexOf(nc.keyCode) || -1 !== this.keysRotateDown.indexOf(nc.keyCode)) {
                  -1 === this._keys.indexOf(nc.keyCode) && this._keys.push(nc.keyCode), cB || nc.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(nc.keyCode) || -1 !== this.keysDown.indexOf(nc.keyCode) || -1 !== this.keysLeft.indexOf(nc.keyCode) || -1 !== this.keysRight.indexOf(nc.keyCode) || -1 !== this.keysUpward.indexOf(nc.keyCode) || -1 !== this.keysDownward.indexOf(nc.keyCode) || -1 !== this.keysRotateLeft.indexOf(nc.keyCode) || -1 !== this.keysRotateRight.indexOf(nc.keyCode) || -1 !== this.keysRotateUp.indexOf(nc.keyCode) || -1 !== this.keysRotateDown.indexOf(nc.keyCode)) {
              const Bc = this._keys.indexOf(nc.keyCode);
              Bc >= 0 && this._keys.splice(Bc, 1), cB || nc.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const cB = this.camera,
              Bc = cB.movement.input,
              nc = Bc.getEntry("keyboard", "translate"),
              Vc = Bc.getEntry("keyboard", "rotate"),
              Ic = Vc?.sensitivity ?? 1,
              uc = cB._localDirection.puc(0, 0, 0);
            for (let rB = 0; rB < this._keys.length; rB++) {
              const Bc = this._keys[rB]; - 1 !== this.keysLeft.indexOf(Bc) ? uc.x -= 1 : -1 !== this.keysUp.indexOf(Bc) ? uc.z += 1 : -1 !== this.keysRight.indexOf(Bc) ? uc.x += 1 : -1 !== this.keysDown.indexOf(Bc) ? uc.z -= 1 : -1 !== this.keysUpward.indexOf(Bc) ? uc.y += 1 : -1 !== this.keysDownward.indexOf(Bc) ? uc.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Bc) ? Vc && (cB.cameraRotation.y -= this._getLocalRotation() * Ic) : -1 !== this.keysRotateRight.indexOf(Bc) ? Vc && (cB.cameraRotation.y += this._getLocalRotation() * Ic) : -1 !== this.keysRotateUp.indexOf(Bc) ? Vc && (cB.cameraRotation.x -= this._getLocalRotation() * Ic) : -1 !== this.keysRotateDown.indexOf(Bc) && Vc && (cB.cameraRotation.x += this._getLocalRotation() * Ic)
            }
            if (nc && (0 !== uc.x || 0 !== uc.y || 0 !== uc.z)) {
              const Bc = cB._computeLocalCameraSpeed() * (nc.sensitivity ?? 1);
              uc.normalize().scaleInPlace(Bc), cB.knc().useRightHandedSystem && (uc.z *= -1), cB.getViewMatrix().invertToRef(cB._cameraTransformMatrix), rB.p.TransformNormalToRef(uc, cB._cameraTransformMatrix, cB._transformedDirection), cB.cameraDirection.addInPlace(cB._transformedDirection)
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
          const cB = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * cB
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], uc = [(0, Ic.M)()], sc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], fc = [(0, Ic.M)()], mB = [(0, Ic.M)()], ec = [(0, Ic.M)()], tB = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysUp" in cB,
            get: cB => cB.keysUp,
            set: (cB, Bc) => {
              cB.keysUp = Bc
            }
          },
          metadata: rB
        }, Sc, yB), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysUpward" in cB,
            get: cB => cB.keysUpward,
            set: (cB, Bc) => {
              cB.keysUpward = Bc
            }
          },
          metadata: rB
        }, zB, pc), (0, Vc.g)(null, null, uc, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysDown" in cB,
            get: cB => cB.keysDown,
            set: (cB, Bc) => {
              cB.keysDown = Bc
            }
          },
          metadata: rB
        }, hc, aB), (0, Vc.g)(null, null, sc, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysDownward" in cB,
            get: cB => cB.keysDownward,
            set: (cB, Bc) => {
              cB.keysDownward = Bc
            }
          },
          metadata: rB
        }, lc, Yc), (0, Vc.g)(null, null, qB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysLeft" in cB,
            get: cB => cB.keysLeft,
            set: (cB, Bc) => {
              cB.keysLeft = Bc
            }
          },
          metadata: rB
        }, Lc, gB), (0, Vc.g)(null, null, Oc, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRight" in cB,
            get: cB => cB.keysRight,
            set: (cB, Bc) => {
              cB.keysRight = Bc
            }
          },
          metadata: rB
        }, Uc, bB), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: cB => "rotationSpeed" in cB,
            get: cB => cB.rotationSpeed,
            set: (cB, Bc) => {
              cB.rotationSpeed = Bc
            }
          },
          metadata: rB
        }, Zc, Qc), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRotateLeft" in cB,
            get: cB => cB.keysRotateLeft,
            set: (cB, Bc) => {
              cB.keysRotateLeft = Bc
            }
          },
          metadata: rB
        }, Cc, vB), (0, Vc.g)(null, null, mB, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRotateRight" in cB,
            get: cB => cB.keysRotateRight,
            set: (cB, Bc) => {
              cB.keysRotateRight = Bc
            }
          },
          metadata: rB
        }, Dc, Nc), (0, Vc.g)(null, null, ec, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRotateUp" in cB,
            get: cB => cB.keysRotateUp,
            set: (cB, Bc) => {
              cB.keysRotateUp = Bc
            }
          },
          metadata: rB
        }, Ec, oc), (0, Vc.g)(null, null, tB, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRotateDown" in cB,
            get: cB => cB.keysRotateDown,
            set: (cB, Bc) => {
              cB.keysRotateDown = Bc
            }
          },
          metadata: rB
        }, Wc, wc), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB
    })();
    sc.e.FreeCameraKeyboardMoveInput = qB;
    var Oc = nc(35783),
      Tc = nc(38218);
    let fc = (() => {
      var cB;
      let Bc, nc, rB = [],
        uc = [],
        sc = [],
        Mc = [];
      return cB = class {
        _applyPointerRotation(cB, Bc) {
          this._pointerConditions.button = this._currentActiveButton;
          const nc = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!nc || "rotate" !== nc.interaction) return;
          const Vc = nc.DVc ?? nc.sensitivity ?? 1 / this.angularSensibility,
            Ic = nc.NVc ?? nc.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += cB * Vc, this.camera.cameraRotation.x += Bc * Ic
        }
        constructor() {
          let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = cB, this.buttons = (0, Vc.k)(this, rB, [0, 1, 2]), this.angularSensibility = ((0, Vc.k)(this, uc), (0, Vc.k)(this, sc, 2e3)), this._pointerInput = (0, Vc.k)(this, Mc), this._previousPosition = null, this.onPointerMovedObservable = new Oc.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(cB) {
          cB = Pc.g.BackCompatCameraNoPreventDefault(arguments);
          const Bc = this.camera.RV(),
            nc = Bc.getInputElement();
          this._pointerInput || (this._pointerInput = Vc => {
            const Ic = Vc.event,
              rB = "touch" === Ic.pointerType;
            if (!this.touchEnabled && rB) return;
            if (Vc.type !== Tc.d.POINTERMOVE && -1 === this.buttons.indexOf(Ic.button)) return;
            const uc = Ic.target;
            if (Vc.type === Tc.d.POINTERDOWN) {
              if (rB && -1 !== this._activePointerId || !rB && -1 !== this._currentActiveButton) return;
              this._activePointerId = Ic.pointerId;
              try {
                uc?.setPointerCapture(Ic.pointerId)
              } catch (sc) {} - 1 === this._currentActiveButton && (this._currentActiveButton = Ic.button), this._previousPosition = {
                x: Ic.clientX,
                y: Ic.clientY
              }, cB || (Ic.preventDefault(), nc && nc.focus()), Bc.isPointerLock && this._onMouseMove && this._onMouseMove(Vc.event)
            } else if (Vc.type === Tc.d.POINTERUP) {
              if (rB && this._activePointerId !== Ic.pointerId || !rB && this._currentActiveButton !== Ic.button) return;
              try {
                uc?.releasePointerCapture(Ic.pointerId)
              } catch (sc) {}
              this._currentActiveButton = -1, this._previousPosition = null, cB || Ic.preventDefault(), this._activePointerId = -1
            } else if (Vc.type === Tc.d.POINTERMOVE && (this._activePointerId === Ic.pointerId || !rB))
              if (Bc.isPointerLock && this._onMouseMove) this._onMouseMove(Vc.event);
              else if (this._previousPosition) {
              const Bc = this.camera._calculateHandednessMultiplier(),
                nc = (Ic.clientX - this._previousPosition.x) * Bc,
                Vc = (Ic.clientY - this._previousPosition.y) * Bc;
              this._allowCameraRotation && this._applyPointerRotation(nc, Vc), this.onPointerMovedObservable.notifyObservers({
                offsetX: nc,
                offsetY: Vc
              }), this._previousPosition = {
                x: Ic.clientX,
                y: Ic.clientY
              }, cB || Ic.preventDefault()
            }
          }), this._onMouseMove = nc => {
            if (!Bc.isPointerLock) return;
            const Vc = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(nc.movementX * Vc, nc.movementY * Vc), this._previousPosition = null, cB || nc.preventDefault()
          }, this._observer = this.camera.knc()._inputManager._addCameraPointerObserver(this._pointerInput, Tc.d.POINTERDOWN | Tc.d.POINTERUP | Tc.d.POINTERMOVE), nc && (this._contextMenuBind = cB => this.onContextMenu(cB), nc.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(cB) {
          cB.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.knc()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const cB = this.camera.RV().getInputElement();
              cB && cB.removeEventListener("contextmenu", this._contextMenuBind)
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
        const Pc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: cB => "buttons" in cB,
            get: cB => cB.buttons,
            set: (cB, Bc) => {
              cB.buttons = Bc
            }
          },
          metadata: Pc
        }, rB, uc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: cB => "angularSensibility" in cB,
            get: cB => cB.angularSensibility,
            set: (cB, Bc) => {
              cB.angularSensibility = Bc
            }
          },
          metadata: Pc
        }, sc, Mc), Pc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pc
        })
      })(), cB
    })();
    sc.e.FreeCameraMouseInput = fc;
    var mB = nc(38227);
    let ec = (() => {
      var cB;
      let Bc, nc, rB, uc = [],
        sc = [],
        Mc = [],
        qB = [],
        fc = [],
        ec = [];
      return cB = class {
        constructor() {
          this.wheelPrecisionX = (0, Vc.k)(this, uc, 3), this.wheelPrecisionY = ((0, Vc.k)(this, sc), (0, Vc.k)(this, Mc, 3)), this.wheelPrecisionZ = ((0, Vc.k)(this, qB), (0, Vc.k)(this, fc, 3)), this.onChangedObservable = ((0, Vc.k)(this, ec), new Oc.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(cB) {
          cB = Pc.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = Bc => {
            if (Bc.type !== Tc.d.POINTERWHEEL) return;
            const nc = Bc.event,
              Vc = nc.deltaMode === mB.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Vc * nc.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Vc * nc.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Vc * nc.deltaZ / this._normalize, nc.preventDefault && (cB || nc.preventDefault())
          }, this._observer = this.camera.knc()._inputManager._addCameraPointerObserver(this._wheel, Tc.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.knc()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const Pc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelPrecisionX" in cB,
            get: cB => cB.wheelPrecisionX,
            set: (cB, Bc) => {
              cB.wheelPrecisionX = Bc
            }
          },
          metadata: Pc
        }, uc, sc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelPrecisionY" in cB,
            get: cB => cB.wheelPrecisionY,
            set: (cB, Bc) => {
              cB.wheelPrecisionY = Bc
            }
          },
          metadata: Pc
        }, Mc, qB), (0, Vc.g)(null, null, rB, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelPrecisionZ" in cB,
            get: cB => cB.wheelPrecisionZ,
            set: (cB, Bc) => {
              cB.wheelPrecisionZ = Bc
            }
          },
          metadata: Pc
        }, fc, ec), Pc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pc
        })
      })(), cB
    })();
    var tB;
    ! function(cB) {
      cB[cB.MoveRelative = 0] = "MoveRelative", cB[cB.RotateRelative = 1] = "RotateRelative", cB[cB.MoveScene = 2] = "MoveScene"
    }(tB || (tB = {}));
    let Sc = (() => {
      var cB;
      let Bc, nc, uc, sc, Mc, Pc, qB, Oc, Tc, fc = ec,
        mB = [];
      return cB = class extends fc {
        constructor() {
          super(...arguments), this.camera = (0, Vc.k)(this, mB), this._moveRelative = rB.p.Zero(), this._rotateRelative = rB.p.Zero(), this._moveScene = rB.p.Zero(), this._wheelXAction = tB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = tB.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(cB) {
          null === cB && this._wheelXAction !== tB.MoveRelative || (this._wheelXAction = tB.MoveRelative, this._wheelXActionCoordinate = cB)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== tB.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(cB) {
          null === cB && this._wheelYAction !== tB.MoveRelative || (this._wheelYAction = tB.MoveRelative, this._wheelYActionCoordinate = cB)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== tB.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(cB) {
          null === cB && this._wheelZAction !== tB.MoveRelative || (this._wheelZAction = tB.MoveRelative, this._wheelZActionCoordinate = cB)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== tB.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(cB) {
          null === cB && this._wheelXAction !== tB.RotateRelative || (this._wheelXAction = tB.RotateRelative, this._wheelXActionCoordinate = cB)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== tB.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(cB) {
          null === cB && this._wheelYAction !== tB.RotateRelative || (this._wheelYAction = tB.RotateRelative, this._wheelYActionCoordinate = cB)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== tB.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(cB) {
          null === cB && this._wheelZAction !== tB.RotateRelative || (this._wheelZAction = tB.RotateRelative, this._wheelZActionCoordinate = cB)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== tB.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(cB) {
          null === cB && this._wheelXAction !== tB.MoveScene || (this._wheelXAction = tB.MoveScene, this._wheelXActionCoordinate = cB)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== tB.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(cB) {
          null === cB && this._wheelYAction !== tB.MoveScene || (this._wheelYAction = tB.MoveScene, this._wheelYActionCoordinate = cB)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== tB.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(cB) {
          null === cB && this._wheelZAction !== tB.MoveScene || (this._wheelZAction = tB.MoveScene, this._wheelZActionCoordinate = cB)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== tB.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.orc(0), this._rotateRelative.orc(0), this._moveScene.orc(0), this._updateCamera(), this.camera.knc().useRightHandedSystem && (this._moveRelative.z *= -1);
          const cB = rB.d.Zero();
          this.camera.getViewMatrix().invertToRef(cB);
          const Bc = rB.p.Zero();
          rB.p.TransformNormalToRef(this._moveRelative, cB, Bc), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Bc), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(cB, Bc, nc) {
          if (0 === cB) return;
          if (null === Bc || null === nc) return;
          let Vc = null;
          switch (Bc) {
            case tB.MoveRelative:
              Vc = this._moveRelative;
              break;
            case tB.RotateRelative:
              Vc = this._rotateRelative;
              break;
            case tB.MoveScene:
              Vc = this._moveScene
          }
          switch (nc) {
            case 0:
              Vc.set(cB, 0, 0);
              break;
            case 1:
              Vc.set(0, cB, 0);
              break;
            case 2:
              Vc.set(0, 0, cB)
          }
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(fc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], uc = [(0, Ic.M)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], (0, Vc.g)(cB, null, Bc, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelXMoveRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelXMoveRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, nc, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelYMoveRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelYMoveRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, uc, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelZMoveRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelZMoveRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, sc, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelXRotateRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelXRotateRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, Mc, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelYRotateRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelYRotateRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, Pc, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelZRotateRelative" in cB,
            set: (cB, Bc) => {
              cB.wheelZRotateRelative = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, qB, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelXMoveScene" in cB,
            set: (cB, Bc) => {
              cB.wheelXMoveScene = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, Oc, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelYMoveScene" in cB,
            set: (cB, Bc) => {
              cB.wheelYMoveScene = Bc
            }
          },
          metadata: rB
        }, null, mB), (0, Vc.g)(cB, null, Tc, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelZMoveScene" in cB,
            set: (cB, Bc) => {
              cB.wheelZMoveScene = Bc
            }
          },
          metadata: rB
        }, null, mB), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB
    })();
    sc.e.FreeCameraMouseWheelInput = Sc;
    let yB = (() => {
      var cB;
      let Bc, nc, uc = [],
        sc = [],
        Mc = [],
        qB = [];
      return cB = class {
        constructor() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = cB, this.touchAngularSensibility = (0, Vc.k)(this, uc, 2e5), this.touchMoveSensibility = ((0, Vc.k)(this, sc), (0, Vc.k)(this, Mc, 250)), this.singleFingerRotate = ((0, Vc.k)(this, qB), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = Pc.g.IsSafari()
        }
        attachControl(cB) {
          cB = Pc.g.BackCompatCameraNoPreventDefault(arguments);
          let Bc = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = nc => {
              const Vc = nc.event,
                Ic = "mouse" === Vc.pointerType || this._isSafari && "undefined" === typeof Vc.pointerType;
              if (this.allowMouse || !Ic)
                if (nc.type === Tc.d.POINTERDOWN) {
                  if (cB || Vc.preventDefault(), this._pointerPressed.push(Vc.pointerId), 1 !== this._pointerPressed.length) return;
                  Bc = {
                    x: Vc.clientX,
                    y: Vc.clientY
                  }
                } else if (nc.type === Tc.d.POINTERUP) {
                cB || Vc.preventDefault();
                const nc = this._pointerPressed.indexOf(Vc.pointerId);
                if (-1 === nc) return;
                if (this._pointerPressed.splice(nc, 1), 0 != nc) return;
                Bc = null, this._offsetX = null, this._offsetY = null
              } else if (nc.type === Tc.d.POINTERMOVE) {
                if (cB || Vc.preventDefault(), !Bc) return;
                if (0 != this._pointerPressed.indexOf(Vc.pointerId)) return;
                this._offsetX = Vc.clientX - Bc.x, this._offsetY = -(Vc.clientY - Bc.y)
              }
            }), this._observer = this.camera.knc()._inputManager._addCameraPointerObserver(this._pointerInput, Tc.d.POINTERDOWN | Tc.d.POINTERUP | Tc.d.POINTERMOVE), this._onLostFocus) {
            const cB = this.camera.RV().getInputElement();
            cB && cB.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.knc()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const cB = this.camera.RV().getInputElement();
              cB && cB.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const cB = this.camera,
            Bc = cB.movement.input,
            nc = Bc.getEntry("touch", "rotate"),
            Vc = Bc.getEntry("touch", "translate"),
            Ic = cB._calculateHandednessMultiplier(),
            uc = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (nc) {
            const Bc = nc.sensitivity ?? 1 / this.touchAngularSensibility;
            cB.cameraRotation.y = this._offsetX * Ic * Bc, uc && (cB.cameraRotation.x = -this._offsetY * Ic * Bc)
          }
          if (!uc && Vc) {
            const Bc = cB._computeLocalCameraSpeed(),
              nc = Vc.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              Ic = rB.i.KV[0];
            Ic.puc(0, 0, Bc * this._offsetY * nc), rB.d.RotationYawPitchRollToRef(cB.rotation.y, cB.rotation.x, 0, cB._cameraRotationMatrix), rB.p.TransformCoordinatesToRef(Ic, cB._cameraRotationMatrix, Ic), cB.cameraDirection.addInPlace(Ic)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: cB => "touchAngularSensibility" in cB,
            get: cB => cB.touchAngularSensibility,
            set: (cB, Bc) => {
              cB.touchAngularSensibility = Bc
            }
          },
          metadata: rB
        }, uc, sc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: cB => "touchMoveSensibility" in cB,
            get: cB => cB.touchMoveSensibility,
            set: (cB, Bc) => {
              cB.touchMoveSensibility = Bc
            }
          },
          metadata: rB
        }, Mc, qB), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB
    })();
    sc.e.FreeCameraTouchInput = yB;
    var zB, pc, hc, aB = nc(37953);
    class lc extends sc.f {
      constructor(cB) {
        super(cB), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new qB), this
      }
      addMouse() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new fc(cB), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new Sc, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new yB), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(zB = lc.prototype).addDeviceOrientation ?? (zB.addDeviceOrientation = (0, aB.h)("FreeCameraInputsManager", "addDeviceOrientation")), (pc = lc.prototype).addVirtualJoystick ?? (pc.addVirtualJoystick = (0, aB.h)("FreeCameraInputsManager", "addVirtualJoystick")), (hc = lc.prototype).addGamepad ?? (hc.addGamepad = (0, aB.h)("FreeCameraInputsManager", "addGamepad"));
    var Yc = nc(37965),
      Lc = nc(35799);
    let gB = (() => {
        var cB;
        let Bc, nc, sc, Mc, qB = uc.h,
          Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [],
          Sc = [],
          yB = [];
        return cB = class extends qB {
          get angularSensibility() {
            const cB = this.inputs.attached.mouse;
            return cB ? cB.angularSensibility : 0
          }
          set angularSensibility(cB) {
            const Bc = this.inputs.attached.mouse;
            Bc && (Bc.angularSensibility = cB)
          }
          get keysUp() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysUp : []
          }
          set keysUp(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysUp = cB)
          }
          get keysUpward() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysUpward : []
          }
          set keysUpward(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysUpward = cB)
          }
          get keysDown() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysDown : []
          }
          set keysDown(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysDown = cB)
          }
          get keysDownward() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysDownward : []
          }
          set keysDownward(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysDownward = cB)
          }
          get keysLeft() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysLeft : []
          }
          set keysLeft(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysLeft = cB)
          }
          get keysRight() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRight : []
          }
          set keysRight(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRight = cB)
          }
          get keysRotateLeft() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRotateLeft : []
          }
          set keysRotateLeft(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRotateLeft = cB)
          }
          get keysRotateRight() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRotateRight : []
          }
          set keysRotateRight(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRotateRight = cB)
          }
          get keysRotateUp() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRotateUp : []
          }
          set keysRotateUp(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRotateUp = cB)
          }
          get keysRotateDown() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRotateDown : []
          }
          set keysRotateDown(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRotateDown = cB)
          }
          constructor(cB, Bc, nc) {
            var Ic;
            super(cB, Bc, nc, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Ic = this, this.ellipsoid = (0, Vc.k)(this, Oc, new rB.p(.5, 1, .5)), this.ellipsoidOffset = ((0, Vc.k)(this, Tc), (0, Vc.k)(this, fc, new rB.p(0, 0, 0))), this.checkCollisions = ((0, Vc.k)(this, mB), (0, Vc.k)(this, ec, !1)), this.applyGravity = ((0, Vc.k)(this, tB), (0, Vc.k)(this, Sc, !1)), this.inputs = (0, Vc.k)(this, yB), this._needMoveForGravity = !1, this._oldPosition = rB.p.Zero(), this._diffPosition = rB.p.Zero(), this._newPosition = rB.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(cB, Bc) {
              let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Ic._newPosition.qqc(Bc), Ic._newPosition.subtractToRef(Ic._oldPosition, Ic._diffPosition), Ic._diffPosition.length() > Yc.e.CollisionsEpsilon && (Ic.position.addToRef(Ic._diffPosition, Ic._deferredPositionUpdate), Ic._deferOnly ? Ic._deferredUpdated = !0 : Ic.position.qqc(Ic._deferredPositionUpdate), Ic.SB && nc && Ic.SB(nc))
            }, this.inputs = new lc(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(cB, Bc) {
            Bc = Pc.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Bc)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new rB.p(0, 0, 0), this.cameraRotation = new rB.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(cB) {
            this._collisionMask = isNaN(cB) ? -1 : cB
          }
          _collideWithWorld(cB) {
            let Bc;
            Bc = this.parent ? rB.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Bc.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const nc = this.knc().collisionCoordinator;
            this._collider || (this._collider = nc.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Vc = cB;
            this.applyGravity && (Vc = cB.add(this.knc().gravity)), nc.getNewPosition(this._oldPosition, Vc, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = rB.p.Zero(), this._transformedDirection = rB.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(cB) {
            this._needMoveForGravity = cB
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.knc().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(qB[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.L)()], nc = [(0, Ic.L)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: cB => "ellipsoid" in cB,
              get: cB => cB.ellipsoid,
              set: (cB, Bc) => {
                cB.ellipsoid = Bc
              }
            },
            metadata: rB
          }, Oc, Tc), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "ellipsoidOffset" in cB,
              get: cB => cB.ellipsoidOffset,
              set: (cB, Bc) => {
                cB.ellipsoidOffset = Bc
              }
            },
            metadata: rB
          }, fc, mB), (0, Vc.g)(null, null, sc, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: cB => "checkCollisions" in cB,
              get: cB => cB.checkCollisions,
              set: (cB, Bc) => {
                cB.checkCollisions = Bc
              }
            },
            metadata: rB
          }, ec, tB), (0, Vc.g)(null, null, Mc, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: cB => "applyGravity" in cB,
              get: cB => cB.applyGravity,
              set: (cB, Bc) => {
                cB.applyGravity = Bc
              }
            },
            metadata: rB
          }, Sc, yB), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Uc = !1;
    Uc || (Uc = !0, (0, Lc.d)("BABYLON.FreeCamera", gB))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);
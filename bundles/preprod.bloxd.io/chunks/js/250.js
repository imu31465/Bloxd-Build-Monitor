export const id = 250;
export const ids = [250];
export const modules = {
  39941: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => hq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(39943),
      xq = gq(39980),
      Aq = gq(39921),
      cq = gq(39845);
    let uq = (() => {
      var qq;
      let Eq, gq, mq, xq, uq, Bq, Wq, Nq, aq, Vq, dq, jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        vq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [];
      return qq = class {
        constructor() {
          this.keysUp = (0, Yq.i)(this, jq, [38]), this.keysUpward = ((0, Yq.i)(this, Hq), (0, Yq.i)(this, oq, [33])), this.keysDown = ((0, Yq.i)(this, Pq), (0, Yq.i)(this, Qq, [40])), this.keysDownward = ((0, Yq.i)(this, yq), (0, Yq.i)(this, tq, [34])), this.keysLeft = ((0, Yq.i)(this, rq), (0, Yq.i)(this, vq, [37])), this.keysRight = ((0, Yq.i)(this, hq), (0, Yq.i)(this, nq, [39])), this.rotationSpeed = ((0, Yq.i)(this, bq), (0, Yq.i)(this, iq, .5)), this.keysRotateLeft = ((0, Yq.i)(this, Zq), (0, Yq.i)(this, fq, [])), this.keysRotateRight = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, [])), this.keysRotateUp = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, [])), this.keysRotateDown = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, [])), this._keys = ((0, Yq.i)(this, Lq), new Array)
        }
        attachControl(qq) {
          qq = cq.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZJ(), this._engine = this._scene.Ba(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eq => {
            const gq = Eq.event;
            if (!gq.metaKey)
              if (Eq.type === Aq.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysUpward.indexOf(gq.keyCode) || -1 !== this.keysDownward.indexOf(gq.keyCode) || -1 !== this.keysRotateLeft.indexOf(gq.keyCode) || -1 !== this.keysRotateRight.indexOf(gq.keyCode) || -1 !== this.keysRotateUp.indexOf(gq.keyCode) || -1 !== this.keysRotateDown.indexOf(gq.keyCode)) {
                  -1 === this._keys.indexOf(gq.keyCode) && this._keys.push(gq.keyCode), qq || gq.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysUpward.indexOf(gq.keyCode) || -1 !== this.keysDownward.indexOf(gq.keyCode) || -1 !== this.keysRotateLeft.indexOf(gq.keyCode) || -1 !== this.keysRotateRight.indexOf(gq.keyCode) || -1 !== this.keysRotateUp.indexOf(gq.keyCode) || -1 !== this.keysRotateDown.indexOf(gq.keyCode)) {
              const Eq = this._keys.indexOf(gq.keyCode);
              Eq >= 0 && this._keys.splice(Eq, 1), qq || gq.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const qq = this.camera,
              Eq = qq.movement.input,
              gq = Eq.getEntry("keyboard", "translate"),
              Yq = Eq.getEntry("keyboard", "rotate"),
              lq = Yq?.sensitivity ?? 1,
              mq = qq._localDirection.Vqq(0, 0, 0);
            for (let Oq = 0; Oq < this._keys.length; Oq++) {
              const Eq = this._keys[Oq]; - 1 !== this.keysLeft.indexOf(Eq) ? mq.x -= 1 : -1 !== this.keysUp.indexOf(Eq) ? mq.z += 1 : -1 !== this.keysRight.indexOf(Eq) ? mq.x += 1 : -1 !== this.keysDown.indexOf(Eq) ? mq.z -= 1 : -1 !== this.keysUpward.indexOf(Eq) ? mq.y += 1 : -1 !== this.keysDownward.indexOf(Eq) ? mq.y -= 1 : -1 !== this.keysRotateLeft.indexOf(Eq) ? Yq && (qq.cameraRotation.y -= this._getLocalRotation() * lq) : -1 !== this.keysRotateRight.indexOf(Eq) ? Yq && (qq.cameraRotation.y += this._getLocalRotation() * lq) : -1 !== this.keysRotateUp.indexOf(Eq) ? Yq && (qq.cameraRotation.x -= this._getLocalRotation() * lq) : -1 !== this.keysRotateDown.indexOf(Eq) && Yq && (qq.cameraRotation.x += this._getLocalRotation() * lq)
            }
            if (gq && (0 !== mq.x || 0 !== mq.y || 0 !== mq.z)) {
              const Eq = qq._computeLocalCameraSpeed() * (gq.sensitivity ?? 1);
              mq.normalize().scaleInPlace(Eq), qq.ZJ().useRightHandedSystem && (mq.z *= -1), qq.getViewMatrix().invertToRef(qq._cameraTransformMatrix), Oq.q.TransformNormalToRef(mq, qq._cameraTransformMatrix, qq._transformedDirection), qq.cameraDirection.addInPlace(qq._transformedDirection)
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
          const qq = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * qq
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], mq = [(0, lq.M)()], xq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], dq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysUp" in qq,
            get: qq => qq.keysUp,
            set: (qq, Eq) => {
              qq.keysUp = Eq
            }
          },
          metadata: Oq
        }, jq, Hq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysUpward" in qq,
            get: qq => qq.keysUpward,
            set: (qq, Eq) => {
              qq.keysUpward = Eq
            }
          },
          metadata: Oq
        }, oq, Pq), (0, Yq.f)(null, null, mq, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysDown" in qq,
            get: qq => qq.keysDown,
            set: (qq, Eq) => {
              qq.keysDown = Eq
            }
          },
          metadata: Oq
        }, Qq, yq), (0, Yq.f)(null, null, xq, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysDownward" in qq,
            get: qq => qq.keysDownward,
            set: (qq, Eq) => {
              qq.keysDownward = Eq
            }
          },
          metadata: Oq
        }, tq, rq), (0, Yq.f)(null, null, uq, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysLeft" in qq,
            get: qq => qq.keysLeft,
            set: (qq, Eq) => {
              qq.keysLeft = Eq
            }
          },
          metadata: Oq
        }, vq, hq), (0, Yq.f)(null, null, Bq, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRight" in qq,
            get: qq => qq.keysRight,
            set: (qq, Eq) => {
              qq.keysRight = Eq
            }
          },
          metadata: Oq
        }, nq, bq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: qq => "rotationSpeed" in qq,
            get: qq => qq.rotationSpeed,
            set: (qq, Eq) => {
              qq.rotationSpeed = Eq
            }
          },
          metadata: Oq
        }, iq, Zq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRotateLeft" in qq,
            get: qq => qq.keysRotateLeft,
            set: (qq, Eq) => {
              qq.keysRotateLeft = Eq
            }
          },
          metadata: Oq
        }, fq, Mq), (0, Yq.f)(null, null, aq, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRotateRight" in qq,
            get: qq => qq.keysRotateRight,
            set: (qq, Eq) => {
              qq.keysRotateRight = Eq
            }
          },
          metadata: Oq
        }, Tq, zq), (0, Yq.f)(null, null, Vq, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRotateUp" in qq,
            get: qq => qq.keysRotateUp,
            set: (qq, Eq) => {
              qq.keysRotateUp = Eq
            }
          },
          metadata: Oq
        }, Sq, pq), (0, Yq.f)(null, null, dq, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRotateDown" in qq,
            get: qq => qq.keysRotateDown,
            set: (qq, Eq) => {
              qq.keysRotateDown = Eq
            }
          },
          metadata: Oq
        }, Gq, Lq), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq
    })();
    xq.d.FreeCameraKeyboardMoveInput = uq;
    var Bq = gq(37156),
      Wq = gq(39919);
    let Nq = (() => {
      var qq;
      let Eq, gq, Oq = [],
        mq = [],
        xq = [],
        Aq = [];
      return qq = class {
        _applyPointerRotation(qq, Eq) {
          this._pointerConditions.button = this._currentActiveButton;
          const gq = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!gq || "rotate" !== gq.interaction) return;
          const Yq = gq.zC ?? gq.sensitivity ?? 1 / this.angularSensibility,
            lq = gq.pC ?? gq.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += qq * Yq, this.camera.cameraRotation.x += Eq * lq
        }
        constructor() {
          let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = qq, this.buttons = (0, Yq.i)(this, Oq, [0, 1, 2]), this.angularSensibility = ((0, Yq.i)(this, mq), (0, Yq.i)(this, xq, 2e3)), this._pointerInput = (0, Yq.i)(this, Aq), this._previousPosition = null, this.onPointerMovedObservable = new Bq.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(qq) {
          qq = cq.f.BackCompatCameraNoPreventDefault(arguments);
          const Eq = this.camera.Ba(),
            gq = Eq.getInputElement();
          this._pointerInput || (this._pointerInput = Yq => {
            const lq = Yq.event,
              Oq = "touch" === lq.pointerType;
            if (!this.touchEnabled && Oq) return;
            if (Yq.type !== Wq.b.POINTERMOVE && -1 === this.buttons.indexOf(lq.button)) return;
            const mq = lq.target;
            if (Yq.type === Wq.b.POINTERDOWN) {
              if (Oq && -1 !== this._activePointerId || !Oq && -1 !== this._currentActiveButton) return;
              this._activePointerId = lq.pointerId;
              try {
                mq?.setPointerCapture(lq.pointerId)
              } catch (xq) {} - 1 === this._currentActiveButton && (this._currentActiveButton = lq.button), this._previousPosition = {
                x: lq.clientX,
                y: lq.clientY
              }, qq || (lq.preventDefault(), gq && gq.focus()), Eq.isPointerLock && this._onMouseMove && this._onMouseMove(Yq.event)
            } else if (Yq.type === Wq.b.POINTERUP) {
              if (Oq && this._activePointerId !== lq.pointerId || !Oq && this._currentActiveButton !== lq.button) return;
              try {
                mq?.releasePointerCapture(lq.pointerId)
              } catch (xq) {}
              this._currentActiveButton = -1, this._previousPosition = null, qq || lq.preventDefault(), this._activePointerId = -1
            } else if (Yq.type === Wq.b.POINTERMOVE && (this._activePointerId === lq.pointerId || !Oq))
              if (Eq.isPointerLock && this._onMouseMove) this._onMouseMove(Yq.event);
              else if (this._previousPosition) {
              const Eq = this.camera._calculateHandednessMultiplier(),
                gq = (lq.clientX - this._previousPosition.x) * Eq,
                Yq = (lq.clientY - this._previousPosition.y) * Eq;
              this._allowCameraRotation && this._applyPointerRotation(gq, Yq), this.onPointerMovedObservable.notifyObservers({
                offsetX: gq,
                offsetY: Yq
              }), this._previousPosition = {
                x: lq.clientX,
                y: lq.clientY
              }, qq || lq.preventDefault()
            }
          }), this._onMouseMove = gq => {
            if (!Eq.isPointerLock) return;
            const Yq = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(gq.movementX * Yq, gq.movementY * Yq), this._previousPosition = null, qq || gq.preventDefault()
          }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, Wq.b.POINTERDOWN | Wq.b.POINTERUP | Wq.b.POINTERMOVE), gq && (this._contextMenuBind = qq => this.onContextMenu(qq), gq.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(qq) {
          qq.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const qq = this.camera.Ba().getInputElement();
              qq && qq.removeEventListener("contextmenu", this._contextMenuBind)
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
        const cq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: qq => "buttons" in qq,
            get: qq => qq.buttons,
            set: (qq, Eq) => {
              qq.buttons = Eq
            }
          },
          metadata: cq
        }, Oq, mq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: qq => "angularSensibility" in qq,
            get: qq => qq.angularSensibility,
            set: (qq, Eq) => {
              qq.angularSensibility = Eq
            }
          },
          metadata: cq
        }, xq, Aq), cq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cq
        })
      })(), qq
    })();
    xq.d.FreeCameraMouseInput = Nq;
    var aq = gq(39926);
    let Vq = (() => {
      var qq;
      let Eq, gq, Oq, mq = [],
        xq = [],
        Aq = [],
        uq = [],
        Nq = [],
        Vq = [];
      return qq = class {
        constructor() {
          this.wheelPrecisionX = (0, Yq.i)(this, mq, 3), this.wheelPrecisionY = ((0, Yq.i)(this, xq), (0, Yq.i)(this, Aq, 3)), this.wheelPrecisionZ = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Nq, 3)), this.onChangedObservable = ((0, Yq.i)(this, Vq), new Bq.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(qq) {
          qq = cq.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eq => {
            if (Eq.type !== Wq.b.POINTERWHEEL) return;
            const gq = Eq.event,
              Yq = gq.deltaMode === aq.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * Yq * gq.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * Yq * gq.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * Yq * gq.deltaZ / this._normalize, gq.preventDefault && (qq || gq.preventDefault())
          }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._wheel, Wq.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const cq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelPrecisionX" in qq,
            get: qq => qq.wheelPrecisionX,
            set: (qq, Eq) => {
              qq.wheelPrecisionX = Eq
            }
          },
          metadata: cq
        }, mq, xq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelPrecisionY" in qq,
            get: qq => qq.wheelPrecisionY,
            set: (qq, Eq) => {
              qq.wheelPrecisionY = Eq
            }
          },
          metadata: cq
        }, Aq, uq), (0, Yq.f)(null, null, Oq, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelPrecisionZ" in qq,
            get: qq => qq.wheelPrecisionZ,
            set: (qq, Eq) => {
              qq.wheelPrecisionZ = Eq
            }
          },
          metadata: cq
        }, Nq, Vq), cq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cq
        })
      })(), qq
    })();
    var dq;
    ! function(qq) {
      qq[qq.MoveRelative = 0] = "MoveRelative", qq[qq.RotateRelative = 1] = "RotateRelative", qq[qq.MoveScene = 2] = "MoveScene"
    }(dq || (dq = {}));
    let jq = (() => {
      var qq;
      let Eq, gq, mq, xq, Aq, cq, uq, Bq, Wq, Nq = Vq,
        aq = [];
      return qq = class extends Nq {
        constructor() {
          super(...arguments), this.camera = (0, Yq.i)(this, aq), this._moveRelative = Oq.q.Zero(), this._rotateRelative = Oq.q.Zero(), this._moveScene = Oq.q.Zero(), this._wheelXAction = dq.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = dq.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(qq) {
          null === qq && this._wheelXAction !== dq.MoveRelative || (this._wheelXAction = dq.MoveRelative, this._wheelXActionCoordinate = qq)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== dq.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(qq) {
          null === qq && this._wheelYAction !== dq.MoveRelative || (this._wheelYAction = dq.MoveRelative, this._wheelYActionCoordinate = qq)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== dq.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(qq) {
          null === qq && this._wheelZAction !== dq.MoveRelative || (this._wheelZAction = dq.MoveRelative, this._wheelZActionCoordinate = qq)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== dq.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(qq) {
          null === qq && this._wheelXAction !== dq.RotateRelative || (this._wheelXAction = dq.RotateRelative, this._wheelXActionCoordinate = qq)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== dq.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(qq) {
          null === qq && this._wheelYAction !== dq.RotateRelative || (this._wheelYAction = dq.RotateRelative, this._wheelYActionCoordinate = qq)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== dq.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(qq) {
          null === qq && this._wheelZAction !== dq.RotateRelative || (this._wheelZAction = dq.RotateRelative, this._wheelZActionCoordinate = qq)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== dq.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(qq) {
          null === qq && this._wheelXAction !== dq.MoveScene || (this._wheelXAction = dq.MoveScene, this._wheelXActionCoordinate = qq)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== dq.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(qq) {
          null === qq && this._wheelYAction !== dq.MoveScene || (this._wheelYAction = dq.MoveScene, this._wheelYActionCoordinate = qq)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== dq.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(qq) {
          null === qq && this._wheelZAction !== dq.MoveScene || (this._wheelZAction = dq.MoveScene, this._wheelZActionCoordinate = qq)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== dq.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.A4(0), this._rotateRelative.A4(0), this._moveScene.A4(0), this._updateCamera(), this.camera.ZJ().useRightHandedSystem && (this._moveRelative.z *= -1);
          const qq = Oq.e.Zero();
          this.camera.getViewMatrix().invertToRef(qq);
          const Eq = Oq.q.Zero();
          Oq.q.TransformNormalToRef(this._moveRelative, qq, Eq), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Eq), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(qq, Eq, gq) {
          if (0 === qq) return;
          if (null === Eq || null === gq) return;
          let Yq = null;
          switch (Eq) {
            case dq.MoveRelative:
              Yq = this._moveRelative;
              break;
            case dq.RotateRelative:
              Yq = this._rotateRelative;
              break;
            case dq.MoveScene:
              Yq = this._moveScene
          }
          switch (gq) {
            case 0:
              Yq.set(qq, 0, 0);
              break;
            case 1:
              Yq.set(0, qq, 0);
              break;
            case 2:
              Yq.set(0, 0, qq)
          }
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], mq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], (0, Yq.f)(qq, null, Eq, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelXMoveRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelXMoveRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, gq, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelYMoveRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelYMoveRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, mq, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelZMoveRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelZMoveRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, xq, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelXRotateRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelXRotateRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, Aq, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelYRotateRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelYRotateRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, cq, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelZRotateRelative" in qq,
            set: (qq, Eq) => {
              qq.wheelZRotateRelative = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, uq, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelXMoveScene" in qq,
            set: (qq, Eq) => {
              qq.wheelXMoveScene = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, Bq, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelYMoveScene" in qq,
            set: (qq, Eq) => {
              qq.wheelYMoveScene = Eq
            }
          },
          metadata: Oq
        }, null, aq), (0, Yq.f)(qq, null, Wq, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelZMoveScene" in qq,
            set: (qq, Eq) => {
              qq.wheelZMoveScene = Eq
            }
          },
          metadata: Oq
        }, null, aq), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq
    })();
    xq.d.FreeCameraMouseWheelInput = jq;
    let Hq = (() => {
      var qq;
      let Eq, gq, mq = [],
        xq = [],
        Aq = [],
        uq = [];
      return qq = class {
        constructor() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = qq, this.touchAngularSensibility = (0, Yq.i)(this, mq, 2e5), this.touchMoveSensibility = ((0, Yq.i)(this, xq), (0, Yq.i)(this, Aq, 250)), this.singleFingerRotate = ((0, Yq.i)(this, uq), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = cq.f.IsSafari()
        }
        attachControl(qq) {
          qq = cq.f.BackCompatCameraNoPreventDefault(arguments);
          let Eq = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = gq => {
              const Yq = gq.event,
                lq = "mouse" === Yq.pointerType || this._isSafari && "undefined" === typeof Yq.pointerType;
              if (this.allowMouse || !lq)
                if (gq.type === Wq.b.POINTERDOWN) {
                  if (qq || Yq.preventDefault(), this._pointerPressed.push(Yq.pointerId), 1 !== this._pointerPressed.length) return;
                  Eq = {
                    x: Yq.clientX,
                    y: Yq.clientY
                  }
                } else if (gq.type === Wq.b.POINTERUP) {
                qq || Yq.preventDefault();
                const gq = this._pointerPressed.indexOf(Yq.pointerId);
                if (-1 === gq) return;
                if (this._pointerPressed.splice(gq, 1), 0 != gq) return;
                Eq = null, this._offsetX = null, this._offsetY = null
              } else if (gq.type === Wq.b.POINTERMOVE) {
                if (qq || Yq.preventDefault(), !Eq) return;
                if (0 != this._pointerPressed.indexOf(Yq.pointerId)) return;
                this._offsetX = Yq.clientX - Eq.x, this._offsetY = -(Yq.clientY - Eq.y)
              }
            }), this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, Wq.b.POINTERDOWN | Wq.b.POINTERUP | Wq.b.POINTERMOVE), this._onLostFocus) {
            const qq = this.camera.Ba().getInputElement();
            qq && qq.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const qq = this.camera.Ba().getInputElement();
              qq && qq.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const qq = this.camera,
            Eq = qq.movement.input,
            gq = Eq.getEntry("touch", "rotate"),
            Yq = Eq.getEntry("touch", "translate"),
            lq = qq._calculateHandednessMultiplier(),
            mq = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (gq) {
            const Eq = gq.sensitivity ?? 1 / this.touchAngularSensibility;
            qq.cameraRotation.y = this._offsetX * lq * Eq, mq && (qq.cameraRotation.x = -this._offsetY * lq * Eq)
          }
          if (!mq && Yq) {
            const Eq = qq._computeLocalCameraSpeed(),
              gq = Yq.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              lq = Oq.o.Na[0];
            lq.Vqq(0, 0, Eq * this._offsetY * gq), Oq.e.RotationYawPitchRollToRef(qq.rotation.y, qq.rotation.x, 0, qq._cameraRotationMatrix), Oq.q.TransformCoordinatesToRef(lq, qq._cameraRotationMatrix, lq), qq.cameraDirection.addInPlace(lq)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: qq => "touchAngularSensibility" in qq,
            get: qq => qq.touchAngularSensibility,
            set: (qq, Eq) => {
              qq.touchAngularSensibility = Eq
            }
          },
          metadata: Oq
        }, mq, xq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: qq => "touchMoveSensibility" in qq,
            get: qq => qq.touchMoveSensibility,
            set: (qq, Eq) => {
              qq.touchMoveSensibility = Eq
            }
          },
          metadata: Oq
        }, Aq, uq), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq
    })();
    xq.d.FreeCameraTouchInput = Hq;
    var oq, Pq, Qq, yq = gq(39636);
    class tq extends xq.f {
      constructor(qq) {
        super(qq), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new uq), this
      }
      addMouse() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new Nq(qq), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new jq, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new Hq), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(oq = tq.prototype).addDeviceOrientation ?? (oq.addDeviceOrientation = (0, yq.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Pq = tq.prototype).addVirtualJoystick ?? (Pq.addVirtualJoystick = (0, yq.i)("FreeCameraInputsManager", "addVirtualJoystick")), (Qq = tq.prototype).addGamepad ?? (Qq.addGamepad = (0, yq.i)("FreeCameraInputsManager", "addGamepad"));
    var rq = gq(39653),
      vq = gq(37171);
    let hq = (() => {
        var qq;
        let Eq, gq, xq, Aq, uq = mq.h,
          Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [],
          jq = [],
          Hq = [];
        return qq = class extends uq {
          get angularSensibility() {
            const qq = this.inputs.attached.mouse;
            return qq ? qq.angularSensibility : 0
          }
          set angularSensibility(qq) {
            const Eq = this.inputs.attached.mouse;
            Eq && (Eq.angularSensibility = qq)
          }
          get keysUp() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysUp : []
          }
          set keysUp(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysUp = qq)
          }
          get keysUpward() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysUpward : []
          }
          set keysUpward(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysUpward = qq)
          }
          get keysDown() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysDown : []
          }
          set keysDown(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysDown = qq)
          }
          get keysDownward() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysDownward : []
          }
          set keysDownward(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysDownward = qq)
          }
          get keysLeft() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysLeft : []
          }
          set keysLeft(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysLeft = qq)
          }
          get keysRight() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRight : []
          }
          set keysRight(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRight = qq)
          }
          get keysRotateLeft() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRotateLeft : []
          }
          set keysRotateLeft(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRotateLeft = qq)
          }
          get keysRotateRight() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRotateRight : []
          }
          set keysRotateRight(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRotateRight = qq)
          }
          get keysRotateUp() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRotateUp : []
          }
          set keysRotateUp(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRotateUp = qq)
          }
          get keysRotateDown() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRotateDown : []
          }
          set keysRotateDown(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRotateDown = qq)
          }
          constructor(qq, Eq, gq) {
            var lq;
            super(qq, Eq, gq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), lq = this, this.ellipsoid = (0, Yq.i)(this, Bq, new Oq.q(.5, 1, .5)), this.ellipsoidOffset = ((0, Yq.i)(this, Wq), (0, Yq.i)(this, Nq, new Oq.q(0, 0, 0))), this.checkCollisions = ((0, Yq.i)(this, aq), (0, Yq.i)(this, Vq, !1)), this.applyGravity = ((0, Yq.i)(this, dq), (0, Yq.i)(this, jq, !1)), this.inputs = (0, Yq.i)(this, Hq), this._needMoveForGravity = !1, this._oldPosition = Oq.q.Zero(), this._diffPosition = Oq.q.Zero(), this._newPosition = Oq.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(qq, Eq) {
              let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              lq._newPosition.WG(Eq), lq._newPosition.subtractToRef(lq._oldPosition, lq._diffPosition), lq._diffPosition.length() > rq.b.CollisionsEpsilon && (lq.position.addToRef(lq._diffPosition, lq._deferredPositionUpdate), lq._deferOnly ? lq._deferredUpdated = !0 : lq.position.WG(lq._deferredPositionUpdate), lq.qW && gq && lq.qW(gq))
            }, this.inputs = new tq(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(qq, Eq) {
            Eq = cq.f.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Eq)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new Oq.q(0, 0, 0), this.cameraRotation = new Oq.p(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(qq) {
            this._collisionMask = isNaN(qq) ? -1 : qq
          }
          _collideWithWorld(qq) {
            let Eq;
            Eq = this.parent ? Oq.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Eq.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const gq = this.ZJ().collisionCoordinator;
            this._collider || (this._collider = gq.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let Yq = qq;
            this.applyGravity && (Yq = qq.add(this.ZJ().gravity)), gq.getNewPosition(this._oldPosition, Yq, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = Oq.q.Zero(), this._transformedDirection = Oq.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(qq) {
            this._needMoveForGravity = qq
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.ZJ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(uq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.I)()], gq = [(0, lq.I)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: qq => "ellipsoid" in qq,
              get: qq => qq.ellipsoid,
              set: (qq, Eq) => {
                qq.ellipsoid = Eq
              }
            },
            metadata: Oq
          }, Bq, Wq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "ellipsoidOffset" in qq,
              get: qq => qq.ellipsoidOffset,
              set: (qq, Eq) => {
                qq.ellipsoidOffset = Eq
              }
            },
            metadata: Oq
          }, Nq, aq), (0, Yq.f)(null, null, xq, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: qq => "checkCollisions" in qq,
              get: qq => qq.checkCollisions,
              set: (qq, Eq) => {
                qq.checkCollisions = Eq
              }
            },
            metadata: Oq
          }, Vq, dq), (0, Yq.f)(null, null, Aq, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: qq => "applyGravity" in qq,
              get: qq => qq.applyGravity,
              set: (qq, Eq) => {
                qq.applyGravity = Eq
              }
            },
            metadata: Oq
          }, jq, Hq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      nq = !1;
    nq || (nq = !0, (0, vq.g)("BABYLON.FreeCamera", hq))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
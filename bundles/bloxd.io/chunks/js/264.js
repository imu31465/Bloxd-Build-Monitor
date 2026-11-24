export const id = 264;
export const ids = [264];
export const modules = {
  41289: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => rt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37367),
      mt = Vt(37336),
      dt = Vt(37372),
      jt = Vt(40415),
      Ht = Vt(40601),
      Xt = Vt(40373),
      Qt = Vt(40098),
      lt = Vt(37342);
    class Et {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(tt) {
        this._zoomStopsAnimation = tt
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(tt) {
        this._idleRotationSpeed = tt
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(tt) {
        this._idleRotationWaitTime = tt
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(tt) {
        this._idleRotationSpinupTime = tt
      }
      get idleRotationSpinupTime() {
        return this._idleRotationSpinupTime
      }
      get rotationInProgress() {
        return Math.abs(this._cameraRotationSpeed) > 0
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(tt) {
        this._attachedCamera = tt;
        const et = this._attachedCamera.vI();
        this._onPrePointerObservableObserver = et.onPrePointerObservable.add((tt => {
          tt.type !== Xt.c.POINTERDOWN ? tt.type === Xt.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = tt.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const tt = Qt.b.Now;
          let et = 0;
          null != this._lastFrameTime && (et = tt - this._lastFrameTime), this._lastFrameTime = tt, this._applyUserInteraction();
          const Vt = tt - this._lastInteractionTime - this._idleRotationWaitTime,
            Ot = Math.max(Math.min(Vt / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Ot, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (et / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const tt = this._attachedCamera.vI();
        this._onPrePointerObservableObserver && tt.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(tt) {
        this._lastInteractionTime = tt ?? Qt.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < lt.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let tt = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (tt = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? tt : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Qt.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Vt(41293);
    class ft {
      constructor() {
        this._easingMode = ft.EASINGMODE_EASEIN
      }
      setEasingMode(tt) {
        const et = Math.min(Math.max(tt, 0), 2);
        this._easingMode = et
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(tt) {
        throw new Error("You must implement this method")
      }
      ease(tt) {
        switch (this._easingMode) {
          case ft.EASINGMODE_EASEIN:
            return this.easeInCore(tt);
          case ft.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - tt)
        }
        return tt >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - tt))) + .5 : .5 * this.easeInCore(2 * tt)
      }
    }
    ft.EASINGMODE_EASEIN = 0, ft.EASINGMODE_EASEOUT = 1, ft.EASINGMODE_EASEINOUT = 2;
    var wt = Vt(41298);
    class yt {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(tt) {
        if (this._autoTransitionRange === tt) return;
        this._autoTransitionRange = tt;
        const et = this._attachedCamera;
        et && (tt ? this._onMeshTargetChangedObserver = et.onMeshTargetChangedObservable.add((tt => {
          if (tt && (tt.computeWorldMatrix(!0), tt.fL)) {
            const et = tt.fL().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * et, this.upperRadiusTransitionRange = .05 * et
          }
        })) : this._onMeshTargetChangedObserver && et.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(tt) {
        this._attachedCamera = tt, this._onAfterCheckInputsObserver = tt.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(tt) {
        return !!this._attachedCamera && (this._attachedCamera.radius === tt && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(tt) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (yt.EasingFunction.setEasingMode(yt.EasingMode), this._radiusBounceTransition = wt.d.CreateAnimation("radius", wt.d.ANIMATIONTYPE_FLOAT, 60, yt.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const et = wt.d.TransitionTo("radius", this._attachedCamera.radius + tt, this._attachedCamera, this._attachedCamera.vI(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        et && this._animatables.push(et)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    yt.EasingFunction = new class extends ft {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = tt
      }
      easeInCore(tt) {
        const et = Math.max(0, this.amplitude);
        return Math.pow(tt, 3) - tt * et * Math.sin(3.141592653589793 * tt)
      }
    }(.3), yt.EasingMode = ft.EASINGMODE_EASEOUT;
    class Nt {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Dt.c, this._mode = Nt.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(tt) {
        this._mode = tt
      }
      get mode() {
        return this._mode
      }
      set radiusScale(tt) {
        this._radiusScale = tt
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(tt) {
        this._positionScale = tt
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(tt) {
        this._defaultElevation = tt
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(tt) {
        this._elevationReturnTime = tt
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(tt) {
        this._elevationReturnWaitTime = tt
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(tt) {
        this._zoomStopsAnimation = tt
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(tt) {
        this._framingTime = tt
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(tt) {
        this._attachedCamera = tt;
        const et = this._attachedCamera.vI();
        Nt.EasingFunction.setEasingMode(Nt.EasingMode), this._onPrePointerObservableObserver = et.onPrePointerObservable.add((tt => {
          tt.type !== Xt.c.POINTERDOWN ? tt.type === Xt.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = tt.onMeshTargetChangedObservable.add((tt => {
          tt && tt.fL && this.zoomOnMesh(tt, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = tt.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const tt = this._attachedCamera.vI();
        this._onPrePointerObservableObserver && tt.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        tt.computeWorldMatrix(!0);
        const Ot = tt.fL().boundingBox;
        this.zoomOnBoundingInfo(Ot.minimumWorld, Ot.maximumWorld, et, Vt)
      }
      zoomOnMeshHierarchy(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        tt.computeWorldMatrix(!0);
        const Ot = tt.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Ot.min, Ot.max, et, Vt)
      }
      zoomOnMeshesHierarchy(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ot = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          qt = new mt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Dt = 0; Dt < tt.length; Dt++) {
          const et = tt[Dt].getHierarchyBoundingVectors(!0);
          mt.n.CheckExtends(et.min, Ot, qt), mt.n.CheckExtends(et.max, Ot, qt)
        }
        this.zoomOnBoundingInfo(Ot, qt, et, Vt)
      }
      zoomOnBoundingInfo(tt, et) {
        let Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Dt = tt.y,
          dt = Dt + (et.y - Dt) * this._positionScale,
          jt = et.subtract(tt).scale(.5);
        if (!isFinite(dt)) return !1;
        if (Ot) Vt = new mt.n(0, dt, 0);
        else {
          const et = tt.add(jt);
          Vt = new mt.n(et.x, dt, et.z)
        }
        this._vectorTransition || (this._vectorTransition = wt.d.CreateAnimation("target", wt.d.ANIMATIONTYPE_VECTOR3, 60, Nt.EasingFunction)), this._betaIsAnimating = !0;
        let Ht = wt.d.TransitionTo("target", Vt, this._attachedCamera, this._attachedCamera.vI(), 60, this._vectorTransition, this._framingTime);
        Ht && this._animatables.push(Ht);
        let Xt = 0;
        if (this._mode === Nt.FitFrustumSidesMode) {
          const Vt = this._calculateLowerRadiusFromModelBoundingSphere(tt, et);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = jt.length() + this._attachedCamera.minZ), Xt = Vt
        } else this._mode === Nt.IgnoreBoundsSizeMode && (Xt = this._calculateLowerRadiusFromModelBoundingSphere(tt, et), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Vt = et.subtract(tt).length();
          this._attachedCamera.panningSensibility = 5e3 / Vt, this._attachedCamera.wheelPrecision = 100 / Xt
        }
        return this._radiusTransition || (this._radiusTransition = wt.d.CreateAnimation("radius", wt.d.ANIMATIONTYPE_FLOAT, 60, Nt.EasingFunction)), Ht = wt.d.TransitionTo("radius", Xt, this._attachedCamera, this._attachedCamera.vI(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), qt && qt(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Ht && this._animatables.push(Ht), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(tt, et) {
        const Vt = this._attachedCamera;
        if (!Vt) return 0;
        let Ot = Vt._calculateLowerRadiusFromModelBoundingSphere(tt, et, this._radiusScale);
        return Vt.lowerRadiusLimit && this._mode === Nt.IgnoreBoundsSizeMode && (Ot = Ot < Vt.lowerRadiusLimit ? Vt.lowerRadiusLimit : Ot), Vt.upperRadiusLimit && (Ot = Ot > Vt.upperRadiusLimit ? Vt.upperRadiusLimit : Ot), Ot
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const tt = Qt.b.Now - this._lastInteractionTime,
          et = .5 * Math.PI - this._defaultElevation,
          Vt = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Vt && tt >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = wt.d.CreateAnimation("beta", wt.d.ANIMATIONTYPE_FLOAT, 60, Nt.EasingFunction));
          const tt = wt.d.TransitionTo("beta", et, this._attachedCamera, this._attachedCamera.vI(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          tt && this._animatables.push(tt)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Qt.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Nt.EasingFunction = new class extends ft {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = tt
      }
      easeInCore(tt) {
        return this.exponent <= 0 ? tt : (Math.exp(this.exponent * tt) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Nt.EasingMode = ft.EASINGMODE_EASEINOUT, Nt.IgnoreBoundsSizeMode = 0, Nt.FitFrustumSidesMode = 1;
    var Mt = Vt(40409),
      bt = Vt(40401),
      Jt = Vt(40431),
      Ct = Vt(40300);
    let ut = (() => {
        var tt;
        let et, Vt = [],
          Dt = [];
        return tt = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Ot.m)(this, Vt, [0, 1, 2]), this._pointerInput = (0, Ot.m)(this, Dt)
          }
          attachControl(tt) {
            tt = Ct.l.BackCompatCameraNoPreventDefault(arguments);
            const et = this.camera.Jf(),
              Vt = et.getInputElement();
            let Ot = 0,
              qt = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Dt => {
              const mt = Dt.event,
                dt = "touch" === mt.pointerType;
              if (Dt.type !== Xt.c.POINTERMOVE && -1 === this.buttons.indexOf(mt.button)) return;
              const jt = mt.target;
              if (this._altKey = mt.altKey, this._ctrlKey = mt.ctrlKey, this._metaKey = mt.metaKey, this._shiftKey = mt.shiftKey, this._buttonsPressed = mt.buttons, et.isPointerLock) {
                const tt = mt.movementX,
                  et = mt.movementY;
                this.onTouch(null, tt, et), this._pointA = null, this._pointB = null
              } else {
                if (Dt.type !== Xt.c.POINTERDOWN && Dt.type !== Xt.c.POINTERDOUBLETAP && dt && this._pointA?.pointerId !== mt.pointerId && this._pointB?.pointerId !== mt.pointerId) return;
                if (Dt.type !== Xt.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !dt)
                  if (Dt.type === Xt.c.POINTERDOUBLETAP) this.onDoubleTap(mt.pointerType, mt);
                  else if (Dt.type !== Xt.c.POINTERUP || this._currentMousePointerIdDown !== mt.pointerId && !dt) {
                  if (Dt.type === Xt.c.POINTERMOVE)
                    if (tt || mt.preventDefault(), this._pointA && null === this._pointB) {
                      const tt = mt.clientX - this._pointA.x,
                        et = mt.clientY - this._pointA.y;
                      this._pointA.x = mt.clientX, this._pointA.y = mt.clientY, this.onTouch(this._pointA, tt, et)
                    } else if (this._pointA && this._pointB) {
                    const tt = this._pointA.pointerId === mt.pointerId ? this._pointA : this._pointB;
                    tt.x = mt.clientX, tt.y = mt.clientY;
                    const et = this._pointA.x - this._pointB.x,
                      Vt = this._pointA.y - this._pointB.y,
                      dt = et * et + Vt * Vt,
                      jt = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: mt.pointerId,
                        type: Dt.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Ot, dt, qt, jt), qt = jt, Ot = dt
                  }
                } else {
                  try {
                    jt?.releasePointerCapture(mt.pointerId)
                  } catch (Ht) {}
                  dt || (this._pointB = null), et._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == mt.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == mt.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Ot || qt) && (this.onMultiTouch(this._pointA, this._pointB, Ot, 0, qt, null), Ot = 0, qt = null), this._currentMousePointerIdDown = -1, this.onButtonUp(mt), tt || mt.preventDefault()
                } else {
                  try {
                    jt?.setPointerCapture(mt.pointerId)
                  } catch (Ht) {}
                  if (null === this._pointA) this._pointA = {
                    x: mt.clientX,
                    y: mt.clientY,
                    pointerId: mt.pointerId,
                    type: mt.pointerType,
                    button: mt.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: mt.clientX,
                      y: mt.clientY,
                      pointerId: mt.pointerId,
                      type: mt.pointerType,
                      button: mt.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || dt || (this._currentMousePointerIdDown = mt.pointerId), this.onButtonDown(mt), tt || (mt.preventDefault(), Vt && Vt.focus())
                }
              }
            }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._pointerInput, Xt.c.POINTERDOWN | Xt.c.POINTERUP | Xt.c.POINTERMOVE | Xt.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Ot = 0, qt = null, this.onLostFocus()
            }, this._contextMenuBind = tt => this.onContextMenu(tt), Vt && Vt.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Dt = this.camera.vI().Jf().getHostWindow();
            Dt && Ct.l.RegisterTopRootEvents(Dt, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const tt = this.camera.vI().Jf().getHostWindow();
              tt && Ct.l.UnregisterTopRootEvents(tt, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const tt = this.camera.vI().Jf().getInputElement();
                tt && tt.removeEventListener("contextmenu", this._contextMenuBind)
              }
              this._onLostFocus = null
            }
            this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._currentMousePointerIdDown = -1
          }
          getClassName() {
            return "BaseCameraPointersInput"
          }
          getSimpleName() {
            return "pointers"
          }
          onDoubleTap(tt, et) {}
          onTouch(tt, et, Vt) {}
          onMultiTouch(tt, et, Vt, Ot, qt, Dt) {}
          onContextMenu(tt) {
            tt.preventDefault()
          }
          onButtonDown(tt) {}
          onButtonUp(tt) {}
          onLostFocus() {}
        }, (() => {
          const mt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          et = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: tt => "buttons" in tt,
              get: tt => tt.buttons,
              set: (tt, et) => {
                tt.buttons = et
              }
            },
            metadata: mt
          }, Vt, Dt), mt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mt
          })
        })(), tt
      })(),
      Kt = (() => {
        var tt;
        let et, Vt, Dt, mt = ut,
          dt = [],
          jt = [],
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        return tt = class extends mt {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Ot.m)(this, dt, !0), this.multiTouchPanning = ((0, Ot.m)(this, jt), (0, Ot.m)(this, Ht, !0)), this.multiTouchPanAndZoom = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, !0)), this._isPinching = ((0, Ot.m)(this, lt), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(tt, et) {}
          _computeMultiTouchPanning(tt, et) {}
          onMultiTouch(tt, et, Vt, Ot, qt, Dt) {
            0 === Vt && null === qt || 0 === Ot && null === Dt || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Vt, Ot), this._computeMultiTouchPanning(qt, Dt)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Vt, Ot), this._isPinching = !0) : this._computeMultiTouchPanning(qt, Dt)) : this.multiTouchPanning ? this._computeMultiTouchPanning(qt, Dt) : this.pinchZoom && this._computePinchZoom(Vt, Ot))
          }
          onButtonUp(tt) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(mt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: tt => "pinchZoom" in tt,
              get: tt => tt.pinchZoom,
              set: (tt, et) => {
                tt.pinchZoom = et
              }
            },
            metadata: Et
          }, dt, jt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: tt => "multiTouchPanning" in tt,
              get: tt => tt.multiTouchPanning,
              set: (tt, et) => {
                tt.multiTouchPanning = et
              }
            },
            metadata: Et
          }, Ht, Xt), (0, Ot.l)(null, null, Dt, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: tt => "multiTouchPanAndZoom" in tt,
              get: tt => tt.multiTouchPanAndZoom,
              set: (tt, et) => {
                tt.multiTouchPanAndZoom = et
              }
            },
            metadata: Et
          }, Qt, lt), Et && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Et
          })
        })(), tt
      })(),
      ht = (() => {
        var tt;
        let et, Vt, Dt, mt, dt, jt, Ht, Xt = Kt,
          Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [],
          Nt = [],
          Mt = [],
          bt = [],
          Jt = [],
          Ct = [],
          ut = [],
          ht = [],
          vt = [];
        return tt = class extends Xt {
          constructor() {
            super(...arguments), this.buttons = (0, Ot.m)(this, Qt, [0, 1, 2]), this.angularSensibilityX = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, 1e3)), this.angularSensibilityY = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, 1e3)), this.pinchPrecision = ((0, Ot.m)(this, yt), (0, Ot.m)(this, Nt, 12)), this.pinchDeltaPercentage = ((0, Ot.m)(this, Mt), (0, Ot.m)(this, bt, 0)), this.useNaturalPinchZoom = ((0, Ot.m)(this, Jt), (0, Ot.m)(this, Ct, !1)), this.panningSensibility = ((0, Ot.m)(this, ut), (0, Ot.m)(this, ht, 1e3)), this.pinchInwards = ((0, Ot.m)(this, vt), !0), this._activeEntry = null, this._pointerLockConditions = {
              button: 0,
              modifiers: {}
            }, this._pointerModifiers = {
              ctrl: !1,
              alt: !1,
              shift: !1
            }, this._pointerConditions = {
              modifiers: this._pointerModifiers
            }
          }
          getClassName() {
            return "ArcRotateCameraPointersInput"
          }
          _computeMultiTouchPanning(tt, et) {
            if (tt && et) {
              const Vt = et.x - tt.x,
                Ot = et.y - tt.y,
                qt = this.camera.movement.input.getEntry("pointer", "pan"),
                Dt = qt?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Dt && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Vt * Dt, this.camera.movement.panAccumulatedPixels.y += Ot * Dt)
            }
          }
          _computePinchZoom(et, Vt) {
            const Ot = this.camera.radius || tt.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Ot * Math.sqrt(et) / Math.sqrt(Vt);
            else if (this.pinchDeltaPercentage) {
              const tt = .001 * (Vt - et) * Ot * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += tt
            } else {
              const tt = (Vt - et) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += tt
            }
          }
          onTouch(tt, et, Vt) {
            const Ot = this._activeEntry ?? (this.camera.Jf().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Ot)
              if ("pan" === Ot.interaction) {
                const tt = Ot.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== tt && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -et * tt, this.camera.movement.panAccumulatedPixels.y += Vt * tt)
              } else if ("rotate" === Ot.interaction) {
              const tt = Ot.fY ?? Ot.sensitivity ?? 1 / this.angularSensibilityX,
                qt = Ot.aY ?? Ot.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -et * tt, this.camera.movement.rotationAccumulatedPixels.y += -Vt * qt
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(tt, et, Vt, Ot, qt, Dt) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Ot) - Math.sqrt(Vt)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(tt, et, Vt, Ot, qt, Dt)
          }
          onButtonDown(tt) {
            this._pointerConditions.button = tt.button, this._pointerModifiers.ctrl = tt.ctrlKey, this._pointerModifiers.alt = tt.altKey, this._pointerModifiers.shift = tt.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(tt)
          }
          onButtonUp(tt) {
            this._activeEntry = null, super.onButtonUp(tt)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Kt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: tt => "buttons" in tt,
              get: tt => tt.buttons,
              set: (tt, et) => {
                tt.buttons = et
              }
            },
            metadata: Kt
          }, Qt, lt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: tt => "angularSensibilityX" in tt,
              get: tt => tt.angularSensibilityX,
              set: (tt, et) => {
                tt.angularSensibilityX = et
              }
            },
            metadata: Kt
          }, Et, ft), (0, Ot.l)(null, null, Dt, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: tt => "angularSensibilityY" in tt,
              get: tt => tt.angularSensibilityY,
              set: (tt, et) => {
                tt.angularSensibilityY = et
              }
            },
            metadata: Kt
          }, wt, yt), (0, Ot.l)(null, null, mt, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: tt => "pinchPrecision" in tt,
              get: tt => tt.pinchPrecision,
              set: (tt, et) => {
                tt.pinchPrecision = et
              }
            },
            metadata: Kt
          }, Nt, Mt), (0, Ot.l)(null, null, dt, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: tt => "pinchDeltaPercentage" in tt,
              get: tt => tt.pinchDeltaPercentage,
              set: (tt, et) => {
                tt.pinchDeltaPercentage = et
              }
            },
            metadata: Kt
          }, bt, Jt), (0, Ot.l)(null, null, jt, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: tt => "useNaturalPinchZoom" in tt,
              get: tt => tt.useNaturalPinchZoom,
              set: (tt, et) => {
                tt.useNaturalPinchZoom = et
              }
            },
            metadata: Kt
          }, Ct, ut), (0, Ot.l)(null, null, Ht, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: tt => "panningSensibility" in tt,
              get: tt => tt.panningSensibility,
              set: (tt, et) => {
                tt.panningSensibility = et
              }
            },
            metadata: Kt
          }, ht, vt), Kt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kt
          })
        })(), tt.MinimumRadiusForPinch = .001, tt
      })();
    Jt.e.ArcRotateCameraPointersInput = ht;
    var vt = Vt(40379);
    let Wt = (() => {
      var tt;
      let et, Vt, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt = [],
        yt = [],
        Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        ut = [],
        Kt = [],
        ht = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [],
        It = [],
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [];
      return tt = class {
        constructor() {
          this.camera = (0, Ot.m)(this, wt), this.keysUp = (0, Ot.m)(this, yt, [38]), this.keysDown = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, [40])), this.keysLeft = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, [37])), this.keysRight = ((0, Ot.m)(this, ut), (0, Ot.m)(this, Kt, [39])), this.keysReset = ((0, Ot.m)(this, ht), (0, Ot.m)(this, Wt, [220])), this.keysZoomIn = ((0, Ot.m)(this, St), (0, Ot.m)(this, ct, [187, 107])), this.keysZoomOut = ((0, Ot.m)(this, Rt), (0, Ot.m)(this, It, [189, 109])), this.panningSensibility = ((0, Ot.m)(this, Pt), (0, Ot.m)(this, Zt, 50)), this.zoomingSensibility = ((0, Ot.m)(this, Lt), (0, Ot.m)(this, Ft, 25)), this.angularSpeed = ((0, Ot.m)(this, kt), (0, Ot.m)(this, Gt, .01)), this._useAltToZoom = ((0, Ot.m)(this, zt), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new mt.m, this._panDirection = new mt.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(tt) {
          this._useAltToZoom = tt, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const tt = this.camera.movement.input,
            et = tt.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && et ? tt.inputMap.splice(tt.inputMap.indexOf(et), 1) : this._useAltToZoom && !et && tt.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(tt) {
          tt = Ct.l.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.vI(), this._engine = this._scene.Jf(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((et => {
            const Vt = et.event;
            if (!Vt.metaKey)
              if (et.type === vt.c.KEYDOWN) {
                if (this._ctrlPressed = Vt.ctrlKey, this._altPressed = Vt.altKey, -1 !== this.keysUp.indexOf(Vt.keyCode) || -1 !== this.keysDown.indexOf(Vt.keyCode) || -1 !== this.keysLeft.indexOf(Vt.keyCode) || -1 !== this.keysRight.indexOf(Vt.keyCode) || -1 !== this.keysReset.indexOf(Vt.keyCode) || -1 !== this.keysZoomIn.indexOf(Vt.keyCode) || -1 !== this.keysZoomOut.indexOf(Vt.keyCode)) {
                  -1 === this._keys.indexOf(Vt.keyCode) && this._keys.push(Vt.keyCode), Vt.preventDefault && (tt || Vt.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Vt.keyCode) || -1 !== this.keysDown.indexOf(Vt.keyCode) || -1 !== this.keysLeft.indexOf(Vt.keyCode) || -1 !== this.keysRight.indexOf(Vt.keyCode) || -1 !== this.keysReset.indexOf(Vt.keyCode) || -1 !== this.keysZoomIn.indexOf(Vt.keyCode) || -1 !== this.keysZoomOut.indexOf(Vt.keyCode)) {
              const et = this._keys.indexOf(Vt.keyCode);
              et >= 0 && this._keys.splice(et, 1), Vt.preventDefault && (tt || Vt.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const tt = this.camera,
              et = tt.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Vt = this._rotateDirection.set(0, 0),
              Ot = this._panDirection.set(0, 0);
            let qt = 0,
              Dt = 0;
            for (let mt = 0; mt < this._keys.length; mt++) {
              const dt = this._keys[mt];
              if (this._keyboardConditions.key = dt, -1 === this.keysReset.indexOf(dt)) {
                const tt = et.resolveInteraction("keyboard", this._keyboardConditions);
                if (tt)
                  if ("pan" === tt.interaction) Dt = Math.max(Dt, tt.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(dt) ? Ot.x -= 1 : -1 !== this.keysRight.indexOf(dt) ? Ot.x += 1 : -1 !== this.keysUp.indexOf(dt) ? Ot.y += 1 : -1 !== this.keysDown.indexOf(dt) && (Ot.y -= 1);
                  else if ("zoom" === tt.interaction) {
                  const Vt = tt.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(dt) || -1 !== this.keysZoomIn.indexOf(dt) ? et.handlers.zoom(Vt) : -1 === this.keysDown.indexOf(dt) && -1 === this.keysZoomOut.indexOf(dt) || et.handlers.zoom(-Vt)
                } else "rotate" === tt.interaction && (qt = Math.max(qt, tt.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(dt) ? Vt.x -= 1 : -1 !== this.keysRight.indexOf(dt) ? Vt.x += 1 : -1 !== this.keysUp.indexOf(dt) ? Vt.y -= 1 : -1 !== this.keysDown.indexOf(dt) && (Vt.y += 1))
              } - 1 !== this.keysReset.indexOf(dt) && tt.useInputToRestoreState && tt.restoreState()
            }
            0 === Vt.x && 0 === Vt.y || (Vt.normalize().scaleInPlace(qt), et.handlers.rotate(Vt.x, Vt.y)), 0 === Ot.x && 0 === Ot.y || (Ot.normalize().scaleInPlace(Dt), et.handlers.pan(Ot.x, Ot.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const mt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], (0, Ot.l)(tt, null, ft, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: tt => "useAltToZoom" in tt,
            get: tt => tt.useAltToZoom
          },
          metadata: mt
        }, null, wt), (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysUp" in tt,
            get: tt => tt.keysUp,
            set: (tt, et) => {
              tt.keysUp = et
            }
          },
          metadata: mt
        }, yt, Nt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysDown" in tt,
            get: tt => tt.keysDown,
            set: (tt, et) => {
              tt.keysDown = et
            }
          },
          metadata: mt
        }, Mt, bt), (0, Ot.l)(null, null, Dt, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysLeft" in tt,
            get: tt => tt.keysLeft,
            set: (tt, et) => {
              tt.keysLeft = et
            }
          },
          metadata: mt
        }, Jt, ut), (0, Ot.l)(null, null, dt, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysRight" in tt,
            get: tt => tt.keysRight,
            set: (tt, et) => {
              tt.keysRight = et
            }
          },
          metadata: mt
        }, Kt, ht), (0, Ot.l)(null, null, jt, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysReset" in tt,
            get: tt => tt.keysReset,
            set: (tt, et) => {
              tt.keysReset = et
            }
          },
          metadata: mt
        }, Wt, St), (0, Ot.l)(null, null, Ht, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysZoomIn" in tt,
            get: tt => tt.keysZoomIn,
            set: (tt, et) => {
              tt.keysZoomIn = et
            }
          },
          metadata: mt
        }, ct, Rt), (0, Ot.l)(null, null, Xt, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: tt => "keysZoomOut" in tt,
            get: tt => tt.keysZoomOut,
            set: (tt, et) => {
              tt.keysZoomOut = et
            }
          },
          metadata: mt
        }, It, Pt), (0, Ot.l)(null, null, Qt, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: tt => "panningSensibility" in tt,
            get: tt => tt.panningSensibility,
            set: (tt, et) => {
              tt.panningSensibility = et
            }
          },
          metadata: mt
        }, Zt, Lt), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: tt => "zoomingSensibility" in tt,
            get: tt => tt.zoomingSensibility,
            set: (tt, et) => {
              tt.zoomingSensibility = et
            }
          },
          metadata: mt
        }, Ft, kt), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: tt => "angularSpeed" in tt,
            get: tt => tt.angularSpeed,
            set: (tt, et) => {
              tt.angularSpeed = et
            }
          },
          metadata: mt
        }, Gt, zt), mt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt
        })
      })(), tt
    })();
    Jt.e.ArcRotateCameraKeyboardMoveInput = Wt;
    var St = Vt(38016),
      ct = Vt(40386);
    let Rt = (() => {
      var tt;
      let et, Vt, Dt, jt = [],
        Ht = [],
        Qt = [],
        Et = [],
        ft = [],
        wt = [];
      return tt = class {
        constructor() {
          this.wheelPrecision = (0, Ot.m)(this, jt, 3), this.zoomToMouseLocation = ((0, Ot.m)(this, Ht), (0, Ot.m)(this, Qt, !1)), this.wheelDeltaPercentage = ((0, Ot.m)(this, Et), (0, Ot.m)(this, ft, 0)), this.customComputeDeltaFromMouseWheel = ((0, Ot.m)(this, wt), null), this._viewOffset = new mt.n(0, 0, 0), this._globalOffset = new mt.n(0, 0, 0), this._inertialPanning = mt.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(tt, et) {
          let Vt;
          const Ot = .01 * tt * this.wheelDeltaPercentage * et;
          return Vt = tt > 0 ? Ot / (1 + this.wheelDeltaPercentage) : Ot * (1 + this.wheelDeltaPercentage), Vt
        }
        attachControl(tt) {
          tt = Ct.l.BackCompatCameraNoPreventDefault(arguments), this._wheel = et => {
            if (et.type !== Xt.c.POINTERWHEEL) return;
            const Vt = et.event;
            let Ot;
            const qt = Vt.deltaMode === ct.e.DOM_DELTA_LINE ? 40 : 1,
              Dt = -Vt.deltaY * qt;
            if (this.customComputeDeltaFromMouseWheel) Ot = this.customComputeDeltaFromMouseWheel(Dt, this, Vt);
            else if (this.wheelDeltaPercentage) {
              if (Ot = this._computeDeltaFromMouseWheelLegacyEvent(Dt, this.camera.radius), Ot > 0) {
                const tt = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let et = this.camera.radius,
                  Vt = tt + Ot;
                for (let Ot = 0; Ot < 20 && !(et <= Vt) && !(Math.abs(Vt * this.camera.inertia) < .001); Ot++) et -= Vt, Vt *= this.camera.inertia;
                et = (0, dt.Clamp)(et, 0, Number.MAX_VALUE), Ot = this._computeDeltaFromMouseWheelLegacyEvent(Dt, et)
              }
            } else {
              const tt = this.camera.movement.input.getEntry("wheel", "zoom");
              Ot = Dt * (tt?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Ot && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Ot)) : this.camera.movement.zoomAccumulatedPixels += Ot), Vt.preventDefault && (tt || Vt.preventDefault())
          }, this._observer = this.camera.vI()._inputManager._addCameraPointerObserver(this._wheel, Xt.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.S_(0)
        }
        detachControl() {
          this._observer && (this.camera.vI()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const tt = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(tt.inertialAlphaOffset) + Math.abs(tt.inertialBetaOffset) + Math.abs(tt.inertialRadiusOffset)) {
            this._updateHitPlane(), tt.target.addInPlace(this._inertialPanning), tt.radius -= this._zoomToMouseRadiusOffset;
            const et = tt.movement.getFrameIndependentDecay(tt.inertia);
            this._inertialPanning.scaleInPlace(et), this._zoomToMouseRadiusOffset *= et, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < lt.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const tt = this.camera,
            et = tt.target.subtract(tt.position);
          this._hitPlane = St.b.FromPositionAndNormal(tt.target, et)
        }
        _getPosition() {
          const tt = this.camera,
            et = tt.vI(),
            Vt = et.createPickingRay(et.pointerX, et.pointerY, mt.c.Identity(), tt, !1);
          0 === tt.targetScreenOffset.x && 0 === tt.targetScreenOffset.y || (this._viewOffset.set(tt.targetScreenOffset.x, tt.targetScreenOffset.y, 0), tt.getViewMatrix().invertToRef(tt._cameraTransformMatrix), this._globalOffset = mt.n.TransformNormal(this._viewOffset, tt._cameraTransformMatrix), Vt.origin.addInPlace(this._globalOffset));
          let Ot = 0;
          return this._hitPlane && (Ot = Vt.intersectsPlane(this._hitPlane) ?? 0), Vt.origin.addInPlace(Vt.direction.scaleInPlace(Ot))
        }
        _zoomToMouse(tt) {
          const et = this.camera,
            Vt = 1 - et.inertia,
            Ot = et.movement.getFrameIndependentInputScale(et.inertia);
          if (et.lowerRadiusLimit) {
            const qt = et.lowerRadiusLimit ?? 0;
            et.radius - (this._zoomToMouseRadiusOffset + tt * Ot) / Vt < qt && (tt = ((et.radius - qt) * Vt - this._zoomToMouseRadiusOffset) / Ot)
          }
          if (et.upperRadiusLimit) {
            const qt = et.upperRadiusLimit ?? 0;
            et.radius - (this._zoomToMouseRadiusOffset + tt * Ot) / Vt > qt && (tt = ((et.radius - qt) * Vt - this._zoomToMouseRadiusOffset) / Ot)
          }
          const qt = tt / Vt / et.radius,
            Dt = this._getPosition(),
            dt = mt.k.uf[6];
          Dt.subtractToRef(et.target, dt), dt.scaleInPlace(qt), dt.scaleInPlace(Vt), dt.scaleInPlace(Ot), this._inertialPanning.addInPlace(dt), this._zoomToMouseRadiusOffset += tt * Ot
        }
        _zeroIfClose(tt) {
          Math.abs(tt.x) < lt.e && (tt.x = 0), Math.abs(tt.y) < lt.e && (tt.y = 0), Math.abs(tt.z) < lt.e && (tt.z = 0)
        }
      }, (() => {
        const mt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelPrecision" in tt,
            get: tt => tt.wheelPrecision,
            set: (tt, et) => {
              tt.wheelPrecision = et
            }
          },
          metadata: mt
        }, jt, Ht), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: tt => "zoomToMouseLocation" in tt,
            get: tt => tt.zoomToMouseLocation,
            set: (tt, et) => {
              tt.zoomToMouseLocation = et
            }
          },
          metadata: mt
        }, Qt, Et), (0, Ot.l)(null, null, Dt, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: tt => "wheelDeltaPercentage" in tt,
            get: tt => tt.wheelDeltaPercentage,
            set: (tt, et) => {
              tt.wheelDeltaPercentage = et
            }
          },
          metadata: mt
        }, ft, wt), mt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt
        })
      })(), tt
    })();
    Jt.e.ArcRotateCameraMouseWheelInput = Rt;
    var It, Pt, Zt = Vt(40080);
    class Lt extends Jt.g {
      constructor(tt) {
        super(tt)
      }
      addMouseWheel() {
        return this.add(new Rt), this
      }
      addPointers() {
        return this.add(new ht), this
      }
      addKeyboard() {
        return this.add(new Wt), this
      }
    }(It = Lt.prototype).addVRDeviceOrientation ?? (It.addVRDeviceOrientation = (0, Zt.d)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Pt = Lt.prototype).addGamepad ?? (Pt.addGamepad = (0, Zt.d)("ArcRotateCameraInputsManager", "addGamepad"));
    var Ft = Vt(37390),
      kt = Vt(40422),
      Gt = Vt(40426);
    class zt extends kt.c {
      constructor(tt, et, Vt) {
        super(tt, et, Vt), this.input = new Gt.b({
          pan: (tt, et) => {
            this.panAccumulatedPixels.x += tt, this.panAccumulatedPixels.y += et
          },
          rotate: (tt, et) => {
            this.rotationAccumulatedPixels.x += tt, this.rotationAccumulatedPixels.y += et
          },
          zoom: tt => {
            this.zoomAccumulatedPixels += tt
          }
        }, (() => this._createDefaultInputMap()))
      }
      _createDefaultInputMap() {
        return [{
          source: "pointer",
          button: 0,
          modifiers: {
            ctrl: !0
          },
          interaction: "pan"
        }, {
          source: "pointer",
          button: 0,
          interaction: "rotate"
        }, {
          source: "pointer",
          button: 2,
          interaction: "pan"
        }, {
          source: "wheel",
          interaction: "zoom"
        }, {
          source: "keyboard",
          key: [187, 107, 189, 109],
          interaction: "zoom"
        }, {
          source: "keyboard",
          modifiers: {
            ctrl: !0
          },
          interaction: "pan"
        }, {
          source: "keyboard",
          modifiers: {
            alt: !0
          },
          interaction: "zoom"
        }, {
          source: "keyboard",
          interaction: "rotate"
        }]
      }
    }

    function ot(tt, et) {
      return isNaN(tt) ? et : tt
    }
    let rt = (() => {
        var tt;
        let et, Vt, jt, Xt, Qt, ft, wt, Jt, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Ft, kt, Gt, rt, Ut, At, it, Yt, Bt, pt = bt.f,
          xt = [],
          Tt = [],
          gt = [],
          st = [],
          nt = [],
          te = [],
          ee = [],
          Ve = [],
          Oe = [],
          qe = [],
          De = [],
          me = [],
          de = [],
          je = [],
          He = [],
          Xe = [],
          Qe = [],
          le = [],
          Ee = [],
          fe = [],
          we = [],
          ye = [],
          Ne = [],
          ae = [],
          Me = [],
          be = [],
          Je = [],
          Ce = [],
          ue = [],
          Ke = [],
          he = [],
          ve = [],
          We = [],
          Se = [],
          ce = [],
          Re = [],
          Ie = [],
          Pe = [],
          Ze = [],
          Le = [],
          Fe = [],
          ke = [],
          Ge = [],
          ze = [],
          oe = [],
          re = [],
          Ue = [];
        return tt = class extends pt {
          get target() {
            return this.aT
          }
          set target(tt) {
            this.setTarget(tt)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(tt) {
            tt && this.setTarget(tt)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(tt) {
            this.setPosition(tt)
          }
          set upVector(tt) {
            this._upToYMatrix || (this._yToUpMatrix = new mt.c, this._upToYMatrix = new mt.c, this._upVector = mt.n.Zero()), tt.normalize(), this._upVector.rK(tt), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            mt.c.RotationAlignToRef(mt.n.UpReadOnly, this._upVector, this._yToUpMatrix), mt.c.RotationAlignToRef(this._upVector, mt.n.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const tt = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(tt) < this._rotationEpsilon ? 0 : tt
          }
          set inertialAlphaOffset(tt) {
            this._inertialAlphaOffset = tt, 0 === tt && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const tt = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(tt) < this._rotationEpsilon ? 0 : tt
          }
          set inertialBetaOffset(tt) {
            this._inertialBetaOffset = tt, 0 === tt && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const tt = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(tt) < this._rotationEpsilon ? 0 : tt
          }
          set inertialRadiusOffset(tt) {
            this._inertialRadiusOffset = tt, 0 === tt && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(tt) {
            this._panningInertia = tt, this.movement && (this.movement.panInertia = tt)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(tt) {
            this._inertia = tt, this.movement && (this.movement.rotationInertia = tt, this.movement.zoomInertia = tt)
          }
          get angularSensibilityX() {
            const tt = this.inputs.attached.pointers;
            return tt ? tt.angularSensibilityX : 0
          }
          set angularSensibilityX(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.angularSensibilityX = tt)
          }
          get angularSensibilityY() {
            const tt = this.inputs.attached.pointers;
            return tt ? tt.angularSensibilityY : 0
          }
          set angularSensibilityY(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.angularSensibilityY = tt)
          }
          get pinchPrecision() {
            const tt = this.inputs.attached.pointers;
            return tt ? tt.pinchPrecision : 0
          }
          set pinchPrecision(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.pinchPrecision = tt)
          }
          get pinchDeltaPercentage() {
            const tt = this.inputs.attached.pointers;
            return tt ? tt.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.pinchDeltaPercentage = tt)
          }
          get useNaturalPinchZoom() {
            const tt = this.inputs.attached.pointers;
            return !!tt && tt.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.useNaturalPinchZoom = tt)
          }
          get panningSensibility() {
            const tt = this.inputs.attached.pointers;
            return tt ? tt.panningSensibility : 0
          }
          set panningSensibility(tt) {
            const et = this.inputs.attached.pointers;
            et && (et.panningSensibility = tt)
          }
          get keysUp() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysUp : []
          }
          set keysUp(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysUp = tt)
          }
          get keysDown() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysDown : []
          }
          set keysDown(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysDown = tt)
          }
          get keysLeft() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysLeft : []
          }
          set keysLeft(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysLeft = tt)
          }
          get keysRight() {
            const tt = this.inputs.attached.keyboard;
            return tt ? tt.keysRight : []
          }
          set keysRight(tt) {
            const et = this.inputs.attached.keyboard;
            et && (et.keysRight = tt)
          }
          get wheelPrecision() {
            const tt = this.inputs.attached.mousewheel;
            return tt ? tt.wheelPrecision : 0
          }
          set wheelPrecision(tt) {
            const et = this.inputs.attached.mousewheel;
            et && (et.wheelPrecision = tt)
          }
          get zoomToMouseLocation() {
            const tt = this.inputs.attached.mousewheel;
            return !!tt && tt.zoomToMouseLocation
          }
          set zoomToMouseLocation(tt) {
            const et = this.inputs.attached.mousewheel;
            et && (et.zoomToMouseLocation = tt)
          }
          get wheelDeltaPercentage() {
            const tt = this.inputs.attached.mousewheel;
            return tt ? tt.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(tt) {
            const et = this.inputs.attached.mousewheel;
            et && (et.wheelDeltaPercentage = tt)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(tt) {
            this._useCtrlForPanningInternal = tt;
            const et = this.movement.input,
              Vt = et.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !tt && Vt ? et.inputMap.splice(et.inputMap.indexOf(Vt), 1) : tt && !Vt && et.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Ot = et.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !tt && Ot ? et.inputMap.splice(et.inputMap.indexOf(Ot), 1) : tt && !Ot && et.addEntry({
              source: "pointer",
              button: 0,
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            })
          }
          get _panningMouseButton() {
            return this._panningMouseButtonInternal
          }
          set _panningMouseButton(tt) {
            this._panningMouseButtonInternal = tt;
            const et = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            et && (et.button = tt)
          }
          get isInterpolating() {
            return this._isInterpolating
          }
          get bouncingBehavior() {
            return this._bouncingBehavior
          }
          get useBouncingBehavior() {
            return null != this._bouncingBehavior
          }
          set useBouncingBehavior(tt) {
            tt !== this.useBouncingBehavior && (tt ? (this._bouncingBehavior = new yt, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(tt) {
            tt !== this.useFramingBehavior && (tt ? (this._framingBehavior = new Nt, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(tt) {
            tt !== this.useAutoRotationBehavior && (tt ? (this._autoRotationBehavior = new Et, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(tt, et, Vt, qt, dt, jt) {
            var Ht;
            let Xt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(tt, mt.n.Zero(), jt, Xt), Ht = this, this.alpha = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, void 0)), this.beta = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, void 0)), this.radius = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, void 0)), this.aT = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, void 0)), this._targetHost = ((0, Ot.m)(this, De), (0, Ot.m)(this, me, void 0)), this._upToYMatrix = (0, Ot.m)(this, de), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Ot.m)(this, je, null), this.upperAlphaLimit = ((0, Ot.m)(this, He), (0, Ot.m)(this, Xe, null)), this.lowerBetaLimit = ((0, Ot.m)(this, Qe), (0, Ot.m)(this, le, .01)), this.upperBetaLimit = ((0, Ot.m)(this, Ee), (0, Ot.m)(this, fe, Math.PI - .01)), this.lowerRadiusLimit = ((0, Ot.m)(this, we), (0, Ot.m)(this, ye, null)), this.upperRadiusLimit = ((0, Ot.m)(this, Ne), (0, Ot.m)(this, ae, null)), this.lowerTargetYLimit = ((0, Ot.m)(this, Me), (0, Ot.m)(this, be, -1 / 0)), this.inertialPanningX = ((0, Ot.m)(this, Je), (0, Ot.m)(this, Ce, 0)), this.inertialPanningY = ((0, Ot.m)(this, ue), (0, Ot.m)(this, Ke, 0)), this.pinchToPanMaxDistance = ((0, Ot.m)(this, he), (0, Ot.m)(this, ve, 20)), this.panningDistanceLimit = ((0, Ot.m)(this, We), (0, Ot.m)(this, Se, null)), this.panningOriginTarget = ((0, Ot.m)(this, ce), (0, Ot.m)(this, Re, mt.n.Zero())), this._panningInertia = ((0, Ot.m)(this, Ie), .9), this._inertia = .9, this.zoomOnFactor = (0, Ot.m)(this, Pe, 1), this.targetScreenOffset = ((0, Ot.m)(this, Ze), (0, Ot.m)(this, Le, mt.m.Zero())), this.allowUpsideDown = ((0, Ot.m)(this, Fe), (0, Ot.m)(this, ke, !0)), this.useInputToRestoreState = ((0, Ot.m)(this, Ge), (0, Ot.m)(this, ze, !0)), this.restoreStateInterpolationFactor = ((0, Ot.m)(this, oe), (0, Ot.m)(this, re, 0)), this._currentInterpolationFactor = ((0, Ot.m)(this, Ue), 0), this._viewMatrix = new mt.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new mt.n(1, 1, 0), this._transformedDirection = new mt.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Dt.c, this.checkCollisions = !1, this.collisionRadius = new mt.n(.5, .5, .5), this._previousPosition = mt.n.Zero(), this._collisionVelocity = mt.n.Zero(), this._newPosition = mt.n.Zero(), this._computationVector = mt.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new mt.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new mt.m(NaN, NaN), this._onCollisionPositionChange = function(tt, et) {
              let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Vt ? (Ht.setPosition(et), Ht.Hl && Ht.Hl(Vt)) : Ht._previousPosition.rK(Ht._position);
              const Ot = Math.cos(Ht.alpha),
                qt = Math.sin(Ht.alpha),
                Dt = Math.cos(Ht.beta);
              let mt = Math.sin(Ht.beta);
              0 === mt && (mt = 1e-4);
              const dt = Ht._getTargetPosition();
              Ht._computationVector.W9(Ht.radius * Ot * mt, Ht.radius * Dt, Ht.radius * qt * mt), dt.addToRef(Ht._computationVector, Ht._newPosition), Ht._position.rK(Ht._newPosition);
              let jt = Ht.upVector;
              Ht.allowUpsideDown && Ht.beta < 0 && (jt = jt.clone(), jt = jt.gq()), Ht._computeViewMatrix(Ht._position, dt, jt), Ht._viewMatrix.addAtIndex(12, Ht.targetScreenOffset.x), Ht._viewMatrix.addAtIndex(13, Ht.targetScreenOffset.y), Ht._collisionTriggered = !1
            }, this.aT = mt.n.Zero(), dt && this.setTarget(dt), this.alpha = et, this.beta = Vt, this.radius = qt, this.getViewMatrix(), this.inputs = new Lt(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new zt(this.vI(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.aT = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = mt.m.Zero()
          }
          _updateCache(tt) {
            tt || super._updateCache(), this._cache.aT.rK(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.rK(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const tt = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? tt.addToRef(this._targetBoundingCenter, this.aT) : this.aT.rK(tt)
            }
            const tt = this._getLockedTargetPosition();
            return tt || this.aT
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > lt.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Dt = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Dt ? this._currentInterpolationFactor = Dt : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = ot(tt, this._goalAlpha), this._goalBeta = ot(et, this._goalBeta), this._goalRadius = ot(Vt, this._goalRadius), this._goalTarget.set(ot(Ot.x, this._goalTarget.x), ot(Ot.y, this._goalTarget.y), ot(Ot.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(ot(qt.x, this._goalTargetScreenOffset.x), ot(qt.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, dt.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, dt.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, dt.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, dt.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.aT.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(tt, et) {
            let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const qt = arguments;
            et = Ct.l.BackCompatCameraNoPreventDefault(qt), this._useCtrlForPanning = Vt, this._panningMouseButton = Ot, "boolean" === typeof qt[0] && (qt.length > 1 && (this._useCtrlForPanning = qt[1]), qt.length > 2 && (this._panningMouseButton = qt[2])), this.inputs.attachElement(et), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(tt, et, Vt) {
            const Ot = this.invertRotation ? -1 : 1;
            let qt = tt * this._calculateHandednessMultiplier();
            this.beta < 0 && (qt *= -1), this.alpha += qt * Ot, this.beta += et * Ot, this.radius -= Vt
          }
          _applyPanDelta(tt, et) {
            const Vt = mt.k.uf[0].W9(tt, et, et);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Vt.multiplyInPlace(this.panningAxis), mt.n.TransformNormalToRef(Vt, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const tt = this.upVector,
                et = mt.n.CrossToRef(this._transformedDirection, tt, this._transformedDirection);
              mt.n.CrossToRef(tt, et, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.aT);
                mt.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.aT.rK(this._transformedDirection)
              } else {
                if (this.parent) {
                  const tt = mt.k.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(tt), tt.transposeToRef(tt), mt.n.TransformCoordinatesToRef(this._transformedDirection, tt, this._transformedDirection)
                }
                this.aT.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let tt = !1;
            this.movement.computeCurrentFrameDeltas();
            const et = this.movement.rotationDeltaCurrentFrame,
              Vt = this.movement.zoomDeltaCurrentFrame,
              Ot = this.movement.panDeltaCurrentFrame;
            if (0 === et.x && 0 === et.y && 0 === Vt && 0 === Ot.x && 0 === Ot.y || (tt = !0, 0 === et.x && 0 === et.y && 0 === Vt || this._applyRotationAndZoomDelta(et.x, et.y, Vt), 0 === Ot.x && 0 === Ot.y || this._applyPanDelta(Ot.x, Ot.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), tt = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const et = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < et && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < et && (this.inertialPanningY = 0), tt = !0
            }
            if (tt) this.stopInterpolation();
            else if (this._isInterpolating) {
              let tt = !1;
              const et = this._scene.Jf().getDeltaTime() / 1e3,
                Vt = 1 - Math.pow(2, -et / this._currentInterpolationFactor),
                Ot = ot(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const et = mt.k.uf[0].set(ot(this._goalTarget.x, this.aT.x), ot(this._goalTarget.y, this.aT.y), ot(this._goalTarget.z, this.aT.z));
                mt.n.LerpToRef(this.target, et, Vt, this.aT), 10 * mt.n.Distance(this.target, et) / Ot < lt.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.rK(et), this.setTarget(this.target, !1, !0, !0)) : tt = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const et = mt.e.RotationAlphaBetaGammaToRef(ot(this._goalAlpha, this.alpha), ot(this._goalBeta, this.beta), 0, mt.k.Quaternion[0]),
                  Ot = mt.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mt.k.Quaternion[1]),
                  qt = mt.e.SlerpToRef(Ot, et, Vt, mt.k.Quaternion[2]);
                qt.normalize();
                const Dt = qt.toAlphaBetaGammaToRef(mt.k.uf[0]);
                if (this.alpha = Dt.x, this.beta = Dt.y, qt.isApprox(et, lt.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const tt = et.toAlphaBetaGammaToRef(mt.k.uf[0]);
                  this.alpha = tt.x, this.beta = tt.y
                } else tt = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Ot - this.radius) * Vt, Math.abs(Ot / this.radius - 1) < lt.e ? (this._goalRadius = NaN, this.radius = Ot) : tt = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const et = mt.k.Vector2[0].set(ot(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ot(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                mt.m.LerpToRef(this.targetScreenOffset, et, Vt, this.targetScreenOffset), mt.m.Distance(this.targetScreenOffset, et) < lt.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.rK(et)) : tt = !0
              }
              this._isInterpolating = tt
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mt.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const tt = this.alpha;
            var et, Vt;
            this.alpha = function(tt) {
              let et = Math.PI / 2;
              return 0 === tt.x && 0 === tt.z || (et = Math.acos(tt.x / Math.sqrt(Math.pow(tt.x, 2) + Math.pow(tt.z, 2)))), tt.z < 0 && (et = 2 * Math.PI - et), et
            }(this._computationVector), this.beta = (et = this._computationVector.y, Vt = this.radius, Math.acos(et / Vt));
            const Ot = Math.round((tt - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Ot * Math.PI, this._checkLimits()
          }
          setPosition(tt) {
            this._position.equals(tt) || (this._position.rK(tt), this.rebuildAnglesAndRadius())
          }
          setTarget(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Ot = this.overrideCloneAlphaBetaRadius ?? Ot, tt.computeWorldMatrix) et && tt.fL ? this._targetBoundingCenter = tt.fL().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, tt.computeWorldMatrix(), this._targetHost = tt, this.aT = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const et = tt,
                Ot = this._getTargetPosition();
              if (Ot && !Vt && Ot.equals(et)) return;
              this._targetHost = null, this.aT = et, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Ot || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const tt = Math.cos(this.alpha),
              et = Math.sin(this.alpha),
              Vt = Math.cos(this.beta);
            let Ot = Math.sin(this.beta);
            0 === Ot && (Ot = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const qt = this._getTargetPosition();
            if (this._computationVector.W9(this.radius * tt * Ot, this.radius * Vt, this.radius * et * Ot), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mt.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), qt.addToRef(this._computationVector, this._newPosition), this.vI().collisionsEnabled && this.checkCollisions) {
              const tt = this.vI().collisionCoordinator;
              this._collider || (this._collider = tt.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, tt.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.rK(this._newPosition);
              let tt = this.upVector;
              this.allowUpsideDown && Ot < 0 && (tt = tt.gq()), this._computeViewMatrix(this._position, qt, tt), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.rK(qt), this._viewMatrix
          }
          zoomOn(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            tt = tt || this.vI().meshes;
            const Vt = Ht.d.MinMax(tt);
            let Ot = this._calculateLowerRadiusFromModelBoundingSphere(Vt.min, Vt.max);
            if (Ot = Math.max(Math.min(Ot, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Ot * this.zoomOnFactor, this.mode === Mt.c.ORTHOGRAPHIC_CAMERA) {
              const tt = this.vI().Jf().getAspectRatio(this),
                et = Ot * this.zoomOnFactor / 2;
              this.orthoLeft = -et * tt, this.orthoRight = et * tt, this.orthoBottom = -et, this.orthoTop = et
            }
            this.focusOn({
              min: Vt.min,
              max: Vt.max,
              distance: Ot
            }, et)
          }
          focusOn(tt) {
            let et, Vt, Ot = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === tt.min) {
              const Ot = tt || this.vI().meshes;
              et = Ht.d.MinMax(Ot), Vt = mt.n.Distance(et.min, et.max)
            } else {
              et = tt, Vt = tt.distance
            }
            this.aT = Ht.d.Center(et), Ot || (this.maxZ = 2 * Vt)
          }
          createRigCamera(et, Vt) {
            let Ot = 0;
            switch (this.cameraRigMode) {
              case Mt.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Mt.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Mt.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Mt.c.RIG_MODE_VR:
                Ot = this._cameraRigParams.stereoHalfAngle * (0 === Vt ? 1 : -1);
                break;
              case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Ot = this._cameraRigParams.stereoHalfAngle * (0 === Vt ? -1 : 1)
            }
            const qt = new tt(et, this.alpha + Ot, this.beta, this.radius, this.aT, this.vI());
            return qt._cameraRigParams = {}, qt.isRigCamera = !0, qt.rigParent = this, qt.upVector = this.upVector, qt.mode = this.mode, qt.orthoLeft = this.orthoLeft, qt.orthoRight = this.orthoRight, qt.orthoBottom = this.orthoBottom, qt.orthoTop = this.orthoTop, qt
          }
          _updateRigCameras() {
            const tt = this._rigCameras[0],
              et = this._rigCameras[1];
            switch (tt.beta = et.beta = this.beta, this.cameraRigMode) {
              case Mt.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Mt.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Mt.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Mt.c.RIG_MODE_VR:
                tt.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, et.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Mt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                tt.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, et.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(tt, et) {
            let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Ot = mt.n.Distance(tt, et),
              qt = this.vI().Jf().getAspectRatio(this),
              Dt = Math.tan(this.fov / 2),
              dt = Dt * qt,
              jt = .5 * Ot * Vt,
              Ht = jt * Math.sqrt(1 + 1 / (dt * dt)),
              Xt = jt * Math.sqrt(1 + 1 / (Dt * Dt));
            return Math.max(Ht, Xt)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(pt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], jt = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.M)("target")], ft = [(0, qt.B)("targetHost")], wt = [(0, qt.P)()], Jt = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], It = [(0, qt.P)()], Pt = [(0, qt.P)()], Zt = [(0, qt.P)()], Ft = [(0, qt.P)()], kt = [(0, qt.M)()], Gt = [(0, qt.P)()], rt = [(0, qt.P)()], Ut = [(0, qt.P)()], At = [(0, qt.I)()], it = [(0, qt.P)()], Yt = [(0, qt.P)()], Bt = [(0, qt.P)()], (0, Ot.l)(tt, null, wt, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "inertialAlphaOffset" in tt,
              get: tt => tt.inertialAlphaOffset
            },
            metadata: Dt
          }, null, xt), (0, Ot.l)(tt, null, Jt, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "inertialBetaOffset" in tt,
              get: tt => tt.inertialBetaOffset
            },
            metadata: Dt
          }, null, xt), (0, Ot.l)(tt, null, ut, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "inertialRadiusOffset" in tt,
              get: tt => tt.inertialRadiusOffset
            },
            metadata: Dt
          }, null, xt), (0, Ot.l)(tt, null, Gt, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: tt => "panningInertia" in tt,
              get: tt => tt.panningInertia
            },
            metadata: Dt
          }, null, xt), (0, Ot.l)(tt, null, rt, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: tt => "zoomToMouseLocation" in tt,
              get: tt => tt.zoomToMouseLocation
            },
            metadata: Dt
          }, null, xt), (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "alpha" in tt,
              get: tt => tt.alpha,
              set: (tt, et) => {
                tt.alpha = et
              }
            },
            metadata: Dt
          }, Tt, gt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: tt => "beta" in tt,
              get: tt => tt.beta,
              set: (tt, et) => {
                tt.beta = et
              }
            },
            metadata: Dt
          }, st, nt), (0, Ot.l)(null, null, jt, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: tt => "radius" in tt,
              get: tt => tt.radius,
              set: (tt, et) => {
                tt.radius = et
              }
            },
            metadata: Dt
          }, te, ee), (0, Ot.l)(null, null, Xt, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: tt => "overrideCloneAlphaBetaRadius" in tt,
              get: tt => tt.overrideCloneAlphaBetaRadius,
              set: (tt, et) => {
                tt.overrideCloneAlphaBetaRadius = et
              }
            },
            metadata: Dt
          }, Ve, Oe), (0, Ot.l)(null, null, Qt, {
            kind: "field",
            name: "aT",
            static: !1,
            private: !1,
            access: {
              has: tt => "aT" in tt,
              get: tt => tt.aT,
              set: (tt, et) => {
                tt.aT = et
              }
            },
            metadata: Dt
          }, qe, De), (0, Ot.l)(null, null, ft, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: tt => "_targetHost" in tt,
              get: tt => tt._targetHost,
              set: (tt, et) => {
                tt._targetHost = et
              }
            },
            metadata: Dt
          }, me, de), (0, Ot.l)(null, null, Kt, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "lowerAlphaLimit" in tt,
              get: tt => tt.lowerAlphaLimit,
              set: (tt, et) => {
                tt.lowerAlphaLimit = et
              }
            },
            metadata: Dt
          }, je, He), (0, Ot.l)(null, null, ht, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "upperAlphaLimit" in tt,
              get: tt => tt.upperAlphaLimit,
              set: (tt, et) => {
                tt.upperAlphaLimit = et
              }
            },
            metadata: Dt
          }, Xe, Qe), (0, Ot.l)(null, null, vt, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "lowerBetaLimit" in tt,
              get: tt => tt.lowerBetaLimit,
              set: (tt, et) => {
                tt.lowerBetaLimit = et
              }
            },
            metadata: Dt
          }, le, Ee), (0, Ot.l)(null, null, Wt, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "upperBetaLimit" in tt,
              get: tt => tt.upperBetaLimit,
              set: (tt, et) => {
                tt.upperBetaLimit = et
              }
            },
            metadata: Dt
          }, fe, we), (0, Ot.l)(null, null, St, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "lowerRadiusLimit" in tt,
              get: tt => tt.lowerRadiusLimit,
              set: (tt, et) => {
                tt.lowerRadiusLimit = et
              }
            },
            metadata: Dt
          }, ye, Ne), (0, Ot.l)(null, null, ct, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "upperRadiusLimit" in tt,
              get: tt => tt.upperRadiusLimit,
              set: (tt, et) => {
                tt.upperRadiusLimit = et
              }
            },
            metadata: Dt
          }, ae, Me), (0, Ot.l)(null, null, Rt, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "lowerTargetYLimit" in tt,
              get: tt => tt.lowerTargetYLimit,
              set: (tt, et) => {
                tt.lowerTargetYLimit = et
              }
            },
            metadata: Dt
          }, be, Je), (0, Ot.l)(null, null, It, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: tt => "inertialPanningX" in tt,
              get: tt => tt.inertialPanningX,
              set: (tt, et) => {
                tt.inertialPanningX = et
              }
            },
            metadata: Dt
          }, Ce, ue), (0, Ot.l)(null, null, Pt, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: tt => "inertialPanningY" in tt,
              get: tt => tt.inertialPanningY,
              set: (tt, et) => {
                tt.inertialPanningY = et
              }
            },
            metadata: Dt
          }, Ke, he), (0, Ot.l)(null, null, Zt, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: tt => "pinchToPanMaxDistance" in tt,
              get: tt => tt.pinchToPanMaxDistance,
              set: (tt, et) => {
                tt.pinchToPanMaxDistance = et
              }
            },
            metadata: Dt
          }, ve, We), (0, Ot.l)(null, null, Ft, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: tt => "panningDistanceLimit" in tt,
              get: tt => tt.panningDistanceLimit,
              set: (tt, et) => {
                tt.panningDistanceLimit = et
              }
            },
            metadata: Dt
          }, Se, ce), (0, Ot.l)(null, null, kt, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: tt => "panningOriginTarget" in tt,
              get: tt => tt.panningOriginTarget,
              set: (tt, et) => {
                tt.panningOriginTarget = et
              }
            },
            metadata: Dt
          }, Re, Ie), (0, Ot.l)(null, null, Ut, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: tt => "zoomOnFactor" in tt,
              get: tt => tt.zoomOnFactor,
              set: (tt, et) => {
                tt.zoomOnFactor = et
              }
            },
            metadata: Dt
          }, Pe, Ze), (0, Ot.l)(null, null, At, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: tt => "targetScreenOffset" in tt,
              get: tt => tt.targetScreenOffset,
              set: (tt, et) => {
                tt.targetScreenOffset = et
              }
            },
            metadata: Dt
          }, Le, Fe), (0, Ot.l)(null, null, it, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: tt => "allowUpsideDown" in tt,
              get: tt => tt.allowUpsideDown,
              set: (tt, et) => {
                tt.allowUpsideDown = et
              }
            },
            metadata: Dt
          }, ke, Ge), (0, Ot.l)(null, null, Yt, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: tt => "useInputToRestoreState" in tt,
              get: tt => tt.useInputToRestoreState,
              set: (tt, et) => {
                tt.useInputToRestoreState = et
              }
            },
            metadata: Dt
          }, ze, oe), (0, Ot.l)(null, null, Bt, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: tt => "restoreStateInterpolationFactor" in tt,
              get: tt => tt.restoreStateInterpolationFactor,
              set: (tt, et) => {
                tt.restoreStateInterpolationFactor = et
              }
            },
            metadata: Dt
          }, re, Ue), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Ut = !1;
    Ut || (Ut = !0, jt.d.AddNodeConstructor("ArcRotateCamera", ((tt, et) => () => new rt(tt, 0, 0, 1, mt.n.Zero(), et))), (0, Ft.i)("BABYLON.ArcRotateCamera", rt))
  },
  40433: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.b
    });
    var Ot = Vt(40438);
    (0, Ot.f)()
  },
  40438: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      f: () => lt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(37513),
      dt = Vt(40445),
      jt = Vt(40415),
      Ht = Vt(37390);
    let Xt = (() => {
        var tt;
        let et, Vt, jt = dt.e,
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        return tt = class extends jt {
          constructor(tt, et, Vt, qt) {
            super(tt, Vt, qt), this.groundColor = (0, Ot.m)(this, Ht, new mt.b(0, 0, 0)), this.direction = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, void 0)), (0, Ot.m)(this, lt), this.direction = et || Dt.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(tt) {
            return this.direction = Dt.n.Normalize(tt.subtract(Dt.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Vt.x, Vt.y, Vt.z, 0, et), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), et), this
          }
          transferToNodeMaterialEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return tt.setFloat3(et, Vt.x, Vt.y, Vt.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return dt.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(tt, et) {
            tt["HEMILIGHT" + et] = !0
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(jt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.t)()], Vt = [(0, qt.M)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "groundColor" in tt,
              get: tt => tt.groundColor,
              set: (tt, et) => {
                tt.groundColor = et
              }
            },
            metadata: Dt
          }, Ht, Xt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: tt => "direction" in tt,
              get: tt => tt.direction,
              set: (tt, et) => {
                tt.direction = et
              }
            },
            metadata: Dt
          }, Qt, lt), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Qt = !1;

    function lt() {
      Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_3", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.HemisphericLight", Xt))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
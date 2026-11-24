export const id = 260;
export const ids = [260];
export const modules = {
  41093: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Wk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37187),
      yk = Ik(37153),
      lk = Ik(37189),
      ak = Ik(40218),
      qk = Ik(40417),
      Lk = Ik(40169),
      tk = Ik(39891),
      Zk = Ik(37158);
    class jk {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(kk) {
        this._zoomStopsAnimation = kk
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(kk) {
        this._idleRotationSpeed = kk
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(kk) {
        this._idleRotationWaitTime = kk
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(kk) {
        this._idleRotationSpinupTime = kk
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
      attach(kk) {
        this._attachedCamera = kk;
        const Fk = this._attachedCamera.mG();
        this._onPrePointerObservableObserver = Fk.onPrePointerObservable.add((kk => {
          kk.type !== Lk.d.POINTERDOWN ? kk.type === Lk.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const kk = tk.d.Now;
          let Fk = 0;
          null != this._lastFrameTime && (Fk = kk - this._lastFrameTime), this._lastFrameTime = kk, this._applyUserInteraction();
          const Ik = kk - this._lastInteractionTime - this._idleRotationWaitTime,
            Xk = Math.max(Math.min(Ik / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Xk, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Fk / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.mG();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(kk) {
        this._lastInteractionTime = kk ?? tk.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Zk.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let kk = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (kk = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? kk : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = tk.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Ik(41102);
    class ek {
      constructor() {
        this._easingMode = ek.EASINGMODE_EASEIN
      }
      setEasingMode(kk) {
        const Fk = Math.min(Math.max(kk, 0), 2);
        this._easingMode = Fk
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(kk) {
        throw new Error("You must implement this method")
      }
      ease(kk) {
        switch (this._easingMode) {
          case ek.EASINGMODE_EASEIN:
            return this.easeInCore(kk);
          case ek.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - kk)
        }
        return kk >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - kk))) + .5 : .5 * this.easeInCore(2 * kk)
      }
    }
    ek.EASINGMODE_EASEIN = 0, ek.EASINGMODE_EASEOUT = 1, ek.EASINGMODE_EASEINOUT = 2;
    var wk = Ik(41107);
    class Hk {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(kk) {
        if (this._autoTransitionRange === kk) return;
        this._autoTransitionRange = kk;
        const Fk = this._attachedCamera;
        Fk && (kk ? this._onMeshTargetChangedObserver = Fk.onMeshTargetChangedObservable.add((kk => {
          if (kk && (kk.computeWorldMatrix(!0), kk.vR)) {
            const Fk = kk.vR().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Fk, this.upperRadiusTransitionRange = .05 * Fk
          }
        })) : this._onMeshTargetChangedObserver && Fk.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(kk) {
        this._attachedCamera = kk, this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(kk) {
        return !!this._attachedCamera && (this._attachedCamera.radius === kk && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(kk) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (Hk.EasingFunction.setEasingMode(Hk.EasingMode), this._radiusBounceTransition = wk.c.CreateAnimation("radius", wk.c.ANIMATIONTYPE_FLOAT, 60, Hk.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Fk = wk.c.TransitionTo("radius", this._attachedCamera.radius + kk, this._attachedCamera, this._attachedCamera.mG(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Fk && this._animatables.push(Fk)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Hk.EasingFunction = new class extends ek {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = kk
      }
      easeInCore(kk) {
        const Fk = Math.max(0, this.amplitude);
        return Math.pow(kk, 3) - kk * Fk * Math.sin(3.141592653589793 * kk)
      }
    }(.3), Hk.EasingMode = ek.EASINGMODE_EASEOUT;
    class Jk {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new ik.e, this._mode = Jk.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(kk) {
        this._mode = kk
      }
      get mode() {
        return this._mode
      }
      set radiusScale(kk) {
        this._radiusScale = kk
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(kk) {
        this._positionScale = kk
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(kk) {
        this._defaultElevation = kk
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(kk) {
        this._elevationReturnTime = kk
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(kk) {
        this._elevationReturnWaitTime = kk
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(kk) {
        this._zoomStopsAnimation = kk
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(kk) {
        this._framingTime = kk
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(kk) {
        this._attachedCamera = kk;
        const Fk = this._attachedCamera.mG();
        Jk.EasingFunction.setEasingMode(Jk.EasingMode), this._onPrePointerObservableObserver = Fk.onPrePointerObservable.add((kk => {
          kk.type !== Lk.d.POINTERDOWN ? kk.type === Lk.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = kk.onMeshTargetChangedObservable.add((kk => {
          kk && kk.vR && this.zoomOnMesh(kk, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.mG();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Xk = kk.vR().boundingBox;
        this.zoomOnBoundingInfo(Xk.minimumWorld, Xk.maximumWorld, Fk, Ik)
      }
      zoomOnMeshHierarchy(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Xk = kk.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Xk.min, Xk.max, Fk, Ik)
      }
      zoomOnMeshesHierarchy(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Xk = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Tk = new yk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let ik = 0; ik < kk.length; ik++) {
          const Fk = kk[ik].getHierarchyBoundingVectors(!0);
          yk.t.CheckExtends(Fk.min, Xk, Tk), yk.t.CheckExtends(Fk.max, Xk, Tk)
        }
        this.zoomOnBoundingInfo(Xk, Tk, Fk, Ik)
      }
      zoomOnBoundingInfo(kk, Fk) {
        let Ik, Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const ik = kk.y,
          lk = ik + (Fk.y - ik) * this._positionScale,
          ak = Fk.subtract(kk).scale(.5);
        if (!isFinite(lk)) return !1;
        if (Xk) Ik = new yk.t(0, lk, 0);
        else {
          const Fk = kk.add(ak);
          Ik = new yk.t(Fk.x, lk, Fk.z)
        }
        this._vectorTransition || (this._vectorTransition = wk.c.CreateAnimation("target", wk.c.ANIMATIONTYPE_VECTOR3, 60, Jk.EasingFunction)), this._betaIsAnimating = !0;
        let qk = wk.c.TransitionTo("target", Ik, this._attachedCamera, this._attachedCamera.mG(), 60, this._vectorTransition, this._framingTime);
        qk && this._animatables.push(qk);
        let Lk = 0;
        if (this._mode === Jk.FitFrustumSidesMode) {
          const Ik = this._calculateLowerRadiusFromModelBoundingSphere(kk, Fk);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = ak.length() + this._attachedCamera.minZ), Lk = Ik
        } else this._mode === Jk.IgnoreBoundsSizeMode && (Lk = this._calculateLowerRadiusFromModelBoundingSphere(kk, Fk), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Ik = Fk.subtract(kk).length();
          this._attachedCamera.panningSensibility = 5e3 / Ik, this._attachedCamera.wheelPrecision = 100 / Lk
        }
        return this._radiusTransition || (this._radiusTransition = wk.c.CreateAnimation("radius", wk.c.ANIMATIONTYPE_FLOAT, 60, Jk.EasingFunction)), qk = wk.c.TransitionTo("radius", Lk, this._attachedCamera, this._attachedCamera.mG(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Tk && Tk(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), qk && this._animatables.push(qk), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(kk, Fk) {
        const Ik = this._attachedCamera;
        if (!Ik) return 0;
        let Xk = Ik._calculateLowerRadiusFromModelBoundingSphere(kk, Fk, this._radiusScale);
        return Ik.lowerRadiusLimit && this._mode === Jk.IgnoreBoundsSizeMode && (Xk = Xk < Ik.lowerRadiusLimit ? Ik.lowerRadiusLimit : Xk), Ik.upperRadiusLimit && (Xk = Xk > Ik.upperRadiusLimit ? Ik.upperRadiusLimit : Xk), Xk
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const kk = tk.d.Now - this._lastInteractionTime,
          Fk = .5 * Math.PI - this._defaultElevation,
          Ik = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Ik && kk >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = wk.c.CreateAnimation("beta", wk.c.ANIMATIONTYPE_FLOAT, 60, Jk.EasingFunction));
          const kk = wk.c.TransitionTo("beta", Fk, this._attachedCamera, this._attachedCamera.mG(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          kk && this._animatables.push(kk)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = tk.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Jk.EasingFunction = new class extends ek {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = kk
      }
      easeInCore(kk) {
        return this.exponent <= 0 ? kk : (Math.exp(this.exponent * kk) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Jk.EasingMode = ek.EASINGMODE_EASEINOUT, Jk.IgnoreBoundsSizeMode = 0, Jk.FitFrustumSidesMode = 1;
    var xk = Ik(40214),
      Pk = Ik(40207),
      Kk = Ik(40244),
      Qk = Ik(40097);
    let sk = (() => {
        var kk;
        let Fk, Ik = [],
          ik = [];
        return kk = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Xk.n)(this, Ik, [0, 1, 2]), this._pointerInput = (0, Xk.n)(this, ik)
          }
          attachControl(kk) {
            kk = Qk.h.BackCompatCameraNoPreventDefault(arguments);
            const Fk = this.camera.Oe(),
              Ik = Fk.getInputElement();
            let Xk = 0,
              Tk = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ik => {
              const yk = ik.event,
                lk = "touch" === yk.pointerType;
              if (ik.type !== Lk.d.POINTERMOVE && -1 === this.buttons.indexOf(yk.button)) return;
              const ak = yk.target;
              if (this._altKey = yk.altKey, this._ctrlKey = yk.ctrlKey, this._metaKey = yk.metaKey, this._shiftKey = yk.shiftKey, this._buttonsPressed = yk.buttons, Fk.isPointerLock) {
                const kk = yk.movementX,
                  Fk = yk.movementY;
                this.onTouch(null, kk, Fk), this._pointA = null, this._pointB = null
              } else {
                if (ik.type !== Lk.d.POINTERDOWN && ik.type !== Lk.d.POINTERDOUBLETAP && lk && this._pointA?.pointerId !== yk.pointerId && this._pointB?.pointerId !== yk.pointerId) return;
                if (ik.type !== Lk.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !lk)
                  if (ik.type === Lk.d.POINTERDOUBLETAP) this.onDoubleTap(yk.pointerType, yk);
                  else if (ik.type !== Lk.d.POINTERUP || this._currentMousePointerIdDown !== yk.pointerId && !lk) {
                  if (ik.type === Lk.d.POINTERMOVE)
                    if (kk || yk.preventDefault(), this._pointA && null === this._pointB) {
                      const kk = yk.clientX - this._pointA.x,
                        Fk = yk.clientY - this._pointA.y;
                      this._pointA.x = yk.clientX, this._pointA.y = yk.clientY, this.onTouch(this._pointA, kk, Fk)
                    } else if (this._pointA && this._pointB) {
                    const kk = this._pointA.pointerId === yk.pointerId ? this._pointA : this._pointB;
                    kk.x = yk.clientX, kk.y = yk.clientY;
                    const Fk = this._pointA.x - this._pointB.x,
                      Ik = this._pointA.y - this._pointB.y,
                      lk = Fk * Fk + Ik * Ik,
                      ak = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: yk.pointerId,
                        type: ik.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Xk, lk, Tk, ak), Tk = ak, Xk = lk
                  }
                } else {
                  try {
                    ak?.releasePointerCapture(yk.pointerId)
                  } catch (qk) {}
                  lk || (this._pointB = null), Fk._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == yk.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == yk.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Xk || Tk) && (this.onMultiTouch(this._pointA, this._pointB, Xk, 0, Tk, null), Xk = 0, Tk = null), this._currentMousePointerIdDown = -1, this.onButtonUp(yk), kk || yk.preventDefault()
                } else {
                  try {
                    ak?.setPointerCapture(yk.pointerId)
                  } catch (qk) {}
                  if (null === this._pointA) this._pointA = {
                    x: yk.clientX,
                    y: yk.clientY,
                    pointerId: yk.pointerId,
                    type: yk.pointerType,
                    button: yk.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: yk.clientX,
                      y: yk.clientY,
                      pointerId: yk.pointerId,
                      type: yk.pointerType,
                      button: yk.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || lk || (this._currentMousePointerIdDown = yk.pointerId), this.onButtonDown(yk), kk || (yk.preventDefault(), Ik && Ik.focus())
                }
              }
            }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._pointerInput, Lk.d.POINTERDOWN | Lk.d.POINTERUP | Lk.d.POINTERMOVE | Lk.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Xk = 0, Tk = null, this.onLostFocus()
            }, this._contextMenuBind = kk => this.onContextMenu(kk), Ik && Ik.addEventListener("contextmenu", this._contextMenuBind, !1);
            const ik = this.camera.mG().Oe().getHostWindow();
            ik && Qk.h.RegisterTopRootEvents(ik, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const kk = this.camera.mG().Oe().getHostWindow();
              kk && Qk.h.UnregisterTopRootEvents(kk, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const kk = this.camera.mG().Oe().getInputElement();
                kk && kk.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(kk, Fk) {}
          onTouch(kk, Fk, Ik) {}
          onMultiTouch(kk, Fk, Ik, Xk, Tk, ik) {}
          onContextMenu(kk) {
            kk.preventDefault()
          }
          onButtonDown(kk) {}
          onButtonUp(kk) {}
          onLostFocus() {}
        }, (() => {
          const yk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: kk => "buttons" in kk,
              get: kk => kk.buttons,
              set: (kk, Fk) => {
                kk.buttons = Fk
              }
            },
            metadata: yk
          }, Ik, ik), yk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yk
          })
        })(), kk
      })(),
      Vk = (() => {
        var kk;
        let Fk, Ik, ik, yk = sk,
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        return kk = class extends yk {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Xk.n)(this, lk, !0), this.multiTouchPanning = ((0, Xk.n)(this, ak), (0, Xk.n)(this, qk, !0)), this.multiTouchPanAndZoom = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, !0)), this._isPinching = ((0, Xk.n)(this, Zk), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(kk, Fk) {}
          _computeMultiTouchPanning(kk, Fk) {}
          onMultiTouch(kk, Fk, Ik, Xk, Tk, ik) {
            0 === Ik && null === Tk || 0 === Xk && null === ik || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Ik, Xk), this._computeMultiTouchPanning(Tk, ik)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Ik, Xk), this._isPinching = !0) : this._computeMultiTouchPanning(Tk, ik)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Tk, ik) : this.pinchZoom && this._computePinchZoom(Ik, Xk))
          }
          onButtonUp(kk) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(yk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchZoom" in kk,
              get: kk => kk.pinchZoom,
              set: (kk, Fk) => {
                kk.pinchZoom = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: kk => "multiTouchPanning" in kk,
              get: kk => kk.multiTouchPanning,
              set: (kk, Fk) => {
                kk.multiTouchPanning = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Xk.j)(null, null, ik, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "multiTouchPanAndZoom" in kk,
              get: kk => kk.multiTouchPanAndZoom,
              set: (kk, Fk) => {
                kk.multiTouchPanAndZoom = Fk
              }
            },
            metadata: jk
          }, tk, Zk), jk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          })
        })(), kk
      })(),
      zk = (() => {
        var kk;
        let Fk, Ik, ik, yk, lk, ak, qk, Lk = Vk,
          tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [],
          Jk = [],
          xk = [],
          Pk = [],
          Kk = [],
          Qk = [],
          sk = [],
          zk = [],
          Sk = [];
        return kk = class extends Lk {
          constructor() {
            super(...arguments), this.buttons = (0, Xk.n)(this, tk, [0, 1, 2]), this.angularSensibilityX = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, 1e3)), this.angularSensibilityY = ((0, Xk.n)(this, ek), (0, Xk.n)(this, wk, 1e3)), this.pinchPrecision = ((0, Xk.n)(this, Hk), (0, Xk.n)(this, Jk, 12)), this.pinchDeltaPercentage = ((0, Xk.n)(this, xk), (0, Xk.n)(this, Pk, 0)), this.useNaturalPinchZoom = ((0, Xk.n)(this, Kk), (0, Xk.n)(this, Qk, !1)), this.panningSensibility = ((0, Xk.n)(this, sk), (0, Xk.n)(this, zk, 1e3)), this.pinchInwards = ((0, Xk.n)(this, Sk), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(kk, Fk) {
            if (kk && Fk) {
              const Ik = Fk.x - kk.x,
                Xk = Fk.y - kk.y,
                Tk = this.camera.movement.input.getEntry("pointer", "pan"),
                ik = Tk?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== ik && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Ik * ik, this.camera.movement.panAccumulatedPixels.y += Xk * ik)
            }
          }
          _computePinchZoom(Fk, Ik) {
            const Xk = this.camera.radius || kk.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Xk * Math.sqrt(Fk) / Math.sqrt(Ik);
            else if (this.pinchDeltaPercentage) {
              const kk = .001 * (Ik - Fk) * Xk * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            } else {
              const kk = (Ik - Fk) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            }
          }
          onTouch(kk, Fk, Ik) {
            const Xk = this._activeEntry ?? (this.camera.Oe().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Xk)
              if ("pan" === Xk.interaction) {
                const kk = Xk.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== kk && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Fk * kk, this.camera.movement.panAccumulatedPixels.y += Ik * kk)
              } else if ("rotate" === Xk.interaction) {
              const kk = Xk.kY ?? Xk.sensitivity ?? 1 / this.angularSensibilityX,
                Tk = Xk.FY ?? Xk.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Fk * kk, this.camera.movement.rotationAccumulatedPixels.y += -Ik * Tk
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(kk, Fk, Ik, Xk, Tk, ik) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Xk) - Math.sqrt(Ik)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(kk, Fk, Ik, Xk, Tk, ik)
          }
          onButtonDown(kk) {
            this._pointerConditions.button = kk.button, this._pointerModifiers.ctrl = kk.ctrlKey, this._pointerModifiers.alt = kk.altKey, this._pointerModifiers.shift = kk.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(kk)
          }
          onButtonUp(kk) {
            this._activeEntry = null, super.onButtonUp(kk)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Vk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: kk => "buttons" in kk,
              get: kk => kk.buttons,
              set: (kk, Fk) => {
                kk.buttons = Fk
              }
            },
            metadata: Vk
          }, tk, Zk), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: kk => "angularSensibilityX" in kk,
              get: kk => kk.angularSensibilityX,
              set: (kk, Fk) => {
                kk.angularSensibilityX = Fk
              }
            },
            metadata: Vk
          }, jk, ek), (0, Xk.j)(null, null, ik, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: kk => "angularSensibilityY" in kk,
              get: kk => kk.angularSensibilityY,
              set: (kk, Fk) => {
                kk.angularSensibilityY = Fk
              }
            },
            metadata: Vk
          }, wk, Hk), (0, Xk.j)(null, null, yk, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchPrecision" in kk,
              get: kk => kk.pinchPrecision,
              set: (kk, Fk) => {
                kk.pinchPrecision = Fk
              }
            },
            metadata: Vk
          }, Jk, xk), (0, Xk.j)(null, null, lk, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchDeltaPercentage" in kk,
              get: kk => kk.pinchDeltaPercentage,
              set: (kk, Fk) => {
                kk.pinchDeltaPercentage = Fk
              }
            },
            metadata: Vk
          }, Pk, Kk), (0, Xk.j)(null, null, ak, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "useNaturalPinchZoom" in kk,
              get: kk => kk.useNaturalPinchZoom,
              set: (kk, Fk) => {
                kk.useNaturalPinchZoom = Fk
              }
            },
            metadata: Vk
          }, Qk, sk), (0, Xk.j)(null, null, qk, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningSensibility" in kk,
              get: kk => kk.panningSensibility,
              set: (kk, Fk) => {
                kk.panningSensibility = Fk
              }
            },
            metadata: Vk
          }, zk, Sk), Vk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vk
          })
        })(), kk.MinimumRadiusForPinch = .001, kk
      })();
    Kk.d.ArcRotateCameraPointersInput = zk;
    var Sk = Ik(40176);
    let vk = (() => {
      var kk;
      let Fk, Ik, ik, lk, ak, qk, Lk, tk, Zk, jk, ek, wk = [],
        Hk = [],
        Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        sk = [],
        Vk = [],
        zk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [];
      return kk = class {
        constructor() {
          this.camera = (0, Xk.n)(this, wk), this.keysUp = (0, Xk.n)(this, Hk, [38]), this.keysDown = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, [40])), this.keysLeft = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, [37])), this.keysRight = ((0, Xk.n)(this, sk), (0, Xk.n)(this, Vk, [39])), this.keysReset = ((0, Xk.n)(this, zk), (0, Xk.n)(this, vk, [220])), this.keysZoomIn = ((0, Xk.n)(this, Ek), (0, Xk.n)(this, Ok, [187, 107])), this.keysZoomOut = ((0, Xk.n)(this, nk), (0, Xk.n)(this, Gk, [189, 109])), this.panningSensibility = ((0, Xk.n)(this, pk), (0, Xk.n)(this, uk, 50)), this.zoomingSensibility = ((0, Xk.n)(this, bk), (0, Xk.n)(this, Rk, 25)), this.angularSpeed = ((0, Xk.n)(this, Uk), (0, Xk.n)(this, Ck, .01)), this._useAltToZoom = ((0, Xk.n)(this, Nk), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new yk.p, this._panDirection = new yk.p
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(kk) {
          this._useAltToZoom = kk, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const kk = this.camera.movement.input,
            Fk = kk.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Fk ? kk.inputMap.splice(kk.inputMap.indexOf(Fk), 1) : this._useAltToZoom && !Fk && kk.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(kk) {
          kk = Qk.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.mG(), this._engine = this._scene.Oe(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Fk => {
            const Ik = Fk.event;
            if (!Ik.metaKey)
              if (Fk.type === Sk.d.KEYDOWN) {
                if (this._ctrlPressed = Ik.ctrlKey, this._altPressed = Ik.altKey, -1 !== this.keysUp.indexOf(Ik.keyCode) || -1 !== this.keysDown.indexOf(Ik.keyCode) || -1 !== this.keysLeft.indexOf(Ik.keyCode) || -1 !== this.keysRight.indexOf(Ik.keyCode) || -1 !== this.keysReset.indexOf(Ik.keyCode) || -1 !== this.keysZoomIn.indexOf(Ik.keyCode) || -1 !== this.keysZoomOut.indexOf(Ik.keyCode)) {
                  -1 === this._keys.indexOf(Ik.keyCode) && this._keys.push(Ik.keyCode), Ik.preventDefault && (kk || Ik.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Ik.keyCode) || -1 !== this.keysDown.indexOf(Ik.keyCode) || -1 !== this.keysLeft.indexOf(Ik.keyCode) || -1 !== this.keysRight.indexOf(Ik.keyCode) || -1 !== this.keysReset.indexOf(Ik.keyCode) || -1 !== this.keysZoomIn.indexOf(Ik.keyCode) || -1 !== this.keysZoomOut.indexOf(Ik.keyCode)) {
              const Fk = this._keys.indexOf(Ik.keyCode);
              Fk >= 0 && this._keys.splice(Fk, 1), Ik.preventDefault && (kk || Ik.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const kk = this.camera,
              Fk = kk.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Ik = this._rotateDirection.set(0, 0),
              Xk = this._panDirection.set(0, 0);
            let Tk = 0,
              ik = 0;
            for (let yk = 0; yk < this._keys.length; yk++) {
              const lk = this._keys[yk];
              if (this._keyboardConditions.key = lk, -1 === this.keysReset.indexOf(lk)) {
                const kk = Fk.resolveInteraction("keyboard", this._keyboardConditions);
                if (kk)
                  if ("pan" === kk.interaction) ik = Math.max(ik, kk.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(lk) ? Xk.x -= 1 : -1 !== this.keysRight.indexOf(lk) ? Xk.x += 1 : -1 !== this.keysUp.indexOf(lk) ? Xk.y += 1 : -1 !== this.keysDown.indexOf(lk) && (Xk.y -= 1);
                  else if ("zoom" === kk.interaction) {
                  const Ik = kk.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(lk) || -1 !== this.keysZoomIn.indexOf(lk) ? Fk.handlers.zoom(Ik) : -1 === this.keysDown.indexOf(lk) && -1 === this.keysZoomOut.indexOf(lk) || Fk.handlers.zoom(-Ik)
                } else "rotate" === kk.interaction && (Tk = Math.max(Tk, kk.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(lk) ? Ik.x -= 1 : -1 !== this.keysRight.indexOf(lk) ? Ik.x += 1 : -1 !== this.keysUp.indexOf(lk) ? Ik.y -= 1 : -1 !== this.keysDown.indexOf(lk) && (Ik.y += 1))
              } - 1 !== this.keysReset.indexOf(lk) && kk.useInputToRestoreState && kk.restoreState()
            }
            0 === Ik.x && 0 === Ik.y || (Ik.normalize().scaleInPlace(Tk), Fk.handlers.rotate(Ik.x, Ik.y)), 0 === Xk.x && 0 === Xk.y || (Xk.normalize().scaleInPlace(ik), Fk.handlers.pan(Xk.x, Xk.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const yk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], (0, Xk.j)(kk, null, ek, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAltToZoom" in kk,
            get: kk => kk.useAltToZoom
          },
          metadata: yk
        }, null, wk), (0, Xk.j)(null, null, Fk, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUp" in kk,
            get: kk => kk.keysUp,
            set: (kk, Fk) => {
              kk.keysUp = Fk
            }
          },
          metadata: yk
        }, Hk, Jk), (0, Xk.j)(null, null, Ik, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDown" in kk,
            get: kk => kk.keysDown,
            set: (kk, Fk) => {
              kk.keysDown = Fk
            }
          },
          metadata: yk
        }, xk, Pk), (0, Xk.j)(null, null, ik, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysLeft" in kk,
            get: kk => kk.keysLeft,
            set: (kk, Fk) => {
              kk.keysLeft = Fk
            }
          },
          metadata: yk
        }, Kk, sk), (0, Xk.j)(null, null, lk, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRight" in kk,
            get: kk => kk.keysRight,
            set: (kk, Fk) => {
              kk.keysRight = Fk
            }
          },
          metadata: yk
        }, Vk, zk), (0, Xk.j)(null, null, ak, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysReset" in kk,
            get: kk => kk.keysReset,
            set: (kk, Fk) => {
              kk.keysReset = Fk
            }
          },
          metadata: yk
        }, vk, Ek), (0, Xk.j)(null, null, qk, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysZoomIn" in kk,
            get: kk => kk.keysZoomIn,
            set: (kk, Fk) => {
              kk.keysZoomIn = Fk
            }
          },
          metadata: yk
        }, Ok, nk), (0, Xk.j)(null, null, Lk, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysZoomOut" in kk,
            get: kk => kk.keysZoomOut,
            set: (kk, Fk) => {
              kk.keysZoomOut = Fk
            }
          },
          metadata: yk
        }, Gk, pk), (0, Xk.j)(null, null, tk, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "panningSensibility" in kk,
            get: kk => kk.panningSensibility,
            set: (kk, Fk) => {
              kk.panningSensibility = Fk
            }
          },
          metadata: yk
        }, uk, bk), (0, Xk.j)(null, null, Zk, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "zoomingSensibility" in kk,
            get: kk => kk.zoomingSensibility,
            set: (kk, Fk) => {
              kk.zoomingSensibility = Fk
            }
          },
          metadata: yk
        }, Rk, Uk), (0, Xk.j)(null, null, jk, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: kk => "angularSpeed" in kk,
            get: kk => kk.angularSpeed,
            set: (kk, Fk) => {
              kk.angularSpeed = Fk
            }
          },
          metadata: yk
        }, Ck, Nk), yk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yk
        })
      })(), kk
    })();
    Kk.d.ArcRotateCameraKeyboardMoveInput = vk;
    var Ek = Ik(37785),
      Ok = Ik(40182);
    let nk = (() => {
      var kk;
      let Fk, Ik, ik, ak = [],
        qk = [],
        tk = [],
        jk = [],
        ek = [],
        wk = [];
      return kk = class {
        constructor() {
          this.wheelPrecision = (0, Xk.n)(this, ak, 3), this.zoomToMouseLocation = ((0, Xk.n)(this, qk), (0, Xk.n)(this, tk, !1)), this.wheelDeltaPercentage = ((0, Xk.n)(this, jk), (0, Xk.n)(this, ek, 0)), this.customComputeDeltaFromMouseWheel = ((0, Xk.n)(this, wk), null), this._viewOffset = new yk.t(0, 0, 0), this._globalOffset = new yk.t(0, 0, 0), this._inertialPanning = yk.t.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(kk, Fk) {
          let Ik;
          const Xk = .01 * kk * this.wheelDeltaPercentage * Fk;
          return Ik = kk > 0 ? Xk / (1 + this.wheelDeltaPercentage) : Xk * (1 + this.wheelDeltaPercentage), Ik
        }
        attachControl(kk) {
          kk = Qk.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Fk => {
            if (Fk.type !== Lk.d.POINTERWHEEL) return;
            const Ik = Fk.event;
            let Xk;
            const Tk = Ik.deltaMode === Ok.c.DOM_DELTA_LINE ? 40 : 1,
              ik = -Ik.deltaY * Tk;
            if (this.customComputeDeltaFromMouseWheel) Xk = this.customComputeDeltaFromMouseWheel(ik, this, Ik);
            else if (this.wheelDeltaPercentage) {
              if (Xk = this._computeDeltaFromMouseWheelLegacyEvent(ik, this.camera.radius), Xk > 0) {
                const kk = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Fk = this.camera.radius,
                  Ik = kk + Xk;
                for (let Xk = 0; Xk < 20 && !(Fk <= Ik) && !(Math.abs(Ik * this.camera.inertia) < .001); Xk++) Fk -= Ik, Ik *= this.camera.inertia;
                Fk = (0, lk.Clamp)(Fk, 0, Number.MAX_VALUE), Xk = this._computeDeltaFromMouseWheelLegacyEvent(ik, Fk)
              }
            } else {
              const kk = this.camera.movement.input.getEntry("wheel", "zoom");
              Xk = ik * (kk?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Xk && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Xk)) : this.camera.movement.zoomAccumulatedPixels += Xk), Ik.preventDefault && (kk || Ik.preventDefault())
          }, this._observer = this.camera.mG()._inputManager._addCameraPointerObserver(this._wheel, Lk.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I6(0)
        }
        detachControl() {
          this._observer && (this.camera.mG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const kk = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(kk.inertialAlphaOffset) + Math.abs(kk.inertialBetaOffset) + Math.abs(kk.inertialRadiusOffset)) {
            this._updateHitPlane(), kk.target.addInPlace(this._inertialPanning), kk.radius -= this._zoomToMouseRadiusOffset;
            const Fk = kk.movement.getFrameIndependentDecay(kk.inertia);
            this._inertialPanning.scaleInPlace(Fk), this._zoomToMouseRadiusOffset *= Fk, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Zk.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const kk = this.camera,
            Fk = kk.target.subtract(kk.position);
          this._hitPlane = Ek.e.FromPositionAndNormal(kk.target, Fk)
        }
        _getPosition() {
          const kk = this.camera,
            Fk = kk.mG(),
            Ik = Fk.createPickingRay(Fk.pointerX, Fk.pointerY, yk.c.Identity(), kk, !1);
          0 === kk.targetScreenOffset.x && 0 === kk.targetScreenOffset.y || (this._viewOffset.set(kk.targetScreenOffset.x, kk.targetScreenOffset.y, 0), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), this._globalOffset = yk.t.TransformNormal(this._viewOffset, kk._cameraTransformMatrix), Ik.origin.addInPlace(this._globalOffset));
          let Xk = 0;
          return this._hitPlane && (Xk = Ik.intersectsPlane(this._hitPlane) ?? 0), Ik.origin.addInPlace(Ik.direction.scaleInPlace(Xk))
        }
        _zoomToMouse(kk) {
          const Fk = this.camera,
            Ik = 1 - Fk.inertia,
            Xk = Fk.movement.getFrameIndependentInputScale(Fk.inertia);
          if (Fk.lowerRadiusLimit) {
            const Tk = Fk.lowerRadiusLimit ?? 0;
            Fk.radius - (this._zoomToMouseRadiusOffset + kk * Xk) / Ik < Tk && (kk = ((Fk.radius - Tk) * Ik - this._zoomToMouseRadiusOffset) / Xk)
          }
          if (Fk.upperRadiusLimit) {
            const Tk = Fk.upperRadiusLimit ?? 0;
            Fk.radius - (this._zoomToMouseRadiusOffset + kk * Xk) / Ik > Tk && (kk = ((Fk.radius - Tk) * Ik - this._zoomToMouseRadiusOffset) / Xk)
          }
          const Tk = kk / Ik / Fk.radius,
            ik = this._getPosition(),
            lk = yk.l.Ge[6];
          ik.subtractToRef(Fk.target, lk), lk.scaleInPlace(Tk), lk.scaleInPlace(Ik), lk.scaleInPlace(Xk), this._inertialPanning.addInPlace(lk), this._zoomToMouseRadiusOffset += kk * Xk
        }
        _zeroIfClose(kk) {
          Math.abs(kk.x) < Zk.b && (kk.x = 0), Math.abs(kk.y) < Zk.b && (kk.y = 0), Math.abs(kk.z) < Zk.b && (kk.z = 0)
        }
      }, (() => {
        const yk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecision" in kk,
            get: kk => kk.wheelPrecision,
            set: (kk, Fk) => {
              kk.wheelPrecision = Fk
            }
          },
          metadata: yk
        }, ak, qk), (0, Xk.j)(null, null, Ik, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: kk => "zoomToMouseLocation" in kk,
            get: kk => kk.zoomToMouseLocation,
            set: (kk, Fk) => {
              kk.zoomToMouseLocation = Fk
            }
          },
          metadata: yk
        }, tk, jk), (0, Xk.j)(null, null, ik, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelDeltaPercentage" in kk,
            get: kk => kk.wheelDeltaPercentage,
            set: (kk, Fk) => {
              kk.wheelDeltaPercentage = Fk
            }
          },
          metadata: yk
        }, ek, wk), yk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yk
        })
      })(), kk
    })();
    Kk.d.ArcRotateCameraMouseWheelInput = nk;
    var Gk, pk, uk = Ik(39863);
    class bk extends Kk.h {
      constructor(kk) {
        super(kk)
      }
      addMouseWheel() {
        return this.add(new nk), this
      }
      addPointers() {
        return this.add(new zk), this
      }
      addKeyboard() {
        return this.add(new vk), this
      }
    }(Gk = bk.prototype).addVRDeviceOrientation ?? (Gk.addVRDeviceOrientation = (0, uk.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (pk = bk.prototype).addGamepad ?? (pk.addGamepad = (0, uk.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var Rk = Ik(37201),
      Uk = Ik(40228),
      Ck = Ik(40236);
    class Nk extends Uk.b {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik), this.input = new Ck.d({
          pan: (kk, Fk) => {
            this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += Fk
          },
          rotate: (kk, Fk) => {
            this.rotationAccumulatedPixels.x += kk, this.rotationAccumulatedPixels.y += Fk
          },
          zoom: kk => {
            this.zoomAccumulatedPixels += kk
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

    function ck(kk, Fk) {
      return isNaN(kk) ? Fk : kk
    }
    let Wk = (() => {
        var kk;
        let Fk, Ik, ak, Lk, tk, ek, wk, Kk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, Rk, Uk, Ck, Wk, fk, Bk, dk, Yk, Ak, gk = Pk.e,
          mk = [],
          hk = [],
          rk = [],
          Dk = [],
          Mk = [],
          kF = [],
          FF = [],
          IF = [],
          XF = [],
          TF = [],
          iF = [],
          yF = [],
          lF = [],
          aF = [],
          qF = [],
          LF = [],
          tF = [],
          ZF = [],
          jF = [],
          eF = [],
          wF = [],
          HF = [],
          JF = [],
          xF = [],
          PF = [],
          KF = [],
          QF = [],
          sF = [],
          VF = [],
          zF = [],
          SF = [],
          oF = [],
          vF = [],
          EF = [],
          OF = [],
          nF = [],
          GF = [],
          pF = [],
          uF = [],
          bF = [],
          RF = [],
          UF = [],
          CF = [],
          NF = [],
          cF = [],
          WF = [],
          fF = [];
        return kk = class extends gk {
          get target() {
            return this.nD
          }
          set target(kk) {
            this.setTarget(kk)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(kk) {
            kk && this.setTarget(kk)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(kk) {
            this.setPosition(kk)
          }
          set upVector(kk) {
            this._upToYMatrix || (this._yToUpMatrix = new yk.c, this._upToYMatrix = new yk.c, this._upVector = yk.t.Zero()), kk.normalize(), this._upVector.kS(kk), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            yk.c.RotationAlignToRef(yk.t.UpReadOnly, this._upVector, this._yToUpMatrix), yk.c.RotationAlignToRef(this._upVector, yk.t.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const kk = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(kk) < this._rotationEpsilon ? 0 : kk
          }
          set inertialAlphaOffset(kk) {
            this._inertialAlphaOffset = kk, 0 === kk && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const kk = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(kk) < this._rotationEpsilon ? 0 : kk
          }
          set inertialBetaOffset(kk) {
            this._inertialBetaOffset = kk, 0 === kk && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const kk = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(kk) < this._rotationEpsilon ? 0 : kk
          }
          set inertialRadiusOffset(kk) {
            this._inertialRadiusOffset = kk, 0 === kk && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(kk) {
            this._panningInertia = kk, this.movement && (this.movement.panInertia = kk)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(kk) {
            this._inertia = kk, this.movement && (this.movement.rotationInertia = kk, this.movement.zoomInertia = kk)
          }
          get angularSensibilityX() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.angularSensibilityX : 0
          }
          set angularSensibilityX(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.angularSensibilityX = kk)
          }
          get angularSensibilityY() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.angularSensibilityY : 0
          }
          set angularSensibilityY(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.angularSensibilityY = kk)
          }
          get pinchPrecision() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.pinchPrecision : 0
          }
          set pinchPrecision(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.pinchPrecision = kk)
          }
          get pinchDeltaPercentage() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.pinchDeltaPercentage = kk)
          }
          get useNaturalPinchZoom() {
            const kk = this.inputs.attached.pointers;
            return !!kk && kk.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.useNaturalPinchZoom = kk)
          }
          get panningSensibility() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.panningSensibility : 0
          }
          set panningSensibility(kk) {
            const Fk = this.inputs.attached.pointers;
            Fk && (Fk.panningSensibility = kk)
          }
          get keysUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUp : []
          }
          set keysUp(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysUp = kk)
          }
          get keysDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDown : []
          }
          set keysDown(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysDown = kk)
          }
          get keysLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysLeft : []
          }
          set keysLeft(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysLeft = kk)
          }
          get keysRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRight : []
          }
          set keysRight(kk) {
            const Fk = this.inputs.attached.keyboard;
            Fk && (Fk.keysRight = kk)
          }
          get wheelPrecision() {
            const kk = this.inputs.attached.mousewheel;
            return kk ? kk.wheelPrecision : 0
          }
          set wheelPrecision(kk) {
            const Fk = this.inputs.attached.mousewheel;
            Fk && (Fk.wheelPrecision = kk)
          }
          get zoomToMouseLocation() {
            const kk = this.inputs.attached.mousewheel;
            return !!kk && kk.zoomToMouseLocation
          }
          set zoomToMouseLocation(kk) {
            const Fk = this.inputs.attached.mousewheel;
            Fk && (Fk.zoomToMouseLocation = kk)
          }
          get wheelDeltaPercentage() {
            const kk = this.inputs.attached.mousewheel;
            return kk ? kk.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(kk) {
            const Fk = this.inputs.attached.mousewheel;
            Fk && (Fk.wheelDeltaPercentage = kk)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(kk) {
            this._useCtrlForPanningInternal = kk;
            const Fk = this.movement.input,
              Ik = Fk.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !kk && Ik ? Fk.inputMap.splice(Fk.inputMap.indexOf(Ik), 1) : kk && !Ik && Fk.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Xk = Fk.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !kk && Xk ? Fk.inputMap.splice(Fk.inputMap.indexOf(Xk), 1) : kk && !Xk && Fk.addEntry({
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
          set _panningMouseButton(kk) {
            this._panningMouseButtonInternal = kk;
            const Fk = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Fk && (Fk.button = kk)
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
          set useBouncingBehavior(kk) {
            kk !== this.useBouncingBehavior && (kk ? (this._bouncingBehavior = new Hk, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(kk) {
            kk !== this.useFramingBehavior && (kk ? (this._framingBehavior = new Jk, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(kk) {
            kk !== this.useAutoRotationBehavior && (kk ? (this._autoRotationBehavior = new jk, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(kk, Fk, Ik, Tk, lk, ak) {
            var qk;
            let Lk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(kk, yk.t.Zero(), ak, Lk), qk = this, this.alpha = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, void 0)), this.beta = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, void 0)), this.radius = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, void 0)), this.nD = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, void 0)), this._targetHost = ((0, Xk.n)(this, iF), (0, Xk.n)(this, yF, void 0)), this._upToYMatrix = (0, Xk.n)(this, lF), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Xk.n)(this, aF, null), this.upperAlphaLimit = ((0, Xk.n)(this, qF), (0, Xk.n)(this, LF, null)), this.lowerBetaLimit = ((0, Xk.n)(this, tF), (0, Xk.n)(this, ZF, .01)), this.upperBetaLimit = ((0, Xk.n)(this, jF), (0, Xk.n)(this, eF, Math.PI - .01)), this.lowerRadiusLimit = ((0, Xk.n)(this, wF), (0, Xk.n)(this, HF, null)), this.upperRadiusLimit = ((0, Xk.n)(this, JF), (0, Xk.n)(this, xF, null)), this.lowerTargetYLimit = ((0, Xk.n)(this, PF), (0, Xk.n)(this, KF, -1 / 0)), this.inertialPanningX = ((0, Xk.n)(this, QF), (0, Xk.n)(this, sF, 0)), this.inertialPanningY = ((0, Xk.n)(this, VF), (0, Xk.n)(this, zF, 0)), this.pinchToPanMaxDistance = ((0, Xk.n)(this, SF), (0, Xk.n)(this, oF, 20)), this.panningDistanceLimit = ((0, Xk.n)(this, vF), (0, Xk.n)(this, EF, null)), this.panningOriginTarget = ((0, Xk.n)(this, OF), (0, Xk.n)(this, nF, yk.t.Zero())), this._panningInertia = ((0, Xk.n)(this, GF), .9), this._inertia = .9, this.zoomOnFactor = (0, Xk.n)(this, pF, 1), this.targetScreenOffset = ((0, Xk.n)(this, uF), (0, Xk.n)(this, bF, yk.p.Zero())), this.allowUpsideDown = ((0, Xk.n)(this, RF), (0, Xk.n)(this, UF, !0)), this.useInputToRestoreState = ((0, Xk.n)(this, CF), (0, Xk.n)(this, NF, !0)), this.restoreStateInterpolationFactor = ((0, Xk.n)(this, cF), (0, Xk.n)(this, WF, 0)), this._currentInterpolationFactor = ((0, Xk.n)(this, fF), 0), this._viewMatrix = new yk.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new yk.t(1, 1, 0), this._transformedDirection = new yk.t, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new ik.e, this.checkCollisions = !1, this.collisionRadius = new yk.t(.5, .5, .5), this._previousPosition = yk.t.Zero(), this._collisionVelocity = yk.t.Zero(), this._newPosition = yk.t.Zero(), this._computationVector = yk.t.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new yk.t(NaN, NaN, NaN), this._goalTargetScreenOffset = new yk.p(NaN, NaN), this._onCollisionPositionChange = function(kk, Fk) {
              let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Ik ? (qk.setPosition(Fk), qk.eZ && qk.eZ(Ik)) : qk._previousPosition.kS(qk._position);
              const Xk = Math.cos(qk.alpha),
                Tk = Math.sin(qk.alpha),
                ik = Math.cos(qk.beta);
              let yk = Math.sin(qk.beta);
              0 === yk && (yk = 1e-4);
              const lk = qk._getTargetPosition();
              qk._computationVector.t5(qk.radius * Xk * yk, qk.radius * ik, qk.radius * Tk * yk), lk.addToRef(qk._computationVector, qk._newPosition), qk._position.kS(qk._newPosition);
              let ak = qk.upVector;
              qk.allowUpsideDown && qk.beta < 0 && (ak = ak.clone(), ak = ak.nX()), qk._computeViewMatrix(qk._position, lk, ak), qk._viewMatrix.addAtIndex(12, qk.targetScreenOffset.x), qk._viewMatrix.addAtIndex(13, qk.targetScreenOffset.y), qk._collisionTriggered = !1
            }, this.nD = yk.t.Zero(), lk && this.setTarget(lk), this.alpha = Fk, this.beta = Ik, this.radius = Tk, this.getViewMatrix(), this.inputs = new bk(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Nk(this.mG(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.nD = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = yk.p.Zero()
          }
          _updateCache(kk) {
            kk || super._updateCache(), this._cache.nD.kS(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.kS(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const kk = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? kk.addToRef(this._targetBoundingCenter, this.nD) : this.nD.kS(kk)
            }
            const kk = this._getLockedTargetPosition();
            return kk || this.nD
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Zk.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              ik = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ik ? this._currentInterpolationFactor = ik : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = ck(kk, this._goalAlpha), this._goalBeta = ck(Fk, this._goalBeta), this._goalRadius = ck(Ik, this._goalRadius), this._goalTarget.set(ck(Xk.x, this._goalTarget.x), ck(Xk.y, this._goalTarget.y), ck(Xk.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(ck(Tk.x, this._goalTargetScreenOffset.x), ck(Tk.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, lk.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, lk.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, lk.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, lk.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.nD.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(kk, Fk) {
            let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Tk = arguments;
            Fk = Qk.h.BackCompatCameraNoPreventDefault(Tk), this._useCtrlForPanning = Ik, this._panningMouseButton = Xk, "boolean" === typeof Tk[0] && (Tk.length > 1 && (this._useCtrlForPanning = Tk[1]), Tk.length > 2 && (this._panningMouseButton = Tk[2])), this.inputs.attachElement(Fk), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(kk, Fk, Ik) {
            const Xk = this.invertRotation ? -1 : 1;
            let Tk = kk * this._calculateHandednessMultiplier();
            this.beta < 0 && (Tk *= -1), this.alpha += Tk * Xk, this.beta += Fk * Xk, this.radius -= Ik
          }
          _applyPanDelta(kk, Fk) {
            const Ik = yk.l.Ge[0].t5(kk, Fk, Fk);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Ik.multiplyInPlace(this.panningAxis), yk.t.TransformNormalToRef(Ik, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const kk = this.upVector,
                Fk = yk.t.CrossToRef(this._transformedDirection, kk, this._transformedDirection);
              yk.t.CrossToRef(kk, Fk, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.nD);
                yk.t.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.nD.kS(this._transformedDirection)
              } else {
                if (this.parent) {
                  const kk = yk.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(kk), kk.transposeToRef(kk), yk.t.TransformCoordinatesToRef(this._transformedDirection, kk, this._transformedDirection)
                }
                this.nD.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let kk = !1;
            this.movement.computeCurrentFrameDeltas();
            const Fk = this.movement.rotationDeltaCurrentFrame,
              Ik = this.movement.zoomDeltaCurrentFrame,
              Xk = this.movement.panDeltaCurrentFrame;
            if (0 === Fk.x && 0 === Fk.y && 0 === Ik && 0 === Xk.x && 0 === Xk.y || (kk = !0, 0 === Fk.x && 0 === Fk.y && 0 === Ik || this._applyRotationAndZoomDelta(Fk.x, Fk.y, Ik), 0 === Xk.x && 0 === Xk.y || this._applyPanDelta(Xk.x, Xk.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), kk = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Fk = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Fk && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Fk && (this.inertialPanningY = 0), kk = !0
            }
            if (kk) this.stopInterpolation();
            else if (this._isInterpolating) {
              let kk = !1;
              const Fk = this._scene.Oe().getDeltaTime() / 1e3,
                Ik = 1 - Math.pow(2, -Fk / this._currentInterpolationFactor),
                Xk = ck(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Fk = yk.l.Ge[0].set(ck(this._goalTarget.x, this.nD.x), ck(this._goalTarget.y, this.nD.y), ck(this._goalTarget.z, this.nD.z));
                yk.t.LerpToRef(this.target, Fk, Ik, this.nD), 10 * yk.t.Distance(this.target, Fk) / Xk < Zk.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.kS(Fk), this.setTarget(this.target, !1, !0, !0)) : kk = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Fk = yk.f.RotationAlphaBetaGammaToRef(ck(this._goalAlpha, this.alpha), ck(this._goalBeta, this.beta), 0, yk.l.Quaternion[0]),
                  Xk = yk.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yk.l.Quaternion[1]),
                  Tk = yk.f.SlerpToRef(Xk, Fk, Ik, yk.l.Quaternion[2]);
                Tk.normalize();
                const ik = Tk.toAlphaBetaGammaToRef(yk.l.Ge[0]);
                if (this.alpha = ik.x, this.beta = ik.y, Tk.isApprox(Fk, Zk.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const kk = Fk.toAlphaBetaGammaToRef(yk.l.Ge[0]);
                  this.alpha = kk.x, this.beta = kk.y
                } else kk = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Xk - this.radius) * Ik, Math.abs(Xk / this.radius - 1) < Zk.b ? (this._goalRadius = NaN, this.radius = Xk) : kk = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Fk = yk.l.Vector2[0].set(ck(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ck(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                yk.p.LerpToRef(this.targetScreenOffset, Fk, Ik, this.targetScreenOffset), yk.p.Distance(this.targetScreenOffset, Fk) < Zk.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.kS(Fk)) : kk = !0
              }
              this._isInterpolating = kk
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yk.t.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const kk = this.alpha;
            var Fk, Ik;
            this.alpha = function(kk) {
              let Fk = Math.PI / 2;
              return 0 === kk.x && 0 === kk.z || (Fk = Math.acos(kk.x / Math.sqrt(Math.pow(kk.x, 2) + Math.pow(kk.z, 2)))), kk.z < 0 && (Fk = 2 * Math.PI - Fk), Fk
            }(this._computationVector), this.beta = (Fk = this._computationVector.y, Ik = this.radius, Math.acos(Fk / Ik));
            const Xk = Math.round((kk - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Xk * Math.PI, this._checkLimits()
          }
          setPosition(kk) {
            this._position.equals(kk) || (this._position.kS(kk), this.rebuildAnglesAndRadius())
          }
          setTarget(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Xk = this.overrideCloneAlphaBetaRadius ?? Xk, kk.computeWorldMatrix) Fk && kk.vR ? this._targetBoundingCenter = kk.vR().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, kk.computeWorldMatrix(), this._targetHost = kk, this.nD = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Fk = kk,
                Xk = this._getTargetPosition();
              if (Xk && !Ik && Xk.equals(Fk)) return;
              this._targetHost = null, this.nD = Fk, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Xk || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const kk = Math.cos(this.alpha),
              Fk = Math.sin(this.alpha),
              Ik = Math.cos(this.beta);
            let Xk = Math.sin(this.beta);
            0 === Xk && (Xk = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Tk = this._getTargetPosition();
            if (this._computationVector.t5(this.radius * kk * Xk, this.radius * Ik, this.radius * Fk * Xk), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yk.t.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Tk.addToRef(this._computationVector, this._newPosition), this.mG().collisionsEnabled && this.checkCollisions) {
              const kk = this.mG().collisionCoordinator;
              this._collider || (this._collider = kk.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, kk.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.kS(this._newPosition);
              let kk = this.upVector;
              this.allowUpsideDown && Xk < 0 && (kk = kk.nX()), this._computeViewMatrix(this._position, Tk, kk), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.kS(Tk), this._viewMatrix
          }
          zoomOn(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            kk = kk || this.mG().meshes;
            const Ik = qk.b.MinMax(kk);
            let Xk = this._calculateLowerRadiusFromModelBoundingSphere(Ik.min, Ik.max);
            if (Xk = Math.max(Math.min(Xk, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Xk * this.zoomOnFactor, this.mode === xk.d.ORTHOGRAPHIC_CAMERA) {
              const kk = this.mG().Oe().getAspectRatio(this),
                Fk = Xk * this.zoomOnFactor / 2;
              this.orthoLeft = -Fk * kk, this.orthoRight = Fk * kk, this.orthoBottom = -Fk, this.orthoTop = Fk
            }
            this.focusOn({
              min: Ik.min,
              max: Ik.max,
              distance: Xk
            }, Fk)
          }
          focusOn(kk) {
            let Fk, Ik, Xk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === kk.min) {
              const Xk = kk || this.mG().meshes;
              Fk = qk.b.MinMax(Xk), Ik = yk.t.Distance(Fk.min, Fk.max)
            } else {
              Fk = kk, Ik = kk.distance
            }
            this.nD = qk.b.Center(Fk), Xk || (this.maxZ = 2 * Ik)
          }
          createRigCamera(Fk, Ik) {
            let Xk = 0;
            switch (this.cameraRigMode) {
              case xk.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case xk.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case xk.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case xk.d.RIG_MODE_VR:
                Xk = this._cameraRigParams.stereoHalfAngle * (0 === Ik ? 1 : -1);
                break;
              case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Xk = this._cameraRigParams.stereoHalfAngle * (0 === Ik ? -1 : 1)
            }
            const Tk = new kk(Fk, this.alpha + Xk, this.beta, this.radius, this.nD, this.mG());
            return Tk._cameraRigParams = {}, Tk.isRigCamera = !0, Tk.rigParent = this, Tk.upVector = this.upVector, Tk.mode = this.mode, Tk.orthoLeft = this.orthoLeft, Tk.orthoRight = this.orthoRight, Tk.orthoBottom = this.orthoBottom, Tk.orthoTop = this.orthoTop, Tk
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              Fk = this._rigCameras[1];
            switch (kk.beta = Fk.beta = this.beta, this.cameraRigMode) {
              case xk.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case xk.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case xk.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case xk.d.RIG_MODE_VR:
                kk.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Fk.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case xk.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                kk.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Fk.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Xk = yk.t.Distance(kk, Fk),
              Tk = this.mG().Oe().getAspectRatio(this),
              ik = Math.tan(this.fov / 2),
              lk = ik * Tk,
              ak = .5 * Xk * Ik,
              qk = ak * Math.sqrt(1 + 1 / (lk * lk)),
              Lk = ak * Math.sqrt(1 + 1 / (ik * ik));
            return Math.max(qk, Lk)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(gk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ak = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.H)("target")], ek = [(0, Tk.x)("targetHost")], wk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.J)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.J)()], vk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, Tk.J)()], uk = [(0, Tk.J)()], Rk = [(0, Tk.J)()], Uk = [(0, Tk.H)()], Ck = [(0, Tk.J)()], Wk = [(0, Tk.J)()], fk = [(0, Tk.J)()], Bk = [(0, Tk.F)()], dk = [(0, Tk.J)()], Yk = [(0, Tk.J)()], Ak = [(0, Tk.J)()], (0, Xk.j)(kk, null, wk, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialAlphaOffset" in kk,
              get: kk => kk.inertialAlphaOffset
            },
            metadata: ik
          }, null, mk), (0, Xk.j)(kk, null, Kk, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialBetaOffset" in kk,
              get: kk => kk.inertialBetaOffset
            },
            metadata: ik
          }, null, mk), (0, Xk.j)(kk, null, sk, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialRadiusOffset" in kk,
              get: kk => kk.inertialRadiusOffset
            },
            metadata: ik
          }, null, mk), (0, Xk.j)(kk, null, Ck, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningInertia" in kk,
              get: kk => kk.panningInertia
            },
            metadata: ik
          }, null, mk), (0, Xk.j)(kk, null, Wk, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: kk => "zoomToMouseLocation" in kk,
              get: kk => kk.zoomToMouseLocation
            },
            metadata: ik
          }, null, mk), (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "alpha" in kk,
              get: kk => kk.alpha,
              set: (kk, Fk) => {
                kk.alpha = Fk
              }
            },
            metadata: ik
          }, hk, rk), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: kk => "beta" in kk,
              get: kk => kk.beta,
              set: (kk, Fk) => {
                kk.beta = Fk
              }
            },
            metadata: ik
          }, Dk, Mk), (0, Xk.j)(null, null, ak, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: kk => "radius" in kk,
              get: kk => kk.radius,
              set: (kk, Fk) => {
                kk.radius = Fk
              }
            },
            metadata: ik
          }, kF, FF), (0, Xk.j)(null, null, Lk, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: kk => "overrideCloneAlphaBetaRadius" in kk,
              get: kk => kk.overrideCloneAlphaBetaRadius,
              set: (kk, Fk) => {
                kk.overrideCloneAlphaBetaRadius = Fk
              }
            },
            metadata: ik
          }, IF, XF), (0, Xk.j)(null, null, tk, {
            kind: "field",
            name: "nD",
            static: !1,
            private: !1,
            access: {
              has: kk => "nD" in kk,
              get: kk => kk.nD,
              set: (kk, Fk) => {
                kk.nD = Fk
              }
            },
            metadata: ik
          }, TF, iF), (0, Xk.j)(null, null, ek, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: kk => "_targetHost" in kk,
              get: kk => kk._targetHost,
              set: (kk, Fk) => {
                kk._targetHost = Fk
              }
            },
            metadata: ik
          }, yF, lF), (0, Xk.j)(null, null, Vk, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerAlphaLimit" in kk,
              get: kk => kk.lowerAlphaLimit,
              set: (kk, Fk) => {
                kk.lowerAlphaLimit = Fk
              }
            },
            metadata: ik
          }, aF, qF), (0, Xk.j)(null, null, zk, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperAlphaLimit" in kk,
              get: kk => kk.upperAlphaLimit,
              set: (kk, Fk) => {
                kk.upperAlphaLimit = Fk
              }
            },
            metadata: ik
          }, LF, tF), (0, Xk.j)(null, null, Sk, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerBetaLimit" in kk,
              get: kk => kk.lowerBetaLimit,
              set: (kk, Fk) => {
                kk.lowerBetaLimit = Fk
              }
            },
            metadata: ik
          }, ZF, jF), (0, Xk.j)(null, null, vk, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperBetaLimit" in kk,
              get: kk => kk.upperBetaLimit,
              set: (kk, Fk) => {
                kk.upperBetaLimit = Fk
              }
            },
            metadata: ik
          }, eF, wF), (0, Xk.j)(null, null, Ek, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerRadiusLimit" in kk,
              get: kk => kk.lowerRadiusLimit,
              set: (kk, Fk) => {
                kk.lowerRadiusLimit = Fk
              }
            },
            metadata: ik
          }, HF, JF), (0, Xk.j)(null, null, Ok, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperRadiusLimit" in kk,
              get: kk => kk.upperRadiusLimit,
              set: (kk, Fk) => {
                kk.upperRadiusLimit = Fk
              }
            },
            metadata: ik
          }, xF, PF), (0, Xk.j)(null, null, nk, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerTargetYLimit" in kk,
              get: kk => kk.lowerTargetYLimit,
              set: (kk, Fk) => {
                kk.lowerTargetYLimit = Fk
              }
            },
            metadata: ik
          }, KF, QF), (0, Xk.j)(null, null, Gk, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialPanningX" in kk,
              get: kk => kk.inertialPanningX,
              set: (kk, Fk) => {
                kk.inertialPanningX = Fk
              }
            },
            metadata: ik
          }, sF, VF), (0, Xk.j)(null, null, pk, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialPanningY" in kk,
              get: kk => kk.inertialPanningY,
              set: (kk, Fk) => {
                kk.inertialPanningY = Fk
              }
            },
            metadata: ik
          }, zF, SF), (0, Xk.j)(null, null, uk, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchToPanMaxDistance" in kk,
              get: kk => kk.pinchToPanMaxDistance,
              set: (kk, Fk) => {
                kk.pinchToPanMaxDistance = Fk
              }
            },
            metadata: ik
          }, oF, vF), (0, Xk.j)(null, null, Rk, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningDistanceLimit" in kk,
              get: kk => kk.panningDistanceLimit,
              set: (kk, Fk) => {
                kk.panningDistanceLimit = Fk
              }
            },
            metadata: ik
          }, EF, OF), (0, Xk.j)(null, null, Uk, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningOriginTarget" in kk,
              get: kk => kk.panningOriginTarget,
              set: (kk, Fk) => {
                kk.panningOriginTarget = Fk
              }
            },
            metadata: ik
          }, nF, GF), (0, Xk.j)(null, null, fk, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: kk => "zoomOnFactor" in kk,
              get: kk => kk.zoomOnFactor,
              set: (kk, Fk) => {
                kk.zoomOnFactor = Fk
              }
            },
            metadata: ik
          }, pF, uF), (0, Xk.j)(null, null, Bk, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "targetScreenOffset" in kk,
              get: kk => kk.targetScreenOffset,
              set: (kk, Fk) => {
                kk.targetScreenOffset = Fk
              }
            },
            metadata: ik
          }, bF, RF), (0, Xk.j)(null, null, dk, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: kk => "allowUpsideDown" in kk,
              get: kk => kk.allowUpsideDown,
              set: (kk, Fk) => {
                kk.allowUpsideDown = Fk
              }
            },
            metadata: ik
          }, UF, CF), (0, Xk.j)(null, null, Yk, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: kk => "useInputToRestoreState" in kk,
              get: kk => kk.useInputToRestoreState,
              set: (kk, Fk) => {
                kk.useInputToRestoreState = Fk
              }
            },
            metadata: ik
          }, NF, cF), (0, Xk.j)(null, null, Ak, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: kk => "restoreStateInterpolationFactor" in kk,
              get: kk => kk.restoreStateInterpolationFactor,
              set: (kk, Fk) => {
                kk.restoreStateInterpolationFactor = Fk
              }
            },
            metadata: ik
          }, WF, fF), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      fk = !1;
    fk || (fk = !0, ak.b.AddNodeConstructor("ArcRotateCamera", ((kk, Fk) => () => new Wk(kk, 0, 0, 1, yk.t.Zero(), Fk))), (0, Rk.f)("BABYLON.ArcRotateCamera", Wk))
  },
  40252: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk.b
    });
    var Xk = Ik(40259);
    (0, Xk.e)()
  },
  40259: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      e: () => Zk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(37331),
      lk = Ik(40265),
      ak = Ik(40218),
      qk = Ik(37201);
    let Lk = (() => {
        var kk;
        let Fk, Ik, ak = lk.b,
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        return kk = class extends ak {
          constructor(kk, Fk, Ik, Tk) {
            super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ik.x, Ik.y, Ik.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return kk.setFloat3(Fk, Ik.x, Ik.y, Ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(ak[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, Fk) => {
                kk.groundColor = Fk
              }
            },
            metadata: ik
          }, qk, Lk), (0, Xk.j)(null, null, Ik, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, Fk) => {
                kk.direction = Fk
              }
            },
            metadata: ik
          }, tk, Zk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      tk = !1;

    function Zk() {
      tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
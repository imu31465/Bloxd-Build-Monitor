export const id = 250;
export const ids = [250];
export const modules = {
  40507: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => hk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36781),
      Xk = Bk(36758),
      bk = Bk(36790),
      wk = Bk(39628),
      dk = Bk(39817),
      sk = Bk(39582),
      Vk = Bk(39307),
      Jk = Bk(36764);
    class Ak {
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
        const Fk = this._attachedCamera.XN();
        this._onPrePointerObservableObserver = Fk.onPrePointerObservable.add((kk => {
          kk.type !== sk.c.POINTERDOWN ? kk.type === sk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const kk = Vk.e.Now;
          let Fk = 0;
          null != this._lastFrameTime && (Fk = kk - this._lastFrameTime), this._lastFrameTime = kk, this._applyUserInteraction();
          const Bk = kk - this._lastInteractionTime - this._idleRotationWaitTime,
            Rk = Math.max(Math.min(Bk / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Rk, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Fk / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.XN();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(kk) {
        this._lastInteractionTime = kk ?? Vk.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Jk.c
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Vk.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Bk(40516);
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
    var yk = Bk(40521);
    class fk {
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
          if (kk && (kk.computeWorldMatrix(!0), kk.ZH)) {
            const Fk = kk.ZH().diagonalLength;
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
        this._radiusBounceTransition || (fk.EasingFunction.setEasingMode(fk.EasingMode), this._radiusBounceTransition = yk.b.CreateAnimation("radius", yk.b.ANIMATIONTYPE_FLOAT, 60, fk.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Fk = yk.b.TransitionTo("radius", this._attachedCamera.radius + kk, this._attachedCamera, this._attachedCamera.XN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Fk && this._animatables.push(Fk)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    fk.EasingFunction = new class extends ek {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = kk
      }
      easeInCore(kk) {
        const Fk = Math.max(0, this.amplitude);
        return Math.pow(kk, 3) - kk * Fk * Math.sin(3.141592653589793 * kk)
      }
    }(.3), fk.EasingMode = ek.EASINGMODE_EASEOUT;
    class mk {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new ak.e, this._mode = mk.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const Fk = this._attachedCamera.XN();
        mk.EasingFunction.setEasingMode(mk.EasingMode), this._onPrePointerObservableObserver = Fk.onPrePointerObservable.add((kk => {
          kk.type !== sk.c.POINTERDOWN ? kk.type === sk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = kk.onMeshTargetChangedObservable.add((kk => {
          kk && kk.ZH && this.zoomOnMesh(kk, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.XN();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Rk = kk.ZH().boundingBox;
        this.zoomOnBoundingInfo(Rk.minimumWorld, Rk.maximumWorld, Fk, Bk)
      }
      zoomOnMeshHierarchy(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Rk = kk.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Rk.min, Rk.max, Fk, Bk)
      }
      zoomOnMeshesHierarchy(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Rk = new Xk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          tk = new Xk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let ak = 0; ak < kk.length; ak++) {
          const Fk = kk[ak].getHierarchyBoundingVectors(!0);
          Xk.s.CheckExtends(Fk.min, Rk, tk), Xk.s.CheckExtends(Fk.max, Rk, tk)
        }
        this.zoomOnBoundingInfo(Rk, tk, Fk, Bk)
      }
      zoomOnBoundingInfo(kk, Fk) {
        let Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const ak = kk.y,
          bk = ak + (Fk.y - ak) * this._positionScale,
          wk = Fk.subtract(kk).scale(.5);
        if (!isFinite(bk)) return !1;
        if (Rk) Bk = new Xk.s(0, bk, 0);
        else {
          const Fk = kk.add(wk);
          Bk = new Xk.s(Fk.x, bk, Fk.z)
        }
        this._vectorTransition || (this._vectorTransition = yk.b.CreateAnimation("target", yk.b.ANIMATIONTYPE_VECTOR3, 60, mk.EasingFunction)), this._betaIsAnimating = !0;
        let dk = yk.b.TransitionTo("target", Bk, this._attachedCamera, this._attachedCamera.XN(), 60, this._vectorTransition, this._framingTime);
        dk && this._animatables.push(dk);
        let sk = 0;
        if (this._mode === mk.FitFrustumSidesMode) {
          const Bk = this._calculateLowerRadiusFromModelBoundingSphere(kk, Fk);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = wk.length() + this._attachedCamera.minZ), sk = Bk
        } else this._mode === mk.IgnoreBoundsSizeMode && (sk = this._calculateLowerRadiusFromModelBoundingSphere(kk, Fk), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Bk = Fk.subtract(kk).length();
          this._attachedCamera.panningSensibility = 5e3 / Bk, this._attachedCamera.wheelPrecision = 100 / sk
        }
        return this._radiusTransition || (this._radiusTransition = yk.b.CreateAnimation("radius", yk.b.ANIMATIONTYPE_FLOAT, 60, mk.EasingFunction)), dk = yk.b.TransitionTo("radius", sk, this._attachedCamera, this._attachedCamera.XN(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), tk && tk(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), dk && this._animatables.push(dk), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(kk, Fk) {
        const Bk = this._attachedCamera;
        if (!Bk) return 0;
        let Rk = Bk._calculateLowerRadiusFromModelBoundingSphere(kk, Fk, this._radiusScale);
        return Bk.lowerRadiusLimit && this._mode === mk.IgnoreBoundsSizeMode && (Rk = Rk < Bk.lowerRadiusLimit ? Bk.lowerRadiusLimit : Rk), Bk.upperRadiusLimit && (Rk = Rk > Bk.upperRadiusLimit ? Bk.upperRadiusLimit : Rk), Rk
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const kk = Vk.e.Now - this._lastInteractionTime,
          Fk = .5 * Math.PI - this._defaultElevation,
          Bk = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Bk && kk >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = yk.b.CreateAnimation("beta", yk.b.ANIMATIONTYPE_FLOAT, 60, mk.EasingFunction));
          const kk = yk.b.TransitionTo("beta", Fk, this._attachedCamera, this._attachedCamera.XN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          kk && this._animatables.push(kk)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Vk.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    mk.EasingFunction = new class extends ek {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = kk
      }
      easeInCore(kk) {
        return this.exponent <= 0 ? kk : (Math.exp(this.exponent * kk) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, mk.EasingMode = ek.EASINGMODE_EASEINOUT, mk.IgnoreBoundsSizeMode = 0, mk.FitFrustumSidesMode = 1;
    var Wk = Bk(39623),
      vk = Bk(39621),
      ik = Bk(39656),
      Yk = Bk(39492);
    let Lk = (() => {
        var kk;
        let Fk, Bk = [],
          ak = [];
        return kk = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Rk.l)(this, Bk, [0, 1, 2]), this._pointerInput = (0, Rk.l)(this, ak)
          }
          attachControl(kk) {
            kk = Yk.h.BackCompatCameraNoPreventDefault(arguments);
            const Fk = this.camera.ne(),
              Bk = Fk.getInputElement();
            let Rk = 0,
              tk = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ak => {
              const Xk = ak.event,
                bk = "touch" === Xk.pointerType;
              if (ak.type !== sk.c.POINTERMOVE && -1 === this.buttons.indexOf(Xk.button)) return;
              const wk = Xk.target;
              if (this._altKey = Xk.altKey, this._ctrlKey = Xk.ctrlKey, this._metaKey = Xk.metaKey, this._shiftKey = Xk.shiftKey, this._buttonsPressed = Xk.buttons, Fk.isPointerLock) {
                const kk = Xk.movementX,
                  Fk = Xk.movementY;
                this.onTouch(null, kk, Fk), this._pointA = null, this._pointB = null
              } else {
                if (ak.type !== sk.c.POINTERDOWN && ak.type !== sk.c.POINTERDOUBLETAP && bk && this._pointA?.pointerId !== Xk.pointerId && this._pointB?.pointerId !== Xk.pointerId) return;
                if (ak.type !== sk.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !bk)
                  if (ak.type === sk.c.POINTERDOUBLETAP) this.onDoubleTap(Xk.pointerType, Xk);
                  else if (ak.type !== sk.c.POINTERUP || this._currentMousePointerIdDown !== Xk.pointerId && !bk) {
                  if (ak.type === sk.c.POINTERMOVE)
                    if (kk || Xk.preventDefault(), this._pointA && null === this._pointB) {
                      const kk = Xk.clientX - this._pointA.x,
                        Fk = Xk.clientY - this._pointA.y;
                      this._pointA.x = Xk.clientX, this._pointA.y = Xk.clientY, this.onTouch(this._pointA, kk, Fk)
                    } else if (this._pointA && this._pointB) {
                    const kk = this._pointA.pointerId === Xk.pointerId ? this._pointA : this._pointB;
                    kk.x = Xk.clientX, kk.y = Xk.clientY;
                    const Fk = this._pointA.x - this._pointB.x,
                      Bk = this._pointA.y - this._pointB.y,
                      bk = Fk * Fk + Bk * Bk,
                      wk = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Xk.pointerId,
                        type: ak.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Rk, bk, tk, wk), tk = wk, Rk = bk
                  }
                } else {
                  try {
                    wk?.releasePointerCapture(Xk.pointerId)
                  } catch (dk) {}
                  bk || (this._pointB = null), Fk._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Xk.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Xk.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Rk || tk) && (this.onMultiTouch(this._pointA, this._pointB, Rk, 0, tk, null), Rk = 0, tk = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Xk), kk || Xk.preventDefault()
                } else {
                  try {
                    wk?.setPointerCapture(Xk.pointerId)
                  } catch (dk) {}
                  if (null === this._pointA) this._pointA = {
                    x: Xk.clientX,
                    y: Xk.clientY,
                    pointerId: Xk.pointerId,
                    type: Xk.pointerType,
                    button: Xk.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Xk.clientX,
                      y: Xk.clientY,
                      pointerId: Xk.pointerId,
                      type: Xk.pointerType,
                      button: Xk.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || bk || (this._currentMousePointerIdDown = Xk.pointerId), this.onButtonDown(Xk), kk || (Xk.preventDefault(), Bk && Bk.focus())
                }
              }
            }, this._observer = this.camera.XN()._inputManager._addCameraPointerObserver(this._pointerInput, sk.c.POINTERDOWN | sk.c.POINTERUP | sk.c.POINTERMOVE | sk.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Rk = 0, tk = null, this.onLostFocus()
            }, this._contextMenuBind = kk => this.onContextMenu(kk), Bk && Bk.addEventListener("contextmenu", this._contextMenuBind, !1);
            const ak = this.camera.XN().ne().getHostWindow();
            ak && Yk.h.RegisterTopRootEvents(ak, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const kk = this.camera.XN().ne().getHostWindow();
              kk && Yk.h.UnregisterTopRootEvents(kk, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.XN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const kk = this.camera.XN().ne().getInputElement();
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
          onTouch(kk, Fk, Bk) {}
          onMultiTouch(kk, Fk, Bk, Rk, tk, ak) {}
          onContextMenu(kk) {
            kk.preventDefault()
          }
          onButtonDown(kk) {}
          onButtonUp(kk) {}
          onLostFocus() {}
        }, (() => {
          const Xk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
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
            metadata: Xk
          }, Bk, ak), Xk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xk
          })
        })(), kk
      })(),
      Ok = (() => {
        var kk;
        let Fk, Bk, ak, Xk = Lk,
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        return kk = class extends Xk {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Rk.l)(this, bk, !0), this.multiTouchPanning = ((0, Rk.l)(this, wk), (0, Rk.l)(this, dk, !0)), this.multiTouchPanAndZoom = ((0, Rk.l)(this, sk), (0, Rk.l)(this, Vk, !0)), this._isPinching = ((0, Rk.l)(this, Jk), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(kk, Fk) {}
          _computeMultiTouchPanning(kk, Fk) {}
          onMultiTouch(kk, Fk, Bk, Rk, tk, ak) {
            0 === Bk && null === tk || 0 === Rk && null === ak || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Bk, Rk), this._computeMultiTouchPanning(tk, ak)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Bk, Rk), this._isPinching = !0) : this._computeMultiTouchPanning(tk, ak)) : this.multiTouchPanning ? this._computeMultiTouchPanning(tk, ak) : this.pinchZoom && this._computePinchZoom(Bk, Rk))
          }
          onButtonUp(kk) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
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
            metadata: Ak
          }, bk, wk), (0, Rk.j)(null, null, Bk, {
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
            metadata: Ak
          }, dk, sk), (0, Rk.j)(null, null, ak, {
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
            metadata: Ak
          }, Vk, Jk), Ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          })
        })(), kk
      })(),
      Ek = (() => {
        var kk;
        let Fk, Bk, ak, Xk, bk, wk, dk, sk = Ok,
          Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [],
          mk = [],
          Wk = [],
          vk = [],
          ik = [],
          Yk = [],
          Lk = [],
          Ek = [],
          Sk = [];
        return kk = class extends sk {
          constructor() {
            super(...arguments), this.buttons = (0, Rk.l)(this, Vk, [0, 1, 2]), this.angularSensibilityX = ((0, Rk.l)(this, Jk), (0, Rk.l)(this, Ak, 1e3)), this.angularSensibilityY = ((0, Rk.l)(this, ek), (0, Rk.l)(this, yk, 1e3)), this.pinchPrecision = ((0, Rk.l)(this, fk), (0, Rk.l)(this, mk, 12)), this.pinchDeltaPercentage = ((0, Rk.l)(this, Wk), (0, Rk.l)(this, vk, 0)), this.useNaturalPinchZoom = ((0, Rk.l)(this, ik), (0, Rk.l)(this, Yk, !1)), this.panningSensibility = ((0, Rk.l)(this, Lk), (0, Rk.l)(this, Ek, 1e3)), this.pinchInwards = ((0, Rk.l)(this, Sk), !0), this._activeEntry = null, this._pointerLockConditions = {
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
              const Bk = Fk.x - kk.x,
                Rk = Fk.y - kk.y,
                tk = this.camera.movement.input.getEntry("pointer", "pan"),
                ak = tk?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== ak && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Bk * ak, this.camera.movement.panAccumulatedPixels.y += Rk * ak)
            }
          }
          _computePinchZoom(Fk, Bk) {
            const Rk = this.camera.radius || kk.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Rk * Math.sqrt(Fk) / Math.sqrt(Bk);
            else if (this.pinchDeltaPercentage) {
              const kk = .001 * (Bk - Fk) * Rk * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            } else {
              const kk = (Bk - Fk) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            }
          }
          onTouch(kk, Fk, Bk) {
            const Rk = this._activeEntry ?? (this.camera.ne().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Rk)
              if ("pan" === Rk.interaction) {
                const kk = Rk.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== kk && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Fk * kk, this.camera.movement.panAccumulatedPixels.y += Bk * kk)
              } else if ("rotate" === Rk.interaction) {
              const kk = Rk.uq ?? Rk.sensitivity ?? 1 / this.angularSensibilityX,
                tk = Rk.Mq ?? Rk.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Fk * kk, this.camera.movement.rotationAccumulatedPixels.y += -Bk * tk
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(kk, Fk, Bk, Rk, tk, ak) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Rk) - Math.sqrt(Bk)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(kk, Fk, Bk, Rk, tk, ak)
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
          const Ok = "function" === typeof Symbol && Symbol.metadata ? Object.create(sk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], Xk = [(0, tk.M)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
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
            metadata: Ok
          }, Vk, Jk), (0, Rk.j)(null, null, Bk, {
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
            metadata: Ok
          }, Ak, ek), (0, Rk.j)(null, null, ak, {
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
            metadata: Ok
          }, yk, fk), (0, Rk.j)(null, null, Xk, {
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
            metadata: Ok
          }, mk, Wk), (0, Rk.j)(null, null, bk, {
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
            metadata: Ok
          }, vk, ik), (0, Rk.j)(null, null, wk, {
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
            metadata: Ok
          }, Yk, Lk), (0, Rk.j)(null, null, dk, {
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
            metadata: Ok
          }, Ek, Sk), Ok && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ok
          })
        })(), kk.MinimumRadiusForPinch = .001, kk
      })();
    ik.d.ArcRotateCameraPointersInput = Ek;
    var Sk = Bk(39589);
    let Nk = (() => {
      var kk;
      let Fk, Bk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk = [],
        fk = [],
        mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [];
      return kk = class {
        constructor() {
          this.camera = (0, Rk.l)(this, yk), this.keysUp = (0, Rk.l)(this, fk, [38]), this.keysDown = ((0, Rk.l)(this, mk), (0, Rk.l)(this, Wk, [40])), this.keysLeft = ((0, Rk.l)(this, vk), (0, Rk.l)(this, ik, [37])), this.keysRight = ((0, Rk.l)(this, Lk), (0, Rk.l)(this, Ok, [39])), this.keysReset = ((0, Rk.l)(this, Ek), (0, Rk.l)(this, Nk, [220])), this.keysZoomIn = ((0, Rk.l)(this, Hk), (0, Rk.l)(this, uk, [187, 107])), this.keysZoomOut = ((0, Rk.l)(this, Mk), (0, Rk.l)(this, gk, [189, 109])), this.panningSensibility = ((0, Rk.l)(this, Uk), (0, Rk.l)(this, ck, 50)), this.zoomingSensibility = ((0, Rk.l)(this, Gk), (0, Rk.l)(this, Tk, 25)), this.angularSpeed = ((0, Rk.l)(this, rk), (0, Rk.l)(this, Dk, .01)), this._useAltToZoom = ((0, Rk.l)(this, zk), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Xk.p, this._panDirection = new Xk.p
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
          kk = Yk.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XN(), this._engine = this._scene.ne(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Fk => {
            const Bk = Fk.event;
            if (!Bk.metaKey)
              if (Fk.type === Sk.e.KEYDOWN) {
                if (this._ctrlPressed = Bk.ctrlKey, this._altPressed = Bk.altKey, -1 !== this.keysUp.indexOf(Bk.keyCode) || -1 !== this.keysDown.indexOf(Bk.keyCode) || -1 !== this.keysLeft.indexOf(Bk.keyCode) || -1 !== this.keysRight.indexOf(Bk.keyCode) || -1 !== this.keysReset.indexOf(Bk.keyCode) || -1 !== this.keysZoomIn.indexOf(Bk.keyCode) || -1 !== this.keysZoomOut.indexOf(Bk.keyCode)) {
                  -1 === this._keys.indexOf(Bk.keyCode) && this._keys.push(Bk.keyCode), Bk.preventDefault && (kk || Bk.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Bk.keyCode) || -1 !== this.keysDown.indexOf(Bk.keyCode) || -1 !== this.keysLeft.indexOf(Bk.keyCode) || -1 !== this.keysRight.indexOf(Bk.keyCode) || -1 !== this.keysReset.indexOf(Bk.keyCode) || -1 !== this.keysZoomIn.indexOf(Bk.keyCode) || -1 !== this.keysZoomOut.indexOf(Bk.keyCode)) {
              const Fk = this._keys.indexOf(Bk.keyCode);
              Fk >= 0 && this._keys.splice(Fk, 1), Bk.preventDefault && (kk || Bk.preventDefault())
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
            const Bk = this._rotateDirection.set(0, 0),
              Rk = this._panDirection.set(0, 0);
            let tk = 0,
              ak = 0;
            for (let Xk = 0; Xk < this._keys.length; Xk++) {
              const bk = this._keys[Xk];
              if (this._keyboardConditions.key = bk, -1 === this.keysReset.indexOf(bk)) {
                const kk = Fk.resolveInteraction("keyboard", this._keyboardConditions);
                if (kk)
                  if ("pan" === kk.interaction) ak = Math.max(ak, kk.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(bk) ? Rk.x -= 1 : -1 !== this.keysRight.indexOf(bk) ? Rk.x += 1 : -1 !== this.keysUp.indexOf(bk) ? Rk.y += 1 : -1 !== this.keysDown.indexOf(bk) && (Rk.y -= 1);
                  else if ("zoom" === kk.interaction) {
                  const Bk = kk.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(bk) || -1 !== this.keysZoomIn.indexOf(bk) ? Fk.handlers.zoom(Bk) : -1 === this.keysDown.indexOf(bk) && -1 === this.keysZoomOut.indexOf(bk) || Fk.handlers.zoom(-Bk)
                } else "rotate" === kk.interaction && (tk = Math.max(tk, kk.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(bk) ? Bk.x -= 1 : -1 !== this.keysRight.indexOf(bk) ? Bk.x += 1 : -1 !== this.keysUp.indexOf(bk) ? Bk.y -= 1 : -1 !== this.keysDown.indexOf(bk) && (Bk.y += 1))
              } - 1 !== this.keysReset.indexOf(bk) && kk.useInputToRestoreState && kk.restoreState()
            }
            0 === Bk.x && 0 === Bk.y || (Bk.normalize().scaleInPlace(tk), Fk.handlers.rotate(Bk.x, Bk.y)), 0 === Rk.x && 0 === Rk.y || (Rk.normalize().scaleInPlace(ak), Fk.handlers.pan(Rk.x, Rk.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Xk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.M)()], Jk = [(0, tk.M)()], Ak = [(0, tk.M)()], ek = [(0, tk.M)()], (0, Rk.j)(kk, null, ek, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAltToZoom" in kk,
            get: kk => kk.useAltToZoom
          },
          metadata: Xk
        }, null, yk), (0, Rk.j)(null, null, Fk, {
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
          metadata: Xk
        }, fk, mk), (0, Rk.j)(null, null, Bk, {
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
          metadata: Xk
        }, Wk, vk), (0, Rk.j)(null, null, ak, {
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
          metadata: Xk
        }, ik, Lk), (0, Rk.j)(null, null, bk, {
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
          metadata: Xk
        }, Ok, Ek), (0, Rk.j)(null, null, wk, {
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
          metadata: Xk
        }, Nk, Hk), (0, Rk.j)(null, null, dk, {
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
          metadata: Xk
        }, uk, Mk), (0, Rk.j)(null, null, sk, {
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
          metadata: Xk
        }, gk, Uk), (0, Rk.j)(null, null, Vk, {
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
          metadata: Xk
        }, ck, Gk), (0, Rk.j)(null, null, Jk, {
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
          metadata: Xk
        }, Tk, rk), (0, Rk.j)(null, null, Ak, {
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
          metadata: Xk
        }, Dk, zk), Xk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xk
        })
      })(), kk
    })();
    ik.d.ArcRotateCameraKeyboardMoveInput = Nk;
    var Hk = Bk(37467),
      uk = Bk(39595);
    let Mk = (() => {
      var kk;
      let Fk, Bk, ak, wk = [],
        dk = [],
        Vk = [],
        Ak = [],
        ek = [],
        yk = [];
      return kk = class {
        constructor() {
          this.wheelPrecision = (0, Rk.l)(this, wk, 3), this.zoomToMouseLocation = ((0, Rk.l)(this, dk), (0, Rk.l)(this, Vk, !1)), this.wheelDeltaPercentage = ((0, Rk.l)(this, Ak), (0, Rk.l)(this, ek, 0)), this.customComputeDeltaFromMouseWheel = ((0, Rk.l)(this, yk), null), this._viewOffset = new Xk.s(0, 0, 0), this._globalOffset = new Xk.s(0, 0, 0), this._inertialPanning = Xk.s.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(kk, Fk) {
          let Bk;
          const Rk = .01 * kk * this.wheelDeltaPercentage * Fk;
          return Bk = kk > 0 ? Rk / (1 + this.wheelDeltaPercentage) : Rk * (1 + this.wheelDeltaPercentage), Bk
        }
        attachControl(kk) {
          kk = Yk.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Fk => {
            if (Fk.type !== sk.c.POINTERWHEEL) return;
            const Bk = Fk.event;
            let Rk;
            const tk = Bk.deltaMode === uk.b.DOM_DELTA_LINE ? 40 : 1,
              ak = -Bk.deltaY * tk;
            if (this.customComputeDeltaFromMouseWheel) Rk = this.customComputeDeltaFromMouseWheel(ak, this, Bk);
            else if (this.wheelDeltaPercentage) {
              if (Rk = this._computeDeltaFromMouseWheelLegacyEvent(ak, this.camera.radius), Rk > 0) {
                const kk = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Fk = this.camera.radius,
                  Bk = kk + Rk;
                for (let Rk = 0; Rk < 20 && !(Fk <= Bk) && !(Math.abs(Bk * this.camera.inertia) < .001); Rk++) Fk -= Bk, Bk *= this.camera.inertia;
                Fk = (0, bk.Clamp)(Fk, 0, Number.MAX_VALUE), Rk = this._computeDeltaFromMouseWheelLegacyEvent(ak, Fk)
              }
            } else {
              const kk = this.camera.movement.input.getEntry("wheel", "zoom");
              Rk = ak * (kk?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Rk && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Rk)) : this.camera.movement.zoomAccumulatedPixels += Rk), Bk.preventDefault && (kk || Bk.preventDefault())
          }, this._observer = this.camera.XN()._inputManager._addCameraPointerObserver(this._wheel, sk.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.J_(0)
        }
        detachControl() {
          this._observer && (this.camera.XN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const kk = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(kk.inertialAlphaOffset) + Math.abs(kk.inertialBetaOffset) + Math.abs(kk.inertialRadiusOffset)) {
            this._updateHitPlane(), kk.target.addInPlace(this._inertialPanning), kk.radius -= this._zoomToMouseRadiusOffset;
            const Fk = kk.movement.getFrameIndependentDecay(kk.inertia);
            this._inertialPanning.scaleInPlace(Fk), this._zoomToMouseRadiusOffset *= Fk, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Jk.c && (this._zoomToMouseRadiusOffset = 0)
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
          this._hitPlane = Hk.c.FromPositionAndNormal(kk.target, Fk)
        }
        _getPosition() {
          const kk = this.camera,
            Fk = kk.XN(),
            Bk = Fk.createPickingRay(Fk.pointerX, Fk.pointerY, Xk.c.Identity(), kk, !1);
          0 === kk.targetScreenOffset.x && 0 === kk.targetScreenOffset.y || (this._viewOffset.set(kk.targetScreenOffset.x, kk.targetScreenOffset.y, 0), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), this._globalOffset = Xk.s.TransformNormal(this._viewOffset, kk._cameraTransformMatrix), Bk.origin.addInPlace(this._globalOffset));
          let Rk = 0;
          return this._hitPlane && (Rk = Bk.intersectsPlane(this._hitPlane) ?? 0), Bk.origin.addInPlace(Bk.direction.scaleInPlace(Rk))
        }
        _zoomToMouse(kk) {
          const Fk = this.camera,
            Bk = 1 - Fk.inertia,
            Rk = Fk.movement.getFrameIndependentInputScale(Fk.inertia);
          if (Fk.lowerRadiusLimit) {
            const tk = Fk.lowerRadiusLimit ?? 0;
            Fk.radius - (this._zoomToMouseRadiusOffset + kk * Rk) / Bk < tk && (kk = ((Fk.radius - tk) * Bk - this._zoomToMouseRadiusOffset) / Rk)
          }
          if (Fk.upperRadiusLimit) {
            const tk = Fk.upperRadiusLimit ?? 0;
            Fk.radius - (this._zoomToMouseRadiusOffset + kk * Rk) / Bk > tk && (kk = ((Fk.radius - tk) * Bk - this._zoomToMouseRadiusOffset) / Rk)
          }
          const tk = kk / Bk / Fk.radius,
            ak = this._getPosition(),
            bk = Xk.l.Qe[6];
          ak.subtractToRef(Fk.target, bk), bk.scaleInPlace(tk), bk.scaleInPlace(Bk), bk.scaleInPlace(Rk), this._inertialPanning.addInPlace(bk), this._zoomToMouseRadiusOffset += kk * Rk
        }
        _zeroIfClose(kk) {
          Math.abs(kk.x) < Jk.c && (kk.x = 0), Math.abs(kk.y) < Jk.c && (kk.y = 0), Math.abs(kk.z) < Jk.c && (kk.z = 0)
        }
      }, (() => {
        const Xk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
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
          metadata: Xk
        }, wk, dk), (0, Rk.j)(null, null, Bk, {
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
          metadata: Xk
        }, Vk, Ak), (0, Rk.j)(null, null, ak, {
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
          metadata: Xk
        }, ek, yk), Xk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xk
        })
      })(), kk
    })();
    ik.d.ArcRotateCameraMouseWheelInput = Mk;
    var gk, Uk, ck = Bk(39296);
    class Gk extends ik.h {
      constructor(kk) {
        super(kk)
      }
      addMouseWheel() {
        return this.add(new Mk), this
      }
      addPointers() {
        return this.add(new Ek), this
      }
      addKeyboard() {
        return this.add(new Nk), this
      }
    }(gk = Gk.prototype).addVRDeviceOrientation ?? (gk.addVRDeviceOrientation = (0, ck.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Uk = Gk.prototype).addGamepad ?? (Uk.addGamepad = (0, ck.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var Tk = Bk(36798),
      rk = Bk(39641),
      Dk = Bk(39647);
    class zk extends rk.b {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk), this.input = new Dk.e({
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

    function Pk(kk, Fk) {
      return isNaN(kk) ? Fk : kk
    }
    let hk = (() => {
        var kk;
        let Fk, Bk, wk, sk, Vk, ek, yk, ik, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk, ck, Tk, rk, Dk, hk, qk, Ck, Zk, pk, Kk, xk = vk.d,
          jk = [],
          lk = [],
          nk = [],
          Ik = [],
          Qk = [],
          kF = [],
          FF = [],
          BF = [],
          RF = [],
          tF = [],
          aF = [],
          XF = [],
          bF = [],
          wF = [],
          dF = [],
          sF = [],
          VF = [],
          JF = [],
          AF = [],
          eF = [],
          yF = [],
          fF = [],
          mF = [],
          WF = [],
          vF = [],
          iF = [],
          YF = [],
          oF = [],
          LF = [],
          OF = [],
          EF = [],
          SF = [],
          NF = [],
          HF = [],
          uF = [],
          MF = [],
          gF = [],
          UF = [],
          cF = [],
          GF = [],
          TF = [],
          rF = [],
          DF = [],
          zF = [],
          PF = [],
          hF = [],
          qF = [];
        return kk = class extends xk {
          get target() {
            return this.VK
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
            this._upToYMatrix || (this._yToUpMatrix = new Xk.c, this._upToYMatrix = new Xk.c, this._upVector = Xk.s.Zero()), kk.normalize(), this._upVector.sBk(kk), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Xk.c.RotationAlignToRef(Xk.s.UpReadOnly, this._upVector, this._yToUpMatrix), Xk.c.RotationAlignToRef(this._upVector, Xk.s.UpReadOnly, this._upToYMatrix)
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
              Bk = Fk.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !kk && Bk ? Fk.inputMap.splice(Fk.inputMap.indexOf(Bk), 1) : kk && !Bk && Fk.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Rk = Fk.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !kk && Rk ? Fk.inputMap.splice(Fk.inputMap.indexOf(Rk), 1) : kk && !Rk && Fk.addEntry({
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
            kk !== this.useBouncingBehavior && (kk ? (this._bouncingBehavior = new fk, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(kk) {
            kk !== this.useFramingBehavior && (kk ? (this._framingBehavior = new mk, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(kk) {
            kk !== this.useAutoRotationBehavior && (kk ? (this._autoRotationBehavior = new Ak, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(kk, Fk, Bk, tk, bk, wk) {
            var dk;
            let sk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(kk, Xk.s.Zero(), wk, sk), dk = this, this.alpha = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, void 0)), this.beta = ((0, Rk.l)(this, nk), (0, Rk.l)(this, Ik, void 0)), this.radius = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, void 0)), this.VK = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, void 0)), this._targetHost = ((0, Rk.l)(this, aF), (0, Rk.l)(this, XF, void 0)), this._upToYMatrix = (0, Rk.l)(this, bF), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Rk.l)(this, wF, null), this.upperAlphaLimit = ((0, Rk.l)(this, dF), (0, Rk.l)(this, sF, null)), this.lowerBetaLimit = ((0, Rk.l)(this, VF), (0, Rk.l)(this, JF, .01)), this.upperBetaLimit = ((0, Rk.l)(this, AF), (0, Rk.l)(this, eF, Math.PI - .01)), this.lowerRadiusLimit = ((0, Rk.l)(this, yF), (0, Rk.l)(this, fF, null)), this.upperRadiusLimit = ((0, Rk.l)(this, mF), (0, Rk.l)(this, WF, null)), this.lowerTargetYLimit = ((0, Rk.l)(this, vF), (0, Rk.l)(this, iF, -1 / 0)), this.inertialPanningX = ((0, Rk.l)(this, YF), (0, Rk.l)(this, oF, 0)), this.inertialPanningY = ((0, Rk.l)(this, LF), (0, Rk.l)(this, OF, 0)), this.pinchToPanMaxDistance = ((0, Rk.l)(this, EF), (0, Rk.l)(this, SF, 20)), this.panningDistanceLimit = ((0, Rk.l)(this, NF), (0, Rk.l)(this, HF, null)), this.panningOriginTarget = ((0, Rk.l)(this, uF), (0, Rk.l)(this, MF, Xk.s.Zero())), this._panningInertia = ((0, Rk.l)(this, gF), .9), this._inertia = .9, this.zoomOnFactor = (0, Rk.l)(this, UF, 1), this.targetScreenOffset = ((0, Rk.l)(this, cF), (0, Rk.l)(this, GF, Xk.p.Zero())), this.allowUpsideDown = ((0, Rk.l)(this, TF), (0, Rk.l)(this, rF, !0)), this.useInputToRestoreState = ((0, Rk.l)(this, DF), (0, Rk.l)(this, zF, !0)), this.restoreStateInterpolationFactor = ((0, Rk.l)(this, PF), (0, Rk.l)(this, hF, 0)), this._currentInterpolationFactor = ((0, Rk.l)(this, qF), 0), this._viewMatrix = new Xk.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Xk.s(1, 1, 0), this._transformedDirection = new Xk.s, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new ak.e, this.checkCollisions = !1, this.collisionRadius = new Xk.s(.5, .5, .5), this._previousPosition = Xk.s.Zero(), this._collisionVelocity = Xk.s.Zero(), this._newPosition = Xk.s.Zero(), this._computationVector = Xk.s.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Xk.s(NaN, NaN, NaN), this._goalTargetScreenOffset = new Xk.p(NaN, NaN), this._onCollisionPositionChange = function(kk, Fk) {
              let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Bk ? (dk.setPosition(Fk), dk.gJ && dk.gJ(Bk)) : dk._previousPosition.sBk(dk._position);
              const Rk = Math.cos(dk.alpha),
                tk = Math.sin(dk.alpha),
                ak = Math.cos(dk.beta);
              let Xk = Math.sin(dk.beta);
              0 === Xk && (Xk = 1e-4);
              const bk = dk._getTargetPosition();
              dk._computationVector.E1(dk.radius * Rk * Xk, dk.radius * ak, dk.radius * tk * Xk), bk.addToRef(dk._computationVector, dk._newPosition), dk._position.sBk(dk._newPosition);
              let wk = dk.upVector;
              dk.allowUpsideDown && dk.beta < 0 && (wk = wk.clone(), wk = wk.bt()), dk._computeViewMatrix(dk._position, bk, wk), dk._viewMatrix.addAtIndex(12, dk.targetScreenOffset.x), dk._viewMatrix.addAtIndex(13, dk.targetScreenOffset.y), dk._collisionTriggered = !1
            }, this.VK = Xk.s.Zero(), bk && this.setTarget(bk), this.alpha = Fk, this.beta = Bk, this.radius = tk, this.getViewMatrix(), this.inputs = new Gk(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new zk(this.XN(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.VK = new Xk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Xk.p.Zero()
          }
          _updateCache(kk) {
            kk || super._updateCache(), this._cache.VK.sBk(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.sBk(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const kk = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? kk.addToRef(this._targetBoundingCenter, this.VK) : this.VK.sBk(kk)
            }
            const kk = this._getLockedTargetPosition();
            return kk || this.VK
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Jk.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              ak = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ak ? this._currentInterpolationFactor = ak : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Pk(kk, this._goalAlpha), this._goalBeta = Pk(Fk, this._goalBeta), this._goalRadius = Pk(Bk, this._goalRadius), this._goalTarget.set(Pk(Rk.x, this._goalTarget.x), Pk(Rk.y, this._goalTarget.y), Pk(Rk.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Pk(tk.x, this._goalTargetScreenOffset.x), Pk(tk.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, bk.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, bk.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, bk.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, bk.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.VK.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(kk, Fk) {
            let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const tk = arguments;
            Fk = Yk.h.BackCompatCameraNoPreventDefault(tk), this._useCtrlForPanning = Bk, this._panningMouseButton = Rk, "boolean" === typeof tk[0] && (tk.length > 1 && (this._useCtrlForPanning = tk[1]), tk.length > 2 && (this._panningMouseButton = tk[2])), this.inputs.attachElement(Fk), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(kk, Fk, Bk) {
            const Rk = this.invertRotation ? -1 : 1;
            let tk = kk * this._calculateHandednessMultiplier();
            this.beta < 0 && (tk *= -1), this.alpha += tk * Rk, this.beta += Fk * Rk, this.radius -= Bk
          }
          _applyPanDelta(kk, Fk) {
            const Bk = Xk.l.Qe[0].E1(kk, Fk, Fk);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Bk.multiplyInPlace(this.panningAxis), Xk.s.TransformNormalToRef(Bk, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const kk = this.upVector,
                Fk = Xk.s.CrossToRef(this._transformedDirection, kk, this._transformedDirection);
              Xk.s.CrossToRef(kk, Fk, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.VK);
                Xk.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.VK.sBk(this._transformedDirection)
              } else {
                if (this.parent) {
                  const kk = Xk.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(kk), kk.transposeToRef(kk), Xk.s.TransformCoordinatesToRef(this._transformedDirection, kk, this._transformedDirection)
                }
                this.VK.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let kk = !1;
            this.movement.computeCurrentFrameDeltas();
            const Fk = this.movement.rotationDeltaCurrentFrame,
              Bk = this.movement.zoomDeltaCurrentFrame,
              Rk = this.movement.panDeltaCurrentFrame;
            if (0 === Fk.x && 0 === Fk.y && 0 === Bk && 0 === Rk.x && 0 === Rk.y || (kk = !0, 0 === Fk.x && 0 === Fk.y && 0 === Bk || this._applyRotationAndZoomDelta(Fk.x, Fk.y, Bk), 0 === Rk.x && 0 === Rk.y || this._applyPanDelta(Rk.x, Rk.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), kk = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Fk = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Fk && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Fk && (this.inertialPanningY = 0), kk = !0
            }
            if (kk) this.stopInterpolation();
            else if (this._isInterpolating) {
              let kk = !1;
              const Fk = this._scene.ne().getDeltaTime() / 1e3,
                Bk = 1 - Math.pow(2, -Fk / this._currentInterpolationFactor),
                Rk = Pk(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Fk = Xk.l.Qe[0].set(Pk(this._goalTarget.x, this.VK.x), Pk(this._goalTarget.y, this.VK.y), Pk(this._goalTarget.z, this.VK.z));
                Xk.s.LerpToRef(this.target, Fk, Bk, this.VK), 10 * Xk.s.Distance(this.target, Fk) / Rk < Jk.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.sBk(Fk), this.setTarget(this.target, !1, !0, !0)) : kk = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Fk = Xk.e.RotationAlphaBetaGammaToRef(Pk(this._goalAlpha, this.alpha), Pk(this._goalBeta, this.beta), 0, Xk.l.Quaternion[0]),
                  Rk = Xk.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Xk.l.Quaternion[1]),
                  tk = Xk.e.SlerpToRef(Rk, Fk, Bk, Xk.l.Quaternion[2]);
                tk.normalize();
                const ak = tk.toAlphaBetaGammaToRef(Xk.l.Qe[0]);
                if (this.alpha = ak.x, this.beta = ak.y, tk.isApprox(Fk, Jk.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const kk = Fk.toAlphaBetaGammaToRef(Xk.l.Qe[0]);
                  this.alpha = kk.x, this.beta = kk.y
                } else kk = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Rk - this.radius) * Bk, Math.abs(Rk / this.radius - 1) < Jk.c ? (this._goalRadius = NaN, this.radius = Rk) : kk = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Fk = Xk.l.Vector2[0].set(Pk(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Pk(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Xk.p.LerpToRef(this.targetScreenOffset, Fk, Bk, this.targetScreenOffset), Xk.p.Distance(this.targetScreenOffset, Fk) < Jk.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.sBk(Fk)) : kk = !0
              }
              this._isInterpolating = kk
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xk.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const kk = this.alpha;
            var Fk, Bk;
            this.alpha = function(kk) {
              let Fk = Math.PI / 2;
              return 0 === kk.x && 0 === kk.z || (Fk = Math.acos(kk.x / Math.sqrt(Math.pow(kk.x, 2) + Math.pow(kk.z, 2)))), kk.z < 0 && (Fk = 2 * Math.PI - Fk), Fk
            }(this._computationVector), this.beta = (Fk = this._computationVector.y, Bk = this.radius, Math.acos(Fk / Bk));
            const Rk = Math.round((kk - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Rk * Math.PI, this._checkLimits()
          }
          setPosition(kk) {
            this._position.equals(kk) || (this._position.sBk(kk), this.rebuildAnglesAndRadius())
          }
          setTarget(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Rk = this.overrideCloneAlphaBetaRadius ?? Rk, kk.computeWorldMatrix) Fk && kk.ZH ? this._targetBoundingCenter = kk.ZH().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, kk.computeWorldMatrix(), this._targetHost = kk, this.VK = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Fk = kk,
                Rk = this._getTargetPosition();
              if (Rk && !Bk && Rk.equals(Fk)) return;
              this._targetHost = null, this.VK = Fk, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Rk || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const kk = Math.cos(this.alpha),
              Fk = Math.sin(this.alpha),
              Bk = Math.cos(this.beta);
            let Rk = Math.sin(this.beta);
            0 === Rk && (Rk = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const tk = this._getTargetPosition();
            if (this._computationVector.E1(this.radius * kk * Rk, this.radius * Bk, this.radius * Fk * Rk), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xk.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), tk.addToRef(this._computationVector, this._newPosition), this.XN().collisionsEnabled && this.checkCollisions) {
              const kk = this.XN().collisionCoordinator;
              this._collider || (this._collider = kk.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, kk.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.sBk(this._newPosition);
              let kk = this.upVector;
              this.allowUpsideDown && Rk < 0 && (kk = kk.bt()), this._computeViewMatrix(this._position, tk, kk), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.sBk(tk), this._viewMatrix
          }
          zoomOn(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            kk = kk || this.XN().meshes;
            const Bk = dk.b.MinMax(kk);
            let Rk = this._calculateLowerRadiusFromModelBoundingSphere(Bk.min, Bk.max);
            if (Rk = Math.max(Math.min(Rk, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Rk * this.zoomOnFactor, this.mode === Wk.c.ORTHOGRAPHIC_CAMERA) {
              const kk = this.XN().ne().getAspectRatio(this),
                Fk = Rk * this.zoomOnFactor / 2;
              this.orthoLeft = -Fk * kk, this.orthoRight = Fk * kk, this.orthoBottom = -Fk, this.orthoTop = Fk
            }
            this.focusOn({
              min: Bk.min,
              max: Bk.max,
              distance: Rk
            }, Fk)
          }
          focusOn(kk) {
            let Fk, Bk, Rk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === kk.min) {
              const Rk = kk || this.XN().meshes;
              Fk = dk.b.MinMax(Rk), Bk = Xk.s.Distance(Fk.min, Fk.max)
            } else {
              Fk = kk, Bk = kk.distance
            }
            this.VK = dk.b.Center(Fk), Rk || (this.maxZ = 2 * Bk)
          }
          createRigCamera(Fk, Bk) {
            let Rk = 0;
            switch (this.cameraRigMode) {
              case Wk.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Wk.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Wk.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Wk.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Wk.c.RIG_MODE_VR:
                Rk = this._cameraRigParams.stereoHalfAngle * (0 === Bk ? 1 : -1);
                break;
              case Wk.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Rk = this._cameraRigParams.stereoHalfAngle * (0 === Bk ? -1 : 1)
            }
            const tk = new kk(Fk, this.alpha + Rk, this.beta, this.radius, this.VK, this.XN());
            return tk._cameraRigParams = {}, tk.isRigCamera = !0, tk.rigParent = this, tk.upVector = this.upVector, tk.mode = this.mode, tk.orthoLeft = this.orthoLeft, tk.orthoRight = this.orthoRight, tk.orthoBottom = this.orthoBottom, tk.orthoTop = this.orthoTop, tk
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              Fk = this._rigCameras[1];
            switch (kk.beta = Fk.beta = this.beta, this.cameraRigMode) {
              case Wk.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Wk.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Wk.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Wk.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Wk.c.RIG_MODE_VR:
                kk.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Fk.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Wk.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                kk.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Fk.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Rk = Xk.s.Distance(kk, Fk),
              tk = this.XN().ne().getAspectRatio(this),
              ak = Math.tan(this.fov / 2),
              bk = ak * tk,
              wk = .5 * Rk * Bk,
              dk = wk * Math.sqrt(1 + 1 / (bk * bk)),
              sk = wk * Math.sqrt(1 + 1 / (ak * ak));
            return Math.max(dk, sk)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(xk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], wk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.K)("target")], ek = [(0, tk.w)("targetHost")], yk = [(0, tk.M)()], ik = [(0, tk.M)()], Lk = [(0, tk.M)()], Ok = [(0, tk.M)()], Ek = [(0, tk.M)()], Sk = [(0, tk.M)()], Nk = [(0, tk.M)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], gk = [(0, tk.M)()], Uk = [(0, tk.M)()], ck = [(0, tk.M)()], Tk = [(0, tk.M)()], rk = [(0, tk.K)()], Dk = [(0, tk.M)()], hk = [(0, tk.M)()], qk = [(0, tk.M)()], Ck = [(0, tk.H)()], Zk = [(0, tk.M)()], pk = [(0, tk.M)()], Kk = [(0, tk.M)()], (0, Rk.j)(kk, null, yk, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialAlphaOffset" in kk,
              get: kk => kk.inertialAlphaOffset
            },
            metadata: ak
          }, null, jk), (0, Rk.j)(kk, null, ik, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialBetaOffset" in kk,
              get: kk => kk.inertialBetaOffset
            },
            metadata: ak
          }, null, jk), (0, Rk.j)(kk, null, Lk, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialRadiusOffset" in kk,
              get: kk => kk.inertialRadiusOffset
            },
            metadata: ak
          }, null, jk), (0, Rk.j)(kk, null, Dk, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningInertia" in kk,
              get: kk => kk.panningInertia
            },
            metadata: ak
          }, null, jk), (0, Rk.j)(kk, null, hk, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: kk => "zoomToMouseLocation" in kk,
              get: kk => kk.zoomToMouseLocation
            },
            metadata: ak
          }, null, jk), (0, Rk.j)(null, null, Fk, {
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
            metadata: ak
          }, lk, nk), (0, Rk.j)(null, null, Bk, {
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
            metadata: ak
          }, Ik, Qk), (0, Rk.j)(null, null, wk, {
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
            metadata: ak
          }, kF, FF), (0, Rk.j)(null, null, sk, {
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
            metadata: ak
          }, BF, RF), (0, Rk.j)(null, null, Vk, {
            kind: "field",
            name: "VK",
            static: !1,
            private: !1,
            access: {
              has: kk => "VK" in kk,
              get: kk => kk.VK,
              set: (kk, Fk) => {
                kk.VK = Fk
              }
            },
            metadata: ak
          }, tF, aF), (0, Rk.j)(null, null, ek, {
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
            metadata: ak
          }, XF, bF), (0, Rk.j)(null, null, Ok, {
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
            metadata: ak
          }, wF, dF), (0, Rk.j)(null, null, Ek, {
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
            metadata: ak
          }, sF, VF), (0, Rk.j)(null, null, Sk, {
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
            metadata: ak
          }, JF, AF), (0, Rk.j)(null, null, Nk, {
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
            metadata: ak
          }, eF, yF), (0, Rk.j)(null, null, Hk, {
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
            metadata: ak
          }, fF, mF), (0, Rk.j)(null, null, uk, {
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
            metadata: ak
          }, WF, vF), (0, Rk.j)(null, null, Mk, {
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
            metadata: ak
          }, iF, YF), (0, Rk.j)(null, null, gk, {
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
            metadata: ak
          }, oF, LF), (0, Rk.j)(null, null, Uk, {
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
            metadata: ak
          }, OF, EF), (0, Rk.j)(null, null, ck, {
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
            metadata: ak
          }, SF, NF), (0, Rk.j)(null, null, Tk, {
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
            metadata: ak
          }, HF, uF), (0, Rk.j)(null, null, rk, {
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
            metadata: ak
          }, MF, gF), (0, Rk.j)(null, null, qk, {
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
            metadata: ak
          }, UF, cF), (0, Rk.j)(null, null, Ck, {
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
            metadata: ak
          }, GF, TF), (0, Rk.j)(null, null, Zk, {
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
            metadata: ak
          }, rF, DF), (0, Rk.j)(null, null, pk, {
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
            metadata: ak
          }, zF, PF), (0, Rk.j)(null, null, Kk, {
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
            metadata: ak
          }, hF, qF), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      qk = !1;
    qk || (qk = !0, wk.b.AddNodeConstructor("ArcRotateCamera", ((kk, Fk) => () => new hk(kk, 0, 0, 1, Xk.s.Zero(), Fk))), (0, Tk.d)("BABYLON.ArcRotateCamera", hk))
  },
  39659: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.c
    });
    var Rk = Bk(39665);
    (0, Rk.d)()
  },
  39665: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      d: () => Jk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(36917),
      bk = Bk(39668),
      wk = Bk(39628),
      dk = Bk(36798);
    let sk = (() => {
        var kk;
        let Fk, Bk, wk = bk.d,
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        return kk = class extends wk {
          constructor(kk, Fk, Bk, tk) {
            super(kk, Bk, tk), this.groundColor = (0, Rk.l)(this, dk, new Xk.e(0, 0, 0)), this.direction = ((0, Rk.l)(this, sk), (0, Rk.l)(this, Vk, void 0)), (0, Rk.l)(this, Jk), this.direction = Fk || ak.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ak.s.Normalize(kk.subtract(ak.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Bk.x, Bk.y, Bk.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return kk.setFloat3(Fk, Bk.x, Bk.y, Bk.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ak.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.l)()], Bk = [(0, tk.K)()], (0, Rk.j)(null, null, Fk, {
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
            metadata: ak
          }, dk, sk), (0, Rk.j)(null, null, Bk, {
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
            metadata: ak
          }, Vk, Jk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      Vk = !1;

    function Jk() {
      Vk || (Vk = !0, wk.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new sk(kk, ak.s.Zero(), Fk))), (0, dk.d)("BABYLON.HemisphericLight", sk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
export const id = 256;
export const ids = [256];
export const modules = {
  40673: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => tk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36726),
      bk = ik(36698),
      rk = ik(36729),
      Pk = ik(39787),
      mk = ik(39997),
      Mk = ik(39742),
      Kk = ik(39470),
      xk = ik(36703);
    class nk {
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
        const ek = this._attachedCamera.XF();
        this._onPrePointerObservableObserver = ek.onPrePointerObservable.add((kk => {
          kk.type !== Mk.c.POINTERDOWN ? kk.type === Mk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const kk = Kk.d.Now;
          let ek = 0;
          null != this._lastFrameTime && (ek = kk - this._lastFrameTime), this._lastFrameTime = kk, this._applyUserInteraction();
          const ik = kk - this._lastInteractionTime - this._idleRotationWaitTime,
            Dk = Math.max(Math.min(ik / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Dk, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ek / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.XF();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(kk) {
        this._lastInteractionTime = kk ?? Kk.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < xk.d
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Kk.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ik(40679);
    class Uk {
      constructor() {
        this._easingMode = Uk.EASINGMODE_EASEIN
      }
      setEasingMode(kk) {
        const ek = Math.min(Math.max(kk, 0), 2);
        this._easingMode = ek
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(kk) {
        throw new Error("You must implement this method")
      }
      ease(kk) {
        switch (this._easingMode) {
          case Uk.EASINGMODE_EASEIN:
            return this.easeInCore(kk);
          case Uk.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - kk)
        }
        return kk >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - kk))) + .5 : .5 * this.easeInCore(2 * kk)
      }
    }
    Uk.EASINGMODE_EASEIN = 0, Uk.EASINGMODE_EASEOUT = 1, Uk.EASINGMODE_EASEINOUT = 2;
    var Hk = ik(40684);
    class wk {
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
        const ek = this._attachedCamera;
        ek && (kk ? this._onMeshTargetChangedObserver = ek.onMeshTargetChangedObservable.add((kk => {
          if (kk && (kk.computeWorldMatrix(!0), kk.hq)) {
            const ek = kk.hq().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * ek, this.upperRadiusTransitionRange = .05 * ek
          }
        })) : this._onMeshTargetChangedObserver && ek.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (wk.EasingFunction.setEasingMode(wk.EasingMode), this._radiusBounceTransition = Hk.b.CreateAnimation("radius", Hk.b.ANIMATIONTYPE_FLOAT, 60, wk.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const ek = Hk.b.TransitionTo("radius", this._attachedCamera.radius + kk, this._attachedCamera, this._attachedCamera.XF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        ek && this._animatables.push(ek)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    wk.EasingFunction = new class extends Uk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = kk
      }
      easeInCore(kk) {
        const ek = Math.max(0, this.amplitude);
        return Math.pow(kk, 3) - kk * ek * Math.sin(3.141592653589793 * kk)
      }
    }(.3), wk.EasingMode = Uk.EASINGMODE_EASEOUT;
    class lk {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Sk.c, this._mode = lk.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const ek = this._attachedCamera.XF();
        lk.EasingFunction.setEasingMode(lk.EasingMode), this._onPrePointerObservableObserver = ek.onPrePointerObservable.add((kk => {
          kk.type !== Mk.c.POINTERDOWN ? kk.type === Mk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = kk.onMeshTargetChangedObservable.add((kk => {
          kk && kk.hq && this.zoomOnMesh(kk, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const kk = this._attachedCamera.XF();
        this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Dk = kk.hq().boundingBox;
        this.zoomOnBoundingInfo(Dk.minimumWorld, Dk.maximumWorld, ek, ik)
      }
      zoomOnMeshHierarchy(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        kk.computeWorldMatrix(!0);
        const Dk = kk.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Dk.min, Dk.max, ek, ik)
      }
      zoomOnMeshesHierarchy(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Dk = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          fk = new bk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Sk = 0; Sk < kk.length; Sk++) {
          const ek = kk[Sk].getHierarchyBoundingVectors(!0);
          bk.o.CheckExtends(ek.min, Dk, fk), bk.o.CheckExtends(ek.max, Dk, fk)
        }
        this.zoomOnBoundingInfo(Dk, fk, ek, ik)
      }
      zoomOnBoundingInfo(kk, ek) {
        let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Sk = kk.y,
          rk = Sk + (ek.y - Sk) * this._positionScale,
          Pk = ek.subtract(kk).scale(.5);
        if (!isFinite(rk)) return !1;
        if (Dk) ik = new bk.o(0, rk, 0);
        else {
          const ek = kk.add(Pk);
          ik = new bk.o(ek.x, rk, ek.z)
        }
        this._vectorTransition || (this._vectorTransition = Hk.b.CreateAnimation("target", Hk.b.ANIMATIONTYPE_VECTOR3, 60, lk.EasingFunction)), this._betaIsAnimating = !0;
        let mk = Hk.b.TransitionTo("target", ik, this._attachedCamera, this._attachedCamera.XF(), 60, this._vectorTransition, this._framingTime);
        mk && this._animatables.push(mk);
        let Mk = 0;
        if (this._mode === lk.FitFrustumSidesMode) {
          const ik = this._calculateLowerRadiusFromModelBoundingSphere(kk, ek);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Pk.length() + this._attachedCamera.minZ), Mk = ik
        } else this._mode === lk.IgnoreBoundsSizeMode && (Mk = this._calculateLowerRadiusFromModelBoundingSphere(kk, ek), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ik = ek.subtract(kk).length();
          this._attachedCamera.panningSensibility = 5e3 / ik, this._attachedCamera.wheelPrecision = 100 / Mk
        }
        return this._radiusTransition || (this._radiusTransition = Hk.b.CreateAnimation("radius", Hk.b.ANIMATIONTYPE_FLOAT, 60, lk.EasingFunction)), mk = Hk.b.TransitionTo("radius", Mk, this._attachedCamera, this._attachedCamera.XF(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), fk && fk(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), mk && this._animatables.push(mk), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(kk, ek) {
        const ik = this._attachedCamera;
        if (!ik) return 0;
        let Dk = ik._calculateLowerRadiusFromModelBoundingSphere(kk, ek, this._radiusScale);
        return ik.lowerRadiusLimit && this._mode === lk.IgnoreBoundsSizeMode && (Dk = Dk < ik.lowerRadiusLimit ? ik.lowerRadiusLimit : Dk), ik.upperRadiusLimit && (Dk = Dk > ik.upperRadiusLimit ? ik.upperRadiusLimit : Dk), Dk
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const kk = Kk.d.Now - this._lastInteractionTime,
          ek = .5 * Math.PI - this._defaultElevation,
          ik = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ik && kk >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Hk.b.CreateAnimation("beta", Hk.b.ANIMATIONTYPE_FLOAT, 60, lk.EasingFunction));
          const kk = Hk.b.TransitionTo("beta", ek, this._attachedCamera, this._attachedCamera.XF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          kk && this._animatables.push(kk)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Kk.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    lk.EasingFunction = new class extends Uk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = kk
      }
      easeInCore(kk) {
        return this.exponent <= 0 ? kk : (Math.exp(this.exponent * kk) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, lk.EasingMode = Uk.EASINGMODE_EASEINOUT, lk.IgnoreBoundsSizeMode = 0, lk.FitFrustumSidesMode = 1;
    var pk = ik(39782),
      yk = ik(39778),
      Yk = ik(39804),
      Lk = ik(39662);
    let Ck = (() => {
        var kk;
        let ek, ik = [],
          Sk = [];
        return kk = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Dk.e)(this, ik, [0, 1, 2]), this._pointerInput = (0, Dk.e)(this, Sk)
          }
          attachControl(kk) {
            kk = Lk.i.BackCompatCameraNoPreventDefault(arguments);
            const ek = this.camera.JU(),
              ik = ek.getInputElement();
            let Dk = 0,
              fk = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Sk => {
              const bk = Sk.event,
                rk = "touch" === bk.pointerType;
              if (Sk.type !== Mk.c.POINTERMOVE && -1 === this.buttons.indexOf(bk.button)) return;
              const Pk = bk.target;
              if (this._altKey = bk.altKey, this._ctrlKey = bk.ctrlKey, this._metaKey = bk.metaKey, this._shiftKey = bk.shiftKey, this._buttonsPressed = bk.buttons, ek.isPointerLock) {
                const kk = bk.movementX,
                  ek = bk.movementY;
                this.onTouch(null, kk, ek), this._pointA = null, this._pointB = null
              } else {
                if (Sk.type !== Mk.c.POINTERDOWN && Sk.type !== Mk.c.POINTERDOUBLETAP && rk && this._pointA?.pointerId !== bk.pointerId && this._pointB?.pointerId !== bk.pointerId) return;
                if (Sk.type !== Mk.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !rk)
                  if (Sk.type === Mk.c.POINTERDOUBLETAP) this.onDoubleTap(bk.pointerType, bk);
                  else if (Sk.type !== Mk.c.POINTERUP || this._currentMousePointerIdDown !== bk.pointerId && !rk) {
                  if (Sk.type === Mk.c.POINTERMOVE)
                    if (kk || bk.preventDefault(), this._pointA && null === this._pointB) {
                      const kk = bk.clientX - this._pointA.x,
                        ek = bk.clientY - this._pointA.y;
                      this._pointA.x = bk.clientX, this._pointA.y = bk.clientY, this.onTouch(this._pointA, kk, ek)
                    } else if (this._pointA && this._pointB) {
                    const kk = this._pointA.pointerId === bk.pointerId ? this._pointA : this._pointB;
                    kk.x = bk.clientX, kk.y = bk.clientY;
                    const ek = this._pointA.x - this._pointB.x,
                      ik = this._pointA.y - this._pointB.y,
                      rk = ek * ek + ik * ik,
                      Pk = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: bk.pointerId,
                        type: Sk.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Dk, rk, fk, Pk), fk = Pk, Dk = rk
                  }
                } else {
                  try {
                    Pk?.releasePointerCapture(bk.pointerId)
                  } catch (mk) {}
                  rk || (this._pointB = null), ek._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == bk.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == bk.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Dk || fk) && (this.onMultiTouch(this._pointA, this._pointB, Dk, 0, fk, null), Dk = 0, fk = null), this._currentMousePointerIdDown = -1, this.onButtonUp(bk), kk || bk.preventDefault()
                } else {
                  try {
                    Pk?.setPointerCapture(bk.pointerId)
                  } catch (mk) {}
                  if (null === this._pointA) this._pointA = {
                    x: bk.clientX,
                    y: bk.clientY,
                    pointerId: bk.pointerId,
                    type: bk.pointerType,
                    button: bk.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: bk.clientX,
                      y: bk.clientY,
                      pointerId: bk.pointerId,
                      type: bk.pointerType,
                      button: bk.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || rk || (this._currentMousePointerIdDown = bk.pointerId), this.onButtonDown(bk), kk || (bk.preventDefault(), ik && ik.focus())
                }
              }
            }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, Mk.c.POINTERDOWN | Mk.c.POINTERUP | Mk.c.POINTERMOVE | Mk.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Dk = 0, fk = null, this.onLostFocus()
            }, this._contextMenuBind = kk => this.onContextMenu(kk), ik && ik.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Sk = this.camera.XF().JU().getHostWindow();
            Sk && Lk.i.RegisterTopRootEvents(Sk, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const kk = this.camera.XF().JU().getHostWindow();
              kk && Lk.i.UnregisterTopRootEvents(kk, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const kk = this.camera.XF().JU().getInputElement();
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
          onDoubleTap(kk, ek) {}
          onTouch(kk, ek, ik) {}
          onMultiTouch(kk, ek, ik, Dk, fk, Sk) {}
          onContextMenu(kk) {
            kk.preventDefault()
          }
          onButtonDown(kk) {}
          onButtonUp(kk) {}
          onLostFocus() {}
        }, (() => {
          const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ek = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: kk => "buttons" in kk,
              get: kk => kk.buttons,
              set: (kk, ek) => {
                kk.buttons = ek
              }
            },
            metadata: bk
          }, ik, Sk), bk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bk
          })
        })(), kk
      })(),
      Ak = (() => {
        var kk;
        let ek, ik, Sk, bk = Ck,
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        return kk = class extends bk {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Dk.e)(this, rk, !0), this.multiTouchPanning = ((0, Dk.e)(this, Pk), (0, Dk.e)(this, mk, !0)), this.multiTouchPanAndZoom = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, Kk, !0)), this._isPinching = ((0, Dk.e)(this, xk), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(kk, ek) {}
          _computeMultiTouchPanning(kk, ek) {}
          onMultiTouch(kk, ek, ik, Dk, fk, Sk) {
            0 === ik && null === fk || 0 === Dk && null === Sk || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ik, Dk), this._computeMultiTouchPanning(fk, Sk)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ik, Dk), this._isPinching = !0) : this._computeMultiTouchPanning(fk, Sk)) : this.multiTouchPanning ? this._computeMultiTouchPanning(fk, Sk) : this.pinchZoom && this._computePinchZoom(ik, Dk))
          }
          onButtonUp(kk) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(bk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchZoom" in kk,
              get: kk => kk.pinchZoom,
              set: (kk, ek) => {
                kk.pinchZoom = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: kk => "multiTouchPanning" in kk,
              get: kk => kk.multiTouchPanning,
              set: (kk, ek) => {
                kk.multiTouchPanning = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, Dk.d)(null, null, Sk, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "multiTouchPanAndZoom" in kk,
              get: kk => kk.multiTouchPanAndZoom,
              set: (kk, ek) => {
                kk.multiTouchPanAndZoom = ek
              }
            },
            metadata: nk
          }, Kk, xk), nk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          })
        })(), kk
      })(),
      jk = (() => {
        var kk;
        let ek, ik, Sk, bk, rk, Pk, mk, Mk = Ak,
          Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [],
          lk = [],
          pk = [],
          yk = [],
          Yk = [],
          Lk = [],
          Ck = [],
          jk = [],
          sk = [];
        return kk = class extends Mk {
          constructor() {
            super(...arguments), this.buttons = (0, Dk.e)(this, Kk, [0, 1, 2]), this.angularSensibilityX = ((0, Dk.e)(this, xk), (0, Dk.e)(this, nk, 1e3)), this.angularSensibilityY = ((0, Dk.e)(this, Uk), (0, Dk.e)(this, Hk, 1e3)), this.pinchPrecision = ((0, Dk.e)(this, wk), (0, Dk.e)(this, lk, 12)), this.pinchDeltaPercentage = ((0, Dk.e)(this, pk), (0, Dk.e)(this, yk, 0)), this.useNaturalPinchZoom = ((0, Dk.e)(this, Yk), (0, Dk.e)(this, Lk, !1)), this.panningSensibility = ((0, Dk.e)(this, Ck), (0, Dk.e)(this, jk, 1e3)), this.pinchInwards = ((0, Dk.e)(this, sk), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(kk, ek) {
            if (kk && ek) {
              const ik = ek.x - kk.x,
                Dk = ek.y - kk.y,
                fk = this.camera.movement.input.getEntry("pointer", "pan"),
                Sk = fk?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Sk && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ik * Sk, this.camera.movement.panAccumulatedPixels.y += Dk * Sk)
            }
          }
          _computePinchZoom(ek, ik) {
            const Dk = this.camera.radius || kk.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Dk * Math.sqrt(ek) / Math.sqrt(ik);
            else if (this.pinchDeltaPercentage) {
              const kk = .001 * (ik - ek) * Dk * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            } else {
              const kk = (ik - ek) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += kk
            }
          }
          onTouch(kk, ek, ik) {
            const Dk = this._activeEntry ?? (this.camera.JU().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Dk)
              if ("pan" === Dk.interaction) {
                const kk = Dk.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== kk && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ek * kk, this.camera.movement.panAccumulatedPixels.y += ik * kk)
              } else if ("rotate" === Dk.interaction) {
              const kk = Dk.xZ ?? Dk.sensitivity ?? 1 / this.angularSensibilityX,
                fk = Dk.HZ ?? Dk.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -ek * kk, this.camera.movement.rotationAccumulatedPixels.y += -ik * fk
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(kk, ek, ik, Dk, fk, Sk) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Dk) - Math.sqrt(ik)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(kk, ek, ik, Dk, fk, Sk)
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
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: kk => "buttons" in kk,
              get: kk => kk.buttons,
              set: (kk, ek) => {
                kk.buttons = ek
              }
            },
            metadata: Ak
          }, Kk, xk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: kk => "angularSensibilityX" in kk,
              get: kk => kk.angularSensibilityX,
              set: (kk, ek) => {
                kk.angularSensibilityX = ek
              }
            },
            metadata: Ak
          }, nk, Uk), (0, Dk.d)(null, null, Sk, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: kk => "angularSensibilityY" in kk,
              get: kk => kk.angularSensibilityY,
              set: (kk, ek) => {
                kk.angularSensibilityY = ek
              }
            },
            metadata: Ak
          }, Hk, wk), (0, Dk.d)(null, null, bk, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchPrecision" in kk,
              get: kk => kk.pinchPrecision,
              set: (kk, ek) => {
                kk.pinchPrecision = ek
              }
            },
            metadata: Ak
          }, lk, pk), (0, Dk.d)(null, null, rk, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchDeltaPercentage" in kk,
              get: kk => kk.pinchDeltaPercentage,
              set: (kk, ek) => {
                kk.pinchDeltaPercentage = ek
              }
            },
            metadata: Ak
          }, yk, Yk), (0, Dk.d)(null, null, Pk, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: kk => "useNaturalPinchZoom" in kk,
              get: kk => kk.useNaturalPinchZoom,
              set: (kk, ek) => {
                kk.useNaturalPinchZoom = ek
              }
            },
            metadata: Ak
          }, Lk, Ck), (0, Dk.d)(null, null, mk, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningSensibility" in kk,
              get: kk => kk.panningSensibility,
              set: (kk, ek) => {
                kk.panningSensibility = ek
              }
            },
            metadata: Ak
          }, jk, sk), Ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          })
        })(), kk.MinimumRadiusForPinch = .001, kk
      })();
    Yk.e.ArcRotateCameraPointersInput = jk;
    var sk = ik(39751);
    let dk = (() => {
      var kk;
      let ek, ik, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk = [],
        wk = [],
        lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Ck = [],
        Ak = [],
        jk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [];
      return kk = class {
        constructor() {
          this.camera = (0, Dk.e)(this, Hk), this.keysUp = (0, Dk.e)(this, wk, [38]), this.keysDown = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, [40])), this.keysLeft = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, [37])), this.keysRight = ((0, Dk.e)(this, Ck), (0, Dk.e)(this, Ak, [39])), this.keysReset = ((0, Dk.e)(this, jk), (0, Dk.e)(this, dk, [220])), this.keysZoomIn = ((0, Dk.e)(this, Vk), (0, Dk.e)(this, Fk, [187, 107])), this.keysZoomOut = ((0, Dk.e)(this, uk), (0, Dk.e)(this, qk, [189, 109])), this.panningSensibility = ((0, Dk.e)(this, Ik), (0, Dk.e)(this, zk, 50)), this.zoomingSensibility = ((0, Dk.e)(this, Qk), (0, Dk.e)(this, vk, 25)), this.angularSpeed = ((0, Dk.e)(this, Ek), (0, Dk.e)(this, hk, .01)), this._useAltToZoom = ((0, Dk.e)(this, ak), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new bk.l, this._panDirection = new bk.l
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
            ek = kk.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && ek ? kk.inputMap.splice(kk.inputMap.indexOf(ek), 1) : this._useAltToZoom && !ek && kk.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(kk) {
          kk = Lk.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XF(), this._engine = this._scene.JU(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ek => {
            const ik = ek.event;
            if (!ik.metaKey)
              if (ek.type === sk.b.KEYDOWN) {
                if (this._ctrlPressed = ik.ctrlKey, this._altPressed = ik.altKey, -1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysReset.indexOf(ik.keyCode) || -1 !== this.keysZoomIn.indexOf(ik.keyCode) || -1 !== this.keysZoomOut.indexOf(ik.keyCode)) {
                  -1 === this._keys.indexOf(ik.keyCode) && this._keys.push(ik.keyCode), ik.preventDefault && (kk || ik.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysReset.indexOf(ik.keyCode) || -1 !== this.keysZoomIn.indexOf(ik.keyCode) || -1 !== this.keysZoomOut.indexOf(ik.keyCode)) {
              const ek = this._keys.indexOf(ik.keyCode);
              ek >= 0 && this._keys.splice(ek, 1), ik.preventDefault && (kk || ik.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const kk = this.camera,
              ek = kk.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ik = this._rotateDirection.set(0, 0),
              Dk = this._panDirection.set(0, 0);
            let fk = 0,
              Sk = 0;
            for (let bk = 0; bk < this._keys.length; bk++) {
              const rk = this._keys[bk];
              if (this._keyboardConditions.key = rk, -1 === this.keysReset.indexOf(rk)) {
                const kk = ek.resolveInteraction("keyboard", this._keyboardConditions);
                if (kk)
                  if ("pan" === kk.interaction) Sk = Math.max(Sk, kk.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(rk) ? Dk.x -= 1 : -1 !== this.keysRight.indexOf(rk) ? Dk.x += 1 : -1 !== this.keysUp.indexOf(rk) ? Dk.y += 1 : -1 !== this.keysDown.indexOf(rk) && (Dk.y -= 1);
                  else if ("zoom" === kk.interaction) {
                  const ik = kk.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(rk) || -1 !== this.keysZoomIn.indexOf(rk) ? ek.handlers.zoom(ik) : -1 === this.keysDown.indexOf(rk) && -1 === this.keysZoomOut.indexOf(rk) || ek.handlers.zoom(-ik)
                } else "rotate" === kk.interaction && (fk = Math.max(fk, kk.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(rk) ? ik.x -= 1 : -1 !== this.keysRight.indexOf(rk) ? ik.x += 1 : -1 !== this.keysUp.indexOf(rk) ? ik.y -= 1 : -1 !== this.keysDown.indexOf(rk) && (ik.y += 1))
              } - 1 !== this.keysReset.indexOf(rk) && kk.useInputToRestoreState && kk.restoreState()
            }
            0 === ik.x && 0 === ik.y || (ik.normalize().scaleInPlace(fk), ek.handlers.rotate(ik.x, ik.y)), 0 === Dk.x && 0 === Dk.y || (Dk.normalize().scaleInPlace(Sk), ek.handlers.pan(Dk.x, Dk.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], (0, Dk.d)(kk, null, Uk, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAltToZoom" in kk,
            get: kk => kk.useAltToZoom
          },
          metadata: bk
        }, null, Hk), (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysUp" in kk,
            get: kk => kk.keysUp,
            set: (kk, ek) => {
              kk.keysUp = ek
            }
          },
          metadata: bk
        }, wk, lk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysDown" in kk,
            get: kk => kk.keysDown,
            set: (kk, ek) => {
              kk.keysDown = ek
            }
          },
          metadata: bk
        }, pk, yk), (0, Dk.d)(null, null, Sk, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysLeft" in kk,
            get: kk => kk.keysLeft,
            set: (kk, ek) => {
              kk.keysLeft = ek
            }
          },
          metadata: bk
        }, Yk, Ck), (0, Dk.d)(null, null, rk, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysRight" in kk,
            get: kk => kk.keysRight,
            set: (kk, ek) => {
              kk.keysRight = ek
            }
          },
          metadata: bk
        }, Ak, jk), (0, Dk.d)(null, null, Pk, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysReset" in kk,
            get: kk => kk.keysReset,
            set: (kk, ek) => {
              kk.keysReset = ek
            }
          },
          metadata: bk
        }, dk, Vk), (0, Dk.d)(null, null, mk, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysZoomIn" in kk,
            get: kk => kk.keysZoomIn,
            set: (kk, ek) => {
              kk.keysZoomIn = ek
            }
          },
          metadata: bk
        }, Fk, uk), (0, Dk.d)(null, null, Mk, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: kk => "keysZoomOut" in kk,
            get: kk => kk.keysZoomOut,
            set: (kk, ek) => {
              kk.keysZoomOut = ek
            }
          },
          metadata: bk
        }, qk, Ik), (0, Dk.d)(null, null, Kk, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "panningSensibility" in kk,
            get: kk => kk.panningSensibility,
            set: (kk, ek) => {
              kk.panningSensibility = ek
            }
          },
          metadata: bk
        }, zk, Qk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: kk => "zoomingSensibility" in kk,
            get: kk => kk.zoomingSensibility,
            set: (kk, ek) => {
              kk.zoomingSensibility = ek
            }
          },
          metadata: bk
        }, vk, Ek), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: kk => "angularSpeed" in kk,
            get: kk => kk.angularSpeed,
            set: (kk, ek) => {
              kk.angularSpeed = ek
            }
          },
          metadata: bk
        }, hk, ak), bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bk
        })
      })(), kk
    })();
    Yk.e.ArcRotateCameraKeyboardMoveInput = dk;
    var Vk = ik(37372),
      Fk = ik(39758);
    let uk = (() => {
      var kk;
      let ek, ik, Sk, Pk = [],
        mk = [],
        Kk = [],
        nk = [],
        Uk = [],
        Hk = [];
      return kk = class {
        constructor() {
          this.wheelPrecision = (0, Dk.e)(this, Pk, 3), this.zoomToMouseLocation = ((0, Dk.e)(this, mk), (0, Dk.e)(this, Kk, !1)), this.wheelDeltaPercentage = ((0, Dk.e)(this, nk), (0, Dk.e)(this, Uk, 0)), this.customComputeDeltaFromMouseWheel = ((0, Dk.e)(this, Hk), null), this._viewOffset = new bk.o(0, 0, 0), this._globalOffset = new bk.o(0, 0, 0), this._inertialPanning = bk.o.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(kk, ek) {
          let ik;
          const Dk = .01 * kk * this.wheelDeltaPercentage * ek;
          return ik = kk > 0 ? Dk / (1 + this.wheelDeltaPercentage) : Dk * (1 + this.wheelDeltaPercentage), ik
        }
        attachControl(kk) {
          kk = Lk.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ek => {
            if (ek.type !== Mk.c.POINTERWHEEL) return;
            const ik = ek.event;
            let Dk;
            const fk = ik.deltaMode === Fk.c.DOM_DELTA_LINE ? 40 : 1,
              Sk = -ik.deltaY * fk;
            if (this.customComputeDeltaFromMouseWheel) Dk = this.customComputeDeltaFromMouseWheel(Sk, this, ik);
            else if (this.wheelDeltaPercentage) {
              if (Dk = this._computeDeltaFromMouseWheelLegacyEvent(Sk, this.camera.radius), Dk > 0) {
                const kk = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let ek = this.camera.radius,
                  ik = kk + Dk;
                for (let Dk = 0; Dk < 20 && !(ek <= ik) && !(Math.abs(ik * this.camera.inertia) < .001); Dk++) ek -= ik, ik *= this.camera.inertia;
                ek = (0, rk.Clamp)(ek, 0, Number.MAX_VALUE), Dk = this._computeDeltaFromMouseWheelLegacyEvent(Sk, ek)
              }
            } else {
              const kk = this.camera.movement.input.getEntry("wheel", "zoom");
              Dk = Sk * (kk?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Dk && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Dk)) : this.camera.movement.zoomAccumulatedPixels += Dk), ik.preventDefault && (kk || ik.preventDefault())
          }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._wheel, Mk.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.A_(0)
        }
        detachControl() {
          this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const kk = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(kk.inertialAlphaOffset) + Math.abs(kk.inertialBetaOffset) + Math.abs(kk.inertialRadiusOffset)) {
            this._updateHitPlane(), kk.target.addInPlace(this._inertialPanning), kk.radius -= this._zoomToMouseRadiusOffset;
            const ek = kk.movement.getFrameIndependentDecay(kk.inertia);
            this._inertialPanning.scaleInPlace(ek), this._zoomToMouseRadiusOffset *= ek, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < xk.d && (this._zoomToMouseRadiusOffset = 0)
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
            ek = kk.target.subtract(kk.position);
          this._hitPlane = Vk.c.FromPositionAndNormal(kk.target, ek)
        }
        _getPosition() {
          const kk = this.camera,
            ek = kk.XF(),
            ik = ek.createPickingRay(ek.pointerX, ek.pointerY, bk.b.Identity(), kk, !1);
          0 === kk.targetScreenOffset.x && 0 === kk.targetScreenOffset.y || (this._viewOffset.set(kk.targetScreenOffset.x, kk.targetScreenOffset.y, 0), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), this._globalOffset = bk.o.TransformNormal(this._viewOffset, kk._cameraTransformMatrix), ik.origin.addInPlace(this._globalOffset));
          let Dk = 0;
          return this._hitPlane && (Dk = ik.intersectsPlane(this._hitPlane) ?? 0), ik.origin.addInPlace(ik.direction.scaleInPlace(Dk))
        }
        _zoomToMouse(kk) {
          const ek = this.camera,
            ik = 1 - ek.inertia,
            Dk = ek.movement.getFrameIndependentInputScale(ek.inertia);
          if (ek.lowerRadiusLimit) {
            const fk = ek.lowerRadiusLimit ?? 0;
            ek.radius - (this._zoomToMouseRadiusOffset + kk * Dk) / ik < fk && (kk = ((ek.radius - fk) * ik - this._zoomToMouseRadiusOffset) / Dk)
          }
          if (ek.upperRadiusLimit) {
            const fk = ek.upperRadiusLimit ?? 0;
            ek.radius - (this._zoomToMouseRadiusOffset + kk * Dk) / ik > fk && (kk = ((ek.radius - fk) * ik - this._zoomToMouseRadiusOffset) / Dk)
          }
          const fk = kk / ik / ek.radius,
            Sk = this._getPosition(),
            rk = bk.j.eH[6];
          Sk.subtractToRef(ek.target, rk), rk.scaleInPlace(fk), rk.scaleInPlace(ik), rk.scaleInPlace(Dk), this._inertialPanning.addInPlace(rk), this._zoomToMouseRadiusOffset += kk * Dk
        }
        _zeroIfClose(kk) {
          Math.abs(kk.x) < xk.d && (kk.x = 0), Math.abs(kk.y) < xk.d && (kk.y = 0), Math.abs(kk.z) < xk.d && (kk.z = 0)
        }
      }, (() => {
        const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelPrecision" in kk,
            get: kk => kk.wheelPrecision,
            set: (kk, ek) => {
              kk.wheelPrecision = ek
            }
          },
          metadata: bk
        }, Pk, mk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: kk => "zoomToMouseLocation" in kk,
            get: kk => kk.zoomToMouseLocation,
            set: (kk, ek) => {
              kk.zoomToMouseLocation = ek
            }
          },
          metadata: bk
        }, Kk, nk), (0, Dk.d)(null, null, Sk, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: kk => "wheelDeltaPercentage" in kk,
            get: kk => kk.wheelDeltaPercentage,
            set: (kk, ek) => {
              kk.wheelDeltaPercentage = ek
            }
          },
          metadata: bk
        }, Uk, Hk), bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bk
        })
      })(), kk
    })();
    Yk.e.ArcRotateCameraMouseWheelInput = uk;
    var qk, Ik, zk = ik(39447);
    class Qk extends Yk.i {
      constructor(kk) {
        super(kk)
      }
      addMouseWheel() {
        return this.add(new uk), this
      }
      addPointers() {
        return this.add(new jk), this
      }
      addKeyboard() {
        return this.add(new dk), this
      }
    }(qk = Qk.prototype).addVRDeviceOrientation ?? (qk.addVRDeviceOrientation = (0, zk.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Ik = Qk.prototype).addGamepad ?? (Ik.addGamepad = (0, zk.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var vk = ik(36734),
      Ek = ik(39792),
      hk = ik(39800);
    class ak extends Ek.e {
      constructor(kk, ek, ik) {
        super(kk, ek, ik), this.input = new hk.b({
          pan: (kk, ek) => {
            this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += ek
          },
          rotate: (kk, ek) => {
            this.rotationAccumulatedPixels.x += kk, this.rotationAccumulatedPixels.y += ek
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

    function Wk(kk, ek) {
      return isNaN(kk) ? ek : kk
    }
    let tk = (() => {
        var kk;
        let ek, ik, Pk, Mk, Kk, Uk, Hk, Yk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, vk, Ek, hk, tk, Xk, Bk, ck, Tk, Zk, Ok = yk.e,
          gk = [],
          Gk = [],
          Nk = [],
          Rk = [],
          Jk = [],
          ke = [],
          ee = [],
          ie = [],
          De = [],
          fe = [],
          Se = [],
          be = [],
          re = [],
          Pe = [],
          me = [],
          Me = [],
          Ke = [],
          xe = [],
          ne = [],
          Ue = [],
          He = [],
          we = [],
          le = [],
          pe = [],
          ye = [],
          Ye = [],
          Le = [],
          Ce = [],
          Ae = [],
          je = [],
          se = [],
          de = [],
          Ve = [],
          Fe = [],
          ue = [],
          qe = [],
          Ie = [],
          ze = [],
          Qe = [],
          ve = [],
          Ee = [],
          he = [],
          ae = [],
          We = [],
          te = [],
          Xe = [],
          Be = [];
        return kk = class extends Ok {
          get target() {
            return this.xR
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
            this._upToYMatrix || (this._yToUpMatrix = new bk.b, this._upToYMatrix = new bk.b, this._upVector = bk.o.Zero()), kk.normalize(), this._upVector.Fs(kk), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            bk.b.RotationAlignToRef(bk.o.UpReadOnly, this._upVector, this._yToUpMatrix), bk.b.RotationAlignToRef(this._upVector, bk.o.UpReadOnly, this._upToYMatrix)
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
            const ek = this.inputs.attached.pointers;
            ek && (ek.angularSensibilityX = kk)
          }
          get angularSensibilityY() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.angularSensibilityY : 0
          }
          set angularSensibilityY(kk) {
            const ek = this.inputs.attached.pointers;
            ek && (ek.angularSensibilityY = kk)
          }
          get pinchPrecision() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.pinchPrecision : 0
          }
          set pinchPrecision(kk) {
            const ek = this.inputs.attached.pointers;
            ek && (ek.pinchPrecision = kk)
          }
          get pinchDeltaPercentage() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(kk) {
            const ek = this.inputs.attached.pointers;
            ek && (ek.pinchDeltaPercentage = kk)
          }
          get useNaturalPinchZoom() {
            const kk = this.inputs.attached.pointers;
            return !!kk && kk.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(kk) {
            const ek = this.inputs.attached.pointers;
            ek && (ek.useNaturalPinchZoom = kk)
          }
          get panningSensibility() {
            const kk = this.inputs.attached.pointers;
            return kk ? kk.panningSensibility : 0
          }
          set panningSensibility(kk) {
            const ek = this.inputs.attached.pointers;
            ek && (ek.panningSensibility = kk)
          }
          get keysUp() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysUp : []
          }
          set keysUp(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysUp = kk)
          }
          get keysDown() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysDown : []
          }
          set keysDown(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysDown = kk)
          }
          get keysLeft() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysLeft : []
          }
          set keysLeft(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysLeft = kk)
          }
          get keysRight() {
            const kk = this.inputs.attached.keyboard;
            return kk ? kk.keysRight : []
          }
          set keysRight(kk) {
            const ek = this.inputs.attached.keyboard;
            ek && (ek.keysRight = kk)
          }
          get wheelPrecision() {
            const kk = this.inputs.attached.mousewheel;
            return kk ? kk.wheelPrecision : 0
          }
          set wheelPrecision(kk) {
            const ek = this.inputs.attached.mousewheel;
            ek && (ek.wheelPrecision = kk)
          }
          get zoomToMouseLocation() {
            const kk = this.inputs.attached.mousewheel;
            return !!kk && kk.zoomToMouseLocation
          }
          set zoomToMouseLocation(kk) {
            const ek = this.inputs.attached.mousewheel;
            ek && (ek.zoomToMouseLocation = kk)
          }
          get wheelDeltaPercentage() {
            const kk = this.inputs.attached.mousewheel;
            return kk ? kk.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(kk) {
            const ek = this.inputs.attached.mousewheel;
            ek && (ek.wheelDeltaPercentage = kk)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(kk) {
            this._useCtrlForPanningInternal = kk;
            const ek = this.movement.input,
              ik = ek.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !kk && ik ? ek.inputMap.splice(ek.inputMap.indexOf(ik), 1) : kk && !ik && ek.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Dk = ek.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !kk && Dk ? ek.inputMap.splice(ek.inputMap.indexOf(Dk), 1) : kk && !Dk && ek.addEntry({
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
            const ek = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            ek && (ek.button = kk)
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
            kk !== this.useBouncingBehavior && (kk ? (this._bouncingBehavior = new wk, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(kk) {
            kk !== this.useFramingBehavior && (kk ? (this._framingBehavior = new lk, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(kk) {
            kk !== this.useAutoRotationBehavior && (kk ? (this._autoRotationBehavior = new nk, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(kk, ek, ik, fk, rk, Pk) {
            var mk;
            let Mk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(kk, bk.o.Zero(), Pk, Mk), mk = this, this.alpha = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, void 0)), this.beta = ((0, Dk.e)(this, Nk), (0, Dk.e)(this, Rk, void 0)), this.radius = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, void 0)), this.xR = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, void 0)), this._targetHost = ((0, Dk.e)(this, Se), (0, Dk.e)(this, be, void 0)), this._upToYMatrix = (0, Dk.e)(this, re), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Dk.e)(this, Pe, null), this.upperAlphaLimit = ((0, Dk.e)(this, me), (0, Dk.e)(this, Me, null)), this.lowerBetaLimit = ((0, Dk.e)(this, Ke), (0, Dk.e)(this, xe, .01)), this.upperBetaLimit = ((0, Dk.e)(this, ne), (0, Dk.e)(this, Ue, Math.PI - .01)), this.lowerRadiusLimit = ((0, Dk.e)(this, He), (0, Dk.e)(this, we, null)), this.upperRadiusLimit = ((0, Dk.e)(this, le), (0, Dk.e)(this, pe, null)), this.lowerTargetYLimit = ((0, Dk.e)(this, ye), (0, Dk.e)(this, Ye, -1 / 0)), this.inertialPanningX = ((0, Dk.e)(this, Le), (0, Dk.e)(this, Ce, 0)), this.inertialPanningY = ((0, Dk.e)(this, Ae), (0, Dk.e)(this, je, 0)), this.pinchToPanMaxDistance = ((0, Dk.e)(this, se), (0, Dk.e)(this, de, 20)), this.panningDistanceLimit = ((0, Dk.e)(this, Ve), (0, Dk.e)(this, Fe, null)), this.panningOriginTarget = ((0, Dk.e)(this, ue), (0, Dk.e)(this, qe, bk.o.Zero())), this._panningInertia = ((0, Dk.e)(this, Ie), .9), this._inertia = .9, this.zoomOnFactor = (0, Dk.e)(this, ze, 1), this.targetScreenOffset = ((0, Dk.e)(this, Qe), (0, Dk.e)(this, ve, bk.l.Zero())), this.allowUpsideDown = ((0, Dk.e)(this, Ee), (0, Dk.e)(this, he, !0)), this.useInputToRestoreState = ((0, Dk.e)(this, ae), (0, Dk.e)(this, We, !0)), this.restoreStateInterpolationFactor = ((0, Dk.e)(this, te), (0, Dk.e)(this, Xe, 0)), this._currentInterpolationFactor = ((0, Dk.e)(this, Be), 0), this._viewMatrix = new bk.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new bk.o(1, 1, 0), this._transformedDirection = new bk.o, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Sk.c, this.checkCollisions = !1, this.collisionRadius = new bk.o(.5, .5, .5), this._previousPosition = bk.o.Zero(), this._collisionVelocity = bk.o.Zero(), this._newPosition = bk.o.Zero(), this._computationVector = bk.o.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new bk.o(NaN, NaN, NaN), this._goalTargetScreenOffset = new bk.l(NaN, NaN), this._onCollisionPositionChange = function(kk, ek) {
              let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ik ? (mk.setPosition(ek), mk.Vx && mk.Vx(ik)) : mk._previousPosition.Fs(mk._position);
              const Dk = Math.cos(mk.alpha),
                fk = Math.sin(mk.alpha),
                Sk = Math.cos(mk.beta);
              let bk = Math.sin(mk.beta);
              0 === bk && (bk = 1e-4);
              const rk = mk._getTargetPosition();
              mk._computationVector.Z6(mk.radius * Dk * bk, mk.radius * Sk, mk.radius * fk * bk), rk.addToRef(mk._computationVector, mk._newPosition), mk._position.Fs(mk._newPosition);
              let Pk = mk.upVector;
              mk.allowUpsideDown && mk.beta < 0 && (Pk = Pk.clone(), Pk = Pk.ge()), mk._computeViewMatrix(mk._position, rk, Pk), mk._viewMatrix.addAtIndex(12, mk.targetScreenOffset.x), mk._viewMatrix.addAtIndex(13, mk.targetScreenOffset.y), mk._collisionTriggered = !1
            }, this.xR = bk.o.Zero(), rk && this.setTarget(rk), this.alpha = ek, this.beta = ik, this.radius = fk, this.getViewMatrix(), this.inputs = new Qk(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new ak(this.XF(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.xR = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = bk.l.Zero()
          }
          _updateCache(kk) {
            kk || super._updateCache(), this._cache.xR.Fs(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Fs(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const kk = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? kk.addToRef(this._targetBoundingCenter, this.xR) : this.xR.Fs(kk)
            }
            const kk = this._getLockedTargetPosition();
            return kk || this.xR
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > xk.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Sk = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Sk ? this._currentInterpolationFactor = Sk : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Wk(kk, this._goalAlpha), this._goalBeta = Wk(ek, this._goalBeta), this._goalRadius = Wk(ik, this._goalRadius), this._goalTarget.set(Wk(Dk.x, this._goalTarget.x), Wk(Dk.y, this._goalTarget.y), Wk(Dk.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Wk(fk.x, this._goalTargetScreenOffset.x), Wk(fk.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, rk.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, rk.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, rk.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, rk.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.xR.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(kk, ek) {
            let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const fk = arguments;
            ek = Lk.i.BackCompatCameraNoPreventDefault(fk), this._useCtrlForPanning = ik, this._panningMouseButton = Dk, "boolean" === typeof fk[0] && (fk.length > 1 && (this._useCtrlForPanning = fk[1]), fk.length > 2 && (this._panningMouseButton = fk[2])), this.inputs.attachElement(ek), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(kk, ek, ik) {
            const Dk = this.invertRotation ? -1 : 1;
            let fk = kk * this._calculateHandednessMultiplier();
            this.beta < 0 && (fk *= -1), this.alpha += fk * Dk, this.beta += ek * Dk, this.radius -= ik
          }
          _applyPanDelta(kk, ek) {
            const ik = bk.j.eH[0].Z6(kk, ek, ek);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ik.multiplyInPlace(this.panningAxis), bk.o.TransformNormalToRef(ik, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const kk = this.upVector,
                ek = bk.o.CrossToRef(this._transformedDirection, kk, this._transformedDirection);
              bk.o.CrossToRef(kk, ek, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.xR);
                bk.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.xR.Fs(this._transformedDirection)
              } else {
                if (this.parent) {
                  const kk = bk.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(kk), kk.transposeToRef(kk), bk.o.TransformCoordinatesToRef(this._transformedDirection, kk, this._transformedDirection)
                }
                this.xR.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let kk = !1;
            this.movement.computeCurrentFrameDeltas();
            const ek = this.movement.rotationDeltaCurrentFrame,
              ik = this.movement.zoomDeltaCurrentFrame,
              Dk = this.movement.panDeltaCurrentFrame;
            if (0 === ek.x && 0 === ek.y && 0 === ik && 0 === Dk.x && 0 === Dk.y || (kk = !0, 0 === ek.x && 0 === ek.y && 0 === ik || this._applyRotationAndZoomDelta(ek.x, ek.y, ik), 0 === Dk.x && 0 === Dk.y || this._applyPanDelta(Dk.x, Dk.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), kk = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const ek = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < ek && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < ek && (this.inertialPanningY = 0), kk = !0
            }
            if (kk) this.stopInterpolation();
            else if (this._isInterpolating) {
              let kk = !1;
              const ek = this._scene.JU().getDeltaTime() / 1e3,
                ik = 1 - Math.pow(2, -ek / this._currentInterpolationFactor),
                Dk = Wk(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const ek = bk.j.eH[0].set(Wk(this._goalTarget.x, this.xR.x), Wk(this._goalTarget.y, this.xR.y), Wk(this._goalTarget.z, this.xR.z));
                bk.o.LerpToRef(this.target, ek, ik, this.xR), 10 * bk.o.Distance(this.target, ek) / Dk < xk.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Fs(ek), this.setTarget(this.target, !1, !0, !0)) : kk = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const ek = bk.c.RotationAlphaBetaGammaToRef(Wk(this._goalAlpha, this.alpha), Wk(this._goalBeta, this.beta), 0, bk.j.Quaternion[0]),
                  Dk = bk.c.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, bk.j.Quaternion[1]),
                  fk = bk.c.SlerpToRef(Dk, ek, ik, bk.j.Quaternion[2]);
                fk.normalize();
                const Sk = fk.toAlphaBetaGammaToRef(bk.j.eH[0]);
                if (this.alpha = Sk.x, this.beta = Sk.y, fk.isApprox(ek, xk.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const kk = ek.toAlphaBetaGammaToRef(bk.j.eH[0]);
                  this.alpha = kk.x, this.beta = kk.y
                } else kk = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Dk - this.radius) * ik, Math.abs(Dk / this.radius - 1) < xk.d ? (this._goalRadius = NaN, this.radius = Dk) : kk = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const ek = bk.j.Vector2[0].set(Wk(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Wk(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                bk.l.LerpToRef(this.targetScreenOffset, ek, ik, this.targetScreenOffset), bk.l.Distance(this.targetScreenOffset, ek) < xk.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Fs(ek)) : kk = !0
              }
              this._isInterpolating = kk
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || bk.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const kk = this.alpha;
            var ek, ik;
            this.alpha = function(kk) {
              let ek = Math.PI / 2;
              return 0 === kk.x && 0 === kk.z || (ek = Math.acos(kk.x / Math.sqrt(Math.pow(kk.x, 2) + Math.pow(kk.z, 2)))), kk.z < 0 && (ek = 2 * Math.PI - ek), ek
            }(this._computationVector), this.beta = (ek = this._computationVector.y, ik = this.radius, Math.acos(ek / ik));
            const Dk = Math.round((kk - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Dk * Math.PI, this._checkLimits()
          }
          setPosition(kk) {
            this._position.equals(kk) || (this._position.Fs(kk), this.rebuildAnglesAndRadius())
          }
          setTarget(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Dk = this.overrideCloneAlphaBetaRadius ?? Dk, kk.computeWorldMatrix) ek && kk.hq ? this._targetBoundingCenter = kk.hq().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, kk.computeWorldMatrix(), this._targetHost = kk, this.xR = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const ek = kk,
                Dk = this._getTargetPosition();
              if (Dk && !ik && Dk.equals(ek)) return;
              this._targetHost = null, this.xR = ek, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Dk || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const kk = Math.cos(this.alpha),
              ek = Math.sin(this.alpha),
              ik = Math.cos(this.beta);
            let Dk = Math.sin(this.beta);
            0 === Dk && (Dk = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const fk = this._getTargetPosition();
            if (this._computationVector.Z6(this.radius * kk * Dk, this.radius * ik, this.radius * ek * Dk), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || bk.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), fk.addToRef(this._computationVector, this._newPosition), this.XF().collisionsEnabled && this.checkCollisions) {
              const kk = this.XF().collisionCoordinator;
              this._collider || (this._collider = kk.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, kk.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Fs(this._newPosition);
              let kk = this.upVector;
              this.allowUpsideDown && Dk < 0 && (kk = kk.ge()), this._computeViewMatrix(this._position, fk, kk), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Fs(fk), this._viewMatrix
          }
          zoomOn(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            kk = kk || this.XF().meshes;
            const ik = mk.e.MinMax(kk);
            let Dk = this._calculateLowerRadiusFromModelBoundingSphere(ik.min, ik.max);
            if (Dk = Math.max(Math.min(Dk, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Dk * this.zoomOnFactor, this.mode === pk.e.ORTHOGRAPHIC_CAMERA) {
              const kk = this.XF().JU().getAspectRatio(this),
                ek = Dk * this.zoomOnFactor / 2;
              this.orthoLeft = -ek * kk, this.orthoRight = ek * kk, this.orthoBottom = -ek, this.orthoTop = ek
            }
            this.focusOn({
              min: ik.min,
              max: ik.max,
              distance: Dk
            }, ek)
          }
          focusOn(kk) {
            let ek, ik, Dk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === kk.min) {
              const Dk = kk || this.XF().meshes;
              ek = mk.e.MinMax(Dk), ik = bk.o.Distance(ek.min, ek.max)
            } else {
              ek = kk, ik = kk.distance
            }
            this.xR = mk.e.Center(ek), Dk || (this.maxZ = 2 * ik)
          }
          createRigCamera(ek, ik) {
            let Dk = 0;
            switch (this.cameraRigMode) {
              case pk.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case pk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case pk.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case pk.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case pk.e.RIG_MODE_VR:
                Dk = this._cameraRigParams.stereoHalfAngle * (0 === ik ? 1 : -1);
                break;
              case pk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Dk = this._cameraRigParams.stereoHalfAngle * (0 === ik ? -1 : 1)
            }
            const fk = new kk(ek, this.alpha + Dk, this.beta, this.radius, this.xR, this.XF());
            return fk._cameraRigParams = {}, fk.isRigCamera = !0, fk.rigParent = this, fk.upVector = this.upVector, fk.mode = this.mode, fk.orthoLeft = this.orthoLeft, fk.orthoRight = this.orthoRight, fk.orthoBottom = this.orthoBottom, fk.orthoTop = this.orthoTop, fk
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              ek = this._rigCameras[1];
            switch (kk.beta = ek.beta = this.beta, this.cameraRigMode) {
              case pk.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case pk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case pk.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case pk.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case pk.e.RIG_MODE_VR:
                kk.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, ek.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case pk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                kk.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, ek.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Dk = bk.o.Distance(kk, ek),
              fk = this.XF().JU().getAspectRatio(this),
              Sk = Math.tan(this.fov / 2),
              rk = Sk * fk,
              Pk = .5 * Dk * ik,
              mk = Pk * Math.sqrt(1 + 1 / (rk * rk)),
              Mk = Pk * Math.sqrt(1 + 1 / (Sk * Sk));
            return Math.max(mk, Mk)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ok[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Pk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.F)("target")], Uk = [(0, fk.u)("targetHost")], Hk = [(0, fk.I)()], Yk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], qk = [(0, fk.I)()], Ik = [(0, fk.I)()], zk = [(0, fk.I)()], vk = [(0, fk.I)()], Ek = [(0, fk.F)()], hk = [(0, fk.I)()], tk = [(0, fk.I)()], Xk = [(0, fk.I)()], Bk = [(0, fk.D)()], ck = [(0, fk.I)()], Tk = [(0, fk.I)()], Zk = [(0, fk.I)()], (0, Dk.d)(kk, null, Hk, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialAlphaOffset" in kk,
              get: kk => kk.inertialAlphaOffset
            },
            metadata: Sk
          }, null, gk), (0, Dk.d)(kk, null, Yk, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialBetaOffset" in kk,
              get: kk => kk.inertialBetaOffset
            },
            metadata: Sk
          }, null, gk), (0, Dk.d)(kk, null, Ck, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialRadiusOffset" in kk,
              get: kk => kk.inertialRadiusOffset
            },
            metadata: Sk
          }, null, gk), (0, Dk.d)(kk, null, hk, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningInertia" in kk,
              get: kk => kk.panningInertia
            },
            metadata: Sk
          }, null, gk), (0, Dk.d)(kk, null, tk, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: kk => "zoomToMouseLocation" in kk,
              get: kk => kk.zoomToMouseLocation
            },
            metadata: Sk
          }, null, gk), (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "alpha" in kk,
              get: kk => kk.alpha,
              set: (kk, ek) => {
                kk.alpha = ek
              }
            },
            metadata: Sk
          }, Gk, Nk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: kk => "beta" in kk,
              get: kk => kk.beta,
              set: (kk, ek) => {
                kk.beta = ek
              }
            },
            metadata: Sk
          }, Rk, Jk), (0, Dk.d)(null, null, Pk, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: kk => "radius" in kk,
              get: kk => kk.radius,
              set: (kk, ek) => {
                kk.radius = ek
              }
            },
            metadata: Sk
          }, ke, ee), (0, Dk.d)(null, null, Mk, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: kk => "overrideCloneAlphaBetaRadius" in kk,
              get: kk => kk.overrideCloneAlphaBetaRadius,
              set: (kk, ek) => {
                kk.overrideCloneAlphaBetaRadius = ek
              }
            },
            metadata: Sk
          }, ie, De), (0, Dk.d)(null, null, Kk, {
            kind: "field",
            name: "xR",
            static: !1,
            private: !1,
            access: {
              has: kk => "xR" in kk,
              get: kk => kk.xR,
              set: (kk, ek) => {
                kk.xR = ek
              }
            },
            metadata: Sk
          }, fe, Se), (0, Dk.d)(null, null, Uk, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: kk => "_targetHost" in kk,
              get: kk => kk._targetHost,
              set: (kk, ek) => {
                kk._targetHost = ek
              }
            },
            metadata: Sk
          }, be, re), (0, Dk.d)(null, null, Ak, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerAlphaLimit" in kk,
              get: kk => kk.lowerAlphaLimit,
              set: (kk, ek) => {
                kk.lowerAlphaLimit = ek
              }
            },
            metadata: Sk
          }, Pe, me), (0, Dk.d)(null, null, jk, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperAlphaLimit" in kk,
              get: kk => kk.upperAlphaLimit,
              set: (kk, ek) => {
                kk.upperAlphaLimit = ek
              }
            },
            metadata: Sk
          }, Me, Ke), (0, Dk.d)(null, null, sk, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerBetaLimit" in kk,
              get: kk => kk.lowerBetaLimit,
              set: (kk, ek) => {
                kk.lowerBetaLimit = ek
              }
            },
            metadata: Sk
          }, xe, ne), (0, Dk.d)(null, null, dk, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperBetaLimit" in kk,
              get: kk => kk.upperBetaLimit,
              set: (kk, ek) => {
                kk.upperBetaLimit = ek
              }
            },
            metadata: Sk
          }, Ue, He), (0, Dk.d)(null, null, Vk, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerRadiusLimit" in kk,
              get: kk => kk.lowerRadiusLimit,
              set: (kk, ek) => {
                kk.lowerRadiusLimit = ek
              }
            },
            metadata: Sk
          }, we, le), (0, Dk.d)(null, null, Fk, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "upperRadiusLimit" in kk,
              get: kk => kk.upperRadiusLimit,
              set: (kk, ek) => {
                kk.upperRadiusLimit = ek
              }
            },
            metadata: Sk
          }, pe, ye), (0, Dk.d)(null, null, uk, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "lowerTargetYLimit" in kk,
              get: kk => kk.lowerTargetYLimit,
              set: (kk, ek) => {
                kk.lowerTargetYLimit = ek
              }
            },
            metadata: Sk
          }, Ye, Le), (0, Dk.d)(null, null, qk, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialPanningX" in kk,
              get: kk => kk.inertialPanningX,
              set: (kk, ek) => {
                kk.inertialPanningX = ek
              }
            },
            metadata: Sk
          }, Ce, Ae), (0, Dk.d)(null, null, Ik, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: kk => "inertialPanningY" in kk,
              get: kk => kk.inertialPanningY,
              set: (kk, ek) => {
                kk.inertialPanningY = ek
              }
            },
            metadata: Sk
          }, je, se), (0, Dk.d)(null, null, zk, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: kk => "pinchToPanMaxDistance" in kk,
              get: kk => kk.pinchToPanMaxDistance,
              set: (kk, ek) => {
                kk.pinchToPanMaxDistance = ek
              }
            },
            metadata: Sk
          }, de, Ve), (0, Dk.d)(null, null, vk, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningDistanceLimit" in kk,
              get: kk => kk.panningDistanceLimit,
              set: (kk, ek) => {
                kk.panningDistanceLimit = ek
              }
            },
            metadata: Sk
          }, Fe, ue), (0, Dk.d)(null, null, Ek, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: kk => "panningOriginTarget" in kk,
              get: kk => kk.panningOriginTarget,
              set: (kk, ek) => {
                kk.panningOriginTarget = ek
              }
            },
            metadata: Sk
          }, qe, Ie), (0, Dk.d)(null, null, Xk, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: kk => "zoomOnFactor" in kk,
              get: kk => kk.zoomOnFactor,
              set: (kk, ek) => {
                kk.zoomOnFactor = ek
              }
            },
            metadata: Sk
          }, ze, Qe), (0, Dk.d)(null, null, Bk, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: kk => "targetScreenOffset" in kk,
              get: kk => kk.targetScreenOffset,
              set: (kk, ek) => {
                kk.targetScreenOffset = ek
              }
            },
            metadata: Sk
          }, ve, Ee), (0, Dk.d)(null, null, ck, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: kk => "allowUpsideDown" in kk,
              get: kk => kk.allowUpsideDown,
              set: (kk, ek) => {
                kk.allowUpsideDown = ek
              }
            },
            metadata: Sk
          }, he, ae), (0, Dk.d)(null, null, Tk, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: kk => "useInputToRestoreState" in kk,
              get: kk => kk.useInputToRestoreState,
              set: (kk, ek) => {
                kk.useInputToRestoreState = ek
              }
            },
            metadata: Sk
          }, We, te), (0, Dk.d)(null, null, Zk, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: kk => "restoreStateInterpolationFactor" in kk,
              get: kk => kk.restoreStateInterpolationFactor,
              set: (kk, ek) => {
                kk.restoreStateInterpolationFactor = ek
              }
            },
            metadata: Sk
          }, Xe, Be), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Xk = !1;
    Xk || (Xk = !0, Pk.b.AddNodeConstructor("ArcRotateCamera", ((kk, ek) => () => new tk(kk, 0, 0, 1, bk.o.Zero(), ek))), (0, vk.h)("BABYLON.ArcRotateCamera", tk))
  },
  39813: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.b
    });
    var Dk = ik(39818);
    (0, Dk.c)()
  },
  39818: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      c: () => xk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(36874),
      rk = ik(39822),
      Pk = ik(39787),
      mk = ik(36734);
    let Mk = (() => {
        var kk;
        let ek, ik, Pk = rk.d,
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        return kk = class extends Pk {
          constructor(kk, ek, ik, fk) {
            super(kk, ik, fk), this.groundColor = (0, Dk.e)(this, mk, new bk.e(0, 0, 0)), this.direction = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, Kk, void 0)), (0, Dk.e)(this, xk), this.direction = ek || Sk.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = Sk.o.Normalize(kk.subtract(Sk.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ik.x, ik.y, ik.z, 0, ek), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ek), this
          }
          transferToNodeMaterialEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return kk.setFloat3(ek, ik.x, ik.y, ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Sk.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return rk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, ek) {
            kk["HEMILIGHT" + ek] = !0
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.k)()], ik = [(0, fk.F)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, ek) => {
                kk.groundColor = ek
              }
            },
            metadata: Sk
          }, mk, Mk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, ek) => {
                kk.direction = ek
              }
            },
            metadata: Sk
          }, Kk, xk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Kk = !1;

    function xk() {
      Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_3", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.HemisphericLight", Mk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
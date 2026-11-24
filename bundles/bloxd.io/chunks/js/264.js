export const id = 264;
export const ids = [264];
export const modules = {
  41236: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => uT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37219),
      gT = mT(37188),
      nT = mT(37226),
      HT = mT(40335),
      kT = mT(40535),
      jT = mT(40288),
      lT = mT(39986),
      LT = mT(37196);
    class pT {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(TT) {
        this._zoomStopsAnimation = TT
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(TT) {
        this._idleRotationSpeed = TT
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(TT) {
        this._idleRotationWaitTime = TT
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(TT) {
        this._idleRotationSpinupTime = TT
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
      attach(TT) {
        this._attachedCamera = TT;
        const UT = this._attachedCamera.KF();
        this._onPrePointerObservableObserver = UT.onPrePointerObservable.add((TT => {
          TT.type !== jT.d.POINTERDOWN ? TT.type === jT.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const TT = lT.c.Now;
          let UT = 0;
          null != this._lastFrameTime && (UT = TT - this._lastFrameTime), this._lastFrameTime = TT, this._applyUserInteraction();
          const mT = TT - this._lastInteractionTime - this._idleRotationWaitTime,
            WT = Math.max(Math.min(mT / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * WT, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (UT / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.KF();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(TT) {
        this._lastInteractionTime = TT ?? lT.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < LT.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let TT = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (TT = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? TT : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = lT.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    mT(41239);
    class BT {
      constructor() {
        this._easingMode = BT.EASINGMODE_EASEIN
      }
      setEasingMode(TT) {
        const UT = Math.min(Math.max(TT, 0), 2);
        this._easingMode = UT
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(TT) {
        throw new Error("You must implement this method")
      }
      ease(TT) {
        switch (this._easingMode) {
          case BT.EASINGMODE_EASEIN:
            return this.easeInCore(TT);
          case BT.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - TT)
        }
        return TT >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - TT))) + .5 : .5 * this.easeInCore(2 * TT)
      }
    }
    BT.EASINGMODE_EASEIN = 0, BT.EASINGMODE_EASEOUT = 1, BT.EASINGMODE_EASEINOUT = 2;
    var ZT = mT(41242);
    class cT {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(TT) {
        if (this._autoTransitionRange === TT) return;
        this._autoTransitionRange = TT;
        const UT = this._attachedCamera;
        UT && (TT ? this._onMeshTargetChangedObserver = UT.onMeshTargetChangedObservable.add((TT => {
          if (TT && (TT.computeWorldMatrix(!0), TT.rV)) {
            const UT = TT.rV().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * UT, this.upperRadiusTransitionRange = .05 * UT
          }
        })) : this._onMeshTargetChangedObserver && UT.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(TT) {
        this._attachedCamera = TT, this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(TT) {
        return !!this._attachedCamera && (this._attachedCamera.radius === TT && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(TT) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (cT.EasingFunction.setEasingMode(cT.EasingMode), this._radiusBounceTransition = ZT.c.CreateAnimation("radius", ZT.c.ANIMATIONTYPE_FLOAT, 60, cT.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const UT = ZT.c.TransitionTo("radius", this._attachedCamera.radius + TT, this._attachedCamera, this._attachedCamera.KF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        UT && this._animatables.push(UT)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    cT.EasingFunction = new class extends BT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = TT
      }
      easeInCore(TT) {
        const UT = Math.max(0, this.amplitude);
        return Math.pow(TT, 3) - TT * UT * Math.sin(3.141592653589793 * TT)
      }
    }(.3), cT.EasingMode = BT.EASINGMODE_EASEOUT;
    class vT {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new MT.d, this._mode = vT.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(TT) {
        this._mode = TT
      }
      get mode() {
        return this._mode
      }
      set radiusScale(TT) {
        this._radiusScale = TT
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(TT) {
        this._positionScale = TT
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(TT) {
        this._defaultElevation = TT
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(TT) {
        this._elevationReturnTime = TT
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(TT) {
        this._elevationReturnWaitTime = TT
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(TT) {
        this._zoomStopsAnimation = TT
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(TT) {
        this._framingTime = TT
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(TT) {
        this._attachedCamera = TT;
        const UT = this._attachedCamera.KF();
        vT.EasingFunction.setEasingMode(vT.EasingMode), this._onPrePointerObservableObserver = UT.onPrePointerObservable.add((TT => {
          TT.type !== jT.d.POINTERDOWN ? TT.type === jT.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = TT.onMeshTargetChangedObservable.add((TT => {
          TT && TT.rV && this.zoomOnMesh(TT, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.KF();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const WT = TT.rV().boundingBox;
        this.zoomOnBoundingInfo(WT.minimumWorld, WT.maximumWorld, UT, mT)
      }
      zoomOnMeshHierarchy(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const WT = TT.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(WT.min, WT.max, UT, mT)
      }
      zoomOnMeshesHierarchy(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const WT = new gT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          zT = new gT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let MT = 0; MT < TT.length; MT++) {
          const UT = TT[MT].getHierarchyBoundingVectors(!0);
          gT.p.CheckExtends(UT.min, WT, zT), gT.p.CheckExtends(UT.max, WT, zT)
        }
        this.zoomOnBoundingInfo(WT, zT, UT, mT)
      }
      zoomOnBoundingInfo(TT, UT) {
        let mT, WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const MT = TT.y,
          nT = MT + (UT.y - MT) * this._positionScale,
          HT = UT.subtract(TT).scale(.5);
        if (!isFinite(nT)) return !1;
        if (WT) mT = new gT.p(0, nT, 0);
        else {
          const UT = TT.add(HT);
          mT = new gT.p(UT.x, nT, UT.z)
        }
        this._vectorTransition || (this._vectorTransition = ZT.c.CreateAnimation("target", ZT.c.ANIMATIONTYPE_VECTOR3, 60, vT.EasingFunction)), this._betaIsAnimating = !0;
        let kT = ZT.c.TransitionTo("target", mT, this._attachedCamera, this._attachedCamera.KF(), 60, this._vectorTransition, this._framingTime);
        kT && this._animatables.push(kT);
        let jT = 0;
        if (this._mode === vT.FitFrustumSidesMode) {
          const mT = this._calculateLowerRadiusFromModelBoundingSphere(TT, UT);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = HT.length() + this._attachedCamera.minZ), jT = mT
        } else this._mode === vT.IgnoreBoundsSizeMode && (jT = this._calculateLowerRadiusFromModelBoundingSphere(TT, UT), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const mT = UT.subtract(TT).length();
          this._attachedCamera.panningSensibility = 5e3 / mT, this._attachedCamera.wheelPrecision = 100 / jT
        }
        return this._radiusTransition || (this._radiusTransition = ZT.c.CreateAnimation("radius", ZT.c.ANIMATIONTYPE_FLOAT, 60, vT.EasingFunction)), kT = ZT.c.TransitionTo("radius", jT, this._attachedCamera, this._attachedCamera.KF(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), zT && zT(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), kT && this._animatables.push(kT), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(TT, UT) {
        const mT = this._attachedCamera;
        if (!mT) return 0;
        let WT = mT._calculateLowerRadiusFromModelBoundingSphere(TT, UT, this._radiusScale);
        return mT.lowerRadiusLimit && this._mode === vT.IgnoreBoundsSizeMode && (WT = WT < mT.lowerRadiusLimit ? mT.lowerRadiusLimit : WT), mT.upperRadiusLimit && (WT = WT > mT.upperRadiusLimit ? mT.upperRadiusLimit : WT), WT
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const TT = lT.c.Now - this._lastInteractionTime,
          UT = .5 * Math.PI - this._defaultElevation,
          mT = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > mT && TT >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = ZT.c.CreateAnimation("beta", ZT.c.ANIMATIONTYPE_FLOAT, 60, vT.EasingFunction));
          const TT = ZT.c.TransitionTo("beta", UT, this._attachedCamera, this._attachedCamera.KF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          TT && this._animatables.push(TT)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = lT.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    vT.EasingFunction = new class extends BT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = TT
      }
      easeInCore(TT) {
        return this.exponent <= 0 ? TT : (Math.exp(this.exponent * TT) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, vT.EasingMode = BT.EASINGMODE_EASEINOUT, vT.IgnoreBoundsSizeMode = 0, vT.FitFrustumSidesMode = 1;
    var fT = mT(40330),
      qT = mT(40323),
      iT = mT(40354),
      bT = mT(40201);
    let OT = (() => {
        var TT;
        let UT, mT = [],
          MT = [];
        return TT = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, WT.k)(this, mT, [0, 1, 2]), this._pointerInput = (0, WT.k)(this, MT)
          }
          attachControl(TT) {
            TT = bT.j.BackCompatCameraNoPreventDefault(arguments);
            const UT = this.camera.eB(),
              mT = UT.getInputElement();
            let WT = 0,
              zT = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = MT => {
              const gT = MT.event,
                nT = "touch" === gT.pointerType;
              if (MT.type !== jT.d.POINTERMOVE && -1 === this.buttons.indexOf(gT.button)) return;
              const HT = gT.target;
              if (this._altKey = gT.altKey, this._ctrlKey = gT.ctrlKey, this._metaKey = gT.metaKey, this._shiftKey = gT.shiftKey, this._buttonsPressed = gT.buttons, UT.isPointerLock) {
                const TT = gT.movementX,
                  UT = gT.movementY;
                this.onTouch(null, TT, UT), this._pointA = null, this._pointB = null
              } else {
                if (MT.type !== jT.d.POINTERDOWN && MT.type !== jT.d.POINTERDOUBLETAP && nT && this._pointA?.pointerId !== gT.pointerId && this._pointB?.pointerId !== gT.pointerId) return;
                if (MT.type !== jT.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !nT)
                  if (MT.type === jT.d.POINTERDOUBLETAP) this.onDoubleTap(gT.pointerType, gT);
                  else if (MT.type !== jT.d.POINTERUP || this._currentMousePointerIdDown !== gT.pointerId && !nT) {
                  if (MT.type === jT.d.POINTERMOVE)
                    if (TT || gT.preventDefault(), this._pointA && null === this._pointB) {
                      const TT = gT.clientX - this._pointA.x,
                        UT = gT.clientY - this._pointA.y;
                      this._pointA.x = gT.clientX, this._pointA.y = gT.clientY, this.onTouch(this._pointA, TT, UT)
                    } else if (this._pointA && this._pointB) {
                    const TT = this._pointA.pointerId === gT.pointerId ? this._pointA : this._pointB;
                    TT.x = gT.clientX, TT.y = gT.clientY;
                    const UT = this._pointA.x - this._pointB.x,
                      mT = this._pointA.y - this._pointB.y,
                      nT = UT * UT + mT * mT,
                      HT = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: gT.pointerId,
                        type: MT.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, WT, nT, zT, HT), zT = HT, WT = nT
                  }
                } else {
                  try {
                    HT?.releasePointerCapture(gT.pointerId)
                  } catch (kT) {}
                  nT || (this._pointB = null), UT._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == gT.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == gT.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== WT || zT) && (this.onMultiTouch(this._pointA, this._pointB, WT, 0, zT, null), WT = 0, zT = null), this._currentMousePointerIdDown = -1, this.onButtonUp(gT), TT || gT.preventDefault()
                } else {
                  try {
                    HT?.setPointerCapture(gT.pointerId)
                  } catch (kT) {}
                  if (null === this._pointA) this._pointA = {
                    x: gT.clientX,
                    y: gT.clientY,
                    pointerId: gT.pointerId,
                    type: gT.pointerType,
                    button: gT.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: gT.clientX,
                      y: gT.clientY,
                      pointerId: gT.pointerId,
                      type: gT.pointerType,
                      button: gT.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || nT || (this._currentMousePointerIdDown = gT.pointerId), this.onButtonDown(gT), TT || (gT.preventDefault(), mT && mT.focus())
                }
              }
            }, this._observer = this.camera.KF()._inputManager._addCameraPointerObserver(this._pointerInput, jT.d.POINTERDOWN | jT.d.POINTERUP | jT.d.POINTERMOVE | jT.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, WT = 0, zT = null, this.onLostFocus()
            }, this._contextMenuBind = TT => this.onContextMenu(TT), mT && mT.addEventListener("contextmenu", this._contextMenuBind, !1);
            const MT = this.camera.KF().eB().getHostWindow();
            MT && bT.j.RegisterTopRootEvents(MT, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const TT = this.camera.KF().eB().getHostWindow();
              TT && bT.j.UnregisterTopRootEvents(TT, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.KF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const TT = this.camera.KF().eB().getInputElement();
                TT && TT.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(TT, UT) {}
          onTouch(TT, UT, mT) {}
          onMultiTouch(TT, UT, mT, WT, zT, MT) {}
          onContextMenu(TT) {
            TT.preventDefault()
          }
          onButtonDown(TT) {}
          onButtonUp(TT) {}
          onLostFocus() {}
        }, (() => {
          const gT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          UT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, UT) => {
                TT.buttons = UT
              }
            },
            metadata: gT
          }, mT, MT), gT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gT
          })
        })(), TT
      })(),
      eT = (() => {
        var TT;
        let UT, mT, MT, gT = OT,
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        return TT = class extends gT {
          constructor() {
            super(...arguments), this.pinchZoom = (0, WT.k)(this, nT, !0), this.multiTouchPanning = ((0, WT.k)(this, HT), (0, WT.k)(this, kT, !0)), this.multiTouchPanAndZoom = ((0, WT.k)(this, jT), (0, WT.k)(this, lT, !0)), this._isPinching = ((0, WT.k)(this, LT), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(TT, UT) {}
          _computeMultiTouchPanning(TT, UT) {}
          onMultiTouch(TT, UT, mT, WT, zT, MT) {
            0 === mT && null === zT || 0 === WT && null === MT || (this.multiTouchPanAndZoom ? (this._computePinchZoom(mT, WT), this._computeMultiTouchPanning(zT, MT)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(mT, WT), this._isPinching = !0) : this._computeMultiTouchPanning(zT, MT)) : this.multiTouchPanning ? this._computeMultiTouchPanning(zT, MT) : this.pinchZoom && this._computePinchZoom(mT, WT))
          }
          onButtonUp(TT) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(gT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchZoom" in TT,
              get: TT => TT.pinchZoom,
              set: (TT, UT) => {
                TT.pinchZoom = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanning" in TT,
              get: TT => TT.multiTouchPanning,
              set: (TT, UT) => {
                TT.multiTouchPanning = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, WT.h)(null, null, MT, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanAndZoom" in TT,
              get: TT => TT.multiTouchPanAndZoom,
              set: (TT, UT) => {
                TT.multiTouchPanAndZoom = UT
              }
            },
            metadata: pT
          }, lT, LT), pT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          })
        })(), TT
      })(),
      YT = (() => {
        var TT;
        let UT, mT, MT, gT, nT, HT, kT, jT = eT,
          lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [],
          vT = [],
          fT = [],
          qT = [],
          iT = [],
          bT = [],
          OT = [],
          YT = [],
          JT = [];
        return TT = class extends jT {
          constructor() {
            super(...arguments), this.buttons = (0, WT.k)(this, lT, [0, 1, 2]), this.angularSensibilityX = ((0, WT.k)(this, LT), (0, WT.k)(this, pT, 1e3)), this.angularSensibilityY = ((0, WT.k)(this, BT), (0, WT.k)(this, ZT, 1e3)), this.pinchPrecision = ((0, WT.k)(this, cT), (0, WT.k)(this, vT, 12)), this.pinchDeltaPercentage = ((0, WT.k)(this, fT), (0, WT.k)(this, qT, 0)), this.useNaturalPinchZoom = ((0, WT.k)(this, iT), (0, WT.k)(this, bT, !1)), this.panningSensibility = ((0, WT.k)(this, OT), (0, WT.k)(this, YT, 1e3)), this.pinchInwards = ((0, WT.k)(this, JT), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(TT, UT) {
            if (TT && UT) {
              const mT = UT.x - TT.x,
                WT = UT.y - TT.y,
                zT = this.camera.movement.input.getEntry("pointer", "pan"),
                MT = zT?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== MT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -mT * MT, this.camera.movement.panAccumulatedPixels.y += WT * MT)
            }
          }
          _computePinchZoom(UT, mT) {
            const WT = this.camera.radius || TT.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = WT * Math.sqrt(UT) / Math.sqrt(mT);
            else if (this.pinchDeltaPercentage) {
              const TT = .001 * (mT - UT) * WT * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            } else {
              const TT = (mT - UT) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            }
          }
          onTouch(TT, UT, mT) {
            const WT = this._activeEntry ?? (this.camera.eB().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (WT)
              if ("pan" === WT.interaction) {
                const TT = WT.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== TT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -UT * TT, this.camera.movement.panAccumulatedPixels.y += mT * TT)
              } else if ("rotate" === WT.interaction) {
              const TT = WT.vN ?? WT.sensitivity ?? 1 / this.angularSensibilityX,
                zT = WT.qN ?? WT.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -UT * TT, this.camera.movement.rotationAccumulatedPixels.y += -mT * zT
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(TT, UT, mT, WT, zT, MT) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(WT) - Math.sqrt(mT)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(TT, UT, mT, WT, zT, MT)
          }
          onButtonDown(TT) {
            this._pointerConditions.button = TT.button, this._pointerModifiers.ctrl = TT.ctrlKey, this._pointerModifiers.alt = TT.altKey, this._pointerModifiers.shift = TT.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(TT)
          }
          onButtonUp(TT) {
            this._activeEntry = null, super.onButtonUp(TT)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const eT = "function" === typeof Symbol && Symbol.metadata ? Object.create(jT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], gT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, UT) => {
                TT.buttons = UT
              }
            },
            metadata: eT
          }, lT, LT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityX" in TT,
              get: TT => TT.angularSensibilityX,
              set: (TT, UT) => {
                TT.angularSensibilityX = UT
              }
            },
            metadata: eT
          }, pT, BT), (0, WT.h)(null, null, MT, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityY" in TT,
              get: TT => TT.angularSensibilityY,
              set: (TT, UT) => {
                TT.angularSensibilityY = UT
              }
            },
            metadata: eT
          }, ZT, cT), (0, WT.h)(null, null, gT, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchPrecision" in TT,
              get: TT => TT.pinchPrecision,
              set: (TT, UT) => {
                TT.pinchPrecision = UT
              }
            },
            metadata: eT
          }, vT, fT), (0, WT.h)(null, null, nT, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchDeltaPercentage" in TT,
              get: TT => TT.pinchDeltaPercentage,
              set: (TT, UT) => {
                TT.pinchDeltaPercentage = UT
              }
            },
            metadata: eT
          }, qT, iT), (0, WT.h)(null, null, HT, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "useNaturalPinchZoom" in TT,
              get: TT => TT.useNaturalPinchZoom,
              set: (TT, UT) => {
                TT.useNaturalPinchZoom = UT
              }
            },
            metadata: eT
          }, bT, OT), (0, WT.h)(null, null, kT, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningSensibility" in TT,
              get: TT => TT.panningSensibility,
              set: (TT, UT) => {
                TT.panningSensibility = UT
              }
            },
            metadata: eT
          }, YT, JT), eT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eT
          })
        })(), TT.MinimumRadiusForPinch = .001, TT
      })();
    iT.d.ArcRotateCameraPointersInput = YT;
    var JT = mT(40290);
    let xT = (() => {
      var TT;
      let UT, mT, MT, nT, HT, kT, jT, lT, LT, pT, BT, ZT = [],
        cT = [],
        vT = [],
        fT = [],
        qT = [],
        iT = [],
        OT = [],
        eT = [],
        YT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [];
      return TT = class {
        constructor() {
          this.camera = (0, WT.k)(this, ZT), this.keysUp = (0, WT.k)(this, cT, [38]), this.keysDown = ((0, WT.k)(this, vT), (0, WT.k)(this, fT, [40])), this.keysLeft = ((0, WT.k)(this, qT), (0, WT.k)(this, iT, [37])), this.keysRight = ((0, WT.k)(this, OT), (0, WT.k)(this, eT, [39])), this.keysReset = ((0, WT.k)(this, YT), (0, WT.k)(this, xT, [220])), this.keysZoomIn = ((0, WT.k)(this, dT), (0, WT.k)(this, wT, [187, 107])), this.keysZoomOut = ((0, WT.k)(this, tT), (0, WT.k)(this, aT, [189, 109])), this.panningSensibility = ((0, WT.k)(this, yT), (0, WT.k)(this, XT, 50)), this.zoomingSensibility = ((0, WT.k)(this, IT), (0, WT.k)(this, QT, 25)), this.angularSpeed = ((0, WT.k)(this, sT), (0, WT.k)(this, FT, .01)), this._useAltToZoom = ((0, WT.k)(this, PT), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new gT.o, this._panDirection = new gT.o
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(TT) {
          this._useAltToZoom = TT, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const TT = this.camera.movement.input,
            UT = TT.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && UT ? TT.inputMap.splice(TT.inputMap.indexOf(UT), 1) : this._useAltToZoom && !UT && TT.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(TT) {
          TT = bT.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.KF(), this._engine = this._scene.eB(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((UT => {
            const mT = UT.event;
            if (!mT.metaKey)
              if (UT.type === JT.e.KEYDOWN) {
                if (this._ctrlPressed = mT.ctrlKey, this._altPressed = mT.altKey, -1 !== this.keysUp.indexOf(mT.keyCode) || -1 !== this.keysDown.indexOf(mT.keyCode) || -1 !== this.keysLeft.indexOf(mT.keyCode) || -1 !== this.keysRight.indexOf(mT.keyCode) || -1 !== this.keysReset.indexOf(mT.keyCode) || -1 !== this.keysZoomIn.indexOf(mT.keyCode) || -1 !== this.keysZoomOut.indexOf(mT.keyCode)) {
                  -1 === this._keys.indexOf(mT.keyCode) && this._keys.push(mT.keyCode), mT.preventDefault && (TT || mT.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(mT.keyCode) || -1 !== this.keysDown.indexOf(mT.keyCode) || -1 !== this.keysLeft.indexOf(mT.keyCode) || -1 !== this.keysRight.indexOf(mT.keyCode) || -1 !== this.keysReset.indexOf(mT.keyCode) || -1 !== this.keysZoomIn.indexOf(mT.keyCode) || -1 !== this.keysZoomOut.indexOf(mT.keyCode)) {
              const UT = this._keys.indexOf(mT.keyCode);
              UT >= 0 && this._keys.splice(UT, 1), mT.preventDefault && (TT || mT.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              UT = TT.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const mT = this._rotateDirection.set(0, 0),
              WT = this._panDirection.set(0, 0);
            let zT = 0,
              MT = 0;
            for (let gT = 0; gT < this._keys.length; gT++) {
              const nT = this._keys[gT];
              if (this._keyboardConditions.key = nT, -1 === this.keysReset.indexOf(nT)) {
                const TT = UT.resolveInteraction("keyboard", this._keyboardConditions);
                if (TT)
                  if ("pan" === TT.interaction) MT = Math.max(MT, TT.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(nT) ? WT.x -= 1 : -1 !== this.keysRight.indexOf(nT) ? WT.x += 1 : -1 !== this.keysUp.indexOf(nT) ? WT.y += 1 : -1 !== this.keysDown.indexOf(nT) && (WT.y -= 1);
                  else if ("zoom" === TT.interaction) {
                  const mT = TT.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(nT) || -1 !== this.keysZoomIn.indexOf(nT) ? UT.handlers.zoom(mT) : -1 === this.keysDown.indexOf(nT) && -1 === this.keysZoomOut.indexOf(nT) || UT.handlers.zoom(-mT)
                } else "rotate" === TT.interaction && (zT = Math.max(zT, TT.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(nT) ? mT.x -= 1 : -1 !== this.keysRight.indexOf(nT) ? mT.x += 1 : -1 !== this.keysUp.indexOf(nT) ? mT.y -= 1 : -1 !== this.keysDown.indexOf(nT) && (mT.y += 1))
              } - 1 !== this.keysReset.indexOf(nT) && TT.useInputToRestoreState && TT.restoreState()
            }
            0 === mT.x && 0 === mT.y || (mT.normalize().scaleInPlace(zT), UT.handlers.rotate(mT.x, mT.y)), 0 === WT.x && 0 === WT.y || (WT.normalize().scaleInPlace(MT), UT.handlers.pan(WT.x, WT.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const gT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], pT = [(0, zT.L)()], BT = [(0, zT.L)()], (0, WT.h)(TT, null, BT, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAltToZoom" in TT,
            get: TT => TT.useAltToZoom
          },
          metadata: gT
        }, null, ZT), (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, UT) => {
              TT.keysUp = UT
            }
          },
          metadata: gT
        }, cT, vT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, UT) => {
              TT.keysDown = UT
            }
          },
          metadata: gT
        }, fT, qT), (0, WT.h)(null, null, MT, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, UT) => {
              TT.keysLeft = UT
            }
          },
          metadata: gT
        }, iT, OT), (0, WT.h)(null, null, nT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, UT) => {
              TT.keysRight = UT
            }
          },
          metadata: gT
        }, eT, YT), (0, WT.h)(null, null, HT, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysReset" in TT,
            get: TT => TT.keysReset,
            set: (TT, UT) => {
              TT.keysReset = UT
            }
          },
          metadata: gT
        }, xT, dT), (0, WT.h)(null, null, kT, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomIn" in TT,
            get: TT => TT.keysZoomIn,
            set: (TT, UT) => {
              TT.keysZoomIn = UT
            }
          },
          metadata: gT
        }, wT, tT), (0, WT.h)(null, null, jT, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomOut" in TT,
            get: TT => TT.keysZoomOut,
            set: (TT, UT) => {
              TT.keysZoomOut = UT
            }
          },
          metadata: gT
        }, aT, yT), (0, WT.h)(null, null, lT, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "panningSensibility" in TT,
            get: TT => TT.panningSensibility,
            set: (TT, UT) => {
              TT.panningSensibility = UT
            }
          },
          metadata: gT
        }, XT, IT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomingSensibility" in TT,
            get: TT => TT.zoomingSensibility,
            set: (TT, UT) => {
              TT.zoomingSensibility = UT
            }
          },
          metadata: gT
        }, QT, sT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSpeed" in TT,
            get: TT => TT.angularSpeed,
            set: (TT, UT) => {
              TT.angularSpeed = UT
            }
          },
          metadata: gT
        }, FT, PT), gT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gT
        })
      })(), TT
    })();
    iT.d.ArcRotateCameraKeyboardMoveInput = xT;
    var dT = mT(37889),
      wT = mT(40297);
    let tT = (() => {
      var TT;
      let UT, mT, MT, HT = [],
        kT = [],
        lT = [],
        pT = [],
        BT = [],
        ZT = [];
      return TT = class {
        constructor() {
          this.wheelPrecision = (0, WT.k)(this, HT, 3), this.zoomToMouseLocation = ((0, WT.k)(this, kT), (0, WT.k)(this, lT, !1)), this.wheelDeltaPercentage = ((0, WT.k)(this, pT), (0, WT.k)(this, BT, 0)), this.customComputeDeltaFromMouseWheel = ((0, WT.k)(this, ZT), null), this._viewOffset = new gT.p(0, 0, 0), this._globalOffset = new gT.p(0, 0, 0), this._inertialPanning = gT.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(TT, UT) {
          let mT;
          const WT = .01 * TT * this.wheelDeltaPercentage * UT;
          return mT = TT > 0 ? WT / (1 + this.wheelDeltaPercentage) : WT * (1 + this.wheelDeltaPercentage), mT
        }
        attachControl(TT) {
          TT = bT.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = UT => {
            if (UT.type !== jT.d.POINTERWHEEL) return;
            const mT = UT.event;
            let WT;
            const zT = mT.deltaMode === wT.c.DOM_DELTA_LINE ? 40 : 1,
              MT = -mT.deltaY * zT;
            if (this.customComputeDeltaFromMouseWheel) WT = this.customComputeDeltaFromMouseWheel(MT, this, mT);
            else if (this.wheelDeltaPercentage) {
              if (WT = this._computeDeltaFromMouseWheelLegacyEvent(MT, this.camera.radius), WT > 0) {
                const TT = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let UT = this.camera.radius,
                  mT = TT + WT;
                for (let WT = 0; WT < 20 && !(UT <= mT) && !(Math.abs(mT * this.camera.inertia) < .001); WT++) UT -= mT, mT *= this.camera.inertia;
                UT = (0, nT.Clamp)(UT, 0, Number.MAX_VALUE), WT = this._computeDeltaFromMouseWheelLegacyEvent(MT, UT)
              }
            } else {
              const TT = this.camera.movement.input.getEntry("wheel", "zoom");
              WT = MT * (TT?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            WT && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(WT)) : this.camera.movement.zoomAccumulatedPixels += WT), mT.preventDefault && (TT || mT.preventDefault())
          }, this._observer = this.camera.KF()._inputManager._addCameraPointerObserver(this._wheel, jT.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.B3(0)
        }
        detachControl() {
          this._observer && (this.camera.KF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const TT = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(TT.inertialAlphaOffset) + Math.abs(TT.inertialBetaOffset) + Math.abs(TT.inertialRadiusOffset)) {
            this._updateHitPlane(), TT.target.addInPlace(this._inertialPanning), TT.radius -= this._zoomToMouseRadiusOffset;
            const UT = TT.movement.getFrameIndependentDecay(TT.inertia);
            this._inertialPanning.scaleInPlace(UT), this._zoomToMouseRadiusOffset *= UT, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < LT.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const TT = this.camera,
            UT = TT.target.subtract(TT.position);
          this._hitPlane = dT.e.FromPositionAndNormal(TT.target, UT)
        }
        _getPosition() {
          const TT = this.camera,
            UT = TT.KF(),
            mT = UT.createPickingRay(UT.pointerX, UT.pointerY, gT.e.Identity(), TT, !1);
          0 === TT.targetScreenOffset.x && 0 === TT.targetScreenOffset.y || (this._viewOffset.set(TT.targetScreenOffset.x, TT.targetScreenOffset.y, 0), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), this._globalOffset = gT.p.TransformNormal(this._viewOffset, TT._cameraTransformMatrix), mT.origin.addInPlace(this._globalOffset));
          let WT = 0;
          return this._hitPlane && (WT = mT.intersectsPlane(this._hitPlane) ?? 0), mT.origin.addInPlace(mT.direction.scaleInPlace(WT))
        }
        _zoomToMouse(TT) {
          const UT = this.camera,
            mT = 1 - UT.inertia,
            WT = UT.movement.getFrameIndependentInputScale(UT.inertia);
          if (UT.lowerRadiusLimit) {
            const zT = UT.lowerRadiusLimit ?? 0;
            UT.radius - (this._zoomToMouseRadiusOffset + TT * WT) / mT < zT && (TT = ((UT.radius - zT) * mT - this._zoomToMouseRadiusOffset) / WT)
          }
          if (UT.upperRadiusLimit) {
            const zT = UT.upperRadiusLimit ?? 0;
            UT.radius - (this._zoomToMouseRadiusOffset + TT * WT) / mT > zT && (TT = ((UT.radius - zT) * mT - this._zoomToMouseRadiusOffset) / WT)
          }
          const zT = TT / mT / UT.radius,
            MT = this._getPosition(),
            nT = gT.l.JB[6];
          MT.subtractToRef(UT.target, nT), nT.scaleInPlace(zT), nT.scaleInPlace(mT), nT.scaleInPlace(WT), this._inertialPanning.addInPlace(nT), this._zoomToMouseRadiusOffset += TT * WT
        }
        _zeroIfClose(TT) {
          Math.abs(TT.x) < LT.c && (TT.x = 0), Math.abs(TT.y) < LT.c && (TT.y = 0), Math.abs(TT.z) < LT.c && (TT.z = 0)
        }
      }, (() => {
        const gT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecision" in TT,
            get: TT => TT.wheelPrecision,
            set: (TT, UT) => {
              TT.wheelPrecision = UT
            }
          },
          metadata: gT
        }, HT, kT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomToMouseLocation" in TT,
            get: TT => TT.zoomToMouseLocation,
            set: (TT, UT) => {
              TT.zoomToMouseLocation = UT
            }
          },
          metadata: gT
        }, lT, pT), (0, WT.h)(null, null, MT, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelDeltaPercentage" in TT,
            get: TT => TT.wheelDeltaPercentage,
            set: (TT, UT) => {
              TT.wheelDeltaPercentage = UT
            }
          },
          metadata: gT
        }, BT, ZT), gT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gT
        })
      })(), TT
    })();
    iT.d.ArcRotateCameraMouseWheelInput = tT;
    var aT, yT, XT = mT(39965);
    class IT extends iT.g {
      constructor(TT) {
        super(TT)
      }
      addMouseWheel() {
        return this.add(new tT), this
      }
      addPointers() {
        return this.add(new YT), this
      }
      addKeyboard() {
        return this.add(new xT), this
      }
    }(aT = IT.prototype).addVRDeviceOrientation ?? (aT.addVRDeviceOrientation = (0, XT.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (yT = IT.prototype).addGamepad ?? (yT.addGamepad = (0, XT.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var QT = mT(37239),
      sT = mT(40345),
      FT = mT(40347);
    class PT extends sT.e {
      constructor(TT, UT, mT) {
        super(TT, UT, mT), this.input = new FT.b({
          pan: (TT, UT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += UT
          },
          rotate: (TT, UT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += UT
          },
          zoom: TT => {
            this.zoomAccumulatedPixels += TT
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

    function VT(TT, UT) {
      return isNaN(TT) ? UT : TT
    }
    let uT = (() => {
        var TT;
        let UT, mT, HT, jT, lT, BT, ZT, iT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, QT, sT, FT, uT, CT, rT, KT, ST, GT, NT = qT.d,
          ET = [],
          hT = [],
          DT = [],
          oT = [],
          AT = [],
          RT = [],
          TU = [],
          UU = [],
          mU = [],
          WU = [],
          zU = [],
          MU = [],
          gU = [],
          nU = [],
          HU = [],
          kU = [],
          jU = [],
          lU = [],
          LU = [],
          pU = [],
          BU = [],
          ZU = [],
          cU = [],
          vU = [],
          fU = [],
          qU = [],
          iU = [],
          bU = [],
          OU = [],
          eU = [],
          YU = [],
          JU = [],
          xU = [],
          dU = [],
          wU = [],
          tU = [],
          aU = [],
          yU = [],
          XU = [],
          IU = [],
          QU = [],
          sU = [],
          FU = [],
          PU = [],
          VU = [],
          uU = [],
          CU = [];
        return TT = class extends NT {
          get target() {
            return this.hA
          }
          set target(TT) {
            this.setTarget(TT)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(TT) {
            TT && this.setTarget(TT)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(TT) {
            this.setPosition(TT)
          }
          set upVector(TT) {
            this._upToYMatrix || (this._yToUpMatrix = new gT.e, this._upToYMatrix = new gT.e, this._upVector = gT.p.Zero()), TT.normalize(), this._upVector.Gw(TT), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            gT.e.RotationAlignToRef(gT.p.UpReadOnly, this._upVector, this._yToUpMatrix), gT.e.RotationAlignToRef(this._upVector, gT.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const TT = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(TT) < this._rotationEpsilon ? 0 : TT
          }
          set inertialAlphaOffset(TT) {
            this._inertialAlphaOffset = TT, 0 === TT && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const TT = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(TT) < this._rotationEpsilon ? 0 : TT
          }
          set inertialBetaOffset(TT) {
            this._inertialBetaOffset = TT, 0 === TT && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const TT = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(TT) < this._rotationEpsilon ? 0 : TT
          }
          set inertialRadiusOffset(TT) {
            this._inertialRadiusOffset = TT, 0 === TT && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(TT) {
            this._panningInertia = TT, this.movement && (this.movement.panInertia = TT)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(TT) {
            this._inertia = TT, this.movement && (this.movement.rotationInertia = TT, this.movement.zoomInertia = TT)
          }
          get angularSensibilityX() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.angularSensibilityX : 0
          }
          set angularSensibilityX(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.angularSensibilityX = TT)
          }
          get angularSensibilityY() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.angularSensibilityY : 0
          }
          set angularSensibilityY(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.angularSensibilityY = TT)
          }
          get pinchPrecision() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchPrecision : 0
          }
          set pinchPrecision(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.pinchPrecision = TT)
          }
          get pinchDeltaPercentage() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.pinchDeltaPercentage = TT)
          }
          get useNaturalPinchZoom() {
            const TT = this.inputs.attached.pointers;
            return !!TT && TT.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.useNaturalPinchZoom = TT)
          }
          get panningSensibility() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.panningSensibility : 0
          }
          set panningSensibility(TT) {
            const UT = this.inputs.attached.pointers;
            UT && (UT.panningSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysUp = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysDown = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const UT = this.inputs.attached.keyboard;
            UT && (UT.keysRight = TT)
          }
          get wheelPrecision() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelPrecision : 0
          }
          set wheelPrecision(TT) {
            const UT = this.inputs.attached.mousewheel;
            UT && (UT.wheelPrecision = TT)
          }
          get zoomToMouseLocation() {
            const TT = this.inputs.attached.mousewheel;
            return !!TT && TT.zoomToMouseLocation
          }
          set zoomToMouseLocation(TT) {
            const UT = this.inputs.attached.mousewheel;
            UT && (UT.zoomToMouseLocation = TT)
          }
          get wheelDeltaPercentage() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(TT) {
            const UT = this.inputs.attached.mousewheel;
            UT && (UT.wheelDeltaPercentage = TT)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(TT) {
            this._useCtrlForPanningInternal = TT;
            const UT = this.movement.input,
              mT = UT.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !TT && mT ? UT.inputMap.splice(UT.inputMap.indexOf(mT), 1) : TT && !mT && UT.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const WT = UT.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !TT && WT ? UT.inputMap.splice(UT.inputMap.indexOf(WT), 1) : TT && !WT && UT.addEntry({
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
          set _panningMouseButton(TT) {
            this._panningMouseButtonInternal = TT;
            const UT = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            UT && (UT.button = TT)
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
          set useBouncingBehavior(TT) {
            TT !== this.useBouncingBehavior && (TT ? (this._bouncingBehavior = new cT, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(TT) {
            TT !== this.useFramingBehavior && (TT ? (this._framingBehavior = new vT, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(TT) {
            TT !== this.useAutoRotationBehavior && (TT ? (this._autoRotationBehavior = new pT, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(TT, UT, mT, zT, nT, HT) {
            var kT;
            let jT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(TT, gT.p.Zero(), HT, jT), kT = this, this.alpha = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, void 0)), this.beta = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, void 0)), this.radius = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, void 0)), this.overrideCloneAlphaBetaRadius = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, void 0)), this.hA = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, void 0)), this._targetHost = ((0, WT.k)(this, zU), (0, WT.k)(this, MU, void 0)), this._upToYMatrix = (0, WT.k)(this, gU), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, WT.k)(this, nU, null), this.upperAlphaLimit = ((0, WT.k)(this, HU), (0, WT.k)(this, kU, null)), this.lowerBetaLimit = ((0, WT.k)(this, jU), (0, WT.k)(this, lU, .01)), this.upperBetaLimit = ((0, WT.k)(this, LU), (0, WT.k)(this, pU, Math.PI - .01)), this.lowerRadiusLimit = ((0, WT.k)(this, BU), (0, WT.k)(this, ZU, null)), this.upperRadiusLimit = ((0, WT.k)(this, cU), (0, WT.k)(this, vU, null)), this.lowerTargetYLimit = ((0, WT.k)(this, fU), (0, WT.k)(this, qU, -1 / 0)), this.inertialPanningX = ((0, WT.k)(this, iU), (0, WT.k)(this, bU, 0)), this.inertialPanningY = ((0, WT.k)(this, OU), (0, WT.k)(this, eU, 0)), this.pinchToPanMaxDistance = ((0, WT.k)(this, YU), (0, WT.k)(this, JU, 20)), this.panningDistanceLimit = ((0, WT.k)(this, xU), (0, WT.k)(this, dU, null)), this.panningOriginTarget = ((0, WT.k)(this, wU), (0, WT.k)(this, tU, gT.p.Zero())), this._panningInertia = ((0, WT.k)(this, aU), .9), this._inertia = .9, this.zoomOnFactor = (0, WT.k)(this, yU, 1), this.targetScreenOffset = ((0, WT.k)(this, XU), (0, WT.k)(this, IU, gT.o.Zero())), this.allowUpsideDown = ((0, WT.k)(this, QU), (0, WT.k)(this, sU, !0)), this.useInputToRestoreState = ((0, WT.k)(this, FU), (0, WT.k)(this, PU, !0)), this.restoreStateInterpolationFactor = ((0, WT.k)(this, VU), (0, WT.k)(this, uU, 0)), this._currentInterpolationFactor = ((0, WT.k)(this, CU), 0), this._viewMatrix = new gT.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new gT.p(1, 1, 0), this._transformedDirection = new gT.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new MT.d, this.checkCollisions = !1, this.collisionRadius = new gT.p(.5, .5, .5), this._previousPosition = gT.p.Zero(), this._collisionVelocity = gT.p.Zero(), this._newPosition = gT.p.Zero(), this._computationVector = gT.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new gT.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new gT.o(NaN, NaN), this._onCollisionPositionChange = function(TT, UT) {
              let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              mT ? (kT.setPosition(UT), kT.zL && kT.zL(mT)) : kT._previousPosition.Gw(kT._position);
              const WT = Math.cos(kT.alpha),
                zT = Math.sin(kT.alpha),
                MT = Math.cos(kT.beta);
              let gT = Math.sin(kT.beta);
              0 === gT && (gT = 1e-4);
              const nT = kT._getTargetPosition();
              kT._computationVector.J9(kT.radius * WT * gT, kT.radius * MT, kT.radius * zT * gT), nT.addToRef(kT._computationVector, kT._newPosition), kT._position.Gw(kT._newPosition);
              let HT = kT.upVector;
              kT.allowUpsideDown && kT.beta < 0 && (HT = HT.clone(), HT = HT.ck()), kT._computeViewMatrix(kT._position, nT, HT), kT._viewMatrix.addAtIndex(12, kT.targetScreenOffset.x), kT._viewMatrix.addAtIndex(13, kT.targetScreenOffset.y), kT._collisionTriggered = !1
            }, this.hA = gT.p.Zero(), nT && this.setTarget(nT), this.alpha = UT, this.beta = mT, this.radius = zT, this.getViewMatrix(), this.inputs = new IT(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new PT(this.KF(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.hA = new gT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = gT.o.Zero()
          }
          _updateCache(TT) {
            TT || super._updateCache(), this._cache.hA.Gw(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Gw(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const TT = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? TT.addToRef(this._targetBoundingCenter, this.hA) : this.hA.Gw(TT)
            }
            const TT = this._getLockedTargetPosition();
            return TT || this.hA
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > LT.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              MT = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != MT ? this._currentInterpolationFactor = MT : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = VT(TT, this._goalAlpha), this._goalBeta = VT(UT, this._goalBeta), this._goalRadius = VT(mT, this._goalRadius), this._goalTarget.set(VT(WT.x, this._goalTarget.x), VT(WT.y, this._goalTarget.y), VT(WT.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(VT(zT.x, this._goalTargetScreenOffset.x), VT(zT.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, nT.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, nT.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, nT.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, nT.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.hA.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(TT, UT) {
            let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const zT = arguments;
            UT = bT.j.BackCompatCameraNoPreventDefault(zT), this._useCtrlForPanning = mT, this._panningMouseButton = WT, "boolean" === typeof zT[0] && (zT.length > 1 && (this._useCtrlForPanning = zT[1]), zT.length > 2 && (this._panningMouseButton = zT[2])), this.inputs.attachElement(UT), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(TT, UT, mT) {
            const WT = this.invertRotation ? -1 : 1;
            let zT = TT * this._calculateHandednessMultiplier();
            this.beta < 0 && (zT *= -1), this.alpha += zT * WT, this.beta += UT * WT, this.radius -= mT
          }
          _applyPanDelta(TT, UT) {
            const mT = gT.l.JB[0].J9(TT, UT, UT);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), mT.multiplyInPlace(this.panningAxis), gT.p.TransformNormalToRef(mT, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const TT = this.upVector,
                UT = gT.p.CrossToRef(this._transformedDirection, TT, this._transformedDirection);
              gT.p.CrossToRef(TT, UT, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.hA);
                gT.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.hA.Gw(this._transformedDirection)
              } else {
                if (this.parent) {
                  const TT = gT.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(TT), TT.transposeToRef(TT), gT.p.TransformCoordinatesToRef(this._transformedDirection, TT, this._transformedDirection)
                }
                this.hA.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let TT = !1;
            this.movement.computeCurrentFrameDeltas();
            const UT = this.movement.rotationDeltaCurrentFrame,
              mT = this.movement.zoomDeltaCurrentFrame,
              WT = this.movement.panDeltaCurrentFrame;
            if (0 === UT.x && 0 === UT.y && 0 === mT && 0 === WT.x && 0 === WT.y || (TT = !0, 0 === UT.x && 0 === UT.y && 0 === mT || this._applyRotationAndZoomDelta(UT.x, UT.y, mT), 0 === WT.x && 0 === WT.y || this._applyPanDelta(WT.x, WT.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), TT = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const UT = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < UT && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < UT && (this.inertialPanningY = 0), TT = !0
            }
            if (TT) this.stopInterpolation();
            else if (this._isInterpolating) {
              let TT = !1;
              const UT = this._scene.eB().getDeltaTime() / 1e3,
                mT = 1 - Math.pow(2, -UT / this._currentInterpolationFactor),
                WT = VT(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const UT = gT.l.JB[0].set(VT(this._goalTarget.x, this.hA.x), VT(this._goalTarget.y, this.hA.y), VT(this._goalTarget.z, this.hA.z));
                gT.p.LerpToRef(this.target, UT, mT, this.hA), 10 * gT.p.Distance(this.target, UT) / WT < LT.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Gw(UT), this.setTarget(this.target, !1, !0, !0)) : TT = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const UT = gT.f.RotationAlphaBetaGammaToRef(VT(this._goalAlpha, this.alpha), VT(this._goalBeta, this.beta), 0, gT.l.Quaternion[0]),
                  WT = gT.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, gT.l.Quaternion[1]),
                  zT = gT.f.SlerpToRef(WT, UT, mT, gT.l.Quaternion[2]);
                zT.normalize();
                const MT = zT.toAlphaBetaGammaToRef(gT.l.JB[0]);
                if (this.alpha = MT.x, this.beta = MT.y, zT.isApprox(UT, LT.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const TT = UT.toAlphaBetaGammaToRef(gT.l.JB[0]);
                  this.alpha = TT.x, this.beta = TT.y
                } else TT = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (WT - this.radius) * mT, Math.abs(WT / this.radius - 1) < LT.c ? (this._goalRadius = NaN, this.radius = WT) : TT = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const UT = gT.l.Vector2[0].set(VT(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), VT(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                gT.o.LerpToRef(this.targetScreenOffset, UT, mT, this.targetScreenOffset), gT.o.Distance(this.targetScreenOffset, UT) < LT.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Gw(UT)) : TT = !0
              }
              this._isInterpolating = TT
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || gT.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const TT = this.alpha;
            var UT, mT;
            this.alpha = function(TT) {
              let UT = Math.PI / 2;
              return 0 === TT.x && 0 === TT.z || (UT = Math.acos(TT.x / Math.sqrt(Math.pow(TT.x, 2) + Math.pow(TT.z, 2)))), TT.z < 0 && (UT = 2 * Math.PI - UT), UT
            }(this._computationVector), this.beta = (UT = this._computationVector.y, mT = this.radius, Math.acos(UT / mT));
            const WT = Math.round((TT - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * WT * Math.PI, this._checkLimits()
          }
          setPosition(TT) {
            this._position.equals(TT) || (this._position.Gw(TT), this.rebuildAnglesAndRadius())
          }
          setTarget(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (WT = this.overrideCloneAlphaBetaRadius ?? WT, TT.computeWorldMatrix) UT && TT.rV ? this._targetBoundingCenter = TT.rV().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, TT.computeWorldMatrix(), this._targetHost = TT, this.hA = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const UT = TT,
                WT = this._getTargetPosition();
              if (WT && !mT && WT.equals(UT)) return;
              this._targetHost = null, this.hA = UT, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            WT || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const TT = Math.cos(this.alpha),
              UT = Math.sin(this.alpha),
              mT = Math.cos(this.beta);
            let WT = Math.sin(this.beta);
            0 === WT && (WT = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const zT = this._getTargetPosition();
            if (this._computationVector.J9(this.radius * TT * WT, this.radius * mT, this.radius * UT * WT), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || gT.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), zT.addToRef(this._computationVector, this._newPosition), this.KF().collisionsEnabled && this.checkCollisions) {
              const TT = this.KF().collisionCoordinator;
              this._collider || (this._collider = TT.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, TT.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Gw(this._newPosition);
              let TT = this.upVector;
              this.allowUpsideDown && WT < 0 && (TT = TT.ck()), this._computeViewMatrix(this._position, zT, TT), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Gw(zT), this._viewMatrix
          }
          zoomOn(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            TT = TT || this.KF().meshes;
            const mT = kT.d.MinMax(TT);
            let WT = this._calculateLowerRadiusFromModelBoundingSphere(mT.min, mT.max);
            if (WT = Math.max(Math.min(WT, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = WT * this.zoomOnFactor, this.mode === fT.b.ORTHOGRAPHIC_CAMERA) {
              const TT = this.KF().eB().getAspectRatio(this),
                UT = WT * this.zoomOnFactor / 2;
              this.orthoLeft = -UT * TT, this.orthoRight = UT * TT, this.orthoBottom = -UT, this.orthoTop = UT
            }
            this.focusOn({
              min: mT.min,
              max: mT.max,
              distance: WT
            }, UT)
          }
          focusOn(TT) {
            let UT, mT, WT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === TT.min) {
              const WT = TT || this.KF().meshes;
              UT = kT.d.MinMax(WT), mT = gT.p.Distance(UT.min, UT.max)
            } else {
              UT = TT, mT = TT.distance
            }
            this.hA = kT.d.Center(UT), WT || (this.maxZ = 2 * mT)
          }
          createRigCamera(UT, mT) {
            let WT = 0;
            switch (this.cameraRigMode) {
              case fT.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case fT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case fT.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case fT.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case fT.b.RIG_MODE_VR:
                WT = this._cameraRigParams.stereoHalfAngle * (0 === mT ? 1 : -1);
                break;
              case fT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                WT = this._cameraRigParams.stereoHalfAngle * (0 === mT ? -1 : 1)
            }
            const zT = new TT(UT, this.alpha + WT, this.beta, this.radius, this.hA, this.KF());
            return zT._cameraRigParams = {}, zT.isRigCamera = !0, zT.rigParent = this, zT.upVector = this.upVector, zT.mode = this.mode, zT.orthoLeft = this.orthoLeft, zT.orthoRight = this.orthoRight, zT.orthoBottom = this.orthoBottom, zT.orthoTop = this.orthoTop, zT
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              UT = this._rigCameras[1];
            switch (TT.beta = UT.beta = this.beta, this.cameraRigMode) {
              case fT.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case fT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case fT.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case fT.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case fT.b.RIG_MODE_VR:
                TT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, UT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case fT.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                TT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, UT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const WT = gT.p.Distance(TT, UT),
              zT = this.KF().eB().getAspectRatio(this),
              MT = Math.tan(this.fov / 2),
              nT = MT * zT,
              HT = .5 * WT * mT,
              kT = HT * Math.sqrt(1 + 1 / (nT * nT)),
              jT = HT * Math.sqrt(1 + 1 / (MT * MT));
            return Math.max(kT, jT)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(NT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], HT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.J)("target")], BT = [(0, zT.x)("targetHost")], ZT = [(0, zT.L)()], iT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.L)()], YT = [(0, zT.L)()], JT = [(0, zT.L)()], xT = [(0, zT.L)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], yT = [(0, zT.L)()], XT = [(0, zT.L)()], QT = [(0, zT.L)()], sT = [(0, zT.J)()], FT = [(0, zT.L)()], uT = [(0, zT.L)()], CT = [(0, zT.L)()], rT = [(0, zT.F)()], KT = [(0, zT.L)()], ST = [(0, zT.L)()], GT = [(0, zT.L)()], (0, WT.h)(TT, null, ZT, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialAlphaOffset" in TT,
              get: TT => TT.inertialAlphaOffset
            },
            metadata: MT
          }, null, ET), (0, WT.h)(TT, null, iT, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialBetaOffset" in TT,
              get: TT => TT.inertialBetaOffset
            },
            metadata: MT
          }, null, ET), (0, WT.h)(TT, null, OT, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialRadiusOffset" in TT,
              get: TT => TT.inertialRadiusOffset
            },
            metadata: MT
          }, null, ET), (0, WT.h)(TT, null, FT, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningInertia" in TT,
              get: TT => TT.panningInertia
            },
            metadata: MT
          }, null, ET), (0, WT.h)(TT, null, uT, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomToMouseLocation" in TT,
              get: TT => TT.zoomToMouseLocation
            },
            metadata: MT
          }, null, ET), (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "alpha" in TT,
              get: TT => TT.alpha,
              set: (TT, UT) => {
                TT.alpha = UT
              }
            },
            metadata: MT
          }, hT, DT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: TT => "beta" in TT,
              get: TT => TT.beta,
              set: (TT, UT) => {
                TT.beta = UT
              }
            },
            metadata: MT
          }, oT, AT), (0, WT.h)(null, null, HT, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: TT => "radius" in TT,
              get: TT => TT.radius,
              set: (TT, UT) => {
                TT.radius = UT
              }
            },
            metadata: MT
          }, RT, TU), (0, WT.h)(null, null, jT, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "overrideCloneAlphaBetaRadius" in TT,
              get: TT => TT.overrideCloneAlphaBetaRadius,
              set: (TT, UT) => {
                TT.overrideCloneAlphaBetaRadius = UT
              }
            },
            metadata: MT
          }, UU, mU), (0, WT.h)(null, null, lT, {
            kind: "field",
            name: "hA",
            static: !1,
            private: !1,
            access: {
              has: TT => "hA" in TT,
              get: TT => TT.hA,
              set: (TT, UT) => {
                TT.hA = UT
              }
            },
            metadata: MT
          }, WU, zU), (0, WT.h)(null, null, BT, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: TT => "_targetHost" in TT,
              get: TT => TT._targetHost,
              set: (TT, UT) => {
                TT._targetHost = UT
              }
            },
            metadata: MT
          }, MU, gU), (0, WT.h)(null, null, eT, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerAlphaLimit" in TT,
              get: TT => TT.lowerAlphaLimit,
              set: (TT, UT) => {
                TT.lowerAlphaLimit = UT
              }
            },
            metadata: MT
          }, nU, HU), (0, WT.h)(null, null, YT, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperAlphaLimit" in TT,
              get: TT => TT.upperAlphaLimit,
              set: (TT, UT) => {
                TT.upperAlphaLimit = UT
              }
            },
            metadata: MT
          }, kU, jU), (0, WT.h)(null, null, JT, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerBetaLimit" in TT,
              get: TT => TT.lowerBetaLimit,
              set: (TT, UT) => {
                TT.lowerBetaLimit = UT
              }
            },
            metadata: MT
          }, lU, LU), (0, WT.h)(null, null, xT, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperBetaLimit" in TT,
              get: TT => TT.upperBetaLimit,
              set: (TT, UT) => {
                TT.upperBetaLimit = UT
              }
            },
            metadata: MT
          }, pU, BU), (0, WT.h)(null, null, dT, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerRadiusLimit" in TT,
              get: TT => TT.lowerRadiusLimit,
              set: (TT, UT) => {
                TT.lowerRadiusLimit = UT
              }
            },
            metadata: MT
          }, ZU, cU), (0, WT.h)(null, null, wT, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperRadiusLimit" in TT,
              get: TT => TT.upperRadiusLimit,
              set: (TT, UT) => {
                TT.upperRadiusLimit = UT
              }
            },
            metadata: MT
          }, vU, fU), (0, WT.h)(null, null, tT, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerTargetYLimit" in TT,
              get: TT => TT.lowerTargetYLimit,
              set: (TT, UT) => {
                TT.lowerTargetYLimit = UT
              }
            },
            metadata: MT
          }, qU, iU), (0, WT.h)(null, null, aT, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningX" in TT,
              get: TT => TT.inertialPanningX,
              set: (TT, UT) => {
                TT.inertialPanningX = UT
              }
            },
            metadata: MT
          }, bU, OU), (0, WT.h)(null, null, yT, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningY" in TT,
              get: TT => TT.inertialPanningY,
              set: (TT, UT) => {
                TT.inertialPanningY = UT
              }
            },
            metadata: MT
          }, eU, YU), (0, WT.h)(null, null, XT, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchToPanMaxDistance" in TT,
              get: TT => TT.pinchToPanMaxDistance,
              set: (TT, UT) => {
                TT.pinchToPanMaxDistance = UT
              }
            },
            metadata: MT
          }, JU, xU), (0, WT.h)(null, null, QT, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningDistanceLimit" in TT,
              get: TT => TT.panningDistanceLimit,
              set: (TT, UT) => {
                TT.panningDistanceLimit = UT
              }
            },
            metadata: MT
          }, dU, wU), (0, WT.h)(null, null, sT, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningOriginTarget" in TT,
              get: TT => TT.panningOriginTarget,
              set: (TT, UT) => {
                TT.panningOriginTarget = UT
              }
            },
            metadata: MT
          }, tU, aU), (0, WT.h)(null, null, CT, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomOnFactor" in TT,
              get: TT => TT.zoomOnFactor,
              set: (TT, UT) => {
                TT.zoomOnFactor = UT
              }
            },
            metadata: MT
          }, yU, XU), (0, WT.h)(null, null, rT, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "targetScreenOffset" in TT,
              get: TT => TT.targetScreenOffset,
              set: (TT, UT) => {
                TT.targetScreenOffset = UT
              }
            },
            metadata: MT
          }, IU, QU), (0, WT.h)(null, null, KT, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: TT => "allowUpsideDown" in TT,
              get: TT => TT.allowUpsideDown,
              set: (TT, UT) => {
                TT.allowUpsideDown = UT
              }
            },
            metadata: MT
          }, sU, FU), (0, WT.h)(null, null, ST, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: TT => "useInputToRestoreState" in TT,
              get: TT => TT.useInputToRestoreState,
              set: (TT, UT) => {
                TT.useInputToRestoreState = UT
              }
            },
            metadata: MT
          }, PU, VU), (0, WT.h)(null, null, GT, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "restoreStateInterpolationFactor" in TT,
              get: TT => TT.restoreStateInterpolationFactor,
              set: (TT, UT) => {
                TT.restoreStateInterpolationFactor = UT
              }
            },
            metadata: MT
          }, uU, CU), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      CT = !1;
    CT || (CT = !0, HT.d.AddNodeConstructor("ArcRotateCamera", ((TT, UT) => () => new uT(TT, 0, 0, 1, gT.p.Zero(), UT))), (0, QT.h)("BABYLON.ArcRotateCamera", uT))
  },
  40362: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.d
    });
    var WT = mT(40369);
    (0, WT.e)()
  },
  40369: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      e: () => LT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(37367),
      nT = mT(40373),
      HT = mT(40335),
      kT = mT(37239);
    let jT = (() => {
        var TT;
        let UT, mT, HT = nT.e,
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        return TT = class extends HT {
          constructor(TT, UT, mT, zT) {
            super(TT, mT, zT), this.groundColor = (0, WT.k)(this, kT, new gT.d(0, 0, 0)), this.direction = ((0, WT.k)(this, jT), (0, WT.k)(this, lT, void 0)), (0, WT.k)(this, LT), this.direction = UT || MT.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = MT.p.Normalize(TT.subtract(MT.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", mT.x, mT.y, mT.z, 0, UT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), UT), this
          }
          transferToNodeMaterialEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return TT.setFloat3(UT, mT.x, mT.y, mT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = MT.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return nT.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, UT) {
            TT["HEMILIGHT" + UT] = !0
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.l)()], mT = [(0, zT.J)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, UT) => {
                TT.groundColor = UT
              }
            },
            metadata: MT
          }, kT, jT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, UT) => {
                TT.direction = UT
              }
            },
            metadata: MT
          }, lT, LT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      lT = !1;

    function LT() {
      lT || (lT = !0, HT.d.AddNodeConstructor("Light_Type_3", ((TT, UT) => () => new jT(TT, MT.p.Zero(), UT))), (0, kT.h)("BABYLON.HemisphericLight", jT))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
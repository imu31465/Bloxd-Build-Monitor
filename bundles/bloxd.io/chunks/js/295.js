export const id = 295;
export const ids = [295];
export const modules = {
  42623: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => mR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38233),
      ZR = GR(38204),
      qR = GR(38239),
      iR = GR(41741),
      fR = GR(41941),
      VR = GR(41701),
      KR = GR(41425),
      wR = GR(38213);
    class rR {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(RR) {
        this._zoomStopsAnimation = RR
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(RR) {
        this._idleRotationSpeed = RR
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(RR) {
        this._idleRotationWaitTime = RR
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(RR) {
        this._idleRotationSpinupTime = RR
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
      attach(RR) {
        this._attachedCamera = RR;
        const JR = this._attachedCamera.jH();
        this._onPrePointerObservableObserver = JR.onPrePointerObservable.add((RR => {
          RR.type !== VR.c.POINTERDOWN ? RR.type === VR.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = RR.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const RR = KR.b.Now;
          let JR = 0;
          null != this._lastFrameTime && (JR = RR - this._lastFrameTime), this._lastFrameTime = RR, this._applyUserInteraction();
          const GR = RR - this._lastInteractionTime - this._idleRotationWaitTime,
            yR = Math.max(Math.min(GR / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * yR, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (JR / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const RR = this._attachedCamera.jH();
        this._onPrePointerObservableObserver && RR.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(RR) {
        this._lastInteractionTime = RR ?? KR.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < wR.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let RR = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (RR = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? RR : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = KR.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    GR(42629);
    class eR {
      constructor() {
        this._easingMode = eR.EASINGMODE_EASEIN
      }
      setEasingMode(RR) {
        const JR = Math.min(Math.max(RR, 0), 2);
        this._easingMode = JR
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(RR) {
        throw new Error("You must implement this method")
      }
      ease(RR) {
        switch (this._easingMode) {
          case eR.EASINGMODE_EASEIN:
            return this.easeInCore(RR);
          case eR.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - RR)
        }
        return RR >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - RR))) + .5 : .5 * this.easeInCore(2 * RR)
      }
    }
    eR.EASINGMODE_EASEIN = 0, eR.EASINGMODE_EASEOUT = 1, eR.EASINGMODE_EASEINOUT = 2;
    var aR = GR(42635);
    class LR {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(RR) {
        if (this._autoTransitionRange === RR) return;
        this._autoTransitionRange = RR;
        const JR = this._attachedCamera;
        JR && (RR ? this._onMeshTargetChangedObserver = JR.onMeshTargetChangedObservable.add((RR => {
          if (RR && (RR.computeWorldMatrix(!0), RR.Tm)) {
            const JR = RR.Tm().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * JR, this.upperRadiusTransitionRange = .05 * JR
          }
        })) : this._onMeshTargetChangedObserver && JR.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(RR) {
        this._attachedCamera = RR, this._onAfterCheckInputsObserver = RR.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(RR) {
        return !!this._attachedCamera && (this._attachedCamera.radius === RR && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(RR) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (LR.EasingFunction.setEasingMode(LR.EasingMode), this._radiusBounceTransition = aR.d.CreateAnimation("radius", aR.d.ANIMATIONTYPE_FLOAT, 60, LR.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const JR = aR.d.TransitionTo("radius", this._attachedCamera.radius + RR, this._attachedCamera, this._attachedCamera.jH(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        JR && this._animatables.push(JR)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    LR.EasingFunction = new class extends eR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = RR
      }
      easeInCore(RR) {
        const JR = Math.max(0, this.amplitude);
        return Math.pow(RR, 3) - RR * JR * Math.sin(3.141592653589793 * RR)
      }
    }(.3), LR.EasingMode = eR.EASINGMODE_EASEOUT;
    class nR {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new uR.b, this._mode = nR.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(RR) {
        this._mode = RR
      }
      get mode() {
        return this._mode
      }
      set radiusScale(RR) {
        this._radiusScale = RR
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(RR) {
        this._positionScale = RR
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(RR) {
        this._defaultElevation = RR
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(RR) {
        this._elevationReturnTime = RR
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(RR) {
        this._elevationReturnWaitTime = RR
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(RR) {
        this._zoomStopsAnimation = RR
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(RR) {
        this._framingTime = RR
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(RR) {
        this._attachedCamera = RR;
        const JR = this._attachedCamera.jH();
        nR.EasingFunction.setEasingMode(nR.EasingMode), this._onPrePointerObservableObserver = JR.onPrePointerObservable.add((RR => {
          RR.type !== VR.c.POINTERDOWN ? RR.type === VR.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = RR.onMeshTargetChangedObservable.add((RR => {
          RR && RR.Tm && this.zoomOnMesh(RR, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = RR.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const RR = this._attachedCamera.jH();
        this._onPrePointerObservableObserver && RR.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        RR.computeWorldMatrix(!0);
        const yR = RR.Tm().boundingBox;
        this.zoomOnBoundingInfo(yR.minimumWorld, yR.maximumWorld, JR, GR)
      }
      zoomOnMeshHierarchy(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        RR.computeWorldMatrix(!0);
        const yR = RR.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(yR.min, yR.max, JR, GR)
      }
      zoomOnMeshesHierarchy(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const yR = new ZR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          tR = new ZR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let uR = 0; uR < RR.length; uR++) {
          const JR = RR[uR].getHierarchyBoundingVectors(!0);
          ZR.r.CheckExtends(JR.min, yR, tR), ZR.r.CheckExtends(JR.max, yR, tR)
        }
        this.zoomOnBoundingInfo(yR, tR, JR, GR)
      }
      zoomOnBoundingInfo(RR, JR) {
        let GR, yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const uR = RR.y,
          qR = uR + (JR.y - uR) * this._positionScale,
          iR = JR.subtract(RR).scale(.5);
        if (!isFinite(qR)) return !1;
        if (yR) GR = new ZR.r(0, qR, 0);
        else {
          const JR = RR.add(iR);
          GR = new ZR.r(JR.x, qR, JR.z)
        }
        this._vectorTransition || (this._vectorTransition = aR.d.CreateAnimation("target", aR.d.ANIMATIONTYPE_VECTOR3, 60, nR.EasingFunction)), this._betaIsAnimating = !0;
        let fR = aR.d.TransitionTo("target", GR, this._attachedCamera, this._attachedCamera.jH(), 60, this._vectorTransition, this._framingTime);
        fR && this._animatables.push(fR);
        let VR = 0;
        if (this._mode === nR.FitFrustumSidesMode) {
          const GR = this._calculateLowerRadiusFromModelBoundingSphere(RR, JR);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = iR.length() + this._attachedCamera.minZ), VR = GR
        } else this._mode === nR.IgnoreBoundsSizeMode && (VR = this._calculateLowerRadiusFromModelBoundingSphere(RR, JR), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const GR = JR.subtract(RR).length();
          this._attachedCamera.panningSensibility = 5e3 / GR, this._attachedCamera.wheelPrecision = 100 / VR
        }
        return this._radiusTransition || (this._radiusTransition = aR.d.CreateAnimation("radius", aR.d.ANIMATIONTYPE_FLOAT, 60, nR.EasingFunction)), fR = aR.d.TransitionTo("radius", VR, this._attachedCamera, this._attachedCamera.jH(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), tR && tR(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), fR && this._animatables.push(fR), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(RR, JR) {
        const GR = this._attachedCamera;
        if (!GR) return 0;
        let yR = GR._calculateLowerRadiusFromModelBoundingSphere(RR, JR, this._radiusScale);
        return GR.lowerRadiusLimit && this._mode === nR.IgnoreBoundsSizeMode && (yR = yR < GR.lowerRadiusLimit ? GR.lowerRadiusLimit : yR), GR.upperRadiusLimit && (yR = yR > GR.upperRadiusLimit ? GR.upperRadiusLimit : yR), yR
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const RR = KR.b.Now - this._lastInteractionTime,
          JR = .5 * Math.PI - this._defaultElevation,
          GR = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > GR && RR >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = aR.d.CreateAnimation("beta", aR.d.ANIMATIONTYPE_FLOAT, 60, nR.EasingFunction));
          const RR = aR.d.TransitionTo("beta", JR, this._attachedCamera, this._attachedCamera.jH(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          RR && this._animatables.push(RR)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = KR.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    nR.EasingFunction = new class extends eR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = RR
      }
      easeInCore(RR) {
        return this.exponent <= 0 ? RR : (Math.exp(this.exponent * RR) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, nR.EasingMode = eR.EASINGMODE_EASEINOUT, nR.IgnoreBoundsSizeMode = 0, nR.FitFrustumSidesMode = 1;
    var UR = GR(41732),
      WR = GR(41723),
      AR = GR(41764),
      CR = GR(41616);
    let XR = (() => {
        var RR;
        let JR, GR = [],
          uR = [];
        return RR = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, yR.m)(this, GR, [0, 1, 2]), this._pointerInput = (0, yR.m)(this, uR)
          }
          attachControl(RR) {
            RR = CR.h.BackCompatCameraNoPreventDefault(arguments);
            const JR = this.camera.ke(),
              GR = JR.getInputElement();
            let yR = 0,
              tR = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = uR => {
              const ZR = uR.event,
                qR = "touch" === ZR.pointerType;
              if (uR.type !== VR.c.POINTERMOVE && -1 === this.buttons.indexOf(ZR.button)) return;
              const iR = ZR.target;
              if (this._altKey = ZR.altKey, this._ctrlKey = ZR.ctrlKey, this._metaKey = ZR.metaKey, this._shiftKey = ZR.shiftKey, this._buttonsPressed = ZR.buttons, JR.isPointerLock) {
                const RR = ZR.movementX,
                  JR = ZR.movementY;
                this.onTouch(null, RR, JR), this._pointA = null, this._pointB = null
              } else {
                if (uR.type !== VR.c.POINTERDOWN && uR.type !== VR.c.POINTERDOUBLETAP && qR && this._pointA?.pointerId !== ZR.pointerId && this._pointB?.pointerId !== ZR.pointerId) return;
                if (uR.type !== VR.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !qR)
                  if (uR.type === VR.c.POINTERDOUBLETAP) this.onDoubleTap(ZR.pointerType, ZR);
                  else if (uR.type !== VR.c.POINTERUP || this._currentMousePointerIdDown !== ZR.pointerId && !qR) {
                  if (uR.type === VR.c.POINTERMOVE)
                    if (RR || ZR.preventDefault(), this._pointA && null === this._pointB) {
                      const RR = ZR.clientX - this._pointA.x,
                        JR = ZR.clientY - this._pointA.y;
                      this._pointA.x = ZR.clientX, this._pointA.y = ZR.clientY, this.onTouch(this._pointA, RR, JR)
                    } else if (this._pointA && this._pointB) {
                    const RR = this._pointA.pointerId === ZR.pointerId ? this._pointA : this._pointB;
                    RR.x = ZR.clientX, RR.y = ZR.clientY;
                    const JR = this._pointA.x - this._pointB.x,
                      GR = this._pointA.y - this._pointB.y,
                      qR = JR * JR + GR * GR,
                      iR = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: ZR.pointerId,
                        type: uR.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, yR, qR, tR, iR), tR = iR, yR = qR
                  }
                } else {
                  try {
                    iR?.releasePointerCapture(ZR.pointerId)
                  } catch (fR) {}
                  qR || (this._pointB = null), JR._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == ZR.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == ZR.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== yR || tR) && (this.onMultiTouch(this._pointA, this._pointB, yR, 0, tR, null), yR = 0, tR = null), this._currentMousePointerIdDown = -1, this.onButtonUp(ZR), RR || ZR.preventDefault()
                } else {
                  try {
                    iR?.setPointerCapture(ZR.pointerId)
                  } catch (fR) {}
                  if (null === this._pointA) this._pointA = {
                    x: ZR.clientX,
                    y: ZR.clientY,
                    pointerId: ZR.pointerId,
                    type: ZR.pointerType,
                    button: ZR.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: ZR.clientX,
                      y: ZR.clientY,
                      pointerId: ZR.pointerId,
                      type: ZR.pointerType,
                      button: ZR.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || qR || (this._currentMousePointerIdDown = ZR.pointerId), this.onButtonDown(ZR), RR || (ZR.preventDefault(), GR && GR.focus())
                }
              }
            }, this._observer = this.camera.jH()._inputManager._addCameraPointerObserver(this._pointerInput, VR.c.POINTERDOWN | VR.c.POINTERUP | VR.c.POINTERMOVE | VR.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, yR = 0, tR = null, this.onLostFocus()
            }, this._contextMenuBind = RR => this.onContextMenu(RR), GR && GR.addEventListener("contextmenu", this._contextMenuBind, !1);
            const uR = this.camera.jH().ke().getHostWindow();
            uR && CR.h.RegisterTopRootEvents(uR, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const RR = this.camera.jH().ke().getHostWindow();
              RR && CR.h.UnregisterTopRootEvents(RR, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.jH()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const RR = this.camera.jH().ke().getInputElement();
                RR && RR.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(RR, JR) {}
          onTouch(RR, JR, GR) {}
          onMultiTouch(RR, JR, GR, yR, tR, uR) {}
          onContextMenu(RR) {
            RR.preventDefault()
          }
          onButtonDown(RR) {}
          onButtonUp(RR) {}
          onLostFocus() {}
        }, (() => {
          const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          JR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
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
            metadata: ZR
          }, GR, uR), ZR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZR
          })
        })(), RR
      })(),
      MR = (() => {
        var RR;
        let JR, GR, uR, ZR = XR,
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        return RR = class extends ZR {
          constructor() {
            super(...arguments), this.pinchZoom = (0, yR.m)(this, qR, !0), this.multiTouchPanning = ((0, yR.m)(this, iR), (0, yR.m)(this, fR, !0)), this.multiTouchPanAndZoom = ((0, yR.m)(this, VR), (0, yR.m)(this, KR, !0)), this._isPinching = ((0, yR.m)(this, wR), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(RR, JR) {}
          _computeMultiTouchPanning(RR, JR) {}
          onMultiTouch(RR, JR, GR, yR, tR, uR) {
            0 === GR && null === tR || 0 === yR && null === uR || (this.multiTouchPanAndZoom ? (this._computePinchZoom(GR, yR), this._computeMultiTouchPanning(tR, uR)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(GR, yR), this._isPinching = !0) : this._computeMultiTouchPanning(tR, uR)) : this.multiTouchPanning ? this._computeMultiTouchPanning(tR, uR) : this.pinchZoom && this._computePinchZoom(GR, yR))
          }
          onButtonUp(RR) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: RR => "pinchZoom" in RR,
              get: RR => RR.pinchZoom,
              set: (RR, JR) => {
                RR.pinchZoom = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: RR => "multiTouchPanning" in RR,
              get: RR => RR.multiTouchPanning,
              set: (RR, JR) => {
                RR.multiTouchPanning = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, yR.l)(null, null, uR, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: RR => "multiTouchPanAndZoom" in RR,
              get: RR => RR.multiTouchPanAndZoom,
              set: (RR, JR) => {
                RR.multiTouchPanAndZoom = JR
              }
            },
            metadata: rR
          }, KR, wR), rR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          })
        })(), RR
      })(),
      BR = (() => {
        var RR;
        let JR, GR, uR, ZR, qR, iR, fR, VR = MR,
          KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [],
          nR = [],
          UR = [],
          WR = [],
          AR = [],
          CR = [],
          XR = [],
          BR = [],
          lR = [];
        return RR = class extends VR {
          constructor() {
            super(...arguments), this.buttons = (0, yR.m)(this, KR, [0, 1, 2]), this.angularSensibilityX = ((0, yR.m)(this, wR), (0, yR.m)(this, rR, 1e3)), this.angularSensibilityY = ((0, yR.m)(this, eR), (0, yR.m)(this, aR, 1e3)), this.pinchPrecision = ((0, yR.m)(this, LR), (0, yR.m)(this, nR, 12)), this.pinchDeltaPercentage = ((0, yR.m)(this, UR), (0, yR.m)(this, WR, 0)), this.useNaturalPinchZoom = ((0, yR.m)(this, AR), (0, yR.m)(this, CR, !1)), this.panningSensibility = ((0, yR.m)(this, XR), (0, yR.m)(this, BR, 1e3)), this.pinchInwards = ((0, yR.m)(this, lR), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(RR, JR) {
            if (RR && JR) {
              const GR = JR.x - RR.x,
                yR = JR.y - RR.y,
                tR = this.camera.movement.input.getEntry("pointer", "pan"),
                uR = tR?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== uR && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -GR * uR, this.camera.movement.panAccumulatedPixels.y += yR * uR)
            }
          }
          _computePinchZoom(JR, GR) {
            const yR = this.camera.radius || RR.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = yR * Math.sqrt(JR) / Math.sqrt(GR);
            else if (this.pinchDeltaPercentage) {
              const RR = .001 * (GR - JR) * yR * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += RR
            } else {
              const RR = (GR - JR) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += RR
            }
          }
          onTouch(RR, JR, GR) {
            const yR = this._activeEntry ?? (this.camera.ke().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (yR)
              if ("pan" === yR.interaction) {
                const RR = yR.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== RR && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -JR * RR, this.camera.movement.panAccumulatedPixels.y += GR * RR)
              } else if ("rotate" === yR.interaction) {
              const RR = yR.W9 ?? yR.sensitivity ?? 1 / this.angularSensibilityX,
                tR = yR.N9 ?? yR.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -JR * RR, this.camera.movement.rotationAccumulatedPixels.y += -GR * tR
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(RR, JR, GR, yR, tR, uR) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(yR) - Math.sqrt(GR)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(RR, JR, GR, yR, tR, uR)
          }
          onButtonDown(RR) {
            this._pointerConditions.button = RR.button, this._pointerModifiers.ctrl = RR.ctrlKey, this._pointerModifiers.alt = RR.altKey, this._pointerModifiers.shift = RR.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(RR)
          }
          onButtonUp(RR) {
            this._activeEntry = null, super.onButtonUp(RR)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const MR = "function" === typeof Symbol && Symbol.metadata ? Object.create(VR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], ZR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
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
            metadata: MR
          }, KR, wR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: RR => "angularSensibilityX" in RR,
              get: RR => RR.angularSensibilityX,
              set: (RR, JR) => {
                RR.angularSensibilityX = JR
              }
            },
            metadata: MR
          }, rR, eR), (0, yR.l)(null, null, uR, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: RR => "angularSensibilityY" in RR,
              get: RR => RR.angularSensibilityY,
              set: (RR, JR) => {
                RR.angularSensibilityY = JR
              }
            },
            metadata: MR
          }, aR, LR), (0, yR.l)(null, null, ZR, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: RR => "pinchPrecision" in RR,
              get: RR => RR.pinchPrecision,
              set: (RR, JR) => {
                RR.pinchPrecision = JR
              }
            },
            metadata: MR
          }, nR, UR), (0, yR.l)(null, null, qR, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: RR => "pinchDeltaPercentage" in RR,
              get: RR => RR.pinchDeltaPercentage,
              set: (RR, JR) => {
                RR.pinchDeltaPercentage = JR
              }
            },
            metadata: MR
          }, WR, AR), (0, yR.l)(null, null, iR, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: RR => "useNaturalPinchZoom" in RR,
              get: RR => RR.useNaturalPinchZoom,
              set: (RR, JR) => {
                RR.useNaturalPinchZoom = JR
              }
            },
            metadata: MR
          }, CR, XR), (0, yR.l)(null, null, fR, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: RR => "panningSensibility" in RR,
              get: RR => RR.panningSensibility,
              set: (RR, JR) => {
                RR.panningSensibility = JR
              }
            },
            metadata: MR
          }, BR, lR), MR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MR
          })
        })(), RR.MinimumRadiusForPinch = .001, RR
      })();
    AR.e.ArcRotateCameraPointersInput = BR;
    var lR = GR(41705);
    let pR = (() => {
      var RR;
      let JR, GR, uR, qR, iR, fR, VR, KR, wR, rR, eR, aR = [],
        LR = [],
        nR = [],
        UR = [],
        WR = [],
        AR = [],
        XR = [],
        MR = [],
        BR = [],
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
        PR = [];
      return RR = class {
        constructor() {
          this.camera = (0, yR.m)(this, aR), this.keysUp = (0, yR.m)(this, LR, [38]), this.keysDown = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, [40])), this.keysLeft = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, [37])), this.keysRight = ((0, yR.m)(this, XR), (0, yR.m)(this, MR, [39])), this.keysReset = ((0, yR.m)(this, BR), (0, yR.m)(this, pR, [220])), this.keysZoomIn = ((0, yR.m)(this, gR), (0, yR.m)(this, bR, [187, 107])), this.keysZoomOut = ((0, yR.m)(this, vR), (0, yR.m)(this, OR, [189, 109])), this.panningSensibility = ((0, yR.m)(this, xR), (0, yR.m)(this, NR, 50)), this.zoomingSensibility = ((0, yR.m)(this, DR), (0, yR.m)(this, HR, 25)), this.angularSpeed = ((0, yR.m)(this, oR), (0, yR.m)(this, cR, .01)), this._useAltToZoom = ((0, yR.m)(this, PR), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new ZR.n, this._panDirection = new ZR.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(RR) {
          this._useAltToZoom = RR, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const RR = this.camera.movement.input,
            JR = RR.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && JR ? RR.inputMap.splice(RR.inputMap.indexOf(JR), 1) : this._useAltToZoom && !JR && RR.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(RR) {
          RR = CR.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.jH(), this._engine = this._scene.ke(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((JR => {
            const GR = JR.event;
            if (!GR.metaKey)
              if (JR.type === lR.b.KEYDOWN) {
                if (this._ctrlPressed = GR.ctrlKey, this._altPressed = GR.altKey, -1 !== this.keysUp.indexOf(GR.keyCode) || -1 !== this.keysDown.indexOf(GR.keyCode) || -1 !== this.keysLeft.indexOf(GR.keyCode) || -1 !== this.keysRight.indexOf(GR.keyCode) || -1 !== this.keysReset.indexOf(GR.keyCode) || -1 !== this.keysZoomIn.indexOf(GR.keyCode) || -1 !== this.keysZoomOut.indexOf(GR.keyCode)) {
                  -1 === this._keys.indexOf(GR.keyCode) && this._keys.push(GR.keyCode), GR.preventDefault && (RR || GR.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(GR.keyCode) || -1 !== this.keysDown.indexOf(GR.keyCode) || -1 !== this.keysLeft.indexOf(GR.keyCode) || -1 !== this.keysRight.indexOf(GR.keyCode) || -1 !== this.keysReset.indexOf(GR.keyCode) || -1 !== this.keysZoomIn.indexOf(GR.keyCode) || -1 !== this.keysZoomOut.indexOf(GR.keyCode)) {
              const JR = this._keys.indexOf(GR.keyCode);
              JR >= 0 && this._keys.splice(JR, 1), GR.preventDefault && (RR || GR.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const RR = this.camera,
              JR = RR.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const GR = this._rotateDirection.set(0, 0),
              yR = this._panDirection.set(0, 0);
            let tR = 0,
              uR = 0;
            for (let ZR = 0; ZR < this._keys.length; ZR++) {
              const qR = this._keys[ZR];
              if (this._keyboardConditions.key = qR, -1 === this.keysReset.indexOf(qR)) {
                const RR = JR.resolveInteraction("keyboard", this._keyboardConditions);
                if (RR)
                  if ("pan" === RR.interaction) uR = Math.max(uR, RR.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(qR) ? yR.x -= 1 : -1 !== this.keysRight.indexOf(qR) ? yR.x += 1 : -1 !== this.keysUp.indexOf(qR) ? yR.y += 1 : -1 !== this.keysDown.indexOf(qR) && (yR.y -= 1);
                  else if ("zoom" === RR.interaction) {
                  const GR = RR.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(qR) || -1 !== this.keysZoomIn.indexOf(qR) ? JR.handlers.zoom(GR) : -1 === this.keysDown.indexOf(qR) && -1 === this.keysZoomOut.indexOf(qR) || JR.handlers.zoom(-GR)
                } else "rotate" === RR.interaction && (tR = Math.max(tR, RR.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(qR) ? GR.x -= 1 : -1 !== this.keysRight.indexOf(qR) ? GR.x += 1 : -1 !== this.keysUp.indexOf(qR) ? GR.y -= 1 : -1 !== this.keysDown.indexOf(qR) && (GR.y += 1))
              } - 1 !== this.keysReset.indexOf(qR) && RR.useInputToRestoreState && RR.restoreState()
            }
            0 === GR.x && 0 === GR.y || (GR.normalize().scaleInPlace(tR), JR.handlers.rotate(GR.x, GR.y)), 0 === yR.x && 0 === yR.y || (yR.normalize().scaleInPlace(uR), JR.handlers.pan(yR.x, yR.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], (0, yR.l)(RR, null, eR, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAltToZoom" in RR,
            get: RR => RR.useAltToZoom
          },
          metadata: ZR
        }, null, aR), (0, yR.l)(null, null, JR, {
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
          metadata: ZR
        }, LR, nR), (0, yR.l)(null, null, GR, {
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
          metadata: ZR
        }, UR, WR), (0, yR.l)(null, null, uR, {
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
          metadata: ZR
        }, AR, XR), (0, yR.l)(null, null, qR, {
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
          metadata: ZR
        }, MR, BR), (0, yR.l)(null, null, iR, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysReset" in RR,
            get: RR => RR.keysReset,
            set: (RR, JR) => {
              RR.keysReset = JR
            }
          },
          metadata: ZR
        }, pR, gR), (0, yR.l)(null, null, fR, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysZoomIn" in RR,
            get: RR => RR.keysZoomIn,
            set: (RR, JR) => {
              RR.keysZoomIn = JR
            }
          },
          metadata: ZR
        }, bR, vR), (0, yR.l)(null, null, VR, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: RR => "keysZoomOut" in RR,
            get: RR => RR.keysZoomOut,
            set: (RR, JR) => {
              RR.keysZoomOut = JR
            }
          },
          metadata: ZR
        }, OR, xR), (0, yR.l)(null, null, KR, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: RR => "panningSensibility" in RR,
            get: RR => RR.panningSensibility,
            set: (RR, JR) => {
              RR.panningSensibility = JR
            }
          },
          metadata: ZR
        }, NR, DR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: RR => "zoomingSensibility" in RR,
            get: RR => RR.zoomingSensibility,
            set: (RR, JR) => {
              RR.zoomingSensibility = JR
            }
          },
          metadata: ZR
        }, HR, oR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: RR => "angularSpeed" in RR,
            get: RR => RR.angularSpeed,
            set: (RR, JR) => {
              RR.angularSpeed = JR
            }
          },
          metadata: ZR
        }, cR, PR), ZR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZR
        })
      })(), RR
    })();
    AR.e.ArcRotateCameraKeyboardMoveInput = pR;
    var gR = GR(38933),
      bR = GR(41707);
    let vR = (() => {
      var RR;
      let JR, GR, uR, iR = [],
        fR = [],
        KR = [],
        rR = [],
        eR = [],
        aR = [];
      return RR = class {
        constructor() {
          this.wheelPrecision = (0, yR.m)(this, iR, 3), this.zoomToMouseLocation = ((0, yR.m)(this, fR), (0, yR.m)(this, KR, !1)), this.wheelDeltaPercentage = ((0, yR.m)(this, rR), (0, yR.m)(this, eR, 0)), this.customComputeDeltaFromMouseWheel = ((0, yR.m)(this, aR), null), this._viewOffset = new ZR.r(0, 0, 0), this._globalOffset = new ZR.r(0, 0, 0), this._inertialPanning = ZR.r.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(RR, JR) {
          let GR;
          const yR = .01 * RR * this.wheelDeltaPercentage * JR;
          return GR = RR > 0 ? yR / (1 + this.wheelDeltaPercentage) : yR * (1 + this.wheelDeltaPercentage), GR
        }
        attachControl(RR) {
          RR = CR.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = JR => {
            if (JR.type !== VR.c.POINTERWHEEL) return;
            const GR = JR.event;
            let yR;
            const tR = GR.deltaMode === bR.c.DOM_DELTA_LINE ? 40 : 1,
              uR = -GR.deltaY * tR;
            if (this.customComputeDeltaFromMouseWheel) yR = this.customComputeDeltaFromMouseWheel(uR, this, GR);
            else if (this.wheelDeltaPercentage) {
              if (yR = this._computeDeltaFromMouseWheelLegacyEvent(uR, this.camera.radius), yR > 0) {
                const RR = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let JR = this.camera.radius,
                  GR = RR + yR;
                for (let yR = 0; yR < 20 && !(JR <= GR) && !(Math.abs(GR * this.camera.inertia) < .001); yR++) JR -= GR, GR *= this.camera.inertia;
                JR = (0, qR.Clamp)(JR, 0, Number.MAX_VALUE), yR = this._computeDeltaFromMouseWheelLegacyEvent(uR, JR)
              }
            } else {
              const RR = this.camera.movement.input.getEntry("wheel", "zoom");
              yR = uR * (RR?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            yR && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(yR)) : this.camera.movement.zoomAccumulatedPixels += yR), GR.preventDefault && (RR || GR.preventDefault())
          }, this._observer = this.camera.jH()._inputManager._addCameraPointerObserver(this._wheel, VR.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.NRR(0)
        }
        detachControl() {
          this._observer && (this.camera.jH()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const RR = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(RR.inertialAlphaOffset) + Math.abs(RR.inertialBetaOffset) + Math.abs(RR.inertialRadiusOffset)) {
            this._updateHitPlane(), RR.target.addInPlace(this._inertialPanning), RR.radius -= this._zoomToMouseRadiusOffset;
            const JR = RR.movement.getFrameIndependentDecay(RR.inertia);
            this._inertialPanning.scaleInPlace(JR), this._zoomToMouseRadiusOffset *= JR, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < wR.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const RR = this.camera,
            JR = RR.target.subtract(RR.position);
          this._hitPlane = gR.c.FromPositionAndNormal(RR.target, JR)
        }
        _getPosition() {
          const RR = this.camera,
            JR = RR.jH(),
            GR = JR.createPickingRay(JR.pointerX, JR.pointerY, ZR.e.Identity(), RR, !1);
          0 === RR.targetScreenOffset.x && 0 === RR.targetScreenOffset.y || (this._viewOffset.set(RR.targetScreenOffset.x, RR.targetScreenOffset.y, 0), RR.getViewMatrix().invertToRef(RR._cameraTransformMatrix), this._globalOffset = ZR.r.TransformNormal(this._viewOffset, RR._cameraTransformMatrix), GR.origin.addInPlace(this._globalOffset));
          let yR = 0;
          return this._hitPlane && (yR = GR.intersectsPlane(this._hitPlane) ?? 0), GR.origin.addInPlace(GR.direction.scaleInPlace(yR))
        }
        _zoomToMouse(RR) {
          const JR = this.camera,
            GR = 1 - JR.inertia,
            yR = JR.movement.getFrameIndependentInputScale(JR.inertia);
          if (JR.lowerRadiusLimit) {
            const tR = JR.lowerRadiusLimit ?? 0;
            JR.radius - (this._zoomToMouseRadiusOffset + RR * yR) / GR < tR && (RR = ((JR.radius - tR) * GR - this._zoomToMouseRadiusOffset) / yR)
          }
          if (JR.upperRadiusLimit) {
            const tR = JR.upperRadiusLimit ?? 0;
            JR.radius - (this._zoomToMouseRadiusOffset + RR * yR) / GR > tR && (RR = ((JR.radius - tR) * GR - this._zoomToMouseRadiusOffset) / yR)
          }
          const tR = RR / GR / JR.radius,
            uR = this._getPosition(),
            qR = ZR.l.Fe[6];
          uR.subtractToRef(JR.target, qR), qR.scaleInPlace(tR), qR.scaleInPlace(GR), qR.scaleInPlace(yR), this._inertialPanning.addInPlace(qR), this._zoomToMouseRadiusOffset += RR * yR
        }
        _zeroIfClose(RR) {
          Math.abs(RR.x) < wR.c && (RR.x = 0), Math.abs(RR.y) < wR.c && (RR.y = 0), Math.abs(RR.z) < wR.c && (RR.z = 0)
        }
      }, (() => {
        const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelPrecision" in RR,
            get: RR => RR.wheelPrecision,
            set: (RR, JR) => {
              RR.wheelPrecision = JR
            }
          },
          metadata: ZR
        }, iR, fR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: RR => "zoomToMouseLocation" in RR,
            get: RR => RR.zoomToMouseLocation,
            set: (RR, JR) => {
              RR.zoomToMouseLocation = JR
            }
          },
          metadata: ZR
        }, KR, rR), (0, yR.l)(null, null, uR, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: RR => "wheelDeltaPercentage" in RR,
            get: RR => RR.wheelDeltaPercentage,
            set: (RR, JR) => {
              RR.wheelDeltaPercentage = JR
            }
          },
          metadata: ZR
        }, eR, aR), ZR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZR
        })
      })(), RR
    })();
    AR.e.ArcRotateCameraMouseWheelInput = vR;
    var OR, xR, NR = GR(41407);
    class DR extends AR.i {
      constructor(RR) {
        super(RR)
      }
      addMouseWheel() {
        return this.add(new vR), this
      }
      addPointers() {
        return this.add(new BR), this
      }
      addKeyboard() {
        return this.add(new pR), this
      }
    }(OR = DR.prototype).addVRDeviceOrientation ?? (OR.addVRDeviceOrientation = (0, NR.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (xR = DR.prototype).addGamepad ?? (xR.addGamepad = (0, NR.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var HR = GR(38253),
      oR = GR(41751),
      cR = GR(41755);
    class PR extends oR.d {
      constructor(RR, JR, GR) {
        super(RR, JR, GR), this.input = new cR.b({
          pan: (RR, JR) => {
            this.panAccumulatedPixels.x += RR, this.panAccumulatedPixels.y += JR
          },
          rotate: (RR, JR) => {
            this.rotationAccumulatedPixels.x += RR, this.rotationAccumulatedPixels.y += JR
          },
          zoom: RR => {
            this.zoomAccumulatedPixels += RR
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

    function IR(RR, JR) {
      return isNaN(RR) ? JR : RR
    }
    let mR = (() => {
        var RR;
        let JR, GR, iR, VR, KR, eR, aR, AR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, HR, oR, cR, mR, zR, SR, jR, dR, ER, YR = WR.f,
          kR = [],
          QR = [],
          FR = [],
          TR = [],
          sR = [],
          hR = [],
          RJ = [],
          JJ = [],
          GJ = [],
          yJ = [],
          tJ = [],
          uJ = [],
          ZJ = [],
          qJ = [],
          iJ = [],
          fJ = [],
          VJ = [],
          KJ = [],
          wJ = [],
          rJ = [],
          eJ = [],
          aJ = [],
          LJ = [],
          nJ = [],
          UJ = [],
          WJ = [],
          AJ = [],
          CJ = [],
          XJ = [],
          MJ = [],
          BJ = [],
          lJ = [],
          pJ = [],
          gJ = [],
          bJ = [],
          vJ = [],
          OJ = [],
          xJ = [],
          NJ = [],
          DJ = [],
          HJ = [],
          oJ = [],
          cJ = [],
          PJ = [],
          IJ = [],
          mJ = [],
          zJ = [];
        return RR = class extends YR {
          get target() {
            return this.bK
          }
          set target(RR) {
            this.setTarget(RR)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(RR) {
            RR && this.setTarget(RR)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(RR) {
            this.setPosition(RR)
          }
          set upVector(RR) {
            this._upToYMatrix || (this._yToUpMatrix = new ZR.e, this._upToYMatrix = new ZR.e, this._upVector = ZR.r.Zero()), RR.normalize(), this._upVector.vN(RR), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            ZR.e.RotationAlignToRef(ZR.r.UpReadOnly, this._upVector, this._yToUpMatrix), ZR.e.RotationAlignToRef(this._upVector, ZR.r.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const RR = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(RR) < this._rotationEpsilon ? 0 : RR
          }
          set inertialAlphaOffset(RR) {
            this._inertialAlphaOffset = RR, 0 === RR && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const RR = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(RR) < this._rotationEpsilon ? 0 : RR
          }
          set inertialBetaOffset(RR) {
            this._inertialBetaOffset = RR, 0 === RR && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const RR = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(RR) < this._rotationEpsilon ? 0 : RR
          }
          set inertialRadiusOffset(RR) {
            this._inertialRadiusOffset = RR, 0 === RR && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(RR) {
            this._panningInertia = RR, this.movement && (this.movement.panInertia = RR)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(RR) {
            this._inertia = RR, this.movement && (this.movement.rotationInertia = RR, this.movement.zoomInertia = RR)
          }
          get angularSensibilityX() {
            const RR = this.inputs.attached.pointers;
            return RR ? RR.angularSensibilityX : 0
          }
          set angularSensibilityX(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.angularSensibilityX = RR)
          }
          get angularSensibilityY() {
            const RR = this.inputs.attached.pointers;
            return RR ? RR.angularSensibilityY : 0
          }
          set angularSensibilityY(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.angularSensibilityY = RR)
          }
          get pinchPrecision() {
            const RR = this.inputs.attached.pointers;
            return RR ? RR.pinchPrecision : 0
          }
          set pinchPrecision(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.pinchPrecision = RR)
          }
          get pinchDeltaPercentage() {
            const RR = this.inputs.attached.pointers;
            return RR ? RR.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.pinchDeltaPercentage = RR)
          }
          get useNaturalPinchZoom() {
            const RR = this.inputs.attached.pointers;
            return !!RR && RR.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.useNaturalPinchZoom = RR)
          }
          get panningSensibility() {
            const RR = this.inputs.attached.pointers;
            return RR ? RR.panningSensibility : 0
          }
          set panningSensibility(RR) {
            const JR = this.inputs.attached.pointers;
            JR && (JR.panningSensibility = RR)
          }
          get keysUp() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysUp : []
          }
          set keysUp(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysUp = RR)
          }
          get keysDown() {
            const RR = this.inputs.attached.keyboard;
            return RR ? RR.keysDown : []
          }
          set keysDown(RR) {
            const JR = this.inputs.attached.keyboard;
            JR && (JR.keysDown = RR)
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
          get wheelPrecision() {
            const RR = this.inputs.attached.mousewheel;
            return RR ? RR.wheelPrecision : 0
          }
          set wheelPrecision(RR) {
            const JR = this.inputs.attached.mousewheel;
            JR && (JR.wheelPrecision = RR)
          }
          get zoomToMouseLocation() {
            const RR = this.inputs.attached.mousewheel;
            return !!RR && RR.zoomToMouseLocation
          }
          set zoomToMouseLocation(RR) {
            const JR = this.inputs.attached.mousewheel;
            JR && (JR.zoomToMouseLocation = RR)
          }
          get wheelDeltaPercentage() {
            const RR = this.inputs.attached.mousewheel;
            return RR ? RR.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(RR) {
            const JR = this.inputs.attached.mousewheel;
            JR && (JR.wheelDeltaPercentage = RR)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(RR) {
            this._useCtrlForPanningInternal = RR;
            const JR = this.movement.input,
              GR = JR.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !RR && GR ? JR.inputMap.splice(JR.inputMap.indexOf(GR), 1) : RR && !GR && JR.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const yR = JR.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !RR && yR ? JR.inputMap.splice(JR.inputMap.indexOf(yR), 1) : RR && !yR && JR.addEntry({
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
          set _panningMouseButton(RR) {
            this._panningMouseButtonInternal = RR;
            const JR = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            JR && (JR.button = RR)
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
          set useBouncingBehavior(RR) {
            RR !== this.useBouncingBehavior && (RR ? (this._bouncingBehavior = new LR, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(RR) {
            RR !== this.useFramingBehavior && (RR ? (this._framingBehavior = new nR, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(RR) {
            RR !== this.useAutoRotationBehavior && (RR ? (this._autoRotationBehavior = new rR, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(RR, JR, GR, tR, qR, iR) {
            var fR;
            let VR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(RR, ZR.r.Zero(), iR, VR), fR = this, this.alpha = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, void 0)), this.beta = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, void 0)), this.radius = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, void 0)), this.overrideCloneAlphaBetaRadius = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, void 0)), this.bK = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, void 0)), this._targetHost = ((0, yR.m)(this, tJ), (0, yR.m)(this, uJ, void 0)), this._upToYMatrix = (0, yR.m)(this, ZJ), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, yR.m)(this, qJ, null), this.upperAlphaLimit = ((0, yR.m)(this, iJ), (0, yR.m)(this, fJ, null)), this.lowerBetaLimit = ((0, yR.m)(this, VJ), (0, yR.m)(this, KJ, .01)), this.upperBetaLimit = ((0, yR.m)(this, wJ), (0, yR.m)(this, rJ, Math.PI - .01)), this.lowerRadiusLimit = ((0, yR.m)(this, eJ), (0, yR.m)(this, aJ, null)), this.upperRadiusLimit = ((0, yR.m)(this, LJ), (0, yR.m)(this, nJ, null)), this.lowerTargetYLimit = ((0, yR.m)(this, UJ), (0, yR.m)(this, WJ, -1 / 0)), this.inertialPanningX = ((0, yR.m)(this, AJ), (0, yR.m)(this, CJ, 0)), this.inertialPanningY = ((0, yR.m)(this, XJ), (0, yR.m)(this, MJ, 0)), this.pinchToPanMaxDistance = ((0, yR.m)(this, BJ), (0, yR.m)(this, lJ, 20)), this.panningDistanceLimit = ((0, yR.m)(this, pJ), (0, yR.m)(this, gJ, null)), this.panningOriginTarget = ((0, yR.m)(this, bJ), (0, yR.m)(this, vJ, ZR.r.Zero())), this._panningInertia = ((0, yR.m)(this, OJ), .9), this._inertia = .9, this.zoomOnFactor = (0, yR.m)(this, xJ, 1), this.targetScreenOffset = ((0, yR.m)(this, NJ), (0, yR.m)(this, DJ, ZR.n.Zero())), this.allowUpsideDown = ((0, yR.m)(this, HJ), (0, yR.m)(this, oJ, !0)), this.useInputToRestoreState = ((0, yR.m)(this, cJ), (0, yR.m)(this, PJ, !0)), this.restoreStateInterpolationFactor = ((0, yR.m)(this, IJ), (0, yR.m)(this, mJ, 0)), this._currentInterpolationFactor = ((0, yR.m)(this, zJ), 0), this._viewMatrix = new ZR.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new ZR.r(1, 1, 0), this._transformedDirection = new ZR.r, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new uR.b, this.checkCollisions = !1, this.collisionRadius = new ZR.r(.5, .5, .5), this._previousPosition = ZR.r.Zero(), this._collisionVelocity = ZR.r.Zero(), this._newPosition = ZR.r.Zero(), this._computationVector = ZR.r.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new ZR.r(NaN, NaN, NaN), this._goalTargetScreenOffset = new ZR.n(NaN, NaN), this._onCollisionPositionChange = function(RR, JR) {
              let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              GR ? (fR.setPosition(JR), fR.Pw && fR.Pw(GR)) : fR._previousPosition.vN(fR._position);
              const yR = Math.cos(fR.alpha),
                tR = Math.sin(fR.alpha),
                uR = Math.cos(fR.beta);
              let ZR = Math.sin(fR.beta);
              0 === ZR && (ZR = 1e-4);
              const qR = fR._getTargetPosition();
              fR._computationVector.VJR(fR.radius * yR * ZR, fR.radius * uR, fR.radius * tR * ZR), qR.addToRef(fR._computationVector, fR._newPosition), fR._position.vN(fR._newPosition);
              let iR = fR.upVector;
              fR.allowUpsideDown && fR.beta < 0 && (iR = iR.clone(), iR = iR.Re()), fR._computeViewMatrix(fR._position, qR, iR), fR._viewMatrix.addAtIndex(12, fR.targetScreenOffset.x), fR._viewMatrix.addAtIndex(13, fR.targetScreenOffset.y), fR._collisionTriggered = !1
            }, this.bK = ZR.r.Zero(), qR && this.setTarget(qR), this.alpha = JR, this.beta = GR, this.radius = tR, this.getViewMatrix(), this.inputs = new DR(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new PR(this.jH(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.bK = new ZR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = ZR.n.Zero()
          }
          _updateCache(RR) {
            RR || super._updateCache(), this._cache.bK.vN(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.vN(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const RR = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? RR.addToRef(this._targetBoundingCenter, this.bK) : this.bK.vN(RR)
            }
            const RR = this._getLockedTargetPosition();
            return RR || this.bK
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > wR.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              uR = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != uR ? this._currentInterpolationFactor = uR : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = IR(RR, this._goalAlpha), this._goalBeta = IR(JR, this._goalBeta), this._goalRadius = IR(GR, this._goalRadius), this._goalTarget.set(IR(yR.x, this._goalTarget.x), IR(yR.y, this._goalTarget.y), IR(yR.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(IR(tR.x, this._goalTargetScreenOffset.x), IR(tR.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, qR.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, qR.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, qR.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, qR.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.bK.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(RR, JR) {
            let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const tR = arguments;
            JR = CR.h.BackCompatCameraNoPreventDefault(tR), this._useCtrlForPanning = GR, this._panningMouseButton = yR, "boolean" === typeof tR[0] && (tR.length > 1 && (this._useCtrlForPanning = tR[1]), tR.length > 2 && (this._panningMouseButton = tR[2])), this.inputs.attachElement(JR), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(RR, JR, GR) {
            const yR = this.invertRotation ? -1 : 1;
            let tR = RR * this._calculateHandednessMultiplier();
            this.beta < 0 && (tR *= -1), this.alpha += tR * yR, this.beta += JR * yR, this.radius -= GR
          }
          _applyPanDelta(RR, JR) {
            const GR = ZR.l.Fe[0].VJR(RR, JR, JR);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), GR.multiplyInPlace(this.panningAxis), ZR.r.TransformNormalToRef(GR, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const RR = this.upVector,
                JR = ZR.r.CrossToRef(this._transformedDirection, RR, this._transformedDirection);
              ZR.r.CrossToRef(RR, JR, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.bK);
                ZR.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bK.vN(this._transformedDirection)
              } else {
                if (this.parent) {
                  const RR = ZR.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(RR), RR.transposeToRef(RR), ZR.r.TransformCoordinatesToRef(this._transformedDirection, RR, this._transformedDirection)
                }
                this.bK.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let RR = !1;
            this.movement.computeCurrentFrameDeltas();
            const JR = this.movement.rotationDeltaCurrentFrame,
              GR = this.movement.zoomDeltaCurrentFrame,
              yR = this.movement.panDeltaCurrentFrame;
            if (0 === JR.x && 0 === JR.y && 0 === GR && 0 === yR.x && 0 === yR.y || (RR = !0, 0 === JR.x && 0 === JR.y && 0 === GR || this._applyRotationAndZoomDelta(JR.x, JR.y, GR), 0 === yR.x && 0 === yR.y || this._applyPanDelta(yR.x, yR.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), RR = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const JR = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < JR && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < JR && (this.inertialPanningY = 0), RR = !0
            }
            if (RR) this.stopInterpolation();
            else if (this._isInterpolating) {
              let RR = !1;
              const JR = this._scene.ke().getDeltaTime() / 1e3,
                GR = 1 - Math.pow(2, -JR / this._currentInterpolationFactor),
                yR = IR(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const JR = ZR.l.Fe[0].set(IR(this._goalTarget.x, this.bK.x), IR(this._goalTarget.y, this.bK.y), IR(this._goalTarget.z, this.bK.z));
                ZR.r.LerpToRef(this.target, JR, GR, this.bK), 10 * ZR.r.Distance(this.target, JR) / yR < wR.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.vN(JR), this.setTarget(this.target, !1, !0, !0)) : RR = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const JR = ZR.i.RotationAlphaBetaGammaToRef(IR(this._goalAlpha, this.alpha), IR(this._goalBeta, this.beta), 0, ZR.l.Quaternion[0]),
                  yR = ZR.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, ZR.l.Quaternion[1]),
                  tR = ZR.i.SlerpToRef(yR, JR, GR, ZR.l.Quaternion[2]);
                tR.normalize();
                const uR = tR.toAlphaBetaGammaToRef(ZR.l.Fe[0]);
                if (this.alpha = uR.x, this.beta = uR.y, tR.isApprox(JR, wR.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const RR = JR.toAlphaBetaGammaToRef(ZR.l.Fe[0]);
                  this.alpha = RR.x, this.beta = RR.y
                } else RR = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (yR - this.radius) * GR, Math.abs(yR / this.radius - 1) < wR.c ? (this._goalRadius = NaN, this.radius = yR) : RR = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const JR = ZR.l.Vector2[0].set(IR(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), IR(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                ZR.n.LerpToRef(this.targetScreenOffset, JR, GR, this.targetScreenOffset), ZR.n.Distance(this.targetScreenOffset, JR) < wR.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.vN(JR)) : RR = !0
              }
              this._isInterpolating = RR
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || ZR.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const RR = this.alpha;
            var JR, GR;
            this.alpha = function(RR) {
              let JR = Math.PI / 2;
              return 0 === RR.x && 0 === RR.z || (JR = Math.acos(RR.x / Math.sqrt(Math.pow(RR.x, 2) + Math.pow(RR.z, 2)))), RR.z < 0 && (JR = 2 * Math.PI - JR), JR
            }(this._computationVector), this.beta = (JR = this._computationVector.y, GR = this.radius, Math.acos(JR / GR));
            const yR = Math.round((RR - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * yR * Math.PI, this._checkLimits()
          }
          setPosition(RR) {
            this._position.equals(RR) || (this._position.vN(RR), this.rebuildAnglesAndRadius())
          }
          setTarget(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (yR = this.overrideCloneAlphaBetaRadius ?? yR, RR.computeWorldMatrix) JR && RR.Tm ? this._targetBoundingCenter = RR.Tm().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, RR.computeWorldMatrix(), this._targetHost = RR, this.bK = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const JR = RR,
                yR = this._getTargetPosition();
              if (yR && !GR && yR.equals(JR)) return;
              this._targetHost = null, this.bK = JR, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            yR || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const RR = Math.cos(this.alpha),
              JR = Math.sin(this.alpha),
              GR = Math.cos(this.beta);
            let yR = Math.sin(this.beta);
            0 === yR && (yR = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const tR = this._getTargetPosition();
            if (this._computationVector.VJR(this.radius * RR * yR, this.radius * GR, this.radius * JR * yR), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || ZR.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), tR.addToRef(this._computationVector, this._newPosition), this.jH().collisionsEnabled && this.checkCollisions) {
              const RR = this.jH().collisionCoordinator;
              this._collider || (this._collider = RR.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, RR.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.vN(this._newPosition);
              let RR = this.upVector;
              this.allowUpsideDown && yR < 0 && (RR = RR.Re()), this._computeViewMatrix(this._position, tR, RR), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.vN(tR), this._viewMatrix
          }
          zoomOn(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            RR = RR || this.jH().meshes;
            const GR = fR.e.MinMax(RR);
            let yR = this._calculateLowerRadiusFromModelBoundingSphere(GR.min, GR.max);
            if (yR = Math.max(Math.min(yR, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = yR * this.zoomOnFactor, this.mode === UR.b.ORTHOGRAPHIC_CAMERA) {
              const RR = this.jH().ke().getAspectRatio(this),
                JR = yR * this.zoomOnFactor / 2;
              this.orthoLeft = -JR * RR, this.orthoRight = JR * RR, this.orthoBottom = -JR, this.orthoTop = JR
            }
            this.focusOn({
              min: GR.min,
              max: GR.max,
              distance: yR
            }, JR)
          }
          focusOn(RR) {
            let JR, GR, yR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === RR.min) {
              const yR = RR || this.jH().meshes;
              JR = fR.e.MinMax(yR), GR = ZR.r.Distance(JR.min, JR.max)
            } else {
              JR = RR, GR = RR.distance
            }
            this.bK = fR.e.Center(JR), yR || (this.maxZ = 2 * GR)
          }
          createRigCamera(JR, GR) {
            let yR = 0;
            switch (this.cameraRigMode) {
              case UR.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case UR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case UR.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case UR.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case UR.b.RIG_MODE_VR:
                yR = this._cameraRigParams.stereoHalfAngle * (0 === GR ? 1 : -1);
                break;
              case UR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                yR = this._cameraRigParams.stereoHalfAngle * (0 === GR ? -1 : 1)
            }
            const tR = new RR(JR, this.alpha + yR, this.beta, this.radius, this.bK, this.jH());
            return tR._cameraRigParams = {}, tR.isRigCamera = !0, tR.rigParent = this, tR.upVector = this.upVector, tR.mode = this.mode, tR.orthoLeft = this.orthoLeft, tR.orthoRight = this.orthoRight, tR.orthoBottom = this.orthoBottom, tR.orthoTop = this.orthoTop, tR
          }
          _updateRigCameras() {
            const RR = this._rigCameras[0],
              JR = this._rigCameras[1];
            switch (RR.beta = JR.beta = this.beta, this.cameraRigMode) {
              case UR.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case UR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case UR.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case UR.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case UR.b.RIG_MODE_VR:
                RR.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, JR.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case UR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                RR.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, JR.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const yR = ZR.r.Distance(RR, JR),
              tR = this.jH().ke().getAspectRatio(this),
              uR = Math.tan(this.fov / 2),
              qR = uR * tR,
              iR = .5 * yR * GR,
              fR = iR * Math.sqrt(1 + 1 / (qR * qR)),
              VR = iR * Math.sqrt(1 + 1 / (uR * uR));
            return Math.max(fR, VR)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(YR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], iR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.G)("target")], eR = [(0, tR.x)("targetHost")], aR = [(0, tR.H)()], AR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.H)()], BR = [(0, tR.H)()], lR = [(0, tR.H)()], pR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], xR = [(0, tR.H)()], NR = [(0, tR.H)()], HR = [(0, tR.H)()], oR = [(0, tR.G)()], cR = [(0, tR.H)()], mR = [(0, tR.H)()], zR = [(0, tR.H)()], SR = [(0, tR.F)()], jR = [(0, tR.H)()], dR = [(0, tR.H)()], ER = [(0, tR.H)()], (0, yR.l)(RR, null, aR, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "inertialAlphaOffset" in RR,
              get: RR => RR.inertialAlphaOffset
            },
            metadata: uR
          }, null, kR), (0, yR.l)(RR, null, AR, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "inertialBetaOffset" in RR,
              get: RR => RR.inertialBetaOffset
            },
            metadata: uR
          }, null, kR), (0, yR.l)(RR, null, XR, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "inertialRadiusOffset" in RR,
              get: RR => RR.inertialRadiusOffset
            },
            metadata: uR
          }, null, kR), (0, yR.l)(RR, null, cR, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: RR => "panningInertia" in RR,
              get: RR => RR.panningInertia
            },
            metadata: uR
          }, null, kR), (0, yR.l)(RR, null, mR, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: RR => "zoomToMouseLocation" in RR,
              get: RR => RR.zoomToMouseLocation
            },
            metadata: uR
          }, null, kR), (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "alpha" in RR,
              get: RR => RR.alpha,
              set: (RR, JR) => {
                RR.alpha = JR
              }
            },
            metadata: uR
          }, QR, FR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: RR => "beta" in RR,
              get: RR => RR.beta,
              set: (RR, JR) => {
                RR.beta = JR
              }
            },
            metadata: uR
          }, TR, sR), (0, yR.l)(null, null, iR, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: RR => "radius" in RR,
              get: RR => RR.radius,
              set: (RR, JR) => {
                RR.radius = JR
              }
            },
            metadata: uR
          }, hR, RJ), (0, yR.l)(null, null, VR, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: RR => "overrideCloneAlphaBetaRadius" in RR,
              get: RR => RR.overrideCloneAlphaBetaRadius,
              set: (RR, JR) => {
                RR.overrideCloneAlphaBetaRadius = JR
              }
            },
            metadata: uR
          }, JJ, GJ), (0, yR.l)(null, null, KR, {
            kind: "field",
            name: "bK",
            static: !1,
            private: !1,
            access: {
              has: RR => "bK" in RR,
              get: RR => RR.bK,
              set: (RR, JR) => {
                RR.bK = JR
              }
            },
            metadata: uR
          }, yJ, tJ), (0, yR.l)(null, null, eR, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: RR => "_targetHost" in RR,
              get: RR => RR._targetHost,
              set: (RR, JR) => {
                RR._targetHost = JR
              }
            },
            metadata: uR
          }, uJ, ZJ), (0, yR.l)(null, null, MR, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "lowerAlphaLimit" in RR,
              get: RR => RR.lowerAlphaLimit,
              set: (RR, JR) => {
                RR.lowerAlphaLimit = JR
              }
            },
            metadata: uR
          }, qJ, iJ), (0, yR.l)(null, null, BR, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "upperAlphaLimit" in RR,
              get: RR => RR.upperAlphaLimit,
              set: (RR, JR) => {
                RR.upperAlphaLimit = JR
              }
            },
            metadata: uR
          }, fJ, VJ), (0, yR.l)(null, null, lR, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "lowerBetaLimit" in RR,
              get: RR => RR.lowerBetaLimit,
              set: (RR, JR) => {
                RR.lowerBetaLimit = JR
              }
            },
            metadata: uR
          }, KJ, wJ), (0, yR.l)(null, null, pR, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "upperBetaLimit" in RR,
              get: RR => RR.upperBetaLimit,
              set: (RR, JR) => {
                RR.upperBetaLimit = JR
              }
            },
            metadata: uR
          }, rJ, eJ), (0, yR.l)(null, null, gR, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "lowerRadiusLimit" in RR,
              get: RR => RR.lowerRadiusLimit,
              set: (RR, JR) => {
                RR.lowerRadiusLimit = JR
              }
            },
            metadata: uR
          }, aJ, LJ), (0, yR.l)(null, null, bR, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "upperRadiusLimit" in RR,
              get: RR => RR.upperRadiusLimit,
              set: (RR, JR) => {
                RR.upperRadiusLimit = JR
              }
            },
            metadata: uR
          }, nJ, UJ), (0, yR.l)(null, null, vR, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "lowerTargetYLimit" in RR,
              get: RR => RR.lowerTargetYLimit,
              set: (RR, JR) => {
                RR.lowerTargetYLimit = JR
              }
            },
            metadata: uR
          }, WJ, AJ), (0, yR.l)(null, null, OR, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: RR => "inertialPanningX" in RR,
              get: RR => RR.inertialPanningX,
              set: (RR, JR) => {
                RR.inertialPanningX = JR
              }
            },
            metadata: uR
          }, CJ, XJ), (0, yR.l)(null, null, xR, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: RR => "inertialPanningY" in RR,
              get: RR => RR.inertialPanningY,
              set: (RR, JR) => {
                RR.inertialPanningY = JR
              }
            },
            metadata: uR
          }, MJ, BJ), (0, yR.l)(null, null, NR, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: RR => "pinchToPanMaxDistance" in RR,
              get: RR => RR.pinchToPanMaxDistance,
              set: (RR, JR) => {
                RR.pinchToPanMaxDistance = JR
              }
            },
            metadata: uR
          }, lJ, pJ), (0, yR.l)(null, null, HR, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: RR => "panningDistanceLimit" in RR,
              get: RR => RR.panningDistanceLimit,
              set: (RR, JR) => {
                RR.panningDistanceLimit = JR
              }
            },
            metadata: uR
          }, gJ, bJ), (0, yR.l)(null, null, oR, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: RR => "panningOriginTarget" in RR,
              get: RR => RR.panningOriginTarget,
              set: (RR, JR) => {
                RR.panningOriginTarget = JR
              }
            },
            metadata: uR
          }, vJ, OJ), (0, yR.l)(null, null, zR, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: RR => "zoomOnFactor" in RR,
              get: RR => RR.zoomOnFactor,
              set: (RR, JR) => {
                RR.zoomOnFactor = JR
              }
            },
            metadata: uR
          }, xJ, NJ), (0, yR.l)(null, null, SR, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: RR => "targetScreenOffset" in RR,
              get: RR => RR.targetScreenOffset,
              set: (RR, JR) => {
                RR.targetScreenOffset = JR
              }
            },
            metadata: uR
          }, DJ, HJ), (0, yR.l)(null, null, jR, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: RR => "allowUpsideDown" in RR,
              get: RR => RR.allowUpsideDown,
              set: (RR, JR) => {
                RR.allowUpsideDown = JR
              }
            },
            metadata: uR
          }, oJ, cJ), (0, yR.l)(null, null, dR, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: RR => "useInputToRestoreState" in RR,
              get: RR => RR.useInputToRestoreState,
              set: (RR, JR) => {
                RR.useInputToRestoreState = JR
              }
            },
            metadata: uR
          }, PJ, IJ), (0, yR.l)(null, null, ER, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: RR => "restoreStateInterpolationFactor" in RR,
              get: RR => RR.restoreStateInterpolationFactor,
              set: (RR, JR) => {
                RR.restoreStateInterpolationFactor = JR
              }
            },
            metadata: uR
          }, mJ, zJ), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      zR = !1;
    zR || (zR = !0, iR.d.AddNodeConstructor("ArcRotateCamera", ((RR, JR) => () => new mR(RR, 0, 0, 1, ZR.r.Zero(), JR))), (0, HR.f)("BABYLON.ArcRotateCamera", mR))
  },
  41768: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR.b
    });
    var yR = GR(41773);
    (0, yR.c)()
  },
  41773: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      c: () => wR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(38331),
      qR = GR(41777),
      iR = GR(41741),
      fR = GR(38253);
    let VR = (() => {
        var RR;
        let JR, GR, iR = qR.c,
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        return RR = class extends iR {
          constructor(RR, JR, GR, tR) {
            super(RR, GR, tR), this.groundColor = (0, yR.m)(this, fR, new ZR.d(0, 0, 0)), this.direction = ((0, yR.m)(this, VR), (0, yR.m)(this, KR, void 0)), (0, yR.m)(this, wR), this.direction = JR || uR.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(RR) {
            return this.direction = uR.r.Normalize(RR.subtract(uR.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GR.x, GR.y, GR.z, 0, JR), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), JR), this
          }
          transferToNodeMaterialEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return RR.setFloat3(JR, GR.x, GR.y, GR.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uR.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return qR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(RR, JR) {
            RR["HEMILIGHT" + JR] = !0
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(iR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.k)()], GR = [(0, tR.G)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "groundColor" in RR,
              get: RR => RR.groundColor,
              set: (RR, JR) => {
                RR.groundColor = JR
              }
            },
            metadata: uR
          }, fR, VR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: RR => "direction" in RR,
              get: RR => RR.direction,
              set: (RR, JR) => {
                RR.direction = JR
              }
            },
            metadata: uR
          }, KR, wR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      KR = !1;

    function wR() {
      KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
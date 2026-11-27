export const id = 295;
export const ids = [295];
export const modules = {
  42569: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => fW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38276),
      PW = OW(38241),
      LW = OW(38285),
      cW = OW(41732),
      wW = OW(41919),
      tW = OW(41695),
      ZW = OW(41431),
      xW = OW(38249);
    class lW {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(WW) {
        this._zoomStopsAnimation = WW
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(WW) {
        this._idleRotationSpeed = WW
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(WW) {
        this._idleRotationWaitTime = WW
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(WW) {
        this._idleRotationSpinupTime = WW
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
      attach(WW) {
        this._attachedCamera = WW;
        const iW = this._attachedCamera.bD();
        this._onPrePointerObservableObserver = iW.onPrePointerObservable.add((WW => {
          WW.type !== tW.c.POINTERDOWN ? WW.type === tW.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const WW = ZW.d.Now;
          let iW = 0;
          null != this._lastFrameTime && (iW = WW - this._lastFrameTime), this._lastFrameTime = WW, this._applyUserInteraction();
          const OW = WW - this._lastInteractionTime - this._idleRotationWaitTime,
            mW = Math.max(Math.min(OW / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * mW, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (iW / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const WW = this._attachedCamera.bD();
        this._onPrePointerObservableObserver && WW.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(WW) {
        this._lastInteractionTime = WW ?? ZW.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < xW.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let WW = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (WW = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? WW : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = ZW.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    OW(42573);
    class AW {
      constructor() {
        this._easingMode = AW.EASINGMODE_EASEIN
      }
      setEasingMode(WW) {
        const iW = Math.min(Math.max(WW, 0), 2);
        this._easingMode = iW
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(WW) {
        throw new Error("You must implement this method")
      }
      ease(WW) {
        switch (this._easingMode) {
          case AW.EASINGMODE_EASEIN:
            return this.easeInCore(WW);
          case AW.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - WW)
        }
        return WW >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - WW))) + .5 : .5 * this.easeInCore(2 * WW)
      }
    }
    AW.EASINGMODE_EASEIN = 0, AW.EASINGMODE_EASEOUT = 1, AW.EASINGMODE_EASEINOUT = 2;
    var bW = OW(42580);
    class jW {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(WW) {
        if (this._autoTransitionRange === WW) return;
        this._autoTransitionRange = WW;
        const iW = this._attachedCamera;
        iW && (WW ? this._onMeshTargetChangedObserver = iW.onMeshTargetChangedObservable.add((WW => {
          if (WW && (WW.computeWorldMatrix(!0), WW.KV)) {
            const iW = WW.KV().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * iW, this.upperRadiusTransitionRange = .05 * iW
          }
        })) : this._onMeshTargetChangedObserver && iW.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(WW) {
        this._attachedCamera = WW, this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(WW) {
        return !!this._attachedCamera && (this._attachedCamera.radius === WW && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(WW) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (jW.EasingFunction.setEasingMode(jW.EasingMode), this._radiusBounceTransition = bW.d.CreateAnimation("radius", bW.d.ANIMATIONTYPE_FLOAT, 60, jW.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const iW = bW.d.TransitionTo("radius", this._attachedCamera.radius + WW, this._attachedCamera, this._attachedCamera.bD(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        iW && this._animatables.push(iW)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    jW.EasingFunction = new class extends AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = WW
      }
      easeInCore(WW) {
        const iW = Math.max(0, this.amplitude);
        return Math.pow(WW, 3) - WW * iW * Math.sin(3.141592653589793 * WW)
      }
    }(.3), jW.EasingMode = AW.EASINGMODE_EASEOUT;
    class UW {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new NW.e, this._mode = UW.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(WW) {
        this._mode = WW
      }
      get mode() {
        return this._mode
      }
      set radiusScale(WW) {
        this._radiusScale = WW
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(WW) {
        this._positionScale = WW
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(WW) {
        this._defaultElevation = WW
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(WW) {
        this._elevationReturnTime = WW
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(WW) {
        this._elevationReturnWaitTime = WW
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(WW) {
        this._zoomStopsAnimation = WW
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(WW) {
        this._framingTime = WW
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(WW) {
        this._attachedCamera = WW;
        const iW = this._attachedCamera.bD();
        UW.EasingFunction.setEasingMode(UW.EasingMode), this._onPrePointerObservableObserver = iW.onPrePointerObservable.add((WW => {
          WW.type !== tW.c.POINTERDOWN ? WW.type === tW.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = WW.onMeshTargetChangedObservable.add((WW => {
          WW && WW.KV && this.zoomOnMesh(WW, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const WW = this._attachedCamera.bD();
        this._onPrePointerObservableObserver && WW.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        WW.computeWorldMatrix(!0);
        const mW = WW.KV().boundingBox;
        this.zoomOnBoundingInfo(mW.minimumWorld, mW.maximumWorld, iW, OW)
      }
      zoomOnMeshHierarchy(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        WW.computeWorldMatrix(!0);
        const mW = WW.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(mW.min, mW.max, iW, OW)
      }
      zoomOnMeshesHierarchy(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const mW = new PW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          EW = new PW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let NW = 0; NW < WW.length; NW++) {
          const iW = WW[NW].getHierarchyBoundingVectors(!0);
          PW.q.CheckExtends(iW.min, mW, EW), PW.q.CheckExtends(iW.max, mW, EW)
        }
        this.zoomOnBoundingInfo(mW, EW, iW, OW)
      }
      zoomOnBoundingInfo(WW, iW) {
        let OW, mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const NW = WW.y,
          LW = NW + (iW.y - NW) * this._positionScale,
          cW = iW.subtract(WW).scale(.5);
        if (!isFinite(LW)) return !1;
        if (mW) OW = new PW.q(0, LW, 0);
        else {
          const iW = WW.add(cW);
          OW = new PW.q(iW.x, LW, iW.z)
        }
        this._vectorTransition || (this._vectorTransition = bW.d.CreateAnimation("target", bW.d.ANIMATIONTYPE_VECTOR3, 60, UW.EasingFunction)), this._betaIsAnimating = !0;
        let wW = bW.d.TransitionTo("target", OW, this._attachedCamera, this._attachedCamera.bD(), 60, this._vectorTransition, this._framingTime);
        wW && this._animatables.push(wW);
        let tW = 0;
        if (this._mode === UW.FitFrustumSidesMode) {
          const OW = this._calculateLowerRadiusFromModelBoundingSphere(WW, iW);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = cW.length() + this._attachedCamera.minZ), tW = OW
        } else this._mode === UW.IgnoreBoundsSizeMode && (tW = this._calculateLowerRadiusFromModelBoundingSphere(WW, iW), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const OW = iW.subtract(WW).length();
          this._attachedCamera.panningSensibility = 5e3 / OW, this._attachedCamera.wheelPrecision = 100 / tW
        }
        return this._radiusTransition || (this._radiusTransition = bW.d.CreateAnimation("radius", bW.d.ANIMATIONTYPE_FLOAT, 60, UW.EasingFunction)), wW = bW.d.TransitionTo("radius", tW, this._attachedCamera, this._attachedCamera.bD(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), EW && EW(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), wW && this._animatables.push(wW), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(WW, iW) {
        const OW = this._attachedCamera;
        if (!OW) return 0;
        let mW = OW._calculateLowerRadiusFromModelBoundingSphere(WW, iW, this._radiusScale);
        return OW.lowerRadiusLimit && this._mode === UW.IgnoreBoundsSizeMode && (mW = mW < OW.lowerRadiusLimit ? OW.lowerRadiusLimit : mW), OW.upperRadiusLimit && (mW = mW > OW.upperRadiusLimit ? OW.upperRadiusLimit : mW), mW
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const WW = ZW.d.Now - this._lastInteractionTime,
          iW = .5 * Math.PI - this._defaultElevation,
          OW = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > OW && WW >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = bW.d.CreateAnimation("beta", bW.d.ANIMATIONTYPE_FLOAT, 60, UW.EasingFunction));
          const WW = bW.d.TransitionTo("beta", iW, this._attachedCamera, this._attachedCamera.bD(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          WW && this._animatables.push(WW)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = ZW.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    UW.EasingFunction = new class extends AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = WW
      }
      easeInCore(WW) {
        return this.exponent <= 0 ? WW : (Math.exp(this.exponent * WW) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, UW.EasingMode = AW.EASINGMODE_EASEINOUT, UW.IgnoreBoundsSizeMode = 0, UW.FitFrustumSidesMode = 1;
    var kW = OW(41723),
      sW = OW(41719),
      MW = OW(41753),
      KW = OW(41620);
    let SW = (() => {
        var WW;
        let iW, OW = [],
          NW = [];
        return WW = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, mW.g)(this, OW, [0, 1, 2]), this._pointerInput = (0, mW.g)(this, NW)
          }
          attachControl(WW) {
            WW = KW.f.BackCompatCameraNoPreventDefault(arguments);
            const iW = this.camera.VA(),
              OW = iW.getInputElement();
            let mW = 0,
              EW = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = NW => {
              const PW = NW.event,
                LW = "touch" === PW.pointerType;
              if (NW.type !== tW.c.POINTERMOVE && -1 === this.buttons.indexOf(PW.button)) return;
              const cW = PW.target;
              if (this._altKey = PW.altKey, this._ctrlKey = PW.ctrlKey, this._metaKey = PW.metaKey, this._shiftKey = PW.shiftKey, this._buttonsPressed = PW.buttons, iW.isPointerLock) {
                const WW = PW.movementX,
                  iW = PW.movementY;
                this.onTouch(null, WW, iW), this._pointA = null, this._pointB = null
              } else {
                if (NW.type !== tW.c.POINTERDOWN && NW.type !== tW.c.POINTERDOUBLETAP && LW && this._pointA?.pointerId !== PW.pointerId && this._pointB?.pointerId !== PW.pointerId) return;
                if (NW.type !== tW.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !LW)
                  if (NW.type === tW.c.POINTERDOUBLETAP) this.onDoubleTap(PW.pointerType, PW);
                  else if (NW.type !== tW.c.POINTERUP || this._currentMousePointerIdDown !== PW.pointerId && !LW) {
                  if (NW.type === tW.c.POINTERMOVE)
                    if (WW || PW.preventDefault(), this._pointA && null === this._pointB) {
                      const WW = PW.clientX - this._pointA.x,
                        iW = PW.clientY - this._pointA.y;
                      this._pointA.x = PW.clientX, this._pointA.y = PW.clientY, this.onTouch(this._pointA, WW, iW)
                    } else if (this._pointA && this._pointB) {
                    const WW = this._pointA.pointerId === PW.pointerId ? this._pointA : this._pointB;
                    WW.x = PW.clientX, WW.y = PW.clientY;
                    const iW = this._pointA.x - this._pointB.x,
                      OW = this._pointA.y - this._pointB.y,
                      LW = iW * iW + OW * OW,
                      cW = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: PW.pointerId,
                        type: NW.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, mW, LW, EW, cW), EW = cW, mW = LW
                  }
                } else {
                  try {
                    cW?.releasePointerCapture(PW.pointerId)
                  } catch (wW) {}
                  LW || (this._pointB = null), iW._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == PW.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == PW.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== mW || EW) && (this.onMultiTouch(this._pointA, this._pointB, mW, 0, EW, null), mW = 0, EW = null), this._currentMousePointerIdDown = -1, this.onButtonUp(PW), WW || PW.preventDefault()
                } else {
                  try {
                    cW?.setPointerCapture(PW.pointerId)
                  } catch (wW) {}
                  if (null === this._pointA) this._pointA = {
                    x: PW.clientX,
                    y: PW.clientY,
                    pointerId: PW.pointerId,
                    type: PW.pointerType,
                    button: PW.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: PW.clientX,
                      y: PW.clientY,
                      pointerId: PW.pointerId,
                      type: PW.pointerType,
                      button: PW.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || LW || (this._currentMousePointerIdDown = PW.pointerId), this.onButtonDown(PW), WW || (PW.preventDefault(), OW && OW.focus())
                }
              }
            }, this._observer = this.camera.bD()._inputManager._addCameraPointerObserver(this._pointerInput, tW.c.POINTERDOWN | tW.c.POINTERUP | tW.c.POINTERMOVE | tW.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, mW = 0, EW = null, this.onLostFocus()
            }, this._contextMenuBind = WW => this.onContextMenu(WW), OW && OW.addEventListener("contextmenu", this._contextMenuBind, !1);
            const NW = this.camera.bD().VA().getHostWindow();
            NW && KW.f.RegisterTopRootEvents(NW, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const WW = this.camera.bD().VA().getHostWindow();
              WW && KW.f.UnregisterTopRootEvents(WW, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.bD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const WW = this.camera.bD().VA().getInputElement();
                WW && WW.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(WW, iW) {}
          onTouch(WW, iW, OW) {}
          onMultiTouch(WW, iW, OW, mW, EW, NW) {}
          onContextMenu(WW) {
            WW.preventDefault()
          }
          onButtonDown(WW) {}
          onButtonUp(WW) {}
          onLostFocus() {}
        }, (() => {
          const PW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: WW => "buttons" in WW,
              get: WW => WW.buttons,
              set: (WW, iW) => {
                WW.buttons = iW
              }
            },
            metadata: PW
          }, OW, NW), PW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PW
          })
        })(), WW
      })(),
      YW = (() => {
        var WW;
        let iW, OW, NW, PW = SW,
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        return WW = class extends PW {
          constructor() {
            super(...arguments), this.pinchZoom = (0, mW.g)(this, LW, !0), this.multiTouchPanning = ((0, mW.g)(this, cW), (0, mW.g)(this, wW, !0)), this.multiTouchPanAndZoom = ((0, mW.g)(this, tW), (0, mW.g)(this, ZW, !0)), this._isPinching = ((0, mW.g)(this, xW), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(WW, iW) {}
          _computeMultiTouchPanning(WW, iW) {}
          onMultiTouch(WW, iW, OW, mW, EW, NW) {
            0 === OW && null === EW || 0 === mW && null === NW || (this.multiTouchPanAndZoom ? (this._computePinchZoom(OW, mW), this._computeMultiTouchPanning(EW, NW)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(OW, mW), this._isPinching = !0) : this._computeMultiTouchPanning(EW, NW)) : this.multiTouchPanning ? this._computeMultiTouchPanning(EW, NW) : this.pinchZoom && this._computePinchZoom(OW, mW))
          }
          onButtonUp(WW) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(PW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchZoom" in WW,
              get: WW => WW.pinchZoom,
              set: (WW, iW) => {
                WW.pinchZoom = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: WW => "multiTouchPanning" in WW,
              get: WW => WW.multiTouchPanning,
              set: (WW, iW) => {
                WW.multiTouchPanning = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, mW.e)(null, null, NW, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "multiTouchPanAndZoom" in WW,
              get: WW => WW.multiTouchPanAndZoom,
              set: (WW, iW) => {
                WW.multiTouchPanAndZoom = iW
              }
            },
            metadata: lW
          }, ZW, xW), lW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          })
        })(), WW
      })(),
      yW = (() => {
        var WW;
        let iW, OW, NW, PW, LW, cW, wW, tW = YW,
          ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [],
          UW = [],
          kW = [],
          sW = [],
          MW = [],
          KW = [],
          SW = [],
          yW = [],
          TW = [];
        return WW = class extends tW {
          constructor() {
            super(...arguments), this.buttons = (0, mW.g)(this, ZW, [0, 1, 2]), this.angularSensibilityX = ((0, mW.g)(this, xW), (0, mW.g)(this, lW, 1e3)), this.angularSensibilityY = ((0, mW.g)(this, AW), (0, mW.g)(this, bW, 1e3)), this.pinchPrecision = ((0, mW.g)(this, jW), (0, mW.g)(this, UW, 12)), this.pinchDeltaPercentage = ((0, mW.g)(this, kW), (0, mW.g)(this, sW, 0)), this.useNaturalPinchZoom = ((0, mW.g)(this, MW), (0, mW.g)(this, KW, !1)), this.panningSensibility = ((0, mW.g)(this, SW), (0, mW.g)(this, yW, 1e3)), this.pinchInwards = ((0, mW.g)(this, TW), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(WW, iW) {
            if (WW && iW) {
              const OW = iW.x - WW.x,
                mW = iW.y - WW.y,
                EW = this.camera.movement.input.getEntry("pointer", "pan"),
                NW = EW?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== NW && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -OW * NW, this.camera.movement.panAccumulatedPixels.y += mW * NW)
            }
          }
          _computePinchZoom(iW, OW) {
            const mW = this.camera.radius || WW.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = mW * Math.sqrt(iW) / Math.sqrt(OW);
            else if (this.pinchDeltaPercentage) {
              const WW = .001 * (OW - iW) * mW * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += WW
            } else {
              const WW = (OW - iW) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += WW
            }
          }
          onTouch(WW, iW, OW) {
            const mW = this._activeEntry ?? (this.camera.VA().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (mW)
              if ("pan" === mW.interaction) {
                const WW = mW.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== WW && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -iW * WW, this.camera.movement.panAccumulatedPixels.y += OW * WW)
              } else if ("rotate" === mW.interaction) {
              const WW = mW.iG ?? mW.sensitivity ?? 1 / this.angularSensibilityX,
                EW = mW.mG ?? mW.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -iW * WW, this.camera.movement.rotationAccumulatedPixels.y += -OW * EW
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(WW, iW, OW, mW, EW, NW) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(mW) - Math.sqrt(OW)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(WW, iW, OW, mW, EW, NW)
          }
          onButtonDown(WW) {
            this._pointerConditions.button = WW.button, this._pointerModifiers.ctrl = WW.ctrlKey, this._pointerModifiers.alt = WW.altKey, this._pointerModifiers.shift = WW.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(WW)
          }
          onButtonUp(WW) {
            this._activeEntry = null, super.onButtonUp(WW)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const YW = "function" === typeof Symbol && Symbol.metadata ? Object.create(tW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], PW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: WW => "buttons" in WW,
              get: WW => WW.buttons,
              set: (WW, iW) => {
                WW.buttons = iW
              }
            },
            metadata: YW
          }, ZW, xW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: WW => "angularSensibilityX" in WW,
              get: WW => WW.angularSensibilityX,
              set: (WW, iW) => {
                WW.angularSensibilityX = iW
              }
            },
            metadata: YW
          }, lW, AW), (0, mW.e)(null, null, NW, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: WW => "angularSensibilityY" in WW,
              get: WW => WW.angularSensibilityY,
              set: (WW, iW) => {
                WW.angularSensibilityY = iW
              }
            },
            metadata: YW
          }, bW, jW), (0, mW.e)(null, null, PW, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchPrecision" in WW,
              get: WW => WW.pinchPrecision,
              set: (WW, iW) => {
                WW.pinchPrecision = iW
              }
            },
            metadata: YW
          }, UW, kW), (0, mW.e)(null, null, LW, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchDeltaPercentage" in WW,
              get: WW => WW.pinchDeltaPercentage,
              set: (WW, iW) => {
                WW.pinchDeltaPercentage = iW
              }
            },
            metadata: YW
          }, sW, MW), (0, mW.e)(null, null, cW, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "useNaturalPinchZoom" in WW,
              get: WW => WW.useNaturalPinchZoom,
              set: (WW, iW) => {
                WW.useNaturalPinchZoom = iW
              }
            },
            metadata: YW
          }, KW, SW), (0, mW.e)(null, null, wW, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningSensibility" in WW,
              get: WW => WW.panningSensibility,
              set: (WW, iW) => {
                WW.panningSensibility = iW
              }
            },
            metadata: YW
          }, yW, TW), YW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YW
          })
        })(), WW.MinimumRadiusForPinch = .001, WW
      })();
    MW.d.ArcRotateCameraPointersInput = yW;
    var TW = OW(41700);
    let JW = (() => {
      var WW;
      let iW, OW, NW, LW, cW, wW, tW, ZW, xW, lW, AW, bW = [],
        jW = [],
        UW = [],
        kW = [],
        sW = [],
        MW = [],
        SW = [],
        YW = [],
        yW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [];
      return WW = class {
        constructor() {
          this.camera = (0, mW.g)(this, bW), this.keysUp = (0, mW.g)(this, jW, [38]), this.keysDown = ((0, mW.g)(this, UW), (0, mW.g)(this, kW, [40])), this.keysLeft = ((0, mW.g)(this, sW), (0, mW.g)(this, MW, [37])), this.keysRight = ((0, mW.g)(this, SW), (0, mW.g)(this, YW, [39])), this.keysReset = ((0, mW.g)(this, yW), (0, mW.g)(this, JW, [220])), this.keysZoomIn = ((0, mW.g)(this, hW), (0, mW.g)(this, HW, [187, 107])), this.keysZoomOut = ((0, mW.g)(this, nW), (0, mW.g)(this, uW, [189, 109])), this.panningSensibility = ((0, mW.g)(this, oW), (0, mW.g)(this, dW, 50)), this.zoomingSensibility = ((0, mW.g)(this, eW), (0, mW.g)(this, vW, 25)), this.angularSpeed = ((0, mW.g)(this, gW), (0, mW.g)(this, DW, .01)), this._useAltToZoom = ((0, mW.g)(this, VW), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new PW.m, this._panDirection = new PW.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(WW) {
          this._useAltToZoom = WW, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const WW = this.camera.movement.input,
            iW = WW.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && iW ? WW.inputMap.splice(WW.inputMap.indexOf(iW), 1) : this._useAltToZoom && !iW && WW.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(WW) {
          WW = KW.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.bD(), this._engine = this._scene.VA(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((iW => {
            const OW = iW.event;
            if (!OW.metaKey)
              if (iW.type === TW.c.KEYDOWN) {
                if (this._ctrlPressed = OW.ctrlKey, this._altPressed = OW.altKey, -1 !== this.keysUp.indexOf(OW.keyCode) || -1 !== this.keysDown.indexOf(OW.keyCode) || -1 !== this.keysLeft.indexOf(OW.keyCode) || -1 !== this.keysRight.indexOf(OW.keyCode) || -1 !== this.keysReset.indexOf(OW.keyCode) || -1 !== this.keysZoomIn.indexOf(OW.keyCode) || -1 !== this.keysZoomOut.indexOf(OW.keyCode)) {
                  -1 === this._keys.indexOf(OW.keyCode) && this._keys.push(OW.keyCode), OW.preventDefault && (WW || OW.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(OW.keyCode) || -1 !== this.keysDown.indexOf(OW.keyCode) || -1 !== this.keysLeft.indexOf(OW.keyCode) || -1 !== this.keysRight.indexOf(OW.keyCode) || -1 !== this.keysReset.indexOf(OW.keyCode) || -1 !== this.keysZoomIn.indexOf(OW.keyCode) || -1 !== this.keysZoomOut.indexOf(OW.keyCode)) {
              const iW = this._keys.indexOf(OW.keyCode);
              iW >= 0 && this._keys.splice(iW, 1), OW.preventDefault && (WW || OW.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const WW = this.camera,
              iW = WW.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const OW = this._rotateDirection.set(0, 0),
              mW = this._panDirection.set(0, 0);
            let EW = 0,
              NW = 0;
            for (let PW = 0; PW < this._keys.length; PW++) {
              const LW = this._keys[PW];
              if (this._keyboardConditions.key = LW, -1 === this.keysReset.indexOf(LW)) {
                const WW = iW.resolveInteraction("keyboard", this._keyboardConditions);
                if (WW)
                  if ("pan" === WW.interaction) NW = Math.max(NW, WW.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(LW) ? mW.x -= 1 : -1 !== this.keysRight.indexOf(LW) ? mW.x += 1 : -1 !== this.keysUp.indexOf(LW) ? mW.y += 1 : -1 !== this.keysDown.indexOf(LW) && (mW.y -= 1);
                  else if ("zoom" === WW.interaction) {
                  const OW = WW.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(LW) || -1 !== this.keysZoomIn.indexOf(LW) ? iW.handlers.zoom(OW) : -1 === this.keysDown.indexOf(LW) && -1 === this.keysZoomOut.indexOf(LW) || iW.handlers.zoom(-OW)
                } else "rotate" === WW.interaction && (EW = Math.max(EW, WW.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(LW) ? OW.x -= 1 : -1 !== this.keysRight.indexOf(LW) ? OW.x += 1 : -1 !== this.keysUp.indexOf(LW) ? OW.y -= 1 : -1 !== this.keysDown.indexOf(LW) && (OW.y += 1))
              } - 1 !== this.keysReset.indexOf(LW) && WW.useInputToRestoreState && WW.restoreState()
            }
            0 === OW.x && 0 === OW.y || (OW.normalize().scaleInPlace(EW), iW.handlers.rotate(OW.x, OW.y)), 0 === mW.x && 0 === mW.y || (mW.normalize().scaleInPlace(NW), iW.handlers.pan(mW.x, mW.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const PW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], lW = [(0, EW.M)()], AW = [(0, EW.M)()], (0, mW.e)(WW, null, AW, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAltToZoom" in WW,
            get: WW => WW.useAltToZoom
          },
          metadata: PW
        }, null, bW), (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUp" in WW,
            get: WW => WW.keysUp,
            set: (WW, iW) => {
              WW.keysUp = iW
            }
          },
          metadata: PW
        }, jW, UW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDown" in WW,
            get: WW => WW.keysDown,
            set: (WW, iW) => {
              WW.keysDown = iW
            }
          },
          metadata: PW
        }, kW, sW), (0, mW.e)(null, null, NW, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysLeft" in WW,
            get: WW => WW.keysLeft,
            set: (WW, iW) => {
              WW.keysLeft = iW
            }
          },
          metadata: PW
        }, MW, SW), (0, mW.e)(null, null, LW, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRight" in WW,
            get: WW => WW.keysRight,
            set: (WW, iW) => {
              WW.keysRight = iW
            }
          },
          metadata: PW
        }, YW, yW), (0, mW.e)(null, null, cW, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysReset" in WW,
            get: WW => WW.keysReset,
            set: (WW, iW) => {
              WW.keysReset = iW
            }
          },
          metadata: PW
        }, JW, hW), (0, mW.e)(null, null, wW, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysZoomIn" in WW,
            get: WW => WW.keysZoomIn,
            set: (WW, iW) => {
              WW.keysZoomIn = iW
            }
          },
          metadata: PW
        }, HW, nW), (0, mW.e)(null, null, tW, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysZoomOut" in WW,
            get: WW => WW.keysZoomOut,
            set: (WW, iW) => {
              WW.keysZoomOut = iW
            }
          },
          metadata: PW
        }, uW, oW), (0, mW.e)(null, null, ZW, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "panningSensibility" in WW,
            get: WW => WW.panningSensibility,
            set: (WW, iW) => {
              WW.panningSensibility = iW
            }
          },
          metadata: PW
        }, dW, eW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "zoomingSensibility" in WW,
            get: WW => WW.zoomingSensibility,
            set: (WW, iW) => {
              WW.zoomingSensibility = iW
            }
          },
          metadata: PW
        }, vW, gW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: WW => "angularSpeed" in WW,
            get: WW => WW.angularSpeed,
            set: (WW, iW) => {
              WW.angularSpeed = iW
            }
          },
          metadata: PW
        }, DW, VW), PW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PW
        })
      })(), WW
    })();
    MW.d.ArcRotateCameraKeyboardMoveInput = JW;
    var hW = OW(38939),
      HW = OW(41703);
    let nW = (() => {
      var WW;
      let iW, OW, NW, cW = [],
        wW = [],
        ZW = [],
        lW = [],
        AW = [],
        bW = [];
      return WW = class {
        constructor() {
          this.wheelPrecision = (0, mW.g)(this, cW, 3), this.zoomToMouseLocation = ((0, mW.g)(this, wW), (0, mW.g)(this, ZW, !1)), this.wheelDeltaPercentage = ((0, mW.g)(this, lW), (0, mW.g)(this, AW, 0)), this.customComputeDeltaFromMouseWheel = ((0, mW.g)(this, bW), null), this._viewOffset = new PW.q(0, 0, 0), this._globalOffset = new PW.q(0, 0, 0), this._inertialPanning = PW.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(WW, iW) {
          let OW;
          const mW = .01 * WW * this.wheelDeltaPercentage * iW;
          return OW = WW > 0 ? mW / (1 + this.wheelDeltaPercentage) : mW * (1 + this.wheelDeltaPercentage), OW
        }
        attachControl(WW) {
          WW = KW.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = iW => {
            if (iW.type !== tW.c.POINTERWHEEL) return;
            const OW = iW.event;
            let mW;
            const EW = OW.deltaMode === HW.e.DOM_DELTA_LINE ? 40 : 1,
              NW = -OW.deltaY * EW;
            if (this.customComputeDeltaFromMouseWheel) mW = this.customComputeDeltaFromMouseWheel(NW, this, OW);
            else if (this.wheelDeltaPercentage) {
              if (mW = this._computeDeltaFromMouseWheelLegacyEvent(NW, this.camera.radius), mW > 0) {
                const WW = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let iW = this.camera.radius,
                  OW = WW + mW;
                for (let mW = 0; mW < 20 && !(iW <= OW) && !(Math.abs(OW * this.camera.inertia) < .001); mW++) iW -= OW, OW *= this.camera.inertia;
                iW = (0, LW.Clamp)(iW, 0, Number.MAX_VALUE), mW = this._computeDeltaFromMouseWheelLegacyEvent(NW, iW)
              }
            } else {
              const WW = this.camera.movement.input.getEntry("wheel", "zoom");
              mW = NW * (WW?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            mW && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(mW)) : this.camera.movement.zoomAccumulatedPixels += mW), OW.preventDefault && (WW || OW.preventDefault())
          }, this._observer = this.camera.bD()._inputManager._addCameraPointerObserver(this._wheel, tW.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Z5(0)
        }
        detachControl() {
          this._observer && (this.camera.bD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const WW = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(WW.inertialAlphaOffset) + Math.abs(WW.inertialBetaOffset) + Math.abs(WW.inertialRadiusOffset)) {
            this._updateHitPlane(), WW.target.addInPlace(this._inertialPanning), WW.radius -= this._zoomToMouseRadiusOffset;
            const iW = WW.movement.getFrameIndependentDecay(WW.inertia);
            this._inertialPanning.scaleInPlace(iW), this._zoomToMouseRadiusOffset *= iW, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < xW.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const WW = this.camera,
            iW = WW.target.subtract(WW.position);
          this._hitPlane = hW.c.FromPositionAndNormal(WW.target, iW)
        }
        _getPosition() {
          const WW = this.camera,
            iW = WW.bD(),
            OW = iW.createPickingRay(iW.pointerX, iW.pointerY, PW.d.Identity(), WW, !1);
          0 === WW.targetScreenOffset.x && 0 === WW.targetScreenOffset.y || (this._viewOffset.set(WW.targetScreenOffset.x, WW.targetScreenOffset.y, 0), WW.getViewMatrix().invertToRef(WW._cameraTransformMatrix), this._globalOffset = PW.q.TransformNormal(this._viewOffset, WW._cameraTransformMatrix), OW.origin.addInPlace(this._globalOffset));
          let mW = 0;
          return this._hitPlane && (mW = OW.intersectsPlane(this._hitPlane) ?? 0), OW.origin.addInPlace(OW.direction.scaleInPlace(mW))
        }
        _zoomToMouse(WW) {
          const iW = this.camera,
            OW = 1 - iW.inertia,
            mW = iW.movement.getFrameIndependentInputScale(iW.inertia);
          if (iW.lowerRadiusLimit) {
            const EW = iW.lowerRadiusLimit ?? 0;
            iW.radius - (this._zoomToMouseRadiusOffset + WW * mW) / OW < EW && (WW = ((iW.radius - EW) * OW - this._zoomToMouseRadiusOffset) / mW)
          }
          if (iW.upperRadiusLimit) {
            const EW = iW.upperRadiusLimit ?? 0;
            iW.radius - (this._zoomToMouseRadiusOffset + WW * mW) / OW > EW && (WW = ((iW.radius - EW) * OW - this._zoomToMouseRadiusOffset) / mW)
          }
          const EW = WW / OW / iW.radius,
            NW = this._getPosition(),
            LW = PW.l.fA[6];
          NW.subtractToRef(iW.target, LW), LW.scaleInPlace(EW), LW.scaleInPlace(OW), LW.scaleInPlace(mW), this._inertialPanning.addInPlace(LW), this._zoomToMouseRadiusOffset += WW * mW
        }
        _zeroIfClose(WW) {
          Math.abs(WW.x) < xW.e && (WW.x = 0), Math.abs(WW.y) < xW.e && (WW.y = 0), Math.abs(WW.z) < xW.e && (WW.z = 0)
        }
      }, (() => {
        const PW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecision" in WW,
            get: WW => WW.wheelPrecision,
            set: (WW, iW) => {
              WW.wheelPrecision = iW
            }
          },
          metadata: PW
        }, cW, wW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: WW => "zoomToMouseLocation" in WW,
            get: WW => WW.zoomToMouseLocation,
            set: (WW, iW) => {
              WW.zoomToMouseLocation = iW
            }
          },
          metadata: PW
        }, ZW, lW), (0, mW.e)(null, null, NW, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelDeltaPercentage" in WW,
            get: WW => WW.wheelDeltaPercentage,
            set: (WW, iW) => {
              WW.wheelDeltaPercentage = iW
            }
          },
          metadata: PW
        }, AW, bW), PW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PW
        })
      })(), WW
    })();
    MW.d.ArcRotateCameraMouseWheelInput = nW;
    var uW, oW, dW = OW(41415);
    class eW extends MW.f {
      constructor(WW) {
        super(WW)
      }
      addMouseWheel() {
        return this.add(new nW), this
      }
      addPointers() {
        return this.add(new yW), this
      }
      addKeyboard() {
        return this.add(new JW), this
      }
    }(uW = eW.prototype).addVRDeviceOrientation ?? (uW.addVRDeviceOrientation = (0, dW.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (oW = eW.prototype).addGamepad ?? (oW.addGamepad = (0, dW.k)("ArcRotateCameraInputsManager", "addGamepad"));
    var vW = OW(38299),
      gW = OW(41743),
      DW = OW(41747);
    class VW extends gW.e {
      constructor(WW, iW, OW) {
        super(WW, iW, OW), this.input = new DW.d({
          pan: (WW, iW) => {
            this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += iW
          },
          rotate: (WW, iW) => {
            this.rotationAccumulatedPixels.x += WW, this.rotationAccumulatedPixels.y += iW
          },
          zoom: WW => {
            this.zoomAccumulatedPixels += WW
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

    function pW(WW, iW) {
      return isNaN(WW) ? iW : WW
    }
    let fW = (() => {
        var WW;
        let iW, OW, cW, tW, ZW, AW, bW, MW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, vW, gW, DW, fW, CW, XW, BW, qW, RW, GW = sW.d,
          IW = [],
          aW = [],
          rW = [],
          zW = [],
          FW = [],
          QW = [],
          Wi = [],
          ii = [],
          Oi = [],
          mi = [],
          Ei = [],
          Ni = [],
          Pi = [],
          Li = [],
          ci = [],
          wi = [],
          ti = [],
          Zi = [],
          xi = [],
          li = [],
          Ai = [],
          bi = [],
          ji = [],
          Ui = [],
          ki = [],
          si = [],
          Mi = [],
          Ki = [],
          Si = [],
          Yi = [],
          yi = [],
          Ti = [],
          Ji = [],
          Hi = [],
          ni = [],
          ui = [],
          oi = [],
          di = [],
          ei = [],
          vi = [],
          gi = [],
          Di = [],
          Vi = [],
          fi = [],
          Ci = [],
          Xi = [],
          Bi = [];
        return WW = class extends GW {
          get target() {
            return this.HZ
          }
          set target(WW) {
            this.setTarget(WW)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(WW) {
            WW && this.setTarget(WW)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(WW) {
            this.setPosition(WW)
          }
          set upVector(WW) {
            this._upToYMatrix || (this._yToUpMatrix = new PW.d, this._upToYMatrix = new PW.d, this._upVector = PW.q.Zero()), WW.normalize(), this._upVector.HJ(WW), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            PW.d.RotationAlignToRef(PW.q.UpReadOnly, this._upVector, this._yToUpMatrix), PW.d.RotationAlignToRef(this._upVector, PW.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const WW = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialAlphaOffset(WW) {
            this._inertialAlphaOffset = WW, 0 === WW && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const WW = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialBetaOffset(WW) {
            this._inertialBetaOffset = WW, 0 === WW && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const WW = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialRadiusOffset(WW) {
            this._inertialRadiusOffset = WW, 0 === WW && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(WW) {
            this._panningInertia = WW, this.movement && (this.movement.panInertia = WW)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(WW) {
            this._inertia = WW, this.movement && (this.movement.rotationInertia = WW, this.movement.zoomInertia = WW)
          }
          get angularSensibilityX() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.angularSensibilityX : 0
          }
          set angularSensibilityX(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.angularSensibilityX = WW)
          }
          get angularSensibilityY() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.angularSensibilityY : 0
          }
          set angularSensibilityY(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.angularSensibilityY = WW)
          }
          get pinchPrecision() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.pinchPrecision : 0
          }
          set pinchPrecision(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.pinchPrecision = WW)
          }
          get pinchDeltaPercentage() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.pinchDeltaPercentage = WW)
          }
          get useNaturalPinchZoom() {
            const WW = this.inputs.attached.pointers;
            return !!WW && WW.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.useNaturalPinchZoom = WW)
          }
          get panningSensibility() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.panningSensibility : 0
          }
          set panningSensibility(WW) {
            const iW = this.inputs.attached.pointers;
            iW && (iW.panningSensibility = WW)
          }
          get keysUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUp : []
          }
          set keysUp(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysUp = WW)
          }
          get keysDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDown : []
          }
          set keysDown(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysDown = WW)
          }
          get keysLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysLeft : []
          }
          set keysLeft(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysLeft = WW)
          }
          get keysRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRight : []
          }
          set keysRight(WW) {
            const iW = this.inputs.attached.keyboard;
            iW && (iW.keysRight = WW)
          }
          get wheelPrecision() {
            const WW = this.inputs.attached.mousewheel;
            return WW ? WW.wheelPrecision : 0
          }
          set wheelPrecision(WW) {
            const iW = this.inputs.attached.mousewheel;
            iW && (iW.wheelPrecision = WW)
          }
          get zoomToMouseLocation() {
            const WW = this.inputs.attached.mousewheel;
            return !!WW && WW.zoomToMouseLocation
          }
          set zoomToMouseLocation(WW) {
            const iW = this.inputs.attached.mousewheel;
            iW && (iW.zoomToMouseLocation = WW)
          }
          get wheelDeltaPercentage() {
            const WW = this.inputs.attached.mousewheel;
            return WW ? WW.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(WW) {
            const iW = this.inputs.attached.mousewheel;
            iW && (iW.wheelDeltaPercentage = WW)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(WW) {
            this._useCtrlForPanningInternal = WW;
            const iW = this.movement.input,
              OW = iW.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !WW && OW ? iW.inputMap.splice(iW.inputMap.indexOf(OW), 1) : WW && !OW && iW.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const mW = iW.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !WW && mW ? iW.inputMap.splice(iW.inputMap.indexOf(mW), 1) : WW && !mW && iW.addEntry({
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
          set _panningMouseButton(WW) {
            this._panningMouseButtonInternal = WW;
            const iW = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            iW && (iW.button = WW)
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
          set useBouncingBehavior(WW) {
            WW !== this.useBouncingBehavior && (WW ? (this._bouncingBehavior = new jW, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(WW) {
            WW !== this.useFramingBehavior && (WW ? (this._framingBehavior = new UW, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(WW) {
            WW !== this.useAutoRotationBehavior && (WW ? (this._autoRotationBehavior = new lW, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(WW, iW, OW, EW, LW, cW) {
            var wW;
            let tW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(WW, PW.q.Zero(), cW, tW), wW = this, this.alpha = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, void 0)), this.beta = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, void 0)), this.radius = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, void 0)), this.overrideCloneAlphaBetaRadius = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, void 0)), this.HZ = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, void 0)), this._targetHost = ((0, mW.g)(this, Ei), (0, mW.g)(this, Ni, void 0)), this._upToYMatrix = (0, mW.g)(this, Pi), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, mW.g)(this, Li, null), this.upperAlphaLimit = ((0, mW.g)(this, ci), (0, mW.g)(this, wi, null)), this.lowerBetaLimit = ((0, mW.g)(this, ti), (0, mW.g)(this, Zi, .01)), this.upperBetaLimit = ((0, mW.g)(this, xi), (0, mW.g)(this, li, Math.PI - .01)), this.lowerRadiusLimit = ((0, mW.g)(this, Ai), (0, mW.g)(this, bi, null)), this.upperRadiusLimit = ((0, mW.g)(this, ji), (0, mW.g)(this, Ui, null)), this.lowerTargetYLimit = ((0, mW.g)(this, ki), (0, mW.g)(this, si, -1 / 0)), this.inertialPanningX = ((0, mW.g)(this, Mi), (0, mW.g)(this, Ki, 0)), this.inertialPanningY = ((0, mW.g)(this, Si), (0, mW.g)(this, Yi, 0)), this.pinchToPanMaxDistance = ((0, mW.g)(this, yi), (0, mW.g)(this, Ti, 20)), this.panningDistanceLimit = ((0, mW.g)(this, Ji), (0, mW.g)(this, Hi, null)), this.panningOriginTarget = ((0, mW.g)(this, ni), (0, mW.g)(this, ui, PW.q.Zero())), this._panningInertia = ((0, mW.g)(this, oi), .9), this._inertia = .9, this.zoomOnFactor = (0, mW.g)(this, di, 1), this.targetScreenOffset = ((0, mW.g)(this, ei), (0, mW.g)(this, vi, PW.m.Zero())), this.allowUpsideDown = ((0, mW.g)(this, gi), (0, mW.g)(this, Di, !0)), this.useInputToRestoreState = ((0, mW.g)(this, Vi), (0, mW.g)(this, fi, !0)), this.restoreStateInterpolationFactor = ((0, mW.g)(this, Ci), (0, mW.g)(this, Xi, 0)), this._currentInterpolationFactor = ((0, mW.g)(this, Bi), 0), this._viewMatrix = new PW.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new PW.q(1, 1, 0), this._transformedDirection = new PW.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new NW.e, this.checkCollisions = !1, this.collisionRadius = new PW.q(.5, .5, .5), this._previousPosition = PW.q.Zero(), this._collisionVelocity = PW.q.Zero(), this._newPosition = PW.q.Zero(), this._computationVector = PW.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new PW.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new PW.m(NaN, NaN), this._onCollisionPositionChange = function(WW, iW) {
              let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              OW ? (wW.setPosition(iW), wW.Vx && wW.Vx(OW)) : wW._previousPosition.HJ(wW._position);
              const mW = Math.cos(wW.alpha),
                EW = Math.sin(wW.alpha),
                NW = Math.cos(wW.beta);
              let PW = Math.sin(wW.beta);
              0 === PW && (PW = 1e-4);
              const LW = wW._getTargetPosition();
              wW._computationVector.yWW(wW.radius * mW * PW, wW.radius * NW, wW.radius * EW * PW), LW.addToRef(wW._computationVector, wW._newPosition), wW._position.HJ(wW._newPosition);
              let cW = wW.upVector;
              wW.allowUpsideDown && wW.beta < 0 && (cW = cW.clone(), cW = cW.Lj()), wW._computeViewMatrix(wW._position, LW, cW), wW._viewMatrix.addAtIndex(12, wW.targetScreenOffset.x), wW._viewMatrix.addAtIndex(13, wW.targetScreenOffset.y), wW._collisionTriggered = !1
            }, this.HZ = PW.q.Zero(), LW && this.setTarget(LW), this.alpha = iW, this.beta = OW, this.radius = EW, this.getViewMatrix(), this.inputs = new eW(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new VW(this.bD(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.HZ = new PW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = PW.m.Zero()
          }
          _updateCache(WW) {
            WW || super._updateCache(), this._cache.HZ.HJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.HJ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const WW = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? WW.addToRef(this._targetBoundingCenter, this.HZ) : this.HZ.HJ(WW)
            }
            const WW = this._getLockedTargetPosition();
            return WW || this.HZ
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > xW.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              NW = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != NW ? this._currentInterpolationFactor = NW : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = pW(WW, this._goalAlpha), this._goalBeta = pW(iW, this._goalBeta), this._goalRadius = pW(OW, this._goalRadius), this._goalTarget.set(pW(mW.x, this._goalTarget.x), pW(mW.y, this._goalTarget.y), pW(mW.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(pW(EW.x, this._goalTargetScreenOffset.x), pW(EW.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, LW.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, LW.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, LW.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, LW.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.HZ.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(WW, iW) {
            let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const EW = arguments;
            iW = KW.f.BackCompatCameraNoPreventDefault(EW), this._useCtrlForPanning = OW, this._panningMouseButton = mW, "boolean" === typeof EW[0] && (EW.length > 1 && (this._useCtrlForPanning = EW[1]), EW.length > 2 && (this._panningMouseButton = EW[2])), this.inputs.attachElement(iW), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(WW, iW, OW) {
            const mW = this.invertRotation ? -1 : 1;
            let EW = WW * this._calculateHandednessMultiplier();
            this.beta < 0 && (EW *= -1), this.alpha += EW * mW, this.beta += iW * mW, this.radius -= OW
          }
          _applyPanDelta(WW, iW) {
            const OW = PW.l.fA[0].yWW(WW, iW, iW);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), OW.multiplyInPlace(this.panningAxis), PW.q.TransformNormalToRef(OW, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const WW = this.upVector,
                iW = PW.q.CrossToRef(this._transformedDirection, WW, this._transformedDirection);
              PW.q.CrossToRef(WW, iW, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.HZ);
                PW.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.HZ.HJ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const WW = PW.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(WW), WW.transposeToRef(WW), PW.q.TransformCoordinatesToRef(this._transformedDirection, WW, this._transformedDirection)
                }
                this.HZ.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let WW = !1;
            this.movement.computeCurrentFrameDeltas();
            const iW = this.movement.rotationDeltaCurrentFrame,
              OW = this.movement.zoomDeltaCurrentFrame,
              mW = this.movement.panDeltaCurrentFrame;
            if (0 === iW.x && 0 === iW.y && 0 === OW && 0 === mW.x && 0 === mW.y || (WW = !0, 0 === iW.x && 0 === iW.y && 0 === OW || this._applyRotationAndZoomDelta(iW.x, iW.y, OW), 0 === mW.x && 0 === mW.y || this._applyPanDelta(mW.x, mW.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), WW = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const iW = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < iW && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < iW && (this.inertialPanningY = 0), WW = !0
            }
            if (WW) this.stopInterpolation();
            else if (this._isInterpolating) {
              let WW = !1;
              const iW = this._scene.VA().getDeltaTime() / 1e3,
                OW = 1 - Math.pow(2, -iW / this._currentInterpolationFactor),
                mW = pW(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const iW = PW.l.fA[0].set(pW(this._goalTarget.x, this.HZ.x), pW(this._goalTarget.y, this.HZ.y), pW(this._goalTarget.z, this.HZ.z));
                PW.q.LerpToRef(this.target, iW, OW, this.HZ), 10 * PW.q.Distance(this.target, iW) / mW < xW.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.HJ(iW), this.setTarget(this.target, !1, !0, !0)) : WW = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const iW = PW.g.RotationAlphaBetaGammaToRef(pW(this._goalAlpha, this.alpha), pW(this._goalBeta, this.beta), 0, PW.l.Quaternion[0]),
                  mW = PW.g.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, PW.l.Quaternion[1]),
                  EW = PW.g.SlerpToRef(mW, iW, OW, PW.l.Quaternion[2]);
                EW.normalize();
                const NW = EW.toAlphaBetaGammaToRef(PW.l.fA[0]);
                if (this.alpha = NW.x, this.beta = NW.y, EW.isApprox(iW, xW.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const WW = iW.toAlphaBetaGammaToRef(PW.l.fA[0]);
                  this.alpha = WW.x, this.beta = WW.y
                } else WW = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (mW - this.radius) * OW, Math.abs(mW / this.radius - 1) < xW.e ? (this._goalRadius = NaN, this.radius = mW) : WW = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const iW = PW.l.Vector2[0].set(pW(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), pW(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                PW.m.LerpToRef(this.targetScreenOffset, iW, OW, this.targetScreenOffset), PW.m.Distance(this.targetScreenOffset, iW) < xW.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.HJ(iW)) : WW = !0
              }
              this._isInterpolating = WW
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || PW.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const WW = this.alpha;
            var iW, OW;
            this.alpha = function(WW) {
              let iW = Math.PI / 2;
              return 0 === WW.x && 0 === WW.z || (iW = Math.acos(WW.x / Math.sqrt(Math.pow(WW.x, 2) + Math.pow(WW.z, 2)))), WW.z < 0 && (iW = 2 * Math.PI - iW), iW
            }(this._computationVector), this.beta = (iW = this._computationVector.y, OW = this.radius, Math.acos(iW / OW));
            const mW = Math.round((WW - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * mW * Math.PI, this._checkLimits()
          }
          setPosition(WW) {
            this._position.equals(WW) || (this._position.HJ(WW), this.rebuildAnglesAndRadius())
          }
          setTarget(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (mW = this.overrideCloneAlphaBetaRadius ?? mW, WW.computeWorldMatrix) iW && WW.KV ? this._targetBoundingCenter = WW.KV().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, WW.computeWorldMatrix(), this._targetHost = WW, this.HZ = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const iW = WW,
                mW = this._getTargetPosition();
              if (mW && !OW && mW.equals(iW)) return;
              this._targetHost = null, this.HZ = iW, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            mW || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const WW = Math.cos(this.alpha),
              iW = Math.sin(this.alpha),
              OW = Math.cos(this.beta);
            let mW = Math.sin(this.beta);
            0 === mW && (mW = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const EW = this._getTargetPosition();
            if (this._computationVector.yWW(this.radius * WW * mW, this.radius * OW, this.radius * iW * mW), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || PW.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), EW.addToRef(this._computationVector, this._newPosition), this.bD().collisionsEnabled && this.checkCollisions) {
              const WW = this.bD().collisionCoordinator;
              this._collider || (this._collider = WW.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, WW.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.HJ(this._newPosition);
              let WW = this.upVector;
              this.allowUpsideDown && mW < 0 && (WW = WW.Lj()), this._computeViewMatrix(this._position, EW, WW), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.HJ(EW), this._viewMatrix
          }
          zoomOn(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            WW = WW || this.bD().meshes;
            const OW = wW.e.MinMax(WW);
            let mW = this._calculateLowerRadiusFromModelBoundingSphere(OW.min, OW.max);
            if (mW = Math.max(Math.min(mW, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = mW * this.zoomOnFactor, this.mode === kW.e.ORTHOGRAPHIC_CAMERA) {
              const WW = this.bD().VA().getAspectRatio(this),
                iW = mW * this.zoomOnFactor / 2;
              this.orthoLeft = -iW * WW, this.orthoRight = iW * WW, this.orthoBottom = -iW, this.orthoTop = iW
            }
            this.focusOn({
              min: OW.min,
              max: OW.max,
              distance: mW
            }, iW)
          }
          focusOn(WW) {
            let iW, OW, mW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === WW.min) {
              const mW = WW || this.bD().meshes;
              iW = wW.e.MinMax(mW), OW = PW.q.Distance(iW.min, iW.max)
            } else {
              iW = WW, OW = WW.distance
            }
            this.HZ = wW.e.Center(iW), mW || (this.maxZ = 2 * OW)
          }
          createRigCamera(iW, OW) {
            let mW = 0;
            switch (this.cameraRigMode) {
              case kW.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case kW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case kW.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case kW.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case kW.e.RIG_MODE_VR:
                mW = this._cameraRigParams.stereoHalfAngle * (0 === OW ? 1 : -1);
                break;
              case kW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                mW = this._cameraRigParams.stereoHalfAngle * (0 === OW ? -1 : 1)
            }
            const EW = new WW(iW, this.alpha + mW, this.beta, this.radius, this.HZ, this.bD());
            return EW._cameraRigParams = {}, EW.isRigCamera = !0, EW.rigParent = this, EW.upVector = this.upVector, EW.mode = this.mode, EW.orthoLeft = this.orthoLeft, EW.orthoRight = this.orthoRight, EW.orthoBottom = this.orthoBottom, EW.orthoTop = this.orthoTop, EW
          }
          _updateRigCameras() {
            const WW = this._rigCameras[0],
              iW = this._rigCameras[1];
            switch (WW.beta = iW.beta = this.beta, this.cameraRigMode) {
              case kW.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case kW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case kW.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case kW.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case kW.e.RIG_MODE_VR:
                WW.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, iW.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case kW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                WW.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, iW.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const mW = PW.q.Distance(WW, iW),
              EW = this.bD().VA().getAspectRatio(this),
              NW = Math.tan(this.fov / 2),
              LW = NW * EW,
              cW = .5 * mW * OW,
              wW = cW * Math.sqrt(1 + 1 / (LW * LW)),
              tW = cW * Math.sqrt(1 + 1 / (NW * NW));
            return Math.max(wW, tW)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(GW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], cW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.K)("target")], AW = [(0, EW.z)("targetHost")], bW = [(0, EW.M)()], MW = [(0, EW.M)()], SW = [(0, EW.M)()], YW = [(0, EW.M)()], yW = [(0, EW.M)()], TW = [(0, EW.M)()], JW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], oW = [(0, EW.M)()], dW = [(0, EW.M)()], vW = [(0, EW.M)()], gW = [(0, EW.K)()], DW = [(0, EW.M)()], fW = [(0, EW.M)()], CW = [(0, EW.M)()], XW = [(0, EW.H)()], BW = [(0, EW.M)()], qW = [(0, EW.M)()], RW = [(0, EW.M)()], (0, mW.e)(WW, null, bW, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialAlphaOffset" in WW,
              get: WW => WW.inertialAlphaOffset
            },
            metadata: NW
          }, null, IW), (0, mW.e)(WW, null, MW, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialBetaOffset" in WW,
              get: WW => WW.inertialBetaOffset
            },
            metadata: NW
          }, null, IW), (0, mW.e)(WW, null, SW, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialRadiusOffset" in WW,
              get: WW => WW.inertialRadiusOffset
            },
            metadata: NW
          }, null, IW), (0, mW.e)(WW, null, DW, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningInertia" in WW,
              get: WW => WW.panningInertia
            },
            metadata: NW
          }, null, IW), (0, mW.e)(WW, null, fW, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: WW => "zoomToMouseLocation" in WW,
              get: WW => WW.zoomToMouseLocation
            },
            metadata: NW
          }, null, IW), (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "alpha" in WW,
              get: WW => WW.alpha,
              set: (WW, iW) => {
                WW.alpha = iW
              }
            },
            metadata: NW
          }, aW, rW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: WW => "beta" in WW,
              get: WW => WW.beta,
              set: (WW, iW) => {
                WW.beta = iW
              }
            },
            metadata: NW
          }, zW, FW), (0, mW.e)(null, null, cW, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: WW => "radius" in WW,
              get: WW => WW.radius,
              set: (WW, iW) => {
                WW.radius = iW
              }
            },
            metadata: NW
          }, QW, Wi), (0, mW.e)(null, null, tW, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: WW => "overrideCloneAlphaBetaRadius" in WW,
              get: WW => WW.overrideCloneAlphaBetaRadius,
              set: (WW, iW) => {
                WW.overrideCloneAlphaBetaRadius = iW
              }
            },
            metadata: NW
          }, ii, Oi), (0, mW.e)(null, null, ZW, {
            kind: "field",
            name: "HZ",
            static: !1,
            private: !1,
            access: {
              has: WW => "HZ" in WW,
              get: WW => WW.HZ,
              set: (WW, iW) => {
                WW.HZ = iW
              }
            },
            metadata: NW
          }, mi, Ei), (0, mW.e)(null, null, AW, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: WW => "_targetHost" in WW,
              get: WW => WW._targetHost,
              set: (WW, iW) => {
                WW._targetHost = iW
              }
            },
            metadata: NW
          }, Ni, Pi), (0, mW.e)(null, null, YW, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerAlphaLimit" in WW,
              get: WW => WW.lowerAlphaLimit,
              set: (WW, iW) => {
                WW.lowerAlphaLimit = iW
              }
            },
            metadata: NW
          }, Li, ci), (0, mW.e)(null, null, yW, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperAlphaLimit" in WW,
              get: WW => WW.upperAlphaLimit,
              set: (WW, iW) => {
                WW.upperAlphaLimit = iW
              }
            },
            metadata: NW
          }, wi, ti), (0, mW.e)(null, null, TW, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerBetaLimit" in WW,
              get: WW => WW.lowerBetaLimit,
              set: (WW, iW) => {
                WW.lowerBetaLimit = iW
              }
            },
            metadata: NW
          }, Zi, xi), (0, mW.e)(null, null, JW, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperBetaLimit" in WW,
              get: WW => WW.upperBetaLimit,
              set: (WW, iW) => {
                WW.upperBetaLimit = iW
              }
            },
            metadata: NW
          }, li, Ai), (0, mW.e)(null, null, hW, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerRadiusLimit" in WW,
              get: WW => WW.lowerRadiusLimit,
              set: (WW, iW) => {
                WW.lowerRadiusLimit = iW
              }
            },
            metadata: NW
          }, bi, ji), (0, mW.e)(null, null, HW, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperRadiusLimit" in WW,
              get: WW => WW.upperRadiusLimit,
              set: (WW, iW) => {
                WW.upperRadiusLimit = iW
              }
            },
            metadata: NW
          }, Ui, ki), (0, mW.e)(null, null, nW, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerTargetYLimit" in WW,
              get: WW => WW.lowerTargetYLimit,
              set: (WW, iW) => {
                WW.lowerTargetYLimit = iW
              }
            },
            metadata: NW
          }, si, Mi), (0, mW.e)(null, null, uW, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialPanningX" in WW,
              get: WW => WW.inertialPanningX,
              set: (WW, iW) => {
                WW.inertialPanningX = iW
              }
            },
            metadata: NW
          }, Ki, Si), (0, mW.e)(null, null, oW, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialPanningY" in WW,
              get: WW => WW.inertialPanningY,
              set: (WW, iW) => {
                WW.inertialPanningY = iW
              }
            },
            metadata: NW
          }, Yi, yi), (0, mW.e)(null, null, dW, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchToPanMaxDistance" in WW,
              get: WW => WW.pinchToPanMaxDistance,
              set: (WW, iW) => {
                WW.pinchToPanMaxDistance = iW
              }
            },
            metadata: NW
          }, Ti, Ji), (0, mW.e)(null, null, vW, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningDistanceLimit" in WW,
              get: WW => WW.panningDistanceLimit,
              set: (WW, iW) => {
                WW.panningDistanceLimit = iW
              }
            },
            metadata: NW
          }, Hi, ni), (0, mW.e)(null, null, gW, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningOriginTarget" in WW,
              get: WW => WW.panningOriginTarget,
              set: (WW, iW) => {
                WW.panningOriginTarget = iW
              }
            },
            metadata: NW
          }, ui, oi), (0, mW.e)(null, null, CW, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: WW => "zoomOnFactor" in WW,
              get: WW => WW.zoomOnFactor,
              set: (WW, iW) => {
                WW.zoomOnFactor = iW
              }
            },
            metadata: NW
          }, di, ei), (0, mW.e)(null, null, XW, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "targetScreenOffset" in WW,
              get: WW => WW.targetScreenOffset,
              set: (WW, iW) => {
                WW.targetScreenOffset = iW
              }
            },
            metadata: NW
          }, vi, gi), (0, mW.e)(null, null, BW, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: WW => "allowUpsideDown" in WW,
              get: WW => WW.allowUpsideDown,
              set: (WW, iW) => {
                WW.allowUpsideDown = iW
              }
            },
            metadata: NW
          }, Di, Vi), (0, mW.e)(null, null, qW, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: WW => "useInputToRestoreState" in WW,
              get: WW => WW.useInputToRestoreState,
              set: (WW, iW) => {
                WW.useInputToRestoreState = iW
              }
            },
            metadata: NW
          }, fi, Ci), (0, mW.e)(null, null, RW, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: WW => "restoreStateInterpolationFactor" in WW,
              get: WW => WW.restoreStateInterpolationFactor,
              set: (WW, iW) => {
                WW.restoreStateInterpolationFactor = iW
              }
            },
            metadata: NW
          }, Xi, Bi), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      CW = !1;
    CW || (CW = !0, cW.d.AddNodeConstructor("ArcRotateCamera", ((WW, iW) => () => new fW(WW, 0, 0, 1, PW.q.Zero(), iW))), (0, vW.h)("BABYLON.ArcRotateCamera", fW))
  },
  41760: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.c
    });
    var mW = OW(41765);
    (0, mW.e)()
  },
  41765: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => xW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(38372),
      LW = OW(41773),
      cW = OW(41732),
      wW = OW(38299);
    let tW = (() => {
        var WW;
        let iW, OW, cW = LW.b,
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        return WW = class extends cW {
          constructor(WW, iW, OW, EW) {
            super(WW, OW, EW), this.groundColor = (0, mW.g)(this, wW, new PW.b(0, 0, 0)), this.direction = ((0, mW.g)(this, tW), (0, mW.g)(this, ZW, void 0)), (0, mW.g)(this, xW), this.direction = iW || NW.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = NW.q.Normalize(WW.subtract(NW.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", OW.x, OW.y, OW.z, 0, iW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), iW), this
          }
          transferToNodeMaterialEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return WW.setFloat3(iW, OW.x, OW.y, OW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = NW.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LW.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, iW) {
            WW["HEMILIGHT" + iW] = !0
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(cW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.n)()], OW = [(0, EW.K)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, iW) => {
                WW.groundColor = iW
              }
            },
            metadata: NW
          }, wW, tW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, iW) => {
                WW.direction = iW
              }
            },
            metadata: NW
          }, ZW, xW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      ZW = !1;

    function xW() {
      ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
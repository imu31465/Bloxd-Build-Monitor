export const id = 240;
export const ids = [240];
export const modules = {
  39952: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => NJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36200),
      XJ = ZJ(36174),
      AJ = ZJ(36207),
      qJ = ZJ(38989),
      jJ = ZJ(39159),
      YJ = ZJ(38938),
      hJ = ZJ(38700),
      DJ = ZJ(36177);
    class sJ {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(JJ) {
        this._zoomStopsAnimation = JJ
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(JJ) {
        this._idleRotationSpeed = JJ
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(JJ) {
        this._idleRotationWaitTime = JJ
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(JJ) {
        this._idleRotationSpinupTime = JJ
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
      attach(JJ) {
        this._attachedCamera = JJ;
        const cJ = this._attachedCamera.Qy();
        this._onPrePointerObservableObserver = cJ.onPrePointerObservable.add((JJ => {
          JJ.type !== YJ.c.POINTERDOWN ? JJ.type === YJ.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = JJ.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const JJ = hJ.c.Now;
          let cJ = 0;
          null != this._lastFrameTime && (cJ = JJ - this._lastFrameTime), this._lastFrameTime = JJ, this._applyUserInteraction();
          const ZJ = JJ - this._lastInteractionTime - this._idleRotationWaitTime,
            FJ = Math.max(Math.min(ZJ / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * FJ, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (cJ / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const JJ = this._attachedCamera.Qy();
        this._onPrePointerObservableObserver && JJ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(JJ) {
        this._lastInteractionTime = JJ ?? hJ.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < DJ.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let JJ = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (JJ = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? JJ : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = hJ.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ZJ(39956);
    class nJ {
      constructor() {
        this._easingMode = nJ.EASINGMODE_EASEIN
      }
      setEasingMode(JJ) {
        const cJ = Math.min(Math.max(JJ, 0), 2);
        this._easingMode = cJ
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(JJ) {
        throw new Error("You must implement this method")
      }
      ease(JJ) {
        switch (this._easingMode) {
          case nJ.EASINGMODE_EASEIN:
            return this.easeInCore(JJ);
          case nJ.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - JJ)
        }
        return JJ >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - JJ))) + .5 : .5 * this.easeInCore(2 * JJ)
      }
    }
    nJ.EASINGMODE_EASEIN = 0, nJ.EASINGMODE_EASEOUT = 1, nJ.EASINGMODE_EASEINOUT = 2;
    var GJ = ZJ(39958);
    class fJ {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(JJ) {
        if (this._autoTransitionRange === JJ) return;
        this._autoTransitionRange = JJ;
        const cJ = this._attachedCamera;
        cJ && (JJ ? this._onMeshTargetChangedObserver = cJ.onMeshTargetChangedObservable.add((JJ => {
          if (JJ && (JJ.computeWorldMatrix(!0), JJ.rM)) {
            const cJ = JJ.rM().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * cJ, this.upperRadiusTransitionRange = .05 * cJ
          }
        })) : this._onMeshTargetChangedObserver && cJ.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(JJ) {
        this._attachedCamera = JJ, this._onAfterCheckInputsObserver = JJ.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(JJ) {
        return !!this._attachedCamera && (this._attachedCamera.radius === JJ && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(JJ) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (fJ.EasingFunction.setEasingMode(fJ.EasingMode), this._radiusBounceTransition = GJ.c.CreateAnimation("radius", GJ.c.ANIMATIONTYPE_FLOAT, 60, fJ.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const cJ = GJ.c.TransitionTo("radius", this._attachedCamera.radius + JJ, this._attachedCamera, this._attachedCamera.Qy(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        cJ && this._animatables.push(cJ)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    fJ.EasingFunction = new class extends nJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = JJ
      }
      easeInCore(JJ) {
        const cJ = Math.max(0, this.amplitude);
        return Math.pow(JJ, 3) - JJ * cJ * Math.sin(3.141592653589793 * JJ)
      }
    }(.3), fJ.EasingMode = nJ.EASINGMODE_EASEOUT;
    class xJ {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new eJ.c, this._mode = xJ.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(JJ) {
        this._mode = JJ
      }
      get mode() {
        return this._mode
      }
      set radiusScale(JJ) {
        this._radiusScale = JJ
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(JJ) {
        this._positionScale = JJ
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(JJ) {
        this._defaultElevation = JJ
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(JJ) {
        this._elevationReturnTime = JJ
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(JJ) {
        this._elevationReturnWaitTime = JJ
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(JJ) {
        this._zoomStopsAnimation = JJ
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(JJ) {
        this._framingTime = JJ
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(JJ) {
        this._attachedCamera = JJ;
        const cJ = this._attachedCamera.Qy();
        xJ.EasingFunction.setEasingMode(xJ.EasingMode), this._onPrePointerObservableObserver = cJ.onPrePointerObservable.add((JJ => {
          JJ.type !== YJ.c.POINTERDOWN ? JJ.type === YJ.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = JJ.onMeshTargetChangedObservable.add((JJ => {
          JJ && JJ.rM && this.zoomOnMesh(JJ, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = JJ.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const JJ = this._attachedCamera.Qy();
        this._onPrePointerObservableObserver && JJ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        JJ.computeWorldMatrix(!0);
        const FJ = JJ.rM().boundingBox;
        this.zoomOnBoundingInfo(FJ.minimumWorld, FJ.maximumWorld, cJ, ZJ)
      }
      zoomOnMeshHierarchy(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        JJ.computeWorldMatrix(!0);
        const FJ = JJ.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(FJ.min, FJ.max, cJ, ZJ)
      }
      zoomOnMeshesHierarchy(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FJ = new XJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          UJ = new XJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let eJ = 0; eJ < JJ.length; eJ++) {
          const cJ = JJ[eJ].getHierarchyBoundingVectors(!0);
          XJ.j.CheckExtends(cJ.min, FJ, UJ), XJ.j.CheckExtends(cJ.max, FJ, UJ)
        }
        this.zoomOnBoundingInfo(FJ, UJ, cJ, ZJ)
      }
      zoomOnBoundingInfo(JJ, cJ) {
        let ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const eJ = JJ.y,
          AJ = eJ + (cJ.y - eJ) * this._positionScale,
          qJ = cJ.subtract(JJ).scale(.5);
        if (!isFinite(AJ)) return !1;
        if (FJ) ZJ = new XJ.j(0, AJ, 0);
        else {
          const cJ = JJ.add(qJ);
          ZJ = new XJ.j(cJ.x, AJ, cJ.z)
        }
        this._vectorTransition || (this._vectorTransition = GJ.c.CreateAnimation("target", GJ.c.ANIMATIONTYPE_VECTOR3, 60, xJ.EasingFunction)), this._betaIsAnimating = !0;
        let jJ = GJ.c.TransitionTo("target", ZJ, this._attachedCamera, this._attachedCamera.Qy(), 60, this._vectorTransition, this._framingTime);
        jJ && this._animatables.push(jJ);
        let YJ = 0;
        if (this._mode === xJ.FitFrustumSidesMode) {
          const ZJ = this._calculateLowerRadiusFromModelBoundingSphere(JJ, cJ);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = qJ.length() + this._attachedCamera.minZ), YJ = ZJ
        } else this._mode === xJ.IgnoreBoundsSizeMode && (YJ = this._calculateLowerRadiusFromModelBoundingSphere(JJ, cJ), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ZJ = cJ.subtract(JJ).length();
          this._attachedCamera.panningSensibility = 5e3 / ZJ, this._attachedCamera.wheelPrecision = 100 / YJ
        }
        return this._radiusTransition || (this._radiusTransition = GJ.c.CreateAnimation("radius", GJ.c.ANIMATIONTYPE_FLOAT, 60, xJ.EasingFunction)), jJ = GJ.c.TransitionTo("radius", YJ, this._attachedCamera, this._attachedCamera.Qy(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), UJ && UJ(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), jJ && this._animatables.push(jJ), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(JJ, cJ) {
        const ZJ = this._attachedCamera;
        if (!ZJ) return 0;
        let FJ = ZJ._calculateLowerRadiusFromModelBoundingSphere(JJ, cJ, this._radiusScale);
        return ZJ.lowerRadiusLimit && this._mode === xJ.IgnoreBoundsSizeMode && (FJ = FJ < ZJ.lowerRadiusLimit ? ZJ.lowerRadiusLimit : FJ), ZJ.upperRadiusLimit && (FJ = FJ > ZJ.upperRadiusLimit ? ZJ.upperRadiusLimit : FJ), FJ
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const JJ = hJ.c.Now - this._lastInteractionTime,
          cJ = .5 * Math.PI - this._defaultElevation,
          ZJ = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZJ && JJ >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = GJ.c.CreateAnimation("beta", GJ.c.ANIMATIONTYPE_FLOAT, 60, xJ.EasingFunction));
          const JJ = GJ.c.TransitionTo("beta", cJ, this._attachedCamera, this._attachedCamera.Qy(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          JJ && this._animatables.push(JJ)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = hJ.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    xJ.EasingFunction = new class extends nJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = JJ
      }
      easeInCore(JJ) {
        return this.exponent <= 0 ? JJ : (Math.exp(this.exponent * JJ) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, xJ.EasingMode = nJ.EASINGMODE_EASEINOUT, xJ.IgnoreBoundsSizeMode = 0, xJ.FitFrustumSidesMode = 1;
    var rJ = ZJ(38986),
      vJ = ZJ(38982),
      mJ = ZJ(39006),
      QJ = ZJ(38879);
    let EJ = (() => {
        var JJ;
        let cJ, ZJ = [],
          eJ = [];
        return JJ = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, FJ.e)(this, ZJ, [0, 1, 2]), this._pointerInput = (0, FJ.e)(this, eJ)
          }
          attachControl(JJ) {
            JJ = QJ.j.BackCompatCameraNoPreventDefault(arguments);
            const cJ = this.camera.gn(),
              ZJ = cJ.getInputElement();
            let FJ = 0,
              UJ = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = eJ => {
              const XJ = eJ.event,
                AJ = "touch" === XJ.pointerType;
              if (eJ.type !== YJ.c.POINTERMOVE && -1 === this.buttons.indexOf(XJ.button)) return;
              const qJ = XJ.target;
              if (this._altKey = XJ.altKey, this._ctrlKey = XJ.ctrlKey, this._metaKey = XJ.metaKey, this._shiftKey = XJ.shiftKey, this._buttonsPressed = XJ.buttons, cJ.isPointerLock) {
                const JJ = XJ.movementX,
                  cJ = XJ.movementY;
                this.onTouch(null, JJ, cJ), this._pointA = null, this._pointB = null
              } else {
                if (eJ.type !== YJ.c.POINTERDOWN && eJ.type !== YJ.c.POINTERDOUBLETAP && AJ && this._pointA?.pointerId !== XJ.pointerId && this._pointB?.pointerId !== XJ.pointerId) return;
                if (eJ.type !== YJ.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !AJ)
                  if (eJ.type === YJ.c.POINTERDOUBLETAP) this.onDoubleTap(XJ.pointerType, XJ);
                  else if (eJ.type !== YJ.c.POINTERUP || this._currentMousePointerIdDown !== XJ.pointerId && !AJ) {
                  if (eJ.type === YJ.c.POINTERMOVE)
                    if (JJ || XJ.preventDefault(), this._pointA && null === this._pointB) {
                      const JJ = XJ.clientX - this._pointA.x,
                        cJ = XJ.clientY - this._pointA.y;
                      this._pointA.x = XJ.clientX, this._pointA.y = XJ.clientY, this.onTouch(this._pointA, JJ, cJ)
                    } else if (this._pointA && this._pointB) {
                    const JJ = this._pointA.pointerId === XJ.pointerId ? this._pointA : this._pointB;
                    JJ.x = XJ.clientX, JJ.y = XJ.clientY;
                    const cJ = this._pointA.x - this._pointB.x,
                      ZJ = this._pointA.y - this._pointB.y,
                      AJ = cJ * cJ + ZJ * ZJ,
                      qJ = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: XJ.pointerId,
                        type: eJ.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, FJ, AJ, UJ, qJ), UJ = qJ, FJ = AJ
                  }
                } else {
                  try {
                    qJ?.releasePointerCapture(XJ.pointerId)
                  } catch (jJ) {}
                  AJ || (this._pointB = null), cJ._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == XJ.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == XJ.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== FJ || UJ) && (this.onMultiTouch(this._pointA, this._pointB, FJ, 0, UJ, null), FJ = 0, UJ = null), this._currentMousePointerIdDown = -1, this.onButtonUp(XJ), JJ || XJ.preventDefault()
                } else {
                  try {
                    qJ?.setPointerCapture(XJ.pointerId)
                  } catch (jJ) {}
                  if (null === this._pointA) this._pointA = {
                    x: XJ.clientX,
                    y: XJ.clientY,
                    pointerId: XJ.pointerId,
                    type: XJ.pointerType,
                    button: XJ.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: XJ.clientX,
                      y: XJ.clientY,
                      pointerId: XJ.pointerId,
                      type: XJ.pointerType,
                      button: XJ.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || AJ || (this._currentMousePointerIdDown = XJ.pointerId), this.onButtonDown(XJ), JJ || (XJ.preventDefault(), ZJ && ZJ.focus())
                }
              }
            }, this._observer = this.camera.Qy()._inputManager._addCameraPointerObserver(this._pointerInput, YJ.c.POINTERDOWN | YJ.c.POINTERUP | YJ.c.POINTERMOVE | YJ.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, FJ = 0, UJ = null, this.onLostFocus()
            }, this._contextMenuBind = JJ => this.onContextMenu(JJ), ZJ && ZJ.addEventListener("contextmenu", this._contextMenuBind, !1);
            const eJ = this.camera.Qy().gn().getHostWindow();
            eJ && QJ.j.RegisterTopRootEvents(eJ, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const JJ = this.camera.Qy().gn().getHostWindow();
              JJ && QJ.j.UnregisterTopRootEvents(JJ, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Qy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const JJ = this.camera.Qy().gn().getInputElement();
                JJ && JJ.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(JJ, cJ) {}
          onTouch(JJ, cJ, ZJ) {}
          onMultiTouch(JJ, cJ, ZJ, FJ, UJ, eJ) {}
          onContextMenu(JJ) {
            JJ.preventDefault()
          }
          onButtonDown(JJ) {}
          onButtonUp(JJ) {}
          onLostFocus() {}
        }, (() => {
          const XJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: JJ => "buttons" in JJ,
              get: JJ => JJ.buttons,
              set: (JJ, cJ) => {
                JJ.buttons = cJ
              }
            },
            metadata: XJ
          }, ZJ, eJ), XJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XJ
          })
        })(), JJ
      })(),
      VJ = (() => {
        var JJ;
        let cJ, ZJ, eJ, XJ = EJ,
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        return JJ = class extends XJ {
          constructor() {
            super(...arguments), this.pinchZoom = (0, FJ.e)(this, AJ, !0), this.multiTouchPanning = ((0, FJ.e)(this, qJ), (0, FJ.e)(this, jJ, !0)), this.multiTouchPanAndZoom = ((0, FJ.e)(this, YJ), (0, FJ.e)(this, hJ, !0)), this._isPinching = ((0, FJ.e)(this, DJ), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(JJ, cJ) {}
          _computeMultiTouchPanning(JJ, cJ) {}
          onMultiTouch(JJ, cJ, ZJ, FJ, UJ, eJ) {
            0 === ZJ && null === UJ || 0 === FJ && null === eJ || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ZJ, FJ), this._computeMultiTouchPanning(UJ, eJ)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ZJ, FJ), this._isPinching = !0) : this._computeMultiTouchPanning(UJ, eJ)) : this.multiTouchPanning ? this._computeMultiTouchPanning(UJ, eJ) : this.pinchZoom && this._computePinchZoom(ZJ, FJ))
          }
          onButtonUp(JJ) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(XJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pinchZoom" in JJ,
              get: JJ => JJ.pinchZoom,
              set: (JJ, cJ) => {
                JJ.pinchZoom = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: JJ => "multiTouchPanning" in JJ,
              get: JJ => JJ.multiTouchPanning,
              set: (JJ, cJ) => {
                JJ.multiTouchPanning = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, FJ.d)(null, null, eJ, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: JJ => "multiTouchPanAndZoom" in JJ,
              get: JJ => JJ.multiTouchPanAndZoom,
              set: (JJ, cJ) => {
                JJ.multiTouchPanAndZoom = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), sJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          })
        })(), JJ
      })(),
      KJ = (() => {
        var JJ;
        let cJ, ZJ, eJ, XJ, AJ, qJ, jJ, YJ = VJ,
          hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [],
          vJ = [],
          mJ = [],
          QJ = [],
          EJ = [],
          KJ = [],
          yJ = [];
        return JJ = class extends YJ {
          constructor() {
            super(...arguments), this.buttons = (0, FJ.e)(this, hJ, [0, 1, 2]), this.angularSensibilityX = ((0, FJ.e)(this, DJ), (0, FJ.e)(this, sJ, 1e3)), this.angularSensibilityY = ((0, FJ.e)(this, nJ), (0, FJ.e)(this, GJ, 1e3)), this.pinchPrecision = ((0, FJ.e)(this, fJ), (0, FJ.e)(this, xJ, 12)), this.pinchDeltaPercentage = ((0, FJ.e)(this, rJ), (0, FJ.e)(this, vJ, 0)), this.useNaturalPinchZoom = ((0, FJ.e)(this, mJ), (0, FJ.e)(this, QJ, !1)), this.panningSensibility = ((0, FJ.e)(this, EJ), (0, FJ.e)(this, KJ, 1e3)), this.pinchInwards = ((0, FJ.e)(this, yJ), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(JJ, cJ) {
            if (JJ && cJ) {
              const ZJ = cJ.x - JJ.x,
                FJ = cJ.y - JJ.y,
                UJ = this.camera.movement.input.getEntry("pointer", "pan"),
                eJ = UJ?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== eJ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ZJ * eJ, this.camera.movement.panAccumulatedPixels.y += FJ * eJ)
            }
          }
          _computePinchZoom(cJ, ZJ) {
            const FJ = this.camera.radius || JJ.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = FJ * Math.sqrt(cJ) / Math.sqrt(ZJ);
            else if (this.pinchDeltaPercentage) {
              const JJ = .001 * (ZJ - cJ) * FJ * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += JJ
            } else {
              const JJ = (ZJ - cJ) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += JJ
            }
          }
          onTouch(JJ, cJ, ZJ) {
            const FJ = this._activeEntry ?? (this.camera.gn().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (FJ)
              if ("pan" === FJ.interaction) {
                const JJ = FJ.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== JJ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -cJ * JJ, this.camera.movement.panAccumulatedPixels.y += ZJ * JJ)
              } else if ("rotate" === FJ.interaction) {
              const JJ = FJ.pT ?? FJ.sensitivity ?? 1 / this.angularSensibilityX,
                UJ = FJ.aT ?? FJ.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -cJ * JJ, this.camera.movement.rotationAccumulatedPixels.y += -ZJ * UJ
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(JJ, cJ, ZJ, FJ, UJ, eJ) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(FJ) - Math.sqrt(ZJ)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(JJ, cJ, ZJ, FJ, UJ, eJ)
          }
          onButtonDown(JJ) {
            this._pointerConditions.button = JJ.button, this._pointerModifiers.ctrl = JJ.ctrlKey, this._pointerModifiers.alt = JJ.altKey, this._pointerModifiers.shift = JJ.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(JJ)
          }
          onButtonUp(JJ) {
            this._activeEntry = null, super.onButtonUp(JJ)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const VJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(YJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], XJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: JJ => "buttons" in JJ,
              get: JJ => JJ.buttons,
              set: (JJ, cJ) => {
                JJ.buttons = cJ
              }
            },
            metadata: VJ
          }, hJ, DJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "angularSensibilityX" in JJ,
              get: JJ => JJ.angularSensibilityX,
              set: (JJ, cJ) => {
                JJ.angularSensibilityX = cJ
              }
            },
            metadata: VJ
          }, sJ, nJ), (0, FJ.d)(null, null, eJ, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "angularSensibilityY" in JJ,
              get: JJ => JJ.angularSensibilityY,
              set: (JJ, cJ) => {
                JJ.angularSensibilityY = cJ
              }
            },
            metadata: VJ
          }, GJ, fJ), (0, FJ.d)(null, null, XJ, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pinchPrecision" in JJ,
              get: JJ => JJ.pinchPrecision,
              set: (JJ, cJ) => {
                JJ.pinchPrecision = cJ
              }
            },
            metadata: VJ
          }, xJ, rJ), (0, FJ.d)(null, null, AJ, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pinchDeltaPercentage" in JJ,
              get: JJ => JJ.pinchDeltaPercentage,
              set: (JJ, cJ) => {
                JJ.pinchDeltaPercentage = cJ
              }
            },
            metadata: VJ
          }, vJ, mJ), (0, FJ.d)(null, null, qJ, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useNaturalPinchZoom" in JJ,
              get: JJ => JJ.useNaturalPinchZoom,
              set: (JJ, cJ) => {
                JJ.useNaturalPinchZoom = cJ
              }
            },
            metadata: VJ
          }, QJ, EJ), (0, FJ.d)(null, null, jJ, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: JJ => "panningSensibility" in JJ,
              get: JJ => JJ.panningSensibility,
              set: (JJ, cJ) => {
                JJ.panningSensibility = cJ
              }
            },
            metadata: VJ
          }, KJ, yJ), VJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VJ
          })
        })(), JJ.MinimumRadiusForPinch = .001, JJ
      })();
    mJ.d.ArcRotateCameraPointersInput = KJ;
    var yJ = ZJ(38946);
    let SJ = (() => {
      var JJ;
      let cJ, ZJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ = [],
        fJ = [],
        xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [];
      return JJ = class {
        constructor() {
          this.camera = (0, FJ.e)(this, GJ), this.keysUp = (0, FJ.e)(this, fJ, [38]), this.keysDown = ((0, FJ.e)(this, xJ), (0, FJ.e)(this, rJ, [40])), this.keysLeft = ((0, FJ.e)(this, vJ), (0, FJ.e)(this, mJ, [37])), this.keysRight = ((0, FJ.e)(this, EJ), (0, FJ.e)(this, VJ, [39])), this.keysReset = ((0, FJ.e)(this, KJ), (0, FJ.e)(this, SJ, [220])), this.keysZoomIn = ((0, FJ.e)(this, IJ), (0, FJ.e)(this, MJ, [187, 107])), this.keysZoomOut = ((0, FJ.e)(this, bJ), (0, FJ.e)(this, wJ, [189, 109])), this.panningSensibility = ((0, FJ.e)(this, WJ), (0, FJ.e)(this, gJ, 50)), this.zoomingSensibility = ((0, FJ.e)(this, HJ), (0, FJ.e)(this, PJ, 25)), this.angularSpeed = ((0, FJ.e)(this, kJ), (0, FJ.e)(this, pJ, .01)), this._useAltToZoom = ((0, FJ.e)(this, dJ), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new XJ.i, this._panDirection = new XJ.i
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(JJ) {
          this._useAltToZoom = JJ, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const JJ = this.camera.movement.input,
            cJ = JJ.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && cJ ? JJ.inputMap.splice(JJ.inputMap.indexOf(cJ), 1) : this._useAltToZoom && !cJ && JJ.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(JJ) {
          JJ = QJ.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Qy(), this._engine = this._scene.gn(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((cJ => {
            const ZJ = cJ.event;
            if (!ZJ.metaKey)
              if (cJ.type === yJ.c.KEYDOWN) {
                if (this._ctrlPressed = ZJ.ctrlKey, this._altPressed = ZJ.altKey, -1 !== this.keysUp.indexOf(ZJ.keyCode) || -1 !== this.keysDown.indexOf(ZJ.keyCode) || -1 !== this.keysLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRight.indexOf(ZJ.keyCode) || -1 !== this.keysReset.indexOf(ZJ.keyCode) || -1 !== this.keysZoomIn.indexOf(ZJ.keyCode) || -1 !== this.keysZoomOut.indexOf(ZJ.keyCode)) {
                  -1 === this._keys.indexOf(ZJ.keyCode) && this._keys.push(ZJ.keyCode), ZJ.preventDefault && (JJ || ZJ.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ZJ.keyCode) || -1 !== this.keysDown.indexOf(ZJ.keyCode) || -1 !== this.keysLeft.indexOf(ZJ.keyCode) || -1 !== this.keysRight.indexOf(ZJ.keyCode) || -1 !== this.keysReset.indexOf(ZJ.keyCode) || -1 !== this.keysZoomIn.indexOf(ZJ.keyCode) || -1 !== this.keysZoomOut.indexOf(ZJ.keyCode)) {
              const cJ = this._keys.indexOf(ZJ.keyCode);
              cJ >= 0 && this._keys.splice(cJ, 1), ZJ.preventDefault && (JJ || ZJ.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const JJ = this.camera,
              cJ = JJ.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ZJ = this._rotateDirection.set(0, 0),
              FJ = this._panDirection.set(0, 0);
            let UJ = 0,
              eJ = 0;
            for (let XJ = 0; XJ < this._keys.length; XJ++) {
              const AJ = this._keys[XJ];
              if (this._keyboardConditions.key = AJ, -1 === this.keysReset.indexOf(AJ)) {
                const JJ = cJ.resolveInteraction("keyboard", this._keyboardConditions);
                if (JJ)
                  if ("pan" === JJ.interaction) eJ = Math.max(eJ, JJ.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(AJ) ? FJ.x -= 1 : -1 !== this.keysRight.indexOf(AJ) ? FJ.x += 1 : -1 !== this.keysUp.indexOf(AJ) ? FJ.y += 1 : -1 !== this.keysDown.indexOf(AJ) && (FJ.y -= 1);
                  else if ("zoom" === JJ.interaction) {
                  const ZJ = JJ.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(AJ) || -1 !== this.keysZoomIn.indexOf(AJ) ? cJ.handlers.zoom(ZJ) : -1 === this.keysDown.indexOf(AJ) && -1 === this.keysZoomOut.indexOf(AJ) || cJ.handlers.zoom(-ZJ)
                } else "rotate" === JJ.interaction && (UJ = Math.max(UJ, JJ.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(AJ) ? ZJ.x -= 1 : -1 !== this.keysRight.indexOf(AJ) ? ZJ.x += 1 : -1 !== this.keysUp.indexOf(AJ) ? ZJ.y -= 1 : -1 !== this.keysDown.indexOf(AJ) && (ZJ.y += 1))
              } - 1 !== this.keysReset.indexOf(AJ) && JJ.useInputToRestoreState && JJ.restoreState()
            }
            0 === ZJ.x && 0 === ZJ.y || (ZJ.normalize().scaleInPlace(UJ), cJ.handlers.rotate(ZJ.x, ZJ.y)), 0 === FJ.x && 0 === FJ.y || (FJ.normalize().scaleInPlace(eJ), cJ.handlers.pan(FJ.x, FJ.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const XJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], sJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, nJ, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAltToZoom" in JJ,
            get: JJ => JJ.useAltToZoom
          },
          metadata: XJ
        }, null, GJ), (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysUp" in JJ,
            get: JJ => JJ.keysUp,
            set: (JJ, cJ) => {
              JJ.keysUp = cJ
            }
          },
          metadata: XJ
        }, fJ, xJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysDown" in JJ,
            get: JJ => JJ.keysDown,
            set: (JJ, cJ) => {
              JJ.keysDown = cJ
            }
          },
          metadata: XJ
        }, rJ, vJ), (0, FJ.d)(null, null, eJ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysLeft" in JJ,
            get: JJ => JJ.keysLeft,
            set: (JJ, cJ) => {
              JJ.keysLeft = cJ
            }
          },
          metadata: XJ
        }, mJ, EJ), (0, FJ.d)(null, null, AJ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysRight" in JJ,
            get: JJ => JJ.keysRight,
            set: (JJ, cJ) => {
              JJ.keysRight = cJ
            }
          },
          metadata: XJ
        }, VJ, KJ), (0, FJ.d)(null, null, qJ, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysReset" in JJ,
            get: JJ => JJ.keysReset,
            set: (JJ, cJ) => {
              JJ.keysReset = cJ
            }
          },
          metadata: XJ
        }, SJ, IJ), (0, FJ.d)(null, null, jJ, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysZoomIn" in JJ,
            get: JJ => JJ.keysZoomIn,
            set: (JJ, cJ) => {
              JJ.keysZoomIn = cJ
            }
          },
          metadata: XJ
        }, MJ, bJ), (0, FJ.d)(null, null, YJ, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: JJ => "keysZoomOut" in JJ,
            get: JJ => JJ.keysZoomOut,
            set: (JJ, cJ) => {
              JJ.keysZoomOut = cJ
            }
          },
          metadata: XJ
        }, wJ, WJ), (0, FJ.d)(null, null, hJ, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: JJ => "panningSensibility" in JJ,
            get: JJ => JJ.panningSensibility,
            set: (JJ, cJ) => {
              JJ.panningSensibility = cJ
            }
          },
          metadata: XJ
        }, gJ, HJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: JJ => "zoomingSensibility" in JJ,
            get: JJ => JJ.zoomingSensibility,
            set: (JJ, cJ) => {
              JJ.zoomingSensibility = cJ
            }
          },
          metadata: XJ
        }, PJ, kJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: JJ => "angularSpeed" in JJ,
            get: JJ => JJ.angularSpeed,
            set: (JJ, cJ) => {
              JJ.angularSpeed = cJ
            }
          },
          metadata: XJ
        }, pJ, dJ), XJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XJ
        })
      })(), JJ
    })();
    mJ.d.ArcRotateCameraKeyboardMoveInput = SJ;
    var IJ = ZJ(36744),
      MJ = ZJ(38953);
    let bJ = (() => {
      var JJ;
      let cJ, ZJ, eJ, qJ = [],
        jJ = [],
        hJ = [],
        sJ = [],
        nJ = [],
        GJ = [];
      return JJ = class {
        constructor() {
          this.wheelPrecision = (0, FJ.e)(this, qJ, 3), this.zoomToMouseLocation = ((0, FJ.e)(this, jJ), (0, FJ.e)(this, hJ, !1)), this.wheelDeltaPercentage = ((0, FJ.e)(this, sJ), (0, FJ.e)(this, nJ, 0)), this.customComputeDeltaFromMouseWheel = ((0, FJ.e)(this, GJ), null), this._viewOffset = new XJ.j(0, 0, 0), this._globalOffset = new XJ.j(0, 0, 0), this._inertialPanning = XJ.j.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(JJ, cJ) {
          let ZJ;
          const FJ = .01 * JJ * this.wheelDeltaPercentage * cJ;
          return ZJ = JJ > 0 ? FJ / (1 + this.wheelDeltaPercentage) : FJ * (1 + this.wheelDeltaPercentage), ZJ
        }
        attachControl(JJ) {
          JJ = QJ.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = cJ => {
            if (cJ.type !== YJ.c.POINTERWHEEL) return;
            const ZJ = cJ.event;
            let FJ;
            const UJ = ZJ.deltaMode === MJ.d.DOM_DELTA_LINE ? 40 : 1,
              eJ = -ZJ.deltaY * UJ;
            if (this.customComputeDeltaFromMouseWheel) FJ = this.customComputeDeltaFromMouseWheel(eJ, this, ZJ);
            else if (this.wheelDeltaPercentage) {
              if (FJ = this._computeDeltaFromMouseWheelLegacyEvent(eJ, this.camera.radius), FJ > 0) {
                const JJ = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let cJ = this.camera.radius,
                  ZJ = JJ + FJ;
                for (let FJ = 0; FJ < 20 && !(cJ <= ZJ) && !(Math.abs(ZJ * this.camera.inertia) < .001); FJ++) cJ -= ZJ, ZJ *= this.camera.inertia;
                cJ = (0, AJ.Clamp)(cJ, 0, Number.MAX_VALUE), FJ = this._computeDeltaFromMouseWheelLegacyEvent(eJ, cJ)
              }
            } else {
              const JJ = this.camera.movement.input.getEntry("wheel", "zoom");
              FJ = eJ * (JJ?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            FJ && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(FJ)) : this.camera.movement.zoomAccumulatedPixels += FJ), ZJ.preventDefault && (JJ || ZJ.preventDefault())
          }, this._observer = this.camera.Qy()._inputManager._addCameraPointerObserver(this._wheel, YJ.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.X3(0)
        }
        detachControl() {
          this._observer && (this.camera.Qy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const JJ = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(JJ.inertialAlphaOffset) + Math.abs(JJ.inertialBetaOffset) + Math.abs(JJ.inertialRadiusOffset)) {
            this._updateHitPlane(), JJ.target.addInPlace(this._inertialPanning), JJ.radius -= this._zoomToMouseRadiusOffset;
            const cJ = JJ.movement.getFrameIndependentDecay(JJ.inertia);
            this._inertialPanning.scaleInPlace(cJ), this._zoomToMouseRadiusOffset *= cJ, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < DJ.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const JJ = this.camera,
            cJ = JJ.target.subtract(JJ.position);
          this._hitPlane = IJ.c.FromPositionAndNormal(JJ.target, cJ)
        }
        _getPosition() {
          const JJ = this.camera,
            cJ = JJ.Qy(),
            ZJ = cJ.createPickingRay(cJ.pointerX, cJ.pointerY, XJ.b.Identity(), JJ, !1);
          0 === JJ.targetScreenOffset.x && 0 === JJ.targetScreenOffset.y || (this._viewOffset.set(JJ.targetScreenOffset.x, JJ.targetScreenOffset.y, 0), JJ.getViewMatrix().invertToRef(JJ._cameraTransformMatrix), this._globalOffset = XJ.j.TransformNormal(this._viewOffset, JJ._cameraTransformMatrix), ZJ.origin.addInPlace(this._globalOffset));
          let FJ = 0;
          return this._hitPlane && (FJ = ZJ.intersectsPlane(this._hitPlane) ?? 0), ZJ.origin.addInPlace(ZJ.direction.scaleInPlace(FJ))
        }
        _zoomToMouse(JJ) {
          const cJ = this.camera,
            ZJ = 1 - cJ.inertia,
            FJ = cJ.movement.getFrameIndependentInputScale(cJ.inertia);
          if (cJ.lowerRadiusLimit) {
            const UJ = cJ.lowerRadiusLimit ?? 0;
            cJ.radius - (this._zoomToMouseRadiusOffset + JJ * FJ) / ZJ < UJ && (JJ = ((cJ.radius - UJ) * ZJ - this._zoomToMouseRadiusOffset) / FJ)
          }
          if (cJ.upperRadiusLimit) {
            const UJ = cJ.upperRadiusLimit ?? 0;
            cJ.radius - (this._zoomToMouseRadiusOffset + JJ * FJ) / ZJ > UJ && (JJ = ((cJ.radius - UJ) * ZJ - this._zoomToMouseRadiusOffset) / FJ)
          }
          const UJ = JJ / ZJ / cJ.radius,
            eJ = this._getPosition(),
            AJ = XJ.h.Pn[6];
          eJ.subtractToRef(cJ.target, AJ), AJ.scaleInPlace(UJ), AJ.scaleInPlace(ZJ), AJ.scaleInPlace(FJ), this._inertialPanning.addInPlace(AJ), this._zoomToMouseRadiusOffset += JJ * FJ
        }
        _zeroIfClose(JJ) {
          Math.abs(JJ.x) < DJ.e && (JJ.x = 0), Math.abs(JJ.y) < DJ.e && (JJ.y = 0), Math.abs(JJ.z) < DJ.e && (JJ.z = 0)
        }
      }, (() => {
        const XJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelPrecision" in JJ,
            get: JJ => JJ.wheelPrecision,
            set: (JJ, cJ) => {
              JJ.wheelPrecision = cJ
            }
          },
          metadata: XJ
        }, qJ, jJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "zoomToMouseLocation" in JJ,
            get: JJ => JJ.zoomToMouseLocation,
            set: (JJ, cJ) => {
              JJ.zoomToMouseLocation = cJ
            }
          },
          metadata: XJ
        }, hJ, sJ), (0, FJ.d)(null, null, eJ, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: JJ => "wheelDeltaPercentage" in JJ,
            get: JJ => JJ.wheelDeltaPercentage,
            set: (JJ, cJ) => {
              JJ.wheelDeltaPercentage = cJ
            }
          },
          metadata: XJ
        }, nJ, GJ), XJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XJ
        })
      })(), JJ
    })();
    mJ.d.ArcRotateCameraMouseWheelInput = bJ;
    var wJ, WJ, gJ = ZJ(38677);
    class HJ extends mJ.e {
      constructor(JJ) {
        super(JJ)
      }
      addMouseWheel() {
        return this.add(new bJ), this
      }
      addPointers() {
        return this.add(new KJ), this
      }
      addKeyboard() {
        return this.add(new SJ), this
      }
    }(wJ = HJ.prototype).addVRDeviceOrientation ?? (wJ.addVRDeviceOrientation = (0, gJ.l)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (WJ = HJ.prototype).addGamepad ?? (WJ.addGamepad = (0, gJ.l)("ArcRotateCameraInputsManager", "addGamepad"));
    var PJ = ZJ(36216),
      kJ = ZJ(38996),
      pJ = ZJ(38999);
    class dJ extends kJ.c {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, ZJ), this.input = new pJ.b({
          pan: (JJ, cJ) => {
            this.panAccumulatedPixels.x += JJ, this.panAccumulatedPixels.y += cJ
          },
          rotate: (JJ, cJ) => {
            this.rotationAccumulatedPixels.x += JJ, this.rotationAccumulatedPixels.y += cJ
          },
          zoom: JJ => {
            this.zoomAccumulatedPixels += JJ
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

    function zJ(JJ, cJ) {
      return isNaN(JJ) ? cJ : JJ
    }
    let NJ = (() => {
        var JJ;
        let cJ, ZJ, qJ, YJ, hJ, nJ, GJ, mJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ, gJ, PJ, kJ, pJ, NJ, OJ, TJ, CJ, uJ, iJ, RJ = vJ.h,
          LJ = [],
          aJ = [],
          BJ = [],
          tJ = [],
          oJ = [],
          lJ = [],
          Jc = [],
          cc = [],
          Zc = [],
          Fc = [],
          Uc = [],
          ec = [],
          Xc = [],
          Ac = [],
          qc = [],
          jc = [],
          Yc = [],
          hc = [],
          Dc = [],
          sc = [],
          nc = [],
          Gc = [],
          fc = [],
          xc = [],
          rc = [],
          vc = [],
          mc = [],
          Qc = [],
          Ec = [],
          Vc = [],
          Kc = [],
          yc = [],
          Sc = [],
          Ic = [],
          Mc = [],
          bc = [],
          wc = [],
          Wc = [],
          gc = [],
          Hc = [],
          Pc = [],
          kc = [],
          pc = [],
          dc = [],
          zc = [],
          Nc = [],
          Oc = [];
        return JJ = class extends RJ {
          get target() {
            return this.wL
          }
          set target(JJ) {
            this.setTarget(JJ)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(JJ) {
            JJ && this.setTarget(JJ)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(JJ) {
            this.setPosition(JJ)
          }
          set upVector(JJ) {
            this._upToYMatrix || (this._yToUpMatrix = new XJ.b, this._upToYMatrix = new XJ.b, this._upVector = XJ.j.Zero()), JJ.normalize(), this._upVector.rZJ(JJ), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            XJ.b.RotationAlignToRef(XJ.j.UpReadOnly, this._upVector, this._yToUpMatrix), XJ.b.RotationAlignToRef(this._upVector, XJ.j.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const JJ = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(JJ) < this._rotationEpsilon ? 0 : JJ
          }
          set inertialAlphaOffset(JJ) {
            this._inertialAlphaOffset = JJ, 0 === JJ && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const JJ = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(JJ) < this._rotationEpsilon ? 0 : JJ
          }
          set inertialBetaOffset(JJ) {
            this._inertialBetaOffset = JJ, 0 === JJ && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const JJ = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(JJ) < this._rotationEpsilon ? 0 : JJ
          }
          set inertialRadiusOffset(JJ) {
            this._inertialRadiusOffset = JJ, 0 === JJ && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(JJ) {
            this._panningInertia = JJ, this.movement && (this.movement.panInertia = JJ)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(JJ) {
            this._inertia = JJ, this.movement && (this.movement.rotationInertia = JJ, this.movement.zoomInertia = JJ)
          }
          get angularSensibilityX() {
            const JJ = this.inputs.attached.pointers;
            return JJ ? JJ.angularSensibilityX : 0
          }
          set angularSensibilityX(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.angularSensibilityX = JJ)
          }
          get angularSensibilityY() {
            const JJ = this.inputs.attached.pointers;
            return JJ ? JJ.angularSensibilityY : 0
          }
          set angularSensibilityY(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.angularSensibilityY = JJ)
          }
          get pinchPrecision() {
            const JJ = this.inputs.attached.pointers;
            return JJ ? JJ.pinchPrecision : 0
          }
          set pinchPrecision(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.pinchPrecision = JJ)
          }
          get pinchDeltaPercentage() {
            const JJ = this.inputs.attached.pointers;
            return JJ ? JJ.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.pinchDeltaPercentage = JJ)
          }
          get useNaturalPinchZoom() {
            const JJ = this.inputs.attached.pointers;
            return !!JJ && JJ.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.useNaturalPinchZoom = JJ)
          }
          get panningSensibility() {
            const JJ = this.inputs.attached.pointers;
            return JJ ? JJ.panningSensibility : 0
          }
          set panningSensibility(JJ) {
            const cJ = this.inputs.attached.pointers;
            cJ && (cJ.panningSensibility = JJ)
          }
          get keysUp() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysUp : []
          }
          set keysUp(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysUp = JJ)
          }
          get keysDown() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysDown : []
          }
          set keysDown(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysDown = JJ)
          }
          get keysLeft() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysLeft : []
          }
          set keysLeft(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysLeft = JJ)
          }
          get keysRight() {
            const JJ = this.inputs.attached.keyboard;
            return JJ ? JJ.keysRight : []
          }
          set keysRight(JJ) {
            const cJ = this.inputs.attached.keyboard;
            cJ && (cJ.keysRight = JJ)
          }
          get wheelPrecision() {
            const JJ = this.inputs.attached.mousewheel;
            return JJ ? JJ.wheelPrecision : 0
          }
          set wheelPrecision(JJ) {
            const cJ = this.inputs.attached.mousewheel;
            cJ && (cJ.wheelPrecision = JJ)
          }
          get zoomToMouseLocation() {
            const JJ = this.inputs.attached.mousewheel;
            return !!JJ && JJ.zoomToMouseLocation
          }
          set zoomToMouseLocation(JJ) {
            const cJ = this.inputs.attached.mousewheel;
            cJ && (cJ.zoomToMouseLocation = JJ)
          }
          get wheelDeltaPercentage() {
            const JJ = this.inputs.attached.mousewheel;
            return JJ ? JJ.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(JJ) {
            const cJ = this.inputs.attached.mousewheel;
            cJ && (cJ.wheelDeltaPercentage = JJ)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(JJ) {
            this._useCtrlForPanningInternal = JJ;
            const cJ = this.movement.input,
              ZJ = cJ.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !JJ && ZJ ? cJ.inputMap.splice(cJ.inputMap.indexOf(ZJ), 1) : JJ && !ZJ && cJ.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const FJ = cJ.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !JJ && FJ ? cJ.inputMap.splice(cJ.inputMap.indexOf(FJ), 1) : JJ && !FJ && cJ.addEntry({
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
          set _panningMouseButton(JJ) {
            this._panningMouseButtonInternal = JJ;
            const cJ = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            cJ && (cJ.button = JJ)
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
          set useBouncingBehavior(JJ) {
            JJ !== this.useBouncingBehavior && (JJ ? (this._bouncingBehavior = new fJ, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(JJ) {
            JJ !== this.useFramingBehavior && (JJ ? (this._framingBehavior = new xJ, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(JJ) {
            JJ !== this.useAutoRotationBehavior && (JJ ? (this._autoRotationBehavior = new sJ, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(JJ, cJ, ZJ, UJ, AJ, qJ) {
            var jJ;
            let YJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(JJ, XJ.j.Zero(), qJ, YJ), jJ = this, this.alpha = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, void 0)), this.beta = ((0, FJ.e)(this, BJ), (0, FJ.e)(this, tJ, void 0)), this.radius = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, void 0)), this.overrideCloneAlphaBetaRadius = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, void 0)), this.wL = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, void 0)), this._targetHost = ((0, FJ.e)(this, Uc), (0, FJ.e)(this, ec, void 0)), this._upToYMatrix = (0, FJ.e)(this, Xc), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, FJ.e)(this, Ac, null), this.upperAlphaLimit = ((0, FJ.e)(this, qc), (0, FJ.e)(this, jc, null)), this.lowerBetaLimit = ((0, FJ.e)(this, Yc), (0, FJ.e)(this, hc, .01)), this.upperBetaLimit = ((0, FJ.e)(this, Dc), (0, FJ.e)(this, sc, Math.PI - .01)), this.lowerRadiusLimit = ((0, FJ.e)(this, nc), (0, FJ.e)(this, Gc, null)), this.upperRadiusLimit = ((0, FJ.e)(this, fc), (0, FJ.e)(this, xc, null)), this.lowerTargetYLimit = ((0, FJ.e)(this, rc), (0, FJ.e)(this, vc, -1 / 0)), this.inertialPanningX = ((0, FJ.e)(this, mc), (0, FJ.e)(this, Qc, 0)), this.inertialPanningY = ((0, FJ.e)(this, Ec), (0, FJ.e)(this, Vc, 0)), this.pinchToPanMaxDistance = ((0, FJ.e)(this, Kc), (0, FJ.e)(this, yc, 20)), this.panningDistanceLimit = ((0, FJ.e)(this, Sc), (0, FJ.e)(this, Ic, null)), this.panningOriginTarget = ((0, FJ.e)(this, Mc), (0, FJ.e)(this, bc, XJ.j.Zero())), this._panningInertia = ((0, FJ.e)(this, wc), .9), this._inertia = .9, this.zoomOnFactor = (0, FJ.e)(this, Wc, 1), this.targetScreenOffset = ((0, FJ.e)(this, gc), (0, FJ.e)(this, Hc, XJ.i.Zero())), this.allowUpsideDown = ((0, FJ.e)(this, Pc), (0, FJ.e)(this, kc, !0)), this.useInputToRestoreState = ((0, FJ.e)(this, pc), (0, FJ.e)(this, dc, !0)), this.restoreStateInterpolationFactor = ((0, FJ.e)(this, zc), (0, FJ.e)(this, Nc, 0)), this._currentInterpolationFactor = ((0, FJ.e)(this, Oc), 0), this._viewMatrix = new XJ.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new XJ.j(1, 1, 0), this._transformedDirection = new XJ.j, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new eJ.c, this.checkCollisions = !1, this.collisionRadius = new XJ.j(.5, .5, .5), this._previousPosition = XJ.j.Zero(), this._collisionVelocity = XJ.j.Zero(), this._newPosition = XJ.j.Zero(), this._computationVector = XJ.j.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new XJ.j(NaN, NaN, NaN), this._goalTargetScreenOffset = new XJ.i(NaN, NaN), this._onCollisionPositionChange = function(JJ, cJ) {
              let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ZJ ? (jJ.setPosition(cJ), jJ.oh && jJ.oh(ZJ)) : jJ._previousPosition.rZJ(jJ._position);
              const FJ = Math.cos(jJ.alpha),
                UJ = Math.sin(jJ.alpha),
                eJ = Math.cos(jJ.beta);
              let XJ = Math.sin(jJ.beta);
              0 === XJ && (XJ = 1e-4);
              const AJ = jJ._getTargetPosition();
              jJ._computationVector.K9(jJ.radius * FJ * XJ, jJ.radius * eJ, jJ.radius * UJ * XJ), AJ.addToRef(jJ._computationVector, jJ._newPosition), jJ._position.rZJ(jJ._newPosition);
              let qJ = jJ.upVector;
              jJ.allowUpsideDown && jJ.beta < 0 && (qJ = qJ.clone(), qJ = qJ.nZ()), jJ._computeViewMatrix(jJ._position, AJ, qJ), jJ._viewMatrix.addAtIndex(12, jJ.targetScreenOffset.x), jJ._viewMatrix.addAtIndex(13, jJ.targetScreenOffset.y), jJ._collisionTriggered = !1
            }, this.wL = XJ.j.Zero(), AJ && this.setTarget(AJ), this.alpha = cJ, this.beta = ZJ, this.radius = UJ, this.getViewMatrix(), this.inputs = new HJ(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new dJ(this.Qy(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.wL = new XJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = XJ.i.Zero()
          }
          _updateCache(JJ) {
            JJ || super._updateCache(), this._cache.wL.rZJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.rZJ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const JJ = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? JJ.addToRef(this._targetBoundingCenter, this.wL) : this.wL.rZJ(JJ)
            }
            const JJ = this._getLockedTargetPosition();
            return JJ || this.wL
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > DJ.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              eJ = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != eJ ? this._currentInterpolationFactor = eJ : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = zJ(JJ, this._goalAlpha), this._goalBeta = zJ(cJ, this._goalBeta), this._goalRadius = zJ(ZJ, this._goalRadius), this._goalTarget.set(zJ(FJ.x, this._goalTarget.x), zJ(FJ.y, this._goalTarget.y), zJ(FJ.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(zJ(UJ.x, this._goalTargetScreenOffset.x), zJ(UJ.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, AJ.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, AJ.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, AJ.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, AJ.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.wL.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(JJ, cJ) {
            let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const UJ = arguments;
            cJ = QJ.j.BackCompatCameraNoPreventDefault(UJ), this._useCtrlForPanning = ZJ, this._panningMouseButton = FJ, "boolean" === typeof UJ[0] && (UJ.length > 1 && (this._useCtrlForPanning = UJ[1]), UJ.length > 2 && (this._panningMouseButton = UJ[2])), this.inputs.attachElement(cJ), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(JJ, cJ, ZJ) {
            const FJ = this.invertRotation ? -1 : 1;
            let UJ = JJ * this._calculateHandednessMultiplier();
            this.beta < 0 && (UJ *= -1), this.alpha += UJ * FJ, this.beta += cJ * FJ, this.radius -= ZJ
          }
          _applyPanDelta(JJ, cJ) {
            const ZJ = XJ.h.Pn[0].K9(JJ, cJ, cJ);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZJ.multiplyInPlace(this.panningAxis), XJ.j.TransformNormalToRef(ZJ, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const JJ = this.upVector,
                cJ = XJ.j.CrossToRef(this._transformedDirection, JJ, this._transformedDirection);
              XJ.j.CrossToRef(JJ, cJ, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.wL);
                XJ.j.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wL.rZJ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const JJ = XJ.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(JJ), JJ.transposeToRef(JJ), XJ.j.TransformCoordinatesToRef(this._transformedDirection, JJ, this._transformedDirection)
                }
                this.wL.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let JJ = !1;
            this.movement.computeCurrentFrameDeltas();
            const cJ = this.movement.rotationDeltaCurrentFrame,
              ZJ = this.movement.zoomDeltaCurrentFrame,
              FJ = this.movement.panDeltaCurrentFrame;
            if (0 === cJ.x && 0 === cJ.y && 0 === ZJ && 0 === FJ.x && 0 === FJ.y || (JJ = !0, 0 === cJ.x && 0 === cJ.y && 0 === ZJ || this._applyRotationAndZoomDelta(cJ.x, cJ.y, ZJ), 0 === FJ.x && 0 === FJ.y || this._applyPanDelta(FJ.x, FJ.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), JJ = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const cJ = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < cJ && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < cJ && (this.inertialPanningY = 0), JJ = !0
            }
            if (JJ) this.stopInterpolation();
            else if (this._isInterpolating) {
              let JJ = !1;
              const cJ = this._scene.gn().getDeltaTime() / 1e3,
                ZJ = 1 - Math.pow(2, -cJ / this._currentInterpolationFactor),
                FJ = zJ(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const cJ = XJ.h.Pn[0].set(zJ(this._goalTarget.x, this.wL.x), zJ(this._goalTarget.y, this.wL.y), zJ(this._goalTarget.z, this.wL.z));
                XJ.j.LerpToRef(this.target, cJ, ZJ, this.wL), 10 * XJ.j.Distance(this.target, cJ) / FJ < DJ.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.rZJ(cJ), this.setTarget(this.target, !1, !0, !0)) : JJ = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const cJ = XJ.e.RotationAlphaBetaGammaToRef(zJ(this._goalAlpha, this.alpha), zJ(this._goalBeta, this.beta), 0, XJ.h.Quaternion[0]),
                  FJ = XJ.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, XJ.h.Quaternion[1]),
                  UJ = XJ.e.SlerpToRef(FJ, cJ, ZJ, XJ.h.Quaternion[2]);
                UJ.normalize();
                const eJ = UJ.toAlphaBetaGammaToRef(XJ.h.Pn[0]);
                if (this.alpha = eJ.x, this.beta = eJ.y, UJ.isApprox(cJ, DJ.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const JJ = cJ.toAlphaBetaGammaToRef(XJ.h.Pn[0]);
                  this.alpha = JJ.x, this.beta = JJ.y
                } else JJ = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (FJ - this.radius) * ZJ, Math.abs(FJ / this.radius - 1) < DJ.e ? (this._goalRadius = NaN, this.radius = FJ) : JJ = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const cJ = XJ.h.Vector2[0].set(zJ(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), zJ(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                XJ.i.LerpToRef(this.targetScreenOffset, cJ, ZJ, this.targetScreenOffset), XJ.i.Distance(this.targetScreenOffset, cJ) < DJ.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.rZJ(cJ)) : JJ = !0
              }
              this._isInterpolating = JJ
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || XJ.j.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const JJ = this.alpha;
            var cJ, ZJ;
            this.alpha = function(JJ) {
              let cJ = Math.PI / 2;
              return 0 === JJ.x && 0 === JJ.z || (cJ = Math.acos(JJ.x / Math.sqrt(Math.pow(JJ.x, 2) + Math.pow(JJ.z, 2)))), JJ.z < 0 && (cJ = 2 * Math.PI - cJ), cJ
            }(this._computationVector), this.beta = (cJ = this._computationVector.y, ZJ = this.radius, Math.acos(cJ / ZJ));
            const FJ = Math.round((JJ - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * FJ * Math.PI, this._checkLimits()
          }
          setPosition(JJ) {
            this._position.equals(JJ) || (this._position.rZJ(JJ), this.rebuildAnglesAndRadius())
          }
          setTarget(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (FJ = this.overrideCloneAlphaBetaRadius ?? FJ, JJ.computeWorldMatrix) cJ && JJ.rM ? this._targetBoundingCenter = JJ.rM().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, JJ.computeWorldMatrix(), this._targetHost = JJ, this.wL = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const cJ = JJ,
                FJ = this._getTargetPosition();
              if (FJ && !ZJ && FJ.equals(cJ)) return;
              this._targetHost = null, this.wL = cJ, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            FJ || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const JJ = Math.cos(this.alpha),
              cJ = Math.sin(this.alpha),
              ZJ = Math.cos(this.beta);
            let FJ = Math.sin(this.beta);
            0 === FJ && (FJ = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const UJ = this._getTargetPosition();
            if (this._computationVector.K9(this.radius * JJ * FJ, this.radius * ZJ, this.radius * cJ * FJ), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || XJ.j.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), UJ.addToRef(this._computationVector, this._newPosition), this.Qy().collisionsEnabled && this.checkCollisions) {
              const JJ = this.Qy().collisionCoordinator;
              this._collider || (this._collider = JJ.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, JJ.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.rZJ(this._newPosition);
              let JJ = this.upVector;
              this.allowUpsideDown && FJ < 0 && (JJ = JJ.nZ()), this._computeViewMatrix(this._position, UJ, JJ), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.rZJ(UJ), this._viewMatrix
          }
          zoomOn(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            JJ = JJ || this.Qy().meshes;
            const ZJ = jJ.d.MinMax(JJ);
            let FJ = this._calculateLowerRadiusFromModelBoundingSphere(ZJ.min, ZJ.max);
            if (FJ = Math.max(Math.min(FJ, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = FJ * this.zoomOnFactor, this.mode === rJ.e.ORTHOGRAPHIC_CAMERA) {
              const JJ = this.Qy().gn().getAspectRatio(this),
                cJ = FJ * this.zoomOnFactor / 2;
              this.orthoLeft = -cJ * JJ, this.orthoRight = cJ * JJ, this.orthoBottom = -cJ, this.orthoTop = cJ
            }
            this.focusOn({
              min: ZJ.min,
              max: ZJ.max,
              distance: FJ
            }, cJ)
          }
          focusOn(JJ) {
            let cJ, ZJ, FJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === JJ.min) {
              const FJ = JJ || this.Qy().meshes;
              cJ = jJ.d.MinMax(FJ), ZJ = XJ.j.Distance(cJ.min, cJ.max)
            } else {
              cJ = JJ, ZJ = JJ.distance
            }
            this.wL = jJ.d.Center(cJ), FJ || (this.maxZ = 2 * ZJ)
          }
          createRigCamera(cJ, ZJ) {
            let FJ = 0;
            switch (this.cameraRigMode) {
              case rJ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case rJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case rJ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case rJ.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case rJ.e.RIG_MODE_VR:
                FJ = this._cameraRigParams.stereoHalfAngle * (0 === ZJ ? 1 : -1);
                break;
              case rJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                FJ = this._cameraRigParams.stereoHalfAngle * (0 === ZJ ? -1 : 1)
            }
            const UJ = new JJ(cJ, this.alpha + FJ, this.beta, this.radius, this.wL, this.Qy());
            return UJ._cameraRigParams = {}, UJ.isRigCamera = !0, UJ.rigParent = this, UJ.upVector = this.upVector, UJ.mode = this.mode, UJ.orthoLeft = this.orthoLeft, UJ.orthoRight = this.orthoRight, UJ.orthoBottom = this.orthoBottom, UJ.orthoTop = this.orthoTop, UJ
          }
          _updateRigCameras() {
            const JJ = this._rigCameras[0],
              cJ = this._rigCameras[1];
            switch (JJ.beta = cJ.beta = this.beta, this.cameraRigMode) {
              case rJ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case rJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case rJ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case rJ.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case rJ.e.RIG_MODE_VR:
                JJ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, cJ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case rJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                JJ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, cJ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const FJ = XJ.j.Distance(JJ, cJ),
              UJ = this.Qy().gn().getAspectRatio(this),
              eJ = Math.tan(this.fov / 2),
              AJ = eJ * UJ,
              qJ = .5 * FJ * ZJ,
              jJ = qJ * Math.sqrt(1 + 1 / (AJ * AJ)),
              YJ = qJ * Math.sqrt(1 + 1 / (eJ * eJ));
            return Math.max(jJ, YJ)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(RJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.E)("target")], nJ = [(0, UJ.w)("targetHost")], GJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], VJ = [(0, UJ.F)()], KJ = [(0, UJ.F)()], yJ = [(0, UJ.F)()], SJ = [(0, UJ.F)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], wJ = [(0, UJ.F)()], WJ = [(0, UJ.F)()], gJ = [(0, UJ.F)()], PJ = [(0, UJ.F)()], kJ = [(0, UJ.E)()], pJ = [(0, UJ.F)()], NJ = [(0, UJ.F)()], OJ = [(0, UJ.F)()], TJ = [(0, UJ.C)()], CJ = [(0, UJ.F)()], uJ = [(0, UJ.F)()], iJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, GJ, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "inertialAlphaOffset" in JJ,
              get: JJ => JJ.inertialAlphaOffset
            },
            metadata: eJ
          }, null, LJ), (0, FJ.d)(JJ, null, mJ, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "inertialBetaOffset" in JJ,
              get: JJ => JJ.inertialBetaOffset
            },
            metadata: eJ
          }, null, LJ), (0, FJ.d)(JJ, null, EJ, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "inertialRadiusOffset" in JJ,
              get: JJ => JJ.inertialRadiusOffset
            },
            metadata: eJ
          }, null, LJ), (0, FJ.d)(JJ, null, pJ, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: JJ => "panningInertia" in JJ,
              get: JJ => JJ.panningInertia
            },
            metadata: eJ
          }, null, LJ), (0, FJ.d)(JJ, null, NJ, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: JJ => "zoomToMouseLocation" in JJ,
              get: JJ => JJ.zoomToMouseLocation
            },
            metadata: eJ
          }, null, LJ), (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alpha" in JJ,
              get: JJ => JJ.alpha,
              set: (JJ, cJ) => {
                JJ.alpha = cJ
              }
            },
            metadata: eJ
          }, aJ, BJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: JJ => "beta" in JJ,
              get: JJ => JJ.beta,
              set: (JJ, cJ) => {
                JJ.beta = cJ
              }
            },
            metadata: eJ
          }, tJ, oJ), (0, FJ.d)(null, null, qJ, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: JJ => "radius" in JJ,
              get: JJ => JJ.radius,
              set: (JJ, cJ) => {
                JJ.radius = cJ
              }
            },
            metadata: eJ
          }, lJ, Jc), (0, FJ.d)(null, null, YJ, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: JJ => "overrideCloneAlphaBetaRadius" in JJ,
              get: JJ => JJ.overrideCloneAlphaBetaRadius,
              set: (JJ, cJ) => {
                JJ.overrideCloneAlphaBetaRadius = cJ
              }
            },
            metadata: eJ
          }, cc, Zc), (0, FJ.d)(null, null, hJ, {
            kind: "field",
            name: "wL",
            static: !1,
            private: !1,
            access: {
              has: JJ => "wL" in JJ,
              get: JJ => JJ.wL,
              set: (JJ, cJ) => {
                JJ.wL = cJ
              }
            },
            metadata: eJ
          }, Fc, Uc), (0, FJ.d)(null, null, nJ, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_targetHost" in JJ,
              get: JJ => JJ._targetHost,
              set: (JJ, cJ) => {
                JJ._targetHost = cJ
              }
            },
            metadata: eJ
          }, ec, Xc), (0, FJ.d)(null, null, VJ, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lowerAlphaLimit" in JJ,
              get: JJ => JJ.lowerAlphaLimit,
              set: (JJ, cJ) => {
                JJ.lowerAlphaLimit = cJ
              }
            },
            metadata: eJ
          }, Ac, qc), (0, FJ.d)(null, null, KJ, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "upperAlphaLimit" in JJ,
              get: JJ => JJ.upperAlphaLimit,
              set: (JJ, cJ) => {
                JJ.upperAlphaLimit = cJ
              }
            },
            metadata: eJ
          }, jc, Yc), (0, FJ.d)(null, null, yJ, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lowerBetaLimit" in JJ,
              get: JJ => JJ.lowerBetaLimit,
              set: (JJ, cJ) => {
                JJ.lowerBetaLimit = cJ
              }
            },
            metadata: eJ
          }, hc, Dc), (0, FJ.d)(null, null, SJ, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "upperBetaLimit" in JJ,
              get: JJ => JJ.upperBetaLimit,
              set: (JJ, cJ) => {
                JJ.upperBetaLimit = cJ
              }
            },
            metadata: eJ
          }, sc, nc), (0, FJ.d)(null, null, IJ, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lowerRadiusLimit" in JJ,
              get: JJ => JJ.lowerRadiusLimit,
              set: (JJ, cJ) => {
                JJ.lowerRadiusLimit = cJ
              }
            },
            metadata: eJ
          }, Gc, fc), (0, FJ.d)(null, null, MJ, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "upperRadiusLimit" in JJ,
              get: JJ => JJ.upperRadiusLimit,
              set: (JJ, cJ) => {
                JJ.upperRadiusLimit = cJ
              }
            },
            metadata: eJ
          }, xc, rc), (0, FJ.d)(null, null, bJ, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lowerTargetYLimit" in JJ,
              get: JJ => JJ.lowerTargetYLimit,
              set: (JJ, cJ) => {
                JJ.lowerTargetYLimit = cJ
              }
            },
            metadata: eJ
          }, vc, mc), (0, FJ.d)(null, null, wJ, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "inertialPanningX" in JJ,
              get: JJ => JJ.inertialPanningX,
              set: (JJ, cJ) => {
                JJ.inertialPanningX = cJ
              }
            },
            metadata: eJ
          }, Qc, Ec), (0, FJ.d)(null, null, WJ, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "inertialPanningY" in JJ,
              get: JJ => JJ.inertialPanningY,
              set: (JJ, cJ) => {
                JJ.inertialPanningY = cJ
              }
            },
            metadata: eJ
          }, Vc, Kc), (0, FJ.d)(null, null, gJ, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pinchToPanMaxDistance" in JJ,
              get: JJ => JJ.pinchToPanMaxDistance,
              set: (JJ, cJ) => {
                JJ.pinchToPanMaxDistance = cJ
              }
            },
            metadata: eJ
          }, yc, Sc), (0, FJ.d)(null, null, PJ, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "panningDistanceLimit" in JJ,
              get: JJ => JJ.panningDistanceLimit,
              set: (JJ, cJ) => {
                JJ.panningDistanceLimit = cJ
              }
            },
            metadata: eJ
          }, Ic, Mc), (0, FJ.d)(null, null, kJ, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: JJ => "panningOriginTarget" in JJ,
              get: JJ => JJ.panningOriginTarget,
              set: (JJ, cJ) => {
                JJ.panningOriginTarget = cJ
              }
            },
            metadata: eJ
          }, bc, wc), (0, FJ.d)(null, null, OJ, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "zoomOnFactor" in JJ,
              get: JJ => JJ.zoomOnFactor,
              set: (JJ, cJ) => {
                JJ.zoomOnFactor = cJ
              }
            },
            metadata: eJ
          }, Wc, gc), (0, FJ.d)(null, null, TJ, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: JJ => "targetScreenOffset" in JJ,
              get: JJ => JJ.targetScreenOffset,
              set: (JJ, cJ) => {
                JJ.targetScreenOffset = cJ
              }
            },
            metadata: eJ
          }, Hc, Pc), (0, FJ.d)(null, null, CJ, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: JJ => "allowUpsideDown" in JJ,
              get: JJ => JJ.allowUpsideDown,
              set: (JJ, cJ) => {
                JJ.allowUpsideDown = cJ
              }
            },
            metadata: eJ
          }, kc, pc), (0, FJ.d)(null, null, uJ, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useInputToRestoreState" in JJ,
              get: JJ => JJ.useInputToRestoreState,
              set: (JJ, cJ) => {
                JJ.useInputToRestoreState = cJ
              }
            },
            metadata: eJ
          }, dc, zc), (0, FJ.d)(null, null, iJ, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "restoreStateInterpolationFactor" in JJ,
              get: JJ => JJ.restoreStateInterpolationFactor,
              set: (JJ, cJ) => {
                JJ.restoreStateInterpolationFactor = cJ
              }
            },
            metadata: eJ
          }, Nc, Oc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      OJ = !1;
    OJ || (OJ = !0, qJ.b.AddNodeConstructor("ArcRotateCamera", ((JJ, cJ) => () => new NJ(JJ, 0, 0, 1, XJ.j.Zero(), cJ))), (0, PJ.f)("BABYLON.ArcRotateCamera", NJ))
  },
  39009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.e
    });
    var FJ = ZJ(39015);
    (0, FJ.f)()
  },
  39015: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      f: () => DJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(36231),
      AJ = ZJ(39023),
      qJ = ZJ(38989),
      jJ = ZJ(36216);
    let YJ = (() => {
        var JJ;
        let cJ, ZJ, qJ = AJ.b,
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        return JJ = class extends qJ {
          constructor(JJ, cJ, ZJ, UJ) {
            super(JJ, ZJ, UJ), this.groundColor = (0, FJ.e)(this, jJ, new XJ.e(0, 0, 0)), this.direction = ((0, FJ.e)(this, YJ), (0, FJ.e)(this, hJ, void 0)), (0, FJ.e)(this, DJ), this.direction = cJ || eJ.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(JJ) {
            return this.direction = eJ.j.Normalize(JJ.subtract(eJ.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZJ.x, ZJ.y, ZJ.z, 0, cJ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cJ), this
          }
          transferToNodeMaterialEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return JJ.setFloat3(cJ, ZJ.x, ZJ.y, ZJ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = eJ.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return AJ.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(JJ, cJ) {
            JJ["HEMILIGHT" + cJ] = !0
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.m)()], ZJ = [(0, UJ.E)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "groundColor" in JJ,
              get: JJ => JJ.groundColor,
              set: (JJ, cJ) => {
                JJ.groundColor = cJ
              }
            },
            metadata: eJ
          }, jJ, YJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: JJ => "direction" in JJ,
              get: JJ => JJ.direction,
              set: (JJ, cJ) => {
                JJ.direction = cJ
              }
            },
            metadata: eJ
          }, hJ, DJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      hJ = !1;

    function DJ() {
      hJ || (hJ = !0, qJ.b.AddNodeConstructor("Light_Type_3", ((JJ, cJ) => () => new YJ(JJ, eJ.j.Zero(), cJ))), (0, jJ.f)("BABYLON.HemisphericLight", YJ))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
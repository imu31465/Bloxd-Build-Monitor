export const id = 249;
export const ids = [249];
export const modules = {
  40295: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => wY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36552),
      RY = DY(36524),
      OY = DY(36559),
      gY = DY(39347),
      aY = DY(39514),
      vY = DY(39301),
      uY = DY(39044),
      sY = DY(36533);
    class iY {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(YY) {
        this._zoomStopsAnimation = YY
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(YY) {
        this._idleRotationSpeed = YY
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(YY) {
        this._idleRotationWaitTime = YY
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(YY) {
        this._idleRotationSpinupTime = YY
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
      attach(YY) {
        this._attachedCamera = YY;
        const rY = this._attachedCamera.hT();
        this._onPrePointerObservableObserver = rY.onPrePointerObservable.add((YY => {
          YY.type !== vY.d.POINTERDOWN ? YY.type === vY.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = YY.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const YY = uY.c.Now;
          let rY = 0;
          null != this._lastFrameTime && (rY = YY - this._lastFrameTime), this._lastFrameTime = YY, this._applyUserInteraction();
          const DY = YY - this._lastInteractionTime - this._idleRotationWaitTime,
            FY = Math.max(Math.min(DY / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * FY, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (rY / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const YY = this._attachedCamera.hT();
        this._onPrePointerObservableObserver && YY.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(YY) {
        this._lastInteractionTime = YY ?? uY.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < sY.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let YY = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (YY = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? YY : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = uY.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    DY(40298);
    class yY {
      constructor() {
        this._easingMode = yY.EASINGMODE_EASEIN
      }
      setEasingMode(YY) {
        const rY = Math.min(Math.max(YY, 0), 2);
        this._easingMode = rY
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(YY) {
        throw new Error("You must implement this method")
      }
      ease(YY) {
        switch (this._easingMode) {
          case yY.EASINGMODE_EASEIN:
            return this.easeInCore(YY);
          case yY.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - YY)
        }
        return YY >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - YY))) + .5 : .5 * this.easeInCore(2 * YY)
      }
    }
    yY.EASINGMODE_EASEIN = 0, yY.EASINGMODE_EASEOUT = 1, yY.EASINGMODE_EASEINOUT = 2;
    var QY = DY(40303);
    class oY {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(YY) {
        if (this._autoTransitionRange === YY) return;
        this._autoTransitionRange = YY;
        const rY = this._attachedCamera;
        rY && (YY ? this._onMeshTargetChangedObserver = rY.onMeshTargetChangedObservable.add((YY => {
          if (YY && (YY.computeWorldMatrix(!0), YY.oB)) {
            const rY = YY.oB().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * rY, this.upperRadiusTransitionRange = .05 * rY
          }
        })) : this._onMeshTargetChangedObserver && rY.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(YY) {
        this._attachedCamera = YY, this._onAfterCheckInputsObserver = YY.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(YY) {
        return !!this._attachedCamera && (this._attachedCamera.radius === YY && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(YY) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (oY.EasingFunction.setEasingMode(oY.EasingMode), this._radiusBounceTransition = QY.d.CreateAnimation("radius", QY.d.ANIMATIONTYPE_FLOAT, 60, oY.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const rY = QY.d.TransitionTo("radius", this._attachedCamera.radius + YY, this._attachedCamera, this._attachedCamera.hT(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        rY && this._animatables.push(rY)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    oY.EasingFunction = new class extends yY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = YY
      }
      easeInCore(YY) {
        const rY = Math.max(0, this.amplitude);
        return Math.pow(YY, 3) - YY * rY * Math.sin(3.141592653589793 * YY)
      }
    }(.3), oY.EasingMode = yY.EASINGMODE_EASEOUT;
    class WY {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new IY.e, this._mode = WY.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(YY) {
        this._mode = YY
      }
      get mode() {
        return this._mode
      }
      set radiusScale(YY) {
        this._radiusScale = YY
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(YY) {
        this._positionScale = YY
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(YY) {
        this._defaultElevation = YY
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(YY) {
        this._elevationReturnTime = YY
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(YY) {
        this._elevationReturnWaitTime = YY
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(YY) {
        this._zoomStopsAnimation = YY
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(YY) {
        this._framingTime = YY
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(YY) {
        this._attachedCamera = YY;
        const rY = this._attachedCamera.hT();
        WY.EasingFunction.setEasingMode(WY.EasingMode), this._onPrePointerObservableObserver = rY.onPrePointerObservable.add((YY => {
          YY.type !== vY.d.POINTERDOWN ? YY.type === vY.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = YY.onMeshTargetChangedObservable.add((YY => {
          YY && YY.oB && this.zoomOnMesh(YY, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = YY.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const YY = this._attachedCamera.hT();
        this._onPrePointerObservableObserver && YY.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        YY.computeWorldMatrix(!0);
        const FY = YY.oB().boundingBox;
        this.zoomOnBoundingInfo(FY.minimumWorld, FY.maximumWorld, rY, DY)
      }
      zoomOnMeshHierarchy(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        YY.computeWorldMatrix(!0);
        const FY = YY.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(FY.min, FY.max, rY, DY)
      }
      zoomOnMeshesHierarchy(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const FY = new RY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          AY = new RY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let IY = 0; IY < YY.length; IY++) {
          const rY = YY[IY].getHierarchyBoundingVectors(!0);
          RY.r.CheckExtends(rY.min, FY, AY), RY.r.CheckExtends(rY.max, FY, AY)
        }
        this.zoomOnBoundingInfo(FY, AY, rY, DY)
      }
      zoomOnBoundingInfo(YY, rY) {
        let DY, FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const IY = YY.y,
          OY = IY + (rY.y - IY) * this._positionScale,
          gY = rY.subtract(YY).scale(.5);
        if (!isFinite(OY)) return !1;
        if (FY) DY = new RY.r(0, OY, 0);
        else {
          const rY = YY.add(gY);
          DY = new RY.r(rY.x, OY, rY.z)
        }
        this._vectorTransition || (this._vectorTransition = QY.d.CreateAnimation("target", QY.d.ANIMATIONTYPE_VECTOR3, 60, WY.EasingFunction)), this._betaIsAnimating = !0;
        let aY = QY.d.TransitionTo("target", DY, this._attachedCamera, this._attachedCamera.hT(), 60, this._vectorTransition, this._framingTime);
        aY && this._animatables.push(aY);
        let vY = 0;
        if (this._mode === WY.FitFrustumSidesMode) {
          const DY = this._calculateLowerRadiusFromModelBoundingSphere(YY, rY);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = gY.length() + this._attachedCamera.minZ), vY = DY
        } else this._mode === WY.IgnoreBoundsSizeMode && (vY = this._calculateLowerRadiusFromModelBoundingSphere(YY, rY), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const DY = rY.subtract(YY).length();
          this._attachedCamera.panningSensibility = 5e3 / DY, this._attachedCamera.wheelPrecision = 100 / vY
        }
        return this._radiusTransition || (this._radiusTransition = QY.d.CreateAnimation("radius", QY.d.ANIMATIONTYPE_FLOAT, 60, WY.EasingFunction)), aY = QY.d.TransitionTo("radius", vY, this._attachedCamera, this._attachedCamera.hT(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), AY && AY(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), aY && this._animatables.push(aY), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(YY, rY) {
        const DY = this._attachedCamera;
        if (!DY) return 0;
        let FY = DY._calculateLowerRadiusFromModelBoundingSphere(YY, rY, this._radiusScale);
        return DY.lowerRadiusLimit && this._mode === WY.IgnoreBoundsSizeMode && (FY = FY < DY.lowerRadiusLimit ? DY.lowerRadiusLimit : FY), DY.upperRadiusLimit && (FY = FY > DY.upperRadiusLimit ? DY.upperRadiusLimit : FY), FY
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const YY = uY.c.Now - this._lastInteractionTime,
          rY = .5 * Math.PI - this._defaultElevation,
          DY = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > DY && YY >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = QY.d.CreateAnimation("beta", QY.d.ANIMATIONTYPE_FLOAT, 60, WY.EasingFunction));
          const YY = QY.d.TransitionTo("beta", rY, this._attachedCamera, this._attachedCamera.hT(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          YY && this._animatables.push(YY)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = uY.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    WY.EasingFunction = new class extends yY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = YY
      }
      easeInCore(YY) {
        return this.exponent <= 0 ? YY : (Math.exp(this.exponent * YY) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, WY.EasingMode = yY.EASINGMODE_EASEINOUT, WY.IgnoreBoundsSizeMode = 0, WY.FitFrustumSidesMode = 1;
    var EY = DY(39342),
      mY = DY(39337),
      VY = DY(39367),
      SY = DY(39219);
    let lY = (() => {
        var YY;
        let rY, DY = [],
          IY = [];
        return YY = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, FY.j)(this, DY, [0, 1, 2]), this._pointerInput = (0, FY.j)(this, IY)
          }
          attachControl(YY) {
            YY = SY.i.BackCompatCameraNoPreventDefault(arguments);
            const rY = this.camera.ky(),
              DY = rY.getInputElement();
            let FY = 0,
              AY = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = IY => {
              const RY = IY.event,
                OY = "touch" === RY.pointerType;
              if (IY.type !== vY.d.POINTERMOVE && -1 === this.buttons.indexOf(RY.button)) return;
              const gY = RY.target;
              if (this._altKey = RY.altKey, this._ctrlKey = RY.ctrlKey, this._metaKey = RY.metaKey, this._shiftKey = RY.shiftKey, this._buttonsPressed = RY.buttons, rY.isPointerLock) {
                const YY = RY.movementX,
                  rY = RY.movementY;
                this.onTouch(null, YY, rY), this._pointA = null, this._pointB = null
              } else {
                if (IY.type !== vY.d.POINTERDOWN && IY.type !== vY.d.POINTERDOUBLETAP && OY && this._pointA?.pointerId !== RY.pointerId && this._pointB?.pointerId !== RY.pointerId) return;
                if (IY.type !== vY.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !OY)
                  if (IY.type === vY.d.POINTERDOUBLETAP) this.onDoubleTap(RY.pointerType, RY);
                  else if (IY.type !== vY.d.POINTERUP || this._currentMousePointerIdDown !== RY.pointerId && !OY) {
                  if (IY.type === vY.d.POINTERMOVE)
                    if (YY || RY.preventDefault(), this._pointA && null === this._pointB) {
                      const YY = RY.clientX - this._pointA.x,
                        rY = RY.clientY - this._pointA.y;
                      this._pointA.x = RY.clientX, this._pointA.y = RY.clientY, this.onTouch(this._pointA, YY, rY)
                    } else if (this._pointA && this._pointB) {
                    const YY = this._pointA.pointerId === RY.pointerId ? this._pointA : this._pointB;
                    YY.x = RY.clientX, YY.y = RY.clientY;
                    const rY = this._pointA.x - this._pointB.x,
                      DY = this._pointA.y - this._pointB.y,
                      OY = rY * rY + DY * DY,
                      gY = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: RY.pointerId,
                        type: IY.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, FY, OY, AY, gY), AY = gY, FY = OY
                  }
                } else {
                  try {
                    gY?.releasePointerCapture(RY.pointerId)
                  } catch (aY) {}
                  OY || (this._pointB = null), rY._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == RY.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == RY.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== FY || AY) && (this.onMultiTouch(this._pointA, this._pointB, FY, 0, AY, null), FY = 0, AY = null), this._currentMousePointerIdDown = -1, this.onButtonUp(RY), YY || RY.preventDefault()
                } else {
                  try {
                    gY?.setPointerCapture(RY.pointerId)
                  } catch (aY) {}
                  if (null === this._pointA) this._pointA = {
                    x: RY.clientX,
                    y: RY.clientY,
                    pointerId: RY.pointerId,
                    type: RY.pointerType,
                    button: RY.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: RY.clientX,
                      y: RY.clientY,
                      pointerId: RY.pointerId,
                      type: RY.pointerType,
                      button: RY.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || OY || (this._currentMousePointerIdDown = RY.pointerId), this.onButtonDown(RY), YY || (RY.preventDefault(), DY && DY.focus())
                }
              }
            }, this._observer = this.camera.hT()._inputManager._addCameraPointerObserver(this._pointerInput, vY.d.POINTERDOWN | vY.d.POINTERUP | vY.d.POINTERMOVE | vY.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, FY = 0, AY = null, this.onLostFocus()
            }, this._contextMenuBind = YY => this.onContextMenu(YY), DY && DY.addEventListener("contextmenu", this._contextMenuBind, !1);
            const IY = this.camera.hT().ky().getHostWindow();
            IY && SY.i.RegisterTopRootEvents(IY, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const YY = this.camera.hT().ky().getHostWindow();
              YY && SY.i.UnregisterTopRootEvents(YY, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.hT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const YY = this.camera.hT().ky().getInputElement();
                YY && YY.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(YY, rY) {}
          onTouch(YY, rY, DY) {}
          onMultiTouch(YY, rY, DY, FY, AY, IY) {}
          onContextMenu(YY) {
            YY.preventDefault()
          }
          onButtonDown(YY) {}
          onButtonUp(YY) {}
          onLostFocus() {}
        }, (() => {
          const RY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: YY => "buttons" in YY,
              get: YY => YY.buttons,
              set: (YY, rY) => {
                YY.buttons = rY
              }
            },
            metadata: RY
          }, DY, IY), RY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RY
          })
        })(), YY
      })(),
      TY = (() => {
        var YY;
        let rY, DY, IY, RY = lY,
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        return YY = class extends RY {
          constructor() {
            super(...arguments), this.pinchZoom = (0, FY.j)(this, OY, !0), this.multiTouchPanning = ((0, FY.j)(this, gY), (0, FY.j)(this, aY, !0)), this.multiTouchPanAndZoom = ((0, FY.j)(this, vY), (0, FY.j)(this, uY, !0)), this._isPinching = ((0, FY.j)(this, sY), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(YY, rY) {}
          _computeMultiTouchPanning(YY, rY) {}
          onMultiTouch(YY, rY, DY, FY, AY, IY) {
            0 === DY && null === AY || 0 === FY && null === IY || (this.multiTouchPanAndZoom ? (this._computePinchZoom(DY, FY), this._computeMultiTouchPanning(AY, IY)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(DY, FY), this._isPinching = !0) : this._computeMultiTouchPanning(AY, IY)) : this.multiTouchPanning ? this._computeMultiTouchPanning(AY, IY) : this.pinchZoom && this._computePinchZoom(DY, FY))
          }
          onButtonUp(YY) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(RY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: YY => "pinchZoom" in YY,
              get: YY => YY.pinchZoom,
              set: (YY, rY) => {
                YY.pinchZoom = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: YY => "multiTouchPanning" in YY,
              get: YY => YY.multiTouchPanning,
              set: (YY, rY) => {
                YY.multiTouchPanning = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, FY.i)(null, null, IY, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: YY => "multiTouchPanAndZoom" in YY,
              get: YY => YY.multiTouchPanAndZoom,
              set: (YY, rY) => {
                YY.multiTouchPanAndZoom = rY
              }
            },
            metadata: iY
          }, uY, sY), iY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          })
        })(), YY
      })(),
      eY = (() => {
        var YY;
        let rY, DY, IY, RY, OY, gY, aY, vY = TY,
          uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [],
          WY = [],
          EY = [],
          mY = [],
          VY = [],
          SY = [],
          lY = [],
          eY = [],
          NY = [];
        return YY = class extends vY {
          constructor() {
            super(...arguments), this.buttons = (0, FY.j)(this, uY, [0, 1, 2]), this.angularSensibilityX = ((0, FY.j)(this, sY), (0, FY.j)(this, iY, 1e3)), this.angularSensibilityY = ((0, FY.j)(this, yY), (0, FY.j)(this, QY, 1e3)), this.pinchPrecision = ((0, FY.j)(this, oY), (0, FY.j)(this, WY, 12)), this.pinchDeltaPercentage = ((0, FY.j)(this, EY), (0, FY.j)(this, mY, 0)), this.useNaturalPinchZoom = ((0, FY.j)(this, VY), (0, FY.j)(this, SY, !1)), this.panningSensibility = ((0, FY.j)(this, lY), (0, FY.j)(this, eY, 1e3)), this.pinchInwards = ((0, FY.j)(this, NY), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(YY, rY) {
            if (YY && rY) {
              const DY = rY.x - YY.x,
                FY = rY.y - YY.y,
                AY = this.camera.movement.input.getEntry("pointer", "pan"),
                IY = AY?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== IY && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -DY * IY, this.camera.movement.panAccumulatedPixels.y += FY * IY)
            }
          }
          _computePinchZoom(rY, DY) {
            const FY = this.camera.radius || YY.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = FY * Math.sqrt(rY) / Math.sqrt(DY);
            else if (this.pinchDeltaPercentage) {
              const YY = .001 * (DY - rY) * FY * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += YY
            } else {
              const YY = (DY - rY) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += YY
            }
          }
          onTouch(YY, rY, DY) {
            const FY = this._activeEntry ?? (this.camera.ky().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (FY)
              if ("pan" === FY.interaction) {
                const YY = FY.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== YY && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -rY * YY, this.camera.movement.panAccumulatedPixels.y += DY * YY)
              } else if ("rotate" === FY.interaction) {
              const YY = FY.GJ ?? FY.sensitivity ?? 1 / this.angularSensibilityX,
                AY = FY.xJ ?? FY.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -rY * YY, this.camera.movement.rotationAccumulatedPixels.y += -DY * AY
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(YY, rY, DY, FY, AY, IY) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(FY) - Math.sqrt(DY)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(YY, rY, DY, FY, AY, IY)
          }
          onButtonDown(YY) {
            this._pointerConditions.button = YY.button, this._pointerModifiers.ctrl = YY.ctrlKey, this._pointerModifiers.alt = YY.altKey, this._pointerModifiers.shift = YY.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(YY)
          }
          onButtonUp(YY) {
            this._activeEntry = null, super.onButtonUp(YY)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const TY = "function" === typeof Symbol && Symbol.metadata ? Object.create(vY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], RY = [(0, AY.M)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: YY => "buttons" in YY,
              get: YY => YY.buttons,
              set: (YY, rY) => {
                YY.buttons = rY
              }
            },
            metadata: TY
          }, uY, sY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: YY => "angularSensibilityX" in YY,
              get: YY => YY.angularSensibilityX,
              set: (YY, rY) => {
                YY.angularSensibilityX = rY
              }
            },
            metadata: TY
          }, iY, yY), (0, FY.i)(null, null, IY, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: YY => "angularSensibilityY" in YY,
              get: YY => YY.angularSensibilityY,
              set: (YY, rY) => {
                YY.angularSensibilityY = rY
              }
            },
            metadata: TY
          }, QY, oY), (0, FY.i)(null, null, RY, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: YY => "pinchPrecision" in YY,
              get: YY => YY.pinchPrecision,
              set: (YY, rY) => {
                YY.pinchPrecision = rY
              }
            },
            metadata: TY
          }, WY, EY), (0, FY.i)(null, null, OY, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: YY => "pinchDeltaPercentage" in YY,
              get: YY => YY.pinchDeltaPercentage,
              set: (YY, rY) => {
                YY.pinchDeltaPercentage = rY
              }
            },
            metadata: TY
          }, mY, VY), (0, FY.i)(null, null, gY, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: YY => "useNaturalPinchZoom" in YY,
              get: YY => YY.useNaturalPinchZoom,
              set: (YY, rY) => {
                YY.useNaturalPinchZoom = rY
              }
            },
            metadata: TY
          }, SY, lY), (0, FY.i)(null, null, aY, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: YY => "panningSensibility" in YY,
              get: YY => YY.panningSensibility,
              set: (YY, rY) => {
                YY.panningSensibility = rY
              }
            },
            metadata: TY
          }, eY, NY), TY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TY
          })
        })(), YY.MinimumRadiusForPinch = .001, YY
      })();
    VY.d.ArcRotateCameraPointersInput = eY;
    var NY = DY(39306);
    let BY = (() => {
      var YY;
      let rY, DY, IY, OY, gY, aY, vY, uY, sY, iY, yY, QY = [],
        oY = [],
        WY = [],
        EY = [],
        mY = [],
        VY = [],
        lY = [],
        TY = [],
        eY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [];
      return YY = class {
        constructor() {
          this.camera = (0, FY.j)(this, QY), this.keysUp = (0, FY.j)(this, oY, [38]), this.keysDown = ((0, FY.j)(this, WY), (0, FY.j)(this, EY, [40])), this.keysLeft = ((0, FY.j)(this, mY), (0, FY.j)(this, VY, [37])), this.keysRight = ((0, FY.j)(this, lY), (0, FY.j)(this, TY, [39])), this.keysReset = ((0, FY.j)(this, eY), (0, FY.j)(this, BY, [220])), this.keysZoomIn = ((0, FY.j)(this, cY), (0, FY.j)(this, KY, [187, 107])), this.keysZoomOut = ((0, FY.j)(this, HY), (0, FY.j)(this, zY, [189, 109])), this.panningSensibility = ((0, FY.j)(this, ZY), (0, FY.j)(this, CY, 50)), this.zoomingSensibility = ((0, FY.j)(this, fY), (0, FY.j)(this, jY, 25)), this.angularSpeed = ((0, FY.j)(this, hY), (0, FY.j)(this, dY, .01)), this._useAltToZoom = ((0, FY.j)(this, JY), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new RY.q, this._panDirection = new RY.q
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(YY) {
          this._useAltToZoom = YY, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const YY = this.camera.movement.input,
            rY = YY.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && rY ? YY.inputMap.splice(YY.inputMap.indexOf(rY), 1) : this._useAltToZoom && !rY && YY.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(YY) {
          YY = SY.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hT(), this._engine = this._scene.ky(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((rY => {
            const DY = rY.event;
            if (!DY.metaKey)
              if (rY.type === NY.d.KEYDOWN) {
                if (this._ctrlPressed = DY.ctrlKey, this._altPressed = DY.altKey, -1 !== this.keysUp.indexOf(DY.keyCode) || -1 !== this.keysDown.indexOf(DY.keyCode) || -1 !== this.keysLeft.indexOf(DY.keyCode) || -1 !== this.keysRight.indexOf(DY.keyCode) || -1 !== this.keysReset.indexOf(DY.keyCode) || -1 !== this.keysZoomIn.indexOf(DY.keyCode) || -1 !== this.keysZoomOut.indexOf(DY.keyCode)) {
                  -1 === this._keys.indexOf(DY.keyCode) && this._keys.push(DY.keyCode), DY.preventDefault && (YY || DY.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(DY.keyCode) || -1 !== this.keysDown.indexOf(DY.keyCode) || -1 !== this.keysLeft.indexOf(DY.keyCode) || -1 !== this.keysRight.indexOf(DY.keyCode) || -1 !== this.keysReset.indexOf(DY.keyCode) || -1 !== this.keysZoomIn.indexOf(DY.keyCode) || -1 !== this.keysZoomOut.indexOf(DY.keyCode)) {
              const rY = this._keys.indexOf(DY.keyCode);
              rY >= 0 && this._keys.splice(rY, 1), DY.preventDefault && (YY || DY.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const YY = this.camera,
              rY = YY.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const DY = this._rotateDirection.set(0, 0),
              FY = this._panDirection.set(0, 0);
            let AY = 0,
              IY = 0;
            for (let RY = 0; RY < this._keys.length; RY++) {
              const OY = this._keys[RY];
              if (this._keyboardConditions.key = OY, -1 === this.keysReset.indexOf(OY)) {
                const YY = rY.resolveInteraction("keyboard", this._keyboardConditions);
                if (YY)
                  if ("pan" === YY.interaction) IY = Math.max(IY, YY.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(OY) ? FY.x -= 1 : -1 !== this.keysRight.indexOf(OY) ? FY.x += 1 : -1 !== this.keysUp.indexOf(OY) ? FY.y += 1 : -1 !== this.keysDown.indexOf(OY) && (FY.y -= 1);
                  else if ("zoom" === YY.interaction) {
                  const DY = YY.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(OY) || -1 !== this.keysZoomIn.indexOf(OY) ? rY.handlers.zoom(DY) : -1 === this.keysDown.indexOf(OY) && -1 === this.keysZoomOut.indexOf(OY) || rY.handlers.zoom(-DY)
                } else "rotate" === YY.interaction && (AY = Math.max(AY, YY.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(OY) ? DY.x -= 1 : -1 !== this.keysRight.indexOf(OY) ? DY.x += 1 : -1 !== this.keysUp.indexOf(OY) ? DY.y -= 1 : -1 !== this.keysDown.indexOf(OY) && (DY.y += 1))
              } - 1 !== this.keysReset.indexOf(OY) && YY.useInputToRestoreState && YY.restoreState()
            }
            0 === DY.x && 0 === DY.y || (DY.normalize().scaleInPlace(AY), rY.handlers.rotate(DY.x, DY.y)), 0 === FY.x && 0 === FY.y || (FY.normalize().scaleInPlace(IY), rY.handlers.pan(FY.x, FY.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const RY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.M)()], sY = [(0, AY.M)()], iY = [(0, AY.M)()], yY = [(0, AY.M)()], (0, FY.i)(YY, null, yY, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAltToZoom" in YY,
            get: YY => YY.useAltToZoom
          },
          metadata: RY
        }, null, QY), (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysUp" in YY,
            get: YY => YY.keysUp,
            set: (YY, rY) => {
              YY.keysUp = rY
            }
          },
          metadata: RY
        }, oY, WY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysDown" in YY,
            get: YY => YY.keysDown,
            set: (YY, rY) => {
              YY.keysDown = rY
            }
          },
          metadata: RY
        }, EY, mY), (0, FY.i)(null, null, IY, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysLeft" in YY,
            get: YY => YY.keysLeft,
            set: (YY, rY) => {
              YY.keysLeft = rY
            }
          },
          metadata: RY
        }, VY, lY), (0, FY.i)(null, null, OY, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRight" in YY,
            get: YY => YY.keysRight,
            set: (YY, rY) => {
              YY.keysRight = rY
            }
          },
          metadata: RY
        }, TY, eY), (0, FY.i)(null, null, gY, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysReset" in YY,
            get: YY => YY.keysReset,
            set: (YY, rY) => {
              YY.keysReset = rY
            }
          },
          metadata: RY
        }, BY, cY), (0, FY.i)(null, null, aY, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysZoomIn" in YY,
            get: YY => YY.keysZoomIn,
            set: (YY, rY) => {
              YY.keysZoomIn = rY
            }
          },
          metadata: RY
        }, KY, HY), (0, FY.i)(null, null, vY, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysZoomOut" in YY,
            get: YY => YY.keysZoomOut,
            set: (YY, rY) => {
              YY.keysZoomOut = rY
            }
          },
          metadata: RY
        }, zY, ZY), (0, FY.i)(null, null, uY, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: YY => "panningSensibility" in YY,
            get: YY => YY.panningSensibility,
            set: (YY, rY) => {
              YY.panningSensibility = rY
            }
          },
          metadata: RY
        }, CY, fY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: YY => "zoomingSensibility" in YY,
            get: YY => YY.zoomingSensibility,
            set: (YY, rY) => {
              YY.zoomingSensibility = rY
            }
          },
          metadata: RY
        }, jY, hY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: YY => "angularSpeed" in YY,
            get: YY => YY.angularSpeed,
            set: (YY, rY) => {
              YY.angularSpeed = rY
            }
          },
          metadata: RY
        }, dY, JY), RY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RY
        })
      })(), YY
    })();
    VY.d.ArcRotateCameraKeyboardMoveInput = BY;
    var cY = DY(37107),
      KY = DY(39309);
    let HY = (() => {
      var YY;
      let rY, DY, IY, gY = [],
        aY = [],
        uY = [],
        iY = [],
        yY = [],
        QY = [];
      return YY = class {
        constructor() {
          this.wheelPrecision = (0, FY.j)(this, gY, 3), this.zoomToMouseLocation = ((0, FY.j)(this, aY), (0, FY.j)(this, uY, !1)), this.wheelDeltaPercentage = ((0, FY.j)(this, iY), (0, FY.j)(this, yY, 0)), this.customComputeDeltaFromMouseWheel = ((0, FY.j)(this, QY), null), this._viewOffset = new RY.r(0, 0, 0), this._globalOffset = new RY.r(0, 0, 0), this._inertialPanning = RY.r.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(YY, rY) {
          let DY;
          const FY = .01 * YY * this.wheelDeltaPercentage * rY;
          return DY = YY > 0 ? FY / (1 + this.wheelDeltaPercentage) : FY * (1 + this.wheelDeltaPercentage), DY
        }
        attachControl(YY) {
          YY = SY.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = rY => {
            if (rY.type !== vY.d.POINTERWHEEL) return;
            const DY = rY.event;
            let FY;
            const AY = DY.deltaMode === KY.d.DOM_DELTA_LINE ? 40 : 1,
              IY = -DY.deltaY * AY;
            if (this.customComputeDeltaFromMouseWheel) FY = this.customComputeDeltaFromMouseWheel(IY, this, DY);
            else if (this.wheelDeltaPercentage) {
              if (FY = this._computeDeltaFromMouseWheelLegacyEvent(IY, this.camera.radius), FY > 0) {
                const YY = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let rY = this.camera.radius,
                  DY = YY + FY;
                for (let FY = 0; FY < 20 && !(rY <= DY) && !(Math.abs(DY * this.camera.inertia) < .001); FY++) rY -= DY, DY *= this.camera.inertia;
                rY = (0, OY.Clamp)(rY, 0, Number.MAX_VALUE), FY = this._computeDeltaFromMouseWheelLegacyEvent(IY, rY)
              }
            } else {
              const YY = this.camera.movement.input.getEntry("wheel", "zoom");
              FY = IY * (YY?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            FY && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(FY)) : this.camera.movement.zoomAccumulatedPixels += FY), DY.preventDefault && (YY || DY.preventDefault())
          }, this._observer = this.camera.hT()._inputManager._addCameraPointerObserver(this._wheel, vY.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.o3(0)
        }
        detachControl() {
          this._observer && (this.camera.hT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const YY = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(YY.inertialAlphaOffset) + Math.abs(YY.inertialBetaOffset) + Math.abs(YY.inertialRadiusOffset)) {
            this._updateHitPlane(), YY.target.addInPlace(this._inertialPanning), YY.radius -= this._zoomToMouseRadiusOffset;
            const rY = YY.movement.getFrameIndependentDecay(YY.inertia);
            this._inertialPanning.scaleInPlace(rY), this._zoomToMouseRadiusOffset *= rY, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < sY.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const YY = this.camera,
            rY = YY.target.subtract(YY.position);
          this._hitPlane = cY.c.FromPositionAndNormal(YY.target, rY)
        }
        _getPosition() {
          const YY = this.camera,
            rY = YY.hT(),
            DY = rY.createPickingRay(rY.pointerX, rY.pointerY, RY.e.Identity(), YY, !1);
          0 === YY.targetScreenOffset.x && 0 === YY.targetScreenOffset.y || (this._viewOffset.set(YY.targetScreenOffset.x, YY.targetScreenOffset.y, 0), YY.getViewMatrix().invertToRef(YY._cameraTransformMatrix), this._globalOffset = RY.r.TransformNormal(this._viewOffset, YY._cameraTransformMatrix), DY.origin.addInPlace(this._globalOffset));
          let FY = 0;
          return this._hitPlane && (FY = DY.intersectsPlane(this._hitPlane) ?? 0), DY.origin.addInPlace(DY.direction.scaleInPlace(FY))
        }
        _zoomToMouse(YY) {
          const rY = this.camera,
            DY = 1 - rY.inertia,
            FY = rY.movement.getFrameIndependentInputScale(rY.inertia);
          if (rY.lowerRadiusLimit) {
            const AY = rY.lowerRadiusLimit ?? 0;
            rY.radius - (this._zoomToMouseRadiusOffset + YY * FY) / DY < AY && (YY = ((rY.radius - AY) * DY - this._zoomToMouseRadiusOffset) / FY)
          }
          if (rY.upperRadiusLimit) {
            const AY = rY.upperRadiusLimit ?? 0;
            rY.radius - (this._zoomToMouseRadiusOffset + YY * FY) / DY > AY && (YY = ((rY.radius - AY) * DY - this._zoomToMouseRadiusOffset) / FY)
          }
          const AY = YY / DY / rY.radius,
            IY = this._getPosition(),
            OY = RY.n.xy[6];
          IY.subtractToRef(rY.target, OY), OY.scaleInPlace(AY), OY.scaleInPlace(DY), OY.scaleInPlace(FY), this._inertialPanning.addInPlace(OY), this._zoomToMouseRadiusOffset += YY * FY
        }
        _zeroIfClose(YY) {
          Math.abs(YY.x) < sY.c && (YY.x = 0), Math.abs(YY.y) < sY.c && (YY.y = 0), Math.abs(YY.z) < sY.c && (YY.z = 0)
        }
      }, (() => {
        const RY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelPrecision" in YY,
            get: YY => YY.wheelPrecision,
            set: (YY, rY) => {
              YY.wheelPrecision = rY
            }
          },
          metadata: RY
        }, gY, aY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: YY => "zoomToMouseLocation" in YY,
            get: YY => YY.zoomToMouseLocation,
            set: (YY, rY) => {
              YY.zoomToMouseLocation = rY
            }
          },
          metadata: RY
        }, uY, iY), (0, FY.i)(null, null, IY, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelDeltaPercentage" in YY,
            get: YY => YY.wheelDeltaPercentage,
            set: (YY, rY) => {
              YY.wheelDeltaPercentage = rY
            }
          },
          metadata: RY
        }, yY, QY), RY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RY
        })
      })(), YY
    })();
    VY.d.ArcRotateCameraMouseWheelInput = HY;
    var zY, ZY, CY = DY(39029);
    class fY extends VY.e {
      constructor(YY) {
        super(YY)
      }
      addMouseWheel() {
        return this.add(new HY), this
      }
      addPointers() {
        return this.add(new eY), this
      }
      addKeyboard() {
        return this.add(new BY), this
      }
    }(zY = fY.prototype).addVRDeviceOrientation ?? (zY.addVRDeviceOrientation = (0, CY.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (ZY = fY.prototype).addGamepad ?? (ZY.addGamepad = (0, CY.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var jY = DY(36569),
      hY = DY(39358),
      dY = DY(39364);
    class JY extends hY.b {
      constructor(YY, rY, DY) {
        super(YY, rY, DY), this.input = new dY.c({
          pan: (YY, rY) => {
            this.panAccumulatedPixels.x += YY, this.panAccumulatedPixels.y += rY
          },
          rotate: (YY, rY) => {
            this.rotationAccumulatedPixels.x += YY, this.rotationAccumulatedPixels.y += rY
          },
          zoom: YY => {
            this.zoomAccumulatedPixels += YY
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

    function MY(YY, rY) {
      return isNaN(YY) ? rY : YY
    }
    let wY = (() => {
        var YY;
        let rY, DY, gY, vY, uY, yY, QY, VY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY, CY, jY, hY, dY, wY, bY, XY, qY, pY, kY, GY = mY.g,
          xY = [],
          nY = [],
          PY = [],
          UY = [],
          LY = [],
          tY = [],
          Yr = [],
          rr = [],
          Dr = [],
          Fr = [],
          Ar = [],
          Ir = [],
          Rr = [],
          Or = [],
          gr = [],
          ar = [],
          vr = [],
          ur = [],
          sr = [],
          ir = [],
          yr = [],
          Qr = [],
          or = [],
          Wr = [],
          Er = [],
          mr = [],
          Vr = [],
          Sr = [],
          lr = [],
          Tr = [],
          er = [],
          Nr = [],
          Br = [],
          cr = [],
          Kr = [],
          Hr = [],
          zr = [],
          Zr = [],
          Cr = [],
          fr = [],
          jr = [],
          hr = [],
          dr = [],
          Jr = [],
          Mr = [],
          wr = [],
          br = [];
        return YY = class extends GY {
          get target() {
            return this.Fk
          }
          set target(YY) {
            this.setTarget(YY)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(YY) {
            YY && this.setTarget(YY)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(YY) {
            this.setPosition(YY)
          }
          set upVector(YY) {
            this._upToYMatrix || (this._yToUpMatrix = new RY.e, this._upToYMatrix = new RY.e, this._upVector = RY.r.Zero()), YY.normalize(), this._upVector.brY(YY), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            RY.e.RotationAlignToRef(RY.r.UpReadOnly, this._upVector, this._yToUpMatrix), RY.e.RotationAlignToRef(this._upVector, RY.r.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const YY = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(YY) < this._rotationEpsilon ? 0 : YY
          }
          set inertialAlphaOffset(YY) {
            this._inertialAlphaOffset = YY, 0 === YY && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const YY = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(YY) < this._rotationEpsilon ? 0 : YY
          }
          set inertialBetaOffset(YY) {
            this._inertialBetaOffset = YY, 0 === YY && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const YY = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(YY) < this._rotationEpsilon ? 0 : YY
          }
          set inertialRadiusOffset(YY) {
            this._inertialRadiusOffset = YY, 0 === YY && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(YY) {
            this._panningInertia = YY, this.movement && (this.movement.panInertia = YY)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(YY) {
            this._inertia = YY, this.movement && (this.movement.rotationInertia = YY, this.movement.zoomInertia = YY)
          }
          get angularSensibilityX() {
            const YY = this.inputs.attached.pointers;
            return YY ? YY.angularSensibilityX : 0
          }
          set angularSensibilityX(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.angularSensibilityX = YY)
          }
          get angularSensibilityY() {
            const YY = this.inputs.attached.pointers;
            return YY ? YY.angularSensibilityY : 0
          }
          set angularSensibilityY(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.angularSensibilityY = YY)
          }
          get pinchPrecision() {
            const YY = this.inputs.attached.pointers;
            return YY ? YY.pinchPrecision : 0
          }
          set pinchPrecision(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.pinchPrecision = YY)
          }
          get pinchDeltaPercentage() {
            const YY = this.inputs.attached.pointers;
            return YY ? YY.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.pinchDeltaPercentage = YY)
          }
          get useNaturalPinchZoom() {
            const YY = this.inputs.attached.pointers;
            return !!YY && YY.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.useNaturalPinchZoom = YY)
          }
          get panningSensibility() {
            const YY = this.inputs.attached.pointers;
            return YY ? YY.panningSensibility : 0
          }
          set panningSensibility(YY) {
            const rY = this.inputs.attached.pointers;
            rY && (rY.panningSensibility = YY)
          }
          get keysUp() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysUp : []
          }
          set keysUp(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysUp = YY)
          }
          get keysDown() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysDown : []
          }
          set keysDown(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysDown = YY)
          }
          get keysLeft() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysLeft : []
          }
          set keysLeft(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysLeft = YY)
          }
          get keysRight() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRight : []
          }
          set keysRight(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRight = YY)
          }
          get wheelPrecision() {
            const YY = this.inputs.attached.mousewheel;
            return YY ? YY.wheelPrecision : 0
          }
          set wheelPrecision(YY) {
            const rY = this.inputs.attached.mousewheel;
            rY && (rY.wheelPrecision = YY)
          }
          get zoomToMouseLocation() {
            const YY = this.inputs.attached.mousewheel;
            return !!YY && YY.zoomToMouseLocation
          }
          set zoomToMouseLocation(YY) {
            const rY = this.inputs.attached.mousewheel;
            rY && (rY.zoomToMouseLocation = YY)
          }
          get wheelDeltaPercentage() {
            const YY = this.inputs.attached.mousewheel;
            return YY ? YY.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(YY) {
            const rY = this.inputs.attached.mousewheel;
            rY && (rY.wheelDeltaPercentage = YY)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(YY) {
            this._useCtrlForPanningInternal = YY;
            const rY = this.movement.input,
              DY = rY.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !YY && DY ? rY.inputMap.splice(rY.inputMap.indexOf(DY), 1) : YY && !DY && rY.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const FY = rY.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !YY && FY ? rY.inputMap.splice(rY.inputMap.indexOf(FY), 1) : YY && !FY && rY.addEntry({
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
          set _panningMouseButton(YY) {
            this._panningMouseButtonInternal = YY;
            const rY = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            rY && (rY.button = YY)
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
          set useBouncingBehavior(YY) {
            YY !== this.useBouncingBehavior && (YY ? (this._bouncingBehavior = new oY, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(YY) {
            YY !== this.useFramingBehavior && (YY ? (this._framingBehavior = new WY, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(YY) {
            YY !== this.useAutoRotationBehavior && (YY ? (this._autoRotationBehavior = new iY, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(YY, rY, DY, AY, OY, gY) {
            var aY;
            let vY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(YY, RY.r.Zero(), gY, vY), aY = this, this.alpha = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, void 0)), this.beta = ((0, FY.j)(this, PY), (0, FY.j)(this, UY, void 0)), this.radius = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, void 0)), this.overrideCloneAlphaBetaRadius = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, void 0)), this.Fk = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, void 0)), this._targetHost = ((0, FY.j)(this, Ar), (0, FY.j)(this, Ir, void 0)), this._upToYMatrix = (0, FY.j)(this, Rr), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, FY.j)(this, Or, null), this.upperAlphaLimit = ((0, FY.j)(this, gr), (0, FY.j)(this, ar, null)), this.lowerBetaLimit = ((0, FY.j)(this, vr), (0, FY.j)(this, ur, .01)), this.upperBetaLimit = ((0, FY.j)(this, sr), (0, FY.j)(this, ir, Math.PI - .01)), this.lowerRadiusLimit = ((0, FY.j)(this, yr), (0, FY.j)(this, Qr, null)), this.upperRadiusLimit = ((0, FY.j)(this, or), (0, FY.j)(this, Wr, null)), this.lowerTargetYLimit = ((0, FY.j)(this, Er), (0, FY.j)(this, mr, -1 / 0)), this.inertialPanningX = ((0, FY.j)(this, Vr), (0, FY.j)(this, Sr, 0)), this.inertialPanningY = ((0, FY.j)(this, lr), (0, FY.j)(this, Tr, 0)), this.pinchToPanMaxDistance = ((0, FY.j)(this, er), (0, FY.j)(this, Nr, 20)), this.panningDistanceLimit = ((0, FY.j)(this, Br), (0, FY.j)(this, cr, null)), this.panningOriginTarget = ((0, FY.j)(this, Kr), (0, FY.j)(this, Hr, RY.r.Zero())), this._panningInertia = ((0, FY.j)(this, zr), .9), this._inertia = .9, this.zoomOnFactor = (0, FY.j)(this, Zr, 1), this.targetScreenOffset = ((0, FY.j)(this, Cr), (0, FY.j)(this, fr, RY.q.Zero())), this.allowUpsideDown = ((0, FY.j)(this, jr), (0, FY.j)(this, hr, !0)), this.useInputToRestoreState = ((0, FY.j)(this, dr), (0, FY.j)(this, Jr, !0)), this.restoreStateInterpolationFactor = ((0, FY.j)(this, Mr), (0, FY.j)(this, wr, 0)), this._currentInterpolationFactor = ((0, FY.j)(this, br), 0), this._viewMatrix = new RY.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new RY.r(1, 1, 0), this._transformedDirection = new RY.r, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new IY.e, this.checkCollisions = !1, this.collisionRadius = new RY.r(.5, .5, .5), this._previousPosition = RY.r.Zero(), this._collisionVelocity = RY.r.Zero(), this._newPosition = RY.r.Zero(), this._computationVector = RY.r.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new RY.r(NaN, NaN, NaN), this._goalTargetScreenOffset = new RY.q(NaN, NaN), this._onCollisionPositionChange = function(YY, rY) {
              let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              DY ? (aY.setPosition(rY), aY.Lu && aY.Lu(DY)) : aY._previousPosition.brY(aY._position);
              const FY = Math.cos(aY.alpha),
                AY = Math.sin(aY.alpha),
                IY = Math.cos(aY.beta);
              let RY = Math.sin(aY.beta);
              0 === RY && (RY = 1e-4);
              const OY = aY._getTargetPosition();
              aY._computationVector.p_(aY.radius * FY * RY, aY.radius * IY, aY.radius * AY * RY), OY.addToRef(aY._computationVector, aY._newPosition), aY._position.brY(aY._newPosition);
              let gY = aY.upVector;
              aY.allowUpsideDown && aY.beta < 0 && (gY = gY.clone(), gY = gY.GA()), aY._computeViewMatrix(aY._position, OY, gY), aY._viewMatrix.addAtIndex(12, aY.targetScreenOffset.x), aY._viewMatrix.addAtIndex(13, aY.targetScreenOffset.y), aY._collisionTriggered = !1
            }, this.Fk = RY.r.Zero(), OY && this.setTarget(OY), this.alpha = rY, this.beta = DY, this.radius = AY, this.getViewMatrix(), this.inputs = new fY(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new JY(this.hT(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Fk = new RY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = RY.q.Zero()
          }
          _updateCache(YY) {
            YY || super._updateCache(), this._cache.Fk.brY(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.brY(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const YY = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? YY.addToRef(this._targetBoundingCenter, this.Fk) : this.Fk.brY(YY)
            }
            const YY = this._getLockedTargetPosition();
            return YY || this.Fk
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > sY.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              IY = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != IY ? this._currentInterpolationFactor = IY : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = MY(YY, this._goalAlpha), this._goalBeta = MY(rY, this._goalBeta), this._goalRadius = MY(DY, this._goalRadius), this._goalTarget.set(MY(FY.x, this._goalTarget.x), MY(FY.y, this._goalTarget.y), MY(FY.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(MY(AY.x, this._goalTargetScreenOffset.x), MY(AY.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, OY.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, OY.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, OY.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, OY.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Fk.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(YY, rY) {
            let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const AY = arguments;
            rY = SY.i.BackCompatCameraNoPreventDefault(AY), this._useCtrlForPanning = DY, this._panningMouseButton = FY, "boolean" === typeof AY[0] && (AY.length > 1 && (this._useCtrlForPanning = AY[1]), AY.length > 2 && (this._panningMouseButton = AY[2])), this.inputs.attachElement(rY), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(YY, rY, DY) {
            const FY = this.invertRotation ? -1 : 1;
            let AY = YY * this._calculateHandednessMultiplier();
            this.beta < 0 && (AY *= -1), this.alpha += AY * FY, this.beta += rY * FY, this.radius -= DY
          }
          _applyPanDelta(YY, rY) {
            const DY = RY.n.xy[0].p_(YY, rY, rY);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), DY.multiplyInPlace(this.panningAxis), RY.r.TransformNormalToRef(DY, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const YY = this.upVector,
                rY = RY.r.CrossToRef(this._transformedDirection, YY, this._transformedDirection);
              RY.r.CrossToRef(YY, rY, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Fk);
                RY.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Fk.brY(this._transformedDirection)
              } else {
                if (this.parent) {
                  const YY = RY.n.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(YY), YY.transposeToRef(YY), RY.r.TransformCoordinatesToRef(this._transformedDirection, YY, this._transformedDirection)
                }
                this.Fk.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let YY = !1;
            this.movement.computeCurrentFrameDeltas();
            const rY = this.movement.rotationDeltaCurrentFrame,
              DY = this.movement.zoomDeltaCurrentFrame,
              FY = this.movement.panDeltaCurrentFrame;
            if (0 === rY.x && 0 === rY.y && 0 === DY && 0 === FY.x && 0 === FY.y || (YY = !0, 0 === rY.x && 0 === rY.y && 0 === DY || this._applyRotationAndZoomDelta(rY.x, rY.y, DY), 0 === FY.x && 0 === FY.y || this._applyPanDelta(FY.x, FY.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), YY = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const rY = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < rY && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < rY && (this.inertialPanningY = 0), YY = !0
            }
            if (YY) this.stopInterpolation();
            else if (this._isInterpolating) {
              let YY = !1;
              const rY = this._scene.ky().getDeltaTime() / 1e3,
                DY = 1 - Math.pow(2, -rY / this._currentInterpolationFactor),
                FY = MY(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const rY = RY.n.xy[0].set(MY(this._goalTarget.x, this.Fk.x), MY(this._goalTarget.y, this.Fk.y), MY(this._goalTarget.z, this.Fk.z));
                RY.r.LerpToRef(this.target, rY, DY, this.Fk), 10 * RY.r.Distance(this.target, rY) / FY < sY.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.brY(rY), this.setTarget(this.target, !1, !0, !0)) : YY = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const rY = RY.g.RotationAlphaBetaGammaToRef(MY(this._goalAlpha, this.alpha), MY(this._goalBeta, this.beta), 0, RY.n.Quaternion[0]),
                  FY = RY.g.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, RY.n.Quaternion[1]),
                  AY = RY.g.SlerpToRef(FY, rY, DY, RY.n.Quaternion[2]);
                AY.normalize();
                const IY = AY.toAlphaBetaGammaToRef(RY.n.xy[0]);
                if (this.alpha = IY.x, this.beta = IY.y, AY.isApprox(rY, sY.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const YY = rY.toAlphaBetaGammaToRef(RY.n.xy[0]);
                  this.alpha = YY.x, this.beta = YY.y
                } else YY = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (FY - this.radius) * DY, Math.abs(FY / this.radius - 1) < sY.c ? (this._goalRadius = NaN, this.radius = FY) : YY = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const rY = RY.n.Vector2[0].set(MY(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), MY(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                RY.q.LerpToRef(this.targetScreenOffset, rY, DY, this.targetScreenOffset), RY.q.Distance(this.targetScreenOffset, rY) < sY.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.brY(rY)) : YY = !0
              }
              this._isInterpolating = YY
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || RY.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const YY = this.alpha;
            var rY, DY;
            this.alpha = function(YY) {
              let rY = Math.PI / 2;
              return 0 === YY.x && 0 === YY.z || (rY = Math.acos(YY.x / Math.sqrt(Math.pow(YY.x, 2) + Math.pow(YY.z, 2)))), YY.z < 0 && (rY = 2 * Math.PI - rY), rY
            }(this._computationVector), this.beta = (rY = this._computationVector.y, DY = this.radius, Math.acos(rY / DY));
            const FY = Math.round((YY - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * FY * Math.PI, this._checkLimits()
          }
          setPosition(YY) {
            this._position.equals(YY) || (this._position.brY(YY), this.rebuildAnglesAndRadius())
          }
          setTarget(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (FY = this.overrideCloneAlphaBetaRadius ?? FY, YY.computeWorldMatrix) rY && YY.oB ? this._targetBoundingCenter = YY.oB().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, YY.computeWorldMatrix(), this._targetHost = YY, this.Fk = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const rY = YY,
                FY = this._getTargetPosition();
              if (FY && !DY && FY.equals(rY)) return;
              this._targetHost = null, this.Fk = rY, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            FY || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const YY = Math.cos(this.alpha),
              rY = Math.sin(this.alpha),
              DY = Math.cos(this.beta);
            let FY = Math.sin(this.beta);
            0 === FY && (FY = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const AY = this._getTargetPosition();
            if (this._computationVector.p_(this.radius * YY * FY, this.radius * DY, this.radius * rY * FY), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || RY.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), AY.addToRef(this._computationVector, this._newPosition), this.hT().collisionsEnabled && this.checkCollisions) {
              const YY = this.hT().collisionCoordinator;
              this._collider || (this._collider = YY.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, YY.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.brY(this._newPosition);
              let YY = this.upVector;
              this.allowUpsideDown && FY < 0 && (YY = YY.GA()), this._computeViewMatrix(this._position, AY, YY), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.brY(AY), this._viewMatrix
          }
          zoomOn(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            YY = YY || this.hT().meshes;
            const DY = aY.c.MinMax(YY);
            let FY = this._calculateLowerRadiusFromModelBoundingSphere(DY.min, DY.max);
            if (FY = Math.max(Math.min(FY, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = FY * this.zoomOnFactor, this.mode === EY.e.ORTHOGRAPHIC_CAMERA) {
              const YY = this.hT().ky().getAspectRatio(this),
                rY = FY * this.zoomOnFactor / 2;
              this.orthoLeft = -rY * YY, this.orthoRight = rY * YY, this.orthoBottom = -rY, this.orthoTop = rY
            }
            this.focusOn({
              min: DY.min,
              max: DY.max,
              distance: FY
            }, rY)
          }
          focusOn(YY) {
            let rY, DY, FY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === YY.min) {
              const FY = YY || this.hT().meshes;
              rY = aY.c.MinMax(FY), DY = RY.r.Distance(rY.min, rY.max)
            } else {
              rY = YY, DY = YY.distance
            }
            this.Fk = aY.c.Center(rY), FY || (this.maxZ = 2 * DY)
          }
          createRigCamera(rY, DY) {
            let FY = 0;
            switch (this.cameraRigMode) {
              case EY.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case EY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case EY.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case EY.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case EY.e.RIG_MODE_VR:
                FY = this._cameraRigParams.stereoHalfAngle * (0 === DY ? 1 : -1);
                break;
              case EY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                FY = this._cameraRigParams.stereoHalfAngle * (0 === DY ? -1 : 1)
            }
            const AY = new YY(rY, this.alpha + FY, this.beta, this.radius, this.Fk, this.hT());
            return AY._cameraRigParams = {}, AY.isRigCamera = !0, AY.rigParent = this, AY.upVector = this.upVector, AY.mode = this.mode, AY.orthoLeft = this.orthoLeft, AY.orthoRight = this.orthoRight, AY.orthoBottom = this.orthoBottom, AY.orthoTop = this.orthoTop, AY
          }
          _updateRigCameras() {
            const YY = this._rigCameras[0],
              rY = this._rigCameras[1];
            switch (YY.beta = rY.beta = this.beta, this.cameraRigMode) {
              case EY.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case EY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case EY.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case EY.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case EY.e.RIG_MODE_VR:
                YY.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, rY.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case EY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                YY.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, rY.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const FY = RY.r.Distance(YY, rY),
              AY = this.hT().ky().getAspectRatio(this),
              IY = Math.tan(this.fov / 2),
              OY = IY * AY,
              gY = .5 * FY * DY,
              aY = gY * Math.sqrt(1 + 1 / (OY * OY)),
              vY = gY * Math.sqrt(1 + 1 / (IY * IY));
            return Math.max(aY, vY)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(GY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], gY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.J)("target")], yY = [(0, AY.B)("targetHost")], QY = [(0, AY.M)()], VY = [(0, AY.M)()], lY = [(0, AY.M)()], TY = [(0, AY.M)()], eY = [(0, AY.M)()], NY = [(0, AY.M)()], BY = [(0, AY.M)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], zY = [(0, AY.M)()], ZY = [(0, AY.M)()], CY = [(0, AY.M)()], jY = [(0, AY.M)()], hY = [(0, AY.J)()], dY = [(0, AY.M)()], wY = [(0, AY.M)()], bY = [(0, AY.M)()], XY = [(0, AY.G)()], qY = [(0, AY.M)()], pY = [(0, AY.M)()], kY = [(0, AY.M)()], (0, FY.i)(YY, null, QY, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "inertialAlphaOffset" in YY,
              get: YY => YY.inertialAlphaOffset
            },
            metadata: IY
          }, null, xY), (0, FY.i)(YY, null, VY, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "inertialBetaOffset" in YY,
              get: YY => YY.inertialBetaOffset
            },
            metadata: IY
          }, null, xY), (0, FY.i)(YY, null, lY, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "inertialRadiusOffset" in YY,
              get: YY => YY.inertialRadiusOffset
            },
            metadata: IY
          }, null, xY), (0, FY.i)(YY, null, dY, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: YY => "panningInertia" in YY,
              get: YY => YY.panningInertia
            },
            metadata: IY
          }, null, xY), (0, FY.i)(YY, null, wY, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: YY => "zoomToMouseLocation" in YY,
              get: YY => YY.zoomToMouseLocation
            },
            metadata: IY
          }, null, xY), (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "alpha" in YY,
              get: YY => YY.alpha,
              set: (YY, rY) => {
                YY.alpha = rY
              }
            },
            metadata: IY
          }, nY, PY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: YY => "beta" in YY,
              get: YY => YY.beta,
              set: (YY, rY) => {
                YY.beta = rY
              }
            },
            metadata: IY
          }, UY, LY), (0, FY.i)(null, null, gY, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: YY => "radius" in YY,
              get: YY => YY.radius,
              set: (YY, rY) => {
                YY.radius = rY
              }
            },
            metadata: IY
          }, tY, Yr), (0, FY.i)(null, null, vY, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: YY => "overrideCloneAlphaBetaRadius" in YY,
              get: YY => YY.overrideCloneAlphaBetaRadius,
              set: (YY, rY) => {
                YY.overrideCloneAlphaBetaRadius = rY
              }
            },
            metadata: IY
          }, rr, Dr), (0, FY.i)(null, null, uY, {
            kind: "field",
            name: "Fk",
            static: !1,
            private: !1,
            access: {
              has: YY => "Fk" in YY,
              get: YY => YY.Fk,
              set: (YY, rY) => {
                YY.Fk = rY
              }
            },
            metadata: IY
          }, Fr, Ar), (0, FY.i)(null, null, yY, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: YY => "_targetHost" in YY,
              get: YY => YY._targetHost,
              set: (YY, rY) => {
                YY._targetHost = rY
              }
            },
            metadata: IY
          }, Ir, Rr), (0, FY.i)(null, null, TY, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "lowerAlphaLimit" in YY,
              get: YY => YY.lowerAlphaLimit,
              set: (YY, rY) => {
                YY.lowerAlphaLimit = rY
              }
            },
            metadata: IY
          }, Or, gr), (0, FY.i)(null, null, eY, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "upperAlphaLimit" in YY,
              get: YY => YY.upperAlphaLimit,
              set: (YY, rY) => {
                YY.upperAlphaLimit = rY
              }
            },
            metadata: IY
          }, ar, vr), (0, FY.i)(null, null, NY, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "lowerBetaLimit" in YY,
              get: YY => YY.lowerBetaLimit,
              set: (YY, rY) => {
                YY.lowerBetaLimit = rY
              }
            },
            metadata: IY
          }, ur, sr), (0, FY.i)(null, null, BY, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "upperBetaLimit" in YY,
              get: YY => YY.upperBetaLimit,
              set: (YY, rY) => {
                YY.upperBetaLimit = rY
              }
            },
            metadata: IY
          }, ir, yr), (0, FY.i)(null, null, cY, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "lowerRadiusLimit" in YY,
              get: YY => YY.lowerRadiusLimit,
              set: (YY, rY) => {
                YY.lowerRadiusLimit = rY
              }
            },
            metadata: IY
          }, Qr, or), (0, FY.i)(null, null, KY, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "upperRadiusLimit" in YY,
              get: YY => YY.upperRadiusLimit,
              set: (YY, rY) => {
                YY.upperRadiusLimit = rY
              }
            },
            metadata: IY
          }, Wr, Er), (0, FY.i)(null, null, HY, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "lowerTargetYLimit" in YY,
              get: YY => YY.lowerTargetYLimit,
              set: (YY, rY) => {
                YY.lowerTargetYLimit = rY
              }
            },
            metadata: IY
          }, mr, Vr), (0, FY.i)(null, null, zY, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: YY => "inertialPanningX" in YY,
              get: YY => YY.inertialPanningX,
              set: (YY, rY) => {
                YY.inertialPanningX = rY
              }
            },
            metadata: IY
          }, Sr, lr), (0, FY.i)(null, null, ZY, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: YY => "inertialPanningY" in YY,
              get: YY => YY.inertialPanningY,
              set: (YY, rY) => {
                YY.inertialPanningY = rY
              }
            },
            metadata: IY
          }, Tr, er), (0, FY.i)(null, null, CY, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: YY => "pinchToPanMaxDistance" in YY,
              get: YY => YY.pinchToPanMaxDistance,
              set: (YY, rY) => {
                YY.pinchToPanMaxDistance = rY
              }
            },
            metadata: IY
          }, Nr, Br), (0, FY.i)(null, null, jY, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: YY => "panningDistanceLimit" in YY,
              get: YY => YY.panningDistanceLimit,
              set: (YY, rY) => {
                YY.panningDistanceLimit = rY
              }
            },
            metadata: IY
          }, cr, Kr), (0, FY.i)(null, null, hY, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: YY => "panningOriginTarget" in YY,
              get: YY => YY.panningOriginTarget,
              set: (YY, rY) => {
                YY.panningOriginTarget = rY
              }
            },
            metadata: IY
          }, Hr, zr), (0, FY.i)(null, null, bY, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: YY => "zoomOnFactor" in YY,
              get: YY => YY.zoomOnFactor,
              set: (YY, rY) => {
                YY.zoomOnFactor = rY
              }
            },
            metadata: IY
          }, Zr, Cr), (0, FY.i)(null, null, XY, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "targetScreenOffset" in YY,
              get: YY => YY.targetScreenOffset,
              set: (YY, rY) => {
                YY.targetScreenOffset = rY
              }
            },
            metadata: IY
          }, fr, jr), (0, FY.i)(null, null, qY, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: YY => "allowUpsideDown" in YY,
              get: YY => YY.allowUpsideDown,
              set: (YY, rY) => {
                YY.allowUpsideDown = rY
              }
            },
            metadata: IY
          }, hr, dr), (0, FY.i)(null, null, pY, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: YY => "useInputToRestoreState" in YY,
              get: YY => YY.useInputToRestoreState,
              set: (YY, rY) => {
                YY.useInputToRestoreState = rY
              }
            },
            metadata: IY
          }, Jr, Mr), (0, FY.i)(null, null, kY, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: YY => "restoreStateInterpolationFactor" in YY,
              get: YY => YY.restoreStateInterpolationFactor,
              set: (YY, rY) => {
                YY.restoreStateInterpolationFactor = rY
              }
            },
            metadata: IY
          }, wr, br), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      bY = !1;
    bY || (bY = !0, gY.b.AddNodeConstructor("ArcRotateCamera", ((YY, rY) => () => new wY(YY, 0, 0, 1, RY.r.Zero(), rY))), (0, jY.i)("BABYLON.ArcRotateCamera", wY))
  },
  39375: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY.e
    });
    var FY = DY(39383);
    (0, FY.h)()
  },
  39383: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      h: () => sY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(36588),
      OY = DY(39387),
      gY = DY(39347),
      aY = DY(36569);
    let vY = (() => {
        var YY;
        let rY, DY, gY = OY.c,
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        return YY = class extends gY {
          constructor(YY, rY, DY, AY) {
            super(YY, DY, AY), this.groundColor = (0, FY.j)(this, aY, new RY.c(0, 0, 0)), this.direction = ((0, FY.j)(this, vY), (0, FY.j)(this, uY, void 0)), (0, FY.j)(this, sY), this.direction = rY || IY.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(YY) {
            return this.direction = IY.r.Normalize(YY.subtract(IY.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", DY.x, DY.y, DY.z, 0, rY), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rY), this
          }
          transferToNodeMaterialEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return YY.setFloat3(rY, DY.x, DY.y, DY.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = IY.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return OY.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(YY, rY) {
            YY["HEMILIGHT" + rY] = !0
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(gY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.o)()], DY = [(0, AY.J)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "groundColor" in YY,
              get: YY => YY.groundColor,
              set: (YY, rY) => {
                YY.groundColor = rY
              }
            },
            metadata: IY
          }, aY, vY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: YY => "direction" in YY,
              get: YY => YY.direction,
              set: (YY, rY) => {
                YY.direction = rY
              }
            },
            metadata: IY
          }, uY, sY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      uY = !1;

    function sY() {
      uY || (uY = !0, gY.b.AddNodeConstructor("Light_Type_3", ((YY, rY) => () => new vY(YY, IY.r.Zero(), rY))), (0, aY.i)("BABYLON.HemisphericLight", vY))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
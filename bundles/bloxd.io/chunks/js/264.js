export const id = 264;
export const ids = [264];
export const modules = {
  41476: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => qG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37465),
      yG = ZG(37439),
      kG = ZG(37471),
      UG = ZG(40599),
      YG = ZG(40784),
      VG = ZG(40550),
      pG = ZG(40285),
      fG = ZG(37443);
    class QG {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(GG) {
        this._zoomStopsAnimation = GG
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(GG) {
        this._idleRotationSpeed = GG
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(GG) {
        this._idleRotationWaitTime = GG
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(GG) {
        this._idleRotationSpinupTime = GG
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
      attach(GG) {
        this._attachedCamera = GG;
        const bG = this._attachedCamera.Dv();
        this._onPrePointerObservableObserver = bG.onPrePointerObservable.add((GG => {
          GG.type !== VG.b.POINTERDOWN ? GG.type === VG.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = GG.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const GG = pG.c.Now;
          let bG = 0;
          null != this._lastFrameTime && (bG = GG - this._lastFrameTime), this._lastFrameTime = GG, this._applyUserInteraction();
          const ZG = GG - this._lastInteractionTime - this._idleRotationWaitTime,
            wG = Math.max(Math.min(ZG / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * wG, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (bG / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const GG = this._attachedCamera.Dv();
        this._onPrePointerObservableObserver && GG.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(GG) {
        this._lastInteractionTime = GG ?? pG.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < fG.d
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let GG = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (GG = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? GG : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = pG.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ZG(41481);
    class KG {
      constructor() {
        this._easingMode = KG.EASINGMODE_EASEIN
      }
      setEasingMode(GG) {
        const bG = Math.min(Math.max(GG, 0), 2);
        this._easingMode = bG
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(GG) {
        throw new Error("You must implement this method")
      }
      ease(GG) {
        switch (this._easingMode) {
          case KG.EASINGMODE_EASEIN:
            return this.easeInCore(GG);
          case KG.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - GG)
        }
        return GG >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - GG))) + .5 : .5 * this.easeInCore(2 * GG)
      }
    }
    KG.EASINGMODE_EASEIN = 0, KG.EASINGMODE_EASEOUT = 1, KG.EASINGMODE_EASEINOUT = 2;
    var hG = ZG(41487);
    class dG {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(GG) {
        if (this._autoTransitionRange === GG) return;
        this._autoTransitionRange = GG;
        const bG = this._attachedCamera;
        bG && (GG ? this._onMeshTargetChangedObserver = bG.onMeshTargetChangedObservable.add((GG => {
          if (GG && (GG.computeWorldMatrix(!0), GG.HA)) {
            const bG = GG.HA().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * bG, this.upperRadiusTransitionRange = .05 * bG
          }
        })) : this._onMeshTargetChangedObserver && bG.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(GG) {
        this._attachedCamera = GG, this._onAfterCheckInputsObserver = GG.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(GG) {
        return !!this._attachedCamera && (this._attachedCamera.radius === GG && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(GG) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (dG.EasingFunction.setEasingMode(dG.EasingMode), this._radiusBounceTransition = hG.d.CreateAnimation("radius", hG.d.ANIMATIONTYPE_FLOAT, 60, dG.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const bG = hG.d.TransitionTo("radius", this._attachedCamera.radius + GG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        bG && this._animatables.push(bG)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    dG.EasingFunction = new class extends KG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = GG
      }
      easeInCore(GG) {
        const bG = Math.max(0, this.amplitude);
        return Math.pow(GG, 3) - GG * bG * Math.sin(3.141592653589793 * GG)
      }
    }(.3), dG.EasingMode = KG.EASINGMODE_EASEOUT;
    class JG {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new LG.c, this._mode = JG.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(GG) {
        this._mode = GG
      }
      get mode() {
        return this._mode
      }
      set radiusScale(GG) {
        this._radiusScale = GG
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(GG) {
        this._positionScale = GG
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(GG) {
        this._defaultElevation = GG
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(GG) {
        this._elevationReturnTime = GG
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(GG) {
        this._elevationReturnWaitTime = GG
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(GG) {
        this._zoomStopsAnimation = GG
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(GG) {
        this._framingTime = GG
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(GG) {
        this._attachedCamera = GG;
        const bG = this._attachedCamera.Dv();
        JG.EasingFunction.setEasingMode(JG.EasingMode), this._onPrePointerObservableObserver = bG.onPrePointerObservable.add((GG => {
          GG.type !== VG.b.POINTERDOWN ? GG.type === VG.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = GG.onMeshTargetChangedObservable.add((GG => {
          GG && GG.HA && this.zoomOnMesh(GG, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = GG.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const GG = this._attachedCamera.Dv();
        this._onPrePointerObservableObserver && GG.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        GG.computeWorldMatrix(!0);
        const wG = GG.HA().boundingBox;
        this.zoomOnBoundingInfo(wG.minimumWorld, wG.maximumWorld, bG, ZG)
      }
      zoomOnMeshHierarchy(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        GG.computeWorldMatrix(!0);
        const wG = GG.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(wG.min, wG.max, bG, ZG)
      }
      zoomOnMeshesHierarchy(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wG = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          SG = new yG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let LG = 0; LG < GG.length; LG++) {
          const bG = GG[LG].getHierarchyBoundingVectors(!0);
          yG.p.CheckExtends(bG.min, wG, SG), yG.p.CheckExtends(bG.max, wG, SG)
        }
        this.zoomOnBoundingInfo(wG, SG, bG, ZG)
      }
      zoomOnBoundingInfo(GG, bG) {
        let ZG, wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const LG = GG.y,
          kG = LG + (bG.y - LG) * this._positionScale,
          UG = bG.subtract(GG).scale(.5);
        if (!isFinite(kG)) return !1;
        if (wG) ZG = new yG.p(0, kG, 0);
        else {
          const bG = GG.add(UG);
          ZG = new yG.p(bG.x, kG, bG.z)
        }
        this._vectorTransition || (this._vectorTransition = hG.d.CreateAnimation("target", hG.d.ANIMATIONTYPE_VECTOR3, 60, JG.EasingFunction)), this._betaIsAnimating = !0;
        let YG = hG.d.TransitionTo("target", ZG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._vectorTransition, this._framingTime);
        YG && this._animatables.push(YG);
        let VG = 0;
        if (this._mode === JG.FitFrustumSidesMode) {
          const ZG = this._calculateLowerRadiusFromModelBoundingSphere(GG, bG);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = UG.length() + this._attachedCamera.minZ), VG = ZG
        } else this._mode === JG.IgnoreBoundsSizeMode && (VG = this._calculateLowerRadiusFromModelBoundingSphere(GG, bG), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ZG = bG.subtract(GG).length();
          this._attachedCamera.panningSensibility = 5e3 / ZG, this._attachedCamera.wheelPrecision = 100 / VG
        }
        return this._radiusTransition || (this._radiusTransition = hG.d.CreateAnimation("radius", hG.d.ANIMATIONTYPE_FLOAT, 60, JG.EasingFunction)), YG = hG.d.TransitionTo("radius", VG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), SG && SG(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), YG && this._animatables.push(YG), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(GG, bG) {
        const ZG = this._attachedCamera;
        if (!ZG) return 0;
        let wG = ZG._calculateLowerRadiusFromModelBoundingSphere(GG, bG, this._radiusScale);
        return ZG.lowerRadiusLimit && this._mode === JG.IgnoreBoundsSizeMode && (wG = wG < ZG.lowerRadiusLimit ? ZG.lowerRadiusLimit : wG), ZG.upperRadiusLimit && (wG = wG > ZG.upperRadiusLimit ? ZG.upperRadiusLimit : wG), wG
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const GG = pG.c.Now - this._lastInteractionTime,
          bG = .5 * Math.PI - this._defaultElevation,
          ZG = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZG && GG >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = hG.d.CreateAnimation("beta", hG.d.ANIMATIONTYPE_FLOAT, 60, JG.EasingFunction));
          const GG = hG.d.TransitionTo("beta", bG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          GG && this._animatables.push(GG)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = pG.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    JG.EasingFunction = new class extends KG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = GG
      }
      easeInCore(GG) {
        return this.exponent <= 0 ? GG : (Math.exp(this.exponent * GG) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, JG.EasingMode = KG.EASINGMODE_EASEINOUT, JG.IgnoreBoundsSizeMode = 0, JG.FitFrustumSidesMode = 1;
    var rG = ZG(40592),
      zG = ZG(40585),
      EG = ZG(40623),
      oG = ZG(40477);
    let XG = (() => {
        var GG;
        let bG, ZG = [],
          LG = [];
        return GG = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, wG.n)(this, ZG, [0, 1, 2]), this._pointerInput = (0, wG.n)(this, LG)
          }
          attachControl(GG) {
            GG = oG.f.BackCompatCameraNoPreventDefault(arguments);
            const bG = this.camera.CK(),
              ZG = bG.getInputElement();
            let wG = 0,
              SG = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = LG => {
              const yG = LG.event,
                kG = "touch" === yG.pointerType;
              if (LG.type !== VG.b.POINTERMOVE && -1 === this.buttons.indexOf(yG.button)) return;
              const UG = yG.target;
              if (this._altKey = yG.altKey, this._ctrlKey = yG.ctrlKey, this._metaKey = yG.metaKey, this._shiftKey = yG.shiftKey, this._buttonsPressed = yG.buttons, bG.isPointerLock) {
                const GG = yG.movementX,
                  bG = yG.movementY;
                this.onTouch(null, GG, bG), this._pointA = null, this._pointB = null
              } else {
                if (LG.type !== VG.b.POINTERDOWN && LG.type !== VG.b.POINTERDOUBLETAP && kG && this._pointA?.pointerId !== yG.pointerId && this._pointB?.pointerId !== yG.pointerId) return;
                if (LG.type !== VG.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !kG)
                  if (LG.type === VG.b.POINTERDOUBLETAP) this.onDoubleTap(yG.pointerType, yG);
                  else if (LG.type !== VG.b.POINTERUP || this._currentMousePointerIdDown !== yG.pointerId && !kG) {
                  if (LG.type === VG.b.POINTERMOVE)
                    if (GG || yG.preventDefault(), this._pointA && null === this._pointB) {
                      const GG = yG.clientX - this._pointA.x,
                        bG = yG.clientY - this._pointA.y;
                      this._pointA.x = yG.clientX, this._pointA.y = yG.clientY, this.onTouch(this._pointA, GG, bG)
                    } else if (this._pointA && this._pointB) {
                    const GG = this._pointA.pointerId === yG.pointerId ? this._pointA : this._pointB;
                    GG.x = yG.clientX, GG.y = yG.clientY;
                    const bG = this._pointA.x - this._pointB.x,
                      ZG = this._pointA.y - this._pointB.y,
                      kG = bG * bG + ZG * ZG,
                      UG = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: yG.pointerId,
                        type: LG.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, wG, kG, SG, UG), SG = UG, wG = kG
                  }
                } else {
                  try {
                    UG?.releasePointerCapture(yG.pointerId)
                  } catch (YG) {}
                  kG || (this._pointB = null), bG._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == yG.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == yG.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== wG || SG) && (this.onMultiTouch(this._pointA, this._pointB, wG, 0, SG, null), wG = 0, SG = null), this._currentMousePointerIdDown = -1, this.onButtonUp(yG), GG || yG.preventDefault()
                } else {
                  try {
                    UG?.setPointerCapture(yG.pointerId)
                  } catch (YG) {}
                  if (null === this._pointA) this._pointA = {
                    x: yG.clientX,
                    y: yG.clientY,
                    pointerId: yG.pointerId,
                    type: yG.pointerType,
                    button: yG.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: yG.clientX,
                      y: yG.clientY,
                      pointerId: yG.pointerId,
                      type: yG.pointerType,
                      button: yG.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || kG || (this._currentMousePointerIdDown = yG.pointerId), this.onButtonDown(yG), GG || (yG.preventDefault(), ZG && ZG.focus())
                }
              }
            }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, VG.b.POINTERDOWN | VG.b.POINTERUP | VG.b.POINTERMOVE | VG.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, wG = 0, SG = null, this.onLostFocus()
            }, this._contextMenuBind = GG => this.onContextMenu(GG), ZG && ZG.addEventListener("contextmenu", this._contextMenuBind, !1);
            const LG = this.camera.Dv().CK().getHostWindow();
            LG && oG.f.RegisterTopRootEvents(LG, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const GG = this.camera.Dv().CK().getHostWindow();
              GG && oG.f.UnregisterTopRootEvents(GG, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const GG = this.camera.Dv().CK().getInputElement();
                GG && GG.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(GG, bG) {}
          onTouch(GG, bG, ZG) {}
          onMultiTouch(GG, bG, ZG, wG, SG, LG) {}
          onContextMenu(GG) {
            GG.preventDefault()
          }
          onButtonDown(GG) {}
          onButtonUp(GG) {}
          onLostFocus() {}
        }, (() => {
          const yG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: GG => "buttons" in GG,
              get: GG => GG.buttons,
              set: (GG, bG) => {
                GG.buttons = bG
              }
            },
            metadata: yG
          }, ZG, LG), yG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yG
          })
        })(), GG
      })(),
      uG = (() => {
        var GG;
        let bG, ZG, LG, yG = XG,
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        return GG = class extends yG {
          constructor() {
            super(...arguments), this.pinchZoom = (0, wG.n)(this, kG, !0), this.multiTouchPanning = ((0, wG.n)(this, UG), (0, wG.n)(this, YG, !0)), this.multiTouchPanAndZoom = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, !0)), this._isPinching = ((0, wG.n)(this, fG), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(GG, bG) {}
          _computeMultiTouchPanning(GG, bG) {}
          onMultiTouch(GG, bG, ZG, wG, SG, LG) {
            0 === ZG && null === SG || 0 === wG && null === LG || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ZG, wG), this._computeMultiTouchPanning(SG, LG)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ZG, wG), this._isPinching = !0) : this._computeMultiTouchPanning(SG, LG)) : this.multiTouchPanning ? this._computeMultiTouchPanning(SG, LG) : this.pinchZoom && this._computePinchZoom(ZG, wG))
          }
          onButtonUp(GG) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(yG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: GG => "pinchZoom" in GG,
              get: GG => GG.pinchZoom,
              set: (GG, bG) => {
                GG.pinchZoom = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: GG => "multiTouchPanning" in GG,
              get: GG => GG.multiTouchPanning,
              set: (GG, bG) => {
                GG.multiTouchPanning = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, wG.k)(null, null, LG, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: GG => "multiTouchPanAndZoom" in GG,
              get: GG => GG.multiTouchPanAndZoom,
              set: (GG, bG) => {
                GG.multiTouchPanAndZoom = bG
              }
            },
            metadata: QG
          }, pG, fG), QG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          })
        })(), GG
      })(),
      iG = (() => {
        var GG;
        let bG, ZG, LG, yG, kG, UG, YG, VG = uG,
          pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [],
          JG = [],
          rG = [],
          zG = [],
          EG = [],
          oG = [],
          XG = [],
          iG = [],
          CG = [];
        return GG = class extends VG {
          constructor() {
            super(...arguments), this.buttons = (0, wG.n)(this, pG, [0, 1, 2]), this.angularSensibilityX = ((0, wG.n)(this, fG), (0, wG.n)(this, QG, 1e3)), this.angularSensibilityY = ((0, wG.n)(this, KG), (0, wG.n)(this, hG, 1e3)), this.pinchPrecision = ((0, wG.n)(this, dG), (0, wG.n)(this, JG, 12)), this.pinchDeltaPercentage = ((0, wG.n)(this, rG), (0, wG.n)(this, zG, 0)), this.useNaturalPinchZoom = ((0, wG.n)(this, EG), (0, wG.n)(this, oG, !1)), this.panningSensibility = ((0, wG.n)(this, XG), (0, wG.n)(this, iG, 1e3)), this.pinchInwards = ((0, wG.n)(this, CG), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(GG, bG) {
            if (GG && bG) {
              const ZG = bG.x - GG.x,
                wG = bG.y - GG.y,
                SG = this.camera.movement.input.getEntry("pointer", "pan"),
                LG = SG?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== LG && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ZG * LG, this.camera.movement.panAccumulatedPixels.y += wG * LG)
            }
          }
          _computePinchZoom(bG, ZG) {
            const wG = this.camera.radius || GG.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = wG * Math.sqrt(bG) / Math.sqrt(ZG);
            else if (this.pinchDeltaPercentage) {
              const GG = .001 * (ZG - bG) * wG * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += GG
            } else {
              const GG = (ZG - bG) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += GG
            }
          }
          onTouch(GG, bG, ZG) {
            const wG = this._activeEntry ?? (this.camera.CK().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (wG)
              if ("pan" === wG.interaction) {
                const GG = wG.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== GG && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -bG * GG, this.camera.movement.panAccumulatedPixels.y += ZG * GG)
              } else if ("rotate" === wG.interaction) {
              const GG = wG.nD ?? wG.sensitivity ?? 1 / this.angularSensibilityX,
                SG = wG.eD ?? wG.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -bG * GG, this.camera.movement.rotationAccumulatedPixels.y += -ZG * SG
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(GG, bG, ZG, wG, SG, LG) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(wG) - Math.sqrt(ZG)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(GG, bG, ZG, wG, SG, LG)
          }
          onButtonDown(GG) {
            this._pointerConditions.button = GG.button, this._pointerModifiers.ctrl = GG.ctrlKey, this._pointerModifiers.alt = GG.altKey, this._pointerModifiers.shift = GG.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(GG)
          }
          onButtonUp(GG) {
            this._activeEntry = null, super.onButtonUp(GG)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const uG = "function" === typeof Symbol && Symbol.metadata ? Object.create(VG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: GG => "buttons" in GG,
              get: GG => GG.buttons,
              set: (GG, bG) => {
                GG.buttons = bG
              }
            },
            metadata: uG
          }, pG, fG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: GG => "angularSensibilityX" in GG,
              get: GG => GG.angularSensibilityX,
              set: (GG, bG) => {
                GG.angularSensibilityX = bG
              }
            },
            metadata: uG
          }, QG, KG), (0, wG.k)(null, null, LG, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: GG => "angularSensibilityY" in GG,
              get: GG => GG.angularSensibilityY,
              set: (GG, bG) => {
                GG.angularSensibilityY = bG
              }
            },
            metadata: uG
          }, hG, dG), (0, wG.k)(null, null, yG, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: GG => "pinchPrecision" in GG,
              get: GG => GG.pinchPrecision,
              set: (GG, bG) => {
                GG.pinchPrecision = bG
              }
            },
            metadata: uG
          }, JG, rG), (0, wG.k)(null, null, kG, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: GG => "pinchDeltaPercentage" in GG,
              get: GG => GG.pinchDeltaPercentage,
              set: (GG, bG) => {
                GG.pinchDeltaPercentage = bG
              }
            },
            metadata: uG
          }, zG, EG), (0, wG.k)(null, null, UG, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: GG => "useNaturalPinchZoom" in GG,
              get: GG => GG.useNaturalPinchZoom,
              set: (GG, bG) => {
                GG.useNaturalPinchZoom = bG
              }
            },
            metadata: uG
          }, oG, XG), (0, wG.k)(null, null, YG, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: GG => "panningSensibility" in GG,
              get: GG => GG.panningSensibility,
              set: (GG, bG) => {
                GG.panningSensibility = bG
              }
            },
            metadata: uG
          }, iG, CG), uG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uG
          })
        })(), GG.MinimumRadiusForPinch = .001, GG
      })();
    EG.d.ArcRotateCameraPointersInput = iG;
    var CG = ZG(40554);
    let WG = (() => {
      var GG;
      let bG, ZG, LG, kG, UG, YG, VG, pG, fG, QG, KG, hG = [],
        dG = [],
        JG = [],
        rG = [],
        zG = [],
        EG = [],
        XG = [],
        uG = [],
        iG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [];
      return GG = class {
        constructor() {
          this.camera = (0, wG.n)(this, hG), this.keysUp = (0, wG.n)(this, dG, [38]), this.keysDown = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, [40])), this.keysLeft = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, [37])), this.keysRight = ((0, wG.n)(this, XG), (0, wG.n)(this, uG, [39])), this.keysReset = ((0, wG.n)(this, iG), (0, wG.n)(this, WG, [220])), this.keysZoomIn = ((0, wG.n)(this, mG), (0, wG.n)(this, IG, [187, 107])), this.keysZoomOut = ((0, wG.n)(this, FG), (0, wG.n)(this, vG, [189, 109])), this.panningSensibility = ((0, wG.n)(this, aG), (0, wG.n)(this, cG, 50)), this.zoomingSensibility = ((0, wG.n)(this, lG), (0, wG.n)(this, jG, 25)), this.angularSpeed = ((0, wG.n)(this, PG), (0, wG.n)(this, MG, .01)), this._useAltToZoom = ((0, wG.n)(this, AG), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new yG.m, this._panDirection = new yG.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(GG) {
          this._useAltToZoom = GG, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const GG = this.camera.movement.input,
            bG = GG.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && bG ? GG.inputMap.splice(GG.inputMap.indexOf(bG), 1) : this._useAltToZoom && !bG && GG.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(GG) {
          GG = oG.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Dv(), this._engine = this._scene.CK(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((bG => {
            const ZG = bG.event;
            if (!ZG.metaKey)
              if (bG.type === CG.e.KEYDOWN) {
                if (this._ctrlPressed = ZG.ctrlKey, this._altPressed = ZG.altKey, -1 !== this.keysUp.indexOf(ZG.keyCode) || -1 !== this.keysDown.indexOf(ZG.keyCode) || -1 !== this.keysLeft.indexOf(ZG.keyCode) || -1 !== this.keysRight.indexOf(ZG.keyCode) || -1 !== this.keysReset.indexOf(ZG.keyCode) || -1 !== this.keysZoomIn.indexOf(ZG.keyCode) || -1 !== this.keysZoomOut.indexOf(ZG.keyCode)) {
                  -1 === this._keys.indexOf(ZG.keyCode) && this._keys.push(ZG.keyCode), ZG.preventDefault && (GG || ZG.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ZG.keyCode) || -1 !== this.keysDown.indexOf(ZG.keyCode) || -1 !== this.keysLeft.indexOf(ZG.keyCode) || -1 !== this.keysRight.indexOf(ZG.keyCode) || -1 !== this.keysReset.indexOf(ZG.keyCode) || -1 !== this.keysZoomIn.indexOf(ZG.keyCode) || -1 !== this.keysZoomOut.indexOf(ZG.keyCode)) {
              const bG = this._keys.indexOf(ZG.keyCode);
              bG >= 0 && this._keys.splice(bG, 1), ZG.preventDefault && (GG || ZG.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const GG = this.camera,
              bG = GG.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ZG = this._rotateDirection.set(0, 0),
              wG = this._panDirection.set(0, 0);
            let SG = 0,
              LG = 0;
            for (let yG = 0; yG < this._keys.length; yG++) {
              const kG = this._keys[yG];
              if (this._keyboardConditions.key = kG, -1 === this.keysReset.indexOf(kG)) {
                const GG = bG.resolveInteraction("keyboard", this._keyboardConditions);
                if (GG)
                  if ("pan" === GG.interaction) LG = Math.max(LG, GG.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(kG) ? wG.x -= 1 : -1 !== this.keysRight.indexOf(kG) ? wG.x += 1 : -1 !== this.keysUp.indexOf(kG) ? wG.y += 1 : -1 !== this.keysDown.indexOf(kG) && (wG.y -= 1);
                  else if ("zoom" === GG.interaction) {
                  const ZG = GG.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(kG) || -1 !== this.keysZoomIn.indexOf(kG) ? bG.handlers.zoom(ZG) : -1 === this.keysDown.indexOf(kG) && -1 === this.keysZoomOut.indexOf(kG) || bG.handlers.zoom(-ZG)
                } else "rotate" === GG.interaction && (SG = Math.max(SG, GG.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(kG) ? ZG.x -= 1 : -1 !== this.keysRight.indexOf(kG) ? ZG.x += 1 : -1 !== this.keysUp.indexOf(kG) ? ZG.y -= 1 : -1 !== this.keysDown.indexOf(kG) && (ZG.y += 1))
              } - 1 !== this.keysReset.indexOf(kG) && GG.useInputToRestoreState && GG.restoreState()
            }
            0 === ZG.x && 0 === ZG.y || (ZG.normalize().scaleInPlace(SG), bG.handlers.rotate(ZG.x, ZG.y)), 0 === wG.x && 0 === wG.y || (wG.normalize().scaleInPlace(LG), bG.handlers.pan(wG.x, wG.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const yG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], (0, wG.k)(GG, null, KG, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAltToZoom" in GG,
            get: GG => GG.useAltToZoom
          },
          metadata: yG
        }, null, hG), (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysUp" in GG,
            get: GG => GG.keysUp,
            set: (GG, bG) => {
              GG.keysUp = bG
            }
          },
          metadata: yG
        }, dG, JG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysDown" in GG,
            get: GG => GG.keysDown,
            set: (GG, bG) => {
              GG.keysDown = bG
            }
          },
          metadata: yG
        }, rG, zG), (0, wG.k)(null, null, LG, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysLeft" in GG,
            get: GG => GG.keysLeft,
            set: (GG, bG) => {
              GG.keysLeft = bG
            }
          },
          metadata: yG
        }, EG, XG), (0, wG.k)(null, null, kG, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysRight" in GG,
            get: GG => GG.keysRight,
            set: (GG, bG) => {
              GG.keysRight = bG
            }
          },
          metadata: yG
        }, uG, iG), (0, wG.k)(null, null, UG, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysReset" in GG,
            get: GG => GG.keysReset,
            set: (GG, bG) => {
              GG.keysReset = bG
            }
          },
          metadata: yG
        }, WG, mG), (0, wG.k)(null, null, YG, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysZoomIn" in GG,
            get: GG => GG.keysZoomIn,
            set: (GG, bG) => {
              GG.keysZoomIn = bG
            }
          },
          metadata: yG
        }, IG, FG), (0, wG.k)(null, null, VG, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: GG => "keysZoomOut" in GG,
            get: GG => GG.keysZoomOut,
            set: (GG, bG) => {
              GG.keysZoomOut = bG
            }
          },
          metadata: yG
        }, vG, aG), (0, wG.k)(null, null, pG, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: GG => "panningSensibility" in GG,
            get: GG => GG.panningSensibility,
            set: (GG, bG) => {
              GG.panningSensibility = bG
            }
          },
          metadata: yG
        }, cG, lG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: GG => "zoomingSensibility" in GG,
            get: GG => GG.zoomingSensibility,
            set: (GG, bG) => {
              GG.zoomingSensibility = bG
            }
          },
          metadata: yG
        }, jG, PG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: GG => "angularSpeed" in GG,
            get: GG => GG.angularSpeed,
            set: (GG, bG) => {
              GG.angularSpeed = bG
            }
          },
          metadata: yG
        }, MG, AG), yG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yG
        })
      })(), GG
    })();
    EG.d.ArcRotateCameraKeyboardMoveInput = WG;
    var mG = ZG(38175),
      IG = ZG(40560);
    let FG = (() => {
      var GG;
      let bG, ZG, LG, UG = [],
        YG = [],
        pG = [],
        QG = [],
        KG = [],
        hG = [];
      return GG = class {
        constructor() {
          this.wheelPrecision = (0, wG.n)(this, UG, 3), this.zoomToMouseLocation = ((0, wG.n)(this, YG), (0, wG.n)(this, pG, !1)), this.wheelDeltaPercentage = ((0, wG.n)(this, QG), (0, wG.n)(this, KG, 0)), this.customComputeDeltaFromMouseWheel = ((0, wG.n)(this, hG), null), this._viewOffset = new yG.p(0, 0, 0), this._globalOffset = new yG.p(0, 0, 0), this._inertialPanning = yG.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(GG, bG) {
          let ZG;
          const wG = .01 * GG * this.wheelDeltaPercentage * bG;
          return ZG = GG > 0 ? wG / (1 + this.wheelDeltaPercentage) : wG * (1 + this.wheelDeltaPercentage), ZG
        }
        attachControl(GG) {
          GG = oG.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = bG => {
            if (bG.type !== VG.b.POINTERWHEEL) return;
            const ZG = bG.event;
            let wG;
            const SG = ZG.deltaMode === IG.d.DOM_DELTA_LINE ? 40 : 1,
              LG = -ZG.deltaY * SG;
            if (this.customComputeDeltaFromMouseWheel) wG = this.customComputeDeltaFromMouseWheel(LG, this, ZG);
            else if (this.wheelDeltaPercentage) {
              if (wG = this._computeDeltaFromMouseWheelLegacyEvent(LG, this.camera.radius), wG > 0) {
                const GG = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let bG = this.camera.radius,
                  ZG = GG + wG;
                for (let wG = 0; wG < 20 && !(bG <= ZG) && !(Math.abs(ZG * this.camera.inertia) < .001); wG++) bG -= ZG, ZG *= this.camera.inertia;
                bG = (0, kG.Clamp)(bG, 0, Number.MAX_VALUE), wG = this._computeDeltaFromMouseWheelLegacyEvent(LG, bG)
              }
            } else {
              const GG = this.camera.movement.input.getEntry("wheel", "zoom");
              wG = LG * (GG?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            wG && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(wG)) : this.camera.movement.zoomAccumulatedPixels += wG), ZG.preventDefault && (GG || ZG.preventDefault())
          }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._wheel, VG.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.N7(0)
        }
        detachControl() {
          this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const GG = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(GG.inertialAlphaOffset) + Math.abs(GG.inertialBetaOffset) + Math.abs(GG.inertialRadiusOffset)) {
            this._updateHitPlane(), GG.target.addInPlace(this._inertialPanning), GG.radius -= this._zoomToMouseRadiusOffset;
            const bG = GG.movement.getFrameIndependentDecay(GG.inertia);
            this._inertialPanning.scaleInPlace(bG), this._zoomToMouseRadiusOffset *= bG, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < fG.d && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const GG = this.camera,
            bG = GG.target.subtract(GG.position);
          this._hitPlane = mG.b.FromPositionAndNormal(GG.target, bG)
        }
        _getPosition() {
          const GG = this.camera,
            bG = GG.Dv(),
            ZG = bG.createPickingRay(bG.pointerX, bG.pointerY, yG.e.Identity(), GG, !1);
          0 === GG.targetScreenOffset.x && 0 === GG.targetScreenOffset.y || (this._viewOffset.set(GG.targetScreenOffset.x, GG.targetScreenOffset.y, 0), GG.getViewMatrix().invertToRef(GG._cameraTransformMatrix), this._globalOffset = yG.p.TransformNormal(this._viewOffset, GG._cameraTransformMatrix), ZG.origin.addInPlace(this._globalOffset));
          let wG = 0;
          return this._hitPlane && (wG = ZG.intersectsPlane(this._hitPlane) ?? 0), ZG.origin.addInPlace(ZG.direction.scaleInPlace(wG))
        }
        _zoomToMouse(GG) {
          const bG = this.camera,
            ZG = 1 - bG.inertia,
            wG = bG.movement.getFrameIndependentInputScale(bG.inertia);
          if (bG.lowerRadiusLimit) {
            const SG = bG.lowerRadiusLimit ?? 0;
            bG.radius - (this._zoomToMouseRadiusOffset + GG * wG) / ZG < SG && (GG = ((bG.radius - SG) * ZG - this._zoomToMouseRadiusOffset) / wG)
          }
          if (bG.upperRadiusLimit) {
            const SG = bG.upperRadiusLimit ?? 0;
            bG.radius - (this._zoomToMouseRadiusOffset + GG * wG) / ZG > SG && (GG = ((bG.radius - SG) * ZG - this._zoomToMouseRadiusOffset) / wG)
          }
          const SG = GG / ZG / bG.radius,
            LG = this._getPosition(),
            kG = yG.j.mK[6];
          LG.subtractToRef(bG.target, kG), kG.scaleInPlace(SG), kG.scaleInPlace(ZG), kG.scaleInPlace(wG), this._inertialPanning.addInPlace(kG), this._zoomToMouseRadiusOffset += GG * wG
        }
        _zeroIfClose(GG) {
          Math.abs(GG.x) < fG.d && (GG.x = 0), Math.abs(GG.y) < fG.d && (GG.y = 0), Math.abs(GG.z) < fG.d && (GG.z = 0)
        }
      }, (() => {
        const yG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelPrecision" in GG,
            get: GG => GG.wheelPrecision,
            set: (GG, bG) => {
              GG.wheelPrecision = bG
            }
          },
          metadata: yG
        }, UG, YG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: GG => "zoomToMouseLocation" in GG,
            get: GG => GG.zoomToMouseLocation,
            set: (GG, bG) => {
              GG.zoomToMouseLocation = bG
            }
          },
          metadata: yG
        }, pG, QG), (0, wG.k)(null, null, LG, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: GG => "wheelDeltaPercentage" in GG,
            get: GG => GG.wheelDeltaPercentage,
            set: (GG, bG) => {
              GG.wheelDeltaPercentage = bG
            }
          },
          metadata: yG
        }, KG, hG), yG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yG
        })
      })(), GG
    })();
    EG.d.ArcRotateCameraMouseWheelInput = FG;
    var vG, aG, cG = ZG(40258);
    class lG extends EG.f {
      constructor(GG) {
        super(GG)
      }
      addMouseWheel() {
        return this.add(new FG), this
      }
      addPointers() {
        return this.add(new iG), this
      }
      addKeyboard() {
        return this.add(new WG), this
      }
    }(vG = lG.prototype).addVRDeviceOrientation ?? (vG.addVRDeviceOrientation = (0, cG.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (aG = lG.prototype).addGamepad ?? (aG.addGamepad = (0, cG.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var jG = ZG(37484),
      PG = ZG(40610),
      MG = ZG(40617);
    class AG extends PG.b {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG), this.input = new MG.e({
          pan: (GG, bG) => {
            this.panAccumulatedPixels.x += GG, this.panAccumulatedPixels.y += bG
          },
          rotate: (GG, bG) => {
            this.rotationAccumulatedPixels.x += GG, this.rotationAccumulatedPixels.y += bG
          },
          zoom: GG => {
            this.zoomAccumulatedPixels += GG
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

    function sG(GG, bG) {
      return isNaN(GG) ? bG : GG
    }
    let qG = (() => {
        var GG;
        let bG, ZG, UG, VG, pG, KG, hG, EG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, jG, PG, MG, qG, nG, gG, eG, RG, TG, HG = zG.e,
          tG = [],
          DG = [],
          NG = [],
          OG = [],
          xG = [],
          BG = [],
          Gb = [],
          bb = [],
          Zb = [],
          wb = [],
          Sb = [],
          Lb = [],
          yb = [],
          kb = [],
          Ub = [],
          Yb = [],
          Vb = [],
          pb = [],
          fb = [],
          Qb = [],
          Kb = [],
          hb = [],
          db = [],
          Jb = [],
          rb = [],
          zb = [],
          Eb = [],
          ob = [],
          Xb = [],
          ub = [],
          ib = [],
          Cb = [],
          Wb = [],
          mb = [],
          Ib = [],
          Fb = [],
          vb = [],
          ab = [],
          cb = [],
          lb = [],
          jb = [],
          Pb = [],
          Mb = [],
          Ab = [],
          sb = [],
          qb = [],
          nb = [];
        return GG = class extends HG {
          get target() {
            return this.U1
          }
          set target(GG) {
            this.setTarget(GG)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(GG) {
            GG && this.setTarget(GG)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(GG) {
            this.setPosition(GG)
          }
          set upVector(GG) {
            this._upToYMatrix || (this._yToUpMatrix = new yG.e, this._upToYMatrix = new yG.e, this._upVector = yG.p.Zero()), GG.normalize(), this._upVector.oW(GG), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            yG.e.RotationAlignToRef(yG.p.UpReadOnly, this._upVector, this._yToUpMatrix), yG.e.RotationAlignToRef(this._upVector, yG.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const GG = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(GG) < this._rotationEpsilon ? 0 : GG
          }
          set inertialAlphaOffset(GG) {
            this._inertialAlphaOffset = GG, 0 === GG && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const GG = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(GG) < this._rotationEpsilon ? 0 : GG
          }
          set inertialBetaOffset(GG) {
            this._inertialBetaOffset = GG, 0 === GG && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const GG = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(GG) < this._rotationEpsilon ? 0 : GG
          }
          set inertialRadiusOffset(GG) {
            this._inertialRadiusOffset = GG, 0 === GG && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(GG) {
            this._panningInertia = GG, this.movement && (this.movement.panInertia = GG)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(GG) {
            this._inertia = GG, this.movement && (this.movement.rotationInertia = GG, this.movement.zoomInertia = GG)
          }
          get angularSensibilityX() {
            const GG = this.inputs.attached.pointers;
            return GG ? GG.angularSensibilityX : 0
          }
          set angularSensibilityX(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.angularSensibilityX = GG)
          }
          get angularSensibilityY() {
            const GG = this.inputs.attached.pointers;
            return GG ? GG.angularSensibilityY : 0
          }
          set angularSensibilityY(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.angularSensibilityY = GG)
          }
          get pinchPrecision() {
            const GG = this.inputs.attached.pointers;
            return GG ? GG.pinchPrecision : 0
          }
          set pinchPrecision(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.pinchPrecision = GG)
          }
          get pinchDeltaPercentage() {
            const GG = this.inputs.attached.pointers;
            return GG ? GG.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.pinchDeltaPercentage = GG)
          }
          get useNaturalPinchZoom() {
            const GG = this.inputs.attached.pointers;
            return !!GG && GG.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.useNaturalPinchZoom = GG)
          }
          get panningSensibility() {
            const GG = this.inputs.attached.pointers;
            return GG ? GG.panningSensibility : 0
          }
          set panningSensibility(GG) {
            const bG = this.inputs.attached.pointers;
            bG && (bG.panningSensibility = GG)
          }
          get keysUp() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysUp : []
          }
          set keysUp(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysUp = GG)
          }
          get keysDown() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysDown : []
          }
          set keysDown(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysDown = GG)
          }
          get keysLeft() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysLeft : []
          }
          set keysLeft(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysLeft = GG)
          }
          get keysRight() {
            const GG = this.inputs.attached.keyboard;
            return GG ? GG.keysRight : []
          }
          set keysRight(GG) {
            const bG = this.inputs.attached.keyboard;
            bG && (bG.keysRight = GG)
          }
          get wheelPrecision() {
            const GG = this.inputs.attached.mousewheel;
            return GG ? GG.wheelPrecision : 0
          }
          set wheelPrecision(GG) {
            const bG = this.inputs.attached.mousewheel;
            bG && (bG.wheelPrecision = GG)
          }
          get zoomToMouseLocation() {
            const GG = this.inputs.attached.mousewheel;
            return !!GG && GG.zoomToMouseLocation
          }
          set zoomToMouseLocation(GG) {
            const bG = this.inputs.attached.mousewheel;
            bG && (bG.zoomToMouseLocation = GG)
          }
          get wheelDeltaPercentage() {
            const GG = this.inputs.attached.mousewheel;
            return GG ? GG.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(GG) {
            const bG = this.inputs.attached.mousewheel;
            bG && (bG.wheelDeltaPercentage = GG)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(GG) {
            this._useCtrlForPanningInternal = GG;
            const bG = this.movement.input,
              ZG = bG.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !GG && ZG ? bG.inputMap.splice(bG.inputMap.indexOf(ZG), 1) : GG && !ZG && bG.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const wG = bG.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !GG && wG ? bG.inputMap.splice(bG.inputMap.indexOf(wG), 1) : GG && !wG && bG.addEntry({
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
          set _panningMouseButton(GG) {
            this._panningMouseButtonInternal = GG;
            const bG = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            bG && (bG.button = GG)
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
          set useBouncingBehavior(GG) {
            GG !== this.useBouncingBehavior && (GG ? (this._bouncingBehavior = new dG, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(GG) {
            GG !== this.useFramingBehavior && (GG ? (this._framingBehavior = new JG, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(GG) {
            GG !== this.useAutoRotationBehavior && (GG ? (this._autoRotationBehavior = new QG, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(GG, bG, ZG, SG, kG, UG) {
            var YG;
            let VG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(GG, yG.p.Zero(), UG, VG), YG = this, this.alpha = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, void 0)), this.beta = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, void 0)), this.radius = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, void 0)), this.overrideCloneAlphaBetaRadius = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, void 0)), this.U1 = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, void 0)), this._targetHost = ((0, wG.n)(this, Sb), (0, wG.n)(this, Lb, void 0)), this._upToYMatrix = (0, wG.n)(this, yb), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, wG.n)(this, kb, null), this.upperAlphaLimit = ((0, wG.n)(this, Ub), (0, wG.n)(this, Yb, null)), this.lowerBetaLimit = ((0, wG.n)(this, Vb), (0, wG.n)(this, pb, .01)), this.upperBetaLimit = ((0, wG.n)(this, fb), (0, wG.n)(this, Qb, Math.PI - .01)), this.lowerRadiusLimit = ((0, wG.n)(this, Kb), (0, wG.n)(this, hb, null)), this.upperRadiusLimit = ((0, wG.n)(this, db), (0, wG.n)(this, Jb, null)), this.lowerTargetYLimit = ((0, wG.n)(this, rb), (0, wG.n)(this, zb, -1 / 0)), this.inertialPanningX = ((0, wG.n)(this, Eb), (0, wG.n)(this, ob, 0)), this.inertialPanningY = ((0, wG.n)(this, Xb), (0, wG.n)(this, ub, 0)), this.pinchToPanMaxDistance = ((0, wG.n)(this, ib), (0, wG.n)(this, Cb, 20)), this.panningDistanceLimit = ((0, wG.n)(this, Wb), (0, wG.n)(this, mb, null)), this.panningOriginTarget = ((0, wG.n)(this, Ib), (0, wG.n)(this, Fb, yG.p.Zero())), this._panningInertia = ((0, wG.n)(this, vb), .9), this._inertia = .9, this.zoomOnFactor = (0, wG.n)(this, ab, 1), this.targetScreenOffset = ((0, wG.n)(this, cb), (0, wG.n)(this, lb, yG.m.Zero())), this.allowUpsideDown = ((0, wG.n)(this, jb), (0, wG.n)(this, Pb, !0)), this.useInputToRestoreState = ((0, wG.n)(this, Mb), (0, wG.n)(this, Ab, !0)), this.restoreStateInterpolationFactor = ((0, wG.n)(this, sb), (0, wG.n)(this, qb, 0)), this._currentInterpolationFactor = ((0, wG.n)(this, nb), 0), this._viewMatrix = new yG.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new yG.p(1, 1, 0), this._transformedDirection = new yG.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new LG.c, this.checkCollisions = !1, this.collisionRadius = new yG.p(.5, .5, .5), this._previousPosition = yG.p.Zero(), this._collisionVelocity = yG.p.Zero(), this._newPosition = yG.p.Zero(), this._computationVector = yG.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new yG.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new yG.m(NaN, NaN), this._onCollisionPositionChange = function(GG, bG) {
              let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ZG ? (YG.setPosition(bG), YG.Uf && YG.Uf(ZG)) : YG._previousPosition.oW(YG._position);
              const wG = Math.cos(YG.alpha),
                SG = Math.sin(YG.alpha),
                LG = Math.cos(YG.beta);
              let yG = Math.sin(YG.beta);
              0 === yG && (yG = 1e-4);
              const kG = YG._getTargetPosition();
              YG._computationVector.fGG(YG.radius * wG * yG, YG.radius * LG, YG.radius * SG * yG), kG.addToRef(YG._computationVector, YG._newPosition), YG._position.oW(YG._newPosition);
              let UG = YG.upVector;
              YG.allowUpsideDown && YG.beta < 0 && (UG = UG.clone(), UG = UG.By()), YG._computeViewMatrix(YG._position, kG, UG), YG._viewMatrix.addAtIndex(12, YG.targetScreenOffset.x), YG._viewMatrix.addAtIndex(13, YG.targetScreenOffset.y), YG._collisionTriggered = !1
            }, this.U1 = yG.p.Zero(), kG && this.setTarget(kG), this.alpha = bG, this.beta = ZG, this.radius = SG, this.getViewMatrix(), this.inputs = new lG(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new AG(this.Dv(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.U1 = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = yG.m.Zero()
          }
          _updateCache(GG) {
            GG || super._updateCache(), this._cache.U1.oW(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.oW(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const GG = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? GG.addToRef(this._targetBoundingCenter, this.U1) : this.U1.oW(GG)
            }
            const GG = this._getLockedTargetPosition();
            return GG || this.U1
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > fG.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              LG = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != LG ? this._currentInterpolationFactor = LG : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = sG(GG, this._goalAlpha), this._goalBeta = sG(bG, this._goalBeta), this._goalRadius = sG(ZG, this._goalRadius), this._goalTarget.set(sG(wG.x, this._goalTarget.x), sG(wG.y, this._goalTarget.y), sG(wG.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(sG(SG.x, this._goalTargetScreenOffset.x), sG(SG.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, kG.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, kG.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, kG.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, kG.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.U1.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(GG, bG) {
            let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const SG = arguments;
            bG = oG.f.BackCompatCameraNoPreventDefault(SG), this._useCtrlForPanning = ZG, this._panningMouseButton = wG, "boolean" === typeof SG[0] && (SG.length > 1 && (this._useCtrlForPanning = SG[1]), SG.length > 2 && (this._panningMouseButton = SG[2])), this.inputs.attachElement(bG), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(GG, bG, ZG) {
            const wG = this.invertRotation ? -1 : 1;
            let SG = GG * this._calculateHandednessMultiplier();
            this.beta < 0 && (SG *= -1), this.alpha += SG * wG, this.beta += bG * wG, this.radius -= ZG
          }
          _applyPanDelta(GG, bG) {
            const ZG = yG.j.mK[0].fGG(GG, bG, bG);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZG.multiplyInPlace(this.panningAxis), yG.p.TransformNormalToRef(ZG, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const GG = this.upVector,
                bG = yG.p.CrossToRef(this._transformedDirection, GG, this._transformedDirection);
              yG.p.CrossToRef(GG, bG, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.U1);
                yG.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.U1.oW(this._transformedDirection)
              } else {
                if (this.parent) {
                  const GG = yG.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(GG), GG.transposeToRef(GG), yG.p.TransformCoordinatesToRef(this._transformedDirection, GG, this._transformedDirection)
                }
                this.U1.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let GG = !1;
            this.movement.computeCurrentFrameDeltas();
            const bG = this.movement.rotationDeltaCurrentFrame,
              ZG = this.movement.zoomDeltaCurrentFrame,
              wG = this.movement.panDeltaCurrentFrame;
            if (0 === bG.x && 0 === bG.y && 0 === ZG && 0 === wG.x && 0 === wG.y || (GG = !0, 0 === bG.x && 0 === bG.y && 0 === ZG || this._applyRotationAndZoomDelta(bG.x, bG.y, ZG), 0 === wG.x && 0 === wG.y || this._applyPanDelta(wG.x, wG.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), GG = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const bG = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < bG && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < bG && (this.inertialPanningY = 0), GG = !0
            }
            if (GG) this.stopInterpolation();
            else if (this._isInterpolating) {
              let GG = !1;
              const bG = this._scene.CK().getDeltaTime() / 1e3,
                ZG = 1 - Math.pow(2, -bG / this._currentInterpolationFactor),
                wG = sG(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const bG = yG.j.mK[0].set(sG(this._goalTarget.x, this.U1.x), sG(this._goalTarget.y, this.U1.y), sG(this._goalTarget.z, this.U1.z));
                yG.p.LerpToRef(this.target, bG, ZG, this.U1), 10 * yG.p.Distance(this.target, bG) / wG < fG.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.oW(bG), this.setTarget(this.target, !1, !0, !0)) : GG = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const bG = yG.g.RotationAlphaBetaGammaToRef(sG(this._goalAlpha, this.alpha), sG(this._goalBeta, this.beta), 0, yG.j.Quaternion[0]),
                  wG = yG.g.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yG.j.Quaternion[1]),
                  SG = yG.g.SlerpToRef(wG, bG, ZG, yG.j.Quaternion[2]);
                SG.normalize();
                const LG = SG.toAlphaBetaGammaToRef(yG.j.mK[0]);
                if (this.alpha = LG.x, this.beta = LG.y, SG.isApprox(bG, fG.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const GG = bG.toAlphaBetaGammaToRef(yG.j.mK[0]);
                  this.alpha = GG.x, this.beta = GG.y
                } else GG = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (wG - this.radius) * ZG, Math.abs(wG / this.radius - 1) < fG.d ? (this._goalRadius = NaN, this.radius = wG) : GG = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const bG = yG.j.Vector2[0].set(sG(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), sG(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                yG.m.LerpToRef(this.targetScreenOffset, bG, ZG, this.targetScreenOffset), yG.m.Distance(this.targetScreenOffset, bG) < fG.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.oW(bG)) : GG = !0
              }
              this._isInterpolating = GG
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const GG = this.alpha;
            var bG, ZG;
            this.alpha = function(GG) {
              let bG = Math.PI / 2;
              return 0 === GG.x && 0 === GG.z || (bG = Math.acos(GG.x / Math.sqrt(Math.pow(GG.x, 2) + Math.pow(GG.z, 2)))), GG.z < 0 && (bG = 2 * Math.PI - bG), bG
            }(this._computationVector), this.beta = (bG = this._computationVector.y, ZG = this.radius, Math.acos(bG / ZG));
            const wG = Math.round((GG - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * wG * Math.PI, this._checkLimits()
          }
          setPosition(GG) {
            this._position.equals(GG) || (this._position.oW(GG), this.rebuildAnglesAndRadius())
          }
          setTarget(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (wG = this.overrideCloneAlphaBetaRadius ?? wG, GG.computeWorldMatrix) bG && GG.HA ? this._targetBoundingCenter = GG.HA().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, GG.computeWorldMatrix(), this._targetHost = GG, this.U1 = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const bG = GG,
                wG = this._getTargetPosition();
              if (wG && !ZG && wG.equals(bG)) return;
              this._targetHost = null, this.U1 = bG, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            wG || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const GG = Math.cos(this.alpha),
              bG = Math.sin(this.alpha),
              ZG = Math.cos(this.beta);
            let wG = Math.sin(this.beta);
            0 === wG && (wG = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const SG = this._getTargetPosition();
            if (this._computationVector.fGG(this.radius * GG * wG, this.radius * ZG, this.radius * bG * wG), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), SG.addToRef(this._computationVector, this._newPosition), this.Dv().collisionsEnabled && this.checkCollisions) {
              const GG = this.Dv().collisionCoordinator;
              this._collider || (this._collider = GG.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, GG.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.oW(this._newPosition);
              let GG = this.upVector;
              this.allowUpsideDown && wG < 0 && (GG = GG.By()), this._computeViewMatrix(this._position, SG, GG), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.oW(SG), this._viewMatrix
          }
          zoomOn(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            GG = GG || this.Dv().meshes;
            const ZG = YG.c.MinMax(GG);
            let wG = this._calculateLowerRadiusFromModelBoundingSphere(ZG.min, ZG.max);
            if (wG = Math.max(Math.min(wG, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = wG * this.zoomOnFactor, this.mode === rG.d.ORTHOGRAPHIC_CAMERA) {
              const GG = this.Dv().CK().getAspectRatio(this),
                bG = wG * this.zoomOnFactor / 2;
              this.orthoLeft = -bG * GG, this.orthoRight = bG * GG, this.orthoBottom = -bG, this.orthoTop = bG
            }
            this.focusOn({
              min: ZG.min,
              max: ZG.max,
              distance: wG
            }, bG)
          }
          focusOn(GG) {
            let bG, ZG, wG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === GG.min) {
              const wG = GG || this.Dv().meshes;
              bG = YG.c.MinMax(wG), ZG = yG.p.Distance(bG.min, bG.max)
            } else {
              bG = GG, ZG = GG.distance
            }
            this.U1 = YG.c.Center(bG), wG || (this.maxZ = 2 * ZG)
          }
          createRigCamera(bG, ZG) {
            let wG = 0;
            switch (this.cameraRigMode) {
              case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case rG.d.RIG_MODE_VR:
                wG = this._cameraRigParams.stereoHalfAngle * (0 === ZG ? 1 : -1);
                break;
              case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                wG = this._cameraRigParams.stereoHalfAngle * (0 === ZG ? -1 : 1)
            }
            const SG = new GG(bG, this.alpha + wG, this.beta, this.radius, this.U1, this.Dv());
            return SG._cameraRigParams = {}, SG.isRigCamera = !0, SG.rigParent = this, SG.upVector = this.upVector, SG.mode = this.mode, SG.orthoLeft = this.orthoLeft, SG.orthoRight = this.orthoRight, SG.orthoBottom = this.orthoBottom, SG.orthoTop = this.orthoTop, SG
          }
          _updateRigCameras() {
            const GG = this._rigCameras[0],
              bG = this._rigCameras[1];
            switch (GG.beta = bG.beta = this.beta, this.cameraRigMode) {
              case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case rG.d.RIG_MODE_VR:
                GG.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, bG.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                GG.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, bG.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const wG = yG.p.Distance(GG, bG),
              SG = this.Dv().CK().getAspectRatio(this),
              LG = Math.tan(this.fov / 2),
              kG = LG * SG,
              UG = .5 * wG * ZG,
              YG = UG * Math.sqrt(1 + 1 / (kG * kG)),
              VG = UG * Math.sqrt(1 + 1 / (LG * LG));
            return Math.max(YG, VG)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(HG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], UG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.M)("target")], KG = [(0, SG.z)("targetHost")], hG = [(0, SG.Q)()], EG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], vG = [(0, SG.Q)()], aG = [(0, SG.Q)()], cG = [(0, SG.Q)()], jG = [(0, SG.Q)()], PG = [(0, SG.M)()], MG = [(0, SG.Q)()], qG = [(0, SG.Q)()], nG = [(0, SG.Q)()], gG = [(0, SG.I)()], eG = [(0, SG.Q)()], RG = [(0, SG.Q)()], TG = [(0, SG.Q)()], (0, wG.k)(GG, null, hG, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "inertialAlphaOffset" in GG,
              get: GG => GG.inertialAlphaOffset
            },
            metadata: LG
          }, null, tG), (0, wG.k)(GG, null, EG, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "inertialBetaOffset" in GG,
              get: GG => GG.inertialBetaOffset
            },
            metadata: LG
          }, null, tG), (0, wG.k)(GG, null, XG, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "inertialRadiusOffset" in GG,
              get: GG => GG.inertialRadiusOffset
            },
            metadata: LG
          }, null, tG), (0, wG.k)(GG, null, MG, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: GG => "panningInertia" in GG,
              get: GG => GG.panningInertia
            },
            metadata: LG
          }, null, tG), (0, wG.k)(GG, null, qG, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: GG => "zoomToMouseLocation" in GG,
              get: GG => GG.zoomToMouseLocation
            },
            metadata: LG
          }, null, tG), (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "alpha" in GG,
              get: GG => GG.alpha,
              set: (GG, bG) => {
                GG.alpha = bG
              }
            },
            metadata: LG
          }, DG, NG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: GG => "beta" in GG,
              get: GG => GG.beta,
              set: (GG, bG) => {
                GG.beta = bG
              }
            },
            metadata: LG
          }, OG, xG), (0, wG.k)(null, null, UG, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: GG => "radius" in GG,
              get: GG => GG.radius,
              set: (GG, bG) => {
                GG.radius = bG
              }
            },
            metadata: LG
          }, BG, Gb), (0, wG.k)(null, null, VG, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: GG => "overrideCloneAlphaBetaRadius" in GG,
              get: GG => GG.overrideCloneAlphaBetaRadius,
              set: (GG, bG) => {
                GG.overrideCloneAlphaBetaRadius = bG
              }
            },
            metadata: LG
          }, bb, Zb), (0, wG.k)(null, null, pG, {
            kind: "field",
            name: "U1",
            static: !1,
            private: !1,
            access: {
              has: GG => "U1" in GG,
              get: GG => GG.U1,
              set: (GG, bG) => {
                GG.U1 = bG
              }
            },
            metadata: LG
          }, wb, Sb), (0, wG.k)(null, null, KG, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: GG => "_targetHost" in GG,
              get: GG => GG._targetHost,
              set: (GG, bG) => {
                GG._targetHost = bG
              }
            },
            metadata: LG
          }, Lb, yb), (0, wG.k)(null, null, uG, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "lowerAlphaLimit" in GG,
              get: GG => GG.lowerAlphaLimit,
              set: (GG, bG) => {
                GG.lowerAlphaLimit = bG
              }
            },
            metadata: LG
          }, kb, Ub), (0, wG.k)(null, null, iG, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "upperAlphaLimit" in GG,
              get: GG => GG.upperAlphaLimit,
              set: (GG, bG) => {
                GG.upperAlphaLimit = bG
              }
            },
            metadata: LG
          }, Yb, Vb), (0, wG.k)(null, null, CG, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "lowerBetaLimit" in GG,
              get: GG => GG.lowerBetaLimit,
              set: (GG, bG) => {
                GG.lowerBetaLimit = bG
              }
            },
            metadata: LG
          }, pb, fb), (0, wG.k)(null, null, WG, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "upperBetaLimit" in GG,
              get: GG => GG.upperBetaLimit,
              set: (GG, bG) => {
                GG.upperBetaLimit = bG
              }
            },
            metadata: LG
          }, Qb, Kb), (0, wG.k)(null, null, mG, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "lowerRadiusLimit" in GG,
              get: GG => GG.lowerRadiusLimit,
              set: (GG, bG) => {
                GG.lowerRadiusLimit = bG
              }
            },
            metadata: LG
          }, hb, db), (0, wG.k)(null, null, IG, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "upperRadiusLimit" in GG,
              get: GG => GG.upperRadiusLimit,
              set: (GG, bG) => {
                GG.upperRadiusLimit = bG
              }
            },
            metadata: LG
          }, Jb, rb), (0, wG.k)(null, null, FG, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "lowerTargetYLimit" in GG,
              get: GG => GG.lowerTargetYLimit,
              set: (GG, bG) => {
                GG.lowerTargetYLimit = bG
              }
            },
            metadata: LG
          }, zb, Eb), (0, wG.k)(null, null, vG, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: GG => "inertialPanningX" in GG,
              get: GG => GG.inertialPanningX,
              set: (GG, bG) => {
                GG.inertialPanningX = bG
              }
            },
            metadata: LG
          }, ob, Xb), (0, wG.k)(null, null, aG, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: GG => "inertialPanningY" in GG,
              get: GG => GG.inertialPanningY,
              set: (GG, bG) => {
                GG.inertialPanningY = bG
              }
            },
            metadata: LG
          }, ub, ib), (0, wG.k)(null, null, cG, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: GG => "pinchToPanMaxDistance" in GG,
              get: GG => GG.pinchToPanMaxDistance,
              set: (GG, bG) => {
                GG.pinchToPanMaxDistance = bG
              }
            },
            metadata: LG
          }, Cb, Wb), (0, wG.k)(null, null, jG, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: GG => "panningDistanceLimit" in GG,
              get: GG => GG.panningDistanceLimit,
              set: (GG, bG) => {
                GG.panningDistanceLimit = bG
              }
            },
            metadata: LG
          }, mb, Ib), (0, wG.k)(null, null, PG, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: GG => "panningOriginTarget" in GG,
              get: GG => GG.panningOriginTarget,
              set: (GG, bG) => {
                GG.panningOriginTarget = bG
              }
            },
            metadata: LG
          }, Fb, vb), (0, wG.k)(null, null, nG, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: GG => "zoomOnFactor" in GG,
              get: GG => GG.zoomOnFactor,
              set: (GG, bG) => {
                GG.zoomOnFactor = bG
              }
            },
            metadata: LG
          }, ab, cb), (0, wG.k)(null, null, gG, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: GG => "targetScreenOffset" in GG,
              get: GG => GG.targetScreenOffset,
              set: (GG, bG) => {
                GG.targetScreenOffset = bG
              }
            },
            metadata: LG
          }, lb, jb), (0, wG.k)(null, null, eG, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: GG => "allowUpsideDown" in GG,
              get: GG => GG.allowUpsideDown,
              set: (GG, bG) => {
                GG.allowUpsideDown = bG
              }
            },
            metadata: LG
          }, Pb, Mb), (0, wG.k)(null, null, RG, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: GG => "useInputToRestoreState" in GG,
              get: GG => GG.useInputToRestoreState,
              set: (GG, bG) => {
                GG.useInputToRestoreState = bG
              }
            },
            metadata: LG
          }, Ab, sb), (0, wG.k)(null, null, TG, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: GG => "restoreStateInterpolationFactor" in GG,
              get: GG => GG.restoreStateInterpolationFactor,
              set: (GG, bG) => {
                GG.restoreStateInterpolationFactor = bG
              }
            },
            metadata: LG
          }, qb, nb), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      nG = !1;
    nG || (nG = !0, UG.e.AddNodeConstructor("ArcRotateCamera", ((GG, bG) => () => new qG(GG, 0, 0, 1, yG.p.Zero(), bG))), (0, jG.i)("BABYLON.ArcRotateCamera", qG))
  },
  40629: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.e
    });
    var wG = ZG(40631);
    (0, wG.f)()
  },
  40631: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => fG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(37621),
      kG = ZG(40635),
      UG = ZG(40599),
      YG = ZG(37484);
    let VG = (() => {
        var GG;
        let bG, ZG, UG = kG.c,
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        return GG = class extends UG {
          constructor(GG, bG, ZG, SG) {
            super(GG, ZG, SG), this.groundColor = (0, wG.n)(this, YG, new yG.c(0, 0, 0)), this.direction = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, void 0)), (0, wG.n)(this, fG), this.direction = bG || LG.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(GG) {
            return this.direction = LG.p.Normalize(GG.subtract(LG.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZG.x, ZG.y, ZG.z, 0, bG), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bG), this
          }
          transferToNodeMaterialEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return GG.setFloat3(bG, ZG.x, ZG.y, ZG.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = LG.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kG.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(GG, bG) {
            GG["HEMILIGHT" + bG] = !0
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(UG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.m)()], ZG = [(0, SG.M)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "groundColor" in GG,
              get: GG => GG.groundColor,
              set: (GG, bG) => {
                GG.groundColor = bG
              }
            },
            metadata: LG
          }, YG, VG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: GG => "direction" in GG,
              get: GG => GG.direction,
              set: (GG, bG) => {
                GG.direction = bG
              }
            },
            metadata: LG
          }, pG, fG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      pG = !1;

    function fG() {
      pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_3", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.HemisphericLight", VG))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
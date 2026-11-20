export const id = 252;
export const ids = [252];
export const modules = {
  40703: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => dT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36932),
      OT = cT(36892),
      yT = cT(36937),
      fT = cT(39846),
      xT = cT(40025),
      IT = cT(39812),
      AT = cT(39521),
      CT = cT(36901);
    class jT {
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
        const kT = this._attachedCamera.NJ();
        this._onPrePointerObservableObserver = kT.onPrePointerObservable.add((TT => {
          TT.type !== IT.c.POINTERDOWN ? TT.type === IT.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const TT = AT.d.Now;
          let kT = 0;
          null != this._lastFrameTime && (kT = TT - this._lastFrameTime), this._lastFrameTime = TT, this._applyUserInteraction();
          const cT = TT - this._lastInteractionTime - this._idleRotationWaitTime,
            lT = Math.max(Math.min(cT / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * lT, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (kT / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.NJ();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(TT) {
        this._lastInteractionTime = TT ?? AT.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < CT.b
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = AT.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    cT(40706);
    class vT {
      constructor() {
        this._easingMode = vT.EASINGMODE_EASEIN
      }
      setEasingMode(TT) {
        const kT = Math.min(Math.max(TT, 0), 2);
        this._easingMode = kT
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(TT) {
        throw new Error("You must implement this method")
      }
      ease(TT) {
        switch (this._easingMode) {
          case vT.EASINGMODE_EASEIN:
            return this.easeInCore(TT);
          case vT.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - TT)
        }
        return TT >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - TT))) + .5 : .5 * this.easeInCore(2 * TT)
      }
    }
    vT.EASINGMODE_EASEIN = 0, vT.EASINGMODE_EASEOUT = 1, vT.EASINGMODE_EASEINOUT = 2;
    var tT = cT(40709);
    class hT {
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
        const kT = this._attachedCamera;
        kT && (TT ? this._onMeshTargetChangedObserver = kT.onMeshTargetChangedObservable.add((TT => {
          if (TT && (TT.computeWorldMatrix(!0), TT.DH)) {
            const kT = TT.DH().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * kT, this.upperRadiusTransitionRange = .05 * kT
          }
        })) : this._onMeshTargetChangedObserver && kT.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (hT.EasingFunction.setEasingMode(hT.EasingMode), this._radiusBounceTransition = tT.b.CreateAnimation("radius", tT.b.ANIMATIONTYPE_FLOAT, 60, hT.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const kT = tT.b.TransitionTo("radius", this._attachedCamera.radius + TT, this._attachedCamera, this._attachedCamera.NJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        kT && this._animatables.push(kT)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    hT.EasingFunction = new class extends vT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = TT
      }
      easeInCore(TT) {
        const kT = Math.max(0, this.amplitude);
        return Math.pow(TT, 3) - TT * kT * Math.sin(3.141592653589793 * TT)
      }
    }(.3), hT.EasingMode = vT.EASINGMODE_EASEOUT;
    class NT {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new KT.b, this._mode = NT.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const kT = this._attachedCamera.NJ();
        NT.EasingFunction.setEasingMode(NT.EasingMode), this._onPrePointerObservableObserver = kT.onPrePointerObservable.add((TT => {
          TT.type !== IT.c.POINTERDOWN ? TT.type === IT.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = TT.onMeshTargetChangedObservable.add((TT => {
          TT && TT.DH && this.zoomOnMesh(TT, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.NJ();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const lT = TT.DH().boundingBox;
        this.zoomOnBoundingInfo(lT.minimumWorld, lT.maximumWorld, kT, cT)
      }
      zoomOnMeshHierarchy(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const lT = TT.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(lT.min, lT.max, kT, cT)
      }
      zoomOnMeshesHierarchy(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const lT = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          MT = new OT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let KT = 0; KT < TT.length; KT++) {
          const kT = TT[KT].getHierarchyBoundingVectors(!0);
          OT.m.CheckExtends(kT.min, lT, MT), OT.m.CheckExtends(kT.max, lT, MT)
        }
        this.zoomOnBoundingInfo(lT, MT, kT, cT)
      }
      zoomOnBoundingInfo(TT, kT) {
        let cT, lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const KT = TT.y,
          yT = KT + (kT.y - KT) * this._positionScale,
          fT = kT.subtract(TT).scale(.5);
        if (!isFinite(yT)) return !1;
        if (lT) cT = new OT.m(0, yT, 0);
        else {
          const kT = TT.add(fT);
          cT = new OT.m(kT.x, yT, kT.z)
        }
        this._vectorTransition || (this._vectorTransition = tT.b.CreateAnimation("target", tT.b.ANIMATIONTYPE_VECTOR3, 60, NT.EasingFunction)), this._betaIsAnimating = !0;
        let xT = tT.b.TransitionTo("target", cT, this._attachedCamera, this._attachedCamera.NJ(), 60, this._vectorTransition, this._framingTime);
        xT && this._animatables.push(xT);
        let IT = 0;
        if (this._mode === NT.FitFrustumSidesMode) {
          const cT = this._calculateLowerRadiusFromModelBoundingSphere(TT, kT);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = fT.length() + this._attachedCamera.minZ), IT = cT
        } else this._mode === NT.IgnoreBoundsSizeMode && (IT = this._calculateLowerRadiusFromModelBoundingSphere(TT, kT), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const cT = kT.subtract(TT).length();
          this._attachedCamera.panningSensibility = 5e3 / cT, this._attachedCamera.wheelPrecision = 100 / IT
        }
        return this._radiusTransition || (this._radiusTransition = tT.b.CreateAnimation("radius", tT.b.ANIMATIONTYPE_FLOAT, 60, NT.EasingFunction)), xT = tT.b.TransitionTo("radius", IT, this._attachedCamera, this._attachedCamera.NJ(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), MT && MT(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), xT && this._animatables.push(xT), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(TT, kT) {
        const cT = this._attachedCamera;
        if (!cT) return 0;
        let lT = cT._calculateLowerRadiusFromModelBoundingSphere(TT, kT, this._radiusScale);
        return cT.lowerRadiusLimit && this._mode === NT.IgnoreBoundsSizeMode && (lT = lT < cT.lowerRadiusLimit ? cT.lowerRadiusLimit : lT), cT.upperRadiusLimit && (lT = lT > cT.upperRadiusLimit ? cT.upperRadiusLimit : lT), lT
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const TT = AT.d.Now - this._lastInteractionTime,
          kT = .5 * Math.PI - this._defaultElevation,
          cT = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cT && TT >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = tT.b.CreateAnimation("beta", tT.b.ANIMATIONTYPE_FLOAT, 60, NT.EasingFunction));
          const TT = tT.b.TransitionTo("beta", kT, this._attachedCamera, this._attachedCamera.NJ(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          TT && this._animatables.push(TT)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = AT.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    NT.EasingFunction = new class extends vT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = TT
      }
      easeInCore(TT) {
        return this.exponent <= 0 ? TT : (Math.exp(this.exponent * TT) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, NT.EasingMode = vT.EASINGMODE_EASEINOUT, NT.IgnoreBoundsSizeMode = 0, NT.FitFrustumSidesMode = 1;
    var QT = cT(39841),
      ST = cT(39839),
      DT = cT(39859),
      aT = cT(39727);
    let FT = (() => {
        var TT;
        let kT, cT = [],
          KT = [];
        return TT = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, lT.h)(this, cT, [0, 1, 2]), this._pointerInput = (0, lT.h)(this, KT)
          }
          attachControl(TT) {
            TT = aT.h.BackCompatCameraNoPreventDefault(arguments);
            const kT = this.camera.Dv(),
              cT = kT.getInputElement();
            let lT = 0,
              MT = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = KT => {
              const OT = KT.event,
                yT = "touch" === OT.pointerType;
              if (KT.type !== IT.c.POINTERMOVE && -1 === this.buttons.indexOf(OT.button)) return;
              const fT = OT.target;
              if (this._altKey = OT.altKey, this._ctrlKey = OT.ctrlKey, this._metaKey = OT.metaKey, this._shiftKey = OT.shiftKey, this._buttonsPressed = OT.buttons, kT.isPointerLock) {
                const TT = OT.movementX,
                  kT = OT.movementY;
                this.onTouch(null, TT, kT), this._pointA = null, this._pointB = null
              } else {
                if (KT.type !== IT.c.POINTERDOWN && KT.type !== IT.c.POINTERDOUBLETAP && yT && this._pointA?.pointerId !== OT.pointerId && this._pointB?.pointerId !== OT.pointerId) return;
                if (KT.type !== IT.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !yT)
                  if (KT.type === IT.c.POINTERDOUBLETAP) this.onDoubleTap(OT.pointerType, OT);
                  else if (KT.type !== IT.c.POINTERUP || this._currentMousePointerIdDown !== OT.pointerId && !yT) {
                  if (KT.type === IT.c.POINTERMOVE)
                    if (TT || OT.preventDefault(), this._pointA && null === this._pointB) {
                      const TT = OT.clientX - this._pointA.x,
                        kT = OT.clientY - this._pointA.y;
                      this._pointA.x = OT.clientX, this._pointA.y = OT.clientY, this.onTouch(this._pointA, TT, kT)
                    } else if (this._pointA && this._pointB) {
                    const TT = this._pointA.pointerId === OT.pointerId ? this._pointA : this._pointB;
                    TT.x = OT.clientX, TT.y = OT.clientY;
                    const kT = this._pointA.x - this._pointB.x,
                      cT = this._pointA.y - this._pointB.y,
                      yT = kT * kT + cT * cT,
                      fT = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: OT.pointerId,
                        type: KT.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, lT, yT, MT, fT), MT = fT, lT = yT
                  }
                } else {
                  try {
                    fT?.releasePointerCapture(OT.pointerId)
                  } catch (xT) {}
                  yT || (this._pointB = null), kT._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == OT.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == OT.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== lT || MT) && (this.onMultiTouch(this._pointA, this._pointB, lT, 0, MT, null), lT = 0, MT = null), this._currentMousePointerIdDown = -1, this.onButtonUp(OT), TT || OT.preventDefault()
                } else {
                  try {
                    fT?.setPointerCapture(OT.pointerId)
                  } catch (xT) {}
                  if (null === this._pointA) this._pointA = {
                    x: OT.clientX,
                    y: OT.clientY,
                    pointerId: OT.pointerId,
                    type: OT.pointerType,
                    button: OT.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: OT.clientX,
                      y: OT.clientY,
                      pointerId: OT.pointerId,
                      type: OT.pointerType,
                      button: OT.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || yT || (this._currentMousePointerIdDown = OT.pointerId), this.onButtonDown(OT), TT || (OT.preventDefault(), cT && cT.focus())
                }
              }
            }, this._observer = this.camera.NJ()._inputManager._addCameraPointerObserver(this._pointerInput, IT.c.POINTERDOWN | IT.c.POINTERUP | IT.c.POINTERMOVE | IT.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, lT = 0, MT = null, this.onLostFocus()
            }, this._contextMenuBind = TT => this.onContextMenu(TT), cT && cT.addEventListener("contextmenu", this._contextMenuBind, !1);
            const KT = this.camera.NJ().Dv().getHostWindow();
            KT && aT.h.RegisterTopRootEvents(KT, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const TT = this.camera.NJ().Dv().getHostWindow();
              TT && aT.h.UnregisterTopRootEvents(TT, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.NJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const TT = this.camera.NJ().Dv().getInputElement();
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
          onDoubleTap(TT, kT) {}
          onTouch(TT, kT, cT) {}
          onMultiTouch(TT, kT, cT, lT, MT, KT) {}
          onContextMenu(TT) {
            TT.preventDefault()
          }
          onButtonDown(TT) {}
          onButtonUp(TT) {}
          onLostFocus() {}
        }, (() => {
          const OT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, kT) => {
                TT.buttons = kT
              }
            },
            metadata: OT
          }, cT, KT), OT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OT
          })
        })(), TT
      })(),
      rT = (() => {
        var TT;
        let kT, cT, KT, OT = FT,
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        return TT = class extends OT {
          constructor() {
            super(...arguments), this.pinchZoom = (0, lT.h)(this, yT, !0), this.multiTouchPanning = ((0, lT.h)(this, fT), (0, lT.h)(this, xT, !0)), this.multiTouchPanAndZoom = ((0, lT.h)(this, IT), (0, lT.h)(this, AT, !0)), this._isPinching = ((0, lT.h)(this, CT), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(TT, kT) {}
          _computeMultiTouchPanning(TT, kT) {}
          onMultiTouch(TT, kT, cT, lT, MT, KT) {
            0 === cT && null === MT || 0 === lT && null === KT || (this.multiTouchPanAndZoom ? (this._computePinchZoom(cT, lT), this._computeMultiTouchPanning(MT, KT)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(cT, lT), this._isPinching = !0) : this._computeMultiTouchPanning(MT, KT)) : this.multiTouchPanning ? this._computeMultiTouchPanning(MT, KT) : this.pinchZoom && this._computePinchZoom(cT, lT))
          }
          onButtonUp(TT) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(OT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchZoom" in TT,
              get: TT => TT.pinchZoom,
              set: (TT, kT) => {
                TT.pinchZoom = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanning" in TT,
              get: TT => TT.multiTouchPanning,
              set: (TT, kT) => {
                TT.multiTouchPanning = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, lT.e)(null, null, KT, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanAndZoom" in TT,
              get: TT => TT.multiTouchPanAndZoom,
              set: (TT, kT) => {
                TT.multiTouchPanAndZoom = kT
              }
            },
            metadata: jT
          }, AT, CT), jT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          })
        })(), TT
      })(),
      PT = (() => {
        var TT;
        let kT, cT, KT, OT, yT, fT, xT, IT = rT,
          AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [],
          NT = [],
          QT = [],
          ST = [],
          DT = [],
          aT = [],
          FT = [],
          PT = [],
          wT = [];
        return TT = class extends IT {
          constructor() {
            super(...arguments), this.buttons = (0, lT.h)(this, AT, [0, 1, 2]), this.angularSensibilityX = ((0, lT.h)(this, CT), (0, lT.h)(this, jT, 1e3)), this.angularSensibilityY = ((0, lT.h)(this, vT), (0, lT.h)(this, tT, 1e3)), this.pinchPrecision = ((0, lT.h)(this, hT), (0, lT.h)(this, NT, 12)), this.pinchDeltaPercentage = ((0, lT.h)(this, QT), (0, lT.h)(this, ST, 0)), this.useNaturalPinchZoom = ((0, lT.h)(this, DT), (0, lT.h)(this, aT, !1)), this.panningSensibility = ((0, lT.h)(this, FT), (0, lT.h)(this, PT, 1e3)), this.pinchInwards = ((0, lT.h)(this, wT), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(TT, kT) {
            if (TT && kT) {
              const cT = kT.x - TT.x,
                lT = kT.y - TT.y,
                MT = this.camera.movement.input.getEntry("pointer", "pan"),
                KT = MT?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== KT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -cT * KT, this.camera.movement.panAccumulatedPixels.y += lT * KT)
            }
          }
          _computePinchZoom(kT, cT) {
            const lT = this.camera.radius || TT.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = lT * Math.sqrt(kT) / Math.sqrt(cT);
            else if (this.pinchDeltaPercentage) {
              const TT = .001 * (cT - kT) * lT * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            } else {
              const TT = (cT - kT) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            }
          }
          onTouch(TT, kT, cT) {
            const lT = this._activeEntry ?? (this.camera.Dv().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (lT)
              if ("pan" === lT.interaction) {
                const TT = lT.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== TT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -kT * TT, this.camera.movement.panAccumulatedPixels.y += cT * TT)
              } else if ("rotate" === lT.interaction) {
              const TT = lT.EX ?? lT.sensitivity ?? 1 / this.angularSensibilityX,
                MT = lT.BX ?? lT.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -kT * TT, this.camera.movement.rotationAccumulatedPixels.y += -cT * MT
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(TT, kT, cT, lT, MT, KT) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(lT) - Math.sqrt(cT)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(TT, kT, cT, lT, MT, KT)
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
          const rT = "function" === typeof Symbol && Symbol.metadata ? Object.create(IT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], OT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, kT) => {
                TT.buttons = kT
              }
            },
            metadata: rT
          }, AT, CT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityX" in TT,
              get: TT => TT.angularSensibilityX,
              set: (TT, kT) => {
                TT.angularSensibilityX = kT
              }
            },
            metadata: rT
          }, jT, vT), (0, lT.e)(null, null, KT, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityY" in TT,
              get: TT => TT.angularSensibilityY,
              set: (TT, kT) => {
                TT.angularSensibilityY = kT
              }
            },
            metadata: rT
          }, tT, hT), (0, lT.e)(null, null, OT, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchPrecision" in TT,
              get: TT => TT.pinchPrecision,
              set: (TT, kT) => {
                TT.pinchPrecision = kT
              }
            },
            metadata: rT
          }, NT, QT), (0, lT.e)(null, null, yT, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchDeltaPercentage" in TT,
              get: TT => TT.pinchDeltaPercentage,
              set: (TT, kT) => {
                TT.pinchDeltaPercentage = kT
              }
            },
            metadata: rT
          }, ST, DT), (0, lT.e)(null, null, fT, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "useNaturalPinchZoom" in TT,
              get: TT => TT.useNaturalPinchZoom,
              set: (TT, kT) => {
                TT.useNaturalPinchZoom = kT
              }
            },
            metadata: rT
          }, aT, FT), (0, lT.e)(null, null, xT, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningSensibility" in TT,
              get: TT => TT.panningSensibility,
              set: (TT, kT) => {
                TT.panningSensibility = kT
              }
            },
            metadata: rT
          }, PT, wT), rT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rT
          })
        })(), TT.MinimumRadiusForPinch = .001, TT
      })();
    DT.e.ArcRotateCameraPointersInput = PT;
    var wT = cT(39814);
    let mT = (() => {
      var TT;
      let kT, cT, KT, yT, fT, xT, IT, AT, CT, jT, vT, tT = [],
        hT = [],
        NT = [],
        QT = [],
        ST = [],
        DT = [],
        FT = [],
        rT = [],
        PT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [];
      return TT = class {
        constructor() {
          this.camera = (0, lT.h)(this, tT), this.keysUp = (0, lT.h)(this, hT, [38]), this.keysDown = ((0, lT.h)(this, NT), (0, lT.h)(this, QT, [40])), this.keysLeft = ((0, lT.h)(this, ST), (0, lT.h)(this, DT, [37])), this.keysRight = ((0, lT.h)(this, FT), (0, lT.h)(this, rT, [39])), this.keysReset = ((0, lT.h)(this, PT), (0, lT.h)(this, mT, [220])), this.keysZoomIn = ((0, lT.h)(this, bT), (0, lT.h)(this, zT, [187, 107])), this.keysZoomOut = ((0, lT.h)(this, JT), (0, lT.h)(this, oT, [189, 109])), this.panningSensibility = ((0, lT.h)(this, HT), (0, lT.h)(this, eT, 50)), this.zoomingSensibility = ((0, lT.h)(this, GT), (0, lT.h)(this, VT, 25)), this.angularSpeed = ((0, lT.h)(this, ET), (0, lT.h)(this, ZT, .01)), this._useAltToZoom = ((0, lT.h)(this, uT), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new OT.i, this._panDirection = new OT.i
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
            kT = TT.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && kT ? TT.inputMap.splice(TT.inputMap.indexOf(kT), 1) : this._useAltToZoom && !kT && TT.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(TT) {
          TT = aT.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.NJ(), this._engine = this._scene.Dv(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((kT => {
            const cT = kT.event;
            if (!cT.metaKey)
              if (kT.type === wT.b.KEYDOWN) {
                if (this._ctrlPressed = cT.ctrlKey, this._altPressed = cT.altKey, -1 !== this.keysUp.indexOf(cT.keyCode) || -1 !== this.keysDown.indexOf(cT.keyCode) || -1 !== this.keysLeft.indexOf(cT.keyCode) || -1 !== this.keysRight.indexOf(cT.keyCode) || -1 !== this.keysReset.indexOf(cT.keyCode) || -1 !== this.keysZoomIn.indexOf(cT.keyCode) || -1 !== this.keysZoomOut.indexOf(cT.keyCode)) {
                  -1 === this._keys.indexOf(cT.keyCode) && this._keys.push(cT.keyCode), cT.preventDefault && (TT || cT.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(cT.keyCode) || -1 !== this.keysDown.indexOf(cT.keyCode) || -1 !== this.keysLeft.indexOf(cT.keyCode) || -1 !== this.keysRight.indexOf(cT.keyCode) || -1 !== this.keysReset.indexOf(cT.keyCode) || -1 !== this.keysZoomIn.indexOf(cT.keyCode) || -1 !== this.keysZoomOut.indexOf(cT.keyCode)) {
              const kT = this._keys.indexOf(cT.keyCode);
              kT >= 0 && this._keys.splice(kT, 1), cT.preventDefault && (TT || cT.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              kT = TT.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const cT = this._rotateDirection.set(0, 0),
              lT = this._panDirection.set(0, 0);
            let MT = 0,
              KT = 0;
            for (let OT = 0; OT < this._keys.length; OT++) {
              const yT = this._keys[OT];
              if (this._keyboardConditions.key = yT, -1 === this.keysReset.indexOf(yT)) {
                const TT = kT.resolveInteraction("keyboard", this._keyboardConditions);
                if (TT)
                  if ("pan" === TT.interaction) KT = Math.max(KT, TT.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(yT) ? lT.x -= 1 : -1 !== this.keysRight.indexOf(yT) ? lT.x += 1 : -1 !== this.keysUp.indexOf(yT) ? lT.y += 1 : -1 !== this.keysDown.indexOf(yT) && (lT.y -= 1);
                  else if ("zoom" === TT.interaction) {
                  const cT = TT.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(yT) || -1 !== this.keysZoomIn.indexOf(yT) ? kT.handlers.zoom(cT) : -1 === this.keysDown.indexOf(yT) && -1 === this.keysZoomOut.indexOf(yT) || kT.handlers.zoom(-cT)
                } else "rotate" === TT.interaction && (MT = Math.max(MT, TT.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(yT) ? cT.x -= 1 : -1 !== this.keysRight.indexOf(yT) ? cT.x += 1 : -1 !== this.keysUp.indexOf(yT) ? cT.y -= 1 : -1 !== this.keysDown.indexOf(yT) && (cT.y += 1))
              } - 1 !== this.keysReset.indexOf(yT) && TT.useInputToRestoreState && TT.restoreState()
            }
            0 === cT.x && 0 === cT.y || (cT.normalize().scaleInPlace(MT), kT.handlers.rotate(cT.x, cT.y)), 0 === lT.x && 0 === lT.y || (lT.normalize().scaleInPlace(KT), kT.handlers.pan(lT.x, lT.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const OT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], jT = [(0, MT.J)()], vT = [(0, MT.J)()], (0, lT.e)(TT, null, vT, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAltToZoom" in TT,
            get: TT => TT.useAltToZoom
          },
          metadata: OT
        }, null, tT), (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, kT) => {
              TT.keysUp = kT
            }
          },
          metadata: OT
        }, hT, NT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, kT) => {
              TT.keysDown = kT
            }
          },
          metadata: OT
        }, QT, ST), (0, lT.e)(null, null, KT, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, kT) => {
              TT.keysLeft = kT
            }
          },
          metadata: OT
        }, DT, FT), (0, lT.e)(null, null, yT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, kT) => {
              TT.keysRight = kT
            }
          },
          metadata: OT
        }, rT, PT), (0, lT.e)(null, null, fT, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysReset" in TT,
            get: TT => TT.keysReset,
            set: (TT, kT) => {
              TT.keysReset = kT
            }
          },
          metadata: OT
        }, mT, bT), (0, lT.e)(null, null, xT, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomIn" in TT,
            get: TT => TT.keysZoomIn,
            set: (TT, kT) => {
              TT.keysZoomIn = kT
            }
          },
          metadata: OT
        }, zT, JT), (0, lT.e)(null, null, IT, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomOut" in TT,
            get: TT => TT.keysZoomOut,
            set: (TT, kT) => {
              TT.keysZoomOut = kT
            }
          },
          metadata: OT
        }, oT, HT), (0, lT.e)(null, null, AT, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "panningSensibility" in TT,
            get: TT => TT.panningSensibility,
            set: (TT, kT) => {
              TT.panningSensibility = kT
            }
          },
          metadata: OT
        }, eT, GT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomingSensibility" in TT,
            get: TT => TT.zoomingSensibility,
            set: (TT, kT) => {
              TT.zoomingSensibility = kT
            }
          },
          metadata: OT
        }, VT, ET), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSpeed" in TT,
            get: TT => TT.angularSpeed,
            set: (TT, kT) => {
              TT.angularSpeed = kT
            }
          },
          metadata: OT
        }, ZT, uT), OT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OT
        })
      })(), TT
    })();
    DT.e.ArcRotateCameraKeyboardMoveInput = mT;
    var bT = cT(37637),
      zT = cT(39819);
    let JT = (() => {
      var TT;
      let kT, cT, KT, fT = [],
        xT = [],
        AT = [],
        jT = [],
        vT = [],
        tT = [];
      return TT = class {
        constructor() {
          this.wheelPrecision = (0, lT.h)(this, fT, 3), this.zoomToMouseLocation = ((0, lT.h)(this, xT), (0, lT.h)(this, AT, !1)), this.wheelDeltaPercentage = ((0, lT.h)(this, jT), (0, lT.h)(this, vT, 0)), this.customComputeDeltaFromMouseWheel = ((0, lT.h)(this, tT), null), this._viewOffset = new OT.m(0, 0, 0), this._globalOffset = new OT.m(0, 0, 0), this._inertialPanning = OT.m.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(TT, kT) {
          let cT;
          const lT = .01 * TT * this.wheelDeltaPercentage * kT;
          return cT = TT > 0 ? lT / (1 + this.wheelDeltaPercentage) : lT * (1 + this.wheelDeltaPercentage), cT
        }
        attachControl(TT) {
          TT = aT.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = kT => {
            if (kT.type !== IT.c.POINTERWHEEL) return;
            const cT = kT.event;
            let lT;
            const MT = cT.deltaMode === zT.d.DOM_DELTA_LINE ? 40 : 1,
              KT = -cT.deltaY * MT;
            if (this.customComputeDeltaFromMouseWheel) lT = this.customComputeDeltaFromMouseWheel(KT, this, cT);
            else if (this.wheelDeltaPercentage) {
              if (lT = this._computeDeltaFromMouseWheelLegacyEvent(KT, this.camera.radius), lT > 0) {
                const TT = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let kT = this.camera.radius,
                  cT = TT + lT;
                for (let lT = 0; lT < 20 && !(kT <= cT) && !(Math.abs(cT * this.camera.inertia) < .001); lT++) kT -= cT, cT *= this.camera.inertia;
                kT = (0, yT.Clamp)(kT, 0, Number.MAX_VALUE), lT = this._computeDeltaFromMouseWheelLegacyEvent(KT, kT)
              }
            } else {
              const TT = this.camera.movement.input.getEntry("wheel", "zoom");
              lT = KT * (TT?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            lT && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(lT)) : this.camera.movement.zoomAccumulatedPixels += lT), cT.preventDefault && (TT || cT.preventDefault())
          }, this._observer = this.camera.NJ()._inputManager._addCameraPointerObserver(this._wheel, IT.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Xs(0)
        }
        detachControl() {
          this._observer && (this.camera.NJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const TT = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(TT.inertialAlphaOffset) + Math.abs(TT.inertialBetaOffset) + Math.abs(TT.inertialRadiusOffset)) {
            this._updateHitPlane(), TT.target.addInPlace(this._inertialPanning), TT.radius -= this._zoomToMouseRadiusOffset;
            const kT = TT.movement.getFrameIndependentDecay(TT.inertia);
            this._inertialPanning.scaleInPlace(kT), this._zoomToMouseRadiusOffset *= kT, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < CT.b && (this._zoomToMouseRadiusOffset = 0)
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
            kT = TT.target.subtract(TT.position);
          this._hitPlane = bT.e.FromPositionAndNormal(TT.target, kT)
        }
        _getPosition() {
          const TT = this.camera,
            kT = TT.NJ(),
            cT = kT.createPickingRay(kT.pointerX, kT.pointerY, OT.d.Identity(), TT, !1);
          0 === TT.targetScreenOffset.x && 0 === TT.targetScreenOffset.y || (this._viewOffset.set(TT.targetScreenOffset.x, TT.targetScreenOffset.y, 0), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), this._globalOffset = OT.m.TransformNormal(this._viewOffset, TT._cameraTransformMatrix), cT.origin.addInPlace(this._globalOffset));
          let lT = 0;
          return this._hitPlane && (lT = cT.intersectsPlane(this._hitPlane) ?? 0), cT.origin.addInPlace(cT.direction.scaleInPlace(lT))
        }
        _zoomToMouse(TT) {
          const kT = this.camera,
            cT = 1 - kT.inertia,
            lT = kT.movement.getFrameIndependentInputScale(kT.inertia);
          if (kT.lowerRadiusLimit) {
            const MT = kT.lowerRadiusLimit ?? 0;
            kT.radius - (this._zoomToMouseRadiusOffset + TT * lT) / cT < MT && (TT = ((kT.radius - MT) * cT - this._zoomToMouseRadiusOffset) / lT)
          }
          if (kT.upperRadiusLimit) {
            const MT = kT.upperRadiusLimit ?? 0;
            kT.radius - (this._zoomToMouseRadiusOffset + TT * lT) / cT > MT && (TT = ((kT.radius - MT) * cT - this._zoomToMouseRadiusOffset) / lT)
          }
          const MT = TT / cT / kT.radius,
            KT = this._getPosition(),
            yT = OT.h.Fv[6];
          KT.subtractToRef(kT.target, yT), yT.scaleInPlace(MT), yT.scaleInPlace(cT), yT.scaleInPlace(lT), this._inertialPanning.addInPlace(yT), this._zoomToMouseRadiusOffset += TT * lT
        }
        _zeroIfClose(TT) {
          Math.abs(TT.x) < CT.b && (TT.x = 0), Math.abs(TT.y) < CT.b && (TT.y = 0), Math.abs(TT.z) < CT.b && (TT.z = 0)
        }
      }, (() => {
        const OT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecision" in TT,
            get: TT => TT.wheelPrecision,
            set: (TT, kT) => {
              TT.wheelPrecision = kT
            }
          },
          metadata: OT
        }, fT, xT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomToMouseLocation" in TT,
            get: TT => TT.zoomToMouseLocation,
            set: (TT, kT) => {
              TT.zoomToMouseLocation = kT
            }
          },
          metadata: OT
        }, AT, jT), (0, lT.e)(null, null, KT, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelDeltaPercentage" in TT,
            get: TT => TT.wheelDeltaPercentage,
            set: (TT, kT) => {
              TT.wheelDeltaPercentage = kT
            }
          },
          metadata: OT
        }, vT, tT), OT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OT
        })
      })(), TT
    })();
    DT.e.ArcRotateCameraMouseWheelInput = JT;
    var oT, HT, eT = cT(39500);
    class GT extends DT.h {
      constructor(TT) {
        super(TT)
      }
      addMouseWheel() {
        return this.add(new JT), this
      }
      addPointers() {
        return this.add(new PT), this
      }
      addKeyboard() {
        return this.add(new mT), this
      }
    }(oT = GT.prototype).addVRDeviceOrientation ?? (oT.addVRDeviceOrientation = (0, eT.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (HT = GT.prototype).addGamepad ?? (HT.addGamepad = (0, eT.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var VT = cT(36949),
      ET = cT(39851),
      ZT = cT(39854);
    class uT extends ET.b {
      constructor(TT, kT, cT) {
        super(TT, kT, cT), this.input = new ZT.c({
          pan: (TT, kT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += kT
          },
          rotate: (TT, kT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += kT
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

    function XT(TT, kT) {
      return isNaN(TT) ? kT : TT
    }
    let dT = (() => {
        var TT;
        let kT, cT, fT, IT, AT, vT, tT, DT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT, eT, VT, ET, ZT, dT, LT, RT, gT, UT, YT, BT = ST.g,
          WT = [],
          nT = [],
          pT = [],
          iT = [],
          qT = [],
          sT = [],
          Tk = [],
          kk = [],
          ck = [],
          lk = [],
          Mk = [],
          Kk = [],
          Ok = [],
          yk = [],
          fk = [],
          xk = [],
          Ik = [],
          Ak = [],
          Ck = [],
          jk = [],
          vk = [],
          tk = [],
          hk = [],
          Nk = [],
          Qk = [],
          Sk = [],
          Dk = [],
          ak = [],
          Fk = [],
          rk = [],
          Pk = [],
          wk = [],
          mk = [],
          bk = [],
          zk = [],
          Jk = [],
          Hk = [],
          ek = [],
          Gk = [],
          Vk = [],
          Ek = [],
          Zk = [],
          uk = [],
          Xk = [],
          dk = [],
          Lk = [],
          Rk = [];
        return TT = class extends BT {
          get target() {
            return this.rY
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
            this._upToYMatrix || (this._yToUpMatrix = new OT.d, this._upToYMatrix = new OT.d, this._upVector = OT.m.Zero()), TT.normalize(), this._upVector.UkT(TT), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            OT.d.RotationAlignToRef(OT.m.UpReadOnly, this._upVector, this._yToUpMatrix), OT.d.RotationAlignToRef(this._upVector, OT.m.UpReadOnly, this._upToYMatrix)
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
            const kT = this.inputs.attached.pointers;
            kT && (kT.angularSensibilityX = TT)
          }
          get angularSensibilityY() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.angularSensibilityY : 0
          }
          set angularSensibilityY(TT) {
            const kT = this.inputs.attached.pointers;
            kT && (kT.angularSensibilityY = TT)
          }
          get pinchPrecision() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchPrecision : 0
          }
          set pinchPrecision(TT) {
            const kT = this.inputs.attached.pointers;
            kT && (kT.pinchPrecision = TT)
          }
          get pinchDeltaPercentage() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(TT) {
            const kT = this.inputs.attached.pointers;
            kT && (kT.pinchDeltaPercentage = TT)
          }
          get useNaturalPinchZoom() {
            const TT = this.inputs.attached.pointers;
            return !!TT && TT.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(TT) {
            const kT = this.inputs.attached.pointers;
            kT && (kT.useNaturalPinchZoom = TT)
          }
          get panningSensibility() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.panningSensibility : 0
          }
          set panningSensibility(TT) {
            const kT = this.inputs.attached.pointers;
            kT && (kT.panningSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysUp = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysDown = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const kT = this.inputs.attached.keyboard;
            kT && (kT.keysRight = TT)
          }
          get wheelPrecision() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelPrecision : 0
          }
          set wheelPrecision(TT) {
            const kT = this.inputs.attached.mousewheel;
            kT && (kT.wheelPrecision = TT)
          }
          get zoomToMouseLocation() {
            const TT = this.inputs.attached.mousewheel;
            return !!TT && TT.zoomToMouseLocation
          }
          set zoomToMouseLocation(TT) {
            const kT = this.inputs.attached.mousewheel;
            kT && (kT.zoomToMouseLocation = TT)
          }
          get wheelDeltaPercentage() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(TT) {
            const kT = this.inputs.attached.mousewheel;
            kT && (kT.wheelDeltaPercentage = TT)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(TT) {
            this._useCtrlForPanningInternal = TT;
            const kT = this.movement.input,
              cT = kT.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !TT && cT ? kT.inputMap.splice(kT.inputMap.indexOf(cT), 1) : TT && !cT && kT.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const lT = kT.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !TT && lT ? kT.inputMap.splice(kT.inputMap.indexOf(lT), 1) : TT && !lT && kT.addEntry({
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
            const kT = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            kT && (kT.button = TT)
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
            TT !== this.useBouncingBehavior && (TT ? (this._bouncingBehavior = new hT, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(TT) {
            TT !== this.useFramingBehavior && (TT ? (this._framingBehavior = new NT, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(TT) {
            TT !== this.useAutoRotationBehavior && (TT ? (this._autoRotationBehavior = new jT, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(TT, kT, cT, MT, yT, fT) {
            var xT;
            let IT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(TT, OT.m.Zero(), fT, IT), xT = this, this.alpha = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, void 0)), this.beta = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, void 0)), this.radius = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, void 0)), this.overrideCloneAlphaBetaRadius = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, void 0)), this.rY = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, void 0)), this._targetHost = ((0, lT.h)(this, Mk), (0, lT.h)(this, Kk, void 0)), this._upToYMatrix = (0, lT.h)(this, Ok), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, lT.h)(this, yk, null), this.upperAlphaLimit = ((0, lT.h)(this, fk), (0, lT.h)(this, xk, null)), this.lowerBetaLimit = ((0, lT.h)(this, Ik), (0, lT.h)(this, Ak, .01)), this.upperBetaLimit = ((0, lT.h)(this, Ck), (0, lT.h)(this, jk, Math.PI - .01)), this.lowerRadiusLimit = ((0, lT.h)(this, vk), (0, lT.h)(this, tk, null)), this.upperRadiusLimit = ((0, lT.h)(this, hk), (0, lT.h)(this, Nk, null)), this.lowerTargetYLimit = ((0, lT.h)(this, Qk), (0, lT.h)(this, Sk, -1 / 0)), this.inertialPanningX = ((0, lT.h)(this, Dk), (0, lT.h)(this, ak, 0)), this.inertialPanningY = ((0, lT.h)(this, Fk), (0, lT.h)(this, rk, 0)), this.pinchToPanMaxDistance = ((0, lT.h)(this, Pk), (0, lT.h)(this, wk, 20)), this.panningDistanceLimit = ((0, lT.h)(this, mk), (0, lT.h)(this, bk, null)), this.panningOriginTarget = ((0, lT.h)(this, zk), (0, lT.h)(this, Jk, OT.m.Zero())), this._panningInertia = ((0, lT.h)(this, Hk), .9), this._inertia = .9, this.zoomOnFactor = (0, lT.h)(this, ek, 1), this.targetScreenOffset = ((0, lT.h)(this, Gk), (0, lT.h)(this, Vk, OT.i.Zero())), this.allowUpsideDown = ((0, lT.h)(this, Ek), (0, lT.h)(this, Zk, !0)), this.useInputToRestoreState = ((0, lT.h)(this, uk), (0, lT.h)(this, Xk, !0)), this.restoreStateInterpolationFactor = ((0, lT.h)(this, dk), (0, lT.h)(this, Lk, 0)), this._currentInterpolationFactor = ((0, lT.h)(this, Rk), 0), this._viewMatrix = new OT.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new OT.m(1, 1, 0), this._transformedDirection = new OT.m, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new KT.b, this.checkCollisions = !1, this.collisionRadius = new OT.m(.5, .5, .5), this._previousPosition = OT.m.Zero(), this._collisionVelocity = OT.m.Zero(), this._newPosition = OT.m.Zero(), this._computationVector = OT.m.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new OT.m(NaN, NaN, NaN), this._goalTargetScreenOffset = new OT.i(NaN, NaN), this._onCollisionPositionChange = function(TT, kT) {
              let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              cT ? (xT.setPosition(kT), xT.yC && xT.yC(cT)) : xT._previousPosition.UkT(xT._position);
              const lT = Math.cos(xT.alpha),
                MT = Math.sin(xT.alpha),
                KT = Math.cos(xT.beta);
              let OT = Math.sin(xT.beta);
              0 === OT && (OT = 1e-4);
              const yT = xT._getTargetPosition();
              xT._computationVector.I5(xT.radius * lT * OT, xT.radius * KT, xT.radius * MT * OT), yT.addToRef(xT._computationVector, xT._newPosition), xT._position.UkT(xT._newPosition);
              let fT = xT.upVector;
              xT.allowUpsideDown && xT.beta < 0 && (fT = fT.clone(), fT = fT.rc()), xT._computeViewMatrix(xT._position, yT, fT), xT._viewMatrix.addAtIndex(12, xT.targetScreenOffset.x), xT._viewMatrix.addAtIndex(13, xT.targetScreenOffset.y), xT._collisionTriggered = !1
            }, this.rY = OT.m.Zero(), yT && this.setTarget(yT), this.alpha = kT, this.beta = cT, this.radius = MT, this.getViewMatrix(), this.inputs = new GT(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new uT(this.NJ(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.rY = new OT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = OT.i.Zero()
          }
          _updateCache(TT) {
            TT || super._updateCache(), this._cache.rY.UkT(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.UkT(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const TT = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? TT.addToRef(this._targetBoundingCenter, this.rY) : this.rY.UkT(TT)
            }
            const TT = this._getLockedTargetPosition();
            return TT || this.rY
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > CT.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              KT = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != KT ? this._currentInterpolationFactor = KT : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = XT(TT, this._goalAlpha), this._goalBeta = XT(kT, this._goalBeta), this._goalRadius = XT(cT, this._goalRadius), this._goalTarget.set(XT(lT.x, this._goalTarget.x), XT(lT.y, this._goalTarget.y), XT(lT.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(XT(MT.x, this._goalTargetScreenOffset.x), XT(MT.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, yT.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, yT.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, yT.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, yT.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.rY.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(TT, kT) {
            let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const MT = arguments;
            kT = aT.h.BackCompatCameraNoPreventDefault(MT), this._useCtrlForPanning = cT, this._panningMouseButton = lT, "boolean" === typeof MT[0] && (MT.length > 1 && (this._useCtrlForPanning = MT[1]), MT.length > 2 && (this._panningMouseButton = MT[2])), this.inputs.attachElement(kT), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(TT, kT, cT) {
            const lT = this.invertRotation ? -1 : 1;
            let MT = TT * this._calculateHandednessMultiplier();
            this.beta < 0 && (MT *= -1), this.alpha += MT * lT, this.beta += kT * lT, this.radius -= cT
          }
          _applyPanDelta(TT, kT) {
            const cT = OT.h.Fv[0].I5(TT, kT, kT);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), cT.multiplyInPlace(this.panningAxis), OT.m.TransformNormalToRef(cT, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const TT = this.upVector,
                kT = OT.m.CrossToRef(this._transformedDirection, TT, this._transformedDirection);
              OT.m.CrossToRef(TT, kT, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.rY);
                OT.m.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.rY.UkT(this._transformedDirection)
              } else {
                if (this.parent) {
                  const TT = OT.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(TT), TT.transposeToRef(TT), OT.m.TransformCoordinatesToRef(this._transformedDirection, TT, this._transformedDirection)
                }
                this.rY.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let TT = !1;
            this.movement.computeCurrentFrameDeltas();
            const kT = this.movement.rotationDeltaCurrentFrame,
              cT = this.movement.zoomDeltaCurrentFrame,
              lT = this.movement.panDeltaCurrentFrame;
            if (0 === kT.x && 0 === kT.y && 0 === cT && 0 === lT.x && 0 === lT.y || (TT = !0, 0 === kT.x && 0 === kT.y && 0 === cT || this._applyRotationAndZoomDelta(kT.x, kT.y, cT), 0 === lT.x && 0 === lT.y || this._applyPanDelta(lT.x, lT.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), TT = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const kT = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < kT && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < kT && (this.inertialPanningY = 0), TT = !0
            }
            if (TT) this.stopInterpolation();
            else if (this._isInterpolating) {
              let TT = !1;
              const kT = this._scene.Dv().getDeltaTime() / 1e3,
                cT = 1 - Math.pow(2, -kT / this._currentInterpolationFactor),
                lT = XT(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const kT = OT.h.Fv[0].set(XT(this._goalTarget.x, this.rY.x), XT(this._goalTarget.y, this.rY.y), XT(this._goalTarget.z, this.rY.z));
                OT.m.LerpToRef(this.target, kT, cT, this.rY), 10 * OT.m.Distance(this.target, kT) / lT < CT.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.UkT(kT), this.setTarget(this.target, !1, !0, !0)) : TT = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const kT = OT.f.RotationAlphaBetaGammaToRef(XT(this._goalAlpha, this.alpha), XT(this._goalBeta, this.beta), 0, OT.h.Quaternion[0]),
                  lT = OT.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, OT.h.Quaternion[1]),
                  MT = OT.f.SlerpToRef(lT, kT, cT, OT.h.Quaternion[2]);
                MT.normalize();
                const KT = MT.toAlphaBetaGammaToRef(OT.h.Fv[0]);
                if (this.alpha = KT.x, this.beta = KT.y, MT.isApprox(kT, CT.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const TT = kT.toAlphaBetaGammaToRef(OT.h.Fv[0]);
                  this.alpha = TT.x, this.beta = TT.y
                } else TT = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (lT - this.radius) * cT, Math.abs(lT / this.radius - 1) < CT.b ? (this._goalRadius = NaN, this.radius = lT) : TT = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const kT = OT.h.Vector2[0].set(XT(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), XT(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                OT.i.LerpToRef(this.targetScreenOffset, kT, cT, this.targetScreenOffset), OT.i.Distance(this.targetScreenOffset, kT) < CT.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.UkT(kT)) : TT = !0
              }
              this._isInterpolating = TT
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || OT.m.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const TT = this.alpha;
            var kT, cT;
            this.alpha = function(TT) {
              let kT = Math.PI / 2;
              return 0 === TT.x && 0 === TT.z || (kT = Math.acos(TT.x / Math.sqrt(Math.pow(TT.x, 2) + Math.pow(TT.z, 2)))), TT.z < 0 && (kT = 2 * Math.PI - kT), kT
            }(this._computationVector), this.beta = (kT = this._computationVector.y, cT = this.radius, Math.acos(kT / cT));
            const lT = Math.round((TT - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * lT * Math.PI, this._checkLimits()
          }
          setPosition(TT) {
            this._position.equals(TT) || (this._position.UkT(TT), this.rebuildAnglesAndRadius())
          }
          setTarget(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (lT = this.overrideCloneAlphaBetaRadius ?? lT, TT.computeWorldMatrix) kT && TT.DH ? this._targetBoundingCenter = TT.DH().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, TT.computeWorldMatrix(), this._targetHost = TT, this.rY = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const kT = TT,
                lT = this._getTargetPosition();
              if (lT && !cT && lT.equals(kT)) return;
              this._targetHost = null, this.rY = kT, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            lT || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const TT = Math.cos(this.alpha),
              kT = Math.sin(this.alpha),
              cT = Math.cos(this.beta);
            let lT = Math.sin(this.beta);
            0 === lT && (lT = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const MT = this._getTargetPosition();
            if (this._computationVector.I5(this.radius * TT * lT, this.radius * cT, this.radius * kT * lT), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || OT.m.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), MT.addToRef(this._computationVector, this._newPosition), this.NJ().collisionsEnabled && this.checkCollisions) {
              const TT = this.NJ().collisionCoordinator;
              this._collider || (this._collider = TT.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, TT.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.UkT(this._newPosition);
              let TT = this.upVector;
              this.allowUpsideDown && lT < 0 && (TT = TT.rc()), this._computeViewMatrix(this._position, MT, TT), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.UkT(MT), this._viewMatrix
          }
          zoomOn(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            TT = TT || this.NJ().meshes;
            const cT = xT.e.MinMax(TT);
            let lT = this._calculateLowerRadiusFromModelBoundingSphere(cT.min, cT.max);
            if (lT = Math.max(Math.min(lT, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = lT * this.zoomOnFactor, this.mode === QT.c.ORTHOGRAPHIC_CAMERA) {
              const TT = this.NJ().Dv().getAspectRatio(this),
                kT = lT * this.zoomOnFactor / 2;
              this.orthoLeft = -kT * TT, this.orthoRight = kT * TT, this.orthoBottom = -kT, this.orthoTop = kT
            }
            this.focusOn({
              min: cT.min,
              max: cT.max,
              distance: lT
            }, kT)
          }
          focusOn(TT) {
            let kT, cT, lT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === TT.min) {
              const lT = TT || this.NJ().meshes;
              kT = xT.e.MinMax(lT), cT = OT.m.Distance(kT.min, kT.max)
            } else {
              kT = TT, cT = TT.distance
            }
            this.rY = xT.e.Center(kT), lT || (this.maxZ = 2 * cT)
          }
          createRigCamera(kT, cT) {
            let lT = 0;
            switch (this.cameraRigMode) {
              case QT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case QT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case QT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case QT.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case QT.c.RIG_MODE_VR:
                lT = this._cameraRigParams.stereoHalfAngle * (0 === cT ? 1 : -1);
                break;
              case QT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                lT = this._cameraRigParams.stereoHalfAngle * (0 === cT ? -1 : 1)
            }
            const MT = new TT(kT, this.alpha + lT, this.beta, this.radius, this.rY, this.NJ());
            return MT._cameraRigParams = {}, MT.isRigCamera = !0, MT.rigParent = this, MT.upVector = this.upVector, MT.mode = this.mode, MT.orthoLeft = this.orthoLeft, MT.orthoRight = this.orthoRight, MT.orthoBottom = this.orthoBottom, MT.orthoTop = this.orthoTop, MT
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              kT = this._rigCameras[1];
            switch (TT.beta = kT.beta = this.beta, this.cameraRigMode) {
              case QT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case QT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case QT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case QT.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case QT.c.RIG_MODE_VR:
                TT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, kT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case QT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                TT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, kT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(TT, kT) {
            let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const lT = OT.m.Distance(TT, kT),
              MT = this.NJ().Dv().getAspectRatio(this),
              KT = Math.tan(this.fov / 2),
              yT = KT * MT,
              fT = .5 * lT * cT,
              xT = fT * Math.sqrt(1 + 1 / (yT * yT)),
              IT = fT * Math.sqrt(1 + 1 / (KT * KT));
            return Math.max(xT, IT)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], fT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.F)("target")], vT = [(0, MT.t)("targetHost")], tT = [(0, MT.J)()], DT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.J)()], PT = [(0, MT.J)()], wT = [(0, MT.J)()], mT = [(0, MT.J)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], HT = [(0, MT.J)()], eT = [(0, MT.J)()], VT = [(0, MT.J)()], ET = [(0, MT.F)()], ZT = [(0, MT.J)()], dT = [(0, MT.J)()], LT = [(0, MT.J)()], RT = [(0, MT.C)()], gT = [(0, MT.J)()], UT = [(0, MT.J)()], YT = [(0, MT.J)()], (0, lT.e)(TT, null, tT, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialAlphaOffset" in TT,
              get: TT => TT.inertialAlphaOffset
            },
            metadata: KT
          }, null, WT), (0, lT.e)(TT, null, DT, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialBetaOffset" in TT,
              get: TT => TT.inertialBetaOffset
            },
            metadata: KT
          }, null, WT), (0, lT.e)(TT, null, FT, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialRadiusOffset" in TT,
              get: TT => TT.inertialRadiusOffset
            },
            metadata: KT
          }, null, WT), (0, lT.e)(TT, null, ZT, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningInertia" in TT,
              get: TT => TT.panningInertia
            },
            metadata: KT
          }, null, WT), (0, lT.e)(TT, null, dT, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomToMouseLocation" in TT,
              get: TT => TT.zoomToMouseLocation
            },
            metadata: KT
          }, null, WT), (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "alpha" in TT,
              get: TT => TT.alpha,
              set: (TT, kT) => {
                TT.alpha = kT
              }
            },
            metadata: KT
          }, nT, pT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: TT => "beta" in TT,
              get: TT => TT.beta,
              set: (TT, kT) => {
                TT.beta = kT
              }
            },
            metadata: KT
          }, iT, qT), (0, lT.e)(null, null, fT, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: TT => "radius" in TT,
              get: TT => TT.radius,
              set: (TT, kT) => {
                TT.radius = kT
              }
            },
            metadata: KT
          }, sT, Tk), (0, lT.e)(null, null, IT, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "overrideCloneAlphaBetaRadius" in TT,
              get: TT => TT.overrideCloneAlphaBetaRadius,
              set: (TT, kT) => {
                TT.overrideCloneAlphaBetaRadius = kT
              }
            },
            metadata: KT
          }, kk, ck), (0, lT.e)(null, null, AT, {
            kind: "field",
            name: "rY",
            static: !1,
            private: !1,
            access: {
              has: TT => "rY" in TT,
              get: TT => TT.rY,
              set: (TT, kT) => {
                TT.rY = kT
              }
            },
            metadata: KT
          }, lk, Mk), (0, lT.e)(null, null, vT, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: TT => "_targetHost" in TT,
              get: TT => TT._targetHost,
              set: (TT, kT) => {
                TT._targetHost = kT
              }
            },
            metadata: KT
          }, Kk, Ok), (0, lT.e)(null, null, rT, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerAlphaLimit" in TT,
              get: TT => TT.lowerAlphaLimit,
              set: (TT, kT) => {
                TT.lowerAlphaLimit = kT
              }
            },
            metadata: KT
          }, yk, fk), (0, lT.e)(null, null, PT, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperAlphaLimit" in TT,
              get: TT => TT.upperAlphaLimit,
              set: (TT, kT) => {
                TT.upperAlphaLimit = kT
              }
            },
            metadata: KT
          }, xk, Ik), (0, lT.e)(null, null, wT, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerBetaLimit" in TT,
              get: TT => TT.lowerBetaLimit,
              set: (TT, kT) => {
                TT.lowerBetaLimit = kT
              }
            },
            metadata: KT
          }, Ak, Ck), (0, lT.e)(null, null, mT, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperBetaLimit" in TT,
              get: TT => TT.upperBetaLimit,
              set: (TT, kT) => {
                TT.upperBetaLimit = kT
              }
            },
            metadata: KT
          }, jk, vk), (0, lT.e)(null, null, bT, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerRadiusLimit" in TT,
              get: TT => TT.lowerRadiusLimit,
              set: (TT, kT) => {
                TT.lowerRadiusLimit = kT
              }
            },
            metadata: KT
          }, tk, hk), (0, lT.e)(null, null, zT, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperRadiusLimit" in TT,
              get: TT => TT.upperRadiusLimit,
              set: (TT, kT) => {
                TT.upperRadiusLimit = kT
              }
            },
            metadata: KT
          }, Nk, Qk), (0, lT.e)(null, null, JT, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerTargetYLimit" in TT,
              get: TT => TT.lowerTargetYLimit,
              set: (TT, kT) => {
                TT.lowerTargetYLimit = kT
              }
            },
            metadata: KT
          }, Sk, Dk), (0, lT.e)(null, null, oT, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningX" in TT,
              get: TT => TT.inertialPanningX,
              set: (TT, kT) => {
                TT.inertialPanningX = kT
              }
            },
            metadata: KT
          }, ak, Fk), (0, lT.e)(null, null, HT, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningY" in TT,
              get: TT => TT.inertialPanningY,
              set: (TT, kT) => {
                TT.inertialPanningY = kT
              }
            },
            metadata: KT
          }, rk, Pk), (0, lT.e)(null, null, eT, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchToPanMaxDistance" in TT,
              get: TT => TT.pinchToPanMaxDistance,
              set: (TT, kT) => {
                TT.pinchToPanMaxDistance = kT
              }
            },
            metadata: KT
          }, wk, mk), (0, lT.e)(null, null, VT, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningDistanceLimit" in TT,
              get: TT => TT.panningDistanceLimit,
              set: (TT, kT) => {
                TT.panningDistanceLimit = kT
              }
            },
            metadata: KT
          }, bk, zk), (0, lT.e)(null, null, ET, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningOriginTarget" in TT,
              get: TT => TT.panningOriginTarget,
              set: (TT, kT) => {
                TT.panningOriginTarget = kT
              }
            },
            metadata: KT
          }, Jk, Hk), (0, lT.e)(null, null, LT, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomOnFactor" in TT,
              get: TT => TT.zoomOnFactor,
              set: (TT, kT) => {
                TT.zoomOnFactor = kT
              }
            },
            metadata: KT
          }, ek, Gk), (0, lT.e)(null, null, RT, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "targetScreenOffset" in TT,
              get: TT => TT.targetScreenOffset,
              set: (TT, kT) => {
                TT.targetScreenOffset = kT
              }
            },
            metadata: KT
          }, Vk, Ek), (0, lT.e)(null, null, gT, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: TT => "allowUpsideDown" in TT,
              get: TT => TT.allowUpsideDown,
              set: (TT, kT) => {
                TT.allowUpsideDown = kT
              }
            },
            metadata: KT
          }, Zk, uk), (0, lT.e)(null, null, UT, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: TT => "useInputToRestoreState" in TT,
              get: TT => TT.useInputToRestoreState,
              set: (TT, kT) => {
                TT.useInputToRestoreState = kT
              }
            },
            metadata: KT
          }, Xk, dk), (0, lT.e)(null, null, YT, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "restoreStateInterpolationFactor" in TT,
              get: TT => TT.restoreStateInterpolationFactor,
              set: (TT, kT) => {
                TT.restoreStateInterpolationFactor = kT
              }
            },
            metadata: KT
          }, Lk, Rk), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      LT = !1;
    LT || (LT = !0, fT.b.AddNodeConstructor("ArcRotateCamera", ((TT, kT) => () => new dT(TT, 0, 0, 1, OT.m.Zero(), kT))), (0, VT.g)("BABYLON.ArcRotateCamera", dT))
  },
  39868: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT.d
    });
    var lT = cT(39876);
    (0, lT.e)()
  },
  39876: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      e: () => CT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(37093),
      yT = cT(39883),
      fT = cT(39846),
      xT = cT(36949);
    let IT = (() => {
        var TT;
        let kT, cT, fT = yT.d,
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        return TT = class extends fT {
          constructor(TT, kT, cT, MT) {
            super(TT, cT, MT), this.groundColor = (0, lT.h)(this, xT, new OT.c(0, 0, 0)), this.direction = ((0, lT.h)(this, IT), (0, lT.h)(this, AT, void 0)), (0, lT.h)(this, CT), this.direction = kT || KT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = KT.m.Normalize(TT.subtract(KT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cT.x, cT.y, cT.z, 0, kT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), kT), this
          }
          transferToNodeMaterialEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return TT.setFloat3(kT, cT.x, cT.y, cT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KT.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return yT.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, kT) {
            TT["HEMILIGHT" + kT] = !0
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(fT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.m)()], cT = [(0, MT.F)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, kT) => {
                TT.groundColor = kT
              }
            },
            metadata: KT
          }, xT, IT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, kT) => {
                TT.direction = kT
              }
            },
            metadata: KT
          }, AT, CT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      AT = !1;

    function CT() {
      AT || (AT = !0, fT.b.AddNodeConstructor("Light_Type_3", ((TT, kT) => () => new IT(TT, KT.m.Zero(), kT))), (0, xT.g)("BABYLON.HemisphericLight", IT))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
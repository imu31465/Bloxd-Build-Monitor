export const id = 250;
export const ids = [250];
export const modules = {
  40464: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => sU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36624),
      PU = gU(36600),
      TU = gU(36626),
      qU = gU(39610),
      KU = gU(39782),
      cU = gU(39554),
      GU = gU(39280),
      jU = gU(36602);
    class uU {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(UU) {
        this._zoomStopsAnimation = UU
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(UU) {
        this._idleRotationSpeed = UU
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(UU) {
        this._idleRotationWaitTime = UU
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(UU) {
        this._idleRotationSpinupTime = UU
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
      attach(UU) {
        this._attachedCamera = UU;
        const RU = this._attachedCamera.aZ();
        this._onPrePointerObservableObserver = RU.onPrePointerObservable.add((UU => {
          UU.type !== cU.e.POINTERDOWN ? UU.type === cU.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const UU = GU.b.Now;
          let RU = 0;
          null != this._lastFrameTime && (RU = UU - this._lastFrameTime), this._lastFrameTime = UU, this._applyUserInteraction();
          const gU = UU - this._lastInteractionTime - this._idleRotationWaitTime,
            tU = Math.max(Math.min(gU / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * tU, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (RU / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const UU = this._attachedCamera.aZ();
        this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(UU) {
        this._lastInteractionTime = UU ?? GU.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < jU.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let UU = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (UU = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? UU : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = GU.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    gU(40472);
    class CU {
      constructor() {
        this._easingMode = CU.EASINGMODE_EASEIN
      }
      setEasingMode(UU) {
        const RU = Math.min(Math.max(UU, 0), 2);
        this._easingMode = RU
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(UU) {
        throw new Error("You must implement this method")
      }
      ease(UU) {
        switch (this._easingMode) {
          case CU.EASINGMODE_EASEIN:
            return this.easeInCore(UU);
          case CU.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - UU)
        }
        return UU >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - UU))) + .5 : .5 * this.easeInCore(2 * UU)
      }
    }
    CU.EASINGMODE_EASEIN = 0, CU.EASINGMODE_EASEOUT = 1, CU.EASINGMODE_EASEINOUT = 2;
    var hU = gU(40477);
    class QU {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(UU) {
        if (this._autoTransitionRange === UU) return;
        this._autoTransitionRange = UU;
        const RU = this._attachedCamera;
        RU && (UU ? this._onMeshTargetChangedObserver = RU.onMeshTargetChangedObservable.add((UU => {
          if (UU && (UU.computeWorldMatrix(!0), UU.lY)) {
            const RU = UU.lY().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * RU, this.upperRadiusTransitionRange = .05 * RU
          }
        })) : this._onMeshTargetChangedObserver && RU.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(UU) {
        this._attachedCamera = UU, this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(UU) {
        return !!this._attachedCamera && (this._attachedCamera.radius === UU && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(UU) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (QU.EasingFunction.setEasingMode(QU.EasingMode), this._radiusBounceTransition = hU.e.CreateAnimation("radius", hU.e.ANIMATIONTYPE_FLOAT, 60, QU.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const RU = hU.e.TransitionTo("radius", this._attachedCamera.radius + UU, this._attachedCamera, this._attachedCamera.aZ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        RU && this._animatables.push(RU)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    QU.EasingFunction = new class extends CU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = UU
      }
      easeInCore(UU) {
        const RU = Math.max(0, this.amplitude);
        return Math.pow(UU, 3) - UU * RU * Math.sin(3.141592653589793 * UU)
      }
    }(.3), QU.EasingMode = CU.EASINGMODE_EASEOUT;
    class eU {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new EU.b, this._mode = eU.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(UU) {
        this._mode = UU
      }
      get mode() {
        return this._mode
      }
      set radiusScale(UU) {
        this._radiusScale = UU
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(UU) {
        this._positionScale = UU
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(UU) {
        this._defaultElevation = UU
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(UU) {
        this._elevationReturnTime = UU
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(UU) {
        this._elevationReturnWaitTime = UU
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(UU) {
        this._zoomStopsAnimation = UU
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(UU) {
        this._framingTime = UU
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(UU) {
        this._attachedCamera = UU;
        const RU = this._attachedCamera.aZ();
        eU.EasingFunction.setEasingMode(eU.EasingMode), this._onPrePointerObservableObserver = RU.onPrePointerObservable.add((UU => {
          UU.type !== cU.e.POINTERDOWN ? UU.type === cU.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = UU.onMeshTargetChangedObservable.add((UU => {
          UU && UU.lY && this.zoomOnMesh(UU, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const UU = this._attachedCamera.aZ();
        this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        UU.computeWorldMatrix(!0);
        const tU = UU.lY().boundingBox;
        this.zoomOnBoundingInfo(tU.minimumWorld, tU.maximumWorld, RU, gU)
      }
      zoomOnMeshHierarchy(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        UU.computeWorldMatrix(!0);
        const tU = UU.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(tU.min, tU.max, RU, gU)
      }
      zoomOnMeshesHierarchy(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tU = new PU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          pU = new PU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let EU = 0; EU < UU.length; EU++) {
          const RU = UU[EU].getHierarchyBoundingVectors(!0);
          PU.n.CheckExtends(RU.min, tU, pU), PU.n.CheckExtends(RU.max, tU, pU)
        }
        this.zoomOnBoundingInfo(tU, pU, RU, gU)
      }
      zoomOnBoundingInfo(UU, RU) {
        let gU, tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const EU = UU.y,
          TU = EU + (RU.y - EU) * this._positionScale,
          qU = RU.subtract(UU).scale(.5);
        if (!isFinite(TU)) return !1;
        if (tU) gU = new PU.n(0, TU, 0);
        else {
          const RU = UU.add(qU);
          gU = new PU.n(RU.x, TU, RU.z)
        }
        this._vectorTransition || (this._vectorTransition = hU.e.CreateAnimation("target", hU.e.ANIMATIONTYPE_VECTOR3, 60, eU.EasingFunction)), this._betaIsAnimating = !0;
        let KU = hU.e.TransitionTo("target", gU, this._attachedCamera, this._attachedCamera.aZ(), 60, this._vectorTransition, this._framingTime);
        KU && this._animatables.push(KU);
        let cU = 0;
        if (this._mode === eU.FitFrustumSidesMode) {
          const gU = this._calculateLowerRadiusFromModelBoundingSphere(UU, RU);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = qU.length() + this._attachedCamera.minZ), cU = gU
        } else this._mode === eU.IgnoreBoundsSizeMode && (cU = this._calculateLowerRadiusFromModelBoundingSphere(UU, RU), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const gU = RU.subtract(UU).length();
          this._attachedCamera.panningSensibility = 5e3 / gU, this._attachedCamera.wheelPrecision = 100 / cU
        }
        return this._radiusTransition || (this._radiusTransition = hU.e.CreateAnimation("radius", hU.e.ANIMATIONTYPE_FLOAT, 60, eU.EasingFunction)), KU = hU.e.TransitionTo("radius", cU, this._attachedCamera, this._attachedCamera.aZ(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), pU && pU(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), KU && this._animatables.push(KU), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(UU, RU) {
        const gU = this._attachedCamera;
        if (!gU) return 0;
        let tU = gU._calculateLowerRadiusFromModelBoundingSphere(UU, RU, this._radiusScale);
        return gU.lowerRadiusLimit && this._mode === eU.IgnoreBoundsSizeMode && (tU = tU < gU.lowerRadiusLimit ? gU.lowerRadiusLimit : tU), gU.upperRadiusLimit && (tU = tU > gU.upperRadiusLimit ? gU.upperRadiusLimit : tU), tU
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const UU = GU.b.Now - this._lastInteractionTime,
          RU = .5 * Math.PI - this._defaultElevation,
          gU = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > gU && UU >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = hU.e.CreateAnimation("beta", hU.e.ANIMATIONTYPE_FLOAT, 60, eU.EasingFunction));
          const UU = hU.e.TransitionTo("beta", RU, this._attachedCamera, this._attachedCamera.aZ(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          UU && this._animatables.push(UU)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = GU.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    eU.EasingFunction = new class extends CU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = UU
      }
      easeInCore(UU) {
        return this.exponent <= 0 ? UU : (Math.exp(this.exponent * UU) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, eU.EasingMode = CU.EASINGMODE_EASEINOUT, eU.IgnoreBoundsSizeMode = 0, eU.FitFrustumSidesMode = 1;
    var WU = gU(39603),
      fU = gU(39597),
      xU = gU(39629),
      mU = gU(39473);
    let IU = (() => {
        var UU;
        let RU, gU = [],
          EU = [];
        return UU = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, tU.j)(this, gU, [0, 1, 2]), this._pointerInput = (0, tU.j)(this, EU)
          }
          attachControl(UU) {
            UU = mU.g.BackCompatCameraNoPreventDefault(arguments);
            const RU = this.camera.WC(),
              gU = RU.getInputElement();
            let tU = 0,
              pU = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = EU => {
              const PU = EU.event,
                TU = "touch" === PU.pointerType;
              if (EU.type !== cU.e.POINTERMOVE && -1 === this.buttons.indexOf(PU.button)) return;
              const qU = PU.target;
              if (this._altKey = PU.altKey, this._ctrlKey = PU.ctrlKey, this._metaKey = PU.metaKey, this._shiftKey = PU.shiftKey, this._buttonsPressed = PU.buttons, RU.isPointerLock) {
                const UU = PU.movementX,
                  RU = PU.movementY;
                this.onTouch(null, UU, RU), this._pointA = null, this._pointB = null
              } else {
                if (EU.type !== cU.e.POINTERDOWN && EU.type !== cU.e.POINTERDOUBLETAP && TU && this._pointA?.pointerId !== PU.pointerId && this._pointB?.pointerId !== PU.pointerId) return;
                if (EU.type !== cU.e.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !TU)
                  if (EU.type === cU.e.POINTERDOUBLETAP) this.onDoubleTap(PU.pointerType, PU);
                  else if (EU.type !== cU.e.POINTERUP || this._currentMousePointerIdDown !== PU.pointerId && !TU) {
                  if (EU.type === cU.e.POINTERMOVE)
                    if (UU || PU.preventDefault(), this._pointA && null === this._pointB) {
                      const UU = PU.clientX - this._pointA.x,
                        RU = PU.clientY - this._pointA.y;
                      this._pointA.x = PU.clientX, this._pointA.y = PU.clientY, this.onTouch(this._pointA, UU, RU)
                    } else if (this._pointA && this._pointB) {
                    const UU = this._pointA.pointerId === PU.pointerId ? this._pointA : this._pointB;
                    UU.x = PU.clientX, UU.y = PU.clientY;
                    const RU = this._pointA.x - this._pointB.x,
                      gU = this._pointA.y - this._pointB.y,
                      TU = RU * RU + gU * gU,
                      qU = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: PU.pointerId,
                        type: EU.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, tU, TU, pU, qU), pU = qU, tU = TU
                  }
                } else {
                  try {
                    qU?.releasePointerCapture(PU.pointerId)
                  } catch (KU) {}
                  TU || (this._pointB = null), RU._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == PU.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == PU.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== tU || pU) && (this.onMultiTouch(this._pointA, this._pointB, tU, 0, pU, null), tU = 0, pU = null), this._currentMousePointerIdDown = -1, this.onButtonUp(PU), UU || PU.preventDefault()
                } else {
                  try {
                    qU?.setPointerCapture(PU.pointerId)
                  } catch (KU) {}
                  if (null === this._pointA) this._pointA = {
                    x: PU.clientX,
                    y: PU.clientY,
                    pointerId: PU.pointerId,
                    type: PU.pointerType,
                    button: PU.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: PU.clientX,
                      y: PU.clientY,
                      pointerId: PU.pointerId,
                      type: PU.pointerType,
                      button: PU.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || TU || (this._currentMousePointerIdDown = PU.pointerId), this.onButtonDown(PU), UU || (PU.preventDefault(), gU && gU.focus())
                }
              }
            }, this._observer = this.camera.aZ()._inputManager._addCameraPointerObserver(this._pointerInput, cU.e.POINTERDOWN | cU.e.POINTERUP | cU.e.POINTERMOVE | cU.e.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, tU = 0, pU = null, this.onLostFocus()
            }, this._contextMenuBind = UU => this.onContextMenu(UU), gU && gU.addEventListener("contextmenu", this._contextMenuBind, !1);
            const EU = this.camera.aZ().WC().getHostWindow();
            EU && mU.g.RegisterTopRootEvents(EU, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const UU = this.camera.aZ().WC().getHostWindow();
              UU && mU.g.UnregisterTopRootEvents(UU, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.aZ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const UU = this.camera.aZ().WC().getInputElement();
                UU && UU.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(UU, RU) {}
          onTouch(UU, RU, gU) {}
          onMultiTouch(UU, RU, gU, tU, pU, EU) {}
          onContextMenu(UU) {
            UU.preventDefault()
          }
          onButtonDown(UU) {}
          onButtonUp(UU) {}
          onLostFocus() {}
        }, (() => {
          const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: UU => "buttons" in UU,
              get: UU => UU.buttons,
              set: (UU, RU) => {
                UU.buttons = RU
              }
            },
            metadata: PU
          }, gU, EU), PU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PU
          })
        })(), UU
      })(),
      JU = (() => {
        var UU;
        let RU, gU, EU, PU = IU,
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        return UU = class extends PU {
          constructor() {
            super(...arguments), this.pinchZoom = (0, tU.j)(this, TU, !0), this.multiTouchPanning = ((0, tU.j)(this, qU), (0, tU.j)(this, KU, !0)), this.multiTouchPanAndZoom = ((0, tU.j)(this, cU), (0, tU.j)(this, GU, !0)), this._isPinching = ((0, tU.j)(this, jU), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(UU, RU) {}
          _computeMultiTouchPanning(UU, RU) {}
          onMultiTouch(UU, RU, gU, tU, pU, EU) {
            0 === gU && null === pU || 0 === tU && null === EU || (this.multiTouchPanAndZoom ? (this._computePinchZoom(gU, tU), this._computeMultiTouchPanning(pU, EU)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(gU, tU), this._isPinching = !0) : this._computeMultiTouchPanning(pU, EU)) : this.multiTouchPanning ? this._computeMultiTouchPanning(pU, EU) : this.pinchZoom && this._computePinchZoom(gU, tU))
          }
          onButtonUp(UU) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(PU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchZoom" in UU,
              get: UU => UU.pinchZoom,
              set: (UU, RU) => {
                UU.pinchZoom = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: UU => "multiTouchPanning" in UU,
              get: UU => UU.multiTouchPanning,
              set: (UU, RU) => {
                UU.multiTouchPanning = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, tU.i)(null, null, EU, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "multiTouchPanAndZoom" in UU,
              get: UU => UU.multiTouchPanAndZoom,
              set: (UU, RU) => {
                UU.multiTouchPanAndZoom = RU
              }
            },
            metadata: uU
          }, GU, jU), uU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          })
        })(), UU
      })(),
      wU = (() => {
        var UU;
        let RU, gU, EU, PU, TU, qU, KU, cU = JU,
          GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [],
          eU = [],
          WU = [],
          fU = [],
          xU = [],
          mU = [],
          IU = [],
          wU = [],
          nU = [];
        return UU = class extends cU {
          constructor() {
            super(...arguments), this.buttons = (0, tU.j)(this, GU, [0, 1, 2]), this.angularSensibilityX = ((0, tU.j)(this, jU), (0, tU.j)(this, uU, 1e3)), this.angularSensibilityY = ((0, tU.j)(this, CU), (0, tU.j)(this, hU, 1e3)), this.pinchPrecision = ((0, tU.j)(this, QU), (0, tU.j)(this, eU, 12)), this.pinchDeltaPercentage = ((0, tU.j)(this, WU), (0, tU.j)(this, fU, 0)), this.useNaturalPinchZoom = ((0, tU.j)(this, xU), (0, tU.j)(this, mU, !1)), this.panningSensibility = ((0, tU.j)(this, IU), (0, tU.j)(this, wU, 1e3)), this.pinchInwards = ((0, tU.j)(this, nU), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(UU, RU) {
            if (UU && RU) {
              const gU = RU.x - UU.x,
                tU = RU.y - UU.y,
                pU = this.camera.movement.input.getEntry("pointer", "pan"),
                EU = pU?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== EU && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -gU * EU, this.camera.movement.panAccumulatedPixels.y += tU * EU)
            }
          }
          _computePinchZoom(RU, gU) {
            const tU = this.camera.radius || UU.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = tU * Math.sqrt(RU) / Math.sqrt(gU);
            else if (this.pinchDeltaPercentage) {
              const UU = .001 * (gU - RU) * tU * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += UU
            } else {
              const UU = (gU - RU) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += UU
            }
          }
          onTouch(UU, RU, gU) {
            const tU = this._activeEntry ?? (this.camera.WC().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (tU)
              if ("pan" === tU.interaction) {
                const UU = tU.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== UU && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -RU * UU, this.camera.movement.panAccumulatedPixels.y += gU * UU)
              } else if ("rotate" === tU.interaction) {
              const UU = tU.Ay ?? tU.sensitivity ?? 1 / this.angularSensibilityX,
                pU = tU.Rk ?? tU.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -RU * UU, this.camera.movement.rotationAccumulatedPixels.y += -gU * pU
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(UU, RU, gU, tU, pU, EU) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(tU) - Math.sqrt(gU)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(UU, RU, gU, tU, pU, EU)
          }
          onButtonDown(UU) {
            this._pointerConditions.button = UU.button, this._pointerModifiers.ctrl = UU.ctrlKey, this._pointerModifiers.alt = UU.altKey, this._pointerModifiers.shift = UU.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(UU)
          }
          onButtonUp(UU) {
            this._activeEntry = null, super.onButtonUp(UU)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const JU = "function" === typeof Symbol && Symbol.metadata ? Object.create(cU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], PU = [(0, pU.K)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: UU => "buttons" in UU,
              get: UU => UU.buttons,
              set: (UU, RU) => {
                UU.buttons = RU
              }
            },
            metadata: JU
          }, GU, jU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: UU => "angularSensibilityX" in UU,
              get: UU => UU.angularSensibilityX,
              set: (UU, RU) => {
                UU.angularSensibilityX = RU
              }
            },
            metadata: JU
          }, uU, CU), (0, tU.i)(null, null, EU, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: UU => "angularSensibilityY" in UU,
              get: UU => UU.angularSensibilityY,
              set: (UU, RU) => {
                UU.angularSensibilityY = RU
              }
            },
            metadata: JU
          }, hU, QU), (0, tU.i)(null, null, PU, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchPrecision" in UU,
              get: UU => UU.pinchPrecision,
              set: (UU, RU) => {
                UU.pinchPrecision = RU
              }
            },
            metadata: JU
          }, eU, WU), (0, tU.i)(null, null, TU, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchDeltaPercentage" in UU,
              get: UU => UU.pinchDeltaPercentage,
              set: (UU, RU) => {
                UU.pinchDeltaPercentage = RU
              }
            },
            metadata: JU
          }, fU, xU), (0, tU.i)(null, null, qU, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "useNaturalPinchZoom" in UU,
              get: UU => UU.useNaturalPinchZoom,
              set: (UU, RU) => {
                UU.useNaturalPinchZoom = RU
              }
            },
            metadata: JU
          }, mU, IU), (0, tU.i)(null, null, KU, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningSensibility" in UU,
              get: UU => UU.panningSensibility,
              set: (UU, RU) => {
                UU.panningSensibility = RU
              }
            },
            metadata: JU
          }, wU, nU), JU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JU
          })
        })(), UU.MinimumRadiusForPinch = .001, UU
      })();
    xU.d.ArcRotateCameraPointersInput = wU;
    var nU = gU(39562);
    let bU = (() => {
      var UU;
      let RU, gU, EU, TU, qU, KU, cU, GU, jU, uU, CU, hU = [],
        QU = [],
        eU = [],
        WU = [],
        fU = [],
        xU = [],
        IU = [],
        JU = [],
        wU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [];
      return UU = class {
        constructor() {
          this.camera = (0, tU.j)(this, hU), this.keysUp = (0, tU.j)(this, QU, [38]), this.keysDown = ((0, tU.j)(this, eU), (0, tU.j)(this, WU, [40])), this.keysLeft = ((0, tU.j)(this, fU), (0, tU.j)(this, xU, [37])), this.keysRight = ((0, tU.j)(this, IU), (0, tU.j)(this, JU, [39])), this.keysReset = ((0, tU.j)(this, wU), (0, tU.j)(this, bU, [220])), this.keysZoomIn = ((0, tU.j)(this, oU), (0, tU.j)(this, ZU, [187, 107])), this.keysZoomOut = ((0, tU.j)(this, aU), (0, tU.j)(this, YU, [189, 109])), this.panningSensibility = ((0, tU.j)(this, BU), (0, tU.j)(this, VU, 50)), this.zoomingSensibility = ((0, tU.j)(this, rU), (0, tU.j)(this, XU, 25)), this.angularSpeed = ((0, tU.j)(this, vU), (0, tU.j)(this, dU, .01)), this._useAltToZoom = ((0, tU.j)(this, HU), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new PU.l, this._panDirection = new PU.l
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(UU) {
          this._useAltToZoom = UU, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const UU = this.camera.movement.input,
            RU = UU.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && RU ? UU.inputMap.splice(UU.inputMap.indexOf(RU), 1) : this._useAltToZoom && !RU && UU.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(UU) {
          UU = mU.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aZ(), this._engine = this._scene.WC(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((RU => {
            const gU = RU.event;
            if (!gU.metaKey)
              if (RU.type === nU.b.KEYDOWN) {
                if (this._ctrlPressed = gU.ctrlKey, this._altPressed = gU.altKey, -1 !== this.keysUp.indexOf(gU.keyCode) || -1 !== this.keysDown.indexOf(gU.keyCode) || -1 !== this.keysLeft.indexOf(gU.keyCode) || -1 !== this.keysRight.indexOf(gU.keyCode) || -1 !== this.keysReset.indexOf(gU.keyCode) || -1 !== this.keysZoomIn.indexOf(gU.keyCode) || -1 !== this.keysZoomOut.indexOf(gU.keyCode)) {
                  -1 === this._keys.indexOf(gU.keyCode) && this._keys.push(gU.keyCode), gU.preventDefault && (UU || gU.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(gU.keyCode) || -1 !== this.keysDown.indexOf(gU.keyCode) || -1 !== this.keysLeft.indexOf(gU.keyCode) || -1 !== this.keysRight.indexOf(gU.keyCode) || -1 !== this.keysReset.indexOf(gU.keyCode) || -1 !== this.keysZoomIn.indexOf(gU.keyCode) || -1 !== this.keysZoomOut.indexOf(gU.keyCode)) {
              const RU = this._keys.indexOf(gU.keyCode);
              RU >= 0 && this._keys.splice(RU, 1), gU.preventDefault && (UU || gU.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const UU = this.camera,
              RU = UU.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const gU = this._rotateDirection.set(0, 0),
              tU = this._panDirection.set(0, 0);
            let pU = 0,
              EU = 0;
            for (let PU = 0; PU < this._keys.length; PU++) {
              const TU = this._keys[PU];
              if (this._keyboardConditions.key = TU, -1 === this.keysReset.indexOf(TU)) {
                const UU = RU.resolveInteraction("keyboard", this._keyboardConditions);
                if (UU)
                  if ("pan" === UU.interaction) EU = Math.max(EU, UU.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(TU) ? tU.x -= 1 : -1 !== this.keysRight.indexOf(TU) ? tU.x += 1 : -1 !== this.keysUp.indexOf(TU) ? tU.y += 1 : -1 !== this.keysDown.indexOf(TU) && (tU.y -= 1);
                  else if ("zoom" === UU.interaction) {
                  const gU = UU.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(TU) || -1 !== this.keysZoomIn.indexOf(TU) ? RU.handlers.zoom(gU) : -1 === this.keysDown.indexOf(TU) && -1 === this.keysZoomOut.indexOf(TU) || RU.handlers.zoom(-gU)
                } else "rotate" === UU.interaction && (pU = Math.max(pU, UU.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(TU) ? gU.x -= 1 : -1 !== this.keysRight.indexOf(TU) ? gU.x += 1 : -1 !== this.keysUp.indexOf(TU) ? gU.y -= 1 : -1 !== this.keysDown.indexOf(TU) && (gU.y += 1))
              } - 1 !== this.keysReset.indexOf(TU) && UU.useInputToRestoreState && UU.restoreState()
            }
            0 === gU.x && 0 === gU.y || (gU.normalize().scaleInPlace(pU), RU.handlers.rotate(gU.x, gU.y)), 0 === tU.x && 0 === tU.y || (tU.normalize().scaleInPlace(EU), RU.handlers.pan(tU.x, tU.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.K)()], jU = [(0, pU.K)()], uU = [(0, pU.K)()], CU = [(0, pU.K)()], (0, tU.i)(UU, null, CU, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAltToZoom" in UU,
            get: UU => UU.useAltToZoom
          },
          metadata: PU
        }, null, hU), (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUp" in UU,
            get: UU => UU.keysUp,
            set: (UU, RU) => {
              UU.keysUp = RU
            }
          },
          metadata: PU
        }, QU, eU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDown" in UU,
            get: UU => UU.keysDown,
            set: (UU, RU) => {
              UU.keysDown = RU
            }
          },
          metadata: PU
        }, WU, fU), (0, tU.i)(null, null, EU, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysLeft" in UU,
            get: UU => UU.keysLeft,
            set: (UU, RU) => {
              UU.keysLeft = RU
            }
          },
          metadata: PU
        }, xU, IU), (0, tU.i)(null, null, TU, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRight" in UU,
            get: UU => UU.keysRight,
            set: (UU, RU) => {
              UU.keysRight = RU
            }
          },
          metadata: PU
        }, JU, wU), (0, tU.i)(null, null, qU, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysReset" in UU,
            get: UU => UU.keysReset,
            set: (UU, RU) => {
              UU.keysReset = RU
            }
          },
          metadata: PU
        }, bU, oU), (0, tU.i)(null, null, KU, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysZoomIn" in UU,
            get: UU => UU.keysZoomIn,
            set: (UU, RU) => {
              UU.keysZoomIn = RU
            }
          },
          metadata: PU
        }, ZU, aU), (0, tU.i)(null, null, cU, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysZoomOut" in UU,
            get: UU => UU.keysZoomOut,
            set: (UU, RU) => {
              UU.keysZoomOut = RU
            }
          },
          metadata: PU
        }, YU, BU), (0, tU.i)(null, null, GU, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "panningSensibility" in UU,
            get: UU => UU.panningSensibility,
            set: (UU, RU) => {
              UU.panningSensibility = RU
            }
          },
          metadata: PU
        }, VU, rU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "zoomingSensibility" in UU,
            get: UU => UU.zoomingSensibility,
            set: (UU, RU) => {
              UU.zoomingSensibility = RU
            }
          },
          metadata: PU
        }, XU, vU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: UU => "angularSpeed" in UU,
            get: UU => UU.angularSpeed,
            set: (UU, RU) => {
              UU.angularSpeed = RU
            }
          },
          metadata: PU
        }, dU, HU), PU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PU
        })
      })(), UU
    })();
    xU.d.ArcRotateCameraKeyboardMoveInput = bU;
    var oU = gU(37308),
      ZU = gU(39571);
    let aU = (() => {
      var UU;
      let RU, gU, EU, qU = [],
        KU = [],
        GU = [],
        uU = [],
        CU = [],
        hU = [];
      return UU = class {
        constructor() {
          this.wheelPrecision = (0, tU.j)(this, qU, 3), this.zoomToMouseLocation = ((0, tU.j)(this, KU), (0, tU.j)(this, GU, !1)), this.wheelDeltaPercentage = ((0, tU.j)(this, uU), (0, tU.j)(this, CU, 0)), this.customComputeDeltaFromMouseWheel = ((0, tU.j)(this, hU), null), this._viewOffset = new PU.n(0, 0, 0), this._globalOffset = new PU.n(0, 0, 0), this._inertialPanning = PU.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(UU, RU) {
          let gU;
          const tU = .01 * UU * this.wheelDeltaPercentage * RU;
          return gU = UU > 0 ? tU / (1 + this.wheelDeltaPercentage) : tU * (1 + this.wheelDeltaPercentage), gU
        }
        attachControl(UU) {
          UU = mU.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = RU => {
            if (RU.type !== cU.e.POINTERWHEEL) return;
            const gU = RU.event;
            let tU;
            const pU = gU.deltaMode === ZU.c.DOM_DELTA_LINE ? 40 : 1,
              EU = -gU.deltaY * pU;
            if (this.customComputeDeltaFromMouseWheel) tU = this.customComputeDeltaFromMouseWheel(EU, this, gU);
            else if (this.wheelDeltaPercentage) {
              if (tU = this._computeDeltaFromMouseWheelLegacyEvent(EU, this.camera.radius), tU > 0) {
                const UU = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let RU = this.camera.radius,
                  gU = UU + tU;
                for (let tU = 0; tU < 20 && !(RU <= gU) && !(Math.abs(gU * this.camera.inertia) < .001); tU++) RU -= gU, gU *= this.camera.inertia;
                RU = (0, TU.Clamp)(RU, 0, Number.MAX_VALUE), tU = this._computeDeltaFromMouseWheelLegacyEvent(EU, RU)
              }
            } else {
              const UU = this.camera.movement.input.getEntry("wheel", "zoom");
              tU = EU * (UU?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            tU && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(tU)) : this.camera.movement.zoomAccumulatedPixels += tU), gU.preventDefault && (UU || gU.preventDefault())
          }, this._observer = this.camera.aZ()._inputManager._addCameraPointerObserver(this._wheel, cU.e.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Y5(0)
        }
        detachControl() {
          this._observer && (this.camera.aZ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const UU = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(UU.inertialAlphaOffset) + Math.abs(UU.inertialBetaOffset) + Math.abs(UU.inertialRadiusOffset)) {
            this._updateHitPlane(), UU.target.addInPlace(this._inertialPanning), UU.radius -= this._zoomToMouseRadiusOffset;
            const RU = UU.movement.getFrameIndependentDecay(UU.inertia);
            this._inertialPanning.scaleInPlace(RU), this._zoomToMouseRadiusOffset *= RU, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < jU.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const UU = this.camera,
            RU = UU.target.subtract(UU.position);
          this._hitPlane = oU.e.FromPositionAndNormal(UU.target, RU)
        }
        _getPosition() {
          const UU = this.camera,
            RU = UU.aZ(),
            gU = RU.createPickingRay(RU.pointerX, RU.pointerY, PU.c.Identity(), UU, !1);
          0 === UU.targetScreenOffset.x && 0 === UU.targetScreenOffset.y || (this._viewOffset.set(UU.targetScreenOffset.x, UU.targetScreenOffset.y, 0), UU.getViewMatrix().invertToRef(UU._cameraTransformMatrix), this._globalOffset = PU.n.TransformNormal(this._viewOffset, UU._cameraTransformMatrix), gU.origin.addInPlace(this._globalOffset));
          let tU = 0;
          return this._hitPlane && (tU = gU.intersectsPlane(this._hitPlane) ?? 0), gU.origin.addInPlace(gU.direction.scaleInPlace(tU))
        }
        _zoomToMouse(UU) {
          const RU = this.camera,
            gU = 1 - RU.inertia,
            tU = RU.movement.getFrameIndependentInputScale(RU.inertia);
          if (RU.lowerRadiusLimit) {
            const pU = RU.lowerRadiusLimit ?? 0;
            RU.radius - (this._zoomToMouseRadiusOffset + UU * tU) / gU < pU && (UU = ((RU.radius - pU) * gU - this._zoomToMouseRadiusOffset) / tU)
          }
          if (RU.upperRadiusLimit) {
            const pU = RU.upperRadiusLimit ?? 0;
            RU.radius - (this._zoomToMouseRadiusOffset + UU * tU) / gU > pU && (UU = ((RU.radius - pU) * gU - this._zoomToMouseRadiusOffset) / tU)
          }
          const pU = UU / gU / RU.radius,
            EU = this._getPosition(),
            TU = PU.h.xC[6];
          EU.subtractToRef(RU.target, TU), TU.scaleInPlace(pU), TU.scaleInPlace(gU), TU.scaleInPlace(tU), this._inertialPanning.addInPlace(TU), this._zoomToMouseRadiusOffset += UU * tU
        }
        _zeroIfClose(UU) {
          Math.abs(UU.x) < jU.e && (UU.x = 0), Math.abs(UU.y) < jU.e && (UU.y = 0), Math.abs(UU.z) < jU.e && (UU.z = 0)
        }
      }, (() => {
        const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecision" in UU,
            get: UU => UU.wheelPrecision,
            set: (UU, RU) => {
              UU.wheelPrecision = RU
            }
          },
          metadata: PU
        }, qU, KU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: UU => "zoomToMouseLocation" in UU,
            get: UU => UU.zoomToMouseLocation,
            set: (UU, RU) => {
              UU.zoomToMouseLocation = RU
            }
          },
          metadata: PU
        }, GU, uU), (0, tU.i)(null, null, EU, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelDeltaPercentage" in UU,
            get: UU => UU.wheelDeltaPercentage,
            set: (UU, RU) => {
              UU.wheelDeltaPercentage = RU
            }
          },
          metadata: PU
        }, CU, hU), PU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PU
        })
      })(), UU
    })();
    xU.d.ArcRotateCameraMouseWheelInput = aU;
    var YU, BU, VU = gU(39256);
    class rU extends xU.f {
      constructor(UU) {
        super(UU)
      }
      addMouseWheel() {
        return this.add(new aU), this
      }
      addPointers() {
        return this.add(new wU), this
      }
      addKeyboard() {
        return this.add(new bU), this
      }
    }(YU = rU.prototype).addVRDeviceOrientation ?? (YU.addVRDeviceOrientation = (0, VU.m)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (BU = rU.prototype).addGamepad ?? (BU.addGamepad = (0, VU.m)("ArcRotateCameraInputsManager", "addGamepad"));
    var XU = gU(36639),
      vU = gU(39615),
      dU = gU(39624);
    class HU extends vU.d {
      constructor(UU, RU, gU) {
        super(UU, RU, gU), this.input = new dU.d({
          pan: (UU, RU) => {
            this.panAccumulatedPixels.x += UU, this.panAccumulatedPixels.y += RU
          },
          rotate: (UU, RU) => {
            this.rotationAccumulatedPixels.x += UU, this.rotationAccumulatedPixels.y += RU
          },
          zoom: UU => {
            this.zoomAccumulatedPixels += UU
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

    function SU(UU, RU) {
      return isNaN(UU) ? RU : UU
    }
    let sU = (() => {
        var UU;
        let RU, gU, qU, cU, GU, CU, hU, xU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU, VU, XU, vU, dU, sU, yU, kU, FU, iU, AU, zU = fU.i,
          MU = [],
          DU = [],
          LU = [],
          NU = [],
          lU = [],
          OU = [],
          UR = [],
          RR = [],
          gR = [],
          tR = [],
          pR = [],
          ER = [],
          PR = [],
          TR = [],
          qR = [],
          KR = [],
          cR = [],
          GR = [],
          jR = [],
          uR = [],
          CR = [],
          hR = [],
          QR = [],
          eR = [],
          WR = [],
          fR = [],
          xR = [],
          mR = [],
          IR = [],
          JR = [],
          wR = [],
          nR = [],
          bR = [],
          oR = [],
          ZR = [],
          aR = [],
          YR = [],
          BR = [],
          VR = [],
          rR = [],
          XR = [],
          vR = [],
          dR = [],
          HR = [],
          SR = [],
          sR = [],
          yR = [];
        return UU = class extends zU {
          get target() {
            return this.nD
          }
          set target(UU) {
            this.setTarget(UU)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(UU) {
            UU && this.setTarget(UU)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(UU) {
            this.setPosition(UU)
          }
          set upVector(UU) {
            this._upToYMatrix || (this._yToUpMatrix = new PU.c, this._upToYMatrix = new PU.c, this._upVector = PU.n.Zero()), UU.normalize(), this._upVector.PgU(UU), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            PU.c.RotationAlignToRef(PU.n.UpReadOnly, this._upVector, this._yToUpMatrix), PU.c.RotationAlignToRef(this._upVector, PU.n.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const UU = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialAlphaOffset(UU) {
            this._inertialAlphaOffset = UU, 0 === UU && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const UU = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialBetaOffset(UU) {
            this._inertialBetaOffset = UU, 0 === UU && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const UU = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialRadiusOffset(UU) {
            this._inertialRadiusOffset = UU, 0 === UU && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(UU) {
            this._panningInertia = UU, this.movement && (this.movement.panInertia = UU)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(UU) {
            this._inertia = UU, this.movement && (this.movement.rotationInertia = UU, this.movement.zoomInertia = UU)
          }
          get angularSensibilityX() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.angularSensibilityX : 0
          }
          set angularSensibilityX(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.angularSensibilityX = UU)
          }
          get angularSensibilityY() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.angularSensibilityY : 0
          }
          set angularSensibilityY(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.angularSensibilityY = UU)
          }
          get pinchPrecision() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.pinchPrecision : 0
          }
          set pinchPrecision(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.pinchPrecision = UU)
          }
          get pinchDeltaPercentage() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.pinchDeltaPercentage = UU)
          }
          get useNaturalPinchZoom() {
            const UU = this.inputs.attached.pointers;
            return !!UU && UU.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.useNaturalPinchZoom = UU)
          }
          get panningSensibility() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.panningSensibility : 0
          }
          set panningSensibility(UU) {
            const RU = this.inputs.attached.pointers;
            RU && (RU.panningSensibility = UU)
          }
          get keysUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUp : []
          }
          set keysUp(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysUp = UU)
          }
          get keysDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDown : []
          }
          set keysDown(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysDown = UU)
          }
          get keysLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysLeft : []
          }
          set keysLeft(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysLeft = UU)
          }
          get keysRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRight : []
          }
          set keysRight(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRight = UU)
          }
          get wheelPrecision() {
            const UU = this.inputs.attached.mousewheel;
            return UU ? UU.wheelPrecision : 0
          }
          set wheelPrecision(UU) {
            const RU = this.inputs.attached.mousewheel;
            RU && (RU.wheelPrecision = UU)
          }
          get zoomToMouseLocation() {
            const UU = this.inputs.attached.mousewheel;
            return !!UU && UU.zoomToMouseLocation
          }
          set zoomToMouseLocation(UU) {
            const RU = this.inputs.attached.mousewheel;
            RU && (RU.zoomToMouseLocation = UU)
          }
          get wheelDeltaPercentage() {
            const UU = this.inputs.attached.mousewheel;
            return UU ? UU.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(UU) {
            const RU = this.inputs.attached.mousewheel;
            RU && (RU.wheelDeltaPercentage = UU)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(UU) {
            this._useCtrlForPanningInternal = UU;
            const RU = this.movement.input,
              gU = RU.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !UU && gU ? RU.inputMap.splice(RU.inputMap.indexOf(gU), 1) : UU && !gU && RU.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const tU = RU.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !UU && tU ? RU.inputMap.splice(RU.inputMap.indexOf(tU), 1) : UU && !tU && RU.addEntry({
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
          set _panningMouseButton(UU) {
            this._panningMouseButtonInternal = UU;
            const RU = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            RU && (RU.button = UU)
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
          set useBouncingBehavior(UU) {
            UU !== this.useBouncingBehavior && (UU ? (this._bouncingBehavior = new QU, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(UU) {
            UU !== this.useFramingBehavior && (UU ? (this._framingBehavior = new eU, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(UU) {
            UU !== this.useAutoRotationBehavior && (UU ? (this._autoRotationBehavior = new uU, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(UU, RU, gU, pU, TU, qU) {
            var KU;
            let cU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(UU, PU.n.Zero(), qU, cU), KU = this, this.alpha = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, void 0)), this.beta = ((0, tU.j)(this, LU), (0, tU.j)(this, NU, void 0)), this.radius = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, void 0)), this.overrideCloneAlphaBetaRadius = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, void 0)), this.nD = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, void 0)), this._targetHost = ((0, tU.j)(this, pR), (0, tU.j)(this, ER, void 0)), this._upToYMatrix = (0, tU.j)(this, PR), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, tU.j)(this, TR, null), this.upperAlphaLimit = ((0, tU.j)(this, qR), (0, tU.j)(this, KR, null)), this.lowerBetaLimit = ((0, tU.j)(this, cR), (0, tU.j)(this, GR, .01)), this.upperBetaLimit = ((0, tU.j)(this, jR), (0, tU.j)(this, uR, Math.PI - .01)), this.lowerRadiusLimit = ((0, tU.j)(this, CR), (0, tU.j)(this, hR, null)), this.upperRadiusLimit = ((0, tU.j)(this, QR), (0, tU.j)(this, eR, null)), this.lowerTargetYLimit = ((0, tU.j)(this, WR), (0, tU.j)(this, fR, -1 / 0)), this.inertialPanningX = ((0, tU.j)(this, xR), (0, tU.j)(this, mR, 0)), this.inertialPanningY = ((0, tU.j)(this, IR), (0, tU.j)(this, JR, 0)), this.pinchToPanMaxDistance = ((0, tU.j)(this, wR), (0, tU.j)(this, nR, 20)), this.panningDistanceLimit = ((0, tU.j)(this, bR), (0, tU.j)(this, oR, null)), this.panningOriginTarget = ((0, tU.j)(this, ZR), (0, tU.j)(this, aR, PU.n.Zero())), this._panningInertia = ((0, tU.j)(this, YR), .9), this._inertia = .9, this.zoomOnFactor = (0, tU.j)(this, BR, 1), this.targetScreenOffset = ((0, tU.j)(this, VR), (0, tU.j)(this, rR, PU.l.Zero())), this.allowUpsideDown = ((0, tU.j)(this, XR), (0, tU.j)(this, vR, !0)), this.useInputToRestoreState = ((0, tU.j)(this, dR), (0, tU.j)(this, HR, !0)), this.restoreStateInterpolationFactor = ((0, tU.j)(this, SR), (0, tU.j)(this, sR, 0)), this._currentInterpolationFactor = ((0, tU.j)(this, yR), 0), this._viewMatrix = new PU.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new PU.n(1, 1, 0), this._transformedDirection = new PU.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new EU.b, this.checkCollisions = !1, this.collisionRadius = new PU.n(.5, .5, .5), this._previousPosition = PU.n.Zero(), this._collisionVelocity = PU.n.Zero(), this._newPosition = PU.n.Zero(), this._computationVector = PU.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new PU.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new PU.l(NaN, NaN), this._onCollisionPositionChange = function(UU, RU) {
              let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              gU ? (KU.setPosition(RU), KU.Rj && KU.Rj(gU)) : KU._previousPosition.PgU(KU._position);
              const tU = Math.cos(KU.alpha),
                pU = Math.sin(KU.alpha),
                EU = Math.cos(KU.beta);
              let PU = Math.sin(KU.beta);
              0 === PU && (PU = 1e-4);
              const TU = KU._getTargetPosition();
              KU._computationVector.b_(KU.radius * tU * PU, KU.radius * EU, KU.radius * pU * PU), TU.addToRef(KU._computationVector, KU._newPosition), KU._position.PgU(KU._newPosition);
              let qU = KU.upVector;
              KU.allowUpsideDown && KU.beta < 0 && (qU = qU.clone(), qU = qU.nt()), KU._computeViewMatrix(KU._position, TU, qU), KU._viewMatrix.addAtIndex(12, KU.targetScreenOffset.x), KU._viewMatrix.addAtIndex(13, KU.targetScreenOffset.y), KU._collisionTriggered = !1
            }, this.nD = PU.n.Zero(), TU && this.setTarget(TU), this.alpha = RU, this.beta = gU, this.radius = pU, this.getViewMatrix(), this.inputs = new rU(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new HU(this.aZ(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.nD = new PU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = PU.l.Zero()
          }
          _updateCache(UU) {
            UU || super._updateCache(), this._cache.nD.PgU(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.PgU(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const UU = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? UU.addToRef(this._targetBoundingCenter, this.nD) : this.nD.PgU(UU)
            }
            const UU = this._getLockedTargetPosition();
            return UU || this.nD
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > jU.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              EU = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != EU ? this._currentInterpolationFactor = EU : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = SU(UU, this._goalAlpha), this._goalBeta = SU(RU, this._goalBeta), this._goalRadius = SU(gU, this._goalRadius), this._goalTarget.set(SU(tU.x, this._goalTarget.x), SU(tU.y, this._goalTarget.y), SU(tU.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(SU(pU.x, this._goalTargetScreenOffset.x), SU(pU.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, TU.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, TU.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, TU.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, TU.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.nD.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(UU, RU) {
            let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const pU = arguments;
            RU = mU.g.BackCompatCameraNoPreventDefault(pU), this._useCtrlForPanning = gU, this._panningMouseButton = tU, "boolean" === typeof pU[0] && (pU.length > 1 && (this._useCtrlForPanning = pU[1]), pU.length > 2 && (this._panningMouseButton = pU[2])), this.inputs.attachElement(RU), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(UU, RU, gU) {
            const tU = this.invertRotation ? -1 : 1;
            let pU = UU * this._calculateHandednessMultiplier();
            this.beta < 0 && (pU *= -1), this.alpha += pU * tU, this.beta += RU * tU, this.radius -= gU
          }
          _applyPanDelta(UU, RU) {
            const gU = PU.h.xC[0].b_(UU, RU, RU);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gU.multiplyInPlace(this.panningAxis), PU.n.TransformNormalToRef(gU, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const UU = this.upVector,
                RU = PU.n.CrossToRef(this._transformedDirection, UU, this._transformedDirection);
              PU.n.CrossToRef(UU, RU, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.nD);
                PU.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.nD.PgU(this._transformedDirection)
              } else {
                if (this.parent) {
                  const UU = PU.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(UU), UU.transposeToRef(UU), PU.n.TransformCoordinatesToRef(this._transformedDirection, UU, this._transformedDirection)
                }
                this.nD.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let UU = !1;
            this.movement.computeCurrentFrameDeltas();
            const RU = this.movement.rotationDeltaCurrentFrame,
              gU = this.movement.zoomDeltaCurrentFrame,
              tU = this.movement.panDeltaCurrentFrame;
            if (0 === RU.x && 0 === RU.y && 0 === gU && 0 === tU.x && 0 === tU.y || (UU = !0, 0 === RU.x && 0 === RU.y && 0 === gU || this._applyRotationAndZoomDelta(RU.x, RU.y, gU), 0 === tU.x && 0 === tU.y || this._applyPanDelta(tU.x, tU.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), UU = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const RU = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < RU && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < RU && (this.inertialPanningY = 0), UU = !0
            }
            if (UU) this.stopInterpolation();
            else if (this._isInterpolating) {
              let UU = !1;
              const RU = this._scene.WC().getDeltaTime() / 1e3,
                gU = 1 - Math.pow(2, -RU / this._currentInterpolationFactor),
                tU = SU(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const RU = PU.h.xC[0].set(SU(this._goalTarget.x, this.nD.x), SU(this._goalTarget.y, this.nD.y), SU(this._goalTarget.z, this.nD.z));
                PU.n.LerpToRef(this.target, RU, gU, this.nD), 10 * PU.n.Distance(this.target, RU) / tU < jU.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.PgU(RU), this.setTarget(this.target, !1, !0, !0)) : UU = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const RU = PU.d.RotationAlphaBetaGammaToRef(SU(this._goalAlpha, this.alpha), SU(this._goalBeta, this.beta), 0, PU.h.Quaternion[0]),
                  tU = PU.d.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, PU.h.Quaternion[1]),
                  pU = PU.d.SlerpToRef(tU, RU, gU, PU.h.Quaternion[2]);
                pU.normalize();
                const EU = pU.toAlphaBetaGammaToRef(PU.h.xC[0]);
                if (this.alpha = EU.x, this.beta = EU.y, pU.isApprox(RU, jU.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const UU = RU.toAlphaBetaGammaToRef(PU.h.xC[0]);
                  this.alpha = UU.x, this.beta = UU.y
                } else UU = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (tU - this.radius) * gU, Math.abs(tU / this.radius - 1) < jU.e ? (this._goalRadius = NaN, this.radius = tU) : UU = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const RU = PU.h.Vector2[0].set(SU(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), SU(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                PU.l.LerpToRef(this.targetScreenOffset, RU, gU, this.targetScreenOffset), PU.l.Distance(this.targetScreenOffset, RU) < jU.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.PgU(RU)) : UU = !0
              }
              this._isInterpolating = UU
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || PU.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const UU = this.alpha;
            var RU, gU;
            this.alpha = function(UU) {
              let RU = Math.PI / 2;
              return 0 === UU.x && 0 === UU.z || (RU = Math.acos(UU.x / Math.sqrt(Math.pow(UU.x, 2) + Math.pow(UU.z, 2)))), UU.z < 0 && (RU = 2 * Math.PI - RU), RU
            }(this._computationVector), this.beta = (RU = this._computationVector.y, gU = this.radius, Math.acos(RU / gU));
            const tU = Math.round((UU - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * tU * Math.PI, this._checkLimits()
          }
          setPosition(UU) {
            this._position.equals(UU) || (this._position.PgU(UU), this.rebuildAnglesAndRadius())
          }
          setTarget(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (tU = this.overrideCloneAlphaBetaRadius ?? tU, UU.computeWorldMatrix) RU && UU.lY ? this._targetBoundingCenter = UU.lY().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, UU.computeWorldMatrix(), this._targetHost = UU, this.nD = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const RU = UU,
                tU = this._getTargetPosition();
              if (tU && !gU && tU.equals(RU)) return;
              this._targetHost = null, this.nD = RU, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            tU || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const UU = Math.cos(this.alpha),
              RU = Math.sin(this.alpha),
              gU = Math.cos(this.beta);
            let tU = Math.sin(this.beta);
            0 === tU && (tU = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const pU = this._getTargetPosition();
            if (this._computationVector.b_(this.radius * UU * tU, this.radius * gU, this.radius * RU * tU), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || PU.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), pU.addToRef(this._computationVector, this._newPosition), this.aZ().collisionsEnabled && this.checkCollisions) {
              const UU = this.aZ().collisionCoordinator;
              this._collider || (this._collider = UU.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, UU.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.PgU(this._newPosition);
              let UU = this.upVector;
              this.allowUpsideDown && tU < 0 && (UU = UU.nt()), this._computeViewMatrix(this._position, pU, UU), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.PgU(pU), this._viewMatrix
          }
          zoomOn(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            UU = UU || this.aZ().meshes;
            const gU = KU.c.MinMax(UU);
            let tU = this._calculateLowerRadiusFromModelBoundingSphere(gU.min, gU.max);
            if (tU = Math.max(Math.min(tU, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = tU * this.zoomOnFactor, this.mode === WU.d.ORTHOGRAPHIC_CAMERA) {
              const UU = this.aZ().WC().getAspectRatio(this),
                RU = tU * this.zoomOnFactor / 2;
              this.orthoLeft = -RU * UU, this.orthoRight = RU * UU, this.orthoBottom = -RU, this.orthoTop = RU
            }
            this.focusOn({
              min: gU.min,
              max: gU.max,
              distance: tU
            }, RU)
          }
          focusOn(UU) {
            let RU, gU, tU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === UU.min) {
              const tU = UU || this.aZ().meshes;
              RU = KU.c.MinMax(tU), gU = PU.n.Distance(RU.min, RU.max)
            } else {
              RU = UU, gU = UU.distance
            }
            this.nD = KU.c.Center(RU), tU || (this.maxZ = 2 * gU)
          }
          createRigCamera(RU, gU) {
            let tU = 0;
            switch (this.cameraRigMode) {
              case WU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case WU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case WU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case WU.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case WU.d.RIG_MODE_VR:
                tU = this._cameraRigParams.stereoHalfAngle * (0 === gU ? 1 : -1);
                break;
              case WU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                tU = this._cameraRigParams.stereoHalfAngle * (0 === gU ? -1 : 1)
            }
            const pU = new UU(RU, this.alpha + tU, this.beta, this.radius, this.nD, this.aZ());
            return pU._cameraRigParams = {}, pU.isRigCamera = !0, pU.rigParent = this, pU.upVector = this.upVector, pU.mode = this.mode, pU.orthoLeft = this.orthoLeft, pU.orthoRight = this.orthoRight, pU.orthoBottom = this.orthoBottom, pU.orthoTop = this.orthoTop, pU
          }
          _updateRigCameras() {
            const UU = this._rigCameras[0],
              RU = this._rigCameras[1];
            switch (UU.beta = RU.beta = this.beta, this.cameraRigMode) {
              case WU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case WU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case WU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case WU.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case WU.d.RIG_MODE_VR:
                UU.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, RU.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case WU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                UU.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, RU.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const tU = PU.n.Distance(UU, RU),
              pU = this.aZ().WC().getAspectRatio(this),
              EU = Math.tan(this.fov / 2),
              TU = EU * pU,
              qU = .5 * tU * gU,
              KU = qU * Math.sqrt(1 + 1 / (TU * TU)),
              cU = qU * Math.sqrt(1 + 1 / (EU * EU));
            return Math.max(KU, cU)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(zU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], qU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.I)("target")], CU = [(0, pU.w)("targetHost")], hU = [(0, pU.K)()], xU = [(0, pU.K)()], IU = [(0, pU.K)()], JU = [(0, pU.K)()], wU = [(0, pU.K)()], nU = [(0, pU.K)()], bU = [(0, pU.K)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], YU = [(0, pU.K)()], BU = [(0, pU.K)()], VU = [(0, pU.K)()], XU = [(0, pU.K)()], vU = [(0, pU.I)()], dU = [(0, pU.K)()], sU = [(0, pU.K)()], yU = [(0, pU.K)()], kU = [(0, pU.E)()], FU = [(0, pU.K)()], iU = [(0, pU.K)()], AU = [(0, pU.K)()], (0, tU.i)(UU, null, hU, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialAlphaOffset" in UU,
              get: UU => UU.inertialAlphaOffset
            },
            metadata: EU
          }, null, MU), (0, tU.i)(UU, null, xU, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialBetaOffset" in UU,
              get: UU => UU.inertialBetaOffset
            },
            metadata: EU
          }, null, MU), (0, tU.i)(UU, null, IU, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialRadiusOffset" in UU,
              get: UU => UU.inertialRadiusOffset
            },
            metadata: EU
          }, null, MU), (0, tU.i)(UU, null, dU, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningInertia" in UU,
              get: UU => UU.panningInertia
            },
            metadata: EU
          }, null, MU), (0, tU.i)(UU, null, sU, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: UU => "zoomToMouseLocation" in UU,
              get: UU => UU.zoomToMouseLocation
            },
            metadata: EU
          }, null, MU), (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "alpha" in UU,
              get: UU => UU.alpha,
              set: (UU, RU) => {
                UU.alpha = RU
              }
            },
            metadata: EU
          }, DU, LU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: UU => "beta" in UU,
              get: UU => UU.beta,
              set: (UU, RU) => {
                UU.beta = RU
              }
            },
            metadata: EU
          }, NU, lU), (0, tU.i)(null, null, qU, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: UU => "radius" in UU,
              get: UU => UU.radius,
              set: (UU, RU) => {
                UU.radius = RU
              }
            },
            metadata: EU
          }, OU, UR), (0, tU.i)(null, null, cU, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: UU => "overrideCloneAlphaBetaRadius" in UU,
              get: UU => UU.overrideCloneAlphaBetaRadius,
              set: (UU, RU) => {
                UU.overrideCloneAlphaBetaRadius = RU
              }
            },
            metadata: EU
          }, RR, gR), (0, tU.i)(null, null, GU, {
            kind: "field",
            name: "nD",
            static: !1,
            private: !1,
            access: {
              has: UU => "nD" in UU,
              get: UU => UU.nD,
              set: (UU, RU) => {
                UU.nD = RU
              }
            },
            metadata: EU
          }, tR, pR), (0, tU.i)(null, null, CU, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: UU => "_targetHost" in UU,
              get: UU => UU._targetHost,
              set: (UU, RU) => {
                UU._targetHost = RU
              }
            },
            metadata: EU
          }, ER, PR), (0, tU.i)(null, null, JU, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerAlphaLimit" in UU,
              get: UU => UU.lowerAlphaLimit,
              set: (UU, RU) => {
                UU.lowerAlphaLimit = RU
              }
            },
            metadata: EU
          }, TR, qR), (0, tU.i)(null, null, wU, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperAlphaLimit" in UU,
              get: UU => UU.upperAlphaLimit,
              set: (UU, RU) => {
                UU.upperAlphaLimit = RU
              }
            },
            metadata: EU
          }, KR, cR), (0, tU.i)(null, null, nU, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerBetaLimit" in UU,
              get: UU => UU.lowerBetaLimit,
              set: (UU, RU) => {
                UU.lowerBetaLimit = RU
              }
            },
            metadata: EU
          }, GR, jR), (0, tU.i)(null, null, bU, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperBetaLimit" in UU,
              get: UU => UU.upperBetaLimit,
              set: (UU, RU) => {
                UU.upperBetaLimit = RU
              }
            },
            metadata: EU
          }, uR, CR), (0, tU.i)(null, null, oU, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerRadiusLimit" in UU,
              get: UU => UU.lowerRadiusLimit,
              set: (UU, RU) => {
                UU.lowerRadiusLimit = RU
              }
            },
            metadata: EU
          }, hR, QR), (0, tU.i)(null, null, ZU, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperRadiusLimit" in UU,
              get: UU => UU.upperRadiusLimit,
              set: (UU, RU) => {
                UU.upperRadiusLimit = RU
              }
            },
            metadata: EU
          }, eR, WR), (0, tU.i)(null, null, aU, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerTargetYLimit" in UU,
              get: UU => UU.lowerTargetYLimit,
              set: (UU, RU) => {
                UU.lowerTargetYLimit = RU
              }
            },
            metadata: EU
          }, fR, xR), (0, tU.i)(null, null, YU, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialPanningX" in UU,
              get: UU => UU.inertialPanningX,
              set: (UU, RU) => {
                UU.inertialPanningX = RU
              }
            },
            metadata: EU
          }, mR, IR), (0, tU.i)(null, null, BU, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialPanningY" in UU,
              get: UU => UU.inertialPanningY,
              set: (UU, RU) => {
                UU.inertialPanningY = RU
              }
            },
            metadata: EU
          }, JR, wR), (0, tU.i)(null, null, VU, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchToPanMaxDistance" in UU,
              get: UU => UU.pinchToPanMaxDistance,
              set: (UU, RU) => {
                UU.pinchToPanMaxDistance = RU
              }
            },
            metadata: EU
          }, nR, bR), (0, tU.i)(null, null, XU, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningDistanceLimit" in UU,
              get: UU => UU.panningDistanceLimit,
              set: (UU, RU) => {
                UU.panningDistanceLimit = RU
              }
            },
            metadata: EU
          }, oR, ZR), (0, tU.i)(null, null, vU, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningOriginTarget" in UU,
              get: UU => UU.panningOriginTarget,
              set: (UU, RU) => {
                UU.panningOriginTarget = RU
              }
            },
            metadata: EU
          }, aR, YR), (0, tU.i)(null, null, yU, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: UU => "zoomOnFactor" in UU,
              get: UU => UU.zoomOnFactor,
              set: (UU, RU) => {
                UU.zoomOnFactor = RU
              }
            },
            metadata: EU
          }, BR, VR), (0, tU.i)(null, null, kU, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "targetScreenOffset" in UU,
              get: UU => UU.targetScreenOffset,
              set: (UU, RU) => {
                UU.targetScreenOffset = RU
              }
            },
            metadata: EU
          }, rR, XR), (0, tU.i)(null, null, FU, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: UU => "allowUpsideDown" in UU,
              get: UU => UU.allowUpsideDown,
              set: (UU, RU) => {
                UU.allowUpsideDown = RU
              }
            },
            metadata: EU
          }, vR, dR), (0, tU.i)(null, null, iU, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: UU => "useInputToRestoreState" in UU,
              get: UU => UU.useInputToRestoreState,
              set: (UU, RU) => {
                UU.useInputToRestoreState = RU
              }
            },
            metadata: EU
          }, HR, SR), (0, tU.i)(null, null, AU, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: UU => "restoreStateInterpolationFactor" in UU,
              get: UU => UU.restoreStateInterpolationFactor,
              set: (UU, RU) => {
                UU.restoreStateInterpolationFactor = RU
              }
            },
            metadata: EU
          }, sR, yR), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      yU = !1;
    yU || (yU = !0, qU.b.AddNodeConstructor("ArcRotateCamera", ((UU, RU) => () => new sU(UU, 0, 0, 1, PU.n.Zero(), RU))), (0, XU.g)("BABYLON.ArcRotateCamera", sU))
  },
  39636: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.b
    });
    var tU = gU(39643);
    (0, tU.e)()
  },
  39643: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      e: () => jU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(36761),
      TU = gU(39645),
      qU = gU(39610),
      KU = gU(36639);
    let cU = (() => {
        var UU;
        let RU, gU, qU = TU.e,
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        return UU = class extends qU {
          constructor(UU, RU, gU, pU) {
            super(UU, gU, pU), this.groundColor = (0, tU.j)(this, KU, new PU.e(0, 0, 0)), this.direction = ((0, tU.j)(this, cU), (0, tU.j)(this, GU, void 0)), (0, tU.j)(this, jU), this.direction = RU || EU.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = EU.n.Normalize(UU.subtract(EU.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gU.x, gU.y, gU.z, 0, RU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RU), this
          }
          transferToNodeMaterialEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return UU.setFloat3(RU, gU.x, gU.y, gU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = EU.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return TU.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, RU) {
            UU["HEMILIGHT" + RU] = !0
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.l)()], gU = [(0, pU.I)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, RU) => {
                UU.groundColor = RU
              }
            },
            metadata: EU
          }, KU, cU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, RU) => {
                UU.direction = RU
              }
            },
            metadata: EU
          }, GU, jU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      GU = !1;

    function jU() {
      GU || (GU = !0, qU.b.AddNodeConstructor("Light_Type_3", ((UU, RU) => () => new cU(UU, EU.n.Zero(), RU))), (0, KU.g)("BABYLON.HemisphericLight", cU))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
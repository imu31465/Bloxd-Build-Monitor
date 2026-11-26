export const id = 289;
export const ids = [289];
export const modules = {
  42390: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => jH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37997),
      hH = LH(37963),
      tH = LH(38002),
      zH = LH(41498),
      CH = LH(41693),
      EH = LH(41458),
      XH = LH(41190),
      GH = LH(37972);
    class YH {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(HH) {
        this._zoomStopsAnimation = HH
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(HH) {
        this._idleRotationSpeed = HH
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(HH) {
        this._idleRotationWaitTime = HH
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(HH) {
        this._idleRotationSpinupTime = HH
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
      attach(HH) {
        this._attachedCamera = HH;
        const BH = this._attachedCamera.yN();
        this._onPrePointerObservableObserver = BH.onPrePointerObservable.add((HH => {
          HH.type !== EH.d.POINTERDOWN ? HH.type === EH.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = HH.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const HH = XH.e.Now;
          let BH = 0;
          null != this._lastFrameTime && (BH = HH - this._lastFrameTime), this._lastFrameTime = HH, this._applyUserInteraction();
          const LH = HH - this._lastInteractionTime - this._idleRotationWaitTime,
            AH = Math.max(Math.min(LH / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * AH, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (BH / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const HH = this._attachedCamera.yN();
        this._onPrePointerObservableObserver && HH.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(HH) {
        this._lastInteractionTime = HH ?? XH.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < GH.d
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let HH = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (HH = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? HH : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = XH.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    LH(42396);
    class uH {
      constructor() {
        this._easingMode = uH.EASINGMODE_EASEIN
      }
      setEasingMode(HH) {
        const BH = Math.min(Math.max(HH, 0), 2);
        this._easingMode = BH
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(HH) {
        throw new Error("You must implement this method")
      }
      ease(HH) {
        switch (this._easingMode) {
          case uH.EASINGMODE_EASEIN:
            return this.easeInCore(HH);
          case uH.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - HH)
        }
        return HH >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - HH))) + .5 : .5 * this.easeInCore(2 * HH)
      }
    }
    uH.EASINGMODE_EASEIN = 0, uH.EASINGMODE_EASEOUT = 1, uH.EASINGMODE_EASEINOUT = 2;
    var QH = LH(42398);
    class WH {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(HH) {
        if (this._autoTransitionRange === HH) return;
        this._autoTransitionRange = HH;
        const BH = this._attachedCamera;
        BH && (HH ? this._onMeshTargetChangedObserver = BH.onMeshTargetChangedObservable.add((HH => {
          if (HH && (HH.computeWorldMatrix(!0), HH.jF)) {
            const BH = HH.jF().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * BH, this.upperRadiusTransitionRange = .05 * BH
          }
        })) : this._onMeshTargetChangedObserver && BH.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(HH) {
        this._attachedCamera = HH, this._onAfterCheckInputsObserver = HH.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(HH) {
        return !!this._attachedCamera && (this._attachedCamera.radius === HH && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(HH) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (WH.EasingFunction.setEasingMode(WH.EasingMode), this._radiusBounceTransition = QH.b.CreateAnimation("radius", QH.b.ANIMATIONTYPE_FLOAT, 60, WH.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const BH = QH.b.TransitionTo("radius", this._attachedCamera.radius + HH, this._attachedCamera, this._attachedCamera.yN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        BH && this._animatables.push(BH)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    WH.EasingFunction = new class extends uH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = HH
      }
      easeInCore(HH) {
        const BH = Math.max(0, this.amplitude);
        return Math.pow(HH, 3) - HH * BH * Math.sin(3.141592653589793 * HH)
      }
    }(.3), WH.EasingMode = uH.EASINGMODE_EASEOUT;
    class MH {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new SH.d, this._mode = MH.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(HH) {
        this._mode = HH
      }
      get mode() {
        return this._mode
      }
      set radiusScale(HH) {
        this._radiusScale = HH
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(HH) {
        this._positionScale = HH
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(HH) {
        this._defaultElevation = HH
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(HH) {
        this._elevationReturnTime = HH
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(HH) {
        this._elevationReturnWaitTime = HH
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(HH) {
        this._zoomStopsAnimation = HH
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(HH) {
        this._framingTime = HH
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(HH) {
        this._attachedCamera = HH;
        const BH = this._attachedCamera.yN();
        MH.EasingFunction.setEasingMode(MH.EasingMode), this._onPrePointerObservableObserver = BH.onPrePointerObservable.add((HH => {
          HH.type !== EH.d.POINTERDOWN ? HH.type === EH.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = HH.onMeshTargetChangedObservable.add((HH => {
          HH && HH.jF && this.zoomOnMesh(HH, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = HH.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const HH = this._attachedCamera.yN();
        this._onPrePointerObservableObserver && HH.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        HH.computeWorldMatrix(!0);
        const AH = HH.jF().boundingBox;
        this.zoomOnBoundingInfo(AH.minimumWorld, AH.maximumWorld, BH, LH)
      }
      zoomOnMeshHierarchy(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        HH.computeWorldMatrix(!0);
        const AH = HH.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(AH.min, AH.max, BH, LH)
      }
      zoomOnMeshesHierarchy(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const AH = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          rH = new hH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let SH = 0; SH < HH.length; SH++) {
          const BH = HH[SH].getHierarchyBoundingVectors(!0);
          hH.o.CheckExtends(BH.min, AH, rH), hH.o.CheckExtends(BH.max, AH, rH)
        }
        this.zoomOnBoundingInfo(AH, rH, BH, LH)
      }
      zoomOnBoundingInfo(HH, BH) {
        let LH, AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const SH = HH.y,
          tH = SH + (BH.y - SH) * this._positionScale,
          zH = BH.subtract(HH).scale(.5);
        if (!isFinite(tH)) return !1;
        if (AH) LH = new hH.o(0, tH, 0);
        else {
          const BH = HH.add(zH);
          LH = new hH.o(BH.x, tH, BH.z)
        }
        this._vectorTransition || (this._vectorTransition = QH.b.CreateAnimation("target", QH.b.ANIMATIONTYPE_VECTOR3, 60, MH.EasingFunction)), this._betaIsAnimating = !0;
        let CH = QH.b.TransitionTo("target", LH, this._attachedCamera, this._attachedCamera.yN(), 60, this._vectorTransition, this._framingTime);
        CH && this._animatables.push(CH);
        let EH = 0;
        if (this._mode === MH.FitFrustumSidesMode) {
          const LH = this._calculateLowerRadiusFromModelBoundingSphere(HH, BH);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = zH.length() + this._attachedCamera.minZ), EH = LH
        } else this._mode === MH.IgnoreBoundsSizeMode && (EH = this._calculateLowerRadiusFromModelBoundingSphere(HH, BH), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const LH = BH.subtract(HH).length();
          this._attachedCamera.panningSensibility = 5e3 / LH, this._attachedCamera.wheelPrecision = 100 / EH
        }
        return this._radiusTransition || (this._radiusTransition = QH.b.CreateAnimation("radius", QH.b.ANIMATIONTYPE_FLOAT, 60, MH.EasingFunction)), CH = QH.b.TransitionTo("radius", EH, this._attachedCamera, this._attachedCamera.yN(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), rH && rH(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), CH && this._animatables.push(CH), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(HH, BH) {
        const LH = this._attachedCamera;
        if (!LH) return 0;
        let AH = LH._calculateLowerRadiusFromModelBoundingSphere(HH, BH, this._radiusScale);
        return LH.lowerRadiusLimit && this._mode === MH.IgnoreBoundsSizeMode && (AH = AH < LH.lowerRadiusLimit ? LH.lowerRadiusLimit : AH), LH.upperRadiusLimit && (AH = AH > LH.upperRadiusLimit ? LH.upperRadiusLimit : AH), AH
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const HH = XH.e.Now - this._lastInteractionTime,
          BH = .5 * Math.PI - this._defaultElevation,
          LH = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > LH && HH >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = QH.b.CreateAnimation("beta", QH.b.ANIMATIONTYPE_FLOAT, 60, MH.EasingFunction));
          const HH = QH.b.TransitionTo("beta", BH, this._attachedCamera, this._attachedCamera.yN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          HH && this._animatables.push(HH)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = XH.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    MH.EasingFunction = new class extends uH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = HH
      }
      easeInCore(HH) {
        return this.exponent <= 0 ? HH : (Math.exp(this.exponent * HH) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, MH.EasingMode = uH.EASINGMODE_EASEINOUT, MH.IgnoreBoundsSizeMode = 0, MH.FitFrustumSidesMode = 1;
    var xH = LH(41489),
      vH = LH(41483),
      PH = LH(41520),
      TH = LH(41387);
    let UH = (() => {
        var HH;
        let BH, LH = [],
          SH = [];
        return HH = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, AH.k)(this, LH, [0, 1, 2]), this._pointerInput = (0, AH.k)(this, SH)
          }
          attachControl(HH) {
            HH = TH.i.BackCompatCameraNoPreventDefault(arguments);
            const BH = this.camera.Iu(),
              LH = BH.getInputElement();
            let AH = 0,
              rH = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = SH => {
              const hH = SH.event,
                tH = "touch" === hH.pointerType;
              if (SH.type !== EH.d.POINTERMOVE && -1 === this.buttons.indexOf(hH.button)) return;
              const zH = hH.target;
              if (this._altKey = hH.altKey, this._ctrlKey = hH.ctrlKey, this._metaKey = hH.metaKey, this._shiftKey = hH.shiftKey, this._buttonsPressed = hH.buttons, BH.isPointerLock) {
                const HH = hH.movementX,
                  BH = hH.movementY;
                this.onTouch(null, HH, BH), this._pointA = null, this._pointB = null
              } else {
                if (SH.type !== EH.d.POINTERDOWN && SH.type !== EH.d.POINTERDOUBLETAP && tH && this._pointA?.pointerId !== hH.pointerId && this._pointB?.pointerId !== hH.pointerId) return;
                if (SH.type !== EH.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !tH)
                  if (SH.type === EH.d.POINTERDOUBLETAP) this.onDoubleTap(hH.pointerType, hH);
                  else if (SH.type !== EH.d.POINTERUP || this._currentMousePointerIdDown !== hH.pointerId && !tH) {
                  if (SH.type === EH.d.POINTERMOVE)
                    if (HH || hH.preventDefault(), this._pointA && null === this._pointB) {
                      const HH = hH.clientX - this._pointA.x,
                        BH = hH.clientY - this._pointA.y;
                      this._pointA.x = hH.clientX, this._pointA.y = hH.clientY, this.onTouch(this._pointA, HH, BH)
                    } else if (this._pointA && this._pointB) {
                    const HH = this._pointA.pointerId === hH.pointerId ? this._pointA : this._pointB;
                    HH.x = hH.clientX, HH.y = hH.clientY;
                    const BH = this._pointA.x - this._pointB.x,
                      LH = this._pointA.y - this._pointB.y,
                      tH = BH * BH + LH * LH,
                      zH = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: hH.pointerId,
                        type: SH.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, AH, tH, rH, zH), rH = zH, AH = tH
                  }
                } else {
                  try {
                    zH?.releasePointerCapture(hH.pointerId)
                  } catch (CH) {}
                  tH || (this._pointB = null), BH._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == hH.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == hH.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== AH || rH) && (this.onMultiTouch(this._pointA, this._pointB, AH, 0, rH, null), AH = 0, rH = null), this._currentMousePointerIdDown = -1, this.onButtonUp(hH), HH || hH.preventDefault()
                } else {
                  try {
                    zH?.setPointerCapture(hH.pointerId)
                  } catch (CH) {}
                  if (null === this._pointA) this._pointA = {
                    x: hH.clientX,
                    y: hH.clientY,
                    pointerId: hH.pointerId,
                    type: hH.pointerType,
                    button: hH.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: hH.clientX,
                      y: hH.clientY,
                      pointerId: hH.pointerId,
                      type: hH.pointerType,
                      button: hH.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || tH || (this._currentMousePointerIdDown = hH.pointerId), this.onButtonDown(hH), HH || (hH.preventDefault(), LH && LH.focus())
                }
              }
            }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, EH.d.POINTERDOWN | EH.d.POINTERUP | EH.d.POINTERMOVE | EH.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, AH = 0, rH = null, this.onLostFocus()
            }, this._contextMenuBind = HH => this.onContextMenu(HH), LH && LH.addEventListener("contextmenu", this._contextMenuBind, !1);
            const SH = this.camera.yN().Iu().getHostWindow();
            SH && TH.i.RegisterTopRootEvents(SH, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const HH = this.camera.yN().Iu().getHostWindow();
              HH && TH.i.UnregisterTopRootEvents(HH, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const HH = this.camera.yN().Iu().getInputElement();
                HH && HH.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(HH, BH) {}
          onTouch(HH, BH, LH) {}
          onMultiTouch(HH, BH, LH, AH, rH, SH) {}
          onContextMenu(HH) {
            HH.preventDefault()
          }
          onButtonDown(HH) {}
          onButtonUp(HH) {}
          onLostFocus() {}
        }, (() => {
          const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          BH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: HH => "buttons" in HH,
              get: HH => HH.buttons,
              set: (HH, BH) => {
                HH.buttons = BH
              }
            },
            metadata: hH
          }, LH, SH), hH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hH
          })
        })(), HH
      })(),
      VH = (() => {
        var HH;
        let BH, LH, SH, hH = UH,
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        return HH = class extends hH {
          constructor() {
            super(...arguments), this.pinchZoom = (0, AH.k)(this, tH, !0), this.multiTouchPanning = ((0, AH.k)(this, zH), (0, AH.k)(this, CH, !0)), this.multiTouchPanAndZoom = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, !0)), this._isPinching = ((0, AH.k)(this, GH), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(HH, BH) {}
          _computeMultiTouchPanning(HH, BH) {}
          onMultiTouch(HH, BH, LH, AH, rH, SH) {
            0 === LH && null === rH || 0 === AH && null === SH || (this.multiTouchPanAndZoom ? (this._computePinchZoom(LH, AH), this._computeMultiTouchPanning(rH, SH)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(LH, AH), this._isPinching = !0) : this._computeMultiTouchPanning(rH, SH)) : this.multiTouchPanning ? this._computeMultiTouchPanning(rH, SH) : this.pinchZoom && this._computePinchZoom(LH, AH))
          }
          onButtonUp(HH) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(hH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: HH => "pinchZoom" in HH,
              get: HH => HH.pinchZoom,
              set: (HH, BH) => {
                HH.pinchZoom = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: HH => "multiTouchPanning" in HH,
              get: HH => HH.multiTouchPanning,
              set: (HH, BH) => {
                HH.multiTouchPanning = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, AH.g)(null, null, SH, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: HH => "multiTouchPanAndZoom" in HH,
              get: HH => HH.multiTouchPanAndZoom,
              set: (HH, BH) => {
                HH.multiTouchPanAndZoom = BH
              }
            },
            metadata: YH
          }, XH, GH), YH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          })
        })(), HH
      })(),
      OH = (() => {
        var HH;
        let BH, LH, SH, hH, tH, zH, CH, EH = VH,
          XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [],
          MH = [],
          xH = [],
          vH = [],
          PH = [],
          TH = [],
          UH = [],
          OH = [],
          bH = [];
        return HH = class extends EH {
          constructor() {
            super(...arguments), this.buttons = (0, AH.k)(this, XH, [0, 1, 2]), this.angularSensibilityX = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, 1e3)), this.angularSensibilityY = ((0, AH.k)(this, uH), (0, AH.k)(this, QH, 1e3)), this.pinchPrecision = ((0, AH.k)(this, WH), (0, AH.k)(this, MH, 12)), this.pinchDeltaPercentage = ((0, AH.k)(this, xH), (0, AH.k)(this, vH, 0)), this.useNaturalPinchZoom = ((0, AH.k)(this, PH), (0, AH.k)(this, TH, !1)), this.panningSensibility = ((0, AH.k)(this, UH), (0, AH.k)(this, OH, 1e3)), this.pinchInwards = ((0, AH.k)(this, bH), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(HH, BH) {
            if (HH && BH) {
              const LH = BH.x - HH.x,
                AH = BH.y - HH.y,
                rH = this.camera.movement.input.getEntry("pointer", "pan"),
                SH = rH?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== SH && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -LH * SH, this.camera.movement.panAccumulatedPixels.y += AH * SH)
            }
          }
          _computePinchZoom(BH, LH) {
            const AH = this.camera.radius || HH.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = AH * Math.sqrt(BH) / Math.sqrt(LH);
            else if (this.pinchDeltaPercentage) {
              const HH = .001 * (LH - BH) * AH * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += HH
            } else {
              const HH = (LH - BH) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += HH
            }
          }
          onTouch(HH, BH, LH) {
            const AH = this._activeEntry ?? (this.camera.Iu().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (AH)
              if ("pan" === AH.interaction) {
                const HH = AH.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== HH && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -BH * HH, this.camera.movement.panAccumulatedPixels.y += LH * HH)
              } else if ("rotate" === AH.interaction) {
              const HH = AH.Fy ?? AH.sensitivity ?? 1 / this.angularSensibilityX,
                rH = AH.I6 ?? AH.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -BH * HH, this.camera.movement.rotationAccumulatedPixels.y += -LH * rH
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(HH, BH, LH, AH, rH, SH) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(AH) - Math.sqrt(LH)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(HH, BH, LH, AH, rH, SH)
          }
          onButtonDown(HH) {
            this._pointerConditions.button = HH.button, this._pointerModifiers.ctrl = HH.ctrlKey, this._pointerModifiers.alt = HH.altKey, this._pointerModifiers.shift = HH.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(HH)
          }
          onButtonUp(HH) {
            this._activeEntry = null, super.onButtonUp(HH)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const VH = "function" === typeof Symbol && Symbol.metadata ? Object.create(EH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: HH => "buttons" in HH,
              get: HH => HH.buttons,
              set: (HH, BH) => {
                HH.buttons = BH
              }
            },
            metadata: VH
          }, XH, GH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: HH => "angularSensibilityX" in HH,
              get: HH => HH.angularSensibilityX,
              set: (HH, BH) => {
                HH.angularSensibilityX = BH
              }
            },
            metadata: VH
          }, YH, uH), (0, AH.g)(null, null, SH, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: HH => "angularSensibilityY" in HH,
              get: HH => HH.angularSensibilityY,
              set: (HH, BH) => {
                HH.angularSensibilityY = BH
              }
            },
            metadata: VH
          }, QH, WH), (0, AH.g)(null, null, hH, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: HH => "pinchPrecision" in HH,
              get: HH => HH.pinchPrecision,
              set: (HH, BH) => {
                HH.pinchPrecision = BH
              }
            },
            metadata: VH
          }, MH, xH), (0, AH.g)(null, null, tH, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: HH => "pinchDeltaPercentage" in HH,
              get: HH => HH.pinchDeltaPercentage,
              set: (HH, BH) => {
                HH.pinchDeltaPercentage = BH
              }
            },
            metadata: VH
          }, vH, PH), (0, AH.g)(null, null, zH, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: HH => "useNaturalPinchZoom" in HH,
              get: HH => HH.useNaturalPinchZoom,
              set: (HH, BH) => {
                HH.useNaturalPinchZoom = BH
              }
            },
            metadata: VH
          }, TH, UH), (0, AH.g)(null, null, CH, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: HH => "panningSensibility" in HH,
              get: HH => HH.panningSensibility,
              set: (HH, BH) => {
                HH.panningSensibility = BH
              }
            },
            metadata: VH
          }, OH, bH), VH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VH
          })
        })(), HH.MinimumRadiusForPinch = .001, HH
      })();
    PH.c.ArcRotateCameraPointersInput = OH;
    var bH = LH(41464);
    let kH = (() => {
      var HH;
      let BH, LH, SH, tH, zH, CH, EH, XH, GH, YH, uH, QH = [],
        WH = [],
        MH = [],
        xH = [],
        vH = [],
        PH = [],
        UH = [],
        VH = [],
        OH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [];
      return HH = class {
        constructor() {
          this.camera = (0, AH.k)(this, QH), this.keysUp = (0, AH.k)(this, WH, [38]), this.keysDown = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, [40])), this.keysLeft = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, [37])), this.keysRight = ((0, AH.k)(this, UH), (0, AH.k)(this, VH, [39])), this.keysReset = ((0, AH.k)(this, OH), (0, AH.k)(this, kH, [220])), this.keysZoomIn = ((0, AH.k)(this, mH), (0, AH.k)(this, oH, [187, 107])), this.keysZoomOut = ((0, AH.k)(this, IH), (0, AH.k)(this, fH, [189, 109])), this.panningSensibility = ((0, AH.k)(this, lH), (0, AH.k)(this, KH, 50)), this.zoomingSensibility = ((0, AH.k)(this, cH), (0, AH.k)(this, eH, 25)), this.angularSpeed = ((0, AH.k)(this, qH), (0, AH.k)(this, gH, .01)), this._useAltToZoom = ((0, AH.k)(this, NH), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new hH.n, this._panDirection = new hH.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(HH) {
          this._useAltToZoom = HH, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const HH = this.camera.movement.input,
            BH = HH.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && BH ? HH.inputMap.splice(HH.inputMap.indexOf(BH), 1) : this._useAltToZoom && !BH && HH.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(HH) {
          HH = TH.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.yN(), this._engine = this._scene.Iu(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((BH => {
            const LH = BH.event;
            if (!LH.metaKey)
              if (BH.type === bH.c.KEYDOWN) {
                if (this._ctrlPressed = LH.ctrlKey, this._altPressed = LH.altKey, -1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysReset.indexOf(LH.keyCode) || -1 !== this.keysZoomIn.indexOf(LH.keyCode) || -1 !== this.keysZoomOut.indexOf(LH.keyCode)) {
                  -1 === this._keys.indexOf(LH.keyCode) && this._keys.push(LH.keyCode), LH.preventDefault && (HH || LH.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysReset.indexOf(LH.keyCode) || -1 !== this.keysZoomIn.indexOf(LH.keyCode) || -1 !== this.keysZoomOut.indexOf(LH.keyCode)) {
              const BH = this._keys.indexOf(LH.keyCode);
              BH >= 0 && this._keys.splice(BH, 1), LH.preventDefault && (HH || LH.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const HH = this.camera,
              BH = HH.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const LH = this._rotateDirection.set(0, 0),
              AH = this._panDirection.set(0, 0);
            let rH = 0,
              SH = 0;
            for (let hH = 0; hH < this._keys.length; hH++) {
              const tH = this._keys[hH];
              if (this._keyboardConditions.key = tH, -1 === this.keysReset.indexOf(tH)) {
                const HH = BH.resolveInteraction("keyboard", this._keyboardConditions);
                if (HH)
                  if ("pan" === HH.interaction) SH = Math.max(SH, HH.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(tH) ? AH.x -= 1 : -1 !== this.keysRight.indexOf(tH) ? AH.x += 1 : -1 !== this.keysUp.indexOf(tH) ? AH.y += 1 : -1 !== this.keysDown.indexOf(tH) && (AH.y -= 1);
                  else if ("zoom" === HH.interaction) {
                  const LH = HH.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(tH) || -1 !== this.keysZoomIn.indexOf(tH) ? BH.handlers.zoom(LH) : -1 === this.keysDown.indexOf(tH) && -1 === this.keysZoomOut.indexOf(tH) || BH.handlers.zoom(-LH)
                } else "rotate" === HH.interaction && (rH = Math.max(rH, HH.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(tH) ? LH.x -= 1 : -1 !== this.keysRight.indexOf(tH) ? LH.x += 1 : -1 !== this.keysUp.indexOf(tH) ? LH.y -= 1 : -1 !== this.keysDown.indexOf(tH) && (LH.y += 1))
              } - 1 !== this.keysReset.indexOf(tH) && HH.useInputToRestoreState && HH.restoreState()
            }
            0 === LH.x && 0 === LH.y || (LH.normalize().scaleInPlace(rH), BH.handlers.rotate(LH.x, LH.y)), 0 === AH.x && 0 === AH.y || (AH.normalize().scaleInPlace(SH), BH.handlers.pan(AH.x, AH.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], (0, AH.g)(HH, null, uH, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAltToZoom" in HH,
            get: HH => HH.useAltToZoom
          },
          metadata: hH
        }, null, QH), (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysUp" in HH,
            get: HH => HH.keysUp,
            set: (HH, BH) => {
              HH.keysUp = BH
            }
          },
          metadata: hH
        }, WH, MH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysDown" in HH,
            get: HH => HH.keysDown,
            set: (HH, BH) => {
              HH.keysDown = BH
            }
          },
          metadata: hH
        }, xH, vH), (0, AH.g)(null, null, SH, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysLeft" in HH,
            get: HH => HH.keysLeft,
            set: (HH, BH) => {
              HH.keysLeft = BH
            }
          },
          metadata: hH
        }, PH, UH), (0, AH.g)(null, null, tH, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysRight" in HH,
            get: HH => HH.keysRight,
            set: (HH, BH) => {
              HH.keysRight = BH
            }
          },
          metadata: hH
        }, VH, OH), (0, AH.g)(null, null, zH, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysReset" in HH,
            get: HH => HH.keysReset,
            set: (HH, BH) => {
              HH.keysReset = BH
            }
          },
          metadata: hH
        }, kH, mH), (0, AH.g)(null, null, CH, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysZoomIn" in HH,
            get: HH => HH.keysZoomIn,
            set: (HH, BH) => {
              HH.keysZoomIn = BH
            }
          },
          metadata: hH
        }, oH, IH), (0, AH.g)(null, null, EH, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: HH => "keysZoomOut" in HH,
            get: HH => HH.keysZoomOut,
            set: (HH, BH) => {
              HH.keysZoomOut = BH
            }
          },
          metadata: hH
        }, fH, lH), (0, AH.g)(null, null, XH, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: HH => "panningSensibility" in HH,
            get: HH => HH.panningSensibility,
            set: (HH, BH) => {
              HH.panningSensibility = BH
            }
          },
          metadata: hH
        }, KH, cH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: HH => "zoomingSensibility" in HH,
            get: HH => HH.zoomingSensibility,
            set: (HH, BH) => {
              HH.zoomingSensibility = BH
            }
          },
          metadata: hH
        }, eH, qH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: HH => "angularSpeed" in HH,
            get: HH => HH.angularSpeed,
            set: (HH, BH) => {
              HH.angularSpeed = BH
            }
          },
          metadata: hH
        }, gH, NH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        })
      })(), HH
    })();
    PH.c.ArcRotateCameraKeyboardMoveInput = kH;
    var mH = LH(38619),
      oH = LH(41466);
    let IH = (() => {
      var HH;
      let BH, LH, SH, zH = [],
        CH = [],
        XH = [],
        YH = [],
        uH = [],
        QH = [];
      return HH = class {
        constructor() {
          this.wheelPrecision = (0, AH.k)(this, zH, 3), this.zoomToMouseLocation = ((0, AH.k)(this, CH), (0, AH.k)(this, XH, !1)), this.wheelDeltaPercentage = ((0, AH.k)(this, YH), (0, AH.k)(this, uH, 0)), this.customComputeDeltaFromMouseWheel = ((0, AH.k)(this, QH), null), this._viewOffset = new hH.o(0, 0, 0), this._globalOffset = new hH.o(0, 0, 0), this._inertialPanning = hH.o.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(HH, BH) {
          let LH;
          const AH = .01 * HH * this.wheelDeltaPercentage * BH;
          return LH = HH > 0 ? AH / (1 + this.wheelDeltaPercentage) : AH * (1 + this.wheelDeltaPercentage), LH
        }
        attachControl(HH) {
          HH = TH.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = BH => {
            if (BH.type !== EH.d.POINTERWHEEL) return;
            const LH = BH.event;
            let AH;
            const rH = LH.deltaMode === oH.d.DOM_DELTA_LINE ? 40 : 1,
              SH = -LH.deltaY * rH;
            if (this.customComputeDeltaFromMouseWheel) AH = this.customComputeDeltaFromMouseWheel(SH, this, LH);
            else if (this.wheelDeltaPercentage) {
              if (AH = this._computeDeltaFromMouseWheelLegacyEvent(SH, this.camera.radius), AH > 0) {
                const HH = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let BH = this.camera.radius,
                  LH = HH + AH;
                for (let AH = 0; AH < 20 && !(BH <= LH) && !(Math.abs(LH * this.camera.inertia) < .001); AH++) BH -= LH, LH *= this.camera.inertia;
                BH = (0, tH.Clamp)(BH, 0, Number.MAX_VALUE), AH = this._computeDeltaFromMouseWheelLegacyEvent(SH, BH)
              }
            } else {
              const HH = this.camera.movement.input.getEntry("wheel", "zoom");
              AH = SH * (HH?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            AH && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(AH)) : this.camera.movement.zoomAccumulatedPixels += AH), LH.preventDefault && (HH || LH.preventDefault())
          }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._wheel, EH.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.IHH(0)
        }
        detachControl() {
          this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const HH = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(HH.inertialAlphaOffset) + Math.abs(HH.inertialBetaOffset) + Math.abs(HH.inertialRadiusOffset)) {
            this._updateHitPlane(), HH.target.addInPlace(this._inertialPanning), HH.radius -= this._zoomToMouseRadiusOffset;
            const BH = HH.movement.getFrameIndependentDecay(HH.inertia);
            this._inertialPanning.scaleInPlace(BH), this._zoomToMouseRadiusOffset *= BH, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < GH.d && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const HH = this.camera,
            BH = HH.target.subtract(HH.position);
          this._hitPlane = mH.d.FromPositionAndNormal(HH.target, BH)
        }
        _getPosition() {
          const HH = this.camera,
            BH = HH.yN(),
            LH = BH.createPickingRay(BH.pointerX, BH.pointerY, hH.e.Identity(), HH, !1);
          0 === HH.targetScreenOffset.x && 0 === HH.targetScreenOffset.y || (this._viewOffset.set(HH.targetScreenOffset.x, HH.targetScreenOffset.y, 0), HH.getViewMatrix().invertToRef(HH._cameraTransformMatrix), this._globalOffset = hH.o.TransformNormal(this._viewOffset, HH._cameraTransformMatrix), LH.origin.addInPlace(this._globalOffset));
          let AH = 0;
          return this._hitPlane && (AH = LH.intersectsPlane(this._hitPlane) ?? 0), LH.origin.addInPlace(LH.direction.scaleInPlace(AH))
        }
        _zoomToMouse(HH) {
          const BH = this.camera,
            LH = 1 - BH.inertia,
            AH = BH.movement.getFrameIndependentInputScale(BH.inertia);
          if (BH.lowerRadiusLimit) {
            const rH = BH.lowerRadiusLimit ?? 0;
            BH.radius - (this._zoomToMouseRadiusOffset + HH * AH) / LH < rH && (HH = ((BH.radius - rH) * LH - this._zoomToMouseRadiusOffset) / AH)
          }
          if (BH.upperRadiusLimit) {
            const rH = BH.upperRadiusLimit ?? 0;
            BH.radius - (this._zoomToMouseRadiusOffset + HH * AH) / LH > rH && (HH = ((BH.radius - rH) * LH - this._zoomToMouseRadiusOffset) / AH)
          }
          const rH = HH / LH / BH.radius,
            SH = this._getPosition(),
            tH = hH.l.lu[6];
          SH.subtractToRef(BH.target, tH), tH.scaleInPlace(rH), tH.scaleInPlace(LH), tH.scaleInPlace(AH), this._inertialPanning.addInPlace(tH), this._zoomToMouseRadiusOffset += HH * AH
        }
        _zeroIfClose(HH) {
          Math.abs(HH.x) < GH.d && (HH.x = 0), Math.abs(HH.y) < GH.d && (HH.y = 0), Math.abs(HH.z) < GH.d && (HH.z = 0)
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelPrecision" in HH,
            get: HH => HH.wheelPrecision,
            set: (HH, BH) => {
              HH.wheelPrecision = BH
            }
          },
          metadata: hH
        }, zH, CH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: HH => "zoomToMouseLocation" in HH,
            get: HH => HH.zoomToMouseLocation,
            set: (HH, BH) => {
              HH.zoomToMouseLocation = BH
            }
          },
          metadata: hH
        }, XH, YH), (0, AH.g)(null, null, SH, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: HH => "wheelDeltaPercentage" in HH,
            get: HH => HH.wheelDeltaPercentage,
            set: (HH, BH) => {
              HH.wheelDeltaPercentage = BH
            }
          },
          metadata: hH
        }, uH, QH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        })
      })(), HH
    })();
    PH.c.ArcRotateCameraMouseWheelInput = IH;
    var fH, lH, KH = LH(41169);
    class cH extends PH.e {
      constructor(HH) {
        super(HH)
      }
      addMouseWheel() {
        return this.add(new IH), this
      }
      addPointers() {
        return this.add(new OH), this
      }
      addKeyboard() {
        return this.add(new kH), this
      }
    }(fH = cH.prototype).addVRDeviceOrientation ?? (fH.addVRDeviceOrientation = (0, KH.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lH = cH.prototype).addGamepad ?? (lH.addGamepad = (0, KH.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var eH = LH(38012),
      qH = LH(41509),
      gH = LH(41516);
    class NH extends qH.d {
      constructor(HH, BH, LH) {
        super(HH, BH, LH), this.input = new gH.e({
          pan: (HH, BH) => {
            this.panAccumulatedPixels.x += HH, this.panAccumulatedPixels.y += BH
          },
          rotate: (HH, BH) => {
            this.rotationAccumulatedPixels.x += HH, this.rotationAccumulatedPixels.y += BH
          },
          zoom: HH => {
            this.zoomAccumulatedPixels += HH
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

    function RH(HH, BH) {
      return isNaN(HH) ? BH : HH
    }
    let jH = (() => {
        var HH;
        let BH, LH, zH, EH, XH, uH, QH, PH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, eH, qH, gH, jH, nH, FH, DH, wH, ZH, dH = vH.e,
          aH = [],
          sH = [],
          JH = [],
          iH = [],
          pH = [],
          yH = [],
          HB = [],
          BB = [],
          LB = [],
          AB = [],
          rB = [],
          SB = [],
          hB = [],
          tB = [],
          zB = [],
          CB = [],
          EB = [],
          XB = [],
          GB = [],
          YB = [],
          uB = [],
          QB = [],
          WB = [],
          MB = [],
          xB = [],
          vB = [],
          PB = [],
          TB = [],
          UB = [],
          VB = [],
          OB = [],
          bB = [],
          kB = [],
          mB = [],
          oB = [],
          IB = [],
          fB = [],
          lB = [],
          KB = [],
          cB = [],
          eB = [],
          qB = [],
          gB = [],
          NB = [],
          RB = [],
          jB = [],
          nB = [];
        return HH = class extends dH {
          get target() {
            return this.fX
          }
          set target(HH) {
            this.setTarget(HH)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(HH) {
            HH && this.setTarget(HH)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(HH) {
            this.setPosition(HH)
          }
          set upVector(HH) {
            this._upToYMatrix || (this._yToUpMatrix = new hH.e, this._upToYMatrix = new hH.e, this._upVector = hH.o.Zero()), HH.normalize(), this._upVector.Tm(HH), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            hH.e.RotationAlignToRef(hH.o.UpReadOnly, this._upVector, this._yToUpMatrix), hH.e.RotationAlignToRef(this._upVector, hH.o.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const HH = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(HH) < this._rotationEpsilon ? 0 : HH
          }
          set inertialAlphaOffset(HH) {
            this._inertialAlphaOffset = HH, 0 === HH && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const HH = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(HH) < this._rotationEpsilon ? 0 : HH
          }
          set inertialBetaOffset(HH) {
            this._inertialBetaOffset = HH, 0 === HH && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const HH = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(HH) < this._rotationEpsilon ? 0 : HH
          }
          set inertialRadiusOffset(HH) {
            this._inertialRadiusOffset = HH, 0 === HH && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(HH) {
            this._panningInertia = HH, this.movement && (this.movement.panInertia = HH)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(HH) {
            this._inertia = HH, this.movement && (this.movement.rotationInertia = HH, this.movement.zoomInertia = HH)
          }
          get angularSensibilityX() {
            const HH = this.inputs.attached.pointers;
            return HH ? HH.angularSensibilityX : 0
          }
          set angularSensibilityX(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.angularSensibilityX = HH)
          }
          get angularSensibilityY() {
            const HH = this.inputs.attached.pointers;
            return HH ? HH.angularSensibilityY : 0
          }
          set angularSensibilityY(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.angularSensibilityY = HH)
          }
          get pinchPrecision() {
            const HH = this.inputs.attached.pointers;
            return HH ? HH.pinchPrecision : 0
          }
          set pinchPrecision(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.pinchPrecision = HH)
          }
          get pinchDeltaPercentage() {
            const HH = this.inputs.attached.pointers;
            return HH ? HH.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.pinchDeltaPercentage = HH)
          }
          get useNaturalPinchZoom() {
            const HH = this.inputs.attached.pointers;
            return !!HH && HH.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.useNaturalPinchZoom = HH)
          }
          get panningSensibility() {
            const HH = this.inputs.attached.pointers;
            return HH ? HH.panningSensibility : 0
          }
          set panningSensibility(HH) {
            const BH = this.inputs.attached.pointers;
            BH && (BH.panningSensibility = HH)
          }
          get keysUp() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysUp : []
          }
          set keysUp(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysUp = HH)
          }
          get keysDown() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysDown : []
          }
          set keysDown(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysDown = HH)
          }
          get keysLeft() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysLeft : []
          }
          set keysLeft(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysLeft = HH)
          }
          get keysRight() {
            const HH = this.inputs.attached.keyboard;
            return HH ? HH.keysRight : []
          }
          set keysRight(HH) {
            const BH = this.inputs.attached.keyboard;
            BH && (BH.keysRight = HH)
          }
          get wheelPrecision() {
            const HH = this.inputs.attached.mousewheel;
            return HH ? HH.wheelPrecision : 0
          }
          set wheelPrecision(HH) {
            const BH = this.inputs.attached.mousewheel;
            BH && (BH.wheelPrecision = HH)
          }
          get zoomToMouseLocation() {
            const HH = this.inputs.attached.mousewheel;
            return !!HH && HH.zoomToMouseLocation
          }
          set zoomToMouseLocation(HH) {
            const BH = this.inputs.attached.mousewheel;
            BH && (BH.zoomToMouseLocation = HH)
          }
          get wheelDeltaPercentage() {
            const HH = this.inputs.attached.mousewheel;
            return HH ? HH.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(HH) {
            const BH = this.inputs.attached.mousewheel;
            BH && (BH.wheelDeltaPercentage = HH)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(HH) {
            this._useCtrlForPanningInternal = HH;
            const BH = this.movement.input,
              LH = BH.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !HH && LH ? BH.inputMap.splice(BH.inputMap.indexOf(LH), 1) : HH && !LH && BH.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const AH = BH.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !HH && AH ? BH.inputMap.splice(BH.inputMap.indexOf(AH), 1) : HH && !AH && BH.addEntry({
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
          set _panningMouseButton(HH) {
            this._panningMouseButtonInternal = HH;
            const BH = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            BH && (BH.button = HH)
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
          set useBouncingBehavior(HH) {
            HH !== this.useBouncingBehavior && (HH ? (this._bouncingBehavior = new WH, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(HH) {
            HH !== this.useFramingBehavior && (HH ? (this._framingBehavior = new MH, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(HH) {
            HH !== this.useAutoRotationBehavior && (HH ? (this._autoRotationBehavior = new YH, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(HH, BH, LH, rH, tH, zH) {
            var CH;
            let EH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(HH, hH.o.Zero(), zH, EH), CH = this, this.alpha = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, void 0)), this.beta = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, void 0)), this.radius = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, void 0)), this.overrideCloneAlphaBetaRadius = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, void 0)), this.fX = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, void 0)), this._targetHost = ((0, AH.k)(this, rB), (0, AH.k)(this, SB, void 0)), this._upToYMatrix = (0, AH.k)(this, hB), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, AH.k)(this, tB, null), this.upperAlphaLimit = ((0, AH.k)(this, zB), (0, AH.k)(this, CB, null)), this.lowerBetaLimit = ((0, AH.k)(this, EB), (0, AH.k)(this, XB, .01)), this.upperBetaLimit = ((0, AH.k)(this, GB), (0, AH.k)(this, YB, Math.PI - .01)), this.lowerRadiusLimit = ((0, AH.k)(this, uB), (0, AH.k)(this, QB, null)), this.upperRadiusLimit = ((0, AH.k)(this, WB), (0, AH.k)(this, MB, null)), this.lowerTargetYLimit = ((0, AH.k)(this, xB), (0, AH.k)(this, vB, -1 / 0)), this.inertialPanningX = ((0, AH.k)(this, PB), (0, AH.k)(this, TB, 0)), this.inertialPanningY = ((0, AH.k)(this, UB), (0, AH.k)(this, VB, 0)), this.pinchToPanMaxDistance = ((0, AH.k)(this, OB), (0, AH.k)(this, bB, 20)), this.panningDistanceLimit = ((0, AH.k)(this, kB), (0, AH.k)(this, mB, null)), this.panningOriginTarget = ((0, AH.k)(this, oB), (0, AH.k)(this, IB, hH.o.Zero())), this._panningInertia = ((0, AH.k)(this, fB), .9), this._inertia = .9, this.zoomOnFactor = (0, AH.k)(this, lB, 1), this.targetScreenOffset = ((0, AH.k)(this, KB), (0, AH.k)(this, cB, hH.n.Zero())), this.allowUpsideDown = ((0, AH.k)(this, eB), (0, AH.k)(this, qB, !0)), this.useInputToRestoreState = ((0, AH.k)(this, gB), (0, AH.k)(this, NB, !0)), this.restoreStateInterpolationFactor = ((0, AH.k)(this, RB), (0, AH.k)(this, jB, 0)), this._currentInterpolationFactor = ((0, AH.k)(this, nB), 0), this._viewMatrix = new hH.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new hH.o(1, 1, 0), this._transformedDirection = new hH.o, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new SH.d, this.checkCollisions = !1, this.collisionRadius = new hH.o(.5, .5, .5), this._previousPosition = hH.o.Zero(), this._collisionVelocity = hH.o.Zero(), this._newPosition = hH.o.Zero(), this._computationVector = hH.o.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new hH.o(NaN, NaN, NaN), this._goalTargetScreenOffset = new hH.n(NaN, NaN), this._onCollisionPositionChange = function(HH, BH) {
              let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              LH ? (CH.setPosition(BH), CH.fG && CH.fG(LH)) : CH._previousPosition.Tm(CH._position);
              const AH = Math.cos(CH.alpha),
                rH = Math.sin(CH.alpha),
                SH = Math.cos(CH.beta);
              let hH = Math.sin(CH.beta);
              0 === hH && (hH = 1e-4);
              const tH = CH._getTargetPosition();
              CH._computationVector.SBH(CH.radius * AH * hH, CH.radius * SH, CH.radius * rH * hH), tH.addToRef(CH._computationVector, CH._newPosition), CH._position.Tm(CH._newPosition);
              let zH = CH.upVector;
              CH.allowUpsideDown && CH.beta < 0 && (zH = zH.clone(), zH = zH.du()), CH._computeViewMatrix(CH._position, tH, zH), CH._viewMatrix.addAtIndex(12, CH.targetScreenOffset.x), CH._viewMatrix.addAtIndex(13, CH.targetScreenOffset.y), CH._collisionTriggered = !1
            }, this.fX = hH.o.Zero(), tH && this.setTarget(tH), this.alpha = BH, this.beta = LH, this.radius = rH, this.getViewMatrix(), this.inputs = new cH(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new NH(this.yN(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.fX = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = hH.n.Zero()
          }
          _updateCache(HH) {
            HH || super._updateCache(), this._cache.fX.Tm(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Tm(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const HH = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? HH.addToRef(this._targetBoundingCenter, this.fX) : this.fX.Tm(HH)
            }
            const HH = this._getLockedTargetPosition();
            return HH || this.fX
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > GH.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              SH = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != SH ? this._currentInterpolationFactor = SH : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = RH(HH, this._goalAlpha), this._goalBeta = RH(BH, this._goalBeta), this._goalRadius = RH(LH, this._goalRadius), this._goalTarget.set(RH(AH.x, this._goalTarget.x), RH(AH.y, this._goalTarget.y), RH(AH.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(RH(rH.x, this._goalTargetScreenOffset.x), RH(rH.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, tH.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, tH.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, tH.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, tH.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.fX.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(HH, BH) {
            let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const rH = arguments;
            BH = TH.i.BackCompatCameraNoPreventDefault(rH), this._useCtrlForPanning = LH, this._panningMouseButton = AH, "boolean" === typeof rH[0] && (rH.length > 1 && (this._useCtrlForPanning = rH[1]), rH.length > 2 && (this._panningMouseButton = rH[2])), this.inputs.attachElement(BH), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(HH, BH, LH) {
            const AH = this.invertRotation ? -1 : 1;
            let rH = HH * this._calculateHandednessMultiplier();
            this.beta < 0 && (rH *= -1), this.alpha += rH * AH, this.beta += BH * AH, this.radius -= LH
          }
          _applyPanDelta(HH, BH) {
            const LH = hH.l.lu[0].SBH(HH, BH, BH);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), LH.multiplyInPlace(this.panningAxis), hH.o.TransformNormalToRef(LH, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const HH = this.upVector,
                BH = hH.o.CrossToRef(this._transformedDirection, HH, this._transformedDirection);
              hH.o.CrossToRef(HH, BH, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.fX);
                hH.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.fX.Tm(this._transformedDirection)
              } else {
                if (this.parent) {
                  const HH = hH.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(HH), HH.transposeToRef(HH), hH.o.TransformCoordinatesToRef(this._transformedDirection, HH, this._transformedDirection)
                }
                this.fX.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let HH = !1;
            this.movement.computeCurrentFrameDeltas();
            const BH = this.movement.rotationDeltaCurrentFrame,
              LH = this.movement.zoomDeltaCurrentFrame,
              AH = this.movement.panDeltaCurrentFrame;
            if (0 === BH.x && 0 === BH.y && 0 === LH && 0 === AH.x && 0 === AH.y || (HH = !0, 0 === BH.x && 0 === BH.y && 0 === LH || this._applyRotationAndZoomDelta(BH.x, BH.y, LH), 0 === AH.x && 0 === AH.y || this._applyPanDelta(AH.x, AH.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), HH = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const BH = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < BH && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < BH && (this.inertialPanningY = 0), HH = !0
            }
            if (HH) this.stopInterpolation();
            else if (this._isInterpolating) {
              let HH = !1;
              const BH = this._scene.Iu().getDeltaTime() / 1e3,
                LH = 1 - Math.pow(2, -BH / this._currentInterpolationFactor),
                AH = RH(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const BH = hH.l.lu[0].set(RH(this._goalTarget.x, this.fX.x), RH(this._goalTarget.y, this.fX.y), RH(this._goalTarget.z, this.fX.z));
                hH.o.LerpToRef(this.target, BH, LH, this.fX), 10 * hH.o.Distance(this.target, BH) / AH < GH.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Tm(BH), this.setTarget(this.target, !1, !0, !0)) : HH = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const BH = hH.f.RotationAlphaBetaGammaToRef(RH(this._goalAlpha, this.alpha), RH(this._goalBeta, this.beta), 0, hH.l.Quaternion[0]),
                  AH = hH.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, hH.l.Quaternion[1]),
                  rH = hH.f.SlerpToRef(AH, BH, LH, hH.l.Quaternion[2]);
                rH.normalize();
                const SH = rH.toAlphaBetaGammaToRef(hH.l.lu[0]);
                if (this.alpha = SH.x, this.beta = SH.y, rH.isApprox(BH, GH.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const HH = BH.toAlphaBetaGammaToRef(hH.l.lu[0]);
                  this.alpha = HH.x, this.beta = HH.y
                } else HH = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (AH - this.radius) * LH, Math.abs(AH / this.radius - 1) < GH.d ? (this._goalRadius = NaN, this.radius = AH) : HH = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const BH = hH.l.Vector2[0].set(RH(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), RH(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                hH.n.LerpToRef(this.targetScreenOffset, BH, LH, this.targetScreenOffset), hH.n.Distance(this.targetScreenOffset, BH) < GH.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Tm(BH)) : HH = !0
              }
              this._isInterpolating = HH
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hH.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const HH = this.alpha;
            var BH, LH;
            this.alpha = function(HH) {
              let BH = Math.PI / 2;
              return 0 === HH.x && 0 === HH.z || (BH = Math.acos(HH.x / Math.sqrt(Math.pow(HH.x, 2) + Math.pow(HH.z, 2)))), HH.z < 0 && (BH = 2 * Math.PI - BH), BH
            }(this._computationVector), this.beta = (BH = this._computationVector.y, LH = this.radius, Math.acos(BH / LH));
            const AH = Math.round((HH - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * AH * Math.PI, this._checkLimits()
          }
          setPosition(HH) {
            this._position.equals(HH) || (this._position.Tm(HH), this.rebuildAnglesAndRadius())
          }
          setTarget(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (AH = this.overrideCloneAlphaBetaRadius ?? AH, HH.computeWorldMatrix) BH && HH.jF ? this._targetBoundingCenter = HH.jF().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, HH.computeWorldMatrix(), this._targetHost = HH, this.fX = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const BH = HH,
                AH = this._getTargetPosition();
              if (AH && !LH && AH.equals(BH)) return;
              this._targetHost = null, this.fX = BH, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            AH || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const HH = Math.cos(this.alpha),
              BH = Math.sin(this.alpha),
              LH = Math.cos(this.beta);
            let AH = Math.sin(this.beta);
            0 === AH && (AH = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const rH = this._getTargetPosition();
            if (this._computationVector.SBH(this.radius * HH * AH, this.radius * LH, this.radius * BH * AH), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hH.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), rH.addToRef(this._computationVector, this._newPosition), this.yN().collisionsEnabled && this.checkCollisions) {
              const HH = this.yN().collisionCoordinator;
              this._collider || (this._collider = HH.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, HH.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Tm(this._newPosition);
              let HH = this.upVector;
              this.allowUpsideDown && AH < 0 && (HH = HH.du()), this._computeViewMatrix(this._position, rH, HH), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Tm(rH), this._viewMatrix
          }
          zoomOn(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            HH = HH || this.yN().meshes;
            const LH = CH.c.MinMax(HH);
            let AH = this._calculateLowerRadiusFromModelBoundingSphere(LH.min, LH.max);
            if (AH = Math.max(Math.min(AH, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = AH * this.zoomOnFactor, this.mode === xH.d.ORTHOGRAPHIC_CAMERA) {
              const HH = this.yN().Iu().getAspectRatio(this),
                BH = AH * this.zoomOnFactor / 2;
              this.orthoLeft = -BH * HH, this.orthoRight = BH * HH, this.orthoBottom = -BH, this.orthoTop = BH
            }
            this.focusOn({
              min: LH.min,
              max: LH.max,
              distance: AH
            }, BH)
          }
          focusOn(HH) {
            let BH, LH, AH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === HH.min) {
              const AH = HH || this.yN().meshes;
              BH = CH.c.MinMax(AH), LH = hH.o.Distance(BH.min, BH.max)
            } else {
              BH = HH, LH = HH.distance
            }
            this.fX = CH.c.Center(BH), AH || (this.maxZ = 2 * LH)
          }
          createRigCamera(BH, LH) {
            let AH = 0;
            switch (this.cameraRigMode) {
              case xH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case xH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case xH.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case xH.d.RIG_MODE_VR:
                AH = this._cameraRigParams.stereoHalfAngle * (0 === LH ? 1 : -1);
                break;
              case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                AH = this._cameraRigParams.stereoHalfAngle * (0 === LH ? -1 : 1)
            }
            const rH = new HH(BH, this.alpha + AH, this.beta, this.radius, this.fX, this.yN());
            return rH._cameraRigParams = {}, rH.isRigCamera = !0, rH.rigParent = this, rH.upVector = this.upVector, rH.mode = this.mode, rH.orthoLeft = this.orthoLeft, rH.orthoRight = this.orthoRight, rH.orthoBottom = this.orthoBottom, rH.orthoTop = this.orthoTop, rH
          }
          _updateRigCameras() {
            const HH = this._rigCameras[0],
              BH = this._rigCameras[1];
            switch (HH.beta = BH.beta = this.beta, this.cameraRigMode) {
              case xH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case xH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case xH.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case xH.d.RIG_MODE_VR:
                HH.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, BH.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                HH.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, BH.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const AH = hH.o.Distance(HH, BH),
              rH = this.yN().Iu().getAspectRatio(this),
              SH = Math.tan(this.fov / 2),
              tH = SH * rH,
              zH = .5 * AH * LH,
              CH = zH * Math.sqrt(1 + 1 / (tH * tH)),
              EH = zH * Math.sqrt(1 + 1 / (SH * SH));
            return Math.max(CH, EH)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(dH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], zH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.F)("target")], uH = [(0, rH.v)("targetHost")], QH = [(0, rH.H)()], PH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], fH = [(0, rH.H)()], lH = [(0, rH.H)()], KH = [(0, rH.H)()], eH = [(0, rH.H)()], qH = [(0, rH.F)()], gH = [(0, rH.H)()], jH = [(0, rH.H)()], nH = [(0, rH.H)()], FH = [(0, rH.C)()], DH = [(0, rH.H)()], wH = [(0, rH.H)()], ZH = [(0, rH.H)()], (0, AH.g)(HH, null, QH, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "inertialAlphaOffset" in HH,
              get: HH => HH.inertialAlphaOffset
            },
            metadata: SH
          }, null, aH), (0, AH.g)(HH, null, PH, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "inertialBetaOffset" in HH,
              get: HH => HH.inertialBetaOffset
            },
            metadata: SH
          }, null, aH), (0, AH.g)(HH, null, UH, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "inertialRadiusOffset" in HH,
              get: HH => HH.inertialRadiusOffset
            },
            metadata: SH
          }, null, aH), (0, AH.g)(HH, null, gH, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: HH => "panningInertia" in HH,
              get: HH => HH.panningInertia
            },
            metadata: SH
          }, null, aH), (0, AH.g)(HH, null, jH, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: HH => "zoomToMouseLocation" in HH,
              get: HH => HH.zoomToMouseLocation
            },
            metadata: SH
          }, null, aH), (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "alpha" in HH,
              get: HH => HH.alpha,
              set: (HH, BH) => {
                HH.alpha = BH
              }
            },
            metadata: SH
          }, sH, JH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: HH => "beta" in HH,
              get: HH => HH.beta,
              set: (HH, BH) => {
                HH.beta = BH
              }
            },
            metadata: SH
          }, iH, pH), (0, AH.g)(null, null, zH, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: HH => "radius" in HH,
              get: HH => HH.radius,
              set: (HH, BH) => {
                HH.radius = BH
              }
            },
            metadata: SH
          }, yH, HB), (0, AH.g)(null, null, EH, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: HH => "overrideCloneAlphaBetaRadius" in HH,
              get: HH => HH.overrideCloneAlphaBetaRadius,
              set: (HH, BH) => {
                HH.overrideCloneAlphaBetaRadius = BH
              }
            },
            metadata: SH
          }, BB, LB), (0, AH.g)(null, null, XH, {
            kind: "field",
            name: "fX",
            static: !1,
            private: !1,
            access: {
              has: HH => "fX" in HH,
              get: HH => HH.fX,
              set: (HH, BH) => {
                HH.fX = BH
              }
            },
            metadata: SH
          }, AB, rB), (0, AH.g)(null, null, uH, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: HH => "_targetHost" in HH,
              get: HH => HH._targetHost,
              set: (HH, BH) => {
                HH._targetHost = BH
              }
            },
            metadata: SH
          }, SB, hB), (0, AH.g)(null, null, VH, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "lowerAlphaLimit" in HH,
              get: HH => HH.lowerAlphaLimit,
              set: (HH, BH) => {
                HH.lowerAlphaLimit = BH
              }
            },
            metadata: SH
          }, tB, zB), (0, AH.g)(null, null, OH, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "upperAlphaLimit" in HH,
              get: HH => HH.upperAlphaLimit,
              set: (HH, BH) => {
                HH.upperAlphaLimit = BH
              }
            },
            metadata: SH
          }, CB, EB), (0, AH.g)(null, null, bH, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "lowerBetaLimit" in HH,
              get: HH => HH.lowerBetaLimit,
              set: (HH, BH) => {
                HH.lowerBetaLimit = BH
              }
            },
            metadata: SH
          }, XB, GB), (0, AH.g)(null, null, kH, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "upperBetaLimit" in HH,
              get: HH => HH.upperBetaLimit,
              set: (HH, BH) => {
                HH.upperBetaLimit = BH
              }
            },
            metadata: SH
          }, YB, uB), (0, AH.g)(null, null, mH, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "lowerRadiusLimit" in HH,
              get: HH => HH.lowerRadiusLimit,
              set: (HH, BH) => {
                HH.lowerRadiusLimit = BH
              }
            },
            metadata: SH
          }, QB, WB), (0, AH.g)(null, null, oH, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "upperRadiusLimit" in HH,
              get: HH => HH.upperRadiusLimit,
              set: (HH, BH) => {
                HH.upperRadiusLimit = BH
              }
            },
            metadata: SH
          }, MB, xB), (0, AH.g)(null, null, IH, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "lowerTargetYLimit" in HH,
              get: HH => HH.lowerTargetYLimit,
              set: (HH, BH) => {
                HH.lowerTargetYLimit = BH
              }
            },
            metadata: SH
          }, vB, PB), (0, AH.g)(null, null, fH, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: HH => "inertialPanningX" in HH,
              get: HH => HH.inertialPanningX,
              set: (HH, BH) => {
                HH.inertialPanningX = BH
              }
            },
            metadata: SH
          }, TB, UB), (0, AH.g)(null, null, lH, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: HH => "inertialPanningY" in HH,
              get: HH => HH.inertialPanningY,
              set: (HH, BH) => {
                HH.inertialPanningY = BH
              }
            },
            metadata: SH
          }, VB, OB), (0, AH.g)(null, null, KH, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: HH => "pinchToPanMaxDistance" in HH,
              get: HH => HH.pinchToPanMaxDistance,
              set: (HH, BH) => {
                HH.pinchToPanMaxDistance = BH
              }
            },
            metadata: SH
          }, bB, kB), (0, AH.g)(null, null, eH, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: HH => "panningDistanceLimit" in HH,
              get: HH => HH.panningDistanceLimit,
              set: (HH, BH) => {
                HH.panningDistanceLimit = BH
              }
            },
            metadata: SH
          }, mB, oB), (0, AH.g)(null, null, qH, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: HH => "panningOriginTarget" in HH,
              get: HH => HH.panningOriginTarget,
              set: (HH, BH) => {
                HH.panningOriginTarget = BH
              }
            },
            metadata: SH
          }, IB, fB), (0, AH.g)(null, null, nH, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: HH => "zoomOnFactor" in HH,
              get: HH => HH.zoomOnFactor,
              set: (HH, BH) => {
                HH.zoomOnFactor = BH
              }
            },
            metadata: SH
          }, lB, KB), (0, AH.g)(null, null, FH, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "targetScreenOffset" in HH,
              get: HH => HH.targetScreenOffset,
              set: (HH, BH) => {
                HH.targetScreenOffset = BH
              }
            },
            metadata: SH
          }, cB, eB), (0, AH.g)(null, null, DH, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: HH => "allowUpsideDown" in HH,
              get: HH => HH.allowUpsideDown,
              set: (HH, BH) => {
                HH.allowUpsideDown = BH
              }
            },
            metadata: SH
          }, qB, gB), (0, AH.g)(null, null, wH, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: HH => "useInputToRestoreState" in HH,
              get: HH => HH.useInputToRestoreState,
              set: (HH, BH) => {
                HH.useInputToRestoreState = BH
              }
            },
            metadata: SH
          }, NB, RB), (0, AH.g)(null, null, ZH, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: HH => "restoreStateInterpolationFactor" in HH,
              get: HH => HH.restoreStateInterpolationFactor,
              set: (HH, BH) => {
                HH.restoreStateInterpolationFactor = BH
              }
            },
            metadata: SH
          }, jB, nB), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      nH = !1;
    nH || (nH = !0, zH.b.AddNodeConstructor("ArcRotateCamera", ((HH, BH) => () => new jH(HH, 0, 0, 1, hH.o.Zero(), BH))), (0, eH.f)("BABYLON.ArcRotateCamera", jH))
  },
  41525: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH.b
    });
    var AH = LH(41533);
    (0, AH.c)()
  },
  41533: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => GH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(38074),
      tH = LH(41535),
      zH = LH(41498),
      CH = LH(38012);
    let EH = (() => {
        var HH;
        let BH, LH, zH = tH.b,
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        return HH = class extends zH {
          constructor(HH, BH, LH, rH) {
            super(HH, LH, rH), this.groundColor = (0, AH.k)(this, CH, new hH.c(0, 0, 0)), this.direction = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, void 0)), (0, AH.k)(this, GH), this.direction = BH || SH.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(HH) {
            return this.direction = SH.o.Normalize(HH.subtract(SH.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", LH.x, LH.y, LH.z, 0, BH), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), BH), this
          }
          transferToNodeMaterialEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return HH.setFloat3(BH, LH.x, LH.y, LH.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = SH.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return tH.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(HH, BH) {
            HH["HEMILIGHT" + BH] = !0
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(zH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.l)()], LH = [(0, rH.F)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "groundColor" in HH,
              get: HH => HH.groundColor,
              set: (HH, BH) => {
                HH.groundColor = BH
              }
            },
            metadata: SH
          }, CH, EH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: HH => "direction" in HH,
              get: HH => HH.direction,
              set: (HH, BH) => {
                HH.direction = BH
              }
            },
            metadata: SH
          }, XH, GH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      XH = !1;

    function GH() {
      XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
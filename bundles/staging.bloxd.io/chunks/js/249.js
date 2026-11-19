export const id = 249;
export const ids = [249];
export const modules = {
  4e4: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => qT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36149),
      WT = IT(36118),
      XT = IT(36156),
      BT = IT(38994),
      FT = IT(39192),
      ST = IT(38957),
      DT = IT(38667),
      LT = IT(36125);
    class xT {
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
        const oT = this._attachedCamera.pC();
        this._onPrePointerObservableObserver = oT.onPrePointerObservable.add((TT => {
          TT.type !== ST.c.POINTERDOWN ? TT.type === ST.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const TT = DT.c.Now;
          let oT = 0;
          null != this._lastFrameTime && (oT = TT - this._lastFrameTime), this._lastFrameTime = TT, this._applyUserInteraction();
          const IT = TT - this._lastInteractionTime - this._idleRotationWaitTime,
            iT = Math.max(Math.min(IT / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * iT, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (oT / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.pC();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(TT) {
        this._lastInteractionTime = TT ?? DT.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < LT.d
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = DT.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    IT(40008);
    class cT {
      constructor() {
        this._easingMode = cT.EASINGMODE_EASEIN
      }
      setEasingMode(TT) {
        const oT = Math.min(Math.max(TT, 0), 2);
        this._easingMode = oT
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(TT) {
        throw new Error("You must implement this method")
      }
      ease(TT) {
        switch (this._easingMode) {
          case cT.EASINGMODE_EASEIN:
            return this.easeInCore(TT);
          case cT.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - TT)
        }
        return TT >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - TT))) + .5 : .5 * this.easeInCore(2 * TT)
      }
    }
    cT.EASINGMODE_EASEIN = 0, cT.EASINGMODE_EASEOUT = 1, cT.EASINGMODE_EASEINOUT = 2;
    var KT = IT(40011);
    class MT {
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
        const oT = this._attachedCamera;
        oT && (TT ? this._onMeshTargetChangedObserver = oT.onMeshTargetChangedObservable.add((TT => {
          if (TT && (TT.computeWorldMatrix(!0), TT.GJ)) {
            const oT = TT.GJ().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * oT, this.upperRadiusTransitionRange = .05 * oT
          }
        })) : this._onMeshTargetChangedObserver && oT.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (MT.EasingFunction.setEasingMode(MT.EasingMode), this._radiusBounceTransition = KT.b.CreateAnimation("radius", KT.b.ANIMATIONTYPE_FLOAT, 60, MT.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const oT = KT.b.TransitionTo("radius", this._attachedCamera.radius + TT, this._attachedCamera, this._attachedCamera.pC(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        oT && this._animatables.push(oT)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    MT.EasingFunction = new class extends cT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = TT
      }
      easeInCore(TT) {
        const oT = Math.max(0, this.amplitude);
        return Math.pow(TT, 3) - TT * oT * Math.sin(3.141592653589793 * TT)
      }
    }(.3), MT.EasingMode = cT.EASINGMODE_EASEOUT;
    class rT {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new kT.d, this._mode = rT.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const oT = this._attachedCamera.pC();
        rT.EasingFunction.setEasingMode(rT.EasingMode), this._onPrePointerObservableObserver = oT.onPrePointerObservable.add((TT => {
          TT.type !== ST.c.POINTERDOWN ? TT.type === ST.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = TT.onMeshTargetChangedObservable.add((TT => {
          TT && TT.GJ && this.zoomOnMesh(TT, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = TT.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const TT = this._attachedCamera.pC();
        this._onPrePointerObservableObserver && TT.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const iT = TT.GJ().boundingBox;
        this.zoomOnBoundingInfo(iT.minimumWorld, iT.maximumWorld, oT, IT)
      }
      zoomOnMeshHierarchy(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        TT.computeWorldMatrix(!0);
        const iT = TT.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(iT.min, iT.max, oT, IT)
      }
      zoomOnMeshesHierarchy(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iT = new WT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          zT = new WT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let kT = 0; kT < TT.length; kT++) {
          const oT = TT[kT].getHierarchyBoundingVectors(!0);
          WT.m.CheckExtends(oT.min, iT, zT), WT.m.CheckExtends(oT.max, iT, zT)
        }
        this.zoomOnBoundingInfo(iT, zT, oT, IT)
      }
      zoomOnBoundingInfo(TT, oT) {
        let IT, iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const kT = TT.y,
          XT = kT + (oT.y - kT) * this._positionScale,
          BT = oT.subtract(TT).scale(.5);
        if (!isFinite(XT)) return !1;
        if (iT) IT = new WT.m(0, XT, 0);
        else {
          const oT = TT.add(BT);
          IT = new WT.m(oT.x, XT, oT.z)
        }
        this._vectorTransition || (this._vectorTransition = KT.b.CreateAnimation("target", KT.b.ANIMATIONTYPE_VECTOR3, 60, rT.EasingFunction)), this._betaIsAnimating = !0;
        let FT = KT.b.TransitionTo("target", IT, this._attachedCamera, this._attachedCamera.pC(), 60, this._vectorTransition, this._framingTime);
        FT && this._animatables.push(FT);
        let ST = 0;
        if (this._mode === rT.FitFrustumSidesMode) {
          const IT = this._calculateLowerRadiusFromModelBoundingSphere(TT, oT);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = BT.length() + this._attachedCamera.minZ), ST = IT
        } else this._mode === rT.IgnoreBoundsSizeMode && (ST = this._calculateLowerRadiusFromModelBoundingSphere(TT, oT), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const IT = oT.subtract(TT).length();
          this._attachedCamera.panningSensibility = 5e3 / IT, this._attachedCamera.wheelPrecision = 100 / ST
        }
        return this._radiusTransition || (this._radiusTransition = KT.b.CreateAnimation("radius", KT.b.ANIMATIONTYPE_FLOAT, 60, rT.EasingFunction)), FT = KT.b.TransitionTo("radius", ST, this._attachedCamera, this._attachedCamera.pC(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), zT && zT(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), FT && this._animatables.push(FT), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(TT, oT) {
        const IT = this._attachedCamera;
        if (!IT) return 0;
        let iT = IT._calculateLowerRadiusFromModelBoundingSphere(TT, oT, this._radiusScale);
        return IT.lowerRadiusLimit && this._mode === rT.IgnoreBoundsSizeMode && (iT = iT < IT.lowerRadiusLimit ? IT.lowerRadiusLimit : iT), IT.upperRadiusLimit && (iT = iT > IT.upperRadiusLimit ? IT.upperRadiusLimit : iT), iT
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const TT = DT.c.Now - this._lastInteractionTime,
          oT = .5 * Math.PI - this._defaultElevation,
          IT = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > IT && TT >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = KT.b.CreateAnimation("beta", KT.b.ANIMATIONTYPE_FLOAT, 60, rT.EasingFunction));
          const TT = KT.b.TransitionTo("beta", oT, this._attachedCamera, this._attachedCamera.pC(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          TT && this._animatables.push(TT)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = DT.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    rT.EasingFunction = new class extends cT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = TT
      }
      easeInCore(TT) {
        return this.exponent <= 0 ? TT : (Math.exp(this.exponent * TT) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, rT.EasingMode = cT.EASINGMODE_EASEINOUT, rT.IgnoreBoundsSizeMode = 0, rT.FitFrustumSidesMode = 1;
    var AT = IT(38986),
      gT = IT(38983),
      hT = IT(39016),
      wT = IT(38886);
    let mT = (() => {
        var TT;
        let oT, IT = [],
          kT = [];
        return TT = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, iT.j)(this, IT, [0, 1, 2]), this._pointerInput = (0, iT.j)(this, kT)
          }
          attachControl(TT) {
            TT = wT.i.BackCompatCameraNoPreventDefault(arguments);
            const oT = this.camera.Zc(),
              IT = oT.getInputElement();
            let iT = 0,
              zT = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = kT => {
              const WT = kT.event,
                XT = "touch" === WT.pointerType;
              if (kT.type !== ST.c.POINTERMOVE && -1 === this.buttons.indexOf(WT.button)) return;
              const BT = WT.target;
              if (this._altKey = WT.altKey, this._ctrlKey = WT.ctrlKey, this._metaKey = WT.metaKey, this._shiftKey = WT.shiftKey, this._buttonsPressed = WT.buttons, oT.isPointerLock) {
                const TT = WT.movementX,
                  oT = WT.movementY;
                this.onTouch(null, TT, oT), this._pointA = null, this._pointB = null
              } else {
                if (kT.type !== ST.c.POINTERDOWN && kT.type !== ST.c.POINTERDOUBLETAP && XT && this._pointA?.pointerId !== WT.pointerId && this._pointB?.pointerId !== WT.pointerId) return;
                if (kT.type !== ST.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !XT)
                  if (kT.type === ST.c.POINTERDOUBLETAP) this.onDoubleTap(WT.pointerType, WT);
                  else if (kT.type !== ST.c.POINTERUP || this._currentMousePointerIdDown !== WT.pointerId && !XT) {
                  if (kT.type === ST.c.POINTERMOVE)
                    if (TT || WT.preventDefault(), this._pointA && null === this._pointB) {
                      const TT = WT.clientX - this._pointA.x,
                        oT = WT.clientY - this._pointA.y;
                      this._pointA.x = WT.clientX, this._pointA.y = WT.clientY, this.onTouch(this._pointA, TT, oT)
                    } else if (this._pointA && this._pointB) {
                    const TT = this._pointA.pointerId === WT.pointerId ? this._pointA : this._pointB;
                    TT.x = WT.clientX, TT.y = WT.clientY;
                    const oT = this._pointA.x - this._pointB.x,
                      IT = this._pointA.y - this._pointB.y,
                      XT = oT * oT + IT * IT,
                      BT = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: WT.pointerId,
                        type: kT.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, iT, XT, zT, BT), zT = BT, iT = XT
                  }
                } else {
                  try {
                    BT?.releasePointerCapture(WT.pointerId)
                  } catch (FT) {}
                  XT || (this._pointB = null), oT._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == WT.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == WT.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== iT || zT) && (this.onMultiTouch(this._pointA, this._pointB, iT, 0, zT, null), iT = 0, zT = null), this._currentMousePointerIdDown = -1, this.onButtonUp(WT), TT || WT.preventDefault()
                } else {
                  try {
                    BT?.setPointerCapture(WT.pointerId)
                  } catch (FT) {}
                  if (null === this._pointA) this._pointA = {
                    x: WT.clientX,
                    y: WT.clientY,
                    pointerId: WT.pointerId,
                    type: WT.pointerType,
                    button: WT.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: WT.clientX,
                      y: WT.clientY,
                      pointerId: WT.pointerId,
                      type: WT.pointerType,
                      button: WT.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || XT || (this._currentMousePointerIdDown = WT.pointerId), this.onButtonDown(WT), TT || (WT.preventDefault(), IT && IT.focus())
                }
              }
            }, this._observer = this.camera.pC()._inputManager._addCameraPointerObserver(this._pointerInput, ST.c.POINTERDOWN | ST.c.POINTERUP | ST.c.POINTERMOVE | ST.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, iT = 0, zT = null, this.onLostFocus()
            }, this._contextMenuBind = TT => this.onContextMenu(TT), IT && IT.addEventListener("contextmenu", this._contextMenuBind, !1);
            const kT = this.camera.pC().Zc().getHostWindow();
            kT && wT.i.RegisterTopRootEvents(kT, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const TT = this.camera.pC().Zc().getHostWindow();
              TT && wT.i.UnregisterTopRootEvents(TT, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.pC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const TT = this.camera.pC().Zc().getInputElement();
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
          onDoubleTap(TT, oT) {}
          onTouch(TT, oT, IT) {}
          onMultiTouch(TT, oT, IT, iT, zT, kT) {}
          onContextMenu(TT) {
            TT.preventDefault()
          }
          onButtonDown(TT) {}
          onButtonUp(TT) {}
          onLostFocus() {}
        }, (() => {
          const WT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          oT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, oT) => {
                TT.buttons = oT
              }
            },
            metadata: WT
          }, IT, kT), WT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WT
          })
        })(), TT
      })(),
      eT = (() => {
        var TT;
        let oT, IT, kT, WT = mT,
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        return TT = class extends WT {
          constructor() {
            super(...arguments), this.pinchZoom = (0, iT.j)(this, XT, !0), this.multiTouchPanning = ((0, iT.j)(this, BT), (0, iT.j)(this, FT, !0)), this.multiTouchPanAndZoom = ((0, iT.j)(this, ST), (0, iT.j)(this, DT, !0)), this._isPinching = ((0, iT.j)(this, LT), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(TT, oT) {}
          _computeMultiTouchPanning(TT, oT) {}
          onMultiTouch(TT, oT, IT, iT, zT, kT) {
            0 === IT && null === zT || 0 === iT && null === kT || (this.multiTouchPanAndZoom ? (this._computePinchZoom(IT, iT), this._computeMultiTouchPanning(zT, kT)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(IT, iT), this._isPinching = !0) : this._computeMultiTouchPanning(zT, kT)) : this.multiTouchPanning ? this._computeMultiTouchPanning(zT, kT) : this.pinchZoom && this._computePinchZoom(IT, iT))
          }
          onButtonUp(TT) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(WT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchZoom" in TT,
              get: TT => TT.pinchZoom,
              set: (TT, oT) => {
                TT.pinchZoom = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanning" in TT,
              get: TT => TT.multiTouchPanning,
              set: (TT, oT) => {
                TT.multiTouchPanning = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, iT.h)(null, null, kT, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "multiTouchPanAndZoom" in TT,
              get: TT => TT.multiTouchPanAndZoom,
              set: (TT, oT) => {
                TT.multiTouchPanAndZoom = oT
              }
            },
            metadata: xT
          }, DT, LT), xT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          })
        })(), TT
      })(),
      RT = (() => {
        var TT;
        let oT, IT, kT, WT, XT, BT, FT, ST = eT,
          DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [],
          rT = [],
          AT = [],
          gT = [],
          hT = [],
          wT = [],
          mT = [],
          RT = [],
          uT = [];
        return TT = class extends ST {
          constructor() {
            super(...arguments), this.buttons = (0, iT.j)(this, DT, [0, 1, 2]), this.angularSensibilityX = ((0, iT.j)(this, LT), (0, iT.j)(this, xT, 1e3)), this.angularSensibilityY = ((0, iT.j)(this, cT), (0, iT.j)(this, KT, 1e3)), this.pinchPrecision = ((0, iT.j)(this, MT), (0, iT.j)(this, rT, 12)), this.pinchDeltaPercentage = ((0, iT.j)(this, AT), (0, iT.j)(this, gT, 0)), this.useNaturalPinchZoom = ((0, iT.j)(this, hT), (0, iT.j)(this, wT, !1)), this.panningSensibility = ((0, iT.j)(this, mT), (0, iT.j)(this, RT, 1e3)), this.pinchInwards = ((0, iT.j)(this, uT), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(TT, oT) {
            if (TT && oT) {
              const IT = oT.x - TT.x,
                iT = oT.y - TT.y,
                zT = this.camera.movement.input.getEntry("pointer", "pan"),
                kT = zT?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== kT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -IT * kT, this.camera.movement.panAccumulatedPixels.y += iT * kT)
            }
          }
          _computePinchZoom(oT, IT) {
            const iT = this.camera.radius || TT.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = iT * Math.sqrt(oT) / Math.sqrt(IT);
            else if (this.pinchDeltaPercentage) {
              const TT = .001 * (IT - oT) * iT * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            } else {
              const TT = (IT - oT) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += TT
            }
          }
          onTouch(TT, oT, IT) {
            const iT = this._activeEntry ?? (this.camera.Zc().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (iT)
              if ("pan" === iT.interaction) {
                const TT = iT.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== TT && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -oT * TT, this.camera.movement.panAccumulatedPixels.y += IT * TT)
              } else if ("rotate" === iT.interaction) {
              const TT = iT.Kl ?? iT.sensitivity ?? 1 / this.angularSensibilityX,
                zT = iT.Ml ?? iT.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -oT * TT, this.camera.movement.rotationAccumulatedPixels.y += -IT * zT
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(TT, oT, IT, iT, zT, kT) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(iT) - Math.sqrt(IT)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(TT, oT, IT, iT, zT, kT)
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
          const eT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ST[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], WT = [(0, zT.P)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: TT => "buttons" in TT,
              get: TT => TT.buttons,
              set: (TT, oT) => {
                TT.buttons = oT
              }
            },
            metadata: eT
          }, DT, LT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityX" in TT,
              get: TT => TT.angularSensibilityX,
              set: (TT, oT) => {
                TT.angularSensibilityX = oT
              }
            },
            metadata: eT
          }, xT, cT), (0, iT.h)(null, null, kT, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: TT => "angularSensibilityY" in TT,
              get: TT => TT.angularSensibilityY,
              set: (TT, oT) => {
                TT.angularSensibilityY = oT
              }
            },
            metadata: eT
          }, KT, MT), (0, iT.h)(null, null, WT, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchPrecision" in TT,
              get: TT => TT.pinchPrecision,
              set: (TT, oT) => {
                TT.pinchPrecision = oT
              }
            },
            metadata: eT
          }, rT, AT), (0, iT.h)(null, null, XT, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchDeltaPercentage" in TT,
              get: TT => TT.pinchDeltaPercentage,
              set: (TT, oT) => {
                TT.pinchDeltaPercentage = oT
              }
            },
            metadata: eT
          }, gT, hT), (0, iT.h)(null, null, BT, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: TT => "useNaturalPinchZoom" in TT,
              get: TT => TT.useNaturalPinchZoom,
              set: (TT, oT) => {
                TT.useNaturalPinchZoom = oT
              }
            },
            metadata: eT
          }, wT, mT), (0, iT.h)(null, null, FT, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningSensibility" in TT,
              get: TT => TT.panningSensibility,
              set: (TT, oT) => {
                TT.panningSensibility = oT
              }
            },
            metadata: eT
          }, RT, uT), eT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eT
          })
        })(), TT.MinimumRadiusForPinch = .001, TT
      })();
    hT.b.ArcRotateCameraPointersInput = RT;
    var uT = IT(38963);
    let vT = (() => {
      var TT;
      let oT, IT, kT, XT, BT, FT, ST, DT, LT, xT, cT, KT = [],
        MT = [],
        rT = [],
        AT = [],
        gT = [],
        hT = [],
        mT = [],
        eT = [],
        RT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [];
      return TT = class {
        constructor() {
          this.camera = (0, iT.j)(this, KT), this.keysUp = (0, iT.j)(this, MT, [38]), this.keysDown = ((0, iT.j)(this, rT), (0, iT.j)(this, AT, [40])), this.keysLeft = ((0, iT.j)(this, gT), (0, iT.j)(this, hT, [37])), this.keysRight = ((0, iT.j)(this, mT), (0, iT.j)(this, eT, [39])), this.keysReset = ((0, iT.j)(this, RT), (0, iT.j)(this, vT, [220])), this.keysZoomIn = ((0, iT.j)(this, ET), (0, iT.j)(this, fT, [187, 107])), this.keysZoomOut = ((0, iT.j)(this, CT), (0, iT.j)(this, jT, [189, 109])), this.panningSensibility = ((0, iT.j)(this, JT), (0, iT.j)(this, UT, 50)), this.zoomingSensibility = ((0, iT.j)(this, aT), (0, iT.j)(this, YT, 25)), this.angularSpeed = ((0, iT.j)(this, QT), (0, iT.j)(this, OT, .01)), this._useAltToZoom = ((0, iT.j)(this, HT), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new WT.j, this._panDirection = new WT.j
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
            oT = TT.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && oT ? TT.inputMap.splice(TT.inputMap.indexOf(oT), 1) : this._useAltToZoom && !oT && TT.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(TT) {
          TT = wT.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.pC(), this._engine = this._scene.Zc(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((oT => {
            const IT = oT.event;
            if (!IT.metaKey)
              if (oT.type === uT.b.KEYDOWN) {
                if (this._ctrlPressed = IT.ctrlKey, this._altPressed = IT.altKey, -1 !== this.keysUp.indexOf(IT.keyCode) || -1 !== this.keysDown.indexOf(IT.keyCode) || -1 !== this.keysLeft.indexOf(IT.keyCode) || -1 !== this.keysRight.indexOf(IT.keyCode) || -1 !== this.keysReset.indexOf(IT.keyCode) || -1 !== this.keysZoomIn.indexOf(IT.keyCode) || -1 !== this.keysZoomOut.indexOf(IT.keyCode)) {
                  -1 === this._keys.indexOf(IT.keyCode) && this._keys.push(IT.keyCode), IT.preventDefault && (TT || IT.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(IT.keyCode) || -1 !== this.keysDown.indexOf(IT.keyCode) || -1 !== this.keysLeft.indexOf(IT.keyCode) || -1 !== this.keysRight.indexOf(IT.keyCode) || -1 !== this.keysReset.indexOf(IT.keyCode) || -1 !== this.keysZoomIn.indexOf(IT.keyCode) || -1 !== this.keysZoomOut.indexOf(IT.keyCode)) {
              const oT = this._keys.indexOf(IT.keyCode);
              oT >= 0 && this._keys.splice(oT, 1), IT.preventDefault && (TT || IT.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const TT = this.camera,
              oT = TT.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const IT = this._rotateDirection.set(0, 0),
              iT = this._panDirection.set(0, 0);
            let zT = 0,
              kT = 0;
            for (let WT = 0; WT < this._keys.length; WT++) {
              const XT = this._keys[WT];
              if (this._keyboardConditions.key = XT, -1 === this.keysReset.indexOf(XT)) {
                const TT = oT.resolveInteraction("keyboard", this._keyboardConditions);
                if (TT)
                  if ("pan" === TT.interaction) kT = Math.max(kT, TT.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(XT) ? iT.x -= 1 : -1 !== this.keysRight.indexOf(XT) ? iT.x += 1 : -1 !== this.keysUp.indexOf(XT) ? iT.y += 1 : -1 !== this.keysDown.indexOf(XT) && (iT.y -= 1);
                  else if ("zoom" === TT.interaction) {
                  const IT = TT.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(XT) || -1 !== this.keysZoomIn.indexOf(XT) ? oT.handlers.zoom(IT) : -1 === this.keysDown.indexOf(XT) && -1 === this.keysZoomOut.indexOf(XT) || oT.handlers.zoom(-IT)
                } else "rotate" === TT.interaction && (zT = Math.max(zT, TT.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(XT) ? IT.x -= 1 : -1 !== this.keysRight.indexOf(XT) ? IT.x += 1 : -1 !== this.keysUp.indexOf(XT) ? IT.y -= 1 : -1 !== this.keysDown.indexOf(XT) && (IT.y += 1))
              } - 1 !== this.keysReset.indexOf(XT) && TT.useInputToRestoreState && TT.restoreState()
            }
            0 === IT.x && 0 === IT.y || (IT.normalize().scaleInPlace(zT), oT.handlers.rotate(IT.x, IT.y)), 0 === iT.x && 0 === iT.y || (iT.normalize().scaleInPlace(kT), oT.handlers.pan(iT.x, iT.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const WT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.P)()], LT = [(0, zT.P)()], xT = [(0, zT.P)()], cT = [(0, zT.P)()], (0, iT.h)(TT, null, cT, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAltToZoom" in TT,
            get: TT => TT.useAltToZoom
          },
          metadata: WT
        }, null, KT), (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysUp" in TT,
            get: TT => TT.keysUp,
            set: (TT, oT) => {
              TT.keysUp = oT
            }
          },
          metadata: WT
        }, MT, rT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysDown" in TT,
            get: TT => TT.keysDown,
            set: (TT, oT) => {
              TT.keysDown = oT
            }
          },
          metadata: WT
        }, AT, gT), (0, iT.h)(null, null, kT, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysLeft" in TT,
            get: TT => TT.keysLeft,
            set: (TT, oT) => {
              TT.keysLeft = oT
            }
          },
          metadata: WT
        }, hT, mT), (0, iT.h)(null, null, XT, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysRight" in TT,
            get: TT => TT.keysRight,
            set: (TT, oT) => {
              TT.keysRight = oT
            }
          },
          metadata: WT
        }, eT, RT), (0, iT.h)(null, null, BT, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysReset" in TT,
            get: TT => TT.keysReset,
            set: (TT, oT) => {
              TT.keysReset = oT
            }
          },
          metadata: WT
        }, vT, ET), (0, iT.h)(null, null, FT, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomIn" in TT,
            get: TT => TT.keysZoomIn,
            set: (TT, oT) => {
              TT.keysZoomIn = oT
            }
          },
          metadata: WT
        }, fT, CT), (0, iT.h)(null, null, ST, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: TT => "keysZoomOut" in TT,
            get: TT => TT.keysZoomOut,
            set: (TT, oT) => {
              TT.keysZoomOut = oT
            }
          },
          metadata: WT
        }, jT, JT), (0, iT.h)(null, null, DT, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "panningSensibility" in TT,
            get: TT => TT.panningSensibility,
            set: (TT, oT) => {
              TT.panningSensibility = oT
            }
          },
          metadata: WT
        }, UT, aT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomingSensibility" in TT,
            get: TT => TT.zoomingSensibility,
            set: (TT, oT) => {
              TT.zoomingSensibility = oT
            }
          },
          metadata: WT
        }, YT, QT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: TT => "angularSpeed" in TT,
            get: TT => TT.angularSpeed,
            set: (TT, oT) => {
              TT.angularSpeed = oT
            }
          },
          metadata: WT
        }, OT, HT), WT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WT
        })
      })(), TT
    })();
    hT.b.ArcRotateCameraKeyboardMoveInput = vT;
    var ET = IT(36717),
      fT = IT(38966);
    let CT = (() => {
      var TT;
      let oT, IT, kT, BT = [],
        FT = [],
        DT = [],
        xT = [],
        cT = [],
        KT = [];
      return TT = class {
        constructor() {
          this.wheelPrecision = (0, iT.j)(this, BT, 3), this.zoomToMouseLocation = ((0, iT.j)(this, FT), (0, iT.j)(this, DT, !1)), this.wheelDeltaPercentage = ((0, iT.j)(this, xT), (0, iT.j)(this, cT, 0)), this.customComputeDeltaFromMouseWheel = ((0, iT.j)(this, KT), null), this._viewOffset = new WT.m(0, 0, 0), this._globalOffset = new WT.m(0, 0, 0), this._inertialPanning = WT.m.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(TT, oT) {
          let IT;
          const iT = .01 * TT * this.wheelDeltaPercentage * oT;
          return IT = TT > 0 ? iT / (1 + this.wheelDeltaPercentage) : iT * (1 + this.wheelDeltaPercentage), IT
        }
        attachControl(TT) {
          TT = wT.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = oT => {
            if (oT.type !== ST.c.POINTERWHEEL) return;
            const IT = oT.event;
            let iT;
            const zT = IT.deltaMode === fT.b.DOM_DELTA_LINE ? 40 : 1,
              kT = -IT.deltaY * zT;
            if (this.customComputeDeltaFromMouseWheel) iT = this.customComputeDeltaFromMouseWheel(kT, this, IT);
            else if (this.wheelDeltaPercentage) {
              if (iT = this._computeDeltaFromMouseWheelLegacyEvent(kT, this.camera.radius), iT > 0) {
                const TT = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let oT = this.camera.radius,
                  IT = TT + iT;
                for (let iT = 0; iT < 20 && !(oT <= IT) && !(Math.abs(IT * this.camera.inertia) < .001); iT++) oT -= IT, IT *= this.camera.inertia;
                oT = (0, XT.Clamp)(oT, 0, Number.MAX_VALUE), iT = this._computeDeltaFromMouseWheelLegacyEvent(kT, oT)
              }
            } else {
              const TT = this.camera.movement.input.getEntry("wheel", "zoom");
              iT = kT * (TT?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            iT && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(iT)) : this.camera.movement.zoomAccumulatedPixels += iT), IT.preventDefault && (TT || IT.preventDefault())
          }, this._observer = this.camera.pC()._inputManager._addCameraPointerObserver(this._wheel, ST.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.W8(0)
        }
        detachControl() {
          this._observer && (this.camera.pC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const TT = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(TT.inertialAlphaOffset) + Math.abs(TT.inertialBetaOffset) + Math.abs(TT.inertialRadiusOffset)) {
            this._updateHitPlane(), TT.target.addInPlace(this._inertialPanning), TT.radius -= this._zoomToMouseRadiusOffset;
            const oT = TT.movement.getFrameIndependentDecay(TT.inertia);
            this._inertialPanning.scaleInPlace(oT), this._zoomToMouseRadiusOffset *= oT, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < LT.d && (this._zoomToMouseRadiusOffset = 0)
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
            oT = TT.target.subtract(TT.position);
          this._hitPlane = ET.b.FromPositionAndNormal(TT.target, oT)
        }
        _getPosition() {
          const TT = this.camera,
            oT = TT.pC(),
            IT = oT.createPickingRay(oT.pointerX, oT.pointerY, WT.b.Identity(), TT, !1);
          0 === TT.targetScreenOffset.x && 0 === TT.targetScreenOffset.y || (this._viewOffset.set(TT.targetScreenOffset.x, TT.targetScreenOffset.y, 0), TT.getViewMatrix().invertToRef(TT._cameraTransformMatrix), this._globalOffset = WT.m.TransformNormal(this._viewOffset, TT._cameraTransformMatrix), IT.origin.addInPlace(this._globalOffset));
          let iT = 0;
          return this._hitPlane && (iT = IT.intersectsPlane(this._hitPlane) ?? 0), IT.origin.addInPlace(IT.direction.scaleInPlace(iT))
        }
        _zoomToMouse(TT) {
          const oT = this.camera,
            IT = 1 - oT.inertia,
            iT = oT.movement.getFrameIndependentInputScale(oT.inertia);
          if (oT.lowerRadiusLimit) {
            const zT = oT.lowerRadiusLimit ?? 0;
            oT.radius - (this._zoomToMouseRadiusOffset + TT * iT) / IT < zT && (TT = ((oT.radius - zT) * IT - this._zoomToMouseRadiusOffset) / iT)
          }
          if (oT.upperRadiusLimit) {
            const zT = oT.upperRadiusLimit ?? 0;
            oT.radius - (this._zoomToMouseRadiusOffset + TT * iT) / IT > zT && (TT = ((oT.radius - zT) * IT - this._zoomToMouseRadiusOffset) / iT)
          }
          const zT = TT / IT / oT.radius,
            kT = this._getPosition(),
            XT = WT.i.sc[6];
          kT.subtractToRef(oT.target, XT), XT.scaleInPlace(zT), XT.scaleInPlace(IT), XT.scaleInPlace(iT), this._inertialPanning.addInPlace(XT), this._zoomToMouseRadiusOffset += TT * iT
        }
        _zeroIfClose(TT) {
          Math.abs(TT.x) < LT.d && (TT.x = 0), Math.abs(TT.y) < LT.d && (TT.y = 0), Math.abs(TT.z) < LT.d && (TT.z = 0)
        }
      }, (() => {
        const WT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelPrecision" in TT,
            get: TT => TT.wheelPrecision,
            set: (TT, oT) => {
              TT.wheelPrecision = oT
            }
          },
          metadata: WT
        }, BT, FT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: TT => "zoomToMouseLocation" in TT,
            get: TT => TT.zoomToMouseLocation,
            set: (TT, oT) => {
              TT.zoomToMouseLocation = oT
            }
          },
          metadata: WT
        }, DT, xT), (0, iT.h)(null, null, kT, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: TT => "wheelDeltaPercentage" in TT,
            get: TT => TT.wheelDeltaPercentage,
            set: (TT, oT) => {
              TT.wheelDeltaPercentage = oT
            }
          },
          metadata: WT
        }, cT, KT), WT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WT
        })
      })(), TT
    })();
    hT.b.ArcRotateCameraMouseWheelInput = CT;
    var jT, JT, UT = IT(38643);
    class aT extends hT.e {
      constructor(TT) {
        super(TT)
      }
      addMouseWheel() {
        return this.add(new CT), this
      }
      addPointers() {
        return this.add(new RT), this
      }
      addKeyboard() {
        return this.add(new vT), this
      }
    }(jT = aT.prototype).addVRDeviceOrientation ?? (jT.addVRDeviceOrientation = (0, UT.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (JT = aT.prototype).addGamepad ?? (JT.addGamepad = (0, UT.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var YT = IT(36166),
      QT = IT(38999),
      OT = IT(39007);
    class HT extends QT.c {
      constructor(TT, oT, IT) {
        super(TT, oT, IT), this.input = new OT.c({
          pan: (TT, oT) => {
            this.panAccumulatedPixels.x += TT, this.panAccumulatedPixels.y += oT
          },
          rotate: (TT, oT) => {
            this.rotationAccumulatedPixels.x += TT, this.rotationAccumulatedPixels.y += oT
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

    function nT(TT, oT) {
      return isNaN(TT) ? oT : TT
    }
    let qT = (() => {
        var TT;
        let oT, IT, BT, ST, DT, cT, KT, hT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT, UT, YT, QT, OT, qT, ZT, lT, sT, tT, GT, pT = gT.d,
          bT = [],
          yT = [],
          NT = [],
          PT = [],
          dT = [],
          VT = [],
          To = [],
          oo = [],
          Io = [],
          io = [],
          zo = [],
          ko = [],
          Wo = [],
          Xo = [],
          Bo = [],
          Fo = [],
          So = [],
          Do = [],
          Lo = [],
          xo = [],
          co = [],
          Ko = [],
          Mo = [],
          ro = [],
          Ao = [],
          go = [],
          ho = [],
          wo = [],
          mo = [],
          eo = [],
          Ro = [],
          uo = [],
          vo = [],
          Eo = [],
          fo = [],
          Co = [],
          jo = [],
          Jo = [],
          Uo = [],
          ao = [],
          Yo = [],
          Qo = [],
          Oo = [],
          Ho = [],
          no = [],
          qo = [],
          Zo = [];
        return TT = class extends pT {
          get target() {
            return this.Py
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
            this._upToYMatrix || (this._yToUpMatrix = new WT.b, this._upToYMatrix = new WT.b, this._upVector = WT.m.Zero()), TT.normalize(), this._upVector.SIT(TT), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            WT.b.RotationAlignToRef(WT.m.UpReadOnly, this._upVector, this._yToUpMatrix), WT.b.RotationAlignToRef(this._upVector, WT.m.UpReadOnly, this._upToYMatrix)
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
            const oT = this.inputs.attached.pointers;
            oT && (oT.angularSensibilityX = TT)
          }
          get angularSensibilityY() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.angularSensibilityY : 0
          }
          set angularSensibilityY(TT) {
            const oT = this.inputs.attached.pointers;
            oT && (oT.angularSensibilityY = TT)
          }
          get pinchPrecision() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchPrecision : 0
          }
          set pinchPrecision(TT) {
            const oT = this.inputs.attached.pointers;
            oT && (oT.pinchPrecision = TT)
          }
          get pinchDeltaPercentage() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(TT) {
            const oT = this.inputs.attached.pointers;
            oT && (oT.pinchDeltaPercentage = TT)
          }
          get useNaturalPinchZoom() {
            const TT = this.inputs.attached.pointers;
            return !!TT && TT.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(TT) {
            const oT = this.inputs.attached.pointers;
            oT && (oT.useNaturalPinchZoom = TT)
          }
          get panningSensibility() {
            const TT = this.inputs.attached.pointers;
            return TT ? TT.panningSensibility : 0
          }
          set panningSensibility(TT) {
            const oT = this.inputs.attached.pointers;
            oT && (oT.panningSensibility = TT)
          }
          get keysUp() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysUp : []
          }
          set keysUp(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysUp = TT)
          }
          get keysDown() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysDown : []
          }
          set keysDown(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysDown = TT)
          }
          get keysLeft() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysLeft : []
          }
          set keysLeft(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysLeft = TT)
          }
          get keysRight() {
            const TT = this.inputs.attached.keyboard;
            return TT ? TT.keysRight : []
          }
          set keysRight(TT) {
            const oT = this.inputs.attached.keyboard;
            oT && (oT.keysRight = TT)
          }
          get wheelPrecision() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelPrecision : 0
          }
          set wheelPrecision(TT) {
            const oT = this.inputs.attached.mousewheel;
            oT && (oT.wheelPrecision = TT)
          }
          get zoomToMouseLocation() {
            const TT = this.inputs.attached.mousewheel;
            return !!TT && TT.zoomToMouseLocation
          }
          set zoomToMouseLocation(TT) {
            const oT = this.inputs.attached.mousewheel;
            oT && (oT.zoomToMouseLocation = TT)
          }
          get wheelDeltaPercentage() {
            const TT = this.inputs.attached.mousewheel;
            return TT ? TT.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(TT) {
            const oT = this.inputs.attached.mousewheel;
            oT && (oT.wheelDeltaPercentage = TT)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(TT) {
            this._useCtrlForPanningInternal = TT;
            const oT = this.movement.input,
              IT = oT.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !TT && IT ? oT.inputMap.splice(oT.inputMap.indexOf(IT), 1) : TT && !IT && oT.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const iT = oT.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !TT && iT ? oT.inputMap.splice(oT.inputMap.indexOf(iT), 1) : TT && !iT && oT.addEntry({
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
            const oT = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            oT && (oT.button = TT)
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
            TT !== this.useBouncingBehavior && (TT ? (this._bouncingBehavior = new MT, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(TT) {
            TT !== this.useFramingBehavior && (TT ? (this._framingBehavior = new rT, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(TT) {
            TT !== this.useAutoRotationBehavior && (TT ? (this._autoRotationBehavior = new xT, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(TT, oT, IT, zT, XT, BT) {
            var FT;
            let ST = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(TT, WT.m.Zero(), BT, ST), FT = this, this.alpha = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, void 0)), this.beta = ((0, iT.j)(this, NT), (0, iT.j)(this, PT, void 0)), this.radius = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, void 0)), this.overrideCloneAlphaBetaRadius = ((0, iT.j)(this, To), (0, iT.j)(this, oo, void 0)), this.Py = ((0, iT.j)(this, Io), (0, iT.j)(this, io, void 0)), this._targetHost = ((0, iT.j)(this, zo), (0, iT.j)(this, ko, void 0)), this._upToYMatrix = (0, iT.j)(this, Wo), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, iT.j)(this, Xo, null), this.upperAlphaLimit = ((0, iT.j)(this, Bo), (0, iT.j)(this, Fo, null)), this.lowerBetaLimit = ((0, iT.j)(this, So), (0, iT.j)(this, Do, .01)), this.upperBetaLimit = ((0, iT.j)(this, Lo), (0, iT.j)(this, xo, Math.PI - .01)), this.lowerRadiusLimit = ((0, iT.j)(this, co), (0, iT.j)(this, Ko, null)), this.upperRadiusLimit = ((0, iT.j)(this, Mo), (0, iT.j)(this, ro, null)), this.lowerTargetYLimit = ((0, iT.j)(this, Ao), (0, iT.j)(this, go, -1 / 0)), this.inertialPanningX = ((0, iT.j)(this, ho), (0, iT.j)(this, wo, 0)), this.inertialPanningY = ((0, iT.j)(this, mo), (0, iT.j)(this, eo, 0)), this.pinchToPanMaxDistance = ((0, iT.j)(this, Ro), (0, iT.j)(this, uo, 20)), this.panningDistanceLimit = ((0, iT.j)(this, vo), (0, iT.j)(this, Eo, null)), this.panningOriginTarget = ((0, iT.j)(this, fo), (0, iT.j)(this, Co, WT.m.Zero())), this._panningInertia = ((0, iT.j)(this, jo), .9), this._inertia = .9, this.zoomOnFactor = (0, iT.j)(this, Jo, 1), this.targetScreenOffset = ((0, iT.j)(this, Uo), (0, iT.j)(this, ao, WT.j.Zero())), this.allowUpsideDown = ((0, iT.j)(this, Yo), (0, iT.j)(this, Qo, !0)), this.useInputToRestoreState = ((0, iT.j)(this, Oo), (0, iT.j)(this, Ho, !0)), this.restoreStateInterpolationFactor = ((0, iT.j)(this, no), (0, iT.j)(this, qo, 0)), this._currentInterpolationFactor = ((0, iT.j)(this, Zo), 0), this._viewMatrix = new WT.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new WT.m(1, 1, 0), this._transformedDirection = new WT.m, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new kT.d, this.checkCollisions = !1, this.collisionRadius = new WT.m(.5, .5, .5), this._previousPosition = WT.m.Zero(), this._collisionVelocity = WT.m.Zero(), this._newPosition = WT.m.Zero(), this._computationVector = WT.m.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new WT.m(NaN, NaN, NaN), this._goalTargetScreenOffset = new WT.j(NaN, NaN), this._onCollisionPositionChange = function(TT, oT) {
              let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              IT ? (FT.setPosition(oT), FT.cL && FT.cL(IT)) : FT._previousPosition.SIT(FT._position);
              const iT = Math.cos(FT.alpha),
                zT = Math.sin(FT.alpha),
                kT = Math.cos(FT.beta);
              let WT = Math.sin(FT.beta);
              0 === WT && (WT = 1e-4);
              const XT = FT._getTargetPosition();
              FT._computationVector.S_(FT.radius * iT * WT, FT.radius * kT, FT.radius * zT * WT), XT.addToRef(FT._computationVector, FT._newPosition), FT._position.SIT(FT._newPosition);
              let BT = FT.upVector;
              FT.allowUpsideDown && FT.beta < 0 && (BT = BT.clone(), BT = BT.ri()), FT._computeViewMatrix(FT._position, XT, BT), FT._viewMatrix.addAtIndex(12, FT.targetScreenOffset.x), FT._viewMatrix.addAtIndex(13, FT.targetScreenOffset.y), FT._collisionTriggered = !1
            }, this.Py = WT.m.Zero(), XT && this.setTarget(XT), this.alpha = oT, this.beta = IT, this.radius = zT, this.getViewMatrix(), this.inputs = new aT(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new HT(this.pC(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Py = new WT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = WT.j.Zero()
          }
          _updateCache(TT) {
            TT || super._updateCache(), this._cache.Py.SIT(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.SIT(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const TT = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? TT.addToRef(this._targetBoundingCenter, this.Py) : this.Py.SIT(TT)
            }
            const TT = this._getLockedTargetPosition();
            return TT || this.Py
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > LT.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              kT = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != kT ? this._currentInterpolationFactor = kT : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = nT(TT, this._goalAlpha), this._goalBeta = nT(oT, this._goalBeta), this._goalRadius = nT(IT, this._goalRadius), this._goalTarget.set(nT(iT.x, this._goalTarget.x), nT(iT.y, this._goalTarget.y), nT(iT.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(nT(zT.x, this._goalTargetScreenOffset.x), nT(zT.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, XT.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, XT.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, XT.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, XT.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Py.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(TT, oT) {
            let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const zT = arguments;
            oT = wT.i.BackCompatCameraNoPreventDefault(zT), this._useCtrlForPanning = IT, this._panningMouseButton = iT, "boolean" === typeof zT[0] && (zT.length > 1 && (this._useCtrlForPanning = zT[1]), zT.length > 2 && (this._panningMouseButton = zT[2])), this.inputs.attachElement(oT), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(TT, oT, IT) {
            const iT = this.invertRotation ? -1 : 1;
            let zT = TT * this._calculateHandednessMultiplier();
            this.beta < 0 && (zT *= -1), this.alpha += zT * iT, this.beta += oT * iT, this.radius -= IT
          }
          _applyPanDelta(TT, oT) {
            const IT = WT.i.sc[0].S_(TT, oT, oT);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), IT.multiplyInPlace(this.panningAxis), WT.m.TransformNormalToRef(IT, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const TT = this.upVector,
                oT = WT.m.CrossToRef(this._transformedDirection, TT, this._transformedDirection);
              WT.m.CrossToRef(TT, oT, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Py);
                WT.m.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Py.SIT(this._transformedDirection)
              } else {
                if (this.parent) {
                  const TT = WT.i.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(TT), TT.transposeToRef(TT), WT.m.TransformCoordinatesToRef(this._transformedDirection, TT, this._transformedDirection)
                }
                this.Py.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let TT = !1;
            this.movement.computeCurrentFrameDeltas();
            const oT = this.movement.rotationDeltaCurrentFrame,
              IT = this.movement.zoomDeltaCurrentFrame,
              iT = this.movement.panDeltaCurrentFrame;
            if (0 === oT.x && 0 === oT.y && 0 === IT && 0 === iT.x && 0 === iT.y || (TT = !0, 0 === oT.x && 0 === oT.y && 0 === IT || this._applyRotationAndZoomDelta(oT.x, oT.y, IT), 0 === iT.x && 0 === iT.y || this._applyPanDelta(iT.x, iT.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), TT = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const oT = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < oT && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < oT && (this.inertialPanningY = 0), TT = !0
            }
            if (TT) this.stopInterpolation();
            else if (this._isInterpolating) {
              let TT = !1;
              const oT = this._scene.Zc().getDeltaTime() / 1e3,
                IT = 1 - Math.pow(2, -oT / this._currentInterpolationFactor),
                iT = nT(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const oT = WT.i.sc[0].set(nT(this._goalTarget.x, this.Py.x), nT(this._goalTarget.y, this.Py.y), nT(this._goalTarget.z, this.Py.z));
                WT.m.LerpToRef(this.target, oT, IT, this.Py), 10 * WT.m.Distance(this.target, oT) / iT < LT.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.SIT(oT), this.setTarget(this.target, !1, !0, !0)) : TT = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const oT = WT.c.RotationAlphaBetaGammaToRef(nT(this._goalAlpha, this.alpha), nT(this._goalBeta, this.beta), 0, WT.i.Quaternion[0]),
                  iT = WT.c.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, WT.i.Quaternion[1]),
                  zT = WT.c.SlerpToRef(iT, oT, IT, WT.i.Quaternion[2]);
                zT.normalize();
                const kT = zT.toAlphaBetaGammaToRef(WT.i.sc[0]);
                if (this.alpha = kT.x, this.beta = kT.y, zT.isApprox(oT, LT.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const TT = oT.toAlphaBetaGammaToRef(WT.i.sc[0]);
                  this.alpha = TT.x, this.beta = TT.y
                } else TT = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (iT - this.radius) * IT, Math.abs(iT / this.radius - 1) < LT.d ? (this._goalRadius = NaN, this.radius = iT) : TT = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const oT = WT.i.Vector2[0].set(nT(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), nT(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                WT.j.LerpToRef(this.targetScreenOffset, oT, IT, this.targetScreenOffset), WT.j.Distance(this.targetScreenOffset, oT) < LT.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.SIT(oT)) : TT = !0
              }
              this._isInterpolating = TT
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || WT.m.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const TT = this.alpha;
            var oT, IT;
            this.alpha = function(TT) {
              let oT = Math.PI / 2;
              return 0 === TT.x && 0 === TT.z || (oT = Math.acos(TT.x / Math.sqrt(Math.pow(TT.x, 2) + Math.pow(TT.z, 2)))), TT.z < 0 && (oT = 2 * Math.PI - oT), oT
            }(this._computationVector), this.beta = (oT = this._computationVector.y, IT = this.radius, Math.acos(oT / IT));
            const iT = Math.round((TT - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * iT * Math.PI, this._checkLimits()
          }
          setPosition(TT) {
            this._position.equals(TT) || (this._position.SIT(TT), this.rebuildAnglesAndRadius())
          }
          setTarget(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (iT = this.overrideCloneAlphaBetaRadius ?? iT, TT.computeWorldMatrix) oT && TT.GJ ? this._targetBoundingCenter = TT.GJ().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, TT.computeWorldMatrix(), this._targetHost = TT, this.Py = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const oT = TT,
                iT = this._getTargetPosition();
              if (iT && !IT && iT.equals(oT)) return;
              this._targetHost = null, this.Py = oT, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            iT || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const TT = Math.cos(this.alpha),
              oT = Math.sin(this.alpha),
              IT = Math.cos(this.beta);
            let iT = Math.sin(this.beta);
            0 === iT && (iT = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const zT = this._getTargetPosition();
            if (this._computationVector.S_(this.radius * TT * iT, this.radius * IT, this.radius * oT * iT), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || WT.m.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), zT.addToRef(this._computationVector, this._newPosition), this.pC().collisionsEnabled && this.checkCollisions) {
              const TT = this.pC().collisionCoordinator;
              this._collider || (this._collider = TT.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, TT.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.SIT(this._newPosition);
              let TT = this.upVector;
              this.allowUpsideDown && iT < 0 && (TT = TT.ri()), this._computeViewMatrix(this._position, zT, TT), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.SIT(zT), this._viewMatrix
          }
          zoomOn(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            TT = TT || this.pC().meshes;
            const IT = FT.e.MinMax(TT);
            let iT = this._calculateLowerRadiusFromModelBoundingSphere(IT.min, IT.max);
            if (iT = Math.max(Math.min(iT, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = iT * this.zoomOnFactor, this.mode === AT.c.ORTHOGRAPHIC_CAMERA) {
              const TT = this.pC().Zc().getAspectRatio(this),
                oT = iT * this.zoomOnFactor / 2;
              this.orthoLeft = -oT * TT, this.orthoRight = oT * TT, this.orthoBottom = -oT, this.orthoTop = oT
            }
            this.focusOn({
              min: IT.min,
              max: IT.max,
              distance: iT
            }, oT)
          }
          focusOn(TT) {
            let oT, IT, iT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === TT.min) {
              const iT = TT || this.pC().meshes;
              oT = FT.e.MinMax(iT), IT = WT.m.Distance(oT.min, oT.max)
            } else {
              oT = TT, IT = TT.distance
            }
            this.Py = FT.e.Center(oT), iT || (this.maxZ = 2 * IT)
          }
          createRigCamera(oT, IT) {
            let iT = 0;
            switch (this.cameraRigMode) {
              case AT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case AT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case AT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case AT.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case AT.c.RIG_MODE_VR:
                iT = this._cameraRigParams.stereoHalfAngle * (0 === IT ? 1 : -1);
                break;
              case AT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                iT = this._cameraRigParams.stereoHalfAngle * (0 === IT ? -1 : 1)
            }
            const zT = new TT(oT, this.alpha + iT, this.beta, this.radius, this.Py, this.pC());
            return zT._cameraRigParams = {}, zT.isRigCamera = !0, zT.rigParent = this, zT.upVector = this.upVector, zT.mode = this.mode, zT.orthoLeft = this.orthoLeft, zT.orthoRight = this.orthoRight, zT.orthoBottom = this.orthoBottom, zT.orthoTop = this.orthoTop, zT
          }
          _updateRigCameras() {
            const TT = this._rigCameras[0],
              oT = this._rigCameras[1];
            switch (TT.beta = oT.beta = this.beta, this.cameraRigMode) {
              case AT.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case AT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case AT.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case AT.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case AT.c.RIG_MODE_VR:
                TT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, oT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case AT.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                TT.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, oT.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const iT = WT.m.Distance(TT, oT),
              zT = this.pC().Zc().getAspectRatio(this),
              kT = Math.tan(this.fov / 2),
              XT = kT * zT,
              BT = .5 * iT * IT,
              FT = BT * Math.sqrt(1 + 1 / (XT * XT)),
              ST = BT * Math.sqrt(1 + 1 / (kT * kT));
            return Math.max(FT, ST)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(pT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], BT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.M)("target")], cT = [(0, zT.E)("targetHost")], KT = [(0, zT.P)()], hT = [(0, zT.P)()], mT = [(0, zT.P)()], eT = [(0, zT.P)()], RT = [(0, zT.P)()], uT = [(0, zT.P)()], vT = [(0, zT.P)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], jT = [(0, zT.P)()], JT = [(0, zT.P)()], UT = [(0, zT.P)()], YT = [(0, zT.P)()], QT = [(0, zT.M)()], OT = [(0, zT.P)()], qT = [(0, zT.P)()], ZT = [(0, zT.P)()], lT = [(0, zT.I)()], sT = [(0, zT.P)()], tT = [(0, zT.P)()], GT = [(0, zT.P)()], (0, iT.h)(TT, null, KT, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialAlphaOffset" in TT,
              get: TT => TT.inertialAlphaOffset
            },
            metadata: kT
          }, null, bT), (0, iT.h)(TT, null, hT, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialBetaOffset" in TT,
              get: TT => TT.inertialBetaOffset
            },
            metadata: kT
          }, null, bT), (0, iT.h)(TT, null, mT, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialRadiusOffset" in TT,
              get: TT => TT.inertialRadiusOffset
            },
            metadata: kT
          }, null, bT), (0, iT.h)(TT, null, OT, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningInertia" in TT,
              get: TT => TT.panningInertia
            },
            metadata: kT
          }, null, bT), (0, iT.h)(TT, null, qT, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomToMouseLocation" in TT,
              get: TT => TT.zoomToMouseLocation
            },
            metadata: kT
          }, null, bT), (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "alpha" in TT,
              get: TT => TT.alpha,
              set: (TT, oT) => {
                TT.alpha = oT
              }
            },
            metadata: kT
          }, yT, NT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: TT => "beta" in TT,
              get: TT => TT.beta,
              set: (TT, oT) => {
                TT.beta = oT
              }
            },
            metadata: kT
          }, PT, dT), (0, iT.h)(null, null, BT, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: TT => "radius" in TT,
              get: TT => TT.radius,
              set: (TT, oT) => {
                TT.radius = oT
              }
            },
            metadata: kT
          }, VT, To), (0, iT.h)(null, null, ST, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "overrideCloneAlphaBetaRadius" in TT,
              get: TT => TT.overrideCloneAlphaBetaRadius,
              set: (TT, oT) => {
                TT.overrideCloneAlphaBetaRadius = oT
              }
            },
            metadata: kT
          }, oo, Io), (0, iT.h)(null, null, DT, {
            kind: "field",
            name: "Py",
            static: !1,
            private: !1,
            access: {
              has: TT => "Py" in TT,
              get: TT => TT.Py,
              set: (TT, oT) => {
                TT.Py = oT
              }
            },
            metadata: kT
          }, io, zo), (0, iT.h)(null, null, cT, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: TT => "_targetHost" in TT,
              get: TT => TT._targetHost,
              set: (TT, oT) => {
                TT._targetHost = oT
              }
            },
            metadata: kT
          }, ko, Wo), (0, iT.h)(null, null, eT, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerAlphaLimit" in TT,
              get: TT => TT.lowerAlphaLimit,
              set: (TT, oT) => {
                TT.lowerAlphaLimit = oT
              }
            },
            metadata: kT
          }, Xo, Bo), (0, iT.h)(null, null, RT, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperAlphaLimit" in TT,
              get: TT => TT.upperAlphaLimit,
              set: (TT, oT) => {
                TT.upperAlphaLimit = oT
              }
            },
            metadata: kT
          }, Fo, So), (0, iT.h)(null, null, uT, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerBetaLimit" in TT,
              get: TT => TT.lowerBetaLimit,
              set: (TT, oT) => {
                TT.lowerBetaLimit = oT
              }
            },
            metadata: kT
          }, Do, Lo), (0, iT.h)(null, null, vT, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperBetaLimit" in TT,
              get: TT => TT.upperBetaLimit,
              set: (TT, oT) => {
                TT.upperBetaLimit = oT
              }
            },
            metadata: kT
          }, xo, co), (0, iT.h)(null, null, ET, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerRadiusLimit" in TT,
              get: TT => TT.lowerRadiusLimit,
              set: (TT, oT) => {
                TT.lowerRadiusLimit = oT
              }
            },
            metadata: kT
          }, Ko, Mo), (0, iT.h)(null, null, fT, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "upperRadiusLimit" in TT,
              get: TT => TT.upperRadiusLimit,
              set: (TT, oT) => {
                TT.upperRadiusLimit = oT
              }
            },
            metadata: kT
          }, ro, Ao), (0, iT.h)(null, null, CT, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "lowerTargetYLimit" in TT,
              get: TT => TT.lowerTargetYLimit,
              set: (TT, oT) => {
                TT.lowerTargetYLimit = oT
              }
            },
            metadata: kT
          }, go, ho), (0, iT.h)(null, null, jT, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningX" in TT,
              get: TT => TT.inertialPanningX,
              set: (TT, oT) => {
                TT.inertialPanningX = oT
              }
            },
            metadata: kT
          }, wo, mo), (0, iT.h)(null, null, JT, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: TT => "inertialPanningY" in TT,
              get: TT => TT.inertialPanningY,
              set: (TT, oT) => {
                TT.inertialPanningY = oT
              }
            },
            metadata: kT
          }, eo, Ro), (0, iT.h)(null, null, UT, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: TT => "pinchToPanMaxDistance" in TT,
              get: TT => TT.pinchToPanMaxDistance,
              set: (TT, oT) => {
                TT.pinchToPanMaxDistance = oT
              }
            },
            metadata: kT
          }, uo, vo), (0, iT.h)(null, null, YT, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningDistanceLimit" in TT,
              get: TT => TT.panningDistanceLimit,
              set: (TT, oT) => {
                TT.panningDistanceLimit = oT
              }
            },
            metadata: kT
          }, Eo, fo), (0, iT.h)(null, null, QT, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: TT => "panningOriginTarget" in TT,
              get: TT => TT.panningOriginTarget,
              set: (TT, oT) => {
                TT.panningOriginTarget = oT
              }
            },
            metadata: kT
          }, Co, jo), (0, iT.h)(null, null, ZT, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "zoomOnFactor" in TT,
              get: TT => TT.zoomOnFactor,
              set: (TT, oT) => {
                TT.zoomOnFactor = oT
              }
            },
            metadata: kT
          }, Jo, Uo), (0, iT.h)(null, null, lT, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: TT => "targetScreenOffset" in TT,
              get: TT => TT.targetScreenOffset,
              set: (TT, oT) => {
                TT.targetScreenOffset = oT
              }
            },
            metadata: kT
          }, ao, Yo), (0, iT.h)(null, null, sT, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: TT => "allowUpsideDown" in TT,
              get: TT => TT.allowUpsideDown,
              set: (TT, oT) => {
                TT.allowUpsideDown = oT
              }
            },
            metadata: kT
          }, Qo, Oo), (0, iT.h)(null, null, tT, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: TT => "useInputToRestoreState" in TT,
              get: TT => TT.useInputToRestoreState,
              set: (TT, oT) => {
                TT.useInputToRestoreState = oT
              }
            },
            metadata: kT
          }, Ho, no), (0, iT.h)(null, null, GT, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: TT => "restoreStateInterpolationFactor" in TT,
              get: TT => TT.restoreStateInterpolationFactor,
              set: (TT, oT) => {
                TT.restoreStateInterpolationFactor = oT
              }
            },
            metadata: kT
          }, qo, Zo), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      ZT = !1;
    ZT || (ZT = !0, BT.c.AddNodeConstructor("ArcRotateCamera", ((TT, oT) => () => new qT(TT, 0, 0, 1, WT.m.Zero(), oT))), (0, YT.h)("BABYLON.ArcRotateCamera", qT))
  },
  39021: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.e
    });
    var iT = IT(39024);
    (0, iT.g)()
  },
  39024: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST,
      g: () => LT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(36177),
      XT = IT(39031),
      BT = IT(38994),
      FT = IT(36166);
    let ST = (() => {
        var TT;
        let oT, IT, BT = XT.b,
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        return TT = class extends BT {
          constructor(TT, oT, IT, zT) {
            super(TT, IT, zT), this.groundColor = (0, iT.j)(this, FT, new WT.e(0, 0, 0)), this.direction = ((0, iT.j)(this, ST), (0, iT.j)(this, DT, void 0)), (0, iT.j)(this, LT), this.direction = oT || kT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = kT.m.Normalize(TT.subtract(kT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", IT.x, IT.y, IT.z, 0, oT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), oT), this
          }
          transferToNodeMaterialEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return TT.setFloat3(oT, IT.x, IT.y, IT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = kT.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return XT.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, oT) {
            TT["HEMILIGHT" + oT] = !0
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.q)()], IT = [(0, zT.M)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, oT) => {
                TT.groundColor = oT
              }
            },
            metadata: kT
          }, FT, ST), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, oT) => {
                TT.direction = oT
              }
            },
            metadata: kT
          }, DT, LT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      DT = !1;

    function LT() {
      DT || (DT = !0, BT.c.AddNodeConstructor("Light_Type_3", ((TT, oT) => () => new ST(TT, kT.m.Zero(), oT))), (0, FT.h)("BABYLON.HemisphericLight", ST))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
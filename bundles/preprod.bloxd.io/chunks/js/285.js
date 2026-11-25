export const id = 285;
export const ids = [285];
export const modules = {
  42190: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => NM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38068),
      aM = iM(38040),
      PM = iM(38074),
      nM = iM(41328),
      QM = iM(41502),
      zM = iM(41283),
      LM = iM(41009),
      mM = iM(38044);
    class HM {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(MM) {
        this._zoomStopsAnimation = MM
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(MM) {
        this._idleRotationSpeed = MM
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(MM) {
        this._idleRotationWaitTime = MM
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(MM) {
        this._idleRotationSpinupTime = MM
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
      attach(MM) {
        this._attachedCamera = MM;
        const rM = this._attachedCamera.Hk();
        this._onPrePointerObservableObserver = rM.onPrePointerObservable.add((MM => {
          MM.type !== zM.d.POINTERDOWN ? MM.type === zM.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = MM.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const MM = LM.b.Now;
          let rM = 0;
          null != this._lastFrameTime && (rM = MM - this._lastFrameTime), this._lastFrameTime = MM, this._applyUserInteraction();
          const iM = MM - this._lastInteractionTime - this._idleRotationWaitTime,
            OM = Math.max(Math.min(iM / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * OM, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (rM / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const MM = this._attachedCamera.Hk();
        this._onPrePointerObservableObserver && MM.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(MM) {
        this._lastInteractionTime = MM ?? LM.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < mM.d
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let MM = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (MM = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? MM : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = LM.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    iM(42196);
    class hM {
      constructor() {
        this._easingMode = hM.EASINGMODE_EASEIN
      }
      setEasingMode(MM) {
        const rM = Math.min(Math.max(MM, 0), 2);
        this._easingMode = rM
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(MM) {
        throw new Error("You must implement this method")
      }
      ease(MM) {
        switch (this._easingMode) {
          case hM.EASINGMODE_EASEIN:
            return this.easeInCore(MM);
          case hM.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - MM)
        }
        return MM >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - MM))) + .5 : .5 * this.easeInCore(2 * MM)
      }
    }
    hM.EASINGMODE_EASEIN = 0, hM.EASINGMODE_EASEOUT = 1, hM.EASINGMODE_EASEINOUT = 2;
    var JM = iM(42200);
    class dM {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(MM) {
        if (this._autoTransitionRange === MM) return;
        this._autoTransitionRange = MM;
        const rM = this._attachedCamera;
        rM && (MM ? this._onMeshTargetChangedObserver = rM.onMeshTargetChangedObservable.add((MM => {
          if (MM && (MM.computeWorldMatrix(!0), MM.aY)) {
            const rM = MM.aY().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * rM, this.upperRadiusTransitionRange = .05 * rM
          }
        })) : this._onMeshTargetChangedObserver && rM.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(MM) {
        this._attachedCamera = MM, this._onAfterCheckInputsObserver = MM.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(MM) {
        return !!this._attachedCamera && (this._attachedCamera.radius === MM && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(MM) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (dM.EasingFunction.setEasingMode(dM.EasingMode), this._radiusBounceTransition = JM.b.CreateAnimation("radius", JM.b.ANIMATIONTYPE_FLOAT, 60, dM.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const rM = JM.b.TransitionTo("radius", this._attachedCamera.radius + MM, this._attachedCamera, this._attachedCamera.Hk(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        rM && this._animatables.push(rM)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    dM.EasingFunction = new class extends hM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = MM
      }
      easeInCore(MM) {
        const rM = Math.max(0, this.amplitude);
        return Math.pow(MM, 3) - MM * rM * Math.sin(3.141592653589793 * MM)
      }
    }(.3), dM.EasingMode = hM.EASINGMODE_EASEOUT;
    class yM {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new jM.d, this._mode = yM.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(MM) {
        this._mode = MM
      }
      get mode() {
        return this._mode
      }
      set radiusScale(MM) {
        this._radiusScale = MM
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(MM) {
        this._positionScale = MM
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(MM) {
        this._defaultElevation = MM
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(MM) {
        this._elevationReturnTime = MM
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(MM) {
        this._elevationReturnWaitTime = MM
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(MM) {
        this._zoomStopsAnimation = MM
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(MM) {
        this._framingTime = MM
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(MM) {
        this._attachedCamera = MM;
        const rM = this._attachedCamera.Hk();
        yM.EasingFunction.setEasingMode(yM.EasingMode), this._onPrePointerObservableObserver = rM.onPrePointerObservable.add((MM => {
          MM.type !== zM.d.POINTERDOWN ? MM.type === zM.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = MM.onMeshTargetChangedObservable.add((MM => {
          MM && MM.aY && this.zoomOnMesh(MM, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = MM.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const MM = this._attachedCamera.Hk();
        this._onPrePointerObservableObserver && MM.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        MM.computeWorldMatrix(!0);
        const OM = MM.aY().boundingBox;
        this.zoomOnBoundingInfo(OM.minimumWorld, OM.maximumWorld, rM, iM)
      }
      zoomOnMeshHierarchy(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        MM.computeWorldMatrix(!0);
        const OM = MM.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(OM.min, OM.max, rM, iM)
      }
      zoomOnMeshesHierarchy(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const OM = new aM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          SM = new aM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let jM = 0; jM < MM.length; jM++) {
          const rM = MM[jM].getHierarchyBoundingVectors(!0);
          aM.q.CheckExtends(rM.min, OM, SM), aM.q.CheckExtends(rM.max, OM, SM)
        }
        this.zoomOnBoundingInfo(OM, SM, rM, iM)
      }
      zoomOnBoundingInfo(MM, rM) {
        let iM, OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const jM = MM.y,
          PM = jM + (rM.y - jM) * this._positionScale,
          nM = rM.subtract(MM).scale(.5);
        if (!isFinite(PM)) return !1;
        if (OM) iM = new aM.q(0, PM, 0);
        else {
          const rM = MM.add(nM);
          iM = new aM.q(rM.x, PM, rM.z)
        }
        this._vectorTransition || (this._vectorTransition = JM.b.CreateAnimation("target", JM.b.ANIMATIONTYPE_VECTOR3, 60, yM.EasingFunction)), this._betaIsAnimating = !0;
        let QM = JM.b.TransitionTo("target", iM, this._attachedCamera, this._attachedCamera.Hk(), 60, this._vectorTransition, this._framingTime);
        QM && this._animatables.push(QM);
        let zM = 0;
        if (this._mode === yM.FitFrustumSidesMode) {
          const iM = this._calculateLowerRadiusFromModelBoundingSphere(MM, rM);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = nM.length() + this._attachedCamera.minZ), zM = iM
        } else this._mode === yM.IgnoreBoundsSizeMode && (zM = this._calculateLowerRadiusFromModelBoundingSphere(MM, rM), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const iM = rM.subtract(MM).length();
          this._attachedCamera.panningSensibility = 5e3 / iM, this._attachedCamera.wheelPrecision = 100 / zM
        }
        return this._radiusTransition || (this._radiusTransition = JM.b.CreateAnimation("radius", JM.b.ANIMATIONTYPE_FLOAT, 60, yM.EasingFunction)), QM = JM.b.TransitionTo("radius", zM, this._attachedCamera, this._attachedCamera.Hk(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), SM && SM(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), QM && this._animatables.push(QM), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(MM, rM) {
        const iM = this._attachedCamera;
        if (!iM) return 0;
        let OM = iM._calculateLowerRadiusFromModelBoundingSphere(MM, rM, this._radiusScale);
        return iM.lowerRadiusLimit && this._mode === yM.IgnoreBoundsSizeMode && (OM = OM < iM.lowerRadiusLimit ? iM.lowerRadiusLimit : OM), iM.upperRadiusLimit && (OM = OM > iM.upperRadiusLimit ? iM.upperRadiusLimit : OM), OM
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const MM = LM.b.Now - this._lastInteractionTime,
          rM = .5 * Math.PI - this._defaultElevation,
          iM = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > iM && MM >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = JM.b.CreateAnimation("beta", JM.b.ANIMATIONTYPE_FLOAT, 60, yM.EasingFunction));
          const MM = JM.b.TransitionTo("beta", rM, this._attachedCamera, this._attachedCamera.Hk(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          MM && this._animatables.push(MM)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = LM.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    yM.EasingFunction = new class extends hM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = MM
      }
      easeInCore(MM) {
        return this.exponent <= 0 ? MM : (Math.exp(this.exponent * MM) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, yM.EasingMode = hM.EASINGMODE_EASEINOUT, yM.IgnoreBoundsSizeMode = 0, yM.FitFrustumSidesMode = 1;
    var lM = iM(41323),
      EM = iM(41320),
      UM = iM(41354),
      GM = iM(41205);
    let CM = (() => {
        var MM;
        let rM, iM = [],
          jM = [];
        return MM = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, OM.m)(this, iM, [0, 1, 2]), this._pointerInput = (0, OM.m)(this, jM)
          }
          attachControl(MM) {
            MM = GM.e.BackCompatCameraNoPreventDefault(arguments);
            const rM = this.camera.ph(),
              iM = rM.getInputElement();
            let OM = 0,
              SM = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = jM => {
              const aM = jM.event,
                PM = "touch" === aM.pointerType;
              if (jM.type !== zM.d.POINTERMOVE && -1 === this.buttons.indexOf(aM.button)) return;
              const nM = aM.target;
              if (this._altKey = aM.altKey, this._ctrlKey = aM.ctrlKey, this._metaKey = aM.metaKey, this._shiftKey = aM.shiftKey, this._buttonsPressed = aM.buttons, rM.isPointerLock) {
                const MM = aM.movementX,
                  rM = aM.movementY;
                this.onTouch(null, MM, rM), this._pointA = null, this._pointB = null
              } else {
                if (jM.type !== zM.d.POINTERDOWN && jM.type !== zM.d.POINTERDOUBLETAP && PM && this._pointA?.pointerId !== aM.pointerId && this._pointB?.pointerId !== aM.pointerId) return;
                if (jM.type !== zM.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !PM)
                  if (jM.type === zM.d.POINTERDOUBLETAP) this.onDoubleTap(aM.pointerType, aM);
                  else if (jM.type !== zM.d.POINTERUP || this._currentMousePointerIdDown !== aM.pointerId && !PM) {
                  if (jM.type === zM.d.POINTERMOVE)
                    if (MM || aM.preventDefault(), this._pointA && null === this._pointB) {
                      const MM = aM.clientX - this._pointA.x,
                        rM = aM.clientY - this._pointA.y;
                      this._pointA.x = aM.clientX, this._pointA.y = aM.clientY, this.onTouch(this._pointA, MM, rM)
                    } else if (this._pointA && this._pointB) {
                    const MM = this._pointA.pointerId === aM.pointerId ? this._pointA : this._pointB;
                    MM.x = aM.clientX, MM.y = aM.clientY;
                    const rM = this._pointA.x - this._pointB.x,
                      iM = this._pointA.y - this._pointB.y,
                      PM = rM * rM + iM * iM,
                      nM = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: aM.pointerId,
                        type: jM.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, OM, PM, SM, nM), SM = nM, OM = PM
                  }
                } else {
                  try {
                    nM?.releasePointerCapture(aM.pointerId)
                  } catch (QM) {}
                  PM || (this._pointB = null), rM._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == aM.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == aM.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== OM || SM) && (this.onMultiTouch(this._pointA, this._pointB, OM, 0, SM, null), OM = 0, SM = null), this._currentMousePointerIdDown = -1, this.onButtonUp(aM), MM || aM.preventDefault()
                } else {
                  try {
                    nM?.setPointerCapture(aM.pointerId)
                  } catch (QM) {}
                  if (null === this._pointA) this._pointA = {
                    x: aM.clientX,
                    y: aM.clientY,
                    pointerId: aM.pointerId,
                    type: aM.pointerType,
                    button: aM.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: aM.clientX,
                      y: aM.clientY,
                      pointerId: aM.pointerId,
                      type: aM.pointerType,
                      button: aM.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || PM || (this._currentMousePointerIdDown = aM.pointerId), this.onButtonDown(aM), MM || (aM.preventDefault(), iM && iM.focus())
                }
              }
            }, this._observer = this.camera.Hk()._inputManager._addCameraPointerObserver(this._pointerInput, zM.d.POINTERDOWN | zM.d.POINTERUP | zM.d.POINTERMOVE | zM.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, OM = 0, SM = null, this.onLostFocus()
            }, this._contextMenuBind = MM => this.onContextMenu(MM), iM && iM.addEventListener("contextmenu", this._contextMenuBind, !1);
            const jM = this.camera.Hk().ph().getHostWindow();
            jM && GM.e.RegisterTopRootEvents(jM, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const MM = this.camera.Hk().ph().getHostWindow();
              MM && GM.e.UnregisterTopRootEvents(MM, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Hk()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const MM = this.camera.Hk().ph().getInputElement();
                MM && MM.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(MM, rM) {}
          onTouch(MM, rM, iM) {}
          onMultiTouch(MM, rM, iM, OM, SM, jM) {}
          onContextMenu(MM) {
            MM.preventDefault()
          }
          onButtonDown(MM) {}
          onButtonUp(MM) {}
          onLostFocus() {}
        }, (() => {
          const aM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: MM => "buttons" in MM,
              get: MM => MM.buttons,
              set: (MM, rM) => {
                MM.buttons = rM
              }
            },
            metadata: aM
          }, iM, jM), aM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aM
          })
        })(), MM
      })(),
      eM = (() => {
        var MM;
        let rM, iM, jM, aM = CM,
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        return MM = class extends aM {
          constructor() {
            super(...arguments), this.pinchZoom = (0, OM.m)(this, PM, !0), this.multiTouchPanning = ((0, OM.m)(this, nM), (0, OM.m)(this, QM, !0)), this.multiTouchPanAndZoom = ((0, OM.m)(this, zM), (0, OM.m)(this, LM, !0)), this._isPinching = ((0, OM.m)(this, mM), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(MM, rM) {}
          _computeMultiTouchPanning(MM, rM) {}
          onMultiTouch(MM, rM, iM, OM, SM, jM) {
            0 === iM && null === SM || 0 === OM && null === jM || (this.multiTouchPanAndZoom ? (this._computePinchZoom(iM, OM), this._computeMultiTouchPanning(SM, jM)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(iM, OM), this._isPinching = !0) : this._computeMultiTouchPanning(SM, jM)) : this.multiTouchPanning ? this._computeMultiTouchPanning(SM, jM) : this.pinchZoom && this._computePinchZoom(iM, OM))
          }
          onButtonUp(MM) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(aM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: MM => "pinchZoom" in MM,
              get: MM => MM.pinchZoom,
              set: (MM, rM) => {
                MM.pinchZoom = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: MM => "multiTouchPanning" in MM,
              get: MM => MM.multiTouchPanning,
              set: (MM, rM) => {
                MM.multiTouchPanning = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, OM.i)(null, null, jM, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: MM => "multiTouchPanAndZoom" in MM,
              get: MM => MM.multiTouchPanAndZoom,
              set: (MM, rM) => {
                MM.multiTouchPanAndZoom = rM
              }
            },
            metadata: HM
          }, LM, mM), HM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          })
        })(), MM
      })(),
      bM = (() => {
        var MM;
        let rM, iM, jM, aM, PM, nM, QM, zM = eM,
          LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [],
          yM = [],
          lM = [],
          EM = [],
          UM = [],
          GM = [],
          CM = [],
          bM = [],
          wM = [];
        return MM = class extends zM {
          constructor() {
            super(...arguments), this.buttons = (0, OM.m)(this, LM, [0, 1, 2]), this.angularSensibilityX = ((0, OM.m)(this, mM), (0, OM.m)(this, HM, 1e3)), this.angularSensibilityY = ((0, OM.m)(this, hM), (0, OM.m)(this, JM, 1e3)), this.pinchPrecision = ((0, OM.m)(this, dM), (0, OM.m)(this, yM, 12)), this.pinchDeltaPercentage = ((0, OM.m)(this, lM), (0, OM.m)(this, EM, 0)), this.useNaturalPinchZoom = ((0, OM.m)(this, UM), (0, OM.m)(this, GM, !1)), this.panningSensibility = ((0, OM.m)(this, CM), (0, OM.m)(this, bM, 1e3)), this.pinchInwards = ((0, OM.m)(this, wM), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(MM, rM) {
            if (MM && rM) {
              const iM = rM.x - MM.x,
                OM = rM.y - MM.y,
                SM = this.camera.movement.input.getEntry("pointer", "pan"),
                jM = SM?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== jM && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -iM * jM, this.camera.movement.panAccumulatedPixels.y += OM * jM)
            }
          }
          _computePinchZoom(rM, iM) {
            const OM = this.camera.radius || MM.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = OM * Math.sqrt(rM) / Math.sqrt(iM);
            else if (this.pinchDeltaPercentage) {
              const MM = .001 * (iM - rM) * OM * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += MM
            } else {
              const MM = (iM - rM) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += MM
            }
          }
          onTouch(MM, rM, iM) {
            const OM = this._activeEntry ?? (this.camera.ph().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (OM)
              if ("pan" === OM.interaction) {
                const MM = OM.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== MM && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -rM * MM, this.camera.movement.panAccumulatedPixels.y += iM * MM)
              } else if ("rotate" === OM.interaction) {
              const MM = OM.yI ?? OM.sensitivity ?? 1 / this.angularSensibilityX,
                SM = OM.pI ?? OM.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -rM * MM, this.camera.movement.rotationAccumulatedPixels.y += -iM * SM
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(MM, rM, iM, OM, SM, jM) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(OM) - Math.sqrt(iM)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(MM, rM, iM, OM, SM, jM)
          }
          onButtonDown(MM) {
            this._pointerConditions.button = MM.button, this._pointerModifiers.ctrl = MM.ctrlKey, this._pointerModifiers.alt = MM.altKey, this._pointerModifiers.shift = MM.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(MM)
          }
          onButtonUp(MM) {
            this._activeEntry = null, super.onButtonUp(MM)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const eM = "function" === typeof Symbol && Symbol.metadata ? Object.create(zM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], aM = [(0, SM.L)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: MM => "buttons" in MM,
              get: MM => MM.buttons,
              set: (MM, rM) => {
                MM.buttons = rM
              }
            },
            metadata: eM
          }, LM, mM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: MM => "angularSensibilityX" in MM,
              get: MM => MM.angularSensibilityX,
              set: (MM, rM) => {
                MM.angularSensibilityX = rM
              }
            },
            metadata: eM
          }, HM, hM), (0, OM.i)(null, null, jM, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: MM => "angularSensibilityY" in MM,
              get: MM => MM.angularSensibilityY,
              set: (MM, rM) => {
                MM.angularSensibilityY = rM
              }
            },
            metadata: eM
          }, JM, dM), (0, OM.i)(null, null, aM, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: MM => "pinchPrecision" in MM,
              get: MM => MM.pinchPrecision,
              set: (MM, rM) => {
                MM.pinchPrecision = rM
              }
            },
            metadata: eM
          }, yM, lM), (0, OM.i)(null, null, PM, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: MM => "pinchDeltaPercentage" in MM,
              get: MM => MM.pinchDeltaPercentage,
              set: (MM, rM) => {
                MM.pinchDeltaPercentage = rM
              }
            },
            metadata: eM
          }, EM, UM), (0, OM.i)(null, null, nM, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: MM => "useNaturalPinchZoom" in MM,
              get: MM => MM.useNaturalPinchZoom,
              set: (MM, rM) => {
                MM.useNaturalPinchZoom = rM
              }
            },
            metadata: eM
          }, GM, CM), (0, OM.i)(null, null, QM, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: MM => "panningSensibility" in MM,
              get: MM => MM.panningSensibility,
              set: (MM, rM) => {
                MM.panningSensibility = rM
              }
            },
            metadata: eM
          }, bM, wM), eM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eM
          })
        })(), MM.MinimumRadiusForPinch = .001, MM
      })();
    UM.c.ArcRotateCameraPointersInput = bM;
    var wM = iM(41287);
    let tM = (() => {
      var MM;
      let rM, iM, jM, PM, nM, QM, zM, LM, mM, HM, hM, JM = [],
        dM = [],
        yM = [],
        lM = [],
        EM = [],
        UM = [],
        CM = [],
        eM = [],
        bM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [];
      return MM = class {
        constructor() {
          this.camera = (0, OM.m)(this, JM), this.keysUp = (0, OM.m)(this, dM, [38]), this.keysDown = ((0, OM.m)(this, yM), (0, OM.m)(this, lM, [40])), this.keysLeft = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, [37])), this.keysRight = ((0, OM.m)(this, CM), (0, OM.m)(this, eM, [39])), this.keysReset = ((0, OM.m)(this, bM), (0, OM.m)(this, tM, [220])), this.keysZoomIn = ((0, OM.m)(this, gM), (0, OM.m)(this, uM, [187, 107])), this.keysZoomOut = ((0, OM.m)(this, RM), (0, OM.m)(this, pM, [189, 109])), this.panningSensibility = ((0, OM.m)(this, WM), (0, OM.m)(this, sM, 50)), this.zoomingSensibility = ((0, OM.m)(this, DM), (0, OM.m)(this, kM, 25)), this.angularSpeed = ((0, OM.m)(this, ZM), (0, OM.m)(this, oM, .01)), this._useAltToZoom = ((0, OM.m)(this, fM), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new aM.o, this._panDirection = new aM.o
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(MM) {
          this._useAltToZoom = MM, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const MM = this.camera.movement.input,
            rM = MM.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && rM ? MM.inputMap.splice(MM.inputMap.indexOf(rM), 1) : this._useAltToZoom && !rM && MM.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(MM) {
          MM = GM.e.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Hk(), this._engine = this._scene.ph(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((rM => {
            const iM = rM.event;
            if (!iM.metaKey)
              if (rM.type === wM.b.KEYDOWN) {
                if (this._ctrlPressed = iM.ctrlKey, this._altPressed = iM.altKey, -1 !== this.keysUp.indexOf(iM.keyCode) || -1 !== this.keysDown.indexOf(iM.keyCode) || -1 !== this.keysLeft.indexOf(iM.keyCode) || -1 !== this.keysRight.indexOf(iM.keyCode) || -1 !== this.keysReset.indexOf(iM.keyCode) || -1 !== this.keysZoomIn.indexOf(iM.keyCode) || -1 !== this.keysZoomOut.indexOf(iM.keyCode)) {
                  -1 === this._keys.indexOf(iM.keyCode) && this._keys.push(iM.keyCode), iM.preventDefault && (MM || iM.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(iM.keyCode) || -1 !== this.keysDown.indexOf(iM.keyCode) || -1 !== this.keysLeft.indexOf(iM.keyCode) || -1 !== this.keysRight.indexOf(iM.keyCode) || -1 !== this.keysReset.indexOf(iM.keyCode) || -1 !== this.keysZoomIn.indexOf(iM.keyCode) || -1 !== this.keysZoomOut.indexOf(iM.keyCode)) {
              const rM = this._keys.indexOf(iM.keyCode);
              rM >= 0 && this._keys.splice(rM, 1), iM.preventDefault && (MM || iM.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const MM = this.camera,
              rM = MM.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const iM = this._rotateDirection.set(0, 0),
              OM = this._panDirection.set(0, 0);
            let SM = 0,
              jM = 0;
            for (let aM = 0; aM < this._keys.length; aM++) {
              const PM = this._keys[aM];
              if (this._keyboardConditions.key = PM, -1 === this.keysReset.indexOf(PM)) {
                const MM = rM.resolveInteraction("keyboard", this._keyboardConditions);
                if (MM)
                  if ("pan" === MM.interaction) jM = Math.max(jM, MM.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(PM) ? OM.x -= 1 : -1 !== this.keysRight.indexOf(PM) ? OM.x += 1 : -1 !== this.keysUp.indexOf(PM) ? OM.y += 1 : -1 !== this.keysDown.indexOf(PM) && (OM.y -= 1);
                  else if ("zoom" === MM.interaction) {
                  const iM = MM.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(PM) || -1 !== this.keysZoomIn.indexOf(PM) ? rM.handlers.zoom(iM) : -1 === this.keysDown.indexOf(PM) && -1 === this.keysZoomOut.indexOf(PM) || rM.handlers.zoom(-iM)
                } else "rotate" === MM.interaction && (SM = Math.max(SM, MM.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(PM) ? iM.x -= 1 : -1 !== this.keysRight.indexOf(PM) ? iM.x += 1 : -1 !== this.keysUp.indexOf(PM) ? iM.y -= 1 : -1 !== this.keysDown.indexOf(PM) && (iM.y += 1))
              } - 1 !== this.keysReset.indexOf(PM) && MM.useInputToRestoreState && MM.restoreState()
            }
            0 === iM.x && 0 === iM.y || (iM.normalize().scaleInPlace(SM), rM.handlers.rotate(iM.x, iM.y)), 0 === OM.x && 0 === OM.y || (OM.normalize().scaleInPlace(jM), rM.handlers.pan(OM.x, OM.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const aM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], HM = [(0, SM.L)()], hM = [(0, SM.L)()], (0, OM.i)(MM, null, hM, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAltToZoom" in MM,
            get: MM => MM.useAltToZoom
          },
          metadata: aM
        }, null, JM), (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysUp" in MM,
            get: MM => MM.keysUp,
            set: (MM, rM) => {
              MM.keysUp = rM
            }
          },
          metadata: aM
        }, dM, yM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysDown" in MM,
            get: MM => MM.keysDown,
            set: (MM, rM) => {
              MM.keysDown = rM
            }
          },
          metadata: aM
        }, lM, EM), (0, OM.i)(null, null, jM, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysLeft" in MM,
            get: MM => MM.keysLeft,
            set: (MM, rM) => {
              MM.keysLeft = rM
            }
          },
          metadata: aM
        }, UM, CM), (0, OM.i)(null, null, PM, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRight" in MM,
            get: MM => MM.keysRight,
            set: (MM, rM) => {
              MM.keysRight = rM
            }
          },
          metadata: aM
        }, eM, bM), (0, OM.i)(null, null, nM, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysReset" in MM,
            get: MM => MM.keysReset,
            set: (MM, rM) => {
              MM.keysReset = rM
            }
          },
          metadata: aM
        }, tM, gM), (0, OM.i)(null, null, QM, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysZoomIn" in MM,
            get: MM => MM.keysZoomIn,
            set: (MM, rM) => {
              MM.keysZoomIn = rM
            }
          },
          metadata: aM
        }, uM, RM), (0, OM.i)(null, null, zM, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysZoomOut" in MM,
            get: MM => MM.keysZoomOut,
            set: (MM, rM) => {
              MM.keysZoomOut = rM
            }
          },
          metadata: aM
        }, pM, WM), (0, OM.i)(null, null, LM, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: MM => "panningSensibility" in MM,
            get: MM => MM.panningSensibility,
            set: (MM, rM) => {
              MM.panningSensibility = rM
            }
          },
          metadata: aM
        }, sM, DM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: MM => "zoomingSensibility" in MM,
            get: MM => MM.zoomingSensibility,
            set: (MM, rM) => {
              MM.zoomingSensibility = rM
            }
          },
          metadata: aM
        }, kM, ZM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: MM => "angularSpeed" in MM,
            get: MM => MM.angularSpeed,
            set: (MM, rM) => {
              MM.angularSpeed = rM
            }
          },
          metadata: aM
        }, oM, fM), aM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aM
        })
      })(), MM
    })();
    UM.c.ArcRotateCameraKeyboardMoveInput = tM;
    var gM = iM(38744),
      uM = iM(41295);
    let RM = (() => {
      var MM;
      let rM, iM, jM, nM = [],
        QM = [],
        LM = [],
        HM = [],
        hM = [],
        JM = [];
      return MM = class {
        constructor() {
          this.wheelPrecision = (0, OM.m)(this, nM, 3), this.zoomToMouseLocation = ((0, OM.m)(this, QM), (0, OM.m)(this, LM, !1)), this.wheelDeltaPercentage = ((0, OM.m)(this, HM), (0, OM.m)(this, hM, 0)), this.customComputeDeltaFromMouseWheel = ((0, OM.m)(this, JM), null), this._viewOffset = new aM.q(0, 0, 0), this._globalOffset = new aM.q(0, 0, 0), this._inertialPanning = aM.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(MM, rM) {
          let iM;
          const OM = .01 * MM * this.wheelDeltaPercentage * rM;
          return iM = MM > 0 ? OM / (1 + this.wheelDeltaPercentage) : OM * (1 + this.wheelDeltaPercentage), iM
        }
        attachControl(MM) {
          MM = GM.e.BackCompatCameraNoPreventDefault(arguments), this._wheel = rM => {
            if (rM.type !== zM.d.POINTERWHEEL) return;
            const iM = rM.event;
            let OM;
            const SM = iM.deltaMode === uM.c.DOM_DELTA_LINE ? 40 : 1,
              jM = -iM.deltaY * SM;
            if (this.customComputeDeltaFromMouseWheel) OM = this.customComputeDeltaFromMouseWheel(jM, this, iM);
            else if (this.wheelDeltaPercentage) {
              if (OM = this._computeDeltaFromMouseWheelLegacyEvent(jM, this.camera.radius), OM > 0) {
                const MM = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let rM = this.camera.radius,
                  iM = MM + OM;
                for (let OM = 0; OM < 20 && !(rM <= iM) && !(Math.abs(iM * this.camera.inertia) < .001); OM++) rM -= iM, iM *= this.camera.inertia;
                rM = (0, PM.Clamp)(rM, 0, Number.MAX_VALUE), OM = this._computeDeltaFromMouseWheelLegacyEvent(jM, rM)
              }
            } else {
              const MM = this.camera.movement.input.getEntry("wheel", "zoom");
              OM = jM * (MM?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            OM && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(OM)) : this.camera.movement.zoomAccumulatedPixels += OM), iM.preventDefault && (MM || iM.preventDefault())
          }, this._observer = this.camera.Hk()._inputManager._addCameraPointerObserver(this._wheel, zM.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.P_(0)
        }
        detachControl() {
          this._observer && (this.camera.Hk()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const MM = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(MM.inertialAlphaOffset) + Math.abs(MM.inertialBetaOffset) + Math.abs(MM.inertialRadiusOffset)) {
            this._updateHitPlane(), MM.target.addInPlace(this._inertialPanning), MM.radius -= this._zoomToMouseRadiusOffset;
            const rM = MM.movement.getFrameIndependentDecay(MM.inertia);
            this._inertialPanning.scaleInPlace(rM), this._zoomToMouseRadiusOffset *= rM, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < mM.d && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const MM = this.camera,
            rM = MM.target.subtract(MM.position);
          this._hitPlane = gM.d.FromPositionAndNormal(MM.target, rM)
        }
        _getPosition() {
          const MM = this.camera,
            rM = MM.Hk(),
            iM = rM.createPickingRay(rM.pointerX, rM.pointerY, aM.d.Identity(), MM, !1);
          0 === MM.targetScreenOffset.x && 0 === MM.targetScreenOffset.y || (this._viewOffset.set(MM.targetScreenOffset.x, MM.targetScreenOffset.y, 0), MM.getViewMatrix().invertToRef(MM._cameraTransformMatrix), this._globalOffset = aM.q.TransformNormal(this._viewOffset, MM._cameraTransformMatrix), iM.origin.addInPlace(this._globalOffset));
          let OM = 0;
          return this._hitPlane && (OM = iM.intersectsPlane(this._hitPlane) ?? 0), iM.origin.addInPlace(iM.direction.scaleInPlace(OM))
        }
        _zoomToMouse(MM) {
          const rM = this.camera,
            iM = 1 - rM.inertia,
            OM = rM.movement.getFrameIndependentInputScale(rM.inertia);
          if (rM.lowerRadiusLimit) {
            const SM = rM.lowerRadiusLimit ?? 0;
            rM.radius - (this._zoomToMouseRadiusOffset + MM * OM) / iM < SM && (MM = ((rM.radius - SM) * iM - this._zoomToMouseRadiusOffset) / OM)
          }
          if (rM.upperRadiusLimit) {
            const SM = rM.upperRadiusLimit ?? 0;
            rM.radius - (this._zoomToMouseRadiusOffset + MM * OM) / iM > SM && (MM = ((rM.radius - SM) * iM - this._zoomToMouseRadiusOffset) / OM)
          }
          const SM = MM / iM / rM.radius,
            jM = this._getPosition(),
            PM = aM.l.sh[6];
          jM.subtractToRef(rM.target, PM), PM.scaleInPlace(SM), PM.scaleInPlace(iM), PM.scaleInPlace(OM), this._inertialPanning.addInPlace(PM), this._zoomToMouseRadiusOffset += MM * OM
        }
        _zeroIfClose(MM) {
          Math.abs(MM.x) < mM.d && (MM.x = 0), Math.abs(MM.y) < mM.d && (MM.y = 0), Math.abs(MM.z) < mM.d && (MM.z = 0)
        }
      }, (() => {
        const aM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelPrecision" in MM,
            get: MM => MM.wheelPrecision,
            set: (MM, rM) => {
              MM.wheelPrecision = rM
            }
          },
          metadata: aM
        }, nM, QM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: MM => "zoomToMouseLocation" in MM,
            get: MM => MM.zoomToMouseLocation,
            set: (MM, rM) => {
              MM.zoomToMouseLocation = rM
            }
          },
          metadata: aM
        }, LM, HM), (0, OM.i)(null, null, jM, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelDeltaPercentage" in MM,
            get: MM => MM.wheelDeltaPercentage,
            set: (MM, rM) => {
              MM.wheelDeltaPercentage = rM
            }
          },
          metadata: aM
        }, hM, JM), aM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aM
        })
      })(), MM
    })();
    UM.c.ArcRotateCameraMouseWheelInput = RM;
    var pM, WM, sM = iM(40990);
    class DM extends UM.e {
      constructor(MM) {
        super(MM)
      }
      addMouseWheel() {
        return this.add(new RM), this
      }
      addPointers() {
        return this.add(new bM), this
      }
      addKeyboard() {
        return this.add(new tM), this
      }
    }(pM = DM.prototype).addVRDeviceOrientation ?? (pM.addVRDeviceOrientation = (0, sM.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (WM = DM.prototype).addGamepad ?? (WM.addGamepad = (0, sM.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var kM = iM(38085),
      ZM = iM(41340),
      oM = iM(41349);
    class fM extends ZM.b {
      constructor(MM, rM, iM) {
        super(MM, rM, iM), this.input = new oM.d({
          pan: (MM, rM) => {
            this.panAccumulatedPixels.x += MM, this.panAccumulatedPixels.y += rM
          },
          rotate: (MM, rM) => {
            this.rotationAccumulatedPixels.x += MM, this.rotationAccumulatedPixels.y += rM
          },
          zoom: MM => {
            this.zoomAccumulatedPixels += MM
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

    function YM(MM, rM) {
      return isNaN(MM) ? rM : MM
    }
    let NM = (() => {
        var MM;
        let rM, iM, nM, zM, LM, hM, JM, UM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, kM, ZM, oM, NM, AM, xM, vM, FM, BM, XM = EM.g,
          IM = [],
          KM = [],
          qM = [],
          TM = [],
          VM = [],
          cM = [],
          Mr = [],
          rr = [],
          ir = [],
          Or = [],
          Sr = [],
          jr = [],
          ar = [],
          Pr = [],
          nr = [],
          Qr = [],
          zr = [],
          Lr = [],
          mr = [],
          Hr = [],
          hr = [],
          Jr = [],
          dr = [],
          yr = [],
          lr = [],
          Er = [],
          Ur = [],
          Gr = [],
          Cr = [],
          er = [],
          br = [],
          wr = [],
          tr = [],
          gr = [],
          ur = [],
          Rr = [],
          pr = [],
          Wr = [],
          sr = [],
          Dr = [],
          kr = [],
          Zr = [],
          or = [],
          fr = [],
          Yr = [],
          Nr = [],
          Ar = [];
        return MM = class extends XM {
          get target() {
            return this.wL
          }
          set target(MM) {
            this.setTarget(MM)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(MM) {
            MM && this.setTarget(MM)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(MM) {
            this.setPosition(MM)
          }
          set upVector(MM) {
            this._upToYMatrix || (this._yToUpMatrix = new aM.d, this._upToYMatrix = new aM.d, this._upVector = aM.q.Zero()), MM.normalize(), this._upVector.jR(MM), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            aM.d.RotationAlignToRef(aM.q.UpReadOnly, this._upVector, this._yToUpMatrix), aM.d.RotationAlignToRef(this._upVector, aM.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const MM = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(MM) < this._rotationEpsilon ? 0 : MM
          }
          set inertialAlphaOffset(MM) {
            this._inertialAlphaOffset = MM, 0 === MM && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const MM = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(MM) < this._rotationEpsilon ? 0 : MM
          }
          set inertialBetaOffset(MM) {
            this._inertialBetaOffset = MM, 0 === MM && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const MM = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(MM) < this._rotationEpsilon ? 0 : MM
          }
          set inertialRadiusOffset(MM) {
            this._inertialRadiusOffset = MM, 0 === MM && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(MM) {
            this._panningInertia = MM, this.movement && (this.movement.panInertia = MM)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(MM) {
            this._inertia = MM, this.movement && (this.movement.rotationInertia = MM, this.movement.zoomInertia = MM)
          }
          get angularSensibilityX() {
            const MM = this.inputs.attached.pointers;
            return MM ? MM.angularSensibilityX : 0
          }
          set angularSensibilityX(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.angularSensibilityX = MM)
          }
          get angularSensibilityY() {
            const MM = this.inputs.attached.pointers;
            return MM ? MM.angularSensibilityY : 0
          }
          set angularSensibilityY(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.angularSensibilityY = MM)
          }
          get pinchPrecision() {
            const MM = this.inputs.attached.pointers;
            return MM ? MM.pinchPrecision : 0
          }
          set pinchPrecision(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.pinchPrecision = MM)
          }
          get pinchDeltaPercentage() {
            const MM = this.inputs.attached.pointers;
            return MM ? MM.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.pinchDeltaPercentage = MM)
          }
          get useNaturalPinchZoom() {
            const MM = this.inputs.attached.pointers;
            return !!MM && MM.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.useNaturalPinchZoom = MM)
          }
          get panningSensibility() {
            const MM = this.inputs.attached.pointers;
            return MM ? MM.panningSensibility : 0
          }
          set panningSensibility(MM) {
            const rM = this.inputs.attached.pointers;
            rM && (rM.panningSensibility = MM)
          }
          get keysUp() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysUp : []
          }
          set keysUp(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysUp = MM)
          }
          get keysDown() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysDown : []
          }
          set keysDown(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysDown = MM)
          }
          get keysLeft() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysLeft : []
          }
          set keysLeft(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysLeft = MM)
          }
          get keysRight() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRight : []
          }
          set keysRight(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRight = MM)
          }
          get wheelPrecision() {
            const MM = this.inputs.attached.mousewheel;
            return MM ? MM.wheelPrecision : 0
          }
          set wheelPrecision(MM) {
            const rM = this.inputs.attached.mousewheel;
            rM && (rM.wheelPrecision = MM)
          }
          get zoomToMouseLocation() {
            const MM = this.inputs.attached.mousewheel;
            return !!MM && MM.zoomToMouseLocation
          }
          set zoomToMouseLocation(MM) {
            const rM = this.inputs.attached.mousewheel;
            rM && (rM.zoomToMouseLocation = MM)
          }
          get wheelDeltaPercentage() {
            const MM = this.inputs.attached.mousewheel;
            return MM ? MM.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(MM) {
            const rM = this.inputs.attached.mousewheel;
            rM && (rM.wheelDeltaPercentage = MM)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(MM) {
            this._useCtrlForPanningInternal = MM;
            const rM = this.movement.input,
              iM = rM.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !MM && iM ? rM.inputMap.splice(rM.inputMap.indexOf(iM), 1) : MM && !iM && rM.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const OM = rM.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !MM && OM ? rM.inputMap.splice(rM.inputMap.indexOf(OM), 1) : MM && !OM && rM.addEntry({
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
          set _panningMouseButton(MM) {
            this._panningMouseButtonInternal = MM;
            const rM = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            rM && (rM.button = MM)
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
          set useBouncingBehavior(MM) {
            MM !== this.useBouncingBehavior && (MM ? (this._bouncingBehavior = new dM, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(MM) {
            MM !== this.useFramingBehavior && (MM ? (this._framingBehavior = new yM, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(MM) {
            MM !== this.useAutoRotationBehavior && (MM ? (this._autoRotationBehavior = new HM, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(MM, rM, iM, SM, PM, nM) {
            var QM;
            let zM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(MM, aM.q.Zero(), nM, zM), QM = this, this.alpha = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, void 0)), this.beta = ((0, OM.m)(this, qM), (0, OM.m)(this, TM, void 0)), this.radius = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, void 0)), this.overrideCloneAlphaBetaRadius = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, void 0)), this.wL = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, void 0)), this._targetHost = ((0, OM.m)(this, Sr), (0, OM.m)(this, jr, void 0)), this._upToYMatrix = (0, OM.m)(this, ar), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, OM.m)(this, Pr, null), this.upperAlphaLimit = ((0, OM.m)(this, nr), (0, OM.m)(this, Qr, null)), this.lowerBetaLimit = ((0, OM.m)(this, zr), (0, OM.m)(this, Lr, .01)), this.upperBetaLimit = ((0, OM.m)(this, mr), (0, OM.m)(this, Hr, Math.PI - .01)), this.lowerRadiusLimit = ((0, OM.m)(this, hr), (0, OM.m)(this, Jr, null)), this.upperRadiusLimit = ((0, OM.m)(this, dr), (0, OM.m)(this, yr, null)), this.lowerTargetYLimit = ((0, OM.m)(this, lr), (0, OM.m)(this, Er, -1 / 0)), this.inertialPanningX = ((0, OM.m)(this, Ur), (0, OM.m)(this, Gr, 0)), this.inertialPanningY = ((0, OM.m)(this, Cr), (0, OM.m)(this, er, 0)), this.pinchToPanMaxDistance = ((0, OM.m)(this, br), (0, OM.m)(this, wr, 20)), this.panningDistanceLimit = ((0, OM.m)(this, tr), (0, OM.m)(this, gr, null)), this.panningOriginTarget = ((0, OM.m)(this, ur), (0, OM.m)(this, Rr, aM.q.Zero())), this._panningInertia = ((0, OM.m)(this, pr), .9), this._inertia = .9, this.zoomOnFactor = (0, OM.m)(this, Wr, 1), this.targetScreenOffset = ((0, OM.m)(this, sr), (0, OM.m)(this, Dr, aM.o.Zero())), this.allowUpsideDown = ((0, OM.m)(this, kr), (0, OM.m)(this, Zr, !0)), this.useInputToRestoreState = ((0, OM.m)(this, or), (0, OM.m)(this, fr, !0)), this.restoreStateInterpolationFactor = ((0, OM.m)(this, Yr), (0, OM.m)(this, Nr, 0)), this._currentInterpolationFactor = ((0, OM.m)(this, Ar), 0), this._viewMatrix = new aM.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new aM.q(1, 1, 0), this._transformedDirection = new aM.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new jM.d, this.checkCollisions = !1, this.collisionRadius = new aM.q(.5, .5, .5), this._previousPosition = aM.q.Zero(), this._collisionVelocity = aM.q.Zero(), this._newPosition = aM.q.Zero(), this._computationVector = aM.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new aM.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new aM.o(NaN, NaN), this._onCollisionPositionChange = function(MM, rM) {
              let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              iM ? (QM.setPosition(rM), QM.Rm && QM.Rm(iM)) : QM._previousPosition.jR(QM._position);
              const OM = Math.cos(QM.alpha),
                SM = Math.sin(QM.alpha),
                jM = Math.cos(QM.beta);
              let aM = Math.sin(QM.beta);
              0 === aM && (aM = 1e-4);
              const PM = QM._getTargetPosition();
              QM._computationVector.iMM(QM.radius * OM * aM, QM.radius * jM, QM.radius * SM * aM), PM.addToRef(QM._computationVector, QM._newPosition), QM._position.jR(QM._newPosition);
              let nM = QM.upVector;
              QM.allowUpsideDown && QM.beta < 0 && (nM = nM.clone(), nM = nM.VJ()), QM._computeViewMatrix(QM._position, PM, nM), QM._viewMatrix.addAtIndex(12, QM.targetScreenOffset.x), QM._viewMatrix.addAtIndex(13, QM.targetScreenOffset.y), QM._collisionTriggered = !1
            }, this.wL = aM.q.Zero(), PM && this.setTarget(PM), this.alpha = rM, this.beta = iM, this.radius = SM, this.getViewMatrix(), this.inputs = new DM(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new fM(this.Hk(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.wL = new aM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = aM.o.Zero()
          }
          _updateCache(MM) {
            MM || super._updateCache(), this._cache.wL.jR(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.jR(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const MM = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? MM.addToRef(this._targetBoundingCenter, this.wL) : this.wL.jR(MM)
            }
            const MM = this._getLockedTargetPosition();
            return MM || this.wL
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > mM.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              jM = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != jM ? this._currentInterpolationFactor = jM : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = YM(MM, this._goalAlpha), this._goalBeta = YM(rM, this._goalBeta), this._goalRadius = YM(iM, this._goalRadius), this._goalTarget.set(YM(OM.x, this._goalTarget.x), YM(OM.y, this._goalTarget.y), YM(OM.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(YM(SM.x, this._goalTargetScreenOffset.x), YM(SM.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, PM.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, PM.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, PM.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, PM.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.wL.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(MM, rM) {
            let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const SM = arguments;
            rM = GM.e.BackCompatCameraNoPreventDefault(SM), this._useCtrlForPanning = iM, this._panningMouseButton = OM, "boolean" === typeof SM[0] && (SM.length > 1 && (this._useCtrlForPanning = SM[1]), SM.length > 2 && (this._panningMouseButton = SM[2])), this.inputs.attachElement(rM), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(MM, rM, iM) {
            const OM = this.invertRotation ? -1 : 1;
            let SM = MM * this._calculateHandednessMultiplier();
            this.beta < 0 && (SM *= -1), this.alpha += SM * OM, this.beta += rM * OM, this.radius -= iM
          }
          _applyPanDelta(MM, rM) {
            const iM = aM.l.sh[0].iMM(MM, rM, rM);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), iM.multiplyInPlace(this.panningAxis), aM.q.TransformNormalToRef(iM, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const MM = this.upVector,
                rM = aM.q.CrossToRef(this._transformedDirection, MM, this._transformedDirection);
              aM.q.CrossToRef(MM, rM, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.wL);
                aM.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wL.jR(this._transformedDirection)
              } else {
                if (this.parent) {
                  const MM = aM.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(MM), MM.transposeToRef(MM), aM.q.TransformCoordinatesToRef(this._transformedDirection, MM, this._transformedDirection)
                }
                this.wL.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let MM = !1;
            this.movement.computeCurrentFrameDeltas();
            const rM = this.movement.rotationDeltaCurrentFrame,
              iM = this.movement.zoomDeltaCurrentFrame,
              OM = this.movement.panDeltaCurrentFrame;
            if (0 === rM.x && 0 === rM.y && 0 === iM && 0 === OM.x && 0 === OM.y || (MM = !0, 0 === rM.x && 0 === rM.y && 0 === iM || this._applyRotationAndZoomDelta(rM.x, rM.y, iM), 0 === OM.x && 0 === OM.y || this._applyPanDelta(OM.x, OM.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), MM = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const rM = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < rM && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < rM && (this.inertialPanningY = 0), MM = !0
            }
            if (MM) this.stopInterpolation();
            else if (this._isInterpolating) {
              let MM = !1;
              const rM = this._scene.ph().getDeltaTime() / 1e3,
                iM = 1 - Math.pow(2, -rM / this._currentInterpolationFactor),
                OM = YM(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const rM = aM.l.sh[0].set(YM(this._goalTarget.x, this.wL.x), YM(this._goalTarget.y, this.wL.y), YM(this._goalTarget.z, this.wL.z));
                aM.q.LerpToRef(this.target, rM, iM, this.wL), 10 * aM.q.Distance(this.target, rM) / OM < mM.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.jR(rM), this.setTarget(this.target, !1, !0, !0)) : MM = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const rM = aM.h.RotationAlphaBetaGammaToRef(YM(this._goalAlpha, this.alpha), YM(this._goalBeta, this.beta), 0, aM.l.Quaternion[0]),
                  OM = aM.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, aM.l.Quaternion[1]),
                  SM = aM.h.SlerpToRef(OM, rM, iM, aM.l.Quaternion[2]);
                SM.normalize();
                const jM = SM.toAlphaBetaGammaToRef(aM.l.sh[0]);
                if (this.alpha = jM.x, this.beta = jM.y, SM.isApprox(rM, mM.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const MM = rM.toAlphaBetaGammaToRef(aM.l.sh[0]);
                  this.alpha = MM.x, this.beta = MM.y
                } else MM = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (OM - this.radius) * iM, Math.abs(OM / this.radius - 1) < mM.d ? (this._goalRadius = NaN, this.radius = OM) : MM = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const rM = aM.l.Vector2[0].set(YM(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), YM(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                aM.o.LerpToRef(this.targetScreenOffset, rM, iM, this.targetScreenOffset), aM.o.Distance(this.targetScreenOffset, rM) < mM.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.jR(rM)) : MM = !0
              }
              this._isInterpolating = MM
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || aM.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const MM = this.alpha;
            var rM, iM;
            this.alpha = function(MM) {
              let rM = Math.PI / 2;
              return 0 === MM.x && 0 === MM.z || (rM = Math.acos(MM.x / Math.sqrt(Math.pow(MM.x, 2) + Math.pow(MM.z, 2)))), MM.z < 0 && (rM = 2 * Math.PI - rM), rM
            }(this._computationVector), this.beta = (rM = this._computationVector.y, iM = this.radius, Math.acos(rM / iM));
            const OM = Math.round((MM - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * OM * Math.PI, this._checkLimits()
          }
          setPosition(MM) {
            this._position.equals(MM) || (this._position.jR(MM), this.rebuildAnglesAndRadius())
          }
          setTarget(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (OM = this.overrideCloneAlphaBetaRadius ?? OM, MM.computeWorldMatrix) rM && MM.aY ? this._targetBoundingCenter = MM.aY().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, MM.computeWorldMatrix(), this._targetHost = MM, this.wL = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const rM = MM,
                OM = this._getTargetPosition();
              if (OM && !iM && OM.equals(rM)) return;
              this._targetHost = null, this.wL = rM, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            OM || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const MM = Math.cos(this.alpha),
              rM = Math.sin(this.alpha),
              iM = Math.cos(this.beta);
            let OM = Math.sin(this.beta);
            0 === OM && (OM = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const SM = this._getTargetPosition();
            if (this._computationVector.iMM(this.radius * MM * OM, this.radius * iM, this.radius * rM * OM), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || aM.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), SM.addToRef(this._computationVector, this._newPosition), this.Hk().collisionsEnabled && this.checkCollisions) {
              const MM = this.Hk().collisionCoordinator;
              this._collider || (this._collider = MM.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, MM.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.jR(this._newPosition);
              let MM = this.upVector;
              this.allowUpsideDown && OM < 0 && (MM = MM.VJ()), this._computeViewMatrix(this._position, SM, MM), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.jR(SM), this._viewMatrix
          }
          zoomOn(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            MM = MM || this.Hk().meshes;
            const iM = QM.d.MinMax(MM);
            let OM = this._calculateLowerRadiusFromModelBoundingSphere(iM.min, iM.max);
            if (OM = Math.max(Math.min(OM, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = OM * this.zoomOnFactor, this.mode === lM.b.ORTHOGRAPHIC_CAMERA) {
              const MM = this.Hk().ph().getAspectRatio(this),
                rM = OM * this.zoomOnFactor / 2;
              this.orthoLeft = -rM * MM, this.orthoRight = rM * MM, this.orthoBottom = -rM, this.orthoTop = rM
            }
            this.focusOn({
              min: iM.min,
              max: iM.max,
              distance: OM
            }, rM)
          }
          focusOn(MM) {
            let rM, iM, OM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === MM.min) {
              const OM = MM || this.Hk().meshes;
              rM = QM.d.MinMax(OM), iM = aM.q.Distance(rM.min, rM.max)
            } else {
              rM = MM, iM = MM.distance
            }
            this.wL = QM.d.Center(rM), OM || (this.maxZ = 2 * iM)
          }
          createRigCamera(rM, iM) {
            let OM = 0;
            switch (this.cameraRigMode) {
              case lM.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case lM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case lM.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case lM.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case lM.b.RIG_MODE_VR:
                OM = this._cameraRigParams.stereoHalfAngle * (0 === iM ? 1 : -1);
                break;
              case lM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                OM = this._cameraRigParams.stereoHalfAngle * (0 === iM ? -1 : 1)
            }
            const SM = new MM(rM, this.alpha + OM, this.beta, this.radius, this.wL, this.Hk());
            return SM._cameraRigParams = {}, SM.isRigCamera = !0, SM.rigParent = this, SM.upVector = this.upVector, SM.mode = this.mode, SM.orthoLeft = this.orthoLeft, SM.orthoRight = this.orthoRight, SM.orthoBottom = this.orthoBottom, SM.orthoTop = this.orthoTop, SM
          }
          _updateRigCameras() {
            const MM = this._rigCameras[0],
              rM = this._rigCameras[1];
            switch (MM.beta = rM.beta = this.beta, this.cameraRigMode) {
              case lM.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case lM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case lM.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case lM.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case lM.b.RIG_MODE_VR:
                MM.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, rM.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case lM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                MM.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, rM.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const OM = aM.q.Distance(MM, rM),
              SM = this.Hk().ph().getAspectRatio(this),
              jM = Math.tan(this.fov / 2),
              PM = jM * SM,
              nM = .5 * OM * iM,
              QM = nM * Math.sqrt(1 + 1 / (PM * PM)),
              zM = nM * Math.sqrt(1 + 1 / (jM * jM));
            return Math.max(QM, zM)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(XM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], nM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.J)("target")], hM = [(0, SM.y)("targetHost")], JM = [(0, SM.L)()], UM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.L)()], bM = [(0, SM.L)()], wM = [(0, SM.L)()], tM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], pM = [(0, SM.L)()], WM = [(0, SM.L)()], sM = [(0, SM.L)()], kM = [(0, SM.L)()], ZM = [(0, SM.J)()], oM = [(0, SM.L)()], NM = [(0, SM.L)()], AM = [(0, SM.L)()], xM = [(0, SM.F)()], vM = [(0, SM.L)()], FM = [(0, SM.L)()], BM = [(0, SM.L)()], (0, OM.i)(MM, null, JM, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "inertialAlphaOffset" in MM,
              get: MM => MM.inertialAlphaOffset
            },
            metadata: jM
          }, null, IM), (0, OM.i)(MM, null, UM, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "inertialBetaOffset" in MM,
              get: MM => MM.inertialBetaOffset
            },
            metadata: jM
          }, null, IM), (0, OM.i)(MM, null, CM, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "inertialRadiusOffset" in MM,
              get: MM => MM.inertialRadiusOffset
            },
            metadata: jM
          }, null, IM), (0, OM.i)(MM, null, oM, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: MM => "panningInertia" in MM,
              get: MM => MM.panningInertia
            },
            metadata: jM
          }, null, IM), (0, OM.i)(MM, null, NM, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: MM => "zoomToMouseLocation" in MM,
              get: MM => MM.zoomToMouseLocation
            },
            metadata: jM
          }, null, IM), (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "alpha" in MM,
              get: MM => MM.alpha,
              set: (MM, rM) => {
                MM.alpha = rM
              }
            },
            metadata: jM
          }, KM, qM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: MM => "beta" in MM,
              get: MM => MM.beta,
              set: (MM, rM) => {
                MM.beta = rM
              }
            },
            metadata: jM
          }, TM, VM), (0, OM.i)(null, null, nM, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: MM => "radius" in MM,
              get: MM => MM.radius,
              set: (MM, rM) => {
                MM.radius = rM
              }
            },
            metadata: jM
          }, cM, Mr), (0, OM.i)(null, null, zM, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: MM => "overrideCloneAlphaBetaRadius" in MM,
              get: MM => MM.overrideCloneAlphaBetaRadius,
              set: (MM, rM) => {
                MM.overrideCloneAlphaBetaRadius = rM
              }
            },
            metadata: jM
          }, rr, ir), (0, OM.i)(null, null, LM, {
            kind: "field",
            name: "wL",
            static: !1,
            private: !1,
            access: {
              has: MM => "wL" in MM,
              get: MM => MM.wL,
              set: (MM, rM) => {
                MM.wL = rM
              }
            },
            metadata: jM
          }, Or, Sr), (0, OM.i)(null, null, hM, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: MM => "_targetHost" in MM,
              get: MM => MM._targetHost,
              set: (MM, rM) => {
                MM._targetHost = rM
              }
            },
            metadata: jM
          }, jr, ar), (0, OM.i)(null, null, eM, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "lowerAlphaLimit" in MM,
              get: MM => MM.lowerAlphaLimit,
              set: (MM, rM) => {
                MM.lowerAlphaLimit = rM
              }
            },
            metadata: jM
          }, Pr, nr), (0, OM.i)(null, null, bM, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "upperAlphaLimit" in MM,
              get: MM => MM.upperAlphaLimit,
              set: (MM, rM) => {
                MM.upperAlphaLimit = rM
              }
            },
            metadata: jM
          }, Qr, zr), (0, OM.i)(null, null, wM, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "lowerBetaLimit" in MM,
              get: MM => MM.lowerBetaLimit,
              set: (MM, rM) => {
                MM.lowerBetaLimit = rM
              }
            },
            metadata: jM
          }, Lr, mr), (0, OM.i)(null, null, tM, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "upperBetaLimit" in MM,
              get: MM => MM.upperBetaLimit,
              set: (MM, rM) => {
                MM.upperBetaLimit = rM
              }
            },
            metadata: jM
          }, Hr, hr), (0, OM.i)(null, null, gM, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "lowerRadiusLimit" in MM,
              get: MM => MM.lowerRadiusLimit,
              set: (MM, rM) => {
                MM.lowerRadiusLimit = rM
              }
            },
            metadata: jM
          }, Jr, dr), (0, OM.i)(null, null, uM, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "upperRadiusLimit" in MM,
              get: MM => MM.upperRadiusLimit,
              set: (MM, rM) => {
                MM.upperRadiusLimit = rM
              }
            },
            metadata: jM
          }, yr, lr), (0, OM.i)(null, null, RM, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "lowerTargetYLimit" in MM,
              get: MM => MM.lowerTargetYLimit,
              set: (MM, rM) => {
                MM.lowerTargetYLimit = rM
              }
            },
            metadata: jM
          }, Er, Ur), (0, OM.i)(null, null, pM, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: MM => "inertialPanningX" in MM,
              get: MM => MM.inertialPanningX,
              set: (MM, rM) => {
                MM.inertialPanningX = rM
              }
            },
            metadata: jM
          }, Gr, Cr), (0, OM.i)(null, null, WM, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: MM => "inertialPanningY" in MM,
              get: MM => MM.inertialPanningY,
              set: (MM, rM) => {
                MM.inertialPanningY = rM
              }
            },
            metadata: jM
          }, er, br), (0, OM.i)(null, null, sM, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: MM => "pinchToPanMaxDistance" in MM,
              get: MM => MM.pinchToPanMaxDistance,
              set: (MM, rM) => {
                MM.pinchToPanMaxDistance = rM
              }
            },
            metadata: jM
          }, wr, tr), (0, OM.i)(null, null, kM, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: MM => "panningDistanceLimit" in MM,
              get: MM => MM.panningDistanceLimit,
              set: (MM, rM) => {
                MM.panningDistanceLimit = rM
              }
            },
            metadata: jM
          }, gr, ur), (0, OM.i)(null, null, ZM, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: MM => "panningOriginTarget" in MM,
              get: MM => MM.panningOriginTarget,
              set: (MM, rM) => {
                MM.panningOriginTarget = rM
              }
            },
            metadata: jM
          }, Rr, pr), (0, OM.i)(null, null, AM, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: MM => "zoomOnFactor" in MM,
              get: MM => MM.zoomOnFactor,
              set: (MM, rM) => {
                MM.zoomOnFactor = rM
              }
            },
            metadata: jM
          }, Wr, sr), (0, OM.i)(null, null, xM, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "targetScreenOffset" in MM,
              get: MM => MM.targetScreenOffset,
              set: (MM, rM) => {
                MM.targetScreenOffset = rM
              }
            },
            metadata: jM
          }, Dr, kr), (0, OM.i)(null, null, vM, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: MM => "allowUpsideDown" in MM,
              get: MM => MM.allowUpsideDown,
              set: (MM, rM) => {
                MM.allowUpsideDown = rM
              }
            },
            metadata: jM
          }, Zr, or), (0, OM.i)(null, null, FM, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: MM => "useInputToRestoreState" in MM,
              get: MM => MM.useInputToRestoreState,
              set: (MM, rM) => {
                MM.useInputToRestoreState = rM
              }
            },
            metadata: jM
          }, fr, Yr), (0, OM.i)(null, null, BM, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: MM => "restoreStateInterpolationFactor" in MM,
              get: MM => MM.restoreStateInterpolationFactor,
              set: (MM, rM) => {
                MM.restoreStateInterpolationFactor = rM
              }
            },
            metadata: jM
          }, Nr, Ar), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      AM = !1;
    AM || (AM = !0, nM.d.AddNodeConstructor("ArcRotateCamera", ((MM, rM) => () => new NM(MM, 0, 0, 1, aM.q.Zero(), rM))), (0, kM.e)("BABYLON.ArcRotateCamera", NM))
  },
  41358: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.d
    });
    var OM = iM(41362);
    (0, OM.e)()
  },
  41362: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      e: () => mM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(38173),
      PM = iM(41366),
      nM = iM(41328),
      QM = iM(38085);
    let zM = (() => {
        var MM;
        let rM, iM, nM = PM.d,
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        return MM = class extends nM {
          constructor(MM, rM, iM, SM) {
            super(MM, iM, SM), this.groundColor = (0, OM.m)(this, QM, new aM.d(0, 0, 0)), this.direction = ((0, OM.m)(this, zM), (0, OM.m)(this, LM, void 0)), (0, OM.m)(this, mM), this.direction = rM || jM.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(MM) {
            return this.direction = jM.q.Normalize(MM.subtract(jM.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", iM.x, iM.y, iM.z, 0, rM), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rM), this
          }
          transferToNodeMaterialEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return MM.setFloat3(rM, iM.x, iM.y, iM.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = jM.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return PM.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(MM, rM) {
            MM["HEMILIGHT" + rM] = !0
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(nM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.r)()], iM = [(0, SM.J)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "groundColor" in MM,
              get: MM => MM.groundColor,
              set: (MM, rM) => {
                MM.groundColor = rM
              }
            },
            metadata: jM
          }, QM, zM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: MM => "direction" in MM,
              get: MM => MM.direction,
              set: (MM, rM) => {
                MM.direction = rM
              }
            },
            metadata: jM
          }, LM, mM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      LM = !1;

    function mM() {
      LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
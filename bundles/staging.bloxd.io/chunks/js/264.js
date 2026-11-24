export const id = 264;
export const ids = [264];
export const modules = {
  41176: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => PB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37202),
      IB = zB(37171),
      NB = zB(37208),
      uB = zB(40306),
      UB = zB(40504),
      aB = zB(40255),
      pB = zB(39986),
      rB = zB(37178);
    class sB {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(BB) {
        this._idleRotationSpeed = BB
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(BB) {
        this._idleRotationWaitTime = BB
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(BB) {
        this._idleRotationSpinupTime = BB
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
      attach(BB) {
        this._attachedCamera = BB;
        const jB = this._attachedCamera.aY();
        this._onPrePointerObservableObserver = jB.onPrePointerObservable.add((BB => {
          BB.type !== aB.b.POINTERDOWN ? BB.type === aB.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const BB = pB.e.Now;
          let jB = 0;
          null != this._lastFrameTime && (jB = BB - this._lastFrameTime), this._lastFrameTime = BB, this._applyUserInteraction();
          const zB = BB - this._lastInteractionTime - this._idleRotationWaitTime,
            QB = Math.max(Math.min(zB / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * QB, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (jB / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.aY();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(BB) {
        this._lastInteractionTime = BB ?? pB.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < rB.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let BB = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = pB.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    zB(41182);
    class JB {
      constructor() {
        this._easingMode = JB.EASINGMODE_EASEIN
      }
      setEasingMode(BB) {
        const jB = Math.min(Math.max(BB, 0), 2);
        this._easingMode = jB
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(BB) {
        throw new Error("You must implement this method")
      }
      ease(BB) {
        switch (this._easingMode) {
          case JB.EASINGMODE_EASEIN:
            return this.easeInCore(BB);
          case JB.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - BB)
        }
        return BB >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - BB))) + .5 : .5 * this.easeInCore(2 * BB)
      }
    }
    JB.EASINGMODE_EASEIN = 0, JB.EASINGMODE_EASEOUT = 1, JB.EASINGMODE_EASEINOUT = 2;
    var mB = zB(41191);
    class yB {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(BB) {
        if (this._autoTransitionRange === BB) return;
        this._autoTransitionRange = BB;
        const jB = this._attachedCamera;
        jB && (BB ? this._onMeshTargetChangedObserver = jB.onMeshTargetChangedObservable.add((BB => {
          if (BB && (BB.computeWorldMatrix(!0), BB.rV)) {
            const jB = BB.rV().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * jB, this.upperRadiusTransitionRange = .05 * jB
          }
        })) : this._onMeshTargetChangedObserver && jB.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB, this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(BB) {
        return !!this._attachedCamera && (this._attachedCamera.radius === BB && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(BB) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (yB.EasingFunction.setEasingMode(yB.EasingMode), this._radiusBounceTransition = mB.e.CreateAnimation("radius", mB.e.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const jB = mB.e.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.aY(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        jB && this._animatables.push(jB)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    yB.EasingFunction = new class extends JB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = BB
      }
      easeInCore(BB) {
        const jB = Math.max(0, this.amplitude);
        return Math.pow(BB, 3) - BB * jB * Math.sin(3.141592653589793 * BB)
      }
    }(.3), yB.EasingMode = JB.EASINGMODE_EASEOUT;
    class kB {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new dB.c, this._mode = kB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(BB) {
        this._mode = BB
      }
      get mode() {
        return this._mode
      }
      set radiusScale(BB) {
        this._radiusScale = BB
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(BB) {
        this._positionScale = BB
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(BB) {
        this._defaultElevation = BB
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(BB) {
        this._elevationReturnTime = BB
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(BB) {
        this._elevationReturnWaitTime = BB
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(BB) {
        this._framingTime = BB
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB;
        const jB = this._attachedCamera.aY();
        kB.EasingFunction.setEasingMode(kB.EasingMode), this._onPrePointerObservableObserver = jB.onPrePointerObservable.add((BB => {
          BB.type !== aB.b.POINTERDOWN ? BB.type === aB.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = BB.onMeshTargetChangedObservable.add((BB => {
          BB && BB.rV && this.zoomOnMesh(BB, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.aY();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const QB = BB.rV().boundingBox;
        this.zoomOnBoundingInfo(QB.minimumWorld, QB.maximumWorld, jB, zB)
      }
      zoomOnMeshHierarchy(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const QB = BB.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(QB.min, QB.max, jB, zB)
      }
      zoomOnMeshesHierarchy(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QB = new IB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          nB = new IB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let dB = 0; dB < BB.length; dB++) {
          const jB = BB[dB].getHierarchyBoundingVectors(!0);
          IB.m.CheckExtends(jB.min, QB, nB), IB.m.CheckExtends(jB.max, QB, nB)
        }
        this.zoomOnBoundingInfo(QB, nB, jB, zB)
      }
      zoomOnBoundingInfo(BB, jB) {
        let zB, QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const dB = BB.y,
          NB = dB + (jB.y - dB) * this._positionScale,
          uB = jB.subtract(BB).scale(.5);
        if (!isFinite(NB)) return !1;
        if (QB) zB = new IB.m(0, NB, 0);
        else {
          const jB = BB.add(uB);
          zB = new IB.m(jB.x, NB, jB.z)
        }
        this._vectorTransition || (this._vectorTransition = mB.e.CreateAnimation("target", mB.e.ANIMATIONTYPE_VECTOR3, 60, kB.EasingFunction)), this._betaIsAnimating = !0;
        let UB = mB.e.TransitionTo("target", zB, this._attachedCamera, this._attachedCamera.aY(), 60, this._vectorTransition, this._framingTime);
        UB && this._animatables.push(UB);
        let aB = 0;
        if (this._mode === kB.FitFrustumSidesMode) {
          const zB = this._calculateLowerRadiusFromModelBoundingSphere(BB, jB);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = uB.length() + this._attachedCamera.minZ), aB = zB
        } else this._mode === kB.IgnoreBoundsSizeMode && (aB = this._calculateLowerRadiusFromModelBoundingSphere(BB, jB), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const zB = jB.subtract(BB).length();
          this._attachedCamera.panningSensibility = 5e3 / zB, this._attachedCamera.wheelPrecision = 100 / aB
        }
        return this._radiusTransition || (this._radiusTransition = mB.e.CreateAnimation("radius", mB.e.ANIMATIONTYPE_FLOAT, 60, kB.EasingFunction)), UB = mB.e.TransitionTo("radius", aB, this._attachedCamera, this._attachedCamera.aY(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), nB && nB(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), UB && this._animatables.push(UB), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(BB, jB) {
        const zB = this._attachedCamera;
        if (!zB) return 0;
        let QB = zB._calculateLowerRadiusFromModelBoundingSphere(BB, jB, this._radiusScale);
        return zB.lowerRadiusLimit && this._mode === kB.IgnoreBoundsSizeMode && (QB = QB < zB.lowerRadiusLimit ? zB.lowerRadiusLimit : QB), zB.upperRadiusLimit && (QB = QB > zB.upperRadiusLimit ? zB.upperRadiusLimit : QB), QB
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const BB = pB.e.Now - this._lastInteractionTime,
          jB = .5 * Math.PI - this._defaultElevation,
          zB = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > zB && BB >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = mB.e.CreateAnimation("beta", mB.e.ANIMATIONTYPE_FLOAT, 60, kB.EasingFunction));
          const BB = mB.e.TransitionTo("beta", jB, this._attachedCamera, this._attachedCamera.aY(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          BB && this._animatables.push(BB)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = pB.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    kB.EasingFunction = new class extends JB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = BB
      }
      easeInCore(BB) {
        return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, kB.EasingMode = JB.EASINGMODE_EASEINOUT, kB.IgnoreBoundsSizeMode = 0, kB.FitFrustumSidesMode = 1;
    var GB = zB(40301),
      LB = zB(40292),
      gB = zB(40330),
      tB = zB(40164);
    let SB = (() => {
        var BB;
        let jB, zB = [],
          dB = [];
        return BB = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, QB.g)(this, zB, [0, 1, 2]), this._pointerInput = (0, QB.g)(this, dB)
          }
          attachControl(BB) {
            BB = tB.i.BackCompatCameraNoPreventDefault(arguments);
            const jB = this.camera.wJ(),
              zB = jB.getInputElement();
            let QB = 0,
              nB = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = dB => {
              const IB = dB.event,
                NB = "touch" === IB.pointerType;
              if (dB.type !== aB.b.POINTERMOVE && -1 === this.buttons.indexOf(IB.button)) return;
              const uB = IB.target;
              if (this._altKey = IB.altKey, this._ctrlKey = IB.ctrlKey, this._metaKey = IB.metaKey, this._shiftKey = IB.shiftKey, this._buttonsPressed = IB.buttons, jB.isPointerLock) {
                const BB = IB.movementX,
                  jB = IB.movementY;
                this.onTouch(null, BB, jB), this._pointA = null, this._pointB = null
              } else {
                if (dB.type !== aB.b.POINTERDOWN && dB.type !== aB.b.POINTERDOUBLETAP && NB && this._pointA?.pointerId !== IB.pointerId && this._pointB?.pointerId !== IB.pointerId) return;
                if (dB.type !== aB.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !NB)
                  if (dB.type === aB.b.POINTERDOUBLETAP) this.onDoubleTap(IB.pointerType, IB);
                  else if (dB.type !== aB.b.POINTERUP || this._currentMousePointerIdDown !== IB.pointerId && !NB) {
                  if (dB.type === aB.b.POINTERMOVE)
                    if (BB || IB.preventDefault(), this._pointA && null === this._pointB) {
                      const BB = IB.clientX - this._pointA.x,
                        jB = IB.clientY - this._pointA.y;
                      this._pointA.x = IB.clientX, this._pointA.y = IB.clientY, this.onTouch(this._pointA, BB, jB)
                    } else if (this._pointA && this._pointB) {
                    const BB = this._pointA.pointerId === IB.pointerId ? this._pointA : this._pointB;
                    BB.x = IB.clientX, BB.y = IB.clientY;
                    const jB = this._pointA.x - this._pointB.x,
                      zB = this._pointA.y - this._pointB.y,
                      NB = jB * jB + zB * zB,
                      uB = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: IB.pointerId,
                        type: dB.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, QB, NB, nB, uB), nB = uB, QB = NB
                  }
                } else {
                  try {
                    uB?.releasePointerCapture(IB.pointerId)
                  } catch (UB) {}
                  NB || (this._pointB = null), jB._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == IB.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == IB.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== QB || nB) && (this.onMultiTouch(this._pointA, this._pointB, QB, 0, nB, null), QB = 0, nB = null), this._currentMousePointerIdDown = -1, this.onButtonUp(IB), BB || IB.preventDefault()
                } else {
                  try {
                    uB?.setPointerCapture(IB.pointerId)
                  } catch (UB) {}
                  if (null === this._pointA) this._pointA = {
                    x: IB.clientX,
                    y: IB.clientY,
                    pointerId: IB.pointerId,
                    type: IB.pointerType,
                    button: IB.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: IB.clientX,
                      y: IB.clientY,
                      pointerId: IB.pointerId,
                      type: IB.pointerType,
                      button: IB.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || NB || (this._currentMousePointerIdDown = IB.pointerId), this.onButtonDown(IB), BB || (IB.preventDefault(), zB && zB.focus())
                }
              }
            }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._pointerInput, aB.b.POINTERDOWN | aB.b.POINTERUP | aB.b.POINTERMOVE | aB.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, QB = 0, nB = null, this.onLostFocus()
            }, this._contextMenuBind = BB => this.onContextMenu(BB), zB && zB.addEventListener("contextmenu", this._contextMenuBind, !1);
            const dB = this.camera.aY().wJ().getHostWindow();
            dB && tB.i.RegisterTopRootEvents(dB, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const BB = this.camera.aY().wJ().getHostWindow();
              BB && tB.i.UnregisterTopRootEvents(BB, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const BB = this.camera.aY().wJ().getInputElement();
                BB && BB.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(BB, jB) {}
          onTouch(BB, jB, zB) {}
          onMultiTouch(BB, jB, zB, QB, nB, dB) {}
          onContextMenu(BB) {
            BB.preventDefault()
          }
          onButtonDown(BB) {}
          onButtonUp(BB) {}
          onLostFocus() {}
        }, (() => {
          const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          jB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, jB) => {
                BB.buttons = jB
              }
            },
            metadata: IB
          }, zB, dB), IB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IB
          })
        })(), BB
      })(),
      MB = (() => {
        var BB;
        let jB, zB, dB, IB = SB,
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        return BB = class extends IB {
          constructor() {
            super(...arguments), this.pinchZoom = (0, QB.g)(this, NB, !0), this.multiTouchPanning = ((0, QB.g)(this, uB), (0, QB.g)(this, UB, !0)), this.multiTouchPanAndZoom = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, !0)), this._isPinching = ((0, QB.g)(this, rB), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(BB, jB) {}
          _computeMultiTouchPanning(BB, jB) {}
          onMultiTouch(BB, jB, zB, QB, nB, dB) {
            0 === zB && null === nB || 0 === QB && null === dB || (this.multiTouchPanAndZoom ? (this._computePinchZoom(zB, QB), this._computeMultiTouchPanning(nB, dB)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(zB, QB), this._isPinching = !0) : this._computeMultiTouchPanning(nB, dB)) : this.multiTouchPanning ? this._computeMultiTouchPanning(nB, dB) : this.pinchZoom && this._computePinchZoom(zB, QB))
          }
          onButtonUp(BB) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(IB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchZoom" in BB,
              get: BB => BB.pinchZoom,
              set: (BB, jB) => {
                BB.pinchZoom = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanning" in BB,
              get: BB => BB.multiTouchPanning,
              set: (BB, jB) => {
                BB.multiTouchPanning = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, QB.e)(null, null, dB, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanAndZoom" in BB,
              get: BB => BB.multiTouchPanAndZoom,
              set: (BB, jB) => {
                BB.multiTouchPanAndZoom = jB
              }
            },
            metadata: sB
          }, pB, rB), sB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          })
        })(), BB
      })(),
      EB = (() => {
        var BB;
        let jB, zB, dB, IB, NB, uB, UB, aB = MB,
          pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [],
          kB = [],
          GB = [],
          LB = [],
          gB = [],
          tB = [],
          SB = [],
          EB = [],
          iB = [];
        return BB = class extends aB {
          constructor() {
            super(...arguments), this.buttons = (0, QB.g)(this, pB, [0, 1, 2]), this.angularSensibilityX = ((0, QB.g)(this, rB), (0, QB.g)(this, sB, 1e3)), this.angularSensibilityY = ((0, QB.g)(this, JB), (0, QB.g)(this, mB, 1e3)), this.pinchPrecision = ((0, QB.g)(this, yB), (0, QB.g)(this, kB, 12)), this.pinchDeltaPercentage = ((0, QB.g)(this, GB), (0, QB.g)(this, LB, 0)), this.useNaturalPinchZoom = ((0, QB.g)(this, gB), (0, QB.g)(this, tB, !1)), this.panningSensibility = ((0, QB.g)(this, SB), (0, QB.g)(this, EB, 1e3)), this.pinchInwards = ((0, QB.g)(this, iB), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(BB, jB) {
            if (BB && jB) {
              const zB = jB.x - BB.x,
                QB = jB.y - BB.y,
                nB = this.camera.movement.input.getEntry("pointer", "pan"),
                dB = nB?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== dB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zB * dB, this.camera.movement.panAccumulatedPixels.y += QB * dB)
            }
          }
          _computePinchZoom(jB, zB) {
            const QB = this.camera.radius || BB.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = QB * Math.sqrt(jB) / Math.sqrt(zB);
            else if (this.pinchDeltaPercentage) {
              const BB = .001 * (zB - jB) * QB * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            } else {
              const BB = (zB - jB) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            }
          }
          onTouch(BB, jB, zB) {
            const QB = this._activeEntry ?? (this.camera.wJ().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (QB)
              if ("pan" === QB.interaction) {
                const BB = QB.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== BB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -jB * BB, this.camera.movement.panAccumulatedPixels.y += zB * BB)
              } else if ("rotate" === QB.interaction) {
              const BB = QB.Kl ?? QB.sensitivity ?? 1 / this.angularSensibilityX,
                nB = QB.Rl ?? QB.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -jB * BB, this.camera.movement.rotationAccumulatedPixels.y += -zB * nB
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(BB, jB, zB, QB, nB, dB) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(QB) - Math.sqrt(zB)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(BB, jB, zB, QB, nB, dB)
          }
          onButtonDown(BB) {
            this._pointerConditions.button = BB.button, this._pointerModifiers.ctrl = BB.ctrlKey, this._pointerModifiers.alt = BB.altKey, this._pointerModifiers.shift = BB.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(BB)
          }
          onButtonUp(BB) {
            this._activeEntry = null, super.onButtonUp(BB)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const MB = "function" === typeof Symbol && Symbol.metadata ? Object.create(aB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, jB) => {
                BB.buttons = jB
              }
            },
            metadata: MB
          }, pB, rB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityX" in BB,
              get: BB => BB.angularSensibilityX,
              set: (BB, jB) => {
                BB.angularSensibilityX = jB
              }
            },
            metadata: MB
          }, sB, JB), (0, QB.e)(null, null, dB, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityY" in BB,
              get: BB => BB.angularSensibilityY,
              set: (BB, jB) => {
                BB.angularSensibilityY = jB
              }
            },
            metadata: MB
          }, mB, yB), (0, QB.e)(null, null, IB, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchPrecision" in BB,
              get: BB => BB.pinchPrecision,
              set: (BB, jB) => {
                BB.pinchPrecision = jB
              }
            },
            metadata: MB
          }, kB, GB), (0, QB.e)(null, null, NB, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchDeltaPercentage" in BB,
              get: BB => BB.pinchDeltaPercentage,
              set: (BB, jB) => {
                BB.pinchDeltaPercentage = jB
              }
            },
            metadata: MB
          }, LB, gB), (0, QB.e)(null, null, uB, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "useNaturalPinchZoom" in BB,
              get: BB => BB.useNaturalPinchZoom,
              set: (BB, jB) => {
                BB.useNaturalPinchZoom = jB
              }
            },
            metadata: MB
          }, tB, SB), (0, QB.e)(null, null, UB, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningSensibility" in BB,
              get: BB => BB.panningSensibility,
              set: (BB, jB) => {
                BB.panningSensibility = jB
              }
            },
            metadata: MB
          }, EB, iB), MB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MB
          })
        })(), BB.MinimumRadiusForPinch = .001, BB
      })();
    gB.e.ArcRotateCameraPointersInput = EB;
    var iB = zB(40264);
    let qB = (() => {
      var BB;
      let jB, zB, dB, NB, uB, UB, aB, pB, rB, sB, JB, mB = [],
        yB = [],
        kB = [],
        GB = [],
        LB = [],
        gB = [],
        SB = [],
        MB = [],
        EB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [];
      return BB = class {
        constructor() {
          this.camera = (0, QB.g)(this, mB), this.keysUp = (0, QB.g)(this, yB, [38]), this.keysDown = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, [40])), this.keysLeft = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, [37])), this.keysRight = ((0, QB.g)(this, SB), (0, QB.g)(this, MB, [39])), this.keysReset = ((0, QB.g)(this, EB), (0, QB.g)(this, qB, [220])), this.keysZoomIn = ((0, QB.g)(this, fB), (0, QB.g)(this, oB, [187, 107])), this.keysZoomOut = ((0, QB.g)(this, HB), (0, QB.g)(this, DB, [189, 109])), this.panningSensibility = ((0, QB.g)(this, FB), (0, QB.g)(this, YB, 50)), this.zoomingSensibility = ((0, QB.g)(this, VB), (0, QB.g)(this, hB, 25)), this.angularSpeed = ((0, QB.g)(this, XB), (0, QB.g)(this, ZB, .01)), this._useAltToZoom = ((0, QB.g)(this, AB), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new IB.i, this._panDirection = new IB.i
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(BB) {
          this._useAltToZoom = BB, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const BB = this.camera.movement.input,
            jB = BB.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && jB ? BB.inputMap.splice(BB.inputMap.indexOf(jB), 1) : this._useAltToZoom && !jB && BB.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(BB) {
          BB = tB.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aY(), this._engine = this._scene.wJ(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((jB => {
            const zB = jB.event;
            if (!zB.metaKey)
              if (jB.type === iB.e.KEYDOWN) {
                if (this._ctrlPressed = zB.ctrlKey, this._altPressed = zB.altKey, -1 !== this.keysUp.indexOf(zB.keyCode) || -1 !== this.keysDown.indexOf(zB.keyCode) || -1 !== this.keysLeft.indexOf(zB.keyCode) || -1 !== this.keysRight.indexOf(zB.keyCode) || -1 !== this.keysReset.indexOf(zB.keyCode) || -1 !== this.keysZoomIn.indexOf(zB.keyCode) || -1 !== this.keysZoomOut.indexOf(zB.keyCode)) {
                  -1 === this._keys.indexOf(zB.keyCode) && this._keys.push(zB.keyCode), zB.preventDefault && (BB || zB.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(zB.keyCode) || -1 !== this.keysDown.indexOf(zB.keyCode) || -1 !== this.keysLeft.indexOf(zB.keyCode) || -1 !== this.keysRight.indexOf(zB.keyCode) || -1 !== this.keysReset.indexOf(zB.keyCode) || -1 !== this.keysZoomIn.indexOf(zB.keyCode) || -1 !== this.keysZoomOut.indexOf(zB.keyCode)) {
              const jB = this._keys.indexOf(zB.keyCode);
              jB >= 0 && this._keys.splice(jB, 1), zB.preventDefault && (BB || zB.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              jB = BB.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const zB = this._rotateDirection.set(0, 0),
              QB = this._panDirection.set(0, 0);
            let nB = 0,
              dB = 0;
            for (let IB = 0; IB < this._keys.length; IB++) {
              const NB = this._keys[IB];
              if (this._keyboardConditions.key = NB, -1 === this.keysReset.indexOf(NB)) {
                const BB = jB.resolveInteraction("keyboard", this._keyboardConditions);
                if (BB)
                  if ("pan" === BB.interaction) dB = Math.max(dB, BB.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(NB) ? QB.x -= 1 : -1 !== this.keysRight.indexOf(NB) ? QB.x += 1 : -1 !== this.keysUp.indexOf(NB) ? QB.y += 1 : -1 !== this.keysDown.indexOf(NB) && (QB.y -= 1);
                  else if ("zoom" === BB.interaction) {
                  const zB = BB.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(NB) || -1 !== this.keysZoomIn.indexOf(NB) ? jB.handlers.zoom(zB) : -1 === this.keysDown.indexOf(NB) && -1 === this.keysZoomOut.indexOf(NB) || jB.handlers.zoom(-zB)
                } else "rotate" === BB.interaction && (nB = Math.max(nB, BB.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(NB) ? zB.x -= 1 : -1 !== this.keysRight.indexOf(NB) ? zB.x += 1 : -1 !== this.keysUp.indexOf(NB) ? zB.y -= 1 : -1 !== this.keysDown.indexOf(NB) && (zB.y += 1))
              } - 1 !== this.keysReset.indexOf(NB) && BB.useInputToRestoreState && BB.restoreState()
            }
            0 === zB.x && 0 === zB.y || (zB.normalize().scaleInPlace(nB), jB.handlers.rotate(zB.x, zB.y)), 0 === QB.x && 0 === QB.y || (QB.normalize().scaleInPlace(dB), jB.handlers.pan(QB.x, QB.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], sB = [(0, nB.A)()], JB = [(0, nB.A)()], (0, QB.e)(BB, null, JB, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAltToZoom" in BB,
            get: BB => BB.useAltToZoom
          },
          metadata: IB
        }, null, mB), (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, jB) => {
              BB.keysUp = jB
            }
          },
          metadata: IB
        }, yB, kB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, jB) => {
              BB.keysDown = jB
            }
          },
          metadata: IB
        }, GB, LB), (0, QB.e)(null, null, dB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, jB) => {
              BB.keysLeft = jB
            }
          },
          metadata: IB
        }, gB, SB), (0, QB.e)(null, null, NB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, jB) => {
              BB.keysRight = jB
            }
          },
          metadata: IB
        }, MB, EB), (0, QB.e)(null, null, uB, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysReset" in BB,
            get: BB => BB.keysReset,
            set: (BB, jB) => {
              BB.keysReset = jB
            }
          },
          metadata: IB
        }, qB, fB), (0, QB.e)(null, null, UB, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomIn" in BB,
            get: BB => BB.keysZoomIn,
            set: (BB, jB) => {
              BB.keysZoomIn = jB
            }
          },
          metadata: IB
        }, oB, HB), (0, QB.e)(null, null, aB, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomOut" in BB,
            get: BB => BB.keysZoomOut,
            set: (BB, jB) => {
              BB.keysZoomOut = jB
            }
          },
          metadata: IB
        }, DB, FB), (0, QB.e)(null, null, pB, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "panningSensibility" in BB,
            get: BB => BB.panningSensibility,
            set: (BB, jB) => {
              BB.panningSensibility = jB
            }
          },
          metadata: IB
        }, YB, VB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomingSensibility" in BB,
            get: BB => BB.zoomingSensibility,
            set: (BB, jB) => {
              BB.zoomingSensibility = jB
            }
          },
          metadata: IB
        }, hB, XB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSpeed" in BB,
            get: BB => BB.angularSpeed,
            set: (BB, jB) => {
              BB.angularSpeed = jB
            }
          },
          metadata: IB
        }, ZB, AB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB
    })();
    gB.e.ArcRotateCameraKeyboardMoveInput = qB;
    var fB = zB(37869),
      oB = zB(40268);
    let HB = (() => {
      var BB;
      let jB, zB, dB, uB = [],
        UB = [],
        pB = [],
        sB = [],
        JB = [],
        mB = [];
      return BB = class {
        constructor() {
          this.wheelPrecision = (0, QB.g)(this, uB, 3), this.zoomToMouseLocation = ((0, QB.g)(this, UB), (0, QB.g)(this, pB, !1)), this.wheelDeltaPercentage = ((0, QB.g)(this, sB), (0, QB.g)(this, JB, 0)), this.customComputeDeltaFromMouseWheel = ((0, QB.g)(this, mB), null), this._viewOffset = new IB.m(0, 0, 0), this._globalOffset = new IB.m(0, 0, 0), this._inertialPanning = IB.m.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(BB, jB) {
          let zB;
          const QB = .01 * BB * this.wheelDeltaPercentage * jB;
          return zB = BB > 0 ? QB / (1 + this.wheelDeltaPercentage) : QB * (1 + this.wheelDeltaPercentage), zB
        }
        attachControl(BB) {
          BB = tB.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = jB => {
            if (jB.type !== aB.b.POINTERWHEEL) return;
            const zB = jB.event;
            let QB;
            const nB = zB.deltaMode === oB.c.DOM_DELTA_LINE ? 40 : 1,
              dB = -zB.deltaY * nB;
            if (this.customComputeDeltaFromMouseWheel) QB = this.customComputeDeltaFromMouseWheel(dB, this, zB);
            else if (this.wheelDeltaPercentage) {
              if (QB = this._computeDeltaFromMouseWheelLegacyEvent(dB, this.camera.radius), QB > 0) {
                const BB = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let jB = this.camera.radius,
                  zB = BB + QB;
                for (let QB = 0; QB < 20 && !(jB <= zB) && !(Math.abs(zB * this.camera.inertia) < .001); QB++) jB -= zB, zB *= this.camera.inertia;
                jB = (0, NB.Clamp)(jB, 0, Number.MAX_VALUE), QB = this._computeDeltaFromMouseWheelLegacyEvent(dB, jB)
              }
            } else {
              const BB = this.camera.movement.input.getEntry("wheel", "zoom");
              QB = dB * (BB?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            QB && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(QB)) : this.camera.movement.zoomAccumulatedPixels += QB), zB.preventDefault && (BB || zB.preventDefault())
          }, this._observer = this.camera.aY()._inputManager._addCameraPointerObserver(this._wheel, aB.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.S_(0)
        }
        detachControl() {
          this._observer && (this.camera.aY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const BB = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(BB.inertialAlphaOffset) + Math.abs(BB.inertialBetaOffset) + Math.abs(BB.inertialRadiusOffset)) {
            this._updateHitPlane(), BB.target.addInPlace(this._inertialPanning), BB.radius -= this._zoomToMouseRadiusOffset;
            const jB = BB.movement.getFrameIndependentDecay(BB.inertia);
            this._inertialPanning.scaleInPlace(jB), this._zoomToMouseRadiusOffset *= jB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < rB.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const BB = this.camera,
            jB = BB.target.subtract(BB.position);
          this._hitPlane = fB.c.FromPositionAndNormal(BB.target, jB)
        }
        _getPosition() {
          const BB = this.camera,
            jB = BB.aY(),
            zB = jB.createPickingRay(jB.pointerX, jB.pointerY, IB.c.Identity(), BB, !1);
          0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = IB.m.TransformNormal(this._viewOffset, BB._cameraTransformMatrix), zB.origin.addInPlace(this._globalOffset));
          let QB = 0;
          return this._hitPlane && (QB = zB.intersectsPlane(this._hitPlane) ?? 0), zB.origin.addInPlace(zB.direction.scaleInPlace(QB))
        }
        _zoomToMouse(BB) {
          const jB = this.camera,
            zB = 1 - jB.inertia,
            QB = jB.movement.getFrameIndependentInputScale(jB.inertia);
          if (jB.lowerRadiusLimit) {
            const nB = jB.lowerRadiusLimit ?? 0;
            jB.radius - (this._zoomToMouseRadiusOffset + BB * QB) / zB < nB && (BB = ((jB.radius - nB) * zB - this._zoomToMouseRadiusOffset) / QB)
          }
          if (jB.upperRadiusLimit) {
            const nB = jB.upperRadiusLimit ?? 0;
            jB.radius - (this._zoomToMouseRadiusOffset + BB * QB) / zB > nB && (BB = ((jB.radius - nB) * zB - this._zoomToMouseRadiusOffset) / QB)
          }
          const nB = BB / zB / jB.radius,
            dB = this._getPosition(),
            NB = IB.h.KJ[6];
          dB.subtractToRef(jB.target, NB), NB.scaleInPlace(nB), NB.scaleInPlace(zB), NB.scaleInPlace(QB), this._inertialPanning.addInPlace(NB), this._zoomToMouseRadiusOffset += BB * QB
        }
        _zeroIfClose(BB) {
          Math.abs(BB.x) < rB.c && (BB.x = 0), Math.abs(BB.y) < rB.c && (BB.y = 0), Math.abs(BB.z) < rB.c && (BB.z = 0)
        }
      }, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecision" in BB,
            get: BB => BB.wheelPrecision,
            set: (BB, jB) => {
              BB.wheelPrecision = jB
            }
          },
          metadata: IB
        }, uB, UB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomToMouseLocation" in BB,
            get: BB => BB.zoomToMouseLocation,
            set: (BB, jB) => {
              BB.zoomToMouseLocation = jB
            }
          },
          metadata: IB
        }, pB, sB), (0, QB.e)(null, null, dB, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelDeltaPercentage" in BB,
            get: BB => BB.wheelDeltaPercentage,
            set: (BB, jB) => {
              BB.wheelDeltaPercentage = jB
            }
          },
          metadata: IB
        }, JB, mB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB
    })();
    gB.e.ArcRotateCameraMouseWheelInput = HB;
    var DB, FB, YB = zB(39965);
    class VB extends gB.f {
      constructor(BB) {
        super(BB)
      }
      addMouseWheel() {
        return this.add(new HB), this
      }
      addPointers() {
        return this.add(new EB), this
      }
      addKeyboard() {
        return this.add(new qB), this
      }
    }(DB = VB.prototype).addVRDeviceOrientation ?? (DB.addVRDeviceOrientation = (0, YB.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (FB = VB.prototype).addGamepad ?? (FB.addGamepad = (0, YB.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var hB = zB(37222),
      XB = zB(40319),
      ZB = zB(40324);
    class AB extends XB.c {
      constructor(BB, jB, zB) {
        super(BB, jB, zB), this.input = new ZB.c({
          pan: (BB, jB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += jB
          },
          rotate: (BB, jB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += jB
          },
          zoom: BB => {
            this.zoomAccumulatedPixels += BB
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

    function TB(BB, jB) {
      return isNaN(BB) ? jB : BB
    }
    let PB = (() => {
        var BB;
        let jB, zB, uB, aB, pB, JB, mB, gB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, hB, XB, ZB, PB, WB, eB, lB, wB, xB, KB = LB.g,
          CB = [],
          cB = [],
          bB = [],
          vB = [],
          RB = [],
          OB = [],
          Bj = [],
          jj = [],
          zj = [],
          Qj = [],
          nj = [],
          dj = [],
          Ij = [],
          Nj = [],
          uj = [],
          Uj = [],
          aj = [],
          pj = [],
          rj = [],
          sj = [],
          Jj = [],
          mj = [],
          yj = [],
          kj = [],
          Gj = [],
          Lj = [],
          gj = [],
          tj = [],
          Sj = [],
          Mj = [],
          Ej = [],
          ij = [],
          qj = [],
          fj = [],
          oj = [],
          Hj = [],
          Dj = [],
          Fj = [],
          Yj = [],
          Vj = [],
          hj = [],
          Xj = [],
          Zj = [],
          Aj = [],
          Tj = [],
          Pj = [],
          Wj = [];
        return BB = class extends KB {
          get target() {
            return this.WC
          }
          set target(BB) {
            this.setTarget(BB)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(BB) {
            BB && this.setTarget(BB)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(BB) {
            this.setPosition(BB)
          }
          set upVector(BB) {
            this._upToYMatrix || (this._yToUpMatrix = new IB.c, this._upToYMatrix = new IB.c, this._upVector = IB.m.Zero()), BB.normalize(), this._upVector.jH(BB), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            IB.c.RotationAlignToRef(IB.m.UpReadOnly, this._upVector, this._yToUpMatrix), IB.c.RotationAlignToRef(this._upVector, IB.m.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const BB = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialAlphaOffset(BB) {
            this._inertialAlphaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const BB = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialBetaOffset(BB) {
            this._inertialBetaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const BB = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialRadiusOffset(BB) {
            this._inertialRadiusOffset = BB, 0 === BB && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(BB) {
            this._panningInertia = BB, this.movement && (this.movement.panInertia = BB)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(BB) {
            this._inertia = BB, this.movement && (this.movement.rotationInertia = BB, this.movement.zoomInertia = BB)
          }
          get angularSensibilityX() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityX : 0
          }
          set angularSensibilityX(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.angularSensibilityX = BB)
          }
          get angularSensibilityY() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityY : 0
          }
          set angularSensibilityY(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.angularSensibilityY = BB)
          }
          get pinchPrecision() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchPrecision : 0
          }
          set pinchPrecision(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.pinchPrecision = BB)
          }
          get pinchDeltaPercentage() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.pinchDeltaPercentage = BB)
          }
          get useNaturalPinchZoom() {
            const BB = this.inputs.attached.pointers;
            return !!BB && BB.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.useNaturalPinchZoom = BB)
          }
          get panningSensibility() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.panningSensibility : 0
          }
          set panningSensibility(BB) {
            const jB = this.inputs.attached.pointers;
            jB && (jB.panningSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysUp = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysDown = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const jB = this.inputs.attached.keyboard;
            jB && (jB.keysRight = BB)
          }
          get wheelPrecision() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelPrecision : 0
          }
          set wheelPrecision(BB) {
            const jB = this.inputs.attached.mousewheel;
            jB && (jB.wheelPrecision = BB)
          }
          get zoomToMouseLocation() {
            const BB = this.inputs.attached.mousewheel;
            return !!BB && BB.zoomToMouseLocation
          }
          set zoomToMouseLocation(BB) {
            const jB = this.inputs.attached.mousewheel;
            jB && (jB.zoomToMouseLocation = BB)
          }
          get wheelDeltaPercentage() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(BB) {
            const jB = this.inputs.attached.mousewheel;
            jB && (jB.wheelDeltaPercentage = BB)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(BB) {
            this._useCtrlForPanningInternal = BB;
            const jB = this.movement.input,
              zB = jB.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !BB && zB ? jB.inputMap.splice(jB.inputMap.indexOf(zB), 1) : BB && !zB && jB.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const QB = jB.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !BB && QB ? jB.inputMap.splice(jB.inputMap.indexOf(QB), 1) : BB && !QB && jB.addEntry({
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
          set _panningMouseButton(BB) {
            this._panningMouseButtonInternal = BB;
            const jB = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            jB && (jB.button = BB)
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
          set useBouncingBehavior(BB) {
            BB !== this.useBouncingBehavior && (BB ? (this._bouncingBehavior = new yB, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(BB) {
            BB !== this.useFramingBehavior && (BB ? (this._framingBehavior = new kB, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(BB) {
            BB !== this.useAutoRotationBehavior && (BB ? (this._autoRotationBehavior = new sB, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(BB, jB, zB, nB, NB, uB) {
            var UB;
            let aB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(BB, IB.m.Zero(), uB, aB), UB = this, this.alpha = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, void 0)), this.beta = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, void 0)), this.radius = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, void 0)), this.overrideCloneAlphaBetaRadius = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, void 0)), this.WC = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, void 0)), this._targetHost = ((0, QB.g)(this, nj), (0, QB.g)(this, dj, void 0)), this._upToYMatrix = (0, QB.g)(this, Ij), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, QB.g)(this, Nj, null), this.upperAlphaLimit = ((0, QB.g)(this, uj), (0, QB.g)(this, Uj, null)), this.lowerBetaLimit = ((0, QB.g)(this, aj), (0, QB.g)(this, pj, .01)), this.upperBetaLimit = ((0, QB.g)(this, rj), (0, QB.g)(this, sj, Math.PI - .01)), this.lowerRadiusLimit = ((0, QB.g)(this, Jj), (0, QB.g)(this, mj, null)), this.upperRadiusLimit = ((0, QB.g)(this, yj), (0, QB.g)(this, kj, null)), this.lowerTargetYLimit = ((0, QB.g)(this, Gj), (0, QB.g)(this, Lj, -1 / 0)), this.inertialPanningX = ((0, QB.g)(this, gj), (0, QB.g)(this, tj, 0)), this.inertialPanningY = ((0, QB.g)(this, Sj), (0, QB.g)(this, Mj, 0)), this.pinchToPanMaxDistance = ((0, QB.g)(this, Ej), (0, QB.g)(this, ij, 20)), this.panningDistanceLimit = ((0, QB.g)(this, qj), (0, QB.g)(this, fj, null)), this.panningOriginTarget = ((0, QB.g)(this, oj), (0, QB.g)(this, Hj, IB.m.Zero())), this._panningInertia = ((0, QB.g)(this, Dj), .9), this._inertia = .9, this.zoomOnFactor = (0, QB.g)(this, Fj, 1), this.targetScreenOffset = ((0, QB.g)(this, Yj), (0, QB.g)(this, Vj, IB.i.Zero())), this.allowUpsideDown = ((0, QB.g)(this, hj), (0, QB.g)(this, Xj, !0)), this.useInputToRestoreState = ((0, QB.g)(this, Zj), (0, QB.g)(this, Aj, !0)), this.restoreStateInterpolationFactor = ((0, QB.g)(this, Tj), (0, QB.g)(this, Pj, 0)), this._currentInterpolationFactor = ((0, QB.g)(this, Wj), 0), this._viewMatrix = new IB.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new IB.m(1, 1, 0), this._transformedDirection = new IB.m, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new dB.c, this.checkCollisions = !1, this.collisionRadius = new IB.m(.5, .5, .5), this._previousPosition = IB.m.Zero(), this._collisionVelocity = IB.m.Zero(), this._newPosition = IB.m.Zero(), this._computationVector = IB.m.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new IB.m(NaN, NaN, NaN), this._goalTargetScreenOffset = new IB.i(NaN, NaN), this._onCollisionPositionChange = function(BB, jB) {
              let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              zB ? (UB.setPosition(jB), UB.Jr && UB.Jr(zB)) : UB._previousPosition.jH(UB._position);
              const QB = Math.cos(UB.alpha),
                nB = Math.sin(UB.alpha),
                dB = Math.cos(UB.beta);
              let IB = Math.sin(UB.beta);
              0 === IB && (IB = 1e-4);
              const NB = UB._getTargetPosition();
              UB._computationVector.U3(UB.radius * QB * IB, UB.radius * dB, UB.radius * nB * IB), NB.addToRef(UB._computationVector, UB._newPosition), UB._position.jH(UB._newPosition);
              let uB = UB.upVector;
              UB.allowUpsideDown && UB.beta < 0 && (uB = uB.clone(), uB = uB.bu()), UB._computeViewMatrix(UB._position, NB, uB), UB._viewMatrix.addAtIndex(12, UB.targetScreenOffset.x), UB._viewMatrix.addAtIndex(13, UB.targetScreenOffset.y), UB._collisionTriggered = !1
            }, this.WC = IB.m.Zero(), NB && this.setTarget(NB), this.alpha = jB, this.beta = zB, this.radius = nB, this.getViewMatrix(), this.inputs = new VB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new AB(this.aY(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.WC = new IB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = IB.i.Zero()
          }
          _updateCache(BB) {
            BB || super._updateCache(), this._cache.WC.jH(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.jH(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const BB = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.WC) : this.WC.jH(BB)
            }
            const BB = this._getLockedTargetPosition();
            return BB || this.WC
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > rB.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              dB = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != dB ? this._currentInterpolationFactor = dB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = TB(BB, this._goalAlpha), this._goalBeta = TB(jB, this._goalBeta), this._goalRadius = TB(zB, this._goalRadius), this._goalTarget.set(TB(QB.x, this._goalTarget.x), TB(QB.y, this._goalTarget.y), TB(QB.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(TB(nB.x, this._goalTargetScreenOffset.x), TB(nB.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, NB.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, NB.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, NB.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, NB.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.WC.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(BB, jB) {
            let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const nB = arguments;
            jB = tB.i.BackCompatCameraNoPreventDefault(nB), this._useCtrlForPanning = zB, this._panningMouseButton = QB, "boolean" === typeof nB[0] && (nB.length > 1 && (this._useCtrlForPanning = nB[1]), nB.length > 2 && (this._panningMouseButton = nB[2])), this.inputs.attachElement(jB), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(BB, jB, zB) {
            const QB = this.invertRotation ? -1 : 1;
            let nB = BB * this._calculateHandednessMultiplier();
            this.beta < 0 && (nB *= -1), this.alpha += nB * QB, this.beta += jB * QB, this.radius -= zB
          }
          _applyPanDelta(BB, jB) {
            const zB = IB.h.KJ[0].U3(BB, jB, jB);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), zB.multiplyInPlace(this.panningAxis), IB.m.TransformNormalToRef(zB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const BB = this.upVector,
                jB = IB.m.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
              IB.m.CrossToRef(BB, jB, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.WC);
                IB.m.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.WC.jH(this._transformedDirection)
              } else {
                if (this.parent) {
                  const BB = IB.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), IB.m.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
                }
                this.WC.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let BB = !1;
            this.movement.computeCurrentFrameDeltas();
            const jB = this.movement.rotationDeltaCurrentFrame,
              zB = this.movement.zoomDeltaCurrentFrame,
              QB = this.movement.panDeltaCurrentFrame;
            if (0 === jB.x && 0 === jB.y && 0 === zB && 0 === QB.x && 0 === QB.y || (BB = !0, 0 === jB.x && 0 === jB.y && 0 === zB || this._applyRotationAndZoomDelta(jB.x, jB.y, zB), 0 === QB.x && 0 === QB.y || this._applyPanDelta(QB.x, QB.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), BB = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const jB = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < jB && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < jB && (this.inertialPanningY = 0), BB = !0
            }
            if (BB) this.stopInterpolation();
            else if (this._isInterpolating) {
              let BB = !1;
              const jB = this._scene.wJ().getDeltaTime() / 1e3,
                zB = 1 - Math.pow(2, -jB / this._currentInterpolationFactor),
                QB = TB(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const jB = IB.h.KJ[0].set(TB(this._goalTarget.x, this.WC.x), TB(this._goalTarget.y, this.WC.y), TB(this._goalTarget.z, this.WC.z));
                IB.m.LerpToRef(this.target, jB, zB, this.WC), 10 * IB.m.Distance(this.target, jB) / QB < rB.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.jH(jB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const jB = IB.d.RotationAlphaBetaGammaToRef(TB(this._goalAlpha, this.alpha), TB(this._goalBeta, this.beta), 0, IB.h.Quaternion[0]),
                  QB = IB.d.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, IB.h.Quaternion[1]),
                  nB = IB.d.SlerpToRef(QB, jB, zB, IB.h.Quaternion[2]);
                nB.normalize();
                const dB = nB.toAlphaBetaGammaToRef(IB.h.KJ[0]);
                if (this.alpha = dB.x, this.beta = dB.y, nB.isApprox(jB, rB.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const BB = jB.toAlphaBetaGammaToRef(IB.h.KJ[0]);
                  this.alpha = BB.x, this.beta = BB.y
                } else BB = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (QB - this.radius) * zB, Math.abs(QB / this.radius - 1) < rB.c ? (this._goalRadius = NaN, this.radius = QB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const jB = IB.h.Vector2[0].set(TB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), TB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                IB.i.LerpToRef(this.targetScreenOffset, jB, zB, this.targetScreenOffset), IB.i.Distance(this.targetScreenOffset, jB) < rB.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.jH(jB)) : BB = !0
              }
              this._isInterpolating = BB
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || IB.m.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const BB = this.alpha;
            var jB, zB;
            this.alpha = function(BB) {
              let jB = Math.PI / 2;
              return 0 === BB.x && 0 === BB.z || (jB = Math.acos(BB.x / Math.sqrt(Math.pow(BB.x, 2) + Math.pow(BB.z, 2)))), BB.z < 0 && (jB = 2 * Math.PI - jB), jB
            }(this._computationVector), this.beta = (jB = this._computationVector.y, zB = this.radius, Math.acos(jB / zB));
            const QB = Math.round((BB - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * QB * Math.PI, this._checkLimits()
          }
          setPosition(BB) {
            this._position.equals(BB) || (this._position.jH(BB), this.rebuildAnglesAndRadius())
          }
          setTarget(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (QB = this.overrideCloneAlphaBetaRadius ?? QB, BB.computeWorldMatrix) jB && BB.rV ? this._targetBoundingCenter = BB.rV().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.WC = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const jB = BB,
                QB = this._getTargetPosition();
              if (QB && !zB && QB.equals(jB)) return;
              this._targetHost = null, this.WC = jB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            QB || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const BB = Math.cos(this.alpha),
              jB = Math.sin(this.alpha),
              zB = Math.cos(this.beta);
            let QB = Math.sin(this.beta);
            0 === QB && (QB = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const nB = this._getTargetPosition();
            if (this._computationVector.U3(this.radius * BB * QB, this.radius * zB, this.radius * jB * QB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || IB.m.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), nB.addToRef(this._computationVector, this._newPosition), this.aY().collisionsEnabled && this.checkCollisions) {
              const BB = this.aY().collisionCoordinator;
              this._collider || (this._collider = BB.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, BB.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.jH(this._newPosition);
              let BB = this.upVector;
              this.allowUpsideDown && QB < 0 && (BB = BB.bu()), this._computeViewMatrix(this._position, nB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.jH(nB), this._viewMatrix
          }
          zoomOn(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            BB = BB || this.aY().meshes;
            const zB = UB.b.MinMax(BB);
            let QB = this._calculateLowerRadiusFromModelBoundingSphere(zB.min, zB.max);
            if (QB = Math.max(Math.min(QB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = QB * this.zoomOnFactor, this.mode === GB.b.ORTHOGRAPHIC_CAMERA) {
              const BB = this.aY().wJ().getAspectRatio(this),
                jB = QB * this.zoomOnFactor / 2;
              this.orthoLeft = -jB * BB, this.orthoRight = jB * BB, this.orthoBottom = -jB, this.orthoTop = jB
            }
            this.focusOn({
              min: zB.min,
              max: zB.max,
              distance: QB
            }, jB)
          }
          focusOn(BB) {
            let jB, zB, QB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === BB.min) {
              const QB = BB || this.aY().meshes;
              jB = UB.b.MinMax(QB), zB = IB.m.Distance(jB.min, jB.max)
            } else {
              jB = BB, zB = BB.distance
            }
            this.WC = UB.b.Center(jB), QB || (this.maxZ = 2 * zB)
          }
          createRigCamera(jB, zB) {
            let QB = 0;
            switch (this.cameraRigMode) {
              case GB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case GB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case GB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case GB.b.RIG_MODE_VR:
                QB = this._cameraRigParams.stereoHalfAngle * (0 === zB ? 1 : -1);
                break;
              case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                QB = this._cameraRigParams.stereoHalfAngle * (0 === zB ? -1 : 1)
            }
            const nB = new BB(jB, this.alpha + QB, this.beta, this.radius, this.WC, this.aY());
            return nB._cameraRigParams = {}, nB.isRigCamera = !0, nB.rigParent = this, nB.upVector = this.upVector, nB.mode = this.mode, nB.orthoLeft = this.orthoLeft, nB.orthoRight = this.orthoRight, nB.orthoBottom = this.orthoBottom, nB.orthoTop = this.orthoTop, nB
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              jB = this._rigCameras[1];
            switch (BB.beta = jB.beta = this.beta, this.cameraRigMode) {
              case GB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case GB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case GB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case GB.b.RIG_MODE_VR:
                BB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, jB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case GB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                BB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, jB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const QB = IB.m.Distance(BB, jB),
              nB = this.aY().wJ().getAspectRatio(this),
              dB = Math.tan(this.fov / 2),
              NB = dB * nB,
              uB = .5 * QB * zB,
              UB = uB * Math.sqrt(1 + 1 / (NB * NB)),
              aB = uB * Math.sqrt(1 + 1 / (dB * dB));
            return Math.max(UB, aB)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(KB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], uB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.x)("target")], JB = [(0, nB.s)("targetHost")], mB = [(0, nB.A)()], gB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.A)()], EB = [(0, nB.A)()], iB = [(0, nB.A)()], qB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], FB = [(0, nB.A)()], YB = [(0, nB.A)()], hB = [(0, nB.A)()], XB = [(0, nB.x)()], ZB = [(0, nB.A)()], PB = [(0, nB.A)()], WB = [(0, nB.A)()], eB = [(0, nB.w)()], lB = [(0, nB.A)()], wB = [(0, nB.A)()], xB = [(0, nB.A)()], (0, QB.e)(BB, null, mB, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialAlphaOffset" in BB,
              get: BB => BB.inertialAlphaOffset
            },
            metadata: dB
          }, null, CB), (0, QB.e)(BB, null, gB, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialBetaOffset" in BB,
              get: BB => BB.inertialBetaOffset
            },
            metadata: dB
          }, null, CB), (0, QB.e)(BB, null, SB, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialRadiusOffset" in BB,
              get: BB => BB.inertialRadiusOffset
            },
            metadata: dB
          }, null, CB), (0, QB.e)(BB, null, ZB, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningInertia" in BB,
              get: BB => BB.panningInertia
            },
            metadata: dB
          }, null, CB), (0, QB.e)(BB, null, PB, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomToMouseLocation" in BB,
              get: BB => BB.zoomToMouseLocation
            },
            metadata: dB
          }, null, CB), (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "alpha" in BB,
              get: BB => BB.alpha,
              set: (BB, jB) => {
                BB.alpha = jB
              }
            },
            metadata: dB
          }, cB, bB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: BB => "beta" in BB,
              get: BB => BB.beta,
              set: (BB, jB) => {
                BB.beta = jB
              }
            },
            metadata: dB
          }, vB, RB), (0, QB.e)(null, null, uB, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: BB => "radius" in BB,
              get: BB => BB.radius,
              set: (BB, jB) => {
                BB.radius = jB
              }
            },
            metadata: dB
          }, OB, Bj), (0, QB.e)(null, null, aB, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "overrideCloneAlphaBetaRadius" in BB,
              get: BB => BB.overrideCloneAlphaBetaRadius,
              set: (BB, jB) => {
                BB.overrideCloneAlphaBetaRadius = jB
              }
            },
            metadata: dB
          }, jj, zj), (0, QB.e)(null, null, pB, {
            kind: "field",
            name: "WC",
            static: !1,
            private: !1,
            access: {
              has: BB => "WC" in BB,
              get: BB => BB.WC,
              set: (BB, jB) => {
                BB.WC = jB
              }
            },
            metadata: dB
          }, Qj, nj), (0, QB.e)(null, null, JB, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: BB => "_targetHost" in BB,
              get: BB => BB._targetHost,
              set: (BB, jB) => {
                BB._targetHost = jB
              }
            },
            metadata: dB
          }, dj, Ij), (0, QB.e)(null, null, MB, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerAlphaLimit" in BB,
              get: BB => BB.lowerAlphaLimit,
              set: (BB, jB) => {
                BB.lowerAlphaLimit = jB
              }
            },
            metadata: dB
          }, Nj, uj), (0, QB.e)(null, null, EB, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperAlphaLimit" in BB,
              get: BB => BB.upperAlphaLimit,
              set: (BB, jB) => {
                BB.upperAlphaLimit = jB
              }
            },
            metadata: dB
          }, Uj, aj), (0, QB.e)(null, null, iB, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerBetaLimit" in BB,
              get: BB => BB.lowerBetaLimit,
              set: (BB, jB) => {
                BB.lowerBetaLimit = jB
              }
            },
            metadata: dB
          }, pj, rj), (0, QB.e)(null, null, qB, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperBetaLimit" in BB,
              get: BB => BB.upperBetaLimit,
              set: (BB, jB) => {
                BB.upperBetaLimit = jB
              }
            },
            metadata: dB
          }, sj, Jj), (0, QB.e)(null, null, fB, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerRadiusLimit" in BB,
              get: BB => BB.lowerRadiusLimit,
              set: (BB, jB) => {
                BB.lowerRadiusLimit = jB
              }
            },
            metadata: dB
          }, mj, yj), (0, QB.e)(null, null, oB, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperRadiusLimit" in BB,
              get: BB => BB.upperRadiusLimit,
              set: (BB, jB) => {
                BB.upperRadiusLimit = jB
              }
            },
            metadata: dB
          }, kj, Gj), (0, QB.e)(null, null, HB, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerTargetYLimit" in BB,
              get: BB => BB.lowerTargetYLimit,
              set: (BB, jB) => {
                BB.lowerTargetYLimit = jB
              }
            },
            metadata: dB
          }, Lj, gj), (0, QB.e)(null, null, DB, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningX" in BB,
              get: BB => BB.inertialPanningX,
              set: (BB, jB) => {
                BB.inertialPanningX = jB
              }
            },
            metadata: dB
          }, tj, Sj), (0, QB.e)(null, null, FB, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningY" in BB,
              get: BB => BB.inertialPanningY,
              set: (BB, jB) => {
                BB.inertialPanningY = jB
              }
            },
            metadata: dB
          }, Mj, Ej), (0, QB.e)(null, null, YB, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchToPanMaxDistance" in BB,
              get: BB => BB.pinchToPanMaxDistance,
              set: (BB, jB) => {
                BB.pinchToPanMaxDistance = jB
              }
            },
            metadata: dB
          }, ij, qj), (0, QB.e)(null, null, hB, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningDistanceLimit" in BB,
              get: BB => BB.panningDistanceLimit,
              set: (BB, jB) => {
                BB.panningDistanceLimit = jB
              }
            },
            metadata: dB
          }, fj, oj), (0, QB.e)(null, null, XB, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningOriginTarget" in BB,
              get: BB => BB.panningOriginTarget,
              set: (BB, jB) => {
                BB.panningOriginTarget = jB
              }
            },
            metadata: dB
          }, Hj, Dj), (0, QB.e)(null, null, WB, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomOnFactor" in BB,
              get: BB => BB.zoomOnFactor,
              set: (BB, jB) => {
                BB.zoomOnFactor = jB
              }
            },
            metadata: dB
          }, Fj, Yj), (0, QB.e)(null, null, eB, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "targetScreenOffset" in BB,
              get: BB => BB.targetScreenOffset,
              set: (BB, jB) => {
                BB.targetScreenOffset = jB
              }
            },
            metadata: dB
          }, Vj, hj), (0, QB.e)(null, null, lB, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: BB => "allowUpsideDown" in BB,
              get: BB => BB.allowUpsideDown,
              set: (BB, jB) => {
                BB.allowUpsideDown = jB
              }
            },
            metadata: dB
          }, Xj, Zj), (0, QB.e)(null, null, wB, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: BB => "useInputToRestoreState" in BB,
              get: BB => BB.useInputToRestoreState,
              set: (BB, jB) => {
                BB.useInputToRestoreState = jB
              }
            },
            metadata: dB
          }, Aj, Tj), (0, QB.e)(null, null, xB, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "restoreStateInterpolationFactor" in BB,
              get: BB => BB.restoreStateInterpolationFactor,
              set: (BB, jB) => {
                BB.restoreStateInterpolationFactor = jB
              }
            },
            metadata: dB
          }, Pj, Wj), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      WB = !1;
    WB || (WB = !0, uB.c.AddNodeConstructor("ArcRotateCamera", ((BB, jB) => () => new PB(BB, 0, 0, 1, IB.m.Zero(), jB))), (0, hB.d)("BABYLON.ArcRotateCamera", PB))
  },
  40335: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB.e
    });
    var QB = zB(40339);
    (0, QB.f)()
  },
  40339: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      f: () => rB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(37379),
      NB = zB(40344),
      uB = zB(40306),
      UB = zB(37222);
    let aB = (() => {
        var BB;
        let jB, zB, uB = NB.b,
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        return BB = class extends uB {
          constructor(BB, jB, zB, nB) {
            super(BB, zB, nB), this.groundColor = (0, QB.g)(this, UB, new IB.d(0, 0, 0)), this.direction = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, void 0)), (0, QB.g)(this, rB), this.direction = jB || dB.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = dB.m.Normalize(BB.subtract(dB.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zB.x, zB.y, zB.z, 0, jB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), jB), this
          }
          transferToNodeMaterialEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return BB.setFloat3(jB, zB.x, zB.y, zB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = dB.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, jB) {
            BB["HEMILIGHT" + jB] = !0
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(uB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.i)()], zB = [(0, nB.x)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, jB) => {
                BB.groundColor = jB
              }
            },
            metadata: dB
          }, UB, aB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, jB) => {
                BB.direction = jB
              }
            },
            metadata: dB
          }, pB, rB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      pB = !1;

    function rB() {
      pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_3", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.HemisphericLight", aB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
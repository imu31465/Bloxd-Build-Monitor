export const id = 289;
export const ids = [289];
export const modules = {
  42087: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => EB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37802),
      oB = GB(37778),
      jB = GB(37807),
      yB = GB(41220),
      JB = GB(41411),
      MB = GB(41190),
      PB = GB(40911),
      zB = GB(37782);
    class lB {
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
        const OB = this._attachedCamera.JF();
        this._onPrePointerObservableObserver = OB.onPrePointerObservable.add((BB => {
          BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const BB = PB.e.Now;
          let OB = 0;
          null != this._lastFrameTime && (OB = BB - this._lastFrameTime), this._lastFrameTime = BB, this._applyUserInteraction();
          const GB = BB - this._lastInteractionTime - this._idleRotationWaitTime,
            YB = Math.max(Math.min(GB / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * YB, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (OB / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.JF();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(BB) {
        this._lastInteractionTime = BB ?? PB.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < zB.b
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = PB.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    GB(42093);
    class pB {
      constructor() {
        this._easingMode = pB.EASINGMODE_EASEIN
      }
      setEasingMode(BB) {
        const OB = Math.min(Math.max(BB, 0), 2);
        this._easingMode = OB
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(BB) {
        throw new Error("You must implement this method")
      }
      ease(BB) {
        switch (this._easingMode) {
          case pB.EASINGMODE_EASEIN:
            return this.easeInCore(BB);
          case pB.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - BB)
        }
        return BB >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - BB))) + .5 : .5 * this.easeInCore(2 * BB)
      }
    }
    pB.EASINGMODE_EASEIN = 0, pB.EASINGMODE_EASEOUT = 1, pB.EASINGMODE_EASEINOUT = 2;
    var qB = GB(42100);
    class ZB {
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
        const OB = this._attachedCamera;
        OB && (BB ? this._onMeshTargetChangedObserver = OB.onMeshTargetChangedObservable.add((BB => {
          if (BB && (BB.computeWorldMatrix(!0), BB.Gw)) {
            const OB = BB.Gw().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * OB, this.upperRadiusTransitionRange = .05 * OB
          }
        })) : this._onMeshTargetChangedObserver && OB.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (ZB.EasingFunction.setEasingMode(ZB.EasingMode), this._radiusBounceTransition = qB.d.CreateAnimation("radius", qB.d.ANIMATIONTYPE_FLOAT, 60, ZB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const OB = qB.d.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.JF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        OB && this._animatables.push(OB)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    ZB.EasingFunction = new class extends pB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = BB
      }
      easeInCore(BB) {
        const OB = Math.max(0, this.amplitude);
        return Math.pow(BB, 3) - BB * OB * Math.sin(3.141592653589793 * BB)
      }
    }(.3), ZB.EasingMode = pB.EASINGMODE_EASEOUT;
    class NB {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new QB.b, this._mode = NB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const OB = this._attachedCamera.JF();
        NB.EasingFunction.setEasingMode(NB.EasingMode), this._onPrePointerObservableObserver = OB.onPrePointerObservable.add((BB => {
          BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = BB.onMeshTargetChangedObservable.add((BB => {
          BB && BB.Gw && this.zoomOnMesh(BB, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.JF();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const YB = BB.Gw().boundingBox;
        this.zoomOnBoundingInfo(YB.minimumWorld, YB.maximumWorld, OB, GB)
      }
      zoomOnMeshHierarchy(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const YB = BB.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(YB.min, YB.max, OB, GB)
      }
      zoomOnMeshesHierarchy(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const YB = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          DB = new oB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let QB = 0; QB < BB.length; QB++) {
          const OB = BB[QB].getHierarchyBoundingVectors(!0);
          oB.r.CheckExtends(OB.min, YB, DB), oB.r.CheckExtends(OB.max, YB, DB)
        }
        this.zoomOnBoundingInfo(YB, DB, OB, GB)
      }
      zoomOnBoundingInfo(BB, OB) {
        let GB, YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const QB = BB.y,
          jB = QB + (OB.y - QB) * this._positionScale,
          yB = OB.subtract(BB).scale(.5);
        if (!isFinite(jB)) return !1;
        if (YB) GB = new oB.r(0, jB, 0);
        else {
          const OB = BB.add(yB);
          GB = new oB.r(OB.x, jB, OB.z)
        }
        this._vectorTransition || (this._vectorTransition = qB.d.CreateAnimation("target", qB.d.ANIMATIONTYPE_VECTOR3, 60, NB.EasingFunction)), this._betaIsAnimating = !0;
        let JB = qB.d.TransitionTo("target", GB, this._attachedCamera, this._attachedCamera.JF(), 60, this._vectorTransition, this._framingTime);
        JB && this._animatables.push(JB);
        let MB = 0;
        if (this._mode === NB.FitFrustumSidesMode) {
          const GB = this._calculateLowerRadiusFromModelBoundingSphere(BB, OB);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = yB.length() + this._attachedCamera.minZ), MB = GB
        } else this._mode === NB.IgnoreBoundsSizeMode && (MB = this._calculateLowerRadiusFromModelBoundingSphere(BB, OB), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const GB = OB.subtract(BB).length();
          this._attachedCamera.panningSensibility = 5e3 / GB, this._attachedCamera.wheelPrecision = 100 / MB
        }
        return this._radiusTransition || (this._radiusTransition = qB.d.CreateAnimation("radius", qB.d.ANIMATIONTYPE_FLOAT, 60, NB.EasingFunction)), JB = qB.d.TransitionTo("radius", MB, this._attachedCamera, this._attachedCamera.JF(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), DB && DB(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), JB && this._animatables.push(JB), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(BB, OB) {
        const GB = this._attachedCamera;
        if (!GB) return 0;
        let YB = GB._calculateLowerRadiusFromModelBoundingSphere(BB, OB, this._radiusScale);
        return GB.lowerRadiusLimit && this._mode === NB.IgnoreBoundsSizeMode && (YB = YB < GB.lowerRadiusLimit ? GB.lowerRadiusLimit : YB), GB.upperRadiusLimit && (YB = YB > GB.upperRadiusLimit ? GB.upperRadiusLimit : YB), YB
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const BB = PB.e.Now - this._lastInteractionTime,
          OB = .5 * Math.PI - this._defaultElevation,
          GB = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > GB && BB >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = qB.d.CreateAnimation("beta", qB.d.ANIMATIONTYPE_FLOAT, 60, NB.EasingFunction));
          const BB = qB.d.TransitionTo("beta", OB, this._attachedCamera, this._attachedCamera.JF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          BB && this._animatables.push(BB)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = PB.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    NB.EasingFunction = new class extends pB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = BB
      }
      easeInCore(BB) {
        return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, NB.EasingMode = pB.EASINGMODE_EASEINOUT, NB.IgnoreBoundsSizeMode = 0, NB.FitFrustumSidesMode = 1;
    var RB = GB(41217),
      WB = GB(41215),
      AB = GB(41237),
      VB = GB(41097);
    let SB = (() => {
        var BB;
        let OB, GB = [],
          QB = [];
        return BB = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, YB.j)(this, GB, [0, 1, 2]), this._pointerInput = (0, YB.j)(this, QB)
          }
          attachControl(BB) {
            BB = VB.j.BackCompatCameraNoPreventDefault(arguments);
            const OB = this.camera.Lp(),
              GB = OB.getInputElement();
            let YB = 0,
              DB = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = QB => {
              const oB = QB.event,
                jB = "touch" === oB.pointerType;
              if (QB.type !== MB.c.POINTERMOVE && -1 === this.buttons.indexOf(oB.button)) return;
              const yB = oB.target;
              if (this._altKey = oB.altKey, this._ctrlKey = oB.ctrlKey, this._metaKey = oB.metaKey, this._shiftKey = oB.shiftKey, this._buttonsPressed = oB.buttons, OB.isPointerLock) {
                const BB = oB.movementX,
                  OB = oB.movementY;
                this.onTouch(null, BB, OB), this._pointA = null, this._pointB = null
              } else {
                if (QB.type !== MB.c.POINTERDOWN && QB.type !== MB.c.POINTERDOUBLETAP && jB && this._pointA?.pointerId !== oB.pointerId && this._pointB?.pointerId !== oB.pointerId) return;
                if (QB.type !== MB.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !jB)
                  if (QB.type === MB.c.POINTERDOUBLETAP) this.onDoubleTap(oB.pointerType, oB);
                  else if (QB.type !== MB.c.POINTERUP || this._currentMousePointerIdDown !== oB.pointerId && !jB) {
                  if (QB.type === MB.c.POINTERMOVE)
                    if (BB || oB.preventDefault(), this._pointA && null === this._pointB) {
                      const BB = oB.clientX - this._pointA.x,
                        OB = oB.clientY - this._pointA.y;
                      this._pointA.x = oB.clientX, this._pointA.y = oB.clientY, this.onTouch(this._pointA, BB, OB)
                    } else if (this._pointA && this._pointB) {
                    const BB = this._pointA.pointerId === oB.pointerId ? this._pointA : this._pointB;
                    BB.x = oB.clientX, BB.y = oB.clientY;
                    const OB = this._pointA.x - this._pointB.x,
                      GB = this._pointA.y - this._pointB.y,
                      jB = OB * OB + GB * GB,
                      yB = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: oB.pointerId,
                        type: QB.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, YB, jB, DB, yB), DB = yB, YB = jB
                  }
                } else {
                  try {
                    yB?.releasePointerCapture(oB.pointerId)
                  } catch (JB) {}
                  jB || (this._pointB = null), OB._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == oB.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == oB.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== YB || DB) && (this.onMultiTouch(this._pointA, this._pointB, YB, 0, DB, null), YB = 0, DB = null), this._currentMousePointerIdDown = -1, this.onButtonUp(oB), BB || oB.preventDefault()
                } else {
                  try {
                    yB?.setPointerCapture(oB.pointerId)
                  } catch (JB) {}
                  if (null === this._pointA) this._pointA = {
                    x: oB.clientX,
                    y: oB.clientY,
                    pointerId: oB.pointerId,
                    type: oB.pointerType,
                    button: oB.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: oB.clientX,
                      y: oB.clientY,
                      pointerId: oB.pointerId,
                      type: oB.pointerType,
                      button: oB.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || jB || (this._currentMousePointerIdDown = oB.pointerId), this.onButtonDown(oB), BB || (oB.preventDefault(), GB && GB.focus())
                }
              }
            }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, MB.c.POINTERDOWN | MB.c.POINTERUP | MB.c.POINTERMOVE | MB.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, YB = 0, DB = null, this.onLostFocus()
            }, this._contextMenuBind = BB => this.onContextMenu(BB), GB && GB.addEventListener("contextmenu", this._contextMenuBind, !1);
            const QB = this.camera.JF().Lp().getHostWindow();
            QB && VB.j.RegisterTopRootEvents(QB, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const BB = this.camera.JF().Lp().getHostWindow();
              BB && VB.j.UnregisterTopRootEvents(BB, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const BB = this.camera.JF().Lp().getInputElement();
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
          onDoubleTap(BB, OB) {}
          onTouch(BB, OB, GB) {}
          onMultiTouch(BB, OB, GB, YB, DB, QB) {}
          onContextMenu(BB) {
            BB.preventDefault()
          }
          onButtonDown(BB) {}
          onButtonUp(BB) {}
          onLostFocus() {}
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, OB) => {
                BB.buttons = OB
              }
            },
            metadata: oB
          }, GB, QB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      nB = (() => {
        var BB;
        let OB, GB, QB, oB = SB,
          jB = [],
          yB = [],
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        return BB = class extends oB {
          constructor() {
            super(...arguments), this.pinchZoom = (0, YB.j)(this, jB, !0), this.multiTouchPanning = ((0, YB.j)(this, yB), (0, YB.j)(this, JB, !0)), this.multiTouchPanAndZoom = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, !0)), this._isPinching = ((0, YB.j)(this, zB), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(BB, OB) {}
          _computeMultiTouchPanning(BB, OB) {}
          onMultiTouch(BB, OB, GB, YB, DB, QB) {
            0 === GB && null === DB || 0 === YB && null === QB || (this.multiTouchPanAndZoom ? (this._computePinchZoom(GB, YB), this._computeMultiTouchPanning(DB, QB)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(GB, YB), this._isPinching = !0) : this._computeMultiTouchPanning(DB, QB)) : this.multiTouchPanning ? this._computeMultiTouchPanning(DB, QB) : this.pinchZoom && this._computePinchZoom(GB, YB))
          }
          onButtonUp(BB) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(oB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchZoom" in BB,
              get: BB => BB.pinchZoom,
              set: (BB, OB) => {
                BB.pinchZoom = OB
              }
            },
            metadata: lB
          }, jB, yB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanning" in BB,
              get: BB => BB.multiTouchPanning,
              set: (BB, OB) => {
                BB.multiTouchPanning = OB
              }
            },
            metadata: lB
          }, JB, MB), (0, YB.h)(null, null, QB, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanAndZoom" in BB,
              get: BB => BB.multiTouchPanAndZoom,
              set: (BB, OB) => {
                BB.multiTouchPanAndZoom = OB
              }
            },
            metadata: lB
          }, PB, zB), lB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          })
        })(), BB
      })(),
      UB = (() => {
        var BB;
        let OB, GB, QB, oB, jB, yB, JB, MB = nB,
          PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [],
          NB = [],
          RB = [],
          WB = [],
          AB = [],
          VB = [],
          SB = [],
          UB = [],
          fB = [];
        return BB = class extends MB {
          constructor() {
            super(...arguments), this.buttons = (0, YB.j)(this, PB, [0, 1, 2]), this.angularSensibilityX = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, 1e3)), this.angularSensibilityY = ((0, YB.j)(this, pB), (0, YB.j)(this, qB, 1e3)), this.pinchPrecision = ((0, YB.j)(this, ZB), (0, YB.j)(this, NB, 12)), this.pinchDeltaPercentage = ((0, YB.j)(this, RB), (0, YB.j)(this, WB, 0)), this.useNaturalPinchZoom = ((0, YB.j)(this, AB), (0, YB.j)(this, VB, !1)), this.panningSensibility = ((0, YB.j)(this, SB), (0, YB.j)(this, UB, 1e3)), this.pinchInwards = ((0, YB.j)(this, fB), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(BB, OB) {
            if (BB && OB) {
              const GB = OB.x - BB.x,
                YB = OB.y - BB.y,
                DB = this.camera.movement.input.getEntry("pointer", "pan"),
                QB = DB?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== QB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -GB * QB, this.camera.movement.panAccumulatedPixels.y += YB * QB)
            }
          }
          _computePinchZoom(OB, GB) {
            const YB = this.camera.radius || BB.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = YB * Math.sqrt(OB) / Math.sqrt(GB);
            else if (this.pinchDeltaPercentage) {
              const BB = .001 * (GB - OB) * YB * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            } else {
              const BB = (GB - OB) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            }
          }
          onTouch(BB, OB, GB) {
            const YB = this._activeEntry ?? (this.camera.Lp().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (YB)
              if ("pan" === YB.interaction) {
                const BB = YB.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== BB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -OB * BB, this.camera.movement.panAccumulatedPixels.y += GB * BB)
              } else if ("rotate" === YB.interaction) {
              const BB = YB.Hx ?? YB.sensitivity ?? 1 / this.angularSensibilityX,
                DB = YB.vx ?? YB.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -OB * BB, this.camera.movement.rotationAccumulatedPixels.y += -GB * DB
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(BB, OB, GB, YB, DB, QB) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(YB) - Math.sqrt(GB)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(BB, OB, GB, YB, DB, QB)
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
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(MB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, OB) => {
                BB.buttons = OB
              }
            },
            metadata: nB
          }, PB, zB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityX" in BB,
              get: BB => BB.angularSensibilityX,
              set: (BB, OB) => {
                BB.angularSensibilityX = OB
              }
            },
            metadata: nB
          }, lB, pB), (0, YB.h)(null, null, QB, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityY" in BB,
              get: BB => BB.angularSensibilityY,
              set: (BB, OB) => {
                BB.angularSensibilityY = OB
              }
            },
            metadata: nB
          }, qB, ZB), (0, YB.h)(null, null, oB, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchPrecision" in BB,
              get: BB => BB.pinchPrecision,
              set: (BB, OB) => {
                BB.pinchPrecision = OB
              }
            },
            metadata: nB
          }, NB, RB), (0, YB.h)(null, null, jB, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchDeltaPercentage" in BB,
              get: BB => BB.pinchDeltaPercentage,
              set: (BB, OB) => {
                BB.pinchDeltaPercentage = OB
              }
            },
            metadata: nB
          }, WB, AB), (0, YB.h)(null, null, yB, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "useNaturalPinchZoom" in BB,
              get: BB => BB.useNaturalPinchZoom,
              set: (BB, OB) => {
                BB.useNaturalPinchZoom = OB
              }
            },
            metadata: nB
          }, VB, SB), (0, YB.h)(null, null, JB, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningSensibility" in BB,
              get: BB => BB.panningSensibility,
              set: (BB, OB) => {
                BB.panningSensibility = OB
              }
            },
            metadata: nB
          }, UB, fB), nB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          })
        })(), BB.MinimumRadiusForPinch = .001, BB
      })();
    AB.c.ArcRotateCameraPointersInput = UB;
    var fB = GB(41197);
    let kB = (() => {
      var BB;
      let OB, GB, QB, jB, yB, JB, MB, PB, zB, lB, pB, qB = [],
        ZB = [],
        NB = [],
        RB = [],
        WB = [],
        AB = [],
        SB = [],
        nB = [],
        UB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [];
      return BB = class {
        constructor() {
          this.camera = (0, YB.j)(this, qB), this.keysUp = (0, YB.j)(this, ZB, [38]), this.keysDown = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, [40])), this.keysLeft = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, [37])), this.keysRight = ((0, YB.j)(this, SB), (0, YB.j)(this, nB, [39])), this.keysReset = ((0, YB.j)(this, UB), (0, YB.j)(this, kB, [220])), this.keysZoomIn = ((0, YB.j)(this, dB), (0, YB.j)(this, KB, [187, 107])), this.keysZoomOut = ((0, YB.j)(this, uB), (0, YB.j)(this, mB, [189, 109])), this.panningSensibility = ((0, YB.j)(this, IB), (0, YB.j)(this, FB, 50)), this.zoomingSensibility = ((0, YB.j)(this, iB), (0, YB.j)(this, LB, 25)), this.angularSpeed = ((0, YB.j)(this, gB), (0, YB.j)(this, rB, .01)), this._useAltToZoom = ((0, YB.j)(this, XB), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new oB.o, this._panDirection = new oB.o
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
            OB = BB.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && OB ? BB.inputMap.splice(BB.inputMap.indexOf(OB), 1) : this._useAltToZoom && !OB && BB.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(BB) {
          BB = VB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JF(), this._engine = this._scene.Lp(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((OB => {
            const GB = OB.event;
            if (!GB.metaKey)
              if (OB.type === fB.d.KEYDOWN) {
                if (this._ctrlPressed = GB.ctrlKey, this._altPressed = GB.altKey, -1 !== this.keysUp.indexOf(GB.keyCode) || -1 !== this.keysDown.indexOf(GB.keyCode) || -1 !== this.keysLeft.indexOf(GB.keyCode) || -1 !== this.keysRight.indexOf(GB.keyCode) || -1 !== this.keysReset.indexOf(GB.keyCode) || -1 !== this.keysZoomIn.indexOf(GB.keyCode) || -1 !== this.keysZoomOut.indexOf(GB.keyCode)) {
                  -1 === this._keys.indexOf(GB.keyCode) && this._keys.push(GB.keyCode), GB.preventDefault && (BB || GB.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(GB.keyCode) || -1 !== this.keysDown.indexOf(GB.keyCode) || -1 !== this.keysLeft.indexOf(GB.keyCode) || -1 !== this.keysRight.indexOf(GB.keyCode) || -1 !== this.keysReset.indexOf(GB.keyCode) || -1 !== this.keysZoomIn.indexOf(GB.keyCode) || -1 !== this.keysZoomOut.indexOf(GB.keyCode)) {
              const OB = this._keys.indexOf(GB.keyCode);
              OB >= 0 && this._keys.splice(OB, 1), GB.preventDefault && (BB || GB.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              OB = BB.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const GB = this._rotateDirection.set(0, 0),
              YB = this._panDirection.set(0, 0);
            let DB = 0,
              QB = 0;
            for (let oB = 0; oB < this._keys.length; oB++) {
              const jB = this._keys[oB];
              if (this._keyboardConditions.key = jB, -1 === this.keysReset.indexOf(jB)) {
                const BB = OB.resolveInteraction("keyboard", this._keyboardConditions);
                if (BB)
                  if ("pan" === BB.interaction) QB = Math.max(QB, BB.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(jB) ? YB.x -= 1 : -1 !== this.keysRight.indexOf(jB) ? YB.x += 1 : -1 !== this.keysUp.indexOf(jB) ? YB.y += 1 : -1 !== this.keysDown.indexOf(jB) && (YB.y -= 1);
                  else if ("zoom" === BB.interaction) {
                  const GB = BB.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(jB) || -1 !== this.keysZoomIn.indexOf(jB) ? OB.handlers.zoom(GB) : -1 === this.keysDown.indexOf(jB) && -1 === this.keysZoomOut.indexOf(jB) || OB.handlers.zoom(-GB)
                } else "rotate" === BB.interaction && (DB = Math.max(DB, BB.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(jB) ? GB.x -= 1 : -1 !== this.keysRight.indexOf(jB) ? GB.x += 1 : -1 !== this.keysUp.indexOf(jB) ? GB.y -= 1 : -1 !== this.keysDown.indexOf(jB) && (GB.y += 1))
              } - 1 !== this.keysReset.indexOf(jB) && BB.useInputToRestoreState && BB.restoreState()
            }
            0 === GB.x && 0 === GB.y || (GB.normalize().scaleInPlace(DB), OB.handlers.rotate(GB.x, GB.y)), 0 === YB.x && 0 === YB.y || (YB.normalize().scaleInPlace(QB), OB.handlers.pan(YB.x, YB.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], (0, YB.h)(BB, null, pB, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAltToZoom" in BB,
            get: BB => BB.useAltToZoom
          },
          metadata: oB
        }, null, qB), (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, OB) => {
              BB.keysUp = OB
            }
          },
          metadata: oB
        }, ZB, NB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, OB) => {
              BB.keysDown = OB
            }
          },
          metadata: oB
        }, RB, WB), (0, YB.h)(null, null, QB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, OB) => {
              BB.keysLeft = OB
            }
          },
          metadata: oB
        }, AB, SB), (0, YB.h)(null, null, jB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, OB) => {
              BB.keysRight = OB
            }
          },
          metadata: oB
        }, nB, UB), (0, YB.h)(null, null, yB, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysReset" in BB,
            get: BB => BB.keysReset,
            set: (BB, OB) => {
              BB.keysReset = OB
            }
          },
          metadata: oB
        }, kB, dB), (0, YB.h)(null, null, JB, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomIn" in BB,
            get: BB => BB.keysZoomIn,
            set: (BB, OB) => {
              BB.keysZoomIn = OB
            }
          },
          metadata: oB
        }, KB, uB), (0, YB.h)(null, null, MB, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomOut" in BB,
            get: BB => BB.keysZoomOut,
            set: (BB, OB) => {
              BB.keysZoomOut = OB
            }
          },
          metadata: oB
        }, mB, IB), (0, YB.h)(null, null, PB, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "panningSensibility" in BB,
            get: BB => BB.panningSensibility,
            set: (BB, OB) => {
              BB.panningSensibility = OB
            }
          },
          metadata: oB
        }, FB, iB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomingSensibility" in BB,
            get: BB => BB.zoomingSensibility,
            set: (BB, OB) => {
              BB.zoomingSensibility = OB
            }
          },
          metadata: oB
        }, LB, gB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSpeed" in BB,
            get: BB => BB.angularSpeed,
            set: (BB, OB) => {
              BB.angularSpeed = OB
            }
          },
          metadata: oB
        }, rB, XB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })();
    AB.c.ArcRotateCameraKeyboardMoveInput = kB;
    var dB = GB(38432),
      KB = GB(41201);
    let uB = (() => {
      var BB;
      let OB, GB, QB, yB = [],
        JB = [],
        PB = [],
        lB = [],
        pB = [],
        qB = [];
      return BB = class {
        constructor() {
          this.wheelPrecision = (0, YB.j)(this, yB, 3), this.zoomToMouseLocation = ((0, YB.j)(this, JB), (0, YB.j)(this, PB, !1)), this.wheelDeltaPercentage = ((0, YB.j)(this, lB), (0, YB.j)(this, pB, 0)), this.customComputeDeltaFromMouseWheel = ((0, YB.j)(this, qB), null), this._viewOffset = new oB.r(0, 0, 0), this._globalOffset = new oB.r(0, 0, 0), this._inertialPanning = oB.r.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(BB, OB) {
          let GB;
          const YB = .01 * BB * this.wheelDeltaPercentage * OB;
          return GB = BB > 0 ? YB / (1 + this.wheelDeltaPercentage) : YB * (1 + this.wheelDeltaPercentage), GB
        }
        attachControl(BB) {
          BB = VB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = OB => {
            if (OB.type !== MB.c.POINTERWHEEL) return;
            const GB = OB.event;
            let YB;
            const DB = GB.deltaMode === KB.c.DOM_DELTA_LINE ? 40 : 1,
              QB = -GB.deltaY * DB;
            if (this.customComputeDeltaFromMouseWheel) YB = this.customComputeDeltaFromMouseWheel(QB, this, GB);
            else if (this.wheelDeltaPercentage) {
              if (YB = this._computeDeltaFromMouseWheelLegacyEvent(QB, this.camera.radius), YB > 0) {
                const BB = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let OB = this.camera.radius,
                  GB = BB + YB;
                for (let YB = 0; YB < 20 && !(OB <= GB) && !(Math.abs(GB * this.camera.inertia) < .001); YB++) OB -= GB, GB *= this.camera.inertia;
                OB = (0, jB.Clamp)(OB, 0, Number.MAX_VALUE), YB = this._computeDeltaFromMouseWheelLegacyEvent(QB, OB)
              }
            } else {
              const BB = this.camera.movement.input.getEntry("wheel", "zoom");
              YB = QB * (BB?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            YB && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(YB)) : this.camera.movement.zoomAccumulatedPixels += YB), GB.preventDefault && (BB || GB.preventDefault())
          }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._wheel, MB.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.uBB(0)
        }
        detachControl() {
          this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const BB = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(BB.inertialAlphaOffset) + Math.abs(BB.inertialBetaOffset) + Math.abs(BB.inertialRadiusOffset)) {
            this._updateHitPlane(), BB.target.addInPlace(this._inertialPanning), BB.radius -= this._zoomToMouseRadiusOffset;
            const OB = BB.movement.getFrameIndependentDecay(BB.inertia);
            this._inertialPanning.scaleInPlace(OB), this._zoomToMouseRadiusOffset *= OB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < zB.b && (this._zoomToMouseRadiusOffset = 0)
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
            OB = BB.target.subtract(BB.position);
          this._hitPlane = dB.c.FromPositionAndNormal(BB.target, OB)
        }
        _getPosition() {
          const BB = this.camera,
            OB = BB.JF(),
            GB = OB.createPickingRay(OB.pointerX, OB.pointerY, oB.d.Identity(), BB, !1);
          0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = oB.r.TransformNormal(this._viewOffset, BB._cameraTransformMatrix), GB.origin.addInPlace(this._globalOffset));
          let YB = 0;
          return this._hitPlane && (YB = GB.intersectsPlane(this._hitPlane) ?? 0), GB.origin.addInPlace(GB.direction.scaleInPlace(YB))
        }
        _zoomToMouse(BB) {
          const OB = this.camera,
            GB = 1 - OB.inertia,
            YB = OB.movement.getFrameIndependentInputScale(OB.inertia);
          if (OB.lowerRadiusLimit) {
            const DB = OB.lowerRadiusLimit ?? 0;
            OB.radius - (this._zoomToMouseRadiusOffset + BB * YB) / GB < DB && (BB = ((OB.radius - DB) * GB - this._zoomToMouseRadiusOffset) / YB)
          }
          if (OB.upperRadiusLimit) {
            const DB = OB.upperRadiusLimit ?? 0;
            OB.radius - (this._zoomToMouseRadiusOffset + BB * YB) / GB > DB && (BB = ((OB.radius - DB) * GB - this._zoomToMouseRadiusOffset) / YB)
          }
          const DB = BB / GB / OB.radius,
            QB = this._getPosition(),
            jB = oB.k.Xp[6];
          QB.subtractToRef(OB.target, jB), jB.scaleInPlace(DB), jB.scaleInPlace(GB), jB.scaleInPlace(YB), this._inertialPanning.addInPlace(jB), this._zoomToMouseRadiusOffset += BB * YB
        }
        _zeroIfClose(BB) {
          Math.abs(BB.x) < zB.b && (BB.x = 0), Math.abs(BB.y) < zB.b && (BB.y = 0), Math.abs(BB.z) < zB.b && (BB.z = 0)
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecision" in BB,
            get: BB => BB.wheelPrecision,
            set: (BB, OB) => {
              BB.wheelPrecision = OB
            }
          },
          metadata: oB
        }, yB, JB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomToMouseLocation" in BB,
            get: BB => BB.zoomToMouseLocation,
            set: (BB, OB) => {
              BB.zoomToMouseLocation = OB
            }
          },
          metadata: oB
        }, PB, lB), (0, YB.h)(null, null, QB, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelDeltaPercentage" in BB,
            get: BB => BB.wheelDeltaPercentage,
            set: (BB, OB) => {
              BB.wheelDeltaPercentage = OB
            }
          },
          metadata: oB
        }, pB, qB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB
    })();
    AB.c.ArcRotateCameraMouseWheelInput = uB;
    var mB, IB, FB = GB(40890);
    class iB extends AB.e {
      constructor(BB) {
        super(BB)
      }
      addMouseWheel() {
        return this.add(new uB), this
      }
      addPointers() {
        return this.add(new UB), this
      }
      addKeyboard() {
        return this.add(new kB), this
      }
    }(mB = iB.prototype).addVRDeviceOrientation ?? (mB.addVRDeviceOrientation = (0, FB.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (IB = iB.prototype).addGamepad ?? (IB.addGamepad = (0, FB.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var LB = GB(37823),
      gB = GB(41230),
      rB = GB(41235);
    class XB extends gB.e {
      constructor(BB, OB, GB) {
        super(BB, OB, GB), this.input = new rB.c({
          pan: (BB, OB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += OB
          },
          rotate: (BB, OB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += OB
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

    function wB(BB, OB) {
      return isNaN(BB) ? OB : BB
    }
    let EB = (() => {
        var BB;
        let OB, GB, yB, MB, PB, pB, qB, AB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, LB, gB, rB, EB, cB, hB, aB, eB, TB, bB = WB.h,
          CB = [],
          HB = [],
          vB = [],
          sB = [],
          xB = [],
          tB = [],
          BO = [],
          OO = [],
          GO = [],
          YO = [],
          DO = [],
          QO = [],
          oO = [],
          jO = [],
          yO = [],
          JO = [],
          MO = [],
          PO = [],
          zO = [],
          lO = [],
          pO = [],
          qO = [],
          ZO = [],
          NO = [],
          RO = [],
          WO = [],
          AO = [],
          VO = [],
          SO = [],
          nO = [],
          UO = [],
          fO = [],
          kO = [],
          dO = [],
          KO = [],
          uO = [],
          mO = [],
          IO = [],
          FO = [],
          iO = [],
          LO = [],
          gO = [],
          rO = [],
          XO = [],
          wO = [],
          EO = [],
          cO = [];
        return BB = class extends bB {
          get target() {
            return this.dP
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
            this._upToYMatrix || (this._yToUpMatrix = new oB.d, this._upToYMatrix = new oB.d, this._upVector = oB.r.Zero()), BB.normalize(), this._upVector.IU(BB), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            oB.d.RotationAlignToRef(oB.r.UpReadOnly, this._upVector, this._yToUpMatrix), oB.d.RotationAlignToRef(this._upVector, oB.r.UpReadOnly, this._upToYMatrix)
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
            const OB = this.inputs.attached.pointers;
            OB && (OB.angularSensibilityX = BB)
          }
          get angularSensibilityY() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityY : 0
          }
          set angularSensibilityY(BB) {
            const OB = this.inputs.attached.pointers;
            OB && (OB.angularSensibilityY = BB)
          }
          get pinchPrecision() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchPrecision : 0
          }
          set pinchPrecision(BB) {
            const OB = this.inputs.attached.pointers;
            OB && (OB.pinchPrecision = BB)
          }
          get pinchDeltaPercentage() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(BB) {
            const OB = this.inputs.attached.pointers;
            OB && (OB.pinchDeltaPercentage = BB)
          }
          get useNaturalPinchZoom() {
            const BB = this.inputs.attached.pointers;
            return !!BB && BB.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(BB) {
            const OB = this.inputs.attached.pointers;
            OB && (OB.useNaturalPinchZoom = BB)
          }
          get panningSensibility() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.panningSensibility : 0
          }
          set panningSensibility(BB) {
            const OB = this.inputs.attached.pointers;
            OB && (OB.panningSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysUp = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysDown = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const OB = this.inputs.attached.keyboard;
            OB && (OB.keysRight = BB)
          }
          get wheelPrecision() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelPrecision : 0
          }
          set wheelPrecision(BB) {
            const OB = this.inputs.attached.mousewheel;
            OB && (OB.wheelPrecision = BB)
          }
          get zoomToMouseLocation() {
            const BB = this.inputs.attached.mousewheel;
            return !!BB && BB.zoomToMouseLocation
          }
          set zoomToMouseLocation(BB) {
            const OB = this.inputs.attached.mousewheel;
            OB && (OB.zoomToMouseLocation = BB)
          }
          get wheelDeltaPercentage() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(BB) {
            const OB = this.inputs.attached.mousewheel;
            OB && (OB.wheelDeltaPercentage = BB)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(BB) {
            this._useCtrlForPanningInternal = BB;
            const OB = this.movement.input,
              GB = OB.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !BB && GB ? OB.inputMap.splice(OB.inputMap.indexOf(GB), 1) : BB && !GB && OB.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const YB = OB.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !BB && YB ? OB.inputMap.splice(OB.inputMap.indexOf(YB), 1) : BB && !YB && OB.addEntry({
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
            const OB = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            OB && (OB.button = BB)
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
            BB !== this.useBouncingBehavior && (BB ? (this._bouncingBehavior = new ZB, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(BB) {
            BB !== this.useFramingBehavior && (BB ? (this._framingBehavior = new NB, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(BB) {
            BB !== this.useAutoRotationBehavior && (BB ? (this._autoRotationBehavior = new lB, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(BB, OB, GB, DB, jB, yB) {
            var JB;
            let MB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(BB, oB.r.Zero(), yB, MB), JB = this, this.alpha = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, void 0)), this.beta = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, void 0)), this.radius = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, void 0)), this.overrideCloneAlphaBetaRadius = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, void 0)), this.dP = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, void 0)), this._targetHost = ((0, YB.j)(this, DO), (0, YB.j)(this, QO, void 0)), this._upToYMatrix = (0, YB.j)(this, oO), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, YB.j)(this, jO, null), this.upperAlphaLimit = ((0, YB.j)(this, yO), (0, YB.j)(this, JO, null)), this.lowerBetaLimit = ((0, YB.j)(this, MO), (0, YB.j)(this, PO, .01)), this.upperBetaLimit = ((0, YB.j)(this, zO), (0, YB.j)(this, lO, Math.PI - .01)), this.lowerRadiusLimit = ((0, YB.j)(this, pO), (0, YB.j)(this, qO, null)), this.upperRadiusLimit = ((0, YB.j)(this, ZO), (0, YB.j)(this, NO, null)), this.lowerTargetYLimit = ((0, YB.j)(this, RO), (0, YB.j)(this, WO, -1 / 0)), this.inertialPanningX = ((0, YB.j)(this, AO), (0, YB.j)(this, VO, 0)), this.inertialPanningY = ((0, YB.j)(this, SO), (0, YB.j)(this, nO, 0)), this.pinchToPanMaxDistance = ((0, YB.j)(this, UO), (0, YB.j)(this, fO, 20)), this.panningDistanceLimit = ((0, YB.j)(this, kO), (0, YB.j)(this, dO, null)), this.panningOriginTarget = ((0, YB.j)(this, KO), (0, YB.j)(this, uO, oB.r.Zero())), this._panningInertia = ((0, YB.j)(this, mO), .9), this._inertia = .9, this.zoomOnFactor = (0, YB.j)(this, IO, 1), this.targetScreenOffset = ((0, YB.j)(this, FO), (0, YB.j)(this, iO, oB.o.Zero())), this.allowUpsideDown = ((0, YB.j)(this, LO), (0, YB.j)(this, gO, !0)), this.useInputToRestoreState = ((0, YB.j)(this, rO), (0, YB.j)(this, XO, !0)), this.restoreStateInterpolationFactor = ((0, YB.j)(this, wO), (0, YB.j)(this, EO, 0)), this._currentInterpolationFactor = ((0, YB.j)(this, cO), 0), this._viewMatrix = new oB.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new oB.r(1, 1, 0), this._transformedDirection = new oB.r, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new QB.b, this.checkCollisions = !1, this.collisionRadius = new oB.r(.5, .5, .5), this._previousPosition = oB.r.Zero(), this._collisionVelocity = oB.r.Zero(), this._newPosition = oB.r.Zero(), this._computationVector = oB.r.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new oB.r(NaN, NaN, NaN), this._goalTargetScreenOffset = new oB.o(NaN, NaN), this._onCollisionPositionChange = function(BB, OB) {
              let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              GB ? (JB.setPosition(OB), JB.Fz && JB.Fz(GB)) : JB._previousPosition.IU(JB._position);
              const YB = Math.cos(JB.alpha),
                DB = Math.sin(JB.alpha),
                QB = Math.cos(JB.beta);
              let oB = Math.sin(JB.beta);
              0 === oB && (oB = 1e-4);
              const jB = JB._getTargetPosition();
              JB._computationVector.zOB(JB.radius * YB * oB, JB.radius * QB, JB.radius * DB * oB), jB.addToRef(JB._computationVector, JB._newPosition), JB._position.IU(JB._newPosition);
              let yB = JB.upVector;
              JB.allowUpsideDown && JB.beta < 0 && (yB = yB.clone(), yB = yB.ep()), JB._computeViewMatrix(JB._position, jB, yB), JB._viewMatrix.addAtIndex(12, JB.targetScreenOffset.x), JB._viewMatrix.addAtIndex(13, JB.targetScreenOffset.y), JB._collisionTriggered = !1
            }, this.dP = oB.r.Zero(), jB && this.setTarget(jB), this.alpha = OB, this.beta = GB, this.radius = DB, this.getViewMatrix(), this.inputs = new iB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new XB(this.JF(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.dP = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = oB.o.Zero()
          }
          _updateCache(BB) {
            BB || super._updateCache(), this._cache.dP.IU(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.IU(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const BB = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.dP) : this.dP.IU(BB)
            }
            const BB = this._getLockedTargetPosition();
            return BB || this.dP
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > zB.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              QB = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != QB ? this._currentInterpolationFactor = QB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = wB(BB, this._goalAlpha), this._goalBeta = wB(OB, this._goalBeta), this._goalRadius = wB(GB, this._goalRadius), this._goalTarget.set(wB(YB.x, this._goalTarget.x), wB(YB.y, this._goalTarget.y), wB(YB.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(wB(DB.x, this._goalTargetScreenOffset.x), wB(DB.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, jB.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, jB.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, jB.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, jB.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.dP.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(BB, OB) {
            let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const DB = arguments;
            OB = VB.j.BackCompatCameraNoPreventDefault(DB), this._useCtrlForPanning = GB, this._panningMouseButton = YB, "boolean" === typeof DB[0] && (DB.length > 1 && (this._useCtrlForPanning = DB[1]), DB.length > 2 && (this._panningMouseButton = DB[2])), this.inputs.attachElement(OB), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(BB, OB, GB) {
            const YB = this.invertRotation ? -1 : 1;
            let DB = BB * this._calculateHandednessMultiplier();
            this.beta < 0 && (DB *= -1), this.alpha += DB * YB, this.beta += OB * YB, this.radius -= GB
          }
          _applyPanDelta(BB, OB) {
            const GB = oB.k.Xp[0].zOB(BB, OB, OB);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), GB.multiplyInPlace(this.panningAxis), oB.r.TransformNormalToRef(GB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const BB = this.upVector,
                OB = oB.r.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
              oB.r.CrossToRef(BB, OB, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.dP);
                oB.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.dP.IU(this._transformedDirection)
              } else {
                if (this.parent) {
                  const BB = oB.k.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), oB.r.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
                }
                this.dP.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let BB = !1;
            this.movement.computeCurrentFrameDeltas();
            const OB = this.movement.rotationDeltaCurrentFrame,
              GB = this.movement.zoomDeltaCurrentFrame,
              YB = this.movement.panDeltaCurrentFrame;
            if (0 === OB.x && 0 === OB.y && 0 === GB && 0 === YB.x && 0 === YB.y || (BB = !0, 0 === OB.x && 0 === OB.y && 0 === GB || this._applyRotationAndZoomDelta(OB.x, OB.y, GB), 0 === YB.x && 0 === YB.y || this._applyPanDelta(YB.x, YB.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), BB = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const OB = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < OB && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < OB && (this.inertialPanningY = 0), BB = !0
            }
            if (BB) this.stopInterpolation();
            else if (this._isInterpolating) {
              let BB = !1;
              const OB = this._scene.Lp().getDeltaTime() / 1e3,
                GB = 1 - Math.pow(2, -OB / this._currentInterpolationFactor),
                YB = wB(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const OB = oB.k.Xp[0].set(wB(this._goalTarget.x, this.dP.x), wB(this._goalTarget.y, this.dP.y), wB(this._goalTarget.z, this.dP.z));
                oB.r.LerpToRef(this.target, OB, GB, this.dP), 10 * oB.r.Distance(this.target, OB) / YB < zB.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.IU(OB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const OB = oB.f.RotationAlphaBetaGammaToRef(wB(this._goalAlpha, this.alpha), wB(this._goalBeta, this.beta), 0, oB.k.Quaternion[0]),
                  YB = oB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, oB.k.Quaternion[1]),
                  DB = oB.f.SlerpToRef(YB, OB, GB, oB.k.Quaternion[2]);
                DB.normalize();
                const QB = DB.toAlphaBetaGammaToRef(oB.k.Xp[0]);
                if (this.alpha = QB.x, this.beta = QB.y, DB.isApprox(OB, zB.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const BB = OB.toAlphaBetaGammaToRef(oB.k.Xp[0]);
                  this.alpha = BB.x, this.beta = BB.y
                } else BB = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (YB - this.radius) * GB, Math.abs(YB / this.radius - 1) < zB.b ? (this._goalRadius = NaN, this.radius = YB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const OB = oB.k.Vector2[0].set(wB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), wB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                oB.o.LerpToRef(this.targetScreenOffset, OB, GB, this.targetScreenOffset), oB.o.Distance(this.targetScreenOffset, OB) < zB.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.IU(OB)) : BB = !0
              }
              this._isInterpolating = BB
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || oB.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const BB = this.alpha;
            var OB, GB;
            this.alpha = function(BB) {
              let OB = Math.PI / 2;
              return 0 === BB.x && 0 === BB.z || (OB = Math.acos(BB.x / Math.sqrt(Math.pow(BB.x, 2) + Math.pow(BB.z, 2)))), BB.z < 0 && (OB = 2 * Math.PI - OB), OB
            }(this._computationVector), this.beta = (OB = this._computationVector.y, GB = this.radius, Math.acos(OB / GB));
            const YB = Math.round((BB - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * YB * Math.PI, this._checkLimits()
          }
          setPosition(BB) {
            this._position.equals(BB) || (this._position.IU(BB), this.rebuildAnglesAndRadius())
          }
          setTarget(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (YB = this.overrideCloneAlphaBetaRadius ?? YB, BB.computeWorldMatrix) OB && BB.Gw ? this._targetBoundingCenter = BB.Gw().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.dP = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const OB = BB,
                YB = this._getTargetPosition();
              if (YB && !GB && YB.equals(OB)) return;
              this._targetHost = null, this.dP = OB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            YB || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const BB = Math.cos(this.alpha),
              OB = Math.sin(this.alpha),
              GB = Math.cos(this.beta);
            let YB = Math.sin(this.beta);
            0 === YB && (YB = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const DB = this._getTargetPosition();
            if (this._computationVector.zOB(this.radius * BB * YB, this.radius * GB, this.radius * OB * YB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || oB.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), DB.addToRef(this._computationVector, this._newPosition), this.JF().collisionsEnabled && this.checkCollisions) {
              const BB = this.JF().collisionCoordinator;
              this._collider || (this._collider = BB.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, BB.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.IU(this._newPosition);
              let BB = this.upVector;
              this.allowUpsideDown && YB < 0 && (BB = BB.ep()), this._computeViewMatrix(this._position, DB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.IU(DB), this._viewMatrix
          }
          zoomOn(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            BB = BB || this.JF().meshes;
            const GB = JB.c.MinMax(BB);
            let YB = this._calculateLowerRadiusFromModelBoundingSphere(GB.min, GB.max);
            if (YB = Math.max(Math.min(YB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = YB * this.zoomOnFactor, this.mode === RB.e.ORTHOGRAPHIC_CAMERA) {
              const BB = this.JF().Lp().getAspectRatio(this),
                OB = YB * this.zoomOnFactor / 2;
              this.orthoLeft = -OB * BB, this.orthoRight = OB * BB, this.orthoBottom = -OB, this.orthoTop = OB
            }
            this.focusOn({
              min: GB.min,
              max: GB.max,
              distance: YB
            }, OB)
          }
          focusOn(BB) {
            let OB, GB, YB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === BB.min) {
              const YB = BB || this.JF().meshes;
              OB = JB.c.MinMax(YB), GB = oB.r.Distance(OB.min, OB.max)
            } else {
              OB = BB, GB = BB.distance
            }
            this.dP = JB.c.Center(OB), YB || (this.maxZ = 2 * GB)
          }
          createRigCamera(OB, GB) {
            let YB = 0;
            switch (this.cameraRigMode) {
              case RB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case RB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case RB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case RB.e.RIG_MODE_VR:
                YB = this._cameraRigParams.stereoHalfAngle * (0 === GB ? 1 : -1);
                break;
              case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                YB = this._cameraRigParams.stereoHalfAngle * (0 === GB ? -1 : 1)
            }
            const DB = new BB(OB, this.alpha + YB, this.beta, this.radius, this.dP, this.JF());
            return DB._cameraRigParams = {}, DB.isRigCamera = !0, DB.rigParent = this, DB.upVector = this.upVector, DB.mode = this.mode, DB.orthoLeft = this.orthoLeft, DB.orthoRight = this.orthoRight, DB.orthoBottom = this.orthoBottom, DB.orthoTop = this.orthoTop, DB
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              OB = this._rigCameras[1];
            switch (BB.beta = OB.beta = this.beta, this.cameraRigMode) {
              case RB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case RB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case RB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case RB.e.RIG_MODE_VR:
                BB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, OB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                BB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, OB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const YB = oB.r.Distance(BB, OB),
              DB = this.JF().Lp().getAspectRatio(this),
              QB = Math.tan(this.fov / 2),
              jB = QB * DB,
              yB = .5 * YB * GB,
              JB = yB * Math.sqrt(1 + 1 / (jB * jB)),
              MB = yB * Math.sqrt(1 + 1 / (QB * QB));
            return Math.max(JB, MB)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(bB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], yB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.H)("target")], pB = [(0, DB.w)("targetHost")], qB = [(0, DB.L)()], AB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.L)()], UB = [(0, DB.L)()], fB = [(0, DB.L)()], kB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], IB = [(0, DB.L)()], FB = [(0, DB.L)()], LB = [(0, DB.L)()], gB = [(0, DB.H)()], rB = [(0, DB.L)()], EB = [(0, DB.L)()], cB = [(0, DB.L)()], hB = [(0, DB.D)()], aB = [(0, DB.L)()], eB = [(0, DB.L)()], TB = [(0, DB.L)()], (0, YB.h)(BB, null, qB, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialAlphaOffset" in BB,
              get: BB => BB.inertialAlphaOffset
            },
            metadata: QB
          }, null, CB), (0, YB.h)(BB, null, AB, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialBetaOffset" in BB,
              get: BB => BB.inertialBetaOffset
            },
            metadata: QB
          }, null, CB), (0, YB.h)(BB, null, SB, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialRadiusOffset" in BB,
              get: BB => BB.inertialRadiusOffset
            },
            metadata: QB
          }, null, CB), (0, YB.h)(BB, null, rB, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningInertia" in BB,
              get: BB => BB.panningInertia
            },
            metadata: QB
          }, null, CB), (0, YB.h)(BB, null, EB, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomToMouseLocation" in BB,
              get: BB => BB.zoomToMouseLocation
            },
            metadata: QB
          }, null, CB), (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "alpha" in BB,
              get: BB => BB.alpha,
              set: (BB, OB) => {
                BB.alpha = OB
              }
            },
            metadata: QB
          }, HB, vB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: BB => "beta" in BB,
              get: BB => BB.beta,
              set: (BB, OB) => {
                BB.beta = OB
              }
            },
            metadata: QB
          }, sB, xB), (0, YB.h)(null, null, yB, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: BB => "radius" in BB,
              get: BB => BB.radius,
              set: (BB, OB) => {
                BB.radius = OB
              }
            },
            metadata: QB
          }, tB, BO), (0, YB.h)(null, null, MB, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "overrideCloneAlphaBetaRadius" in BB,
              get: BB => BB.overrideCloneAlphaBetaRadius,
              set: (BB, OB) => {
                BB.overrideCloneAlphaBetaRadius = OB
              }
            },
            metadata: QB
          }, OO, GO), (0, YB.h)(null, null, PB, {
            kind: "field",
            name: "dP",
            static: !1,
            private: !1,
            access: {
              has: BB => "dP" in BB,
              get: BB => BB.dP,
              set: (BB, OB) => {
                BB.dP = OB
              }
            },
            metadata: QB
          }, YO, DO), (0, YB.h)(null, null, pB, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: BB => "_targetHost" in BB,
              get: BB => BB._targetHost,
              set: (BB, OB) => {
                BB._targetHost = OB
              }
            },
            metadata: QB
          }, QO, oO), (0, YB.h)(null, null, nB, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerAlphaLimit" in BB,
              get: BB => BB.lowerAlphaLimit,
              set: (BB, OB) => {
                BB.lowerAlphaLimit = OB
              }
            },
            metadata: QB
          }, jO, yO), (0, YB.h)(null, null, UB, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperAlphaLimit" in BB,
              get: BB => BB.upperAlphaLimit,
              set: (BB, OB) => {
                BB.upperAlphaLimit = OB
              }
            },
            metadata: QB
          }, JO, MO), (0, YB.h)(null, null, fB, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerBetaLimit" in BB,
              get: BB => BB.lowerBetaLimit,
              set: (BB, OB) => {
                BB.lowerBetaLimit = OB
              }
            },
            metadata: QB
          }, PO, zO), (0, YB.h)(null, null, kB, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperBetaLimit" in BB,
              get: BB => BB.upperBetaLimit,
              set: (BB, OB) => {
                BB.upperBetaLimit = OB
              }
            },
            metadata: QB
          }, lO, pO), (0, YB.h)(null, null, dB, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerRadiusLimit" in BB,
              get: BB => BB.lowerRadiusLimit,
              set: (BB, OB) => {
                BB.lowerRadiusLimit = OB
              }
            },
            metadata: QB
          }, qO, ZO), (0, YB.h)(null, null, KB, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperRadiusLimit" in BB,
              get: BB => BB.upperRadiusLimit,
              set: (BB, OB) => {
                BB.upperRadiusLimit = OB
              }
            },
            metadata: QB
          }, NO, RO), (0, YB.h)(null, null, uB, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerTargetYLimit" in BB,
              get: BB => BB.lowerTargetYLimit,
              set: (BB, OB) => {
                BB.lowerTargetYLimit = OB
              }
            },
            metadata: QB
          }, WO, AO), (0, YB.h)(null, null, mB, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningX" in BB,
              get: BB => BB.inertialPanningX,
              set: (BB, OB) => {
                BB.inertialPanningX = OB
              }
            },
            metadata: QB
          }, VO, SO), (0, YB.h)(null, null, IB, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningY" in BB,
              get: BB => BB.inertialPanningY,
              set: (BB, OB) => {
                BB.inertialPanningY = OB
              }
            },
            metadata: QB
          }, nO, UO), (0, YB.h)(null, null, FB, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchToPanMaxDistance" in BB,
              get: BB => BB.pinchToPanMaxDistance,
              set: (BB, OB) => {
                BB.pinchToPanMaxDistance = OB
              }
            },
            metadata: QB
          }, fO, kO), (0, YB.h)(null, null, LB, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningDistanceLimit" in BB,
              get: BB => BB.panningDistanceLimit,
              set: (BB, OB) => {
                BB.panningDistanceLimit = OB
              }
            },
            metadata: QB
          }, dO, KO), (0, YB.h)(null, null, gB, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningOriginTarget" in BB,
              get: BB => BB.panningOriginTarget,
              set: (BB, OB) => {
                BB.panningOriginTarget = OB
              }
            },
            metadata: QB
          }, uO, mO), (0, YB.h)(null, null, cB, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomOnFactor" in BB,
              get: BB => BB.zoomOnFactor,
              set: (BB, OB) => {
                BB.zoomOnFactor = OB
              }
            },
            metadata: QB
          }, IO, FO), (0, YB.h)(null, null, hB, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "targetScreenOffset" in BB,
              get: BB => BB.targetScreenOffset,
              set: (BB, OB) => {
                BB.targetScreenOffset = OB
              }
            },
            metadata: QB
          }, iO, LO), (0, YB.h)(null, null, aB, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: BB => "allowUpsideDown" in BB,
              get: BB => BB.allowUpsideDown,
              set: (BB, OB) => {
                BB.allowUpsideDown = OB
              }
            },
            metadata: QB
          }, gO, rO), (0, YB.h)(null, null, eB, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: BB => "useInputToRestoreState" in BB,
              get: BB => BB.useInputToRestoreState,
              set: (BB, OB) => {
                BB.useInputToRestoreState = OB
              }
            },
            metadata: QB
          }, XO, wO), (0, YB.h)(null, null, TB, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "restoreStateInterpolationFactor" in BB,
              get: BB => BB.restoreStateInterpolationFactor,
              set: (BB, OB) => {
                BB.restoreStateInterpolationFactor = OB
              }
            },
            metadata: QB
          }, EO, cO), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      cB = !1;
    cB || (cB = !0, yB.b.AddNodeConstructor("ArcRotateCamera", ((BB, OB) => () => new EB(BB, 0, 0, 1, oB.r.Zero(), OB))), (0, LB.f)("BABYLON.ArcRotateCamera", EB))
  },
  41246: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB.c
    });
    var YB = GB(41248);
    (0, YB.d)()
  },
  41248: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => zB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(37894),
      jB = GB(41250),
      yB = GB(41220),
      JB = GB(37823);
    let MB = (() => {
        var BB;
        let OB, GB, yB = jB.d,
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        return BB = class extends yB {
          constructor(BB, OB, GB, DB) {
            super(BB, GB, DB), this.groundColor = (0, YB.j)(this, JB, new oB.c(0, 0, 0)), this.direction = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, void 0)), (0, YB.j)(this, zB), this.direction = OB || QB.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = QB.r.Normalize(BB.subtract(QB.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GB.x, GB.y, GB.z, 0, OB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), OB), this
          }
          transferToNodeMaterialEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return BB.setFloat3(OB, GB.x, GB.y, GB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return jB.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, OB) {
            BB["HEMILIGHT" + OB] = !0
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, OB) => {
                BB.groundColor = OB
              }
            },
            metadata: QB
          }, JB, MB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, OB) => {
                BB.direction = OB
              }
            },
            metadata: QB
          }, PB, zB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      PB = !1;

    function zB() {
      PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
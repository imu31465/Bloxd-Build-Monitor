export const id = 264;
export const ids = [264];
export const modules = {
  41314: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Iu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37514),
      Xu = ju(37494),
      lu = ju(37519),
      qu = ju(40467),
      fu = ju(40661),
      Cu = ju(40430),
      bu = ju(40170),
      cu = ju(37496);
    class Nu {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(uu) {
        this._zoomStopsAnimation = uu
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(uu) {
        this._idleRotationSpeed = uu
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(uu) {
        this._idleRotationWaitTime = uu
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(uu) {
        this._idleRotationSpinupTime = uu
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
      attach(uu) {
        this._attachedCamera = uu;
        const Eu = this._attachedCamera.hV();
        this._onPrePointerObservableObserver = Eu.onPrePointerObservable.add((uu => {
          uu.type !== Cu.d.POINTERDOWN ? uu.type === Cu.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = uu.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const uu = bu.c.Now;
          let Eu = 0;
          null != this._lastFrameTime && (Eu = uu - this._lastFrameTime), this._lastFrameTime = uu, this._applyUserInteraction();
          const ju = uu - this._lastInteractionTime - this._idleRotationWaitTime,
            su = Math.max(Math.min(ju / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * su, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Eu / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const uu = this._attachedCamera.hV();
        this._onPrePointerObservableObserver && uu.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(uu) {
        this._lastInteractionTime = uu ?? bu.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < cu.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let uu = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (uu = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? uu : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = bu.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ju(41317);
    class Ou {
      constructor() {
        this._easingMode = Ou.EASINGMODE_EASEIN
      }
      setEasingMode(uu) {
        const Eu = Math.min(Math.max(uu, 0), 2);
        this._easingMode = Eu
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(uu) {
        throw new Error("You must implement this method")
      }
      ease(uu) {
        switch (this._easingMode) {
          case Ou.EASINGMODE_EASEIN:
            return this.easeInCore(uu);
          case Ou.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - uu)
        }
        return uu >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - uu))) + .5 : .5 * this.easeInCore(2 * uu)
      }
    }
    Ou.EASINGMODE_EASEIN = 0, Ou.EASINGMODE_EASEOUT = 1, Ou.EASINGMODE_EASEINOUT = 2;
    var Yu = ju(41319);
    class hu {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(uu) {
        if (this._autoTransitionRange === uu) return;
        this._autoTransitionRange = uu;
        const Eu = this._attachedCamera;
        Eu && (uu ? this._onMeshTargetChangedObserver = Eu.onMeshTargetChangedObservable.add((uu => {
          if (uu && (uu.computeWorldMatrix(!0), uu.EW)) {
            const Eu = uu.EW().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Eu, this.upperRadiusTransitionRange = .05 * Eu
          }
        })) : this._onMeshTargetChangedObserver && Eu.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(uu) {
        this._attachedCamera = uu, this._onAfterCheckInputsObserver = uu.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(uu) {
        return !!this._attachedCamera && (this._attachedCamera.radius === uu && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(uu) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (hu.EasingFunction.setEasingMode(hu.EasingMode), this._radiusBounceTransition = Yu.e.CreateAnimation("radius", Yu.e.ANIMATIONTYPE_FLOAT, 60, hu.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Eu = Yu.e.TransitionTo("radius", this._attachedCamera.radius + uu, this._attachedCamera, this._attachedCamera.hV(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Eu && this._animatables.push(Eu)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    hu.EasingFunction = new class extends Ou {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = uu
      }
      easeInCore(uu) {
        const Eu = Math.max(0, this.amplitude);
        return Math.pow(uu, 3) - uu * Eu * Math.sin(3.141592653589793 * uu)
      }
    }(.3), hu.EasingMode = Ou.EASINGMODE_EASEOUT;
    class Du {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Zu.d, this._mode = Du.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(uu) {
        this._mode = uu
      }
      get mode() {
        return this._mode
      }
      set radiusScale(uu) {
        this._radiusScale = uu
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(uu) {
        this._positionScale = uu
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(uu) {
        this._defaultElevation = uu
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(uu) {
        this._elevationReturnTime = uu
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(uu) {
        this._elevationReturnWaitTime = uu
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(uu) {
        this._zoomStopsAnimation = uu
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(uu) {
        this._framingTime = uu
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(uu) {
        this._attachedCamera = uu;
        const Eu = this._attachedCamera.hV();
        Du.EasingFunction.setEasingMode(Du.EasingMode), this._onPrePointerObservableObserver = Eu.onPrePointerObservable.add((uu => {
          uu.type !== Cu.d.POINTERDOWN ? uu.type === Cu.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = uu.onMeshTargetChangedObservable.add((uu => {
          uu && uu.EW && this.zoomOnMesh(uu, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = uu.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const uu = this._attachedCamera.hV();
        this._onPrePointerObservableObserver && uu.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        uu.computeWorldMatrix(!0);
        const su = uu.EW().boundingBox;
        this.zoomOnBoundingInfo(su.minimumWorld, su.maximumWorld, Eu, ju)
      }
      zoomOnMeshHierarchy(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        uu.computeWorldMatrix(!0);
        const su = uu.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(su.min, su.max, Eu, ju)
      }
      zoomOnMeshesHierarchy(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const su = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Uu = new Xu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Zu = 0; Zu < uu.length; Zu++) {
          const Eu = uu[Zu].getHierarchyBoundingVectors(!0);
          Xu.t.CheckExtends(Eu.min, su, Uu), Xu.t.CheckExtends(Eu.max, su, Uu)
        }
        this.zoomOnBoundingInfo(su, Uu, Eu, ju)
      }
      zoomOnBoundingInfo(uu, Eu) {
        let ju, su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Zu = uu.y,
          lu = Zu + (Eu.y - Zu) * this._positionScale,
          qu = Eu.subtract(uu).scale(.5);
        if (!isFinite(lu)) return !1;
        if (su) ju = new Xu.t(0, lu, 0);
        else {
          const Eu = uu.add(qu);
          ju = new Xu.t(Eu.x, lu, Eu.z)
        }
        this._vectorTransition || (this._vectorTransition = Yu.e.CreateAnimation("target", Yu.e.ANIMATIONTYPE_VECTOR3, 60, Du.EasingFunction)), this._betaIsAnimating = !0;
        let fu = Yu.e.TransitionTo("target", ju, this._attachedCamera, this._attachedCamera.hV(), 60, this._vectorTransition, this._framingTime);
        fu && this._animatables.push(fu);
        let Cu = 0;
        if (this._mode === Du.FitFrustumSidesMode) {
          const ju = this._calculateLowerRadiusFromModelBoundingSphere(uu, Eu);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = qu.length() + this._attachedCamera.minZ), Cu = ju
        } else this._mode === Du.IgnoreBoundsSizeMode && (Cu = this._calculateLowerRadiusFromModelBoundingSphere(uu, Eu), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ju = Eu.subtract(uu).length();
          this._attachedCamera.panningSensibility = 5e3 / ju, this._attachedCamera.wheelPrecision = 100 / Cu
        }
        return this._radiusTransition || (this._radiusTransition = Yu.e.CreateAnimation("radius", Yu.e.ANIMATIONTYPE_FLOAT, 60, Du.EasingFunction)), fu = Yu.e.TransitionTo("radius", Cu, this._attachedCamera, this._attachedCamera.hV(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Uu && Uu(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), fu && this._animatables.push(fu), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(uu, Eu) {
        const ju = this._attachedCamera;
        if (!ju) return 0;
        let su = ju._calculateLowerRadiusFromModelBoundingSphere(uu, Eu, this._radiusScale);
        return ju.lowerRadiusLimit && this._mode === Du.IgnoreBoundsSizeMode && (su = su < ju.lowerRadiusLimit ? ju.lowerRadiusLimit : su), ju.upperRadiusLimit && (su = su > ju.upperRadiusLimit ? ju.upperRadiusLimit : su), su
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const uu = bu.c.Now - this._lastInteractionTime,
          Eu = .5 * Math.PI - this._defaultElevation,
          ju = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ju && uu >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Yu.e.CreateAnimation("beta", Yu.e.ANIMATIONTYPE_FLOAT, 60, Du.EasingFunction));
          const uu = Yu.e.TransitionTo("beta", Eu, this._attachedCamera, this._attachedCamera.hV(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          uu && this._animatables.push(uu)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = bu.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Du.EasingFunction = new class extends Ou {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = uu
      }
      easeInCore(uu) {
        return this.exponent <= 0 ? uu : (Math.exp(this.exponent * uu) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Du.EasingMode = Ou.EASINGMODE_EASEINOUT, Du.IgnoreBoundsSizeMode = 0, Du.FitFrustumSidesMode = 1;
    var gu = ju(40462),
      Mu = ju(40459),
      eu = ju(40499),
      Gu = ju(40356);
    let pu = (() => {
        var uu;
        let Eu, ju = [],
          Zu = [];
        return uu = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, su.g)(this, ju, [0, 1, 2]), this._pointerInput = (0, su.g)(this, Zu)
          }
          attachControl(uu) {
            uu = Gu.h.BackCompatCameraNoPreventDefault(arguments);
            const Eu = this.camera.wO(),
              ju = Eu.getInputElement();
            let su = 0,
              Uu = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Zu => {
              const Xu = Zu.event,
                lu = "touch" === Xu.pointerType;
              if (Zu.type !== Cu.d.POINTERMOVE && -1 === this.buttons.indexOf(Xu.button)) return;
              const qu = Xu.target;
              if (this._altKey = Xu.altKey, this._ctrlKey = Xu.ctrlKey, this._metaKey = Xu.metaKey, this._shiftKey = Xu.shiftKey, this._buttonsPressed = Xu.buttons, Eu.isPointerLock) {
                const uu = Xu.movementX,
                  Eu = Xu.movementY;
                this.onTouch(null, uu, Eu), this._pointA = null, this._pointB = null
              } else {
                if (Zu.type !== Cu.d.POINTERDOWN && Zu.type !== Cu.d.POINTERDOUBLETAP && lu && this._pointA?.pointerId !== Xu.pointerId && this._pointB?.pointerId !== Xu.pointerId) return;
                if (Zu.type !== Cu.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !lu)
                  if (Zu.type === Cu.d.POINTERDOUBLETAP) this.onDoubleTap(Xu.pointerType, Xu);
                  else if (Zu.type !== Cu.d.POINTERUP || this._currentMousePointerIdDown !== Xu.pointerId && !lu) {
                  if (Zu.type === Cu.d.POINTERMOVE)
                    if (uu || Xu.preventDefault(), this._pointA && null === this._pointB) {
                      const uu = Xu.clientX - this._pointA.x,
                        Eu = Xu.clientY - this._pointA.y;
                      this._pointA.x = Xu.clientX, this._pointA.y = Xu.clientY, this.onTouch(this._pointA, uu, Eu)
                    } else if (this._pointA && this._pointB) {
                    const uu = this._pointA.pointerId === Xu.pointerId ? this._pointA : this._pointB;
                    uu.x = Xu.clientX, uu.y = Xu.clientY;
                    const Eu = this._pointA.x - this._pointB.x,
                      ju = this._pointA.y - this._pointB.y,
                      lu = Eu * Eu + ju * ju,
                      qu = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Xu.pointerId,
                        type: Zu.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, su, lu, Uu, qu), Uu = qu, su = lu
                  }
                } else {
                  try {
                    qu?.releasePointerCapture(Xu.pointerId)
                  } catch (fu) {}
                  lu || (this._pointB = null), Eu._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Xu.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Xu.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== su || Uu) && (this.onMultiTouch(this._pointA, this._pointB, su, 0, Uu, null), su = 0, Uu = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Xu), uu || Xu.preventDefault()
                } else {
                  try {
                    qu?.setPointerCapture(Xu.pointerId)
                  } catch (fu) {}
                  if (null === this._pointA) this._pointA = {
                    x: Xu.clientX,
                    y: Xu.clientY,
                    pointerId: Xu.pointerId,
                    type: Xu.pointerType,
                    button: Xu.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Xu.clientX,
                      y: Xu.clientY,
                      pointerId: Xu.pointerId,
                      type: Xu.pointerType,
                      button: Xu.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || lu || (this._currentMousePointerIdDown = Xu.pointerId), this.onButtonDown(Xu), uu || (Xu.preventDefault(), ju && ju.focus())
                }
              }
            }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, Cu.d.POINTERDOWN | Cu.d.POINTERUP | Cu.d.POINTERMOVE | Cu.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, su = 0, Uu = null, this.onLostFocus()
            }, this._contextMenuBind = uu => this.onContextMenu(uu), ju && ju.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Zu = this.camera.hV().wO().getHostWindow();
            Zu && Gu.h.RegisterTopRootEvents(Zu, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const uu = this.camera.hV().wO().getHostWindow();
              uu && Gu.h.UnregisterTopRootEvents(uu, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const uu = this.camera.hV().wO().getInputElement();
                uu && uu.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(uu, Eu) {}
          onTouch(uu, Eu, ju) {}
          onMultiTouch(uu, Eu, ju, su, Uu, Zu) {}
          onContextMenu(uu) {
            uu.preventDefault()
          }
          onButtonDown(uu) {}
          onButtonUp(uu) {}
          onLostFocus() {}
        }, (() => {
          const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: uu => "buttons" in uu,
              get: uu => uu.buttons,
              set: (uu, Eu) => {
                uu.buttons = Eu
              }
            },
            metadata: Xu
          }, ju, Zu), Xu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xu
          })
        })(), uu
      })(),
      wu = (() => {
        var uu;
        let Eu, ju, Zu, Xu = pu,
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        return uu = class extends Xu {
          constructor() {
            super(...arguments), this.pinchZoom = (0, su.g)(this, lu, !0), this.multiTouchPanning = ((0, su.g)(this, qu), (0, su.g)(this, fu, !0)), this.multiTouchPanAndZoom = ((0, su.g)(this, Cu), (0, su.g)(this, bu, !0)), this._isPinching = ((0, su.g)(this, cu), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(uu, Eu) {}
          _computeMultiTouchPanning(uu, Eu) {}
          onMultiTouch(uu, Eu, ju, su, Uu, Zu) {
            0 === ju && null === Uu || 0 === su && null === Zu || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ju, su), this._computeMultiTouchPanning(Uu, Zu)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ju, su), this._isPinching = !0) : this._computeMultiTouchPanning(Uu, Zu)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Uu, Zu) : this.pinchZoom && this._computePinchZoom(ju, su))
          }
          onButtonUp(uu) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchZoom" in uu,
              get: uu => uu.pinchZoom,
              set: (uu, Eu) => {
                uu.pinchZoom = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: uu => "multiTouchPanning" in uu,
              get: uu => uu.multiTouchPanning,
              set: (uu, Eu) => {
                uu.multiTouchPanning = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, su.e)(null, null, Zu, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "multiTouchPanAndZoom" in uu,
              get: uu => uu.multiTouchPanAndZoom,
              set: (uu, Eu) => {
                uu.multiTouchPanAndZoom = Eu
              }
            },
            metadata: Nu
          }, bu, cu), Nu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          })
        })(), uu
      })(),
      Ju = (() => {
        var uu;
        let Eu, ju, Zu, Xu, lu, qu, fu, Cu = wu,
          bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [],
          Du = [],
          gu = [],
          Mu = [],
          eu = [],
          Gu = [],
          pu = [],
          Ju = [],
          du = [];
        return uu = class extends Cu {
          constructor() {
            super(...arguments), this.buttons = (0, su.g)(this, bu, [0, 1, 2]), this.angularSensibilityX = ((0, su.g)(this, cu), (0, su.g)(this, Nu, 1e3)), this.angularSensibilityY = ((0, su.g)(this, Ou), (0, su.g)(this, Yu, 1e3)), this.pinchPrecision = ((0, su.g)(this, hu), (0, su.g)(this, Du, 12)), this.pinchDeltaPercentage = ((0, su.g)(this, gu), (0, su.g)(this, Mu, 0)), this.useNaturalPinchZoom = ((0, su.g)(this, eu), (0, su.g)(this, Gu, !1)), this.panningSensibility = ((0, su.g)(this, pu), (0, su.g)(this, Ju, 1e3)), this.pinchInwards = ((0, su.g)(this, du), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(uu, Eu) {
            if (uu && Eu) {
              const ju = Eu.x - uu.x,
                su = Eu.y - uu.y,
                Uu = this.camera.movement.input.getEntry("pointer", "pan"),
                Zu = Uu?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Zu && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ju * Zu, this.camera.movement.panAccumulatedPixels.y += su * Zu)
            }
          }
          _computePinchZoom(Eu, ju) {
            const su = this.camera.radius || uu.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = su * Math.sqrt(Eu) / Math.sqrt(ju);
            else if (this.pinchDeltaPercentage) {
              const uu = .001 * (ju - Eu) * su * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += uu
            } else {
              const uu = (ju - Eu) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += uu
            }
          }
          onTouch(uu, Eu, ju) {
            const su = this._activeEntry ?? (this.camera.wO().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (su)
              if ("pan" === su.interaction) {
                const uu = su.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== uu && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Eu * uu, this.camera.movement.panAccumulatedPixels.y += ju * uu)
              } else if ("rotate" === su.interaction) {
              const uu = su.XT ?? su.sensitivity ?? 1 / this.angularSensibilityX,
                Uu = su.lT ?? su.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Eu * uu, this.camera.movement.rotationAccumulatedPixels.y += -ju * Uu
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(uu, Eu, ju, su, Uu, Zu) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(su) - Math.sqrt(ju)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(uu, Eu, ju, su, Uu, Zu)
          }
          onButtonDown(uu) {
            this._pointerConditions.button = uu.button, this._pointerModifiers.ctrl = uu.ctrlKey, this._pointerModifiers.alt = uu.altKey, this._pointerModifiers.shift = uu.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(uu)
          }
          onButtonUp(uu) {
            this._activeEntry = null, super.onButtonUp(uu)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const wu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: uu => "buttons" in uu,
              get: uu => uu.buttons,
              set: (uu, Eu) => {
                uu.buttons = Eu
              }
            },
            metadata: wu
          }, bu, cu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: uu => "angularSensibilityX" in uu,
              get: uu => uu.angularSensibilityX,
              set: (uu, Eu) => {
                uu.angularSensibilityX = Eu
              }
            },
            metadata: wu
          }, Nu, Ou), (0, su.e)(null, null, Zu, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: uu => "angularSensibilityY" in uu,
              get: uu => uu.angularSensibilityY,
              set: (uu, Eu) => {
                uu.angularSensibilityY = Eu
              }
            },
            metadata: wu
          }, Yu, hu), (0, su.e)(null, null, Xu, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchPrecision" in uu,
              get: uu => uu.pinchPrecision,
              set: (uu, Eu) => {
                uu.pinchPrecision = Eu
              }
            },
            metadata: wu
          }, Du, gu), (0, su.e)(null, null, lu, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchDeltaPercentage" in uu,
              get: uu => uu.pinchDeltaPercentage,
              set: (uu, Eu) => {
                uu.pinchDeltaPercentage = Eu
              }
            },
            metadata: wu
          }, Mu, eu), (0, su.e)(null, null, qu, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "useNaturalPinchZoom" in uu,
              get: uu => uu.useNaturalPinchZoom,
              set: (uu, Eu) => {
                uu.useNaturalPinchZoom = Eu
              }
            },
            metadata: wu
          }, Gu, pu), (0, su.e)(null, null, fu, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningSensibility" in uu,
              get: uu => uu.panningSensibility,
              set: (uu, Eu) => {
                uu.panningSensibility = Eu
              }
            },
            metadata: wu
          }, Ju, du), wu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wu
          })
        })(), uu.MinimumRadiusForPinch = .001, uu
      })();
    eu.d.ArcRotateCameraPointersInput = Ju;
    var du = ju(40434);
    let au = (() => {
      var uu;
      let Eu, ju, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu = [],
        hu = [],
        Du = [],
        gu = [],
        Mu = [],
        eu = [],
        pu = [],
        wu = [],
        Ju = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [];
      return uu = class {
        constructor() {
          this.camera = (0, su.g)(this, Yu), this.keysUp = (0, su.g)(this, hu, [38]), this.keysDown = ((0, su.g)(this, Du), (0, su.g)(this, gu, [40])), this.keysLeft = ((0, su.g)(this, Mu), (0, su.g)(this, eu, [37])), this.keysRight = ((0, su.g)(this, pu), (0, su.g)(this, wu, [39])), this.keysReset = ((0, su.g)(this, Ju), (0, su.g)(this, au, [220])), this.keysZoomIn = ((0, su.g)(this, Pu), (0, su.g)(this, ou, [187, 107])), this.keysZoomOut = ((0, su.g)(this, ku), (0, su.g)(this, mu, [189, 109])), this.panningSensibility = ((0, su.g)(this, vu), (0, su.g)(this, Ku, 50)), this.zoomingSensibility = ((0, su.g)(this, Vu), (0, su.g)(this, ru, 25)), this.angularSpeed = ((0, su.g)(this, Qu), (0, su.g)(this, iu, .01)), this._useAltToZoom = ((0, su.g)(this, Wu), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Xu.p, this._panDirection = new Xu.p
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(uu) {
          this._useAltToZoom = uu, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const uu = this.camera.movement.input,
            Eu = uu.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Eu ? uu.inputMap.splice(uu.inputMap.indexOf(Eu), 1) : this._useAltToZoom && !Eu && uu.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(uu) {
          uu = Gu.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hV(), this._engine = this._scene.wO(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eu => {
            const ju = Eu.event;
            if (!ju.metaKey)
              if (Eu.type === du.b.KEYDOWN) {
                if (this._ctrlPressed = ju.ctrlKey, this._altPressed = ju.altKey, -1 !== this.keysUp.indexOf(ju.keyCode) || -1 !== this.keysDown.indexOf(ju.keyCode) || -1 !== this.keysLeft.indexOf(ju.keyCode) || -1 !== this.keysRight.indexOf(ju.keyCode) || -1 !== this.keysReset.indexOf(ju.keyCode) || -1 !== this.keysZoomIn.indexOf(ju.keyCode) || -1 !== this.keysZoomOut.indexOf(ju.keyCode)) {
                  -1 === this._keys.indexOf(ju.keyCode) && this._keys.push(ju.keyCode), ju.preventDefault && (uu || ju.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ju.keyCode) || -1 !== this.keysDown.indexOf(ju.keyCode) || -1 !== this.keysLeft.indexOf(ju.keyCode) || -1 !== this.keysRight.indexOf(ju.keyCode) || -1 !== this.keysReset.indexOf(ju.keyCode) || -1 !== this.keysZoomIn.indexOf(ju.keyCode) || -1 !== this.keysZoomOut.indexOf(ju.keyCode)) {
              const Eu = this._keys.indexOf(ju.keyCode);
              Eu >= 0 && this._keys.splice(Eu, 1), ju.preventDefault && (uu || ju.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const uu = this.camera,
              Eu = uu.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ju = this._rotateDirection.set(0, 0),
              su = this._panDirection.set(0, 0);
            let Uu = 0,
              Zu = 0;
            for (let Xu = 0; Xu < this._keys.length; Xu++) {
              const lu = this._keys[Xu];
              if (this._keyboardConditions.key = lu, -1 === this.keysReset.indexOf(lu)) {
                const uu = Eu.resolveInteraction("keyboard", this._keyboardConditions);
                if (uu)
                  if ("pan" === uu.interaction) Zu = Math.max(Zu, uu.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(lu) ? su.x -= 1 : -1 !== this.keysRight.indexOf(lu) ? su.x += 1 : -1 !== this.keysUp.indexOf(lu) ? su.y += 1 : -1 !== this.keysDown.indexOf(lu) && (su.y -= 1);
                  else if ("zoom" === uu.interaction) {
                  const ju = uu.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(lu) || -1 !== this.keysZoomIn.indexOf(lu) ? Eu.handlers.zoom(ju) : -1 === this.keysDown.indexOf(lu) && -1 === this.keysZoomOut.indexOf(lu) || Eu.handlers.zoom(-ju)
                } else "rotate" === uu.interaction && (Uu = Math.max(Uu, uu.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(lu) ? ju.x -= 1 : -1 !== this.keysRight.indexOf(lu) ? ju.x += 1 : -1 !== this.keysUp.indexOf(lu) ? ju.y -= 1 : -1 !== this.keysDown.indexOf(lu) && (ju.y += 1))
              } - 1 !== this.keysReset.indexOf(lu) && uu.useInputToRestoreState && uu.restoreState()
            }
            0 === ju.x && 0 === ju.y || (ju.normalize().scaleInPlace(Uu), Eu.handlers.rotate(ju.x, ju.y)), 0 === su.x && 0 === su.y || (su.normalize().scaleInPlace(Zu), Eu.handlers.pan(su.x, su.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], (0, su.e)(uu, null, Ou, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAltToZoom" in uu,
            get: uu => uu.useAltToZoom
          },
          metadata: Xu
        }, null, Yu), (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUp" in uu,
            get: uu => uu.keysUp,
            set: (uu, Eu) => {
              uu.keysUp = Eu
            }
          },
          metadata: Xu
        }, hu, Du), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDown" in uu,
            get: uu => uu.keysDown,
            set: (uu, Eu) => {
              uu.keysDown = Eu
            }
          },
          metadata: Xu
        }, gu, Mu), (0, su.e)(null, null, Zu, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysLeft" in uu,
            get: uu => uu.keysLeft,
            set: (uu, Eu) => {
              uu.keysLeft = Eu
            }
          },
          metadata: Xu
        }, eu, pu), (0, su.e)(null, null, lu, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRight" in uu,
            get: uu => uu.keysRight,
            set: (uu, Eu) => {
              uu.keysRight = Eu
            }
          },
          metadata: Xu
        }, wu, Ju), (0, su.e)(null, null, qu, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysReset" in uu,
            get: uu => uu.keysReset,
            set: (uu, Eu) => {
              uu.keysReset = Eu
            }
          },
          metadata: Xu
        }, au, Pu), (0, su.e)(null, null, fu, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysZoomIn" in uu,
            get: uu => uu.keysZoomIn,
            set: (uu, Eu) => {
              uu.keysZoomIn = Eu
            }
          },
          metadata: Xu
        }, ou, ku), (0, su.e)(null, null, Cu, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysZoomOut" in uu,
            get: uu => uu.keysZoomOut,
            set: (uu, Eu) => {
              uu.keysZoomOut = Eu
            }
          },
          metadata: Xu
        }, mu, vu), (0, su.e)(null, null, bu, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "panningSensibility" in uu,
            get: uu => uu.panningSensibility,
            set: (uu, Eu) => {
              uu.panningSensibility = Eu
            }
          },
          metadata: Xu
        }, Ku, Vu), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "zoomingSensibility" in uu,
            get: uu => uu.zoomingSensibility,
            set: (uu, Eu) => {
              uu.zoomingSensibility = Eu
            }
          },
          metadata: Xu
        }, ru, Qu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: uu => "angularSpeed" in uu,
            get: uu => uu.angularSpeed,
            set: (uu, Eu) => {
              uu.angularSpeed = Eu
            }
          },
          metadata: Xu
        }, iu, Wu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu
    })();
    eu.d.ArcRotateCameraKeyboardMoveInput = au;
    var Pu = ju(38154),
      ou = ju(40442);
    let ku = (() => {
      var uu;
      let Eu, ju, Zu, qu = [],
        fu = [],
        bu = [],
        Nu = [],
        Ou = [],
        Yu = [];
      return uu = class {
        constructor() {
          this.wheelPrecision = (0, su.g)(this, qu, 3), this.zoomToMouseLocation = ((0, su.g)(this, fu), (0, su.g)(this, bu, !1)), this.wheelDeltaPercentage = ((0, su.g)(this, Nu), (0, su.g)(this, Ou, 0)), this.customComputeDeltaFromMouseWheel = ((0, su.g)(this, Yu), null), this._viewOffset = new Xu.t(0, 0, 0), this._globalOffset = new Xu.t(0, 0, 0), this._inertialPanning = Xu.t.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(uu, Eu) {
          let ju;
          const su = .01 * uu * this.wheelDeltaPercentage * Eu;
          return ju = uu > 0 ? su / (1 + this.wheelDeltaPercentage) : su * (1 + this.wheelDeltaPercentage), ju
        }
        attachControl(uu) {
          uu = Gu.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eu => {
            if (Eu.type !== Cu.d.POINTERWHEEL) return;
            const ju = Eu.event;
            let su;
            const Uu = ju.deltaMode === ou.d.DOM_DELTA_LINE ? 40 : 1,
              Zu = -ju.deltaY * Uu;
            if (this.customComputeDeltaFromMouseWheel) su = this.customComputeDeltaFromMouseWheel(Zu, this, ju);
            else if (this.wheelDeltaPercentage) {
              if (su = this._computeDeltaFromMouseWheelLegacyEvent(Zu, this.camera.radius), su > 0) {
                const uu = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Eu = this.camera.radius,
                  ju = uu + su;
                for (let su = 0; su < 20 && !(Eu <= ju) && !(Math.abs(ju * this.camera.inertia) < .001); su++) Eu -= ju, ju *= this.camera.inertia;
                Eu = (0, lu.Clamp)(Eu, 0, Number.MAX_VALUE), su = this._computeDeltaFromMouseWheelLegacyEvent(Zu, Eu)
              }
            } else {
              const uu = this.camera.movement.input.getEntry("wheel", "zoom");
              su = Zu * (uu?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            su && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(su)) : this.camera.movement.zoomAccumulatedPixels += su), ju.preventDefault && (uu || ju.preventDefault())
          }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._wheel, Cu.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.k_(0)
        }
        detachControl() {
          this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const uu = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(uu.inertialAlphaOffset) + Math.abs(uu.inertialBetaOffset) + Math.abs(uu.inertialRadiusOffset)) {
            this._updateHitPlane(), uu.target.addInPlace(this._inertialPanning), uu.radius -= this._zoomToMouseRadiusOffset;
            const Eu = uu.movement.getFrameIndependentDecay(uu.inertia);
            this._inertialPanning.scaleInPlace(Eu), this._zoomToMouseRadiusOffset *= Eu, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < cu.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const uu = this.camera,
            Eu = uu.target.subtract(uu.position);
          this._hitPlane = Pu.d.FromPositionAndNormal(uu.target, Eu)
        }
        _getPosition() {
          const uu = this.camera,
            Eu = uu.hV(),
            ju = Eu.createPickingRay(Eu.pointerX, Eu.pointerY, Xu.e.Identity(), uu, !1);
          0 === uu.targetScreenOffset.x && 0 === uu.targetScreenOffset.y || (this._viewOffset.set(uu.targetScreenOffset.x, uu.targetScreenOffset.y, 0), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), this._globalOffset = Xu.t.TransformNormal(this._viewOffset, uu._cameraTransformMatrix), ju.origin.addInPlace(this._globalOffset));
          let su = 0;
          return this._hitPlane && (su = ju.intersectsPlane(this._hitPlane) ?? 0), ju.origin.addInPlace(ju.direction.scaleInPlace(su))
        }
        _zoomToMouse(uu) {
          const Eu = this.camera,
            ju = 1 - Eu.inertia,
            su = Eu.movement.getFrameIndependentInputScale(Eu.inertia);
          if (Eu.lowerRadiusLimit) {
            const Uu = Eu.lowerRadiusLimit ?? 0;
            Eu.radius - (this._zoomToMouseRadiusOffset + uu * su) / ju < Uu && (uu = ((Eu.radius - Uu) * ju - this._zoomToMouseRadiusOffset) / su)
          }
          if (Eu.upperRadiusLimit) {
            const Uu = Eu.upperRadiusLimit ?? 0;
            Eu.radius - (this._zoomToMouseRadiusOffset + uu * su) / ju > Uu && (uu = ((Eu.radius - Uu) * ju - this._zoomToMouseRadiusOffset) / su)
          }
          const Uu = uu / ju / Eu.radius,
            Zu = this._getPosition(),
            lu = Xu.m.dO[6];
          Zu.subtractToRef(Eu.target, lu), lu.scaleInPlace(Uu), lu.scaleInPlace(ju), lu.scaleInPlace(su), this._inertialPanning.addInPlace(lu), this._zoomToMouseRadiusOffset += uu * su
        }
        _zeroIfClose(uu) {
          Math.abs(uu.x) < cu.c && (uu.x = 0), Math.abs(uu.y) < cu.c && (uu.y = 0), Math.abs(uu.z) < cu.c && (uu.z = 0)
        }
      }, (() => {
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecision" in uu,
            get: uu => uu.wheelPrecision,
            set: (uu, Eu) => {
              uu.wheelPrecision = Eu
            }
          },
          metadata: Xu
        }, qu, fu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: uu => "zoomToMouseLocation" in uu,
            get: uu => uu.zoomToMouseLocation,
            set: (uu, Eu) => {
              uu.zoomToMouseLocation = Eu
            }
          },
          metadata: Xu
        }, bu, Nu), (0, su.e)(null, null, Zu, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelDeltaPercentage" in uu,
            get: uu => uu.wheelDeltaPercentage,
            set: (uu, Eu) => {
              uu.wheelDeltaPercentage = Eu
            }
          },
          metadata: Xu
        }, Ou, Yu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu
    })();
    eu.d.ArcRotateCameraMouseWheelInput = ku;
    var mu, vu, Ku = ju(40153);
    class Vu extends eu.h {
      constructor(uu) {
        super(uu)
      }
      addMouseWheel() {
        return this.add(new ku), this
      }
      addPointers() {
        return this.add(new Ju), this
      }
      addKeyboard() {
        return this.add(new au), this
      }
    }(mu = Vu.prototype).addVRDeviceOrientation ?? (mu.addVRDeviceOrientation = (0, Ku.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (vu = Vu.prototype).addGamepad ?? (vu.addGamepad = (0, Ku.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var ru = ju(37532),
      Qu = ju(40481),
      iu = ju(40490);
    class Wu extends Qu.b {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju), this.input = new iu.e({
          pan: (uu, Eu) => {
            this.panAccumulatedPixels.x += uu, this.panAccumulatedPixels.y += Eu
          },
          rotate: (uu, Eu) => {
            this.rotationAccumulatedPixels.x += uu, this.rotationAccumulatedPixels.y += Eu
          },
          zoom: uu => {
            this.zoomAccumulatedPixels += uu
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

    function Su(uu, Eu) {
      return isNaN(uu) ? Eu : uu
    }
    let Iu = (() => {
        var uu;
        let Eu, ju, qu, Cu, bu, Ou, Yu, eu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu, Ku, ru, Qu, iu, Iu, Fu, Bu, Lu, tu, xu, Tu = Mu.e,
          Hu = [],
          Au = [],
          nu = [],
          yu = [],
          zu = [],
          Ru = [],
          uE = [],
          EE = [],
          jE = [],
          sE = [],
          UE = [],
          ZE = [],
          XE = [],
          lE = [],
          qE = [],
          fE = [],
          CE = [],
          bE = [],
          cE = [],
          NE = [],
          OE = [],
          YE = [],
          hE = [],
          DE = [],
          gE = [],
          ME = [],
          eE = [],
          GE = [],
          pE = [],
          wE = [],
          JE = [],
          dE = [],
          aE = [],
          PE = [],
          oE = [],
          kE = [],
          mE = [],
          vE = [],
          KE = [],
          VE = [],
          rE = [],
          QE = [],
          iE = [],
          WE = [],
          SE = [],
          IE = [],
          FE = [];
        return uu = class extends Tu {
          get target() {
            return this.bR
          }
          set target(uu) {
            this.setTarget(uu)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(uu) {
            uu && this.setTarget(uu)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(uu) {
            this.setPosition(uu)
          }
          set upVector(uu) {
            this._upToYMatrix || (this._yToUpMatrix = new Xu.e, this._upToYMatrix = new Xu.e, this._upVector = Xu.t.Zero()), uu.normalize(), this._upVector.yJ(uu), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Xu.e.RotationAlignToRef(Xu.t.UpReadOnly, this._upVector, this._yToUpMatrix), Xu.e.RotationAlignToRef(this._upVector, Xu.t.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const uu = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(uu) < this._rotationEpsilon ? 0 : uu
          }
          set inertialAlphaOffset(uu) {
            this._inertialAlphaOffset = uu, 0 === uu && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const uu = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(uu) < this._rotationEpsilon ? 0 : uu
          }
          set inertialBetaOffset(uu) {
            this._inertialBetaOffset = uu, 0 === uu && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const uu = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(uu) < this._rotationEpsilon ? 0 : uu
          }
          set inertialRadiusOffset(uu) {
            this._inertialRadiusOffset = uu, 0 === uu && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(uu) {
            this._panningInertia = uu, this.movement && (this.movement.panInertia = uu)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(uu) {
            this._inertia = uu, this.movement && (this.movement.rotationInertia = uu, this.movement.zoomInertia = uu)
          }
          get angularSensibilityX() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.angularSensibilityX : 0
          }
          set angularSensibilityX(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.angularSensibilityX = uu)
          }
          get angularSensibilityY() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.angularSensibilityY : 0
          }
          set angularSensibilityY(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.angularSensibilityY = uu)
          }
          get pinchPrecision() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.pinchPrecision : 0
          }
          set pinchPrecision(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.pinchPrecision = uu)
          }
          get pinchDeltaPercentage() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.pinchDeltaPercentage = uu)
          }
          get useNaturalPinchZoom() {
            const uu = this.inputs.attached.pointers;
            return !!uu && uu.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.useNaturalPinchZoom = uu)
          }
          get panningSensibility() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.panningSensibility : 0
          }
          set panningSensibility(uu) {
            const Eu = this.inputs.attached.pointers;
            Eu && (Eu.panningSensibility = uu)
          }
          get keysUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUp : []
          }
          set keysUp(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysUp = uu)
          }
          get keysDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDown : []
          }
          set keysDown(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysDown = uu)
          }
          get keysLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysLeft : []
          }
          set keysLeft(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysLeft = uu)
          }
          get keysRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRight : []
          }
          set keysRight(uu) {
            const Eu = this.inputs.attached.keyboard;
            Eu && (Eu.keysRight = uu)
          }
          get wheelPrecision() {
            const uu = this.inputs.attached.mousewheel;
            return uu ? uu.wheelPrecision : 0
          }
          set wheelPrecision(uu) {
            const Eu = this.inputs.attached.mousewheel;
            Eu && (Eu.wheelPrecision = uu)
          }
          get zoomToMouseLocation() {
            const uu = this.inputs.attached.mousewheel;
            return !!uu && uu.zoomToMouseLocation
          }
          set zoomToMouseLocation(uu) {
            const Eu = this.inputs.attached.mousewheel;
            Eu && (Eu.zoomToMouseLocation = uu)
          }
          get wheelDeltaPercentage() {
            const uu = this.inputs.attached.mousewheel;
            return uu ? uu.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(uu) {
            const Eu = this.inputs.attached.mousewheel;
            Eu && (Eu.wheelDeltaPercentage = uu)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(uu) {
            this._useCtrlForPanningInternal = uu;
            const Eu = this.movement.input,
              ju = Eu.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !uu && ju ? Eu.inputMap.splice(Eu.inputMap.indexOf(ju), 1) : uu && !ju && Eu.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const su = Eu.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !uu && su ? Eu.inputMap.splice(Eu.inputMap.indexOf(su), 1) : uu && !su && Eu.addEntry({
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
          set _panningMouseButton(uu) {
            this._panningMouseButtonInternal = uu;
            const Eu = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Eu && (Eu.button = uu)
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
          set useBouncingBehavior(uu) {
            uu !== this.useBouncingBehavior && (uu ? (this._bouncingBehavior = new hu, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(uu) {
            uu !== this.useFramingBehavior && (uu ? (this._framingBehavior = new Du, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(uu) {
            uu !== this.useAutoRotationBehavior && (uu ? (this._autoRotationBehavior = new Nu, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(uu, Eu, ju, Uu, lu, qu) {
            var fu;
            let Cu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(uu, Xu.t.Zero(), qu, Cu), fu = this, this.alpha = ((0, su.g)(this, Hu), (0, su.g)(this, Au, void 0)), this.beta = ((0, su.g)(this, nu), (0, su.g)(this, yu, void 0)), this.radius = ((0, su.g)(this, zu), (0, su.g)(this, Ru, void 0)), this.overrideCloneAlphaBetaRadius = ((0, su.g)(this, uE), (0, su.g)(this, EE, void 0)), this.bR = ((0, su.g)(this, jE), (0, su.g)(this, sE, void 0)), this._targetHost = ((0, su.g)(this, UE), (0, su.g)(this, ZE, void 0)), this._upToYMatrix = (0, su.g)(this, XE), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, su.g)(this, lE, null), this.upperAlphaLimit = ((0, su.g)(this, qE), (0, su.g)(this, fE, null)), this.lowerBetaLimit = ((0, su.g)(this, CE), (0, su.g)(this, bE, .01)), this.upperBetaLimit = ((0, su.g)(this, cE), (0, su.g)(this, NE, Math.PI - .01)), this.lowerRadiusLimit = ((0, su.g)(this, OE), (0, su.g)(this, YE, null)), this.upperRadiusLimit = ((0, su.g)(this, hE), (0, su.g)(this, DE, null)), this.lowerTargetYLimit = ((0, su.g)(this, gE), (0, su.g)(this, ME, -1 / 0)), this.inertialPanningX = ((0, su.g)(this, eE), (0, su.g)(this, GE, 0)), this.inertialPanningY = ((0, su.g)(this, pE), (0, su.g)(this, wE, 0)), this.pinchToPanMaxDistance = ((0, su.g)(this, JE), (0, su.g)(this, dE, 20)), this.panningDistanceLimit = ((0, su.g)(this, aE), (0, su.g)(this, PE, null)), this.panningOriginTarget = ((0, su.g)(this, oE), (0, su.g)(this, kE, Xu.t.Zero())), this._panningInertia = ((0, su.g)(this, mE), .9), this._inertia = .9, this.zoomOnFactor = (0, su.g)(this, vE, 1), this.targetScreenOffset = ((0, su.g)(this, KE), (0, su.g)(this, VE, Xu.p.Zero())), this.allowUpsideDown = ((0, su.g)(this, rE), (0, su.g)(this, QE, !0)), this.useInputToRestoreState = ((0, su.g)(this, iE), (0, su.g)(this, WE, !0)), this.restoreStateInterpolationFactor = ((0, su.g)(this, SE), (0, su.g)(this, IE, 0)), this._currentInterpolationFactor = ((0, su.g)(this, FE), 0), this._viewMatrix = new Xu.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Xu.t(1, 1, 0), this._transformedDirection = new Xu.t, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Zu.d, this.checkCollisions = !1, this.collisionRadius = new Xu.t(.5, .5, .5), this._previousPosition = Xu.t.Zero(), this._collisionVelocity = Xu.t.Zero(), this._newPosition = Xu.t.Zero(), this._computationVector = Xu.t.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Xu.t(NaN, NaN, NaN), this._goalTargetScreenOffset = new Xu.p(NaN, NaN), this._onCollisionPositionChange = function(uu, Eu) {
              let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ju ? (fu.setPosition(Eu), fu.fc && fu.fc(ju)) : fu._previousPosition.yJ(fu._position);
              const su = Math.cos(fu.alpha),
                Uu = Math.sin(fu.alpha),
                Zu = Math.cos(fu.beta);
              let Xu = Math.sin(fu.beta);
              0 === Xu && (Xu = 1e-4);
              const lu = fu._getTargetPosition();
              fu._computationVector.T6(fu.radius * su * Xu, fu.radius * Zu, fu.radius * Uu * Xu), lu.addToRef(fu._computationVector, fu._newPosition), fu._position.yJ(fu._newPosition);
              let qu = fu.upVector;
              fu.allowUpsideDown && fu.beta < 0 && (qu = qu.clone(), qu = qu.nZ()), fu._computeViewMatrix(fu._position, lu, qu), fu._viewMatrix.addAtIndex(12, fu.targetScreenOffset.x), fu._viewMatrix.addAtIndex(13, fu.targetScreenOffset.y), fu._collisionTriggered = !1
            }, this.bR = Xu.t.Zero(), lu && this.setTarget(lu), this.alpha = Eu, this.beta = ju, this.radius = Uu, this.getViewMatrix(), this.inputs = new Vu(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Wu(this.hV(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.bR = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Xu.p.Zero()
          }
          _updateCache(uu) {
            uu || super._updateCache(), this._cache.bR.yJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.yJ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const uu = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? uu.addToRef(this._targetBoundingCenter, this.bR) : this.bR.yJ(uu)
            }
            const uu = this._getLockedTargetPosition();
            return uu || this.bR
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > cu.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Zu = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Zu ? this._currentInterpolationFactor = Zu : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Su(uu, this._goalAlpha), this._goalBeta = Su(Eu, this._goalBeta), this._goalRadius = Su(ju, this._goalRadius), this._goalTarget.set(Su(su.x, this._goalTarget.x), Su(su.y, this._goalTarget.y), Su(su.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Su(Uu.x, this._goalTargetScreenOffset.x), Su(Uu.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, lu.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, lu.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, lu.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, lu.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.bR.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(uu, Eu) {
            let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Uu = arguments;
            Eu = Gu.h.BackCompatCameraNoPreventDefault(Uu), this._useCtrlForPanning = ju, this._panningMouseButton = su, "boolean" === typeof Uu[0] && (Uu.length > 1 && (this._useCtrlForPanning = Uu[1]), Uu.length > 2 && (this._panningMouseButton = Uu[2])), this.inputs.attachElement(Eu), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(uu, Eu, ju) {
            const su = this.invertRotation ? -1 : 1;
            let Uu = uu * this._calculateHandednessMultiplier();
            this.beta < 0 && (Uu *= -1), this.alpha += Uu * su, this.beta += Eu * su, this.radius -= ju
          }
          _applyPanDelta(uu, Eu) {
            const ju = Xu.m.dO[0].T6(uu, Eu, Eu);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ju.multiplyInPlace(this.panningAxis), Xu.t.TransformNormalToRef(ju, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const uu = this.upVector,
                Eu = Xu.t.CrossToRef(this._transformedDirection, uu, this._transformedDirection);
              Xu.t.CrossToRef(uu, Eu, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.bR);
                Xu.t.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bR.yJ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const uu = Xu.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(uu), uu.transposeToRef(uu), Xu.t.TransformCoordinatesToRef(this._transformedDirection, uu, this._transformedDirection)
                }
                this.bR.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let uu = !1;
            this.movement.computeCurrentFrameDeltas();
            const Eu = this.movement.rotationDeltaCurrentFrame,
              ju = this.movement.zoomDeltaCurrentFrame,
              su = this.movement.panDeltaCurrentFrame;
            if (0 === Eu.x && 0 === Eu.y && 0 === ju && 0 === su.x && 0 === su.y || (uu = !0, 0 === Eu.x && 0 === Eu.y && 0 === ju || this._applyRotationAndZoomDelta(Eu.x, Eu.y, ju), 0 === su.x && 0 === su.y || this._applyPanDelta(su.x, su.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), uu = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Eu = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Eu && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Eu && (this.inertialPanningY = 0), uu = !0
            }
            if (uu) this.stopInterpolation();
            else if (this._isInterpolating) {
              let uu = !1;
              const Eu = this._scene.wO().getDeltaTime() / 1e3,
                ju = 1 - Math.pow(2, -Eu / this._currentInterpolationFactor),
                su = Su(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Eu = Xu.m.dO[0].set(Su(this._goalTarget.x, this.bR.x), Su(this._goalTarget.y, this.bR.y), Su(this._goalTarget.z, this.bR.z));
                Xu.t.LerpToRef(this.target, Eu, ju, this.bR), 10 * Xu.t.Distance(this.target, Eu) / su < cu.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.yJ(Eu), this.setTarget(this.target, !1, !0, !0)) : uu = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Eu = Xu.i.RotationAlphaBetaGammaToRef(Su(this._goalAlpha, this.alpha), Su(this._goalBeta, this.beta), 0, Xu.m.Quaternion[0]),
                  su = Xu.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Xu.m.Quaternion[1]),
                  Uu = Xu.i.SlerpToRef(su, Eu, ju, Xu.m.Quaternion[2]);
                Uu.normalize();
                const Zu = Uu.toAlphaBetaGammaToRef(Xu.m.dO[0]);
                if (this.alpha = Zu.x, this.beta = Zu.y, Uu.isApprox(Eu, cu.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const uu = Eu.toAlphaBetaGammaToRef(Xu.m.dO[0]);
                  this.alpha = uu.x, this.beta = uu.y
                } else uu = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (su - this.radius) * ju, Math.abs(su / this.radius - 1) < cu.c ? (this._goalRadius = NaN, this.radius = su) : uu = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Eu = Xu.m.Vector2[0].set(Su(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Su(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Xu.p.LerpToRef(this.targetScreenOffset, Eu, ju, this.targetScreenOffset), Xu.p.Distance(this.targetScreenOffset, Eu) < cu.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.yJ(Eu)) : uu = !0
              }
              this._isInterpolating = uu
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xu.t.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const uu = this.alpha;
            var Eu, ju;
            this.alpha = function(uu) {
              let Eu = Math.PI / 2;
              return 0 === uu.x && 0 === uu.z || (Eu = Math.acos(uu.x / Math.sqrt(Math.pow(uu.x, 2) + Math.pow(uu.z, 2)))), uu.z < 0 && (Eu = 2 * Math.PI - Eu), Eu
            }(this._computationVector), this.beta = (Eu = this._computationVector.y, ju = this.radius, Math.acos(Eu / ju));
            const su = Math.round((uu - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * su * Math.PI, this._checkLimits()
          }
          setPosition(uu) {
            this._position.equals(uu) || (this._position.yJ(uu), this.rebuildAnglesAndRadius())
          }
          setTarget(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (su = this.overrideCloneAlphaBetaRadius ?? su, uu.computeWorldMatrix) Eu && uu.EW ? this._targetBoundingCenter = uu.EW().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, uu.computeWorldMatrix(), this._targetHost = uu, this.bR = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Eu = uu,
                su = this._getTargetPosition();
              if (su && !ju && su.equals(Eu)) return;
              this._targetHost = null, this.bR = Eu, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            su || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const uu = Math.cos(this.alpha),
              Eu = Math.sin(this.alpha),
              ju = Math.cos(this.beta);
            let su = Math.sin(this.beta);
            0 === su && (su = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Uu = this._getTargetPosition();
            if (this._computationVector.T6(this.radius * uu * su, this.radius * ju, this.radius * Eu * su), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xu.t.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Uu.addToRef(this._computationVector, this._newPosition), this.hV().collisionsEnabled && this.checkCollisions) {
              const uu = this.hV().collisionCoordinator;
              this._collider || (this._collider = uu.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, uu.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.yJ(this._newPosition);
              let uu = this.upVector;
              this.allowUpsideDown && su < 0 && (uu = uu.nZ()), this._computeViewMatrix(this._position, Uu, uu), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.yJ(Uu), this._viewMatrix
          }
          zoomOn(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            uu = uu || this.hV().meshes;
            const ju = fu.e.MinMax(uu);
            let su = this._calculateLowerRadiusFromModelBoundingSphere(ju.min, ju.max);
            if (su = Math.max(Math.min(su, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = su * this.zoomOnFactor, this.mode === gu.e.ORTHOGRAPHIC_CAMERA) {
              const uu = this.hV().wO().getAspectRatio(this),
                Eu = su * this.zoomOnFactor / 2;
              this.orthoLeft = -Eu * uu, this.orthoRight = Eu * uu, this.orthoBottom = -Eu, this.orthoTop = Eu
            }
            this.focusOn({
              min: ju.min,
              max: ju.max,
              distance: su
            }, Eu)
          }
          focusOn(uu) {
            let Eu, ju, su = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === uu.min) {
              const su = uu || this.hV().meshes;
              Eu = fu.e.MinMax(su), ju = Xu.t.Distance(Eu.min, Eu.max)
            } else {
              Eu = uu, ju = uu.distance
            }
            this.bR = fu.e.Center(Eu), su || (this.maxZ = 2 * ju)
          }
          createRigCamera(Eu, ju) {
            let su = 0;
            switch (this.cameraRigMode) {
              case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case gu.e.RIG_MODE_VR:
                su = this._cameraRigParams.stereoHalfAngle * (0 === ju ? 1 : -1);
                break;
              case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                su = this._cameraRigParams.stereoHalfAngle * (0 === ju ? -1 : 1)
            }
            const Uu = new uu(Eu, this.alpha + su, this.beta, this.radius, this.bR, this.hV());
            return Uu._cameraRigParams = {}, Uu.isRigCamera = !0, Uu.rigParent = this, Uu.upVector = this.upVector, Uu.mode = this.mode, Uu.orthoLeft = this.orthoLeft, Uu.orthoRight = this.orthoRight, Uu.orthoBottom = this.orthoBottom, Uu.orthoTop = this.orthoTop, Uu
          }
          _updateRigCameras() {
            const uu = this._rigCameras[0],
              Eu = this._rigCameras[1];
            switch (uu.beta = Eu.beta = this.beta, this.cameraRigMode) {
              case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case gu.e.RIG_MODE_VR:
                uu.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Eu.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                uu.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Eu.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const su = Xu.t.Distance(uu, Eu),
              Uu = this.hV().wO().getAspectRatio(this),
              Zu = Math.tan(this.fov / 2),
              lu = Zu * Uu,
              qu = .5 * su * ju,
              fu = qu * Math.sqrt(1 + 1 / (lu * lu)),
              Cu = qu * Math.sqrt(1 + 1 / (Zu * Zu));
            return Math.max(fu, Cu)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], qu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.A)("target")], Ou = [(0, Uu.u)("targetHost")], Yu = [(0, Uu.E)()], eu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], mu = [(0, Uu.E)()], vu = [(0, Uu.E)()], Ku = [(0, Uu.E)()], ru = [(0, Uu.E)()], Qu = [(0, Uu.A)()], iu = [(0, Uu.E)()], Iu = [(0, Uu.E)()], Fu = [(0, Uu.E)()], Bu = [(0, Uu.z)()], Lu = [(0, Uu.E)()], tu = [(0, Uu.E)()], xu = [(0, Uu.E)()], (0, su.e)(uu, null, Yu, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialAlphaOffset" in uu,
              get: uu => uu.inertialAlphaOffset
            },
            metadata: Zu
          }, null, Hu), (0, su.e)(uu, null, eu, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialBetaOffset" in uu,
              get: uu => uu.inertialBetaOffset
            },
            metadata: Zu
          }, null, Hu), (0, su.e)(uu, null, pu, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialRadiusOffset" in uu,
              get: uu => uu.inertialRadiusOffset
            },
            metadata: Zu
          }, null, Hu), (0, su.e)(uu, null, iu, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningInertia" in uu,
              get: uu => uu.panningInertia
            },
            metadata: Zu
          }, null, Hu), (0, su.e)(uu, null, Iu, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: uu => "zoomToMouseLocation" in uu,
              get: uu => uu.zoomToMouseLocation
            },
            metadata: Zu
          }, null, Hu), (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "alpha" in uu,
              get: uu => uu.alpha,
              set: (uu, Eu) => {
                uu.alpha = Eu
              }
            },
            metadata: Zu
          }, Au, nu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: uu => "beta" in uu,
              get: uu => uu.beta,
              set: (uu, Eu) => {
                uu.beta = Eu
              }
            },
            metadata: Zu
          }, yu, zu), (0, su.e)(null, null, qu, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: uu => "radius" in uu,
              get: uu => uu.radius,
              set: (uu, Eu) => {
                uu.radius = Eu
              }
            },
            metadata: Zu
          }, Ru, uE), (0, su.e)(null, null, Cu, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: uu => "overrideCloneAlphaBetaRadius" in uu,
              get: uu => uu.overrideCloneAlphaBetaRadius,
              set: (uu, Eu) => {
                uu.overrideCloneAlphaBetaRadius = Eu
              }
            },
            metadata: Zu
          }, EE, jE), (0, su.e)(null, null, bu, {
            kind: "field",
            name: "bR",
            static: !1,
            private: !1,
            access: {
              has: uu => "bR" in uu,
              get: uu => uu.bR,
              set: (uu, Eu) => {
                uu.bR = Eu
              }
            },
            metadata: Zu
          }, sE, UE), (0, su.e)(null, null, Ou, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: uu => "_targetHost" in uu,
              get: uu => uu._targetHost,
              set: (uu, Eu) => {
                uu._targetHost = Eu
              }
            },
            metadata: Zu
          }, ZE, XE), (0, su.e)(null, null, wu, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerAlphaLimit" in uu,
              get: uu => uu.lowerAlphaLimit,
              set: (uu, Eu) => {
                uu.lowerAlphaLimit = Eu
              }
            },
            metadata: Zu
          }, lE, qE), (0, su.e)(null, null, Ju, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperAlphaLimit" in uu,
              get: uu => uu.upperAlphaLimit,
              set: (uu, Eu) => {
                uu.upperAlphaLimit = Eu
              }
            },
            metadata: Zu
          }, fE, CE), (0, su.e)(null, null, du, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerBetaLimit" in uu,
              get: uu => uu.lowerBetaLimit,
              set: (uu, Eu) => {
                uu.lowerBetaLimit = Eu
              }
            },
            metadata: Zu
          }, bE, cE), (0, su.e)(null, null, au, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperBetaLimit" in uu,
              get: uu => uu.upperBetaLimit,
              set: (uu, Eu) => {
                uu.upperBetaLimit = Eu
              }
            },
            metadata: Zu
          }, NE, OE), (0, su.e)(null, null, Pu, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerRadiusLimit" in uu,
              get: uu => uu.lowerRadiusLimit,
              set: (uu, Eu) => {
                uu.lowerRadiusLimit = Eu
              }
            },
            metadata: Zu
          }, YE, hE), (0, su.e)(null, null, ou, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperRadiusLimit" in uu,
              get: uu => uu.upperRadiusLimit,
              set: (uu, Eu) => {
                uu.upperRadiusLimit = Eu
              }
            },
            metadata: Zu
          }, DE, gE), (0, su.e)(null, null, ku, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerTargetYLimit" in uu,
              get: uu => uu.lowerTargetYLimit,
              set: (uu, Eu) => {
                uu.lowerTargetYLimit = Eu
              }
            },
            metadata: Zu
          }, ME, eE), (0, su.e)(null, null, mu, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialPanningX" in uu,
              get: uu => uu.inertialPanningX,
              set: (uu, Eu) => {
                uu.inertialPanningX = Eu
              }
            },
            metadata: Zu
          }, GE, pE), (0, su.e)(null, null, vu, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialPanningY" in uu,
              get: uu => uu.inertialPanningY,
              set: (uu, Eu) => {
                uu.inertialPanningY = Eu
              }
            },
            metadata: Zu
          }, wE, JE), (0, su.e)(null, null, Ku, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchToPanMaxDistance" in uu,
              get: uu => uu.pinchToPanMaxDistance,
              set: (uu, Eu) => {
                uu.pinchToPanMaxDistance = Eu
              }
            },
            metadata: Zu
          }, dE, aE), (0, su.e)(null, null, ru, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningDistanceLimit" in uu,
              get: uu => uu.panningDistanceLimit,
              set: (uu, Eu) => {
                uu.panningDistanceLimit = Eu
              }
            },
            metadata: Zu
          }, PE, oE), (0, su.e)(null, null, Qu, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningOriginTarget" in uu,
              get: uu => uu.panningOriginTarget,
              set: (uu, Eu) => {
                uu.panningOriginTarget = Eu
              }
            },
            metadata: Zu
          }, kE, mE), (0, su.e)(null, null, Fu, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: uu => "zoomOnFactor" in uu,
              get: uu => uu.zoomOnFactor,
              set: (uu, Eu) => {
                uu.zoomOnFactor = Eu
              }
            },
            metadata: Zu
          }, vE, KE), (0, su.e)(null, null, Bu, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "targetScreenOffset" in uu,
              get: uu => uu.targetScreenOffset,
              set: (uu, Eu) => {
                uu.targetScreenOffset = Eu
              }
            },
            metadata: Zu
          }, VE, rE), (0, su.e)(null, null, Lu, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: uu => "allowUpsideDown" in uu,
              get: uu => uu.allowUpsideDown,
              set: (uu, Eu) => {
                uu.allowUpsideDown = Eu
              }
            },
            metadata: Zu
          }, QE, iE), (0, su.e)(null, null, tu, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: uu => "useInputToRestoreState" in uu,
              get: uu => uu.useInputToRestoreState,
              set: (uu, Eu) => {
                uu.useInputToRestoreState = Eu
              }
            },
            metadata: Zu
          }, WE, SE), (0, su.e)(null, null, xu, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: uu => "restoreStateInterpolationFactor" in uu,
              get: uu => uu.restoreStateInterpolationFactor,
              set: (uu, Eu) => {
                uu.restoreStateInterpolationFactor = Eu
              }
            },
            metadata: Zu
          }, IE, FE), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      Fu = !1;
    Fu || (Fu = !0, qu.c.AddNodeConstructor("ArcRotateCamera", ((uu, Eu) => () => new Iu(uu, 0, 0, 1, Xu.t.Zero(), Eu))), (0, ru.f)("BABYLON.ArcRotateCamera", Iu))
  },
  40503: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su.e
    });
    var su = ju(40506);
    (0, su.f)()
  },
  40506: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => cu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(37680),
      lu = ju(40508),
      qu = ju(40467),
      fu = ju(37532);
    let Cu = (() => {
        var uu;
        let Eu, ju, qu = lu.e,
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        return uu = class extends qu {
          constructor(uu, Eu, ju, Uu) {
            super(uu, ju, Uu), this.groundColor = (0, su.g)(this, fu, new Xu.c(0, 0, 0)), this.direction = ((0, su.g)(this, Cu), (0, su.g)(this, bu, void 0)), (0, su.g)(this, cu), this.direction = Eu || Zu.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Zu.t.Normalize(uu.subtract(Zu.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ju.x, ju.y, ju.z, 0, Eu), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eu), this
          }
          transferToNodeMaterialEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return uu.setFloat3(Eu, ju.x, ju.y, ju.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Zu.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lu.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Eu) {
            uu["HEMILIGHT" + Eu] = !0
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(qu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.j)()], ju = [(0, Uu.A)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Eu) => {
                uu.groundColor = Eu
              }
            },
            metadata: Zu
          }, fu, Cu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Eu) => {
                uu.direction = Eu
              }
            },
            metadata: Zu
          }, bu, cu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      bu = !1;

    function cu() {
      bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_3", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.HemisphericLight", Cu))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
export const id = 250;
export const ids = [250];
export const modules = {
  40655: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Fu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36858),
      mu = yu(36830),
      Ju = yu(36865),
      Nu = yu(39780),
      Xu = yu(39984),
      Vu = yu(39745),
      ru = yu(39458),
      Bu = yu(36833);
    class xu {
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
        const Ru = this._attachedCamera.lD();
        this._onPrePointerObservableObserver = Ru.onPrePointerObservable.add((uu => {
          uu.type !== Vu.e.POINTERDOWN ? uu.type === Vu.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = uu.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const uu = ru.b.Now;
          let Ru = 0;
          null != this._lastFrameTime && (Ru = uu - this._lastFrameTime), this._lastFrameTime = uu, this._applyUserInteraction();
          const yu = uu - this._lastInteractionTime - this._idleRotationWaitTime,
            Eu = Math.max(Math.min(yu / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Eu, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Ru / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const uu = this._attachedCamera.lD();
        this._onPrePointerObservableObserver && uu.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(uu) {
        this._lastInteractionTime = uu ?? ru.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Bu.d
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = ru.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    yu(40663);
    class Su {
      constructor() {
        this._easingMode = Su.EASINGMODE_EASEIN
      }
      setEasingMode(uu) {
        const Ru = Math.min(Math.max(uu, 0), 2);
        this._easingMode = Ru
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(uu) {
        throw new Error("You must implement this method")
      }
      ease(uu) {
        switch (this._easingMode) {
          case Su.EASINGMODE_EASEIN:
            return this.easeInCore(uu);
          case Su.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - uu)
        }
        return uu >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - uu))) + .5 : .5 * this.easeInCore(2 * uu)
      }
    }
    Su.EASINGMODE_EASEIN = 0, Su.EASINGMODE_EASEOUT = 1, Su.EASINGMODE_EASEINOUT = 2;
    var pu = yu(40668);
    class Tu {
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
        const Ru = this._attachedCamera;
        Ru && (uu ? this._onMeshTargetChangedObserver = Ru.onMeshTargetChangedObservable.add((uu => {
          if (uu && (uu.computeWorldMatrix(!0), uu.vI)) {
            const Ru = uu.vI().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Ru, this.upperRadiusTransitionRange = .05 * Ru
          }
        })) : this._onMeshTargetChangedObserver && Ru.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (Tu.EasingFunction.setEasingMode(Tu.EasingMode), this._radiusBounceTransition = pu.d.CreateAnimation("radius", pu.d.ANIMATIONTYPE_FLOAT, 60, Tu.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Ru = pu.d.TransitionTo("radius", this._attachedCamera.radius + uu, this._attachedCamera, this._attachedCamera.lD(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Ru && this._animatables.push(Ru)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Tu.EasingFunction = new class extends Su {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = uu
      }
      easeInCore(uu) {
        const Ru = Math.max(0, this.amplitude);
        return Math.pow(uu, 3) - uu * Ru * Math.sin(3.141592653589793 * uu)
      }
    }(.3), Tu.EasingMode = Su.EASINGMODE_EASEOUT;
    class Wu {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Qu.b, this._mode = Wu.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const Ru = this._attachedCamera.lD();
        Wu.EasingFunction.setEasingMode(Wu.EasingMode), this._onPrePointerObservableObserver = Ru.onPrePointerObservable.add((uu => {
          uu.type !== Vu.e.POINTERDOWN ? uu.type === Vu.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = uu.onMeshTargetChangedObservable.add((uu => {
          uu && uu.vI && this.zoomOnMesh(uu, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = uu.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const uu = this._attachedCamera.lD();
        this._onPrePointerObservableObserver && uu.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        uu.computeWorldMatrix(!0);
        const Eu = uu.vI().boundingBox;
        this.zoomOnBoundingInfo(Eu.minimumWorld, Eu.maximumWorld, Ru, yu)
      }
      zoomOnMeshHierarchy(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        uu.computeWorldMatrix(!0);
        const Eu = uu.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Eu.min, Eu.max, Ru, yu)
      }
      zoomOnMeshesHierarchy(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Eu = new mu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Ku = new mu.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Qu = 0; Qu < uu.length; Qu++) {
          const Ru = uu[Qu].getHierarchyBoundingVectors(!0);
          mu.p.CheckExtends(Ru.min, Eu, Ku), mu.p.CheckExtends(Ru.max, Eu, Ku)
        }
        this.zoomOnBoundingInfo(Eu, Ku, Ru, yu)
      }
      zoomOnBoundingInfo(uu, Ru) {
        let yu, Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Qu = uu.y,
          Ju = Qu + (Ru.y - Qu) * this._positionScale,
          Nu = Ru.subtract(uu).scale(.5);
        if (!isFinite(Ju)) return !1;
        if (Eu) yu = new mu.p(0, Ju, 0);
        else {
          const Ru = uu.add(Nu);
          yu = new mu.p(Ru.x, Ju, Ru.z)
        }
        this._vectorTransition || (this._vectorTransition = pu.d.CreateAnimation("target", pu.d.ANIMATIONTYPE_VECTOR3, 60, Wu.EasingFunction)), this._betaIsAnimating = !0;
        let Xu = pu.d.TransitionTo("target", yu, this._attachedCamera, this._attachedCamera.lD(), 60, this._vectorTransition, this._framingTime);
        Xu && this._animatables.push(Xu);
        let Vu = 0;
        if (this._mode === Wu.FitFrustumSidesMode) {
          const yu = this._calculateLowerRadiusFromModelBoundingSphere(uu, Ru);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Nu.length() + this._attachedCamera.minZ), Vu = yu
        } else this._mode === Wu.IgnoreBoundsSizeMode && (Vu = this._calculateLowerRadiusFromModelBoundingSphere(uu, Ru), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const yu = Ru.subtract(uu).length();
          this._attachedCamera.panningSensibility = 5e3 / yu, this._attachedCamera.wheelPrecision = 100 / Vu
        }
        return this._radiusTransition || (this._radiusTransition = pu.d.CreateAnimation("radius", pu.d.ANIMATIONTYPE_FLOAT, 60, Wu.EasingFunction)), Xu = pu.d.TransitionTo("radius", Vu, this._attachedCamera, this._attachedCamera.lD(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Ku && Ku(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Xu && this._animatables.push(Xu), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(uu, Ru) {
        const yu = this._attachedCamera;
        if (!yu) return 0;
        let Eu = yu._calculateLowerRadiusFromModelBoundingSphere(uu, Ru, this._radiusScale);
        return yu.lowerRadiusLimit && this._mode === Wu.IgnoreBoundsSizeMode && (Eu = Eu < yu.lowerRadiusLimit ? yu.lowerRadiusLimit : Eu), yu.upperRadiusLimit && (Eu = Eu > yu.upperRadiusLimit ? yu.upperRadiusLimit : Eu), Eu
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const uu = ru.b.Now - this._lastInteractionTime,
          Ru = .5 * Math.PI - this._defaultElevation,
          yu = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > yu && uu >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = pu.d.CreateAnimation("beta", pu.d.ANIMATIONTYPE_FLOAT, 60, Wu.EasingFunction));
          const uu = pu.d.TransitionTo("beta", Ru, this._attachedCamera, this._attachedCamera.lD(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          uu && this._animatables.push(uu)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = ru.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Wu.EasingFunction = new class extends Su {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = uu
      }
      easeInCore(uu) {
        return this.exponent <= 0 ? uu : (Math.exp(this.exponent * uu) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Wu.EasingMode = Su.EASINGMODE_EASEINOUT, Wu.IgnoreBoundsSizeMode = 0, Wu.FitFrustumSidesMode = 1;
    var ju = yu(39774),
      Hu = yu(39770),
      du = yu(39804),
      bu = yu(39655);
    let Cu = (() => {
        var uu;
        let Ru, yu = [],
          Qu = [];
        return uu = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Eu.l)(this, yu, [0, 1, 2]), this._pointerInput = (0, Eu.l)(this, Qu)
          }
          attachControl(uu) {
            uu = bu.i.BackCompatCameraNoPreventDefault(arguments);
            const Ru = this.camera.eS(),
              yu = Ru.getInputElement();
            let Eu = 0,
              Ku = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Qu => {
              const mu = Qu.event,
                Ju = "touch" === mu.pointerType;
              if (Qu.type !== Vu.e.POINTERMOVE && -1 === this.buttons.indexOf(mu.button)) return;
              const Nu = mu.target;
              if (this._altKey = mu.altKey, this._ctrlKey = mu.ctrlKey, this._metaKey = mu.metaKey, this._shiftKey = mu.shiftKey, this._buttonsPressed = mu.buttons, Ru.isPointerLock) {
                const uu = mu.movementX,
                  Ru = mu.movementY;
                this.onTouch(null, uu, Ru), this._pointA = null, this._pointB = null
              } else {
                if (Qu.type !== Vu.e.POINTERDOWN && Qu.type !== Vu.e.POINTERDOUBLETAP && Ju && this._pointA?.pointerId !== mu.pointerId && this._pointB?.pointerId !== mu.pointerId) return;
                if (Qu.type !== Vu.e.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Ju)
                  if (Qu.type === Vu.e.POINTERDOUBLETAP) this.onDoubleTap(mu.pointerType, mu);
                  else if (Qu.type !== Vu.e.POINTERUP || this._currentMousePointerIdDown !== mu.pointerId && !Ju) {
                  if (Qu.type === Vu.e.POINTERMOVE)
                    if (uu || mu.preventDefault(), this._pointA && null === this._pointB) {
                      const uu = mu.clientX - this._pointA.x,
                        Ru = mu.clientY - this._pointA.y;
                      this._pointA.x = mu.clientX, this._pointA.y = mu.clientY, this.onTouch(this._pointA, uu, Ru)
                    } else if (this._pointA && this._pointB) {
                    const uu = this._pointA.pointerId === mu.pointerId ? this._pointA : this._pointB;
                    uu.x = mu.clientX, uu.y = mu.clientY;
                    const Ru = this._pointA.x - this._pointB.x,
                      yu = this._pointA.y - this._pointB.y,
                      Ju = Ru * Ru + yu * yu,
                      Nu = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: mu.pointerId,
                        type: Qu.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Eu, Ju, Ku, Nu), Ku = Nu, Eu = Ju
                  }
                } else {
                  try {
                    Nu?.releasePointerCapture(mu.pointerId)
                  } catch (Xu) {}
                  Ju || (this._pointB = null), Ru._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == mu.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == mu.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Eu || Ku) && (this.onMultiTouch(this._pointA, this._pointB, Eu, 0, Ku, null), Eu = 0, Ku = null), this._currentMousePointerIdDown = -1, this.onButtonUp(mu), uu || mu.preventDefault()
                } else {
                  try {
                    Nu?.setPointerCapture(mu.pointerId)
                  } catch (Xu) {}
                  if (null === this._pointA) this._pointA = {
                    x: mu.clientX,
                    y: mu.clientY,
                    pointerId: mu.pointerId,
                    type: mu.pointerType,
                    button: mu.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: mu.clientX,
                      y: mu.clientY,
                      pointerId: mu.pointerId,
                      type: mu.pointerType,
                      button: mu.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Ju || (this._currentMousePointerIdDown = mu.pointerId), this.onButtonDown(mu), uu || (mu.preventDefault(), yu && yu.focus())
                }
              }
            }, this._observer = this.camera.lD()._inputManager._addCameraPointerObserver(this._pointerInput, Vu.e.POINTERDOWN | Vu.e.POINTERUP | Vu.e.POINTERMOVE | Vu.e.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Eu = 0, Ku = null, this.onLostFocus()
            }, this._contextMenuBind = uu => this.onContextMenu(uu), yu && yu.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Qu = this.camera.lD().eS().getHostWindow();
            Qu && bu.i.RegisterTopRootEvents(Qu, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const uu = this.camera.lD().eS().getHostWindow();
              uu && bu.i.UnregisterTopRootEvents(uu, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.lD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const uu = this.camera.lD().eS().getInputElement();
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
          onDoubleTap(uu, Ru) {}
          onTouch(uu, Ru, yu) {}
          onMultiTouch(uu, Ru, yu, Eu, Ku, Qu) {}
          onContextMenu(uu) {
            uu.preventDefault()
          }
          onButtonDown(uu) {}
          onButtonUp(uu) {}
          onLostFocus() {}
        }, (() => {
          const mu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ru = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: uu => "buttons" in uu,
              get: uu => uu.buttons,
              set: (uu, Ru) => {
                uu.buttons = Ru
              }
            },
            metadata: mu
          }, yu, Qu), mu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mu
          })
        })(), uu
      })(),
      ku = (() => {
        var uu;
        let Ru, yu, Qu, mu = Cu,
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        return uu = class extends mu {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Eu.l)(this, Ju, !0), this.multiTouchPanning = ((0, Eu.l)(this, Nu), (0, Eu.l)(this, Xu, !0)), this.multiTouchPanAndZoom = ((0, Eu.l)(this, Vu), (0, Eu.l)(this, ru, !0)), this._isPinching = ((0, Eu.l)(this, Bu), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(uu, Ru) {}
          _computeMultiTouchPanning(uu, Ru) {}
          onMultiTouch(uu, Ru, yu, Eu, Ku, Qu) {
            0 === yu && null === Ku || 0 === Eu && null === Qu || (this.multiTouchPanAndZoom ? (this._computePinchZoom(yu, Eu), this._computeMultiTouchPanning(Ku, Qu)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(yu, Eu), this._isPinching = !0) : this._computeMultiTouchPanning(Ku, Qu)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Ku, Qu) : this.pinchZoom && this._computePinchZoom(yu, Eu))
          }
          onButtonUp(uu) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(mu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchZoom" in uu,
              get: uu => uu.pinchZoom,
              set: (uu, Ru) => {
                uu.pinchZoom = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: uu => "multiTouchPanning" in uu,
              get: uu => uu.multiTouchPanning,
              set: (uu, Ru) => {
                uu.multiTouchPanning = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Eu.h)(null, null, Qu, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "multiTouchPanAndZoom" in uu,
              get: uu => uu.multiTouchPanAndZoom,
              set: (uu, Ru) => {
                uu.multiTouchPanAndZoom = Ru
              }
            },
            metadata: xu
          }, ru, Bu), xu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          })
        })(), uu
      })(),
      eu = (() => {
        var uu;
        let Ru, yu, Qu, mu, Ju, Nu, Xu, Vu = ku,
          ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [],
          Wu = [],
          ju = [],
          Hu = [],
          du = [],
          bu = [],
          Cu = [],
          eu = [],
          Au = [];
        return uu = class extends Vu {
          constructor() {
            super(...arguments), this.buttons = (0, Eu.l)(this, ru, [0, 1, 2]), this.angularSensibilityX = ((0, Eu.l)(this, Bu), (0, Eu.l)(this, xu, 1e3)), this.angularSensibilityY = ((0, Eu.l)(this, Su), (0, Eu.l)(this, pu, 1e3)), this.pinchPrecision = ((0, Eu.l)(this, Tu), (0, Eu.l)(this, Wu, 12)), this.pinchDeltaPercentage = ((0, Eu.l)(this, ju), (0, Eu.l)(this, Hu, 0)), this.useNaturalPinchZoom = ((0, Eu.l)(this, du), (0, Eu.l)(this, bu, !1)), this.panningSensibility = ((0, Eu.l)(this, Cu), (0, Eu.l)(this, eu, 1e3)), this.pinchInwards = ((0, Eu.l)(this, Au), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(uu, Ru) {
            if (uu && Ru) {
              const yu = Ru.x - uu.x,
                Eu = Ru.y - uu.y,
                Ku = this.camera.movement.input.getEntry("pointer", "pan"),
                Qu = Ku?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Qu && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -yu * Qu, this.camera.movement.panAccumulatedPixels.y += Eu * Qu)
            }
          }
          _computePinchZoom(Ru, yu) {
            const Eu = this.camera.radius || uu.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Eu * Math.sqrt(Ru) / Math.sqrt(yu);
            else if (this.pinchDeltaPercentage) {
              const uu = .001 * (yu - Ru) * Eu * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += uu
            } else {
              const uu = (yu - Ru) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += uu
            }
          }
          onTouch(uu, Ru, yu) {
            const Eu = this._activeEntry ?? (this.camera.eS().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Eu)
              if ("pan" === Eu.interaction) {
                const uu = Eu.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== uu && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Ru * uu, this.camera.movement.panAccumulatedPixels.y += yu * uu)
              } else if ("rotate" === Eu.interaction) {
              const uu = Eu.bZ ?? Eu.sensitivity ?? 1 / this.angularSensibilityX,
                Ku = Eu.eZ ?? Eu.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Ru * uu, this.camera.movement.rotationAccumulatedPixels.y += -yu * Ku
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(uu, Ru, yu, Eu, Ku, Qu) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Eu) - Math.sqrt(yu)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(uu, Ru, yu, Eu, Ku, Qu)
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
          const ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], mu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: uu => "buttons" in uu,
              get: uu => uu.buttons,
              set: (uu, Ru) => {
                uu.buttons = Ru
              }
            },
            metadata: ku
          }, ru, Bu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: uu => "angularSensibilityX" in uu,
              get: uu => uu.angularSensibilityX,
              set: (uu, Ru) => {
                uu.angularSensibilityX = Ru
              }
            },
            metadata: ku
          }, xu, Su), (0, Eu.h)(null, null, Qu, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: uu => "angularSensibilityY" in uu,
              get: uu => uu.angularSensibilityY,
              set: (uu, Ru) => {
                uu.angularSensibilityY = Ru
              }
            },
            metadata: ku
          }, pu, Tu), (0, Eu.h)(null, null, mu, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchPrecision" in uu,
              get: uu => uu.pinchPrecision,
              set: (uu, Ru) => {
                uu.pinchPrecision = Ru
              }
            },
            metadata: ku
          }, Wu, ju), (0, Eu.h)(null, null, Ju, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchDeltaPercentage" in uu,
              get: uu => uu.pinchDeltaPercentage,
              set: (uu, Ru) => {
                uu.pinchDeltaPercentage = Ru
              }
            },
            metadata: ku
          }, Hu, du), (0, Eu.h)(null, null, Nu, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: uu => "useNaturalPinchZoom" in uu,
              get: uu => uu.useNaturalPinchZoom,
              set: (uu, Ru) => {
                uu.useNaturalPinchZoom = Ru
              }
            },
            metadata: ku
          }, bu, Cu), (0, Eu.h)(null, null, Xu, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningSensibility" in uu,
              get: uu => uu.panningSensibility,
              set: (uu, Ru) => {
                uu.panningSensibility = Ru
              }
            },
            metadata: ku
          }, eu, Au), ku && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ku
          })
        })(), uu.MinimumRadiusForPinch = .001, uu
      })();
    du.d.ArcRotateCameraPointersInput = eu;
    var Au = yu(39747);
    let Du = (() => {
      var uu;
      let Ru, yu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu = [],
        Tu = [],
        Wu = [],
        ju = [],
        Hu = [],
        du = [],
        Cu = [],
        ku = [],
        eu = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [];
      return uu = class {
        constructor() {
          this.camera = (0, Eu.l)(this, pu), this.keysUp = (0, Eu.l)(this, Tu, [38]), this.keysDown = ((0, Eu.l)(this, Wu), (0, Eu.l)(this, ju, [40])), this.keysLeft = ((0, Eu.l)(this, Hu), (0, Eu.l)(this, du, [37])), this.keysRight = ((0, Eu.l)(this, Cu), (0, Eu.l)(this, ku, [39])), this.keysReset = ((0, Eu.l)(this, eu), (0, Eu.l)(this, Du, [220])), this.keysZoomIn = ((0, Eu.l)(this, Mu), (0, Eu.l)(this, Iu, [187, 107])), this.keysZoomOut = ((0, Eu.l)(this, Gu), (0, Eu.l)(this, Uu, [189, 109])), this.panningSensibility = ((0, Eu.l)(this, nu), (0, Eu.l)(this, su, 50)), this.zoomingSensibility = ((0, Eu.l)(this, tu), (0, Eu.l)(this, lu, 25)), this.angularSpeed = ((0, Eu.l)(this, gu), (0, Eu.l)(this, cu, .01)), this._useAltToZoom = ((0, Eu.l)(this, Lu), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new mu.n, this._panDirection = new mu.n
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
            Ru = uu.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Ru ? uu.inputMap.splice(uu.inputMap.indexOf(Ru), 1) : this._useAltToZoom && !Ru && uu.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(uu) {
          uu = bu.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.lD(), this._engine = this._scene.eS(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Ru => {
            const yu = Ru.event;
            if (!yu.metaKey)
              if (Ru.type === Au.e.KEYDOWN) {
                if (this._ctrlPressed = yu.ctrlKey, this._altPressed = yu.altKey, -1 !== this.keysUp.indexOf(yu.keyCode) || -1 !== this.keysDown.indexOf(yu.keyCode) || -1 !== this.keysLeft.indexOf(yu.keyCode) || -1 !== this.keysRight.indexOf(yu.keyCode) || -1 !== this.keysReset.indexOf(yu.keyCode) || -1 !== this.keysZoomIn.indexOf(yu.keyCode) || -1 !== this.keysZoomOut.indexOf(yu.keyCode)) {
                  -1 === this._keys.indexOf(yu.keyCode) && this._keys.push(yu.keyCode), yu.preventDefault && (uu || yu.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(yu.keyCode) || -1 !== this.keysDown.indexOf(yu.keyCode) || -1 !== this.keysLeft.indexOf(yu.keyCode) || -1 !== this.keysRight.indexOf(yu.keyCode) || -1 !== this.keysReset.indexOf(yu.keyCode) || -1 !== this.keysZoomIn.indexOf(yu.keyCode) || -1 !== this.keysZoomOut.indexOf(yu.keyCode)) {
              const Ru = this._keys.indexOf(yu.keyCode);
              Ru >= 0 && this._keys.splice(Ru, 1), yu.preventDefault && (uu || yu.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const uu = this.camera,
              Ru = uu.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const yu = this._rotateDirection.set(0, 0),
              Eu = this._panDirection.set(0, 0);
            let Ku = 0,
              Qu = 0;
            for (let mu = 0; mu < this._keys.length; mu++) {
              const Ju = this._keys[mu];
              if (this._keyboardConditions.key = Ju, -1 === this.keysReset.indexOf(Ju)) {
                const uu = Ru.resolveInteraction("keyboard", this._keyboardConditions);
                if (uu)
                  if ("pan" === uu.interaction) Qu = Math.max(Qu, uu.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Ju) ? Eu.x -= 1 : -1 !== this.keysRight.indexOf(Ju) ? Eu.x += 1 : -1 !== this.keysUp.indexOf(Ju) ? Eu.y += 1 : -1 !== this.keysDown.indexOf(Ju) && (Eu.y -= 1);
                  else if ("zoom" === uu.interaction) {
                  const yu = uu.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Ju) || -1 !== this.keysZoomIn.indexOf(Ju) ? Ru.handlers.zoom(yu) : -1 === this.keysDown.indexOf(Ju) && -1 === this.keysZoomOut.indexOf(Ju) || Ru.handlers.zoom(-yu)
                } else "rotate" === uu.interaction && (Ku = Math.max(Ku, uu.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Ju) ? yu.x -= 1 : -1 !== this.keysRight.indexOf(Ju) ? yu.x += 1 : -1 !== this.keysUp.indexOf(Ju) ? yu.y -= 1 : -1 !== this.keysDown.indexOf(Ju) && (yu.y += 1))
              } - 1 !== this.keysReset.indexOf(Ju) && uu.useInputToRestoreState && uu.restoreState()
            }
            0 === yu.x && 0 === yu.y || (yu.normalize().scaleInPlace(Ku), Ru.handlers.rotate(yu.x, yu.y)), 0 === Eu.x && 0 === Eu.y || (Eu.normalize().scaleInPlace(Qu), Ru.handlers.pan(Eu.x, Eu.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const mu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.K)()], Bu = [(0, Ku.K)()], xu = [(0, Ku.K)()], Su = [(0, Ku.K)()], (0, Eu.h)(uu, null, Su, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAltToZoom" in uu,
            get: uu => uu.useAltToZoom
          },
          metadata: mu
        }, null, pu), (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysUp" in uu,
            get: uu => uu.keysUp,
            set: (uu, Ru) => {
              uu.keysUp = Ru
            }
          },
          metadata: mu
        }, Tu, Wu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysDown" in uu,
            get: uu => uu.keysDown,
            set: (uu, Ru) => {
              uu.keysDown = Ru
            }
          },
          metadata: mu
        }, ju, Hu), (0, Eu.h)(null, null, Qu, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysLeft" in uu,
            get: uu => uu.keysLeft,
            set: (uu, Ru) => {
              uu.keysLeft = Ru
            }
          },
          metadata: mu
        }, du, Cu), (0, Eu.h)(null, null, Ju, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysRight" in uu,
            get: uu => uu.keysRight,
            set: (uu, Ru) => {
              uu.keysRight = Ru
            }
          },
          metadata: mu
        }, ku, eu), (0, Eu.h)(null, null, Nu, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysReset" in uu,
            get: uu => uu.keysReset,
            set: (uu, Ru) => {
              uu.keysReset = Ru
            }
          },
          metadata: mu
        }, Du, Mu), (0, Eu.h)(null, null, Xu, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysZoomIn" in uu,
            get: uu => uu.keysZoomIn,
            set: (uu, Ru) => {
              uu.keysZoomIn = Ru
            }
          },
          metadata: mu
        }, Iu, Gu), (0, Eu.h)(null, null, Vu, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: uu => "keysZoomOut" in uu,
            get: uu => uu.keysZoomOut,
            set: (uu, Ru) => {
              uu.keysZoomOut = Ru
            }
          },
          metadata: mu
        }, Uu, nu), (0, Eu.h)(null, null, ru, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "panningSensibility" in uu,
            get: uu => uu.panningSensibility,
            set: (uu, Ru) => {
              uu.panningSensibility = Ru
            }
          },
          metadata: mu
        }, su, tu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: uu => "zoomingSensibility" in uu,
            get: uu => uu.zoomingSensibility,
            set: (uu, Ru) => {
              uu.zoomingSensibility = Ru
            }
          },
          metadata: mu
        }, lu, gu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: uu => "angularSpeed" in uu,
            get: uu => uu.angularSpeed,
            set: (uu, Ru) => {
              uu.angularSpeed = Ru
            }
          },
          metadata: mu
        }, cu, Lu), mu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mu
        })
      })(), uu
    })();
    du.d.ArcRotateCameraKeyboardMoveInput = Du;
    var Mu = yu(37528),
      Iu = yu(39754);
    let Gu = (() => {
      var uu;
      let Ru, yu, Qu, Nu = [],
        Xu = [],
        ru = [],
        xu = [],
        Su = [],
        pu = [];
      return uu = class {
        constructor() {
          this.wheelPrecision = (0, Eu.l)(this, Nu, 3), this.zoomToMouseLocation = ((0, Eu.l)(this, Xu), (0, Eu.l)(this, ru, !1)), this.wheelDeltaPercentage = ((0, Eu.l)(this, xu), (0, Eu.l)(this, Su, 0)), this.customComputeDeltaFromMouseWheel = ((0, Eu.l)(this, pu), null), this._viewOffset = new mu.p(0, 0, 0), this._globalOffset = new mu.p(0, 0, 0), this._inertialPanning = mu.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(uu, Ru) {
          let yu;
          const Eu = .01 * uu * this.wheelDeltaPercentage * Ru;
          return yu = uu > 0 ? Eu / (1 + this.wheelDeltaPercentage) : Eu * (1 + this.wheelDeltaPercentage), yu
        }
        attachControl(uu) {
          uu = bu.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = Ru => {
            if (Ru.type !== Vu.e.POINTERWHEEL) return;
            const yu = Ru.event;
            let Eu;
            const Ku = yu.deltaMode === Iu.c.DOM_DELTA_LINE ? 40 : 1,
              Qu = -yu.deltaY * Ku;
            if (this.customComputeDeltaFromMouseWheel) Eu = this.customComputeDeltaFromMouseWheel(Qu, this, yu);
            else if (this.wheelDeltaPercentage) {
              if (Eu = this._computeDeltaFromMouseWheelLegacyEvent(Qu, this.camera.radius), Eu > 0) {
                const uu = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Ru = this.camera.radius,
                  yu = uu + Eu;
                for (let Eu = 0; Eu < 20 && !(Ru <= yu) && !(Math.abs(yu * this.camera.inertia) < .001); Eu++) Ru -= yu, yu *= this.camera.inertia;
                Ru = (0, Ju.Clamp)(Ru, 0, Number.MAX_VALUE), Eu = this._computeDeltaFromMouseWheelLegacyEvent(Qu, Ru)
              }
            } else {
              const uu = this.camera.movement.input.getEntry("wheel", "zoom");
              Eu = Qu * (uu?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Eu && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Eu)) : this.camera.movement.zoomAccumulatedPixels += Eu), yu.preventDefault && (uu || yu.preventDefault())
          }, this._observer = this.camera.lD()._inputManager._addCameraPointerObserver(this._wheel, Vu.e.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.e_(0)
        }
        detachControl() {
          this._observer && (this.camera.lD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const uu = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(uu.inertialAlphaOffset) + Math.abs(uu.inertialBetaOffset) + Math.abs(uu.inertialRadiusOffset)) {
            this._updateHitPlane(), uu.target.addInPlace(this._inertialPanning), uu.radius -= this._zoomToMouseRadiusOffset;
            const Ru = uu.movement.getFrameIndependentDecay(uu.inertia);
            this._inertialPanning.scaleInPlace(Ru), this._zoomToMouseRadiusOffset *= Ru, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Bu.d && (this._zoomToMouseRadiusOffset = 0)
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
            Ru = uu.target.subtract(uu.position);
          this._hitPlane = Mu.d.FromPositionAndNormal(uu.target, Ru)
        }
        _getPosition() {
          const uu = this.camera,
            Ru = uu.lD(),
            yu = Ru.createPickingRay(Ru.pointerX, Ru.pointerY, mu.d.Identity(), uu, !1);
          0 === uu.targetScreenOffset.x && 0 === uu.targetScreenOffset.y || (this._viewOffset.set(uu.targetScreenOffset.x, uu.targetScreenOffset.y, 0), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), this._globalOffset = mu.p.TransformNormal(this._viewOffset, uu._cameraTransformMatrix), yu.origin.addInPlace(this._globalOffset));
          let Eu = 0;
          return this._hitPlane && (Eu = yu.intersectsPlane(this._hitPlane) ?? 0), yu.origin.addInPlace(yu.direction.scaleInPlace(Eu))
        }
        _zoomToMouse(uu) {
          const Ru = this.camera,
            yu = 1 - Ru.inertia,
            Eu = Ru.movement.getFrameIndependentInputScale(Ru.inertia);
          if (Ru.lowerRadiusLimit) {
            const Ku = Ru.lowerRadiusLimit ?? 0;
            Ru.radius - (this._zoomToMouseRadiusOffset + uu * Eu) / yu < Ku && (uu = ((Ru.radius - Ku) * yu - this._zoomToMouseRadiusOffset) / Eu)
          }
          if (Ru.upperRadiusLimit) {
            const Ku = Ru.upperRadiusLimit ?? 0;
            Ru.radius - (this._zoomToMouseRadiusOffset + uu * Eu) / yu > Ku && (uu = ((Ru.radius - Ku) * yu - this._zoomToMouseRadiusOffset) / Eu)
          }
          const Ku = uu / yu / Ru.radius,
            Qu = this._getPosition(),
            Ju = mu.m.MS[6];
          Qu.subtractToRef(Ru.target, Ju), Ju.scaleInPlace(Ku), Ju.scaleInPlace(yu), Ju.scaleInPlace(Eu), this._inertialPanning.addInPlace(Ju), this._zoomToMouseRadiusOffset += uu * Eu
        }
        _zeroIfClose(uu) {
          Math.abs(uu.x) < Bu.d && (uu.x = 0), Math.abs(uu.y) < Bu.d && (uu.y = 0), Math.abs(uu.z) < Bu.d && (uu.z = 0)
        }
      }, (() => {
        const mu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelPrecision" in uu,
            get: uu => uu.wheelPrecision,
            set: (uu, Ru) => {
              uu.wheelPrecision = Ru
            }
          },
          metadata: mu
        }, Nu, Xu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: uu => "zoomToMouseLocation" in uu,
            get: uu => uu.zoomToMouseLocation,
            set: (uu, Ru) => {
              uu.zoomToMouseLocation = Ru
            }
          },
          metadata: mu
        }, ru, xu), (0, Eu.h)(null, null, Qu, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: uu => "wheelDeltaPercentage" in uu,
            get: uu => uu.wheelDeltaPercentage,
            set: (uu, Ru) => {
              uu.wheelDeltaPercentage = Ru
            }
          },
          metadata: mu
        }, Su, pu), mu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mu
        })
      })(), uu
    })();
    du.d.ArcRotateCameraMouseWheelInput = Gu;
    var Uu, nu, su = yu(39430);
    class tu extends du.h {
      constructor(uu) {
        super(uu)
      }
      addMouseWheel() {
        return this.add(new Gu), this
      }
      addPointers() {
        return this.add(new eu), this
      }
      addKeyboard() {
        return this.add(new Du), this
      }
    }(Uu = tu.prototype).addVRDeviceOrientation ?? (Uu.addVRDeviceOrientation = (0, su.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (nu = tu.prototype).addGamepad ?? (nu.addGamepad = (0, su.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var lu = yu(36871),
      gu = yu(39787),
      cu = yu(39796);
    class Lu extends gu.d {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu), this.input = new cu.d({
          pan: (uu, Ru) => {
            this.panAccumulatedPixels.x += uu, this.panAccumulatedPixels.y += Ru
          },
          rotate: (uu, Ru) => {
            this.rotationAccumulatedPixels.x += uu, this.rotationAccumulatedPixels.y += Ru
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

    function zu(uu, Ru) {
      return isNaN(uu) ? Ru : uu
    }
    let Fu = (() => {
        var uu;
        let Ru, yu, Nu, Vu, ru, Su, pu, du, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu, su, lu, gu, cu, Fu, wu, Zu, hu, Pu, iu, Yu = Hu.f,
          ou = [],
          qu = [],
          Ou = [],
          vu = [],
          au = [],
          fu = [],
          uR = [],
          RR = [],
          yR = [],
          ER = [],
          KR = [],
          QR = [],
          mR = [],
          JR = [],
          NR = [],
          XR = [],
          VR = [],
          rR = [],
          BR = [],
          xR = [],
          SR = [],
          pR = [],
          TR = [],
          WR = [],
          jR = [],
          HR = [],
          dR = [],
          bR = [],
          CR = [],
          kR = [],
          eR = [],
          AR = [],
          DR = [],
          MR = [],
          IR = [],
          GR = [],
          UR = [],
          nR = [],
          sR = [],
          tR = [],
          lR = [],
          gR = [],
          cR = [],
          LR = [],
          zR = [],
          FR = [],
          wR = [];
        return uu = class extends Yu {
          get target() {
            return this.Av
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
            this._upToYMatrix || (this._yToUpMatrix = new mu.d, this._upToYMatrix = new mu.d, this._upVector = mu.p.Zero()), uu.normalize(), this._upVector.Oyu(uu), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            mu.d.RotationAlignToRef(mu.p.UpReadOnly, this._upVector, this._yToUpMatrix), mu.d.RotationAlignToRef(this._upVector, mu.p.UpReadOnly, this._upToYMatrix)
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
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.angularSensibilityX = uu)
          }
          get angularSensibilityY() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.angularSensibilityY : 0
          }
          set angularSensibilityY(uu) {
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.angularSensibilityY = uu)
          }
          get pinchPrecision() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.pinchPrecision : 0
          }
          set pinchPrecision(uu) {
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.pinchPrecision = uu)
          }
          get pinchDeltaPercentage() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(uu) {
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.pinchDeltaPercentage = uu)
          }
          get useNaturalPinchZoom() {
            const uu = this.inputs.attached.pointers;
            return !!uu && uu.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(uu) {
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.useNaturalPinchZoom = uu)
          }
          get panningSensibility() {
            const uu = this.inputs.attached.pointers;
            return uu ? uu.panningSensibility : 0
          }
          set panningSensibility(uu) {
            const Ru = this.inputs.attached.pointers;
            Ru && (Ru.panningSensibility = uu)
          }
          get keysUp() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysUp : []
          }
          set keysUp(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysUp = uu)
          }
          get keysDown() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysDown : []
          }
          set keysDown(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysDown = uu)
          }
          get keysLeft() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysLeft : []
          }
          set keysLeft(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysLeft = uu)
          }
          get keysRight() {
            const uu = this.inputs.attached.keyboard;
            return uu ? uu.keysRight : []
          }
          set keysRight(uu) {
            const Ru = this.inputs.attached.keyboard;
            Ru && (Ru.keysRight = uu)
          }
          get wheelPrecision() {
            const uu = this.inputs.attached.mousewheel;
            return uu ? uu.wheelPrecision : 0
          }
          set wheelPrecision(uu) {
            const Ru = this.inputs.attached.mousewheel;
            Ru && (Ru.wheelPrecision = uu)
          }
          get zoomToMouseLocation() {
            const uu = this.inputs.attached.mousewheel;
            return !!uu && uu.zoomToMouseLocation
          }
          set zoomToMouseLocation(uu) {
            const Ru = this.inputs.attached.mousewheel;
            Ru && (Ru.zoomToMouseLocation = uu)
          }
          get wheelDeltaPercentage() {
            const uu = this.inputs.attached.mousewheel;
            return uu ? uu.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(uu) {
            const Ru = this.inputs.attached.mousewheel;
            Ru && (Ru.wheelDeltaPercentage = uu)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(uu) {
            this._useCtrlForPanningInternal = uu;
            const Ru = this.movement.input,
              yu = Ru.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !uu && yu ? Ru.inputMap.splice(Ru.inputMap.indexOf(yu), 1) : uu && !yu && Ru.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Eu = Ru.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !uu && Eu ? Ru.inputMap.splice(Ru.inputMap.indexOf(Eu), 1) : uu && !Eu && Ru.addEntry({
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
            const Ru = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Ru && (Ru.button = uu)
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
            uu !== this.useBouncingBehavior && (uu ? (this._bouncingBehavior = new Tu, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(uu) {
            uu !== this.useFramingBehavior && (uu ? (this._framingBehavior = new Wu, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(uu) {
            uu !== this.useAutoRotationBehavior && (uu ? (this._autoRotationBehavior = new xu, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(uu, Ru, yu, Ku, Ju, Nu) {
            var Xu;
            let Vu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(uu, mu.p.Zero(), Nu, Vu), Xu = this, this.alpha = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, void 0)), this.beta = ((0, Eu.l)(this, Ou), (0, Eu.l)(this, vu, void 0)), this.radius = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, void 0)), this.Av = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, void 0)), this._targetHost = ((0, Eu.l)(this, KR), (0, Eu.l)(this, QR, void 0)), this._upToYMatrix = (0, Eu.l)(this, mR), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Eu.l)(this, JR, null), this.upperAlphaLimit = ((0, Eu.l)(this, NR), (0, Eu.l)(this, XR, null)), this.lowerBetaLimit = ((0, Eu.l)(this, VR), (0, Eu.l)(this, rR, .01)), this.upperBetaLimit = ((0, Eu.l)(this, BR), (0, Eu.l)(this, xR, Math.PI - .01)), this.lowerRadiusLimit = ((0, Eu.l)(this, SR), (0, Eu.l)(this, pR, null)), this.upperRadiusLimit = ((0, Eu.l)(this, TR), (0, Eu.l)(this, WR, null)), this.lowerTargetYLimit = ((0, Eu.l)(this, jR), (0, Eu.l)(this, HR, -1 / 0)), this.inertialPanningX = ((0, Eu.l)(this, dR), (0, Eu.l)(this, bR, 0)), this.inertialPanningY = ((0, Eu.l)(this, CR), (0, Eu.l)(this, kR, 0)), this.pinchToPanMaxDistance = ((0, Eu.l)(this, eR), (0, Eu.l)(this, AR, 20)), this.panningDistanceLimit = ((0, Eu.l)(this, DR), (0, Eu.l)(this, MR, null)), this.panningOriginTarget = ((0, Eu.l)(this, IR), (0, Eu.l)(this, GR, mu.p.Zero())), this._panningInertia = ((0, Eu.l)(this, UR), .9), this._inertia = .9, this.zoomOnFactor = (0, Eu.l)(this, nR, 1), this.targetScreenOffset = ((0, Eu.l)(this, sR), (0, Eu.l)(this, tR, mu.n.Zero())), this.allowUpsideDown = ((0, Eu.l)(this, lR), (0, Eu.l)(this, gR, !0)), this.useInputToRestoreState = ((0, Eu.l)(this, cR), (0, Eu.l)(this, LR, !0)), this.restoreStateInterpolationFactor = ((0, Eu.l)(this, zR), (0, Eu.l)(this, FR, 0)), this._currentInterpolationFactor = ((0, Eu.l)(this, wR), 0), this._viewMatrix = new mu.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new mu.p(1, 1, 0), this._transformedDirection = new mu.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Qu.b, this.checkCollisions = !1, this.collisionRadius = new mu.p(.5, .5, .5), this._previousPosition = mu.p.Zero(), this._collisionVelocity = mu.p.Zero(), this._newPosition = mu.p.Zero(), this._computationVector = mu.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new mu.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new mu.n(NaN, NaN), this._onCollisionPositionChange = function(uu, Ru) {
              let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              yu ? (Xu.setPosition(Ru), Xu.uB && Xu.uB(yu)) : Xu._previousPosition.Oyu(Xu._position);
              const Eu = Math.cos(Xu.alpha),
                Ku = Math.sin(Xu.alpha),
                Qu = Math.cos(Xu.beta);
              let mu = Math.sin(Xu.beta);
              0 === mu && (mu = 1e-4);
              const Ju = Xu._getTargetPosition();
              Xu._computationVector.muu(Xu.radius * Eu * mu, Xu.radius * Qu, Xu.radius * Ku * mu), Ju.addToRef(Xu._computationVector, Xu._newPosition), Xu._position.Oyu(Xu._newPosition);
              let Nu = Xu.upVector;
              Xu.allowUpsideDown && Xu.beta < 0 && (Nu = Nu.clone(), Nu = Nu.tm()), Xu._computeViewMatrix(Xu._position, Ju, Nu), Xu._viewMatrix.addAtIndex(12, Xu.targetScreenOffset.x), Xu._viewMatrix.addAtIndex(13, Xu.targetScreenOffset.y), Xu._collisionTriggered = !1
            }, this.Av = mu.p.Zero(), Ju && this.setTarget(Ju), this.alpha = Ru, this.beta = yu, this.radius = Ku, this.getViewMatrix(), this.inputs = new tu(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Lu(this.lD(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Av = new mu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = mu.n.Zero()
          }
          _updateCache(uu) {
            uu || super._updateCache(), this._cache.Av.Oyu(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Oyu(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const uu = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? uu.addToRef(this._targetBoundingCenter, this.Av) : this.Av.Oyu(uu)
            }
            const uu = this._getLockedTargetPosition();
            return uu || this.Av
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Bu.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Qu = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Qu ? this._currentInterpolationFactor = Qu : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = zu(uu, this._goalAlpha), this._goalBeta = zu(Ru, this._goalBeta), this._goalRadius = zu(yu, this._goalRadius), this._goalTarget.set(zu(Eu.x, this._goalTarget.x), zu(Eu.y, this._goalTarget.y), zu(Eu.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(zu(Ku.x, this._goalTargetScreenOffset.x), zu(Ku.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Ju.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Ju.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Ju.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Ju.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Av.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(uu, Ru) {
            let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Ku = arguments;
            Ru = bu.i.BackCompatCameraNoPreventDefault(Ku), this._useCtrlForPanning = yu, this._panningMouseButton = Eu, "boolean" === typeof Ku[0] && (Ku.length > 1 && (this._useCtrlForPanning = Ku[1]), Ku.length > 2 && (this._panningMouseButton = Ku[2])), this.inputs.attachElement(Ru), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(uu, Ru, yu) {
            const Eu = this.invertRotation ? -1 : 1;
            let Ku = uu * this._calculateHandednessMultiplier();
            this.beta < 0 && (Ku *= -1), this.alpha += Ku * Eu, this.beta += Ru * Eu, this.radius -= yu
          }
          _applyPanDelta(uu, Ru) {
            const yu = mu.m.MS[0].muu(uu, Ru, Ru);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), yu.multiplyInPlace(this.panningAxis), mu.p.TransformNormalToRef(yu, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const uu = this.upVector,
                Ru = mu.p.CrossToRef(this._transformedDirection, uu, this._transformedDirection);
              mu.p.CrossToRef(uu, Ru, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Av);
                mu.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Av.Oyu(this._transformedDirection)
              } else {
                if (this.parent) {
                  const uu = mu.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(uu), uu.transposeToRef(uu), mu.p.TransformCoordinatesToRef(this._transformedDirection, uu, this._transformedDirection)
                }
                this.Av.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let uu = !1;
            this.movement.computeCurrentFrameDeltas();
            const Ru = this.movement.rotationDeltaCurrentFrame,
              yu = this.movement.zoomDeltaCurrentFrame,
              Eu = this.movement.panDeltaCurrentFrame;
            if (0 === Ru.x && 0 === Ru.y && 0 === yu && 0 === Eu.x && 0 === Eu.y || (uu = !0, 0 === Ru.x && 0 === Ru.y && 0 === yu || this._applyRotationAndZoomDelta(Ru.x, Ru.y, yu), 0 === Eu.x && 0 === Eu.y || this._applyPanDelta(Eu.x, Eu.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), uu = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Ru = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Ru && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Ru && (this.inertialPanningY = 0), uu = !0
            }
            if (uu) this.stopInterpolation();
            else if (this._isInterpolating) {
              let uu = !1;
              const Ru = this._scene.eS().getDeltaTime() / 1e3,
                yu = 1 - Math.pow(2, -Ru / this._currentInterpolationFactor),
                Eu = zu(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Ru = mu.m.MS[0].set(zu(this._goalTarget.x, this.Av.x), zu(this._goalTarget.y, this.Av.y), zu(this._goalTarget.z, this.Av.z));
                mu.p.LerpToRef(this.target, Ru, yu, this.Av), 10 * mu.p.Distance(this.target, Ru) / Eu < Bu.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Oyu(Ru), this.setTarget(this.target, !1, !0, !0)) : uu = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Ru = mu.f.RotationAlphaBetaGammaToRef(zu(this._goalAlpha, this.alpha), zu(this._goalBeta, this.beta), 0, mu.m.Quaternion[0]),
                  Eu = mu.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mu.m.Quaternion[1]),
                  Ku = mu.f.SlerpToRef(Eu, Ru, yu, mu.m.Quaternion[2]);
                Ku.normalize();
                const Qu = Ku.toAlphaBetaGammaToRef(mu.m.MS[0]);
                if (this.alpha = Qu.x, this.beta = Qu.y, Ku.isApprox(Ru, Bu.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const uu = Ru.toAlphaBetaGammaToRef(mu.m.MS[0]);
                  this.alpha = uu.x, this.beta = uu.y
                } else uu = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Eu - this.radius) * yu, Math.abs(Eu / this.radius - 1) < Bu.d ? (this._goalRadius = NaN, this.radius = Eu) : uu = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Ru = mu.m.Vector2[0].set(zu(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), zu(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                mu.n.LerpToRef(this.targetScreenOffset, Ru, yu, this.targetScreenOffset), mu.n.Distance(this.targetScreenOffset, Ru) < Bu.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Oyu(Ru)) : uu = !0
              }
              this._isInterpolating = uu
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mu.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const uu = this.alpha;
            var Ru, yu;
            this.alpha = function(uu) {
              let Ru = Math.PI / 2;
              return 0 === uu.x && 0 === uu.z || (Ru = Math.acos(uu.x / Math.sqrt(Math.pow(uu.x, 2) + Math.pow(uu.z, 2)))), uu.z < 0 && (Ru = 2 * Math.PI - Ru), Ru
            }(this._computationVector), this.beta = (Ru = this._computationVector.y, yu = this.radius, Math.acos(Ru / yu));
            const Eu = Math.round((uu - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Eu * Math.PI, this._checkLimits()
          }
          setPosition(uu) {
            this._position.equals(uu) || (this._position.Oyu(uu), this.rebuildAnglesAndRadius())
          }
          setTarget(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Eu = this.overrideCloneAlphaBetaRadius ?? Eu, uu.computeWorldMatrix) Ru && uu.vI ? this._targetBoundingCenter = uu.vI().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, uu.computeWorldMatrix(), this._targetHost = uu, this.Av = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Ru = uu,
                Eu = this._getTargetPosition();
              if (Eu && !yu && Eu.equals(Ru)) return;
              this._targetHost = null, this.Av = Ru, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Eu || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const uu = Math.cos(this.alpha),
              Ru = Math.sin(this.alpha),
              yu = Math.cos(this.beta);
            let Eu = Math.sin(this.beta);
            0 === Eu && (Eu = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Ku = this._getTargetPosition();
            if (this._computationVector.muu(this.radius * uu * Eu, this.radius * yu, this.radius * Ru * Eu), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mu.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Ku.addToRef(this._computationVector, this._newPosition), this.lD().collisionsEnabled && this.checkCollisions) {
              const uu = this.lD().collisionCoordinator;
              this._collider || (this._collider = uu.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, uu.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Oyu(this._newPosition);
              let uu = this.upVector;
              this.allowUpsideDown && Eu < 0 && (uu = uu.tm()), this._computeViewMatrix(this._position, Ku, uu), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Oyu(Ku), this._viewMatrix
          }
          zoomOn(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            uu = uu || this.lD().meshes;
            const yu = Xu.e.MinMax(uu);
            let Eu = this._calculateLowerRadiusFromModelBoundingSphere(yu.min, yu.max);
            if (Eu = Math.max(Math.min(Eu, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Eu * this.zoomOnFactor, this.mode === ju.c.ORTHOGRAPHIC_CAMERA) {
              const uu = this.lD().eS().getAspectRatio(this),
                Ru = Eu * this.zoomOnFactor / 2;
              this.orthoLeft = -Ru * uu, this.orthoRight = Ru * uu, this.orthoBottom = -Ru, this.orthoTop = Ru
            }
            this.focusOn({
              min: yu.min,
              max: yu.max,
              distance: Eu
            }, Ru)
          }
          focusOn(uu) {
            let Ru, yu, Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === uu.min) {
              const Eu = uu || this.lD().meshes;
              Ru = Xu.e.MinMax(Eu), yu = mu.p.Distance(Ru.min, Ru.max)
            } else {
              Ru = uu, yu = uu.distance
            }
            this.Av = Xu.e.Center(Ru), Eu || (this.maxZ = 2 * yu)
          }
          createRigCamera(Ru, yu) {
            let Eu = 0;
            switch (this.cameraRigMode) {
              case ju.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ju.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ju.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ju.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ju.c.RIG_MODE_VR:
                Eu = this._cameraRigParams.stereoHalfAngle * (0 === yu ? 1 : -1);
                break;
              case ju.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Eu = this._cameraRigParams.stereoHalfAngle * (0 === yu ? -1 : 1)
            }
            const Ku = new uu(Ru, this.alpha + Eu, this.beta, this.radius, this.Av, this.lD());
            return Ku._cameraRigParams = {}, Ku.isRigCamera = !0, Ku.rigParent = this, Ku.upVector = this.upVector, Ku.mode = this.mode, Ku.orthoLeft = this.orthoLeft, Ku.orthoRight = this.orthoRight, Ku.orthoBottom = this.orthoBottom, Ku.orthoTop = this.orthoTop, Ku
          }
          _updateRigCameras() {
            const uu = this._rigCameras[0],
              Ru = this._rigCameras[1];
            switch (uu.beta = Ru.beta = this.beta, this.cameraRigMode) {
              case ju.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ju.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ju.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ju.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ju.c.RIG_MODE_VR:
                uu.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Ru.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case ju.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                uu.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Ru.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Eu = mu.p.Distance(uu, Ru),
              Ku = this.lD().eS().getAspectRatio(this),
              Qu = Math.tan(this.fov / 2),
              Ju = Qu * Ku,
              Nu = .5 * Eu * yu,
              Xu = Nu * Math.sqrt(1 + 1 / (Ju * Ju)),
              Vu = Nu * Math.sqrt(1 + 1 / (Qu * Qu));
            return Math.max(Xu, Vu)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.G)("target")], Su = [(0, Ku.y)("targetHost")], pu = [(0, Ku.K)()], du = [(0, Ku.K)()], Cu = [(0, Ku.K)()], ku = [(0, Ku.K)()], eu = [(0, Ku.K)()], Au = [(0, Ku.K)()], Du = [(0, Ku.K)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], Uu = [(0, Ku.K)()], nu = [(0, Ku.K)()], su = [(0, Ku.K)()], lu = [(0, Ku.K)()], gu = [(0, Ku.G)()], cu = [(0, Ku.K)()], Fu = [(0, Ku.K)()], wu = [(0, Ku.K)()], Zu = [(0, Ku.C)()], hu = [(0, Ku.K)()], Pu = [(0, Ku.K)()], iu = [(0, Ku.K)()], (0, Eu.h)(uu, null, pu, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialAlphaOffset" in uu,
              get: uu => uu.inertialAlphaOffset
            },
            metadata: Qu
          }, null, ou), (0, Eu.h)(uu, null, du, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialBetaOffset" in uu,
              get: uu => uu.inertialBetaOffset
            },
            metadata: Qu
          }, null, ou), (0, Eu.h)(uu, null, Cu, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialRadiusOffset" in uu,
              get: uu => uu.inertialRadiusOffset
            },
            metadata: Qu
          }, null, ou), (0, Eu.h)(uu, null, cu, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningInertia" in uu,
              get: uu => uu.panningInertia
            },
            metadata: Qu
          }, null, ou), (0, Eu.h)(uu, null, Fu, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: uu => "zoomToMouseLocation" in uu,
              get: uu => uu.zoomToMouseLocation
            },
            metadata: Qu
          }, null, ou), (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "alpha" in uu,
              get: uu => uu.alpha,
              set: (uu, Ru) => {
                uu.alpha = Ru
              }
            },
            metadata: Qu
          }, qu, Ou), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: uu => "beta" in uu,
              get: uu => uu.beta,
              set: (uu, Ru) => {
                uu.beta = Ru
              }
            },
            metadata: Qu
          }, vu, au), (0, Eu.h)(null, null, Nu, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: uu => "radius" in uu,
              get: uu => uu.radius,
              set: (uu, Ru) => {
                uu.radius = Ru
              }
            },
            metadata: Qu
          }, fu, uR), (0, Eu.h)(null, null, Vu, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: uu => "overrideCloneAlphaBetaRadius" in uu,
              get: uu => uu.overrideCloneAlphaBetaRadius,
              set: (uu, Ru) => {
                uu.overrideCloneAlphaBetaRadius = Ru
              }
            },
            metadata: Qu
          }, RR, yR), (0, Eu.h)(null, null, ru, {
            kind: "field",
            name: "Av",
            static: !1,
            private: !1,
            access: {
              has: uu => "Av" in uu,
              get: uu => uu.Av,
              set: (uu, Ru) => {
                uu.Av = Ru
              }
            },
            metadata: Qu
          }, ER, KR), (0, Eu.h)(null, null, Su, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: uu => "_targetHost" in uu,
              get: uu => uu._targetHost,
              set: (uu, Ru) => {
                uu._targetHost = Ru
              }
            },
            metadata: Qu
          }, QR, mR), (0, Eu.h)(null, null, ku, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerAlphaLimit" in uu,
              get: uu => uu.lowerAlphaLimit,
              set: (uu, Ru) => {
                uu.lowerAlphaLimit = Ru
              }
            },
            metadata: Qu
          }, JR, NR), (0, Eu.h)(null, null, eu, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperAlphaLimit" in uu,
              get: uu => uu.upperAlphaLimit,
              set: (uu, Ru) => {
                uu.upperAlphaLimit = Ru
              }
            },
            metadata: Qu
          }, XR, VR), (0, Eu.h)(null, null, Au, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerBetaLimit" in uu,
              get: uu => uu.lowerBetaLimit,
              set: (uu, Ru) => {
                uu.lowerBetaLimit = Ru
              }
            },
            metadata: Qu
          }, rR, BR), (0, Eu.h)(null, null, Du, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperBetaLimit" in uu,
              get: uu => uu.upperBetaLimit,
              set: (uu, Ru) => {
                uu.upperBetaLimit = Ru
              }
            },
            metadata: Qu
          }, xR, SR), (0, Eu.h)(null, null, Mu, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerRadiusLimit" in uu,
              get: uu => uu.lowerRadiusLimit,
              set: (uu, Ru) => {
                uu.lowerRadiusLimit = Ru
              }
            },
            metadata: Qu
          }, pR, TR), (0, Eu.h)(null, null, Iu, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "upperRadiusLimit" in uu,
              get: uu => uu.upperRadiusLimit,
              set: (uu, Ru) => {
                uu.upperRadiusLimit = Ru
              }
            },
            metadata: Qu
          }, WR, jR), (0, Eu.h)(null, null, Gu, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "lowerTargetYLimit" in uu,
              get: uu => uu.lowerTargetYLimit,
              set: (uu, Ru) => {
                uu.lowerTargetYLimit = Ru
              }
            },
            metadata: Qu
          }, HR, dR), (0, Eu.h)(null, null, Uu, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialPanningX" in uu,
              get: uu => uu.inertialPanningX,
              set: (uu, Ru) => {
                uu.inertialPanningX = Ru
              }
            },
            metadata: Qu
          }, bR, CR), (0, Eu.h)(null, null, nu, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: uu => "inertialPanningY" in uu,
              get: uu => uu.inertialPanningY,
              set: (uu, Ru) => {
                uu.inertialPanningY = Ru
              }
            },
            metadata: Qu
          }, kR, eR), (0, Eu.h)(null, null, su, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: uu => "pinchToPanMaxDistance" in uu,
              get: uu => uu.pinchToPanMaxDistance,
              set: (uu, Ru) => {
                uu.pinchToPanMaxDistance = Ru
              }
            },
            metadata: Qu
          }, AR, DR), (0, Eu.h)(null, null, lu, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningDistanceLimit" in uu,
              get: uu => uu.panningDistanceLimit,
              set: (uu, Ru) => {
                uu.panningDistanceLimit = Ru
              }
            },
            metadata: Qu
          }, MR, IR), (0, Eu.h)(null, null, gu, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: uu => "panningOriginTarget" in uu,
              get: uu => uu.panningOriginTarget,
              set: (uu, Ru) => {
                uu.panningOriginTarget = Ru
              }
            },
            metadata: Qu
          }, GR, UR), (0, Eu.h)(null, null, wu, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: uu => "zoomOnFactor" in uu,
              get: uu => uu.zoomOnFactor,
              set: (uu, Ru) => {
                uu.zoomOnFactor = Ru
              }
            },
            metadata: Qu
          }, nR, sR), (0, Eu.h)(null, null, Zu, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: uu => "targetScreenOffset" in uu,
              get: uu => uu.targetScreenOffset,
              set: (uu, Ru) => {
                uu.targetScreenOffset = Ru
              }
            },
            metadata: Qu
          }, tR, lR), (0, Eu.h)(null, null, hu, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: uu => "allowUpsideDown" in uu,
              get: uu => uu.allowUpsideDown,
              set: (uu, Ru) => {
                uu.allowUpsideDown = Ru
              }
            },
            metadata: Qu
          }, gR, cR), (0, Eu.h)(null, null, Pu, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: uu => "useInputToRestoreState" in uu,
              get: uu => uu.useInputToRestoreState,
              set: (uu, Ru) => {
                uu.useInputToRestoreState = Ru
              }
            },
            metadata: Qu
          }, LR, zR), (0, Eu.h)(null, null, iu, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: uu => "restoreStateInterpolationFactor" in uu,
              get: uu => uu.restoreStateInterpolationFactor,
              set: (uu, Ru) => {
                uu.restoreStateInterpolationFactor = Ru
              }
            },
            metadata: Qu
          }, FR, wR), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      wu = !1;
    wu || (wu = !0, Nu.e.AddNodeConstructor("ArcRotateCamera", ((uu, Ru) => () => new Fu(uu, 0, 0, 1, mu.p.Zero(), Ru))), (0, lu.c)("BABYLON.ArcRotateCamera", Fu))
  },
  39808: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.e
    });
    var Eu = yu(39815);
    (0, Eu.g)()
  },
  39815: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      g: () => Bu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(36991),
      Ju = yu(39823),
      Nu = yu(39780),
      Xu = yu(36871);
    let Vu = (() => {
        var uu;
        let Ru, yu, Nu = Ju.e,
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        return uu = class extends Nu {
          constructor(uu, Ru, yu, Ku) {
            super(uu, yu, Ku), this.groundColor = (0, Eu.l)(this, Xu, new mu.d(0, 0, 0)), this.direction = ((0, Eu.l)(this, Vu), (0, Eu.l)(this, ru, void 0)), (0, Eu.l)(this, Bu), this.direction = Ru || Qu.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Qu.p.Normalize(uu.subtract(Qu.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", yu.x, yu.y, yu.z, 0, Ru), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Ru), this
          }
          transferToNodeMaterialEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return uu.setFloat3(Ru, yu.x, yu.y, yu.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Qu.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ju.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Ru) {
            uu["HEMILIGHT" + Ru] = !0
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.n)()], yu = [(0, Ku.G)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Ru) => {
                uu.groundColor = Ru
              }
            },
            metadata: Qu
          }, Xu, Vu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Ru) => {
                uu.direction = Ru
              }
            },
            metadata: Qu
          }, ru, Bu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      ru = !1;

    function Bu() {
      ru || (ru = !0, Nu.e.AddNodeConstructor("Light_Type_3", ((uu, Ru) => () => new Vu(uu, Qu.p.Zero(), Ru))), (0, Xu.c)("BABYLON.HemisphericLight", Vu))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
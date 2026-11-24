export const id = 260;
export const ids = [260];
export const modules = {
  41006: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => yD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37119),
      rD = wD(37079),
      LD = wD(37125),
      cD = wD(40155),
      gD = wD(40335),
      RD = wD(40106),
      AD = wD(39832),
      UD = wD(37088);
    class fD {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(DD) {
        this._zoomStopsAnimation = DD
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(DD) {
        this._idleRotationSpeed = DD
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(DD) {
        this._idleRotationWaitTime = DD
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(DD) {
        this._idleRotationSpinupTime = DD
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
      attach(DD) {
        this._attachedCamera = DD;
        const zD = this._attachedCamera.Ul();
        this._onPrePointerObservableObserver = zD.onPrePointerObservable.add((DD => {
          DD.type !== RD.c.POINTERDOWN ? DD.type === RD.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const DD = AD.c.Now;
          let zD = 0;
          null != this._lastFrameTime && (zD = DD - this._lastFrameTime), this._lastFrameTime = DD, this._applyUserInteraction();
          const wD = DD - this._lastInteractionTime - this._idleRotationWaitTime,
            pD = Math.max(Math.min(wD / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * pD, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (zD / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const DD = this._attachedCamera.Ul();
        this._onPrePointerObservableObserver && DD.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(DD) {
        this._lastInteractionTime = DD ?? AD.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < UD.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let DD = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (DD = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? DD : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = AD.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    wD(41008);
    class ID {
      constructor() {
        this._easingMode = ID.EASINGMODE_EASEIN
      }
      setEasingMode(DD) {
        const zD = Math.min(Math.max(DD, 0), 2);
        this._easingMode = zD
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(DD) {
        throw new Error("You must implement this method")
      }
      ease(DD) {
        switch (this._easingMode) {
          case ID.EASINGMODE_EASEIN:
            return this.easeInCore(DD);
          case ID.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - DD)
        }
        return DD >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - DD))) + .5 : .5 * this.easeInCore(2 * DD)
      }
    }
    ID.EASINGMODE_EASEIN = 0, ID.EASINGMODE_EASEOUT = 1, ID.EASINGMODE_EASEINOUT = 2;
    var BD = wD(41016);
    class GD {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(DD) {
        if (this._autoTransitionRange === DD) return;
        this._autoTransitionRange = DD;
        const zD = this._attachedCamera;
        zD && (DD ? this._onMeshTargetChangedObserver = zD.onMeshTargetChangedObservable.add((DD => {
          if (DD && (DD.computeWorldMatrix(!0), DD.FW)) {
            const zD = DD.FW().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * zD, this.upperRadiusTransitionRange = .05 * zD
          }
        })) : this._onMeshTargetChangedObserver && zD.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(DD) {
        this._attachedCamera = DD, this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(DD) {
        return !!this._attachedCamera && (this._attachedCamera.radius === DD && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(DD) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (GD.EasingFunction.setEasingMode(GD.EasingMode), this._radiusBounceTransition = BD.d.CreateAnimation("radius", BD.d.ANIMATIONTYPE_FLOAT, 60, GD.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const zD = BD.d.TransitionTo("radius", this._attachedCamera.radius + DD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        zD && this._animatables.push(zD)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    GD.EasingFunction = new class extends ID {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = DD
      }
      easeInCore(DD) {
        const zD = Math.max(0, this.amplitude);
        return Math.pow(DD, 3) - DD * zD * Math.sin(3.141592653589793 * DD)
      }
    }(.3), GD.EasingMode = ID.EASINGMODE_EASEOUT;
    class hD {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new KD.b, this._mode = hD.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(DD) {
        this._mode = DD
      }
      get mode() {
        return this._mode
      }
      set radiusScale(DD) {
        this._radiusScale = DD
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(DD) {
        this._positionScale = DD
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(DD) {
        this._defaultElevation = DD
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(DD) {
        this._elevationReturnTime = DD
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(DD) {
        this._elevationReturnWaitTime = DD
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(DD) {
        this._zoomStopsAnimation = DD
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(DD) {
        this._framingTime = DD
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(DD) {
        this._attachedCamera = DD;
        const zD = this._attachedCamera.Ul();
        hD.EasingFunction.setEasingMode(hD.EasingMode), this._onPrePointerObservableObserver = zD.onPrePointerObservable.add((DD => {
          DD.type !== RD.c.POINTERDOWN ? DD.type === RD.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = DD.onMeshTargetChangedObservable.add((DD => {
          DD && DD.FW && this.zoomOnMesh(DD, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const DD = this._attachedCamera.Ul();
        this._onPrePointerObservableObserver && DD.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        DD.computeWorldMatrix(!0);
        const pD = DD.FW().boundingBox;
        this.zoomOnBoundingInfo(pD.minimumWorld, pD.maximumWorld, zD, wD)
      }
      zoomOnMeshHierarchy(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        DD.computeWorldMatrix(!0);
        const pD = DD.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(pD.min, pD.max, zD, wD)
      }
      zoomOnMeshesHierarchy(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pD = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          sD = new rD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let KD = 0; KD < DD.length; KD++) {
          const zD = DD[KD].getHierarchyBoundingVectors(!0);
          rD.s.CheckExtends(zD.min, pD, sD), rD.s.CheckExtends(zD.max, pD, sD)
        }
        this.zoomOnBoundingInfo(pD, sD, zD, wD)
      }
      zoomOnBoundingInfo(DD, zD) {
        let wD, pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const KD = DD.y,
          LD = KD + (zD.y - KD) * this._positionScale,
          cD = zD.subtract(DD).scale(.5);
        if (!isFinite(LD)) return !1;
        if (pD) wD = new rD.s(0, LD, 0);
        else {
          const zD = DD.add(cD);
          wD = new rD.s(zD.x, LD, zD.z)
        }
        this._vectorTransition || (this._vectorTransition = BD.d.CreateAnimation("target", BD.d.ANIMATIONTYPE_VECTOR3, 60, hD.EasingFunction)), this._betaIsAnimating = !0;
        let gD = BD.d.TransitionTo("target", wD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._vectorTransition, this._framingTime);
        gD && this._animatables.push(gD);
        let RD = 0;
        if (this._mode === hD.FitFrustumSidesMode) {
          const wD = this._calculateLowerRadiusFromModelBoundingSphere(DD, zD);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = cD.length() + this._attachedCamera.minZ), RD = wD
        } else this._mode === hD.IgnoreBoundsSizeMode && (RD = this._calculateLowerRadiusFromModelBoundingSphere(DD, zD), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const wD = zD.subtract(DD).length();
          this._attachedCamera.panningSensibility = 5e3 / wD, this._attachedCamera.wheelPrecision = 100 / RD
        }
        return this._radiusTransition || (this._radiusTransition = BD.d.CreateAnimation("radius", BD.d.ANIMATIONTYPE_FLOAT, 60, hD.EasingFunction)), gD = BD.d.TransitionTo("radius", RD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), sD && sD(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), gD && this._animatables.push(gD), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(DD, zD) {
        const wD = this._attachedCamera;
        if (!wD) return 0;
        let pD = wD._calculateLowerRadiusFromModelBoundingSphere(DD, zD, this._radiusScale);
        return wD.lowerRadiusLimit && this._mode === hD.IgnoreBoundsSizeMode && (pD = pD < wD.lowerRadiusLimit ? wD.lowerRadiusLimit : pD), wD.upperRadiusLimit && (pD = pD > wD.upperRadiusLimit ? wD.upperRadiusLimit : pD), pD
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const DD = AD.c.Now - this._lastInteractionTime,
          zD = .5 * Math.PI - this._defaultElevation,
          wD = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > wD && DD >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = BD.d.CreateAnimation("beta", BD.d.ANIMATIONTYPE_FLOAT, 60, hD.EasingFunction));
          const DD = BD.d.TransitionTo("beta", zD, this._attachedCamera, this._attachedCamera.Ul(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          DD && this._animatables.push(DD)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = AD.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    hD.EasingFunction = new class extends ID {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = DD
      }
      easeInCore(DD) {
        return this.exponent <= 0 ? DD : (Math.exp(this.exponent * DD) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, hD.EasingMode = ID.EASINGMODE_EASEINOUT, hD.IgnoreBoundsSizeMode = 0, hD.FitFrustumSidesMode = 1;
    var nD = wD(40148),
      MD = wD(40146),
      OD = wD(40179),
      JD = wD(40027);
    let ED = (() => {
        var DD;
        let zD, wD = [],
          KD = [];
        return DD = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, pD.m)(this, wD, [0, 1, 2]), this._pointerInput = (0, pD.m)(this, KD)
          }
          attachControl(DD) {
            DD = JD.h.BackCompatCameraNoPreventDefault(arguments);
            const zD = this.camera.iI(),
              wD = zD.getInputElement();
            let pD = 0,
              sD = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = KD => {
              const rD = KD.event,
                LD = "touch" === rD.pointerType;
              if (KD.type !== RD.c.POINTERMOVE && -1 === this.buttons.indexOf(rD.button)) return;
              const cD = rD.target;
              if (this._altKey = rD.altKey, this._ctrlKey = rD.ctrlKey, this._metaKey = rD.metaKey, this._shiftKey = rD.shiftKey, this._buttonsPressed = rD.buttons, zD.isPointerLock) {
                const DD = rD.movementX,
                  zD = rD.movementY;
                this.onTouch(null, DD, zD), this._pointA = null, this._pointB = null
              } else {
                if (KD.type !== RD.c.POINTERDOWN && KD.type !== RD.c.POINTERDOUBLETAP && LD && this._pointA?.pointerId !== rD.pointerId && this._pointB?.pointerId !== rD.pointerId) return;
                if (KD.type !== RD.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !LD)
                  if (KD.type === RD.c.POINTERDOUBLETAP) this.onDoubleTap(rD.pointerType, rD);
                  else if (KD.type !== RD.c.POINTERUP || this._currentMousePointerIdDown !== rD.pointerId && !LD) {
                  if (KD.type === RD.c.POINTERMOVE)
                    if (DD || rD.preventDefault(), this._pointA && null === this._pointB) {
                      const DD = rD.clientX - this._pointA.x,
                        zD = rD.clientY - this._pointA.y;
                      this._pointA.x = rD.clientX, this._pointA.y = rD.clientY, this.onTouch(this._pointA, DD, zD)
                    } else if (this._pointA && this._pointB) {
                    const DD = this._pointA.pointerId === rD.pointerId ? this._pointA : this._pointB;
                    DD.x = rD.clientX, DD.y = rD.clientY;
                    const zD = this._pointA.x - this._pointB.x,
                      wD = this._pointA.y - this._pointB.y,
                      LD = zD * zD + wD * wD,
                      cD = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: rD.pointerId,
                        type: KD.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, pD, LD, sD, cD), sD = cD, pD = LD
                  }
                } else {
                  try {
                    cD?.releasePointerCapture(rD.pointerId)
                  } catch (gD) {}
                  LD || (this._pointB = null), zD._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == rD.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == rD.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== pD || sD) && (this.onMultiTouch(this._pointA, this._pointB, pD, 0, sD, null), pD = 0, sD = null), this._currentMousePointerIdDown = -1, this.onButtonUp(rD), DD || rD.preventDefault()
                } else {
                  try {
                    cD?.setPointerCapture(rD.pointerId)
                  } catch (gD) {}
                  if (null === this._pointA) this._pointA = {
                    x: rD.clientX,
                    y: rD.clientY,
                    pointerId: rD.pointerId,
                    type: rD.pointerType,
                    button: rD.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: rD.clientX,
                      y: rD.clientY,
                      pointerId: rD.pointerId,
                      type: rD.pointerType,
                      button: rD.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || LD || (this._currentMousePointerIdDown = rD.pointerId), this.onButtonDown(rD), DD || (rD.preventDefault(), wD && wD.focus())
                }
              }
            }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._pointerInput, RD.c.POINTERDOWN | RD.c.POINTERUP | RD.c.POINTERMOVE | RD.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, pD = 0, sD = null, this.onLostFocus()
            }, this._contextMenuBind = DD => this.onContextMenu(DD), wD && wD.addEventListener("contextmenu", this._contextMenuBind, !1);
            const KD = this.camera.Ul().iI().getHostWindow();
            KD && JD.h.RegisterTopRootEvents(KD, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const DD = this.camera.Ul().iI().getHostWindow();
              DD && JD.h.UnregisterTopRootEvents(DD, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const DD = this.camera.Ul().iI().getInputElement();
                DD && DD.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(DD, zD) {}
          onTouch(DD, zD, wD) {}
          onMultiTouch(DD, zD, wD, pD, sD, KD) {}
          onContextMenu(DD) {
            DD.preventDefault()
          }
          onButtonDown(DD) {}
          onButtonUp(DD) {}
          onLostFocus() {}
        }, (() => {
          const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: DD => "buttons" in DD,
              get: DD => DD.buttons,
              set: (DD, zD) => {
                DD.buttons = zD
              }
            },
            metadata: rD
          }, wD, KD), rD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rD
          })
        })(), DD
      })(),
      QD = (() => {
        var DD;
        let zD, wD, KD, rD = ED,
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        return DD = class extends rD {
          constructor() {
            super(...arguments), this.pinchZoom = (0, pD.m)(this, LD, !0), this.multiTouchPanning = ((0, pD.m)(this, cD), (0, pD.m)(this, gD, !0)), this.multiTouchPanAndZoom = ((0, pD.m)(this, RD), (0, pD.m)(this, AD, !0)), this._isPinching = ((0, pD.m)(this, UD), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(DD, zD) {}
          _computeMultiTouchPanning(DD, zD) {}
          onMultiTouch(DD, zD, wD, pD, sD, KD) {
            0 === wD && null === sD || 0 === pD && null === KD || (this.multiTouchPanAndZoom ? (this._computePinchZoom(wD, pD), this._computeMultiTouchPanning(sD, KD)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(wD, pD), this._isPinching = !0) : this._computeMultiTouchPanning(sD, KD)) : this.multiTouchPanning ? this._computeMultiTouchPanning(sD, KD) : this.pinchZoom && this._computePinchZoom(wD, pD))
          }
          onButtonUp(DD) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(rD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchZoom" in DD,
              get: DD => DD.pinchZoom,
              set: (DD, zD) => {
                DD.pinchZoom = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: DD => "multiTouchPanning" in DD,
              get: DD => DD.multiTouchPanning,
              set: (DD, zD) => {
                DD.multiTouchPanning = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, pD.i)(null, null, KD, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "multiTouchPanAndZoom" in DD,
              get: DD => DD.multiTouchPanAndZoom,
              set: (DD, zD) => {
                DD.multiTouchPanAndZoom = zD
              }
            },
            metadata: fD
          }, AD, UD), fD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          })
        })(), DD
      })(),
      XD = (() => {
        var DD;
        let zD, wD, KD, rD, LD, cD, gD, RD = QD,
          AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [],
          hD = [],
          nD = [],
          MD = [],
          OD = [],
          JD = [],
          ED = [],
          XD = [],
          VD = [];
        return DD = class extends RD {
          constructor() {
            super(...arguments), this.buttons = (0, pD.m)(this, AD, [0, 1, 2]), this.angularSensibilityX = ((0, pD.m)(this, UD), (0, pD.m)(this, fD, 1e3)), this.angularSensibilityY = ((0, pD.m)(this, ID), (0, pD.m)(this, BD, 1e3)), this.pinchPrecision = ((0, pD.m)(this, GD), (0, pD.m)(this, hD, 12)), this.pinchDeltaPercentage = ((0, pD.m)(this, nD), (0, pD.m)(this, MD, 0)), this.useNaturalPinchZoom = ((0, pD.m)(this, OD), (0, pD.m)(this, JD, !1)), this.panningSensibility = ((0, pD.m)(this, ED), (0, pD.m)(this, XD, 1e3)), this.pinchInwards = ((0, pD.m)(this, VD), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(DD, zD) {
            if (DD && zD) {
              const wD = zD.x - DD.x,
                pD = zD.y - DD.y,
                sD = this.camera.movement.input.getEntry("pointer", "pan"),
                KD = sD?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== KD && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -wD * KD, this.camera.movement.panAccumulatedPixels.y += pD * KD)
            }
          }
          _computePinchZoom(zD, wD) {
            const pD = this.camera.radius || DD.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = pD * Math.sqrt(zD) / Math.sqrt(wD);
            else if (this.pinchDeltaPercentage) {
              const DD = .001 * (wD - zD) * pD * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += DD
            } else {
              const DD = (wD - zD) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += DD
            }
          }
          onTouch(DD, zD, wD) {
            const pD = this._activeEntry ?? (this.camera.iI().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (pD)
              if ("pan" === pD.interaction) {
                const DD = pD.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== DD && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zD * DD, this.camera.movement.panAccumulatedPixels.y += wD * DD)
              } else if ("rotate" === pD.interaction) {
              const DD = pD.uF ?? pD.sensitivity ?? 1 / this.angularSensibilityX,
                sD = pD.vF ?? pD.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -zD * DD, this.camera.movement.rotationAccumulatedPixels.y += -wD * sD
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(DD, zD, wD, pD, sD, KD) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(pD) - Math.sqrt(wD)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(DD, zD, wD, pD, sD, KD)
          }
          onButtonDown(DD) {
            this._pointerConditions.button = DD.button, this._pointerModifiers.ctrl = DD.ctrlKey, this._pointerModifiers.alt = DD.altKey, this._pointerModifiers.shift = DD.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(DD)
          }
          onButtonUp(DD) {
            this._activeEntry = null, super.onButtonUp(DD)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const QD = "function" === typeof Symbol && Symbol.metadata ? Object.create(RD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: DD => "buttons" in DD,
              get: DD => DD.buttons,
              set: (DD, zD) => {
                DD.buttons = zD
              }
            },
            metadata: QD
          }, AD, UD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: DD => "angularSensibilityX" in DD,
              get: DD => DD.angularSensibilityX,
              set: (DD, zD) => {
                DD.angularSensibilityX = zD
              }
            },
            metadata: QD
          }, fD, ID), (0, pD.i)(null, null, KD, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: DD => "angularSensibilityY" in DD,
              get: DD => DD.angularSensibilityY,
              set: (DD, zD) => {
                DD.angularSensibilityY = zD
              }
            },
            metadata: QD
          }, BD, GD), (0, pD.i)(null, null, rD, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchPrecision" in DD,
              get: DD => DD.pinchPrecision,
              set: (DD, zD) => {
                DD.pinchPrecision = zD
              }
            },
            metadata: QD
          }, hD, nD), (0, pD.i)(null, null, LD, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchDeltaPercentage" in DD,
              get: DD => DD.pinchDeltaPercentage,
              set: (DD, zD) => {
                DD.pinchDeltaPercentage = zD
              }
            },
            metadata: QD
          }, MD, OD), (0, pD.i)(null, null, cD, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "useNaturalPinchZoom" in DD,
              get: DD => DD.useNaturalPinchZoom,
              set: (DD, zD) => {
                DD.useNaturalPinchZoom = zD
              }
            },
            metadata: QD
          }, JD, ED), (0, pD.i)(null, null, gD, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningSensibility" in DD,
              get: DD => DD.panningSensibility,
              set: (DD, zD) => {
                DD.panningSensibility = zD
              }
            },
            metadata: QD
          }, XD, VD), QD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QD
          })
        })(), DD.MinimumRadiusForPinch = .001, DD
      })();
    OD.d.ArcRotateCameraPointersInput = XD;
    var VD = wD(40108);
    let PD = (() => {
      var DD;
      let zD, wD, KD, LD, cD, gD, RD, AD, UD, fD, ID, BD = [],
        GD = [],
        hD = [],
        nD = [],
        MD = [],
        OD = [],
        ED = [],
        QD = [],
        XD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [];
      return DD = class {
        constructor() {
          this.camera = (0, pD.m)(this, BD), this.keysUp = (0, pD.m)(this, GD, [38]), this.keysDown = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, [40])), this.keysLeft = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, [37])), this.keysRight = ((0, pD.m)(this, ED), (0, pD.m)(this, QD, [39])), this.keysReset = ((0, pD.m)(this, XD), (0, pD.m)(this, PD, [220])), this.keysZoomIn = ((0, pD.m)(this, CD), (0, pD.m)(this, xD, [187, 107])), this.keysZoomOut = ((0, pD.m)(this, TD), (0, pD.m)(this, bD, [189, 109])), this.panningSensibility = ((0, pD.m)(this, jD), (0, pD.m)(this, dD, 50)), this.zoomingSensibility = ((0, pD.m)(this, SD), (0, pD.m)(this, iD, 25)), this.angularSpeed = ((0, pD.m)(this, lD), (0, pD.m)(this, WD, .01)), this._useAltToZoom = ((0, pD.m)(this, ND), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new rD.r, this._panDirection = new rD.r
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(DD) {
          this._useAltToZoom = DD, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const DD = this.camera.movement.input,
            zD = DD.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && zD ? DD.inputMap.splice(DD.inputMap.indexOf(zD), 1) : this._useAltToZoom && !zD && DD.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(DD) {
          DD = JD.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Ul(), this._engine = this._scene.iI(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zD => {
            const wD = zD.event;
            if (!wD.metaKey)
              if (zD.type === VD.d.KEYDOWN) {
                if (this._ctrlPressed = wD.ctrlKey, this._altPressed = wD.altKey, -1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysReset.indexOf(wD.keyCode) || -1 !== this.keysZoomIn.indexOf(wD.keyCode) || -1 !== this.keysZoomOut.indexOf(wD.keyCode)) {
                  -1 === this._keys.indexOf(wD.keyCode) && this._keys.push(wD.keyCode), wD.preventDefault && (DD || wD.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysReset.indexOf(wD.keyCode) || -1 !== this.keysZoomIn.indexOf(wD.keyCode) || -1 !== this.keysZoomOut.indexOf(wD.keyCode)) {
              const zD = this._keys.indexOf(wD.keyCode);
              zD >= 0 && this._keys.splice(zD, 1), wD.preventDefault && (DD || wD.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const DD = this.camera,
              zD = DD.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const wD = this._rotateDirection.set(0, 0),
              pD = this._panDirection.set(0, 0);
            let sD = 0,
              KD = 0;
            for (let rD = 0; rD < this._keys.length; rD++) {
              const LD = this._keys[rD];
              if (this._keyboardConditions.key = LD, -1 === this.keysReset.indexOf(LD)) {
                const DD = zD.resolveInteraction("keyboard", this._keyboardConditions);
                if (DD)
                  if ("pan" === DD.interaction) KD = Math.max(KD, DD.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(LD) ? pD.x -= 1 : -1 !== this.keysRight.indexOf(LD) ? pD.x += 1 : -1 !== this.keysUp.indexOf(LD) ? pD.y += 1 : -1 !== this.keysDown.indexOf(LD) && (pD.y -= 1);
                  else if ("zoom" === DD.interaction) {
                  const wD = DD.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(LD) || -1 !== this.keysZoomIn.indexOf(LD) ? zD.handlers.zoom(wD) : -1 === this.keysDown.indexOf(LD) && -1 === this.keysZoomOut.indexOf(LD) || zD.handlers.zoom(-wD)
                } else "rotate" === DD.interaction && (sD = Math.max(sD, DD.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(LD) ? wD.x -= 1 : -1 !== this.keysRight.indexOf(LD) ? wD.x += 1 : -1 !== this.keysUp.indexOf(LD) ? wD.y -= 1 : -1 !== this.keysDown.indexOf(LD) && (wD.y += 1))
              } - 1 !== this.keysReset.indexOf(LD) && DD.useInputToRestoreState && DD.restoreState()
            }
            0 === wD.x && 0 === wD.y || (wD.normalize().scaleInPlace(sD), zD.handlers.rotate(wD.x, wD.y)), 0 === pD.x && 0 === pD.y || (pD.normalize().scaleInPlace(KD), zD.handlers.pan(pD.x, pD.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], (0, pD.i)(DD, null, ID, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAltToZoom" in DD,
            get: DD => DD.useAltToZoom
          },
          metadata: rD
        }, null, BD), (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUp" in DD,
            get: DD => DD.keysUp,
            set: (DD, zD) => {
              DD.keysUp = zD
            }
          },
          metadata: rD
        }, GD, hD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDown" in DD,
            get: DD => DD.keysDown,
            set: (DD, zD) => {
              DD.keysDown = zD
            }
          },
          metadata: rD
        }, nD, MD), (0, pD.i)(null, null, KD, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysLeft" in DD,
            get: DD => DD.keysLeft,
            set: (DD, zD) => {
              DD.keysLeft = zD
            }
          },
          metadata: rD
        }, OD, ED), (0, pD.i)(null, null, LD, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRight" in DD,
            get: DD => DD.keysRight,
            set: (DD, zD) => {
              DD.keysRight = zD
            }
          },
          metadata: rD
        }, QD, XD), (0, pD.i)(null, null, cD, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysReset" in DD,
            get: DD => DD.keysReset,
            set: (DD, zD) => {
              DD.keysReset = zD
            }
          },
          metadata: rD
        }, PD, CD), (0, pD.i)(null, null, gD, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysZoomIn" in DD,
            get: DD => DD.keysZoomIn,
            set: (DD, zD) => {
              DD.keysZoomIn = zD
            }
          },
          metadata: rD
        }, xD, TD), (0, pD.i)(null, null, RD, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysZoomOut" in DD,
            get: DD => DD.keysZoomOut,
            set: (DD, zD) => {
              DD.keysZoomOut = zD
            }
          },
          metadata: rD
        }, bD, jD), (0, pD.i)(null, null, AD, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "panningSensibility" in DD,
            get: DD => DD.panningSensibility,
            set: (DD, zD) => {
              DD.panningSensibility = zD
            }
          },
          metadata: rD
        }, dD, SD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "zoomingSensibility" in DD,
            get: DD => DD.zoomingSensibility,
            set: (DD, zD) => {
              DD.zoomingSensibility = zD
            }
          },
          metadata: rD
        }, iD, lD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: DD => "angularSpeed" in DD,
            get: DD => DD.angularSpeed,
            set: (DD, zD) => {
              DD.angularSpeed = zD
            }
          },
          metadata: rD
        }, WD, ND), rD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rD
        })
      })(), DD
    })();
    OD.d.ArcRotateCameraKeyboardMoveInput = PD;
    var CD = wD(37754),
      xD = wD(40115);
    let TD = (() => {
      var DD;
      let zD, wD, KD, cD = [],
        gD = [],
        AD = [],
        fD = [],
        ID = [],
        BD = [];
      return DD = class {
        constructor() {
          this.wheelPrecision = (0, pD.m)(this, cD, 3), this.zoomToMouseLocation = ((0, pD.m)(this, gD), (0, pD.m)(this, AD, !1)), this.wheelDeltaPercentage = ((0, pD.m)(this, fD), (0, pD.m)(this, ID, 0)), this.customComputeDeltaFromMouseWheel = ((0, pD.m)(this, BD), null), this._viewOffset = new rD.s(0, 0, 0), this._globalOffset = new rD.s(0, 0, 0), this._inertialPanning = rD.s.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(DD, zD) {
          let wD;
          const pD = .01 * DD * this.wheelDeltaPercentage * zD;
          return wD = DD > 0 ? pD / (1 + this.wheelDeltaPercentage) : pD * (1 + this.wheelDeltaPercentage), wD
        }
        attachControl(DD) {
          DD = JD.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = zD => {
            if (zD.type !== RD.c.POINTERWHEEL) return;
            const wD = zD.event;
            let pD;
            const sD = wD.deltaMode === xD.e.DOM_DELTA_LINE ? 40 : 1,
              KD = -wD.deltaY * sD;
            if (this.customComputeDeltaFromMouseWheel) pD = this.customComputeDeltaFromMouseWheel(KD, this, wD);
            else if (this.wheelDeltaPercentage) {
              if (pD = this._computeDeltaFromMouseWheelLegacyEvent(KD, this.camera.radius), pD > 0) {
                const DD = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let zD = this.camera.radius,
                  wD = DD + pD;
                for (let pD = 0; pD < 20 && !(zD <= wD) && !(Math.abs(wD * this.camera.inertia) < .001); pD++) zD -= wD, wD *= this.camera.inertia;
                zD = (0, LD.Clamp)(zD, 0, Number.MAX_VALUE), pD = this._computeDeltaFromMouseWheelLegacyEvent(KD, zD)
              }
            } else {
              const DD = this.camera.movement.input.getEntry("wheel", "zoom");
              pD = KD * (DD?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            pD && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(pD)) : this.camera.movement.zoomAccumulatedPixels += pD), wD.preventDefault && (DD || wD.preventDefault())
          }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._wheel, RD.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I9(0)
        }
        detachControl() {
          this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const DD = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(DD.inertialAlphaOffset) + Math.abs(DD.inertialBetaOffset) + Math.abs(DD.inertialRadiusOffset)) {
            this._updateHitPlane(), DD.target.addInPlace(this._inertialPanning), DD.radius -= this._zoomToMouseRadiusOffset;
            const zD = DD.movement.getFrameIndependentDecay(DD.inertia);
            this._inertialPanning.scaleInPlace(zD), this._zoomToMouseRadiusOffset *= zD, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < UD.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const DD = this.camera,
            zD = DD.target.subtract(DD.position);
          this._hitPlane = CD.e.FromPositionAndNormal(DD.target, zD)
        }
        _getPosition() {
          const DD = this.camera,
            zD = DD.Ul(),
            wD = zD.createPickingRay(zD.pointerX, zD.pointerY, rD.e.Identity(), DD, !1);
          0 === DD.targetScreenOffset.x && 0 === DD.targetScreenOffset.y || (this._viewOffset.set(DD.targetScreenOffset.x, DD.targetScreenOffset.y, 0), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), this._globalOffset = rD.s.TransformNormal(this._viewOffset, DD._cameraTransformMatrix), wD.origin.addInPlace(this._globalOffset));
          let pD = 0;
          return this._hitPlane && (pD = wD.intersectsPlane(this._hitPlane) ?? 0), wD.origin.addInPlace(wD.direction.scaleInPlace(pD))
        }
        _zoomToMouse(DD) {
          const zD = this.camera,
            wD = 1 - zD.inertia,
            pD = zD.movement.getFrameIndependentInputScale(zD.inertia);
          if (zD.lowerRadiusLimit) {
            const sD = zD.lowerRadiusLimit ?? 0;
            zD.radius - (this._zoomToMouseRadiusOffset + DD * pD) / wD < sD && (DD = ((zD.radius - sD) * wD - this._zoomToMouseRadiusOffset) / pD)
          }
          if (zD.upperRadiusLimit) {
            const sD = zD.upperRadiusLimit ?? 0;
            zD.radius - (this._zoomToMouseRadiusOffset + DD * pD) / wD > sD && (DD = ((zD.radius - sD) * wD - this._zoomToMouseRadiusOffset) / pD)
          }
          const sD = DD / wD / zD.radius,
            KD = this._getPosition(),
            LD = rD.n.WI[6];
          KD.subtractToRef(zD.target, LD), LD.scaleInPlace(sD), LD.scaleInPlace(wD), LD.scaleInPlace(pD), this._inertialPanning.addInPlace(LD), this._zoomToMouseRadiusOffset += DD * pD
        }
        _zeroIfClose(DD) {
          Math.abs(DD.x) < UD.b && (DD.x = 0), Math.abs(DD.y) < UD.b && (DD.y = 0), Math.abs(DD.z) < UD.b && (DD.z = 0)
        }
      }, (() => {
        const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecision" in DD,
            get: DD => DD.wheelPrecision,
            set: (DD, zD) => {
              DD.wheelPrecision = zD
            }
          },
          metadata: rD
        }, cD, gD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: DD => "zoomToMouseLocation" in DD,
            get: DD => DD.zoomToMouseLocation,
            set: (DD, zD) => {
              DD.zoomToMouseLocation = zD
            }
          },
          metadata: rD
        }, AD, fD), (0, pD.i)(null, null, KD, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelDeltaPercentage" in DD,
            get: DD => DD.wheelDeltaPercentage,
            set: (DD, zD) => {
              DD.wheelDeltaPercentage = zD
            }
          },
          metadata: rD
        }, ID, BD), rD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rD
        })
      })(), DD
    })();
    OD.d.ArcRotateCameraMouseWheelInput = TD;
    var bD, jD, dD = wD(39808);
    class SD extends OD.h {
      constructor(DD) {
        super(DD)
      }
      addMouseWheel() {
        return this.add(new TD), this
      }
      addPointers() {
        return this.add(new XD), this
      }
      addKeyboard() {
        return this.add(new PD), this
      }
    }(bD = SD.prototype).addVRDeviceOrientation ?? (bD.addVRDeviceOrientation = (0, dD.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (jD = SD.prototype).addGamepad ?? (jD.addGamepad = (0, dD.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var iD = wD(37134),
      lD = wD(40162),
      WD = wD(40171);
    class ND extends lD.b {
      constructor(DD, zD, wD) {
        super(DD, zD, wD), this.input = new WD.d({
          pan: (DD, zD) => {
            this.panAccumulatedPixels.x += DD, this.panAccumulatedPixels.y += zD
          },
          rotate: (DD, zD) => {
            this.rotationAccumulatedPixels.x += DD, this.rotationAccumulatedPixels.y += zD
          },
          zoom: DD => {
            this.zoomAccumulatedPixels += DD
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

    function ZD(DD, zD) {
      return isNaN(DD) ? zD : DD
    }
    let yD = (() => {
        var DD;
        let zD, wD, cD, RD, AD, ID, BD, OD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, iD, lD, WD, yD, kD, mD, eD, oD, aD, uD = MD.g,
          vD = [],
          tD = [],
          FD = [],
          YD = [],
          HD = [],
          qD = [],
          Dz = [],
          zz = [],
          wz = [],
          pz = [],
          sz = [],
          Kz = [],
          rz = [],
          Lz = [],
          cz = [],
          gz = [],
          Rz = [],
          Az = [],
          Uz = [],
          fz = [],
          Iz = [],
          Bz = [],
          Gz = [],
          hz = [],
          nz = [],
          Mz = [],
          Oz = [],
          Jz = [],
          Ez = [],
          Qz = [],
          Xz = [],
          Vz = [],
          Pz = [],
          Cz = [],
          xz = [],
          Tz = [],
          bz = [],
          jz = [],
          dz = [],
          Sz = [],
          iz = [],
          lz = [],
          Wz = [],
          Nz = [],
          Zz = [],
          yz = [],
          kz = [];
        return DD = class extends uD {
          get target() {
            return this.bq
          }
          set target(DD) {
            this.setTarget(DD)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(DD) {
            DD && this.setTarget(DD)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(DD) {
            this.setPosition(DD)
          }
          set upVector(DD) {
            this._upToYMatrix || (this._yToUpMatrix = new rD.e, this._upToYMatrix = new rD.e, this._upVector = rD.s.Zero()), DD.normalize(), this._upVector.pC(DD), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            rD.e.RotationAlignToRef(rD.s.UpReadOnly, this._upVector, this._yToUpMatrix), rD.e.RotationAlignToRef(this._upVector, rD.s.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const DD = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialAlphaOffset(DD) {
            this._inertialAlphaOffset = DD, 0 === DD && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const DD = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialBetaOffset(DD) {
            this._inertialBetaOffset = DD, 0 === DD && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const DD = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialRadiusOffset(DD) {
            this._inertialRadiusOffset = DD, 0 === DD && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(DD) {
            this._panningInertia = DD, this.movement && (this.movement.panInertia = DD)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(DD) {
            this._inertia = DD, this.movement && (this.movement.rotationInertia = DD, this.movement.zoomInertia = DD)
          }
          get angularSensibilityX() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.angularSensibilityX : 0
          }
          set angularSensibilityX(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.angularSensibilityX = DD)
          }
          get angularSensibilityY() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.angularSensibilityY : 0
          }
          set angularSensibilityY(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.angularSensibilityY = DD)
          }
          get pinchPrecision() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.pinchPrecision : 0
          }
          set pinchPrecision(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.pinchPrecision = DD)
          }
          get pinchDeltaPercentage() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.pinchDeltaPercentage = DD)
          }
          get useNaturalPinchZoom() {
            const DD = this.inputs.attached.pointers;
            return !!DD && DD.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.useNaturalPinchZoom = DD)
          }
          get panningSensibility() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.panningSensibility : 0
          }
          set panningSensibility(DD) {
            const zD = this.inputs.attached.pointers;
            zD && (zD.panningSensibility = DD)
          }
          get keysUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUp : []
          }
          set keysUp(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysUp = DD)
          }
          get keysDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDown : []
          }
          set keysDown(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysDown = DD)
          }
          get keysLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysLeft : []
          }
          set keysLeft(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysLeft = DD)
          }
          get keysRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRight : []
          }
          set keysRight(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRight = DD)
          }
          get wheelPrecision() {
            const DD = this.inputs.attached.mousewheel;
            return DD ? DD.wheelPrecision : 0
          }
          set wheelPrecision(DD) {
            const zD = this.inputs.attached.mousewheel;
            zD && (zD.wheelPrecision = DD)
          }
          get zoomToMouseLocation() {
            const DD = this.inputs.attached.mousewheel;
            return !!DD && DD.zoomToMouseLocation
          }
          set zoomToMouseLocation(DD) {
            const zD = this.inputs.attached.mousewheel;
            zD && (zD.zoomToMouseLocation = DD)
          }
          get wheelDeltaPercentage() {
            const DD = this.inputs.attached.mousewheel;
            return DD ? DD.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(DD) {
            const zD = this.inputs.attached.mousewheel;
            zD && (zD.wheelDeltaPercentage = DD)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(DD) {
            this._useCtrlForPanningInternal = DD;
            const zD = this.movement.input,
              wD = zD.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !DD && wD ? zD.inputMap.splice(zD.inputMap.indexOf(wD), 1) : DD && !wD && zD.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const pD = zD.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !DD && pD ? zD.inputMap.splice(zD.inputMap.indexOf(pD), 1) : DD && !pD && zD.addEntry({
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
          set _panningMouseButton(DD) {
            this._panningMouseButtonInternal = DD;
            const zD = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            zD && (zD.button = DD)
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
          set useBouncingBehavior(DD) {
            DD !== this.useBouncingBehavior && (DD ? (this._bouncingBehavior = new GD, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(DD) {
            DD !== this.useFramingBehavior && (DD ? (this._framingBehavior = new hD, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(DD) {
            DD !== this.useAutoRotationBehavior && (DD ? (this._autoRotationBehavior = new fD, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(DD, zD, wD, sD, LD, cD) {
            var gD;
            let RD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(DD, rD.s.Zero(), cD, RD), gD = this, this.alpha = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, void 0)), this.beta = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, void 0)), this.radius = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, void 0)), this.overrideCloneAlphaBetaRadius = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, void 0)), this.bq = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, void 0)), this._targetHost = ((0, pD.m)(this, sz), (0, pD.m)(this, Kz, void 0)), this._upToYMatrix = (0, pD.m)(this, rz), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, pD.m)(this, Lz, null), this.upperAlphaLimit = ((0, pD.m)(this, cz), (0, pD.m)(this, gz, null)), this.lowerBetaLimit = ((0, pD.m)(this, Rz), (0, pD.m)(this, Az, .01)), this.upperBetaLimit = ((0, pD.m)(this, Uz), (0, pD.m)(this, fz, Math.PI - .01)), this.lowerRadiusLimit = ((0, pD.m)(this, Iz), (0, pD.m)(this, Bz, null)), this.upperRadiusLimit = ((0, pD.m)(this, Gz), (0, pD.m)(this, hz, null)), this.lowerTargetYLimit = ((0, pD.m)(this, nz), (0, pD.m)(this, Mz, -1 / 0)), this.inertialPanningX = ((0, pD.m)(this, Oz), (0, pD.m)(this, Jz, 0)), this.inertialPanningY = ((0, pD.m)(this, Ez), (0, pD.m)(this, Qz, 0)), this.pinchToPanMaxDistance = ((0, pD.m)(this, Xz), (0, pD.m)(this, Vz, 20)), this.panningDistanceLimit = ((0, pD.m)(this, Pz), (0, pD.m)(this, Cz, null)), this.panningOriginTarget = ((0, pD.m)(this, xz), (0, pD.m)(this, Tz, rD.s.Zero())), this._panningInertia = ((0, pD.m)(this, bz), .9), this._inertia = .9, this.zoomOnFactor = (0, pD.m)(this, jz, 1), this.targetScreenOffset = ((0, pD.m)(this, dz), (0, pD.m)(this, Sz, rD.r.Zero())), this.allowUpsideDown = ((0, pD.m)(this, iz), (0, pD.m)(this, lz, !0)), this.useInputToRestoreState = ((0, pD.m)(this, Wz), (0, pD.m)(this, Nz, !0)), this.restoreStateInterpolationFactor = ((0, pD.m)(this, Zz), (0, pD.m)(this, yz, 0)), this._currentInterpolationFactor = ((0, pD.m)(this, kz), 0), this._viewMatrix = new rD.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new rD.s(1, 1, 0), this._transformedDirection = new rD.s, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new KD.b, this.checkCollisions = !1, this.collisionRadius = new rD.s(.5, .5, .5), this._previousPosition = rD.s.Zero(), this._collisionVelocity = rD.s.Zero(), this._newPosition = rD.s.Zero(), this._computationVector = rD.s.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new rD.s(NaN, NaN, NaN), this._goalTargetScreenOffset = new rD.r(NaN, NaN), this._onCollisionPositionChange = function(DD, zD) {
              let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              wD ? (gD.setPosition(zD), gD.GU && gD.GU(wD)) : gD._previousPosition.pC(gD._position);
              const pD = Math.cos(gD.alpha),
                sD = Math.sin(gD.alpha),
                KD = Math.cos(gD.beta);
              let rD = Math.sin(gD.beta);
              0 === rD && (rD = 1e-4);
              const LD = gD._getTargetPosition();
              gD._computationVector.Z2(gD.radius * pD * rD, gD.radius * KD, gD.radius * sD * rD), LD.addToRef(gD._computationVector, gD._newPosition), gD._position.pC(gD._newPosition);
              let cD = gD.upVector;
              gD.allowUpsideDown && gD.beta < 0 && (cD = cD.clone(), cD = cD.ep()), gD._computeViewMatrix(gD._position, LD, cD), gD._viewMatrix.addAtIndex(12, gD.targetScreenOffset.x), gD._viewMatrix.addAtIndex(13, gD.targetScreenOffset.y), gD._collisionTriggered = !1
            }, this.bq = rD.s.Zero(), LD && this.setTarget(LD), this.alpha = zD, this.beta = wD, this.radius = sD, this.getViewMatrix(), this.inputs = new SD(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new ND(this.Ul(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.bq = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = rD.r.Zero()
          }
          _updateCache(DD) {
            DD || super._updateCache(), this._cache.bq.pC(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.pC(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const DD = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? DD.addToRef(this._targetBoundingCenter, this.bq) : this.bq.pC(DD)
            }
            const DD = this._getLockedTargetPosition();
            return DD || this.bq
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > UD.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              KD = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != KD ? this._currentInterpolationFactor = KD : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = ZD(DD, this._goalAlpha), this._goalBeta = ZD(zD, this._goalBeta), this._goalRadius = ZD(wD, this._goalRadius), this._goalTarget.set(ZD(pD.x, this._goalTarget.x), ZD(pD.y, this._goalTarget.y), ZD(pD.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(ZD(sD.x, this._goalTargetScreenOffset.x), ZD(sD.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, LD.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, LD.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, LD.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, LD.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.bq.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(DD, zD) {
            let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const sD = arguments;
            zD = JD.h.BackCompatCameraNoPreventDefault(sD), this._useCtrlForPanning = wD, this._panningMouseButton = pD, "boolean" === typeof sD[0] && (sD.length > 1 && (this._useCtrlForPanning = sD[1]), sD.length > 2 && (this._panningMouseButton = sD[2])), this.inputs.attachElement(zD), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(DD, zD, wD) {
            const pD = this.invertRotation ? -1 : 1;
            let sD = DD * this._calculateHandednessMultiplier();
            this.beta < 0 && (sD *= -1), this.alpha += sD * pD, this.beta += zD * pD, this.radius -= wD
          }
          _applyPanDelta(DD, zD) {
            const wD = rD.n.WI[0].Z2(DD, zD, zD);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), wD.multiplyInPlace(this.panningAxis), rD.s.TransformNormalToRef(wD, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const DD = this.upVector,
                zD = rD.s.CrossToRef(this._transformedDirection, DD, this._transformedDirection);
              rD.s.CrossToRef(DD, zD, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.bq);
                rD.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bq.pC(this._transformedDirection)
              } else {
                if (this.parent) {
                  const DD = rD.n.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(DD), DD.transposeToRef(DD), rD.s.TransformCoordinatesToRef(this._transformedDirection, DD, this._transformedDirection)
                }
                this.bq.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let DD = !1;
            this.movement.computeCurrentFrameDeltas();
            const zD = this.movement.rotationDeltaCurrentFrame,
              wD = this.movement.zoomDeltaCurrentFrame,
              pD = this.movement.panDeltaCurrentFrame;
            if (0 === zD.x && 0 === zD.y && 0 === wD && 0 === pD.x && 0 === pD.y || (DD = !0, 0 === zD.x && 0 === zD.y && 0 === wD || this._applyRotationAndZoomDelta(zD.x, zD.y, wD), 0 === pD.x && 0 === pD.y || this._applyPanDelta(pD.x, pD.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), DD = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const zD = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < zD && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < zD && (this.inertialPanningY = 0), DD = !0
            }
            if (DD) this.stopInterpolation();
            else if (this._isInterpolating) {
              let DD = !1;
              const zD = this._scene.iI().getDeltaTime() / 1e3,
                wD = 1 - Math.pow(2, -zD / this._currentInterpolationFactor),
                pD = ZD(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const zD = rD.n.WI[0].set(ZD(this._goalTarget.x, this.bq.x), ZD(this._goalTarget.y, this.bq.y), ZD(this._goalTarget.z, this.bq.z));
                rD.s.LerpToRef(this.target, zD, wD, this.bq), 10 * rD.s.Distance(this.target, zD) / pD < UD.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.pC(zD), this.setTarget(this.target, !1, !0, !0)) : DD = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const zD = rD.i.RotationAlphaBetaGammaToRef(ZD(this._goalAlpha, this.alpha), ZD(this._goalBeta, this.beta), 0, rD.n.Quaternion[0]),
                  pD = rD.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, rD.n.Quaternion[1]),
                  sD = rD.i.SlerpToRef(pD, zD, wD, rD.n.Quaternion[2]);
                sD.normalize();
                const KD = sD.toAlphaBetaGammaToRef(rD.n.WI[0]);
                if (this.alpha = KD.x, this.beta = KD.y, sD.isApprox(zD, UD.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const DD = zD.toAlphaBetaGammaToRef(rD.n.WI[0]);
                  this.alpha = DD.x, this.beta = DD.y
                } else DD = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (pD - this.radius) * wD, Math.abs(pD / this.radius - 1) < UD.b ? (this._goalRadius = NaN, this.radius = pD) : DD = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const zD = rD.n.Vector2[0].set(ZD(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ZD(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                rD.r.LerpToRef(this.targetScreenOffset, zD, wD, this.targetScreenOffset), rD.r.Distance(this.targetScreenOffset, zD) < UD.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.pC(zD)) : DD = !0
              }
              this._isInterpolating = DD
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || rD.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const DD = this.alpha;
            var zD, wD;
            this.alpha = function(DD) {
              let zD = Math.PI / 2;
              return 0 === DD.x && 0 === DD.z || (zD = Math.acos(DD.x / Math.sqrt(Math.pow(DD.x, 2) + Math.pow(DD.z, 2)))), DD.z < 0 && (zD = 2 * Math.PI - zD), zD
            }(this._computationVector), this.beta = (zD = this._computationVector.y, wD = this.radius, Math.acos(zD / wD));
            const pD = Math.round((DD - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * pD * Math.PI, this._checkLimits()
          }
          setPosition(DD) {
            this._position.equals(DD) || (this._position.pC(DD), this.rebuildAnglesAndRadius())
          }
          setTarget(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (pD = this.overrideCloneAlphaBetaRadius ?? pD, DD.computeWorldMatrix) zD && DD.FW ? this._targetBoundingCenter = DD.FW().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, DD.computeWorldMatrix(), this._targetHost = DD, this.bq = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const zD = DD,
                pD = this._getTargetPosition();
              if (pD && !wD && pD.equals(zD)) return;
              this._targetHost = null, this.bq = zD, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            pD || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const DD = Math.cos(this.alpha),
              zD = Math.sin(this.alpha),
              wD = Math.cos(this.beta);
            let pD = Math.sin(this.beta);
            0 === pD && (pD = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const sD = this._getTargetPosition();
            if (this._computationVector.Z2(this.radius * DD * pD, this.radius * wD, this.radius * zD * pD), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || rD.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), sD.addToRef(this._computationVector, this._newPosition), this.Ul().collisionsEnabled && this.checkCollisions) {
              const DD = this.Ul().collisionCoordinator;
              this._collider || (this._collider = DD.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, DD.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.pC(this._newPosition);
              let DD = this.upVector;
              this.allowUpsideDown && pD < 0 && (DD = DD.ep()), this._computeViewMatrix(this._position, sD, DD), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.pC(sD), this._viewMatrix
          }
          zoomOn(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            DD = DD || this.Ul().meshes;
            const wD = gD.e.MinMax(DD);
            let pD = this._calculateLowerRadiusFromModelBoundingSphere(wD.min, wD.max);
            if (pD = Math.max(Math.min(pD, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = pD * this.zoomOnFactor, this.mode === nD.c.ORTHOGRAPHIC_CAMERA) {
              const DD = this.Ul().iI().getAspectRatio(this),
                zD = pD * this.zoomOnFactor / 2;
              this.orthoLeft = -zD * DD, this.orthoRight = zD * DD, this.orthoBottom = -zD, this.orthoTop = zD
            }
            this.focusOn({
              min: wD.min,
              max: wD.max,
              distance: pD
            }, zD)
          }
          focusOn(DD) {
            let zD, wD, pD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === DD.min) {
              const pD = DD || this.Ul().meshes;
              zD = gD.e.MinMax(pD), wD = rD.s.Distance(zD.min, zD.max)
            } else {
              zD = DD, wD = DD.distance
            }
            this.bq = gD.e.Center(zD), pD || (this.maxZ = 2 * wD)
          }
          createRigCamera(zD, wD) {
            let pD = 0;
            switch (this.cameraRigMode) {
              case nD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case nD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case nD.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case nD.c.RIG_MODE_VR:
                pD = this._cameraRigParams.stereoHalfAngle * (0 === wD ? 1 : -1);
                break;
              case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                pD = this._cameraRigParams.stereoHalfAngle * (0 === wD ? -1 : 1)
            }
            const sD = new DD(zD, this.alpha + pD, this.beta, this.radius, this.bq, this.Ul());
            return sD._cameraRigParams = {}, sD.isRigCamera = !0, sD.rigParent = this, sD.upVector = this.upVector, sD.mode = this.mode, sD.orthoLeft = this.orthoLeft, sD.orthoRight = this.orthoRight, sD.orthoBottom = this.orthoBottom, sD.orthoTop = this.orthoTop, sD
          }
          _updateRigCameras() {
            const DD = this._rigCameras[0],
              zD = this._rigCameras[1];
            switch (DD.beta = zD.beta = this.beta, this.cameraRigMode) {
              case nD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case nD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case nD.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case nD.c.RIG_MODE_VR:
                DD.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, zD.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case nD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                DD.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, zD.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const pD = rD.s.Distance(DD, zD),
              sD = this.Ul().iI().getAspectRatio(this),
              KD = Math.tan(this.fov / 2),
              LD = KD * sD,
              cD = .5 * pD * wD,
              gD = cD * Math.sqrt(1 + 1 / (LD * LD)),
              RD = cD * Math.sqrt(1 + 1 / (KD * KD));
            return Math.max(gD, RD)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(uD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], cD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.B)("target")], ID = [(0, sD.q)("targetHost")], BD = [(0, sD.C)()], OD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], bD = [(0, sD.C)()], jD = [(0, sD.C)()], dD = [(0, sD.C)()], iD = [(0, sD.C)()], lD = [(0, sD.B)()], WD = [(0, sD.C)()], yD = [(0, sD.C)()], kD = [(0, sD.C)()], mD = [(0, sD.A)()], eD = [(0, sD.C)()], oD = [(0, sD.C)()], aD = [(0, sD.C)()], (0, pD.i)(DD, null, BD, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialAlphaOffset" in DD,
              get: DD => DD.inertialAlphaOffset
            },
            metadata: KD
          }, null, vD), (0, pD.i)(DD, null, OD, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialBetaOffset" in DD,
              get: DD => DD.inertialBetaOffset
            },
            metadata: KD
          }, null, vD), (0, pD.i)(DD, null, ED, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialRadiusOffset" in DD,
              get: DD => DD.inertialRadiusOffset
            },
            metadata: KD
          }, null, vD), (0, pD.i)(DD, null, WD, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningInertia" in DD,
              get: DD => DD.panningInertia
            },
            metadata: KD
          }, null, vD), (0, pD.i)(DD, null, yD, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: DD => "zoomToMouseLocation" in DD,
              get: DD => DD.zoomToMouseLocation
            },
            metadata: KD
          }, null, vD), (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "alpha" in DD,
              get: DD => DD.alpha,
              set: (DD, zD) => {
                DD.alpha = zD
              }
            },
            metadata: KD
          }, tD, FD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: DD => "beta" in DD,
              get: DD => DD.beta,
              set: (DD, zD) => {
                DD.beta = zD
              }
            },
            metadata: KD
          }, YD, HD), (0, pD.i)(null, null, cD, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: DD => "radius" in DD,
              get: DD => DD.radius,
              set: (DD, zD) => {
                DD.radius = zD
              }
            },
            metadata: KD
          }, qD, Dz), (0, pD.i)(null, null, RD, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: DD => "overrideCloneAlphaBetaRadius" in DD,
              get: DD => DD.overrideCloneAlphaBetaRadius,
              set: (DD, zD) => {
                DD.overrideCloneAlphaBetaRadius = zD
              }
            },
            metadata: KD
          }, zz, wz), (0, pD.i)(null, null, AD, {
            kind: "field",
            name: "bq",
            static: !1,
            private: !1,
            access: {
              has: DD => "bq" in DD,
              get: DD => DD.bq,
              set: (DD, zD) => {
                DD.bq = zD
              }
            },
            metadata: KD
          }, pz, sz), (0, pD.i)(null, null, ID, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: DD => "_targetHost" in DD,
              get: DD => DD._targetHost,
              set: (DD, zD) => {
                DD._targetHost = zD
              }
            },
            metadata: KD
          }, Kz, rz), (0, pD.i)(null, null, QD, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerAlphaLimit" in DD,
              get: DD => DD.lowerAlphaLimit,
              set: (DD, zD) => {
                DD.lowerAlphaLimit = zD
              }
            },
            metadata: KD
          }, Lz, cz), (0, pD.i)(null, null, XD, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperAlphaLimit" in DD,
              get: DD => DD.upperAlphaLimit,
              set: (DD, zD) => {
                DD.upperAlphaLimit = zD
              }
            },
            metadata: KD
          }, gz, Rz), (0, pD.i)(null, null, VD, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerBetaLimit" in DD,
              get: DD => DD.lowerBetaLimit,
              set: (DD, zD) => {
                DD.lowerBetaLimit = zD
              }
            },
            metadata: KD
          }, Az, Uz), (0, pD.i)(null, null, PD, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperBetaLimit" in DD,
              get: DD => DD.upperBetaLimit,
              set: (DD, zD) => {
                DD.upperBetaLimit = zD
              }
            },
            metadata: KD
          }, fz, Iz), (0, pD.i)(null, null, CD, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerRadiusLimit" in DD,
              get: DD => DD.lowerRadiusLimit,
              set: (DD, zD) => {
                DD.lowerRadiusLimit = zD
              }
            },
            metadata: KD
          }, Bz, Gz), (0, pD.i)(null, null, xD, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperRadiusLimit" in DD,
              get: DD => DD.upperRadiusLimit,
              set: (DD, zD) => {
                DD.upperRadiusLimit = zD
              }
            },
            metadata: KD
          }, hz, nz), (0, pD.i)(null, null, TD, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerTargetYLimit" in DD,
              get: DD => DD.lowerTargetYLimit,
              set: (DD, zD) => {
                DD.lowerTargetYLimit = zD
              }
            },
            metadata: KD
          }, Mz, Oz), (0, pD.i)(null, null, bD, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialPanningX" in DD,
              get: DD => DD.inertialPanningX,
              set: (DD, zD) => {
                DD.inertialPanningX = zD
              }
            },
            metadata: KD
          }, Jz, Ez), (0, pD.i)(null, null, jD, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialPanningY" in DD,
              get: DD => DD.inertialPanningY,
              set: (DD, zD) => {
                DD.inertialPanningY = zD
              }
            },
            metadata: KD
          }, Qz, Xz), (0, pD.i)(null, null, dD, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchToPanMaxDistance" in DD,
              get: DD => DD.pinchToPanMaxDistance,
              set: (DD, zD) => {
                DD.pinchToPanMaxDistance = zD
              }
            },
            metadata: KD
          }, Vz, Pz), (0, pD.i)(null, null, iD, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningDistanceLimit" in DD,
              get: DD => DD.panningDistanceLimit,
              set: (DD, zD) => {
                DD.panningDistanceLimit = zD
              }
            },
            metadata: KD
          }, Cz, xz), (0, pD.i)(null, null, lD, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningOriginTarget" in DD,
              get: DD => DD.panningOriginTarget,
              set: (DD, zD) => {
                DD.panningOriginTarget = zD
              }
            },
            metadata: KD
          }, Tz, bz), (0, pD.i)(null, null, kD, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: DD => "zoomOnFactor" in DD,
              get: DD => DD.zoomOnFactor,
              set: (DD, zD) => {
                DD.zoomOnFactor = zD
              }
            },
            metadata: KD
          }, jz, dz), (0, pD.i)(null, null, mD, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "targetScreenOffset" in DD,
              get: DD => DD.targetScreenOffset,
              set: (DD, zD) => {
                DD.targetScreenOffset = zD
              }
            },
            metadata: KD
          }, Sz, iz), (0, pD.i)(null, null, eD, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: DD => "allowUpsideDown" in DD,
              get: DD => DD.allowUpsideDown,
              set: (DD, zD) => {
                DD.allowUpsideDown = zD
              }
            },
            metadata: KD
          }, lz, Wz), (0, pD.i)(null, null, oD, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: DD => "useInputToRestoreState" in DD,
              get: DD => DD.useInputToRestoreState,
              set: (DD, zD) => {
                DD.useInputToRestoreState = zD
              }
            },
            metadata: KD
          }, Nz, Zz), (0, pD.i)(null, null, aD, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: DD => "restoreStateInterpolationFactor" in DD,
              get: DD => DD.restoreStateInterpolationFactor,
              set: (DD, zD) => {
                DD.restoreStateInterpolationFactor = zD
              }
            },
            metadata: KD
          }, yz, kz), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      kD = !1;
    kD || (kD = !0, cD.b.AddNodeConstructor("ArcRotateCamera", ((DD, zD) => () => new yD(DD, 0, 0, 1, rD.s.Zero(), zD))), (0, iD.i)("BABYLON.ArcRotateCamera", yD))
  },
  40183: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD.d
    });
    var pD = wD(40186);
    (0, pD.g)()
  },
  40186: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      g: () => UD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(37273),
      LD = wD(40189),
      cD = wD(40155),
      gD = wD(37134);
    let RD = (() => {
        var DD;
        let zD, wD, cD = LD.c,
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        return DD = class extends cD {
          constructor(DD, zD, wD, sD) {
            super(DD, wD, sD), this.groundColor = (0, pD.m)(this, gD, new rD.d(0, 0, 0)), this.direction = ((0, pD.m)(this, RD), (0, pD.m)(this, AD, void 0)), (0, pD.m)(this, UD), this.direction = zD || KD.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = KD.s.Normalize(DD.subtract(KD.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wD.x, wD.y, wD.z, 0, zD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zD), this
          }
          transferToNodeMaterialEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return DD.setFloat3(zD, wD.x, wD.y, wD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KD.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LD.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, zD) {
            DD["HEMILIGHT" + zD] = !0
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.k)()], wD = [(0, sD.B)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, zD) => {
                DD.groundColor = zD
              }
            },
            metadata: KD
          }, gD, RD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, zD) => {
                DD.direction = zD
              }
            },
            metadata: KD
          }, AD, UD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      AD = !1;

    function UD() {
      AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
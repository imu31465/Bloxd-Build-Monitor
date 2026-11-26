export const id = 285;
export const ids = [285];
export const modules = {
  42419: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => hV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38296),
      yV = xV(38269),
      pV = xV(38303),
      QV = xV(41486),
      nV = xV(41664),
      wV = xV(41433),
      ZV = xV(41154),
      vV = xV(38272);
    class rV {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(VV) {
        this._zoomStopsAnimation = VV
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(VV) {
        this._idleRotationSpeed = VV
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(VV) {
        this._idleRotationWaitTime = VV
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(VV) {
        this._idleRotationSpinupTime = VV
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
      attach(VV) {
        this._attachedCamera = VV;
        const eV = this._attachedCamera.dD();
        this._onPrePointerObservableObserver = eV.onPrePointerObservable.add((VV => {
          VV.type !== wV.b.POINTERDOWN ? VV.type === wV.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = VV.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const VV = ZV.b.Now;
          let eV = 0;
          null != this._lastFrameTime && (eV = VV - this._lastFrameTime), this._lastFrameTime = VV, this._applyUserInteraction();
          const xV = VV - this._lastInteractionTime - this._idleRotationWaitTime,
            JV = Math.max(Math.min(xV / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * JV, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (eV / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const VV = this._attachedCamera.dD();
        this._onPrePointerObservableObserver && VV.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(VV) {
        this._lastInteractionTime = VV ?? ZV.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < vV.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let VV = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (VV = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? VV : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = ZV.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    xV(42426);
    class kV {
      constructor() {
        this._easingMode = kV.EASINGMODE_EASEIN
      }
      setEasingMode(VV) {
        const eV = Math.min(Math.max(VV, 0), 2);
        this._easingMode = eV
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(VV) {
        throw new Error("You must implement this method")
      }
      ease(VV) {
        switch (this._easingMode) {
          case kV.EASINGMODE_EASEIN:
            return this.easeInCore(VV);
          case kV.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - VV)
        }
        return VV >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - VV))) + .5 : .5 * this.easeInCore(2 * VV)
      }
    }
    kV.EASINGMODE_EASEIN = 0, kV.EASINGMODE_EASEOUT = 1, kV.EASINGMODE_EASEINOUT = 2;
    var bV = xV(42433);
    class EV {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(VV) {
        if (this._autoTransitionRange === VV) return;
        this._autoTransitionRange = VV;
        const eV = this._attachedCamera;
        eV && (VV ? this._onMeshTargetChangedObserver = eV.onMeshTargetChangedObservable.add((VV => {
          if (VV && (VV.computeWorldMatrix(!0), VV.qL)) {
            const eV = VV.qL().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * eV, this.upperRadiusTransitionRange = .05 * eV
          }
        })) : this._onMeshTargetChangedObserver && eV.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(VV) {
        this._attachedCamera = VV, this._onAfterCheckInputsObserver = VV.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(VV) {
        return !!this._attachedCamera && (this._attachedCamera.radius === VV && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(VV) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (EV.EasingFunction.setEasingMode(EV.EasingMode), this._radiusBounceTransition = bV.c.CreateAnimation("radius", bV.c.ANIMATIONTYPE_FLOAT, 60, EV.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const eV = bV.c.TransitionTo("radius", this._attachedCamera.radius + VV, this._attachedCamera, this._attachedCamera.dD(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        eV && this._animatables.push(eV)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    EV.EasingFunction = new class extends kV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = VV
      }
      easeInCore(VV) {
        const eV = Math.max(0, this.amplitude);
        return Math.pow(VV, 3) - VV * eV * Math.sin(3.141592653589793 * VV)
      }
    }(.3), EV.EasingMode = kV.EASINGMODE_EASEOUT;
    class BV {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new UV.c, this._mode = BV.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(VV) {
        this._mode = VV
      }
      get mode() {
        return this._mode
      }
      set radiusScale(VV) {
        this._radiusScale = VV
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(VV) {
        this._positionScale = VV
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(VV) {
        this._defaultElevation = VV
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(VV) {
        this._elevationReturnTime = VV
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(VV) {
        this._elevationReturnWaitTime = VV
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(VV) {
        this._zoomStopsAnimation = VV
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(VV) {
        this._framingTime = VV
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(VV) {
        this._attachedCamera = VV;
        const eV = this._attachedCamera.dD();
        BV.EasingFunction.setEasingMode(BV.EasingMode), this._onPrePointerObservableObserver = eV.onPrePointerObservable.add((VV => {
          VV.type !== wV.b.POINTERDOWN ? VV.type === wV.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = VV.onMeshTargetChangedObservable.add((VV => {
          VV && VV.qL && this.zoomOnMesh(VV, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = VV.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const VV = this._attachedCamera.dD();
        this._onPrePointerObservableObserver && VV.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        VV.computeWorldMatrix(!0);
        const JV = VV.qL().boundingBox;
        this.zoomOnBoundingInfo(JV.minimumWorld, JV.maximumWorld, eV, xV)
      }
      zoomOnMeshHierarchy(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        VV.computeWorldMatrix(!0);
        const JV = VV.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(JV.min, JV.max, eV, xV)
      }
      zoomOnMeshesHierarchy(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const JV = new yV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          YV = new yV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let UV = 0; UV < VV.length; UV++) {
          const eV = VV[UV].getHierarchyBoundingVectors(!0);
          yV.o.CheckExtends(eV.min, JV, YV), yV.o.CheckExtends(eV.max, JV, YV)
        }
        this.zoomOnBoundingInfo(JV, YV, eV, xV)
      }
      zoomOnBoundingInfo(VV, eV) {
        let xV, JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const UV = VV.y,
          pV = UV + (eV.y - UV) * this._positionScale,
          QV = eV.subtract(VV).scale(.5);
        if (!isFinite(pV)) return !1;
        if (JV) xV = new yV.o(0, pV, 0);
        else {
          const eV = VV.add(QV);
          xV = new yV.o(eV.x, pV, eV.z)
        }
        this._vectorTransition || (this._vectorTransition = bV.c.CreateAnimation("target", bV.c.ANIMATIONTYPE_VECTOR3, 60, BV.EasingFunction)), this._betaIsAnimating = !0;
        let nV = bV.c.TransitionTo("target", xV, this._attachedCamera, this._attachedCamera.dD(), 60, this._vectorTransition, this._framingTime);
        nV && this._animatables.push(nV);
        let wV = 0;
        if (this._mode === BV.FitFrustumSidesMode) {
          const xV = this._calculateLowerRadiusFromModelBoundingSphere(VV, eV);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = QV.length() + this._attachedCamera.minZ), wV = xV
        } else this._mode === BV.IgnoreBoundsSizeMode && (wV = this._calculateLowerRadiusFromModelBoundingSphere(VV, eV), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const xV = eV.subtract(VV).length();
          this._attachedCamera.panningSensibility = 5e3 / xV, this._attachedCamera.wheelPrecision = 100 / wV
        }
        return this._radiusTransition || (this._radiusTransition = bV.c.CreateAnimation("radius", bV.c.ANIMATIONTYPE_FLOAT, 60, BV.EasingFunction)), nV = bV.c.TransitionTo("radius", wV, this._attachedCamera, this._attachedCamera.dD(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), YV && YV(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), nV && this._animatables.push(nV), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(VV, eV) {
        const xV = this._attachedCamera;
        if (!xV) return 0;
        let JV = xV._calculateLowerRadiusFromModelBoundingSphere(VV, eV, this._radiusScale);
        return xV.lowerRadiusLimit && this._mode === BV.IgnoreBoundsSizeMode && (JV = JV < xV.lowerRadiusLimit ? xV.lowerRadiusLimit : JV), xV.upperRadiusLimit && (JV = JV > xV.upperRadiusLimit ? xV.upperRadiusLimit : JV), JV
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const VV = ZV.b.Now - this._lastInteractionTime,
          eV = .5 * Math.PI - this._defaultElevation,
          xV = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > xV && VV >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = bV.c.CreateAnimation("beta", bV.c.ANIMATIONTYPE_FLOAT, 60, BV.EasingFunction));
          const VV = bV.c.TransitionTo("beta", eV, this._attachedCamera, this._attachedCamera.dD(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          VV && this._animatables.push(VV)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = ZV.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    BV.EasingFunction = new class extends kV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = VV
      }
      easeInCore(VV) {
        return this.exponent <= 0 ? VV : (Math.exp(this.exponent * VV) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, BV.EasingMode = kV.EASINGMODE_EASEINOUT, BV.IgnoreBoundsSizeMode = 0, BV.FitFrustumSidesMode = 1;
    var jV = xV(41478),
      qV = xV(41470),
      tV = xV(41506),
      FV = xV(41341);
    let TV = (() => {
        var VV;
        let eV, xV = [],
          UV = [];
        return VV = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, JV.l)(this, xV, [0, 1, 2]), this._pointerInput = (0, JV.l)(this, UV)
          }
          attachControl(VV) {
            VV = FV.j.BackCompatCameraNoPreventDefault(arguments);
            const eV = this.camera.sk(),
              xV = eV.getInputElement();
            let JV = 0,
              YV = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = UV => {
              const yV = UV.event,
                pV = "touch" === yV.pointerType;
              if (UV.type !== wV.b.POINTERMOVE && -1 === this.buttons.indexOf(yV.button)) return;
              const QV = yV.target;
              if (this._altKey = yV.altKey, this._ctrlKey = yV.ctrlKey, this._metaKey = yV.metaKey, this._shiftKey = yV.shiftKey, this._buttonsPressed = yV.buttons, eV.isPointerLock) {
                const VV = yV.movementX,
                  eV = yV.movementY;
                this.onTouch(null, VV, eV), this._pointA = null, this._pointB = null
              } else {
                if (UV.type !== wV.b.POINTERDOWN && UV.type !== wV.b.POINTERDOUBLETAP && pV && this._pointA?.pointerId !== yV.pointerId && this._pointB?.pointerId !== yV.pointerId) return;
                if (UV.type !== wV.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !pV)
                  if (UV.type === wV.b.POINTERDOUBLETAP) this.onDoubleTap(yV.pointerType, yV);
                  else if (UV.type !== wV.b.POINTERUP || this._currentMousePointerIdDown !== yV.pointerId && !pV) {
                  if (UV.type === wV.b.POINTERMOVE)
                    if (VV || yV.preventDefault(), this._pointA && null === this._pointB) {
                      const VV = yV.clientX - this._pointA.x,
                        eV = yV.clientY - this._pointA.y;
                      this._pointA.x = yV.clientX, this._pointA.y = yV.clientY, this.onTouch(this._pointA, VV, eV)
                    } else if (this._pointA && this._pointB) {
                    const VV = this._pointA.pointerId === yV.pointerId ? this._pointA : this._pointB;
                    VV.x = yV.clientX, VV.y = yV.clientY;
                    const eV = this._pointA.x - this._pointB.x,
                      xV = this._pointA.y - this._pointB.y,
                      pV = eV * eV + xV * xV,
                      QV = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: yV.pointerId,
                        type: UV.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, JV, pV, YV, QV), YV = QV, JV = pV
                  }
                } else {
                  try {
                    QV?.releasePointerCapture(yV.pointerId)
                  } catch (nV) {}
                  pV || (this._pointB = null), eV._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == yV.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == yV.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== JV || YV) && (this.onMultiTouch(this._pointA, this._pointB, JV, 0, YV, null), JV = 0, YV = null), this._currentMousePointerIdDown = -1, this.onButtonUp(yV), VV || yV.preventDefault()
                } else {
                  try {
                    QV?.setPointerCapture(yV.pointerId)
                  } catch (nV) {}
                  if (null === this._pointA) this._pointA = {
                    x: yV.clientX,
                    y: yV.clientY,
                    pointerId: yV.pointerId,
                    type: yV.pointerType,
                    button: yV.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: yV.clientX,
                      y: yV.clientY,
                      pointerId: yV.pointerId,
                      type: yV.pointerType,
                      button: yV.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || pV || (this._currentMousePointerIdDown = yV.pointerId), this.onButtonDown(yV), VV || (yV.preventDefault(), xV && xV.focus())
                }
              }
            }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._pointerInput, wV.b.POINTERDOWN | wV.b.POINTERUP | wV.b.POINTERMOVE | wV.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, JV = 0, YV = null, this.onLostFocus()
            }, this._contextMenuBind = VV => this.onContextMenu(VV), xV && xV.addEventListener("contextmenu", this._contextMenuBind, !1);
            const UV = this.camera.dD().sk().getHostWindow();
            UV && FV.j.RegisterTopRootEvents(UV, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const VV = this.camera.dD().sk().getHostWindow();
              VV && FV.j.UnregisterTopRootEvents(VV, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const VV = this.camera.dD().sk().getInputElement();
                VV && VV.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(VV, eV) {}
          onTouch(VV, eV, xV) {}
          onMultiTouch(VV, eV, xV, JV, YV, UV) {}
          onContextMenu(VV) {
            VV.preventDefault()
          }
          onButtonDown(VV) {}
          onButtonUp(VV) {}
          onLostFocus() {}
        }, (() => {
          const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          eV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: VV => "buttons" in VV,
              get: VV => VV.buttons,
              set: (VV, eV) => {
                VV.buttons = eV
              }
            },
            metadata: yV
          }, xV, UV), yV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yV
          })
        })(), VV
      })(),
      PV = (() => {
        var VV;
        let eV, xV, UV, yV = TV,
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        return VV = class extends yV {
          constructor() {
            super(...arguments), this.pinchZoom = (0, JV.l)(this, pV, !0), this.multiTouchPanning = ((0, JV.l)(this, QV), (0, JV.l)(this, nV, !0)), this.multiTouchPanAndZoom = ((0, JV.l)(this, wV), (0, JV.l)(this, ZV, !0)), this._isPinching = ((0, JV.l)(this, vV), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(VV, eV) {}
          _computeMultiTouchPanning(VV, eV) {}
          onMultiTouch(VV, eV, xV, JV, YV, UV) {
            0 === xV && null === YV || 0 === JV && null === UV || (this.multiTouchPanAndZoom ? (this._computePinchZoom(xV, JV), this._computeMultiTouchPanning(YV, UV)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(xV, JV), this._isPinching = !0) : this._computeMultiTouchPanning(YV, UV)) : this.multiTouchPanning ? this._computeMultiTouchPanning(YV, UV) : this.pinchZoom && this._computePinchZoom(xV, JV))
          }
          onButtonUp(VV) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(yV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: VV => "pinchZoom" in VV,
              get: VV => VV.pinchZoom,
              set: (VV, eV) => {
                VV.pinchZoom = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: VV => "multiTouchPanning" in VV,
              get: VV => VV.multiTouchPanning,
              set: (VV, eV) => {
                VV.multiTouchPanning = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, JV.i)(null, null, UV, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: VV => "multiTouchPanAndZoom" in VV,
              get: VV => VV.multiTouchPanAndZoom,
              set: (VV, eV) => {
                VV.multiTouchPanAndZoom = eV
              }
            },
            metadata: rV
          }, ZV, vV), rV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          })
        })(), VV
      })(),
      AV = (() => {
        var VV;
        let eV, xV, UV, yV, pV, QV, nV, wV = PV,
          ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [],
          BV = [],
          jV = [],
          qV = [],
          tV = [],
          FV = [],
          TV = [],
          AV = [],
          NV = [];
        return VV = class extends wV {
          constructor() {
            super(...arguments), this.buttons = (0, JV.l)(this, ZV, [0, 1, 2]), this.angularSensibilityX = ((0, JV.l)(this, vV), (0, JV.l)(this, rV, 1e3)), this.angularSensibilityY = ((0, JV.l)(this, kV), (0, JV.l)(this, bV, 1e3)), this.pinchPrecision = ((0, JV.l)(this, EV), (0, JV.l)(this, BV, 12)), this.pinchDeltaPercentage = ((0, JV.l)(this, jV), (0, JV.l)(this, qV, 0)), this.useNaturalPinchZoom = ((0, JV.l)(this, tV), (0, JV.l)(this, FV, !1)), this.panningSensibility = ((0, JV.l)(this, TV), (0, JV.l)(this, AV, 1e3)), this.pinchInwards = ((0, JV.l)(this, NV), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(VV, eV) {
            if (VV && eV) {
              const xV = eV.x - VV.x,
                JV = eV.y - VV.y,
                YV = this.camera.movement.input.getEntry("pointer", "pan"),
                UV = YV?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== UV && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -xV * UV, this.camera.movement.panAccumulatedPixels.y += JV * UV)
            }
          }
          _computePinchZoom(eV, xV) {
            const JV = this.camera.radius || VV.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = JV * Math.sqrt(eV) / Math.sqrt(xV);
            else if (this.pinchDeltaPercentage) {
              const VV = .001 * (xV - eV) * JV * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += VV
            } else {
              const VV = (xV - eV) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += VV
            }
          }
          onTouch(VV, eV, xV) {
            const JV = this._activeEntry ?? (this.camera.sk().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (JV)
              if ("pan" === JV.interaction) {
                const VV = JV.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== VV && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -eV * VV, this.camera.movement.panAccumulatedPixels.y += xV * VV)
              } else if ("rotate" === JV.interaction) {
              const VV = JV.W8 ?? JV.sensitivity ?? 1 / this.angularSensibilityX,
                YV = JV.K8 ?? JV.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -eV * VV, this.camera.movement.rotationAccumulatedPixels.y += -xV * YV
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(VV, eV, xV, JV, YV, UV) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(JV) - Math.sqrt(xV)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(VV, eV, xV, JV, YV, UV)
          }
          onButtonDown(VV) {
            this._pointerConditions.button = VV.button, this._pointerModifiers.ctrl = VV.ctrlKey, this._pointerModifiers.alt = VV.altKey, this._pointerModifiers.shift = VV.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(VV)
          }
          onButtonUp(VV) {
            this._activeEntry = null, super.onButtonUp(VV)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const PV = "function" === typeof Symbol && Symbol.metadata ? Object.create(wV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: VV => "buttons" in VV,
              get: VV => VV.buttons,
              set: (VV, eV) => {
                VV.buttons = eV
              }
            },
            metadata: PV
          }, ZV, vV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: VV => "angularSensibilityX" in VV,
              get: VV => VV.angularSensibilityX,
              set: (VV, eV) => {
                VV.angularSensibilityX = eV
              }
            },
            metadata: PV
          }, rV, kV), (0, JV.i)(null, null, UV, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: VV => "angularSensibilityY" in VV,
              get: VV => VV.angularSensibilityY,
              set: (VV, eV) => {
                VV.angularSensibilityY = eV
              }
            },
            metadata: PV
          }, bV, EV), (0, JV.i)(null, null, yV, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: VV => "pinchPrecision" in VV,
              get: VV => VV.pinchPrecision,
              set: (VV, eV) => {
                VV.pinchPrecision = eV
              }
            },
            metadata: PV
          }, BV, jV), (0, JV.i)(null, null, pV, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: VV => "pinchDeltaPercentage" in VV,
              get: VV => VV.pinchDeltaPercentage,
              set: (VV, eV) => {
                VV.pinchDeltaPercentage = eV
              }
            },
            metadata: PV
          }, qV, tV), (0, JV.i)(null, null, QV, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: VV => "useNaturalPinchZoom" in VV,
              get: VV => VV.useNaturalPinchZoom,
              set: (VV, eV) => {
                VV.useNaturalPinchZoom = eV
              }
            },
            metadata: PV
          }, FV, TV), (0, JV.i)(null, null, nV, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: VV => "panningSensibility" in VV,
              get: VV => VV.panningSensibility,
              set: (VV, eV) => {
                VV.panningSensibility = eV
              }
            },
            metadata: PV
          }, AV, NV), PV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PV
          })
        })(), VV.MinimumRadiusForPinch = .001, VV
      })();
    tV.b.ArcRotateCameraPointersInput = AV;
    var NV = xV(41439);
    let XV = (() => {
      var VV;
      let eV, xV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, bV = [],
        EV = [],
        BV = [],
        jV = [],
        qV = [],
        tV = [],
        TV = [],
        PV = [],
        AV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [];
      return VV = class {
        constructor() {
          this.camera = (0, JV.l)(this, bV), this.keysUp = (0, JV.l)(this, EV, [38]), this.keysDown = ((0, JV.l)(this, BV), (0, JV.l)(this, jV, [40])), this.keysLeft = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, [37])), this.keysRight = ((0, JV.l)(this, TV), (0, JV.l)(this, PV, [39])), this.keysReset = ((0, JV.l)(this, AV), (0, JV.l)(this, XV, [220])), this.keysZoomIn = ((0, JV.l)(this, MV), (0, JV.l)(this, zV, [187, 107])), this.keysZoomOut = ((0, JV.l)(this, GV), (0, JV.l)(this, WV, [189, 109])), this.panningSensibility = ((0, JV.l)(this, RV), (0, JV.l)(this, gV, 50)), this.zoomingSensibility = ((0, JV.l)(this, DV), (0, JV.l)(this, iV, 25)), this.angularSpeed = ((0, JV.l)(this, CV), (0, JV.l)(this, aV, .01)), this._useAltToZoom = ((0, JV.l)(this, oV), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new yV.n, this._panDirection = new yV.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(VV) {
          this._useAltToZoom = VV, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const VV = this.camera.movement.input,
            eV = VV.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && eV ? VV.inputMap.splice(VV.inputMap.indexOf(eV), 1) : this._useAltToZoom && !eV && VV.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(VV) {
          VV = FV.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.dD(), this._engine = this._scene.sk(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((eV => {
            const xV = eV.event;
            if (!xV.metaKey)
              if (eV.type === NV.d.KEYDOWN) {
                if (this._ctrlPressed = xV.ctrlKey, this._altPressed = xV.altKey, -1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysReset.indexOf(xV.keyCode) || -1 !== this.keysZoomIn.indexOf(xV.keyCode) || -1 !== this.keysZoomOut.indexOf(xV.keyCode)) {
                  -1 === this._keys.indexOf(xV.keyCode) && this._keys.push(xV.keyCode), xV.preventDefault && (VV || xV.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysReset.indexOf(xV.keyCode) || -1 !== this.keysZoomIn.indexOf(xV.keyCode) || -1 !== this.keysZoomOut.indexOf(xV.keyCode)) {
              const eV = this._keys.indexOf(xV.keyCode);
              eV >= 0 && this._keys.splice(eV, 1), xV.preventDefault && (VV || xV.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const VV = this.camera,
              eV = VV.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const xV = this._rotateDirection.set(0, 0),
              JV = this._panDirection.set(0, 0);
            let YV = 0,
              UV = 0;
            for (let yV = 0; yV < this._keys.length; yV++) {
              const pV = this._keys[yV];
              if (this._keyboardConditions.key = pV, -1 === this.keysReset.indexOf(pV)) {
                const VV = eV.resolveInteraction("keyboard", this._keyboardConditions);
                if (VV)
                  if ("pan" === VV.interaction) UV = Math.max(UV, VV.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(pV) ? JV.x -= 1 : -1 !== this.keysRight.indexOf(pV) ? JV.x += 1 : -1 !== this.keysUp.indexOf(pV) ? JV.y += 1 : -1 !== this.keysDown.indexOf(pV) && (JV.y -= 1);
                  else if ("zoom" === VV.interaction) {
                  const xV = VV.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(pV) || -1 !== this.keysZoomIn.indexOf(pV) ? eV.handlers.zoom(xV) : -1 === this.keysDown.indexOf(pV) && -1 === this.keysZoomOut.indexOf(pV) || eV.handlers.zoom(-xV)
                } else "rotate" === VV.interaction && (YV = Math.max(YV, VV.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(pV) ? xV.x -= 1 : -1 !== this.keysRight.indexOf(pV) ? xV.x += 1 : -1 !== this.keysUp.indexOf(pV) ? xV.y -= 1 : -1 !== this.keysDown.indexOf(pV) && (xV.y += 1))
              } - 1 !== this.keysReset.indexOf(pV) && VV.useInputToRestoreState && VV.restoreState()
            }
            0 === xV.x && 0 === xV.y || (xV.normalize().scaleInPlace(YV), eV.handlers.rotate(xV.x, xV.y)), 0 === JV.x && 0 === JV.y || (JV.normalize().scaleInPlace(UV), eV.handlers.pan(JV.x, JV.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], (0, JV.i)(VV, null, kV, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAltToZoom" in VV,
            get: VV => VV.useAltToZoom
          },
          metadata: yV
        }, null, bV), (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysUp" in VV,
            get: VV => VV.keysUp,
            set: (VV, eV) => {
              VV.keysUp = eV
            }
          },
          metadata: yV
        }, EV, BV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysDown" in VV,
            get: VV => VV.keysDown,
            set: (VV, eV) => {
              VV.keysDown = eV
            }
          },
          metadata: yV
        }, jV, qV), (0, JV.i)(null, null, UV, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysLeft" in VV,
            get: VV => VV.keysLeft,
            set: (VV, eV) => {
              VV.keysLeft = eV
            }
          },
          metadata: yV
        }, tV, TV), (0, JV.i)(null, null, pV, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRight" in VV,
            get: VV => VV.keysRight,
            set: (VV, eV) => {
              VV.keysRight = eV
            }
          },
          metadata: yV
        }, PV, AV), (0, JV.i)(null, null, QV, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysReset" in VV,
            get: VV => VV.keysReset,
            set: (VV, eV) => {
              VV.keysReset = eV
            }
          },
          metadata: yV
        }, XV, MV), (0, JV.i)(null, null, nV, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysZoomIn" in VV,
            get: VV => VV.keysZoomIn,
            set: (VV, eV) => {
              VV.keysZoomIn = eV
            }
          },
          metadata: yV
        }, zV, GV), (0, JV.i)(null, null, wV, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysZoomOut" in VV,
            get: VV => VV.keysZoomOut,
            set: (VV, eV) => {
              VV.keysZoomOut = eV
            }
          },
          metadata: yV
        }, WV, RV), (0, JV.i)(null, null, ZV, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: VV => "panningSensibility" in VV,
            get: VV => VV.panningSensibility,
            set: (VV, eV) => {
              VV.panningSensibility = eV
            }
          },
          metadata: yV
        }, gV, DV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: VV => "zoomingSensibility" in VV,
            get: VV => VV.zoomingSensibility,
            set: (VV, eV) => {
              VV.zoomingSensibility = eV
            }
          },
          metadata: yV
        }, iV, CV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: VV => "angularSpeed" in VV,
            get: VV => VV.angularSpeed,
            set: (VV, eV) => {
              VV.angularSpeed = eV
            }
          },
          metadata: yV
        }, aV, oV), yV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yV
        })
      })(), VV
    })();
    tV.b.ArcRotateCameraKeyboardMoveInput = XV;
    var MV = xV(38917),
      zV = xV(41445);
    let GV = (() => {
      var VV;
      let eV, xV, UV, QV = [],
        nV = [],
        ZV = [],
        rV = [],
        kV = [],
        bV = [];
      return VV = class {
        constructor() {
          this.wheelPrecision = (0, JV.l)(this, QV, 3), this.zoomToMouseLocation = ((0, JV.l)(this, nV), (0, JV.l)(this, ZV, !1)), this.wheelDeltaPercentage = ((0, JV.l)(this, rV), (0, JV.l)(this, kV, 0)), this.customComputeDeltaFromMouseWheel = ((0, JV.l)(this, bV), null), this._viewOffset = new yV.o(0, 0, 0), this._globalOffset = new yV.o(0, 0, 0), this._inertialPanning = yV.o.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(VV, eV) {
          let xV;
          const JV = .01 * VV * this.wheelDeltaPercentage * eV;
          return xV = VV > 0 ? JV / (1 + this.wheelDeltaPercentage) : JV * (1 + this.wheelDeltaPercentage), xV
        }
        attachControl(VV) {
          VV = FV.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = eV => {
            if (eV.type !== wV.b.POINTERWHEEL) return;
            const xV = eV.event;
            let JV;
            const YV = xV.deltaMode === zV.b.DOM_DELTA_LINE ? 40 : 1,
              UV = -xV.deltaY * YV;
            if (this.customComputeDeltaFromMouseWheel) JV = this.customComputeDeltaFromMouseWheel(UV, this, xV);
            else if (this.wheelDeltaPercentage) {
              if (JV = this._computeDeltaFromMouseWheelLegacyEvent(UV, this.camera.radius), JV > 0) {
                const VV = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let eV = this.camera.radius,
                  xV = VV + JV;
                for (let JV = 0; JV < 20 && !(eV <= xV) && !(Math.abs(xV * this.camera.inertia) < .001); JV++) eV -= xV, xV *= this.camera.inertia;
                eV = (0, pV.Clamp)(eV, 0, Number.MAX_VALUE), JV = this._computeDeltaFromMouseWheelLegacyEvent(UV, eV)
              }
            } else {
              const VV = this.camera.movement.input.getEntry("wheel", "zoom");
              JV = UV * (VV?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            JV && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(JV)) : this.camera.movement.zoomAccumulatedPixels += JV), xV.preventDefault && (VV || xV.preventDefault())
          }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._wheel, wV.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.HVV(0)
        }
        detachControl() {
          this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const VV = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(VV.inertialAlphaOffset) + Math.abs(VV.inertialBetaOffset) + Math.abs(VV.inertialRadiusOffset)) {
            this._updateHitPlane(), VV.target.addInPlace(this._inertialPanning), VV.radius -= this._zoomToMouseRadiusOffset;
            const eV = VV.movement.getFrameIndependentDecay(VV.inertia);
            this._inertialPanning.scaleInPlace(eV), this._zoomToMouseRadiusOffset *= eV, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < vV.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const VV = this.camera,
            eV = VV.target.subtract(VV.position);
          this._hitPlane = MV.d.FromPositionAndNormal(VV.target, eV)
        }
        _getPosition() {
          const VV = this.camera,
            eV = VV.dD(),
            xV = eV.createPickingRay(eV.pointerX, eV.pointerY, yV.d.Identity(), VV, !1);
          0 === VV.targetScreenOffset.x && 0 === VV.targetScreenOffset.y || (this._viewOffset.set(VV.targetScreenOffset.x, VV.targetScreenOffset.y, 0), VV.getViewMatrix().invertToRef(VV._cameraTransformMatrix), this._globalOffset = yV.o.TransformNormal(this._viewOffset, VV._cameraTransformMatrix), xV.origin.addInPlace(this._globalOffset));
          let JV = 0;
          return this._hitPlane && (JV = xV.intersectsPlane(this._hitPlane) ?? 0), xV.origin.addInPlace(xV.direction.scaleInPlace(JV))
        }
        _zoomToMouse(VV) {
          const eV = this.camera,
            xV = 1 - eV.inertia,
            JV = eV.movement.getFrameIndependentInputScale(eV.inertia);
          if (eV.lowerRadiusLimit) {
            const YV = eV.lowerRadiusLimit ?? 0;
            eV.radius - (this._zoomToMouseRadiusOffset + VV * JV) / xV < YV && (VV = ((eV.radius - YV) * xV - this._zoomToMouseRadiusOffset) / JV)
          }
          if (eV.upperRadiusLimit) {
            const YV = eV.upperRadiusLimit ?? 0;
            eV.radius - (this._zoomToMouseRadiusOffset + VV * JV) / xV > YV && (VV = ((eV.radius - YV) * xV - this._zoomToMouseRadiusOffset) / JV)
          }
          const YV = VV / xV / eV.radius,
            UV = this._getPosition(),
            pV = yV.l.Ik[6];
          UV.subtractToRef(eV.target, pV), pV.scaleInPlace(YV), pV.scaleInPlace(xV), pV.scaleInPlace(JV), this._inertialPanning.addInPlace(pV), this._zoomToMouseRadiusOffset += VV * JV
        }
        _zeroIfClose(VV) {
          Math.abs(VV.x) < vV.b && (VV.x = 0), Math.abs(VV.y) < vV.b && (VV.y = 0), Math.abs(VV.z) < vV.b && (VV.z = 0)
        }
      }, (() => {
        const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelPrecision" in VV,
            get: VV => VV.wheelPrecision,
            set: (VV, eV) => {
              VV.wheelPrecision = eV
            }
          },
          metadata: yV
        }, QV, nV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: VV => "zoomToMouseLocation" in VV,
            get: VV => VV.zoomToMouseLocation,
            set: (VV, eV) => {
              VV.zoomToMouseLocation = eV
            }
          },
          metadata: yV
        }, ZV, rV), (0, JV.i)(null, null, UV, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelDeltaPercentage" in VV,
            get: VV => VV.wheelDeltaPercentage,
            set: (VV, eV) => {
              VV.wheelDeltaPercentage = eV
            }
          },
          metadata: yV
        }, kV, bV), yV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yV
        })
      })(), VV
    })();
    tV.b.ArcRotateCameraMouseWheelInput = GV;
    var WV, RV, gV = xV(41138);
    class DV extends tV.e {
      constructor(VV) {
        super(VV)
      }
      addMouseWheel() {
        return this.add(new GV), this
      }
      addPointers() {
        return this.add(new AV), this
      }
      addKeyboard() {
        return this.add(new XV), this
      }
    }(WV = DV.prototype).addVRDeviceOrientation ?? (WV.addVRDeviceOrientation = (0, gV.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (RV = DV.prototype).addGamepad ?? (RV.addGamepad = (0, gV.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var iV = xV(38318),
      CV = xV(41494),
      aV = xV(41499);
    class oV extends CV.e {
      constructor(VV, eV, xV) {
        super(VV, eV, xV), this.input = new aV.b({
          pan: (VV, eV) => {
            this.panAccumulatedPixels.x += VV, this.panAccumulatedPixels.y += eV
          },
          rotate: (VV, eV) => {
            this.rotationAccumulatedPixels.x += VV, this.rotationAccumulatedPixels.y += eV
          },
          zoom: VV => {
            this.zoomAccumulatedPixels += VV
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

    function cV(VV, eV) {
      return isNaN(VV) ? eV : VV
    }
    let hV = (() => {
        var VV;
        let eV, xV, QV, wV, ZV, kV, bV, tV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, iV, CV, aV, hV, lV, LV, fV, mV, KV, HV = qV.g,
          uV = [],
          sV = [],
          SV = [],
          IV = [],
          dV = [],
          OV = [],
          Ve = [],
          ee = [],
          xe = [],
          Je = [],
          Ye = [],
          Ue = [],
          ye = [],
          pe = [],
          Qe = [],
          ne = [],
          we = [],
          Ze = [],
          ve = [],
          re = [],
          ke = [],
          be = [],
          Ee = [],
          Be = [],
          je = [],
          qe = [],
          te = [],
          Fe = [],
          Te = [],
          Pe = [],
          Ae = [],
          Ne = [],
          Xe = [],
          Me = [],
          ze = [],
          Ge = [],
          We = [],
          Re = [],
          ge = [],
          De = [],
          ie = [],
          Ce = [],
          ae = [],
          oe = [],
          ce = [],
          he = [],
          le = [];
        return VV = class extends HV {
          get target() {
            return this.CZ
          }
          set target(VV) {
            this.setTarget(VV)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(VV) {
            VV && this.setTarget(VV)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(VV) {
            this.setPosition(VV)
          }
          set upVector(VV) {
            this._upToYMatrix || (this._yToUpMatrix = new yV.d, this._upToYMatrix = new yV.d, this._upVector = yV.o.Zero()), VV.normalize(), this._upVector.iG(VV), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            yV.d.RotationAlignToRef(yV.o.UpReadOnly, this._upVector, this._yToUpMatrix), yV.d.RotationAlignToRef(this._upVector, yV.o.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const VV = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(VV) < this._rotationEpsilon ? 0 : VV
          }
          set inertialAlphaOffset(VV) {
            this._inertialAlphaOffset = VV, 0 === VV && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const VV = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(VV) < this._rotationEpsilon ? 0 : VV
          }
          set inertialBetaOffset(VV) {
            this._inertialBetaOffset = VV, 0 === VV && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const VV = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(VV) < this._rotationEpsilon ? 0 : VV
          }
          set inertialRadiusOffset(VV) {
            this._inertialRadiusOffset = VV, 0 === VV && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(VV) {
            this._panningInertia = VV, this.movement && (this.movement.panInertia = VV)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(VV) {
            this._inertia = VV, this.movement && (this.movement.rotationInertia = VV, this.movement.zoomInertia = VV)
          }
          get angularSensibilityX() {
            const VV = this.inputs.attached.pointers;
            return VV ? VV.angularSensibilityX : 0
          }
          set angularSensibilityX(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.angularSensibilityX = VV)
          }
          get angularSensibilityY() {
            const VV = this.inputs.attached.pointers;
            return VV ? VV.angularSensibilityY : 0
          }
          set angularSensibilityY(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.angularSensibilityY = VV)
          }
          get pinchPrecision() {
            const VV = this.inputs.attached.pointers;
            return VV ? VV.pinchPrecision : 0
          }
          set pinchPrecision(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.pinchPrecision = VV)
          }
          get pinchDeltaPercentage() {
            const VV = this.inputs.attached.pointers;
            return VV ? VV.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.pinchDeltaPercentage = VV)
          }
          get useNaturalPinchZoom() {
            const VV = this.inputs.attached.pointers;
            return !!VV && VV.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.useNaturalPinchZoom = VV)
          }
          get panningSensibility() {
            const VV = this.inputs.attached.pointers;
            return VV ? VV.panningSensibility : 0
          }
          set panningSensibility(VV) {
            const eV = this.inputs.attached.pointers;
            eV && (eV.panningSensibility = VV)
          }
          get keysUp() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysUp : []
          }
          set keysUp(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysUp = VV)
          }
          get keysDown() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysDown : []
          }
          set keysDown(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysDown = VV)
          }
          get keysLeft() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysLeft : []
          }
          set keysLeft(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysLeft = VV)
          }
          get keysRight() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRight : []
          }
          set keysRight(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRight = VV)
          }
          get wheelPrecision() {
            const VV = this.inputs.attached.mousewheel;
            return VV ? VV.wheelPrecision : 0
          }
          set wheelPrecision(VV) {
            const eV = this.inputs.attached.mousewheel;
            eV && (eV.wheelPrecision = VV)
          }
          get zoomToMouseLocation() {
            const VV = this.inputs.attached.mousewheel;
            return !!VV && VV.zoomToMouseLocation
          }
          set zoomToMouseLocation(VV) {
            const eV = this.inputs.attached.mousewheel;
            eV && (eV.zoomToMouseLocation = VV)
          }
          get wheelDeltaPercentage() {
            const VV = this.inputs.attached.mousewheel;
            return VV ? VV.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(VV) {
            const eV = this.inputs.attached.mousewheel;
            eV && (eV.wheelDeltaPercentage = VV)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(VV) {
            this._useCtrlForPanningInternal = VV;
            const eV = this.movement.input,
              xV = eV.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !VV && xV ? eV.inputMap.splice(eV.inputMap.indexOf(xV), 1) : VV && !xV && eV.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const JV = eV.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !VV && JV ? eV.inputMap.splice(eV.inputMap.indexOf(JV), 1) : VV && !JV && eV.addEntry({
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
          set _panningMouseButton(VV) {
            this._panningMouseButtonInternal = VV;
            const eV = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            eV && (eV.button = VV)
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
          set useBouncingBehavior(VV) {
            VV !== this.useBouncingBehavior && (VV ? (this._bouncingBehavior = new EV, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(VV) {
            VV !== this.useFramingBehavior && (VV ? (this._framingBehavior = new BV, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(VV) {
            VV !== this.useAutoRotationBehavior && (VV ? (this._autoRotationBehavior = new rV, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(VV, eV, xV, YV, pV, QV) {
            var nV;
            let wV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(VV, yV.o.Zero(), QV, wV), nV = this, this.alpha = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, void 0)), this.beta = ((0, JV.l)(this, SV), (0, JV.l)(this, IV, void 0)), this.radius = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, void 0)), this.overrideCloneAlphaBetaRadius = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, void 0)), this.CZ = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, void 0)), this._targetHost = ((0, JV.l)(this, Ye), (0, JV.l)(this, Ue, void 0)), this._upToYMatrix = (0, JV.l)(this, ye), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, JV.l)(this, pe, null), this.upperAlphaLimit = ((0, JV.l)(this, Qe), (0, JV.l)(this, ne, null)), this.lowerBetaLimit = ((0, JV.l)(this, we), (0, JV.l)(this, Ze, .01)), this.upperBetaLimit = ((0, JV.l)(this, ve), (0, JV.l)(this, re, Math.PI - .01)), this.lowerRadiusLimit = ((0, JV.l)(this, ke), (0, JV.l)(this, be, null)), this.upperRadiusLimit = ((0, JV.l)(this, Ee), (0, JV.l)(this, Be, null)), this.lowerTargetYLimit = ((0, JV.l)(this, je), (0, JV.l)(this, qe, -1 / 0)), this.inertialPanningX = ((0, JV.l)(this, te), (0, JV.l)(this, Fe, 0)), this.inertialPanningY = ((0, JV.l)(this, Te), (0, JV.l)(this, Pe, 0)), this.pinchToPanMaxDistance = ((0, JV.l)(this, Ae), (0, JV.l)(this, Ne, 20)), this.panningDistanceLimit = ((0, JV.l)(this, Xe), (0, JV.l)(this, Me, null)), this.panningOriginTarget = ((0, JV.l)(this, ze), (0, JV.l)(this, Ge, yV.o.Zero())), this._panningInertia = ((0, JV.l)(this, We), .9), this._inertia = .9, this.zoomOnFactor = (0, JV.l)(this, Re, 1), this.targetScreenOffset = ((0, JV.l)(this, ge), (0, JV.l)(this, De, yV.n.Zero())), this.allowUpsideDown = ((0, JV.l)(this, ie), (0, JV.l)(this, Ce, !0)), this.useInputToRestoreState = ((0, JV.l)(this, ae), (0, JV.l)(this, oe, !0)), this.restoreStateInterpolationFactor = ((0, JV.l)(this, ce), (0, JV.l)(this, he, 0)), this._currentInterpolationFactor = ((0, JV.l)(this, le), 0), this._viewMatrix = new yV.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new yV.o(1, 1, 0), this._transformedDirection = new yV.o, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new UV.c, this.checkCollisions = !1, this.collisionRadius = new yV.o(.5, .5, .5), this._previousPosition = yV.o.Zero(), this._collisionVelocity = yV.o.Zero(), this._newPosition = yV.o.Zero(), this._computationVector = yV.o.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new yV.o(NaN, NaN, NaN), this._goalTargetScreenOffset = new yV.n(NaN, NaN), this._onCollisionPositionChange = function(VV, eV) {
              let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              xV ? (nV.setPosition(eV), nV.hv && nV.hv(xV)) : nV._previousPosition.iG(nV._position);
              const JV = Math.cos(nV.alpha),
                YV = Math.sin(nV.alpha),
                UV = Math.cos(nV.beta);
              let yV = Math.sin(nV.beta);
              0 === yV && (yV = 1e-4);
              const pV = nV._getTargetPosition();
              nV._computationVector.FeV(nV.radius * JV * yV, nV.radius * UV, nV.radius * YV * yV), pV.addToRef(nV._computationVector, nV._newPosition), nV._position.iG(nV._newPosition);
              let QV = nV.upVector;
              nV.allowUpsideDown && nV.beta < 0 && (QV = QV.clone(), QV = QV.gr()), nV._computeViewMatrix(nV._position, pV, QV), nV._viewMatrix.addAtIndex(12, nV.targetScreenOffset.x), nV._viewMatrix.addAtIndex(13, nV.targetScreenOffset.y), nV._collisionTriggered = !1
            }, this.CZ = yV.o.Zero(), pV && this.setTarget(pV), this.alpha = eV, this.beta = xV, this.radius = YV, this.getViewMatrix(), this.inputs = new DV(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new oV(this.dD(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.CZ = new yV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = yV.n.Zero()
          }
          _updateCache(VV) {
            VV || super._updateCache(), this._cache.CZ.iG(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.iG(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const VV = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? VV.addToRef(this._targetBoundingCenter, this.CZ) : this.CZ.iG(VV)
            }
            const VV = this._getLockedTargetPosition();
            return VV || this.CZ
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > vV.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              UV = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != UV ? this._currentInterpolationFactor = UV : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = cV(VV, this._goalAlpha), this._goalBeta = cV(eV, this._goalBeta), this._goalRadius = cV(xV, this._goalRadius), this._goalTarget.set(cV(JV.x, this._goalTarget.x), cV(JV.y, this._goalTarget.y), cV(JV.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(cV(YV.x, this._goalTargetScreenOffset.x), cV(YV.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, pV.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, pV.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, pV.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, pV.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.CZ.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(VV, eV) {
            let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const YV = arguments;
            eV = FV.j.BackCompatCameraNoPreventDefault(YV), this._useCtrlForPanning = xV, this._panningMouseButton = JV, "boolean" === typeof YV[0] && (YV.length > 1 && (this._useCtrlForPanning = YV[1]), YV.length > 2 && (this._panningMouseButton = YV[2])), this.inputs.attachElement(eV), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(VV, eV, xV) {
            const JV = this.invertRotation ? -1 : 1;
            let YV = VV * this._calculateHandednessMultiplier();
            this.beta < 0 && (YV *= -1), this.alpha += YV * JV, this.beta += eV * JV, this.radius -= xV
          }
          _applyPanDelta(VV, eV) {
            const xV = yV.l.Ik[0].FeV(VV, eV, eV);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), xV.multiplyInPlace(this.panningAxis), yV.o.TransformNormalToRef(xV, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const VV = this.upVector,
                eV = yV.o.CrossToRef(this._transformedDirection, VV, this._transformedDirection);
              yV.o.CrossToRef(VV, eV, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.CZ);
                yV.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.CZ.iG(this._transformedDirection)
              } else {
                if (this.parent) {
                  const VV = yV.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(VV), VV.transposeToRef(VV), yV.o.TransformCoordinatesToRef(this._transformedDirection, VV, this._transformedDirection)
                }
                this.CZ.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let VV = !1;
            this.movement.computeCurrentFrameDeltas();
            const eV = this.movement.rotationDeltaCurrentFrame,
              xV = this.movement.zoomDeltaCurrentFrame,
              JV = this.movement.panDeltaCurrentFrame;
            if (0 === eV.x && 0 === eV.y && 0 === xV && 0 === JV.x && 0 === JV.y || (VV = !0, 0 === eV.x && 0 === eV.y && 0 === xV || this._applyRotationAndZoomDelta(eV.x, eV.y, xV), 0 === JV.x && 0 === JV.y || this._applyPanDelta(JV.x, JV.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), VV = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const eV = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < eV && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < eV && (this.inertialPanningY = 0), VV = !0
            }
            if (VV) this.stopInterpolation();
            else if (this._isInterpolating) {
              let VV = !1;
              const eV = this._scene.sk().getDeltaTime() / 1e3,
                xV = 1 - Math.pow(2, -eV / this._currentInterpolationFactor),
                JV = cV(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const eV = yV.l.Ik[0].set(cV(this._goalTarget.x, this.CZ.x), cV(this._goalTarget.y, this.CZ.y), cV(this._goalTarget.z, this.CZ.z));
                yV.o.LerpToRef(this.target, eV, xV, this.CZ), 10 * yV.o.Distance(this.target, eV) / JV < vV.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.iG(eV), this.setTarget(this.target, !1, !0, !0)) : VV = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const eV = yV.h.RotationAlphaBetaGammaToRef(cV(this._goalAlpha, this.alpha), cV(this._goalBeta, this.beta), 0, yV.l.Quaternion[0]),
                  JV = yV.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yV.l.Quaternion[1]),
                  YV = yV.h.SlerpToRef(JV, eV, xV, yV.l.Quaternion[2]);
                YV.normalize();
                const UV = YV.toAlphaBetaGammaToRef(yV.l.Ik[0]);
                if (this.alpha = UV.x, this.beta = UV.y, YV.isApprox(eV, vV.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const VV = eV.toAlphaBetaGammaToRef(yV.l.Ik[0]);
                  this.alpha = VV.x, this.beta = VV.y
                } else VV = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (JV - this.radius) * xV, Math.abs(JV / this.radius - 1) < vV.b ? (this._goalRadius = NaN, this.radius = JV) : VV = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const eV = yV.l.Vector2[0].set(cV(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), cV(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                yV.n.LerpToRef(this.targetScreenOffset, eV, xV, this.targetScreenOffset), yV.n.Distance(this.targetScreenOffset, eV) < vV.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.iG(eV)) : VV = !0
              }
              this._isInterpolating = VV
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yV.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const VV = this.alpha;
            var eV, xV;
            this.alpha = function(VV) {
              let eV = Math.PI / 2;
              return 0 === VV.x && 0 === VV.z || (eV = Math.acos(VV.x / Math.sqrt(Math.pow(VV.x, 2) + Math.pow(VV.z, 2)))), VV.z < 0 && (eV = 2 * Math.PI - eV), eV
            }(this._computationVector), this.beta = (eV = this._computationVector.y, xV = this.radius, Math.acos(eV / xV));
            const JV = Math.round((VV - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * JV * Math.PI, this._checkLimits()
          }
          setPosition(VV) {
            this._position.equals(VV) || (this._position.iG(VV), this.rebuildAnglesAndRadius())
          }
          setTarget(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (JV = this.overrideCloneAlphaBetaRadius ?? JV, VV.computeWorldMatrix) eV && VV.qL ? this._targetBoundingCenter = VV.qL().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, VV.computeWorldMatrix(), this._targetHost = VV, this.CZ = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const eV = VV,
                JV = this._getTargetPosition();
              if (JV && !xV && JV.equals(eV)) return;
              this._targetHost = null, this.CZ = eV, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            JV || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const VV = Math.cos(this.alpha),
              eV = Math.sin(this.alpha),
              xV = Math.cos(this.beta);
            let JV = Math.sin(this.beta);
            0 === JV && (JV = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const YV = this._getTargetPosition();
            if (this._computationVector.FeV(this.radius * VV * JV, this.radius * xV, this.radius * eV * JV), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yV.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), YV.addToRef(this._computationVector, this._newPosition), this.dD().collisionsEnabled && this.checkCollisions) {
              const VV = this.dD().collisionCoordinator;
              this._collider || (this._collider = VV.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, VV.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.iG(this._newPosition);
              let VV = this.upVector;
              this.allowUpsideDown && JV < 0 && (VV = VV.gr()), this._computeViewMatrix(this._position, YV, VV), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.iG(YV), this._viewMatrix
          }
          zoomOn(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            VV = VV || this.dD().meshes;
            const xV = nV.b.MinMax(VV);
            let JV = this._calculateLowerRadiusFromModelBoundingSphere(xV.min, xV.max);
            if (JV = Math.max(Math.min(JV, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = JV * this.zoomOnFactor, this.mode === jV.c.ORTHOGRAPHIC_CAMERA) {
              const VV = this.dD().sk().getAspectRatio(this),
                eV = JV * this.zoomOnFactor / 2;
              this.orthoLeft = -eV * VV, this.orthoRight = eV * VV, this.orthoBottom = -eV, this.orthoTop = eV
            }
            this.focusOn({
              min: xV.min,
              max: xV.max,
              distance: JV
            }, eV)
          }
          focusOn(VV) {
            let eV, xV, JV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === VV.min) {
              const JV = VV || this.dD().meshes;
              eV = nV.b.MinMax(JV), xV = yV.o.Distance(eV.min, eV.max)
            } else {
              eV = VV, xV = VV.distance
            }
            this.CZ = nV.b.Center(eV), JV || (this.maxZ = 2 * xV)
          }
          createRigCamera(eV, xV) {
            let JV = 0;
            switch (this.cameraRigMode) {
              case jV.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case jV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case jV.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case jV.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case jV.c.RIG_MODE_VR:
                JV = this._cameraRigParams.stereoHalfAngle * (0 === xV ? 1 : -1);
                break;
              case jV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                JV = this._cameraRigParams.stereoHalfAngle * (0 === xV ? -1 : 1)
            }
            const YV = new VV(eV, this.alpha + JV, this.beta, this.radius, this.CZ, this.dD());
            return YV._cameraRigParams = {}, YV.isRigCamera = !0, YV.rigParent = this, YV.upVector = this.upVector, YV.mode = this.mode, YV.orthoLeft = this.orthoLeft, YV.orthoRight = this.orthoRight, YV.orthoBottom = this.orthoBottom, YV.orthoTop = this.orthoTop, YV
          }
          _updateRigCameras() {
            const VV = this._rigCameras[0],
              eV = this._rigCameras[1];
            switch (VV.beta = eV.beta = this.beta, this.cameraRigMode) {
              case jV.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case jV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case jV.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case jV.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case jV.c.RIG_MODE_VR:
                VV.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, eV.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case jV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                VV.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, eV.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const JV = yV.o.Distance(VV, eV),
              YV = this.dD().sk().getAspectRatio(this),
              UV = Math.tan(this.fov / 2),
              pV = UV * YV,
              QV = .5 * JV * xV,
              nV = QV * Math.sqrt(1 + 1 / (pV * pV)),
              wV = QV * Math.sqrt(1 + 1 / (UV * UV));
            return Math.max(nV, wV)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(HV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], QV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.I)("target")], kV = [(0, YV.C)("targetHost")], bV = [(0, YV.J)()], tV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], RV = [(0, YV.J)()], gV = [(0, YV.J)()], iV = [(0, YV.J)()], CV = [(0, YV.I)()], aV = [(0, YV.J)()], hV = [(0, YV.J)()], lV = [(0, YV.J)()], LV = [(0, YV.H)()], fV = [(0, YV.J)()], mV = [(0, YV.J)()], KV = [(0, YV.J)()], (0, JV.i)(VV, null, bV, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "inertialAlphaOffset" in VV,
              get: VV => VV.inertialAlphaOffset
            },
            metadata: UV
          }, null, uV), (0, JV.i)(VV, null, tV, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "inertialBetaOffset" in VV,
              get: VV => VV.inertialBetaOffset
            },
            metadata: UV
          }, null, uV), (0, JV.i)(VV, null, TV, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "inertialRadiusOffset" in VV,
              get: VV => VV.inertialRadiusOffset
            },
            metadata: UV
          }, null, uV), (0, JV.i)(VV, null, aV, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: VV => "panningInertia" in VV,
              get: VV => VV.panningInertia
            },
            metadata: UV
          }, null, uV), (0, JV.i)(VV, null, hV, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: VV => "zoomToMouseLocation" in VV,
              get: VV => VV.zoomToMouseLocation
            },
            metadata: UV
          }, null, uV), (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "alpha" in VV,
              get: VV => VV.alpha,
              set: (VV, eV) => {
                VV.alpha = eV
              }
            },
            metadata: UV
          }, sV, SV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: VV => "beta" in VV,
              get: VV => VV.beta,
              set: (VV, eV) => {
                VV.beta = eV
              }
            },
            metadata: UV
          }, IV, dV), (0, JV.i)(null, null, QV, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: VV => "radius" in VV,
              get: VV => VV.radius,
              set: (VV, eV) => {
                VV.radius = eV
              }
            },
            metadata: UV
          }, OV, Ve), (0, JV.i)(null, null, wV, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: VV => "overrideCloneAlphaBetaRadius" in VV,
              get: VV => VV.overrideCloneAlphaBetaRadius,
              set: (VV, eV) => {
                VV.overrideCloneAlphaBetaRadius = eV
              }
            },
            metadata: UV
          }, ee, xe), (0, JV.i)(null, null, ZV, {
            kind: "field",
            name: "CZ",
            static: !1,
            private: !1,
            access: {
              has: VV => "CZ" in VV,
              get: VV => VV.CZ,
              set: (VV, eV) => {
                VV.CZ = eV
              }
            },
            metadata: UV
          }, Je, Ye), (0, JV.i)(null, null, kV, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: VV => "_targetHost" in VV,
              get: VV => VV._targetHost,
              set: (VV, eV) => {
                VV._targetHost = eV
              }
            },
            metadata: UV
          }, Ue, ye), (0, JV.i)(null, null, PV, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "lowerAlphaLimit" in VV,
              get: VV => VV.lowerAlphaLimit,
              set: (VV, eV) => {
                VV.lowerAlphaLimit = eV
              }
            },
            metadata: UV
          }, pe, Qe), (0, JV.i)(null, null, AV, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "upperAlphaLimit" in VV,
              get: VV => VV.upperAlphaLimit,
              set: (VV, eV) => {
                VV.upperAlphaLimit = eV
              }
            },
            metadata: UV
          }, ne, we), (0, JV.i)(null, null, NV, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "lowerBetaLimit" in VV,
              get: VV => VV.lowerBetaLimit,
              set: (VV, eV) => {
                VV.lowerBetaLimit = eV
              }
            },
            metadata: UV
          }, Ze, ve), (0, JV.i)(null, null, XV, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "upperBetaLimit" in VV,
              get: VV => VV.upperBetaLimit,
              set: (VV, eV) => {
                VV.upperBetaLimit = eV
              }
            },
            metadata: UV
          }, re, ke), (0, JV.i)(null, null, MV, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "lowerRadiusLimit" in VV,
              get: VV => VV.lowerRadiusLimit,
              set: (VV, eV) => {
                VV.lowerRadiusLimit = eV
              }
            },
            metadata: UV
          }, be, Ee), (0, JV.i)(null, null, zV, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "upperRadiusLimit" in VV,
              get: VV => VV.upperRadiusLimit,
              set: (VV, eV) => {
                VV.upperRadiusLimit = eV
              }
            },
            metadata: UV
          }, Be, je), (0, JV.i)(null, null, GV, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "lowerTargetYLimit" in VV,
              get: VV => VV.lowerTargetYLimit,
              set: (VV, eV) => {
                VV.lowerTargetYLimit = eV
              }
            },
            metadata: UV
          }, qe, te), (0, JV.i)(null, null, WV, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: VV => "inertialPanningX" in VV,
              get: VV => VV.inertialPanningX,
              set: (VV, eV) => {
                VV.inertialPanningX = eV
              }
            },
            metadata: UV
          }, Fe, Te), (0, JV.i)(null, null, RV, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: VV => "inertialPanningY" in VV,
              get: VV => VV.inertialPanningY,
              set: (VV, eV) => {
                VV.inertialPanningY = eV
              }
            },
            metadata: UV
          }, Pe, Ae), (0, JV.i)(null, null, gV, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: VV => "pinchToPanMaxDistance" in VV,
              get: VV => VV.pinchToPanMaxDistance,
              set: (VV, eV) => {
                VV.pinchToPanMaxDistance = eV
              }
            },
            metadata: UV
          }, Ne, Xe), (0, JV.i)(null, null, iV, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: VV => "panningDistanceLimit" in VV,
              get: VV => VV.panningDistanceLimit,
              set: (VV, eV) => {
                VV.panningDistanceLimit = eV
              }
            },
            metadata: UV
          }, Me, ze), (0, JV.i)(null, null, CV, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: VV => "panningOriginTarget" in VV,
              get: VV => VV.panningOriginTarget,
              set: (VV, eV) => {
                VV.panningOriginTarget = eV
              }
            },
            metadata: UV
          }, Ge, We), (0, JV.i)(null, null, lV, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: VV => "zoomOnFactor" in VV,
              get: VV => VV.zoomOnFactor,
              set: (VV, eV) => {
                VV.zoomOnFactor = eV
              }
            },
            metadata: UV
          }, Re, ge), (0, JV.i)(null, null, LV, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "targetScreenOffset" in VV,
              get: VV => VV.targetScreenOffset,
              set: (VV, eV) => {
                VV.targetScreenOffset = eV
              }
            },
            metadata: UV
          }, De, ie), (0, JV.i)(null, null, fV, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: VV => "allowUpsideDown" in VV,
              get: VV => VV.allowUpsideDown,
              set: (VV, eV) => {
                VV.allowUpsideDown = eV
              }
            },
            metadata: UV
          }, Ce, ae), (0, JV.i)(null, null, mV, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: VV => "useInputToRestoreState" in VV,
              get: VV => VV.useInputToRestoreState,
              set: (VV, eV) => {
                VV.useInputToRestoreState = eV
              }
            },
            metadata: UV
          }, oe, ce), (0, JV.i)(null, null, KV, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: VV => "restoreStateInterpolationFactor" in VV,
              get: VV => VV.restoreStateInterpolationFactor,
              set: (VV, eV) => {
                VV.restoreStateInterpolationFactor = eV
              }
            },
            metadata: UV
          }, he, le), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      lV = !1;
    lV || (lV = !0, QV.e.AddNodeConstructor("ArcRotateCamera", ((VV, eV) => () => new hV(VV, 0, 0, 1, yV.o.Zero(), eV))), (0, iV.d)("BABYLON.ArcRotateCamera", hV))
  },
  41510: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.c
    });
    var JV = xV(41512);
    (0, JV.g)()
  },
  41512: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      g: () => vV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(38389),
      pV = xV(41521),
      QV = xV(41486),
      nV = xV(38318);
    let wV = (() => {
        var VV;
        let eV, xV, QV = pV.d,
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        return VV = class extends QV {
          constructor(VV, eV, xV, YV) {
            super(VV, xV, YV), this.groundColor = (0, JV.l)(this, nV, new yV.d(0, 0, 0)), this.direction = ((0, JV.l)(this, wV), (0, JV.l)(this, ZV, void 0)), (0, JV.l)(this, vV), this.direction = eV || UV.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(VV) {
            return this.direction = UV.o.Normalize(VV.subtract(UV.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", xV.x, xV.y, xV.z, 0, eV), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), eV), this
          }
          transferToNodeMaterialEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return VV.setFloat3(eV, xV.x, xV.y, xV.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = UV.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pV.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(VV, eV) {
            VV["HEMILIGHT" + eV] = !0
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(QV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.o)()], xV = [(0, YV.I)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "groundColor" in VV,
              get: VV => VV.groundColor,
              set: (VV, eV) => {
                VV.groundColor = eV
              }
            },
            metadata: UV
          }, nV, wV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: VV => "direction" in VV,
              get: VV => VV.direction,
              set: (VV, eV) => {
                VV.direction = eV
              }
            },
            metadata: UV
          }, ZV, vV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      ZV = !1;

    function vV() {
      ZV || (ZV = !0, QV.e.AddNodeConstructor("Light_Type_3", ((VV, eV) => () => new wV(VV, UV.o.Zero(), eV))), (0, nV.d)("BABYLON.HemisphericLight", wV))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
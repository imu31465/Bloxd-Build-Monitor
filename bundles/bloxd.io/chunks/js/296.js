export const id = 296;
export const ids = [296];
export const modules = {
  42949: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ar
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38595),
      jr = Qr(38560),
      Ir = Qr(38599),
      fr = Qr(42060),
      Er = Qr(42243),
      pr = Qr(42028),
      xr = Qr(41787),
      mr = Qr(38569);
    class Nr {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(rr) {
        this._zoomStopsAnimation = rr
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(rr) {
        this._idleRotationSpeed = rr
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(rr) {
        this._idleRotationWaitTime = rr
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(rr) {
        this._idleRotationSpinupTime = rr
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
      attach(rr) {
        this._attachedCamera = rr;
        const Sr = this._attachedCamera.eC();
        this._onPrePointerObservableObserver = Sr.onPrePointerObservable.add((rr => {
          rr.type !== pr.b.POINTERDOWN ? rr.type === pr.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = rr.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const rr = xr.c.Now;
          let Sr = 0;
          null != this._lastFrameTime && (Sr = rr - this._lastFrameTime), this._lastFrameTime = rr, this._applyUserInteraction();
          const Qr = rr - this._lastInteractionTime - this._idleRotationWaitTime,
            Zr = Math.max(Math.min(Qr / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Zr, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Sr / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const rr = this._attachedCamera.eC();
        this._onPrePointerObservableObserver && rr.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(rr) {
        this._lastInteractionTime = rr ?? xr.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < mr.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let rr = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (rr = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? rr : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = xr.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Qr(42952);
    class Ur {
      constructor() {
        this._easingMode = Ur.EASINGMODE_EASEIN
      }
      setEasingMode(rr) {
        const Sr = Math.min(Math.max(rr, 0), 2);
        this._easingMode = Sr
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(rr) {
        throw new Error("You must implement this method")
      }
      ease(rr) {
        switch (this._easingMode) {
          case Ur.EASINGMODE_EASEIN:
            return this.easeInCore(rr);
          case Ur.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - rr)
        }
        return rr >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - rr))) + .5 : .5 * this.easeInCore(2 * rr)
      }
    }
    Ur.EASINGMODE_EASEIN = 0, Ur.EASINGMODE_EASEOUT = 1, Ur.EASINGMODE_EASEINOUT = 2;
    var tr = Qr(42955);
    class hr {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(rr) {
        if (this._autoTransitionRange === rr) return;
        this._autoTransitionRange = rr;
        const Sr = this._attachedCamera;
        Sr && (rr ? this._onMeshTargetChangedObserver = Sr.onMeshTargetChangedObservable.add((rr => {
          if (rr && (rr.computeWorldMatrix(!0), rr.mG)) {
            const Sr = rr.mG().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Sr, this.upperRadiusTransitionRange = .05 * Sr
          }
        })) : this._onMeshTargetChangedObserver && Sr.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(rr) {
        this._attachedCamera = rr, this._onAfterCheckInputsObserver = rr.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(rr) {
        return !!this._attachedCamera && (this._attachedCamera.radius === rr && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(rr) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (hr.EasingFunction.setEasingMode(hr.EasingMode), this._radiusBounceTransition = tr.d.CreateAnimation("radius", tr.d.ANIMATIONTYPE_FLOAT, 60, hr.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Sr = tr.d.TransitionTo("radius", this._attachedCamera.radius + rr, this._attachedCamera, this._attachedCamera.eC(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Sr && this._animatables.push(Sr)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    hr.EasingFunction = new class extends Ur {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = rr
      }
      easeInCore(rr) {
        const Sr = Math.max(0, this.amplitude);
        return Math.pow(rr, 3) - rr * Sr * Math.sin(3.141592653589793 * rr)
      }
    }(.3), hr.EasingMode = Ur.EASINGMODE_EASEOUT;
    class zr {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new ar.d, this._mode = zr.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(rr) {
        this._mode = rr
      }
      get mode() {
        return this._mode
      }
      set radiusScale(rr) {
        this._radiusScale = rr
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(rr) {
        this._positionScale = rr
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(rr) {
        this._defaultElevation = rr
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(rr) {
        this._elevationReturnTime = rr
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(rr) {
        this._elevationReturnWaitTime = rr
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(rr) {
        this._zoomStopsAnimation = rr
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(rr) {
        this._framingTime = rr
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(rr) {
        this._attachedCamera = rr;
        const Sr = this._attachedCamera.eC();
        zr.EasingFunction.setEasingMode(zr.EasingMode), this._onPrePointerObservableObserver = Sr.onPrePointerObservable.add((rr => {
          rr.type !== pr.b.POINTERDOWN ? rr.type === pr.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = rr.onMeshTargetChangedObservable.add((rr => {
          rr && rr.mG && this.zoomOnMesh(rr, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = rr.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const rr = this._attachedCamera.eC();
        this._onPrePointerObservableObserver && rr.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        rr.computeWorldMatrix(!0);
        const Zr = rr.mG().boundingBox;
        this.zoomOnBoundingInfo(Zr.minimumWorld, Zr.maximumWorld, Sr, Qr)
      }
      zoomOnMeshHierarchy(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        rr.computeWorldMatrix(!0);
        const Zr = rr.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Zr.min, Zr.max, Sr, Qr)
      }
      zoomOnMeshesHierarchy(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Zr = new jr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Wr = new jr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let ar = 0; ar < rr.length; ar++) {
          const Sr = rr[ar].getHierarchyBoundingVectors(!0);
          jr.u.CheckExtends(Sr.min, Zr, Wr), jr.u.CheckExtends(Sr.max, Zr, Wr)
        }
        this.zoomOnBoundingInfo(Zr, Wr, Sr, Qr)
      }
      zoomOnBoundingInfo(rr, Sr) {
        let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const ar = rr.y,
          Ir = ar + (Sr.y - ar) * this._positionScale,
          fr = Sr.subtract(rr).scale(.5);
        if (!isFinite(Ir)) return !1;
        if (Zr) Qr = new jr.u(0, Ir, 0);
        else {
          const Sr = rr.add(fr);
          Qr = new jr.u(Sr.x, Ir, Sr.z)
        }
        this._vectorTransition || (this._vectorTransition = tr.d.CreateAnimation("target", tr.d.ANIMATIONTYPE_VECTOR3, 60, zr.EasingFunction)), this._betaIsAnimating = !0;
        let Er = tr.d.TransitionTo("target", Qr, this._attachedCamera, this._attachedCamera.eC(), 60, this._vectorTransition, this._framingTime);
        Er && this._animatables.push(Er);
        let pr = 0;
        if (this._mode === zr.FitFrustumSidesMode) {
          const Qr = this._calculateLowerRadiusFromModelBoundingSphere(rr, Sr);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = fr.length() + this._attachedCamera.minZ), pr = Qr
        } else this._mode === zr.IgnoreBoundsSizeMode && (pr = this._calculateLowerRadiusFromModelBoundingSphere(rr, Sr), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Qr = Sr.subtract(rr).length();
          this._attachedCamera.panningSensibility = 5e3 / Qr, this._attachedCamera.wheelPrecision = 100 / pr
        }
        return this._radiusTransition || (this._radiusTransition = tr.d.CreateAnimation("radius", tr.d.ANIMATIONTYPE_FLOAT, 60, zr.EasingFunction)), Er = tr.d.TransitionTo("radius", pr, this._attachedCamera, this._attachedCamera.eC(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Wr && Wr(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Er && this._animatables.push(Er), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(rr, Sr) {
        const Qr = this._attachedCamera;
        if (!Qr) return 0;
        let Zr = Qr._calculateLowerRadiusFromModelBoundingSphere(rr, Sr, this._radiusScale);
        return Qr.lowerRadiusLimit && this._mode === zr.IgnoreBoundsSizeMode && (Zr = Zr < Qr.lowerRadiusLimit ? Qr.lowerRadiusLimit : Zr), Qr.upperRadiusLimit && (Zr = Zr > Qr.upperRadiusLimit ? Qr.upperRadiusLimit : Zr), Zr
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const rr = xr.c.Now - this._lastInteractionTime,
          Sr = .5 * Math.PI - this._defaultElevation,
          Qr = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Qr && rr >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = tr.d.CreateAnimation("beta", tr.d.ANIMATIONTYPE_FLOAT, 60, zr.EasingFunction));
          const rr = tr.d.TransitionTo("beta", Sr, this._attachedCamera, this._attachedCamera.eC(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          rr && this._animatables.push(rr)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = xr.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    zr.EasingFunction = new class extends Ur {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = rr
      }
      easeInCore(rr) {
        return this.exponent <= 0 ? rr : (Math.exp(this.exponent * rr) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, zr.EasingMode = Ur.EASINGMODE_EASEINOUT, zr.IgnoreBoundsSizeMode = 0, zr.FitFrustumSidesMode = 1;
    var Yr = Qr(42057),
      nr = Qr(42052),
      er = Qr(42080),
      Kr = Qr(41950);
    let yr = (() => {
        var rr;
        let Sr, Qr = [],
          ar = [];
        return rr = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Zr.m)(this, Qr, [0, 1, 2]), this._pointerInput = (0, Zr.m)(this, ar)
          }
          attachControl(rr) {
            rr = Kr.h.BackCompatCameraNoPreventDefault(arguments);
            const Sr = this.camera.MU(),
              Qr = Sr.getInputElement();
            let Zr = 0,
              Wr = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ar => {
              const jr = ar.event,
                Ir = "touch" === jr.pointerType;
              if (ar.type !== pr.b.POINTERMOVE && -1 === this.buttons.indexOf(jr.button)) return;
              const fr = jr.target;
              if (this._altKey = jr.altKey, this._ctrlKey = jr.ctrlKey, this._metaKey = jr.metaKey, this._shiftKey = jr.shiftKey, this._buttonsPressed = jr.buttons, Sr.isPointerLock) {
                const rr = jr.movementX,
                  Sr = jr.movementY;
                this.onTouch(null, rr, Sr), this._pointA = null, this._pointB = null
              } else {
                if (ar.type !== pr.b.POINTERDOWN && ar.type !== pr.b.POINTERDOUBLETAP && Ir && this._pointA?.pointerId !== jr.pointerId && this._pointB?.pointerId !== jr.pointerId) return;
                if (ar.type !== pr.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Ir)
                  if (ar.type === pr.b.POINTERDOUBLETAP) this.onDoubleTap(jr.pointerType, jr);
                  else if (ar.type !== pr.b.POINTERUP || this._currentMousePointerIdDown !== jr.pointerId && !Ir) {
                  if (ar.type === pr.b.POINTERMOVE)
                    if (rr || jr.preventDefault(), this._pointA && null === this._pointB) {
                      const rr = jr.clientX - this._pointA.x,
                        Sr = jr.clientY - this._pointA.y;
                      this._pointA.x = jr.clientX, this._pointA.y = jr.clientY, this.onTouch(this._pointA, rr, Sr)
                    } else if (this._pointA && this._pointB) {
                    const rr = this._pointA.pointerId === jr.pointerId ? this._pointA : this._pointB;
                    rr.x = jr.clientX, rr.y = jr.clientY;
                    const Sr = this._pointA.x - this._pointB.x,
                      Qr = this._pointA.y - this._pointB.y,
                      Ir = Sr * Sr + Qr * Qr,
                      fr = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: jr.pointerId,
                        type: ar.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Zr, Ir, Wr, fr), Wr = fr, Zr = Ir
                  }
                } else {
                  try {
                    fr?.releasePointerCapture(jr.pointerId)
                  } catch (Er) {}
                  Ir || (this._pointB = null), Sr._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == jr.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == jr.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Zr || Wr) && (this.onMultiTouch(this._pointA, this._pointB, Zr, 0, Wr, null), Zr = 0, Wr = null), this._currentMousePointerIdDown = -1, this.onButtonUp(jr), rr || jr.preventDefault()
                } else {
                  try {
                    fr?.setPointerCapture(jr.pointerId)
                  } catch (Er) {}
                  if (null === this._pointA) this._pointA = {
                    x: jr.clientX,
                    y: jr.clientY,
                    pointerId: jr.pointerId,
                    type: jr.pointerType,
                    button: jr.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: jr.clientX,
                      y: jr.clientY,
                      pointerId: jr.pointerId,
                      type: jr.pointerType,
                      button: jr.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Ir || (this._currentMousePointerIdDown = jr.pointerId), this.onButtonDown(jr), rr || (jr.preventDefault(), Qr && Qr.focus())
                }
              }
            }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._pointerInput, pr.b.POINTERDOWN | pr.b.POINTERUP | pr.b.POINTERMOVE | pr.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Zr = 0, Wr = null, this.onLostFocus()
            }, this._contextMenuBind = rr => this.onContextMenu(rr), Qr && Qr.addEventListener("contextmenu", this._contextMenuBind, !1);
            const ar = this.camera.eC().MU().getHostWindow();
            ar && Kr.h.RegisterTopRootEvents(ar, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const rr = this.camera.eC().MU().getHostWindow();
              rr && Kr.h.UnregisterTopRootEvents(rr, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const rr = this.camera.eC().MU().getInputElement();
                rr && rr.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(rr, Sr) {}
          onTouch(rr, Sr, Qr) {}
          onMultiTouch(rr, Sr, Qr, Zr, Wr, ar) {}
          onContextMenu(rr) {
            rr.preventDefault()
          }
          onButtonDown(rr) {}
          onButtonUp(rr) {}
          onLostFocus() {}
        }, (() => {
          const jr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Sr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: rr => "buttons" in rr,
              get: rr => rr.buttons,
              set: (rr, Sr) => {
                rr.buttons = Sr
              }
            },
            metadata: jr
          }, Qr, ar), jr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jr
          })
        })(), rr
      })(),
      Br = (() => {
        var rr;
        let Sr, Qr, ar, jr = yr,
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        return rr = class extends jr {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Zr.m)(this, Ir, !0), this.multiTouchPanning = ((0, Zr.m)(this, fr), (0, Zr.m)(this, Er, !0)), this.multiTouchPanAndZoom = ((0, Zr.m)(this, pr), (0, Zr.m)(this, xr, !0)), this._isPinching = ((0, Zr.m)(this, mr), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(rr, Sr) {}
          _computeMultiTouchPanning(rr, Sr) {}
          onMultiTouch(rr, Sr, Qr, Zr, Wr, ar) {
            0 === Qr && null === Wr || 0 === Zr && null === ar || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Qr, Zr), this._computeMultiTouchPanning(Wr, ar)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Qr, Zr), this._isPinching = !0) : this._computeMultiTouchPanning(Wr, ar)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Wr, ar) : this.pinchZoom && this._computePinchZoom(Qr, Zr))
          }
          onButtonUp(rr) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(jr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: rr => "pinchZoom" in rr,
              get: rr => rr.pinchZoom,
              set: (rr, Sr) => {
                rr.pinchZoom = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: rr => "multiTouchPanning" in rr,
              get: rr => rr.multiTouchPanning,
              set: (rr, Sr) => {
                rr.multiTouchPanning = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, Zr.k)(null, null, ar, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: rr => "multiTouchPanAndZoom" in rr,
              get: rr => rr.multiTouchPanAndZoom,
              set: (rr, Sr) => {
                rr.multiTouchPanAndZoom = Sr
              }
            },
            metadata: Nr
          }, xr, mr), Nr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          })
        })(), rr
      })(),
      Tr = (() => {
        var rr;
        let Sr, Qr, ar, jr, Ir, fr, Er, pr = Br,
          xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [],
          zr = [],
          Yr = [],
          nr = [],
          er = [],
          Kr = [],
          yr = [],
          Tr = [],
          vr = [];
        return rr = class extends pr {
          constructor() {
            super(...arguments), this.buttons = (0, Zr.m)(this, xr, [0, 1, 2]), this.angularSensibilityX = ((0, Zr.m)(this, mr), (0, Zr.m)(this, Nr, 1e3)), this.angularSensibilityY = ((0, Zr.m)(this, Ur), (0, Zr.m)(this, tr, 1e3)), this.pinchPrecision = ((0, Zr.m)(this, hr), (0, Zr.m)(this, zr, 12)), this.pinchDeltaPercentage = ((0, Zr.m)(this, Yr), (0, Zr.m)(this, nr, 0)), this.useNaturalPinchZoom = ((0, Zr.m)(this, er), (0, Zr.m)(this, Kr, !1)), this.panningSensibility = ((0, Zr.m)(this, yr), (0, Zr.m)(this, Tr, 1e3)), this.pinchInwards = ((0, Zr.m)(this, vr), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(rr, Sr) {
            if (rr && Sr) {
              const Qr = Sr.x - rr.x,
                Zr = Sr.y - rr.y,
                Wr = this.camera.movement.input.getEntry("pointer", "pan"),
                ar = Wr?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== ar && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Qr * ar, this.camera.movement.panAccumulatedPixels.y += Zr * ar)
            }
          }
          _computePinchZoom(Sr, Qr) {
            const Zr = this.camera.radius || rr.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Zr * Math.sqrt(Sr) / Math.sqrt(Qr);
            else if (this.pinchDeltaPercentage) {
              const rr = .001 * (Qr - Sr) * Zr * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += rr
            } else {
              const rr = (Qr - Sr) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += rr
            }
          }
          onTouch(rr, Sr, Qr) {
            const Zr = this._activeEntry ?? (this.camera.MU().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Zr)
              if ("pan" === Zr.interaction) {
                const rr = Zr.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== rr && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Sr * rr, this.camera.movement.panAccumulatedPixels.y += Qr * rr)
              } else if ("rotate" === Zr.interaction) {
              const rr = Zr.OJ ?? Zr.sensitivity ?? 1 / this.angularSensibilityX,
                Wr = Zr.LJ ?? Zr.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Sr * rr, this.camera.movement.rotationAccumulatedPixels.y += -Qr * Wr
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(rr, Sr, Qr, Zr, Wr, ar) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Zr) - Math.sqrt(Qr)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(rr, Sr, Qr, Zr, Wr, ar)
          }
          onButtonDown(rr) {
            this._pointerConditions.button = rr.button, this._pointerModifiers.ctrl = rr.ctrlKey, this._pointerModifiers.alt = rr.altKey, this._pointerModifiers.shift = rr.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(rr)
          }
          onButtonUp(rr) {
            this._activeEntry = null, super.onButtonUp(rr)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Br = "function" === typeof Symbol && Symbol.metadata ? Object.create(pr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], jr = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: rr => "buttons" in rr,
              get: rr => rr.buttons,
              set: (rr, Sr) => {
                rr.buttons = Sr
              }
            },
            metadata: Br
          }, xr, mr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: rr => "angularSensibilityX" in rr,
              get: rr => rr.angularSensibilityX,
              set: (rr, Sr) => {
                rr.angularSensibilityX = Sr
              }
            },
            metadata: Br
          }, Nr, Ur), (0, Zr.k)(null, null, ar, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: rr => "angularSensibilityY" in rr,
              get: rr => rr.angularSensibilityY,
              set: (rr, Sr) => {
                rr.angularSensibilityY = Sr
              }
            },
            metadata: Br
          }, tr, hr), (0, Zr.k)(null, null, jr, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: rr => "pinchPrecision" in rr,
              get: rr => rr.pinchPrecision,
              set: (rr, Sr) => {
                rr.pinchPrecision = Sr
              }
            },
            metadata: Br
          }, zr, Yr), (0, Zr.k)(null, null, Ir, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: rr => "pinchDeltaPercentage" in rr,
              get: rr => rr.pinchDeltaPercentage,
              set: (rr, Sr) => {
                rr.pinchDeltaPercentage = Sr
              }
            },
            metadata: Br
          }, nr, er), (0, Zr.k)(null, null, fr, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: rr => "useNaturalPinchZoom" in rr,
              get: rr => rr.useNaturalPinchZoom,
              set: (rr, Sr) => {
                rr.useNaturalPinchZoom = Sr
              }
            },
            metadata: Br
          }, Kr, yr), (0, Zr.k)(null, null, Er, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: rr => "panningSensibility" in rr,
              get: rr => rr.panningSensibility,
              set: (rr, Sr) => {
                rr.panningSensibility = Sr
              }
            },
            metadata: Br
          }, Tr, vr), Br && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Br
          })
        })(), rr.MinimumRadiusForPinch = .001, rr
      })();
    er.c.ArcRotateCameraPointersInput = Tr;
    var vr = Qr(42031);
    let Or = (() => {
      var rr;
      let Sr, Qr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr = [],
        hr = [],
        zr = [],
        Yr = [],
        nr = [],
        er = [],
        yr = [],
        Br = [],
        Tr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [];
      return rr = class {
        constructor() {
          this.camera = (0, Zr.m)(this, tr), this.keysUp = (0, Zr.m)(this, hr, [38]), this.keysDown = ((0, Zr.m)(this, zr), (0, Zr.m)(this, Yr, [40])), this.keysLeft = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, [37])), this.keysRight = ((0, Zr.m)(this, yr), (0, Zr.m)(this, Br, [39])), this.keysReset = ((0, Zr.m)(this, Tr), (0, Zr.m)(this, Or, [220])), this.keysZoomIn = ((0, Zr.m)(this, Lr), (0, Zr.m)(this, lr, [187, 107])), this.keysZoomOut = ((0, Zr.m)(this, Xr), (0, Zr.m)(this, Pr, [189, 109])), this.panningSensibility = ((0, Zr.m)(this, Hr), (0, Zr.m)(this, qr, 50)), this.zoomingSensibility = ((0, Zr.m)(this, Rr), (0, Zr.m)(this, gr, 25)), this.angularSpeed = ((0, Zr.m)(this, Cr), (0, Zr.m)(this, Mr, .01)), this._useAltToZoom = ((0, Zr.m)(this, Gr), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new jr.q, this._panDirection = new jr.q
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(rr) {
          this._useAltToZoom = rr, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const rr = this.camera.movement.input,
            Sr = rr.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Sr ? rr.inputMap.splice(rr.inputMap.indexOf(Sr), 1) : this._useAltToZoom && !Sr && rr.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(rr) {
          rr = Kr.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.eC(), this._engine = this._scene.MU(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Sr => {
            const Qr = Sr.event;
            if (!Qr.metaKey)
              if (Sr.type === vr.e.KEYDOWN) {
                if (this._ctrlPressed = Qr.ctrlKey, this._altPressed = Qr.altKey, -1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysReset.indexOf(Qr.keyCode) || -1 !== this.keysZoomIn.indexOf(Qr.keyCode) || -1 !== this.keysZoomOut.indexOf(Qr.keyCode)) {
                  -1 === this._keys.indexOf(Qr.keyCode) && this._keys.push(Qr.keyCode), Qr.preventDefault && (rr || Qr.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Qr.keyCode) || -1 !== this.keysDown.indexOf(Qr.keyCode) || -1 !== this.keysLeft.indexOf(Qr.keyCode) || -1 !== this.keysRight.indexOf(Qr.keyCode) || -1 !== this.keysReset.indexOf(Qr.keyCode) || -1 !== this.keysZoomIn.indexOf(Qr.keyCode) || -1 !== this.keysZoomOut.indexOf(Qr.keyCode)) {
              const Sr = this._keys.indexOf(Qr.keyCode);
              Sr >= 0 && this._keys.splice(Sr, 1), Qr.preventDefault && (rr || Qr.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const rr = this.camera,
              Sr = rr.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Qr = this._rotateDirection.set(0, 0),
              Zr = this._panDirection.set(0, 0);
            let Wr = 0,
              ar = 0;
            for (let jr = 0; jr < this._keys.length; jr++) {
              const Ir = this._keys[jr];
              if (this._keyboardConditions.key = Ir, -1 === this.keysReset.indexOf(Ir)) {
                const rr = Sr.resolveInteraction("keyboard", this._keyboardConditions);
                if (rr)
                  if ("pan" === rr.interaction) ar = Math.max(ar, rr.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Ir) ? Zr.x -= 1 : -1 !== this.keysRight.indexOf(Ir) ? Zr.x += 1 : -1 !== this.keysUp.indexOf(Ir) ? Zr.y += 1 : -1 !== this.keysDown.indexOf(Ir) && (Zr.y -= 1);
                  else if ("zoom" === rr.interaction) {
                  const Qr = rr.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Ir) || -1 !== this.keysZoomIn.indexOf(Ir) ? Sr.handlers.zoom(Qr) : -1 === this.keysDown.indexOf(Ir) && -1 === this.keysZoomOut.indexOf(Ir) || Sr.handlers.zoom(-Qr)
                } else "rotate" === rr.interaction && (Wr = Math.max(Wr, rr.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Ir) ? Qr.x -= 1 : -1 !== this.keysRight.indexOf(Ir) ? Qr.x += 1 : -1 !== this.keysUp.indexOf(Ir) ? Qr.y -= 1 : -1 !== this.keysDown.indexOf(Ir) && (Qr.y += 1))
              } - 1 !== this.keysReset.indexOf(Ir) && rr.useInputToRestoreState && rr.restoreState()
            }
            0 === Qr.x && 0 === Qr.y || (Qr.normalize().scaleInPlace(Wr), Sr.handlers.rotate(Qr.x, Qr.y)), 0 === Zr.x && 0 === Zr.y || (Zr.normalize().scaleInPlace(ar), Sr.handlers.pan(Zr.x, Zr.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const jr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], (0, Zr.k)(rr, null, Ur, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAltToZoom" in rr,
            get: rr => rr.useAltToZoom
          },
          metadata: jr
        }, null, tr), (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysUp" in rr,
            get: rr => rr.keysUp,
            set: (rr, Sr) => {
              rr.keysUp = Sr
            }
          },
          metadata: jr
        }, hr, zr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysDown" in rr,
            get: rr => rr.keysDown,
            set: (rr, Sr) => {
              rr.keysDown = Sr
            }
          },
          metadata: jr
        }, Yr, nr), (0, Zr.k)(null, null, ar, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysLeft" in rr,
            get: rr => rr.keysLeft,
            set: (rr, Sr) => {
              rr.keysLeft = Sr
            }
          },
          metadata: jr
        }, er, yr), (0, Zr.k)(null, null, Ir, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysRight" in rr,
            get: rr => rr.keysRight,
            set: (rr, Sr) => {
              rr.keysRight = Sr
            }
          },
          metadata: jr
        }, Br, Tr), (0, Zr.k)(null, null, fr, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysReset" in rr,
            get: rr => rr.keysReset,
            set: (rr, Sr) => {
              rr.keysReset = Sr
            }
          },
          metadata: jr
        }, Or, Lr), (0, Zr.k)(null, null, Er, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysZoomIn" in rr,
            get: rr => rr.keysZoomIn,
            set: (rr, Sr) => {
              rr.keysZoomIn = Sr
            }
          },
          metadata: jr
        }, lr, Xr), (0, Zr.k)(null, null, pr, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: rr => "keysZoomOut" in rr,
            get: rr => rr.keysZoomOut,
            set: (rr, Sr) => {
              rr.keysZoomOut = Sr
            }
          },
          metadata: jr
        }, Pr, Hr), (0, Zr.k)(null, null, xr, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: rr => "panningSensibility" in rr,
            get: rr => rr.panningSensibility,
            set: (rr, Sr) => {
              rr.panningSensibility = Sr
            }
          },
          metadata: jr
        }, qr, Rr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: rr => "zoomingSensibility" in rr,
            get: rr => rr.zoomingSensibility,
            set: (rr, Sr) => {
              rr.zoomingSensibility = Sr
            }
          },
          metadata: jr
        }, gr, Cr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: rr => "angularSpeed" in rr,
            get: rr => rr.angularSpeed,
            set: (rr, Sr) => {
              rr.angularSpeed = Sr
            }
          },
          metadata: jr
        }, Mr, Gr), jr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jr
        })
      })(), rr
    })();
    er.c.ArcRotateCameraKeyboardMoveInput = Or;
    var Lr = Qr(39264),
      lr = Qr(42036);
    let Xr = (() => {
      var rr;
      let Sr, Qr, ar, fr = [],
        Er = [],
        xr = [],
        Nr = [],
        Ur = [],
        tr = [];
      return rr = class {
        constructor() {
          this.wheelPrecision = (0, Zr.m)(this, fr, 3), this.zoomToMouseLocation = ((0, Zr.m)(this, Er), (0, Zr.m)(this, xr, !1)), this.wheelDeltaPercentage = ((0, Zr.m)(this, Nr), (0, Zr.m)(this, Ur, 0)), this.customComputeDeltaFromMouseWheel = ((0, Zr.m)(this, tr), null), this._viewOffset = new jr.u(0, 0, 0), this._globalOffset = new jr.u(0, 0, 0), this._inertialPanning = jr.u.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(rr, Sr) {
          let Qr;
          const Zr = .01 * rr * this.wheelDeltaPercentage * Sr;
          return Qr = rr > 0 ? Zr / (1 + this.wheelDeltaPercentage) : Zr * (1 + this.wheelDeltaPercentage), Qr
        }
        attachControl(rr) {
          rr = Kr.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Sr => {
            if (Sr.type !== pr.b.POINTERWHEEL) return;
            const Qr = Sr.event;
            let Zr;
            const Wr = Qr.deltaMode === lr.b.DOM_DELTA_LINE ? 40 : 1,
              ar = -Qr.deltaY * Wr;
            if (this.customComputeDeltaFromMouseWheel) Zr = this.customComputeDeltaFromMouseWheel(ar, this, Qr);
            else if (this.wheelDeltaPercentage) {
              if (Zr = this._computeDeltaFromMouseWheelLegacyEvent(ar, this.camera.radius), Zr > 0) {
                const rr = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Sr = this.camera.radius,
                  Qr = rr + Zr;
                for (let Zr = 0; Zr < 20 && !(Sr <= Qr) && !(Math.abs(Qr * this.camera.inertia) < .001); Zr++) Sr -= Qr, Qr *= this.camera.inertia;
                Sr = (0, Ir.Clamp)(Sr, 0, Number.MAX_VALUE), Zr = this._computeDeltaFromMouseWheelLegacyEvent(ar, Sr)
              }
            } else {
              const rr = this.camera.movement.input.getEntry("wheel", "zoom");
              Zr = ar * (rr?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Zr && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Zr)) : this.camera.movement.zoomAccumulatedPixels += Zr), Qr.preventDefault && (rr || Qr.preventDefault())
          }, this._observer = this.camera.eC()._inputManager._addCameraPointerObserver(this._wheel, pr.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Srr(0)
        }
        detachControl() {
          this._observer && (this.camera.eC()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const rr = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(rr.inertialAlphaOffset) + Math.abs(rr.inertialBetaOffset) + Math.abs(rr.inertialRadiusOffset)) {
            this._updateHitPlane(), rr.target.addInPlace(this._inertialPanning), rr.radius -= this._zoomToMouseRadiusOffset;
            const Sr = rr.movement.getFrameIndependentDecay(rr.inertia);
            this._inertialPanning.scaleInPlace(Sr), this._zoomToMouseRadiusOffset *= Sr, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < mr.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const rr = this.camera,
            Sr = rr.target.subtract(rr.position);
          this._hitPlane = Lr.d.FromPositionAndNormal(rr.target, Sr)
        }
        _getPosition() {
          const rr = this.camera,
            Sr = rr.eC(),
            Qr = Sr.createPickingRay(Sr.pointerX, Sr.pointerY, jr.d.Identity(), rr, !1);
          0 === rr.targetScreenOffset.x && 0 === rr.targetScreenOffset.y || (this._viewOffset.set(rr.targetScreenOffset.x, rr.targetScreenOffset.y, 0), rr.getViewMatrix().invertToRef(rr._cameraTransformMatrix), this._globalOffset = jr.u.TransformNormal(this._viewOffset, rr._cameraTransformMatrix), Qr.origin.addInPlace(this._globalOffset));
          let Zr = 0;
          return this._hitPlane && (Zr = Qr.intersectsPlane(this._hitPlane) ?? 0), Qr.origin.addInPlace(Qr.direction.scaleInPlace(Zr))
        }
        _zoomToMouse(rr) {
          const Sr = this.camera,
            Qr = 1 - Sr.inertia,
            Zr = Sr.movement.getFrameIndependentInputScale(Sr.inertia);
          if (Sr.lowerRadiusLimit) {
            const Wr = Sr.lowerRadiusLimit ?? 0;
            Sr.radius - (this._zoomToMouseRadiusOffset + rr * Zr) / Qr < Wr && (rr = ((Sr.radius - Wr) * Qr - this._zoomToMouseRadiusOffset) / Zr)
          }
          if (Sr.upperRadiusLimit) {
            const Wr = Sr.upperRadiusLimit ?? 0;
            Sr.radius - (this._zoomToMouseRadiusOffset + rr * Zr) / Qr > Wr && (rr = ((Sr.radius - Wr) * Qr - this._zoomToMouseRadiusOffset) / Zr)
          }
          const Wr = rr / Qr / Sr.radius,
            ar = this._getPosition(),
            Ir = jr.n.kU[6];
          ar.subtractToRef(Sr.target, Ir), Ir.scaleInPlace(Wr), Ir.scaleInPlace(Qr), Ir.scaleInPlace(Zr), this._inertialPanning.addInPlace(Ir), this._zoomToMouseRadiusOffset += rr * Zr
        }
        _zeroIfClose(rr) {
          Math.abs(rr.x) < mr.e && (rr.x = 0), Math.abs(rr.y) < mr.e && (rr.y = 0), Math.abs(rr.z) < mr.e && (rr.z = 0)
        }
      }, (() => {
        const jr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelPrecision" in rr,
            get: rr => rr.wheelPrecision,
            set: (rr, Sr) => {
              rr.wheelPrecision = Sr
            }
          },
          metadata: jr
        }, fr, Er), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: rr => "zoomToMouseLocation" in rr,
            get: rr => rr.zoomToMouseLocation,
            set: (rr, Sr) => {
              rr.zoomToMouseLocation = Sr
            }
          },
          metadata: jr
        }, xr, Nr), (0, Zr.k)(null, null, ar, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: rr => "wheelDeltaPercentage" in rr,
            get: rr => rr.wheelDeltaPercentage,
            set: (rr, Sr) => {
              rr.wheelDeltaPercentage = Sr
            }
          },
          metadata: jr
        }, Ur, tr), jr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jr
        })
      })(), rr
    })();
    er.c.ArcRotateCameraMouseWheelInput = Xr;
    var Pr, Hr, qr = Qr(41769);
    class Rr extends er.f {
      constructor(rr) {
        super(rr)
      }
      addMouseWheel() {
        return this.add(new Xr), this
      }
      addPointers() {
        return this.add(new Tr), this
      }
      addKeyboard() {
        return this.add(new Or), this
      }
    }(Pr = Rr.prototype).addVRDeviceOrientation ?? (Pr.addVRDeviceOrientation = (0, qr.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Hr = Rr.prototype).addGamepad ?? (Hr.addGamepad = (0, qr.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var gr = Qr(38609),
      Cr = Qr(42073),
      Mr = Qr(42075);
    class Gr extends Cr.d {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr), this.input = new Mr.e({
          pan: (rr, Sr) => {
            this.panAccumulatedPixels.x += rr, this.panAccumulatedPixels.y += Sr
          },
          rotate: (rr, Sr) => {
            this.rotationAccumulatedPixels.x += rr, this.rotationAccumulatedPixels.y += Sr
          },
          zoom: rr => {
            this.zoomAccumulatedPixels += rr
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

    function kr(rr, Sr) {
      return isNaN(rr) ? Sr : rr
    }
    let Ar = (() => {
        var rr;
        let Sr, Qr, fr, pr, xr, Ur, tr, er, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, gr, Cr, Mr, Ar, Vr, ir, wr, cr, Fr, or = nr.f,
          br = [],
          Jr = [],
          Dr = [],
          dr = [],
          sr = [],
          ur = [],
          rS = [],
          SS = [],
          QS = [],
          ZS = [],
          WS = [],
          aS = [],
          jS = [],
          IS = [],
          fS = [],
          ES = [],
          pS = [],
          xS = [],
          mS = [],
          NS = [],
          US = [],
          tS = [],
          hS = [],
          zS = [],
          YS = [],
          nS = [],
          eS = [],
          KS = [],
          yS = [],
          BS = [],
          TS = [],
          vS = [],
          OS = [],
          LS = [],
          lS = [],
          XS = [],
          PS = [],
          HS = [],
          qS = [],
          RS = [],
          gS = [],
          CS = [],
          MS = [],
          GS = [],
          kS = [],
          AS = [],
          VS = [];
        return rr = class extends or {
          get target() {
            return this.Xx
          }
          set target(rr) {
            this.setTarget(rr)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(rr) {
            rr && this.setTarget(rr)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(rr) {
            this.setPosition(rr)
          }
          set upVector(rr) {
            this._upToYMatrix || (this._yToUpMatrix = new jr.d, this._upToYMatrix = new jr.d, this._upVector = jr.u.Zero()), rr.normalize(), this._upVector.iH(rr), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            jr.d.RotationAlignToRef(jr.u.UpReadOnly, this._upVector, this._yToUpMatrix), jr.d.RotationAlignToRef(this._upVector, jr.u.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const rr = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(rr) < this._rotationEpsilon ? 0 : rr
          }
          set inertialAlphaOffset(rr) {
            this._inertialAlphaOffset = rr, 0 === rr && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const rr = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(rr) < this._rotationEpsilon ? 0 : rr
          }
          set inertialBetaOffset(rr) {
            this._inertialBetaOffset = rr, 0 === rr && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const rr = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(rr) < this._rotationEpsilon ? 0 : rr
          }
          set inertialRadiusOffset(rr) {
            this._inertialRadiusOffset = rr, 0 === rr && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(rr) {
            this._panningInertia = rr, this.movement && (this.movement.panInertia = rr)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(rr) {
            this._inertia = rr, this.movement && (this.movement.rotationInertia = rr, this.movement.zoomInertia = rr)
          }
          get angularSensibilityX() {
            const rr = this.inputs.attached.pointers;
            return rr ? rr.angularSensibilityX : 0
          }
          set angularSensibilityX(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.angularSensibilityX = rr)
          }
          get angularSensibilityY() {
            const rr = this.inputs.attached.pointers;
            return rr ? rr.angularSensibilityY : 0
          }
          set angularSensibilityY(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.angularSensibilityY = rr)
          }
          get pinchPrecision() {
            const rr = this.inputs.attached.pointers;
            return rr ? rr.pinchPrecision : 0
          }
          set pinchPrecision(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.pinchPrecision = rr)
          }
          get pinchDeltaPercentage() {
            const rr = this.inputs.attached.pointers;
            return rr ? rr.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.pinchDeltaPercentage = rr)
          }
          get useNaturalPinchZoom() {
            const rr = this.inputs.attached.pointers;
            return !!rr && rr.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.useNaturalPinchZoom = rr)
          }
          get panningSensibility() {
            const rr = this.inputs.attached.pointers;
            return rr ? rr.panningSensibility : 0
          }
          set panningSensibility(rr) {
            const Sr = this.inputs.attached.pointers;
            Sr && (Sr.panningSensibility = rr)
          }
          get keysUp() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysUp : []
          }
          set keysUp(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysUp = rr)
          }
          get keysDown() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysDown : []
          }
          set keysDown(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysDown = rr)
          }
          get keysLeft() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysLeft : []
          }
          set keysLeft(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysLeft = rr)
          }
          get keysRight() {
            const rr = this.inputs.attached.keyboard;
            return rr ? rr.keysRight : []
          }
          set keysRight(rr) {
            const Sr = this.inputs.attached.keyboard;
            Sr && (Sr.keysRight = rr)
          }
          get wheelPrecision() {
            const rr = this.inputs.attached.mousewheel;
            return rr ? rr.wheelPrecision : 0
          }
          set wheelPrecision(rr) {
            const Sr = this.inputs.attached.mousewheel;
            Sr && (Sr.wheelPrecision = rr)
          }
          get zoomToMouseLocation() {
            const rr = this.inputs.attached.mousewheel;
            return !!rr && rr.zoomToMouseLocation
          }
          set zoomToMouseLocation(rr) {
            const Sr = this.inputs.attached.mousewheel;
            Sr && (Sr.zoomToMouseLocation = rr)
          }
          get wheelDeltaPercentage() {
            const rr = this.inputs.attached.mousewheel;
            return rr ? rr.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(rr) {
            const Sr = this.inputs.attached.mousewheel;
            Sr && (Sr.wheelDeltaPercentage = rr)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(rr) {
            this._useCtrlForPanningInternal = rr;
            const Sr = this.movement.input,
              Qr = Sr.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !rr && Qr ? Sr.inputMap.splice(Sr.inputMap.indexOf(Qr), 1) : rr && !Qr && Sr.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Zr = Sr.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !rr && Zr ? Sr.inputMap.splice(Sr.inputMap.indexOf(Zr), 1) : rr && !Zr && Sr.addEntry({
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
          set _panningMouseButton(rr) {
            this._panningMouseButtonInternal = rr;
            const Sr = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Sr && (Sr.button = rr)
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
          set useBouncingBehavior(rr) {
            rr !== this.useBouncingBehavior && (rr ? (this._bouncingBehavior = new hr, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(rr) {
            rr !== this.useFramingBehavior && (rr ? (this._framingBehavior = new zr, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(rr) {
            rr !== this.useAutoRotationBehavior && (rr ? (this._autoRotationBehavior = new Nr, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(rr, Sr, Qr, Wr, Ir, fr) {
            var Er;
            let pr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(rr, jr.u.Zero(), fr, pr), Er = this, this.alpha = ((0, Zr.m)(this, br), (0, Zr.m)(this, Jr, void 0)), this.beta = ((0, Zr.m)(this, Dr), (0, Zr.m)(this, dr, void 0)), this.radius = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, void 0)), this.Xx = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, void 0)), this._targetHost = ((0, Zr.m)(this, WS), (0, Zr.m)(this, aS, void 0)), this._upToYMatrix = (0, Zr.m)(this, jS), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Zr.m)(this, IS, null), this.upperAlphaLimit = ((0, Zr.m)(this, fS), (0, Zr.m)(this, ES, null)), this.lowerBetaLimit = ((0, Zr.m)(this, pS), (0, Zr.m)(this, xS, .01)), this.upperBetaLimit = ((0, Zr.m)(this, mS), (0, Zr.m)(this, NS, Math.PI - .01)), this.lowerRadiusLimit = ((0, Zr.m)(this, US), (0, Zr.m)(this, tS, null)), this.upperRadiusLimit = ((0, Zr.m)(this, hS), (0, Zr.m)(this, zS, null)), this.lowerTargetYLimit = ((0, Zr.m)(this, YS), (0, Zr.m)(this, nS, -1 / 0)), this.inertialPanningX = ((0, Zr.m)(this, eS), (0, Zr.m)(this, KS, 0)), this.inertialPanningY = ((0, Zr.m)(this, yS), (0, Zr.m)(this, BS, 0)), this.pinchToPanMaxDistance = ((0, Zr.m)(this, TS), (0, Zr.m)(this, vS, 20)), this.panningDistanceLimit = ((0, Zr.m)(this, OS), (0, Zr.m)(this, LS, null)), this.panningOriginTarget = ((0, Zr.m)(this, lS), (0, Zr.m)(this, XS, jr.u.Zero())), this._panningInertia = ((0, Zr.m)(this, PS), .9), this._inertia = .9, this.zoomOnFactor = (0, Zr.m)(this, HS, 1), this.targetScreenOffset = ((0, Zr.m)(this, qS), (0, Zr.m)(this, RS, jr.q.Zero())), this.allowUpsideDown = ((0, Zr.m)(this, gS), (0, Zr.m)(this, CS, !0)), this.useInputToRestoreState = ((0, Zr.m)(this, MS), (0, Zr.m)(this, GS, !0)), this.restoreStateInterpolationFactor = ((0, Zr.m)(this, kS), (0, Zr.m)(this, AS, 0)), this._currentInterpolationFactor = ((0, Zr.m)(this, VS), 0), this._viewMatrix = new jr.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new jr.u(1, 1, 0), this._transformedDirection = new jr.u, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new ar.d, this.checkCollisions = !1, this.collisionRadius = new jr.u(.5, .5, .5), this._previousPosition = jr.u.Zero(), this._collisionVelocity = jr.u.Zero(), this._newPosition = jr.u.Zero(), this._computationVector = jr.u.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new jr.u(NaN, NaN, NaN), this._goalTargetScreenOffset = new jr.q(NaN, NaN), this._onCollisionPositionChange = function(rr, Sr) {
              let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Qr ? (Er.setPosition(Sr), Er.Am && Er.Am(Qr)) : Er._previousPosition.iH(Er._position);
              const Zr = Math.cos(Er.alpha),
                Wr = Math.sin(Er.alpha),
                ar = Math.cos(Er.beta);
              let jr = Math.sin(Er.beta);
              0 === jr && (jr = 1e-4);
              const Ir = Er._getTargetPosition();
              Er._computationVector.Hrr(Er.radius * Zr * jr, Er.radius * ar, Er.radius * Wr * jr), Ir.addToRef(Er._computationVector, Er._newPosition), Er._position.iH(Er._newPosition);
              let fr = Er.upVector;
              Er.allowUpsideDown && Er.beta < 0 && (fr = fr.clone(), fr = fr.ph()), Er._computeViewMatrix(Er._position, Ir, fr), Er._viewMatrix.addAtIndex(12, Er.targetScreenOffset.x), Er._viewMatrix.addAtIndex(13, Er.targetScreenOffset.y), Er._collisionTriggered = !1
            }, this.Xx = jr.u.Zero(), Ir && this.setTarget(Ir), this.alpha = Sr, this.beta = Qr, this.radius = Wr, this.getViewMatrix(), this.inputs = new Rr(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Gr(this.eC(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Xx = new jr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = jr.q.Zero()
          }
          _updateCache(rr) {
            rr || super._updateCache(), this._cache.Xx.iH(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.iH(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const rr = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? rr.addToRef(this._targetBoundingCenter, this.Xx) : this.Xx.iH(rr)
            }
            const rr = this._getLockedTargetPosition();
            return rr || this.Xx
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > mr.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              ar = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ar ? this._currentInterpolationFactor = ar : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = kr(rr, this._goalAlpha), this._goalBeta = kr(Sr, this._goalBeta), this._goalRadius = kr(Qr, this._goalRadius), this._goalTarget.set(kr(Zr.x, this._goalTarget.x), kr(Zr.y, this._goalTarget.y), kr(Zr.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(kr(Wr.x, this._goalTargetScreenOffset.x), kr(Wr.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Ir.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Ir.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Ir.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Ir.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Xx.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(rr, Sr) {
            let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Wr = arguments;
            Sr = Kr.h.BackCompatCameraNoPreventDefault(Wr), this._useCtrlForPanning = Qr, this._panningMouseButton = Zr, "boolean" === typeof Wr[0] && (Wr.length > 1 && (this._useCtrlForPanning = Wr[1]), Wr.length > 2 && (this._panningMouseButton = Wr[2])), this.inputs.attachElement(Sr), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(rr, Sr, Qr) {
            const Zr = this.invertRotation ? -1 : 1;
            let Wr = rr * this._calculateHandednessMultiplier();
            this.beta < 0 && (Wr *= -1), this.alpha += Wr * Zr, this.beta += Sr * Zr, this.radius -= Qr
          }
          _applyPanDelta(rr, Sr) {
            const Qr = jr.n.kU[0].Hrr(rr, Sr, Sr);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Qr.multiplyInPlace(this.panningAxis), jr.u.TransformNormalToRef(Qr, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const rr = this.upVector,
                Sr = jr.u.CrossToRef(this._transformedDirection, rr, this._transformedDirection);
              jr.u.CrossToRef(rr, Sr, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Xx);
                jr.u.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Xx.iH(this._transformedDirection)
              } else {
                if (this.parent) {
                  const rr = jr.n.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(rr), rr.transposeToRef(rr), jr.u.TransformCoordinatesToRef(this._transformedDirection, rr, this._transformedDirection)
                }
                this.Xx.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let rr = !1;
            this.movement.computeCurrentFrameDeltas();
            const Sr = this.movement.rotationDeltaCurrentFrame,
              Qr = this.movement.zoomDeltaCurrentFrame,
              Zr = this.movement.panDeltaCurrentFrame;
            if (0 === Sr.x && 0 === Sr.y && 0 === Qr && 0 === Zr.x && 0 === Zr.y || (rr = !0, 0 === Sr.x && 0 === Sr.y && 0 === Qr || this._applyRotationAndZoomDelta(Sr.x, Sr.y, Qr), 0 === Zr.x && 0 === Zr.y || this._applyPanDelta(Zr.x, Zr.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), rr = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Sr = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Sr && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Sr && (this.inertialPanningY = 0), rr = !0
            }
            if (rr) this.stopInterpolation();
            else if (this._isInterpolating) {
              let rr = !1;
              const Sr = this._scene.MU().getDeltaTime() / 1e3,
                Qr = 1 - Math.pow(2, -Sr / this._currentInterpolationFactor),
                Zr = kr(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Sr = jr.n.kU[0].set(kr(this._goalTarget.x, this.Xx.x), kr(this._goalTarget.y, this.Xx.y), kr(this._goalTarget.z, this.Xx.z));
                jr.u.LerpToRef(this.target, Sr, Qr, this.Xx), 10 * jr.u.Distance(this.target, Sr) / Zr < mr.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.iH(Sr), this.setTarget(this.target, !1, !0, !0)) : rr = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Sr = jr.h.RotationAlphaBetaGammaToRef(kr(this._goalAlpha, this.alpha), kr(this._goalBeta, this.beta), 0, jr.n.Quaternion[0]),
                  Zr = jr.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, jr.n.Quaternion[1]),
                  Wr = jr.h.SlerpToRef(Zr, Sr, Qr, jr.n.Quaternion[2]);
                Wr.normalize();
                const ar = Wr.toAlphaBetaGammaToRef(jr.n.kU[0]);
                if (this.alpha = ar.x, this.beta = ar.y, Wr.isApprox(Sr, mr.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const rr = Sr.toAlphaBetaGammaToRef(jr.n.kU[0]);
                  this.alpha = rr.x, this.beta = rr.y
                } else rr = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Zr - this.radius) * Qr, Math.abs(Zr / this.radius - 1) < mr.e ? (this._goalRadius = NaN, this.radius = Zr) : rr = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Sr = jr.n.Vector2[0].set(kr(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), kr(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                jr.q.LerpToRef(this.targetScreenOffset, Sr, Qr, this.targetScreenOffset), jr.q.Distance(this.targetScreenOffset, Sr) < mr.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.iH(Sr)) : rr = !0
              }
              this._isInterpolating = rr
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || jr.u.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const rr = this.alpha;
            var Sr, Qr;
            this.alpha = function(rr) {
              let Sr = Math.PI / 2;
              return 0 === rr.x && 0 === rr.z || (Sr = Math.acos(rr.x / Math.sqrt(Math.pow(rr.x, 2) + Math.pow(rr.z, 2)))), rr.z < 0 && (Sr = 2 * Math.PI - Sr), Sr
            }(this._computationVector), this.beta = (Sr = this._computationVector.y, Qr = this.radius, Math.acos(Sr / Qr));
            const Zr = Math.round((rr - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Zr * Math.PI, this._checkLimits()
          }
          setPosition(rr) {
            this._position.equals(rr) || (this._position.iH(rr), this.rebuildAnglesAndRadius())
          }
          setTarget(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Zr = this.overrideCloneAlphaBetaRadius ?? Zr, rr.computeWorldMatrix) Sr && rr.mG ? this._targetBoundingCenter = rr.mG().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, rr.computeWorldMatrix(), this._targetHost = rr, this.Xx = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Sr = rr,
                Zr = this._getTargetPosition();
              if (Zr && !Qr && Zr.equals(Sr)) return;
              this._targetHost = null, this.Xx = Sr, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Zr || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const rr = Math.cos(this.alpha),
              Sr = Math.sin(this.alpha),
              Qr = Math.cos(this.beta);
            let Zr = Math.sin(this.beta);
            0 === Zr && (Zr = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Wr = this._getTargetPosition();
            if (this._computationVector.Hrr(this.radius * rr * Zr, this.radius * Qr, this.radius * Sr * Zr), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || jr.u.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Wr.addToRef(this._computationVector, this._newPosition), this.eC().collisionsEnabled && this.checkCollisions) {
              const rr = this.eC().collisionCoordinator;
              this._collider || (this._collider = rr.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, rr.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.iH(this._newPosition);
              let rr = this.upVector;
              this.allowUpsideDown && Zr < 0 && (rr = rr.ph()), this._computeViewMatrix(this._position, Wr, rr), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.iH(Wr), this._viewMatrix
          }
          zoomOn(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            rr = rr || this.eC().meshes;
            const Qr = Er.c.MinMax(rr);
            let Zr = this._calculateLowerRadiusFromModelBoundingSphere(Qr.min, Qr.max);
            if (Zr = Math.max(Math.min(Zr, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Zr * this.zoomOnFactor, this.mode === Yr.d.ORTHOGRAPHIC_CAMERA) {
              const rr = this.eC().MU().getAspectRatio(this),
                Sr = Zr * this.zoomOnFactor / 2;
              this.orthoLeft = -Sr * rr, this.orthoRight = Sr * rr, this.orthoBottom = -Sr, this.orthoTop = Sr
            }
            this.focusOn({
              min: Qr.min,
              max: Qr.max,
              distance: Zr
            }, Sr)
          }
          focusOn(rr) {
            let Sr, Qr, Zr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === rr.min) {
              const Zr = rr || this.eC().meshes;
              Sr = Er.c.MinMax(Zr), Qr = jr.u.Distance(Sr.min, Sr.max)
            } else {
              Sr = rr, Qr = rr.distance
            }
            this.Xx = Er.c.Center(Sr), Zr || (this.maxZ = 2 * Qr)
          }
          createRigCamera(Sr, Qr) {
            let Zr = 0;
            switch (this.cameraRigMode) {
              case Yr.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Yr.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Yr.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Yr.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Yr.d.RIG_MODE_VR:
                Zr = this._cameraRigParams.stereoHalfAngle * (0 === Qr ? 1 : -1);
                break;
              case Yr.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Zr = this._cameraRigParams.stereoHalfAngle * (0 === Qr ? -1 : 1)
            }
            const Wr = new rr(Sr, this.alpha + Zr, this.beta, this.radius, this.Xx, this.eC());
            return Wr._cameraRigParams = {}, Wr.isRigCamera = !0, Wr.rigParent = this, Wr.upVector = this.upVector, Wr.mode = this.mode, Wr.orthoLeft = this.orthoLeft, Wr.orthoRight = this.orthoRight, Wr.orthoBottom = this.orthoBottom, Wr.orthoTop = this.orthoTop, Wr
          }
          _updateRigCameras() {
            const rr = this._rigCameras[0],
              Sr = this._rigCameras[1];
            switch (rr.beta = Sr.beta = this.beta, this.cameraRigMode) {
              case Yr.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Yr.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Yr.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Yr.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Yr.d.RIG_MODE_VR:
                rr.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Sr.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Yr.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                rr.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Sr.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Zr = jr.u.Distance(rr, Sr),
              Wr = this.eC().MU().getAspectRatio(this),
              ar = Math.tan(this.fov / 2),
              Ir = ar * Wr,
              fr = .5 * Zr * Qr,
              Er = fr * Math.sqrt(1 + 1 / (Ir * Ir)),
              pr = fr * Math.sqrt(1 + 1 / (ar * ar));
            return Math.max(Er, pr)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(or[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], fr = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.C)("target")], Ur = [(0, Wr.v)("targetHost")], tr = [(0, Wr.G)()], er = [(0, Wr.G)()], yr = [(0, Wr.G)()], Br = [(0, Wr.G)()], Tr = [(0, Wr.G)()], vr = [(0, Wr.G)()], Or = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], Pr = [(0, Wr.G)()], Hr = [(0, Wr.G)()], qr = [(0, Wr.G)()], gr = [(0, Wr.G)()], Cr = [(0, Wr.C)()], Mr = [(0, Wr.G)()], Ar = [(0, Wr.G)()], Vr = [(0, Wr.G)()], ir = [(0, Wr.A)()], wr = [(0, Wr.G)()], cr = [(0, Wr.G)()], Fr = [(0, Wr.G)()], (0, Zr.k)(rr, null, tr, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "inertialAlphaOffset" in rr,
              get: rr => rr.inertialAlphaOffset
            },
            metadata: ar
          }, null, br), (0, Zr.k)(rr, null, er, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "inertialBetaOffset" in rr,
              get: rr => rr.inertialBetaOffset
            },
            metadata: ar
          }, null, br), (0, Zr.k)(rr, null, yr, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "inertialRadiusOffset" in rr,
              get: rr => rr.inertialRadiusOffset
            },
            metadata: ar
          }, null, br), (0, Zr.k)(rr, null, Mr, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: rr => "panningInertia" in rr,
              get: rr => rr.panningInertia
            },
            metadata: ar
          }, null, br), (0, Zr.k)(rr, null, Ar, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: rr => "zoomToMouseLocation" in rr,
              get: rr => rr.zoomToMouseLocation
            },
            metadata: ar
          }, null, br), (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "alpha" in rr,
              get: rr => rr.alpha,
              set: (rr, Sr) => {
                rr.alpha = Sr
              }
            },
            metadata: ar
          }, Jr, Dr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: rr => "beta" in rr,
              get: rr => rr.beta,
              set: (rr, Sr) => {
                rr.beta = Sr
              }
            },
            metadata: ar
          }, dr, sr), (0, Zr.k)(null, null, fr, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: rr => "radius" in rr,
              get: rr => rr.radius,
              set: (rr, Sr) => {
                rr.radius = Sr
              }
            },
            metadata: ar
          }, ur, rS), (0, Zr.k)(null, null, pr, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: rr => "overrideCloneAlphaBetaRadius" in rr,
              get: rr => rr.overrideCloneAlphaBetaRadius,
              set: (rr, Sr) => {
                rr.overrideCloneAlphaBetaRadius = Sr
              }
            },
            metadata: ar
          }, SS, QS), (0, Zr.k)(null, null, xr, {
            kind: "field",
            name: "Xx",
            static: !1,
            private: !1,
            access: {
              has: rr => "Xx" in rr,
              get: rr => rr.Xx,
              set: (rr, Sr) => {
                rr.Xx = Sr
              }
            },
            metadata: ar
          }, ZS, WS), (0, Zr.k)(null, null, Ur, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: rr => "_targetHost" in rr,
              get: rr => rr._targetHost,
              set: (rr, Sr) => {
                rr._targetHost = Sr
              }
            },
            metadata: ar
          }, aS, jS), (0, Zr.k)(null, null, Br, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "lowerAlphaLimit" in rr,
              get: rr => rr.lowerAlphaLimit,
              set: (rr, Sr) => {
                rr.lowerAlphaLimit = Sr
              }
            },
            metadata: ar
          }, IS, fS), (0, Zr.k)(null, null, Tr, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "upperAlphaLimit" in rr,
              get: rr => rr.upperAlphaLimit,
              set: (rr, Sr) => {
                rr.upperAlphaLimit = Sr
              }
            },
            metadata: ar
          }, ES, pS), (0, Zr.k)(null, null, vr, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "lowerBetaLimit" in rr,
              get: rr => rr.lowerBetaLimit,
              set: (rr, Sr) => {
                rr.lowerBetaLimit = Sr
              }
            },
            metadata: ar
          }, xS, mS), (0, Zr.k)(null, null, Or, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "upperBetaLimit" in rr,
              get: rr => rr.upperBetaLimit,
              set: (rr, Sr) => {
                rr.upperBetaLimit = Sr
              }
            },
            metadata: ar
          }, NS, US), (0, Zr.k)(null, null, Lr, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "lowerRadiusLimit" in rr,
              get: rr => rr.lowerRadiusLimit,
              set: (rr, Sr) => {
                rr.lowerRadiusLimit = Sr
              }
            },
            metadata: ar
          }, tS, hS), (0, Zr.k)(null, null, lr, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "upperRadiusLimit" in rr,
              get: rr => rr.upperRadiusLimit,
              set: (rr, Sr) => {
                rr.upperRadiusLimit = Sr
              }
            },
            metadata: ar
          }, zS, YS), (0, Zr.k)(null, null, Xr, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "lowerTargetYLimit" in rr,
              get: rr => rr.lowerTargetYLimit,
              set: (rr, Sr) => {
                rr.lowerTargetYLimit = Sr
              }
            },
            metadata: ar
          }, nS, eS), (0, Zr.k)(null, null, Pr, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: rr => "inertialPanningX" in rr,
              get: rr => rr.inertialPanningX,
              set: (rr, Sr) => {
                rr.inertialPanningX = Sr
              }
            },
            metadata: ar
          }, KS, yS), (0, Zr.k)(null, null, Hr, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: rr => "inertialPanningY" in rr,
              get: rr => rr.inertialPanningY,
              set: (rr, Sr) => {
                rr.inertialPanningY = Sr
              }
            },
            metadata: ar
          }, BS, TS), (0, Zr.k)(null, null, qr, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: rr => "pinchToPanMaxDistance" in rr,
              get: rr => rr.pinchToPanMaxDistance,
              set: (rr, Sr) => {
                rr.pinchToPanMaxDistance = Sr
              }
            },
            metadata: ar
          }, vS, OS), (0, Zr.k)(null, null, gr, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: rr => "panningDistanceLimit" in rr,
              get: rr => rr.panningDistanceLimit,
              set: (rr, Sr) => {
                rr.panningDistanceLimit = Sr
              }
            },
            metadata: ar
          }, LS, lS), (0, Zr.k)(null, null, Cr, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: rr => "panningOriginTarget" in rr,
              get: rr => rr.panningOriginTarget,
              set: (rr, Sr) => {
                rr.panningOriginTarget = Sr
              }
            },
            metadata: ar
          }, XS, PS), (0, Zr.k)(null, null, Vr, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: rr => "zoomOnFactor" in rr,
              get: rr => rr.zoomOnFactor,
              set: (rr, Sr) => {
                rr.zoomOnFactor = Sr
              }
            },
            metadata: ar
          }, HS, qS), (0, Zr.k)(null, null, ir, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: rr => "targetScreenOffset" in rr,
              get: rr => rr.targetScreenOffset,
              set: (rr, Sr) => {
                rr.targetScreenOffset = Sr
              }
            },
            metadata: ar
          }, RS, gS), (0, Zr.k)(null, null, wr, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: rr => "allowUpsideDown" in rr,
              get: rr => rr.allowUpsideDown,
              set: (rr, Sr) => {
                rr.allowUpsideDown = Sr
              }
            },
            metadata: ar
          }, CS, MS), (0, Zr.k)(null, null, cr, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: rr => "useInputToRestoreState" in rr,
              get: rr => rr.useInputToRestoreState,
              set: (rr, Sr) => {
                rr.useInputToRestoreState = Sr
              }
            },
            metadata: ar
          }, GS, kS), (0, Zr.k)(null, null, Fr, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: rr => "restoreStateInterpolationFactor" in rr,
              get: rr => rr.restoreStateInterpolationFactor,
              set: (rr, Sr) => {
                rr.restoreStateInterpolationFactor = Sr
              }
            },
            metadata: ar
          }, AS, VS), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      Vr = !1;
    Vr || (Vr = !0, fr.c.AddNodeConstructor("ArcRotateCamera", ((rr, Sr) => () => new Ar(rr, 0, 0, 1, jr.u.Zero(), Sr))), (0, gr.e)("BABYLON.ArcRotateCamera", Ar))
  },
  42085: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr.c
    });
    var Zr = Qr(42090);
    (0, Zr.f)()
  },
  42090: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      f: () => mr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(38684),
      Ir = Qr(42094),
      fr = Qr(42060),
      Er = Qr(38609);
    let pr = (() => {
        var rr;
        let Sr, Qr, fr = Ir.c,
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        return rr = class extends fr {
          constructor(rr, Sr, Qr, Wr) {
            super(rr, Qr, Wr), this.groundColor = (0, Zr.m)(this, Er, new jr.e(0, 0, 0)), this.direction = ((0, Zr.m)(this, pr), (0, Zr.m)(this, xr, void 0)), (0, Zr.m)(this, mr), this.direction = Sr || ar.u.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(rr) {
            return this.direction = ar.u.Normalize(rr.subtract(ar.u.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Qr.x, Qr.y, Qr.z, 0, Sr), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Sr), this
          }
          transferToNodeMaterialEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return rr.setFloat3(Sr, Qr.x, Qr.y, Qr.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ar.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ir.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(rr, Sr) {
            rr["HEMILIGHT" + Sr] = !0
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(fr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.n)()], Qr = [(0, Wr.C)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "groundColor" in rr,
              get: rr => rr.groundColor,
              set: (rr, Sr) => {
                rr.groundColor = Sr
              }
            },
            metadata: ar
          }, Er, pr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: rr => "direction" in rr,
              get: rr => rr.direction,
              set: (rr, Sr) => {
                rr.direction = Sr
              }
            },
            metadata: ar
          }, xr, mr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      xr = !1;

    function mr() {
      xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_3", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.HemisphericLight", pr))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
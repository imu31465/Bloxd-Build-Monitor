export const id = 252;
export const ids = [252];
export const modules = {
  40380: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Lv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36618),
      gv = Pv(36594),
      pv = Pv(36620),
      dv = Pv(39518),
      Nv = Pv(39712),
      lv = Pv(39479),
      Tv = Pv(39220),
      Wv = Pv(36599);
    class wv {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(vv) {
        this._zoomStopsAnimation = vv
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(vv) {
        this._idleRotationSpeed = vv
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(vv) {
        this._idleRotationWaitTime = vv
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(vv) {
        this._idleRotationSpinupTime = vv
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
      attach(vv) {
        this._attachedCamera = vv;
        const zv = this._attachedCamera.rD();
        this._onPrePointerObservableObserver = zv.onPrePointerObservable.add((vv => {
          vv.type !== lv.b.POINTERDOWN ? vv.type === lv.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = vv.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const vv = Tv.c.Now;
          let zv = 0;
          null != this._lastFrameTime && (zv = vv - this._lastFrameTime), this._lastFrameTime = vv, this._applyUserInteraction();
          const Pv = vv - this._lastInteractionTime - this._idleRotationWaitTime,
            hv = Math.max(Math.min(Pv / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * hv, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (zv / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const vv = this._attachedCamera.rD();
        this._onPrePointerObservableObserver && vv.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(vv) {
        this._lastInteractionTime = vv ?? Tv.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Wv.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let vv = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (vv = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? vv : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Tv.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Pv(40387);
    class av {
      constructor() {
        this._easingMode = av.EASINGMODE_EASEIN
      }
      setEasingMode(vv) {
        const zv = Math.min(Math.max(vv, 0), 2);
        this._easingMode = zv
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(vv) {
        throw new Error("You must implement this method")
      }
      ease(vv) {
        switch (this._easingMode) {
          case av.EASINGMODE_EASEIN:
            return this.easeInCore(vv);
          case av.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - vv)
        }
        return vv >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - vv))) + .5 : .5 * this.easeInCore(2 * vv)
      }
    }
    av.EASINGMODE_EASEIN = 0, av.EASINGMODE_EASEOUT = 1, av.EASINGMODE_EASEINOUT = 2;
    var sv = Pv(40396);
    class Cv {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(vv) {
        if (this._autoTransitionRange === vv) return;
        this._autoTransitionRange = vv;
        const zv = this._attachedCamera;
        zv && (vv ? this._onMeshTargetChangedObserver = zv.onMeshTargetChangedObservable.add((vv => {
          if (vv && (vv.computeWorldMatrix(!0), vv.cV)) {
            const zv = vv.cV().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * zv, this.upperRadiusTransitionRange = .05 * zv
          }
        })) : this._onMeshTargetChangedObserver && zv.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(vv) {
        this._attachedCamera = vv, this._onAfterCheckInputsObserver = vv.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(vv) {
        return !!this._attachedCamera && (this._attachedCamera.radius === vv && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(vv) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (Cv.EasingFunction.setEasingMode(Cv.EasingMode), this._radiusBounceTransition = sv.b.CreateAnimation("radius", sv.b.ANIMATIONTYPE_FLOAT, 60, Cv.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const zv = sv.b.TransitionTo("radius", this._attachedCamera.radius + vv, this._attachedCamera, this._attachedCamera.rD(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        zv && this._animatables.push(zv)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Cv.EasingFunction = new class extends av {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = vv
      }
      easeInCore(vv) {
        const zv = Math.max(0, this.amplitude);
        return Math.pow(vv, 3) - vv * zv * Math.sin(3.141592653589793 * vv)
      }
    }(.3), Cv.EasingMode = av.EASINGMODE_EASEOUT;
    class iv {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new ev.c, this._mode = iv.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(vv) {
        this._mode = vv
      }
      get mode() {
        return this._mode
      }
      set radiusScale(vv) {
        this._radiusScale = vv
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(vv) {
        this._positionScale = vv
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(vv) {
        this._defaultElevation = vv
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(vv) {
        this._elevationReturnTime = vv
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(vv) {
        this._elevationReturnWaitTime = vv
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(vv) {
        this._zoomStopsAnimation = vv
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(vv) {
        this._framingTime = vv
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(vv) {
        this._attachedCamera = vv;
        const zv = this._attachedCamera.rD();
        iv.EasingFunction.setEasingMode(iv.EasingMode), this._onPrePointerObservableObserver = zv.onPrePointerObservable.add((vv => {
          vv.type !== lv.b.POINTERDOWN ? vv.type === lv.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = vv.onMeshTargetChangedObservable.add((vv => {
          vv && vv.cV && this.zoomOnMesh(vv, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = vv.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const vv = this._attachedCamera.rD();
        this._onPrePointerObservableObserver && vv.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        vv.computeWorldMatrix(!0);
        const hv = vv.cV().boundingBox;
        this.zoomOnBoundingInfo(hv.minimumWorld, hv.maximumWorld, zv, Pv)
      }
      zoomOnMeshHierarchy(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        vv.computeWorldMatrix(!0);
        const hv = vv.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(hv.min, hv.max, zv, Pv)
      }
      zoomOnMeshesHierarchy(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hv = new gv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Sv = new gv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let ev = 0; ev < vv.length; ev++) {
          const zv = vv[ev].getHierarchyBoundingVectors(!0);
          gv.l.CheckExtends(zv.min, hv, Sv), gv.l.CheckExtends(zv.max, hv, Sv)
        }
        this.zoomOnBoundingInfo(hv, Sv, zv, Pv)
      }
      zoomOnBoundingInfo(vv, zv) {
        let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const ev = vv.y,
          pv = ev + (zv.y - ev) * this._positionScale,
          dv = zv.subtract(vv).scale(.5);
        if (!isFinite(pv)) return !1;
        if (hv) Pv = new gv.l(0, pv, 0);
        else {
          const zv = vv.add(dv);
          Pv = new gv.l(zv.x, pv, zv.z)
        }
        this._vectorTransition || (this._vectorTransition = sv.b.CreateAnimation("target", sv.b.ANIMATIONTYPE_VECTOR3, 60, iv.EasingFunction)), this._betaIsAnimating = !0;
        let Nv = sv.b.TransitionTo("target", Pv, this._attachedCamera, this._attachedCamera.rD(), 60, this._vectorTransition, this._framingTime);
        Nv && this._animatables.push(Nv);
        let lv = 0;
        if (this._mode === iv.FitFrustumSidesMode) {
          const Pv = this._calculateLowerRadiusFromModelBoundingSphere(vv, zv);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = dv.length() + this._attachedCamera.minZ), lv = Pv
        } else this._mode === iv.IgnoreBoundsSizeMode && (lv = this._calculateLowerRadiusFromModelBoundingSphere(vv, zv), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Pv = zv.subtract(vv).length();
          this._attachedCamera.panningSensibility = 5e3 / Pv, this._attachedCamera.wheelPrecision = 100 / lv
        }
        return this._radiusTransition || (this._radiusTransition = sv.b.CreateAnimation("radius", sv.b.ANIMATIONTYPE_FLOAT, 60, iv.EasingFunction)), Nv = sv.b.TransitionTo("radius", lv, this._attachedCamera, this._attachedCamera.rD(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Sv && Sv(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Nv && this._animatables.push(Nv), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(vv, zv) {
        const Pv = this._attachedCamera;
        if (!Pv) return 0;
        let hv = Pv._calculateLowerRadiusFromModelBoundingSphere(vv, zv, this._radiusScale);
        return Pv.lowerRadiusLimit && this._mode === iv.IgnoreBoundsSizeMode && (hv = hv < Pv.lowerRadiusLimit ? Pv.lowerRadiusLimit : hv), Pv.upperRadiusLimit && (hv = hv > Pv.upperRadiusLimit ? Pv.upperRadiusLimit : hv), hv
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const vv = Tv.c.Now - this._lastInteractionTime,
          zv = .5 * Math.PI - this._defaultElevation,
          Pv = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Pv && vv >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = sv.b.CreateAnimation("beta", sv.b.ANIMATIONTYPE_FLOAT, 60, iv.EasingFunction));
          const vv = sv.b.TransitionTo("beta", zv, this._attachedCamera, this._attachedCamera.rD(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          vv && this._animatables.push(vv)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Tv.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    iv.EasingFunction = new class extends av {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = vv
      }
      easeInCore(vv) {
        return this.exponent <= 0 ? vv : (Math.exp(this.exponent * vv) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, iv.EasingMode = av.EASINGMODE_EASEINOUT, iv.IgnoreBoundsSizeMode = 0, iv.FitFrustumSidesMode = 1;
    var cv = Pv(39515),
      Gv = Pv(39511),
      mv = Pv(39535),
      jv = Pv(39399);
    let fv = (() => {
        var vv;
        let zv, Pv = [],
          ev = [];
        return vv = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, hv.f)(this, Pv, [0, 1, 2]), this._pointerInput = (0, hv.f)(this, ev)
          }
          attachControl(vv) {
            vv = jv.h.BackCompatCameraNoPreventDefault(arguments);
            const zv = this.camera.ma(),
              Pv = zv.getInputElement();
            let hv = 0,
              Sv = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ev => {
              const gv = ev.event,
                pv = "touch" === gv.pointerType;
              if (ev.type !== lv.b.POINTERMOVE && -1 === this.buttons.indexOf(gv.button)) return;
              const dv = gv.target;
              if (this._altKey = gv.altKey, this._ctrlKey = gv.ctrlKey, this._metaKey = gv.metaKey, this._shiftKey = gv.shiftKey, this._buttonsPressed = gv.buttons, zv.isPointerLock) {
                const vv = gv.movementX,
                  zv = gv.movementY;
                this.onTouch(null, vv, zv), this._pointA = null, this._pointB = null
              } else {
                if (ev.type !== lv.b.POINTERDOWN && ev.type !== lv.b.POINTERDOUBLETAP && pv && this._pointA?.pointerId !== gv.pointerId && this._pointB?.pointerId !== gv.pointerId) return;
                if (ev.type !== lv.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !pv)
                  if (ev.type === lv.b.POINTERDOUBLETAP) this.onDoubleTap(gv.pointerType, gv);
                  else if (ev.type !== lv.b.POINTERUP || this._currentMousePointerIdDown !== gv.pointerId && !pv) {
                  if (ev.type === lv.b.POINTERMOVE)
                    if (vv || gv.preventDefault(), this._pointA && null === this._pointB) {
                      const vv = gv.clientX - this._pointA.x,
                        zv = gv.clientY - this._pointA.y;
                      this._pointA.x = gv.clientX, this._pointA.y = gv.clientY, this.onTouch(this._pointA, vv, zv)
                    } else if (this._pointA && this._pointB) {
                    const vv = this._pointA.pointerId === gv.pointerId ? this._pointA : this._pointB;
                    vv.x = gv.clientX, vv.y = gv.clientY;
                    const zv = this._pointA.x - this._pointB.x,
                      Pv = this._pointA.y - this._pointB.y,
                      pv = zv * zv + Pv * Pv,
                      dv = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: gv.pointerId,
                        type: ev.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, hv, pv, Sv, dv), Sv = dv, hv = pv
                  }
                } else {
                  try {
                    dv?.releasePointerCapture(gv.pointerId)
                  } catch (Nv) {}
                  pv || (this._pointB = null), zv._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == gv.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == gv.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== hv || Sv) && (this.onMultiTouch(this._pointA, this._pointB, hv, 0, Sv, null), hv = 0, Sv = null), this._currentMousePointerIdDown = -1, this.onButtonUp(gv), vv || gv.preventDefault()
                } else {
                  try {
                    dv?.setPointerCapture(gv.pointerId)
                  } catch (Nv) {}
                  if (null === this._pointA) this._pointA = {
                    x: gv.clientX,
                    y: gv.clientY,
                    pointerId: gv.pointerId,
                    type: gv.pointerType,
                    button: gv.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: gv.clientX,
                      y: gv.clientY,
                      pointerId: gv.pointerId,
                      type: gv.pointerType,
                      button: gv.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || pv || (this._currentMousePointerIdDown = gv.pointerId), this.onButtonDown(gv), vv || (gv.preventDefault(), Pv && Pv.focus())
                }
              }
            }, this._observer = this.camera.rD()._inputManager._addCameraPointerObserver(this._pointerInput, lv.b.POINTERDOWN | lv.b.POINTERUP | lv.b.POINTERMOVE | lv.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, hv = 0, Sv = null, this.onLostFocus()
            }, this._contextMenuBind = vv => this.onContextMenu(vv), Pv && Pv.addEventListener("contextmenu", this._contextMenuBind, !1);
            const ev = this.camera.rD().ma().getHostWindow();
            ev && jv.h.RegisterTopRootEvents(ev, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const vv = this.camera.rD().ma().getHostWindow();
              vv && jv.h.UnregisterTopRootEvents(vv, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.rD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const vv = this.camera.rD().ma().getInputElement();
                vv && vv.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(vv, zv) {}
          onTouch(vv, zv, Pv) {}
          onMultiTouch(vv, zv, Pv, hv, Sv, ev) {}
          onContextMenu(vv) {
            vv.preventDefault()
          }
          onButtonDown(vv) {}
          onButtonUp(vv) {}
          onLostFocus() {}
        }, (() => {
          const gv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: vv => "buttons" in vv,
              get: vv => vv.buttons,
              set: (vv, zv) => {
                vv.buttons = zv
              }
            },
            metadata: gv
          }, Pv, ev), gv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gv
          })
        })(), vv
      })(),
      Fv = (() => {
        var vv;
        let zv, Pv, ev, gv = fv,
          pv = [],
          dv = [],
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        return vv = class extends gv {
          constructor() {
            super(...arguments), this.pinchZoom = (0, hv.f)(this, pv, !0), this.multiTouchPanning = ((0, hv.f)(this, dv), (0, hv.f)(this, Nv, !0)), this.multiTouchPanAndZoom = ((0, hv.f)(this, lv), (0, hv.f)(this, Tv, !0)), this._isPinching = ((0, hv.f)(this, Wv), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(vv, zv) {}
          _computeMultiTouchPanning(vv, zv) {}
          onMultiTouch(vv, zv, Pv, hv, Sv, ev) {
            0 === Pv && null === Sv || 0 === hv && null === ev || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Pv, hv), this._computeMultiTouchPanning(Sv, ev)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Pv, hv), this._isPinching = !0) : this._computeMultiTouchPanning(Sv, ev)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Sv, ev) : this.pinchZoom && this._computePinchZoom(Pv, hv))
          }
          onButtonUp(vv) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const wv = "function" === typeof Symbol && Symbol.metadata ? Object.create(gv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: vv => "pinchZoom" in vv,
              get: vv => vv.pinchZoom,
              set: (vv, zv) => {
                vv.pinchZoom = zv
              }
            },
            metadata: wv
          }, pv, dv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: vv => "multiTouchPanning" in vv,
              get: vv => vv.multiTouchPanning,
              set: (vv, zv) => {
                vv.multiTouchPanning = zv
              }
            },
            metadata: wv
          }, Nv, lv), (0, hv.e)(null, null, ev, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: vv => "multiTouchPanAndZoom" in vv,
              get: vv => vv.multiTouchPanAndZoom,
              set: (vv, zv) => {
                vv.multiTouchPanAndZoom = zv
              }
            },
            metadata: wv
          }, Tv, Wv), wv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wv
          })
        })(), vv
      })(),
      Yv = (() => {
        var vv;
        let zv, Pv, ev, gv, pv, dv, Nv, lv = Fv,
          Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [],
          iv = [],
          cv = [],
          Gv = [],
          mv = [],
          jv = [],
          fv = [],
          Yv = [],
          nv = [];
        return vv = class extends lv {
          constructor() {
            super(...arguments), this.buttons = (0, hv.f)(this, Tv, [0, 1, 2]), this.angularSensibilityX = ((0, hv.f)(this, Wv), (0, hv.f)(this, wv, 1e3)), this.angularSensibilityY = ((0, hv.f)(this, av), (0, hv.f)(this, sv, 1e3)), this.pinchPrecision = ((0, hv.f)(this, Cv), (0, hv.f)(this, iv, 12)), this.pinchDeltaPercentage = ((0, hv.f)(this, cv), (0, hv.f)(this, Gv, 0)), this.useNaturalPinchZoom = ((0, hv.f)(this, mv), (0, hv.f)(this, jv, !1)), this.panningSensibility = ((0, hv.f)(this, fv), (0, hv.f)(this, Yv, 1e3)), this.pinchInwards = ((0, hv.f)(this, nv), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(vv, zv) {
            if (vv && zv) {
              const Pv = zv.x - vv.x,
                hv = zv.y - vv.y,
                Sv = this.camera.movement.input.getEntry("pointer", "pan"),
                ev = Sv?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== ev && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Pv * ev, this.camera.movement.panAccumulatedPixels.y += hv * ev)
            }
          }
          _computePinchZoom(zv, Pv) {
            const hv = this.camera.radius || vv.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = hv * Math.sqrt(zv) / Math.sqrt(Pv);
            else if (this.pinchDeltaPercentage) {
              const vv = .001 * (Pv - zv) * hv * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += vv
            } else {
              const vv = (Pv - zv) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += vv
            }
          }
          onTouch(vv, zv, Pv) {
            const hv = this._activeEntry ?? (this.camera.ma().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (hv)
              if ("pan" === hv.interaction) {
                const vv = hv.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== vv && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zv * vv, this.camera.movement.panAccumulatedPixels.y += Pv * vv)
              } else if ("rotate" === hv.interaction) {
              const vv = hv.bZ ?? hv.sensitivity ?? 1 / this.angularSensibilityX,
                Sv = hv.uZ ?? hv.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -zv * vv, this.camera.movement.rotationAccumulatedPixels.y += -Pv * Sv
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(vv, zv, Pv, hv, Sv, ev) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(hv) - Math.sqrt(Pv)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(vv, zv, Pv, hv, Sv, ev)
          }
          onButtonDown(vv) {
            this._pointerConditions.button = vv.button, this._pointerModifiers.ctrl = vv.ctrlKey, this._pointerModifiers.alt = vv.altKey, this._pointerModifiers.shift = vv.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(vv)
          }
          onButtonUp(vv) {
            this._activeEntry = null, super.onButtonUp(vv)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Fv = "function" === typeof Symbol && Symbol.metadata ? Object.create(lv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], gv = [(0, Sv.L)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: vv => "buttons" in vv,
              get: vv => vv.buttons,
              set: (vv, zv) => {
                vv.buttons = zv
              }
            },
            metadata: Fv
          }, Tv, Wv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: vv => "angularSensibilityX" in vv,
              get: vv => vv.angularSensibilityX,
              set: (vv, zv) => {
                vv.angularSensibilityX = zv
              }
            },
            metadata: Fv
          }, wv, av), (0, hv.e)(null, null, ev, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: vv => "angularSensibilityY" in vv,
              get: vv => vv.angularSensibilityY,
              set: (vv, zv) => {
                vv.angularSensibilityY = zv
              }
            },
            metadata: Fv
          }, sv, Cv), (0, hv.e)(null, null, gv, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: vv => "pinchPrecision" in vv,
              get: vv => vv.pinchPrecision,
              set: (vv, zv) => {
                vv.pinchPrecision = zv
              }
            },
            metadata: Fv
          }, iv, cv), (0, hv.e)(null, null, pv, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: vv => "pinchDeltaPercentage" in vv,
              get: vv => vv.pinchDeltaPercentage,
              set: (vv, zv) => {
                vv.pinchDeltaPercentage = zv
              }
            },
            metadata: Fv
          }, Gv, mv), (0, hv.e)(null, null, dv, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: vv => "useNaturalPinchZoom" in vv,
              get: vv => vv.useNaturalPinchZoom,
              set: (vv, zv) => {
                vv.useNaturalPinchZoom = zv
              }
            },
            metadata: Fv
          }, jv, fv), (0, hv.e)(null, null, Nv, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: vv => "panningSensibility" in vv,
              get: vv => vv.panningSensibility,
              set: (vv, zv) => {
                vv.panningSensibility = zv
              }
            },
            metadata: Fv
          }, Yv, nv), Fv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fv
          })
        })(), vv.MinimumRadiusForPinch = .001, vv
      })();
    mv.b.ArcRotateCameraPointersInput = Yv;
    var nv = Pv(39484);
    let Ov = (() => {
      var vv;
      let zv, Pv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av, sv = [],
        Cv = [],
        iv = [],
        cv = [],
        Gv = [],
        mv = [],
        fv = [],
        Fv = [],
        Yv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [],
        Uv = [],
        Rv = [],
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [];
      return vv = class {
        constructor() {
          this.camera = (0, hv.f)(this, sv), this.keysUp = (0, hv.f)(this, Cv, [38]), this.keysDown = ((0, hv.f)(this, iv), (0, hv.f)(this, cv, [40])), this.keysLeft = ((0, hv.f)(this, Gv), (0, hv.f)(this, mv, [37])), this.keysRight = ((0, hv.f)(this, fv), (0, hv.f)(this, Fv, [39])), this.keysReset = ((0, hv.f)(this, Yv), (0, hv.f)(this, Ov, [220])), this.keysZoomIn = ((0, hv.f)(this, Dv), (0, hv.f)(this, Kv, [187, 107])), this.keysZoomOut = ((0, hv.f)(this, Vv), (0, hv.f)(this, Uv, [189, 109])), this.panningSensibility = ((0, hv.f)(this, Rv), (0, hv.f)(this, xv, 50)), this.zoomingSensibility = ((0, hv.f)(this, tv), (0, hv.f)(this, qv, 25)), this.angularSpeed = ((0, hv.f)(this, Iv), (0, hv.f)(this, Qv, .01)), this._useAltToZoom = ((0, hv.f)(this, Zv), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new gv.j, this._panDirection = new gv.j
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(vv) {
          this._useAltToZoom = vv, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const vv = this.camera.movement.input,
            zv = vv.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && zv ? vv.inputMap.splice(vv.inputMap.indexOf(zv), 1) : this._useAltToZoom && !zv && vv.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(vv) {
          vv = jv.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.rD(), this._engine = this._scene.ma(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zv => {
            const Pv = zv.event;
            if (!Pv.metaKey)
              if (zv.type === nv.e.KEYDOWN) {
                if (this._ctrlPressed = Pv.ctrlKey, this._altPressed = Pv.altKey, -1 !== this.keysUp.indexOf(Pv.keyCode) || -1 !== this.keysDown.indexOf(Pv.keyCode) || -1 !== this.keysLeft.indexOf(Pv.keyCode) || -1 !== this.keysRight.indexOf(Pv.keyCode) || -1 !== this.keysReset.indexOf(Pv.keyCode) || -1 !== this.keysZoomIn.indexOf(Pv.keyCode) || -1 !== this.keysZoomOut.indexOf(Pv.keyCode)) {
                  -1 === this._keys.indexOf(Pv.keyCode) && this._keys.push(Pv.keyCode), Pv.preventDefault && (vv || Pv.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Pv.keyCode) || -1 !== this.keysDown.indexOf(Pv.keyCode) || -1 !== this.keysLeft.indexOf(Pv.keyCode) || -1 !== this.keysRight.indexOf(Pv.keyCode) || -1 !== this.keysReset.indexOf(Pv.keyCode) || -1 !== this.keysZoomIn.indexOf(Pv.keyCode) || -1 !== this.keysZoomOut.indexOf(Pv.keyCode)) {
              const zv = this._keys.indexOf(Pv.keyCode);
              zv >= 0 && this._keys.splice(zv, 1), Pv.preventDefault && (vv || Pv.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const vv = this.camera,
              zv = vv.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Pv = this._rotateDirection.set(0, 0),
              hv = this._panDirection.set(0, 0);
            let Sv = 0,
              ev = 0;
            for (let gv = 0; gv < this._keys.length; gv++) {
              const pv = this._keys[gv];
              if (this._keyboardConditions.key = pv, -1 === this.keysReset.indexOf(pv)) {
                const vv = zv.resolveInteraction("keyboard", this._keyboardConditions);
                if (vv)
                  if ("pan" === vv.interaction) ev = Math.max(ev, vv.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(pv) ? hv.x -= 1 : -1 !== this.keysRight.indexOf(pv) ? hv.x += 1 : -1 !== this.keysUp.indexOf(pv) ? hv.y += 1 : -1 !== this.keysDown.indexOf(pv) && (hv.y -= 1);
                  else if ("zoom" === vv.interaction) {
                  const Pv = vv.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(pv) || -1 !== this.keysZoomIn.indexOf(pv) ? zv.handlers.zoom(Pv) : -1 === this.keysDown.indexOf(pv) && -1 === this.keysZoomOut.indexOf(pv) || zv.handlers.zoom(-Pv)
                } else "rotate" === vv.interaction && (Sv = Math.max(Sv, vv.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(pv) ? Pv.x -= 1 : -1 !== this.keysRight.indexOf(pv) ? Pv.x += 1 : -1 !== this.keysUp.indexOf(pv) ? Pv.y -= 1 : -1 !== this.keysDown.indexOf(pv) && (Pv.y += 1))
              } - 1 !== this.keysReset.indexOf(pv) && vv.useInputToRestoreState && vv.restoreState()
            }
            0 === Pv.x && 0 === Pv.y || (Pv.normalize().scaleInPlace(Sv), zv.handlers.rotate(Pv.x, Pv.y)), 0 === hv.x && 0 === hv.y || (hv.normalize().scaleInPlace(ev), zv.handlers.pan(hv.x, hv.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const gv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], wv = [(0, Sv.L)()], av = [(0, Sv.L)()], (0, hv.e)(vv, null, av, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: vv => "useAltToZoom" in vv,
            get: vv => vv.useAltToZoom
          },
          metadata: gv
        }, null, sv), (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysUp" in vv,
            get: vv => vv.keysUp,
            set: (vv, zv) => {
              vv.keysUp = zv
            }
          },
          metadata: gv
        }, Cv, iv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysDown" in vv,
            get: vv => vv.keysDown,
            set: (vv, zv) => {
              vv.keysDown = zv
            }
          },
          metadata: gv
        }, cv, Gv), (0, hv.e)(null, null, ev, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysLeft" in vv,
            get: vv => vv.keysLeft,
            set: (vv, zv) => {
              vv.keysLeft = zv
            }
          },
          metadata: gv
        }, mv, fv), (0, hv.e)(null, null, pv, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysRight" in vv,
            get: vv => vv.keysRight,
            set: (vv, zv) => {
              vv.keysRight = zv
            }
          },
          metadata: gv
        }, Fv, Yv), (0, hv.e)(null, null, dv, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysReset" in vv,
            get: vv => vv.keysReset,
            set: (vv, zv) => {
              vv.keysReset = zv
            }
          },
          metadata: gv
        }, Ov, Dv), (0, hv.e)(null, null, Nv, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysZoomIn" in vv,
            get: vv => vv.keysZoomIn,
            set: (vv, zv) => {
              vv.keysZoomIn = zv
            }
          },
          metadata: gv
        }, Kv, Vv), (0, hv.e)(null, null, lv, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: vv => "keysZoomOut" in vv,
            get: vv => vv.keysZoomOut,
            set: (vv, zv) => {
              vv.keysZoomOut = zv
            }
          },
          metadata: gv
        }, Uv, Rv), (0, hv.e)(null, null, Tv, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: vv => "panningSensibility" in vv,
            get: vv => vv.panningSensibility,
            set: (vv, zv) => {
              vv.panningSensibility = zv
            }
          },
          metadata: gv
        }, xv, tv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: vv => "zoomingSensibility" in vv,
            get: vv => vv.zoomingSensibility,
            set: (vv, zv) => {
              vv.zoomingSensibility = zv
            }
          },
          metadata: gv
        }, qv, Iv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: vv => "angularSpeed" in vv,
            get: vv => vv.angularSpeed,
            set: (vv, zv) => {
              vv.angularSpeed = zv
            }
          },
          metadata: gv
        }, Qv, Zv), gv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gv
        })
      })(), vv
    })();
    mv.b.ArcRotateCameraKeyboardMoveInput = Ov;
    var Dv = Pv(37293),
      Kv = Pv(39487);
    let Vv = (() => {
      var vv;
      let zv, Pv, ev, dv = [],
        Nv = [],
        Tv = [],
        wv = [],
        av = [],
        sv = [];
      return vv = class {
        constructor() {
          this.wheelPrecision = (0, hv.f)(this, dv, 3), this.zoomToMouseLocation = ((0, hv.f)(this, Nv), (0, hv.f)(this, Tv, !1)), this.wheelDeltaPercentage = ((0, hv.f)(this, wv), (0, hv.f)(this, av, 0)), this.customComputeDeltaFromMouseWheel = ((0, hv.f)(this, sv), null), this._viewOffset = new gv.l(0, 0, 0), this._globalOffset = new gv.l(0, 0, 0), this._inertialPanning = gv.l.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(vv, zv) {
          let Pv;
          const hv = .01 * vv * this.wheelDeltaPercentage * zv;
          return Pv = vv > 0 ? hv / (1 + this.wheelDeltaPercentage) : hv * (1 + this.wheelDeltaPercentage), Pv
        }
        attachControl(vv) {
          vv = jv.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = zv => {
            if (zv.type !== lv.b.POINTERWHEEL) return;
            const Pv = zv.event;
            let hv;
            const Sv = Pv.deltaMode === Kv.c.DOM_DELTA_LINE ? 40 : 1,
              ev = -Pv.deltaY * Sv;
            if (this.customComputeDeltaFromMouseWheel) hv = this.customComputeDeltaFromMouseWheel(ev, this, Pv);
            else if (this.wheelDeltaPercentage) {
              if (hv = this._computeDeltaFromMouseWheelLegacyEvent(ev, this.camera.radius), hv > 0) {
                const vv = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let zv = this.camera.radius,
                  Pv = vv + hv;
                for (let hv = 0; hv < 20 && !(zv <= Pv) && !(Math.abs(Pv * this.camera.inertia) < .001); hv++) zv -= Pv, Pv *= this.camera.inertia;
                zv = (0, pv.Clamp)(zv, 0, Number.MAX_VALUE), hv = this._computeDeltaFromMouseWheelLegacyEvent(ev, zv)
              }
            } else {
              const vv = this.camera.movement.input.getEntry("wheel", "zoom");
              hv = ev * (vv?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            hv && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(hv)) : this.camera.movement.zoomAccumulatedPixels += hv), Pv.preventDefault && (vv || Pv.preventDefault())
          }, this._observer = this.camera.rD()._inputManager._addCameraPointerObserver(this._wheel, lv.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Dk(0)
        }
        detachControl() {
          this._observer && (this.camera.rD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const vv = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(vv.inertialAlphaOffset) + Math.abs(vv.inertialBetaOffset) + Math.abs(vv.inertialRadiusOffset)) {
            this._updateHitPlane(), vv.target.addInPlace(this._inertialPanning), vv.radius -= this._zoomToMouseRadiusOffset;
            const zv = vv.movement.getFrameIndependentDecay(vv.inertia);
            this._inertialPanning.scaleInPlace(zv), this._zoomToMouseRadiusOffset *= zv, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Wv.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const vv = this.camera,
            zv = vv.target.subtract(vv.position);
          this._hitPlane = Dv.b.FromPositionAndNormal(vv.target, zv)
        }
        _getPosition() {
          const vv = this.camera,
            zv = vv.rD(),
            Pv = zv.createPickingRay(zv.pointerX, zv.pointerY, gv.c.Identity(), vv, !1);
          0 === vv.targetScreenOffset.x && 0 === vv.targetScreenOffset.y || (this._viewOffset.set(vv.targetScreenOffset.x, vv.targetScreenOffset.y, 0), vv.getViewMatrix().invertToRef(vv._cameraTransformMatrix), this._globalOffset = gv.l.TransformNormal(this._viewOffset, vv._cameraTransformMatrix), Pv.origin.addInPlace(this._globalOffset));
          let hv = 0;
          return this._hitPlane && (hv = Pv.intersectsPlane(this._hitPlane) ?? 0), Pv.origin.addInPlace(Pv.direction.scaleInPlace(hv))
        }
        _zoomToMouse(vv) {
          const zv = this.camera,
            Pv = 1 - zv.inertia,
            hv = zv.movement.getFrameIndependentInputScale(zv.inertia);
          if (zv.lowerRadiusLimit) {
            const Sv = zv.lowerRadiusLimit ?? 0;
            zv.radius - (this._zoomToMouseRadiusOffset + vv * hv) / Pv < Sv && (vv = ((zv.radius - Sv) * Pv - this._zoomToMouseRadiusOffset) / hv)
          }
          if (zv.upperRadiusLimit) {
            const Sv = zv.upperRadiusLimit ?? 0;
            zv.radius - (this._zoomToMouseRadiusOffset + vv * hv) / Pv > Sv && (vv = ((zv.radius - Sv) * Pv - this._zoomToMouseRadiusOffset) / hv)
          }
          const Sv = vv / Pv / zv.radius,
            ev = this._getPosition(),
            pv = gv.i.fa[6];
          ev.subtractToRef(zv.target, pv), pv.scaleInPlace(Sv), pv.scaleInPlace(Pv), pv.scaleInPlace(hv), this._inertialPanning.addInPlace(pv), this._zoomToMouseRadiusOffset += vv * hv
        }
        _zeroIfClose(vv) {
          Math.abs(vv.x) < Wv.e && (vv.x = 0), Math.abs(vv.y) < Wv.e && (vv.y = 0), Math.abs(vv.z) < Wv.e && (vv.z = 0)
        }
      }, (() => {
        const gv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelPrecision" in vv,
            get: vv => vv.wheelPrecision,
            set: (vv, zv) => {
              vv.wheelPrecision = zv
            }
          },
          metadata: gv
        }, dv, Nv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: vv => "zoomToMouseLocation" in vv,
            get: vv => vv.zoomToMouseLocation,
            set: (vv, zv) => {
              vv.zoomToMouseLocation = zv
            }
          },
          metadata: gv
        }, Tv, wv), (0, hv.e)(null, null, ev, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: vv => "wheelDeltaPercentage" in vv,
            get: vv => vv.wheelDeltaPercentage,
            set: (vv, zv) => {
              vv.wheelDeltaPercentage = zv
            }
          },
          metadata: gv
        }, av, sv), gv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gv
        })
      })(), vv
    })();
    mv.b.ArcRotateCameraMouseWheelInput = Vv;
    var Uv, Rv, xv = Pv(39190);
    class tv extends mv.e {
      constructor(vv) {
        super(vv)
      }
      addMouseWheel() {
        return this.add(new Vv), this
      }
      addPointers() {
        return this.add(new Yv), this
      }
      addKeyboard() {
        return this.add(new Ov), this
      }
    }(Uv = tv.prototype).addVRDeviceOrientation ?? (Uv.addVRDeviceOrientation = (0, xv.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Rv = tv.prototype).addGamepad ?? (Rv.addGamepad = (0, xv.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var qv = Pv(36631),
      Iv = Pv(39524),
      Qv = Pv(39530);
    class Zv extends Iv.c {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv), this.input = new Qv.c({
          pan: (vv, zv) => {
            this.panAccumulatedPixels.x += vv, this.panAccumulatedPixels.y += zv
          },
          rotate: (vv, zv) => {
            this.rotationAccumulatedPixels.x += vv, this.rotationAccumulatedPixels.y += zv
          },
          zoom: vv => {
            this.zoomAccumulatedPixels += vv
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

    function Av(vv, zv) {
      return isNaN(vv) ? zv : vv
    }
    let Lv = (() => {
        var vv;
        let zv, Pv, dv, lv, Tv, av, sv, mv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, qv, Iv, Qv, Lv, Hv, Mv, yv, Bv, Jv, Ev = Gv.e,
          ov = [],
          bv = [],
          rv = [],
          kv = [],
          Xv = [],
          uv = [],
          vz = [],
          zz = [],
          Pz = [],
          hz = [],
          Sz = [],
          ez = [],
          gz = [],
          pz = [],
          dz = [],
          Nz = [],
          lz = [],
          Tz = [],
          Wz = [],
          wz = [],
          az = [],
          sz = [],
          Cz = [],
          iz = [],
          cz = [],
          Gz = [],
          mz = [],
          jz = [],
          fz = [],
          Fz = [],
          Yz = [],
          nz = [],
          Oz = [],
          Dz = [],
          Kz = [],
          Vz = [],
          Uz = [],
          Rz = [],
          xz = [],
          tz = [],
          qz = [],
          Iz = [],
          Qz = [],
          Zz = [],
          Az = [],
          Lz = [],
          Hz = [];
        return vv = class extends Ev {
          get target() {
            return this.Fy
          }
          set target(vv) {
            this.setTarget(vv)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(vv) {
            vv && this.setTarget(vv)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(vv) {
            this.setPosition(vv)
          }
          set upVector(vv) {
            this._upToYMatrix || (this._yToUpMatrix = new gv.c, this._upToYMatrix = new gv.c, this._upVector = gv.l.Zero()), vv.normalize(), this._upVector.Vzv(vv), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            gv.c.RotationAlignToRef(gv.l.UpReadOnly, this._upVector, this._yToUpMatrix), gv.c.RotationAlignToRef(this._upVector, gv.l.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const vv = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(vv) < this._rotationEpsilon ? 0 : vv
          }
          set inertialAlphaOffset(vv) {
            this._inertialAlphaOffset = vv, 0 === vv && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const vv = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(vv) < this._rotationEpsilon ? 0 : vv
          }
          set inertialBetaOffset(vv) {
            this._inertialBetaOffset = vv, 0 === vv && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const vv = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(vv) < this._rotationEpsilon ? 0 : vv
          }
          set inertialRadiusOffset(vv) {
            this._inertialRadiusOffset = vv, 0 === vv && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(vv) {
            this._panningInertia = vv, this.movement && (this.movement.panInertia = vv)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(vv) {
            this._inertia = vv, this.movement && (this.movement.rotationInertia = vv, this.movement.zoomInertia = vv)
          }
          get angularSensibilityX() {
            const vv = this.inputs.attached.pointers;
            return vv ? vv.angularSensibilityX : 0
          }
          set angularSensibilityX(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.angularSensibilityX = vv)
          }
          get angularSensibilityY() {
            const vv = this.inputs.attached.pointers;
            return vv ? vv.angularSensibilityY : 0
          }
          set angularSensibilityY(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.angularSensibilityY = vv)
          }
          get pinchPrecision() {
            const vv = this.inputs.attached.pointers;
            return vv ? vv.pinchPrecision : 0
          }
          set pinchPrecision(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.pinchPrecision = vv)
          }
          get pinchDeltaPercentage() {
            const vv = this.inputs.attached.pointers;
            return vv ? vv.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.pinchDeltaPercentage = vv)
          }
          get useNaturalPinchZoom() {
            const vv = this.inputs.attached.pointers;
            return !!vv && vv.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.useNaturalPinchZoom = vv)
          }
          get panningSensibility() {
            const vv = this.inputs.attached.pointers;
            return vv ? vv.panningSensibility : 0
          }
          set panningSensibility(vv) {
            const zv = this.inputs.attached.pointers;
            zv && (zv.panningSensibility = vv)
          }
          get keysUp() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysUp : []
          }
          set keysUp(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysUp = vv)
          }
          get keysDown() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysDown : []
          }
          set keysDown(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysDown = vv)
          }
          get keysLeft() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysLeft : []
          }
          set keysLeft(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysLeft = vv)
          }
          get keysRight() {
            const vv = this.inputs.attached.keyboard;
            return vv ? vv.keysRight : []
          }
          set keysRight(vv) {
            const zv = this.inputs.attached.keyboard;
            zv && (zv.keysRight = vv)
          }
          get wheelPrecision() {
            const vv = this.inputs.attached.mousewheel;
            return vv ? vv.wheelPrecision : 0
          }
          set wheelPrecision(vv) {
            const zv = this.inputs.attached.mousewheel;
            zv && (zv.wheelPrecision = vv)
          }
          get zoomToMouseLocation() {
            const vv = this.inputs.attached.mousewheel;
            return !!vv && vv.zoomToMouseLocation
          }
          set zoomToMouseLocation(vv) {
            const zv = this.inputs.attached.mousewheel;
            zv && (zv.zoomToMouseLocation = vv)
          }
          get wheelDeltaPercentage() {
            const vv = this.inputs.attached.mousewheel;
            return vv ? vv.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(vv) {
            const zv = this.inputs.attached.mousewheel;
            zv && (zv.wheelDeltaPercentage = vv)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(vv) {
            this._useCtrlForPanningInternal = vv;
            const zv = this.movement.input,
              Pv = zv.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !vv && Pv ? zv.inputMap.splice(zv.inputMap.indexOf(Pv), 1) : vv && !Pv && zv.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const hv = zv.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !vv && hv ? zv.inputMap.splice(zv.inputMap.indexOf(hv), 1) : vv && !hv && zv.addEntry({
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
          set _panningMouseButton(vv) {
            this._panningMouseButtonInternal = vv;
            const zv = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            zv && (zv.button = vv)
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
          set useBouncingBehavior(vv) {
            vv !== this.useBouncingBehavior && (vv ? (this._bouncingBehavior = new Cv, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(vv) {
            vv !== this.useFramingBehavior && (vv ? (this._framingBehavior = new iv, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(vv) {
            vv !== this.useAutoRotationBehavior && (vv ? (this._autoRotationBehavior = new wv, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(vv, zv, Pv, Sv, pv, dv) {
            var Nv;
            let lv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(vv, gv.l.Zero(), dv, lv), Nv = this, this.alpha = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, void 0)), this.beta = ((0, hv.f)(this, rv), (0, hv.f)(this, kv, void 0)), this.radius = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, void 0)), this.overrideCloneAlphaBetaRadius = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, void 0)), this.Fy = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, void 0)), this._targetHost = ((0, hv.f)(this, Sz), (0, hv.f)(this, ez, void 0)), this._upToYMatrix = (0, hv.f)(this, gz), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, hv.f)(this, pz, null), this.upperAlphaLimit = ((0, hv.f)(this, dz), (0, hv.f)(this, Nz, null)), this.lowerBetaLimit = ((0, hv.f)(this, lz), (0, hv.f)(this, Tz, .01)), this.upperBetaLimit = ((0, hv.f)(this, Wz), (0, hv.f)(this, wz, Math.PI - .01)), this.lowerRadiusLimit = ((0, hv.f)(this, az), (0, hv.f)(this, sz, null)), this.upperRadiusLimit = ((0, hv.f)(this, Cz), (0, hv.f)(this, iz, null)), this.lowerTargetYLimit = ((0, hv.f)(this, cz), (0, hv.f)(this, Gz, -1 / 0)), this.inertialPanningX = ((0, hv.f)(this, mz), (0, hv.f)(this, jz, 0)), this.inertialPanningY = ((0, hv.f)(this, fz), (0, hv.f)(this, Fz, 0)), this.pinchToPanMaxDistance = ((0, hv.f)(this, Yz), (0, hv.f)(this, nz, 20)), this.panningDistanceLimit = ((0, hv.f)(this, Oz), (0, hv.f)(this, Dz, null)), this.panningOriginTarget = ((0, hv.f)(this, Kz), (0, hv.f)(this, Vz, gv.l.Zero())), this._panningInertia = ((0, hv.f)(this, Uz), .9), this._inertia = .9, this.zoomOnFactor = (0, hv.f)(this, Rz, 1), this.targetScreenOffset = ((0, hv.f)(this, xz), (0, hv.f)(this, tz, gv.j.Zero())), this.allowUpsideDown = ((0, hv.f)(this, qz), (0, hv.f)(this, Iz, !0)), this.useInputToRestoreState = ((0, hv.f)(this, Qz), (0, hv.f)(this, Zz, !0)), this.restoreStateInterpolationFactor = ((0, hv.f)(this, Az), (0, hv.f)(this, Lz, 0)), this._currentInterpolationFactor = ((0, hv.f)(this, Hz), 0), this._viewMatrix = new gv.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new gv.l(1, 1, 0), this._transformedDirection = new gv.l, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new ev.c, this.checkCollisions = !1, this.collisionRadius = new gv.l(.5, .5, .5), this._previousPosition = gv.l.Zero(), this._collisionVelocity = gv.l.Zero(), this._newPosition = gv.l.Zero(), this._computationVector = gv.l.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new gv.l(NaN, NaN, NaN), this._goalTargetScreenOffset = new gv.j(NaN, NaN), this._onCollisionPositionChange = function(vv, zv) {
              let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Pv ? (Nv.setPosition(zv), Nv.eW && Nv.eW(Pv)) : Nv._previousPosition.Vzv(Nv._position);
              const hv = Math.cos(Nv.alpha),
                Sv = Math.sin(Nv.alpha),
                ev = Math.cos(Nv.beta);
              let gv = Math.sin(Nv.beta);
              0 === gv && (gv = 1e-4);
              const pv = Nv._getTargetPosition();
              Nv._computationVector.f_(Nv.radius * hv * gv, Nv.radius * ev, Nv.radius * Sv * gv), pv.addToRef(Nv._computationVector, Nv._newPosition), Nv._position.Vzv(Nv._newPosition);
              let dv = Nv.upVector;
              Nv.allowUpsideDown && Nv.beta < 0 && (dv = dv.clone(), dv = dv.Re()), Nv._computeViewMatrix(Nv._position, pv, dv), Nv._viewMatrix.addAtIndex(12, Nv.targetScreenOffset.x), Nv._viewMatrix.addAtIndex(13, Nv.targetScreenOffset.y), Nv._collisionTriggered = !1
            }, this.Fy = gv.l.Zero(), pv && this.setTarget(pv), this.alpha = zv, this.beta = Pv, this.radius = Sv, this.getViewMatrix(), this.inputs = new tv(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Zv(this.rD(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Fy = new gv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = gv.j.Zero()
          }
          _updateCache(vv) {
            vv || super._updateCache(), this._cache.Fy.Vzv(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Vzv(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const vv = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? vv.addToRef(this._targetBoundingCenter, this.Fy) : this.Fy.Vzv(vv)
            }
            const vv = this._getLockedTargetPosition();
            return vv || this.Fy
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Wv.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              ev = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ev ? this._currentInterpolationFactor = ev : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Av(vv, this._goalAlpha), this._goalBeta = Av(zv, this._goalBeta), this._goalRadius = Av(Pv, this._goalRadius), this._goalTarget.set(Av(hv.x, this._goalTarget.x), Av(hv.y, this._goalTarget.y), Av(hv.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Av(Sv.x, this._goalTargetScreenOffset.x), Av(Sv.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, pv.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, pv.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, pv.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, pv.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Fy.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(vv, zv) {
            let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Sv = arguments;
            zv = jv.h.BackCompatCameraNoPreventDefault(Sv), this._useCtrlForPanning = Pv, this._panningMouseButton = hv, "boolean" === typeof Sv[0] && (Sv.length > 1 && (this._useCtrlForPanning = Sv[1]), Sv.length > 2 && (this._panningMouseButton = Sv[2])), this.inputs.attachElement(zv), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(vv, zv, Pv) {
            const hv = this.invertRotation ? -1 : 1;
            let Sv = vv * this._calculateHandednessMultiplier();
            this.beta < 0 && (Sv *= -1), this.alpha += Sv * hv, this.beta += zv * hv, this.radius -= Pv
          }
          _applyPanDelta(vv, zv) {
            const Pv = gv.i.fa[0].f_(vv, zv, zv);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Pv.multiplyInPlace(this.panningAxis), gv.l.TransformNormalToRef(Pv, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const vv = this.upVector,
                zv = gv.l.CrossToRef(this._transformedDirection, vv, this._transformedDirection);
              gv.l.CrossToRef(vv, zv, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Fy);
                gv.l.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Fy.Vzv(this._transformedDirection)
              } else {
                if (this.parent) {
                  const vv = gv.i.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(vv), vv.transposeToRef(vv), gv.l.TransformCoordinatesToRef(this._transformedDirection, vv, this._transformedDirection)
                }
                this.Fy.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let vv = !1;
            this.movement.computeCurrentFrameDeltas();
            const zv = this.movement.rotationDeltaCurrentFrame,
              Pv = this.movement.zoomDeltaCurrentFrame,
              hv = this.movement.panDeltaCurrentFrame;
            if (0 === zv.x && 0 === zv.y && 0 === Pv && 0 === hv.x && 0 === hv.y || (vv = !0, 0 === zv.x && 0 === zv.y && 0 === Pv || this._applyRotationAndZoomDelta(zv.x, zv.y, Pv), 0 === hv.x && 0 === hv.y || this._applyPanDelta(hv.x, hv.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), vv = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const zv = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < zv && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < zv && (this.inertialPanningY = 0), vv = !0
            }
            if (vv) this.stopInterpolation();
            else if (this._isInterpolating) {
              let vv = !1;
              const zv = this._scene.ma().getDeltaTime() / 1e3,
                Pv = 1 - Math.pow(2, -zv / this._currentInterpolationFactor),
                hv = Av(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const zv = gv.i.fa[0].set(Av(this._goalTarget.x, this.Fy.x), Av(this._goalTarget.y, this.Fy.y), Av(this._goalTarget.z, this.Fy.z));
                gv.l.LerpToRef(this.target, zv, Pv, this.Fy), 10 * gv.l.Distance(this.target, zv) / hv < Wv.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Vzv(zv), this.setTarget(this.target, !1, !0, !0)) : vv = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const zv = gv.d.RotationAlphaBetaGammaToRef(Av(this._goalAlpha, this.alpha), Av(this._goalBeta, this.beta), 0, gv.i.Quaternion[0]),
                  hv = gv.d.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, gv.i.Quaternion[1]),
                  Sv = gv.d.SlerpToRef(hv, zv, Pv, gv.i.Quaternion[2]);
                Sv.normalize();
                const ev = Sv.toAlphaBetaGammaToRef(gv.i.fa[0]);
                if (this.alpha = ev.x, this.beta = ev.y, Sv.isApprox(zv, Wv.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const vv = zv.toAlphaBetaGammaToRef(gv.i.fa[0]);
                  this.alpha = vv.x, this.beta = vv.y
                } else vv = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (hv - this.radius) * Pv, Math.abs(hv / this.radius - 1) < Wv.e ? (this._goalRadius = NaN, this.radius = hv) : vv = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const zv = gv.i.Vector2[0].set(Av(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Av(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                gv.j.LerpToRef(this.targetScreenOffset, zv, Pv, this.targetScreenOffset), gv.j.Distance(this.targetScreenOffset, zv) < Wv.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Vzv(zv)) : vv = !0
              }
              this._isInterpolating = vv
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || gv.l.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const vv = this.alpha;
            var zv, Pv;
            this.alpha = function(vv) {
              let zv = Math.PI / 2;
              return 0 === vv.x && 0 === vv.z || (zv = Math.acos(vv.x / Math.sqrt(Math.pow(vv.x, 2) + Math.pow(vv.z, 2)))), vv.z < 0 && (zv = 2 * Math.PI - zv), zv
            }(this._computationVector), this.beta = (zv = this._computationVector.y, Pv = this.radius, Math.acos(zv / Pv));
            const hv = Math.round((vv - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * hv * Math.PI, this._checkLimits()
          }
          setPosition(vv) {
            this._position.equals(vv) || (this._position.Vzv(vv), this.rebuildAnglesAndRadius())
          }
          setTarget(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (hv = this.overrideCloneAlphaBetaRadius ?? hv, vv.computeWorldMatrix) zv && vv.cV ? this._targetBoundingCenter = vv.cV().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, vv.computeWorldMatrix(), this._targetHost = vv, this.Fy = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const zv = vv,
                hv = this._getTargetPosition();
              if (hv && !Pv && hv.equals(zv)) return;
              this._targetHost = null, this.Fy = zv, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            hv || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const vv = Math.cos(this.alpha),
              zv = Math.sin(this.alpha),
              Pv = Math.cos(this.beta);
            let hv = Math.sin(this.beta);
            0 === hv && (hv = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Sv = this._getTargetPosition();
            if (this._computationVector.f_(this.radius * vv * hv, this.radius * Pv, this.radius * zv * hv), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || gv.l.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Sv.addToRef(this._computationVector, this._newPosition), this.rD().collisionsEnabled && this.checkCollisions) {
              const vv = this.rD().collisionCoordinator;
              this._collider || (this._collider = vv.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, vv.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Vzv(this._newPosition);
              let vv = this.upVector;
              this.allowUpsideDown && hv < 0 && (vv = vv.Re()), this._computeViewMatrix(this._position, Sv, vv), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Vzv(Sv), this._viewMatrix
          }
          zoomOn(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            vv = vv || this.rD().meshes;
            const Pv = Nv.c.MinMax(vv);
            let hv = this._calculateLowerRadiusFromModelBoundingSphere(Pv.min, Pv.max);
            if (hv = Math.max(Math.min(hv, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = hv * this.zoomOnFactor, this.mode === cv.c.ORTHOGRAPHIC_CAMERA) {
              const vv = this.rD().ma().getAspectRatio(this),
                zv = hv * this.zoomOnFactor / 2;
              this.orthoLeft = -zv * vv, this.orthoRight = zv * vv, this.orthoBottom = -zv, this.orthoTop = zv
            }
            this.focusOn({
              min: Pv.min,
              max: Pv.max,
              distance: hv
            }, zv)
          }
          focusOn(vv) {
            let zv, Pv, hv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === vv.min) {
              const hv = vv || this.rD().meshes;
              zv = Nv.c.MinMax(hv), Pv = gv.l.Distance(zv.min, zv.max)
            } else {
              zv = vv, Pv = vv.distance
            }
            this.Fy = Nv.c.Center(zv), hv || (this.maxZ = 2 * Pv)
          }
          createRigCamera(zv, Pv) {
            let hv = 0;
            switch (this.cameraRigMode) {
              case cv.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case cv.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case cv.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case cv.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case cv.c.RIG_MODE_VR:
                hv = this._cameraRigParams.stereoHalfAngle * (0 === Pv ? 1 : -1);
                break;
              case cv.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                hv = this._cameraRigParams.stereoHalfAngle * (0 === Pv ? -1 : 1)
            }
            const Sv = new vv(zv, this.alpha + hv, this.beta, this.radius, this.Fy, this.rD());
            return Sv._cameraRigParams = {}, Sv.isRigCamera = !0, Sv.rigParent = this, Sv.upVector = this.upVector, Sv.mode = this.mode, Sv.orthoLeft = this.orthoLeft, Sv.orthoRight = this.orthoRight, Sv.orthoBottom = this.orthoBottom, Sv.orthoTop = this.orthoTop, Sv
          }
          _updateRigCameras() {
            const vv = this._rigCameras[0],
              zv = this._rigCameras[1];
            switch (vv.beta = zv.beta = this.beta, this.cameraRigMode) {
              case cv.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case cv.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case cv.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case cv.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case cv.c.RIG_MODE_VR:
                vv.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, zv.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case cv.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                vv.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, zv.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const hv = gv.l.Distance(vv, zv),
              Sv = this.rD().ma().getAspectRatio(this),
              ev = Math.tan(this.fov / 2),
              pv = ev * Sv,
              dv = .5 * hv * Pv,
              Nv = dv * Math.sqrt(1 + 1 / (pv * pv)),
              lv = dv * Math.sqrt(1 + 1 / (ev * ev));
            return Math.max(Nv, lv)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ev[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.I)("target")], av = [(0, Sv.y)("targetHost")], sv = [(0, Sv.L)()], mv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Fv = [(0, Sv.L)()], Yv = [(0, Sv.L)()], nv = [(0, Sv.L)()], Ov = [(0, Sv.L)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], Uv = [(0, Sv.L)()], Rv = [(0, Sv.L)()], xv = [(0, Sv.L)()], qv = [(0, Sv.L)()], Iv = [(0, Sv.I)()], Qv = [(0, Sv.L)()], Lv = [(0, Sv.L)()], Hv = [(0, Sv.L)()], Mv = [(0, Sv.H)()], yv = [(0, Sv.L)()], Bv = [(0, Sv.L)()], Jv = [(0, Sv.L)()], (0, hv.e)(vv, null, sv, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "inertialAlphaOffset" in vv,
              get: vv => vv.inertialAlphaOffset
            },
            metadata: ev
          }, null, ov), (0, hv.e)(vv, null, mv, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "inertialBetaOffset" in vv,
              get: vv => vv.inertialBetaOffset
            },
            metadata: ev
          }, null, ov), (0, hv.e)(vv, null, fv, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "inertialRadiusOffset" in vv,
              get: vv => vv.inertialRadiusOffset
            },
            metadata: ev
          }, null, ov), (0, hv.e)(vv, null, Qv, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: vv => "panningInertia" in vv,
              get: vv => vv.panningInertia
            },
            metadata: ev
          }, null, ov), (0, hv.e)(vv, null, Lv, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: vv => "zoomToMouseLocation" in vv,
              get: vv => vv.zoomToMouseLocation
            },
            metadata: ev
          }, null, ov), (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "alpha" in vv,
              get: vv => vv.alpha,
              set: (vv, zv) => {
                vv.alpha = zv
              }
            },
            metadata: ev
          }, bv, rv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: vv => "beta" in vv,
              get: vv => vv.beta,
              set: (vv, zv) => {
                vv.beta = zv
              }
            },
            metadata: ev
          }, kv, Xv), (0, hv.e)(null, null, dv, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: vv => "radius" in vv,
              get: vv => vv.radius,
              set: (vv, zv) => {
                vv.radius = zv
              }
            },
            metadata: ev
          }, uv, vz), (0, hv.e)(null, null, lv, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: vv => "overrideCloneAlphaBetaRadius" in vv,
              get: vv => vv.overrideCloneAlphaBetaRadius,
              set: (vv, zv) => {
                vv.overrideCloneAlphaBetaRadius = zv
              }
            },
            metadata: ev
          }, zz, Pz), (0, hv.e)(null, null, Tv, {
            kind: "field",
            name: "Fy",
            static: !1,
            private: !1,
            access: {
              has: vv => "Fy" in vv,
              get: vv => vv.Fy,
              set: (vv, zv) => {
                vv.Fy = zv
              }
            },
            metadata: ev
          }, hz, Sz), (0, hv.e)(null, null, av, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: vv => "_targetHost" in vv,
              get: vv => vv._targetHost,
              set: (vv, zv) => {
                vv._targetHost = zv
              }
            },
            metadata: ev
          }, ez, gz), (0, hv.e)(null, null, Fv, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "lowerAlphaLimit" in vv,
              get: vv => vv.lowerAlphaLimit,
              set: (vv, zv) => {
                vv.lowerAlphaLimit = zv
              }
            },
            metadata: ev
          }, pz, dz), (0, hv.e)(null, null, Yv, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "upperAlphaLimit" in vv,
              get: vv => vv.upperAlphaLimit,
              set: (vv, zv) => {
                vv.upperAlphaLimit = zv
              }
            },
            metadata: ev
          }, Nz, lz), (0, hv.e)(null, null, nv, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "lowerBetaLimit" in vv,
              get: vv => vv.lowerBetaLimit,
              set: (vv, zv) => {
                vv.lowerBetaLimit = zv
              }
            },
            metadata: ev
          }, Tz, Wz), (0, hv.e)(null, null, Ov, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "upperBetaLimit" in vv,
              get: vv => vv.upperBetaLimit,
              set: (vv, zv) => {
                vv.upperBetaLimit = zv
              }
            },
            metadata: ev
          }, wz, az), (0, hv.e)(null, null, Dv, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "lowerRadiusLimit" in vv,
              get: vv => vv.lowerRadiusLimit,
              set: (vv, zv) => {
                vv.lowerRadiusLimit = zv
              }
            },
            metadata: ev
          }, sz, Cz), (0, hv.e)(null, null, Kv, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "upperRadiusLimit" in vv,
              get: vv => vv.upperRadiusLimit,
              set: (vv, zv) => {
                vv.upperRadiusLimit = zv
              }
            },
            metadata: ev
          }, iz, cz), (0, hv.e)(null, null, Vv, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "lowerTargetYLimit" in vv,
              get: vv => vv.lowerTargetYLimit,
              set: (vv, zv) => {
                vv.lowerTargetYLimit = zv
              }
            },
            metadata: ev
          }, Gz, mz), (0, hv.e)(null, null, Uv, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: vv => "inertialPanningX" in vv,
              get: vv => vv.inertialPanningX,
              set: (vv, zv) => {
                vv.inertialPanningX = zv
              }
            },
            metadata: ev
          }, jz, fz), (0, hv.e)(null, null, Rv, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: vv => "inertialPanningY" in vv,
              get: vv => vv.inertialPanningY,
              set: (vv, zv) => {
                vv.inertialPanningY = zv
              }
            },
            metadata: ev
          }, Fz, Yz), (0, hv.e)(null, null, xv, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: vv => "pinchToPanMaxDistance" in vv,
              get: vv => vv.pinchToPanMaxDistance,
              set: (vv, zv) => {
                vv.pinchToPanMaxDistance = zv
              }
            },
            metadata: ev
          }, nz, Oz), (0, hv.e)(null, null, qv, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: vv => "panningDistanceLimit" in vv,
              get: vv => vv.panningDistanceLimit,
              set: (vv, zv) => {
                vv.panningDistanceLimit = zv
              }
            },
            metadata: ev
          }, Dz, Kz), (0, hv.e)(null, null, Iv, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: vv => "panningOriginTarget" in vv,
              get: vv => vv.panningOriginTarget,
              set: (vv, zv) => {
                vv.panningOriginTarget = zv
              }
            },
            metadata: ev
          }, Vz, Uz), (0, hv.e)(null, null, Hv, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: vv => "zoomOnFactor" in vv,
              get: vv => vv.zoomOnFactor,
              set: (vv, zv) => {
                vv.zoomOnFactor = zv
              }
            },
            metadata: ev
          }, Rz, xz), (0, hv.e)(null, null, Mv, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: vv => "targetScreenOffset" in vv,
              get: vv => vv.targetScreenOffset,
              set: (vv, zv) => {
                vv.targetScreenOffset = zv
              }
            },
            metadata: ev
          }, tz, qz), (0, hv.e)(null, null, yv, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: vv => "allowUpsideDown" in vv,
              get: vv => vv.allowUpsideDown,
              set: (vv, zv) => {
                vv.allowUpsideDown = zv
              }
            },
            metadata: ev
          }, Iz, Qz), (0, hv.e)(null, null, Bv, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: vv => "useInputToRestoreState" in vv,
              get: vv => vv.useInputToRestoreState,
              set: (vv, zv) => {
                vv.useInputToRestoreState = zv
              }
            },
            metadata: ev
          }, Zz, Az), (0, hv.e)(null, null, Jv, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: vv => "restoreStateInterpolationFactor" in vv,
              get: vv => vv.restoreStateInterpolationFactor,
              set: (vv, zv) => {
                vv.restoreStateInterpolationFactor = zv
              }
            },
            metadata: ev
          }, Lz, Hz), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Hv = !1;
    Hv || (Hv = !0, dv.c.AddNodeConstructor("ArcRotateCamera", ((vv, zv) => () => new Lv(vv, 0, 0, 1, gv.l.Zero(), zv))), (0, qv.c)("BABYLON.ArcRotateCamera", Lv))
  },
  39537: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.b
    });
    var hv = Pv(39544);
    (0, hv.c)()
  },
  39544: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => Wv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(36751),
      pv = Pv(39553),
      dv = Pv(39518),
      Nv = Pv(36631);
    let lv = (() => {
        var vv;
        let zv, Pv, dv = pv.c,
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        return vv = class extends dv {
          constructor(vv, zv, Pv, Sv) {
            super(vv, Pv, Sv), this.groundColor = (0, hv.f)(this, Nv, new gv.b(0, 0, 0)), this.direction = ((0, hv.f)(this, lv), (0, hv.f)(this, Tv, void 0)), (0, hv.f)(this, Wv), this.direction = zv || ev.l.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(vv) {
            return this.direction = ev.l.Normalize(vv.subtract(ev.l.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Pv.x, Pv.y, Pv.z, 0, zv), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zv), this
          }
          transferToNodeMaterialEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return vv.setFloat3(zv, Pv.x, Pv.y, Pv.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ev.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pv.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(vv, zv) {
            vv["HEMILIGHT" + zv] = !0
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(dv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.n)()], Pv = [(0, Sv.I)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "groundColor" in vv,
              get: vv => vv.groundColor,
              set: (vv, zv) => {
                vv.groundColor = zv
              }
            },
            metadata: ev
          }, Nv, lv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: vv => "direction" in vv,
              get: vv => vv.direction,
              set: (vv, zv) => {
                vv.direction = zv
              }
            },
            metadata: ev
          }, Tv, Wv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Tv = !1;

    function Wv() {
      Tv || (Tv = !0, dv.c.AddNodeConstructor("Light_Type_3", ((vv, zv) => () => new lv(vv, ev.l.Zero(), zv))), (0, Nv.c)("BABYLON.HemisphericLight", lv))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
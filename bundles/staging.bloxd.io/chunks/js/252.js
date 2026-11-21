export const id = 252;
export const ids = [252];
export const modules = {
  41074: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Td
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37280),
      Pd = kd(37251),
      Zd = kd(37289),
      gd = kd(40205),
      Cd = kd(40393),
      Kd = kd(40156),
      od = kd(39876),
      ld = kd(37259);
    class Qd {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(dd) {
        this._zoomStopsAnimation = dd
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(dd) {
        this._idleRotationSpeed = dd
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(dd) {
        this._idleRotationWaitTime = dd
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(dd) {
        this._idleRotationSpinupTime = dd
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
      attach(dd) {
        this._attachedCamera = dd;
        const Jd = this._attachedCamera.Wm();
        this._onPrePointerObservableObserver = Jd.onPrePointerObservable.add((dd => {
          dd.type !== Kd.b.POINTERDOWN ? dd.type === Kd.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = dd.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const dd = od.d.Now;
          let Jd = 0;
          null != this._lastFrameTime && (Jd = dd - this._lastFrameTime), this._lastFrameTime = dd, this._applyUserInteraction();
          const kd = dd - this._lastInteractionTime - this._idleRotationWaitTime,
            pd = Math.max(Math.min(kd / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * pd, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Jd / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const dd = this._attachedCamera.Wm();
        this._onPrePointerObservableObserver && dd.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(dd) {
        this._lastInteractionTime = dd ?? od.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < ld.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let dd = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (dd = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? dd : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = od.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    kd(41077);
    class Ld {
      constructor() {
        this._easingMode = Ld.EASINGMODE_EASEIN
      }
      setEasingMode(dd) {
        const Jd = Math.min(Math.max(dd, 0), 2);
        this._easingMode = Jd
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(dd) {
        throw new Error("You must implement this method")
      }
      ease(dd) {
        switch (this._easingMode) {
          case Ld.EASINGMODE_EASEIN:
            return this.easeInCore(dd);
          case Ld.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - dd)
        }
        return dd >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - dd))) + .5 : .5 * this.easeInCore(2 * dd)
      }
    }
    Ld.EASINGMODE_EASEIN = 0, Ld.EASINGMODE_EASEOUT = 1, Ld.EASINGMODE_EASEINOUT = 2;
    var Od = kd(41082);
    class ed {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(dd) {
        if (this._autoTransitionRange === dd) return;
        this._autoTransitionRange = dd;
        const Jd = this._attachedCamera;
        Jd && (dd ? this._onMeshTargetChangedObserver = Jd.onMeshTargetChangedObservable.add((dd => {
          if (dd && (dd.computeWorldMatrix(!0), dd.pU)) {
            const Jd = dd.pU().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Jd, this.upperRadiusTransitionRange = .05 * Jd
          }
        })) : this._onMeshTargetChangedObserver && Jd.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(dd) {
        this._attachedCamera = dd, this._onAfterCheckInputsObserver = dd.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(dd) {
        return !!this._attachedCamera && (this._attachedCamera.radius === dd && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(dd) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (ed.EasingFunction.setEasingMode(ed.EasingMode), this._radiusBounceTransition = Od.c.CreateAnimation("radius", Od.c.ANIMATIONTYPE_FLOAT, 60, ed.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Jd = Od.c.TransitionTo("radius", this._attachedCamera.radius + dd, this._attachedCamera, this._attachedCamera.Wm(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Jd && this._animatables.push(Jd)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    ed.EasingFunction = new class extends Ld {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = dd
      }
      easeInCore(dd) {
        const Jd = Math.max(0, this.amplitude);
        return Math.pow(dd, 3) - dd * Jd * Math.sin(3.141592653589793 * dd)
      }
    }(.3), ed.EasingMode = Ld.EASINGMODE_EASEOUT;
    class Rd {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Wd.e, this._mode = Rd.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(dd) {
        this._mode = dd
      }
      get mode() {
        return this._mode
      }
      set radiusScale(dd) {
        this._radiusScale = dd
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(dd) {
        this._positionScale = dd
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(dd) {
        this._defaultElevation = dd
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(dd) {
        this._elevationReturnTime = dd
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(dd) {
        this._elevationReturnWaitTime = dd
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(dd) {
        this._zoomStopsAnimation = dd
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(dd) {
        this._framingTime = dd
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(dd) {
        this._attachedCamera = dd;
        const Jd = this._attachedCamera.Wm();
        Rd.EasingFunction.setEasingMode(Rd.EasingMode), this._onPrePointerObservableObserver = Jd.onPrePointerObservable.add((dd => {
          dd.type !== Kd.b.POINTERDOWN ? dd.type === Kd.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = dd.onMeshTargetChangedObservable.add((dd => {
          dd && dd.pU && this.zoomOnMesh(dd, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = dd.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const dd = this._attachedCamera.Wm();
        this._onPrePointerObservableObserver && dd.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        dd.computeWorldMatrix(!0);
        const pd = dd.pU().boundingBox;
        this.zoomOnBoundingInfo(pd.minimumWorld, pd.maximumWorld, Jd, kd)
      }
      zoomOnMeshHierarchy(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        dd.computeWorldMatrix(!0);
        const pd = dd.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(pd.min, pd.max, Jd, kd)
      }
      zoomOnMeshesHierarchy(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pd = new Pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Nd = new Pd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const Jd = dd[Wd].getHierarchyBoundingVectors(!0);
          Pd.n.CheckExtends(Jd.min, pd, Nd), Pd.n.CheckExtends(Jd.max, pd, Nd)
        }
        this.zoomOnBoundingInfo(pd, Nd, Jd, kd)
      }
      zoomOnBoundingInfo(dd, Jd) {
        let kd, pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Wd = dd.y,
          Zd = Wd + (Jd.y - Wd) * this._positionScale,
          gd = Jd.subtract(dd).scale(.5);
        if (!isFinite(Zd)) return !1;
        if (pd) kd = new Pd.n(0, Zd, 0);
        else {
          const Jd = dd.add(gd);
          kd = new Pd.n(Jd.x, Zd, Jd.z)
        }
        this._vectorTransition || (this._vectorTransition = Od.c.CreateAnimation("target", Od.c.ANIMATIONTYPE_VECTOR3, 60, Rd.EasingFunction)), this._betaIsAnimating = !0;
        let Cd = Od.c.TransitionTo("target", kd, this._attachedCamera, this._attachedCamera.Wm(), 60, this._vectorTransition, this._framingTime);
        Cd && this._animatables.push(Cd);
        let Kd = 0;
        if (this._mode === Rd.FitFrustumSidesMode) {
          const kd = this._calculateLowerRadiusFromModelBoundingSphere(dd, Jd);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = gd.length() + this._attachedCamera.minZ), Kd = kd
        } else this._mode === Rd.IgnoreBoundsSizeMode && (Kd = this._calculateLowerRadiusFromModelBoundingSphere(dd, Jd), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const kd = Jd.subtract(dd).length();
          this._attachedCamera.panningSensibility = 5e3 / kd, this._attachedCamera.wheelPrecision = 100 / Kd
        }
        return this._radiusTransition || (this._radiusTransition = Od.c.CreateAnimation("radius", Od.c.ANIMATIONTYPE_FLOAT, 60, Rd.EasingFunction)), Cd = Od.c.TransitionTo("radius", Kd, this._attachedCamera, this._attachedCamera.Wm(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Nd && Nd(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Cd && this._animatables.push(Cd), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(dd, Jd) {
        const kd = this._attachedCamera;
        if (!kd) return 0;
        let pd = kd._calculateLowerRadiusFromModelBoundingSphere(dd, Jd, this._radiusScale);
        return kd.lowerRadiusLimit && this._mode === Rd.IgnoreBoundsSizeMode && (pd = pd < kd.lowerRadiusLimit ? kd.lowerRadiusLimit : pd), kd.upperRadiusLimit && (pd = pd > kd.upperRadiusLimit ? kd.upperRadiusLimit : pd), pd
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const dd = od.d.Now - this._lastInteractionTime,
          Jd = .5 * Math.PI - this._defaultElevation,
          kd = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > kd && dd >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Od.c.CreateAnimation("beta", Od.c.ANIMATIONTYPE_FLOAT, 60, Rd.EasingFunction));
          const dd = Od.c.TransitionTo("beta", Jd, this._attachedCamera, this._attachedCamera.Wm(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          dd && this._animatables.push(dd)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = od.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Rd.EasingFunction = new class extends Ld {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = dd
      }
      easeInCore(dd) {
        return this.exponent <= 0 ? dd : (Math.exp(this.exponent * dd) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Rd.EasingMode = Ld.EASINGMODE_EASEINOUT, Rd.IgnoreBoundsSizeMode = 0, Rd.FitFrustumSidesMode = 1;
    var Id = kd(40199),
      Gd = kd(40195),
      vd = kd(40223),
      xd = kd(40066);
    let qd = (() => {
        var dd;
        let Jd, kd = [],
          Wd = [];
        return dd = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, pd.i)(this, kd, [0, 1, 2]), this._pointerInput = (0, pd.i)(this, Wd)
          }
          attachControl(dd) {
            dd = xd.h.BackCompatCameraNoPreventDefault(arguments);
            const Jd = this.camera.eL(),
              kd = Jd.getInputElement();
            let pd = 0,
              Nd = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Wd => {
              const Pd = Wd.event,
                Zd = "touch" === Pd.pointerType;
              if (Wd.type !== Kd.b.POINTERMOVE && -1 === this.buttons.indexOf(Pd.button)) return;
              const gd = Pd.target;
              if (this._altKey = Pd.altKey, this._ctrlKey = Pd.ctrlKey, this._metaKey = Pd.metaKey, this._shiftKey = Pd.shiftKey, this._buttonsPressed = Pd.buttons, Jd.isPointerLock) {
                const dd = Pd.movementX,
                  Jd = Pd.movementY;
                this.onTouch(null, dd, Jd), this._pointA = null, this._pointB = null
              } else {
                if (Wd.type !== Kd.b.POINTERDOWN && Wd.type !== Kd.b.POINTERDOUBLETAP && Zd && this._pointA?.pointerId !== Pd.pointerId && this._pointB?.pointerId !== Pd.pointerId) return;
                if (Wd.type !== Kd.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Zd)
                  if (Wd.type === Kd.b.POINTERDOUBLETAP) this.onDoubleTap(Pd.pointerType, Pd);
                  else if (Wd.type !== Kd.b.POINTERUP || this._currentMousePointerIdDown !== Pd.pointerId && !Zd) {
                  if (Wd.type === Kd.b.POINTERMOVE)
                    if (dd || Pd.preventDefault(), this._pointA && null === this._pointB) {
                      const dd = Pd.clientX - this._pointA.x,
                        Jd = Pd.clientY - this._pointA.y;
                      this._pointA.x = Pd.clientX, this._pointA.y = Pd.clientY, this.onTouch(this._pointA, dd, Jd)
                    } else if (this._pointA && this._pointB) {
                    const dd = this._pointA.pointerId === Pd.pointerId ? this._pointA : this._pointB;
                    dd.x = Pd.clientX, dd.y = Pd.clientY;
                    const Jd = this._pointA.x - this._pointB.x,
                      kd = this._pointA.y - this._pointB.y,
                      Zd = Jd * Jd + kd * kd,
                      gd = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Pd.pointerId,
                        type: Wd.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, pd, Zd, Nd, gd), Nd = gd, pd = Zd
                  }
                } else {
                  try {
                    gd?.releasePointerCapture(Pd.pointerId)
                  } catch (Cd) {}
                  Zd || (this._pointB = null), Jd._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Pd.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Pd.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== pd || Nd) && (this.onMultiTouch(this._pointA, this._pointB, pd, 0, Nd, null), pd = 0, Nd = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Pd), dd || Pd.preventDefault()
                } else {
                  try {
                    gd?.setPointerCapture(Pd.pointerId)
                  } catch (Cd) {}
                  if (null === this._pointA) this._pointA = {
                    x: Pd.clientX,
                    y: Pd.clientY,
                    pointerId: Pd.pointerId,
                    type: Pd.pointerType,
                    button: Pd.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Pd.clientX,
                      y: Pd.clientY,
                      pointerId: Pd.pointerId,
                      type: Pd.pointerType,
                      button: Pd.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Zd || (this._currentMousePointerIdDown = Pd.pointerId), this.onButtonDown(Pd), dd || (Pd.preventDefault(), kd && kd.focus())
                }
              }
            }, this._observer = this.camera.Wm()._inputManager._addCameraPointerObserver(this._pointerInput, Kd.b.POINTERDOWN | Kd.b.POINTERUP | Kd.b.POINTERMOVE | Kd.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, pd = 0, Nd = null, this.onLostFocus()
            }, this._contextMenuBind = dd => this.onContextMenu(dd), kd && kd.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Wd = this.camera.Wm().eL().getHostWindow();
            Wd && xd.h.RegisterTopRootEvents(Wd, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const dd = this.camera.Wm().eL().getHostWindow();
              dd && xd.h.UnregisterTopRootEvents(dd, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Wm()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const dd = this.camera.Wm().eL().getInputElement();
                dd && dd.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(dd, Jd) {}
          onTouch(dd, Jd, kd) {}
          onMultiTouch(dd, Jd, kd, pd, Nd, Wd) {}
          onContextMenu(dd) {
            dd.preventDefault()
          }
          onButtonDown(dd) {}
          onButtonUp(dd) {}
          onLostFocus() {}
        }, (() => {
          const Pd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Jd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: dd => "buttons" in dd,
              get: dd => dd.buttons,
              set: (dd, Jd) => {
                dd.buttons = Jd
              }
            },
            metadata: Pd
          }, kd, Wd), Pd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pd
          })
        })(), dd
      })(),
      Bd = (() => {
        var dd;
        let Jd, kd, Wd, Pd = qd,
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        return dd = class extends Pd {
          constructor() {
            super(...arguments), this.pinchZoom = (0, pd.i)(this, Zd, !0), this.multiTouchPanning = ((0, pd.i)(this, gd), (0, pd.i)(this, Cd, !0)), this.multiTouchPanAndZoom = ((0, pd.i)(this, Kd), (0, pd.i)(this, od, !0)), this._isPinching = ((0, pd.i)(this, ld), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(dd, Jd) {}
          _computeMultiTouchPanning(dd, Jd) {}
          onMultiTouch(dd, Jd, kd, pd, Nd, Wd) {
            0 === kd && null === Nd || 0 === pd && null === Wd || (this.multiTouchPanAndZoom ? (this._computePinchZoom(kd, pd), this._computeMultiTouchPanning(Nd, Wd)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(kd, pd), this._isPinching = !0) : this._computeMultiTouchPanning(Nd, Wd)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Nd, Wd) : this.pinchZoom && this._computePinchZoom(kd, pd))
          }
          onButtonUp(dd) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchZoom" in dd,
              get: dd => dd.pinchZoom,
              set: (dd, Jd) => {
                dd.pinchZoom = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: dd => "multiTouchPanning" in dd,
              get: dd => dd.multiTouchPanning,
              set: (dd, Jd) => {
                dd.multiTouchPanning = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, pd.h)(null, null, Wd, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "multiTouchPanAndZoom" in dd,
              get: dd => dd.multiTouchPanAndZoom,
              set: (dd, Jd) => {
                dd.multiTouchPanAndZoom = Jd
              }
            },
            metadata: Qd
          }, od, ld), Qd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          })
        })(), dd
      })(),
      sd = (() => {
        var dd;
        let Jd, kd, Wd, Pd, Zd, gd, Cd, Kd = Bd,
          od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [],
          Rd = [],
          Id = [],
          Gd = [],
          vd = [],
          xd = [],
          qd = [],
          sd = [],
          ad = [];
        return dd = class extends Kd {
          constructor() {
            super(...arguments), this.buttons = (0, pd.i)(this, od, [0, 1, 2]), this.angularSensibilityX = ((0, pd.i)(this, ld), (0, pd.i)(this, Qd, 1e3)), this.angularSensibilityY = ((0, pd.i)(this, Ld), (0, pd.i)(this, Od, 1e3)), this.pinchPrecision = ((0, pd.i)(this, ed), (0, pd.i)(this, Rd, 12)), this.pinchDeltaPercentage = ((0, pd.i)(this, Id), (0, pd.i)(this, Gd, 0)), this.useNaturalPinchZoom = ((0, pd.i)(this, vd), (0, pd.i)(this, xd, !1)), this.panningSensibility = ((0, pd.i)(this, qd), (0, pd.i)(this, sd, 1e3)), this.pinchInwards = ((0, pd.i)(this, ad), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(dd, Jd) {
            if (dd && Jd) {
              const kd = Jd.x - dd.x,
                pd = Jd.y - dd.y,
                Nd = this.camera.movement.input.getEntry("pointer", "pan"),
                Wd = Nd?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Wd && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -kd * Wd, this.camera.movement.panAccumulatedPixels.y += pd * Wd)
            }
          }
          _computePinchZoom(Jd, kd) {
            const pd = this.camera.radius || dd.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = pd * Math.sqrt(Jd) / Math.sqrt(kd);
            else if (this.pinchDeltaPercentage) {
              const dd = .001 * (kd - Jd) * pd * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += dd
            } else {
              const dd = (kd - Jd) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += dd
            }
          }
          onTouch(dd, Jd, kd) {
            const pd = this._activeEntry ?? (this.camera.eL().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (pd)
              if ("pan" === pd.interaction) {
                const dd = pd.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== dd && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Jd * dd, this.camera.movement.panAccumulatedPixels.y += kd * dd)
              } else if ("rotate" === pd.interaction) {
              const dd = pd.vV ?? pd.sensitivity ?? 1 / this.angularSensibilityX,
                Nd = pd.xV ?? pd.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Jd * dd, this.camera.movement.rotationAccumulatedPixels.y += -kd * Nd
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(dd, Jd, kd, pd, Nd, Wd) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(pd) - Math.sqrt(kd)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(dd, Jd, kd, pd, Nd, Wd)
          }
          onButtonDown(dd) {
            this._pointerConditions.button = dd.button, this._pointerModifiers.ctrl = dd.ctrlKey, this._pointerModifiers.alt = dd.altKey, this._pointerModifiers.shift = dd.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(dd)
          }
          onButtonUp(dd) {
            this._activeEntry = null, super.onButtonUp(dd)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Bd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], Pd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: dd => "buttons" in dd,
              get: dd => dd.buttons,
              set: (dd, Jd) => {
                dd.buttons = Jd
              }
            },
            metadata: Bd
          }, od, ld), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: dd => "angularSensibilityX" in dd,
              get: dd => dd.angularSensibilityX,
              set: (dd, Jd) => {
                dd.angularSensibilityX = Jd
              }
            },
            metadata: Bd
          }, Qd, Ld), (0, pd.h)(null, null, Wd, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: dd => "angularSensibilityY" in dd,
              get: dd => dd.angularSensibilityY,
              set: (dd, Jd) => {
                dd.angularSensibilityY = Jd
              }
            },
            metadata: Bd
          }, Od, ed), (0, pd.h)(null, null, Pd, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchPrecision" in dd,
              get: dd => dd.pinchPrecision,
              set: (dd, Jd) => {
                dd.pinchPrecision = Jd
              }
            },
            metadata: Bd
          }, Rd, Id), (0, pd.h)(null, null, Zd, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchDeltaPercentage" in dd,
              get: dd => dd.pinchDeltaPercentage,
              set: (dd, Jd) => {
                dd.pinchDeltaPercentage = Jd
              }
            },
            metadata: Bd
          }, Gd, vd), (0, pd.h)(null, null, gd, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "useNaturalPinchZoom" in dd,
              get: dd => dd.useNaturalPinchZoom,
              set: (dd, Jd) => {
                dd.useNaturalPinchZoom = Jd
              }
            },
            metadata: Bd
          }, xd, qd), (0, pd.h)(null, null, Cd, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningSensibility" in dd,
              get: dd => dd.panningSensibility,
              set: (dd, Jd) => {
                dd.panningSensibility = Jd
              }
            },
            metadata: Bd
          }, sd, ad), Bd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bd
          })
        })(), dd.MinimumRadiusForPinch = .001, dd
      })();
    vd.d.ArcRotateCameraPointersInput = sd;
    var ad = kd(40164);
    let Md = (() => {
      var dd;
      let Jd, kd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od = [],
        ed = [],
        Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        qd = [],
        Bd = [],
        sd = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [];
      return dd = class {
        constructor() {
          this.camera = (0, pd.i)(this, Od), this.keysUp = (0, pd.i)(this, ed, [38]), this.keysDown = ((0, pd.i)(this, Rd), (0, pd.i)(this, Id, [40])), this.keysLeft = ((0, pd.i)(this, Gd), (0, pd.i)(this, vd, [37])), this.keysRight = ((0, pd.i)(this, qd), (0, pd.i)(this, Bd, [39])), this.keysReset = ((0, pd.i)(this, sd), (0, pd.i)(this, Md, [220])), this.keysZoomIn = ((0, pd.i)(this, Fd), (0, pd.i)(this, Yd, [187, 107])), this.keysZoomOut = ((0, pd.i)(this, md), (0, pd.i)(this, bd, [189, 109])), this.panningSensibility = ((0, pd.i)(this, Sd), (0, pd.i)(this, jd, 50)), this.zoomingSensibility = ((0, pd.i)(this, Xd), (0, pd.i)(this, fd, 25)), this.angularSpeed = ((0, pd.i)(this, nd), (0, pd.i)(this, Ud, .01)), this._useAltToZoom = ((0, pd.i)(this, yd), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Pd.k, this._panDirection = new Pd.k
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(dd) {
          this._useAltToZoom = dd, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const dd = this.camera.movement.input,
            Jd = dd.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Jd ? dd.inputMap.splice(dd.inputMap.indexOf(Jd), 1) : this._useAltToZoom && !Jd && dd.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(dd) {
          dd = xd.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Wm(), this._engine = this._scene.eL(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Jd => {
            const kd = Jd.event;
            if (!kd.metaKey)
              if (Jd.type === ad.d.KEYDOWN) {
                if (this._ctrlPressed = kd.ctrlKey, this._altPressed = kd.altKey, -1 !== this.keysUp.indexOf(kd.keyCode) || -1 !== this.keysDown.indexOf(kd.keyCode) || -1 !== this.keysLeft.indexOf(kd.keyCode) || -1 !== this.keysRight.indexOf(kd.keyCode) || -1 !== this.keysReset.indexOf(kd.keyCode) || -1 !== this.keysZoomIn.indexOf(kd.keyCode) || -1 !== this.keysZoomOut.indexOf(kd.keyCode)) {
                  -1 === this._keys.indexOf(kd.keyCode) && this._keys.push(kd.keyCode), kd.preventDefault && (dd || kd.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(kd.keyCode) || -1 !== this.keysDown.indexOf(kd.keyCode) || -1 !== this.keysLeft.indexOf(kd.keyCode) || -1 !== this.keysRight.indexOf(kd.keyCode) || -1 !== this.keysReset.indexOf(kd.keyCode) || -1 !== this.keysZoomIn.indexOf(kd.keyCode) || -1 !== this.keysZoomOut.indexOf(kd.keyCode)) {
              const Jd = this._keys.indexOf(kd.keyCode);
              Jd >= 0 && this._keys.splice(Jd, 1), kd.preventDefault && (dd || kd.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const dd = this.camera,
              Jd = dd.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const kd = this._rotateDirection.set(0, 0),
              pd = this._panDirection.set(0, 0);
            let Nd = 0,
              Wd = 0;
            for (let Pd = 0; Pd < this._keys.length; Pd++) {
              const Zd = this._keys[Pd];
              if (this._keyboardConditions.key = Zd, -1 === this.keysReset.indexOf(Zd)) {
                const dd = Jd.resolveInteraction("keyboard", this._keyboardConditions);
                if (dd)
                  if ("pan" === dd.interaction) Wd = Math.max(Wd, dd.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Zd) ? pd.x -= 1 : -1 !== this.keysRight.indexOf(Zd) ? pd.x += 1 : -1 !== this.keysUp.indexOf(Zd) ? pd.y += 1 : -1 !== this.keysDown.indexOf(Zd) && (pd.y -= 1);
                  else if ("zoom" === dd.interaction) {
                  const kd = dd.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Zd) || -1 !== this.keysZoomIn.indexOf(Zd) ? Jd.handlers.zoom(kd) : -1 === this.keysDown.indexOf(Zd) && -1 === this.keysZoomOut.indexOf(Zd) || Jd.handlers.zoom(-kd)
                } else "rotate" === dd.interaction && (Nd = Math.max(Nd, dd.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Zd) ? kd.x -= 1 : -1 !== this.keysRight.indexOf(Zd) ? kd.x += 1 : -1 !== this.keysUp.indexOf(Zd) ? kd.y -= 1 : -1 !== this.keysDown.indexOf(Zd) && (kd.y += 1))
              } - 1 !== this.keysReset.indexOf(Zd) && dd.useInputToRestoreState && dd.restoreState()
            }
            0 === kd.x && 0 === kd.y || (kd.normalize().scaleInPlace(Nd), Jd.handlers.rotate(kd.x, kd.y)), 0 === pd.x && 0 === pd.y || (pd.normalize().scaleInPlace(Wd), Jd.handlers.pan(pd.x, pd.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Pd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.H)()], ld = [(0, Nd.H)()], Qd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], (0, pd.h)(dd, null, Ld, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAltToZoom" in dd,
            get: dd => dd.useAltToZoom
          },
          metadata: Pd
        }, null, Od), (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUp" in dd,
            get: dd => dd.keysUp,
            set: (dd, Jd) => {
              dd.keysUp = Jd
            }
          },
          metadata: Pd
        }, ed, Rd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDown" in dd,
            get: dd => dd.keysDown,
            set: (dd, Jd) => {
              dd.keysDown = Jd
            }
          },
          metadata: Pd
        }, Id, Gd), (0, pd.h)(null, null, Wd, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysLeft" in dd,
            get: dd => dd.keysLeft,
            set: (dd, Jd) => {
              dd.keysLeft = Jd
            }
          },
          metadata: Pd
        }, vd, qd), (0, pd.h)(null, null, Zd, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRight" in dd,
            get: dd => dd.keysRight,
            set: (dd, Jd) => {
              dd.keysRight = Jd
            }
          },
          metadata: Pd
        }, Bd, sd), (0, pd.h)(null, null, gd, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysReset" in dd,
            get: dd => dd.keysReset,
            set: (dd, Jd) => {
              dd.keysReset = Jd
            }
          },
          metadata: Pd
        }, Md, Fd), (0, pd.h)(null, null, Cd, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysZoomIn" in dd,
            get: dd => dd.keysZoomIn,
            set: (dd, Jd) => {
              dd.keysZoomIn = Jd
            }
          },
          metadata: Pd
        }, Yd, md), (0, pd.h)(null, null, Kd, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysZoomOut" in dd,
            get: dd => dd.keysZoomOut,
            set: (dd, Jd) => {
              dd.keysZoomOut = Jd
            }
          },
          metadata: Pd
        }, bd, Sd), (0, pd.h)(null, null, od, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "panningSensibility" in dd,
            get: dd => dd.panningSensibility,
            set: (dd, Jd) => {
              dd.panningSensibility = Jd
            }
          },
          metadata: Pd
        }, jd, Xd), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "zoomingSensibility" in dd,
            get: dd => dd.zoomingSensibility,
            set: (dd, Jd) => {
              dd.zoomingSensibility = Jd
            }
          },
          metadata: Pd
        }, fd, nd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: dd => "angularSpeed" in dd,
            get: dd => dd.angularSpeed,
            set: (dd, Jd) => {
              dd.angularSpeed = Jd
            }
          },
          metadata: Pd
        }, Ud, yd), Pd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pd
        })
      })(), dd
    })();
    vd.d.ArcRotateCameraKeyboardMoveInput = Md;
    var Fd = kd(37969),
      Yd = kd(40169);
    let md = (() => {
      var dd;
      let Jd, kd, Wd, gd = [],
        Cd = [],
        od = [],
        Qd = [],
        Ld = [],
        Od = [];
      return dd = class {
        constructor() {
          this.wheelPrecision = (0, pd.i)(this, gd, 3), this.zoomToMouseLocation = ((0, pd.i)(this, Cd), (0, pd.i)(this, od, !1)), this.wheelDeltaPercentage = ((0, pd.i)(this, Qd), (0, pd.i)(this, Ld, 0)), this.customComputeDeltaFromMouseWheel = ((0, pd.i)(this, Od), null), this._viewOffset = new Pd.n(0, 0, 0), this._globalOffset = new Pd.n(0, 0, 0), this._inertialPanning = Pd.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(dd, Jd) {
          let kd;
          const pd = .01 * dd * this.wheelDeltaPercentage * Jd;
          return kd = dd > 0 ? pd / (1 + this.wheelDeltaPercentage) : pd * (1 + this.wheelDeltaPercentage), kd
        }
        attachControl(dd) {
          dd = xd.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Jd => {
            if (Jd.type !== Kd.b.POINTERWHEEL) return;
            const kd = Jd.event;
            let pd;
            const Nd = kd.deltaMode === Yd.d.DOM_DELTA_LINE ? 40 : 1,
              Wd = -kd.deltaY * Nd;
            if (this.customComputeDeltaFromMouseWheel) pd = this.customComputeDeltaFromMouseWheel(Wd, this, kd);
            else if (this.wheelDeltaPercentage) {
              if (pd = this._computeDeltaFromMouseWheelLegacyEvent(Wd, this.camera.radius), pd > 0) {
                const dd = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Jd = this.camera.radius,
                  kd = dd + pd;
                for (let pd = 0; pd < 20 && !(Jd <= kd) && !(Math.abs(kd * this.camera.inertia) < .001); pd++) Jd -= kd, kd *= this.camera.inertia;
                Jd = (0, Zd.Clamp)(Jd, 0, Number.MAX_VALUE), pd = this._computeDeltaFromMouseWheelLegacyEvent(Wd, Jd)
              }
            } else {
              const dd = this.camera.movement.input.getEntry("wheel", "zoom");
              pd = Wd * (dd?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            pd && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(pd)) : this.camera.movement.zoomAccumulatedPixels += pd), kd.preventDefault && (dd || kd.preventDefault())
          }, this._observer = this.camera.Wm()._inputManager._addCameraPointerObserver(this._wheel, Kd.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.o5(0)
        }
        detachControl() {
          this._observer && (this.camera.Wm()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const dd = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(dd.inertialAlphaOffset) + Math.abs(dd.inertialBetaOffset) + Math.abs(dd.inertialRadiusOffset)) {
            this._updateHitPlane(), dd.target.addInPlace(this._inertialPanning), dd.radius -= this._zoomToMouseRadiusOffset;
            const Jd = dd.movement.getFrameIndependentDecay(dd.inertia);
            this._inertialPanning.scaleInPlace(Jd), this._zoomToMouseRadiusOffset *= Jd, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < ld.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const dd = this.camera,
            Jd = dd.target.subtract(dd.position);
          this._hitPlane = Fd.c.FromPositionAndNormal(dd.target, Jd)
        }
        _getPosition() {
          const dd = this.camera,
            Jd = dd.Wm(),
            kd = Jd.createPickingRay(Jd.pointerX, Jd.pointerY, Pd.b.Identity(), dd, !1);
          0 === dd.targetScreenOffset.x && 0 === dd.targetScreenOffset.y || (this._viewOffset.set(dd.targetScreenOffset.x, dd.targetScreenOffset.y, 0), dd.getViewMatrix().invertToRef(dd._cameraTransformMatrix), this._globalOffset = Pd.n.TransformNormal(this._viewOffset, dd._cameraTransformMatrix), kd.origin.addInPlace(this._globalOffset));
          let pd = 0;
          return this._hitPlane && (pd = kd.intersectsPlane(this._hitPlane) ?? 0), kd.origin.addInPlace(kd.direction.scaleInPlace(pd))
        }
        _zoomToMouse(dd) {
          const Jd = this.camera,
            kd = 1 - Jd.inertia,
            pd = Jd.movement.getFrameIndependentInputScale(Jd.inertia);
          if (Jd.lowerRadiusLimit) {
            const Nd = Jd.lowerRadiusLimit ?? 0;
            Jd.radius - (this._zoomToMouseRadiusOffset + dd * pd) / kd < Nd && (dd = ((Jd.radius - Nd) * kd - this._zoomToMouseRadiusOffset) / pd)
          }
          if (Jd.upperRadiusLimit) {
            const Nd = Jd.upperRadiusLimit ?? 0;
            Jd.radius - (this._zoomToMouseRadiusOffset + dd * pd) / kd > Nd && (dd = ((Jd.radius - Nd) * kd - this._zoomToMouseRadiusOffset) / pd)
          }
          const Nd = dd / kd / Jd.radius,
            Wd = this._getPosition(),
            Zd = Pd.h.IL[6];
          Wd.subtractToRef(Jd.target, Zd), Zd.scaleInPlace(Nd), Zd.scaleInPlace(kd), Zd.scaleInPlace(pd), this._inertialPanning.addInPlace(Zd), this._zoomToMouseRadiusOffset += dd * pd
        }
        _zeroIfClose(dd) {
          Math.abs(dd.x) < ld.e && (dd.x = 0), Math.abs(dd.y) < ld.e && (dd.y = 0), Math.abs(dd.z) < ld.e && (dd.z = 0)
        }
      }, (() => {
        const Pd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecision" in dd,
            get: dd => dd.wheelPrecision,
            set: (dd, Jd) => {
              dd.wheelPrecision = Jd
            }
          },
          metadata: Pd
        }, gd, Cd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: dd => "zoomToMouseLocation" in dd,
            get: dd => dd.zoomToMouseLocation,
            set: (dd, Jd) => {
              dd.zoomToMouseLocation = Jd
            }
          },
          metadata: Pd
        }, od, Qd), (0, pd.h)(null, null, Wd, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelDeltaPercentage" in dd,
            get: dd => dd.wheelDeltaPercentage,
            set: (dd, Jd) => {
              dd.wheelDeltaPercentage = Jd
            }
          },
          metadata: Pd
        }, Ld, Od), Pd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pd
        })
      })(), dd
    })();
    vd.d.ArcRotateCameraMouseWheelInput = md;
    var bd, Sd, jd = kd(39860);
    class Xd extends vd.g {
      constructor(dd) {
        super(dd)
      }
      addMouseWheel() {
        return this.add(new md), this
      }
      addPointers() {
        return this.add(new sd), this
      }
      addKeyboard() {
        return this.add(new Md), this
      }
    }(bd = Xd.prototype).addVRDeviceOrientation ?? (bd.addVRDeviceOrientation = (0, jd.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Sd = Xd.prototype).addGamepad ?? (Sd.addGamepad = (0, jd.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var fd = kd(37303),
      nd = kd(40211),
      Ud = kd(40217);
    class yd extends nd.e {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd), this.input = new Ud.b({
          pan: (dd, Jd) => {
            this.panAccumulatedPixels.x += dd, this.panAccumulatedPixels.y += Jd
          },
          rotate: (dd, Jd) => {
            this.rotationAccumulatedPixels.x += dd, this.rotationAccumulatedPixels.y += Jd
          },
          zoom: dd => {
            this.zoomAccumulatedPixels += dd
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

    function Dd(dd, Jd) {
      return isNaN(dd) ? Jd : dd
    }
    let Td = (() => {
        var dd;
        let Jd, kd, gd, Kd, od, Ld, Od, vd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd, jd, fd, nd, Ud, Td, Ed, cd, hd, rd, ud, td = Gd.d,
          Vd = [],
          zd = [],
          Hd = [],
          wd = [],
          Ad = [],
          dJ = [],
          JJ = [],
          kJ = [],
          pJ = [],
          NJ = [],
          WJ = [],
          PJ = [],
          ZJ = [],
          gJ = [],
          CJ = [],
          KJ = [],
          oJ = [],
          lJ = [],
          QJ = [],
          LJ = [],
          OJ = [],
          eJ = [],
          RJ = [],
          IJ = [],
          GJ = [],
          vJ = [],
          xJ = [],
          qJ = [],
          BJ = [],
          sJ = [],
          iJ = [],
          aJ = [],
          MJ = [],
          FJ = [],
          YJ = [],
          mJ = [],
          bJ = [],
          SJ = [],
          jJ = [],
          XJ = [],
          fJ = [],
          nJ = [],
          UJ = [],
          yJ = [],
          DJ = [],
          TJ = [],
          EJ = [];
        return dd = class extends td {
          get target() {
            return this.sA
          }
          set target(dd) {
            this.setTarget(dd)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(dd) {
            dd && this.setTarget(dd)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(dd) {
            this.setPosition(dd)
          }
          set upVector(dd) {
            this._upToYMatrix || (this._yToUpMatrix = new Pd.b, this._upToYMatrix = new Pd.b, this._upVector = Pd.n.Zero()), dd.normalize(), this._upVector.Fs(dd), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Pd.b.RotationAlignToRef(Pd.n.UpReadOnly, this._upVector, this._yToUpMatrix), Pd.b.RotationAlignToRef(this._upVector, Pd.n.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const dd = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(dd) < this._rotationEpsilon ? 0 : dd
          }
          set inertialAlphaOffset(dd) {
            this._inertialAlphaOffset = dd, 0 === dd && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const dd = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(dd) < this._rotationEpsilon ? 0 : dd
          }
          set inertialBetaOffset(dd) {
            this._inertialBetaOffset = dd, 0 === dd && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const dd = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(dd) < this._rotationEpsilon ? 0 : dd
          }
          set inertialRadiusOffset(dd) {
            this._inertialRadiusOffset = dd, 0 === dd && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(dd) {
            this._panningInertia = dd, this.movement && (this.movement.panInertia = dd)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(dd) {
            this._inertia = dd, this.movement && (this.movement.rotationInertia = dd, this.movement.zoomInertia = dd)
          }
          get angularSensibilityX() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.angularSensibilityX : 0
          }
          set angularSensibilityX(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.angularSensibilityX = dd)
          }
          get angularSensibilityY() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.angularSensibilityY : 0
          }
          set angularSensibilityY(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.angularSensibilityY = dd)
          }
          get pinchPrecision() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.pinchPrecision : 0
          }
          set pinchPrecision(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.pinchPrecision = dd)
          }
          get pinchDeltaPercentage() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.pinchDeltaPercentage = dd)
          }
          get useNaturalPinchZoom() {
            const dd = this.inputs.attached.pointers;
            return !!dd && dd.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.useNaturalPinchZoom = dd)
          }
          get panningSensibility() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.panningSensibility : 0
          }
          set panningSensibility(dd) {
            const Jd = this.inputs.attached.pointers;
            Jd && (Jd.panningSensibility = dd)
          }
          get keysUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUp : []
          }
          set keysUp(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysUp = dd)
          }
          get keysDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDown : []
          }
          set keysDown(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysDown = dd)
          }
          get keysLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysLeft : []
          }
          set keysLeft(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysLeft = dd)
          }
          get keysRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRight : []
          }
          set keysRight(dd) {
            const Jd = this.inputs.attached.keyboard;
            Jd && (Jd.keysRight = dd)
          }
          get wheelPrecision() {
            const dd = this.inputs.attached.mousewheel;
            return dd ? dd.wheelPrecision : 0
          }
          set wheelPrecision(dd) {
            const Jd = this.inputs.attached.mousewheel;
            Jd && (Jd.wheelPrecision = dd)
          }
          get zoomToMouseLocation() {
            const dd = this.inputs.attached.mousewheel;
            return !!dd && dd.zoomToMouseLocation
          }
          set zoomToMouseLocation(dd) {
            const Jd = this.inputs.attached.mousewheel;
            Jd && (Jd.zoomToMouseLocation = dd)
          }
          get wheelDeltaPercentage() {
            const dd = this.inputs.attached.mousewheel;
            return dd ? dd.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(dd) {
            const Jd = this.inputs.attached.mousewheel;
            Jd && (Jd.wheelDeltaPercentage = dd)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(dd) {
            this._useCtrlForPanningInternal = dd;
            const Jd = this.movement.input,
              kd = Jd.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !dd && kd ? Jd.inputMap.splice(Jd.inputMap.indexOf(kd), 1) : dd && !kd && Jd.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const pd = Jd.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !dd && pd ? Jd.inputMap.splice(Jd.inputMap.indexOf(pd), 1) : dd && !pd && Jd.addEntry({
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
          set _panningMouseButton(dd) {
            this._panningMouseButtonInternal = dd;
            const Jd = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Jd && (Jd.button = dd)
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
          set useBouncingBehavior(dd) {
            dd !== this.useBouncingBehavior && (dd ? (this._bouncingBehavior = new ed, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(dd) {
            dd !== this.useFramingBehavior && (dd ? (this._framingBehavior = new Rd, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(dd) {
            dd !== this.useAutoRotationBehavior && (dd ? (this._autoRotationBehavior = new Qd, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(dd, Jd, kd, Nd, Zd, gd) {
            var Cd;
            let Kd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(dd, Pd.n.Zero(), gd, Kd), Cd = this, this.alpha = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, void 0)), this.beta = ((0, pd.i)(this, Hd), (0, pd.i)(this, wd, void 0)), this.radius = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, void 0)), this.overrideCloneAlphaBetaRadius = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, void 0)), this.sA = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, void 0)), this._targetHost = ((0, pd.i)(this, WJ), (0, pd.i)(this, PJ, void 0)), this._upToYMatrix = (0, pd.i)(this, ZJ), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, pd.i)(this, gJ, null), this.upperAlphaLimit = ((0, pd.i)(this, CJ), (0, pd.i)(this, KJ, null)), this.lowerBetaLimit = ((0, pd.i)(this, oJ), (0, pd.i)(this, lJ, .01)), this.upperBetaLimit = ((0, pd.i)(this, QJ), (0, pd.i)(this, LJ, Math.PI - .01)), this.lowerRadiusLimit = ((0, pd.i)(this, OJ), (0, pd.i)(this, eJ, null)), this.upperRadiusLimit = ((0, pd.i)(this, RJ), (0, pd.i)(this, IJ, null)), this.lowerTargetYLimit = ((0, pd.i)(this, GJ), (0, pd.i)(this, vJ, -1 / 0)), this.inertialPanningX = ((0, pd.i)(this, xJ), (0, pd.i)(this, qJ, 0)), this.inertialPanningY = ((0, pd.i)(this, BJ), (0, pd.i)(this, sJ, 0)), this.pinchToPanMaxDistance = ((0, pd.i)(this, iJ), (0, pd.i)(this, aJ, 20)), this.panningDistanceLimit = ((0, pd.i)(this, MJ), (0, pd.i)(this, FJ, null)), this.panningOriginTarget = ((0, pd.i)(this, YJ), (0, pd.i)(this, mJ, Pd.n.Zero())), this._panningInertia = ((0, pd.i)(this, bJ), .9), this._inertia = .9, this.zoomOnFactor = (0, pd.i)(this, SJ, 1), this.targetScreenOffset = ((0, pd.i)(this, jJ), (0, pd.i)(this, XJ, Pd.k.Zero())), this.allowUpsideDown = ((0, pd.i)(this, fJ), (0, pd.i)(this, nJ, !0)), this.useInputToRestoreState = ((0, pd.i)(this, UJ), (0, pd.i)(this, yJ, !0)), this.restoreStateInterpolationFactor = ((0, pd.i)(this, DJ), (0, pd.i)(this, TJ, 0)), this._currentInterpolationFactor = ((0, pd.i)(this, EJ), 0), this._viewMatrix = new Pd.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Pd.n(1, 1, 0), this._transformedDirection = new Pd.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Wd.e, this.checkCollisions = !1, this.collisionRadius = new Pd.n(.5, .5, .5), this._previousPosition = Pd.n.Zero(), this._collisionVelocity = Pd.n.Zero(), this._newPosition = Pd.n.Zero(), this._computationVector = Pd.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Pd.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new Pd.k(NaN, NaN), this._onCollisionPositionChange = function(dd, Jd) {
              let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              kd ? (Cd.setPosition(Jd), Cd.Pl && Cd.Pl(kd)) : Cd._previousPosition.Fs(Cd._position);
              const pd = Math.cos(Cd.alpha),
                Nd = Math.sin(Cd.alpha),
                Wd = Math.cos(Cd.beta);
              let Pd = Math.sin(Cd.beta);
              0 === Pd && (Pd = 1e-4);
              const Zd = Cd._getTargetPosition();
              Cd._computationVector.kdd(Cd.radius * pd * Pd, Cd.radius * Wd, Cd.radius * Nd * Pd), Zd.addToRef(Cd._computationVector, Cd._newPosition), Cd._position.Fs(Cd._newPosition);
              let gd = Cd.upVector;
              Cd.allowUpsideDown && Cd.beta < 0 && (gd = gd.clone(), gd = gd.ck()), Cd._computeViewMatrix(Cd._position, Zd, gd), Cd._viewMatrix.addAtIndex(12, Cd.targetScreenOffset.x), Cd._viewMatrix.addAtIndex(13, Cd.targetScreenOffset.y), Cd._collisionTriggered = !1
            }, this.sA = Pd.n.Zero(), Zd && this.setTarget(Zd), this.alpha = Jd, this.beta = kd, this.radius = Nd, this.getViewMatrix(), this.inputs = new Xd(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new yd(this.Wm(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.sA = new Pd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Pd.k.Zero()
          }
          _updateCache(dd) {
            dd || super._updateCache(), this._cache.sA.Fs(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Fs(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const dd = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? dd.addToRef(this._targetBoundingCenter, this.sA) : this.sA.Fs(dd)
            }
            const dd = this._getLockedTargetPosition();
            return dd || this.sA
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > ld.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Wd = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Wd ? this._currentInterpolationFactor = Wd : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Dd(dd, this._goalAlpha), this._goalBeta = Dd(Jd, this._goalBeta), this._goalRadius = Dd(kd, this._goalRadius), this._goalTarget.set(Dd(pd.x, this._goalTarget.x), Dd(pd.y, this._goalTarget.y), Dd(pd.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Dd(Nd.x, this._goalTargetScreenOffset.x), Dd(Nd.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Zd.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Zd.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Zd.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Zd.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.sA.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(dd, Jd) {
            let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Nd = arguments;
            Jd = xd.h.BackCompatCameraNoPreventDefault(Nd), this._useCtrlForPanning = kd, this._panningMouseButton = pd, "boolean" === typeof Nd[0] && (Nd.length > 1 && (this._useCtrlForPanning = Nd[1]), Nd.length > 2 && (this._panningMouseButton = Nd[2])), this.inputs.attachElement(Jd), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(dd, Jd, kd) {
            const pd = this.invertRotation ? -1 : 1;
            let Nd = dd * this._calculateHandednessMultiplier();
            this.beta < 0 && (Nd *= -1), this.alpha += Nd * pd, this.beta += Jd * pd, this.radius -= kd
          }
          _applyPanDelta(dd, Jd) {
            const kd = Pd.h.IL[0].kdd(dd, Jd, Jd);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), kd.multiplyInPlace(this.panningAxis), Pd.n.TransformNormalToRef(kd, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const dd = this.upVector,
                Jd = Pd.n.CrossToRef(this._transformedDirection, dd, this._transformedDirection);
              Pd.n.CrossToRef(dd, Jd, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.sA);
                Pd.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.sA.Fs(this._transformedDirection)
              } else {
                if (this.parent) {
                  const dd = Pd.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(dd), dd.transposeToRef(dd), Pd.n.TransformCoordinatesToRef(this._transformedDirection, dd, this._transformedDirection)
                }
                this.sA.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let dd = !1;
            this.movement.computeCurrentFrameDeltas();
            const Jd = this.movement.rotationDeltaCurrentFrame,
              kd = this.movement.zoomDeltaCurrentFrame,
              pd = this.movement.panDeltaCurrentFrame;
            if (0 === Jd.x && 0 === Jd.y && 0 === kd && 0 === pd.x && 0 === pd.y || (dd = !0, 0 === Jd.x && 0 === Jd.y && 0 === kd || this._applyRotationAndZoomDelta(Jd.x, Jd.y, kd), 0 === pd.x && 0 === pd.y || this._applyPanDelta(pd.x, pd.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), dd = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Jd = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Jd && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Jd && (this.inertialPanningY = 0), dd = !0
            }
            if (dd) this.stopInterpolation();
            else if (this._isInterpolating) {
              let dd = !1;
              const Jd = this._scene.eL().getDeltaTime() / 1e3,
                kd = 1 - Math.pow(2, -Jd / this._currentInterpolationFactor),
                pd = Dd(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Jd = Pd.h.IL[0].set(Dd(this._goalTarget.x, this.sA.x), Dd(this._goalTarget.y, this.sA.y), Dd(this._goalTarget.z, this.sA.z));
                Pd.n.LerpToRef(this.target, Jd, kd, this.sA), 10 * Pd.n.Distance(this.target, Jd) / pd < ld.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Fs(Jd), this.setTarget(this.target, !1, !0, !0)) : dd = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Jd = Pd.d.RotationAlphaBetaGammaToRef(Dd(this._goalAlpha, this.alpha), Dd(this._goalBeta, this.beta), 0, Pd.h.Quaternion[0]),
                  pd = Pd.d.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Pd.h.Quaternion[1]),
                  Nd = Pd.d.SlerpToRef(pd, Jd, kd, Pd.h.Quaternion[2]);
                Nd.normalize();
                const Wd = Nd.toAlphaBetaGammaToRef(Pd.h.IL[0]);
                if (this.alpha = Wd.x, this.beta = Wd.y, Nd.isApprox(Jd, ld.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const dd = Jd.toAlphaBetaGammaToRef(Pd.h.IL[0]);
                  this.alpha = dd.x, this.beta = dd.y
                } else dd = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (pd - this.radius) * kd, Math.abs(pd / this.radius - 1) < ld.e ? (this._goalRadius = NaN, this.radius = pd) : dd = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Jd = Pd.h.Vector2[0].set(Dd(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Dd(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Pd.k.LerpToRef(this.targetScreenOffset, Jd, kd, this.targetScreenOffset), Pd.k.Distance(this.targetScreenOffset, Jd) < ld.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Fs(Jd)) : dd = !0
              }
              this._isInterpolating = dd
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Pd.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const dd = this.alpha;
            var Jd, kd;
            this.alpha = function(dd) {
              let Jd = Math.PI / 2;
              return 0 === dd.x && 0 === dd.z || (Jd = Math.acos(dd.x / Math.sqrt(Math.pow(dd.x, 2) + Math.pow(dd.z, 2)))), dd.z < 0 && (Jd = 2 * Math.PI - Jd), Jd
            }(this._computationVector), this.beta = (Jd = this._computationVector.y, kd = this.radius, Math.acos(Jd / kd));
            const pd = Math.round((dd - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * pd * Math.PI, this._checkLimits()
          }
          setPosition(dd) {
            this._position.equals(dd) || (this._position.Fs(dd), this.rebuildAnglesAndRadius())
          }
          setTarget(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (pd = this.overrideCloneAlphaBetaRadius ?? pd, dd.computeWorldMatrix) Jd && dd.pU ? this._targetBoundingCenter = dd.pU().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, dd.computeWorldMatrix(), this._targetHost = dd, this.sA = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Jd = dd,
                pd = this._getTargetPosition();
              if (pd && !kd && pd.equals(Jd)) return;
              this._targetHost = null, this.sA = Jd, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            pd || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const dd = Math.cos(this.alpha),
              Jd = Math.sin(this.alpha),
              kd = Math.cos(this.beta);
            let pd = Math.sin(this.beta);
            0 === pd && (pd = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Nd = this._getTargetPosition();
            if (this._computationVector.kdd(this.radius * dd * pd, this.radius * kd, this.radius * Jd * pd), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Pd.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Nd.addToRef(this._computationVector, this._newPosition), this.Wm().collisionsEnabled && this.checkCollisions) {
              const dd = this.Wm().collisionCoordinator;
              this._collider || (this._collider = dd.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, dd.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Fs(this._newPosition);
              let dd = this.upVector;
              this.allowUpsideDown && pd < 0 && (dd = dd.ck()), this._computeViewMatrix(this._position, Nd, dd), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Fs(Nd), this._viewMatrix
          }
          zoomOn(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            dd = dd || this.Wm().meshes;
            const kd = Cd.b.MinMax(dd);
            let pd = this._calculateLowerRadiusFromModelBoundingSphere(kd.min, kd.max);
            if (pd = Math.max(Math.min(pd, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = pd * this.zoomOnFactor, this.mode === Id.e.ORTHOGRAPHIC_CAMERA) {
              const dd = this.Wm().eL().getAspectRatio(this),
                Jd = pd * this.zoomOnFactor / 2;
              this.orthoLeft = -Jd * dd, this.orthoRight = Jd * dd, this.orthoBottom = -Jd, this.orthoTop = Jd
            }
            this.focusOn({
              min: kd.min,
              max: kd.max,
              distance: pd
            }, Jd)
          }
          focusOn(dd) {
            let Jd, kd, pd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === dd.min) {
              const pd = dd || this.Wm().meshes;
              Jd = Cd.b.MinMax(pd), kd = Pd.n.Distance(Jd.min, Jd.max)
            } else {
              Jd = dd, kd = dd.distance
            }
            this.sA = Cd.b.Center(Jd), pd || (this.maxZ = 2 * kd)
          }
          createRigCamera(Jd, kd) {
            let pd = 0;
            switch (this.cameraRigMode) {
              case Id.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Id.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Id.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Id.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Id.e.RIG_MODE_VR:
                pd = this._cameraRigParams.stereoHalfAngle * (0 === kd ? 1 : -1);
                break;
              case Id.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                pd = this._cameraRigParams.stereoHalfAngle * (0 === kd ? -1 : 1)
            }
            const Nd = new dd(Jd, this.alpha + pd, this.beta, this.radius, this.sA, this.Wm());
            return Nd._cameraRigParams = {}, Nd.isRigCamera = !0, Nd.rigParent = this, Nd.upVector = this.upVector, Nd.mode = this.mode, Nd.orthoLeft = this.orthoLeft, Nd.orthoRight = this.orthoRight, Nd.orthoBottom = this.orthoBottom, Nd.orthoTop = this.orthoTop, Nd
          }
          _updateRigCameras() {
            const dd = this._rigCameras[0],
              Jd = this._rigCameras[1];
            switch (dd.beta = Jd.beta = this.beta, this.cameraRigMode) {
              case Id.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Id.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Id.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Id.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Id.e.RIG_MODE_VR:
                dd.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Jd.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Id.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                dd.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Jd.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const pd = Pd.n.Distance(dd, Jd),
              Nd = this.Wm().eL().getAspectRatio(this),
              Wd = Math.tan(this.fov / 2),
              Zd = Wd * Nd,
              gd = .5 * pd * kd,
              Cd = gd * Math.sqrt(1 + 1 / (Zd * Zd)),
              Kd = gd * Math.sqrt(1 + 1 / (Wd * Wd));
            return Math.max(Cd, Kd)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(td[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.F)("target")], Ld = [(0, Nd.v)("targetHost")], Od = [(0, Nd.H)()], vd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Bd = [(0, Nd.H)()], sd = [(0, Nd.H)()], ad = [(0, Nd.H)()], Md = [(0, Nd.H)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], bd = [(0, Nd.H)()], Sd = [(0, Nd.H)()], jd = [(0, Nd.H)()], fd = [(0, Nd.H)()], nd = [(0, Nd.F)()], Ud = [(0, Nd.H)()], Td = [(0, Nd.H)()], Ed = [(0, Nd.H)()], cd = [(0, Nd.B)()], hd = [(0, Nd.H)()], rd = [(0, Nd.H)()], ud = [(0, Nd.H)()], (0, pd.h)(dd, null, Od, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialAlphaOffset" in dd,
              get: dd => dd.inertialAlphaOffset
            },
            metadata: Wd
          }, null, Vd), (0, pd.h)(dd, null, vd, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialBetaOffset" in dd,
              get: dd => dd.inertialBetaOffset
            },
            metadata: Wd
          }, null, Vd), (0, pd.h)(dd, null, qd, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialRadiusOffset" in dd,
              get: dd => dd.inertialRadiusOffset
            },
            metadata: Wd
          }, null, Vd), (0, pd.h)(dd, null, Ud, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningInertia" in dd,
              get: dd => dd.panningInertia
            },
            metadata: Wd
          }, null, Vd), (0, pd.h)(dd, null, Td, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: dd => "zoomToMouseLocation" in dd,
              get: dd => dd.zoomToMouseLocation
            },
            metadata: Wd
          }, null, Vd), (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "alpha" in dd,
              get: dd => dd.alpha,
              set: (dd, Jd) => {
                dd.alpha = Jd
              }
            },
            metadata: Wd
          }, zd, Hd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: dd => "beta" in dd,
              get: dd => dd.beta,
              set: (dd, Jd) => {
                dd.beta = Jd
              }
            },
            metadata: Wd
          }, wd, Ad), (0, pd.h)(null, null, gd, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: dd => "radius" in dd,
              get: dd => dd.radius,
              set: (dd, Jd) => {
                dd.radius = Jd
              }
            },
            metadata: Wd
          }, dJ, JJ), (0, pd.h)(null, null, Kd, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: dd => "overrideCloneAlphaBetaRadius" in dd,
              get: dd => dd.overrideCloneAlphaBetaRadius,
              set: (dd, Jd) => {
                dd.overrideCloneAlphaBetaRadius = Jd
              }
            },
            metadata: Wd
          }, kJ, pJ), (0, pd.h)(null, null, od, {
            kind: "field",
            name: "sA",
            static: !1,
            private: !1,
            access: {
              has: dd => "sA" in dd,
              get: dd => dd.sA,
              set: (dd, Jd) => {
                dd.sA = Jd
              }
            },
            metadata: Wd
          }, NJ, WJ), (0, pd.h)(null, null, Ld, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: dd => "_targetHost" in dd,
              get: dd => dd._targetHost,
              set: (dd, Jd) => {
                dd._targetHost = Jd
              }
            },
            metadata: Wd
          }, PJ, ZJ), (0, pd.h)(null, null, Bd, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerAlphaLimit" in dd,
              get: dd => dd.lowerAlphaLimit,
              set: (dd, Jd) => {
                dd.lowerAlphaLimit = Jd
              }
            },
            metadata: Wd
          }, gJ, CJ), (0, pd.h)(null, null, sd, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperAlphaLimit" in dd,
              get: dd => dd.upperAlphaLimit,
              set: (dd, Jd) => {
                dd.upperAlphaLimit = Jd
              }
            },
            metadata: Wd
          }, KJ, oJ), (0, pd.h)(null, null, ad, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerBetaLimit" in dd,
              get: dd => dd.lowerBetaLimit,
              set: (dd, Jd) => {
                dd.lowerBetaLimit = Jd
              }
            },
            metadata: Wd
          }, lJ, QJ), (0, pd.h)(null, null, Md, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperBetaLimit" in dd,
              get: dd => dd.upperBetaLimit,
              set: (dd, Jd) => {
                dd.upperBetaLimit = Jd
              }
            },
            metadata: Wd
          }, LJ, OJ), (0, pd.h)(null, null, Fd, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerRadiusLimit" in dd,
              get: dd => dd.lowerRadiusLimit,
              set: (dd, Jd) => {
                dd.lowerRadiusLimit = Jd
              }
            },
            metadata: Wd
          }, eJ, RJ), (0, pd.h)(null, null, Yd, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperRadiusLimit" in dd,
              get: dd => dd.upperRadiusLimit,
              set: (dd, Jd) => {
                dd.upperRadiusLimit = Jd
              }
            },
            metadata: Wd
          }, IJ, GJ), (0, pd.h)(null, null, md, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerTargetYLimit" in dd,
              get: dd => dd.lowerTargetYLimit,
              set: (dd, Jd) => {
                dd.lowerTargetYLimit = Jd
              }
            },
            metadata: Wd
          }, vJ, xJ), (0, pd.h)(null, null, bd, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialPanningX" in dd,
              get: dd => dd.inertialPanningX,
              set: (dd, Jd) => {
                dd.inertialPanningX = Jd
              }
            },
            metadata: Wd
          }, qJ, BJ), (0, pd.h)(null, null, Sd, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialPanningY" in dd,
              get: dd => dd.inertialPanningY,
              set: (dd, Jd) => {
                dd.inertialPanningY = Jd
              }
            },
            metadata: Wd
          }, sJ, iJ), (0, pd.h)(null, null, jd, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchToPanMaxDistance" in dd,
              get: dd => dd.pinchToPanMaxDistance,
              set: (dd, Jd) => {
                dd.pinchToPanMaxDistance = Jd
              }
            },
            metadata: Wd
          }, aJ, MJ), (0, pd.h)(null, null, fd, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningDistanceLimit" in dd,
              get: dd => dd.panningDistanceLimit,
              set: (dd, Jd) => {
                dd.panningDistanceLimit = Jd
              }
            },
            metadata: Wd
          }, FJ, YJ), (0, pd.h)(null, null, nd, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningOriginTarget" in dd,
              get: dd => dd.panningOriginTarget,
              set: (dd, Jd) => {
                dd.panningOriginTarget = Jd
              }
            },
            metadata: Wd
          }, mJ, bJ), (0, pd.h)(null, null, Ed, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: dd => "zoomOnFactor" in dd,
              get: dd => dd.zoomOnFactor,
              set: (dd, Jd) => {
                dd.zoomOnFactor = Jd
              }
            },
            metadata: Wd
          }, SJ, jJ), (0, pd.h)(null, null, cd, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "targetScreenOffset" in dd,
              get: dd => dd.targetScreenOffset,
              set: (dd, Jd) => {
                dd.targetScreenOffset = Jd
              }
            },
            metadata: Wd
          }, XJ, fJ), (0, pd.h)(null, null, hd, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: dd => "allowUpsideDown" in dd,
              get: dd => dd.allowUpsideDown,
              set: (dd, Jd) => {
                dd.allowUpsideDown = Jd
              }
            },
            metadata: Wd
          }, nJ, UJ), (0, pd.h)(null, null, rd, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: dd => "useInputToRestoreState" in dd,
              get: dd => dd.useInputToRestoreState,
              set: (dd, Jd) => {
                dd.useInputToRestoreState = Jd
              }
            },
            metadata: Wd
          }, yJ, DJ), (0, pd.h)(null, null, ud, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: dd => "restoreStateInterpolationFactor" in dd,
              get: dd => dd.restoreStateInterpolationFactor,
              set: (dd, Jd) => {
                dd.restoreStateInterpolationFactor = Jd
              }
            },
            metadata: Wd
          }, TJ, EJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      Ed = !1;
    Ed || (Ed = !0, gd.c.AddNodeConstructor("ArcRotateCamera", ((dd, Jd) => () => new Td(dd, 0, 0, 1, Pd.n.Zero(), Jd))), (0, fd.h)("BABYLON.ArcRotateCamera", Td))
  },
  40226: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd.d
    });
    var pd = kd(40234);
    (0, pd.e)()
  },
  40234: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      e: () => ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(37443),
      Zd = kd(40243),
      gd = kd(40205),
      Cd = kd(37303);
    let Kd = (() => {
        var dd;
        let Jd, kd, gd = Zd.d,
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        return dd = class extends gd {
          constructor(dd, Jd, kd, Nd) {
            super(dd, kd, Nd), this.groundColor = (0, pd.i)(this, Cd, new Pd.c(0, 0, 0)), this.direction = ((0, pd.i)(this, Kd), (0, pd.i)(this, od, void 0)), (0, pd.i)(this, ld), this.direction = Jd || Wd.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Wd.n.Normalize(dd.subtract(Wd.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", kd.x, kd.y, kd.z, 0, Jd), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Jd), this
          }
          transferToNodeMaterialEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return dd.setFloat3(Jd, kd.x, kd.y, kd.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Wd.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Zd.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Jd) {
            dd["HEMILIGHT" + Jd] = !0
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(gd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.n)()], kd = [(0, Nd.F)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Jd) => {
                dd.groundColor = Jd
              }
            },
            metadata: Wd
          }, Cd, Kd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Jd) => {
                dd.direction = Jd
              }
            },
            metadata: Wd
          }, od, ld), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      od = !1;

    function ld() {
      od || (od = !0, gd.c.AddNodeConstructor("Light_Type_3", ((dd, Jd) => () => new Kd(dd, Wd.n.Zero(), Jd))), (0, Cd.h)("BABYLON.HemisphericLight", Kd))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
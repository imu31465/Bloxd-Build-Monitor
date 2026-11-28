export const id = 296;
export const ids = [296];
export const modules = {
  43038: (dd, Od, md) => {
    md.d(Od, {
      e: () => cd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38660),
      Xd = md(38636),
      Kd = md(38663),
      hd = md(42132),
      vd = md(42330),
      Qd = md(42099),
      td = md(41841),
      od = md(38644);
    class Nd {
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
        const Od = this._attachedCamera.zV();
        this._onPrePointerObservableObserver = Od.onPrePointerObservable.add((dd => {
          dd.type !== Qd.b.POINTERDOWN ? dd.type === Qd.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = dd.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const dd = td.d.Now;
          let Od = 0;
          null != this._lastFrameTime && (Od = dd - this._lastFrameTime), this._lastFrameTime = dd, this._applyUserInteraction();
          const md = dd - this._lastInteractionTime - this._idleRotationWaitTime,
            Wd = Math.max(Math.min(md / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Wd, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Od / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const dd = this._attachedCamera.zV();
        this._onPrePointerObservableObserver && dd.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(dd) {
        this._lastInteractionTime = dd ?? td.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < od.b
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = td.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    md(43045);
    class qd {
      constructor() {
        this._easingMode = qd.EASINGMODE_EASEIN
      }
      setEasingMode(dd) {
        const Od = Math.min(Math.max(dd, 0), 2);
        this._easingMode = Od
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(dd) {
        throw new Error("You must implement this method")
      }
      ease(dd) {
        switch (this._easingMode) {
          case qd.EASINGMODE_EASEIN:
            return this.easeInCore(dd);
          case qd.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - dd)
        }
        return dd >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - dd))) + .5 : .5 * this.easeInCore(2 * dd)
      }
    }
    qd.EASINGMODE_EASEIN = 0, qd.EASINGMODE_EASEOUT = 1, qd.EASINGMODE_EASEINOUT = 2;
    var Hd = md(43051);
    class yd {
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
        const Od = this._attachedCamera;
        Od && (dd ? this._onMeshTargetChangedObserver = Od.onMeshTargetChangedObservable.add((dd => {
          if (dd && (dd.computeWorldMatrix(!0), dd.iG)) {
            const Od = dd.iG().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Od, this.upperRadiusTransitionRange = .05 * Od
          }
        })) : this._onMeshTargetChangedObserver && Od.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (yd.EasingFunction.setEasingMode(yd.EasingMode), this._radiusBounceTransition = Hd.e.CreateAnimation("radius", Hd.e.ANIMATIONTYPE_FLOAT, 60, yd.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Od = Hd.e.TransitionTo("radius", this._attachedCamera.radius + dd, this._attachedCamera, this._attachedCamera.zV(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Od && this._animatables.push(Od)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    yd.EasingFunction = new class extends qd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = dd
      }
      easeInCore(dd) {
        const Od = Math.max(0, this.amplitude);
        return Math.pow(dd, 3) - dd * Od * Math.sin(3.141592653589793 * dd)
      }
    }(.3), yd.EasingMode = qd.EASINGMODE_EASEOUT;
    class bd {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Rd.c, this._mode = bd.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const Od = this._attachedCamera.zV();
        bd.EasingFunction.setEasingMode(bd.EasingMode), this._onPrePointerObservableObserver = Od.onPrePointerObservable.add((dd => {
          dd.type !== Qd.b.POINTERDOWN ? dd.type === Qd.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = dd.onMeshTargetChangedObservable.add((dd => {
          dd && dd.iG && this.zoomOnMesh(dd, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = dd.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const dd = this._attachedCamera.zV();
        this._onPrePointerObservableObserver && dd.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        dd.computeWorldMatrix(!0);
        const Wd = dd.iG().boundingBox;
        this.zoomOnBoundingInfo(Wd.minimumWorld, Wd.maximumWorld, Od, md)
      }
      zoomOnMeshHierarchy(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        dd.computeWorldMatrix(!0);
        const Wd = dd.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Wd.min, Wd.max, Od, md)
      }
      zoomOnMeshesHierarchy(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Wd = new Xd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Fd = new Xd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Rd = 0; Rd < dd.length; Rd++) {
          const Od = dd[Rd].getHierarchyBoundingVectors(!0);
          Xd.j.CheckExtends(Od.min, Wd, Fd), Xd.j.CheckExtends(Od.max, Wd, Fd)
        }
        this.zoomOnBoundingInfo(Wd, Fd, Od, md)
      }
      zoomOnBoundingInfo(dd, Od) {
        let md, Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Rd = dd.y,
          Kd = Rd + (Od.y - Rd) * this._positionScale,
          hd = Od.subtract(dd).scale(.5);
        if (!isFinite(Kd)) return !1;
        if (Wd) md = new Xd.j(0, Kd, 0);
        else {
          const Od = dd.add(hd);
          md = new Xd.j(Od.x, Kd, Od.z)
        }
        this._vectorTransition || (this._vectorTransition = Hd.e.CreateAnimation("target", Hd.e.ANIMATIONTYPE_VECTOR3, 60, bd.EasingFunction)), this._betaIsAnimating = !0;
        let vd = Hd.e.TransitionTo("target", md, this._attachedCamera, this._attachedCamera.zV(), 60, this._vectorTransition, this._framingTime);
        vd && this._animatables.push(vd);
        let Qd = 0;
        if (this._mode === bd.FitFrustumSidesMode) {
          const md = this._calculateLowerRadiusFromModelBoundingSphere(dd, Od);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = hd.length() + this._attachedCamera.minZ), Qd = md
        } else this._mode === bd.IgnoreBoundsSizeMode && (Qd = this._calculateLowerRadiusFromModelBoundingSphere(dd, Od), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const md = Od.subtract(dd).length();
          this._attachedCamera.panningSensibility = 5e3 / md, this._attachedCamera.wheelPrecision = 100 / Qd
        }
        return this._radiusTransition || (this._radiusTransition = Hd.e.CreateAnimation("radius", Hd.e.ANIMATIONTYPE_FLOAT, 60, bd.EasingFunction)), vd = Hd.e.TransitionTo("radius", Qd, this._attachedCamera, this._attachedCamera.zV(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Fd && Fd(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), vd && this._animatables.push(vd), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(dd, Od) {
        const md = this._attachedCamera;
        if (!md) return 0;
        let Wd = md._calculateLowerRadiusFromModelBoundingSphere(dd, Od, this._radiusScale);
        return md.lowerRadiusLimit && this._mode === bd.IgnoreBoundsSizeMode && (Wd = Wd < md.lowerRadiusLimit ? md.lowerRadiusLimit : Wd), md.upperRadiusLimit && (Wd = Wd > md.upperRadiusLimit ? md.upperRadiusLimit : Wd), Wd
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const dd = td.d.Now - this._lastInteractionTime,
          Od = .5 * Math.PI - this._defaultElevation,
          md = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > md && dd >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Hd.e.CreateAnimation("beta", Hd.e.ANIMATIONTYPE_FLOAT, 60, bd.EasingFunction));
          const dd = Hd.e.TransitionTo("beta", Od, this._attachedCamera, this._attachedCamera.zV(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          dd && this._animatables.push(dd)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = td.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    bd.EasingFunction = new class extends qd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = dd
      }
      easeInCore(dd) {
        return this.exponent <= 0 ? dd : (Math.exp(this.exponent * dd) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, bd.EasingMode = qd.EASINGMODE_EASEINOUT, bd.IgnoreBoundsSizeMode = 0, bd.FitFrustumSidesMode = 1;
    var Td = md(42126),
      pd = md(42123),
      Yd = md(42154),
      gd = md(42029);
    let wd = (() => {
        var dd;
        let Od, md = [],
          Rd = [];
        return dd = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Wd.k)(this, md, [0, 1, 2]), this._pointerInput = (0, Wd.k)(this, Rd)
          }
          attachControl(dd) {
            dd = gd.g.BackCompatCameraNoPreventDefault(arguments);
            const Od = this.camera.Iq(),
              md = Od.getInputElement();
            let Wd = 0,
              Fd = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Rd => {
              const Xd = Rd.event,
                Kd = "touch" === Xd.pointerType;
              if (Rd.type !== Qd.b.POINTERMOVE && -1 === this.buttons.indexOf(Xd.button)) return;
              const hd = Xd.target;
              if (this._altKey = Xd.altKey, this._ctrlKey = Xd.ctrlKey, this._metaKey = Xd.metaKey, this._shiftKey = Xd.shiftKey, this._buttonsPressed = Xd.buttons, Od.isPointerLock) {
                const dd = Xd.movementX,
                  Od = Xd.movementY;
                this.onTouch(null, dd, Od), this._pointA = null, this._pointB = null
              } else {
                if (Rd.type !== Qd.b.POINTERDOWN && Rd.type !== Qd.b.POINTERDOUBLETAP && Kd && this._pointA?.pointerId !== Xd.pointerId && this._pointB?.pointerId !== Xd.pointerId) return;
                if (Rd.type !== Qd.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Kd)
                  if (Rd.type === Qd.b.POINTERDOUBLETAP) this.onDoubleTap(Xd.pointerType, Xd);
                  else if (Rd.type !== Qd.b.POINTERUP || this._currentMousePointerIdDown !== Xd.pointerId && !Kd) {
                  if (Rd.type === Qd.b.POINTERMOVE)
                    if (dd || Xd.preventDefault(), this._pointA && null === this._pointB) {
                      const dd = Xd.clientX - this._pointA.x,
                        Od = Xd.clientY - this._pointA.y;
                      this._pointA.x = Xd.clientX, this._pointA.y = Xd.clientY, this.onTouch(this._pointA, dd, Od)
                    } else if (this._pointA && this._pointB) {
                    const dd = this._pointA.pointerId === Xd.pointerId ? this._pointA : this._pointB;
                    dd.x = Xd.clientX, dd.y = Xd.clientY;
                    const Od = this._pointA.x - this._pointB.x,
                      md = this._pointA.y - this._pointB.y,
                      Kd = Od * Od + md * md,
                      hd = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Xd.pointerId,
                        type: Rd.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Wd, Kd, Fd, hd), Fd = hd, Wd = Kd
                  }
                } else {
                  try {
                    hd?.releasePointerCapture(Xd.pointerId)
                  } catch (vd) {}
                  Kd || (this._pointB = null), Od._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Xd.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Xd.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Wd || Fd) && (this.onMultiTouch(this._pointA, this._pointB, Wd, 0, Fd, null), Wd = 0, Fd = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Xd), dd || Xd.preventDefault()
                } else {
                  try {
                    hd?.setPointerCapture(Xd.pointerId)
                  } catch (vd) {}
                  if (null === this._pointA) this._pointA = {
                    x: Xd.clientX,
                    y: Xd.clientY,
                    pointerId: Xd.pointerId,
                    type: Xd.pointerType,
                    button: Xd.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Xd.clientX,
                      y: Xd.clientY,
                      pointerId: Xd.pointerId,
                      type: Xd.pointerType,
                      button: Xd.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Kd || (this._currentMousePointerIdDown = Xd.pointerId), this.onButtonDown(Xd), dd || (Xd.preventDefault(), md && md.focus())
                }
              }
            }, this._observer = this.camera.zV()._inputManager._addCameraPointerObserver(this._pointerInput, Qd.b.POINTERDOWN | Qd.b.POINTERUP | Qd.b.POINTERMOVE | Qd.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Wd = 0, Fd = null, this.onLostFocus()
            }, this._contextMenuBind = dd => this.onContextMenu(dd), md && md.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Rd = this.camera.zV().Iq().getHostWindow();
            Rd && gd.g.RegisterTopRootEvents(Rd, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const dd = this.camera.zV().Iq().getHostWindow();
              dd && gd.g.UnregisterTopRootEvents(dd, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.zV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const dd = this.camera.zV().Iq().getInputElement();
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
          onDoubleTap(dd, Od) {}
          onTouch(dd, Od, md) {}
          onMultiTouch(dd, Od, md, Wd, Fd, Rd) {}
          onContextMenu(dd) {
            dd.preventDefault()
          }
          onButtonDown(dd) {}
          onButtonUp(dd) {}
          onLostFocus() {}
        }, (() => {
          const Xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Od = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: dd => "buttons" in dd,
              get: dd => dd.buttons,
              set: (dd, Od) => {
                dd.buttons = Od
              }
            },
            metadata: Xd
          }, md, Rd), Xd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xd
          })
        })(), dd
      })(),
      Ed = (() => {
        var dd;
        let Od, md, Rd, Xd = wd,
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        return dd = class extends Xd {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Wd.k)(this, Kd, !0), this.multiTouchPanning = ((0, Wd.k)(this, hd), (0, Wd.k)(this, vd, !0)), this.multiTouchPanAndZoom = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, td, !0)), this._isPinching = ((0, Wd.k)(this, od), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(dd, Od) {}
          _computeMultiTouchPanning(dd, Od) {}
          onMultiTouch(dd, Od, md, Wd, Fd, Rd) {
            0 === md && null === Fd || 0 === Wd && null === Rd || (this.multiTouchPanAndZoom ? (this._computePinchZoom(md, Wd), this._computeMultiTouchPanning(Fd, Rd)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(md, Wd), this._isPinching = !0) : this._computeMultiTouchPanning(Fd, Rd)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Fd, Rd) : this.pinchZoom && this._computePinchZoom(md, Wd))
          }
          onButtonUp(dd) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchZoom" in dd,
              get: dd => dd.pinchZoom,
              set: (dd, Od) => {
                dd.pinchZoom = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: dd => "multiTouchPanning" in dd,
              get: dd => dd.multiTouchPanning,
              set: (dd, Od) => {
                dd.multiTouchPanning = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Wd.h)(null, null, Rd, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "multiTouchPanAndZoom" in dd,
              get: dd => dd.multiTouchPanAndZoom,
              set: (dd, Od) => {
                dd.multiTouchPanAndZoom = Od
              }
            },
            metadata: Nd
          }, td, od), Nd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          })
        })(), dd
      })(),
      Jd = (() => {
        var dd;
        let Od, md, Rd, Xd, Kd, hd, vd, Qd = Ed,
          td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [],
          bd = [],
          Td = [],
          pd = [],
          Yd = [],
          gd = [],
          wd = [],
          Jd = [],
          Ud = [];
        return dd = class extends Qd {
          constructor() {
            super(...arguments), this.buttons = (0, Wd.k)(this, td, [0, 1, 2]), this.angularSensibilityX = ((0, Wd.k)(this, od), (0, Wd.k)(this, Nd, 1e3)), this.angularSensibilityY = ((0, Wd.k)(this, qd), (0, Wd.k)(this, Hd, 1e3)), this.pinchPrecision = ((0, Wd.k)(this, yd), (0, Wd.k)(this, bd, 12)), this.pinchDeltaPercentage = ((0, Wd.k)(this, Td), (0, Wd.k)(this, pd, 0)), this.useNaturalPinchZoom = ((0, Wd.k)(this, Yd), (0, Wd.k)(this, gd, !1)), this.panningSensibility = ((0, Wd.k)(this, wd), (0, Wd.k)(this, Jd, 1e3)), this.pinchInwards = ((0, Wd.k)(this, Ud), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(dd, Od) {
            if (dd && Od) {
              const md = Od.x - dd.x,
                Wd = Od.y - dd.y,
                Fd = this.camera.movement.input.getEntry("pointer", "pan"),
                Rd = Fd?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Rd && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -md * Rd, this.camera.movement.panAccumulatedPixels.y += Wd * Rd)
            }
          }
          _computePinchZoom(Od, md) {
            const Wd = this.camera.radius || dd.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Wd * Math.sqrt(Od) / Math.sqrt(md);
            else if (this.pinchDeltaPercentage) {
              const dd = .001 * (md - Od) * Wd * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += dd
            } else {
              const dd = (md - Od) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += dd
            }
          }
          onTouch(dd, Od, md) {
            const Wd = this._activeEntry ?? (this.camera.Iq().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Wd)
              if ("pan" === Wd.interaction) {
                const dd = Wd.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== dd && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Od * dd, this.camera.movement.panAccumulatedPixels.y += md * dd)
              } else if ("rotate" === Wd.interaction) {
              const dd = Wd.Dk ?? Wd.sensitivity ?? 1 / this.angularSensibilityX,
                Fd = Wd.Zk ?? Wd.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Od * dd, this.camera.movement.rotationAccumulatedPixels.y += -md * Fd
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(dd, Od, md, Wd, Fd, Rd) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Wd) - Math.sqrt(md)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(dd, Od, md, Wd, Fd, Rd)
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
          const Ed = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], Xd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: dd => "buttons" in dd,
              get: dd => dd.buttons,
              set: (dd, Od) => {
                dd.buttons = Od
              }
            },
            metadata: Ed
          }, td, od), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: dd => "angularSensibilityX" in dd,
              get: dd => dd.angularSensibilityX,
              set: (dd, Od) => {
                dd.angularSensibilityX = Od
              }
            },
            metadata: Ed
          }, Nd, qd), (0, Wd.h)(null, null, Rd, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: dd => "angularSensibilityY" in dd,
              get: dd => dd.angularSensibilityY,
              set: (dd, Od) => {
                dd.angularSensibilityY = Od
              }
            },
            metadata: Ed
          }, Hd, yd), (0, Wd.h)(null, null, Xd, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchPrecision" in dd,
              get: dd => dd.pinchPrecision,
              set: (dd, Od) => {
                dd.pinchPrecision = Od
              }
            },
            metadata: Ed
          }, bd, Td), (0, Wd.h)(null, null, Kd, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchDeltaPercentage" in dd,
              get: dd => dd.pinchDeltaPercentage,
              set: (dd, Od) => {
                dd.pinchDeltaPercentage = Od
              }
            },
            metadata: Ed
          }, pd, Yd), (0, Wd.h)(null, null, hd, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: dd => "useNaturalPinchZoom" in dd,
              get: dd => dd.useNaturalPinchZoom,
              set: (dd, Od) => {
                dd.useNaturalPinchZoom = Od
              }
            },
            metadata: Ed
          }, gd, wd), (0, Wd.h)(null, null, vd, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningSensibility" in dd,
              get: dd => dd.panningSensibility,
              set: (dd, Od) => {
                dd.panningSensibility = Od
              }
            },
            metadata: Ed
          }, Jd, Ud), Ed && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ed
          })
        })(), dd.MinimumRadiusForPinch = .001, dd
      })();
    Yd.b.ArcRotateCameraPointersInput = Jd;
    var Ud = md(42105);
    let xd = (() => {
      var dd;
      let Od, md, Rd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd = [],
        yd = [],
        bd = [],
        Td = [],
        pd = [],
        Yd = [],
        wd = [],
        Ed = [],
        Jd = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [];
      return dd = class {
        constructor() {
          this.camera = (0, Wd.k)(this, Hd), this.keysUp = (0, Wd.k)(this, yd, [38]), this.keysDown = ((0, Wd.k)(this, bd), (0, Wd.k)(this, Td, [40])), this.keysLeft = ((0, Wd.k)(this, pd), (0, Wd.k)(this, Yd, [37])), this.keysRight = ((0, Wd.k)(this, wd), (0, Wd.k)(this, Ed, [39])), this.keysReset = ((0, Wd.k)(this, Jd), (0, Wd.k)(this, xd, [220])), this.keysZoomIn = ((0, Wd.k)(this, Bd), (0, Wd.k)(this, Sd, [187, 107])), this.keysZoomOut = ((0, Wd.k)(this, sd), (0, Wd.k)(this, ud, [189, 109])), this.panningSensibility = ((0, Wd.k)(this, Vd), (0, Wd.k)(this, Ad, 50)), this.zoomingSensibility = ((0, Wd.k)(this, rd), (0, Wd.k)(this, Gd, 25)), this.angularSpeed = ((0, Wd.k)(this, nd), (0, Wd.k)(this, Ld, .01)), this._useAltToZoom = ((0, Wd.k)(this, Pd), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Xd.i, this._panDirection = new Xd.i
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
            Od = dd.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Od ? dd.inputMap.splice(dd.inputMap.indexOf(Od), 1) : this._useAltToZoom && !Od && dd.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(dd) {
          dd = gd.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.zV(), this._engine = this._scene.Iq(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Od => {
            const md = Od.event;
            if (!md.metaKey)
              if (Od.type === Ud.e.KEYDOWN) {
                if (this._ctrlPressed = md.ctrlKey, this._altPressed = md.altKey, -1 !== this.keysUp.indexOf(md.keyCode) || -1 !== this.keysDown.indexOf(md.keyCode) || -1 !== this.keysLeft.indexOf(md.keyCode) || -1 !== this.keysRight.indexOf(md.keyCode) || -1 !== this.keysReset.indexOf(md.keyCode) || -1 !== this.keysZoomIn.indexOf(md.keyCode) || -1 !== this.keysZoomOut.indexOf(md.keyCode)) {
                  -1 === this._keys.indexOf(md.keyCode) && this._keys.push(md.keyCode), md.preventDefault && (dd || md.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(md.keyCode) || -1 !== this.keysDown.indexOf(md.keyCode) || -1 !== this.keysLeft.indexOf(md.keyCode) || -1 !== this.keysRight.indexOf(md.keyCode) || -1 !== this.keysReset.indexOf(md.keyCode) || -1 !== this.keysZoomIn.indexOf(md.keyCode) || -1 !== this.keysZoomOut.indexOf(md.keyCode)) {
              const Od = this._keys.indexOf(md.keyCode);
              Od >= 0 && this._keys.splice(Od, 1), md.preventDefault && (dd || md.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const dd = this.camera,
              Od = dd.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const md = this._rotateDirection.set(0, 0),
              Wd = this._panDirection.set(0, 0);
            let Fd = 0,
              Rd = 0;
            for (let Xd = 0; Xd < this._keys.length; Xd++) {
              const Kd = this._keys[Xd];
              if (this._keyboardConditions.key = Kd, -1 === this.keysReset.indexOf(Kd)) {
                const dd = Od.resolveInteraction("keyboard", this._keyboardConditions);
                if (dd)
                  if ("pan" === dd.interaction) Rd = Math.max(Rd, dd.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Kd) ? Wd.x -= 1 : -1 !== this.keysRight.indexOf(Kd) ? Wd.x += 1 : -1 !== this.keysUp.indexOf(Kd) ? Wd.y += 1 : -1 !== this.keysDown.indexOf(Kd) && (Wd.y -= 1);
                  else if ("zoom" === dd.interaction) {
                  const md = dd.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Kd) || -1 !== this.keysZoomIn.indexOf(Kd) ? Od.handlers.zoom(md) : -1 === this.keysDown.indexOf(Kd) && -1 === this.keysZoomOut.indexOf(Kd) || Od.handlers.zoom(-md)
                } else "rotate" === dd.interaction && (Fd = Math.max(Fd, dd.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Kd) ? md.x -= 1 : -1 !== this.keysRight.indexOf(Kd) ? md.x += 1 : -1 !== this.keysUp.indexOf(Kd) ? md.y -= 1 : -1 !== this.keysDown.indexOf(Kd) && (md.y += 1))
              } - 1 !== this.keysReset.indexOf(Kd) && dd.useInputToRestoreState && dd.restoreState()
            }
            0 === md.x && 0 === md.y || (md.normalize().scaleInPlace(Fd), Od.handlers.rotate(md.x, md.y)), 0 === Wd.x && 0 === Wd.y || (Wd.normalize().scaleInPlace(Rd), Od.handlers.pan(Wd.x, Wd.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.E)()], od = [(0, Fd.E)()], Nd = [(0, Fd.E)()], qd = [(0, Fd.E)()], (0, Wd.h)(dd, null, qd, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAltToZoom" in dd,
            get: dd => dd.useAltToZoom
          },
          metadata: Xd
        }, null, Hd), (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysUp" in dd,
            get: dd => dd.keysUp,
            set: (dd, Od) => {
              dd.keysUp = Od
            }
          },
          metadata: Xd
        }, yd, bd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysDown" in dd,
            get: dd => dd.keysDown,
            set: (dd, Od) => {
              dd.keysDown = Od
            }
          },
          metadata: Xd
        }, Td, pd), (0, Wd.h)(null, null, Rd, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysLeft" in dd,
            get: dd => dd.keysLeft,
            set: (dd, Od) => {
              dd.keysLeft = Od
            }
          },
          metadata: Xd
        }, Yd, wd), (0, Wd.h)(null, null, Kd, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysRight" in dd,
            get: dd => dd.keysRight,
            set: (dd, Od) => {
              dd.keysRight = Od
            }
          },
          metadata: Xd
        }, Ed, Jd), (0, Wd.h)(null, null, hd, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysReset" in dd,
            get: dd => dd.keysReset,
            set: (dd, Od) => {
              dd.keysReset = Od
            }
          },
          metadata: Xd
        }, xd, Bd), (0, Wd.h)(null, null, vd, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysZoomIn" in dd,
            get: dd => dd.keysZoomIn,
            set: (dd, Od) => {
              dd.keysZoomIn = Od
            }
          },
          metadata: Xd
        }, Sd, sd), (0, Wd.h)(null, null, Qd, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: dd => "keysZoomOut" in dd,
            get: dd => dd.keysZoomOut,
            set: (dd, Od) => {
              dd.keysZoomOut = Od
            }
          },
          metadata: Xd
        }, ud, Vd), (0, Wd.h)(null, null, td, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "panningSensibility" in dd,
            get: dd => dd.panningSensibility,
            set: (dd, Od) => {
              dd.panningSensibility = Od
            }
          },
          metadata: Xd
        }, Ad, rd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: dd => "zoomingSensibility" in dd,
            get: dd => dd.zoomingSensibility,
            set: (dd, Od) => {
              dd.zoomingSensibility = Od
            }
          },
          metadata: Xd
        }, Gd, nd), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: dd => "angularSpeed" in dd,
            get: dd => dd.angularSpeed,
            set: (dd, Od) => {
              dd.angularSpeed = Od
            }
          },
          metadata: Xd
        }, Ld, Pd), Xd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xd
        })
      })(), dd
    })();
    Yd.b.ArcRotateCameraKeyboardMoveInput = xd;
    var Bd = md(39306),
      Sd = md(42111);
    let sd = (() => {
      var dd;
      let Od, md, Rd, hd = [],
        vd = [],
        td = [],
        Nd = [],
        qd = [],
        Hd = [];
      return dd = class {
        constructor() {
          this.wheelPrecision = (0, Wd.k)(this, hd, 3), this.zoomToMouseLocation = ((0, Wd.k)(this, vd), (0, Wd.k)(this, td, !1)), this.wheelDeltaPercentage = ((0, Wd.k)(this, Nd), (0, Wd.k)(this, qd, 0)), this.customComputeDeltaFromMouseWheel = ((0, Wd.k)(this, Hd), null), this._viewOffset = new Xd.j(0, 0, 0), this._globalOffset = new Xd.j(0, 0, 0), this._inertialPanning = Xd.j.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(dd, Od) {
          let md;
          const Wd = .01 * dd * this.wheelDeltaPercentage * Od;
          return md = dd > 0 ? Wd / (1 + this.wheelDeltaPercentage) : Wd * (1 + this.wheelDeltaPercentage), md
        }
        attachControl(dd) {
          dd = gd.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = Od => {
            if (Od.type !== Qd.b.POINTERWHEEL) return;
            const md = Od.event;
            let Wd;
            const Fd = md.deltaMode === Sd.c.DOM_DELTA_LINE ? 40 : 1,
              Rd = -md.deltaY * Fd;
            if (this.customComputeDeltaFromMouseWheel) Wd = this.customComputeDeltaFromMouseWheel(Rd, this, md);
            else if (this.wheelDeltaPercentage) {
              if (Wd = this._computeDeltaFromMouseWheelLegacyEvent(Rd, this.camera.radius), Wd > 0) {
                const dd = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Od = this.camera.radius,
                  md = dd + Wd;
                for (let Wd = 0; Wd < 20 && !(Od <= md) && !(Math.abs(md * this.camera.inertia) < .001); Wd++) Od -= md, md *= this.camera.inertia;
                Od = (0, Kd.Clamp)(Od, 0, Number.MAX_VALUE), Wd = this._computeDeltaFromMouseWheelLegacyEvent(Rd, Od)
              }
            } else {
              const dd = this.camera.movement.input.getEntry("wheel", "zoom");
              Wd = Rd * (dd?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Wd && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Wd)) : this.camera.movement.zoomAccumulatedPixels += Wd), md.preventDefault && (dd || md.preventDefault())
          }, this._observer = this.camera.zV()._inputManager._addCameraPointerObserver(this._wheel, Qd.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Bdd(0)
        }
        detachControl() {
          this._observer && (this.camera.zV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const dd = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(dd.inertialAlphaOffset) + Math.abs(dd.inertialBetaOffset) + Math.abs(dd.inertialRadiusOffset)) {
            this._updateHitPlane(), dd.target.addInPlace(this._inertialPanning), dd.radius -= this._zoomToMouseRadiusOffset;
            const Od = dd.movement.getFrameIndependentDecay(dd.inertia);
            this._inertialPanning.scaleInPlace(Od), this._zoomToMouseRadiusOffset *= Od, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < od.b && (this._zoomToMouseRadiusOffset = 0)
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
            Od = dd.target.subtract(dd.position);
          this._hitPlane = Bd.d.FromPositionAndNormal(dd.target, Od)
        }
        _getPosition() {
          const dd = this.camera,
            Od = dd.zV(),
            md = Od.createPickingRay(Od.pointerX, Od.pointerY, Xd.d.Identity(), dd, !1);
          0 === dd.targetScreenOffset.x && 0 === dd.targetScreenOffset.y || (this._viewOffset.set(dd.targetScreenOffset.x, dd.targetScreenOffset.y, 0), dd.getViewMatrix().invertToRef(dd._cameraTransformMatrix), this._globalOffset = Xd.j.TransformNormal(this._viewOffset, dd._cameraTransformMatrix), md.origin.addInPlace(this._globalOffset));
          let Wd = 0;
          return this._hitPlane && (Wd = md.intersectsPlane(this._hitPlane) ?? 0), md.origin.addInPlace(md.direction.scaleInPlace(Wd))
        }
        _zoomToMouse(dd) {
          const Od = this.camera,
            md = 1 - Od.inertia,
            Wd = Od.movement.getFrameIndependentInputScale(Od.inertia);
          if (Od.lowerRadiusLimit) {
            const Fd = Od.lowerRadiusLimit ?? 0;
            Od.radius - (this._zoomToMouseRadiusOffset + dd * Wd) / md < Fd && (dd = ((Od.radius - Fd) * md - this._zoomToMouseRadiusOffset) / Wd)
          }
          if (Od.upperRadiusLimit) {
            const Fd = Od.upperRadiusLimit ?? 0;
            Od.radius - (this._zoomToMouseRadiusOffset + dd * Wd) / md > Fd && (dd = ((Od.radius - Fd) * md - this._zoomToMouseRadiusOffset) / Wd)
          }
          const Fd = dd / md / Od.radius,
            Rd = this._getPosition(),
            Kd = Xd.h.Cq[6];
          Rd.subtractToRef(Od.target, Kd), Kd.scaleInPlace(Fd), Kd.scaleInPlace(md), Kd.scaleInPlace(Wd), this._inertialPanning.addInPlace(Kd), this._zoomToMouseRadiusOffset += dd * Wd
        }
        _zeroIfClose(dd) {
          Math.abs(dd.x) < od.b && (dd.x = 0), Math.abs(dd.y) < od.b && (dd.y = 0), Math.abs(dd.z) < od.b && (dd.z = 0)
        }
      }, (() => {
        const Xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelPrecision" in dd,
            get: dd => dd.wheelPrecision,
            set: (dd, Od) => {
              dd.wheelPrecision = Od
            }
          },
          metadata: Xd
        }, hd, vd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: dd => "zoomToMouseLocation" in dd,
            get: dd => dd.zoomToMouseLocation,
            set: (dd, Od) => {
              dd.zoomToMouseLocation = Od
            }
          },
          metadata: Xd
        }, td, Nd), (0, Wd.h)(null, null, Rd, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: dd => "wheelDeltaPercentage" in dd,
            get: dd => dd.wheelDeltaPercentage,
            set: (dd, Od) => {
              dd.wheelDeltaPercentage = Od
            }
          },
          metadata: Xd
        }, qd, Hd), Xd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xd
        })
      })(), dd
    })();
    Yd.b.ArcRotateCameraMouseWheelInput = sd;
    var ud, Vd, Ad = md(41817);
    class rd extends Yd.f {
      constructor(dd) {
        super(dd)
      }
      addMouseWheel() {
        return this.add(new sd), this
      }
      addPointers() {
        return this.add(new Jd), this
      }
      addKeyboard() {
        return this.add(new xd), this
      }
    }(ud = rd.prototype).addVRDeviceOrientation ?? (ud.addVRDeviceOrientation = (0, Ad.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Vd = rd.prototype).addGamepad ?? (Vd.addGamepad = (0, Ad.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var Gd = md(38669),
      nd = md(42140),
      Ld = md(42146);
    class Pd extends nd.d {
      constructor(dd, Od, md) {
        super(dd, Od, md), this.input = new Ld.d({
          pan: (dd, Od) => {
            this.panAccumulatedPixels.x += dd, this.panAccumulatedPixels.y += Od
          },
          rotate: (dd, Od) => {
            this.rotationAccumulatedPixels.x += dd, this.rotationAccumulatedPixels.y += Od
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

    function zd(dd, Od) {
      return isNaN(dd) ? Od : dd
    }
    let cd = (() => {
        var dd;
        let Od, md, hd, Qd, td, qd, Hd, Yd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, Gd, nd, Ld, cd, jd, Dd, ed, Id, ld, Cd = pd.h,
          Zd = [],
          kd = [],
          fd = [],
          Md = [],
          dO = [],
          OO = [],
          mO = [],
          WO = [],
          FO = [],
          RO = [],
          XO = [],
          KO = [],
          hO = [],
          vO = [],
          QO = [],
          tO = [],
          oO = [],
          NO = [],
          qO = [],
          HO = [],
          yO = [],
          bO = [],
          TO = [],
          pO = [],
          YO = [],
          gO = [],
          wO = [],
          aO = [],
          EO = [],
          JO = [],
          UO = [],
          xO = [],
          BO = [],
          SO = [],
          sO = [],
          uO = [],
          VO = [],
          iO = [],
          AO = [],
          rO = [],
          GO = [],
          nO = [],
          LO = [],
          PO = [],
          zO = [],
          cO = [],
          jO = [];
        return dd = class extends Cd {
          get target() {
            return this.Jt
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
            this._upToYMatrix || (this._yToUpMatrix = new Xd.d, this._upToYMatrix = new Xd.d, this._upVector = Xd.j.Zero()), dd.normalize(), this._upVector.Bx(dd), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Xd.d.RotationAlignToRef(Xd.j.UpReadOnly, this._upVector, this._yToUpMatrix), Xd.d.RotationAlignToRef(this._upVector, Xd.j.UpReadOnly, this._upToYMatrix)
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
            const Od = this.inputs.attached.pointers;
            Od && (Od.angularSensibilityX = dd)
          }
          get angularSensibilityY() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.angularSensibilityY : 0
          }
          set angularSensibilityY(dd) {
            const Od = this.inputs.attached.pointers;
            Od && (Od.angularSensibilityY = dd)
          }
          get pinchPrecision() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.pinchPrecision : 0
          }
          set pinchPrecision(dd) {
            const Od = this.inputs.attached.pointers;
            Od && (Od.pinchPrecision = dd)
          }
          get pinchDeltaPercentage() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(dd) {
            const Od = this.inputs.attached.pointers;
            Od && (Od.pinchDeltaPercentage = dd)
          }
          get useNaturalPinchZoom() {
            const dd = this.inputs.attached.pointers;
            return !!dd && dd.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(dd) {
            const Od = this.inputs.attached.pointers;
            Od && (Od.useNaturalPinchZoom = dd)
          }
          get panningSensibility() {
            const dd = this.inputs.attached.pointers;
            return dd ? dd.panningSensibility : 0
          }
          set panningSensibility(dd) {
            const Od = this.inputs.attached.pointers;
            Od && (Od.panningSensibility = dd)
          }
          get keysUp() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysUp : []
          }
          set keysUp(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysUp = dd)
          }
          get keysDown() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysDown : []
          }
          set keysDown(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysDown = dd)
          }
          get keysLeft() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysLeft : []
          }
          set keysLeft(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysLeft = dd)
          }
          get keysRight() {
            const dd = this.inputs.attached.keyboard;
            return dd ? dd.keysRight : []
          }
          set keysRight(dd) {
            const Od = this.inputs.attached.keyboard;
            Od && (Od.keysRight = dd)
          }
          get wheelPrecision() {
            const dd = this.inputs.attached.mousewheel;
            return dd ? dd.wheelPrecision : 0
          }
          set wheelPrecision(dd) {
            const Od = this.inputs.attached.mousewheel;
            Od && (Od.wheelPrecision = dd)
          }
          get zoomToMouseLocation() {
            const dd = this.inputs.attached.mousewheel;
            return !!dd && dd.zoomToMouseLocation
          }
          set zoomToMouseLocation(dd) {
            const Od = this.inputs.attached.mousewheel;
            Od && (Od.zoomToMouseLocation = dd)
          }
          get wheelDeltaPercentage() {
            const dd = this.inputs.attached.mousewheel;
            return dd ? dd.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(dd) {
            const Od = this.inputs.attached.mousewheel;
            Od && (Od.wheelDeltaPercentage = dd)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(dd) {
            this._useCtrlForPanningInternal = dd;
            const Od = this.movement.input,
              md = Od.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !dd && md ? Od.inputMap.splice(Od.inputMap.indexOf(md), 1) : dd && !md && Od.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Wd = Od.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !dd && Wd ? Od.inputMap.splice(Od.inputMap.indexOf(Wd), 1) : dd && !Wd && Od.addEntry({
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
            const Od = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Od && (Od.button = dd)
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
            dd !== this.useBouncingBehavior && (dd ? (this._bouncingBehavior = new yd, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(dd) {
            dd !== this.useFramingBehavior && (dd ? (this._framingBehavior = new bd, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(dd) {
            dd !== this.useAutoRotationBehavior && (dd ? (this._autoRotationBehavior = new Nd, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(dd, Od, md, Fd, Kd, hd) {
            var vd;
            let Qd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(dd, Xd.j.Zero(), hd, Qd), vd = this, this.alpha = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, void 0)), this.beta = ((0, Wd.k)(this, fd), (0, Wd.k)(this, Md, void 0)), this.radius = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, void 0)), this.Jt = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, void 0)), this._targetHost = ((0, Wd.k)(this, XO), (0, Wd.k)(this, KO, void 0)), this._upToYMatrix = (0, Wd.k)(this, hO), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Wd.k)(this, vO, null), this.upperAlphaLimit = ((0, Wd.k)(this, QO), (0, Wd.k)(this, tO, null)), this.lowerBetaLimit = ((0, Wd.k)(this, oO), (0, Wd.k)(this, NO, .01)), this.upperBetaLimit = ((0, Wd.k)(this, qO), (0, Wd.k)(this, HO, Math.PI - .01)), this.lowerRadiusLimit = ((0, Wd.k)(this, yO), (0, Wd.k)(this, bO, null)), this.upperRadiusLimit = ((0, Wd.k)(this, TO), (0, Wd.k)(this, pO, null)), this.lowerTargetYLimit = ((0, Wd.k)(this, YO), (0, Wd.k)(this, gO, -1 / 0)), this.inertialPanningX = ((0, Wd.k)(this, wO), (0, Wd.k)(this, aO, 0)), this.inertialPanningY = ((0, Wd.k)(this, EO), (0, Wd.k)(this, JO, 0)), this.pinchToPanMaxDistance = ((0, Wd.k)(this, UO), (0, Wd.k)(this, xO, 20)), this.panningDistanceLimit = ((0, Wd.k)(this, BO), (0, Wd.k)(this, SO, null)), this.panningOriginTarget = ((0, Wd.k)(this, sO), (0, Wd.k)(this, uO, Xd.j.Zero())), this._panningInertia = ((0, Wd.k)(this, VO), .9), this._inertia = .9, this.zoomOnFactor = (0, Wd.k)(this, iO, 1), this.targetScreenOffset = ((0, Wd.k)(this, AO), (0, Wd.k)(this, rO, Xd.i.Zero())), this.allowUpsideDown = ((0, Wd.k)(this, GO), (0, Wd.k)(this, nO, !0)), this.useInputToRestoreState = ((0, Wd.k)(this, LO), (0, Wd.k)(this, PO, !0)), this.restoreStateInterpolationFactor = ((0, Wd.k)(this, zO), (0, Wd.k)(this, cO, 0)), this._currentInterpolationFactor = ((0, Wd.k)(this, jO), 0), this._viewMatrix = new Xd.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Xd.j(1, 1, 0), this._transformedDirection = new Xd.j, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Rd.c, this.checkCollisions = !1, this.collisionRadius = new Xd.j(.5, .5, .5), this._previousPosition = Xd.j.Zero(), this._collisionVelocity = Xd.j.Zero(), this._newPosition = Xd.j.Zero(), this._computationVector = Xd.j.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Xd.j(NaN, NaN, NaN), this._goalTargetScreenOffset = new Xd.i(NaN, NaN), this._onCollisionPositionChange = function(dd, Od) {
              let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              md ? (vd.setPosition(Od), vd.Co && vd.Co(md)) : vd._previousPosition.Bx(vd._position);
              const Wd = Math.cos(vd.alpha),
                Fd = Math.sin(vd.alpha),
                Rd = Math.cos(vd.beta);
              let Xd = Math.sin(vd.beta);
              0 === Xd && (Xd = 1e-4);
              const Kd = vd._getTargetPosition();
              vd._computationVector.KOd(vd.radius * Wd * Xd, vd.radius * Rd, vd.radius * Fd * Xd), Kd.addToRef(vd._computationVector, vd._newPosition), vd._position.Bx(vd._newPosition);
              let hd = vd.upVector;
              vd.allowUpsideDown && vd.beta < 0 && (hd = hd.clone(), hd = hd.ty()), vd._computeViewMatrix(vd._position, Kd, hd), vd._viewMatrix.addAtIndex(12, vd.targetScreenOffset.x), vd._viewMatrix.addAtIndex(13, vd.targetScreenOffset.y), vd._collisionTriggered = !1
            }, this.Jt = Xd.j.Zero(), Kd && this.setTarget(Kd), this.alpha = Od, this.beta = md, this.radius = Fd, this.getViewMatrix(), this.inputs = new rd(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Pd(this.zV(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Jt = new Xd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Xd.i.Zero()
          }
          _updateCache(dd) {
            dd || super._updateCache(), this._cache.Jt.Bx(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Bx(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const dd = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? dd.addToRef(this._targetBoundingCenter, this.Jt) : this.Jt.Bx(dd)
            }
            const dd = this._getLockedTargetPosition();
            return dd || this.Jt
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > od.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Rd = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Rd ? this._currentInterpolationFactor = Rd : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = zd(dd, this._goalAlpha), this._goalBeta = zd(Od, this._goalBeta), this._goalRadius = zd(md, this._goalRadius), this._goalTarget.set(zd(Wd.x, this._goalTarget.x), zd(Wd.y, this._goalTarget.y), zd(Wd.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(zd(Fd.x, this._goalTargetScreenOffset.x), zd(Fd.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Kd.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Kd.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Kd.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Kd.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Jt.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(dd, Od) {
            let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Fd = arguments;
            Od = gd.g.BackCompatCameraNoPreventDefault(Fd), this._useCtrlForPanning = md, this._panningMouseButton = Wd, "boolean" === typeof Fd[0] && (Fd.length > 1 && (this._useCtrlForPanning = Fd[1]), Fd.length > 2 && (this._panningMouseButton = Fd[2])), this.inputs.attachElement(Od), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(dd, Od, md) {
            const Wd = this.invertRotation ? -1 : 1;
            let Fd = dd * this._calculateHandednessMultiplier();
            this.beta < 0 && (Fd *= -1), this.alpha += Fd * Wd, this.beta += Od * Wd, this.radius -= md
          }
          _applyPanDelta(dd, Od) {
            const md = Xd.h.Cq[0].KOd(dd, Od, Od);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), md.multiplyInPlace(this.panningAxis), Xd.j.TransformNormalToRef(md, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const dd = this.upVector,
                Od = Xd.j.CrossToRef(this._transformedDirection, dd, this._transformedDirection);
              Xd.j.CrossToRef(dd, Od, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Jt);
                Xd.j.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Jt.Bx(this._transformedDirection)
              } else {
                if (this.parent) {
                  const dd = Xd.h.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(dd), dd.transposeToRef(dd), Xd.j.TransformCoordinatesToRef(this._transformedDirection, dd, this._transformedDirection)
                }
                this.Jt.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let dd = !1;
            this.movement.computeCurrentFrameDeltas();
            const Od = this.movement.rotationDeltaCurrentFrame,
              md = this.movement.zoomDeltaCurrentFrame,
              Wd = this.movement.panDeltaCurrentFrame;
            if (0 === Od.x && 0 === Od.y && 0 === md && 0 === Wd.x && 0 === Wd.y || (dd = !0, 0 === Od.x && 0 === Od.y && 0 === md || this._applyRotationAndZoomDelta(Od.x, Od.y, md), 0 === Wd.x && 0 === Wd.y || this._applyPanDelta(Wd.x, Wd.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), dd = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Od = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Od && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Od && (this.inertialPanningY = 0), dd = !0
            }
            if (dd) this.stopInterpolation();
            else if (this._isInterpolating) {
              let dd = !1;
              const Od = this._scene.Iq().getDeltaTime() / 1e3,
                md = 1 - Math.pow(2, -Od / this._currentInterpolationFactor),
                Wd = zd(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Od = Xd.h.Cq[0].set(zd(this._goalTarget.x, this.Jt.x), zd(this._goalTarget.y, this.Jt.y), zd(this._goalTarget.z, this.Jt.z));
                Xd.j.LerpToRef(this.target, Od, md, this.Jt), 10 * Xd.j.Distance(this.target, Od) / Wd < od.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Bx(Od), this.setTarget(this.target, !1, !0, !0)) : dd = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Od = Xd.e.RotationAlphaBetaGammaToRef(zd(this._goalAlpha, this.alpha), zd(this._goalBeta, this.beta), 0, Xd.h.Quaternion[0]),
                  Wd = Xd.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Xd.h.Quaternion[1]),
                  Fd = Xd.e.SlerpToRef(Wd, Od, md, Xd.h.Quaternion[2]);
                Fd.normalize();
                const Rd = Fd.toAlphaBetaGammaToRef(Xd.h.Cq[0]);
                if (this.alpha = Rd.x, this.beta = Rd.y, Fd.isApprox(Od, od.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const dd = Od.toAlphaBetaGammaToRef(Xd.h.Cq[0]);
                  this.alpha = dd.x, this.beta = dd.y
                } else dd = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Wd - this.radius) * md, Math.abs(Wd / this.radius - 1) < od.b ? (this._goalRadius = NaN, this.radius = Wd) : dd = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Od = Xd.h.Vector2[0].set(zd(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), zd(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Xd.i.LerpToRef(this.targetScreenOffset, Od, md, this.targetScreenOffset), Xd.i.Distance(this.targetScreenOffset, Od) < od.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Bx(Od)) : dd = !0
              }
              this._isInterpolating = dd
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xd.j.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const dd = this.alpha;
            var Od, md;
            this.alpha = function(dd) {
              let Od = Math.PI / 2;
              return 0 === dd.x && 0 === dd.z || (Od = Math.acos(dd.x / Math.sqrt(Math.pow(dd.x, 2) + Math.pow(dd.z, 2)))), dd.z < 0 && (Od = 2 * Math.PI - Od), Od
            }(this._computationVector), this.beta = (Od = this._computationVector.y, md = this.radius, Math.acos(Od / md));
            const Wd = Math.round((dd - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Wd * Math.PI, this._checkLimits()
          }
          setPosition(dd) {
            this._position.equals(dd) || (this._position.Bx(dd), this.rebuildAnglesAndRadius())
          }
          setTarget(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Wd = this.overrideCloneAlphaBetaRadius ?? Wd, dd.computeWorldMatrix) Od && dd.iG ? this._targetBoundingCenter = dd.iG().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, dd.computeWorldMatrix(), this._targetHost = dd, this.Jt = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Od = dd,
                Wd = this._getTargetPosition();
              if (Wd && !md && Wd.equals(Od)) return;
              this._targetHost = null, this.Jt = Od, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Wd || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const dd = Math.cos(this.alpha),
              Od = Math.sin(this.alpha),
              md = Math.cos(this.beta);
            let Wd = Math.sin(this.beta);
            0 === Wd && (Wd = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Fd = this._getTargetPosition();
            if (this._computationVector.KOd(this.radius * dd * Wd, this.radius * md, this.radius * Od * Wd), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xd.j.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Fd.addToRef(this._computationVector, this._newPosition), this.zV().collisionsEnabled && this.checkCollisions) {
              const dd = this.zV().collisionCoordinator;
              this._collider || (this._collider = dd.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, dd.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Bx(this._newPosition);
              let dd = this.upVector;
              this.allowUpsideDown && Wd < 0 && (dd = dd.ty()), this._computeViewMatrix(this._position, Fd, dd), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Bx(Fd), this._viewMatrix
          }
          zoomOn(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            dd = dd || this.zV().meshes;
            const md = vd.d.MinMax(dd);
            let Wd = this._calculateLowerRadiusFromModelBoundingSphere(md.min, md.max);
            if (Wd = Math.max(Math.min(Wd, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Wd * this.zoomOnFactor, this.mode === Td.e.ORTHOGRAPHIC_CAMERA) {
              const dd = this.zV().Iq().getAspectRatio(this),
                Od = Wd * this.zoomOnFactor / 2;
              this.orthoLeft = -Od * dd, this.orthoRight = Od * dd, this.orthoBottom = -Od, this.orthoTop = Od
            }
            this.focusOn({
              min: md.min,
              max: md.max,
              distance: Wd
            }, Od)
          }
          focusOn(dd) {
            let Od, md, Wd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === dd.min) {
              const Wd = dd || this.zV().meshes;
              Od = vd.d.MinMax(Wd), md = Xd.j.Distance(Od.min, Od.max)
            } else {
              Od = dd, md = dd.distance
            }
            this.Jt = vd.d.Center(Od), Wd || (this.maxZ = 2 * md)
          }
          createRigCamera(Od, md) {
            let Wd = 0;
            switch (this.cameraRigMode) {
              case Td.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Td.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Td.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Td.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Td.e.RIG_MODE_VR:
                Wd = this._cameraRigParams.stereoHalfAngle * (0 === md ? 1 : -1);
                break;
              case Td.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Wd = this._cameraRigParams.stereoHalfAngle * (0 === md ? -1 : 1)
            }
            const Fd = new dd(Od, this.alpha + Wd, this.beta, this.radius, this.Jt, this.zV());
            return Fd._cameraRigParams = {}, Fd.isRigCamera = !0, Fd.rigParent = this, Fd.upVector = this.upVector, Fd.mode = this.mode, Fd.orthoLeft = this.orthoLeft, Fd.orthoRight = this.orthoRight, Fd.orthoBottom = this.orthoBottom, Fd.orthoTop = this.orthoTop, Fd
          }
          _updateRigCameras() {
            const dd = this._rigCameras[0],
              Od = this._rigCameras[1];
            switch (dd.beta = Od.beta = this.beta, this.cameraRigMode) {
              case Td.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Td.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Td.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Td.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Td.e.RIG_MODE_VR:
                dd.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Od.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Td.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                dd.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Od.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Wd = Xd.j.Distance(dd, Od),
              Fd = this.zV().Iq().getAspectRatio(this),
              Rd = Math.tan(this.fov / 2),
              Kd = Rd * Fd,
              hd = .5 * Wd * md,
              vd = hd * Math.sqrt(1 + 1 / (Kd * Kd)),
              Qd = hd * Math.sqrt(1 + 1 / (Rd * Rd));
            return Math.max(vd, Qd)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], hd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.B)("target")], qd = [(0, Fd.s)("targetHost")], Hd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Ed = [(0, Fd.E)()], Jd = [(0, Fd.E)()], Ud = [(0, Fd.E)()], xd = [(0, Fd.E)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], ud = [(0, Fd.E)()], Vd = [(0, Fd.E)()], Ad = [(0, Fd.E)()], Gd = [(0, Fd.E)()], nd = [(0, Fd.B)()], Ld = [(0, Fd.E)()], cd = [(0, Fd.E)()], jd = [(0, Fd.E)()], Dd = [(0, Fd.z)()], ed = [(0, Fd.E)()], Id = [(0, Fd.E)()], ld = [(0, Fd.E)()], (0, Wd.h)(dd, null, Hd, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialAlphaOffset" in dd,
              get: dd => dd.inertialAlphaOffset
            },
            metadata: Rd
          }, null, Zd), (0, Wd.h)(dd, null, Yd, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialBetaOffset" in dd,
              get: dd => dd.inertialBetaOffset
            },
            metadata: Rd
          }, null, Zd), (0, Wd.h)(dd, null, wd, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialRadiusOffset" in dd,
              get: dd => dd.inertialRadiusOffset
            },
            metadata: Rd
          }, null, Zd), (0, Wd.h)(dd, null, Ld, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningInertia" in dd,
              get: dd => dd.panningInertia
            },
            metadata: Rd
          }, null, Zd), (0, Wd.h)(dd, null, cd, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: dd => "zoomToMouseLocation" in dd,
              get: dd => dd.zoomToMouseLocation
            },
            metadata: Rd
          }, null, Zd), (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "alpha" in dd,
              get: dd => dd.alpha,
              set: (dd, Od) => {
                dd.alpha = Od
              }
            },
            metadata: Rd
          }, kd, fd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: dd => "beta" in dd,
              get: dd => dd.beta,
              set: (dd, Od) => {
                dd.beta = Od
              }
            },
            metadata: Rd
          }, Md, dO), (0, Wd.h)(null, null, hd, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: dd => "radius" in dd,
              get: dd => dd.radius,
              set: (dd, Od) => {
                dd.radius = Od
              }
            },
            metadata: Rd
          }, OO, mO), (0, Wd.h)(null, null, Qd, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: dd => "overrideCloneAlphaBetaRadius" in dd,
              get: dd => dd.overrideCloneAlphaBetaRadius,
              set: (dd, Od) => {
                dd.overrideCloneAlphaBetaRadius = Od
              }
            },
            metadata: Rd
          }, WO, FO), (0, Wd.h)(null, null, td, {
            kind: "field",
            name: "Jt",
            static: !1,
            private: !1,
            access: {
              has: dd => "Jt" in dd,
              get: dd => dd.Jt,
              set: (dd, Od) => {
                dd.Jt = Od
              }
            },
            metadata: Rd
          }, RO, XO), (0, Wd.h)(null, null, qd, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: dd => "_targetHost" in dd,
              get: dd => dd._targetHost,
              set: (dd, Od) => {
                dd._targetHost = Od
              }
            },
            metadata: Rd
          }, KO, hO), (0, Wd.h)(null, null, Ed, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerAlphaLimit" in dd,
              get: dd => dd.lowerAlphaLimit,
              set: (dd, Od) => {
                dd.lowerAlphaLimit = Od
              }
            },
            metadata: Rd
          }, vO, QO), (0, Wd.h)(null, null, Jd, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperAlphaLimit" in dd,
              get: dd => dd.upperAlphaLimit,
              set: (dd, Od) => {
                dd.upperAlphaLimit = Od
              }
            },
            metadata: Rd
          }, tO, oO), (0, Wd.h)(null, null, Ud, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerBetaLimit" in dd,
              get: dd => dd.lowerBetaLimit,
              set: (dd, Od) => {
                dd.lowerBetaLimit = Od
              }
            },
            metadata: Rd
          }, NO, qO), (0, Wd.h)(null, null, xd, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperBetaLimit" in dd,
              get: dd => dd.upperBetaLimit,
              set: (dd, Od) => {
                dd.upperBetaLimit = Od
              }
            },
            metadata: Rd
          }, HO, yO), (0, Wd.h)(null, null, Bd, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerRadiusLimit" in dd,
              get: dd => dd.lowerRadiusLimit,
              set: (dd, Od) => {
                dd.lowerRadiusLimit = Od
              }
            },
            metadata: Rd
          }, bO, TO), (0, Wd.h)(null, null, Sd, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "upperRadiusLimit" in dd,
              get: dd => dd.upperRadiusLimit,
              set: (dd, Od) => {
                dd.upperRadiusLimit = Od
              }
            },
            metadata: Rd
          }, pO, YO), (0, Wd.h)(null, null, sd, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "lowerTargetYLimit" in dd,
              get: dd => dd.lowerTargetYLimit,
              set: (dd, Od) => {
                dd.lowerTargetYLimit = Od
              }
            },
            metadata: Rd
          }, gO, wO), (0, Wd.h)(null, null, ud, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialPanningX" in dd,
              get: dd => dd.inertialPanningX,
              set: (dd, Od) => {
                dd.inertialPanningX = Od
              }
            },
            metadata: Rd
          }, aO, EO), (0, Wd.h)(null, null, Vd, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: dd => "inertialPanningY" in dd,
              get: dd => dd.inertialPanningY,
              set: (dd, Od) => {
                dd.inertialPanningY = Od
              }
            },
            metadata: Rd
          }, JO, UO), (0, Wd.h)(null, null, Ad, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: dd => "pinchToPanMaxDistance" in dd,
              get: dd => dd.pinchToPanMaxDistance,
              set: (dd, Od) => {
                dd.pinchToPanMaxDistance = Od
              }
            },
            metadata: Rd
          }, xO, BO), (0, Wd.h)(null, null, Gd, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningDistanceLimit" in dd,
              get: dd => dd.panningDistanceLimit,
              set: (dd, Od) => {
                dd.panningDistanceLimit = Od
              }
            },
            metadata: Rd
          }, SO, sO), (0, Wd.h)(null, null, nd, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: dd => "panningOriginTarget" in dd,
              get: dd => dd.panningOriginTarget,
              set: (dd, Od) => {
                dd.panningOriginTarget = Od
              }
            },
            metadata: Rd
          }, uO, VO), (0, Wd.h)(null, null, jd, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: dd => "zoomOnFactor" in dd,
              get: dd => dd.zoomOnFactor,
              set: (dd, Od) => {
                dd.zoomOnFactor = Od
              }
            },
            metadata: Rd
          }, iO, AO), (0, Wd.h)(null, null, Dd, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: dd => "targetScreenOffset" in dd,
              get: dd => dd.targetScreenOffset,
              set: (dd, Od) => {
                dd.targetScreenOffset = Od
              }
            },
            metadata: Rd
          }, rO, GO), (0, Wd.h)(null, null, ed, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: dd => "allowUpsideDown" in dd,
              get: dd => dd.allowUpsideDown,
              set: (dd, Od) => {
                dd.allowUpsideDown = Od
              }
            },
            metadata: Rd
          }, nO, LO), (0, Wd.h)(null, null, Id, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: dd => "useInputToRestoreState" in dd,
              get: dd => dd.useInputToRestoreState,
              set: (dd, Od) => {
                dd.useInputToRestoreState = Od
              }
            },
            metadata: Rd
          }, PO, zO), (0, Wd.h)(null, null, ld, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: dd => "restoreStateInterpolationFactor" in dd,
              get: dd => dd.restoreStateInterpolationFactor,
              set: (dd, Od) => {
                dd.restoreStateInterpolationFactor = Od
              }
            },
            metadata: Rd
          }, cO, jO), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      jd = !1;
    jd || (jd = !0, hd.b.AddNodeConstructor("ArcRotateCamera", ((dd, Od) => () => new cd(dd, 0, 0, 1, Xd.j.Zero(), Od))), (0, Gd.e)("BABYLON.ArcRotateCamera", cd))
  },
  42162: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd.e
    });
    var Wd = md(42168);
    (0, Wd.f)()
  },
  42168: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      f: () => od
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(38741),
      Kd = md(42172),
      hd = md(42132),
      vd = md(38669);
    let Qd = (() => {
        var dd;
        let Od, md, hd = Kd.c,
          vd = [],
          Qd = [],
          td = [],
          od = [];
        return dd = class extends hd {
          constructor(dd, Od, md, Fd) {
            super(dd, md, Fd), this.groundColor = (0, Wd.k)(this, vd, new Xd.d(0, 0, 0)), this.direction = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, td, void 0)), (0, Wd.k)(this, od), this.direction = Od || Rd.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Rd.j.Normalize(dd.subtract(Rd.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", md.x, md.y, md.z, 0, Od), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Od), this
          }
          transferToNodeMaterialEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return dd.setFloat3(Od, md.x, md.y, md.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Rd.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Kd.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Od) {
            dd["HEMILIGHT" + Od] = !0
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(hd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.m)()], md = [(0, Fd.B)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Od) => {
                dd.groundColor = Od
              }
            },
            metadata: Rd
          }, vd, Qd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Od) => {
                dd.direction = Od
              }
            },
            metadata: Rd
          }, td, od), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      td = !1;

    function od() {
      td || (td = !0, hd.b.AddNodeConstructor("Light_Type_3", ((dd, Od) => () => new Qd(dd, Rd.j.Zero(), Od))), (0, vd.e)("BABYLON.HemisphericLight", Qd))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
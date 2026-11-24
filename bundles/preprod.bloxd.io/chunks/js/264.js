export const id = 264;
export const ids = [264];
export const modules = {
  41300: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => hp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37349),
      Sp = cp(37320),
      xp = cp(37356),
      Lp = cp(40415),
      Yp = cp(40577),
      Dp = cp(40372),
      Ap = cp(40122),
      Pp = cp(37324);
    class Wp {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(pp) {
        this._zoomStopsAnimation = pp
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(pp) {
        this._idleRotationSpeed = pp
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(pp) {
        this._idleRotationWaitTime = pp
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(pp) {
        this._idleRotationSpinupTime = pp
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
      attach(pp) {
        this._attachedCamera = pp;
        const ip = this._attachedCamera.Gl();
        this._onPrePointerObservableObserver = ip.onPrePointerObservable.add((pp => {
          pp.type !== Dp.d.POINTERDOWN ? pp.type === Dp.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const pp = Ap.e.Now;
          let ip = 0;
          null != this._lastFrameTime && (ip = pp - this._lastFrameTime), this._lastFrameTime = pp, this._applyUserInteraction();
          const cp = pp - this._lastInteractionTime - this._idleRotationWaitTime,
            Op = Math.max(Math.min(cp / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Op, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ip / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const pp = this._attachedCamera.Gl();
        this._onPrePointerObservableObserver && pp.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(pp) {
        this._lastInteractionTime = pp ?? Ap.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Pp.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let pp = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (pp = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? pp : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Ap.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    cp(41309);
    class yp {
      constructor() {
        this._easingMode = yp.EASINGMODE_EASEIN
      }
      setEasingMode(pp) {
        const ip = Math.min(Math.max(pp, 0), 2);
        this._easingMode = ip
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(pp) {
        throw new Error("You must implement this method")
      }
      ease(pp) {
        switch (this._easingMode) {
          case yp.EASINGMODE_EASEIN:
            return this.easeInCore(pp);
          case yp.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - pp)
        }
        return pp >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - pp))) + .5 : .5 * this.easeInCore(2 * pp)
      }
    }
    yp.EASINGMODE_EASEIN = 0, yp.EASINGMODE_EASEOUT = 1, yp.EASINGMODE_EASEINOUT = 2;
    var Up = cp(41315);
    class wp {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(pp) {
        if (this._autoTransitionRange === pp) return;
        this._autoTransitionRange = pp;
        const ip = this._attachedCamera;
        ip && (pp ? this._onMeshTargetChangedObserver = ip.onMeshTargetChangedObservable.add((pp => {
          if (pp && (pp.computeWorldMatrix(!0), pp.bJ)) {
            const ip = pp.bJ().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * ip, this.upperRadiusTransitionRange = .05 * ip
          }
        })) : this._onMeshTargetChangedObserver && ip.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(pp) {
        this._attachedCamera = pp, this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(pp) {
        return !!this._attachedCamera && (this._attachedCamera.radius === pp && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(pp) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (wp.EasingFunction.setEasingMode(wp.EasingMode), this._radiusBounceTransition = Up.e.CreateAnimation("radius", Up.e.ANIMATIONTYPE_FLOAT, 60, wp.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const ip = Up.e.TransitionTo("radius", this._attachedCamera.radius + pp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        ip && this._animatables.push(ip)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    wp.EasingFunction = new class extends yp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = pp
      }
      easeInCore(pp) {
        const ip = Math.max(0, this.amplitude);
        return Math.pow(pp, 3) - pp * ip * Math.sin(3.141592653589793 * pp)
      }
    }(.3), wp.EasingMode = yp.EASINGMODE_EASEOUT;
    class vp {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Ip.d, this._mode = vp.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(pp) {
        this._mode = pp
      }
      get mode() {
        return this._mode
      }
      set radiusScale(pp) {
        this._radiusScale = pp
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(pp) {
        this._positionScale = pp
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(pp) {
        this._defaultElevation = pp
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(pp) {
        this._elevationReturnTime = pp
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(pp) {
        this._elevationReturnWaitTime = pp
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(pp) {
        this._zoomStopsAnimation = pp
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(pp) {
        this._framingTime = pp
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(pp) {
        this._attachedCamera = pp;
        const ip = this._attachedCamera.Gl();
        vp.EasingFunction.setEasingMode(vp.EasingMode), this._onPrePointerObservableObserver = ip.onPrePointerObservable.add((pp => {
          pp.type !== Dp.d.POINTERDOWN ? pp.type === Dp.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = pp.onMeshTargetChangedObservable.add((pp => {
          pp && pp.bJ && this.zoomOnMesh(pp, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const pp = this._attachedCamera.Gl();
        this._onPrePointerObservableObserver && pp.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        pp.computeWorldMatrix(!0);
        const Op = pp.bJ().boundingBox;
        this.zoomOnBoundingInfo(Op.minimumWorld, Op.maximumWorld, ip, cp)
      }
      zoomOnMeshHierarchy(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        pp.computeWorldMatrix(!0);
        const Op = pp.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Op.min, Op.max, ip, cp)
      }
      zoomOnMeshesHierarchy(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Op = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          op = new Sp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Ip = 0; Ip < pp.length; Ip++) {
          const ip = pp[Ip].getHierarchyBoundingVectors(!0);
          Sp.o.CheckExtends(ip.min, Op, op), Sp.o.CheckExtends(ip.max, Op, op)
        }
        this.zoomOnBoundingInfo(Op, op, ip, cp)
      }
      zoomOnBoundingInfo(pp, ip) {
        let cp, Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Ip = pp.y,
          xp = Ip + (ip.y - Ip) * this._positionScale,
          Lp = ip.subtract(pp).scale(.5);
        if (!isFinite(xp)) return !1;
        if (Op) cp = new Sp.o(0, xp, 0);
        else {
          const ip = pp.add(Lp);
          cp = new Sp.o(ip.x, xp, ip.z)
        }
        this._vectorTransition || (this._vectorTransition = Up.e.CreateAnimation("target", Up.e.ANIMATIONTYPE_VECTOR3, 60, vp.EasingFunction)), this._betaIsAnimating = !0;
        let Yp = Up.e.TransitionTo("target", cp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._vectorTransition, this._framingTime);
        Yp && this._animatables.push(Yp);
        let Dp = 0;
        if (this._mode === vp.FitFrustumSidesMode) {
          const cp = this._calculateLowerRadiusFromModelBoundingSphere(pp, ip);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Lp.length() + this._attachedCamera.minZ), Dp = cp
        } else this._mode === vp.IgnoreBoundsSizeMode && (Dp = this._calculateLowerRadiusFromModelBoundingSphere(pp, ip), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const cp = ip.subtract(pp).length();
          this._attachedCamera.panningSensibility = 5e3 / cp, this._attachedCamera.wheelPrecision = 100 / Dp
        }
        return this._radiusTransition || (this._radiusTransition = Up.e.CreateAnimation("radius", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction)), Yp = Up.e.TransitionTo("radius", Dp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), op && op(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Yp && this._animatables.push(Yp), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(pp, ip) {
        const cp = this._attachedCamera;
        if (!cp) return 0;
        let Op = cp._calculateLowerRadiusFromModelBoundingSphere(pp, ip, this._radiusScale);
        return cp.lowerRadiusLimit && this._mode === vp.IgnoreBoundsSizeMode && (Op = Op < cp.lowerRadiusLimit ? cp.lowerRadiusLimit : Op), cp.upperRadiusLimit && (Op = Op > cp.upperRadiusLimit ? cp.upperRadiusLimit : Op), Op
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const pp = Ap.e.Now - this._lastInteractionTime,
          ip = .5 * Math.PI - this._defaultElevation,
          cp = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cp && pp >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Up.e.CreateAnimation("beta", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction));
          const pp = Up.e.TransitionTo("beta", ip, this._attachedCamera, this._attachedCamera.Gl(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          pp && this._animatables.push(pp)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Ap.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    vp.EasingFunction = new class extends yp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = pp
      }
      easeInCore(pp) {
        return this.exponent <= 0 ? pp : (Math.exp(this.exponent * pp) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, vp.EasingMode = yp.EASINGMODE_EASEINOUT, vp.IgnoreBoundsSizeMode = 0, vp.FitFrustumSidesMode = 1;
    var tp = cp(40411),
      Hp = cp(40409),
      dp = cp(40435),
      ep = cp(40304);
    let jp = (() => {
        var pp;
        let ip, cp = [],
          Ip = [];
        return pp = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Op.l)(this, cp, [0, 1, 2]), this._pointerInput = (0, Op.l)(this, Ip)
          }
          attachControl(pp) {
            pp = ep.i.BackCompatCameraNoPreventDefault(arguments);
            const ip = this.camera.gy(),
              cp = ip.getInputElement();
            let Op = 0,
              op = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Ip => {
              const Sp = Ip.event,
                xp = "touch" === Sp.pointerType;
              if (Ip.type !== Dp.d.POINTERMOVE && -1 === this.buttons.indexOf(Sp.button)) return;
              const Lp = Sp.target;
              if (this._altKey = Sp.altKey, this._ctrlKey = Sp.ctrlKey, this._metaKey = Sp.metaKey, this._shiftKey = Sp.shiftKey, this._buttonsPressed = Sp.buttons, ip.isPointerLock) {
                const pp = Sp.movementX,
                  ip = Sp.movementY;
                this.onTouch(null, pp, ip), this._pointA = null, this._pointB = null
              } else {
                if (Ip.type !== Dp.d.POINTERDOWN && Ip.type !== Dp.d.POINTERDOUBLETAP && xp && this._pointA?.pointerId !== Sp.pointerId && this._pointB?.pointerId !== Sp.pointerId) return;
                if (Ip.type !== Dp.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !xp)
                  if (Ip.type === Dp.d.POINTERDOUBLETAP) this.onDoubleTap(Sp.pointerType, Sp);
                  else if (Ip.type !== Dp.d.POINTERUP || this._currentMousePointerIdDown !== Sp.pointerId && !xp) {
                  if (Ip.type === Dp.d.POINTERMOVE)
                    if (pp || Sp.preventDefault(), this._pointA && null === this._pointB) {
                      const pp = Sp.clientX - this._pointA.x,
                        ip = Sp.clientY - this._pointA.y;
                      this._pointA.x = Sp.clientX, this._pointA.y = Sp.clientY, this.onTouch(this._pointA, pp, ip)
                    } else if (this._pointA && this._pointB) {
                    const pp = this._pointA.pointerId === Sp.pointerId ? this._pointA : this._pointB;
                    pp.x = Sp.clientX, pp.y = Sp.clientY;
                    const ip = this._pointA.x - this._pointB.x,
                      cp = this._pointA.y - this._pointB.y,
                      xp = ip * ip + cp * cp,
                      Lp = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Sp.pointerId,
                        type: Ip.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Op, xp, op, Lp), op = Lp, Op = xp
                  }
                } else {
                  try {
                    Lp?.releasePointerCapture(Sp.pointerId)
                  } catch (Yp) {}
                  xp || (this._pointB = null), ip._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Sp.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Sp.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Op || op) && (this.onMultiTouch(this._pointA, this._pointB, Op, 0, op, null), Op = 0, op = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Sp), pp || Sp.preventDefault()
                } else {
                  try {
                    Lp?.setPointerCapture(Sp.pointerId)
                  } catch (Yp) {}
                  if (null === this._pointA) this._pointA = {
                    x: Sp.clientX,
                    y: Sp.clientY,
                    pointerId: Sp.pointerId,
                    type: Sp.pointerType,
                    button: Sp.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Sp.clientX,
                      y: Sp.clientY,
                      pointerId: Sp.pointerId,
                      type: Sp.pointerType,
                      button: Sp.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || xp || (this._currentMousePointerIdDown = Sp.pointerId), this.onButtonDown(Sp), pp || (Sp.preventDefault(), cp && cp.focus())
                }
              }
            }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Dp.d.POINTERDOWN | Dp.d.POINTERUP | Dp.d.POINTERMOVE | Dp.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Op = 0, op = null, this.onLostFocus()
            }, this._contextMenuBind = pp => this.onContextMenu(pp), cp && cp.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Ip = this.camera.Gl().gy().getHostWindow();
            Ip && ep.i.RegisterTopRootEvents(Ip, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const pp = this.camera.Gl().gy().getHostWindow();
              pp && ep.i.UnregisterTopRootEvents(pp, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const pp = this.camera.Gl().gy().getInputElement();
                pp && pp.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(pp, ip) {}
          onTouch(pp, ip, cp) {}
          onMultiTouch(pp, ip, cp, Op, op, Ip) {}
          onContextMenu(pp) {
            pp.preventDefault()
          }
          onButtonDown(pp) {}
          onButtonUp(pp) {}
          onLostFocus() {}
        }, (() => {
          const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: pp => "buttons" in pp,
              get: pp => pp.buttons,
              set: (pp, ip) => {
                pp.buttons = ip
              }
            },
            metadata: Sp
          }, cp, Ip), Sp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sp
          })
        })(), pp
      })(),
      kp = (() => {
        var pp;
        let ip, cp, Ip, Sp = jp,
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        return pp = class extends Sp {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Op.l)(this, xp, !0), this.multiTouchPanning = ((0, Op.l)(this, Lp), (0, Op.l)(this, Yp, !0)), this.multiTouchPanAndZoom = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, !0)), this._isPinching = ((0, Op.l)(this, Pp), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(pp, ip) {}
          _computeMultiTouchPanning(pp, ip) {}
          onMultiTouch(pp, ip, cp, Op, op, Ip) {
            0 === cp && null === op || 0 === Op && null === Ip || (this.multiTouchPanAndZoom ? (this._computePinchZoom(cp, Op), this._computeMultiTouchPanning(op, Ip)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(cp, Op), this._isPinching = !0) : this._computeMultiTouchPanning(op, Ip)) : this.multiTouchPanning ? this._computeMultiTouchPanning(op, Ip) : this.pinchZoom && this._computePinchZoom(cp, Op))
          }
          onButtonUp(pp) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: pp => "pinchZoom" in pp,
              get: pp => pp.pinchZoom,
              set: (pp, ip) => {
                pp.pinchZoom = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: pp => "multiTouchPanning" in pp,
              get: pp => pp.multiTouchPanning,
              set: (pp, ip) => {
                pp.multiTouchPanning = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Op.j)(null, null, Ip, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: pp => "multiTouchPanAndZoom" in pp,
              get: pp => pp.multiTouchPanAndZoom,
              set: (pp, ip) => {
                pp.multiTouchPanAndZoom = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), Wp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          })
        })(), pp
      })(),
      mp = (() => {
        var pp;
        let ip, cp, Ip, Sp, xp, Lp, Yp, Dp = kp,
          Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [],
          vp = [],
          tp = [],
          Hp = [],
          dp = [],
          ep = [],
          jp = [],
          mp = [],
          Rp = [];
        return pp = class extends Dp {
          constructor() {
            super(...arguments), this.buttons = (0, Op.l)(this, Ap, [0, 1, 2]), this.angularSensibilityX = ((0, Op.l)(this, Pp), (0, Op.l)(this, Wp, 1e3)), this.angularSensibilityY = ((0, Op.l)(this, yp), (0, Op.l)(this, Up, 1e3)), this.pinchPrecision = ((0, Op.l)(this, wp), (0, Op.l)(this, vp, 12)), this.pinchDeltaPercentage = ((0, Op.l)(this, tp), (0, Op.l)(this, Hp, 0)), this.useNaturalPinchZoom = ((0, Op.l)(this, dp), (0, Op.l)(this, ep, !1)), this.panningSensibility = ((0, Op.l)(this, jp), (0, Op.l)(this, mp, 1e3)), this.pinchInwards = ((0, Op.l)(this, Rp), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(pp, ip) {
            if (pp && ip) {
              const cp = ip.x - pp.x,
                Op = ip.y - pp.y,
                op = this.camera.movement.input.getEntry("pointer", "pan"),
                Ip = op?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Ip && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -cp * Ip, this.camera.movement.panAccumulatedPixels.y += Op * Ip)
            }
          }
          _computePinchZoom(ip, cp) {
            const Op = this.camera.radius || pp.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Op * Math.sqrt(ip) / Math.sqrt(cp);
            else if (this.pinchDeltaPercentage) {
              const pp = .001 * (cp - ip) * Op * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += pp
            } else {
              const pp = (cp - ip) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += pp
            }
          }
          onTouch(pp, ip, cp) {
            const Op = this._activeEntry ?? (this.camera.gy().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Op)
              if ("pan" === Op.interaction) {
                const pp = Op.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== pp && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ip * pp, this.camera.movement.panAccumulatedPixels.y += cp * pp)
              } else if ("rotate" === Op.interaction) {
              const pp = Op.sG ?? Op.sensitivity ?? 1 / this.angularSensibilityX,
                op = Op.Hr ?? Op.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -ip * pp, this.camera.movement.rotationAccumulatedPixels.y += -cp * op
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(pp, ip, cp, Op, op, Ip) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Op) - Math.sqrt(cp)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(pp, ip, cp, Op, op, Ip)
          }
          onButtonDown(pp) {
            this._pointerConditions.button = pp.button, this._pointerModifiers.ctrl = pp.ctrlKey, this._pointerModifiers.alt = pp.altKey, this._pointerModifiers.shift = pp.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(pp)
          }
          onButtonUp(pp) {
            this._activeEntry = null, super.onButtonUp(pp)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const kp = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: pp => "buttons" in pp,
              get: pp => pp.buttons,
              set: (pp, ip) => {
                pp.buttons = ip
              }
            },
            metadata: kp
          }, Ap, Pp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: pp => "angularSensibilityX" in pp,
              get: pp => pp.angularSensibilityX,
              set: (pp, ip) => {
                pp.angularSensibilityX = ip
              }
            },
            metadata: kp
          }, Wp, yp), (0, Op.j)(null, null, Ip, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: pp => "angularSensibilityY" in pp,
              get: pp => pp.angularSensibilityY,
              set: (pp, ip) => {
                pp.angularSensibilityY = ip
              }
            },
            metadata: kp
          }, Up, wp), (0, Op.j)(null, null, Sp, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: pp => "pinchPrecision" in pp,
              get: pp => pp.pinchPrecision,
              set: (pp, ip) => {
                pp.pinchPrecision = ip
              }
            },
            metadata: kp
          }, vp, tp), (0, Op.j)(null, null, xp, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: pp => "pinchDeltaPercentage" in pp,
              get: pp => pp.pinchDeltaPercentage,
              set: (pp, ip) => {
                pp.pinchDeltaPercentage = ip
              }
            },
            metadata: kp
          }, Hp, dp), (0, Op.j)(null, null, Lp, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: pp => "useNaturalPinchZoom" in pp,
              get: pp => pp.useNaturalPinchZoom,
              set: (pp, ip) => {
                pp.useNaturalPinchZoom = ip
              }
            },
            metadata: kp
          }, ep, jp), (0, Op.j)(null, null, Yp, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: pp => "panningSensibility" in pp,
              get: pp => pp.panningSensibility,
              set: (pp, ip) => {
                pp.panningSensibility = ip
              }
            },
            metadata: kp
          }, mp, Rp), kp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kp
          })
        })(), pp.MinimumRadiusForPinch = .001, pp
      })();
    dp.e.ArcRotateCameraPointersInput = mp;
    var Rp = cp(40380);
    let qp = (() => {
      var pp;
      let ip, cp, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up = [],
        wp = [],
        vp = [],
        tp = [],
        Hp = [],
        dp = [],
        jp = [],
        kp = [],
        mp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [];
      return pp = class {
        constructor() {
          this.camera = (0, Op.l)(this, Up), this.keysUp = (0, Op.l)(this, wp, [38]), this.keysDown = ((0, Op.l)(this, vp), (0, Op.l)(this, tp, [40])), this.keysLeft = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, [37])), this.keysRight = ((0, Op.l)(this, jp), (0, Op.l)(this, kp, [39])), this.keysReset = ((0, Op.l)(this, mp), (0, Op.l)(this, qp, [220])), this.keysZoomIn = ((0, Op.l)(this, Mp), (0, Op.l)(this, Cp, [187, 107])), this.keysZoomOut = ((0, Op.l)(this, Ep), (0, Op.l)(this, Xp, [189, 109])), this.panningSensibility = ((0, Op.l)(this, lp), (0, Op.l)(this, Qp, 50)), this.zoomingSensibility = ((0, Op.l)(this, Jp), (0, Op.l)(this, Bp, 25)), this.angularSpeed = ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, .01)), this._useAltToZoom = ((0, Op.l)(this, fp), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Sp.l, this._panDirection = new Sp.l
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(pp) {
          this._useAltToZoom = pp, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const pp = this.camera.movement.input,
            ip = pp.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && ip ? pp.inputMap.splice(pp.inputMap.indexOf(ip), 1) : this._useAltToZoom && !ip && pp.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(pp) {
          pp = ep.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Gl(), this._engine = this._scene.gy(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ip => {
            const cp = ip.event;
            if (!cp.metaKey)
              if (ip.type === Rp.d.KEYDOWN) {
                if (this._ctrlPressed = cp.ctrlKey, this._altPressed = cp.altKey, -1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysReset.indexOf(cp.keyCode) || -1 !== this.keysZoomIn.indexOf(cp.keyCode) || -1 !== this.keysZoomOut.indexOf(cp.keyCode)) {
                  -1 === this._keys.indexOf(cp.keyCode) && this._keys.push(cp.keyCode), cp.preventDefault && (pp || cp.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysReset.indexOf(cp.keyCode) || -1 !== this.keysZoomIn.indexOf(cp.keyCode) || -1 !== this.keysZoomOut.indexOf(cp.keyCode)) {
              const ip = this._keys.indexOf(cp.keyCode);
              ip >= 0 && this._keys.splice(ip, 1), cp.preventDefault && (pp || cp.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const pp = this.camera,
              ip = pp.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const cp = this._rotateDirection.set(0, 0),
              Op = this._panDirection.set(0, 0);
            let op = 0,
              Ip = 0;
            for (let Sp = 0; Sp < this._keys.length; Sp++) {
              const xp = this._keys[Sp];
              if (this._keyboardConditions.key = xp, -1 === this.keysReset.indexOf(xp)) {
                const pp = ip.resolveInteraction("keyboard", this._keyboardConditions);
                if (pp)
                  if ("pan" === pp.interaction) Ip = Math.max(Ip, pp.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(xp) ? Op.x -= 1 : -1 !== this.keysRight.indexOf(xp) ? Op.x += 1 : -1 !== this.keysUp.indexOf(xp) ? Op.y += 1 : -1 !== this.keysDown.indexOf(xp) && (Op.y -= 1);
                  else if ("zoom" === pp.interaction) {
                  const cp = pp.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(xp) || -1 !== this.keysZoomIn.indexOf(xp) ? ip.handlers.zoom(cp) : -1 === this.keysDown.indexOf(xp) && -1 === this.keysZoomOut.indexOf(xp) || ip.handlers.zoom(-cp)
                } else "rotate" === pp.interaction && (op = Math.max(op, pp.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(xp) ? cp.x -= 1 : -1 !== this.keysRight.indexOf(xp) ? cp.x += 1 : -1 !== this.keysUp.indexOf(xp) ? cp.y -= 1 : -1 !== this.keysDown.indexOf(xp) && (cp.y += 1))
              } - 1 !== this.keysReset.indexOf(xp) && pp.useInputToRestoreState && pp.restoreState()
            }
            0 === cp.x && 0 === cp.y || (cp.normalize().scaleInPlace(op), ip.handlers.rotate(cp.x, cp.y)), 0 === Op.x && 0 === Op.y || (Op.normalize().scaleInPlace(Ip), ip.handlers.pan(Op.x, Op.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], (0, Op.j)(pp, null, yp, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAltToZoom" in pp,
            get: pp => pp.useAltToZoom
          },
          metadata: Sp
        }, null, Up), (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysUp" in pp,
            get: pp => pp.keysUp,
            set: (pp, ip) => {
              pp.keysUp = ip
            }
          },
          metadata: Sp
        }, wp, vp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysDown" in pp,
            get: pp => pp.keysDown,
            set: (pp, ip) => {
              pp.keysDown = ip
            }
          },
          metadata: Sp
        }, tp, Hp), (0, Op.j)(null, null, Ip, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysLeft" in pp,
            get: pp => pp.keysLeft,
            set: (pp, ip) => {
              pp.keysLeft = ip
            }
          },
          metadata: Sp
        }, dp, jp), (0, Op.j)(null, null, xp, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysRight" in pp,
            get: pp => pp.keysRight,
            set: (pp, ip) => {
              pp.keysRight = ip
            }
          },
          metadata: Sp
        }, kp, mp), (0, Op.j)(null, null, Lp, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysReset" in pp,
            get: pp => pp.keysReset,
            set: (pp, ip) => {
              pp.keysReset = ip
            }
          },
          metadata: Sp
        }, qp, Mp), (0, Op.j)(null, null, Yp, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysZoomIn" in pp,
            get: pp => pp.keysZoomIn,
            set: (pp, ip) => {
              pp.keysZoomIn = ip
            }
          },
          metadata: Sp
        }, Cp, Ep), (0, Op.j)(null, null, Dp, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: pp => "keysZoomOut" in pp,
            get: pp => pp.keysZoomOut,
            set: (pp, ip) => {
              pp.keysZoomOut = ip
            }
          },
          metadata: Sp
        }, Xp, lp), (0, Op.j)(null, null, Ap, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: pp => "panningSensibility" in pp,
            get: pp => pp.panningSensibility,
            set: (pp, ip) => {
              pp.panningSensibility = ip
            }
          },
          metadata: Sp
        }, Qp, Jp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: pp => "zoomingSensibility" in pp,
            get: pp => pp.zoomingSensibility,
            set: (pp, ip) => {
              pp.zoomingSensibility = ip
            }
          },
          metadata: Sp
        }, Bp, Np), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: pp => "angularSpeed" in pp,
            get: pp => pp.angularSpeed,
            set: (pp, ip) => {
              pp.angularSpeed = ip
            }
          },
          metadata: Sp
        }, Tp, fp), Sp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sp
        })
      })(), pp
    })();
    dp.e.ArcRotateCameraKeyboardMoveInput = qp;
    var Mp = cp(37989),
      Cp = cp(40388);
    let Ep = (() => {
      var pp;
      let ip, cp, Ip, Lp = [],
        Yp = [],
        Ap = [],
        Wp = [],
        yp = [],
        Up = [];
      return pp = class {
        constructor() {
          this.wheelPrecision = (0, Op.l)(this, Lp, 3), this.zoomToMouseLocation = ((0, Op.l)(this, Yp), (0, Op.l)(this, Ap, !1)), this.wheelDeltaPercentage = ((0, Op.l)(this, Wp), (0, Op.l)(this, yp, 0)), this.customComputeDeltaFromMouseWheel = ((0, Op.l)(this, Up), null), this._viewOffset = new Sp.o(0, 0, 0), this._globalOffset = new Sp.o(0, 0, 0), this._inertialPanning = Sp.o.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(pp, ip) {
          let cp;
          const Op = .01 * pp * this.wheelDeltaPercentage * ip;
          return cp = pp > 0 ? Op / (1 + this.wheelDeltaPercentage) : Op * (1 + this.wheelDeltaPercentage), cp
        }
        attachControl(pp) {
          pp = ep.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ip => {
            if (ip.type !== Dp.d.POINTERWHEEL) return;
            const cp = ip.event;
            let Op;
            const op = cp.deltaMode === Cp.c.DOM_DELTA_LINE ? 40 : 1,
              Ip = -cp.deltaY * op;
            if (this.customComputeDeltaFromMouseWheel) Op = this.customComputeDeltaFromMouseWheel(Ip, this, cp);
            else if (this.wheelDeltaPercentage) {
              if (Op = this._computeDeltaFromMouseWheelLegacyEvent(Ip, this.camera.radius), Op > 0) {
                const pp = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let ip = this.camera.radius,
                  cp = pp + Op;
                for (let Op = 0; Op < 20 && !(ip <= cp) && !(Math.abs(cp * this.camera.inertia) < .001); Op++) ip -= cp, cp *= this.camera.inertia;
                ip = (0, xp.Clamp)(ip, 0, Number.MAX_VALUE), Op = this._computeDeltaFromMouseWheelLegacyEvent(Ip, ip)
              }
            } else {
              const pp = this.camera.movement.input.getEntry("wheel", "zoom");
              Op = Ip * (pp?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Op && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Op)) : this.camera.movement.zoomAccumulatedPixels += Op), cp.preventDefault && (pp || cp.preventDefault())
          }, this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._wheel, Dp.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.E_(0)
        }
        detachControl() {
          this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const pp = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(pp.inertialAlphaOffset) + Math.abs(pp.inertialBetaOffset) + Math.abs(pp.inertialRadiusOffset)) {
            this._updateHitPlane(), pp.target.addInPlace(this._inertialPanning), pp.radius -= this._zoomToMouseRadiusOffset;
            const ip = pp.movement.getFrameIndependentDecay(pp.inertia);
            this._inertialPanning.scaleInPlace(ip), this._zoomToMouseRadiusOffset *= ip, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Pp.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const pp = this.camera,
            ip = pp.target.subtract(pp.position);
          this._hitPlane = Mp.e.FromPositionAndNormal(pp.target, ip)
        }
        _getPosition() {
          const pp = this.camera,
            ip = pp.Gl(),
            cp = ip.createPickingRay(ip.pointerX, ip.pointerY, Sp.b.Identity(), pp, !1);
          0 === pp.targetScreenOffset.x && 0 === pp.targetScreenOffset.y || (this._viewOffset.set(pp.targetScreenOffset.x, pp.targetScreenOffset.y, 0), pp.getViewMatrix().invertToRef(pp._cameraTransformMatrix), this._globalOffset = Sp.o.TransformNormal(this._viewOffset, pp._cameraTransformMatrix), cp.origin.addInPlace(this._globalOffset));
          let Op = 0;
          return this._hitPlane && (Op = cp.intersectsPlane(this._hitPlane) ?? 0), cp.origin.addInPlace(cp.direction.scaleInPlace(Op))
        }
        _zoomToMouse(pp) {
          const ip = this.camera,
            cp = 1 - ip.inertia,
            Op = ip.movement.getFrameIndependentInputScale(ip.inertia);
          if (ip.lowerRadiusLimit) {
            const op = ip.lowerRadiusLimit ?? 0;
            ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp < op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
          }
          if (ip.upperRadiusLimit) {
            const op = ip.upperRadiusLimit ?? 0;
            ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp > op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
          }
          const op = pp / cp / ip.radius,
            Ip = this._getPosition(),
            xp = Sp.i.Zy[6];
          Ip.subtractToRef(ip.target, xp), xp.scaleInPlace(op), xp.scaleInPlace(cp), xp.scaleInPlace(Op), this._inertialPanning.addInPlace(xp), this._zoomToMouseRadiusOffset += pp * Op
        }
        _zeroIfClose(pp) {
          Math.abs(pp.x) < Pp.b && (pp.x = 0), Math.abs(pp.y) < Pp.b && (pp.y = 0), Math.abs(pp.z) < Pp.b && (pp.z = 0)
        }
      }, (() => {
        const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelPrecision" in pp,
            get: pp => pp.wheelPrecision,
            set: (pp, ip) => {
              pp.wheelPrecision = ip
            }
          },
          metadata: Sp
        }, Lp, Yp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: pp => "zoomToMouseLocation" in pp,
            get: pp => pp.zoomToMouseLocation,
            set: (pp, ip) => {
              pp.zoomToMouseLocation = ip
            }
          },
          metadata: Sp
        }, Ap, Wp), (0, Op.j)(null, null, Ip, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: pp => "wheelDeltaPercentage" in pp,
            get: pp => pp.wheelDeltaPercentage,
            set: (pp, ip) => {
              pp.wheelDeltaPercentage = ip
            }
          },
          metadata: Sp
        }, yp, Up), Sp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sp
        })
      })(), pp
    })();
    dp.e.ArcRotateCameraMouseWheelInput = Ep;
    var Xp, lp, Qp = cp(40096);
    class Jp extends dp.f {
      constructor(pp) {
        super(pp)
      }
      addMouseWheel() {
        return this.add(new Ep), this
      }
      addPointers() {
        return this.add(new mp), this
      }
      addKeyboard() {
        return this.add(new qp), this
      }
    }(Xp = Jp.prototype).addVRDeviceOrientation ?? (Xp.addVRDeviceOrientation = (0, Qp.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lp = Jp.prototype).addGamepad ?? (lp.addGamepad = (0, Qp.k)("ArcRotateCameraInputsManager", "addGamepad"));
    var Bp = cp(37368),
      Np = cp(40430),
      Tp = cp(40432);
    class fp extends Np.d {
      constructor(pp, ip, cp) {
        super(pp, ip, cp), this.input = new Tp.c({
          pan: (pp, ip) => {
            this.panAccumulatedPixels.x += pp, this.panAccumulatedPixels.y += ip
          },
          rotate: (pp, ip) => {
            this.rotationAccumulatedPixels.x += pp, this.rotationAccumulatedPixels.y += ip
          },
          zoom: pp => {
            this.zoomAccumulatedPixels += pp
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

    function bp(pp, ip) {
      return isNaN(pp) ? ip : pp
    }
    let hp = (() => {
        var pp;
        let ip, cp, Lp, Dp, Ap, yp, Up, dp, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Bp, Np, Tp, hp, ap, np, Fp, gp, Gp, rp = Hp.f,
          Zp = [],
          zp = [],
          sp = [],
          Kp = [],
          Vp = [],
          ii = [],
          ci = [],
          Oi = [],
          oi = [],
          Ii = [],
          Si = [],
          xi = [],
          Li = [],
          Yi = [],
          Di = [],
          Ai = [],
          Pi = [],
          Wi = [],
          yi = [],
          Ui = [],
          wi = [],
          vi = [],
          ti = [],
          Hi = [],
          di = [],
          ei = [],
          ui = [],
          ji = [],
          ki = [],
          mi = [],
          Ri = [],
          qi = [],
          Mi = [],
          Ci = [],
          Ei = [],
          Xi = [],
          li = [],
          Qi = [],
          Ji = [],
          Bi = [],
          Ni = [],
          Ti = [],
          fi = [],
          bi = [],
          ai = [],
          ni = [],
          Fi = [];
        return pp = class extends rp {
          get target() {
            return this.mV
          }
          set target(pp) {
            this.setTarget(pp)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(pp) {
            pp && this.setTarget(pp)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(pp) {
            this.setPosition(pp)
          }
          set upVector(pp) {
            this._upToYMatrix || (this._yToUpMatrix = new Sp.b, this._upToYMatrix = new Sp.b, this._upVector = Sp.o.Zero()), pp.normalize(), this._upVector.rM(pp), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Sp.b.RotationAlignToRef(Sp.o.UpReadOnly, this._upVector, this._yToUpMatrix), Sp.b.RotationAlignToRef(this._upVector, Sp.o.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const pp = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(pp) < this._rotationEpsilon ? 0 : pp
          }
          set inertialAlphaOffset(pp) {
            this._inertialAlphaOffset = pp, 0 === pp && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const pp = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(pp) < this._rotationEpsilon ? 0 : pp
          }
          set inertialBetaOffset(pp) {
            this._inertialBetaOffset = pp, 0 === pp && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const pp = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(pp) < this._rotationEpsilon ? 0 : pp
          }
          set inertialRadiusOffset(pp) {
            this._inertialRadiusOffset = pp, 0 === pp && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(pp) {
            this._panningInertia = pp, this.movement && (this.movement.panInertia = pp)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(pp) {
            this._inertia = pp, this.movement && (this.movement.rotationInertia = pp, this.movement.zoomInertia = pp)
          }
          get angularSensibilityX() {
            const pp = this.inputs.attached.pointers;
            return pp ? pp.angularSensibilityX : 0
          }
          set angularSensibilityX(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.angularSensibilityX = pp)
          }
          get angularSensibilityY() {
            const pp = this.inputs.attached.pointers;
            return pp ? pp.angularSensibilityY : 0
          }
          set angularSensibilityY(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.angularSensibilityY = pp)
          }
          get pinchPrecision() {
            const pp = this.inputs.attached.pointers;
            return pp ? pp.pinchPrecision : 0
          }
          set pinchPrecision(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.pinchPrecision = pp)
          }
          get pinchDeltaPercentage() {
            const pp = this.inputs.attached.pointers;
            return pp ? pp.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.pinchDeltaPercentage = pp)
          }
          get useNaturalPinchZoom() {
            const pp = this.inputs.attached.pointers;
            return !!pp && pp.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.useNaturalPinchZoom = pp)
          }
          get panningSensibility() {
            const pp = this.inputs.attached.pointers;
            return pp ? pp.panningSensibility : 0
          }
          set panningSensibility(pp) {
            const ip = this.inputs.attached.pointers;
            ip && (ip.panningSensibility = pp)
          }
          get keysUp() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysUp : []
          }
          set keysUp(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysUp = pp)
          }
          get keysDown() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysDown : []
          }
          set keysDown(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysDown = pp)
          }
          get keysLeft() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysLeft : []
          }
          set keysLeft(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysLeft = pp)
          }
          get keysRight() {
            const pp = this.inputs.attached.keyboard;
            return pp ? pp.keysRight : []
          }
          set keysRight(pp) {
            const ip = this.inputs.attached.keyboard;
            ip && (ip.keysRight = pp)
          }
          get wheelPrecision() {
            const pp = this.inputs.attached.mousewheel;
            return pp ? pp.wheelPrecision : 0
          }
          set wheelPrecision(pp) {
            const ip = this.inputs.attached.mousewheel;
            ip && (ip.wheelPrecision = pp)
          }
          get zoomToMouseLocation() {
            const pp = this.inputs.attached.mousewheel;
            return !!pp && pp.zoomToMouseLocation
          }
          set zoomToMouseLocation(pp) {
            const ip = this.inputs.attached.mousewheel;
            ip && (ip.zoomToMouseLocation = pp)
          }
          get wheelDeltaPercentage() {
            const pp = this.inputs.attached.mousewheel;
            return pp ? pp.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(pp) {
            const ip = this.inputs.attached.mousewheel;
            ip && (ip.wheelDeltaPercentage = pp)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(pp) {
            this._useCtrlForPanningInternal = pp;
            const ip = this.movement.input,
              cp = ip.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !pp && cp ? ip.inputMap.splice(ip.inputMap.indexOf(cp), 1) : pp && !cp && ip.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Op = ip.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !pp && Op ? ip.inputMap.splice(ip.inputMap.indexOf(Op), 1) : pp && !Op && ip.addEntry({
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
          set _panningMouseButton(pp) {
            this._panningMouseButtonInternal = pp;
            const ip = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            ip && (ip.button = pp)
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
          set useBouncingBehavior(pp) {
            pp !== this.useBouncingBehavior && (pp ? (this._bouncingBehavior = new wp, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(pp) {
            pp !== this.useFramingBehavior && (pp ? (this._framingBehavior = new vp, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(pp) {
            pp !== this.useAutoRotationBehavior && (pp ? (this._autoRotationBehavior = new Wp, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(pp, ip, cp, op, xp, Lp) {
            var Yp;
            let Dp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(pp, Sp.o.Zero(), Lp, Dp), Yp = this, this.alpha = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, void 0)), this.beta = ((0, Op.l)(this, sp), (0, Op.l)(this, Kp, void 0)), this.radius = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, void 0)), this.mV = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, void 0)), this._targetHost = ((0, Op.l)(this, Si), (0, Op.l)(this, xi, void 0)), this._upToYMatrix = (0, Op.l)(this, Li), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Op.l)(this, Yi, null), this.upperAlphaLimit = ((0, Op.l)(this, Di), (0, Op.l)(this, Ai, null)), this.lowerBetaLimit = ((0, Op.l)(this, Pi), (0, Op.l)(this, Wi, .01)), this.upperBetaLimit = ((0, Op.l)(this, yi), (0, Op.l)(this, Ui, Math.PI - .01)), this.lowerRadiusLimit = ((0, Op.l)(this, wi), (0, Op.l)(this, vi, null)), this.upperRadiusLimit = ((0, Op.l)(this, ti), (0, Op.l)(this, Hi, null)), this.lowerTargetYLimit = ((0, Op.l)(this, di), (0, Op.l)(this, ei, -1 / 0)), this.inertialPanningX = ((0, Op.l)(this, ui), (0, Op.l)(this, ji, 0)), this.inertialPanningY = ((0, Op.l)(this, ki), (0, Op.l)(this, mi, 0)), this.pinchToPanMaxDistance = ((0, Op.l)(this, Ri), (0, Op.l)(this, qi, 20)), this.panningDistanceLimit = ((0, Op.l)(this, Mi), (0, Op.l)(this, Ci, null)), this.panningOriginTarget = ((0, Op.l)(this, Ei), (0, Op.l)(this, Xi, Sp.o.Zero())), this._panningInertia = ((0, Op.l)(this, li), .9), this._inertia = .9, this.zoomOnFactor = (0, Op.l)(this, Qi, 1), this.targetScreenOffset = ((0, Op.l)(this, Ji), (0, Op.l)(this, Bi, Sp.l.Zero())), this.allowUpsideDown = ((0, Op.l)(this, Ni), (0, Op.l)(this, Ti, !0)), this.useInputToRestoreState = ((0, Op.l)(this, fi), (0, Op.l)(this, bi, !0)), this.restoreStateInterpolationFactor = ((0, Op.l)(this, ai), (0, Op.l)(this, ni, 0)), this._currentInterpolationFactor = ((0, Op.l)(this, Fi), 0), this._viewMatrix = new Sp.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Sp.o(1, 1, 0), this._transformedDirection = new Sp.o, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Ip.d, this.checkCollisions = !1, this.collisionRadius = new Sp.o(.5, .5, .5), this._previousPosition = Sp.o.Zero(), this._collisionVelocity = Sp.o.Zero(), this._newPosition = Sp.o.Zero(), this._computationVector = Sp.o.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Sp.o(NaN, NaN, NaN), this._goalTargetScreenOffset = new Sp.l(NaN, NaN), this._onCollisionPositionChange = function(pp, ip) {
              let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              cp ? (Yp.setPosition(ip), Yp.kP && Yp.kP(cp)) : Yp._previousPosition.rM(Yp._position);
              const Op = Math.cos(Yp.alpha),
                op = Math.sin(Yp.alpha),
                Ip = Math.cos(Yp.beta);
              let Sp = Math.sin(Yp.beta);
              0 === Sp && (Sp = 1e-4);
              const xp = Yp._getTargetPosition();
              Yp._computationVector.i5(Yp.radius * Op * Sp, Yp.radius * Ip, Yp.radius * op * Sp), xp.addToRef(Yp._computationVector, Yp._newPosition), Yp._position.rM(Yp._newPosition);
              let Lp = Yp.upVector;
              Yp.allowUpsideDown && Yp.beta < 0 && (Lp = Lp.clone(), Lp = Lp.gp()), Yp._computeViewMatrix(Yp._position, xp, Lp), Yp._viewMatrix.addAtIndex(12, Yp.targetScreenOffset.x), Yp._viewMatrix.addAtIndex(13, Yp.targetScreenOffset.y), Yp._collisionTriggered = !1
            }, this.mV = Sp.o.Zero(), xp && this.setTarget(xp), this.alpha = ip, this.beta = cp, this.radius = op, this.getViewMatrix(), this.inputs = new Jp(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new fp(this.Gl(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.mV = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Sp.l.Zero()
          }
          _updateCache(pp) {
            pp || super._updateCache(), this._cache.mV.rM(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.rM(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const pp = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? pp.addToRef(this._targetBoundingCenter, this.mV) : this.mV.rM(pp)
            }
            const pp = this._getLockedTargetPosition();
            return pp || this.mV
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Pp.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Ip = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Ip ? this._currentInterpolationFactor = Ip : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = bp(pp, this._goalAlpha), this._goalBeta = bp(ip, this._goalBeta), this._goalRadius = bp(cp, this._goalRadius), this._goalTarget.set(bp(Op.x, this._goalTarget.x), bp(Op.y, this._goalTarget.y), bp(Op.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(bp(op.x, this._goalTargetScreenOffset.x), bp(op.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, xp.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, xp.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, xp.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, xp.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.mV.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(pp, ip) {
            let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const op = arguments;
            ip = ep.i.BackCompatCameraNoPreventDefault(op), this._useCtrlForPanning = cp, this._panningMouseButton = Op, "boolean" === typeof op[0] && (op.length > 1 && (this._useCtrlForPanning = op[1]), op.length > 2 && (this._panningMouseButton = op[2])), this.inputs.attachElement(ip), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(pp, ip, cp) {
            const Op = this.invertRotation ? -1 : 1;
            let op = pp * this._calculateHandednessMultiplier();
            this.beta < 0 && (op *= -1), this.alpha += op * Op, this.beta += ip * Op, this.radius -= cp
          }
          _applyPanDelta(pp, ip) {
            const cp = Sp.i.Zy[0].i5(pp, ip, ip);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), cp.multiplyInPlace(this.panningAxis), Sp.o.TransformNormalToRef(cp, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const pp = this.upVector,
                ip = Sp.o.CrossToRef(this._transformedDirection, pp, this._transformedDirection);
              Sp.o.CrossToRef(pp, ip, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.mV);
                Sp.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.mV.rM(this._transformedDirection)
              } else {
                if (this.parent) {
                  const pp = Sp.i.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(pp), pp.transposeToRef(pp), Sp.o.TransformCoordinatesToRef(this._transformedDirection, pp, this._transformedDirection)
                }
                this.mV.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let pp = !1;
            this.movement.computeCurrentFrameDeltas();
            const ip = this.movement.rotationDeltaCurrentFrame,
              cp = this.movement.zoomDeltaCurrentFrame,
              Op = this.movement.panDeltaCurrentFrame;
            if (0 === ip.x && 0 === ip.y && 0 === cp && 0 === Op.x && 0 === Op.y || (pp = !0, 0 === ip.x && 0 === ip.y && 0 === cp || this._applyRotationAndZoomDelta(ip.x, ip.y, cp), 0 === Op.x && 0 === Op.y || this._applyPanDelta(Op.x, Op.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), pp = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const ip = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < ip && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < ip && (this.inertialPanningY = 0), pp = !0
            }
            if (pp) this.stopInterpolation();
            else if (this._isInterpolating) {
              let pp = !1;
              const ip = this._scene.gy().getDeltaTime() / 1e3,
                cp = 1 - Math.pow(2, -ip / this._currentInterpolationFactor),
                Op = bp(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const ip = Sp.i.Zy[0].set(bp(this._goalTarget.x, this.mV.x), bp(this._goalTarget.y, this.mV.y), bp(this._goalTarget.z, this.mV.z));
                Sp.o.LerpToRef(this.target, ip, cp, this.mV), 10 * Sp.o.Distance(this.target, ip) / Op < Pp.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.rM(ip), this.setTarget(this.target, !1, !0, !0)) : pp = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const ip = Sp.f.RotationAlphaBetaGammaToRef(bp(this._goalAlpha, this.alpha), bp(this._goalBeta, this.beta), 0, Sp.i.Quaternion[0]),
                  Op = Sp.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Sp.i.Quaternion[1]),
                  op = Sp.f.SlerpToRef(Op, ip, cp, Sp.i.Quaternion[2]);
                op.normalize();
                const Ip = op.toAlphaBetaGammaToRef(Sp.i.Zy[0]);
                if (this.alpha = Ip.x, this.beta = Ip.y, op.isApprox(ip, Pp.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const pp = ip.toAlphaBetaGammaToRef(Sp.i.Zy[0]);
                  this.alpha = pp.x, this.beta = pp.y
                } else pp = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Op - this.radius) * cp, Math.abs(Op / this.radius - 1) < Pp.b ? (this._goalRadius = NaN, this.radius = Op) : pp = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const ip = Sp.i.Vector2[0].set(bp(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), bp(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Sp.l.LerpToRef(this.targetScreenOffset, ip, cp, this.targetScreenOffset), Sp.l.Distance(this.targetScreenOffset, ip) < Pp.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.rM(ip)) : pp = !0
              }
              this._isInterpolating = pp
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Sp.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const pp = this.alpha;
            var ip, cp;
            this.alpha = function(pp) {
              let ip = Math.PI / 2;
              return 0 === pp.x && 0 === pp.z || (ip = Math.acos(pp.x / Math.sqrt(Math.pow(pp.x, 2) + Math.pow(pp.z, 2)))), pp.z < 0 && (ip = 2 * Math.PI - ip), ip
            }(this._computationVector), this.beta = (ip = this._computationVector.y, cp = this.radius, Math.acos(ip / cp));
            const Op = Math.round((pp - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Op * Math.PI, this._checkLimits()
          }
          setPosition(pp) {
            this._position.equals(pp) || (this._position.rM(pp), this.rebuildAnglesAndRadius())
          }
          setTarget(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Op = this.overrideCloneAlphaBetaRadius ?? Op, pp.computeWorldMatrix) ip && pp.bJ ? this._targetBoundingCenter = pp.bJ().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, pp.computeWorldMatrix(), this._targetHost = pp, this.mV = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const ip = pp,
                Op = this._getTargetPosition();
              if (Op && !cp && Op.equals(ip)) return;
              this._targetHost = null, this.mV = ip, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Op || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const pp = Math.cos(this.alpha),
              ip = Math.sin(this.alpha),
              cp = Math.cos(this.beta);
            let Op = Math.sin(this.beta);
            0 === Op && (Op = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const op = this._getTargetPosition();
            if (this._computationVector.i5(this.radius * pp * Op, this.radius * cp, this.radius * ip * Op), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Sp.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), op.addToRef(this._computationVector, this._newPosition), this.Gl().collisionsEnabled && this.checkCollisions) {
              const pp = this.Gl().collisionCoordinator;
              this._collider || (this._collider = pp.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, pp.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.rM(this._newPosition);
              let pp = this.upVector;
              this.allowUpsideDown && Op < 0 && (pp = pp.gp()), this._computeViewMatrix(this._position, op, pp), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.rM(op), this._viewMatrix
          }
          zoomOn(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            pp = pp || this.Gl().meshes;
            const cp = Yp.d.MinMax(pp);
            let Op = this._calculateLowerRadiusFromModelBoundingSphere(cp.min, cp.max);
            if (Op = Math.max(Math.min(Op, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Op * this.zoomOnFactor, this.mode === tp.d.ORTHOGRAPHIC_CAMERA) {
              const pp = this.Gl().gy().getAspectRatio(this),
                ip = Op * this.zoomOnFactor / 2;
              this.orthoLeft = -ip * pp, this.orthoRight = ip * pp, this.orthoBottom = -ip, this.orthoTop = ip
            }
            this.focusOn({
              min: cp.min,
              max: cp.max,
              distance: Op
            }, ip)
          }
          focusOn(pp) {
            let ip, cp, Op = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === pp.min) {
              const Op = pp || this.Gl().meshes;
              ip = Yp.d.MinMax(Op), cp = Sp.o.Distance(ip.min, ip.max)
            } else {
              ip = pp, cp = pp.distance
            }
            this.mV = Yp.d.Center(ip), Op || (this.maxZ = 2 * cp)
          }
          createRigCamera(ip, cp) {
            let Op = 0;
            switch (this.cameraRigMode) {
              case tp.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case tp.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case tp.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case tp.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case tp.d.RIG_MODE_VR:
                Op = this._cameraRigParams.stereoHalfAngle * (0 === cp ? 1 : -1);
                break;
              case tp.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Op = this._cameraRigParams.stereoHalfAngle * (0 === cp ? -1 : 1)
            }
            const op = new pp(ip, this.alpha + Op, this.beta, this.radius, this.mV, this.Gl());
            return op._cameraRigParams = {}, op.isRigCamera = !0, op.rigParent = this, op.upVector = this.upVector, op.mode = this.mode, op.orthoLeft = this.orthoLeft, op.orthoRight = this.orthoRight, op.orthoBottom = this.orthoBottom, op.orthoTop = this.orthoTop, op
          }
          _updateRigCameras() {
            const pp = this._rigCameras[0],
              ip = this._rigCameras[1];
            switch (pp.beta = ip.beta = this.beta, this.cameraRigMode) {
              case tp.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case tp.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case tp.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case tp.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case tp.d.RIG_MODE_VR:
                pp.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, ip.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case tp.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                pp.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, ip.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Op = Sp.o.Distance(pp, ip),
              op = this.Gl().gy().getAspectRatio(this),
              Ip = Math.tan(this.fov / 2),
              xp = Ip * op,
              Lp = .5 * Op * cp,
              Yp = Lp * Math.sqrt(1 + 1 / (xp * xp)),
              Dp = Lp * Math.sqrt(1 + 1 / (Ip * Ip));
            return Math.max(Yp, Dp)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(rp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], Lp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.H)("target")], yp = [(0, op.u)("targetHost")], Up = [(0, op.K)()], dp = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], Xp = [(0, op.K)()], lp = [(0, op.K)()], Qp = [(0, op.K)()], Bp = [(0, op.K)()], Np = [(0, op.H)()], Tp = [(0, op.K)()], hp = [(0, op.K)()], ap = [(0, op.K)()], np = [(0, op.F)()], Fp = [(0, op.K)()], gp = [(0, op.K)()], Gp = [(0, op.K)()], (0, Op.j)(pp, null, Up, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "inertialAlphaOffset" in pp,
              get: pp => pp.inertialAlphaOffset
            },
            metadata: Ip
          }, null, Zp), (0, Op.j)(pp, null, dp, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "inertialBetaOffset" in pp,
              get: pp => pp.inertialBetaOffset
            },
            metadata: Ip
          }, null, Zp), (0, Op.j)(pp, null, jp, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "inertialRadiusOffset" in pp,
              get: pp => pp.inertialRadiusOffset
            },
            metadata: Ip
          }, null, Zp), (0, Op.j)(pp, null, Tp, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: pp => "panningInertia" in pp,
              get: pp => pp.panningInertia
            },
            metadata: Ip
          }, null, Zp), (0, Op.j)(pp, null, hp, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: pp => "zoomToMouseLocation" in pp,
              get: pp => pp.zoomToMouseLocation
            },
            metadata: Ip
          }, null, Zp), (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "alpha" in pp,
              get: pp => pp.alpha,
              set: (pp, ip) => {
                pp.alpha = ip
              }
            },
            metadata: Ip
          }, zp, sp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: pp => "beta" in pp,
              get: pp => pp.beta,
              set: (pp, ip) => {
                pp.beta = ip
              }
            },
            metadata: Ip
          }, Kp, Vp), (0, Op.j)(null, null, Lp, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: pp => "radius" in pp,
              get: pp => pp.radius,
              set: (pp, ip) => {
                pp.radius = ip
              }
            },
            metadata: Ip
          }, ii, ci), (0, Op.j)(null, null, Dp, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: pp => "overrideCloneAlphaBetaRadius" in pp,
              get: pp => pp.overrideCloneAlphaBetaRadius,
              set: (pp, ip) => {
                pp.overrideCloneAlphaBetaRadius = ip
              }
            },
            metadata: Ip
          }, Oi, oi), (0, Op.j)(null, null, Ap, {
            kind: "field",
            name: "mV",
            static: !1,
            private: !1,
            access: {
              has: pp => "mV" in pp,
              get: pp => pp.mV,
              set: (pp, ip) => {
                pp.mV = ip
              }
            },
            metadata: Ip
          }, Ii, Si), (0, Op.j)(null, null, yp, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: pp => "_targetHost" in pp,
              get: pp => pp._targetHost,
              set: (pp, ip) => {
                pp._targetHost = ip
              }
            },
            metadata: Ip
          }, xi, Li), (0, Op.j)(null, null, kp, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "lowerAlphaLimit" in pp,
              get: pp => pp.lowerAlphaLimit,
              set: (pp, ip) => {
                pp.lowerAlphaLimit = ip
              }
            },
            metadata: Ip
          }, Yi, Di), (0, Op.j)(null, null, mp, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "upperAlphaLimit" in pp,
              get: pp => pp.upperAlphaLimit,
              set: (pp, ip) => {
                pp.upperAlphaLimit = ip
              }
            },
            metadata: Ip
          }, Ai, Pi), (0, Op.j)(null, null, Rp, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "lowerBetaLimit" in pp,
              get: pp => pp.lowerBetaLimit,
              set: (pp, ip) => {
                pp.lowerBetaLimit = ip
              }
            },
            metadata: Ip
          }, Wi, yi), (0, Op.j)(null, null, qp, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "upperBetaLimit" in pp,
              get: pp => pp.upperBetaLimit,
              set: (pp, ip) => {
                pp.upperBetaLimit = ip
              }
            },
            metadata: Ip
          }, Ui, wi), (0, Op.j)(null, null, Mp, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "lowerRadiusLimit" in pp,
              get: pp => pp.lowerRadiusLimit,
              set: (pp, ip) => {
                pp.lowerRadiusLimit = ip
              }
            },
            metadata: Ip
          }, vi, ti), (0, Op.j)(null, null, Cp, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "upperRadiusLimit" in pp,
              get: pp => pp.upperRadiusLimit,
              set: (pp, ip) => {
                pp.upperRadiusLimit = ip
              }
            },
            metadata: Ip
          }, Hi, di), (0, Op.j)(null, null, Ep, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "lowerTargetYLimit" in pp,
              get: pp => pp.lowerTargetYLimit,
              set: (pp, ip) => {
                pp.lowerTargetYLimit = ip
              }
            },
            metadata: Ip
          }, ei, ui), (0, Op.j)(null, null, Xp, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: pp => "inertialPanningX" in pp,
              get: pp => pp.inertialPanningX,
              set: (pp, ip) => {
                pp.inertialPanningX = ip
              }
            },
            metadata: Ip
          }, ji, ki), (0, Op.j)(null, null, lp, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: pp => "inertialPanningY" in pp,
              get: pp => pp.inertialPanningY,
              set: (pp, ip) => {
                pp.inertialPanningY = ip
              }
            },
            metadata: Ip
          }, mi, Ri), (0, Op.j)(null, null, Qp, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: pp => "pinchToPanMaxDistance" in pp,
              get: pp => pp.pinchToPanMaxDistance,
              set: (pp, ip) => {
                pp.pinchToPanMaxDistance = ip
              }
            },
            metadata: Ip
          }, qi, Mi), (0, Op.j)(null, null, Bp, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: pp => "panningDistanceLimit" in pp,
              get: pp => pp.panningDistanceLimit,
              set: (pp, ip) => {
                pp.panningDistanceLimit = ip
              }
            },
            metadata: Ip
          }, Ci, Ei), (0, Op.j)(null, null, Np, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: pp => "panningOriginTarget" in pp,
              get: pp => pp.panningOriginTarget,
              set: (pp, ip) => {
                pp.panningOriginTarget = ip
              }
            },
            metadata: Ip
          }, Xi, li), (0, Op.j)(null, null, ap, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: pp => "zoomOnFactor" in pp,
              get: pp => pp.zoomOnFactor,
              set: (pp, ip) => {
                pp.zoomOnFactor = ip
              }
            },
            metadata: Ip
          }, Qi, Ji), (0, Op.j)(null, null, np, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: pp => "targetScreenOffset" in pp,
              get: pp => pp.targetScreenOffset,
              set: (pp, ip) => {
                pp.targetScreenOffset = ip
              }
            },
            metadata: Ip
          }, Bi, Ni), (0, Op.j)(null, null, Fp, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: pp => "allowUpsideDown" in pp,
              get: pp => pp.allowUpsideDown,
              set: (pp, ip) => {
                pp.allowUpsideDown = ip
              }
            },
            metadata: Ip
          }, Ti, fi), (0, Op.j)(null, null, gp, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: pp => "useInputToRestoreState" in pp,
              get: pp => pp.useInputToRestoreState,
              set: (pp, ip) => {
                pp.useInputToRestoreState = ip
              }
            },
            metadata: Ip
          }, bi, ai), (0, Op.j)(null, null, Gp, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: pp => "restoreStateInterpolationFactor" in pp,
              get: pp => pp.restoreStateInterpolationFactor,
              set: (pp, ip) => {
                pp.restoreStateInterpolationFactor = ip
              }
            },
            metadata: Ip
          }, ni, Fi), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      ap = !1;
    ap || (ap = !0, Lp.b.AddNodeConstructor("ArcRotateCamera", ((pp, ip) => () => new hp(pp, 0, 0, 1, Sp.o.Zero(), ip))), (0, Bp.g)("BABYLON.ArcRotateCamera", hp))
  },
  40443: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op.b
    });
    var Op = cp(40445);
    (0, Op.d)()
  },
  40445: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      d: () => Pp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(37487),
      xp = cp(40451),
      Lp = cp(40415),
      Yp = cp(37368);
    let Dp = (() => {
        var pp;
        let ip, cp, Lp = xp.d,
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        return pp = class extends Lp {
          constructor(pp, ip, cp, op) {
            super(pp, cp, op), this.groundColor = (0, Op.l)(this, Yp, new Sp.d(0, 0, 0)), this.direction = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, void 0)), (0, Op.l)(this, Pp), this.direction = ip || Ip.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(pp) {
            return this.direction = Ip.o.Normalize(pp.subtract(Ip.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cp.x, cp.y, cp.z, 0, ip), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ip), this
          }
          transferToNodeMaterialEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return pp.setFloat3(ip, cp.x, cp.y, cp.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xp.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(pp, ip) {
            pp["HEMILIGHT" + ip] = !0
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.n)()], cp = [(0, op.H)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "groundColor" in pp,
              get: pp => pp.groundColor,
              set: (pp, ip) => {
                pp.groundColor = ip
              }
            },
            metadata: Ip
          }, Yp, Dp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: pp => "direction" in pp,
              get: pp => pp.direction,
              set: (pp, ip) => {
                pp.direction = ip
              }
            },
            metadata: Ip
          }, Ap, Pp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      Ap = !1;

    function Pp() {
      Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
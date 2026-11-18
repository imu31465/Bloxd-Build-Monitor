export const id = 239;
export const ids = [239];
export const modules = {
  39668: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ly
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35893),
      Zy = Wy(35861),
      cb = Wy(35902),
      Py = Wy(38697),
      oy = Wy(38902),
      By = Wy(38655),
      Ky = Wy(38371),
      ey = Wy(35864);
    class qb {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(yb) {
        this._zoomStopsAnimation = yb
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(yb) {
        this._idleRotationSpeed = yb
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(yb) {
        this._idleRotationWaitTime = yb
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(yb) {
        this._idleRotationSpinupTime = yb
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
      attach(yb) {
        this._attachedCamera = yb;
        const bb = this._attachedCamera.kWy();
        this._onPrePointerObservableObserver = bb.onPrePointerObservable.add((yb => {
          yb.type !== By.d.POINTERDOWN ? yb.type === By.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = yb.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const yb = Ky.d.Now;
          let bb = 0;
          null != this._lastFrameTime && (bb = yb - this._lastFrameTime), this._lastFrameTime = yb, this._applyUserInteraction();
          const Wy = yb - this._lastInteractionTime - this._idleRotationWaitTime,
            Uy = Math.max(Math.min(Wy / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Uy, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (bb / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const yb = this._attachedCamera.kWy();
        this._onPrePointerObservableObserver && yb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(yb) {
        this._lastInteractionTime = yb ?? Ky.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < ey.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let yb = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (yb = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? yb : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Ky.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Wy(39674);
    class sy {
      constructor() {
        this._easingMode = sy.EASINGMODE_EASEIN
      }
      setEasingMode(yb) {
        const bb = Math.min(Math.max(yb, 0), 2);
        this._easingMode = bb
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(yb) {
        throw new Error("You must implement this method")
      }
      ease(yb) {
        switch (this._easingMode) {
          case sy.EASINGMODE_EASEIN:
            return this.easeInCore(yb);
          case sy.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - yb)
        }
        return yb >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - yb))) + .5 : .5 * this.easeInCore(2 * yb)
      }
    }
    sy.EASINGMODE_EASEIN = 0, sy.EASINGMODE_EASEOUT = 1, sy.EASINGMODE_EASEINOUT = 2;
    var Sy = Wy(39680);
    class Ey {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(yb) {
        if (this._autoTransitionRange === yb) return;
        this._autoTransitionRange = yb;
        const bb = this._attachedCamera;
        bb && (yb ? this._onMeshTargetChangedObserver = bb.onMeshTargetChangedObservable.add((yb => {
          if (yb && (yb.computeWorldMatrix(!0), yb.qUy)) {
            const bb = yb.qUy().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * bb, this.upperRadiusTransitionRange = .05 * bb
          }
        })) : this._onMeshTargetChangedObserver && bb.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(yb) {
        this._attachedCamera = yb, this._onAfterCheckInputsObserver = yb.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(yb) {
        return !!this._attachedCamera && (this._attachedCamera.radius === yb && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(yb) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (Ey.EasingFunction.setEasingMode(Ey.EasingMode), this._radiusBounceTransition = Sy.d.CreateAnimation("radius", Sy.d.ANIMATIONTYPE_FLOAT, 60, Ey.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const bb = Sy.d.TransitionTo("radius", this._attachedCamera.radius + yb, this._attachedCamera, this._attachedCamera.kWy(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        bb && this._animatables.push(bb)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Ey.EasingFunction = new class extends sy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = yb
      }
      easeInCore(yb) {
        const bb = Math.max(0, this.amplitude);
        return Math.pow(yb, 3) - yb * bb * Math.sin(3.141592653589793 * yb)
      }
    }(.3), Ey.EasingMode = sy.EASINGMODE_EASEOUT;
    class ly {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new fy.c, this._mode = ly.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(yb) {
        this._mode = yb
      }
      get mode() {
        return this._mode
      }
      set radiusScale(yb) {
        this._radiusScale = yb
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(yb) {
        this._positionScale = yb
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(yb) {
        this._defaultElevation = yb
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(yb) {
        this._elevationReturnTime = yb
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(yb) {
        this._elevationReturnWaitTime = yb
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(yb) {
        this._zoomStopsAnimation = yb
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(yb) {
        this._framingTime = yb
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(yb) {
        this._attachedCamera = yb;
        const bb = this._attachedCamera.kWy();
        ly.EasingFunction.setEasingMode(ly.EasingMode), this._onPrePointerObservableObserver = bb.onPrePointerObservable.add((yb => {
          yb.type !== By.d.POINTERDOWN ? yb.type === By.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = yb.onMeshTargetChangedObservable.add((yb => {
          yb && yb.qUy && this.zoomOnMesh(yb, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = yb.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const yb = this._attachedCamera.kWy();
        this._onPrePointerObservableObserver && yb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        yb.computeWorldMatrix(!0);
        const Uy = yb.qUy().boundingBox;
        this.zoomOnBoundingInfo(Uy.minimumWorld, Uy.maximumWorld, bb, Wy)
      }
      zoomOnMeshHierarchy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        yb.computeWorldMatrix(!0);
        const Uy = yb.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Uy.min, Uy.max, bb, Wy)
      }
      zoomOnMeshesHierarchy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Uy = new Zy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          hy = new Zy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let fy = 0; fy < yb.length; fy++) {
          const bb = yb[fy].getHierarchyBoundingVectors(!0);
          Zy.n.CheckExtends(bb.min, Uy, hy), Zy.n.CheckExtends(bb.max, Uy, hy)
        }
        this.zoomOnBoundingInfo(Uy, hy, bb, Wy)
      }
      zoomOnBoundingInfo(yb, bb) {
        let Wy, Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const fy = yb.y,
          cb = fy + (bb.y - fy) * this._positionScale,
          Py = bb.subtract(yb).scale(.5);
        if (!isFinite(cb)) return !1;
        if (Uy) Wy = new Zy.n(0, cb, 0);
        else {
          const bb = yb.add(Py);
          Wy = new Zy.n(bb.x, cb, bb.z)
        }
        this._vectorTransition || (this._vectorTransition = Sy.d.CreateAnimation("target", Sy.d.ANIMATIONTYPE_VECTOR3, 60, ly.EasingFunction)), this._betaIsAnimating = !0;
        let oy = Sy.d.TransitionTo("target", Wy, this._attachedCamera, this._attachedCamera.kWy(), 60, this._vectorTransition, this._framingTime);
        oy && this._animatables.push(oy);
        let By = 0;
        if (this._mode === ly.FitFrustumSidesMode) {
          const Wy = this._calculateLowerRadiusFromModelBoundingSphere(yb, bb);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Py.length() + this._attachedCamera.minZ), By = Wy
        } else this._mode === ly.IgnoreBoundsSizeMode && (By = this._calculateLowerRadiusFromModelBoundingSphere(yb, bb), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Wy = bb.subtract(yb).length();
          this._attachedCamera.panningSensibility = 5e3 / Wy, this._attachedCamera.wheelPrecision = 100 / By
        }
        return this._radiusTransition || (this._radiusTransition = Sy.d.CreateAnimation("radius", Sy.d.ANIMATIONTYPE_FLOAT, 60, ly.EasingFunction)), oy = Sy.d.TransitionTo("radius", By, this._attachedCamera, this._attachedCamera.kWy(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), hy && hy(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), oy && this._animatables.push(oy), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(yb, bb) {
        const Wy = this._attachedCamera;
        if (!Wy) return 0;
        let Uy = Wy._calculateLowerRadiusFromModelBoundingSphere(yb, bb, this._radiusScale);
        return Wy.lowerRadiusLimit && this._mode === ly.IgnoreBoundsSizeMode && (Uy = Uy < Wy.lowerRadiusLimit ? Wy.lowerRadiusLimit : Uy), Wy.upperRadiusLimit && (Uy = Uy > Wy.upperRadiusLimit ? Wy.upperRadiusLimit : Uy), Uy
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const yb = Ky.d.Now - this._lastInteractionTime,
          bb = .5 * Math.PI - this._defaultElevation,
          Wy = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Wy && yb >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Sy.d.CreateAnimation("beta", Sy.d.ANIMATIONTYPE_FLOAT, 60, ly.EasingFunction));
          const yb = Sy.d.TransitionTo("beta", bb, this._attachedCamera, this._attachedCamera.kWy(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          yb && this._animatables.push(yb)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Ky.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ly.EasingFunction = new class extends sy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = yb
      }
      easeInCore(yb) {
        return this.exponent <= 0 ? yb : (Math.exp(this.exponent * yb) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, ly.EasingMode = sy.EASINGMODE_EASEINOUT, ly.IgnoreBoundsSizeMode = 0, ly.FitFrustumSidesMode = 1;
    var mb = Wy(38694),
      Cy = Wy(38688),
      Ty = Wy(38729),
      Vy = Wy(38576);
    let Jy = (() => {
        var yb;
        let bb, Wy = [],
          fy = [];
        return yb = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Uy.l)(this, Wy, [0, 1, 2]), this._pointerInput = (0, Uy.l)(this, fy)
          }
          attachControl(yb) {
            yb = Vy.k.BackCompatCameraNoPreventDefault(arguments);
            const bb = this.camera.xh(),
              Wy = bb.getInputElement();
            let Uy = 0,
              hy = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = fy => {
              const Zy = fy.event,
                cb = "touch" === Zy.pointerType;
              if (fy.type !== By.d.POINTERMOVE && -1 === this.buttons.indexOf(Zy.button)) return;
              const Py = Zy.target;
              if (this._altKey = Zy.altKey, this._ctrlKey = Zy.ctrlKey, this._metaKey = Zy.metaKey, this._shiftKey = Zy.shiftKey, this._buttonsPressed = Zy.buttons, bb.isPointerLock) {
                const yb = Zy.movementX,
                  bb = Zy.movementY;
                this.onTouch(null, yb, bb), this._pointA = null, this._pointB = null
              } else {
                if (fy.type !== By.d.POINTERDOWN && fy.type !== By.d.POINTERDOUBLETAP && cb && this._pointA?.pointerId !== Zy.pointerId && this._pointB?.pointerId !== Zy.pointerId) return;
                if (fy.type !== By.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !cb)
                  if (fy.type === By.d.POINTERDOUBLETAP) this.onDoubleTap(Zy.pointerType, Zy);
                  else if (fy.type !== By.d.POINTERUP || this._currentMousePointerIdDown !== Zy.pointerId && !cb) {
                  if (fy.type === By.d.POINTERMOVE)
                    if (yb || Zy.preventDefault(), this._pointA && null === this._pointB) {
                      const yb = Zy.clientX - this._pointA.x,
                        bb = Zy.clientY - this._pointA.y;
                      this._pointA.x = Zy.clientX, this._pointA.y = Zy.clientY, this.onTouch(this._pointA, yb, bb)
                    } else if (this._pointA && this._pointB) {
                    const yb = this._pointA.pointerId === Zy.pointerId ? this._pointA : this._pointB;
                    yb.x = Zy.clientX, yb.y = Zy.clientY;
                    const bb = this._pointA.x - this._pointB.x,
                      Wy = this._pointA.y - this._pointB.y,
                      cb = bb * bb + Wy * Wy,
                      Py = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Zy.pointerId,
                        type: fy.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Uy, cb, hy, Py), hy = Py, Uy = cb
                  }
                } else {
                  try {
                    Py?.releasePointerCapture(Zy.pointerId)
                  } catch (oy) {}
                  cb || (this._pointB = null), bb._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Zy.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Zy.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Uy || hy) && (this.onMultiTouch(this._pointA, this._pointB, Uy, 0, hy, null), Uy = 0, hy = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Zy), yb || Zy.preventDefault()
                } else {
                  try {
                    Py?.setPointerCapture(Zy.pointerId)
                  } catch (oy) {}
                  if (null === this._pointA) this._pointA = {
                    x: Zy.clientX,
                    y: Zy.clientY,
                    pointerId: Zy.pointerId,
                    type: Zy.pointerType,
                    button: Zy.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Zy.clientX,
                      y: Zy.clientY,
                      pointerId: Zy.pointerId,
                      type: Zy.pointerType,
                      button: Zy.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || cb || (this._currentMousePointerIdDown = Zy.pointerId), this.onButtonDown(Zy), yb || (Zy.preventDefault(), Wy && Wy.focus())
                }
              }
            }, this._observer = this.camera.kWy()._inputManager._addCameraPointerObserver(this._pointerInput, By.d.POINTERDOWN | By.d.POINTERUP | By.d.POINTERMOVE | By.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Uy = 0, hy = null, this.onLostFocus()
            }, this._contextMenuBind = yb => this.onContextMenu(yb), Wy && Wy.addEventListener("contextmenu", this._contextMenuBind, !1);
            const fy = this.camera.kWy().xh().getHostWindow();
            fy && Vy.k.RegisterTopRootEvents(fy, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const yb = this.camera.kWy().xh().getHostWindow();
              yb && Vy.k.UnregisterTopRootEvents(yb, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.kWy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const yb = this.camera.kWy().xh().getInputElement();
                yb && yb.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(yb, bb) {}
          onTouch(yb, bb, Wy) {}
          onMultiTouch(yb, bb, Wy, Uy, hy, fy) {}
          onContextMenu(yb) {
            yb.preventDefault()
          }
          onButtonDown(yb) {}
          onButtonUp(yb) {}
          onLostFocus() {}
        }, (() => {
          const Zy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bb = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: yb => "buttons" in yb,
              get: yb => yb.buttons,
              set: (yb, bb) => {
                yb.buttons = bb
              }
            },
            metadata: Zy
          }, Wy, fy), Zy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zy
          })
        })(), yb
      })(),
      gb = (() => {
        var yb;
        let bb, Wy, fy, Zy = Jy,
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        return yb = class extends Zy {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Uy.l)(this, cb, !0), this.multiTouchPanning = ((0, Uy.l)(this, Py), (0, Uy.l)(this, oy, !0)), this.multiTouchPanAndZoom = ((0, Uy.l)(this, By), (0, Uy.l)(this, Ky, !0)), this._isPinching = ((0, Uy.l)(this, ey), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(yb, bb) {}
          _computeMultiTouchPanning(yb, bb) {}
          onMultiTouch(yb, bb, Wy, Uy, hy, fy) {
            0 === Wy && null === hy || 0 === Uy && null === fy || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Wy, Uy), this._computeMultiTouchPanning(hy, fy)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Wy, Uy), this._isPinching = !0) : this._computeMultiTouchPanning(hy, fy)) : this.multiTouchPanning ? this._computeMultiTouchPanning(hy, fy) : this.pinchZoom && this._computePinchZoom(Wy, Uy))
          }
          onButtonUp(yb) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zy[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: yb => "pinchZoom" in yb,
              get: yb => yb.pinchZoom,
              set: (yb, bb) => {
                yb.pinchZoom = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: yb => "multiTouchPanning" in yb,
              get: yb => yb.multiTouchPanning,
              set: (yb, bb) => {
                yb.multiTouchPanning = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Uy.j)(null, null, fy, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: yb => "multiTouchPanAndZoom" in yb,
              get: yb => yb.multiTouchPanAndZoom,
              set: (yb, bb) => {
                yb.multiTouchPanAndZoom = bb
              }
            },
            metadata: qb
          }, Ky, ey), qb && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          })
        })(), yb
      })(),
      Gy = (() => {
        var yb;
        let bb, Wy, fy, Zy, cb, Py, oy, By = gb,
          Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [],
          ly = [],
          mb = [],
          Cy = [],
          Ty = [],
          Vy = [],
          Jy = [],
          Gy = [],
          Oy = [];
        return yb = class extends By {
          constructor() {
            super(...arguments), this.buttons = (0, Uy.l)(this, Ky, [0, 1, 2]), this.angularSensibilityX = ((0, Uy.l)(this, ey), (0, Uy.l)(this, qb, 1e3)), this.angularSensibilityY = ((0, Uy.l)(this, sy), (0, Uy.l)(this, Sy, 1e3)), this.pinchPrecision = ((0, Uy.l)(this, Ey), (0, Uy.l)(this, ly, 12)), this.pinchDeltaPercentage = ((0, Uy.l)(this, mb), (0, Uy.l)(this, Cy, 0)), this.useNaturalPinchZoom = ((0, Uy.l)(this, Ty), (0, Uy.l)(this, Vy, !1)), this.panningSensibility = ((0, Uy.l)(this, Jy), (0, Uy.l)(this, Gy, 1e3)), this.pinchInwards = ((0, Uy.l)(this, Oy), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(yb, bb) {
            if (yb && bb) {
              const Wy = bb.x - yb.x,
                Uy = bb.y - yb.y,
                hy = this.camera.movement.input.getEntry("pointer", "pan"),
                fy = hy?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== fy && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Wy * fy, this.camera.movement.panAccumulatedPixels.y += Uy * fy)
            }
          }
          _computePinchZoom(bb, Wy) {
            const Uy = this.camera.radius || yb.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Uy * Math.sqrt(bb) / Math.sqrt(Wy);
            else if (this.pinchDeltaPercentage) {
              const yb = .001 * (Wy - bb) * Uy * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += yb
            } else {
              const yb = (Wy - bb) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += yb
            }
          }
          onTouch(yb, bb, Wy) {
            const Uy = this._activeEntry ?? (this.camera.xh().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Uy)
              if ("pan" === Uy.interaction) {
                const yb = Uy.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== yb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -bb * yb, this.camera.movement.panAccumulatedPixels.y += Wy * yb)
              } else if ("rotate" === Uy.interaction) {
              const yb = Uy.NUy ?? Uy.sensitivity ?? 1 / this.angularSensibilityX,
                hy = Uy.zhy ?? Uy.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -bb * yb, this.camera.movement.rotationAccumulatedPixels.y += -Wy * hy
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(yb, bb, Wy, Uy, hy, fy) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Uy) - Math.sqrt(Wy)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(yb, bb, Wy, Uy, hy, fy)
          }
          onButtonDown(yb) {
            this._pointerConditions.button = yb.button, this._pointerModifiers.ctrl = yb.ctrlKey, this._pointerModifiers.alt = yb.altKey, this._pointerModifiers.shift = yb.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(yb)
          }
          onButtonUp(yb) {
            this._activeEntry = null, super.onButtonUp(yb)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(By[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], Zy = [(0, hy.T)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: yb => "buttons" in yb,
              get: yb => yb.buttons,
              set: (yb, bb) => {
                yb.buttons = bb
              }
            },
            metadata: gb
          }, Ky, ey), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: yb => "angularSensibilityX" in yb,
              get: yb => yb.angularSensibilityX,
              set: (yb, bb) => {
                yb.angularSensibilityX = bb
              }
            },
            metadata: gb
          }, qb, sy), (0, Uy.j)(null, null, fy, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: yb => "angularSensibilityY" in yb,
              get: yb => yb.angularSensibilityY,
              set: (yb, bb) => {
                yb.angularSensibilityY = bb
              }
            },
            metadata: gb
          }, Sy, Ey), (0, Uy.j)(null, null, Zy, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: yb => "pinchPrecision" in yb,
              get: yb => yb.pinchPrecision,
              set: (yb, bb) => {
                yb.pinchPrecision = bb
              }
            },
            metadata: gb
          }, ly, mb), (0, Uy.j)(null, null, cb, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: yb => "pinchDeltaPercentage" in yb,
              get: yb => yb.pinchDeltaPercentage,
              set: (yb, bb) => {
                yb.pinchDeltaPercentage = bb
              }
            },
            metadata: gb
          }, Cy, Ty), (0, Uy.j)(null, null, Py, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: yb => "useNaturalPinchZoom" in yb,
              get: yb => yb.useNaturalPinchZoom,
              set: (yb, bb) => {
                yb.useNaturalPinchZoom = bb
              }
            },
            metadata: gb
          }, Vy, Jy), (0, Uy.j)(null, null, oy, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: yb => "panningSensibility" in yb,
              get: yb => yb.panningSensibility,
              set: (yb, bb) => {
                yb.panningSensibility = bb
              }
            },
            metadata: gb
          }, Gy, Oy), gb && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gb
          })
        })(), yb.MinimumRadiusForPinch = .001, yb
      })();
    Ty.e.ArcRotateCameraPointersInput = Gy;
    var Oy = Wy(38662);
    let Ry = (() => {
      var yb;
      let bb, Wy, fy, cb, Py, oy, By, Ky, ey, qb, sy, Sy = [],
        Ey = [],
        ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        Jy = [],
        gb = [],
        Gy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [];
      return yb = class {
        constructor() {
          this.camera = (0, Uy.l)(this, Sy), this.keysUp = (0, Uy.l)(this, Ey, [38]), this.keysDown = ((0, Uy.l)(this, ly), (0, Uy.l)(this, mb, [40])), this.keysLeft = ((0, Uy.l)(this, Cy), (0, Uy.l)(this, Ty, [37])), this.keysRight = ((0, Uy.l)(this, Jy), (0, Uy.l)(this, gb, [39])), this.keysReset = ((0, Uy.l)(this, Gy), (0, Uy.l)(this, Ry, [220])), this.keysZoomIn = ((0, Uy.l)(this, vb), (0, Uy.l)(this, ib, [187, 107])), this.keysZoomOut = ((0, Uy.l)(this, My), (0, Uy.l)(this, Yy, [189, 109])), this.panningSensibility = ((0, Uy.l)(this, Xy), (0, Uy.l)(this, ny, 50)), this.zoomingSensibility = ((0, Uy.l)(this, uy), (0, Uy.l)(this, rb, 25)), this.angularSpeed = ((0, Uy.l)(this, Hy), (0, Uy.l)(this, ab, .01)), this._useAltToZoom = ((0, Uy.l)(this, Fy), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Zy.m, this._panDirection = new Zy.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(yb) {
          this._useAltToZoom = yb, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const yb = this.camera.movement.input,
            bb = yb.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && bb ? yb.inputMap.splice(yb.inputMap.indexOf(bb), 1) : this._useAltToZoom && !bb && yb.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(yb) {
          yb = Vy.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.kWy(), this._engine = this._scene.xh(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((bb => {
            const Wy = bb.event;
            if (!Wy.metaKey)
              if (bb.type === Oy.b.KEYDOWN) {
                if (this._ctrlPressed = Wy.ctrlKey, this._altPressed = Wy.altKey, -1 !== this.keysUp.indexOf(Wy.keyCode) || -1 !== this.keysDown.indexOf(Wy.keyCode) || -1 !== this.keysLeft.indexOf(Wy.keyCode) || -1 !== this.keysRight.indexOf(Wy.keyCode) || -1 !== this.keysReset.indexOf(Wy.keyCode) || -1 !== this.keysZoomIn.indexOf(Wy.keyCode) || -1 !== this.keysZoomOut.indexOf(Wy.keyCode)) {
                  -1 === this._keys.indexOf(Wy.keyCode) && this._keys.push(Wy.keyCode), Wy.preventDefault && (yb || Wy.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Wy.keyCode) || -1 !== this.keysDown.indexOf(Wy.keyCode) || -1 !== this.keysLeft.indexOf(Wy.keyCode) || -1 !== this.keysRight.indexOf(Wy.keyCode) || -1 !== this.keysReset.indexOf(Wy.keyCode) || -1 !== this.keysZoomIn.indexOf(Wy.keyCode) || -1 !== this.keysZoomOut.indexOf(Wy.keyCode)) {
              const bb = this._keys.indexOf(Wy.keyCode);
              bb >= 0 && this._keys.splice(bb, 1), Wy.preventDefault && (yb || Wy.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const yb = this.camera,
              bb = yb.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Wy = this._rotateDirection.set(0, 0),
              Uy = this._panDirection.set(0, 0);
            let hy = 0,
              fy = 0;
            for (let Zy = 0; Zy < this._keys.length; Zy++) {
              const cb = this._keys[Zy];
              if (this._keyboardConditions.key = cb, -1 === this.keysReset.indexOf(cb)) {
                const yb = bb.resolveInteraction("keyboard", this._keyboardConditions);
                if (yb)
                  if ("pan" === yb.interaction) fy = Math.max(fy, yb.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(cb) ? Uy.x -= 1 : -1 !== this.keysRight.indexOf(cb) ? Uy.x += 1 : -1 !== this.keysUp.indexOf(cb) ? Uy.y += 1 : -1 !== this.keysDown.indexOf(cb) && (Uy.y -= 1);
                  else if ("zoom" === yb.interaction) {
                  const Wy = yb.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(cb) || -1 !== this.keysZoomIn.indexOf(cb) ? bb.handlers.zoom(Wy) : -1 === this.keysDown.indexOf(cb) && -1 === this.keysZoomOut.indexOf(cb) || bb.handlers.zoom(-Wy)
                } else "rotate" === yb.interaction && (hy = Math.max(hy, yb.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(cb) ? Wy.x -= 1 : -1 !== this.keysRight.indexOf(cb) ? Wy.x += 1 : -1 !== this.keysUp.indexOf(cb) ? Wy.y -= 1 : -1 !== this.keysDown.indexOf(cb) && (Wy.y += 1))
              } - 1 !== this.keysReset.indexOf(cb) && yb.useInputToRestoreState && yb.restoreState()
            }
            0 === Wy.x && 0 === Wy.y || (Wy.normalize().scaleInPlace(hy), bb.handlers.rotate(Wy.x, Wy.y)), 0 === Uy.x && 0 === Uy.y || (Uy.normalize().scaleInPlace(fy), bb.handlers.pan(Uy.x, Uy.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Zy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.T)()], ey = [(0, hy.T)()], qb = [(0, hy.T)()], sy = [(0, hy.T)()], (0, Uy.j)(yb, null, sy, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAltToZoom" in yb,
            get: yb => yb.useAltToZoom
          },
          metadata: Zy
        }, null, Sy), (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysUp" in yb,
            get: yb => yb.keysUp,
            set: (yb, bb) => {
              yb.keysUp = bb
            }
          },
          metadata: Zy
        }, Ey, ly), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysDown" in yb,
            get: yb => yb.keysDown,
            set: (yb, bb) => {
              yb.keysDown = bb
            }
          },
          metadata: Zy
        }, mb, Cy), (0, Uy.j)(null, null, fy, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysLeft" in yb,
            get: yb => yb.keysLeft,
            set: (yb, bb) => {
              yb.keysLeft = bb
            }
          },
          metadata: Zy
        }, Ty, Jy), (0, Uy.j)(null, null, cb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysRight" in yb,
            get: yb => yb.keysRight,
            set: (yb, bb) => {
              yb.keysRight = bb
            }
          },
          metadata: Zy
        }, gb, Gy), (0, Uy.j)(null, null, Py, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysReset" in yb,
            get: yb => yb.keysReset,
            set: (yb, bb) => {
              yb.keysReset = bb
            }
          },
          metadata: Zy
        }, Ry, vb), (0, Uy.j)(null, null, oy, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysZoomIn" in yb,
            get: yb => yb.keysZoomIn,
            set: (yb, bb) => {
              yb.keysZoomIn = bb
            }
          },
          metadata: Zy
        }, ib, My), (0, Uy.j)(null, null, By, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: yb => "keysZoomOut" in yb,
            get: yb => yb.keysZoomOut,
            set: (yb, bb) => {
              yb.keysZoomOut = bb
            }
          },
          metadata: Zy
        }, Yy, Xy), (0, Uy.j)(null, null, Ky, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: yb => "panningSensibility" in yb,
            get: yb => yb.panningSensibility,
            set: (yb, bb) => {
              yb.panningSensibility = bb
            }
          },
          metadata: Zy
        }, ny, uy), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: yb => "zoomingSensibility" in yb,
            get: yb => yb.zoomingSensibility,
            set: (yb, bb) => {
              yb.zoomingSensibility = bb
            }
          },
          metadata: Zy
        }, rb, Hy), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: yb => "angularSpeed" in yb,
            get: yb => yb.angularSpeed,
            set: (yb, bb) => {
              yb.angularSpeed = bb
            }
          },
          metadata: Zy
        }, ab, Fy), Zy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zy
        })
      })(), yb
    })();
    Ty.e.ArcRotateCameraKeyboardMoveInput = Ry;
    var vb = Wy(36434),
      ib = Wy(38664);
    let My = (() => {
      var yb;
      let bb, Wy, fy, Py = [],
        oy = [],
        Ky = [],
        qb = [],
        sy = [],
        Sy = [];
      return yb = class {
        constructor() {
          this.wheelPrecision = (0, Uy.l)(this, Py, 3), this.zoomToMouseLocation = ((0, Uy.l)(this, oy), (0, Uy.l)(this, Ky, !1)), this.wheelDeltaPercentage = ((0, Uy.l)(this, qb), (0, Uy.l)(this, sy, 0)), this.customComputeDeltaFromMouseWheel = ((0, Uy.l)(this, Sy), null), this._viewOffset = new Zy.n(0, 0, 0), this._globalOffset = new Zy.n(0, 0, 0), this._inertialPanning = Zy.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(yb, bb) {
          let Wy;
          const Uy = .01 * yb * this.wheelDeltaPercentage * bb;
          return Wy = yb > 0 ? Uy / (1 + this.wheelDeltaPercentage) : Uy * (1 + this.wheelDeltaPercentage), Wy
        }
        attachControl(yb) {
          yb = Vy.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = bb => {
            if (bb.type !== By.d.POINTERWHEEL) return;
            const Wy = bb.event;
            let Uy;
            const hy = Wy.deltaMode === ib.c.DOM_DELTA_LINE ? 40 : 1,
              fy = -Wy.deltaY * hy;
            if (this.customComputeDeltaFromMouseWheel) Uy = this.customComputeDeltaFromMouseWheel(fy, this, Wy);
            else if (this.wheelDeltaPercentage) {
              if (Uy = this._computeDeltaFromMouseWheelLegacyEvent(fy, this.camera.radius), Uy > 0) {
                const yb = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let bb = this.camera.radius,
                  Wy = yb + Uy;
                for (let Uy = 0; Uy < 20 && !(bb <= Wy) && !(Math.abs(Wy * this.camera.inertia) < .001); Uy++) bb -= Wy, Wy *= this.camera.inertia;
                bb = (0, cb.Clamp)(bb, 0, Number.MAX_VALUE), Uy = this._computeDeltaFromMouseWheelLegacyEvent(fy, bb)
              }
            } else {
              const yb = this.camera.movement.input.getEntry("wheel", "zoom");
              Uy = fy * (yb?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Uy && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Uy)) : this.camera.movement.zoomAccumulatedPixels += Uy), Wy.preventDefault && (yb || Wy.preventDefault())
          }, this._observer = this.camera.kWy()._inputManager._addCameraPointerObserver(this._wheel, By.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.dfy(0)
        }
        detachControl() {
          this._observer && (this.camera.kWy()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const yb = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(yb.inertialAlphaOffset) + Math.abs(yb.inertialBetaOffset) + Math.abs(yb.inertialRadiusOffset)) {
            this._updateHitPlane(), yb.target.addInPlace(this._inertialPanning), yb.radius -= this._zoomToMouseRadiusOffset;
            const bb = yb.movement.getFrameIndependentDecay(yb.inertia);
            this._inertialPanning.scaleInPlace(bb), this._zoomToMouseRadiusOffset *= bb, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < ey.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const yb = this.camera,
            bb = yb.target.subtract(yb.position);
          this._hitPlane = vb.c.FromPositionAndNormal(yb.target, bb)
        }
        _getPosition() {
          const yb = this.camera,
            bb = yb.kWy(),
            Wy = bb.createPickingRay(bb.pointerX, bb.pointerY, Zy.c.Identity(), yb, !1);
          0 === yb.targetScreenOffset.x && 0 === yb.targetScreenOffset.y || (this._viewOffset.set(yb.targetScreenOffset.x, yb.targetScreenOffset.y, 0), yb.getViewMatrix().invertToRef(yb._cameraTransformMatrix), this._globalOffset = Zy.n.TransformNormal(this._viewOffset, yb._cameraTransformMatrix), Wy.origin.addInPlace(this._globalOffset));
          let Uy = 0;
          return this._hitPlane && (Uy = Wy.intersectsPlane(this._hitPlane) ?? 0), Wy.origin.addInPlace(Wy.direction.scaleInPlace(Uy))
        }
        _zoomToMouse(yb) {
          const bb = this.camera,
            Wy = 1 - bb.inertia,
            Uy = bb.movement.getFrameIndependentInputScale(bb.inertia);
          if (bb.lowerRadiusLimit) {
            const hy = bb.lowerRadiusLimit ?? 0;
            bb.radius - (this._zoomToMouseRadiusOffset + yb * Uy) / Wy < hy && (yb = ((bb.radius - hy) * Wy - this._zoomToMouseRadiusOffset) / Uy)
          }
          if (bb.upperRadiusLimit) {
            const hy = bb.upperRadiusLimit ?? 0;
            bb.radius - (this._zoomToMouseRadiusOffset + yb * Uy) / Wy > hy && (yb = ((bb.radius - hy) * Wy - this._zoomToMouseRadiusOffset) / Uy)
          }
          const hy = yb / Wy / bb.radius,
            fy = this._getPosition(),
            cb = Zy.j.dU[6];
          fy.subtractToRef(bb.target, cb), cb.scaleInPlace(hy), cb.scaleInPlace(Wy), cb.scaleInPlace(Uy), this._inertialPanning.addInPlace(cb), this._zoomToMouseRadiusOffset += yb * Uy
        }
        _zeroIfClose(yb) {
          Math.abs(yb.x) < ey.e && (yb.x = 0), Math.abs(yb.y) < ey.e && (yb.y = 0), Math.abs(yb.z) < ey.e && (yb.z = 0)
        }
      }, (() => {
        const Zy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelPrecision" in yb,
            get: yb => yb.wheelPrecision,
            set: (yb, bb) => {
              yb.wheelPrecision = bb
            }
          },
          metadata: Zy
        }, Py, oy), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: yb => "zoomToMouseLocation" in yb,
            get: yb => yb.zoomToMouseLocation,
            set: (yb, bb) => {
              yb.zoomToMouseLocation = bb
            }
          },
          metadata: Zy
        }, Ky, qb), (0, Uy.j)(null, null, fy, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: yb => "wheelDeltaPercentage" in yb,
            get: yb => yb.wheelDeltaPercentage,
            set: (yb, bb) => {
              yb.wheelDeltaPercentage = bb
            }
          },
          metadata: Zy
        }, sy, Sy), Zy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zy
        })
      })(), yb
    })();
    Ty.e.ArcRotateCameraMouseWheelInput = My;
    var Yy, Xy, ny = Wy(38347);
    class uy extends Ty.i {
      constructor(yb) {
        super(yb)
      }
      addMouseWheel() {
        return this.add(new My), this
      }
      addPointers() {
        return this.add(new Gy), this
      }
      addKeyboard() {
        return this.add(new Ry), this
      }
    }(Yy = uy.prototype).addVRDeviceOrientation ?? (Yy.addVRDeviceOrientation = (0, ny.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Xy = uy.prototype).addGamepad ?? (Xy.addGamepad = (0, ny.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var rb = Wy(35909),
      Hy = Wy(38715),
      ab = Wy(38721);
    class Fy extends Hy.b {
      constructor(yb, bb, Wy) {
        super(yb, bb, Wy), this.input = new ab.d({
          pan: (yb, bb) => {
            this.panAccumulatedPixels.x += yb, this.panAccumulatedPixels.y += bb
          },
          rotate: (yb, bb) => {
            this.rotationAccumulatedPixels.x += yb, this.rotationAccumulatedPixels.y += bb
          },
          zoom: yb => {
            this.zoomAccumulatedPixels += yb
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

    function py(yb, bb) {
      return isNaN(yb) ? bb : yb
    }
    let Ly = (() => {
        var yb;
        let bb, Wy, Py, By, Ky, sy, Sy, Ty, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy, ny, rb, Hy, ab, Ly, Qy, jb, Dy, tb, wy, kb = Cy.e,
          Ny = [],
          zb = [],
          Iy = [],
          xb = [],
          Ay = [],
          dy = [],
          yW = [],
          bW = [],
          Wb = [],
          Ub = [],
          hb = [],
          fb = [],
          Zb = [],
          cW = [],
          Pb = [],
          ob = [],
          Bb = [],
          Kb = [],
          eb = [],
          qW = [],
          sb = [],
          Sb = [],
          Eb = [],
          lb = [],
          mW = [],
          Cb = [],
          Tb = [],
          Vb = [],
          Jb = [],
          gW = [],
          Gb = [],
          Ob = [],
          Rb = [],
          vW = [],
          iW = [],
          Mb = [],
          Yb = [],
          Xb = [],
          nb = [],
          ub = [],
          rW = [],
          Hb = [],
          aW = [],
          Fb = [],
          pb = [],
          Lb = [],
          Qb = [];
        return yb = class extends kb {
          get target() {
            return this.jfy
          }
          set target(yb) {
            this.setTarget(yb)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(yb) {
            yb && this.setTarget(yb)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(yb) {
            this.setPosition(yb)
          }
          set upVector(yb) {
            this._upToYMatrix || (this._yToUpMatrix = new Zy.c, this._upToYMatrix = new Zy.c, this._upVector = Zy.n.Zero()), yb.normalize(), this._upVector.Coy(yb), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Zy.c.RotationAlignToRef(Zy.n.UpReadOnly, this._upVector, this._yToUpMatrix), Zy.c.RotationAlignToRef(this._upVector, Zy.n.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const yb = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(yb) < this._rotationEpsilon ? 0 : yb
          }
          set inertialAlphaOffset(yb) {
            this._inertialAlphaOffset = yb, 0 === yb && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const yb = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(yb) < this._rotationEpsilon ? 0 : yb
          }
          set inertialBetaOffset(yb) {
            this._inertialBetaOffset = yb, 0 === yb && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const yb = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(yb) < this._rotationEpsilon ? 0 : yb
          }
          set inertialRadiusOffset(yb) {
            this._inertialRadiusOffset = yb, 0 === yb && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(yb) {
            this._panningInertia = yb, this.movement && (this.movement.panInertia = yb)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(yb) {
            this._inertia = yb, this.movement && (this.movement.rotationInertia = yb, this.movement.zoomInertia = yb)
          }
          get angularSensibilityX() {
            const yb = this.inputs.attached.pointers;
            return yb ? yb.angularSensibilityX : 0
          }
          set angularSensibilityX(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.angularSensibilityX = yb)
          }
          get angularSensibilityY() {
            const yb = this.inputs.attached.pointers;
            return yb ? yb.angularSensibilityY : 0
          }
          set angularSensibilityY(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.angularSensibilityY = yb)
          }
          get pinchPrecision() {
            const yb = this.inputs.attached.pointers;
            return yb ? yb.pinchPrecision : 0
          }
          set pinchPrecision(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.pinchPrecision = yb)
          }
          get pinchDeltaPercentage() {
            const yb = this.inputs.attached.pointers;
            return yb ? yb.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.pinchDeltaPercentage = yb)
          }
          get useNaturalPinchZoom() {
            const yb = this.inputs.attached.pointers;
            return !!yb && yb.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.useNaturalPinchZoom = yb)
          }
          get panningSensibility() {
            const yb = this.inputs.attached.pointers;
            return yb ? yb.panningSensibility : 0
          }
          set panningSensibility(yb) {
            const bb = this.inputs.attached.pointers;
            bb && (bb.panningSensibility = yb)
          }
          get keysUp() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysUp : []
          }
          set keysUp(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysUp = yb)
          }
          get keysDown() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysDown : []
          }
          set keysDown(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysDown = yb)
          }
          get keysLeft() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysLeft : []
          }
          set keysLeft(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysLeft = yb)
          }
          get keysRight() {
            const yb = this.inputs.attached.keyboard;
            return yb ? yb.keysRight : []
          }
          set keysRight(yb) {
            const bb = this.inputs.attached.keyboard;
            bb && (bb.keysRight = yb)
          }
          get wheelPrecision() {
            const yb = this.inputs.attached.mousewheel;
            return yb ? yb.wheelPrecision : 0
          }
          set wheelPrecision(yb) {
            const bb = this.inputs.attached.mousewheel;
            bb && (bb.wheelPrecision = yb)
          }
          get zoomToMouseLocation() {
            const yb = this.inputs.attached.mousewheel;
            return !!yb && yb.zoomToMouseLocation
          }
          set zoomToMouseLocation(yb) {
            const bb = this.inputs.attached.mousewheel;
            bb && (bb.zoomToMouseLocation = yb)
          }
          get wheelDeltaPercentage() {
            const yb = this.inputs.attached.mousewheel;
            return yb ? yb.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(yb) {
            const bb = this.inputs.attached.mousewheel;
            bb && (bb.wheelDeltaPercentage = yb)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(yb) {
            this._useCtrlForPanningInternal = yb;
            const bb = this.movement.input,
              Wy = bb.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !yb && Wy ? bb.inputMap.splice(bb.inputMap.indexOf(Wy), 1) : yb && !Wy && bb.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Uy = bb.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !yb && Uy ? bb.inputMap.splice(bb.inputMap.indexOf(Uy), 1) : yb && !Uy && bb.addEntry({
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
          set _panningMouseButton(yb) {
            this._panningMouseButtonInternal = yb;
            const bb = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            bb && (bb.button = yb)
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
          set useBouncingBehavior(yb) {
            yb !== this.useBouncingBehavior && (yb ? (this._bouncingBehavior = new Ey, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(yb) {
            yb !== this.useFramingBehavior && (yb ? (this._framingBehavior = new ly, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(yb) {
            yb !== this.useAutoRotationBehavior && (yb ? (this._autoRotationBehavior = new qb, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(yb, bb, Wy, hy, cb, Py) {
            var oy;
            let By = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(yb, Zy.n.Zero(), Py, By), oy = this, this.alpha = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, void 0)), this.beta = ((0, Uy.l)(this, Iy), (0, Uy.l)(this, xb, void 0)), this.radius = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, void 0)), this.jfy = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, void 0)), this._targetHost = ((0, Uy.l)(this, hb), (0, Uy.l)(this, fb, void 0)), this._upToYMatrix = (0, Uy.l)(this, Zb), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Uy.l)(this, cW, null), this.upperAlphaLimit = ((0, Uy.l)(this, Pb), (0, Uy.l)(this, ob, null)), this.lowerBetaLimit = ((0, Uy.l)(this, Bb), (0, Uy.l)(this, Kb, .01)), this.upperBetaLimit = ((0, Uy.l)(this, eb), (0, Uy.l)(this, qW, Math.PI - .01)), this.lowerRadiusLimit = ((0, Uy.l)(this, sb), (0, Uy.l)(this, Sb, null)), this.upperRadiusLimit = ((0, Uy.l)(this, Eb), (0, Uy.l)(this, lb, null)), this.lowerTargetYLimit = ((0, Uy.l)(this, mW), (0, Uy.l)(this, Cb, -1 / 0)), this.inertialPanningX = ((0, Uy.l)(this, Tb), (0, Uy.l)(this, Vb, 0)), this.inertialPanningY = ((0, Uy.l)(this, Jb), (0, Uy.l)(this, gW, 0)), this.pinchToPanMaxDistance = ((0, Uy.l)(this, Gb), (0, Uy.l)(this, Ob, 20)), this.panningDistanceLimit = ((0, Uy.l)(this, Rb), (0, Uy.l)(this, vW, null)), this.panningOriginTarget = ((0, Uy.l)(this, iW), (0, Uy.l)(this, Mb, Zy.n.Zero())), this._panningInertia = ((0, Uy.l)(this, Yb), .9), this._inertia = .9, this.zoomOnFactor = (0, Uy.l)(this, Xb, 1), this.targetScreenOffset = ((0, Uy.l)(this, nb), (0, Uy.l)(this, ub, Zy.m.Zero())), this.allowUpsideDown = ((0, Uy.l)(this, rW), (0, Uy.l)(this, Hb, !0)), this.useInputToRestoreState = ((0, Uy.l)(this, aW), (0, Uy.l)(this, Fb, !0)), this.restoreStateInterpolationFactor = ((0, Uy.l)(this, pb), (0, Uy.l)(this, Lb, 0)), this._currentInterpolationFactor = ((0, Uy.l)(this, Qb), 0), this._viewMatrix = new Zy.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Zy.n(1, 1, 0), this._transformedDirection = new Zy.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new fy.c, this.checkCollisions = !1, this.collisionRadius = new Zy.n(.5, .5, .5), this._previousPosition = Zy.n.Zero(), this._collisionVelocity = Zy.n.Zero(), this._newPosition = Zy.n.Zero(), this._computationVector = Zy.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Zy.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new Zy.m(NaN, NaN), this._onCollisionPositionChange = function(yb, bb) {
              let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Wy ? (oy.setPosition(bb), oy.Jb && oy.Jb(Wy)) : oy._previousPosition.Coy(oy._position);
              const Uy = Math.cos(oy.alpha),
                hy = Math.sin(oy.alpha),
                fy = Math.cos(oy.beta);
              let Zy = Math.sin(oy.beta);
              0 === Zy && (Zy = 1e-4);
              const cb = oy._getTargetPosition();
              oy._computationVector.vcy(oy.radius * Uy * Zy, oy.radius * fy, oy.radius * hy * Zy), cb.addToRef(oy._computationVector, oy._newPosition), oy._position.Coy(oy._newPosition);
              let Py = oy.upVector;
              oy.allowUpsideDown && oy.beta < 0 && (Py = Py.clone(), Py = Py.gZ()), oy._computeViewMatrix(oy._position, cb, Py), oy._viewMatrix.addAtIndex(12, oy.targetScreenOffset.x), oy._viewMatrix.addAtIndex(13, oy.targetScreenOffset.y), oy._collisionTriggered = !1
            }, this.jfy = Zy.n.Zero(), cb && this.setTarget(cb), this.alpha = bb, this.beta = Wy, this.radius = hy, this.getViewMatrix(), this.inputs = new uy(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Fy(this.kWy(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.jfy = new Zy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Zy.m.Zero()
          }
          _updateCache(yb) {
            yb || super._updateCache(), this._cache.jfy.Coy(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Coy(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const yb = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? yb.addToRef(this._targetBoundingCenter, this.jfy) : this.jfy.Coy(yb)
            }
            const yb = this._getLockedTargetPosition();
            return yb || this.jfy
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > ey.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              fy = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != fy ? this._currentInterpolationFactor = fy : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = py(yb, this._goalAlpha), this._goalBeta = py(bb, this._goalBeta), this._goalRadius = py(Wy, this._goalRadius), this._goalTarget.set(py(Uy.x, this._goalTarget.x), py(Uy.y, this._goalTarget.y), py(Uy.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(py(hy.x, this._goalTargetScreenOffset.x), py(hy.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, cb.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, cb.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, cb.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, cb.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.jfy.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(yb, bb) {
            let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const hy = arguments;
            bb = Vy.k.BackCompatCameraNoPreventDefault(hy), this._useCtrlForPanning = Wy, this._panningMouseButton = Uy, "boolean" === typeof hy[0] && (hy.length > 1 && (this._useCtrlForPanning = hy[1]), hy.length > 2 && (this._panningMouseButton = hy[2])), this.inputs.attachElement(bb), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(yb, bb, Wy) {
            const Uy = this.invertRotation ? -1 : 1;
            let hy = yb * this._calculateHandednessMultiplier();
            this.beta < 0 && (hy *= -1), this.alpha += hy * Uy, this.beta += bb * Uy, this.radius -= Wy
          }
          _applyPanDelta(yb, bb) {
            const Wy = Zy.j.dU[0].vcy(yb, bb, bb);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Wy.multiplyInPlace(this.panningAxis), Zy.n.TransformNormalToRef(Wy, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const yb = this.upVector,
                bb = Zy.n.CrossToRef(this._transformedDirection, yb, this._transformedDirection);
              Zy.n.CrossToRef(yb, bb, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.jfy);
                Zy.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.jfy.Coy(this._transformedDirection)
              } else {
                if (this.parent) {
                  const yb = Zy.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(yb), yb.transposeToRef(yb), Zy.n.TransformCoordinatesToRef(this._transformedDirection, yb, this._transformedDirection)
                }
                this.jfy.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let yb = !1;
            this.movement.computeCurrentFrameDeltas();
            const bb = this.movement.rotationDeltaCurrentFrame,
              Wy = this.movement.zoomDeltaCurrentFrame,
              Uy = this.movement.panDeltaCurrentFrame;
            if (0 === bb.x && 0 === bb.y && 0 === Wy && 0 === Uy.x && 0 === Uy.y || (yb = !0, 0 === bb.x && 0 === bb.y && 0 === Wy || this._applyRotationAndZoomDelta(bb.x, bb.y, Wy), 0 === Uy.x && 0 === Uy.y || this._applyPanDelta(Uy.x, Uy.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), yb = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const bb = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < bb && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < bb && (this.inertialPanningY = 0), yb = !0
            }
            if (yb) this.stopInterpolation();
            else if (this._isInterpolating) {
              let yb = !1;
              const bb = this._scene.xh().getDeltaTime() / 1e3,
                Wy = 1 - Math.pow(2, -bb / this._currentInterpolationFactor),
                Uy = py(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const bb = Zy.j.dU[0].set(py(this._goalTarget.x, this.jfy.x), py(this._goalTarget.y, this.jfy.y), py(this._goalTarget.z, this.jfy.z));
                Zy.n.LerpToRef(this.target, bb, Wy, this.jfy), 10 * Zy.n.Distance(this.target, bb) / Uy < ey.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Coy(bb), this.setTarget(this.target, !1, !0, !0)) : yb = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const bb = Zy.e.RotationAlphaBetaGammaToRef(py(this._goalAlpha, this.alpha), py(this._goalBeta, this.beta), 0, Zy.j.Quaternion[0]),
                  Uy = Zy.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Zy.j.Quaternion[1]),
                  hy = Zy.e.SlerpToRef(Uy, bb, Wy, Zy.j.Quaternion[2]);
                hy.normalize();
                const fy = hy.toAlphaBetaGammaToRef(Zy.j.dU[0]);
                if (this.alpha = fy.x, this.beta = fy.y, hy.isApprox(bb, ey.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const yb = bb.toAlphaBetaGammaToRef(Zy.j.dU[0]);
                  this.alpha = yb.x, this.beta = yb.y
                } else yb = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Uy - this.radius) * Wy, Math.abs(Uy / this.radius - 1) < ey.e ? (this._goalRadius = NaN, this.radius = Uy) : yb = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const bb = Zy.j.Vector2[0].set(py(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), py(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Zy.m.LerpToRef(this.targetScreenOffset, bb, Wy, this.targetScreenOffset), Zy.m.Distance(this.targetScreenOffset, bb) < ey.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Coy(bb)) : yb = !0
              }
              this._isInterpolating = yb
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Zy.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const yb = this.alpha;
            var bb, Wy;
            this.alpha = function(yb) {
              let bb = Math.PI / 2;
              return 0 === yb.x && 0 === yb.z || (bb = Math.acos(yb.x / Math.sqrt(Math.pow(yb.x, 2) + Math.pow(yb.z, 2)))), yb.z < 0 && (bb = 2 * Math.PI - bb), bb
            }(this._computationVector), this.beta = (bb = this._computationVector.y, Wy = this.radius, Math.acos(bb / Wy));
            const Uy = Math.round((yb - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Uy * Math.PI, this._checkLimits()
          }
          setPosition(yb) {
            this._position.equals(yb) || (this._position.Coy(yb), this.rebuildAnglesAndRadius())
          }
          setTarget(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Uy = this.overrideCloneAlphaBetaRadius ?? Uy, yb.computeWorldMatrix) bb && yb.qUy ? this._targetBoundingCenter = yb.qUy().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, yb.computeWorldMatrix(), this._targetHost = yb, this.jfy = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const bb = yb,
                Uy = this._getTargetPosition();
              if (Uy && !Wy && Uy.equals(bb)) return;
              this._targetHost = null, this.jfy = bb, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Uy || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const yb = Math.cos(this.alpha),
              bb = Math.sin(this.alpha),
              Wy = Math.cos(this.beta);
            let Uy = Math.sin(this.beta);
            0 === Uy && (Uy = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const hy = this._getTargetPosition();
            if (this._computationVector.vcy(this.radius * yb * Uy, this.radius * Wy, this.radius * bb * Uy), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Zy.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), hy.addToRef(this._computationVector, this._newPosition), this.kWy().collisionsEnabled && this.checkCollisions) {
              const yb = this.kWy().collisionCoordinator;
              this._collider || (this._collider = yb.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, yb.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Coy(this._newPosition);
              let yb = this.upVector;
              this.allowUpsideDown && Uy < 0 && (yb = yb.gZ()), this._computeViewMatrix(this._position, hy, yb), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Coy(hy), this._viewMatrix
          }
          zoomOn(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            yb = yb || this.kWy().meshes;
            const Wy = oy.c.MinMax(yb);
            let Uy = this._calculateLowerRadiusFromModelBoundingSphere(Wy.min, Wy.max);
            if (Uy = Math.max(Math.min(Uy, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Uy * this.zoomOnFactor, this.mode === mb.b.ORTHOGRAPHIC_CAMERA) {
              const yb = this.kWy().xh().getAspectRatio(this),
                bb = Uy * this.zoomOnFactor / 2;
              this.orthoLeft = -bb * yb, this.orthoRight = bb * yb, this.orthoBottom = -bb, this.orthoTop = bb
            }
            this.focusOn({
              min: Wy.min,
              max: Wy.max,
              distance: Uy
            }, bb)
          }
          focusOn(yb) {
            let bb, Wy, Uy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === yb.min) {
              const Uy = yb || this.kWy().meshes;
              bb = oy.c.MinMax(Uy), Wy = Zy.n.Distance(bb.min, bb.max)
            } else {
              bb = yb, Wy = yb.distance
            }
            this.jfy = oy.c.Center(bb), Uy || (this.maxZ = 2 * Wy)
          }
          createRigCamera(bb, Wy) {
            let Uy = 0;
            switch (this.cameraRigMode) {
              case mb.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case mb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case mb.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case mb.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case mb.b.RIG_MODE_VR:
                Uy = this._cameraRigParams.stereoHalfAngle * (0 === Wy ? 1 : -1);
                break;
              case mb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Uy = this._cameraRigParams.stereoHalfAngle * (0 === Wy ? -1 : 1)
            }
            const hy = new yb(bb, this.alpha + Uy, this.beta, this.radius, this.jfy, this.kWy());
            return hy._cameraRigParams = {}, hy.isRigCamera = !0, hy.rigParent = this, hy.upVector = this.upVector, hy.mode = this.mode, hy.orthoLeft = this.orthoLeft, hy.orthoRight = this.orthoRight, hy.orthoBottom = this.orthoBottom, hy.orthoTop = this.orthoTop, hy
          }
          _updateRigCameras() {
            const yb = this._rigCameras[0],
              bb = this._rigCameras[1];
            switch (yb.beta = bb.beta = this.beta, this.cameraRigMode) {
              case mb.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case mb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case mb.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case mb.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case mb.b.RIG_MODE_VR:
                yb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, bb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case mb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                yb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, bb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Uy = Zy.n.Distance(yb, bb),
              hy = this.kWy().xh().getAspectRatio(this),
              fy = Math.tan(this.fov / 2),
              cb = fy * hy,
              Py = .5 * Uy * Wy,
              oy = Py * Math.sqrt(1 + 1 / (cb * cb)),
              By = Py * Math.sqrt(1 + 1 / (fy * fy));
            return Math.max(oy, By)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(kb[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], Py = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.P)("target")], sy = [(0, hy.F)("targetHost")], Sy = [(0, hy.T)()], Ty = [(0, hy.T)()], Jy = [(0, hy.T)()], gb = [(0, hy.T)()], Gy = [(0, hy.T)()], Oy = [(0, hy.T)()], Ry = [(0, hy.T)()], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], Yy = [(0, hy.T)()], Xy = [(0, hy.T)()], ny = [(0, hy.T)()], rb = [(0, hy.T)()], Hy = [(0, hy.P)()], ab = [(0, hy.T)()], Ly = [(0, hy.T)()], Qy = [(0, hy.T)()], jb = [(0, hy.N)()], Dy = [(0, hy.T)()], tb = [(0, hy.T)()], wy = [(0, hy.T)()], (0, Uy.j)(yb, null, Sy, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "inertialAlphaOffset" in yb,
              get: yb => yb.inertialAlphaOffset
            },
            metadata: fy
          }, null, Ny), (0, Uy.j)(yb, null, Ty, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "inertialBetaOffset" in yb,
              get: yb => yb.inertialBetaOffset
            },
            metadata: fy
          }, null, Ny), (0, Uy.j)(yb, null, Jy, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "inertialRadiusOffset" in yb,
              get: yb => yb.inertialRadiusOffset
            },
            metadata: fy
          }, null, Ny), (0, Uy.j)(yb, null, ab, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: yb => "panningInertia" in yb,
              get: yb => yb.panningInertia
            },
            metadata: fy
          }, null, Ny), (0, Uy.j)(yb, null, Ly, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: yb => "zoomToMouseLocation" in yb,
              get: yb => yb.zoomToMouseLocation
            },
            metadata: fy
          }, null, Ny), (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "alpha" in yb,
              get: yb => yb.alpha,
              set: (yb, bb) => {
                yb.alpha = bb
              }
            },
            metadata: fy
          }, zb, Iy), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: yb => "beta" in yb,
              get: yb => yb.beta,
              set: (yb, bb) => {
                yb.beta = bb
              }
            },
            metadata: fy
          }, xb, Ay), (0, Uy.j)(null, null, Py, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: yb => "radius" in yb,
              get: yb => yb.radius,
              set: (yb, bb) => {
                yb.radius = bb
              }
            },
            metadata: fy
          }, dy, yW), (0, Uy.j)(null, null, By, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: yb => "overrideCloneAlphaBetaRadius" in yb,
              get: yb => yb.overrideCloneAlphaBetaRadius,
              set: (yb, bb) => {
                yb.overrideCloneAlphaBetaRadius = bb
              }
            },
            metadata: fy
          }, bW, Wb), (0, Uy.j)(null, null, Ky, {
            kind: "field",
            name: "jfy",
            static: !1,
            private: !1,
            access: {
              has: yb => "jfy" in yb,
              get: yb => yb.jfy,
              set: (yb, bb) => {
                yb.jfy = bb
              }
            },
            metadata: fy
          }, Ub, hb), (0, Uy.j)(null, null, sy, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: yb => "_targetHost" in yb,
              get: yb => yb._targetHost,
              set: (yb, bb) => {
                yb._targetHost = bb
              }
            },
            metadata: fy
          }, fb, Zb), (0, Uy.j)(null, null, gb, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "lowerAlphaLimit" in yb,
              get: yb => yb.lowerAlphaLimit,
              set: (yb, bb) => {
                yb.lowerAlphaLimit = bb
              }
            },
            metadata: fy
          }, cW, Pb), (0, Uy.j)(null, null, Gy, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "upperAlphaLimit" in yb,
              get: yb => yb.upperAlphaLimit,
              set: (yb, bb) => {
                yb.upperAlphaLimit = bb
              }
            },
            metadata: fy
          }, ob, Bb), (0, Uy.j)(null, null, Oy, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "lowerBetaLimit" in yb,
              get: yb => yb.lowerBetaLimit,
              set: (yb, bb) => {
                yb.lowerBetaLimit = bb
              }
            },
            metadata: fy
          }, Kb, eb), (0, Uy.j)(null, null, Ry, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "upperBetaLimit" in yb,
              get: yb => yb.upperBetaLimit,
              set: (yb, bb) => {
                yb.upperBetaLimit = bb
              }
            },
            metadata: fy
          }, qW, sb), (0, Uy.j)(null, null, vb, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "lowerRadiusLimit" in yb,
              get: yb => yb.lowerRadiusLimit,
              set: (yb, bb) => {
                yb.lowerRadiusLimit = bb
              }
            },
            metadata: fy
          }, Sb, Eb), (0, Uy.j)(null, null, ib, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "upperRadiusLimit" in yb,
              get: yb => yb.upperRadiusLimit,
              set: (yb, bb) => {
                yb.upperRadiusLimit = bb
              }
            },
            metadata: fy
          }, lb, mW), (0, Uy.j)(null, null, My, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "lowerTargetYLimit" in yb,
              get: yb => yb.lowerTargetYLimit,
              set: (yb, bb) => {
                yb.lowerTargetYLimit = bb
              }
            },
            metadata: fy
          }, Cb, Tb), (0, Uy.j)(null, null, Yy, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: yb => "inertialPanningX" in yb,
              get: yb => yb.inertialPanningX,
              set: (yb, bb) => {
                yb.inertialPanningX = bb
              }
            },
            metadata: fy
          }, Vb, Jb), (0, Uy.j)(null, null, Xy, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: yb => "inertialPanningY" in yb,
              get: yb => yb.inertialPanningY,
              set: (yb, bb) => {
                yb.inertialPanningY = bb
              }
            },
            metadata: fy
          }, gW, Gb), (0, Uy.j)(null, null, ny, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: yb => "pinchToPanMaxDistance" in yb,
              get: yb => yb.pinchToPanMaxDistance,
              set: (yb, bb) => {
                yb.pinchToPanMaxDistance = bb
              }
            },
            metadata: fy
          }, Ob, Rb), (0, Uy.j)(null, null, rb, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: yb => "panningDistanceLimit" in yb,
              get: yb => yb.panningDistanceLimit,
              set: (yb, bb) => {
                yb.panningDistanceLimit = bb
              }
            },
            metadata: fy
          }, vW, iW), (0, Uy.j)(null, null, Hy, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: yb => "panningOriginTarget" in yb,
              get: yb => yb.panningOriginTarget,
              set: (yb, bb) => {
                yb.panningOriginTarget = bb
              }
            },
            metadata: fy
          }, Mb, Yb), (0, Uy.j)(null, null, Qy, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: yb => "zoomOnFactor" in yb,
              get: yb => yb.zoomOnFactor,
              set: (yb, bb) => {
                yb.zoomOnFactor = bb
              }
            },
            metadata: fy
          }, Xb, nb), (0, Uy.j)(null, null, jb, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: yb => "targetScreenOffset" in yb,
              get: yb => yb.targetScreenOffset,
              set: (yb, bb) => {
                yb.targetScreenOffset = bb
              }
            },
            metadata: fy
          }, ub, rW), (0, Uy.j)(null, null, Dy, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: yb => "allowUpsideDown" in yb,
              get: yb => yb.allowUpsideDown,
              set: (yb, bb) => {
                yb.allowUpsideDown = bb
              }
            },
            metadata: fy
          }, Hb, aW), (0, Uy.j)(null, null, tb, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: yb => "useInputToRestoreState" in yb,
              get: yb => yb.useInputToRestoreState,
              set: (yb, bb) => {
                yb.useInputToRestoreState = bb
              }
            },
            metadata: fy
          }, Fb, pb), (0, Uy.j)(null, null, wy, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: yb => "restoreStateInterpolationFactor" in yb,
              get: yb => yb.restoreStateInterpolationFactor,
              set: (yb, bb) => {
                yb.restoreStateInterpolationFactor = bb
              }
            },
            metadata: fy
          }, Lb, Qb), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Qy = !1;
    Qy || (Qy = !0, Py.b.AddNodeConstructor("ArcRotateCamera", ((yb, bb) => () => new Ly(yb, 0, 0, 1, Zy.n.Zero(), bb))), (0, rb.e)("BABYLON.ArcRotateCamera", Ly))
  },
  38731: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.d
    });
    var Uy = Wy(38740);
    (0, Uy.g)()
  },
  38740: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      g: () => ey
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(35919),
      cb = Wy(38742),
      Py = Wy(38697),
      oy = Wy(35909);
    let By = (() => {
        var yb;
        let bb, Wy, Py = cb.d,
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        return yb = class extends Py {
          constructor(yb, bb, Wy, hy) {
            super(yb, Wy, hy), this.groundColor = (0, Uy.l)(this, oy, new Zy.d(0, 0, 0)), this.direction = ((0, Uy.l)(this, By), (0, Uy.l)(this, Ky, void 0)), (0, Uy.l)(this, ey), this.direction = bb || fy.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(yb) {
            return this.direction = fy.n.Normalize(yb.subtract(fy.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Wy.x, Wy.y, Wy.z, 0, bb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bb), this
          }
          transferToNodeMaterialEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return yb.setFloat3(bb, Wy.x, Wy.y, Wy.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = fy.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return cb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(yb, bb) {
            yb["HEMILIGHT" + bb] = !0
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Py[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.q)()], Wy = [(0, hy.P)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "groundColor" in yb,
              get: yb => yb.groundColor,
              set: (yb, bb) => {
                yb.groundColor = bb
              }
            },
            metadata: fy
          }, oy, By), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: yb => "direction" in yb,
              get: yb => yb.direction,
              set: (yb, bb) => {
                yb.direction = bb
              }
            },
            metadata: fy
          }, Ky, ey), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Ky = !1;

    function ey() {
      Ky || (Ky = !0, Py.b.AddNodeConstructor("Light_Type_3", ((yb, bb) => () => new By(yb, fy.n.Zero(), bb))), (0, oy.e)("BABYLON.HemisphericLight", By))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
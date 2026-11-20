export const id = 252;
export const ids = [252];
export const modules = {
  40832: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Jq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37156),
      mq = gq(37139),
      xq = gq(37158),
      Aq = gq(39960),
      cq = gq(40163),
      uq = gq(39919),
      Bq = gq(39662),
      Wq = gq(37145);
    class Nq {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(qq) {
        this._zoomStopsAnimation = qq
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(qq) {
        this._idleRotationSpeed = qq
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(qq) {
        this._idleRotationWaitTime = qq
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(qq) {
        this._idleRotationSpinupTime = qq
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
      attach(qq) {
        this._attachedCamera = qq;
        const Eq = this._attachedCamera.ZJ();
        this._onPrePointerObservableObserver = Eq.onPrePointerObservable.add((qq => {
          qq.type !== uq.b.POINTERDOWN ? qq.type === uq.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const qq = Bq.c.Now;
          let Eq = 0;
          null != this._lastFrameTime && (Eq = qq - this._lastFrameTime), this._lastFrameTime = qq, this._applyUserInteraction();
          const gq = qq - this._lastInteractionTime - this._idleRotationWaitTime,
            Yq = Math.max(Math.min(gq / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Yq, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Eq / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const qq = this._attachedCamera.ZJ();
        this._onPrePointerObservableObserver && qq.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(qq) {
        this._lastInteractionTime = qq ?? Bq.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Wq.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let qq = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (qq = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? qq : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Bq.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    gq(40835);
    class aq {
      constructor() {
        this._easingMode = aq.EASINGMODE_EASEIN
      }
      setEasingMode(qq) {
        const Eq = Math.min(Math.max(qq, 0), 2);
        this._easingMode = Eq
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(qq) {
        throw new Error("You must implement this method")
      }
      ease(qq) {
        switch (this._easingMode) {
          case aq.EASINGMODE_EASEIN:
            return this.easeInCore(qq);
          case aq.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - qq)
        }
        return qq >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - qq))) + .5 : .5 * this.easeInCore(2 * qq)
      }
    }
    aq.EASINGMODE_EASEIN = 0, aq.EASINGMODE_EASEOUT = 1, aq.EASINGMODE_EASEINOUT = 2;
    var Vq = gq(40844);
    class dq {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(qq) {
        if (this._autoTransitionRange === qq) return;
        this._autoTransitionRange = qq;
        const Eq = this._attachedCamera;
        Eq && (qq ? this._onMeshTargetChangedObserver = Eq.onMeshTargetChangedObservable.add((qq => {
          if (qq && (qq.computeWorldMatrix(!0), qq.yR)) {
            const Eq = qq.yR().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Eq, this.upperRadiusTransitionRange = .05 * Eq
          }
        })) : this._onMeshTargetChangedObserver && Eq.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(qq) {
        this._attachedCamera = qq, this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(qq) {
        return !!this._attachedCamera && (this._attachedCamera.radius === qq && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(qq) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (dq.EasingFunction.setEasingMode(dq.EasingMode), this._radiusBounceTransition = Vq.d.CreateAnimation("radius", Vq.d.ANIMATIONTYPE_FLOAT, 60, dq.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Eq = Vq.d.TransitionTo("radius", this._attachedCamera.radius + qq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Eq && this._animatables.push(Eq)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    dq.EasingFunction = new class extends aq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = qq
      }
      easeInCore(qq) {
        const Eq = Math.max(0, this.amplitude);
        return Math.pow(qq, 3) - qq * Eq * Math.sin(3.141592653589793 * qq)
      }
    }(.3), dq.EasingMode = aq.EASINGMODE_EASEOUT;
    class jq {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Oq.d, this._mode = jq.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(qq) {
        this._mode = qq
      }
      get mode() {
        return this._mode
      }
      set radiusScale(qq) {
        this._radiusScale = qq
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(qq) {
        this._positionScale = qq
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(qq) {
        this._defaultElevation = qq
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(qq) {
        this._elevationReturnTime = qq
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(qq) {
        this._elevationReturnWaitTime = qq
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(qq) {
        this._zoomStopsAnimation = qq
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(qq) {
        this._framingTime = qq
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(qq) {
        this._attachedCamera = qq;
        const Eq = this._attachedCamera.ZJ();
        jq.EasingFunction.setEasingMode(jq.EasingMode), this._onPrePointerObservableObserver = Eq.onPrePointerObservable.add((qq => {
          qq.type !== uq.b.POINTERDOWN ? qq.type === uq.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = qq.onMeshTargetChangedObservable.add((qq => {
          qq && qq.yR && this.zoomOnMesh(qq, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = qq.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const qq = this._attachedCamera.ZJ();
        this._onPrePointerObservableObserver && qq.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        qq.computeWorldMatrix(!0);
        const Yq = qq.yR().boundingBox;
        this.zoomOnBoundingInfo(Yq.minimumWorld, Yq.maximumWorld, Eq, gq)
      }
      zoomOnMeshHierarchy(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        qq.computeWorldMatrix(!0);
        const Yq = qq.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Yq.min, Yq.max, Eq, gq)
      }
      zoomOnMeshesHierarchy(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Yq = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          lq = new mq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Oq = 0; Oq < qq.length; Oq++) {
          const Eq = qq[Oq].getHierarchyBoundingVectors(!0);
          mq.q.CheckExtends(Eq.min, Yq, lq), mq.q.CheckExtends(Eq.max, Yq, lq)
        }
        this.zoomOnBoundingInfo(Yq, lq, Eq, gq)
      }
      zoomOnBoundingInfo(qq, Eq) {
        let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Oq = qq.y,
          xq = Oq + (Eq.y - Oq) * this._positionScale,
          Aq = Eq.subtract(qq).scale(.5);
        if (!isFinite(xq)) return !1;
        if (Yq) gq = new mq.q(0, xq, 0);
        else {
          const Eq = qq.add(Aq);
          gq = new mq.q(Eq.x, xq, Eq.z)
        }
        this._vectorTransition || (this._vectorTransition = Vq.d.CreateAnimation("target", Vq.d.ANIMATIONTYPE_VECTOR3, 60, jq.EasingFunction)), this._betaIsAnimating = !0;
        let cq = Vq.d.TransitionTo("target", gq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._vectorTransition, this._framingTime);
        cq && this._animatables.push(cq);
        let uq = 0;
        if (this._mode === jq.FitFrustumSidesMode) {
          const gq = this._calculateLowerRadiusFromModelBoundingSphere(qq, Eq);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Aq.length() + this._attachedCamera.minZ), uq = gq
        } else this._mode === jq.IgnoreBoundsSizeMode && (uq = this._calculateLowerRadiusFromModelBoundingSphere(qq, Eq), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const gq = Eq.subtract(qq).length();
          this._attachedCamera.panningSensibility = 5e3 / gq, this._attachedCamera.wheelPrecision = 100 / uq
        }
        return this._radiusTransition || (this._radiusTransition = Vq.d.CreateAnimation("radius", Vq.d.ANIMATIONTYPE_FLOAT, 60, jq.EasingFunction)), cq = Vq.d.TransitionTo("radius", uq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), lq && lq(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), cq && this._animatables.push(cq), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(qq, Eq) {
        const gq = this._attachedCamera;
        if (!gq) return 0;
        let Yq = gq._calculateLowerRadiusFromModelBoundingSphere(qq, Eq, this._radiusScale);
        return gq.lowerRadiusLimit && this._mode === jq.IgnoreBoundsSizeMode && (Yq = Yq < gq.lowerRadiusLimit ? gq.lowerRadiusLimit : Yq), gq.upperRadiusLimit && (Yq = Yq > gq.upperRadiusLimit ? gq.upperRadiusLimit : Yq), Yq
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const qq = Bq.c.Now - this._lastInteractionTime,
          Eq = .5 * Math.PI - this._defaultElevation,
          gq = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > gq && qq >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Vq.d.CreateAnimation("beta", Vq.d.ANIMATIONTYPE_FLOAT, 60, jq.EasingFunction));
          const qq = Vq.d.TransitionTo("beta", Eq, this._attachedCamera, this._attachedCamera.ZJ(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          qq && this._animatables.push(qq)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Bq.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    jq.EasingFunction = new class extends aq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = qq
      }
      easeInCore(qq) {
        return this.exponent <= 0 ? qq : (Math.exp(this.exponent * qq) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, jq.EasingMode = aq.EASINGMODE_EASEINOUT, jq.IgnoreBoundsSizeMode = 0, jq.FitFrustumSidesMode = 1;
    var Hq = gq(39951),
      oq = gq(39943),
      Pq = gq(39980),
      Qq = gq(39845);
    let yq = (() => {
        var qq;
        let Eq, gq = [],
          Oq = [];
        return qq = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Yq.i)(this, gq, [0, 1, 2]), this._pointerInput = (0, Yq.i)(this, Oq)
          }
          attachControl(qq) {
            qq = Qq.f.BackCompatCameraNoPreventDefault(arguments);
            const Eq = this.camera.Ba(),
              gq = Eq.getInputElement();
            let Yq = 0,
              lq = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Oq => {
              const mq = Oq.event,
                xq = "touch" === mq.pointerType;
              if (Oq.type !== uq.b.POINTERMOVE && -1 === this.buttons.indexOf(mq.button)) return;
              const Aq = mq.target;
              if (this._altKey = mq.altKey, this._ctrlKey = mq.ctrlKey, this._metaKey = mq.metaKey, this._shiftKey = mq.shiftKey, this._buttonsPressed = mq.buttons, Eq.isPointerLock) {
                const qq = mq.movementX,
                  Eq = mq.movementY;
                this.onTouch(null, qq, Eq), this._pointA = null, this._pointB = null
              } else {
                if (Oq.type !== uq.b.POINTERDOWN && Oq.type !== uq.b.POINTERDOUBLETAP && xq && this._pointA?.pointerId !== mq.pointerId && this._pointB?.pointerId !== mq.pointerId) return;
                if (Oq.type !== uq.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !xq)
                  if (Oq.type === uq.b.POINTERDOUBLETAP) this.onDoubleTap(mq.pointerType, mq);
                  else if (Oq.type !== uq.b.POINTERUP || this._currentMousePointerIdDown !== mq.pointerId && !xq) {
                  if (Oq.type === uq.b.POINTERMOVE)
                    if (qq || mq.preventDefault(), this._pointA && null === this._pointB) {
                      const qq = mq.clientX - this._pointA.x,
                        Eq = mq.clientY - this._pointA.y;
                      this._pointA.x = mq.clientX, this._pointA.y = mq.clientY, this.onTouch(this._pointA, qq, Eq)
                    } else if (this._pointA && this._pointB) {
                    const qq = this._pointA.pointerId === mq.pointerId ? this._pointA : this._pointB;
                    qq.x = mq.clientX, qq.y = mq.clientY;
                    const Eq = this._pointA.x - this._pointB.x,
                      gq = this._pointA.y - this._pointB.y,
                      xq = Eq * Eq + gq * gq,
                      Aq = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: mq.pointerId,
                        type: Oq.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Yq, xq, lq, Aq), lq = Aq, Yq = xq
                  }
                } else {
                  try {
                    Aq?.releasePointerCapture(mq.pointerId)
                  } catch (cq) {}
                  xq || (this._pointB = null), Eq._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == mq.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == mq.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Yq || lq) && (this.onMultiTouch(this._pointA, this._pointB, Yq, 0, lq, null), Yq = 0, lq = null), this._currentMousePointerIdDown = -1, this.onButtonUp(mq), qq || mq.preventDefault()
                } else {
                  try {
                    Aq?.setPointerCapture(mq.pointerId)
                  } catch (cq) {}
                  if (null === this._pointA) this._pointA = {
                    x: mq.clientX,
                    y: mq.clientY,
                    pointerId: mq.pointerId,
                    type: mq.pointerType,
                    button: mq.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: mq.clientX,
                      y: mq.clientY,
                      pointerId: mq.pointerId,
                      type: mq.pointerType,
                      button: mq.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || xq || (this._currentMousePointerIdDown = mq.pointerId), this.onButtonDown(mq), qq || (mq.preventDefault(), gq && gq.focus())
                }
              }
            }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._pointerInput, uq.b.POINTERDOWN | uq.b.POINTERUP | uq.b.POINTERMOVE | uq.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Yq = 0, lq = null, this.onLostFocus()
            }, this._contextMenuBind = qq => this.onContextMenu(qq), gq && gq.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Oq = this.camera.ZJ().Ba().getHostWindow();
            Oq && Qq.f.RegisterTopRootEvents(Oq, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const qq = this.camera.ZJ().Ba().getHostWindow();
              qq && Qq.f.UnregisterTopRootEvents(qq, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const qq = this.camera.ZJ().Ba().getInputElement();
                qq && qq.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(qq, Eq) {}
          onTouch(qq, Eq, gq) {}
          onMultiTouch(qq, Eq, gq, Yq, lq, Oq) {}
          onContextMenu(qq) {
            qq.preventDefault()
          }
          onButtonDown(qq) {}
          onButtonUp(qq) {}
          onLostFocus() {}
        }, (() => {
          const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: qq => "buttons" in qq,
              get: qq => qq.buttons,
              set: (qq, Eq) => {
                qq.buttons = Eq
              }
            },
            metadata: mq
          }, gq, Oq), mq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mq
          })
        })(), qq
      })(),
      tq = (() => {
        var qq;
        let Eq, gq, Oq, mq = yq,
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        return qq = class extends mq {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Yq.i)(this, xq, !0), this.multiTouchPanning = ((0, Yq.i)(this, Aq), (0, Yq.i)(this, cq, !0)), this.multiTouchPanAndZoom = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Bq, !0)), this._isPinching = ((0, Yq.i)(this, Wq), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(qq, Eq) {}
          _computeMultiTouchPanning(qq, Eq) {}
          onMultiTouch(qq, Eq, gq, Yq, lq, Oq) {
            0 === gq && null === lq || 0 === Yq && null === Oq || (this.multiTouchPanAndZoom ? (this._computePinchZoom(gq, Yq), this._computeMultiTouchPanning(lq, Oq)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(gq, Yq), this._isPinching = !0) : this._computeMultiTouchPanning(lq, Oq)) : this.multiTouchPanning ? this._computeMultiTouchPanning(lq, Oq) : this.pinchZoom && this._computePinchZoom(gq, Yq))
          }
          onButtonUp(qq) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(mq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: qq => "pinchZoom" in qq,
              get: qq => qq.pinchZoom,
              set: (qq, Eq) => {
                qq.pinchZoom = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: qq => "multiTouchPanning" in qq,
              get: qq => qq.multiTouchPanning,
              set: (qq, Eq) => {
                qq.multiTouchPanning = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, Yq.f)(null, null, Oq, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: qq => "multiTouchPanAndZoom" in qq,
              get: qq => qq.multiTouchPanAndZoom,
              set: (qq, Eq) => {
                qq.multiTouchPanAndZoom = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), Nq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          })
        })(), qq
      })(),
      rq = (() => {
        var qq;
        let Eq, gq, Oq, mq, xq, Aq, cq, uq = tq,
          Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [],
          jq = [],
          Hq = [],
          oq = [],
          Pq = [],
          Qq = [],
          yq = [],
          rq = [],
          vq = [];
        return qq = class extends uq {
          constructor() {
            super(...arguments), this.buttons = (0, Yq.i)(this, Bq, [0, 1, 2]), this.angularSensibilityX = ((0, Yq.i)(this, Wq), (0, Yq.i)(this, Nq, 1e3)), this.angularSensibilityY = ((0, Yq.i)(this, aq), (0, Yq.i)(this, Vq, 1e3)), this.pinchPrecision = ((0, Yq.i)(this, dq), (0, Yq.i)(this, jq, 12)), this.pinchDeltaPercentage = ((0, Yq.i)(this, Hq), (0, Yq.i)(this, oq, 0)), this.useNaturalPinchZoom = ((0, Yq.i)(this, Pq), (0, Yq.i)(this, Qq, !1)), this.panningSensibility = ((0, Yq.i)(this, yq), (0, Yq.i)(this, rq, 1e3)), this.pinchInwards = ((0, Yq.i)(this, vq), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(qq, Eq) {
            if (qq && Eq) {
              const gq = Eq.x - qq.x,
                Yq = Eq.y - qq.y,
                lq = this.camera.movement.input.getEntry("pointer", "pan"),
                Oq = lq?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Oq && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -gq * Oq, this.camera.movement.panAccumulatedPixels.y += Yq * Oq)
            }
          }
          _computePinchZoom(Eq, gq) {
            const Yq = this.camera.radius || qq.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Yq * Math.sqrt(Eq) / Math.sqrt(gq);
            else if (this.pinchDeltaPercentage) {
              const qq = .001 * (gq - Eq) * Yq * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += qq
            } else {
              const qq = (gq - Eq) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += qq
            }
          }
          onTouch(qq, Eq, gq) {
            const Yq = this._activeEntry ?? (this.camera.Ba().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Yq)
              if ("pan" === Yq.interaction) {
                const qq = Yq.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== qq && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Eq * qq, this.camera.movement.panAccumulatedPixels.y += gq * qq)
              } else if ("rotate" === Yq.interaction) {
              const qq = Yq.zC ?? Yq.sensitivity ?? 1 / this.angularSensibilityX,
                lq = Yq.pC ?? Yq.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Eq * qq, this.camera.movement.rotationAccumulatedPixels.y += -gq * lq
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(qq, Eq, gq, Yq, lq, Oq) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Yq) - Math.sqrt(gq)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(qq, Eq, gq, Yq, lq, Oq)
          }
          onButtonDown(qq) {
            this._pointerConditions.button = qq.button, this._pointerModifiers.ctrl = qq.ctrlKey, this._pointerModifiers.alt = qq.altKey, this._pointerModifiers.shift = qq.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(qq)
          }
          onButtonUp(qq) {
            this._activeEntry = null, super.onButtonUp(qq)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const tq = "function" === typeof Symbol && Symbol.metadata ? Object.create(uq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], mq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: qq => "buttons" in qq,
              get: qq => qq.buttons,
              set: (qq, Eq) => {
                qq.buttons = Eq
              }
            },
            metadata: tq
          }, Bq, Wq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: qq => "angularSensibilityX" in qq,
              get: qq => qq.angularSensibilityX,
              set: (qq, Eq) => {
                qq.angularSensibilityX = Eq
              }
            },
            metadata: tq
          }, Nq, aq), (0, Yq.f)(null, null, Oq, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: qq => "angularSensibilityY" in qq,
              get: qq => qq.angularSensibilityY,
              set: (qq, Eq) => {
                qq.angularSensibilityY = Eq
              }
            },
            metadata: tq
          }, Vq, dq), (0, Yq.f)(null, null, mq, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: qq => "pinchPrecision" in qq,
              get: qq => qq.pinchPrecision,
              set: (qq, Eq) => {
                qq.pinchPrecision = Eq
              }
            },
            metadata: tq
          }, jq, Hq), (0, Yq.f)(null, null, xq, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: qq => "pinchDeltaPercentage" in qq,
              get: qq => qq.pinchDeltaPercentage,
              set: (qq, Eq) => {
                qq.pinchDeltaPercentage = Eq
              }
            },
            metadata: tq
          }, oq, Pq), (0, Yq.f)(null, null, Aq, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: qq => "useNaturalPinchZoom" in qq,
              get: qq => qq.useNaturalPinchZoom,
              set: (qq, Eq) => {
                qq.useNaturalPinchZoom = Eq
              }
            },
            metadata: tq
          }, Qq, yq), (0, Yq.f)(null, null, cq, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: qq => "panningSensibility" in qq,
              get: qq => qq.panningSensibility,
              set: (qq, Eq) => {
                qq.panningSensibility = Eq
              }
            },
            metadata: tq
          }, rq, vq), tq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tq
          })
        })(), qq.MinimumRadiusForPinch = .001, qq
      })();
    Pq.d.ArcRotateCameraPointersInput = rq;
    var vq = gq(39921);
    let hq = (() => {
      var qq;
      let Eq, gq, Oq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq = [],
        dq = [],
        jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        yq = [],
        tq = [],
        rq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [];
      return qq = class {
        constructor() {
          this.camera = (0, Yq.i)(this, Vq), this.keysUp = (0, Yq.i)(this, dq, [38]), this.keysDown = ((0, Yq.i)(this, jq), (0, Yq.i)(this, Hq, [40])), this.keysLeft = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, [37])), this.keysRight = ((0, Yq.i)(this, yq), (0, Yq.i)(this, tq, [39])), this.keysReset = ((0, Yq.i)(this, rq), (0, Yq.i)(this, hq, [220])), this.keysZoomIn = ((0, Yq.i)(this, nq), (0, Yq.i)(this, bq, [187, 107])), this.keysZoomOut = ((0, Yq.i)(this, iq), (0, Yq.i)(this, Zq, [189, 109])), this.panningSensibility = ((0, Yq.i)(this, fq), (0, Yq.i)(this, Mq, 50)), this.zoomingSensibility = ((0, Yq.i)(this, Tq), (0, Yq.i)(this, zq, 25)), this.angularSpeed = ((0, Yq.i)(this, Sq), (0, Yq.i)(this, pq, .01)), this._useAltToZoom = ((0, Yq.i)(this, Gq), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new mq.p, this._panDirection = new mq.p
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(qq) {
          this._useAltToZoom = qq, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const qq = this.camera.movement.input,
            Eq = qq.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Eq ? qq.inputMap.splice(qq.inputMap.indexOf(Eq), 1) : this._useAltToZoom && !Eq && qq.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(qq) {
          qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZJ(), this._engine = this._scene.Ba(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Eq => {
            const gq = Eq.event;
            if (!gq.metaKey)
              if (Eq.type === vq.c.KEYDOWN) {
                if (this._ctrlPressed = gq.ctrlKey, this._altPressed = gq.altKey, -1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.indexOf(gq.keyCode) || -1 !== this.keysZoomIn.indexOf(gq.keyCode) || -1 !== this.keysZoomOut.indexOf(gq.keyCode)) {
                  -1 === this._keys.indexOf(gq.keyCode) && this._keys.push(gq.keyCode), gq.preventDefault && (qq || gq.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(gq.keyCode) || -1 !== this.keysDown.indexOf(gq.keyCode) || -1 !== this.keysLeft.indexOf(gq.keyCode) || -1 !== this.keysRight.indexOf(gq.keyCode) || -1 !== this.keysReset.indexOf(gq.keyCode) || -1 !== this.keysZoomIn.indexOf(gq.keyCode) || -1 !== this.keysZoomOut.indexOf(gq.keyCode)) {
              const Eq = this._keys.indexOf(gq.keyCode);
              Eq >= 0 && this._keys.splice(Eq, 1), gq.preventDefault && (qq || gq.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const qq = this.camera,
              Eq = qq.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const gq = this._rotateDirection.set(0, 0),
              Yq = this._panDirection.set(0, 0);
            let lq = 0,
              Oq = 0;
            for (let mq = 0; mq < this._keys.length; mq++) {
              const xq = this._keys[mq];
              if (this._keyboardConditions.key = xq, -1 === this.keysReset.indexOf(xq)) {
                const qq = Eq.resolveInteraction("keyboard", this._keyboardConditions);
                if (qq)
                  if ("pan" === qq.interaction) Oq = Math.max(Oq, qq.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(xq) ? Yq.x -= 1 : -1 !== this.keysRight.indexOf(xq) ? Yq.x += 1 : -1 !== this.keysUp.indexOf(xq) ? Yq.y += 1 : -1 !== this.keysDown.indexOf(xq) && (Yq.y -= 1);
                  else if ("zoom" === qq.interaction) {
                  const gq = qq.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(xq) || -1 !== this.keysZoomIn.indexOf(xq) ? Eq.handlers.zoom(gq) : -1 === this.keysDown.indexOf(xq) && -1 === this.keysZoomOut.indexOf(xq) || Eq.handlers.zoom(-gq)
                } else "rotate" === qq.interaction && (lq = Math.max(lq, qq.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(xq) ? gq.x -= 1 : -1 !== this.keysRight.indexOf(xq) ? gq.x += 1 : -1 !== this.keysUp.indexOf(xq) ? gq.y -= 1 : -1 !== this.keysDown.indexOf(xq) && (gq.y += 1))
              } - 1 !== this.keysReset.indexOf(xq) && qq.useInputToRestoreState && qq.restoreState()
            }
            0 === gq.x && 0 === gq.y || (gq.normalize().scaleInPlace(lq), Eq.handlers.rotate(gq.x, gq.y)), 0 === Yq.x && 0 === Yq.y || (Yq.normalize().scaleInPlace(Oq), Eq.handlers.pan(Yq.x, Yq.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], xq = [(0, lq.M)()], Aq = [(0, lq.M)()], cq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.M)()], Wq = [(0, lq.M)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], (0, Yq.f)(qq, null, aq, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAltToZoom" in qq,
            get: qq => qq.useAltToZoom
          },
          metadata: mq
        }, null, Vq), (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysUp" in qq,
            get: qq => qq.keysUp,
            set: (qq, Eq) => {
              qq.keysUp = Eq
            }
          },
          metadata: mq
        }, dq, jq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysDown" in qq,
            get: qq => qq.keysDown,
            set: (qq, Eq) => {
              qq.keysDown = Eq
            }
          },
          metadata: mq
        }, Hq, oq), (0, Yq.f)(null, null, Oq, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysLeft" in qq,
            get: qq => qq.keysLeft,
            set: (qq, Eq) => {
              qq.keysLeft = Eq
            }
          },
          metadata: mq
        }, Pq, yq), (0, Yq.f)(null, null, xq, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysRight" in qq,
            get: qq => qq.keysRight,
            set: (qq, Eq) => {
              qq.keysRight = Eq
            }
          },
          metadata: mq
        }, tq, rq), (0, Yq.f)(null, null, Aq, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysReset" in qq,
            get: qq => qq.keysReset,
            set: (qq, Eq) => {
              qq.keysReset = Eq
            }
          },
          metadata: mq
        }, hq, nq), (0, Yq.f)(null, null, cq, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysZoomIn" in qq,
            get: qq => qq.keysZoomIn,
            set: (qq, Eq) => {
              qq.keysZoomIn = Eq
            }
          },
          metadata: mq
        }, bq, iq), (0, Yq.f)(null, null, uq, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: qq => "keysZoomOut" in qq,
            get: qq => qq.keysZoomOut,
            set: (qq, Eq) => {
              qq.keysZoomOut = Eq
            }
          },
          metadata: mq
        }, Zq, fq), (0, Yq.f)(null, null, Bq, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: qq => "panningSensibility" in qq,
            get: qq => qq.panningSensibility,
            set: (qq, Eq) => {
              qq.panningSensibility = Eq
            }
          },
          metadata: mq
        }, Mq, Tq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: qq => "zoomingSensibility" in qq,
            get: qq => qq.zoomingSensibility,
            set: (qq, Eq) => {
              qq.zoomingSensibility = Eq
            }
          },
          metadata: mq
        }, zq, Sq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: qq => "angularSpeed" in qq,
            get: qq => qq.angularSpeed,
            set: (qq, Eq) => {
              qq.angularSpeed = Eq
            }
          },
          metadata: mq
        }, pq, Gq), mq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mq
        })
      })(), qq
    })();
    Pq.d.ArcRotateCameraKeyboardMoveInput = hq;
    var nq = gq(37767),
      bq = gq(39926);
    let iq = (() => {
      var qq;
      let Eq, gq, Oq, Aq = [],
        cq = [],
        Bq = [],
        Nq = [],
        aq = [],
        Vq = [];
      return qq = class {
        constructor() {
          this.wheelPrecision = (0, Yq.i)(this, Aq, 3), this.zoomToMouseLocation = ((0, Yq.i)(this, cq), (0, Yq.i)(this, Bq, !1)), this.wheelDeltaPercentage = ((0, Yq.i)(this, Nq), (0, Yq.i)(this, aq, 0)), this.customComputeDeltaFromMouseWheel = ((0, Yq.i)(this, Vq), null), this._viewOffset = new mq.q(0, 0, 0), this._globalOffset = new mq.q(0, 0, 0), this._inertialPanning = mq.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(qq, Eq) {
          let gq;
          const Yq = .01 * qq * this.wheelDeltaPercentage * Eq;
          return gq = qq > 0 ? Yq / (1 + this.wheelDeltaPercentage) : Yq * (1 + this.wheelDeltaPercentage), gq
        }
        attachControl(qq) {
          qq = Qq.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eq => {
            if (Eq.type !== uq.b.POINTERWHEEL) return;
            const gq = Eq.event;
            let Yq;
            const lq = gq.deltaMode === bq.b.DOM_DELTA_LINE ? 40 : 1,
              Oq = -gq.deltaY * lq;
            if (this.customComputeDeltaFromMouseWheel) Yq = this.customComputeDeltaFromMouseWheel(Oq, this, gq);
            else if (this.wheelDeltaPercentage) {
              if (Yq = this._computeDeltaFromMouseWheelLegacyEvent(Oq, this.camera.radius), Yq > 0) {
                const qq = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Eq = this.camera.radius,
                  gq = qq + Yq;
                for (let Yq = 0; Yq < 20 && !(Eq <= gq) && !(Math.abs(gq * this.camera.inertia) < .001); Yq++) Eq -= gq, gq *= this.camera.inertia;
                Eq = (0, xq.Clamp)(Eq, 0, Number.MAX_VALUE), Yq = this._computeDeltaFromMouseWheelLegacyEvent(Oq, Eq)
              }
            } else {
              const qq = this.camera.movement.input.getEntry("wheel", "zoom");
              Yq = Oq * (qq?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Yq && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Yq)) : this.camera.movement.zoomAccumulatedPixels += Yq), gq.preventDefault && (qq || gq.preventDefault())
          }, this._observer = this.camera.ZJ()._inputManager._addCameraPointerObserver(this._wheel, uq.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.A4(0)
        }
        detachControl() {
          this._observer && (this.camera.ZJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const qq = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(qq.inertialAlphaOffset) + Math.abs(qq.inertialBetaOffset) + Math.abs(qq.inertialRadiusOffset)) {
            this._updateHitPlane(), qq.target.addInPlace(this._inertialPanning), qq.radius -= this._zoomToMouseRadiusOffset;
            const Eq = qq.movement.getFrameIndependentDecay(qq.inertia);
            this._inertialPanning.scaleInPlace(Eq), this._zoomToMouseRadiusOffset *= Eq, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Wq.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const qq = this.camera,
            Eq = qq.target.subtract(qq.position);
          this._hitPlane = nq.d.FromPositionAndNormal(qq.target, Eq)
        }
        _getPosition() {
          const qq = this.camera,
            Eq = qq.ZJ(),
            gq = Eq.createPickingRay(Eq.pointerX, Eq.pointerY, mq.e.Identity(), qq, !1);
          0 === qq.targetScreenOffset.x && 0 === qq.targetScreenOffset.y || (this._viewOffset.set(qq.targetScreenOffset.x, qq.targetScreenOffset.y, 0), qq.getViewMatrix().invertToRef(qq._cameraTransformMatrix), this._globalOffset = mq.q.TransformNormal(this._viewOffset, qq._cameraTransformMatrix), gq.origin.addInPlace(this._globalOffset));
          let Yq = 0;
          return this._hitPlane && (Yq = gq.intersectsPlane(this._hitPlane) ?? 0), gq.origin.addInPlace(gq.direction.scaleInPlace(Yq))
        }
        _zoomToMouse(qq) {
          const Eq = this.camera,
            gq = 1 - Eq.inertia,
            Yq = Eq.movement.getFrameIndependentInputScale(Eq.inertia);
          if (Eq.lowerRadiusLimit) {
            const lq = Eq.lowerRadiusLimit ?? 0;
            Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq < lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
          }
          if (Eq.upperRadiusLimit) {
            const lq = Eq.upperRadiusLimit ?? 0;
            Eq.radius - (this._zoomToMouseRadiusOffset + qq * Yq) / gq > lq && (qq = ((Eq.radius - lq) * gq - this._zoomToMouseRadiusOffset) / Yq)
          }
          const lq = qq / gq / Eq.radius,
            Oq = this._getPosition(),
            xq = mq.o.Na[6];
          Oq.subtractToRef(Eq.target, xq), xq.scaleInPlace(lq), xq.scaleInPlace(gq), xq.scaleInPlace(Yq), this._inertialPanning.addInPlace(xq), this._zoomToMouseRadiusOffset += qq * Yq
        }
        _zeroIfClose(qq) {
          Math.abs(qq.x) < Wq.c && (qq.x = 0), Math.abs(qq.y) < Wq.c && (qq.y = 0), Math.abs(qq.z) < Wq.c && (qq.z = 0)
        }
      }, (() => {
        const mq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelPrecision" in qq,
            get: qq => qq.wheelPrecision,
            set: (qq, Eq) => {
              qq.wheelPrecision = Eq
            }
          },
          metadata: mq
        }, Aq, cq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: qq => "zoomToMouseLocation" in qq,
            get: qq => qq.zoomToMouseLocation,
            set: (qq, Eq) => {
              qq.zoomToMouseLocation = Eq
            }
          },
          metadata: mq
        }, Bq, Nq), (0, Yq.f)(null, null, Oq, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: qq => "wheelDeltaPercentage" in qq,
            get: qq => qq.wheelDeltaPercentage,
            set: (qq, Eq) => {
              qq.wheelDeltaPercentage = Eq
            }
          },
          metadata: mq
        }, aq, Vq), mq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mq
        })
      })(), qq
    })();
    Pq.d.ArcRotateCameraMouseWheelInput = iq;
    var Zq, fq, Mq = gq(39636);
    class Tq extends Pq.f {
      constructor(qq) {
        super(qq)
      }
      addMouseWheel() {
        return this.add(new iq), this
      }
      addPointers() {
        return this.add(new rq), this
      }
      addKeyboard() {
        return this.add(new hq), this
      }
    }(Zq = Tq.prototype).addVRDeviceOrientation ?? (Zq.addVRDeviceOrientation = (0, Mq.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (fq = Tq.prototype).addGamepad ?? (fq.addGamepad = (0, Mq.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var zq = gq(37171),
      Sq = gq(39972),
      pq = gq(39977);
    class Gq extends Sq.e {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq), this.input = new pq.b({
          pan: (qq, Eq) => {
            this.panAccumulatedPixels.x += qq, this.panAccumulatedPixels.y += Eq
          },
          rotate: (qq, Eq) => {
            this.rotationAccumulatedPixels.x += qq, this.rotationAccumulatedPixels.y += Eq
          },
          zoom: qq => {
            this.zoomAccumulatedPixels += qq
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

    function Lq(qq, Eq) {
      return isNaN(qq) ? Eq : qq
    }
    let Jq = (() => {
        var qq;
        let Eq, gq, Aq, uq, Bq, aq, Vq, Pq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, zq, Sq, pq, Jq, kq, Rq, Uq, Fq, sq, Xq = oq.h,
          wq = [],
          Kq = [],
          Cq = [],
          Iq = [],
          eq = [],
          Dq = [],
          qE = [],
          EE = [],
          gE = [],
          YE = [],
          lE = [],
          OE = [],
          mE = [],
          xE = [],
          AE = [],
          cE = [],
          uE = [],
          BE = [],
          WE = [],
          NE = [],
          aE = [],
          VE = [],
          dE = [],
          jE = [],
          HE = [],
          oE = [],
          PE = [],
          QE = [],
          yE = [],
          tE = [],
          rE = [],
          vE = [],
          hE = [],
          nE = [],
          bE = [],
          iE = [],
          ZE = [],
          fE = [],
          ME = [],
          TE = [],
          zE = [],
          SE = [],
          pE = [],
          GE = [],
          LE = [],
          JE = [],
          kE = [];
        return qq = class extends Xq {
          get target() {
            return this.K3
          }
          set target(qq) {
            this.setTarget(qq)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(qq) {
            qq && this.setTarget(qq)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(qq) {
            this.setPosition(qq)
          }
          set upVector(qq) {
            this._upToYMatrix || (this._yToUpMatrix = new mq.e, this._upToYMatrix = new mq.e, this._upVector = mq.q.Zero()), qq.normalize(), this._upVector.WG(qq), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            mq.e.RotationAlignToRef(mq.q.UpReadOnly, this._upVector, this._yToUpMatrix), mq.e.RotationAlignToRef(this._upVector, mq.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const qq = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(qq) < this._rotationEpsilon ? 0 : qq
          }
          set inertialAlphaOffset(qq) {
            this._inertialAlphaOffset = qq, 0 === qq && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const qq = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(qq) < this._rotationEpsilon ? 0 : qq
          }
          set inertialBetaOffset(qq) {
            this._inertialBetaOffset = qq, 0 === qq && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const qq = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(qq) < this._rotationEpsilon ? 0 : qq
          }
          set inertialRadiusOffset(qq) {
            this._inertialRadiusOffset = qq, 0 === qq && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(qq) {
            this._panningInertia = qq, this.movement && (this.movement.panInertia = qq)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(qq) {
            this._inertia = qq, this.movement && (this.movement.rotationInertia = qq, this.movement.zoomInertia = qq)
          }
          get angularSensibilityX() {
            const qq = this.inputs.attached.pointers;
            return qq ? qq.angularSensibilityX : 0
          }
          set angularSensibilityX(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.angularSensibilityX = qq)
          }
          get angularSensibilityY() {
            const qq = this.inputs.attached.pointers;
            return qq ? qq.angularSensibilityY : 0
          }
          set angularSensibilityY(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.angularSensibilityY = qq)
          }
          get pinchPrecision() {
            const qq = this.inputs.attached.pointers;
            return qq ? qq.pinchPrecision : 0
          }
          set pinchPrecision(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.pinchPrecision = qq)
          }
          get pinchDeltaPercentage() {
            const qq = this.inputs.attached.pointers;
            return qq ? qq.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.pinchDeltaPercentage = qq)
          }
          get useNaturalPinchZoom() {
            const qq = this.inputs.attached.pointers;
            return !!qq && qq.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.useNaturalPinchZoom = qq)
          }
          get panningSensibility() {
            const qq = this.inputs.attached.pointers;
            return qq ? qq.panningSensibility : 0
          }
          set panningSensibility(qq) {
            const Eq = this.inputs.attached.pointers;
            Eq && (Eq.panningSensibility = qq)
          }
          get keysUp() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysUp : []
          }
          set keysUp(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysUp = qq)
          }
          get keysDown() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysDown : []
          }
          set keysDown(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysDown = qq)
          }
          get keysLeft() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysLeft : []
          }
          set keysLeft(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysLeft = qq)
          }
          get keysRight() {
            const qq = this.inputs.attached.keyboard;
            return qq ? qq.keysRight : []
          }
          set keysRight(qq) {
            const Eq = this.inputs.attached.keyboard;
            Eq && (Eq.keysRight = qq)
          }
          get wheelPrecision() {
            const qq = this.inputs.attached.mousewheel;
            return qq ? qq.wheelPrecision : 0
          }
          set wheelPrecision(qq) {
            const Eq = this.inputs.attached.mousewheel;
            Eq && (Eq.wheelPrecision = qq)
          }
          get zoomToMouseLocation() {
            const qq = this.inputs.attached.mousewheel;
            return !!qq && qq.zoomToMouseLocation
          }
          set zoomToMouseLocation(qq) {
            const Eq = this.inputs.attached.mousewheel;
            Eq && (Eq.zoomToMouseLocation = qq)
          }
          get wheelDeltaPercentage() {
            const qq = this.inputs.attached.mousewheel;
            return qq ? qq.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(qq) {
            const Eq = this.inputs.attached.mousewheel;
            Eq && (Eq.wheelDeltaPercentage = qq)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(qq) {
            this._useCtrlForPanningInternal = qq;
            const Eq = this.movement.input,
              gq = Eq.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !qq && gq ? Eq.inputMap.splice(Eq.inputMap.indexOf(gq), 1) : qq && !gq && Eq.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Yq = Eq.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !qq && Yq ? Eq.inputMap.splice(Eq.inputMap.indexOf(Yq), 1) : qq && !Yq && Eq.addEntry({
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
          set _panningMouseButton(qq) {
            this._panningMouseButtonInternal = qq;
            const Eq = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Eq && (Eq.button = qq)
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
          set useBouncingBehavior(qq) {
            qq !== this.useBouncingBehavior && (qq ? (this._bouncingBehavior = new dq, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(qq) {
            qq !== this.useFramingBehavior && (qq ? (this._framingBehavior = new jq, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(qq) {
            qq !== this.useAutoRotationBehavior && (qq ? (this._autoRotationBehavior = new Nq, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(qq, Eq, gq, lq, xq, Aq) {
            var cq;
            let uq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(qq, mq.q.Zero(), Aq, uq), cq = this, this.alpha = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, void 0)), this.beta = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, void 0)), this.radius = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, void 0)), this.K3 = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, void 0)), this._targetHost = ((0, Yq.i)(this, lE), (0, Yq.i)(this, OE, void 0)), this._upToYMatrix = (0, Yq.i)(this, mE), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Yq.i)(this, xE, null), this.upperAlphaLimit = ((0, Yq.i)(this, AE), (0, Yq.i)(this, cE, null)), this.lowerBetaLimit = ((0, Yq.i)(this, uE), (0, Yq.i)(this, BE, .01)), this.upperBetaLimit = ((0, Yq.i)(this, WE), (0, Yq.i)(this, NE, Math.PI - .01)), this.lowerRadiusLimit = ((0, Yq.i)(this, aE), (0, Yq.i)(this, VE, null)), this.upperRadiusLimit = ((0, Yq.i)(this, dE), (0, Yq.i)(this, jE, null)), this.lowerTargetYLimit = ((0, Yq.i)(this, HE), (0, Yq.i)(this, oE, -1 / 0)), this.inertialPanningX = ((0, Yq.i)(this, PE), (0, Yq.i)(this, QE, 0)), this.inertialPanningY = ((0, Yq.i)(this, yE), (0, Yq.i)(this, tE, 0)), this.pinchToPanMaxDistance = ((0, Yq.i)(this, rE), (0, Yq.i)(this, vE, 20)), this.panningDistanceLimit = ((0, Yq.i)(this, hE), (0, Yq.i)(this, nE, null)), this.panningOriginTarget = ((0, Yq.i)(this, bE), (0, Yq.i)(this, iE, mq.q.Zero())), this._panningInertia = ((0, Yq.i)(this, ZE), .9), this._inertia = .9, this.zoomOnFactor = (0, Yq.i)(this, fE, 1), this.targetScreenOffset = ((0, Yq.i)(this, ME), (0, Yq.i)(this, TE, mq.p.Zero())), this.allowUpsideDown = ((0, Yq.i)(this, zE), (0, Yq.i)(this, SE, !0)), this.useInputToRestoreState = ((0, Yq.i)(this, pE), (0, Yq.i)(this, GE, !0)), this.restoreStateInterpolationFactor = ((0, Yq.i)(this, LE), (0, Yq.i)(this, JE, 0)), this._currentInterpolationFactor = ((0, Yq.i)(this, kE), 0), this._viewMatrix = new mq.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new mq.q(1, 1, 0), this._transformedDirection = new mq.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Oq.d, this.checkCollisions = !1, this.collisionRadius = new mq.q(.5, .5, .5), this._previousPosition = mq.q.Zero(), this._collisionVelocity = mq.q.Zero(), this._newPosition = mq.q.Zero(), this._computationVector = mq.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new mq.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new mq.p(NaN, NaN), this._onCollisionPositionChange = function(qq, Eq) {
              let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              gq ? (cq.setPosition(Eq), cq.qW && cq.qW(gq)) : cq._previousPosition.WG(cq._position);
              const Yq = Math.cos(cq.alpha),
                lq = Math.sin(cq.alpha),
                Oq = Math.cos(cq.beta);
              let mq = Math.sin(cq.beta);
              0 === mq && (mq = 1e-4);
              const xq = cq._getTargetPosition();
              cq._computationVector.Vqq(cq.radius * Yq * mq, cq.radius * Oq, cq.radius * lq * mq), xq.addToRef(cq._computationVector, cq._newPosition), cq._position.WG(cq._newPosition);
              let Aq = cq.upVector;
              cq.allowUpsideDown && cq.beta < 0 && (Aq = Aq.clone(), Aq = Aq.nY()), cq._computeViewMatrix(cq._position, xq, Aq), cq._viewMatrix.addAtIndex(12, cq.targetScreenOffset.x), cq._viewMatrix.addAtIndex(13, cq.targetScreenOffset.y), cq._collisionTriggered = !1
            }, this.K3 = mq.q.Zero(), xq && this.setTarget(xq), this.alpha = Eq, this.beta = gq, this.radius = lq, this.getViewMatrix(), this.inputs = new Tq(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Gq(this.ZJ(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.K3 = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = mq.p.Zero()
          }
          _updateCache(qq) {
            qq || super._updateCache(), this._cache.K3.WG(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.WG(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const qq = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? qq.addToRef(this._targetBoundingCenter, this.K3) : this.K3.WG(qq)
            }
            const qq = this._getLockedTargetPosition();
            return qq || this.K3
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Wq.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Oq = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Oq ? this._currentInterpolationFactor = Oq : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Lq(qq, this._goalAlpha), this._goalBeta = Lq(Eq, this._goalBeta), this._goalRadius = Lq(gq, this._goalRadius), this._goalTarget.set(Lq(Yq.x, this._goalTarget.x), Lq(Yq.y, this._goalTarget.y), Lq(Yq.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Lq(lq.x, this._goalTargetScreenOffset.x), Lq(lq.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, xq.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, xq.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, xq.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, xq.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.K3.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(qq, Eq) {
            let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const lq = arguments;
            Eq = Qq.f.BackCompatCameraNoPreventDefault(lq), this._useCtrlForPanning = gq, this._panningMouseButton = Yq, "boolean" === typeof lq[0] && (lq.length > 1 && (this._useCtrlForPanning = lq[1]), lq.length > 2 && (this._panningMouseButton = lq[2])), this.inputs.attachElement(Eq), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(qq, Eq, gq) {
            const Yq = this.invertRotation ? -1 : 1;
            let lq = qq * this._calculateHandednessMultiplier();
            this.beta < 0 && (lq *= -1), this.alpha += lq * Yq, this.beta += Eq * Yq, this.radius -= gq
          }
          _applyPanDelta(qq, Eq) {
            const gq = mq.o.Na[0].Vqq(qq, Eq, Eq);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gq.multiplyInPlace(this.panningAxis), mq.q.TransformNormalToRef(gq, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const qq = this.upVector,
                Eq = mq.q.CrossToRef(this._transformedDirection, qq, this._transformedDirection);
              mq.q.CrossToRef(qq, Eq, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.K3);
                mq.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.K3.WG(this._transformedDirection)
              } else {
                if (this.parent) {
                  const qq = mq.o.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(qq), qq.transposeToRef(qq), mq.q.TransformCoordinatesToRef(this._transformedDirection, qq, this._transformedDirection)
                }
                this.K3.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let qq = !1;
            this.movement.computeCurrentFrameDeltas();
            const Eq = this.movement.rotationDeltaCurrentFrame,
              gq = this.movement.zoomDeltaCurrentFrame,
              Yq = this.movement.panDeltaCurrentFrame;
            if (0 === Eq.x && 0 === Eq.y && 0 === gq && 0 === Yq.x && 0 === Yq.y || (qq = !0, 0 === Eq.x && 0 === Eq.y && 0 === gq || this._applyRotationAndZoomDelta(Eq.x, Eq.y, gq), 0 === Yq.x && 0 === Yq.y || this._applyPanDelta(Yq.x, Yq.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), qq = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Eq = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Eq && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Eq && (this.inertialPanningY = 0), qq = !0
            }
            if (qq) this.stopInterpolation();
            else if (this._isInterpolating) {
              let qq = !1;
              const Eq = this._scene.Ba().getDeltaTime() / 1e3,
                gq = 1 - Math.pow(2, -Eq / this._currentInterpolationFactor),
                Yq = Lq(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Eq = mq.o.Na[0].set(Lq(this._goalTarget.x, this.K3.x), Lq(this._goalTarget.y, this.K3.y), Lq(this._goalTarget.z, this.K3.z));
                mq.q.LerpToRef(this.target, Eq, gq, this.K3), 10 * mq.q.Distance(this.target, Eq) / Yq < Wq.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.WG(Eq), this.setTarget(this.target, !1, !0, !0)) : qq = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Eq = mq.h.RotationAlphaBetaGammaToRef(Lq(this._goalAlpha, this.alpha), Lq(this._goalBeta, this.beta), 0, mq.o.Quaternion[0]),
                  Yq = mq.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, mq.o.Quaternion[1]),
                  lq = mq.h.SlerpToRef(Yq, Eq, gq, mq.o.Quaternion[2]);
                lq.normalize();
                const Oq = lq.toAlphaBetaGammaToRef(mq.o.Na[0]);
                if (this.alpha = Oq.x, this.beta = Oq.y, lq.isApprox(Eq, Wq.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const qq = Eq.toAlphaBetaGammaToRef(mq.o.Na[0]);
                  this.alpha = qq.x, this.beta = qq.y
                } else qq = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Yq - this.radius) * gq, Math.abs(Yq / this.radius - 1) < Wq.c ? (this._goalRadius = NaN, this.radius = Yq) : qq = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Eq = mq.o.Vector2[0].set(Lq(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Lq(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                mq.p.LerpToRef(this.targetScreenOffset, Eq, gq, this.targetScreenOffset), mq.p.Distance(this.targetScreenOffset, Eq) < Wq.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.WG(Eq)) : qq = !0
              }
              this._isInterpolating = qq
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const qq = this.alpha;
            var Eq, gq;
            this.alpha = function(qq) {
              let Eq = Math.PI / 2;
              return 0 === qq.x && 0 === qq.z || (Eq = Math.acos(qq.x / Math.sqrt(Math.pow(qq.x, 2) + Math.pow(qq.z, 2)))), qq.z < 0 && (Eq = 2 * Math.PI - Eq), Eq
            }(this._computationVector), this.beta = (Eq = this._computationVector.y, gq = this.radius, Math.acos(Eq / gq));
            const Yq = Math.round((qq - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Yq * Math.PI, this._checkLimits()
          }
          setPosition(qq) {
            this._position.equals(qq) || (this._position.WG(qq), this.rebuildAnglesAndRadius())
          }
          setTarget(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Yq = this.overrideCloneAlphaBetaRadius ?? Yq, qq.computeWorldMatrix) Eq && qq.yR ? this._targetBoundingCenter = qq.yR().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, qq.computeWorldMatrix(), this._targetHost = qq, this.K3 = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Eq = qq,
                Yq = this._getTargetPosition();
              if (Yq && !gq && Yq.equals(Eq)) return;
              this._targetHost = null, this.K3 = Eq, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Yq || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const qq = Math.cos(this.alpha),
              Eq = Math.sin(this.alpha),
              gq = Math.cos(this.beta);
            let Yq = Math.sin(this.beta);
            0 === Yq && (Yq = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const lq = this._getTargetPosition();
            if (this._computationVector.Vqq(this.radius * qq * Yq, this.radius * gq, this.radius * Eq * Yq), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || mq.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), lq.addToRef(this._computationVector, this._newPosition), this.ZJ().collisionsEnabled && this.checkCollisions) {
              const qq = this.ZJ().collisionCoordinator;
              this._collider || (this._collider = qq.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, qq.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.WG(this._newPosition);
              let qq = this.upVector;
              this.allowUpsideDown && Yq < 0 && (qq = qq.nY()), this._computeViewMatrix(this._position, lq, qq), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.WG(lq), this._viewMatrix
          }
          zoomOn(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            qq = qq || this.ZJ().meshes;
            const gq = cq.e.MinMax(qq);
            let Yq = this._calculateLowerRadiusFromModelBoundingSphere(gq.min, gq.max);
            if (Yq = Math.max(Math.min(Yq, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Yq * this.zoomOnFactor, this.mode === Hq.e.ORTHOGRAPHIC_CAMERA) {
              const qq = this.ZJ().Ba().getAspectRatio(this),
                Eq = Yq * this.zoomOnFactor / 2;
              this.orthoLeft = -Eq * qq, this.orthoRight = Eq * qq, this.orthoBottom = -Eq, this.orthoTop = Eq
            }
            this.focusOn({
              min: gq.min,
              max: gq.max,
              distance: Yq
            }, Eq)
          }
          focusOn(qq) {
            let Eq, gq, Yq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === qq.min) {
              const Yq = qq || this.ZJ().meshes;
              Eq = cq.e.MinMax(Yq), gq = mq.q.Distance(Eq.min, Eq.max)
            } else {
              Eq = qq, gq = qq.distance
            }
            this.K3 = cq.e.Center(Eq), Yq || (this.maxZ = 2 * gq)
          }
          createRigCamera(Eq, gq) {
            let Yq = 0;
            switch (this.cameraRigMode) {
              case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Hq.e.RIG_MODE_VR:
                Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? 1 : -1);
                break;
              case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Yq = this._cameraRigParams.stereoHalfAngle * (0 === gq ? -1 : 1)
            }
            const lq = new qq(Eq, this.alpha + Yq, this.beta, this.radius, this.K3, this.ZJ());
            return lq._cameraRigParams = {}, lq.isRigCamera = !0, lq.rigParent = this, lq.upVector = this.upVector, lq.mode = this.mode, lq.orthoLeft = this.orthoLeft, lq.orthoRight = this.orthoRight, lq.orthoBottom = this.orthoBottom, lq.orthoTop = this.orthoTop, lq
          }
          _updateRigCameras() {
            const qq = this._rigCameras[0],
              Eq = this._rigCameras[1];
            switch (qq.beta = Eq.beta = this.beta, this.cameraRigMode) {
              case Hq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Hq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Hq.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Hq.e.RIG_MODE_VR:
                qq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Hq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                qq.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Eq.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Yq = mq.q.Distance(qq, Eq),
              lq = this.ZJ().Ba().getAspectRatio(this),
              Oq = Math.tan(this.fov / 2),
              xq = Oq * lq,
              Aq = .5 * Yq * gq,
              cq = Aq * Math.sqrt(1 + 1 / (xq * xq)),
              uq = Aq * Math.sqrt(1 + 1 / (Oq * Oq));
            return Math.max(cq, uq)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Aq = [(0, lq.M)()], uq = [(0, lq.M)()], Bq = [(0, lq.I)("target")], aq = [(0, lq.B)("targetHost")], Vq = [(0, lq.M)()], Pq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], fq = [(0, lq.M)()], Mq = [(0, lq.M)()], zq = [(0, lq.M)()], Sq = [(0, lq.I)()], pq = [(0, lq.M)()], Jq = [(0, lq.M)()], kq = [(0, lq.M)()], Rq = [(0, lq.F)()], Uq = [(0, lq.M)()], Fq = [(0, lq.M)()], sq = [(0, lq.M)()], (0, Yq.f)(qq, null, Vq, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "inertialAlphaOffset" in qq,
              get: qq => qq.inertialAlphaOffset
            },
            metadata: Oq
          }, null, wq), (0, Yq.f)(qq, null, Pq, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "inertialBetaOffset" in qq,
              get: qq => qq.inertialBetaOffset
            },
            metadata: Oq
          }, null, wq), (0, Yq.f)(qq, null, yq, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "inertialRadiusOffset" in qq,
              get: qq => qq.inertialRadiusOffset
            },
            metadata: Oq
          }, null, wq), (0, Yq.f)(qq, null, pq, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: qq => "panningInertia" in qq,
              get: qq => qq.panningInertia
            },
            metadata: Oq
          }, null, wq), (0, Yq.f)(qq, null, Jq, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: qq => "zoomToMouseLocation" in qq,
              get: qq => qq.zoomToMouseLocation
            },
            metadata: Oq
          }, null, wq), (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "alpha" in qq,
              get: qq => qq.alpha,
              set: (qq, Eq) => {
                qq.alpha = Eq
              }
            },
            metadata: Oq
          }, Kq, Cq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: qq => "beta" in qq,
              get: qq => qq.beta,
              set: (qq, Eq) => {
                qq.beta = Eq
              }
            },
            metadata: Oq
          }, Iq, eq), (0, Yq.f)(null, null, Aq, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: qq => "radius" in qq,
              get: qq => qq.radius,
              set: (qq, Eq) => {
                qq.radius = Eq
              }
            },
            metadata: Oq
          }, Dq, qE), (0, Yq.f)(null, null, uq, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: qq => "overrideCloneAlphaBetaRadius" in qq,
              get: qq => qq.overrideCloneAlphaBetaRadius,
              set: (qq, Eq) => {
                qq.overrideCloneAlphaBetaRadius = Eq
              }
            },
            metadata: Oq
          }, EE, gE), (0, Yq.f)(null, null, Bq, {
            kind: "field",
            name: "K3",
            static: !1,
            private: !1,
            access: {
              has: qq => "K3" in qq,
              get: qq => qq.K3,
              set: (qq, Eq) => {
                qq.K3 = Eq
              }
            },
            metadata: Oq
          }, YE, lE), (0, Yq.f)(null, null, aq, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: qq => "_targetHost" in qq,
              get: qq => qq._targetHost,
              set: (qq, Eq) => {
                qq._targetHost = Eq
              }
            },
            metadata: Oq
          }, OE, mE), (0, Yq.f)(null, null, tq, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "lowerAlphaLimit" in qq,
              get: qq => qq.lowerAlphaLimit,
              set: (qq, Eq) => {
                qq.lowerAlphaLimit = Eq
              }
            },
            metadata: Oq
          }, xE, AE), (0, Yq.f)(null, null, rq, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "upperAlphaLimit" in qq,
              get: qq => qq.upperAlphaLimit,
              set: (qq, Eq) => {
                qq.upperAlphaLimit = Eq
              }
            },
            metadata: Oq
          }, cE, uE), (0, Yq.f)(null, null, vq, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "lowerBetaLimit" in qq,
              get: qq => qq.lowerBetaLimit,
              set: (qq, Eq) => {
                qq.lowerBetaLimit = Eq
              }
            },
            metadata: Oq
          }, BE, WE), (0, Yq.f)(null, null, hq, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "upperBetaLimit" in qq,
              get: qq => qq.upperBetaLimit,
              set: (qq, Eq) => {
                qq.upperBetaLimit = Eq
              }
            },
            metadata: Oq
          }, NE, aE), (0, Yq.f)(null, null, nq, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "lowerRadiusLimit" in qq,
              get: qq => qq.lowerRadiusLimit,
              set: (qq, Eq) => {
                qq.lowerRadiusLimit = Eq
              }
            },
            metadata: Oq
          }, VE, dE), (0, Yq.f)(null, null, bq, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "upperRadiusLimit" in qq,
              get: qq => qq.upperRadiusLimit,
              set: (qq, Eq) => {
                qq.upperRadiusLimit = Eq
              }
            },
            metadata: Oq
          }, jE, HE), (0, Yq.f)(null, null, iq, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "lowerTargetYLimit" in qq,
              get: qq => qq.lowerTargetYLimit,
              set: (qq, Eq) => {
                qq.lowerTargetYLimit = Eq
              }
            },
            metadata: Oq
          }, oE, PE), (0, Yq.f)(null, null, Zq, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: qq => "inertialPanningX" in qq,
              get: qq => qq.inertialPanningX,
              set: (qq, Eq) => {
                qq.inertialPanningX = Eq
              }
            },
            metadata: Oq
          }, QE, yE), (0, Yq.f)(null, null, fq, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: qq => "inertialPanningY" in qq,
              get: qq => qq.inertialPanningY,
              set: (qq, Eq) => {
                qq.inertialPanningY = Eq
              }
            },
            metadata: Oq
          }, tE, rE), (0, Yq.f)(null, null, Mq, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: qq => "pinchToPanMaxDistance" in qq,
              get: qq => qq.pinchToPanMaxDistance,
              set: (qq, Eq) => {
                qq.pinchToPanMaxDistance = Eq
              }
            },
            metadata: Oq
          }, vE, hE), (0, Yq.f)(null, null, zq, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: qq => "panningDistanceLimit" in qq,
              get: qq => qq.panningDistanceLimit,
              set: (qq, Eq) => {
                qq.panningDistanceLimit = Eq
              }
            },
            metadata: Oq
          }, nE, bE), (0, Yq.f)(null, null, Sq, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: qq => "panningOriginTarget" in qq,
              get: qq => qq.panningOriginTarget,
              set: (qq, Eq) => {
                qq.panningOriginTarget = Eq
              }
            },
            metadata: Oq
          }, iE, ZE), (0, Yq.f)(null, null, kq, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: qq => "zoomOnFactor" in qq,
              get: qq => qq.zoomOnFactor,
              set: (qq, Eq) => {
                qq.zoomOnFactor = Eq
              }
            },
            metadata: Oq
          }, fE, ME), (0, Yq.f)(null, null, Rq, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: qq => "targetScreenOffset" in qq,
              get: qq => qq.targetScreenOffset,
              set: (qq, Eq) => {
                qq.targetScreenOffset = Eq
              }
            },
            metadata: Oq
          }, TE, zE), (0, Yq.f)(null, null, Uq, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: qq => "allowUpsideDown" in qq,
              get: qq => qq.allowUpsideDown,
              set: (qq, Eq) => {
                qq.allowUpsideDown = Eq
              }
            },
            metadata: Oq
          }, SE, pE), (0, Yq.f)(null, null, Fq, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: qq => "useInputToRestoreState" in qq,
              get: qq => qq.useInputToRestoreState,
              set: (qq, Eq) => {
                qq.useInputToRestoreState = Eq
              }
            },
            metadata: Oq
          }, GE, LE), (0, Yq.f)(null, null, sq, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: qq => "restoreStateInterpolationFactor" in qq,
              get: qq => qq.restoreStateInterpolationFactor,
              set: (qq, Eq) => {
                qq.restoreStateInterpolationFactor = Eq
              }
            },
            metadata: Oq
          }, JE, kE), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      kq = !1;
    kq || (kq = !0, Aq.c.AddNodeConstructor("ArcRotateCamera", ((qq, Eq) => () => new Jq(qq, 0, 0, 1, mq.q.Zero(), Eq))), (0, zq.g)("BABYLON.ArcRotateCamera", Jq))
  },
  39988: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.d
    });
    var Yq = gq(39993);
    (0, Yq.e)()
  },
  39993: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      e: () => Wq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(37289),
      xq = gq(39995),
      Aq = gq(39960),
      cq = gq(37171);
    let uq = (() => {
        var qq;
        let Eq, gq, Aq = xq.c,
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        return qq = class extends Aq {
          constructor(qq, Eq, gq, lq) {
            super(qq, gq, lq), this.groundColor = (0, Yq.i)(this, cq, new mq.d(0, 0, 0)), this.direction = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Bq, void 0)), (0, Yq.i)(this, Wq), this.direction = Eq || Oq.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(qq) {
            return this.direction = Oq.q.Normalize(qq.subtract(Oq.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gq.x, gq.y, gq.z, 0, Eq), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eq), this
          }
          transferToNodeMaterialEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return qq.setFloat3(Eq, gq.x, gq.y, gq.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xq.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(qq, Eq) {
            qq["HEMILIGHT" + Eq] = !0
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.o)()], gq = [(0, lq.I)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "groundColor" in qq,
              get: qq => qq.groundColor,
              set: (qq, Eq) => {
                qq.groundColor = Eq
              }
            },
            metadata: Oq
          }, cq, uq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: qq => "direction" in qq,
              get: qq => qq.direction,
              set: (qq, Eq) => {
                qq.direction = Eq
              }
            },
            metadata: Oq
          }, Bq, Wq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      Bq = !1;

    function Wq() {
      Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
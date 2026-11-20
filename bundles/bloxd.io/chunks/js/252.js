export const id = 252;
export const ids = [252];
export const modules = {
  40528: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ib
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36753),
      Ub = hb(36727),
      Lb = hb(36757),
      Yb = hb(39670),
      Sb = hb(39854),
      ab = hb(39638),
      Hb = hb(39352),
      wb = hb(36734);
    class Zb {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(bb) {
        this._zoomStopsAnimation = bb
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(bb) {
        this._idleRotationSpeed = bb
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(bb) {
        this._idleRotationWaitTime = bb
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(bb) {
        this._idleRotationSpinupTime = bb
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
      attach(bb) {
        this._attachedCamera = bb;
        const ub = this._attachedCamera.ZN();
        this._onPrePointerObservableObserver = ub.onPrePointerObservable.add((bb => {
          bb.type !== ab.d.POINTERDOWN ? bb.type === ab.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const bb = Hb.d.Now;
          let ub = 0;
          null != this._lastFrameTime && (ub = bb - this._lastFrameTime), this._lastFrameTime = bb, this._applyUserInteraction();
          const hb = bb - this._lastInteractionTime - this._idleRotationWaitTime,
            Bb = Math.max(Math.min(hb / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Bb, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ub / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.ZN();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(bb) {
        this._lastInteractionTime = bb ?? Hb.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < wb.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let bb = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (bb = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? bb : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Hb.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    hb(40532);
    class Xb {
      constructor() {
        this._easingMode = Xb.EASINGMODE_EASEIN
      }
      setEasingMode(bb) {
        const ub = Math.min(Math.max(bb, 0), 2);
        this._easingMode = ub
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(bb) {
        throw new Error("You must implement this method")
      }
      ease(bb) {
        switch (this._easingMode) {
          case Xb.EASINGMODE_EASEIN:
            return this.easeInCore(bb);
          case Xb.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - bb)
        }
        return bb >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - bb))) + .5 : .5 * this.easeInCore(2 * bb)
      }
    }
    Xb.EASINGMODE_EASEIN = 0, Xb.EASINGMODE_EASEOUT = 1, Xb.EASINGMODE_EASEINOUT = 2;
    var pb = hb(40538);
    class ob {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(bb) {
        if (this._autoTransitionRange === bb) return;
        this._autoTransitionRange = bb;
        const ub = this._attachedCamera;
        ub && (bb ? this._onMeshTargetChangedObserver = ub.onMeshTargetChangedObservable.add((bb => {
          if (bb && (bb.computeWorldMatrix(!0), bb.XM)) {
            const ub = bb.XM().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * ub, this.upperRadiusTransitionRange = .05 * ub
          }
        })) : this._onMeshTargetChangedObserver && ub.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(bb) {
        this._attachedCamera = bb, this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(bb) {
        return !!this._attachedCamera && (this._attachedCamera.radius === bb && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(bb) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (ob.EasingFunction.setEasingMode(ob.EasingMode), this._radiusBounceTransition = pb.d.CreateAnimation("radius", pb.d.ANIMATIONTYPE_FLOAT, 60, ob.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const ub = pb.d.TransitionTo("radius", this._attachedCamera.radius + bb, this._attachedCamera, this._attachedCamera.ZN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        ub && this._animatables.push(ub)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    ob.EasingFunction = new class extends Xb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = bb
      }
      easeInCore(bb) {
        const ub = Math.max(0, this.amplitude);
        return Math.pow(bb, 3) - bb * ub * Math.sin(3.141592653589793 * bb)
      }
    }(.3), ob.EasingMode = Xb.EASINGMODE_EASEOUT;
    class Ab {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Gb.e, this._mode = Ab.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(bb) {
        this._mode = bb
      }
      get mode() {
        return this._mode
      }
      set radiusScale(bb) {
        this._radiusScale = bb
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(bb) {
        this._positionScale = bb
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(bb) {
        this._defaultElevation = bb
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(bb) {
        this._elevationReturnTime = bb
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(bb) {
        this._elevationReturnWaitTime = bb
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(bb) {
        this._zoomStopsAnimation = bb
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(bb) {
        this._framingTime = bb
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(bb) {
        this._attachedCamera = bb;
        const ub = this._attachedCamera.ZN();
        Ab.EasingFunction.setEasingMode(Ab.EasingMode), this._onPrePointerObservableObserver = ub.onPrePointerObservable.add((bb => {
          bb.type !== ab.d.POINTERDOWN ? bb.type === ab.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = bb.onMeshTargetChangedObservable.add((bb => {
          bb && bb.XM && this.zoomOnMesh(bb, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.ZN();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const Bb = bb.XM().boundingBox;
        this.zoomOnBoundingInfo(Bb.minimumWorld, Bb.maximumWorld, ub, hb)
      }
      zoomOnMeshHierarchy(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const Bb = bb.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Bb.min, Bb.max, ub, hb)
      }
      zoomOnMeshesHierarchy(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Bb = new Ub.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Ob = new Ub.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Gb = 0; Gb < bb.length; Gb++) {
          const ub = bb[Gb].getHierarchyBoundingVectors(!0);
          Ub.q.CheckExtends(ub.min, Bb, Ob), Ub.q.CheckExtends(ub.max, Bb, Ob)
        }
        this.zoomOnBoundingInfo(Bb, Ob, ub, hb)
      }
      zoomOnBoundingInfo(bb, ub) {
        let hb, Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Gb = bb.y,
          Lb = Gb + (ub.y - Gb) * this._positionScale,
          Yb = ub.subtract(bb).scale(.5);
        if (!isFinite(Lb)) return !1;
        if (Bb) hb = new Ub.q(0, Lb, 0);
        else {
          const ub = bb.add(Yb);
          hb = new Ub.q(ub.x, Lb, ub.z)
        }
        this._vectorTransition || (this._vectorTransition = pb.d.CreateAnimation("target", pb.d.ANIMATIONTYPE_VECTOR3, 60, Ab.EasingFunction)), this._betaIsAnimating = !0;
        let Sb = pb.d.TransitionTo("target", hb, this._attachedCamera, this._attachedCamera.ZN(), 60, this._vectorTransition, this._framingTime);
        Sb && this._animatables.push(Sb);
        let ab = 0;
        if (this._mode === Ab.FitFrustumSidesMode) {
          const hb = this._calculateLowerRadiusFromModelBoundingSphere(bb, ub);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Yb.length() + this._attachedCamera.minZ), ab = hb
        } else this._mode === Ab.IgnoreBoundsSizeMode && (ab = this._calculateLowerRadiusFromModelBoundingSphere(bb, ub), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const hb = ub.subtract(bb).length();
          this._attachedCamera.panningSensibility = 5e3 / hb, this._attachedCamera.wheelPrecision = 100 / ab
        }
        return this._radiusTransition || (this._radiusTransition = pb.d.CreateAnimation("radius", pb.d.ANIMATIONTYPE_FLOAT, 60, Ab.EasingFunction)), Sb = pb.d.TransitionTo("radius", ab, this._attachedCamera, this._attachedCamera.ZN(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Ob && Ob(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Sb && this._animatables.push(Sb), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(bb, ub) {
        const hb = this._attachedCamera;
        if (!hb) return 0;
        let Bb = hb._calculateLowerRadiusFromModelBoundingSphere(bb, ub, this._radiusScale);
        return hb.lowerRadiusLimit && this._mode === Ab.IgnoreBoundsSizeMode && (Bb = Bb < hb.lowerRadiusLimit ? hb.lowerRadiusLimit : Bb), hb.upperRadiusLimit && (Bb = Bb > hb.upperRadiusLimit ? hb.upperRadiusLimit : Bb), Bb
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const bb = Hb.d.Now - this._lastInteractionTime,
          ub = .5 * Math.PI - this._defaultElevation,
          hb = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > hb && bb >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = pb.d.CreateAnimation("beta", pb.d.ANIMATIONTYPE_FLOAT, 60, Ab.EasingFunction));
          const bb = pb.d.TransitionTo("beta", ub, this._attachedCamera, this._attachedCamera.ZN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          bb && this._animatables.push(bb)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Hb.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Ab.EasingFunction = new class extends Xb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = bb
      }
      easeInCore(bb) {
        return this.exponent <= 0 ? bb : (Math.exp(this.exponent * bb) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Ab.EasingMode = Xb.EASINGMODE_EASEINOUT, Ab.IgnoreBoundsSizeMode = 0, Ab.FitFrustumSidesMode = 1;
    var lb = hb(39666),
      Kb = hb(39663),
      Wb = hb(39686),
      Cb = hb(39559);
    let db = (() => {
        var bb;
        let ub, hb = [],
          Gb = [];
        return bb = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Bb.k)(this, hb, [0, 1, 2]), this._pointerInput = (0, Bb.k)(this, Gb)
          }
          attachControl(bb) {
            bb = Cb.k.BackCompatCameraNoPreventDefault(arguments);
            const ub = this.camera.UX(),
              hb = ub.getInputElement();
            let Bb = 0,
              Ob = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Gb => {
              const Ub = Gb.event,
                Lb = "touch" === Ub.pointerType;
              if (Gb.type !== ab.d.POINTERMOVE && -1 === this.buttons.indexOf(Ub.button)) return;
              const Yb = Ub.target;
              if (this._altKey = Ub.altKey, this._ctrlKey = Ub.ctrlKey, this._metaKey = Ub.metaKey, this._shiftKey = Ub.shiftKey, this._buttonsPressed = Ub.buttons, ub.isPointerLock) {
                const bb = Ub.movementX,
                  ub = Ub.movementY;
                this.onTouch(null, bb, ub), this._pointA = null, this._pointB = null
              } else {
                if (Gb.type !== ab.d.POINTERDOWN && Gb.type !== ab.d.POINTERDOUBLETAP && Lb && this._pointA?.pointerId !== Ub.pointerId && this._pointB?.pointerId !== Ub.pointerId) return;
                if (Gb.type !== ab.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Lb)
                  if (Gb.type === ab.d.POINTERDOUBLETAP) this.onDoubleTap(Ub.pointerType, Ub);
                  else if (Gb.type !== ab.d.POINTERUP || this._currentMousePointerIdDown !== Ub.pointerId && !Lb) {
                  if (Gb.type === ab.d.POINTERMOVE)
                    if (bb || Ub.preventDefault(), this._pointA && null === this._pointB) {
                      const bb = Ub.clientX - this._pointA.x,
                        ub = Ub.clientY - this._pointA.y;
                      this._pointA.x = Ub.clientX, this._pointA.y = Ub.clientY, this.onTouch(this._pointA, bb, ub)
                    } else if (this._pointA && this._pointB) {
                    const bb = this._pointA.pointerId === Ub.pointerId ? this._pointA : this._pointB;
                    bb.x = Ub.clientX, bb.y = Ub.clientY;
                    const ub = this._pointA.x - this._pointB.x,
                      hb = this._pointA.y - this._pointB.y,
                      Lb = ub * ub + hb * hb,
                      Yb = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Ub.pointerId,
                        type: Gb.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Bb, Lb, Ob, Yb), Ob = Yb, Bb = Lb
                  }
                } else {
                  try {
                    Yb?.releasePointerCapture(Ub.pointerId)
                  } catch (Sb) {}
                  Lb || (this._pointB = null), ub._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Ub.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Ub.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Bb || Ob) && (this.onMultiTouch(this._pointA, this._pointB, Bb, 0, Ob, null), Bb = 0, Ob = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Ub), bb || Ub.preventDefault()
                } else {
                  try {
                    Yb?.setPointerCapture(Ub.pointerId)
                  } catch (Sb) {}
                  if (null === this._pointA) this._pointA = {
                    x: Ub.clientX,
                    y: Ub.clientY,
                    pointerId: Ub.pointerId,
                    type: Ub.pointerType,
                    button: Ub.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Ub.clientX,
                      y: Ub.clientY,
                      pointerId: Ub.pointerId,
                      type: Ub.pointerType,
                      button: Ub.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Lb || (this._currentMousePointerIdDown = Ub.pointerId), this.onButtonDown(Ub), bb || (Ub.preventDefault(), hb && hb.focus())
                }
              }
            }, this._observer = this.camera.ZN()._inputManager._addCameraPointerObserver(this._pointerInput, ab.d.POINTERDOWN | ab.d.POINTERUP | ab.d.POINTERMOVE | ab.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Bb = 0, Ob = null, this.onLostFocus()
            }, this._contextMenuBind = bb => this.onContextMenu(bb), hb && hb.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Gb = this.camera.ZN().UX().getHostWindow();
            Gb && Cb.k.RegisterTopRootEvents(Gb, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const bb = this.camera.ZN().UX().getHostWindow();
              bb && Cb.k.UnregisterTopRootEvents(bb, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.ZN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const bb = this.camera.ZN().UX().getInputElement();
                bb && bb.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(bb, ub) {}
          onTouch(bb, ub, hb) {}
          onMultiTouch(bb, ub, hb, Bb, Ob, Gb) {}
          onContextMenu(bb) {
            bb.preventDefault()
          }
          onButtonDown(bb) {}
          onButtonUp(bb) {}
          onLostFocus() {}
        }, (() => {
          const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ub = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, ub) => {
                bb.buttons = ub
              }
            },
            metadata: Ub
          }, hb, Gb), Ub && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ub
          })
        })(), bb
      })(),
      rb = (() => {
        var bb;
        let ub, hb, Gb, Ub = db,
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        return bb = class extends Ub {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Bb.k)(this, Lb, !0), this.multiTouchPanning = ((0, Bb.k)(this, Yb), (0, Bb.k)(this, Sb, !0)), this.multiTouchPanAndZoom = ((0, Bb.k)(this, ab), (0, Bb.k)(this, Hb, !0)), this._isPinching = ((0, Bb.k)(this, wb), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(bb, ub) {}
          _computeMultiTouchPanning(bb, ub) {}
          onMultiTouch(bb, ub, hb, Bb, Ob, Gb) {
            0 === hb && null === Ob || 0 === Bb && null === Gb || (this.multiTouchPanAndZoom ? (this._computePinchZoom(hb, Bb), this._computeMultiTouchPanning(Ob, Gb)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(hb, Bb), this._isPinching = !0) : this._computeMultiTouchPanning(Ob, Gb)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Ob, Gb) : this.pinchZoom && this._computePinchZoom(hb, Bb))
          }
          onButtonUp(bb) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ub[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchZoom" in bb,
              get: bb => bb.pinchZoom,
              set: (bb, ub) => {
                bb.pinchZoom = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanning" in bb,
              get: bb => bb.multiTouchPanning,
              set: (bb, ub) => {
                bb.multiTouchPanning = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, Bb.h)(null, null, Gb, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanAndZoom" in bb,
              get: bb => bb.multiTouchPanAndZoom,
              set: (bb, ub) => {
                bb.multiTouchPanAndZoom = ub
              }
            },
            metadata: Zb
          }, Hb, wb), Zb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          })
        })(), bb
      })(),
      jb = (() => {
        var bb;
        let ub, hb, Gb, Ub, Lb, Yb, Sb, ab = rb,
          Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [],
          Ab = [],
          lb = [],
          Kb = [],
          Wb = [],
          Cb = [],
          db = [],
          jb = [],
          nb = [];
        return bb = class extends ab {
          constructor() {
            super(...arguments), this.buttons = (0, Bb.k)(this, Hb, [0, 1, 2]), this.angularSensibilityX = ((0, Bb.k)(this, wb), (0, Bb.k)(this, Zb, 1e3)), this.angularSensibilityY = ((0, Bb.k)(this, Xb), (0, Bb.k)(this, pb, 1e3)), this.pinchPrecision = ((0, Bb.k)(this, ob), (0, Bb.k)(this, Ab, 12)), this.pinchDeltaPercentage = ((0, Bb.k)(this, lb), (0, Bb.k)(this, Kb, 0)), this.useNaturalPinchZoom = ((0, Bb.k)(this, Wb), (0, Bb.k)(this, Cb, !1)), this.panningSensibility = ((0, Bb.k)(this, db), (0, Bb.k)(this, jb, 1e3)), this.pinchInwards = ((0, Bb.k)(this, nb), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(bb, ub) {
            if (bb && ub) {
              const hb = ub.x - bb.x,
                Bb = ub.y - bb.y,
                Ob = this.camera.movement.input.getEntry("pointer", "pan"),
                Gb = Ob?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Gb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -hb * Gb, this.camera.movement.panAccumulatedPixels.y += Bb * Gb)
            }
          }
          _computePinchZoom(ub, hb) {
            const Bb = this.camera.radius || bb.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Bb * Math.sqrt(ub) / Math.sqrt(hb);
            else if (this.pinchDeltaPercentage) {
              const bb = .001 * (hb - ub) * Bb * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            } else {
              const bb = (hb - ub) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            }
          }
          onTouch(bb, ub, hb) {
            const Bb = this._activeEntry ?? (this.camera.UX().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Bb)
              if ("pan" === Bb.interaction) {
                const bb = Bb.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== bb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ub * bb, this.camera.movement.panAccumulatedPixels.y += hb * bb)
              } else if ("rotate" === Bb.interaction) {
              const bb = Bb.KV ?? Bb.sensitivity ?? 1 / this.angularSensibilityX,
                Ob = Bb.rV ?? Bb.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -ub * bb, this.camera.movement.rotationAccumulatedPixels.y += -hb * Ob
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(bb, ub, hb, Bb, Ob, Gb) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Bb) - Math.sqrt(hb)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(bb, ub, hb, Bb, Ob, Gb)
          }
          onButtonDown(bb) {
            this._pointerConditions.button = bb.button, this._pointerModifiers.ctrl = bb.ctrlKey, this._pointerModifiers.alt = bb.altKey, this._pointerModifiers.shift = bb.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(bb)
          }
          onButtonUp(bb) {
            this._activeEntry = null, super.onButtonUp(bb)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const rb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ab[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], Ub = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, ub) => {
                bb.buttons = ub
              }
            },
            metadata: rb
          }, Hb, wb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityX" in bb,
              get: bb => bb.angularSensibilityX,
              set: (bb, ub) => {
                bb.angularSensibilityX = ub
              }
            },
            metadata: rb
          }, Zb, Xb), (0, Bb.h)(null, null, Gb, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityY" in bb,
              get: bb => bb.angularSensibilityY,
              set: (bb, ub) => {
                bb.angularSensibilityY = ub
              }
            },
            metadata: rb
          }, pb, ob), (0, Bb.h)(null, null, Ub, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchPrecision" in bb,
              get: bb => bb.pinchPrecision,
              set: (bb, ub) => {
                bb.pinchPrecision = ub
              }
            },
            metadata: rb
          }, Ab, lb), (0, Bb.h)(null, null, Lb, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchDeltaPercentage" in bb,
              get: bb => bb.pinchDeltaPercentage,
              set: (bb, ub) => {
                bb.pinchDeltaPercentage = ub
              }
            },
            metadata: rb
          }, Kb, Wb), (0, Bb.h)(null, null, Yb, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "useNaturalPinchZoom" in bb,
              get: bb => bb.useNaturalPinchZoom,
              set: (bb, ub) => {
                bb.useNaturalPinchZoom = ub
              }
            },
            metadata: rb
          }, Cb, db), (0, Bb.h)(null, null, Sb, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningSensibility" in bb,
              get: bb => bb.panningSensibility,
              set: (bb, ub) => {
                bb.panningSensibility = ub
              }
            },
            metadata: rb
          }, jb, nb), rb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rb
          })
        })(), bb.MinimumRadiusForPinch = .001, bb
      })();
    Wb.b.ArcRotateCameraPointersInput = jb;
    var nb = hb(39647);
    let Db = (() => {
      var bb;
      let ub, hb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb = [],
        ob = [],
        Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        db = [],
        rb = [],
        jb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [],
        ib = [],
        vb = [],
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [];
      return bb = class {
        constructor() {
          this.camera = (0, Bb.k)(this, pb), this.keysUp = (0, Bb.k)(this, ob, [38]), this.keysDown = ((0, Bb.k)(this, Ab), (0, Bb.k)(this, lb, [40])), this.keysLeft = ((0, Bb.k)(this, Kb), (0, Bb.k)(this, Wb, [37])), this.keysRight = ((0, Bb.k)(this, db), (0, Bb.k)(this, rb, [39])), this.keysReset = ((0, Bb.k)(this, jb), (0, Bb.k)(this, Db, [220])), this.keysZoomIn = ((0, Bb.k)(this, xb), (0, Bb.k)(this, zb, [187, 107])), this.keysZoomOut = ((0, Bb.k)(this, gb), (0, Bb.k)(this, ib, [189, 109])), this.panningSensibility = ((0, Bb.k)(this, vb), (0, Bb.k)(this, tb, 50)), this.zoomingSensibility = ((0, Bb.k)(this, Jb), (0, Bb.k)(this, eb, 25)), this.angularSpeed = ((0, Bb.k)(this, Nb), (0, Bb.k)(this, sb, .01)), this._useAltToZoom = ((0, Bb.k)(this, Mb), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Ub.m, this._panDirection = new Ub.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(bb) {
          this._useAltToZoom = bb, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const bb = this.camera.movement.input,
            ub = bb.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && ub ? bb.inputMap.splice(bb.inputMap.indexOf(ub), 1) : this._useAltToZoom && !ub && bb.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(bb) {
          bb = Cb.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.ZN(), this._engine = this._scene.UX(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ub => {
            const hb = ub.event;
            if (!hb.metaKey)
              if (ub.type === nb.e.KEYDOWN) {
                if (this._ctrlPressed = hb.ctrlKey, this._altPressed = hb.altKey, -1 !== this.keysUp.indexOf(hb.keyCode) || -1 !== this.keysDown.indexOf(hb.keyCode) || -1 !== this.keysLeft.indexOf(hb.keyCode) || -1 !== this.keysRight.indexOf(hb.keyCode) || -1 !== this.keysReset.indexOf(hb.keyCode) || -1 !== this.keysZoomIn.indexOf(hb.keyCode) || -1 !== this.keysZoomOut.indexOf(hb.keyCode)) {
                  -1 === this._keys.indexOf(hb.keyCode) && this._keys.push(hb.keyCode), hb.preventDefault && (bb || hb.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(hb.keyCode) || -1 !== this.keysDown.indexOf(hb.keyCode) || -1 !== this.keysLeft.indexOf(hb.keyCode) || -1 !== this.keysRight.indexOf(hb.keyCode) || -1 !== this.keysReset.indexOf(hb.keyCode) || -1 !== this.keysZoomIn.indexOf(hb.keyCode) || -1 !== this.keysZoomOut.indexOf(hb.keyCode)) {
              const ub = this._keys.indexOf(hb.keyCode);
              ub >= 0 && this._keys.splice(ub, 1), hb.preventDefault && (bb || hb.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              ub = bb.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const hb = this._rotateDirection.set(0, 0),
              Bb = this._panDirection.set(0, 0);
            let Ob = 0,
              Gb = 0;
            for (let Ub = 0; Ub < this._keys.length; Ub++) {
              const Lb = this._keys[Ub];
              if (this._keyboardConditions.key = Lb, -1 === this.keysReset.indexOf(Lb)) {
                const bb = ub.resolveInteraction("keyboard", this._keyboardConditions);
                if (bb)
                  if ("pan" === bb.interaction) Gb = Math.max(Gb, bb.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Lb) ? Bb.x -= 1 : -1 !== this.keysRight.indexOf(Lb) ? Bb.x += 1 : -1 !== this.keysUp.indexOf(Lb) ? Bb.y += 1 : -1 !== this.keysDown.indexOf(Lb) && (Bb.y -= 1);
                  else if ("zoom" === bb.interaction) {
                  const hb = bb.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Lb) || -1 !== this.keysZoomIn.indexOf(Lb) ? ub.handlers.zoom(hb) : -1 === this.keysDown.indexOf(Lb) && -1 === this.keysZoomOut.indexOf(Lb) || ub.handlers.zoom(-hb)
                } else "rotate" === bb.interaction && (Ob = Math.max(Ob, bb.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Lb) ? hb.x -= 1 : -1 !== this.keysRight.indexOf(Lb) ? hb.x += 1 : -1 !== this.keysUp.indexOf(Lb) ? hb.y -= 1 : -1 !== this.keysDown.indexOf(Lb) && (hb.y += 1))
              } - 1 !== this.keysReset.indexOf(Lb) && bb.useInputToRestoreState && bb.restoreState()
            }
            0 === hb.x && 0 === hb.y || (hb.normalize().scaleInPlace(Ob), ub.handlers.rotate(hb.x, hb.y)), 0 === Bb.x && 0 === Bb.y || (Bb.normalize().scaleInPlace(Gb), ub.handlers.pan(Bb.x, Bb.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.K)()], wb = [(0, Ob.K)()], Zb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], (0, Bb.h)(bb, null, Xb, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAltToZoom" in bb,
            get: bb => bb.useAltToZoom
          },
          metadata: Ub
        }, null, pb), (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, ub) => {
              bb.keysUp = ub
            }
          },
          metadata: Ub
        }, ob, Ab), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, ub) => {
              bb.keysDown = ub
            }
          },
          metadata: Ub
        }, lb, Kb), (0, Bb.h)(null, null, Gb, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, ub) => {
              bb.keysLeft = ub
            }
          },
          metadata: Ub
        }, Wb, db), (0, Bb.h)(null, null, Lb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, ub) => {
              bb.keysRight = ub
            }
          },
          metadata: Ub
        }, rb, jb), (0, Bb.h)(null, null, Yb, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysReset" in bb,
            get: bb => bb.keysReset,
            set: (bb, ub) => {
              bb.keysReset = ub
            }
          },
          metadata: Ub
        }, Db, xb), (0, Bb.h)(null, null, Sb, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomIn" in bb,
            get: bb => bb.keysZoomIn,
            set: (bb, ub) => {
              bb.keysZoomIn = ub
            }
          },
          metadata: Ub
        }, zb, gb), (0, Bb.h)(null, null, ab, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomOut" in bb,
            get: bb => bb.keysZoomOut,
            set: (bb, ub) => {
              bb.keysZoomOut = ub
            }
          },
          metadata: Ub
        }, ib, vb), (0, Bb.h)(null, null, Hb, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "panningSensibility" in bb,
            get: bb => bb.panningSensibility,
            set: (bb, ub) => {
              bb.panningSensibility = ub
            }
          },
          metadata: Ub
        }, tb, Jb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomingSensibility" in bb,
            get: bb => bb.zoomingSensibility,
            set: (bb, ub) => {
              bb.zoomingSensibility = ub
            }
          },
          metadata: Ub
        }, eb, Nb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSpeed" in bb,
            get: bb => bb.angularSpeed,
            set: (bb, ub) => {
              bb.angularSpeed = ub
            }
          },
          metadata: Ub
        }, sb, Mb), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb
    })();
    Wb.b.ArcRotateCameraKeyboardMoveInput = Db;
    var xb = hb(37399),
      zb = hb(39650);
    let gb = (() => {
      var bb;
      let ub, hb, Gb, Yb = [],
        Sb = [],
        Hb = [],
        Zb = [],
        Xb = [],
        pb = [];
      return bb = class {
        constructor() {
          this.wheelPrecision = (0, Bb.k)(this, Yb, 3), this.zoomToMouseLocation = ((0, Bb.k)(this, Sb), (0, Bb.k)(this, Hb, !1)), this.wheelDeltaPercentage = ((0, Bb.k)(this, Zb), (0, Bb.k)(this, Xb, 0)), this.customComputeDeltaFromMouseWheel = ((0, Bb.k)(this, pb), null), this._viewOffset = new Ub.q(0, 0, 0), this._globalOffset = new Ub.q(0, 0, 0), this._inertialPanning = Ub.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(bb, ub) {
          let hb;
          const Bb = .01 * bb * this.wheelDeltaPercentage * ub;
          return hb = bb > 0 ? Bb / (1 + this.wheelDeltaPercentage) : Bb * (1 + this.wheelDeltaPercentage), hb
        }
        attachControl(bb) {
          bb = Cb.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = ub => {
            if (ub.type !== ab.d.POINTERWHEEL) return;
            const hb = ub.event;
            let Bb;
            const Ob = hb.deltaMode === zb.d.DOM_DELTA_LINE ? 40 : 1,
              Gb = -hb.deltaY * Ob;
            if (this.customComputeDeltaFromMouseWheel) Bb = this.customComputeDeltaFromMouseWheel(Gb, this, hb);
            else if (this.wheelDeltaPercentage) {
              if (Bb = this._computeDeltaFromMouseWheelLegacyEvent(Gb, this.camera.radius), Bb > 0) {
                const bb = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let ub = this.camera.radius,
                  hb = bb + Bb;
                for (let Bb = 0; Bb < 20 && !(ub <= hb) && !(Math.abs(hb * this.camera.inertia) < .001); Bb++) ub -= hb, hb *= this.camera.inertia;
                ub = (0, Lb.Clamp)(ub, 0, Number.MAX_VALUE), Bb = this._computeDeltaFromMouseWheelLegacyEvent(Gb, ub)
              }
            } else {
              const bb = this.camera.movement.input.getEntry("wheel", "zoom");
              Bb = Gb * (bb?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Bb && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Bb)) : this.camera.movement.zoomAccumulatedPixels += Bb), hb.preventDefault && (bb || hb.preventDefault())
          }, this._observer = this.camera.ZN()._inputManager._addCameraPointerObserver(this._wheel, ab.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.N9(0)
        }
        detachControl() {
          this._observer && (this.camera.ZN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const bb = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(bb.inertialAlphaOffset) + Math.abs(bb.inertialBetaOffset) + Math.abs(bb.inertialRadiusOffset)) {
            this._updateHitPlane(), bb.target.addInPlace(this._inertialPanning), bb.radius -= this._zoomToMouseRadiusOffset;
            const ub = bb.movement.getFrameIndependentDecay(bb.inertia);
            this._inertialPanning.scaleInPlace(ub), this._zoomToMouseRadiusOffset *= ub, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < wb.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const bb = this.camera,
            ub = bb.target.subtract(bb.position);
          this._hitPlane = xb.d.FromPositionAndNormal(bb.target, ub)
        }
        _getPosition() {
          const bb = this.camera,
            ub = bb.ZN(),
            hb = ub.createPickingRay(ub.pointerX, ub.pointerY, Ub.d.Identity(), bb, !1);
          0 === bb.targetScreenOffset.x && 0 === bb.targetScreenOffset.y || (this._viewOffset.set(bb.targetScreenOffset.x, bb.targetScreenOffset.y, 0), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), this._globalOffset = Ub.q.TransformNormal(this._viewOffset, bb._cameraTransformMatrix), hb.origin.addInPlace(this._globalOffset));
          let Bb = 0;
          return this._hitPlane && (Bb = hb.intersectsPlane(this._hitPlane) ?? 0), hb.origin.addInPlace(hb.direction.scaleInPlace(Bb))
        }
        _zoomToMouse(bb) {
          const ub = this.camera,
            hb = 1 - ub.inertia,
            Bb = ub.movement.getFrameIndependentInputScale(ub.inertia);
          if (ub.lowerRadiusLimit) {
            const Ob = ub.lowerRadiusLimit ?? 0;
            ub.radius - (this._zoomToMouseRadiusOffset + bb * Bb) / hb < Ob && (bb = ((ub.radius - Ob) * hb - this._zoomToMouseRadiusOffset) / Bb)
          }
          if (ub.upperRadiusLimit) {
            const Ob = ub.upperRadiusLimit ?? 0;
            ub.radius - (this._zoomToMouseRadiusOffset + bb * Bb) / hb > Ob && (bb = ((ub.radius - Ob) * hb - this._zoomToMouseRadiusOffset) / Bb)
          }
          const Ob = bb / hb / ub.radius,
            Gb = this._getPosition(),
            Lb = Ub.i.YX[6];
          Gb.subtractToRef(ub.target, Lb), Lb.scaleInPlace(Ob), Lb.scaleInPlace(hb), Lb.scaleInPlace(Bb), this._inertialPanning.addInPlace(Lb), this._zoomToMouseRadiusOffset += bb * Bb
        }
        _zeroIfClose(bb) {
          Math.abs(bb.x) < wb.b && (bb.x = 0), Math.abs(bb.y) < wb.b && (bb.y = 0), Math.abs(bb.z) < wb.b && (bb.z = 0)
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecision" in bb,
            get: bb => bb.wheelPrecision,
            set: (bb, ub) => {
              bb.wheelPrecision = ub
            }
          },
          metadata: Ub
        }, Yb, Sb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomToMouseLocation" in bb,
            get: bb => bb.zoomToMouseLocation,
            set: (bb, ub) => {
              bb.zoomToMouseLocation = ub
            }
          },
          metadata: Ub
        }, Hb, Zb), (0, Bb.h)(null, null, Gb, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelDeltaPercentage" in bb,
            get: bb => bb.wheelDeltaPercentage,
            set: (bb, ub) => {
              bb.wheelDeltaPercentage = ub
            }
          },
          metadata: Ub
        }, Xb, pb), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb
    })();
    Wb.b.ArcRotateCameraMouseWheelInput = gb;
    var ib, vb, tb = hb(39333);
    class Jb extends Wb.f {
      constructor(bb) {
        super(bb)
      }
      addMouseWheel() {
        return this.add(new gb), this
      }
      addPointers() {
        return this.add(new jb), this
      }
      addKeyboard() {
        return this.add(new Db), this
      }
    }(ib = Jb.prototype).addVRDeviceOrientation ?? (ib.addVRDeviceOrientation = (0, tb.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (vb = Jb.prototype).addGamepad ?? (vb.addGamepad = (0, tb.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var eb = hb(36762),
      Nb = hb(39676),
      sb = hb(39684);
    class Mb extends Nb.d {
      constructor(bb, ub, hb) {
        super(bb, ub, hb), this.input = new sb.e({
          pan: (bb, ub) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += ub
          },
          rotate: (bb, ub) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += ub
          },
          zoom: bb => {
            this.zoomAccumulatedPixels += bb
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

    function mb(bb, ub) {
      return isNaN(bb) ? ub : bb
    }
    let Ib = (() => {
        var bb;
        let ub, hb, Yb, ab, Hb, Xb, pb, Wb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb, tb, eb, Nb, sb, Ib, Pb, qb, Eb, yb, Vb, Fb = Kb.d,
          fb = [],
          kb = [],
          Tb = [],
          cb = [],
          Qb = [],
          Rb = [],
          bu = [],
          uu = [],
          hu = [],
          Bu = [],
          Ou = [],
          Gu = [],
          Uu = [],
          Lu = [],
          Yu = [],
          Su = [],
          au = [],
          Hu = [],
          wu = [],
          Zu = [],
          Xu = [],
          pu = [],
          ou = [],
          Au = [],
          lu = [],
          Ku = [],
          Wu = [],
          Cu = [],
          du = [],
          ru = [],
          ju = [],
          nu = [],
          Du = [],
          xu = [],
          zu = [],
          gu = [],
          iu = [],
          vu = [],
          tu = [],
          Ju = [],
          eu = [],
          Nu = [],
          su = [],
          Mu = [],
          mu = [],
          Iu = [],
          Pu = [];
        return bb = class extends Fb {
          get target() {
            return this.jT
          }
          set target(bb) {
            this.setTarget(bb)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(bb) {
            bb && this.setTarget(bb)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(bb) {
            this.setPosition(bb)
          }
          set upVector(bb) {
            this._upToYMatrix || (this._yToUpMatrix = new Ub.d, this._upToYMatrix = new Ub.d, this._upVector = Ub.q.Zero()), bb.normalize(), this._upVector.mD(bb), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Ub.d.RotationAlignToRef(Ub.q.UpReadOnly, this._upVector, this._yToUpMatrix), Ub.d.RotationAlignToRef(this._upVector, Ub.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const bb = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(bb) < this._rotationEpsilon ? 0 : bb
          }
          set inertialAlphaOffset(bb) {
            this._inertialAlphaOffset = bb, 0 === bb && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const bb = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(bb) < this._rotationEpsilon ? 0 : bb
          }
          set inertialBetaOffset(bb) {
            this._inertialBetaOffset = bb, 0 === bb && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const bb = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(bb) < this._rotationEpsilon ? 0 : bb
          }
          set inertialRadiusOffset(bb) {
            this._inertialRadiusOffset = bb, 0 === bb && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(bb) {
            this._panningInertia = bb, this.movement && (this.movement.panInertia = bb)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(bb) {
            this._inertia = bb, this.movement && (this.movement.rotationInertia = bb, this.movement.zoomInertia = bb)
          }
          get angularSensibilityX() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.angularSensibilityX : 0
          }
          set angularSensibilityX(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.angularSensibilityX = bb)
          }
          get angularSensibilityY() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.angularSensibilityY : 0
          }
          set angularSensibilityY(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.angularSensibilityY = bb)
          }
          get pinchPrecision() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchPrecision : 0
          }
          set pinchPrecision(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.pinchPrecision = bb)
          }
          get pinchDeltaPercentage() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.pinchDeltaPercentage = bb)
          }
          get useNaturalPinchZoom() {
            const bb = this.inputs.attached.pointers;
            return !!bb && bb.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.useNaturalPinchZoom = bb)
          }
          get panningSensibility() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.panningSensibility : 0
          }
          set panningSensibility(bb) {
            const ub = this.inputs.attached.pointers;
            ub && (ub.panningSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysUp = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysDown = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const ub = this.inputs.attached.keyboard;
            ub && (ub.keysRight = bb)
          }
          get wheelPrecision() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelPrecision : 0
          }
          set wheelPrecision(bb) {
            const ub = this.inputs.attached.mousewheel;
            ub && (ub.wheelPrecision = bb)
          }
          get zoomToMouseLocation() {
            const bb = this.inputs.attached.mousewheel;
            return !!bb && bb.zoomToMouseLocation
          }
          set zoomToMouseLocation(bb) {
            const ub = this.inputs.attached.mousewheel;
            ub && (ub.zoomToMouseLocation = bb)
          }
          get wheelDeltaPercentage() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(bb) {
            const ub = this.inputs.attached.mousewheel;
            ub && (ub.wheelDeltaPercentage = bb)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(bb) {
            this._useCtrlForPanningInternal = bb;
            const ub = this.movement.input,
              hb = ub.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !bb && hb ? ub.inputMap.splice(ub.inputMap.indexOf(hb), 1) : bb && !hb && ub.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Bb = ub.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !bb && Bb ? ub.inputMap.splice(ub.inputMap.indexOf(Bb), 1) : bb && !Bb && ub.addEntry({
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
          set _panningMouseButton(bb) {
            this._panningMouseButtonInternal = bb;
            const ub = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            ub && (ub.button = bb)
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
          set useBouncingBehavior(bb) {
            bb !== this.useBouncingBehavior && (bb ? (this._bouncingBehavior = new ob, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(bb) {
            bb !== this.useFramingBehavior && (bb ? (this._framingBehavior = new Ab, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(bb) {
            bb !== this.useAutoRotationBehavior && (bb ? (this._autoRotationBehavior = new Zb, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(bb, ub, hb, Ob, Lb, Yb) {
            var Sb;
            let ab = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(bb, Ub.q.Zero(), Yb, ab), Sb = this, this.alpha = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, void 0)), this.beta = ((0, Bb.k)(this, Tb), (0, Bb.k)(this, cb, void 0)), this.radius = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, void 0)), this.jT = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, void 0)), this._targetHost = ((0, Bb.k)(this, Ou), (0, Bb.k)(this, Gu, void 0)), this._upToYMatrix = (0, Bb.k)(this, Uu), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Bb.k)(this, Lu, null), this.upperAlphaLimit = ((0, Bb.k)(this, Yu), (0, Bb.k)(this, Su, null)), this.lowerBetaLimit = ((0, Bb.k)(this, au), (0, Bb.k)(this, Hu, .01)), this.upperBetaLimit = ((0, Bb.k)(this, wu), (0, Bb.k)(this, Zu, Math.PI - .01)), this.lowerRadiusLimit = ((0, Bb.k)(this, Xu), (0, Bb.k)(this, pu, null)), this.upperRadiusLimit = ((0, Bb.k)(this, ou), (0, Bb.k)(this, Au, null)), this.lowerTargetYLimit = ((0, Bb.k)(this, lu), (0, Bb.k)(this, Ku, -1 / 0)), this.inertialPanningX = ((0, Bb.k)(this, Wu), (0, Bb.k)(this, Cu, 0)), this.inertialPanningY = ((0, Bb.k)(this, du), (0, Bb.k)(this, ru, 0)), this.pinchToPanMaxDistance = ((0, Bb.k)(this, ju), (0, Bb.k)(this, nu, 20)), this.panningDistanceLimit = ((0, Bb.k)(this, Du), (0, Bb.k)(this, xu, null)), this.panningOriginTarget = ((0, Bb.k)(this, zu), (0, Bb.k)(this, gu, Ub.q.Zero())), this._panningInertia = ((0, Bb.k)(this, iu), .9), this._inertia = .9, this.zoomOnFactor = (0, Bb.k)(this, vu, 1), this.targetScreenOffset = ((0, Bb.k)(this, tu), (0, Bb.k)(this, Ju, Ub.m.Zero())), this.allowUpsideDown = ((0, Bb.k)(this, eu), (0, Bb.k)(this, Nu, !0)), this.useInputToRestoreState = ((0, Bb.k)(this, su), (0, Bb.k)(this, Mu, !0)), this.restoreStateInterpolationFactor = ((0, Bb.k)(this, mu), (0, Bb.k)(this, Iu, 0)), this._currentInterpolationFactor = ((0, Bb.k)(this, Pu), 0), this._viewMatrix = new Ub.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Ub.q(1, 1, 0), this._transformedDirection = new Ub.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Gb.e, this.checkCollisions = !1, this.collisionRadius = new Ub.q(.5, .5, .5), this._previousPosition = Ub.q.Zero(), this._collisionVelocity = Ub.q.Zero(), this._newPosition = Ub.q.Zero(), this._computationVector = Ub.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Ub.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new Ub.m(NaN, NaN), this._onCollisionPositionChange = function(bb, ub) {
              let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              hb ? (Sb.setPosition(ub), Sb.FH && Sb.FH(hb)) : Sb._previousPosition.mD(Sb._position);
              const Bb = Math.cos(Sb.alpha),
                Ob = Math.sin(Sb.alpha),
                Gb = Math.cos(Sb.beta);
              let Ub = Math.sin(Sb.beta);
              0 === Ub && (Ub = 1e-4);
              const Lb = Sb._getTargetPosition();
              Sb._computationVector.M_(Sb.radius * Bb * Ub, Sb.radius * Gb, Sb.radius * Ob * Ub), Lb.addToRef(Sb._computationVector, Sb._newPosition), Sb._position.mD(Sb._newPosition);
              let Yb = Sb.upVector;
              Sb.allowUpsideDown && Sb.beta < 0 && (Yb = Yb.clone(), Yb = Yb.AO()), Sb._computeViewMatrix(Sb._position, Lb, Yb), Sb._viewMatrix.addAtIndex(12, Sb.targetScreenOffset.x), Sb._viewMatrix.addAtIndex(13, Sb.targetScreenOffset.y), Sb._collisionTriggered = !1
            }, this.jT = Ub.q.Zero(), Lb && this.setTarget(Lb), this.alpha = ub, this.beta = hb, this.radius = Ob, this.getViewMatrix(), this.inputs = new Jb(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Mb(this.ZN(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.jT = new Ub.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Ub.m.Zero()
          }
          _updateCache(bb) {
            bb || super._updateCache(), this._cache.jT.mD(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.mD(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const bb = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? bb.addToRef(this._targetBoundingCenter, this.jT) : this.jT.mD(bb)
            }
            const bb = this._getLockedTargetPosition();
            return bb || this.jT
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > wb.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Gb = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Gb ? this._currentInterpolationFactor = Gb : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = mb(bb, this._goalAlpha), this._goalBeta = mb(ub, this._goalBeta), this._goalRadius = mb(hb, this._goalRadius), this._goalTarget.set(mb(Bb.x, this._goalTarget.x), mb(Bb.y, this._goalTarget.y), mb(Bb.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(mb(Ob.x, this._goalTargetScreenOffset.x), mb(Ob.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Lb.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Lb.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Lb.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Lb.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.jT.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(bb, ub) {
            let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Ob = arguments;
            ub = Cb.k.BackCompatCameraNoPreventDefault(Ob), this._useCtrlForPanning = hb, this._panningMouseButton = Bb, "boolean" === typeof Ob[0] && (Ob.length > 1 && (this._useCtrlForPanning = Ob[1]), Ob.length > 2 && (this._panningMouseButton = Ob[2])), this.inputs.attachElement(ub), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(bb, ub, hb) {
            const Bb = this.invertRotation ? -1 : 1;
            let Ob = bb * this._calculateHandednessMultiplier();
            this.beta < 0 && (Ob *= -1), this.alpha += Ob * Bb, this.beta += ub * Bb, this.radius -= hb
          }
          _applyPanDelta(bb, ub) {
            const hb = Ub.i.YX[0].M_(bb, ub, ub);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), hb.multiplyInPlace(this.panningAxis), Ub.q.TransformNormalToRef(hb, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const bb = this.upVector,
                ub = Ub.q.CrossToRef(this._transformedDirection, bb, this._transformedDirection);
              Ub.q.CrossToRef(bb, ub, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.jT);
                Ub.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.jT.mD(this._transformedDirection)
              } else {
                if (this.parent) {
                  const bb = Ub.i.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(bb), bb.transposeToRef(bb), Ub.q.TransformCoordinatesToRef(this._transformedDirection, bb, this._transformedDirection)
                }
                this.jT.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let bb = !1;
            this.movement.computeCurrentFrameDeltas();
            const ub = this.movement.rotationDeltaCurrentFrame,
              hb = this.movement.zoomDeltaCurrentFrame,
              Bb = this.movement.panDeltaCurrentFrame;
            if (0 === ub.x && 0 === ub.y && 0 === hb && 0 === Bb.x && 0 === Bb.y || (bb = !0, 0 === ub.x && 0 === ub.y && 0 === hb || this._applyRotationAndZoomDelta(ub.x, ub.y, hb), 0 === Bb.x && 0 === Bb.y || this._applyPanDelta(Bb.x, Bb.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), bb = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const ub = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < ub && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < ub && (this.inertialPanningY = 0), bb = !0
            }
            if (bb) this.stopInterpolation();
            else if (this._isInterpolating) {
              let bb = !1;
              const ub = this._scene.UX().getDeltaTime() / 1e3,
                hb = 1 - Math.pow(2, -ub / this._currentInterpolationFactor),
                Bb = mb(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const ub = Ub.i.YX[0].set(mb(this._goalTarget.x, this.jT.x), mb(this._goalTarget.y, this.jT.y), mb(this._goalTarget.z, this.jT.z));
                Ub.q.LerpToRef(this.target, ub, hb, this.jT), 10 * Ub.q.Distance(this.target, ub) / Bb < wb.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.mD(ub), this.setTarget(this.target, !1, !0, !0)) : bb = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const ub = Ub.f.RotationAlphaBetaGammaToRef(mb(this._goalAlpha, this.alpha), mb(this._goalBeta, this.beta), 0, Ub.i.Quaternion[0]),
                  Bb = Ub.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Ub.i.Quaternion[1]),
                  Ob = Ub.f.SlerpToRef(Bb, ub, hb, Ub.i.Quaternion[2]);
                Ob.normalize();
                const Gb = Ob.toAlphaBetaGammaToRef(Ub.i.YX[0]);
                if (this.alpha = Gb.x, this.beta = Gb.y, Ob.isApprox(ub, wb.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const bb = ub.toAlphaBetaGammaToRef(Ub.i.YX[0]);
                  this.alpha = bb.x, this.beta = bb.y
                } else bb = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Bb - this.radius) * hb, Math.abs(Bb / this.radius - 1) < wb.b ? (this._goalRadius = NaN, this.radius = Bb) : bb = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const ub = Ub.i.Vector2[0].set(mb(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), mb(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Ub.m.LerpToRef(this.targetScreenOffset, ub, hb, this.targetScreenOffset), Ub.m.Distance(this.targetScreenOffset, ub) < wb.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.mD(ub)) : bb = !0
              }
              this._isInterpolating = bb
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Ub.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const bb = this.alpha;
            var ub, hb;
            this.alpha = function(bb) {
              let ub = Math.PI / 2;
              return 0 === bb.x && 0 === bb.z || (ub = Math.acos(bb.x / Math.sqrt(Math.pow(bb.x, 2) + Math.pow(bb.z, 2)))), bb.z < 0 && (ub = 2 * Math.PI - ub), ub
            }(this._computationVector), this.beta = (ub = this._computationVector.y, hb = this.radius, Math.acos(ub / hb));
            const Bb = Math.round((bb - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Bb * Math.PI, this._checkLimits()
          }
          setPosition(bb) {
            this._position.equals(bb) || (this._position.mD(bb), this.rebuildAnglesAndRadius())
          }
          setTarget(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Bb = this.overrideCloneAlphaBetaRadius ?? Bb, bb.computeWorldMatrix) ub && bb.XM ? this._targetBoundingCenter = bb.XM().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, bb.computeWorldMatrix(), this._targetHost = bb, this.jT = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const ub = bb,
                Bb = this._getTargetPosition();
              if (Bb && !hb && Bb.equals(ub)) return;
              this._targetHost = null, this.jT = ub, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Bb || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const bb = Math.cos(this.alpha),
              ub = Math.sin(this.alpha),
              hb = Math.cos(this.beta);
            let Bb = Math.sin(this.beta);
            0 === Bb && (Bb = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Ob = this._getTargetPosition();
            if (this._computationVector.M_(this.radius * bb * Bb, this.radius * hb, this.radius * ub * Bb), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Ub.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Ob.addToRef(this._computationVector, this._newPosition), this.ZN().collisionsEnabled && this.checkCollisions) {
              const bb = this.ZN().collisionCoordinator;
              this._collider || (this._collider = bb.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, bb.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.mD(this._newPosition);
              let bb = this.upVector;
              this.allowUpsideDown && Bb < 0 && (bb = bb.AO()), this._computeViewMatrix(this._position, Ob, bb), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.mD(Ob), this._viewMatrix
          }
          zoomOn(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            bb = bb || this.ZN().meshes;
            const hb = Sb.c.MinMax(bb);
            let Bb = this._calculateLowerRadiusFromModelBoundingSphere(hb.min, hb.max);
            if (Bb = Math.max(Math.min(Bb, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Bb * this.zoomOnFactor, this.mode === lb.d.ORTHOGRAPHIC_CAMERA) {
              const bb = this.ZN().UX().getAspectRatio(this),
                ub = Bb * this.zoomOnFactor / 2;
              this.orthoLeft = -ub * bb, this.orthoRight = ub * bb, this.orthoBottom = -ub, this.orthoTop = ub
            }
            this.focusOn({
              min: hb.min,
              max: hb.max,
              distance: Bb
            }, ub)
          }
          focusOn(bb) {
            let ub, hb, Bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === bb.min) {
              const Bb = bb || this.ZN().meshes;
              ub = Sb.c.MinMax(Bb), hb = Ub.q.Distance(ub.min, ub.max)
            } else {
              ub = bb, hb = bb.distance
            }
            this.jT = Sb.c.Center(ub), Bb || (this.maxZ = 2 * hb)
          }
          createRigCamera(ub, hb) {
            let Bb = 0;
            switch (this.cameraRigMode) {
              case lb.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case lb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case lb.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case lb.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case lb.d.RIG_MODE_VR:
                Bb = this._cameraRigParams.stereoHalfAngle * (0 === hb ? 1 : -1);
                break;
              case lb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Bb = this._cameraRigParams.stereoHalfAngle * (0 === hb ? -1 : 1)
            }
            const Ob = new bb(ub, this.alpha + Bb, this.beta, this.radius, this.jT, this.ZN());
            return Ob._cameraRigParams = {}, Ob.isRigCamera = !0, Ob.rigParent = this, Ob.upVector = this.upVector, Ob.mode = this.mode, Ob.orthoLeft = this.orthoLeft, Ob.orthoRight = this.orthoRight, Ob.orthoBottom = this.orthoBottom, Ob.orthoTop = this.orthoTop, Ob
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              ub = this._rigCameras[1];
            switch (bb.beta = ub.beta = this.beta, this.cameraRigMode) {
              case lb.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case lb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case lb.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case lb.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case lb.d.RIG_MODE_VR:
                bb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, ub.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case lb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                bb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, ub.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Bb = Ub.q.Distance(bb, ub),
              Ob = this.ZN().UX().getAspectRatio(this),
              Gb = Math.tan(this.fov / 2),
              Lb = Gb * Ob,
              Yb = .5 * Bb * hb,
              Sb = Yb * Math.sqrt(1 + 1 / (Lb * Lb)),
              ab = Yb * Math.sqrt(1 + 1 / (Gb * Gb));
            return Math.max(Sb, ab)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.H)("target")], Xb = [(0, Ob.z)("targetHost")], pb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], db = [(0, Ob.K)()], rb = [(0, Ob.K)()], jb = [(0, Ob.K)()], nb = [(0, Ob.K)()], Db = [(0, Ob.K)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], ib = [(0, Ob.K)()], vb = [(0, Ob.K)()], tb = [(0, Ob.K)()], eb = [(0, Ob.K)()], Nb = [(0, Ob.H)()], sb = [(0, Ob.K)()], Ib = [(0, Ob.K)()], Pb = [(0, Ob.K)()], qb = [(0, Ob.F)()], Eb = [(0, Ob.K)()], yb = [(0, Ob.K)()], Vb = [(0, Ob.K)()], (0, Bb.h)(bb, null, pb, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialAlphaOffset" in bb,
              get: bb => bb.inertialAlphaOffset
            },
            metadata: Gb
          }, null, fb), (0, Bb.h)(bb, null, Wb, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialBetaOffset" in bb,
              get: bb => bb.inertialBetaOffset
            },
            metadata: Gb
          }, null, fb), (0, Bb.h)(bb, null, db, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialRadiusOffset" in bb,
              get: bb => bb.inertialRadiusOffset
            },
            metadata: Gb
          }, null, fb), (0, Bb.h)(bb, null, sb, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningInertia" in bb,
              get: bb => bb.panningInertia
            },
            metadata: Gb
          }, null, fb), (0, Bb.h)(bb, null, Ib, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomToMouseLocation" in bb,
              get: bb => bb.zoomToMouseLocation
            },
            metadata: Gb
          }, null, fb), (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "alpha" in bb,
              get: bb => bb.alpha,
              set: (bb, ub) => {
                bb.alpha = ub
              }
            },
            metadata: Gb
          }, kb, Tb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: bb => "beta" in bb,
              get: bb => bb.beta,
              set: (bb, ub) => {
                bb.beta = ub
              }
            },
            metadata: Gb
          }, cb, Qb), (0, Bb.h)(null, null, Yb, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: bb => "radius" in bb,
              get: bb => bb.radius,
              set: (bb, ub) => {
                bb.radius = ub
              }
            },
            metadata: Gb
          }, Rb, bu), (0, Bb.h)(null, null, ab, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "overrideCloneAlphaBetaRadius" in bb,
              get: bb => bb.overrideCloneAlphaBetaRadius,
              set: (bb, ub) => {
                bb.overrideCloneAlphaBetaRadius = ub
              }
            },
            metadata: Gb
          }, uu, hu), (0, Bb.h)(null, null, Hb, {
            kind: "field",
            name: "jT",
            static: !1,
            private: !1,
            access: {
              has: bb => "jT" in bb,
              get: bb => bb.jT,
              set: (bb, ub) => {
                bb.jT = ub
              }
            },
            metadata: Gb
          }, Bu, Ou), (0, Bb.h)(null, null, Xb, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: bb => "_targetHost" in bb,
              get: bb => bb._targetHost,
              set: (bb, ub) => {
                bb._targetHost = ub
              }
            },
            metadata: Gb
          }, Gu, Uu), (0, Bb.h)(null, null, rb, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerAlphaLimit" in bb,
              get: bb => bb.lowerAlphaLimit,
              set: (bb, ub) => {
                bb.lowerAlphaLimit = ub
              }
            },
            metadata: Gb
          }, Lu, Yu), (0, Bb.h)(null, null, jb, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperAlphaLimit" in bb,
              get: bb => bb.upperAlphaLimit,
              set: (bb, ub) => {
                bb.upperAlphaLimit = ub
              }
            },
            metadata: Gb
          }, Su, au), (0, Bb.h)(null, null, nb, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerBetaLimit" in bb,
              get: bb => bb.lowerBetaLimit,
              set: (bb, ub) => {
                bb.lowerBetaLimit = ub
              }
            },
            metadata: Gb
          }, Hu, wu), (0, Bb.h)(null, null, Db, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperBetaLimit" in bb,
              get: bb => bb.upperBetaLimit,
              set: (bb, ub) => {
                bb.upperBetaLimit = ub
              }
            },
            metadata: Gb
          }, Zu, Xu), (0, Bb.h)(null, null, xb, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerRadiusLimit" in bb,
              get: bb => bb.lowerRadiusLimit,
              set: (bb, ub) => {
                bb.lowerRadiusLimit = ub
              }
            },
            metadata: Gb
          }, pu, ou), (0, Bb.h)(null, null, zb, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperRadiusLimit" in bb,
              get: bb => bb.upperRadiusLimit,
              set: (bb, ub) => {
                bb.upperRadiusLimit = ub
              }
            },
            metadata: Gb
          }, Au, lu), (0, Bb.h)(null, null, gb, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerTargetYLimit" in bb,
              get: bb => bb.lowerTargetYLimit,
              set: (bb, ub) => {
                bb.lowerTargetYLimit = ub
              }
            },
            metadata: Gb
          }, Ku, Wu), (0, Bb.h)(null, null, ib, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningX" in bb,
              get: bb => bb.inertialPanningX,
              set: (bb, ub) => {
                bb.inertialPanningX = ub
              }
            },
            metadata: Gb
          }, Cu, du), (0, Bb.h)(null, null, vb, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningY" in bb,
              get: bb => bb.inertialPanningY,
              set: (bb, ub) => {
                bb.inertialPanningY = ub
              }
            },
            metadata: Gb
          }, ru, ju), (0, Bb.h)(null, null, tb, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchToPanMaxDistance" in bb,
              get: bb => bb.pinchToPanMaxDistance,
              set: (bb, ub) => {
                bb.pinchToPanMaxDistance = ub
              }
            },
            metadata: Gb
          }, nu, Du), (0, Bb.h)(null, null, eb, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningDistanceLimit" in bb,
              get: bb => bb.panningDistanceLimit,
              set: (bb, ub) => {
                bb.panningDistanceLimit = ub
              }
            },
            metadata: Gb
          }, xu, zu), (0, Bb.h)(null, null, Nb, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningOriginTarget" in bb,
              get: bb => bb.panningOriginTarget,
              set: (bb, ub) => {
                bb.panningOriginTarget = ub
              }
            },
            metadata: Gb
          }, gu, iu), (0, Bb.h)(null, null, Pb, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomOnFactor" in bb,
              get: bb => bb.zoomOnFactor,
              set: (bb, ub) => {
                bb.zoomOnFactor = ub
              }
            },
            metadata: Gb
          }, vu, tu), (0, Bb.h)(null, null, qb, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "targetScreenOffset" in bb,
              get: bb => bb.targetScreenOffset,
              set: (bb, ub) => {
                bb.targetScreenOffset = ub
              }
            },
            metadata: Gb
          }, Ju, eu), (0, Bb.h)(null, null, Eb, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: bb => "allowUpsideDown" in bb,
              get: bb => bb.allowUpsideDown,
              set: (bb, ub) => {
                bb.allowUpsideDown = ub
              }
            },
            metadata: Gb
          }, Nu, su), (0, Bb.h)(null, null, yb, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: bb => "useInputToRestoreState" in bb,
              get: bb => bb.useInputToRestoreState,
              set: (bb, ub) => {
                bb.useInputToRestoreState = ub
              }
            },
            metadata: Gb
          }, Mu, mu), (0, Bb.h)(null, null, Vb, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "restoreStateInterpolationFactor" in bb,
              get: bb => bb.restoreStateInterpolationFactor,
              set: (bb, ub) => {
                bb.restoreStateInterpolationFactor = ub
              }
            },
            metadata: Gb
          }, Iu, Pu), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Pb = !1;
    Pb || (Pb = !0, Yb.b.AddNodeConstructor("ArcRotateCamera", ((bb, ub) => () => new Ib(bb, 0, 0, 1, Ub.q.Zero(), ub))), (0, eb.f)("BABYLON.ArcRotateCamera", Ib))
  },
  39689: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb.b
    });
    var Bb = hb(39692);
    (0, Bb.c)()
  },
  39692: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      c: () => wb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(36893),
      Lb = hb(39700),
      Yb = hb(39670),
      Sb = hb(36762);
    let ab = (() => {
        var bb;
        let ub, hb, Yb = Lb.b,
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        return bb = class extends Yb {
          constructor(bb, ub, hb, Ob) {
            super(bb, hb, Ob), this.groundColor = (0, Bb.k)(this, Sb, new Ub.b(0, 0, 0)), this.direction = ((0, Bb.k)(this, ab), (0, Bb.k)(this, Hb, void 0)), (0, Bb.k)(this, wb), this.direction = ub || Gb.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Gb.q.Normalize(bb.subtract(Gb.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", hb.x, hb.y, hb.z, 0, ub), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ub), this
          }
          transferToNodeMaterialEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return bb.setFloat3(ub, hb.x, hb.y, hb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Gb.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Lb.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ub) {
            bb["HEMILIGHT" + ub] = !0
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.p)()], hb = [(0, Ob.H)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ub) => {
                bb.groundColor = ub
              }
            },
            metadata: Gb
          }, Sb, ab), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ub) => {
                bb.direction = ub
              }
            },
            metadata: Gb
          }, Hb, wb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Hb = !1;

    function wb() {
      Hb || (Hb = !0, Yb.b.AddNodeConstructor("Light_Type_3", ((bb, ub) => () => new ab(bb, Gb.q.Zero(), ub))), (0, Sb.f)("BABYLON.HemisphericLight", ab))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
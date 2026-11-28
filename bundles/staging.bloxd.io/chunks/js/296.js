export const id = 296;
export const ids = [296];
export const modules = {
  42757: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Qb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38318),
      Vb = Mb(38285),
      gb = Mb(38322),
      lb = Mb(41886),
      Lb = Mb(42078),
      Ib = Mb(41843),
      Ob = Mb(41581),
      Ub = Mb(38294);
    class tb {
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
        const wb = this._attachedCamera.RJ();
        this._onPrePointerObservableObserver = wb.onPrePointerObservable.add((bb => {
          bb.type !== Ib.b.POINTERDOWN ? bb.type === Ib.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const bb = Ob.e.Now;
          let wb = 0;
          null != this._lastFrameTime && (wb = bb - this._lastFrameTime), this._lastFrameTime = bb, this._applyUserInteraction();
          const Mb = bb - this._lastInteractionTime - this._idleRotationWaitTime,
            eb = Math.max(Math.min(Mb / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * eb, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (wb / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.RJ();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(bb) {
        this._lastInteractionTime = bb ?? Ob.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Ub.e
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Ob.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Mb(42763);
    class Cb {
      constructor() {
        this._easingMode = Cb.EASINGMODE_EASEIN
      }
      setEasingMode(bb) {
        const wb = Math.min(Math.max(bb, 0), 2);
        this._easingMode = wb
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(bb) {
        throw new Error("You must implement this method")
      }
      ease(bb) {
        switch (this._easingMode) {
          case Cb.EASINGMODE_EASEIN:
            return this.easeInCore(bb);
          case Cb.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - bb)
        }
        return bb >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - bb))) + .5 : .5 * this.easeInCore(2 * bb)
      }
    }
    Cb.EASINGMODE_EASEIN = 0, Cb.EASINGMODE_EASEOUT = 1, Cb.EASINGMODE_EASEINOUT = 2;
    var Eb = Mb(42772);
    class Fb {
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
        const wb = this._attachedCamera;
        wb && (bb ? this._onMeshTargetChangedObserver = wb.onMeshTargetChangedObservable.add((bb => {
          if (bb && (bb.computeWorldMatrix(!0), bb.XN)) {
            const wb = bb.XN().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * wb, this.upperRadiusTransitionRange = .05 * wb
          }
        })) : this._onMeshTargetChangedObserver && wb.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (Fb.EasingFunction.setEasingMode(Fb.EasingMode), this._radiusBounceTransition = Eb.b.CreateAnimation("radius", Eb.b.ANIMATIONTYPE_FLOAT, 60, Fb.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const wb = Eb.b.TransitionTo("radius", this._attachedCamera.radius + bb, this._attachedCamera, this._attachedCamera.RJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        wb && this._animatables.push(wb)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Fb.EasingFunction = new class extends Cb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = bb
      }
      easeInCore(bb) {
        const wb = Math.max(0, this.amplitude);
        return Math.pow(bb, 3) - bb * wb * Math.sin(3.141592653589793 * bb)
      }
    }(.3), Fb.EasingMode = Cb.EASINGMODE_EASEOUT;
    class Bb {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new pb.b, this._mode = Bb.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const wb = this._attachedCamera.RJ();
        Bb.EasingFunction.setEasingMode(Bb.EasingMode), this._onPrePointerObservableObserver = wb.onPrePointerObservable.add((bb => {
          bb.type !== Ib.b.POINTERDOWN ? bb.type === Ib.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = bb.onMeshTargetChangedObservable.add((bb => {
          bb && bb.XN && this.zoomOnMesh(bb, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.RJ();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const eb = bb.XN().boundingBox;
        this.zoomOnBoundingInfo(eb.minimumWorld, eb.maximumWorld, wb, Mb)
      }
      zoomOnMeshHierarchy(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const eb = bb.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(eb.min, eb.max, wb, Mb)
      }
      zoomOnMeshesHierarchy(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const eb = new Vb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Hb = new Vb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let pb = 0; pb < bb.length; pb++) {
          const wb = bb[pb].getHierarchyBoundingVectors(!0);
          Vb.o.CheckExtends(wb.min, eb, Hb), Vb.o.CheckExtends(wb.max, eb, Hb)
        }
        this.zoomOnBoundingInfo(eb, Hb, wb, Mb)
      }
      zoomOnBoundingInfo(bb, wb) {
        let Mb, eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const pb = bb.y,
          gb = pb + (wb.y - pb) * this._positionScale,
          lb = wb.subtract(bb).scale(.5);
        if (!isFinite(gb)) return !1;
        if (eb) Mb = new Vb.o(0, gb, 0);
        else {
          const wb = bb.add(lb);
          Mb = new Vb.o(wb.x, gb, wb.z)
        }
        this._vectorTransition || (this._vectorTransition = Eb.b.CreateAnimation("target", Eb.b.ANIMATIONTYPE_VECTOR3, 60, Bb.EasingFunction)), this._betaIsAnimating = !0;
        let Lb = Eb.b.TransitionTo("target", Mb, this._attachedCamera, this._attachedCamera.RJ(), 60, this._vectorTransition, this._framingTime);
        Lb && this._animatables.push(Lb);
        let Ib = 0;
        if (this._mode === Bb.FitFrustumSidesMode) {
          const Mb = this._calculateLowerRadiusFromModelBoundingSphere(bb, wb);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = lb.length() + this._attachedCamera.minZ), Ib = Mb
        } else this._mode === Bb.IgnoreBoundsSizeMode && (Ib = this._calculateLowerRadiusFromModelBoundingSphere(bb, wb), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Mb = wb.subtract(bb).length();
          this._attachedCamera.panningSensibility = 5e3 / Mb, this._attachedCamera.wheelPrecision = 100 / Ib
        }
        return this._radiusTransition || (this._radiusTransition = Eb.b.CreateAnimation("radius", Eb.b.ANIMATIONTYPE_FLOAT, 60, Bb.EasingFunction)), Lb = Eb.b.TransitionTo("radius", Ib, this._attachedCamera, this._attachedCamera.RJ(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Hb && Hb(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Lb && this._animatables.push(Lb), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(bb, wb) {
        const Mb = this._attachedCamera;
        if (!Mb) return 0;
        let eb = Mb._calculateLowerRadiusFromModelBoundingSphere(bb, wb, this._radiusScale);
        return Mb.lowerRadiusLimit && this._mode === Bb.IgnoreBoundsSizeMode && (eb = eb < Mb.lowerRadiusLimit ? Mb.lowerRadiusLimit : eb), Mb.upperRadiusLimit && (eb = eb > Mb.upperRadiusLimit ? Mb.upperRadiusLimit : eb), eb
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const bb = Ob.e.Now - this._lastInteractionTime,
          wb = .5 * Math.PI - this._defaultElevation,
          Mb = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Mb && bb >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Eb.b.CreateAnimation("beta", Eb.b.ANIMATIONTYPE_FLOAT, 60, Bb.EasingFunction));
          const bb = Eb.b.TransitionTo("beta", wb, this._attachedCamera, this._attachedCamera.RJ(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          bb && this._animatables.push(bb)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Ob.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Bb.EasingFunction = new class extends Cb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = bb
      }
      easeInCore(bb) {
        return this.exponent <= 0 ? bb : (Math.exp(this.exponent * bb) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Bb.EasingMode = Cb.EASINGMODE_EASEINOUT, Bb.IgnoreBoundsSizeMode = 0, Bb.FitFrustumSidesMode = 1;
    var sb = Mb(41879),
      mb = Mb(41871),
      hb = Mb(41916),
      zb = Mb(41771);
    let Xb = (() => {
        var bb;
        let wb, Mb = [],
          pb = [];
        return bb = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, eb.m)(this, Mb, [0, 1, 2]), this._pointerInput = (0, eb.m)(this, pb)
          }
          attachControl(bb) {
            bb = zb.e.BackCompatCameraNoPreventDefault(arguments);
            const wb = this.camera.DC(),
              Mb = wb.getInputElement();
            let eb = 0,
              Hb = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = pb => {
              const Vb = pb.event,
                gb = "touch" === Vb.pointerType;
              if (pb.type !== Ib.b.POINTERMOVE && -1 === this.buttons.indexOf(Vb.button)) return;
              const lb = Vb.target;
              if (this._altKey = Vb.altKey, this._ctrlKey = Vb.ctrlKey, this._metaKey = Vb.metaKey, this._shiftKey = Vb.shiftKey, this._buttonsPressed = Vb.buttons, wb.isPointerLock) {
                const bb = Vb.movementX,
                  wb = Vb.movementY;
                this.onTouch(null, bb, wb), this._pointA = null, this._pointB = null
              } else {
                if (pb.type !== Ib.b.POINTERDOWN && pb.type !== Ib.b.POINTERDOUBLETAP && gb && this._pointA?.pointerId !== Vb.pointerId && this._pointB?.pointerId !== Vb.pointerId) return;
                if (pb.type !== Ib.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !gb)
                  if (pb.type === Ib.b.POINTERDOUBLETAP) this.onDoubleTap(Vb.pointerType, Vb);
                  else if (pb.type !== Ib.b.POINTERUP || this._currentMousePointerIdDown !== Vb.pointerId && !gb) {
                  if (pb.type === Ib.b.POINTERMOVE)
                    if (bb || Vb.preventDefault(), this._pointA && null === this._pointB) {
                      const bb = Vb.clientX - this._pointA.x,
                        wb = Vb.clientY - this._pointA.y;
                      this._pointA.x = Vb.clientX, this._pointA.y = Vb.clientY, this.onTouch(this._pointA, bb, wb)
                    } else if (this._pointA && this._pointB) {
                    const bb = this._pointA.pointerId === Vb.pointerId ? this._pointA : this._pointB;
                    bb.x = Vb.clientX, bb.y = Vb.clientY;
                    const wb = this._pointA.x - this._pointB.x,
                      Mb = this._pointA.y - this._pointB.y,
                      gb = wb * wb + Mb * Mb,
                      lb = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Vb.pointerId,
                        type: pb.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, eb, gb, Hb, lb), Hb = lb, eb = gb
                  }
                } else {
                  try {
                    lb?.releasePointerCapture(Vb.pointerId)
                  } catch (Lb) {}
                  gb || (this._pointB = null), wb._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Vb.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Vb.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== eb || Hb) && (this.onMultiTouch(this._pointA, this._pointB, eb, 0, Hb, null), eb = 0, Hb = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Vb), bb || Vb.preventDefault()
                } else {
                  try {
                    lb?.setPointerCapture(Vb.pointerId)
                  } catch (Lb) {}
                  if (null === this._pointA) this._pointA = {
                    x: Vb.clientX,
                    y: Vb.clientY,
                    pointerId: Vb.pointerId,
                    type: Vb.pointerType,
                    button: Vb.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Vb.clientX,
                      y: Vb.clientY,
                      pointerId: Vb.pointerId,
                      type: Vb.pointerType,
                      button: Vb.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || gb || (this._currentMousePointerIdDown = Vb.pointerId), this.onButtonDown(Vb), bb || (Vb.preventDefault(), Mb && Mb.focus())
                }
              }
            }, this._observer = this.camera.RJ()._inputManager._addCameraPointerObserver(this._pointerInput, Ib.b.POINTERDOWN | Ib.b.POINTERUP | Ib.b.POINTERMOVE | Ib.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, eb = 0, Hb = null, this.onLostFocus()
            }, this._contextMenuBind = bb => this.onContextMenu(bb), Mb && Mb.addEventListener("contextmenu", this._contextMenuBind, !1);
            const pb = this.camera.RJ().DC().getHostWindow();
            pb && zb.e.RegisterTopRootEvents(pb, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const bb = this.camera.RJ().DC().getHostWindow();
              bb && zb.e.UnregisterTopRootEvents(bb, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.RJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const bb = this.camera.RJ().DC().getInputElement();
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
          onDoubleTap(bb, wb) {}
          onTouch(bb, wb, Mb) {}
          onMultiTouch(bb, wb, Mb, eb, Hb, pb) {}
          onContextMenu(bb) {
            bb.preventDefault()
          }
          onButtonDown(bb) {}
          onButtonUp(bb) {}
          onLostFocus() {}
        }, (() => {
          const Vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, wb) => {
                bb.buttons = wb
              }
            },
            metadata: Vb
          }, Mb, pb), Vb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vb
          })
        })(), bb
      })(),
      xb = (() => {
        var bb;
        let wb, Mb, pb, Vb = Xb,
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        return bb = class extends Vb {
          constructor() {
            super(...arguments), this.pinchZoom = (0, eb.m)(this, gb, !0), this.multiTouchPanning = ((0, eb.m)(this, lb), (0, eb.m)(this, Lb, !0)), this.multiTouchPanAndZoom = ((0, eb.m)(this, Ib), (0, eb.m)(this, Ob, !0)), this._isPinching = ((0, eb.m)(this, Ub), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(bb, wb) {}
          _computeMultiTouchPanning(bb, wb) {}
          onMultiTouch(bb, wb, Mb, eb, Hb, pb) {
            0 === Mb && null === Hb || 0 === eb && null === pb || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Mb, eb), this._computeMultiTouchPanning(Hb, pb)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Mb, eb), this._isPinching = !0) : this._computeMultiTouchPanning(Hb, pb)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Hb, pb) : this.pinchZoom && this._computePinchZoom(Mb, eb))
          }
          onButtonUp(bb) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchZoom" in bb,
              get: bb => bb.pinchZoom,
              set: (bb, wb) => {
                bb.pinchZoom = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanning" in bb,
              get: bb => bb.multiTouchPanning,
              set: (bb, wb) => {
                bb.multiTouchPanning = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, eb.i)(null, null, pb, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanAndZoom" in bb,
              get: bb => bb.multiTouchPanAndZoom,
              set: (bb, wb) => {
                bb.multiTouchPanAndZoom = wb
              }
            },
            metadata: tb
          }, Ob, Ub), tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          })
        })(), bb
      })(),
      jb = (() => {
        var bb;
        let wb, Mb, pb, Vb, gb, lb, Lb, Ib = xb,
          Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [],
          mb = [],
          hb = [],
          zb = [],
          Xb = [],
          jb = [],
          Kb = [];
        return bb = class extends Ib {
          constructor() {
            super(...arguments), this.buttons = (0, eb.m)(this, Ob, [0, 1, 2]), this.angularSensibilityX = ((0, eb.m)(this, Ub), (0, eb.m)(this, tb, 1e3)), this.angularSensibilityY = ((0, eb.m)(this, Cb), (0, eb.m)(this, Eb, 1e3)), this.pinchPrecision = ((0, eb.m)(this, Fb), (0, eb.m)(this, Bb, 12)), this.pinchDeltaPercentage = ((0, eb.m)(this, sb), (0, eb.m)(this, mb, 0)), this.useNaturalPinchZoom = ((0, eb.m)(this, hb), (0, eb.m)(this, zb, !1)), this.panningSensibility = ((0, eb.m)(this, Xb), (0, eb.m)(this, jb, 1e3)), this.pinchInwards = ((0, eb.m)(this, Kb), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(bb, wb) {
            if (bb && wb) {
              const Mb = wb.x - bb.x,
                eb = wb.y - bb.y,
                Hb = this.camera.movement.input.getEntry("pointer", "pan"),
                pb = Hb?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== pb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Mb * pb, this.camera.movement.panAccumulatedPixels.y += eb * pb)
            }
          }
          _computePinchZoom(wb, Mb) {
            const eb = this.camera.radius || bb.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = eb * Math.sqrt(wb) / Math.sqrt(Mb);
            else if (this.pinchDeltaPercentage) {
              const bb = .001 * (Mb - wb) * eb * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            } else {
              const bb = (Mb - wb) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            }
          }
          onTouch(bb, wb, Mb) {
            const eb = this._activeEntry ?? (this.camera.DC().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (eb)
              if ("pan" === eb.interaction) {
                const bb = eb.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== bb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -wb * bb, this.camera.movement.panAccumulatedPixels.y += Mb * bb)
              } else if ("rotate" === eb.interaction) {
              const bb = eb.B5 ?? eb.sensitivity ?? 1 / this.angularSensibilityX,
                Hb = eb.Y5 ?? eb.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -wb * bb, this.camera.movement.rotationAccumulatedPixels.y += -Mb * Hb
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(bb, wb, Mb, eb, Hb, pb) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(eb) - Math.sqrt(Mb)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(bb, wb, Mb, eb, Hb, pb)
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
          const xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], Vb = [(0, Hb.E)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, wb) => {
                bb.buttons = wb
              }
            },
            metadata: xb
          }, Ob, Ub), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityX" in bb,
              get: bb => bb.angularSensibilityX,
              set: (bb, wb) => {
                bb.angularSensibilityX = wb
              }
            },
            metadata: xb
          }, tb, Cb), (0, eb.i)(null, null, pb, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityY" in bb,
              get: bb => bb.angularSensibilityY,
              set: (bb, wb) => {
                bb.angularSensibilityY = wb
              }
            },
            metadata: xb
          }, Eb, Fb), (0, eb.i)(null, null, Vb, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchPrecision" in bb,
              get: bb => bb.pinchPrecision,
              set: (bb, wb) => {
                bb.pinchPrecision = wb
              }
            },
            metadata: xb
          }, Bb, sb), (0, eb.i)(null, null, gb, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchDeltaPercentage" in bb,
              get: bb => bb.pinchDeltaPercentage,
              set: (bb, wb) => {
                bb.pinchDeltaPercentage = wb
              }
            },
            metadata: xb
          }, mb, hb), (0, eb.i)(null, null, lb, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "useNaturalPinchZoom" in bb,
              get: bb => bb.useNaturalPinchZoom,
              set: (bb, wb) => {
                bb.useNaturalPinchZoom = wb
              }
            },
            metadata: xb
          }, zb, Xb), (0, eb.i)(null, null, Lb, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningSensibility" in bb,
              get: bb => bb.panningSensibility,
              set: (bb, wb) => {
                bb.panningSensibility = wb
              }
            },
            metadata: xb
          }, jb, Kb), xb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xb
          })
        })(), bb.MinimumRadiusForPinch = .001, bb
      })();
    hb.b.ArcRotateCameraPointersInput = jb;
    var Kb = Mb(41845);
    let rb = (() => {
      var bb;
      let wb, Mb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb = [],
        Fb = [],
        Bb = [],
        sb = [],
        mb = [],
        hb = [],
        Xb = [],
        xb = [],
        jb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [];
      return bb = class {
        constructor() {
          this.camera = (0, eb.m)(this, Eb), this.keysUp = (0, eb.m)(this, Fb, [38]), this.keysDown = ((0, eb.m)(this, Bb), (0, eb.m)(this, sb, [40])), this.keysLeft = ((0, eb.m)(this, mb), (0, eb.m)(this, hb, [37])), this.keysRight = ((0, eb.m)(this, Xb), (0, eb.m)(this, xb, [39])), this.keysReset = ((0, eb.m)(this, jb), (0, eb.m)(this, rb, [220])), this.keysZoomIn = ((0, eb.m)(this, Rb), (0, eb.m)(this, Db, [187, 107])), this.keysZoomOut = ((0, eb.m)(this, cb), (0, eb.m)(this, Yb, [189, 109])), this.panningSensibility = ((0, eb.m)(this, Zb), (0, eb.m)(this, fb, 50)), this.zoomingSensibility = ((0, eb.m)(this, Ab), (0, eb.m)(this, Wb, 25)), this.angularSpeed = ((0, eb.m)(this, Jb), (0, eb.m)(this, Sb, .01)), this._useAltToZoom = ((0, eb.m)(this, Nb), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Vb.m, this._panDirection = new Vb.m
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
            wb = bb.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && wb ? bb.inputMap.splice(bb.inputMap.indexOf(wb), 1) : this._useAltToZoom && !wb && bb.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(bb) {
          bb = zb.e.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.RJ(), this._engine = this._scene.DC(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((wb => {
            const Mb = wb.event;
            if (!Mb.metaKey)
              if (wb.type === Kb.e.KEYDOWN) {
                if (this._ctrlPressed = Mb.ctrlKey, this._altPressed = Mb.altKey, -1 !== this.keysUp.indexOf(Mb.keyCode) || -1 !== this.keysDown.indexOf(Mb.keyCode) || -1 !== this.keysLeft.indexOf(Mb.keyCode) || -1 !== this.keysRight.indexOf(Mb.keyCode) || -1 !== this.keysReset.indexOf(Mb.keyCode) || -1 !== this.keysZoomIn.indexOf(Mb.keyCode) || -1 !== this.keysZoomOut.indexOf(Mb.keyCode)) {
                  -1 === this._keys.indexOf(Mb.keyCode) && this._keys.push(Mb.keyCode), Mb.preventDefault && (bb || Mb.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Mb.keyCode) || -1 !== this.keysDown.indexOf(Mb.keyCode) || -1 !== this.keysLeft.indexOf(Mb.keyCode) || -1 !== this.keysRight.indexOf(Mb.keyCode) || -1 !== this.keysReset.indexOf(Mb.keyCode) || -1 !== this.keysZoomIn.indexOf(Mb.keyCode) || -1 !== this.keysZoomOut.indexOf(Mb.keyCode)) {
              const wb = this._keys.indexOf(Mb.keyCode);
              wb >= 0 && this._keys.splice(wb, 1), Mb.preventDefault && (bb || Mb.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              wb = bb.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Mb = this._rotateDirection.set(0, 0),
              eb = this._panDirection.set(0, 0);
            let Hb = 0,
              pb = 0;
            for (let Vb = 0; Vb < this._keys.length; Vb++) {
              const gb = this._keys[Vb];
              if (this._keyboardConditions.key = gb, -1 === this.keysReset.indexOf(gb)) {
                const bb = wb.resolveInteraction("keyboard", this._keyboardConditions);
                if (bb)
                  if ("pan" === bb.interaction) pb = Math.max(pb, bb.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(gb) ? eb.x -= 1 : -1 !== this.keysRight.indexOf(gb) ? eb.x += 1 : -1 !== this.keysUp.indexOf(gb) ? eb.y += 1 : -1 !== this.keysDown.indexOf(gb) && (eb.y -= 1);
                  else if ("zoom" === bb.interaction) {
                  const Mb = bb.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(gb) || -1 !== this.keysZoomIn.indexOf(gb) ? wb.handlers.zoom(Mb) : -1 === this.keysDown.indexOf(gb) && -1 === this.keysZoomOut.indexOf(gb) || wb.handlers.zoom(-Mb)
                } else "rotate" === bb.interaction && (Hb = Math.max(Hb, bb.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(gb) ? Mb.x -= 1 : -1 !== this.keysRight.indexOf(gb) ? Mb.x += 1 : -1 !== this.keysUp.indexOf(gb) ? Mb.y -= 1 : -1 !== this.keysDown.indexOf(gb) && (Mb.y += 1))
              } - 1 !== this.keysReset.indexOf(gb) && bb.useInputToRestoreState && bb.restoreState()
            }
            0 === Mb.x && 0 === Mb.y || (Mb.normalize().scaleInPlace(Hb), wb.handlers.rotate(Mb.x, Mb.y)), 0 === eb.x && 0 === eb.y || (eb.normalize().scaleInPlace(pb), wb.handlers.pan(eb.x, eb.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.E)()], Ub = [(0, Hb.E)()], tb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], (0, eb.i)(bb, null, Cb, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAltToZoom" in bb,
            get: bb => bb.useAltToZoom
          },
          metadata: Vb
        }, null, Eb), (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, wb) => {
              bb.keysUp = wb
            }
          },
          metadata: Vb
        }, Fb, Bb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, wb) => {
              bb.keysDown = wb
            }
          },
          metadata: Vb
        }, sb, mb), (0, eb.i)(null, null, pb, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, wb) => {
              bb.keysLeft = wb
            }
          },
          metadata: Vb
        }, hb, Xb), (0, eb.i)(null, null, gb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, wb) => {
              bb.keysRight = wb
            }
          },
          metadata: Vb
        }, xb, jb), (0, eb.i)(null, null, lb, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysReset" in bb,
            get: bb => bb.keysReset,
            set: (bb, wb) => {
              bb.keysReset = wb
            }
          },
          metadata: Vb
        }, rb, Rb), (0, eb.i)(null, null, Lb, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomIn" in bb,
            get: bb => bb.keysZoomIn,
            set: (bb, wb) => {
              bb.keysZoomIn = wb
            }
          },
          metadata: Vb
        }, Db, cb), (0, eb.i)(null, null, Ib, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomOut" in bb,
            get: bb => bb.keysZoomOut,
            set: (bb, wb) => {
              bb.keysZoomOut = wb
            }
          },
          metadata: Vb
        }, Yb, Zb), (0, eb.i)(null, null, Ob, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "panningSensibility" in bb,
            get: bb => bb.panningSensibility,
            set: (bb, wb) => {
              bb.panningSensibility = wb
            }
          },
          metadata: Vb
        }, fb, Ab), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomingSensibility" in bb,
            get: bb => bb.zoomingSensibility,
            set: (bb, wb) => {
              bb.zoomingSensibility = wb
            }
          },
          metadata: Vb
        }, Wb, Jb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSpeed" in bb,
            get: bb => bb.angularSpeed,
            set: (bb, wb) => {
              bb.angularSpeed = wb
            }
          },
          metadata: Vb
        }, Sb, Nb), Vb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vb
        })
      })(), bb
    })();
    hb.b.ArcRotateCameraKeyboardMoveInput = rb;
    var Rb = Mb(39001),
      Db = Mb(41852);
    let cb = (() => {
      var bb;
      let wb, Mb, pb, lb = [],
        Lb = [],
        Ob = [],
        tb = [],
        Cb = [],
        Eb = [];
      return bb = class {
        constructor() {
          this.wheelPrecision = (0, eb.m)(this, lb, 3), this.zoomToMouseLocation = ((0, eb.m)(this, Lb), (0, eb.m)(this, Ob, !1)), this.wheelDeltaPercentage = ((0, eb.m)(this, tb), (0, eb.m)(this, Cb, 0)), this.customComputeDeltaFromMouseWheel = ((0, eb.m)(this, Eb), null), this._viewOffset = new Vb.o(0, 0, 0), this._globalOffset = new Vb.o(0, 0, 0), this._inertialPanning = Vb.o.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(bb, wb) {
          let Mb;
          const eb = .01 * bb * this.wheelDeltaPercentage * wb;
          return Mb = bb > 0 ? eb / (1 + this.wheelDeltaPercentage) : eb * (1 + this.wheelDeltaPercentage), Mb
        }
        attachControl(bb) {
          bb = zb.e.BackCompatCameraNoPreventDefault(arguments), this._wheel = wb => {
            if (wb.type !== Ib.b.POINTERWHEEL) return;
            const Mb = wb.event;
            let eb;
            const Hb = Mb.deltaMode === Db.c.DOM_DELTA_LINE ? 40 : 1,
              pb = -Mb.deltaY * Hb;
            if (this.customComputeDeltaFromMouseWheel) eb = this.customComputeDeltaFromMouseWheel(pb, this, Mb);
            else if (this.wheelDeltaPercentage) {
              if (eb = this._computeDeltaFromMouseWheelLegacyEvent(pb, this.camera.radius), eb > 0) {
                const bb = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let wb = this.camera.radius,
                  Mb = bb + eb;
                for (let eb = 0; eb < 20 && !(wb <= Mb) && !(Math.abs(Mb * this.camera.inertia) < .001); eb++) wb -= Mb, Mb *= this.camera.inertia;
                wb = (0, gb.Clamp)(wb, 0, Number.MAX_VALUE), eb = this._computeDeltaFromMouseWheelLegacyEvent(pb, wb)
              }
            } else {
              const bb = this.camera.movement.input.getEntry("wheel", "zoom");
              eb = pb * (bb?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            eb && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(eb)) : this.camera.movement.zoomAccumulatedPixels += eb), Mb.preventDefault && (bb || Mb.preventDefault())
          }, this._observer = this.camera.RJ()._inputManager._addCameraPointerObserver(this._wheel, Ib.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Jbb(0)
        }
        detachControl() {
          this._observer && (this.camera.RJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const bb = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(bb.inertialAlphaOffset) + Math.abs(bb.inertialBetaOffset) + Math.abs(bb.inertialRadiusOffset)) {
            this._updateHitPlane(), bb.target.addInPlace(this._inertialPanning), bb.radius -= this._zoomToMouseRadiusOffset;
            const wb = bb.movement.getFrameIndependentDecay(bb.inertia);
            this._inertialPanning.scaleInPlace(wb), this._zoomToMouseRadiusOffset *= wb, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Ub.e && (this._zoomToMouseRadiusOffset = 0)
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
            wb = bb.target.subtract(bb.position);
          this._hitPlane = Rb.d.FromPositionAndNormal(bb.target, wb)
        }
        _getPosition() {
          const bb = this.camera,
            wb = bb.RJ(),
            Mb = wb.createPickingRay(wb.pointerX, wb.pointerY, Vb.b.Identity(), bb, !1);
          0 === bb.targetScreenOffset.x && 0 === bb.targetScreenOffset.y || (this._viewOffset.set(bb.targetScreenOffset.x, bb.targetScreenOffset.y, 0), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), this._globalOffset = Vb.o.TransformNormal(this._viewOffset, bb._cameraTransformMatrix), Mb.origin.addInPlace(this._globalOffset));
          let eb = 0;
          return this._hitPlane && (eb = Mb.intersectsPlane(this._hitPlane) ?? 0), Mb.origin.addInPlace(Mb.direction.scaleInPlace(eb))
        }
        _zoomToMouse(bb) {
          const wb = this.camera,
            Mb = 1 - wb.inertia,
            eb = wb.movement.getFrameIndependentInputScale(wb.inertia);
          if (wb.lowerRadiusLimit) {
            const Hb = wb.lowerRadiusLimit ?? 0;
            wb.radius - (this._zoomToMouseRadiusOffset + bb * eb) / Mb < Hb && (bb = ((wb.radius - Hb) * Mb - this._zoomToMouseRadiusOffset) / eb)
          }
          if (wb.upperRadiusLimit) {
            const Hb = wb.upperRadiusLimit ?? 0;
            wb.radius - (this._zoomToMouseRadiusOffset + bb * eb) / Mb > Hb && (bb = ((wb.radius - Hb) * Mb - this._zoomToMouseRadiusOffset) / eb)
          }
          const Hb = bb / Mb / wb.radius,
            pb = this._getPosition(),
            gb = Vb.j.YC[6];
          pb.subtractToRef(wb.target, gb), gb.scaleInPlace(Hb), gb.scaleInPlace(Mb), gb.scaleInPlace(eb), this._inertialPanning.addInPlace(gb), this._zoomToMouseRadiusOffset += bb * eb
        }
        _zeroIfClose(bb) {
          Math.abs(bb.x) < Ub.e && (bb.x = 0), Math.abs(bb.y) < Ub.e && (bb.y = 0), Math.abs(bb.z) < Ub.e && (bb.z = 0)
        }
      }, (() => {
        const Vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecision" in bb,
            get: bb => bb.wheelPrecision,
            set: (bb, wb) => {
              bb.wheelPrecision = wb
            }
          },
          metadata: Vb
        }, lb, Lb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomToMouseLocation" in bb,
            get: bb => bb.zoomToMouseLocation,
            set: (bb, wb) => {
              bb.zoomToMouseLocation = wb
            }
          },
          metadata: Vb
        }, Ob, tb), (0, eb.i)(null, null, pb, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelDeltaPercentage" in bb,
            get: bb => bb.wheelDeltaPercentage,
            set: (bb, wb) => {
              bb.wheelDeltaPercentage = wb
            }
          },
          metadata: Vb
        }, Cb, Eb), Vb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vb
        })
      })(), bb
    })();
    hb.b.ArcRotateCameraMouseWheelInput = cb;
    var Yb, Zb, fb = Mb(41554);
    class Ab extends hb.d {
      constructor(bb) {
        super(bb)
      }
      addMouseWheel() {
        return this.add(new cb), this
      }
      addPointers() {
        return this.add(new jb), this
      }
      addKeyboard() {
        return this.add(new rb), this
      }
    }(Yb = Ab.prototype).addVRDeviceOrientation ?? (Yb.addVRDeviceOrientation = (0, fb.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Zb = Ab.prototype).addGamepad ?? (Zb.addGamepad = (0, fb.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var Wb = Mb(38333),
      Jb = Mb(41900),
      Sb = Mb(41909);
    class Nb extends Jb.c {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb), this.input = new Sb.e({
          pan: (bb, wb) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += wb
          },
          rotate: (bb, wb) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += wb
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

    function vb(bb, wb) {
      return isNaN(bb) ? wb : bb
    }
    let Qb = (() => {
        var bb;
        let wb, Mb, lb, Ib, Ob, Cb, Eb, hb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Wb, Jb, Sb, Qb, Gb, qb, ab, ib, ub, db = mb.f,
          Pb = [],
          nb = [],
          yb = [],
          ob = [],
          Tb = [],
          kb = [],
          bw = [],
          ww = [],
          Mw = [],
          ew = [],
          Hw = [],
          pw = [],
          Vw = [],
          gw = [],
          lw = [],
          Lw = [],
          Iw = [],
          Ow = [],
          Uw = [],
          tw = [],
          Cw = [],
          Ew = [],
          Fw = [],
          Bw = [],
          sw = [],
          mw = [],
          hw = [],
          zw = [],
          Xw = [],
          xw = [],
          jw = [],
          Kw = [],
          rw = [],
          Rw = [],
          Dw = [],
          Yw = [],
          Zw = [],
          fw = [],
          Aw = [],
          Ww = [],
          Jw = [],
          Sw = [],
          Nw = [],
          vw = [],
          Qw = [],
          Gw = [],
          qw = [];
        return bb = class extends db {
          get target() {
            return this.mO
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
            this._upToYMatrix || (this._yToUpMatrix = new Vb.b, this._upToYMatrix = new Vb.b, this._upVector = Vb.o.Zero()), bb.normalize(), this._upVector.eZ(bb), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Vb.b.RotationAlignToRef(Vb.o.UpReadOnly, this._upVector, this._yToUpMatrix), Vb.b.RotationAlignToRef(this._upVector, Vb.o.UpReadOnly, this._upToYMatrix)
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
            const wb = this.inputs.attached.pointers;
            wb && (wb.angularSensibilityX = bb)
          }
          get angularSensibilityY() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.angularSensibilityY : 0
          }
          set angularSensibilityY(bb) {
            const wb = this.inputs.attached.pointers;
            wb && (wb.angularSensibilityY = bb)
          }
          get pinchPrecision() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchPrecision : 0
          }
          set pinchPrecision(bb) {
            const wb = this.inputs.attached.pointers;
            wb && (wb.pinchPrecision = bb)
          }
          get pinchDeltaPercentage() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(bb) {
            const wb = this.inputs.attached.pointers;
            wb && (wb.pinchDeltaPercentage = bb)
          }
          get useNaturalPinchZoom() {
            const bb = this.inputs.attached.pointers;
            return !!bb && bb.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(bb) {
            const wb = this.inputs.attached.pointers;
            wb && (wb.useNaturalPinchZoom = bb)
          }
          get panningSensibility() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.panningSensibility : 0
          }
          set panningSensibility(bb) {
            const wb = this.inputs.attached.pointers;
            wb && (wb.panningSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysUp = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysDown = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const wb = this.inputs.attached.keyboard;
            wb && (wb.keysRight = bb)
          }
          get wheelPrecision() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelPrecision : 0
          }
          set wheelPrecision(bb) {
            const wb = this.inputs.attached.mousewheel;
            wb && (wb.wheelPrecision = bb)
          }
          get zoomToMouseLocation() {
            const bb = this.inputs.attached.mousewheel;
            return !!bb && bb.zoomToMouseLocation
          }
          set zoomToMouseLocation(bb) {
            const wb = this.inputs.attached.mousewheel;
            wb && (wb.zoomToMouseLocation = bb)
          }
          get wheelDeltaPercentage() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(bb) {
            const wb = this.inputs.attached.mousewheel;
            wb && (wb.wheelDeltaPercentage = bb)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(bb) {
            this._useCtrlForPanningInternal = bb;
            const wb = this.movement.input,
              Mb = wb.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !bb && Mb ? wb.inputMap.splice(wb.inputMap.indexOf(Mb), 1) : bb && !Mb && wb.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const eb = wb.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !bb && eb ? wb.inputMap.splice(wb.inputMap.indexOf(eb), 1) : bb && !eb && wb.addEntry({
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
            const wb = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            wb && (wb.button = bb)
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
            bb !== this.useBouncingBehavior && (bb ? (this._bouncingBehavior = new Fb, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(bb) {
            bb !== this.useFramingBehavior && (bb ? (this._framingBehavior = new Bb, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(bb) {
            bb !== this.useAutoRotationBehavior && (bb ? (this._autoRotationBehavior = new tb, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(bb, wb, Mb, Hb, gb, lb) {
            var Lb;
            let Ib = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(bb, Vb.o.Zero(), lb, Ib), Lb = this, this.alpha = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, void 0)), this.beta = ((0, eb.m)(this, yb), (0, eb.m)(this, ob, void 0)), this.radius = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, void 0)), this.overrideCloneAlphaBetaRadius = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, void 0)), this.mO = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, void 0)), this._targetHost = ((0, eb.m)(this, Hw), (0, eb.m)(this, pw, void 0)), this._upToYMatrix = (0, eb.m)(this, Vw), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, eb.m)(this, gw, null), this.upperAlphaLimit = ((0, eb.m)(this, lw), (0, eb.m)(this, Lw, null)), this.lowerBetaLimit = ((0, eb.m)(this, Iw), (0, eb.m)(this, Ow, .01)), this.upperBetaLimit = ((0, eb.m)(this, Uw), (0, eb.m)(this, tw, Math.PI - .01)), this.lowerRadiusLimit = ((0, eb.m)(this, Cw), (0, eb.m)(this, Ew, null)), this.upperRadiusLimit = ((0, eb.m)(this, Fw), (0, eb.m)(this, Bw, null)), this.lowerTargetYLimit = ((0, eb.m)(this, sw), (0, eb.m)(this, mw, -1 / 0)), this.inertialPanningX = ((0, eb.m)(this, hw), (0, eb.m)(this, zw, 0)), this.inertialPanningY = ((0, eb.m)(this, Xw), (0, eb.m)(this, xw, 0)), this.pinchToPanMaxDistance = ((0, eb.m)(this, jw), (0, eb.m)(this, Kw, 20)), this.panningDistanceLimit = ((0, eb.m)(this, rw), (0, eb.m)(this, Rw, null)), this.panningOriginTarget = ((0, eb.m)(this, Dw), (0, eb.m)(this, Yw, Vb.o.Zero())), this._panningInertia = ((0, eb.m)(this, Zw), .9), this._inertia = .9, this.zoomOnFactor = (0, eb.m)(this, fw, 1), this.targetScreenOffset = ((0, eb.m)(this, Aw), (0, eb.m)(this, Ww, Vb.m.Zero())), this.allowUpsideDown = ((0, eb.m)(this, Jw), (0, eb.m)(this, Sw, !0)), this.useInputToRestoreState = ((0, eb.m)(this, Nw), (0, eb.m)(this, vw, !0)), this.restoreStateInterpolationFactor = ((0, eb.m)(this, Qw), (0, eb.m)(this, Gw, 0)), this._currentInterpolationFactor = ((0, eb.m)(this, qw), 0), this._viewMatrix = new Vb.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Vb.o(1, 1, 0), this._transformedDirection = new Vb.o, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new pb.b, this.checkCollisions = !1, this.collisionRadius = new Vb.o(.5, .5, .5), this._previousPosition = Vb.o.Zero(), this._collisionVelocity = Vb.o.Zero(), this._newPosition = Vb.o.Zero(), this._computationVector = Vb.o.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Vb.o(NaN, NaN, NaN), this._goalTargetScreenOffset = new Vb.m(NaN, NaN), this._onCollisionPositionChange = function(bb, wb) {
              let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Mb ? (Lb.setPosition(wb), Lb.KU && Lb.KU(Mb)) : Lb._previousPosition.eZ(Lb._position);
              const eb = Math.cos(Lb.alpha),
                Hb = Math.sin(Lb.alpha),
                pb = Math.cos(Lb.beta);
              let Vb = Math.sin(Lb.beta);
              0 === Vb && (Vb = 1e-4);
              const gb = Lb._getTargetPosition();
              Lb._computationVector.twb(Lb.radius * eb * Vb, Lb.radius * pb, Lb.radius * Hb * Vb), gb.addToRef(Lb._computationVector, Lb._newPosition), Lb._position.eZ(Lb._newPosition);
              let lb = Lb.upVector;
              Lb.allowUpsideDown && Lb.beta < 0 && (lb = lb.clone(), lb = lb.oE()), Lb._computeViewMatrix(Lb._position, gb, lb), Lb._viewMatrix.addAtIndex(12, Lb.targetScreenOffset.x), Lb._viewMatrix.addAtIndex(13, Lb.targetScreenOffset.y), Lb._collisionTriggered = !1
            }, this.mO = Vb.o.Zero(), gb && this.setTarget(gb), this.alpha = wb, this.beta = Mb, this.radius = Hb, this.getViewMatrix(), this.inputs = new Ab(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Nb(this.RJ(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.mO = new Vb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Vb.m.Zero()
          }
          _updateCache(bb) {
            bb || super._updateCache(), this._cache.mO.eZ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.eZ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const bb = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? bb.addToRef(this._targetBoundingCenter, this.mO) : this.mO.eZ(bb)
            }
            const bb = this._getLockedTargetPosition();
            return bb || this.mO
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Ub.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              pb = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != pb ? this._currentInterpolationFactor = pb : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = vb(bb, this._goalAlpha), this._goalBeta = vb(wb, this._goalBeta), this._goalRadius = vb(Mb, this._goalRadius), this._goalTarget.set(vb(eb.x, this._goalTarget.x), vb(eb.y, this._goalTarget.y), vb(eb.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(vb(Hb.x, this._goalTargetScreenOffset.x), vb(Hb.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, gb.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, gb.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, gb.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, gb.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.mO.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(bb, wb) {
            let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Hb = arguments;
            wb = zb.e.BackCompatCameraNoPreventDefault(Hb), this._useCtrlForPanning = Mb, this._panningMouseButton = eb, "boolean" === typeof Hb[0] && (Hb.length > 1 && (this._useCtrlForPanning = Hb[1]), Hb.length > 2 && (this._panningMouseButton = Hb[2])), this.inputs.attachElement(wb), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(bb, wb, Mb) {
            const eb = this.invertRotation ? -1 : 1;
            let Hb = bb * this._calculateHandednessMultiplier();
            this.beta < 0 && (Hb *= -1), this.alpha += Hb * eb, this.beta += wb * eb, this.radius -= Mb
          }
          _applyPanDelta(bb, wb) {
            const Mb = Vb.j.YC[0].twb(bb, wb, wb);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Mb.multiplyInPlace(this.panningAxis), Vb.o.TransformNormalToRef(Mb, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const bb = this.upVector,
                wb = Vb.o.CrossToRef(this._transformedDirection, bb, this._transformedDirection);
              Vb.o.CrossToRef(bb, wb, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.mO);
                Vb.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.mO.eZ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const bb = Vb.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(bb), bb.transposeToRef(bb), Vb.o.TransformCoordinatesToRef(this._transformedDirection, bb, this._transformedDirection)
                }
                this.mO.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let bb = !1;
            this.movement.computeCurrentFrameDeltas();
            const wb = this.movement.rotationDeltaCurrentFrame,
              Mb = this.movement.zoomDeltaCurrentFrame,
              eb = this.movement.panDeltaCurrentFrame;
            if (0 === wb.x && 0 === wb.y && 0 === Mb && 0 === eb.x && 0 === eb.y || (bb = !0, 0 === wb.x && 0 === wb.y && 0 === Mb || this._applyRotationAndZoomDelta(wb.x, wb.y, Mb), 0 === eb.x && 0 === eb.y || this._applyPanDelta(eb.x, eb.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), bb = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const wb = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < wb && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < wb && (this.inertialPanningY = 0), bb = !0
            }
            if (bb) this.stopInterpolation();
            else if (this._isInterpolating) {
              let bb = !1;
              const wb = this._scene.DC().getDeltaTime() / 1e3,
                Mb = 1 - Math.pow(2, -wb / this._currentInterpolationFactor),
                eb = vb(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const wb = Vb.j.YC[0].set(vb(this._goalTarget.x, this.mO.x), vb(this._goalTarget.y, this.mO.y), vb(this._goalTarget.z, this.mO.z));
                Vb.o.LerpToRef(this.target, wb, Mb, this.mO), 10 * Vb.o.Distance(this.target, wb) / eb < Ub.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.eZ(wb), this.setTarget(this.target, !1, !0, !0)) : bb = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const wb = Vb.e.RotationAlphaBetaGammaToRef(vb(this._goalAlpha, this.alpha), vb(this._goalBeta, this.beta), 0, Vb.j.Quaternion[0]),
                  eb = Vb.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Vb.j.Quaternion[1]),
                  Hb = Vb.e.SlerpToRef(eb, wb, Mb, Vb.j.Quaternion[2]);
                Hb.normalize();
                const pb = Hb.toAlphaBetaGammaToRef(Vb.j.YC[0]);
                if (this.alpha = pb.x, this.beta = pb.y, Hb.isApprox(wb, Ub.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const bb = wb.toAlphaBetaGammaToRef(Vb.j.YC[0]);
                  this.alpha = bb.x, this.beta = bb.y
                } else bb = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (eb - this.radius) * Mb, Math.abs(eb / this.radius - 1) < Ub.e ? (this._goalRadius = NaN, this.radius = eb) : bb = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const wb = Vb.j.Vector2[0].set(vb(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), vb(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Vb.m.LerpToRef(this.targetScreenOffset, wb, Mb, this.targetScreenOffset), Vb.m.Distance(this.targetScreenOffset, wb) < Ub.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.eZ(wb)) : bb = !0
              }
              this._isInterpolating = bb
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Vb.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const bb = this.alpha;
            var wb, Mb;
            this.alpha = function(bb) {
              let wb = Math.PI / 2;
              return 0 === bb.x && 0 === bb.z || (wb = Math.acos(bb.x / Math.sqrt(Math.pow(bb.x, 2) + Math.pow(bb.z, 2)))), bb.z < 0 && (wb = 2 * Math.PI - wb), wb
            }(this._computationVector), this.beta = (wb = this._computationVector.y, Mb = this.radius, Math.acos(wb / Mb));
            const eb = Math.round((bb - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * eb * Math.PI, this._checkLimits()
          }
          setPosition(bb) {
            this._position.equals(bb) || (this._position.eZ(bb), this.rebuildAnglesAndRadius())
          }
          setTarget(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (eb = this.overrideCloneAlphaBetaRadius ?? eb, bb.computeWorldMatrix) wb && bb.XN ? this._targetBoundingCenter = bb.XN().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, bb.computeWorldMatrix(), this._targetHost = bb, this.mO = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const wb = bb,
                eb = this._getTargetPosition();
              if (eb && !Mb && eb.equals(wb)) return;
              this._targetHost = null, this.mO = wb, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            eb || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const bb = Math.cos(this.alpha),
              wb = Math.sin(this.alpha),
              Mb = Math.cos(this.beta);
            let eb = Math.sin(this.beta);
            0 === eb && (eb = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Hb = this._getTargetPosition();
            if (this._computationVector.twb(this.radius * bb * eb, this.radius * Mb, this.radius * wb * eb), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Vb.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Hb.addToRef(this._computationVector, this._newPosition), this.RJ().collisionsEnabled && this.checkCollisions) {
              const bb = this.RJ().collisionCoordinator;
              this._collider || (this._collider = bb.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, bb.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.eZ(this._newPosition);
              let bb = this.upVector;
              this.allowUpsideDown && eb < 0 && (bb = bb.oE()), this._computeViewMatrix(this._position, Hb, bb), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.eZ(Hb), this._viewMatrix
          }
          zoomOn(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            bb = bb || this.RJ().meshes;
            const Mb = Lb.e.MinMax(bb);
            let eb = this._calculateLowerRadiusFromModelBoundingSphere(Mb.min, Mb.max);
            if (eb = Math.max(Math.min(eb, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = eb * this.zoomOnFactor, this.mode === sb.c.ORTHOGRAPHIC_CAMERA) {
              const bb = this.RJ().DC().getAspectRatio(this),
                wb = eb * this.zoomOnFactor / 2;
              this.orthoLeft = -wb * bb, this.orthoRight = wb * bb, this.orthoBottom = -wb, this.orthoTop = wb
            }
            this.focusOn({
              min: Mb.min,
              max: Mb.max,
              distance: eb
            }, wb)
          }
          focusOn(bb) {
            let wb, Mb, eb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === bb.min) {
              const eb = bb || this.RJ().meshes;
              wb = Lb.e.MinMax(eb), Mb = Vb.o.Distance(wb.min, wb.max)
            } else {
              wb = bb, Mb = bb.distance
            }
            this.mO = Lb.e.Center(wb), eb || (this.maxZ = 2 * Mb)
          }
          createRigCamera(wb, Mb) {
            let eb = 0;
            switch (this.cameraRigMode) {
              case sb.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case sb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case sb.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case sb.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case sb.c.RIG_MODE_VR:
                eb = this._cameraRigParams.stereoHalfAngle * (0 === Mb ? 1 : -1);
                break;
              case sb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                eb = this._cameraRigParams.stereoHalfAngle * (0 === Mb ? -1 : 1)
            }
            const Hb = new bb(wb, this.alpha + eb, this.beta, this.radius, this.mO, this.RJ());
            return Hb._cameraRigParams = {}, Hb.isRigCamera = !0, Hb.rigParent = this, Hb.upVector = this.upVector, Hb.mode = this.mode, Hb.orthoLeft = this.orthoLeft, Hb.orthoRight = this.orthoRight, Hb.orthoBottom = this.orthoBottom, Hb.orthoTop = this.orthoTop, Hb
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              wb = this._rigCameras[1];
            switch (bb.beta = wb.beta = this.beta, this.cameraRigMode) {
              case sb.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case sb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case sb.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case sb.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case sb.c.RIG_MODE_VR:
                bb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, wb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case sb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                bb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, wb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const eb = Vb.o.Distance(bb, wb),
              Hb = this.RJ().DC().getAspectRatio(this),
              pb = Math.tan(this.fov / 2),
              gb = pb * Hb,
              lb = .5 * eb * Mb,
              Lb = lb * Math.sqrt(1 + 1 / (gb * gb)),
              Ib = lb * Math.sqrt(1 + 1 / (pb * pb));
            return Math.max(Lb, Ib)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(db[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.B)("target")], Cb = [(0, Hb.r)("targetHost")], Eb = [(0, Hb.E)()], hb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], xb = [(0, Hb.E)()], jb = [(0, Hb.E)()], Kb = [(0, Hb.E)()], rb = [(0, Hb.E)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], Yb = [(0, Hb.E)()], Zb = [(0, Hb.E)()], fb = [(0, Hb.E)()], Wb = [(0, Hb.E)()], Jb = [(0, Hb.B)()], Sb = [(0, Hb.E)()], Qb = [(0, Hb.E)()], Gb = [(0, Hb.E)()], qb = [(0, Hb.y)()], ab = [(0, Hb.E)()], ib = [(0, Hb.E)()], ub = [(0, Hb.E)()], (0, eb.i)(bb, null, Eb, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialAlphaOffset" in bb,
              get: bb => bb.inertialAlphaOffset
            },
            metadata: pb
          }, null, Pb), (0, eb.i)(bb, null, hb, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialBetaOffset" in bb,
              get: bb => bb.inertialBetaOffset
            },
            metadata: pb
          }, null, Pb), (0, eb.i)(bb, null, Xb, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialRadiusOffset" in bb,
              get: bb => bb.inertialRadiusOffset
            },
            metadata: pb
          }, null, Pb), (0, eb.i)(bb, null, Sb, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningInertia" in bb,
              get: bb => bb.panningInertia
            },
            metadata: pb
          }, null, Pb), (0, eb.i)(bb, null, Qb, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomToMouseLocation" in bb,
              get: bb => bb.zoomToMouseLocation
            },
            metadata: pb
          }, null, Pb), (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "alpha" in bb,
              get: bb => bb.alpha,
              set: (bb, wb) => {
                bb.alpha = wb
              }
            },
            metadata: pb
          }, nb, yb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: bb => "beta" in bb,
              get: bb => bb.beta,
              set: (bb, wb) => {
                bb.beta = wb
              }
            },
            metadata: pb
          }, ob, Tb), (0, eb.i)(null, null, lb, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: bb => "radius" in bb,
              get: bb => bb.radius,
              set: (bb, wb) => {
                bb.radius = wb
              }
            },
            metadata: pb
          }, kb, bw), (0, eb.i)(null, null, Ib, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "overrideCloneAlphaBetaRadius" in bb,
              get: bb => bb.overrideCloneAlphaBetaRadius,
              set: (bb, wb) => {
                bb.overrideCloneAlphaBetaRadius = wb
              }
            },
            metadata: pb
          }, ww, Mw), (0, eb.i)(null, null, Ob, {
            kind: "field",
            name: "mO",
            static: !1,
            private: !1,
            access: {
              has: bb => "mO" in bb,
              get: bb => bb.mO,
              set: (bb, wb) => {
                bb.mO = wb
              }
            },
            metadata: pb
          }, ew, Hw), (0, eb.i)(null, null, Cb, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: bb => "_targetHost" in bb,
              get: bb => bb._targetHost,
              set: (bb, wb) => {
                bb._targetHost = wb
              }
            },
            metadata: pb
          }, pw, Vw), (0, eb.i)(null, null, xb, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerAlphaLimit" in bb,
              get: bb => bb.lowerAlphaLimit,
              set: (bb, wb) => {
                bb.lowerAlphaLimit = wb
              }
            },
            metadata: pb
          }, gw, lw), (0, eb.i)(null, null, jb, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperAlphaLimit" in bb,
              get: bb => bb.upperAlphaLimit,
              set: (bb, wb) => {
                bb.upperAlphaLimit = wb
              }
            },
            metadata: pb
          }, Lw, Iw), (0, eb.i)(null, null, Kb, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerBetaLimit" in bb,
              get: bb => bb.lowerBetaLimit,
              set: (bb, wb) => {
                bb.lowerBetaLimit = wb
              }
            },
            metadata: pb
          }, Ow, Uw), (0, eb.i)(null, null, rb, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperBetaLimit" in bb,
              get: bb => bb.upperBetaLimit,
              set: (bb, wb) => {
                bb.upperBetaLimit = wb
              }
            },
            metadata: pb
          }, tw, Cw), (0, eb.i)(null, null, Rb, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerRadiusLimit" in bb,
              get: bb => bb.lowerRadiusLimit,
              set: (bb, wb) => {
                bb.lowerRadiusLimit = wb
              }
            },
            metadata: pb
          }, Ew, Fw), (0, eb.i)(null, null, Db, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperRadiusLimit" in bb,
              get: bb => bb.upperRadiusLimit,
              set: (bb, wb) => {
                bb.upperRadiusLimit = wb
              }
            },
            metadata: pb
          }, Bw, sw), (0, eb.i)(null, null, cb, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerTargetYLimit" in bb,
              get: bb => bb.lowerTargetYLimit,
              set: (bb, wb) => {
                bb.lowerTargetYLimit = wb
              }
            },
            metadata: pb
          }, mw, hw), (0, eb.i)(null, null, Yb, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningX" in bb,
              get: bb => bb.inertialPanningX,
              set: (bb, wb) => {
                bb.inertialPanningX = wb
              }
            },
            metadata: pb
          }, zw, Xw), (0, eb.i)(null, null, Zb, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningY" in bb,
              get: bb => bb.inertialPanningY,
              set: (bb, wb) => {
                bb.inertialPanningY = wb
              }
            },
            metadata: pb
          }, xw, jw), (0, eb.i)(null, null, fb, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchToPanMaxDistance" in bb,
              get: bb => bb.pinchToPanMaxDistance,
              set: (bb, wb) => {
                bb.pinchToPanMaxDistance = wb
              }
            },
            metadata: pb
          }, Kw, rw), (0, eb.i)(null, null, Wb, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningDistanceLimit" in bb,
              get: bb => bb.panningDistanceLimit,
              set: (bb, wb) => {
                bb.panningDistanceLimit = wb
              }
            },
            metadata: pb
          }, Rw, Dw), (0, eb.i)(null, null, Jb, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningOriginTarget" in bb,
              get: bb => bb.panningOriginTarget,
              set: (bb, wb) => {
                bb.panningOriginTarget = wb
              }
            },
            metadata: pb
          }, Yw, Zw), (0, eb.i)(null, null, Gb, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomOnFactor" in bb,
              get: bb => bb.zoomOnFactor,
              set: (bb, wb) => {
                bb.zoomOnFactor = wb
              }
            },
            metadata: pb
          }, fw, Aw), (0, eb.i)(null, null, qb, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "targetScreenOffset" in bb,
              get: bb => bb.targetScreenOffset,
              set: (bb, wb) => {
                bb.targetScreenOffset = wb
              }
            },
            metadata: pb
          }, Ww, Jw), (0, eb.i)(null, null, ab, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: bb => "allowUpsideDown" in bb,
              get: bb => bb.allowUpsideDown,
              set: (bb, wb) => {
                bb.allowUpsideDown = wb
              }
            },
            metadata: pb
          }, Sw, Nw), (0, eb.i)(null, null, ib, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: bb => "useInputToRestoreState" in bb,
              get: bb => bb.useInputToRestoreState,
              set: (bb, wb) => {
                bb.useInputToRestoreState = wb
              }
            },
            metadata: pb
          }, vw, Qw), (0, eb.i)(null, null, ub, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "restoreStateInterpolationFactor" in bb,
              get: bb => bb.restoreStateInterpolationFactor,
              set: (bb, wb) => {
                bb.restoreStateInterpolationFactor = wb
              }
            },
            metadata: pb
          }, Gw, qw), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Gb = !1;
    Gb || (Gb = !0, lb.d.AddNodeConstructor("ArcRotateCamera", ((bb, wb) => () => new Qb(bb, 0, 0, 1, Vb.o.Zero(), wb))), (0, Wb.e)("BABYLON.ArcRotateCamera", Qb))
  },
  41920: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb.e
    });
    var eb = Mb(41929);
    (0, eb.h)()
  },
  41929: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib,
      h: () => Ub
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(38406),
      gb = Mb(41931),
      lb = Mb(41886),
      Lb = Mb(38333);
    let Ib = (() => {
        var bb;
        let wb, Mb, lb = gb.d,
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        return bb = class extends lb {
          constructor(bb, wb, Mb, Hb) {
            super(bb, Mb, Hb), this.groundColor = (0, eb.m)(this, Lb, new Vb.e(0, 0, 0)), this.direction = ((0, eb.m)(this, Ib), (0, eb.m)(this, Ob, void 0)), (0, eb.m)(this, Ub), this.direction = wb || pb.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = pb.o.Normalize(bb.subtract(pb.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Mb.x, Mb.y, Mb.z, 0, wb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), wb), this
          }
          transferToNodeMaterialEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return bb.setFloat3(wb, Mb.x, Mb.y, Mb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return gb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, wb) {
            bb["HEMILIGHT" + wb] = !0
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(lb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.i)()], Mb = [(0, Hb.B)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, wb) => {
                bb.groundColor = wb
              }
            },
            metadata: pb
          }, Lb, Ib), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, wb) => {
                bb.direction = wb
              }
            },
            metadata: pb
          }, Ob, Ub), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Ob = !1;

    function Ub() {
      Ob || (Ob = !0, lb.d.AddNodeConstructor("Light_Type_3", ((bb, wb) => () => new Ib(bb, pb.o.Zero(), wb))), (0, Lb.e)("BABYLON.HemisphericLight", Ib))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
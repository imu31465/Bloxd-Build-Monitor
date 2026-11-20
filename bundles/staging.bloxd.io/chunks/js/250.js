export const id = 250;
export const ids = [250];
export const modules = {
  40507: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => qb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36683),
      Tb = sb(36656),
      Ub = sb(36688),
      Ib = sb(39667),
      Hb = sb(39835),
      fb = sb(39613),
      Mb = sb(39314),
      Xb = sb(36661);
    class nb {
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
        const cb = this._attachedCamera.EY();
        this._onPrePointerObservableObserver = cb.onPrePointerObservable.add((bb => {
          bb.type !== fb.b.POINTERDOWN ? bb.type === fb.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const bb = Mb.e.Now;
          let cb = 0;
          null != this._lastFrameTime && (cb = bb - this._lastFrameTime), this._lastFrameTime = bb, this._applyUserInteraction();
          const sb = bb - this._lastInteractionTime - this._idleRotationWaitTime,
            kb = Math.max(Math.min(sb / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * kb, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (cb / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.EY();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(bb) {
        this._lastInteractionTime = bb ?? Mb.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Xb.d
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Mb.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    sb(40516);
    class mb {
      constructor() {
        this._easingMode = mb.EASINGMODE_EASEIN
      }
      setEasingMode(bb) {
        const cb = Math.min(Math.max(bb, 0), 2);
        this._easingMode = cb
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(bb) {
        throw new Error("You must implement this method")
      }
      ease(bb) {
        switch (this._easingMode) {
          case mb.EASINGMODE_EASEIN:
            return this.easeInCore(bb);
          case mb.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - bb)
        }
        return bb >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - bb))) + .5 : .5 * this.easeInCore(2 * bb)
      }
    }
    mb.EASINGMODE_EASEIN = 0, mb.EASINGMODE_EASEOUT = 1, mb.EASINGMODE_EASEINOUT = 2;
    var lb = sb(40519);
    class Qb {
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
        const cb = this._attachedCamera;
        cb && (bb ? this._onMeshTargetChangedObserver = cb.onMeshTargetChangedObservable.add((bb => {
          if (bb && (bb.computeWorldMatrix(!0), bb.PJ)) {
            const cb = bb.PJ().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * cb, this.upperRadiusTransitionRange = .05 * cb
          }
        })) : this._onMeshTargetChangedObserver && cb.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (Qb.EasingFunction.setEasingMode(Qb.EasingMode), this._radiusBounceTransition = lb.c.CreateAnimation("radius", lb.c.ANIMATIONTYPE_FLOAT, 60, Qb.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const cb = lb.c.TransitionTo("radius", this._attachedCamera.radius + bb, this._attachedCamera, this._attachedCamera.EY(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        cb && this._animatables.push(cb)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Qb.EasingFunction = new class extends mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = bb
      }
      easeInCore(bb) {
        const cb = Math.max(0, this.amplitude);
        return Math.pow(bb, 3) - bb * cb * Math.sin(3.141592653589793 * bb)
      }
    }(.3), Qb.EasingMode = mb.EASINGMODE_EASEOUT;
    class eb {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new ab.c, this._mode = eb.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const cb = this._attachedCamera.EY();
        eb.EasingFunction.setEasingMode(eb.EasingMode), this._onPrePointerObservableObserver = cb.onPrePointerObservable.add((bb => {
          bb.type !== fb.b.POINTERDOWN ? bb.type === fb.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = bb.onMeshTargetChangedObservable.add((bb => {
          bb && bb.PJ && this.zoomOnMesh(bb, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.EY();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const kb = bb.PJ().boundingBox;
        this.zoomOnBoundingInfo(kb.minimumWorld, kb.maximumWorld, cb, sb)
      }
      zoomOnMeshHierarchy(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const kb = bb.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(kb.min, kb.max, cb, sb)
      }
      zoomOnMeshesHierarchy(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const kb = new Tb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Wb = new Tb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let ab = 0; ab < bb.length; ab++) {
          const cb = bb[ab].getHierarchyBoundingVectors(!0);
          Tb.p.CheckExtends(cb.min, kb, Wb), Tb.p.CheckExtends(cb.max, kb, Wb)
        }
        this.zoomOnBoundingInfo(kb, Wb, cb, sb)
      }
      zoomOnBoundingInfo(bb, cb) {
        let sb, kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const ab = bb.y,
          Ub = ab + (cb.y - ab) * this._positionScale,
          Ib = cb.subtract(bb).scale(.5);
        if (!isFinite(Ub)) return !1;
        if (kb) sb = new Tb.p(0, Ub, 0);
        else {
          const cb = bb.add(Ib);
          sb = new Tb.p(cb.x, Ub, cb.z)
        }
        this._vectorTransition || (this._vectorTransition = lb.c.CreateAnimation("target", lb.c.ANIMATIONTYPE_VECTOR3, 60, eb.EasingFunction)), this._betaIsAnimating = !0;
        let Hb = lb.c.TransitionTo("target", sb, this._attachedCamera, this._attachedCamera.EY(), 60, this._vectorTransition, this._framingTime);
        Hb && this._animatables.push(Hb);
        let fb = 0;
        if (this._mode === eb.FitFrustumSidesMode) {
          const sb = this._calculateLowerRadiusFromModelBoundingSphere(bb, cb);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Ib.length() + this._attachedCamera.minZ), fb = sb
        } else this._mode === eb.IgnoreBoundsSizeMode && (fb = this._calculateLowerRadiusFromModelBoundingSphere(bb, cb), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const sb = cb.subtract(bb).length();
          this._attachedCamera.panningSensibility = 5e3 / sb, this._attachedCamera.wheelPrecision = 100 / fb
        }
        return this._radiusTransition || (this._radiusTransition = lb.c.CreateAnimation("radius", lb.c.ANIMATIONTYPE_FLOAT, 60, eb.EasingFunction)), Hb = lb.c.TransitionTo("radius", fb, this._attachedCamera, this._attachedCamera.EY(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Wb && Wb(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Hb && this._animatables.push(Hb), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(bb, cb) {
        const sb = this._attachedCamera;
        if (!sb) return 0;
        let kb = sb._calculateLowerRadiusFromModelBoundingSphere(bb, cb, this._radiusScale);
        return sb.lowerRadiusLimit && this._mode === eb.IgnoreBoundsSizeMode && (kb = kb < sb.lowerRadiusLimit ? sb.lowerRadiusLimit : kb), sb.upperRadiusLimit && (kb = kb > sb.upperRadiusLimit ? sb.upperRadiusLimit : kb), kb
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const bb = Mb.e.Now - this._lastInteractionTime,
          cb = .5 * Math.PI - this._defaultElevation,
          sb = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > sb && bb >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = lb.c.CreateAnimation("beta", lb.c.ANIMATIONTYPE_FLOAT, 60, eb.EasingFunction));
          const bb = lb.c.TransitionTo("beta", cb, this._attachedCamera, this._attachedCamera.EY(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          bb && this._animatables.push(bb)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Mb.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    eb.EasingFunction = new class extends mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = bb
      }
      easeInCore(bb) {
        return this.exponent <= 0 ? bb : (Math.exp(this.exponent * bb) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, eb.EasingMode = mb.EASINGMODE_EASEINOUT, eb.IgnoreBoundsSizeMode = 0, eb.FitFrustumSidesMode = 1;
    var Cb = sb(39658),
      Nb = sb(39653),
      Vb = sb(39690),
      Lb = sb(39531);
    let ub = (() => {
        var bb;
        let cb, sb = [],
          ab = [];
        return bb = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, kb.m)(this, sb, [0, 1, 2]), this._pointerInput = (0, kb.m)(this, ab)
          }
          attachControl(bb) {
            bb = Lb.g.BackCompatCameraNoPreventDefault(arguments);
            const cb = this.camera.Sm(),
              sb = cb.getInputElement();
            let kb = 0,
              Wb = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = ab => {
              const Tb = ab.event,
                Ub = "touch" === Tb.pointerType;
              if (ab.type !== fb.b.POINTERMOVE && -1 === this.buttons.indexOf(Tb.button)) return;
              const Ib = Tb.target;
              if (this._altKey = Tb.altKey, this._ctrlKey = Tb.ctrlKey, this._metaKey = Tb.metaKey, this._shiftKey = Tb.shiftKey, this._buttonsPressed = Tb.buttons, cb.isPointerLock) {
                const bb = Tb.movementX,
                  cb = Tb.movementY;
                this.onTouch(null, bb, cb), this._pointA = null, this._pointB = null
              } else {
                if (ab.type !== fb.b.POINTERDOWN && ab.type !== fb.b.POINTERDOUBLETAP && Ub && this._pointA?.pointerId !== Tb.pointerId && this._pointB?.pointerId !== Tb.pointerId) return;
                if (ab.type !== fb.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Ub)
                  if (ab.type === fb.b.POINTERDOUBLETAP) this.onDoubleTap(Tb.pointerType, Tb);
                  else if (ab.type !== fb.b.POINTERUP || this._currentMousePointerIdDown !== Tb.pointerId && !Ub) {
                  if (ab.type === fb.b.POINTERMOVE)
                    if (bb || Tb.preventDefault(), this._pointA && null === this._pointB) {
                      const bb = Tb.clientX - this._pointA.x,
                        cb = Tb.clientY - this._pointA.y;
                      this._pointA.x = Tb.clientX, this._pointA.y = Tb.clientY, this.onTouch(this._pointA, bb, cb)
                    } else if (this._pointA && this._pointB) {
                    const bb = this._pointA.pointerId === Tb.pointerId ? this._pointA : this._pointB;
                    bb.x = Tb.clientX, bb.y = Tb.clientY;
                    const cb = this._pointA.x - this._pointB.x,
                      sb = this._pointA.y - this._pointB.y,
                      Ub = cb * cb + sb * sb,
                      Ib = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Tb.pointerId,
                        type: ab.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, kb, Ub, Wb, Ib), Wb = Ib, kb = Ub
                  }
                } else {
                  try {
                    Ib?.releasePointerCapture(Tb.pointerId)
                  } catch (Hb) {}
                  Ub || (this._pointB = null), cb._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Tb.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Tb.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== kb || Wb) && (this.onMultiTouch(this._pointA, this._pointB, kb, 0, Wb, null), kb = 0, Wb = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Tb), bb || Tb.preventDefault()
                } else {
                  try {
                    Ib?.setPointerCapture(Tb.pointerId)
                  } catch (Hb) {}
                  if (null === this._pointA) this._pointA = {
                    x: Tb.clientX,
                    y: Tb.clientY,
                    pointerId: Tb.pointerId,
                    type: Tb.pointerType,
                    button: Tb.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Tb.clientX,
                      y: Tb.clientY,
                      pointerId: Tb.pointerId,
                      type: Tb.pointerType,
                      button: Tb.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Ub || (this._currentMousePointerIdDown = Tb.pointerId), this.onButtonDown(Tb), bb || (Tb.preventDefault(), sb && sb.focus())
                }
              }
            }, this._observer = this.camera.EY()._inputManager._addCameraPointerObserver(this._pointerInput, fb.b.POINTERDOWN | fb.b.POINTERUP | fb.b.POINTERMOVE | fb.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, kb = 0, Wb = null, this.onLostFocus()
            }, this._contextMenuBind = bb => this.onContextMenu(bb), sb && sb.addEventListener("contextmenu", this._contextMenuBind, !1);
            const ab = this.camera.EY().Sm().getHostWindow();
            ab && Lb.g.RegisterTopRootEvents(ab, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const bb = this.camera.EY().Sm().getHostWindow();
              bb && Lb.g.UnregisterTopRootEvents(bb, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.EY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const bb = this.camera.EY().Sm().getInputElement();
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
          onDoubleTap(bb, cb) {}
          onTouch(bb, cb, sb) {}
          onMultiTouch(bb, cb, sb, kb, Wb, ab) {}
          onContextMenu(bb) {
            bb.preventDefault()
          }
          onButtonDown(bb) {}
          onButtonUp(bb) {}
          onLostFocus() {}
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, cb) => {
                bb.buttons = cb
              }
            },
            metadata: Tb
          }, sb, ab), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Yb = (() => {
        var bb;
        let cb, sb, ab, Tb = ub,
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        return bb = class extends Tb {
          constructor() {
            super(...arguments), this.pinchZoom = (0, kb.m)(this, Ub, !0), this.multiTouchPanning = ((0, kb.m)(this, Ib), (0, kb.m)(this, Hb, !0)), this.multiTouchPanAndZoom = ((0, kb.m)(this, fb), (0, kb.m)(this, Mb, !0)), this._isPinching = ((0, kb.m)(this, Xb), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(bb, cb) {}
          _computeMultiTouchPanning(bb, cb) {}
          onMultiTouch(bb, cb, sb, kb, Wb, ab) {
            0 === sb && null === Wb || 0 === kb && null === ab || (this.multiTouchPanAndZoom ? (this._computePinchZoom(sb, kb), this._computeMultiTouchPanning(Wb, ab)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(sb, kb), this._isPinching = !0) : this._computeMultiTouchPanning(Wb, ab)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Wb, ab) : this.pinchZoom && this._computePinchZoom(sb, kb))
          }
          onButtonUp(bb) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchZoom" in bb,
              get: bb => bb.pinchZoom,
              set: (bb, cb) => {
                bb.pinchZoom = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanning" in bb,
              get: bb => bb.multiTouchPanning,
              set: (bb, cb) => {
                bb.multiTouchPanning = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, kb.j)(null, null, ab, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanAndZoom" in bb,
              get: bb => bb.multiTouchPanAndZoom,
              set: (bb, cb) => {
                bb.multiTouchPanAndZoom = cb
              }
            },
            metadata: nb
          }, Mb, Xb), nb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          })
        })(), bb
      })(),
      hb = (() => {
        var bb;
        let cb, sb, ab, Tb, Ub, Ib, Hb, fb = Yb,
          Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [],
          eb = [],
          Cb = [],
          Nb = [],
          Vb = [],
          Lb = [],
          ub = [],
          hb = [],
          Jb = [];
        return bb = class extends fb {
          constructor() {
            super(...arguments), this.buttons = (0, kb.m)(this, Mb, [0, 1, 2]), this.angularSensibilityX = ((0, kb.m)(this, Xb), (0, kb.m)(this, nb, 1e3)), this.angularSensibilityY = ((0, kb.m)(this, mb), (0, kb.m)(this, lb, 1e3)), this.pinchPrecision = ((0, kb.m)(this, Qb), (0, kb.m)(this, eb, 12)), this.pinchDeltaPercentage = ((0, kb.m)(this, Cb), (0, kb.m)(this, Nb, 0)), this.useNaturalPinchZoom = ((0, kb.m)(this, Vb), (0, kb.m)(this, Lb, !1)), this.panningSensibility = ((0, kb.m)(this, ub), (0, kb.m)(this, hb, 1e3)), this.pinchInwards = ((0, kb.m)(this, Jb), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(bb, cb) {
            if (bb && cb) {
              const sb = cb.x - bb.x,
                kb = cb.y - bb.y,
                Wb = this.camera.movement.input.getEntry("pointer", "pan"),
                ab = Wb?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== ab && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -sb * ab, this.camera.movement.panAccumulatedPixels.y += kb * ab)
            }
          }
          _computePinchZoom(cb, sb) {
            const kb = this.camera.radius || bb.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = kb * Math.sqrt(cb) / Math.sqrt(sb);
            else if (this.pinchDeltaPercentage) {
              const bb = .001 * (sb - cb) * kb * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            } else {
              const bb = (sb - cb) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            }
          }
          onTouch(bb, cb, sb) {
            const kb = this._activeEntry ?? (this.camera.Sm().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (kb)
              if ("pan" === kb.interaction) {
                const bb = kb.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== bb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -cb * bb, this.camera.movement.panAccumulatedPixels.y += sb * bb)
              } else if ("rotate" === kb.interaction) {
              const bb = kb.WK ?? kb.sensitivity ?? 1 / this.angularSensibilityX,
                Wb = kb.IK ?? kb.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -cb * bb, this.camera.movement.rotationAccumulatedPixels.y += -sb * Wb
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(bb, cb, sb, kb, Wb, ab) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(kb) - Math.sqrt(sb)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(bb, cb, sb, kb, Wb, ab)
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
          const Yb = "function" === typeof Symbol && Symbol.metadata ? Object.create(fb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], Tb = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, cb) => {
                bb.buttons = cb
              }
            },
            metadata: Yb
          }, Mb, Xb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityX" in bb,
              get: bb => bb.angularSensibilityX,
              set: (bb, cb) => {
                bb.angularSensibilityX = cb
              }
            },
            metadata: Yb
          }, nb, mb), (0, kb.j)(null, null, ab, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityY" in bb,
              get: bb => bb.angularSensibilityY,
              set: (bb, cb) => {
                bb.angularSensibilityY = cb
              }
            },
            metadata: Yb
          }, lb, Qb), (0, kb.j)(null, null, Tb, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchPrecision" in bb,
              get: bb => bb.pinchPrecision,
              set: (bb, cb) => {
                bb.pinchPrecision = cb
              }
            },
            metadata: Yb
          }, eb, Cb), (0, kb.j)(null, null, Ub, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchDeltaPercentage" in bb,
              get: bb => bb.pinchDeltaPercentage,
              set: (bb, cb) => {
                bb.pinchDeltaPercentage = cb
              }
            },
            metadata: Yb
          }, Nb, Vb), (0, kb.j)(null, null, Ib, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "useNaturalPinchZoom" in bb,
              get: bb => bb.useNaturalPinchZoom,
              set: (bb, cb) => {
                bb.useNaturalPinchZoom = cb
              }
            },
            metadata: Yb
          }, Lb, ub), (0, kb.j)(null, null, Hb, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningSensibility" in bb,
              get: bb => bb.panningSensibility,
              set: (bb, cb) => {
                bb.panningSensibility = cb
              }
            },
            metadata: Yb
          }, hb, Jb), Yb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yb
          })
        })(), bb.MinimumRadiusForPinch = .001, bb
      })();
    Vb.b.ArcRotateCameraPointersInput = hb;
    var Jb = sb(39622);
    let gb = (() => {
      var bb;
      let cb, sb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb = [],
        Qb = [],
        eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        ub = [],
        Yb = [],
        hb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [];
      return bb = class {
        constructor() {
          this.camera = (0, kb.m)(this, lb), this.keysUp = (0, kb.m)(this, Qb, [38]), this.keysDown = ((0, kb.m)(this, eb), (0, kb.m)(this, Cb, [40])), this.keysLeft = ((0, kb.m)(this, Nb), (0, kb.m)(this, Vb, [37])), this.keysRight = ((0, kb.m)(this, ub), (0, kb.m)(this, Yb, [39])), this.keysReset = ((0, kb.m)(this, hb), (0, kb.m)(this, gb, [220])), this.keysZoomIn = ((0, kb.m)(this, Bb), (0, kb.m)(this, tb, [187, 107])), this.keysZoomOut = ((0, kb.m)(this, yb), (0, kb.m)(this, Pb, [189, 109])), this.panningSensibility = ((0, kb.m)(this, Db), (0, kb.m)(this, Eb, 50)), this.zoomingSensibility = ((0, kb.m)(this, ib), (0, kb.m)(this, Ob, 25)), this.angularSpeed = ((0, kb.m)(this, Gb), (0, kb.m)(this, Kb, .01)), this._useAltToZoom = ((0, kb.m)(this, Zb), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Tb.n, this._panDirection = new Tb.n
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
            cb = bb.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && cb ? bb.inputMap.splice(bb.inputMap.indexOf(cb), 1) : this._useAltToZoom && !cb && bb.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(bb) {
          bb = Lb.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.EY(), this._engine = this._scene.Sm(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((cb => {
            const sb = cb.event;
            if (!sb.metaKey)
              if (cb.type === Jb.b.KEYDOWN) {
                if (this._ctrlPressed = sb.ctrlKey, this._altPressed = sb.altKey, -1 !== this.keysUp.indexOf(sb.keyCode) || -1 !== this.keysDown.indexOf(sb.keyCode) || -1 !== this.keysLeft.indexOf(sb.keyCode) || -1 !== this.keysRight.indexOf(sb.keyCode) || -1 !== this.keysReset.indexOf(sb.keyCode) || -1 !== this.keysZoomIn.indexOf(sb.keyCode) || -1 !== this.keysZoomOut.indexOf(sb.keyCode)) {
                  -1 === this._keys.indexOf(sb.keyCode) && this._keys.push(sb.keyCode), sb.preventDefault && (bb || sb.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(sb.keyCode) || -1 !== this.keysDown.indexOf(sb.keyCode) || -1 !== this.keysLeft.indexOf(sb.keyCode) || -1 !== this.keysRight.indexOf(sb.keyCode) || -1 !== this.keysReset.indexOf(sb.keyCode) || -1 !== this.keysZoomIn.indexOf(sb.keyCode) || -1 !== this.keysZoomOut.indexOf(sb.keyCode)) {
              const cb = this._keys.indexOf(sb.keyCode);
              cb >= 0 && this._keys.splice(cb, 1), sb.preventDefault && (bb || sb.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              cb = bb.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const sb = this._rotateDirection.set(0, 0),
              kb = this._panDirection.set(0, 0);
            let Wb = 0,
              ab = 0;
            for (let Tb = 0; Tb < this._keys.length; Tb++) {
              const Ub = this._keys[Tb];
              if (this._keyboardConditions.key = Ub, -1 === this.keysReset.indexOf(Ub)) {
                const bb = cb.resolveInteraction("keyboard", this._keyboardConditions);
                if (bb)
                  if ("pan" === bb.interaction) ab = Math.max(ab, bb.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Ub) ? kb.x -= 1 : -1 !== this.keysRight.indexOf(Ub) ? kb.x += 1 : -1 !== this.keysUp.indexOf(Ub) ? kb.y += 1 : -1 !== this.keysDown.indexOf(Ub) && (kb.y -= 1);
                  else if ("zoom" === bb.interaction) {
                  const sb = bb.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Ub) || -1 !== this.keysZoomIn.indexOf(Ub) ? cb.handlers.zoom(sb) : -1 === this.keysDown.indexOf(Ub) && -1 === this.keysZoomOut.indexOf(Ub) || cb.handlers.zoom(-sb)
                } else "rotate" === bb.interaction && (Wb = Math.max(Wb, bb.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Ub) ? sb.x -= 1 : -1 !== this.keysRight.indexOf(Ub) ? sb.x += 1 : -1 !== this.keysUp.indexOf(Ub) ? sb.y -= 1 : -1 !== this.keysDown.indexOf(Ub) && (sb.y += 1))
              } - 1 !== this.keysReset.indexOf(Ub) && bb.useInputToRestoreState && bb.restoreState()
            }
            0 === sb.x && 0 === sb.y || (sb.normalize().scaleInPlace(Wb), cb.handlers.rotate(sb.x, sb.y)), 0 === kb.x && 0 === kb.y || (kb.normalize().scaleInPlace(ab), cb.handlers.pan(kb.x, kb.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], nb = [(0, Wb.E)()], mb = [(0, Wb.E)()], (0, kb.j)(bb, null, mb, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAltToZoom" in bb,
            get: bb => bb.useAltToZoom
          },
          metadata: Tb
        }, null, lb), (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, cb) => {
              bb.keysUp = cb
            }
          },
          metadata: Tb
        }, Qb, eb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, cb) => {
              bb.keysDown = cb
            }
          },
          metadata: Tb
        }, Cb, Nb), (0, kb.j)(null, null, ab, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, cb) => {
              bb.keysLeft = cb
            }
          },
          metadata: Tb
        }, Vb, ub), (0, kb.j)(null, null, Ub, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, cb) => {
              bb.keysRight = cb
            }
          },
          metadata: Tb
        }, Yb, hb), (0, kb.j)(null, null, Ib, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysReset" in bb,
            get: bb => bb.keysReset,
            set: (bb, cb) => {
              bb.keysReset = cb
            }
          },
          metadata: Tb
        }, gb, Bb), (0, kb.j)(null, null, Hb, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomIn" in bb,
            get: bb => bb.keysZoomIn,
            set: (bb, cb) => {
              bb.keysZoomIn = cb
            }
          },
          metadata: Tb
        }, tb, yb), (0, kb.j)(null, null, fb, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomOut" in bb,
            get: bb => bb.keysZoomOut,
            set: (bb, cb) => {
              bb.keysZoomOut = cb
            }
          },
          metadata: Tb
        }, Pb, Db), (0, kb.j)(null, null, Mb, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "panningSensibility" in bb,
            get: bb => bb.panningSensibility,
            set: (bb, cb) => {
              bb.panningSensibility = cb
            }
          },
          metadata: Tb
        }, Eb, ib), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomingSensibility" in bb,
            get: bb => bb.zoomingSensibility,
            set: (bb, cb) => {
              bb.zoomingSensibility = cb
            }
          },
          metadata: Tb
        }, Ob, Gb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSpeed" in bb,
            get: bb => bb.angularSpeed,
            set: (bb, cb) => {
              bb.angularSpeed = cb
            }
          },
          metadata: Tb
        }, Kb, Zb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb
    })();
    Vb.b.ArcRotateCameraKeyboardMoveInput = gb;
    var Bb = sb(37368),
      tb = sb(39630);
    let yb = (() => {
      var bb;
      let cb, sb, ab, Ib = [],
        Hb = [],
        Mb = [],
        nb = [],
        mb = [],
        lb = [];
      return bb = class {
        constructor() {
          this.wheelPrecision = (0, kb.m)(this, Ib, 3), this.zoomToMouseLocation = ((0, kb.m)(this, Hb), (0, kb.m)(this, Mb, !1)), this.wheelDeltaPercentage = ((0, kb.m)(this, nb), (0, kb.m)(this, mb, 0)), this.customComputeDeltaFromMouseWheel = ((0, kb.m)(this, lb), null), this._viewOffset = new Tb.p(0, 0, 0), this._globalOffset = new Tb.p(0, 0, 0), this._inertialPanning = Tb.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(bb, cb) {
          let sb;
          const kb = .01 * bb * this.wheelDeltaPercentage * cb;
          return sb = bb > 0 ? kb / (1 + this.wheelDeltaPercentage) : kb * (1 + this.wheelDeltaPercentage), sb
        }
        attachControl(bb) {
          bb = Lb.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = cb => {
            if (cb.type !== fb.b.POINTERWHEEL) return;
            const sb = cb.event;
            let kb;
            const Wb = sb.deltaMode === tb.c.DOM_DELTA_LINE ? 40 : 1,
              ab = -sb.deltaY * Wb;
            if (this.customComputeDeltaFromMouseWheel) kb = this.customComputeDeltaFromMouseWheel(ab, this, sb);
            else if (this.wheelDeltaPercentage) {
              if (kb = this._computeDeltaFromMouseWheelLegacyEvent(ab, this.camera.radius), kb > 0) {
                const bb = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let cb = this.camera.radius,
                  sb = bb + kb;
                for (let kb = 0; kb < 20 && !(cb <= sb) && !(Math.abs(sb * this.camera.inertia) < .001); kb++) cb -= sb, sb *= this.camera.inertia;
                cb = (0, Ub.Clamp)(cb, 0, Number.MAX_VALUE), kb = this._computeDeltaFromMouseWheelLegacyEvent(ab, cb)
              }
            } else {
              const bb = this.camera.movement.input.getEntry("wheel", "zoom");
              kb = ab * (bb?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            kb && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(kb)) : this.camera.movement.zoomAccumulatedPixels += kb), sb.preventDefault && (bb || sb.preventDefault())
          }, this._observer = this.camera.EY()._inputManager._addCameraPointerObserver(this._wheel, fb.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.I6(0)
        }
        detachControl() {
          this._observer && (this.camera.EY()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const bb = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(bb.inertialAlphaOffset) + Math.abs(bb.inertialBetaOffset) + Math.abs(bb.inertialRadiusOffset)) {
            this._updateHitPlane(), bb.target.addInPlace(this._inertialPanning), bb.radius -= this._zoomToMouseRadiusOffset;
            const cb = bb.movement.getFrameIndependentDecay(bb.inertia);
            this._inertialPanning.scaleInPlace(cb), this._zoomToMouseRadiusOffset *= cb, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Xb.d && (this._zoomToMouseRadiusOffset = 0)
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
            cb = bb.target.subtract(bb.position);
          this._hitPlane = Bb.c.FromPositionAndNormal(bb.target, cb)
        }
        _getPosition() {
          const bb = this.camera,
            cb = bb.EY(),
            sb = cb.createPickingRay(cb.pointerX, cb.pointerY, Tb.e.Identity(), bb, !1);
          0 === bb.targetScreenOffset.x && 0 === bb.targetScreenOffset.y || (this._viewOffset.set(bb.targetScreenOffset.x, bb.targetScreenOffset.y, 0), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), this._globalOffset = Tb.p.TransformNormal(this._viewOffset, bb._cameraTransformMatrix), sb.origin.addInPlace(this._globalOffset));
          let kb = 0;
          return this._hitPlane && (kb = sb.intersectsPlane(this._hitPlane) ?? 0), sb.origin.addInPlace(sb.direction.scaleInPlace(kb))
        }
        _zoomToMouse(bb) {
          const cb = this.camera,
            sb = 1 - cb.inertia,
            kb = cb.movement.getFrameIndependentInputScale(cb.inertia);
          if (cb.lowerRadiusLimit) {
            const Wb = cb.lowerRadiusLimit ?? 0;
            cb.radius - (this._zoomToMouseRadiusOffset + bb * kb) / sb < Wb && (bb = ((cb.radius - Wb) * sb - this._zoomToMouseRadiusOffset) / kb)
          }
          if (cb.upperRadiusLimit) {
            const Wb = cb.upperRadiusLimit ?? 0;
            cb.radius - (this._zoomToMouseRadiusOffset + bb * kb) / sb > Wb && (bb = ((cb.radius - Wb) * sb - this._zoomToMouseRadiusOffset) / kb)
          }
          const Wb = bb / sb / cb.radius,
            ab = this._getPosition(),
            Ub = Tb.m.Fm[6];
          ab.subtractToRef(cb.target, Ub), Ub.scaleInPlace(Wb), Ub.scaleInPlace(sb), Ub.scaleInPlace(kb), this._inertialPanning.addInPlace(Ub), this._zoomToMouseRadiusOffset += bb * kb
        }
        _zeroIfClose(bb) {
          Math.abs(bb.x) < Xb.d && (bb.x = 0), Math.abs(bb.y) < Xb.d && (bb.y = 0), Math.abs(bb.z) < Xb.d && (bb.z = 0)
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecision" in bb,
            get: bb => bb.wheelPrecision,
            set: (bb, cb) => {
              bb.wheelPrecision = cb
            }
          },
          metadata: Tb
        }, Ib, Hb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomToMouseLocation" in bb,
            get: bb => bb.zoomToMouseLocation,
            set: (bb, cb) => {
              bb.zoomToMouseLocation = cb
            }
          },
          metadata: Tb
        }, Mb, nb), (0, kb.j)(null, null, ab, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelDeltaPercentage" in bb,
            get: bb => bb.wheelDeltaPercentage,
            set: (bb, cb) => {
              bb.wheelDeltaPercentage = cb
            }
          },
          metadata: Tb
        }, mb, lb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb
    })();
    Vb.b.ArcRotateCameraMouseWheelInput = yb;
    var Pb, Db, Eb = sb(39296);
    class ib extends Vb.c {
      constructor(bb) {
        super(bb)
      }
      addMouseWheel() {
        return this.add(new yb), this
      }
      addPointers() {
        return this.add(new hb), this
      }
      addKeyboard() {
        return this.add(new gb), this
      }
    }(Pb = ib.prototype).addVRDeviceOrientation ?? (Pb.addVRDeviceOrientation = (0, Eb.e)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Db = ib.prototype).addGamepad ?? (Db.addGamepad = (0, Eb.e)("ArcRotateCameraInputsManager", "addGamepad"));
    var Ob = sb(36698),
      Gb = sb(39676),
      Kb = sb(39682);
    class Zb extends Gb.b {
      constructor(bb, cb, sb) {
        super(bb, cb, sb), this.input = new Kb.d({
          pan: (bb, cb) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += cb
          },
          rotate: (bb, cb) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += cb
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

    function zb(bb, cb) {
      return isNaN(bb) ? cb : bb
    }
    let qb = (() => {
        var bb;
        let cb, sb, Ib, fb, Mb, mb, lb, Vb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db, Eb, Ob, Gb, Kb, qb, db, Ab, wb, rb, ob, Sb = Nb.f,
          Rb = [],
          vb = [],
          Fb = [],
          xb = [],
          jb = [],
          pb = [],
          bc = [],
          cc = [],
          sc = [],
          kc = [],
          Wc = [],
          ac = [],
          Tc = [],
          Uc = [],
          Ic = [],
          Hc = [],
          fc = [],
          Mc = [],
          Xc = [],
          nc = [],
          mc = [],
          lc = [],
          Qc = [],
          ec = [],
          Cc = [],
          Nc = [],
          Vc = [],
          Lc = [],
          uc = [],
          Yc = [],
          hc = [],
          Jc = [],
          gc = [],
          Bc = [],
          tc = [],
          yc = [],
          Pc = [],
          Dc = [],
          Ec = [],
          ic = [],
          Oc = [],
          Gc = [],
          Kc = [],
          Zc = [],
          zc = [],
          qc = [],
          dc = [];
        return bb = class extends Sb {
          get target() {
            return this.mw
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
            this._upToYMatrix || (this._yToUpMatrix = new Tb.e, this._upToYMatrix = new Tb.e, this._upVector = Tb.p.Zero()), bb.normalize(), this._upVector.ssb(bb), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Tb.e.RotationAlignToRef(Tb.p.UpReadOnly, this._upVector, this._yToUpMatrix), Tb.e.RotationAlignToRef(this._upVector, Tb.p.UpReadOnly, this._upToYMatrix)
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
            const cb = this.inputs.attached.pointers;
            cb && (cb.angularSensibilityX = bb)
          }
          get angularSensibilityY() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.angularSensibilityY : 0
          }
          set angularSensibilityY(bb) {
            const cb = this.inputs.attached.pointers;
            cb && (cb.angularSensibilityY = bb)
          }
          get pinchPrecision() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchPrecision : 0
          }
          set pinchPrecision(bb) {
            const cb = this.inputs.attached.pointers;
            cb && (cb.pinchPrecision = bb)
          }
          get pinchDeltaPercentage() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(bb) {
            const cb = this.inputs.attached.pointers;
            cb && (cb.pinchDeltaPercentage = bb)
          }
          get useNaturalPinchZoom() {
            const bb = this.inputs.attached.pointers;
            return !!bb && bb.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(bb) {
            const cb = this.inputs.attached.pointers;
            cb && (cb.useNaturalPinchZoom = bb)
          }
          get panningSensibility() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.panningSensibility : 0
          }
          set panningSensibility(bb) {
            const cb = this.inputs.attached.pointers;
            cb && (cb.panningSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysUp = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysDown = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const cb = this.inputs.attached.keyboard;
            cb && (cb.keysRight = bb)
          }
          get wheelPrecision() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelPrecision : 0
          }
          set wheelPrecision(bb) {
            const cb = this.inputs.attached.mousewheel;
            cb && (cb.wheelPrecision = bb)
          }
          get zoomToMouseLocation() {
            const bb = this.inputs.attached.mousewheel;
            return !!bb && bb.zoomToMouseLocation
          }
          set zoomToMouseLocation(bb) {
            const cb = this.inputs.attached.mousewheel;
            cb && (cb.zoomToMouseLocation = bb)
          }
          get wheelDeltaPercentage() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(bb) {
            const cb = this.inputs.attached.mousewheel;
            cb && (cb.wheelDeltaPercentage = bb)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(bb) {
            this._useCtrlForPanningInternal = bb;
            const cb = this.movement.input,
              sb = cb.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !bb && sb ? cb.inputMap.splice(cb.inputMap.indexOf(sb), 1) : bb && !sb && cb.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const kb = cb.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !bb && kb ? cb.inputMap.splice(cb.inputMap.indexOf(kb), 1) : bb && !kb && cb.addEntry({
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
            const cb = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            cb && (cb.button = bb)
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
            bb !== this.useBouncingBehavior && (bb ? (this._bouncingBehavior = new Qb, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(bb) {
            bb !== this.useFramingBehavior && (bb ? (this._framingBehavior = new eb, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(bb) {
            bb !== this.useAutoRotationBehavior && (bb ? (this._autoRotationBehavior = new nb, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(bb, cb, sb, Wb, Ub, Ib) {
            var Hb;
            let fb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(bb, Tb.p.Zero(), Ib, fb), Hb = this, this.alpha = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, void 0)), this.beta = ((0, kb.m)(this, Fb), (0, kb.m)(this, xb, void 0)), this.radius = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, void 0)), this.overrideCloneAlphaBetaRadius = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, void 0)), this.mw = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, void 0)), this._targetHost = ((0, kb.m)(this, Wc), (0, kb.m)(this, ac, void 0)), this._upToYMatrix = (0, kb.m)(this, Tc), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, kb.m)(this, Uc, null), this.upperAlphaLimit = ((0, kb.m)(this, Ic), (0, kb.m)(this, Hc, null)), this.lowerBetaLimit = ((0, kb.m)(this, fc), (0, kb.m)(this, Mc, .01)), this.upperBetaLimit = ((0, kb.m)(this, Xc), (0, kb.m)(this, nc, Math.PI - .01)), this.lowerRadiusLimit = ((0, kb.m)(this, mc), (0, kb.m)(this, lc, null)), this.upperRadiusLimit = ((0, kb.m)(this, Qc), (0, kb.m)(this, ec, null)), this.lowerTargetYLimit = ((0, kb.m)(this, Cc), (0, kb.m)(this, Nc, -1 / 0)), this.inertialPanningX = ((0, kb.m)(this, Vc), (0, kb.m)(this, Lc, 0)), this.inertialPanningY = ((0, kb.m)(this, uc), (0, kb.m)(this, Yc, 0)), this.pinchToPanMaxDistance = ((0, kb.m)(this, hc), (0, kb.m)(this, Jc, 20)), this.panningDistanceLimit = ((0, kb.m)(this, gc), (0, kb.m)(this, Bc, null)), this.panningOriginTarget = ((0, kb.m)(this, tc), (0, kb.m)(this, yc, Tb.p.Zero())), this._panningInertia = ((0, kb.m)(this, Pc), .9), this._inertia = .9, this.zoomOnFactor = (0, kb.m)(this, Dc, 1), this.targetScreenOffset = ((0, kb.m)(this, Ec), (0, kb.m)(this, ic, Tb.n.Zero())), this.allowUpsideDown = ((0, kb.m)(this, Oc), (0, kb.m)(this, Gc, !0)), this.useInputToRestoreState = ((0, kb.m)(this, Kc), (0, kb.m)(this, Zc, !0)), this.restoreStateInterpolationFactor = ((0, kb.m)(this, zc), (0, kb.m)(this, qc, 0)), this._currentInterpolationFactor = ((0, kb.m)(this, dc), 0), this._viewMatrix = new Tb.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Tb.p(1, 1, 0), this._transformedDirection = new Tb.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new ab.c, this.checkCollisions = !1, this.collisionRadius = new Tb.p(.5, .5, .5), this._previousPosition = Tb.p.Zero(), this._collisionVelocity = Tb.p.Zero(), this._newPosition = Tb.p.Zero(), this._computationVector = Tb.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Tb.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new Tb.n(NaN, NaN), this._onCollisionPositionChange = function(bb, cb) {
              let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              sb ? (Hb.setPosition(cb), Hb.uX && Hb.uX(sb)) : Hb._previousPosition.ssb(Hb._position);
              const kb = Math.cos(Hb.alpha),
                Wb = Math.sin(Hb.alpha),
                ab = Math.cos(Hb.beta);
              let Tb = Math.sin(Hb.beta);
              0 === Tb && (Tb = 1e-4);
              const Ub = Hb._getTargetPosition();
              Hb._computationVector.I5(Hb.radius * kb * Tb, Hb.radius * ab, Hb.radius * Wb * Tb), Ub.addToRef(Hb._computationVector, Hb._newPosition), Hb._position.ssb(Hb._newPosition);
              let Ib = Hb.upVector;
              Hb.allowUpsideDown && Hb.beta < 0 && (Ib = Ib.clone(), Ib = Ib.Of()), Hb._computeViewMatrix(Hb._position, Ub, Ib), Hb._viewMatrix.addAtIndex(12, Hb.targetScreenOffset.x), Hb._viewMatrix.addAtIndex(13, Hb.targetScreenOffset.y), Hb._collisionTriggered = !1
            }, this.mw = Tb.p.Zero(), Ub && this.setTarget(Ub), this.alpha = cb, this.beta = sb, this.radius = Wb, this.getViewMatrix(), this.inputs = new ib(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Zb(this.EY(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.mw = new Tb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Tb.n.Zero()
          }
          _updateCache(bb) {
            bb || super._updateCache(), this._cache.mw.ssb(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.ssb(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const bb = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? bb.addToRef(this._targetBoundingCenter, this.mw) : this.mw.ssb(bb)
            }
            const bb = this._getLockedTargetPosition();
            return bb || this.mw
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Xb.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              ab = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != ab ? this._currentInterpolationFactor = ab : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = zb(bb, this._goalAlpha), this._goalBeta = zb(cb, this._goalBeta), this._goalRadius = zb(sb, this._goalRadius), this._goalTarget.set(zb(kb.x, this._goalTarget.x), zb(kb.y, this._goalTarget.y), zb(kb.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(zb(Wb.x, this._goalTargetScreenOffset.x), zb(Wb.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Ub.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Ub.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Ub.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Ub.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.mw.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(bb, cb) {
            let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Wb = arguments;
            cb = Lb.g.BackCompatCameraNoPreventDefault(Wb), this._useCtrlForPanning = sb, this._panningMouseButton = kb, "boolean" === typeof Wb[0] && (Wb.length > 1 && (this._useCtrlForPanning = Wb[1]), Wb.length > 2 && (this._panningMouseButton = Wb[2])), this.inputs.attachElement(cb), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(bb, cb, sb) {
            const kb = this.invertRotation ? -1 : 1;
            let Wb = bb * this._calculateHandednessMultiplier();
            this.beta < 0 && (Wb *= -1), this.alpha += Wb * kb, this.beta += cb * kb, this.radius -= sb
          }
          _applyPanDelta(bb, cb) {
            const sb = Tb.m.Fm[0].I5(bb, cb, cb);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), sb.multiplyInPlace(this.panningAxis), Tb.p.TransformNormalToRef(sb, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const bb = this.upVector,
                cb = Tb.p.CrossToRef(this._transformedDirection, bb, this._transformedDirection);
              Tb.p.CrossToRef(bb, cb, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.mw);
                Tb.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.mw.ssb(this._transformedDirection)
              } else {
                if (this.parent) {
                  const bb = Tb.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(bb), bb.transposeToRef(bb), Tb.p.TransformCoordinatesToRef(this._transformedDirection, bb, this._transformedDirection)
                }
                this.mw.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let bb = !1;
            this.movement.computeCurrentFrameDeltas();
            const cb = this.movement.rotationDeltaCurrentFrame,
              sb = this.movement.zoomDeltaCurrentFrame,
              kb = this.movement.panDeltaCurrentFrame;
            if (0 === cb.x && 0 === cb.y && 0 === sb && 0 === kb.x && 0 === kb.y || (bb = !0, 0 === cb.x && 0 === cb.y && 0 === sb || this._applyRotationAndZoomDelta(cb.x, cb.y, sb), 0 === kb.x && 0 === kb.y || this._applyPanDelta(kb.x, kb.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), bb = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const cb = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < cb && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < cb && (this.inertialPanningY = 0), bb = !0
            }
            if (bb) this.stopInterpolation();
            else if (this._isInterpolating) {
              let bb = !1;
              const cb = this._scene.Sm().getDeltaTime() / 1e3,
                sb = 1 - Math.pow(2, -cb / this._currentInterpolationFactor),
                kb = zb(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const cb = Tb.m.Fm[0].set(zb(this._goalTarget.x, this.mw.x), zb(this._goalTarget.y, this.mw.y), zb(this._goalTarget.z, this.mw.z));
                Tb.p.LerpToRef(this.target, cb, sb, this.mw), 10 * Tb.p.Distance(this.target, cb) / kb < Xb.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.ssb(cb), this.setTarget(this.target, !1, !0, !0)) : bb = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const cb = Tb.f.RotationAlphaBetaGammaToRef(zb(this._goalAlpha, this.alpha), zb(this._goalBeta, this.beta), 0, Tb.m.Quaternion[0]),
                  kb = Tb.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Tb.m.Quaternion[1]),
                  Wb = Tb.f.SlerpToRef(kb, cb, sb, Tb.m.Quaternion[2]);
                Wb.normalize();
                const ab = Wb.toAlphaBetaGammaToRef(Tb.m.Fm[0]);
                if (this.alpha = ab.x, this.beta = ab.y, Wb.isApprox(cb, Xb.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const bb = cb.toAlphaBetaGammaToRef(Tb.m.Fm[0]);
                  this.alpha = bb.x, this.beta = bb.y
                } else bb = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (kb - this.radius) * sb, Math.abs(kb / this.radius - 1) < Xb.d ? (this._goalRadius = NaN, this.radius = kb) : bb = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const cb = Tb.m.Vector2[0].set(zb(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), zb(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Tb.n.LerpToRef(this.targetScreenOffset, cb, sb, this.targetScreenOffset), Tb.n.Distance(this.targetScreenOffset, cb) < Xb.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.ssb(cb)) : bb = !0
              }
              this._isInterpolating = bb
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Tb.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const bb = this.alpha;
            var cb, sb;
            this.alpha = function(bb) {
              let cb = Math.PI / 2;
              return 0 === bb.x && 0 === bb.z || (cb = Math.acos(bb.x / Math.sqrt(Math.pow(bb.x, 2) + Math.pow(bb.z, 2)))), bb.z < 0 && (cb = 2 * Math.PI - cb), cb
            }(this._computationVector), this.beta = (cb = this._computationVector.y, sb = this.radius, Math.acos(cb / sb));
            const kb = Math.round((bb - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * kb * Math.PI, this._checkLimits()
          }
          setPosition(bb) {
            this._position.equals(bb) || (this._position.ssb(bb), this.rebuildAnglesAndRadius())
          }
          setTarget(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (kb = this.overrideCloneAlphaBetaRadius ?? kb, bb.computeWorldMatrix) cb && bb.PJ ? this._targetBoundingCenter = bb.PJ().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, bb.computeWorldMatrix(), this._targetHost = bb, this.mw = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const cb = bb,
                kb = this._getTargetPosition();
              if (kb && !sb && kb.equals(cb)) return;
              this._targetHost = null, this.mw = cb, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            kb || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const bb = Math.cos(this.alpha),
              cb = Math.sin(this.alpha),
              sb = Math.cos(this.beta);
            let kb = Math.sin(this.beta);
            0 === kb && (kb = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Wb = this._getTargetPosition();
            if (this._computationVector.I5(this.radius * bb * kb, this.radius * sb, this.radius * cb * kb), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Tb.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Wb.addToRef(this._computationVector, this._newPosition), this.EY().collisionsEnabled && this.checkCollisions) {
              const bb = this.EY().collisionCoordinator;
              this._collider || (this._collider = bb.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, bb.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.ssb(this._newPosition);
              let bb = this.upVector;
              this.allowUpsideDown && kb < 0 && (bb = bb.Of()), this._computeViewMatrix(this._position, Wb, bb), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.ssb(Wb), this._viewMatrix
          }
          zoomOn(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            bb = bb || this.EY().meshes;
            const sb = Hb.b.MinMax(bb);
            let kb = this._calculateLowerRadiusFromModelBoundingSphere(sb.min, sb.max);
            if (kb = Math.max(Math.min(kb, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = kb * this.zoomOnFactor, this.mode === Cb.c.ORTHOGRAPHIC_CAMERA) {
              const bb = this.EY().Sm().getAspectRatio(this),
                cb = kb * this.zoomOnFactor / 2;
              this.orthoLeft = -cb * bb, this.orthoRight = cb * bb, this.orthoBottom = -cb, this.orthoTop = cb
            }
            this.focusOn({
              min: sb.min,
              max: sb.max,
              distance: kb
            }, cb)
          }
          focusOn(bb) {
            let cb, sb, kb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === bb.min) {
              const kb = bb || this.EY().meshes;
              cb = Hb.b.MinMax(kb), sb = Tb.p.Distance(cb.min, cb.max)
            } else {
              cb = bb, sb = bb.distance
            }
            this.mw = Hb.b.Center(cb), kb || (this.maxZ = 2 * sb)
          }
          createRigCamera(cb, sb) {
            let kb = 0;
            switch (this.cameraRigMode) {
              case Cb.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Cb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Cb.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Cb.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Cb.c.RIG_MODE_VR:
                kb = this._cameraRigParams.stereoHalfAngle * (0 === sb ? 1 : -1);
                break;
              case Cb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                kb = this._cameraRigParams.stereoHalfAngle * (0 === sb ? -1 : 1)
            }
            const Wb = new bb(cb, this.alpha + kb, this.beta, this.radius, this.mw, this.EY());
            return Wb._cameraRigParams = {}, Wb.isRigCamera = !0, Wb.rigParent = this, Wb.upVector = this.upVector, Wb.mode = this.mode, Wb.orthoLeft = this.orthoLeft, Wb.orthoRight = this.orthoRight, Wb.orthoBottom = this.orthoBottom, Wb.orthoTop = this.orthoTop, Wb
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              cb = this._rigCameras[1];
            switch (bb.beta = cb.beta = this.beta, this.cameraRigMode) {
              case Cb.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Cb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Cb.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Cb.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Cb.c.RIG_MODE_VR:
                bb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, cb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Cb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                bb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, cb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const kb = Tb.p.Distance(bb, cb),
              Wb = this.EY().Sm().getAspectRatio(this),
              ab = Math.tan(this.fov / 2),
              Ub = ab * Wb,
              Ib = .5 * kb * sb,
              Hb = Ib * Math.sqrt(1 + 1 / (Ub * Ub)),
              fb = Ib * Math.sqrt(1 + 1 / (ab * ab));
            return Math.max(Hb, fb)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], Ib = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.C)("target")], mb = [(0, Wb.v)("targetHost")], lb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Yb = [(0, Wb.E)()], hb = [(0, Wb.E)()], Jb = [(0, Wb.E)()], gb = [(0, Wb.E)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], Pb = [(0, Wb.E)()], Db = [(0, Wb.E)()], Eb = [(0, Wb.E)()], Ob = [(0, Wb.E)()], Gb = [(0, Wb.C)()], Kb = [(0, Wb.E)()], qb = [(0, Wb.E)()], db = [(0, Wb.E)()], Ab = [(0, Wb.A)()], wb = [(0, Wb.E)()], rb = [(0, Wb.E)()], ob = [(0, Wb.E)()], (0, kb.j)(bb, null, lb, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialAlphaOffset" in bb,
              get: bb => bb.inertialAlphaOffset
            },
            metadata: ab
          }, null, Rb), (0, kb.j)(bb, null, Vb, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialBetaOffset" in bb,
              get: bb => bb.inertialBetaOffset
            },
            metadata: ab
          }, null, Rb), (0, kb.j)(bb, null, ub, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialRadiusOffset" in bb,
              get: bb => bb.inertialRadiusOffset
            },
            metadata: ab
          }, null, Rb), (0, kb.j)(bb, null, Kb, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningInertia" in bb,
              get: bb => bb.panningInertia
            },
            metadata: ab
          }, null, Rb), (0, kb.j)(bb, null, qb, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomToMouseLocation" in bb,
              get: bb => bb.zoomToMouseLocation
            },
            metadata: ab
          }, null, Rb), (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "alpha" in bb,
              get: bb => bb.alpha,
              set: (bb, cb) => {
                bb.alpha = cb
              }
            },
            metadata: ab
          }, vb, Fb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: bb => "beta" in bb,
              get: bb => bb.beta,
              set: (bb, cb) => {
                bb.beta = cb
              }
            },
            metadata: ab
          }, xb, jb), (0, kb.j)(null, null, Ib, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: bb => "radius" in bb,
              get: bb => bb.radius,
              set: (bb, cb) => {
                bb.radius = cb
              }
            },
            metadata: ab
          }, pb, bc), (0, kb.j)(null, null, fb, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "overrideCloneAlphaBetaRadius" in bb,
              get: bb => bb.overrideCloneAlphaBetaRadius,
              set: (bb, cb) => {
                bb.overrideCloneAlphaBetaRadius = cb
              }
            },
            metadata: ab
          }, cc, sc), (0, kb.j)(null, null, Mb, {
            kind: "field",
            name: "mw",
            static: !1,
            private: !1,
            access: {
              has: bb => "mw" in bb,
              get: bb => bb.mw,
              set: (bb, cb) => {
                bb.mw = cb
              }
            },
            metadata: ab
          }, kc, Wc), (0, kb.j)(null, null, mb, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: bb => "_targetHost" in bb,
              get: bb => bb._targetHost,
              set: (bb, cb) => {
                bb._targetHost = cb
              }
            },
            metadata: ab
          }, ac, Tc), (0, kb.j)(null, null, Yb, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerAlphaLimit" in bb,
              get: bb => bb.lowerAlphaLimit,
              set: (bb, cb) => {
                bb.lowerAlphaLimit = cb
              }
            },
            metadata: ab
          }, Uc, Ic), (0, kb.j)(null, null, hb, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperAlphaLimit" in bb,
              get: bb => bb.upperAlphaLimit,
              set: (bb, cb) => {
                bb.upperAlphaLimit = cb
              }
            },
            metadata: ab
          }, Hc, fc), (0, kb.j)(null, null, Jb, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerBetaLimit" in bb,
              get: bb => bb.lowerBetaLimit,
              set: (bb, cb) => {
                bb.lowerBetaLimit = cb
              }
            },
            metadata: ab
          }, Mc, Xc), (0, kb.j)(null, null, gb, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperBetaLimit" in bb,
              get: bb => bb.upperBetaLimit,
              set: (bb, cb) => {
                bb.upperBetaLimit = cb
              }
            },
            metadata: ab
          }, nc, mc), (0, kb.j)(null, null, Bb, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerRadiusLimit" in bb,
              get: bb => bb.lowerRadiusLimit,
              set: (bb, cb) => {
                bb.lowerRadiusLimit = cb
              }
            },
            metadata: ab
          }, lc, Qc), (0, kb.j)(null, null, tb, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperRadiusLimit" in bb,
              get: bb => bb.upperRadiusLimit,
              set: (bb, cb) => {
                bb.upperRadiusLimit = cb
              }
            },
            metadata: ab
          }, ec, Cc), (0, kb.j)(null, null, yb, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerTargetYLimit" in bb,
              get: bb => bb.lowerTargetYLimit,
              set: (bb, cb) => {
                bb.lowerTargetYLimit = cb
              }
            },
            metadata: ab
          }, Nc, Vc), (0, kb.j)(null, null, Pb, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningX" in bb,
              get: bb => bb.inertialPanningX,
              set: (bb, cb) => {
                bb.inertialPanningX = cb
              }
            },
            metadata: ab
          }, Lc, uc), (0, kb.j)(null, null, Db, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningY" in bb,
              get: bb => bb.inertialPanningY,
              set: (bb, cb) => {
                bb.inertialPanningY = cb
              }
            },
            metadata: ab
          }, Yc, hc), (0, kb.j)(null, null, Eb, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchToPanMaxDistance" in bb,
              get: bb => bb.pinchToPanMaxDistance,
              set: (bb, cb) => {
                bb.pinchToPanMaxDistance = cb
              }
            },
            metadata: ab
          }, Jc, gc), (0, kb.j)(null, null, Ob, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningDistanceLimit" in bb,
              get: bb => bb.panningDistanceLimit,
              set: (bb, cb) => {
                bb.panningDistanceLimit = cb
              }
            },
            metadata: ab
          }, Bc, tc), (0, kb.j)(null, null, Gb, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningOriginTarget" in bb,
              get: bb => bb.panningOriginTarget,
              set: (bb, cb) => {
                bb.panningOriginTarget = cb
              }
            },
            metadata: ab
          }, yc, Pc), (0, kb.j)(null, null, db, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomOnFactor" in bb,
              get: bb => bb.zoomOnFactor,
              set: (bb, cb) => {
                bb.zoomOnFactor = cb
              }
            },
            metadata: ab
          }, Dc, Ec), (0, kb.j)(null, null, Ab, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "targetScreenOffset" in bb,
              get: bb => bb.targetScreenOffset,
              set: (bb, cb) => {
                bb.targetScreenOffset = cb
              }
            },
            metadata: ab
          }, ic, Oc), (0, kb.j)(null, null, wb, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: bb => "allowUpsideDown" in bb,
              get: bb => bb.allowUpsideDown,
              set: (bb, cb) => {
                bb.allowUpsideDown = cb
              }
            },
            metadata: ab
          }, Gc, Kc), (0, kb.j)(null, null, rb, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: bb => "useInputToRestoreState" in bb,
              get: bb => bb.useInputToRestoreState,
              set: (bb, cb) => {
                bb.useInputToRestoreState = cb
              }
            },
            metadata: ab
          }, Zc, zc), (0, kb.j)(null, null, ob, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "restoreStateInterpolationFactor" in bb,
              get: bb => bb.restoreStateInterpolationFactor,
              set: (bb, cb) => {
                bb.restoreStateInterpolationFactor = cb
              }
            },
            metadata: ab
          }, qc, dc), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      db = !1;
    db || (db = !0, Ib.c.AddNodeConstructor("ArcRotateCamera", ((bb, cb) => () => new qb(bb, 0, 0, 1, Tb.p.Zero(), cb))), (0, Ob.h)("BABYLON.ArcRotateCamera", qb))
  },
  39695: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb.b
    });
    var kb = sb(39700);
    (0, kb.d)()
  },
  39700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      d: () => Xb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(36830),
      Ub = sb(39706),
      Ib = sb(39667),
      Hb = sb(36698);
    let fb = (() => {
        var bb;
        let cb, sb, Ib = Ub.b,
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        return bb = class extends Ib {
          constructor(bb, cb, sb, Wb) {
            super(bb, sb, Wb), this.groundColor = (0, kb.m)(this, Hb, new Tb.e(0, 0, 0)), this.direction = ((0, kb.m)(this, fb), (0, kb.m)(this, Mb, void 0)), (0, kb.m)(this, Xb), this.direction = cb || ab.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = ab.p.Normalize(bb.subtract(ab.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sb.x, sb.y, sb.z, 0, cb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cb), this
          }
          transferToNodeMaterialEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return bb.setFloat3(cb, sb.x, sb.y, sb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ab.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ub.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, cb) {
            bb["HEMILIGHT" + cb] = !0
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.o)()], sb = [(0, Wb.C)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, cb) => {
                bb.groundColor = cb
              }
            },
            metadata: ab
          }, Hb, fb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, cb) => {
                bb.direction = cb
              }
            },
            metadata: ab
          }, Mb, Xb), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Mb = !1;

    function Xb() {
      Mb || (Mb = !0, Ib.c.AddNodeConstructor("Light_Type_3", ((bb, cb) => () => new fb(bb, ab.p.Zero(), cb))), (0, Hb.h)("BABYLON.HemisphericLight", fb))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 250;
export const ids = [250];
export const modules = {
  40186: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => ob
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36431),
      Eb = Ub(36401),
      Yb = Ub(36436),
      Bb = Ub(39314),
      eb = Ub(39522),
      vb = Ub(39269),
      Lb = Ub(39010),
      Pb = Ub(36405);
    class Xb {
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
        const ab = this._attachedCamera.oN();
        this._onPrePointerObservableObserver = ab.onPrePointerObservable.add((bb => {
          bb.type !== vb.c.POINTERDOWN ? bb.type === vb.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const bb = Lb.e.Now;
          let ab = 0;
          null != this._lastFrameTime && (ab = bb - this._lastFrameTime), this._lastFrameTime = bb, this._applyUserInteraction();
          const Ub = bb - this._lastInteractionTime - this._idleRotationWaitTime,
            Ab = Math.max(Math.min(Ub / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Ab, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ab / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.oN();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(bb) {
        this._lastInteractionTime = bb ?? Lb.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Pb.e
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Lb.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Ub(40192);
    class jb {
      constructor() {
        this._easingMode = jb.EASINGMODE_EASEIN
      }
      setEasingMode(bb) {
        const ab = Math.min(Math.max(bb, 0), 2);
        this._easingMode = ab
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(bb) {
        throw new Error("You must implement this method")
      }
      ease(bb) {
        switch (this._easingMode) {
          case jb.EASINGMODE_EASEIN:
            return this.easeInCore(bb);
          case jb.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - bb)
        }
        return bb >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - bb))) + .5 : .5 * this.easeInCore(2 * bb)
      }
    }
    jb.EASINGMODE_EASEIN = 0, jb.EASINGMODE_EASEOUT = 1, jb.EASINGMODE_EASEINOUT = 2;
    var Rb = Ub(40196);
    class kb {
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
        const ab = this._attachedCamera;
        ab && (bb ? this._onMeshTargetChangedObserver = ab.onMeshTargetChangedObservable.add((bb => {
          if (bb && (bb.computeWorldMatrix(!0), bb.DH)) {
            const ab = bb.DH().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * ab, this.upperRadiusTransitionRange = .05 * ab
          }
        })) : this._onMeshTargetChangedObserver && ab.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (kb.EasingFunction.setEasingMode(kb.EasingMode), this._radiusBounceTransition = Rb.e.CreateAnimation("radius", Rb.e.ANIMATIONTYPE_FLOAT, 60, kb.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const ab = Rb.e.TransitionTo("radius", this._attachedCamera.radius + bb, this._attachedCamera, this._attachedCamera.oN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        ab && this._animatables.push(ab)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    kb.EasingFunction = new class extends jb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = bb
      }
      easeInCore(bb) {
        const ab = Math.max(0, this.amplitude);
        return Math.pow(bb, 3) - bb * ab * Math.sin(3.141592653589793 * bb)
      }
    }(.3), kb.EasingMode = jb.EASINGMODE_EASEOUT;
    class yb {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Tb.b, this._mode = yb.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const ab = this._attachedCamera.oN();
        yb.EasingFunction.setEasingMode(yb.EasingMode), this._onPrePointerObservableObserver = ab.onPrePointerObservable.add((bb => {
          bb.type !== vb.c.POINTERDOWN ? bb.type === vb.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = bb.onMeshTargetChangedObservable.add((bb => {
          bb && bb.DH && this.zoomOnMesh(bb, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = bb.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const bb = this._attachedCamera.oN();
        this._onPrePointerObservableObserver && bb.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const Ab = bb.DH().boundingBox;
        this.zoomOnBoundingInfo(Ab.minimumWorld, Ab.maximumWorld, ab, Ub)
      }
      zoomOnMeshHierarchy(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        bb.computeWorldMatrix(!0);
        const Ab = bb.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Ab.min, Ab.max, ab, Ub)
      }
      zoomOnMeshesHierarchy(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ab = new Eb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Mb = new Eb.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Tb = 0; Tb < bb.length; Tb++) {
          const ab = bb[Tb].getHierarchyBoundingVectors(!0);
          Eb.m.CheckExtends(ab.min, Ab, Mb), Eb.m.CheckExtends(ab.max, Ab, Mb)
        }
        this.zoomOnBoundingInfo(Ab, Mb, ab, Ub)
      }
      zoomOnBoundingInfo(bb, ab) {
        let Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Tb = bb.y,
          Yb = Tb + (ab.y - Tb) * this._positionScale,
          Bb = ab.subtract(bb).scale(.5);
        if (!isFinite(Yb)) return !1;
        if (Ab) Ub = new Eb.m(0, Yb, 0);
        else {
          const ab = bb.add(Bb);
          Ub = new Eb.m(ab.x, Yb, ab.z)
        }
        this._vectorTransition || (this._vectorTransition = Rb.e.CreateAnimation("target", Rb.e.ANIMATIONTYPE_VECTOR3, 60, yb.EasingFunction)), this._betaIsAnimating = !0;
        let eb = Rb.e.TransitionTo("target", Ub, this._attachedCamera, this._attachedCamera.oN(), 60, this._vectorTransition, this._framingTime);
        eb && this._animatables.push(eb);
        let vb = 0;
        if (this._mode === yb.FitFrustumSidesMode) {
          const Ub = this._calculateLowerRadiusFromModelBoundingSphere(bb, ab);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Bb.length() + this._attachedCamera.minZ), vb = Ub
        } else this._mode === yb.IgnoreBoundsSizeMode && (vb = this._calculateLowerRadiusFromModelBoundingSphere(bb, ab), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const Ub = ab.subtract(bb).length();
          this._attachedCamera.panningSensibility = 5e3 / Ub, this._attachedCamera.wheelPrecision = 100 / vb
        }
        return this._radiusTransition || (this._radiusTransition = Rb.e.CreateAnimation("radius", Rb.e.ANIMATIONTYPE_FLOAT, 60, yb.EasingFunction)), eb = Rb.e.TransitionTo("radius", vb, this._attachedCamera, this._attachedCamera.oN(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Mb && Mb(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), eb && this._animatables.push(eb), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(bb, ab) {
        const Ub = this._attachedCamera;
        if (!Ub) return 0;
        let Ab = Ub._calculateLowerRadiusFromModelBoundingSphere(bb, ab, this._radiusScale);
        return Ub.lowerRadiusLimit && this._mode === yb.IgnoreBoundsSizeMode && (Ab = Ab < Ub.lowerRadiusLimit ? Ub.lowerRadiusLimit : Ab), Ub.upperRadiusLimit && (Ab = Ab > Ub.upperRadiusLimit ? Ub.upperRadiusLimit : Ab), Ab
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const bb = Lb.e.Now - this._lastInteractionTime,
          ab = .5 * Math.PI - this._defaultElevation,
          Ub = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > Ub && bb >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Rb.e.CreateAnimation("beta", Rb.e.ANIMATIONTYPE_FLOAT, 60, yb.EasingFunction));
          const bb = Rb.e.TransitionTo("beta", ab, this._attachedCamera, this._attachedCamera.oN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          bb && this._animatables.push(bb)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Lb.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    yb.EasingFunction = new class extends jb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = bb
      }
      easeInCore(bb) {
        return this.exponent <= 0 ? bb : (Math.exp(this.exponent * bb) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, yb.EasingMode = jb.EASINGMODE_EASEINOUT, yb.IgnoreBoundsSizeMode = 0, yb.FitFrustumSidesMode = 1;
    var Zb = Ub(39310),
      Db = Ub(39307),
      zb = Ub(39344),
      xb = Ub(39195);
    let ib = (() => {
        var bb;
        let ab, Ub = [],
          Tb = [];
        return bb = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Ab.k)(this, Ub, [0, 1, 2]), this._pointerInput = (0, Ab.k)(this, Tb)
          }
          attachControl(bb) {
            bb = xb.h.BackCompatCameraNoPreventDefault(arguments);
            const ab = this.camera.vj(),
              Ub = ab.getInputElement();
            let Ab = 0,
              Mb = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Tb => {
              const Eb = Tb.event,
                Yb = "touch" === Eb.pointerType;
              if (Tb.type !== vb.c.POINTERMOVE && -1 === this.buttons.indexOf(Eb.button)) return;
              const Bb = Eb.target;
              if (this._altKey = Eb.altKey, this._ctrlKey = Eb.ctrlKey, this._metaKey = Eb.metaKey, this._shiftKey = Eb.shiftKey, this._buttonsPressed = Eb.buttons, ab.isPointerLock) {
                const bb = Eb.movementX,
                  ab = Eb.movementY;
                this.onTouch(null, bb, ab), this._pointA = null, this._pointB = null
              } else {
                if (Tb.type !== vb.c.POINTERDOWN && Tb.type !== vb.c.POINTERDOUBLETAP && Yb && this._pointA?.pointerId !== Eb.pointerId && this._pointB?.pointerId !== Eb.pointerId) return;
                if (Tb.type !== vb.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Yb)
                  if (Tb.type === vb.c.POINTERDOUBLETAP) this.onDoubleTap(Eb.pointerType, Eb);
                  else if (Tb.type !== vb.c.POINTERUP || this._currentMousePointerIdDown !== Eb.pointerId && !Yb) {
                  if (Tb.type === vb.c.POINTERMOVE)
                    if (bb || Eb.preventDefault(), this._pointA && null === this._pointB) {
                      const bb = Eb.clientX - this._pointA.x,
                        ab = Eb.clientY - this._pointA.y;
                      this._pointA.x = Eb.clientX, this._pointA.y = Eb.clientY, this.onTouch(this._pointA, bb, ab)
                    } else if (this._pointA && this._pointB) {
                    const bb = this._pointA.pointerId === Eb.pointerId ? this._pointA : this._pointB;
                    bb.x = Eb.clientX, bb.y = Eb.clientY;
                    const ab = this._pointA.x - this._pointB.x,
                      Ub = this._pointA.y - this._pointB.y,
                      Yb = ab * ab + Ub * Ub,
                      Bb = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Eb.pointerId,
                        type: Tb.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Ab, Yb, Mb, Bb), Mb = Bb, Ab = Yb
                  }
                } else {
                  try {
                    Bb?.releasePointerCapture(Eb.pointerId)
                  } catch (eb) {}
                  Yb || (this._pointB = null), ab._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Eb.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Eb.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Ab || Mb) && (this.onMultiTouch(this._pointA, this._pointB, Ab, 0, Mb, null), Ab = 0, Mb = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Eb), bb || Eb.preventDefault()
                } else {
                  try {
                    Bb?.setPointerCapture(Eb.pointerId)
                  } catch (eb) {}
                  if (null === this._pointA) this._pointA = {
                    x: Eb.clientX,
                    y: Eb.clientY,
                    pointerId: Eb.pointerId,
                    type: Eb.pointerType,
                    button: Eb.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Eb.clientX,
                      y: Eb.clientY,
                      pointerId: Eb.pointerId,
                      type: Eb.pointerType,
                      button: Eb.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Yb || (this._currentMousePointerIdDown = Eb.pointerId), this.onButtonDown(Eb), bb || (Eb.preventDefault(), Ub && Ub.focus())
                }
              }
            }, this._observer = this.camera.oN()._inputManager._addCameraPointerObserver(this._pointerInput, vb.c.POINTERDOWN | vb.c.POINTERUP | vb.c.POINTERMOVE | vb.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Ab = 0, Mb = null, this.onLostFocus()
            }, this._contextMenuBind = bb => this.onContextMenu(bb), Ub && Ub.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Tb = this.camera.oN().vj().getHostWindow();
            Tb && xb.h.RegisterTopRootEvents(Tb, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const bb = this.camera.oN().vj().getHostWindow();
              bb && xb.h.UnregisterTopRootEvents(bb, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.oN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const bb = this.camera.oN().vj().getInputElement();
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
          onDoubleTap(bb, ab) {}
          onTouch(bb, ab, Ub) {}
          onMultiTouch(bb, ab, Ub, Ab, Mb, Tb) {}
          onContextMenu(bb) {
            bb.preventDefault()
          }
          onButtonDown(bb) {}
          onButtonUp(bb) {}
          onLostFocus() {}
        }, (() => {
          const Eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ab = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, ab) => {
                bb.buttons = ab
              }
            },
            metadata: Eb
          }, Ub, Tb), Eb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Eb
          })
        })(), bb
      })(),
      fb = (() => {
        var bb;
        let ab, Ub, Tb, Eb = ib,
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        return bb = class extends Eb {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Ab.k)(this, Yb, !0), this.multiTouchPanning = ((0, Ab.k)(this, Bb), (0, Ab.k)(this, eb, !0)), this.multiTouchPanAndZoom = ((0, Ab.k)(this, vb), (0, Ab.k)(this, Lb, !0)), this._isPinching = ((0, Ab.k)(this, Pb), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(bb, ab) {}
          _computeMultiTouchPanning(bb, ab) {}
          onMultiTouch(bb, ab, Ub, Ab, Mb, Tb) {
            0 === Ub && null === Mb || 0 === Ab && null === Tb || (this.multiTouchPanAndZoom ? (this._computePinchZoom(Ub, Ab), this._computeMultiTouchPanning(Mb, Tb)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(Ub, Ab), this._isPinching = !0) : this._computeMultiTouchPanning(Mb, Tb)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Mb, Tb) : this.pinchZoom && this._computePinchZoom(Ub, Ab))
          }
          onButtonUp(bb) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Eb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchZoom" in bb,
              get: bb => bb.pinchZoom,
              set: (bb, ab) => {
                bb.pinchZoom = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanning" in bb,
              get: bb => bb.multiTouchPanning,
              set: (bb, ab) => {
                bb.multiTouchPanning = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, Ab.h)(null, null, Tb, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "multiTouchPanAndZoom" in bb,
              get: bb => bb.multiTouchPanAndZoom,
              set: (bb, ab) => {
                bb.multiTouchPanAndZoom = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), Xb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          })
        })(), bb
      })(),
      mb = (() => {
        var bb;
        let ab, Ub, Tb, Eb, Yb, Bb, eb, vb = fb,
          Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [],
          yb = [],
          Zb = [],
          Db = [],
          zb = [],
          xb = [],
          ib = [],
          mb = [],
          pb = [];
        return bb = class extends vb {
          constructor() {
            super(...arguments), this.buttons = (0, Ab.k)(this, Lb, [0, 1, 2]), this.angularSensibilityX = ((0, Ab.k)(this, Pb), (0, Ab.k)(this, Xb, 1e3)), this.angularSensibilityY = ((0, Ab.k)(this, jb), (0, Ab.k)(this, Rb, 1e3)), this.pinchPrecision = ((0, Ab.k)(this, kb), (0, Ab.k)(this, yb, 12)), this.pinchDeltaPercentage = ((0, Ab.k)(this, Zb), (0, Ab.k)(this, Db, 0)), this.useNaturalPinchZoom = ((0, Ab.k)(this, zb), (0, Ab.k)(this, xb, !1)), this.panningSensibility = ((0, Ab.k)(this, ib), (0, Ab.k)(this, mb, 1e3)), this.pinchInwards = ((0, Ab.k)(this, pb), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(bb, ab) {
            if (bb && ab) {
              const Ub = ab.x - bb.x,
                Ab = ab.y - bb.y,
                Mb = this.camera.movement.input.getEntry("pointer", "pan"),
                Tb = Mb?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Tb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Ub * Tb, this.camera.movement.panAccumulatedPixels.y += Ab * Tb)
            }
          }
          _computePinchZoom(ab, Ub) {
            const Ab = this.camera.radius || bb.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Ab * Math.sqrt(ab) / Math.sqrt(Ub);
            else if (this.pinchDeltaPercentage) {
              const bb = .001 * (Ub - ab) * Ab * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            } else {
              const bb = (Ub - ab) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += bb
            }
          }
          onTouch(bb, ab, Ub) {
            const Ab = this._activeEntry ?? (this.camera.vj().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Ab)
              if ("pan" === Ab.interaction) {
                const bb = Ab.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== bb && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ab * bb, this.camera.movement.panAccumulatedPixels.y += Ub * bb)
              } else if ("rotate" === Ab.interaction) {
              const bb = Ab.hK ?? Ab.sensitivity ?? 1 / this.angularSensibilityX,
                Mb = Ab.rK ?? Ab.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -ab * bb, this.camera.movement.rotationAccumulatedPixels.y += -Ub * Mb
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(bb, ab, Ub, Ab, Mb, Tb) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Ab) - Math.sqrt(Ub)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(bb, ab, Ub, Ab, Mb, Tb)
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
          const fb = "function" === typeof Symbol && Symbol.metadata ? Object.create(vb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], Eb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: bb => "buttons" in bb,
              get: bb => bb.buttons,
              set: (bb, ab) => {
                bb.buttons = ab
              }
            },
            metadata: fb
          }, Lb, Pb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityX" in bb,
              get: bb => bb.angularSensibilityX,
              set: (bb, ab) => {
                bb.angularSensibilityX = ab
              }
            },
            metadata: fb
          }, Xb, jb), (0, Ab.h)(null, null, Tb, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: bb => "angularSensibilityY" in bb,
              get: bb => bb.angularSensibilityY,
              set: (bb, ab) => {
                bb.angularSensibilityY = ab
              }
            },
            metadata: fb
          }, Rb, kb), (0, Ab.h)(null, null, Eb, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchPrecision" in bb,
              get: bb => bb.pinchPrecision,
              set: (bb, ab) => {
                bb.pinchPrecision = ab
              }
            },
            metadata: fb
          }, yb, Zb), (0, Ab.h)(null, null, Yb, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchDeltaPercentage" in bb,
              get: bb => bb.pinchDeltaPercentage,
              set: (bb, ab) => {
                bb.pinchDeltaPercentage = ab
              }
            },
            metadata: fb
          }, Db, zb), (0, Ab.h)(null, null, Bb, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: bb => "useNaturalPinchZoom" in bb,
              get: bb => bb.useNaturalPinchZoom,
              set: (bb, ab) => {
                bb.useNaturalPinchZoom = ab
              }
            },
            metadata: fb
          }, xb, ib), (0, Ab.h)(null, null, eb, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningSensibility" in bb,
              get: bb => bb.panningSensibility,
              set: (bb, ab) => {
                bb.panningSensibility = ab
              }
            },
            metadata: fb
          }, mb, pb), fb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fb
          })
        })(), bb.MinimumRadiusForPinch = .001, bb
      })();
    zb.b.ArcRotateCameraPointersInput = mb;
    var pb = Ub(39275);
    let Nb = (() => {
      var bb;
      let ab, Ub, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb = [],
        kb = [],
        yb = [],
        Zb = [],
        Db = [],
        zb = [],
        ib = [],
        fb = [],
        mb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [];
      return bb = class {
        constructor() {
          this.camera = (0, Ab.k)(this, Rb), this.keysUp = (0, Ab.k)(this, kb, [38]), this.keysDown = ((0, Ab.k)(this, yb), (0, Ab.k)(this, Zb, [40])), this.keysLeft = ((0, Ab.k)(this, Db), (0, Ab.k)(this, zb, [37])), this.keysRight = ((0, Ab.k)(this, ib), (0, Ab.k)(this, fb, [39])), this.keysReset = ((0, Ab.k)(this, mb), (0, Ab.k)(this, Nb, [220])), this.keysZoomIn = ((0, Ab.k)(this, Wb), (0, Ab.k)(this, Hb, [187, 107])), this.keysZoomOut = ((0, Ab.k)(this, Ib), (0, Ab.k)(this, db, [189, 109])), this.panningSensibility = ((0, Ab.k)(this, Fb), (0, Ab.k)(this, hb, 50)), this.zoomingSensibility = ((0, Ab.k)(this, Gb), (0, Ab.k)(this, Qb, 25)), this.angularSpeed = ((0, Ab.k)(this, qb), (0, Ab.k)(this, ub, .01)), this._useAltToZoom = ((0, Ab.k)(this, rb), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Eb.l, this._panDirection = new Eb.l
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
            ab = bb.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && ab ? bb.inputMap.splice(bb.inputMap.indexOf(ab), 1) : this._useAltToZoom && !ab && bb.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(bb) {
          bb = xb.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.oN(), this._engine = this._scene.vj(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ab => {
            const Ub = ab.event;
            if (!Ub.metaKey)
              if (ab.type === pb.b.KEYDOWN) {
                if (this._ctrlPressed = Ub.ctrlKey, this._altPressed = Ub.altKey, -1 !== this.keysUp.indexOf(Ub.keyCode) || -1 !== this.keysDown.indexOf(Ub.keyCode) || -1 !== this.keysLeft.indexOf(Ub.keyCode) || -1 !== this.keysRight.indexOf(Ub.keyCode) || -1 !== this.keysReset.indexOf(Ub.keyCode) || -1 !== this.keysZoomIn.indexOf(Ub.keyCode) || -1 !== this.keysZoomOut.indexOf(Ub.keyCode)) {
                  -1 === this._keys.indexOf(Ub.keyCode) && this._keys.push(Ub.keyCode), Ub.preventDefault && (bb || Ub.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(Ub.keyCode) || -1 !== this.keysDown.indexOf(Ub.keyCode) || -1 !== this.keysLeft.indexOf(Ub.keyCode) || -1 !== this.keysRight.indexOf(Ub.keyCode) || -1 !== this.keysReset.indexOf(Ub.keyCode) || -1 !== this.keysZoomIn.indexOf(Ub.keyCode) || -1 !== this.keysZoomOut.indexOf(Ub.keyCode)) {
              const ab = this._keys.indexOf(Ub.keyCode);
              ab >= 0 && this._keys.splice(ab, 1), Ub.preventDefault && (bb || Ub.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const bb = this.camera,
              ab = bb.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const Ub = this._rotateDirection.set(0, 0),
              Ab = this._panDirection.set(0, 0);
            let Mb = 0,
              Tb = 0;
            for (let Eb = 0; Eb < this._keys.length; Eb++) {
              const Yb = this._keys[Eb];
              if (this._keyboardConditions.key = Yb, -1 === this.keysReset.indexOf(Yb)) {
                const bb = ab.resolveInteraction("keyboard", this._keyboardConditions);
                if (bb)
                  if ("pan" === bb.interaction) Tb = Math.max(Tb, bb.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Yb) ? Ab.x -= 1 : -1 !== this.keysRight.indexOf(Yb) ? Ab.x += 1 : -1 !== this.keysUp.indexOf(Yb) ? Ab.y += 1 : -1 !== this.keysDown.indexOf(Yb) && (Ab.y -= 1);
                  else if ("zoom" === bb.interaction) {
                  const Ub = bb.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Yb) || -1 !== this.keysZoomIn.indexOf(Yb) ? ab.handlers.zoom(Ub) : -1 === this.keysDown.indexOf(Yb) && -1 === this.keysZoomOut.indexOf(Yb) || ab.handlers.zoom(-Ub)
                } else "rotate" === bb.interaction && (Mb = Math.max(Mb, bb.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Yb) ? Ub.x -= 1 : -1 !== this.keysRight.indexOf(Yb) ? Ub.x += 1 : -1 !== this.keysUp.indexOf(Yb) ? Ub.y -= 1 : -1 !== this.keysDown.indexOf(Yb) && (Ub.y += 1))
              } - 1 !== this.keysReset.indexOf(Yb) && bb.useInputToRestoreState && bb.restoreState()
            }
            0 === Ub.x && 0 === Ub.y || (Ub.normalize().scaleInPlace(Mb), ab.handlers.rotate(Ub.x, Ub.y)), 0 === Ab.x && 0 === Ab.y || (Ab.normalize().scaleInPlace(Tb), ab.handlers.pan(Ab.x, Ab.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], Xb = [(0, Mb.K)()], jb = [(0, Mb.K)()], (0, Ab.h)(bb, null, jb, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAltToZoom" in bb,
            get: bb => bb.useAltToZoom
          },
          metadata: Eb
        }, null, Rb), (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysUp" in bb,
            get: bb => bb.keysUp,
            set: (bb, ab) => {
              bb.keysUp = ab
            }
          },
          metadata: Eb
        }, kb, yb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysDown" in bb,
            get: bb => bb.keysDown,
            set: (bb, ab) => {
              bb.keysDown = ab
            }
          },
          metadata: Eb
        }, Zb, Db), (0, Ab.h)(null, null, Tb, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysLeft" in bb,
            get: bb => bb.keysLeft,
            set: (bb, ab) => {
              bb.keysLeft = ab
            }
          },
          metadata: Eb
        }, zb, ib), (0, Ab.h)(null, null, Yb, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysRight" in bb,
            get: bb => bb.keysRight,
            set: (bb, ab) => {
              bb.keysRight = ab
            }
          },
          metadata: Eb
        }, fb, mb), (0, Ab.h)(null, null, Bb, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysReset" in bb,
            get: bb => bb.keysReset,
            set: (bb, ab) => {
              bb.keysReset = ab
            }
          },
          metadata: Eb
        }, Nb, Wb), (0, Ab.h)(null, null, eb, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomIn" in bb,
            get: bb => bb.keysZoomIn,
            set: (bb, ab) => {
              bb.keysZoomIn = ab
            }
          },
          metadata: Eb
        }, Hb, Ib), (0, Ab.h)(null, null, vb, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: bb => "keysZoomOut" in bb,
            get: bb => bb.keysZoomOut,
            set: (bb, ab) => {
              bb.keysZoomOut = ab
            }
          },
          metadata: Eb
        }, db, Fb), (0, Ab.h)(null, null, Lb, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "panningSensibility" in bb,
            get: bb => bb.panningSensibility,
            set: (bb, ab) => {
              bb.panningSensibility = ab
            }
          },
          metadata: Eb
        }, hb, Gb), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomingSensibility" in bb,
            get: bb => bb.zoomingSensibility,
            set: (bb, ab) => {
              bb.zoomingSensibility = ab
            }
          },
          metadata: Eb
        }, Qb, qb), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: bb => "angularSpeed" in bb,
            get: bb => bb.angularSpeed,
            set: (bb, ab) => {
              bb.angularSpeed = ab
            }
          },
          metadata: Eb
        }, ub, rb), Eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eb
        })
      })(), bb
    })();
    zb.b.ArcRotateCameraKeyboardMoveInput = Nb;
    var Wb = Ub(37122),
      Hb = Ub(39280);
    let Ib = (() => {
      var bb;
      let ab, Ub, Tb, Bb = [],
        eb = [],
        Lb = [],
        Xb = [],
        jb = [],
        Rb = [];
      return bb = class {
        constructor() {
          this.wheelPrecision = (0, Ab.k)(this, Bb, 3), this.zoomToMouseLocation = ((0, Ab.k)(this, eb), (0, Ab.k)(this, Lb, !1)), this.wheelDeltaPercentage = ((0, Ab.k)(this, Xb), (0, Ab.k)(this, jb, 0)), this.customComputeDeltaFromMouseWheel = ((0, Ab.k)(this, Rb), null), this._viewOffset = new Eb.m(0, 0, 0), this._globalOffset = new Eb.m(0, 0, 0), this._inertialPanning = Eb.m.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(bb, ab) {
          let Ub;
          const Ab = .01 * bb * this.wheelDeltaPercentage * ab;
          return Ub = bb > 0 ? Ab / (1 + this.wheelDeltaPercentage) : Ab * (1 + this.wheelDeltaPercentage), Ub
        }
        attachControl(bb) {
          bb = xb.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = ab => {
            if (ab.type !== vb.c.POINTERWHEEL) return;
            const Ub = ab.event;
            let Ab;
            const Mb = Ub.deltaMode === Hb.e.DOM_DELTA_LINE ? 40 : 1,
              Tb = -Ub.deltaY * Mb;
            if (this.customComputeDeltaFromMouseWheel) Ab = this.customComputeDeltaFromMouseWheel(Tb, this, Ub);
            else if (this.wheelDeltaPercentage) {
              if (Ab = this._computeDeltaFromMouseWheelLegacyEvent(Tb, this.camera.radius), Ab > 0) {
                const bb = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let ab = this.camera.radius,
                  Ub = bb + Ab;
                for (let Ab = 0; Ab < 20 && !(ab <= Ub) && !(Math.abs(Ub * this.camera.inertia) < .001); Ab++) ab -= Ub, Ub *= this.camera.inertia;
                ab = (0, Yb.Clamp)(ab, 0, Number.MAX_VALUE), Ab = this._computeDeltaFromMouseWheelLegacyEvent(Tb, ab)
              }
            } else {
              const bb = this.camera.movement.input.getEntry("wheel", "zoom");
              Ab = Tb * (bb?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Ab && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Ab)) : this.camera.movement.zoomAccumulatedPixels += Ab), Ub.preventDefault && (bb || Ub.preventDefault())
          }, this._observer = this.camera.oN()._inputManager._addCameraPointerObserver(this._wheel, vb.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.B3(0)
        }
        detachControl() {
          this._observer && (this.camera.oN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const bb = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(bb.inertialAlphaOffset) + Math.abs(bb.inertialBetaOffset) + Math.abs(bb.inertialRadiusOffset)) {
            this._updateHitPlane(), bb.target.addInPlace(this._inertialPanning), bb.radius -= this._zoomToMouseRadiusOffset;
            const ab = bb.movement.getFrameIndependentDecay(bb.inertia);
            this._inertialPanning.scaleInPlace(ab), this._zoomToMouseRadiusOffset *= ab, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Pb.e && (this._zoomToMouseRadiusOffset = 0)
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
            ab = bb.target.subtract(bb.position);
          this._hitPlane = Wb.b.FromPositionAndNormal(bb.target, ab)
        }
        _getPosition() {
          const bb = this.camera,
            ab = bb.oN(),
            Ub = ab.createPickingRay(ab.pointerX, ab.pointerY, Eb.b.Identity(), bb, !1);
          0 === bb.targetScreenOffset.x && 0 === bb.targetScreenOffset.y || (this._viewOffset.set(bb.targetScreenOffset.x, bb.targetScreenOffset.y, 0), bb.getViewMatrix().invertToRef(bb._cameraTransformMatrix), this._globalOffset = Eb.m.TransformNormal(this._viewOffset, bb._cameraTransformMatrix), Ub.origin.addInPlace(this._globalOffset));
          let Ab = 0;
          return this._hitPlane && (Ab = Ub.intersectsPlane(this._hitPlane) ?? 0), Ub.origin.addInPlace(Ub.direction.scaleInPlace(Ab))
        }
        _zoomToMouse(bb) {
          const ab = this.camera,
            Ub = 1 - ab.inertia,
            Ab = ab.movement.getFrameIndependentInputScale(ab.inertia);
          if (ab.lowerRadiusLimit) {
            const Mb = ab.lowerRadiusLimit ?? 0;
            ab.radius - (this._zoomToMouseRadiusOffset + bb * Ab) / Ub < Mb && (bb = ((ab.radius - Mb) * Ub - this._zoomToMouseRadiusOffset) / Ab)
          }
          if (ab.upperRadiusLimit) {
            const Mb = ab.upperRadiusLimit ?? 0;
            ab.radius - (this._zoomToMouseRadiusOffset + bb * Ab) / Ub > Mb && (bb = ((ab.radius - Mb) * Ub - this._zoomToMouseRadiusOffset) / Ab)
          }
          const Mb = bb / Ub / ab.radius,
            Tb = this._getPosition(),
            Yb = Eb.j.Pj[6];
          Tb.subtractToRef(ab.target, Yb), Yb.scaleInPlace(Mb), Yb.scaleInPlace(Ub), Yb.scaleInPlace(Ab), this._inertialPanning.addInPlace(Yb), this._zoomToMouseRadiusOffset += bb * Ab
        }
        _zeroIfClose(bb) {
          Math.abs(bb.x) < Pb.e && (bb.x = 0), Math.abs(bb.y) < Pb.e && (bb.y = 0), Math.abs(bb.z) < Pb.e && (bb.z = 0)
        }
      }, (() => {
        const Eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelPrecision" in bb,
            get: bb => bb.wheelPrecision,
            set: (bb, ab) => {
              bb.wheelPrecision = ab
            }
          },
          metadata: Eb
        }, Bb, eb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: bb => "zoomToMouseLocation" in bb,
            get: bb => bb.zoomToMouseLocation,
            set: (bb, ab) => {
              bb.zoomToMouseLocation = ab
            }
          },
          metadata: Eb
        }, Lb, Xb), (0, Ab.h)(null, null, Tb, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: bb => "wheelDeltaPercentage" in bb,
            get: bb => bb.wheelDeltaPercentage,
            set: (bb, ab) => {
              bb.wheelDeltaPercentage = ab
            }
          },
          metadata: Eb
        }, jb, Rb), Eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eb
        })
      })(), bb
    })();
    zb.b.ArcRotateCameraMouseWheelInput = Ib;
    var db, Fb, hb = Ub(38982);
    class Gb extends zb.f {
      constructor(bb) {
        super(bb)
      }
      addMouseWheel() {
        return this.add(new Ib), this
      }
      addPointers() {
        return this.add(new mb), this
      }
      addKeyboard() {
        return this.add(new Nb), this
      }
    }(db = Gb.prototype).addVRDeviceOrientation ?? (db.addVRDeviceOrientation = (0, hb.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Fb = Gb.prototype).addGamepad ?? (Fb.addGamepad = (0, hb.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var Qb = Ub(36447),
      qb = Ub(39331),
      ub = Ub(39340);
    class rb extends qb.c {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub), this.input = new ub.d({
          pan: (bb, ab) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += ab
          },
          rotate: (bb, ab) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += ab
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

    function Kb(bb, ab) {
      return isNaN(bb) ? ab : bb
    }
    let ob = (() => {
        var bb;
        let ab, Ub, Bb, vb, Lb, jb, Rb, zb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb, hb, Qb, qb, ub, ob, lb, tb, wb, sb, gb, Cb = Db.h,
          Vb = [],
          Ob = [],
          cb = [],
          Jb = [],
          nb = [],
          Sb = [],
          ba = [],
          aa = [],
          Ua = [],
          Aa = [],
          Ma = [],
          Ta = [],
          Ea = [],
          Ya = [],
          Ba = [],
          ea = [],
          va = [],
          La = [],
          Pa = [],
          Xa = [],
          ja = [],
          Ra = [],
          ka = [],
          ya = [],
          Za = [],
          Da = [],
          za = [],
          xa = [],
          ia = [],
          fa = [],
          ma = [],
          pa = [],
          Na = [],
          Wa = [],
          Ha = [],
          Ia = [],
          da = [],
          Fa = [],
          ha = [],
          Ga = [],
          Qa = [],
          qa = [],
          ua = [],
          ra = [],
          Ka = [],
          oa = [],
          la = [];
        return bb = class extends Cb {
          get target() {
            return this.tC
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
            this._upToYMatrix || (this._yToUpMatrix = new Eb.b, this._upToYMatrix = new Eb.b, this._upVector = Eb.m.Zero()), bb.normalize(), this._upVector.EUb(bb), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Eb.b.RotationAlignToRef(Eb.m.UpReadOnly, this._upVector, this._yToUpMatrix), Eb.b.RotationAlignToRef(this._upVector, Eb.m.UpReadOnly, this._upToYMatrix)
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
            const ab = this.inputs.attached.pointers;
            ab && (ab.angularSensibilityX = bb)
          }
          get angularSensibilityY() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.angularSensibilityY : 0
          }
          set angularSensibilityY(bb) {
            const ab = this.inputs.attached.pointers;
            ab && (ab.angularSensibilityY = bb)
          }
          get pinchPrecision() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchPrecision : 0
          }
          set pinchPrecision(bb) {
            const ab = this.inputs.attached.pointers;
            ab && (ab.pinchPrecision = bb)
          }
          get pinchDeltaPercentage() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(bb) {
            const ab = this.inputs.attached.pointers;
            ab && (ab.pinchDeltaPercentage = bb)
          }
          get useNaturalPinchZoom() {
            const bb = this.inputs.attached.pointers;
            return !!bb && bb.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(bb) {
            const ab = this.inputs.attached.pointers;
            ab && (ab.useNaturalPinchZoom = bb)
          }
          get panningSensibility() {
            const bb = this.inputs.attached.pointers;
            return bb ? bb.panningSensibility : 0
          }
          set panningSensibility(bb) {
            const ab = this.inputs.attached.pointers;
            ab && (ab.panningSensibility = bb)
          }
          get keysUp() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysUp : []
          }
          set keysUp(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysUp = bb)
          }
          get keysDown() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysDown : []
          }
          set keysDown(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysDown = bb)
          }
          get keysLeft() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysLeft : []
          }
          set keysLeft(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysLeft = bb)
          }
          get keysRight() {
            const bb = this.inputs.attached.keyboard;
            return bb ? bb.keysRight : []
          }
          set keysRight(bb) {
            const ab = this.inputs.attached.keyboard;
            ab && (ab.keysRight = bb)
          }
          get wheelPrecision() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelPrecision : 0
          }
          set wheelPrecision(bb) {
            const ab = this.inputs.attached.mousewheel;
            ab && (ab.wheelPrecision = bb)
          }
          get zoomToMouseLocation() {
            const bb = this.inputs.attached.mousewheel;
            return !!bb && bb.zoomToMouseLocation
          }
          set zoomToMouseLocation(bb) {
            const ab = this.inputs.attached.mousewheel;
            ab && (ab.zoomToMouseLocation = bb)
          }
          get wheelDeltaPercentage() {
            const bb = this.inputs.attached.mousewheel;
            return bb ? bb.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(bb) {
            const ab = this.inputs.attached.mousewheel;
            ab && (ab.wheelDeltaPercentage = bb)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(bb) {
            this._useCtrlForPanningInternal = bb;
            const ab = this.movement.input,
              Ub = ab.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !bb && Ub ? ab.inputMap.splice(ab.inputMap.indexOf(Ub), 1) : bb && !Ub && ab.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Ab = ab.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !bb && Ab ? ab.inputMap.splice(ab.inputMap.indexOf(Ab), 1) : bb && !Ab && ab.addEntry({
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
            const ab = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            ab && (ab.button = bb)
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
            bb !== this.useBouncingBehavior && (bb ? (this._bouncingBehavior = new kb, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(bb) {
            bb !== this.useFramingBehavior && (bb ? (this._framingBehavior = new yb, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(bb) {
            bb !== this.useAutoRotationBehavior && (bb ? (this._autoRotationBehavior = new Xb, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(bb, ab, Ub, Mb, Yb, Bb) {
            var eb;
            let vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(bb, Eb.m.Zero(), Bb, vb), eb = this, this.alpha = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, void 0)), this.beta = ((0, Ab.k)(this, cb), (0, Ab.k)(this, Jb, void 0)), this.radius = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, void 0)), this.tC = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, void 0)), this._targetHost = ((0, Ab.k)(this, Ma), (0, Ab.k)(this, Ta, void 0)), this._upToYMatrix = (0, Ab.k)(this, Ea), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Ab.k)(this, Ya, null), this.upperAlphaLimit = ((0, Ab.k)(this, Ba), (0, Ab.k)(this, ea, null)), this.lowerBetaLimit = ((0, Ab.k)(this, va), (0, Ab.k)(this, La, .01)), this.upperBetaLimit = ((0, Ab.k)(this, Pa), (0, Ab.k)(this, Xa, Math.PI - .01)), this.lowerRadiusLimit = ((0, Ab.k)(this, ja), (0, Ab.k)(this, Ra, null)), this.upperRadiusLimit = ((0, Ab.k)(this, ka), (0, Ab.k)(this, ya, null)), this.lowerTargetYLimit = ((0, Ab.k)(this, Za), (0, Ab.k)(this, Da, -1 / 0)), this.inertialPanningX = ((0, Ab.k)(this, za), (0, Ab.k)(this, xa, 0)), this.inertialPanningY = ((0, Ab.k)(this, ia), (0, Ab.k)(this, fa, 0)), this.pinchToPanMaxDistance = ((0, Ab.k)(this, ma), (0, Ab.k)(this, pa, 20)), this.panningDistanceLimit = ((0, Ab.k)(this, Na), (0, Ab.k)(this, Wa, null)), this.panningOriginTarget = ((0, Ab.k)(this, Ha), (0, Ab.k)(this, Ia, Eb.m.Zero())), this._panningInertia = ((0, Ab.k)(this, da), .9), this._inertia = .9, this.zoomOnFactor = (0, Ab.k)(this, Fa, 1), this.targetScreenOffset = ((0, Ab.k)(this, ha), (0, Ab.k)(this, Ga, Eb.l.Zero())), this.allowUpsideDown = ((0, Ab.k)(this, Qa), (0, Ab.k)(this, qa, !0)), this.useInputToRestoreState = ((0, Ab.k)(this, ua), (0, Ab.k)(this, ra, !0)), this.restoreStateInterpolationFactor = ((0, Ab.k)(this, Ka), (0, Ab.k)(this, oa, 0)), this._currentInterpolationFactor = ((0, Ab.k)(this, la), 0), this._viewMatrix = new Eb.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Eb.m(1, 1, 0), this._transformedDirection = new Eb.m, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Tb.b, this.checkCollisions = !1, this.collisionRadius = new Eb.m(.5, .5, .5), this._previousPosition = Eb.m.Zero(), this._collisionVelocity = Eb.m.Zero(), this._newPosition = Eb.m.Zero(), this._computationVector = Eb.m.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Eb.m(NaN, NaN, NaN), this._goalTargetScreenOffset = new Eb.l(NaN, NaN), this._onCollisionPositionChange = function(bb, ab) {
              let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              Ub ? (eb.setPosition(ab), eb.SL && eb.SL(Ub)) : eb._previousPosition.EUb(eb._position);
              const Ab = Math.cos(eb.alpha),
                Mb = Math.sin(eb.alpha),
                Tb = Math.cos(eb.beta);
              let Eb = Math.sin(eb.beta);
              0 === Eb && (Eb = 1e-4);
              const Yb = eb._getTargetPosition();
              eb._computationVector.K9(eb.radius * Ab * Eb, eb.radius * Tb, eb.radius * Mb * Eb), Yb.addToRef(eb._computationVector, eb._newPosition), eb._position.EUb(eb._newPosition);
              let Bb = eb.upVector;
              eb.allowUpsideDown && eb.beta < 0 && (Bb = Bb.clone(), Bb = Bb.pa()), eb._computeViewMatrix(eb._position, Yb, Bb), eb._viewMatrix.addAtIndex(12, eb.targetScreenOffset.x), eb._viewMatrix.addAtIndex(13, eb.targetScreenOffset.y), eb._collisionTriggered = !1
            }, this.tC = Eb.m.Zero(), Yb && this.setTarget(Yb), this.alpha = ab, this.beta = Ub, this.radius = Mb, this.getViewMatrix(), this.inputs = new Gb(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new rb(this.oN(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.tC = new Eb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Eb.l.Zero()
          }
          _updateCache(bb) {
            bb || super._updateCache(), this._cache.tC.EUb(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.EUb(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const bb = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? bb.addToRef(this._targetBoundingCenter, this.tC) : this.tC.EUb(bb)
            }
            const bb = this._getLockedTargetPosition();
            return bb || this.tC
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Pb.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Tb = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Tb ? this._currentInterpolationFactor = Tb : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Kb(bb, this._goalAlpha), this._goalBeta = Kb(ab, this._goalBeta), this._goalRadius = Kb(Ub, this._goalRadius), this._goalTarget.set(Kb(Ab.x, this._goalTarget.x), Kb(Ab.y, this._goalTarget.y), Kb(Ab.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Kb(Mb.x, this._goalTargetScreenOffset.x), Kb(Mb.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Yb.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Yb.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Yb.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Yb.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.tC.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(bb, ab) {
            let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Mb = arguments;
            ab = xb.h.BackCompatCameraNoPreventDefault(Mb), this._useCtrlForPanning = Ub, this._panningMouseButton = Ab, "boolean" === typeof Mb[0] && (Mb.length > 1 && (this._useCtrlForPanning = Mb[1]), Mb.length > 2 && (this._panningMouseButton = Mb[2])), this.inputs.attachElement(ab), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(bb, ab, Ub) {
            const Ab = this.invertRotation ? -1 : 1;
            let Mb = bb * this._calculateHandednessMultiplier();
            this.beta < 0 && (Mb *= -1), this.alpha += Mb * Ab, this.beta += ab * Ab, this.radius -= Ub
          }
          _applyPanDelta(bb, ab) {
            const Ub = Eb.j.Pj[0].K9(bb, ab, ab);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), Ub.multiplyInPlace(this.panningAxis), Eb.m.TransformNormalToRef(Ub, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const bb = this.upVector,
                ab = Eb.m.CrossToRef(this._transformedDirection, bb, this._transformedDirection);
              Eb.m.CrossToRef(bb, ab, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.tC);
                Eb.m.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.tC.EUb(this._transformedDirection)
              } else {
                if (this.parent) {
                  const bb = Eb.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(bb), bb.transposeToRef(bb), Eb.m.TransformCoordinatesToRef(this._transformedDirection, bb, this._transformedDirection)
                }
                this.tC.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let bb = !1;
            this.movement.computeCurrentFrameDeltas();
            const ab = this.movement.rotationDeltaCurrentFrame,
              Ub = this.movement.zoomDeltaCurrentFrame,
              Ab = this.movement.panDeltaCurrentFrame;
            if (0 === ab.x && 0 === ab.y && 0 === Ub && 0 === Ab.x && 0 === Ab.y || (bb = !0, 0 === ab.x && 0 === ab.y && 0 === Ub || this._applyRotationAndZoomDelta(ab.x, ab.y, Ub), 0 === Ab.x && 0 === Ab.y || this._applyPanDelta(Ab.x, Ab.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), bb = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const ab = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < ab && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < ab && (this.inertialPanningY = 0), bb = !0
            }
            if (bb) this.stopInterpolation();
            else if (this._isInterpolating) {
              let bb = !1;
              const ab = this._scene.vj().getDeltaTime() / 1e3,
                Ub = 1 - Math.pow(2, -ab / this._currentInterpolationFactor),
                Ab = Kb(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const ab = Eb.j.Pj[0].set(Kb(this._goalTarget.x, this.tC.x), Kb(this._goalTarget.y, this.tC.y), Kb(this._goalTarget.z, this.tC.z));
                Eb.m.LerpToRef(this.target, ab, Ub, this.tC), 10 * Eb.m.Distance(this.target, ab) / Ab < Pb.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.EUb(ab), this.setTarget(this.target, !1, !0, !0)) : bb = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const ab = Eb.e.RotationAlphaBetaGammaToRef(Kb(this._goalAlpha, this.alpha), Kb(this._goalBeta, this.beta), 0, Eb.j.Quaternion[0]),
                  Ab = Eb.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Eb.j.Quaternion[1]),
                  Mb = Eb.e.SlerpToRef(Ab, ab, Ub, Eb.j.Quaternion[2]);
                Mb.normalize();
                const Tb = Mb.toAlphaBetaGammaToRef(Eb.j.Pj[0]);
                if (this.alpha = Tb.x, this.beta = Tb.y, Mb.isApprox(ab, Pb.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const bb = ab.toAlphaBetaGammaToRef(Eb.j.Pj[0]);
                  this.alpha = bb.x, this.beta = bb.y
                } else bb = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Ab - this.radius) * Ub, Math.abs(Ab / this.radius - 1) < Pb.e ? (this._goalRadius = NaN, this.radius = Ab) : bb = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const ab = Eb.j.Vector2[0].set(Kb(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Kb(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Eb.l.LerpToRef(this.targetScreenOffset, ab, Ub, this.targetScreenOffset), Eb.l.Distance(this.targetScreenOffset, ab) < Pb.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.EUb(ab)) : bb = !0
              }
              this._isInterpolating = bb
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Eb.m.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const bb = this.alpha;
            var ab, Ub;
            this.alpha = function(bb) {
              let ab = Math.PI / 2;
              return 0 === bb.x && 0 === bb.z || (ab = Math.acos(bb.x / Math.sqrt(Math.pow(bb.x, 2) + Math.pow(bb.z, 2)))), bb.z < 0 && (ab = 2 * Math.PI - ab), ab
            }(this._computationVector), this.beta = (ab = this._computationVector.y, Ub = this.radius, Math.acos(ab / Ub));
            const Ab = Math.round((bb - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Ab * Math.PI, this._checkLimits()
          }
          setPosition(bb) {
            this._position.equals(bb) || (this._position.EUb(bb), this.rebuildAnglesAndRadius())
          }
          setTarget(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Ab = this.overrideCloneAlphaBetaRadius ?? Ab, bb.computeWorldMatrix) ab && bb.DH ? this._targetBoundingCenter = bb.DH().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, bb.computeWorldMatrix(), this._targetHost = bb, this.tC = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const ab = bb,
                Ab = this._getTargetPosition();
              if (Ab && !Ub && Ab.equals(ab)) return;
              this._targetHost = null, this.tC = ab, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Ab || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const bb = Math.cos(this.alpha),
              ab = Math.sin(this.alpha),
              Ub = Math.cos(this.beta);
            let Ab = Math.sin(this.beta);
            0 === Ab && (Ab = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Mb = this._getTargetPosition();
            if (this._computationVector.K9(this.radius * bb * Ab, this.radius * Ub, this.radius * ab * Ab), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Eb.m.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Mb.addToRef(this._computationVector, this._newPosition), this.oN().collisionsEnabled && this.checkCollisions) {
              const bb = this.oN().collisionCoordinator;
              this._collider || (this._collider = bb.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, bb.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.EUb(this._newPosition);
              let bb = this.upVector;
              this.allowUpsideDown && Ab < 0 && (bb = bb.pa()), this._computeViewMatrix(this._position, Mb, bb), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.EUb(Mb), this._viewMatrix
          }
          zoomOn(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            bb = bb || this.oN().meshes;
            const Ub = eb.d.MinMax(bb);
            let Ab = this._calculateLowerRadiusFromModelBoundingSphere(Ub.min, Ub.max);
            if (Ab = Math.max(Math.min(Ab, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Ab * this.zoomOnFactor, this.mode === Zb.b.ORTHOGRAPHIC_CAMERA) {
              const bb = this.oN().vj().getAspectRatio(this),
                ab = Ab * this.zoomOnFactor / 2;
              this.orthoLeft = -ab * bb, this.orthoRight = ab * bb, this.orthoBottom = -ab, this.orthoTop = ab
            }
            this.focusOn({
              min: Ub.min,
              max: Ub.max,
              distance: Ab
            }, ab)
          }
          focusOn(bb) {
            let ab, Ub, Ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === bb.min) {
              const Ab = bb || this.oN().meshes;
              ab = eb.d.MinMax(Ab), Ub = Eb.m.Distance(ab.min, ab.max)
            } else {
              ab = bb, Ub = bb.distance
            }
            this.tC = eb.d.Center(ab), Ab || (this.maxZ = 2 * Ub)
          }
          createRigCamera(ab, Ub) {
            let Ab = 0;
            switch (this.cameraRigMode) {
              case Zb.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Zb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Zb.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Zb.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Zb.b.RIG_MODE_VR:
                Ab = this._cameraRigParams.stereoHalfAngle * (0 === Ub ? 1 : -1);
                break;
              case Zb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Ab = this._cameraRigParams.stereoHalfAngle * (0 === Ub ? -1 : 1)
            }
            const Mb = new bb(ab, this.alpha + Ab, this.beta, this.radius, this.tC, this.oN());
            return Mb._cameraRigParams = {}, Mb.isRigCamera = !0, Mb.rigParent = this, Mb.upVector = this.upVector, Mb.mode = this.mode, Mb.orthoLeft = this.orthoLeft, Mb.orthoRight = this.orthoRight, Mb.orthoBottom = this.orthoBottom, Mb.orthoTop = this.orthoTop, Mb
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              ab = this._rigCameras[1];
            switch (bb.beta = ab.beta = this.beta, this.cameraRigMode) {
              case Zb.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Zb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Zb.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Zb.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Zb.b.RIG_MODE_VR:
                bb.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, ab.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Zb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                bb.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, ab.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Ab = Eb.m.Distance(bb, ab),
              Mb = this.oN().vj().getAspectRatio(this),
              Tb = Math.tan(this.fov / 2),
              Yb = Tb * Mb,
              Bb = .5 * Ab * Ub,
              eb = Bb * Math.sqrt(1 + 1 / (Yb * Yb)),
              vb = Bb * Math.sqrt(1 + 1 / (Tb * Tb));
            return Math.max(eb, vb)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Bb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.I)("target")], jb = [(0, Mb.x)("targetHost")], Rb = [(0, Mb.K)()], zb = [(0, Mb.K)()], ib = [(0, Mb.K)()], fb = [(0, Mb.K)()], mb = [(0, Mb.K)()], pb = [(0, Mb.K)()], Nb = [(0, Mb.K)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], db = [(0, Mb.K)()], Fb = [(0, Mb.K)()], hb = [(0, Mb.K)()], Qb = [(0, Mb.K)()], qb = [(0, Mb.I)()], ub = [(0, Mb.K)()], ob = [(0, Mb.K)()], lb = [(0, Mb.K)()], tb = [(0, Mb.F)()], wb = [(0, Mb.K)()], sb = [(0, Mb.K)()], gb = [(0, Mb.K)()], (0, Ab.h)(bb, null, Rb, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialAlphaOffset" in bb,
              get: bb => bb.inertialAlphaOffset
            },
            metadata: Tb
          }, null, Vb), (0, Ab.h)(bb, null, zb, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialBetaOffset" in bb,
              get: bb => bb.inertialBetaOffset
            },
            metadata: Tb
          }, null, Vb), (0, Ab.h)(bb, null, ib, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialRadiusOffset" in bb,
              get: bb => bb.inertialRadiusOffset
            },
            metadata: Tb
          }, null, Vb), (0, Ab.h)(bb, null, ub, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningInertia" in bb,
              get: bb => bb.panningInertia
            },
            metadata: Tb
          }, null, Vb), (0, Ab.h)(bb, null, ob, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomToMouseLocation" in bb,
              get: bb => bb.zoomToMouseLocation
            },
            metadata: Tb
          }, null, Vb), (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "alpha" in bb,
              get: bb => bb.alpha,
              set: (bb, ab) => {
                bb.alpha = ab
              }
            },
            metadata: Tb
          }, Ob, cb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: bb => "beta" in bb,
              get: bb => bb.beta,
              set: (bb, ab) => {
                bb.beta = ab
              }
            },
            metadata: Tb
          }, Jb, nb), (0, Ab.h)(null, null, Bb, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: bb => "radius" in bb,
              get: bb => bb.radius,
              set: (bb, ab) => {
                bb.radius = ab
              }
            },
            metadata: Tb
          }, Sb, ba), (0, Ab.h)(null, null, vb, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "overrideCloneAlphaBetaRadius" in bb,
              get: bb => bb.overrideCloneAlphaBetaRadius,
              set: (bb, ab) => {
                bb.overrideCloneAlphaBetaRadius = ab
              }
            },
            metadata: Tb
          }, aa, Ua), (0, Ab.h)(null, null, Lb, {
            kind: "field",
            name: "tC",
            static: !1,
            private: !1,
            access: {
              has: bb => "tC" in bb,
              get: bb => bb.tC,
              set: (bb, ab) => {
                bb.tC = ab
              }
            },
            metadata: Tb
          }, Aa, Ma), (0, Ab.h)(null, null, jb, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: bb => "_targetHost" in bb,
              get: bb => bb._targetHost,
              set: (bb, ab) => {
                bb._targetHost = ab
              }
            },
            metadata: Tb
          }, Ta, Ea), (0, Ab.h)(null, null, fb, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerAlphaLimit" in bb,
              get: bb => bb.lowerAlphaLimit,
              set: (bb, ab) => {
                bb.lowerAlphaLimit = ab
              }
            },
            metadata: Tb
          }, Ya, Ba), (0, Ab.h)(null, null, mb, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperAlphaLimit" in bb,
              get: bb => bb.upperAlphaLimit,
              set: (bb, ab) => {
                bb.upperAlphaLimit = ab
              }
            },
            metadata: Tb
          }, ea, va), (0, Ab.h)(null, null, pb, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerBetaLimit" in bb,
              get: bb => bb.lowerBetaLimit,
              set: (bb, ab) => {
                bb.lowerBetaLimit = ab
              }
            },
            metadata: Tb
          }, La, Pa), (0, Ab.h)(null, null, Nb, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperBetaLimit" in bb,
              get: bb => bb.upperBetaLimit,
              set: (bb, ab) => {
                bb.upperBetaLimit = ab
              }
            },
            metadata: Tb
          }, Xa, ja), (0, Ab.h)(null, null, Wb, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerRadiusLimit" in bb,
              get: bb => bb.lowerRadiusLimit,
              set: (bb, ab) => {
                bb.lowerRadiusLimit = ab
              }
            },
            metadata: Tb
          }, Ra, ka), (0, Ab.h)(null, null, Hb, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "upperRadiusLimit" in bb,
              get: bb => bb.upperRadiusLimit,
              set: (bb, ab) => {
                bb.upperRadiusLimit = ab
              }
            },
            metadata: Tb
          }, ya, Za), (0, Ab.h)(null, null, Ib, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "lowerTargetYLimit" in bb,
              get: bb => bb.lowerTargetYLimit,
              set: (bb, ab) => {
                bb.lowerTargetYLimit = ab
              }
            },
            metadata: Tb
          }, Da, za), (0, Ab.h)(null, null, db, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningX" in bb,
              get: bb => bb.inertialPanningX,
              set: (bb, ab) => {
                bb.inertialPanningX = ab
              }
            },
            metadata: Tb
          }, xa, ia), (0, Ab.h)(null, null, Fb, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: bb => "inertialPanningY" in bb,
              get: bb => bb.inertialPanningY,
              set: (bb, ab) => {
                bb.inertialPanningY = ab
              }
            },
            metadata: Tb
          }, fa, ma), (0, Ab.h)(null, null, hb, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: bb => "pinchToPanMaxDistance" in bb,
              get: bb => bb.pinchToPanMaxDistance,
              set: (bb, ab) => {
                bb.pinchToPanMaxDistance = ab
              }
            },
            metadata: Tb
          }, pa, Na), (0, Ab.h)(null, null, Qb, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningDistanceLimit" in bb,
              get: bb => bb.panningDistanceLimit,
              set: (bb, ab) => {
                bb.panningDistanceLimit = ab
              }
            },
            metadata: Tb
          }, Wa, Ha), (0, Ab.h)(null, null, qb, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "panningOriginTarget" in bb,
              get: bb => bb.panningOriginTarget,
              set: (bb, ab) => {
                bb.panningOriginTarget = ab
              }
            },
            metadata: Tb
          }, Ia, da), (0, Ab.h)(null, null, lb, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "zoomOnFactor" in bb,
              get: bb => bb.zoomOnFactor,
              set: (bb, ab) => {
                bb.zoomOnFactor = ab
              }
            },
            metadata: Tb
          }, Fa, ha), (0, Ab.h)(null, null, tb, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: bb => "targetScreenOffset" in bb,
              get: bb => bb.targetScreenOffset,
              set: (bb, ab) => {
                bb.targetScreenOffset = ab
              }
            },
            metadata: Tb
          }, Ga, Qa), (0, Ab.h)(null, null, wb, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: bb => "allowUpsideDown" in bb,
              get: bb => bb.allowUpsideDown,
              set: (bb, ab) => {
                bb.allowUpsideDown = ab
              }
            },
            metadata: Tb
          }, qa, ua), (0, Ab.h)(null, null, sb, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: bb => "useInputToRestoreState" in bb,
              get: bb => bb.useInputToRestoreState,
              set: (bb, ab) => {
                bb.useInputToRestoreState = ab
              }
            },
            metadata: Tb
          }, ra, Ka), (0, Ab.h)(null, null, gb, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: bb => "restoreStateInterpolationFactor" in bb,
              get: bb => bb.restoreStateInterpolationFactor,
              set: (bb, ab) => {
                bb.restoreStateInterpolationFactor = ab
              }
            },
            metadata: Tb
          }, oa, la), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      lb = !1;
    lb || (lb = !0, Bb.c.AddNodeConstructor("ArcRotateCamera", ((bb, ab) => () => new ob(bb, 0, 0, 1, Eb.m.Zero(), ab))), (0, Qb.f)("BABYLON.ArcRotateCamera", ob))
  },
  39347: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.d
    });
    var Ab = Ub(39356);
    (0, Ab.f)()
  },
  39356: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      f: () => Pb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(36593),
      Yb = Ub(39359),
      Bb = Ub(39314),
      eb = Ub(36447);
    let vb = (() => {
        var bb;
        let ab, Ub, Bb = Yb.e,
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        return bb = class extends Bb {
          constructor(bb, ab, Ub, Mb) {
            super(bb, Ub, Mb), this.groundColor = (0, Ab.k)(this, eb, new Eb.c(0, 0, 0)), this.direction = ((0, Ab.k)(this, vb), (0, Ab.k)(this, Lb, void 0)), (0, Ab.k)(this, Pb), this.direction = ab || Tb.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Tb.m.Normalize(bb.subtract(Tb.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ub.x, Ub.y, Ub.z, 0, ab), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ab), this
          }
          transferToNodeMaterialEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return bb.setFloat3(ab, Ub.x, Ub.y, Ub.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Tb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Yb.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ab) {
            bb["HEMILIGHT" + ab] = !0
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.k)()], Ub = [(0, Mb.I)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ab) => {
                bb.groundColor = ab
              }
            },
            metadata: Tb
          }, eb, vb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ab) => {
                bb.direction = ab
              }
            },
            metadata: Tb
          }, Lb, Pb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Lb = !1;

    function Pb() {
      Lb || (Lb = !0, Bb.c.AddNodeConstructor("Light_Type_3", ((bb, ab) => () => new vb(bb, Tb.m.Zero(), ab))), (0, eb.f)("BABYLON.HemisphericLight", vb))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
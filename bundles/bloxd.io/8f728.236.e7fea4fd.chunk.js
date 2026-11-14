export const id = 236;
export const ids = [236];
export const modules = {
  39175: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => kB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35783),
      uc = nc(35756),
      sc = nc(35785),
      Mc = nc(38255),
      Pc = nc(38425),
      qB = nc(38218),
      Oc = nc(37968),
      Tc = nc(35759);
    class fc {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(cB) {
        this._zoomStopsAnimation = cB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(cB) {
        this._idleRotationSpeed = cB
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(cB) {
        this._idleRotationWaitTime = cB
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(cB) {
        this._idleRotationSpinupTime = cB
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
      attach(cB) {
        this._attachedCamera = cB;
        const Bc = this._attachedCamera.knc();
        this._onPrePointerObservableObserver = Bc.onPrePointerObservable.add((cB => {
          cB.type !== qB.d.POINTERDOWN ? cB.type === qB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = cB.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const cB = Oc.c.Now;
          let Bc = 0;
          null != this._lastFrameTime && (Bc = cB - this._lastFrameTime), this._lastFrameTime = cB, this._applyUserInteraction();
          const nc = cB - this._lastInteractionTime - this._idleRotationWaitTime,
            Vc = Math.max(Math.min(nc / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Vc, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Bc / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const cB = this._attachedCamera.knc();
        this._onPrePointerObservableObserver && cB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(cB) {
        this._lastInteractionTime = cB ?? Oc.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Tc.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let cB = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (cB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? cB : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Oc.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    nc(39179);
    class mB {
      constructor() {
        this._easingMode = mB.EASINGMODE_EASEIN
      }
      setEasingMode(cB) {
        const Bc = Math.min(Math.max(cB, 0), 2);
        this._easingMode = Bc
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(cB) {
        throw new Error("You must implement this method")
      }
      ease(cB) {
        switch (this._easingMode) {
          case mB.EASINGMODE_EASEIN:
            return this.easeInCore(cB);
          case mB.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - cB)
        }
        return cB >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - cB))) + .5 : .5 * this.easeInCore(2 * cB)
      }
    }
    mB.EASINGMODE_EASEIN = 0, mB.EASINGMODE_EASEOUT = 1, mB.EASINGMODE_EASEINOUT = 2;
    var ec = nc(39187);
    class tB {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(cB) {
        if (this._autoTransitionRange === cB) return;
        this._autoTransitionRange = cB;
        const Bc = this._attachedCamera;
        Bc && (cB ? this._onMeshTargetChangedObserver = Bc.onMeshTargetChangedObservable.add((cB => {
          if (cB && (cB.computeWorldMatrix(!0), cB.qVc)) {
            const Bc = cB.qVc().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Bc, this.upperRadiusTransitionRange = .05 * Bc
          }
        })) : this._onMeshTargetChangedObserver && Bc.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(cB) {
        this._attachedCamera = cB, this._onAfterCheckInputsObserver = cB.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(cB) {
        return !!this._attachedCamera && (this._attachedCamera.radius === cB && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(cB) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (tB.EasingFunction.setEasingMode(tB.EasingMode), this._radiusBounceTransition = ec.d.CreateAnimation("radius", ec.d.ANIMATIONTYPE_FLOAT, 60, tB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Bc = ec.d.TransitionTo("radius", this._attachedCamera.radius + cB, this._attachedCamera, this._attachedCamera.knc(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Bc && this._animatables.push(Bc)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    tB.EasingFunction = new class extends mB {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = cB
      }
      easeInCore(cB) {
        const Bc = Math.max(0, this.amplitude);
        return Math.pow(cB, 3) - cB * Bc * Math.sin(3.141592653589793 * cB)
      }
    }(.3), tB.EasingMode = mB.EASINGMODE_EASEOUT;
    class Sc {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new rB.c, this._mode = Sc.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(cB) {
        this._mode = cB
      }
      get mode() {
        return this._mode
      }
      set radiusScale(cB) {
        this._radiusScale = cB
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(cB) {
        this._positionScale = cB
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(cB) {
        this._defaultElevation = cB
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(cB) {
        this._elevationReturnTime = cB
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(cB) {
        this._elevationReturnWaitTime = cB
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(cB) {
        this._zoomStopsAnimation = cB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(cB) {
        this._framingTime = cB
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(cB) {
        this._attachedCamera = cB;
        const Bc = this._attachedCamera.knc();
        Sc.EasingFunction.setEasingMode(Sc.EasingMode), this._onPrePointerObservableObserver = Bc.onPrePointerObservable.add((cB => {
          cB.type !== qB.d.POINTERDOWN ? cB.type === qB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = cB.onMeshTargetChangedObservable.add((cB => {
          cB && cB.qVc && this.zoomOnMesh(cB, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = cB.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const cB = this._attachedCamera.knc();
        this._onPrePointerObservableObserver && cB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        cB.computeWorldMatrix(!0);
        const Vc = cB.qVc().boundingBox;
        this.zoomOnBoundingInfo(Vc.minimumWorld, Vc.maximumWorld, Bc, nc)
      }
      zoomOnMeshHierarchy(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        cB.computeWorldMatrix(!0);
        const Vc = cB.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Vc.min, Vc.max, Bc, nc)
      }
      zoomOnMeshesHierarchy(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Vc = new uc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Ic = new uc.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let rB = 0; rB < cB.length; rB++) {
          const Bc = cB[rB].getHierarchyBoundingVectors(!0);
          uc.p.CheckExtends(Bc.min, Vc, Ic), uc.p.CheckExtends(Bc.max, Vc, Ic)
        }
        this.zoomOnBoundingInfo(Vc, Ic, Bc, nc)
      }
      zoomOnBoundingInfo(cB, Bc) {
        let nc, Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const rB = cB.y,
          sc = rB + (Bc.y - rB) * this._positionScale,
          Mc = Bc.subtract(cB).scale(.5);
        if (!isFinite(sc)) return !1;
        if (Vc) nc = new uc.p(0, sc, 0);
        else {
          const Bc = cB.add(Mc);
          nc = new uc.p(Bc.x, sc, Bc.z)
        }
        this._vectorTransition || (this._vectorTransition = ec.d.CreateAnimation("target", ec.d.ANIMATIONTYPE_VECTOR3, 60, Sc.EasingFunction)), this._betaIsAnimating = !0;
        let Pc = ec.d.TransitionTo("target", nc, this._attachedCamera, this._attachedCamera.knc(), 60, this._vectorTransition, this._framingTime);
        Pc && this._animatables.push(Pc);
        let qB = 0;
        if (this._mode === Sc.FitFrustumSidesMode) {
          const nc = this._calculateLowerRadiusFromModelBoundingSphere(cB, Bc);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Mc.length() + this._attachedCamera.minZ), qB = nc
        } else this._mode === Sc.IgnoreBoundsSizeMode && (qB = this._calculateLowerRadiusFromModelBoundingSphere(cB, Bc), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const nc = Bc.subtract(cB).length();
          this._attachedCamera.panningSensibility = 5e3 / nc, this._attachedCamera.wheelPrecision = 100 / qB
        }
        return this._radiusTransition || (this._radiusTransition = ec.d.CreateAnimation("radius", ec.d.ANIMATIONTYPE_FLOAT, 60, Sc.EasingFunction)), Pc = ec.d.TransitionTo("radius", qB, this._attachedCamera, this._attachedCamera.knc(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Ic && Ic(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Pc && this._animatables.push(Pc), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(cB, Bc) {
        const nc = this._attachedCamera;
        if (!nc) return 0;
        let Vc = nc._calculateLowerRadiusFromModelBoundingSphere(cB, Bc, this._radiusScale);
        return nc.lowerRadiusLimit && this._mode === Sc.IgnoreBoundsSizeMode && (Vc = Vc < nc.lowerRadiusLimit ? nc.lowerRadiusLimit : Vc), nc.upperRadiusLimit && (Vc = Vc > nc.upperRadiusLimit ? nc.upperRadiusLimit : Vc), Vc
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const cB = Oc.c.Now - this._lastInteractionTime,
          Bc = .5 * Math.PI - this._defaultElevation,
          nc = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > nc && cB >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = ec.d.CreateAnimation("beta", ec.d.ANIMATIONTYPE_FLOAT, 60, Sc.EasingFunction));
          const cB = ec.d.TransitionTo("beta", Bc, this._attachedCamera, this._attachedCamera.knc(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          cB && this._animatables.push(cB)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Oc.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Sc.EasingFunction = new class extends mB {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = cB
      }
      easeInCore(cB) {
        return this.exponent <= 0 ? cB : (Math.exp(this.exponent * cB) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Sc.EasingMode = mB.EASINGMODE_EASEINOUT, Sc.IgnoreBoundsSizeMode = 0, Sc.FitFrustumSidesMode = 1;
    var yB = nc(38251),
      zB = nc(38242),
      pc = nc(38278),
      hc = nc(38146);
    let aB = (() => {
        var cB;
        let Bc, nc = [],
          rB = [];
        return cB = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Vc.k)(this, nc, [0, 1, 2]), this._pointerInput = (0, Vc.k)(this, rB)
          }
          attachControl(cB) {
            cB = hc.g.BackCompatCameraNoPreventDefault(arguments);
            const Bc = this.camera.RV(),
              nc = Bc.getInputElement();
            let Vc = 0,
              Ic = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = rB => {
              const uc = rB.event,
                sc = "touch" === uc.pointerType;
              if (rB.type !== qB.d.POINTERMOVE && -1 === this.buttons.indexOf(uc.button)) return;
              const Mc = uc.target;
              if (this._altKey = uc.altKey, this._ctrlKey = uc.ctrlKey, this._metaKey = uc.metaKey, this._shiftKey = uc.shiftKey, this._buttonsPressed = uc.buttons, Bc.isPointerLock) {
                const cB = uc.movementX,
                  Bc = uc.movementY;
                this.onTouch(null, cB, Bc), this._pointA = null, this._pointB = null
              } else {
                if (rB.type !== qB.d.POINTERDOWN && rB.type !== qB.d.POINTERDOUBLETAP && sc && this._pointA?.pointerId !== uc.pointerId && this._pointB?.pointerId !== uc.pointerId) return;
                if (rB.type !== qB.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !sc)
                  if (rB.type === qB.d.POINTERDOUBLETAP) this.onDoubleTap(uc.pointerType, uc);
                  else if (rB.type !== qB.d.POINTERUP || this._currentMousePointerIdDown !== uc.pointerId && !sc) {
                  if (rB.type === qB.d.POINTERMOVE)
                    if (cB || uc.preventDefault(), this._pointA && null === this._pointB) {
                      const cB = uc.clientX - this._pointA.x,
                        Bc = uc.clientY - this._pointA.y;
                      this._pointA.x = uc.clientX, this._pointA.y = uc.clientY, this.onTouch(this._pointA, cB, Bc)
                    } else if (this._pointA && this._pointB) {
                    const cB = this._pointA.pointerId === uc.pointerId ? this._pointA : this._pointB;
                    cB.x = uc.clientX, cB.y = uc.clientY;
                    const Bc = this._pointA.x - this._pointB.x,
                      nc = this._pointA.y - this._pointB.y,
                      sc = Bc * Bc + nc * nc,
                      Mc = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: uc.pointerId,
                        type: rB.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Vc, sc, Ic, Mc), Ic = Mc, Vc = sc
                  }
                } else {
                  try {
                    Mc?.releasePointerCapture(uc.pointerId)
                  } catch (Pc) {}
                  sc || (this._pointB = null), Bc._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == uc.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == uc.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Vc || Ic) && (this.onMultiTouch(this._pointA, this._pointB, Vc, 0, Ic, null), Vc = 0, Ic = null), this._currentMousePointerIdDown = -1, this.onButtonUp(uc), cB || uc.preventDefault()
                } else {
                  try {
                    Mc?.setPointerCapture(uc.pointerId)
                  } catch (Pc) {}
                  if (null === this._pointA) this._pointA = {
                    x: uc.clientX,
                    y: uc.clientY,
                    pointerId: uc.pointerId,
                    type: uc.pointerType,
                    button: uc.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: uc.clientX,
                      y: uc.clientY,
                      pointerId: uc.pointerId,
                      type: uc.pointerType,
                      button: uc.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || sc || (this._currentMousePointerIdDown = uc.pointerId), this.onButtonDown(uc), cB || (uc.preventDefault(), nc && nc.focus())
                }
              }
            }, this._observer = this.camera.knc()._inputManager._addCameraPointerObserver(this._pointerInput, qB.d.POINTERDOWN | qB.d.POINTERUP | qB.d.POINTERMOVE | qB.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Vc = 0, Ic = null, this.onLostFocus()
            }, this._contextMenuBind = cB => this.onContextMenu(cB), nc && nc.addEventListener("contextmenu", this._contextMenuBind, !1);
            const rB = this.camera.knc().RV().getHostWindow();
            rB && hc.g.RegisterTopRootEvents(rB, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const cB = this.camera.knc().RV().getHostWindow();
              cB && hc.g.UnregisterTopRootEvents(cB, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.knc()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const cB = this.camera.knc().RV().getInputElement();
                cB && cB.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(cB, Bc) {}
          onTouch(cB, Bc, nc) {}
          onMultiTouch(cB, Bc, nc, Vc, Ic, rB) {}
          onContextMenu(cB) {
            cB.preventDefault()
          }
          onButtonDown(cB) {}
          onButtonUp(cB) {}
          onLostFocus() {}
        }, (() => {
          const uc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: cB => "buttons" in cB,
              get: cB => cB.buttons,
              set: (cB, Bc) => {
                cB.buttons = Bc
              }
            },
            metadata: uc
          }, nc, rB), uc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uc
          })
        })(), cB
      })(),
      lc = (() => {
        var cB;
        let Bc, nc, rB, uc = aB,
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        return cB = class extends uc {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Vc.k)(this, sc, !0), this.multiTouchPanning = ((0, Vc.k)(this, Mc), (0, Vc.k)(this, Pc, !0)), this.multiTouchPanAndZoom = ((0, Vc.k)(this, qB), (0, Vc.k)(this, Oc, !0)), this._isPinching = ((0, Vc.k)(this, Tc), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(cB, Bc) {}
          _computeMultiTouchPanning(cB, Bc) {}
          onMultiTouch(cB, Bc, nc, Vc, Ic, rB) {
            0 === nc && null === Ic || 0 === Vc && null === rB || (this.multiTouchPanAndZoom ? (this._computePinchZoom(nc, Vc), this._computeMultiTouchPanning(Ic, rB)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(nc, Vc), this._isPinching = !0) : this._computeMultiTouchPanning(Ic, rB)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Ic, rB) : this.pinchZoom && this._computePinchZoom(nc, Vc))
          }
          onButtonUp(cB) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(uc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: cB => "pinchZoom" in cB,
              get: cB => cB.pinchZoom,
              set: (cB, Bc) => {
                cB.pinchZoom = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: cB => "multiTouchPanning" in cB,
              get: cB => cB.multiTouchPanning,
              set: (cB, Bc) => {
                cB.multiTouchPanning = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Vc.g)(null, null, rB, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: cB => "multiTouchPanAndZoom" in cB,
              get: cB => cB.multiTouchPanAndZoom,
              set: (cB, Bc) => {
                cB.multiTouchPanAndZoom = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), fc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          })
        })(), cB
      })(),
      Yc = (() => {
        var cB;
        let Bc, nc, rB, uc, sc, Mc, Pc, qB = lc,
          Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [],
          Sc = [],
          yB = [],
          zB = [],
          pc = [],
          hc = [],
          aB = [],
          Yc = [],
          Lc = [];
        return cB = class extends qB {
          constructor() {
            super(...arguments), this.buttons = (0, Vc.k)(this, Oc, [0, 1, 2]), this.angularSensibilityX = ((0, Vc.k)(this, Tc), (0, Vc.k)(this, fc, 1e3)), this.angularSensibilityY = ((0, Vc.k)(this, mB), (0, Vc.k)(this, ec, 1e3)), this.pinchPrecision = ((0, Vc.k)(this, tB), (0, Vc.k)(this, Sc, 12)), this.pinchDeltaPercentage = ((0, Vc.k)(this, yB), (0, Vc.k)(this, zB, 0)), this.useNaturalPinchZoom = ((0, Vc.k)(this, pc), (0, Vc.k)(this, hc, !1)), this.panningSensibility = ((0, Vc.k)(this, aB), (0, Vc.k)(this, Yc, 1e3)), this.pinchInwards = ((0, Vc.k)(this, Lc), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(cB, Bc) {
            if (cB && Bc) {
              const nc = Bc.x - cB.x,
                Vc = Bc.y - cB.y,
                Ic = this.camera.movement.input.getEntry("pointer", "pan"),
                rB = Ic?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== rB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -nc * rB, this.camera.movement.panAccumulatedPixels.y += Vc * rB)
            }
          }
          _computePinchZoom(Bc, nc) {
            const Vc = this.camera.radius || cB.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Vc * Math.sqrt(Bc) / Math.sqrt(nc);
            else if (this.pinchDeltaPercentage) {
              const cB = .001 * (nc - Bc) * Vc * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += cB
            } else {
              const cB = (nc - Bc) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += cB
            }
          }
          onTouch(cB, Bc, nc) {
            const Vc = this._activeEntry ?? (this.camera.RV().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Vc)
              if ("pan" === Vc.interaction) {
                const cB = Vc.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== cB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Bc * cB, this.camera.movement.panAccumulatedPixels.y += nc * cB)
              } else if ("rotate" === Vc.interaction) {
              const cB = Vc.DVc ?? Vc.sensitivity ?? 1 / this.angularSensibilityX,
                Ic = Vc.NVc ?? Vc.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Bc * cB, this.camera.movement.rotationAccumulatedPixels.y += -nc * Ic
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(cB, Bc, nc, Vc, Ic, rB) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Vc) - Math.sqrt(nc)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(cB, Bc, nc, Vc, Ic, rB)
          }
          onButtonDown(cB) {
            this._pointerConditions.button = cB.button, this._pointerModifiers.ctrl = cB.ctrlKey, this._pointerModifiers.alt = cB.altKey, this._pointerModifiers.shift = cB.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(cB)
          }
          onButtonUp(cB) {
            this._activeEntry = null, super.onButtonUp(cB)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const lc = "function" === typeof Symbol && Symbol.metadata ? Object.create(qB[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], uc = [(0, Ic.M)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: cB => "buttons" in cB,
              get: cB => cB.buttons,
              set: (cB, Bc) => {
                cB.buttons = Bc
              }
            },
            metadata: lc
          }, Oc, Tc), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: cB => "angularSensibilityX" in cB,
              get: cB => cB.angularSensibilityX,
              set: (cB, Bc) => {
                cB.angularSensibilityX = Bc
              }
            },
            metadata: lc
          }, fc, mB), (0, Vc.g)(null, null, rB, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: cB => "angularSensibilityY" in cB,
              get: cB => cB.angularSensibilityY,
              set: (cB, Bc) => {
                cB.angularSensibilityY = Bc
              }
            },
            metadata: lc
          }, ec, tB), (0, Vc.g)(null, null, uc, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: cB => "pinchPrecision" in cB,
              get: cB => cB.pinchPrecision,
              set: (cB, Bc) => {
                cB.pinchPrecision = Bc
              }
            },
            metadata: lc
          }, Sc, yB), (0, Vc.g)(null, null, sc, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: cB => "pinchDeltaPercentage" in cB,
              get: cB => cB.pinchDeltaPercentage,
              set: (cB, Bc) => {
                cB.pinchDeltaPercentage = Bc
              }
            },
            metadata: lc
          }, zB, pc), (0, Vc.g)(null, null, Mc, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: cB => "useNaturalPinchZoom" in cB,
              get: cB => cB.useNaturalPinchZoom,
              set: (cB, Bc) => {
                cB.useNaturalPinchZoom = Bc
              }
            },
            metadata: lc
          }, hc, aB), (0, Vc.g)(null, null, Pc, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: cB => "panningSensibility" in cB,
              get: cB => cB.panningSensibility,
              set: (cB, Bc) => {
                cB.panningSensibility = Bc
              }
            },
            metadata: lc
          }, Yc, Lc), lc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lc
          })
        })(), cB.MinimumRadiusForPinch = .001, cB
      })();
    pc.e.ArcRotateCameraPointersInput = Yc;
    var Lc = nc(38221);
    let gB = (() => {
      var cB;
      let Bc, nc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec = [],
        tB = [],
        Sc = [],
        yB = [],
        zB = [],
        pc = [],
        aB = [],
        lc = [],
        Yc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [];
      return cB = class {
        constructor() {
          this.camera = (0, Vc.k)(this, ec), this.keysUp = (0, Vc.k)(this, tB, [38]), this.keysDown = ((0, Vc.k)(this, Sc), (0, Vc.k)(this, yB, [40])), this.keysLeft = ((0, Vc.k)(this, zB), (0, Vc.k)(this, pc, [37])), this.keysRight = ((0, Vc.k)(this, aB), (0, Vc.k)(this, lc, [39])), this.keysReset = ((0, Vc.k)(this, Yc), (0, Vc.k)(this, gB, [220])), this.keysZoomIn = ((0, Vc.k)(this, Uc), (0, Vc.k)(this, bB, [187, 107])), this.keysZoomOut = ((0, Vc.k)(this, Zc), (0, Vc.k)(this, Qc, [189, 109])), this.panningSensibility = ((0, Vc.k)(this, Cc), (0, Vc.k)(this, vB, 50)), this.zoomingSensibility = ((0, Vc.k)(this, Dc), (0, Vc.k)(this, Nc, 25)), this.angularSpeed = ((0, Vc.k)(this, Ec), (0, Vc.k)(this, oc, .01)), this._useAltToZoom = ((0, Vc.k)(this, Wc), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new uc.m, this._panDirection = new uc.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(cB) {
          this._useAltToZoom = cB, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const cB = this.camera.movement.input,
            Bc = cB.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Bc ? cB.inputMap.splice(cB.inputMap.indexOf(Bc), 1) : this._useAltToZoom && !Bc && cB.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(cB) {
          cB = hc.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.knc(), this._engine = this._scene.RV(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Bc => {
            const nc = Bc.event;
            if (!nc.metaKey)
              if (Bc.type === Lc.c.KEYDOWN) {
                if (this._ctrlPressed = nc.ctrlKey, this._altPressed = nc.altKey, -1 !== this.keysUp.indexOf(nc.keyCode) || -1 !== this.keysDown.indexOf(nc.keyCode) || -1 !== this.keysLeft.indexOf(nc.keyCode) || -1 !== this.keysRight.indexOf(nc.keyCode) || -1 !== this.keysReset.indexOf(nc.keyCode) || -1 !== this.keysZoomIn.indexOf(nc.keyCode) || -1 !== this.keysZoomOut.indexOf(nc.keyCode)) {
                  -1 === this._keys.indexOf(nc.keyCode) && this._keys.push(nc.keyCode), nc.preventDefault && (cB || nc.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(nc.keyCode) || -1 !== this.keysDown.indexOf(nc.keyCode) || -1 !== this.keysLeft.indexOf(nc.keyCode) || -1 !== this.keysRight.indexOf(nc.keyCode) || -1 !== this.keysReset.indexOf(nc.keyCode) || -1 !== this.keysZoomIn.indexOf(nc.keyCode) || -1 !== this.keysZoomOut.indexOf(nc.keyCode)) {
              const Bc = this._keys.indexOf(nc.keyCode);
              Bc >= 0 && this._keys.splice(Bc, 1), nc.preventDefault && (cB || nc.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const cB = this.camera,
              Bc = cB.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const nc = this._rotateDirection.set(0, 0),
              Vc = this._panDirection.set(0, 0);
            let Ic = 0,
              rB = 0;
            for (let uc = 0; uc < this._keys.length; uc++) {
              const sc = this._keys[uc];
              if (this._keyboardConditions.key = sc, -1 === this.keysReset.indexOf(sc)) {
                const cB = Bc.resolveInteraction("keyboard", this._keyboardConditions);
                if (cB)
                  if ("pan" === cB.interaction) rB = Math.max(rB, cB.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(sc) ? Vc.x -= 1 : -1 !== this.keysRight.indexOf(sc) ? Vc.x += 1 : -1 !== this.keysUp.indexOf(sc) ? Vc.y += 1 : -1 !== this.keysDown.indexOf(sc) && (Vc.y -= 1);
                  else if ("zoom" === cB.interaction) {
                  const nc = cB.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(sc) || -1 !== this.keysZoomIn.indexOf(sc) ? Bc.handlers.zoom(nc) : -1 === this.keysDown.indexOf(sc) && -1 === this.keysZoomOut.indexOf(sc) || Bc.handlers.zoom(-nc)
                } else "rotate" === cB.interaction && (Ic = Math.max(Ic, cB.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(sc) ? nc.x -= 1 : -1 !== this.keysRight.indexOf(sc) ? nc.x += 1 : -1 !== this.keysUp.indexOf(sc) ? nc.y -= 1 : -1 !== this.keysDown.indexOf(sc) && (nc.y += 1))
              } - 1 !== this.keysReset.indexOf(sc) && cB.useInputToRestoreState && cB.restoreState()
            }
            0 === nc.x && 0 === nc.y || (nc.normalize().scaleInPlace(Ic), Bc.handlers.rotate(nc.x, nc.y)), 0 === Vc.x && 0 === Vc.y || (Vc.normalize().scaleInPlace(rB), Bc.handlers.pan(Vc.x, Vc.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const uc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], sc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.M)()], Tc = [(0, Ic.M)()], fc = [(0, Ic.M)()], mB = [(0, Ic.M)()], (0, Vc.g)(cB, null, mB, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAltToZoom" in cB,
            get: cB => cB.useAltToZoom
          },
          metadata: uc
        }, null, ec), (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysUp" in cB,
            get: cB => cB.keysUp,
            set: (cB, Bc) => {
              cB.keysUp = Bc
            }
          },
          metadata: uc
        }, tB, Sc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysDown" in cB,
            get: cB => cB.keysDown,
            set: (cB, Bc) => {
              cB.keysDown = Bc
            }
          },
          metadata: uc
        }, yB, zB), (0, Vc.g)(null, null, rB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysLeft" in cB,
            get: cB => cB.keysLeft,
            set: (cB, Bc) => {
              cB.keysLeft = Bc
            }
          },
          metadata: uc
        }, pc, aB), (0, Vc.g)(null, null, sc, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysRight" in cB,
            get: cB => cB.keysRight,
            set: (cB, Bc) => {
              cB.keysRight = Bc
            }
          },
          metadata: uc
        }, lc, Yc), (0, Vc.g)(null, null, Mc, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysReset" in cB,
            get: cB => cB.keysReset,
            set: (cB, Bc) => {
              cB.keysReset = Bc
            }
          },
          metadata: uc
        }, gB, Uc), (0, Vc.g)(null, null, Pc, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysZoomIn" in cB,
            get: cB => cB.keysZoomIn,
            set: (cB, Bc) => {
              cB.keysZoomIn = Bc
            }
          },
          metadata: uc
        }, bB, Zc), (0, Vc.g)(null, null, qB, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: cB => "keysZoomOut" in cB,
            get: cB => cB.keysZoomOut,
            set: (cB, Bc) => {
              cB.keysZoomOut = Bc
            }
          },
          metadata: uc
        }, Qc, Cc), (0, Vc.g)(null, null, Oc, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: cB => "panningSensibility" in cB,
            get: cB => cB.panningSensibility,
            set: (cB, Bc) => {
              cB.panningSensibility = Bc
            }
          },
          metadata: uc
        }, vB, Dc), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: cB => "zoomingSensibility" in cB,
            get: cB => cB.zoomingSensibility,
            set: (cB, Bc) => {
              cB.zoomingSensibility = Bc
            }
          },
          metadata: uc
        }, Nc, Ec), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: cB => "angularSpeed" in cB,
            get: cB => cB.angularSpeed,
            set: (cB, Bc) => {
              cB.angularSpeed = Bc
            }
          },
          metadata: uc
        }, oc, Wc), uc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uc
        })
      })(), cB
    })();
    pc.e.ArcRotateCameraKeyboardMoveInput = gB;
    var Uc = nc(36329),
      bB = nc(38227);
    let Zc = (() => {
      var cB;
      let Bc, nc, rB, Mc = [],
        Pc = [],
        Oc = [],
        fc = [],
        mB = [],
        ec = [];
      return cB = class {
        constructor() {
          this.wheelPrecision = (0, Vc.k)(this, Mc, 3), this.zoomToMouseLocation = ((0, Vc.k)(this, Pc), (0, Vc.k)(this, Oc, !1)), this.wheelDeltaPercentage = ((0, Vc.k)(this, fc), (0, Vc.k)(this, mB, 0)), this.customComputeDeltaFromMouseWheel = ((0, Vc.k)(this, ec), null), this._viewOffset = new uc.p(0, 0, 0), this._globalOffset = new uc.p(0, 0, 0), this._inertialPanning = uc.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(cB, Bc) {
          let nc;
          const Vc = .01 * cB * this.wheelDeltaPercentage * Bc;
          return nc = cB > 0 ? Vc / (1 + this.wheelDeltaPercentage) : Vc * (1 + this.wheelDeltaPercentage), nc
        }
        attachControl(cB) {
          cB = hc.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = Bc => {
            if (Bc.type !== qB.d.POINTERWHEEL) return;
            const nc = Bc.event;
            let Vc;
            const Ic = nc.deltaMode === bB.c.DOM_DELTA_LINE ? 40 : 1,
              rB = -nc.deltaY * Ic;
            if (this.customComputeDeltaFromMouseWheel) Vc = this.customComputeDeltaFromMouseWheel(rB, this, nc);
            else if (this.wheelDeltaPercentage) {
              if (Vc = this._computeDeltaFromMouseWheelLegacyEvent(rB, this.camera.radius), Vc > 0) {
                const cB = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Bc = this.camera.radius,
                  nc = cB + Vc;
                for (let Vc = 0; Vc < 20 && !(Bc <= nc) && !(Math.abs(nc * this.camera.inertia) < .001); Vc++) Bc -= nc, nc *= this.camera.inertia;
                Bc = (0, sc.Clamp)(Bc, 0, Number.MAX_VALUE), Vc = this._computeDeltaFromMouseWheelLegacyEvent(rB, Bc)
              }
            } else {
              const cB = this.camera.movement.input.getEntry("wheel", "zoom");
              Vc = rB * (cB?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Vc && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Vc)) : this.camera.movement.zoomAccumulatedPixels += Vc), nc.preventDefault && (cB || nc.preventDefault())
          }, this._observer = this.camera.knc()._inputManager._addCameraPointerObserver(this._wheel, qB.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.orc(0)
        }
        detachControl() {
          this._observer && (this.camera.knc()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const cB = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(cB.inertialAlphaOffset) + Math.abs(cB.inertialBetaOffset) + Math.abs(cB.inertialRadiusOffset)) {
            this._updateHitPlane(), cB.target.addInPlace(this._inertialPanning), cB.radius -= this._zoomToMouseRadiusOffset;
            const Bc = cB.movement.getFrameIndependentDecay(cB.inertia);
            this._inertialPanning.scaleInPlace(Bc), this._zoomToMouseRadiusOffset *= Bc, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Tc.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const cB = this.camera,
            Bc = cB.target.subtract(cB.position);
          this._hitPlane = Uc.d.FromPositionAndNormal(cB.target, Bc)
        }
        _getPosition() {
          const cB = this.camera,
            Bc = cB.knc(),
            nc = Bc.createPickingRay(Bc.pointerX, Bc.pointerY, uc.d.Identity(), cB, !1);
          0 === cB.targetScreenOffset.x && 0 === cB.targetScreenOffset.y || (this._viewOffset.set(cB.targetScreenOffset.x, cB.targetScreenOffset.y, 0), cB.getViewMatrix().invertToRef(cB._cameraTransformMatrix), this._globalOffset = uc.p.TransformNormal(this._viewOffset, cB._cameraTransformMatrix), nc.origin.addInPlace(this._globalOffset));
          let Vc = 0;
          return this._hitPlane && (Vc = nc.intersectsPlane(this._hitPlane) ?? 0), nc.origin.addInPlace(nc.direction.scaleInPlace(Vc))
        }
        _zoomToMouse(cB) {
          const Bc = this.camera,
            nc = 1 - Bc.inertia,
            Vc = Bc.movement.getFrameIndependentInputScale(Bc.inertia);
          if (Bc.lowerRadiusLimit) {
            const Ic = Bc.lowerRadiusLimit ?? 0;
            Bc.radius - (this._zoomToMouseRadiusOffset + cB * Vc) / nc < Ic && (cB = ((Bc.radius - Ic) * nc - this._zoomToMouseRadiusOffset) / Vc)
          }
          if (Bc.upperRadiusLimit) {
            const Ic = Bc.upperRadiusLimit ?? 0;
            Bc.radius - (this._zoomToMouseRadiusOffset + cB * Vc) / nc > Ic && (cB = ((Bc.radius - Ic) * nc - this._zoomToMouseRadiusOffset) / Vc)
          }
          const Ic = cB / nc / Bc.radius,
            rB = this._getPosition(),
            sc = uc.i.KV[6];
          rB.subtractToRef(Bc.target, sc), sc.scaleInPlace(Ic), sc.scaleInPlace(nc), sc.scaleInPlace(Vc), this._inertialPanning.addInPlace(sc), this._zoomToMouseRadiusOffset += cB * Vc
        }
        _zeroIfClose(cB) {
          Math.abs(cB.x) < Tc.c && (cB.x = 0), Math.abs(cB.y) < Tc.c && (cB.y = 0), Math.abs(cB.z) < Tc.c && (cB.z = 0)
        }
      }, (() => {
        const uc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelPrecision" in cB,
            get: cB => cB.wheelPrecision,
            set: (cB, Bc) => {
              cB.wheelPrecision = Bc
            }
          },
          metadata: uc
        }, Mc, Pc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: cB => "zoomToMouseLocation" in cB,
            get: cB => cB.zoomToMouseLocation,
            set: (cB, Bc) => {
              cB.zoomToMouseLocation = Bc
            }
          },
          metadata: uc
        }, Oc, fc), (0, Vc.g)(null, null, rB, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: cB => "wheelDeltaPercentage" in cB,
            get: cB => cB.wheelDeltaPercentage,
            set: (cB, Bc) => {
              cB.wheelDeltaPercentage = Bc
            }
          },
          metadata: uc
        }, mB, ec), uc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uc
        })
      })(), cB
    })();
    pc.e.ArcRotateCameraMouseWheelInput = Zc;
    var Qc, Cc, vB = nc(37953);
    class Dc extends pc.f {
      constructor(cB) {
        super(cB)
      }
      addMouseWheel() {
        return this.add(new Zc), this
      }
      addPointers() {
        return this.add(new Yc), this
      }
      addKeyboard() {
        return this.add(new gB), this
      }
    }(Qc = Dc.prototype).addVRDeviceOrientation ?? (Qc.addVRDeviceOrientation = (0, vB.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Cc = Dc.prototype).addGamepad ?? (Cc.addGamepad = (0, vB.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var Nc = nc(35799),
      Ec = nc(38270),
      oc = nc(38273);
    class Wc extends Ec.d {
      constructor(cB, Bc, nc) {
        super(cB, Bc, nc), this.input = new oc.c({
          pan: (cB, Bc) => {
            this.panAccumulatedPixels.x += cB, this.panAccumulatedPixels.y += Bc
          },
          rotate: (cB, Bc) => {
            this.rotationAccumulatedPixels.x += cB, this.rotationAccumulatedPixels.y += Bc
          },
          zoom: cB => {
            this.zoomAccumulatedPixels += cB
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

    function wc(cB, Bc) {
      return isNaN(cB) ? Bc : cB
    }
    let kB = (() => {
        var cB;
        let Bc, nc, Mc, qB, Oc, mB, ec, pc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc, vB, Nc, Ec, oc, kB, Xc, Hc, Fc, Jc, jB, Rc = zB.h,
          iB = [],
          Kc = [],
          xB = [],
          dc = [],
          Ac = [],
          Gc = [],
          cn = [],
          BB = [],
          nB = [],
          VB = [],
          IB = [],
          rn = [],
          uB = [],
          sB = [],
          MB = [],
          PB = [],
          qn = [],
          OB = [],
          TB = [],
          fB = [],
          mn = [],
          eB = [],
          tn = [],
          SB = [],
          yn = [],
          zn = [],
          pB = [],
          hB = [],
          an = [],
          lB = [],
          YB = [],
          LB = [],
          gn = [],
          UB = [],
          bn = [],
          ZB = [],
          QB = [],
          CB = [],
          vn = [],
          DB = [],
          NB = [],
          EB = [],
          oB = [],
          WB = [],
          wB = [],
          kn = [],
          XB = [];
        return cB = class extends Rc {
          get target() {
            return this.LIc
          }
          set target(cB) {
            this.setTarget(cB)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(cB) {
            cB && this.setTarget(cB)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(cB) {
            this.setPosition(cB)
          }
          set upVector(cB) {
            this._upToYMatrix || (this._yToUpMatrix = new uc.d, this._upToYMatrix = new uc.d, this._upVector = uc.p.Zero()), cB.normalize(), this._upVector.qqc(cB), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            uc.d.RotationAlignToRef(uc.p.UpReadOnly, this._upVector, this._yToUpMatrix), uc.d.RotationAlignToRef(this._upVector, uc.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const cB = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(cB) < this._rotationEpsilon ? 0 : cB
          }
          set inertialAlphaOffset(cB) {
            this._inertialAlphaOffset = cB, 0 === cB && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const cB = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(cB) < this._rotationEpsilon ? 0 : cB
          }
          set inertialBetaOffset(cB) {
            this._inertialBetaOffset = cB, 0 === cB && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const cB = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(cB) < this._rotationEpsilon ? 0 : cB
          }
          set inertialRadiusOffset(cB) {
            this._inertialRadiusOffset = cB, 0 === cB && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(cB) {
            this._panningInertia = cB, this.movement && (this.movement.panInertia = cB)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(cB) {
            this._inertia = cB, this.movement && (this.movement.rotationInertia = cB, this.movement.zoomInertia = cB)
          }
          get angularSensibilityX() {
            const cB = this.inputs.attached.pointers;
            return cB ? cB.angularSensibilityX : 0
          }
          set angularSensibilityX(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.angularSensibilityX = cB)
          }
          get angularSensibilityY() {
            const cB = this.inputs.attached.pointers;
            return cB ? cB.angularSensibilityY : 0
          }
          set angularSensibilityY(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.angularSensibilityY = cB)
          }
          get pinchPrecision() {
            const cB = this.inputs.attached.pointers;
            return cB ? cB.pinchPrecision : 0
          }
          set pinchPrecision(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.pinchPrecision = cB)
          }
          get pinchDeltaPercentage() {
            const cB = this.inputs.attached.pointers;
            return cB ? cB.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.pinchDeltaPercentage = cB)
          }
          get useNaturalPinchZoom() {
            const cB = this.inputs.attached.pointers;
            return !!cB && cB.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.useNaturalPinchZoom = cB)
          }
          get panningSensibility() {
            const cB = this.inputs.attached.pointers;
            return cB ? cB.panningSensibility : 0
          }
          set panningSensibility(cB) {
            const Bc = this.inputs.attached.pointers;
            Bc && (Bc.panningSensibility = cB)
          }
          get keysUp() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysUp : []
          }
          set keysUp(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysUp = cB)
          }
          get keysDown() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysDown : []
          }
          set keysDown(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysDown = cB)
          }
          get keysLeft() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysLeft : []
          }
          set keysLeft(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysLeft = cB)
          }
          get keysRight() {
            const cB = this.inputs.attached.keyboard;
            return cB ? cB.keysRight : []
          }
          set keysRight(cB) {
            const Bc = this.inputs.attached.keyboard;
            Bc && (Bc.keysRight = cB)
          }
          get wheelPrecision() {
            const cB = this.inputs.attached.mousewheel;
            return cB ? cB.wheelPrecision : 0
          }
          set wheelPrecision(cB) {
            const Bc = this.inputs.attached.mousewheel;
            Bc && (Bc.wheelPrecision = cB)
          }
          get zoomToMouseLocation() {
            const cB = this.inputs.attached.mousewheel;
            return !!cB && cB.zoomToMouseLocation
          }
          set zoomToMouseLocation(cB) {
            const Bc = this.inputs.attached.mousewheel;
            Bc && (Bc.zoomToMouseLocation = cB)
          }
          get wheelDeltaPercentage() {
            const cB = this.inputs.attached.mousewheel;
            return cB ? cB.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(cB) {
            const Bc = this.inputs.attached.mousewheel;
            Bc && (Bc.wheelDeltaPercentage = cB)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(cB) {
            this._useCtrlForPanningInternal = cB;
            const Bc = this.movement.input,
              nc = Bc.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !cB && nc ? Bc.inputMap.splice(Bc.inputMap.indexOf(nc), 1) : cB && !nc && Bc.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Vc = Bc.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !cB && Vc ? Bc.inputMap.splice(Bc.inputMap.indexOf(Vc), 1) : cB && !Vc && Bc.addEntry({
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
          set _panningMouseButton(cB) {
            this._panningMouseButtonInternal = cB;
            const Bc = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Bc && (Bc.button = cB)
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
          set useBouncingBehavior(cB) {
            cB !== this.useBouncingBehavior && (cB ? (this._bouncingBehavior = new tB, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(cB) {
            cB !== this.useFramingBehavior && (cB ? (this._framingBehavior = new Sc, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(cB) {
            cB !== this.useAutoRotationBehavior && (cB ? (this._autoRotationBehavior = new fc, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(cB, Bc, nc, Ic, sc, Mc) {
            var Pc;
            let qB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(cB, uc.p.Zero(), Mc, qB), Pc = this, this.alpha = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, void 0)), this.beta = ((0, Vc.k)(this, xB), (0, Vc.k)(this, dc, void 0)), this.radius = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, void 0)), this.LIc = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, void 0)), this._targetHost = ((0, Vc.k)(this, IB), (0, Vc.k)(this, rn, void 0)), this._upToYMatrix = (0, Vc.k)(this, uB), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Vc.k)(this, sB, null), this.upperAlphaLimit = ((0, Vc.k)(this, MB), (0, Vc.k)(this, PB, null)), this.lowerBetaLimit = ((0, Vc.k)(this, qn), (0, Vc.k)(this, OB, .01)), this.upperBetaLimit = ((0, Vc.k)(this, TB), (0, Vc.k)(this, fB, Math.PI - .01)), this.lowerRadiusLimit = ((0, Vc.k)(this, mn), (0, Vc.k)(this, eB, null)), this.upperRadiusLimit = ((0, Vc.k)(this, tn), (0, Vc.k)(this, SB, null)), this.lowerTargetYLimit = ((0, Vc.k)(this, yn), (0, Vc.k)(this, zn, -1 / 0)), this.inertialPanningX = ((0, Vc.k)(this, pB), (0, Vc.k)(this, hB, 0)), this.inertialPanningY = ((0, Vc.k)(this, an), (0, Vc.k)(this, lB, 0)), this.pinchToPanMaxDistance = ((0, Vc.k)(this, YB), (0, Vc.k)(this, LB, 20)), this.panningDistanceLimit = ((0, Vc.k)(this, gn), (0, Vc.k)(this, UB, null)), this.panningOriginTarget = ((0, Vc.k)(this, bn), (0, Vc.k)(this, ZB, uc.p.Zero())), this._panningInertia = ((0, Vc.k)(this, QB), .9), this._inertia = .9, this.zoomOnFactor = (0, Vc.k)(this, CB, 1), this.targetScreenOffset = ((0, Vc.k)(this, vn), (0, Vc.k)(this, DB, uc.m.Zero())), this.allowUpsideDown = ((0, Vc.k)(this, NB), (0, Vc.k)(this, EB, !0)), this.useInputToRestoreState = ((0, Vc.k)(this, oB), (0, Vc.k)(this, WB, !0)), this.restoreStateInterpolationFactor = ((0, Vc.k)(this, wB), (0, Vc.k)(this, kn, 0)), this._currentInterpolationFactor = ((0, Vc.k)(this, XB), 0), this._viewMatrix = new uc.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new uc.p(1, 1, 0), this._transformedDirection = new uc.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new rB.c, this.checkCollisions = !1, this.collisionRadius = new uc.p(.5, .5, .5), this._previousPosition = uc.p.Zero(), this._collisionVelocity = uc.p.Zero(), this._newPosition = uc.p.Zero(), this._computationVector = uc.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new uc.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new uc.m(NaN, NaN), this._onCollisionPositionChange = function(cB, Bc) {
              let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              nc ? (Pc.setPosition(Bc), Pc.SB && Pc.SB(nc)) : Pc._previousPosition.qqc(Pc._position);
              const Vc = Math.cos(Pc.alpha),
                Ic = Math.sin(Pc.alpha),
                rB = Math.cos(Pc.beta);
              let uc = Math.sin(Pc.beta);
              0 === uc && (uc = 1e-4);
              const sc = Pc._getTargetPosition();
              Pc._computationVector.puc(Pc.radius * Vc * uc, Pc.radius * rB, Pc.radius * Ic * uc), sc.addToRef(Pc._computationVector, Pc._newPosition), Pc._position.qqc(Pc._newPosition);
              let Mc = Pc.upVector;
              Pc.allowUpsideDown && Pc.beta < 0 && (Mc = Mc.clone(), Mc = Mc.Ou()), Pc._computeViewMatrix(Pc._position, sc, Mc), Pc._viewMatrix.addAtIndex(12, Pc.targetScreenOffset.x), Pc._viewMatrix.addAtIndex(13, Pc.targetScreenOffset.y), Pc._collisionTriggered = !1
            }, this.LIc = uc.p.Zero(), sc && this.setTarget(sc), this.alpha = Bc, this.beta = nc, this.radius = Ic, this.getViewMatrix(), this.inputs = new Dc(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Wc(this.knc(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.LIc = new uc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = uc.m.Zero()
          }
          _updateCache(cB) {
            cB || super._updateCache(), this._cache.LIc.qqc(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.qqc(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const cB = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? cB.addToRef(this._targetBoundingCenter, this.LIc) : this.LIc.qqc(cB)
            }
            const cB = this._getLockedTargetPosition();
            return cB || this.LIc
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Tc.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              rB = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != rB ? this._currentInterpolationFactor = rB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = wc(cB, this._goalAlpha), this._goalBeta = wc(Bc, this._goalBeta), this._goalRadius = wc(nc, this._goalRadius), this._goalTarget.set(wc(Vc.x, this._goalTarget.x), wc(Vc.y, this._goalTarget.y), wc(Vc.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(wc(Ic.x, this._goalTargetScreenOffset.x), wc(Ic.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, sc.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, sc.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, sc.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, sc.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.LIc.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(cB, Bc) {
            let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Ic = arguments;
            Bc = hc.g.BackCompatCameraNoPreventDefault(Ic), this._useCtrlForPanning = nc, this._panningMouseButton = Vc, "boolean" === typeof Ic[0] && (Ic.length > 1 && (this._useCtrlForPanning = Ic[1]), Ic.length > 2 && (this._panningMouseButton = Ic[2])), this.inputs.attachElement(Bc), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(cB, Bc, nc) {
            const Vc = this.invertRotation ? -1 : 1;
            let Ic = cB * this._calculateHandednessMultiplier();
            this.beta < 0 && (Ic *= -1), this.alpha += Ic * Vc, this.beta += Bc * Vc, this.radius -= nc
          }
          _applyPanDelta(cB, Bc) {
            const nc = uc.i.KV[0].puc(cB, Bc, Bc);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), nc.multiplyInPlace(this.panningAxis), uc.p.TransformNormalToRef(nc, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const cB = this.upVector,
                Bc = uc.p.CrossToRef(this._transformedDirection, cB, this._transformedDirection);
              uc.p.CrossToRef(cB, Bc, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.LIc);
                uc.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.LIc.qqc(this._transformedDirection)
              } else {
                if (this.parent) {
                  const cB = uc.i.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(cB), cB.transposeToRef(cB), uc.p.TransformCoordinatesToRef(this._transformedDirection, cB, this._transformedDirection)
                }
                this.LIc.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let cB = !1;
            this.movement.computeCurrentFrameDeltas();
            const Bc = this.movement.rotationDeltaCurrentFrame,
              nc = this.movement.zoomDeltaCurrentFrame,
              Vc = this.movement.panDeltaCurrentFrame;
            if (0 === Bc.x && 0 === Bc.y && 0 === nc && 0 === Vc.x && 0 === Vc.y || (cB = !0, 0 === Bc.x && 0 === Bc.y && 0 === nc || this._applyRotationAndZoomDelta(Bc.x, Bc.y, nc), 0 === Vc.x && 0 === Vc.y || this._applyPanDelta(Vc.x, Vc.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), cB = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Bc = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Bc && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Bc && (this.inertialPanningY = 0), cB = !0
            }
            if (cB) this.stopInterpolation();
            else if (this._isInterpolating) {
              let cB = !1;
              const Bc = this._scene.RV().getDeltaTime() / 1e3,
                nc = 1 - Math.pow(2, -Bc / this._currentInterpolationFactor),
                Vc = wc(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Bc = uc.i.KV[0].set(wc(this._goalTarget.x, this.LIc.x), wc(this._goalTarget.y, this.LIc.y), wc(this._goalTarget.z, this.LIc.z));
                uc.p.LerpToRef(this.target, Bc, nc, this.LIc), 10 * uc.p.Distance(this.target, Bc) / Vc < Tc.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.qqc(Bc), this.setTarget(this.target, !1, !0, !0)) : cB = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Bc = uc.f.RotationAlphaBetaGammaToRef(wc(this._goalAlpha, this.alpha), wc(this._goalBeta, this.beta), 0, uc.i.Quaternion[0]),
                  Vc = uc.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, uc.i.Quaternion[1]),
                  Ic = uc.f.SlerpToRef(Vc, Bc, nc, uc.i.Quaternion[2]);
                Ic.normalize();
                const rB = Ic.toAlphaBetaGammaToRef(uc.i.KV[0]);
                if (this.alpha = rB.x, this.beta = rB.y, Ic.isApprox(Bc, Tc.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const cB = Bc.toAlphaBetaGammaToRef(uc.i.KV[0]);
                  this.alpha = cB.x, this.beta = cB.y
                } else cB = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Vc - this.radius) * nc, Math.abs(Vc / this.radius - 1) < Tc.c ? (this._goalRadius = NaN, this.radius = Vc) : cB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Bc = uc.i.Vector2[0].set(wc(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), wc(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                uc.m.LerpToRef(this.targetScreenOffset, Bc, nc, this.targetScreenOffset), uc.m.Distance(this.targetScreenOffset, Bc) < Tc.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.qqc(Bc)) : cB = !0
              }
              this._isInterpolating = cB
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || uc.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const cB = this.alpha;
            var Bc, nc;
            this.alpha = function(cB) {
              let Bc = Math.PI / 2;
              return 0 === cB.x && 0 === cB.z || (Bc = Math.acos(cB.x / Math.sqrt(Math.pow(cB.x, 2) + Math.pow(cB.z, 2)))), cB.z < 0 && (Bc = 2 * Math.PI - Bc), Bc
            }(this._computationVector), this.beta = (Bc = this._computationVector.y, nc = this.radius, Math.acos(Bc / nc));
            const Vc = Math.round((cB - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Vc * Math.PI, this._checkLimits()
          }
          setPosition(cB) {
            this._position.equals(cB) || (this._position.qqc(cB), this.rebuildAnglesAndRadius())
          }
          setTarget(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Vc = this.overrideCloneAlphaBetaRadius ?? Vc, cB.computeWorldMatrix) Bc && cB.qVc ? this._targetBoundingCenter = cB.qVc().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, cB.computeWorldMatrix(), this._targetHost = cB, this.LIc = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Bc = cB,
                Vc = this._getTargetPosition();
              if (Vc && !nc && Vc.equals(Bc)) return;
              this._targetHost = null, this.LIc = Bc, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Vc || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const cB = Math.cos(this.alpha),
              Bc = Math.sin(this.alpha),
              nc = Math.cos(this.beta);
            let Vc = Math.sin(this.beta);
            0 === Vc && (Vc = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Ic = this._getTargetPosition();
            if (this._computationVector.puc(this.radius * cB * Vc, this.radius * nc, this.radius * Bc * Vc), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || uc.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Ic.addToRef(this._computationVector, this._newPosition), this.knc().collisionsEnabled && this.checkCollisions) {
              const cB = this.knc().collisionCoordinator;
              this._collider || (this._collider = cB.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, cB.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.qqc(this._newPosition);
              let cB = this.upVector;
              this.allowUpsideDown && Vc < 0 && (cB = cB.Ou()), this._computeViewMatrix(this._position, Ic, cB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.qqc(Ic), this._viewMatrix
          }
          zoomOn(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            cB = cB || this.knc().meshes;
            const nc = Pc.b.MinMax(cB);
            let Vc = this._calculateLowerRadiusFromModelBoundingSphere(nc.min, nc.max);
            if (Vc = Math.max(Math.min(Vc, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Vc * this.zoomOnFactor, this.mode === yB.e.ORTHOGRAPHIC_CAMERA) {
              const cB = this.knc().RV().getAspectRatio(this),
                Bc = Vc * this.zoomOnFactor / 2;
              this.orthoLeft = -Bc * cB, this.orthoRight = Bc * cB, this.orthoBottom = -Bc, this.orthoTop = Bc
            }
            this.focusOn({
              min: nc.min,
              max: nc.max,
              distance: Vc
            }, Bc)
          }
          focusOn(cB) {
            let Bc, nc, Vc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === cB.min) {
              const Vc = cB || this.knc().meshes;
              Bc = Pc.b.MinMax(Vc), nc = uc.p.Distance(Bc.min, Bc.max)
            } else {
              Bc = cB, nc = cB.distance
            }
            this.LIc = Pc.b.Center(Bc), Vc || (this.maxZ = 2 * nc)
          }
          createRigCamera(Bc, nc) {
            let Vc = 0;
            switch (this.cameraRigMode) {
              case yB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case yB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case yB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case yB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case yB.e.RIG_MODE_VR:
                Vc = this._cameraRigParams.stereoHalfAngle * (0 === nc ? 1 : -1);
                break;
              case yB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Vc = this._cameraRigParams.stereoHalfAngle * (0 === nc ? -1 : 1)
            }
            const Ic = new cB(Bc, this.alpha + Vc, this.beta, this.radius, this.LIc, this.knc());
            return Ic._cameraRigParams = {}, Ic.isRigCamera = !0, Ic.rigParent = this, Ic.upVector = this.upVector, Ic.mode = this.mode, Ic.orthoLeft = this.orthoLeft, Ic.orthoRight = this.orthoRight, Ic.orthoBottom = this.orthoBottom, Ic.orthoTop = this.orthoTop, Ic
          }
          _updateRigCameras() {
            const cB = this._rigCameras[0],
              Bc = this._rigCameras[1];
            switch (cB.beta = Bc.beta = this.beta, this.cameraRigMode) {
              case yB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case yB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case yB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case yB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case yB.e.RIG_MODE_VR:
                cB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Bc.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case yB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                cB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Bc.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Vc = uc.p.Distance(cB, Bc),
              Ic = this.knc().RV().getAspectRatio(this),
              rB = Math.tan(this.fov / 2),
              sc = rB * Ic,
              Mc = .5 * Vc * nc,
              Pc = Mc * Math.sqrt(1 + 1 / (sc * sc)),
              qB = Mc * Math.sqrt(1 + 1 / (rB * rB));
            return Math.max(Pc, qB)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], Mc = [(0, Ic.M)()], qB = [(0, Ic.M)()], Oc = [(0, Ic.L)("target")], mB = [(0, Ic.z)("targetHost")], ec = [(0, Ic.M)()], pc = [(0, Ic.M)()], aB = [(0, Ic.M)()], lc = [(0, Ic.M)()], Yc = [(0, Ic.M)()], Lc = [(0, Ic.M)()], gB = [(0, Ic.M)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], Qc = [(0, Ic.M)()], Cc = [(0, Ic.M)()], vB = [(0, Ic.M)()], Nc = [(0, Ic.M)()], Ec = [(0, Ic.L)()], oc = [(0, Ic.M)()], kB = [(0, Ic.M)()], Xc = [(0, Ic.M)()], Hc = [(0, Ic.J)()], Fc = [(0, Ic.M)()], Jc = [(0, Ic.M)()], jB = [(0, Ic.M)()], (0, Vc.g)(cB, null, ec, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "inertialAlphaOffset" in cB,
              get: cB => cB.inertialAlphaOffset
            },
            metadata: rB
          }, null, iB), (0, Vc.g)(cB, null, pc, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "inertialBetaOffset" in cB,
              get: cB => cB.inertialBetaOffset
            },
            metadata: rB
          }, null, iB), (0, Vc.g)(cB, null, aB, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "inertialRadiusOffset" in cB,
              get: cB => cB.inertialRadiusOffset
            },
            metadata: rB
          }, null, iB), (0, Vc.g)(cB, null, oc, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: cB => "panningInertia" in cB,
              get: cB => cB.panningInertia
            },
            metadata: rB
          }, null, iB), (0, Vc.g)(cB, null, kB, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: cB => "zoomToMouseLocation" in cB,
              get: cB => cB.zoomToMouseLocation
            },
            metadata: rB
          }, null, iB), (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "alpha" in cB,
              get: cB => cB.alpha,
              set: (cB, Bc) => {
                cB.alpha = Bc
              }
            },
            metadata: rB
          }, Kc, xB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: cB => "beta" in cB,
              get: cB => cB.beta,
              set: (cB, Bc) => {
                cB.beta = Bc
              }
            },
            metadata: rB
          }, dc, Ac), (0, Vc.g)(null, null, Mc, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: cB => "radius" in cB,
              get: cB => cB.radius,
              set: (cB, Bc) => {
                cB.radius = Bc
              }
            },
            metadata: rB
          }, Gc, cn), (0, Vc.g)(null, null, qB, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: cB => "overrideCloneAlphaBetaRadius" in cB,
              get: cB => cB.overrideCloneAlphaBetaRadius,
              set: (cB, Bc) => {
                cB.overrideCloneAlphaBetaRadius = Bc
              }
            },
            metadata: rB
          }, BB, nB), (0, Vc.g)(null, null, Oc, {
            kind: "field",
            name: "LIc",
            static: !1,
            private: !1,
            access: {
              has: cB => "LIc" in cB,
              get: cB => cB.LIc,
              set: (cB, Bc) => {
                cB.LIc = Bc
              }
            },
            metadata: rB
          }, VB, IB), (0, Vc.g)(null, null, mB, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: cB => "_targetHost" in cB,
              get: cB => cB._targetHost,
              set: (cB, Bc) => {
                cB._targetHost = Bc
              }
            },
            metadata: rB
          }, rn, uB), (0, Vc.g)(null, null, lc, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "lowerAlphaLimit" in cB,
              get: cB => cB.lowerAlphaLimit,
              set: (cB, Bc) => {
                cB.lowerAlphaLimit = Bc
              }
            },
            metadata: rB
          }, sB, MB), (0, Vc.g)(null, null, Yc, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "upperAlphaLimit" in cB,
              get: cB => cB.upperAlphaLimit,
              set: (cB, Bc) => {
                cB.upperAlphaLimit = Bc
              }
            },
            metadata: rB
          }, PB, qn), (0, Vc.g)(null, null, Lc, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "lowerBetaLimit" in cB,
              get: cB => cB.lowerBetaLimit,
              set: (cB, Bc) => {
                cB.lowerBetaLimit = Bc
              }
            },
            metadata: rB
          }, OB, TB), (0, Vc.g)(null, null, gB, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "upperBetaLimit" in cB,
              get: cB => cB.upperBetaLimit,
              set: (cB, Bc) => {
                cB.upperBetaLimit = Bc
              }
            },
            metadata: rB
          }, fB, mn), (0, Vc.g)(null, null, Uc, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "lowerRadiusLimit" in cB,
              get: cB => cB.lowerRadiusLimit,
              set: (cB, Bc) => {
                cB.lowerRadiusLimit = Bc
              }
            },
            metadata: rB
          }, eB, tn), (0, Vc.g)(null, null, bB, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "upperRadiusLimit" in cB,
              get: cB => cB.upperRadiusLimit,
              set: (cB, Bc) => {
                cB.upperRadiusLimit = Bc
              }
            },
            metadata: rB
          }, SB, yn), (0, Vc.g)(null, null, Zc, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "lowerTargetYLimit" in cB,
              get: cB => cB.lowerTargetYLimit,
              set: (cB, Bc) => {
                cB.lowerTargetYLimit = Bc
              }
            },
            metadata: rB
          }, zn, pB), (0, Vc.g)(null, null, Qc, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: cB => "inertialPanningX" in cB,
              get: cB => cB.inertialPanningX,
              set: (cB, Bc) => {
                cB.inertialPanningX = Bc
              }
            },
            metadata: rB
          }, hB, an), (0, Vc.g)(null, null, Cc, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: cB => "inertialPanningY" in cB,
              get: cB => cB.inertialPanningY,
              set: (cB, Bc) => {
                cB.inertialPanningY = Bc
              }
            },
            metadata: rB
          }, lB, YB), (0, Vc.g)(null, null, vB, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: cB => "pinchToPanMaxDistance" in cB,
              get: cB => cB.pinchToPanMaxDistance,
              set: (cB, Bc) => {
                cB.pinchToPanMaxDistance = Bc
              }
            },
            metadata: rB
          }, LB, gn), (0, Vc.g)(null, null, Nc, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: cB => "panningDistanceLimit" in cB,
              get: cB => cB.panningDistanceLimit,
              set: (cB, Bc) => {
                cB.panningDistanceLimit = Bc
              }
            },
            metadata: rB
          }, UB, bn), (0, Vc.g)(null, null, Ec, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: cB => "panningOriginTarget" in cB,
              get: cB => cB.panningOriginTarget,
              set: (cB, Bc) => {
                cB.panningOriginTarget = Bc
              }
            },
            metadata: rB
          }, ZB, QB), (0, Vc.g)(null, null, Xc, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: cB => "zoomOnFactor" in cB,
              get: cB => cB.zoomOnFactor,
              set: (cB, Bc) => {
                cB.zoomOnFactor = Bc
              }
            },
            metadata: rB
          }, CB, vn), (0, Vc.g)(null, null, Hc, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: cB => "targetScreenOffset" in cB,
              get: cB => cB.targetScreenOffset,
              set: (cB, Bc) => {
                cB.targetScreenOffset = Bc
              }
            },
            metadata: rB
          }, DB, NB), (0, Vc.g)(null, null, Fc, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: cB => "allowUpsideDown" in cB,
              get: cB => cB.allowUpsideDown,
              set: (cB, Bc) => {
                cB.allowUpsideDown = Bc
              }
            },
            metadata: rB
          }, EB, oB), (0, Vc.g)(null, null, Jc, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: cB => "useInputToRestoreState" in cB,
              get: cB => cB.useInputToRestoreState,
              set: (cB, Bc) => {
                cB.useInputToRestoreState = Bc
              }
            },
            metadata: rB
          }, WB, wB), (0, Vc.g)(null, null, jB, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: cB => "restoreStateInterpolationFactor" in cB,
              get: cB => cB.restoreStateInterpolationFactor,
              set: (cB, Bc) => {
                cB.restoreStateInterpolationFactor = Bc
              }
            },
            metadata: rB
          }, kn, XB), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Xc = !1;
    Xc || (Xc = !0, Mc.c.AddNodeConstructor("ArcRotateCamera", ((cB, Bc) => () => new kB(cB, 0, 0, 1, uc.p.Zero(), Bc))), (0, Nc.d)("BABYLON.ArcRotateCamera", kB))
  },
  38282: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc.d
    });
    var Vc = nc(38286);
    (0, Vc.f)()
  },
  38286: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      f: () => Tc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(35815),
      sc = nc(38291),
      Mc = nc(38255),
      Pc = nc(35799);
    let qB = (() => {
        var cB;
        let Bc, nc, Mc = sc.b,
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        return cB = class extends Mc {
          constructor(cB, Bc, nc, Ic) {
            super(cB, nc, Ic), this.groundColor = (0, Vc.k)(this, Pc, new uc.e(0, 0, 0)), this.direction = ((0, Vc.k)(this, qB), (0, Vc.k)(this, Oc, void 0)), (0, Vc.k)(this, Tc), this.direction = Bc || rB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(cB) {
            return this.direction = rB.p.Normalize(cB.subtract(rB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", nc.x, nc.y, nc.z, 0, Bc), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Bc), this
          }
          transferToNodeMaterialEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return cB.setFloat3(Bc, nc.x, nc.y, nc.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = rB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sc.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(cB, Bc) {
            cB["HEMILIGHT" + Bc] = !0
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.o)()], nc = [(0, Ic.L)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "groundColor" in cB,
              get: cB => cB.groundColor,
              set: (cB, Bc) => {
                cB.groundColor = Bc
              }
            },
            metadata: rB
          }, Pc, qB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: cB => "direction" in cB,
              get: cB => cB.direction,
              set: (cB, Bc) => {
                cB.direction = Bc
              }
            },
            metadata: rB
          }, Oc, Tc), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Oc = !1;

    function Tc() {
      Oc || (Oc = !0, Mc.c.AddNodeConstructor("Light_Type_3", ((cB, Bc) => () => new qB(cB, rB.p.Zero(), Bc))), (0, Pc.d)("BABYLON.HemisphericLight", qB))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);
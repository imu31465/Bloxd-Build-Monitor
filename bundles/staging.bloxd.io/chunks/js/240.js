export const id = 240;
export const ids = [240];
export const modules = {
  39929: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => ZB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36150),
      lB = dB(36126),
      JB = dB(36157),
      YB = dB(38980),
      gB = dB(39143),
      oB = dB(38930),
      kB = dB(38657),
      LB = dB(36132);
    class OB {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(BB) {
        this._idleRotationSpeed = BB
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(BB) {
        this._idleRotationWaitTime = BB
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(BB) {
        this._idleRotationSpinupTime = BB
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
      attach(BB) {
        this._attachedCamera = BB;
        const TB = this._attachedCamera.jU();
        this._onPrePointerObservableObserver = TB.onPrePointerObservable.add((BB => {
          BB.type !== oB.d.POINTERDOWN ? BB.type === oB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const BB = kB.d.Now;
          let TB = 0;
          null != this._lastFrameTime && (TB = BB - this._lastFrameTime), this._lastFrameTime = BB, this._applyUserInteraction();
          const dB = BB - this._lastInteractionTime - this._idleRotationWaitTime,
            VB = Math.max(Math.min(dB / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * VB, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (TB / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.jU();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(BB) {
        this._lastInteractionTime = BB ?? kB.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < LB.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let BB = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = kB.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    dB(39938);
    class DB {
      constructor() {
        this._easingMode = DB.EASINGMODE_EASEIN
      }
      setEasingMode(BB) {
        const TB = Math.min(Math.max(BB, 0), 2);
        this._easingMode = TB
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(BB) {
        throw new Error("You must implement this method")
      }
      ease(BB) {
        switch (this._easingMode) {
          case DB.EASINGMODE_EASEIN:
            return this.easeInCore(BB);
          case DB.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - BB)
        }
        return BB >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - BB))) + .5 : .5 * this.easeInCore(2 * BB)
      }
    }
    DB.EASINGMODE_EASEIN = 0, DB.EASINGMODE_EASEOUT = 1, DB.EASINGMODE_EASEINOUT = 2;
    var uB = dB(39945);
    class HB {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(BB) {
        if (this._autoTransitionRange === BB) return;
        this._autoTransitionRange = BB;
        const TB = this._attachedCamera;
        TB && (BB ? this._onMeshTargetChangedObserver = TB.onMeshTargetChangedObservable.add((BB => {
          if (BB && (BB.computeWorldMatrix(!0), BB.IK)) {
            const TB = BB.IK().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * TB, this.upperRadiusTransitionRange = .05 * TB
          }
        })) : this._onMeshTargetChangedObserver && TB.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB, this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(BB) {
        return !!this._attachedCamera && (this._attachedCamera.radius === BB && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(BB) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (HB.EasingFunction.setEasingMode(HB.EasingMode), this._radiusBounceTransition = uB.c.CreateAnimation("radius", uB.c.ANIMATIONTYPE_FLOAT, 60, HB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const TB = uB.c.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.jU(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        TB && this._animatables.push(TB)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    HB.EasingFunction = new class extends DB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = BB
      }
      easeInCore(BB) {
        const TB = Math.max(0, this.amplitude);
        return Math.pow(BB, 3) - BB * TB * Math.sin(3.141592653589793 * BB)
      }
    }(.3), HB.EasingMode = DB.EASINGMODE_EASEOUT;
    class EB {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new pB.e, this._mode = EB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(BB) {
        this._mode = BB
      }
      get mode() {
        return this._mode
      }
      set radiusScale(BB) {
        this._radiusScale = BB
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(BB) {
        this._positionScale = BB
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(BB) {
        this._defaultElevation = BB
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(BB) {
        this._elevationReturnTime = BB
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(BB) {
        this._elevationReturnWaitTime = BB
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(BB) {
        this._framingTime = BB
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB;
        const TB = this._attachedCamera.jU();
        EB.EasingFunction.setEasingMode(EB.EasingMode), this._onPrePointerObservableObserver = TB.onPrePointerObservable.add((BB => {
          BB.type !== oB.d.POINTERDOWN ? BB.type === oB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = BB.onMeshTargetChangedObservable.add((BB => {
          BB && BB.IK && this.zoomOnMesh(BB, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.jU();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const VB = BB.IK().boundingBox;
        this.zoomOnBoundingInfo(VB.minimumWorld, VB.maximumWorld, TB, dB)
      }
      zoomOnMeshHierarchy(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const VB = BB.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(VB.min, VB.max, TB, dB)
      }
      zoomOnMeshesHierarchy(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const VB = new lB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          yB = new lB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let pB = 0; pB < BB.length; pB++) {
          const TB = BB[pB].getHierarchyBoundingVectors(!0);
          lB.p.CheckExtends(TB.min, VB, yB), lB.p.CheckExtends(TB.max, VB, yB)
        }
        this.zoomOnBoundingInfo(VB, yB, TB, dB)
      }
      zoomOnBoundingInfo(BB, TB) {
        let dB, VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const pB = BB.y,
          JB = pB + (TB.y - pB) * this._positionScale,
          YB = TB.subtract(BB).scale(.5);
        if (!isFinite(JB)) return !1;
        if (VB) dB = new lB.p(0, JB, 0);
        else {
          const TB = BB.add(YB);
          dB = new lB.p(TB.x, JB, TB.z)
        }
        this._vectorTransition || (this._vectorTransition = uB.c.CreateAnimation("target", uB.c.ANIMATIONTYPE_VECTOR3, 60, EB.EasingFunction)), this._betaIsAnimating = !0;
        let gB = uB.c.TransitionTo("target", dB, this._attachedCamera, this._attachedCamera.jU(), 60, this._vectorTransition, this._framingTime);
        gB && this._animatables.push(gB);
        let oB = 0;
        if (this._mode === EB.FitFrustumSidesMode) {
          const dB = this._calculateLowerRadiusFromModelBoundingSphere(BB, TB);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = YB.length() + this._attachedCamera.minZ), oB = dB
        } else this._mode === EB.IgnoreBoundsSizeMode && (oB = this._calculateLowerRadiusFromModelBoundingSphere(BB, TB), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const dB = TB.subtract(BB).length();
          this._attachedCamera.panningSensibility = 5e3 / dB, this._attachedCamera.wheelPrecision = 100 / oB
        }
        return this._radiusTransition || (this._radiusTransition = uB.c.CreateAnimation("radius", uB.c.ANIMATIONTYPE_FLOAT, 60, EB.EasingFunction)), gB = uB.c.TransitionTo("radius", oB, this._attachedCamera, this._attachedCamera.jU(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), yB && yB(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), gB && this._animatables.push(gB), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(BB, TB) {
        const dB = this._attachedCamera;
        if (!dB) return 0;
        let VB = dB._calculateLowerRadiusFromModelBoundingSphere(BB, TB, this._radiusScale);
        return dB.lowerRadiusLimit && this._mode === EB.IgnoreBoundsSizeMode && (VB = VB < dB.lowerRadiusLimit ? dB.lowerRadiusLimit : VB), dB.upperRadiusLimit && (VB = VB > dB.upperRadiusLimit ? dB.upperRadiusLimit : VB), VB
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const BB = kB.d.Now - this._lastInteractionTime,
          TB = .5 * Math.PI - this._defaultElevation,
          dB = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > dB && BB >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = uB.c.CreateAnimation("beta", uB.c.ANIMATIONTYPE_FLOAT, 60, EB.EasingFunction));
          const BB = uB.c.TransitionTo("beta", TB, this._attachedCamera, this._attachedCamera.jU(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          BB && this._animatables.push(BB)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = kB.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    EB.EasingFunction = new class extends DB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = BB
      }
      easeInCore(BB) {
        return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, EB.EasingMode = DB.EASINGMODE_EASEINOUT, EB.IgnoreBoundsSizeMode = 0, EB.FitFrustumSidesMode = 1;
    var vB = dB(38974),
      mB = dB(38968),
      iB = dB(38992),
      NB = dB(38848);
    let tB = (() => {
        var BB;
        let TB, dB = [],
          pB = [];
        return BB = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, VB.h)(this, dB, [0, 1, 2]), this._pointerInput = (0, VB.h)(this, pB)
          }
          attachControl(BB) {
            BB = NB.h.BackCompatCameraNoPreventDefault(arguments);
            const TB = this.camera.PD(),
              dB = TB.getInputElement();
            let VB = 0,
              yB = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = pB => {
              const lB = pB.event,
                JB = "touch" === lB.pointerType;
              if (pB.type !== oB.d.POINTERMOVE && -1 === this.buttons.indexOf(lB.button)) return;
              const YB = lB.target;
              if (this._altKey = lB.altKey, this._ctrlKey = lB.ctrlKey, this._metaKey = lB.metaKey, this._shiftKey = lB.shiftKey, this._buttonsPressed = lB.buttons, TB.isPointerLock) {
                const BB = lB.movementX,
                  TB = lB.movementY;
                this.onTouch(null, BB, TB), this._pointA = null, this._pointB = null
              } else {
                if (pB.type !== oB.d.POINTERDOWN && pB.type !== oB.d.POINTERDOUBLETAP && JB && this._pointA?.pointerId !== lB.pointerId && this._pointB?.pointerId !== lB.pointerId) return;
                if (pB.type !== oB.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !JB)
                  if (pB.type === oB.d.POINTERDOUBLETAP) this.onDoubleTap(lB.pointerType, lB);
                  else if (pB.type !== oB.d.POINTERUP || this._currentMousePointerIdDown !== lB.pointerId && !JB) {
                  if (pB.type === oB.d.POINTERMOVE)
                    if (BB || lB.preventDefault(), this._pointA && null === this._pointB) {
                      const BB = lB.clientX - this._pointA.x,
                        TB = lB.clientY - this._pointA.y;
                      this._pointA.x = lB.clientX, this._pointA.y = lB.clientY, this.onTouch(this._pointA, BB, TB)
                    } else if (this._pointA && this._pointB) {
                    const BB = this._pointA.pointerId === lB.pointerId ? this._pointA : this._pointB;
                    BB.x = lB.clientX, BB.y = lB.clientY;
                    const TB = this._pointA.x - this._pointB.x,
                      dB = this._pointA.y - this._pointB.y,
                      JB = TB * TB + dB * dB,
                      YB = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: lB.pointerId,
                        type: pB.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, VB, JB, yB, YB), yB = YB, VB = JB
                  }
                } else {
                  try {
                    YB?.releasePointerCapture(lB.pointerId)
                  } catch (gB) {}
                  JB || (this._pointB = null), TB._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == lB.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == lB.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== VB || yB) && (this.onMultiTouch(this._pointA, this._pointB, VB, 0, yB, null), VB = 0, yB = null), this._currentMousePointerIdDown = -1, this.onButtonUp(lB), BB || lB.preventDefault()
                } else {
                  try {
                    YB?.setPointerCapture(lB.pointerId)
                  } catch (gB) {}
                  if (null === this._pointA) this._pointA = {
                    x: lB.clientX,
                    y: lB.clientY,
                    pointerId: lB.pointerId,
                    type: lB.pointerType,
                    button: lB.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: lB.clientX,
                      y: lB.clientY,
                      pointerId: lB.pointerId,
                      type: lB.pointerType,
                      button: lB.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || JB || (this._currentMousePointerIdDown = lB.pointerId), this.onButtonDown(lB), BB || (lB.preventDefault(), dB && dB.focus())
                }
              }
            }, this._observer = this.camera.jU()._inputManager._addCameraPointerObserver(this._pointerInput, oB.d.POINTERDOWN | oB.d.POINTERUP | oB.d.POINTERMOVE | oB.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, VB = 0, yB = null, this.onLostFocus()
            }, this._contextMenuBind = BB => this.onContextMenu(BB), dB && dB.addEventListener("contextmenu", this._contextMenuBind, !1);
            const pB = this.camera.jU().PD().getHostWindow();
            pB && NB.h.RegisterTopRootEvents(pB, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const BB = this.camera.jU().PD().getHostWindow();
              BB && NB.h.UnregisterTopRootEvents(BB, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.jU()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const BB = this.camera.jU().PD().getInputElement();
                BB && BB.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(BB, TB) {}
          onTouch(BB, TB, dB) {}
          onMultiTouch(BB, TB, dB, VB, yB, pB) {}
          onContextMenu(BB) {
            BB.preventDefault()
          }
          onButtonDown(BB) {}
          onButtonUp(BB) {}
          onLostFocus() {}
        }, (() => {
          const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          TB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, TB) => {
                BB.buttons = TB
              }
            },
            metadata: lB
          }, dB, pB), lB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lB
          })
        })(), BB
      })(),
      fB = (() => {
        var BB;
        let TB, dB, pB, lB = tB,
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        return BB = class extends lB {
          constructor() {
            super(...arguments), this.pinchZoom = (0, VB.h)(this, JB, !0), this.multiTouchPanning = ((0, VB.h)(this, YB), (0, VB.h)(this, gB, !0)), this.multiTouchPanAndZoom = ((0, VB.h)(this, oB), (0, VB.h)(this, kB, !0)), this._isPinching = ((0, VB.h)(this, LB), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(BB, TB) {}
          _computeMultiTouchPanning(BB, TB) {}
          onMultiTouch(BB, TB, dB, VB, yB, pB) {
            0 === dB && null === yB || 0 === VB && null === pB || (this.multiTouchPanAndZoom ? (this._computePinchZoom(dB, VB), this._computeMultiTouchPanning(yB, pB)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(dB, VB), this._isPinching = !0) : this._computeMultiTouchPanning(yB, pB)) : this.multiTouchPanning ? this._computeMultiTouchPanning(yB, pB) : this.pinchZoom && this._computePinchZoom(dB, VB))
          }
          onButtonUp(BB) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(lB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchZoom" in BB,
              get: BB => BB.pinchZoom,
              set: (BB, TB) => {
                BB.pinchZoom = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanning" in BB,
              get: BB => BB.multiTouchPanning,
              set: (BB, TB) => {
                BB.multiTouchPanning = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, VB.g)(null, null, pB, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanAndZoom" in BB,
              get: BB => BB.multiTouchPanAndZoom,
              set: (BB, TB) => {
                BB.multiTouchPanAndZoom = TB
              }
            },
            metadata: OB
          }, kB, LB), OB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          })
        })(), BB
      })(),
      sB = (() => {
        var BB;
        let TB, dB, pB, lB, JB, YB, gB, oB = fB,
          kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [],
          EB = [],
          vB = [],
          mB = [],
          iB = [],
          NB = [],
          tB = [],
          sB = [],
          MB = [];
        return BB = class extends oB {
          constructor() {
            super(...arguments), this.buttons = (0, VB.h)(this, kB, [0, 1, 2]), this.angularSensibilityX = ((0, VB.h)(this, LB), (0, VB.h)(this, OB, 1e3)), this.angularSensibilityY = ((0, VB.h)(this, DB), (0, VB.h)(this, uB, 1e3)), this.pinchPrecision = ((0, VB.h)(this, HB), (0, VB.h)(this, EB, 12)), this.pinchDeltaPercentage = ((0, VB.h)(this, vB), (0, VB.h)(this, mB, 0)), this.useNaturalPinchZoom = ((0, VB.h)(this, iB), (0, VB.h)(this, NB, !1)), this.panningSensibility = ((0, VB.h)(this, tB), (0, VB.h)(this, sB, 1e3)), this.pinchInwards = ((0, VB.h)(this, MB), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(BB, TB) {
            if (BB && TB) {
              const dB = TB.x - BB.x,
                VB = TB.y - BB.y,
                yB = this.camera.movement.input.getEntry("pointer", "pan"),
                pB = yB?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== pB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -dB * pB, this.camera.movement.panAccumulatedPixels.y += VB * pB)
            }
          }
          _computePinchZoom(TB, dB) {
            const VB = this.camera.radius || BB.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = VB * Math.sqrt(TB) / Math.sqrt(dB);
            else if (this.pinchDeltaPercentage) {
              const BB = .001 * (dB - TB) * VB * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            } else {
              const BB = (dB - TB) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            }
          }
          onTouch(BB, TB, dB) {
            const VB = this._activeEntry ?? (this.camera.PD().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (VB)
              if ("pan" === VB.interaction) {
                const BB = VB.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== BB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -TB * BB, this.camera.movement.panAccumulatedPixels.y += dB * BB)
              } else if ("rotate" === VB.interaction) {
              const BB = VB.eC ?? VB.sensitivity ?? 1 / this.angularSensibilityX,
                yB = VB.yG ?? VB.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -TB * BB, this.camera.movement.rotationAccumulatedPixels.y += -dB * yB
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(BB, TB, dB, VB, yB, pB) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(VB) - Math.sqrt(dB)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(BB, TB, dB, VB, yB, pB)
          }
          onButtonDown(BB) {
            this._pointerConditions.button = BB.button, this._pointerModifiers.ctrl = BB.ctrlKey, this._pointerModifiers.alt = BB.altKey, this._pointerModifiers.shift = BB.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(BB)
          }
          onButtonUp(BB) {
            this._activeEntry = null, super.onButtonUp(BB)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const fB = "function" === typeof Symbol && Symbol.metadata ? Object.create(oB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], lB = [(0, yB.W)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, TB) => {
                BB.buttons = TB
              }
            },
            metadata: fB
          }, kB, LB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityX" in BB,
              get: BB => BB.angularSensibilityX,
              set: (BB, TB) => {
                BB.angularSensibilityX = TB
              }
            },
            metadata: fB
          }, OB, DB), (0, VB.g)(null, null, pB, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityY" in BB,
              get: BB => BB.angularSensibilityY,
              set: (BB, TB) => {
                BB.angularSensibilityY = TB
              }
            },
            metadata: fB
          }, uB, HB), (0, VB.g)(null, null, lB, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchPrecision" in BB,
              get: BB => BB.pinchPrecision,
              set: (BB, TB) => {
                BB.pinchPrecision = TB
              }
            },
            metadata: fB
          }, EB, vB), (0, VB.g)(null, null, JB, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchDeltaPercentage" in BB,
              get: BB => BB.pinchDeltaPercentage,
              set: (BB, TB) => {
                BB.pinchDeltaPercentage = TB
              }
            },
            metadata: fB
          }, mB, iB), (0, VB.g)(null, null, YB, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "useNaturalPinchZoom" in BB,
              get: BB => BB.useNaturalPinchZoom,
              set: (BB, TB) => {
                BB.useNaturalPinchZoom = TB
              }
            },
            metadata: fB
          }, NB, tB), (0, VB.g)(null, null, gB, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningSensibility" in BB,
              get: BB => BB.panningSensibility,
              set: (BB, TB) => {
                BB.panningSensibility = TB
              }
            },
            metadata: fB
          }, sB, MB), fB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fB
          })
        })(), BB.MinimumRadiusForPinch = .001, BB
      })();
    iB.c.ArcRotateCameraPointersInput = sB;
    var MB = dB(38938);
    let zB = (() => {
      var BB;
      let TB, dB, pB, JB, YB, gB, oB, kB, LB, OB, DB, uB = [],
        HB = [],
        EB = [],
        vB = [],
        mB = [],
        iB = [],
        tB = [],
        fB = [],
        sB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [];
      return BB = class {
        constructor() {
          this.camera = (0, VB.h)(this, uB), this.keysUp = (0, VB.h)(this, HB, [38]), this.keysDown = ((0, VB.h)(this, EB), (0, VB.h)(this, vB, [40])), this.keysLeft = ((0, VB.h)(this, mB), (0, VB.h)(this, iB, [37])), this.keysRight = ((0, VB.h)(this, tB), (0, VB.h)(this, fB, [39])), this.keysReset = ((0, VB.h)(this, sB), (0, VB.h)(this, zB, [220])), this.keysZoomIn = ((0, VB.h)(this, wB), (0, VB.h)(this, UB, [187, 107])), this.keysZoomOut = ((0, VB.h)(this, FB), (0, VB.h)(this, KB, [189, 109])), this.panningSensibility = ((0, VB.h)(this, rB), (0, VB.h)(this, IB, 50)), this.zoomingSensibility = ((0, VB.h)(this, cB), (0, VB.h)(this, SB, 25)), this.angularSpeed = ((0, VB.h)(this, PB), (0, VB.h)(this, QB, .01)), this._useAltToZoom = ((0, VB.h)(this, RB), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new lB.l, this._panDirection = new lB.l
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(BB) {
          this._useAltToZoom = BB, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const BB = this.camera.movement.input,
            TB = BB.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && TB ? BB.inputMap.splice(BB.inputMap.indexOf(TB), 1) : this._useAltToZoom && !TB && BB.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(BB) {
          BB = NB.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.jU(), this._engine = this._scene.PD(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((TB => {
            const dB = TB.event;
            if (!dB.metaKey)
              if (TB.type === MB.e.KEYDOWN) {
                if (this._ctrlPressed = dB.ctrlKey, this._altPressed = dB.altKey, -1 !== this.keysUp.indexOf(dB.keyCode) || -1 !== this.keysDown.indexOf(dB.keyCode) || -1 !== this.keysLeft.indexOf(dB.keyCode) || -1 !== this.keysRight.indexOf(dB.keyCode) || -1 !== this.keysReset.indexOf(dB.keyCode) || -1 !== this.keysZoomIn.indexOf(dB.keyCode) || -1 !== this.keysZoomOut.indexOf(dB.keyCode)) {
                  -1 === this._keys.indexOf(dB.keyCode) && this._keys.push(dB.keyCode), dB.preventDefault && (BB || dB.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(dB.keyCode) || -1 !== this.keysDown.indexOf(dB.keyCode) || -1 !== this.keysLeft.indexOf(dB.keyCode) || -1 !== this.keysRight.indexOf(dB.keyCode) || -1 !== this.keysReset.indexOf(dB.keyCode) || -1 !== this.keysZoomIn.indexOf(dB.keyCode) || -1 !== this.keysZoomOut.indexOf(dB.keyCode)) {
              const TB = this._keys.indexOf(dB.keyCode);
              TB >= 0 && this._keys.splice(TB, 1), dB.preventDefault && (BB || dB.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              TB = BB.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const dB = this._rotateDirection.set(0, 0),
              VB = this._panDirection.set(0, 0);
            let yB = 0,
              pB = 0;
            for (let lB = 0; lB < this._keys.length; lB++) {
              const JB = this._keys[lB];
              if (this._keyboardConditions.key = JB, -1 === this.keysReset.indexOf(JB)) {
                const BB = TB.resolveInteraction("keyboard", this._keyboardConditions);
                if (BB)
                  if ("pan" === BB.interaction) pB = Math.max(pB, BB.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(JB) ? VB.x -= 1 : -1 !== this.keysRight.indexOf(JB) ? VB.x += 1 : -1 !== this.keysUp.indexOf(JB) ? VB.y += 1 : -1 !== this.keysDown.indexOf(JB) && (VB.y -= 1);
                  else if ("zoom" === BB.interaction) {
                  const dB = BB.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(JB) || -1 !== this.keysZoomIn.indexOf(JB) ? TB.handlers.zoom(dB) : -1 === this.keysDown.indexOf(JB) && -1 === this.keysZoomOut.indexOf(JB) || TB.handlers.zoom(-dB)
                } else "rotate" === BB.interaction && (yB = Math.max(yB, BB.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(JB) ? dB.x -= 1 : -1 !== this.keysRight.indexOf(JB) ? dB.x += 1 : -1 !== this.keysUp.indexOf(JB) ? dB.y -= 1 : -1 !== this.keysDown.indexOf(JB) && (dB.y += 1))
              } - 1 !== this.keysReset.indexOf(JB) && BB.useInputToRestoreState && BB.restoreState()
            }
            0 === dB.x && 0 === dB.y || (dB.normalize().scaleInPlace(yB), TB.handlers.rotate(dB.x, dB.y)), 0 === VB.x && 0 === VB.y || (VB.normalize().scaleInPlace(pB), TB.handlers.pan(VB.x, VB.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.W)()], LB = [(0, yB.W)()], OB = [(0, yB.W)()], DB = [(0, yB.W)()], (0, VB.g)(BB, null, DB, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAltToZoom" in BB,
            get: BB => BB.useAltToZoom
          },
          metadata: lB
        }, null, uB), (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, TB) => {
              BB.keysUp = TB
            }
          },
          metadata: lB
        }, HB, EB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, TB) => {
              BB.keysDown = TB
            }
          },
          metadata: lB
        }, vB, mB), (0, VB.g)(null, null, pB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, TB) => {
              BB.keysLeft = TB
            }
          },
          metadata: lB
        }, iB, tB), (0, VB.g)(null, null, JB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, TB) => {
              BB.keysRight = TB
            }
          },
          metadata: lB
        }, fB, sB), (0, VB.g)(null, null, YB, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysReset" in BB,
            get: BB => BB.keysReset,
            set: (BB, TB) => {
              BB.keysReset = TB
            }
          },
          metadata: lB
        }, zB, wB), (0, VB.g)(null, null, gB, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomIn" in BB,
            get: BB => BB.keysZoomIn,
            set: (BB, TB) => {
              BB.keysZoomIn = TB
            }
          },
          metadata: lB
        }, UB, FB), (0, VB.g)(null, null, oB, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomOut" in BB,
            get: BB => BB.keysZoomOut,
            set: (BB, TB) => {
              BB.keysZoomOut = TB
            }
          },
          metadata: lB
        }, KB, rB), (0, VB.g)(null, null, kB, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "panningSensibility" in BB,
            get: BB => BB.panningSensibility,
            set: (BB, TB) => {
              BB.panningSensibility = TB
            }
          },
          metadata: lB
        }, IB, cB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomingSensibility" in BB,
            get: BB => BB.zoomingSensibility,
            set: (BB, TB) => {
              BB.zoomingSensibility = TB
            }
          },
          metadata: lB
        }, SB, PB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSpeed" in BB,
            get: BB => BB.angularSpeed,
            set: (BB, TB) => {
              BB.angularSpeed = TB
            }
          },
          metadata: lB
        }, QB, RB), lB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lB
        })
      })(), BB
    })();
    iB.c.ArcRotateCameraKeyboardMoveInput = zB;
    var wB = dB(36690),
      UB = dB(38946);
    let FB = (() => {
      var BB;
      let TB, dB, pB, YB = [],
        gB = [],
        kB = [],
        OB = [],
        DB = [],
        uB = [];
      return BB = class {
        constructor() {
          this.wheelPrecision = (0, VB.h)(this, YB, 3), this.zoomToMouseLocation = ((0, VB.h)(this, gB), (0, VB.h)(this, kB, !1)), this.wheelDeltaPercentage = ((0, VB.h)(this, OB), (0, VB.h)(this, DB, 0)), this.customComputeDeltaFromMouseWheel = ((0, VB.h)(this, uB), null), this._viewOffset = new lB.p(0, 0, 0), this._globalOffset = new lB.p(0, 0, 0), this._inertialPanning = lB.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(BB, TB) {
          let dB;
          const VB = .01 * BB * this.wheelDeltaPercentage * TB;
          return dB = BB > 0 ? VB / (1 + this.wheelDeltaPercentage) : VB * (1 + this.wheelDeltaPercentage), dB
        }
        attachControl(BB) {
          BB = NB.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = TB => {
            if (TB.type !== oB.d.POINTERWHEEL) return;
            const dB = TB.event;
            let VB;
            const yB = dB.deltaMode === UB.b.DOM_DELTA_LINE ? 40 : 1,
              pB = -dB.deltaY * yB;
            if (this.customComputeDeltaFromMouseWheel) VB = this.customComputeDeltaFromMouseWheel(pB, this, dB);
            else if (this.wheelDeltaPercentage) {
              if (VB = this._computeDeltaFromMouseWheelLegacyEvent(pB, this.camera.radius), VB > 0) {
                const BB = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let TB = this.camera.radius,
                  dB = BB + VB;
                for (let VB = 0; VB < 20 && !(TB <= dB) && !(Math.abs(dB * this.camera.inertia) < .001); VB++) TB -= dB, dB *= this.camera.inertia;
                TB = (0, JB.Clamp)(TB, 0, Number.MAX_VALUE), VB = this._computeDeltaFromMouseWheelLegacyEvent(pB, TB)
              }
            } else {
              const BB = this.camera.movement.input.getEntry("wheel", "zoom");
              VB = pB * (BB?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            VB && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(VB)) : this.camera.movement.zoomAccumulatedPixels += VB), dB.preventDefault && (BB || dB.preventDefault())
          }, this._observer = this.camera.jU()._inputManager._addCameraPointerObserver(this._wheel, oB.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.A4(0)
        }
        detachControl() {
          this._observer && (this.camera.jU()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const BB = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(BB.inertialAlphaOffset) + Math.abs(BB.inertialBetaOffset) + Math.abs(BB.inertialRadiusOffset)) {
            this._updateHitPlane(), BB.target.addInPlace(this._inertialPanning), BB.radius -= this._zoomToMouseRadiusOffset;
            const TB = BB.movement.getFrameIndependentDecay(BB.inertia);
            this._inertialPanning.scaleInPlace(TB), this._zoomToMouseRadiusOffset *= TB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < LB.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const BB = this.camera,
            TB = BB.target.subtract(BB.position);
          this._hitPlane = wB.d.FromPositionAndNormal(BB.target, TB)
        }
        _getPosition() {
          const BB = this.camera,
            TB = BB.jU(),
            dB = TB.createPickingRay(TB.pointerX, TB.pointerY, lB.b.Identity(), BB, !1);
          0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = lB.p.TransformNormal(this._viewOffset, BB._cameraTransformMatrix), dB.origin.addInPlace(this._globalOffset));
          let VB = 0;
          return this._hitPlane && (VB = dB.intersectsPlane(this._hitPlane) ?? 0), dB.origin.addInPlace(dB.direction.scaleInPlace(VB))
        }
        _zoomToMouse(BB) {
          const TB = this.camera,
            dB = 1 - TB.inertia,
            VB = TB.movement.getFrameIndependentInputScale(TB.inertia);
          if (TB.lowerRadiusLimit) {
            const yB = TB.lowerRadiusLimit ?? 0;
            TB.radius - (this._zoomToMouseRadiusOffset + BB * VB) / dB < yB && (BB = ((TB.radius - yB) * dB - this._zoomToMouseRadiusOffset) / VB)
          }
          if (TB.upperRadiusLimit) {
            const yB = TB.upperRadiusLimit ?? 0;
            TB.radius - (this._zoomToMouseRadiusOffset + BB * VB) / dB > yB && (BB = ((TB.radius - yB) * dB - this._zoomToMouseRadiusOffset) / VB)
          }
          const yB = BB / dB / TB.radius,
            pB = this._getPosition(),
            JB = lB.j.RD[6];
          pB.subtractToRef(TB.target, JB), JB.scaleInPlace(yB), JB.scaleInPlace(dB), JB.scaleInPlace(VB), this._inertialPanning.addInPlace(JB), this._zoomToMouseRadiusOffset += BB * VB
        }
        _zeroIfClose(BB) {
          Math.abs(BB.x) < LB.b && (BB.x = 0), Math.abs(BB.y) < LB.b && (BB.y = 0), Math.abs(BB.z) < LB.b && (BB.z = 0)
        }
      }, (() => {
        const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecision" in BB,
            get: BB => BB.wheelPrecision,
            set: (BB, TB) => {
              BB.wheelPrecision = TB
            }
          },
          metadata: lB
        }, YB, gB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomToMouseLocation" in BB,
            get: BB => BB.zoomToMouseLocation,
            set: (BB, TB) => {
              BB.zoomToMouseLocation = TB
            }
          },
          metadata: lB
        }, kB, OB), (0, VB.g)(null, null, pB, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelDeltaPercentage" in BB,
            get: BB => BB.wheelDeltaPercentage,
            set: (BB, TB) => {
              BB.wheelDeltaPercentage = TB
            }
          },
          metadata: lB
        }, DB, uB), lB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lB
        })
      })(), BB
    })();
    iB.c.ArcRotateCameraMouseWheelInput = FB;
    var KB, rB, IB = dB(38629);
    class cB extends iB.g {
      constructor(BB) {
        super(BB)
      }
      addMouseWheel() {
        return this.add(new FB), this
      }
      addPointers() {
        return this.add(new sB), this
      }
      addKeyboard() {
        return this.add(new zB), this
      }
    }(KB = cB.prototype).addVRDeviceOrientation ?? (KB.addVRDeviceOrientation = (0, IB.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (rB = cB.prototype).addGamepad ?? (rB.addGamepad = (0, IB.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var SB = dB(36166),
      PB = dB(38985),
      QB = dB(38990);
    class RB extends PB.c {
      constructor(BB, TB, dB) {
        super(BB, TB, dB), this.input = new QB.d({
          pan: (BB, TB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += TB
          },
          rotate: (BB, TB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += TB
          },
          zoom: BB => {
            this.zoomAccumulatedPixels += BB
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

    function aB(BB, TB) {
      return isNaN(BB) ? TB : BB
    }
    let ZB = (() => {
        var BB;
        let TB, dB, YB, oB, kB, DB, uB, iB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB, IB, SB, PB, QB, ZB, XB, WB, hB, CB, GB, qB = mB.h,
          xB = [],
          jB = [],
          AB = [],
          bB = [],
          nB = [],
          eB = [],
          BT = [],
          TT = [],
          dT = [],
          VT = [],
          yT = [],
          pT = [],
          lT = [],
          JT = [],
          YT = [],
          gT = [],
          oT = [],
          kT = [],
          LT = [],
          OT = [],
          DT = [],
          uT = [],
          HT = [],
          ET = [],
          vT = [],
          mT = [],
          iT = [],
          NT = [],
          tT = [],
          fT = [],
          sT = [],
          MT = [],
          zT = [],
          wT = [],
          UT = [],
          FT = [],
          KT = [],
          rT = [],
          IT = [],
          cT = [],
          ST = [],
          PT = [],
          QT = [],
          RT = [],
          aT = [],
          ZT = [],
          XT = [];
        return BB = class extends qB {
          get target() {
            return this.Q8
          }
          set target(BB) {
            this.setTarget(BB)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(BB) {
            BB && this.setTarget(BB)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(BB) {
            this.setPosition(BB)
          }
          set upVector(BB) {
            this._upToYMatrix || (this._yToUpMatrix = new lB.b, this._upToYMatrix = new lB.b, this._upVector = lB.p.Zero()), BB.normalize(), this._upVector.bdB(BB), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            lB.b.RotationAlignToRef(lB.p.UpReadOnly, this._upVector, this._yToUpMatrix), lB.b.RotationAlignToRef(this._upVector, lB.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const BB = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialAlphaOffset(BB) {
            this._inertialAlphaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const BB = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialBetaOffset(BB) {
            this._inertialBetaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const BB = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialRadiusOffset(BB) {
            this._inertialRadiusOffset = BB, 0 === BB && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(BB) {
            this._panningInertia = BB, this.movement && (this.movement.panInertia = BB)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(BB) {
            this._inertia = BB, this.movement && (this.movement.rotationInertia = BB, this.movement.zoomInertia = BB)
          }
          get angularSensibilityX() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityX : 0
          }
          set angularSensibilityX(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.angularSensibilityX = BB)
          }
          get angularSensibilityY() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityY : 0
          }
          set angularSensibilityY(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.angularSensibilityY = BB)
          }
          get pinchPrecision() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchPrecision : 0
          }
          set pinchPrecision(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.pinchPrecision = BB)
          }
          get pinchDeltaPercentage() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.pinchDeltaPercentage = BB)
          }
          get useNaturalPinchZoom() {
            const BB = this.inputs.attached.pointers;
            return !!BB && BB.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.useNaturalPinchZoom = BB)
          }
          get panningSensibility() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.panningSensibility : 0
          }
          set panningSensibility(BB) {
            const TB = this.inputs.attached.pointers;
            TB && (TB.panningSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysUp = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysDown = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const TB = this.inputs.attached.keyboard;
            TB && (TB.keysRight = BB)
          }
          get wheelPrecision() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelPrecision : 0
          }
          set wheelPrecision(BB) {
            const TB = this.inputs.attached.mousewheel;
            TB && (TB.wheelPrecision = BB)
          }
          get zoomToMouseLocation() {
            const BB = this.inputs.attached.mousewheel;
            return !!BB && BB.zoomToMouseLocation
          }
          set zoomToMouseLocation(BB) {
            const TB = this.inputs.attached.mousewheel;
            TB && (TB.zoomToMouseLocation = BB)
          }
          get wheelDeltaPercentage() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(BB) {
            const TB = this.inputs.attached.mousewheel;
            TB && (TB.wheelDeltaPercentage = BB)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(BB) {
            this._useCtrlForPanningInternal = BB;
            const TB = this.movement.input,
              dB = TB.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !BB && dB ? TB.inputMap.splice(TB.inputMap.indexOf(dB), 1) : BB && !dB && TB.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const VB = TB.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !BB && VB ? TB.inputMap.splice(TB.inputMap.indexOf(VB), 1) : BB && !VB && TB.addEntry({
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
          set _panningMouseButton(BB) {
            this._panningMouseButtonInternal = BB;
            const TB = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            TB && (TB.button = BB)
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
          set useBouncingBehavior(BB) {
            BB !== this.useBouncingBehavior && (BB ? (this._bouncingBehavior = new HB, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(BB) {
            BB !== this.useFramingBehavior && (BB ? (this._framingBehavior = new EB, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(BB) {
            BB !== this.useAutoRotationBehavior && (BB ? (this._autoRotationBehavior = new OB, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(BB, TB, dB, yB, JB, YB) {
            var gB;
            let oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(BB, lB.p.Zero(), YB, oB), gB = this, this.alpha = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, void 0)), this.beta = ((0, VB.h)(this, AB), (0, VB.h)(this, bB, void 0)), this.radius = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, void 0)), this.overrideCloneAlphaBetaRadius = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, void 0)), this.Q8 = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, void 0)), this._targetHost = ((0, VB.h)(this, yT), (0, VB.h)(this, pT, void 0)), this._upToYMatrix = (0, VB.h)(this, lT), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, VB.h)(this, JT, null), this.upperAlphaLimit = ((0, VB.h)(this, YT), (0, VB.h)(this, gT, null)), this.lowerBetaLimit = ((0, VB.h)(this, oT), (0, VB.h)(this, kT, .01)), this.upperBetaLimit = ((0, VB.h)(this, LT), (0, VB.h)(this, OT, Math.PI - .01)), this.lowerRadiusLimit = ((0, VB.h)(this, DT), (0, VB.h)(this, uT, null)), this.upperRadiusLimit = ((0, VB.h)(this, HT), (0, VB.h)(this, ET, null)), this.lowerTargetYLimit = ((0, VB.h)(this, vT), (0, VB.h)(this, mT, -1 / 0)), this.inertialPanningX = ((0, VB.h)(this, iT), (0, VB.h)(this, NT, 0)), this.inertialPanningY = ((0, VB.h)(this, tT), (0, VB.h)(this, fT, 0)), this.pinchToPanMaxDistance = ((0, VB.h)(this, sT), (0, VB.h)(this, MT, 20)), this.panningDistanceLimit = ((0, VB.h)(this, zT), (0, VB.h)(this, wT, null)), this.panningOriginTarget = ((0, VB.h)(this, UT), (0, VB.h)(this, FT, lB.p.Zero())), this._panningInertia = ((0, VB.h)(this, KT), .9), this._inertia = .9, this.zoomOnFactor = (0, VB.h)(this, rT, 1), this.targetScreenOffset = ((0, VB.h)(this, IT), (0, VB.h)(this, cT, lB.l.Zero())), this.allowUpsideDown = ((0, VB.h)(this, ST), (0, VB.h)(this, PT, !0)), this.useInputToRestoreState = ((0, VB.h)(this, QT), (0, VB.h)(this, RT, !0)), this.restoreStateInterpolationFactor = ((0, VB.h)(this, aT), (0, VB.h)(this, ZT, 0)), this._currentInterpolationFactor = ((0, VB.h)(this, XT), 0), this._viewMatrix = new lB.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new lB.p(1, 1, 0), this._transformedDirection = new lB.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new pB.e, this.checkCollisions = !1, this.collisionRadius = new lB.p(.5, .5, .5), this._previousPosition = lB.p.Zero(), this._collisionVelocity = lB.p.Zero(), this._newPosition = lB.p.Zero(), this._computationVector = lB.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new lB.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new lB.l(NaN, NaN), this._onCollisionPositionChange = function(BB, TB) {
              let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              dB ? (gB.setPosition(TB), gB.vL && gB.vL(dB)) : gB._previousPosition.bdB(gB._position);
              const VB = Math.cos(gB.alpha),
                yB = Math.sin(gB.alpha),
                pB = Math.cos(gB.beta);
              let lB = Math.sin(gB.beta);
              0 === lB && (lB = 1e-4);
              const JB = gB._getTargetPosition();
              gB._computationVector.YBB(gB.radius * VB * lB, gB.radius * pB, gB.radius * yB * lB), JB.addToRef(gB._computationVector, gB._newPosition), gB._position.bdB(gB._newPosition);
              let YB = gB.upVector;
              gB.allowUpsideDown && gB.beta < 0 && (YB = YB.clone(), YB = YB.fp()), gB._computeViewMatrix(gB._position, JB, YB), gB._viewMatrix.addAtIndex(12, gB.targetScreenOffset.x), gB._viewMatrix.addAtIndex(13, gB.targetScreenOffset.y), gB._collisionTriggered = !1
            }, this.Q8 = lB.p.Zero(), JB && this.setTarget(JB), this.alpha = TB, this.beta = dB, this.radius = yB, this.getViewMatrix(), this.inputs = new cB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new RB(this.jU(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.Q8 = new lB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = lB.l.Zero()
          }
          _updateCache(BB) {
            BB || super._updateCache(), this._cache.Q8.bdB(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.bdB(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const BB = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.Q8) : this.Q8.bdB(BB)
            }
            const BB = this._getLockedTargetPosition();
            return BB || this.Q8
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > LB.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              pB = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != pB ? this._currentInterpolationFactor = pB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = aB(BB, this._goalAlpha), this._goalBeta = aB(TB, this._goalBeta), this._goalRadius = aB(dB, this._goalRadius), this._goalTarget.set(aB(VB.x, this._goalTarget.x), aB(VB.y, this._goalTarget.y), aB(VB.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(aB(yB.x, this._goalTargetScreenOffset.x), aB(yB.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, JB.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, JB.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, JB.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, JB.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.Q8.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(BB, TB) {
            let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const yB = arguments;
            TB = NB.h.BackCompatCameraNoPreventDefault(yB), this._useCtrlForPanning = dB, this._panningMouseButton = VB, "boolean" === typeof yB[0] && (yB.length > 1 && (this._useCtrlForPanning = yB[1]), yB.length > 2 && (this._panningMouseButton = yB[2])), this.inputs.attachElement(TB), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(BB, TB, dB) {
            const VB = this.invertRotation ? -1 : 1;
            let yB = BB * this._calculateHandednessMultiplier();
            this.beta < 0 && (yB *= -1), this.alpha += yB * VB, this.beta += TB * VB, this.radius -= dB
          }
          _applyPanDelta(BB, TB) {
            const dB = lB.j.RD[0].YBB(BB, TB, TB);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), dB.multiplyInPlace(this.panningAxis), lB.p.TransformNormalToRef(dB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const BB = this.upVector,
                TB = lB.p.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
              lB.p.CrossToRef(BB, TB, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.Q8);
                lB.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.Q8.bdB(this._transformedDirection)
              } else {
                if (this.parent) {
                  const BB = lB.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), lB.p.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
                }
                this.Q8.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let BB = !1;
            this.movement.computeCurrentFrameDeltas();
            const TB = this.movement.rotationDeltaCurrentFrame,
              dB = this.movement.zoomDeltaCurrentFrame,
              VB = this.movement.panDeltaCurrentFrame;
            if (0 === TB.x && 0 === TB.y && 0 === dB && 0 === VB.x && 0 === VB.y || (BB = !0, 0 === TB.x && 0 === TB.y && 0 === dB || this._applyRotationAndZoomDelta(TB.x, TB.y, dB), 0 === VB.x && 0 === VB.y || this._applyPanDelta(VB.x, VB.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), BB = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const TB = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < TB && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < TB && (this.inertialPanningY = 0), BB = !0
            }
            if (BB) this.stopInterpolation();
            else if (this._isInterpolating) {
              let BB = !1;
              const TB = this._scene.PD().getDeltaTime() / 1e3,
                dB = 1 - Math.pow(2, -TB / this._currentInterpolationFactor),
                VB = aB(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const TB = lB.j.RD[0].set(aB(this._goalTarget.x, this.Q8.x), aB(this._goalTarget.y, this.Q8.y), aB(this._goalTarget.z, this.Q8.z));
                lB.p.LerpToRef(this.target, TB, dB, this.Q8), 10 * lB.p.Distance(this.target, TB) / VB < LB.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.bdB(TB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const TB = lB.f.RotationAlphaBetaGammaToRef(aB(this._goalAlpha, this.alpha), aB(this._goalBeta, this.beta), 0, lB.j.Quaternion[0]),
                  VB = lB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, lB.j.Quaternion[1]),
                  yB = lB.f.SlerpToRef(VB, TB, dB, lB.j.Quaternion[2]);
                yB.normalize();
                const pB = yB.toAlphaBetaGammaToRef(lB.j.RD[0]);
                if (this.alpha = pB.x, this.beta = pB.y, yB.isApprox(TB, LB.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const BB = TB.toAlphaBetaGammaToRef(lB.j.RD[0]);
                  this.alpha = BB.x, this.beta = BB.y
                } else BB = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (VB - this.radius) * dB, Math.abs(VB / this.radius - 1) < LB.b ? (this._goalRadius = NaN, this.radius = VB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const TB = lB.j.Vector2[0].set(aB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), aB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                lB.l.LerpToRef(this.targetScreenOffset, TB, dB, this.targetScreenOffset), lB.l.Distance(this.targetScreenOffset, TB) < LB.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.bdB(TB)) : BB = !0
              }
              this._isInterpolating = BB
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lB.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const BB = this.alpha;
            var TB, dB;
            this.alpha = function(BB) {
              let TB = Math.PI / 2;
              return 0 === BB.x && 0 === BB.z || (TB = Math.acos(BB.x / Math.sqrt(Math.pow(BB.x, 2) + Math.pow(BB.z, 2)))), BB.z < 0 && (TB = 2 * Math.PI - TB), TB
            }(this._computationVector), this.beta = (TB = this._computationVector.y, dB = this.radius, Math.acos(TB / dB));
            const VB = Math.round((BB - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * VB * Math.PI, this._checkLimits()
          }
          setPosition(BB) {
            this._position.equals(BB) || (this._position.bdB(BB), this.rebuildAnglesAndRadius())
          }
          setTarget(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (VB = this.overrideCloneAlphaBetaRadius ?? VB, BB.computeWorldMatrix) TB && BB.IK ? this._targetBoundingCenter = BB.IK().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.Q8 = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const TB = BB,
                VB = this._getTargetPosition();
              if (VB && !dB && VB.equals(TB)) return;
              this._targetHost = null, this.Q8 = TB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            VB || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const BB = Math.cos(this.alpha),
              TB = Math.sin(this.alpha),
              dB = Math.cos(this.beta);
            let VB = Math.sin(this.beta);
            0 === VB && (VB = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const yB = this._getTargetPosition();
            if (this._computationVector.YBB(this.radius * BB * VB, this.radius * dB, this.radius * TB * VB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lB.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), yB.addToRef(this._computationVector, this._newPosition), this.jU().collisionsEnabled && this.checkCollisions) {
              const BB = this.jU().collisionCoordinator;
              this._collider || (this._collider = BB.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, BB.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.bdB(this._newPosition);
              let BB = this.upVector;
              this.allowUpsideDown && VB < 0 && (BB = BB.fp()), this._computeViewMatrix(this._position, yB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.bdB(yB), this._viewMatrix
          }
          zoomOn(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            BB = BB || this.jU().meshes;
            const dB = gB.e.MinMax(BB);
            let VB = this._calculateLowerRadiusFromModelBoundingSphere(dB.min, dB.max);
            if (VB = Math.max(Math.min(VB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = VB * this.zoomOnFactor, this.mode === vB.b.ORTHOGRAPHIC_CAMERA) {
              const BB = this.jU().PD().getAspectRatio(this),
                TB = VB * this.zoomOnFactor / 2;
              this.orthoLeft = -TB * BB, this.orthoRight = TB * BB, this.orthoBottom = -TB, this.orthoTop = TB
            }
            this.focusOn({
              min: dB.min,
              max: dB.max,
              distance: VB
            }, TB)
          }
          focusOn(BB) {
            let TB, dB, VB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === BB.min) {
              const VB = BB || this.jU().meshes;
              TB = gB.e.MinMax(VB), dB = lB.p.Distance(TB.min, TB.max)
            } else {
              TB = BB, dB = BB.distance
            }
            this.Q8 = gB.e.Center(TB), VB || (this.maxZ = 2 * dB)
          }
          createRigCamera(TB, dB) {
            let VB = 0;
            switch (this.cameraRigMode) {
              case vB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case vB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case vB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case vB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case vB.b.RIG_MODE_VR:
                VB = this._cameraRigParams.stereoHalfAngle * (0 === dB ? 1 : -1);
                break;
              case vB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                VB = this._cameraRigParams.stereoHalfAngle * (0 === dB ? -1 : 1)
            }
            const yB = new BB(TB, this.alpha + VB, this.beta, this.radius, this.Q8, this.jU());
            return yB._cameraRigParams = {}, yB.isRigCamera = !0, yB.rigParent = this, yB.upVector = this.upVector, yB.mode = this.mode, yB.orthoLeft = this.orthoLeft, yB.orthoRight = this.orthoRight, yB.orthoBottom = this.orthoBottom, yB.orthoTop = this.orthoTop, yB
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              TB = this._rigCameras[1];
            switch (BB.beta = TB.beta = this.beta, this.cameraRigMode) {
              case vB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case vB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case vB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case vB.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case vB.b.RIG_MODE_VR:
                BB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, TB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case vB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                BB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, TB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const VB = lB.p.Distance(BB, TB),
              yB = this.jU().PD().getAspectRatio(this),
              pB = Math.tan(this.fov / 2),
              JB = pB * yB,
              YB = .5 * VB * dB,
              gB = YB * Math.sqrt(1 + 1 / (JB * JB)),
              oB = YB * Math.sqrt(1 + 1 / (pB * pB));
            return Math.max(gB, oB)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(qB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], YB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.T)("target")], DB = [(0, yB.G)("targetHost")], uB = [(0, yB.W)()], iB = [(0, yB.W)()], tB = [(0, yB.W)()], fB = [(0, yB.W)()], sB = [(0, yB.W)()], MB = [(0, yB.W)()], zB = [(0, yB.W)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], KB = [(0, yB.W)()], rB = [(0, yB.W)()], IB = [(0, yB.W)()], SB = [(0, yB.W)()], PB = [(0, yB.T)()], QB = [(0, yB.W)()], ZB = [(0, yB.W)()], XB = [(0, yB.W)()], WB = [(0, yB.Q)()], hB = [(0, yB.W)()], CB = [(0, yB.W)()], GB = [(0, yB.W)()], (0, VB.g)(BB, null, uB, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialAlphaOffset" in BB,
              get: BB => BB.inertialAlphaOffset
            },
            metadata: pB
          }, null, xB), (0, VB.g)(BB, null, iB, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialBetaOffset" in BB,
              get: BB => BB.inertialBetaOffset
            },
            metadata: pB
          }, null, xB), (0, VB.g)(BB, null, tB, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialRadiusOffset" in BB,
              get: BB => BB.inertialRadiusOffset
            },
            metadata: pB
          }, null, xB), (0, VB.g)(BB, null, QB, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningInertia" in BB,
              get: BB => BB.panningInertia
            },
            metadata: pB
          }, null, xB), (0, VB.g)(BB, null, ZB, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomToMouseLocation" in BB,
              get: BB => BB.zoomToMouseLocation
            },
            metadata: pB
          }, null, xB), (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "alpha" in BB,
              get: BB => BB.alpha,
              set: (BB, TB) => {
                BB.alpha = TB
              }
            },
            metadata: pB
          }, jB, AB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: BB => "beta" in BB,
              get: BB => BB.beta,
              set: (BB, TB) => {
                BB.beta = TB
              }
            },
            metadata: pB
          }, bB, nB), (0, VB.g)(null, null, YB, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: BB => "radius" in BB,
              get: BB => BB.radius,
              set: (BB, TB) => {
                BB.radius = TB
              }
            },
            metadata: pB
          }, eB, BT), (0, VB.g)(null, null, oB, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "overrideCloneAlphaBetaRadius" in BB,
              get: BB => BB.overrideCloneAlphaBetaRadius,
              set: (BB, TB) => {
                BB.overrideCloneAlphaBetaRadius = TB
              }
            },
            metadata: pB
          }, TT, dT), (0, VB.g)(null, null, kB, {
            kind: "field",
            name: "Q8",
            static: !1,
            private: !1,
            access: {
              has: BB => "Q8" in BB,
              get: BB => BB.Q8,
              set: (BB, TB) => {
                BB.Q8 = TB
              }
            },
            metadata: pB
          }, VT, yT), (0, VB.g)(null, null, DB, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: BB => "_targetHost" in BB,
              get: BB => BB._targetHost,
              set: (BB, TB) => {
                BB._targetHost = TB
              }
            },
            metadata: pB
          }, pT, lT), (0, VB.g)(null, null, fB, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerAlphaLimit" in BB,
              get: BB => BB.lowerAlphaLimit,
              set: (BB, TB) => {
                BB.lowerAlphaLimit = TB
              }
            },
            metadata: pB
          }, JT, YT), (0, VB.g)(null, null, sB, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperAlphaLimit" in BB,
              get: BB => BB.upperAlphaLimit,
              set: (BB, TB) => {
                BB.upperAlphaLimit = TB
              }
            },
            metadata: pB
          }, gT, oT), (0, VB.g)(null, null, MB, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerBetaLimit" in BB,
              get: BB => BB.lowerBetaLimit,
              set: (BB, TB) => {
                BB.lowerBetaLimit = TB
              }
            },
            metadata: pB
          }, kT, LT), (0, VB.g)(null, null, zB, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperBetaLimit" in BB,
              get: BB => BB.upperBetaLimit,
              set: (BB, TB) => {
                BB.upperBetaLimit = TB
              }
            },
            metadata: pB
          }, OT, DT), (0, VB.g)(null, null, wB, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerRadiusLimit" in BB,
              get: BB => BB.lowerRadiusLimit,
              set: (BB, TB) => {
                BB.lowerRadiusLimit = TB
              }
            },
            metadata: pB
          }, uT, HT), (0, VB.g)(null, null, UB, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperRadiusLimit" in BB,
              get: BB => BB.upperRadiusLimit,
              set: (BB, TB) => {
                BB.upperRadiusLimit = TB
              }
            },
            metadata: pB
          }, ET, vT), (0, VB.g)(null, null, FB, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerTargetYLimit" in BB,
              get: BB => BB.lowerTargetYLimit,
              set: (BB, TB) => {
                BB.lowerTargetYLimit = TB
              }
            },
            metadata: pB
          }, mT, iT), (0, VB.g)(null, null, KB, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningX" in BB,
              get: BB => BB.inertialPanningX,
              set: (BB, TB) => {
                BB.inertialPanningX = TB
              }
            },
            metadata: pB
          }, NT, tT), (0, VB.g)(null, null, rB, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningY" in BB,
              get: BB => BB.inertialPanningY,
              set: (BB, TB) => {
                BB.inertialPanningY = TB
              }
            },
            metadata: pB
          }, fT, sT), (0, VB.g)(null, null, IB, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchToPanMaxDistance" in BB,
              get: BB => BB.pinchToPanMaxDistance,
              set: (BB, TB) => {
                BB.pinchToPanMaxDistance = TB
              }
            },
            metadata: pB
          }, MT, zT), (0, VB.g)(null, null, SB, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningDistanceLimit" in BB,
              get: BB => BB.panningDistanceLimit,
              set: (BB, TB) => {
                BB.panningDistanceLimit = TB
              }
            },
            metadata: pB
          }, wT, UT), (0, VB.g)(null, null, PB, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningOriginTarget" in BB,
              get: BB => BB.panningOriginTarget,
              set: (BB, TB) => {
                BB.panningOriginTarget = TB
              }
            },
            metadata: pB
          }, FT, KT), (0, VB.g)(null, null, XB, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomOnFactor" in BB,
              get: BB => BB.zoomOnFactor,
              set: (BB, TB) => {
                BB.zoomOnFactor = TB
              }
            },
            metadata: pB
          }, rT, IT), (0, VB.g)(null, null, WB, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "targetScreenOffset" in BB,
              get: BB => BB.targetScreenOffset,
              set: (BB, TB) => {
                BB.targetScreenOffset = TB
              }
            },
            metadata: pB
          }, cT, ST), (0, VB.g)(null, null, hB, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: BB => "allowUpsideDown" in BB,
              get: BB => BB.allowUpsideDown,
              set: (BB, TB) => {
                BB.allowUpsideDown = TB
              }
            },
            metadata: pB
          }, PT, QT), (0, VB.g)(null, null, CB, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: BB => "useInputToRestoreState" in BB,
              get: BB => BB.useInputToRestoreState,
              set: (BB, TB) => {
                BB.useInputToRestoreState = TB
              }
            },
            metadata: pB
          }, RT, aT), (0, VB.g)(null, null, GB, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "restoreStateInterpolationFactor" in BB,
              get: BB => BB.restoreStateInterpolationFactor,
              set: (BB, TB) => {
                BB.restoreStateInterpolationFactor = TB
              }
            },
            metadata: pB
          }, ZT, XT), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      XB = !1;
    XB || (XB = !0, YB.e.AddNodeConstructor("ArcRotateCamera", ((BB, TB) => () => new ZB(BB, 0, 0, 1, lB.p.Zero(), TB))), (0, SB.g)("BABYLON.ArcRotateCamera", ZB))
  },
  39001: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.d
    });
    var VB = dB(39007);
    (0, VB.h)()
  },
  39007: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => LB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(36183),
      JB = dB(39016),
      YB = dB(38980),
      gB = dB(36166);
    let oB = (() => {
        var BB;
        let TB, dB, YB = JB.c,
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        return BB = class extends YB {
          constructor(BB, TB, dB, yB) {
            super(BB, dB, yB), this.groundColor = (0, VB.h)(this, gB, new lB.c(0, 0, 0)), this.direction = ((0, VB.h)(this, oB), (0, VB.h)(this, kB, void 0)), (0, VB.h)(this, LB), this.direction = TB || pB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = pB.p.Normalize(BB.subtract(pB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", dB.x, dB.y, dB.z, 0, TB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), TB), this
          }
          transferToNodeMaterialEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return BB.setFloat3(TB, dB.x, dB.y, dB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return JB.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, TB) {
            BB["HEMILIGHT" + TB] = !0
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(YB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.s)()], dB = [(0, yB.T)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, TB) => {
                BB.groundColor = TB
              }
            },
            metadata: pB
          }, gB, oB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, TB) => {
                BB.direction = TB
              }
            },
            metadata: pB
          }, kB, LB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      kB = !1;

    function LB() {
      kB || (kB = !0, YB.e.AddNodeConstructor("Light_Type_3", ((BB, TB) => () => new oB(BB, pB.p.Zero(), TB))), (0, gB.g)("BABYLON.HemisphericLight", oB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
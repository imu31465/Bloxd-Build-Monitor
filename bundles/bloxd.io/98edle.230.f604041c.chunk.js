export const id = 230;
export const ids = [230];
export const modules = {
  38683: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => xR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35346),
      AW = MW(35324),
      bR = MW(35353),
      yR = MW(37800),
      NW = MW(37993),
      eW = MW(37758),
      BW = MW(37488),
      tR = MW(35328);
    class TW {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(WW) {
        this._zoomStopsAnimation = WW
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(WW) {
        this._idleRotationSpeed = WW
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(WW) {
        this._idleRotationWaitTime = WW
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(WW) {
        this._idleRotationSpinupTime = WW
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
      attach(WW) {
        this._attachedCamera = WW;
        const RW = this._attachedCamera.QRW();
        this._onPrePointerObservableObserver = RW.onPrePointerObservable.add((WW => {
          WW.type !== eW.c.POINTERDOWN ? WW.type === eW.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const WW = BW.d.Now;
          let RW = 0;
          null != this._lastFrameTime && (RW = WW - this._lastFrameTime), this._lastFrameTime = WW, this._applyUserInteraction();
          const MW = WW - this._lastInteractionTime - this._idleRotationWaitTime,
            wW = Math.max(Math.min(MW / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * wW, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (RW / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const WW = this._attachedCamera.QRW();
        this._onPrePointerObservableObserver && WW.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(WW) {
        this._lastInteractionTime = WW ?? BW.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < tR.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let WW = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (WW = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? WW : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = BW.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    MW(38685);
    class gR {
      constructor() {
        this._easingMode = gR.EASINGMODE_EASEIN
      }
      setEasingMode(WW) {
        const RW = Math.min(Math.max(WW, 0), 2);
        this._easingMode = RW
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(WW) {
        throw new Error("You must implement this method")
      }
      ease(WW) {
        switch (this._easingMode) {
          case gR.EASINGMODE_EASEIN:
            return this.easeInCore(WW);
          case gR.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - WW)
        }
        return WW >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - WW))) + .5 : .5 * this.easeInCore(2 * WW)
      }
    }
    gR.EASINGMODE_EASEIN = 0, gR.EASINGMODE_EASEOUT = 1, gR.EASINGMODE_EASEINOUT = 2;
    var iR = MW(38689);
    class YW {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(WW) {
        if (this._autoTransitionRange === WW) return;
        this._autoTransitionRange = WW;
        const RW = this._attachedCamera;
        RW && (WW ? this._onMeshTargetChangedObserver = RW.onMeshTargetChangedObservable.add((WW => {
          if (WW && (WW.computeWorldMatrix(!0), WW.LRW)) {
            const RW = WW.LRW().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * RW, this.upperRadiusTransitionRange = .05 * RW
          }
        })) : this._onMeshTargetChangedObserver && RW.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(WW) {
        this._attachedCamera = WW, this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(WW) {
        return !!this._attachedCamera && (this._attachedCamera.radius === WW && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(WW) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (YW.EasingFunction.setEasingMode(YW.EasingMode), this._radiusBounceTransition = iR.e.CreateAnimation("radius", iR.e.ANIMATIONTYPE_FLOAT, 60, YW.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const RW = iR.e.TransitionTo("radius", this._attachedCamera.radius + WW, this._attachedCamera, this._attachedCamera.QRW(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        RW && this._animatables.push(RW)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    YW.EasingFunction = new class extends gR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = WW
      }
      easeInCore(WW) {
        const RW = Math.max(0, this.amplitude);
        return Math.pow(WW, 3) - WW * RW * Math.sin(3.141592653589793 * WW)
      }
    }(.3), YW.EasingMode = gR.EASINGMODE_EASEOUT;
    class JW {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new zR.c, this._mode = JW.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(WW) {
        this._mode = WW
      }
      get mode() {
        return this._mode
      }
      set radiusScale(WW) {
        this._radiusScale = WW
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(WW) {
        this._positionScale = WW
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(WW) {
        this._defaultElevation = WW
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(WW) {
        this._elevationReturnTime = WW
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(WW) {
        this._elevationReturnWaitTime = WW
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(WW) {
        this._zoomStopsAnimation = WW
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(WW) {
        this._framingTime = WW
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(WW) {
        this._attachedCamera = WW;
        const RW = this._attachedCamera.QRW();
        JW.EasingFunction.setEasingMode(JW.EasingMode), this._onPrePointerObservableObserver = RW.onPrePointerObservable.add((WW => {
          WW.type !== eW.c.POINTERDOWN ? WW.type === eW.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = WW.onMeshTargetChangedObservable.add((WW => {
          WW && WW.LRW && this.zoomOnMesh(WW, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = WW.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const WW = this._attachedCamera.QRW();
        this._onPrePointerObservableObserver && WW.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        WW.computeWorldMatrix(!0);
        const wW = WW.LRW().boundingBox;
        this.zoomOnBoundingInfo(wW.minimumWorld, wW.maximumWorld, RW, MW)
      }
      zoomOnMeshHierarchy(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        WW.computeWorldMatrix(!0);
        const wW = WW.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(wW.min, wW.max, RW, MW)
      }
      zoomOnMeshesHierarchy(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wW = new AW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          CW = new AW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let zR = 0; zR < WW.length; zR++) {
          const RW = WW[zR].getHierarchyBoundingVectors(!0);
          AW.q.CheckExtends(RW.min, wW, CW), AW.q.CheckExtends(RW.max, wW, CW)
        }
        this.zoomOnBoundingInfo(wW, CW, RW, MW)
      }
      zoomOnBoundingInfo(WW, RW) {
        let MW, wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const zR = WW.y,
          bR = zR + (RW.y - zR) * this._positionScale,
          yR = RW.subtract(WW).scale(.5);
        if (!isFinite(bR)) return !1;
        if (wW) MW = new AW.q(0, bR, 0);
        else {
          const RW = WW.add(yR);
          MW = new AW.q(RW.x, bR, RW.z)
        }
        this._vectorTransition || (this._vectorTransition = iR.e.CreateAnimation("target", iR.e.ANIMATIONTYPE_VECTOR3, 60, JW.EasingFunction)), this._betaIsAnimating = !0;
        let NW = iR.e.TransitionTo("target", MW, this._attachedCamera, this._attachedCamera.QRW(), 60, this._vectorTransition, this._framingTime);
        NW && this._animatables.push(NW);
        let eW = 0;
        if (this._mode === JW.FitFrustumSidesMode) {
          const MW = this._calculateLowerRadiusFromModelBoundingSphere(WW, RW);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = yR.length() + this._attachedCamera.minZ), eW = MW
        } else this._mode === JW.IgnoreBoundsSizeMode && (eW = this._calculateLowerRadiusFromModelBoundingSphere(WW, RW), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const MW = RW.subtract(WW).length();
          this._attachedCamera.panningSensibility = 5e3 / MW, this._attachedCamera.wheelPrecision = 100 / eW
        }
        return this._radiusTransition || (this._radiusTransition = iR.e.CreateAnimation("radius", iR.e.ANIMATIONTYPE_FLOAT, 60, JW.EasingFunction)), NW = iR.e.TransitionTo("radius", eW, this._attachedCamera, this._attachedCamera.QRW(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), CW && CW(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), NW && this._animatables.push(NW), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(WW, RW) {
        const MW = this._attachedCamera;
        if (!MW) return 0;
        let wW = MW._calculateLowerRadiusFromModelBoundingSphere(WW, RW, this._radiusScale);
        return MW.lowerRadiusLimit && this._mode === JW.IgnoreBoundsSizeMode && (wW = wW < MW.lowerRadiusLimit ? MW.lowerRadiusLimit : wW), MW.upperRadiusLimit && (wW = wW > MW.upperRadiusLimit ? MW.upperRadiusLimit : wW), wW
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const WW = BW.d.Now - this._lastInteractionTime,
          RW = .5 * Math.PI - this._defaultElevation,
          MW = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > MW && WW >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = iR.e.CreateAnimation("beta", iR.e.ANIMATIONTYPE_FLOAT, 60, JW.EasingFunction));
          const WW = iR.e.TransitionTo("beta", RW, this._attachedCamera, this._attachedCamera.QRW(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          WW && this._animatables.push(WW)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = BW.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    JW.EasingFunction = new class extends gR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = WW
      }
      easeInCore(WW) {
        return this.exponent <= 0 ? WW : (Math.exp(this.exponent * WW) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, JW.EasingMode = gR.EASINGMODE_EASEINOUT, JW.IgnoreBoundsSizeMode = 0, JW.FitFrustumSidesMode = 1;
    var PW = MW(37796),
      IW = MW(37787),
      oW = MW(37817),
      lW = MW(37685);
    let FW = (() => {
        var WW;
        let RW, MW = [],
          zR = [];
        return WW = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, wW.i)(this, MW, [0, 1, 2]), this._pointerInput = (0, wW.i)(this, zR)
          }
          attachControl(WW) {
            WW = lW.j.BackCompatCameraNoPreventDefault(arguments);
            const RW = this.camera.mC(),
              MW = RW.getInputElement();
            let wW = 0,
              CW = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = zR => {
              const AW = zR.event,
                bR = "touch" === AW.pointerType;
              if (zR.type !== eW.c.POINTERMOVE && -1 === this.buttons.indexOf(AW.button)) return;
              const yR = AW.target;
              if (this._altKey = AW.altKey, this._ctrlKey = AW.ctrlKey, this._metaKey = AW.metaKey, this._shiftKey = AW.shiftKey, this._buttonsPressed = AW.buttons, RW.isPointerLock) {
                const WW = AW.movementX,
                  RW = AW.movementY;
                this.onTouch(null, WW, RW), this._pointA = null, this._pointB = null
              } else {
                if (zR.type !== eW.c.POINTERDOWN && zR.type !== eW.c.POINTERDOUBLETAP && bR && this._pointA?.pointerId !== AW.pointerId && this._pointB?.pointerId !== AW.pointerId) return;
                if (zR.type !== eW.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !bR)
                  if (zR.type === eW.c.POINTERDOUBLETAP) this.onDoubleTap(AW.pointerType, AW);
                  else if (zR.type !== eW.c.POINTERUP || this._currentMousePointerIdDown !== AW.pointerId && !bR) {
                  if (zR.type === eW.c.POINTERMOVE)
                    if (WW || AW.preventDefault(), this._pointA && null === this._pointB) {
                      const WW = AW.clientX - this._pointA.x,
                        RW = AW.clientY - this._pointA.y;
                      this._pointA.x = AW.clientX, this._pointA.y = AW.clientY, this.onTouch(this._pointA, WW, RW)
                    } else if (this._pointA && this._pointB) {
                    const WW = this._pointA.pointerId === AW.pointerId ? this._pointA : this._pointB;
                    WW.x = AW.clientX, WW.y = AW.clientY;
                    const RW = this._pointA.x - this._pointB.x,
                      MW = this._pointA.y - this._pointB.y,
                      bR = RW * RW + MW * MW,
                      yR = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: AW.pointerId,
                        type: zR.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, wW, bR, CW, yR), CW = yR, wW = bR
                  }
                } else {
                  try {
                    yR?.releasePointerCapture(AW.pointerId)
                  } catch (NW) {}
                  bR || (this._pointB = null), RW._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == AW.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == AW.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== wW || CW) && (this.onMultiTouch(this._pointA, this._pointB, wW, 0, CW, null), wW = 0, CW = null), this._currentMousePointerIdDown = -1, this.onButtonUp(AW), WW || AW.preventDefault()
                } else {
                  try {
                    yR?.setPointerCapture(AW.pointerId)
                  } catch (NW) {}
                  if (null === this._pointA) this._pointA = {
                    x: AW.clientX,
                    y: AW.clientY,
                    pointerId: AW.pointerId,
                    type: AW.pointerType,
                    button: AW.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: AW.clientX,
                      y: AW.clientY,
                      pointerId: AW.pointerId,
                      type: AW.pointerType,
                      button: AW.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || bR || (this._currentMousePointerIdDown = AW.pointerId), this.onButtonDown(AW), WW || (AW.preventDefault(), MW && MW.focus())
                }
              }
            }, this._observer = this.camera.QRW()._inputManager._addCameraPointerObserver(this._pointerInput, eW.c.POINTERDOWN | eW.c.POINTERUP | eW.c.POINTERMOVE | eW.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, wW = 0, CW = null, this.onLostFocus()
            }, this._contextMenuBind = WW => this.onContextMenu(WW), MW && MW.addEventListener("contextmenu", this._contextMenuBind, !1);
            const zR = this.camera.QRW().mC().getHostWindow();
            zR && lW.j.RegisterTopRootEvents(zR, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const WW = this.camera.QRW().mC().getHostWindow();
              WW && lW.j.UnregisterTopRootEvents(WW, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.QRW()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const WW = this.camera.QRW().mC().getInputElement();
                WW && WW.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(WW, RW) {}
          onTouch(WW, RW, MW) {}
          onMultiTouch(WW, RW, MW, wW, CW, zR) {}
          onContextMenu(WW) {
            WW.preventDefault()
          }
          onButtonDown(WW) {}
          onButtonUp(WW) {}
          onLostFocus() {}
        }, (() => {
          const AW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: WW => "buttons" in WW,
              get: WW => WW.buttons,
              set: (WW, RW) => {
                WW.buttons = RW
              }
            },
            metadata: AW
          }, MW, zR), AW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AW
          })
        })(), WW
      })(),
      fW = (() => {
        var WW;
        let RW, MW, zR, AW = FW,
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        return WW = class extends AW {
          constructor() {
            super(...arguments), this.pinchZoom = (0, wW.i)(this, bR, !0), this.multiTouchPanning = ((0, wW.i)(this, yR), (0, wW.i)(this, NW, !0)), this.multiTouchPanAndZoom = ((0, wW.i)(this, eW), (0, wW.i)(this, BW, !0)), this._isPinching = ((0, wW.i)(this, tR), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(WW, RW) {}
          _computeMultiTouchPanning(WW, RW) {}
          onMultiTouch(WW, RW, MW, wW, CW, zR) {
            0 === MW && null === CW || 0 === wW && null === zR || (this.multiTouchPanAndZoom ? (this._computePinchZoom(MW, wW), this._computeMultiTouchPanning(CW, zR)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(MW, wW), this._isPinching = !0) : this._computeMultiTouchPanning(CW, zR)) : this.multiTouchPanning ? this._computeMultiTouchPanning(CW, zR) : this.pinchZoom && this._computePinchZoom(MW, wW))
          }
          onButtonUp(WW) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(AW[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchZoom" in WW,
              get: WW => WW.pinchZoom,
              set: (WW, RW) => {
                WW.pinchZoom = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: WW => "multiTouchPanning" in WW,
              get: WW => WW.multiTouchPanning,
              set: (WW, RW) => {
                WW.multiTouchPanning = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, wW.e)(null, null, zR, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "multiTouchPanAndZoom" in WW,
              get: WW => WW.multiTouchPanAndZoom,
              set: (WW, RW) => {
                WW.multiTouchPanAndZoom = RW
              }
            },
            metadata: TW
          }, BW, tR), TW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          })
        })(), WW
      })(),
      QW = (() => {
        var WW;
        let RW, MW, zR, AW, bR, yR, NW, eW = fW,
          BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [],
          JW = [],
          PW = [],
          IW = [],
          oW = [],
          lW = [],
          FW = [],
          QW = [],
          rR = [];
        return WW = class extends eW {
          constructor() {
            super(...arguments), this.buttons = (0, wW.i)(this, BW, [0, 1, 2]), this.angularSensibilityX = ((0, wW.i)(this, tR), (0, wW.i)(this, TW, 1e3)), this.angularSensibilityY = ((0, wW.i)(this, gR), (0, wW.i)(this, iR, 1e3)), this.pinchPrecision = ((0, wW.i)(this, YW), (0, wW.i)(this, JW, 12)), this.pinchDeltaPercentage = ((0, wW.i)(this, PW), (0, wW.i)(this, IW, 0)), this.useNaturalPinchZoom = ((0, wW.i)(this, oW), (0, wW.i)(this, lW, !1)), this.panningSensibility = ((0, wW.i)(this, FW), (0, wW.i)(this, QW, 1e3)), this.pinchInwards = ((0, wW.i)(this, rR), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(WW, RW) {
            if (WW && RW) {
              const MW = RW.x - WW.x,
                wW = RW.y - WW.y,
                CW = this.camera.movement.input.getEntry("pointer", "pan"),
                zR = CW?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== zR && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -MW * zR, this.camera.movement.panAccumulatedPixels.y += wW * zR)
            }
          }
          _computePinchZoom(RW, MW) {
            const wW = this.camera.radius || WW.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = wW * Math.sqrt(RW) / Math.sqrt(MW);
            else if (this.pinchDeltaPercentage) {
              const WW = .001 * (MW - RW) * wW * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += WW
            } else {
              const WW = (MW - RW) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += WW
            }
          }
          onTouch(WW, RW, MW) {
            const wW = this._activeEntry ?? (this.camera.mC().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (wW)
              if ("pan" === wW.interaction) {
                const WW = wW.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== WW && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -RW * WW, this.camera.movement.panAccumulatedPixels.y += MW * WW)
              } else if ("rotate" === wW.interaction) {
              const WW = wW.PwW ?? wW.sensitivity ?? 1 / this.angularSensibilityX,
                CW = wW.IwW ?? wW.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -RW * WW, this.camera.movement.rotationAccumulatedPixels.y += -MW * CW
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(WW, RW, MW, wW, CW, zR) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(wW) - Math.sqrt(MW)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(WW, RW, MW, wW, CW, zR)
          }
          onButtonDown(WW) {
            this._pointerConditions.button = WW.button, this._pointerModifiers.ctrl = WW.ctrlKey, this._pointerModifiers.alt = WW.altKey, this._pointerModifiers.shift = WW.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(WW)
          }
          onButtonUp(WW) {
            this._activeEntry = null, super.onButtonUp(WW)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const fW = "function" === typeof Symbol && Symbol.metadata ? Object.create(eW[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], AW = [(0, CW.D)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: WW => "buttons" in WW,
              get: WW => WW.buttons,
              set: (WW, RW) => {
                WW.buttons = RW
              }
            },
            metadata: fW
          }, BW, tR), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: WW => "angularSensibilityX" in WW,
              get: WW => WW.angularSensibilityX,
              set: (WW, RW) => {
                WW.angularSensibilityX = RW
              }
            },
            metadata: fW
          }, TW, gR), (0, wW.e)(null, null, zR, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: WW => "angularSensibilityY" in WW,
              get: WW => WW.angularSensibilityY,
              set: (WW, RW) => {
                WW.angularSensibilityY = RW
              }
            },
            metadata: fW
          }, iR, YW), (0, wW.e)(null, null, AW, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchPrecision" in WW,
              get: WW => WW.pinchPrecision,
              set: (WW, RW) => {
                WW.pinchPrecision = RW
              }
            },
            metadata: fW
          }, JW, PW), (0, wW.e)(null, null, bR, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchDeltaPercentage" in WW,
              get: WW => WW.pinchDeltaPercentage,
              set: (WW, RW) => {
                WW.pinchDeltaPercentage = RW
              }
            },
            metadata: fW
          }, IW, oW), (0, wW.e)(null, null, yR, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: WW => "useNaturalPinchZoom" in WW,
              get: WW => WW.useNaturalPinchZoom,
              set: (WW, RW) => {
                WW.useNaturalPinchZoom = RW
              }
            },
            metadata: fW
          }, lW, FW), (0, wW.e)(null, null, NW, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningSensibility" in WW,
              get: WW => WW.panningSensibility,
              set: (WW, RW) => {
                WW.panningSensibility = RW
              }
            },
            metadata: fW
          }, QW, rR), fW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fW
          })
        })(), WW.MinimumRadiusForPinch = .001, WW
      })();
    oW.b.ArcRotateCameraPointersInput = QW;
    var rR = MW(37763);
    let cR = (() => {
      var WW;
      let RW, MW, zR, bR, yR, NW, eW, BW, tR, TW, gR, iR = [],
        YW = [],
        JW = [],
        PW = [],
        IW = [],
        oW = [],
        FW = [],
        fW = [],
        QW = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [];
      return WW = class {
        constructor() {
          this.camera = (0, wW.i)(this, iR), this.keysUp = (0, wW.i)(this, YW, [38]), this.keysDown = ((0, wW.i)(this, JW), (0, wW.i)(this, PW, [40])), this.keysLeft = ((0, wW.i)(this, IW), (0, wW.i)(this, oW, [37])), this.keysRight = ((0, wW.i)(this, FW), (0, wW.i)(this, fW, [39])), this.keysReset = ((0, wW.i)(this, QW), (0, wW.i)(this, cR, [220])), this.keysZoomIn = ((0, wW.i)(this, XW), (0, wW.i)(this, jR, [187, 107])), this.keysZoomOut = ((0, wW.i)(this, kR), (0, wW.i)(this, aR, [189, 109])), this.panningSensibility = ((0, wW.i)(this, sW), (0, wW.i)(this, dW, 50)), this.zoomingSensibility = ((0, wW.i)(this, pW), (0, wW.i)(this, hW, 25)), this.angularSpeed = ((0, wW.i)(this, UW), (0, wW.i)(this, EW, .01)), this._useAltToZoom = ((0, wW.i)(this, VW), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new AW.n, this._panDirection = new AW.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(WW) {
          this._useAltToZoom = WW, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const WW = this.camera.movement.input,
            RW = WW.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && RW ? WW.inputMap.splice(WW.inputMap.indexOf(RW), 1) : this._useAltToZoom && !RW && WW.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(WW) {
          WW = lW.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.QRW(), this._engine = this._scene.mC(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((RW => {
            const MW = RW.event;
            if (!MW.metaKey)
              if (RW.type === rR.e.KEYDOWN) {
                if (this._ctrlPressed = MW.ctrlKey, this._altPressed = MW.altKey, -1 !== this.keysUp.indexOf(MW.keyCode) || -1 !== this.keysDown.indexOf(MW.keyCode) || -1 !== this.keysLeft.indexOf(MW.keyCode) || -1 !== this.keysRight.indexOf(MW.keyCode) || -1 !== this.keysReset.indexOf(MW.keyCode) || -1 !== this.keysZoomIn.indexOf(MW.keyCode) || -1 !== this.keysZoomOut.indexOf(MW.keyCode)) {
                  -1 === this._keys.indexOf(MW.keyCode) && this._keys.push(MW.keyCode), MW.preventDefault && (WW || MW.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(MW.keyCode) || -1 !== this.keysDown.indexOf(MW.keyCode) || -1 !== this.keysLeft.indexOf(MW.keyCode) || -1 !== this.keysRight.indexOf(MW.keyCode) || -1 !== this.keysReset.indexOf(MW.keyCode) || -1 !== this.keysZoomIn.indexOf(MW.keyCode) || -1 !== this.keysZoomOut.indexOf(MW.keyCode)) {
              const RW = this._keys.indexOf(MW.keyCode);
              RW >= 0 && this._keys.splice(RW, 1), MW.preventDefault && (WW || MW.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const WW = this.camera,
              RW = WW.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const MW = this._rotateDirection.set(0, 0),
              wW = this._panDirection.set(0, 0);
            let CW = 0,
              zR = 0;
            for (let AW = 0; AW < this._keys.length; AW++) {
              const bR = this._keys[AW];
              if (this._keyboardConditions.key = bR, -1 === this.keysReset.indexOf(bR)) {
                const WW = RW.resolveInteraction("keyboard", this._keyboardConditions);
                if (WW)
                  if ("pan" === WW.interaction) zR = Math.max(zR, WW.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(bR) ? wW.x -= 1 : -1 !== this.keysRight.indexOf(bR) ? wW.x += 1 : -1 !== this.keysUp.indexOf(bR) ? wW.y += 1 : -1 !== this.keysDown.indexOf(bR) && (wW.y -= 1);
                  else if ("zoom" === WW.interaction) {
                  const MW = WW.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(bR) || -1 !== this.keysZoomIn.indexOf(bR) ? RW.handlers.zoom(MW) : -1 === this.keysDown.indexOf(bR) && -1 === this.keysZoomOut.indexOf(bR) || RW.handlers.zoom(-MW)
                } else "rotate" === WW.interaction && (CW = Math.max(CW, WW.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(bR) ? MW.x -= 1 : -1 !== this.keysRight.indexOf(bR) ? MW.x += 1 : -1 !== this.keysUp.indexOf(bR) ? MW.y -= 1 : -1 !== this.keysDown.indexOf(bR) && (MW.y += 1))
              } - 1 !== this.keysReset.indexOf(bR) && WW.useInputToRestoreState && WW.restoreState()
            }
            0 === MW.x && 0 === MW.y || (MW.normalize().scaleInPlace(CW), RW.handlers.rotate(MW.x, MW.y)), 0 === wW.x && 0 === wW.y || (wW.normalize().scaleInPlace(zR), RW.handlers.pan(wW.x, wW.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const AW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.D)()], tR = [(0, CW.D)()], TW = [(0, CW.D)()], gR = [(0, CW.D)()], (0, wW.e)(WW, null, gR, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAltToZoom" in WW,
            get: WW => WW.useAltToZoom
          },
          metadata: AW
        }, null, iR), (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysUp" in WW,
            get: WW => WW.keysUp,
            set: (WW, RW) => {
              WW.keysUp = RW
            }
          },
          metadata: AW
        }, YW, JW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysDown" in WW,
            get: WW => WW.keysDown,
            set: (WW, RW) => {
              WW.keysDown = RW
            }
          },
          metadata: AW
        }, PW, IW), (0, wW.e)(null, null, zR, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysLeft" in WW,
            get: WW => WW.keysLeft,
            set: (WW, RW) => {
              WW.keysLeft = RW
            }
          },
          metadata: AW
        }, oW, FW), (0, wW.e)(null, null, bR, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysRight" in WW,
            get: WW => WW.keysRight,
            set: (WW, RW) => {
              WW.keysRight = RW
            }
          },
          metadata: AW
        }, fW, QW), (0, wW.e)(null, null, yR, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysReset" in WW,
            get: WW => WW.keysReset,
            set: (WW, RW) => {
              WW.keysReset = RW
            }
          },
          metadata: AW
        }, cR, XW), (0, wW.e)(null, null, NW, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysZoomIn" in WW,
            get: WW => WW.keysZoomIn,
            set: (WW, RW) => {
              WW.keysZoomIn = RW
            }
          },
          metadata: AW
        }, jR, kR), (0, wW.e)(null, null, eW, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: WW => "keysZoomOut" in WW,
            get: WW => WW.keysZoomOut,
            set: (WW, RW) => {
              WW.keysZoomOut = RW
            }
          },
          metadata: AW
        }, aR, sW), (0, wW.e)(null, null, BW, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "panningSensibility" in WW,
            get: WW => WW.panningSensibility,
            set: (WW, RW) => {
              WW.panningSensibility = RW
            }
          },
          metadata: AW
        }, dW, pW), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: WW => "zoomingSensibility" in WW,
            get: WW => WW.zoomingSensibility,
            set: (WW, RW) => {
              WW.zoomingSensibility = RW
            }
          },
          metadata: AW
        }, hW, UW), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: WW => "angularSpeed" in WW,
            get: WW => WW.angularSpeed,
            set: (WW, RW) => {
              WW.angularSpeed = RW
            }
          },
          metadata: AW
        }, EW, VW), AW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AW
        })
      })(), WW
    })();
    oW.b.ArcRotateCameraKeyboardMoveInput = cR;
    var XW = MW(35852),
      jR = MW(37765);
    let kR = (() => {
      var WW;
      let RW, MW, zR, yR = [],
        NW = [],
        BW = [],
        TW = [],
        gR = [],
        iR = [];
      return WW = class {
        constructor() {
          this.wheelPrecision = (0, wW.i)(this, yR, 3), this.zoomToMouseLocation = ((0, wW.i)(this, NW), (0, wW.i)(this, BW, !1)), this.wheelDeltaPercentage = ((0, wW.i)(this, TW), (0, wW.i)(this, gR, 0)), this.customComputeDeltaFromMouseWheel = ((0, wW.i)(this, iR), null), this._viewOffset = new AW.q(0, 0, 0), this._globalOffset = new AW.q(0, 0, 0), this._inertialPanning = AW.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(WW, RW) {
          let MW;
          const wW = .01 * WW * this.wheelDeltaPercentage * RW;
          return MW = WW > 0 ? wW / (1 + this.wheelDeltaPercentage) : wW * (1 + this.wheelDeltaPercentage), MW
        }
        attachControl(WW) {
          WW = lW.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = RW => {
            if (RW.type !== eW.c.POINTERWHEEL) return;
            const MW = RW.event;
            let wW;
            const CW = MW.deltaMode === jR.c.DOM_DELTA_LINE ? 40 : 1,
              zR = -MW.deltaY * CW;
            if (this.customComputeDeltaFromMouseWheel) wW = this.customComputeDeltaFromMouseWheel(zR, this, MW);
            else if (this.wheelDeltaPercentage) {
              if (wW = this._computeDeltaFromMouseWheelLegacyEvent(zR, this.camera.radius), wW > 0) {
                const WW = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let RW = this.camera.radius,
                  MW = WW + wW;
                for (let wW = 0; wW < 20 && !(RW <= MW) && !(Math.abs(MW * this.camera.inertia) < .001); wW++) RW -= MW, MW *= this.camera.inertia;
                RW = (0, bR.Clamp)(RW, 0, Number.MAX_VALUE), wW = this._computeDeltaFromMouseWheelLegacyEvent(zR, RW)
              }
            } else {
              const WW = this.camera.movement.input.getEntry("wheel", "zoom");
              wW = zR * (WW?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            wW && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(wW)) : this.camera.movement.zoomAccumulatedPixels += wW), MW.preventDefault && (WW || MW.preventDefault())
          }, this._observer = this.camera.QRW()._inputManager._addCameraPointerObserver(this._wheel, eW.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.YzW(0)
        }
        detachControl() {
          this._observer && (this.camera.QRW()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const WW = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(WW.inertialAlphaOffset) + Math.abs(WW.inertialBetaOffset) + Math.abs(WW.inertialRadiusOffset)) {
            this._updateHitPlane(), WW.target.addInPlace(this._inertialPanning), WW.radius -= this._zoomToMouseRadiusOffset;
            const RW = WW.movement.getFrameIndependentDecay(WW.inertia);
            this._inertialPanning.scaleInPlace(RW), this._zoomToMouseRadiusOffset *= RW, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < tR.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const WW = this.camera,
            RW = WW.target.subtract(WW.position);
          this._hitPlane = XW.c.FromPositionAndNormal(WW.target, RW)
        }
        _getPosition() {
          const WW = this.camera,
            RW = WW.QRW(),
            MW = RW.createPickingRay(RW.pointerX, RW.pointerY, AW.d.Identity(), WW, !1);
          0 === WW.targetScreenOffset.x && 0 === WW.targetScreenOffset.y || (this._viewOffset.set(WW.targetScreenOffset.x, WW.targetScreenOffset.y, 0), WW.getViewMatrix().invertToRef(WW._cameraTransformMatrix), this._globalOffset = AW.q.TransformNormal(this._viewOffset, WW._cameraTransformMatrix), MW.origin.addInPlace(this._globalOffset));
          let wW = 0;
          return this._hitPlane && (wW = MW.intersectsPlane(this._hitPlane) ?? 0), MW.origin.addInPlace(MW.direction.scaleInPlace(wW))
        }
        _zoomToMouse(WW) {
          const RW = this.camera,
            MW = 1 - RW.inertia,
            wW = RW.movement.getFrameIndependentInputScale(RW.inertia);
          if (RW.lowerRadiusLimit) {
            const CW = RW.lowerRadiusLimit ?? 0;
            RW.radius - (this._zoomToMouseRadiusOffset + WW * wW) / MW < CW && (WW = ((RW.radius - CW) * MW - this._zoomToMouseRadiusOffset) / wW)
          }
          if (RW.upperRadiusLimit) {
            const CW = RW.upperRadiusLimit ?? 0;
            RW.radius - (this._zoomToMouseRadiusOffset + WW * wW) / MW > CW && (WW = ((RW.radius - CW) * MW - this._zoomToMouseRadiusOffset) / wW)
          }
          const CW = WW / MW / RW.radius,
            zR = this._getPosition(),
            bR = AW.k.vC[6];
          zR.subtractToRef(RW.target, bR), bR.scaleInPlace(CW), bR.scaleInPlace(MW), bR.scaleInPlace(wW), this._inertialPanning.addInPlace(bR), this._zoomToMouseRadiusOffset += WW * wW
        }
        _zeroIfClose(WW) {
          Math.abs(WW.x) < tR.c && (WW.x = 0), Math.abs(WW.y) < tR.c && (WW.y = 0), Math.abs(WW.z) < tR.c && (WW.z = 0)
        }
      }, (() => {
        const AW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelPrecision" in WW,
            get: WW => WW.wheelPrecision,
            set: (WW, RW) => {
              WW.wheelPrecision = RW
            }
          },
          metadata: AW
        }, yR, NW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: WW => "zoomToMouseLocation" in WW,
            get: WW => WW.zoomToMouseLocation,
            set: (WW, RW) => {
              WW.zoomToMouseLocation = RW
            }
          },
          metadata: AW
        }, BW, TW), (0, wW.e)(null, null, zR, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: WW => "wheelDeltaPercentage" in WW,
            get: WW => WW.wheelDeltaPercentage,
            set: (WW, RW) => {
              WW.wheelDeltaPercentage = RW
            }
          },
          metadata: AW
        }, gR, iR), AW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AW
        })
      })(), WW
    })();
    oW.b.ArcRotateCameraMouseWheelInput = kR;
    var aR, sW, dW = MW(37470);
    class pW extends oW.d {
      constructor(WW) {
        super(WW)
      }
      addMouseWheel() {
        return this.add(new kR), this
      }
      addPointers() {
        return this.add(new QW), this
      }
      addKeyboard() {
        return this.add(new cR), this
      }
    }(aR = pW.prototype).addVRDeviceOrientation ?? (aR.addVRDeviceOrientation = (0, dW.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (sW = pW.prototype).addGamepad ?? (sW.addGamepad = (0, dW.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var hW = MW(35361),
      UW = MW(37812),
      EW = MW(37815);
    class VW extends UW.d {
      constructor(WW, RW, MW) {
        super(WW, RW, MW), this.input = new EW.d({
          pan: (WW, RW) => {
            this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += RW
          },
          rotate: (WW, RW) => {
            this.rotationAccumulatedPixels.x += WW, this.rotationAccumulatedPixels.y += RW
          },
          zoom: WW => {
            this.zoomAccumulatedPixels += WW
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

    function mR(WW, RW) {
      return isNaN(WW) ? RW : WW
    }
    let xR = (() => {
        var WW;
        let RW, MW, yR, eW, BW, gR, iR, oW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW, dW, hW, UW, EW, xR, vR, KW, uW, OW, nW, GW = IW.f,
          LW = [],
          HW = [],
          DW = [],
          qR = [],
          ZW = [],
          SW = [],
          WR = [],
          RR = [],
          MR = [],
          wR = [],
          CR = [],
          zM = [],
          AR = [],
          bM = [],
          yM = [],
          NR = [],
          eR = [],
          BR = [],
          tM = [],
          TR = [],
          gM = [],
          iM = [],
          YR = [],
          JR = [],
          PR = [],
          IR = [],
          oR = [],
          lR = [],
          FR = [],
          fR = [],
          QR = [],
          rM = [],
          cM = [],
          XR = [],
          jM = [],
          kM = [],
          aM = [],
          sR = [],
          dR = [],
          pR = [],
          hR = [],
          UR = [],
          ER = [],
          VR = [],
          mM = [],
          xM = [],
          vM = [];
        return WW = class extends GW {
          get target() {
            return this.NCW
          }
          set target(WW) {
            this.setTarget(WW)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(WW) {
            WW && this.setTarget(WW)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(WW) {
            this.setPosition(WW)
          }
          set upVector(WW) {
            this._upToYMatrix || (this._yToUpMatrix = new AW.d, this._upToYMatrix = new AW.d, this._upVector = AW.q.Zero()), WW.normalize(), this._upVector.hyW(WW), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            AW.d.RotationAlignToRef(AW.q.UpReadOnly, this._upVector, this._yToUpMatrix), AW.d.RotationAlignToRef(this._upVector, AW.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const WW = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialAlphaOffset(WW) {
            this._inertialAlphaOffset = WW, 0 === WW && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const WW = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialBetaOffset(WW) {
            this._inertialBetaOffset = WW, 0 === WW && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const WW = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(WW) < this._rotationEpsilon ? 0 : WW
          }
          set inertialRadiusOffset(WW) {
            this._inertialRadiusOffset = WW, 0 === WW && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(WW) {
            this._panningInertia = WW, this.movement && (this.movement.panInertia = WW)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(WW) {
            this._inertia = WW, this.movement && (this.movement.rotationInertia = WW, this.movement.zoomInertia = WW)
          }
          get angularSensibilityX() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.angularSensibilityX : 0
          }
          set angularSensibilityX(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.angularSensibilityX = WW)
          }
          get angularSensibilityY() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.angularSensibilityY : 0
          }
          set angularSensibilityY(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.angularSensibilityY = WW)
          }
          get pinchPrecision() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.pinchPrecision : 0
          }
          set pinchPrecision(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.pinchPrecision = WW)
          }
          get pinchDeltaPercentage() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.pinchDeltaPercentage = WW)
          }
          get useNaturalPinchZoom() {
            const WW = this.inputs.attached.pointers;
            return !!WW && WW.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.useNaturalPinchZoom = WW)
          }
          get panningSensibility() {
            const WW = this.inputs.attached.pointers;
            return WW ? WW.panningSensibility : 0
          }
          set panningSensibility(WW) {
            const RW = this.inputs.attached.pointers;
            RW && (RW.panningSensibility = WW)
          }
          get keysUp() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysUp : []
          }
          set keysUp(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysUp = WW)
          }
          get keysDown() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysDown : []
          }
          set keysDown(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysDown = WW)
          }
          get keysLeft() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysLeft : []
          }
          set keysLeft(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysLeft = WW)
          }
          get keysRight() {
            const WW = this.inputs.attached.keyboard;
            return WW ? WW.keysRight : []
          }
          set keysRight(WW) {
            const RW = this.inputs.attached.keyboard;
            RW && (RW.keysRight = WW)
          }
          get wheelPrecision() {
            const WW = this.inputs.attached.mousewheel;
            return WW ? WW.wheelPrecision : 0
          }
          set wheelPrecision(WW) {
            const RW = this.inputs.attached.mousewheel;
            RW && (RW.wheelPrecision = WW)
          }
          get zoomToMouseLocation() {
            const WW = this.inputs.attached.mousewheel;
            return !!WW && WW.zoomToMouseLocation
          }
          set zoomToMouseLocation(WW) {
            const RW = this.inputs.attached.mousewheel;
            RW && (RW.zoomToMouseLocation = WW)
          }
          get wheelDeltaPercentage() {
            const WW = this.inputs.attached.mousewheel;
            return WW ? WW.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(WW) {
            const RW = this.inputs.attached.mousewheel;
            RW && (RW.wheelDeltaPercentage = WW)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(WW) {
            this._useCtrlForPanningInternal = WW;
            const RW = this.movement.input,
              MW = RW.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !WW && MW ? RW.inputMap.splice(RW.inputMap.indexOf(MW), 1) : WW && !MW && RW.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const wW = RW.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !WW && wW ? RW.inputMap.splice(RW.inputMap.indexOf(wW), 1) : WW && !wW && RW.addEntry({
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
          set _panningMouseButton(WW) {
            this._panningMouseButtonInternal = WW;
            const RW = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            RW && (RW.button = WW)
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
          set useBouncingBehavior(WW) {
            WW !== this.useBouncingBehavior && (WW ? (this._bouncingBehavior = new YW, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(WW) {
            WW !== this.useFramingBehavior && (WW ? (this._framingBehavior = new JW, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(WW) {
            WW !== this.useAutoRotationBehavior && (WW ? (this._autoRotationBehavior = new TW, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(WW, RW, MW, CW, bR, yR) {
            var NW;
            let eW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(WW, AW.q.Zero(), yR, eW), NW = this, this.alpha = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, void 0)), this.beta = ((0, wW.i)(this, DW), (0, wW.i)(this, qR, void 0)), this.radius = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, void 0)), this.overrideCloneAlphaBetaRadius = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, void 0)), this.NCW = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, void 0)), this._targetHost = ((0, wW.i)(this, CR), (0, wW.i)(this, zM, void 0)), this._upToYMatrix = (0, wW.i)(this, AR), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, wW.i)(this, bM, null), this.upperAlphaLimit = ((0, wW.i)(this, yM), (0, wW.i)(this, NR, null)), this.lowerBetaLimit = ((0, wW.i)(this, eR), (0, wW.i)(this, BR, .01)), this.upperBetaLimit = ((0, wW.i)(this, tM), (0, wW.i)(this, TR, Math.PI - .01)), this.lowerRadiusLimit = ((0, wW.i)(this, gM), (0, wW.i)(this, iM, null)), this.upperRadiusLimit = ((0, wW.i)(this, YR), (0, wW.i)(this, JR, null)), this.lowerTargetYLimit = ((0, wW.i)(this, PR), (0, wW.i)(this, IR, -1 / 0)), this.inertialPanningX = ((0, wW.i)(this, oR), (0, wW.i)(this, lR, 0)), this.inertialPanningY = ((0, wW.i)(this, FR), (0, wW.i)(this, fR, 0)), this.pinchToPanMaxDistance = ((0, wW.i)(this, QR), (0, wW.i)(this, rM, 20)), this.panningDistanceLimit = ((0, wW.i)(this, cM), (0, wW.i)(this, XR, null)), this.panningOriginTarget = ((0, wW.i)(this, jM), (0, wW.i)(this, kM, AW.q.Zero())), this._panningInertia = ((0, wW.i)(this, aM), .9), this._inertia = .9, this.zoomOnFactor = (0, wW.i)(this, sR, 1), this.targetScreenOffset = ((0, wW.i)(this, dR), (0, wW.i)(this, pR, AW.n.Zero())), this.allowUpsideDown = ((0, wW.i)(this, hR), (0, wW.i)(this, UR, !0)), this.useInputToRestoreState = ((0, wW.i)(this, ER), (0, wW.i)(this, VR, !0)), this.restoreStateInterpolationFactor = ((0, wW.i)(this, mM), (0, wW.i)(this, xM, 0)), this._currentInterpolationFactor = ((0, wW.i)(this, vM), 0), this._viewMatrix = new AW.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new AW.q(1, 1, 0), this._transformedDirection = new AW.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new zR.c, this.checkCollisions = !1, this.collisionRadius = new AW.q(.5, .5, .5), this._previousPosition = AW.q.Zero(), this._collisionVelocity = AW.q.Zero(), this._newPosition = AW.q.Zero(), this._computationVector = AW.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new AW.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new AW.n(NaN, NaN), this._onCollisionPositionChange = function(WW, RW) {
              let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              MW ? (NW.setPosition(RW), NW.YR && NW.YR(MW)) : NW._previousPosition.hyW(NW._position);
              const wW = Math.cos(NW.alpha),
                CW = Math.sin(NW.alpha),
                zR = Math.cos(NW.beta);
              let AW = Math.sin(NW.beta);
              0 === AW && (AW = 1e-4);
              const bR = NW._getTargetPosition();
              NW._computationVector.nzW(NW.radius * wW * AW, NW.radius * zR, NW.radius * CW * AW), bR.addToRef(NW._computationVector, NW._newPosition), NW._position.hyW(NW._newPosition);
              let yR = NW.upVector;
              NW.allowUpsideDown && NW.beta < 0 && (yR = yR.clone(), yR = yR.zb()), NW._computeViewMatrix(NW._position, bR, yR), NW._viewMatrix.addAtIndex(12, NW.targetScreenOffset.x), NW._viewMatrix.addAtIndex(13, NW.targetScreenOffset.y), NW._collisionTriggered = !1
            }, this.NCW = AW.q.Zero(), bR && this.setTarget(bR), this.alpha = RW, this.beta = MW, this.radius = CW, this.getViewMatrix(), this.inputs = new pW(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new VW(this.QRW(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.NCW = new AW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = AW.n.Zero()
          }
          _updateCache(WW) {
            WW || super._updateCache(), this._cache.NCW.hyW(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.hyW(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const WW = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? WW.addToRef(this._targetBoundingCenter, this.NCW) : this.NCW.hyW(WW)
            }
            const WW = this._getLockedTargetPosition();
            return WW || this.NCW
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > tR.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              zR = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != zR ? this._currentInterpolationFactor = zR : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = mR(WW, this._goalAlpha), this._goalBeta = mR(RW, this._goalBeta), this._goalRadius = mR(MW, this._goalRadius), this._goalTarget.set(mR(wW.x, this._goalTarget.x), mR(wW.y, this._goalTarget.y), mR(wW.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(mR(CW.x, this._goalTargetScreenOffset.x), mR(CW.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, bR.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, bR.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, bR.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, bR.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.NCW.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(WW, RW) {
            let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const CW = arguments;
            RW = lW.j.BackCompatCameraNoPreventDefault(CW), this._useCtrlForPanning = MW, this._panningMouseButton = wW, "boolean" === typeof CW[0] && (CW.length > 1 && (this._useCtrlForPanning = CW[1]), CW.length > 2 && (this._panningMouseButton = CW[2])), this.inputs.attachElement(RW), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(WW, RW, MW) {
            const wW = this.invertRotation ? -1 : 1;
            let CW = WW * this._calculateHandednessMultiplier();
            this.beta < 0 && (CW *= -1), this.alpha += CW * wW, this.beta += RW * wW, this.radius -= MW
          }
          _applyPanDelta(WW, RW) {
            const MW = AW.k.vC[0].nzW(WW, RW, RW);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), MW.multiplyInPlace(this.panningAxis), AW.q.TransformNormalToRef(MW, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const WW = this.upVector,
                RW = AW.q.CrossToRef(this._transformedDirection, WW, this._transformedDirection);
              AW.q.CrossToRef(WW, RW, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.NCW);
                AW.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.NCW.hyW(this._transformedDirection)
              } else {
                if (this.parent) {
                  const WW = AW.k.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(WW), WW.transposeToRef(WW), AW.q.TransformCoordinatesToRef(this._transformedDirection, WW, this._transformedDirection)
                }
                this.NCW.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let WW = !1;
            this.movement.computeCurrentFrameDeltas();
            const RW = this.movement.rotationDeltaCurrentFrame,
              MW = this.movement.zoomDeltaCurrentFrame,
              wW = this.movement.panDeltaCurrentFrame;
            if (0 === RW.x && 0 === RW.y && 0 === MW && 0 === wW.x && 0 === wW.y || (WW = !0, 0 === RW.x && 0 === RW.y && 0 === MW || this._applyRotationAndZoomDelta(RW.x, RW.y, MW), 0 === wW.x && 0 === wW.y || this._applyPanDelta(wW.x, wW.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), WW = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const RW = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < RW && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < RW && (this.inertialPanningY = 0), WW = !0
            }
            if (WW) this.stopInterpolation();
            else if (this._isInterpolating) {
              let WW = !1;
              const RW = this._scene.mC().getDeltaTime() / 1e3,
                MW = 1 - Math.pow(2, -RW / this._currentInterpolationFactor),
                wW = mR(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const RW = AW.k.vC[0].set(mR(this._goalTarget.x, this.NCW.x), mR(this._goalTarget.y, this.NCW.y), mR(this._goalTarget.z, this.NCW.z));
                AW.q.LerpToRef(this.target, RW, MW, this.NCW), 10 * AW.q.Distance(this.target, RW) / wW < tR.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.hyW(RW), this.setTarget(this.target, !1, !0, !0)) : WW = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const RW = AW.e.RotationAlphaBetaGammaToRef(mR(this._goalAlpha, this.alpha), mR(this._goalBeta, this.beta), 0, AW.k.Quaternion[0]),
                  wW = AW.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, AW.k.Quaternion[1]),
                  CW = AW.e.SlerpToRef(wW, RW, MW, AW.k.Quaternion[2]);
                CW.normalize();
                const zR = CW.toAlphaBetaGammaToRef(AW.k.vC[0]);
                if (this.alpha = zR.x, this.beta = zR.y, CW.isApprox(RW, tR.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const WW = RW.toAlphaBetaGammaToRef(AW.k.vC[0]);
                  this.alpha = WW.x, this.beta = WW.y
                } else WW = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (wW - this.radius) * MW, Math.abs(wW / this.radius - 1) < tR.c ? (this._goalRadius = NaN, this.radius = wW) : WW = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const RW = AW.k.Vector2[0].set(mR(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), mR(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                AW.n.LerpToRef(this.targetScreenOffset, RW, MW, this.targetScreenOffset), AW.n.Distance(this.targetScreenOffset, RW) < tR.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.hyW(RW)) : WW = !0
              }
              this._isInterpolating = WW
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || AW.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const WW = this.alpha;
            var RW, MW;
            this.alpha = function(WW) {
              let RW = Math.PI / 2;
              return 0 === WW.x && 0 === WW.z || (RW = Math.acos(WW.x / Math.sqrt(Math.pow(WW.x, 2) + Math.pow(WW.z, 2)))), WW.z < 0 && (RW = 2 * Math.PI - RW), RW
            }(this._computationVector), this.beta = (RW = this._computationVector.y, MW = this.radius, Math.acos(RW / MW));
            const wW = Math.round((WW - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * wW * Math.PI, this._checkLimits()
          }
          setPosition(WW) {
            this._position.equals(WW) || (this._position.hyW(WW), this.rebuildAnglesAndRadius())
          }
          setTarget(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (wW = this.overrideCloneAlphaBetaRadius ?? wW, WW.computeWorldMatrix) RW && WW.LRW ? this._targetBoundingCenter = WW.LRW().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, WW.computeWorldMatrix(), this._targetHost = WW, this.NCW = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const RW = WW,
                wW = this._getTargetPosition();
              if (wW && !MW && wW.equals(RW)) return;
              this._targetHost = null, this.NCW = RW, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            wW || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const WW = Math.cos(this.alpha),
              RW = Math.sin(this.alpha),
              MW = Math.cos(this.beta);
            let wW = Math.sin(this.beta);
            0 === wW && (wW = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const CW = this._getTargetPosition();
            if (this._computationVector.nzW(this.radius * WW * wW, this.radius * MW, this.radius * RW * wW), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || AW.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), CW.addToRef(this._computationVector, this._newPosition), this.QRW().collisionsEnabled && this.checkCollisions) {
              const WW = this.QRW().collisionCoordinator;
              this._collider || (this._collider = WW.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, WW.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.hyW(this._newPosition);
              let WW = this.upVector;
              this.allowUpsideDown && wW < 0 && (WW = WW.zb()), this._computeViewMatrix(this._position, CW, WW), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.hyW(CW), this._viewMatrix
          }
          zoomOn(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            WW = WW || this.QRW().meshes;
            const MW = NW.b.MinMax(WW);
            let wW = this._calculateLowerRadiusFromModelBoundingSphere(MW.min, MW.max);
            if (wW = Math.max(Math.min(wW, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = wW * this.zoomOnFactor, this.mode === PW.e.ORTHOGRAPHIC_CAMERA) {
              const WW = this.QRW().mC().getAspectRatio(this),
                RW = wW * this.zoomOnFactor / 2;
              this.orthoLeft = -RW * WW, this.orthoRight = RW * WW, this.orthoBottom = -RW, this.orthoTop = RW
            }
            this.focusOn({
              min: MW.min,
              max: MW.max,
              distance: wW
            }, RW)
          }
          focusOn(WW) {
            let RW, MW, wW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === WW.min) {
              const wW = WW || this.QRW().meshes;
              RW = NW.b.MinMax(wW), MW = AW.q.Distance(RW.min, RW.max)
            } else {
              RW = WW, MW = WW.distance
            }
            this.NCW = NW.b.Center(RW), wW || (this.maxZ = 2 * MW)
          }
          createRigCamera(RW, MW) {
            let wW = 0;
            switch (this.cameraRigMode) {
              case PW.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case PW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case PW.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case PW.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case PW.e.RIG_MODE_VR:
                wW = this._cameraRigParams.stereoHalfAngle * (0 === MW ? 1 : -1);
                break;
              case PW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                wW = this._cameraRigParams.stereoHalfAngle * (0 === MW ? -1 : 1)
            }
            const CW = new WW(RW, this.alpha + wW, this.beta, this.radius, this.NCW, this.QRW());
            return CW._cameraRigParams = {}, CW.isRigCamera = !0, CW.rigParent = this, CW.upVector = this.upVector, CW.mode = this.mode, CW.orthoLeft = this.orthoLeft, CW.orthoRight = this.orthoRight, CW.orthoBottom = this.orthoBottom, CW.orthoTop = this.orthoTop, CW
          }
          _updateRigCameras() {
            const WW = this._rigCameras[0],
              RW = this._rigCameras[1];
            switch (WW.beta = RW.beta = this.beta, this.cameraRigMode) {
              case PW.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case PW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case PW.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case PW.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case PW.e.RIG_MODE_VR:
                WW.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, RW.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case PW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                WW.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, RW.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const wW = AW.q.Distance(WW, RW),
              CW = this.QRW().mC().getAspectRatio(this),
              zR = Math.tan(this.fov / 2),
              bR = zR * CW,
              yR = .5 * wW * MW,
              NW = yR * Math.sqrt(1 + 1 / (bR * bR)),
              eW = yR * Math.sqrt(1 + 1 / (zR * zR));
            return Math.max(NW, eW)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(GW[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], yR = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.B)("target")], gR = [(0, CW.t)("targetHost")], iR = [(0, CW.D)()], oW = [(0, CW.D)()], FW = [(0, CW.D)()], fW = [(0, CW.D)()], QW = [(0, CW.D)()], rR = [(0, CW.D)()], cR = [(0, CW.D)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], aR = [(0, CW.D)()], sW = [(0, CW.D)()], dW = [(0, CW.D)()], hW = [(0, CW.D)()], UW = [(0, CW.B)()], EW = [(0, CW.D)()], xR = [(0, CW.D)()], vR = [(0, CW.D)()], KW = [(0, CW.z)()], uW = [(0, CW.D)()], OW = [(0, CW.D)()], nW = [(0, CW.D)()], (0, wW.e)(WW, null, iR, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialAlphaOffset" in WW,
              get: WW => WW.inertialAlphaOffset
            },
            metadata: zR
          }, null, LW), (0, wW.e)(WW, null, oW, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialBetaOffset" in WW,
              get: WW => WW.inertialBetaOffset
            },
            metadata: zR
          }, null, LW), (0, wW.e)(WW, null, FW, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialRadiusOffset" in WW,
              get: WW => WW.inertialRadiusOffset
            },
            metadata: zR
          }, null, LW), (0, wW.e)(WW, null, EW, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningInertia" in WW,
              get: WW => WW.panningInertia
            },
            metadata: zR
          }, null, LW), (0, wW.e)(WW, null, xR, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: WW => "zoomToMouseLocation" in WW,
              get: WW => WW.zoomToMouseLocation
            },
            metadata: zR
          }, null, LW), (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "alpha" in WW,
              get: WW => WW.alpha,
              set: (WW, RW) => {
                WW.alpha = RW
              }
            },
            metadata: zR
          }, HW, DW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: WW => "beta" in WW,
              get: WW => WW.beta,
              set: (WW, RW) => {
                WW.beta = RW
              }
            },
            metadata: zR
          }, qR, ZW), (0, wW.e)(null, null, yR, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: WW => "radius" in WW,
              get: WW => WW.radius,
              set: (WW, RW) => {
                WW.radius = RW
              }
            },
            metadata: zR
          }, SW, WR), (0, wW.e)(null, null, eW, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: WW => "overrideCloneAlphaBetaRadius" in WW,
              get: WW => WW.overrideCloneAlphaBetaRadius,
              set: (WW, RW) => {
                WW.overrideCloneAlphaBetaRadius = RW
              }
            },
            metadata: zR
          }, RR, MR), (0, wW.e)(null, null, BW, {
            kind: "field",
            name: "NCW",
            static: !1,
            private: !1,
            access: {
              has: WW => "NCW" in WW,
              get: WW => WW.NCW,
              set: (WW, RW) => {
                WW.NCW = RW
              }
            },
            metadata: zR
          }, wR, CR), (0, wW.e)(null, null, gR, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: WW => "_targetHost" in WW,
              get: WW => WW._targetHost,
              set: (WW, RW) => {
                WW._targetHost = RW
              }
            },
            metadata: zR
          }, zM, AR), (0, wW.e)(null, null, fW, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerAlphaLimit" in WW,
              get: WW => WW.lowerAlphaLimit,
              set: (WW, RW) => {
                WW.lowerAlphaLimit = RW
              }
            },
            metadata: zR
          }, bM, yM), (0, wW.e)(null, null, QW, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperAlphaLimit" in WW,
              get: WW => WW.upperAlphaLimit,
              set: (WW, RW) => {
                WW.upperAlphaLimit = RW
              }
            },
            metadata: zR
          }, NR, eR), (0, wW.e)(null, null, rR, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerBetaLimit" in WW,
              get: WW => WW.lowerBetaLimit,
              set: (WW, RW) => {
                WW.lowerBetaLimit = RW
              }
            },
            metadata: zR
          }, BR, tM), (0, wW.e)(null, null, cR, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperBetaLimit" in WW,
              get: WW => WW.upperBetaLimit,
              set: (WW, RW) => {
                WW.upperBetaLimit = RW
              }
            },
            metadata: zR
          }, TR, gM), (0, wW.e)(null, null, XW, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerRadiusLimit" in WW,
              get: WW => WW.lowerRadiusLimit,
              set: (WW, RW) => {
                WW.lowerRadiusLimit = RW
              }
            },
            metadata: zR
          }, iM, YR), (0, wW.e)(null, null, jR, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "upperRadiusLimit" in WW,
              get: WW => WW.upperRadiusLimit,
              set: (WW, RW) => {
                WW.upperRadiusLimit = RW
              }
            },
            metadata: zR
          }, JR, PR), (0, wW.e)(null, null, kR, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "lowerTargetYLimit" in WW,
              get: WW => WW.lowerTargetYLimit,
              set: (WW, RW) => {
                WW.lowerTargetYLimit = RW
              }
            },
            metadata: zR
          }, IR, oR), (0, wW.e)(null, null, aR, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialPanningX" in WW,
              get: WW => WW.inertialPanningX,
              set: (WW, RW) => {
                WW.inertialPanningX = RW
              }
            },
            metadata: zR
          }, lR, FR), (0, wW.e)(null, null, sW, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: WW => "inertialPanningY" in WW,
              get: WW => WW.inertialPanningY,
              set: (WW, RW) => {
                WW.inertialPanningY = RW
              }
            },
            metadata: zR
          }, fR, QR), (0, wW.e)(null, null, dW, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: WW => "pinchToPanMaxDistance" in WW,
              get: WW => WW.pinchToPanMaxDistance,
              set: (WW, RW) => {
                WW.pinchToPanMaxDistance = RW
              }
            },
            metadata: zR
          }, rM, cM), (0, wW.e)(null, null, hW, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningDistanceLimit" in WW,
              get: WW => WW.panningDistanceLimit,
              set: (WW, RW) => {
                WW.panningDistanceLimit = RW
              }
            },
            metadata: zR
          }, XR, jM), (0, wW.e)(null, null, UW, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: WW => "panningOriginTarget" in WW,
              get: WW => WW.panningOriginTarget,
              set: (WW, RW) => {
                WW.panningOriginTarget = RW
              }
            },
            metadata: zR
          }, kM, aM), (0, wW.e)(null, null, vR, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: WW => "zoomOnFactor" in WW,
              get: WW => WW.zoomOnFactor,
              set: (WW, RW) => {
                WW.zoomOnFactor = RW
              }
            },
            metadata: zR
          }, sR, dR), (0, wW.e)(null, null, KW, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: WW => "targetScreenOffset" in WW,
              get: WW => WW.targetScreenOffset,
              set: (WW, RW) => {
                WW.targetScreenOffset = RW
              }
            },
            metadata: zR
          }, pR, hR), (0, wW.e)(null, null, uW, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: WW => "allowUpsideDown" in WW,
              get: WW => WW.allowUpsideDown,
              set: (WW, RW) => {
                WW.allowUpsideDown = RW
              }
            },
            metadata: zR
          }, UR, ER), (0, wW.e)(null, null, OW, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: WW => "useInputToRestoreState" in WW,
              get: WW => WW.useInputToRestoreState,
              set: (WW, RW) => {
                WW.useInputToRestoreState = RW
              }
            },
            metadata: zR
          }, VR, mM), (0, wW.e)(null, null, nW, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: WW => "restoreStateInterpolationFactor" in WW,
              get: WW => WW.restoreStateInterpolationFactor,
              set: (WW, RW) => {
                WW.restoreStateInterpolationFactor = RW
              }
            },
            metadata: zR
          }, xM, vM), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      vR = !1;
    vR || (vR = !0, yR.b.AddNodeConstructor("ArcRotateCamera", ((WW, RW) => () => new xR(WW, 0, 0, 1, AW.q.Zero(), RW))), (0, hW.e)("BABYLON.ArcRotateCamera", xR))
  },
  37821: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.b
    });
    var wW = MW(37830);
    (0, wW.e)()
  },
  37830: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => tR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(35376),
      bR = MW(37836),
      yR = MW(37800),
      NW = MW(35361);
    let eW = (() => {
        var WW;
        let RW, MW, yR = bR.c,
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        return WW = class extends yR {
          constructor(WW, RW, MW, CW) {
            super(WW, MW, CW), this.groundColor = (0, wW.i)(this, NW, new AW.d(0, 0, 0)), this.direction = ((0, wW.i)(this, eW), (0, wW.i)(this, BW, void 0)), (0, wW.i)(this, tR), this.direction = RW || zR.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = zR.q.Normalize(WW.subtract(zR.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", MW.x, MW.y, MW.z, 0, RW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RW), this
          }
          transferToNodeMaterialEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return WW.setFloat3(RW, MW.x, MW.y, MW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = zR.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, RW) {
            WW["HEMILIGHT" + RW] = !0
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(yR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.m)()], MW = [(0, CW.B)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, RW) => {
                WW.groundColor = RW
              }
            },
            metadata: zR
          }, NW, eW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, RW) => {
                WW.direction = RW
              }
            },
            metadata: zR
          }, BW, tR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      BW = !1;

    function tR() {
      BW || (BW = !0, yR.b.AddNodeConstructor("Light_Type_3", ((WW, RW) => () => new eW(WW, zR.q.Zero(), RW))), (0, NW.e)("BABYLON.HemisphericLight", eW))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
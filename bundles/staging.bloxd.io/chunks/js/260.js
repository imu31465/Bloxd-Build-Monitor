export const id = 260;
export const ids = [260];
export const modules = {
  41099: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => US
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37144),
      xS = gS(37117),
      NS = gS(37149),
      qS = gS(40256),
      uS = gS(40439),
      IS = gS(40218),
      fS = gS(39946),
      kS = gS(37123);
    class aS {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(SS) {
        this._zoomStopsAnimation = SS
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(SS) {
        this._idleRotationSpeed = SS
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(SS) {
        this._idleRotationWaitTime = SS
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(SS) {
        this._idleRotationSpinupTime = SS
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
      attach(SS) {
        this._attachedCamera = SS;
        const HS = this._attachedCamera.lL();
        this._onPrePointerObservableObserver = HS.onPrePointerObservable.add((SS => {
          SS.type !== IS.d.POINTERDOWN ? SS.type === IS.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = SS.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const SS = fS.e.Now;
          let HS = 0;
          null != this._lastFrameTime && (HS = SS - this._lastFrameTime), this._lastFrameTime = SS, this._applyUserInteraction();
          const gS = SS - this._lastInteractionTime - this._idleRotationWaitTime,
            tS = Math.max(Math.min(gS / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * tS, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (HS / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const SS = this._attachedCamera.lL();
        this._onPrePointerObservableObserver && SS.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(SS) {
        this._lastInteractionTime = SS ?? fS.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < kS.d
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let SS = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (SS = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? SS : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = fS.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    gS(41102);
    class KS {
      constructor() {
        this._easingMode = KS.EASINGMODE_EASEIN
      }
      setEasingMode(SS) {
        const HS = Math.min(Math.max(SS, 0), 2);
        this._easingMode = HS
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(SS) {
        throw new Error("You must implement this method")
      }
      ease(SS) {
        switch (this._easingMode) {
          case KS.EASINGMODE_EASEIN:
            return this.easeInCore(SS);
          case KS.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - SS)
        }
        return SS >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - SS))) + .5 : .5 * this.easeInCore(2 * SS)
      }
    }
    KS.EASINGMODE_EASEIN = 0, KS.EASINGMODE_EASEOUT = 1, KS.EASINGMODE_EASEINOUT = 2;
    var jS = gS(41111);
    class GS {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(SS) {
        if (this._autoTransitionRange === SS) return;
        this._autoTransitionRange = SS;
        const HS = this._attachedCamera;
        HS && (SS ? this._onMeshTargetChangedObserver = HS.onMeshTargetChangedObservable.add((SS => {
          if (SS && (SS.computeWorldMatrix(!0), SS.hA)) {
            const HS = SS.hA().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * HS, this.upperRadiusTransitionRange = .05 * HS
          }
        })) : this._onMeshTargetChangedObserver && HS.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(SS) {
        this._attachedCamera = SS, this._onAfterCheckInputsObserver = SS.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(SS) {
        return !!this._attachedCamera && (this._attachedCamera.radius === SS && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(SS) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (GS.EasingFunction.setEasingMode(GS.EasingMode), this._radiusBounceTransition = jS.d.CreateAnimation("radius", jS.d.ANIMATIONTYPE_FLOAT, 60, GS.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const HS = jS.d.TransitionTo("radius", this._attachedCamera.radius + SS, this._attachedCamera, this._attachedCamera.lL(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        HS && this._animatables.push(HS)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    GS.EasingFunction = new class extends KS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = SS
      }
      easeInCore(SS) {
        const HS = Math.max(0, this.amplitude);
        return Math.pow(SS, 3) - SS * HS * Math.sin(3.141592653589793 * SS)
      }
    }(.3), GS.EasingMode = KS.EASINGMODE_EASEOUT;
    class CS {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new XS.e, this._mode = CS.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(SS) {
        this._mode = SS
      }
      get mode() {
        return this._mode
      }
      set radiusScale(SS) {
        this._radiusScale = SS
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(SS) {
        this._positionScale = SS
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(SS) {
        this._defaultElevation = SS
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(SS) {
        this._elevationReturnTime = SS
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(SS) {
        this._elevationReturnWaitTime = SS
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(SS) {
        this._zoomStopsAnimation = SS
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(SS) {
        this._framingTime = SS
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(SS) {
        this._attachedCamera = SS;
        const HS = this._attachedCamera.lL();
        CS.EasingFunction.setEasingMode(CS.EasingMode), this._onPrePointerObservableObserver = HS.onPrePointerObservable.add((SS => {
          SS.type !== IS.d.POINTERDOWN ? SS.type === IS.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = SS.onMeshTargetChangedObservable.add((SS => {
          SS && SS.hA && this.zoomOnMesh(SS, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = SS.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const SS = this._attachedCamera.lL();
        this._onPrePointerObservableObserver && SS.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        SS.computeWorldMatrix(!0);
        const tS = SS.hA().boundingBox;
        this.zoomOnBoundingInfo(tS.minimumWorld, tS.maximumWorld, HS, gS)
      }
      zoomOnMeshHierarchy(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        SS.computeWorldMatrix(!0);
        const tS = SS.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(tS.min, tS.max, HS, gS)
      }
      zoomOnMeshesHierarchy(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tS = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          bS = new xS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let XS = 0; XS < SS.length; XS++) {
          const HS = SS[XS].getHierarchyBoundingVectors(!0);
          xS.n.CheckExtends(HS.min, tS, bS), xS.n.CheckExtends(HS.max, tS, bS)
        }
        this.zoomOnBoundingInfo(tS, bS, HS, gS)
      }
      zoomOnBoundingInfo(SS, HS) {
        let gS, tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const XS = SS.y,
          NS = XS + (HS.y - XS) * this._positionScale,
          qS = HS.subtract(SS).scale(.5);
        if (!isFinite(NS)) return !1;
        if (tS) gS = new xS.n(0, NS, 0);
        else {
          const HS = SS.add(qS);
          gS = new xS.n(HS.x, NS, HS.z)
        }
        this._vectorTransition || (this._vectorTransition = jS.d.CreateAnimation("target", jS.d.ANIMATIONTYPE_VECTOR3, 60, CS.EasingFunction)), this._betaIsAnimating = !0;
        let uS = jS.d.TransitionTo("target", gS, this._attachedCamera, this._attachedCamera.lL(), 60, this._vectorTransition, this._framingTime);
        uS && this._animatables.push(uS);
        let IS = 0;
        if (this._mode === CS.FitFrustumSidesMode) {
          const gS = this._calculateLowerRadiusFromModelBoundingSphere(SS, HS);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = qS.length() + this._attachedCamera.minZ), IS = gS
        } else this._mode === CS.IgnoreBoundsSizeMode && (IS = this._calculateLowerRadiusFromModelBoundingSphere(SS, HS), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const gS = HS.subtract(SS).length();
          this._attachedCamera.panningSensibility = 5e3 / gS, this._attachedCamera.wheelPrecision = 100 / IS
        }
        return this._radiusTransition || (this._radiusTransition = jS.d.CreateAnimation("radius", jS.d.ANIMATIONTYPE_FLOAT, 60, CS.EasingFunction)), uS = jS.d.TransitionTo("radius", IS, this._attachedCamera, this._attachedCamera.lL(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), bS && bS(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), uS && this._animatables.push(uS), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(SS, HS) {
        const gS = this._attachedCamera;
        if (!gS) return 0;
        let tS = gS._calculateLowerRadiusFromModelBoundingSphere(SS, HS, this._radiusScale);
        return gS.lowerRadiusLimit && this._mode === CS.IgnoreBoundsSizeMode && (tS = tS < gS.lowerRadiusLimit ? gS.lowerRadiusLimit : tS), gS.upperRadiusLimit && (tS = tS > gS.upperRadiusLimit ? gS.upperRadiusLimit : tS), tS
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const SS = fS.e.Now - this._lastInteractionTime,
          HS = .5 * Math.PI - this._defaultElevation,
          gS = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > gS && SS >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = jS.d.CreateAnimation("beta", jS.d.ANIMATIONTYPE_FLOAT, 60, CS.EasingFunction));
          const SS = jS.d.TransitionTo("beta", HS, this._attachedCamera, this._attachedCamera.lL(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          SS && this._animatables.push(SS)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = fS.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    CS.EasingFunction = new class extends KS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = SS
      }
      easeInCore(SS) {
        return this.exponent <= 0 ? SS : (Math.exp(this.exponent * SS) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, CS.EasingMode = KS.EASINGMODE_EASEINOUT, CS.IgnoreBoundsSizeMode = 0, CS.FitFrustumSidesMode = 1;
    var nS = gS(40248),
      PS = gS(40242),
      QS = gS(40278),
      DS = gS(40133);
    let wS = (() => {
        var SS;
        let HS, gS = [],
          XS = [];
        return SS = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, tS.k)(this, gS, [0, 1, 2]), this._pointerInput = (0, tS.k)(this, XS)
          }
          attachControl(SS) {
            SS = DS.k.BackCompatCameraNoPreventDefault(arguments);
            const HS = this.camera.AK(),
              gS = HS.getInputElement();
            let tS = 0,
              bS = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = XS => {
              const xS = XS.event,
                NS = "touch" === xS.pointerType;
              if (XS.type !== IS.d.POINTERMOVE && -1 === this.buttons.indexOf(xS.button)) return;
              const qS = xS.target;
              if (this._altKey = xS.altKey, this._ctrlKey = xS.ctrlKey, this._metaKey = xS.metaKey, this._shiftKey = xS.shiftKey, this._buttonsPressed = xS.buttons, HS.isPointerLock) {
                const SS = xS.movementX,
                  HS = xS.movementY;
                this.onTouch(null, SS, HS), this._pointA = null, this._pointB = null
              } else {
                if (XS.type !== IS.d.POINTERDOWN && XS.type !== IS.d.POINTERDOUBLETAP && NS && this._pointA?.pointerId !== xS.pointerId && this._pointB?.pointerId !== xS.pointerId) return;
                if (XS.type !== IS.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !NS)
                  if (XS.type === IS.d.POINTERDOUBLETAP) this.onDoubleTap(xS.pointerType, xS);
                  else if (XS.type !== IS.d.POINTERUP || this._currentMousePointerIdDown !== xS.pointerId && !NS) {
                  if (XS.type === IS.d.POINTERMOVE)
                    if (SS || xS.preventDefault(), this._pointA && null === this._pointB) {
                      const SS = xS.clientX - this._pointA.x,
                        HS = xS.clientY - this._pointA.y;
                      this._pointA.x = xS.clientX, this._pointA.y = xS.clientY, this.onTouch(this._pointA, SS, HS)
                    } else if (this._pointA && this._pointB) {
                    const SS = this._pointA.pointerId === xS.pointerId ? this._pointA : this._pointB;
                    SS.x = xS.clientX, SS.y = xS.clientY;
                    const HS = this._pointA.x - this._pointB.x,
                      gS = this._pointA.y - this._pointB.y,
                      NS = HS * HS + gS * gS,
                      qS = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: xS.pointerId,
                        type: XS.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, tS, NS, bS, qS), bS = qS, tS = NS
                  }
                } else {
                  try {
                    qS?.releasePointerCapture(xS.pointerId)
                  } catch (uS) {}
                  NS || (this._pointB = null), HS._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == xS.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == xS.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== tS || bS) && (this.onMultiTouch(this._pointA, this._pointB, tS, 0, bS, null), tS = 0, bS = null), this._currentMousePointerIdDown = -1, this.onButtonUp(xS), SS || xS.preventDefault()
                } else {
                  try {
                    qS?.setPointerCapture(xS.pointerId)
                  } catch (uS) {}
                  if (null === this._pointA) this._pointA = {
                    x: xS.clientX,
                    y: xS.clientY,
                    pointerId: xS.pointerId,
                    type: xS.pointerType,
                    button: xS.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: xS.clientX,
                      y: xS.clientY,
                      pointerId: xS.pointerId,
                      type: xS.pointerType,
                      button: xS.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || NS || (this._currentMousePointerIdDown = xS.pointerId), this.onButtonDown(xS), SS || (xS.preventDefault(), gS && gS.focus())
                }
              }
            }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._pointerInput, IS.d.POINTERDOWN | IS.d.POINTERUP | IS.d.POINTERMOVE | IS.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, tS = 0, bS = null, this.onLostFocus()
            }, this._contextMenuBind = SS => this.onContextMenu(SS), gS && gS.addEventListener("contextmenu", this._contextMenuBind, !1);
            const XS = this.camera.lL().AK().getHostWindow();
            XS && DS.k.RegisterTopRootEvents(XS, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const SS = this.camera.lL().AK().getHostWindow();
              SS && DS.k.UnregisterTopRootEvents(SS, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const SS = this.camera.lL().AK().getInputElement();
                SS && SS.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(SS, HS) {}
          onTouch(SS, HS, gS) {}
          onMultiTouch(SS, HS, gS, tS, bS, XS) {}
          onContextMenu(SS) {
            SS.preventDefault()
          }
          onButtonDown(SS) {}
          onButtonUp(SS) {}
          onLostFocus() {}
        }, (() => {
          const xS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          HS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: SS => "buttons" in SS,
              get: SS => SS.buttons,
              set: (SS, HS) => {
                SS.buttons = HS
              }
            },
            metadata: xS
          }, gS, XS), xS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xS
          })
        })(), SS
      })(),
      hS = (() => {
        var SS;
        let HS, gS, XS, xS = wS,
          NS = [],
          qS = [],
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        return SS = class extends xS {
          constructor() {
            super(...arguments), this.pinchZoom = (0, tS.k)(this, NS, !0), this.multiTouchPanning = ((0, tS.k)(this, qS), (0, tS.k)(this, uS, !0)), this.multiTouchPanAndZoom = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, !0)), this._isPinching = ((0, tS.k)(this, kS), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(SS, HS) {}
          _computeMultiTouchPanning(SS, HS) {}
          onMultiTouch(SS, HS, gS, tS, bS, XS) {
            0 === gS && null === bS || 0 === tS && null === XS || (this.multiTouchPanAndZoom ? (this._computePinchZoom(gS, tS), this._computeMultiTouchPanning(bS, XS)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(gS, tS), this._isPinching = !0) : this._computeMultiTouchPanning(bS, XS)) : this.multiTouchPanning ? this._computeMultiTouchPanning(bS, XS) : this.pinchZoom && this._computePinchZoom(gS, tS))
          }
          onButtonUp(SS) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(xS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: SS => "pinchZoom" in SS,
              get: SS => SS.pinchZoom,
              set: (SS, HS) => {
                SS.pinchZoom = HS
              }
            },
            metadata: aS
          }, NS, qS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: SS => "multiTouchPanning" in SS,
              get: SS => SS.multiTouchPanning,
              set: (SS, HS) => {
                SS.multiTouchPanning = HS
              }
            },
            metadata: aS
          }, uS, IS), (0, tS.j)(null, null, XS, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: SS => "multiTouchPanAndZoom" in SS,
              get: SS => SS.multiTouchPanAndZoom,
              set: (SS, HS) => {
                SS.multiTouchPanAndZoom = HS
              }
            },
            metadata: aS
          }, fS, kS), aS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aS
          })
        })(), SS
      })(),
      ZS = (() => {
        var SS;
        let HS, gS, XS, xS, NS, qS, uS, IS = hS,
          fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [],
          CS = [],
          nS = [],
          PS = [],
          QS = [],
          DS = [],
          wS = [],
          ZS = [],
          JS = [];
        return SS = class extends IS {
          constructor() {
            super(...arguments), this.buttons = (0, tS.k)(this, fS, [0, 1, 2]), this.angularSensibilityX = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, 1e3)), this.angularSensibilityY = ((0, tS.k)(this, KS), (0, tS.k)(this, jS, 1e3)), this.pinchPrecision = ((0, tS.k)(this, GS), (0, tS.k)(this, CS, 12)), this.pinchDeltaPercentage = ((0, tS.k)(this, nS), (0, tS.k)(this, PS, 0)), this.useNaturalPinchZoom = ((0, tS.k)(this, QS), (0, tS.k)(this, DS, !1)), this.panningSensibility = ((0, tS.k)(this, wS), (0, tS.k)(this, ZS, 1e3)), this.pinchInwards = ((0, tS.k)(this, JS), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(SS, HS) {
            if (SS && HS) {
              const gS = HS.x - SS.x,
                tS = HS.y - SS.y,
                bS = this.camera.movement.input.getEntry("pointer", "pan"),
                XS = bS?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== XS && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -gS * XS, this.camera.movement.panAccumulatedPixels.y += tS * XS)
            }
          }
          _computePinchZoom(HS, gS) {
            const tS = this.camera.radius || SS.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = tS * Math.sqrt(HS) / Math.sqrt(gS);
            else if (this.pinchDeltaPercentage) {
              const SS = .001 * (gS - HS) * tS * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += SS
            } else {
              const SS = (gS - HS) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += SS
            }
          }
          onTouch(SS, HS, gS) {
            const tS = this._activeEntry ?? (this.camera.AK().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (tS)
              if ("pan" === tS.interaction) {
                const SS = tS.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== SS && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -HS * SS, this.camera.movement.panAccumulatedPixels.y += gS * SS)
              } else if ("rotate" === tS.interaction) {
              const SS = tS.uB ?? tS.sensitivity ?? 1 / this.angularSensibilityX,
                bS = tS.jB ?? tS.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -HS * SS, this.camera.movement.rotationAccumulatedPixels.y += -gS * bS
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(SS, HS, gS, tS, bS, XS) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(tS) - Math.sqrt(gS)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(SS, HS, gS, tS, bS, XS)
          }
          onButtonDown(SS) {
            this._pointerConditions.button = SS.button, this._pointerModifiers.ctrl = SS.ctrlKey, this._pointerModifiers.alt = SS.altKey, this._pointerModifiers.shift = SS.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(SS)
          }
          onButtonUp(SS) {
            this._activeEntry = null, super.onButtonUp(SS)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const hS = "function" === typeof Symbol && Symbol.metadata ? Object.create(IS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: SS => "buttons" in SS,
              get: SS => SS.buttons,
              set: (SS, HS) => {
                SS.buttons = HS
              }
            },
            metadata: hS
          }, fS, kS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: SS => "angularSensibilityX" in SS,
              get: SS => SS.angularSensibilityX,
              set: (SS, HS) => {
                SS.angularSensibilityX = HS
              }
            },
            metadata: hS
          }, aS, KS), (0, tS.j)(null, null, XS, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: SS => "angularSensibilityY" in SS,
              get: SS => SS.angularSensibilityY,
              set: (SS, HS) => {
                SS.angularSensibilityY = HS
              }
            },
            metadata: hS
          }, jS, GS), (0, tS.j)(null, null, xS, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: SS => "pinchPrecision" in SS,
              get: SS => SS.pinchPrecision,
              set: (SS, HS) => {
                SS.pinchPrecision = HS
              }
            },
            metadata: hS
          }, CS, nS), (0, tS.j)(null, null, NS, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: SS => "pinchDeltaPercentage" in SS,
              get: SS => SS.pinchDeltaPercentage,
              set: (SS, HS) => {
                SS.pinchDeltaPercentage = HS
              }
            },
            metadata: hS
          }, PS, QS), (0, tS.j)(null, null, qS, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: SS => "useNaturalPinchZoom" in SS,
              get: SS => SS.useNaturalPinchZoom,
              set: (SS, HS) => {
                SS.useNaturalPinchZoom = HS
              }
            },
            metadata: hS
          }, DS, wS), (0, tS.j)(null, null, uS, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: SS => "panningSensibility" in SS,
              get: SS => SS.panningSensibility,
              set: (SS, HS) => {
                SS.panningSensibility = HS
              }
            },
            metadata: hS
          }, ZS, JS), hS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hS
          })
        })(), SS.MinimumRadiusForPinch = .001, SS
      })();
    QS.e.ArcRotateCameraPointersInput = ZS;
    var JS = gS(40221);
    let OS = (() => {
      var SS;
      let HS, gS, XS, NS, qS, uS, IS, fS, kS, aS, KS, jS = [],
        GS = [],
        CS = [],
        nS = [],
        PS = [],
        QS = [],
        wS = [],
        hS = [],
        ZS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [];
      return SS = class {
        constructor() {
          this.camera = (0, tS.k)(this, jS), this.keysUp = (0, tS.k)(this, GS, [38]), this.keysDown = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, [40])), this.keysLeft = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, [37])), this.keysRight = ((0, tS.k)(this, wS), (0, tS.k)(this, hS, [39])), this.keysReset = ((0, tS.k)(this, ZS), (0, tS.k)(this, OS, [220])), this.keysZoomIn = ((0, tS.k)(this, dS), (0, tS.k)(this, cS, [187, 107])), this.keysZoomOut = ((0, tS.k)(this, vS), (0, tS.k)(this, ES, [189, 109])), this.panningSensibility = ((0, tS.k)(this, LS), (0, tS.k)(this, YS, 50)), this.zoomingSensibility = ((0, tS.k)(this, AS), (0, tS.k)(this, yS, 25)), this.angularSpeed = ((0, tS.k)(this, VS), (0, tS.k)(this, iS, .01)), this._useAltToZoom = ((0, tS.k)(this, WS), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new xS.m, this._panDirection = new xS.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(SS) {
          this._useAltToZoom = SS, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const SS = this.camera.movement.input,
            HS = SS.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && HS ? SS.inputMap.splice(SS.inputMap.indexOf(HS), 1) : this._useAltToZoom && !HS && SS.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(SS) {
          SS = DS.k.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.lL(), this._engine = this._scene.AK(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((HS => {
            const gS = HS.event;
            if (!gS.metaKey)
              if (HS.type === JS.b.KEYDOWN) {
                if (this._ctrlPressed = gS.ctrlKey, this._altPressed = gS.altKey, -1 !== this.keysUp.indexOf(gS.keyCode) || -1 !== this.keysDown.indexOf(gS.keyCode) || -1 !== this.keysLeft.indexOf(gS.keyCode) || -1 !== this.keysRight.indexOf(gS.keyCode) || -1 !== this.keysReset.indexOf(gS.keyCode) || -1 !== this.keysZoomIn.indexOf(gS.keyCode) || -1 !== this.keysZoomOut.indexOf(gS.keyCode)) {
                  -1 === this._keys.indexOf(gS.keyCode) && this._keys.push(gS.keyCode), gS.preventDefault && (SS || gS.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(gS.keyCode) || -1 !== this.keysDown.indexOf(gS.keyCode) || -1 !== this.keysLeft.indexOf(gS.keyCode) || -1 !== this.keysRight.indexOf(gS.keyCode) || -1 !== this.keysReset.indexOf(gS.keyCode) || -1 !== this.keysZoomIn.indexOf(gS.keyCode) || -1 !== this.keysZoomOut.indexOf(gS.keyCode)) {
              const HS = this._keys.indexOf(gS.keyCode);
              HS >= 0 && this._keys.splice(HS, 1), gS.preventDefault && (SS || gS.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const SS = this.camera,
              HS = SS.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const gS = this._rotateDirection.set(0, 0),
              tS = this._panDirection.set(0, 0);
            let bS = 0,
              XS = 0;
            for (let xS = 0; xS < this._keys.length; xS++) {
              const NS = this._keys[xS];
              if (this._keyboardConditions.key = NS, -1 === this.keysReset.indexOf(NS)) {
                const SS = HS.resolveInteraction("keyboard", this._keyboardConditions);
                if (SS)
                  if ("pan" === SS.interaction) XS = Math.max(XS, SS.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(NS) ? tS.x -= 1 : -1 !== this.keysRight.indexOf(NS) ? tS.x += 1 : -1 !== this.keysUp.indexOf(NS) ? tS.y += 1 : -1 !== this.keysDown.indexOf(NS) && (tS.y -= 1);
                  else if ("zoom" === SS.interaction) {
                  const gS = SS.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(NS) || -1 !== this.keysZoomIn.indexOf(NS) ? HS.handlers.zoom(gS) : -1 === this.keysDown.indexOf(NS) && -1 === this.keysZoomOut.indexOf(NS) || HS.handlers.zoom(-gS)
                } else "rotate" === SS.interaction && (bS = Math.max(bS, SS.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(NS) ? gS.x -= 1 : -1 !== this.keysRight.indexOf(NS) ? gS.x += 1 : -1 !== this.keysUp.indexOf(NS) ? gS.y -= 1 : -1 !== this.keysDown.indexOf(NS) && (gS.y += 1))
              } - 1 !== this.keysReset.indexOf(NS) && SS.useInputToRestoreState && SS.restoreState()
            }
            0 === gS.x && 0 === gS.y || (gS.normalize().scaleInPlace(bS), HS.handlers.rotate(gS.x, gS.y)), 0 === tS.x && 0 === tS.y || (tS.normalize().scaleInPlace(XS), HS.handlers.pan(tS.x, tS.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const xS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], (0, tS.j)(SS, null, KS, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: SS => "useAltToZoom" in SS,
            get: SS => SS.useAltToZoom
          },
          metadata: xS
        }, null, jS), (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysUp" in SS,
            get: SS => SS.keysUp,
            set: (SS, HS) => {
              SS.keysUp = HS
            }
          },
          metadata: xS
        }, GS, CS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysDown" in SS,
            get: SS => SS.keysDown,
            set: (SS, HS) => {
              SS.keysDown = HS
            }
          },
          metadata: xS
        }, nS, PS), (0, tS.j)(null, null, XS, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysLeft" in SS,
            get: SS => SS.keysLeft,
            set: (SS, HS) => {
              SS.keysLeft = HS
            }
          },
          metadata: xS
        }, QS, wS), (0, tS.j)(null, null, NS, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysRight" in SS,
            get: SS => SS.keysRight,
            set: (SS, HS) => {
              SS.keysRight = HS
            }
          },
          metadata: xS
        }, hS, ZS), (0, tS.j)(null, null, qS, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysReset" in SS,
            get: SS => SS.keysReset,
            set: (SS, HS) => {
              SS.keysReset = HS
            }
          },
          metadata: xS
        }, OS, dS), (0, tS.j)(null, null, uS, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysZoomIn" in SS,
            get: SS => SS.keysZoomIn,
            set: (SS, HS) => {
              SS.keysZoomIn = HS
            }
          },
          metadata: xS
        }, cS, vS), (0, tS.j)(null, null, IS, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: SS => "keysZoomOut" in SS,
            get: SS => SS.keysZoomOut,
            set: (SS, HS) => {
              SS.keysZoomOut = HS
            }
          },
          metadata: xS
        }, ES, LS), (0, tS.j)(null, null, fS, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: SS => "panningSensibility" in SS,
            get: SS => SS.panningSensibility,
            set: (SS, HS) => {
              SS.panningSensibility = HS
            }
          },
          metadata: xS
        }, YS, AS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: SS => "zoomingSensibility" in SS,
            get: SS => SS.zoomingSensibility,
            set: (SS, HS) => {
              SS.zoomingSensibility = HS
            }
          },
          metadata: xS
        }, yS, VS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: SS => "angularSpeed" in SS,
            get: SS => SS.angularSpeed,
            set: (SS, HS) => {
              SS.angularSpeed = HS
            }
          },
          metadata: xS
        }, iS, WS), xS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xS
        })
      })(), SS
    })();
    QS.e.ArcRotateCameraKeyboardMoveInput = OS;
    var dS = gS(37791),
      cS = gS(40223);
    let vS = (() => {
      var SS;
      let HS, gS, XS, qS = [],
        uS = [],
        fS = [],
        aS = [],
        KS = [],
        jS = [];
      return SS = class {
        constructor() {
          this.wheelPrecision = (0, tS.k)(this, qS, 3), this.zoomToMouseLocation = ((0, tS.k)(this, uS), (0, tS.k)(this, fS, !1)), this.wheelDeltaPercentage = ((0, tS.k)(this, aS), (0, tS.k)(this, KS, 0)), this.customComputeDeltaFromMouseWheel = ((0, tS.k)(this, jS), null), this._viewOffset = new xS.n(0, 0, 0), this._globalOffset = new xS.n(0, 0, 0), this._inertialPanning = xS.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(SS, HS) {
          let gS;
          const tS = .01 * SS * this.wheelDeltaPercentage * HS;
          return gS = SS > 0 ? tS / (1 + this.wheelDeltaPercentage) : tS * (1 + this.wheelDeltaPercentage), gS
        }
        attachControl(SS) {
          SS = DS.k.BackCompatCameraNoPreventDefault(arguments), this._wheel = HS => {
            if (HS.type !== IS.d.POINTERWHEEL) return;
            const gS = HS.event;
            let tS;
            const bS = gS.deltaMode === cS.e.DOM_DELTA_LINE ? 40 : 1,
              XS = -gS.deltaY * bS;
            if (this.customComputeDeltaFromMouseWheel) tS = this.customComputeDeltaFromMouseWheel(XS, this, gS);
            else if (this.wheelDeltaPercentage) {
              if (tS = this._computeDeltaFromMouseWheelLegacyEvent(XS, this.camera.radius), tS > 0) {
                const SS = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let HS = this.camera.radius,
                  gS = SS + tS;
                for (let tS = 0; tS < 20 && !(HS <= gS) && !(Math.abs(gS * this.camera.inertia) < .001); tS++) HS -= gS, gS *= this.camera.inertia;
                HS = (0, NS.Clamp)(HS, 0, Number.MAX_VALUE), tS = this._computeDeltaFromMouseWheelLegacyEvent(XS, HS)
              }
            } else {
              const SS = this.camera.movement.input.getEntry("wheel", "zoom");
              tS = XS * (SS?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            tS && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(tS)) : this.camera.movement.zoomAccumulatedPixels += tS), gS.preventDefault && (SS || gS.preventDefault())
          }, this._observer = this.camera.lL()._inputManager._addCameraPointerObserver(this._wheel, IS.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.o_(0)
        }
        detachControl() {
          this._observer && (this.camera.lL()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const SS = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(SS.inertialAlphaOffset) + Math.abs(SS.inertialBetaOffset) + Math.abs(SS.inertialRadiusOffset)) {
            this._updateHitPlane(), SS.target.addInPlace(this._inertialPanning), SS.radius -= this._zoomToMouseRadiusOffset;
            const HS = SS.movement.getFrameIndependentDecay(SS.inertia);
            this._inertialPanning.scaleInPlace(HS), this._zoomToMouseRadiusOffset *= HS, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < kS.d && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const SS = this.camera,
            HS = SS.target.subtract(SS.position);
          this._hitPlane = dS.e.FromPositionAndNormal(SS.target, HS)
        }
        _getPosition() {
          const SS = this.camera,
            HS = SS.lL(),
            gS = HS.createPickingRay(HS.pointerX, HS.pointerY, xS.e.Identity(), SS, !1);
          0 === SS.targetScreenOffset.x && 0 === SS.targetScreenOffset.y || (this._viewOffset.set(SS.targetScreenOffset.x, SS.targetScreenOffset.y, 0), SS.getViewMatrix().invertToRef(SS._cameraTransformMatrix), this._globalOffset = xS.n.TransformNormal(this._viewOffset, SS._cameraTransformMatrix), gS.origin.addInPlace(this._globalOffset));
          let tS = 0;
          return this._hitPlane && (tS = gS.intersectsPlane(this._hitPlane) ?? 0), gS.origin.addInPlace(gS.direction.scaleInPlace(tS))
        }
        _zoomToMouse(SS) {
          const HS = this.camera,
            gS = 1 - HS.inertia,
            tS = HS.movement.getFrameIndependentInputScale(HS.inertia);
          if (HS.lowerRadiusLimit) {
            const bS = HS.lowerRadiusLimit ?? 0;
            HS.radius - (this._zoomToMouseRadiusOffset + SS * tS) / gS < bS && (SS = ((HS.radius - bS) * gS - this._zoomToMouseRadiusOffset) / tS)
          }
          if (HS.upperRadiusLimit) {
            const bS = HS.upperRadiusLimit ?? 0;
            HS.radius - (this._zoomToMouseRadiusOffset + SS * tS) / gS > bS && (SS = ((HS.radius - bS) * gS - this._zoomToMouseRadiusOffset) / tS)
          }
          const bS = SS / gS / HS.radius,
            XS = this._getPosition(),
            NS = xS.l.VK[6];
          XS.subtractToRef(HS.target, NS), NS.scaleInPlace(bS), NS.scaleInPlace(gS), NS.scaleInPlace(tS), this._inertialPanning.addInPlace(NS), this._zoomToMouseRadiusOffset += SS * tS
        }
        _zeroIfClose(SS) {
          Math.abs(SS.x) < kS.d && (SS.x = 0), Math.abs(SS.y) < kS.d && (SS.y = 0), Math.abs(SS.z) < kS.d && (SS.z = 0)
        }
      }, (() => {
        const xS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelPrecision" in SS,
            get: SS => SS.wheelPrecision,
            set: (SS, HS) => {
              SS.wheelPrecision = HS
            }
          },
          metadata: xS
        }, qS, uS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: SS => "zoomToMouseLocation" in SS,
            get: SS => SS.zoomToMouseLocation,
            set: (SS, HS) => {
              SS.zoomToMouseLocation = HS
            }
          },
          metadata: xS
        }, fS, aS), (0, tS.j)(null, null, XS, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: SS => "wheelDeltaPercentage" in SS,
            get: SS => SS.wheelDeltaPercentage,
            set: (SS, HS) => {
              SS.wheelDeltaPercentage = HS
            }
          },
          metadata: xS
        }, KS, jS), xS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xS
        })
      })(), SS
    })();
    QS.e.ArcRotateCameraMouseWheelInput = vS;
    var ES, LS, YS = gS(39926);
    class AS extends QS.f {
      constructor(SS) {
        super(SS)
      }
      addMouseWheel() {
        return this.add(new vS), this
      }
      addPointers() {
        return this.add(new ZS), this
      }
      addKeyboard() {
        return this.add(new OS), this
      }
    }(ES = AS.prototype).addVRDeviceOrientation ?? (ES.addVRDeviceOrientation = (0, YS.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (LS = AS.prototype).addGamepad ?? (LS.addGamepad = (0, YS.i)("ArcRotateCameraInputsManager", "addGamepad"));
    var yS = gS(37164),
      VS = gS(40271),
      iS = gS(40274);
    class WS extends VS.b {
      constructor(SS, HS, gS) {
        super(SS, HS, gS), this.input = new iS.c({
          pan: (SS, HS) => {
            this.panAccumulatedPixels.x += SS, this.panAccumulatedPixels.y += HS
          },
          rotate: (SS, HS) => {
            this.rotationAccumulatedPixels.x += SS, this.rotationAccumulatedPixels.y += HS
          },
          zoom: SS => {
            this.zoomAccumulatedPixels += SS
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

    function zS(SS, HS) {
      return isNaN(SS) ? HS : SS
    }
    let US = (() => {
        var SS;
        let HS, gS, qS, IS, fS, KS, jS, QS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, yS, VS, iS, US, pS, sS, BS, MS, FS, RS = PS.h,
          TS = [],
          oS = [],
          lS = [],
          mS = [],
          eS = [],
          rS = [],
          SH = [],
          HH = [],
          gH = [],
          tH = [],
          bH = [],
          XH = [],
          xH = [],
          NH = [],
          qH = [],
          uH = [],
          IH = [],
          fH = [],
          kH = [],
          aH = [],
          KH = [],
          jH = [],
          GH = [],
          CH = [],
          nH = [],
          PH = [],
          QH = [],
          DH = [],
          wH = [],
          hH = [],
          ZH = [],
          JH = [],
          OH = [],
          dH = [],
          cH = [],
          vH = [],
          EH = [],
          LH = [],
          YH = [],
          AH = [],
          yH = [],
          VH = [],
          iH = [],
          WH = [],
          zH = [],
          UH = [],
          pH = [];
        return SS = class extends RS {
          get target() {
            return this.wT
          }
          set target(SS) {
            this.setTarget(SS)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(SS) {
            SS && this.setTarget(SS)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(SS) {
            this.setPosition(SS)
          }
          set upVector(SS) {
            this._upToYMatrix || (this._yToUpMatrix = new xS.e, this._upToYMatrix = new xS.e, this._upVector = xS.n.Zero()), SS.normalize(), this._upVector.dJ(SS), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            xS.e.RotationAlignToRef(xS.n.UpReadOnly, this._upVector, this._yToUpMatrix), xS.e.RotationAlignToRef(this._upVector, xS.n.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const SS = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(SS) < this._rotationEpsilon ? 0 : SS
          }
          set inertialAlphaOffset(SS) {
            this._inertialAlphaOffset = SS, 0 === SS && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const SS = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(SS) < this._rotationEpsilon ? 0 : SS
          }
          set inertialBetaOffset(SS) {
            this._inertialBetaOffset = SS, 0 === SS && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const SS = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(SS) < this._rotationEpsilon ? 0 : SS
          }
          set inertialRadiusOffset(SS) {
            this._inertialRadiusOffset = SS, 0 === SS && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(SS) {
            this._panningInertia = SS, this.movement && (this.movement.panInertia = SS)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(SS) {
            this._inertia = SS, this.movement && (this.movement.rotationInertia = SS, this.movement.zoomInertia = SS)
          }
          get angularSensibilityX() {
            const SS = this.inputs.attached.pointers;
            return SS ? SS.angularSensibilityX : 0
          }
          set angularSensibilityX(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.angularSensibilityX = SS)
          }
          get angularSensibilityY() {
            const SS = this.inputs.attached.pointers;
            return SS ? SS.angularSensibilityY : 0
          }
          set angularSensibilityY(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.angularSensibilityY = SS)
          }
          get pinchPrecision() {
            const SS = this.inputs.attached.pointers;
            return SS ? SS.pinchPrecision : 0
          }
          set pinchPrecision(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.pinchPrecision = SS)
          }
          get pinchDeltaPercentage() {
            const SS = this.inputs.attached.pointers;
            return SS ? SS.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.pinchDeltaPercentage = SS)
          }
          get useNaturalPinchZoom() {
            const SS = this.inputs.attached.pointers;
            return !!SS && SS.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.useNaturalPinchZoom = SS)
          }
          get panningSensibility() {
            const SS = this.inputs.attached.pointers;
            return SS ? SS.panningSensibility : 0
          }
          set panningSensibility(SS) {
            const HS = this.inputs.attached.pointers;
            HS && (HS.panningSensibility = SS)
          }
          get keysUp() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysUp : []
          }
          set keysUp(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysUp = SS)
          }
          get keysDown() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysDown : []
          }
          set keysDown(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysDown = SS)
          }
          get keysLeft() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysLeft : []
          }
          set keysLeft(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysLeft = SS)
          }
          get keysRight() {
            const SS = this.inputs.attached.keyboard;
            return SS ? SS.keysRight : []
          }
          set keysRight(SS) {
            const HS = this.inputs.attached.keyboard;
            HS && (HS.keysRight = SS)
          }
          get wheelPrecision() {
            const SS = this.inputs.attached.mousewheel;
            return SS ? SS.wheelPrecision : 0
          }
          set wheelPrecision(SS) {
            const HS = this.inputs.attached.mousewheel;
            HS && (HS.wheelPrecision = SS)
          }
          get zoomToMouseLocation() {
            const SS = this.inputs.attached.mousewheel;
            return !!SS && SS.zoomToMouseLocation
          }
          set zoomToMouseLocation(SS) {
            const HS = this.inputs.attached.mousewheel;
            HS && (HS.zoomToMouseLocation = SS)
          }
          get wheelDeltaPercentage() {
            const SS = this.inputs.attached.mousewheel;
            return SS ? SS.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(SS) {
            const HS = this.inputs.attached.mousewheel;
            HS && (HS.wheelDeltaPercentage = SS)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(SS) {
            this._useCtrlForPanningInternal = SS;
            const HS = this.movement.input,
              gS = HS.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !SS && gS ? HS.inputMap.splice(HS.inputMap.indexOf(gS), 1) : SS && !gS && HS.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const tS = HS.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !SS && tS ? HS.inputMap.splice(HS.inputMap.indexOf(tS), 1) : SS && !tS && HS.addEntry({
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
          set _panningMouseButton(SS) {
            this._panningMouseButtonInternal = SS;
            const HS = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            HS && (HS.button = SS)
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
          set useBouncingBehavior(SS) {
            SS !== this.useBouncingBehavior && (SS ? (this._bouncingBehavior = new GS, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(SS) {
            SS !== this.useFramingBehavior && (SS ? (this._framingBehavior = new CS, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(SS) {
            SS !== this.useAutoRotationBehavior && (SS ? (this._autoRotationBehavior = new aS, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(SS, HS, gS, bS, NS, qS) {
            var uS;
            let IS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(SS, xS.n.Zero(), qS, IS), uS = this, this.alpha = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, void 0)), this.beta = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, void 0)), this.radius = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, void 0)), this.overrideCloneAlphaBetaRadius = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, void 0)), this.wT = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, void 0)), this._targetHost = ((0, tS.k)(this, bH), (0, tS.k)(this, XH, void 0)), this._upToYMatrix = (0, tS.k)(this, xH), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, tS.k)(this, NH, null), this.upperAlphaLimit = ((0, tS.k)(this, qH), (0, tS.k)(this, uH, null)), this.lowerBetaLimit = ((0, tS.k)(this, IH), (0, tS.k)(this, fH, .01)), this.upperBetaLimit = ((0, tS.k)(this, kH), (0, tS.k)(this, aH, Math.PI - .01)), this.lowerRadiusLimit = ((0, tS.k)(this, KH), (0, tS.k)(this, jH, null)), this.upperRadiusLimit = ((0, tS.k)(this, GH), (0, tS.k)(this, CH, null)), this.lowerTargetYLimit = ((0, tS.k)(this, nH), (0, tS.k)(this, PH, -1 / 0)), this.inertialPanningX = ((0, tS.k)(this, QH), (0, tS.k)(this, DH, 0)), this.inertialPanningY = ((0, tS.k)(this, wH), (0, tS.k)(this, hH, 0)), this.pinchToPanMaxDistance = ((0, tS.k)(this, ZH), (0, tS.k)(this, JH, 20)), this.panningDistanceLimit = ((0, tS.k)(this, OH), (0, tS.k)(this, dH, null)), this.panningOriginTarget = ((0, tS.k)(this, cH), (0, tS.k)(this, vH, xS.n.Zero())), this._panningInertia = ((0, tS.k)(this, EH), .9), this._inertia = .9, this.zoomOnFactor = (0, tS.k)(this, LH, 1), this.targetScreenOffset = ((0, tS.k)(this, YH), (0, tS.k)(this, AH, xS.m.Zero())), this.allowUpsideDown = ((0, tS.k)(this, yH), (0, tS.k)(this, VH, !0)), this.useInputToRestoreState = ((0, tS.k)(this, iH), (0, tS.k)(this, WH, !0)), this.restoreStateInterpolationFactor = ((0, tS.k)(this, zH), (0, tS.k)(this, UH, 0)), this._currentInterpolationFactor = ((0, tS.k)(this, pH), 0), this._viewMatrix = new xS.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new xS.n(1, 1, 0), this._transformedDirection = new xS.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new XS.e, this.checkCollisions = !1, this.collisionRadius = new xS.n(.5, .5, .5), this._previousPosition = xS.n.Zero(), this._collisionVelocity = xS.n.Zero(), this._newPosition = xS.n.Zero(), this._computationVector = xS.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new xS.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new xS.m(NaN, NaN), this._onCollisionPositionChange = function(SS, HS) {
              let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              gS ? (uS.setPosition(HS), uS.ak && uS.ak(gS)) : uS._previousPosition.dJ(uS._position);
              const tS = Math.cos(uS.alpha),
                bS = Math.sin(uS.alpha),
                XS = Math.cos(uS.beta);
              let xS = Math.sin(uS.beta);
              0 === xS && (xS = 1e-4);
              const NS = uS._getTargetPosition();
              uS._computationVector.I5(uS.radius * tS * xS, uS.radius * XS, uS.radius * bS * xS), NS.addToRef(uS._computationVector, uS._newPosition), uS._position.dJ(uS._newPosition);
              let qS = uS.upVector;
              uS.allowUpsideDown && uS.beta < 0 && (qS = qS.clone(), qS = qS.gq()), uS._computeViewMatrix(uS._position, NS, qS), uS._viewMatrix.addAtIndex(12, uS.targetScreenOffset.x), uS._viewMatrix.addAtIndex(13, uS.targetScreenOffset.y), uS._collisionTriggered = !1
            }, this.wT = xS.n.Zero(), NS && this.setTarget(NS), this.alpha = HS, this.beta = gS, this.radius = bS, this.getViewMatrix(), this.inputs = new AS(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new WS(this.lL(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.wT = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = xS.m.Zero()
          }
          _updateCache(SS) {
            SS || super._updateCache(), this._cache.wT.dJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.dJ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const SS = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? SS.addToRef(this._targetBoundingCenter, this.wT) : this.wT.dJ(SS)
            }
            const SS = this._getLockedTargetPosition();
            return SS || this.wT
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > kS.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              XS = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != XS ? this._currentInterpolationFactor = XS : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = zS(SS, this._goalAlpha), this._goalBeta = zS(HS, this._goalBeta), this._goalRadius = zS(gS, this._goalRadius), this._goalTarget.set(zS(tS.x, this._goalTarget.x), zS(tS.y, this._goalTarget.y), zS(tS.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(zS(bS.x, this._goalTargetScreenOffset.x), zS(bS.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, NS.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, NS.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, NS.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, NS.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.wT.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(SS, HS) {
            let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const bS = arguments;
            HS = DS.k.BackCompatCameraNoPreventDefault(bS), this._useCtrlForPanning = gS, this._panningMouseButton = tS, "boolean" === typeof bS[0] && (bS.length > 1 && (this._useCtrlForPanning = bS[1]), bS.length > 2 && (this._panningMouseButton = bS[2])), this.inputs.attachElement(HS), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(SS, HS, gS) {
            const tS = this.invertRotation ? -1 : 1;
            let bS = SS * this._calculateHandednessMultiplier();
            this.beta < 0 && (bS *= -1), this.alpha += bS * tS, this.beta += HS * tS, this.radius -= gS
          }
          _applyPanDelta(SS, HS) {
            const gS = xS.l.VK[0].I5(SS, HS, HS);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), gS.multiplyInPlace(this.panningAxis), xS.n.TransformNormalToRef(gS, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const SS = this.upVector,
                HS = xS.n.CrossToRef(this._transformedDirection, SS, this._transformedDirection);
              xS.n.CrossToRef(SS, HS, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.wT);
                xS.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wT.dJ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const SS = xS.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(SS), SS.transposeToRef(SS), xS.n.TransformCoordinatesToRef(this._transformedDirection, SS, this._transformedDirection)
                }
                this.wT.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let SS = !1;
            this.movement.computeCurrentFrameDeltas();
            const HS = this.movement.rotationDeltaCurrentFrame,
              gS = this.movement.zoomDeltaCurrentFrame,
              tS = this.movement.panDeltaCurrentFrame;
            if (0 === HS.x && 0 === HS.y && 0 === gS && 0 === tS.x && 0 === tS.y || (SS = !0, 0 === HS.x && 0 === HS.y && 0 === gS || this._applyRotationAndZoomDelta(HS.x, HS.y, gS), 0 === tS.x && 0 === tS.y || this._applyPanDelta(tS.x, tS.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), SS = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const HS = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < HS && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < HS && (this.inertialPanningY = 0), SS = !0
            }
            if (SS) this.stopInterpolation();
            else if (this._isInterpolating) {
              let SS = !1;
              const HS = this._scene.AK().getDeltaTime() / 1e3,
                gS = 1 - Math.pow(2, -HS / this._currentInterpolationFactor),
                tS = zS(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const HS = xS.l.VK[0].set(zS(this._goalTarget.x, this.wT.x), zS(this._goalTarget.y, this.wT.y), zS(this._goalTarget.z, this.wT.z));
                xS.n.LerpToRef(this.target, HS, gS, this.wT), 10 * xS.n.Distance(this.target, HS) / tS < kS.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.dJ(HS), this.setTarget(this.target, !1, !0, !0)) : SS = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const HS = xS.i.RotationAlphaBetaGammaToRef(zS(this._goalAlpha, this.alpha), zS(this._goalBeta, this.beta), 0, xS.l.Quaternion[0]),
                  tS = xS.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, xS.l.Quaternion[1]),
                  bS = xS.i.SlerpToRef(tS, HS, gS, xS.l.Quaternion[2]);
                bS.normalize();
                const XS = bS.toAlphaBetaGammaToRef(xS.l.VK[0]);
                if (this.alpha = XS.x, this.beta = XS.y, bS.isApprox(HS, kS.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const SS = HS.toAlphaBetaGammaToRef(xS.l.VK[0]);
                  this.alpha = SS.x, this.beta = SS.y
                } else SS = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (tS - this.radius) * gS, Math.abs(tS / this.radius - 1) < kS.d ? (this._goalRadius = NaN, this.radius = tS) : SS = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const HS = xS.l.Vector2[0].set(zS(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), zS(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                xS.m.LerpToRef(this.targetScreenOffset, HS, gS, this.targetScreenOffset), xS.m.Distance(this.targetScreenOffset, HS) < kS.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.dJ(HS)) : SS = !0
              }
              this._isInterpolating = SS
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xS.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const SS = this.alpha;
            var HS, gS;
            this.alpha = function(SS) {
              let HS = Math.PI / 2;
              return 0 === SS.x && 0 === SS.z || (HS = Math.acos(SS.x / Math.sqrt(Math.pow(SS.x, 2) + Math.pow(SS.z, 2)))), SS.z < 0 && (HS = 2 * Math.PI - HS), HS
            }(this._computationVector), this.beta = (HS = this._computationVector.y, gS = this.radius, Math.acos(HS / gS));
            const tS = Math.round((SS - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * tS * Math.PI, this._checkLimits()
          }
          setPosition(SS) {
            this._position.equals(SS) || (this._position.dJ(SS), this.rebuildAnglesAndRadius())
          }
          setTarget(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (tS = this.overrideCloneAlphaBetaRadius ?? tS, SS.computeWorldMatrix) HS && SS.hA ? this._targetBoundingCenter = SS.hA().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, SS.computeWorldMatrix(), this._targetHost = SS, this.wT = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const HS = SS,
                tS = this._getTargetPosition();
              if (tS && !gS && tS.equals(HS)) return;
              this._targetHost = null, this.wT = HS, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            tS || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const SS = Math.cos(this.alpha),
              HS = Math.sin(this.alpha),
              gS = Math.cos(this.beta);
            let tS = Math.sin(this.beta);
            0 === tS && (tS = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const bS = this._getTargetPosition();
            if (this._computationVector.I5(this.radius * SS * tS, this.radius * gS, this.radius * HS * tS), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xS.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), bS.addToRef(this._computationVector, this._newPosition), this.lL().collisionsEnabled && this.checkCollisions) {
              const SS = this.lL().collisionCoordinator;
              this._collider || (this._collider = SS.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, SS.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.dJ(this._newPosition);
              let SS = this.upVector;
              this.allowUpsideDown && tS < 0 && (SS = SS.gq()), this._computeViewMatrix(this._position, bS, SS), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.dJ(bS), this._viewMatrix
          }
          zoomOn(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            SS = SS || this.lL().meshes;
            const gS = uS.e.MinMax(SS);
            let tS = this._calculateLowerRadiusFromModelBoundingSphere(gS.min, gS.max);
            if (tS = Math.max(Math.min(tS, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = tS * this.zoomOnFactor, this.mode === nS.b.ORTHOGRAPHIC_CAMERA) {
              const SS = this.lL().AK().getAspectRatio(this),
                HS = tS * this.zoomOnFactor / 2;
              this.orthoLeft = -HS * SS, this.orthoRight = HS * SS, this.orthoBottom = -HS, this.orthoTop = HS
            }
            this.focusOn({
              min: gS.min,
              max: gS.max,
              distance: tS
            }, HS)
          }
          focusOn(SS) {
            let HS, gS, tS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === SS.min) {
              const tS = SS || this.lL().meshes;
              HS = uS.e.MinMax(tS), gS = xS.n.Distance(HS.min, HS.max)
            } else {
              HS = SS, gS = SS.distance
            }
            this.wT = uS.e.Center(HS), tS || (this.maxZ = 2 * gS)
          }
          createRigCamera(HS, gS) {
            let tS = 0;
            switch (this.cameraRigMode) {
              case nS.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case nS.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case nS.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case nS.b.RIG_MODE_VR:
                tS = this._cameraRigParams.stereoHalfAngle * (0 === gS ? 1 : -1);
                break;
              case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                tS = this._cameraRigParams.stereoHalfAngle * (0 === gS ? -1 : 1)
            }
            const bS = new SS(HS, this.alpha + tS, this.beta, this.radius, this.wT, this.lL());
            return bS._cameraRigParams = {}, bS.isRigCamera = !0, bS.rigParent = this, bS.upVector = this.upVector, bS.mode = this.mode, bS.orthoLeft = this.orthoLeft, bS.orthoRight = this.orthoRight, bS.orthoBottom = this.orthoBottom, bS.orthoTop = this.orthoTop, bS
          }
          _updateRigCameras() {
            const SS = this._rigCameras[0],
              HS = this._rigCameras[1];
            switch (SS.beta = HS.beta = this.beta, this.cameraRigMode) {
              case nS.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case nS.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case nS.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case nS.b.RIG_MODE_VR:
                SS.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, HS.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case nS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                SS.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, HS.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const tS = xS.n.Distance(SS, HS),
              bS = this.lL().AK().getAspectRatio(this),
              XS = Math.tan(this.fov / 2),
              NS = XS * bS,
              qS = .5 * tS * gS,
              uS = qS * Math.sqrt(1 + 1 / (NS * NS)),
              IS = qS * Math.sqrt(1 + 1 / (XS * XS));
            return Math.max(uS, IS)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(RS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], qS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.I)("target")], KS = [(0, bS.t)("targetHost")], jS = [(0, bS.M)()], QS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.M)()], ZS = [(0, bS.M)()], JS = [(0, bS.M)()], OS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], LS = [(0, bS.M)()], YS = [(0, bS.M)()], yS = [(0, bS.M)()], VS = [(0, bS.I)()], iS = [(0, bS.M)()], US = [(0, bS.M)()], pS = [(0, bS.M)()], sS = [(0, bS.E)()], BS = [(0, bS.M)()], MS = [(0, bS.M)()], FS = [(0, bS.M)()], (0, tS.j)(SS, null, jS, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "inertialAlphaOffset" in SS,
              get: SS => SS.inertialAlphaOffset
            },
            metadata: XS
          }, null, TS), (0, tS.j)(SS, null, QS, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "inertialBetaOffset" in SS,
              get: SS => SS.inertialBetaOffset
            },
            metadata: XS
          }, null, TS), (0, tS.j)(SS, null, wS, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "inertialRadiusOffset" in SS,
              get: SS => SS.inertialRadiusOffset
            },
            metadata: XS
          }, null, TS), (0, tS.j)(SS, null, iS, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: SS => "panningInertia" in SS,
              get: SS => SS.panningInertia
            },
            metadata: XS
          }, null, TS), (0, tS.j)(SS, null, US, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: SS => "zoomToMouseLocation" in SS,
              get: SS => SS.zoomToMouseLocation
            },
            metadata: XS
          }, null, TS), (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "alpha" in SS,
              get: SS => SS.alpha,
              set: (SS, HS) => {
                SS.alpha = HS
              }
            },
            metadata: XS
          }, oS, lS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: SS => "beta" in SS,
              get: SS => SS.beta,
              set: (SS, HS) => {
                SS.beta = HS
              }
            },
            metadata: XS
          }, mS, eS), (0, tS.j)(null, null, qS, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: SS => "radius" in SS,
              get: SS => SS.radius,
              set: (SS, HS) => {
                SS.radius = HS
              }
            },
            metadata: XS
          }, rS, SH), (0, tS.j)(null, null, IS, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: SS => "overrideCloneAlphaBetaRadius" in SS,
              get: SS => SS.overrideCloneAlphaBetaRadius,
              set: (SS, HS) => {
                SS.overrideCloneAlphaBetaRadius = HS
              }
            },
            metadata: XS
          }, HH, gH), (0, tS.j)(null, null, fS, {
            kind: "field",
            name: "wT",
            static: !1,
            private: !1,
            access: {
              has: SS => "wT" in SS,
              get: SS => SS.wT,
              set: (SS, HS) => {
                SS.wT = HS
              }
            },
            metadata: XS
          }, tH, bH), (0, tS.j)(null, null, KS, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: SS => "_targetHost" in SS,
              get: SS => SS._targetHost,
              set: (SS, HS) => {
                SS._targetHost = HS
              }
            },
            metadata: XS
          }, XH, xH), (0, tS.j)(null, null, hS, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "lowerAlphaLimit" in SS,
              get: SS => SS.lowerAlphaLimit,
              set: (SS, HS) => {
                SS.lowerAlphaLimit = HS
              }
            },
            metadata: XS
          }, NH, qH), (0, tS.j)(null, null, ZS, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "upperAlphaLimit" in SS,
              get: SS => SS.upperAlphaLimit,
              set: (SS, HS) => {
                SS.upperAlphaLimit = HS
              }
            },
            metadata: XS
          }, uH, IH), (0, tS.j)(null, null, JS, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "lowerBetaLimit" in SS,
              get: SS => SS.lowerBetaLimit,
              set: (SS, HS) => {
                SS.lowerBetaLimit = HS
              }
            },
            metadata: XS
          }, fH, kH), (0, tS.j)(null, null, OS, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "upperBetaLimit" in SS,
              get: SS => SS.upperBetaLimit,
              set: (SS, HS) => {
                SS.upperBetaLimit = HS
              }
            },
            metadata: XS
          }, aH, KH), (0, tS.j)(null, null, dS, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "lowerRadiusLimit" in SS,
              get: SS => SS.lowerRadiusLimit,
              set: (SS, HS) => {
                SS.lowerRadiusLimit = HS
              }
            },
            metadata: XS
          }, jH, GH), (0, tS.j)(null, null, cS, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "upperRadiusLimit" in SS,
              get: SS => SS.upperRadiusLimit,
              set: (SS, HS) => {
                SS.upperRadiusLimit = HS
              }
            },
            metadata: XS
          }, CH, nH), (0, tS.j)(null, null, vS, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "lowerTargetYLimit" in SS,
              get: SS => SS.lowerTargetYLimit,
              set: (SS, HS) => {
                SS.lowerTargetYLimit = HS
              }
            },
            metadata: XS
          }, PH, QH), (0, tS.j)(null, null, ES, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: SS => "inertialPanningX" in SS,
              get: SS => SS.inertialPanningX,
              set: (SS, HS) => {
                SS.inertialPanningX = HS
              }
            },
            metadata: XS
          }, DH, wH), (0, tS.j)(null, null, LS, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: SS => "inertialPanningY" in SS,
              get: SS => SS.inertialPanningY,
              set: (SS, HS) => {
                SS.inertialPanningY = HS
              }
            },
            metadata: XS
          }, hH, ZH), (0, tS.j)(null, null, YS, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: SS => "pinchToPanMaxDistance" in SS,
              get: SS => SS.pinchToPanMaxDistance,
              set: (SS, HS) => {
                SS.pinchToPanMaxDistance = HS
              }
            },
            metadata: XS
          }, JH, OH), (0, tS.j)(null, null, yS, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: SS => "panningDistanceLimit" in SS,
              get: SS => SS.panningDistanceLimit,
              set: (SS, HS) => {
                SS.panningDistanceLimit = HS
              }
            },
            metadata: XS
          }, dH, cH), (0, tS.j)(null, null, VS, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: SS => "panningOriginTarget" in SS,
              get: SS => SS.panningOriginTarget,
              set: (SS, HS) => {
                SS.panningOriginTarget = HS
              }
            },
            metadata: XS
          }, vH, EH), (0, tS.j)(null, null, pS, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: SS => "zoomOnFactor" in SS,
              get: SS => SS.zoomOnFactor,
              set: (SS, HS) => {
                SS.zoomOnFactor = HS
              }
            },
            metadata: XS
          }, LH, YH), (0, tS.j)(null, null, sS, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: SS => "targetScreenOffset" in SS,
              get: SS => SS.targetScreenOffset,
              set: (SS, HS) => {
                SS.targetScreenOffset = HS
              }
            },
            metadata: XS
          }, AH, yH), (0, tS.j)(null, null, BS, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: SS => "allowUpsideDown" in SS,
              get: SS => SS.allowUpsideDown,
              set: (SS, HS) => {
                SS.allowUpsideDown = HS
              }
            },
            metadata: XS
          }, VH, iH), (0, tS.j)(null, null, MS, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: SS => "useInputToRestoreState" in SS,
              get: SS => SS.useInputToRestoreState,
              set: (SS, HS) => {
                SS.useInputToRestoreState = HS
              }
            },
            metadata: XS
          }, WH, zH), (0, tS.j)(null, null, FS, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: SS => "restoreStateInterpolationFactor" in SS,
              get: SS => SS.restoreStateInterpolationFactor,
              set: (SS, HS) => {
                SS.restoreStateInterpolationFactor = HS
              }
            },
            metadata: XS
          }, UH, pH), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      pS = !1;
    pS || (pS = !0, qS.e.AddNodeConstructor("ArcRotateCamera", ((SS, HS) => () => new US(SS, 0, 0, 1, xS.n.Zero(), HS))), (0, yS.f)("BABYLON.ArcRotateCamera", US))
  },
  40286: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.d
    });
    var tS = gS(40295);
    (0, tS.h)()
  },
  40295: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      h: () => kS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(37300),
      NS = gS(40304),
      qS = gS(40256),
      uS = gS(37164);
    let IS = (() => {
        var SS;
        let HS, gS, qS = NS.e,
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        return SS = class extends qS {
          constructor(SS, HS, gS, bS) {
            super(SS, gS, bS), this.groundColor = (0, tS.k)(this, uS, new xS.b(0, 0, 0)), this.direction = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, void 0)), (0, tS.k)(this, kS), this.direction = HS || XS.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(SS) {
            return this.direction = XS.n.Normalize(SS.subtract(XS.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gS.x, gS.y, gS.z, 0, HS), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), HS), this
          }
          transferToNodeMaterialEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return SS.setFloat3(HS, gS.x, gS.y, gS.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = XS.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NS.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(SS, HS) {
            SS["HEMILIGHT" + HS] = !0
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(qS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.k)()], gS = [(0, bS.I)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "groundColor" in SS,
              get: SS => SS.groundColor,
              set: (SS, HS) => {
                SS.groundColor = HS
              }
            },
            metadata: XS
          }, uS, IS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: SS => "direction" in SS,
              get: SS => SS.direction,
              set: (SS, HS) => {
                SS.direction = HS
              }
            },
            metadata: XS
          }, fS, kS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      fS = !1;

    function kS() {
      fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_3", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.HemisphericLight", IS))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
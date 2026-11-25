export const id = 268;
export const ids = [268];
export const modules = {
  41298: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => SQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37399),
      zQ = XQ(37370),
      sQ = XQ(37404),
      FQ = XQ(40491),
      PQ = XQ(40651),
      gQ = XQ(40436),
      JQ = XQ(40178),
      rQ = XQ(37374);
    class IQ {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(QQ) {
        this._zoomStopsAnimation = QQ
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(QQ) {
        this._idleRotationSpeed = QQ
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(QQ) {
        this._idleRotationWaitTime = QQ
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(QQ) {
        this._idleRotationSpinupTime = QQ
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
      attach(QQ) {
        this._attachedCamera = QQ;
        const WQ = this._attachedCamera.sE();
        this._onPrePointerObservableObserver = WQ.onPrePointerObservable.add((QQ => {
          QQ.type !== gQ.d.POINTERDOWN ? QQ.type === gQ.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const QQ = JQ.e.Now;
          let WQ = 0;
          null != this._lastFrameTime && (WQ = QQ - this._lastFrameTime), this._lastFrameTime = QQ, this._applyUserInteraction();
          const XQ = QQ - this._lastInteractionTime - this._idleRotationWaitTime,
            wQ = Math.max(Math.min(XQ / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * wQ, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (WQ / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const QQ = this._attachedCamera.sE();
        this._onPrePointerObservableObserver && QQ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(QQ) {
        this._lastInteractionTime = QQ ?? JQ.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < rQ.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let QQ = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (QQ = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? QQ : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = JQ.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    XQ(41305);
    class jQ {
      constructor() {
        this._easingMode = jQ.EASINGMODE_EASEIN
      }
      setEasingMode(QQ) {
        const WQ = Math.min(Math.max(QQ, 0), 2);
        this._easingMode = WQ
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(QQ) {
        throw new Error("You must implement this method")
      }
      ease(QQ) {
        switch (this._easingMode) {
          case jQ.EASINGMODE_EASEIN:
            return this.easeInCore(QQ);
          case jQ.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - QQ)
        }
        return QQ >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - QQ))) + .5 : .5 * this.easeInCore(2 * QQ)
      }
    }
    jQ.EASINGMODE_EASEIN = 0, jQ.EASINGMODE_EASEOUT = 1, jQ.EASINGMODE_EASEINOUT = 2;
    var BQ = XQ(41309);
    class yQ {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(QQ) {
        if (this._autoTransitionRange === QQ) return;
        this._autoTransitionRange = QQ;
        const WQ = this._attachedCamera;
        WQ && (QQ ? this._onMeshTargetChangedObserver = WQ.onMeshTargetChangedObservable.add((QQ => {
          if (QQ && (QQ.computeWorldMatrix(!0), QQ.uC)) {
            const WQ = QQ.uC().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * WQ, this.upperRadiusTransitionRange = .05 * WQ
          }
        })) : this._onMeshTargetChangedObserver && WQ.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(QQ) {
        this._attachedCamera = QQ, this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(QQ) {
        return !!this._attachedCamera && (this._attachedCamera.radius === QQ && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(QQ) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (yQ.EasingFunction.setEasingMode(yQ.EasingMode), this._radiusBounceTransition = BQ.b.CreateAnimation("radius", BQ.b.ANIMATIONTYPE_FLOAT, 60, yQ.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const WQ = BQ.b.TransitionTo("radius", this._attachedCamera.radius + QQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        WQ && this._animatables.push(WQ)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    yQ.EasingFunction = new class extends jQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = QQ
      }
      easeInCore(QQ) {
        const WQ = Math.max(0, this.amplitude);
        return Math.pow(QQ, 3) - QQ * WQ * Math.sin(3.141592653589793 * QQ)
      }
    }(.3), yQ.EasingMode = jQ.EASINGMODE_EASEOUT;
    class VQ {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new TQ.b, this._mode = VQ.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(QQ) {
        this._mode = QQ
      }
      get mode() {
        return this._mode
      }
      set radiusScale(QQ) {
        this._radiusScale = QQ
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(QQ) {
        this._positionScale = QQ
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(QQ) {
        this._defaultElevation = QQ
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(QQ) {
        this._elevationReturnTime = QQ
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(QQ) {
        this._elevationReturnWaitTime = QQ
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(QQ) {
        this._zoomStopsAnimation = QQ
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(QQ) {
        this._framingTime = QQ
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(QQ) {
        this._attachedCamera = QQ;
        const WQ = this._attachedCamera.sE();
        VQ.EasingFunction.setEasingMode(VQ.EasingMode), this._onPrePointerObservableObserver = WQ.onPrePointerObservable.add((QQ => {
          QQ.type !== gQ.d.POINTERDOWN ? QQ.type === gQ.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = QQ.onMeshTargetChangedObservable.add((QQ => {
          QQ && QQ.uC && this.zoomOnMesh(QQ, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const QQ = this._attachedCamera.sE();
        this._onPrePointerObservableObserver && QQ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        QQ.computeWorldMatrix(!0);
        const wQ = QQ.uC().boundingBox;
        this.zoomOnBoundingInfo(wQ.minimumWorld, wQ.maximumWorld, WQ, XQ)
      }
      zoomOnMeshHierarchy(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        QQ.computeWorldMatrix(!0);
        const wQ = QQ.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(wQ.min, wQ.max, WQ, XQ)
      }
      zoomOnMeshesHierarchy(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wQ = new zQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          qQ = new zQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let TQ = 0; TQ < QQ.length; TQ++) {
          const WQ = QQ[TQ].getHierarchyBoundingVectors(!0);
          zQ.s.CheckExtends(WQ.min, wQ, qQ), zQ.s.CheckExtends(WQ.max, wQ, qQ)
        }
        this.zoomOnBoundingInfo(wQ, qQ, WQ, XQ)
      }
      zoomOnBoundingInfo(QQ, WQ) {
        let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const TQ = QQ.y,
          sQ = TQ + (WQ.y - TQ) * this._positionScale,
          FQ = WQ.subtract(QQ).scale(.5);
        if (!isFinite(sQ)) return !1;
        if (wQ) XQ = new zQ.s(0, sQ, 0);
        else {
          const WQ = QQ.add(FQ);
          XQ = new zQ.s(WQ.x, sQ, WQ.z)
        }
        this._vectorTransition || (this._vectorTransition = BQ.b.CreateAnimation("target", BQ.b.ANIMATIONTYPE_VECTOR3, 60, VQ.EasingFunction)), this._betaIsAnimating = !0;
        let PQ = BQ.b.TransitionTo("target", XQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._vectorTransition, this._framingTime);
        PQ && this._animatables.push(PQ);
        let gQ = 0;
        if (this._mode === VQ.FitFrustumSidesMode) {
          const XQ = this._calculateLowerRadiusFromModelBoundingSphere(QQ, WQ);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = FQ.length() + this._attachedCamera.minZ), gQ = XQ
        } else this._mode === VQ.IgnoreBoundsSizeMode && (gQ = this._calculateLowerRadiusFromModelBoundingSphere(QQ, WQ), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const XQ = WQ.subtract(QQ).length();
          this._attachedCamera.panningSensibility = 5e3 / XQ, this._attachedCamera.wheelPrecision = 100 / gQ
        }
        return this._radiusTransition || (this._radiusTransition = BQ.b.CreateAnimation("radius", BQ.b.ANIMATIONTYPE_FLOAT, 60, VQ.EasingFunction)), PQ = BQ.b.TransitionTo("radius", gQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), qQ && qQ(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), PQ && this._animatables.push(PQ), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(QQ, WQ) {
        const XQ = this._attachedCamera;
        if (!XQ) return 0;
        let wQ = XQ._calculateLowerRadiusFromModelBoundingSphere(QQ, WQ, this._radiusScale);
        return XQ.lowerRadiusLimit && this._mode === VQ.IgnoreBoundsSizeMode && (wQ = wQ < XQ.lowerRadiusLimit ? XQ.lowerRadiusLimit : wQ), XQ.upperRadiusLimit && (wQ = wQ > XQ.upperRadiusLimit ? XQ.upperRadiusLimit : wQ), wQ
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const QQ = JQ.e.Now - this._lastInteractionTime,
          WQ = .5 * Math.PI - this._defaultElevation,
          XQ = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > XQ && QQ >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = BQ.b.CreateAnimation("beta", BQ.b.ANIMATIONTYPE_FLOAT, 60, VQ.EasingFunction));
          const QQ = BQ.b.TransitionTo("beta", WQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          QQ && this._animatables.push(QQ)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = JQ.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    VQ.EasingFunction = new class extends jQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = QQ
      }
      easeInCore(QQ) {
        return this.exponent <= 0 ? QQ : (Math.exp(this.exponent * QQ) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, VQ.EasingMode = jQ.EASINGMODE_EASEINOUT, VQ.IgnoreBoundsSizeMode = 0, VQ.FitFrustumSidesMode = 1;
    var DQ = XQ(40487),
      pQ = XQ(40484),
      GQ = XQ(40515),
      UQ = XQ(40357);
    let bQ = (() => {
        var QQ;
        let WQ, XQ = [],
          TQ = [];
        return QQ = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, wQ.n)(this, XQ, [0, 1, 2]), this._pointerInput = (0, wQ.n)(this, TQ)
          }
          attachControl(QQ) {
            QQ = UQ.g.BackCompatCameraNoPreventDefault(arguments);
            const WQ = this.camera.Uj(),
              XQ = WQ.getInputElement();
            let wQ = 0,
              qQ = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = TQ => {
              const zQ = TQ.event,
                sQ = "touch" === zQ.pointerType;
              if (TQ.type !== gQ.d.POINTERMOVE && -1 === this.buttons.indexOf(zQ.button)) return;
              const FQ = zQ.target;
              if (this._altKey = zQ.altKey, this._ctrlKey = zQ.ctrlKey, this._metaKey = zQ.metaKey, this._shiftKey = zQ.shiftKey, this._buttonsPressed = zQ.buttons, WQ.isPointerLock) {
                const QQ = zQ.movementX,
                  WQ = zQ.movementY;
                this.onTouch(null, QQ, WQ), this._pointA = null, this._pointB = null
              } else {
                if (TQ.type !== gQ.d.POINTERDOWN && TQ.type !== gQ.d.POINTERDOUBLETAP && sQ && this._pointA?.pointerId !== zQ.pointerId && this._pointB?.pointerId !== zQ.pointerId) return;
                if (TQ.type !== gQ.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !sQ)
                  if (TQ.type === gQ.d.POINTERDOUBLETAP) this.onDoubleTap(zQ.pointerType, zQ);
                  else if (TQ.type !== gQ.d.POINTERUP || this._currentMousePointerIdDown !== zQ.pointerId && !sQ) {
                  if (TQ.type === gQ.d.POINTERMOVE)
                    if (QQ || zQ.preventDefault(), this._pointA && null === this._pointB) {
                      const QQ = zQ.clientX - this._pointA.x,
                        WQ = zQ.clientY - this._pointA.y;
                      this._pointA.x = zQ.clientX, this._pointA.y = zQ.clientY, this.onTouch(this._pointA, QQ, WQ)
                    } else if (this._pointA && this._pointB) {
                    const QQ = this._pointA.pointerId === zQ.pointerId ? this._pointA : this._pointB;
                    QQ.x = zQ.clientX, QQ.y = zQ.clientY;
                    const WQ = this._pointA.x - this._pointB.x,
                      XQ = this._pointA.y - this._pointB.y,
                      sQ = WQ * WQ + XQ * XQ,
                      FQ = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: zQ.pointerId,
                        type: TQ.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, wQ, sQ, qQ, FQ), qQ = FQ, wQ = sQ
                  }
                } else {
                  try {
                    FQ?.releasePointerCapture(zQ.pointerId)
                  } catch (PQ) {}
                  sQ || (this._pointB = null), WQ._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == zQ.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == zQ.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== wQ || qQ) && (this.onMultiTouch(this._pointA, this._pointB, wQ, 0, qQ, null), wQ = 0, qQ = null), this._currentMousePointerIdDown = -1, this.onButtonUp(zQ), QQ || zQ.preventDefault()
                } else {
                  try {
                    FQ?.setPointerCapture(zQ.pointerId)
                  } catch (PQ) {}
                  if (null === this._pointA) this._pointA = {
                    x: zQ.clientX,
                    y: zQ.clientY,
                    pointerId: zQ.pointerId,
                    type: zQ.pointerType,
                    button: zQ.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: zQ.clientX,
                      y: zQ.clientY,
                      pointerId: zQ.pointerId,
                      type: zQ.pointerType,
                      button: zQ.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || sQ || (this._currentMousePointerIdDown = zQ.pointerId), this.onButtonDown(zQ), QQ || (zQ.preventDefault(), XQ && XQ.focus())
                }
              }
            }, this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._pointerInput, gQ.d.POINTERDOWN | gQ.d.POINTERUP | gQ.d.POINTERMOVE | gQ.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, wQ = 0, qQ = null, this.onLostFocus()
            }, this._contextMenuBind = QQ => this.onContextMenu(QQ), XQ && XQ.addEventListener("contextmenu", this._contextMenuBind, !1);
            const TQ = this.camera.sE().Uj().getHostWindow();
            TQ && UQ.g.RegisterTopRootEvents(TQ, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const QQ = this.camera.sE().Uj().getHostWindow();
              QQ && UQ.g.UnregisterTopRootEvents(QQ, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const QQ = this.camera.sE().Uj().getInputElement();
                QQ && QQ.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(QQ, WQ) {}
          onTouch(QQ, WQ, XQ) {}
          onMultiTouch(QQ, WQ, XQ, wQ, qQ, TQ) {}
          onContextMenu(QQ) {
            QQ.preventDefault()
          }
          onButtonDown(QQ) {}
          onButtonUp(QQ) {}
          onLostFocus() {}
        }, (() => {
          const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: QQ => "buttons" in QQ,
              get: QQ => QQ.buttons,
              set: (QQ, WQ) => {
                QQ.buttons = WQ
              }
            },
            metadata: zQ
          }, XQ, TQ), zQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zQ
          })
        })(), QQ
      })(),
      vQ = (() => {
        var QQ;
        let WQ, XQ, TQ, zQ = bQ,
          sQ = [],
          FQ = [],
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        return QQ = class extends zQ {
          constructor() {
            super(...arguments), this.pinchZoom = (0, wQ.n)(this, sQ, !0), this.multiTouchPanning = ((0, wQ.n)(this, FQ), (0, wQ.n)(this, PQ, !0)), this.multiTouchPanAndZoom = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, JQ, !0)), this._isPinching = ((0, wQ.n)(this, rQ), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(QQ, WQ) {}
          _computeMultiTouchPanning(QQ, WQ) {}
          onMultiTouch(QQ, WQ, XQ, wQ, qQ, TQ) {
            0 === XQ && null === qQ || 0 === wQ && null === TQ || (this.multiTouchPanAndZoom ? (this._computePinchZoom(XQ, wQ), this._computeMultiTouchPanning(qQ, TQ)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(XQ, wQ), this._isPinching = !0) : this._computeMultiTouchPanning(qQ, TQ)) : this.multiTouchPanning ? this._computeMultiTouchPanning(qQ, TQ) : this.pinchZoom && this._computePinchZoom(XQ, wQ))
          }
          onButtonUp(QQ) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(zQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchZoom" in QQ,
              get: QQ => QQ.pinchZoom,
              set: (QQ, WQ) => {
                QQ.pinchZoom = WQ
              }
            },
            metadata: IQ
          }, sQ, FQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: QQ => "multiTouchPanning" in QQ,
              get: QQ => QQ.multiTouchPanning,
              set: (QQ, WQ) => {
                QQ.multiTouchPanning = WQ
              }
            },
            metadata: IQ
          }, PQ, gQ), (0, wQ.k)(null, null, TQ, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "multiTouchPanAndZoom" in QQ,
              get: QQ => QQ.multiTouchPanAndZoom,
              set: (QQ, WQ) => {
                QQ.multiTouchPanAndZoom = WQ
              }
            },
            metadata: IQ
          }, JQ, rQ), IQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IQ
          })
        })(), QQ
      })(),
      dQ = (() => {
        var QQ;
        let WQ, XQ, TQ, zQ, sQ, FQ, PQ, gQ = vQ,
          JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [],
          pQ = [],
          GQ = [],
          UQ = [],
          bQ = [],
          dQ = [],
          HQ = [];
        return QQ = class extends gQ {
          constructor() {
            super(...arguments), this.buttons = (0, wQ.n)(this, JQ, [0, 1, 2]), this.angularSensibilityX = ((0, wQ.n)(this, rQ), (0, wQ.n)(this, IQ, 1e3)), this.angularSensibilityY = ((0, wQ.n)(this, jQ), (0, wQ.n)(this, BQ, 1e3)), this.pinchPrecision = ((0, wQ.n)(this, yQ), (0, wQ.n)(this, VQ, 12)), this.pinchDeltaPercentage = ((0, wQ.n)(this, DQ), (0, wQ.n)(this, pQ, 0)), this.useNaturalPinchZoom = ((0, wQ.n)(this, GQ), (0, wQ.n)(this, UQ, !1)), this.panningSensibility = ((0, wQ.n)(this, bQ), (0, wQ.n)(this, dQ, 1e3)), this.pinchInwards = ((0, wQ.n)(this, HQ), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(QQ, WQ) {
            if (QQ && WQ) {
              const XQ = WQ.x - QQ.x,
                wQ = WQ.y - QQ.y,
                qQ = this.camera.movement.input.getEntry("pointer", "pan"),
                TQ = qQ?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== TQ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -XQ * TQ, this.camera.movement.panAccumulatedPixels.y += wQ * TQ)
            }
          }
          _computePinchZoom(WQ, XQ) {
            const wQ = this.camera.radius || QQ.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = wQ * Math.sqrt(WQ) / Math.sqrt(XQ);
            else if (this.pinchDeltaPercentage) {
              const QQ = .001 * (XQ - WQ) * wQ * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += QQ
            } else {
              const QQ = (XQ - WQ) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += QQ
            }
          }
          onTouch(QQ, WQ, XQ) {
            const wQ = this._activeEntry ?? (this.camera.Uj().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (wQ)
              if ("pan" === wQ.interaction) {
                const QQ = wQ.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== QQ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -WQ * QQ, this.camera.movement.panAccumulatedPixels.y += XQ * QQ)
              } else if ("rotate" === wQ.interaction) {
              const QQ = wQ.lN ?? wQ.sensitivity ?? 1 / this.angularSensibilityX,
                qQ = wQ.hN ?? wQ.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -WQ * QQ, this.camera.movement.rotationAccumulatedPixels.y += -XQ * qQ
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(QQ, WQ, XQ, wQ, qQ, TQ) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(wQ) - Math.sqrt(XQ)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(QQ, WQ, XQ, wQ, qQ, TQ)
          }
          onButtonDown(QQ) {
            this._pointerConditions.button = QQ.button, this._pointerModifiers.ctrl = QQ.ctrlKey, this._pointerModifiers.alt = QQ.altKey, this._pointerModifiers.shift = QQ.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(QQ)
          }
          onButtonUp(QQ) {
            this._activeEntry = null, super.onButtonUp(QQ)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const vQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(gQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: QQ => "buttons" in QQ,
              get: QQ => QQ.buttons,
              set: (QQ, WQ) => {
                QQ.buttons = WQ
              }
            },
            metadata: vQ
          }, JQ, rQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "angularSensibilityX" in QQ,
              get: QQ => QQ.angularSensibilityX,
              set: (QQ, WQ) => {
                QQ.angularSensibilityX = WQ
              }
            },
            metadata: vQ
          }, IQ, jQ), (0, wQ.k)(null, null, TQ, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "angularSensibilityY" in QQ,
              get: QQ => QQ.angularSensibilityY,
              set: (QQ, WQ) => {
                QQ.angularSensibilityY = WQ
              }
            },
            metadata: vQ
          }, BQ, yQ), (0, wQ.k)(null, null, zQ, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchPrecision" in QQ,
              get: QQ => QQ.pinchPrecision,
              set: (QQ, WQ) => {
                QQ.pinchPrecision = WQ
              }
            },
            metadata: vQ
          }, VQ, DQ), (0, wQ.k)(null, null, sQ, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchDeltaPercentage" in QQ,
              get: QQ => QQ.pinchDeltaPercentage,
              set: (QQ, WQ) => {
                QQ.pinchDeltaPercentage = WQ
              }
            },
            metadata: vQ
          }, pQ, GQ), (0, wQ.k)(null, null, FQ, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useNaturalPinchZoom" in QQ,
              get: QQ => QQ.useNaturalPinchZoom,
              set: (QQ, WQ) => {
                QQ.useNaturalPinchZoom = WQ
              }
            },
            metadata: vQ
          }, UQ, bQ), (0, wQ.k)(null, null, PQ, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningSensibility" in QQ,
              get: QQ => QQ.panningSensibility,
              set: (QQ, WQ) => {
                QQ.panningSensibility = WQ
              }
            },
            metadata: vQ
          }, dQ, HQ), vQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vQ
          })
        })(), QQ.MinimumRadiusForPinch = .001, QQ
      })();
    GQ.d.ArcRotateCameraPointersInput = dQ;
    var HQ = XQ(40445);
    let aQ = (() => {
      var QQ;
      let WQ, XQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ = [],
        yQ = [],
        VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [];
      return QQ = class {
        constructor() {
          this.camera = (0, wQ.n)(this, BQ), this.keysUp = (0, wQ.n)(this, yQ, [38]), this.keysDown = ((0, wQ.n)(this, VQ), (0, wQ.n)(this, DQ, [40])), this.keysLeft = ((0, wQ.n)(this, pQ), (0, wQ.n)(this, GQ, [37])), this.keysRight = ((0, wQ.n)(this, bQ), (0, wQ.n)(this, vQ, [39])), this.keysReset = ((0, wQ.n)(this, dQ), (0, wQ.n)(this, aQ, [220])), this.keysZoomIn = ((0, wQ.n)(this, lQ), (0, wQ.n)(this, hQ, [187, 107])), this.keysZoomOut = ((0, wQ.n)(this, iQ), (0, wQ.n)(this, cQ, [189, 109])), this.panningSensibility = ((0, wQ.n)(this, AQ), (0, wQ.n)(this, RQ, 50)), this.zoomingSensibility = ((0, wQ.n)(this, EQ), (0, wQ.n)(this, CQ, 25)), this.angularSpeed = ((0, wQ.n)(this, uQ), (0, wQ.n)(this, LQ, .01)), this._useAltToZoom = ((0, wQ.n)(this, kQ), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new zQ.q, this._panDirection = new zQ.q
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(QQ) {
          this._useAltToZoom = QQ, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const QQ = this.camera.movement.input,
            WQ = QQ.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && WQ ? QQ.inputMap.splice(QQ.inputMap.indexOf(WQ), 1) : this._useAltToZoom && !WQ && QQ.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(QQ) {
          QQ = UQ.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.sE(), this._engine = this._scene.Uj(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((WQ => {
            const XQ = WQ.event;
            if (!XQ.metaKey)
              if (WQ.type === HQ.c.KEYDOWN) {
                if (this._ctrlPressed = XQ.ctrlKey, this._altPressed = XQ.altKey, -1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysReset.indexOf(XQ.keyCode) || -1 !== this.keysZoomIn.indexOf(XQ.keyCode) || -1 !== this.keysZoomOut.indexOf(XQ.keyCode)) {
                  -1 === this._keys.indexOf(XQ.keyCode) && this._keys.push(XQ.keyCode), XQ.preventDefault && (QQ || XQ.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysReset.indexOf(XQ.keyCode) || -1 !== this.keysZoomIn.indexOf(XQ.keyCode) || -1 !== this.keysZoomOut.indexOf(XQ.keyCode)) {
              const WQ = this._keys.indexOf(XQ.keyCode);
              WQ >= 0 && this._keys.splice(WQ, 1), XQ.preventDefault && (QQ || XQ.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const QQ = this.camera,
              WQ = QQ.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const XQ = this._rotateDirection.set(0, 0),
              wQ = this._panDirection.set(0, 0);
            let qQ = 0,
              TQ = 0;
            for (let zQ = 0; zQ < this._keys.length; zQ++) {
              const sQ = this._keys[zQ];
              if (this._keyboardConditions.key = sQ, -1 === this.keysReset.indexOf(sQ)) {
                const QQ = WQ.resolveInteraction("keyboard", this._keyboardConditions);
                if (QQ)
                  if ("pan" === QQ.interaction) TQ = Math.max(TQ, QQ.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(sQ) ? wQ.x -= 1 : -1 !== this.keysRight.indexOf(sQ) ? wQ.x += 1 : -1 !== this.keysUp.indexOf(sQ) ? wQ.y += 1 : -1 !== this.keysDown.indexOf(sQ) && (wQ.y -= 1);
                  else if ("zoom" === QQ.interaction) {
                  const XQ = QQ.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(sQ) || -1 !== this.keysZoomIn.indexOf(sQ) ? WQ.handlers.zoom(XQ) : -1 === this.keysDown.indexOf(sQ) && -1 === this.keysZoomOut.indexOf(sQ) || WQ.handlers.zoom(-XQ)
                } else "rotate" === QQ.interaction && (qQ = Math.max(qQ, QQ.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(sQ) ? XQ.x -= 1 : -1 !== this.keysRight.indexOf(sQ) ? XQ.x += 1 : -1 !== this.keysUp.indexOf(sQ) ? XQ.y -= 1 : -1 !== this.keysDown.indexOf(sQ) && (XQ.y += 1))
              } - 1 !== this.keysReset.indexOf(sQ) && QQ.useInputToRestoreState && QQ.restoreState()
            }
            0 === XQ.x && 0 === XQ.y || (XQ.normalize().scaleInPlace(qQ), WQ.handlers.rotate(XQ.x, XQ.y)), 0 === wQ.x && 0 === wQ.y || (wQ.normalize().scaleInPlace(TQ), WQ.handlers.pan(wQ.x, wQ.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, jQ, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAltToZoom" in QQ,
            get: QQ => QQ.useAltToZoom
          },
          metadata: zQ
        }, null, BQ), (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUp" in QQ,
            get: QQ => QQ.keysUp,
            set: (QQ, WQ) => {
              QQ.keysUp = WQ
            }
          },
          metadata: zQ
        }, yQ, VQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDown" in QQ,
            get: QQ => QQ.keysDown,
            set: (QQ, WQ) => {
              QQ.keysDown = WQ
            }
          },
          metadata: zQ
        }, DQ, pQ), (0, wQ.k)(null, null, TQ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysLeft" in QQ,
            get: QQ => QQ.keysLeft,
            set: (QQ, WQ) => {
              QQ.keysLeft = WQ
            }
          },
          metadata: zQ
        }, GQ, bQ), (0, wQ.k)(null, null, sQ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRight" in QQ,
            get: QQ => QQ.keysRight,
            set: (QQ, WQ) => {
              QQ.keysRight = WQ
            }
          },
          metadata: zQ
        }, vQ, dQ), (0, wQ.k)(null, null, FQ, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysReset" in QQ,
            get: QQ => QQ.keysReset,
            set: (QQ, WQ) => {
              QQ.keysReset = WQ
            }
          },
          metadata: zQ
        }, aQ, lQ), (0, wQ.k)(null, null, PQ, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysZoomIn" in QQ,
            get: QQ => QQ.keysZoomIn,
            set: (QQ, WQ) => {
              QQ.keysZoomIn = WQ
            }
          },
          metadata: zQ
        }, hQ, iQ), (0, wQ.k)(null, null, gQ, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysZoomOut" in QQ,
            get: QQ => QQ.keysZoomOut,
            set: (QQ, WQ) => {
              QQ.keysZoomOut = WQ
            }
          },
          metadata: zQ
        }, cQ, AQ), (0, wQ.k)(null, null, JQ, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "panningSensibility" in QQ,
            get: QQ => QQ.panningSensibility,
            set: (QQ, WQ) => {
              QQ.panningSensibility = WQ
            }
          },
          metadata: zQ
        }, RQ, EQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zoomingSensibility" in QQ,
            get: QQ => QQ.zoomingSensibility,
            set: (QQ, WQ) => {
              QQ.zoomingSensibility = WQ
            }
          },
          metadata: zQ
        }, CQ, uQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "angularSpeed" in QQ,
            get: QQ => QQ.angularSpeed,
            set: (QQ, WQ) => {
              QQ.angularSpeed = WQ
            }
          },
          metadata: zQ
        }, LQ, kQ), zQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zQ
        })
      })(), QQ
    })();
    GQ.d.ArcRotateCameraKeyboardMoveInput = aQ;
    var lQ = XQ(38047),
      hQ = XQ(40453);
    let iQ = (() => {
      var QQ;
      let WQ, XQ, TQ, FQ = [],
        PQ = [],
        JQ = [],
        IQ = [],
        jQ = [],
        BQ = [];
      return QQ = class {
        constructor() {
          this.wheelPrecision = (0, wQ.n)(this, FQ, 3), this.zoomToMouseLocation = ((0, wQ.n)(this, PQ), (0, wQ.n)(this, JQ, !1)), this.wheelDeltaPercentage = ((0, wQ.n)(this, IQ), (0, wQ.n)(this, jQ, 0)), this.customComputeDeltaFromMouseWheel = ((0, wQ.n)(this, BQ), null), this._viewOffset = new zQ.s(0, 0, 0), this._globalOffset = new zQ.s(0, 0, 0), this._inertialPanning = zQ.s.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(QQ, WQ) {
          let XQ;
          const wQ = .01 * QQ * this.wheelDeltaPercentage * WQ;
          return XQ = QQ > 0 ? wQ / (1 + this.wheelDeltaPercentage) : wQ * (1 + this.wheelDeltaPercentage), XQ
        }
        attachControl(QQ) {
          QQ = UQ.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = WQ => {
            if (WQ.type !== gQ.d.POINTERWHEEL) return;
            const XQ = WQ.event;
            let wQ;
            const qQ = XQ.deltaMode === hQ.e.DOM_DELTA_LINE ? 40 : 1,
              TQ = -XQ.deltaY * qQ;
            if (this.customComputeDeltaFromMouseWheel) wQ = this.customComputeDeltaFromMouseWheel(TQ, this, XQ);
            else if (this.wheelDeltaPercentage) {
              if (wQ = this._computeDeltaFromMouseWheelLegacyEvent(TQ, this.camera.radius), wQ > 0) {
                const QQ = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let WQ = this.camera.radius,
                  XQ = QQ + wQ;
                for (let wQ = 0; wQ < 20 && !(WQ <= XQ) && !(Math.abs(XQ * this.camera.inertia) < .001); wQ++) WQ -= XQ, XQ *= this.camera.inertia;
                WQ = (0, sQ.Clamp)(WQ, 0, Number.MAX_VALUE), wQ = this._computeDeltaFromMouseWheelLegacyEvent(TQ, WQ)
              }
            } else {
              const QQ = this.camera.movement.input.getEntry("wheel", "zoom");
              wQ = TQ * (QQ?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            wQ && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(wQ)) : this.camera.movement.zoomAccumulatedPixels += wQ), XQ.preventDefault && (QQ || XQ.preventDefault())
          }, this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._wheel, gQ.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.h_(0)
        }
        detachControl() {
          this._observer && (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const QQ = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(QQ.inertialAlphaOffset) + Math.abs(QQ.inertialBetaOffset) + Math.abs(QQ.inertialRadiusOffset)) {
            this._updateHitPlane(), QQ.target.addInPlace(this._inertialPanning), QQ.radius -= this._zoomToMouseRadiusOffset;
            const WQ = QQ.movement.getFrameIndependentDecay(QQ.inertia);
            this._inertialPanning.scaleInPlace(WQ), this._zoomToMouseRadiusOffset *= WQ, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < rQ.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const QQ = this.camera,
            WQ = QQ.target.subtract(QQ.position);
          this._hitPlane = lQ.b.FromPositionAndNormal(QQ.target, WQ)
        }
        _getPosition() {
          const QQ = this.camera,
            WQ = QQ.sE(),
            XQ = WQ.createPickingRay(WQ.pointerX, WQ.pointerY, zQ.e.Identity(), QQ, !1);
          0 === QQ.targetScreenOffset.x && 0 === QQ.targetScreenOffset.y || (this._viewOffset.set(QQ.targetScreenOffset.x, QQ.targetScreenOffset.y, 0), QQ.getViewMatrix().invertToRef(QQ._cameraTransformMatrix), this._globalOffset = zQ.s.TransformNormal(this._viewOffset, QQ._cameraTransformMatrix), XQ.origin.addInPlace(this._globalOffset));
          let wQ = 0;
          return this._hitPlane && (wQ = XQ.intersectsPlane(this._hitPlane) ?? 0), XQ.origin.addInPlace(XQ.direction.scaleInPlace(wQ))
        }
        _zoomToMouse(QQ) {
          const WQ = this.camera,
            XQ = 1 - WQ.inertia,
            wQ = WQ.movement.getFrameIndependentInputScale(WQ.inertia);
          if (WQ.lowerRadiusLimit) {
            const qQ = WQ.lowerRadiusLimit ?? 0;
            WQ.radius - (this._zoomToMouseRadiusOffset + QQ * wQ) / XQ < qQ && (QQ = ((WQ.radius - qQ) * XQ - this._zoomToMouseRadiusOffset) / wQ)
          }
          if (WQ.upperRadiusLimit) {
            const qQ = WQ.upperRadiusLimit ?? 0;
            WQ.radius - (this._zoomToMouseRadiusOffset + QQ * wQ) / XQ > qQ && (QQ = ((WQ.radius - qQ) * XQ - this._zoomToMouseRadiusOffset) / wQ)
          }
          const qQ = QQ / XQ / WQ.radius,
            TQ = this._getPosition(),
            sQ = zQ.m.vj[6];
          TQ.subtractToRef(WQ.target, sQ), sQ.scaleInPlace(qQ), sQ.scaleInPlace(XQ), sQ.scaleInPlace(wQ), this._inertialPanning.addInPlace(sQ), this._zoomToMouseRadiusOffset += QQ * wQ
        }
        _zeroIfClose(QQ) {
          Math.abs(QQ.x) < rQ.b && (QQ.x = 0), Math.abs(QQ.y) < rQ.b && (QQ.y = 0), Math.abs(QQ.z) < rQ.b && (QQ.z = 0)
        }
      }, (() => {
        const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecision" in QQ,
            get: QQ => QQ.wheelPrecision,
            set: (QQ, WQ) => {
              QQ.wheelPrecision = WQ
            }
          },
          metadata: zQ
        }, FQ, PQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zoomToMouseLocation" in QQ,
            get: QQ => QQ.zoomToMouseLocation,
            set: (QQ, WQ) => {
              QQ.zoomToMouseLocation = WQ
            }
          },
          metadata: zQ
        }, JQ, IQ), (0, wQ.k)(null, null, TQ, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelDeltaPercentage" in QQ,
            get: QQ => QQ.wheelDeltaPercentage,
            set: (QQ, WQ) => {
              QQ.wheelDeltaPercentage = WQ
            }
          },
          metadata: zQ
        }, jQ, BQ), zQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zQ
        })
      })(), QQ
    })();
    GQ.d.ArcRotateCameraMouseWheelInput = iQ;
    var cQ, AQ, RQ = XQ(40153);
    class EQ extends GQ.g {
      constructor(QQ) {
        super(QQ)
      }
      addMouseWheel() {
        return this.add(new iQ), this
      }
      addPointers() {
        return this.add(new dQ), this
      }
      addKeyboard() {
        return this.add(new aQ), this
      }
    }(cQ = EQ.prototype).addVRDeviceOrientation ?? (cQ.addVRDeviceOrientation = (0, RQ.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (AQ = EQ.prototype).addGamepad ?? (AQ.addGamepad = (0, RQ.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var CQ = XQ(37418),
      uQ = XQ(40501),
      LQ = XQ(40506);
    class kQ extends uQ.d {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ), this.input = new LQ.c({
          pan: (QQ, WQ) => {
            this.panAccumulatedPixels.x += QQ, this.panAccumulatedPixels.y += WQ
          },
          rotate: (QQ, WQ) => {
            this.rotationAccumulatedPixels.x += QQ, this.rotationAccumulatedPixels.y += WQ
          },
          zoom: QQ => {
            this.zoomAccumulatedPixels += QQ
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

    function fQ(QQ, WQ) {
      return isNaN(QQ) ? WQ : QQ
    }
    let SQ = (() => {
        var QQ;
        let WQ, XQ, FQ, gQ, JQ, jQ, BQ, GQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, CQ, uQ, LQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ = pQ.c,
          NQ = [],
          ZQ = [],
          OQ = [],
          KQ = [],
          mQ = [],
          MQ = [],
          QW = [],
          WW = [],
          XW = [],
          wW = [],
          qW = [],
          TW = [],
          zW = [],
          sW = [],
          FW = [],
          PW = [],
          gW = [],
          JW = [],
          rW = [],
          IW = [],
          jW = [],
          BW = [],
          yW = [],
          VW = [],
          DW = [],
          pW = [],
          GW = [],
          UW = [],
          bW = [],
          vW = [],
          dW = [],
          HW = [],
          aW = [],
          lW = [],
          hW = [],
          iW = [],
          cW = [],
          AW = [],
          RW = [],
          EW = [],
          CW = [],
          uW = [],
          LW = [],
          kW = [],
          fW = [],
          SW = [],
          tW = [];
        return QQ = class extends YQ {
          get target() {
            return this.gM
          }
          set target(QQ) {
            this.setTarget(QQ)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(QQ) {
            QQ && this.setTarget(QQ)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(QQ) {
            this.setPosition(QQ)
          }
          set upVector(QQ) {
            this._upToYMatrix || (this._yToUpMatrix = new zQ.e, this._upToYMatrix = new zQ.e, this._upVector = zQ.s.Zero()), QQ.normalize(), this._upVector.WH(QQ), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            zQ.e.RotationAlignToRef(zQ.s.UpReadOnly, this._upVector, this._yToUpMatrix), zQ.e.RotationAlignToRef(this._upVector, zQ.s.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const QQ = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(QQ) < this._rotationEpsilon ? 0 : QQ
          }
          set inertialAlphaOffset(QQ) {
            this._inertialAlphaOffset = QQ, 0 === QQ && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const QQ = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(QQ) < this._rotationEpsilon ? 0 : QQ
          }
          set inertialBetaOffset(QQ) {
            this._inertialBetaOffset = QQ, 0 === QQ && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const QQ = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(QQ) < this._rotationEpsilon ? 0 : QQ
          }
          set inertialRadiusOffset(QQ) {
            this._inertialRadiusOffset = QQ, 0 === QQ && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(QQ) {
            this._panningInertia = QQ, this.movement && (this.movement.panInertia = QQ)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(QQ) {
            this._inertia = QQ, this.movement && (this.movement.rotationInertia = QQ, this.movement.zoomInertia = QQ)
          }
          get angularSensibilityX() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.angularSensibilityX : 0
          }
          set angularSensibilityX(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.angularSensibilityX = QQ)
          }
          get angularSensibilityY() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.angularSensibilityY : 0
          }
          set angularSensibilityY(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.angularSensibilityY = QQ)
          }
          get pinchPrecision() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.pinchPrecision : 0
          }
          set pinchPrecision(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.pinchPrecision = QQ)
          }
          get pinchDeltaPercentage() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.pinchDeltaPercentage = QQ)
          }
          get useNaturalPinchZoom() {
            const QQ = this.inputs.attached.pointers;
            return !!QQ && QQ.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.useNaturalPinchZoom = QQ)
          }
          get panningSensibility() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.panningSensibility : 0
          }
          set panningSensibility(QQ) {
            const WQ = this.inputs.attached.pointers;
            WQ && (WQ.panningSensibility = QQ)
          }
          get keysUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUp : []
          }
          set keysUp(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysUp = QQ)
          }
          get keysDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDown : []
          }
          set keysDown(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysDown = QQ)
          }
          get keysLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysLeft : []
          }
          set keysLeft(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysLeft = QQ)
          }
          get keysRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRight : []
          }
          set keysRight(QQ) {
            const WQ = this.inputs.attached.keyboard;
            WQ && (WQ.keysRight = QQ)
          }
          get wheelPrecision() {
            const QQ = this.inputs.attached.mousewheel;
            return QQ ? QQ.wheelPrecision : 0
          }
          set wheelPrecision(QQ) {
            const WQ = this.inputs.attached.mousewheel;
            WQ && (WQ.wheelPrecision = QQ)
          }
          get zoomToMouseLocation() {
            const QQ = this.inputs.attached.mousewheel;
            return !!QQ && QQ.zoomToMouseLocation
          }
          set zoomToMouseLocation(QQ) {
            const WQ = this.inputs.attached.mousewheel;
            WQ && (WQ.zoomToMouseLocation = QQ)
          }
          get wheelDeltaPercentage() {
            const QQ = this.inputs.attached.mousewheel;
            return QQ ? QQ.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(QQ) {
            const WQ = this.inputs.attached.mousewheel;
            WQ && (WQ.wheelDeltaPercentage = QQ)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(QQ) {
            this._useCtrlForPanningInternal = QQ;
            const WQ = this.movement.input,
              XQ = WQ.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !QQ && XQ ? WQ.inputMap.splice(WQ.inputMap.indexOf(XQ), 1) : QQ && !XQ && WQ.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const wQ = WQ.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !QQ && wQ ? WQ.inputMap.splice(WQ.inputMap.indexOf(wQ), 1) : QQ && !wQ && WQ.addEntry({
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
          set _panningMouseButton(QQ) {
            this._panningMouseButtonInternal = QQ;
            const WQ = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            WQ && (WQ.button = QQ)
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
          set useBouncingBehavior(QQ) {
            QQ !== this.useBouncingBehavior && (QQ ? (this._bouncingBehavior = new yQ, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(QQ) {
            QQ !== this.useFramingBehavior && (QQ ? (this._framingBehavior = new VQ, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(QQ) {
            QQ !== this.useAutoRotationBehavior && (QQ ? (this._autoRotationBehavior = new IQ, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(QQ, WQ, XQ, qQ, sQ, FQ) {
            var PQ;
            let gQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(QQ, zQ.s.Zero(), FQ, gQ), PQ = this, this.alpha = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, void 0)), this.beta = ((0, wQ.n)(this, OQ), (0, wQ.n)(this, KQ, void 0)), this.radius = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, void 0)), this.overrideCloneAlphaBetaRadius = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, void 0)), this.gM = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, void 0)), this._targetHost = ((0, wQ.n)(this, qW), (0, wQ.n)(this, TW, void 0)), this._upToYMatrix = (0, wQ.n)(this, zW), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, wQ.n)(this, sW, null), this.upperAlphaLimit = ((0, wQ.n)(this, FW), (0, wQ.n)(this, PW, null)), this.lowerBetaLimit = ((0, wQ.n)(this, gW), (0, wQ.n)(this, JW, .01)), this.upperBetaLimit = ((0, wQ.n)(this, rW), (0, wQ.n)(this, IW, Math.PI - .01)), this.lowerRadiusLimit = ((0, wQ.n)(this, jW), (0, wQ.n)(this, BW, null)), this.upperRadiusLimit = ((0, wQ.n)(this, yW), (0, wQ.n)(this, VW, null)), this.lowerTargetYLimit = ((0, wQ.n)(this, DW), (0, wQ.n)(this, pW, -1 / 0)), this.inertialPanningX = ((0, wQ.n)(this, GW), (0, wQ.n)(this, UW, 0)), this.inertialPanningY = ((0, wQ.n)(this, bW), (0, wQ.n)(this, vW, 0)), this.pinchToPanMaxDistance = ((0, wQ.n)(this, dW), (0, wQ.n)(this, HW, 20)), this.panningDistanceLimit = ((0, wQ.n)(this, aW), (0, wQ.n)(this, lW, null)), this.panningOriginTarget = ((0, wQ.n)(this, hW), (0, wQ.n)(this, iW, zQ.s.Zero())), this._panningInertia = ((0, wQ.n)(this, cW), .9), this._inertia = .9, this.zoomOnFactor = (0, wQ.n)(this, AW, 1), this.targetScreenOffset = ((0, wQ.n)(this, RW), (0, wQ.n)(this, EW, zQ.q.Zero())), this.allowUpsideDown = ((0, wQ.n)(this, CW), (0, wQ.n)(this, uW, !0)), this.useInputToRestoreState = ((0, wQ.n)(this, LW), (0, wQ.n)(this, kW, !0)), this.restoreStateInterpolationFactor = ((0, wQ.n)(this, fW), (0, wQ.n)(this, SW, 0)), this._currentInterpolationFactor = ((0, wQ.n)(this, tW), 0), this._viewMatrix = new zQ.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new zQ.s(1, 1, 0), this._transformedDirection = new zQ.s, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new TQ.b, this.checkCollisions = !1, this.collisionRadius = new zQ.s(.5, .5, .5), this._previousPosition = zQ.s.Zero(), this._collisionVelocity = zQ.s.Zero(), this._newPosition = zQ.s.Zero(), this._computationVector = zQ.s.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new zQ.s(NaN, NaN, NaN), this._goalTargetScreenOffset = new zQ.q(NaN, NaN), this._onCollisionPositionChange = function(QQ, WQ) {
              let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              XQ ? (PQ.setPosition(WQ), PQ.Xr && PQ.Xr(XQ)) : PQ._previousPosition.WH(PQ._position);
              const wQ = Math.cos(PQ.alpha),
                qQ = Math.sin(PQ.alpha),
                TQ = Math.cos(PQ.beta);
              let zQ = Math.sin(PQ.beta);
              0 === zQ && (zQ = 1e-4);
              const sQ = PQ._getTargetPosition();
              PQ._computationVector.XQQ(PQ.radius * wQ * zQ, PQ.radius * TQ, PQ.radius * qQ * zQ), sQ.addToRef(PQ._computationVector, PQ._newPosition), PQ._position.WH(PQ._newPosition);
              let FQ = PQ.upVector;
              PQ.allowUpsideDown && PQ.beta < 0 && (FQ = FQ.clone(), FQ = FQ.pg()), PQ._computeViewMatrix(PQ._position, sQ, FQ), PQ._viewMatrix.addAtIndex(12, PQ.targetScreenOffset.x), PQ._viewMatrix.addAtIndex(13, PQ.targetScreenOffset.y), PQ._collisionTriggered = !1
            }, this.gM = zQ.s.Zero(), sQ && this.setTarget(sQ), this.alpha = WQ, this.beta = XQ, this.radius = qQ, this.getViewMatrix(), this.inputs = new EQ(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new kQ(this.sE(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.gM = new zQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = zQ.q.Zero()
          }
          _updateCache(QQ) {
            QQ || super._updateCache(), this._cache.gM.WH(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.WH(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const QQ = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? QQ.addToRef(this._targetBoundingCenter, this.gM) : this.gM.WH(QQ)
            }
            const QQ = this._getLockedTargetPosition();
            return QQ || this.gM
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > rQ.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              TQ = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != TQ ? this._currentInterpolationFactor = TQ : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = fQ(QQ, this._goalAlpha), this._goalBeta = fQ(WQ, this._goalBeta), this._goalRadius = fQ(XQ, this._goalRadius), this._goalTarget.set(fQ(wQ.x, this._goalTarget.x), fQ(wQ.y, this._goalTarget.y), fQ(wQ.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(fQ(qQ.x, this._goalTargetScreenOffset.x), fQ(qQ.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, sQ.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, sQ.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, sQ.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, sQ.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.gM.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(QQ, WQ) {
            let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const qQ = arguments;
            WQ = UQ.g.BackCompatCameraNoPreventDefault(qQ), this._useCtrlForPanning = XQ, this._panningMouseButton = wQ, "boolean" === typeof qQ[0] && (qQ.length > 1 && (this._useCtrlForPanning = qQ[1]), qQ.length > 2 && (this._panningMouseButton = qQ[2])), this.inputs.attachElement(WQ), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(QQ, WQ, XQ) {
            const wQ = this.invertRotation ? -1 : 1;
            let qQ = QQ * this._calculateHandednessMultiplier();
            this.beta < 0 && (qQ *= -1), this.alpha += qQ * wQ, this.beta += WQ * wQ, this.radius -= XQ
          }
          _applyPanDelta(QQ, WQ) {
            const XQ = zQ.m.vj[0].XQQ(QQ, WQ, WQ);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), XQ.multiplyInPlace(this.panningAxis), zQ.s.TransformNormalToRef(XQ, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const QQ = this.upVector,
                WQ = zQ.s.CrossToRef(this._transformedDirection, QQ, this._transformedDirection);
              zQ.s.CrossToRef(QQ, WQ, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.gM);
                zQ.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.gM.WH(this._transformedDirection)
              } else {
                if (this.parent) {
                  const QQ = zQ.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(QQ), QQ.transposeToRef(QQ), zQ.s.TransformCoordinatesToRef(this._transformedDirection, QQ, this._transformedDirection)
                }
                this.gM.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let QQ = !1;
            this.movement.computeCurrentFrameDeltas();
            const WQ = this.movement.rotationDeltaCurrentFrame,
              XQ = this.movement.zoomDeltaCurrentFrame,
              wQ = this.movement.panDeltaCurrentFrame;
            if (0 === WQ.x && 0 === WQ.y && 0 === XQ && 0 === wQ.x && 0 === wQ.y || (QQ = !0, 0 === WQ.x && 0 === WQ.y && 0 === XQ || this._applyRotationAndZoomDelta(WQ.x, WQ.y, XQ), 0 === wQ.x && 0 === wQ.y || this._applyPanDelta(wQ.x, wQ.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), QQ = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const WQ = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < WQ && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < WQ && (this.inertialPanningY = 0), QQ = !0
            }
            if (QQ) this.stopInterpolation();
            else if (this._isInterpolating) {
              let QQ = !1;
              const WQ = this._scene.Uj().getDeltaTime() / 1e3,
                XQ = 1 - Math.pow(2, -WQ / this._currentInterpolationFactor),
                wQ = fQ(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const WQ = zQ.m.vj[0].set(fQ(this._goalTarget.x, this.gM.x), fQ(this._goalTarget.y, this.gM.y), fQ(this._goalTarget.z, this.gM.z));
                zQ.s.LerpToRef(this.target, WQ, XQ, this.gM), 10 * zQ.s.Distance(this.target, WQ) / wQ < rQ.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.WH(WQ), this.setTarget(this.target, !1, !0, !0)) : QQ = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const WQ = zQ.h.RotationAlphaBetaGammaToRef(fQ(this._goalAlpha, this.alpha), fQ(this._goalBeta, this.beta), 0, zQ.m.Quaternion[0]),
                  wQ = zQ.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, zQ.m.Quaternion[1]),
                  qQ = zQ.h.SlerpToRef(wQ, WQ, XQ, zQ.m.Quaternion[2]);
                qQ.normalize();
                const TQ = qQ.toAlphaBetaGammaToRef(zQ.m.vj[0]);
                if (this.alpha = TQ.x, this.beta = TQ.y, qQ.isApprox(WQ, rQ.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const QQ = WQ.toAlphaBetaGammaToRef(zQ.m.vj[0]);
                  this.alpha = QQ.x, this.beta = QQ.y
                } else QQ = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (wQ - this.radius) * XQ, Math.abs(wQ / this.radius - 1) < rQ.b ? (this._goalRadius = NaN, this.radius = wQ) : QQ = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const WQ = zQ.m.Vector2[0].set(fQ(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), fQ(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                zQ.q.LerpToRef(this.targetScreenOffset, WQ, XQ, this.targetScreenOffset), zQ.q.Distance(this.targetScreenOffset, WQ) < rQ.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.WH(WQ)) : QQ = !0
              }
              this._isInterpolating = QQ
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || zQ.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const QQ = this.alpha;
            var WQ, XQ;
            this.alpha = function(QQ) {
              let WQ = Math.PI / 2;
              return 0 === QQ.x && 0 === QQ.z || (WQ = Math.acos(QQ.x / Math.sqrt(Math.pow(QQ.x, 2) + Math.pow(QQ.z, 2)))), QQ.z < 0 && (WQ = 2 * Math.PI - WQ), WQ
            }(this._computationVector), this.beta = (WQ = this._computationVector.y, XQ = this.radius, Math.acos(WQ / XQ));
            const wQ = Math.round((QQ - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * wQ * Math.PI, this._checkLimits()
          }
          setPosition(QQ) {
            this._position.equals(QQ) || (this._position.WH(QQ), this.rebuildAnglesAndRadius())
          }
          setTarget(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (wQ = this.overrideCloneAlphaBetaRadius ?? wQ, QQ.computeWorldMatrix) WQ && QQ.uC ? this._targetBoundingCenter = QQ.uC().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, QQ.computeWorldMatrix(), this._targetHost = QQ, this.gM = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const WQ = QQ,
                wQ = this._getTargetPosition();
              if (wQ && !XQ && wQ.equals(WQ)) return;
              this._targetHost = null, this.gM = WQ, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            wQ || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const QQ = Math.cos(this.alpha),
              WQ = Math.sin(this.alpha),
              XQ = Math.cos(this.beta);
            let wQ = Math.sin(this.beta);
            0 === wQ && (wQ = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const qQ = this._getTargetPosition();
            if (this._computationVector.XQQ(this.radius * QQ * wQ, this.radius * XQ, this.radius * WQ * wQ), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || zQ.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), qQ.addToRef(this._computationVector, this._newPosition), this.sE().collisionsEnabled && this.checkCollisions) {
              const QQ = this.sE().collisionCoordinator;
              this._collider || (this._collider = QQ.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, QQ.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.WH(this._newPosition);
              let QQ = this.upVector;
              this.allowUpsideDown && wQ < 0 && (QQ = QQ.pg()), this._computeViewMatrix(this._position, qQ, QQ), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.WH(qQ), this._viewMatrix
          }
          zoomOn(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            QQ = QQ || this.sE().meshes;
            const XQ = PQ.d.MinMax(QQ);
            let wQ = this._calculateLowerRadiusFromModelBoundingSphere(XQ.min, XQ.max);
            if (wQ = Math.max(Math.min(wQ, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = wQ * this.zoomOnFactor, this.mode === DQ.d.ORTHOGRAPHIC_CAMERA) {
              const QQ = this.sE().Uj().getAspectRatio(this),
                WQ = wQ * this.zoomOnFactor / 2;
              this.orthoLeft = -WQ * QQ, this.orthoRight = WQ * QQ, this.orthoBottom = -WQ, this.orthoTop = WQ
            }
            this.focusOn({
              min: XQ.min,
              max: XQ.max,
              distance: wQ
            }, WQ)
          }
          focusOn(QQ) {
            let WQ, XQ, wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === QQ.min) {
              const wQ = QQ || this.sE().meshes;
              WQ = PQ.d.MinMax(wQ), XQ = zQ.s.Distance(WQ.min, WQ.max)
            } else {
              WQ = QQ, XQ = QQ.distance
            }
            this.gM = PQ.d.Center(WQ), wQ || (this.maxZ = 2 * XQ)
          }
          createRigCamera(WQ, XQ) {
            let wQ = 0;
            switch (this.cameraRigMode) {
              case DQ.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case DQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case DQ.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case DQ.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case DQ.d.RIG_MODE_VR:
                wQ = this._cameraRigParams.stereoHalfAngle * (0 === XQ ? 1 : -1);
                break;
              case DQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                wQ = this._cameraRigParams.stereoHalfAngle * (0 === XQ ? -1 : 1)
            }
            const qQ = new QQ(WQ, this.alpha + wQ, this.beta, this.radius, this.gM, this.sE());
            return qQ._cameraRigParams = {}, qQ.isRigCamera = !0, qQ.rigParent = this, qQ.upVector = this.upVector, qQ.mode = this.mode, qQ.orthoLeft = this.orthoLeft, qQ.orthoRight = this.orthoRight, qQ.orthoBottom = this.orthoBottom, qQ.orthoTop = this.orthoTop, qQ
          }
          _updateRigCameras() {
            const QQ = this._rigCameras[0],
              WQ = this._rigCameras[1];
            switch (QQ.beta = WQ.beta = this.beta, this.cameraRigMode) {
              case DQ.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case DQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case DQ.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case DQ.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case DQ.d.RIG_MODE_VR:
                QQ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, WQ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case DQ.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                QQ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, WQ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(QQ, WQ) {
            let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const wQ = zQ.s.Distance(QQ, WQ),
              qQ = this.sE().Uj().getAspectRatio(this),
              TQ = Math.tan(this.fov / 2),
              sQ = TQ * qQ,
              FQ = .5 * wQ * XQ,
              PQ = FQ * Math.sqrt(1 + 1 / (sQ * sQ)),
              gQ = FQ * Math.sqrt(1 + 1 / (TQ * TQ));
            return Math.max(PQ, gQ)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(YQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.F)("target")], jQ = [(0, qQ.w)("targetHost")], BQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], uQ = [(0, qQ.F)()], LQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], oQ = [(0, qQ.D)()], eQ = [(0, qQ.I)()], nQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, BQ, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialAlphaOffset" in QQ,
              get: QQ => QQ.inertialAlphaOffset
            },
            metadata: TQ
          }, null, NQ), (0, wQ.k)(QQ, null, GQ, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialBetaOffset" in QQ,
              get: QQ => QQ.inertialBetaOffset
            },
            metadata: TQ
          }, null, NQ), (0, wQ.k)(QQ, null, bQ, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialRadiusOffset" in QQ,
              get: QQ => QQ.inertialRadiusOffset
            },
            metadata: TQ
          }, null, NQ), (0, wQ.k)(QQ, null, LQ, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningInertia" in QQ,
              get: QQ => QQ.panningInertia
            },
            metadata: TQ
          }, null, NQ), (0, wQ.k)(QQ, null, SQ, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "zoomToMouseLocation" in QQ,
              get: QQ => QQ.zoomToMouseLocation
            },
            metadata: TQ
          }, null, NQ), (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alpha" in QQ,
              get: QQ => QQ.alpha,
              set: (QQ, WQ) => {
                QQ.alpha = WQ
              }
            },
            metadata: TQ
          }, ZQ, OQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: QQ => "beta" in QQ,
              get: QQ => QQ.beta,
              set: (QQ, WQ) => {
                QQ.beta = WQ
              }
            },
            metadata: TQ
          }, KQ, mQ), (0, wQ.k)(null, null, FQ, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "radius" in QQ,
              get: QQ => QQ.radius,
              set: (QQ, WQ) => {
                QQ.radius = WQ
              }
            },
            metadata: TQ
          }, MQ, QW), (0, wQ.k)(null, null, gQ, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "overrideCloneAlphaBetaRadius" in QQ,
              get: QQ => QQ.overrideCloneAlphaBetaRadius,
              set: (QQ, WQ) => {
                QQ.overrideCloneAlphaBetaRadius = WQ
              }
            },
            metadata: TQ
          }, WW, XW), (0, wQ.k)(null, null, JQ, {
            kind: "field",
            name: "gM",
            static: !1,
            private: !1,
            access: {
              has: QQ => "gM" in QQ,
              get: QQ => QQ.gM,
              set: (QQ, WQ) => {
                QQ.gM = WQ
              }
            },
            metadata: TQ
          }, wW, qW), (0, wQ.k)(null, null, jQ, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_targetHost" in QQ,
              get: QQ => QQ._targetHost,
              set: (QQ, WQ) => {
                QQ._targetHost = WQ
              }
            },
            metadata: TQ
          }, TW, zW), (0, wQ.k)(null, null, vQ, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerAlphaLimit" in QQ,
              get: QQ => QQ.lowerAlphaLimit,
              set: (QQ, WQ) => {
                QQ.lowerAlphaLimit = WQ
              }
            },
            metadata: TQ
          }, sW, FW), (0, wQ.k)(null, null, dQ, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperAlphaLimit" in QQ,
              get: QQ => QQ.upperAlphaLimit,
              set: (QQ, WQ) => {
                QQ.upperAlphaLimit = WQ
              }
            },
            metadata: TQ
          }, PW, gW), (0, wQ.k)(null, null, HQ, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerBetaLimit" in QQ,
              get: QQ => QQ.lowerBetaLimit,
              set: (QQ, WQ) => {
                QQ.lowerBetaLimit = WQ
              }
            },
            metadata: TQ
          }, JW, rW), (0, wQ.k)(null, null, aQ, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperBetaLimit" in QQ,
              get: QQ => QQ.upperBetaLimit,
              set: (QQ, WQ) => {
                QQ.upperBetaLimit = WQ
              }
            },
            metadata: TQ
          }, IW, jW), (0, wQ.k)(null, null, lQ, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerRadiusLimit" in QQ,
              get: QQ => QQ.lowerRadiusLimit,
              set: (QQ, WQ) => {
                QQ.lowerRadiusLimit = WQ
              }
            },
            metadata: TQ
          }, BW, yW), (0, wQ.k)(null, null, hQ, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperRadiusLimit" in QQ,
              get: QQ => QQ.upperRadiusLimit,
              set: (QQ, WQ) => {
                QQ.upperRadiusLimit = WQ
              }
            },
            metadata: TQ
          }, VW, DW), (0, wQ.k)(null, null, iQ, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerTargetYLimit" in QQ,
              get: QQ => QQ.lowerTargetYLimit,
              set: (QQ, WQ) => {
                QQ.lowerTargetYLimit = WQ
              }
            },
            metadata: TQ
          }, pW, GW), (0, wQ.k)(null, null, cQ, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialPanningX" in QQ,
              get: QQ => QQ.inertialPanningX,
              set: (QQ, WQ) => {
                QQ.inertialPanningX = WQ
              }
            },
            metadata: TQ
          }, UW, bW), (0, wQ.k)(null, null, AQ, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialPanningY" in QQ,
              get: QQ => QQ.inertialPanningY,
              set: (QQ, WQ) => {
                QQ.inertialPanningY = WQ
              }
            },
            metadata: TQ
          }, vW, dW), (0, wQ.k)(null, null, RQ, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchToPanMaxDistance" in QQ,
              get: QQ => QQ.pinchToPanMaxDistance,
              set: (QQ, WQ) => {
                QQ.pinchToPanMaxDistance = WQ
              }
            },
            metadata: TQ
          }, HW, aW), (0, wQ.k)(null, null, CQ, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningDistanceLimit" in QQ,
              get: QQ => QQ.panningDistanceLimit,
              set: (QQ, WQ) => {
                QQ.panningDistanceLimit = WQ
              }
            },
            metadata: TQ
          }, lW, hW), (0, wQ.k)(null, null, uQ, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningOriginTarget" in QQ,
              get: QQ => QQ.panningOriginTarget,
              set: (QQ, WQ) => {
                QQ.panningOriginTarget = WQ
              }
            },
            metadata: TQ
          }, iW, cW), (0, wQ.k)(null, null, tQ, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "zoomOnFactor" in QQ,
              get: QQ => QQ.zoomOnFactor,
              set: (QQ, WQ) => {
                QQ.zoomOnFactor = WQ
              }
            },
            metadata: TQ
          }, AW, RW), (0, wQ.k)(null, null, oQ, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "targetScreenOffset" in QQ,
              get: QQ => QQ.targetScreenOffset,
              set: (QQ, WQ) => {
                QQ.targetScreenOffset = WQ
              }
            },
            metadata: TQ
          }, EW, CW), (0, wQ.k)(null, null, eQ, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: QQ => "allowUpsideDown" in QQ,
              get: QQ => QQ.allowUpsideDown,
              set: (QQ, WQ) => {
                QQ.allowUpsideDown = WQ
              }
            },
            metadata: TQ
          }, uW, LW), (0, wQ.k)(null, null, nQ, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useInputToRestoreState" in QQ,
              get: QQ => QQ.useInputToRestoreState,
              set: (QQ, WQ) => {
                QQ.useInputToRestoreState = WQ
              }
            },
            metadata: TQ
          }, kW, fW), (0, wQ.k)(null, null, xQ, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "restoreStateInterpolationFactor" in QQ,
              get: QQ => QQ.restoreStateInterpolationFactor,
              set: (QQ, WQ) => {
                QQ.restoreStateInterpolationFactor = WQ
              }
            },
            metadata: TQ
          }, SW, tW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      tQ = !1;
    tQ || (tQ = !0, FQ.e.AddNodeConstructor("ArcRotateCamera", ((QQ, WQ) => () => new SQ(QQ, 0, 0, 1, zQ.s.Zero(), WQ))), (0, CQ.d)("BABYLON.ArcRotateCamera", SQ))
  },
  40517: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ.e
    });
    var wQ = XQ(40519);
    (0, wQ.f)()
  },
  40519: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(37546),
      sQ = XQ(40525),
      FQ = XQ(40491),
      PQ = XQ(37418);
    let gQ = (() => {
        var QQ;
        let WQ, XQ, FQ = sQ.d,
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        return QQ = class extends FQ {
          constructor(QQ, WQ, XQ, qQ) {
            super(QQ, XQ, qQ), this.groundColor = (0, wQ.n)(this, PQ, new zQ.b(0, 0, 0)), this.direction = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, JQ, void 0)), (0, wQ.n)(this, rQ), this.direction = WQ || TQ.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = TQ.s.Normalize(QQ.subtract(TQ.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", XQ.x, XQ.y, XQ.z, 0, WQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WQ), this
          }
          transferToNodeMaterialEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return QQ.setFloat3(WQ, XQ.x, XQ.y, XQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = TQ.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sQ.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, WQ) {
            QQ["HEMILIGHT" + WQ] = !0
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(FQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.l)()], XQ = [(0, qQ.F)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, WQ) => {
                QQ.groundColor = WQ
              }
            },
            metadata: TQ
          }, PQ, gQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, WQ) => {
                QQ.direction = WQ
              }
            },
            metadata: TQ
          }, JQ, rQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      JQ = !1;

    function rQ() {
      JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
export const id = 252;
export const ids = [252];
export const modules = {
  40496: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => XQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36722),
      DQ = wQ(36696),
      kQ = wQ(36729),
      vQ = wQ(39650),
      mQ = wQ(39829),
      uQ = wQ(39595),
      HQ = wQ(39303),
      bQ = wQ(36705);
    class YQ {
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
        const FQ = this._attachedCamera.iN();
        this._onPrePointerObservableObserver = FQ.onPrePointerObservable.add((QQ => {
          QQ.type !== uQ.e.POINTERDOWN ? QQ.type === uQ.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const QQ = HQ.e.Now;
          let FQ = 0;
          null != this._lastFrameTime && (FQ = QQ - this._lastFrameTime), this._lastFrameTime = QQ, this._applyUserInteraction();
          const wQ = QQ - this._lastInteractionTime - this._idleRotationWaitTime,
            LQ = Math.max(Math.min(wQ / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * LQ, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (FQ / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const QQ = this._attachedCamera.iN();
        this._onPrePointerObservableObserver && QQ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(QQ) {
        this._lastInteractionTime = QQ ?? HQ.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < bQ.b
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = HQ.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    wQ(40502);
    class xQ {
      constructor() {
        this._easingMode = xQ.EASINGMODE_EASEIN
      }
      setEasingMode(QQ) {
        const FQ = Math.min(Math.max(QQ, 0), 2);
        this._easingMode = FQ
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(QQ) {
        throw new Error("You must implement this method")
      }
      ease(QQ) {
        switch (this._easingMode) {
          case xQ.EASINGMODE_EASEIN:
            return this.easeInCore(QQ);
          case xQ.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - QQ)
        }
        return QQ >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - QQ))) + .5 : .5 * this.easeInCore(2 * QQ)
      }
    }
    xQ.EASINGMODE_EASEIN = 0, xQ.EASINGMODE_EASEOUT = 1, xQ.EASINGMODE_EASEINOUT = 2;
    var AQ = wQ(40506);
    class tQ {
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
        const FQ = this._attachedCamera;
        FQ && (QQ ? this._onMeshTargetChangedObserver = FQ.onMeshTargetChangedObservable.add((QQ => {
          if (QQ && (QQ.computeWorldMatrix(!0), QQ.sK)) {
            const FQ = QQ.sK().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * FQ, this.upperRadiusTransitionRange = .05 * FQ
          }
        })) : this._onMeshTargetChangedObserver && FQ.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (tQ.EasingFunction.setEasingMode(tQ.EasingMode), this._radiusBounceTransition = AQ.d.CreateAnimation("radius", AQ.d.ANIMATIONTYPE_FLOAT, 60, tQ.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const FQ = AQ.d.TransitionTo("radius", this._attachedCamera.radius + QQ, this._attachedCamera, this._attachedCamera.iN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        FQ && this._animatables.push(FQ)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    tQ.EasingFunction = new class extends xQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = QQ
      }
      easeInCore(QQ) {
        const FQ = Math.max(0, this.amplitude);
        return Math.pow(QQ, 3) - QQ * FQ * Math.sin(3.141592653589793 * QQ)
      }
    }(.3), tQ.EasingMode = xQ.EASINGMODE_EASEOUT;
    class eQ {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new oQ.e, this._mode = eQ.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const FQ = this._attachedCamera.iN();
        eQ.EasingFunction.setEasingMode(eQ.EasingMode), this._onPrePointerObservableObserver = FQ.onPrePointerObservable.add((QQ => {
          QQ.type !== uQ.e.POINTERDOWN ? QQ.type === uQ.e.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = QQ.onMeshTargetChangedObservable.add((QQ => {
          QQ && QQ.sK && this.zoomOnMesh(QQ, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const QQ = this._attachedCamera.iN();
        this._onPrePointerObservableObserver && QQ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        QQ.computeWorldMatrix(!0);
        const LQ = QQ.sK().boundingBox;
        this.zoomOnBoundingInfo(LQ.minimumWorld, LQ.maximumWorld, FQ, wQ)
      }
      zoomOnMeshHierarchy(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        QQ.computeWorldMatrix(!0);
        const LQ = QQ.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(LQ.min, LQ.max, FQ, wQ)
      }
      zoomOnMeshesHierarchy(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const LQ = new DQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          qQ = new DQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let oQ = 0; oQ < QQ.length; oQ++) {
          const FQ = QQ[oQ].getHierarchyBoundingVectors(!0);
          DQ.p.CheckExtends(FQ.min, LQ, qQ), DQ.p.CheckExtends(FQ.max, LQ, qQ)
        }
        this.zoomOnBoundingInfo(LQ, qQ, FQ, wQ)
      }
      zoomOnBoundingInfo(QQ, FQ) {
        let wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const oQ = QQ.y,
          kQ = oQ + (FQ.y - oQ) * this._positionScale,
          vQ = FQ.subtract(QQ).scale(.5);
        if (!isFinite(kQ)) return !1;
        if (LQ) wQ = new DQ.p(0, kQ, 0);
        else {
          const FQ = QQ.add(vQ);
          wQ = new DQ.p(FQ.x, kQ, FQ.z)
        }
        this._vectorTransition || (this._vectorTransition = AQ.d.CreateAnimation("target", AQ.d.ANIMATIONTYPE_VECTOR3, 60, eQ.EasingFunction)), this._betaIsAnimating = !0;
        let mQ = AQ.d.TransitionTo("target", wQ, this._attachedCamera, this._attachedCamera.iN(), 60, this._vectorTransition, this._framingTime);
        mQ && this._animatables.push(mQ);
        let uQ = 0;
        if (this._mode === eQ.FitFrustumSidesMode) {
          const wQ = this._calculateLowerRadiusFromModelBoundingSphere(QQ, FQ);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = vQ.length() + this._attachedCamera.minZ), uQ = wQ
        } else this._mode === eQ.IgnoreBoundsSizeMode && (uQ = this._calculateLowerRadiusFromModelBoundingSphere(QQ, FQ), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const wQ = FQ.subtract(QQ).length();
          this._attachedCamera.panningSensibility = 5e3 / wQ, this._attachedCamera.wheelPrecision = 100 / uQ
        }
        return this._radiusTransition || (this._radiusTransition = AQ.d.CreateAnimation("radius", AQ.d.ANIMATIONTYPE_FLOAT, 60, eQ.EasingFunction)), mQ = AQ.d.TransitionTo("radius", uQ, this._attachedCamera, this._attachedCamera.iN(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), qQ && qQ(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), mQ && this._animatables.push(mQ), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(QQ, FQ) {
        const wQ = this._attachedCamera;
        if (!wQ) return 0;
        let LQ = wQ._calculateLowerRadiusFromModelBoundingSphere(QQ, FQ, this._radiusScale);
        return wQ.lowerRadiusLimit && this._mode === eQ.IgnoreBoundsSizeMode && (LQ = LQ < wQ.lowerRadiusLimit ? wQ.lowerRadiusLimit : LQ), wQ.upperRadiusLimit && (LQ = LQ > wQ.upperRadiusLimit ? wQ.upperRadiusLimit : LQ), LQ
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const QQ = HQ.e.Now - this._lastInteractionTime,
          FQ = .5 * Math.PI - this._defaultElevation,
          wQ = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > wQ && QQ >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = AQ.d.CreateAnimation("beta", AQ.d.ANIMATIONTYPE_FLOAT, 60, eQ.EasingFunction));
          const QQ = AQ.d.TransitionTo("beta", FQ, this._attachedCamera, this._attachedCamera.iN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          QQ && this._animatables.push(QQ)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = HQ.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    eQ.EasingFunction = new class extends xQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = QQ
      }
      easeInCore(QQ) {
        return this.exponent <= 0 ? QQ : (Math.exp(this.exponent * QQ) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, eQ.EasingMode = xQ.EASINGMODE_EASEINOUT, eQ.IgnoreBoundsSizeMode = 0, eQ.FitFrustumSidesMode = 1;
    var MQ = wQ(39642),
      GQ = wQ(39633),
      pQ = wQ(39676),
      cQ = wQ(39505);
    let CQ = (() => {
        var QQ;
        let FQ, wQ = [],
          oQ = [];
        return QQ = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, LQ.l)(this, wQ, [0, 1, 2]), this._pointerInput = (0, LQ.l)(this, oQ)
          }
          attachControl(QQ) {
            QQ = cQ.g.BackCompatCameraNoPreventDefault(arguments);
            const FQ = this.camera.Wx(),
              wQ = FQ.getInputElement();
            let LQ = 0,
              qQ = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = oQ => {
              const DQ = oQ.event,
                kQ = "touch" === DQ.pointerType;
              if (oQ.type !== uQ.e.POINTERMOVE && -1 === this.buttons.indexOf(DQ.button)) return;
              const vQ = DQ.target;
              if (this._altKey = DQ.altKey, this._ctrlKey = DQ.ctrlKey, this._metaKey = DQ.metaKey, this._shiftKey = DQ.shiftKey, this._buttonsPressed = DQ.buttons, FQ.isPointerLock) {
                const QQ = DQ.movementX,
                  FQ = DQ.movementY;
                this.onTouch(null, QQ, FQ), this._pointA = null, this._pointB = null
              } else {
                if (oQ.type !== uQ.e.POINTERDOWN && oQ.type !== uQ.e.POINTERDOUBLETAP && kQ && this._pointA?.pointerId !== DQ.pointerId && this._pointB?.pointerId !== DQ.pointerId) return;
                if (oQ.type !== uQ.e.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !kQ)
                  if (oQ.type === uQ.e.POINTERDOUBLETAP) this.onDoubleTap(DQ.pointerType, DQ);
                  else if (oQ.type !== uQ.e.POINTERUP || this._currentMousePointerIdDown !== DQ.pointerId && !kQ) {
                  if (oQ.type === uQ.e.POINTERMOVE)
                    if (QQ || DQ.preventDefault(), this._pointA && null === this._pointB) {
                      const QQ = DQ.clientX - this._pointA.x,
                        FQ = DQ.clientY - this._pointA.y;
                      this._pointA.x = DQ.clientX, this._pointA.y = DQ.clientY, this.onTouch(this._pointA, QQ, FQ)
                    } else if (this._pointA && this._pointB) {
                    const QQ = this._pointA.pointerId === DQ.pointerId ? this._pointA : this._pointB;
                    QQ.x = DQ.clientX, QQ.y = DQ.clientY;
                    const FQ = this._pointA.x - this._pointB.x,
                      wQ = this._pointA.y - this._pointB.y,
                      kQ = FQ * FQ + wQ * wQ,
                      vQ = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: DQ.pointerId,
                        type: oQ.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, LQ, kQ, qQ, vQ), qQ = vQ, LQ = kQ
                  }
                } else {
                  try {
                    vQ?.releasePointerCapture(DQ.pointerId)
                  } catch (mQ) {}
                  kQ || (this._pointB = null), FQ._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == DQ.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == DQ.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== LQ || qQ) && (this.onMultiTouch(this._pointA, this._pointB, LQ, 0, qQ, null), LQ = 0, qQ = null), this._currentMousePointerIdDown = -1, this.onButtonUp(DQ), QQ || DQ.preventDefault()
                } else {
                  try {
                    vQ?.setPointerCapture(DQ.pointerId)
                  } catch (mQ) {}
                  if (null === this._pointA) this._pointA = {
                    x: DQ.clientX,
                    y: DQ.clientY,
                    pointerId: DQ.pointerId,
                    type: DQ.pointerType,
                    button: DQ.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: DQ.clientX,
                      y: DQ.clientY,
                      pointerId: DQ.pointerId,
                      type: DQ.pointerType,
                      button: DQ.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || kQ || (this._currentMousePointerIdDown = DQ.pointerId), this.onButtonDown(DQ), QQ || (DQ.preventDefault(), wQ && wQ.focus())
                }
              }
            }, this._observer = this.camera.iN()._inputManager._addCameraPointerObserver(this._pointerInput, uQ.e.POINTERDOWN | uQ.e.POINTERUP | uQ.e.POINTERMOVE | uQ.e.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, LQ = 0, qQ = null, this.onLostFocus()
            }, this._contextMenuBind = QQ => this.onContextMenu(QQ), wQ && wQ.addEventListener("contextmenu", this._contextMenuBind, !1);
            const oQ = this.camera.iN().Wx().getHostWindow();
            oQ && cQ.g.RegisterTopRootEvents(oQ, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const QQ = this.camera.iN().Wx().getHostWindow();
              QQ && cQ.g.UnregisterTopRootEvents(QQ, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.iN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const QQ = this.camera.iN().Wx().getInputElement();
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
          onDoubleTap(QQ, FQ) {}
          onTouch(QQ, FQ, wQ) {}
          onMultiTouch(QQ, FQ, wQ, LQ, qQ, oQ) {}
          onContextMenu(QQ) {
            QQ.preventDefault()
          }
          onButtonDown(QQ) {}
          onButtonUp(QQ) {}
          onLostFocus() {}
        }, (() => {
          const DQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          FQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: QQ => "buttons" in QQ,
              get: QQ => QQ.buttons,
              set: (QQ, FQ) => {
                QQ.buttons = FQ
              }
            },
            metadata: DQ
          }, wQ, oQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DQ
          })
        })(), QQ
      })(),
      SQ = (() => {
        var QQ;
        let FQ, wQ, oQ, DQ = CQ,
          kQ = [],
          vQ = [],
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        return QQ = class extends DQ {
          constructor() {
            super(...arguments), this.pinchZoom = (0, LQ.l)(this, kQ, !0), this.multiTouchPanning = ((0, LQ.l)(this, vQ), (0, LQ.l)(this, mQ, !0)), this.multiTouchPanAndZoom = ((0, LQ.l)(this, uQ), (0, LQ.l)(this, HQ, !0)), this._isPinching = ((0, LQ.l)(this, bQ), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(QQ, FQ) {}
          _computeMultiTouchPanning(QQ, FQ) {}
          onMultiTouch(QQ, FQ, wQ, LQ, qQ, oQ) {
            0 === wQ && null === qQ || 0 === LQ && null === oQ || (this.multiTouchPanAndZoom ? (this._computePinchZoom(wQ, LQ), this._computeMultiTouchPanning(qQ, oQ)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(wQ, LQ), this._isPinching = !0) : this._computeMultiTouchPanning(qQ, oQ)) : this.multiTouchPanning ? this._computeMultiTouchPanning(qQ, oQ) : this.pinchZoom && this._computePinchZoom(wQ, LQ))
          }
          onButtonUp(QQ) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(DQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchZoom" in QQ,
              get: QQ => QQ.pinchZoom,
              set: (QQ, FQ) => {
                QQ.pinchZoom = FQ
              }
            },
            metadata: YQ
          }, kQ, vQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: QQ => "multiTouchPanning" in QQ,
              get: QQ => QQ.multiTouchPanning,
              set: (QQ, FQ) => {
                QQ.multiTouchPanning = FQ
              }
            },
            metadata: YQ
          }, mQ, uQ), (0, LQ.i)(null, null, oQ, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "multiTouchPanAndZoom" in QQ,
              get: QQ => QQ.multiTouchPanAndZoom,
              set: (QQ, FQ) => {
                QQ.multiTouchPanAndZoom = FQ
              }
            },
            metadata: YQ
          }, HQ, bQ), YQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YQ
          })
        })(), QQ
      })(),
      iQ = (() => {
        var QQ;
        let FQ, wQ, oQ, DQ, kQ, vQ, mQ, uQ = SQ,
          HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [],
          GQ = [],
          pQ = [],
          cQ = [],
          CQ = [],
          iQ = [],
          WQ = [];
        return QQ = class extends uQ {
          constructor() {
            super(...arguments), this.buttons = (0, LQ.l)(this, HQ, [0, 1, 2]), this.angularSensibilityX = ((0, LQ.l)(this, bQ), (0, LQ.l)(this, YQ, 1e3)), this.angularSensibilityY = ((0, LQ.l)(this, xQ), (0, LQ.l)(this, AQ, 1e3)), this.pinchPrecision = ((0, LQ.l)(this, tQ), (0, LQ.l)(this, eQ, 12)), this.pinchDeltaPercentage = ((0, LQ.l)(this, MQ), (0, LQ.l)(this, GQ, 0)), this.useNaturalPinchZoom = ((0, LQ.l)(this, pQ), (0, LQ.l)(this, cQ, !1)), this.panningSensibility = ((0, LQ.l)(this, CQ), (0, LQ.l)(this, iQ, 1e3)), this.pinchInwards = ((0, LQ.l)(this, WQ), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(QQ, FQ) {
            if (QQ && FQ) {
              const wQ = FQ.x - QQ.x,
                LQ = FQ.y - QQ.y,
                qQ = this.camera.movement.input.getEntry("pointer", "pan"),
                oQ = qQ?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== oQ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -wQ * oQ, this.camera.movement.panAccumulatedPixels.y += LQ * oQ)
            }
          }
          _computePinchZoom(FQ, wQ) {
            const LQ = this.camera.radius || QQ.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = LQ * Math.sqrt(FQ) / Math.sqrt(wQ);
            else if (this.pinchDeltaPercentage) {
              const QQ = .001 * (wQ - FQ) * LQ * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += QQ
            } else {
              const QQ = (wQ - FQ) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += QQ
            }
          }
          onTouch(QQ, FQ, wQ) {
            const LQ = this._activeEntry ?? (this.camera.Wx().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (LQ)
              if ("pan" === LQ.interaction) {
                const QQ = LQ.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== QQ && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -FQ * QQ, this.camera.movement.panAccumulatedPixels.y += wQ * QQ)
              } else if ("rotate" === LQ.interaction) {
              const QQ = LQ.OE ?? LQ.sensitivity ?? 1 / this.angularSensibilityX,
                qQ = LQ.sE ?? LQ.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -FQ * QQ, this.camera.movement.rotationAccumulatedPixels.y += -wQ * qQ
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(QQ, FQ, wQ, LQ, qQ, oQ) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(LQ) - Math.sqrt(wQ)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(QQ, FQ, wQ, LQ, qQ, oQ)
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
          const SQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(uQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: QQ => "buttons" in QQ,
              get: QQ => QQ.buttons,
              set: (QQ, FQ) => {
                QQ.buttons = FQ
              }
            },
            metadata: SQ
          }, HQ, bQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "angularSensibilityX" in QQ,
              get: QQ => QQ.angularSensibilityX,
              set: (QQ, FQ) => {
                QQ.angularSensibilityX = FQ
              }
            },
            metadata: SQ
          }, YQ, xQ), (0, LQ.i)(null, null, oQ, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "angularSensibilityY" in QQ,
              get: QQ => QQ.angularSensibilityY,
              set: (QQ, FQ) => {
                QQ.angularSensibilityY = FQ
              }
            },
            metadata: SQ
          }, AQ, tQ), (0, LQ.i)(null, null, DQ, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchPrecision" in QQ,
              get: QQ => QQ.pinchPrecision,
              set: (QQ, FQ) => {
                QQ.pinchPrecision = FQ
              }
            },
            metadata: SQ
          }, eQ, MQ), (0, LQ.i)(null, null, kQ, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchDeltaPercentage" in QQ,
              get: QQ => QQ.pinchDeltaPercentage,
              set: (QQ, FQ) => {
                QQ.pinchDeltaPercentage = FQ
              }
            },
            metadata: SQ
          }, GQ, pQ), (0, LQ.i)(null, null, vQ, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useNaturalPinchZoom" in QQ,
              get: QQ => QQ.useNaturalPinchZoom,
              set: (QQ, FQ) => {
                QQ.useNaturalPinchZoom = FQ
              }
            },
            metadata: SQ
          }, cQ, CQ), (0, LQ.i)(null, null, mQ, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningSensibility" in QQ,
              get: QQ => QQ.panningSensibility,
              set: (QQ, FQ) => {
                QQ.panningSensibility = FQ
              }
            },
            metadata: SQ
          }, iQ, WQ), SQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SQ
          })
        })(), QQ.MinimumRadiusForPinch = .001, QQ
      })();
    pQ.c.ArcRotateCameraPointersInput = iQ;
    var WQ = wQ(39601);
    let RQ = (() => {
      var QQ;
      let FQ, wQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ = [],
        tQ = [],
        eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [];
      return QQ = class {
        constructor() {
          this.camera = (0, LQ.l)(this, AQ), this.keysUp = (0, LQ.l)(this, tQ, [38]), this.keysDown = ((0, LQ.l)(this, eQ), (0, LQ.l)(this, MQ, [40])), this.keysLeft = ((0, LQ.l)(this, GQ), (0, LQ.l)(this, pQ, [37])), this.keysRight = ((0, LQ.l)(this, CQ), (0, LQ.l)(this, SQ, [39])), this.keysReset = ((0, LQ.l)(this, iQ), (0, LQ.l)(this, RQ, [220])), this.keysZoomIn = ((0, LQ.l)(this, OQ), (0, LQ.l)(this, sQ, [187, 107])), this.keysZoomOut = ((0, LQ.l)(this, rQ), (0, LQ.l)(this, IQ, [189, 109])), this.panningSensibility = ((0, LQ.l)(this, UQ), (0, LQ.l)(this, NQ, 50)), this.zoomingSensibility = ((0, LQ.l)(this, TQ), (0, LQ.l)(this, KQ, 25)), this.angularSpeed = ((0, LQ.l)(this, zQ), (0, LQ.l)(this, lQ, .01)), this._useAltToZoom = ((0, LQ.l)(this, jQ), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new DQ.n, this._panDirection = new DQ.n
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
            FQ = QQ.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && FQ ? QQ.inputMap.splice(QQ.inputMap.indexOf(FQ), 1) : this._useAltToZoom && !FQ && QQ.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(QQ) {
          QQ = cQ.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.iN(), this._engine = this._scene.Wx(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((FQ => {
            const wQ = FQ.event;
            if (!wQ.metaKey)
              if (FQ.type === WQ.e.KEYDOWN) {
                if (this._ctrlPressed = wQ.ctrlKey, this._altPressed = wQ.altKey, -1 !== this.keysUp.indexOf(wQ.keyCode) || -1 !== this.keysDown.indexOf(wQ.keyCode) || -1 !== this.keysLeft.indexOf(wQ.keyCode) || -1 !== this.keysRight.indexOf(wQ.keyCode) || -1 !== this.keysReset.indexOf(wQ.keyCode) || -1 !== this.keysZoomIn.indexOf(wQ.keyCode) || -1 !== this.keysZoomOut.indexOf(wQ.keyCode)) {
                  -1 === this._keys.indexOf(wQ.keyCode) && this._keys.push(wQ.keyCode), wQ.preventDefault && (QQ || wQ.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(wQ.keyCode) || -1 !== this.keysDown.indexOf(wQ.keyCode) || -1 !== this.keysLeft.indexOf(wQ.keyCode) || -1 !== this.keysRight.indexOf(wQ.keyCode) || -1 !== this.keysReset.indexOf(wQ.keyCode) || -1 !== this.keysZoomIn.indexOf(wQ.keyCode) || -1 !== this.keysZoomOut.indexOf(wQ.keyCode)) {
              const FQ = this._keys.indexOf(wQ.keyCode);
              FQ >= 0 && this._keys.splice(FQ, 1), wQ.preventDefault && (QQ || wQ.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const QQ = this.camera,
              FQ = QQ.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const wQ = this._rotateDirection.set(0, 0),
              LQ = this._panDirection.set(0, 0);
            let qQ = 0,
              oQ = 0;
            for (let DQ = 0; DQ < this._keys.length; DQ++) {
              const kQ = this._keys[DQ];
              if (this._keyboardConditions.key = kQ, -1 === this.keysReset.indexOf(kQ)) {
                const QQ = FQ.resolveInteraction("keyboard", this._keyboardConditions);
                if (QQ)
                  if ("pan" === QQ.interaction) oQ = Math.max(oQ, QQ.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(kQ) ? LQ.x -= 1 : -1 !== this.keysRight.indexOf(kQ) ? LQ.x += 1 : -1 !== this.keysUp.indexOf(kQ) ? LQ.y += 1 : -1 !== this.keysDown.indexOf(kQ) && (LQ.y -= 1);
                  else if ("zoom" === QQ.interaction) {
                  const wQ = QQ.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(kQ) || -1 !== this.keysZoomIn.indexOf(kQ) ? FQ.handlers.zoom(wQ) : -1 === this.keysDown.indexOf(kQ) && -1 === this.keysZoomOut.indexOf(kQ) || FQ.handlers.zoom(-wQ)
                } else "rotate" === QQ.interaction && (qQ = Math.max(qQ, QQ.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(kQ) ? wQ.x -= 1 : -1 !== this.keysRight.indexOf(kQ) ? wQ.x += 1 : -1 !== this.keysUp.indexOf(kQ) ? wQ.y -= 1 : -1 !== this.keysDown.indexOf(kQ) && (wQ.y += 1))
              } - 1 !== this.keysReset.indexOf(kQ) && QQ.useInputToRestoreState && QQ.restoreState()
            }
            0 === wQ.x && 0 === wQ.y || (wQ.normalize().scaleInPlace(qQ), FQ.handlers.rotate(wQ.x, wQ.y)), 0 === LQ.x && 0 === LQ.y || (LQ.normalize().scaleInPlace(oQ), FQ.handlers.pan(LQ.x, LQ.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const DQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], YQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, xQ, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useAltToZoom" in QQ,
            get: QQ => QQ.useAltToZoom
          },
          metadata: DQ
        }, null, AQ), (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysUp" in QQ,
            get: QQ => QQ.keysUp,
            set: (QQ, FQ) => {
              QQ.keysUp = FQ
            }
          },
          metadata: DQ
        }, tQ, eQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysDown" in QQ,
            get: QQ => QQ.keysDown,
            set: (QQ, FQ) => {
              QQ.keysDown = FQ
            }
          },
          metadata: DQ
        }, MQ, GQ), (0, LQ.i)(null, null, oQ, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysLeft" in QQ,
            get: QQ => QQ.keysLeft,
            set: (QQ, FQ) => {
              QQ.keysLeft = FQ
            }
          },
          metadata: DQ
        }, pQ, CQ), (0, LQ.i)(null, null, kQ, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysRight" in QQ,
            get: QQ => QQ.keysRight,
            set: (QQ, FQ) => {
              QQ.keysRight = FQ
            }
          },
          metadata: DQ
        }, SQ, iQ), (0, LQ.i)(null, null, vQ, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysReset" in QQ,
            get: QQ => QQ.keysReset,
            set: (QQ, FQ) => {
              QQ.keysReset = FQ
            }
          },
          metadata: DQ
        }, RQ, OQ), (0, LQ.i)(null, null, mQ, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysZoomIn" in QQ,
            get: QQ => QQ.keysZoomIn,
            set: (QQ, FQ) => {
              QQ.keysZoomIn = FQ
            }
          },
          metadata: DQ
        }, sQ, rQ), (0, LQ.i)(null, null, uQ, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: QQ => "keysZoomOut" in QQ,
            get: QQ => QQ.keysZoomOut,
            set: (QQ, FQ) => {
              QQ.keysZoomOut = FQ
            }
          },
          metadata: DQ
        }, IQ, UQ), (0, LQ.i)(null, null, HQ, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "panningSensibility" in QQ,
            get: QQ => QQ.panningSensibility,
            set: (QQ, FQ) => {
              QQ.panningSensibility = FQ
            }
          },
          metadata: DQ
        }, NQ, TQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zoomingSensibility" in QQ,
            get: QQ => QQ.zoomingSensibility,
            set: (QQ, FQ) => {
              QQ.zoomingSensibility = FQ
            }
          },
          metadata: DQ
        }, KQ, zQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: QQ => "angularSpeed" in QQ,
            get: QQ => QQ.angularSpeed,
            set: (QQ, FQ) => {
              QQ.angularSpeed = FQ
            }
          },
          metadata: DQ
        }, lQ, jQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DQ
        })
      })(), QQ
    })();
    pQ.c.ArcRotateCameraKeyboardMoveInput = RQ;
    var OQ = wQ(37324),
      sQ = wQ(39610);
    let rQ = (() => {
      var QQ;
      let FQ, wQ, oQ, vQ = [],
        mQ = [],
        HQ = [],
        YQ = [],
        xQ = [],
        AQ = [];
      return QQ = class {
        constructor() {
          this.wheelPrecision = (0, LQ.l)(this, vQ, 3), this.zoomToMouseLocation = ((0, LQ.l)(this, mQ), (0, LQ.l)(this, HQ, !1)), this.wheelDeltaPercentage = ((0, LQ.l)(this, YQ), (0, LQ.l)(this, xQ, 0)), this.customComputeDeltaFromMouseWheel = ((0, LQ.l)(this, AQ), null), this._viewOffset = new DQ.p(0, 0, 0), this._globalOffset = new DQ.p(0, 0, 0), this._inertialPanning = DQ.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(QQ, FQ) {
          let wQ;
          const LQ = .01 * QQ * this.wheelDeltaPercentage * FQ;
          return wQ = QQ > 0 ? LQ / (1 + this.wheelDeltaPercentage) : LQ * (1 + this.wheelDeltaPercentage), wQ
        }
        attachControl(QQ) {
          QQ = cQ.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = FQ => {
            if (FQ.type !== uQ.e.POINTERWHEEL) return;
            const wQ = FQ.event;
            let LQ;
            const qQ = wQ.deltaMode === sQ.c.DOM_DELTA_LINE ? 40 : 1,
              oQ = -wQ.deltaY * qQ;
            if (this.customComputeDeltaFromMouseWheel) LQ = this.customComputeDeltaFromMouseWheel(oQ, this, wQ);
            else if (this.wheelDeltaPercentage) {
              if (LQ = this._computeDeltaFromMouseWheelLegacyEvent(oQ, this.camera.radius), LQ > 0) {
                const QQ = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let FQ = this.camera.radius,
                  wQ = QQ + LQ;
                for (let LQ = 0; LQ < 20 && !(FQ <= wQ) && !(Math.abs(wQ * this.camera.inertia) < .001); LQ++) FQ -= wQ, wQ *= this.camera.inertia;
                FQ = (0, kQ.Clamp)(FQ, 0, Number.MAX_VALUE), LQ = this._computeDeltaFromMouseWheelLegacyEvent(oQ, FQ)
              }
            } else {
              const QQ = this.camera.movement.input.getEntry("wheel", "zoom");
              LQ = oQ * (QQ?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            LQ && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(LQ)) : this.camera.movement.zoomAccumulatedPixels += LQ), wQ.preventDefault && (QQ || wQ.preventDefault())
          }, this._observer = this.camera.iN()._inputManager._addCameraPointerObserver(this._wheel, uQ.e.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.K3(0)
        }
        detachControl() {
          this._observer && (this.camera.iN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const QQ = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(QQ.inertialAlphaOffset) + Math.abs(QQ.inertialBetaOffset) + Math.abs(QQ.inertialRadiusOffset)) {
            this._updateHitPlane(), QQ.target.addInPlace(this._inertialPanning), QQ.radius -= this._zoomToMouseRadiusOffset;
            const FQ = QQ.movement.getFrameIndependentDecay(QQ.inertia);
            this._inertialPanning.scaleInPlace(FQ), this._zoomToMouseRadiusOffset *= FQ, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < bQ.b && (this._zoomToMouseRadiusOffset = 0)
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
            FQ = QQ.target.subtract(QQ.position);
          this._hitPlane = OQ.d.FromPositionAndNormal(QQ.target, FQ)
        }
        _getPosition() {
          const QQ = this.camera,
            FQ = QQ.iN(),
            wQ = FQ.createPickingRay(FQ.pointerX, FQ.pointerY, DQ.c.Identity(), QQ, !1);
          0 === QQ.targetScreenOffset.x && 0 === QQ.targetScreenOffset.y || (this._viewOffset.set(QQ.targetScreenOffset.x, QQ.targetScreenOffset.y, 0), QQ.getViewMatrix().invertToRef(QQ._cameraTransformMatrix), this._globalOffset = DQ.p.TransformNormal(this._viewOffset, QQ._cameraTransformMatrix), wQ.origin.addInPlace(this._globalOffset));
          let LQ = 0;
          return this._hitPlane && (LQ = wQ.intersectsPlane(this._hitPlane) ?? 0), wQ.origin.addInPlace(wQ.direction.scaleInPlace(LQ))
        }
        _zoomToMouse(QQ) {
          const FQ = this.camera,
            wQ = 1 - FQ.inertia,
            LQ = FQ.movement.getFrameIndependentInputScale(FQ.inertia);
          if (FQ.lowerRadiusLimit) {
            const qQ = FQ.lowerRadiusLimit ?? 0;
            FQ.radius - (this._zoomToMouseRadiusOffset + QQ * LQ) / wQ < qQ && (QQ = ((FQ.radius - qQ) * wQ - this._zoomToMouseRadiusOffset) / LQ)
          }
          if (FQ.upperRadiusLimit) {
            const qQ = FQ.upperRadiusLimit ?? 0;
            FQ.radius - (this._zoomToMouseRadiusOffset + QQ * LQ) / wQ > qQ && (QQ = ((FQ.radius - qQ) * wQ - this._zoomToMouseRadiusOffset) / LQ)
          }
          const qQ = QQ / wQ / FQ.radius,
            oQ = this._getPosition(),
            kQ = DQ.k.Ox[6];
          oQ.subtractToRef(FQ.target, kQ), kQ.scaleInPlace(qQ), kQ.scaleInPlace(wQ), kQ.scaleInPlace(LQ), this._inertialPanning.addInPlace(kQ), this._zoomToMouseRadiusOffset += QQ * LQ
        }
        _zeroIfClose(QQ) {
          Math.abs(QQ.x) < bQ.b && (QQ.x = 0), Math.abs(QQ.y) < bQ.b && (QQ.y = 0), Math.abs(QQ.z) < bQ.b && (QQ.z = 0)
        }
      }, (() => {
        const DQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelPrecision" in QQ,
            get: QQ => QQ.wheelPrecision,
            set: (QQ, FQ) => {
              QQ.wheelPrecision = FQ
            }
          },
          metadata: DQ
        }, vQ, mQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zoomToMouseLocation" in QQ,
            get: QQ => QQ.zoomToMouseLocation,
            set: (QQ, FQ) => {
              QQ.zoomToMouseLocation = FQ
            }
          },
          metadata: DQ
        }, HQ, YQ), (0, LQ.i)(null, null, oQ, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: QQ => "wheelDeltaPercentage" in QQ,
            get: QQ => QQ.wheelDeltaPercentage,
            set: (QQ, FQ) => {
              QQ.wheelDeltaPercentage = FQ
            }
          },
          metadata: DQ
        }, xQ, AQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DQ
        })
      })(), QQ
    })();
    pQ.c.ArcRotateCameraMouseWheelInput = rQ;
    var IQ, UQ, NQ = wQ(39277);
    class TQ extends pQ.e {
      constructor(QQ) {
        super(QQ)
      }
      addMouseWheel() {
        return this.add(new rQ), this
      }
      addPointers() {
        return this.add(new iQ), this
      }
      addKeyboard() {
        return this.add(new RQ), this
      }
    }(IQ = TQ.prototype).addVRDeviceOrientation ?? (IQ.addVRDeviceOrientation = (0, NQ.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (UQ = TQ.prototype).addGamepad ?? (UQ.addGamepad = (0, NQ.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var KQ = wQ(36741),
      zQ = wQ(39664),
      lQ = wQ(39667);
    class jQ extends zQ.b {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ), this.input = new lQ.c({
          pan: (QQ, FQ) => {
            this.panAccumulatedPixels.x += QQ, this.panAccumulatedPixels.y += FQ
          },
          rotate: (QQ, FQ) => {
            this.rotationAccumulatedPixels.x += QQ, this.rotationAccumulatedPixels.y += FQ
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

    function aQ(QQ, FQ) {
      return isNaN(QQ) ? FQ : QQ
    }
    let XQ = (() => {
        var QQ;
        let FQ, wQ, vQ, uQ, HQ, xQ, AQ, pQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, KQ, zQ, lQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ = GQ.g,
          gQ = [],
          PQ = [],
          ZQ = [],
          yQ = [],
          BQ = [],
          dQ = [],
          QF = [],
          FF = [],
          wF = [],
          LF = [],
          qF = [],
          oF = [],
          DF = [],
          kF = [],
          vF = [],
          mF = [],
          uF = [],
          HF = [],
          bF = [],
          YF = [],
          xF = [],
          AF = [],
          tF = [],
          eF = [],
          MF = [],
          GF = [],
          pF = [],
          cF = [],
          CF = [],
          SF = [],
          iF = [],
          WF = [],
          RF = [],
          OF = [],
          sF = [],
          rF = [],
          IF = [],
          UF = [],
          NF = [],
          TF = [],
          KF = [],
          zF = [],
          lF = [],
          jF = [],
          aF = [],
          XF = [],
          fF = [];
        return QQ = class extends nQ {
          get target() {
            return this.K8
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
            this._upToYMatrix || (this._yToUpMatrix = new DQ.c, this._upToYMatrix = new DQ.c, this._upVector = DQ.p.Zero()), QQ.normalize(), this._upVector.Qs(QQ), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            DQ.c.RotationAlignToRef(DQ.p.UpReadOnly, this._upVector, this._yToUpMatrix), DQ.c.RotationAlignToRef(this._upVector, DQ.p.UpReadOnly, this._upToYMatrix)
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
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.angularSensibilityX = QQ)
          }
          get angularSensibilityY() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.angularSensibilityY : 0
          }
          set angularSensibilityY(QQ) {
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.angularSensibilityY = QQ)
          }
          get pinchPrecision() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.pinchPrecision : 0
          }
          set pinchPrecision(QQ) {
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.pinchPrecision = QQ)
          }
          get pinchDeltaPercentage() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(QQ) {
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.pinchDeltaPercentage = QQ)
          }
          get useNaturalPinchZoom() {
            const QQ = this.inputs.attached.pointers;
            return !!QQ && QQ.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(QQ) {
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.useNaturalPinchZoom = QQ)
          }
          get panningSensibility() {
            const QQ = this.inputs.attached.pointers;
            return QQ ? QQ.panningSensibility : 0
          }
          set panningSensibility(QQ) {
            const FQ = this.inputs.attached.pointers;
            FQ && (FQ.panningSensibility = QQ)
          }
          get keysUp() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysUp : []
          }
          set keysUp(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysUp = QQ)
          }
          get keysDown() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysDown : []
          }
          set keysDown(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysDown = QQ)
          }
          get keysLeft() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysLeft : []
          }
          set keysLeft(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysLeft = QQ)
          }
          get keysRight() {
            const QQ = this.inputs.attached.keyboard;
            return QQ ? QQ.keysRight : []
          }
          set keysRight(QQ) {
            const FQ = this.inputs.attached.keyboard;
            FQ && (FQ.keysRight = QQ)
          }
          get wheelPrecision() {
            const QQ = this.inputs.attached.mousewheel;
            return QQ ? QQ.wheelPrecision : 0
          }
          set wheelPrecision(QQ) {
            const FQ = this.inputs.attached.mousewheel;
            FQ && (FQ.wheelPrecision = QQ)
          }
          get zoomToMouseLocation() {
            const QQ = this.inputs.attached.mousewheel;
            return !!QQ && QQ.zoomToMouseLocation
          }
          set zoomToMouseLocation(QQ) {
            const FQ = this.inputs.attached.mousewheel;
            FQ && (FQ.zoomToMouseLocation = QQ)
          }
          get wheelDeltaPercentage() {
            const QQ = this.inputs.attached.mousewheel;
            return QQ ? QQ.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(QQ) {
            const FQ = this.inputs.attached.mousewheel;
            FQ && (FQ.wheelDeltaPercentage = QQ)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(QQ) {
            this._useCtrlForPanningInternal = QQ;
            const FQ = this.movement.input,
              wQ = FQ.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !QQ && wQ ? FQ.inputMap.splice(FQ.inputMap.indexOf(wQ), 1) : QQ && !wQ && FQ.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const LQ = FQ.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !QQ && LQ ? FQ.inputMap.splice(FQ.inputMap.indexOf(LQ), 1) : QQ && !LQ && FQ.addEntry({
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
            const FQ = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            FQ && (FQ.button = QQ)
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
            QQ !== this.useBouncingBehavior && (QQ ? (this._bouncingBehavior = new tQ, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(QQ) {
            QQ !== this.useFramingBehavior && (QQ ? (this._framingBehavior = new eQ, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(QQ) {
            QQ !== this.useAutoRotationBehavior && (QQ ? (this._autoRotationBehavior = new YQ, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(QQ, FQ, wQ, qQ, kQ, vQ) {
            var mQ;
            let uQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(QQ, DQ.p.Zero(), vQ, uQ), mQ = this, this.alpha = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, void 0)), this.beta = ((0, LQ.l)(this, ZQ), (0, LQ.l)(this, yQ, void 0)), this.radius = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, void 0)), this.overrideCloneAlphaBetaRadius = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, void 0)), this.K8 = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, void 0)), this._targetHost = ((0, LQ.l)(this, qF), (0, LQ.l)(this, oF, void 0)), this._upToYMatrix = (0, LQ.l)(this, DF), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, LQ.l)(this, kF, null), this.upperAlphaLimit = ((0, LQ.l)(this, vF), (0, LQ.l)(this, mF, null)), this.lowerBetaLimit = ((0, LQ.l)(this, uF), (0, LQ.l)(this, HF, .01)), this.upperBetaLimit = ((0, LQ.l)(this, bF), (0, LQ.l)(this, YF, Math.PI - .01)), this.lowerRadiusLimit = ((0, LQ.l)(this, xF), (0, LQ.l)(this, AF, null)), this.upperRadiusLimit = ((0, LQ.l)(this, tF), (0, LQ.l)(this, eF, null)), this.lowerTargetYLimit = ((0, LQ.l)(this, MF), (0, LQ.l)(this, GF, -1 / 0)), this.inertialPanningX = ((0, LQ.l)(this, pF), (0, LQ.l)(this, cF, 0)), this.inertialPanningY = ((0, LQ.l)(this, CF), (0, LQ.l)(this, SF, 0)), this.pinchToPanMaxDistance = ((0, LQ.l)(this, iF), (0, LQ.l)(this, WF, 20)), this.panningDistanceLimit = ((0, LQ.l)(this, RF), (0, LQ.l)(this, OF, null)), this.panningOriginTarget = ((0, LQ.l)(this, sF), (0, LQ.l)(this, rF, DQ.p.Zero())), this._panningInertia = ((0, LQ.l)(this, IF), .9), this._inertia = .9, this.zoomOnFactor = (0, LQ.l)(this, UF, 1), this.targetScreenOffset = ((0, LQ.l)(this, NF), (0, LQ.l)(this, TF, DQ.n.Zero())), this.allowUpsideDown = ((0, LQ.l)(this, KF), (0, LQ.l)(this, zF, !0)), this.useInputToRestoreState = ((0, LQ.l)(this, lF), (0, LQ.l)(this, jF, !0)), this.restoreStateInterpolationFactor = ((0, LQ.l)(this, aF), (0, LQ.l)(this, XF, 0)), this._currentInterpolationFactor = ((0, LQ.l)(this, fF), 0), this._viewMatrix = new DQ.c, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new DQ.p(1, 1, 0), this._transformedDirection = new DQ.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new oQ.e, this.checkCollisions = !1, this.collisionRadius = new DQ.p(.5, .5, .5), this._previousPosition = DQ.p.Zero(), this._collisionVelocity = DQ.p.Zero(), this._newPosition = DQ.p.Zero(), this._computationVector = DQ.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new DQ.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new DQ.n(NaN, NaN), this._onCollisionPositionChange = function(QQ, FQ) {
              let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              wQ ? (mQ.setPosition(FQ), mQ.ob && mQ.ob(wQ)) : mQ._previousPosition.Qs(mQ._position);
              const LQ = Math.cos(mQ.alpha),
                qQ = Math.sin(mQ.alpha),
                oQ = Math.cos(mQ.beta);
              let DQ = Math.sin(mQ.beta);
              0 === DQ && (DQ = 1e-4);
              const kQ = mQ._getTargetPosition();
              mQ._computationVector.vQQ(mQ.radius * LQ * DQ, mQ.radius * oQ, mQ.radius * qQ * DQ), kQ.addToRef(mQ._computationVector, mQ._newPosition), mQ._position.Qs(mQ._newPosition);
              let vQ = mQ.upVector;
              mQ.allowUpsideDown && mQ.beta < 0 && (vQ = vQ.clone(), vQ = vQ.mo()), mQ._computeViewMatrix(mQ._position, kQ, vQ), mQ._viewMatrix.addAtIndex(12, mQ.targetScreenOffset.x), mQ._viewMatrix.addAtIndex(13, mQ.targetScreenOffset.y), mQ._collisionTriggered = !1
            }, this.K8 = DQ.p.Zero(), kQ && this.setTarget(kQ), this.alpha = FQ, this.beta = wQ, this.radius = qQ, this.getViewMatrix(), this.inputs = new TQ(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new jQ(this.iN(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.K8 = new DQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = DQ.n.Zero()
          }
          _updateCache(QQ) {
            QQ || super._updateCache(), this._cache.K8.Qs(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Qs(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const QQ = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? QQ.addToRef(this._targetBoundingCenter, this.K8) : this.K8.Qs(QQ)
            }
            const QQ = this._getLockedTargetPosition();
            return QQ || this.K8
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > bQ.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              oQ = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != oQ ? this._currentInterpolationFactor = oQ : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = aQ(QQ, this._goalAlpha), this._goalBeta = aQ(FQ, this._goalBeta), this._goalRadius = aQ(wQ, this._goalRadius), this._goalTarget.set(aQ(LQ.x, this._goalTarget.x), aQ(LQ.y, this._goalTarget.y), aQ(LQ.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(aQ(qQ.x, this._goalTargetScreenOffset.x), aQ(qQ.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, kQ.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, kQ.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, kQ.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, kQ.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.K8.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(QQ, FQ) {
            let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const qQ = arguments;
            FQ = cQ.g.BackCompatCameraNoPreventDefault(qQ), this._useCtrlForPanning = wQ, this._panningMouseButton = LQ, "boolean" === typeof qQ[0] && (qQ.length > 1 && (this._useCtrlForPanning = qQ[1]), qQ.length > 2 && (this._panningMouseButton = qQ[2])), this.inputs.attachElement(FQ), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(QQ, FQ, wQ) {
            const LQ = this.invertRotation ? -1 : 1;
            let qQ = QQ * this._calculateHandednessMultiplier();
            this.beta < 0 && (qQ *= -1), this.alpha += qQ * LQ, this.beta += FQ * LQ, this.radius -= wQ
          }
          _applyPanDelta(QQ, FQ) {
            const wQ = DQ.k.Ox[0].vQQ(QQ, FQ, FQ);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), wQ.multiplyInPlace(this.panningAxis), DQ.p.TransformNormalToRef(wQ, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const QQ = this.upVector,
                FQ = DQ.p.CrossToRef(this._transformedDirection, QQ, this._transformedDirection);
              DQ.p.CrossToRef(QQ, FQ, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.K8);
                DQ.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.K8.Qs(this._transformedDirection)
              } else {
                if (this.parent) {
                  const QQ = DQ.k.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(QQ), QQ.transposeToRef(QQ), DQ.p.TransformCoordinatesToRef(this._transformedDirection, QQ, this._transformedDirection)
                }
                this.K8.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let QQ = !1;
            this.movement.computeCurrentFrameDeltas();
            const FQ = this.movement.rotationDeltaCurrentFrame,
              wQ = this.movement.zoomDeltaCurrentFrame,
              LQ = this.movement.panDeltaCurrentFrame;
            if (0 === FQ.x && 0 === FQ.y && 0 === wQ && 0 === LQ.x && 0 === LQ.y || (QQ = !0, 0 === FQ.x && 0 === FQ.y && 0 === wQ || this._applyRotationAndZoomDelta(FQ.x, FQ.y, wQ), 0 === LQ.x && 0 === LQ.y || this._applyPanDelta(LQ.x, LQ.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), QQ = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const FQ = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < FQ && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < FQ && (this.inertialPanningY = 0), QQ = !0
            }
            if (QQ) this.stopInterpolation();
            else if (this._isInterpolating) {
              let QQ = !1;
              const FQ = this._scene.Wx().getDeltaTime() / 1e3,
                wQ = 1 - Math.pow(2, -FQ / this._currentInterpolationFactor),
                LQ = aQ(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const FQ = DQ.k.Ox[0].set(aQ(this._goalTarget.x, this.K8.x), aQ(this._goalTarget.y, this.K8.y), aQ(this._goalTarget.z, this.K8.z));
                DQ.p.LerpToRef(this.target, FQ, wQ, this.K8), 10 * DQ.p.Distance(this.target, FQ) / LQ < bQ.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Qs(FQ), this.setTarget(this.target, !1, !0, !0)) : QQ = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const FQ = DQ.e.RotationAlphaBetaGammaToRef(aQ(this._goalAlpha, this.alpha), aQ(this._goalBeta, this.beta), 0, DQ.k.Quaternion[0]),
                  LQ = DQ.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, DQ.k.Quaternion[1]),
                  qQ = DQ.e.SlerpToRef(LQ, FQ, wQ, DQ.k.Quaternion[2]);
                qQ.normalize();
                const oQ = qQ.toAlphaBetaGammaToRef(DQ.k.Ox[0]);
                if (this.alpha = oQ.x, this.beta = oQ.y, qQ.isApprox(FQ, bQ.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const QQ = FQ.toAlphaBetaGammaToRef(DQ.k.Ox[0]);
                  this.alpha = QQ.x, this.beta = QQ.y
                } else QQ = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (LQ - this.radius) * wQ, Math.abs(LQ / this.radius - 1) < bQ.b ? (this._goalRadius = NaN, this.radius = LQ) : QQ = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const FQ = DQ.k.Vector2[0].set(aQ(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), aQ(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                DQ.n.LerpToRef(this.targetScreenOffset, FQ, wQ, this.targetScreenOffset), DQ.n.Distance(this.targetScreenOffset, FQ) < bQ.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Qs(FQ)) : QQ = !0
              }
              this._isInterpolating = QQ
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || DQ.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const QQ = this.alpha;
            var FQ, wQ;
            this.alpha = function(QQ) {
              let FQ = Math.PI / 2;
              return 0 === QQ.x && 0 === QQ.z || (FQ = Math.acos(QQ.x / Math.sqrt(Math.pow(QQ.x, 2) + Math.pow(QQ.z, 2)))), QQ.z < 0 && (FQ = 2 * Math.PI - FQ), FQ
            }(this._computationVector), this.beta = (FQ = this._computationVector.y, wQ = this.radius, Math.acos(FQ / wQ));
            const LQ = Math.round((QQ - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * LQ * Math.PI, this._checkLimits()
          }
          setPosition(QQ) {
            this._position.equals(QQ) || (this._position.Qs(QQ), this.rebuildAnglesAndRadius())
          }
          setTarget(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (LQ = this.overrideCloneAlphaBetaRadius ?? LQ, QQ.computeWorldMatrix) FQ && QQ.sK ? this._targetBoundingCenter = QQ.sK().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, QQ.computeWorldMatrix(), this._targetHost = QQ, this.K8 = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const FQ = QQ,
                LQ = this._getTargetPosition();
              if (LQ && !wQ && LQ.equals(FQ)) return;
              this._targetHost = null, this.K8 = FQ, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            LQ || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const QQ = Math.cos(this.alpha),
              FQ = Math.sin(this.alpha),
              wQ = Math.cos(this.beta);
            let LQ = Math.sin(this.beta);
            0 === LQ && (LQ = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const qQ = this._getTargetPosition();
            if (this._computationVector.vQQ(this.radius * QQ * LQ, this.radius * wQ, this.radius * FQ * LQ), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || DQ.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), qQ.addToRef(this._computationVector, this._newPosition), this.iN().collisionsEnabled && this.checkCollisions) {
              const QQ = this.iN().collisionCoordinator;
              this._collider || (this._collider = QQ.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, QQ.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Qs(this._newPosition);
              let QQ = this.upVector;
              this.allowUpsideDown && LQ < 0 && (QQ = QQ.mo()), this._computeViewMatrix(this._position, qQ, QQ), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Qs(qQ), this._viewMatrix
          }
          zoomOn(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            QQ = QQ || this.iN().meshes;
            const wQ = mQ.c.MinMax(QQ);
            let LQ = this._calculateLowerRadiusFromModelBoundingSphere(wQ.min, wQ.max);
            if (LQ = Math.max(Math.min(LQ, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = LQ * this.zoomOnFactor, this.mode === MQ.e.ORTHOGRAPHIC_CAMERA) {
              const QQ = this.iN().Wx().getAspectRatio(this),
                FQ = LQ * this.zoomOnFactor / 2;
              this.orthoLeft = -FQ * QQ, this.orthoRight = FQ * QQ, this.orthoBottom = -FQ, this.orthoTop = FQ
            }
            this.focusOn({
              min: wQ.min,
              max: wQ.max,
              distance: LQ
            }, FQ)
          }
          focusOn(QQ) {
            let FQ, wQ, LQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === QQ.min) {
              const LQ = QQ || this.iN().meshes;
              FQ = mQ.c.MinMax(LQ), wQ = DQ.p.Distance(FQ.min, FQ.max)
            } else {
              FQ = QQ, wQ = QQ.distance
            }
            this.K8 = mQ.c.Center(FQ), LQ || (this.maxZ = 2 * wQ)
          }
          createRigCamera(FQ, wQ) {
            let LQ = 0;
            switch (this.cameraRigMode) {
              case MQ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case MQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case MQ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case MQ.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case MQ.e.RIG_MODE_VR:
                LQ = this._cameraRigParams.stereoHalfAngle * (0 === wQ ? 1 : -1);
                break;
              case MQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                LQ = this._cameraRigParams.stereoHalfAngle * (0 === wQ ? -1 : 1)
            }
            const qQ = new QQ(FQ, this.alpha + LQ, this.beta, this.radius, this.K8, this.iN());
            return qQ._cameraRigParams = {}, qQ.isRigCamera = !0, qQ.rigParent = this, qQ.upVector = this.upVector, qQ.mode = this.mode, qQ.orthoLeft = this.orthoLeft, qQ.orthoRight = this.orthoRight, qQ.orthoBottom = this.orthoBottom, qQ.orthoTop = this.orthoTop, qQ
          }
          _updateRigCameras() {
            const QQ = this._rigCameras[0],
              FQ = this._rigCameras[1];
            switch (QQ.beta = FQ.beta = this.beta, this.cameraRigMode) {
              case MQ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case MQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case MQ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case MQ.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case MQ.e.RIG_MODE_VR:
                QQ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, FQ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case MQ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                QQ.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, FQ.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const LQ = DQ.p.Distance(QQ, FQ),
              qQ = this.iN().Wx().getAspectRatio(this),
              oQ = Math.tan(this.fov / 2),
              kQ = oQ * qQ,
              vQ = .5 * LQ * wQ,
              mQ = vQ * Math.sqrt(1 + 1 / (kQ * kQ)),
              uQ = vQ * Math.sqrt(1 + 1 / (oQ * oQ));
            return Math.max(mQ, uQ)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(nQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.F)("target")], xQ = [(0, qQ.w)("targetHost")], AQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], WQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], NQ = [(0, qQ.I)()], KQ = [(0, qQ.I)()], zQ = [(0, qQ.F)()], lQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], fQ = [(0, qQ.I)()], VQ = [(0, qQ.C)()], hQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], EQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, AQ, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialAlphaOffset" in QQ,
              get: QQ => QQ.inertialAlphaOffset
            },
            metadata: oQ
          }, null, gQ), (0, LQ.i)(QQ, null, pQ, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialBetaOffset" in QQ,
              get: QQ => QQ.inertialBetaOffset
            },
            metadata: oQ
          }, null, gQ), (0, LQ.i)(QQ, null, CQ, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialRadiusOffset" in QQ,
              get: QQ => QQ.inertialRadiusOffset
            },
            metadata: oQ
          }, null, gQ), (0, LQ.i)(QQ, null, lQ, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningInertia" in QQ,
              get: QQ => QQ.panningInertia
            },
            metadata: oQ
          }, null, gQ), (0, LQ.i)(QQ, null, XQ, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: QQ => "zoomToMouseLocation" in QQ,
              get: QQ => QQ.zoomToMouseLocation
            },
            metadata: oQ
          }, null, gQ), (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alpha" in QQ,
              get: QQ => QQ.alpha,
              set: (QQ, FQ) => {
                QQ.alpha = FQ
              }
            },
            metadata: oQ
          }, PQ, ZQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: QQ => "beta" in QQ,
              get: QQ => QQ.beta,
              set: (QQ, FQ) => {
                QQ.beta = FQ
              }
            },
            metadata: oQ
          }, yQ, BQ), (0, LQ.i)(null, null, vQ, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "radius" in QQ,
              get: QQ => QQ.radius,
              set: (QQ, FQ) => {
                QQ.radius = FQ
              }
            },
            metadata: oQ
          }, dQ, QF), (0, LQ.i)(null, null, uQ, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: QQ => "overrideCloneAlphaBetaRadius" in QQ,
              get: QQ => QQ.overrideCloneAlphaBetaRadius,
              set: (QQ, FQ) => {
                QQ.overrideCloneAlphaBetaRadius = FQ
              }
            },
            metadata: oQ
          }, FF, wF), (0, LQ.i)(null, null, HQ, {
            kind: "field",
            name: "K8",
            static: !1,
            private: !1,
            access: {
              has: QQ => "K8" in QQ,
              get: QQ => QQ.K8,
              set: (QQ, FQ) => {
                QQ.K8 = FQ
              }
            },
            metadata: oQ
          }, LF, qF), (0, LQ.i)(null, null, xQ, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_targetHost" in QQ,
              get: QQ => QQ._targetHost,
              set: (QQ, FQ) => {
                QQ._targetHost = FQ
              }
            },
            metadata: oQ
          }, oF, DF), (0, LQ.i)(null, null, SQ, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerAlphaLimit" in QQ,
              get: QQ => QQ.lowerAlphaLimit,
              set: (QQ, FQ) => {
                QQ.lowerAlphaLimit = FQ
              }
            },
            metadata: oQ
          }, kF, vF), (0, LQ.i)(null, null, iQ, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperAlphaLimit" in QQ,
              get: QQ => QQ.upperAlphaLimit,
              set: (QQ, FQ) => {
                QQ.upperAlphaLimit = FQ
              }
            },
            metadata: oQ
          }, mF, uF), (0, LQ.i)(null, null, WQ, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerBetaLimit" in QQ,
              get: QQ => QQ.lowerBetaLimit,
              set: (QQ, FQ) => {
                QQ.lowerBetaLimit = FQ
              }
            },
            metadata: oQ
          }, HF, bF), (0, LQ.i)(null, null, RQ, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperBetaLimit" in QQ,
              get: QQ => QQ.upperBetaLimit,
              set: (QQ, FQ) => {
                QQ.upperBetaLimit = FQ
              }
            },
            metadata: oQ
          }, YF, xF), (0, LQ.i)(null, null, OQ, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerRadiusLimit" in QQ,
              get: QQ => QQ.lowerRadiusLimit,
              set: (QQ, FQ) => {
                QQ.lowerRadiusLimit = FQ
              }
            },
            metadata: oQ
          }, AF, tF), (0, LQ.i)(null, null, sQ, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "upperRadiusLimit" in QQ,
              get: QQ => QQ.upperRadiusLimit,
              set: (QQ, FQ) => {
                QQ.upperRadiusLimit = FQ
              }
            },
            metadata: oQ
          }, eF, MF), (0, LQ.i)(null, null, rQ, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lowerTargetYLimit" in QQ,
              get: QQ => QQ.lowerTargetYLimit,
              set: (QQ, FQ) => {
                QQ.lowerTargetYLimit = FQ
              }
            },
            metadata: oQ
          }, GF, pF), (0, LQ.i)(null, null, IQ, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialPanningX" in QQ,
              get: QQ => QQ.inertialPanningX,
              set: (QQ, FQ) => {
                QQ.inertialPanningX = FQ
              }
            },
            metadata: oQ
          }, cF, CF), (0, LQ.i)(null, null, UQ, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "inertialPanningY" in QQ,
              get: QQ => QQ.inertialPanningY,
              set: (QQ, FQ) => {
                QQ.inertialPanningY = FQ
              }
            },
            metadata: oQ
          }, SF, iF), (0, LQ.i)(null, null, NQ, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: QQ => "pinchToPanMaxDistance" in QQ,
              get: QQ => QQ.pinchToPanMaxDistance,
              set: (QQ, FQ) => {
                QQ.pinchToPanMaxDistance = FQ
              }
            },
            metadata: oQ
          }, WF, RF), (0, LQ.i)(null, null, KQ, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningDistanceLimit" in QQ,
              get: QQ => QQ.panningDistanceLimit,
              set: (QQ, FQ) => {
                QQ.panningDistanceLimit = FQ
              }
            },
            metadata: oQ
          }, OF, sF), (0, LQ.i)(null, null, zQ, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: QQ => "panningOriginTarget" in QQ,
              get: QQ => QQ.panningOriginTarget,
              set: (QQ, FQ) => {
                QQ.panningOriginTarget = FQ
              }
            },
            metadata: oQ
          }, rF, IF), (0, LQ.i)(null, null, fQ, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "zoomOnFactor" in QQ,
              get: QQ => QQ.zoomOnFactor,
              set: (QQ, FQ) => {
                QQ.zoomOnFactor = FQ
              }
            },
            metadata: oQ
          }, UF, NF), (0, LQ.i)(null, null, VQ, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: QQ => "targetScreenOffset" in QQ,
              get: QQ => QQ.targetScreenOffset,
              set: (QQ, FQ) => {
                QQ.targetScreenOffset = FQ
              }
            },
            metadata: oQ
          }, TF, KF), (0, LQ.i)(null, null, hQ, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: QQ => "allowUpsideDown" in QQ,
              get: QQ => QQ.allowUpsideDown,
              set: (QQ, FQ) => {
                QQ.allowUpsideDown = FQ
              }
            },
            metadata: oQ
          }, zF, lF), (0, LQ.i)(null, null, JQ, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useInputToRestoreState" in QQ,
              get: QQ => QQ.useInputToRestoreState,
              set: (QQ, FQ) => {
                QQ.useInputToRestoreState = FQ
              }
            },
            metadata: oQ
          }, jF, aF), (0, LQ.i)(null, null, EQ, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "restoreStateInterpolationFactor" in QQ,
              get: QQ => QQ.restoreStateInterpolationFactor,
              set: (QQ, FQ) => {
                QQ.restoreStateInterpolationFactor = FQ
              }
            },
            metadata: oQ
          }, XF, fF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      fQ = !1;
    fQ || (fQ = !0, vQ.c.AddNodeConstructor("ArcRotateCamera", ((QQ, FQ) => () => new XQ(QQ, 0, 0, 1, DQ.p.Zero(), FQ))), (0, KQ.e)("BABYLON.ArcRotateCamera", XQ))
  },
  39678: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.c
    });
    var LQ = wQ(39686);
    (0, LQ.e)()
  },
  39686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      e: () => bQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(36873),
      kQ = wQ(39690),
      vQ = wQ(39650),
      mQ = wQ(36741);
    let uQ = (() => {
        var QQ;
        let FQ, wQ, vQ = kQ.c,
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        return QQ = class extends vQ {
          constructor(QQ, FQ, wQ, qQ) {
            super(QQ, wQ, qQ), this.groundColor = (0, LQ.l)(this, mQ, new DQ.b(0, 0, 0)), this.direction = ((0, LQ.l)(this, uQ), (0, LQ.l)(this, HQ, void 0)), (0, LQ.l)(this, bQ), this.direction = FQ || oQ.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = oQ.p.Normalize(QQ.subtract(oQ.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wQ.x, wQ.y, wQ.z, 0, FQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), FQ), this
          }
          transferToNodeMaterialEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return QQ.setFloat3(FQ, wQ.x, wQ.y, wQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oQ.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kQ.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, FQ) {
            QQ["HEMILIGHT" + FQ] = !0
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(vQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.m)()], wQ = [(0, qQ.F)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, FQ) => {
                QQ.groundColor = FQ
              }
            },
            metadata: oQ
          }, mQ, uQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, FQ) => {
                QQ.direction = FQ
              }
            },
            metadata: oQ
          }, HQ, bQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      HQ = !1;

    function bQ() {
      HQ || (HQ = !0, vQ.c.AddNodeConstructor("Light_Type_3", ((QQ, FQ) => () => new uQ(QQ, oQ.p.Zero(), FQ))), (0, mQ.e)("BABYLON.HemisphericLight", uQ))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
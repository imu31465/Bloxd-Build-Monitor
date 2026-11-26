export const id = 283;
export const ids = [283];
export const modules = {
  42184: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => vU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37846),
      AU = zU(37819),
      FU = zU(37855),
      oU = zU(41314),
      DU = zU(41481),
      EU = zU(41271),
      YU = zU(41010),
      NU = zU(37825);
    class IU {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(UU) {
        this._zoomStopsAnimation = UU
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(UU) {
        this._idleRotationSpeed = UU
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(UU) {
        this._idleRotationWaitTime = UU
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(UU) {
        this._idleRotationSpinupTime = UU
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
      attach(UU) {
        this._attachedCamera = UU;
        const XU = this._attachedCamera.nS();
        this._onPrePointerObservableObserver = XU.onPrePointerObservable.add((UU => {
          UU.type !== EU.c.POINTERDOWN ? UU.type === EU.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const UU = YU.e.Now;
          let XU = 0;
          null != this._lastFrameTime && (XU = UU - this._lastFrameTime), this._lastFrameTime = UU, this._applyUserInteraction();
          const zU = UU - this._lastInteractionTime - this._idleRotationWaitTime,
            cU = Math.max(Math.min(zU / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * cU, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (XU / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const UU = this._attachedCamera.nS();
        this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(UU) {
        this._lastInteractionTime = UU ?? YU.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < NU.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let UU = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (UU = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? UU : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = YU.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    zU(42190);
    class pU {
      constructor() {
        this._easingMode = pU.EASINGMODE_EASEIN
      }
      setEasingMode(UU) {
        const XU = Math.min(Math.max(UU, 0), 2);
        this._easingMode = XU
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(UU) {
        throw new Error("You must implement this method")
      }
      ease(UU) {
        switch (this._easingMode) {
          case pU.EASINGMODE_EASEIN:
            return this.easeInCore(UU);
          case pU.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - UU)
        }
        return UU >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - UU))) + .5 : .5 * this.easeInCore(2 * UU)
      }
    }
    pU.EASINGMODE_EASEIN = 0, pU.EASINGMODE_EASEOUT = 1, pU.EASINGMODE_EASEINOUT = 2;
    var aU = zU(42195);
    class tU {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(UU) {
        if (this._autoTransitionRange === UU) return;
        this._autoTransitionRange = UU;
        const XU = this._attachedCamera;
        XU && (UU ? this._onMeshTargetChangedObserver = XU.onMeshTargetChangedObservable.add((UU => {
          if (UU && (UU.computeWorldMatrix(!0), UU.gM)) {
            const XU = UU.gM().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * XU, this.upperRadiusTransitionRange = .05 * XU
          }
        })) : this._onMeshTargetChangedObserver && XU.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(UU) {
        this._attachedCamera = UU, this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(UU) {
        return !!this._attachedCamera && (this._attachedCamera.radius === UU && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(UU) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (tU.EasingFunction.setEasingMode(tU.EasingMode), this._radiusBounceTransition = aU.b.CreateAnimation("radius", aU.b.ANIMATIONTYPE_FLOAT, 60, tU.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const XU = aU.b.TransitionTo("radius", this._attachedCamera.radius + UU, this._attachedCamera, this._attachedCamera.nS(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        XU && this._animatables.push(XU)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    tU.EasingFunction = new class extends pU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = UU
      }
      easeInCore(UU) {
        const XU = Math.max(0, this.amplitude);
        return Math.pow(UU, 3) - UU * XU * Math.sin(3.141592653589793 * UU)
      }
    }(.3), tU.EasingMode = pU.EASINGMODE_EASEOUT;
    class gU {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new QU.e, this._mode = gU.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(UU) {
        this._mode = UU
      }
      get mode() {
        return this._mode
      }
      set radiusScale(UU) {
        this._radiusScale = UU
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(UU) {
        this._positionScale = UU
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(UU) {
        this._defaultElevation = UU
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(UU) {
        this._elevationReturnTime = UU
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(UU) {
        this._elevationReturnWaitTime = UU
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(UU) {
        this._zoomStopsAnimation = UU
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(UU) {
        this._framingTime = UU
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(UU) {
        this._attachedCamera = UU;
        const XU = this._attachedCamera.nS();
        gU.EasingFunction.setEasingMode(gU.EasingMode), this._onPrePointerObservableObserver = XU.onPrePointerObservable.add((UU => {
          UU.type !== EU.c.POINTERDOWN ? UU.type === EU.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = UU.onMeshTargetChangedObservable.add((UU => {
          UU && UU.gM && this.zoomOnMesh(UU, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = UU.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const UU = this._attachedCamera.nS();
        this._onPrePointerObservableObserver && UU.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        UU.computeWorldMatrix(!0);
        const cU = UU.gM().boundingBox;
        this.zoomOnBoundingInfo(cU.minimumWorld, cU.maximumWorld, XU, zU)
      }
      zoomOnMeshHierarchy(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        UU.computeWorldMatrix(!0);
        const cU = UU.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(cU.min, cU.max, XU, zU)
      }
      zoomOnMeshesHierarchy(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const cU = new AU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          yU = new AU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let QU = 0; QU < UU.length; QU++) {
          const XU = UU[QU].getHierarchyBoundingVectors(!0);
          AU.q.CheckExtends(XU.min, cU, yU), AU.q.CheckExtends(XU.max, cU, yU)
        }
        this.zoomOnBoundingInfo(cU, yU, XU, zU)
      }
      zoomOnBoundingInfo(UU, XU) {
        let zU, cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const QU = UU.y,
          FU = QU + (XU.y - QU) * this._positionScale,
          oU = XU.subtract(UU).scale(.5);
        if (!isFinite(FU)) return !1;
        if (cU) zU = new AU.q(0, FU, 0);
        else {
          const XU = UU.add(oU);
          zU = new AU.q(XU.x, FU, XU.z)
        }
        this._vectorTransition || (this._vectorTransition = aU.b.CreateAnimation("target", aU.b.ANIMATIONTYPE_VECTOR3, 60, gU.EasingFunction)), this._betaIsAnimating = !0;
        let DU = aU.b.TransitionTo("target", zU, this._attachedCamera, this._attachedCamera.nS(), 60, this._vectorTransition, this._framingTime);
        DU && this._animatables.push(DU);
        let EU = 0;
        if (this._mode === gU.FitFrustumSidesMode) {
          const zU = this._calculateLowerRadiusFromModelBoundingSphere(UU, XU);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = oU.length() + this._attachedCamera.minZ), EU = zU
        } else this._mode === gU.IgnoreBoundsSizeMode && (EU = this._calculateLowerRadiusFromModelBoundingSphere(UU, XU), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const zU = XU.subtract(UU).length();
          this._attachedCamera.panningSensibility = 5e3 / zU, this._attachedCamera.wheelPrecision = 100 / EU
        }
        return this._radiusTransition || (this._radiusTransition = aU.b.CreateAnimation("radius", aU.b.ANIMATIONTYPE_FLOAT, 60, gU.EasingFunction)), DU = aU.b.TransitionTo("radius", EU, this._attachedCamera, this._attachedCamera.nS(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), yU && yU(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), DU && this._animatables.push(DU), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(UU, XU) {
        const zU = this._attachedCamera;
        if (!zU) return 0;
        let cU = zU._calculateLowerRadiusFromModelBoundingSphere(UU, XU, this._radiusScale);
        return zU.lowerRadiusLimit && this._mode === gU.IgnoreBoundsSizeMode && (cU = cU < zU.lowerRadiusLimit ? zU.lowerRadiusLimit : cU), zU.upperRadiusLimit && (cU = cU > zU.upperRadiusLimit ? zU.upperRadiusLimit : cU), cU
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const UU = YU.e.Now - this._lastInteractionTime,
          XU = .5 * Math.PI - this._defaultElevation,
          zU = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > zU && UU >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = aU.b.CreateAnimation("beta", aU.b.ANIMATIONTYPE_FLOAT, 60, gU.EasingFunction));
          const UU = aU.b.TransitionTo("beta", XU, this._attachedCamera, this._attachedCamera.nS(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          UU && this._animatables.push(UU)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = YU.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    gU.EasingFunction = new class extends pU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = UU
      }
      easeInCore(UU) {
        return this.exponent <= 0 ? UU : (Math.exp(this.exponent * UU) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, gU.EasingMode = pU.EASINGMODE_EASEINOUT, gU.IgnoreBoundsSizeMode = 0, gU.FitFrustumSidesMode = 1;
    var kU = zU(41309),
      GU = zU(41301),
      BU = zU(41323),
      ZU = zU(41205);
    let RU = (() => {
        var UU;
        let XU, zU = [],
          QU = [];
        return UU = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, cU.n)(this, zU, [0, 1, 2]), this._pointerInput = (0, cU.n)(this, QU)
          }
          attachControl(UU) {
            UU = ZU.j.BackCompatCameraNoPreventDefault(arguments);
            const XU = this.camera.qp(),
              zU = XU.getInputElement();
            let cU = 0,
              yU = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = QU => {
              const AU = QU.event,
                FU = "touch" === AU.pointerType;
              if (QU.type !== EU.c.POINTERMOVE && -1 === this.buttons.indexOf(AU.button)) return;
              const oU = AU.target;
              if (this._altKey = AU.altKey, this._ctrlKey = AU.ctrlKey, this._metaKey = AU.metaKey, this._shiftKey = AU.shiftKey, this._buttonsPressed = AU.buttons, XU.isPointerLock) {
                const UU = AU.movementX,
                  XU = AU.movementY;
                this.onTouch(null, UU, XU), this._pointA = null, this._pointB = null
              } else {
                if (QU.type !== EU.c.POINTERDOWN && QU.type !== EU.c.POINTERDOUBLETAP && FU && this._pointA?.pointerId !== AU.pointerId && this._pointB?.pointerId !== AU.pointerId) return;
                if (QU.type !== EU.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !FU)
                  if (QU.type === EU.c.POINTERDOUBLETAP) this.onDoubleTap(AU.pointerType, AU);
                  else if (QU.type !== EU.c.POINTERUP || this._currentMousePointerIdDown !== AU.pointerId && !FU) {
                  if (QU.type === EU.c.POINTERMOVE)
                    if (UU || AU.preventDefault(), this._pointA && null === this._pointB) {
                      const UU = AU.clientX - this._pointA.x,
                        XU = AU.clientY - this._pointA.y;
                      this._pointA.x = AU.clientX, this._pointA.y = AU.clientY, this.onTouch(this._pointA, UU, XU)
                    } else if (this._pointA && this._pointB) {
                    const UU = this._pointA.pointerId === AU.pointerId ? this._pointA : this._pointB;
                    UU.x = AU.clientX, UU.y = AU.clientY;
                    const XU = this._pointA.x - this._pointB.x,
                      zU = this._pointA.y - this._pointB.y,
                      FU = XU * XU + zU * zU,
                      oU = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: AU.pointerId,
                        type: QU.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, cU, FU, yU, oU), yU = oU, cU = FU
                  }
                } else {
                  try {
                    oU?.releasePointerCapture(AU.pointerId)
                  } catch (DU) {}
                  FU || (this._pointB = null), XU._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == AU.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == AU.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== cU || yU) && (this.onMultiTouch(this._pointA, this._pointB, cU, 0, yU, null), cU = 0, yU = null), this._currentMousePointerIdDown = -1, this.onButtonUp(AU), UU || AU.preventDefault()
                } else {
                  try {
                    oU?.setPointerCapture(AU.pointerId)
                  } catch (DU) {}
                  if (null === this._pointA) this._pointA = {
                    x: AU.clientX,
                    y: AU.clientY,
                    pointerId: AU.pointerId,
                    type: AU.pointerType,
                    button: AU.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: AU.clientX,
                      y: AU.clientY,
                      pointerId: AU.pointerId,
                      type: AU.pointerType,
                      button: AU.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || FU || (this._currentMousePointerIdDown = AU.pointerId), this.onButtonDown(AU), UU || (AU.preventDefault(), zU && zU.focus())
                }
              }
            }, this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._pointerInput, EU.c.POINTERDOWN | EU.c.POINTERUP | EU.c.POINTERMOVE | EU.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, cU = 0, yU = null, this.onLostFocus()
            }, this._contextMenuBind = UU => this.onContextMenu(UU), zU && zU.addEventListener("contextmenu", this._contextMenuBind, !1);
            const QU = this.camera.nS().qp().getHostWindow();
            QU && ZU.j.RegisterTopRootEvents(QU, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const UU = this.camera.nS().qp().getHostWindow();
              UU && ZU.j.UnregisterTopRootEvents(UU, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const UU = this.camera.nS().qp().getInputElement();
                UU && UU.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(UU, XU) {}
          onTouch(UU, XU, zU) {}
          onMultiTouch(UU, XU, zU, cU, yU, QU) {}
          onContextMenu(UU) {
            UU.preventDefault()
          }
          onButtonDown(UU) {}
          onButtonUp(UU) {}
          onLostFocus() {}
        }, (() => {
          const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: UU => "buttons" in UU,
              get: UU => UU.buttons,
              set: (UU, XU) => {
                UU.buttons = XU
              }
            },
            metadata: AU
          }, zU, QU), AU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AU
          })
        })(), UU
      })(),
      PU = (() => {
        var UU;
        let XU, zU, QU, AU = RU,
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        return UU = class extends AU {
          constructor() {
            super(...arguments), this.pinchZoom = (0, cU.n)(this, FU, !0), this.multiTouchPanning = ((0, cU.n)(this, oU), (0, cU.n)(this, DU, !0)), this.multiTouchPanAndZoom = ((0, cU.n)(this, EU), (0, cU.n)(this, YU, !0)), this._isPinching = ((0, cU.n)(this, NU), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(UU, XU) {}
          _computeMultiTouchPanning(UU, XU) {}
          onMultiTouch(UU, XU, zU, cU, yU, QU) {
            0 === zU && null === yU || 0 === cU && null === QU || (this.multiTouchPanAndZoom ? (this._computePinchZoom(zU, cU), this._computeMultiTouchPanning(yU, QU)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(zU, cU), this._isPinching = !0) : this._computeMultiTouchPanning(yU, QU)) : this.multiTouchPanning ? this._computeMultiTouchPanning(yU, QU) : this.pinchZoom && this._computePinchZoom(zU, cU))
          }
          onButtonUp(UU) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(AU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchZoom" in UU,
              get: UU => UU.pinchZoom,
              set: (UU, XU) => {
                UU.pinchZoom = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: UU => "multiTouchPanning" in UU,
              get: UU => UU.multiTouchPanning,
              set: (UU, XU) => {
                UU.multiTouchPanning = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, cU.j)(null, null, QU, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "multiTouchPanAndZoom" in UU,
              get: UU => UU.multiTouchPanAndZoom,
              set: (UU, XU) => {
                UU.multiTouchPanAndZoom = XU
              }
            },
            metadata: IU
          }, YU, NU), IU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          })
        })(), UU
      })(),
      WU = (() => {
        var UU;
        let XU, zU, QU, AU, FU, oU, DU, EU = PU,
          YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [],
          gU = [],
          kU = [],
          GU = [],
          BU = [],
          ZU = [],
          RU = [],
          WU = [],
          dU = [];
        return UU = class extends EU {
          constructor() {
            super(...arguments), this.buttons = (0, cU.n)(this, YU, [0, 1, 2]), this.angularSensibilityX = ((0, cU.n)(this, NU), (0, cU.n)(this, IU, 1e3)), this.angularSensibilityY = ((0, cU.n)(this, pU), (0, cU.n)(this, aU, 1e3)), this.pinchPrecision = ((0, cU.n)(this, tU), (0, cU.n)(this, gU, 12)), this.pinchDeltaPercentage = ((0, cU.n)(this, kU), (0, cU.n)(this, GU, 0)), this.useNaturalPinchZoom = ((0, cU.n)(this, BU), (0, cU.n)(this, ZU, !1)), this.panningSensibility = ((0, cU.n)(this, RU), (0, cU.n)(this, WU, 1e3)), this.pinchInwards = ((0, cU.n)(this, dU), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(UU, XU) {
            if (UU && XU) {
              const zU = XU.x - UU.x,
                cU = XU.y - UU.y,
                yU = this.camera.movement.input.getEntry("pointer", "pan"),
                QU = yU?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== QU && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zU * QU, this.camera.movement.panAccumulatedPixels.y += cU * QU)
            }
          }
          _computePinchZoom(XU, zU) {
            const cU = this.camera.radius || UU.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = cU * Math.sqrt(XU) / Math.sqrt(zU);
            else if (this.pinchDeltaPercentage) {
              const UU = .001 * (zU - XU) * cU * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += UU
            } else {
              const UU = (zU - XU) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += UU
            }
          }
          onTouch(UU, XU, zU) {
            const cU = this._activeEntry ?? (this.camera.qp().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (cU)
              if ("pan" === cU.interaction) {
                const UU = cU.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== UU && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -XU * UU, this.camera.movement.panAccumulatedPixels.y += zU * UU)
              } else if ("rotate" === cU.interaction) {
              const UU = cU.iK ?? cU.sensitivity ?? 1 / this.angularSensibilityX,
                yU = cU.VK ?? cU.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -XU * UU, this.camera.movement.rotationAccumulatedPixels.y += -zU * yU
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(UU, XU, zU, cU, yU, QU) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(cU) - Math.sqrt(zU)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(UU, XU, zU, cU, yU, QU)
          }
          onButtonDown(UU) {
            this._pointerConditions.button = UU.button, this._pointerModifiers.ctrl = UU.ctrlKey, this._pointerModifiers.alt = UU.altKey, this._pointerModifiers.shift = UU.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(UU)
          }
          onButtonUp(UU) {
            this._activeEntry = null, super.onButtonUp(UU)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(EU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: UU => "buttons" in UU,
              get: UU => UU.buttons,
              set: (UU, XU) => {
                UU.buttons = XU
              }
            },
            metadata: PU
          }, YU, NU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: UU => "angularSensibilityX" in UU,
              get: UU => UU.angularSensibilityX,
              set: (UU, XU) => {
                UU.angularSensibilityX = XU
              }
            },
            metadata: PU
          }, IU, pU), (0, cU.j)(null, null, QU, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: UU => "angularSensibilityY" in UU,
              get: UU => UU.angularSensibilityY,
              set: (UU, XU) => {
                UU.angularSensibilityY = XU
              }
            },
            metadata: PU
          }, aU, tU), (0, cU.j)(null, null, AU, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchPrecision" in UU,
              get: UU => UU.pinchPrecision,
              set: (UU, XU) => {
                UU.pinchPrecision = XU
              }
            },
            metadata: PU
          }, gU, kU), (0, cU.j)(null, null, FU, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchDeltaPercentage" in UU,
              get: UU => UU.pinchDeltaPercentage,
              set: (UU, XU) => {
                UU.pinchDeltaPercentage = XU
              }
            },
            metadata: PU
          }, GU, BU), (0, cU.j)(null, null, oU, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: UU => "useNaturalPinchZoom" in UU,
              get: UU => UU.useNaturalPinchZoom,
              set: (UU, XU) => {
                UU.useNaturalPinchZoom = XU
              }
            },
            metadata: PU
          }, ZU, RU), (0, cU.j)(null, null, DU, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningSensibility" in UU,
              get: UU => UU.panningSensibility,
              set: (UU, XU) => {
                UU.panningSensibility = XU
              }
            },
            metadata: PU
          }, WU, dU), PU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PU
          })
        })(), UU.MinimumRadiusForPinch = .001, UU
      })();
    BU.d.ArcRotateCameraPointersInput = WU;
    var dU = zU(41278);
    let LU = (() => {
      var UU;
      let XU, zU, QU, FU, oU, DU, EU, YU, NU, IU, pU, aU = [],
        tU = [],
        gU = [],
        kU = [],
        GU = [],
        BU = [],
        RU = [],
        PU = [],
        WU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [];
      return UU = class {
        constructor() {
          this.camera = (0, cU.n)(this, aU), this.keysUp = (0, cU.n)(this, tU, [38]), this.keysDown = ((0, cU.n)(this, gU), (0, cU.n)(this, kU, [40])), this.keysLeft = ((0, cU.n)(this, GU), (0, cU.n)(this, BU, [37])), this.keysRight = ((0, cU.n)(this, RU), (0, cU.n)(this, PU, [39])), this.keysReset = ((0, cU.n)(this, WU), (0, cU.n)(this, LU, [220])), this.keysZoomIn = ((0, cU.n)(this, eU), (0, cU.n)(this, CU, [187, 107])), this.keysZoomOut = ((0, cU.n)(this, wU), (0, cU.n)(this, qU, [189, 109])), this.panningSensibility = ((0, cU.n)(this, OU), (0, cU.n)(this, SU, 50)), this.zoomingSensibility = ((0, cU.n)(this, rU), (0, cU.n)(this, uU, 25)), this.angularSpeed = ((0, cU.n)(this, fU), (0, cU.n)(this, iU, .01)), this._useAltToZoom = ((0, cU.n)(this, HU), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new AU.m, this._panDirection = new AU.m
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(UU) {
          this._useAltToZoom = UU, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const UU = this.camera.movement.input,
            XU = UU.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && XU ? UU.inputMap.splice(UU.inputMap.indexOf(XU), 1) : this._useAltToZoom && !XU && UU.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(UU) {
          UU = ZU.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.nS(), this._engine = this._scene.qp(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((XU => {
            const zU = XU.event;
            if (!zU.metaKey)
              if (XU.type === dU.c.KEYDOWN) {
                if (this._ctrlPressed = zU.ctrlKey, this._altPressed = zU.altKey, -1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysReset.indexOf(zU.keyCode) || -1 !== this.keysZoomIn.indexOf(zU.keyCode) || -1 !== this.keysZoomOut.indexOf(zU.keyCode)) {
                  -1 === this._keys.indexOf(zU.keyCode) && this._keys.push(zU.keyCode), zU.preventDefault && (UU || zU.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysReset.indexOf(zU.keyCode) || -1 !== this.keysZoomIn.indexOf(zU.keyCode) || -1 !== this.keysZoomOut.indexOf(zU.keyCode)) {
              const XU = this._keys.indexOf(zU.keyCode);
              XU >= 0 && this._keys.splice(XU, 1), zU.preventDefault && (UU || zU.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const UU = this.camera,
              XU = UU.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const zU = this._rotateDirection.set(0, 0),
              cU = this._panDirection.set(0, 0);
            let yU = 0,
              QU = 0;
            for (let AU = 0; AU < this._keys.length; AU++) {
              const FU = this._keys[AU];
              if (this._keyboardConditions.key = FU, -1 === this.keysReset.indexOf(FU)) {
                const UU = XU.resolveInteraction("keyboard", this._keyboardConditions);
                if (UU)
                  if ("pan" === UU.interaction) QU = Math.max(QU, UU.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(FU) ? cU.x -= 1 : -1 !== this.keysRight.indexOf(FU) ? cU.x += 1 : -1 !== this.keysUp.indexOf(FU) ? cU.y += 1 : -1 !== this.keysDown.indexOf(FU) && (cU.y -= 1);
                  else if ("zoom" === UU.interaction) {
                  const zU = UU.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(FU) || -1 !== this.keysZoomIn.indexOf(FU) ? XU.handlers.zoom(zU) : -1 === this.keysDown.indexOf(FU) && -1 === this.keysZoomOut.indexOf(FU) || XU.handlers.zoom(-zU)
                } else "rotate" === UU.interaction && (yU = Math.max(yU, UU.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(FU) ? zU.x -= 1 : -1 !== this.keysRight.indexOf(FU) ? zU.x += 1 : -1 !== this.keysUp.indexOf(FU) ? zU.y -= 1 : -1 !== this.keysDown.indexOf(FU) && (zU.y += 1))
              } - 1 !== this.keysReset.indexOf(FU) && UU.useInputToRestoreState && UU.restoreState()
            }
            0 === zU.x && 0 === zU.y || (zU.normalize().scaleInPlace(yU), XU.handlers.rotate(zU.x, zU.y)), 0 === cU.x && 0 === cU.y || (cU.normalize().scaleInPlace(QU), XU.handlers.pan(cU.x, cU.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], (0, cU.j)(UU, null, pU, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAltToZoom" in UU,
            get: UU => UU.useAltToZoom
          },
          metadata: AU
        }, null, aU), (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUp" in UU,
            get: UU => UU.keysUp,
            set: (UU, XU) => {
              UU.keysUp = XU
            }
          },
          metadata: AU
        }, tU, gU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDown" in UU,
            get: UU => UU.keysDown,
            set: (UU, XU) => {
              UU.keysDown = XU
            }
          },
          metadata: AU
        }, kU, GU), (0, cU.j)(null, null, QU, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysLeft" in UU,
            get: UU => UU.keysLeft,
            set: (UU, XU) => {
              UU.keysLeft = XU
            }
          },
          metadata: AU
        }, BU, RU), (0, cU.j)(null, null, FU, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRight" in UU,
            get: UU => UU.keysRight,
            set: (UU, XU) => {
              UU.keysRight = XU
            }
          },
          metadata: AU
        }, PU, WU), (0, cU.j)(null, null, oU, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysReset" in UU,
            get: UU => UU.keysReset,
            set: (UU, XU) => {
              UU.keysReset = XU
            }
          },
          metadata: AU
        }, LU, eU), (0, cU.j)(null, null, DU, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysZoomIn" in UU,
            get: UU => UU.keysZoomIn,
            set: (UU, XU) => {
              UU.keysZoomIn = XU
            }
          },
          metadata: AU
        }, CU, wU), (0, cU.j)(null, null, EU, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysZoomOut" in UU,
            get: UU => UU.keysZoomOut,
            set: (UU, XU) => {
              UU.keysZoomOut = XU
            }
          },
          metadata: AU
        }, qU, OU), (0, cU.j)(null, null, YU, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "panningSensibility" in UU,
            get: UU => UU.panningSensibility,
            set: (UU, XU) => {
              UU.panningSensibility = XU
            }
          },
          metadata: AU
        }, SU, rU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "zoomingSensibility" in UU,
            get: UU => UU.zoomingSensibility,
            set: (UU, XU) => {
              UU.zoomingSensibility = XU
            }
          },
          metadata: AU
        }, uU, fU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: UU => "angularSpeed" in UU,
            get: UU => UU.angularSpeed,
            set: (UU, XU) => {
              UU.angularSpeed = XU
            }
          },
          metadata: AU
        }, iU, HU), AU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AU
        })
      })(), UU
    })();
    BU.d.ArcRotateCameraKeyboardMoveInput = LU;
    var eU = zU(38505),
      CU = zU(41283);
    let wU = (() => {
      var UU;
      let XU, zU, QU, oU = [],
        DU = [],
        YU = [],
        IU = [],
        pU = [],
        aU = [];
      return UU = class {
        constructor() {
          this.wheelPrecision = (0, cU.n)(this, oU, 3), this.zoomToMouseLocation = ((0, cU.n)(this, DU), (0, cU.n)(this, YU, !1)), this.wheelDeltaPercentage = ((0, cU.n)(this, IU), (0, cU.n)(this, pU, 0)), this.customComputeDeltaFromMouseWheel = ((0, cU.n)(this, aU), null), this._viewOffset = new AU.q(0, 0, 0), this._globalOffset = new AU.q(0, 0, 0), this._inertialPanning = AU.q.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(UU, XU) {
          let zU;
          const cU = .01 * UU * this.wheelDeltaPercentage * XU;
          return zU = UU > 0 ? cU / (1 + this.wheelDeltaPercentage) : cU * (1 + this.wheelDeltaPercentage), zU
        }
        attachControl(UU) {
          UU = ZU.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = XU => {
            if (XU.type !== EU.c.POINTERWHEEL) return;
            const zU = XU.event;
            let cU;
            const yU = zU.deltaMode === CU.b.DOM_DELTA_LINE ? 40 : 1,
              QU = -zU.deltaY * yU;
            if (this.customComputeDeltaFromMouseWheel) cU = this.customComputeDeltaFromMouseWheel(QU, this, zU);
            else if (this.wheelDeltaPercentage) {
              if (cU = this._computeDeltaFromMouseWheelLegacyEvent(QU, this.camera.radius), cU > 0) {
                const UU = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let XU = this.camera.radius,
                  zU = UU + cU;
                for (let cU = 0; cU < 20 && !(XU <= zU) && !(Math.abs(zU * this.camera.inertia) < .001); cU++) XU -= zU, zU *= this.camera.inertia;
                XU = (0, FU.Clamp)(XU, 0, Number.MAX_VALUE), cU = this._computeDeltaFromMouseWheelLegacyEvent(QU, XU)
              }
            } else {
              const UU = this.camera.movement.input.getEntry("wheel", "zoom");
              cU = QU * (UU?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            cU && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(cU)) : this.camera.movement.zoomAccumulatedPixels += cU), zU.preventDefault && (UU || zU.preventDefault())
          }, this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._wheel, EU.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.IUU(0)
        }
        detachControl() {
          this._observer && (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const UU = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(UU.inertialAlphaOffset) + Math.abs(UU.inertialBetaOffset) + Math.abs(UU.inertialRadiusOffset)) {
            this._updateHitPlane(), UU.target.addInPlace(this._inertialPanning), UU.radius -= this._zoomToMouseRadiusOffset;
            const XU = UU.movement.getFrameIndependentDecay(UU.inertia);
            this._inertialPanning.scaleInPlace(XU), this._zoomToMouseRadiusOffset *= XU, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < NU.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const UU = this.camera,
            XU = UU.target.subtract(UU.position);
          this._hitPlane = eU.d.FromPositionAndNormal(UU.target, XU)
        }
        _getPosition() {
          const UU = this.camera,
            XU = UU.nS(),
            zU = XU.createPickingRay(XU.pointerX, XU.pointerY, AU.e.Identity(), UU, !1);
          0 === UU.targetScreenOffset.x && 0 === UU.targetScreenOffset.y || (this._viewOffset.set(UU.targetScreenOffset.x, UU.targetScreenOffset.y, 0), UU.getViewMatrix().invertToRef(UU._cameraTransformMatrix), this._globalOffset = AU.q.TransformNormal(this._viewOffset, UU._cameraTransformMatrix), zU.origin.addInPlace(this._globalOffset));
          let cU = 0;
          return this._hitPlane && (cU = zU.intersectsPlane(this._hitPlane) ?? 0), zU.origin.addInPlace(zU.direction.scaleInPlace(cU))
        }
        _zoomToMouse(UU) {
          const XU = this.camera,
            zU = 1 - XU.inertia,
            cU = XU.movement.getFrameIndependentInputScale(XU.inertia);
          if (XU.lowerRadiusLimit) {
            const yU = XU.lowerRadiusLimit ?? 0;
            XU.radius - (this._zoomToMouseRadiusOffset + UU * cU) / zU < yU && (UU = ((XU.radius - yU) * zU - this._zoomToMouseRadiusOffset) / cU)
          }
          if (XU.upperRadiusLimit) {
            const yU = XU.upperRadiusLimit ?? 0;
            XU.radius - (this._zoomToMouseRadiusOffset + UU * cU) / zU > yU && (UU = ((XU.radius - yU) * zU - this._zoomToMouseRadiusOffset) / cU)
          }
          const yU = UU / zU / XU.radius,
            QU = this._getPosition(),
            FU = AU.l.Sp[6];
          QU.subtractToRef(XU.target, FU), FU.scaleInPlace(yU), FU.scaleInPlace(zU), FU.scaleInPlace(cU), this._inertialPanning.addInPlace(FU), this._zoomToMouseRadiusOffset += UU * cU
        }
        _zeroIfClose(UU) {
          Math.abs(UU.x) < NU.c && (UU.x = 0), Math.abs(UU.y) < NU.c && (UU.y = 0), Math.abs(UU.z) < NU.c && (UU.z = 0)
        }
      }, (() => {
        const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecision" in UU,
            get: UU => UU.wheelPrecision,
            set: (UU, XU) => {
              UU.wheelPrecision = XU
            }
          },
          metadata: AU
        }, oU, DU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: UU => "zoomToMouseLocation" in UU,
            get: UU => UU.zoomToMouseLocation,
            set: (UU, XU) => {
              UU.zoomToMouseLocation = XU
            }
          },
          metadata: AU
        }, YU, IU), (0, cU.j)(null, null, QU, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelDeltaPercentage" in UU,
            get: UU => UU.wheelDeltaPercentage,
            set: (UU, XU) => {
              UU.wheelDeltaPercentage = XU
            }
          },
          metadata: AU
        }, pU, aU), AU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AU
        })
      })(), UU
    })();
    BU.d.ArcRotateCameraMouseWheelInput = wU;
    var qU, OU, SU = zU(40989);
    class rU extends BU.h {
      constructor(UU) {
        super(UU)
      }
      addMouseWheel() {
        return this.add(new wU), this
      }
      addPointers() {
        return this.add(new WU), this
      }
      addKeyboard() {
        return this.add(new LU), this
      }
    }(qU = rU.prototype).addVRDeviceOrientation ?? (qU.addVRDeviceOrientation = (0, SU.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (OU = rU.prototype).addGamepad ?? (OU.addGamepad = (0, SU.k)("ArcRotateCameraInputsManager", "addGamepad"));
    var uU = zU(37863),
      fU = zU(41319),
      iU = zU(41321);
    class HU extends fU.d {
      constructor(UU, XU, zU) {
        super(UU, XU, zU), this.input = new iU.d({
          pan: (UU, XU) => {
            this.panAccumulatedPixels.x += UU, this.panAccumulatedPixels.y += XU
          },
          rotate: (UU, XU) => {
            this.rotationAccumulatedPixels.x += UU, this.rotationAccumulatedPixels.y += XU
          },
          zoom: UU => {
            this.zoomAccumulatedPixels += UU
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

    function MU(UU, XU) {
      return isNaN(UU) ? XU : UU
    }
    let vU = (() => {
        var UU;
        let XU, zU, oU, EU, YU, pU, aU, BU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, uU, fU, iU, vU, VU, sU, nU, mU, lU, xU = GU.i,
          JU = [],
          jU = [],
          KU = [],
          bU = [],
          TU = [],
          hU = [],
          UX = [],
          XX = [],
          zX = [],
          cX = [],
          yX = [],
          QX = [],
          AX = [],
          FX = [],
          oX = [],
          DX = [],
          EX = [],
          YX = [],
          NX = [],
          IX = [],
          pX = [],
          aX = [],
          tX = [],
          gX = [],
          kX = [],
          GX = [],
          BX = [],
          ZX = [],
          RX = [],
          PX = [],
          WX = [],
          dX = [],
          LX = [],
          eX = [],
          CX = [],
          wX = [],
          qX = [],
          OX = [],
          SX = [],
          rX = [],
          uX = [],
          fX = [],
          iX = [],
          HX = [],
          MX = [],
          vX = [],
          VX = [];
        return UU = class extends xU {
          get target() {
            return this.eY
          }
          set target(UU) {
            this.setTarget(UU)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(UU) {
            UU && this.setTarget(UU)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(UU) {
            this.setPosition(UU)
          }
          set upVector(UU) {
            this._upToYMatrix || (this._yToUpMatrix = new AU.e, this._upToYMatrix = new AU.e, this._upVector = AU.q.Zero()), UU.normalize(), this._upVector.YL(UU), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            AU.e.RotationAlignToRef(AU.q.UpReadOnly, this._upVector, this._yToUpMatrix), AU.e.RotationAlignToRef(this._upVector, AU.q.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const UU = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialAlphaOffset(UU) {
            this._inertialAlphaOffset = UU, 0 === UU && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const UU = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialBetaOffset(UU) {
            this._inertialBetaOffset = UU, 0 === UU && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const UU = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(UU) < this._rotationEpsilon ? 0 : UU
          }
          set inertialRadiusOffset(UU) {
            this._inertialRadiusOffset = UU, 0 === UU && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(UU) {
            this._panningInertia = UU, this.movement && (this.movement.panInertia = UU)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(UU) {
            this._inertia = UU, this.movement && (this.movement.rotationInertia = UU, this.movement.zoomInertia = UU)
          }
          get angularSensibilityX() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.angularSensibilityX : 0
          }
          set angularSensibilityX(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.angularSensibilityX = UU)
          }
          get angularSensibilityY() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.angularSensibilityY : 0
          }
          set angularSensibilityY(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.angularSensibilityY = UU)
          }
          get pinchPrecision() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.pinchPrecision : 0
          }
          set pinchPrecision(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.pinchPrecision = UU)
          }
          get pinchDeltaPercentage() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.pinchDeltaPercentage = UU)
          }
          get useNaturalPinchZoom() {
            const UU = this.inputs.attached.pointers;
            return !!UU && UU.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.useNaturalPinchZoom = UU)
          }
          get panningSensibility() {
            const UU = this.inputs.attached.pointers;
            return UU ? UU.panningSensibility : 0
          }
          set panningSensibility(UU) {
            const XU = this.inputs.attached.pointers;
            XU && (XU.panningSensibility = UU)
          }
          get keysUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUp : []
          }
          set keysUp(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysUp = UU)
          }
          get keysDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDown : []
          }
          set keysDown(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysDown = UU)
          }
          get keysLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysLeft : []
          }
          set keysLeft(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysLeft = UU)
          }
          get keysRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRight : []
          }
          set keysRight(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRight = UU)
          }
          get wheelPrecision() {
            const UU = this.inputs.attached.mousewheel;
            return UU ? UU.wheelPrecision : 0
          }
          set wheelPrecision(UU) {
            const XU = this.inputs.attached.mousewheel;
            XU && (XU.wheelPrecision = UU)
          }
          get zoomToMouseLocation() {
            const UU = this.inputs.attached.mousewheel;
            return !!UU && UU.zoomToMouseLocation
          }
          set zoomToMouseLocation(UU) {
            const XU = this.inputs.attached.mousewheel;
            XU && (XU.zoomToMouseLocation = UU)
          }
          get wheelDeltaPercentage() {
            const UU = this.inputs.attached.mousewheel;
            return UU ? UU.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(UU) {
            const XU = this.inputs.attached.mousewheel;
            XU && (XU.wheelDeltaPercentage = UU)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(UU) {
            this._useCtrlForPanningInternal = UU;
            const XU = this.movement.input,
              zU = XU.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !UU && zU ? XU.inputMap.splice(XU.inputMap.indexOf(zU), 1) : UU && !zU && XU.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const cU = XU.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !UU && cU ? XU.inputMap.splice(XU.inputMap.indexOf(cU), 1) : UU && !cU && XU.addEntry({
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
          set _panningMouseButton(UU) {
            this._panningMouseButtonInternal = UU;
            const XU = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            XU && (XU.button = UU)
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
          set useBouncingBehavior(UU) {
            UU !== this.useBouncingBehavior && (UU ? (this._bouncingBehavior = new tU, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(UU) {
            UU !== this.useFramingBehavior && (UU ? (this._framingBehavior = new gU, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(UU) {
            UU !== this.useAutoRotationBehavior && (UU ? (this._autoRotationBehavior = new IU, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(UU, XU, zU, yU, FU, oU) {
            var DU;
            let EU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(UU, AU.q.Zero(), oU, EU), DU = this, this.alpha = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, void 0)), this.beta = ((0, cU.n)(this, KU), (0, cU.n)(this, bU, void 0)), this.radius = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, void 0)), this.overrideCloneAlphaBetaRadius = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, void 0)), this.eY = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, void 0)), this._targetHost = ((0, cU.n)(this, yX), (0, cU.n)(this, QX, void 0)), this._upToYMatrix = (0, cU.n)(this, AX), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, cU.n)(this, FX, null), this.upperAlphaLimit = ((0, cU.n)(this, oX), (0, cU.n)(this, DX, null)), this.lowerBetaLimit = ((0, cU.n)(this, EX), (0, cU.n)(this, YX, .01)), this.upperBetaLimit = ((0, cU.n)(this, NX), (0, cU.n)(this, IX, Math.PI - .01)), this.lowerRadiusLimit = ((0, cU.n)(this, pX), (0, cU.n)(this, aX, null)), this.upperRadiusLimit = ((0, cU.n)(this, tX), (0, cU.n)(this, gX, null)), this.lowerTargetYLimit = ((0, cU.n)(this, kX), (0, cU.n)(this, GX, -1 / 0)), this.inertialPanningX = ((0, cU.n)(this, BX), (0, cU.n)(this, ZX, 0)), this.inertialPanningY = ((0, cU.n)(this, RX), (0, cU.n)(this, PX, 0)), this.pinchToPanMaxDistance = ((0, cU.n)(this, WX), (0, cU.n)(this, dX, 20)), this.panningDistanceLimit = ((0, cU.n)(this, LX), (0, cU.n)(this, eX, null)), this.panningOriginTarget = ((0, cU.n)(this, CX), (0, cU.n)(this, wX, AU.q.Zero())), this._panningInertia = ((0, cU.n)(this, qX), .9), this._inertia = .9, this.zoomOnFactor = (0, cU.n)(this, OX, 1), this.targetScreenOffset = ((0, cU.n)(this, SX), (0, cU.n)(this, rX, AU.m.Zero())), this.allowUpsideDown = ((0, cU.n)(this, uX), (0, cU.n)(this, fX, !0)), this.useInputToRestoreState = ((0, cU.n)(this, iX), (0, cU.n)(this, HX, !0)), this.restoreStateInterpolationFactor = ((0, cU.n)(this, MX), (0, cU.n)(this, vX, 0)), this._currentInterpolationFactor = ((0, cU.n)(this, VX), 0), this._viewMatrix = new AU.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new AU.q(1, 1, 0), this._transformedDirection = new AU.q, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new QU.e, this.checkCollisions = !1, this.collisionRadius = new AU.q(.5, .5, .5), this._previousPosition = AU.q.Zero(), this._collisionVelocity = AU.q.Zero(), this._newPosition = AU.q.Zero(), this._computationVector = AU.q.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new AU.q(NaN, NaN, NaN), this._goalTargetScreenOffset = new AU.m(NaN, NaN), this._onCollisionPositionChange = function(UU, XU) {
              let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              zU ? (DU.setPosition(XU), DU.wN && DU.wN(zU)) : DU._previousPosition.YL(DU._position);
              const cU = Math.cos(DU.alpha),
                yU = Math.sin(DU.alpha),
                QU = Math.cos(DU.beta);
              let AU = Math.sin(DU.beta);
              0 === AU && (AU = 1e-4);
              const FU = DU._getTargetPosition();
              DU._computationVector.sUU(DU.radius * cU * AU, DU.radius * QU, DU.radius * yU * AU), FU.addToRef(DU._computationVector, DU._newPosition), DU._position.YL(DU._newPosition);
              let oU = DU.upVector;
              DU.allowUpsideDown && DU.beta < 0 && (oU = oU.clone(), oU = oU.fp()), DU._computeViewMatrix(DU._position, FU, oU), DU._viewMatrix.addAtIndex(12, DU.targetScreenOffset.x), DU._viewMatrix.addAtIndex(13, DU.targetScreenOffset.y), DU._collisionTriggered = !1
            }, this.eY = AU.q.Zero(), FU && this.setTarget(FU), this.alpha = XU, this.beta = zU, this.radius = yU, this.getViewMatrix(), this.inputs = new rU(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new HU(this.nS(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.eY = new AU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = AU.m.Zero()
          }
          _updateCache(UU) {
            UU || super._updateCache(), this._cache.eY.YL(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.YL(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const UU = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? UU.addToRef(this._targetBoundingCenter, this.eY) : this.eY.YL(UU)
            }
            const UU = this._getLockedTargetPosition();
            return UU || this.eY
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > NU.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              QU = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != QU ? this._currentInterpolationFactor = QU : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = MU(UU, this._goalAlpha), this._goalBeta = MU(XU, this._goalBeta), this._goalRadius = MU(zU, this._goalRadius), this._goalTarget.set(MU(cU.x, this._goalTarget.x), MU(cU.y, this._goalTarget.y), MU(cU.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(MU(yU.x, this._goalTargetScreenOffset.x), MU(yU.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, FU.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, FU.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, FU.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, FU.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.eY.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(UU, XU) {
            let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const yU = arguments;
            XU = ZU.j.BackCompatCameraNoPreventDefault(yU), this._useCtrlForPanning = zU, this._panningMouseButton = cU, "boolean" === typeof yU[0] && (yU.length > 1 && (this._useCtrlForPanning = yU[1]), yU.length > 2 && (this._panningMouseButton = yU[2])), this.inputs.attachElement(XU), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(UU, XU, zU) {
            const cU = this.invertRotation ? -1 : 1;
            let yU = UU * this._calculateHandednessMultiplier();
            this.beta < 0 && (yU *= -1), this.alpha += yU * cU, this.beta += XU * cU, this.radius -= zU
          }
          _applyPanDelta(UU, XU) {
            const zU = AU.l.Sp[0].sUU(UU, XU, XU);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), zU.multiplyInPlace(this.panningAxis), AU.q.TransformNormalToRef(zU, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const UU = this.upVector,
                XU = AU.q.CrossToRef(this._transformedDirection, UU, this._transformedDirection);
              AU.q.CrossToRef(UU, XU, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.eY);
                AU.q.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.eY.YL(this._transformedDirection)
              } else {
                if (this.parent) {
                  const UU = AU.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(UU), UU.transposeToRef(UU), AU.q.TransformCoordinatesToRef(this._transformedDirection, UU, this._transformedDirection)
                }
                this.eY.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let UU = !1;
            this.movement.computeCurrentFrameDeltas();
            const XU = this.movement.rotationDeltaCurrentFrame,
              zU = this.movement.zoomDeltaCurrentFrame,
              cU = this.movement.panDeltaCurrentFrame;
            if (0 === XU.x && 0 === XU.y && 0 === zU && 0 === cU.x && 0 === cU.y || (UU = !0, 0 === XU.x && 0 === XU.y && 0 === zU || this._applyRotationAndZoomDelta(XU.x, XU.y, zU), 0 === cU.x && 0 === cU.y || this._applyPanDelta(cU.x, cU.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), UU = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const XU = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < XU && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < XU && (this.inertialPanningY = 0), UU = !0
            }
            if (UU) this.stopInterpolation();
            else if (this._isInterpolating) {
              let UU = !1;
              const XU = this._scene.qp().getDeltaTime() / 1e3,
                zU = 1 - Math.pow(2, -XU / this._currentInterpolationFactor),
                cU = MU(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const XU = AU.l.Sp[0].set(MU(this._goalTarget.x, this.eY.x), MU(this._goalTarget.y, this.eY.y), MU(this._goalTarget.z, this.eY.z));
                AU.q.LerpToRef(this.target, XU, zU, this.eY), 10 * AU.q.Distance(this.target, XU) / cU < NU.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.YL(XU), this.setTarget(this.target, !1, !0, !0)) : UU = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const XU = AU.f.RotationAlphaBetaGammaToRef(MU(this._goalAlpha, this.alpha), MU(this._goalBeta, this.beta), 0, AU.l.Quaternion[0]),
                  cU = AU.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, AU.l.Quaternion[1]),
                  yU = AU.f.SlerpToRef(cU, XU, zU, AU.l.Quaternion[2]);
                yU.normalize();
                const QU = yU.toAlphaBetaGammaToRef(AU.l.Sp[0]);
                if (this.alpha = QU.x, this.beta = QU.y, yU.isApprox(XU, NU.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const UU = XU.toAlphaBetaGammaToRef(AU.l.Sp[0]);
                  this.alpha = UU.x, this.beta = UU.y
                } else UU = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (cU - this.radius) * zU, Math.abs(cU / this.radius - 1) < NU.c ? (this._goalRadius = NaN, this.radius = cU) : UU = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const XU = AU.l.Vector2[0].set(MU(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), MU(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                AU.m.LerpToRef(this.targetScreenOffset, XU, zU, this.targetScreenOffset), AU.m.Distance(this.targetScreenOffset, XU) < NU.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.YL(XU)) : UU = !0
              }
              this._isInterpolating = UU
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || AU.q.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const UU = this.alpha;
            var XU, zU;
            this.alpha = function(UU) {
              let XU = Math.PI / 2;
              return 0 === UU.x && 0 === UU.z || (XU = Math.acos(UU.x / Math.sqrt(Math.pow(UU.x, 2) + Math.pow(UU.z, 2)))), UU.z < 0 && (XU = 2 * Math.PI - XU), XU
            }(this._computationVector), this.beta = (XU = this._computationVector.y, zU = this.radius, Math.acos(XU / zU));
            const cU = Math.round((UU - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * cU * Math.PI, this._checkLimits()
          }
          setPosition(UU) {
            this._position.equals(UU) || (this._position.YL(UU), this.rebuildAnglesAndRadius())
          }
          setTarget(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (cU = this.overrideCloneAlphaBetaRadius ?? cU, UU.computeWorldMatrix) XU && UU.gM ? this._targetBoundingCenter = UU.gM().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, UU.computeWorldMatrix(), this._targetHost = UU, this.eY = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const XU = UU,
                cU = this._getTargetPosition();
              if (cU && !zU && cU.equals(XU)) return;
              this._targetHost = null, this.eY = XU, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            cU || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const UU = Math.cos(this.alpha),
              XU = Math.sin(this.alpha),
              zU = Math.cos(this.beta);
            let cU = Math.sin(this.beta);
            0 === cU && (cU = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const yU = this._getTargetPosition();
            if (this._computationVector.sUU(this.radius * UU * cU, this.radius * zU, this.radius * XU * cU), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || AU.q.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), yU.addToRef(this._computationVector, this._newPosition), this.nS().collisionsEnabled && this.checkCollisions) {
              const UU = this.nS().collisionCoordinator;
              this._collider || (this._collider = UU.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, UU.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.YL(this._newPosition);
              let UU = this.upVector;
              this.allowUpsideDown && cU < 0 && (UU = UU.fp()), this._computeViewMatrix(this._position, yU, UU), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.YL(yU), this._viewMatrix
          }
          zoomOn(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            UU = UU || this.nS().meshes;
            const zU = DU.b.MinMax(UU);
            let cU = this._calculateLowerRadiusFromModelBoundingSphere(zU.min, zU.max);
            if (cU = Math.max(Math.min(cU, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = cU * this.zoomOnFactor, this.mode === kU.d.ORTHOGRAPHIC_CAMERA) {
              const UU = this.nS().qp().getAspectRatio(this),
                XU = cU * this.zoomOnFactor / 2;
              this.orthoLeft = -XU * UU, this.orthoRight = XU * UU, this.orthoBottom = -XU, this.orthoTop = XU
            }
            this.focusOn({
              min: zU.min,
              max: zU.max,
              distance: cU
            }, XU)
          }
          focusOn(UU) {
            let XU, zU, cU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === UU.min) {
              const cU = UU || this.nS().meshes;
              XU = DU.b.MinMax(cU), zU = AU.q.Distance(XU.min, XU.max)
            } else {
              XU = UU, zU = UU.distance
            }
            this.eY = DU.b.Center(XU), cU || (this.maxZ = 2 * zU)
          }
          createRigCamera(XU, zU) {
            let cU = 0;
            switch (this.cameraRigMode) {
              case kU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case kU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case kU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case kU.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case kU.d.RIG_MODE_VR:
                cU = this._cameraRigParams.stereoHalfAngle * (0 === zU ? 1 : -1);
                break;
              case kU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                cU = this._cameraRigParams.stereoHalfAngle * (0 === zU ? -1 : 1)
            }
            const yU = new UU(XU, this.alpha + cU, this.beta, this.radius, this.eY, this.nS());
            return yU._cameraRigParams = {}, yU.isRigCamera = !0, yU.rigParent = this, yU.upVector = this.upVector, yU.mode = this.mode, yU.orthoLeft = this.orthoLeft, yU.orthoRight = this.orthoRight, yU.orthoBottom = this.orthoBottom, yU.orthoTop = this.orthoTop, yU
          }
          _updateRigCameras() {
            const UU = this._rigCameras[0],
              XU = this._rigCameras[1];
            switch (UU.beta = XU.beta = this.beta, this.cameraRigMode) {
              case kU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case kU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case kU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case kU.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case kU.d.RIG_MODE_VR:
                UU.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, XU.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case kU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                UU.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, XU.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const cU = AU.q.Distance(UU, XU),
              yU = this.nS().qp().getAspectRatio(this),
              QU = Math.tan(this.fov / 2),
              FU = QU * yU,
              oU = .5 * cU * zU,
              DU = oU * Math.sqrt(1 + 1 / (FU * FU)),
              EU = oU * Math.sqrt(1 + 1 / (QU * QU));
            return Math.max(DU, EU)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(xU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], oU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.F)("target")], pU = [(0, yU.t)("targetHost")], aU = [(0, yU.I)()], BU = [(0, yU.I)()], RU = [(0, yU.I)()], PU = [(0, yU.I)()], WU = [(0, yU.I)()], dU = [(0, yU.I)()], LU = [(0, yU.I)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], qU = [(0, yU.I)()], OU = [(0, yU.I)()], SU = [(0, yU.I)()], uU = [(0, yU.I)()], fU = [(0, yU.F)()], iU = [(0, yU.I)()], vU = [(0, yU.I)()], VU = [(0, yU.I)()], sU = [(0, yU.B)()], nU = [(0, yU.I)()], mU = [(0, yU.I)()], lU = [(0, yU.I)()], (0, cU.j)(UU, null, aU, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialAlphaOffset" in UU,
              get: UU => UU.inertialAlphaOffset
            },
            metadata: QU
          }, null, JU), (0, cU.j)(UU, null, BU, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialBetaOffset" in UU,
              get: UU => UU.inertialBetaOffset
            },
            metadata: QU
          }, null, JU), (0, cU.j)(UU, null, RU, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialRadiusOffset" in UU,
              get: UU => UU.inertialRadiusOffset
            },
            metadata: QU
          }, null, JU), (0, cU.j)(UU, null, iU, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningInertia" in UU,
              get: UU => UU.panningInertia
            },
            metadata: QU
          }, null, JU), (0, cU.j)(UU, null, vU, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: UU => "zoomToMouseLocation" in UU,
              get: UU => UU.zoomToMouseLocation
            },
            metadata: QU
          }, null, JU), (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "alpha" in UU,
              get: UU => UU.alpha,
              set: (UU, XU) => {
                UU.alpha = XU
              }
            },
            metadata: QU
          }, jU, KU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: UU => "beta" in UU,
              get: UU => UU.beta,
              set: (UU, XU) => {
                UU.beta = XU
              }
            },
            metadata: QU
          }, bU, TU), (0, cU.j)(null, null, oU, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: UU => "radius" in UU,
              get: UU => UU.radius,
              set: (UU, XU) => {
                UU.radius = XU
              }
            },
            metadata: QU
          }, hU, UX), (0, cU.j)(null, null, EU, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: UU => "overrideCloneAlphaBetaRadius" in UU,
              get: UU => UU.overrideCloneAlphaBetaRadius,
              set: (UU, XU) => {
                UU.overrideCloneAlphaBetaRadius = XU
              }
            },
            metadata: QU
          }, XX, zX), (0, cU.j)(null, null, YU, {
            kind: "field",
            name: "eY",
            static: !1,
            private: !1,
            access: {
              has: UU => "eY" in UU,
              get: UU => UU.eY,
              set: (UU, XU) => {
                UU.eY = XU
              }
            },
            metadata: QU
          }, cX, yX), (0, cU.j)(null, null, pU, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: UU => "_targetHost" in UU,
              get: UU => UU._targetHost,
              set: (UU, XU) => {
                UU._targetHost = XU
              }
            },
            metadata: QU
          }, QX, AX), (0, cU.j)(null, null, PU, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerAlphaLimit" in UU,
              get: UU => UU.lowerAlphaLimit,
              set: (UU, XU) => {
                UU.lowerAlphaLimit = XU
              }
            },
            metadata: QU
          }, FX, oX), (0, cU.j)(null, null, WU, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperAlphaLimit" in UU,
              get: UU => UU.upperAlphaLimit,
              set: (UU, XU) => {
                UU.upperAlphaLimit = XU
              }
            },
            metadata: QU
          }, DX, EX), (0, cU.j)(null, null, dU, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerBetaLimit" in UU,
              get: UU => UU.lowerBetaLimit,
              set: (UU, XU) => {
                UU.lowerBetaLimit = XU
              }
            },
            metadata: QU
          }, YX, NX), (0, cU.j)(null, null, LU, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperBetaLimit" in UU,
              get: UU => UU.upperBetaLimit,
              set: (UU, XU) => {
                UU.upperBetaLimit = XU
              }
            },
            metadata: QU
          }, IX, pX), (0, cU.j)(null, null, eU, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerRadiusLimit" in UU,
              get: UU => UU.lowerRadiusLimit,
              set: (UU, XU) => {
                UU.lowerRadiusLimit = XU
              }
            },
            metadata: QU
          }, aX, tX), (0, cU.j)(null, null, CU, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "upperRadiusLimit" in UU,
              get: UU => UU.upperRadiusLimit,
              set: (UU, XU) => {
                UU.upperRadiusLimit = XU
              }
            },
            metadata: QU
          }, gX, kX), (0, cU.j)(null, null, wU, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "lowerTargetYLimit" in UU,
              get: UU => UU.lowerTargetYLimit,
              set: (UU, XU) => {
                UU.lowerTargetYLimit = XU
              }
            },
            metadata: QU
          }, GX, BX), (0, cU.j)(null, null, qU, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialPanningX" in UU,
              get: UU => UU.inertialPanningX,
              set: (UU, XU) => {
                UU.inertialPanningX = XU
              }
            },
            metadata: QU
          }, ZX, RX), (0, cU.j)(null, null, OU, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: UU => "inertialPanningY" in UU,
              get: UU => UU.inertialPanningY,
              set: (UU, XU) => {
                UU.inertialPanningY = XU
              }
            },
            metadata: QU
          }, PX, WX), (0, cU.j)(null, null, SU, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: UU => "pinchToPanMaxDistance" in UU,
              get: UU => UU.pinchToPanMaxDistance,
              set: (UU, XU) => {
                UU.pinchToPanMaxDistance = XU
              }
            },
            metadata: QU
          }, dX, LX), (0, cU.j)(null, null, uU, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningDistanceLimit" in UU,
              get: UU => UU.panningDistanceLimit,
              set: (UU, XU) => {
                UU.panningDistanceLimit = XU
              }
            },
            metadata: QU
          }, eX, CX), (0, cU.j)(null, null, fU, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: UU => "panningOriginTarget" in UU,
              get: UU => UU.panningOriginTarget,
              set: (UU, XU) => {
                UU.panningOriginTarget = XU
              }
            },
            metadata: QU
          }, wX, qX), (0, cU.j)(null, null, VU, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: UU => "zoomOnFactor" in UU,
              get: UU => UU.zoomOnFactor,
              set: (UU, XU) => {
                UU.zoomOnFactor = XU
              }
            },
            metadata: QU
          }, OX, SX), (0, cU.j)(null, null, sU, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "targetScreenOffset" in UU,
              get: UU => UU.targetScreenOffset,
              set: (UU, XU) => {
                UU.targetScreenOffset = XU
              }
            },
            metadata: QU
          }, rX, uX), (0, cU.j)(null, null, nU, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: UU => "allowUpsideDown" in UU,
              get: UU => UU.allowUpsideDown,
              set: (UU, XU) => {
                UU.allowUpsideDown = XU
              }
            },
            metadata: QU
          }, fX, iX), (0, cU.j)(null, null, mU, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: UU => "useInputToRestoreState" in UU,
              get: UU => UU.useInputToRestoreState,
              set: (UU, XU) => {
                UU.useInputToRestoreState = XU
              }
            },
            metadata: QU
          }, HX, MX), (0, cU.j)(null, null, lU, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: UU => "restoreStateInterpolationFactor" in UU,
              get: UU => UU.restoreStateInterpolationFactor,
              set: (UU, XU) => {
                UU.restoreStateInterpolationFactor = XU
              }
            },
            metadata: QU
          }, vX, VX), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      VU = !1;
    VU || (VU = !0, oU.e.AddNodeConstructor("ArcRotateCamera", ((UU, XU) => () => new vU(UU, 0, 0, 1, AU.q.Zero(), XU))), (0, uU.h)("BABYLON.ArcRotateCamera", vU))
  },
  41331: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.d
    });
    var cU = zU(41340);
    (0, cU.f)()
  },
  41340: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(37923),
      FU = zU(41346),
      oU = zU(41314),
      DU = zU(37863);
    let EU = (() => {
        var UU;
        let XU, zU, oU = FU.b,
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        return UU = class extends oU {
          constructor(UU, XU, zU, yU) {
            super(UU, zU, yU), this.groundColor = (0, cU.n)(this, DU, new AU.b(0, 0, 0)), this.direction = ((0, cU.n)(this, EU), (0, cU.n)(this, YU, void 0)), (0, cU.n)(this, NU), this.direction = XU || QU.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = QU.q.Normalize(UU.subtract(QU.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zU.x, zU.y, zU.z, 0, XU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), XU), this
          }
          transferToNodeMaterialEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return UU.setFloat3(XU, zU.x, zU.y, zU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QU.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return FU.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, XU) {
            UU["HEMILIGHT" + XU] = !0
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(oU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.m)()], zU = [(0, yU.F)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, XU) => {
                UU.groundColor = XU
              }
            },
            metadata: QU
          }, DU, EU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, XU) => {
                UU.direction = XU
              }
            },
            metadata: QU
          }, YU, NU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      YU = !1;

    function NU() {
      YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
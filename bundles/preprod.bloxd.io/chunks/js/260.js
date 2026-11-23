export const id = 260;
export const ids = [260];
export const modules = {
  40925: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => sC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36987),
      nC = ZC(36963),
      fC = ZC(36991),
      oC = ZC(40046),
      qC = ZC(40224),
      FC = ZC(39993),
      WC = ZC(39730),
      NC = ZC(36968);
    class MC {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(CC) {
        this._zoomStopsAnimation = CC
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(CC) {
        this._idleRotationSpeed = CC
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(CC) {
        this._idleRotationWaitTime = CC
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(CC) {
        this._idleRotationSpinupTime = CC
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
      attach(CC) {
        this._attachedCamera = CC;
        const zC = this._attachedCamera.Km();
        this._onPrePointerObservableObserver = zC.onPrePointerObservable.add((CC => {
          CC.type !== FC.b.POINTERDOWN ? CC.type === FC.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const CC = WC.b.Now;
          let zC = 0;
          null != this._lastFrameTime && (zC = CC - this._lastFrameTime), this._lastFrameTime = CC, this._applyUserInteraction();
          const ZC = CC - this._lastInteractionTime - this._idleRotationWaitTime,
            QC = Math.max(Math.min(ZC / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * QC, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (zC / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const CC = this._attachedCamera.Km();
        this._onPrePointerObservableObserver && CC.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(CC) {
        this._lastInteractionTime = CC ?? WC.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < NC.e
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let CC = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (CC = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? CC : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = WC.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ZC(40930);
    class gC {
      constructor() {
        this._easingMode = gC.EASINGMODE_EASEIN
      }
      setEasingMode(CC) {
        const zC = Math.min(Math.max(CC, 0), 2);
        this._easingMode = zC
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(CC) {
        throw new Error("You must implement this method")
      }
      ease(CC) {
        switch (this._easingMode) {
          case gC.EASINGMODE_EASEIN:
            return this.easeInCore(CC);
          case gC.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - CC)
        }
        return CC >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - CC))) + .5 : .5 * this.easeInCore(2 * CC)
      }
    }
    gC.EASINGMODE_EASEIN = 0, gC.EASINGMODE_EASEOUT = 1, gC.EASINGMODE_EASEINOUT = 2;
    var SC = ZC(40934);
    class pC {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(CC) {
        if (this._autoTransitionRange === CC) return;
        this._autoTransitionRange = CC;
        const zC = this._attachedCamera;
        zC && (CC ? this._onMeshTargetChangedObserver = zC.onMeshTargetChangedObservable.add((CC => {
          if (CC && (CC.computeWorldMatrix(!0), CC.WE)) {
            const zC = CC.WE().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * zC, this.upperRadiusTransitionRange = .05 * zC
          }
        })) : this._onMeshTargetChangedObserver && zC.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(CC) {
        this._attachedCamera = CC, this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(CC) {
        return !!this._attachedCamera && (this._attachedCamera.radius === CC && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(CC) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (pC.EasingFunction.setEasingMode(pC.EasingMode), this._radiusBounceTransition = SC.b.CreateAnimation("radius", SC.b.ANIMATIONTYPE_FLOAT, 60, pC.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const zC = SC.b.TransitionTo("radius", this._attachedCamera.radius + CC, this._attachedCamera, this._attachedCamera.Km(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        zC && this._animatables.push(zC)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    pC.EasingFunction = new class extends gC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = CC
      }
      easeInCore(CC) {
        const zC = Math.max(0, this.amplitude);
        return Math.pow(CC, 3) - CC * zC * Math.sin(3.141592653589793 * CC)
      }
    }(.3), pC.EasingMode = gC.EASINGMODE_EASEOUT;
    class PC {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new bC.d, this._mode = PC.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(CC) {
        this._mode = CC
      }
      get mode() {
        return this._mode
      }
      set radiusScale(CC) {
        this._radiusScale = CC
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(CC) {
        this._positionScale = CC
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(CC) {
        this._defaultElevation = CC
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(CC) {
        this._elevationReturnTime = CC
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(CC) {
        this._elevationReturnWaitTime = CC
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(CC) {
        this._zoomStopsAnimation = CC
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(CC) {
        this._framingTime = CC
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(CC) {
        this._attachedCamera = CC;
        const zC = this._attachedCamera.Km();
        PC.EasingFunction.setEasingMode(PC.EasingMode), this._onPrePointerObservableObserver = zC.onPrePointerObservable.add((CC => {
          CC.type !== FC.b.POINTERDOWN ? CC.type === FC.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = CC.onMeshTargetChangedObservable.add((CC => {
          CC && CC.WE && this.zoomOnMesh(CC, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const CC = this._attachedCamera.Km();
        this._onPrePointerObservableObserver && CC.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        CC.computeWorldMatrix(!0);
        const QC = CC.WE().boundingBox;
        this.zoomOnBoundingInfo(QC.minimumWorld, QC.maximumWorld, zC, ZC)
      }
      zoomOnMeshHierarchy(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        CC.computeWorldMatrix(!0);
        const QC = CC.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(QC.min, QC.max, zC, ZC)
      }
      zoomOnMeshesHierarchy(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QC = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          wC = new nC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let bC = 0; bC < CC.length; bC++) {
          const zC = CC[bC].getHierarchyBoundingVectors(!0);
          nC.r.CheckExtends(zC.min, QC, wC), nC.r.CheckExtends(zC.max, QC, wC)
        }
        this.zoomOnBoundingInfo(QC, wC, zC, ZC)
      }
      zoomOnBoundingInfo(CC, zC) {
        let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const bC = CC.y,
          fC = bC + (zC.y - bC) * this._positionScale,
          oC = zC.subtract(CC).scale(.5);
        if (!isFinite(fC)) return !1;
        if (QC) ZC = new nC.r(0, fC, 0);
        else {
          const zC = CC.add(oC);
          ZC = new nC.r(zC.x, fC, zC.z)
        }
        this._vectorTransition || (this._vectorTransition = SC.b.CreateAnimation("target", SC.b.ANIMATIONTYPE_VECTOR3, 60, PC.EasingFunction)), this._betaIsAnimating = !0;
        let qC = SC.b.TransitionTo("target", ZC, this._attachedCamera, this._attachedCamera.Km(), 60, this._vectorTransition, this._framingTime);
        qC && this._animatables.push(qC);
        let FC = 0;
        if (this._mode === PC.FitFrustumSidesMode) {
          const ZC = this._calculateLowerRadiusFromModelBoundingSphere(CC, zC);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = oC.length() + this._attachedCamera.minZ), FC = ZC
        } else this._mode === PC.IgnoreBoundsSizeMode && (FC = this._calculateLowerRadiusFromModelBoundingSphere(CC, zC), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ZC = zC.subtract(CC).length();
          this._attachedCamera.panningSensibility = 5e3 / ZC, this._attachedCamera.wheelPrecision = 100 / FC
        }
        return this._radiusTransition || (this._radiusTransition = SC.b.CreateAnimation("radius", SC.b.ANIMATIONTYPE_FLOAT, 60, PC.EasingFunction)), qC = SC.b.TransitionTo("radius", FC, this._attachedCamera, this._attachedCamera.Km(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), wC && wC(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), qC && this._animatables.push(qC), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(CC, zC) {
        const ZC = this._attachedCamera;
        if (!ZC) return 0;
        let QC = ZC._calculateLowerRadiusFromModelBoundingSphere(CC, zC, this._radiusScale);
        return ZC.lowerRadiusLimit && this._mode === PC.IgnoreBoundsSizeMode && (QC = QC < ZC.lowerRadiusLimit ? ZC.lowerRadiusLimit : QC), ZC.upperRadiusLimit && (QC = QC > ZC.upperRadiusLimit ? ZC.upperRadiusLimit : QC), QC
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const CC = WC.b.Now - this._lastInteractionTime,
          zC = .5 * Math.PI - this._defaultElevation,
          ZC = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZC && CC >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = SC.b.CreateAnimation("beta", SC.b.ANIMATIONTYPE_FLOAT, 60, PC.EasingFunction));
          const CC = SC.b.TransitionTo("beta", zC, this._attachedCamera, this._attachedCamera.Km(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          CC && this._animatables.push(CC)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = WC.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    PC.EasingFunction = new class extends gC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = CC
      }
      easeInCore(CC) {
        return this.exponent <= 0 ? CC : (Math.exp(this.exponent * CC) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, PC.EasingMode = gC.EASINGMODE_EASEINOUT, PC.IgnoreBoundsSizeMode = 0, PC.FitFrustumSidesMode = 1;
    var GC = ZC(40042),
      RC = ZC(40035),
      AC = ZC(40069),
      xC = ZC(39913);
    let JC = (() => {
        var CC;
        let zC, ZC = [],
          bC = [];
        return CC = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, QC.n)(this, ZC, [0, 1, 2]), this._pointerInput = (0, QC.n)(this, bC)
          }
          attachControl(CC) {
            CC = xC.g.BackCompatCameraNoPreventDefault(arguments);
            const zC = this.camera.mg(),
              ZC = zC.getInputElement();
            let QC = 0,
              wC = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = bC => {
              const nC = bC.event,
                fC = "touch" === nC.pointerType;
              if (bC.type !== FC.b.POINTERMOVE && -1 === this.buttons.indexOf(nC.button)) return;
              const oC = nC.target;
              if (this._altKey = nC.altKey, this._ctrlKey = nC.ctrlKey, this._metaKey = nC.metaKey, this._shiftKey = nC.shiftKey, this._buttonsPressed = nC.buttons, zC.isPointerLock) {
                const CC = nC.movementX,
                  zC = nC.movementY;
                this.onTouch(null, CC, zC), this._pointA = null, this._pointB = null
              } else {
                if (bC.type !== FC.b.POINTERDOWN && bC.type !== FC.b.POINTERDOUBLETAP && fC && this._pointA?.pointerId !== nC.pointerId && this._pointB?.pointerId !== nC.pointerId) return;
                if (bC.type !== FC.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !fC)
                  if (bC.type === FC.b.POINTERDOUBLETAP) this.onDoubleTap(nC.pointerType, nC);
                  else if (bC.type !== FC.b.POINTERUP || this._currentMousePointerIdDown !== nC.pointerId && !fC) {
                  if (bC.type === FC.b.POINTERMOVE)
                    if (CC || nC.preventDefault(), this._pointA && null === this._pointB) {
                      const CC = nC.clientX - this._pointA.x,
                        zC = nC.clientY - this._pointA.y;
                      this._pointA.x = nC.clientX, this._pointA.y = nC.clientY, this.onTouch(this._pointA, CC, zC)
                    } else if (this._pointA && this._pointB) {
                    const CC = this._pointA.pointerId === nC.pointerId ? this._pointA : this._pointB;
                    CC.x = nC.clientX, CC.y = nC.clientY;
                    const zC = this._pointA.x - this._pointB.x,
                      ZC = this._pointA.y - this._pointB.y,
                      fC = zC * zC + ZC * ZC,
                      oC = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: nC.pointerId,
                        type: bC.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, QC, fC, wC, oC), wC = oC, QC = fC
                  }
                } else {
                  try {
                    oC?.releasePointerCapture(nC.pointerId)
                  } catch (qC) {}
                  fC || (this._pointB = null), zC._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == nC.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == nC.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== QC || wC) && (this.onMultiTouch(this._pointA, this._pointB, QC, 0, wC, null), QC = 0, wC = null), this._currentMousePointerIdDown = -1, this.onButtonUp(nC), CC || nC.preventDefault()
                } else {
                  try {
                    oC?.setPointerCapture(nC.pointerId)
                  } catch (qC) {}
                  if (null === this._pointA) this._pointA = {
                    x: nC.clientX,
                    y: nC.clientY,
                    pointerId: nC.pointerId,
                    type: nC.pointerType,
                    button: nC.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: nC.clientX,
                      y: nC.clientY,
                      pointerId: nC.pointerId,
                      type: nC.pointerType,
                      button: nC.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || fC || (this._currentMousePointerIdDown = nC.pointerId), this.onButtonDown(nC), CC || (nC.preventDefault(), ZC && ZC.focus())
                }
              }
            }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, FC.b.POINTERDOWN | FC.b.POINTERUP | FC.b.POINTERMOVE | FC.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, QC = 0, wC = null, this.onLostFocus()
            }, this._contextMenuBind = CC => this.onContextMenu(CC), ZC && ZC.addEventListener("contextmenu", this._contextMenuBind, !1);
            const bC = this.camera.Km().mg().getHostWindow();
            bC && xC.g.RegisterTopRootEvents(bC, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const CC = this.camera.Km().mg().getHostWindow();
              CC && xC.g.UnregisterTopRootEvents(CC, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const CC = this.camera.Km().mg().getInputElement();
                CC && CC.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(CC, zC) {}
          onTouch(CC, zC, ZC) {}
          onMultiTouch(CC, zC, ZC, QC, wC, bC) {}
          onContextMenu(CC) {
            CC.preventDefault()
          }
          onButtonDown(CC) {}
          onButtonUp(CC) {}
          onLostFocus() {}
        }, (() => {
          const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: CC => "buttons" in CC,
              get: CC => CC.buttons,
              set: (CC, zC) => {
                CC.buttons = zC
              }
            },
            metadata: nC
          }, ZC, bC), nC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nC
          })
        })(), CC
      })(),
      IC = (() => {
        var CC;
        let zC, ZC, bC, nC = JC,
          fC = [],
          oC = [],
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        return CC = class extends nC {
          constructor() {
            super(...arguments), this.pinchZoom = (0, QC.n)(this, fC, !0), this.multiTouchPanning = ((0, QC.n)(this, oC), (0, QC.n)(this, qC, !0)), this.multiTouchPanAndZoom = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, !0)), this._isPinching = ((0, QC.n)(this, NC), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(CC, zC) {}
          _computeMultiTouchPanning(CC, zC) {}
          onMultiTouch(CC, zC, ZC, QC, wC, bC) {
            0 === ZC && null === wC || 0 === QC && null === bC || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ZC, QC), this._computeMultiTouchPanning(wC, bC)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ZC, QC), this._isPinching = !0) : this._computeMultiTouchPanning(wC, bC)) : this.multiTouchPanning ? this._computeMultiTouchPanning(wC, bC) : this.pinchZoom && this._computePinchZoom(ZC, QC))
          }
          onButtonUp(CC) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(nC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: CC => "pinchZoom" in CC,
              get: CC => CC.pinchZoom,
              set: (CC, zC) => {
                CC.pinchZoom = zC
              }
            },
            metadata: MC
          }, fC, oC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: CC => "multiTouchPanning" in CC,
              get: CC => CC.multiTouchPanning,
              set: (CC, zC) => {
                CC.multiTouchPanning = zC
              }
            },
            metadata: MC
          }, qC, FC), (0, QC.j)(null, null, bC, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: CC => "multiTouchPanAndZoom" in CC,
              get: CC => CC.multiTouchPanAndZoom,
              set: (CC, zC) => {
                CC.multiTouchPanAndZoom = zC
              }
            },
            metadata: MC
          }, WC, NC), MC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MC
          })
        })(), CC
      })(),
      iC = (() => {
        var CC;
        let zC, ZC, bC, nC, fC, oC, qC, FC = IC,
          WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [],
          PC = [],
          GC = [],
          RC = [],
          AC = [],
          xC = [],
          JC = [],
          iC = [],
          vC = [];
        return CC = class extends FC {
          constructor() {
            super(...arguments), this.buttons = (0, QC.n)(this, WC, [0, 1, 2]), this.angularSensibilityX = ((0, QC.n)(this, NC), (0, QC.n)(this, MC, 1e3)), this.angularSensibilityY = ((0, QC.n)(this, gC), (0, QC.n)(this, SC, 1e3)), this.pinchPrecision = ((0, QC.n)(this, pC), (0, QC.n)(this, PC, 12)), this.pinchDeltaPercentage = ((0, QC.n)(this, GC), (0, QC.n)(this, RC, 0)), this.useNaturalPinchZoom = ((0, QC.n)(this, AC), (0, QC.n)(this, xC, !1)), this.panningSensibility = ((0, QC.n)(this, JC), (0, QC.n)(this, iC, 1e3)), this.pinchInwards = ((0, QC.n)(this, vC), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(CC, zC) {
            if (CC && zC) {
              const ZC = zC.x - CC.x,
                QC = zC.y - CC.y,
                wC = this.camera.movement.input.getEntry("pointer", "pan"),
                bC = wC?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== bC && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ZC * bC, this.camera.movement.panAccumulatedPixels.y += QC * bC)
            }
          }
          _computePinchZoom(zC, ZC) {
            const QC = this.camera.radius || CC.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = QC * Math.sqrt(zC) / Math.sqrt(ZC);
            else if (this.pinchDeltaPercentage) {
              const CC = .001 * (ZC - zC) * QC * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += CC
            } else {
              const CC = (ZC - zC) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += CC
            }
          }
          onTouch(CC, zC, ZC) {
            const QC = this._activeEntry ?? (this.camera.mg().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (QC)
              if ("pan" === QC.interaction) {
                const CC = QC.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== CC && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -zC * CC, this.camera.movement.panAccumulatedPixels.y += ZC * CC)
              } else if ("rotate" === QC.interaction) {
              const CC = QC.fL ?? QC.sensitivity ?? 1 / this.angularSensibilityX,
                wC = QC.qL ?? QC.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -zC * CC, this.camera.movement.rotationAccumulatedPixels.y += -ZC * wC
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(CC, zC, ZC, QC, wC, bC) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(QC) - Math.sqrt(ZC)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(CC, zC, ZC, QC, wC, bC)
          }
          onButtonDown(CC) {
            this._pointerConditions.button = CC.button, this._pointerModifiers.ctrl = CC.ctrlKey, this._pointerModifiers.alt = CC.altKey, this._pointerModifiers.shift = CC.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(CC)
          }
          onButtonUp(CC) {
            this._activeEntry = null, super.onButtonUp(CC)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const IC = "function" === typeof Symbol && Symbol.metadata ? Object.create(FC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: CC => "buttons" in CC,
              get: CC => CC.buttons,
              set: (CC, zC) => {
                CC.buttons = zC
              }
            },
            metadata: IC
          }, WC, NC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: CC => "angularSensibilityX" in CC,
              get: CC => CC.angularSensibilityX,
              set: (CC, zC) => {
                CC.angularSensibilityX = zC
              }
            },
            metadata: IC
          }, MC, gC), (0, QC.j)(null, null, bC, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: CC => "angularSensibilityY" in CC,
              get: CC => CC.angularSensibilityY,
              set: (CC, zC) => {
                CC.angularSensibilityY = zC
              }
            },
            metadata: IC
          }, SC, pC), (0, QC.j)(null, null, nC, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: CC => "pinchPrecision" in CC,
              get: CC => CC.pinchPrecision,
              set: (CC, zC) => {
                CC.pinchPrecision = zC
              }
            },
            metadata: IC
          }, PC, GC), (0, QC.j)(null, null, fC, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: CC => "pinchDeltaPercentage" in CC,
              get: CC => CC.pinchDeltaPercentage,
              set: (CC, zC) => {
                CC.pinchDeltaPercentage = zC
              }
            },
            metadata: IC
          }, RC, AC), (0, QC.j)(null, null, oC, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: CC => "useNaturalPinchZoom" in CC,
              get: CC => CC.useNaturalPinchZoom,
              set: (CC, zC) => {
                CC.useNaturalPinchZoom = zC
              }
            },
            metadata: IC
          }, xC, JC), (0, QC.j)(null, null, qC, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: CC => "panningSensibility" in CC,
              get: CC => CC.panningSensibility,
              set: (CC, zC) => {
                CC.panningSensibility = zC
              }
            },
            metadata: IC
          }, iC, vC), IC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IC
          })
        })(), CC.MinimumRadiusForPinch = .001, CC
      })();
    AC.e.ArcRotateCameraPointersInput = iC;
    var vC = ZC(40001);
    let eC = (() => {
      var CC;
      let zC, ZC, bC, fC, oC, qC, FC, WC, NC, MC, gC, SC = [],
        pC = [],
        PC = [],
        GC = [],
        RC = [],
        AC = [],
        JC = [],
        IC = [],
        iC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [];
      return CC = class {
        constructor() {
          this.camera = (0, QC.n)(this, SC), this.keysUp = (0, QC.n)(this, pC, [38]), this.keysDown = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, [40])), this.keysLeft = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, [37])), this.keysRight = ((0, QC.n)(this, JC), (0, QC.n)(this, IC, [39])), this.keysReset = ((0, QC.n)(this, iC), (0, QC.n)(this, eC, [220])), this.keysZoomIn = ((0, QC.n)(this, hC), (0, QC.n)(this, KC, [187, 107])), this.keysZoomOut = ((0, QC.n)(this, YC), (0, QC.n)(this, dC, [189, 109])), this.panningSensibility = ((0, QC.n)(this, mC), (0, QC.n)(this, HC, 50)), this.zoomingSensibility = ((0, QC.n)(this, EC), (0, QC.n)(this, lC, 25)), this.angularSpeed = ((0, QC.n)(this, XC), (0, QC.n)(this, cC, .01)), this._useAltToZoom = ((0, QC.n)(this, uC), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new nC.n, this._panDirection = new nC.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(CC) {
          this._useAltToZoom = CC, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const CC = this.camera.movement.input,
            zC = CC.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && zC ? CC.inputMap.splice(CC.inputMap.indexOf(zC), 1) : this._useAltToZoom && !zC && CC.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(CC) {
          CC = xC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
            const ZC = zC.event;
            if (!ZC.metaKey)
              if (zC.type === vC.c.KEYDOWN) {
                if (this._ctrlPressed = ZC.ctrlKey, this._altPressed = ZC.altKey, -1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.indexOf(ZC.keyCode) || -1 !== this.keysZoomIn.indexOf(ZC.keyCode) || -1 !== this.keysZoomOut.indexOf(ZC.keyCode)) {
                  -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), ZC.preventDefault && (CC || ZC.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.indexOf(ZC.keyCode) || -1 !== this.keysZoomIn.indexOf(ZC.keyCode) || -1 !== this.keysZoomOut.indexOf(ZC.keyCode)) {
              const zC = this._keys.indexOf(ZC.keyCode);
              zC >= 0 && this._keys.splice(zC, 1), ZC.preventDefault && (CC || ZC.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const CC = this.camera,
              zC = CC.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ZC = this._rotateDirection.set(0, 0),
              QC = this._panDirection.set(0, 0);
            let wC = 0,
              bC = 0;
            for (let nC = 0; nC < this._keys.length; nC++) {
              const fC = this._keys[nC];
              if (this._keyboardConditions.key = fC, -1 === this.keysReset.indexOf(fC)) {
                const CC = zC.resolveInteraction("keyboard", this._keyboardConditions);
                if (CC)
                  if ("pan" === CC.interaction) bC = Math.max(bC, CC.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(fC) ? QC.x -= 1 : -1 !== this.keysRight.indexOf(fC) ? QC.x += 1 : -1 !== this.keysUp.indexOf(fC) ? QC.y += 1 : -1 !== this.keysDown.indexOf(fC) && (QC.y -= 1);
                  else if ("zoom" === CC.interaction) {
                  const ZC = CC.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(fC) || -1 !== this.keysZoomIn.indexOf(fC) ? zC.handlers.zoom(ZC) : -1 === this.keysDown.indexOf(fC) && -1 === this.keysZoomOut.indexOf(fC) || zC.handlers.zoom(-ZC)
                } else "rotate" === CC.interaction && (wC = Math.max(wC, CC.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(fC) ? ZC.x -= 1 : -1 !== this.keysRight.indexOf(fC) ? ZC.x += 1 : -1 !== this.keysUp.indexOf(fC) ? ZC.y -= 1 : -1 !== this.keysDown.indexOf(fC) && (ZC.y += 1))
              } - 1 !== this.keysReset.indexOf(fC) && CC.useInputToRestoreState && CC.restoreState()
            }
            0 === ZC.x && 0 === ZC.y || (ZC.normalize().scaleInPlace(wC), zC.handlers.rotate(ZC.x, ZC.y)), 0 === QC.x && 0 === QC.y || (QC.normalize().scaleInPlace(bC), zC.handlers.pan(QC.x, QC.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], (0, QC.j)(CC, null, gC, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: CC => "useAltToZoom" in CC,
            get: CC => CC.useAltToZoom
          },
          metadata: nC
        }, null, SC), (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysUp" in CC,
            get: CC => CC.keysUp,
            set: (CC, zC) => {
              CC.keysUp = zC
            }
          },
          metadata: nC
        }, pC, PC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysDown" in CC,
            get: CC => CC.keysDown,
            set: (CC, zC) => {
              CC.keysDown = zC
            }
          },
          metadata: nC
        }, GC, RC), (0, QC.j)(null, null, bC, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysLeft" in CC,
            get: CC => CC.keysLeft,
            set: (CC, zC) => {
              CC.keysLeft = zC
            }
          },
          metadata: nC
        }, AC, JC), (0, QC.j)(null, null, fC, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRight" in CC,
            get: CC => CC.keysRight,
            set: (CC, zC) => {
              CC.keysRight = zC
            }
          },
          metadata: nC
        }, IC, iC), (0, QC.j)(null, null, oC, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysReset" in CC,
            get: CC => CC.keysReset,
            set: (CC, zC) => {
              CC.keysReset = zC
            }
          },
          metadata: nC
        }, eC, hC), (0, QC.j)(null, null, qC, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysZoomIn" in CC,
            get: CC => CC.keysZoomIn,
            set: (CC, zC) => {
              CC.keysZoomIn = zC
            }
          },
          metadata: nC
        }, KC, YC), (0, QC.j)(null, null, FC, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysZoomOut" in CC,
            get: CC => CC.keysZoomOut,
            set: (CC, zC) => {
              CC.keysZoomOut = zC
            }
          },
          metadata: nC
        }, dC, mC), (0, QC.j)(null, null, WC, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: CC => "panningSensibility" in CC,
            get: CC => CC.panningSensibility,
            set: (CC, zC) => {
              CC.panningSensibility = zC
            }
          },
          metadata: nC
        }, HC, EC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: CC => "zoomingSensibility" in CC,
            get: CC => CC.zoomingSensibility,
            set: (CC, zC) => {
              CC.zoomingSensibility = zC
            }
          },
          metadata: nC
        }, lC, XC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: CC => "angularSpeed" in CC,
            get: CC => CC.angularSpeed,
            set: (CC, zC) => {
              CC.angularSpeed = zC
            }
          },
          metadata: nC
        }, cC, uC), nC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nC
        })
      })(), CC
    })();
    AC.e.ArcRotateCameraKeyboardMoveInput = eC;
    var hC = ZC(37596),
      KC = ZC(40010);
    let YC = (() => {
      var CC;
      let zC, ZC, bC, oC = [],
        qC = [],
        WC = [],
        MC = [],
        gC = [],
        SC = [];
      return CC = class {
        constructor() {
          this.wheelPrecision = (0, QC.n)(this, oC, 3), this.zoomToMouseLocation = ((0, QC.n)(this, qC), (0, QC.n)(this, WC, !1)), this.wheelDeltaPercentage = ((0, QC.n)(this, MC), (0, QC.n)(this, gC, 0)), this.customComputeDeltaFromMouseWheel = ((0, QC.n)(this, SC), null), this._viewOffset = new nC.r(0, 0, 0), this._globalOffset = new nC.r(0, 0, 0), this._inertialPanning = nC.r.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(CC, zC) {
          let ZC;
          const QC = .01 * CC * this.wheelDeltaPercentage * zC;
          return ZC = CC > 0 ? QC / (1 + this.wheelDeltaPercentage) : QC * (1 + this.wheelDeltaPercentage), ZC
        }
        attachControl(CC) {
          CC = xC.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = zC => {
            if (zC.type !== FC.b.POINTERWHEEL) return;
            const ZC = zC.event;
            let QC;
            const wC = ZC.deltaMode === KC.d.DOM_DELTA_LINE ? 40 : 1,
              bC = -ZC.deltaY * wC;
            if (this.customComputeDeltaFromMouseWheel) QC = this.customComputeDeltaFromMouseWheel(bC, this, ZC);
            else if (this.wheelDeltaPercentage) {
              if (QC = this._computeDeltaFromMouseWheelLegacyEvent(bC, this.camera.radius), QC > 0) {
                const CC = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let zC = this.camera.radius,
                  ZC = CC + QC;
                for (let QC = 0; QC < 20 && !(zC <= ZC) && !(Math.abs(ZC * this.camera.inertia) < .001); QC++) zC -= ZC, ZC *= this.camera.inertia;
                zC = (0, fC.Clamp)(zC, 0, Number.MAX_VALUE), QC = this._computeDeltaFromMouseWheelLegacyEvent(bC, zC)
              }
            } else {
              const CC = this.camera.movement.input.getEntry("wheel", "zoom");
              QC = bC * (CC?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            QC && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(QC)) : this.camera.movement.zoomAccumulatedPixels += QC), ZC.preventDefault && (CC || ZC.preventDefault())
          }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, FC.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Q_(0)
        }
        detachControl() {
          this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const CC = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(CC.inertialAlphaOffset) + Math.abs(CC.inertialBetaOffset) + Math.abs(CC.inertialRadiusOffset)) {
            this._updateHitPlane(), CC.target.addInPlace(this._inertialPanning), CC.radius -= this._zoomToMouseRadiusOffset;
            const zC = CC.movement.getFrameIndependentDecay(CC.inertia);
            this._inertialPanning.scaleInPlace(zC), this._zoomToMouseRadiusOffset *= zC, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < NC.e && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const CC = this.camera,
            zC = CC.target.subtract(CC.position);
          this._hitPlane = hC.d.FromPositionAndNormal(CC.target, zC)
        }
        _getPosition() {
          const CC = this.camera,
            zC = CC.Km(),
            ZC = zC.createPickingRay(zC.pointerX, zC.pointerY, nC.b.Identity(), CC, !1);
          0 === CC.targetScreenOffset.x && 0 === CC.targetScreenOffset.y || (this._viewOffset.set(CC.targetScreenOffset.x, CC.targetScreenOffset.y, 0), CC.getViewMatrix().invertToRef(CC._cameraTransformMatrix), this._globalOffset = nC.r.TransformNormal(this._viewOffset, CC._cameraTransformMatrix), ZC.origin.addInPlace(this._globalOffset));
          let QC = 0;
          return this._hitPlane && (QC = ZC.intersectsPlane(this._hitPlane) ?? 0), ZC.origin.addInPlace(ZC.direction.scaleInPlace(QC))
        }
        _zoomToMouse(CC) {
          const zC = this.camera,
            ZC = 1 - zC.inertia,
            QC = zC.movement.getFrameIndependentInputScale(zC.inertia);
          if (zC.lowerRadiusLimit) {
            const wC = zC.lowerRadiusLimit ?? 0;
            zC.radius - (this._zoomToMouseRadiusOffset + CC * QC) / ZC < wC && (CC = ((zC.radius - wC) * ZC - this._zoomToMouseRadiusOffset) / QC)
          }
          if (zC.upperRadiusLimit) {
            const wC = zC.upperRadiusLimit ?? 0;
            zC.radius - (this._zoomToMouseRadiusOffset + CC * QC) / ZC > wC && (CC = ((zC.radius - wC) * ZC - this._zoomToMouseRadiusOffset) / QC)
          }
          const wC = CC / ZC / zC.radius,
            bC = this._getPosition(),
            fC = nC.j.Eg[6];
          bC.subtractToRef(zC.target, fC), fC.scaleInPlace(wC), fC.scaleInPlace(ZC), fC.scaleInPlace(QC), this._inertialPanning.addInPlace(fC), this._zoomToMouseRadiusOffset += CC * QC
        }
        _zeroIfClose(CC) {
          Math.abs(CC.x) < NC.e && (CC.x = 0), Math.abs(CC.y) < NC.e && (CC.y = 0), Math.abs(CC.z) < NC.e && (CC.z = 0)
        }
      }, (() => {
        const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelPrecision" in CC,
            get: CC => CC.wheelPrecision,
            set: (CC, zC) => {
              CC.wheelPrecision = zC
            }
          },
          metadata: nC
        }, oC, qC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: CC => "zoomToMouseLocation" in CC,
            get: CC => CC.zoomToMouseLocation,
            set: (CC, zC) => {
              CC.zoomToMouseLocation = zC
            }
          },
          metadata: nC
        }, WC, MC), (0, QC.j)(null, null, bC, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelDeltaPercentage" in CC,
            get: CC => CC.wheelDeltaPercentage,
            set: (CC, zC) => {
              CC.wheelDeltaPercentage = zC
            }
          },
          metadata: nC
        }, gC, SC), nC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nC
        })
      })(), CC
    })();
    AC.e.ArcRotateCameraMouseWheelInput = YC;
    var dC, mC, HC = ZC(39694);
    class EC extends AC.i {
      constructor(CC) {
        super(CC)
      }
      addMouseWheel() {
        return this.add(new YC), this
      }
      addPointers() {
        return this.add(new iC), this
      }
      addKeyboard() {
        return this.add(new eC), this
      }
    }(dC = EC.prototype).addVRDeviceOrientation ?? (dC.addVRDeviceOrientation = (0, HC.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (mC = EC.prototype).addGamepad ?? (mC.addGamepad = (0, HC.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var lC = ZC(37002),
      XC = ZC(40054),
      cC = ZC(40061);
    class uC extends XC.b {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC), this.input = new cC.d({
          pan: (CC, zC) => {
            this.panAccumulatedPixels.x += CC, this.panAccumulatedPixels.y += zC
          },
          rotate: (CC, zC) => {
            this.rotationAccumulatedPixels.x += CC, this.rotationAccumulatedPixels.y += zC
          },
          zoom: CC => {
            this.zoomAccumulatedPixels += CC
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

    function rC(CC, zC) {
      return isNaN(CC) ? zC : CC
    }
    let sC = (() => {
        var CC;
        let zC, ZC, oC, FC, WC, gC, SC, AC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, lC, XC, cC, sC, TC, aC, tC, DC, jC, yC = RC.h,
          LC = [],
          UC = [],
          BC = [],
          OC = [],
          kC = [],
          VC = [],
          Cz = [],
          zz = [],
          Zz = [],
          Qz = [],
          wz = [],
          bz = [],
          nz = [],
          fz = [],
          oz = [],
          qz = [],
          Fz = [],
          Wz = [],
          Nz = [],
          Mz = [],
          gz = [],
          Sz = [],
          pz = [],
          Pz = [],
          Gz = [],
          Rz = [],
          Az = [],
          xz = [],
          Jz = [],
          Iz = [],
          iz = [],
          vz = [],
          ez = [],
          hz = [],
          Kz = [],
          Yz = [],
          dz = [],
          mz = [],
          Hz = [],
          Ez = [],
          lz = [],
          Xz = [],
          cz = [],
          uz = [],
          rz = [],
          sz = [],
          Tz = [];
        return CC = class extends yC {
          get target() {
            return this.wV
          }
          set target(CC) {
            this.setTarget(CC)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(CC) {
            CC && this.setTarget(CC)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(CC) {
            this.setPosition(CC)
          }
          set upVector(CC) {
            this._upToYMatrix || (this._yToUpMatrix = new nC.b, this._upToYMatrix = new nC.b, this._upVector = nC.r.Zero()), CC.normalize(), this._upVector.Av(CC), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            nC.b.RotationAlignToRef(nC.r.UpReadOnly, this._upVector, this._yToUpMatrix), nC.b.RotationAlignToRef(this._upVector, nC.r.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const CC = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(CC) < this._rotationEpsilon ? 0 : CC
          }
          set inertialAlphaOffset(CC) {
            this._inertialAlphaOffset = CC, 0 === CC && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const CC = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(CC) < this._rotationEpsilon ? 0 : CC
          }
          set inertialBetaOffset(CC) {
            this._inertialBetaOffset = CC, 0 === CC && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const CC = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(CC) < this._rotationEpsilon ? 0 : CC
          }
          set inertialRadiusOffset(CC) {
            this._inertialRadiusOffset = CC, 0 === CC && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(CC) {
            this._panningInertia = CC, this.movement && (this.movement.panInertia = CC)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(CC) {
            this._inertia = CC, this.movement && (this.movement.rotationInertia = CC, this.movement.zoomInertia = CC)
          }
          get angularSensibilityX() {
            const CC = this.inputs.attached.pointers;
            return CC ? CC.angularSensibilityX : 0
          }
          set angularSensibilityX(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.angularSensibilityX = CC)
          }
          get angularSensibilityY() {
            const CC = this.inputs.attached.pointers;
            return CC ? CC.angularSensibilityY : 0
          }
          set angularSensibilityY(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.angularSensibilityY = CC)
          }
          get pinchPrecision() {
            const CC = this.inputs.attached.pointers;
            return CC ? CC.pinchPrecision : 0
          }
          set pinchPrecision(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.pinchPrecision = CC)
          }
          get pinchDeltaPercentage() {
            const CC = this.inputs.attached.pointers;
            return CC ? CC.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.pinchDeltaPercentage = CC)
          }
          get useNaturalPinchZoom() {
            const CC = this.inputs.attached.pointers;
            return !!CC && CC.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.useNaturalPinchZoom = CC)
          }
          get panningSensibility() {
            const CC = this.inputs.attached.pointers;
            return CC ? CC.panningSensibility : 0
          }
          set panningSensibility(CC) {
            const zC = this.inputs.attached.pointers;
            zC && (zC.panningSensibility = CC)
          }
          get keysUp() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysUp : []
          }
          set keysUp(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysUp = CC)
          }
          get keysDown() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysDown : []
          }
          set keysDown(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysDown = CC)
          }
          get keysLeft() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysLeft : []
          }
          set keysLeft(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysLeft = CC)
          }
          get keysRight() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRight : []
          }
          set keysRight(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRight = CC)
          }
          get wheelPrecision() {
            const CC = this.inputs.attached.mousewheel;
            return CC ? CC.wheelPrecision : 0
          }
          set wheelPrecision(CC) {
            const zC = this.inputs.attached.mousewheel;
            zC && (zC.wheelPrecision = CC)
          }
          get zoomToMouseLocation() {
            const CC = this.inputs.attached.mousewheel;
            return !!CC && CC.zoomToMouseLocation
          }
          set zoomToMouseLocation(CC) {
            const zC = this.inputs.attached.mousewheel;
            zC && (zC.zoomToMouseLocation = CC)
          }
          get wheelDeltaPercentage() {
            const CC = this.inputs.attached.mousewheel;
            return CC ? CC.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(CC) {
            const zC = this.inputs.attached.mousewheel;
            zC && (zC.wheelDeltaPercentage = CC)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(CC) {
            this._useCtrlForPanningInternal = CC;
            const zC = this.movement.input,
              ZC = zC.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !CC && ZC ? zC.inputMap.splice(zC.inputMap.indexOf(ZC), 1) : CC && !ZC && zC.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const QC = zC.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !CC && QC ? zC.inputMap.splice(zC.inputMap.indexOf(QC), 1) : CC && !QC && zC.addEntry({
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
          set _panningMouseButton(CC) {
            this._panningMouseButtonInternal = CC;
            const zC = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            zC && (zC.button = CC)
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
          set useBouncingBehavior(CC) {
            CC !== this.useBouncingBehavior && (CC ? (this._bouncingBehavior = new pC, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(CC) {
            CC !== this.useFramingBehavior && (CC ? (this._framingBehavior = new PC, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(CC) {
            CC !== this.useAutoRotationBehavior && (CC ? (this._autoRotationBehavior = new MC, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(CC, zC, ZC, wC, fC, oC) {
            var qC;
            let FC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(CC, nC.r.Zero(), oC, FC), qC = this, this.alpha = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, void 0)), this.beta = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, void 0)), this.radius = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this.overrideCloneAlphaBetaRadius = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, void 0)), this.wV = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, void 0)), this._targetHost = ((0, QC.n)(this, wz), (0, QC.n)(this, bz, void 0)), this._upToYMatrix = (0, QC.n)(this, nz), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, QC.n)(this, fz, null), this.upperAlphaLimit = ((0, QC.n)(this, oz), (0, QC.n)(this, qz, null)), this.lowerBetaLimit = ((0, QC.n)(this, Fz), (0, QC.n)(this, Wz, .01)), this.upperBetaLimit = ((0, QC.n)(this, Nz), (0, QC.n)(this, Mz, Math.PI - .01)), this.lowerRadiusLimit = ((0, QC.n)(this, gz), (0, QC.n)(this, Sz, null)), this.upperRadiusLimit = ((0, QC.n)(this, pz), (0, QC.n)(this, Pz, null)), this.lowerTargetYLimit = ((0, QC.n)(this, Gz), (0, QC.n)(this, Rz, -1 / 0)), this.inertialPanningX = ((0, QC.n)(this, Az), (0, QC.n)(this, xz, 0)), this.inertialPanningY = ((0, QC.n)(this, Jz), (0, QC.n)(this, Iz, 0)), this.pinchToPanMaxDistance = ((0, QC.n)(this, iz), (0, QC.n)(this, vz, 20)), this.panningDistanceLimit = ((0, QC.n)(this, ez), (0, QC.n)(this, hz, null)), this.panningOriginTarget = ((0, QC.n)(this, Kz), (0, QC.n)(this, Yz, nC.r.Zero())), this._panningInertia = ((0, QC.n)(this, dz), .9), this._inertia = .9, this.zoomOnFactor = (0, QC.n)(this, mz, 1), this.targetScreenOffset = ((0, QC.n)(this, Hz), (0, QC.n)(this, Ez, nC.n.Zero())), this.allowUpsideDown = ((0, QC.n)(this, lz), (0, QC.n)(this, Xz, !0)), this.useInputToRestoreState = ((0, QC.n)(this, cz), (0, QC.n)(this, uz, !0)), this.restoreStateInterpolationFactor = ((0, QC.n)(this, rz), (0, QC.n)(this, sz, 0)), this._currentInterpolationFactor = ((0, QC.n)(this, Tz), 0), this._viewMatrix = new nC.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new nC.r(1, 1, 0), this._transformedDirection = new nC.r, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new bC.d, this.checkCollisions = !1, this.collisionRadius = new nC.r(.5, .5, .5), this._previousPosition = nC.r.Zero(), this._collisionVelocity = nC.r.Zero(), this._newPosition = nC.r.Zero(), this._computationVector = nC.r.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new nC.r(NaN, NaN, NaN), this._goalTargetScreenOffset = new nC.n(NaN, NaN), this._onCollisionPositionChange = function(CC, zC) {
              let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ZC ? (qC.setPosition(zC), qC.GN && qC.GN(ZC)) : qC._previousPosition.Av(qC._position);
              const QC = Math.cos(qC.alpha),
                wC = Math.sin(qC.alpha),
                bC = Math.cos(qC.beta);
              let nC = Math.sin(qC.beta);
              0 === nC && (nC = 1e-4);
              const fC = qC._getTargetPosition();
              qC._computationVector.L_(qC.radius * QC * nC, qC.radius * bC, qC.radius * wC * nC), fC.addToRef(qC._computationVector, qC._newPosition), qC._position.Av(qC._newPosition);
              let oC = qC.upVector;
              qC.allowUpsideDown && qC.beta < 0 && (oC = oC.clone(), oC = oC.Of()), qC._computeViewMatrix(qC._position, fC, oC), qC._viewMatrix.addAtIndex(12, qC.targetScreenOffset.x), qC._viewMatrix.addAtIndex(13, qC.targetScreenOffset.y), qC._collisionTriggered = !1
            }, this.wV = nC.r.Zero(), fC && this.setTarget(fC), this.alpha = zC, this.beta = ZC, this.radius = wC, this.getViewMatrix(), this.inputs = new EC(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new uC(this.Km(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.wV = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = nC.n.Zero()
          }
          _updateCache(CC) {
            CC || super._updateCache(), this._cache.wV.Av(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Av(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const CC = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? CC.addToRef(this._targetBoundingCenter, this.wV) : this.wV.Av(CC)
            }
            const CC = this._getLockedTargetPosition();
            return CC || this.wV
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > NC.e && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              bC = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != bC ? this._currentInterpolationFactor = bC : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = rC(CC, this._goalAlpha), this._goalBeta = rC(zC, this._goalBeta), this._goalRadius = rC(ZC, this._goalRadius), this._goalTarget.set(rC(QC.x, this._goalTarget.x), rC(QC.y, this._goalTarget.y), rC(QC.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(rC(wC.x, this._goalTargetScreenOffset.x), rC(wC.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, fC.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, fC.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, fC.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, fC.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.wV.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(CC, zC) {
            let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const wC = arguments;
            zC = xC.g.BackCompatCameraNoPreventDefault(wC), this._useCtrlForPanning = ZC, this._panningMouseButton = QC, "boolean" === typeof wC[0] && (wC.length > 1 && (this._useCtrlForPanning = wC[1]), wC.length > 2 && (this._panningMouseButton = wC[2])), this.inputs.attachElement(zC), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(CC, zC, ZC) {
            const QC = this.invertRotation ? -1 : 1;
            let wC = CC * this._calculateHandednessMultiplier();
            this.beta < 0 && (wC *= -1), this.alpha += wC * QC, this.beta += zC * QC, this.radius -= ZC
          }
          _applyPanDelta(CC, zC) {
            const ZC = nC.j.Eg[0].L_(CC, zC, zC);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZC.multiplyInPlace(this.panningAxis), nC.r.TransformNormalToRef(ZC, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const CC = this.upVector,
                zC = nC.r.CrossToRef(this._transformedDirection, CC, this._transformedDirection);
              nC.r.CrossToRef(CC, zC, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.wV);
                nC.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wV.Av(this._transformedDirection)
              } else {
                if (this.parent) {
                  const CC = nC.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(CC), CC.transposeToRef(CC), nC.r.TransformCoordinatesToRef(this._transformedDirection, CC, this._transformedDirection)
                }
                this.wV.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let CC = !1;
            this.movement.computeCurrentFrameDeltas();
            const zC = this.movement.rotationDeltaCurrentFrame,
              ZC = this.movement.zoomDeltaCurrentFrame,
              QC = this.movement.panDeltaCurrentFrame;
            if (0 === zC.x && 0 === zC.y && 0 === ZC && 0 === QC.x && 0 === QC.y || (CC = !0, 0 === zC.x && 0 === zC.y && 0 === ZC || this._applyRotationAndZoomDelta(zC.x, zC.y, ZC), 0 === QC.x && 0 === QC.y || this._applyPanDelta(QC.x, QC.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), CC = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const zC = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < zC && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < zC && (this.inertialPanningY = 0), CC = !0
            }
            if (CC) this.stopInterpolation();
            else if (this._isInterpolating) {
              let CC = !1;
              const zC = this._scene.mg().getDeltaTime() / 1e3,
                ZC = 1 - Math.pow(2, -zC / this._currentInterpolationFactor),
                QC = rC(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const zC = nC.j.Eg[0].set(rC(this._goalTarget.x, this.wV.x), rC(this._goalTarget.y, this.wV.y), rC(this._goalTarget.z, this.wV.z));
                nC.r.LerpToRef(this.target, zC, ZC, this.wV), 10 * nC.r.Distance(this.target, zC) / QC < NC.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Av(zC), this.setTarget(this.target, !1, !0, !0)) : CC = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const zC = nC.f.RotationAlphaBetaGammaToRef(rC(this._goalAlpha, this.alpha), rC(this._goalBeta, this.beta), 0, nC.j.Quaternion[0]),
                  QC = nC.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, nC.j.Quaternion[1]),
                  wC = nC.f.SlerpToRef(QC, zC, ZC, nC.j.Quaternion[2]);
                wC.normalize();
                const bC = wC.toAlphaBetaGammaToRef(nC.j.Eg[0]);
                if (this.alpha = bC.x, this.beta = bC.y, wC.isApprox(zC, NC.e / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const CC = zC.toAlphaBetaGammaToRef(nC.j.Eg[0]);
                  this.alpha = CC.x, this.beta = CC.y
                } else CC = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (QC - this.radius) * ZC, Math.abs(QC / this.radius - 1) < NC.e ? (this._goalRadius = NaN, this.radius = QC) : CC = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const zC = nC.j.Vector2[0].set(rC(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), rC(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                nC.n.LerpToRef(this.targetScreenOffset, zC, ZC, this.targetScreenOffset), nC.n.Distance(this.targetScreenOffset, zC) < NC.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Av(zC)) : CC = !0
              }
              this._isInterpolating = CC
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || nC.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const CC = this.alpha;
            var zC, ZC;
            this.alpha = function(CC) {
              let zC = Math.PI / 2;
              return 0 === CC.x && 0 === CC.z || (zC = Math.acos(CC.x / Math.sqrt(Math.pow(CC.x, 2) + Math.pow(CC.z, 2)))), CC.z < 0 && (zC = 2 * Math.PI - zC), zC
            }(this._computationVector), this.beta = (zC = this._computationVector.y, ZC = this.radius, Math.acos(zC / ZC));
            const QC = Math.round((CC - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * QC * Math.PI, this._checkLimits()
          }
          setPosition(CC) {
            this._position.equals(CC) || (this._position.Av(CC), this.rebuildAnglesAndRadius())
          }
          setTarget(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (QC = this.overrideCloneAlphaBetaRadius ?? QC, CC.computeWorldMatrix) zC && CC.WE ? this._targetBoundingCenter = CC.WE().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, CC.computeWorldMatrix(), this._targetHost = CC, this.wV = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const zC = CC,
                QC = this._getTargetPosition();
              if (QC && !ZC && QC.equals(zC)) return;
              this._targetHost = null, this.wV = zC, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            QC || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const CC = Math.cos(this.alpha),
              zC = Math.sin(this.alpha),
              ZC = Math.cos(this.beta);
            let QC = Math.sin(this.beta);
            0 === QC && (QC = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const wC = this._getTargetPosition();
            if (this._computationVector.L_(this.radius * CC * QC, this.radius * ZC, this.radius * zC * QC), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || nC.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), wC.addToRef(this._computationVector, this._newPosition), this.Km().collisionsEnabled && this.checkCollisions) {
              const CC = this.Km().collisionCoordinator;
              this._collider || (this._collider = CC.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, CC.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.Av(this._newPosition);
              let CC = this.upVector;
              this.allowUpsideDown && QC < 0 && (CC = CC.Of()), this._computeViewMatrix(this._position, wC, CC), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.Av(wC), this._viewMatrix
          }
          zoomOn(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            CC = CC || this.Km().meshes;
            const ZC = qC.b.MinMax(CC);
            let QC = this._calculateLowerRadiusFromModelBoundingSphere(ZC.min, ZC.max);
            if (QC = Math.max(Math.min(QC, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = QC * this.zoomOnFactor, this.mode === GC.d.ORTHOGRAPHIC_CAMERA) {
              const CC = this.Km().mg().getAspectRatio(this),
                zC = QC * this.zoomOnFactor / 2;
              this.orthoLeft = -zC * CC, this.orthoRight = zC * CC, this.orthoBottom = -zC, this.orthoTop = zC
            }
            this.focusOn({
              min: ZC.min,
              max: ZC.max,
              distance: QC
            }, zC)
          }
          focusOn(CC) {
            let zC, ZC, QC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === CC.min) {
              const QC = CC || this.Km().meshes;
              zC = qC.b.MinMax(QC), ZC = nC.r.Distance(zC.min, zC.max)
            } else {
              zC = CC, ZC = CC.distance
            }
            this.wV = qC.b.Center(zC), QC || (this.maxZ = 2 * ZC)
          }
          createRigCamera(zC, ZC) {
            let QC = 0;
            switch (this.cameraRigMode) {
              case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case GC.d.RIG_MODE_VR:
                QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? 1 : -1);
                break;
              case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? -1 : 1)
            }
            const wC = new CC(zC, this.alpha + QC, this.beta, this.radius, this.wV, this.Km());
            return wC._cameraRigParams = {}, wC.isRigCamera = !0, wC.rigParent = this, wC.upVector = this.upVector, wC.mode = this.mode, wC.orthoLeft = this.orthoLeft, wC.orthoRight = this.orthoRight, wC.orthoBottom = this.orthoBottom, wC.orthoTop = this.orthoTop, wC
          }
          _updateRigCameras() {
            const CC = this._rigCameras[0],
              zC = this._rigCameras[1];
            switch (CC.beta = zC.beta = this.beta, this.cameraRigMode) {
              case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case GC.d.RIG_MODE_VR:
                CC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                CC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const QC = nC.r.Distance(CC, zC),
              wC = this.Km().mg().getAspectRatio(this),
              bC = Math.tan(this.fov / 2),
              fC = bC * wC,
              oC = .5 * QC * ZC,
              qC = oC * Math.sqrt(1 + 1 / (fC * fC)),
              FC = oC * Math.sqrt(1 + 1 / (bC * bC));
            return Math.max(qC, FC)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(yC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], oC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.J)("target")], gC = [(0, wC.w)("targetHost")], SC = [(0, wC.M)()], AC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], mC = [(0, wC.M)()], HC = [(0, wC.M)()], lC = [(0, wC.M)()], XC = [(0, wC.J)()], cC = [(0, wC.M)()], sC = [(0, wC.M)()], TC = [(0, wC.M)()], aC = [(0, wC.F)()], tC = [(0, wC.M)()], DC = [(0, wC.M)()], jC = [(0, wC.M)()], (0, QC.j)(CC, null, SC, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "inertialAlphaOffset" in CC,
              get: CC => CC.inertialAlphaOffset
            },
            metadata: bC
          }, null, LC), (0, QC.j)(CC, null, AC, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "inertialBetaOffset" in CC,
              get: CC => CC.inertialBetaOffset
            },
            metadata: bC
          }, null, LC), (0, QC.j)(CC, null, JC, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "inertialRadiusOffset" in CC,
              get: CC => CC.inertialRadiusOffset
            },
            metadata: bC
          }, null, LC), (0, QC.j)(CC, null, cC, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: CC => "panningInertia" in CC,
              get: CC => CC.panningInertia
            },
            metadata: bC
          }, null, LC), (0, QC.j)(CC, null, sC, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: CC => "zoomToMouseLocation" in CC,
              get: CC => CC.zoomToMouseLocation
            },
            metadata: bC
          }, null, LC), (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "alpha" in CC,
              get: CC => CC.alpha,
              set: (CC, zC) => {
                CC.alpha = zC
              }
            },
            metadata: bC
          }, UC, BC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: CC => "beta" in CC,
              get: CC => CC.beta,
              set: (CC, zC) => {
                CC.beta = zC
              }
            },
            metadata: bC
          }, OC, kC), (0, QC.j)(null, null, oC, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: CC => "radius" in CC,
              get: CC => CC.radius,
              set: (CC, zC) => {
                CC.radius = zC
              }
            },
            metadata: bC
          }, VC, Cz), (0, QC.j)(null, null, FC, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: CC => "overrideCloneAlphaBetaRadius" in CC,
              get: CC => CC.overrideCloneAlphaBetaRadius,
              set: (CC, zC) => {
                CC.overrideCloneAlphaBetaRadius = zC
              }
            },
            metadata: bC
          }, zz, Zz), (0, QC.j)(null, null, WC, {
            kind: "field",
            name: "wV",
            static: !1,
            private: !1,
            access: {
              has: CC => "wV" in CC,
              get: CC => CC.wV,
              set: (CC, zC) => {
                CC.wV = zC
              }
            },
            metadata: bC
          }, Qz, wz), (0, QC.j)(null, null, gC, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: CC => "_targetHost" in CC,
              get: CC => CC._targetHost,
              set: (CC, zC) => {
                CC._targetHost = zC
              }
            },
            metadata: bC
          }, bz, nz), (0, QC.j)(null, null, IC, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "lowerAlphaLimit" in CC,
              get: CC => CC.lowerAlphaLimit,
              set: (CC, zC) => {
                CC.lowerAlphaLimit = zC
              }
            },
            metadata: bC
          }, fz, oz), (0, QC.j)(null, null, iC, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "upperAlphaLimit" in CC,
              get: CC => CC.upperAlphaLimit,
              set: (CC, zC) => {
                CC.upperAlphaLimit = zC
              }
            },
            metadata: bC
          }, qz, Fz), (0, QC.j)(null, null, vC, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "lowerBetaLimit" in CC,
              get: CC => CC.lowerBetaLimit,
              set: (CC, zC) => {
                CC.lowerBetaLimit = zC
              }
            },
            metadata: bC
          }, Wz, Nz), (0, QC.j)(null, null, eC, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "upperBetaLimit" in CC,
              get: CC => CC.upperBetaLimit,
              set: (CC, zC) => {
                CC.upperBetaLimit = zC
              }
            },
            metadata: bC
          }, Mz, gz), (0, QC.j)(null, null, hC, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "lowerRadiusLimit" in CC,
              get: CC => CC.lowerRadiusLimit,
              set: (CC, zC) => {
                CC.lowerRadiusLimit = zC
              }
            },
            metadata: bC
          }, Sz, pz), (0, QC.j)(null, null, KC, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "upperRadiusLimit" in CC,
              get: CC => CC.upperRadiusLimit,
              set: (CC, zC) => {
                CC.upperRadiusLimit = zC
              }
            },
            metadata: bC
          }, Pz, Gz), (0, QC.j)(null, null, YC, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "lowerTargetYLimit" in CC,
              get: CC => CC.lowerTargetYLimit,
              set: (CC, zC) => {
                CC.lowerTargetYLimit = zC
              }
            },
            metadata: bC
          }, Rz, Az), (0, QC.j)(null, null, dC, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: CC => "inertialPanningX" in CC,
              get: CC => CC.inertialPanningX,
              set: (CC, zC) => {
                CC.inertialPanningX = zC
              }
            },
            metadata: bC
          }, xz, Jz), (0, QC.j)(null, null, mC, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: CC => "inertialPanningY" in CC,
              get: CC => CC.inertialPanningY,
              set: (CC, zC) => {
                CC.inertialPanningY = zC
              }
            },
            metadata: bC
          }, Iz, iz), (0, QC.j)(null, null, HC, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: CC => "pinchToPanMaxDistance" in CC,
              get: CC => CC.pinchToPanMaxDistance,
              set: (CC, zC) => {
                CC.pinchToPanMaxDistance = zC
              }
            },
            metadata: bC
          }, vz, ez), (0, QC.j)(null, null, lC, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: CC => "panningDistanceLimit" in CC,
              get: CC => CC.panningDistanceLimit,
              set: (CC, zC) => {
                CC.panningDistanceLimit = zC
              }
            },
            metadata: bC
          }, hz, Kz), (0, QC.j)(null, null, XC, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: CC => "panningOriginTarget" in CC,
              get: CC => CC.panningOriginTarget,
              set: (CC, zC) => {
                CC.panningOriginTarget = zC
              }
            },
            metadata: bC
          }, Yz, dz), (0, QC.j)(null, null, TC, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: CC => "zoomOnFactor" in CC,
              get: CC => CC.zoomOnFactor,
              set: (CC, zC) => {
                CC.zoomOnFactor = zC
              }
            },
            metadata: bC
          }, mz, Hz), (0, QC.j)(null, null, aC, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "targetScreenOffset" in CC,
              get: CC => CC.targetScreenOffset,
              set: (CC, zC) => {
                CC.targetScreenOffset = zC
              }
            },
            metadata: bC
          }, Ez, lz), (0, QC.j)(null, null, tC, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: CC => "allowUpsideDown" in CC,
              get: CC => CC.allowUpsideDown,
              set: (CC, zC) => {
                CC.allowUpsideDown = zC
              }
            },
            metadata: bC
          }, Xz, cz), (0, QC.j)(null, null, DC, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: CC => "useInputToRestoreState" in CC,
              get: CC => CC.useInputToRestoreState,
              set: (CC, zC) => {
                CC.useInputToRestoreState = zC
              }
            },
            metadata: bC
          }, uz, rz), (0, QC.j)(null, null, jC, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: CC => "restoreStateInterpolationFactor" in CC,
              get: CC => CC.restoreStateInterpolationFactor,
              set: (CC, zC) => {
                CC.restoreStateInterpolationFactor = zC
              }
            },
            metadata: bC
          }, sz, Tz), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      TC = !1;
    TC || (TC = !0, oC.d.AddNodeConstructor("ArcRotateCamera", ((CC, zC) => () => new sC(CC, 0, 0, 1, nC.r.Zero(), zC))), (0, lC.d)("BABYLON.ArcRotateCamera", sC))
  },
  40076: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.b
    });
    var QC = ZC(40078);
    (0, QC.e)()
  },
  40078: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      e: () => NC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(37142),
      fC = ZC(40084),
      oC = ZC(40046),
      qC = ZC(37002);
    let FC = (() => {
        var CC;
        let zC, ZC, oC = fC.c,
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        return CC = class extends oC {
          constructor(CC, zC, ZC, wC) {
            super(CC, ZC, wC), this.groundColor = (0, QC.n)(this, qC, new nC.e(0, 0, 0)), this.direction = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, void 0)), (0, QC.n)(this, NC), this.direction = zC || bC.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(CC) {
            return this.direction = bC.r.Normalize(CC.subtract(bC.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZC.x, ZC.y, ZC.z, 0, zC), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zC), this
          }
          transferToNodeMaterialEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return CC.setFloat3(zC, ZC.x, ZC.y, ZC.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = bC.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return fC.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(CC, zC) {
            CC["HEMILIGHT" + zC] = !0
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(oC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.n)()], ZC = [(0, wC.J)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "groundColor" in CC,
              get: CC => CC.groundColor,
              set: (CC, zC) => {
                CC.groundColor = zC
              }
            },
            metadata: bC
          }, qC, FC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: CC => "direction" in CC,
              get: CC => CC.direction,
              set: (CC, zC) => {
                CC.direction = zC
              }
            },
            metadata: bC
          }, WC, NC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      WC = !1;

    function NC() {
      WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
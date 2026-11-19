export const id = 250;
export const ids = [250];
export const modules = {
  40160: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => RD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36473),
      fD = cD(36446),
      bD = cD(36479),
      QD = cD(39356),
      wD = cD(39531),
      SD = cD(39319),
      BD = cD(39054),
      yD = cD(36449);
    class MD {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(DD) {
        this._zoomStopsAnimation = DD
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(DD) {
        this._idleRotationSpeed = DD
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(DD) {
        this._idleRotationWaitTime = DD
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(DD) {
        this._idleRotationSpinupTime = DD
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
      attach(DD) {
        this._attachedCamera = DD;
        const CD = this._attachedCamera.hq();
        this._onPrePointerObservableObserver = CD.onPrePointerObservable.add((DD => {
          DD.type !== SD.c.POINTERDOWN ? DD.type === SD.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const DD = BD.b.Now;
          let CD = 0;
          null != this._lastFrameTime && (CD = DD - this._lastFrameTime), this._lastFrameTime = DD, this._applyUserInteraction();
          const cD = DD - this._lastInteractionTime - this._idleRotationWaitTime,
            ID = Math.max(Math.min(cD / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * ID, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (CD / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const DD = this._attachedCamera.hq();
        this._onPrePointerObservableObserver && DD.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(DD) {
        this._lastInteractionTime = DD ?? BD.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < yD.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let DD = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (DD = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? DD : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = BD.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    cD(40166);
    class tD {
      constructor() {
        this._easingMode = tD.EASINGMODE_EASEIN
      }
      setEasingMode(DD) {
        const CD = Math.min(Math.max(DD, 0), 2);
        this._easingMode = CD
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(DD) {
        throw new Error("You must implement this method")
      }
      ease(DD) {
        switch (this._easingMode) {
          case tD.EASINGMODE_EASEIN:
            return this.easeInCore(DD);
          case tD.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - DD)
        }
        return DD >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - DD))) + .5 : .5 * this.easeInCore(2 * DD)
      }
    }
    tD.EASINGMODE_EASEIN = 0, tD.EASINGMODE_EASEOUT = 1, tD.EASINGMODE_EASEINOUT = 2;
    var ZD = cD(40171);
    class oD {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(DD) {
        if (this._autoTransitionRange === DD) return;
        this._autoTransitionRange = DD;
        const CD = this._attachedCamera;
        CD && (DD ? this._onMeshTargetChangedObserver = CD.onMeshTargetChangedObservable.add((DD => {
          if (DD && (DD.computeWorldMatrix(!0), DD.VJ)) {
            const CD = DD.VJ().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * CD, this.upperRadiusTransitionRange = .05 * CD
          }
        })) : this._onMeshTargetChangedObserver && CD.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(DD) {
        this._attachedCamera = DD, this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(DD) {
        return !!this._attachedCamera && (this._attachedCamera.radius === DD && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(DD) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (oD.EasingFunction.setEasingMode(oD.EasingMode), this._radiusBounceTransition = ZD.d.CreateAnimation("radius", ZD.d.ANIMATIONTYPE_FLOAT, 60, oD.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const CD = ZD.d.TransitionTo("radius", this._attachedCamera.radius + DD, this._attachedCamera, this._attachedCamera.hq(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        CD && this._animatables.push(CD)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    oD.EasingFunction = new class extends tD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = DD
      }
      easeInCore(DD) {
        const CD = Math.max(0, this.amplitude);
        return Math.pow(DD, 3) - DD * CD * Math.sin(3.141592653589793 * DD)
      }
    }(.3), oD.EasingMode = tD.EASINGMODE_EASEOUT;
    class vD {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new iD.c, this._mode = vD.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(DD) {
        this._mode = DD
      }
      get mode() {
        return this._mode
      }
      set radiusScale(DD) {
        this._radiusScale = DD
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(DD) {
        this._positionScale = DD
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(DD) {
        this._defaultElevation = DD
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(DD) {
        this._elevationReturnTime = DD
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(DD) {
        this._elevationReturnWaitTime = DD
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(DD) {
        this._zoomStopsAnimation = DD
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(DD) {
        this._framingTime = DD
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(DD) {
        this._attachedCamera = DD;
        const CD = this._attachedCamera.hq();
        vD.EasingFunction.setEasingMode(vD.EasingMode), this._onPrePointerObservableObserver = CD.onPrePointerObservable.add((DD => {
          DD.type !== SD.c.POINTERDOWN ? DD.type === SD.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = DD.onMeshTargetChangedObservable.add((DD => {
          DD && DD.VJ && this.zoomOnMesh(DD, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = DD.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const DD = this._attachedCamera.hq();
        this._onPrePointerObservableObserver && DD.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        DD.computeWorldMatrix(!0);
        const ID = DD.VJ().boundingBox;
        this.zoomOnBoundingInfo(ID.minimumWorld, ID.maximumWorld, CD, cD)
      }
      zoomOnMeshHierarchy(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        DD.computeWorldMatrix(!0);
        const ID = DD.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(ID.min, ID.max, CD, cD)
      }
      zoomOnMeshesHierarchy(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ID = new fD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          pD = new fD.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let iD = 0; iD < DD.length; iD++) {
          const CD = DD[iD].getHierarchyBoundingVectors(!0);
          fD.p.CheckExtends(CD.min, ID, pD), fD.p.CheckExtends(CD.max, ID, pD)
        }
        this.zoomOnBoundingInfo(ID, pD, CD, cD)
      }
      zoomOnBoundingInfo(DD, CD) {
        let cD, ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const iD = DD.y,
          bD = iD + (CD.y - iD) * this._positionScale,
          QD = CD.subtract(DD).scale(.5);
        if (!isFinite(bD)) return !1;
        if (ID) cD = new fD.p(0, bD, 0);
        else {
          const CD = DD.add(QD);
          cD = new fD.p(CD.x, bD, CD.z)
        }
        this._vectorTransition || (this._vectorTransition = ZD.d.CreateAnimation("target", ZD.d.ANIMATIONTYPE_VECTOR3, 60, vD.EasingFunction)), this._betaIsAnimating = !0;
        let wD = ZD.d.TransitionTo("target", cD, this._attachedCamera, this._attachedCamera.hq(), 60, this._vectorTransition, this._framingTime);
        wD && this._animatables.push(wD);
        let SD = 0;
        if (this._mode === vD.FitFrustumSidesMode) {
          const cD = this._calculateLowerRadiusFromModelBoundingSphere(DD, CD);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = QD.length() + this._attachedCamera.minZ), SD = cD
        } else this._mode === vD.IgnoreBoundsSizeMode && (SD = this._calculateLowerRadiusFromModelBoundingSphere(DD, CD), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const cD = CD.subtract(DD).length();
          this._attachedCamera.panningSensibility = 5e3 / cD, this._attachedCamera.wheelPrecision = 100 / SD
        }
        return this._radiusTransition || (this._radiusTransition = ZD.d.CreateAnimation("radius", ZD.d.ANIMATIONTYPE_FLOAT, 60, vD.EasingFunction)), wD = ZD.d.TransitionTo("radius", SD, this._attachedCamera, this._attachedCamera.hq(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), pD && pD(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), wD && this._animatables.push(wD), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(DD, CD) {
        const cD = this._attachedCamera;
        if (!cD) return 0;
        let ID = cD._calculateLowerRadiusFromModelBoundingSphere(DD, CD, this._radiusScale);
        return cD.lowerRadiusLimit && this._mode === vD.IgnoreBoundsSizeMode && (ID = ID < cD.lowerRadiusLimit ? cD.lowerRadiusLimit : ID), cD.upperRadiusLimit && (ID = ID > cD.upperRadiusLimit ? cD.upperRadiusLimit : ID), ID
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const DD = BD.b.Now - this._lastInteractionTime,
          CD = .5 * Math.PI - this._defaultElevation,
          cD = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cD && DD >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = ZD.d.CreateAnimation("beta", ZD.d.ANIMATIONTYPE_FLOAT, 60, vD.EasingFunction));
          const DD = ZD.d.TransitionTo("beta", CD, this._attachedCamera, this._attachedCamera.hq(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          DD && this._animatables.push(DD)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = BD.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    vD.EasingFunction = new class extends tD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = DD
      }
      easeInCore(DD) {
        return this.exponent <= 0 ? DD : (Math.exp(this.exponent * DD) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, vD.EasingMode = tD.EASINGMODE_EASEINOUT, vD.IgnoreBoundsSizeMode = 0, vD.FitFrustumSidesMode = 1;
    var ND = cD(39351),
      gD = cD(39349),
      XD = cD(39380),
      mD = cD(39245);
    let nD = (() => {
        var DD;
        let CD, cD = [],
          iD = [];
        return DD = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, ID.m)(this, cD, [0, 1, 2]), this._pointerInput = (0, ID.m)(this, iD)
          }
          attachControl(DD) {
            DD = mD.g.BackCompatCameraNoPreventDefault(arguments);
            const CD = this.camera.DZ(),
              cD = CD.getInputElement();
            let ID = 0,
              pD = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = iD => {
              const fD = iD.event,
                bD = "touch" === fD.pointerType;
              if (iD.type !== SD.c.POINTERMOVE && -1 === this.buttons.indexOf(fD.button)) return;
              const QD = fD.target;
              if (this._altKey = fD.altKey, this._ctrlKey = fD.ctrlKey, this._metaKey = fD.metaKey, this._shiftKey = fD.shiftKey, this._buttonsPressed = fD.buttons, CD.isPointerLock) {
                const DD = fD.movementX,
                  CD = fD.movementY;
                this.onTouch(null, DD, CD), this._pointA = null, this._pointB = null
              } else {
                if (iD.type !== SD.c.POINTERDOWN && iD.type !== SD.c.POINTERDOUBLETAP && bD && this._pointA?.pointerId !== fD.pointerId && this._pointB?.pointerId !== fD.pointerId) return;
                if (iD.type !== SD.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !bD)
                  if (iD.type === SD.c.POINTERDOUBLETAP) this.onDoubleTap(fD.pointerType, fD);
                  else if (iD.type !== SD.c.POINTERUP || this._currentMousePointerIdDown !== fD.pointerId && !bD) {
                  if (iD.type === SD.c.POINTERMOVE)
                    if (DD || fD.preventDefault(), this._pointA && null === this._pointB) {
                      const DD = fD.clientX - this._pointA.x,
                        CD = fD.clientY - this._pointA.y;
                      this._pointA.x = fD.clientX, this._pointA.y = fD.clientY, this.onTouch(this._pointA, DD, CD)
                    } else if (this._pointA && this._pointB) {
                    const DD = this._pointA.pointerId === fD.pointerId ? this._pointA : this._pointB;
                    DD.x = fD.clientX, DD.y = fD.clientY;
                    const CD = this._pointA.x - this._pointB.x,
                      cD = this._pointA.y - this._pointB.y,
                      bD = CD * CD + cD * cD,
                      QD = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: fD.pointerId,
                        type: iD.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, ID, bD, pD, QD), pD = QD, ID = bD
                  }
                } else {
                  try {
                    QD?.releasePointerCapture(fD.pointerId)
                  } catch (wD) {}
                  bD || (this._pointB = null), CD._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == fD.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == fD.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== ID || pD) && (this.onMultiTouch(this._pointA, this._pointB, ID, 0, pD, null), ID = 0, pD = null), this._currentMousePointerIdDown = -1, this.onButtonUp(fD), DD || fD.preventDefault()
                } else {
                  try {
                    QD?.setPointerCapture(fD.pointerId)
                  } catch (wD) {}
                  if (null === this._pointA) this._pointA = {
                    x: fD.clientX,
                    y: fD.clientY,
                    pointerId: fD.pointerId,
                    type: fD.pointerType,
                    button: fD.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: fD.clientX,
                      y: fD.clientY,
                      pointerId: fD.pointerId,
                      type: fD.pointerType,
                      button: fD.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || bD || (this._currentMousePointerIdDown = fD.pointerId), this.onButtonDown(fD), DD || (fD.preventDefault(), cD && cD.focus())
                }
              }
            }, this._observer = this.camera.hq()._inputManager._addCameraPointerObserver(this._pointerInput, SD.c.POINTERDOWN | SD.c.POINTERUP | SD.c.POINTERMOVE | SD.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, ID = 0, pD = null, this.onLostFocus()
            }, this._contextMenuBind = DD => this.onContextMenu(DD), cD && cD.addEventListener("contextmenu", this._contextMenuBind, !1);
            const iD = this.camera.hq().DZ().getHostWindow();
            iD && mD.g.RegisterTopRootEvents(iD, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const DD = this.camera.hq().DZ().getHostWindow();
              DD && mD.g.UnregisterTopRootEvents(DD, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.hq()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const DD = this.camera.hq().DZ().getInputElement();
                DD && DD.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(DD, CD) {}
          onTouch(DD, CD, cD) {}
          onMultiTouch(DD, CD, cD, ID, pD, iD) {}
          onContextMenu(DD) {
            DD.preventDefault()
          }
          onButtonDown(DD) {}
          onButtonUp(DD) {}
          onLostFocus() {}
        }, (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          CD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: DD => "buttons" in DD,
              get: DD => DD.buttons,
              set: (DD, CD) => {
                DD.buttons = CD
              }
            },
            metadata: fD
          }, cD, iD), fD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          })
        })(), DD
      })(),
      OD = (() => {
        var DD;
        let CD, cD, iD, fD = nD,
          bD = [],
          QD = [],
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        return DD = class extends fD {
          constructor() {
            super(...arguments), this.pinchZoom = (0, ID.m)(this, bD, !0), this.multiTouchPanning = ((0, ID.m)(this, QD), (0, ID.m)(this, wD, !0)), this.multiTouchPanAndZoom = ((0, ID.m)(this, SD), (0, ID.m)(this, BD, !0)), this._isPinching = ((0, ID.m)(this, yD), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(DD, CD) {}
          _computeMultiTouchPanning(DD, CD) {}
          onMultiTouch(DD, CD, cD, ID, pD, iD) {
            0 === cD && null === pD || 0 === ID && null === iD || (this.multiTouchPanAndZoom ? (this._computePinchZoom(cD, ID), this._computeMultiTouchPanning(pD, iD)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(cD, ID), this._isPinching = !0) : this._computeMultiTouchPanning(pD, iD)) : this.multiTouchPanning ? this._computeMultiTouchPanning(pD, iD) : this.pinchZoom && this._computePinchZoom(cD, ID))
          }
          onButtonUp(DD) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(fD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchZoom" in DD,
              get: DD => DD.pinchZoom,
              set: (DD, CD) => {
                DD.pinchZoom = CD
              }
            },
            metadata: MD
          }, bD, QD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: DD => "multiTouchPanning" in DD,
              get: DD => DD.multiTouchPanning,
              set: (DD, CD) => {
                DD.multiTouchPanning = CD
              }
            },
            metadata: MD
          }, wD, SD), (0, ID.k)(null, null, iD, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "multiTouchPanAndZoom" in DD,
              get: DD => DD.multiTouchPanAndZoom,
              set: (DD, CD) => {
                DD.multiTouchPanAndZoom = CD
              }
            },
            metadata: MD
          }, BD, yD), MD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MD
          })
        })(), DD
      })(),
      PD = (() => {
        var DD;
        let CD, cD, iD, fD, bD, QD, wD, SD = OD,
          BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [],
          vD = [],
          ND = [],
          gD = [],
          XD = [],
          mD = [],
          nD = [],
          PD = [],
          HD = [];
        return DD = class extends SD {
          constructor() {
            super(...arguments), this.buttons = (0, ID.m)(this, BD, [0, 1, 2]), this.angularSensibilityX = ((0, ID.m)(this, yD), (0, ID.m)(this, MD, 1e3)), this.angularSensibilityY = ((0, ID.m)(this, tD), (0, ID.m)(this, ZD, 1e3)), this.pinchPrecision = ((0, ID.m)(this, oD), (0, ID.m)(this, vD, 12)), this.pinchDeltaPercentage = ((0, ID.m)(this, ND), (0, ID.m)(this, gD, 0)), this.useNaturalPinchZoom = ((0, ID.m)(this, XD), (0, ID.m)(this, mD, !1)), this.panningSensibility = ((0, ID.m)(this, nD), (0, ID.m)(this, PD, 1e3)), this.pinchInwards = ((0, ID.m)(this, HD), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(DD, CD) {
            if (DD && CD) {
              const cD = CD.x - DD.x,
                ID = CD.y - DD.y,
                pD = this.camera.movement.input.getEntry("pointer", "pan"),
                iD = pD?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== iD && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -cD * iD, this.camera.movement.panAccumulatedPixels.y += ID * iD)
            }
          }
          _computePinchZoom(CD, cD) {
            const ID = this.camera.radius || DD.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = ID * Math.sqrt(CD) / Math.sqrt(cD);
            else if (this.pinchDeltaPercentage) {
              const DD = .001 * (cD - CD) * ID * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += DD
            } else {
              const DD = (cD - CD) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += DD
            }
          }
          onTouch(DD, CD, cD) {
            const ID = this._activeEntry ?? (this.camera.DZ().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (ID)
              if ("pan" === ID.interaction) {
                const DD = ID.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== DD && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -CD * DD, this.camera.movement.panAccumulatedPixels.y += cD * DD)
              } else if ("rotate" === ID.interaction) {
              const DD = ID.YG ?? ID.sensitivity ?? 1 / this.angularSensibilityX,
                pD = ID.WG ?? ID.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -CD * DD, this.camera.movement.rotationAccumulatedPixels.y += -cD * pD
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(DD, CD, cD, ID, pD, iD) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(ID) - Math.sqrt(cD)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(DD, CD, cD, ID, pD, iD)
          }
          onButtonDown(DD) {
            this._pointerConditions.button = DD.button, this._pointerModifiers.ctrl = DD.ctrlKey, this._pointerModifiers.alt = DD.altKey, this._pointerModifiers.shift = DD.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(DD)
          }
          onButtonUp(DD) {
            this._activeEntry = null, super.onButtonUp(DD)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const OD = "function" === typeof Symbol && Symbol.metadata ? Object.create(SD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], fD = [(0, pD.G)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: DD => "buttons" in DD,
              get: DD => DD.buttons,
              set: (DD, CD) => {
                DD.buttons = CD
              }
            },
            metadata: OD
          }, BD, yD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: DD => "angularSensibilityX" in DD,
              get: DD => DD.angularSensibilityX,
              set: (DD, CD) => {
                DD.angularSensibilityX = CD
              }
            },
            metadata: OD
          }, MD, tD), (0, ID.k)(null, null, iD, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: DD => "angularSensibilityY" in DD,
              get: DD => DD.angularSensibilityY,
              set: (DD, CD) => {
                DD.angularSensibilityY = CD
              }
            },
            metadata: OD
          }, ZD, oD), (0, ID.k)(null, null, fD, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchPrecision" in DD,
              get: DD => DD.pinchPrecision,
              set: (DD, CD) => {
                DD.pinchPrecision = CD
              }
            },
            metadata: OD
          }, vD, ND), (0, ID.k)(null, null, bD, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchDeltaPercentage" in DD,
              get: DD => DD.pinchDeltaPercentage,
              set: (DD, CD) => {
                DD.pinchDeltaPercentage = CD
              }
            },
            metadata: OD
          }, gD, XD), (0, ID.k)(null, null, QD, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: DD => "useNaturalPinchZoom" in DD,
              get: DD => DD.useNaturalPinchZoom,
              set: (DD, CD) => {
                DD.useNaturalPinchZoom = CD
              }
            },
            metadata: OD
          }, mD, nD), (0, ID.k)(null, null, wD, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningSensibility" in DD,
              get: DD => DD.panningSensibility,
              set: (DD, CD) => {
                DD.panningSensibility = CD
              }
            },
            metadata: OD
          }, PD, HD), OD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OD
          })
        })(), DD.MinimumRadiusForPinch = .001, DD
      })();
    XD.c.ArcRotateCameraPointersInput = PD;
    var HD = cD(39328);
    let UD = (() => {
      var DD;
      let CD, cD, iD, bD, QD, wD, SD, BD, yD, MD, tD, ZD = [],
        oD = [],
        vD = [],
        ND = [],
        gD = [],
        XD = [],
        nD = [],
        OD = [],
        PD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [];
      return DD = class {
        constructor() {
          this.camera = (0, ID.m)(this, ZD), this.keysUp = (0, ID.m)(this, oD, [38]), this.keysDown = ((0, ID.m)(this, vD), (0, ID.m)(this, ND, [40])), this.keysLeft = ((0, ID.m)(this, gD), (0, ID.m)(this, XD, [37])), this.keysRight = ((0, ID.m)(this, nD), (0, ID.m)(this, OD, [39])), this.keysReset = ((0, ID.m)(this, PD), (0, ID.m)(this, UD, [220])), this.keysZoomIn = ((0, ID.m)(this, xD), (0, ID.m)(this, qD, [187, 107])), this.keysZoomOut = ((0, ID.m)(this, JD), (0, ID.m)(this, KD, [189, 109])), this.panningSensibility = ((0, ID.m)(this, aD), (0, ID.m)(this, VD, 50)), this.zoomingSensibility = ((0, ID.m)(this, zD), (0, ID.m)(this, jD, 25)), this.angularSpeed = ((0, ID.m)(this, lD), (0, ID.m)(this, LD, .01)), this._useAltToZoom = ((0, ID.m)(this, TD), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new fD.n, this._panDirection = new fD.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(DD) {
          this._useAltToZoom = DD, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const DD = this.camera.movement.input,
            CD = DD.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && CD ? DD.inputMap.splice(DD.inputMap.indexOf(CD), 1) : this._useAltToZoom && !CD && DD.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(DD) {
          DD = mD.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hq(), this._engine = this._scene.DZ(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((CD => {
            const cD = CD.event;
            if (!cD.metaKey)
              if (CD.type === HD.c.KEYDOWN) {
                if (this._ctrlPressed = cD.ctrlKey, this._altPressed = cD.altKey, -1 !== this.keysUp.indexOf(cD.keyCode) || -1 !== this.keysDown.indexOf(cD.keyCode) || -1 !== this.keysLeft.indexOf(cD.keyCode) || -1 !== this.keysRight.indexOf(cD.keyCode) || -1 !== this.keysReset.indexOf(cD.keyCode) || -1 !== this.keysZoomIn.indexOf(cD.keyCode) || -1 !== this.keysZoomOut.indexOf(cD.keyCode)) {
                  -1 === this._keys.indexOf(cD.keyCode) && this._keys.push(cD.keyCode), cD.preventDefault && (DD || cD.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(cD.keyCode) || -1 !== this.keysDown.indexOf(cD.keyCode) || -1 !== this.keysLeft.indexOf(cD.keyCode) || -1 !== this.keysRight.indexOf(cD.keyCode) || -1 !== this.keysReset.indexOf(cD.keyCode) || -1 !== this.keysZoomIn.indexOf(cD.keyCode) || -1 !== this.keysZoomOut.indexOf(cD.keyCode)) {
              const CD = this._keys.indexOf(cD.keyCode);
              CD >= 0 && this._keys.splice(CD, 1), cD.preventDefault && (DD || cD.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const DD = this.camera,
              CD = DD.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const cD = this._rotateDirection.set(0, 0),
              ID = this._panDirection.set(0, 0);
            let pD = 0,
              iD = 0;
            for (let fD = 0; fD < this._keys.length; fD++) {
              const bD = this._keys[fD];
              if (this._keyboardConditions.key = bD, -1 === this.keysReset.indexOf(bD)) {
                const DD = CD.resolveInteraction("keyboard", this._keyboardConditions);
                if (DD)
                  if ("pan" === DD.interaction) iD = Math.max(iD, DD.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(bD) ? ID.x -= 1 : -1 !== this.keysRight.indexOf(bD) ? ID.x += 1 : -1 !== this.keysUp.indexOf(bD) ? ID.y += 1 : -1 !== this.keysDown.indexOf(bD) && (ID.y -= 1);
                  else if ("zoom" === DD.interaction) {
                  const cD = DD.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(bD) || -1 !== this.keysZoomIn.indexOf(bD) ? CD.handlers.zoom(cD) : -1 === this.keysDown.indexOf(bD) && -1 === this.keysZoomOut.indexOf(bD) || CD.handlers.zoom(-cD)
                } else "rotate" === DD.interaction && (pD = Math.max(pD, DD.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(bD) ? cD.x -= 1 : -1 !== this.keysRight.indexOf(bD) ? cD.x += 1 : -1 !== this.keysUp.indexOf(bD) ? cD.y -= 1 : -1 !== this.keysDown.indexOf(bD) && (cD.y += 1))
              } - 1 !== this.keysReset.indexOf(bD) && DD.useInputToRestoreState && DD.restoreState()
            }
            0 === cD.x && 0 === cD.y || (cD.normalize().scaleInPlace(pD), CD.handlers.rotate(cD.x, cD.y)), 0 === ID.x && 0 === ID.y || (ID.normalize().scaleInPlace(iD), CD.handlers.pan(ID.x, ID.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.G)()], yD = [(0, pD.G)()], MD = [(0, pD.G)()], tD = [(0, pD.G)()], (0, ID.k)(DD, null, tD, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAltToZoom" in DD,
            get: DD => DD.useAltToZoom
          },
          metadata: fD
        }, null, ZD), (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUp" in DD,
            get: DD => DD.keysUp,
            set: (DD, CD) => {
              DD.keysUp = CD
            }
          },
          metadata: fD
        }, oD, vD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDown" in DD,
            get: DD => DD.keysDown,
            set: (DD, CD) => {
              DD.keysDown = CD
            }
          },
          metadata: fD
        }, ND, gD), (0, ID.k)(null, null, iD, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysLeft" in DD,
            get: DD => DD.keysLeft,
            set: (DD, CD) => {
              DD.keysLeft = CD
            }
          },
          metadata: fD
        }, XD, nD), (0, ID.k)(null, null, bD, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRight" in DD,
            get: DD => DD.keysRight,
            set: (DD, CD) => {
              DD.keysRight = CD
            }
          },
          metadata: fD
        }, OD, PD), (0, ID.k)(null, null, QD, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysReset" in DD,
            get: DD => DD.keysReset,
            set: (DD, CD) => {
              DD.keysReset = CD
            }
          },
          metadata: fD
        }, UD, xD), (0, ID.k)(null, null, wD, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysZoomIn" in DD,
            get: DD => DD.keysZoomIn,
            set: (DD, CD) => {
              DD.keysZoomIn = CD
            }
          },
          metadata: fD
        }, qD, JD), (0, ID.k)(null, null, SD, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysZoomOut" in DD,
            get: DD => DD.keysZoomOut,
            set: (DD, CD) => {
              DD.keysZoomOut = CD
            }
          },
          metadata: fD
        }, KD, aD), (0, ID.k)(null, null, BD, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "panningSensibility" in DD,
            get: DD => DD.panningSensibility,
            set: (DD, CD) => {
              DD.panningSensibility = CD
            }
          },
          metadata: fD
        }, VD, zD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "zoomingSensibility" in DD,
            get: DD => DD.zoomingSensibility,
            set: (DD, CD) => {
              DD.zoomingSensibility = CD
            }
          },
          metadata: fD
        }, jD, lD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: DD => "angularSpeed" in DD,
            get: DD => DD.angularSpeed,
            set: (DD, CD) => {
              DD.angularSpeed = CD
            }
          },
          metadata: fD
        }, LD, TD), fD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fD
        })
      })(), DD
    })();
    XD.c.ArcRotateCameraKeyboardMoveInput = UD;
    var xD = cD(37167),
      qD = cD(39334);
    let JD = (() => {
      var DD;
      let CD, cD, iD, QD = [],
        wD = [],
        BD = [],
        MD = [],
        tD = [],
        ZD = [];
      return DD = class {
        constructor() {
          this.wheelPrecision = (0, ID.m)(this, QD, 3), this.zoomToMouseLocation = ((0, ID.m)(this, wD), (0, ID.m)(this, BD, !1)), this.wheelDeltaPercentage = ((0, ID.m)(this, MD), (0, ID.m)(this, tD, 0)), this.customComputeDeltaFromMouseWheel = ((0, ID.m)(this, ZD), null), this._viewOffset = new fD.p(0, 0, 0), this._globalOffset = new fD.p(0, 0, 0), this._inertialPanning = fD.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(DD, CD) {
          let cD;
          const ID = .01 * DD * this.wheelDeltaPercentage * CD;
          return cD = DD > 0 ? ID / (1 + this.wheelDeltaPercentage) : ID * (1 + this.wheelDeltaPercentage), cD
        }
        attachControl(DD) {
          DD = mD.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = CD => {
            if (CD.type !== SD.c.POINTERWHEEL) return;
            const cD = CD.event;
            let ID;
            const pD = cD.deltaMode === qD.c.DOM_DELTA_LINE ? 40 : 1,
              iD = -cD.deltaY * pD;
            if (this.customComputeDeltaFromMouseWheel) ID = this.customComputeDeltaFromMouseWheel(iD, this, cD);
            else if (this.wheelDeltaPercentage) {
              if (ID = this._computeDeltaFromMouseWheelLegacyEvent(iD, this.camera.radius), ID > 0) {
                const DD = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let CD = this.camera.radius,
                  cD = DD + ID;
                for (let ID = 0; ID < 20 && !(CD <= cD) && !(Math.abs(cD * this.camera.inertia) < .001); ID++) CD -= cD, cD *= this.camera.inertia;
                CD = (0, bD.Clamp)(CD, 0, Number.MAX_VALUE), ID = this._computeDeltaFromMouseWheelLegacyEvent(iD, CD)
              }
            } else {
              const DD = this.camera.movement.input.getEntry("wheel", "zoom");
              ID = iD * (DD?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            ID && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(ID)) : this.camera.movement.zoomAccumulatedPixels += ID), cD.preventDefault && (DD || cD.preventDefault())
          }, this._observer = this.camera.hq()._inputManager._addCameraPointerObserver(this._wheel, SD.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.YF(0)
        }
        detachControl() {
          this._observer && (this.camera.hq()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const DD = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(DD.inertialAlphaOffset) + Math.abs(DD.inertialBetaOffset) + Math.abs(DD.inertialRadiusOffset)) {
            this._updateHitPlane(), DD.target.addInPlace(this._inertialPanning), DD.radius -= this._zoomToMouseRadiusOffset;
            const CD = DD.movement.getFrameIndependentDecay(DD.inertia);
            this._inertialPanning.scaleInPlace(CD), this._zoomToMouseRadiusOffset *= CD, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < yD.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const DD = this.camera,
            CD = DD.target.subtract(DD.position);
          this._hitPlane = xD.c.FromPositionAndNormal(DD.target, CD)
        }
        _getPosition() {
          const DD = this.camera,
            CD = DD.hq(),
            cD = CD.createPickingRay(CD.pointerX, CD.pointerY, fD.d.Identity(), DD, !1);
          0 === DD.targetScreenOffset.x && 0 === DD.targetScreenOffset.y || (this._viewOffset.set(DD.targetScreenOffset.x, DD.targetScreenOffset.y, 0), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), this._globalOffset = fD.p.TransformNormal(this._viewOffset, DD._cameraTransformMatrix), cD.origin.addInPlace(this._globalOffset));
          let ID = 0;
          return this._hitPlane && (ID = cD.intersectsPlane(this._hitPlane) ?? 0), cD.origin.addInPlace(cD.direction.scaleInPlace(ID))
        }
        _zoomToMouse(DD) {
          const CD = this.camera,
            cD = 1 - CD.inertia,
            ID = CD.movement.getFrameIndependentInputScale(CD.inertia);
          if (CD.lowerRadiusLimit) {
            const pD = CD.lowerRadiusLimit ?? 0;
            CD.radius - (this._zoomToMouseRadiusOffset + DD * ID) / cD < pD && (DD = ((CD.radius - pD) * cD - this._zoomToMouseRadiusOffset) / ID)
          }
          if (CD.upperRadiusLimit) {
            const pD = CD.upperRadiusLimit ?? 0;
            CD.radius - (this._zoomToMouseRadiusOffset + DD * ID) / cD > pD && (DD = ((CD.radius - pD) * cD - this._zoomToMouseRadiusOffset) / ID)
          }
          const pD = DD / cD / CD.radius,
            iD = this._getPosition(),
            bD = fD.l.cZ[6];
          iD.subtractToRef(CD.target, bD), bD.scaleInPlace(pD), bD.scaleInPlace(cD), bD.scaleInPlace(ID), this._inertialPanning.addInPlace(bD), this._zoomToMouseRadiusOffset += DD * ID
        }
        _zeroIfClose(DD) {
          Math.abs(DD.x) < yD.c && (DD.x = 0), Math.abs(DD.y) < yD.c && (DD.y = 0), Math.abs(DD.z) < yD.c && (DD.z = 0)
        }
      }, (() => {
        const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecision" in DD,
            get: DD => DD.wheelPrecision,
            set: (DD, CD) => {
              DD.wheelPrecision = CD
            }
          },
          metadata: fD
        }, QD, wD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: DD => "zoomToMouseLocation" in DD,
            get: DD => DD.zoomToMouseLocation,
            set: (DD, CD) => {
              DD.zoomToMouseLocation = CD
            }
          },
          metadata: fD
        }, BD, MD), (0, ID.k)(null, null, iD, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelDeltaPercentage" in DD,
            get: DD => DD.wheelDeltaPercentage,
            set: (DD, CD) => {
              DD.wheelDeltaPercentage = CD
            }
          },
          metadata: fD
        }, tD, ZD), fD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fD
        })
      })(), DD
    })();
    XD.c.ArcRotateCameraMouseWheelInput = JD;
    var KD, aD, VD = cD(39027);
    class zD extends XD.g {
      constructor(DD) {
        super(DD)
      }
      addMouseWheel() {
        return this.add(new JD), this
      }
      addPointers() {
        return this.add(new PD), this
      }
      addKeyboard() {
        return this.add(new UD), this
      }
    }(KD = zD.prototype).addVRDeviceOrientation ?? (KD.addVRDeviceOrientation = (0, VD.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (aD = zD.prototype).addGamepad ?? (aD.addGamepad = (0, VD.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var jD = cD(36488),
      lD = cD(39368),
      LD = cD(39373);
    class TD extends lD.c {
      constructor(DD, CD, cD) {
        super(DD, CD, cD), this.input = new LD.b({
          pan: (DD, CD) => {
            this.panAccumulatedPixels.x += DD, this.panAccumulatedPixels.y += CD
          },
          rotate: (DD, CD) => {
            this.rotationAccumulatedPixels.x += DD, this.rotationAccumulatedPixels.y += CD
          },
          zoom: DD => {
            this.zoomAccumulatedPixels += DD
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

    function GD(DD, CD) {
      return isNaN(DD) ? CD : DD
    }
    let RD = (() => {
        var DD;
        let CD, cD, QD, SD, BD, tD, ZD, XD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD, VD, jD, lD, LD, RD, kD, dD, YD, WD, sD, ED = gD.e,
          eD = [],
          uD = [],
          hD = [],
          rD = [],
          AD = [],
          FD = [],
          DC = [],
          CC = [],
          cC = [],
          IC = [],
          pC = [],
          iC = [],
          fC = [],
          bC = [],
          QC = [],
          wC = [],
          SC = [],
          BC = [],
          yC = [],
          MC = [],
          tC = [],
          ZC = [],
          oC = [],
          vC = [],
          NC = [],
          gC = [],
          XC = [],
          mC = [],
          nC = [],
          OC = [],
          PC = [],
          HC = [],
          UC = [],
          xC = [],
          qC = [],
          JC = [],
          KC = [],
          aC = [],
          VC = [],
          zC = [],
          jC = [],
          lC = [],
          LC = [],
          TC = [],
          GC = [],
          RC = [],
          kC = [];
        return DD = class extends ED {
          get target() {
            return this.DW
          }
          set target(DD) {
            this.setTarget(DD)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(DD) {
            DD && this.setTarget(DD)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(DD) {
            this.setPosition(DD)
          }
          set upVector(DD) {
            this._upToYMatrix || (this._yToUpMatrix = new fD.d, this._upToYMatrix = new fD.d, this._upVector = fD.p.Zero()), DD.normalize(), this._upVector.YCD(DD), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            fD.d.RotationAlignToRef(fD.p.UpReadOnly, this._upVector, this._yToUpMatrix), fD.d.RotationAlignToRef(this._upVector, fD.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const DD = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialAlphaOffset(DD) {
            this._inertialAlphaOffset = DD, 0 === DD && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const DD = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialBetaOffset(DD) {
            this._inertialBetaOffset = DD, 0 === DD && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const DD = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(DD) < this._rotationEpsilon ? 0 : DD
          }
          set inertialRadiusOffset(DD) {
            this._inertialRadiusOffset = DD, 0 === DD && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(DD) {
            this._panningInertia = DD, this.movement && (this.movement.panInertia = DD)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(DD) {
            this._inertia = DD, this.movement && (this.movement.rotationInertia = DD, this.movement.zoomInertia = DD)
          }
          get angularSensibilityX() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.angularSensibilityX : 0
          }
          set angularSensibilityX(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.angularSensibilityX = DD)
          }
          get angularSensibilityY() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.angularSensibilityY : 0
          }
          set angularSensibilityY(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.angularSensibilityY = DD)
          }
          get pinchPrecision() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.pinchPrecision : 0
          }
          set pinchPrecision(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.pinchPrecision = DD)
          }
          get pinchDeltaPercentage() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.pinchDeltaPercentage = DD)
          }
          get useNaturalPinchZoom() {
            const DD = this.inputs.attached.pointers;
            return !!DD && DD.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.useNaturalPinchZoom = DD)
          }
          get panningSensibility() {
            const DD = this.inputs.attached.pointers;
            return DD ? DD.panningSensibility : 0
          }
          set panningSensibility(DD) {
            const CD = this.inputs.attached.pointers;
            CD && (CD.panningSensibility = DD)
          }
          get keysUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUp : []
          }
          set keysUp(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysUp = DD)
          }
          get keysDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDown : []
          }
          set keysDown(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysDown = DD)
          }
          get keysLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysLeft : []
          }
          set keysLeft(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysLeft = DD)
          }
          get keysRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRight : []
          }
          set keysRight(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRight = DD)
          }
          get wheelPrecision() {
            const DD = this.inputs.attached.mousewheel;
            return DD ? DD.wheelPrecision : 0
          }
          set wheelPrecision(DD) {
            const CD = this.inputs.attached.mousewheel;
            CD && (CD.wheelPrecision = DD)
          }
          get zoomToMouseLocation() {
            const DD = this.inputs.attached.mousewheel;
            return !!DD && DD.zoomToMouseLocation
          }
          set zoomToMouseLocation(DD) {
            const CD = this.inputs.attached.mousewheel;
            CD && (CD.zoomToMouseLocation = DD)
          }
          get wheelDeltaPercentage() {
            const DD = this.inputs.attached.mousewheel;
            return DD ? DD.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(DD) {
            const CD = this.inputs.attached.mousewheel;
            CD && (CD.wheelDeltaPercentage = DD)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(DD) {
            this._useCtrlForPanningInternal = DD;
            const CD = this.movement.input,
              cD = CD.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !DD && cD ? CD.inputMap.splice(CD.inputMap.indexOf(cD), 1) : DD && !cD && CD.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const ID = CD.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !DD && ID ? CD.inputMap.splice(CD.inputMap.indexOf(ID), 1) : DD && !ID && CD.addEntry({
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
          set _panningMouseButton(DD) {
            this._panningMouseButtonInternal = DD;
            const CD = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            CD && (CD.button = DD)
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
          set useBouncingBehavior(DD) {
            DD !== this.useBouncingBehavior && (DD ? (this._bouncingBehavior = new oD, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(DD) {
            DD !== this.useFramingBehavior && (DD ? (this._framingBehavior = new vD, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(DD) {
            DD !== this.useAutoRotationBehavior && (DD ? (this._autoRotationBehavior = new MD, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(DD, CD, cD, pD, bD, QD) {
            var wD;
            let SD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(DD, fD.p.Zero(), QD, SD), wD = this, this.alpha = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, void 0)), this.beta = ((0, ID.m)(this, hD), (0, ID.m)(this, rD, void 0)), this.radius = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, void 0)), this.overrideCloneAlphaBetaRadius = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, void 0)), this.DW = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, void 0)), this._targetHost = ((0, ID.m)(this, pC), (0, ID.m)(this, iC, void 0)), this._upToYMatrix = (0, ID.m)(this, fC), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, ID.m)(this, bC, null), this.upperAlphaLimit = ((0, ID.m)(this, QC), (0, ID.m)(this, wC, null)), this.lowerBetaLimit = ((0, ID.m)(this, SC), (0, ID.m)(this, BC, .01)), this.upperBetaLimit = ((0, ID.m)(this, yC), (0, ID.m)(this, MC, Math.PI - .01)), this.lowerRadiusLimit = ((0, ID.m)(this, tC), (0, ID.m)(this, ZC, null)), this.upperRadiusLimit = ((0, ID.m)(this, oC), (0, ID.m)(this, vC, null)), this.lowerTargetYLimit = ((0, ID.m)(this, NC), (0, ID.m)(this, gC, -1 / 0)), this.inertialPanningX = ((0, ID.m)(this, XC), (0, ID.m)(this, mC, 0)), this.inertialPanningY = ((0, ID.m)(this, nC), (0, ID.m)(this, OC, 0)), this.pinchToPanMaxDistance = ((0, ID.m)(this, PC), (0, ID.m)(this, HC, 20)), this.panningDistanceLimit = ((0, ID.m)(this, UC), (0, ID.m)(this, xC, null)), this.panningOriginTarget = ((0, ID.m)(this, qC), (0, ID.m)(this, JC, fD.p.Zero())), this._panningInertia = ((0, ID.m)(this, KC), .9), this._inertia = .9, this.zoomOnFactor = (0, ID.m)(this, aC, 1), this.targetScreenOffset = ((0, ID.m)(this, VC), (0, ID.m)(this, zC, fD.n.Zero())), this.allowUpsideDown = ((0, ID.m)(this, jC), (0, ID.m)(this, lC, !0)), this.useInputToRestoreState = ((0, ID.m)(this, LC), (0, ID.m)(this, TC, !0)), this.restoreStateInterpolationFactor = ((0, ID.m)(this, GC), (0, ID.m)(this, RC, 0)), this._currentInterpolationFactor = ((0, ID.m)(this, kC), 0), this._viewMatrix = new fD.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new fD.p(1, 1, 0), this._transformedDirection = new fD.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new iD.c, this.checkCollisions = !1, this.collisionRadius = new fD.p(.5, .5, .5), this._previousPosition = fD.p.Zero(), this._collisionVelocity = fD.p.Zero(), this._newPosition = fD.p.Zero(), this._computationVector = fD.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new fD.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new fD.n(NaN, NaN), this._onCollisionPositionChange = function(DD, CD) {
              let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              cD ? (wD.setPosition(CD), wD.xy && wD.xy(cD)) : wD._previousPosition.YCD(wD._position);
              const ID = Math.cos(wD.alpha),
                pD = Math.sin(wD.alpha),
                iD = Math.cos(wD.beta);
              let fD = Math.sin(wD.beta);
              0 === fD && (fD = 1e-4);
              const bD = wD._getTargetPosition();
              wD._computationVector.K4(wD.radius * ID * fD, wD.radius * iD, wD.radius * pD * fD), bD.addToRef(wD._computationVector, wD._newPosition), wD._position.YCD(wD._newPosition);
              let QD = wD.upVector;
              wD.allowUpsideDown && wD.beta < 0 && (QD = QD.clone(), QD = QD.pp()), wD._computeViewMatrix(wD._position, bD, QD), wD._viewMatrix.addAtIndex(12, wD.targetScreenOffset.x), wD._viewMatrix.addAtIndex(13, wD.targetScreenOffset.y), wD._collisionTriggered = !1
            }, this.DW = fD.p.Zero(), bD && this.setTarget(bD), this.alpha = CD, this.beta = cD, this.radius = pD, this.getViewMatrix(), this.inputs = new zD(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new TD(this.hq(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.DW = new fD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = fD.n.Zero()
          }
          _updateCache(DD) {
            DD || super._updateCache(), this._cache.DW.YCD(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.YCD(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const DD = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? DD.addToRef(this._targetBoundingCenter, this.DW) : this.DW.YCD(DD)
            }
            const DD = this._getLockedTargetPosition();
            return DD || this.DW
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > yD.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              iD = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != iD ? this._currentInterpolationFactor = iD : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = GD(DD, this._goalAlpha), this._goalBeta = GD(CD, this._goalBeta), this._goalRadius = GD(cD, this._goalRadius), this._goalTarget.set(GD(ID.x, this._goalTarget.x), GD(ID.y, this._goalTarget.y), GD(ID.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(GD(pD.x, this._goalTargetScreenOffset.x), GD(pD.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, bD.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, bD.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, bD.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, bD.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.DW.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(DD, CD) {
            let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const pD = arguments;
            CD = mD.g.BackCompatCameraNoPreventDefault(pD), this._useCtrlForPanning = cD, this._panningMouseButton = ID, "boolean" === typeof pD[0] && (pD.length > 1 && (this._useCtrlForPanning = pD[1]), pD.length > 2 && (this._panningMouseButton = pD[2])), this.inputs.attachElement(CD), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(DD, CD, cD) {
            const ID = this.invertRotation ? -1 : 1;
            let pD = DD * this._calculateHandednessMultiplier();
            this.beta < 0 && (pD *= -1), this.alpha += pD * ID, this.beta += CD * ID, this.radius -= cD
          }
          _applyPanDelta(DD, CD) {
            const cD = fD.l.cZ[0].K4(DD, CD, CD);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), cD.multiplyInPlace(this.panningAxis), fD.p.TransformNormalToRef(cD, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const DD = this.upVector,
                CD = fD.p.CrossToRef(this._transformedDirection, DD, this._transformedDirection);
              fD.p.CrossToRef(DD, CD, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.DW);
                fD.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.DW.YCD(this._transformedDirection)
              } else {
                if (this.parent) {
                  const DD = fD.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(DD), DD.transposeToRef(DD), fD.p.TransformCoordinatesToRef(this._transformedDirection, DD, this._transformedDirection)
                }
                this.DW.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let DD = !1;
            this.movement.computeCurrentFrameDeltas();
            const CD = this.movement.rotationDeltaCurrentFrame,
              cD = this.movement.zoomDeltaCurrentFrame,
              ID = this.movement.panDeltaCurrentFrame;
            if (0 === CD.x && 0 === CD.y && 0 === cD && 0 === ID.x && 0 === ID.y || (DD = !0, 0 === CD.x && 0 === CD.y && 0 === cD || this._applyRotationAndZoomDelta(CD.x, CD.y, cD), 0 === ID.x && 0 === ID.y || this._applyPanDelta(ID.x, ID.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), DD = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const CD = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < CD && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < CD && (this.inertialPanningY = 0), DD = !0
            }
            if (DD) this.stopInterpolation();
            else if (this._isInterpolating) {
              let DD = !1;
              const CD = this._scene.DZ().getDeltaTime() / 1e3,
                cD = 1 - Math.pow(2, -CD / this._currentInterpolationFactor),
                ID = GD(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const CD = fD.l.cZ[0].set(GD(this._goalTarget.x, this.DW.x), GD(this._goalTarget.y, this.DW.y), GD(this._goalTarget.z, this.DW.z));
                fD.p.LerpToRef(this.target, CD, cD, this.DW), 10 * fD.p.Distance(this.target, CD) / ID < yD.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.YCD(CD), this.setTarget(this.target, !1, !0, !0)) : DD = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const CD = fD.h.RotationAlphaBetaGammaToRef(GD(this._goalAlpha, this.alpha), GD(this._goalBeta, this.beta), 0, fD.l.Quaternion[0]),
                  ID = fD.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, fD.l.Quaternion[1]),
                  pD = fD.h.SlerpToRef(ID, CD, cD, fD.l.Quaternion[2]);
                pD.normalize();
                const iD = pD.toAlphaBetaGammaToRef(fD.l.cZ[0]);
                if (this.alpha = iD.x, this.beta = iD.y, pD.isApprox(CD, yD.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const DD = CD.toAlphaBetaGammaToRef(fD.l.cZ[0]);
                  this.alpha = DD.x, this.beta = DD.y
                } else DD = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (ID - this.radius) * cD, Math.abs(ID / this.radius - 1) < yD.c ? (this._goalRadius = NaN, this.radius = ID) : DD = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const CD = fD.l.Vector2[0].set(GD(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), GD(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                fD.n.LerpToRef(this.targetScreenOffset, CD, cD, this.targetScreenOffset), fD.n.Distance(this.targetScreenOffset, CD) < yD.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.YCD(CD)) : DD = !0
              }
              this._isInterpolating = DD
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || fD.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const DD = this.alpha;
            var CD, cD;
            this.alpha = function(DD) {
              let CD = Math.PI / 2;
              return 0 === DD.x && 0 === DD.z || (CD = Math.acos(DD.x / Math.sqrt(Math.pow(DD.x, 2) + Math.pow(DD.z, 2)))), DD.z < 0 && (CD = 2 * Math.PI - CD), CD
            }(this._computationVector), this.beta = (CD = this._computationVector.y, cD = this.radius, Math.acos(CD / cD));
            const ID = Math.round((DD - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * ID * Math.PI, this._checkLimits()
          }
          setPosition(DD) {
            this._position.equals(DD) || (this._position.YCD(DD), this.rebuildAnglesAndRadius())
          }
          setTarget(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (ID = this.overrideCloneAlphaBetaRadius ?? ID, DD.computeWorldMatrix) CD && DD.VJ ? this._targetBoundingCenter = DD.VJ().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, DD.computeWorldMatrix(), this._targetHost = DD, this.DW = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const CD = DD,
                ID = this._getTargetPosition();
              if (ID && !cD && ID.equals(CD)) return;
              this._targetHost = null, this.DW = CD, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            ID || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const DD = Math.cos(this.alpha),
              CD = Math.sin(this.alpha),
              cD = Math.cos(this.beta);
            let ID = Math.sin(this.beta);
            0 === ID && (ID = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const pD = this._getTargetPosition();
            if (this._computationVector.K4(this.radius * DD * ID, this.radius * cD, this.radius * CD * ID), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || fD.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), pD.addToRef(this._computationVector, this._newPosition), this.hq().collisionsEnabled && this.checkCollisions) {
              const DD = this.hq().collisionCoordinator;
              this._collider || (this._collider = DD.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, DD.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.YCD(this._newPosition);
              let DD = this.upVector;
              this.allowUpsideDown && ID < 0 && (DD = DD.pp()), this._computeViewMatrix(this._position, pD, DD), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.YCD(pD), this._viewMatrix
          }
          zoomOn(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            DD = DD || this.hq().meshes;
            const cD = wD.d.MinMax(DD);
            let ID = this._calculateLowerRadiusFromModelBoundingSphere(cD.min, cD.max);
            if (ID = Math.max(Math.min(ID, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = ID * this.zoomOnFactor, this.mode === ND.c.ORTHOGRAPHIC_CAMERA) {
              const DD = this.hq().DZ().getAspectRatio(this),
                CD = ID * this.zoomOnFactor / 2;
              this.orthoLeft = -CD * DD, this.orthoRight = CD * DD, this.orthoBottom = -CD, this.orthoTop = CD
            }
            this.focusOn({
              min: cD.min,
              max: cD.max,
              distance: ID
            }, CD)
          }
          focusOn(DD) {
            let CD, cD, ID = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === DD.min) {
              const ID = DD || this.hq().meshes;
              CD = wD.d.MinMax(ID), cD = fD.p.Distance(CD.min, CD.max)
            } else {
              CD = DD, cD = DD.distance
            }
            this.DW = wD.d.Center(CD), ID || (this.maxZ = 2 * cD)
          }
          createRigCamera(CD, cD) {
            let ID = 0;
            switch (this.cameraRigMode) {
              case ND.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ND.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ND.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ND.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ND.c.RIG_MODE_VR:
                ID = this._cameraRigParams.stereoHalfAngle * (0 === cD ? 1 : -1);
                break;
              case ND.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                ID = this._cameraRigParams.stereoHalfAngle * (0 === cD ? -1 : 1)
            }
            const pD = new DD(CD, this.alpha + ID, this.beta, this.radius, this.DW, this.hq());
            return pD._cameraRigParams = {}, pD.isRigCamera = !0, pD.rigParent = this, pD.upVector = this.upVector, pD.mode = this.mode, pD.orthoLeft = this.orthoLeft, pD.orthoRight = this.orthoRight, pD.orthoBottom = this.orthoBottom, pD.orthoTop = this.orthoTop, pD
          }
          _updateRigCameras() {
            const DD = this._rigCameras[0],
              CD = this._rigCameras[1];
            switch (DD.beta = CD.beta = this.beta, this.cameraRigMode) {
              case ND.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ND.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ND.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ND.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ND.c.RIG_MODE_VR:
                DD.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, CD.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case ND.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                DD.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, CD.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const ID = fD.p.Distance(DD, CD),
              pD = this.hq().DZ().getAspectRatio(this),
              iD = Math.tan(this.fov / 2),
              bD = iD * pD,
              QD = .5 * ID * cD,
              wD = QD * Math.sqrt(1 + 1 / (bD * bD)),
              SD = QD * Math.sqrt(1 + 1 / (iD * iD));
            return Math.max(wD, SD)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(ED[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], QD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.C)("target")], tD = [(0, pD.s)("targetHost")], ZD = [(0, pD.G)()], XD = [(0, pD.G)()], nD = [(0, pD.G)()], OD = [(0, pD.G)()], PD = [(0, pD.G)()], HD = [(0, pD.G)()], UD = [(0, pD.G)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], KD = [(0, pD.G)()], aD = [(0, pD.G)()], VD = [(0, pD.G)()], jD = [(0, pD.G)()], lD = [(0, pD.C)()], LD = [(0, pD.G)()], RD = [(0, pD.G)()], kD = [(0, pD.G)()], dD = [(0, pD.y)()], YD = [(0, pD.G)()], WD = [(0, pD.G)()], sD = [(0, pD.G)()], (0, ID.k)(DD, null, ZD, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialAlphaOffset" in DD,
              get: DD => DD.inertialAlphaOffset
            },
            metadata: iD
          }, null, eD), (0, ID.k)(DD, null, XD, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialBetaOffset" in DD,
              get: DD => DD.inertialBetaOffset
            },
            metadata: iD
          }, null, eD), (0, ID.k)(DD, null, nD, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialRadiusOffset" in DD,
              get: DD => DD.inertialRadiusOffset
            },
            metadata: iD
          }, null, eD), (0, ID.k)(DD, null, LD, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningInertia" in DD,
              get: DD => DD.panningInertia
            },
            metadata: iD
          }, null, eD), (0, ID.k)(DD, null, RD, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: DD => "zoomToMouseLocation" in DD,
              get: DD => DD.zoomToMouseLocation
            },
            metadata: iD
          }, null, eD), (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "alpha" in DD,
              get: DD => DD.alpha,
              set: (DD, CD) => {
                DD.alpha = CD
              }
            },
            metadata: iD
          }, uD, hD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: DD => "beta" in DD,
              get: DD => DD.beta,
              set: (DD, CD) => {
                DD.beta = CD
              }
            },
            metadata: iD
          }, rD, AD), (0, ID.k)(null, null, QD, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: DD => "radius" in DD,
              get: DD => DD.radius,
              set: (DD, CD) => {
                DD.radius = CD
              }
            },
            metadata: iD
          }, FD, DC), (0, ID.k)(null, null, SD, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: DD => "overrideCloneAlphaBetaRadius" in DD,
              get: DD => DD.overrideCloneAlphaBetaRadius,
              set: (DD, CD) => {
                DD.overrideCloneAlphaBetaRadius = CD
              }
            },
            metadata: iD
          }, CC, cC), (0, ID.k)(null, null, BD, {
            kind: "field",
            name: "DW",
            static: !1,
            private: !1,
            access: {
              has: DD => "DW" in DD,
              get: DD => DD.DW,
              set: (DD, CD) => {
                DD.DW = CD
              }
            },
            metadata: iD
          }, IC, pC), (0, ID.k)(null, null, tD, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: DD => "_targetHost" in DD,
              get: DD => DD._targetHost,
              set: (DD, CD) => {
                DD._targetHost = CD
              }
            },
            metadata: iD
          }, iC, fC), (0, ID.k)(null, null, OD, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerAlphaLimit" in DD,
              get: DD => DD.lowerAlphaLimit,
              set: (DD, CD) => {
                DD.lowerAlphaLimit = CD
              }
            },
            metadata: iD
          }, bC, QC), (0, ID.k)(null, null, PD, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperAlphaLimit" in DD,
              get: DD => DD.upperAlphaLimit,
              set: (DD, CD) => {
                DD.upperAlphaLimit = CD
              }
            },
            metadata: iD
          }, wC, SC), (0, ID.k)(null, null, HD, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerBetaLimit" in DD,
              get: DD => DD.lowerBetaLimit,
              set: (DD, CD) => {
                DD.lowerBetaLimit = CD
              }
            },
            metadata: iD
          }, BC, yC), (0, ID.k)(null, null, UD, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperBetaLimit" in DD,
              get: DD => DD.upperBetaLimit,
              set: (DD, CD) => {
                DD.upperBetaLimit = CD
              }
            },
            metadata: iD
          }, MC, tC), (0, ID.k)(null, null, xD, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerRadiusLimit" in DD,
              get: DD => DD.lowerRadiusLimit,
              set: (DD, CD) => {
                DD.lowerRadiusLimit = CD
              }
            },
            metadata: iD
          }, ZC, oC), (0, ID.k)(null, null, qD, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "upperRadiusLimit" in DD,
              get: DD => DD.upperRadiusLimit,
              set: (DD, CD) => {
                DD.upperRadiusLimit = CD
              }
            },
            metadata: iD
          }, vC, NC), (0, ID.k)(null, null, JD, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "lowerTargetYLimit" in DD,
              get: DD => DD.lowerTargetYLimit,
              set: (DD, CD) => {
                DD.lowerTargetYLimit = CD
              }
            },
            metadata: iD
          }, gC, XC), (0, ID.k)(null, null, KD, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialPanningX" in DD,
              get: DD => DD.inertialPanningX,
              set: (DD, CD) => {
                DD.inertialPanningX = CD
              }
            },
            metadata: iD
          }, mC, nC), (0, ID.k)(null, null, aD, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: DD => "inertialPanningY" in DD,
              get: DD => DD.inertialPanningY,
              set: (DD, CD) => {
                DD.inertialPanningY = CD
              }
            },
            metadata: iD
          }, OC, PC), (0, ID.k)(null, null, VD, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: DD => "pinchToPanMaxDistance" in DD,
              get: DD => DD.pinchToPanMaxDistance,
              set: (DD, CD) => {
                DD.pinchToPanMaxDistance = CD
              }
            },
            metadata: iD
          }, HC, UC), (0, ID.k)(null, null, jD, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningDistanceLimit" in DD,
              get: DD => DD.panningDistanceLimit,
              set: (DD, CD) => {
                DD.panningDistanceLimit = CD
              }
            },
            metadata: iD
          }, xC, qC), (0, ID.k)(null, null, lD, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: DD => "panningOriginTarget" in DD,
              get: DD => DD.panningOriginTarget,
              set: (DD, CD) => {
                DD.panningOriginTarget = CD
              }
            },
            metadata: iD
          }, JC, KC), (0, ID.k)(null, null, kD, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: DD => "zoomOnFactor" in DD,
              get: DD => DD.zoomOnFactor,
              set: (DD, CD) => {
                DD.zoomOnFactor = CD
              }
            },
            metadata: iD
          }, aC, VC), (0, ID.k)(null, null, dD, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "targetScreenOffset" in DD,
              get: DD => DD.targetScreenOffset,
              set: (DD, CD) => {
                DD.targetScreenOffset = CD
              }
            },
            metadata: iD
          }, zC, jC), (0, ID.k)(null, null, YD, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: DD => "allowUpsideDown" in DD,
              get: DD => DD.allowUpsideDown,
              set: (DD, CD) => {
                DD.allowUpsideDown = CD
              }
            },
            metadata: iD
          }, lC, LC), (0, ID.k)(null, null, WD, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: DD => "useInputToRestoreState" in DD,
              get: DD => DD.useInputToRestoreState,
              set: (DD, CD) => {
                DD.useInputToRestoreState = CD
              }
            },
            metadata: iD
          }, TC, GC), (0, ID.k)(null, null, sD, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: DD => "restoreStateInterpolationFactor" in DD,
              get: DD => DD.restoreStateInterpolationFactor,
              set: (DD, CD) => {
                DD.restoreStateInterpolationFactor = CD
              }
            },
            metadata: iD
          }, RC, kC), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      kD = !1;
    kD || (kD = !0, QD.b.AddNodeConstructor("ArcRotateCamera", ((DD, CD) => () => new RD(DD, 0, 0, 1, fD.p.Zero(), CD))), (0, jD.d)("BABYLON.ArcRotateCamera", RD))
  },
  39382: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.b
    });
    var ID = cD(39388);
    (0, ID.c)()
  },
  39388: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      c: () => yD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(36622),
      bD = cD(39392),
      QD = cD(39356),
      wD = cD(36488);
    let SD = (() => {
        var DD;
        let CD, cD, QD = bD.b,
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        return DD = class extends QD {
          constructor(DD, CD, cD, pD) {
            super(DD, cD, pD), this.groundColor = (0, ID.m)(this, wD, new fD.d(0, 0, 0)), this.direction = ((0, ID.m)(this, SD), (0, ID.m)(this, BD, void 0)), (0, ID.m)(this, yD), this.direction = CD || iD.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = iD.p.Normalize(DD.subtract(iD.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cD.x, cD.y, cD.z, 0, CD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), CD), this
          }
          transferToNodeMaterialEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return DD.setFloat3(CD, cD.x, cD.y, cD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iD.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bD.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, CD) {
            DD["HEMILIGHT" + CD] = !0
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(QD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.l)()], cD = [(0, pD.C)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, CD) => {
                DD.groundColor = CD
              }
            },
            metadata: iD
          }, wD, SD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, CD) => {
                DD.direction = CD
              }
            },
            metadata: iD
          }, BD, yD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      BD = !1;

    function yD() {
      BD || (BD = !0, QD.b.AddNodeConstructor("Light_Type_3", ((DD, CD) => () => new SD(DD, iD.p.Zero(), CD))), (0, wD.d)("BABYLON.HemisphericLight", SD))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
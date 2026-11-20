export const id = 250;
export const ids = [250];
export const modules = {
  40177: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => kz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36505),
      Oz = sz(36475),
      oz = sz(36507),
      vz = sz(39374),
      Uz = sz(39555),
      Kz = sz(39328),
      uz = sz(39079),
      Nz = sz(36479);
    class bz {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(zz) {
        this._zoomStopsAnimation = zz
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(zz) {
        this._idleRotationSpeed = zz
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(zz) {
        this._idleRotationWaitTime = zz
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(zz) {
        this._idleRotationSpinupTime = zz
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
      attach(zz) {
        this._attachedCamera = zz;
        const tz = this._attachedCamera.aJ();
        this._onPrePointerObservableObserver = tz.onPrePointerObservable.add((zz => {
          zz.type !== Kz.c.POINTERDOWN ? zz.type === Kz.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = zz.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const zz = uz.b.Now;
          let tz = 0;
          null != this._lastFrameTime && (tz = zz - this._lastFrameTime), this._lastFrameTime = zz, this._applyUserInteraction();
          const sz = zz - this._lastInteractionTime - this._idleRotationWaitTime,
            Fz = Math.max(Math.min(sz / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Fz, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (tz / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const zz = this._attachedCamera.aJ();
        this._onPrePointerObservableObserver && zz.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(zz) {
        this._lastInteractionTime = zz ?? uz.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Nz.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let zz = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (zz = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? zz : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = uz.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    sz(40180);
    class wz {
      constructor() {
        this._easingMode = wz.EASINGMODE_EASEIN
      }
      setEasingMode(zz) {
        const tz = Math.min(Math.max(zz, 0), 2);
        this._easingMode = tz
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(zz) {
        throw new Error("You must implement this method")
      }
      ease(zz) {
        switch (this._easingMode) {
          case wz.EASINGMODE_EASEIN:
            return this.easeInCore(zz);
          case wz.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - zz)
        }
        return zz >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - zz))) + .5 : .5 * this.easeInCore(2 * zz)
      }
    }
    wz.EASINGMODE_EASEIN = 0, wz.EASINGMODE_EASEOUT = 1, wz.EASINGMODE_EASEINOUT = 2;
    var Dz = sz(40185);
    class gz {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(zz) {
        if (this._autoTransitionRange === zz) return;
        this._autoTransitionRange = zz;
        const tz = this._attachedCamera;
        tz && (zz ? this._onMeshTargetChangedObserver = tz.onMeshTargetChangedObservable.add((zz => {
          if (zz && (zz.computeWorldMatrix(!0), zz.rC)) {
            const tz = zz.rC().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * tz, this.upperRadiusTransitionRange = .05 * tz
          }
        })) : this._onMeshTargetChangedObserver && tz.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(zz) {
        this._attachedCamera = zz, this._onAfterCheckInputsObserver = zz.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(zz) {
        return !!this._attachedCamera && (this._attachedCamera.radius === zz && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(zz) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (gz.EasingFunction.setEasingMode(gz.EasingMode), this._radiusBounceTransition = Dz.d.CreateAnimation("radius", Dz.d.ANIMATIONTYPE_FLOAT, 60, gz.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const tz = Dz.d.TransitionTo("radius", this._attachedCamera.radius + zz, this._attachedCamera, this._attachedCamera.aJ(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        tz && this._animatables.push(tz)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    gz.EasingFunction = new class extends wz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = zz
      }
      easeInCore(zz) {
        const tz = Math.max(0, this.amplitude);
        return Math.pow(zz, 3) - zz * tz * Math.sin(3.141592653589793 * zz)
      }
    }(.3), gz.EasingMode = wz.EASINGMODE_EASEOUT;
    class Hz {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Xz.c, this._mode = Hz.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(zz) {
        this._mode = zz
      }
      get mode() {
        return this._mode
      }
      set radiusScale(zz) {
        this._radiusScale = zz
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(zz) {
        this._positionScale = zz
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(zz) {
        this._defaultElevation = zz
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(zz) {
        this._elevationReturnTime = zz
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(zz) {
        this._elevationReturnWaitTime = zz
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(zz) {
        this._zoomStopsAnimation = zz
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(zz) {
        this._framingTime = zz
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(zz) {
        this._attachedCamera = zz;
        const tz = this._attachedCamera.aJ();
        Hz.EasingFunction.setEasingMode(Hz.EasingMode), this._onPrePointerObservableObserver = tz.onPrePointerObservable.add((zz => {
          zz.type !== Kz.c.POINTERDOWN ? zz.type === Kz.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = zz.onMeshTargetChangedObservable.add((zz => {
          zz && zz.rC && this.zoomOnMesh(zz, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = zz.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const zz = this._attachedCamera.aJ();
        this._onPrePointerObservableObserver && zz.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        zz.computeWorldMatrix(!0);
        const Fz = zz.rC().boundingBox;
        this.zoomOnBoundingInfo(Fz.minimumWorld, Fz.maximumWorld, tz, sz)
      }
      zoomOnMeshHierarchy(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        zz.computeWorldMatrix(!0);
        const Fz = zz.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Fz.min, Fz.max, tz, sz)
      }
      zoomOnMeshesHierarchy(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Fz = new Oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Wz = new Oz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Xz = 0; Xz < zz.length; Xz++) {
          const tz = zz[Xz].getHierarchyBoundingVectors(!0);
          Oz.p.CheckExtends(tz.min, Fz, Wz), Oz.p.CheckExtends(tz.max, Fz, Wz)
        }
        this.zoomOnBoundingInfo(Fz, Wz, tz, sz)
      }
      zoomOnBoundingInfo(zz, tz) {
        let sz, Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Xz = zz.y,
          oz = Xz + (tz.y - Xz) * this._positionScale,
          vz = tz.subtract(zz).scale(.5);
        if (!isFinite(oz)) return !1;
        if (Fz) sz = new Oz.p(0, oz, 0);
        else {
          const tz = zz.add(vz);
          sz = new Oz.p(tz.x, oz, tz.z)
        }
        this._vectorTransition || (this._vectorTransition = Dz.d.CreateAnimation("target", Dz.d.ANIMATIONTYPE_VECTOR3, 60, Hz.EasingFunction)), this._betaIsAnimating = !0;
        let Uz = Dz.d.TransitionTo("target", sz, this._attachedCamera, this._attachedCamera.aJ(), 60, this._vectorTransition, this._framingTime);
        Uz && this._animatables.push(Uz);
        let Kz = 0;
        if (this._mode === Hz.FitFrustumSidesMode) {
          const sz = this._calculateLowerRadiusFromModelBoundingSphere(zz, tz);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = vz.length() + this._attachedCamera.minZ), Kz = sz
        } else this._mode === Hz.IgnoreBoundsSizeMode && (Kz = this._calculateLowerRadiusFromModelBoundingSphere(zz, tz), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const sz = tz.subtract(zz).length();
          this._attachedCamera.panningSensibility = 5e3 / sz, this._attachedCamera.wheelPrecision = 100 / Kz
        }
        return this._radiusTransition || (this._radiusTransition = Dz.d.CreateAnimation("radius", Dz.d.ANIMATIONTYPE_FLOAT, 60, Hz.EasingFunction)), Uz = Dz.d.TransitionTo("radius", Kz, this._attachedCamera, this._attachedCamera.aJ(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Wz && Wz(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Uz && this._animatables.push(Uz), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(zz, tz) {
        const sz = this._attachedCamera;
        if (!sz) return 0;
        let Fz = sz._calculateLowerRadiusFromModelBoundingSphere(zz, tz, this._radiusScale);
        return sz.lowerRadiusLimit && this._mode === Hz.IgnoreBoundsSizeMode && (Fz = Fz < sz.lowerRadiusLimit ? sz.lowerRadiusLimit : Fz), sz.upperRadiusLimit && (Fz = Fz > sz.upperRadiusLimit ? sz.upperRadiusLimit : Fz), Fz
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const zz = uz.b.Now - this._lastInteractionTime,
          tz = .5 * Math.PI - this._defaultElevation,
          sz = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > sz && zz >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Dz.d.CreateAnimation("beta", Dz.d.ANIMATIONTYPE_FLOAT, 60, Hz.EasingFunction));
          const zz = Dz.d.TransitionTo("beta", tz, this._attachedCamera, this._attachedCamera.aJ(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          zz && this._animatables.push(zz)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = uz.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Hz.EasingFunction = new class extends wz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = zz
      }
      easeInCore(zz) {
        return this.exponent <= 0 ? zz : (Math.exp(this.exponent * zz) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Hz.EasingMode = wz.EASINGMODE_EASEINOUT, Hz.IgnoreBoundsSizeMode = 0, Hz.FitFrustumSidesMode = 1;
    var Bz = sz(39370),
      Pz = sz(39362),
      rz = sz(39402),
      Yz = sz(39264);
    let xz = (() => {
        var zz;
        let tz, sz = [],
          Xz = [];
        return zz = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Fz.k)(this, sz, [0, 1, 2]), this._pointerInput = (0, Fz.k)(this, Xz)
          }
          attachControl(zz) {
            zz = Yz.j.BackCompatCameraNoPreventDefault(arguments);
            const tz = this.camera.FD(),
              sz = tz.getInputElement();
            let Fz = 0,
              Wz = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Xz => {
              const Oz = Xz.event,
                oz = "touch" === Oz.pointerType;
              if (Xz.type !== Kz.c.POINTERMOVE && -1 === this.buttons.indexOf(Oz.button)) return;
              const vz = Oz.target;
              if (this._altKey = Oz.altKey, this._ctrlKey = Oz.ctrlKey, this._metaKey = Oz.metaKey, this._shiftKey = Oz.shiftKey, this._buttonsPressed = Oz.buttons, tz.isPointerLock) {
                const zz = Oz.movementX,
                  tz = Oz.movementY;
                this.onTouch(null, zz, tz), this._pointA = null, this._pointB = null
              } else {
                if (Xz.type !== Kz.c.POINTERDOWN && Xz.type !== Kz.c.POINTERDOUBLETAP && oz && this._pointA?.pointerId !== Oz.pointerId && this._pointB?.pointerId !== Oz.pointerId) return;
                if (Xz.type !== Kz.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !oz)
                  if (Xz.type === Kz.c.POINTERDOUBLETAP) this.onDoubleTap(Oz.pointerType, Oz);
                  else if (Xz.type !== Kz.c.POINTERUP || this._currentMousePointerIdDown !== Oz.pointerId && !oz) {
                  if (Xz.type === Kz.c.POINTERMOVE)
                    if (zz || Oz.preventDefault(), this._pointA && null === this._pointB) {
                      const zz = Oz.clientX - this._pointA.x,
                        tz = Oz.clientY - this._pointA.y;
                      this._pointA.x = Oz.clientX, this._pointA.y = Oz.clientY, this.onTouch(this._pointA, zz, tz)
                    } else if (this._pointA && this._pointB) {
                    const zz = this._pointA.pointerId === Oz.pointerId ? this._pointA : this._pointB;
                    zz.x = Oz.clientX, zz.y = Oz.clientY;
                    const tz = this._pointA.x - this._pointB.x,
                      sz = this._pointA.y - this._pointB.y,
                      oz = tz * tz + sz * sz,
                      vz = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Oz.pointerId,
                        type: Xz.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Fz, oz, Wz, vz), Wz = vz, Fz = oz
                  }
                } else {
                  try {
                    vz?.releasePointerCapture(Oz.pointerId)
                  } catch (Uz) {}
                  oz || (this._pointB = null), tz._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Oz.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Oz.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Fz || Wz) && (this.onMultiTouch(this._pointA, this._pointB, Fz, 0, Wz, null), Fz = 0, Wz = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Oz), zz || Oz.preventDefault()
                } else {
                  try {
                    vz?.setPointerCapture(Oz.pointerId)
                  } catch (Uz) {}
                  if (null === this._pointA) this._pointA = {
                    x: Oz.clientX,
                    y: Oz.clientY,
                    pointerId: Oz.pointerId,
                    type: Oz.pointerType,
                    button: Oz.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Oz.clientX,
                      y: Oz.clientY,
                      pointerId: Oz.pointerId,
                      type: Oz.pointerType,
                      button: Oz.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || oz || (this._currentMousePointerIdDown = Oz.pointerId), this.onButtonDown(Oz), zz || (Oz.preventDefault(), sz && sz.focus())
                }
              }
            }, this._observer = this.camera.aJ()._inputManager._addCameraPointerObserver(this._pointerInput, Kz.c.POINTERDOWN | Kz.c.POINTERUP | Kz.c.POINTERMOVE | Kz.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Fz = 0, Wz = null, this.onLostFocus()
            }, this._contextMenuBind = zz => this.onContextMenu(zz), sz && sz.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Xz = this.camera.aJ().FD().getHostWindow();
            Xz && Yz.j.RegisterTopRootEvents(Xz, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const zz = this.camera.aJ().FD().getHostWindow();
              zz && Yz.j.UnregisterTopRootEvents(zz, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.aJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const zz = this.camera.aJ().FD().getInputElement();
                zz && zz.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(zz, tz) {}
          onTouch(zz, tz, sz) {}
          onMultiTouch(zz, tz, sz, Fz, Wz, Xz) {}
          onContextMenu(zz) {
            zz.preventDefault()
          }
          onButtonDown(zz) {}
          onButtonUp(zz) {}
          onLostFocus() {}
        }, (() => {
          const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          tz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: zz => "buttons" in zz,
              get: zz => zz.buttons,
              set: (zz, tz) => {
                zz.buttons = tz
              }
            },
            metadata: Oz
          }, sz, Xz), Oz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oz
          })
        })(), zz
      })(),
      mz = (() => {
        var zz;
        let tz, sz, Xz, Oz = xz,
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        return zz = class extends Oz {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Fz.k)(this, oz, !0), this.multiTouchPanning = ((0, Fz.k)(this, vz), (0, Fz.k)(this, Uz, !0)), this.multiTouchPanAndZoom = ((0, Fz.k)(this, Kz), (0, Fz.k)(this, uz, !0)), this._isPinching = ((0, Fz.k)(this, Nz), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(zz, tz) {}
          _computeMultiTouchPanning(zz, tz) {}
          onMultiTouch(zz, tz, sz, Fz, Wz, Xz) {
            0 === sz && null === Wz || 0 === Fz && null === Xz || (this.multiTouchPanAndZoom ? (this._computePinchZoom(sz, Fz), this._computeMultiTouchPanning(Wz, Xz)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(sz, Fz), this._isPinching = !0) : this._computeMultiTouchPanning(Wz, Xz)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Wz, Xz) : this.pinchZoom && this._computePinchZoom(sz, Fz))
          }
          onButtonUp(zz) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchZoom" in zz,
              get: zz => zz.pinchZoom,
              set: (zz, tz) => {
                zz.pinchZoom = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: zz => "multiTouchPanning" in zz,
              get: zz => zz.multiTouchPanning,
              set: (zz, tz) => {
                zz.multiTouchPanning = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Fz.h)(null, null, Xz, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "multiTouchPanAndZoom" in zz,
              get: zz => zz.multiTouchPanAndZoom,
              set: (zz, tz) => {
                zz.multiTouchPanAndZoom = tz
              }
            },
            metadata: bz
          }, uz, Nz), bz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          })
        })(), zz
      })(),
      Jz = (() => {
        var zz;
        let tz, sz, Xz, Oz, oz, vz, Uz, Kz = mz,
          uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [],
          Pz = [],
          rz = [],
          Yz = [],
          xz = [],
          Jz = [],
          Iz = [];
        return zz = class extends Kz {
          constructor() {
            super(...arguments), this.buttons = (0, Fz.k)(this, uz, [0, 1, 2]), this.angularSensibilityX = ((0, Fz.k)(this, Nz), (0, Fz.k)(this, bz, 1e3)), this.angularSensibilityY = ((0, Fz.k)(this, wz), (0, Fz.k)(this, Dz, 1e3)), this.pinchPrecision = ((0, Fz.k)(this, gz), (0, Fz.k)(this, Hz, 12)), this.pinchDeltaPercentage = ((0, Fz.k)(this, Bz), (0, Fz.k)(this, Pz, 0)), this.useNaturalPinchZoom = ((0, Fz.k)(this, rz), (0, Fz.k)(this, Yz, !1)), this.panningSensibility = ((0, Fz.k)(this, xz), (0, Fz.k)(this, Jz, 1e3)), this.pinchInwards = ((0, Fz.k)(this, Iz), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(zz, tz) {
            if (zz && tz) {
              const sz = tz.x - zz.x,
                Fz = tz.y - zz.y,
                Wz = this.camera.movement.input.getEntry("pointer", "pan"),
                Xz = Wz?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Xz && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -sz * Xz, this.camera.movement.panAccumulatedPixels.y += Fz * Xz)
            }
          }
          _computePinchZoom(tz, sz) {
            const Fz = this.camera.radius || zz.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Fz * Math.sqrt(tz) / Math.sqrt(sz);
            else if (this.pinchDeltaPercentage) {
              const zz = .001 * (sz - tz) * Fz * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += zz
            } else {
              const zz = (sz - tz) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += zz
            }
          }
          onTouch(zz, tz, sz) {
            const Fz = this._activeEntry ?? (this.camera.FD().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Fz)
              if ("pan" === Fz.interaction) {
                const zz = Fz.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== zz && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -tz * zz, this.camera.movement.panAccumulatedPixels.y += sz * zz)
              } else if ("rotate" === Fz.interaction) {
              const zz = Fz.wL ?? Fz.sensitivity ?? 1 / this.angularSensibilityX,
                Wz = Fz.gL ?? Fz.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -tz * zz, this.camera.movement.rotationAccumulatedPixels.y += -sz * Wz
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(zz, tz, sz, Fz, Wz, Xz) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Fz) - Math.sqrt(sz)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(zz, tz, sz, Fz, Wz, Xz)
          }
          onButtonDown(zz) {
            this._pointerConditions.button = zz.button, this._pointerModifiers.ctrl = zz.ctrlKey, this._pointerModifiers.alt = zz.altKey, this._pointerModifiers.shift = zz.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(zz)
          }
          onButtonUp(zz) {
            this._activeEntry = null, super.onButtonUp(zz)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const mz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: zz => "buttons" in zz,
              get: zz => zz.buttons,
              set: (zz, tz) => {
                zz.buttons = tz
              }
            },
            metadata: mz
          }, uz, Nz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: zz => "angularSensibilityX" in zz,
              get: zz => zz.angularSensibilityX,
              set: (zz, tz) => {
                zz.angularSensibilityX = tz
              }
            },
            metadata: mz
          }, bz, wz), (0, Fz.h)(null, null, Xz, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: zz => "angularSensibilityY" in zz,
              get: zz => zz.angularSensibilityY,
              set: (zz, tz) => {
                zz.angularSensibilityY = tz
              }
            },
            metadata: mz
          }, Dz, gz), (0, Fz.h)(null, null, Oz, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchPrecision" in zz,
              get: zz => zz.pinchPrecision,
              set: (zz, tz) => {
                zz.pinchPrecision = tz
              }
            },
            metadata: mz
          }, Hz, Bz), (0, Fz.h)(null, null, oz, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchDeltaPercentage" in zz,
              get: zz => zz.pinchDeltaPercentage,
              set: (zz, tz) => {
                zz.pinchDeltaPercentage = tz
              }
            },
            metadata: mz
          }, Pz, rz), (0, Fz.h)(null, null, vz, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "useNaturalPinchZoom" in zz,
              get: zz => zz.useNaturalPinchZoom,
              set: (zz, tz) => {
                zz.useNaturalPinchZoom = tz
              }
            },
            metadata: mz
          }, Yz, xz), (0, Fz.h)(null, null, Uz, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningSensibility" in zz,
              get: zz => zz.panningSensibility,
              set: (zz, tz) => {
                zz.panningSensibility = tz
              }
            },
            metadata: mz
          }, Jz, Iz), mz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mz
          })
        })(), zz.MinimumRadiusForPinch = .001, zz
      })();
    rz.e.ArcRotateCameraPointersInput = Jz;
    var Iz = sz(39331);
    let Cz = (() => {
      var zz;
      let tz, sz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz = [],
        gz = [],
        Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        xz = [],
        mz = [],
        Jz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [];
      return zz = class {
        constructor() {
          this.camera = (0, Fz.k)(this, Dz), this.keysUp = (0, Fz.k)(this, gz, [38]), this.keysDown = ((0, Fz.k)(this, Hz), (0, Fz.k)(this, Bz, [40])), this.keysLeft = ((0, Fz.k)(this, Pz), (0, Fz.k)(this, rz, [37])), this.keysRight = ((0, Fz.k)(this, xz), (0, Fz.k)(this, mz, [39])), this.keysReset = ((0, Fz.k)(this, Jz), (0, Fz.k)(this, Cz, [220])), this.keysZoomIn = ((0, Fz.k)(this, ez), (0, Fz.k)(this, Zz, [187, 107])), this.keysZoomOut = ((0, Fz.k)(this, Gz), (0, Fz.k)(this, Tz, [189, 109])), this.panningSensibility = ((0, Fz.k)(this, cz), (0, Fz.k)(this, jz, 50)), this.zoomingSensibility = ((0, Fz.k)(this, Az), (0, Fz.k)(this, yz, 25)), this.angularSpeed = ((0, Fz.k)(this, Mz), (0, Fz.k)(this, dz, .01)), this._useAltToZoom = ((0, Fz.k)(this, hz), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Oz.n, this._panDirection = new Oz.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(zz) {
          this._useAltToZoom = zz, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const zz = this.camera.movement.input,
            tz = zz.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && tz ? zz.inputMap.splice(zz.inputMap.indexOf(tz), 1) : this._useAltToZoom && !tz && zz.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(zz) {
          zz = Yz.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aJ(), this._engine = this._scene.FD(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((tz => {
            const sz = tz.event;
            if (!sz.metaKey)
              if (tz.type === Iz.b.KEYDOWN) {
                if (this._ctrlPressed = sz.ctrlKey, this._altPressed = sz.altKey, -1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysReset.indexOf(sz.keyCode) || -1 !== this.keysZoomIn.indexOf(sz.keyCode) || -1 !== this.keysZoomOut.indexOf(sz.keyCode)) {
                  -1 === this._keys.indexOf(sz.keyCode) && this._keys.push(sz.keyCode), sz.preventDefault && (zz || sz.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(sz.keyCode) || -1 !== this.keysDown.indexOf(sz.keyCode) || -1 !== this.keysLeft.indexOf(sz.keyCode) || -1 !== this.keysRight.indexOf(sz.keyCode) || -1 !== this.keysReset.indexOf(sz.keyCode) || -1 !== this.keysZoomIn.indexOf(sz.keyCode) || -1 !== this.keysZoomOut.indexOf(sz.keyCode)) {
              const tz = this._keys.indexOf(sz.keyCode);
              tz >= 0 && this._keys.splice(tz, 1), sz.preventDefault && (zz || sz.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const zz = this.camera,
              tz = zz.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const sz = this._rotateDirection.set(0, 0),
              Fz = this._panDirection.set(0, 0);
            let Wz = 0,
              Xz = 0;
            for (let Oz = 0; Oz < this._keys.length; Oz++) {
              const oz = this._keys[Oz];
              if (this._keyboardConditions.key = oz, -1 === this.keysReset.indexOf(oz)) {
                const zz = tz.resolveInteraction("keyboard", this._keyboardConditions);
                if (zz)
                  if ("pan" === zz.interaction) Xz = Math.max(Xz, zz.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(oz) ? Fz.x -= 1 : -1 !== this.keysRight.indexOf(oz) ? Fz.x += 1 : -1 !== this.keysUp.indexOf(oz) ? Fz.y += 1 : -1 !== this.keysDown.indexOf(oz) && (Fz.y -= 1);
                  else if ("zoom" === zz.interaction) {
                  const sz = zz.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(oz) || -1 !== this.keysZoomIn.indexOf(oz) ? tz.handlers.zoom(sz) : -1 === this.keysDown.indexOf(oz) && -1 === this.keysZoomOut.indexOf(oz) || tz.handlers.zoom(-sz)
                } else "rotate" === zz.interaction && (Wz = Math.max(Wz, zz.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(oz) ? sz.x -= 1 : -1 !== this.keysRight.indexOf(oz) ? sz.x += 1 : -1 !== this.keysUp.indexOf(oz) ? sz.y -= 1 : -1 !== this.keysDown.indexOf(oz) && (sz.y += 1))
              } - 1 !== this.keysReset.indexOf(oz) && zz.useInputToRestoreState && zz.restoreState()
            }
            0 === sz.x && 0 === sz.y || (sz.normalize().scaleInPlace(Wz), tz.handlers.rotate(sz.x, sz.y)), 0 === Fz.x && 0 === Fz.y || (Fz.normalize().scaleInPlace(Xz), tz.handlers.pan(Fz.x, Fz.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], oz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.J)()], Nz = [(0, Wz.J)()], bz = [(0, Wz.J)()], wz = [(0, Wz.J)()], (0, Fz.h)(zz, null, wz, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAltToZoom" in zz,
            get: zz => zz.useAltToZoom
          },
          metadata: Oz
        }, null, Dz), (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUp" in zz,
            get: zz => zz.keysUp,
            set: (zz, tz) => {
              zz.keysUp = tz
            }
          },
          metadata: Oz
        }, gz, Hz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDown" in zz,
            get: zz => zz.keysDown,
            set: (zz, tz) => {
              zz.keysDown = tz
            }
          },
          metadata: Oz
        }, Bz, Pz), (0, Fz.h)(null, null, Xz, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysLeft" in zz,
            get: zz => zz.keysLeft,
            set: (zz, tz) => {
              zz.keysLeft = tz
            }
          },
          metadata: Oz
        }, rz, xz), (0, Fz.h)(null, null, oz, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRight" in zz,
            get: zz => zz.keysRight,
            set: (zz, tz) => {
              zz.keysRight = tz
            }
          },
          metadata: Oz
        }, mz, Jz), (0, Fz.h)(null, null, vz, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysReset" in zz,
            get: zz => zz.keysReset,
            set: (zz, tz) => {
              zz.keysReset = tz
            }
          },
          metadata: Oz
        }, Cz, ez), (0, Fz.h)(null, null, Uz, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysZoomIn" in zz,
            get: zz => zz.keysZoomIn,
            set: (zz, tz) => {
              zz.keysZoomIn = tz
            }
          },
          metadata: Oz
        }, Zz, Gz), (0, Fz.h)(null, null, Kz, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysZoomOut" in zz,
            get: zz => zz.keysZoomOut,
            set: (zz, tz) => {
              zz.keysZoomOut = tz
            }
          },
          metadata: Oz
        }, Tz, cz), (0, Fz.h)(null, null, uz, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "panningSensibility" in zz,
            get: zz => zz.panningSensibility,
            set: (zz, tz) => {
              zz.panningSensibility = tz
            }
          },
          metadata: Oz
        }, jz, Az), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "zoomingSensibility" in zz,
            get: zz => zz.zoomingSensibility,
            set: (zz, tz) => {
              zz.zoomingSensibility = tz
            }
          },
          metadata: Oz
        }, yz, Mz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: zz => "angularSpeed" in zz,
            get: zz => zz.angularSpeed,
            set: (zz, tz) => {
              zz.angularSpeed = tz
            }
          },
          metadata: Oz
        }, dz, hz), Oz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oz
        })
      })(), zz
    })();
    rz.e.ArcRotateCameraKeyboardMoveInput = Cz;
    var ez = sz(37199),
      Zz = sz(39337);
    let Gz = (() => {
      var zz;
      let tz, sz, Xz, vz = [],
        Uz = [],
        uz = [],
        bz = [],
        wz = [],
        Dz = [];
      return zz = class {
        constructor() {
          this.wheelPrecision = (0, Fz.k)(this, vz, 3), this.zoomToMouseLocation = ((0, Fz.k)(this, Uz), (0, Fz.k)(this, uz, !1)), this.wheelDeltaPercentage = ((0, Fz.k)(this, bz), (0, Fz.k)(this, wz, 0)), this.customComputeDeltaFromMouseWheel = ((0, Fz.k)(this, Dz), null), this._viewOffset = new Oz.p(0, 0, 0), this._globalOffset = new Oz.p(0, 0, 0), this._inertialPanning = Oz.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(zz, tz) {
          let sz;
          const Fz = .01 * zz * this.wheelDeltaPercentage * tz;
          return sz = zz > 0 ? Fz / (1 + this.wheelDeltaPercentage) : Fz * (1 + this.wheelDeltaPercentage), sz
        }
        attachControl(zz) {
          zz = Yz.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = tz => {
            if (tz.type !== Kz.c.POINTERWHEEL) return;
            const sz = tz.event;
            let Fz;
            const Wz = sz.deltaMode === Zz.e.DOM_DELTA_LINE ? 40 : 1,
              Xz = -sz.deltaY * Wz;
            if (this.customComputeDeltaFromMouseWheel) Fz = this.customComputeDeltaFromMouseWheel(Xz, this, sz);
            else if (this.wheelDeltaPercentage) {
              if (Fz = this._computeDeltaFromMouseWheelLegacyEvent(Xz, this.camera.radius), Fz > 0) {
                const zz = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let tz = this.camera.radius,
                  sz = zz + Fz;
                for (let Fz = 0; Fz < 20 && !(tz <= sz) && !(Math.abs(sz * this.camera.inertia) < .001); Fz++) tz -= sz, sz *= this.camera.inertia;
                tz = (0, oz.Clamp)(tz, 0, Number.MAX_VALUE), Fz = this._computeDeltaFromMouseWheelLegacyEvent(Xz, tz)
              }
            } else {
              const zz = this.camera.movement.input.getEntry("wheel", "zoom");
              Fz = Xz * (zz?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Fz && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Fz)) : this.camera.movement.zoomAccumulatedPixels += Fz), sz.preventDefault && (zz || sz.preventDefault())
          }, this._observer = this.camera.aJ()._inputManager._addCameraPointerObserver(this._wheel, Kz.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Z6(0)
        }
        detachControl() {
          this._observer && (this.camera.aJ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const zz = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(zz.inertialAlphaOffset) + Math.abs(zz.inertialBetaOffset) + Math.abs(zz.inertialRadiusOffset)) {
            this._updateHitPlane(), zz.target.addInPlace(this._inertialPanning), zz.radius -= this._zoomToMouseRadiusOffset;
            const tz = zz.movement.getFrameIndependentDecay(zz.inertia);
            this._inertialPanning.scaleInPlace(tz), this._zoomToMouseRadiusOffset *= tz, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Nz.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const zz = this.camera,
            tz = zz.target.subtract(zz.position);
          this._hitPlane = ez.c.FromPositionAndNormal(zz.target, tz)
        }
        _getPosition() {
          const zz = this.camera,
            tz = zz.aJ(),
            sz = tz.createPickingRay(tz.pointerX, tz.pointerY, Oz.e.Identity(), zz, !1);
          0 === zz.targetScreenOffset.x && 0 === zz.targetScreenOffset.y || (this._viewOffset.set(zz.targetScreenOffset.x, zz.targetScreenOffset.y, 0), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), this._globalOffset = Oz.p.TransformNormal(this._viewOffset, zz._cameraTransformMatrix), sz.origin.addInPlace(this._globalOffset));
          let Fz = 0;
          return this._hitPlane && (Fz = sz.intersectsPlane(this._hitPlane) ?? 0), sz.origin.addInPlace(sz.direction.scaleInPlace(Fz))
        }
        _zoomToMouse(zz) {
          const tz = this.camera,
            sz = 1 - tz.inertia,
            Fz = tz.movement.getFrameIndependentInputScale(tz.inertia);
          if (tz.lowerRadiusLimit) {
            const Wz = tz.lowerRadiusLimit ?? 0;
            tz.radius - (this._zoomToMouseRadiusOffset + zz * Fz) / sz < Wz && (zz = ((tz.radius - Wz) * sz - this._zoomToMouseRadiusOffset) / Fz)
          }
          if (tz.upperRadiusLimit) {
            const Wz = tz.upperRadiusLimit ?? 0;
            tz.radius - (this._zoomToMouseRadiusOffset + zz * Fz) / sz > Wz && (zz = ((tz.radius - Wz) * sz - this._zoomToMouseRadiusOffset) / Fz)
          }
          const Wz = zz / sz / tz.radius,
            Xz = this._getPosition(),
            oz = Oz.m.XD[6];
          Xz.subtractToRef(tz.target, oz), oz.scaleInPlace(Wz), oz.scaleInPlace(sz), oz.scaleInPlace(Fz), this._inertialPanning.addInPlace(oz), this._zoomToMouseRadiusOffset += zz * Fz
        }
        _zeroIfClose(zz) {
          Math.abs(zz.x) < Nz.c && (zz.x = 0), Math.abs(zz.y) < Nz.c && (zz.y = 0), Math.abs(zz.z) < Nz.c && (zz.z = 0)
        }
      }, (() => {
        const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecision" in zz,
            get: zz => zz.wheelPrecision,
            set: (zz, tz) => {
              zz.wheelPrecision = tz
            }
          },
          metadata: Oz
        }, vz, Uz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: zz => "zoomToMouseLocation" in zz,
            get: zz => zz.zoomToMouseLocation,
            set: (zz, tz) => {
              zz.zoomToMouseLocation = tz
            }
          },
          metadata: Oz
        }, uz, bz), (0, Fz.h)(null, null, Xz, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelDeltaPercentage" in zz,
            get: zz => zz.wheelDeltaPercentage,
            set: (zz, tz) => {
              zz.wheelDeltaPercentage = tz
            }
          },
          metadata: Oz
        }, wz, Dz), Oz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oz
        })
      })(), zz
    })();
    rz.e.ArcRotateCameraMouseWheelInput = Gz;
    var Tz, cz, jz = sz(39065);
    class Az extends rz.g {
      constructor(zz) {
        super(zz)
      }
      addMouseWheel() {
        return this.add(new Gz), this
      }
      addPointers() {
        return this.add(new Jz), this
      }
      addKeyboard() {
        return this.add(new Cz), this
      }
    }(Tz = Az.prototype).addVRDeviceOrientation ?? (Tz.addVRDeviceOrientation = (0, jz.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (cz = Az.prototype).addGamepad ?? (cz.addGamepad = (0, jz.g)("ArcRotateCameraInputsManager", "addGamepad"));
    var yz = sz(36518),
      Mz = sz(39390),
      dz = sz(39395);
    class hz extends Mz.b {
      constructor(zz, tz, sz) {
        super(zz, tz, sz), this.input = new dz.d({
          pan: (zz, tz) => {
            this.panAccumulatedPixels.x += zz, this.panAccumulatedPixels.y += tz
          },
          rotate: (zz, tz) => {
            this.rotationAccumulatedPixels.x += zz, this.rotationAccumulatedPixels.y += tz
          },
          zoom: zz => {
            this.zoomAccumulatedPixels += zz
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

    function Qz(zz, tz) {
      return isNaN(zz) ? tz : zz
    }
    let kz = (() => {
        var zz;
        let tz, sz, vz, Kz, uz, wz, Dz, rz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, yz, Mz, dz, kz, iz, Lz, lz, nz, az, qz = Pz.h,
          Sz = [],
          Vz = [],
          Rz = [],
          pz = [],
          fz = [],
          Ez = [],
          zt = [],
          tt = [],
          st = [],
          Ft = [],
          Wt = [],
          Xt = [],
          Ot = [],
          ot = [],
          vt = [],
          Ut = [],
          Kt = [],
          ut = [],
          Nt = [],
          bt = [],
          wt = [],
          Dt = [],
          gt = [],
          Ht = [],
          Bt = [],
          Pt = [],
          rt = [],
          Yt = [],
          xt = [],
          mt = [],
          Jt = [],
          It = [],
          Ct = [],
          et = [],
          Zt = [],
          Gt = [],
          Tt = [],
          ct = [],
          jt = [],
          At = [],
          yt = [],
          Mt = [],
          dt = [],
          ht = [],
          Qt = [],
          kt = [],
          it = [];
        return zz = class extends qz {
          get target() {
            return this.vV
          }
          set target(zz) {
            this.setTarget(zz)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(zz) {
            zz && this.setTarget(zz)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(zz) {
            this.setPosition(zz)
          }
          set upVector(zz) {
            this._upToYMatrix || (this._yToUpMatrix = new Oz.e, this._upToYMatrix = new Oz.e, this._upVector = Oz.p.Zero()), zz.normalize(), this._upVector.vsz(zz), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Oz.e.RotationAlignToRef(Oz.p.UpReadOnly, this._upVector, this._yToUpMatrix), Oz.e.RotationAlignToRef(this._upVector, Oz.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const zz = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(zz) < this._rotationEpsilon ? 0 : zz
          }
          set inertialAlphaOffset(zz) {
            this._inertialAlphaOffset = zz, 0 === zz && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const zz = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(zz) < this._rotationEpsilon ? 0 : zz
          }
          set inertialBetaOffset(zz) {
            this._inertialBetaOffset = zz, 0 === zz && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const zz = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(zz) < this._rotationEpsilon ? 0 : zz
          }
          set inertialRadiusOffset(zz) {
            this._inertialRadiusOffset = zz, 0 === zz && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(zz) {
            this._panningInertia = zz, this.movement && (this.movement.panInertia = zz)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(zz) {
            this._inertia = zz, this.movement && (this.movement.rotationInertia = zz, this.movement.zoomInertia = zz)
          }
          get angularSensibilityX() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.angularSensibilityX : 0
          }
          set angularSensibilityX(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.angularSensibilityX = zz)
          }
          get angularSensibilityY() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.angularSensibilityY : 0
          }
          set angularSensibilityY(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.angularSensibilityY = zz)
          }
          get pinchPrecision() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.pinchPrecision : 0
          }
          set pinchPrecision(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.pinchPrecision = zz)
          }
          get pinchDeltaPercentage() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.pinchDeltaPercentage = zz)
          }
          get useNaturalPinchZoom() {
            const zz = this.inputs.attached.pointers;
            return !!zz && zz.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.useNaturalPinchZoom = zz)
          }
          get panningSensibility() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.panningSensibility : 0
          }
          set panningSensibility(zz) {
            const tz = this.inputs.attached.pointers;
            tz && (tz.panningSensibility = zz)
          }
          get keysUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUp : []
          }
          set keysUp(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysUp = zz)
          }
          get keysDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDown : []
          }
          set keysDown(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysDown = zz)
          }
          get keysLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysLeft : []
          }
          set keysLeft(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysLeft = zz)
          }
          get keysRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRight : []
          }
          set keysRight(zz) {
            const tz = this.inputs.attached.keyboard;
            tz && (tz.keysRight = zz)
          }
          get wheelPrecision() {
            const zz = this.inputs.attached.mousewheel;
            return zz ? zz.wheelPrecision : 0
          }
          set wheelPrecision(zz) {
            const tz = this.inputs.attached.mousewheel;
            tz && (tz.wheelPrecision = zz)
          }
          get zoomToMouseLocation() {
            const zz = this.inputs.attached.mousewheel;
            return !!zz && zz.zoomToMouseLocation
          }
          set zoomToMouseLocation(zz) {
            const tz = this.inputs.attached.mousewheel;
            tz && (tz.zoomToMouseLocation = zz)
          }
          get wheelDeltaPercentage() {
            const zz = this.inputs.attached.mousewheel;
            return zz ? zz.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(zz) {
            const tz = this.inputs.attached.mousewheel;
            tz && (tz.wheelDeltaPercentage = zz)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(zz) {
            this._useCtrlForPanningInternal = zz;
            const tz = this.movement.input,
              sz = tz.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !zz && sz ? tz.inputMap.splice(tz.inputMap.indexOf(sz), 1) : zz && !sz && tz.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Fz = tz.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !zz && Fz ? tz.inputMap.splice(tz.inputMap.indexOf(Fz), 1) : zz && !Fz && tz.addEntry({
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
          set _panningMouseButton(zz) {
            this._panningMouseButtonInternal = zz;
            const tz = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            tz && (tz.button = zz)
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
          set useBouncingBehavior(zz) {
            zz !== this.useBouncingBehavior && (zz ? (this._bouncingBehavior = new gz, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(zz) {
            zz !== this.useFramingBehavior && (zz ? (this._framingBehavior = new Hz, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(zz) {
            zz !== this.useAutoRotationBehavior && (zz ? (this._autoRotationBehavior = new bz, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(zz, tz, sz, Wz, oz, vz) {
            var Uz;
            let Kz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(zz, Oz.p.Zero(), vz, Kz), Uz = this, this.alpha = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, void 0)), this.beta = ((0, Fz.k)(this, Rz), (0, Fz.k)(this, pz, void 0)), this.radius = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, void 0)), this.vV = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, void 0)), this._targetHost = ((0, Fz.k)(this, Wt), (0, Fz.k)(this, Xt, void 0)), this._upToYMatrix = (0, Fz.k)(this, Ot), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Fz.k)(this, ot, null), this.upperAlphaLimit = ((0, Fz.k)(this, vt), (0, Fz.k)(this, Ut, null)), this.lowerBetaLimit = ((0, Fz.k)(this, Kt), (0, Fz.k)(this, ut, .01)), this.upperBetaLimit = ((0, Fz.k)(this, Nt), (0, Fz.k)(this, bt, Math.PI - .01)), this.lowerRadiusLimit = ((0, Fz.k)(this, wt), (0, Fz.k)(this, Dt, null)), this.upperRadiusLimit = ((0, Fz.k)(this, gt), (0, Fz.k)(this, Ht, null)), this.lowerTargetYLimit = ((0, Fz.k)(this, Bt), (0, Fz.k)(this, Pt, -1 / 0)), this.inertialPanningX = ((0, Fz.k)(this, rt), (0, Fz.k)(this, Yt, 0)), this.inertialPanningY = ((0, Fz.k)(this, xt), (0, Fz.k)(this, mt, 0)), this.pinchToPanMaxDistance = ((0, Fz.k)(this, Jt), (0, Fz.k)(this, It, 20)), this.panningDistanceLimit = ((0, Fz.k)(this, Ct), (0, Fz.k)(this, et, null)), this.panningOriginTarget = ((0, Fz.k)(this, Zt), (0, Fz.k)(this, Gt, Oz.p.Zero())), this._panningInertia = ((0, Fz.k)(this, Tt), .9), this._inertia = .9, this.zoomOnFactor = (0, Fz.k)(this, ct, 1), this.targetScreenOffset = ((0, Fz.k)(this, jt), (0, Fz.k)(this, At, Oz.n.Zero())), this.allowUpsideDown = ((0, Fz.k)(this, yt), (0, Fz.k)(this, Mt, !0)), this.useInputToRestoreState = ((0, Fz.k)(this, dt), (0, Fz.k)(this, ht, !0)), this.restoreStateInterpolationFactor = ((0, Fz.k)(this, Qt), (0, Fz.k)(this, kt, 0)), this._currentInterpolationFactor = ((0, Fz.k)(this, it), 0), this._viewMatrix = new Oz.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Oz.p(1, 1, 0), this._transformedDirection = new Oz.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Xz.c, this.checkCollisions = !1, this.collisionRadius = new Oz.p(.5, .5, .5), this._previousPosition = Oz.p.Zero(), this._collisionVelocity = Oz.p.Zero(), this._newPosition = Oz.p.Zero(), this._computationVector = Oz.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Oz.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new Oz.n(NaN, NaN), this._onCollisionPositionChange = function(zz, tz) {
              let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              sz ? (Uz.setPosition(tz), Uz.cN && Uz.cN(sz)) : Uz._previousPosition.vsz(Uz._position);
              const Fz = Math.cos(Uz.alpha),
                Wz = Math.sin(Uz.alpha),
                Xz = Math.cos(Uz.beta);
              let Oz = Math.sin(Uz.beta);
              0 === Oz && (Oz = 1e-4);
              const oz = Uz._getTargetPosition();
              Uz._computationVector.m_(Uz.radius * Fz * Oz, Uz.radius * Xz, Uz.radius * Wz * Oz), oz.addToRef(Uz._computationVector, Uz._newPosition), Uz._position.vsz(Uz._newPosition);
              let vz = Uz.upVector;
              Uz.allowUpsideDown && Uz.beta < 0 && (vz = vz.clone(), vz = vz.nt()), Uz._computeViewMatrix(Uz._position, oz, vz), Uz._viewMatrix.addAtIndex(12, Uz.targetScreenOffset.x), Uz._viewMatrix.addAtIndex(13, Uz.targetScreenOffset.y), Uz._collisionTriggered = !1
            }, this.vV = Oz.p.Zero(), oz && this.setTarget(oz), this.alpha = tz, this.beta = sz, this.radius = Wz, this.getViewMatrix(), this.inputs = new Az(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new hz(this.aJ(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.vV = new Oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Oz.n.Zero()
          }
          _updateCache(zz) {
            zz || super._updateCache(), this._cache.vV.vsz(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.vsz(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const zz = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? zz.addToRef(this._targetBoundingCenter, this.vV) : this.vV.vsz(zz)
            }
            const zz = this._getLockedTargetPosition();
            return zz || this.vV
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Nz.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Xz = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Xz ? this._currentInterpolationFactor = Xz : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = Qz(zz, this._goalAlpha), this._goalBeta = Qz(tz, this._goalBeta), this._goalRadius = Qz(sz, this._goalRadius), this._goalTarget.set(Qz(Fz.x, this._goalTarget.x), Qz(Fz.y, this._goalTarget.y), Qz(Fz.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(Qz(Wz.x, this._goalTargetScreenOffset.x), Qz(Wz.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, oz.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, oz.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, oz.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, oz.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.vV.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(zz, tz) {
            let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Wz = arguments;
            tz = Yz.j.BackCompatCameraNoPreventDefault(Wz), this._useCtrlForPanning = sz, this._panningMouseButton = Fz, "boolean" === typeof Wz[0] && (Wz.length > 1 && (this._useCtrlForPanning = Wz[1]), Wz.length > 2 && (this._panningMouseButton = Wz[2])), this.inputs.attachElement(tz), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(zz, tz, sz) {
            const Fz = this.invertRotation ? -1 : 1;
            let Wz = zz * this._calculateHandednessMultiplier();
            this.beta < 0 && (Wz *= -1), this.alpha += Wz * Fz, this.beta += tz * Fz, this.radius -= sz
          }
          _applyPanDelta(zz, tz) {
            const sz = Oz.m.XD[0].m_(zz, tz, tz);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), sz.multiplyInPlace(this.panningAxis), Oz.p.TransformNormalToRef(sz, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const zz = this.upVector,
                tz = Oz.p.CrossToRef(this._transformedDirection, zz, this._transformedDirection);
              Oz.p.CrossToRef(zz, tz, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.vV);
                Oz.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.vV.vsz(this._transformedDirection)
              } else {
                if (this.parent) {
                  const zz = Oz.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(zz), zz.transposeToRef(zz), Oz.p.TransformCoordinatesToRef(this._transformedDirection, zz, this._transformedDirection)
                }
                this.vV.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let zz = !1;
            this.movement.computeCurrentFrameDeltas();
            const tz = this.movement.rotationDeltaCurrentFrame,
              sz = this.movement.zoomDeltaCurrentFrame,
              Fz = this.movement.panDeltaCurrentFrame;
            if (0 === tz.x && 0 === tz.y && 0 === sz && 0 === Fz.x && 0 === Fz.y || (zz = !0, 0 === tz.x && 0 === tz.y && 0 === sz || this._applyRotationAndZoomDelta(tz.x, tz.y, sz), 0 === Fz.x && 0 === Fz.y || this._applyPanDelta(Fz.x, Fz.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), zz = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const tz = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < tz && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < tz && (this.inertialPanningY = 0), zz = !0
            }
            if (zz) this.stopInterpolation();
            else if (this._isInterpolating) {
              let zz = !1;
              const tz = this._scene.FD().getDeltaTime() / 1e3,
                sz = 1 - Math.pow(2, -tz / this._currentInterpolationFactor),
                Fz = Qz(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const tz = Oz.m.XD[0].set(Qz(this._goalTarget.x, this.vV.x), Qz(this._goalTarget.y, this.vV.y), Qz(this._goalTarget.z, this.vV.z));
                Oz.p.LerpToRef(this.target, tz, sz, this.vV), 10 * Oz.p.Distance(this.target, tz) / Fz < Nz.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.vsz(tz), this.setTarget(this.target, !1, !0, !0)) : zz = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const tz = Oz.h.RotationAlphaBetaGammaToRef(Qz(this._goalAlpha, this.alpha), Qz(this._goalBeta, this.beta), 0, Oz.m.Quaternion[0]),
                  Fz = Oz.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Oz.m.Quaternion[1]),
                  Wz = Oz.h.SlerpToRef(Fz, tz, sz, Oz.m.Quaternion[2]);
                Wz.normalize();
                const Xz = Wz.toAlphaBetaGammaToRef(Oz.m.XD[0]);
                if (this.alpha = Xz.x, this.beta = Xz.y, Wz.isApprox(tz, Nz.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const zz = tz.toAlphaBetaGammaToRef(Oz.m.XD[0]);
                  this.alpha = zz.x, this.beta = zz.y
                } else zz = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Fz - this.radius) * sz, Math.abs(Fz / this.radius - 1) < Nz.c ? (this._goalRadius = NaN, this.radius = Fz) : zz = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const tz = Oz.m.Vector2[0].set(Qz(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Qz(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Oz.n.LerpToRef(this.targetScreenOffset, tz, sz, this.targetScreenOffset), Oz.n.Distance(this.targetScreenOffset, tz) < Nz.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.vsz(tz)) : zz = !0
              }
              this._isInterpolating = zz
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Oz.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const zz = this.alpha;
            var tz, sz;
            this.alpha = function(zz) {
              let tz = Math.PI / 2;
              return 0 === zz.x && 0 === zz.z || (tz = Math.acos(zz.x / Math.sqrt(Math.pow(zz.x, 2) + Math.pow(zz.z, 2)))), zz.z < 0 && (tz = 2 * Math.PI - tz), tz
            }(this._computationVector), this.beta = (tz = this._computationVector.y, sz = this.radius, Math.acos(tz / sz));
            const Fz = Math.round((zz - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Fz * Math.PI, this._checkLimits()
          }
          setPosition(zz) {
            this._position.equals(zz) || (this._position.vsz(zz), this.rebuildAnglesAndRadius())
          }
          setTarget(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Fz = this.overrideCloneAlphaBetaRadius ?? Fz, zz.computeWorldMatrix) tz && zz.rC ? this._targetBoundingCenter = zz.rC().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, zz.computeWorldMatrix(), this._targetHost = zz, this.vV = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const tz = zz,
                Fz = this._getTargetPosition();
              if (Fz && !sz && Fz.equals(tz)) return;
              this._targetHost = null, this.vV = tz, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Fz || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const zz = Math.cos(this.alpha),
              tz = Math.sin(this.alpha),
              sz = Math.cos(this.beta);
            let Fz = Math.sin(this.beta);
            0 === Fz && (Fz = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Wz = this._getTargetPosition();
            if (this._computationVector.m_(this.radius * zz * Fz, this.radius * sz, this.radius * tz * Fz), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Oz.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Wz.addToRef(this._computationVector, this._newPosition), this.aJ().collisionsEnabled && this.checkCollisions) {
              const zz = this.aJ().collisionCoordinator;
              this._collider || (this._collider = zz.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, zz.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.vsz(this._newPosition);
              let zz = this.upVector;
              this.allowUpsideDown && Fz < 0 && (zz = zz.nt()), this._computeViewMatrix(this._position, Wz, zz), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.vsz(Wz), this._viewMatrix
          }
          zoomOn(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            zz = zz || this.aJ().meshes;
            const sz = Uz.c.MinMax(zz);
            let Fz = this._calculateLowerRadiusFromModelBoundingSphere(sz.min, sz.max);
            if (Fz = Math.max(Math.min(Fz, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Fz * this.zoomOnFactor, this.mode === Bz.b.ORTHOGRAPHIC_CAMERA) {
              const zz = this.aJ().FD().getAspectRatio(this),
                tz = Fz * this.zoomOnFactor / 2;
              this.orthoLeft = -tz * zz, this.orthoRight = tz * zz, this.orthoBottom = -tz, this.orthoTop = tz
            }
            this.focusOn({
              min: sz.min,
              max: sz.max,
              distance: Fz
            }, tz)
          }
          focusOn(zz) {
            let tz, sz, Fz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === zz.min) {
              const Fz = zz || this.aJ().meshes;
              tz = Uz.c.MinMax(Fz), sz = Oz.p.Distance(tz.min, tz.max)
            } else {
              tz = zz, sz = zz.distance
            }
            this.vV = Uz.c.Center(tz), Fz || (this.maxZ = 2 * sz)
          }
          createRigCamera(tz, sz) {
            let Fz = 0;
            switch (this.cameraRigMode) {
              case Bz.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Bz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Bz.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Bz.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Bz.b.RIG_MODE_VR:
                Fz = this._cameraRigParams.stereoHalfAngle * (0 === sz ? 1 : -1);
                break;
              case Bz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Fz = this._cameraRigParams.stereoHalfAngle * (0 === sz ? -1 : 1)
            }
            const Wz = new zz(tz, this.alpha + Fz, this.beta, this.radius, this.vV, this.aJ());
            return Wz._cameraRigParams = {}, Wz.isRigCamera = !0, Wz.rigParent = this, Wz.upVector = this.upVector, Wz.mode = this.mode, Wz.orthoLeft = this.orthoLeft, Wz.orthoRight = this.orthoRight, Wz.orthoBottom = this.orthoBottom, Wz.orthoTop = this.orthoTop, Wz
          }
          _updateRigCameras() {
            const zz = this._rigCameras[0],
              tz = this._rigCameras[1];
            switch (zz.beta = tz.beta = this.beta, this.cameraRigMode) {
              case Bz.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Bz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Bz.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Bz.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Bz.b.RIG_MODE_VR:
                zz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, tz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Bz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                zz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, tz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(zz, tz) {
            let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Fz = Oz.p.Distance(zz, tz),
              Wz = this.aJ().FD().getAspectRatio(this),
              Xz = Math.tan(this.fov / 2),
              oz = Xz * Wz,
              vz = .5 * Fz * sz,
              Uz = vz * Math.sqrt(1 + 1 / (oz * oz)),
              Kz = vz * Math.sqrt(1 + 1 / (Xz * Xz));
            return Math.max(Uz, Kz)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(qz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], vz = [(0, Wz.J)()], Kz = [(0, Wz.J)()], uz = [(0, Wz.H)("target")], wz = [(0, Wz.x)("targetHost")], Dz = [(0, Wz.J)()], rz = [(0, Wz.J)()], xz = [(0, Wz.J)()], mz = [(0, Wz.J)()], Jz = [(0, Wz.J)()], Iz = [(0, Wz.J)()], Cz = [(0, Wz.J)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], Tz = [(0, Wz.J)()], cz = [(0, Wz.J)()], jz = [(0, Wz.J)()], yz = [(0, Wz.J)()], Mz = [(0, Wz.H)()], dz = [(0, Wz.J)()], kz = [(0, Wz.J)()], iz = [(0, Wz.J)()], Lz = [(0, Wz.E)()], lz = [(0, Wz.J)()], nz = [(0, Wz.J)()], az = [(0, Wz.J)()], (0, Fz.h)(zz, null, Dz, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialAlphaOffset" in zz,
              get: zz => zz.inertialAlphaOffset
            },
            metadata: Xz
          }, null, Sz), (0, Fz.h)(zz, null, rz, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialBetaOffset" in zz,
              get: zz => zz.inertialBetaOffset
            },
            metadata: Xz
          }, null, Sz), (0, Fz.h)(zz, null, xz, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialRadiusOffset" in zz,
              get: zz => zz.inertialRadiusOffset
            },
            metadata: Xz
          }, null, Sz), (0, Fz.h)(zz, null, dz, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningInertia" in zz,
              get: zz => zz.panningInertia
            },
            metadata: Xz
          }, null, Sz), (0, Fz.h)(zz, null, kz, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: zz => "zoomToMouseLocation" in zz,
              get: zz => zz.zoomToMouseLocation
            },
            metadata: Xz
          }, null, Sz), (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "alpha" in zz,
              get: zz => zz.alpha,
              set: (zz, tz) => {
                zz.alpha = tz
              }
            },
            metadata: Xz
          }, Vz, Rz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: zz => "beta" in zz,
              get: zz => zz.beta,
              set: (zz, tz) => {
                zz.beta = tz
              }
            },
            metadata: Xz
          }, pz, fz), (0, Fz.h)(null, null, vz, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: zz => "radius" in zz,
              get: zz => zz.radius,
              set: (zz, tz) => {
                zz.radius = tz
              }
            },
            metadata: Xz
          }, Ez, zt), (0, Fz.h)(null, null, Kz, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: zz => "overrideCloneAlphaBetaRadius" in zz,
              get: zz => zz.overrideCloneAlphaBetaRadius,
              set: (zz, tz) => {
                zz.overrideCloneAlphaBetaRadius = tz
              }
            },
            metadata: Xz
          }, tt, st), (0, Fz.h)(null, null, uz, {
            kind: "field",
            name: "vV",
            static: !1,
            private: !1,
            access: {
              has: zz => "vV" in zz,
              get: zz => zz.vV,
              set: (zz, tz) => {
                zz.vV = tz
              }
            },
            metadata: Xz
          }, Ft, Wt), (0, Fz.h)(null, null, wz, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: zz => "_targetHost" in zz,
              get: zz => zz._targetHost,
              set: (zz, tz) => {
                zz._targetHost = tz
              }
            },
            metadata: Xz
          }, Xt, Ot), (0, Fz.h)(null, null, mz, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerAlphaLimit" in zz,
              get: zz => zz.lowerAlphaLimit,
              set: (zz, tz) => {
                zz.lowerAlphaLimit = tz
              }
            },
            metadata: Xz
          }, ot, vt), (0, Fz.h)(null, null, Jz, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperAlphaLimit" in zz,
              get: zz => zz.upperAlphaLimit,
              set: (zz, tz) => {
                zz.upperAlphaLimit = tz
              }
            },
            metadata: Xz
          }, Ut, Kt), (0, Fz.h)(null, null, Iz, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerBetaLimit" in zz,
              get: zz => zz.lowerBetaLimit,
              set: (zz, tz) => {
                zz.lowerBetaLimit = tz
              }
            },
            metadata: Xz
          }, ut, Nt), (0, Fz.h)(null, null, Cz, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperBetaLimit" in zz,
              get: zz => zz.upperBetaLimit,
              set: (zz, tz) => {
                zz.upperBetaLimit = tz
              }
            },
            metadata: Xz
          }, bt, wt), (0, Fz.h)(null, null, ez, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerRadiusLimit" in zz,
              get: zz => zz.lowerRadiusLimit,
              set: (zz, tz) => {
                zz.lowerRadiusLimit = tz
              }
            },
            metadata: Xz
          }, Dt, gt), (0, Fz.h)(null, null, Zz, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperRadiusLimit" in zz,
              get: zz => zz.upperRadiusLimit,
              set: (zz, tz) => {
                zz.upperRadiusLimit = tz
              }
            },
            metadata: Xz
          }, Ht, Bt), (0, Fz.h)(null, null, Gz, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerTargetYLimit" in zz,
              get: zz => zz.lowerTargetYLimit,
              set: (zz, tz) => {
                zz.lowerTargetYLimit = tz
              }
            },
            metadata: Xz
          }, Pt, rt), (0, Fz.h)(null, null, Tz, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialPanningX" in zz,
              get: zz => zz.inertialPanningX,
              set: (zz, tz) => {
                zz.inertialPanningX = tz
              }
            },
            metadata: Xz
          }, Yt, xt), (0, Fz.h)(null, null, cz, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialPanningY" in zz,
              get: zz => zz.inertialPanningY,
              set: (zz, tz) => {
                zz.inertialPanningY = tz
              }
            },
            metadata: Xz
          }, mt, Jt), (0, Fz.h)(null, null, jz, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchToPanMaxDistance" in zz,
              get: zz => zz.pinchToPanMaxDistance,
              set: (zz, tz) => {
                zz.pinchToPanMaxDistance = tz
              }
            },
            metadata: Xz
          }, It, Ct), (0, Fz.h)(null, null, yz, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningDistanceLimit" in zz,
              get: zz => zz.panningDistanceLimit,
              set: (zz, tz) => {
                zz.panningDistanceLimit = tz
              }
            },
            metadata: Xz
          }, et, Zt), (0, Fz.h)(null, null, Mz, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningOriginTarget" in zz,
              get: zz => zz.panningOriginTarget,
              set: (zz, tz) => {
                zz.panningOriginTarget = tz
              }
            },
            metadata: Xz
          }, Gt, Tt), (0, Fz.h)(null, null, iz, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: zz => "zoomOnFactor" in zz,
              get: zz => zz.zoomOnFactor,
              set: (zz, tz) => {
                zz.zoomOnFactor = tz
              }
            },
            metadata: Xz
          }, ct, jt), (0, Fz.h)(null, null, Lz, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "targetScreenOffset" in zz,
              get: zz => zz.targetScreenOffset,
              set: (zz, tz) => {
                zz.targetScreenOffset = tz
              }
            },
            metadata: Xz
          }, At, yt), (0, Fz.h)(null, null, lz, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: zz => "allowUpsideDown" in zz,
              get: zz => zz.allowUpsideDown,
              set: (zz, tz) => {
                zz.allowUpsideDown = tz
              }
            },
            metadata: Xz
          }, Mt, dt), (0, Fz.h)(null, null, nz, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: zz => "useInputToRestoreState" in zz,
              get: zz => zz.useInputToRestoreState,
              set: (zz, tz) => {
                zz.useInputToRestoreState = tz
              }
            },
            metadata: Xz
          }, ht, Qt), (0, Fz.h)(null, null, az, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: zz => "restoreStateInterpolationFactor" in zz,
              get: zz => zz.restoreStateInterpolationFactor,
              set: (zz, tz) => {
                zz.restoreStateInterpolationFactor = tz
              }
            },
            metadata: Xz
          }, kt, it), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      iz = !1;
    iz || (iz = !0, vz.e.AddNodeConstructor("ArcRotateCamera", ((zz, tz) => () => new kz(zz, 0, 0, 1, Oz.p.Zero(), tz))), (0, yz.g)("BABYLON.ArcRotateCamera", kz))
  },
  39408: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.b
    });
    var Fz = sz(39413);
    (0, Fz.e)()
  },
  39413: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => Nz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(36654),
      oz = sz(39421),
      vz = sz(39374),
      Uz = sz(36518);
    let Kz = (() => {
        var zz;
        let tz, sz, vz = oz.d,
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        return zz = class extends vz {
          constructor(zz, tz, sz, Wz) {
            super(zz, sz, Wz), this.groundColor = (0, Fz.k)(this, Uz, new Oz.c(0, 0, 0)), this.direction = ((0, Fz.k)(this, Kz), (0, Fz.k)(this, uz, void 0)), (0, Fz.k)(this, Nz), this.direction = tz || Xz.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = Xz.p.Normalize(zz.subtract(Xz.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sz.x, sz.y, sz.z, 0, tz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), tz), this
          }
          transferToNodeMaterialEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return zz.setFloat3(tz, sz.x, sz.y, sz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Xz.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return oz.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, tz) {
            zz["HEMILIGHT" + tz] = !0
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.p)()], sz = [(0, Wz.H)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, tz) => {
                zz.groundColor = tz
              }
            },
            metadata: Xz
          }, Uz, Kz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, tz) => {
                zz.direction = tz
              }
            },
            metadata: Xz
          }, uz, Nz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      uz = !1;

    function Nz() {
      uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_3", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.HemisphericLight", Kz))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
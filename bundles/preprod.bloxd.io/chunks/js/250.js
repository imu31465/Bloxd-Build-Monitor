export const id = 250;
export const ids = [250];
export const modules = {
  40281: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => gz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36547),
      lz = bz(36519),
      Mz = bz(36553),
      tz = bz(39384),
      Hz = bz(39584),
      Oz = bz(39331),
      pz = bz(39085),
      dz = bz(36526);
    class Fz {
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
        const uz = this._attachedCamera.XT();
        this._onPrePointerObservableObserver = uz.onPrePointerObservable.add((zz => {
          zz.type !== Oz.c.POINTERDOWN ? zz.type === Oz.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = zz.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const zz = pz.b.Now;
          let uz = 0;
          null != this._lastFrameTime && (uz = zz - this._lastFrameTime), this._lastFrameTime = zz, this._applyUserInteraction();
          const bz = zz - this._lastInteractionTime - this._idleRotationWaitTime,
            Ez = Math.max(Math.min(bz / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * Ez, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (uz / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const zz = this._attachedCamera.XT();
        this._onPrePointerObservableObserver && zz.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(zz) {
        this._lastInteractionTime = zz ?? pz.b.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < dz.b
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
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = pz.b.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    bz(40289);
    class Zz {
      constructor() {
        this._easingMode = Zz.EASINGMODE_EASEIN
      }
      setEasingMode(zz) {
        const uz = Math.min(Math.max(zz, 0), 2);
        this._easingMode = uz
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(zz) {
        throw new Error("You must implement this method")
      }
      ease(zz) {
        switch (this._easingMode) {
          case Zz.EASINGMODE_EASEIN:
            return this.easeInCore(zz);
          case Zz.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - zz)
        }
        return zz >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - zz))) + .5 : .5 * this.easeInCore(2 * zz)
      }
    }
    Zz.EASINGMODE_EASEIN = 0, Zz.EASINGMODE_EASEOUT = 1, Zz.EASINGMODE_EASEINOUT = 2;
    var Rz = bz(40298);
    class Kz {
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
        const uz = this._attachedCamera;
        uz && (zz ? this._onMeshTargetChangedObserver = uz.onMeshTargetChangedObservable.add((zz => {
          if (zz && (zz.computeWorldMatrix(!0), zz.lG)) {
            const uz = zz.lG().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * uz, this.upperRadiusTransitionRange = .05 * uz
          }
        })) : this._onMeshTargetChangedObserver && uz.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
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
        this._radiusBounceTransition || (Kz.EasingFunction.setEasingMode(Kz.EasingMode), this._radiusBounceTransition = Rz.c.CreateAnimation("radius", Rz.c.ANIMATIONTYPE_FLOAT, 60, Kz.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const uz = Rz.c.TransitionTo("radius", this._attachedCamera.radius + zz, this._attachedCamera, this._attachedCamera.XT(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        uz && this._animatables.push(uz)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    Kz.EasingFunction = new class extends Zz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = zz
      }
      easeInCore(zz) {
        const uz = Math.max(0, this.amplitude);
        return Math.pow(zz, 3) - zz * uz * Math.sin(3.141592653589793 * zz)
      }
    }(.3), Kz.EasingMode = Zz.EASINGMODE_EASEOUT;
    class wz {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new iz.b, this._mode = wz.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
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
        const uz = this._attachedCamera.XT();
        wz.EasingFunction.setEasingMode(wz.EasingMode), this._onPrePointerObservableObserver = uz.onPrePointerObservable.add((zz => {
          zz.type !== Oz.c.POINTERDOWN ? zz.type === Oz.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = zz.onMeshTargetChangedObservable.add((zz => {
          zz && zz.lG && this.zoomOnMesh(zz, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = zz.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const zz = this._attachedCamera.XT();
        this._onPrePointerObservableObserver && zz.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        zz.computeWorldMatrix(!0);
        const Ez = zz.lG().boundingBox;
        this.zoomOnBoundingInfo(Ez.minimumWorld, Ez.maximumWorld, uz, bz)
      }
      zoomOnMeshHierarchy(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        zz.computeWorldMatrix(!0);
        const Ez = zz.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(Ez.min, Ez.max, uz, bz)
      }
      zoomOnMeshesHierarchy(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ez = new lz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          nz = new lz.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let iz = 0; iz < zz.length; iz++) {
          const uz = zz[iz].getHierarchyBoundingVectors(!0);
          lz.n.CheckExtends(uz.min, Ez, nz), lz.n.CheckExtends(uz.max, Ez, nz)
        }
        this.zoomOnBoundingInfo(Ez, nz, uz, bz)
      }
      zoomOnBoundingInfo(zz, uz) {
        let bz, Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const iz = zz.y,
          Mz = iz + (uz.y - iz) * this._positionScale,
          tz = uz.subtract(zz).scale(.5);
        if (!isFinite(Mz)) return !1;
        if (Ez) bz = new lz.n(0, Mz, 0);
        else {
          const uz = zz.add(tz);
          bz = new lz.n(uz.x, Mz, uz.z)
        }
        this._vectorTransition || (this._vectorTransition = Rz.c.CreateAnimation("target", Rz.c.ANIMATIONTYPE_VECTOR3, 60, wz.EasingFunction)), this._betaIsAnimating = !0;
        let Hz = Rz.c.TransitionTo("target", bz, this._attachedCamera, this._attachedCamera.XT(), 60, this._vectorTransition, this._framingTime);
        Hz && this._animatables.push(Hz);
        let Oz = 0;
        if (this._mode === wz.FitFrustumSidesMode) {
          const bz = this._calculateLowerRadiusFromModelBoundingSphere(zz, uz);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = tz.length() + this._attachedCamera.minZ), Oz = bz
        } else this._mode === wz.IgnoreBoundsSizeMode && (Oz = this._calculateLowerRadiusFromModelBoundingSphere(zz, uz), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const bz = uz.subtract(zz).length();
          this._attachedCamera.panningSensibility = 5e3 / bz, this._attachedCamera.wheelPrecision = 100 / Oz
        }
        return this._radiusTransition || (this._radiusTransition = Rz.c.CreateAnimation("radius", Rz.c.ANIMATIONTYPE_FLOAT, 60, wz.EasingFunction)), Hz = Rz.c.TransitionTo("radius", Oz, this._attachedCamera, this._attachedCamera.XT(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), nz && nz(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Hz && this._animatables.push(Hz), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(zz, uz) {
        const bz = this._attachedCamera;
        if (!bz) return 0;
        let Ez = bz._calculateLowerRadiusFromModelBoundingSphere(zz, uz, this._radiusScale);
        return bz.lowerRadiusLimit && this._mode === wz.IgnoreBoundsSizeMode && (Ez = Ez < bz.lowerRadiusLimit ? bz.lowerRadiusLimit : Ez), bz.upperRadiusLimit && (Ez = Ez > bz.upperRadiusLimit ? bz.upperRadiusLimit : Ez), Ez
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const zz = pz.b.Now - this._lastInteractionTime,
          uz = .5 * Math.PI - this._defaultElevation,
          bz = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > bz && zz >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Rz.c.CreateAnimation("beta", Rz.c.ANIMATIONTYPE_FLOAT, 60, wz.EasingFunction));
          const zz = Rz.c.TransitionTo("beta", uz, this._attachedCamera, this._attachedCamera.XT(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          zz && this._animatables.push(zz)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = pz.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    wz.EasingFunction = new class extends Zz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = zz
      }
      easeInCore(zz) {
        return this.exponent <= 0 ? zz : (Math.exp(this.exponent * zz) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, wz.EasingMode = Zz.EASINGMODE_EASEINOUT, wz.IgnoreBoundsSizeMode = 0, wz.FitFrustumSidesMode = 1;
    var Xz = bz(39376),
      fz = bz(39372),
      sz = bz(39402),
      rz = bz(39258);
    let oz = (() => {
        var zz;
        let uz, bz = [],
          iz = [];
        return zz = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, Ez.j)(this, bz, [0, 1, 2]), this._pointerInput = (0, Ez.j)(this, iz)
          }
          attachControl(zz) {
            zz = rz.h.BackCompatCameraNoPreventDefault(arguments);
            const uz = this.camera.uR(),
              bz = uz.getInputElement();
            let Ez = 0,
              nz = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = iz => {
              const lz = iz.event,
                Mz = "touch" === lz.pointerType;
              if (iz.type !== Oz.c.POINTERMOVE && -1 === this.buttons.indexOf(lz.button)) return;
              const tz = lz.target;
              if (this._altKey = lz.altKey, this._ctrlKey = lz.ctrlKey, this._metaKey = lz.metaKey, this._shiftKey = lz.shiftKey, this._buttonsPressed = lz.buttons, uz.isPointerLock) {
                const zz = lz.movementX,
                  uz = lz.movementY;
                this.onTouch(null, zz, uz), this._pointA = null, this._pointB = null
              } else {
                if (iz.type !== Oz.c.POINTERDOWN && iz.type !== Oz.c.POINTERDOUBLETAP && Mz && this._pointA?.pointerId !== lz.pointerId && this._pointB?.pointerId !== lz.pointerId) return;
                if (iz.type !== Oz.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Mz)
                  if (iz.type === Oz.c.POINTERDOUBLETAP) this.onDoubleTap(lz.pointerType, lz);
                  else if (iz.type !== Oz.c.POINTERUP || this._currentMousePointerIdDown !== lz.pointerId && !Mz) {
                  if (iz.type === Oz.c.POINTERMOVE)
                    if (zz || lz.preventDefault(), this._pointA && null === this._pointB) {
                      const zz = lz.clientX - this._pointA.x,
                        uz = lz.clientY - this._pointA.y;
                      this._pointA.x = lz.clientX, this._pointA.y = lz.clientY, this.onTouch(this._pointA, zz, uz)
                    } else if (this._pointA && this._pointB) {
                    const zz = this._pointA.pointerId === lz.pointerId ? this._pointA : this._pointB;
                    zz.x = lz.clientX, zz.y = lz.clientY;
                    const uz = this._pointA.x - this._pointB.x,
                      bz = this._pointA.y - this._pointB.y,
                      Mz = uz * uz + bz * bz,
                      tz = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: lz.pointerId,
                        type: iz.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, Ez, Mz, nz, tz), nz = tz, Ez = Mz
                  }
                } else {
                  try {
                    tz?.releasePointerCapture(lz.pointerId)
                  } catch (Hz) {}
                  Mz || (this._pointB = null), uz._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == lz.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == lz.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== Ez || nz) && (this.onMultiTouch(this._pointA, this._pointB, Ez, 0, nz, null), Ez = 0, nz = null), this._currentMousePointerIdDown = -1, this.onButtonUp(lz), zz || lz.preventDefault()
                } else {
                  try {
                    tz?.setPointerCapture(lz.pointerId)
                  } catch (Hz) {}
                  if (null === this._pointA) this._pointA = {
                    x: lz.clientX,
                    y: lz.clientY,
                    pointerId: lz.pointerId,
                    type: lz.pointerType,
                    button: lz.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: lz.clientX,
                      y: lz.clientY,
                      pointerId: lz.pointerId,
                      type: lz.pointerType,
                      button: lz.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Mz || (this._currentMousePointerIdDown = lz.pointerId), this.onButtonDown(lz), zz || (lz.preventDefault(), bz && bz.focus())
                }
              }
            }, this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._pointerInput, Oz.c.POINTERDOWN | Oz.c.POINTERUP | Oz.c.POINTERMOVE | Oz.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, Ez = 0, nz = null, this.onLostFocus()
            }, this._contextMenuBind = zz => this.onContextMenu(zz), bz && bz.addEventListener("contextmenu", this._contextMenuBind, !1);
            const iz = this.camera.XT().uR().getHostWindow();
            iz && rz.h.RegisterTopRootEvents(iz, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const zz = this.camera.XT().uR().getHostWindow();
              zz && rz.h.UnregisterTopRootEvents(zz, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const zz = this.camera.XT().uR().getInputElement();
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
          onDoubleTap(zz, uz) {}
          onTouch(zz, uz, bz) {}
          onMultiTouch(zz, uz, bz, Ez, nz, iz) {}
          onContextMenu(zz) {
            zz.preventDefault()
          }
          onButtonDown(zz) {}
          onButtonUp(zz) {}
          onLostFocus() {}
        }, (() => {
          const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          uz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: zz => "buttons" in zz,
              get: zz => zz.buttons,
              set: (zz, uz) => {
                zz.buttons = uz
              }
            },
            metadata: lz
          }, bz, iz), lz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lz
          })
        })(), zz
      })(),
      Nz = (() => {
        var zz;
        let uz, bz, iz, lz = oz,
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        return zz = class extends lz {
          constructor() {
            super(...arguments), this.pinchZoom = (0, Ez.j)(this, Mz, !0), this.multiTouchPanning = ((0, Ez.j)(this, tz), (0, Ez.j)(this, Hz, !0)), this.multiTouchPanAndZoom = ((0, Ez.j)(this, Oz), (0, Ez.j)(this, pz, !0)), this._isPinching = ((0, Ez.j)(this, dz), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(zz, uz) {}
          _computeMultiTouchPanning(zz, uz) {}
          onMultiTouch(zz, uz, bz, Ez, nz, iz) {
            0 === bz && null === nz || 0 === Ez && null === iz || (this.multiTouchPanAndZoom ? (this._computePinchZoom(bz, Ez), this._computeMultiTouchPanning(nz, iz)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(bz, Ez), this._isPinching = !0) : this._computeMultiTouchPanning(nz, iz)) : this.multiTouchPanning ? this._computeMultiTouchPanning(nz, iz) : this.pinchZoom && this._computePinchZoom(bz, Ez))
          }
          onButtonUp(zz) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(lz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchZoom" in zz,
              get: zz => zz.pinchZoom,
              set: (zz, uz) => {
                zz.pinchZoom = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: zz => "multiTouchPanning" in zz,
              get: zz => zz.multiTouchPanning,
              set: (zz, uz) => {
                zz.multiTouchPanning = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, Ez.h)(null, null, iz, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "multiTouchPanAndZoom" in zz,
              get: zz => zz.multiTouchPanAndZoom,
              set: (zz, uz) => {
                zz.multiTouchPanAndZoom = uz
              }
            },
            metadata: Fz
          }, pz, dz), Fz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          })
        })(), zz
      })(),
      vz = (() => {
        var zz;
        let uz, bz, iz, lz, Mz, tz, Hz, Oz = Nz,
          pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [],
          fz = [],
          sz = [],
          rz = [],
          oz = [],
          vz = [],
          xz = [];
        return zz = class extends Oz {
          constructor() {
            super(...arguments), this.buttons = (0, Ez.j)(this, pz, [0, 1, 2]), this.angularSensibilityX = ((0, Ez.j)(this, dz), (0, Ez.j)(this, Fz, 1e3)), this.angularSensibilityY = ((0, Ez.j)(this, Zz), (0, Ez.j)(this, Rz, 1e3)), this.pinchPrecision = ((0, Ez.j)(this, Kz), (0, Ez.j)(this, wz, 12)), this.pinchDeltaPercentage = ((0, Ez.j)(this, Xz), (0, Ez.j)(this, fz, 0)), this.useNaturalPinchZoom = ((0, Ez.j)(this, sz), (0, Ez.j)(this, rz, !1)), this.panningSensibility = ((0, Ez.j)(this, oz), (0, Ez.j)(this, vz, 1e3)), this.pinchInwards = ((0, Ez.j)(this, xz), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(zz, uz) {
            if (zz && uz) {
              const bz = uz.x - zz.x,
                Ez = uz.y - zz.y,
                nz = this.camera.movement.input.getEntry("pointer", "pan"),
                iz = nz?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== iz && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -bz * iz, this.camera.movement.panAccumulatedPixels.y += Ez * iz)
            }
          }
          _computePinchZoom(uz, bz) {
            const Ez = this.camera.radius || zz.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = Ez * Math.sqrt(uz) / Math.sqrt(bz);
            else if (this.pinchDeltaPercentage) {
              const zz = .001 * (bz - uz) * Ez * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += zz
            } else {
              const zz = (bz - uz) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += zz
            }
          }
          onTouch(zz, uz, bz) {
            const Ez = this._activeEntry ?? (this.camera.uR().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (Ez)
              if ("pan" === Ez.interaction) {
                const zz = Ez.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== zz && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -uz * zz, this.camera.movement.panAccumulatedPixels.y += bz * zz)
              } else if ("rotate" === Ez.interaction) {
              const zz = Ez.Gy ?? Ez.sensitivity ?? 1 / this.angularSensibilityX,
                nz = Ez.Uy ?? Ez.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -uz * zz, this.camera.movement.rotationAccumulatedPixels.y += -bz * nz
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(zz, uz, bz, Ez, nz, iz) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(Ez) - Math.sqrt(bz)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(zz, uz, bz, Ez, nz, iz)
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
          const Nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], lz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: zz => "buttons" in zz,
              get: zz => zz.buttons,
              set: (zz, uz) => {
                zz.buttons = uz
              }
            },
            metadata: Nz
          }, pz, dz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: zz => "angularSensibilityX" in zz,
              get: zz => zz.angularSensibilityX,
              set: (zz, uz) => {
                zz.angularSensibilityX = uz
              }
            },
            metadata: Nz
          }, Fz, Zz), (0, Ez.h)(null, null, iz, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: zz => "angularSensibilityY" in zz,
              get: zz => zz.angularSensibilityY,
              set: (zz, uz) => {
                zz.angularSensibilityY = uz
              }
            },
            metadata: Nz
          }, Rz, Kz), (0, Ez.h)(null, null, lz, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchPrecision" in zz,
              get: zz => zz.pinchPrecision,
              set: (zz, uz) => {
                zz.pinchPrecision = uz
              }
            },
            metadata: Nz
          }, wz, Xz), (0, Ez.h)(null, null, Mz, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchDeltaPercentage" in zz,
              get: zz => zz.pinchDeltaPercentage,
              set: (zz, uz) => {
                zz.pinchDeltaPercentage = uz
              }
            },
            metadata: Nz
          }, fz, sz), (0, Ez.h)(null, null, tz, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: zz => "useNaturalPinchZoom" in zz,
              get: zz => zz.useNaturalPinchZoom,
              set: (zz, uz) => {
                zz.useNaturalPinchZoom = uz
              }
            },
            metadata: Nz
          }, rz, oz), (0, Ez.h)(null, null, Hz, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningSensibility" in zz,
              get: zz => zz.panningSensibility,
              set: (zz, uz) => {
                zz.panningSensibility = uz
              }
            },
            metadata: Nz
          }, vz, xz), Nz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nz
          })
        })(), zz.MinimumRadiusForPinch = .001, zz
      })();
    sz.e.ArcRotateCameraPointersInput = vz;
    var xz = bz(39337);
    let Jz = (() => {
      var zz;
      let uz, bz, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz = [],
        Kz = [],
        wz = [],
        Xz = [],
        fz = [],
        sz = [],
        oz = [],
        Nz = [],
        vz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [];
      return zz = class {
        constructor() {
          this.camera = (0, Ez.j)(this, Rz), this.keysUp = (0, Ez.j)(this, Kz, [38]), this.keysDown = ((0, Ez.j)(this, wz), (0, Ez.j)(this, Xz, [40])), this.keysLeft = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, [37])), this.keysRight = ((0, Ez.j)(this, oz), (0, Ez.j)(this, Nz, [39])), this.keysReset = ((0, Ez.j)(this, vz), (0, Ez.j)(this, Jz, [220])), this.keysZoomIn = ((0, Ez.j)(this, Az), (0, Ez.j)(this, Tz, [187, 107])), this.keysZoomOut = ((0, Ez.j)(this, Lz), (0, Ez.j)(this, Pz, [189, 109])), this.panningSensibility = ((0, Ez.j)(this, Gz), (0, Ez.j)(this, az, 50)), this.zoomingSensibility = ((0, Ez.j)(this, Vz), (0, Ez.j)(this, mz, 25)), this.angularSpeed = ((0, Ez.j)(this, qz), (0, Ez.j)(this, hz, .01)), this._useAltToZoom = ((0, Ez.j)(this, Uz), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new lz.m, this._panDirection = new lz.m
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
            uz = zz.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && uz ? zz.inputMap.splice(zz.inputMap.indexOf(uz), 1) : this._useAltToZoom && !uz && zz.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(zz) {
          zz = rz.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XT(), this._engine = this._scene.uR(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((uz => {
            const bz = uz.event;
            if (!bz.metaKey)
              if (uz.type === xz.b.KEYDOWN) {
                if (this._ctrlPressed = bz.ctrlKey, this._altPressed = bz.altKey, -1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysReset.indexOf(bz.keyCode) || -1 !== this.keysZoomIn.indexOf(bz.keyCode) || -1 !== this.keysZoomOut.indexOf(bz.keyCode)) {
                  -1 === this._keys.indexOf(bz.keyCode) && this._keys.push(bz.keyCode), bz.preventDefault && (zz || bz.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(bz.keyCode) || -1 !== this.keysDown.indexOf(bz.keyCode) || -1 !== this.keysLeft.indexOf(bz.keyCode) || -1 !== this.keysRight.indexOf(bz.keyCode) || -1 !== this.keysReset.indexOf(bz.keyCode) || -1 !== this.keysZoomIn.indexOf(bz.keyCode) || -1 !== this.keysZoomOut.indexOf(bz.keyCode)) {
              const uz = this._keys.indexOf(bz.keyCode);
              uz >= 0 && this._keys.splice(uz, 1), bz.preventDefault && (zz || bz.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const zz = this.camera,
              uz = zz.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const bz = this._rotateDirection.set(0, 0),
              Ez = this._panDirection.set(0, 0);
            let nz = 0,
              iz = 0;
            for (let lz = 0; lz < this._keys.length; lz++) {
              const Mz = this._keys[lz];
              if (this._keyboardConditions.key = Mz, -1 === this.keysReset.indexOf(Mz)) {
                const zz = uz.resolveInteraction("keyboard", this._keyboardConditions);
                if (zz)
                  if ("pan" === zz.interaction) iz = Math.max(iz, zz.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Mz) ? Ez.x -= 1 : -1 !== this.keysRight.indexOf(Mz) ? Ez.x += 1 : -1 !== this.keysUp.indexOf(Mz) ? Ez.y += 1 : -1 !== this.keysDown.indexOf(Mz) && (Ez.y -= 1);
                  else if ("zoom" === zz.interaction) {
                  const bz = zz.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Mz) || -1 !== this.keysZoomIn.indexOf(Mz) ? uz.handlers.zoom(bz) : -1 === this.keysDown.indexOf(Mz) && -1 === this.keysZoomOut.indexOf(Mz) || uz.handlers.zoom(-bz)
                } else "rotate" === zz.interaction && (nz = Math.max(nz, zz.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Mz) ? bz.x -= 1 : -1 !== this.keysRight.indexOf(Mz) ? bz.x += 1 : -1 !== this.keysUp.indexOf(Mz) ? bz.y -= 1 : -1 !== this.keysDown.indexOf(Mz) && (bz.y += 1))
              } - 1 !== this.keysReset.indexOf(Mz) && zz.useInputToRestoreState && zz.restoreState()
            }
            0 === bz.x && 0 === bz.y || (bz.normalize().scaleInPlace(nz), uz.handlers.rotate(bz.x, bz.y)), 0 === Ez.x && 0 === Ez.y || (Ez.normalize().scaleInPlace(iz), uz.handlers.pan(Ez.x, Ez.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], Mz = [(0, nz.G)()], tz = [(0, nz.G)()], Hz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.G)()], dz = [(0, nz.G)()], Fz = [(0, nz.G)()], Zz = [(0, nz.G)()], (0, Ez.h)(zz, null, Zz, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAltToZoom" in zz,
            get: zz => zz.useAltToZoom
          },
          metadata: lz
        }, null, Rz), (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysUp" in zz,
            get: zz => zz.keysUp,
            set: (zz, uz) => {
              zz.keysUp = uz
            }
          },
          metadata: lz
        }, Kz, wz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysDown" in zz,
            get: zz => zz.keysDown,
            set: (zz, uz) => {
              zz.keysDown = uz
            }
          },
          metadata: lz
        }, Xz, fz), (0, Ez.h)(null, null, iz, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysLeft" in zz,
            get: zz => zz.keysLeft,
            set: (zz, uz) => {
              zz.keysLeft = uz
            }
          },
          metadata: lz
        }, sz, oz), (0, Ez.h)(null, null, Mz, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysRight" in zz,
            get: zz => zz.keysRight,
            set: (zz, uz) => {
              zz.keysRight = uz
            }
          },
          metadata: lz
        }, Nz, vz), (0, Ez.h)(null, null, tz, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysReset" in zz,
            get: zz => zz.keysReset,
            set: (zz, uz) => {
              zz.keysReset = uz
            }
          },
          metadata: lz
        }, Jz, Az), (0, Ez.h)(null, null, Hz, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysZoomIn" in zz,
            get: zz => zz.keysZoomIn,
            set: (zz, uz) => {
              zz.keysZoomIn = uz
            }
          },
          metadata: lz
        }, Tz, Lz), (0, Ez.h)(null, null, Oz, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: zz => "keysZoomOut" in zz,
            get: zz => zz.keysZoomOut,
            set: (zz, uz) => {
              zz.keysZoomOut = uz
            }
          },
          metadata: lz
        }, Pz, Gz), (0, Ez.h)(null, null, pz, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "panningSensibility" in zz,
            get: zz => zz.panningSensibility,
            set: (zz, uz) => {
              zz.panningSensibility = uz
            }
          },
          metadata: lz
        }, az, Vz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: zz => "zoomingSensibility" in zz,
            get: zz => zz.zoomingSensibility,
            set: (zz, uz) => {
              zz.zoomingSensibility = uz
            }
          },
          metadata: lz
        }, mz, qz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: zz => "angularSpeed" in zz,
            get: zz => zz.angularSpeed,
            set: (zz, uz) => {
              zz.angularSpeed = uz
            }
          },
          metadata: lz
        }, hz, Uz), lz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lz
        })
      })(), zz
    })();
    sz.e.ArcRotateCameraKeyboardMoveInput = Jz;
    var Az = bz(37239),
      Tz = bz(39341);
    let Lz = (() => {
      var zz;
      let uz, bz, iz, tz = [],
        Hz = [],
        pz = [],
        Fz = [],
        Zz = [],
        Rz = [];
      return zz = class {
        constructor() {
          this.wheelPrecision = (0, Ez.j)(this, tz, 3), this.zoomToMouseLocation = ((0, Ez.j)(this, Hz), (0, Ez.j)(this, pz, !1)), this.wheelDeltaPercentage = ((0, Ez.j)(this, Fz), (0, Ez.j)(this, Zz, 0)), this.customComputeDeltaFromMouseWheel = ((0, Ez.j)(this, Rz), null), this._viewOffset = new lz.n(0, 0, 0), this._globalOffset = new lz.n(0, 0, 0), this._inertialPanning = lz.n.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(zz, uz) {
          let bz;
          const Ez = .01 * zz * this.wheelDeltaPercentage * uz;
          return bz = zz > 0 ? Ez / (1 + this.wheelDeltaPercentage) : Ez * (1 + this.wheelDeltaPercentage), bz
        }
        attachControl(zz) {
          zz = rz.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = uz => {
            if (uz.type !== Oz.c.POINTERWHEEL) return;
            const bz = uz.event;
            let Ez;
            const nz = bz.deltaMode === Tz.e.DOM_DELTA_LINE ? 40 : 1,
              iz = -bz.deltaY * nz;
            if (this.customComputeDeltaFromMouseWheel) Ez = this.customComputeDeltaFromMouseWheel(iz, this, bz);
            else if (this.wheelDeltaPercentage) {
              if (Ez = this._computeDeltaFromMouseWheelLegacyEvent(iz, this.camera.radius), Ez > 0) {
                const zz = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let uz = this.camera.radius,
                  bz = zz + Ez;
                for (let Ez = 0; Ez < 20 && !(uz <= bz) && !(Math.abs(bz * this.camera.inertia) < .001); Ez++) uz -= bz, bz *= this.camera.inertia;
                uz = (0, Mz.Clamp)(uz, 0, Number.MAX_VALUE), Ez = this._computeDeltaFromMouseWheelLegacyEvent(iz, uz)
              }
            } else {
              const zz = this.camera.movement.input.getEntry("wheel", "zoom");
              Ez = iz * (zz?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            Ez && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Ez)) : this.camera.movement.zoomAccumulatedPixels += Ez), bz.preventDefault && (zz || bz.preventDefault())
          }, this._observer = this.camera.XT()._inputManager._addCameraPointerObserver(this._wheel, Oz.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Vk(0)
        }
        detachControl() {
          this._observer && (this.camera.XT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const zz = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(zz.inertialAlphaOffset) + Math.abs(zz.inertialBetaOffset) + Math.abs(zz.inertialRadiusOffset)) {
            this._updateHitPlane(), zz.target.addInPlace(this._inertialPanning), zz.radius -= this._zoomToMouseRadiusOffset;
            const uz = zz.movement.getFrameIndependentDecay(zz.inertia);
            this._inertialPanning.scaleInPlace(uz), this._zoomToMouseRadiusOffset *= uz, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < dz.b && (this._zoomToMouseRadiusOffset = 0)
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
            uz = zz.target.subtract(zz.position);
          this._hitPlane = Az.b.FromPositionAndNormal(zz.target, uz)
        }
        _getPosition() {
          const zz = this.camera,
            uz = zz.XT(),
            bz = uz.createPickingRay(uz.pointerX, uz.pointerY, lz.d.Identity(), zz, !1);
          0 === zz.targetScreenOffset.x && 0 === zz.targetScreenOffset.y || (this._viewOffset.set(zz.targetScreenOffset.x, zz.targetScreenOffset.y, 0), zz.getViewMatrix().invertToRef(zz._cameraTransformMatrix), this._globalOffset = lz.n.TransformNormal(this._viewOffset, zz._cameraTransformMatrix), bz.origin.addInPlace(this._globalOffset));
          let Ez = 0;
          return this._hitPlane && (Ez = bz.intersectsPlane(this._hitPlane) ?? 0), bz.origin.addInPlace(bz.direction.scaleInPlace(Ez))
        }
        _zoomToMouse(zz) {
          const uz = this.camera,
            bz = 1 - uz.inertia,
            Ez = uz.movement.getFrameIndependentInputScale(uz.inertia);
          if (uz.lowerRadiusLimit) {
            const nz = uz.lowerRadiusLimit ?? 0;
            uz.radius - (this._zoomToMouseRadiusOffset + zz * Ez) / bz < nz && (zz = ((uz.radius - nz) * bz - this._zoomToMouseRadiusOffset) / Ez)
          }
          if (uz.upperRadiusLimit) {
            const nz = uz.upperRadiusLimit ?? 0;
            uz.radius - (this._zoomToMouseRadiusOffset + zz * Ez) / bz > nz && (zz = ((uz.radius - nz) * bz - this._zoomToMouseRadiusOffset) / Ez)
          }
          const nz = zz / bz / uz.radius,
            iz = this._getPosition(),
            Mz = lz.l.ER[6];
          iz.subtractToRef(uz.target, Mz), Mz.scaleInPlace(nz), Mz.scaleInPlace(bz), Mz.scaleInPlace(Ez), this._inertialPanning.addInPlace(Mz), this._zoomToMouseRadiusOffset += zz * Ez
        }
        _zeroIfClose(zz) {
          Math.abs(zz.x) < dz.b && (zz.x = 0), Math.abs(zz.y) < dz.b && (zz.y = 0), Math.abs(zz.z) < dz.b && (zz.z = 0)
        }
      }, (() => {
        const lz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelPrecision" in zz,
            get: zz => zz.wheelPrecision,
            set: (zz, uz) => {
              zz.wheelPrecision = uz
            }
          },
          metadata: lz
        }, tz, Hz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: zz => "zoomToMouseLocation" in zz,
            get: zz => zz.zoomToMouseLocation,
            set: (zz, uz) => {
              zz.zoomToMouseLocation = uz
            }
          },
          metadata: lz
        }, pz, Fz), (0, Ez.h)(null, null, iz, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: zz => "wheelDeltaPercentage" in zz,
            get: zz => zz.wheelDeltaPercentage,
            set: (zz, uz) => {
              zz.wheelDeltaPercentage = uz
            }
          },
          metadata: lz
        }, Zz, Rz), lz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lz
        })
      })(), zz
    })();
    sz.e.ArcRotateCameraMouseWheelInput = Lz;
    var Pz, Gz, az = bz(39061);
    class Vz extends sz.i {
      constructor(zz) {
        super(zz)
      }
      addMouseWheel() {
        return this.add(new Lz), this
      }
      addPointers() {
        return this.add(new vz), this
      }
      addKeyboard() {
        return this.add(new Jz), this
      }
    }(Pz = Vz.prototype).addVRDeviceOrientation ?? (Pz.addVRDeviceOrientation = (0, az.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Gz = Vz.prototype).addGamepad ?? (Gz.addGamepad = (0, az.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var mz = bz(36564),
      qz = bz(39393),
      hz = bz(39397);
    class Uz extends qz.c {
      constructor(zz, uz, bz) {
        super(zz, uz, bz), this.input = new hz.d({
          pan: (zz, uz) => {
            this.panAccumulatedPixels.x += zz, this.panAccumulatedPixels.y += uz
          },
          rotate: (zz, uz) => {
            this.rotationAccumulatedPixels.x += zz, this.rotationAccumulatedPixels.y += uz
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

    function cz(zz, uz) {
      return isNaN(zz) ? uz : zz
    }
    let gz = (() => {
        var zz;
        let uz, bz, tz, Oz, pz, Zz, Rz, sz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, mz, qz, hz, gz, Sz, yz, Dz, Qz, Wz, ez = fz.i,
          jz = [],
          Iz = [],
          Bz = [],
          Cz = [],
          Yz = [],
          kz = [],
          zu = [],
          uu = [],
          bu = [],
          Eu = [],
          nu = [],
          iu = [],
          lu = [],
          Mu = [],
          tu = [],
          Hu = [],
          Ou = [],
          pu = [],
          du = [],
          Fu = [],
          Zu = [],
          Ru = [],
          Ku = [],
          wu = [],
          Xu = [],
          fu = [],
          su = [],
          ru = [],
          ou = [],
          Nu = [],
          vu = [],
          xu = [],
          Ju = [],
          Au = [],
          Tu = [],
          Lu = [],
          Pu = [],
          Gu = [],
          au = [],
          Vu = [],
          mu = [],
          qu = [],
          hu = [],
          Uu = [],
          cu = [],
          gu = [],
          Su = [];
        return zz = class extends ez {
          get target() {
            return this.pI
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
            this._upToYMatrix || (this._yToUpMatrix = new lz.d, this._upToYMatrix = new lz.d, this._upVector = lz.n.Zero()), zz.normalize(), this._upVector.euz(zz), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            lz.d.RotationAlignToRef(lz.n.UpReadOnly, this._upVector, this._yToUpMatrix), lz.d.RotationAlignToRef(this._upVector, lz.n.UpReadOnly, this._upToYMatrix)
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
            const uz = this.inputs.attached.pointers;
            uz && (uz.angularSensibilityX = zz)
          }
          get angularSensibilityY() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.angularSensibilityY : 0
          }
          set angularSensibilityY(zz) {
            const uz = this.inputs.attached.pointers;
            uz && (uz.angularSensibilityY = zz)
          }
          get pinchPrecision() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.pinchPrecision : 0
          }
          set pinchPrecision(zz) {
            const uz = this.inputs.attached.pointers;
            uz && (uz.pinchPrecision = zz)
          }
          get pinchDeltaPercentage() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(zz) {
            const uz = this.inputs.attached.pointers;
            uz && (uz.pinchDeltaPercentage = zz)
          }
          get useNaturalPinchZoom() {
            const zz = this.inputs.attached.pointers;
            return !!zz && zz.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(zz) {
            const uz = this.inputs.attached.pointers;
            uz && (uz.useNaturalPinchZoom = zz)
          }
          get panningSensibility() {
            const zz = this.inputs.attached.pointers;
            return zz ? zz.panningSensibility : 0
          }
          set panningSensibility(zz) {
            const uz = this.inputs.attached.pointers;
            uz && (uz.panningSensibility = zz)
          }
          get keysUp() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysUp : []
          }
          set keysUp(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysUp = zz)
          }
          get keysDown() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysDown : []
          }
          set keysDown(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysDown = zz)
          }
          get keysLeft() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysLeft : []
          }
          set keysLeft(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysLeft = zz)
          }
          get keysRight() {
            const zz = this.inputs.attached.keyboard;
            return zz ? zz.keysRight : []
          }
          set keysRight(zz) {
            const uz = this.inputs.attached.keyboard;
            uz && (uz.keysRight = zz)
          }
          get wheelPrecision() {
            const zz = this.inputs.attached.mousewheel;
            return zz ? zz.wheelPrecision : 0
          }
          set wheelPrecision(zz) {
            const uz = this.inputs.attached.mousewheel;
            uz && (uz.wheelPrecision = zz)
          }
          get zoomToMouseLocation() {
            const zz = this.inputs.attached.mousewheel;
            return !!zz && zz.zoomToMouseLocation
          }
          set zoomToMouseLocation(zz) {
            const uz = this.inputs.attached.mousewheel;
            uz && (uz.zoomToMouseLocation = zz)
          }
          get wheelDeltaPercentage() {
            const zz = this.inputs.attached.mousewheel;
            return zz ? zz.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(zz) {
            const uz = this.inputs.attached.mousewheel;
            uz && (uz.wheelDeltaPercentage = zz)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(zz) {
            this._useCtrlForPanningInternal = zz;
            const uz = this.movement.input,
              bz = uz.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !zz && bz ? uz.inputMap.splice(uz.inputMap.indexOf(bz), 1) : zz && !bz && uz.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const Ez = uz.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !zz && Ez ? uz.inputMap.splice(uz.inputMap.indexOf(Ez), 1) : zz && !Ez && uz.addEntry({
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
            const uz = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            uz && (uz.button = zz)
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
            zz !== this.useBouncingBehavior && (zz ? (this._bouncingBehavior = new Kz, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(zz) {
            zz !== this.useFramingBehavior && (zz ? (this._framingBehavior = new wz, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(zz) {
            zz !== this.useAutoRotationBehavior && (zz ? (this._autoRotationBehavior = new Fz, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(zz, uz, bz, nz, Mz, tz) {
            var Hz;
            let Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(zz, lz.n.Zero(), tz, Oz), Hz = this, this.alpha = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, void 0)), this.beta = ((0, Ez.j)(this, Bz), (0, Ez.j)(this, Cz, void 0)), this.radius = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, void 0)), this.overrideCloneAlphaBetaRadius = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, void 0)), this.pI = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, void 0)), this._targetHost = ((0, Ez.j)(this, nu), (0, Ez.j)(this, iu, void 0)), this._upToYMatrix = (0, Ez.j)(this, lu), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, Ez.j)(this, Mu, null), this.upperAlphaLimit = ((0, Ez.j)(this, tu), (0, Ez.j)(this, Hu, null)), this.lowerBetaLimit = ((0, Ez.j)(this, Ou), (0, Ez.j)(this, pu, .01)), this.upperBetaLimit = ((0, Ez.j)(this, du), (0, Ez.j)(this, Fu, Math.PI - .01)), this.lowerRadiusLimit = ((0, Ez.j)(this, Zu), (0, Ez.j)(this, Ru, null)), this.upperRadiusLimit = ((0, Ez.j)(this, Ku), (0, Ez.j)(this, wu, null)), this.lowerTargetYLimit = ((0, Ez.j)(this, Xu), (0, Ez.j)(this, fu, -1 / 0)), this.inertialPanningX = ((0, Ez.j)(this, su), (0, Ez.j)(this, ru, 0)), this.inertialPanningY = ((0, Ez.j)(this, ou), (0, Ez.j)(this, Nu, 0)), this.pinchToPanMaxDistance = ((0, Ez.j)(this, vu), (0, Ez.j)(this, xu, 20)), this.panningDistanceLimit = ((0, Ez.j)(this, Ju), (0, Ez.j)(this, Au, null)), this.panningOriginTarget = ((0, Ez.j)(this, Tu), (0, Ez.j)(this, Lu, lz.n.Zero())), this._panningInertia = ((0, Ez.j)(this, Pu), .9), this._inertia = .9, this.zoomOnFactor = (0, Ez.j)(this, Gu, 1), this.targetScreenOffset = ((0, Ez.j)(this, au), (0, Ez.j)(this, Vu, lz.m.Zero())), this.allowUpsideDown = ((0, Ez.j)(this, mu), (0, Ez.j)(this, qu, !0)), this.useInputToRestoreState = ((0, Ez.j)(this, hu), (0, Ez.j)(this, Uu, !0)), this.restoreStateInterpolationFactor = ((0, Ez.j)(this, cu), (0, Ez.j)(this, gu, 0)), this._currentInterpolationFactor = ((0, Ez.j)(this, Su), 0), this._viewMatrix = new lz.d, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new lz.n(1, 1, 0), this._transformedDirection = new lz.n, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new iz.b, this.checkCollisions = !1, this.collisionRadius = new lz.n(.5, .5, .5), this._previousPosition = lz.n.Zero(), this._collisionVelocity = lz.n.Zero(), this._newPosition = lz.n.Zero(), this._computationVector = lz.n.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new lz.n(NaN, NaN, NaN), this._goalTargetScreenOffset = new lz.m(NaN, NaN), this._onCollisionPositionChange = function(zz, uz) {
              let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              bz ? (Hz.setPosition(uz), Hz.Ud && Hz.Ud(bz)) : Hz._previousPosition.euz(Hz._position);
              const Ez = Math.cos(Hz.alpha),
                nz = Math.sin(Hz.alpha),
                iz = Math.cos(Hz.beta);
              let lz = Math.sin(Hz.beta);
              0 === lz && (lz = 1e-4);
              const Mz = Hz._getTargetPosition();
              Hz._computationVector.P_(Hz.radius * Ez * lz, Hz.radius * iz, Hz.radius * nz * lz), Mz.addToRef(Hz._computationVector, Hz._newPosition), Hz._position.euz(Hz._newPosition);
              let tz = Hz.upVector;
              Hz.allowUpsideDown && Hz.beta < 0 && (tz = tz.clone(), tz = tz.nb()), Hz._computeViewMatrix(Hz._position, Mz, tz), Hz._viewMatrix.addAtIndex(12, Hz.targetScreenOffset.x), Hz._viewMatrix.addAtIndex(13, Hz.targetScreenOffset.y), Hz._collisionTriggered = !1
            }, this.pI = lz.n.Zero(), Mz && this.setTarget(Mz), this.alpha = uz, this.beta = bz, this.radius = nz, this.getViewMatrix(), this.inputs = new Vz(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Uz(this.XT(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.pI = new lz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = lz.m.Zero()
          }
          _updateCache(zz) {
            zz || super._updateCache(), this._cache.pI.euz(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.euz(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const zz = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? zz.addToRef(this._targetBoundingCenter, this.pI) : this.pI.euz(zz)
            }
            const zz = this._getLockedTargetPosition();
            return zz || this.pI
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > dz.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              iz = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != iz ? this._currentInterpolationFactor = iz : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = cz(zz, this._goalAlpha), this._goalBeta = cz(uz, this._goalBeta), this._goalRadius = cz(bz, this._goalRadius), this._goalTarget.set(cz(Ez.x, this._goalTarget.x), cz(Ez.y, this._goalTarget.y), cz(Ez.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(cz(nz.x, this._goalTargetScreenOffset.x), cz(nz.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Mz.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Mz.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Mz.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Mz.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.pI.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(zz, uz) {
            let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const nz = arguments;
            uz = rz.h.BackCompatCameraNoPreventDefault(nz), this._useCtrlForPanning = bz, this._panningMouseButton = Ez, "boolean" === typeof nz[0] && (nz.length > 1 && (this._useCtrlForPanning = nz[1]), nz.length > 2 && (this._panningMouseButton = nz[2])), this.inputs.attachElement(uz), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(zz, uz, bz) {
            const Ez = this.invertRotation ? -1 : 1;
            let nz = zz * this._calculateHandednessMultiplier();
            this.beta < 0 && (nz *= -1), this.alpha += nz * Ez, this.beta += uz * Ez, this.radius -= bz
          }
          _applyPanDelta(zz, uz) {
            const bz = lz.l.ER[0].P_(zz, uz, uz);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), bz.multiplyInPlace(this.panningAxis), lz.n.TransformNormalToRef(bz, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const zz = this.upVector,
                uz = lz.n.CrossToRef(this._transformedDirection, zz, this._transformedDirection);
              lz.n.CrossToRef(zz, uz, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.pI);
                lz.n.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.pI.euz(this._transformedDirection)
              } else {
                if (this.parent) {
                  const zz = lz.l.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(zz), zz.transposeToRef(zz), lz.n.TransformCoordinatesToRef(this._transformedDirection, zz, this._transformedDirection)
                }
                this.pI.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let zz = !1;
            this.movement.computeCurrentFrameDeltas();
            const uz = this.movement.rotationDeltaCurrentFrame,
              bz = this.movement.zoomDeltaCurrentFrame,
              Ez = this.movement.panDeltaCurrentFrame;
            if (0 === uz.x && 0 === uz.y && 0 === bz && 0 === Ez.x && 0 === Ez.y || (zz = !0, 0 === uz.x && 0 === uz.y && 0 === bz || this._applyRotationAndZoomDelta(uz.x, uz.y, bz), 0 === Ez.x && 0 === Ez.y || this._applyPanDelta(Ez.x, Ez.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), zz = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const uz = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < uz && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < uz && (this.inertialPanningY = 0), zz = !0
            }
            if (zz) this.stopInterpolation();
            else if (this._isInterpolating) {
              let zz = !1;
              const uz = this._scene.uR().getDeltaTime() / 1e3,
                bz = 1 - Math.pow(2, -uz / this._currentInterpolationFactor),
                Ez = cz(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const uz = lz.l.ER[0].set(cz(this._goalTarget.x, this.pI.x), cz(this._goalTarget.y, this.pI.y), cz(this._goalTarget.z, this.pI.z));
                lz.n.LerpToRef(this.target, uz, bz, this.pI), 10 * lz.n.Distance(this.target, uz) / Ez < dz.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.euz(uz), this.setTarget(this.target, !1, !0, !0)) : zz = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const uz = lz.h.RotationAlphaBetaGammaToRef(cz(this._goalAlpha, this.alpha), cz(this._goalBeta, this.beta), 0, lz.l.Quaternion[0]),
                  Ez = lz.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, lz.l.Quaternion[1]),
                  nz = lz.h.SlerpToRef(Ez, uz, bz, lz.l.Quaternion[2]);
                nz.normalize();
                const iz = nz.toAlphaBetaGammaToRef(lz.l.ER[0]);
                if (this.alpha = iz.x, this.beta = iz.y, nz.isApprox(uz, dz.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const zz = uz.toAlphaBetaGammaToRef(lz.l.ER[0]);
                  this.alpha = zz.x, this.beta = zz.y
                } else zz = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (Ez - this.radius) * bz, Math.abs(Ez / this.radius - 1) < dz.b ? (this._goalRadius = NaN, this.radius = Ez) : zz = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const uz = lz.l.Vector2[0].set(cz(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), cz(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                lz.m.LerpToRef(this.targetScreenOffset, uz, bz, this.targetScreenOffset), lz.m.Distance(this.targetScreenOffset, uz) < dz.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.euz(uz)) : zz = !0
              }
              this._isInterpolating = zz
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lz.n.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const zz = this.alpha;
            var uz, bz;
            this.alpha = function(zz) {
              let uz = Math.PI / 2;
              return 0 === zz.x && 0 === zz.z || (uz = Math.acos(zz.x / Math.sqrt(Math.pow(zz.x, 2) + Math.pow(zz.z, 2)))), zz.z < 0 && (uz = 2 * Math.PI - uz), uz
            }(this._computationVector), this.beta = (uz = this._computationVector.y, bz = this.radius, Math.acos(uz / bz));
            const Ez = Math.round((zz - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * Ez * Math.PI, this._checkLimits()
          }
          setPosition(zz) {
            this._position.equals(zz) || (this._position.euz(zz), this.rebuildAnglesAndRadius())
          }
          setTarget(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Ez = this.overrideCloneAlphaBetaRadius ?? Ez, zz.computeWorldMatrix) uz && zz.lG ? this._targetBoundingCenter = zz.lG().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, zz.computeWorldMatrix(), this._targetHost = zz, this.pI = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const uz = zz,
                Ez = this._getTargetPosition();
              if (Ez && !bz && Ez.equals(uz)) return;
              this._targetHost = null, this.pI = uz, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            Ez || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const zz = Math.cos(this.alpha),
              uz = Math.sin(this.alpha),
              bz = Math.cos(this.beta);
            let Ez = Math.sin(this.beta);
            0 === Ez && (Ez = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const nz = this._getTargetPosition();
            if (this._computationVector.P_(this.radius * zz * Ez, this.radius * bz, this.radius * uz * Ez), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || lz.n.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), nz.addToRef(this._computationVector, this._newPosition), this.XT().collisionsEnabled && this.checkCollisions) {
              const zz = this.XT().collisionCoordinator;
              this._collider || (this._collider = zz.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, zz.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.euz(this._newPosition);
              let zz = this.upVector;
              this.allowUpsideDown && Ez < 0 && (zz = zz.nb()), this._computeViewMatrix(this._position, nz, zz), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.euz(nz), this._viewMatrix
          }
          zoomOn(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            zz = zz || this.XT().meshes;
            const bz = Hz.c.MinMax(zz);
            let Ez = this._calculateLowerRadiusFromModelBoundingSphere(bz.min, bz.max);
            if (Ez = Math.max(Math.min(Ez, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = Ez * this.zoomOnFactor, this.mode === Xz.d.ORTHOGRAPHIC_CAMERA) {
              const zz = this.XT().uR().getAspectRatio(this),
                uz = Ez * this.zoomOnFactor / 2;
              this.orthoLeft = -uz * zz, this.orthoRight = uz * zz, this.orthoBottom = -uz, this.orthoTop = uz
            }
            this.focusOn({
              min: bz.min,
              max: bz.max,
              distance: Ez
            }, uz)
          }
          focusOn(zz) {
            let uz, bz, Ez = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === zz.min) {
              const Ez = zz || this.XT().meshes;
              uz = Hz.c.MinMax(Ez), bz = lz.n.Distance(uz.min, uz.max)
            } else {
              uz = zz, bz = zz.distance
            }
            this.pI = Hz.c.Center(uz), Ez || (this.maxZ = 2 * bz)
          }
          createRigCamera(uz, bz) {
            let Ez = 0;
            switch (this.cameraRigMode) {
              case Xz.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Xz.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Xz.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Xz.d.RIG_MODE_VR:
                Ez = this._cameraRigParams.stereoHalfAngle * (0 === bz ? 1 : -1);
                break;
              case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                Ez = this._cameraRigParams.stereoHalfAngle * (0 === bz ? -1 : 1)
            }
            const nz = new zz(uz, this.alpha + Ez, this.beta, this.radius, this.pI, this.XT());
            return nz._cameraRigParams = {}, nz.isRigCamera = !0, nz.rigParent = this, nz.upVector = this.upVector, nz.mode = this.mode, nz.orthoLeft = this.orthoLeft, nz.orthoRight = this.orthoRight, nz.orthoBottom = this.orthoBottom, nz.orthoTop = this.orthoTop, nz
          }
          _updateRigCameras() {
            const zz = this._rigCameras[0],
              uz = this._rigCameras[1];
            switch (zz.beta = uz.beta = this.beta, this.cameraRigMode) {
              case Xz.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Xz.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Xz.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Xz.d.RIG_MODE_VR:
                zz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, uz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Xz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                zz.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, uz.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const Ez = lz.n.Distance(zz, uz),
              nz = this.XT().uR().getAspectRatio(this),
              iz = Math.tan(this.fov / 2),
              Mz = iz * nz,
              tz = .5 * Ez * bz,
              Hz = tz * Math.sqrt(1 + 1 / (Mz * Mz)),
              Oz = tz * Math.sqrt(1 + 1 / (iz * iz));
            return Math.max(Hz, Oz)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(ez[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], tz = [(0, nz.G)()], Oz = [(0, nz.G)()], pz = [(0, nz.D)("target")], Zz = [(0, nz.y)("targetHost")], Rz = [(0, nz.G)()], sz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.G)()], vz = [(0, nz.G)()], xz = [(0, nz.G)()], Jz = [(0, nz.G)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], Pz = [(0, nz.G)()], Gz = [(0, nz.G)()], az = [(0, nz.G)()], mz = [(0, nz.G)()], qz = [(0, nz.D)()], hz = [(0, nz.G)()], gz = [(0, nz.G)()], Sz = [(0, nz.G)()], yz = [(0, nz.C)()], Dz = [(0, nz.G)()], Qz = [(0, nz.G)()], Wz = [(0, nz.G)()], (0, Ez.h)(zz, null, Rz, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialAlphaOffset" in zz,
              get: zz => zz.inertialAlphaOffset
            },
            metadata: iz
          }, null, jz), (0, Ez.h)(zz, null, sz, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialBetaOffset" in zz,
              get: zz => zz.inertialBetaOffset
            },
            metadata: iz
          }, null, jz), (0, Ez.h)(zz, null, oz, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialRadiusOffset" in zz,
              get: zz => zz.inertialRadiusOffset
            },
            metadata: iz
          }, null, jz), (0, Ez.h)(zz, null, hz, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningInertia" in zz,
              get: zz => zz.panningInertia
            },
            metadata: iz
          }, null, jz), (0, Ez.h)(zz, null, gz, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: zz => "zoomToMouseLocation" in zz,
              get: zz => zz.zoomToMouseLocation
            },
            metadata: iz
          }, null, jz), (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "alpha" in zz,
              get: zz => zz.alpha,
              set: (zz, uz) => {
                zz.alpha = uz
              }
            },
            metadata: iz
          }, Iz, Bz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: zz => "beta" in zz,
              get: zz => zz.beta,
              set: (zz, uz) => {
                zz.beta = uz
              }
            },
            metadata: iz
          }, Cz, Yz), (0, Ez.h)(null, null, tz, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: zz => "radius" in zz,
              get: zz => zz.radius,
              set: (zz, uz) => {
                zz.radius = uz
              }
            },
            metadata: iz
          }, kz, zu), (0, Ez.h)(null, null, Oz, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: zz => "overrideCloneAlphaBetaRadius" in zz,
              get: zz => zz.overrideCloneAlphaBetaRadius,
              set: (zz, uz) => {
                zz.overrideCloneAlphaBetaRadius = uz
              }
            },
            metadata: iz
          }, uu, bu), (0, Ez.h)(null, null, pz, {
            kind: "field",
            name: "pI",
            static: !1,
            private: !1,
            access: {
              has: zz => "pI" in zz,
              get: zz => zz.pI,
              set: (zz, uz) => {
                zz.pI = uz
              }
            },
            metadata: iz
          }, Eu, nu), (0, Ez.h)(null, null, Zz, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: zz => "_targetHost" in zz,
              get: zz => zz._targetHost,
              set: (zz, uz) => {
                zz._targetHost = uz
              }
            },
            metadata: iz
          }, iu, lu), (0, Ez.h)(null, null, Nz, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerAlphaLimit" in zz,
              get: zz => zz.lowerAlphaLimit,
              set: (zz, uz) => {
                zz.lowerAlphaLimit = uz
              }
            },
            metadata: iz
          }, Mu, tu), (0, Ez.h)(null, null, vz, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperAlphaLimit" in zz,
              get: zz => zz.upperAlphaLimit,
              set: (zz, uz) => {
                zz.upperAlphaLimit = uz
              }
            },
            metadata: iz
          }, Hu, Ou), (0, Ez.h)(null, null, xz, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerBetaLimit" in zz,
              get: zz => zz.lowerBetaLimit,
              set: (zz, uz) => {
                zz.lowerBetaLimit = uz
              }
            },
            metadata: iz
          }, pu, du), (0, Ez.h)(null, null, Jz, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperBetaLimit" in zz,
              get: zz => zz.upperBetaLimit,
              set: (zz, uz) => {
                zz.upperBetaLimit = uz
              }
            },
            metadata: iz
          }, Fu, Zu), (0, Ez.h)(null, null, Az, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerRadiusLimit" in zz,
              get: zz => zz.lowerRadiusLimit,
              set: (zz, uz) => {
                zz.lowerRadiusLimit = uz
              }
            },
            metadata: iz
          }, Ru, Ku), (0, Ez.h)(null, null, Tz, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "upperRadiusLimit" in zz,
              get: zz => zz.upperRadiusLimit,
              set: (zz, uz) => {
                zz.upperRadiusLimit = uz
              }
            },
            metadata: iz
          }, wu, Xu), (0, Ez.h)(null, null, Lz, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "lowerTargetYLimit" in zz,
              get: zz => zz.lowerTargetYLimit,
              set: (zz, uz) => {
                zz.lowerTargetYLimit = uz
              }
            },
            metadata: iz
          }, fu, su), (0, Ez.h)(null, null, Pz, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialPanningX" in zz,
              get: zz => zz.inertialPanningX,
              set: (zz, uz) => {
                zz.inertialPanningX = uz
              }
            },
            metadata: iz
          }, ru, ou), (0, Ez.h)(null, null, Gz, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: zz => "inertialPanningY" in zz,
              get: zz => zz.inertialPanningY,
              set: (zz, uz) => {
                zz.inertialPanningY = uz
              }
            },
            metadata: iz
          }, Nu, vu), (0, Ez.h)(null, null, az, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: zz => "pinchToPanMaxDistance" in zz,
              get: zz => zz.pinchToPanMaxDistance,
              set: (zz, uz) => {
                zz.pinchToPanMaxDistance = uz
              }
            },
            metadata: iz
          }, xu, Ju), (0, Ez.h)(null, null, mz, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningDistanceLimit" in zz,
              get: zz => zz.panningDistanceLimit,
              set: (zz, uz) => {
                zz.panningDistanceLimit = uz
              }
            },
            metadata: iz
          }, Au, Tu), (0, Ez.h)(null, null, qz, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: zz => "panningOriginTarget" in zz,
              get: zz => zz.panningOriginTarget,
              set: (zz, uz) => {
                zz.panningOriginTarget = uz
              }
            },
            metadata: iz
          }, Lu, Pu), (0, Ez.h)(null, null, Sz, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: zz => "zoomOnFactor" in zz,
              get: zz => zz.zoomOnFactor,
              set: (zz, uz) => {
                zz.zoomOnFactor = uz
              }
            },
            metadata: iz
          }, Gu, au), (0, Ez.h)(null, null, yz, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: zz => "targetScreenOffset" in zz,
              get: zz => zz.targetScreenOffset,
              set: (zz, uz) => {
                zz.targetScreenOffset = uz
              }
            },
            metadata: iz
          }, Vu, mu), (0, Ez.h)(null, null, Dz, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: zz => "allowUpsideDown" in zz,
              get: zz => zz.allowUpsideDown,
              set: (zz, uz) => {
                zz.allowUpsideDown = uz
              }
            },
            metadata: iz
          }, qu, hu), (0, Ez.h)(null, null, Qz, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: zz => "useInputToRestoreState" in zz,
              get: zz => zz.useInputToRestoreState,
              set: (zz, uz) => {
                zz.useInputToRestoreState = uz
              }
            },
            metadata: iz
          }, Uu, cu), (0, Ez.h)(null, null, Wz, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: zz => "restoreStateInterpolationFactor" in zz,
              get: zz => zz.restoreStateInterpolationFactor,
              set: (zz, uz) => {
                zz.restoreStateInterpolationFactor = uz
              }
            },
            metadata: iz
          }, gu, Su), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      Sz = !1;
    Sz || (Sz = !0, tz.c.AddNodeConstructor("ArcRotateCamera", ((zz, uz) => () => new gz(zz, 0, 0, 1, lz.n.Zero(), uz))), (0, mz.c)("BABYLON.ArcRotateCamera", gz))
  },
  39406: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.c
    });
    var Ez = bz(39412);
    (0, Ez.e)()
  },
  39412: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      e: () => dz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(36715),
      Mz = bz(39421),
      tz = bz(39384),
      Hz = bz(36564);
    let Oz = (() => {
        var zz;
        let uz, bz, tz = Mz.b,
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        return zz = class extends tz {
          constructor(zz, uz, bz, nz) {
            super(zz, bz, nz), this.groundColor = (0, Ez.j)(this, Hz, new lz.c(0, 0, 0)), this.direction = ((0, Ez.j)(this, Oz), (0, Ez.j)(this, pz, void 0)), (0, Ez.j)(this, dz), this.direction = uz || iz.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = iz.n.Normalize(zz.subtract(iz.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", bz.x, bz.y, bz.z, 0, uz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), uz), this
          }
          transferToNodeMaterialEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return zz.setFloat3(uz, bz.x, bz.y, bz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iz.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Mz.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, uz) {
            zz["HEMILIGHT" + uz] = !0
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(tz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.q)()], bz = [(0, nz.D)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, uz) => {
                zz.groundColor = uz
              }
            },
            metadata: iz
          }, Hz, Oz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, uz) => {
                zz.direction = uz
              }
            },
            metadata: iz
          }, pz, dz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      pz = !1;

    function dz() {
      pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_3", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.HemisphericLight", Oz))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
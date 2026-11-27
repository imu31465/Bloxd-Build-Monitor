export const id = 289;
export const ids = [289];
export const modules = {
  42157: (ee, ie, He) => {
    He.d(ie, {
      b: () => ue
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37931),
      Ke = He(37917),
      Ue = He(37938),
      Fe = He(41323),
      Je = He(41524),
      oe = He(41286),
      Re = He(41005),
      ke = He(37920);
    class qe {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(ee) {
        this._zoomStopsAnimation = ee
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(ee) {
        this._idleRotationSpeed = ee
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(ee) {
        this._idleRotationWaitTime = ee
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(ee) {
        this._idleRotationSpinupTime = ee
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
      attach(ee) {
        this._attachedCamera = ee;
        const ie = this._attachedCamera.Xx();
        this._onPrePointerObservableObserver = ie.onPrePointerObservable.add((ee => {
          ee.type !== oe.c.POINTERDOWN ? ee.type === oe.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const ee = Re.e.Now;
          let ie = 0;
          null != this._lastFrameTime && (ie = ee - this._lastFrameTime), this._lastFrameTime = ee, this._applyUserInteraction();
          const He = ee - this._lastInteractionTime - this._idleRotationWaitTime,
            ye = Math.max(Math.min(He / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * ye, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (ie / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const ee = this._attachedCamera.Xx();
        this._onPrePointerObservableObserver && ee.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(ee) {
        this._lastInteractionTime = ee ?? Re.e.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < ke.b
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let ee = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (ee = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? ee : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = Re.e.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    He(42166);
    class fe {
      constructor() {
        this._easingMode = fe.EASINGMODE_EASEIN
      }
      setEasingMode(ee) {
        const ie = Math.min(Math.max(ee, 0), 2);
        this._easingMode = ie
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(ee) {
        throw new Error("You must implement this method")
      }
      ease(ee) {
        switch (this._easingMode) {
          case fe.EASINGMODE_EASEIN:
            return this.easeInCore(ee);
          case fe.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - ee)
        }
        return ee >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - ee))) + .5 : .5 * this.easeInCore(2 * ee)
      }
    }
    fe.EASINGMODE_EASEIN = 0, fe.EASINGMODE_EASEOUT = 1, fe.EASINGMODE_EASEINOUT = 2;
    var Te = He(42172);
    class pe {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(ee) {
        if (this._autoTransitionRange === ee) return;
        this._autoTransitionRange = ee;
        const ie = this._attachedCamera;
        ie && (ee ? this._onMeshTargetChangedObserver = ie.onMeshTargetChangedObservable.add((ee => {
          if (ee && (ee.computeWorldMatrix(!0), ee.WC)) {
            const ie = ee.WC().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * ie, this.upperRadiusTransitionRange = .05 * ie
          }
        })) : this._onMeshTargetChangedObserver && ie.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(ee) {
        this._attachedCamera = ee, this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(ee) {
        return !!this._attachedCamera && (this._attachedCamera.radius === ee && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(ee) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (pe.EasingFunction.setEasingMode(pe.EasingMode), this._radiusBounceTransition = Te.b.CreateAnimation("radius", Te.b.ANIMATIONTYPE_FLOAT, 60, pe.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const ie = Te.b.TransitionTo("radius", this._attachedCamera.radius + ee, this._attachedCamera, this._attachedCamera.Xx(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        ie && this._animatables.push(ie)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    pe.EasingFunction = new class extends fe {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = ee
      }
      easeInCore(ee) {
        const ie = Math.max(0, this.amplitude);
        return Math.pow(ee, 3) - ee * ie * Math.sin(3.141592653589793 * ee)
      }
    }(.3), pe.EasingMode = fe.EASINGMODE_EASEOUT;
    class Xe {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new Me.d, this._mode = Xe.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(ee) {
        this._mode = ee
      }
      get mode() {
        return this._mode
      }
      set radiusScale(ee) {
        this._radiusScale = ee
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(ee) {
        this._positionScale = ee
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(ee) {
        this._defaultElevation = ee
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(ee) {
        this._elevationReturnTime = ee
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(ee) {
        this._elevationReturnWaitTime = ee
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(ee) {
        this._zoomStopsAnimation = ee
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(ee) {
        this._framingTime = ee
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(ee) {
        this._attachedCamera = ee;
        const ie = this._attachedCamera.Xx();
        Xe.EasingFunction.setEasingMode(Xe.EasingMode), this._onPrePointerObservableObserver = ie.onPrePointerObservable.add((ee => {
          ee.type !== oe.c.POINTERDOWN ? ee.type === oe.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = ee.onMeshTargetChangedObservable.add((ee => {
          ee && ee.WC && this.zoomOnMesh(ee, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = ee.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const ee = this._attachedCamera.Xx();
        this._onPrePointerObservableObserver && ee.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        ee.computeWorldMatrix(!0);
        const ye = ee.WC().boundingBox;
        this.zoomOnBoundingInfo(ye.minimumWorld, ye.maximumWorld, ie, He)
      }
      zoomOnMeshHierarchy(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        ee.computeWorldMatrix(!0);
        const ye = ee.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(ye.min, ye.max, ie, He)
      }
      zoomOnMeshesHierarchy(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ye = new Ke.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          be = new Ke.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let Me = 0; Me < ee.length; Me++) {
          const ie = ee[Me].getHierarchyBoundingVectors(!0);
          Ke.p.CheckExtends(ie.min, ye, be), Ke.p.CheckExtends(ie.max, ye, be)
        }
        this.zoomOnBoundingInfo(ye, be, ie, He)
      }
      zoomOnBoundingInfo(ee, ie) {
        let He, ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const Me = ee.y,
          Ue = Me + (ie.y - Me) * this._positionScale,
          Fe = ie.subtract(ee).scale(.5);
        if (!isFinite(Ue)) return !1;
        if (ye) He = new Ke.p(0, Ue, 0);
        else {
          const ie = ee.add(Fe);
          He = new Ke.p(ie.x, Ue, ie.z)
        }
        this._vectorTransition || (this._vectorTransition = Te.b.CreateAnimation("target", Te.b.ANIMATIONTYPE_VECTOR3, 60, Xe.EasingFunction)), this._betaIsAnimating = !0;
        let Je = Te.b.TransitionTo("target", He, this._attachedCamera, this._attachedCamera.Xx(), 60, this._vectorTransition, this._framingTime);
        Je && this._animatables.push(Je);
        let oe = 0;
        if (this._mode === Xe.FitFrustumSidesMode) {
          const He = this._calculateLowerRadiusFromModelBoundingSphere(ee, ie);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Fe.length() + this._attachedCamera.minZ), oe = He
        } else this._mode === Xe.IgnoreBoundsSizeMode && (oe = this._calculateLowerRadiusFromModelBoundingSphere(ee, ie), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const He = ie.subtract(ee).length();
          this._attachedCamera.panningSensibility = 5e3 / He, this._attachedCamera.wheelPrecision = 100 / oe
        }
        return this._radiusTransition || (this._radiusTransition = Te.b.CreateAnimation("radius", Te.b.ANIMATIONTYPE_FLOAT, 60, Xe.EasingFunction)), Je = Te.b.TransitionTo("radius", oe, this._attachedCamera, this._attachedCamera.Xx(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), be && be(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), Je && this._animatables.push(Je), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(ee, ie) {
        const He = this._attachedCamera;
        if (!He) return 0;
        let ye = He._calculateLowerRadiusFromModelBoundingSphere(ee, ie, this._radiusScale);
        return He.lowerRadiusLimit && this._mode === Xe.IgnoreBoundsSizeMode && (ye = ye < He.lowerRadiusLimit ? He.lowerRadiusLimit : ye), He.upperRadiusLimit && (ye = ye > He.upperRadiusLimit ? He.upperRadiusLimit : ye), ye
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const ee = Re.e.Now - this._lastInteractionTime,
          ie = .5 * Math.PI - this._defaultElevation,
          He = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > He && ee >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Te.b.CreateAnimation("beta", Te.b.ANIMATIONTYPE_FLOAT, 60, Xe.EasingFunction));
          const ee = Te.b.TransitionTo("beta", ie, this._attachedCamera, this._attachedCamera.Xx(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          ee && this._animatables.push(ee)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = Re.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    Xe.EasingFunction = new class extends fe {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = ee
      }
      easeInCore(ee) {
        return this.exponent <= 0 ? ee : (Math.exp(this.exponent * ee) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, Xe.EasingMode = fe.EASINGMODE_EASEINOUT, Xe.IgnoreBoundsSizeMode = 0, Xe.FitFrustumSidesMode = 1;
    var ze = He(41320),
      Be = He(41311),
      Ee = He(41350),
      ge = He(41203);
    let Oe = (() => {
        var ee;
        let ie, He = [],
          Me = [];
        return ee = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, ye.l)(this, He, [0, 1, 2]), this._pointerInput = (0, ye.l)(this, Me)
          }
          attachControl(ee) {
            ee = ge.h.BackCompatCameraNoPreventDefault(arguments);
            const ie = this.camera.Nf(),
              He = ie.getInputElement();
            let ye = 0,
              be = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = Me => {
              const Ke = Me.event,
                Ue = "touch" === Ke.pointerType;
              if (Me.type !== oe.c.POINTERMOVE && -1 === this.buttons.indexOf(Ke.button)) return;
              const Fe = Ke.target;
              if (this._altKey = Ke.altKey, this._ctrlKey = Ke.ctrlKey, this._metaKey = Ke.metaKey, this._shiftKey = Ke.shiftKey, this._buttonsPressed = Ke.buttons, ie.isPointerLock) {
                const ee = Ke.movementX,
                  ie = Ke.movementY;
                this.onTouch(null, ee, ie), this._pointA = null, this._pointB = null
              } else {
                if (Me.type !== oe.c.POINTERDOWN && Me.type !== oe.c.POINTERDOUBLETAP && Ue && this._pointA?.pointerId !== Ke.pointerId && this._pointB?.pointerId !== Ke.pointerId) return;
                if (Me.type !== oe.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !Ue)
                  if (Me.type === oe.c.POINTERDOUBLETAP) this.onDoubleTap(Ke.pointerType, Ke);
                  else if (Me.type !== oe.c.POINTERUP || this._currentMousePointerIdDown !== Ke.pointerId && !Ue) {
                  if (Me.type === oe.c.POINTERMOVE)
                    if (ee || Ke.preventDefault(), this._pointA && null === this._pointB) {
                      const ee = Ke.clientX - this._pointA.x,
                        ie = Ke.clientY - this._pointA.y;
                      this._pointA.x = Ke.clientX, this._pointA.y = Ke.clientY, this.onTouch(this._pointA, ee, ie)
                    } else if (this._pointA && this._pointB) {
                    const ee = this._pointA.pointerId === Ke.pointerId ? this._pointA : this._pointB;
                    ee.x = Ke.clientX, ee.y = Ke.clientY;
                    const ie = this._pointA.x - this._pointB.x,
                      He = this._pointA.y - this._pointB.y,
                      Ue = ie * ie + He * He,
                      Fe = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: Ke.pointerId,
                        type: Me.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, ye, Ue, be, Fe), be = Fe, ye = Ue
                  }
                } else {
                  try {
                    Fe?.releasePointerCapture(Ke.pointerId)
                  } catch (Je) {}
                  Ue || (this._pointB = null), ie._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == Ke.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == Ke.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== ye || be) && (this.onMultiTouch(this._pointA, this._pointB, ye, 0, be, null), ye = 0, be = null), this._currentMousePointerIdDown = -1, this.onButtonUp(Ke), ee || Ke.preventDefault()
                } else {
                  try {
                    Fe?.setPointerCapture(Ke.pointerId)
                  } catch (Je) {}
                  if (null === this._pointA) this._pointA = {
                    x: Ke.clientX,
                    y: Ke.clientY,
                    pointerId: Ke.pointerId,
                    type: Ke.pointerType,
                    button: Ke.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: Ke.clientX,
                      y: Ke.clientY,
                      pointerId: Ke.pointerId,
                      type: Ke.pointerType,
                      button: Ke.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || Ue || (this._currentMousePointerIdDown = Ke.pointerId), this.onButtonDown(Ke), ee || (Ke.preventDefault(), He && He.focus())
                }
              }
            }, this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._pointerInput, oe.c.POINTERDOWN | oe.c.POINTERUP | oe.c.POINTERMOVE | oe.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, ye = 0, be = null, this.onLostFocus()
            }, this._contextMenuBind = ee => this.onContextMenu(ee), He && He.addEventListener("contextmenu", this._contextMenuBind, !1);
            const Me = this.camera.Xx().Nf().getHostWindow();
            Me && ge.h.RegisterTopRootEvents(Me, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const ee = this.camera.Xx().Nf().getHostWindow();
              ee && ge.h.UnregisterTopRootEvents(ee, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const ee = this.camera.Xx().Nf().getInputElement();
                ee && ee.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(ee, ie) {}
          onTouch(ee, ie, He) {}
          onMultiTouch(ee, ie, He, ye, be, Me) {}
          onContextMenu(ee) {
            ee.preventDefault()
          }
          onButtonDown(ee) {}
          onButtonUp(ee) {}
          onLostFocus() {}
        }, (() => {
          const Ke = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ie = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: ee => "buttons" in ee,
              get: ee => ee.buttons,
              set: (ee, ie) => {
                ee.buttons = ie
              }
            },
            metadata: Ke
          }, He, Me), Ke && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ke
          })
        })(), ee
      })(),
      de = (() => {
        var ee;
        let ie, He, Me, Ke = Oe,
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        return ee = class extends Ke {
          constructor() {
            super(...arguments), this.pinchZoom = (0, ye.l)(this, Ue, !0), this.multiTouchPanning = ((0, ye.l)(this, Fe), (0, ye.l)(this, Je, !0)), this.multiTouchPanAndZoom = ((0, ye.l)(this, oe), (0, ye.l)(this, Re, !0)), this._isPinching = ((0, ye.l)(this, ke), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(ee, ie) {}
          _computeMultiTouchPanning(ee, ie) {}
          onMultiTouch(ee, ie, He, ye, be, Me) {
            0 === He && null === be || 0 === ye && null === Me || (this.multiTouchPanAndZoom ? (this._computePinchZoom(He, ye), this._computeMultiTouchPanning(be, Me)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(He, ye), this._isPinching = !0) : this._computeMultiTouchPanning(be, Me)) : this.multiTouchPanning ? this._computeMultiTouchPanning(be, Me) : this.pinchZoom && this._computePinchZoom(He, ye))
          }
          onButtonUp(ee) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ke[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: ee => "pinchZoom" in ee,
              get: ee => ee.pinchZoom,
              set: (ee, ie) => {
                ee.pinchZoom = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: ee => "multiTouchPanning" in ee,
              get: ee => ee.multiTouchPanning,
              set: (ee, ie) => {
                ee.multiTouchPanning = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, ye.i)(null, null, Me, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: ee => "multiTouchPanAndZoom" in ee,
              get: ee => ee.multiTouchPanAndZoom,
              set: (ee, ie) => {
                ee.multiTouchPanAndZoom = ie
              }
            },
            metadata: qe
          }, Re, ke), qe && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          })
        })(), ee
      })(),
      We = (() => {
        var ee;
        let ie, He, Me, Ke, Ue, Fe, Je, oe = de,
          Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [],
          Xe = [],
          ze = [],
          Be = [],
          Ee = [],
          ge = [],
          Oe = [],
          We = [],
          te = [];
        return ee = class extends oe {
          constructor() {
            super(...arguments), this.buttons = (0, ye.l)(this, Re, [0, 1, 2]), this.angularSensibilityX = ((0, ye.l)(this, ke), (0, ye.l)(this, qe, 1e3)), this.angularSensibilityY = ((0, ye.l)(this, fe), (0, ye.l)(this, Te, 1e3)), this.pinchPrecision = ((0, ye.l)(this, pe), (0, ye.l)(this, Xe, 12)), this.pinchDeltaPercentage = ((0, ye.l)(this, ze), (0, ye.l)(this, Be, 0)), this.useNaturalPinchZoom = ((0, ye.l)(this, Ee), (0, ye.l)(this, ge, !1)), this.panningSensibility = ((0, ye.l)(this, Oe), (0, ye.l)(this, We, 1e3)), this.pinchInwards = ((0, ye.l)(this, te), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(ee, ie) {
            if (ee && ie) {
              const He = ie.x - ee.x,
                ye = ie.y - ee.y,
                be = this.camera.movement.input.getEntry("pointer", "pan"),
                Me = be?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== Me && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -He * Me, this.camera.movement.panAccumulatedPixels.y += ye * Me)
            }
          }
          _computePinchZoom(ie, He) {
            const ye = this.camera.radius || ee.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = ye * Math.sqrt(ie) / Math.sqrt(He);
            else if (this.pinchDeltaPercentage) {
              const ee = .001 * (He - ie) * ye * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += ee
            } else {
              const ee = (He - ie) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += ee
            }
          }
          onTouch(ee, ie, He) {
            const ye = this._activeEntry ?? (this.camera.Nf().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (ye)
              if ("pan" === ye.interaction) {
                const ee = ye.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== ee && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ie * ee, this.camera.movement.panAccumulatedPixels.y += He * ee)
              } else if ("rotate" === ye.interaction) {
              const ee = ye.I9 ?? ye.sensitivity ?? 1 / this.angularSensibilityX,
                be = ye.N9 ?? ye.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -ie * ee, this.camera.movement.rotationAccumulatedPixels.y += -He * be
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(ee, ie, He, ye, be, Me) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(ye) - Math.sqrt(He)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(ee, ie, He, ye, be, Me)
          }
          onButtonDown(ee) {
            this._pointerConditions.button = ee.button, this._pointerModifiers.ctrl = ee.ctrlKey, this._pointerModifiers.alt = ee.altKey, this._pointerModifiers.shift = ee.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(ee)
          }
          onButtonUp(ee) {
            this._activeEntry = null, super.onButtonUp(ee)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const de = "function" === typeof Symbol && Symbol.metadata ? Object.create(oe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: ee => "buttons" in ee,
              get: ee => ee.buttons,
              set: (ee, ie) => {
                ee.buttons = ie
              }
            },
            metadata: de
          }, Re, ke), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: ee => "angularSensibilityX" in ee,
              get: ee => ee.angularSensibilityX,
              set: (ee, ie) => {
                ee.angularSensibilityX = ie
              }
            },
            metadata: de
          }, qe, fe), (0, ye.i)(null, null, Me, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: ee => "angularSensibilityY" in ee,
              get: ee => ee.angularSensibilityY,
              set: (ee, ie) => {
                ee.angularSensibilityY = ie
              }
            },
            metadata: de
          }, Te, pe), (0, ye.i)(null, null, Ke, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: ee => "pinchPrecision" in ee,
              get: ee => ee.pinchPrecision,
              set: (ee, ie) => {
                ee.pinchPrecision = ie
              }
            },
            metadata: de
          }, Xe, ze), (0, ye.i)(null, null, Ue, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: ee => "pinchDeltaPercentage" in ee,
              get: ee => ee.pinchDeltaPercentage,
              set: (ee, ie) => {
                ee.pinchDeltaPercentage = ie
              }
            },
            metadata: de
          }, Be, Ee), (0, ye.i)(null, null, Fe, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: ee => "useNaturalPinchZoom" in ee,
              get: ee => ee.useNaturalPinchZoom,
              set: (ee, ie) => {
                ee.useNaturalPinchZoom = ie
              }
            },
            metadata: de
          }, ge, Oe), (0, ye.i)(null, null, Je, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: ee => "panningSensibility" in ee,
              get: ee => ee.panningSensibility,
              set: (ee, ie) => {
                ee.panningSensibility = ie
              }
            },
            metadata: de
          }, We, te), de && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: de
          })
        })(), ee.MinimumRadiusForPinch = .001, ee
      })();
    Ee.c.ArcRotateCameraPointersInput = We;
    var te = He(41289);
    let Ze = (() => {
      var ee;
      let ie, He, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, Te = [],
        pe = [],
        Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        Oe = [],
        de = [],
        We = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [];
      return ee = class {
        constructor() {
          this.camera = (0, ye.l)(this, Te), this.keysUp = (0, ye.l)(this, pe, [38]), this.keysDown = ((0, ye.l)(this, Xe), (0, ye.l)(this, ze, [40])), this.keysLeft = ((0, ye.l)(this, Be), (0, ye.l)(this, Ee, [37])), this.keysRight = ((0, ye.l)(this, Oe), (0, ye.l)(this, de, [39])), this.keysReset = ((0, ye.l)(this, We), (0, ye.l)(this, Ze, [220])), this.keysZoomIn = ((0, ye.l)(this, we), (0, ye.l)(this, De, [187, 107])), this.keysZoomOut = ((0, ye.l)(this, Pe), (0, ye.l)(this, Ae, [189, 109])), this.panningSensibility = ((0, ye.l)(this, Ye), (0, ye.l)(this, Ve, 50)), this.zoomingSensibility = ((0, ye.l)(this, ae), (0, ye.l)(this, ce, 25)), this.angularSpeed = ((0, ye.l)(this, xe), (0, ye.l)(this, Le, .01)), this._useAltToZoom = ((0, ye.l)(this, Ce), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new Ke.n, this._panDirection = new Ke.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(ee) {
          this._useAltToZoom = ee, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const ee = this.camera.movement.input,
            ie = ee.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && ie ? ee.inputMap.splice(ee.inputMap.indexOf(ie), 1) : this._useAltToZoom && !ie && ee.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(ee) {
          ee = ge.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Xx(), this._engine = this._scene.Nf(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ie => {
            const He = ie.event;
            if (!He.metaKey)
              if (ie.type === te.e.KEYDOWN) {
                if (this._ctrlPressed = He.ctrlKey, this._altPressed = He.altKey, -1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysReset.indexOf(He.keyCode) || -1 !== this.keysZoomIn.indexOf(He.keyCode) || -1 !== this.keysZoomOut.indexOf(He.keyCode)) {
                  -1 === this._keys.indexOf(He.keyCode) && this._keys.push(He.keyCode), He.preventDefault && (ee || He.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(He.keyCode) || -1 !== this.keysDown.indexOf(He.keyCode) || -1 !== this.keysLeft.indexOf(He.keyCode) || -1 !== this.keysRight.indexOf(He.keyCode) || -1 !== this.keysReset.indexOf(He.keyCode) || -1 !== this.keysZoomIn.indexOf(He.keyCode) || -1 !== this.keysZoomOut.indexOf(He.keyCode)) {
              const ie = this._keys.indexOf(He.keyCode);
              ie >= 0 && this._keys.splice(ie, 1), He.preventDefault && (ee || He.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const ee = this.camera,
              ie = ee.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const He = this._rotateDirection.set(0, 0),
              ye = this._panDirection.set(0, 0);
            let be = 0,
              Me = 0;
            for (let Ke = 0; Ke < this._keys.length; Ke++) {
              const Ue = this._keys[Ke];
              if (this._keyboardConditions.key = Ue, -1 === this.keysReset.indexOf(Ue)) {
                const ee = ie.resolveInteraction("keyboard", this._keyboardConditions);
                if (ee)
                  if ("pan" === ee.interaction) Me = Math.max(Me, ee.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(Ue) ? ye.x -= 1 : -1 !== this.keysRight.indexOf(Ue) ? ye.x += 1 : -1 !== this.keysUp.indexOf(Ue) ? ye.y += 1 : -1 !== this.keysDown.indexOf(Ue) && (ye.y -= 1);
                  else if ("zoom" === ee.interaction) {
                  const He = ee.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(Ue) || -1 !== this.keysZoomIn.indexOf(Ue) ? ie.handlers.zoom(He) : -1 === this.keysDown.indexOf(Ue) && -1 === this.keysZoomOut.indexOf(Ue) || ie.handlers.zoom(-He)
                } else "rotate" === ee.interaction && (be = Math.max(be, ee.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(Ue) ? He.x -= 1 : -1 !== this.keysRight.indexOf(Ue) ? He.x += 1 : -1 !== this.keysUp.indexOf(Ue) ? He.y -= 1 : -1 !== this.keysDown.indexOf(Ue) && (He.y += 1))
              } - 1 !== this.keysReset.indexOf(Ue) && ee.useInputToRestoreState && ee.restoreState()
            }
            0 === He.x && 0 === He.y || (He.normalize().scaleInPlace(be), ie.handlers.rotate(He.x, He.y)), 0 === ye.x && 0 === ye.y || (ye.normalize().scaleInPlace(Me), ie.handlers.pan(ye.x, ye.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const Ke = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], qe = [(0, be.R)()], fe = [(0, be.R)()], (0, ye.i)(ee, null, fe, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAltToZoom" in ee,
            get: ee => ee.useAltToZoom
          },
          metadata: Ke
        }, null, Te), (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysUp" in ee,
            get: ee => ee.keysUp,
            set: (ee, ie) => {
              ee.keysUp = ie
            }
          },
          metadata: Ke
        }, pe, Xe), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysDown" in ee,
            get: ee => ee.keysDown,
            set: (ee, ie) => {
              ee.keysDown = ie
            }
          },
          metadata: Ke
        }, ze, Be), (0, ye.i)(null, null, Me, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysLeft" in ee,
            get: ee => ee.keysLeft,
            set: (ee, ie) => {
              ee.keysLeft = ie
            }
          },
          metadata: Ke
        }, Ee, Oe), (0, ye.i)(null, null, Ue, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysRight" in ee,
            get: ee => ee.keysRight,
            set: (ee, ie) => {
              ee.keysRight = ie
            }
          },
          metadata: Ke
        }, de, We), (0, ye.i)(null, null, Fe, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysReset" in ee,
            get: ee => ee.keysReset,
            set: (ee, ie) => {
              ee.keysReset = ie
            }
          },
          metadata: Ke
        }, Ze, we), (0, ye.i)(null, null, Je, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysZoomIn" in ee,
            get: ee => ee.keysZoomIn,
            set: (ee, ie) => {
              ee.keysZoomIn = ie
            }
          },
          metadata: Ke
        }, De, Pe), (0, ye.i)(null, null, oe, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: ee => "keysZoomOut" in ee,
            get: ee => ee.keysZoomOut,
            set: (ee, ie) => {
              ee.keysZoomOut = ie
            }
          },
          metadata: Ke
        }, Ae, Ye), (0, ye.i)(null, null, Re, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: ee => "panningSensibility" in ee,
            get: ee => ee.panningSensibility,
            set: (ee, ie) => {
              ee.panningSensibility = ie
            }
          },
          metadata: Ke
        }, Ve, ae), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: ee => "zoomingSensibility" in ee,
            get: ee => ee.zoomingSensibility,
            set: (ee, ie) => {
              ee.zoomingSensibility = ie
            }
          },
          metadata: Ke
        }, ce, xe), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: ee => "angularSpeed" in ee,
            get: ee => ee.angularSpeed,
            set: (ee, ie) => {
              ee.angularSpeed = ie
            }
          },
          metadata: Ke
        }, Le, Ce), Ke && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ke
        })
      })(), ee
    })();
    Ee.c.ArcRotateCameraKeyboardMoveInput = Ze;
    var we = He(38590),
      De = He(41292);
    let Pe = (() => {
      var ee;
      let ie, He, Me, Fe = [],
        Je = [],
        Re = [],
        qe = [],
        fe = [],
        Te = [];
      return ee = class {
        constructor() {
          this.wheelPrecision = (0, ye.l)(this, Fe, 3), this.zoomToMouseLocation = ((0, ye.l)(this, Je), (0, ye.l)(this, Re, !1)), this.wheelDeltaPercentage = ((0, ye.l)(this, qe), (0, ye.l)(this, fe, 0)), this.customComputeDeltaFromMouseWheel = ((0, ye.l)(this, Te), null), this._viewOffset = new Ke.p(0, 0, 0), this._globalOffset = new Ke.p(0, 0, 0), this._inertialPanning = Ke.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(ee, ie) {
          let He;
          const ye = .01 * ee * this.wheelDeltaPercentage * ie;
          return He = ee > 0 ? ye / (1 + this.wheelDeltaPercentage) : ye * (1 + this.wheelDeltaPercentage), He
        }
        attachControl(ee) {
          ee = ge.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = ie => {
            if (ie.type !== oe.c.POINTERWHEEL) return;
            const He = ie.event;
            let ye;
            const be = He.deltaMode === De.d.DOM_DELTA_LINE ? 40 : 1,
              Me = -He.deltaY * be;
            if (this.customComputeDeltaFromMouseWheel) ye = this.customComputeDeltaFromMouseWheel(Me, this, He);
            else if (this.wheelDeltaPercentage) {
              if (ye = this._computeDeltaFromMouseWheelLegacyEvent(Me, this.camera.radius), ye > 0) {
                const ee = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let ie = this.camera.radius,
                  He = ee + ye;
                for (let ye = 0; ye < 20 && !(ie <= He) && !(Math.abs(He * this.camera.inertia) < .001); ye++) ie -= He, He *= this.camera.inertia;
                ie = (0, Ue.Clamp)(ie, 0, Number.MAX_VALUE), ye = this._computeDeltaFromMouseWheelLegacyEvent(Me, ie)
              }
            } else {
              const ee = this.camera.movement.input.getEntry("wheel", "zoom");
              ye = Me * (ee?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            ye && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(ye)) : this.camera.movement.zoomAccumulatedPixels += ye), He.preventDefault && (ee || He.preventDefault())
          }, this._observer = this.camera.Xx()._inputManager._addCameraPointerObserver(this._wheel, oe.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Iee(0)
        }
        detachControl() {
          this._observer && (this.camera.Xx()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const ee = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(ee.inertialAlphaOffset) + Math.abs(ee.inertialBetaOffset) + Math.abs(ee.inertialRadiusOffset)) {
            this._updateHitPlane(), ee.target.addInPlace(this._inertialPanning), ee.radius -= this._zoomToMouseRadiusOffset;
            const ie = ee.movement.getFrameIndependentDecay(ee.inertia);
            this._inertialPanning.scaleInPlace(ie), this._zoomToMouseRadiusOffset *= ie, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < ke.b && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const ee = this.camera,
            ie = ee.target.subtract(ee.position);
          this._hitPlane = we.c.FromPositionAndNormal(ee.target, ie)
        }
        _getPosition() {
          const ee = this.camera,
            ie = ee.Xx(),
            He = ie.createPickingRay(ie.pointerX, ie.pointerY, Ke.b.Identity(), ee, !1);
          0 === ee.targetScreenOffset.x && 0 === ee.targetScreenOffset.y || (this._viewOffset.set(ee.targetScreenOffset.x, ee.targetScreenOffset.y, 0), ee.getViewMatrix().invertToRef(ee._cameraTransformMatrix), this._globalOffset = Ke.p.TransformNormal(this._viewOffset, ee._cameraTransformMatrix), He.origin.addInPlace(this._globalOffset));
          let ye = 0;
          return this._hitPlane && (ye = He.intersectsPlane(this._hitPlane) ?? 0), He.origin.addInPlace(He.direction.scaleInPlace(ye))
        }
        _zoomToMouse(ee) {
          const ie = this.camera,
            He = 1 - ie.inertia,
            ye = ie.movement.getFrameIndependentInputScale(ie.inertia);
          if (ie.lowerRadiusLimit) {
            const be = ie.lowerRadiusLimit ?? 0;
            ie.radius - (this._zoomToMouseRadiusOffset + ee * ye) / He < be && (ee = ((ie.radius - be) * He - this._zoomToMouseRadiusOffset) / ye)
          }
          if (ie.upperRadiusLimit) {
            const be = ie.upperRadiusLimit ?? 0;
            ie.radius - (this._zoomToMouseRadiusOffset + ee * ye) / He > be && (ee = ((ie.radius - be) * He - this._zoomToMouseRadiusOffset) / ye)
          }
          const be = ee / He / ie.radius,
            Me = this._getPosition(),
            Ue = Ke.j.rf[6];
          Me.subtractToRef(ie.target, Ue), Ue.scaleInPlace(be), Ue.scaleInPlace(He), Ue.scaleInPlace(ye), this._inertialPanning.addInPlace(Ue), this._zoomToMouseRadiusOffset += ee * ye
        }
        _zeroIfClose(ee) {
          Math.abs(ee.x) < ke.b && (ee.x = 0), Math.abs(ee.y) < ke.b && (ee.y = 0), Math.abs(ee.z) < ke.b && (ee.z = 0)
        }
      }, (() => {
        const Ke = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelPrecision" in ee,
            get: ee => ee.wheelPrecision,
            set: (ee, ie) => {
              ee.wheelPrecision = ie
            }
          },
          metadata: Ke
        }, Fe, Je), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: ee => "zoomToMouseLocation" in ee,
            get: ee => ee.zoomToMouseLocation,
            set: (ee, ie) => {
              ee.zoomToMouseLocation = ie
            }
          },
          metadata: Ke
        }, Re, qe), (0, ye.i)(null, null, Me, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: ee => "wheelDeltaPercentage" in ee,
            get: ee => ee.wheelDeltaPercentage,
            set: (ee, ie) => {
              ee.wheelDeltaPercentage = ie
            }
          },
          metadata: Ke
        }, fe, Te), Ke && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ke
        })
      })(), ee
    })();
    Ee.c.ArcRotateCameraMouseWheelInput = Pe;
    var Ae, Ye, Ve = He(40985);
    class ae extends Ee.f {
      constructor(ee) {
        super(ee)
      }
      addMouseWheel() {
        return this.add(new Pe), this
      }
      addPointers() {
        return this.add(new We), this
      }
      addKeyboard() {
        return this.add(new Ze), this
      }
    }(Ae = ae.prototype).addVRDeviceOrientation ?? (Ae.addVRDeviceOrientation = (0, Ve.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Ye = ae.prototype).addGamepad ?? (Ye.addGamepad = (0, Ve.h)("ArcRotateCameraInputsManager", "addGamepad"));
    var ce = He(37949),
      xe = He(41339),
      Le = He(41345);
    class Ce extends xe.c {
      constructor(ee, ie, He) {
        super(ee, ie, He), this.input = new Le.d({
          pan: (ee, ie) => {
            this.panAccumulatedPixels.x += ee, this.panAccumulatedPixels.y += ie
          },
          rotate: (ee, ie) => {
            this.rotationAccumulatedPixels.x += ee, this.rotationAccumulatedPixels.y += ie
          },
          zoom: ee => {
            this.zoomAccumulatedPixels += ee
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

    function ve(ee, ie) {
      return isNaN(ee) ? ie : ee
    }
    let ue = (() => {
        var ee;
        let ie, He, Fe, oe, Re, fe, Te, Ee, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ce, xe, Le, ue, me, le, Se, ne, je, se = Be.c,
          Ie = [],
          he = [],
          Ne = [],
          Ge = [],
          re = [],
          Qe = [],
          ei = [],
          ii = [],
          Hi = [],
          yi = [],
          bi = [],
          Mi = [],
          Ki = [],
          Ui = [],
          Fi = [],
          Ji = [],
          oi = [],
          Ri = [],
          ki = [],
          qi = [],
          fi = [],
          Ti = [],
          Xi = [],
          zi = [],
          Bi = [],
          Ei = [],
          gi = [],
          Oi = [],
          di = [],
          Wi = [],
          ti = [],
          Zi = [],
          wi = [],
          Di = [],
          Pi = [],
          Ai = [],
          Yi = [],
          Vi = [],
          ai = [],
          ci = [],
          xi = [],
          Li = [],
          Ci = [],
          vi = [],
          ui = [],
          mi = [],
          li = [];
        return ee = class extends se {
          get target() {
            return this.VR
          }
          set target(ee) {
            this.setTarget(ee)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(ee) {
            ee && this.setTarget(ee)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(ee) {
            this.setPosition(ee)
          }
          set upVector(ee) {
            this._upToYMatrix || (this._yToUpMatrix = new Ke.b, this._upToYMatrix = new Ke.b, this._upVector = Ke.p.Zero()), ee.normalize(), this._upVector.jD(ee), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            Ke.b.RotationAlignToRef(Ke.p.UpReadOnly, this._upVector, this._yToUpMatrix), Ke.b.RotationAlignToRef(this._upVector, Ke.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const ee = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(ee) < this._rotationEpsilon ? 0 : ee
          }
          set inertialAlphaOffset(ee) {
            this._inertialAlphaOffset = ee, 0 === ee && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const ee = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(ee) < this._rotationEpsilon ? 0 : ee
          }
          set inertialBetaOffset(ee) {
            this._inertialBetaOffset = ee, 0 === ee && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const ee = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(ee) < this._rotationEpsilon ? 0 : ee
          }
          set inertialRadiusOffset(ee) {
            this._inertialRadiusOffset = ee, 0 === ee && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(ee) {
            this._panningInertia = ee, this.movement && (this.movement.panInertia = ee)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(ee) {
            this._inertia = ee, this.movement && (this.movement.rotationInertia = ee, this.movement.zoomInertia = ee)
          }
          get angularSensibilityX() {
            const ee = this.inputs.attached.pointers;
            return ee ? ee.angularSensibilityX : 0
          }
          set angularSensibilityX(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.angularSensibilityX = ee)
          }
          get angularSensibilityY() {
            const ee = this.inputs.attached.pointers;
            return ee ? ee.angularSensibilityY : 0
          }
          set angularSensibilityY(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.angularSensibilityY = ee)
          }
          get pinchPrecision() {
            const ee = this.inputs.attached.pointers;
            return ee ? ee.pinchPrecision : 0
          }
          set pinchPrecision(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.pinchPrecision = ee)
          }
          get pinchDeltaPercentage() {
            const ee = this.inputs.attached.pointers;
            return ee ? ee.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.pinchDeltaPercentage = ee)
          }
          get useNaturalPinchZoom() {
            const ee = this.inputs.attached.pointers;
            return !!ee && ee.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.useNaturalPinchZoom = ee)
          }
          get panningSensibility() {
            const ee = this.inputs.attached.pointers;
            return ee ? ee.panningSensibility : 0
          }
          set panningSensibility(ee) {
            const ie = this.inputs.attached.pointers;
            ie && (ie.panningSensibility = ee)
          }
          get keysUp() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysUp : []
          }
          set keysUp(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysUp = ee)
          }
          get keysDown() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysDown : []
          }
          set keysDown(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysDown = ee)
          }
          get keysLeft() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysLeft : []
          }
          set keysLeft(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysLeft = ee)
          }
          get keysRight() {
            const ee = this.inputs.attached.keyboard;
            return ee ? ee.keysRight : []
          }
          set keysRight(ee) {
            const ie = this.inputs.attached.keyboard;
            ie && (ie.keysRight = ee)
          }
          get wheelPrecision() {
            const ee = this.inputs.attached.mousewheel;
            return ee ? ee.wheelPrecision : 0
          }
          set wheelPrecision(ee) {
            const ie = this.inputs.attached.mousewheel;
            ie && (ie.wheelPrecision = ee)
          }
          get zoomToMouseLocation() {
            const ee = this.inputs.attached.mousewheel;
            return !!ee && ee.zoomToMouseLocation
          }
          set zoomToMouseLocation(ee) {
            const ie = this.inputs.attached.mousewheel;
            ie && (ie.zoomToMouseLocation = ee)
          }
          get wheelDeltaPercentage() {
            const ee = this.inputs.attached.mousewheel;
            return ee ? ee.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(ee) {
            const ie = this.inputs.attached.mousewheel;
            ie && (ie.wheelDeltaPercentage = ee)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(ee) {
            this._useCtrlForPanningInternal = ee;
            const ie = this.movement.input,
              He = ie.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !ee && He ? ie.inputMap.splice(ie.inputMap.indexOf(He), 1) : ee && !He && ie.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const ye = ie.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !ee && ye ? ie.inputMap.splice(ie.inputMap.indexOf(ye), 1) : ee && !ye && ie.addEntry({
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
          set _panningMouseButton(ee) {
            this._panningMouseButtonInternal = ee;
            const ie = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            ie && (ie.button = ee)
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
          set useBouncingBehavior(ee) {
            ee !== this.useBouncingBehavior && (ee ? (this._bouncingBehavior = new pe, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(ee) {
            ee !== this.useFramingBehavior && (ee ? (this._framingBehavior = new Xe, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(ee) {
            ee !== this.useAutoRotationBehavior && (ee ? (this._autoRotationBehavior = new qe, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(ee, ie, He, be, Ue, Fe) {
            var Je;
            let oe = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(ee, Ke.p.Zero(), Fe, oe), Je = this, this.alpha = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, void 0)), this.beta = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, void 0)), this.radius = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, void 0)), this.overrideCloneAlphaBetaRadius = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, void 0)), this.VR = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, void 0)), this._targetHost = ((0, ye.l)(this, bi), (0, ye.l)(this, Mi, void 0)), this._upToYMatrix = (0, ye.l)(this, Ki), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, ye.l)(this, Ui, null), this.upperAlphaLimit = ((0, ye.l)(this, Fi), (0, ye.l)(this, Ji, null)), this.lowerBetaLimit = ((0, ye.l)(this, oi), (0, ye.l)(this, Ri, .01)), this.upperBetaLimit = ((0, ye.l)(this, ki), (0, ye.l)(this, qi, Math.PI - .01)), this.lowerRadiusLimit = ((0, ye.l)(this, fi), (0, ye.l)(this, Ti, null)), this.upperRadiusLimit = ((0, ye.l)(this, Xi), (0, ye.l)(this, zi, null)), this.lowerTargetYLimit = ((0, ye.l)(this, Bi), (0, ye.l)(this, Ei, -1 / 0)), this.inertialPanningX = ((0, ye.l)(this, gi), (0, ye.l)(this, Oi, 0)), this.inertialPanningY = ((0, ye.l)(this, di), (0, ye.l)(this, Wi, 0)), this.pinchToPanMaxDistance = ((0, ye.l)(this, ti), (0, ye.l)(this, Zi, 20)), this.panningDistanceLimit = ((0, ye.l)(this, wi), (0, ye.l)(this, Di, null)), this.panningOriginTarget = ((0, ye.l)(this, Pi), (0, ye.l)(this, Ai, Ke.p.Zero())), this._panningInertia = ((0, ye.l)(this, Yi), .9), this._inertia = .9, this.zoomOnFactor = (0, ye.l)(this, Vi, 1), this.targetScreenOffset = ((0, ye.l)(this, ai), (0, ye.l)(this, ci, Ke.n.Zero())), this.allowUpsideDown = ((0, ye.l)(this, xi), (0, ye.l)(this, Li, !0)), this.useInputToRestoreState = ((0, ye.l)(this, Ci), (0, ye.l)(this, vi, !0)), this.restoreStateInterpolationFactor = ((0, ye.l)(this, ui), (0, ye.l)(this, mi, 0)), this._currentInterpolationFactor = ((0, ye.l)(this, li), 0), this._viewMatrix = new Ke.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new Ke.p(1, 1, 0), this._transformedDirection = new Ke.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new Me.d, this.checkCollisions = !1, this.collisionRadius = new Ke.p(.5, .5, .5), this._previousPosition = Ke.p.Zero(), this._collisionVelocity = Ke.p.Zero(), this._newPosition = Ke.p.Zero(), this._computationVector = Ke.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new Ke.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new Ke.n(NaN, NaN), this._onCollisionPositionChange = function(ee, ie) {
              let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              He ? (Je.setPosition(ie), Je.jk && Je.jk(He)) : Je._previousPosition.jD(Je._position);
              const ye = Math.cos(Je.alpha),
                be = Math.sin(Je.alpha),
                Me = Math.cos(Je.beta);
              let Ke = Math.sin(Je.beta);
              0 === Ke && (Ke = 1e-4);
              const Ue = Je._getTargetPosition();
              Je._computationVector.wie(Je.radius * ye * Ke, Je.radius * Me, Je.radius * be * Ke), Ue.addToRef(Je._computationVector, Je._newPosition), Je._position.jD(Je._newPosition);
              let Fe = Je.upVector;
              Je.allowUpsideDown && Je.beta < 0 && (Fe = Fe.clone(), Fe = Fe.ck()), Je._computeViewMatrix(Je._position, Ue, Fe), Je._viewMatrix.addAtIndex(12, Je.targetScreenOffset.x), Je._viewMatrix.addAtIndex(13, Je.targetScreenOffset.y), Je._collisionTriggered = !1
            }, this.VR = Ke.p.Zero(), Ue && this.setTarget(Ue), this.alpha = ie, this.beta = He, this.radius = be, this.getViewMatrix(), this.inputs = new ae(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Ce(this.Xx(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.VR = new Ke.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Ke.n.Zero()
          }
          _updateCache(ee) {
            ee || super._updateCache(), this._cache.VR.jD(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.jD(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const ee = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? ee.addToRef(this._targetBoundingCenter, this.VR) : this.VR.jD(ee)
            }
            const ee = this._getLockedTargetPosition();
            return ee || this.VR
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > ke.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              Me = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Me ? this._currentInterpolationFactor = Me : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = ve(ee, this._goalAlpha), this._goalBeta = ve(ie, this._goalBeta), this._goalRadius = ve(He, this._goalRadius), this._goalTarget.set(ve(ye.x, this._goalTarget.x), ve(ye.y, this._goalTarget.y), ve(ye.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(ve(be.x, this._goalTargetScreenOffset.x), ve(be.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, Ue.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, Ue.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, Ue.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, Ue.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.VR.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(ee, ie) {
            let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const be = arguments;
            ie = ge.h.BackCompatCameraNoPreventDefault(be), this._useCtrlForPanning = He, this._panningMouseButton = ye, "boolean" === typeof be[0] && (be.length > 1 && (this._useCtrlForPanning = be[1]), be.length > 2 && (this._panningMouseButton = be[2])), this.inputs.attachElement(ie), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(ee, ie, He) {
            const ye = this.invertRotation ? -1 : 1;
            let be = ee * this._calculateHandednessMultiplier();
            this.beta < 0 && (be *= -1), this.alpha += be * ye, this.beta += ie * ye, this.radius -= He
          }
          _applyPanDelta(ee, ie) {
            const He = Ke.j.rf[0].wie(ee, ie, ie);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), He.multiplyInPlace(this.panningAxis), Ke.p.TransformNormalToRef(He, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const ee = this.upVector,
                ie = Ke.p.CrossToRef(this._transformedDirection, ee, this._transformedDirection);
              Ke.p.CrossToRef(ee, ie, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.VR);
                Ke.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.VR.jD(this._transformedDirection)
              } else {
                if (this.parent) {
                  const ee = Ke.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(ee), ee.transposeToRef(ee), Ke.p.TransformCoordinatesToRef(this._transformedDirection, ee, this._transformedDirection)
                }
                this.VR.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let ee = !1;
            this.movement.computeCurrentFrameDeltas();
            const ie = this.movement.rotationDeltaCurrentFrame,
              He = this.movement.zoomDeltaCurrentFrame,
              ye = this.movement.panDeltaCurrentFrame;
            if (0 === ie.x && 0 === ie.y && 0 === He && 0 === ye.x && 0 === ye.y || (ee = !0, 0 === ie.x && 0 === ie.y && 0 === He || this._applyRotationAndZoomDelta(ie.x, ie.y, He), 0 === ye.x && 0 === ye.y || this._applyPanDelta(ye.x, ye.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), ee = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const ie = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < ie && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < ie && (this.inertialPanningY = 0), ee = !0
            }
            if (ee) this.stopInterpolation();
            else if (this._isInterpolating) {
              let ee = !1;
              const ie = this._scene.Nf().getDeltaTime() / 1e3,
                He = 1 - Math.pow(2, -ie / this._currentInterpolationFactor),
                ye = ve(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const ie = Ke.j.rf[0].set(ve(this._goalTarget.x, this.VR.x), ve(this._goalTarget.y, this.VR.y), ve(this._goalTarget.z, this.VR.z));
                Ke.p.LerpToRef(this.target, ie, He, this.VR), 10 * Ke.p.Distance(this.target, ie) / ye < ke.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.jD(ie), this.setTarget(this.target, !1, !0, !0)) : ee = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const ie = Ke.f.RotationAlphaBetaGammaToRef(ve(this._goalAlpha, this.alpha), ve(this._goalBeta, this.beta), 0, Ke.j.Quaternion[0]),
                  ye = Ke.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Ke.j.Quaternion[1]),
                  be = Ke.f.SlerpToRef(ye, ie, He, Ke.j.Quaternion[2]);
                be.normalize();
                const Me = be.toAlphaBetaGammaToRef(Ke.j.rf[0]);
                if (this.alpha = Me.x, this.beta = Me.y, be.isApprox(ie, ke.b / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const ee = ie.toAlphaBetaGammaToRef(Ke.j.rf[0]);
                  this.alpha = ee.x, this.beta = ee.y
                } else ee = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (ye - this.radius) * He, Math.abs(ye / this.radius - 1) < ke.b ? (this._goalRadius = NaN, this.radius = ye) : ee = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const ie = Ke.j.Vector2[0].set(ve(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), ve(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                Ke.n.LerpToRef(this.targetScreenOffset, ie, He, this.targetScreenOffset), Ke.n.Distance(this.targetScreenOffset, ie) < ke.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.jD(ie)) : ee = !0
              }
              this._isInterpolating = ee
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Ke.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const ee = this.alpha;
            var ie, He;
            this.alpha = function(ee) {
              let ie = Math.PI / 2;
              return 0 === ee.x && 0 === ee.z || (ie = Math.acos(ee.x / Math.sqrt(Math.pow(ee.x, 2) + Math.pow(ee.z, 2)))), ee.z < 0 && (ie = 2 * Math.PI - ie), ie
            }(this._computationVector), this.beta = (ie = this._computationVector.y, He = this.radius, Math.acos(ie / He));
            const ye = Math.round((ee - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * ye * Math.PI, this._checkLimits()
          }
          setPosition(ee) {
            this._position.equals(ee) || (this._position.jD(ee), this.rebuildAnglesAndRadius())
          }
          setTarget(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (ye = this.overrideCloneAlphaBetaRadius ?? ye, ee.computeWorldMatrix) ie && ee.WC ? this._targetBoundingCenter = ee.WC().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, ee.computeWorldMatrix(), this._targetHost = ee, this.VR = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const ie = ee,
                ye = this._getTargetPosition();
              if (ye && !He && ye.equals(ie)) return;
              this._targetHost = null, this.VR = ie, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            ye || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const ee = Math.cos(this.alpha),
              ie = Math.sin(this.alpha),
              He = Math.cos(this.beta);
            let ye = Math.sin(this.beta);
            0 === ye && (ye = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const be = this._getTargetPosition();
            if (this._computationVector.wie(this.radius * ee * ye, this.radius * He, this.radius * ie * ye), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Ke.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), be.addToRef(this._computationVector, this._newPosition), this.Xx().collisionsEnabled && this.checkCollisions) {
              const ee = this.Xx().collisionCoordinator;
              this._collider || (this._collider = ee.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, ee.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.jD(this._newPosition);
              let ee = this.upVector;
              this.allowUpsideDown && ye < 0 && (ee = ee.ck()), this._computeViewMatrix(this._position, be, ee), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.jD(be), this._viewMatrix
          }
          zoomOn(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            ee = ee || this.Xx().meshes;
            const He = Je.b.MinMax(ee);
            let ye = this._calculateLowerRadiusFromModelBoundingSphere(He.min, He.max);
            if (ye = Math.max(Math.min(ye, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = ye * this.zoomOnFactor, this.mode === ze.d.ORTHOGRAPHIC_CAMERA) {
              const ee = this.Xx().Nf().getAspectRatio(this),
                ie = ye * this.zoomOnFactor / 2;
              this.orthoLeft = -ie * ee, this.orthoRight = ie * ee, this.orthoBottom = -ie, this.orthoTop = ie
            }
            this.focusOn({
              min: He.min,
              max: He.max,
              distance: ye
            }, ie)
          }
          focusOn(ee) {
            let ie, He, ye = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === ee.min) {
              const ye = ee || this.Xx().meshes;
              ie = Je.b.MinMax(ye), He = Ke.p.Distance(ie.min, ie.max)
            } else {
              ie = ee, He = ee.distance
            }
            this.VR = Je.b.Center(ie), ye || (this.maxZ = 2 * He)
          }
          createRigCamera(ie, He) {
            let ye = 0;
            switch (this.cameraRigMode) {
              case ze.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ze.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ze.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ze.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ze.d.RIG_MODE_VR:
                ye = this._cameraRigParams.stereoHalfAngle * (0 === He ? 1 : -1);
                break;
              case ze.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                ye = this._cameraRigParams.stereoHalfAngle * (0 === He ? -1 : 1)
            }
            const be = new ee(ie, this.alpha + ye, this.beta, this.radius, this.VR, this.Xx());
            return be._cameraRigParams = {}, be.isRigCamera = !0, be.rigParent = this, be.upVector = this.upVector, be.mode = this.mode, be.orthoLeft = this.orthoLeft, be.orthoRight = this.orthoRight, be.orthoBottom = this.orthoBottom, be.orthoTop = this.orthoTop, be
          }
          _updateRigCameras() {
            const ee = this._rigCameras[0],
              ie = this._rigCameras[1];
            switch (ee.beta = ie.beta = this.beta, this.cameraRigMode) {
              case ze.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ze.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ze.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ze.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case ze.d.RIG_MODE_VR:
                ee.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, ie.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case ze.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                ee.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, ie.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const ye = Ke.p.Distance(ee, ie),
              be = this.Xx().Nf().getAspectRatio(this),
              Me = Math.tan(this.fov / 2),
              Ue = Me * be,
              Fe = .5 * ye * He,
              Je = Fe * Math.sqrt(1 + 1 / (Ue * Ue)),
              oe = Fe * Math.sqrt(1 + 1 / (Me * Me));
            return Math.max(Je, oe)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(se[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], Fe = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.P)("target")], fe = [(0, be.C)("targetHost")], Te = [(0, be.R)()], Ee = [(0, be.R)()], Oe = [(0, be.R)()], de = [(0, be.R)()], We = [(0, be.R)()], te = [(0, be.R)()], Ze = [(0, be.R)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], Ye = [(0, be.R)()], Ve = [(0, be.R)()], ce = [(0, be.R)()], xe = [(0, be.P)()], Le = [(0, be.R)()], ue = [(0, be.R)()], me = [(0, be.R)()], le = [(0, be.L)()], Se = [(0, be.R)()], ne = [(0, be.R)()], je = [(0, be.R)()], (0, ye.i)(ee, null, Te, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "inertialAlphaOffset" in ee,
              get: ee => ee.inertialAlphaOffset
            },
            metadata: Me
          }, null, Ie), (0, ye.i)(ee, null, Ee, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "inertialBetaOffset" in ee,
              get: ee => ee.inertialBetaOffset
            },
            metadata: Me
          }, null, Ie), (0, ye.i)(ee, null, Oe, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "inertialRadiusOffset" in ee,
              get: ee => ee.inertialRadiusOffset
            },
            metadata: Me
          }, null, Ie), (0, ye.i)(ee, null, Le, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: ee => "panningInertia" in ee,
              get: ee => ee.panningInertia
            },
            metadata: Me
          }, null, Ie), (0, ye.i)(ee, null, ue, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: ee => "zoomToMouseLocation" in ee,
              get: ee => ee.zoomToMouseLocation
            },
            metadata: Me
          }, null, Ie), (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "alpha" in ee,
              get: ee => ee.alpha,
              set: (ee, ie) => {
                ee.alpha = ie
              }
            },
            metadata: Me
          }, he, Ne), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: ee => "beta" in ee,
              get: ee => ee.beta,
              set: (ee, ie) => {
                ee.beta = ie
              }
            },
            metadata: Me
          }, Ge, re), (0, ye.i)(null, null, Fe, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: ee => "radius" in ee,
              get: ee => ee.radius,
              set: (ee, ie) => {
                ee.radius = ie
              }
            },
            metadata: Me
          }, Qe, ei), (0, ye.i)(null, null, oe, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: ee => "overrideCloneAlphaBetaRadius" in ee,
              get: ee => ee.overrideCloneAlphaBetaRadius,
              set: (ee, ie) => {
                ee.overrideCloneAlphaBetaRadius = ie
              }
            },
            metadata: Me
          }, ii, Hi), (0, ye.i)(null, null, Re, {
            kind: "field",
            name: "VR",
            static: !1,
            private: !1,
            access: {
              has: ee => "VR" in ee,
              get: ee => ee.VR,
              set: (ee, ie) => {
                ee.VR = ie
              }
            },
            metadata: Me
          }, yi, bi), (0, ye.i)(null, null, fe, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: ee => "_targetHost" in ee,
              get: ee => ee._targetHost,
              set: (ee, ie) => {
                ee._targetHost = ie
              }
            },
            metadata: Me
          }, Mi, Ki), (0, ye.i)(null, null, de, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "lowerAlphaLimit" in ee,
              get: ee => ee.lowerAlphaLimit,
              set: (ee, ie) => {
                ee.lowerAlphaLimit = ie
              }
            },
            metadata: Me
          }, Ui, Fi), (0, ye.i)(null, null, We, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "upperAlphaLimit" in ee,
              get: ee => ee.upperAlphaLimit,
              set: (ee, ie) => {
                ee.upperAlphaLimit = ie
              }
            },
            metadata: Me
          }, Ji, oi), (0, ye.i)(null, null, te, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "lowerBetaLimit" in ee,
              get: ee => ee.lowerBetaLimit,
              set: (ee, ie) => {
                ee.lowerBetaLimit = ie
              }
            },
            metadata: Me
          }, Ri, ki), (0, ye.i)(null, null, Ze, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "upperBetaLimit" in ee,
              get: ee => ee.upperBetaLimit,
              set: (ee, ie) => {
                ee.upperBetaLimit = ie
              }
            },
            metadata: Me
          }, qi, fi), (0, ye.i)(null, null, we, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "lowerRadiusLimit" in ee,
              get: ee => ee.lowerRadiusLimit,
              set: (ee, ie) => {
                ee.lowerRadiusLimit = ie
              }
            },
            metadata: Me
          }, Ti, Xi), (0, ye.i)(null, null, De, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "upperRadiusLimit" in ee,
              get: ee => ee.upperRadiusLimit,
              set: (ee, ie) => {
                ee.upperRadiusLimit = ie
              }
            },
            metadata: Me
          }, zi, Bi), (0, ye.i)(null, null, Pe, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "lowerTargetYLimit" in ee,
              get: ee => ee.lowerTargetYLimit,
              set: (ee, ie) => {
                ee.lowerTargetYLimit = ie
              }
            },
            metadata: Me
          }, Ei, gi), (0, ye.i)(null, null, Ae, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: ee => "inertialPanningX" in ee,
              get: ee => ee.inertialPanningX,
              set: (ee, ie) => {
                ee.inertialPanningX = ie
              }
            },
            metadata: Me
          }, Oi, di), (0, ye.i)(null, null, Ye, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: ee => "inertialPanningY" in ee,
              get: ee => ee.inertialPanningY,
              set: (ee, ie) => {
                ee.inertialPanningY = ie
              }
            },
            metadata: Me
          }, Wi, ti), (0, ye.i)(null, null, Ve, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: ee => "pinchToPanMaxDistance" in ee,
              get: ee => ee.pinchToPanMaxDistance,
              set: (ee, ie) => {
                ee.pinchToPanMaxDistance = ie
              }
            },
            metadata: Me
          }, Zi, wi), (0, ye.i)(null, null, ce, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: ee => "panningDistanceLimit" in ee,
              get: ee => ee.panningDistanceLimit,
              set: (ee, ie) => {
                ee.panningDistanceLimit = ie
              }
            },
            metadata: Me
          }, Di, Pi), (0, ye.i)(null, null, xe, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: ee => "panningOriginTarget" in ee,
              get: ee => ee.panningOriginTarget,
              set: (ee, ie) => {
                ee.panningOriginTarget = ie
              }
            },
            metadata: Me
          }, Ai, Yi), (0, ye.i)(null, null, me, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: ee => "zoomOnFactor" in ee,
              get: ee => ee.zoomOnFactor,
              set: (ee, ie) => {
                ee.zoomOnFactor = ie
              }
            },
            metadata: Me
          }, Vi, ai), (0, ye.i)(null, null, le, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: ee => "targetScreenOffset" in ee,
              get: ee => ee.targetScreenOffset,
              set: (ee, ie) => {
                ee.targetScreenOffset = ie
              }
            },
            metadata: Me
          }, ci, xi), (0, ye.i)(null, null, Se, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: ee => "allowUpsideDown" in ee,
              get: ee => ee.allowUpsideDown,
              set: (ee, ie) => {
                ee.allowUpsideDown = ie
              }
            },
            metadata: Me
          }, Li, Ci), (0, ye.i)(null, null, ne, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: ee => "useInputToRestoreState" in ee,
              get: ee => ee.useInputToRestoreState,
              set: (ee, ie) => {
                ee.useInputToRestoreState = ie
              }
            },
            metadata: Me
          }, vi, ui), (0, ye.i)(null, null, je, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: ee => "restoreStateInterpolationFactor" in ee,
              get: ee => ee.restoreStateInterpolationFactor,
              set: (ee, ie) => {
                ee.restoreStateInterpolationFactor = ie
              }
            },
            metadata: Me
          }, mi, li), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      me = !1;
    me || (me = !0, Fe.d.AddNodeConstructor("ArcRotateCamera", ((ee, ie) => () => new ue(ee, 0, 0, 1, Ke.p.Zero(), ie))), (0, ce.e)("BABYLON.ArcRotateCamera", ue))
  },
  41357: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.d
    });
    var ye = He(41366);
    (0, ye.f)()
  },
  41366: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      f: () => ke
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(38022),
      Ue = He(41374),
      Fe = He(41323),
      Je = He(37949);
    let oe = (() => {
        var ee;
        let ie, He, Fe = Ue.e,
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        return ee = class extends Fe {
          constructor(ee, ie, He, be) {
            super(ee, He, be), this.groundColor = (0, ye.l)(this, Je, new Ke.c(0, 0, 0)), this.direction = ((0, ye.l)(this, oe), (0, ye.l)(this, Re, void 0)), (0, ye.l)(this, ke), this.direction = ie || Me.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(ee) {
            return this.direction = Me.p.Normalize(ee.subtract(Me.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", He.x, He.y, He.z, 0, ie), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ie), this
          }
          transferToNodeMaterialEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return ee.setFloat3(ie, He.x, He.y, He.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Me.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ue.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(ee, ie) {
            ee["HEMILIGHT" + ie] = !0
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.p)()], He = [(0, be.P)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "groundColor" in ee,
              get: ee => ee.groundColor,
              set: (ee, ie) => {
                ee.groundColor = ie
              }
            },
            metadata: Me
          }, Je, oe), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: ee => "direction" in ee,
              get: ee => ee.direction,
              set: (ee, ie) => {
                ee.direction = ie
              }
            },
            metadata: Me
          }, Re, ke), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      Re = !1;

    function ke() {
      Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_3", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.HemisphericLight", oe))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
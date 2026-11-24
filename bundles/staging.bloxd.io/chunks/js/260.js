export const id = 260;
export const ids = [260];
export const modules = {
  41143: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => sm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37203),
      xm = fm(37185),
      wm = fm(37208),
      Dm = fm(40326),
      im = fm(40513),
      Rm = fm(40283),
      pm = fm(40020),
      Em = fm(37191);
    class om {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(mm) {
        this._zoomStopsAnimation = mm
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(mm) {
        this._idleRotationSpeed = mm
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(mm) {
        this._idleRotationWaitTime = mm
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(mm) {
        this._idleRotationSpinupTime = mm
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
      attach(mm) {
        this._attachedCamera = mm;
        const Tm = this._attachedCamera.wG();
        this._onPrePointerObservableObserver = Tm.onPrePointerObservable.add((mm => {
          mm.type !== Rm.c.POINTERDOWN ? mm.type === Rm.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = mm.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const mm = pm.c.Now;
          let Tm = 0;
          null != this._lastFrameTime && (Tm = mm - this._lastFrameTime), this._lastFrameTime = mm, this._applyUserInteraction();
          const fm = mm - this._lastInteractionTime - this._idleRotationWaitTime,
            hm = Math.max(Math.min(fm / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * hm, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (Tm / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const mm = this._attachedCamera.wG();
        this._onPrePointerObservableObserver && mm.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(mm) {
        this._lastInteractionTime = mm ?? pm.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < Em.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let mm = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (mm = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? mm : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = pm.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    fm(41150);
    class Om {
      constructor() {
        this._easingMode = Om.EASINGMODE_EASEIN
      }
      setEasingMode(mm) {
        const Tm = Math.min(Math.max(mm, 0), 2);
        this._easingMode = Tm
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(mm) {
        throw new Error("You must implement this method")
      }
      ease(mm) {
        switch (this._easingMode) {
          case Om.EASINGMODE_EASEIN:
            return this.easeInCore(mm);
          case Om.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - mm)
        }
        return mm >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - mm))) + .5 : .5 * this.easeInCore(2 * mm)
      }
    }
    Om.EASINGMODE_EASEIN = 0, Om.EASINGMODE_EASEOUT = 1, Om.EASINGMODE_EASEINOUT = 2;
    var Ym = fm(41155);
    class qm {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(mm) {
        if (this._autoTransitionRange === mm) return;
        this._autoTransitionRange = mm;
        const Tm = this._attachedCamera;
        Tm && (mm ? this._onMeshTargetChangedObserver = Tm.onMeshTargetChangedObservable.add((mm => {
          if (mm && (mm.computeWorldMatrix(!0), mm.DH)) {
            const Tm = mm.DH().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * Tm, this.upperRadiusTransitionRange = .05 * Tm
          }
        })) : this._onMeshTargetChangedObserver && Tm.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(mm) {
        this._attachedCamera = mm, this._onAfterCheckInputsObserver = mm.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(mm) {
        return !!this._attachedCamera && (this._attachedCamera.radius === mm && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(mm) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (qm.EasingFunction.setEasingMode(qm.EasingMode), this._radiusBounceTransition = Ym.b.CreateAnimation("radius", Ym.b.ANIMATIONTYPE_FLOAT, 60, qm.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const Tm = Ym.b.TransitionTo("radius", this._attachedCamera.radius + mm, this._attachedCamera, this._attachedCamera.wG(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        Tm && this._animatables.push(Tm)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    qm.EasingFunction = new class extends Om {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = mm
      }
      easeInCore(mm) {
        const Tm = Math.max(0, this.amplitude);
        return Math.pow(mm, 3) - mm * Tm * Math.sin(3.141592653589793 * mm)
      }
    }(.3), qm.EasingMode = Om.EASINGMODE_EASEOUT;
    class jm {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new am.c, this._mode = jm.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(mm) {
        this._mode = mm
      }
      get mode() {
        return this._mode
      }
      set radiusScale(mm) {
        this._radiusScale = mm
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(mm) {
        this._positionScale = mm
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(mm) {
        this._defaultElevation = mm
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(mm) {
        this._elevationReturnTime = mm
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(mm) {
        this._elevationReturnWaitTime = mm
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(mm) {
        this._zoomStopsAnimation = mm
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(mm) {
        this._framingTime = mm
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(mm) {
        this._attachedCamera = mm;
        const Tm = this._attachedCamera.wG();
        jm.EasingFunction.setEasingMode(jm.EasingMode), this._onPrePointerObservableObserver = Tm.onPrePointerObservable.add((mm => {
          mm.type !== Rm.c.POINTERDOWN ? mm.type === Rm.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = mm.onMeshTargetChangedObservable.add((mm => {
          mm && mm.DH && this.zoomOnMesh(mm, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = mm.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const mm = this._attachedCamera.wG();
        this._onPrePointerObservableObserver && mm.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        mm.computeWorldMatrix(!0);
        const hm = mm.DH().boundingBox;
        this.zoomOnBoundingInfo(hm.minimumWorld, hm.maximumWorld, Tm, fm)
      }
      zoomOnMeshHierarchy(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        mm.computeWorldMatrix(!0);
        const hm = mm.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(hm.min, hm.max, Tm, fm)
      }
      zoomOnMeshesHierarchy(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hm = new xm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Am = new xm.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let am = 0; am < mm.length; am++) {
          const Tm = mm[am].getHierarchyBoundingVectors(!0);
          xm.p.CheckExtends(Tm.min, hm, Am), xm.p.CheckExtends(Tm.max, hm, Am)
        }
        this.zoomOnBoundingInfo(hm, Am, Tm, fm)
      }
      zoomOnBoundingInfo(mm, Tm) {
        let fm, hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const am = mm.y,
          wm = am + (Tm.y - am) * this._positionScale,
          Dm = Tm.subtract(mm).scale(.5);
        if (!isFinite(wm)) return !1;
        if (hm) fm = new xm.p(0, wm, 0);
        else {
          const Tm = mm.add(Dm);
          fm = new xm.p(Tm.x, wm, Tm.z)
        }
        this._vectorTransition || (this._vectorTransition = Ym.b.CreateAnimation("target", Ym.b.ANIMATIONTYPE_VECTOR3, 60, jm.EasingFunction)), this._betaIsAnimating = !0;
        let im = Ym.b.TransitionTo("target", fm, this._attachedCamera, this._attachedCamera.wG(), 60, this._vectorTransition, this._framingTime);
        im && this._animatables.push(im);
        let Rm = 0;
        if (this._mode === jm.FitFrustumSidesMode) {
          const fm = this._calculateLowerRadiusFromModelBoundingSphere(mm, Tm);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = Dm.length() + this._attachedCamera.minZ), Rm = fm
        } else this._mode === jm.IgnoreBoundsSizeMode && (Rm = this._calculateLowerRadiusFromModelBoundingSphere(mm, Tm), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const fm = Tm.subtract(mm).length();
          this._attachedCamera.panningSensibility = 5e3 / fm, this._attachedCamera.wheelPrecision = 100 / Rm
        }
        return this._radiusTransition || (this._radiusTransition = Ym.b.CreateAnimation("radius", Ym.b.ANIMATIONTYPE_FLOAT, 60, jm.EasingFunction)), im = Ym.b.TransitionTo("radius", Rm, this._attachedCamera, this._attachedCamera.wG(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), Am && Am(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), im && this._animatables.push(im), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(mm, Tm) {
        const fm = this._attachedCamera;
        if (!fm) return 0;
        let hm = fm._calculateLowerRadiusFromModelBoundingSphere(mm, Tm, this._radiusScale);
        return fm.lowerRadiusLimit && this._mode === jm.IgnoreBoundsSizeMode && (hm = hm < fm.lowerRadiusLimit ? fm.lowerRadiusLimit : hm), fm.upperRadiusLimit && (hm = hm > fm.upperRadiusLimit ? fm.upperRadiusLimit : hm), hm
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const mm = pm.c.Now - this._lastInteractionTime,
          Tm = .5 * Math.PI - this._defaultElevation,
          fm = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > fm && mm >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Ym.b.CreateAnimation("beta", Ym.b.ANIMATIONTYPE_FLOAT, 60, jm.EasingFunction));
          const mm = Ym.b.TransitionTo("beta", Tm, this._attachedCamera, this._attachedCamera.wG(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          mm && this._animatables.push(mm)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = pm.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    jm.EasingFunction = new class extends Om {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = mm
      }
      easeInCore(mm) {
        return this.exponent <= 0 ? mm : (Math.exp(this.exponent * mm) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, jm.EasingMode = Om.EASINGMODE_EASEINOUT, jm.IgnoreBoundsSizeMode = 0, jm.FitFrustumSidesMode = 1;
    var Vm = fm(40319),
      Im = fm(40316),
      Km = fm(40340),
      Qm = fm(40203);
    let nm = (() => {
        var mm;
        let Tm, fm = [],
          am = [];
        return mm = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, hm.i)(this, fm, [0, 1, 2]), this._pointerInput = (0, hm.i)(this, am)
          }
          attachControl(mm) {
            mm = Qm.h.BackCompatCameraNoPreventDefault(arguments);
            const Tm = this.camera.dO(),
              fm = Tm.getInputElement();
            let hm = 0,
              Am = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = am => {
              const xm = am.event,
                wm = "touch" === xm.pointerType;
              if (am.type !== Rm.c.POINTERMOVE && -1 === this.buttons.indexOf(xm.button)) return;
              const Dm = xm.target;
              if (this._altKey = xm.altKey, this._ctrlKey = xm.ctrlKey, this._metaKey = xm.metaKey, this._shiftKey = xm.shiftKey, this._buttonsPressed = xm.buttons, Tm.isPointerLock) {
                const mm = xm.movementX,
                  Tm = xm.movementY;
                this.onTouch(null, mm, Tm), this._pointA = null, this._pointB = null
              } else {
                if (am.type !== Rm.c.POINTERDOWN && am.type !== Rm.c.POINTERDOUBLETAP && wm && this._pointA?.pointerId !== xm.pointerId && this._pointB?.pointerId !== xm.pointerId) return;
                if (am.type !== Rm.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !wm)
                  if (am.type === Rm.c.POINTERDOUBLETAP) this.onDoubleTap(xm.pointerType, xm);
                  else if (am.type !== Rm.c.POINTERUP || this._currentMousePointerIdDown !== xm.pointerId && !wm) {
                  if (am.type === Rm.c.POINTERMOVE)
                    if (mm || xm.preventDefault(), this._pointA && null === this._pointB) {
                      const mm = xm.clientX - this._pointA.x,
                        Tm = xm.clientY - this._pointA.y;
                      this._pointA.x = xm.clientX, this._pointA.y = xm.clientY, this.onTouch(this._pointA, mm, Tm)
                    } else if (this._pointA && this._pointB) {
                    const mm = this._pointA.pointerId === xm.pointerId ? this._pointA : this._pointB;
                    mm.x = xm.clientX, mm.y = xm.clientY;
                    const Tm = this._pointA.x - this._pointB.x,
                      fm = this._pointA.y - this._pointB.y,
                      wm = Tm * Tm + fm * fm,
                      Dm = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: xm.pointerId,
                        type: am.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, hm, wm, Am, Dm), Am = Dm, hm = wm
                  }
                } else {
                  try {
                    Dm?.releasePointerCapture(xm.pointerId)
                  } catch (im) {}
                  wm || (this._pointB = null), Tm._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == xm.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == xm.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== hm || Am) && (this.onMultiTouch(this._pointA, this._pointB, hm, 0, Am, null), hm = 0, Am = null), this._currentMousePointerIdDown = -1, this.onButtonUp(xm), mm || xm.preventDefault()
                } else {
                  try {
                    Dm?.setPointerCapture(xm.pointerId)
                  } catch (im) {}
                  if (null === this._pointA) this._pointA = {
                    x: xm.clientX,
                    y: xm.clientY,
                    pointerId: xm.pointerId,
                    type: xm.pointerType,
                    button: xm.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: xm.clientX,
                      y: xm.clientY,
                      pointerId: xm.pointerId,
                      type: xm.pointerType,
                      button: xm.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || wm || (this._currentMousePointerIdDown = xm.pointerId), this.onButtonDown(xm), mm || (xm.preventDefault(), fm && fm.focus())
                }
              }
            }, this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._pointerInput, Rm.c.POINTERDOWN | Rm.c.POINTERUP | Rm.c.POINTERMOVE | Rm.c.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, hm = 0, Am = null, this.onLostFocus()
            }, this._contextMenuBind = mm => this.onContextMenu(mm), fm && fm.addEventListener("contextmenu", this._contextMenuBind, !1);
            const am = this.camera.wG().dO().getHostWindow();
            am && Qm.h.RegisterTopRootEvents(am, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const mm = this.camera.wG().dO().getHostWindow();
              mm && Qm.h.UnregisterTopRootEvents(mm, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const mm = this.camera.wG().dO().getInputElement();
                mm && mm.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(mm, Tm) {}
          onTouch(mm, Tm, fm) {}
          onMultiTouch(mm, Tm, fm, hm, Am, am) {}
          onContextMenu(mm) {
            mm.preventDefault()
          }
          onButtonDown(mm) {}
          onButtonUp(mm) {}
          onLostFocus() {}
        }, (() => {
          const xm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Tm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: mm => "buttons" in mm,
              get: mm => mm.buttons,
              set: (mm, Tm) => {
                mm.buttons = Tm
              }
            },
            metadata: xm
          }, fm, am), xm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xm
          })
        })(), mm
      })(),
      Jm = (() => {
        var mm;
        let Tm, fm, am, xm = nm,
          wm = [],
          Dm = [],
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        return mm = class extends xm {
          constructor() {
            super(...arguments), this.pinchZoom = (0, hm.i)(this, wm, !0), this.multiTouchPanning = ((0, hm.i)(this, Dm), (0, hm.i)(this, im, !0)), this.multiTouchPanAndZoom = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, !0)), this._isPinching = ((0, hm.i)(this, Em), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(mm, Tm) {}
          _computeMultiTouchPanning(mm, Tm) {}
          onMultiTouch(mm, Tm, fm, hm, Am, am) {
            0 === fm && null === Am || 0 === hm && null === am || (this.multiTouchPanAndZoom ? (this._computePinchZoom(fm, hm), this._computeMultiTouchPanning(Am, am)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(fm, hm), this._isPinching = !0) : this._computeMultiTouchPanning(Am, am)) : this.multiTouchPanning ? this._computeMultiTouchPanning(Am, am) : this.pinchZoom && this._computePinchZoom(fm, hm))
          }
          onButtonUp(mm) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const om = "function" === typeof Symbol && Symbol.metadata ? Object.create(xm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: mm => "pinchZoom" in mm,
              get: mm => mm.pinchZoom,
              set: (mm, Tm) => {
                mm.pinchZoom = Tm
              }
            },
            metadata: om
          }, wm, Dm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: mm => "multiTouchPanning" in mm,
              get: mm => mm.multiTouchPanning,
              set: (mm, Tm) => {
                mm.multiTouchPanning = Tm
              }
            },
            metadata: om
          }, im, Rm), (0, hm.g)(null, null, am, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: mm => "multiTouchPanAndZoom" in mm,
              get: mm => mm.multiTouchPanAndZoom,
              set: (mm, Tm) => {
                mm.multiTouchPanAndZoom = Tm
              }
            },
            metadata: om
          }, pm, Em), om && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: om
          })
        })(), mm
      })(),
      cm = (() => {
        var mm;
        let Tm, fm, am, xm, wm, Dm, im, Rm = Jm,
          pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [],
          jm = [],
          Vm = [],
          Im = [],
          Km = [],
          Qm = [],
          nm = [],
          cm = [],
          zm = [];
        return mm = class extends Rm {
          constructor() {
            super(...arguments), this.buttons = (0, hm.i)(this, pm, [0, 1, 2]), this.angularSensibilityX = ((0, hm.i)(this, Em), (0, hm.i)(this, om, 1e3)), this.angularSensibilityY = ((0, hm.i)(this, Om), (0, hm.i)(this, Ym, 1e3)), this.pinchPrecision = ((0, hm.i)(this, qm), (0, hm.i)(this, jm, 12)), this.pinchDeltaPercentage = ((0, hm.i)(this, Vm), (0, hm.i)(this, Im, 0)), this.useNaturalPinchZoom = ((0, hm.i)(this, Km), (0, hm.i)(this, Qm, !1)), this.panningSensibility = ((0, hm.i)(this, nm), (0, hm.i)(this, cm, 1e3)), this.pinchInwards = ((0, hm.i)(this, zm), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(mm, Tm) {
            if (mm && Tm) {
              const fm = Tm.x - mm.x,
                hm = Tm.y - mm.y,
                Am = this.camera.movement.input.getEntry("pointer", "pan"),
                am = Am?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== am && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -fm * am, this.camera.movement.panAccumulatedPixels.y += hm * am)
            }
          }
          _computePinchZoom(Tm, fm) {
            const hm = this.camera.radius || mm.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = hm * Math.sqrt(Tm) / Math.sqrt(fm);
            else if (this.pinchDeltaPercentage) {
              const mm = .001 * (fm - Tm) * hm * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += mm
            } else {
              const mm = (fm - Tm) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += mm
            }
          }
          onTouch(mm, Tm, fm) {
            const hm = this._activeEntry ?? (this.camera.dO().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (hm)
              if ("pan" === hm.interaction) {
                const mm = hm.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== mm && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -Tm * mm, this.camera.movement.panAccumulatedPixels.y += fm * mm)
              } else if ("rotate" === hm.interaction) {
              const mm = hm.nB ?? hm.sensitivity ?? 1 / this.angularSensibilityX,
                Am = hm.JB ?? hm.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -Tm * mm, this.camera.movement.rotationAccumulatedPixels.y += -fm * Am
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(mm, Tm, fm, hm, Am, am) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(hm) - Math.sqrt(fm)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(mm, Tm, fm, hm, Am, am)
          }
          onButtonDown(mm) {
            this._pointerConditions.button = mm.button, this._pointerModifiers.ctrl = mm.ctrlKey, this._pointerModifiers.alt = mm.altKey, this._pointerModifiers.shift = mm.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(mm)
          }
          onButtonUp(mm) {
            this._activeEntry = null, super.onButtonUp(mm)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const Jm = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], xm = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: mm => "buttons" in mm,
              get: mm => mm.buttons,
              set: (mm, Tm) => {
                mm.buttons = Tm
              }
            },
            metadata: Jm
          }, pm, Em), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: mm => "angularSensibilityX" in mm,
              get: mm => mm.angularSensibilityX,
              set: (mm, Tm) => {
                mm.angularSensibilityX = Tm
              }
            },
            metadata: Jm
          }, om, Om), (0, hm.g)(null, null, am, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: mm => "angularSensibilityY" in mm,
              get: mm => mm.angularSensibilityY,
              set: (mm, Tm) => {
                mm.angularSensibilityY = Tm
              }
            },
            metadata: Jm
          }, Ym, qm), (0, hm.g)(null, null, xm, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: mm => "pinchPrecision" in mm,
              get: mm => mm.pinchPrecision,
              set: (mm, Tm) => {
                mm.pinchPrecision = Tm
              }
            },
            metadata: Jm
          }, jm, Vm), (0, hm.g)(null, null, wm, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: mm => "pinchDeltaPercentage" in mm,
              get: mm => mm.pinchDeltaPercentage,
              set: (mm, Tm) => {
                mm.pinchDeltaPercentage = Tm
              }
            },
            metadata: Jm
          }, Im, Km), (0, hm.g)(null, null, Dm, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: mm => "useNaturalPinchZoom" in mm,
              get: mm => mm.useNaturalPinchZoom,
              set: (mm, Tm) => {
                mm.useNaturalPinchZoom = Tm
              }
            },
            metadata: Jm
          }, Qm, nm), (0, hm.g)(null, null, im, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: mm => "panningSensibility" in mm,
              get: mm => mm.panningSensibility,
              set: (mm, Tm) => {
                mm.panningSensibility = Tm
              }
            },
            metadata: Jm
          }, cm, zm), Jm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Jm
          })
        })(), mm.MinimumRadiusForPinch = .001, mm
      })();
    Km.c.ArcRotateCameraPointersInput = cm;
    var zm = fm(40287);
    let Zm = (() => {
      var mm;
      let Tm, fm, am, wm, Dm, im, Rm, pm, Em, om, Om, Ym = [],
        qm = [],
        jm = [],
        Vm = [],
        Im = [],
        Km = [],
        nm = [],
        Jm = [],
        cm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [];
      return mm = class {
        constructor() {
          this.camera = (0, hm.i)(this, Ym), this.keysUp = (0, hm.i)(this, qm, [38]), this.keysDown = ((0, hm.i)(this, jm), (0, hm.i)(this, Vm, [40])), this.keysLeft = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, [37])), this.keysRight = ((0, hm.i)(this, nm), (0, hm.i)(this, Jm, [39])), this.keysReset = ((0, hm.i)(this, cm), (0, hm.i)(this, Zm, [220])), this.keysZoomIn = ((0, hm.i)(this, km), (0, hm.i)(this, bm, [187, 107])), this.keysZoomOut = ((0, hm.i)(this, Sm), (0, hm.i)(this, em, [189, 109])), this.panningSensibility = ((0, hm.i)(this, Nm), (0, hm.i)(this, Gm, 50)), this.zoomingSensibility = ((0, hm.i)(this, Xm), (0, hm.i)(this, Pm, 25)), this.angularSpeed = ((0, hm.i)(this, Hm), (0, hm.i)(this, ym, .01)), this._useAltToZoom = ((0, hm.i)(this, Cm), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new xm.l, this._panDirection = new xm.l
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(mm) {
          this._useAltToZoom = mm, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const mm = this.camera.movement.input,
            Tm = mm.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && Tm ? mm.inputMap.splice(mm.inputMap.indexOf(Tm), 1) : this._useAltToZoom && !Tm && mm.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(mm) {
          mm = Qm.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.wG(), this._engine = this._scene.dO(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((Tm => {
            const fm = Tm.event;
            if (!fm.metaKey)
              if (Tm.type === zm.d.KEYDOWN) {
                if (this._ctrlPressed = fm.ctrlKey, this._altPressed = fm.altKey, -1 !== this.keysUp.indexOf(fm.keyCode) || -1 !== this.keysDown.indexOf(fm.keyCode) || -1 !== this.keysLeft.indexOf(fm.keyCode) || -1 !== this.keysRight.indexOf(fm.keyCode) || -1 !== this.keysReset.indexOf(fm.keyCode) || -1 !== this.keysZoomIn.indexOf(fm.keyCode) || -1 !== this.keysZoomOut.indexOf(fm.keyCode)) {
                  -1 === this._keys.indexOf(fm.keyCode) && this._keys.push(fm.keyCode), fm.preventDefault && (mm || fm.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(fm.keyCode) || -1 !== this.keysDown.indexOf(fm.keyCode) || -1 !== this.keysLeft.indexOf(fm.keyCode) || -1 !== this.keysRight.indexOf(fm.keyCode) || -1 !== this.keysReset.indexOf(fm.keyCode) || -1 !== this.keysZoomIn.indexOf(fm.keyCode) || -1 !== this.keysZoomOut.indexOf(fm.keyCode)) {
              const Tm = this._keys.indexOf(fm.keyCode);
              Tm >= 0 && this._keys.splice(Tm, 1), fm.preventDefault && (mm || fm.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const mm = this.camera,
              Tm = mm.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const fm = this._rotateDirection.set(0, 0),
              hm = this._panDirection.set(0, 0);
            let Am = 0,
              am = 0;
            for (let xm = 0; xm < this._keys.length; xm++) {
              const wm = this._keys[xm];
              if (this._keyboardConditions.key = wm, -1 === this.keysReset.indexOf(wm)) {
                const mm = Tm.resolveInteraction("keyboard", this._keyboardConditions);
                if (mm)
                  if ("pan" === mm.interaction) am = Math.max(am, mm.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(wm) ? hm.x -= 1 : -1 !== this.keysRight.indexOf(wm) ? hm.x += 1 : -1 !== this.keysUp.indexOf(wm) ? hm.y += 1 : -1 !== this.keysDown.indexOf(wm) && (hm.y -= 1);
                  else if ("zoom" === mm.interaction) {
                  const fm = mm.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(wm) || -1 !== this.keysZoomIn.indexOf(wm) ? Tm.handlers.zoom(fm) : -1 === this.keysDown.indexOf(wm) && -1 === this.keysZoomOut.indexOf(wm) || Tm.handlers.zoom(-fm)
                } else "rotate" === mm.interaction && (Am = Math.max(Am, mm.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(wm) ? fm.x -= 1 : -1 !== this.keysRight.indexOf(wm) ? fm.x += 1 : -1 !== this.keysUp.indexOf(wm) ? fm.y -= 1 : -1 !== this.keysDown.indexOf(wm) && (fm.y += 1))
              } - 1 !== this.keysReset.indexOf(wm) && mm.useInputToRestoreState && mm.restoreState()
            }
            0 === fm.x && 0 === fm.y || (fm.normalize().scaleInPlace(Am), Tm.handlers.rotate(fm.x, fm.y)), 0 === hm.x && 0 === hm.y || (hm.normalize().scaleInPlace(am), Tm.handlers.pan(hm.x, hm.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const xm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], om = [(0, Am.J)()], Om = [(0, Am.J)()], (0, hm.g)(mm, null, Om, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: mm => "useAltToZoom" in mm,
            get: mm => mm.useAltToZoom
          },
          metadata: xm
        }, null, Ym), (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysUp" in mm,
            get: mm => mm.keysUp,
            set: (mm, Tm) => {
              mm.keysUp = Tm
            }
          },
          metadata: xm
        }, qm, jm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysDown" in mm,
            get: mm => mm.keysDown,
            set: (mm, Tm) => {
              mm.keysDown = Tm
            }
          },
          metadata: xm
        }, Vm, Im), (0, hm.g)(null, null, am, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysLeft" in mm,
            get: mm => mm.keysLeft,
            set: (mm, Tm) => {
              mm.keysLeft = Tm
            }
          },
          metadata: xm
        }, Km, nm), (0, hm.g)(null, null, wm, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysRight" in mm,
            get: mm => mm.keysRight,
            set: (mm, Tm) => {
              mm.keysRight = Tm
            }
          },
          metadata: xm
        }, Jm, cm), (0, hm.g)(null, null, Dm, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysReset" in mm,
            get: mm => mm.keysReset,
            set: (mm, Tm) => {
              mm.keysReset = Tm
            }
          },
          metadata: xm
        }, Zm, km), (0, hm.g)(null, null, im, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysZoomIn" in mm,
            get: mm => mm.keysZoomIn,
            set: (mm, Tm) => {
              mm.keysZoomIn = Tm
            }
          },
          metadata: xm
        }, bm, Sm), (0, hm.g)(null, null, Rm, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: mm => "keysZoomOut" in mm,
            get: mm => mm.keysZoomOut,
            set: (mm, Tm) => {
              mm.keysZoomOut = Tm
            }
          },
          metadata: xm
        }, em, Nm), (0, hm.g)(null, null, pm, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: mm => "panningSensibility" in mm,
            get: mm => mm.panningSensibility,
            set: (mm, Tm) => {
              mm.panningSensibility = Tm
            }
          },
          metadata: xm
        }, Gm, Xm), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: mm => "zoomingSensibility" in mm,
            get: mm => mm.zoomingSensibility,
            set: (mm, Tm) => {
              mm.zoomingSensibility = Tm
            }
          },
          metadata: xm
        }, Pm, Hm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: mm => "angularSpeed" in mm,
            get: mm => mm.angularSpeed,
            set: (mm, Tm) => {
              mm.angularSpeed = Tm
            }
          },
          metadata: xm
        }, ym, Cm), xm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xm
        })
      })(), mm
    })();
    Km.c.ArcRotateCameraKeyboardMoveInput = Zm;
    var km = fm(37821),
      bm = fm(40292);
    let Sm = (() => {
      var mm;
      let Tm, fm, am, Dm = [],
        im = [],
        pm = [],
        om = [],
        Om = [],
        Ym = [];
      return mm = class {
        constructor() {
          this.wheelPrecision = (0, hm.i)(this, Dm, 3), this.zoomToMouseLocation = ((0, hm.i)(this, im), (0, hm.i)(this, pm, !1)), this.wheelDeltaPercentage = ((0, hm.i)(this, om), (0, hm.i)(this, Om, 0)), this.customComputeDeltaFromMouseWheel = ((0, hm.i)(this, Ym), null), this._viewOffset = new xm.p(0, 0, 0), this._globalOffset = new xm.p(0, 0, 0), this._inertialPanning = xm.p.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(mm, Tm) {
          let fm;
          const hm = .01 * mm * this.wheelDeltaPercentage * Tm;
          return fm = mm > 0 ? hm / (1 + this.wheelDeltaPercentage) : hm * (1 + this.wheelDeltaPercentage), fm
        }
        attachControl(mm) {
          mm = Qm.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Tm => {
            if (Tm.type !== Rm.c.POINTERWHEEL) return;
            const fm = Tm.event;
            let hm;
            const Am = fm.deltaMode === bm.c.DOM_DELTA_LINE ? 40 : 1,
              am = -fm.deltaY * Am;
            if (this.customComputeDeltaFromMouseWheel) hm = this.customComputeDeltaFromMouseWheel(am, this, fm);
            else if (this.wheelDeltaPercentage) {
              if (hm = this._computeDeltaFromMouseWheelLegacyEvent(am, this.camera.radius), hm > 0) {
                const mm = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let Tm = this.camera.radius,
                  fm = mm + hm;
                for (let hm = 0; hm < 20 && !(Tm <= fm) && !(Math.abs(fm * this.camera.inertia) < .001); hm++) Tm -= fm, fm *= this.camera.inertia;
                Tm = (0, wm.Clamp)(Tm, 0, Number.MAX_VALUE), hm = this._computeDeltaFromMouseWheelLegacyEvent(am, Tm)
              }
            } else {
              const mm = this.camera.movement.input.getEntry("wheel", "zoom");
              hm = am * (mm?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            hm && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(hm)) : this.camera.movement.zoomAccumulatedPixels += hm), fm.preventDefault && (mm || fm.preventDefault())
          }, this._observer = this.camera.wG()._inputManager._addCameraPointerObserver(this._wheel, Rm.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Y5(0)
        }
        detachControl() {
          this._observer && (this.camera.wG()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const mm = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(mm.inertialAlphaOffset) + Math.abs(mm.inertialBetaOffset) + Math.abs(mm.inertialRadiusOffset)) {
            this._updateHitPlane(), mm.target.addInPlace(this._inertialPanning), mm.radius -= this._zoomToMouseRadiusOffset;
            const Tm = mm.movement.getFrameIndependentDecay(mm.inertia);
            this._inertialPanning.scaleInPlace(Tm), this._zoomToMouseRadiusOffset *= Tm, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < Em.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const mm = this.camera,
            Tm = mm.target.subtract(mm.position);
          this._hitPlane = km.d.FromPositionAndNormal(mm.target, Tm)
        }
        _getPosition() {
          const mm = this.camera,
            Tm = mm.wG(),
            fm = Tm.createPickingRay(Tm.pointerX, Tm.pointerY, xm.e.Identity(), mm, !1);
          0 === mm.targetScreenOffset.x && 0 === mm.targetScreenOffset.y || (this._viewOffset.set(mm.targetScreenOffset.x, mm.targetScreenOffset.y, 0), mm.getViewMatrix().invertToRef(mm._cameraTransformMatrix), this._globalOffset = xm.p.TransformNormal(this._viewOffset, mm._cameraTransformMatrix), fm.origin.addInPlace(this._globalOffset));
          let hm = 0;
          return this._hitPlane && (hm = fm.intersectsPlane(this._hitPlane) ?? 0), fm.origin.addInPlace(fm.direction.scaleInPlace(hm))
        }
        _zoomToMouse(mm) {
          const Tm = this.camera,
            fm = 1 - Tm.inertia,
            hm = Tm.movement.getFrameIndependentInputScale(Tm.inertia);
          if (Tm.lowerRadiusLimit) {
            const Am = Tm.lowerRadiusLimit ?? 0;
            Tm.radius - (this._zoomToMouseRadiusOffset + mm * hm) / fm < Am && (mm = ((Tm.radius - Am) * fm - this._zoomToMouseRadiusOffset) / hm)
          }
          if (Tm.upperRadiusLimit) {
            const Am = Tm.upperRadiusLimit ?? 0;
            Tm.radius - (this._zoomToMouseRadiusOffset + mm * hm) / fm > Am && (mm = ((Tm.radius - Am) * fm - this._zoomToMouseRadiusOffset) / hm)
          }
          const Am = mm / fm / Tm.radius,
            am = this._getPosition(),
            wm = xm.j.WO[6];
          am.subtractToRef(Tm.target, wm), wm.scaleInPlace(Am), wm.scaleInPlace(fm), wm.scaleInPlace(hm), this._inertialPanning.addInPlace(wm), this._zoomToMouseRadiusOffset += mm * hm
        }
        _zeroIfClose(mm) {
          Math.abs(mm.x) < Em.c && (mm.x = 0), Math.abs(mm.y) < Em.c && (mm.y = 0), Math.abs(mm.z) < Em.c && (mm.z = 0)
        }
      }, (() => {
        const xm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelPrecision" in mm,
            get: mm => mm.wheelPrecision,
            set: (mm, Tm) => {
              mm.wheelPrecision = Tm
            }
          },
          metadata: xm
        }, Dm, im), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: mm => "zoomToMouseLocation" in mm,
            get: mm => mm.zoomToMouseLocation,
            set: (mm, Tm) => {
              mm.zoomToMouseLocation = Tm
            }
          },
          metadata: xm
        }, pm, om), (0, hm.g)(null, null, am, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: mm => "wheelDeltaPercentage" in mm,
            get: mm => mm.wheelDeltaPercentage,
            set: (mm, Tm) => {
              mm.wheelDeltaPercentage = Tm
            }
          },
          metadata: xm
        }, Om, Ym), xm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xm
        })
      })(), mm
    })();
    Km.c.ArcRotateCameraMouseWheelInput = Sm;
    var em, Nm, Gm = fm(39993);
    class Xm extends Km.g {
      constructor(mm) {
        super(mm)
      }
      addMouseWheel() {
        return this.add(new Sm), this
      }
      addPointers() {
        return this.add(new cm), this
      }
      addKeyboard() {
        return this.add(new Zm), this
      }
    }(em = Xm.prototype).addVRDeviceOrientation ?? (em.addVRDeviceOrientation = (0, Gm.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Nm = Xm.prototype).addGamepad ?? (Nm.addGamepad = (0, Gm.f)("ArcRotateCameraInputsManager", "addGamepad"));
    var Pm = fm(37224),
      Hm = fm(40334),
      ym = fm(40337);
    class Cm extends Hm.e {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm), this.input = new ym.b({
          pan: (mm, Tm) => {
            this.panAccumulatedPixels.x += mm, this.panAccumulatedPixels.y += Tm
          },
          rotate: (mm, Tm) => {
            this.rotationAccumulatedPixels.x += mm, this.rotationAccumulatedPixels.y += Tm
          },
          zoom: mm => {
            this.zoomAccumulatedPixels += mm
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

    function rm(mm, Tm) {
      return isNaN(mm) ? Tm : mm
    }
    let sm = (() => {
        var mm;
        let Tm, fm, Dm, Rm, pm, Om, Ym, Km, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm, Gm, Pm, Hm, ym, sm, lm, Mm, um, Bm, Lm, tm = Im.g,
          Um = [],
          dm = [],
          gm = [],
          Wm = [],
          Fm = [],
          mT = [],
          TT = [],
          fT = [],
          hT = [],
          AT = [],
          aT = [],
          xT = [],
          wT = [],
          DT = [],
          iT = [],
          RT = [],
          pT = [],
          ET = [],
          oT = [],
          OT = [],
          YT = [],
          qT = [],
          jT = [],
          VT = [],
          IT = [],
          KT = [],
          QT = [],
          nT = [],
          JT = [],
          cT = [],
          zT = [],
          ZT = [],
          kT = [],
          bT = [],
          ST = [],
          eT = [],
          NT = [],
          GT = [],
          XT = [],
          PT = [],
          HT = [],
          yT = [],
          CT = [],
          rT = [],
          sT = [],
          lT = [],
          MT = [];
        return mm = class extends tm {
          get target() {
            return this.vW
          }
          set target(mm) {
            this.setTarget(mm)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(mm) {
            mm && this.setTarget(mm)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(mm) {
            this.setPosition(mm)
          }
          set upVector(mm) {
            this._upToYMatrix || (this._yToUpMatrix = new xm.e, this._upToYMatrix = new xm.e, this._upVector = xm.p.Zero()), mm.normalize(), this._upVector.ZZ(mm), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            xm.e.RotationAlignToRef(xm.p.UpReadOnly, this._upVector, this._yToUpMatrix), xm.e.RotationAlignToRef(this._upVector, xm.p.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const mm = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(mm) < this._rotationEpsilon ? 0 : mm
          }
          set inertialAlphaOffset(mm) {
            this._inertialAlphaOffset = mm, 0 === mm && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const mm = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(mm) < this._rotationEpsilon ? 0 : mm
          }
          set inertialBetaOffset(mm) {
            this._inertialBetaOffset = mm, 0 === mm && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const mm = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(mm) < this._rotationEpsilon ? 0 : mm
          }
          set inertialRadiusOffset(mm) {
            this._inertialRadiusOffset = mm, 0 === mm && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(mm) {
            this._panningInertia = mm, this.movement && (this.movement.panInertia = mm)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(mm) {
            this._inertia = mm, this.movement && (this.movement.rotationInertia = mm, this.movement.zoomInertia = mm)
          }
          get angularSensibilityX() {
            const mm = this.inputs.attached.pointers;
            return mm ? mm.angularSensibilityX : 0
          }
          set angularSensibilityX(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.angularSensibilityX = mm)
          }
          get angularSensibilityY() {
            const mm = this.inputs.attached.pointers;
            return mm ? mm.angularSensibilityY : 0
          }
          set angularSensibilityY(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.angularSensibilityY = mm)
          }
          get pinchPrecision() {
            const mm = this.inputs.attached.pointers;
            return mm ? mm.pinchPrecision : 0
          }
          set pinchPrecision(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.pinchPrecision = mm)
          }
          get pinchDeltaPercentage() {
            const mm = this.inputs.attached.pointers;
            return mm ? mm.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.pinchDeltaPercentage = mm)
          }
          get useNaturalPinchZoom() {
            const mm = this.inputs.attached.pointers;
            return !!mm && mm.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.useNaturalPinchZoom = mm)
          }
          get panningSensibility() {
            const mm = this.inputs.attached.pointers;
            return mm ? mm.panningSensibility : 0
          }
          set panningSensibility(mm) {
            const Tm = this.inputs.attached.pointers;
            Tm && (Tm.panningSensibility = mm)
          }
          get keysUp() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysUp : []
          }
          set keysUp(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysUp = mm)
          }
          get keysDown() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysDown : []
          }
          set keysDown(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysDown = mm)
          }
          get keysLeft() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysLeft : []
          }
          set keysLeft(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysLeft = mm)
          }
          get keysRight() {
            const mm = this.inputs.attached.keyboard;
            return mm ? mm.keysRight : []
          }
          set keysRight(mm) {
            const Tm = this.inputs.attached.keyboard;
            Tm && (Tm.keysRight = mm)
          }
          get wheelPrecision() {
            const mm = this.inputs.attached.mousewheel;
            return mm ? mm.wheelPrecision : 0
          }
          set wheelPrecision(mm) {
            const Tm = this.inputs.attached.mousewheel;
            Tm && (Tm.wheelPrecision = mm)
          }
          get zoomToMouseLocation() {
            const mm = this.inputs.attached.mousewheel;
            return !!mm && mm.zoomToMouseLocation
          }
          set zoomToMouseLocation(mm) {
            const Tm = this.inputs.attached.mousewheel;
            Tm && (Tm.zoomToMouseLocation = mm)
          }
          get wheelDeltaPercentage() {
            const mm = this.inputs.attached.mousewheel;
            return mm ? mm.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(mm) {
            const Tm = this.inputs.attached.mousewheel;
            Tm && (Tm.wheelDeltaPercentage = mm)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(mm) {
            this._useCtrlForPanningInternal = mm;
            const Tm = this.movement.input,
              fm = Tm.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !mm && fm ? Tm.inputMap.splice(Tm.inputMap.indexOf(fm), 1) : mm && !fm && Tm.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const hm = Tm.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !mm && hm ? Tm.inputMap.splice(Tm.inputMap.indexOf(hm), 1) : mm && !hm && Tm.addEntry({
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
          set _panningMouseButton(mm) {
            this._panningMouseButtonInternal = mm;
            const Tm = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            Tm && (Tm.button = mm)
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
          set useBouncingBehavior(mm) {
            mm !== this.useBouncingBehavior && (mm ? (this._bouncingBehavior = new qm, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(mm) {
            mm !== this.useFramingBehavior && (mm ? (this._framingBehavior = new jm, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(mm) {
            mm !== this.useAutoRotationBehavior && (mm ? (this._autoRotationBehavior = new om, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(mm, Tm, fm, Am, wm, Dm) {
            var im;
            let Rm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(mm, xm.p.Zero(), Dm, Rm), im = this, this.alpha = ((0, hm.i)(this, Um), (0, hm.i)(this, dm, void 0)), this.beta = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, void 0)), this.radius = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, void 0)), this.overrideCloneAlphaBetaRadius = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, void 0)), this.vW = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, void 0)), this._targetHost = ((0, hm.i)(this, aT), (0, hm.i)(this, xT, void 0)), this._upToYMatrix = (0, hm.i)(this, wT), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, hm.i)(this, DT, null), this.upperAlphaLimit = ((0, hm.i)(this, iT), (0, hm.i)(this, RT, null)), this.lowerBetaLimit = ((0, hm.i)(this, pT), (0, hm.i)(this, ET, .01)), this.upperBetaLimit = ((0, hm.i)(this, oT), (0, hm.i)(this, OT, Math.PI - .01)), this.lowerRadiusLimit = ((0, hm.i)(this, YT), (0, hm.i)(this, qT, null)), this.upperRadiusLimit = ((0, hm.i)(this, jT), (0, hm.i)(this, VT, null)), this.lowerTargetYLimit = ((0, hm.i)(this, IT), (0, hm.i)(this, KT, -1 / 0)), this.inertialPanningX = ((0, hm.i)(this, QT), (0, hm.i)(this, nT, 0)), this.inertialPanningY = ((0, hm.i)(this, JT), (0, hm.i)(this, cT, 0)), this.pinchToPanMaxDistance = ((0, hm.i)(this, zT), (0, hm.i)(this, ZT, 20)), this.panningDistanceLimit = ((0, hm.i)(this, kT), (0, hm.i)(this, bT, null)), this.panningOriginTarget = ((0, hm.i)(this, ST), (0, hm.i)(this, eT, xm.p.Zero())), this._panningInertia = ((0, hm.i)(this, NT), .9), this._inertia = .9, this.zoomOnFactor = (0, hm.i)(this, GT, 1), this.targetScreenOffset = ((0, hm.i)(this, XT), (0, hm.i)(this, PT, xm.l.Zero())), this.allowUpsideDown = ((0, hm.i)(this, HT), (0, hm.i)(this, yT, !0)), this.useInputToRestoreState = ((0, hm.i)(this, CT), (0, hm.i)(this, rT, !0)), this.restoreStateInterpolationFactor = ((0, hm.i)(this, sT), (0, hm.i)(this, lT, 0)), this._currentInterpolationFactor = ((0, hm.i)(this, MT), 0), this._viewMatrix = new xm.e, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new xm.p(1, 1, 0), this._transformedDirection = new xm.p, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new am.c, this.checkCollisions = !1, this.collisionRadius = new xm.p(.5, .5, .5), this._previousPosition = xm.p.Zero(), this._collisionVelocity = xm.p.Zero(), this._newPosition = xm.p.Zero(), this._computationVector = xm.p.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new xm.p(NaN, NaN, NaN), this._goalTargetScreenOffset = new xm.l(NaN, NaN), this._onCollisionPositionChange = function(mm, Tm) {
              let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              fm ? (im.setPosition(Tm), im.cE && im.cE(fm)) : im._previousPosition.ZZ(im._position);
              const hm = Math.cos(im.alpha),
                Am = Math.sin(im.alpha),
                am = Math.cos(im.beta);
              let xm = Math.sin(im.beta);
              0 === xm && (xm = 1e-4);
              const wm = im._getTargetPosition();
              im._computationVector.Z8(im.radius * hm * xm, im.radius * am, im.radius * Am * xm), wm.addToRef(im._computationVector, im._newPosition), im._position.ZZ(im._newPosition);
              let Dm = im.upVector;
              im.allowUpsideDown && im.beta < 0 && (Dm = Dm.clone(), Dm = Dm.GA()), im._computeViewMatrix(im._position, wm, Dm), im._viewMatrix.addAtIndex(12, im.targetScreenOffset.x), im._viewMatrix.addAtIndex(13, im.targetScreenOffset.y), im._collisionTriggered = !1
            }, this.vW = xm.p.Zero(), wm && this.setTarget(wm), this.alpha = Tm, this.beta = fm, this.radius = Am, this.getViewMatrix(), this.inputs = new Xm(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Cm(this.wG(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.vW = new xm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = xm.l.Zero()
          }
          _updateCache(mm) {
            mm || super._updateCache(), this._cache.vW.ZZ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.ZZ(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const mm = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? mm.addToRef(this._targetBoundingCenter, this.vW) : this.vW.ZZ(mm)
            }
            const mm = this._getLockedTargetPosition();
            return mm || this.vW
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > Em.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              am = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != am ? this._currentInterpolationFactor = am : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = rm(mm, this._goalAlpha), this._goalBeta = rm(Tm, this._goalBeta), this._goalRadius = rm(fm, this._goalRadius), this._goalTarget.set(rm(hm.x, this._goalTarget.x), rm(hm.y, this._goalTarget.y), rm(hm.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(rm(Am.x, this._goalTargetScreenOffset.x), rm(Am.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, wm.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, wm.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, wm.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, wm.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.vW.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(mm, Tm) {
            let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const Am = arguments;
            Tm = Qm.h.BackCompatCameraNoPreventDefault(Am), this._useCtrlForPanning = fm, this._panningMouseButton = hm, "boolean" === typeof Am[0] && (Am.length > 1 && (this._useCtrlForPanning = Am[1]), Am.length > 2 && (this._panningMouseButton = Am[2])), this.inputs.attachElement(Tm), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(mm, Tm, fm) {
            const hm = this.invertRotation ? -1 : 1;
            let Am = mm * this._calculateHandednessMultiplier();
            this.beta < 0 && (Am *= -1), this.alpha += Am * hm, this.beta += Tm * hm, this.radius -= fm
          }
          _applyPanDelta(mm, Tm) {
            const fm = xm.j.WO[0].Z8(mm, Tm, Tm);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), fm.multiplyInPlace(this.panningAxis), xm.p.TransformNormalToRef(fm, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const mm = this.upVector,
                Tm = xm.p.CrossToRef(this._transformedDirection, mm, this._transformedDirection);
              xm.p.CrossToRef(mm, Tm, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.vW);
                xm.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.vW.ZZ(this._transformedDirection)
              } else {
                if (this.parent) {
                  const mm = xm.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(mm), mm.transposeToRef(mm), xm.p.TransformCoordinatesToRef(this._transformedDirection, mm, this._transformedDirection)
                }
                this.vW.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let mm = !1;
            this.movement.computeCurrentFrameDeltas();
            const Tm = this.movement.rotationDeltaCurrentFrame,
              fm = this.movement.zoomDeltaCurrentFrame,
              hm = this.movement.panDeltaCurrentFrame;
            if (0 === Tm.x && 0 === Tm.y && 0 === fm && 0 === hm.x && 0 === hm.y || (mm = !0, 0 === Tm.x && 0 === Tm.y && 0 === fm || this._applyRotationAndZoomDelta(Tm.x, Tm.y, fm), 0 === hm.x && 0 === hm.y || this._applyPanDelta(hm.x, hm.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), mm = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const Tm = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < Tm && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < Tm && (this.inertialPanningY = 0), mm = !0
            }
            if (mm) this.stopInterpolation();
            else if (this._isInterpolating) {
              let mm = !1;
              const Tm = this._scene.dO().getDeltaTime() / 1e3,
                fm = 1 - Math.pow(2, -Tm / this._currentInterpolationFactor),
                hm = rm(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const Tm = xm.j.WO[0].set(rm(this._goalTarget.x, this.vW.x), rm(this._goalTarget.y, this.vW.y), rm(this._goalTarget.z, this.vW.z));
                xm.p.LerpToRef(this.target, Tm, fm, this.vW), 10 * xm.p.Distance(this.target, Tm) / hm < Em.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.ZZ(Tm), this.setTarget(this.target, !1, !0, !0)) : mm = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const Tm = xm.h.RotationAlphaBetaGammaToRef(rm(this._goalAlpha, this.alpha), rm(this._goalBeta, this.beta), 0, xm.j.Quaternion[0]),
                  hm = xm.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, xm.j.Quaternion[1]),
                  Am = xm.h.SlerpToRef(hm, Tm, fm, xm.j.Quaternion[2]);
                Am.normalize();
                const am = Am.toAlphaBetaGammaToRef(xm.j.WO[0]);
                if (this.alpha = am.x, this.beta = am.y, Am.isApprox(Tm, Em.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const mm = Tm.toAlphaBetaGammaToRef(xm.j.WO[0]);
                  this.alpha = mm.x, this.beta = mm.y
                } else mm = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (hm - this.radius) * fm, Math.abs(hm / this.radius - 1) < Em.c ? (this._goalRadius = NaN, this.radius = hm) : mm = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const Tm = xm.j.Vector2[0].set(rm(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), rm(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                xm.l.LerpToRef(this.targetScreenOffset, Tm, fm, this.targetScreenOffset), xm.l.Distance(this.targetScreenOffset, Tm) < Em.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.ZZ(Tm)) : mm = !0
              }
              this._isInterpolating = mm
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xm.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const mm = this.alpha;
            var Tm, fm;
            this.alpha = function(mm) {
              let Tm = Math.PI / 2;
              return 0 === mm.x && 0 === mm.z || (Tm = Math.acos(mm.x / Math.sqrt(Math.pow(mm.x, 2) + Math.pow(mm.z, 2)))), mm.z < 0 && (Tm = 2 * Math.PI - Tm), Tm
            }(this._computationVector), this.beta = (Tm = this._computationVector.y, fm = this.radius, Math.acos(Tm / fm));
            const hm = Math.round((mm - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * hm * Math.PI, this._checkLimits()
          }
          setPosition(mm) {
            this._position.equals(mm) || (this._position.ZZ(mm), this.rebuildAnglesAndRadius())
          }
          setTarget(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (hm = this.overrideCloneAlphaBetaRadius ?? hm, mm.computeWorldMatrix) Tm && mm.DH ? this._targetBoundingCenter = mm.DH().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, mm.computeWorldMatrix(), this._targetHost = mm, this.vW = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const Tm = mm,
                hm = this._getTargetPosition();
              if (hm && !fm && hm.equals(Tm)) return;
              this._targetHost = null, this.vW = Tm, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            hm || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const mm = Math.cos(this.alpha),
              Tm = Math.sin(this.alpha),
              fm = Math.cos(this.beta);
            let hm = Math.sin(this.beta);
            0 === hm && (hm = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const Am = this._getTargetPosition();
            if (this._computationVector.Z8(this.radius * mm * hm, this.radius * fm, this.radius * Tm * hm), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || xm.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), Am.addToRef(this._computationVector, this._newPosition), this.wG().collisionsEnabled && this.checkCollisions) {
              const mm = this.wG().collisionCoordinator;
              this._collider || (this._collider = mm.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, mm.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.ZZ(this._newPosition);
              let mm = this.upVector;
              this.allowUpsideDown && hm < 0 && (mm = mm.GA()), this._computeViewMatrix(this._position, Am, mm), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.ZZ(Am), this._viewMatrix
          }
          zoomOn(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            mm = mm || this.wG().meshes;
            const fm = im.d.MinMax(mm);
            let hm = this._calculateLowerRadiusFromModelBoundingSphere(fm.min, fm.max);
            if (hm = Math.max(Math.min(hm, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = hm * this.zoomOnFactor, this.mode === Vm.b.ORTHOGRAPHIC_CAMERA) {
              const mm = this.wG().dO().getAspectRatio(this),
                Tm = hm * this.zoomOnFactor / 2;
              this.orthoLeft = -Tm * mm, this.orthoRight = Tm * mm, this.orthoBottom = -Tm, this.orthoTop = Tm
            }
            this.focusOn({
              min: fm.min,
              max: fm.max,
              distance: hm
            }, Tm)
          }
          focusOn(mm) {
            let Tm, fm, hm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === mm.min) {
              const hm = mm || this.wG().meshes;
              Tm = im.d.MinMax(hm), fm = xm.p.Distance(Tm.min, Tm.max)
            } else {
              Tm = mm, fm = mm.distance
            }
            this.vW = im.d.Center(Tm), hm || (this.maxZ = 2 * fm)
          }
          createRigCamera(Tm, fm) {
            let hm = 0;
            switch (this.cameraRigMode) {
              case Vm.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Vm.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Vm.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Vm.b.RIG_MODE_VR:
                hm = this._cameraRigParams.stereoHalfAngle * (0 === fm ? 1 : -1);
                break;
              case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                hm = this._cameraRigParams.stereoHalfAngle * (0 === fm ? -1 : 1)
            }
            const Am = new mm(Tm, this.alpha + hm, this.beta, this.radius, this.vW, this.wG());
            return Am._cameraRigParams = {}, Am.isRigCamera = !0, Am.rigParent = this, Am.upVector = this.upVector, Am.mode = this.mode, Am.orthoLeft = this.orthoLeft, Am.orthoRight = this.orthoRight, Am.orthoBottom = this.orthoBottom, Am.orthoTop = this.orthoTop, Am
          }
          _updateRigCameras() {
            const mm = this._rigCameras[0],
              Tm = this._rigCameras[1];
            switch (mm.beta = Tm.beta = this.beta, this.cameraRigMode) {
              case Vm.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Vm.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Vm.b.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case Vm.b.RIG_MODE_VR:
                mm.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, Tm.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case Vm.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                mm.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, Tm.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const hm = xm.p.Distance(mm, Tm),
              Am = this.wG().dO().getAspectRatio(this),
              am = Math.tan(this.fov / 2),
              wm = am * Am,
              Dm = .5 * hm * fm,
              im = Dm * Math.sqrt(1 + 1 / (wm * wm)),
              Rm = Dm * Math.sqrt(1 + 1 / (am * am));
            return Math.max(im, Rm)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(tm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], Dm = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.F)("target")], Om = [(0, Am.v)("targetHost")], Ym = [(0, Am.J)()], Km = [(0, Am.J)()], nm = [(0, Am.J)()], Jm = [(0, Am.J)()], cm = [(0, Am.J)()], zm = [(0, Am.J)()], Zm = [(0, Am.J)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], em = [(0, Am.J)()], Nm = [(0, Am.J)()], Gm = [(0, Am.J)()], Pm = [(0, Am.J)()], Hm = [(0, Am.F)()], ym = [(0, Am.J)()], sm = [(0, Am.J)()], lm = [(0, Am.J)()], Mm = [(0, Am.B)()], um = [(0, Am.J)()], Bm = [(0, Am.J)()], Lm = [(0, Am.J)()], (0, hm.g)(mm, null, Ym, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "inertialAlphaOffset" in mm,
              get: mm => mm.inertialAlphaOffset
            },
            metadata: am
          }, null, Um), (0, hm.g)(mm, null, Km, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "inertialBetaOffset" in mm,
              get: mm => mm.inertialBetaOffset
            },
            metadata: am
          }, null, Um), (0, hm.g)(mm, null, nm, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "inertialRadiusOffset" in mm,
              get: mm => mm.inertialRadiusOffset
            },
            metadata: am
          }, null, Um), (0, hm.g)(mm, null, ym, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: mm => "panningInertia" in mm,
              get: mm => mm.panningInertia
            },
            metadata: am
          }, null, Um), (0, hm.g)(mm, null, sm, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: mm => "zoomToMouseLocation" in mm,
              get: mm => mm.zoomToMouseLocation
            },
            metadata: am
          }, null, Um), (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "alpha" in mm,
              get: mm => mm.alpha,
              set: (mm, Tm) => {
                mm.alpha = Tm
              }
            },
            metadata: am
          }, dm, gm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: mm => "beta" in mm,
              get: mm => mm.beta,
              set: (mm, Tm) => {
                mm.beta = Tm
              }
            },
            metadata: am
          }, Wm, Fm), (0, hm.g)(null, null, Dm, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: mm => "radius" in mm,
              get: mm => mm.radius,
              set: (mm, Tm) => {
                mm.radius = Tm
              }
            },
            metadata: am
          }, mT, TT), (0, hm.g)(null, null, Rm, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: mm => "overrideCloneAlphaBetaRadius" in mm,
              get: mm => mm.overrideCloneAlphaBetaRadius,
              set: (mm, Tm) => {
                mm.overrideCloneAlphaBetaRadius = Tm
              }
            },
            metadata: am
          }, fT, hT), (0, hm.g)(null, null, pm, {
            kind: "field",
            name: "vW",
            static: !1,
            private: !1,
            access: {
              has: mm => "vW" in mm,
              get: mm => mm.vW,
              set: (mm, Tm) => {
                mm.vW = Tm
              }
            },
            metadata: am
          }, AT, aT), (0, hm.g)(null, null, Om, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: mm => "_targetHost" in mm,
              get: mm => mm._targetHost,
              set: (mm, Tm) => {
                mm._targetHost = Tm
              }
            },
            metadata: am
          }, xT, wT), (0, hm.g)(null, null, Jm, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "lowerAlphaLimit" in mm,
              get: mm => mm.lowerAlphaLimit,
              set: (mm, Tm) => {
                mm.lowerAlphaLimit = Tm
              }
            },
            metadata: am
          }, DT, iT), (0, hm.g)(null, null, cm, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "upperAlphaLimit" in mm,
              get: mm => mm.upperAlphaLimit,
              set: (mm, Tm) => {
                mm.upperAlphaLimit = Tm
              }
            },
            metadata: am
          }, RT, pT), (0, hm.g)(null, null, zm, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "lowerBetaLimit" in mm,
              get: mm => mm.lowerBetaLimit,
              set: (mm, Tm) => {
                mm.lowerBetaLimit = Tm
              }
            },
            metadata: am
          }, ET, oT), (0, hm.g)(null, null, Zm, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "upperBetaLimit" in mm,
              get: mm => mm.upperBetaLimit,
              set: (mm, Tm) => {
                mm.upperBetaLimit = Tm
              }
            },
            metadata: am
          }, OT, YT), (0, hm.g)(null, null, km, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "lowerRadiusLimit" in mm,
              get: mm => mm.lowerRadiusLimit,
              set: (mm, Tm) => {
                mm.lowerRadiusLimit = Tm
              }
            },
            metadata: am
          }, qT, jT), (0, hm.g)(null, null, bm, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "upperRadiusLimit" in mm,
              get: mm => mm.upperRadiusLimit,
              set: (mm, Tm) => {
                mm.upperRadiusLimit = Tm
              }
            },
            metadata: am
          }, VT, IT), (0, hm.g)(null, null, Sm, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "lowerTargetYLimit" in mm,
              get: mm => mm.lowerTargetYLimit,
              set: (mm, Tm) => {
                mm.lowerTargetYLimit = Tm
              }
            },
            metadata: am
          }, KT, QT), (0, hm.g)(null, null, em, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: mm => "inertialPanningX" in mm,
              get: mm => mm.inertialPanningX,
              set: (mm, Tm) => {
                mm.inertialPanningX = Tm
              }
            },
            metadata: am
          }, nT, JT), (0, hm.g)(null, null, Nm, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: mm => "inertialPanningY" in mm,
              get: mm => mm.inertialPanningY,
              set: (mm, Tm) => {
                mm.inertialPanningY = Tm
              }
            },
            metadata: am
          }, cT, zT), (0, hm.g)(null, null, Gm, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: mm => "pinchToPanMaxDistance" in mm,
              get: mm => mm.pinchToPanMaxDistance,
              set: (mm, Tm) => {
                mm.pinchToPanMaxDistance = Tm
              }
            },
            metadata: am
          }, ZT, kT), (0, hm.g)(null, null, Pm, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: mm => "panningDistanceLimit" in mm,
              get: mm => mm.panningDistanceLimit,
              set: (mm, Tm) => {
                mm.panningDistanceLimit = Tm
              }
            },
            metadata: am
          }, bT, ST), (0, hm.g)(null, null, Hm, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: mm => "panningOriginTarget" in mm,
              get: mm => mm.panningOriginTarget,
              set: (mm, Tm) => {
                mm.panningOriginTarget = Tm
              }
            },
            metadata: am
          }, eT, NT), (0, hm.g)(null, null, lm, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: mm => "zoomOnFactor" in mm,
              get: mm => mm.zoomOnFactor,
              set: (mm, Tm) => {
                mm.zoomOnFactor = Tm
              }
            },
            metadata: am
          }, GT, XT), (0, hm.g)(null, null, Mm, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: mm => "targetScreenOffset" in mm,
              get: mm => mm.targetScreenOffset,
              set: (mm, Tm) => {
                mm.targetScreenOffset = Tm
              }
            },
            metadata: am
          }, PT, HT), (0, hm.g)(null, null, um, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: mm => "allowUpsideDown" in mm,
              get: mm => mm.allowUpsideDown,
              set: (mm, Tm) => {
                mm.allowUpsideDown = Tm
              }
            },
            metadata: am
          }, yT, CT), (0, hm.g)(null, null, Bm, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: mm => "useInputToRestoreState" in mm,
              get: mm => mm.useInputToRestoreState,
              set: (mm, Tm) => {
                mm.useInputToRestoreState = Tm
              }
            },
            metadata: am
          }, rT, sT), (0, hm.g)(null, null, Lm, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: mm => "restoreStateInterpolationFactor" in mm,
              get: mm => mm.restoreStateInterpolationFactor,
              set: (mm, Tm) => {
                mm.restoreStateInterpolationFactor = Tm
              }
            },
            metadata: am
          }, lT, MT), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      lm = !1;
    lm || (lm = !0, Dm.c.AddNodeConstructor("ArcRotateCamera", ((mm, Tm) => () => new sm(mm, 0, 0, 1, xm.p.Zero(), Tm))), (0, Pm.d)("BABYLON.ArcRotateCamera", sm))
  },
  40344: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.e
    });
    var hm = fm(40347);
    (0, hm.g)()
  },
  40347: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      g: () => Em
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(37336),
      wm = fm(40355),
      Dm = fm(40326),
      im = fm(37224);
    let Rm = (() => {
        var mm;
        let Tm, fm, Dm = wm.e,
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        return mm = class extends Dm {
          constructor(mm, Tm, fm, Am) {
            super(mm, fm, Am), this.groundColor = (0, hm.i)(this, im, new xm.b(0, 0, 0)), this.direction = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, void 0)), (0, hm.i)(this, Em), this.direction = Tm || am.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(mm) {
            return this.direction = am.p.Normalize(mm.subtract(am.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", fm.x, fm.y, fm.z, 0, Tm), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Tm), this
          }
          transferToNodeMaterialEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return mm.setFloat3(Tm, fm.x, fm.y, fm.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = am.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return wm.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(mm, Tm) {
            mm["HEMILIGHT" + Tm] = !0
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.k)()], fm = [(0, Am.F)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "groundColor" in mm,
              get: mm => mm.groundColor,
              set: (mm, Tm) => {
                mm.groundColor = Tm
              }
            },
            metadata: am
          }, im, Rm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: mm => "direction" in mm,
              get: mm => mm.direction,
              set: (mm, Tm) => {
                mm.direction = Tm
              }
            },
            metadata: am
          }, pm, Em), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      pm = !1;

    function Em() {
      pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_3", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.HemisphericLight", Rm))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
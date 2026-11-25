export const id = 264;
export const ids = [264];
export const modules = {
  41111: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => eB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37153),
      GB = ZB(37120),
      vB = ZB(37158),
      kB = ZB(40272),
      cB = ZB(40448),
      nB = ZB(40224),
      hB = ZB(39959),
      zB = ZB(37129);
    class FB {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(BB) {
        this._idleRotationSpeed = BB
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(BB) {
        this._idleRotationWaitTime = BB
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(BB) {
        this._idleRotationSpinupTime = BB
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
      attach(BB) {
        this._attachedCamera = BB;
        const IB = this._attachedCamera.JR();
        this._onPrePointerObservableObserver = IB.onPrePointerObservable.add((BB => {
          BB.type !== nB.d.POINTERDOWN ? BB.type === nB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const BB = hB.c.Now;
          let IB = 0;
          null != this._lastFrameTime && (IB = BB - this._lastFrameTime), this._lastFrameTime = BB, this._applyUserInteraction();
          const ZB = BB - this._lastInteractionTime - this._idleRotationWaitTime,
            TB = Math.max(Math.min(ZB / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * TB, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (IB / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.JR();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(BB) {
        this._lastInteractionTime = BB ?? hB.c.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < zB.d
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let BB = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = hB.c.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    ZB(41115);
    class NB {
      constructor() {
        this._easingMode = NB.EASINGMODE_EASEIN
      }
      setEasingMode(BB) {
        const IB = Math.min(Math.max(BB, 0), 2);
        this._easingMode = IB
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(BB) {
        throw new Error("You must implement this method")
      }
      ease(BB) {
        switch (this._easingMode) {
          case NB.EASINGMODE_EASEIN:
            return this.easeInCore(BB);
          case NB.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - BB)
        }
        return BB >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - BB))) + .5 : .5 * this.easeInCore(2 * BB)
      }
    }
    NB.EASINGMODE_EASEIN = 0, NB.EASINGMODE_EASEOUT = 1, NB.EASINGMODE_EASEINOUT = 2;
    var gB = ZB(41124);
    class qB {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(BB) {
        if (this._autoTransitionRange === BB) return;
        this._autoTransitionRange = BB;
        const IB = this._attachedCamera;
        IB && (BB ? this._onMeshTargetChangedObserver = IB.onMeshTargetChangedObservable.add((BB => {
          if (BB && (BB.computeWorldMatrix(!0), BB.qm)) {
            const IB = BB.qm().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * IB, this.upperRadiusTransitionRange = .05 * IB
          }
        })) : this._onMeshTargetChangedObserver && IB.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB, this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(BB) {
        return !!this._attachedCamera && (this._attachedCamera.radius === BB && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(BB) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (qB.EasingFunction.setEasingMode(qB.EasingMode), this._radiusBounceTransition = gB.b.CreateAnimation("radius", gB.b.ANIMATIONTYPE_FLOAT, 60, qB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const IB = gB.b.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.JR(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        IB && this._animatables.push(IB)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    qB.EasingFunction = new class extends NB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = BB
      }
      easeInCore(BB) {
        const IB = Math.max(0, this.amplitude);
        return Math.pow(BB, 3) - BB * IB * Math.sin(3.141592653589793 * BB)
      }
    }(.3), qB.EasingMode = NB.EASINGMODE_EASEOUT;
    class yB {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new oB.b, this._mode = yB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(BB) {
        this._mode = BB
      }
      get mode() {
        return this._mode
      }
      set radiusScale(BB) {
        this._radiusScale = BB
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(BB) {
        this._positionScale = BB
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(BB) {
        this._defaultElevation = BB
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(BB) {
        this._elevationReturnTime = BB
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(BB) {
        this._elevationReturnWaitTime = BB
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(BB) {
        this._zoomStopsAnimation = BB
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(BB) {
        this._framingTime = BB
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(BB) {
        this._attachedCamera = BB;
        const IB = this._attachedCamera.JR();
        yB.EasingFunction.setEasingMode(yB.EasingMode), this._onPrePointerObservableObserver = IB.onPrePointerObservable.add((BB => {
          BB.type !== nB.d.POINTERDOWN ? BB.type === nB.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = BB.onMeshTargetChangedObservable.add((BB => {
          BB && BB.qm && this.zoomOnMesh(BB, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = BB.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const BB = this._attachedCamera.JR();
        this._onPrePointerObservableObserver && BB.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const TB = BB.qm().boundingBox;
        this.zoomOnBoundingInfo(TB.minimumWorld, TB.maximumWorld, IB, ZB)
      }
      zoomOnMeshHierarchy(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        BB.computeWorldMatrix(!0);
        const TB = BB.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(TB.min, TB.max, IB, ZB)
      }
      zoomOnMeshesHierarchy(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const TB = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          JB = new GB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let oB = 0; oB < BB.length; oB++) {
          const IB = BB[oB].getHierarchyBoundingVectors(!0);
          GB.s.CheckExtends(IB.min, TB, JB), GB.s.CheckExtends(IB.max, TB, JB)
        }
        this.zoomOnBoundingInfo(TB, JB, IB, ZB)
      }
      zoomOnBoundingInfo(BB, IB) {
        let ZB, TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const oB = BB.y,
          vB = oB + (IB.y - oB) * this._positionScale,
          kB = IB.subtract(BB).scale(.5);
        if (!isFinite(vB)) return !1;
        if (TB) ZB = new GB.s(0, vB, 0);
        else {
          const IB = BB.add(kB);
          ZB = new GB.s(IB.x, vB, IB.z)
        }
        this._vectorTransition || (this._vectorTransition = gB.b.CreateAnimation("target", gB.b.ANIMATIONTYPE_VECTOR3, 60, yB.EasingFunction)), this._betaIsAnimating = !0;
        let cB = gB.b.TransitionTo("target", ZB, this._attachedCamera, this._attachedCamera.JR(), 60, this._vectorTransition, this._framingTime);
        cB && this._animatables.push(cB);
        let nB = 0;
        if (this._mode === yB.FitFrustumSidesMode) {
          const ZB = this._calculateLowerRadiusFromModelBoundingSphere(BB, IB);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = kB.length() + this._attachedCamera.minZ), nB = ZB
        } else this._mode === yB.IgnoreBoundsSizeMode && (nB = this._calculateLowerRadiusFromModelBoundingSphere(BB, IB), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const ZB = IB.subtract(BB).length();
          this._attachedCamera.panningSensibility = 5e3 / ZB, this._attachedCamera.wheelPrecision = 100 / nB
        }
        return this._radiusTransition || (this._radiusTransition = gB.b.CreateAnimation("radius", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction)), cB = gB.b.TransitionTo("radius", nB, this._attachedCamera, this._attachedCamera.JR(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), JB && JB(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), cB && this._animatables.push(cB), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(BB, IB) {
        const ZB = this._attachedCamera;
        if (!ZB) return 0;
        let TB = ZB._calculateLowerRadiusFromModelBoundingSphere(BB, IB, this._radiusScale);
        return ZB.lowerRadiusLimit && this._mode === yB.IgnoreBoundsSizeMode && (TB = TB < ZB.lowerRadiusLimit ? ZB.lowerRadiusLimit : TB), ZB.upperRadiusLimit && (TB = TB > ZB.upperRadiusLimit ? ZB.upperRadiusLimit : TB), TB
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const BB = hB.c.Now - this._lastInteractionTime,
          IB = .5 * Math.PI - this._defaultElevation,
          ZB = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZB && BB >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = gB.b.CreateAnimation("beta", gB.b.ANIMATIONTYPE_FLOAT, 60, yB.EasingFunction));
          const BB = gB.b.TransitionTo("beta", IB, this._attachedCamera, this._attachedCamera.JR(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          BB && this._animatables.push(BB)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = hB.c.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    yB.EasingFunction = new class extends NB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = BB
      }
      easeInCore(BB) {
        return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, yB.EasingMode = NB.EASINGMODE_EASEINOUT, yB.IgnoreBoundsSizeMode = 0, yB.FitFrustumSidesMode = 1;
    var UB = ZB(40269),
      WB = ZB(40261),
      dB = ZB(40291),
      CB = ZB(40152);
    let QB = (() => {
        var BB;
        let IB, ZB = [],
          oB = [];
        return BB = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, TB.l)(this, ZB, [0, 1, 2]), this._pointerInput = (0, TB.l)(this, oB)
          }
          attachControl(BB) {
            BB = CB.j.BackCompatCameraNoPreventDefault(arguments);
            const IB = this.camera.PN(),
              ZB = IB.getInputElement();
            let TB = 0,
              JB = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = oB => {
              const GB = oB.event,
                vB = "touch" === GB.pointerType;
              if (oB.type !== nB.d.POINTERMOVE && -1 === this.buttons.indexOf(GB.button)) return;
              const kB = GB.target;
              if (this._altKey = GB.altKey, this._ctrlKey = GB.ctrlKey, this._metaKey = GB.metaKey, this._shiftKey = GB.shiftKey, this._buttonsPressed = GB.buttons, IB.isPointerLock) {
                const BB = GB.movementX,
                  IB = GB.movementY;
                this.onTouch(null, BB, IB), this._pointA = null, this._pointB = null
              } else {
                if (oB.type !== nB.d.POINTERDOWN && oB.type !== nB.d.POINTERDOUBLETAP && vB && this._pointA?.pointerId !== GB.pointerId && this._pointB?.pointerId !== GB.pointerId) return;
                if (oB.type !== nB.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !vB)
                  if (oB.type === nB.d.POINTERDOUBLETAP) this.onDoubleTap(GB.pointerType, GB);
                  else if (oB.type !== nB.d.POINTERUP || this._currentMousePointerIdDown !== GB.pointerId && !vB) {
                  if (oB.type === nB.d.POINTERMOVE)
                    if (BB || GB.preventDefault(), this._pointA && null === this._pointB) {
                      const BB = GB.clientX - this._pointA.x,
                        IB = GB.clientY - this._pointA.y;
                      this._pointA.x = GB.clientX, this._pointA.y = GB.clientY, this.onTouch(this._pointA, BB, IB)
                    } else if (this._pointA && this._pointB) {
                    const BB = this._pointA.pointerId === GB.pointerId ? this._pointA : this._pointB;
                    BB.x = GB.clientX, BB.y = GB.clientY;
                    const IB = this._pointA.x - this._pointB.x,
                      ZB = this._pointA.y - this._pointB.y,
                      vB = IB * IB + ZB * ZB,
                      kB = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: GB.pointerId,
                        type: oB.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, TB, vB, JB, kB), JB = kB, TB = vB
                  }
                } else {
                  try {
                    kB?.releasePointerCapture(GB.pointerId)
                  } catch (cB) {}
                  vB || (this._pointB = null), IB._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == GB.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == GB.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== TB || JB) && (this.onMultiTouch(this._pointA, this._pointB, TB, 0, JB, null), TB = 0, JB = null), this._currentMousePointerIdDown = -1, this.onButtonUp(GB), BB || GB.preventDefault()
                } else {
                  try {
                    kB?.setPointerCapture(GB.pointerId)
                  } catch (cB) {}
                  if (null === this._pointA) this._pointA = {
                    x: GB.clientX,
                    y: GB.clientY,
                    pointerId: GB.pointerId,
                    type: GB.pointerType,
                    button: GB.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: GB.clientX,
                      y: GB.clientY,
                      pointerId: GB.pointerId,
                      type: GB.pointerType,
                      button: GB.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || vB || (this._currentMousePointerIdDown = GB.pointerId), this.onButtonDown(GB), BB || (GB.preventDefault(), ZB && ZB.focus())
                }
              }
            }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._pointerInput, nB.d.POINTERDOWN | nB.d.POINTERUP | nB.d.POINTERMOVE | nB.d.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, TB = 0, JB = null, this.onLostFocus()
            }, this._contextMenuBind = BB => this.onContextMenu(BB), ZB && ZB.addEventListener("contextmenu", this._contextMenuBind, !1);
            const oB = this.camera.JR().PN().getHostWindow();
            oB && CB.j.RegisterTopRootEvents(oB, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const BB = this.camera.JR().PN().getHostWindow();
              BB && CB.j.UnregisterTopRootEvents(BB, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const BB = this.camera.JR().PN().getInputElement();
                BB && BB.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(BB, IB) {}
          onTouch(BB, IB, ZB) {}
          onMultiTouch(BB, IB, ZB, TB, JB, oB) {}
          onContextMenu(BB) {
            BB.preventDefault()
          }
          onButtonDown(BB) {}
          onButtonUp(BB) {}
          onLostFocus() {}
        }, (() => {
          const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, IB) => {
                BB.buttons = IB
              }
            },
            metadata: GB
          }, ZB, oB), GB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GB
          })
        })(), BB
      })(),
      sB = (() => {
        var BB;
        let IB, ZB, oB, GB = QB,
          vB = [],
          kB = [],
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        return BB = class extends GB {
          constructor() {
            super(...arguments), this.pinchZoom = (0, TB.l)(this, vB, !0), this.multiTouchPanning = ((0, TB.l)(this, kB), (0, TB.l)(this, cB, !0)), this.multiTouchPanAndZoom = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, !0)), this._isPinching = ((0, TB.l)(this, zB), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(BB, IB) {}
          _computeMultiTouchPanning(BB, IB) {}
          onMultiTouch(BB, IB, ZB, TB, JB, oB) {
            0 === ZB && null === JB || 0 === TB && null === oB || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ZB, TB), this._computeMultiTouchPanning(JB, oB)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(ZB, TB), this._isPinching = !0) : this._computeMultiTouchPanning(JB, oB)) : this.multiTouchPanning ? this._computeMultiTouchPanning(JB, oB) : this.pinchZoom && this._computePinchZoom(ZB, TB))
          }
          onButtonUp(BB) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(GB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchZoom" in BB,
              get: BB => BB.pinchZoom,
              set: (BB, IB) => {
                BB.pinchZoom = IB
              }
            },
            metadata: FB
          }, vB, kB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanning" in BB,
              get: BB => BB.multiTouchPanning,
              set: (BB, IB) => {
                BB.multiTouchPanning = IB
              }
            },
            metadata: FB
          }, cB, nB), (0, TB.j)(null, null, oB, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "multiTouchPanAndZoom" in BB,
              get: BB => BB.multiTouchPanAndZoom,
              set: (BB, IB) => {
                BB.multiTouchPanAndZoom = IB
              }
            },
            metadata: FB
          }, hB, zB), FB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FB
          })
        })(), BB
      })(),
      wB = (() => {
        var BB;
        let IB, ZB, oB, GB, vB, kB, cB, nB = sB,
          hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [],
          yB = [],
          UB = [],
          WB = [],
          dB = [],
          CB = [],
          QB = [],
          wB = [],
          OB = [];
        return BB = class extends nB {
          constructor() {
            super(...arguments), this.buttons = (0, TB.l)(this, hB, [0, 1, 2]), this.angularSensibilityX = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, 1e3)), this.angularSensibilityY = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, 1e3)), this.pinchPrecision = ((0, TB.l)(this, qB), (0, TB.l)(this, yB, 12)), this.pinchDeltaPercentage = ((0, TB.l)(this, UB), (0, TB.l)(this, WB, 0)), this.useNaturalPinchZoom = ((0, TB.l)(this, dB), (0, TB.l)(this, CB, !1)), this.panningSensibility = ((0, TB.l)(this, QB), (0, TB.l)(this, wB, 1e3)), this.pinchInwards = ((0, TB.l)(this, OB), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(BB, IB) {
            if (BB && IB) {
              const ZB = IB.x - BB.x,
                TB = IB.y - BB.y,
                JB = this.camera.movement.input.getEntry("pointer", "pan"),
                oB = JB?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== oB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -ZB * oB, this.camera.movement.panAccumulatedPixels.y += TB * oB)
            }
          }
          _computePinchZoom(IB, ZB) {
            const TB = this.camera.radius || BB.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = TB * Math.sqrt(IB) / Math.sqrt(ZB);
            else if (this.pinchDeltaPercentage) {
              const BB = .001 * (ZB - IB) * TB * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            } else {
              const BB = (ZB - IB) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += BB
            }
          }
          onTouch(BB, IB, ZB) {
            const TB = this._activeEntry ?? (this.camera.PN().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (TB)
              if ("pan" === TB.interaction) {
                const BB = TB.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== BB && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -IB * BB, this.camera.movement.panAccumulatedPixels.y += ZB * BB)
              } else if ("rotate" === TB.interaction) {
              const BB = TB.uD ?? TB.sensitivity ?? 1 / this.angularSensibilityX,
                JB = TB.lD ?? TB.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -IB * BB, this.camera.movement.rotationAccumulatedPixels.y += -ZB * JB
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(BB, IB, ZB, TB, JB, oB) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(TB) - Math.sqrt(ZB)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(BB, IB, ZB, TB, JB, oB)
          }
          onButtonDown(BB) {
            this._pointerConditions.button = BB.button, this._pointerModifiers.ctrl = BB.ctrlKey, this._pointerModifiers.alt = BB.altKey, this._pointerModifiers.shift = BB.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(BB)
          }
          onButtonUp(BB) {
            this._activeEntry = null, super.onButtonUp(BB)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(nB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: BB => "buttons" in BB,
              get: BB => BB.buttons,
              set: (BB, IB) => {
                BB.buttons = IB
              }
            },
            metadata: sB
          }, hB, zB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityX" in BB,
              get: BB => BB.angularSensibilityX,
              set: (BB, IB) => {
                BB.angularSensibilityX = IB
              }
            },
            metadata: sB
          }, FB, NB), (0, TB.j)(null, null, oB, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: BB => "angularSensibilityY" in BB,
              get: BB => BB.angularSensibilityY,
              set: (BB, IB) => {
                BB.angularSensibilityY = IB
              }
            },
            metadata: sB
          }, gB, qB), (0, TB.j)(null, null, GB, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchPrecision" in BB,
              get: BB => BB.pinchPrecision,
              set: (BB, IB) => {
                BB.pinchPrecision = IB
              }
            },
            metadata: sB
          }, yB, UB), (0, TB.j)(null, null, vB, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchDeltaPercentage" in BB,
              get: BB => BB.pinchDeltaPercentage,
              set: (BB, IB) => {
                BB.pinchDeltaPercentage = IB
              }
            },
            metadata: sB
          }, WB, dB), (0, TB.j)(null, null, kB, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: BB => "useNaturalPinchZoom" in BB,
              get: BB => BB.useNaturalPinchZoom,
              set: (BB, IB) => {
                BB.useNaturalPinchZoom = IB
              }
            },
            metadata: sB
          }, CB, QB), (0, TB.j)(null, null, cB, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningSensibility" in BB,
              get: BB => BB.panningSensibility,
              set: (BB, IB) => {
                BB.panningSensibility = IB
              }
            },
            metadata: sB
          }, wB, OB), sB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          })
        })(), BB.MinimumRadiusForPinch = .001, BB
      })();
    dB.c.ArcRotateCameraPointersInput = wB;
    var OB = ZB(40226);
    let YB = (() => {
      var BB;
      let IB, ZB, oB, vB, kB, cB, nB, hB, zB, FB, NB, gB = [],
        qB = [],
        yB = [],
        UB = [],
        WB = [],
        dB = [],
        QB = [],
        sB = [],
        wB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [];
      return BB = class {
        constructor() {
          this.camera = (0, TB.l)(this, gB), this.keysUp = (0, TB.l)(this, qB, [38]), this.keysDown = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, [40])), this.keysLeft = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, [37])), this.keysRight = ((0, TB.l)(this, QB), (0, TB.l)(this, sB, [39])), this.keysReset = ((0, TB.l)(this, wB), (0, TB.l)(this, YB, [220])), this.keysZoomIn = ((0, TB.l)(this, iB), (0, TB.l)(this, pB, [187, 107])), this.keysZoomOut = ((0, TB.l)(this, aB), (0, TB.l)(this, HB, [189, 109])), this.panningSensibility = ((0, TB.l)(this, MB), (0, TB.l)(this, jB, 50)), this.zoomingSensibility = ((0, TB.l)(this, PB), (0, TB.l)(this, RB, 25)), this.angularSpeed = ((0, TB.l)(this, rB), (0, TB.l)(this, mB, .01)), this._useAltToZoom = ((0, TB.l)(this, XB), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new GB.p, this._panDirection = new GB.p
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(BB) {
          this._useAltToZoom = BB, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const BB = this.camera.movement.input,
            IB = BB.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && IB ? BB.inputMap.splice(BB.inputMap.indexOf(IB), 1) : this._useAltToZoom && !IB && BB.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(BB) {
          BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JR(), this._engine = this._scene.PN(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((IB => {
            const ZB = IB.event;
            if (!ZB.metaKey)
              if (IB.type === OB.b.KEYDOWN) {
                if (this._ctrlPressed = ZB.ctrlKey, this._altPressed = ZB.altKey, -1 !== this.keysUp.indexOf(ZB.keyCode) || -1 !== this.keysDown.indexOf(ZB.keyCode) || -1 !== this.keysLeft.indexOf(ZB.keyCode) || -1 !== this.keysRight.indexOf(ZB.keyCode) || -1 !== this.keysReset.indexOf(ZB.keyCode) || -1 !== this.keysZoomIn.indexOf(ZB.keyCode) || -1 !== this.keysZoomOut.indexOf(ZB.keyCode)) {
                  -1 === this._keys.indexOf(ZB.keyCode) && this._keys.push(ZB.keyCode), ZB.preventDefault && (BB || ZB.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(ZB.keyCode) || -1 !== this.keysDown.indexOf(ZB.keyCode) || -1 !== this.keysLeft.indexOf(ZB.keyCode) || -1 !== this.keysRight.indexOf(ZB.keyCode) || -1 !== this.keysReset.indexOf(ZB.keyCode) || -1 !== this.keysZoomIn.indexOf(ZB.keyCode) || -1 !== this.keysZoomOut.indexOf(ZB.keyCode)) {
              const IB = this._keys.indexOf(ZB.keyCode);
              IB >= 0 && this._keys.splice(IB, 1), ZB.preventDefault && (BB || ZB.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const BB = this.camera,
              IB = BB.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const ZB = this._rotateDirection.set(0, 0),
              TB = this._panDirection.set(0, 0);
            let JB = 0,
              oB = 0;
            for (let GB = 0; GB < this._keys.length; GB++) {
              const vB = this._keys[GB];
              if (this._keyboardConditions.key = vB, -1 === this.keysReset.indexOf(vB)) {
                const BB = IB.resolveInteraction("keyboard", this._keyboardConditions);
                if (BB)
                  if ("pan" === BB.interaction) oB = Math.max(oB, BB.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(vB) ? TB.x -= 1 : -1 !== this.keysRight.indexOf(vB) ? TB.x += 1 : -1 !== this.keysUp.indexOf(vB) ? TB.y += 1 : -1 !== this.keysDown.indexOf(vB) && (TB.y -= 1);
                  else if ("zoom" === BB.interaction) {
                  const ZB = BB.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(vB) || -1 !== this.keysZoomIn.indexOf(vB) ? IB.handlers.zoom(ZB) : -1 === this.keysDown.indexOf(vB) && -1 === this.keysZoomOut.indexOf(vB) || IB.handlers.zoom(-ZB)
                } else "rotate" === BB.interaction && (JB = Math.max(JB, BB.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(vB) ? ZB.x -= 1 : -1 !== this.keysRight.indexOf(vB) ? ZB.x += 1 : -1 !== this.keysUp.indexOf(vB) ? ZB.y -= 1 : -1 !== this.keysDown.indexOf(vB) && (ZB.y += 1))
              } - 1 !== this.keysReset.indexOf(vB) && BB.useInputToRestoreState && BB.restoreState()
            }
            0 === ZB.x && 0 === ZB.y || (ZB.normalize().scaleInPlace(JB), IB.handlers.rotate(ZB.x, ZB.y)), 0 === TB.x && 0 === TB.y || (TB.normalize().scaleInPlace(oB), IB.handlers.pan(TB.x, TB.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], (0, TB.j)(BB, null, NB, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAltToZoom" in BB,
            get: BB => BB.useAltToZoom
          },
          metadata: GB
        }, null, gB), (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysUp" in BB,
            get: BB => BB.keysUp,
            set: (BB, IB) => {
              BB.keysUp = IB
            }
          },
          metadata: GB
        }, qB, yB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysDown" in BB,
            get: BB => BB.keysDown,
            set: (BB, IB) => {
              BB.keysDown = IB
            }
          },
          metadata: GB
        }, UB, WB), (0, TB.j)(null, null, oB, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysLeft" in BB,
            get: BB => BB.keysLeft,
            set: (BB, IB) => {
              BB.keysLeft = IB
            }
          },
          metadata: GB
        }, dB, QB), (0, TB.j)(null, null, vB, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysRight" in BB,
            get: BB => BB.keysRight,
            set: (BB, IB) => {
              BB.keysRight = IB
            }
          },
          metadata: GB
        }, sB, wB), (0, TB.j)(null, null, kB, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysReset" in BB,
            get: BB => BB.keysReset,
            set: (BB, IB) => {
              BB.keysReset = IB
            }
          },
          metadata: GB
        }, YB, iB), (0, TB.j)(null, null, cB, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomIn" in BB,
            get: BB => BB.keysZoomIn,
            set: (BB, IB) => {
              BB.keysZoomIn = IB
            }
          },
          metadata: GB
        }, pB, aB), (0, TB.j)(null, null, nB, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: BB => "keysZoomOut" in BB,
            get: BB => BB.keysZoomOut,
            set: (BB, IB) => {
              BB.keysZoomOut = IB
            }
          },
          metadata: GB
        }, HB, MB), (0, TB.j)(null, null, hB, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "panningSensibility" in BB,
            get: BB => BB.panningSensibility,
            set: (BB, IB) => {
              BB.panningSensibility = IB
            }
          },
          metadata: GB
        }, jB, PB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomingSensibility" in BB,
            get: BB => BB.zoomingSensibility,
            set: (BB, IB) => {
              BB.zoomingSensibility = IB
            }
          },
          metadata: GB
        }, RB, rB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: BB => "angularSpeed" in BB,
            get: BB => BB.angularSpeed,
            set: (BB, IB) => {
              BB.angularSpeed = IB
            }
          },
          metadata: GB
        }, mB, XB), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        })
      })(), BB
    })();
    dB.c.ArcRotateCameraKeyboardMoveInput = YB;
    var iB = ZB(37824),
      pB = ZB(40232);
    let aB = (() => {
      var BB;
      let IB, ZB, oB, kB = [],
        cB = [],
        hB = [],
        FB = [],
        NB = [],
        gB = [];
      return BB = class {
        constructor() {
          this.wheelPrecision = (0, TB.l)(this, kB, 3), this.zoomToMouseLocation = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, !1)), this.wheelDeltaPercentage = ((0, TB.l)(this, FB), (0, TB.l)(this, NB, 0)), this.customComputeDeltaFromMouseWheel = ((0, TB.l)(this, gB), null), this._viewOffset = new GB.s(0, 0, 0), this._globalOffset = new GB.s(0, 0, 0), this._inertialPanning = GB.s.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(BB, IB) {
          let ZB;
          const TB = .01 * BB * this.wheelDeltaPercentage * IB;
          return ZB = BB > 0 ? TB / (1 + this.wheelDeltaPercentage) : TB * (1 + this.wheelDeltaPercentage), ZB
        }
        attachControl(BB) {
          BB = CB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = IB => {
            if (IB.type !== nB.d.POINTERWHEEL) return;
            const ZB = IB.event;
            let TB;
            const JB = ZB.deltaMode === pB.d.DOM_DELTA_LINE ? 40 : 1,
              oB = -ZB.deltaY * JB;
            if (this.customComputeDeltaFromMouseWheel) TB = this.customComputeDeltaFromMouseWheel(oB, this, ZB);
            else if (this.wheelDeltaPercentage) {
              if (TB = this._computeDeltaFromMouseWheelLegacyEvent(oB, this.camera.radius), TB > 0) {
                const BB = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let IB = this.camera.radius,
                  ZB = BB + TB;
                for (let TB = 0; TB < 20 && !(IB <= ZB) && !(Math.abs(ZB * this.camera.inertia) < .001); TB++) IB -= ZB, ZB *= this.camera.inertia;
                IB = (0, vB.Clamp)(IB, 0, Number.MAX_VALUE), TB = this._computeDeltaFromMouseWheelLegacyEvent(oB, IB)
              }
            } else {
              const BB = this.camera.movement.input.getEntry("wheel", "zoom");
              TB = oB * (BB?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            TB && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(TB)) : this.camera.movement.zoomAccumulatedPixels += TB), ZB.preventDefault && (BB || ZB.preventDefault())
          }, this._observer = this.camera.JR()._inputManager._addCameraPointerObserver(this._wheel, nB.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.K9(0)
        }
        detachControl() {
          this._observer && (this.camera.JR()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const BB = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(BB.inertialAlphaOffset) + Math.abs(BB.inertialBetaOffset) + Math.abs(BB.inertialRadiusOffset)) {
            this._updateHitPlane(), BB.target.addInPlace(this._inertialPanning), BB.radius -= this._zoomToMouseRadiusOffset;
            const IB = BB.movement.getFrameIndependentDecay(BB.inertia);
            this._inertialPanning.scaleInPlace(IB), this._zoomToMouseRadiusOffset *= IB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < zB.d && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const BB = this.camera,
            IB = BB.target.subtract(BB.position);
          this._hitPlane = iB.c.FromPositionAndNormal(BB.target, IB)
        }
        _getPosition() {
          const BB = this.camera,
            IB = BB.JR(),
            ZB = IB.createPickingRay(IB.pointerX, IB.pointerY, GB.b.Identity(), BB, !1);
          0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = GB.s.TransformNormal(this._viewOffset, BB._cameraTransformMatrix), ZB.origin.addInPlace(this._globalOffset));
          let TB = 0;
          return this._hitPlane && (TB = ZB.intersectsPlane(this._hitPlane) ?? 0), ZB.origin.addInPlace(ZB.direction.scaleInPlace(TB))
        }
        _zoomToMouse(BB) {
          const IB = this.camera,
            ZB = 1 - IB.inertia,
            TB = IB.movement.getFrameIndependentInputScale(IB.inertia);
          if (IB.lowerRadiusLimit) {
            const JB = IB.lowerRadiusLimit ?? 0;
            IB.radius - (this._zoomToMouseRadiusOffset + BB * TB) / ZB < JB && (BB = ((IB.radius - JB) * ZB - this._zoomToMouseRadiusOffset) / TB)
          }
          if (IB.upperRadiusLimit) {
            const JB = IB.upperRadiusLimit ?? 0;
            IB.radius - (this._zoomToMouseRadiusOffset + BB * TB) / ZB > JB && (BB = ((IB.radius - JB) * ZB - this._zoomToMouseRadiusOffset) / TB)
          }
          const JB = BB / ZB / IB.radius,
            oB = this._getPosition(),
            vB = GB.m.rN[6];
          oB.subtractToRef(IB.target, vB), vB.scaleInPlace(JB), vB.scaleInPlace(ZB), vB.scaleInPlace(TB), this._inertialPanning.addInPlace(vB), this._zoomToMouseRadiusOffset += BB * TB
        }
        _zeroIfClose(BB) {
          Math.abs(BB.x) < zB.d && (BB.x = 0), Math.abs(BB.y) < zB.d && (BB.y = 0), Math.abs(BB.z) < zB.d && (BB.z = 0)
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelPrecision" in BB,
            get: BB => BB.wheelPrecision,
            set: (BB, IB) => {
              BB.wheelPrecision = IB
            }
          },
          metadata: GB
        }, kB, cB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: BB => "zoomToMouseLocation" in BB,
            get: BB => BB.zoomToMouseLocation,
            set: (BB, IB) => {
              BB.zoomToMouseLocation = IB
            }
          },
          metadata: GB
        }, hB, FB), (0, TB.j)(null, null, oB, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: BB => "wheelDeltaPercentage" in BB,
            get: BB => BB.wheelDeltaPercentage,
            set: (BB, IB) => {
              BB.wheelDeltaPercentage = IB
            }
          },
          metadata: GB
        }, NB, gB), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        })
      })(), BB
    })();
    dB.c.ArcRotateCameraMouseWheelInput = aB;
    var HB, MB, jB = ZB(39931);
    class PB extends dB.f {
      constructor(BB) {
        super(BB)
      }
      addMouseWheel() {
        return this.add(new aB), this
      }
      addPointers() {
        return this.add(new wB), this
      }
      addKeyboard() {
        return this.add(new YB), this
      }
    }(HB = PB.prototype).addVRDeviceOrientation ?? (HB.addVRDeviceOrientation = (0, jB.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (MB = PB.prototype).addGamepad ?? (MB.addGamepad = (0, jB.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var RB = ZB(37170),
      rB = ZB(40281),
      mB = ZB(40284);
    class XB extends rB.e {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB), this.input = new mB.d({
          pan: (BB, IB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += IB
          },
          rotate: (BB, IB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += IB
          },
          zoom: BB => {
            this.zoomAccumulatedPixels += BB
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

    function LB(BB, IB) {
      return isNaN(BB) ? IB : BB
    }
    let eB = (() => {
        var BB;
        let IB, ZB, kB, nB, hB, NB, gB, dB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, RB, rB, mB, eB, uB, fB, lB, AB, tB, bB = WB.d,
          xB = [],
          EB = [],
          DB = [],
          KB = [],
          VB = [],
          SB = [],
          BI = [],
          II = [],
          ZI = [],
          TI = [],
          JI = [],
          oI = [],
          GI = [],
          vI = [],
          kI = [],
          cI = [],
          nI = [],
          hI = [],
          zI = [],
          FI = [],
          NI = [],
          gI = [],
          qI = [],
          yI = [],
          UI = [],
          WI = [],
          dI = [],
          CI = [],
          QI = [],
          sI = [],
          wI = [],
          OI = [],
          YI = [],
          iI = [],
          pI = [],
          aI = [],
          HI = [],
          MI = [],
          jI = [],
          PI = [],
          RI = [],
          rI = [],
          mI = [],
          XI = [],
          LI = [],
          eI = [],
          uI = [];
        return BB = class extends bB {
          get target() {
            return this.J7
          }
          set target(BB) {
            this.setTarget(BB)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(BB) {
            BB && this.setTarget(BB)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(BB) {
            this.setPosition(BB)
          }
          set upVector(BB) {
            this._upToYMatrix || (this._yToUpMatrix = new GB.b, this._upToYMatrix = new GB.b, this._upVector = GB.s.Zero()), BB.normalize(), this._upVector.TY(BB), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            GB.b.RotationAlignToRef(GB.s.UpReadOnly, this._upVector, this._yToUpMatrix), GB.b.RotationAlignToRef(this._upVector, GB.s.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const BB = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialAlphaOffset(BB) {
            this._inertialAlphaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const BB = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialBetaOffset(BB) {
            this._inertialBetaOffset = BB, 0 === BB && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const BB = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(BB) < this._rotationEpsilon ? 0 : BB
          }
          set inertialRadiusOffset(BB) {
            this._inertialRadiusOffset = BB, 0 === BB && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(BB) {
            this._panningInertia = BB, this.movement && (this.movement.panInertia = BB)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(BB) {
            this._inertia = BB, this.movement && (this.movement.rotationInertia = BB, this.movement.zoomInertia = BB)
          }
          get angularSensibilityX() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityX : 0
          }
          set angularSensibilityX(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.angularSensibilityX = BB)
          }
          get angularSensibilityY() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.angularSensibilityY : 0
          }
          set angularSensibilityY(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.angularSensibilityY = BB)
          }
          get pinchPrecision() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchPrecision : 0
          }
          set pinchPrecision(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.pinchPrecision = BB)
          }
          get pinchDeltaPercentage() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.pinchDeltaPercentage = BB)
          }
          get useNaturalPinchZoom() {
            const BB = this.inputs.attached.pointers;
            return !!BB && BB.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.useNaturalPinchZoom = BB)
          }
          get panningSensibility() {
            const BB = this.inputs.attached.pointers;
            return BB ? BB.panningSensibility : 0
          }
          set panningSensibility(BB) {
            const IB = this.inputs.attached.pointers;
            IB && (IB.panningSensibility = BB)
          }
          get keysUp() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysUp : []
          }
          set keysUp(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysUp = BB)
          }
          get keysDown() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysDown : []
          }
          set keysDown(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysDown = BB)
          }
          get keysLeft() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysLeft : []
          }
          set keysLeft(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysLeft = BB)
          }
          get keysRight() {
            const BB = this.inputs.attached.keyboard;
            return BB ? BB.keysRight : []
          }
          set keysRight(BB) {
            const IB = this.inputs.attached.keyboard;
            IB && (IB.keysRight = BB)
          }
          get wheelPrecision() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelPrecision : 0
          }
          set wheelPrecision(BB) {
            const IB = this.inputs.attached.mousewheel;
            IB && (IB.wheelPrecision = BB)
          }
          get zoomToMouseLocation() {
            const BB = this.inputs.attached.mousewheel;
            return !!BB && BB.zoomToMouseLocation
          }
          set zoomToMouseLocation(BB) {
            const IB = this.inputs.attached.mousewheel;
            IB && (IB.zoomToMouseLocation = BB)
          }
          get wheelDeltaPercentage() {
            const BB = this.inputs.attached.mousewheel;
            return BB ? BB.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(BB) {
            const IB = this.inputs.attached.mousewheel;
            IB && (IB.wheelDeltaPercentage = BB)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(BB) {
            this._useCtrlForPanningInternal = BB;
            const IB = this.movement.input,
              ZB = IB.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !BB && ZB ? IB.inputMap.splice(IB.inputMap.indexOf(ZB), 1) : BB && !ZB && IB.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const TB = IB.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !BB && TB ? IB.inputMap.splice(IB.inputMap.indexOf(TB), 1) : BB && !TB && IB.addEntry({
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
          set _panningMouseButton(BB) {
            this._panningMouseButtonInternal = BB;
            const IB = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            IB && (IB.button = BB)
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
          set useBouncingBehavior(BB) {
            BB !== this.useBouncingBehavior && (BB ? (this._bouncingBehavior = new qB, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(BB) {
            BB !== this.useFramingBehavior && (BB ? (this._framingBehavior = new yB, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(BB) {
            BB !== this.useAutoRotationBehavior && (BB ? (this._autoRotationBehavior = new FB, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(BB, IB, ZB, JB, vB, kB) {
            var cB;
            let nB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(BB, GB.s.Zero(), kB, nB), cB = this, this.alpha = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, void 0)), this.beta = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, void 0)), this.radius = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, void 0)), this.overrideCloneAlphaBetaRadius = ((0, TB.l)(this, BI), (0, TB.l)(this, II, void 0)), this.J7 = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, void 0)), this._targetHost = ((0, TB.l)(this, JI), (0, TB.l)(this, oI, void 0)), this._upToYMatrix = (0, TB.l)(this, GI), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, TB.l)(this, vI, null), this.upperAlphaLimit = ((0, TB.l)(this, kI), (0, TB.l)(this, cI, null)), this.lowerBetaLimit = ((0, TB.l)(this, nI), (0, TB.l)(this, hI, .01)), this.upperBetaLimit = ((0, TB.l)(this, zI), (0, TB.l)(this, FI, Math.PI - .01)), this.lowerRadiusLimit = ((0, TB.l)(this, NI), (0, TB.l)(this, gI, null)), this.upperRadiusLimit = ((0, TB.l)(this, qI), (0, TB.l)(this, yI, null)), this.lowerTargetYLimit = ((0, TB.l)(this, UI), (0, TB.l)(this, WI, -1 / 0)), this.inertialPanningX = ((0, TB.l)(this, dI), (0, TB.l)(this, CI, 0)), this.inertialPanningY = ((0, TB.l)(this, QI), (0, TB.l)(this, sI, 0)), this.pinchToPanMaxDistance = ((0, TB.l)(this, wI), (0, TB.l)(this, OI, 20)), this.panningDistanceLimit = ((0, TB.l)(this, YI), (0, TB.l)(this, iI, null)), this.panningOriginTarget = ((0, TB.l)(this, pI), (0, TB.l)(this, aI, GB.s.Zero())), this._panningInertia = ((0, TB.l)(this, HI), .9), this._inertia = .9, this.zoomOnFactor = (0, TB.l)(this, MI, 1), this.targetScreenOffset = ((0, TB.l)(this, jI), (0, TB.l)(this, PI, GB.p.Zero())), this.allowUpsideDown = ((0, TB.l)(this, RI), (0, TB.l)(this, rI, !0)), this.useInputToRestoreState = ((0, TB.l)(this, mI), (0, TB.l)(this, XI, !0)), this.restoreStateInterpolationFactor = ((0, TB.l)(this, LI), (0, TB.l)(this, eI, 0)), this._currentInterpolationFactor = ((0, TB.l)(this, uI), 0), this._viewMatrix = new GB.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new GB.s(1, 1, 0), this._transformedDirection = new GB.s, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new oB.b, this.checkCollisions = !1, this.collisionRadius = new GB.s(.5, .5, .5), this._previousPosition = GB.s.Zero(), this._collisionVelocity = GB.s.Zero(), this._newPosition = GB.s.Zero(), this._computationVector = GB.s.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new GB.s(NaN, NaN, NaN), this._goalTargetScreenOffset = new GB.p(NaN, NaN), this._onCollisionPositionChange = function(BB, IB) {
              let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              ZB ? (cB.setPosition(IB), cB.Wz && cB.Wz(ZB)) : cB._previousPosition.TY(cB._position);
              const TB = Math.cos(cB.alpha),
                JB = Math.sin(cB.alpha),
                oB = Math.cos(cB.beta);
              let GB = Math.sin(cB.beta);
              0 === GB && (GB = 1e-4);
              const vB = cB._getTargetPosition();
              cB._computationVector.cBB(cB.radius * TB * GB, cB.radius * oB, cB.radius * JB * GB), vB.addToRef(cB._computationVector, cB._newPosition), cB._position.TY(cB._newPosition);
              let kB = cB.upVector;
              cB.allowUpsideDown && cB.beta < 0 && (kB = kB.clone(), kB = kB.dv()), cB._computeViewMatrix(cB._position, vB, kB), cB._viewMatrix.addAtIndex(12, cB.targetScreenOffset.x), cB._viewMatrix.addAtIndex(13, cB.targetScreenOffset.y), cB._collisionTriggered = !1
            }, this.J7 = GB.s.Zero(), vB && this.setTarget(vB), this.alpha = IB, this.beta = ZB, this.radius = JB, this.getViewMatrix(), this.inputs = new PB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new XB(this.JR(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.J7 = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = GB.p.Zero()
          }
          _updateCache(BB) {
            BB || super._updateCache(), this._cache.J7.TY(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.TY(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const BB = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.J7) : this.J7.TY(BB)
            }
            const BB = this._getLockedTargetPosition();
            return BB || this.J7
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > zB.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              oB = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != oB ? this._currentInterpolationFactor = oB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = LB(BB, this._goalAlpha), this._goalBeta = LB(IB, this._goalBeta), this._goalRadius = LB(ZB, this._goalRadius), this._goalTarget.set(LB(TB.x, this._goalTarget.x), LB(TB.y, this._goalTarget.y), LB(TB.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(LB(JB.x, this._goalTargetScreenOffset.x), LB(JB.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, vB.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, vB.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, vB.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, vB.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.J7.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(BB, IB) {
            let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const JB = arguments;
            IB = CB.j.BackCompatCameraNoPreventDefault(JB), this._useCtrlForPanning = ZB, this._panningMouseButton = TB, "boolean" === typeof JB[0] && (JB.length > 1 && (this._useCtrlForPanning = JB[1]), JB.length > 2 && (this._panningMouseButton = JB[2])), this.inputs.attachElement(IB), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(BB, IB, ZB) {
            const TB = this.invertRotation ? -1 : 1;
            let JB = BB * this._calculateHandednessMultiplier();
            this.beta < 0 && (JB *= -1), this.alpha += JB * TB, this.beta += IB * TB, this.radius -= ZB
          }
          _applyPanDelta(BB, IB) {
            const ZB = GB.m.rN[0].cBB(BB, IB, IB);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZB.multiplyInPlace(this.panningAxis), GB.s.TransformNormalToRef(ZB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const BB = this.upVector,
                IB = GB.s.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
              GB.s.CrossToRef(BB, IB, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.J7);
                GB.s.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.J7.TY(this._transformedDirection)
              } else {
                if (this.parent) {
                  const BB = GB.m.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), GB.s.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
                }
                this.J7.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let BB = !1;
            this.movement.computeCurrentFrameDeltas();
            const IB = this.movement.rotationDeltaCurrentFrame,
              ZB = this.movement.zoomDeltaCurrentFrame,
              TB = this.movement.panDeltaCurrentFrame;
            if (0 === IB.x && 0 === IB.y && 0 === ZB && 0 === TB.x && 0 === TB.y || (BB = !0, 0 === IB.x && 0 === IB.y && 0 === ZB || this._applyRotationAndZoomDelta(IB.x, IB.y, ZB), 0 === TB.x && 0 === TB.y || this._applyPanDelta(TB.x, TB.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), BB = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const IB = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < IB && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < IB && (this.inertialPanningY = 0), BB = !0
            }
            if (BB) this.stopInterpolation();
            else if (this._isInterpolating) {
              let BB = !1;
              const IB = this._scene.PN().getDeltaTime() / 1e3,
                ZB = 1 - Math.pow(2, -IB / this._currentInterpolationFactor),
                TB = LB(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const IB = GB.m.rN[0].set(LB(this._goalTarget.x, this.J7.x), LB(this._goalTarget.y, this.J7.y), LB(this._goalTarget.z, this.J7.z));
                GB.s.LerpToRef(this.target, IB, ZB, this.J7), 10 * GB.s.Distance(this.target, IB) / TB < zB.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.TY(IB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const IB = GB.f.RotationAlphaBetaGammaToRef(LB(this._goalAlpha, this.alpha), LB(this._goalBeta, this.beta), 0, GB.m.Quaternion[0]),
                  TB = GB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, GB.m.Quaternion[1]),
                  JB = GB.f.SlerpToRef(TB, IB, ZB, GB.m.Quaternion[2]);
                JB.normalize();
                const oB = JB.toAlphaBetaGammaToRef(GB.m.rN[0]);
                if (this.alpha = oB.x, this.beta = oB.y, JB.isApprox(IB, zB.d / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const BB = IB.toAlphaBetaGammaToRef(GB.m.rN[0]);
                  this.alpha = BB.x, this.beta = BB.y
                } else BB = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (TB - this.radius) * ZB, Math.abs(TB / this.radius - 1) < zB.d ? (this._goalRadius = NaN, this.radius = TB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const IB = GB.m.Vector2[0].set(LB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), LB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                GB.p.LerpToRef(this.targetScreenOffset, IB, ZB, this.targetScreenOffset), GB.p.Distance(this.targetScreenOffset, IB) < zB.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.TY(IB)) : BB = !0
              }
              this._isInterpolating = BB
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const BB = this.alpha;
            var IB, ZB;
            this.alpha = function(BB) {
              let IB = Math.PI / 2;
              return 0 === BB.x && 0 === BB.z || (IB = Math.acos(BB.x / Math.sqrt(Math.pow(BB.x, 2) + Math.pow(BB.z, 2)))), BB.z < 0 && (IB = 2 * Math.PI - IB), IB
            }(this._computationVector), this.beta = (IB = this._computationVector.y, ZB = this.radius, Math.acos(IB / ZB));
            const TB = Math.round((BB - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * TB * Math.PI, this._checkLimits()
          }
          setPosition(BB) {
            this._position.equals(BB) || (this._position.TY(BB), this.rebuildAnglesAndRadius())
          }
          setTarget(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (TB = this.overrideCloneAlphaBetaRadius ?? TB, BB.computeWorldMatrix) IB && BB.qm ? this._targetBoundingCenter = BB.qm().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.J7 = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const IB = BB,
                TB = this._getTargetPosition();
              if (TB && !ZB && TB.equals(IB)) return;
              this._targetHost = null, this.J7 = IB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            TB || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const BB = Math.cos(this.alpha),
              IB = Math.sin(this.alpha),
              ZB = Math.cos(this.beta);
            let TB = Math.sin(this.beta);
            0 === TB && (TB = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const JB = this._getTargetPosition();
            if (this._computationVector.cBB(this.radius * BB * TB, this.radius * ZB, this.radius * IB * TB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || GB.s.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), JB.addToRef(this._computationVector, this._newPosition), this.JR().collisionsEnabled && this.checkCollisions) {
              const BB = this.JR().collisionCoordinator;
              this._collider || (this._collider = BB.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, BB.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.TY(this._newPosition);
              let BB = this.upVector;
              this.allowUpsideDown && TB < 0 && (BB = BB.dv()), this._computeViewMatrix(this._position, JB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.TY(JB), this._viewMatrix
          }
          zoomOn(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            BB = BB || this.JR().meshes;
            const ZB = cB.c.MinMax(BB);
            let TB = this._calculateLowerRadiusFromModelBoundingSphere(ZB.min, ZB.max);
            if (TB = Math.max(Math.min(TB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = TB * this.zoomOnFactor, this.mode === UB.c.ORTHOGRAPHIC_CAMERA) {
              const BB = this.JR().PN().getAspectRatio(this),
                IB = TB * this.zoomOnFactor / 2;
              this.orthoLeft = -IB * BB, this.orthoRight = IB * BB, this.orthoBottom = -IB, this.orthoTop = IB
            }
            this.focusOn({
              min: ZB.min,
              max: ZB.max,
              distance: TB
            }, IB)
          }
          focusOn(BB) {
            let IB, ZB, TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === BB.min) {
              const TB = BB || this.JR().meshes;
              IB = cB.c.MinMax(TB), ZB = GB.s.Distance(IB.min, IB.max)
            } else {
              IB = BB, ZB = BB.distance
            }
            this.J7 = cB.c.Center(IB), TB || (this.maxZ = 2 * ZB)
          }
          createRigCamera(IB, ZB) {
            let TB = 0;
            switch (this.cameraRigMode) {
              case UB.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case UB.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case UB.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case UB.c.RIG_MODE_VR:
                TB = this._cameraRigParams.stereoHalfAngle * (0 === ZB ? 1 : -1);
                break;
              case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                TB = this._cameraRigParams.stereoHalfAngle * (0 === ZB ? -1 : 1)
            }
            const JB = new BB(IB, this.alpha + TB, this.beta, this.radius, this.J7, this.JR());
            return JB._cameraRigParams = {}, JB.isRigCamera = !0, JB.rigParent = this, JB.upVector = this.upVector, JB.mode = this.mode, JB.orthoLeft = this.orthoLeft, JB.orthoRight = this.orthoRight, JB.orthoBottom = this.orthoBottom, JB.orthoTop = this.orthoTop, JB
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              IB = this._rigCameras[1];
            switch (BB.beta = IB.beta = this.beta, this.cameraRigMode) {
              case UB.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case UB.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case UB.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case UB.c.RIG_MODE_VR:
                BB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, IB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case UB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                BB.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, IB.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const TB = GB.s.Distance(BB, IB),
              JB = this.JR().PN().getAspectRatio(this),
              oB = Math.tan(this.fov / 2),
              vB = oB * JB,
              kB = .5 * TB * ZB,
              cB = kB * Math.sqrt(1 + 1 / (vB * vB)),
              nB = kB * Math.sqrt(1 + 1 / (oB * oB));
            return Math.max(cB, nB)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(bB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], kB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.A)("target")], NB = [(0, JB.q)("targetHost")], gB = [(0, JB.C)()], dB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], HB = [(0, JB.C)()], MB = [(0, JB.C)()], jB = [(0, JB.C)()], RB = [(0, JB.C)()], rB = [(0, JB.A)()], mB = [(0, JB.C)()], eB = [(0, JB.C)()], uB = [(0, JB.C)()], fB = [(0, JB.x)()], lB = [(0, JB.C)()], AB = [(0, JB.C)()], tB = [(0, JB.C)()], (0, TB.j)(BB, null, gB, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialAlphaOffset" in BB,
              get: BB => BB.inertialAlphaOffset
            },
            metadata: oB
          }, null, xB), (0, TB.j)(BB, null, dB, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialBetaOffset" in BB,
              get: BB => BB.inertialBetaOffset
            },
            metadata: oB
          }, null, xB), (0, TB.j)(BB, null, QB, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialRadiusOffset" in BB,
              get: BB => BB.inertialRadiusOffset
            },
            metadata: oB
          }, null, xB), (0, TB.j)(BB, null, mB, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningInertia" in BB,
              get: BB => BB.panningInertia
            },
            metadata: oB
          }, null, xB), (0, TB.j)(BB, null, eB, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomToMouseLocation" in BB,
              get: BB => BB.zoomToMouseLocation
            },
            metadata: oB
          }, null, xB), (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "alpha" in BB,
              get: BB => BB.alpha,
              set: (BB, IB) => {
                BB.alpha = IB
              }
            },
            metadata: oB
          }, EB, DB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: BB => "beta" in BB,
              get: BB => BB.beta,
              set: (BB, IB) => {
                BB.beta = IB
              }
            },
            metadata: oB
          }, KB, VB), (0, TB.j)(null, null, kB, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: BB => "radius" in BB,
              get: BB => BB.radius,
              set: (BB, IB) => {
                BB.radius = IB
              }
            },
            metadata: oB
          }, SB, BI), (0, TB.j)(null, null, nB, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "overrideCloneAlphaBetaRadius" in BB,
              get: BB => BB.overrideCloneAlphaBetaRadius,
              set: (BB, IB) => {
                BB.overrideCloneAlphaBetaRadius = IB
              }
            },
            metadata: oB
          }, II, ZI), (0, TB.j)(null, null, hB, {
            kind: "field",
            name: "J7",
            static: !1,
            private: !1,
            access: {
              has: BB => "J7" in BB,
              get: BB => BB.J7,
              set: (BB, IB) => {
                BB.J7 = IB
              }
            },
            metadata: oB
          }, TI, JI), (0, TB.j)(null, null, NB, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: BB => "_targetHost" in BB,
              get: BB => BB._targetHost,
              set: (BB, IB) => {
                BB._targetHost = IB
              }
            },
            metadata: oB
          }, oI, GI), (0, TB.j)(null, null, sB, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerAlphaLimit" in BB,
              get: BB => BB.lowerAlphaLimit,
              set: (BB, IB) => {
                BB.lowerAlphaLimit = IB
              }
            },
            metadata: oB
          }, vI, kI), (0, TB.j)(null, null, wB, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperAlphaLimit" in BB,
              get: BB => BB.upperAlphaLimit,
              set: (BB, IB) => {
                BB.upperAlphaLimit = IB
              }
            },
            metadata: oB
          }, cI, nI), (0, TB.j)(null, null, OB, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerBetaLimit" in BB,
              get: BB => BB.lowerBetaLimit,
              set: (BB, IB) => {
                BB.lowerBetaLimit = IB
              }
            },
            metadata: oB
          }, hI, zI), (0, TB.j)(null, null, YB, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperBetaLimit" in BB,
              get: BB => BB.upperBetaLimit,
              set: (BB, IB) => {
                BB.upperBetaLimit = IB
              }
            },
            metadata: oB
          }, FI, NI), (0, TB.j)(null, null, iB, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerRadiusLimit" in BB,
              get: BB => BB.lowerRadiusLimit,
              set: (BB, IB) => {
                BB.lowerRadiusLimit = IB
              }
            },
            metadata: oB
          }, gI, qI), (0, TB.j)(null, null, pB, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "upperRadiusLimit" in BB,
              get: BB => BB.upperRadiusLimit,
              set: (BB, IB) => {
                BB.upperRadiusLimit = IB
              }
            },
            metadata: oB
          }, yI, UI), (0, TB.j)(null, null, aB, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "lowerTargetYLimit" in BB,
              get: BB => BB.lowerTargetYLimit,
              set: (BB, IB) => {
                BB.lowerTargetYLimit = IB
              }
            },
            metadata: oB
          }, WI, dI), (0, TB.j)(null, null, HB, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningX" in BB,
              get: BB => BB.inertialPanningX,
              set: (BB, IB) => {
                BB.inertialPanningX = IB
              }
            },
            metadata: oB
          }, CI, QI), (0, TB.j)(null, null, MB, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: BB => "inertialPanningY" in BB,
              get: BB => BB.inertialPanningY,
              set: (BB, IB) => {
                BB.inertialPanningY = IB
              }
            },
            metadata: oB
          }, sI, wI), (0, TB.j)(null, null, jB, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: BB => "pinchToPanMaxDistance" in BB,
              get: BB => BB.pinchToPanMaxDistance,
              set: (BB, IB) => {
                BB.pinchToPanMaxDistance = IB
              }
            },
            metadata: oB
          }, OI, YI), (0, TB.j)(null, null, RB, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningDistanceLimit" in BB,
              get: BB => BB.panningDistanceLimit,
              set: (BB, IB) => {
                BB.panningDistanceLimit = IB
              }
            },
            metadata: oB
          }, iI, pI), (0, TB.j)(null, null, rB, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "panningOriginTarget" in BB,
              get: BB => BB.panningOriginTarget,
              set: (BB, IB) => {
                BB.panningOriginTarget = IB
              }
            },
            metadata: oB
          }, aI, HI), (0, TB.j)(null, null, uB, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "zoomOnFactor" in BB,
              get: BB => BB.zoomOnFactor,
              set: (BB, IB) => {
                BB.zoomOnFactor = IB
              }
            },
            metadata: oB
          }, MI, jI), (0, TB.j)(null, null, fB, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: BB => "targetScreenOffset" in BB,
              get: BB => BB.targetScreenOffset,
              set: (BB, IB) => {
                BB.targetScreenOffset = IB
              }
            },
            metadata: oB
          }, PI, RI), (0, TB.j)(null, null, lB, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: BB => "allowUpsideDown" in BB,
              get: BB => BB.allowUpsideDown,
              set: (BB, IB) => {
                BB.allowUpsideDown = IB
              }
            },
            metadata: oB
          }, rI, mI), (0, TB.j)(null, null, AB, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: BB => "useInputToRestoreState" in BB,
              get: BB => BB.useInputToRestoreState,
              set: (BB, IB) => {
                BB.useInputToRestoreState = IB
              }
            },
            metadata: oB
          }, XI, LI), (0, TB.j)(null, null, tB, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: BB => "restoreStateInterpolationFactor" in BB,
              get: BB => BB.restoreStateInterpolationFactor,
              set: (BB, IB) => {
                BB.restoreStateInterpolationFactor = IB
              }
            },
            metadata: oB
          }, eI, uI), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      uB = !1;
    uB || (uB = !0, kB.e.AddNodeConstructor("ArcRotateCamera", ((BB, IB) => () => new eB(BB, 0, 0, 1, GB.s.Zero(), IB))), (0, RB.i)("BABYLON.ArcRotateCamera", eB))
  },
  40297: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB.e
    });
    var TB = ZB(40305);
    (0, TB.h)()
  },
  40305: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      h: () => zB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(37311),
      vB = ZB(40310),
      kB = ZB(40272),
      cB = ZB(37170);
    let nB = (() => {
        var BB;
        let IB, ZB, kB = vB.b,
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        return BB = class extends kB {
          constructor(BB, IB, ZB, JB) {
            super(BB, ZB, JB), this.groundColor = (0, TB.l)(this, cB, new GB.c(0, 0, 0)), this.direction = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, void 0)), (0, TB.l)(this, zB), this.direction = IB || oB.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = oB.s.Normalize(BB.subtract(oB.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZB.x, ZB.y, ZB.z, 0, IB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), IB), this
          }
          transferToNodeMaterialEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return BB.setFloat3(IB, ZB.x, ZB.y, ZB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return vB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, IB) {
            BB["HEMILIGHT" + IB] = !0
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.l)()], ZB = [(0, JB.A)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, IB) => {
                BB.groundColor = IB
              }
            },
            metadata: oB
          }, cB, nB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, IB) => {
                BB.direction = IB
              }
            },
            metadata: oB
          }, hB, zB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      hB = !1;

    function zB() {
      hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_3", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.HemisphericLight", nB))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
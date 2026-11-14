export const id = 230;
export const ids = [230];
export const modules = {
  39053: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => sF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35647),
      hF = SF(35623),
      bW = SF(35650),
      dF = SF(38187),
      PF = SF(38386),
      RF = SF(38145),
      iW = SF(37873),
      eF = SF(35625);
    class EF {
      constructor() {
        this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / 0, this._cameraRotationSpeed = 0, this._lastFrameRadius = 0
      }
      get name() {
        return "AutoRotation"
      }
      set zoomStopsAnimation(FF) {
        this._zoomStopsAnimation = FF
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set idleRotationSpeed(FF) {
        this._idleRotationSpeed = FF
      }
      get idleRotationSpeed() {
        return this._idleRotationSpeed
      }
      set idleRotationWaitTime(FF) {
        this._idleRotationWaitTime = FF
      }
      get idleRotationWaitTime() {
        return this._idleRotationWaitTime
      }
      set idleRotationSpinupTime(FF) {
        this._idleRotationSpinupTime = FF
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
      attach(FF) {
        this._attachedCamera = FF;
        const WF = this._attachedCamera.OWF();
        this._onPrePointerObservableObserver = WF.onPrePointerObservable.add((FF => {
          FF.type !== RF.b.POINTERDOWN ? FF.type === RF.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onAfterCheckInputsObserver = FF.onAfterCheckInputsObservable.add((() => {
          if (this._reachTargetAlpha()) return;
          const FF = iW.d.Now;
          let WF = 0;
          null != this._lastFrameTime && (WF = FF - this._lastFrameTime), this._lastFrameTime = FF, this._applyUserInteraction();
          const SF = FF - this._lastInteractionTime - this._idleRotationWaitTime,
            CF = Math.max(Math.min(SF / this._idleRotationSpinupTime, 1), 0);
          this._cameraRotationSpeed = this._idleRotationSpeed * CF, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (WF / 1e3))
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const FF = this._attachedCamera.OWF();
        this._onPrePointerObservableObserver && FF.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
      }
      resetLastInteractionTime(FF) {
        this._lastInteractionTime = FF ?? iW.d.Now
      }
      _reachTargetAlpha() {
        return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < eF.c
      }
      _userIsZooming() {
        return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
      }
      _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) return !1;
        let FF = !1;
        return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (FF = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? FF : this._userIsZooming()
      }
      _applyUserInteraction() {
        this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = iW.d.Now)
      }
      _userIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    SF(39061);
    class QF {
      constructor() {
        this._easingMode = QF.EASINGMODE_EASEIN
      }
      setEasingMode(FF) {
        const WF = Math.min(Math.max(FF, 0), 2);
        this._easingMode = WF
      }
      getEasingMode() {
        return this._easingMode
      }
      easeInCore(FF) {
        throw new Error("You must implement this method")
      }
      ease(FF) {
        switch (this._easingMode) {
          case QF.EASINGMODE_EASEIN:
            return this.easeInCore(FF);
          case QF.EASINGMODE_EASEOUT:
            return 1 - this.easeInCore(1 - FF)
        }
        return FF >= .5 ? .5 * (1 - this.easeInCore(2 * (1 - FF))) + .5 : .5 * this.easeInCore(2 * FF)
      }
    }
    QF.EASINGMODE_EASEIN = 0, QF.EASINGMODE_EASEOUT = 1, QF.EASINGMODE_EASEINOUT = 2;
    var rW = SF(39067);
    class gW {
      constructor() {
        this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
      }
      get name() {
        return "Bouncing"
      }
      get autoTransitionRange() {
        return this._autoTransitionRange
      }
      set autoTransitionRange(FF) {
        if (this._autoTransitionRange === FF) return;
        this._autoTransitionRange = FF;
        const WF = this._attachedCamera;
        WF && (FF ? this._onMeshTargetChangedObserver = WF.onMeshTargetChangedObservable.add((FF => {
          if (FF && (FF.computeWorldMatrix(!0), FF.JWF)) {
            const WF = FF.JWF().diagonalLength;
            this.lowerRadiusTransitionRange = .05 * WF, this.upperRadiusTransitionRange = .05 * WF
          }
        })) : this._onMeshTargetChangedObserver && WF.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(FF) {
        this._attachedCamera = FF, this._onAfterCheckInputsObserver = FF.onAfterCheckInputsObservable.add((() => {
          this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange))
        }))
      }
      detach() {
        this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null)
      }
      _isRadiusAtLimit(FF) {
        return !!this._attachedCamera && (this._attachedCamera.radius === FF && !this._radiusIsAnimating)
      }
      _applyBoundRadiusAnimation(FF) {
        if (!this._attachedCamera) return;
        this._radiusBounceTransition || (gW.EasingFunction.setEasingMode(gW.EasingMode), this._radiusBounceTransition = rW.c.CreateAnimation("radius", rW.c.ANIMATIONTYPE_FLOAT, 60, gW.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attachedCamera.wheelPrecision = 1 / 0, this._attachedCamera.inertialRadiusOffset = 0, this.stopAllAnimations(), this._radiusIsAnimating = !0;
        const WF = rW.c.TransitionTo("radius", this._attachedCamera.radius + FF, this._attachedCamera, this._attachedCamera.OWF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
        WF && this._animatables.push(WF)
      }
      _clearAnimationLocks() {
        this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
      }
    }
    gW.EasingFunction = new class extends QF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        super(), this.amplitude = FF
      }
      easeInCore(FF) {
        const WF = Math.max(0, this.amplitude);
        return Math.pow(FF, 3) - FF * WF * Math.sin(3.141592653589793 * FF)
      }
    }(.3), gW.EasingMode = QF.EASINGMODE_EASEOUT;
    class tW {
      constructor() {
        this.onTargetFramingAnimationEndObservable = new uF.b, this._mode = tW.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1, this._framingTime = 1500, this.autoCorrectCameraLimitsAndSensibility = !0, this._attachedCamera = null, this._isPointerDown = !1, this._lastInteractionTime = -1 / 0, this._animatables = new Array, this._betaIsAnimating = !1
      }
      get name() {
        return "Framing"
      }
      set mode(FF) {
        this._mode = FF
      }
      get mode() {
        return this._mode
      }
      set radiusScale(FF) {
        this._radiusScale = FF
      }
      get radiusScale() {
        return this._radiusScale
      }
      set positionScale(FF) {
        this._positionScale = FF
      }
      get positionScale() {
        return this._positionScale
      }
      set defaultElevation(FF) {
        this._defaultElevation = FF
      }
      get defaultElevation() {
        return this._defaultElevation
      }
      set elevationReturnTime(FF) {
        this._elevationReturnTime = FF
      }
      get elevationReturnTime() {
        return this._elevationReturnTime
      }
      set elevationReturnWaitTime(FF) {
        this._elevationReturnWaitTime = FF
      }
      get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime
      }
      set zoomStopsAnimation(FF) {
        this._zoomStopsAnimation = FF
      }
      get zoomStopsAnimation() {
        return this._zoomStopsAnimation
      }
      set framingTime(FF) {
        this._framingTime = FF
      }
      get framingTime() {
        return this._framingTime
      }
      get attachedNode() {
        return this._attachedCamera
      }
      init() {}
      attach(FF) {
        this._attachedCamera = FF;
        const WF = this._attachedCamera.OWF();
        tW.EasingFunction.setEasingMode(tW.EasingMode), this._onPrePointerObservableObserver = WF.onPrePointerObservable.add((FF => {
          FF.type !== RF.b.POINTERDOWN ? FF.type === RF.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
        })), this._onMeshTargetChangedObserver = FF.onMeshTargetChangedObservable.add((FF => {
          FF && FF.JWF && this.zoomOnMesh(FF, void 0, (() => {
            this.onTargetFramingAnimationEndObservable.notifyObservers()
          }))
        })), this._onAfterCheckInputsObserver = FF.onAfterCheckInputsObservable.add((() => {
          this._applyUserInteraction(), this._maintainCameraAboveGround()
        }))
      }
      detach() {
        if (!this._attachedCamera) return;
        const FF = this._attachedCamera.OWF();
        this._onPrePointerObservableObserver && FF.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver), this._attachedCamera = null
      }
      zoomOnMesh(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        FF.computeWorldMatrix(!0);
        const CF = FF.JWF().boundingBox;
        this.zoomOnBoundingInfo(CF.minimumWorld, CF.maximumWorld, WF, SF)
      }
      zoomOnMeshHierarchy(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        FF.computeWorldMatrix(!0);
        const CF = FF.getHierarchyBoundingVectors(!0);
        this.zoomOnBoundingInfo(CF.min, CF.max, WF, SF)
      }
      zoomOnMeshesHierarchy(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const CF = new hF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          AF = new hF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let uF = 0; uF < FF.length; uF++) {
          const WF = FF[uF].getHierarchyBoundingVectors(!0);
          hF.r.CheckExtends(WF.min, CF, AF), hF.r.CheckExtends(WF.max, CF, AF)
        }
        this.zoomOnBoundingInfo(CF, AF, WF, SF)
      }
      zoomOnBoundingInfo(FF, WF) {
        let SF, CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (!this._attachedCamera) return !1;
        const uF = FF.y,
          bW = uF + (WF.y - uF) * this._positionScale,
          dF = WF.subtract(FF).scale(.5);
        if (!isFinite(bW)) return !1;
        if (CF) SF = new hF.r(0, bW, 0);
        else {
          const WF = FF.add(dF);
          SF = new hF.r(WF.x, bW, WF.z)
        }
        this._vectorTransition || (this._vectorTransition = rW.c.CreateAnimation("target", rW.c.ANIMATIONTYPE_VECTOR3, 60, tW.EasingFunction)), this._betaIsAnimating = !0;
        let PF = rW.c.TransitionTo("target", SF, this._attachedCamera, this._attachedCamera.OWF(), 60, this._vectorTransition, this._framingTime);
        PF && this._animatables.push(PF);
        let RF = 0;
        if (this._mode === tW.FitFrustumSidesMode) {
          const SF = this._calculateLowerRadiusFromModelBoundingSphere(FF, WF);
          this.autoCorrectCameraLimitsAndSensibility && (this._attachedCamera.lowerRadiusLimit = dF.length() + this._attachedCamera.minZ), RF = SF
        } else this._mode === tW.IgnoreBoundsSizeMode && (RF = this._calculateLowerRadiusFromModelBoundingSphere(FF, WF), this.autoCorrectCameraLimitsAndSensibility && null === this._attachedCamera.lowerRadiusLimit && (this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ));
        if (this.autoCorrectCameraLimitsAndSensibility) {
          const SF = WF.subtract(FF).length();
          this._attachedCamera.panningSensibility = 5e3 / SF, this._attachedCamera.wheelPrecision = 100 / RF
        }
        return this._radiusTransition || (this._radiusTransition = rW.c.CreateAnimation("radius", rW.c.ANIMATIONTYPE_FLOAT, 60, tW.EasingFunction)), PF = rW.c.TransitionTo("radius", RF, this._attachedCamera, this._attachedCamera.OWF(), 60, this._radiusTransition, this._framingTime, (() => {
          this.stopAllAnimations(), AF && AF(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
        })), PF && this._animatables.push(PF), !0
      }
      _calculateLowerRadiusFromModelBoundingSphere(FF, WF) {
        const SF = this._attachedCamera;
        if (!SF) return 0;
        let CF = SF._calculateLowerRadiusFromModelBoundingSphere(FF, WF, this._radiusScale);
        return SF.lowerRadiusLimit && this._mode === tW.IgnoreBoundsSizeMode && (CF = CF < SF.lowerRadiusLimit ? SF.lowerRadiusLimit : CF), SF.upperRadiusLimit && (CF = CF > SF.upperRadiusLimit ? SF.upperRadiusLimit : CF), CF
      }
      _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) return;
        const FF = iW.d.Now - this._lastInteractionTime,
          WF = .5 * Math.PI - this._defaultElevation,
          SF = .5 * Math.PI;
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > SF && FF >= this._elevationReturnWaitTime) {
          this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = rW.c.CreateAnimation("beta", rW.c.ANIMATIONTYPE_FLOAT, 60, tW.EasingFunction));
          const FF = rW.c.TransitionTo("beta", WF, this._attachedCamera, this._attachedCamera.OWF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
            this._clearAnimationLocks(), this.stopAllAnimations()
          }));
          FF && this._animatables.push(FF)
        }
      }
      _clearAnimationLocks() {
        this._betaIsAnimating = !1
      }
      _applyUserInteraction() {
        this.isUserIsMoving && (this._lastInteractionTime = iW.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
      }
      stopAllAnimations() {
        for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
      }
      get isUserIsMoving() {
        return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPanningY || this._isPointerDown)
      }
    }
    tW.EasingFunction = new class extends QF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        super(), this.exponent = FF
      }
      easeInCore(FF) {
        return this.exponent <= 0 ? FF : (Math.exp(this.exponent * FF) - 1) / (Math.exp(this.exponent) - 1)
      }
    }, tW.EasingMode = QF.EASINGMODE_EASEINOUT, tW.IgnoreBoundsSizeMode = 0, tW.FitFrustumSidesMode = 1;
    var TF = SF(38183),
      aW = SF(38176),
      kW = SF(38207),
      qW = SF(38065);
    let VF = (() => {
        var FF;
        let WF, SF = [],
          uF = [];
        return FF = class {
          constructor() {
            this._currentMousePointerIdDown = -1, this.buttons = (0, CF.k)(this, SF, [0, 1, 2]), this._pointerInput = (0, CF.k)(this, uF)
          }
          attachControl(FF) {
            FF = qW.h.BackCompatCameraNoPreventDefault(arguments);
            const WF = this.camera.sC(),
              SF = WF.getInputElement();
            let CF = 0,
              AF = null;
            this._pointA = null, this._pointB = null, this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._buttonsPressed = 0, this._pointerInput = uF => {
              const hF = uF.event,
                bW = "touch" === hF.pointerType;
              if (uF.type !== RF.b.POINTERMOVE && -1 === this.buttons.indexOf(hF.button)) return;
              const dF = hF.target;
              if (this._altKey = hF.altKey, this._ctrlKey = hF.ctrlKey, this._metaKey = hF.metaKey, this._shiftKey = hF.shiftKey, this._buttonsPressed = hF.buttons, WF.isPointerLock) {
                const FF = hF.movementX,
                  WF = hF.movementY;
                this.onTouch(null, FF, WF), this._pointA = null, this._pointB = null
              } else {
                if (uF.type !== RF.b.POINTERDOWN && uF.type !== RF.b.POINTERDOUBLETAP && bW && this._pointA?.pointerId !== hF.pointerId && this._pointB?.pointerId !== hF.pointerId) return;
                if (uF.type !== RF.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !bW)
                  if (uF.type === RF.b.POINTERDOUBLETAP) this.onDoubleTap(hF.pointerType, hF);
                  else if (uF.type !== RF.b.POINTERUP || this._currentMousePointerIdDown !== hF.pointerId && !bW) {
                  if (uF.type === RF.b.POINTERMOVE)
                    if (FF || hF.preventDefault(), this._pointA && null === this._pointB) {
                      const FF = hF.clientX - this._pointA.x,
                        WF = hF.clientY - this._pointA.y;
                      this._pointA.x = hF.clientX, this._pointA.y = hF.clientY, this.onTouch(this._pointA, FF, WF)
                    } else if (this._pointA && this._pointB) {
                    const FF = this._pointA.pointerId === hF.pointerId ? this._pointA : this._pointB;
                    FF.x = hF.clientX, FF.y = hF.clientY;
                    const WF = this._pointA.x - this._pointB.x,
                      SF = this._pointA.y - this._pointB.y,
                      bW = WF * WF + SF * SF,
                      dF = {
                        x: (this._pointA.x + this._pointB.x) / 2,
                        y: (this._pointA.y + this._pointB.y) / 2,
                        pointerId: hF.pointerId,
                        type: uF.type
                      };
                    this.onMultiTouch(this._pointA, this._pointB, CF, bW, AF, dF), AF = dF, CF = bW
                  }
                } else {
                  try {
                    dF?.releasePointerCapture(hF.pointerId)
                  } catch (PF) {}
                  bW || (this._pointB = null), WF._badOS ? this._pointA = this._pointB = null : this._pointB && this._pointA && this._pointA.pointerId == hF.pointerId ? (this._pointA = this._pointB, this._pointB = null) : this._pointA && this._pointB && this._pointB.pointerId == hF.pointerId ? this._pointB = null : this._pointA = this._pointB = null, (0 !== CF || AF) && (this.onMultiTouch(this._pointA, this._pointB, CF, 0, AF, null), CF = 0, AF = null), this._currentMousePointerIdDown = -1, this.onButtonUp(hF), FF || hF.preventDefault()
                } else {
                  try {
                    dF?.setPointerCapture(hF.pointerId)
                  } catch (PF) {}
                  if (null === this._pointA) this._pointA = {
                    x: hF.clientX,
                    y: hF.clientY,
                    pointerId: hF.pointerId,
                    type: hF.pointerType,
                    button: hF.button
                  };
                  else {
                    if (null !== this._pointB) return;
                    this._pointB = {
                      x: hF.clientX,
                      y: hF.clientY,
                      pointerId: hF.pointerId,
                      type: hF.pointerType,
                      button: hF.button
                    }
                  } - 1 !== this._currentMousePointerIdDown || bW || (this._currentMousePointerIdDown = hF.pointerId), this.onButtonDown(hF), FF || (hF.preventDefault(), SF && SF.focus())
                }
              }
            }, this._observer = this.camera.OWF()._inputManager._addCameraPointerObserver(this._pointerInput, RF.b.POINTERDOWN | RF.b.POINTERUP | RF.b.POINTERMOVE | RF.b.POINTERDOUBLETAP), this._onLostFocus = () => {
              this._pointA = this._pointB = null, CF = 0, AF = null, this.onLostFocus()
            }, this._contextMenuBind = FF => this.onContextMenu(FF), SF && SF.addEventListener("contextmenu", this._contextMenuBind, !1);
            const uF = this.camera.OWF().sC().getHostWindow();
            uF && qW.h.RegisterTopRootEvents(uF, [{
              name: "blur",
              handler: this._onLostFocus
            }])
          }
          detachControl() {
            if (this._onLostFocus) {
              const FF = this.camera.OWF().sC().getHostWindow();
              FF && qW.h.UnregisterTopRootEvents(FF, [{
                name: "blur",
                handler: this._onLostFocus
              }])
            }
            if (this._observer) {
              if (this.camera.OWF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
                const FF = this.camera.OWF().sC().getInputElement();
                FF && FF.removeEventListener("contextmenu", this._contextMenuBind)
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
          onDoubleTap(FF, WF) {}
          onTouch(FF, WF, SF) {}
          onMultiTouch(FF, WF, SF, CF, AF, uF) {}
          onContextMenu(FF) {
            FF.preventDefault()
          }
          onButtonDown(FF) {}
          onButtonUp(FF) {}
          onLostFocus() {}
        }, (() => {
          const hF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: FF => "buttons" in FF,
              get: FF => FF.buttons,
              set: (FF, WF) => {
                FF.buttons = WF
              }
            },
            metadata: hF
          }, SF, uF), hF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hF
          })
        })(), FF
      })(),
      NF = (() => {
        var FF;
        let WF, SF, uF, hF = VF,
          bW = [],
          dF = [],
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        return FF = class extends hF {
          constructor() {
            super(...arguments), this.pinchZoom = (0, CF.k)(this, bW, !0), this.multiTouchPanning = ((0, CF.k)(this, dF), (0, CF.k)(this, PF, !0)), this.multiTouchPanAndZoom = ((0, CF.k)(this, RF), (0, CF.k)(this, iW, !0)), this._isPinching = ((0, CF.k)(this, eF), !1), this._twoFingerActivityCount = 0, this._shouldStartPinchZoom = !1
          }
          _computePinchZoom(FF, WF) {}
          _computeMultiTouchPanning(FF, WF) {}
          onMultiTouch(FF, WF, SF, CF, AF, uF) {
            0 === SF && null === AF || 0 === CF && null === uF || (this.multiTouchPanAndZoom ? (this._computePinchZoom(SF, CF), this._computeMultiTouchPanning(AF, uF)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldStartPinchZoom ? (this._computePinchZoom(SF, CF), this._isPinching = !0) : this._computeMultiTouchPanning(AF, uF)) : this.multiTouchPanning ? this._computeMultiTouchPanning(AF, uF) : this.pinchZoom && this._computePinchZoom(SF, CF))
          }
          onButtonUp(FF) {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
          onLostFocus() {
            this._twoFingerActivityCount = 0, this._isPinching = !1
          }
        }, (() => {
          const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(hF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "pinchZoom",
            static: !1,
            private: !1,
            access: {
              has: FF => "pinchZoom" in FF,
              get: FF => FF.pinchZoom,
              set: (FF, WF) => {
                FF.pinchZoom = WF
              }
            },
            metadata: EF
          }, bW, dF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "multiTouchPanning",
            static: !1,
            private: !1,
            access: {
              has: FF => "multiTouchPanning" in FF,
              get: FF => FF.multiTouchPanning,
              set: (FF, WF) => {
                FF.multiTouchPanning = WF
              }
            },
            metadata: EF
          }, PF, RF), (0, CF.j)(null, null, uF, {
            kind: "field",
            name: "multiTouchPanAndZoom",
            static: !1,
            private: !1,
            access: {
              has: FF => "multiTouchPanAndZoom" in FF,
              get: FF => FF.multiTouchPanAndZoom,
              set: (FF, WF) => {
                FF.multiTouchPanAndZoom = WF
              }
            },
            metadata: EF
          }, iW, eF), EF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EF
          })
        })(), FF
      })(),
      DF = (() => {
        var FF;
        let WF, SF, uF, hF, bW, dF, PF, RF = NF,
          iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [],
          tW = [],
          TF = [],
          aW = [],
          kW = [],
          qW = [],
          VF = [],
          DF = [],
          LF = [];
        return FF = class extends RF {
          constructor() {
            super(...arguments), this.buttons = (0, CF.k)(this, iW, [0, 1, 2]), this.angularSensibilityX = ((0, CF.k)(this, eF), (0, CF.k)(this, EF, 1e3)), this.angularSensibilityY = ((0, CF.k)(this, QF), (0, CF.k)(this, rW, 1e3)), this.pinchPrecision = ((0, CF.k)(this, gW), (0, CF.k)(this, tW, 12)), this.pinchDeltaPercentage = ((0, CF.k)(this, TF), (0, CF.k)(this, aW, 0)), this.useNaturalPinchZoom = ((0, CF.k)(this, kW), (0, CF.k)(this, qW, !1)), this.panningSensibility = ((0, CF.k)(this, VF), (0, CF.k)(this, DF, 1e3)), this.pinchInwards = ((0, CF.k)(this, LF), !0), this._activeEntry = null, this._pointerLockConditions = {
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
          _computeMultiTouchPanning(FF, WF) {
            if (FF && WF) {
              const SF = WF.x - FF.x,
                CF = WF.y - FF.y,
                AF = this.camera.movement.input.getEntry("pointer", "pan"),
                uF = AF?.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
              0 !== uF && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -SF * uF, this.camera.movement.panAccumulatedPixels.y += CF * uF)
            }
          }
          _computePinchZoom(WF, SF) {
            const CF = this.camera.radius || FF.MinimumRadiusForPinch;
            if (this.useNaturalPinchZoom) this.camera.radius = CF * Math.sqrt(WF) / Math.sqrt(SF);
            else if (this.pinchDeltaPercentage) {
              const FF = .001 * (SF - WF) * CF * this.pinchDeltaPercentage;
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += FF
            } else {
              const FF = (SF - WF) / (this.pinchPrecision * (this.pinchInwards ? 1 : -1) * (this.angularSensibilityX + this.angularSensibilityY) / 2);
              this.camera.movement.activeInput = !0, this.camera.movement.zoomAccumulatedPixels += FF
            }
          }
          onTouch(FF, WF, SF) {
            const CF = this._activeEntry ?? (this.camera.sC().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
            if (CF)
              if ("pan" === CF.interaction) {
                const FF = CF.sensitivity ?? (0 !== this.panningSensibility ? 1 / this.panningSensibility : 0);
                0 !== FF && (this.camera.movement.activeInput = !0, this.camera.movement.panAccumulatedPixels.x += -WF * FF, this.camera.movement.panAccumulatedPixels.y += SF * FF)
              } else if ("rotate" === CF.interaction) {
              const FF = CF.NCF ?? CF.sensitivity ?? 1 / this.angularSensibilityX,
                AF = CF.DCF ?? CF.sensitivity ?? 1 / this.angularSensibilityY;
              this.camera.movement.activeInput = !0, this.camera.movement.rotationAccumulatedPixels.x += -WF * FF, this.camera.movement.rotationAccumulatedPixels.y += -SF * AF
            }
          }
          onDoubleTap() {
            this.camera.useInputToRestoreState && this.camera.restoreState()
          }
          onMultiTouch(FF, WF, SF, CF, AF, uF) {
            this._shouldStartPinchZoom = this._twoFingerActivityCount < 20 && Math.abs(Math.sqrt(CF) - Math.sqrt(SF)) > this.camera.pinchToPanMaxDistance, super.onMultiTouch(FF, WF, SF, CF, AF, uF)
          }
          onButtonDown(FF) {
            this._pointerConditions.button = FF.button, this._pointerModifiers.ctrl = FF.ctrlKey, this._pointerModifiers.alt = FF.altKey, this._pointerModifiers.shift = FF.shiftKey, this._activeEntry = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions), super.onButtonDown(FF)
          }
          onButtonUp(FF) {
            this._activeEntry = null, super.onButtonUp(FF)
          }
          onLostFocus() {
            this._activeEntry = null, super.onLostFocus()
          }
        }, (() => {
          const NF = "function" === typeof Symbol && Symbol.metadata ? Object.create(RF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], hF = [(0, AF.H)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "buttons",
            static: !1,
            private: !1,
            access: {
              has: FF => "buttons" in FF,
              get: FF => FF.buttons,
              set: (FF, WF) => {
                FF.buttons = WF
              }
            },
            metadata: NF
          }, iW, eF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "angularSensibilityX",
            static: !1,
            private: !1,
            access: {
              has: FF => "angularSensibilityX" in FF,
              get: FF => FF.angularSensibilityX,
              set: (FF, WF) => {
                FF.angularSensibilityX = WF
              }
            },
            metadata: NF
          }, EF, QF), (0, CF.j)(null, null, uF, {
            kind: "field",
            name: "angularSensibilityY",
            static: !1,
            private: !1,
            access: {
              has: FF => "angularSensibilityY" in FF,
              get: FF => FF.angularSensibilityY,
              set: (FF, WF) => {
                FF.angularSensibilityY = WF
              }
            },
            metadata: NF
          }, rW, gW), (0, CF.j)(null, null, hF, {
            kind: "field",
            name: "pinchPrecision",
            static: !1,
            private: !1,
            access: {
              has: FF => "pinchPrecision" in FF,
              get: FF => FF.pinchPrecision,
              set: (FF, WF) => {
                FF.pinchPrecision = WF
              }
            },
            metadata: NF
          }, tW, TF), (0, CF.j)(null, null, bW, {
            kind: "field",
            name: "pinchDeltaPercentage",
            static: !1,
            private: !1,
            access: {
              has: FF => "pinchDeltaPercentage" in FF,
              get: FF => FF.pinchDeltaPercentage,
              set: (FF, WF) => {
                FF.pinchDeltaPercentage = WF
              }
            },
            metadata: NF
          }, aW, kW), (0, CF.j)(null, null, dF, {
            kind: "field",
            name: "useNaturalPinchZoom",
            static: !1,
            private: !1,
            access: {
              has: FF => "useNaturalPinchZoom" in FF,
              get: FF => FF.useNaturalPinchZoom,
              set: (FF, WF) => {
                FF.useNaturalPinchZoom = WF
              }
            },
            metadata: NF
          }, qW, VF), (0, CF.j)(null, null, PF, {
            kind: "field",
            name: "panningSensibility",
            static: !1,
            private: !1,
            access: {
              has: FF => "panningSensibility" in FF,
              get: FF => FF.panningSensibility,
              set: (FF, WF) => {
                FF.panningSensibility = WF
              }
            },
            metadata: NF
          }, DF, LF), NF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NF
          })
        })(), FF.MinimumRadiusForPinch = .001, FF
      })();
    kW.b.ArcRotateCameraPointersInput = DF;
    var LF = SF(38147);
    let mW = (() => {
      var FF;
      let WF, SF, uF, bW, dF, PF, RF, iW, eF, EF, QF, rW = [],
        gW = [],
        tW = [],
        TF = [],
        aW = [],
        kW = [],
        VF = [],
        NF = [],
        DF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [];
      return FF = class {
        constructor() {
          this.camera = (0, CF.k)(this, rW), this.keysUp = (0, CF.k)(this, gW, [38]), this.keysDown = ((0, CF.k)(this, tW), (0, CF.k)(this, TF, [40])), this.keysLeft = ((0, CF.k)(this, aW), (0, CF.k)(this, kW, [37])), this.keysRight = ((0, CF.k)(this, VF), (0, CF.k)(this, NF, [39])), this.keysReset = ((0, CF.k)(this, DF), (0, CF.k)(this, mW, [220])), this.keysZoomIn = ((0, CF.k)(this, OF), (0, CF.k)(this, xW, [187, 107])), this.keysZoomOut = ((0, CF.k)(this, ZF), (0, CF.k)(this, oF, [189, 109])), this.panningSensibility = ((0, CF.k)(this, YF), (0, CF.k)(this, MF, 50)), this.zoomingSensibility = ((0, CF.k)(this, cW), (0, CF.k)(this, GF, 25)), this.angularSpeed = ((0, CF.k)(this, zW), (0, CF.k)(this, IF, .01)), this._useAltToZoom = ((0, CF.k)(this, fF), !0), this._keys = new Array, this._keyboardModifiers = {
            ctrl: !1,
            alt: !1
          }, this._keyboardConditions = {
            modifiers: this._keyboardModifiers
          }, this._rotateDirection = new hF.n, this._panDirection = new hF.n
        }
        get useAltToZoom() {
          return this._useAltToZoom
        }
        set useAltToZoom(FF) {
          this._useAltToZoom = FF, this._applyUseAltToZoomToInputMap()
        }
        _applyUseAltToZoomToInputMap() {
          if (!this.camera?.movement) return;
          const FF = this.camera.movement.input,
            WF = FF.getEntry("keyboard", "zoom", {
              modifiers: {
                alt: !0
              }
            });
          !this._useAltToZoom && WF ? FF.inputMap.splice(FF.inputMap.indexOf(WF), 1) : this._useAltToZoom && !WF && FF.addEntry({
            source: "keyboard",
            modifiers: {
              alt: !0
            },
            interaction: "zoom"
          })
        }
        attachControl(FF) {
          FF = qW.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.OWF(), this._engine = this._scene.sC(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((WF => {
            const SF = WF.event;
            if (!SF.metaKey)
              if (WF.type === LF.e.KEYDOWN) {
                if (this._ctrlPressed = SF.ctrlKey, this._altPressed = SF.altKey, -1 !== this.keysUp.indexOf(SF.keyCode) || -1 !== this.keysDown.indexOf(SF.keyCode) || -1 !== this.keysLeft.indexOf(SF.keyCode) || -1 !== this.keysRight.indexOf(SF.keyCode) || -1 !== this.keysReset.indexOf(SF.keyCode) || -1 !== this.keysZoomIn.indexOf(SF.keyCode) || -1 !== this.keysZoomOut.indexOf(SF.keyCode)) {
                  -1 === this._keys.indexOf(SF.keyCode) && this._keys.push(SF.keyCode), SF.preventDefault && (FF || SF.preventDefault())
                }
              } else if (-1 !== this.keysUp.indexOf(SF.keyCode) || -1 !== this.keysDown.indexOf(SF.keyCode) || -1 !== this.keysLeft.indexOf(SF.keyCode) || -1 !== this.keysRight.indexOf(SF.keyCode) || -1 !== this.keysReset.indexOf(SF.keyCode) || -1 !== this.keysZoomIn.indexOf(SF.keyCode) || -1 !== this.keysZoomOut.indexOf(SF.keyCode)) {
              const WF = this._keys.indexOf(SF.keyCode);
              WF >= 0 && this._keys.splice(WF, 1), SF.preventDefault && (FF || SF.preventDefault())
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const FF = this.camera,
              WF = FF.movement.input;
            this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
            const SF = this._rotateDirection.set(0, 0),
              CF = this._panDirection.set(0, 0);
            let AF = 0,
              uF = 0;
            for (let hF = 0; hF < this._keys.length; hF++) {
              const bW = this._keys[hF];
              if (this._keyboardConditions.key = bW, -1 === this.keysReset.indexOf(bW)) {
                const FF = WF.resolveInteraction("keyboard", this._keyboardConditions);
                if (FF)
                  if ("pan" === FF.interaction) uF = Math.max(uF, FF.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(bW) ? CF.x -= 1 : -1 !== this.keysRight.indexOf(bW) ? CF.x += 1 : -1 !== this.keysUp.indexOf(bW) ? CF.y += 1 : -1 !== this.keysDown.indexOf(bW) && (CF.y -= 1);
                  else if ("zoom" === FF.interaction) {
                  const SF = FF.sensitivity ?? 1 / this.zoomingSensibility; - 1 !== this.keysUp.indexOf(bW) || -1 !== this.keysZoomIn.indexOf(bW) ? WF.handlers.zoom(SF) : -1 === this.keysDown.indexOf(bW) && -1 === this.keysZoomOut.indexOf(bW) || WF.handlers.zoom(-SF)
                } else "rotate" === FF.interaction && (AF = Math.max(AF, FF.sensitivity ?? this.angularSpeed), -1 !== this.keysLeft.indexOf(bW) ? SF.x -= 1 : -1 !== this.keysRight.indexOf(bW) ? SF.x += 1 : -1 !== this.keysUp.indexOf(bW) ? SF.y -= 1 : -1 !== this.keysDown.indexOf(bW) && (SF.y += 1))
              } - 1 !== this.keysReset.indexOf(bW) && FF.useInputToRestoreState && FF.restoreState()
            }
            0 === SF.x && 0 === SF.y || (SF.normalize().scaleInPlace(AF), WF.handlers.rotate(SF.x, SF.y)), 0 === CF.x && 0 === CF.y || (CF.normalize().scaleInPlace(uF), WF.handlers.pan(CF.x, CF.y))
          }
        }
        getClassName() {
          return "ArcRotateCameraKeyboardMoveInput"
        }
        getSimpleName() {
          return "keyboard"
        }
      }, (() => {
        const hF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.H)()], eF = [(0, AF.H)()], EF = [(0, AF.H)()], QF = [(0, AF.H)()], (0, CF.j)(FF, null, QF, {
          kind: "getter",
          name: "useAltToZoom",
          static: !1,
          private: !1,
          access: {
            has: FF => "useAltToZoom" in FF,
            get: FF => FF.useAltToZoom
          },
          metadata: hF
        }, null, rW), (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysUp" in FF,
            get: FF => FF.keysUp,
            set: (FF, WF) => {
              FF.keysUp = WF
            }
          },
          metadata: hF
        }, gW, tW), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysDown" in FF,
            get: FF => FF.keysDown,
            set: (FF, WF) => {
              FF.keysDown = WF
            }
          },
          metadata: hF
        }, TF, aW), (0, CF.j)(null, null, uF, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysLeft" in FF,
            get: FF => FF.keysLeft,
            set: (FF, WF) => {
              FF.keysLeft = WF
            }
          },
          metadata: hF
        }, kW, VF), (0, CF.j)(null, null, bW, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysRight" in FF,
            get: FF => FF.keysRight,
            set: (FF, WF) => {
              FF.keysRight = WF
            }
          },
          metadata: hF
        }, NF, DF), (0, CF.j)(null, null, dF, {
          kind: "field",
          name: "keysReset",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysReset" in FF,
            get: FF => FF.keysReset,
            set: (FF, WF) => {
              FF.keysReset = WF
            }
          },
          metadata: hF
        }, mW, OF), (0, CF.j)(null, null, PF, {
          kind: "field",
          name: "keysZoomIn",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysZoomIn" in FF,
            get: FF => FF.keysZoomIn,
            set: (FF, WF) => {
              FF.keysZoomIn = WF
            }
          },
          metadata: hF
        }, xW, ZF), (0, CF.j)(null, null, RF, {
          kind: "field",
          name: "keysZoomOut",
          static: !1,
          private: !1,
          access: {
            has: FF => "keysZoomOut" in FF,
            get: FF => FF.keysZoomOut,
            set: (FF, WF) => {
              FF.keysZoomOut = WF
            }
          },
          metadata: hF
        }, oF, YF), (0, CF.j)(null, null, iW, {
          kind: "field",
          name: "panningSensibility",
          static: !1,
          private: !1,
          access: {
            has: FF => "panningSensibility" in FF,
            get: FF => FF.panningSensibility,
            set: (FF, WF) => {
              FF.panningSensibility = WF
            }
          },
          metadata: hF
        }, MF, cW), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "zoomingSensibility",
          static: !1,
          private: !1,
          access: {
            has: FF => "zoomingSensibility" in FF,
            get: FF => FF.zoomingSensibility,
            set: (FF, WF) => {
              FF.zoomingSensibility = WF
            }
          },
          metadata: hF
        }, GF, zW), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "angularSpeed",
          static: !1,
          private: !1,
          access: {
            has: FF => "angularSpeed" in FF,
            get: FF => FF.angularSpeed,
            set: (FF, WF) => {
              FF.angularSpeed = WF
            }
          },
          metadata: hF
        }, IF, fF), hF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hF
        })
      })(), FF
    })();
    kW.b.ArcRotateCameraKeyboardMoveInput = mW;
    var OF = SF(36181),
      xW = SF(38152);
    let ZF = (() => {
      var FF;
      let WF, SF, uF, dF = [],
        PF = [],
        iW = [],
        EF = [],
        QF = [],
        rW = [];
      return FF = class {
        constructor() {
          this.wheelPrecision = (0, CF.k)(this, dF, 3), this.zoomToMouseLocation = ((0, CF.k)(this, PF), (0, CF.k)(this, iW, !1)), this.wheelDeltaPercentage = ((0, CF.k)(this, EF), (0, CF.k)(this, QF, 0)), this.customComputeDeltaFromMouseWheel = ((0, CF.k)(this, rW), null), this._viewOffset = new hF.r(0, 0, 0), this._globalOffset = new hF.r(0, 0, 0), this._inertialPanning = hF.r.Zero(), this._zoomToMouseRadiusOffset = 0
        }
        _computeDeltaFromMouseWheelLegacyEvent(FF, WF) {
          let SF;
          const CF = .01 * FF * this.wheelDeltaPercentage * WF;
          return SF = FF > 0 ? CF / (1 + this.wheelDeltaPercentage) : CF * (1 + this.wheelDeltaPercentage), SF
        }
        attachControl(FF) {
          FF = qW.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = WF => {
            if (WF.type !== RF.b.POINTERWHEEL) return;
            const SF = WF.event;
            let CF;
            const AF = SF.deltaMode === xW.c.DOM_DELTA_LINE ? 40 : 1,
              uF = -SF.deltaY * AF;
            if (this.customComputeDeltaFromMouseWheel) CF = this.customComputeDeltaFromMouseWheel(uF, this, SF);
            else if (this.wheelDeltaPercentage) {
              if (CF = this._computeDeltaFromMouseWheelLegacyEvent(uF, this.camera.radius), CF > 0) {
                const FF = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
                let WF = this.camera.radius,
                  SF = FF + CF;
                for (let CF = 0; CF < 20 && !(WF <= SF) && !(Math.abs(SF * this.camera.inertia) < .001); CF++) WF -= SF, SF *= this.camera.inertia;
                WF = (0, bW.Clamp)(WF, 0, Number.MAX_VALUE), CF = this._computeDeltaFromMouseWheelLegacyEvent(uF, WF)
              }
            } else {
              const FF = this.camera.movement.input.getEntry("wheel", "zoom");
              CF = uF * (FF?.sensitivity ?? 1 / (40 * this.wheelPrecision))
            }
            CF && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(CF)) : this.camera.movement.zoomAccumulatedPixels += CF), SF.preventDefault && (FF || SF.preventDefault())
          }, this._observer = this.camera.OWF()._inputManager._addCameraPointerObserver(this._wheel, RF.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.DuF(0)
        }
        detachControl() {
          this._observer && (this.camera.OWF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
        }
        checkInputs() {
          if (!this.zoomToMouseLocation) return;
          const FF = this.camera;
          if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(FF.inertialAlphaOffset) + Math.abs(FF.inertialBetaOffset) + Math.abs(FF.inertialRadiusOffset)) {
            this._updateHitPlane(), FF.target.addInPlace(this._inertialPanning), FF.radius -= this._zoomToMouseRadiusOffset;
            const WF = FF.movement.getFrameIndependentDecay(FF.inertia);
            this._inertialPanning.scaleInPlace(WF), this._zoomToMouseRadiusOffset *= WF, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < eF.c && (this._zoomToMouseRadiusOffset = 0)
          }
        }
        getClassName() {
          return "ArcRotateCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
        _updateHitPlane() {
          const FF = this.camera,
            WF = FF.target.subtract(FF.position);
          this._hitPlane = OF.d.FromPositionAndNormal(FF.target, WF)
        }
        _getPosition() {
          const FF = this.camera,
            WF = FF.OWF(),
            SF = WF.createPickingRay(WF.pointerX, WF.pointerY, hF.b.Identity(), FF, !1);
          0 === FF.targetScreenOffset.x && 0 === FF.targetScreenOffset.y || (this._viewOffset.set(FF.targetScreenOffset.x, FF.targetScreenOffset.y, 0), FF.getViewMatrix().invertToRef(FF._cameraTransformMatrix), this._globalOffset = hF.r.TransformNormal(this._viewOffset, FF._cameraTransformMatrix), SF.origin.addInPlace(this._globalOffset));
          let CF = 0;
          return this._hitPlane && (CF = SF.intersectsPlane(this._hitPlane) ?? 0), SF.origin.addInPlace(SF.direction.scaleInPlace(CF))
        }
        _zoomToMouse(FF) {
          const WF = this.camera,
            SF = 1 - WF.inertia,
            CF = WF.movement.getFrameIndependentInputScale(WF.inertia);
          if (WF.lowerRadiusLimit) {
            const AF = WF.lowerRadiusLimit ?? 0;
            WF.radius - (this._zoomToMouseRadiusOffset + FF * CF) / SF < AF && (FF = ((WF.radius - AF) * SF - this._zoomToMouseRadiusOffset) / CF)
          }
          if (WF.upperRadiusLimit) {
            const AF = WF.upperRadiusLimit ?? 0;
            WF.radius - (this._zoomToMouseRadiusOffset + FF * CF) / SF > AF && (FF = ((WF.radius - AF) * SF - this._zoomToMouseRadiusOffset) / CF)
          }
          const AF = FF / SF / WF.radius,
            uF = this._getPosition(),
            bW = hF.j.HC[6];
          uF.subtractToRef(WF.target, bW), bW.scaleInPlace(AF), bW.scaleInPlace(SF), bW.scaleInPlace(CF), this._inertialPanning.addInPlace(bW), this._zoomToMouseRadiusOffset += FF * CF
        }
        _zeroIfClose(FF) {
          Math.abs(FF.x) < eF.c && (FF.x = 0), Math.abs(FF.y) < eF.c && (FF.y = 0), Math.abs(FF.z) < eF.c && (FF.z = 0)
        }
      }, (() => {
        const hF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "wheelPrecision",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelPrecision" in FF,
            get: FF => FF.wheelPrecision,
            set: (FF, WF) => {
              FF.wheelPrecision = WF
            }
          },
          metadata: hF
        }, dF, PF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "zoomToMouseLocation",
          static: !1,
          private: !1,
          access: {
            has: FF => "zoomToMouseLocation" in FF,
            get: FF => FF.zoomToMouseLocation,
            set: (FF, WF) => {
              FF.zoomToMouseLocation = WF
            }
          },
          metadata: hF
        }, iW, EF), (0, CF.j)(null, null, uF, {
          kind: "field",
          name: "wheelDeltaPercentage",
          static: !1,
          private: !1,
          access: {
            has: FF => "wheelDeltaPercentage" in FF,
            get: FF => FF.wheelDeltaPercentage,
            set: (FF, WF) => {
              FF.wheelDeltaPercentage = WF
            }
          },
          metadata: hF
        }, QF, rW), hF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hF
        })
      })(), FF
    })();
    kW.b.ArcRotateCameraMouseWheelInput = ZF;
    var oF, YF, MF = SF(37855);
    class cW extends kW.d {
      constructor(FF) {
        super(FF)
      }
      addMouseWheel() {
        return this.add(new ZF), this
      }
      addPointers() {
        return this.add(new DF), this
      }
      addKeyboard() {
        return this.add(new mW), this
      }
    }(oF = cW.prototype).addVRDeviceOrientation ?? (oF.addVRDeviceOrientation = (0, MF.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (YF = cW.prototype).addGamepad ?? (YF.addGamepad = (0, MF.j)("ArcRotateCameraInputsManager", "addGamepad"));
    var GF = SF(35660),
      zW = SF(38199),
      IF = SF(38201);
    class fF extends zW.e {
      constructor(FF, WF, SF) {
        super(FF, WF, SF), this.input = new IF.d({
          pan: (FF, WF) => {
            this.panAccumulatedPixels.x += FF, this.panAccumulatedPixels.y += WF
          },
          rotate: (FF, WF) => {
            this.rotationAccumulatedPixels.x += FF, this.rotationAccumulatedPixels.y += WF
          },
          zoom: FF => {
            this.zoomAccumulatedPixels += FF
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

    function yW(FF, WF) {
      return isNaN(FF) ? WF : FF
    }
    let sF = (() => {
        var FF;
        let WF, SF, dF, RF, iW, QF, rW, kW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF, MF, GF, zW, IF, sF, nF, HF, KF, wF, XF, UF = aW.h,
          BF = [],
          jW = [],
          vW = [],
          JF = [],
          pF = [],
          lF = [],
          FW = [],
          WW = [],
          SW = [],
          CW = [],
          AW = [],
          uW = [],
          hW = [],
          bS = [],
          dW = [],
          PW = [],
          RW = [],
          iS = [],
          eW = [],
          EW = [],
          QW = [],
          rS = [],
          gS = [],
          tS = [],
          TW = [],
          aS = [],
          kS = [],
          qS = [],
          VW = [],
          NW = [],
          DW = [],
          LW = [],
          mS = [],
          OW = [],
          xS = [],
          ZW = [],
          oW = [],
          YW = [],
          MW = [],
          cS = [],
          GW = [],
          zS = [],
          IW = [],
          fW = [],
          yS = [],
          sW = [],
          nW = [];
        return FF = class extends UF {
          get target() {
            return this.ruF
          }
          set target(FF) {
            this.setTarget(FF)
          }
          get targetHost() {
            return this._targetHost
          }
          set targetHost(FF) {
            FF && this.setTarget(FF)
          }
          getTarget() {
            return this.target
          }
          get position() {
            return this._position
          }
          set position(FF) {
            this.setPosition(FF)
          }
          set upVector(FF) {
            this._upToYMatrix || (this._yToUpMatrix = new hF.b, this._upToYMatrix = new hF.b, this._upVector = hF.r.Zero()), FF.normalize(), this._upVector.fdF(FF), this.setMatUp()
          }
          get upVector() {
            return this._upVector
          }
          setMatUp() {
            hF.b.RotationAlignToRef(hF.r.UpReadOnly, this._upVector, this._yToUpMatrix), hF.b.RotationAlignToRef(this._upVector, hF.r.UpReadOnly, this._upToYMatrix)
          }
          get inertialAlphaOffset() {
            if (0 !== this._inertialAlphaOffset) return this._inertialAlphaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.x) return this.movement.rotationAccumulatedPixels.x;
            const FF = this.movement.rotationDeltaCurrentFrame.x;
            return Math.abs(FF) < this._rotationEpsilon ? 0 : FF
          }
          set inertialAlphaOffset(FF) {
            this._inertialAlphaOffset = FF, 0 === FF && this.movement.resetRotationVelocity()
          }
          get inertialBetaOffset() {
            if (0 !== this._inertialBetaOffset) return this._inertialBetaOffset;
            if (0 !== this.movement.rotationAccumulatedPixels.y) return this.movement.rotationAccumulatedPixels.y;
            const FF = this.movement.rotationDeltaCurrentFrame.y;
            return Math.abs(FF) < this._rotationEpsilon ? 0 : FF
          }
          set inertialBetaOffset(FF) {
            this._inertialBetaOffset = FF, 0 === FF && this.movement.resetRotationVelocity()
          }
          get inertialRadiusOffset() {
            if (0 !== this._inertialRadiusOffset) return this._inertialRadiusOffset;
            if (0 !== this.movement.zoomAccumulatedPixels) return this.movement.zoomAccumulatedPixels;
            const FF = this.movement.zoomDeltaCurrentFrame;
            return Math.abs(FF) < this._rotationEpsilon ? 0 : FF
          }
          set inertialRadiusOffset(FF) {
            this._inertialRadiusOffset = FF, 0 === FF && this.movement.resetZoomVelocity()
          }
          get panningInertia() {
            return this._panningInertia
          }
          set panningInertia(FF) {
            this._panningInertia = FF, this.movement && (this.movement.panInertia = FF)
          }
          get inertia() {
            return this._inertia
          }
          set inertia(FF) {
            this._inertia = FF, this.movement && (this.movement.rotationInertia = FF, this.movement.zoomInertia = FF)
          }
          get angularSensibilityX() {
            const FF = this.inputs.attached.pointers;
            return FF ? FF.angularSensibilityX : 0
          }
          set angularSensibilityX(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.angularSensibilityX = FF)
          }
          get angularSensibilityY() {
            const FF = this.inputs.attached.pointers;
            return FF ? FF.angularSensibilityY : 0
          }
          set angularSensibilityY(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.angularSensibilityY = FF)
          }
          get pinchPrecision() {
            const FF = this.inputs.attached.pointers;
            return FF ? FF.pinchPrecision : 0
          }
          set pinchPrecision(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.pinchPrecision = FF)
          }
          get pinchDeltaPercentage() {
            const FF = this.inputs.attached.pointers;
            return FF ? FF.pinchDeltaPercentage : 0
          }
          set pinchDeltaPercentage(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.pinchDeltaPercentage = FF)
          }
          get useNaturalPinchZoom() {
            const FF = this.inputs.attached.pointers;
            return !!FF && FF.useNaturalPinchZoom
          }
          set useNaturalPinchZoom(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.useNaturalPinchZoom = FF)
          }
          get panningSensibility() {
            const FF = this.inputs.attached.pointers;
            return FF ? FF.panningSensibility : 0
          }
          set panningSensibility(FF) {
            const WF = this.inputs.attached.pointers;
            WF && (WF.panningSensibility = FF)
          }
          get keysUp() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysUp : []
          }
          set keysUp(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysUp = FF)
          }
          get keysDown() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysDown : []
          }
          set keysDown(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysDown = FF)
          }
          get keysLeft() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysLeft : []
          }
          set keysLeft(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysLeft = FF)
          }
          get keysRight() {
            const FF = this.inputs.attached.keyboard;
            return FF ? FF.keysRight : []
          }
          set keysRight(FF) {
            const WF = this.inputs.attached.keyboard;
            WF && (WF.keysRight = FF)
          }
          get wheelPrecision() {
            const FF = this.inputs.attached.mousewheel;
            return FF ? FF.wheelPrecision : 0
          }
          set wheelPrecision(FF) {
            const WF = this.inputs.attached.mousewheel;
            WF && (WF.wheelPrecision = FF)
          }
          get zoomToMouseLocation() {
            const FF = this.inputs.attached.mousewheel;
            return !!FF && FF.zoomToMouseLocation
          }
          set zoomToMouseLocation(FF) {
            const WF = this.inputs.attached.mousewheel;
            WF && (WF.zoomToMouseLocation = FF)
          }
          get wheelDeltaPercentage() {
            const FF = this.inputs.attached.mousewheel;
            return FF ? FF.wheelDeltaPercentage : 0
          }
          set wheelDeltaPercentage(FF) {
            const WF = this.inputs.attached.mousewheel;
            WF && (WF.wheelDeltaPercentage = FF)
          }
          get _useCtrlForPanning() {
            return this._useCtrlForPanningInternal
          }
          set _useCtrlForPanning(FF) {
            this._useCtrlForPanningInternal = FF;
            const WF = this.movement.input,
              SF = WF.getEntry("keyboard", "pan", {
                modifiers: {
                  ctrl: !0
                }
              });
            !FF && SF ? WF.inputMap.splice(WF.inputMap.indexOf(SF), 1) : FF && !SF && WF.addEntry({
              source: "keyboard",
              modifiers: {
                ctrl: !0
              },
              interaction: "pan"
            });
            const CF = WF.getEntry("pointer", "pan", {
              modifiers: {
                ctrl: !0
              }
            });
            !FF && CF ? WF.inputMap.splice(WF.inputMap.indexOf(CF), 1) : FF && !CF && WF.addEntry({
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
          set _panningMouseButton(FF) {
            this._panningMouseButtonInternal = FF;
            const WF = this.movement.input.getEntry("pointer", "pan", {
              modifiers: {}
            });
            WF && (WF.button = FF)
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
          set useBouncingBehavior(FF) {
            FF !== this.useBouncingBehavior && (FF ? (this._bouncingBehavior = new gW, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
          }
          get framingBehavior() {
            return this._framingBehavior
          }
          get useFramingBehavior() {
            return null != this._framingBehavior
          }
          set useFramingBehavior(FF) {
            FF !== this.useFramingBehavior && (FF ? (this._framingBehavior = new tW, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
          }
          get autoRotationBehavior() {
            return this._autoRotationBehavior
          }
          get useAutoRotationBehavior() {
            return null != this._autoRotationBehavior
          }
          set useAutoRotationBehavior(FF) {
            FF !== this.useAutoRotationBehavior && (FF ? (this._autoRotationBehavior = new EF, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
          }
          constructor(FF, WF, SF, AF, bW, dF) {
            var PF;
            let RF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
            super(FF, hF.r.Zero(), dF, RF), PF = this, this.alpha = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, void 0)), this.beta = ((0, CF.k)(this, vW), (0, CF.k)(this, JF, void 0)), this.radius = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, void 0)), this.overrideCloneAlphaBetaRadius = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, void 0)), this.ruF = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, void 0)), this._targetHost = ((0, CF.k)(this, AW), (0, CF.k)(this, uW, void 0)), this._upToYMatrix = (0, CF.k)(this, hW), this._inertialAlphaOffset = 0, this._inertialBetaOffset = 0, this._inertialRadiusOffset = 0, this.lowerAlphaLimit = (0, CF.k)(this, bS, null), this.upperAlphaLimit = ((0, CF.k)(this, dW), (0, CF.k)(this, PW, null)), this.lowerBetaLimit = ((0, CF.k)(this, RW), (0, CF.k)(this, iS, .01)), this.upperBetaLimit = ((0, CF.k)(this, eW), (0, CF.k)(this, EW, Math.PI - .01)), this.lowerRadiusLimit = ((0, CF.k)(this, QW), (0, CF.k)(this, rS, null)), this.upperRadiusLimit = ((0, CF.k)(this, gS), (0, CF.k)(this, tS, null)), this.lowerTargetYLimit = ((0, CF.k)(this, TW), (0, CF.k)(this, aS, -1 / 0)), this.inertialPanningX = ((0, CF.k)(this, kS), (0, CF.k)(this, qS, 0)), this.inertialPanningY = ((0, CF.k)(this, VW), (0, CF.k)(this, NW, 0)), this.pinchToPanMaxDistance = ((0, CF.k)(this, DW), (0, CF.k)(this, LW, 20)), this.panningDistanceLimit = ((0, CF.k)(this, mS), (0, CF.k)(this, OW, null)), this.panningOriginTarget = ((0, CF.k)(this, xS), (0, CF.k)(this, ZW, hF.r.Zero())), this._panningInertia = ((0, CF.k)(this, oW), .9), this._inertia = .9, this.zoomOnFactor = (0, CF.k)(this, YW, 1), this.targetScreenOffset = ((0, CF.k)(this, MW), (0, CF.k)(this, cS, hF.n.Zero())), this.allowUpsideDown = ((0, CF.k)(this, GW), (0, CF.k)(this, zS, !0)), this.useInputToRestoreState = ((0, CF.k)(this, IW), (0, CF.k)(this, fW, !0)), this.restoreStateInterpolationFactor = ((0, CF.k)(this, yS), (0, CF.k)(this, sW, 0)), this._currentInterpolationFactor = ((0, CF.k)(this, nW), 0), this._viewMatrix = new hF.b, this._useCtrlForPanningInternal = !0, this._panningMouseButtonInternal = 2, this.panningAxis = new hF.r(1, 1, 0), this._transformedDirection = new hF.r, this.mapPanning = !1, this._isInterpolating = !1, this.onMeshTargetChangedObservable = new uF.b, this.checkCollisions = !1, this.collisionRadius = new hF.r(.5, .5, .5), this._previousPosition = hF.r.Zero(), this._collisionVelocity = hF.r.Zero(), this._newPosition = hF.r.Zero(), this._computationVector = hF.r.Zero(), this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget = new hF.r(NaN, NaN, NaN), this._goalTargetScreenOffset = new hF.n(NaN, NaN), this._onCollisionPositionChange = function(FF, WF) {
              let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              SF ? (PF.setPosition(WF), PF.gS && PF.gS(SF)) : PF._previousPosition.fdF(PF._position);
              const CF = Math.cos(PF.alpha),
                AF = Math.sin(PF.alpha),
                uF = Math.cos(PF.beta);
              let hF = Math.sin(PF.beta);
              0 === hF && (hF = 1e-4);
              const bW = PF._getTargetPosition();
              PF._computationVector.FhF(PF.radius * CF * hF, PF.radius * uF, PF.radius * AF * hF), bW.addToRef(PF._computationVector, PF._newPosition), PF._position.fdF(PF._newPosition);
              let dF = PF.upVector;
              PF.allowUpsideDown && PF.beta < 0 && (dF = dF.clone(), dF = dF.Fh()), PF._computeViewMatrix(PF._position, bW, dF), PF._viewMatrix.addAtIndex(12, PF.targetScreenOffset.x), PF._viewMatrix.addAtIndex(13, PF.targetScreenOffset.y), PF._collisionTriggered = !1
            }, this.ruF = hF.r.Zero(), bW && this.setTarget(bW), this.alpha = WF, this.beta = SF, this.radius = AF, this.getViewMatrix(), this.inputs = new cW(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new fF(this.OWF(), this._position), this.movement.rotationInertia = this._inertia, this.movement.zoomInertia = this._inertia, this.movement.panInertia = this._panningInertia
          }
          _initCache() {
            super._initCache(), this._cache.ruF = new hF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = hF.n.Zero()
          }
          _updateCache(FF) {
            FF || super._updateCache(), this._cache.ruF.fdF(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.fdF(this.targetScreenOffset)
          }
          _getTargetPosition() {
            if (this._targetHost && this._targetHost.getAbsolutePosition) {
              const FF = this._targetHost.getAbsolutePosition();
              this._targetBoundingCenter ? FF.addToRef(this._targetBoundingCenter, this.ruF) : this.ruF.fdF(FF)
            }
            const FF = this._getLockedTargetPosition();
            return FF || this.ruF
          }
          storeState() {
            return this._storedAlpha = this.alpha, this._storedBeta = this.beta, this._storedRadius = this.radius, this._storedTarget = this._getTargetPosition().clone(), this._storedTargetScreenOffset = this.targetScreenOffset.clone(), super.storeState()
          }
          _restoreStateValues() {
            return this.hasStateStored() && this.restoreStateInterpolationFactor > eF.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreStateInterpolationFactor), !0) : !!super._restoreStateValues() && (this.setTarget(this._storedTarget.clone()), this.alpha = this._storedAlpha, this.beta = this._storedBeta, this.radius = this._storedRadius, this.targetScreenOffset = this._storedTargetScreenOffset.clone(), this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, !0)
          }
          stopInterpolation() {
            this._goalAlpha = NaN, this._goalBeta = NaN, this._goalRadius = NaN, this._goalTarget.set(NaN, NaN, NaN), this._goalTargetScreenOffset.set(NaN, NaN)
          }
          interpolateTo() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
              WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
              SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
              CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
              AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
              uF = arguments.length > 5 ? arguments[5] : void 0;
            this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != uF ? this._currentInterpolationFactor = uF : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolationFactor = this.restoreStateInterpolationFactor : this._currentInterpolationFactor = .1, this._goalAlpha = yW(FF, this._goalAlpha), this._goalBeta = yW(WF, this._goalBeta), this._goalRadius = yW(SF, this._goalRadius), this._goalTarget.set(yW(CF.x, this._goalTarget.x), yW(CF.y, this._goalTarget.y), yW(CF.z, this._goalTarget.z)), this._goalTargetScreenOffset.set(yW(AF.x, this._goalTargetScreenOffset.x), yW(AF.y, this._goalTargetScreenOffset.y)), this._goalAlpha = (0, bW.Clamp)(this._goalAlpha, this.lowerAlphaLimit ?? -1 / 0, this.upperAlphaLimit ?? 1 / 0), this._goalBeta = (0, bW.Clamp)(this._goalBeta, this.lowerBetaLimit ?? -1 / 0, this.upperBetaLimit ?? 1 / 0), this._goalRadius = (0, bW.Clamp)(this._goalRadius, this.lowerRadiusLimit ?? -1 / 0, this.upperRadiusLimit ?? 1 / 0), this._goalTarget.y = (0, bW.Clamp)(this._goalTarget.y, this.lowerTargetYLimit ?? -1 / 0, 1 / 0), this._isInterpolating = !0
          }
          _isSynchronizedViewMatrix() {
            return !!super._isSynchronizedViewMatrix() && (this._cache.ruF.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset))
          }
          attachControl(FF, WF) {
            let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            const AF = arguments;
            WF = qW.h.BackCompatCameraNoPreventDefault(AF), this._useCtrlForPanning = SF, this._panningMouseButton = CF, "boolean" === typeof AF[0] && (AF.length > 1 && (this._useCtrlForPanning = AF[1]), AF.length > 2 && (this._panningMouseButton = AF[2])), this.inputs.attachElement(WF), this._reset = () => {
              this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
            }
          }
          detachControl() {
            this.inputs.detachElement(), this._reset && this._reset()
          }
          _applyRotationAndZoomDelta(FF, WF, SF) {
            const CF = this.invertRotation ? -1 : 1;
            let AF = FF * this._calculateHandednessMultiplier();
            this.beta < 0 && (AF *= -1), this.alpha += AF * CF, this.beta += WF * CF, this.radius -= SF
          }
          _applyPanDelta(FF, WF) {
            const SF = hF.j.HC[0].FhF(FF, WF, WF);
            if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), SF.multiplyInPlace(this.panningAxis), hF.r.TransformNormalToRef(SF, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
              const FF = this.upVector,
                WF = hF.r.CrossToRef(this._transformedDirection, FF, this._transformedDirection);
              hF.r.CrossToRef(FF, WF, this._transformedDirection)
            } else this.panningAxis.y || (this._transformedDirection.y = 0);
            if (!this._targetHost)
              if (null !== this.panningDistanceLimit) {
                this._transformedDirection.addInPlace(this.ruF);
                hF.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.ruF.fdF(this._transformedDirection)
              } else {
                if (this.parent) {
                  const FF = hF.j.Matrix[0];
                  this.parent.getWorldMatrix().getRotationMatrixToRef(FF), FF.transposeToRef(FF), hF.r.TransformCoordinatesToRef(this._transformedDirection, FF, this._transformedDirection)
                }
                this.ruF.addInPlace(this._transformedDirection)
              }
          }
          _checkInputs() {
            if (this._collisionTriggered) return;
            this.inputs.checkInputs();
            let FF = !1;
            this.movement.computeCurrentFrameDeltas();
            const WF = this.movement.rotationDeltaCurrentFrame,
              SF = this.movement.zoomDeltaCurrentFrame,
              CF = this.movement.panDeltaCurrentFrame;
            if (0 === WF.x && 0 === WF.y && 0 === SF && 0 === CF.x && 0 === CF.y || (FF = !0, 0 === WF.x && 0 === WF.y && 0 === SF || this._applyRotationAndZoomDelta(WF.x, WF.y, SF), 0 === CF.x && 0 === CF.y || this._applyPanDelta(CF.x, CF.y)), 0 === this._inertialAlphaOffset && 0 === this._inertialBetaOffset && 0 === this._inertialRadiusOffset || (this._applyRotationAndZoomDelta(this._inertialAlphaOffset, this._inertialBetaOffset, this._inertialRadiusOffset), this._inertialAlphaOffset *= this.inertia, this._inertialBetaOffset *= this.inertia, this._inertialRadiusOffset *= this.inertia, Math.abs(this._inertialAlphaOffset) < this._rotationEpsilon && (this._inertialAlphaOffset = 0), Math.abs(this._inertialBetaOffset) < this._rotationEpsilon && (this._inertialBetaOffset = 0), Math.abs(this._inertialRadiusOffset) < this._rotationEpsilon && (this._inertialRadiusOffset = 0), FF = !0), 0 !== this.inertialPanningX || 0 !== this.inertialPanningY) {
              this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
              const WF = this._panningEpsilon;
              Math.abs(this.inertialPanningX) < WF && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < WF && (this.inertialPanningY = 0), FF = !0
            }
            if (FF) this.stopInterpolation();
            else if (this._isInterpolating) {
              let FF = !1;
              const WF = this._scene.sC().getDeltaTime() / 1e3,
                SF = 1 - Math.pow(2, -WF / this._currentInterpolationFactor),
                CF = yW(this._goalRadius, this.radius);
              if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
                const WF = hF.j.HC[0].set(yW(this._goalTarget.x, this.ruF.x), yW(this._goalTarget.y, this.ruF.y), yW(this._goalTarget.z, this.ruF.z));
                hF.r.LerpToRef(this.target, WF, SF, this.ruF), 10 * hF.r.Distance(this.target, WF) / CF < eF.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.fdF(WF), this.setTarget(this.target, !1, !0, !0)) : FF = !0
              }
              if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
                const WF = hF.e.RotationAlphaBetaGammaToRef(yW(this._goalAlpha, this.alpha), yW(this._goalBeta, this.beta), 0, hF.j.Quaternion[0]),
                  CF = hF.e.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, hF.j.Quaternion[1]),
                  AF = hF.e.SlerpToRef(CF, WF, SF, hF.j.Quaternion[2]);
                AF.normalize();
                const uF = AF.toAlphaBetaGammaToRef(hF.j.HC[0]);
                if (this.alpha = uF.x, this.beta = uF.y, AF.isApprox(WF, eF.c / 5)) {
                  this._goalAlpha = NaN, this._goalBeta = NaN;
                  const FF = WF.toAlphaBetaGammaToRef(hF.j.HC[0]);
                  this.alpha = FF.x, this.beta = FF.y
                } else FF = !0
              }
              if (isNaN(this._goalRadius) || (this.radius += (CF - this.radius) * SF, Math.abs(CF / this.radius - 1) < eF.c ? (this._goalRadius = NaN, this.radius = CF) : FF = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
                const WF = hF.j.Vector2[0].set(yW(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), yW(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
                hF.n.LerpToRef(this.targetScreenOffset, WF, SF, this.targetScreenOffset), hF.n.Distance(this.targetScreenOffset, WF) < eF.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.fdF(WF)) : FF = !0
              }
              this._isInterpolating = FF
            }
            this._checkLimits(), super._checkInputs()
          }
          _checkLimits() {
            null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === this.upperBetaLimit ? this.allowUpsideDown && this.beta < -Math.PI && (this.beta = this.beta + 2 * Math.PI) : this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), null !== this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), null !== this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), null !== this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit, this.inertialRadiusOffset = 0), null !== this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit, this.inertialRadiusOffset = 0), this.target.y = Math.max(this.target.y, this.lowerTargetYLimit)
          }
          rebuildAnglesAndRadius() {
            this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hF.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.radius = this._computationVector.length(), 0 === this.radius && (this.radius = 1e-4);
            const FF = this.alpha;
            var WF, SF;
            this.alpha = function(FF) {
              let WF = Math.PI / 2;
              return 0 === FF.x && 0 === FF.z || (WF = Math.acos(FF.x / Math.sqrt(Math.pow(FF.x, 2) + Math.pow(FF.z, 2)))), FF.z < 0 && (WF = 2 * Math.PI - WF), WF
            }(this._computationVector), this.beta = (WF = this._computationVector.y, SF = this.radius, Math.acos(WF / SF));
            const CF = Math.round((FF - this.alpha) / (2 * Math.PI));
            this.alpha += 2 * CF * Math.PI, this._checkLimits()
          }
          setPosition(FF) {
            this._position.equals(FF) || (this._position.fdF(FF), this.rebuildAnglesAndRadius())
          }
          setTarget(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (CF = this.overrideCloneAlphaBetaRadius ?? CF, FF.computeWorldMatrix) WF && FF.JWF ? this._targetBoundingCenter = FF.JWF().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, FF.computeWorldMatrix(), this._targetHost = FF, this.ruF = this._getTargetPosition(), this.onMeshTargetChangedObservable.notifyObservers(this._targetHost);
            else {
              const WF = FF,
                CF = this._getTargetPosition();
              if (CF && !SF && CF.equals(WF)) return;
              this._targetHost = null, this.ruF = WF, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
            }
            CF || this.rebuildAnglesAndRadius()
          }
          _getViewMatrix() {
            const FF = Math.cos(this.alpha),
              WF = Math.sin(this.alpha),
              SF = Math.cos(this.beta);
            let CF = Math.sin(this.beta);
            0 === CF && (CF = 1e-4), 0 === this.radius && (this.radius = 1e-4);
            const AF = this._getTargetPosition();
            if (this._computationVector.FhF(this.radius * FF * CF, this.radius * SF, this.radius * WF * CF), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hF.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVector), AF.addToRef(this._computationVector, this._newPosition), this.OWF().collisionsEnabled && this.checkCollisions) {
              const FF = this.OWF().collisionCoordinator;
              this._collider || (this._collider = FF.createCollider()), this._collider._radius = this.collisionRadius, this._newPosition.subtractToRef(this._position, this._collisionVelocity), this._collisionTriggered = !0, FF.getNewPosition(this._position, this._collisionVelocity, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
            } else {
              this._position.fdF(this._newPosition);
              let FF = this.upVector;
              this.allowUpsideDown && CF < 0 && (FF = FF.Fh()), this._computeViewMatrix(this._position, AF, FF), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
            }
            return this._currentTarget.fdF(AF), this._viewMatrix
          }
          zoomOn(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            FF = FF || this.OWF().meshes;
            const SF = PF.d.MinMax(FF);
            let CF = this._calculateLowerRadiusFromModelBoundingSphere(SF.min, SF.max);
            if (CF = Math.max(Math.min(CF, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = CF * this.zoomOnFactor, this.mode === TF.c.ORTHOGRAPHIC_CAMERA) {
              const FF = this.OWF().sC().getAspectRatio(this),
                WF = CF * this.zoomOnFactor / 2;
              this.orthoLeft = -WF * FF, this.orthoRight = WF * FF, this.orthoBottom = -WF, this.orthoTop = WF
            }
            this.focusOn({
              min: SF.min,
              max: SF.max,
              distance: CF
            }, WF)
          }
          focusOn(FF) {
            let WF, SF, CF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (void 0 === FF.min) {
              const CF = FF || this.OWF().meshes;
              WF = PF.d.MinMax(CF), SF = hF.r.Distance(WF.min, WF.max)
            } else {
              WF = FF, SF = FF.distance
            }
            this.ruF = PF.d.Center(WF), CF || (this.maxZ = 2 * SF)
          }
          createRigCamera(WF, SF) {
            let CF = 0;
            switch (this.cameraRigMode) {
              case TF.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case TF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case TF.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case TF.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case TF.c.RIG_MODE_VR:
                CF = this._cameraRigParams.stereoHalfAngle * (0 === SF ? 1 : -1);
                break;
              case TF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                CF = this._cameraRigParams.stereoHalfAngle * (0 === SF ? -1 : 1)
            }
            const AF = new FF(WF, this.alpha + CF, this.beta, this.radius, this.ruF, this.OWF());
            return AF._cameraRigParams = {}, AF.isRigCamera = !0, AF.rigParent = this, AF.upVector = this.upVector, AF.mode = this.mode, AF.orthoLeft = this.orthoLeft, AF.orthoRight = this.orthoRight, AF.orthoBottom = this.orthoBottom, AF.orthoTop = this.orthoTop, AF
          }
          _updateRigCameras() {
            const FF = this._rigCameras[0],
              WF = this._rigCameras[1];
            switch (FF.beta = WF.beta = this.beta, this.cameraRigMode) {
              case TF.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case TF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case TF.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case TF.c.RIG_MODE_STEREOSCOPIC_INTERLACED:
              case TF.c.RIG_MODE_VR:
                FF.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, WF.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
                break;
              case TF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
                FF.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, WF.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
            }
            super._updateRigCameras()
          }
          _calculateLowerRadiusFromModelBoundingSphere(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            const CF = hF.r.Distance(FF, WF),
              AF = this.OWF().sC().getAspectRatio(this),
              uF = Math.tan(this.fov / 2),
              bW = uF * AF,
              dF = .5 * CF * SF,
              PF = dF * Math.sqrt(1 + 1 / (bW * bW)),
              RF = dF * Math.sqrt(1 + 1 / (uF * uF));
            return Math.max(PF, RF)
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "ArcRotateCamera"
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(UF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], dF = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.G)("target")], QF = [(0, AF.x)("targetHost")], rW = [(0, AF.H)()], kW = [(0, AF.H)()], VF = [(0, AF.H)()], NF = [(0, AF.H)()], DF = [(0, AF.H)()], LF = [(0, AF.H)()], mW = [(0, AF.H)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], oF = [(0, AF.H)()], YF = [(0, AF.H)()], MF = [(0, AF.H)()], GF = [(0, AF.H)()], zW = [(0, AF.G)()], IF = [(0, AF.H)()], sF = [(0, AF.H)()], nF = [(0, AF.H)()], HF = [(0, AF.E)()], KF = [(0, AF.H)()], wF = [(0, AF.H)()], XF = [(0, AF.H)()], (0, CF.j)(FF, null, rW, {
            kind: "getter",
            name: "inertialAlphaOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "inertialAlphaOffset" in FF,
              get: FF => FF.inertialAlphaOffset
            },
            metadata: uF
          }, null, BF), (0, CF.j)(FF, null, kW, {
            kind: "getter",
            name: "inertialBetaOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "inertialBetaOffset" in FF,
              get: FF => FF.inertialBetaOffset
            },
            metadata: uF
          }, null, BF), (0, CF.j)(FF, null, VF, {
            kind: "getter",
            name: "inertialRadiusOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "inertialRadiusOffset" in FF,
              get: FF => FF.inertialRadiusOffset
            },
            metadata: uF
          }, null, BF), (0, CF.j)(FF, null, IF, {
            kind: "getter",
            name: "panningInertia",
            static: !1,
            private: !1,
            access: {
              has: FF => "panningInertia" in FF,
              get: FF => FF.panningInertia
            },
            metadata: uF
          }, null, BF), (0, CF.j)(FF, null, sF, {
            kind: "getter",
            name: "zoomToMouseLocation",
            static: !1,
            private: !1,
            access: {
              has: FF => "zoomToMouseLocation" in FF,
              get: FF => FF.zoomToMouseLocation
            },
            metadata: uF
          }, null, BF), (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "alpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "alpha" in FF,
              get: FF => FF.alpha,
              set: (FF, WF) => {
                FF.alpha = WF
              }
            },
            metadata: uF
          }, jW, vW), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "beta",
            static: !1,
            private: !1,
            access: {
              has: FF => "beta" in FF,
              get: FF => FF.beta,
              set: (FF, WF) => {
                FF.beta = WF
              }
            },
            metadata: uF
          }, JF, pF), (0, CF.j)(null, null, dF, {
            kind: "field",
            name: "radius",
            static: !1,
            private: !1,
            access: {
              has: FF => "radius" in FF,
              get: FF => FF.radius,
              set: (FF, WF) => {
                FF.radius = WF
              }
            },
            metadata: uF
          }, lF, FW), (0, CF.j)(null, null, RF, {
            kind: "field",
            name: "overrideCloneAlphaBetaRadius",
            static: !1,
            private: !1,
            access: {
              has: FF => "overrideCloneAlphaBetaRadius" in FF,
              get: FF => FF.overrideCloneAlphaBetaRadius,
              set: (FF, WF) => {
                FF.overrideCloneAlphaBetaRadius = WF
              }
            },
            metadata: uF
          }, WW, SW), (0, CF.j)(null, null, iW, {
            kind: "field",
            name: "ruF",
            static: !1,
            private: !1,
            access: {
              has: FF => "ruF" in FF,
              get: FF => FF.ruF,
              set: (FF, WF) => {
                FF.ruF = WF
              }
            },
            metadata: uF
          }, CW, AW), (0, CF.j)(null, null, QF, {
            kind: "field",
            name: "_targetHost",
            static: !1,
            private: !1,
            access: {
              has: FF => "_targetHost" in FF,
              get: FF => FF._targetHost,
              set: (FF, WF) => {
                FF._targetHost = WF
              }
            },
            metadata: uF
          }, uW, hW), (0, CF.j)(null, null, NF, {
            kind: "field",
            name: "lowerAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "lowerAlphaLimit" in FF,
              get: FF => FF.lowerAlphaLimit,
              set: (FF, WF) => {
                FF.lowerAlphaLimit = WF
              }
            },
            metadata: uF
          }, bS, dW), (0, CF.j)(null, null, DF, {
            kind: "field",
            name: "upperAlphaLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "upperAlphaLimit" in FF,
              get: FF => FF.upperAlphaLimit,
              set: (FF, WF) => {
                FF.upperAlphaLimit = WF
              }
            },
            metadata: uF
          }, PW, RW), (0, CF.j)(null, null, LF, {
            kind: "field",
            name: "lowerBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "lowerBetaLimit" in FF,
              get: FF => FF.lowerBetaLimit,
              set: (FF, WF) => {
                FF.lowerBetaLimit = WF
              }
            },
            metadata: uF
          }, iS, eW), (0, CF.j)(null, null, mW, {
            kind: "field",
            name: "upperBetaLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "upperBetaLimit" in FF,
              get: FF => FF.upperBetaLimit,
              set: (FF, WF) => {
                FF.upperBetaLimit = WF
              }
            },
            metadata: uF
          }, EW, QW), (0, CF.j)(null, null, OF, {
            kind: "field",
            name: "lowerRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "lowerRadiusLimit" in FF,
              get: FF => FF.lowerRadiusLimit,
              set: (FF, WF) => {
                FF.lowerRadiusLimit = WF
              }
            },
            metadata: uF
          }, rS, gS), (0, CF.j)(null, null, xW, {
            kind: "field",
            name: "upperRadiusLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "upperRadiusLimit" in FF,
              get: FF => FF.upperRadiusLimit,
              set: (FF, WF) => {
                FF.upperRadiusLimit = WF
              }
            },
            metadata: uF
          }, tS, TW), (0, CF.j)(null, null, ZF, {
            kind: "field",
            name: "lowerTargetYLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "lowerTargetYLimit" in FF,
              get: FF => FF.lowerTargetYLimit,
              set: (FF, WF) => {
                FF.lowerTargetYLimit = WF
              }
            },
            metadata: uF
          }, aS, kS), (0, CF.j)(null, null, oF, {
            kind: "field",
            name: "inertialPanningX",
            static: !1,
            private: !1,
            access: {
              has: FF => "inertialPanningX" in FF,
              get: FF => FF.inertialPanningX,
              set: (FF, WF) => {
                FF.inertialPanningX = WF
              }
            },
            metadata: uF
          }, qS, VW), (0, CF.j)(null, null, YF, {
            kind: "field",
            name: "inertialPanningY",
            static: !1,
            private: !1,
            access: {
              has: FF => "inertialPanningY" in FF,
              get: FF => FF.inertialPanningY,
              set: (FF, WF) => {
                FF.inertialPanningY = WF
              }
            },
            metadata: uF
          }, NW, DW), (0, CF.j)(null, null, MF, {
            kind: "field",
            name: "pinchToPanMaxDistance",
            static: !1,
            private: !1,
            access: {
              has: FF => "pinchToPanMaxDistance" in FF,
              get: FF => FF.pinchToPanMaxDistance,
              set: (FF, WF) => {
                FF.pinchToPanMaxDistance = WF
              }
            },
            metadata: uF
          }, LW, mS), (0, CF.j)(null, null, GF, {
            kind: "field",
            name: "panningDistanceLimit",
            static: !1,
            private: !1,
            access: {
              has: FF => "panningDistanceLimit" in FF,
              get: FF => FF.panningDistanceLimit,
              set: (FF, WF) => {
                FF.panningDistanceLimit = WF
              }
            },
            metadata: uF
          }, OW, xS), (0, CF.j)(null, null, zW, {
            kind: "field",
            name: "panningOriginTarget",
            static: !1,
            private: !1,
            access: {
              has: FF => "panningOriginTarget" in FF,
              get: FF => FF.panningOriginTarget,
              set: (FF, WF) => {
                FF.panningOriginTarget = WF
              }
            },
            metadata: uF
          }, ZW, oW), (0, CF.j)(null, null, nF, {
            kind: "field",
            name: "zoomOnFactor",
            static: !1,
            private: !1,
            access: {
              has: FF => "zoomOnFactor" in FF,
              get: FF => FF.zoomOnFactor,
              set: (FF, WF) => {
                FF.zoomOnFactor = WF
              }
            },
            metadata: uF
          }, YW, MW), (0, CF.j)(null, null, HF, {
            kind: "field",
            name: "targetScreenOffset",
            static: !1,
            private: !1,
            access: {
              has: FF => "targetScreenOffset" in FF,
              get: FF => FF.targetScreenOffset,
              set: (FF, WF) => {
                FF.targetScreenOffset = WF
              }
            },
            metadata: uF
          }, cS, GW), (0, CF.j)(null, null, KF, {
            kind: "field",
            name: "allowUpsideDown",
            static: !1,
            private: !1,
            access: {
              has: FF => "allowUpsideDown" in FF,
              get: FF => FF.allowUpsideDown,
              set: (FF, WF) => {
                FF.allowUpsideDown = WF
              }
            },
            metadata: uF
          }, zS, IW), (0, CF.j)(null, null, wF, {
            kind: "field",
            name: "useInputToRestoreState",
            static: !1,
            private: !1,
            access: {
              has: FF => "useInputToRestoreState" in FF,
              get: FF => FF.useInputToRestoreState,
              set: (FF, WF) => {
                FF.useInputToRestoreState = WF
              }
            },
            metadata: uF
          }, fW, yS), (0, CF.j)(null, null, XF, {
            kind: "field",
            name: "restoreStateInterpolationFactor",
            static: !1,
            private: !1,
            access: {
              has: FF => "restoreStateInterpolationFactor" in FF,
              get: FF => FF.restoreStateInterpolationFactor,
              set: (FF, WF) => {
                FF.restoreStateInterpolationFactor = WF
              }
            },
            metadata: uF
          }, sW, nW), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      nF = !1;
    nF || (nF = !0, dF.e.AddNodeConstructor("ArcRotateCamera", ((FF, WF) => () => new sF(FF, 0, 0, 1, hF.r.Zero(), WF))), (0, GF.f)("BABYLON.ArcRotateCamera", sF))
  },
  38214: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF.c
    });
    var CF = SF(38223);
    (0, CF.g)()
  },
  38223: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => RF,
      g: () => eF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(35678),
      bW = SF(38230),
      dF = SF(38187),
      PF = SF(35660);
    let RF = (() => {
        var FF;
        let WF, SF, dF = bW.c,
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        return FF = class extends dF {
          constructor(FF, WF, SF, AF) {
            super(FF, SF, AF), this.groundColor = (0, CF.k)(this, PF, new hF.e(0, 0, 0)), this.direction = ((0, CF.k)(this, RF), (0, CF.k)(this, iW, void 0)), (0, CF.k)(this, eF), this.direction = WF || uF.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(FF) {
            return this.direction = uF.r.Normalize(FF.subtract(uF.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", SF.x, SF.y, SF.z, 0, WF), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WF), this
          }
          transferToNodeMaterialEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return FF.setFloat3(WF, SF.x, SF.y, SF.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uF.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bW.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(FF, WF) {
            FF["HEMILIGHT" + WF] = !0
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(dF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.o)()], SF = [(0, AF.G)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "groundColor" in FF,
              get: FF => FF.groundColor,
              set: (FF, WF) => {
                FF.groundColor = WF
              }
            },
            metadata: uF
          }, PF, RF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: FF => "direction" in FF,
              get: FF => FF.direction,
              set: (FF, WF) => {
                FF.direction = WF
              }
            },
            metadata: uF
          }, iW, eF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      iW = !1;

    function eF() {
      iW || (iW = !0, dF.e.AddNodeConstructor("Light_Type_3", ((FF, WF) => () => new RF(FF, uF.r.Zero(), WF))), (0, PF.f)("BABYLON.HemisphericLight", RF))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);